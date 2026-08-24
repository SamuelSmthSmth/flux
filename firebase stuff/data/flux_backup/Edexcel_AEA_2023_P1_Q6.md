---
topic: "Differentiation"
subtopic: "Finding the derivative"
---

### Question 6

**Figure 3** _(A diagram shows a garden ornament consisting of a hemisphere of radius $R$ on top of a truncated cone. The truncated cone has a bottom base radius $2r$, top radius $r$ (which attaches to the hemisphere), and height $4r$.)_

Figure 3 shows the design for a garden ornament. The ornament is made of a hemisphere on top of a truncated cone. The truncated cone has base radius $2r$ cm, top radius $r$ cm and height $4r$ cm. The hemisphere has radius $R$ cm.

Given that the volume of the ornament is $2100\pi \text{ cm}^3$ **(a)** show that $R^3 = 3150 - 14r^3$ **(5)**

**(b)** Find an expression involving $\frac{dR}{dr}$ in terms of $r$ and/or $R$. **(2)**

The base of the truncated cone of the ornament is fixed to the ground. **(c)** Show that the visible surface area of the ornament, $A \text{ cm}^2$, is given by $A = (3\sqrt{17} - 1)\pi r^2 + 3\pi R^2$ **(5)**

**(d)** Hence show that $$\frac{dA}{dr} = \gamma\pi r - \frac{\delta\pi r^2}{R}$$ where $\gamma$ and $\delta$ are real numbers to be determined. **(2)**

**Figure 4** _(A sketch of Area A against r, showing a local max at M and a sharp cusp/minimum at N)._

There is a local minimum at $r = 0$ and a local maximum at the point $M$. The overall minimum point is at the point $N$, where the gradient of the curve is undefined.

**(e)** (i) Determine the $r$ coordinate of the point $N$. (ii) Explain why, for the ornament, $r$ must be less than this value. **(2)**

**(f)** Show that the $r$ coordinate of the point $M$ is $\sqrt[3]{\frac{p(3\sqrt{17} - 1)^3}{3q^2 + (3\sqrt{17} - 1)^3}}$ where $p$ and $q$ are integers to be determined. **(5)** **(+S2)**

### Mark Scheme 6

#### **Part (a)**

**Step 1: Volume of truncated cone** By similar triangles full cone would have height $8r$, so volume of truncated cone is $$\frac{1}{3}\pi(2r)^2(8r) - \frac{1}{3}\pi r^2(4r) = \frac{28}{3}\pi r^3$$

- **[M1, A1]** Correct strategy; correct volume for truncated cone.
    

**Step 2: Total Volume** Total volume $$\frac{28}{3}\pi r^3 + \frac{1}{2}\frac{4\pi}{3}R^3 = 2100\pi$$

- **[M1]** Sums volumes.
    

**Step 3: Solve for R^3** $$\Rightarrow R^3 = \frac{3}{2}\left(2100 - \frac{28}{3}r^3\right) = 3150 - 14r^3 *$$

- __[ddM1, A1_]_* Sets equal to $2100\pi$ and solves for $R^3$.
    

#### **Part (b)**

**Step 4: Differentiate** $$3R^2 \frac{dR}{dr} = -42r^2 \Rightarrow \frac{dR}{dr} = \frac{-14r^2}{R^2}$$

- **[M1, A1]** Differentiates implicitly or explicitly to correct form.
    

#### **Part (c)**

**Step 5: Visible Surface Area components** $$A = 2\pi R^2 + \pi R^2 - \pi r^2 + \text{Curved Surface Area of Truncated Cone}$$

- **[M1]** Finds area of external part of hemisphere visible (removing intersection).
    

**Step 6: Area of Truncated Cone** CSA $$= \pi(2r)\sqrt{(8r)^2 + (2r)^2} - \pi r\sqrt{(4r)^2 + r^2}$$ $$= 2\pi r\sqrt{68r^2} - \pi r\sqrt{17r^2} = 4\pi r^2\sqrt{17} - \pi r^2\sqrt{17} = 3\pi r^2\sqrt{17}$$

- **[M1, M1]** Correct attempt at area of curved surface. Simplifies to correct form.
    

**Step 7: Total Area** $$A = 3\pi R^2 - \pi r^2 + 3\pi r^2\sqrt{17} = (3\sqrt{17} - 1)\pi r^2 + 3\pi R^2 *$$

- __[A1, A1_]_* Correct total area reached with no errors.
    

#### **Part (d)**

**Step 8: Differentiate Area** $$\frac{dA}{dr} = 2(3\sqrt{17} - 1)\pi r + 6\pi R \frac{dR}{dr}$$

- **[M1]** Differentiates implicitly.
    

**Step 9: Substitute dR/dr** $$= 2(3\sqrt{17} - 1)\pi r + 6\pi R \left(\frac{-14r^2}{R^2}\right) = 2(3\sqrt{17} - 1)\pi r - \frac{84\pi r^2}{R}$$

- **[A1]** Correct answer.
    

#### **Part (e)**

**Step 10: Point N constraint** (i) $r$ coordinate is where $R = 0$ so $$r = \sqrt[3]{\frac{3150}{14}} = \sqrt[3]{225}$$ (ii) If $r > \sqrt[3]{225}$ then $R$ would be negative (impossible for a radius).

- **[B1, B1]** Correct coordinate; correct explanation.
    

#### **Part (f)**

**Step 11: Set derivative to zero** $$\frac{dA}{dr} = 0 \Rightarrow 2\pi(3\sqrt{17} - 1)r = \frac{84\pi r^2}{R} \Rightarrow R(3\sqrt{17} - 1) = 42r$$

- **[M1]** Sets derivative to zero and attempts to solve.
    

**Step 12: Cube and substitute R^3** $R^3(3\sqrt{17} - 1)^3 = (42r)^3$ $$\Rightarrow (3150 - 14r^3)(3\sqrt{17} - 1)^3 = (42r)^3$$

- **[M1, A1]** Cubes and substitutes for $R^3$. Correct equation in $r$.
    

**Step 13: Make r the subject** $$3150(3\sqrt{17} - 1)^3 = r^3(42^3 + 14(3\sqrt{17} - 1)^3)$$ $$\Rightarrow r = \sqrt[3]{\frac{225(3\sqrt{17} - 1)^3}{3 \times 42^2 + (3\sqrt{17} - 1)^3}}$$ (so $p = 225$ and $q = 42$)

- **[M1, A1]** Rearranges correctly to final form.