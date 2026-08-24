---
topic: "Differentiation"
subtopic: "The product rule"
---

### **Question 6**

**Figure 1** _(A sketch of part of the curve $y = x \sin(\ln x)$ for $x \ge 1$. The curve starts at the origin, arches upwards, and crosses the x-axis at a point A. The area under the curve between $x = 1$ and $x = A$ is shaded and labeled R)._

Figure 1 shows a sketch of part of the curve with equation $$y = x \sin(\ln x) \quad x \ge 1$$ For $x > 1$, the curve first crosses the x-axis at the point $A$.

**(a)** Find the x coordinate of $A$. **(3)**

**(b)** Differentiate $x \sin(\ln x)$ and $x \cos(\ln x)$ with respect to $x$ and hence find $$\int \sin(\ln x) dx$$ and $$\int \cos(\ln x) dx$$ **(7)**

**(c)** (i) Find $$\int x \sin(\ln x) dx$$. (ii) Hence show that the area of the shaded region $R$, bounded by the curve and the x-axis between the points $(1, 0)$ and $A$, is $\frac{1}{5}(e^{2\pi} + 1)$ **(9)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Find root A** Set $y = 0$: $x \sin(\ln x) = 0$. Since $x \ge 1$, we need $\sin(\ln x) = 0$. $$\Rightarrow \ln x = \pi$$ (the first positive root greater than 0, corresponding to $x > 1$).

- **[M1, M1]** Sets equal to 0 and extracts the second solution for sine (first is 0 at $x=1$).
    

**Step 2: Calculate x** $x = e^{\pi}$

- **[A1]** Exact value for $x$.
    

#### **Part (b)**

**Step 3: Differentiate first expression** $$\frac{d}{dx}(x \sin(\ln x)) = 1 \cdot \sin(\ln x) + x \cdot \cos(\ln x) \cdot \frac{1}{x} = \sin(\ln x) + \cos(\ln x)$$

- **[M1, A1]** Use of the Product Rule. All correct, simplified.
    

**Step 4: Differentiate second expression** $$\frac{d}{dx}(x \cos(\ln x)) = 1 \cdot \cos(\ln x) + x \cdot (-\sin(\ln x)) \cdot \frac{1}{x} = \cos(\ln x) - \sin(\ln x)$$

- **[M1, A1]** Product Rule used. All correct, simplified.
    

**Step 5: Integrate to find primitives** Integrating the results: $$x \sin(\ln x) = \int \sin(\ln x) dx + \int \cos(\ln x) dx$$ $$x \cos(\ln x) = \int \cos(\ln x) dx - \int \sin(\ln x) dx$$ Adding the two equations: $$x \sin(\ln x) + x \cos(\ln x) = 2\int \cos(\ln x) dx \Rightarrow \int \cos(\ln x) dx = \frac{1}{2}x(\sin(\ln x) + \cos(\ln x))$$ Subtracting the equations: $$x \sin(\ln x) - x \cos(\ln x) = 2\int \sin(\ln x) dx \Rightarrow \int \sin(\ln x) dx = \frac{1}{2}x(\sin(\ln x) - \cos(\ln x))$$

- **[M1, A1, A1]** Must be a genuine attempt combining the derivatives to find the integrals. Correct answers.
    

#### **Part (c)**

**Step 6: Integrate x sin(ln x) by parts** (i) Let $$S = \int x \sin(\ln x) dx$$. Using integration by parts: $$u = \sin(\ln x) \Rightarrow du = \cos(\ln x) \cdot \frac{1}{x} dx$$ $$dv = x dx \Rightarrow v = \frac{1}{2}x^2$$ $$S = \frac{1}{2}x^2 \sin(\ln x) - \int \frac{1}{2}x \cos(\ln x) dx$$

- **[M1, A1]** Application of parts.
    

**Step 7: Second application of parts** Let $$C = \int x \cos(\ln x) dx$$. $$C = \frac{1}{2}x^2 \cos(\ln x) - \int \frac{1}{2}x(-\sin(\ln x)) dx = \frac{1}{2}x^2 \cos(\ln x) + \frac{1}{2}S$$

- **[M1, A1]** Applies parts a second time on C.
    

**Step 8: Solve for S** Substitute $C$ back into $S$: $$S = \frac{1}{2}x^2 \sin(\ln x) - \frac{1}{2}\left( \frac{1}{2}x^2 \cos(\ln x) + \frac{1}{2}S \right)$$ $$S = \frac{1}{2}x^2 \sin(\ln x) - \frac{1}{4}x^2 \cos(\ln x) - \frac{1}{4}S$$

- **[M1]** Solves simultaneously to eliminate the integral "loop".
    

$$\frac{5}{4}S = \frac{1}{4}x^2 (2\sin(\ln x) - \cos(\ln x))$$ $$\Rightarrow S = \frac{1}{5}x^2(2\sin(\ln x) - \cos(\ln x)) (+ k)$$

- **[M1, A1]** Rearranges to find $S$ and obtains correct expression.
    

**Step 9: Evaluate definite integral** (ii) Apply limits from $x = 1$ to $x = e^\pi$: $$\text{Area} = \left[ \frac{1}{5}x^2(2\sin(\ln x) - \cos(\ln x)) \right]_1^{e^\pi}$$ Upper limit $e^\pi$: $$\frac{1}{5}(e^{\pi})^2 (2\sin(\pi) - \cos(\pi)) = \frac{1}{5}e^{2\pi}(0 - (-1)) = \frac{1}{5}e^{2\pi}$$ Lower limit $1$: $$\frac{1}{5}(1)^2 (2\sin(0) - \cos(0)) = \frac{1}{5}(0 - 1) = -\frac{1}{5}$$

- **[M1]** Uses limits $(1, e^\pi)$ in their $S$.
    

**Step 10: Final Area** $$\text{Area} = \frac{1}{5}e^{2\pi} - \left(-\frac{1}{5}\right) = \frac{1}{5}(e^{2\pi} + 1)$$

- **[A1]** Correct Given Answer from fully correct working.