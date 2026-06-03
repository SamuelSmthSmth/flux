const fs = require('fs');
let content = fs.readFileSync('src/components/Dashboard.tsx', 'utf8');

// 1. FieldDoc Interface
content = content.replace(
`  formal_statement: string;
  rigorous_proof: string;`,
`  formal_statement?: string;
  rigorous_proof?: string;
  markdown?: string;`
);

// 2. fetchData mapping
content = content.replace(
`          rigorous_proof: d.data().rigorous_proof ?? '',
          geogebra: d.data().geogebra,`,
`          rigorous_proof: d.data().rigorous_proof ?? '',
          markdown: d.data().markdown ?? '',
          geogebra: d.data().geogebra,`
);

// 3. SectionHeading
content = content.replace(
`// ─── Reusable Detail Heading ──────────────────────────────────
function SectionHeading({ title, id, level = 3 }: { title: React.ReactNode; id?: string; level?: number }) {
  return (
    <div id={id} className="flex items-center w-full mt-24 mb-12 opacity-80 scroll-mt-4">
      <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent flex-1"></div>
      <h2 className="text-2xl md:text-3xl font-bold tracking-[0.2em] uppercase text-slate-200 px-8 text-center">{title}</h2>
      <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent flex-1"></div>
    </div>
  );
}`,
`// ─── Reusable Detail Heading ──────────────────────────────────
function SectionHeading({ title, id, level = 3 }: { title: React.ReactNode; id?: string; level?: number }) {
  if (level === 4) {
    return (
      <div id={id} className="flex items-center w-full mt-16 mb-8 opacity-80 scroll-mt-4">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent flex-1"></div>
        <h3 className="text-xl md:text-2xl font-bold tracking-[0.15em] uppercase text-slate-300 px-6 text-center">{title}</h3>
        <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent flex-1"></div>
      </div>
    );
  }
  return (
    <div id={id} className="flex items-center w-full mt-24 mb-12 opacity-80 scroll-mt-4">
      <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent flex-1"></div>
      <h2 className="text-2xl md:text-3xl font-bold tracking-[0.2em] uppercase text-slate-200 px-8 text-center">{title}</h2>
      <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent flex-1"></div>
    </div>
  );
}`
);

// 4. markdownHeadingComponents
content = content.replace(
`function markdownHeadingComponents(sectionSlug: string) {
  const factory = (Tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6') =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function HeadingWithId(props: any) {
      // Extract pure string text for ID generation
      const extractText = (node: any): string => {
        if (typeof node === 'string') return node;
        if (typeof node === 'number') return String(node);
        if (Array.isArray(node)) return node.map(extractText).join('');
        if (node && node.props && node.props.children) return extractText(node.props.children);
        return '';
      };
      
      const text = extractText(props.children);
      const id = \`toc-\${sectionSlug}-\${slugify(text)}\`;
      
      // Render all headings as fancy SectionHeading components
      if (Tag === 'h1' || Tag === 'h2' || Tag === 'h3') {
        return <SectionHeading title={props.children} id={id} level={3} />;
      }
      if (Tag === 'h4' || Tag === 'h5' || Tag === 'h6') {
        return <SectionHeading title={props.children} id={id} level={4} />;
      }
      return <Tag id={id} {...props} />;
    };
    
  return { 
    h1: factory('h1'), 
    h2: factory('h2'), 
    h3: factory('h3'), 
    h4: factory('h4'),
    h5: factory('h5'),
    h6: factory('h6')
  };
}`,
`function markdownHeadingComponents(sectionSlug: string) {
  const factory = (Tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6') =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function HeadingWithId(props: any) {
      const extractText = (node: any): string => {
        if (typeof node === 'string') return node;
        if (typeof node === 'number') return String(node);
        if (Array.isArray(node)) return node.map(extractText).join('');
        if (node && node.props && node.props.children) return extractText(node.props.children);
        return '';
      };
      
      const text = extractText(props.children);
      const id = \`toc-\${sectionSlug}-\${slugify(text)}\`;
      
      if (Tag === 'h1' || Tag === 'h2' || Tag === 'h3') {
        return <SectionHeading title={props.children} id={id} level={3} />;
      }
      if (Tag === 'h4' || Tag === 'h5' || Tag === 'h6') {
        return <SectionHeading title={props.children} id={id} level={4} />;
      }
      return <Tag id={id} {...props} />;
    };
    
  return { 
    h1: factory('h1'), 
    h2: factory('h2'), 
    h3: factory('h3'), 
    h4: factory('h4'),
    h5: factory('h5'),
    h6: factory('h6')
  };
}`
);

