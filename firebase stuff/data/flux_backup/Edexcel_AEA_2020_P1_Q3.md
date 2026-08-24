---
topic: "Work, Energy and Power"
subtopic: "Power"
---

### Question 3

**(a)** (i) Write down the binomial series expansion of $$\left(1 + \frac{2}{n}\right)^n \quad n \in \mathbb{N}, n > 2$$ in powers of $\left(\frac{2}{n}\right)$ up to and including the term in $\left(\frac{2}{n}\right)^3$. (ii) Hence prove that, for $n \in \mathbb{N}, n \ge 3$ $$\left(1 + \frac{2}{n}\right)^n \ge \frac{19}{3} - \frac{6}{n}$$ **(3)**

**(b)** Use the binomial series expansion of $\left(1 - \frac{x}{4}\right)^{\frac{1}{2}}$ to show that $$\sqrt{3} < \frac{7}{4}$$ **(4)**

Given that the function $f(x)$ is continuous and that $$f(x) = \left(1 + \frac{2}{x}\right)^x - 3^{\frac{x}{6}} \quad x \in \mathbb{R}, x > 0$$ $$\sqrt[6]{3} > \frac{6}{5}$$ **(c)** prove that $f(x) = 0$ has a root in the interval $[9, 10]$. **(5)** **(+S1)**

### Mark Scheme 3

#### **Part (a)**

**Step 1: Binomial expansion** (i) $$\left(1 + \frac{2}{n}\right)^n = 1 + n\left(\frac{2}{n}\right) + \frac{n(n-1)}{2}\left(\frac{2}{n}\right)^2 + \frac{n(n-1)(n-2)}{6}\left(\frac{2}{n}\right)^3 + \dots$$

- **[B1]** Correct expansion terms.
    

**Step 2: Simplify and bound** (ii) $$= 1 + 2 + \frac{2(n-1)}{n} + \frac{4(n^2 - 3n + 2)}{3n^2} + \dots$$ $$= 1 + 2 + 2 - \frac{2}{n} + \frac{4}{3} - \frac{4}{n} + \left(\frac{8}{3n^2} + \dots\right)$$

- **[M1]** Simplifies terms and cancels common factors.
    

$$\therefore \left(1 + \frac{2}{n}\right)^n \ge \frac{19}{3} - \frac{6}{n}$$ (as all other terms are non-negative for $n \ge 3$).

- __[A1_ (S-)]_* Completes proof. (Accept all other terms are positive, but S- if no reason is given.)
    

#### **Part (b)**

**Step 3: Expand the root expression** $$\left(1 - \frac{x}{4}\right)^{\frac{1}{2}} = 1 + \frac{1}{2}\left(-\frac{x}{4}\right) + \frac{\frac{1}{2}(-\frac{1}{2})}{2}\left(-\frac{x}{4}\right)^2 + \dots$ $$$$= 1 - \frac{x}{8} - \frac{x^2}{128} - \dots$$

- **[M1]** Expands with enough terms to deduce the pattern of signs.
    

**Step 4: Establish inequality** $$\left(1 - \frac{x}{4}\right)^{\frac{1}{2}} < 1 - \frac{x}{8}$$ since we can see all remaining terms are negative.

- **[B1]** Deduces inequality noting all remaining terms are negative.
    

**Step 5: Substitute to find approximation** Substituting $x = 1$ into the equation gives $$\left(\frac{3}{4}\right)^{\frac{1}{2}} < 1 - \frac{1}{8} = \frac{7}{8}$$

- **[M1]** Uses $x=1$ in their expansion.
    

**Step 6: Conclude** Hence $$\frac{\sqrt{3}}{2} < \frac{7}{8} \Rightarrow \sqrt{3} < \frac{7}{4} *$$

- __[A1_]_* Simplifies and rearranges, no incorrect working seen.
    

#### **Part (c)**

**Step 7: Evaluate f(9)** $$f(9) = \left(1 + \frac{2}{9}\right)^9 - 3^{9/6} \ge \frac{19}{3} - \frac{6}{9} - 3\sqrt{3}$$ (using result of a) $$\ge \frac{17}{3} - 3 \times \frac{7}{4} = \frac{17}{3} - \frac{21}{4} = \frac{5}{12} > 0$$ (using result of b)

- **[M1, A1]** Uses both previous results properly to show $f(9) > 0$.
    

**Step 8: Evaluate f(10)** $$f(10) = \left(1 + \frac{2}{10}\right)^{10} - 3^{10/6} = \left(\frac{6}{5}\right)^{10} - (\sqrt[6]{3})^{10}$$

- **[M1]** Evaluates $f(10)$.
    

**Step 9: Conclude sign change** But $$(\sqrt[6]{3})^{10} > (\frac{6}{5})^{10}$$ (as $g(x)=x^{10}$ is an increasing function), so $f(10) < 0$ follows.

- **[A1]** Correct deduction with reason.
    

**Step 10: State root existence** So $f(x)$ changes sign on $[9, 10]$, and as it is a continuous function, there is a root in the interval.

- **[A1]** References sign change and continuity.
    

**Special Mark (+S1)**

- **[S1]** Award S1 for a clear and concise solution scoring 10+ marks without S- point.