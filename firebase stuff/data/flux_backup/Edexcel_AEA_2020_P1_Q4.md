---
topic: "Differentiation"
subtopic: "Finding the derivative"
---

### Question 4

**Figure 2** _(A sketch of an inverted parabola starting at the origin and crossing the x-axis at 10. Several rectangles are drawn underneath it. The base of each rectangle lies on the x-axis, and its top-left vertex touches the parabola curve.)_

Figure 2 shows a sketch of the parabola with equation $$y = \frac{1}{2}x(10 - x), \quad 0 \le x \le 10$$ This question concerns rectangles that lie under the parabola in the first quadrant. The bottom edge of each rectangle lies along the x-axis and the top left vertex lies on the parabola. Some examples are shown in Figure 2. Let the x coordinate of the top left vertex be $a$.

**(a)** Explain why the width, $w$, of such a rectangle must satisfy $w \le 10 - 2a$. **(2)**

**(b)** Find the value of $a$ that gives the maximum area for such a rectangle. **(5)**

Given that the rectangle must be a square, **(c)** find the value of $a$ that gives the maximum area for such a square. **(3)**

Given that the area of the rectangles is fixed as $36$ **(d)** find the range of possible values for $a$. **(6)** **(+S1)**

### Mark Scheme 4

#### **Part (a)**

**Step 1: Explain the width constraint** The rectangle must lie under the parabola, so maximum width will occur when the top right vertex also lies on the parabola. By symmetry about the line $x = 5$, this occurs at $$(10 - a, \frac{1}{2}a(10 - a))$$, hence width satisfies $$w \le (10 - a) - a = 10 - 2a *$$

- **[M1]** Recognises symmetry and forms an equation.
    
- __[A1_]_* Convincing reason leading to the result.
    

#### **Part (b)**

**Step 2: Form Area expression** Maximum area must occur for a full width rectangle, ie when $w = 10 - 2a$. Thus max area occurs for $$A = \frac{1}{2}a(10 - a) \times (10 - 2a)$$

- **[B1]** Correct area expression.
    

**Step 3: Differentiate** $$\frac{dA}{da} = \frac{1}{2}(10 - 2a)(10 - 2a) + \frac{1}{2}(10a - a^2)(-2) = 3a^2 - 30a + 50$$

- **[M1]** Applies product rule (or expands and differentiates).
    

**Step 4: Solve for a** Sets $\frac{dA}{da} = 0$: $$3(a - 5)^2 - 75 + 50 = 0 \Rightarrow a = 5 \pm \sqrt{\frac{25}{3}} = 5 \pm \frac{5}{\sqrt{3}}$$

- **[M1, M1]** Sets to zero and solves the quadratic.
    

**Step 5: Select valid root** But need $0 < a < 5$ to give a valid rectangle. Max area occurs when $a = 5 - \frac{5\sqrt{3}}{3}$ (oe simplified)

- **[A1 (S+)]** Correct root selected (S+ for explaining why the other root is rejected).
    

#### **Part (c)**

**Step 6: Form square equation** Max square area needs $$\text{Height} = \text{Width}$$ $$10 - 2a = \frac{1}{2}a(10 - a)$$

- **[M1]** Sets up correct equation.
    

**Step 7: Solve for a** $$20 - 4a = 10a - a^2 \Rightarrow a^2 - 14a + 20 = 0$ $\Rightarrow a = 7 \pm \sqrt{29}$$

- **[M1]** Solves the quadratic.
    

**Step 8: Select valid root** But need $0 < a < 5$ so $$a = 7 - \sqrt{29}$$

- __[A1_ (S+)]_* Selects correct root.
    

#### **Part (d)**

**Step 9: Form area equation/inequality** If area is $36$, then width is given by $$w = \frac{36}{\frac{1}{2}a(10 - a)} = \frac{72}{10a - a^2}$$ Therefore need solutions to $$\frac{72}{10a - a^2} \le 10 - 2a$$

- **[B1]** Correct inequality formulation.
    

**Step 10: Rearrange to cubic** Forms a suitable cubic using the maximum width and height: $$(10a - a^2)(10 - 2a) \ge 72$$ $$\Rightarrow 2a^3 - 30a^2 + 100a - 72 \ge 0 \Rightarrow a^3 - 15a^2 + 50a - 36 \ge 0$$

- **[M1, A1]** Forms and simplifies the cubic.
    

**Step 11: Solve cubic** Identifies $(a - 1)$ as a factor (factor theorem) and attempts to factorise: $$\Rightarrow (a - 1)(a^2 - 14a + 36) \ge 0$$

- **[M1]** Factorises cubic.
    

**Step 12: Find Critical Values** $$a^2 - 14a + 36 = 0 \Rightarrow a = 7 \pm \sqrt{13}$$ CVs are $a = 1$, $7 - \sqrt{13}$, $7 + \sqrt{13}$

- **[M1]** Finds all critical values.
    

**Step 13: Final range** (Positive cubic with roots $1 < 7 - \sqrt{13} < 7 + \sqrt{13}$) Possible values of $a$ are $1 \le a \le 7 - \sqrt{13}$

- **[A1 (S+)]** Correct range of values.
    

**Special Mark (+S1)**

- **[S1]** Award S1 for a clear, concise, fully correct solution.