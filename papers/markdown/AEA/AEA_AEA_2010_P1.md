---
topic: "Exponentials and Logarithms"
subtopic: "Solving equations using logarithms"
---
### **Question 1**

**(a)** Solve the equation
$$\sqrt{3x+16} = 3 + \sqrt{x+1}$$
**(5)**

**(b)** Solve the equation
$$\log_3(x-7) - \frac{1}{2}\log_3 x = 1 - \log_3 2$$
**(7)**

**(Total 12 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Square both sides**
$$3x+16 = 9 + x + 1 + 6\sqrt{x+1}$$
- **[M1]** Initial squaring of both sides.

**Step 2: Collect terms**
$$3 + x = 3\sqrt{x+1}$$
- **[A1]** Correct collecting of terms (or equivalent).

**Step 3: Square a second time**
$$9 + 6x + x^2 = 9(x+1)$$
- **[M1]** Second squaring (or equivalent quadratic in $y$ where $y = \sqrt{x+1}$).

**Step 4: Solve the quadratic equation**
$$x^2 - 3x = 0 \Rightarrow x(x-3) = 0$$
- **[A1]** Both values $x = 0$ or $x = 3$.

**Step 5: Check and state valid solutions**
Checking $x = 0$: $\sqrt{16} = 3 + \sqrt{1} \Rightarrow 4 = 4$ (valid).
Checking $x = 3$: $\sqrt{25} = 3 + \sqrt{4} \Rightarrow 5 = 5$ (valid).
- **[B1]** Both values $x = 0$ or $3$ (with S+ for checking values).

#### **Part (b)**

**Step 6: Apply logarithm laws**
$$\frac{1}{2}\log_3 x = \log_3 \sqrt{x}$$
- **[B1]** For use of $n\log x$ rule.

**Step 7: Combine logarithms**
$$\log_3(x-7) - \log_3 \sqrt{x} = \log_3 \left(\frac{x-7}{\sqrt{x}}\right)$$
- **[M1]** For reducing $x$'s to a single log.

**Step 8: Remove logarithms**
$$\log_3 \left(\frac{x-7}{\sqrt{x}}\right) = \log_3 3 - \log_3 2 = \log_3 \left(\frac{3}{2}\right)$$
$$\Rightarrow \frac{x-7}{\sqrt{x}} = \frac{3}{2}$$
- **[M1]** For getting out of logs.
- **[A1]** For correct equation: $2x - 14 = 3\sqrt{x}$ (or equivalent, all $x$ terms on same line).

**Step 9: Form a quadratic in $\sqrt{x}$**
$$2(\sqrt{x})^2 - 3\sqrt{x} - 14 = 0$$
$$(2\sqrt{x} - 7)(\sqrt{x} + 2) = 0$$
- **[M1]** Attempt to solve suitable 3-term quadratic in $x$ or $\sqrt{x}$.

**Step 10: Solve for $\sqrt{x}$**
$$\sqrt{x} = \frac{7}{2} \quad \text{or} \quad \sqrt{x} = -2$$
- **[A1]** Either solution for $\sqrt{x}$ or $x$. Must be rational $a/b$.

**Step 11: Solve for $x$ and reject invalid solutions**
Since $\sqrt{x} \ge 0$, we reject $\sqrt{x} = -2$.
$$x = \frac{49}{4}$$
- **[A1]** $49/4$ (or equivalent) only. (S+ for clear reason for rejecting $x = 4$ which comes from squaring $\sqrt{x} = -2$).

---
topic: "Sequences and Series"
subtopic: "Arithmetic series"
---
### **Question 2**

The sum of the first $p$ terms of an arithmetic series is $q$ and the sum of the first $q$ terms of the same arithmetic series is $p$, where $p$ and $q$ are positive integers and $p \neq q$.

Giving simplified answers in terms of $p$ and $q$, find

**(a)** the common difference of the terms in this series, **(5)**

**(b)** the first term of the series, **(3)**

**(c)** the sum of the first $(p+q)$ terms of the series. **(3)**

**(Total 11 marks)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Write down the sum formulae**
$$q = \frac{p}{2}(2a + (p-1)d) \quad \text{and} \quad p = \frac{q}{2}(2a + (q-1)d)$$
- **[M1]** Attempt one sum formula.
- **[A1]** Both expressions correct.

**Step 2: Eliminate $a$**
$$\frac{2q}{p} = 2a + (p-1)d$$
$$\frac{2p}{q} = 2a + (q-1)d$$
Subtracting the two equations:
$$2\left(\frac{q}{p} - \frac{p}{q}\right) = d(p - 1 - q + 1) = d(p - q)$$
- **[dM1]** Eliminate $a$. Dependent on 1st M1. Must use 2 independent equations.

**Step 3: Solve for $d$**
$$2\left(\frac{q^2 - p^2}{pq}\right) = d(p-q)$$
$$d = \frac{2(q^2 - p^2)}{pq(p-q)} = \frac{-2(p^2 - q^2)}{pq(p-q)} = \frac{-2(p-q)(p+q)}{pq(p-q)}$$
$$d = \frac{-2(p+q)}{pq}$$
- **[A1]** Correct elimination of $a$.
- **[A1]** Correct simplified $d = \frac{-2(p+q)}{pq}$.

#### **Part (b)**

**Step 4: Substitute $d$ back to find $a$**
$$2a = \frac{2q}{p} - (p-1)d = \frac{2q}{p} - (p-1)\left(\frac{-2(p+q)}{pq}\right)$$
$$2a = \frac{2q}{p} + \frac{2(p-1)(p+q)}{pq}$$
$$a = \frac{q}{p} + \frac{(p-1)(p+q)}{pq}$$
- **[M1]** Substitute for $d$ in a correct sum formula i.e. equation in $a$ only.

**Step 5: Simplify the expression for $a$**
$$a = \frac{q^2 + (p-1)(p+q)}{pq} = \frac{q^2 + p^2 + pq - p - q}{pq}$$
- **[dM1]** Rearrange to $a = \dots$ Dependent on previous M1.
- **[A1]** Correct single fraction with denominator $= pq$:
$$a = \frac{q^2 + pq + p^2 - p - q}{pq}$$

#### **Part (c)**

**Step 6: Write the sum of $(p+q)$ terms**
$$S_{p+q} = \frac{p+q}{2}[2a + (p+q-1)d]$$
- **[M1]** Attempt sum formula with $n = (p+q)$ and follow-through their $a$ and $d$.

**Step 7: Substitute $a$ and $d$ and simplify**
$$S_{p+q} = \frac{p+q}{2}\left[ \frac{2(q^2 + pq + p^2 - p - q)}{pq} + (p+q-1)\left(\frac{-2(p+q)}{pq}\right) \right]$$
$$S_{p+q} = \frac{p+q}{pq}\left[ (q^2 + pq + p^2 - p - q) - (p+q-1)(p+q) \right]$$
- **[M1]** Attempt to simplify with denominator $= pq$ or $2pq$.

**Step 8: Final simplification**
$$(q^2 + pq + p^2 - p - q) - (p^2 + 2pq + q^2 - p - q) = -pq$$
$$S_{p+q} = \frac{p+q}{pq}[-pq] = -(p+q)$$
- **[A1]** For $-(p+q)$ (S+ for concise simplification/factorising).

---
topic: "Differentiation"
subtopic: "Implicit differentiation"
---
### **Question 3**

The curve $C$ has equation
$$x^2 + y^2 + fxy = g^2$$
where $f$ and $g$ are constants and $g \neq 0$.

**(a)** Find an expression in terms of $\alpha$, $\beta$ and $f$ for the gradient of $C$ at the point $(\alpha, \beta)$. **(4)**

Given that $f < 2$ and $f \neq -2$ and that the gradient of $C$ at the point $(\alpha, \beta)$ is $1$,

**(b)** show that $\alpha = -\beta = \frac{\pm g}{\sqrt{2-f}}$. **(4)**

Given that $f = -2$,

**(c)** sketch $C$. **(3)**

**(Total 11 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Differentiate implicitly**
$$2x + 2y\frac{dy}{dx} + fy + fx\frac{dy}{dx} = 0$$
- **[M1]** Correct attempt to differentiate $y^2$ or $xy$.
- **[A1]** All terms fully correct and $= 0$.

**Step 2: Isolate $\frac{dy}{dx}$**
$$\frac{dy}{dx}(2y + fx) = -(2x + fy) \Rightarrow \frac{dy}{dx} = -\frac{2x + fy}{2y + fx}$$
- **[dM1]** Isolate $y'$. Dependent on 1st M1.

**Step 3: Substitute $(\alpha, \beta)$**
$$m = -\frac{2\alpha + f\beta}{2\beta + f\alpha}$$
- **[A1]** Correct expression for gradient $m$ (or equivalent).

#### **Part (b)**

**Step 4: Set gradient to 1**
$$-\frac{2\alpha + f\beta}{2\beta + f\alpha} = 1 \Rightarrow 2\alpha + f\beta = -2\beta - f\alpha$$
$$(2+f)\alpha = -(2+f)\beta$$
Since $f \neq -2$, we can divide by $2+f$:
$$\alpha = -\beta$$
- **[M1]** Substitute $m = 1$ and form linear equation in $\alpha$ and $\beta$.
- **[A1cso]** Show $\alpha = -\beta$ (S+ for using $f \neq -2$).

**Step 5: Substitute $\alpha = -\beta$ into the curve equation**
$$\alpha^2 + (-\alpha)^2 + f\alpha(-\alpha) = g^2$$
$$2\alpha^2 - f\alpha^2 = g^2 \Rightarrow \alpha^2(2-f) = g^2$$
- **[M1]** Substitute $\alpha = -\beta$ into the equation of the curve.

**Step 6: Solve for $\alpha$ and $\beta$**
$$\alpha^2 = \frac{g^2}{2-f} \Rightarrow \alpha = \frac{\pm g}{\sqrt{2-f}}$$
Since $\beta = -\alpha$:
$$\alpha = -\beta = \frac{\pm g}{\sqrt{2-f}}$$
- **[A1cso]** Simplify to answer (S+ for considering $f < 2$).

#### **Part (c)**

**Step 7: Substitute $f = -2$ into the equation**
$$x^2 + y^2 - 2xy = g^2 \Rightarrow (x-y)^2 = g^2$$
$$x-y = \pm g \Rightarrow y = x \pm g$$
- **[M1]** Attempt to complete the square, allow $\pm$, or show $m = 1$.

**Step 8: Sketch the lines**
The curve $C$ consists of two parallel straight lines: $y = x + g$ and $y = x - g$.
- **[A1]** Line $y = x + g$ sketched.
- **[A1]** Line $y = x - g$ sketched. Sketches should show $y$-intercept or equation at least.

**Figure 1** _(A sketch of the parallel lines $y = x + g$ and $y = x - g$ representing the curve $C$ when $f = -2$.)_

```tikz
\begin{tikzpicture}[scale=0.8]
\draw[->] (-3,0) -- (3,0) node[below] {$x$};
\draw[->] (0,-3) -- (0,3) node[left] {$y$};
\draw[domain=-1.5:1.5, smooth, thick] plot (\x, {\x + 1.5}) node[above right] {$y = x + g$};
\draw[domain=-1.5:1.5, smooth, thick] plot (\x, {\x - 1.5}) node[below right] {$y = x - g$};
\node[left] at (0, 1.5) {$g$};
\node[right] at (0, -1.5) {$-g$};
\node[below] at (-1.5, 0) {$-g$};
\node[above] at (1.5, 0) {$g$};
\end{tikzpicture}
```

---
topic: "Vectors"
subtopic: "Vectors in 3D"
---
### **Question 4**

**Figure 1** _(A cuboid $OABCDEFG$ where $O$ is the origin, $A$ is on the x-axis, $C$ is on the y-axis, and $D$ is on the z-axis. The vertices are labelled such that $OABC$ is the base, and $DEFG$ is the top face directly above the base.)_

```tikz
\begin{tikzpicture}[scale=0.8]
\draw[thick] (0,0) coordinate (O) -- (2,-1) coordinate (A) -- (5,0.5) coordinate (B) -- (3,1.5) coordinate (C) -- cycle;
\draw[thick] (0,4) coordinate (D) -- (2,3) coordinate (E) -- (5,4.5) coordinate (F) -- (3,5.5) coordinate (G) -- cycle;
\draw[thick] (A) -- (E);
\draw[thick] (B) -- (F);
\draw[dashed, thick] (C) -- (G);
\draw[dashed, thick] (O) -- (D);
\node[left] at (O) {$O$};
\node[below] at (A) {$A$};
\node[right] at (B) {$B$};
\node[above left] at (C) {$C$};
\node[left] at (D) {$D$};
\node[left] at (E) {$E$};
\node[right] at (F) {$F$};
\node[above] at (G) {$G$};
\end{tikzpicture}
```

Figure 1 shows a cuboid $OABCDEFG$, where $O$ is the origin, $A$ has position vector $5\mathbf{i}$, $C$ has position vector $10\mathbf{j}$ and $D$ has position vector $20\mathbf{k}$.

**(a)** Find the cosine of angle $CAF$. **(4)**

Given that the point $X$ lies on $AC$ and that $FX$ is perpendicular to $AC$,

**(b)** find the position vector of point $X$ and the distance $FX$. **(7)**

The line $l_1$ passes through $O$ and through the midpoint of the face $ABFE$. The line $l_2$ passes through $A$ and through the midpoint of the edge $FG$.

**(c)** Show that $l_1$ and $l_2$ intersect and find the coordinates of the point of intersection. **(5)**

**(Total 16 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Find vectors $\overrightarrow{AC}$ and $\overrightarrow{AF}$**
$$\overrightarrow{AC} = \mathbf{c} - \mathbf{a} = -5\mathbf{i} + 10\mathbf{j} = \begin{pmatrix} -5 \\ 10 \\ 0 \end{pmatrix}$$
$$\overrightarrow{AF} = \mathbf{f} - \mathbf{a} = (\mathbf{a} + \mathbf{c} + \mathbf{d}) - \mathbf{a} = \mathbf{c} + \mathbf{d} = 10\mathbf{j} + 20\mathbf{k} = \begin{pmatrix} 0 \\ 10 \\ 20 \end{pmatrix}$$
- **[B1]** Vectors $\overrightarrow{AC}$ or $\overrightarrow{AF}$. Condone $\pm$.

**Step 2: Find magnitudes**
$$|\overrightarrow{AC}| = \sqrt{(-5)^2 + 10^2 + 0^2} = \sqrt{125}$$
$$|\overrightarrow{AF}| = \sqrt{0^2 + 10^2 + 20^2} = \sqrt{500}$$
- **[B1]** Correct magnitudes.

**Step 3: Calculate dot product and cosine of angle**
$$\overrightarrow{AC} \cdot \overrightarrow{AF} = (-5)(0) + (10)(10) + (0)(20) = 100$$
$$\cos \angle CAF = \frac{\overrightarrow{AC} \cdot \overrightarrow{AF}}{|\overrightarrow{AC}||\overrightarrow{AF}|} = \frac{100}{\sqrt{125}\sqrt{500}} = \frac{2}{5} = 0.4$$
- **[M1]** Complete method for $\pm \cos(\angle CAF)$.
- **[A1]** $\cos \angle CAF = \frac{2}{5}$ or $0.4$.

#### **Part (b)**

**Step 4: Express position vector of $X$**
Since $X$ lies on $AC$:
$$\overrightarrow{OX} = \overrightarrow{OA} + t\overrightarrow{AC} = \begin{pmatrix} 5 \\ 0 \\ 0 \end{pmatrix} + t\begin{pmatrix} -5 \\ 10 \\ 0 \end{pmatrix} = \begin{pmatrix} 5 - 5t \\ 10t \\ 0 \end{pmatrix}$$
- **[M1]** Attempt equation for $AC$ or variable $\overrightarrow{OX}$.

**Step 5: Express vector $\overrightarrow{FX}$**
$$\overrightarrow{OF} = \begin{pmatrix} 5 \\ 10 \\ 20 \end{pmatrix}$$
$$\overrightarrow{FX} = \overrightarrow{OX} - \overrightarrow{OF} = \begin{pmatrix} 5 - 5t \\ 10t \\ 0 \end{pmatrix} - \begin{pmatrix} 5 \\ 10 \\ 20 \end{pmatrix} = \begin{pmatrix} -5t \\ 10t - 10 \\ -20 \end{pmatrix}$$
- **[M1]** Attempt $\overrightarrow{FX}$. Must be in terms of one unknown.

**Step 6: Use perpendicularity condition**
$$\overrightarrow{FX} \cdot \overrightarrow{AC} = 0 \Rightarrow \begin{pmatrix} -5t \\ 10t - 10 \\ -20 \end{pmatrix} \cdot \begin{pmatrix} -5 \\ 10 \\ 0 \end{pmatrix} = 0$$
$$25t + 100t - 100 = 0 \Rightarrow 125t = 100 \Rightarrow t = 0.8$$
- **[M1]** Correct use of dot product to get linear equation in $t$.
- **[A1]** $t = 0.8$ (or equivalent).

**Step 7: Find position vector of $X$ and distance $FX$**
$$\overrightarrow{OX} = \begin{pmatrix} 5 - 5(0.8) \\ 10(0.8) \\ 0 \end{pmatrix} = \begin{pmatrix} 1 \\ 8 \\ 0 \end{pmatrix}$$
$$\overrightarrow{FX} = \begin{pmatrix} -4 \\ -2 \\ -20 \end{pmatrix}$$
$$|\overrightarrow{FX}| = \sqrt{(-4)^2 + (-2)^2 + (-20)^2} = \sqrt{420}$$
- **[A1]** Correct vector $\overrightarrow{OX} = \mathbf{i} + 8\mathbf{j}$ (or $\begin{pmatrix} 1 \\ 8 \\ 0 \end{pmatrix}$).
- **[M1]** Attempt $|\overrightarrow{FX}|$.
- **[A1]** $|\overrightarrow{FX}| = \sqrt{420}$ (or equivalent).

#### **Part (c)**

**Step 8: Find equations of lines $l_1$ and $l_2$**
Midpoint of face $ABFE$:
$$M_{ABFE} = \begin{pmatrix} 5 \\ 5 \\ 10 \end{pmatrix}$$
Equation of $l_1$ (passes through $O$ and $M_{ABFE}$):
$$\mathbf{r}_1 = \lambda \begin{pmatrix} 5 \\ 5 \\ 10 \end{pmatrix}$$
Midpoint of edge $FG$:
$$M_{FG} = \begin{pmatrix} 2.5 \\ 10 \\ 20 \end{pmatrix}$$
Equation of $l_2$ (passes through $A(5, 0, 0)$ and $M_{FG}$):
$$\mathbf{r}_2 = \begin{pmatrix} 5 \\ 0 \\ 0 \end{pmatrix} + \mu \begin{pmatrix} -2.5 \\ 10 \\ 20 \end{pmatrix}$$
- **[B1]** Correct vector equation for $l_1$.
- **[B1]** Correct vector equation for $l_2$.

**Step 9: Solve for intersection**
Equating components:
1) $5\lambda = 5 - 2.5\mu$
2) $5\lambda = 10\mu$
3) $10\lambda = 20\mu$

