---
topic: "Quadratics"
subtopic: "The discriminant"
---

### **Question 7**

**(a)** Find the set of values of $k$ for which the equation $\frac{x^2 + 3x + 8}{x^2 + x - 2} = k$ has no real roots. **(6)**

**Figure 3** _(A sketch of a rational function crossing the vertical axis, with two vertical asymptotes at x=a and x=b, and a horizontal asymptote y=c. The curve has three disjoint segments bounded by the asymptotes)._ Figure 3 shows a sketch of the curve $C_1$ with equation $y = f(x)$ where $f(x) = \frac{x^2 + 3x + 8}{x^2 + x - 2}$. The curve has asymptotes $x = a$, $x = b$ and $y = c$ where $a$, $b$ and $c$ are integers.

**(b)** Find the value of $a$, the value of $b$ and the value of $c$. **(4)**

**(c)** Find the coordinates of the points of intersection of $C_1$ with the line $y = 2$. **(3)**

**(d)** Find all the integer pairs $(r, s)$ that satisfy $s = \frac{r^2 + 3r + 8}{r^2 + r - 2}$ **(4)**

The curve $C_2$ has equation $y = g(x)$ where $g(x) = \frac{2x^2 - 4x + 6}{x^2 - 3x}$. **(e)** Show that, for suitable integers $m$ and $n$, $g(x)$ can be written in the form $f(x + m) + n$. **(4)**

**(f)** Sketch $C_2$ showing any asymptotes and stating their equations. **(3)** **(Total 24 marks)**

### **Mark Scheme 7**

#### **Part (a)**

**Step 1: Form a quadratic equation** $x^2 + 3x + 8 = k(x^2 + x - 2) \Rightarrow (k - 1)x^2 + (k - 3)x - (2k + 8) = 0$

- **[M1]** Three-term quadratic in $x$ correctly formed.
    

**Step 2: Apply the discriminant condition for no real roots** For no real roots, $b^2 - 4ac < 0$. $(k - 3)^2 - 4(k - 1)(-(2k + 8)) < 0$ $(k^2 - 6k + 9) + 4(2k^2 + 6k - 8) < 0$

- **[M1]** Attempts discriminant.
    

**Step 3: Solve the quadratic inequality in k** $k^2 - 6k + 9 + 8k^2 + 24k - 32 < 0 \Rightarrow 9k^2 + 18k - 23 < 0$

- **[M1, A1]** Forms the correct 3TQ in $k$.
    

Find critical values by solving $9k^2 + 18k - 23 = 0$ (or $(k+1)^2 - 1 - 23/9 = 0$): $k = \frac{-18 \pm \sqrt{324 - 4(9)(-23)}}{18} = \frac{-18 \pm \sqrt{1152}}{18} = \frac{-18 \pm 24\sqrt{2}}{18} = -1 \pm \frac{4\sqrt{2}}{3}$

- **[M1]** Attempt to find critical values (at least 1).
    

The set of values for $k$ is: $-1 - \frac{4\sqrt{2}}{3} < k < -1 + \frac{4\sqrt{2}}{3}$

- **[A1 cso]** Correct range of values. (S+ if $<0$ is used clearly throughout).
    

#### **Part (b)**

**Step 4: Find asymptotes** Vertical asymptotes occur where the denominator is zero. $x^2 + x - 2 = (x + 2)(x - 1) = 0 \Rightarrow x = -2, \quad x = 1$ From Figure 3, $a$ is the negative root, $b$ is the positive root. $a = -2, \quad b = 1$

- **[M1]** Factorizes denominator.
    
- **[A1, A1]** Values of $a$ and $b$.
    

Horizontal asymptote is found by examining $x \to \infty$. $y = \frac{x^2}{x^2} = 1 \Rightarrow c = 1$

- **[B1]** Value of $c$ (via polynomial division or limits).
    

#### **Part (c)**

