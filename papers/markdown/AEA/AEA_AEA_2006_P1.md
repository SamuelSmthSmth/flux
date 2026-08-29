---
topic: "Binomial Expansion"
subtopic: "Expanding (1 + x)^n"
---
### **Question 1**

**(a)** Write down the binomial expansion of $(1-y)^{-2}$ in ascending powers of $y$ up to and including the term in $y^3$. **(1)**

**(b)** The sum $S$ is given by
$$S = 1 + 2\left(\frac{x}{1+x}\right) + 3\left(\frac{x}{1+x}\right)^2 + \dots$$
Show that $S$ can be written in the form $(a+x)^n$, where $a$ and $n$ are constants to be found. **(4)**

**(c)** Find the set of values of $x$ for which this expansion is valid. **(3)**

**(Total 8 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Write down the expansion**
$$(1-y)^{-2} = 1 + 2y + 3y^2 + 4y^3 + \dots$$
- **[B1]** Correct expansion.

#### **Part (b)**

**Step 2: Identify the substitution**
Identify $y = \frac{x}{1+x}$
- **[M1]** For identifying the substitution $y = \frac{x}{1+x}$.

**Step 3: Substitute and simplify**
$$\Rightarrow S = 1 + 2y + 3y^2 + \dots$$
- **[A1]** For the substituted series.

$$= \left(1 - \frac{x}{1+x}\right)^{-2}$$
$$= \left(\frac{1+x-x}{1+x}\right)^{-2} = \left(\frac{1}{1+x}\right)^{-2} = (1+x)^2$$
- **[M1]** For simplifying the expression inside the brackets.
- **[A1]** For $a = 1, n = 2$.

#### **Part (c)**

**Step 4: Set up the validity condition**
Need $\left|\frac{x}{1+x}\right| < 1$
- **[B1]** For the correct condition.

**Step 5: Find the critical value**
Critical value is $\frac{x}{1+x} = -1 \Rightarrow x = -x - 1 \Rightarrow 2x = -1 \Rightarrow x = -1/2$
- **[M1]** For attempting to find the critical value.

**Step 6: State the range**
$$\therefore x > -1/2$$
- **[A1]** For the correct range.

---
topic: "Trigonometric Identities and Equations"
subtopic: "Harder trigonometric equations"
---
### **Question 2**

Solve, for $0 \le \theta < 360^\circ$, the equation
$$(\sin 2\theta - \sqrt{3}\cos 2\theta)\left(\frac{2\cos 2\theta}{\sin\theta + \cos\theta} - \sqrt{6}\right) = 0$$
**(10)**

**(Total 10 marks)**

### **Mark Scheme 2**

**Step 1: Factorise the equation**
The equation is already factorised:
$$(\sin 2\theta - \sqrt{3}\cos 2\theta)\left[\frac{2\cos 2\theta}{\sin\theta + \cos\theta} - \sqrt{6}\right] = 0$$
- **[M1]** For identifying the two factors.

**Step 2: Solve the first factor**
$$\sin 2\theta - \sqrt{3}\cos 2\theta = 0 \Rightarrow \tan 2\theta = \sqrt{3} \quad \text{or} \quad \sin(2\theta - 60^\circ) = 0$$
- **[A1]** For $\tan 2\theta = \sqrt{3}$ or equivalent.

$$\Rightarrow 2\theta = 60^\circ, 240^\circ, 420^\circ, 600^\circ$$
- **[M1]** For finding multiple values of $2\theta$.

$$\theta = 30^\circ, 120^\circ, 210^\circ, 300^\circ$$
- **[A1]** For all four correct values of $\theta$.

**Step 3: Solve the second factor**
$$\frac{2\cos 2\theta}{\sin\theta + \cos\theta} - \sqrt{6} = 0 \Rightarrow 2(\cos^2\theta - \sin^2\theta) = \sqrt{6}(\sin\theta + \cos\theta)$$
- **[M1]** For using $\cos 2\theta = \cos^2\theta - \sin^2\theta$.

Since $\cos\theta + \sin\theta \ne 0$:
$$2(\cos\theta - \sin\theta)(\cos\theta + \sin\theta) = \sqrt{6}(\cos\theta + \sin\theta)$$
$$\Rightarrow \cos\theta - \sin\theta = \frac{\sqrt{6}}{2}$$
- **[M1]** For factorising and cancelling $(\cos\theta + \sin\theta)$.

**Step 4: Express in the form $R\cos(\theta + \alpha)$**
$$\cos(\theta + 45^\circ) = \frac{\sqrt{6}}{2} \cdot \frac{1}{\sqrt{2}} = \frac{\sqrt{3}}{2}$$
- **[M1]** For using $R\cos(\theta + \alpha)$ method.
- **[A1]** For $\cos(\theta + 45^\circ) = \frac{\sqrt{3}}{2}$.

**Step 5: Solve for $\theta$**
$$\theta + 45^\circ = (30^\circ), 330^\circ, 390^\circ$$
- **[M1]** For at least one correct value for $\theta + 45^\circ$.

$$\theta = 285^\circ, 345^\circ$$
- **[A1]** For both correct values of $\theta$.

---
topic: "Exponentials and Logarithms"
subtopic: "Laws of logarithms"
---
### **Question 3**

**(a)** Show that $\log_y x = \frac{1}{\log_x y}$. **(2)**

**(b)** Given that $\log_x y = \log_y x$ and $x \ne y$, show that $y = \frac{1}{x}$. **(2)**

**(c)** Solve the simultaneous equations:
$$\log_x y = \log_y x$$
$$\log_x (x - y) = \log_y (x + y)$$
giving your answers for $x$ and $y$ in exact form. **(7)**

**(Total 11 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Change of base**
Let $\log_y x = z \Rightarrow x = y^z$
$$\Rightarrow y = x^{1/z} \Rightarrow \log_x y = \frac{1}{z} = \frac{1}{\log_y x}$$
Or:
$$\log_x x = \log_x (y^z) = z \log_x y = 1 \Rightarrow \log_x y = \frac{1}{\log_y x}$$
- **[M1]** For change of base or equivalent log laws.
- **[A1]** For complete proof.

#### **Part (b)**

**Step 2: Solve the equation**
$$\log_x y = \log_y x = \frac{1}{\log_x y} \Rightarrow (\log_x y)^2 = 1 \Rightarrow \log_x y = \pm 1$$
- **[M1]** For forming and solving the quadratic in $\log_x y$.

Since $x \ne y$, $\log_x y \ne 1 \Rightarrow \log_x y = -1 \Rightarrow y = \frac{1}{x}$.
- **[A1]** For concluding $y = \frac{1}{x}$ with justification.

#### **Part (c)**

**Step 3: Substitute $y = 1/x$ into the second equation**
First equation $\Rightarrow y = 1/x$
Second equation $\Rightarrow \log_x (x - 1/x) = \log_{1/x} (x + 1/x) = z$
- **[M1]** For substituting $y = 1/x$ into the second equation.

**Step 4: Convert to exponential form**
$$\Rightarrow x^z = x - 1/x \quad \text{and} \quad (1/x)^z = x + 1/x$$
$$\Rightarrow x^z \left(\frac{1}{x}\right)^z = 1 = \left(x - \frac{1}{x}\right)\left(x + \frac{1}{x}\right)$$
- **[M1]** For eliminating $z$.

**Step 5: Solve the resulting equation**
$$\Rightarrow 1 = x^2 - \frac{1}{x^2} \Rightarrow x^4 - x^2 - 1 = 0$$
- **[M1]** For forming a quadratic in $x^2$.
- **[A1]** For the correct quadratic equation.

$$x^2 = \frac{1 \pm \sqrt{5}}{2}$$
Since $x^2 > 0$, we have $x^2 = \frac{1 + \sqrt{5}}{2}$
- **[M1]** For solving the quadratic and selecting the positive root.

$$x = \sqrt{\frac{1+\sqrt{5}}{2}}$$
- **[A1]** For the correct value of $x$.

$$y = \frac{1}{x} = \sqrt{\frac{2}{1+\sqrt{5}}} \quad \left(\text{or } \sqrt{\frac{\sqrt{5}-1}{2}}\right)$$
- **[A1]** For the correct value of $y$.

---
topic: "Circles"
subtopic: "Intersections of straight lines and circles"
---
### **Question 4**

The circle $C$ has equation $(x+4)^2 + (y-7)^2 = 13$.
The line $L$ has equation $y = mx$.

**(a)** Show that, if $L$ is a tangent to $C$, then $3m^2 + 56m + 36 = 0$. **(4)**

**(b)** Find the coordinates of the points of contact, $A$ and $B$, of the tangents from the origin to $C$. **(8)**

**(c)** Find the coordinates of the points of contact of the tangents from the point $(4, -7)$ to the circle $x^2 + y^2 = 13$. **(2)**

**(Total 14 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Substitute $y = mx$ into the circle equation**
$$(x+4)^2 + (y-7)^2 = 13 \Rightarrow (x^2 + 8x + 16) + (m^2 x^2 - 14mx + 49) = 13$$
- **[M1]** For substituting $y = mx$.

$$(1+m^2)x^2 + (8-14m)x + 52 = 0$$
- **[A1]** For the correct quadratic in $x$.

**Step 2: Apply the tangency condition**
Touches, so "$b^2 = 4ac$":
$$(8-14m)^2 = 4 \times 52 \times (1+m^2)$$
- **[M1]** For applying $b^2 = 4ac$.

$$(4-7m)^2 = 52 + 52m^2 \Rightarrow 16 - 56m + 49m^2 = 52 + 52m^2 \Rightarrow 3m^2 + 56m + 36 = 0$$
- **[A1]** For obtaining the given equation.

#### **Part (b)**

**Step 3: Solve for $m$**
$$(3m+2)(m+18) = 0 \Rightarrow m = -2/3 \quad \text{or} \quad -18$$
- **[M1]** For attempting to solve the quadratic.
- **[A1]** For both correct values of $m$.

**Step 4: Set up the distance relation**
Let $A$ or $B$ be $(X, Y)$.
Then $(X^2 + Y^2) + 13 = 4^2 + 7^2 = 65 \Rightarrow X^2 + Y^2 = 52$
- **[M1], [A1]** For finding the equation $X^2 + Y^2 = 52$.

**Step 5: Find the coordinates of $B$**
For $Y = -2/3 X \Rightarrow X^2 + \frac{4}{9}X^2 = 52 \Rightarrow \frac{13}{9}X^2 = 52 \Rightarrow X = \pm 6$
From the configuration, $X_B = -6 \Rightarrow Y_B = +4 \Rightarrow B = (-6, 4)$
- **[M1], [A1]** For finding the coordinates of $B$.

**Step 6: Find the coordinates of $A$**
For $Y = -18 X \Rightarrow X^2 + 324X^2 = 52 \Rightarrow 325X^2 = 52 \Rightarrow X^2 = 4/25$
Again, $X < 0$ for $A \Rightarrow X_A = -2/5 \Rightarrow Y_A = 36/5 \Rightarrow A = (-2/5, 36/5)$
- **[M1], [A1]** For finding the coordinates of $A$.

**Step 7: Reference diagram for the configuration:**

_Figure 1 (A sketch of the circle $(x+4)^2 + (y-7)^2 = 13$ and the two tangents from the origin, touching the circle at $A$ and $B$.)_

```tikz
\begin{tikzpicture}[scale=0.5]
\draw[->] (-8,0) -- (2,0) node[below] {$x$};
\draw[->] (0,-2) -- (0,10) node[left] {$y$};
\draw[dashed] (-4,7) circle (3.6);
\draw[thick] (0,0) -- (-7.5,5);
\draw[thick] (0,0) -- (-0.5,9);
\fill (-4,7) circle (2pt) node[above right] {$(-4,7)$};
\fill (-6,4) circle (2pt) node[below left] {$B$};
\fill (-0.4,7.2) circle (2pt) node[above right] {$A$};
\end{tikzpicture}
```

#### **Part (c)**

**Step 8: Apply the translation**
The situation is a translation of the problem in (b) by $\binom{4}{-7}$.
- **[M1]** For identifying the translation vector.

So $P, Q$ are:
$$\begin{pmatrix} -6 \\ 4 \end{pmatrix} + \begin{pmatrix} 4 \\ -7 \end{pmatrix} = \begin{pmatrix} -2 \\ -3 \end{pmatrix}$$
$$\begin{pmatrix} -2/5 \\ 36/5 \end{pmatrix} + \begin{pmatrix} 4 \\ -7 \end{pmatrix} = \begin{pmatrix} 18/5 \\ 1/5 \end{pmatrix}$$
- **[A1]** For both correct points.

---
topic: "Vectors"
subtopic: "Vectors in 3D"
---
### **Question 5**

The lines $l_1$ and $l_2$ are given by the vector equations:
$$l_1: \mathbf{r} = \begin{pmatrix} -2 \\ -11.5 \\ 0 \end{pmatrix} + \lambda \begin{pmatrix} 3 \\ -4 \\ -1 \end{pmatrix}$$
$$l_2: \mathbf{r} = \begin{pmatrix} 11.5 \\ 3 \\ 8.5 \end{pmatrix} + \mu \begin{pmatrix} 7 \\ 8 \\ -11 \end{pmatrix}$$

**(a)** Show that the lines $l_1$ and $l_2$ do not intersect. **(5)**

**(b)** Show that the vector $2\mathbf{i} + \mathbf{j} + 2\mathbf{k}$ is perpendicular to both $l_1$ and $l_2$. **(2)**

**(c)** Find the coordinates of the points $A$ on $l_1$ and $B$ on $l_2$ such that the line $AB$ is perpendicular to both $l_1$ and $l_2$. **(8)**

**(Total 15 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Set up the system of equations**
If $l_1$ and $l_2$ intersect, then $\mathbf{r}_1 = \mathbf{r}_2$:
$$-2 + 3\lambda = 11.5 + 7\mu \Rightarrow -13.5 + 3\lambda = 7\mu \quad \text{(1)}$$
$$-11.5 - 4\lambda = 3 + 8\mu \Rightarrow -14.5 - 4\lambda = 8\mu \quad \text{(2)}$$
$$-\lambda = 8.5 - 11\mu \Rightarrow 8.5 + \lambda = 11\mu \quad \text{(3)}$$
- **[M1]** For setting up at least one correct equation.

**Step 2: Solve a pair of equations**
Attempt to solve any pair:
From (1) and (2): $\lambda = 1/8, \mu = -15/8$
From (1) and (3): $\lambda = 8, \mu = 3/2$
From (2) and (3): $\lambda = -35/8, \mu = 3/8$
- **[M1]** For attempting to solve any pair.
- **[A1]** For correct solutions to any pair.

**Step 3: Check for consistency**
Check in the third equation:
e.g., substituting $\lambda = 8, \mu = 3/2$ into (2):
$$-14.5 - 4(8) = -46.5 \ne 8(3/2) = 12$$
which is inconsistent.
- **[M1]** For checking consistency in the third equation.
- **[B1]** For concluding that $l_1$ and $l_2$ do not intersect.

#### **Part (b)**

**Step 4: Verify perpendicularity**
$$\begin{pmatrix} 3 \\ -4 \\ -1 \end{pmatrix} \cdot \begin{pmatrix} 2 \\ 1 \\ 2 \end{pmatrix} = 6 - 4 - 2 = 0 \Rightarrow \begin{pmatrix} 2 \\ 1 \\ 2 \end{pmatrix} \perp l_1$$
$$\begin{pmatrix} 7 \\ 8 \\ -11 \end{pmatrix} \cdot \begin{pmatrix} 2 \\ 1 \\ 2 \end{pmatrix} = 14 + 8 - 22 = 0 \Rightarrow \begin{pmatrix} 2 \\ 1 \\ 2 \end{pmatrix} \perp l_2$$
- **[M1]** For attempting the scalar product of both direction vectors with $\begin{pmatrix} 2 \\ 1 \\ 2 \end{pmatrix}$.
- **[A1]** For both products equal to 0.

#### **Part (c)**

**Step 5: Express $\vec{AB}$ in terms of $\lambda$ and $\mu$**
$$\vec{AB} = \begin{pmatrix} 7\mu + 11.5 - (-2 + 3\lambda) \\ 8\mu + 3 - (-11.5 - 4\lambda) \\ -11\mu + 8.5 - (-\lambda) \end{pmatrix} = \begin{pmatrix} 7\mu - 3\lambda + 13.5 \\ 8\mu + 4\lambda + 14.5 \\ -11\mu + \lambda + 8.5 \end{pmatrix}$$
- **[M1], [A1]** For the correct vector $\vec{AB}$.

**Step 6: Set $\vec{AB}$ parallel to the perpendicular vector**
Since $\vec{AB} \parallel \begin{pmatrix} 2 \\ 1 \\ 2 \end{pmatrix}$:
The "$i$" component equals the "$k$" component:
$$7\mu - 3\lambda + 13.5 = -11\mu + \lambda + 8.5 \Rightarrow 18\mu - 4\lambda + 5 = 0 \quad \text{(4)}$$
- **[M1], [A1]** For the first simplified equation.

The "$2j$" component equals the "$i$" component:
$$16\mu + 8\lambda + 29 = 7\mu - 3\lambda + 13.5 \Rightarrow 9\mu + 11\lambda + 15.5 = 0 \quad \text{(5)}$$
- **[M1], [A1]** For the second simplified equation.

**Step 7: Solve for $\lambda$ and $\mu$**
Solving (4) and (5) gives:
$$\lambda = -1, \quad \mu = -1/2$$
- **[M1]** For attempting to solve the simultaneous equations.

**Step 8: Find the coordinates of $A$ and $B$**
$$\vec{OA} = \begin{pmatrix} -2 + 3(-1) \\ -11.5 - 4(-1) \\ -(-1) \end{pmatrix} = \begin{pmatrix} -5 \\ -7.5 \\ 1 \end{pmatrix} \Rightarrow A = (-5, -7.5, 1)$$
$$\vec{OB} = \begin{pmatrix} 11.5 + 7(-1/2) \\ 3 + 8(-1/2) \\ 8.5 - 11(-1/2) \end{pmatrix} = \begin{pmatrix} 8 \\ -1 \\ 14 \end{pmatrix} \Rightarrow B = (8, -1, 14)$$
- **[A1], [A1]** For both correct points.

---
topic: "Integration"
subtopic: "Integration by parts"
---
### **Question 6**

**(a)** Show that the point $P(1, 0)$ lies on the curve $C$ with equation $y = \sin(\ln x)$. **(1)**

**(b)** Find the coordinates of the first stationary point $Q$ of $C$ for which $x > 1$. **(5)**

**(c)** The point $R$ has coordinates $(e^{\pi/2}, 0)$. Find the area of the region enclosed by the curve $C$ and the line segments $PQ$ and $QR$. **(9)**

**(Total 15 marks)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Verify the point**
At $x = 1$, $y = \sin(\ln 1) = \sin 0 = 0 \Rightarrow P(1, 0)$ lies on $C$.
- **[B1]** Correct verification.

#### **Part (b)**

**Step 2: Differentiate $y$**
$$y' = \frac{1}{x} \cos(\ln x)$$
- **[M1], [A1]** For correct differentiation using the chain rule.

**Step 3: Find the stationary point**
At $Q$, $y' = 0 \Rightarrow \cos(\ln x) = 0$
- **[M1]** For setting $y' = 0$.

$$\Rightarrow \ln x = \pi/2 \Rightarrow x = e^{\pi/2}$$
- **[A1]** For the correct $x$-coordinate.

$$y = \sin(\ln e^{\pi/2}) = \sin(\pi/2) = 1 \Rightarrow Q = (e^{\pi/2}, 1)$$
- **[A1]** For the correct coordinates of $Q$.

#### **Part (c)**

**Step 4: Set up the area equation**
$$\text{Area} = \int_1^{e^{\pi/2}} \sin(\ln x) \, dx - \text{Area } \Delta PQR$$
- **[M1]** For the correct approach to find the area.

**Step 5: Find the area of the triangle**
$$\text{Area } \Delta PQR = \frac{1}{2} \times \text{base} \times \text{height} = \frac{1}{2} \times (e^{\pi/2} - 1) \times 1 = \frac{1}{2}(e^{\pi/2} - 1)$$
- **[B1]** For the correct area of the triangle.

**Step 6: Reference diagram for the region:**

_Figure 2 (A sketch showing the region enclosed by the curve $y = \sin(\ln x)$ and the line segments $PQ$ and $QR$, where $P=(1,0)$, $Q=(e^{\pi/2},1)$, and $R=(e^{\pi/2},0)$.)_

```tikz
\begin{tikzpicture}[scale=1.5]
\draw[->] (-0.2,0) -- (3.2,0) node[below] {$x$};
\draw[->] (0,-0.2) -- (0,1.5) node[left] {$y$};
\draw[domain=1:2.718^1.57, smooth, thick, fill=gray!30] plot (\x, {sin(ln(\x)*180/3.14159)}) -- (2.718^1.57, 0) -- (1,0) -- cycle;
\draw[thick, fill=white] (1,0) -- (2.718^1.57, 1) -- (2.718^1.57, 0) -- cycle;
\draw[domain=1:2.718^1.57, smooth, thick] plot (\x, {sin(ln(\x)*180/3.14159)});
\draw[thick] (1,0) -- (2.718^1.57, 1);
\draw[thick] (2.718^1.57, 1) -- (2.718^1.57, 0);
\fill (1,0) circle (1pt) node[below] {$P$};
\fill (2.718^1.57, 1) circle (1pt) node[above right] {$Q$};
\fill (2.718^1.57, 0) circle (1pt) node[below] {$R$};
\end{tikzpicture}
```

**Step 7: Integrate by substitution**
For the integral, let $\ln x = u \Rightarrow x = e^u \Rightarrow dx = e^u \, du$
- **[M1]** For the substitution.

$$I = \int_0^{\pi/2} \sin u \, e^u \, du$$
- **[A1]** For the correct transformed integral with limits.

**Step 8: Integrate by parts**
$$I = [e^u \sin u]_0^{\pi/2} - \int_0^{\pi/2} e^u \cos u \, du$$
- **[M1]** For the first integration by parts.

$$= e^{\pi/2} - \left( [e^u \cos u]_0^{\pi/2} - \int_0^{\pi/2} e^u (-\sin u) \, du \right)$$
$$= e^{\pi/2} - (0 - 1) - I = e^{\pi/2} + 1 - I$$
- **[M1]** For the second integration by parts.

$$\Rightarrow 2I = e^{\pi/2} + 1 \Rightarrow I = \frac{1}{2}(1 + e^{\pi/2})$$
- **[A1]** For finding the value of the integral.

**Step 9: Calculate the final area**
$$\text{Area} = \frac{1}{2}(1 + e^{\pi/2}) - \frac{1}{2}(e^{\pi/2} - 1) = 1$$
- **[A1]** For the correct final area of 1.

---
topic: "Sequences and Series"
subtopic: "Geometric series"
---
### **Question 7**

A sequence of circles $C_1, C_2, C_3, \dots$ have radii $R = r_1, r_2, r_3, \dots$ respectively, where $r_1 > r_2 > r_3 > \dots$
Each circle touches the next circle in the sequence, and all the circles touch two straight lines which meet at an angle $2\alpha$ ($0 < \alpha < \pi/2$).

**(a)** Show that $\frac{r_{i+1}}{r_i} = \frac{1 - \sin\alpha}{1 + \sin\alpha}$. **(5)**

**(b)** Show that the total area of the infinite sequence of circles is $\frac{\pi R^2 (1+\sin\alpha)^2}{4\sin\alpha}$. **(3)**

**(c)** Show that the area of the region inside the angle $2\alpha$ that is outside all the circles is given by
$$S = R^2 \left( \alpha + \cot\alpha - \frac{\pi}{4}\csc\alpha - \frac{\pi}{4}\sin\alpha \right)$$
**(5)**

**(d)** Show that $\frac{dS}{d\alpha} = R^2 \cot^2\alpha \left( \frac{\pi}{4}\cos\alpha - 1 \right)$. **(4)**

**(e)** Given that $0 < \alpha \le \pi/4$, find the minimum value of $S$, justifying your answer. **(3)**

**(Total 20 marks)**

### **Mark Scheme 7**

#### **Part (a)**

**Step 1: Draw or refer to an appropriate diagram**
Using the geometry of the touching circles and the angle $\alpha$:
$$\sin\alpha = \frac{r_i - r_{i+1}}{r_i + r_{i+1}}$$
- **[M1]** For drawing or describing an appropriate diagram.
- **[M1], [A1]** For the relation $\sin\alpha = \frac{r_i - r_{i+1}}{r_i + r_{i+1}}$.

**Step 2: Solve for the ratio of radii**
$$(r_i + r_{i+1})\sin\alpha = r_i - r_{i+1}$$
$$r_{i+1}(1 + \sin\alpha) = r_i(1 - \sin\alpha)$$
$$\Rightarrow \frac{r_{i+1}}{r_i} = \frac{1 - \sin\alpha}{1 + \sin\alpha}$$
- **[M1], [A1]** For rearranging to find the ratio.

#### **Part (b)**

**Step 3: Sum the infinite geometric series**
Let $r = \frac{1 - \sin\alpha}{1 + \sin\alpha}$.
$$\text{Total area} = \pi R^2 + \pi r_2^2 + \pi r_3^2 + \dots = \pi R^2 (1 + r^2 + r^4 + \dots)$$
- **[B1]** For identifying the correct geometric series with common ratio $r^2$.

$$= \frac{\pi R^2}{1 - r^2} = \frac{\pi R^2}{1 - \left(\frac{1-\sin\alpha}{1+\sin\alpha}\right)^2}$$
- **[M1]** For using the sum to infinity formula $S_\infty = \frac{a}{1-r}$.

$$= \frac{\pi R^2 (1+\sin\alpha)^2}{(1+\sin\alpha)^2 - (1-\sin\alpha)^2} = \frac{\pi R^2 (1+\sin\alpha)^2}{4\sin\alpha}$$
- **[A1]** For simplifying to the given expression.

#### **Part (c)**

**Step 4: Set up the area equation**
$$\text{Required area } S = 2 \times \text{Area } \Delta POA + \text{Area major sector } AOB - \text{Area found in (b)}$$
- **[M1]** For the correct geometric decomposition of the area.

**Step 5: Find the area of the triangle and sector**
$$\text{Area } \Delta POA = \frac{1}{2} R \cdot (R \cot\alpha)$$
- **[B1]** For the correct area of the triangle.

$$\angle POA = \pi/2 - \alpha \Rightarrow \text{angle of major sector } AOB = \pi + 2\alpha$$
$$\Rightarrow \text{Area Sector } AOB = \frac{1}{2} R^2 (\pi + 2\alpha)$$
- **[M1], [A1]** For the correct area of the major sector.

**Step 6: Combine and simplify**
$$S = R^2 \cot\alpha + R^2 \left(\frac{\pi}{2} + \alpha\right) - \frac{\pi R^2 (1+\sin\alpha)^2}{4\sin\alpha}$$
$$= R^2 \left( \alpha + \cot\alpha + \frac{\pi}{2} - \frac{\pi(1 + 2\sin\alpha + \sin^2\alpha)}{4\sin\alpha} \right)$$
$$= R^2 \left( \alpha + \cot\alpha - \frac{\pi}{4}\csc\alpha - \frac{\pi}{4}\sin\alpha \right)$$
- **[A1]** For obtaining the given expression.

#### **Part (d)**

**Step 7: Differentiate $S$ with respect to $\alpha$**
$$\frac{dS}{d\alpha} = R^2 \left( 1 - \csc^2\alpha + \frac{\pi}{4}\csc\alpha\cot\alpha - \frac{\pi}{4}\cos\alpha \right)$$
- **[M1], [A1]** For differentiating each term correctly.

**Step 8: Simplify the derivative**
$$= R^2 \left( -\cot^2\alpha + \frac{\pi}{4}\frac{\cos\alpha}{\sin^2\alpha} - \frac{\pi}{4}\cos\alpha \right)$$
$$= R^2 \left( -\cot^2\alpha + \frac{\pi}{4}\cos\alpha (\csc^2\alpha - 1) \right)$$
$$= R^2 \cot^2\alpha \left( \frac{\pi}{4}\cos\alpha - 1 \right)$$
- **[M1], [A1]** For factorising out $\cot^2\alpha$ to obtain the given result.

#### **Part (e)**

**Step 9: Analyze the sign of the derivative**
In the given range $0 < \alpha \le \pi/4$:
$$R^2 \cot^2\alpha > 0$$
In the interval $(0, \pi/4)$, $\frac{\pi}{4}\cos\alpha - 1$ is a decreasing function (since $\cos\alpha$ is decreasing).
At $\alpha = 0$, $\frac{\pi}{4}\cos\alpha - 1 = \frac{\pi}{4} - 1 < 0$.
$$\therefore \frac{\pi}{4}\cos\alpha - 1 < 0 \quad \text{in } (0, \pi/4)$$
$$\Rightarrow \frac{dS}{d\alpha} < 0 \quad \text{throughout the interval}$$
- **[M1]** For a convincing argument showing $\frac{dS}{d\alpha} < 0$.

**Step 10: Find the minimum value**
Since $\frac{dS}{d\alpha} < 0$, the function $S$ is strictly decreasing, so the least value of $S$ occurs at the upper limit $\alpha = \pi/4$.
- **[A1]** For identifying $\alpha = \pi/4$ as the minimum.

$$\text{Min } S = R^2 \left( \frac{\pi}{4} + 1 - \frac{\pi}{4}\sqrt{2} - \frac{\pi}{4}\frac{1}{\sqrt{2}} \right) = R^2 \left( 1 - \frac{\pi}{4}\left( -1 + \sqrt{2} + \frac{1}{\sqrt{2}} \right) \right)$$
- **[A1]** For the correct minimum value.