From 2): $\lambda = 2\mu$
Substitute into 1):
$$5(2\mu) = 5 - 2.5\mu \Rightarrow 12.5\mu = 5 \Rightarrow \mu = 0.4$$
Then $\lambda = 0.8$.
- **[M1]** Clear attempt to solve leading to $\lambda = \dots$ or $\mu = \dots$
- **[A1]** $\lambda = 0.8$, $\mu = 0.4$.

**Step 10: Find coordinates of intersection**
Using $\lambda = 0.8$ in $l_1$:
$$\mathbf{r} = 0.8 \begin{pmatrix} 5 \\ 5 \\ 10 \end{pmatrix} = \begin{pmatrix} 4 \\ 4 \\ 8 \end{pmatrix}$$
Since both lines yield the same point, they intersect at $(4, 4, 8)$.
- **[A1]** Intersection at the point $(4, 4, 8)$ (S+ for clear attempt to check intersection).

---
topic: "Integration"
subtopic: "Integration by substitution"
---
### **Question 5**

$$I = \int \frac{1}{(x-1)\sqrt{x^2-1}} \, \mathrm{d}x, \quad x > 1$$

**(a)** Use the substitution $x = 1 + u^{-1}$ to show that
$$I = -\left(\frac{x+1}{x-1}\right)^{\frac{1}{2}} + c$$
**(7)**