**Step 5: Equate curve to 2** $\frac{x^2 + 3x + 8}{x^2 + x - 2} = 2 \Rightarrow x^2 + 3x + 8 = 2x^2 + 2x - 4$ $\Rightarrow x^2 - x - 12 = 0$

- **[M1]** Forms suitable equation.
    

**Step 6: Solve and state coordinates** $(x - 4)(x + 3) = 0 \Rightarrow x = 4 \text{ or } -3$

- **[M1]** Solves as far as $x = \dots$.
    

Coordinates are: $(-3, 2) \quad \text{and} \quad (4, 2)$

- **[A1]** Correct full coordinates.
    

#### **Part (d)**

**Step 7: Isolate integer constraints** We require $s$ to be an integer, where $s = f(r)$. Since $s = 1$ and $s = 2$ are clear horizontal bounds, we check integer values for $s$ near $y=1$ and $y=2$.

- **[M1]** Strategy using specific checks (e.g. checking values $s=0, 1, 2$ or $r$ values near 0).
    

**Step 8: Check specific integer values** If $r = 0$: $s = \frac{8}{-2} = -4$. Pair is $(0, -4)$. If $r = -1$: $s = \frac{1 - 3 + 8}{1 - 1 - 2} = \frac{6}{-2} = -3$. Pair is $(-1, -3)$. If $s = 1$: $r^2 + 3r + 8 = r^2 + r - 2 \Rightarrow 2r = -10 \Rightarrow r = -5$. Pair is $(-5, 1)$. If $s = 2$: From part (c), $r = -3$ and $r = 4$. Pairs are $(-3, 2)$ and $(4, 2)$.

- **[B1, B1, M1]** Checks $y=1$ explicitly. Finds pairs correctly.
    

No other integers satisfy this (checking $r$ or $s$ values outside this narrow range produces non-integers).

- **[A1]** All 5 integer pairs identified exactly and no extra false points.
    

#### **Part (e)**

**Step 9: Express f(x) and g(x) in division form** $f(x) = \frac{x^2 + x - 2 + 2x + 10}{x^2 + x - 2} = 1 + \frac{2(x + 5)}{(x + 2)(x - 1)}$ $g(x) = \frac{2x^2 - 6x + 2x + 6}{x^2 - 3x} = 2 + \frac{2(x + 3)}{x(x - 3)}$

- **[B1, B1]** Identifies $n = 1$ and $m = -2$ from considering coefficients and denominators.
    

**Step 10: Show explicitly by substitution** Let $m = -2$ and $n = 1$. $$f(x - 2) + 1 = \frac{(x - 2)^2 + 3(x - 2) + 8}{(x - 2)^2 + (x - 2) - 2} + 1 = \frac{x^2 - 4x + 4 + 3x - 6 + 8}{x^2 - 4x + 4 + x - 4} + 1$$ $$= \frac{x^2 - x + 6}{x^2 - 3x} + \frac{x^2 - 3x}{x^2 - 3x} = \frac{2x^2 - 4x + 6}{x^2 - 3x} = g(x)$$

- **[M1]** Attempt to show by suitable substitution.
    
- **[A1 cso]** Correct completion showing equivalence. Thus $m = -2, n = 1$.
    

#### **Part (f)**

**Step 11: Sketch properties** $C_2$ is a translation of $C_1$ by vector $\begin{pmatrix} 2 \\ 1 \end{pmatrix}$ (right 2, up 1).

- **[M1]** Horizontal translation right applies to middle part.
    
- **[M1]** Vertical translation up. No intersections with the coordinate axes.
    

**Step 12: Sketch asymptotes** Original asymptotes were $$x = -2, x = 1, y = 1.$$New asymptotes: $$x = 0, x = 3, y = 2.$$

- **[B1ft, B1ft]** Follows through $m$ and $n$.
    
- **[B1]** States $x = 3$ and $y = 2$ as explicit equations on the sketch.