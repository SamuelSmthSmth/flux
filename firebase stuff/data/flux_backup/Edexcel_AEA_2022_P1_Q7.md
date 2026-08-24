---
topic: "Straight Line Graphs"
subtopic: "y = mx + c"
---

### Question 7

A circle $C$ has centre $X(a,b)$ and radius $r$. A line $l$ has equation $y = mx + c$ **(a)** Show that the $x$ coordinates of the points where $C$ and $l$ intersect satisfy $$(m^2 + 1)x^2 - 2(a - m(c - b))x + a^2 + (c - b)^2 - r^2 = 0$$ **(2)**

Given that $l$ is a tangent to $C$, **(b)** show that $$c = b - ma \pm r\sqrt{m^2 + 1}$$ **(6)**

The circle $C_1$ has equation $x^2 + y^2 - 16 = 0$ and the circle $C_2$ has equation $$x^2 + y^2 - 20x - 10y + 89 = 0$$ **(c)** Find the equations of any lines that are normal to both $C_1$ and $C_2$, justifying your answer. **(3)**

**(d)** Find the equations of all lines that are a tangent to both $C_1$ and $C_2$. [You may find the following Pythagorean triple helpful in this part:] $7^2 + 24^2 = 25^2$ **(11)** **(+S2)**

### Mark Scheme 7

#### **Part (a)**

**Step 1: Substitute line into circle** $$C: (x - a)^2 + (y - b)^2 = r^2; \quad l: y = mx + c$$ Meet when $$(x - a)^2 + (mx + c - b)^2 = r^2$$

- **[M1]** Attempts to substitute and expand.
    

**Step 2: Expand and rearrange** $$\Rightarrow x^2 - 2ax + a^2 + m^2x^2 + 2mx(c - b) + (c - b)^2 = r^2$$ $$\Rightarrow (m^2 + 1)x^2 - 2(a - m(c - b))x + a^2 + (c - b)^2 - r^2 = 0 *$$

- __[A1_]_* Achieves correct result with intermediate step.
    

#### **Part (b)**

**Step 3: Discriminant condition for tangent** Tangent if equation in (a) has one solution, so need $b^2 - 4ac = 0$: $$4(a - m(c - b))^2 - 4(m^2 + 1)(a^2 + (c - b)^2 - r^2) = 0$$

- **[M1]** Attempts $b^2 - 4ac = 0$ on equation from (a).
    

**Step 4: Expand discriminant** $$\Rightarrow 0 = 4a^2 - 8am(c - b) + 4m^2(c - b)^2 - 4m^2a^2 - 4m^2(c - b)^2 + 4m^2r^2 - 4(a^2 + (c - b)^2 - r^2)$$

- **[A1]** Any correct expansion.
    

**Step 5: Form quadratic in c** $$\Rightarrow (c - b)^2 + 2am(c - b) + m^2a^2 - m^2r^2 - r^2 = 0$$

- **[M1]** Cancels terms and forms a quadratic in $c$ or $(c-b)$.
    

**Step 6: Solve for c** $$\Rightarrow [(c - b) + am]^2 - a^2m^2 + a^2m^2 - r^2(m^2 + 1) = 0 \Rightarrow c = \dots$$ $$c = b - am \pm r\sqrt{m^2 + 1} *$$

- __[dM1, A1_]_* Solves via completing square or formula. Correct result with no errors seen.
    

#### **Part (c)**

**Step 7: Identify common normal condition** Explains normals to a circle must pass through the centre, so common normals pass through both centres. Therefore, there is only one common normal.

- **[B1]** Justifies only one common normal.
    

**Step 8: Find equation of normal** $C_1$ has centre $(0, 0)$ and $C_2$ has centre $(10, 5)$ so equation is $$(y - 0) = \frac{5}{10}(x - 0)$$ So $y = \frac{1}{2}x$ or any equivalent.

- **[M1, A1]** Extracts centres and attempts equation. Correct equation.
    

#### **Part (d)**

**Step 9: Extract centres and radii** $C_1$ has centre $(0, 0)$ and radius $4$. $C_2$ has centre $(10, 5)$ and radius $\sqrt{100 + 25 - 89} = \sqrt{36} = 6$.

- **[M1]** Attempts to find centre and radius for each circle.
    

**Step 10: Identify vertical tangent** (Horizontal distance between centres is 10 and sum of radii is 10 so there is a common vertical tangent). One common tangent is $x = 4$.

- **[B1 (S+)]** Identifies the vertical common tangent.
    

**Step 11: Set up simultaneous equations for other tangents** From (b) other common tangents $y = mx + c$ satisfy: $$0 - 0m \pm 4\sqrt{m^2 + 1} = c$ $5 - 10m \pm 6\sqrt{m^2 + 1} = c$$

- **[M1]** Uses the result of (b) with both their centres and radii.
    

**Step 12: Solve for m (first combination)** $$\pm 10\sqrt{m^2 + 1} = 5 - 10m \Rightarrow 4(m^2 + 1) = 1 - 4m + 4m^2 \Rightarrow m = \dots$$ $$m = -\frac{3}{4}$$

- **[M1, A1]** Attempts and solves this combination of signs. Correct $m$.
    

**Step 13: Solve for m (second combination)** Other possibility is $$\pm 2\sqrt{m^2 + 1} = 5 - 10m \Rightarrow 4(m^2 + 1) = 25 - 100m + 100m^2$ $96m^2 - 100m + 21 = 0 \Rightarrow (24m - 7)(4m - 3) = 0$ $m = \frac{3}{4}, \frac{7}{24}$$

- **[M1, dM1]** Attempts other possibility of signs. Attempts to solve a quadratic in $m$.
    

**Step 14: Find corresponding c values** For $m = \pm \frac{3}{4}$: $$c = \pm 4\sqrt{\frac{9}{16} + 1} = \pm 5$. For $m = \frac{7}{24}$: $c = \pm 4\sqrt{\frac{49}{576} + 1} = \pm \frac{25}{6}$$.

- **[M1]** Attempts to find $c$ for at least one value of $m$.
    

**Step 15: Final Tangent Equations** The only possibilities satisfying both equations for $c$ are: $$y = -\frac{3}{4}x + 5$ $y = \frac{3}{4}x + 5$ $y = \frac{7}{24}x - \frac{25}{6}$$

- **[A1, A1]** Obtains one correct equation. All three equations found and no others.
    

**Special Marks (+S2)**

- **[S2]** Award S2 for a succinct solution scoring 20+ marks that includes S+ points.