---
topic: "Sequences and Series"
subtopic: "Geometric series"
---

### Question 6

**Figure 2** _(A sequence of diagrams showing the iterations of a fractal curve. L0​ is a straight horizontal line. L1​ has its middle replaced by a trapezium shape without the bottom base. L2​ and L3​ continue replacing horizontal segments with the trapezium shape.)_

Figure 2 shows the first few iterations in the construction of a curve, $L$. Starting with a straight line $L_0$ of length 4, the middle half of this line is replaced by three sides of a trapezium above $L_0$ as shown, such that the length of each of these sides is $\frac{1}{4}$ of the length of $L_0$. After the first iteration each line segment has length one. In subsequent iterations, each line segment parallel to $L_0$ similarly has its middle half replaced by three sides of a trapezium above that line segment, with each side $\frac{1}{4}$ the length of that line segment. Line segments in $L_n$ are either parallel to $L_0$ or are sloped.

**(a)** Show that the length of $L_2$ is $\frac{23}{4}$ **(2)**

**(b)** Write down the number of (i) line segments in $L_n$ that are parallel to $L_0$ (ii) sloped line segments in $L_2$ that are not in $L_1$ (iii) new sloped line segments that are created by the $(n+1)$th iteration. **(3)**

**(c)** Hence find the length of $L_n$ as $n \to \infty$ **(6)**

The area enclosed between $L_0$ and $L_n$ is $A_n$. **(d)** Find the value of $A_1$ **(2)**

**(e)** Find, in terms of $n$, an expression for $A_{n+1} - A_n$ **(3)**

**(f)** Hence find the value of $A_n$ as $n \to \infty$ **(3)**

The same construction as described above is applied externally to the three sides of an equilateral triangle of side length $a$. Given that the limit of the area of the resulting shape is $26\sqrt{3}$ **(g)** find the value of $a$. **(3)** **(+S2)**

### Mark Scheme 6

#### **Part (a)**

**Step 1: Calculate Length of L2** $$S_2 = 2 + 9 \times \frac{1}{4} + 6 \times \frac{1}{4}$$ oe or $$S_2 = 3 \times 5 \times \frac{1}{4} + 2$$

- __[M1, A1_]_* A correct expression/identifies correct terms. Correctly shown $= \frac{23}{4} *$. (S+ for good explanation of formula).
    

#### **Part (b)**

**Step 2: Sequence properties** (i) There are $3^n$ horizontal line segments in $L_n$. (ii) $6$ (Each horizontal line splits to 3 new horizontal and 2 sloped lines). (iii) There are $2 \times 3^n$ new sloped lines.

- **[B1, B1, B1ft]** Correct answers only. (S+ for explanation in ii).
    

#### **Part (c)**

**Step 3: Length sequence formulation** Length of sloped sides: $$(S_{n+1}) = 2 \times 1 + 6 \times \frac{1}{4} + 18 \times \left(\frac{1}{4}\right)^2 + \dots + 2 \times 3^n \times \left(\frac{1}{4}\right)^n + 3^{n+1} \times \left(\frac{1}{4}\right)^n$$

- **[M1, M1]** Identifies general term for sloped sides and considers horizontals.
    

**Step 4: Geometric Series** $$= 2 \times \sum_{r=0}^{n} \left(\frac{3}{4}\right)^r + 3 \times \left(\frac{3}{4}\right)^n$$

- **[A1, M1]** Correct expression. Recognises a G.S. excluding the final term.
    

**Step 5: Apply limit** $$\to 2 \times \frac{1}{1 - 3/4} (+ 3 \times 0)$$ (as $(3/4)^n \to 0$ as $n \to \infty$)

- **[M1]** Applies sum of GS.
    

**Step 6: Final limit length** So $$S_\infty = 8$$

- **[A1]** Correct answer.
    

#### **Part (d)**

**Step 7: Area of first trapezium** Height of trapezium is $$\sqrt{1^2 - (1/2)^2} = \frac{\sqrt{3}}{2}$ $Area = \frac{(a+b)h}{2} = \frac{(2+1) \times \frac{\sqrt{3}}{2}}{2} = \frac{3\sqrt{3}}{4}$$

- **[M1, A1]** Correct method to find height and applies correct area formula. Correct answer.
    

#### **Part (e)**

**Step 8: Area scaling** Identifies the scaling factor of trapezia between iterations is $\frac{1}{16}^{th}$. In the $(n+1)$th iteration the new trapezia have area $(1/16)^n$ and there are $3^n$ such trapezia.

- **[M1, M1]** Identifies scaling factor. Brings both facts together.
    

**Step 9: Expression for difference** Increase in area is $$\left(\frac{1}{16}\right)^n \times \frac{3\sqrt{3}}{4} \times 3^n$$

- **[A1]** Correct expression.
    

#### **Part (f)**

**Step 10: Sum to infinity for area** $$A_\infty = \frac{3\sqrt{3}}{4} + 3 \times \frac{3\sqrt{3}}{4 \times 16} + 3^2 \times \frac{3\sqrt{3}}{4 \times 16^2} + \dots$ $= \frac{3\sqrt{3}}{4} \times \frac{1}{1 - 3/16}$$

- **[M1, A1ft]** Correct consideration of the area sum. Correct unsimplified expression.
    

**Step 11: Final Area** $$= \frac{12\sqrt{3}}{13}$$

- **[A1]** Correct answer.
    

#### **Part (g)**

**Step 12: Total area of shape** Area of triangle is $$\frac{1}{2}a^2\sin(60^\circ) = \frac{a^2\sqrt{3}}{4}$$ So limiting area of shape is $$\frac{a^2\sqrt{3}}{4} + 3 \times \left(\frac{a}{4}\right)^2 \times \frac{12\sqrt{3}}{13}$$

- **[M1]** Finds area of triangle and attempts to add scaled area from (f).
    

**Step 13: Solve for a** $$\frac{a^2\sqrt{3}}{4} + 3 \times \left(\frac{a}{4}\right)^2 \times \frac{12\sqrt{3}}{13} = 26\sqrt{3} \Rightarrow a^2 = \dots$$

- **[dM1]** Applies correct scaling and solves.
    

**Step 14: Final Answer** $$a = \frac{26}{\sqrt{11}} = \frac{26\sqrt{11}}{11}$$

- **[A1]** Accept either form.
    

**Special Marks (+S2)**

- **[S2]** Award S2 for a succinct solution scoring 20+ marks that includes S+ points.