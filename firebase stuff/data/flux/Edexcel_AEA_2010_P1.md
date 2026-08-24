### **Question 1**

**(a)** Solve the equation $\sqrt{3x + 16} = 3 + \sqrt{x + 1}$ **(5)**

**(b)** Solve the equation $\log_3(x - 7) - \frac{1}{2}\log_3 x = 1 - \log_3 2$ **(7)** **(Total 12 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Square both sides** $3x + 16 = 9 + x + 1 + 6\sqrt{x + 1}$

- **[M1]** Initial squaring - both sides.
    

**Step 2: Collect terms** $2x + 6 = 6\sqrt{x + 1} \Rightarrow x + 3 = 3\sqrt{x + 1}$

- **[A1]** Correct collecting of terms.
    

**Step 3: Square again** $x^2 + 6x + 9 = 9(x + 1)$ $x^2 - 3x = 0$

- **[M1]** 2nd squaring or using $y = \sqrt{x+1} \Rightarrow 3TQ$ in $y$.
    

**Step 4: Solve for x** $x(x - 3) = 0 \Rightarrow x = 0 \text{ or } 3$

- **[A1, B1]** A1 for both values. B1 for valid conclusion. (S+ for checking values back in original).
    

#### **Part (b)**

**Step 5: Apply log rules** $\frac{1}{2}\log_3 x = \log_3 \sqrt{x}$

- **[B1]** For use of $n\log x$ rule.
    

$\log_3(x - 7) - \log_3 \sqrt{x} = \log_3 \left(\frac{x - 7}{\sqrt{x}}\right)$

- **[M1]** For reducing $x$'s to a single log.
    

**Step 6: Remove logs** Since $1 - \log_3 2 = \log_3 3 - \log_3 2 = \log_3 \frac{3}{2}$: $\frac{x - 7}{\sqrt{x}} = \frac{3}{2}$

- **[M1, A1]** M1 for getting out of logs. A1 for correct equation.
    

**Step 7: Form and solve quadratic** $2x - 14 = 3\sqrt{x}$ $2(\sqrt{x})^2 - 3\sqrt{x} - 14 = 0$

- **[M1]** Attempt to solve suitable 3TQ in $x$ or $\sqrt{x}$.
    

$(2\sqrt{x} - 7)(\sqrt{x} + 2) = 0$ $\sqrt{x} = \frac{7}{2}$ (rejecting $-2$)

- **[A1]** Either solution for $\sqrt{x}$ or $x$. Must be rational.
    

$x = \frac{49}{4}$

- **[A1]** $49/4$ only. (S+ for clear reason for rejecting $x = 4$ if it arose).
    

### **Question 2**

The sum of the first $p$ terms of an arithmetic series is $q$ and the sum of the first $q$ terms of the same arithmetic series is $p$, where $p$ and $q$ are positive integers and $p \ne q$. Giving simplified answers in terms of $p$ and $q$, find **(a)** the common difference of the terms in this series, **(5)** **(b)** the first term of the series, **(3)** **(c)** the sum of the first $(p + q)$ terms of the series. **(3)** **(Total 11 marks)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Set up simultaneous equations** $q = \frac{p}{2}(2a + (p - 1)d)$ and $p = \frac{q}{2}(2a + (q - 1)d)$

- **[M1, A1]** M1 for attempting one sum formula. A1 for both correct expressions.
    

**Step 2: Eliminate a** Divide the equations by $p/2$ and $q/2$ respectively and subtract: $\frac{2q}{p} = 2a + (p - 1)d$ $\frac{2p}{q} = 2a + (q - 1)d$ $2\left(\frac{q}{p} - \frac{p}{q}\right) = d(p - 1 - q + 1) = d(p - q)$

- **[dM1, A1]** Eliminate $a$ using 2 independent equations. A1 for correct elimination.
    

**Step 3: Make d the subject** $d = \frac{2(q^2 - p^2)}{pq(p - q)} = \frac{-2(p + q)}{pq}$

- **[A1]** Correct simplified $d$.
    

#### **Part (b)**

**Step 4: Substitute d to find a** $2a = \frac{2q}{p} - (p - 1)\left(\frac{-2(p + q)}{pq}\right) = \frac{2q}{p} + \frac{2(p - 1)(p + q)}{pq}$

- **[M1]** Substitute for $d$ in a correct sum formula.
    

$a = \frac{q^2}{pq} + \frac{p^2 + pq - p - q}{pq} = \frac{q^2 + qp + p^2 - p - q}{pq}$

- **[dM1, A1]** Rearrange to $a = \dots$ and write as a single fraction with denominator $pq$.
    

#### **Part (c)**

**Step 5: Apply sum formula for (p+q) terms** $S_{p+q} = \frac{p+q}{2} (2a + (p + q - 1)d)$

- **[M1]** Attempt sum formula with $n = p + q$.
    

$= \frac{p+q}{2} \left[ \frac{2(q^2 + qp + p^2 - p - q)}{pq} - \frac{2(p + q - 1)(p + q)}{pq} \right]$

- **[M1]** Attempt to simplify with denominator $pq$ or $2pq$.
    

$= \frac{p+q}{pq} [q^2 + qp + p^2 - p - q - (p^2 + 2pq + q^2 - p - q)] = \frac{p+q}{pq} [-pq]$ $= -(p + q)$

- **[A1]** Correct final simplified answer. (S+ for concise simplification/factorising).
    

### **Question 3**

The curve $C$ has equation $x^2 + y^2 + fxy = g^2$, where $f$ and $g$ are constants and $g \ne 0$.

**(a)** Find an expression in terms of $\alpha$, $\beta$ and $f$ for the gradient of $C$ at the point $(\alpha, \beta)$. **(4)**

Given that $f < 2$ and $f \ne -2$ and that the gradient of $C$ at the point $(\alpha, \beta)$ is 1, **(b)** show that $\alpha = -\beta = \frac{\pm g}{\sqrt{(2 - f)}}$. **(4)**

Given that $f = -2$, **(c)** sketch $C$. **(3)** **(Total 11 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Implicit differentiation** $2x + 2y y' + fy + fxy' = 0$

- **[M1, A1]** M1 for correct attempt to diff $y^2$ or $xy$. A1 for all fully correct and $= 0$.
    

**Step 2: Make y' the subject** $y'(2y + fx) = -(2x + fy) \Rightarrow y' = -\frac{2x + fy}{2y + fx}$

- **[dM1]** Isolate $y'$.
    

**Step 3: State gradient at specific point** At $(\alpha, \beta)$, gradient $m$ is: $m = -\frac{2\alpha + f\beta}{2\beta + f\alpha}$

- **[A1]** Correct expression.
    

#### **Part (b)**

**Step 4: Use m = 1 condition** $1 = -\frac{2\alpha + f\beta}{2\beta + f\alpha} \Rightarrow 2\beta + f\alpha = -2\alpha - f\beta$

- **[M1]** Sub $m=1$ and form linear equation.
    

$2\alpha + f\alpha + 2\beta + f\beta = 0 \Rightarrow (\alpha + \beta)(f + 2) = 0$ Since $f \ne -2$, we have $\alpha + \beta = 0 \Rightarrow \alpha = -\beta$.

- **[A1 cso]** Completes logic. (S+ for explicitly using $f \ne -2$).
    

**Step 5: Substitute into curve equation** $\alpha^2 + (-\alpha)^2 + f\alpha(-\alpha) = g^2 \Rightarrow 2\alpha^2 - f\alpha^2 = g^2$

- **[M1]** Sub $\alpha = -\beta$ into curve.
    

$\alpha^2(2 - f) = g^2 \Rightarrow \alpha^2 = \frac{g^2}{2 - f} \Rightarrow \alpha = \pm \frac{g}{\sqrt{2 - f}}$

- **[A1 cso]** Simplify to the given answer. (S+ for considering $f < 2$ explicitly).
    

#### **Part (c)**

**Step 6: Describe and sketch the curve for f = -2** $x^2 + y^2 - 2xy = g^2 \Rightarrow (x - y)^2 = g^2 \Rightarrow x - y = \pm g$ This represents two parallel straight lines $y = x - g$ and $y = x + g$.

- **[M1, A1, A1]** M1 for completing square/factorising. A1 for $y = x \pm g$ lines sketched. A1 for y-intercepts $g$ and $-g$ marked.
    

### **Question 4**

**Figure 1** _(A rectangular cuboid OABCDEFG is shown. O is the origin, A is on the x-axis, C is on the y-axis, and D is on the z-axis. The vertices are given as vectors in the text)._ Figure 1 shows a cuboid $OABCDEFG$, where $O$ is the origin, $A$ has position vector $5\mathbf{i}$, $C$ has position vector $10\mathbf{j}$ and $D$ has position vector $20\mathbf{k}$.

**(a)** Find the cosine of angle $CAF$. **(4)**

Given that the point $X$ lies on $AC$ and that $FX$ is perpendicular to $AC$, **(b)** find the position vector of point $X$ and the distance $FX$. **(7)**

The line $l_1$ passes through $O$ and through the midpoint of the face $ABFE$. The line $l_2$ passes through $A$ and through the midpoint of the edge $FG$. **(c)** Show that $l_1$ and $l_2$ intersect and find the coordinates of the point of intersection. **(5)** **(Total 16 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Find vectors AC and AF** $A = (5, 0, 0)$, $C = (0, 10, 0)$, $F = (5, 10, 20)$. $\vec{AC} = \vec{OC} - \vec{OA} = \begin{pmatrix}-5 \\ 10 \\ 0\end{pmatrix}$ $\vec{AF} = \vec{OF} - \vec{OA} = \begin{pmatrix}0 \\ 10 \\ 20\end{pmatrix}$

- **[B1]** Correct vectors.
    

**Step 2: Calculate magnitudes** $|\vec{AC}| = \sqrt{25 + 100} = \sqrt{125}$ $|\vec{AF}| = \sqrt{100 + 400} = \sqrt{500}$

- **[B1]** Correct moduli.
    

**Step 3: Use dot product for angle** $\vec{AC} \cdot \vec{AF} = (-5)(0) + (10)(10) + (0)(20) = 100$ $\cos(\angle CAF) = \frac{100}{\sqrt{125}\sqrt{500}} = \frac{100}{250} = \frac{2}{5} = 0.4$

- **[M1, A1]** M1 for complete method for $\cos$. A1 for $0.4$ or $2/5$.
    

#### **Part (b)**

**Step 4: Form equation for line AC** $\vec{OX} = \vec{OA} + t\vec{AC} = \begin{pmatrix}5 \\ 0 \\ 0\end{pmatrix} + t\begin{pmatrix}-5 \\ 10 \\ 0\end{pmatrix} = \begin{pmatrix}5 - 5t \\ 10t \\ 0\end{pmatrix}$

- **[M1]** Attempt equation for $AC$ or variable $OX$.
    

**Step 5: Form vector FX** $\vec{FX} = \vec{OX} - \vec{OF} = \begin{pmatrix}5 - 5t - 5 \\ 10t - 10 \\ 0 - 20\end{pmatrix} = \begin{pmatrix}-5t \\ 10t - 10 \\ -20\end{pmatrix}$

- **[M1]** Attempt $FX$ in terms of one unknown.
    

**Step 6: Apply perpendicularity condition** $\vec{FX} \cdot \vec{AC} = 0 \Rightarrow \begin{pmatrix}-5t \\ 10t - 10 \\ -20\end{pmatrix} \cdot \begin{pmatrix}-5 \\ 10 \\ 0\end{pmatrix} = 0$ $25t + 100t - 100 = 0 \Rightarrow 125t = 100 \Rightarrow t = 0.8$

- **[M1, A1]** Correct use of dot product to get linear equation in $t$; $t = 0.8$.
    

**Step 7: Find X and FX distance** $\vec{OX} = \begin{pmatrix}5 - 4 \\ 8 \\ 0\end{pmatrix} = \begin{pmatrix}1 \\ 8 \\ 0\end{pmatrix}$ $\vec{FX} = \begin{pmatrix}-4 \\ -2 \\ -20\end{pmatrix}$ $|\vec{FX}| = \sqrt{16 + 4 + 400} = \sqrt{420}$

- **[A1, M1, A1]** A1 for $\vec{OX}$. M1 for attempt at $|FX|$. A1 for $\sqrt{420}$.
    

#### **Part (c)**

**Step 8: Define lines l1 and l2** Midpoint of $ABFE$: $\frac{1}{2}(\vec{OA} + \vec{OF}) = \frac{1}{2}((5,0,0) + (5,10,20)) = (5, 5, 10)$. $l_1: \mathbf{r} = \lambda \begin{pmatrix}5 \\ 5 \\ 10\end{pmatrix}$ Midpoint of $FG$: $\frac{1}{2}(\vec{OF} + \vec{OG}) = \frac{1}{2}((5,10,20) + (0,10,20)) = (2.5, 10, 20)$. $l_2: \mathbf{r} = \begin{pmatrix}5 \\ 0 \\ 0\end{pmatrix} + \mu \left( \begin{pmatrix}2.5 \\ 10 \\ 20\end{pmatrix} - \begin{pmatrix}5 \\ 0 \\ 0\end{pmatrix} \right) = \begin{pmatrix}5 \\ 0 \\ 0\end{pmatrix} + \mu \begin{pmatrix}-2.5 \\ 10 \\ 20\end{pmatrix}$

- **[B1, B1]** Correct vector equations for both lines.
    

**Step 9: Solve for intersection** Equate components: $5\lambda = 5 - 2.5\mu$ $5\lambda = 10\mu$ $10\lambda = 20\mu$

- **[M1]** Clear attempt to solve.
    

$10\mu = 5 - 2.5\mu \Rightarrow 12.5\mu = 5 \Rightarrow \mu = 0.4$ $5\lambda = 4 \Rightarrow \lambda = 0.8$

- **[A1]** Correct parameters.
    

**Step 10: Find intersection point** Check in $z$: $10(0.8) = 8$ and $20(0.4) = 8$ (consistent). Point is $0.8 \times (5, 5, 10) = (4, 4, 8)$.

- **[A1]** Correct intersection coordinates. (S+ for clear attempt to check intersection consistency).
    

### **Question 5**

$I = \int \frac{1}{(x - 1)\sqrt{x^2 - 1}} dx, \quad x > 1$

**(a)** Use the substitution $x = 1 + u^{-1}$ to show that $I = -\left(\frac{x + 1}{x - 1}\right)^{\frac{1}{2}} + c$ **(7)**

**(b)** Hence show that $\int_{\sec \alpha}^{\sec \beta} \frac{1}{(x - 1)\sqrt{x^2 - 1}} dx = \cot\left(\frac{\alpha}{2}\right) - \cot\left(\frac{\beta}{2}\right), \quad 0 < \alpha < \beta < \frac{\pi}{2}$ **(5)** **(Total 12 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Apply substitution** $x = 1 + u^{-1} \Rightarrow \frac{dx}{du} = -u^{-2}$

- **[B1]** Correct $dx/du$.
    

**Step 2: Transform integral into u** $x - 1 = u^{-1}$ $x^2 - 1 = (1 + u^{-1})^2 - 1 = 1 + 2u^{-1} + u^{-2} - 1 = 2u^{-1} + u^{-2}$ $I = \int \frac{1}{u^{-1} \sqrt{2u^{-1} + u^{-2}}} (-u^{-2}) du$

- **[M1]** Attempt to get $I$ in $u$ only.
    

**Step 3: Simplify integrand** $I = \int \frac{-u^{-2}}{u^{-1} \sqrt{u^{-2}(2u + 1)}} du = \int \frac{-u^{-2}}{u^{-2}\sqrt{2u + 1}} du = -\int \frac{1}{\sqrt{2u + 1}} du$

- **[A1]** Correct simplified expression.
    

**Step 4: Integrate** $I = -\int (1 + 2u)^{-1/2} du = -(1 + 2u)^{1/2} + c$

- **[M1, A1]** Attempt to integrate; correct integration.
    

**Step 5: Convert back to x** Substitute $u = \frac{1}{x - 1}$: $I = -\left(1 + \frac{2}{x - 1}\right)^{1/2} + c = -\left(\frac{x - 1 + 2}{x - 1}\right)^{1/2} + c = -\left(\frac{x + 1}{x - 1}\right)^{\frac{1}{2}} + c$

- **[M1, A1 cso]** Substitute $u$ back; correct final expression including $+ c$.
    

#### **Part (b)**

**Step 6: Evaluate integral with limits** $[I]_{\sec \alpha}^{\sec \beta} = -\left(\frac{\sec \beta + 1}{\sec \beta - 1}\right)^{\frac{1}{2}} - \left( -\left(\frac{\sec \alpha + 1}{\sec \alpha - 1}\right)^{\frac{1}{2}} \right)$

- **[M1]** Use of part (a).
    

**Step 7: Simplify trig fractions** Multiply numerator and denominator by $\cos \beta$: $\frac{\sec \beta + 1}{\sec \beta - 1} = \frac{1 + \cos \beta}{1 - \cos \beta}$

- **[M1]** Convert to $\cos$.
    

**Step 8: Use half-angle identities** $\frac{1 + \cos \beta}{1 - \cos \beta} = \frac{2\cos^2(\beta/2)}{2\sin^2(\beta/2)} = \cot^2\left(\frac{\beta}{2}\right)$

- **[M1]** Use of half angle formulae.
    

**Step 9: Conclude** $\sqrt{\cot^2\left(\frac{\beta}{2}\right)} = \cot\left(\frac{\beta}{2}\right)$ (since $0 < \beta/2 < \pi/4$, cot is positive). $= -\cot\left(\frac{\beta}{2}\right) + \cot\left(\frac{\alpha}{2}\right) = \cot\left(\frac{\alpha}{2}\right) - \cot\left(\frac{\beta}{2}\right)$

- **[M1, A1 cso]** Correct removal of square root and final result.
    

### **Question 6**

**(a)** Given that $x^4 + y^4 = 1$, prove that $x^2 + y^2$ is a maximum when $x = \pm y$, and find the maximum and minimum values of $x^2 + y^2$. **(7)**

**(b)** On the same diagram, sketch the curves $C_1$ and $C_2$ with equations $x^4 + y^4 = 1$ and $x^2 + y^2 = 1$ respectively. **(2)**

**(c)** Write down the equation of the circle $C_3$, centre the origin, which touches the curve $C_1$ at the points where $x = \pm y$. **(1)** **(Total 10 marks)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Set up the area/value function** Let $A = x^2 + y^2$. From $x^4 + y^4 = 1$, we have $y^2 = \sqrt{1 - x^4}$. $A = x^2 + \sqrt{1 - x^4}$

- **[B1]** Expression as a function of $x$ only.
    

**Step 2: Differentiate** $\frac{dA}{dx} = 2x + \frac{1}{2}(1 - x^4)^{-1/2}(-4x^3) = 2x - \frac{2x^3}{\sqrt{1 - x^4}}$

- **[M1, A1]** Some correct differentiation.
    

**Step 3: Find turning points** Set derivative to zero: $2x = \frac{2x^3}{\sqrt{1 - x^4}} \Rightarrow \sqrt{1 - x^4} = x^2 \quad (\text{for } x \ne 0)$ $1 - x^4 = x^4 \Rightarrow x^4 = \frac{1}{2}$

- **[M1, M1]** Reaching $x^4 = 1/2$ (or $x^2 = y^2 \Rightarrow x = \pm y$).
    

**Step 4: Find max/min values** If $x^4 = 1/2$, then $y^4 = 1/2$. $A = x^2 + y^2 = \sqrt{1/2} + \sqrt{1/2} = \sqrt{2}$. This is the maximum. If $x = 0$, then $y^4 = 1 \Rightarrow y = \pm 1$. $A = 1$. This is the minimum.

- **[B1, B1]** Max is $\sqrt{2}$, Min is $1$.
    

#### **Part (b)**

**Step 5: Sketch the curves** $x^2 + y^2 = 1$ is a standard unit circle. $x^4 + y^4 = 1$ resembles a square with rounded corners ("squircle"). It passes through $(\pm 1, 0)$ and $(0, \pm 1)$ exactly on the unit circle, but bulges outwards elsewhere, reaching a maximum distance of $\sqrt[4]{1/2}$ from the origin along the lines $y = \pm x$. Wait, maximum distance squared is $\sqrt{2}$, so distance is $2^{1/4} \approx 1.189$. So it's outside the circle.

- **[B1]** Circle, centre $(0,0)$, $r=1$.
    
- **[B1]** Squircle curve outside the unit circle, touching at the axes.
    

#### **Part (c)**

**Step 6: Circle C3** The circle $C_3$ touches $C_1$ at its furthest points $x = \pm y$. The radius squared here is $\sqrt{2}$ (found in part a). Equation: $x^2 + y^2 = \sqrt{2}$.

- **[B1]** Correct equation.
    

### **Question 7**

$f(x) = [1 + \cos(x + \frac{\pi}{4})][1 + \sin(x + \frac{\pi}{4})], \quad 0 \le x \le 2\pi$

**(a)** Show that $f(x)$ may be written in the form $f(x) = \left(\frac{1}{\sqrt{2}} + \cos x\right)^2, \quad 0 \le x \le 2\pi$ **(5)**

**(b)** Find the range of the function $f(x)$. **(2)**

The graph of $y = f(x)$ is shown in Figure 2. **(c)** Find the coordinates of all the maximum and minimum points on this curve. **(6)**

The region $R$, bounded by $y = 2$ and $y = f(x)$, is shown shaded in Figure 3. **(d)** Find the area of $R$. **(8)** **(Total 21 marks)**

### **Mark Scheme 7**

#### **Part (a)**

**Step 1: Expand trigonometric terms** $f(x) = [1 + \cos x \cos(\pi/4) - \sin x \sin(\pi/4)][1 + \sin x \cos(\pi/4) + \cos x \sin(\pi/4)]$

- **[M1]** Use of $\sin(A+B)$ and $\cos(A+B)$ formulae.
    

**Step 2: Substitute values** $= \left[ 1 + \frac{1}{\sqrt{2}}\cos x - \frac{1}{\sqrt{2}}\sin x \right] \left[ 1 + \frac{1}{\sqrt{2}}\sin x + \frac{1}{\sqrt{2}}\cos x \right]$

- **[B1]** Correct use of $1/\sqrt{2}$.
    

**Step 3: Expand the brackets** Group as $\left( (1 + \frac{1}{\sqrt{2}}\cos x) - \frac{1}{\sqrt{2}}\sin x \right) \left( (1 + \frac{1}{\sqrt{2}}\cos x) + \frac{1}{\sqrt{2}}\sin x \right)$: $= \left(1 + \frac{1}{\sqrt{2}}\cos x\right)^2 - \left(\frac{1}{\sqrt{2}}\sin x\right)^2$

- **[M1]** Multiply out and remove $\sin x \cos x$ terms.
    

**Step 4: Simplify to target form** $= 1 + \frac{2}{\sqrt{2}}\cos x + \frac{1}{2}\cos^2 x - \frac{1}{2}\sin^2 x$ $= 1 + \sqrt{2}\cos x + \frac{1}{2}\cos^2 x - \frac{1}{2}(1 - \cos^2 x)$

- **[M1]** Eqn in $\cos x$ only.
    

$= \frac{1}{2} + \sqrt{2}\cos x + \cos^2 x = \left(\frac{1}{\sqrt{2}} + \cos x\right)^2 \quad (*)$

- **[A1 cso]** Correct completion.
    

#### **Part (b)**

**Step 5: Determine range** Since it's a square, minimum is $0$. The maximum of $\cos x$ is $1$. Maximum of $f(x)$ is $(1/\sqrt{2} + 1)^2$. $Range: 0 \le f(x) \le \left(\frac{1}{\sqrt{2}} + 1\right)^2$ (or $\frac{3}{2} + \sqrt{2}$).

- **[M1, A1]** M1 for $f \ge 0$ or $f \le (1/\sqrt{2}+1)^2$. A1 for both endpoints.
    

#### **Part (c)**

**Step 6: Find absolute maxima** Max occurs when $\cos x = 1 \Rightarrow x = 0, 2\pi$. Points: $(0, \frac{3}{2} + \sqrt{2})$ and $(2\pi, \frac{3}{2} + \sqrt{2})$.

- **[B1, B1ft]** Both points correctly stated.
    

**Step 7: Find absolute minima** Min occurs when $\frac{1}{\sqrt{2}} + \cos x = 0 \Rightarrow \cos x = -\frac{1}{\sqrt{2}}$. $x = \frac{3\pi}{4}, \frac{5\pi}{4}$. Points: $(3\pi/4, 0)$ and $(5\pi/4, 0)$.

- **[M1, A1]** Set to 0 and find angles.
    

**Step 8: Find local maximum** $f'(x) = 2\left(\frac{1}{\sqrt{2}} + \cos x\right)(-\sin x) = 0$ This is zero at $\sin x = 0 \Rightarrow x = \pi$. Point: $(\pi, (1/\sqrt{2} - 1)^2) = (\pi, \frac{3}{2} - \sqrt{2})$.

- **[M1, A1]** Method using derivative or reasoning $\cos x = -1$; correct coordinates.
    

#### **Part (d)**

**Step 9: Find intersections with y = 2** $y = 2 \Rightarrow \left(\frac{1}{\sqrt{2}} + \cos x\right)^2 = 2$ Since $\cos x \ge -1$, $1/\sqrt{2} + \cos x$ must be positive. $\frac{1}{\sqrt{2}} + \cos x = \sqrt{2} \Rightarrow \cos x = \sqrt{2} - \frac{1}{\sqrt{2}} = \frac{1}{\sqrt{2}}$ $x = \frac{\pi}{4}, \frac{7\pi}{4}$

- **[M1, A1]** Form and solve correct equation. Both x-values.
    

**Step 10: Set up integral for Area R** $Area = \int_{\pi/4}^{7\pi/4} (2 - f(x)) dx$

- **[M1]** Correct strategy (integral of 2 minus curve, or rectangle minus area under curve).
    

**Step 11: Integrate f(x)** $\int f(x) dx = \int \left(\frac{1}{2} + \sqrt{2}\cos x + \cos^2 x\right) dx$ Using $\cos^2 x = \frac{1}{2}(1 + \cos 2x)$: $\int \left( 1 + \sqrt{2}\cos x + \frac{1}{2}\cos 2x \right) dx$ $= x + \sqrt{2}\sin x + \frac{1}{4}\sin 2x$

- **[M1, M1, A1]** Express in integrable terms; integration correct.
    

**Step 12: Combine and apply limits** Integral for the area: $[2x - (x + \sqrt{2}\sin x + \frac{1}{4}\sin 2x)] = [x - \sqrt{2}\sin x - \frac{1}{4}\sin 2x]_{\pi/4}^{7\pi/4}$ Upper limit: $\frac{7\pi}{4} - \sqrt{2}\left(-\frac{1}{\sqrt{2}}\right) - \frac{1}{4}(-1) = \frac{7\pi}{4} + 1 + \frac{1}{4} = \frac{7\pi}{4} + \frac{5}{4}$ Lower limit: $\frac{\pi}{4} - \sqrt{2}\left(\frac{1}{\sqrt{2}}\right) - \frac{1}{4}(1) = \frac{\pi}{4} - 1 - \frac{1}{4} = \frac{\pi}{4} - \frac{5}{4}$ Area = $\left(\frac{7\pi}{4} + \frac{5}{4}\right) - \left(\frac{\pi}{4} - \frac{5}{4}\right) = \frac{6\pi}{4} + \frac{10}{4} = \frac{3\pi}{2} + \frac{5}{2}$

- **[dM1, A1]** Application of limits; correct final area.