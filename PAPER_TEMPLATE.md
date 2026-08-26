<!--
════════════════════════════════════════════════════════════════════
  FLUX PAPER TEMPLATE  —  copy this file, replace the content with a
  real paper, and check it with:
      python3 tools/convert/validate_paper.py PAPER_TEMPLATE.md

  STRUCTURE (the uploader splits on these headers — keep them exact):
      --- frontmatter ---     topic/subtopic, before EVERY question
      ### **Question N**      question text
      ### **Mark Scheme N**   step-by-step mark scheme
      ### **Examiner Report N**  optional — omit if the paper has none

  RULES
  • Parts are bold: **(a)**  …  marks in bold parens right after each
    part: **(4)**. End the question with **(Total N marks)**.
  • Roman-numeral parts **(i)**, **(ii)** are their own part markers,
    exactly like (a) and (b) — see part (b) below.
  • ALL mathematics is LaTeX: inline $…$ / display $$…$$ on its own
    line. Never use backticks for math, and never solve the question.
  • Figures: **Figure N** followed by an ITALIC one-line description
    _(…)_ — it becomes the caption under the diagram, so mention the
    curve's equation and labelled points. Put a tikz code block right
    after the description (the site renders the diagram above the
    caption). Do the same for reference diagrams inside mark schemes.
  • Mark scheme: group steps under #### **Part (a)** subheaders, label
    each step **Step N: …**, and put the method marks on their own
    bullet lines: - **[M1]** …, - **[A1]** …. Number steps continuously.
  • Keep the examiner report as prose commentary on common mistakes —
    it shows in the question finder but is never printed.
════════════════════════════════════════════════════════════════════
-->

---
topic: "Graphs and Transformations"
subtopic: "Cubic graphs"
---
### **Question 1**

The curve $C$ has equation $y = x^3 - 3x + 2$.

**Figure 1** _(A sketch of the curve $y = x^3 - 3x + 2$, showing its stationary points $P$ and $Q$ and its intercept with the y-axis at $(0, 2)$)._

```tikz
\begin{tikzpicture}[scale=0.9]
  \draw[->] (-2.4,0) -- (2.6,0) node[below] {$x$};
  \draw[->] (0,-3.4) -- (0,4.4) node[left] {$y$};
  \draw[domain=-2.2:2.2, smooth, thick] plot (\x, {(\x)*(\x)*(\x) - 3*(\x) + 2});
  \fill (-1,4) circle (1.6pt) node[above left] {$P$};
  \fill (1,0) circle (1.6pt) node[below right] {$Q$};
\end{tikzpicture}
```

Figure 1 shows a sketch of the curve $C$ with equation $y = x^3 - 3x + 2$.

**(a)** Find the coordinates of the stationary points $P$ and $Q$. **(4)**

**(b)** The curve $C$ is translated by the vector $\binom{1}{2}$ to give the curve $D$.

**(i)** Find an equation for $D$. **(3)**

**(ii)** State the coordinates of the images of $P$ and $Q$ under this translation. **(2)**

**(Total 9 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Differentiate** $y = x^3 - 3x + 2 \Rightarrow \frac{dy}{dx} = 3x^2 - 3$

- **[M1]** Attempts to differentiate, at least one term correct.

**Step 2: Solve for stationary points** $3x^2 - 3 = 0 \Rightarrow x = \pm 1$

- **[A1]** Correct $x$-coordinates.

$y(-1) = 4, \quad y(1) = 0$

- **[A1]** Correct $y$-coordinates.

**Step 3: State the points** $P = (-1, 4)$, $Q = (1, 0)$

- **[A1]** Both points correct.

#### **Part (b)**

**Step 4: Apply the translation to the curve** Replacing $x$ by $x - 1$ and $y$ by $y - 2$:

$$y - 2 = (x - 1)^3 - 3(x - 1) + 2$$

- **[M1]** Applies the translation to the equation of $C$.

**Step 5: Simplify** $y = (x - 1)^3 - 3(x - 1) + 4$

- **[A1]** Correct equation for $D$.

**Step 6: Translate the points** $P' = (0, 6)$, $Q' = (2, 2)$

- **[B1]** Both images correct.

**Step 7: Diagram of the translated curve for reference:**

```tikz
\begin{tikzpicture}[scale=0.9]
  \draw[->] (-2.4,0) -- (3.4,0) node[below] {$x$};
  \draw[->] (0,-1.4) -- (0,7.4) node[left] {$y$};
  \draw[domain=-1.2:3.2, smooth, thick] plot (\x, {(\x-1)*(\x-1)*(\x-1) - 3*(\x-1) + 4});
  \fill (0,6) circle (1.6pt) node[above left] {$P'$};
  \fill (2,2) circle (1.6pt) node[below right] {$Q'$};
\end{tikzpicture}
```

### **Examiner Report 1**

Part (a) was generally well done, though a significant minority lost the final mark by pairing the coordinates the wrong way round. The most common error in part (b) was translating in the wrong direction: candidates replaced $x$ by $x + 1$ instead of $x - 1$. In (b)(ii), some candidates who had found $P'$ and $Q'$ correctly then omitted the change in the $x$-coordinate, writing $(-1, 6)$ and $(1, 2)$.
