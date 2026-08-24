---
topic: "Trigonometric Ratios"
subtopic: "The cosine rule"
---

### Question 4

**Figure 1** _(A diagram shows an equilateral triangle LMN of side 2 cm. A line segment PQ cuts across the triangle, with P on LM and Q on LN. The length LP is labeled x cm, and LQ is labeled y cm)._

Figure 1 shows the equilateral triangle $LMN$ of side $2$ cm. The point $P$ lies on $LM$ such that $LP = x$ cm and the point $Q$ lies on $LN$ such that $LQ = y$ cm. The points $P$ and $Q$ are chosen so that the area of triangle $LPQ$ is half the area of triangle $LMN$.

**(a)** Show that $xy = 2$. **(2)**

**(b)** Find the shortest possible length of $PQ$, justifying your answer. **(5)**

Mathematicians know that for any closed curve or polygon enclosing a fixed area, the ratio $\frac{\text{area enclosed}}{\text{perimeter}^2}$ is a maximum when the closed curve is a circle.

By considering 6 copies of triangle $LMN$ suitably arranged, **(c)** find the length of the shortest line or curve that can be drawn from a point on $LM$ to a point on $LN$ to divide the area of triangle $LMN$ in half. Justify your answer. **(6)**

### Mark Scheme 4

#### **Part (a)**

**Step 1: Formulate Area Expressions** $$\text{Area of } \triangle LMN = \frac{1}{2} \times 2 \times 2 \times \sin 60^\circ = \sqrt{3}$$ $$\text{Area of } \triangle LPQ = \frac{1}{2}xy \sin 60^\circ$$

- **[M1]** Use of the triangle area formula $\frac{1}{2}ab\sin C$.
    

**Step 2: Equate and Solve** $$\frac{1}{2}xy \sin 60^\circ = \frac{1}{2}\sqrt{3} \Rightarrow \frac{1}{2}xy\left(\frac{\sqrt{3}}{2}\right) = \frac{\sqrt{3}}{2}$$ $$\Rightarrow \frac{1}{4}xy = \frac{1}{2} \Rightarrow xy = 2 \quad (*)$$

- **[A1]** Correctly establishes the relationship.
    

#### **Part (b)**

**Step 3: Cosine Rule for PQ** Let $PQ = d$. Using the cosine rule on $\triangle LPQ$: $$d^2 = x^2 + y^2 - 2xy \cos 60^\circ$$ $$d^2 = x^2 + y^2 - xy$$ (or since $xy=2$, $d^2 = x^2 + y^2 - 2$)

- **[M1]** Use of cosine rule or equivalent.
    

**Step 4: Minimize Length** Since $y = \frac{2}{x}$, we can write: $$d^2 = x^2 + \frac{4}{x^2} - 2$$ To minimize, use symmetry (or differentiation $2x - 8/x^3 = 0$): Minimum occurs when $x = y$. Since $xy = 2$, $$x^2 = 2 \Rightarrow x = \sqrt{2}$$.

- **[M1, A1]** Method for finding the minimum (symmetry or differentiation) and determining the minimizing condition.
    

**Step 5: Final Shortest Length** Substitute $x = \sqrt{2}, y = \sqrt{2}$: $$d^2 = (\sqrt{2})^2 + (\sqrt{2})^2 - 2 = 2 + 2 - 2 = 2$$ $$\Rightarrow d = \sqrt{2}$$

- **[M1, A1]** Calculates final shortest length for $PQ$.
    

#### **Part (c)**

**Step 6: Form Hexagon** Rearrange the 6 copies of the equilateral triangle $LMN$ around the common vertex $L$ to form a regular hexagon.

- **[B1]** Idea of using a hexagon.
    

**Step 7: Circular Arc Deduction** Since a circle is the best closed curve for a given perimeter to enclose a maximal area, by symmetry, a circular arc centered at $L$ must be the shortest curve to enclose half the area of the triangle $LMN$.

- **[B1]** Complete argument justifying the circular arc.
    

**Step 8: Set up Sector Area** Area of a circular sector is $\frac{1}{2}r^2\theta$. Here, $\theta = \frac{\pi}{3}$ (60 degrees). We need this sector to have half the area of $\triangle LMN$: $$\frac{1}{2}r^2\left(\frac{\pi}{3}\right) = \frac{\sqrt{3}}{2}$$

- **[M1]** Correct equation for $r$ based on sector area.
    

**Step 9: Find Radius** $$r^2\left(\frac{\pi}{6}\right) = \frac{\sqrt{3}}{2} \Rightarrow r^2 = \frac{3\sqrt{3}}{\pi}$$ $$\Rightarrow r = \sqrt{\frac{3\sqrt{3}}{\pi}}$$

- **[M1]** Attempt to solve for $r$ (allow one algebraic slip).
    

**Step 10: Calculate Arc Length** Arc length is $$L = r\theta = r\left(\frac{\pi}{3}\right)$$. $$L = \sqrt{\frac{3\sqrt{3}}{\pi}} \times \frac{\pi}{3} = \sqrt{\frac{3\sqrt{3}}{\pi} \times \frac{\pi^2}{9}} = \sqrt{\frac{\pi\sqrt{3}}{3}} = \sqrt{\frac{\pi}{\sqrt{3}}}$$

- **[M1, A1]** Uses arc length formula and simplifies to any correct form.