// 5. FieldsDetail sections
content = content.replace(
`  const sections = useMemo(() => {
    const s: { label: string; markdown: string }[] = [];
    if (item.formal_statement) s.push({ label: 'Formal Statement', markdown: item.formal_statement });
    if (item.rigorous_proof) s.push({ label: 'Rigorous Proof', markdown: item.rigorous_proof });
    if (item.geogebra) s.push({ label: 'GeoGebra Sandbox', markdown: '' });
    return s;
  }, [item]);`,
`  const sections = useMemo(() => {
    const s: { label: string; markdown: string }[] = [];
    if (item.markdown) {
      s.push({ label: 'Field', markdown: item.markdown });
    } else {
      if (item.formal_statement) s.push({ label: 'Formal Statement', markdown: item.formal_statement });
      if (item.rigorous_proof) s.push({ label: 'Rigorous Proof', markdown: item.rigorous_proof });
    }
    if (item.geogebra) s.push({ label: 'GeoGebra Sandbox', markdown: '' });
    return s;
  }, [item]);`
);

// 6. FieldsDetail rendering
content = content.replace(
`      <div className="dashboard-fields-content flex flex-col gap-y-8 pb-32">
        {/* Formal Statement */}
        {item.formal_statement && (
          <div className="flex flex-col">
            <SectionHeading title="Formal Statement" id={\`toc-\${slugify('Formal Statement')}\`} />
            <div className="dashboard-markdown text-lg leading-relaxed">
              <ReactMarkdown
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]}
                components={markdownHeadingComponents(slugify('Formal Statement'))}
              >
                {formatMathText(item.formal_statement)}
              </ReactMarkdown>
            </div>
          </div>
        )}

        {/* Rigorous Proof */}
        {item.rigorous_proof && (
          <div className="flex flex-col">
            <SectionHeading title="Rigorous Proof" id={\`toc-\${slugify('Rigorous Proof')}\`} />
            <div className="dashboard-markdown text-lg leading-relaxed">
              <ReactMarkdown
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]}
                components={markdownHeadingComponents(slugify('Rigorous Proof'))}
              >
                {formatMathText(item.rigorous_proof)}
              </ReactMarkdown>
            </div>
          </div>
        )}`,
`      <div className="dashboard-fields-content flex flex-col gap-y-8 pb-32">
        {item.markdown ? (
          <div className="flex flex-col">
            <div className="dashboard-markdown text-lg leading-relaxed">
              <ReactMarkdown
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]}
                components={markdownHeadingComponents(slugify('Field'))}
              >
                {formatMathText(item.markdown)}
              </ReactMarkdown>
            </div>
          </div>
        ) : (
          <>
            {/* Formal Statement */}
            {item.formal_statement && (
              <div className="flex flex-col">
                <SectionHeading title="Formal Statement" id={\`toc-\${slugify('Formal Statement')}\`} />
                <div className="dashboard-markdown text-lg leading-relaxed">
                  <ReactMarkdown
                    remarkPlugins={[remarkMath]}
                    rehypePlugins={[rehypeKatex]}
                    components={markdownHeadingComponents(slugify('Formal Statement'))}
                  >
                    {formatMathText(item.formal_statement)}
                  </ReactMarkdown>
                </div>
              </div>
            )}

            {/* Rigorous Proof */}
            {item.rigorous_proof && (
              <div className="flex flex-col">
                <SectionHeading title="Rigorous Proof" id={\`toc-\${slugify('Rigorous Proof')}\`} />
                <div className="dashboard-markdown text-lg leading-relaxed">
                  <ReactMarkdown
                    remarkPlugins={[remarkMath]}
                    rehypePlugins={[rehypeKatex]}
                    components={markdownHeadingComponents(slugify('Rigorous Proof'))}
                  >
                    {formatMathText(item.rigorous_proof)}
                  </ReactMarkdown>
                </div>
              </div>
            )}
          </>
        )}`
);

// 7. Fallback check
content = content.replace(
`        {/* Fallback if nothing is present */}
        {!item.formal_statement && !item.rigorous_proof && !item.geogebra && (`,
`        {/* Fallback if nothing is present */}
        {!item.markdown && !item.formal_statement && !item.rigorous_proof && !item.geogebra && (`
);

fs.writeFileSync('src/components/Dashboard.tsx', content);
console.log('Restoration complete.');
