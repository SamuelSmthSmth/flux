---
topic: "Circles"
subtopic: "Equation of a circle"
---
### **Question 1**

A circle $C$ has equation $x^2 + y^2 - 6x + 8y - 24 = 0$.

Find the greatest and least distance of a point on $C$ from the origin $O$. **(6)**

### **Mark Scheme 1**

**Step 1: Complete the square to find the centre and radius**
$$(x-3)^2 + (y+4)^2 = 24 + 9 + 16 = 49$$
- **[M1]** Attempts to complete the square for both $x$ and $y$.
- **[A1]** Identifies the curve is a circle with centre $(3, -4)$ and radius $7$.

**Step 2: Find the distance from the origin to the centre**
**Figure 1** _(A sketch of the circle with centre $(3, -4)$ and radius $7$, showing the origin $O$ inside the circle and the line passing through $O$ and the centre $C$ to the furthest point $P$)_
$$OC = \sqrt{3^2 + (-4)^2} = 5$$
- **[M1]** Uses Pythagoras to find the distance from the origin to the centre.

**Step 3: Calculate the greatest and least distances**
$$\text{Greatest length } OP = 5 + r = 12$$
- **[M1]** Method for greatest (or least) length using $OC \pm r$.
- **[A1]** Correct greatest length of $12$.
$$\text{Least length } = r - 5 = 2$$
- **[A1]** Correct least length of $2$.

---
topic: "Trigonometric Identities and Equations"
subtopic: "Equations and identities"
---
### **Question 2**

Solve, for $0 \le \theta < 2\pi$, the equation
$$\sin 2\theta + \cos 2\theta + 1 = \sqrt{6}\cos\theta$$ **(8)**

### **Mark Scheme 2**

**Step 1: Use double angle formulae**
$$2\sin\theta\cos\theta + \cos 2\theta + 1 = \sqrt{6}\cos\theta$$
- **[M1]** Uses $\sin 2\theta = 2\sin\theta\cos\theta$.
$$2\sin\theta\cos\theta + 2\cos^2\theta = \sqrt{6}\cos\theta$$
- **[M1]** Uses $\cos 2\theta + 1 = 2\cos^2\theta$.

**Step 2: Factorise the equation**
$$\cos\theta(2\sin\theta + 2\cos\theta - \sqrt{6}) = 0$$
- **[M1]** Factorises out $\cos\theta$.

**Step 3: Solve for $\cos\theta = 0$**
$$\cos\theta = 0 \Rightarrow \theta = \frac{\pi}{2}, \frac{3\pi}{2}$$
- **[A1]** Both values correct.

**Step 4: Solve the remaining trigonometric equation**
$$\sin\theta + \cos\theta = \frac{\sqrt{6}}{2}$$
$$\sqrt{2}\sin\left(\theta + \frac{\pi}{4}\right) = \frac{\sqrt{6}}{2}$$
- **[M1]** Uses the form $R\sin(\theta + \alpha)$ or $R\cos(\theta - \alpha)$.
$$\sin\left(\theta + \frac{\pi}{4}\right) = \frac{\sqrt{3}}{2}$$
- **[A1]** Correct simplified equation.

**Step 5: Find the angles**
$$\theta + \frac{\pi}{4} = \frac{\pi}{3} \text{ or } \frac{2\pi}{3}$$
- **[M1]** Finds two values for $\theta + \frac{\pi}{4}$.
$$\theta = \frac{\pi}{12}, \frac{5\pi}{12}$$
- **[A1]** Both values correct.

---
topic: "Integration"
subtopic: "Solving differential equations"
---
### **Question 3**

By considering $\frac{d}{dx}(u\sqrt{x})$, or otherwise, solve the differential equation
$$\frac{d}{dx}(u\sqrt{x}) = \frac{1}{2\sqrt{x}}\frac{du}{dx}$$
for $0 < x < \frac{1}{2}$, given that $u = 4$ when $x = \frac{3}{8}$. **(9)**

