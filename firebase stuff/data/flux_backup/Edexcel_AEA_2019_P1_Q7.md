---
topic: "Differentiation"
subtopic: "Finding the derivative"
---

### **Question 7**

**Figure 2** _(A diagram shows a rectangle OABC representing marshland. OA is length a, OC is length b. A point D lies on OA at distance x from O. Edgar travels from O to D along the edge, then wades straight from D to B)._

Figure 2 shows a rectangular section of marshland, $OABC$, which is $a$ metres long by $b$ metres wide, where $a > b$. Edgar intends to get from $O$ to $B$ in the shortest possible time. In order to do this, he runs along edge $OA$ for a distance $x$ metres ($0 \le x < a$) to the point $D$ before wading through the marsh directly from $D$ to $B$. Edgar can wade through the marsh at a constant speed of $1 \text{ ms}^{-1}$, and he can run along the edge of the marsh at a constant speed of $\lambda \text{ ms}^{-1}$, where $\lambda > 1$.

**(a)** By finding an expression in terms of $x$ for the time taken, $t$ seconds, for Edgar to reach $B$ from $O$, show that $$\frac{dt}{dx} = \frac{1}{\lambda} - \frac{a - x}{\sqrt{(a - x)^{2} + b^{2}}}$$ **(5)**

**(b)** (i) Find, in terms of $a$, $b$ and $\lambda$, the value of $x$ for which $\frac{dt}{dx} = 0$. (ii) Show that this value of $x$ lies in the interval $0 \le x < a$ provided $$\lambda \ge \sqrt{1 + \frac{b^{2}}{a^{2}}}$$ (iii) For $\lambda$ in this range, show that the value of $x$ found in (b)(i) gives a minimum value of $t$. **(8)**

**(c)** Find the minimum time taken for Edgar to get from $O$ to $B$ if (i) $$\lambda \ge \sqrt{1 + \frac{b^{2}}{a^{2}}}$$ (ii) $$1 < \lambda < \sqrt{1 + \frac{b^{2}}{a^{2}}}$$ **(4)**

Edgar's friend, Frankie, also runs at a constant speed of $\lambda \text{ ms}^{-1}$. Frankie runs along the edges $OA$ and $AB$. Given that $\lambda \ge \sqrt{1 + \frac{b^{2}}{a^{2}}}$ **(d)** find the range of values of $\lambda$ for which Frankie gets to $B$ from $O$ in a shorter time than Edgar's minimum time. **(3)** **(+S2)**

### **Mark Scheme 7**

#### **Part (a)**

**Step 1: Distance DB** $$DB = \sqrt{(a - x)^{2} + b^{2}}$$

- **[B1]** May be implied by use in the formula.
    

**Step 2: Time expression** Time taken is distance/speed: $$t = \frac{x}{\lambda} + \sqrt{(a - x)^{2} + b^{2}}$$

- **[B1]** Correct expression.
    

**Step 3: Differentiate w.r.t x** $$\frac{dt}{dx} = \frac{1}{\lambda} + \frac{1}{2}((a - x)^{2} + b^{2})^{-1/2} \times 2(a - x) \times (-1)$$

- **[M1, A1]** Attempts differentiation of square root using chain rule. Correct differentiation.
    

**Step 4: Final Derivative** $$\Rightarrow \frac{dt}{dx} = \frac{1}{\lambda} - \frac{a - x}{\sqrt{(a - x)^{2} + b^{2}}} *$$

- **[A1]** Given Answer legitimately obtained.
    

#### **Part (b)**

**Step 5: Set derivative to zero** (i) $$\frac{dt}{dx} = 0 \Rightarrow \sqrt{(a - x)^{2} + b^{2}} = \lambda(a - x)$$

- **[M1]** Equates to 0 and re-arranges.
    

**Step 6: Solve for x** Square both sides: $$(a - x)^{2} + b^{2} = \lambda^{2}(a - x)^{2} \Rightarrow b^{2} = (\lambda^{2} - 1)(a - x)^{2}$$

- **[M1(S+)]** Rearranging for $x$.
    

