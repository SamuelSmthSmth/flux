---
topic: "Integration"
subtopic: "Areas between curves and lines"
---

### Question 7

**Figure 3** _(A sketch showing part of the curve C and a tangent line L. The line touches the curve in two places, forming two distinct local minima contacts labeled P and Q. A shaded region R is trapped between the curve and the line between these two touching points)._

Figure 3 shows part of the curve $C$ with equation $$y = x^4 - 10x^3 + 33x^2 - 34x$$ and the line $L$ with equation $y = mx + c$. The line $L$ touches $C$ at the points $P$ and $Q$ with $x$ coordinates $p$ and $q$ respectively.

**(a)** Explain why $$x^4 - 10x^3 + 33x^2 - (34 + m)x - c = (x - p)^2(x - q)^2$$ **(2)**

The finite region $R$, shown shaded in Figure 3, is bounded by $C$ and $L$. **(b)** Use integration by parts to show that the area of $R$ is $$\frac{(q - p)^5}{30}$$ **(6)**

**(c)** Show that $$(x - p)^2(x - q)^2 = x^4 - 2(p + q)x^3 + Sx^2 - Tx + U$$ where $S$, $T$ and $U$ are expressions to be found in terms of $p$ and $q$. **(5)**

**(d)** Using part (a) and part (c) find the value of $p$, the value of $q$ and the equation of $L$. **(8)**

### Mark Scheme 7

#### **Part (a)**

**Step 1: Set up intersection** The intersection of the curve $C$ and line $L$ is found by equating them: $$x^4 - 10x^3 + 33x^2 - 34x = mx + c \Rightarrow x^4 - 10x^3 + 33x^2 - (34 + m)x - c = 0$$

- **[B1]** Reason for LHS (Curve - Line).
    

**Step 2: Argue tangency and roots** Because the line $L$ is a tangent to $C$ at points $x = p$ and $x = q$, these roots must be repeated (double roots). As the leading coefficient is 1 and it is a quartic, the polynomial factors exactly as $$(x - p)^2(x - q)^2$$.

- **[B1]** Mention of double roots and reason for squares balancing powers.
    

#### **Part (b)**

**Step 3: Set up integral for Area R** $$\text{Area} = \int_{p}^{q} (L - C) dx = \int_{p}^{q} -(x - p)^2(x - q)^2 dx \quad \text{or} \quad \int_{p}^{q} (x - p)^2(x - q)^2 dx$$ We evaluate $$\int_{p}^{q} (x - p)^2(x - q)^2 dx$$ (area is the positive value of this). Let $u = (x - p)^2$ and $dv = (x - q)^2 dx$.

- **[M1]** Attempt 1st step of integration by parts.
    

**Step 4: First Integration by Parts** $$v = \frac{(x - q)^3}{3}, \quad du = 2(x - p) dx$$ $$\int_{p}^{q} (x - p)^2(x - q)^2 dx = \left[ (x - p)^2 \frac{(x - q)^3}{3} \right]_p^q - \int_{p}^{q} 2(x - p) \frac{(x - q)^3}{3} dx$$ The boundary term evaluates to 0 at both $q$ and $p$.

- **[A1]** Correctly gets 1st boundary integral = 0.
    
- **[A1]** Correct 2nd integral expression.
    

**Step 5: Second Integration by Parts** For $$-\int_{p}^{q} \frac{2}{3}(x - p)(x - q)^3 dx$$: Let $u = (x - p)$ and $dv = (x - q)^3 dx$. $$v = \frac{(x - q)^4}{4}, \quad du = dx$$ $$= -\frac{2}{3} \left( \left[ (x - p) \frac{(x - q)^4}{4} \right]_p^q - \int_{p}^{q} \frac{(x - q)^4}{4} dx \right)$$

- **[M1]** Attempt 2nd step of integration by parts.
    

**Step 6: Final Evaluation** The boundary term again evaluates to 0. $$= \frac{2}{3} \int_{p}^{q} \frac{(x - q)^4}{4} dx = \frac{1}{6} \int_{p}^{q} (x - q)^4 dx$$ $$= \frac{1}{6} \left[ \frac{(x - q)^5}{5} \right]_p^q = \frac{1}{30} \left( 0 - (p - q)^5 \right)$ $= \frac{-(p - q)^5}{30} = \frac{(q - p)^5}{30} \quad (*)$$

- **[A1, A1 cso]** Correct work leading to the single integral with zeros seen. No incorrect working seen leading to this.
    

#### **Part (c)**

**Step 7: Expand the squared terms** $$(x - p)^2(x - q)^2 = (x^2 - 2px + p^2)(x^2 - 2qx + q^2)$$

- **[M1]** Starts the expansion multiplying the two quadratics.
    

**Step 8: Collect terms** $$= x^4 - 2qx^3 + q^2x^2 - 2px^3 + 4pqx^2 - 2pq^2x + p^2x^2 - 2p^2qx + p^2q^2$$ $$= x^4 - 2(p + q)x^3 + (p^2 + q^2 + 4pq)x^2 - (2pq^2 + 2p^2q)x + p^2q^2$$

- **[A1]** First two terms correct (cso).
    
- **[A1]** Correct expression for $S = p^2 + q^2 + 4pq$.
    
- **[A1]** Correct expression for $T = 2pq(p + q)$ (or equivalent).
    
- **[A1]** Correct expression for $U = p^2q^2$.
    

#### **Part (d)**

**Step 9: Compare coefficients for x^3 and x^2** From parts (a) and (c), comparing coefficients: $$-2(p + q) = -10 \Rightarrow p + q = 5$$ $$S = 33 \Rightarrow p^2 + q^2 + 4pq = 33$$

- **[B1]** Extracts $p + q = 5$.
    

**Step 10: Solve for p and q** We know $$(p + q)^2 = p^2 + q^2 + 2pq = 25.$$Thus $$(p^2 + q^2 + 4pq) - (p^2 + q^2 + 2pq) = 33 - 25 \Rightarrow 2pq = 8 \Rightarrow pq = 4.$$Substitute $p = 5 - q$: $$q(5 - q) = 4 \Rightarrow q^2 - 5q + 4 = 0.$$

- **[M1]** Uses second equation and $p + q = 5$ substitution.
    
- **[M1]** Solves the resulting quadratic in one variable.
    

$$(q - 4)(q - 1) = 0 \Rightarrow q = 1 \text{ or } q = 4$$

- **[A1]** Finds roots 1 and 4. From the diagram, $Q$ is to the right of $P$, so $q > p$. Thus $p = 1$ and $q = 4$.
    
- **[A1]** Correctly identifies $p$ and $q$.
    

**Step 11: Determine m and c** We have $$T = 2pq(p + q) = 2(4)(5) = 40$$. From (a), the x coefficient is $-(34 + m)$. From (c), it is $-T$. $$34 + m = 40 \Rightarrow m = 6$$

- **[M1, A1]** Uses $T$ to find $m$.
    

We have $$U = p^2q^2 = 1^2 \times 4^2 = 16.$$From (a), the constant term is $-c$. From (c), it is $U$. $$-c = 16 \Rightarrow c = -16$$ Equation of line $L$: $y = 6x - 16$

- **[A1]** Correct line equation.