### **Mark Scheme 3**

**Step 1: Differentiate using the product rule**
$$\frac{d}{dx}(u\sqrt{x}) = \sqrt{x}\frac{du}{dx} + \frac{1}{2\sqrt{x}}u$$
- **[M1]** Applies the product rule to $u\sqrt{x}$.

**Step 2: Substitute into the differential equation**
$$\sqrt{x}\frac{du}{dx} + \frac{1}{2\sqrt{x}}u = \frac{1}{2\sqrt{x}}\frac{du}{dx}$$
- **[A1]** Correct substitution, with all derivatives completed.

**Step 3: Rearrange and simplify**
$$\frac{du}{dx}\left(\frac{1}{2\sqrt{x}} - \sqrt{x}\right) = \frac{1}{2\sqrt{x}}u$$
- **[M1]** Groups terms in $\frac{du}{dx}$ and $u$.
$$\frac{du}{dx}(1 - 2x) = u$$
- **[A1]** Correct simplified equation.

**Step 4: Separate variables and integrate**
$$\int \frac{du}{u} = \int \frac{dx}{1-2x}$$
- **[M1]** Separates variables.
$$\ln u = -\frac{1}{2}\ln(1-2x) + \ln K$$
- **[M1]** Integrates both sides, including a constant of integration.
- **[A1]** Correct integration (condone $\ln(2x-1)$).

**Step 5: Apply the boundary condition**
Since $0 < x < \frac{1}{2}$, $1-2x > 0$.
Using $u = 4$ when $x = \frac{3}{8}$:
$$\ln 4 = -\frac{1}{2}\ln\left(1 - \frac{3}{4}\right) + \ln K \Rightarrow 16 = \frac{K}{1 - 3/4} \Rightarrow K = 4$$
- **[M1]** Uses the boundary condition to find the constant.
$$u = 2(1-2x)^{-1/2}$$
- **[A1]** Correct final expression for $u$.

---
topic: "Differentiation"
subtopic: "Modelling with differentiation"
---
### **Question 4**

**Figure 1** _(A rectangle $ABCD$ inscribed under the curve $y = \cos x$ from $-\pi/2$ to $\pi/2$, with vertices $A(p, 0)$ and $B(-p, 0)$ on the x-axis)_

Figure 1 shows a rectangle $ABCD$ inscribed under the curve $y = \cos x$, $-\frac{\pi}{2} \le x \le \frac{\pi}{2}$, where $A$ has coordinates $(p, 0)$ and $B$ has coordinates $(-p, 0)$.

**(a)** Show that the area $A$ of the rectangle is given by $A = 2p\cos p$. **(2)**

**(b)** Show that the value of $p$ for which the area is a maximum, $\alpha$, satisfies $\alpha\tan\alpha = 1$, and show that $\frac{\pi}{4} < \alpha < 1$. **(6)**

**(c)** Show that the maximum area of the rectangle is $\frac{2\alpha^2}{\sqrt{1+\alpha^2}}$. **(2)**

**(d)** Show that the maximum area $S$ satisfies
$$\frac{\pi^2}{2\sqrt{16+\pi^2}} < S < \sqrt{2}$$ **(3)**

