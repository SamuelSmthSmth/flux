---
topic: "Matrices"
subtopic: "Solving systems of equations using matrices"
---
### **Question 1**

$$\mathbf{M} = \begin{pmatrix} 2 & 1 & -3 \\ 4 & -2 & 1 \\ 3 & 5 & -2 \end{pmatrix}$$

**(a)** Find $\mathbf{M}^{-1}$ giving each element in exact form. **(2)**

**(b)** Solve the simultaneous equations
$$\begin{aligned} 2x + y - 3z &= -4 \\ 4x - 2y + z &= 9 \\ 3x + 5y - 2z &= 5 \end{aligned}$$ **(2)**

**(c)** Interpret the answer to part (b) geometrically. **(1)**

**(Total 5 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Find the inverse matrix**
$$\mathbf{M}^{-1} = \frac{1}{57} \begin{pmatrix} -1 & -13 & -5 \\ 11 & 5 & -14 \\ 26 & -7 & -8 \end{pmatrix}$$
- **[B1]** Correct inverse matrix (allow unsimplified or decimal if exact, but exact form preferred).

#### **Part (b)**

**Step 2: Use inverse matrix to solve the system**
$$\begin{pmatrix} x \\ y \\ z \end{pmatrix} = \frac{1}{57} \begin{pmatrix} -1 & -13 & -5 \\ 11 & 5 & -14 \\ 26 & -7 & -8 \end{pmatrix} \begin{pmatrix} -4 \\ 9 \\ 5 \end{pmatrix} = \begin{pmatrix} 2 \\ -1 \\ 3 \end{pmatrix}$$
So $x = 2, y = -1, z = 3$.
- **[M1]** Correct method of multiplying $\mathbf{M}^{-1}$ by the column vector $\begin{pmatrix} -4 \\ 9 \\ 5 \end{pmatrix}$.
- **[A1]** Correct values for $x, y, z$.

#### **Part (c)**

**Step 3: Geometrical interpretation**
The three planes intersect at a single unique point $(2, -1, 3)$.
- **[B1]** States that the planes intersect at a single point (or unique point).

---
topic: "Roots of Polynomials"
subtopic: "Roots of a cubic equation"
---
### **Question 2**

The cubic equation
$$z^3 - 3z^2 + z + 5 = 0$$
has roots $\alpha, \beta$ and $\gamma$.

Without solving the equation, find the cubic equation whose roots are $(2\alpha + 1)$, $(2\beta + 1)$ and $(2\gamma + 1)$, giving your answer in the form $w^3 + pw^2 + qw + r = 0$, where $p, q$ and $r$ are integers to be found. **(5)**

**(Total 5 marks)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Relate new variable $w$ to $z$**
Let $w = 2z + 1$, so $z = \frac{w - 1}{2}$.
- **[M1]** Substitutes $z = \frac{w - 1}{2}$ into the given cubic equation, or uses substitution method correctly.

**Step 2: Substitute into the cubic equation**
$$\left(\frac{w - 1}{2}\right)^3 - 3\left(\frac{w - 1}{2}\right)^2 + \left(\frac{w - 1}{2}\right) + 5 = 0$$
- **[M1]** Expands the brackets correctly.
$$\frac{w^3 - 3w^2 + 3w - 1}{8} - \frac{3(w^2 - 2w + 1)}{4} + \frac{w - 1}{2} + 5 = 0$$

**Step 3: Simplify and clear fractions**
Multiply the entire equation by 8:
$$(w^3 - 3w^2 + 3w - 1) - 6(w^2 - 2w + 1) + 4(w - 1) + 40 = 0$$
$$w^3 - 3w^2 + 3w - 1 - 6w^2 + 12w - 6 + 4w - 4 + 40 = 0$$
- **[A1]** Correct expanded expression with all terms correct.

**Step 4: Collect like terms**
$$w^3 - 9w^2 + 19w + 29 = 0$$
- **[A1]** Correct coefficient $p = -9$.
- **[A1]** Correct coefficients $q = 19, r = 29$.

---
topic: "Argand Diagrams"
subtopic: "Loci in the Argand diagram"
---
### **Question 3**

**(a)** Shade on an Argand diagram the set of points
$$\{z \in \mathbb{C} : |z - 1 - \mathrm{i}| \leqslant 3\} \cap \left\{z \in \mathbb{C} : \frac{\pi}{4} \leqslant \arg(z - 2) \leqslant \frac{3\pi}{4}\right\}$$ **(5)**

The complex number $w$ satisfies
$$|w - 1 - \mathrm{i}| = 3 \quad \text{and} \quad \arg(w - 2) = \frac{\pi}{4}$$

**(b)** Find, in simplest form, the exact value of $|w|^2$. **(4)**

**(Total 9 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Identify the locus for $|z - 1 - \mathrm{i}| \leqslant 3$**
A circle centred at $(1, 1)$ with radius $3$ (region inside and on the boundary).
- **[B1]** Correct circle drawn or implied.

**Step 2: Identify the locus for $\frac{\pi}{4} \leqslant \arg(z - 2) \leqslant \frac{3\pi}{4}$**
Half-lines starting from $(2, 0)$ at angles $\frac{\pi}{4}$ and $\frac{3\pi}{4}$, and the region between them.
- **[B1]** Correct rays from $(2, 0)$ at angles $\frac{\pi}{4}$ and $\frac{3\pi}{4}$.

**Step 3: Shade the correct intersection region**
- **[B1]** Correct region shaded satisfying both conditions.

#### **Part (b)**

**Step 4: Set up equations for $w = x + \mathrm{i}y$**
From $\arg(w - 2) = \frac{\pi}{4}$, we have $y = x - 2$ (for $x > 2$).
- **[M1]** Uses the argument condition to write $y$ in terms of $x$, e.g., $y = x - 2$.

**Step 5: Substitute into the circle equation**
$$|x + \mathrm{i}y - 1 - \mathrm{i}| = 3 \Rightarrow (x - 1)^2 + (y - 1)^2 = 9$$
Substitute $y = x - 2$:
$$(x - 1)^2 + (x - 2 - 1)^2 = 9$$
$$(x - 1)^2 + (x - 3)^2 = 9$$
- **[M1]** Substitutes into the circle equation to form an equation in one variable.

**Step 6: Solve for $x$ and $y$**
$$x^2 - 2x + 1 + x^2 - 6x + 9 = 9$$
$$2x^2 - 8x + 1 = 0$$
Using the quadratic formula:
$$x = \frac{8 \pm \sqrt{(-8)^2 - 4(2)(1)}}{2(2)} = \frac{8 \pm \sqrt{64 - 8}}{4} = \frac{8 \pm \sqrt{56}}{4} = 2 \pm \frac{\sqrt{14}}{2}$$
Since $\arg(w - 2) = \frac{\pi}{4}$ requires $x > 2$, we take $x = 2 + \frac{\sqrt{14}}{2}$.
Then $y = x - 2 = \frac{\sqrt{14}}{2}$.
- **[A1]** Correct coordinates for $w$: $x = 2 + \frac{\sqrt{14}}{2}$, $y = \frac{\sqrt{14}}{2}$.

**Step 7: Find $|w|^2$**
$$|w|^2 = x^2 + y^2 = \left(2 + \frac{\sqrt{14}}{2}\right)^2 + \left(\frac{\sqrt{14}}{2}\right)^2$$
$$= 4 + 2\left(\frac{\sqrt{14}}{2}\right)(2) + \frac{14}{4} + \frac{14}{4} = 4 + 2\sqrt{14} + \frac{28}{4} = 4 + 2\sqrt{14} + 7 = 11 + 2\sqrt{14}$$
- **[A1]** Correct exact value $11 + 2\sqrt{14}$ (or equivalent simplified form).

---
topic: "Vectors"
subtopic: "Equation of a plane in three dimensions"
---
### **Question 4**

Part of the mains water system for a housing estate consists of water pipes buried beneath the ground surface. The water pipes are modelled as straight line segments. One water pipe, $W$, is buried beneath a particular road. With respect to a fixed origin $O$, the road surface is modelled as a plane with equation $3x - 5y - 18z = 7$, and $W$ passes through the points $A(-1, -1, -3)$ and $B(1, 2, -3)$. The units are in metres.

**(a)** Use the model to calculate the acute angle between $W$ and the road surface. **(5)**

A point $C(-1, -2, 0)$ lies on the road. A section of water pipe needs to be connected to $W$ from $C$.

**(b)** Using the model, find, to the nearest cm, the shortest length of pipe needed to connect $C$ to $W$. **(6)**

**(Total 11 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Find the direction vector of line $W$**
$$\vec{AB} = \begin{pmatrix} 1 - (-1) \\ 2 - (-1) \\ -3 - (-3) \end{pmatrix} = \begin{pmatrix} 2 \\ 3 \\ 0 \end{pmatrix}$$
- **[B1]** Correct direction vector for $W$.

**Step 2: Identify the normal vector to the plane**
$$\mathbf{n} = \begin{pmatrix} 3 \\ -5 \\ -18 \end{pmatrix}$$
- **[B1]** Correct normal vector.

**Step 3: Calculate the angle $\theta$ between the line and the normal**
$$\cos \theta = \frac{\begin{pmatrix} 2 \\ 3 \\ 0 \end{pmatrix} \cdot \begin{pmatrix} 3 \\ -5 \\ -18 \end{pmatrix}}{\sqrt{2^2 + 3^2 + 0^2} \sqrt{3^2 + (-5)^2 + (-18)^2}} = \frac{6 - 15 + 0}{\sqrt{13}\sqrt{9 + 25 + 324}} = \frac{-9}{\sqrt{13}\sqrt{358}}$$
$$\theta = \arccos\left(\frac{9}{\sqrt{4654}}\right) \approx 82.38^\circ$$
- **[M1]** Uses scalar product between line direction and normal vector.

**Step 4: Find the acute angle $\alpha$ between the line and the plane**
$$\alpha = 90^\circ - 82.38^\circ = 7.62^\circ \quad (\text{or } 7.6^{\circ})$$
- **[M1]** Correctly relates angle with normal to angle with the plane ($90^\circ - \theta$).
- **[A1]** Correct angle $7.62^\circ$ (or $0.133$ radians).

#### **Part (b)**

**Step 5: Find the equation of line $W$**
$$\mathbf{r} = \begin{pmatrix} -1 \\ -1 \\ -3 \end{pmatrix} + \lambda \begin{pmatrix} 2 \\ 3 \\ 0 \end{pmatrix}$$
General point on $W$: $P(-1 + 2\lambda, -1 + 3\lambda, -3)$.
- **[M1]** Sets up general point on $W$ in terms of a parameter $\lambda$.

**Step 6: Form vector $\vec{CP}$ or find perpendicular distance**
$$\vec{CP} = \begin{pmatrix} -1 + 2\lambda - (-1) \\ -1 + 3\lambda - (-2) \\ -3 - 0 \end{pmatrix} = \begin{pmatrix} 2\lambda \\ 1 + 3\lambda \\ -3 \end{pmatrix}$$
- **[M1]** Forms vector from $C$ to a general point on $W$.

**Step 7: Apply orthogonality condition**
$$\vec{CP} \cdot \begin{pmatrix} 2 \\ 3 \\ 0 \end{pmatrix} = 0$$
$$2(2\lambda) + 3(1 + 3\lambda) + 0(-3) = 0$$
$$4\lambda + 3 + 9\lambda = 0 \Rightarrow 13\lambda = -3 \Rightarrow \lambda = -\frac{3}{13}$$
- **[M1]** Equates scalar product of $\vec{CP}$ and direction vector to zero to find $\lambda$.

**Step 8: Find the coordinates of the closest point $P$ or vector $\vec{CP}$**
$$\vec{CP} = \begin{pmatrix} 2\left(-\frac{3}{13}\right) \\ 1 + 3\left(-\frac{3}{13}\right) \\ -3 \end{pmatrix} = \begin{pmatrix} -\frac{6}{13} \\ \frac{4}{13} \\ -3 \end{pmatrix}$$
- **[A1]** Correct vector $\vec{CP}$ or coordinates of $P$.

**Step 9: Calculate the length and convert to nearest cm**
$$|\vec{CP}| = \sqrt{\left(-\frac{6}{13}\right)^2 + \left(\frac{4}{13}\right)^2 + (-3)^2} = \sqrt{\frac{36}{169} + \frac{16}{169} + \frac{1521}{169}} = \sqrt{\frac{1573}{169}} = \sqrt{9.3077} \approx 3.0508\text{ m}$$
$3.0508\text{ m} = 305\text{ cm}$.
- **[A1]** Correct length $3.05\text{ m}$ or $305\text{ cm}$.

---
topic: "Linear Transformations"
subtopic: "Linear transformations in two dimensions"
---
### **Question 5**

$$\mathbf{A} = \begin{pmatrix} \frac{1}{2} & -\frac{\sqrt{3}}{2} \\ \frac{\sqrt{3}}{2} & \frac{1}{2} \end{pmatrix}$$

**(a)** Describe fully the single geometrical transformation $U$ represented by the matrix $\mathbf{A}$. **(3)**

The transformation $V$, represented by the $2 \times 2$ matrix $\mathbf{B}$, is a reflection in the line $y = -x$.

**(b)** Write down the matrix $\mathbf{B}$. **(1)**

Given that $U$ followed by $V$ is the transformation $T$, which is represented by the matrix $\mathbf{C}$,

**(c)** find the matrix $\mathbf{C}$. **(2)**

**(d)** Show that there is a real number $k$ for which the point $(1, k)$ is invariant under $T$. **(4)**

**(Total 10 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Describe transformation $U$**
Rotation about the origin, anti-clockwise (or counter-clockwise) by $60^\circ$ (or $\frac{\pi}{3}$ radians).
- **[B1]** Rotation.
- **[B1]** Centre at the origin.
- **[B1]** Angle $60^\circ$ (or $\frac{\pi}{3}$) anti-clockwise.

#### **Part (b)**

**Step 2: Write down matrix $\mathbf{B}$**
$$\mathbf{B} = \begin{pmatrix} 0 & -1 \\ -1 & 0 \end{pmatrix}$$
- **[B1]** Correct matrix $\mathbf{B}$.

#### **Part (c)**

**Step 3: Find matrix $\mathbf{C}$**
Since $U$ followed by $V$ means $\mathbf{C} = \mathbf{B}\mathbf{A}$:
$$\mathbf{C} = \begin{pmatrix} 0 & -1 \\ -1 & 0 \end{pmatrix} \begin{pmatrix} \frac{1}{2} & -\frac{\sqrt{3}}{2} \\ \frac{\sqrt{3}}{2} & \frac{1}{2} \end{pmatrix} = \begin{pmatrix} -\frac{\sqrt{3}}{2} & -\frac{1}{2} \\ -\frac{1}{2} & \frac{\sqrt{3}}{2} \end{pmatrix}$$
- **[M1]** Correct order of matrix multiplication ($\mathbf{B}\mathbf{A}$).
- **[A1]** Correct matrix $\mathbf{C}$.

#### **Part (d)**

**Step 4: Set up invariance equation**
$$\mathbf{C} \begin{pmatrix} 1 \\ k \end{pmatrix} = \begin{pmatrix} 1 \\ k \end{pmatrix}$$
$$\begin{pmatrix} -\frac{\sqrt{3}}{2} & -\frac{1}{2} \\ -\frac{1}{2} & \frac{\sqrt{3}}{2} \end{pmatrix} \begin{pmatrix} 1 \\ k \end{pmatrix} = \begin{pmatrix} 1 \\ k \end{pmatrix}$$
- **[M1]** Sets up matrix equation for invariant point.

**Step 5: Form simultaneous equations for $k$**
From row 1:
$$-\frac{\sqrt{3}}{2} - \frac{1}{2}k = 1 \Rightarrow -\frac{1}{2}k = 1 + \frac{\sqrt{3}}{2} \Rightarrow k = -2 - \sqrt{3}$$
From row 2:
$$-\frac{1}{2} + \frac{\sqrt{3}}{2}k = k \Rightarrow -\frac{1}{2} = k - \frac{\sqrt{3}}{2}k = k\left(1 - \frac{\sqrt{3}}{2}\right)$$
$$k = \frac{-\frac{1}{2}}{1 - \frac{\sqrt{3}}{2}} = \frac{-1}{2 - \sqrt{3}} = -(2 + \sqrt{3}) = -2 - \sqrt{3}$$
- **[M1]** Solves for $k$ from one of the equations.
- **[A1]** Obtains $k = -2 - \sqrt{3}$ from both equations (consistency check).
- **[B1]** Concludes that such a real number $k$ exists.

---
topic: "Series"
subtopic: "Sums of natural numbers"
---
### **Question 6**

**(a)** Use the standard results for $\sum_{r=1}^{n} r^2$ and $\sum_{r=1}^{n} r$ to show that
$$\sum_{r=1}^{n} (3r - 2)^2 = \frac{1}{2}n[6n^2 - 3n - 1]$$
for all positive integers $n$. **(5)**

**(b)** Hence find any values of $n$ for which
$$\sum_{r=5}^{n} (3r - 2)^2 + 103 \sum_{r=1}^{28} r \cos\left(\frac{r\pi}{2}\right) = 3n^3$$ **(5)**

**(Total 10 marks)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Expand the expression inside the summation**
$$(3r - 2)^2 = 9r^2 - 12r + 4$$
- **[M1]** Expands $(3r - 2)^2$ correctly.

**Step 2: Apply summation and standard formulae**
$$\sum_{r=1}^{n} (3r - 2)^2 = 9\sum_{r=1}^{n} r^2 - 12\sum_{r=1}^{n} r + \sum_{r=1}^{n} 4$$
$$= 9\left(\frac{1}{6}n(n+1)(2n+1)\right) - 12\left(\frac{1}{2}n(n+1)\right) + 4n$$
- **[M1]** Substitutes standard formulae for $\sum r^2$ and $\sum r$, and accounts for $\sum 4 = 4n$.

**Step 3: Simplify the expression**
$$= \frac{3}{2}n(n+1)(2n+1) - 6n(n+1) + 4n$$
$$= \frac{1}{2}n \left[ 3(n+1)(2n+1) - 12(n+1) + 8 \right]$$
$$= \frac{1}{2}n \left[ 3(2n^2 + 3n + 1) - 12n - 12 + 8 \right]$$
$$= \frac{1}{2}n \left[ 6n^2 + 9n + 3 - 12n - 4 \right]$$
$$= \frac{1}{2}n [6n^2 - 3n - 1]$$
- **[A1]** Correct algebraic manipulation leading to the required result.

#### **Part (b)**

**Step 4: Rewrite the first summation in terms of limits from 1 to $n$**
$$\sum_{r=5}^{n} (3r - 2)^2 = \sum_{r=1}^{n} (3r - 2)^2 - \sum_{r=1}^{4} (3r - 2)^2$$
Calculate $\sum_{r=1}^{4} (3r - 2)^2$:
For $r=1: 1^2 = 1$
For $r=2: 4^2 = 16$
For $r=3: 7^2 = 49$
For $r=4: 10^2 = 100$
Sum $= 1 + 16 + 49 + 100 = 166$.
- **[M1]** Expresses $\sum_{r=5}^{n}$ as $\sum_{r=1}^{n} - \sum_{r=1}^{4}$ and evaluates the first 4 terms.

**Step 5: Evaluate the second summation**
$$\sum_{r=1}^{28} r \cos\left(\frac{r\pi}{2}\right)$$
Terms are:
$r=1: 1 \cos(\pi/2) = 0$
$r=2: 2 \cos(\pi) = -2$
$r=3: 3 \cos(3\pi/2) = 0$
$r=4: 4 \cos(2\pi) = 4$
Pattern repeats every 4 terms with sum $0 - 2 + 0 + 4 = 2$.
Number of complete cycles in 28 terms $= 28 / 4 = 7$.
Total sum $= 7 \times 2 = 14$.
- **[M1]** Evaluates the periodic trigonometric sum correctly to get $14$.

**Step 6: Substitute into the given equation**
$$\left(\frac{1}{2}n(6n^2 - 3n - 1) - 166\right) + 103(14) = 3n^3$$
$$\frac{1}{2}(6n^3 - 3n^2 - n) - 166 + 1442 = 3n^3$$
$$3n^3 - \frac{3}{2}n^2 - \frac{1}{2}n + 1276 = 3n^3$$
- **[M1]** Substitutes results into the full equation.

**Step 7: Solve for $n$**
$$-\frac{3}{2}n^2 - \frac{1}{2}n + 1276 = 0$$
Multiply by $-2$:
$$3n^2 + n - 2552 = 0$$
$$(3n + 88)(n - 29) = 0$$
Since $n$ is a positive integer, $n = 29$.
- **[A1]** Correct quadratic equation.
- **[A1]** Correct final answer $n = 29$.

---
topic: "Roots of Polynomials"
subtopic: "Roots of a cubic equation"
---
### **Question 7**

$$\mathrm{f}(z) = z^3 + z^2 + pz + q$$

where $p$ and $q$ are real constants.

The equation $\mathrm{f}(z) = 0$ has roots $z_1, z_2$ and $z_3$.
When plotted on an Argand diagram, the points representing $z_1, z_2$ and $z_3$ form the vertices of a triangle of area 35.

Given that $z_1 = 3$, find the values of $p$ and $q$. **(7)**

**(Total 7 marks)**

### **Mark Scheme 7**

#### **Part (a)**

**Step 1: Use the given root $z_1 = 3$**
Since $\mathrm{f}(3) = 0$:
$$3^3 + 3^2 + 3p + q = 0$$
$$27 + 9 + 3p + q = 0 \Rightarrow 3p + q = -36$$
- **[M1]** Substitutes $z = 3$ into $\mathrm{f}(z) = 0$.

**Step 2: Use complex conjugate roots**
Since coefficients $p$ and $q$ are real, complex roots occur in conjugate pairs. Let $z_2 = a + \mathrm{i}b$ and $z_3 = a - \mathrm{i}b$.
Since $z_1 = 3$, the sum of roots is:
$$3 + (a + \mathrm{i}b) + (a - \mathrm{i}b) = -1 \quad (\text{from coefficient of } z^2)$$
$$3 + 2a = -1 \Rightarrow 2a = -4 \Rightarrow a = -2$$
- **[M1]** Uses sum of roots to find the real part of the complex roots ($a = -2$).

**Step 3: Use the area of the triangle on the Argand diagram**
The vertices are $(3, 0)$, $(-2, b)$, and $(-2, -b)$.
Base of the triangle (along the vertical line $x = -2$) $= 2b$.
Height of the triangle (horizontal distance from $x = -2$ to $(3, 0)$) $= 3 - (-2) = 5$.
$$\text{Area} = \frac{1}{2} \times \text{base} \times \text{height} = \frac{1}{2}(2b)(5) = 5b = 35$$
$$b = 7$$
So the complex roots are $-2 + 7\mathrm{i}$ and $-2 - 7\mathrm{i}$.
- **[M1]** Uses the area formula for the triangle to find $b = 7$.

**Step 4: Find $p$ using the sum of products of roots**
$$z_1 z_2 + z_2 z_3 + z_3 z_1 = p$$
$$3(-2 + 7\mathrm{i}) + 3(-2 - 7\mathrm{i}) + (-2 + 7\mathrm{i})(-2 - 7\mathrm{i}) = p$$
$$-6 + 21\mathrm{i} - 6 - 21\mathrm{i} + ((-2)^2 - (7\mathrm{i})^2) = p$$
$$-12 + (4 + 49) = p$$
$$-12 + 53 = p \Rightarrow p = 41$$
- **[M1]** Uses sum of pairwise products of roots to find $p$.
- **[A1]** Correct value $p = 41$.

**Step 5: Find $q$**
Using $3p + q = -36$:
$$3(41) + q = -36$$
$$123 + q = -36 \Rightarrow q = -159$$
- **[A1]** Correct value $q = -159$.

---
topic: "Proof by Induction"
subtopic: "Proof by mathematical induction"
---
### **Question 8**

**(i)** Prove by induction that for $n \in \mathbb{Z}^+$
$$\begin{pmatrix} 5 & -8 \\ 2 & -3 \end{pmatrix}^n = \begin{pmatrix} 4n + 1 & -8n \\ 2n & 1 - 4n \end{pmatrix}$$ **(6)**

**(ii)** Prove by induction that for $n \in \mathbb{Z}^+$
$$\mathrm{f}(n) = 4^{n+1} + 5^{2n-1}$$
is divisible by 21. **(6)**

**(Total 12 marks)**

### **Mark Scheme 8**

#### **Part (i)**

**Step 1: Base case**
For $n = 1$:
LHS: $\begin{pmatrix} 5 & -8 \\ 2 & -3 \end{pmatrix}^1 = \begin{pmatrix} 5 & -8 \\ 2 & -3 \end{pmatrix}$
RHS: $\begin{pmatrix} 4(1) + 1 & -8(1) \\ 2(1) & 1 - 4(1) \end{pmatrix} = \begin{pmatrix} 5 & -8 \\ 2 & -3 \end{pmatrix}$
LHS = RHS, so the statement is true for $n = 1$.
- **[B1]** Verifies base case $n = 1$.

**Step 2: Inductive hypothesis**
Assume true for $n = k$:
$$\begin{pmatrix} 5 & -8 \\ 2 & -3 \end{pmatrix}^k = \begin{pmatrix} 4k + 1 & -8k \\ 2k & 1 - 4k \end{pmatrix}$$
- **[M1]** States inductive assumption for $n = k$.

**Step 3: Inductive step**
Consider $n = k + 1$:
$$\begin{pmatrix} 5 & -8 \\ 2 & -3 \end{pmatrix}^{k+1} = \begin{pmatrix} 5 & -8 \\ 2 & -3 \end{pmatrix}^k \begin{pmatrix} 5 & -8 \\ 2 & -3 \end{pmatrix} = \begin{pmatrix} 4k + 1 & -8k \\ 2k & 1 - 4k \end{pmatrix} \begin{pmatrix} 5 & -8 \\ 2 & -3 \end{pmatrix}$$
- **[M1]** Attempts matrix multiplication for $n = k + 1$.

**Step 4: Multiply matrices**
$$= \begin{pmatrix} (4k+1)(5) + (-8k)(2) & (4k+1)(-8) + (-8k)(-3) \\ (2k)(5) + (1-4k)(2) & (2k)(-8) + (1-4k)(-3) \end{pmatrix}$$
$$= \begin{pmatrix} 20k + 5 - 16k & -32k - 8 + 24k \\ 10k + 2 - 8k & -16k - 3 + 12k \end{pmatrix}$$
$$= \begin{pmatrix} 4k + 5 & -8k - 8 \\ 2k + 2 & -4k - 3 \end{pmatrix} = \begin{pmatrix} 4(k+1) + 1 & -8(k+1) \\ 2(k+1) & 1 - 4(k+1) \end{pmatrix}$$
- **[A1]** Correct matrix multiplication resulting in the required form for $n = k + 1$.

**Step 5: Conclusion for part (i)**
True for $n = 1$, and if true for $n = k$, then true for $n = k + 1$. By mathematical induction, the result is true for all $n \in \mathbb{Z}^+$ matrix powers.
- **[A1]** Complete and correct conclusion.

#### **Part (ii)**

**Step 6: Base case**
For $n = 1$:
$$\mathrm{f}(1) = 4^{1+1} + 5^{2(1)-1} = 4^2 + 5^1 = 16 + 5 = 21$$
21 is divisible by 21, so true for $n = 1$.
- **[B1]** Verifies base case $n = 1$.

**Step 7: Inductive hypothesis**
Assume $\mathrm{f}(k) = 4^{k+1} + 5^{2k-1}$ is divisible by 21 (i.e., $\mathrm{f}(k) = 21m$ for some integer $m$).
- **[M1]** States inductive assumption.

**Step 8: Inductive step**
Consider $n = k + 1$:
$$\mathrm{f}(k+1) = 4^{(k+1)+1} + 5^{2(k+1)-1} = 4^{k+2} + 5^{2k+1}$$
- **[M1]** Writes down $\mathrm{f}(k+1)$.

**Step 9: Express in terms of $\mathrm{f}(k)$**
$$\mathrm{f}(k+1) = 4 \cdot 4^{k+1} + 25 \cdot 5^{2k-1}$$
$$= 4(4^{k+1} + 5^{2k-1}) + 21 \cdot 5^{2k-1}$$
$$= 4\mathrm{f}(k) + 21(5^{2k-1})$$
- **[M1]** Manipulates expression to isolate $4\mathrm{f}(k)$ or a multiple of 21.

**Step 10: Conclusion for part (ii)**
Since $\mathrm{f}(k) = 21m$, $\mathrm{f}(k+1) = 4(21m) + 21(5^{2k-1}) = 21(4m + 5^{2k-1})$, which is divisible by 21. Thus, true for $n = k + 1$ if true for $n = k$. By mathematical induction, true for all $n \in \mathbb{Z}^+$.
- **[A1]** Clear explanation and conclusion.

---
topic: "Volumes of Revolution"
subtopic: "Volumes of revolution around the x-axis"
---
### **Question 9**

**Figure 1** _(A sketch of a central vertical cross-section ABCDEFGHA of a glass bottle of water, showing height measurements 10 cm, 4 cm, 14 cm, and diameters 2 cm at the top and 8 cm at the base)._

**Figure 2** _(A sketch of the curve GF modelled as $y = ax^2 + b$ on the interval $1 \leqslant x \leqslant 4$ with origin O)._

```tikz
\begin{tikzpicture}[scale=0.8]
  \draw[->] (-1,0) -- (6,0) node[below] {$x$};
  \draw[->] (0,-1) -- (0,13) node[left] {$y$};
  \draw[thick] (1,12) -- (4,12) node[above right] {$A, H$};
  \draw[thick] (1,10) -- (1,12);
  \draw[thick] (4,10) -- (4,12);
  \fill (1,10) circle (1.5pt) node[left] {$B$};
  \fill (4,10) circle (1.5pt) node[right] {$G$};
  \draw[domain=1:4, smooth, thick] plot (\x, {(\x-2.5)^2 * 0.5 + 9});
  \fill (1,6) circle (1.5pt) node[left] {$C$};
  \fill (4,6) circle (1.5pt) node[right] {$F$};
  \draw[thick] (1,0) -- (1,6);
  \draw[thick] (4,0) -- (4,6);
  \fill (1,0) circle (1.5pt) node[below left] {$D$};
  \fill (4,0) circle (1.5pt) node[below right] {$E$};
  \draw[thick] (1,0) -- (4,0);
\end{tikzpicture}
```

A mathematics student is modelling the profile of a glass bottle of water. Figure 1 shows a sketch of a central vertical cross-section $ABCDEFGHA$ of the bottle with the measurements taken by the student.

The horizontal cross-section between $CF$ and $DE$ is a circle of diameter $8\text{ cm}$ and the horizontal cross-section between $BG$ and $AH$ is a circle of diameter $2\text{ cm}$.

The student thinks that the curve $GF$ could be modelled as a curve with equation
$$y = ax^2 + b \quad 1 \leqslant x \leqslant 4$$
where $a$ and $b$ are constants and $O$ is the fixed origin, as shown in Figure 2.

**(a)** Find the value of $a$ and the value of $b$ according to the model. **(2)**

**(b)** Use the model to find the volume of water that the bottle can contain. **(7)**

**(c)** State a limitation of the model. **(1)**

The label on the bottle states that the bottle holds approximately $750\text{ cm}^3$ of water.

**(d)** Use this information and your answer to part (b) to evaluate the model, explaining your reasoning. **(1)**

**(Total 11 marks)**

### **Mark Scheme 9**

#### **Part (a)**

**Step 1: Use boundary conditions for the curve $GF$**
From Figure 2, at $x = 1$, $y = 6$ (radius at $F$ is $4$, but looking at height coordinates: total height is $14 + 4 + 10 = 28$, with $DE$ at $y=0$, $CF$ at $y=14$, $BG$ at $y=18$, $AH$ at $y=28$).
Wait, using Figure 2 axes: $x=1$ corresponds to point $F$ (radius 4, height 14), and $x=4$ corresponds to point $G$ (radius 1, height 18? Let's check dimensions: height from $DE$ to $CF$ is $14$, from $CF$ to $BG$ is $4$, from $BG$ to $AH$ is $10$).
At $F$: $x = 1, y = 14$ (radius = 4).
At $G$: $x = 4, y = 18$ (radius = 1).
Substitute into $y = ax^2 + b$:
When $x = 1, y = 14 \Rightarrow a(1)^2 + b = 14 \Rightarrow a + b = 14$
When $x = 4, y = 18 \Rightarrow a(4)^2 + b = 18 \Rightarrow 16a + b = 18$
- **[M1]** Sets up simultaneous equations using points $(1, 14)$ and $(4, 18)$.

**Step 2: Solve for $a$ and $b$**
Subtracting the equations:
$$15a = 4 \Rightarrow a = \frac{4}{15}$$
$$b = 14 - \frac{4}{15} = \frac{206}{15}$$
- **[A1]** Correct values $a = \frac{4}{15}$ (or $0.267$) and $b = \frac{206}{15}$ (or $13.7$).

#### **Part (b)**

**Step 3: Calculate the volume of cylinder $DEFC$**
Radius $R = 4$, height $H = 14$.
$$\text{Volume}_1 = \pi \int_{0}^{14} R^2 dy = \pi (4^2)(14) = 224\pi$$
- **[M1]** Correctly calculates the volume of the cylindrical section $DEFC$.

**Step 4: Calculate the volume of the curved section $GF$**
Using volume of revolution about the $y$-axis:
$$\text{Volume}_2 = \pi \int_{14}^{18} x^2 dy$$
From $y = ax^2 + b \Rightarrow x^2 = \frac{y - b}{a} = \frac{y - 14}{4/15} + 1$? Or directly using $x$ as independent variable with limits $x$ from $1$ to $4$:
$$\text{Volume}_2 = \pi \int_{1}^{4} x^2 \left(\frac{dy}{dx}\right) dx$$
Since $y = ax^2 + b \Rightarrow \frac{dy}{dx} = 2ax$.
$$\text{Volume}_2 = \pi \int_{1}^{4} x^2 (2ax) dx = 2\pi a \int_{1}^{4} x^3 dx$$
$$= 2\pi \left(\frac{4}{15}\right) \left[ \frac{x^4}{4} \right]_{1}^{4} = \frac{8\pi}{15} \left( \frac{256 - 1}{4} \right) \text{ -- wait, evaluating } \left[\frac{x^4}{4}\right]_1^4 = \frac{256}{4} - \frac{1}{4} = 64 - 0.25 = 63.75 = \frac{255}{4}$$
$$= \frac{8\pi}{15} \times \frac{255}{4} = \frac{2\pi}{15} \times 255 = 34\pi$$
- **[M1]** Sets up the integral for the volume of revolution of the curved section (either wrt $y$ or using substitution wrt $x$).
- **[A1]** Correct integration and evaluation for the curved volume ($34\pi$).

**Step 5: Calculate the volume of the top cylinder $BGHA$**
Radius $r = 1$, height $= 10$.
$$\text{Volume}_3 = \pi (1^2)(10) = 10\pi$$
- **[B1]** Correct volume of the top cylindrical section ($10\pi$).

**Step 6: Sum all volumes**
$$\text{Total Volume} = 224\pi + 34\pi + 10\pi = 268\pi$$
$$268\pi \approx 841.9... \text{ cm}^3 \approx 842\text{ cm}^3$$
- **[M1]** Sums all three volume components.
- **[A1]** Correct total volume ($268\pi$ or $842\text{ cm}^3$).

#### **Part (c)**

**Step 7: State a limitation**
The glass has thickness (internal vs external volume), or the base/neck may not be perfectly cylindrical, or the model for $GF$ is an approximation.
- **[B1]** Any valid limitation (e.g., thickness of glass, bottle isn't perfectly symmetrical/model is an approximation).

#### **Part (d)**

**Step 8: Evaluate the model**
The model gives $\approx 842\text{ cm}^3$, which is reasonably close to the label's $750\text{ cm}^3$ (given that glass thickness accounts for the difference), so the model is fairly good / acceptable.
- **[B1]** Compares model answer with $750\text{ cm}^3$ and makes a valid evaluation (e.g., sensible overestimate due to external measurements/glass thickness).