Since $x < a$, $a - x$ is positive: $$a - x = \frac{b}{\sqrt{\lambda^{2} - 1}} \Rightarrow x = a - \frac{b}{\sqrt{\lambda^{2} - 1}}$$

- **[A1]** Correct solution selected and simplified.
    

**Step 7: Justify validity interval** (ii) For $x \ge 0$, we need $$a - \frac{b}{\sqrt{\lambda^{2} - 1}} \ge 0 \Rightarrow a \ge \frac{b}{\sqrt{\lambda^{2} - 1}} \Rightarrow \sqrt{\lambda^{2} - 1} \ge \frac{b}{a}$$ $$\Rightarrow \lambda^{2} - 1 \ge \frac{b^{2}}{a^{2}} \Rightarrow \lambda \ge \sqrt{1 + \frac{b^{2}}{a^{2}}} *$$

- **[M1, A1]** Attempt to find $x$ in interval, given answer legitimately obtained.
    

**Step 8: Second derivative test** (iii) $$\frac{d^{2}t}{dx^{2}} = - \frac{-1 \cdot \sqrt{(a-x)^2+b^2} - (a-x)\cdot\frac{-(a-x)}{\sqrt{(a-x)^2+b^2}}}{(a-x)^2+b^2}$$ $$= \frac{(a-x)^2+b^2 - (a-x)^2}{((a-x)^2+b^2)^{3/2}} = \frac{b^2}{((a-x)^2+b^2)^{3/2}}$$

- **[M1, A1]** Attempt at 2nd derivative. Correct unsimplified answer.
    

Since $b^2 > 0$ and the denominator is positive, $\frac{d^{2}t}{dx^{2}} > 0$, hence it is a minimum.

- **[A1]** Correctly concluded from correct 2nd derivative.
    

#### **Part (c)**

**Step 9: Minimum time for valid x** (i) Substitute $x$ into $t$: $$t = \frac{a - \frac{b}{\sqrt{\lambda^{2} - 1}}}{\lambda} + \sqrt{\left(\frac{b}{\sqrt{\lambda^{2} - 1}}\right)^{2} + b^{2}}$$

- **[M1]** Substituting for $x$.
    

$$t = \frac{a}{\lambda} - \frac{b}{\lambda\sqrt{\lambda^{2} - 1}} + \frac{b\lambda}{\sqrt{\lambda^{2} - 1}} = \frac{a}{\lambda} + \frac{b(\lambda^{2} - 1)}{\lambda\sqrt{\lambda^{2} - 1}}$ $t = \frac{a + b\sqrt{\lambda^{2} - 1}}{\lambda}$$

- **[A1]** Correct in terms of $\lambda$.
    

**Step 10: Minimum time when x=0** (ii) If $\lambda$ is smaller, the minimum occurs at the endpoint $x = 0$. $$t = \frac{0}{\lambda} + \sqrt{a^{2} + b^{2}} = \sqrt{a^{2} + b^{2}}$$

- **[M1, A1]** Finds time for $x=0$. Correct answer.
    

#### **Part (d)**

**Step 11: Frankie's Time** Frankie's time is $t_{F} = \frac{a + b}{\lambda}$

- **[B1]** Correct expression.
    

**Step 12: Set inequality** We need $t_{F} < t_{Edgar}$ (using minimum from c(i)): $$\frac{a + b}{\lambda} < \frac{a + b\sqrt{\lambda^{2} - 1}}{\lambda}$$

- **[M1]** Sets up inequality.
    

**Step 13: Solve for lambda** Multiply by $\lambda$ (positive): $$a + b < a + b\sqrt{\lambda^{2} - 1} \Rightarrow 1 < \sqrt{\lambda^{2} - 1}$$ $$\Rightarrow 1 < \lambda^{2} - 1 \Rightarrow \lambda^{2} > 2 \Rightarrow \lambda > \sqrt{2}$$

- **[A1]** Correct final inequality.
    

**Special Marks (+S2)**

- **[S2]** Award S2 for a fully correct, succinct solution including properly handled inequalities in (d) and justifying positive square roots.