**(Total 13 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Identify coordinates and write area**
By symmetry, $B$ is $(-p, 0)$.
$$\text{Area} = 2p\cos p$$
- **[M1]** Recognises the width is $2p$ or height is $\cos p$.
- **[A1]** Correct expression for the area.

#### **Part (b)**

**Step 2: Differentiate the area function**
$$\frac{dA}{dp} = 2\cos p - 2p\sin p$$
- **[B1]** Correct derivative.

**Step 3: Set derivative to zero**
$$\frac{dA}{dp} = 0 \Rightarrow 1 = p\tan p$$
So when $p = \alpha$, $\alpha\tan\alpha = 1$.
- **[B1]** Shows that the maximum occurs when $\alpha\tan\alpha = 1$.

**Step 4: Use interval analysis to show the root lies in $(\pi/4, 1)$**
Let $f(p) = p\tan p - 1$.
$$f\left(\frac{\pi}{4}\right) = \frac{\pi}{4} - 1 < 0$$
- **[M1]** Evaluates $f(p)$ at one end of the interval.
- **[A1]** Correct value and sign for $f(\pi/4)$.
$$f(1) = \tan 1 - 1 > 0 \quad \left(\text{since } 1 > \frac{\pi}{4}\right)$$
- **[A1]** Correct value and sign for $f(1)$, with a valid reason.
Since there is a change of sign, $\frac{\pi}{4} < \alpha < 1$.
- **[A1]** Concludes with a change of sign argument.

#### **Part (c)**

**Step 5: Express maximum area in terms of $\alpha$**
$$\text{Max. area} = 2\alpha\cos\alpha$$
With $\tan\alpha = \frac{1}{\alpha}$:
Using a right-angled triangle with opposite $1$ and adjacent $\alpha$, the hypotenuse is $\sqrt{1+\alpha^2}$.
$$\cos\alpha = \frac{\alpha}{\sqrt{1+\alpha^2}}$$
- **[M1]** Uses trigonometry to express $\cos\alpha$ in terms of $\alpha$.
$$\text{Max. area} = \frac{2\alpha^2}{\sqrt{1+\alpha^2}}$$
- **[A1]** Correctly derives the given expression.

#### **Part (d)**

**Step 6: Differentiate the maximum area function $S$**
$$\frac{dS}{d\alpha} = \frac{4\alpha\sqrt{1+\alpha^2} - 2\alpha^3/\sqrt{1+\alpha^2}}{1+\alpha^2} = \frac{4\alpha + 2\alpha^3}{(1+\alpha^2)^{3/2}} > 0$$
- **[M1]** Differentiates $S$ with respect to $\alpha$ and shows it is positive.
Therefore, $S$ is an increasing function as $\alpha$ varies.

**Step 7: Substitute the bounds of $\alpha$**
Since $\frac{\pi}{4} < \alpha < 1$, $S$ lies between:
$$S\left(\frac{\pi}{4}\right) = \frac{2(\pi/4)^2}{\sqrt{1+(\pi/4)^2}} = \frac{\pi^2}{2\sqrt{16+\pi^2}}$$
- **[M1]** Substitutes $\alpha = 1$ and $\alpha = \frac{\pi}{4}$ into the expression for $S$.
$$S(1) = \frac{2(1)^2}{\sqrt{1+1^2}} = \sqrt{2}$$
$$\Rightarrow \frac{\pi^2}{2\sqrt{16+\pi^2}} < S < \sqrt{2}$$
- **[A1]** Correctly establishes the inequality.

---
topic: "Vectors"
subtopic: "Solving geometric problems"
---
### **Question 5**

The points $A$ and $B$ have coordinates $(7, 2, -7)$ and $(12, 3, -15)$ respectively. The line $L_1$ passes through $A$ and $B$.

**(a)** Find a vector equation for $L_1$. **(2)**

The line $L_2$ has equation
$$\mathbf{r} = \begin{pmatrix} -4 \\ 0 \\ 12 \end{pmatrix} + \mu \begin{pmatrix} 1 \\ 0 \\ -3 \end{pmatrix}$$

**(b)** Show that $L_2$ passes through the origin $O$. **(1)**

**(c)** Show that $L_1$ and $L_2$ intersect, and find the coordinates of their point of intersection $C$. **(3)**

**(d)** Find the cosine of the acute angle $\alpha$ between $L_1$ and $L_2$. **(3)**

**(e)** Find the shortest distance from $O$ to $L_1$. **(3)**

**(f)** Show that $|\vec{OC}| = |\vec{AB}|$. **(2)**

**(g)** Show that the line which bisects the acute angle between $L_1$ and $L_2$ has equation
$$\mathbf{r} = \begin{pmatrix} -3 \\ 0 \\ 9 \end{pmatrix} + t \begin{pmatrix} 8 \\ 1 \\ -17 \end{pmatrix}$$ **(5)**

**(Total 19 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Find the vector $\vec{AB}$ and equation of $L_1$**
$$\vec{AB} = \begin{pmatrix} 5 \\ 1 \\ -8 \end{pmatrix}$$
$$\mathbf{r} = \begin{pmatrix} 7 \\ 2 \\ -7 \end{pmatrix} + \lambda \begin{pmatrix} 5 \\ 1 \\ -8 \end{pmatrix}$$
- **[M1]** Finds the direction vector $\vec{AB}$.
- **[A1]** Correct vector equation for $L_1$.

#### **Part (b)**

**Step 2: Show $L_2$ passes through $O$**
When $\mu = 4$:
$$\mathbf{r} = \begin{pmatrix} -4 \\ 0 \\ 12 \end{pmatrix} + 4 \begin{pmatrix} 1 \\ 0 \\ -3 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$$
Therefore, $L_2$ passes through $O$.
- **[B1]** Shows that $\mu = 4$ gives the origin.

#### **Part (c)**

**Step 3: Set up and solve simultaneous equations**
If the lines intersect:
$$7 + 5\lambda = -4 + \mu$$
$$2 + \lambda = 0 \Rightarrow \lambda = -2$$
$$-7 - 8\lambda = 12 - 3\mu$$
- **[B1]** Writes down any two of the equations.
- **[M1]** Solves the equations to find $\lambda = -2$ and $\mu = 1$.
Check in the third equation:
$$7 - 10 = -4 + 1 \Rightarrow -3 = -3 \quad (\text{or } -7 + 16 = 12 - 3 \Rightarrow 9 = 9)$$
$$\vec{OC} = \begin{pmatrix} -3 \\ 0 \\ 9 \end{pmatrix}$$
- **[A1]** Verifies in the third equation and states the coordinates of $C$ as $(-3, 0, 9)$.

#### **Part (d)**

**Step 4: Find the angle between the lines**
Using $\vec{AC} = \begin{pmatrix} -10 \\ -2 \\ 16 \end{pmatrix}$ (or direction vector $\begin{pmatrix} 5 \\ 1 \\ -8 \end{pmatrix}$) and $\vec{OC} = \begin{pmatrix} -3 \\ 0 \\ 9 \end{pmatrix}$ (or direction vector $\begin{pmatrix} 1 \\ 0 \\ -3 \end{pmatrix}$):
$$\vec{AC} \cdot \vec{OC} = 30 + 0 + 144 = 174$$
- **[M1]** Attempts the scalar product of the direction vectors.
$$|\vec{AC}| = \sqrt{360} = 6\sqrt{10}, \quad |\vec{OC}| = \sqrt{90} = 3\sqrt{10}$$
$$\cos\alpha = \frac{174}{6\sqrt{10} \times 3\sqrt{10}} = \frac{174}{180} = \frac{29}{30}$$
- **[M1]** Divides the scalar product by the product of the magnitudes.
- **[A1]** Correct value of $\cos\alpha = \frac{29}{30}$.

#### **Part (e)**

**Step 5: Find the shortest distance**
$$\text{Shortest distance} = |\vec{OC}|\sin\alpha = 3\sqrt{10}\sqrt{1 - \left(\frac{29}{30}\right)^2}$$
- **[M2]** Complete method for finding the shortest distance.
$$= 3\sqrt{10} \frac{\sqrt{59}}{30} = \sqrt{\frac{59}{10}}$$
- **[A1]** Correct distance.

#### **Part (f)**

**Step 6: Compare magnitudes**
$$|\vec{OC}| = 3\sqrt{10}$$
$$|\vec{AB}| = \sqrt{25 + 1 + 64} = \sqrt{90} = 3\sqrt{10}$$
$$\Rightarrow |\vec{OC}| = |\vec{AB}|$$
- **[M1]** Calculates both lengths.
- **[A1]** Shows they are equal.

#### **Part (g)**

**Step 7: Find the angle bisector**
**Figure 2** _(A geometric diagram showing lines $L_1$ and $L_2$ intersecting at $C$, with points $O$, $A$, $B$, and $X$ forming a rhombus-like structure to find the angle bisector)_
$$\vec{CX} = \vec{CO} + \vec{AB} = \begin{pmatrix} 3 \\ 0 \\ -9 \end{pmatrix} + \begin{pmatrix} 5 \\ 1 \\ -8 \end{pmatrix} = \begin{pmatrix} 8 \\ 1 \\ -17 \end{pmatrix}$$
- **[M1]** Uses vector addition to find the direction of the bisector.
- **[A1]** Correct direction vector $\begin{pmatrix} 8 \\ 1 \\ -17 \end{pmatrix}$.
The vector equation of the bisector is:
$$\mathbf{r} = \vec{OC} + t\vec{CX} \Rightarrow \mathbf{r} = \begin{pmatrix} -3 \\ 0 \\ 9 \end{pmatrix} + t \begin{pmatrix} 8 \\ 1 \\ -17 \end{pmatrix}$$
- **[M1]** Sets up the line equation using $C$ as the position vector.
- **[A1]** Correct final equation.

---
topic: "Graphs and Transformations"
subtopic: "Transforming functions"
---
### **Question 6**

The curve $C$ has equation $y = f(x)$ where $f(x) = x(12 - x^2)$.

**(a)** Find the coordinates of the points where $C$ crosses the $x$-axis, and the coordinates of the local maximum point $Q$. **(4)**

**(b)** Sketch the curves with equations:
**(i)** $y = f(x)$ **(3)**
**(ii)** $y = f(|x|)$ **(3)**
showing clearly the coordinates of any stationary points and intercepts with the axes.

The curve $C$ is translated by the vector $\begin{pmatrix} v \\ w \end{pmatrix}$, where $v > 0$ and $w > 0$, to give the curve $C'$ with equation $y = g(x)$.
Given that $C'$ touches the $x$-axis at the point $T$ and intersects the $y$-axis at the point $S(0, 32)$:

**(c)** Find the values of $v$ and $w$, the coordinates of $T$, and the coordinates of the other point where $C'$ intersects the $x$-axis. **(9)**

**(Total 19 marks)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Find the x-intercepts**
$$f(x) = 0 \Rightarrow x(12 - x^2) = 0 \Rightarrow x = 0, \pm\sqrt{12}$$
So the points are $(0, 0)$ and $(\pm 2\sqrt{3}, 0)$.
- **[B1]** Correct roots.

**Step 2: Find the local maximum**
$$f'(x) = 12 - 3x^2$$
$$f'(x) = 0 \Rightarrow x^2 = 4 \Rightarrow x = 2 \quad (\text{for local max } Q)$$
$$y = 2(12 - 4) = 16 \Rightarrow Q = (2, 16)$$
- **[M1]** Differentiates and sets to zero.
- **[A1]** Correct coordinates of $Q$.

#### **Part (b)**

**Step 3: Sketch $y = f(x)$**
**Figure 3** _(A sketch of the cubic curve $y = x(12-x^2)$ showing rotational symmetry about the origin, with local maximum at $(2, 16)$, local minimum at $(-2, -16)$, and x-intercepts at $\pm\sqrt{12}$_
- **[B1]** Correct shape and symmetry about the origin.
- **[M1]** Labels any one of the key points.
- **[A1]** All key points correctly labelled.

**Step 4: Sketch $y = f(|x|)$**
**Figure 4** _(A sketch of $y = f(|x|)$ showing symmetry about the y-axis, with two peaks at $(\pm 2, 16)$ and x-intercepts at $\pm 2\sqrt{3}$ and the origin)_
- **[B1]** Correct shape and symmetry about the y-axis.
- **[B1]** Correctly labels $(2\sqrt{3}, 0)$ and $(2, 16)$.
- **[B1]** Correctly labels $(-2\sqrt{3}, 0)$ and $(-2, 16)$.

#### **Part (c)**

**Step 5: Determine the vertical translation $w$**
The local minimum of $f(x)$ is at $(-2, -16)$.
Since $C'$ touches the $x$-axis at $T$, the minimum must lie on the $x$-axis.
Therefore, the curve has been translated vertically upwards by $16$ units.
$$w = 16$$
- **[M1]** Identifies that the minimum must move to the x-axis.
- **[A1]** Correct value $w = 16$.

**Step 6: Determine the horizontal translation $v$**
Since $C'$ passes through $S(0, 32)$:
$$g(0) = 32 \Rightarrow f(-v) + w = 32 \Rightarrow f(-v) + 16 = 32 \Rightarrow f(-v) = 16$$
- **[M1]** Sets up the equation for the y-intercept.
$$-v(12 - v^2) = 16 \Rightarrow v^3 - 12v - 16 = 0$$
- **[A1]** Correct cubic equation in $v$.
$$(v+2)^2(v-4) = 0 \Rightarrow v = -2 \text{ or } v = 4$$
- **[M1]** Attempts to solve the cubic equation.
Since the minimum has moved from $x = -2$ to a positive value, we must have $v > 0$.
$$\Rightarrow v = 4$$
- **[A1]** Correct value $v = 4$.

**Step 7: Find the coordinates of $T$**
The original minimum at $(-2, -16)$ is translated by $\begin{pmatrix} 4 \\ 16 \end{pmatrix}$ to:
$$T = (-2+4, -16+16) = (2, 0)$$
- **[B1]** Correct coordinates of $T$.

**Step 8: Find the other x-intercept**
The equation of $C'$ is $y = g(x) = (x-4)(12 - (x-4)^2) + 16$.
To find the x-intercepts, set $g(x) = 0$:
$$(x-4)(12 - (x-4)^2) + 16 = 0$$
Let $X = x-4$:
$$X(12 - X^2) + 16 = 0 \Rightarrow X^3 - 12X - 16 = 0 \Rightarrow (X+2)^2(X-4) = 0$$
$$X = -2 \Rightarrow x = 2 \quad (\text{point } T)$$
$$X = 4 \Rightarrow x = 8$$
So the other point of intersection is $(8, 0)$.
- **[M1]** Sets up and solves the equation for the x-intercepts of $C'$.
- **[A1]** Correctly identifies the other root as $x = 8$.

*(Alternative algebraic solution for Part (c) is also accepted)*

---
topic: "Integration"
subtopic: "Integration by substitution"
---
### **Question 7**

**(a)** Using the substitution $x = \sec\theta$, show that
$$\int \sqrt{x^2 - 1} \, dx = \int \sec\theta\tan^2\theta \, d\theta$$ **(3)**

**(b)** Find
$$\int \sec\theta\tan^2\theta \, d\theta$$ **(7)**

**(c)** Hence, or otherwise, evaluate
$$\int_0^{\pi/4} \sin x \sqrt{2\cos^2 x - 1} \, dx$$ **(9)**

**(Total 19 marks)**

### **Mark Scheme 7**

#### **Part (a)**

**Step 1: Differentiate the substitution**
$$x = \sec\theta \Rightarrow \frac{dx}{d\theta} = \sec\theta\tan\theta \Rightarrow dx = \sec\theta\tan\theta \, d\theta$$
- **[M1]** Correct derivative of $\sec\theta$.

**Step 2: Substitute into the integral**
$$I = \int \sqrt{\sec^2\theta - 1} \cdot \sec\theta\tan\theta \, d\theta$$
- **[M1]** Substitutes $x$ and $dx$ into the integral.
$$= \int \tan\theta \cdot \sec\theta\tan\theta \, d\theta = \int \sec\theta\tan^2\theta \, d\theta$$
- **[A1]** Correctly simplifies to the given expression.

#### **Part (b)**

**Step 3: Set up integration by parts**
Let $J = \int \tan\theta(\sec\theta\tan\theta) \, d\theta$.
Using integration by parts with $u = \tan\theta$ and $dv = \sec\theta\tan\theta \, d\theta$:
$$du = \sec^2\theta \, d\theta, \quad v = \sec\theta$$
- **[M1]** Correct choice of $u$ and $v$.

**Step 4: Apply the integration by parts formula**
$$J = \sec\theta\tan\theta - \int \sec^3\theta \, d\theta$$
- **[A1]** Correct application of integration by parts.
$$J = \sec\theta\tan\theta - \int \sec\theta(1 + \tan^2\theta) \, d\theta$$
- **[M1]** Uses $\sec^2\theta = 1 + \tan^2\theta$ to split the integral.
$$J = \sec\theta\tan\theta - \int \sec\theta \, d\theta - J$$
- **[A1]** Correctly expresses the integral in terms of $J$.

**Step 5: Solve for $J$**
$$2J = \sec\theta\tan\theta - \ln|\sec\theta + \tan\theta|$$
- **[M1]** Integrates $\sec\theta$ and groups the $J$ terms.
$$J = \frac{1}{2}\left[\sec\theta\tan\theta - \ln|\sec\theta + \tan\theta|\right] + C$$
- **[A1]** Correct final integrated expression.

#### **Part (c)**

**Step 6: Apply substitution to the new integral**
Let $K = \int_0^{\pi/4} \sin x \sqrt{2\cos^2 x - 1} \, dx$.
Use the substitution $v = \sqrt{2}\cos x$:
$$dv = -\sqrt{2}\sin x \, dx$$
- **[M1]** Correct substitution and derivative.

**Step 7: Change the limits and rewrite the integral**
When $x = 0$, $v = \sqrt{2}$.
When $x = \pi/4$, $v = 1$.
$$K = -\frac{1}{\sqrt{2}} \int_{\sqrt{2}}^1 \sqrt{v^2 - 1} \, dv = \frac{1}{\sqrt{2}} \int_1^{\sqrt{2}} \sqrt{v^2 - 1} \, dv$$
- **[A1]** Correct integral in terms of $v$ with correct limits.

**Step 8: Use the substitution $v = \sec\theta$**
$$dv = \sec\theta\tan\theta \, d\theta$$
When $v = 1$, $\theta = 0$.
When $v = \sqrt{2}$, $\theta = \frac{\pi}{4}$.
- **[M1]** Changes limits for the second substitution.
$$K = \frac{1}{\sqrt{2}} \int_0^{\pi/4} \sec\theta\tan^2\theta \, d\theta$$
- **[A1]** Correctly transforms the integral.

**Step 9: Evaluate using the result from Part (b)**
$$K = \frac{1}{\sqrt{2}} \cdot \frac{1}{2} \left[ \sec\theta\tan\theta - \ln|\sec\theta + \tan\theta| \right]_0^{\pi/4}$$
- **[M1]** Applies the result from Part (b).
$$= \frac{1}{2\sqrt{2}} \left( \sqrt{2}(1) - \ln(\sqrt{2} + 1) - (0 - 0) \right)$$
- **[M1]** Substitutes the limits.
$$= \frac{1}{2\sqrt{2}} \left( \sqrt{2} - \ln(\sqrt{2} + 1) \right)$$
- **[A1]** Correct final exact value.