**(b)** Hence show that
$$\int_{\sec \alpha}^{\sec \beta} \frac{1}{(x-1)\sqrt{x^2-1}} \, \mathrm{d}x = \cot\left(\frac{\alpha}{2}\right) - \cot\left(\frac{\beta}{2}\right), \quad 0 < \alpha < \beta < \frac{\pi}{2}$$
**(5)**

**(Total 12 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Find $\mathrm{d}x$ in terms of $\mathrm{d}u$**
$$x = 1 + u^{-1} \Rightarrow \frac{\mathrm{d}x}{\mathrm{d}u} = -u^{-2} = -\frac{1}{u^2}$$
- **[B1]** Correct $\mathrm{d}x/\mathrm{d}u$ (or equivalent).

**Step 2: Substitute into the integral**
$$x - 1 = u^{-1}$$
$$x^2 - 1 = (1 + u^{-1})^2 - 1 = 2u^{-1} + u^{-2}$$
$$I = \int \frac{1}{u^{-1}\sqrt{2u^{-1} + u^{-2}}} \left(-\frac{1}{u^2}\right) \mathrm{d}u$$
- **[M1]** Attempt to get $I$ in $u$ only.

**Step 3: Simplify the integrand**
$$I = -\int \frac{1}{\sqrt{2u+1}} \, \mathrm{d}u$$
- **[A1]** Correct simplified expression in $u$ only.

**Step 4: Integrate with respect to $u$**
$$I = -\int (2u+1)^{-\frac{1}{2}} \, \mathrm{d}u = -(2u+1)^{\frac{1}{2}} + c$$
- **[M1]** Attempt to integrate their $I$.
- **[A1]** Correct integration.

**Step 5: Substitute back in terms of $x$**
Since $u = \frac{1}{x-1}$:
$$I = -\left(2\left(\frac{1}{x-1}\right) + 1\right)^{\frac{1}{2}} + c = -\left(\frac{x+1}{x-1}\right)^{\frac{1}{2}} + c$$
- **[M1]** Substitute back in $x$.
- **[A1cso]** Correct final expression including $+ c$.

#### **Part (b)**

**Step 6: Apply the limits to the integrated function**
Using the result from part (a):
$$\left[ -\left(\frac{x+1}{x-1}\right)^{\frac{1}{2}} \right]_{\sec \alpha}^{\sec \beta} = \left(\frac{\sec \alpha + 1}{\sec \alpha - 1}\right)^{\frac{1}{2}} - \left(\frac{\sec \beta + 1}{\sec \beta - 1}\right)^{\frac{1}{2}}$$
- **[M1]** Use of part (a).

**Step 7: Convert secant to cosine**
$$\frac{\sec \theta + 1}{\sec \theta - 1} = \frac{1 + \cos \theta}{1 - \cos \theta}$$
- **[M1]** Multiply by $\cos x$.

**Step 8: Apply half-angle identities**
$$1 + \cos \theta = 2\cos^2\left(\frac{\theta}{2}\right)$$
$$1 - \cos \theta = 2\sin^2\left(\frac{\theta}{2}\right)$$
$$\Rightarrow \left(\frac{1 + \cos \theta}{1 - \cos \theta}\right)^{\frac{1}{2}} = \left(\frac{2\cos^2\left(\frac{\theta}{2}\right)}{2\sin^2\left(\frac{\theta}{2}\right)}\right)^{\frac{1}{2}} = \cot\left(\frac{\theta}{2}\right)$$
- **[M1]** Use of half-angle formulae.
- **[M1]** Correct removal of square root.
- **[A1cso]** Complete proof showing $\cot\left(\frac{\alpha}{2}\right) - \cot\left(\frac{\beta}{2}\right)$.

---
topic: "Differentiation"
subtopic: "Stationary points"
---
### **Question 6**

**(a)** Given that $x^4 + y^4 = 1$, prove that $x^2 + y^2$ is a maximum when $x = \pm y$, and find the maximum and minimum values of $x^2 + y^2$. **(7)**

**(b)** On the same diagram, sketch the curves $C_1$ and $C_2$ with equations $x^4 + y^4 = 1$ and $x^2 + y^2 = 1$ respectively. **(2)**

**(c)** Write down the equation of the circle $C_3$, centre the origin, which touches the curve $C_1$ at the points where $x = \pm y$. **(1)**

**(Total 10 marks)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Express $A = x^2 + y^2$ as a function of $x$**
From $x^4 + y^4 = 1 \Rightarrow y^2 = (1 - x^4)^{\frac{1}{2}}$.
$$A = x^2 + (1 - x^4)^{\frac{1}{2}}$$
- **[B1]** $A$ as a function of $x$ only.

**Step 2: Differentiate $A$ with respect to $x$**
$$\frac{\mathrm{d}A}{\mathrm{d}x} = 2x - 2x^3(1 - x^4)^{-\frac{1}{2}}$$
- **[M1]** For some correct differentiation (more than just $2x$).

**Step 3: Find stationary points**
Set $\frac{\mathrm{d}A}{\mathrm{d}x} = 0$:
$$2x\left(1 - \frac{x^2}{\sqrt{1 - x^4}}\right) = 0$$
So $x = 0$ or $x^2 = \sqrt{1 - x^4}$.
- **[A1]** For $x^2 = (1 - x^4)^{\frac{1}{2}}$.
- **[B1]** For $x = 0$ (which gives the minimum value $A = 1$).

**Step 4: Solve for $x^2 = \sqrt{1 - x^4}$**
$$x^4 = 1 - x^4 \Rightarrow 2x^4 = 1 \Rightarrow x^4 = \frac{1}{2}$$
Since $y^4 = 1 - x^4 = \frac{1}{2}$, we have $x^4 = y^4 \Rightarrow x = \pm y$.
- **[M1]** For reaching $y = \pm x$.

**Step 5: Find maximum and minimum values**
When $x = \pm y$:
$$x^2 = y^2 = \frac{1}{\sqrt{2}}$$
$$A_{\text{max}} = x^2 + y^2 = \sqrt{2}$$
When $x = 0$:
$$y^2 = 1 \Rightarrow A_{\text{min}} = 1$$
- **[B1]** For maximum $= \sqrt{2}$.
- **[B1]** For minimum $= 1$.

#### **Part (b)**

**Step 6: Sketch the curves**
- $C_2$: $x^2 + y^2 = 1$ is a circle of radius 1, centred at the origin.
- $C_1$: $x^4 + y^4 = 1$ is a squircle that lies outside the circle $C_2$ except at the axial intercepts $(1,0), (-1,0), (0,1), (0,-1)$ where they touch.
- **[B1]** Circle, centre $(0,0)$, radius $r = 1$.
- **[B1]** Other curve (squircle shape, outside the circle).

**Figure 2** _(A sketch showing the circle $C_2$ with equation $x^2 + y^2 = 1$ and the squircle $C_1$ with equation $x^4 + y^4 = 1$ intersecting at the axes.)_

```tikz
\begin{tikzpicture}[scale=1.5]
\draw[->] (-1.5,0) -- (1.5,0) node[below] {$x$};
\draw[->] (0,-1.5) -- (0,1.5) node[left] {$y$};
\draw[thick, blue] (0,0) circle (1) node[below left] {$C_2$};
\draw[thick, red, samples=100, domain=-1:1] plot (\x, {(1 - (\x)^4)^(0.25)});
\draw[thick, red, samples=100, domain=-1:1] plot (\x, {-(1 - (\x)^4)^(0.25)}) node[above right] {$C_1$};
\node[below right] at (1,0) {$1$};
\node[above left] at (0,1) {$1$};
\end{tikzpicture}
```

#### **Part (c)**

**Step 7: Write down the equation of $C_3$**
The circle $C_3$ touches $C_1$ at the points where $x = \pm y$, which are the points of maximum distance from the origin on $C_1$.
The radius of this circle is $\sqrt{x^2 + y^2} = \sqrt{\sqrt{2}} = 2^{\frac{1}{4}}$.
Thus, the equation of the circle is:
$$x^2 + y^2 = \sqrt{2}$$
- **[B1]** $x^2 + y^2 = \sqrt{2}$ (S+ for some explanation).

---
topic: "Trigonometry and Modelling"
subtopic: "Proving trigonometric identities"
---
### **Question 7**

$$f(x) = \left[1 + \cos\left(x + \frac{\pi}{4}\right)\right]\left[1 + \sin\left(x + \frac{\pi}{4}\right)\right], \quad 0 \le x \le 2\pi$$

**(a)** Show that $f(x)$ may be written in the form
$$f(x) = \left(\frac{1}{\sqrt{2}} + \cos x\right)^2, \quad 0 \le x \le 2\pi$$
**(5)**

**(b)** Find the range of the function $f(x)$. **(2)**

The graph of $y = f(x)$ is shown in Figure 2.

**Figure 2** _(A sketch of the curve $y = f(x)$ for $0 \le x \le 2\pi$, showing a wave-like shape with two peaks at the ends and a minimum touching the x-axis.)_

```tikz
\begin{tikzpicture}[scale=0.8]
\draw[->] (-0.5,0) -- (7,0) node[below] {$x$};
\draw[->] (0,-0.5) -- (0,3.5) node[left] {$y$};
\draw[domain=0:6.28, smooth, thick, samples=100] plot (\x, {(1/1.414 + cos(\x r))^2});
\node[below left] at (0,0) {$O$};
\node[below] at (6.28,0) {$2\pi$};
\node[right] at (5.5, 2.5) {$y = f(x)$};
\end{tikzpicture}
```

**(c)** Find the coordinates of all the maximum and minimum points on this curve. **(6)**

**Figure 3** _(The same curve $y = f(x)$ with a horizontal line $y = 2$ intersecting it, and the region $R$ between the line and the curve shaded.)_

```tikz
\begin{tikzpicture}[scale=0.8]
\draw[->] (-0.5,0) -- (7,0) node[below] {$x$};
\draw[->] (0,-0.5) -- (0,3.5) node[left] {$y$};
\draw[domain=0:6.28, smooth, thick, samples=100] plot (\x, {(1/1.414 + cos(\x r))^2});
\draw[thick] (-0.5,2) -- (7,2) node[right] {$y = 2$};

% Fill region R
\fill[gray!30, domain=0.785:5.495, samples=100] (0.785, 2) -- plot (\x, {(1/1.414 + cos(\x r))^2}) -- (5.495, 2) -- cycle;
\draw[domain=0:6.28, smooth, thick, samples=100] plot (\x, {(1/1.414 + cos(\x r))^2});
\draw[thick] (-0.5,2) -- (7,2);

\node[below left] at (0,0) {$O$};
\node[below] at (6.28,0) {$2\pi$};
\node[right] at (5.5, 2.5) {$y = f(x)$};
\node at (3.14, 1) {$R$};
\end{tikzpicture}
```

The region $R$, bounded by $y = 2$ and $y = f(x)$, is shown shaded in Figure 3.

**(d)** Find the area of $R$. **(8)**

**(Total 21 marks)**

### **Mark Scheme 7**

#### **Part (a)**

**Step 1: Expand the compound angles**
$$\cos\left(x + \frac{\pi}{4}\right) = \frac{1}{\sqrt{2}}(\cos x - \sin x)$$
$$\sin\left(x + \frac{\pi}{4}\right) = \frac{1}{\sqrt{2}}(\sin x + \cos x)$$
- **[M1]** Use of $\sin(A+B)$ etc.
- **[B1]** $\sin\frac{\pi}{4} = \cos\frac{\pi}{4} = \frac{1}{\sqrt{2}}$.

**Step 2: Substitute and expand the product**
$$f(x) = 1 + \sqrt{2}\cos x + \frac{1}{2}(\cos^2 x - \sin^2 x)$$
- **[M1]** Multiply out and remove $\sin x \cos x$ terms.

**Step 3: Express in terms of $\cos x$ only**
$$f(x) = \frac{1}{2} + \sqrt{2}\cos x + \cos^2 x$$
- **[M1]** Equation in $\cos x$ only.

**Step 4: Complete the square**
$$f(x) = \left(\frac{1}{\sqrt{2}} + \cos x\right)^2$$
- **[A1cso]** Correctly shown.

#### **Part (b)**

**Step 5: Find the range of $f(x)$**
Since $-1 \le \cos x \le 1$:
The minimum value of $f(x)$ is $0$ (when $\cos x = -\frac{1}{\sqrt{2}}$).
The maximum value occurs when $\cos x = 1$:
$$f(x)_{\text{max}} = \left(\frac{1}{\sqrt{2}} + 1\right)^2 = \frac{3}{2} + \sqrt{2}$$
Thus, the range is:
$$0 \le f(x) \le \frac{3}{2} + \sqrt{2}$$
- **[M1]** $f(x) \ge 0$ or $f(x) \le \left(\frac{1}{\sqrt{2}} + 1\right)^2$.
- **[A1]** Both correct (M1A0 for strict inequalities).

#### **Part (c)**

**Step 6: Find maximum points**
Maximum occurs when $\cos x = 1 \Rightarrow x = 0$ or $x = 2\pi$.
The $y$-coordinate is $\frac{3}{2} + \sqrt{2}$.
So the maximum points are:
$$\left(0, \frac{3}{2} + \sqrt{2}\right) \quad \text{and} \quad \left(2\pi, \frac{3}{2} + \sqrt{2}\right)$$
- **[B1]** First maximum point.
- **[B1ft]** Second maximum point.

**Step 7: Find minimum points**
Minimum occurs when $\frac{1}{\sqrt{2}} + \cos x = 0 \Rightarrow \cos x = -\frac{1}{\sqrt{2}}$.
$$x = \frac{3\pi}{4} \quad \text{or} \quad x = \frac{5\pi}{4}$$
The $y$-coordinate is $0$.
So the minimum points are:
$$\left(\frac{3\pi}{4}, 0\right) \quad \text{and} \quad \left(\frac{5\pi}{4}, 0\right)$$
- **[M1]** For $y = 0$ at $\cos x = -\frac{1}{\sqrt{2}}$.
- **[A1]** Correct $x$-coordinates.

**Step 8: Find local maximum point**
Differentiating $f(x)$:
$$f'(x) = -2\sin x\left(\frac{1}{\sqrt{2}} + \cos x\right)$$
Set $f'(x) = 0 \Rightarrow \sin x = 0 \Rightarrow x = \pi$.
When $x = \pi$:
$$y = f(\pi) = \left(\frac{1}{\sqrt{2}} - 1\right)^2 = \frac{3}{2} - \sqrt{2}$$
So there is a local maximum at:
$$\left(\pi, \frac{3}{2} - \sqrt{2}\right)$$
- **[M1]** For $f'(x) = 0$ and $x = \pi$.
- **[A1]** For local maximum point.

#### **Part (d)**

**Step 9: Find the points of intersection of $y = 2$ and $y = f(x)$**
$$\left(\frac{1}{\sqrt{2}} + \cos x\right)^2 = 2 \Rightarrow \frac{1}{\sqrt{2}} + \cos x = \sqrt{2}$$
$$\cos x = \frac{1}{\sqrt{2}} \Rightarrow x = \frac{\pi}{4} \quad \text{or} \quad x = \frac{7\pi}{4}$$
- **[M1]** Form and solve correct equation.
- **[A1]** Both $x$-coordinates correct.

**Step 10: Set up the area integral**
$$\text{Area} = \int_{\frac{\pi}{4}}^{\frac{7\pi}{4}} (2 - f(x)) \, \mathrm{d}x$$
- **[M1]** Correct strategy (or rectangle minus integral).

**Step 11: Express the integrand in a suitable form for integration**
$$2 - f(x) = 1 - \sqrt{2}\cos x - \frac{1}{2}\cos 2x$$
- **[M1]** All terms of integral in suitable form.

**Step 12: Integrate**
$$\int \left(1 - \sqrt{2}\cos x - \frac{1}{2}\cos 2x\right) \mathrm{d}x = \left[ x - \sqrt{2}\sin x - \frac{1}{4}\sin 2x \right]_{\frac{\pi}{4}}^{\frac{7\pi}{4}}$$
- **[dM1]** For some correct integration. Dependent on previous M.
- **[A1]** All terms integrated correctly.

**Step 13: Evaluate the definite integral**
Evaluating at limits $\frac{7\pi}{4}$ and $\frac{\pi}{4}$:
$$\text{Area} = \left(\frac{7\pi}{4} + \frac{5}{4}\right) - \left(\frac{\pi}{4} - \frac{5}{4}\right) = \frac{3\pi}{2} + \frac{5}{2}$$
- **[dM1]** Use of their correct limits. Dependent on 1st M1.
- **[A1]** $\frac{3\pi}{2} + \frac{5}{2}$ (or equivalent).
