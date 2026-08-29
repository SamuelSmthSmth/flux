---
topic: "Complex Numbers"
subtopic: "Modulus-argument form of complex numbers"
---
### **Question 1**

$$z = \sqrt{3} - 3\text{i}$$

**(a)** Write $z$ in the form $r(\cos \theta + \text{i}\sin \theta)$ where $-\pi < \theta \leqslant \pi$ **(2)**

**(b)** Show and label on a single Argand diagram

**(i)** the point $P$ representing $z$

**(ii)** the point $Q$ representing $\text{i}z$ **(2)**

**(c)** Describe the geometrical transformation that maps $P$ onto $Q$ **(2)**

**(Total for Question 1 is 6 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Find the modulus $r$**
$$r = \sqrt{(\sqrt{3})^2 + (-3)^2} = \sqrt{3 + 9} = \sqrt{12} = 2\sqrt{3}$$
- **[B1]** $r = 2\sqrt{3}$

**Step 2: Find the argument $\theta$**
$$\theta = \arctan\left(\frac{-3}{\sqrt{3}}\right) = -\frac{\pi}{3}$$
- **[A1]** $2\sqrt{3}\left(\cos\left(-\frac{\pi}{3}\right) + \text{i}\sin\left(-\frac{\pi}{3}\right)\right)$

#### **Part (b)**

**Step 3: Determine $\text{i}z$**
$$\text{i}z = \text{i}(\sqrt{3} - 3\text{i}) = \sqrt{3}\text{i} - 3\text{i}^2 = 3 + \sqrt{3}\text{i}$$

**Step 4: Draw and label points on an Argand diagram**
```tikz
\begin{tikzpicture}[scale=0.8]
  \draw[->] (-2,0) -- (4,0) node[below] {Re};
  \draw[->] (0,-4) -- (0,3) node[left] {Im};
  \fill (1.732,-3) circle (2pt) node[below right] {$P$};
  \fill (3,1.732) circle (2pt) node[above right] {$Q$};
\end{tikzpicture}
```
- **[B1]** Point $P$ correctly plotted and labelled.
- **[B1]** Point $Q$ correctly plotted and labelled with scales/coordinates indicated.

#### **Part (c)**

**Step 5: Describe the transformation**
Rotation of $90^\circ$ (or $\frac{\pi}{2}$ radians) anti-clockwise about the origin.
- **[M1]** Identifies a rotation of $90^\circ$ or $\frac{\pi}{2}$ (or multiplication by $\text{i}$).
- **[A1]** Fully correct description including centre (origin) and direction (anti-clockwise).

### **Examiner Report 1**

This question proved to be an accessible start to this paper with many fully correct solutions seen.

In part (a), the methods for finding the modulus and the argument were well known. A common error seen was to incorrectly identify the correct angle to use for the argument. A diagram is always useful in this identification.

In part (b), there was insufficient detail in the required diagram. When placing points on an Argand diagram, learners should clearly show the positions of the points, either by indicating scales on the axes or by indicating the coordinates of the points. Without such indications, it was assumed that the scales on each of the axes was the same. In such cases, the positioning of the points, particularly $P$, was insufficiently accurate to award marks. Some learners had incorrect complex number $Q$ with $\sqrt{3} + 3\text{i}$ common.

In (c), the most common response was to say that the transformation was a rotation with a correct angle and direction about the origin. There were responses where the centre of the rotation was omitted and thus lost a mark.

There were other alternative transformations which were correct for the two points $P$ and $Q$ such as a reflection in an appropriate line, a matrix, or a translation.

---
topic: "Complex Numbers"
subtopic: "Solving cubic and quartic equations"
---
### **Question 2**

In this question you must show all stages of your working.
Solutions relying entirely on calculator technology are not acceptable.

$$\text{f}(z) = 4z^3 - 12z^2 - 95z + 325$$

Given that $\text{f}(-5) = 0$

**(a)** determine $\text{f}(z)$ in the form $(z + a)(bz^2 + cz + d)$ where $a$, $b$, $c$ and $d$ are integers. **(3)**

**(b)** Hence show that the complex roots of $\text{f}(z) = 0$ are $\frac{8 \pm \text{i}}{2}$ **(2)**

**(c)** Determine the values of $z$ such that $\text{f}(2z - 1) = 0$ **(2)**

**(Total for Question 2 is 7 marks)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Long division or algebraic matching**
$$\text{f}(z) = (z + 5)(4z^2 - 32z + 65)$$
- **[M1]** Attempts long division by $(z + 5)$ or equates coefficients to find $b$, $c$, and $d$.
- **[A1]** Correct linear factor $(z + 5)$ and quadratic factor with two correct coefficients.
- **[A1]** Fully correct factorisation $(z + 5)(4z^2 - 32z + 65)$.

#### **Part (b)**

**Step 2: Solve the quadratic equation**
$$4z^2 - 32z + 65 = 0 \Rightarrow z = \frac{32 \pm \sqrt{(-32)^2 - 4(4)(65)}}{2(4)}$$
$$z = \frac{32 \pm \sqrt{1024 - 1040}}{8} = \frac{32 \pm \sqrt{-16}}{8} = \frac{32 \pm 4\text{i}}{8} = \frac{8 \pm \text{i}}{2}$$
- **[M1]** Uses the quadratic formula or completing the square on $4z^2 - 32z + 65 = 0$ leading to complex roots.
- **[A1]** Shows sufficient working and obtains $\frac{8 \pm \text{i}}{2}$ with complete reasoning.

#### **Part (c)**

**Step 3: Substitute $2z - 1$ into roots**
$$2z - 1 = -5 \Rightarrow 2z = -4 \Rightarrow z = -2$$
$$2z - 1 = \frac{8 \pm \text{i}}{2} \Rightarrow 2z = \frac{10 \pm \text{i}}{2} \Rightarrow z = \frac{10 \pm \text{i}}{4}$$
- **[M1]** Equates $2z - 1$ to one of the roots of $\text{f}(z) = 0$.
- **[A1]** All three roots correctly found: $z = -2, z = \frac{5}{2} \pm \frac{1}{4}\text{i}$.

### **Examiner Report 2**

In part (a), the vast majority of the learners identified that $(z + 5)$ is a factor of $\text{f}(z)$ and then correctly found the quadratic quotient, usually by using long division. A minority of the cohort lost the A mark by not expressing $\text{f}(z)$ in the required fully factorised form.

In part (b), many of the learners used the quadratic formula to find the two complex roots although completing the square was also seen here. A significant minority of the cohort did not show sufficient working in obtaining the required roots, going from substitution into the quadratic formula to the answer. This mainly involved not seeing the term $4\text{i}$ in the working and this lost the A mark here. A few learners tried to use the roots to show the quadratic either using the sum, product a conclusion is needed or substituting in one of the roots into the quadratic to get $= 0$, this gained no marks as a calculator was used.

In part (c), a number of the learners incorrectly substituted those roots found in (b) into the expression $2z - 1$ and hence scored no marks. Those learners who are familiar with the transformation of roots coped well here and scored both of the available marks.

---
topic: "Matrices"
subtopic: "Inverting a 2 x 2 matrix"
---
### **Question 3**

$$\mathbf{M} = \begin{pmatrix} a & b \\ -1 & -1 \end{pmatrix}$$

where $a$ and $b$ are real constants and $a \neq b$

**(a)** Determine $\mathbf{M}^{-1}$ in terms of $a$ and $b$ **(3)**

Given that $\mathbf{M} + \mathbf{M}^{-1} = \mathbf{I}$, where $\mathbf{I}$ is the $2 \times 2$ identity matrix,

**(b)** determine the value of $a$ and value of $b$ **(3)**

**(Total for Question 3 is 6 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Find the determinant of $\mathbf{M}$**
$$\det(\mathbf{M}) = a(-1) - b(-1) = -a + b = b - a$$
- **[M1]** Correctly calculates the determinant of $\mathbf{M}$.

**Step 2: Find the inverse matrix**
$$\mathbf{M}^{-1} = \frac{1}{b - a} \begin{pmatrix} -1 & -b \\ 1 & a \end{pmatrix}$$
- **[A1]** Correct matrix of cofactors/adjugate.
- **[A1]** Fully correct inverse $\mathbf{M}^{-1}$.

#### **Part (b)**

**Step 3: Set up the matrix equation**
$$\begin{pmatrix} a & b \\ -1 & -1 \end{pmatrix} + \frac{1}{b - a} \begin{pmatrix} -1 & -b \\ 1 & a \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$$

**Step 4: Form simultaneous equations from elements**
From bottom-left element:
$$-1 + \frac{1}{b - a} = 0 \Rightarrow b - a = 1 \Rightarrow b = a + 1$$
From bottom-right element:
$$-1 + \frac{a}{b - a} = 1 \Rightarrow \frac{a}{1} = 2 \Rightarrow a = 2$$
Substitute $a = 2$:
$$b = 2 + 1 = 3$$
- **[M1]** Forms at least one correct equation using $\mathbf{M} + \mathbf{M}^{-1} = \mathbf{I}$.
- **[A1]** Correct value for $a$.
- **[A1]** Correct value for $b$.

### **Examiner Report 3**

Most learners understood how to proceed in this question and produced good responses.

In part (a), the correct determinant was usually achieved. However there were errors seen in forming the inverse matrix with a common error being not changing the sign of the elements on the counter diagonal.

In part (b), learners were able to form two simultaneous equations correctly from the matrix equation. Algebraic errors in the manipulation of these equations led to a loss of marks. A common mistake was failing to multiply both sides of the equation completely when multiplying through by the denominator of the fraction.

---
topic: "Linear Transformations"
subtopic: "Reflections and rotations"
---
### **Question 4**

**(i)**

$$\mathbf{P} = \begin{pmatrix} 2 & 0 \\ 0 & 1 \end{pmatrix}$$

**(a)** Describe fully the single geometrical transformation $P$ represented by the matrix $\mathbf{P}$. **(2)**

**(b)** State the equation of one invariant line under the transformation $P$. **(1)**

**(ii)**

$$\mathbf{Q} = \begin{pmatrix} \cos 2\theta & 0 \\ 1 & \tan 2\theta \end{pmatrix} \quad \text{where } 0^\circ \leqslant \theta < 360^\circ$$

The matrix $\mathbf{Q}$ represents the transformation $Q$.

Triangle $T$ is transformed to triangle $T'$ by the transformation $Q$.

Given that
* the coordinates of the vertices of $T$ are $(2, 3)$, $(3, 6)$ and $(8, 3)$
* the area of $T'$ is $4.5$

determine the possible values of $\theta$

(Solutions relying entirely on calculator technology are not acceptable.) **(7)**

**(Total for Question 4 is 10 marks)**

### **Mark Scheme 4**

#### **Part (i)(a)**

**Step 1: Describe transformation $P$**
A stretch with scale factor $2$ parallel to the $x$-axis (or in the $x$-direction).
- **[M1]** Identifies a stretch with scale factor $2$.
- **[A1]** Fully correct description including parallel to the $x$-axis.

#### **Part (i)(b)**

**Step 2: State invariant line**
$y = 0$ (or the $x$-axis).
- **[B1]** Correct equation of an invariant line.

#### **Part (ii)**

**Step 3: Find the area of triangle $T$**
Using coordinates $(2, 3)$, $(3, 6)$, $(8, 3)$ or vector cross product:
$$\text{Area of } T = \frac{1}{2} \times \text{base} \times \text{height} = \frac{1}{2} \times 6 \times 3 = 9$$
- **[B1]** Correct area of triangle $T$ found to be $9$.

**Step 4: Find the determinant of $\mathbf{Q}$**
$$\det(\mathbf{Q}) = (\cos 2\theta)(\tan 2\theta) - (0)(1) = \cos 2\theta \left(\frac{\sin 2\theta}{\cos 2\theta}\right) = \sin 2\theta$$
- **[M1]** Attempts to find $\det(\mathbf{Q})$.
- **[A1]** Simplifies $\det(\mathbf{Q})$ to $\sin 2\theta$.

**Step 5: Relate areas using scale factor**
$$\text{Area of } T' = |\det(\mathbf{Q})| \times \text{Area of } T \Rightarrow 4.5 = |\sin 2\theta| \times 9$$
$$|\sin 2\theta| = \frac{4.5}{9} = \frac{1}{2} \Rightarrow \sin 2\theta = \pm \frac{1}{2}$$
- **[M1]** Uses area scale factor relation to establish $|\sin 2\theta| = \frac{1}{2}$.

**Step 6: Solve for $\theta$**
For $\sin 2\theta = \frac{1}{2}$:
$$2\theta = 30^\circ, 150^\circ, 390^\circ, 510^\circ \Rightarrow \theta = 15^\circ, 75^\circ, 195^\circ, 255^\circ$$
For $\sin 2\theta = -\frac{1}{2}$:
$$2\theta = 210^\circ, 330^\circ, 570^\circ, 690^\circ \Rightarrow \theta = 105^\circ, 165^\circ, 285^\circ, 345^\circ$$
- **[M1]** Correctly solves for $2\theta$ considering both positive and negative values.
- **[A1]** All 8 possible values of $\theta$ correctly listed.

### **Examiner Report 4**

In part (i), the vast majority of the learners recognised that the matrix $\mathbf{P}$ represented a stretch with scale factor $2$ parallel to the $x$-axis. Descriptions which involved stretches from the origin, about the origin, in the $x$-axis and along the $x$-axis were condoned here although representation by an enlargement was not allowed. A few learners commented that $y$-axis was invariant. An invariant line was correctly found by the majority of the cohort.

In part (ii), the correct area of the triangle $T$ and the correct determinant of the matrix $\mathbf{Q}$ were found by many of the cohort with the main error arising here being $\det(\mathbf{Q}) = \cos 2\theta \tan 2\theta - 1$ which subsequently resulted in a loss of marks. Obtaining an area scale factor of $\frac{1}{2}$ was obtained by the majority of the learners who then went on to find possible values of $\theta$, having simplified the determinant of $\mathbf{Q}$ to $\sin 2\theta$. Very few of the cohort identified the fact that $\det(\mathbf{Q})$ could equal $\frac{1}{2}$ or $-\frac{1}{2}$ and thus obtained only four of the eight possible values of $\theta$.

---
topic: "Argand Diagrams"
subtopic: "Loci in the Argand diagram"
---
### **Question 5**

A complex number $z$ is represented by the point $P$ in the complex plane.

Given that $z$ satisfies

$$|z - 1| = 1$$

**(a)** Sketch on an Argand diagram the locus of $P$ as $z$ varies. **(2)**

Given that $z$ also satisfies

$$\arg(z + 1) = \theta$$

**(b)** Determine the possible values of $\theta$ such that the locus $\arg(z + 1) = \theta$ is a tangent to the locus $|z - 1| = 1$ **(3)**

**(c)** Hence determine the exact possible complex numbers $z$. **(3)**

**(Total for Question 5 is 8 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Sketch the locus**
```tikz
\begin{tikzpicture}[scale=0.9]
  \draw[->] (-1.5,0) -- (3,0) node[below] {Re};
  \draw[->] (0,-2) -- (0,2) node[left] {Im};
  \draw (1,0) circle (1cm);
  \fill (1,0) circle (1.5pt) node[above right] {$1$};
  \node at (2,1) [above] {$|z-1|=1$};
\end{tikzpicture}
```
- **[B1]** Circle of radius $1$ drawn.
- **[B1]** Circle correctly centred at $(1, 0)$ on the real axis.

#### **Part (b)**

**Step 2: Use geometry of tangents from $(-1, 0)$**
Considering the right-angled triangle formed by the origin of the ray $(-1,0)$, the centre of the circle $(1,0)$, and the point of tangency:
Distance from $(-1, 0)$ to $(1, 0)$ is $2$ (hypotenuse).
Radius of the circle is $1$ (opposite side).
$$\sin \theta = \frac{1}{2} \Rightarrow \theta = \pm \frac{\pi}{6} \text{ (or } \pm 30^\circ\text{)}$$
- **[M1]** Recognises right-angled triangle geometry or sets up perpendicular distance / tangent condition.
- **[A1]** Identifies hypotenuse $2$ and opposite side $1$.
- **[A1]** Correct values for $\theta$: $\theta = \frac{\pi}{6}, -\frac{\pi}{6}$ (or $30^\circ, -30^\circ$).

#### **Part (c)**

**Step 3: Find the complex numbers $z$**
Using trigonometry or vector projection from $(-1,0)$ to the point of contact:
Real part $= -1 + 2 \cos\left(\frac{\pi}{6}\right) = -1 + 2\left(\frac{\sqrt{3}}{2}\right) = -1 + \sqrt{3}$
Imaginary part $= \pm 2 \sin\left(\frac{\pi}{6}\right) = \pm 2\left(\frac{1}{2}\right) = \pm 1$
$$z = -1 + \sqrt{3} \pm \text{i}$$
- **[M1]** Attempts to find the coordinates of the point of tangency using trigonometry or algebraic intersection.
- **[A1]** Correct real part $-1 + \sqrt{3}$.
- **[A1]** Fully correct complex numbers $z = -1 + \sqrt{3} \pm \text{i}$.

### **Examiner Report 5**

Learners found this to be a challenging question with only a minority achieving full marks.

In part (a), the circle was usually drawn in the correct place although there were cases of the circle being centred on the imaginary rather than the real axis. Learners should have produced a diagram that was labelled at least with the centre as $(1, 0)$ so that it was clear that the radius was correct.

In part (b), the more successful attempts started with a diagram clearly drawn so that the geometry of the situation could be seen. In this geometric approach, a common error was to incorrectly identify the side length of $1$ to be perpendicular to the $x$-axis resulting the use of tangent rather than the sine and thus gained no credit.

An alternative approach using the equation of the line in the form $y = \tan \theta (x + 1)$, the equation of the circle as $(x - 1)^2 + y^2 = 1$ and then considering the condition for the line to be tangent to the circle was also seen and usually produced correct answers.

Part (c) proved to be the most challenging. The use of geometry resulting from a clear diagram would have made solution more straightforward but many used the equation of a tangent, often incorrectly and so failed to make progress. Very few recognised that the second solution must be the complex conjugate (again, use of a clear diagram would have helped) and solved for two values of $x$. A common error was to find $x + 1$ and think this was the real part of the complex number required.

---
topic: "Proof by Induction"
subtopic: "Proof by mathematical induction"
---
### **Question 6**

Prove by induction that for all positive integers $n$

$$\sum_{r=1}^{n} r^3 = \frac{1}{4}n^2(n + 1)^2$$

**(6)**

**(Total for Question 6 is 6 marks)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Base case**
For $n = 1$:
$$\text{LHS} = \sum_{r=1}^{1} r^3 = 1^3 = 1$$
$$\text{RHS} = \frac{1}{4}(1)^2(1 + 1)^2 = \frac{1}{4}(1)(4) = 1$$
Since $\text{LHS} = \text{RHS}$, the result is true for $n = 1$.
- **[B1]** Verifies the statement is true for $n = 1$.

**Step 2: Inductive assumption**
Assume the result is true for $n = k$, so:
$$\sum_{r=1}^{k} r^3 = \frac{1}{4}k^2(k + 1)^2$$
- **[M1]** States the assumption for $n = k$.

**Step 3: Consider $n = k + 1$**
$$\sum_{r=1}^{k+1} r^3 = \sum_{r=1}^{k} r^3 + (k + 1)^3 = \frac{1}{4}k^2(k + 1)^2 + (k + 1)^3$$
- **[M1]** Adds the $(k + 1)$-th term to the assumed sum for $n = k$.

**Step 4: Algebraic manipulation**
$$= \frac{1}{4}(k + 1)^2 \left[ k^2 + 4(k + 1) \right] = \frac{1}{4}(k + 1)^2 (k^2 + 4k + 4)$$
$$= \frac{1}{4}(k + 1)^2 (k + 2)^2 = \frac{1}{4}(k + 1)^2 ((k + 1) + 1)^2$$
- **[M1]** Factorises out $(k + 1)^2$ (or equivalent valid algebraic manipulation).
- **[A1]** Obtains the required expression in terms of $k + 1$: $\frac{1}{4}(k + 1)^2((k + 1) + 1)^2$.

**Step 5: Conclusion**
Therefore, if the result is true for $n = k$, it is shown to be true for $n = k + 1$. Since it is true for $n = 1$, by mathematical induction it is true for all positive integers $n$.
- **[A1]** Fully correct concluding statement.

### **Examiner Report 6**

This standard proof by induction question was confidently solved by the vast majority of the learners and much success was seen. The key steps, such as proving the result being true for $n = 1$ and then deducing the result is true for $n = k + 1$ on the assumption that the result is true for $n = k$, were handled well. In the majority of cases, learners correctly equated the sum of $k + 1$ terms to the sum of $k$ terms $+(k + 1)^3$ and coped with the subsequent algebraic demands. Any marks lost here were mainly due to not expressing the $(k + 2)$ as $((k + 1) + 1)$ to show the use of $n = k + 1$. A few learners stated what they were aiming for and successfully achieved this result. Some algebraic errors seen for those learners who chose to multiply out the sum of $k$ terms $+(k + 1)^3$. In general, the concluding statements were well phrased.

---
topic: "Volumes of Revolution"
subtopic: "Volumes of revolution around the y-axis"
---
### **Question 7**

**Figure 1** _(A sketch of a hot air balloon with a height of 24 metres.)_
**Figure 2** _(A sketch of the curve $C$ with equation $350x^2 = (12 + y)^2 (A - y^2)$ for $x \geqslant 0$, passing through $y = -12$ at the bottom and extending to $y = 12$ at the top, symmetric about the y-axis.)_

```tikz
\begin{tikzpicture}[scale=0.8]
  \draw[->] (-3,0) -- (3,0) node[below] {$x$};
  \draw[->] (0,-3) -- (0,3) node[left] {$y$};
  \draw[domain=-2:2, smooth, thick] plot ({\x}, {1.5});
  \node at (0,2.5) {$C$};
  \fill (0,-2) circle (1.5pt) node[left] {$-12$};
\end{tikzpicture}
```

In this question you must show all stages of your working.
Solutions relying entirely on calculator technology are not acceptable.

Figure 1 shows a sketch of a hot air balloon.
When filled with air the balloon has a height of $24$ metres.
Figure 2 shows a sketch of the curve $C$ with equation
$$350x^2 = (12 + y)^2 (A - y^2) \quad x \geqslant 0$$
where $A$ is a constant.
The balloon is modelled by rotating $C$ through $360^\circ$ about the $y$-axis.
Given that one $y$-intercept of $C$ is $-12$

**(a)** show that $A = 144$ **(1)**

**(b)** Use algebraic integration to determine the volume of air needed to fill the balloon, according to the model, giving the answer to 2 significant figures. **(5)**

**(c)** Modify the equation $350x^2 = (12 + y)^2 (144 - y^2)$ to model a mathematically similar balloon with a height of $26$ metres. **(1)**

**(d)** State one limitation of the models. **(1)**

**(Total for Question 7 is 8 marks)**

### **Mark Scheme 7s**

#### **Part (a)**

**Step 1: Use the intercept condition**
At the $y$-intercept, $x = 0$ and $y = -12$:
$$350(0)^2 = (12 + (-12))^2 (A - (-12)^2) \Rightarrow 0 = 0 \times (A - 144)$$
Since $y = 12$ is also the upper limit where the balloon terminates (or using the height bounds $y = -12$ to $y = 12$), $A - 12^2 = 0 \Rightarrow A = 144$.
- **[B1]** Correct deduction or substitution showing $A = 144$.

#### **Part (b)**

**Step 2: Set up the volume integral**
$$\text{Volume } V = \pi \int_{-12}^{12} x^2 \, dy = \pi \int_{-12}^{12} \frac{1}{350} (12 + y)^2 (144 - y^2) \, dy$$
- **[M1]** Correct expression for volume using $\pi \int x^2 \, dy$ with correct limits $-12$ and $12$.

**Step 3: Expand the integrand**
$$(12 + y)^2 (144 - y^2) = (144 + 24y + y^2)(144 - y^2)$$
$$= 144^2 - 144y^2 + 24(144)y - 24y^3 + 144y^2 - y^4$$
$$= 20736 + 3456y - 24y^3 - y^4$$
- **[M1]** Correctly expands the integrand into polynomial form.

**Step 4: Integrate term by term**
$$V = \frac{\pi}{350} \left[ 20736y + 1728y^2 - 6y^4 - \frac{1}{5}y^5 \right]_{-12}^{12}$$
- **[M1]** Integrates the expanded polynomial correctly.

**Step 5: Evaluate definite integral**
Lower limit evaluation ($y = -12$):
$$\left(20736(-12) + 1728(-12)^2 - 6(-12)^4 - \frac{1}{5}(-12)^5\right) = -248832 + 248832 - 124416 + 49766.4 = -74649.6$$
Upper limit evaluation ($y = 12$):
$$\left(20736(12) + 1728(12)^2 - 6(12)^4 - \frac{1}{5}(12)^5\right) = 248832 + 248832 - 124416 - 49766.4 = 323443.2$$
$$V = \frac{\pi}{350} [323443.2 - (-74649.6)] = \frac{\pi}{350} [398092.8] \approx 3574.9\pi \approx 11000 \text{ m}^3$$
- **[A1]** Correct evaluated volume value or expression prior to rounding.
- **[A1]** Correct volume rounded to $2$ significant figures: $11000 \text{ m}^3$ (or $1.1 \times 10^4 \text{ m}^3$).

#### **Part (c)**

**Step 6: Scale the equation**
Scale factor for length is $\frac{13}{12}$.
$$350x^2 = \left(13 + y\right)^2 \left(169 - y^2\right) \quad \text{(or } 411x^2 = (13 + y)^2(169 - y^2)\text{)}$$
- **[B1]** Correct modified equation.

#### **Part (d)**

**Step 7: State limitation**
The balloon does not account for the basket/burner at the bottom, or the balloon may not be perfectly rotationally symmetric.
- **[B1]** Any valid model limitation (e.g., ignores the burner/basket, or shape is an approximation).

### **Examiner Report 7**

Perhaps surprisingly, part (a) was only answered correctly by a small minority of learners. The common error was to use the given coordinate $y = -12$ in the curve equation resulting in the equation $0 = (0)(4 - (-12)^2)$ which erroneously led to $A = 144$. A few learners did not substitute $y = 12$ into the whole equation just $(A - 12^2) = 0$ scoring no marks.

In part (b), the volume of a solid of revolution was well known. The usual next step was to expand the brackets $(12 + y)^2(144 - y^2)$ to achieve a sum of four terms. Errors in the location of powers and other errors in simplification led to loss of subsequent accuracy marks. In the stage of evaluating the integral between the two limits, learners should be strongly advised to show explicit substitution of the upper limit into the integral minus the substitution of the lower limit rather than going straight to decimals which if evaluated incorrectly would lead to the loss of method marks. The majority of learners who achieved the correct answer rounded to $2$ significant figures and gave the required units.

In part (c) it was very rare to see the answer $411x^2 = (13 + y)^2(169 - y^2)$ which resulted from using an enlargement of the curve by a factor of $\frac{13}{12}$. For answers aiming for the alternative $350x^2 = (13 + y)^2(169 - y^2)$, errors seen included not replacing $12$ with $13$, $144$ with $169$ or both and also the misplacing of the powers.

Learners continue to find questions asking for comments on a model used to be challenging. Comments that just referred to the balloon e.g. "the balloon may not be smooth" gained no credit. There needed to be reference to the model, maybe implied, for there to be a chance of awarding the mark. Perhaps surprisingly, the more obvious response that the model and balloon did not have the same shape where the basket was rarely seen.

---
topic: "Series"
subtopic: "Sums of natural numbers"
---
### **Question 8**

The first $n$ triangular numbers are

$$1, 3, 6, 10, \dots, \frac{1}{2}n(n + 1)$$

where $n$ is a positive integer.

**(a)** Use the standard results for $\sum_{r=1}^{n} r^2$ and $\sum_{r=1}^{n} r$ to show that the sum of the first $n$ triangular numbers is

$$\frac{1}{6}n(n + 1)(n + 2)$$

**(5)**

**(b)** Hence determine the value of $n$ for which the sum of the first $n$ triangular numbers is $22n$. **(2)**

**(Total for Question 8 is 7 marks)**

### **Mark Scheme 8**

#### **Part (a)**

**Step 1: Set up the summation**
$$\sum_{r=1}^{n} \frac{1}{2}r(r + 1) = \frac{1}{2} \sum_{r=1}^{n} (r^2 + r)$$
- **[M1]** Expresses the sum of the first $n$ triangular numbers using summation notation.

**Step 2: Apply standard results**
$$= \frac{1}{2} \left[ \frac{1}{6}n(n + 1)(2n + 1) + \frac{1}{2}n(n + 1) \right]$$
- **[M1]** Correctly substitutes standard results for $\sum r^2$ and $\sum r$.

**Step 3: Factorise and simplify**
$$= \frac{1}{2}n(n + 1) \left[ \frac{2n + 1}{6} + \frac{1}{2} \right] = \frac{1}{2}n(n + 1) \left[ \frac{2n + 1 + 3}{6} \right]$$
$$= \frac{1}{2}n(n + 1) \left[ \frac{2n + 4}{6} \right] = \frac{1}{2}n(n + 1) \frac{2(n + 2)}{6} = \frac{1}{6}n(n + 1)(n + 2)$$
- **[M1]** Factorises out common terms such as $\frac{1}{2}n(n + 1)$.
- **[A1]** Correct intermediate algebraic form.
- **[A1]** Reaches the given printed result $\frac{1}{6}n(n + 1)(n + 2)$ with no errors.

#### **Part (b)**

**Step 4: Form equation and solve for $n$**
$$\frac{1}{6}n(n + 1)(n + 2) = 22n$$
Since $n$ is a positive integer ($n \neq 0$):
$$\frac{1}{6}(n + 1)(n + 2) = 22 \Rightarrow (n + 1)(n + 2) = 132$$
$$n^2 + 3n + 2 = 132 \Rightarrow n^2 + 3n - 130 = 0$$
$$(n - 10)(n + 13) = 0 \Rightarrow n = 10 \text{ (since } n > 0\text{)}$$
- **[M1]** Sets the sum equal to $22n$ and forms a quadratic in $n$.
- **[A1]** Correct value $n = 10$ with rejection of negative root.

### **Examiner Report 8**

This question was well answered with many completely correct solutions.

In part (a), the vast majority of the cohort were able to express the required series as the sum of two standard natural number series and then went on to correctly deal with the algebraic demands, such as factorisation, required to obtain the given result. The main reason for any loss of marks in this part was due to the omission of the factor $\frac{1}{2}$ in forming the initial summation.

In part (b) much success was achieved with nearly all the learners finding the correct positive solution of the resulting quadratic equation in $n$.

---
topic: "Vectors"
subtopic: "Equation of a plane"
---
### **Question 9**

An engineer detects a source of water below the surface of the ground. The engineer models the situation relative to a fixed origin $O$.

In the model
* the surface of the ground is a plane $\Pi$ with equation $x - 2y + 8z = 1$
* the source of water is at a point $W$ with coordinates $(6, -2, -4)$

where the units are metres.

**(a)** Use the model to determine the shortest distance from $W$ to the surface of the ground. **(2)**

**(b)** By considering the model, comment on whether the answer to part (a) is reliable, giving a reason for your answer. **(1)**

To access the water, a hole is drilled, in a straight line, from a point $P$ on the surface of the ground to $W$.

Given that the length of the hole needs to be as short as possible,

**(c)** determine the coordinates of $P$, according to the model. **(3)**

Given that the actual length of the hole drilled is $2.52$ metres,

**(d)** use the answer to part (a) to evaluate the model, giving a reason for your answer. **(1)**

**(Total for Question 9 is 7 marks)**

### **Mark Scheme 9**

#### **Part (a)**

**Step 1: Calculate perpendicular distance**
$$\text{Distance} = \frac{|1(6) - 2(-2) + 8(-4) - 1|}{\sqrt{1^2 + (-2)^2 + 8^2}} = \frac{|6 + 4 - 32 - 1|}{\sqrt{1 + 4 + 64}} = \frac{|-23|}{\sqrt{69}} = \frac{23}{\sqrt{69}} \approx 2.77 \text{ m}$$
- **[M1]** Uses the perpendicular distance formula from a point to a plane correctly.
- **[A1]** Correct exact distance $\frac{23}{\sqrt{69}}$ (or $2.77$ m).

#### **Part (b)**

**Step 2: Comment on reliability**
The model assumes the ground is perfectly flat, or the water source is a single point, which may not reflect reality.
- **[B1]** Valid comment on the flatness of the ground or point source assumption.

#### **Part (c)**

**Step 3: Find the coordinates of $P$**
Normal vector of $\Pi$ is $\mathbf{n} = \begin{pmatrix} 1 \\ -2 \\ 8 \end{pmatrix}$.
Equation of the line through $W(6, -2, -4)$ perpendicular to $\Pi$:
$$\mathbf{r} = \begin{pmatrix} 6 \\ -2 \\ -4 \end{pmatrix} + \lambda \begin{pmatrix} 1 \\ -2 \\ 8 \end{pmatrix}$$
Substitute line coordinates into plane equation $x - 2y + 8z = 1$:
$$(6 + \lambda) - 2(-2 - 2\lambda) + 8(-4 + 8\lambda) = 1$$
$$6 + \lambda + 4 + 4\lambda - 32 + 64\lambda = 1$$
$$69\lambda - 22 = 1 \Rightarrow 69\lambda = 23 \Rightarrow \lambda = \frac{1}{3}$$
Substitute $\lambda = \frac{1}{3}$ back into the line equation:
$$P = \left(6 + \frac{1}{3}, -2 - \frac{2}{3}, -4 + \frac{8}{3}\right) = \left(\frac{19}{3}, -\frac{8}{3}, -\frac{4}{3}\right)$$
- **[M1]** Sets up parametric equation of the line perpendicular to the plane passing through $W$.
- **[M1]** Substitutes into the plane equation to find the parameter $\lambda$.
- **[A1]** Correct coordinates of $P$: $\left(\frac{19}{3}, -\frac{8}{3}, -\frac{4}{3}\right)$.

#### **Part (d)**

**Step 3: Evaluate the model**
The calculated shortest distance ($2.77$ m) is close to the actual drilled length ($2.52$ m), so the model is a reasonable/good approximation (difference of about $0.25$ m or $9\%$).
- **[B1]** Compares the model value with $2.52$ and gives an appropriate conclusion.

### **Examiner Report 9**

This question was well answered with many completely correct solutions.

In part (a), the common approach was to use the formula for the perpendicular distance of a point from a plane and was usually completed successfully. A common error was using $+1$ instead of $-1$ for the value of $+ d$. An allowable approach taking longer to complete used a more basic method starting with the parametric equation of the line, using the condition that the line is normal to the plane to find the coordinates of the foot of the perpendicular and then finding the length of the perpendicular. This was the work intended for part (c). To achieve credit in (c) there needed to be some acknowledgement that this earlier work was relevant.

The reasons in part (b) usually referred to the flatness of the ground or that the water may not be at a single point. Responses such as the source of the water may not be at the given point did not receive credit. A few learners said that it was reliable as they had found the perpendicular distance not commenting on the model.

Part (c) was usually well answered. Only rarely did learners resort to decimals in their final answers. An error when substituting the parametric form of the point into the plane was to equate the scalar product to $1$ rather than $0$ so losing all marks in this part.

In part (d) a comparison of the answer to (a) with $2.52$ was required to comment on the appropriateness of the model. The comparison has to look at the difference between the two values in some way to draw an appropriate conclusion. This may be explicit value, a percentage or something similar but not just a statement like $2.77 > 2.52$.

---
topic: "Vectors"
subtopic: "Points of intersection"
---
### **Question 10**

The plane $\Pi_1$ has equation $x + y - z = 3$

The plane $\Pi_2$ has equation $ax + 3y + 5z = 4$ where $a$ is an integer.

Given that $\Pi_1$ is perpendicular to $\Pi_2$

**(a)** determine the value of $a$. **(2)**

The plane $\Pi_3$ has equation $x + by + 13z = c$ where $b$ and $c$ are integers.

Given that the three planes form a sheaf,

**(b)** use algebra to determine the value of $b$ and the value of $c$. **(6)**

**(Total for Question 10 is 8 marks)**

### **Mark Scheme 10**

#### **Part (a)**

**Step 1: Use perpendicularity condition**
Normal vectors are $\mathbf{n}_1 = \begin{pmatrix} 1 \\ 1 \\ -1 \end{pmatrix}$ and $\mathbf{n}_2 = \begin{pmatrix} a \\ 3 \\ 5 \end{pmatrix}$.
$$\mathbf{n}_1 \cdot \mathbf{n}_2 = 0 \Rightarrow (1)(a) + (1)(3) + (-1)(5) = 0$$
$$a + 3 - 5 = 0 \Rightarrow a = 2$$
- **[M1]** Correctly identifies normal vectors and sets their scalar product to zero.
- **[A1]** $a = 2$.

#### **Part (b)**

**Step 2: Use sheaf condition**
For three planes to form a sheaf, the normal vector of $\Pi_3$ must be a linear combination of the normal vectors of $\Pi_1$ and $\Pi_2$, i.e., $\mathbf{n}_3 = \lambda \mathbf{n}_1 + \mu \mathbf{n}_2$, or the determinant of the matrix of normal vectors is zero, or the planes intersect in a common line.
Using normal vectors:
$$\begin{pmatrix} 1 \\ b \\ 13 \end{pmatrix} = \lambda \begin{pmatrix} 1 \\ 1 \\ -1 \end{pmatrix} + \mu \begin{pmatrix} 2 \\ 3 \\ 5 \end{pmatrix}$$
From $x$-components: $1 = \lambda + 2\mu$
From $z$-components: $13 = -\lambda + 5\mu$
Adding the two equations:
$$14 = 7\mu \Rightarrow \mu = 2$$
Substitute $\mu = 2$ into $\lambda + 2\mu = 1$:
$$\lambda + 4 = 1 \Rightarrow \lambda = -3$$
Find $b$ from $y$-components:
$$b = \lambda + 3\mu = -3 + 3(2) = 3$$
- **[M1]** Sets up linear combination of normal vectors or determinant equation.
- **[A1]** Correct values for multipliers $\lambda$ and $\mu$.
- **[A1]** Correct value for $b = 3$.

**Step 3: Find $c$**
Since the line of intersection of $\Pi_1$ and $\Pi_2$ lies in $\Pi_3$, any point on this line satisfies $\Pi_3$.
Alternatively, using linear combination of the constant terms of the planes:
$$c = \lambda(3) + \mu(4) = -3(3) + 2(4) = -9 + 8 = -1$$
- **[M1]** Uses consistency of equations or linear combination of constants to find $c$.
- **[A1]** Correct value $c = -1$.

### **Examiner Report 10**

In part (a), the vast majority of the learners recognised the need to equate the scalar product of the two normal vectors to zero and thus correctly found the value of $a$.

In part (b), the method used to find $b$ was equally split between those who used the determinant of the $3 \times 3$ matrix formed from the normal vectors of the three planes and those who used the three plane equations to form two equations by eliminating one of the variables $x$, $y$ or $z$. Either way, much success was achieved in finding both $b$ and $c$ but there was clear evidence that some of the learners were unclear of the definition of a sheaf and thus made little progress in their solution.

---
topic: "Roots of Polynomials"
subtopic: "Roots of a cubic equation"
---
### **Question 11**

In this question you must show detailed reasoning.

$$\text{f}(x) = x^3 - 21x^2 + Ax - 91 \quad \text{where } A \text{ is a real constant}$$

The roots of $\text{f}(x) = 0$ are

$$\alpha, \alpha + 3\beta \text{ and } \alpha + 6\beta$$

where $\alpha$ and $\beta$ are real constants.

Use algebra to determine the value of each of these roots. **(7)**

**(Total for Question 11 is 7 marks)**

### **Mark Scheme 11**

#### **Part (a)**

**Step 1: Use Vieta's formulas (Sum of roots)**
$$\text{Sum of roots} = \alpha + (\alpha + 3\beta) + (\alpha + 6\beta) = 3\alpha + 9\beta$$
From the cubic equation, sum of roots $= -(-21) = 21$.
$$3\alpha + 9\beta = 21 \Rightarrow \alpha + 3\beta = 7$$
- **[M1]** Sum of roots equated to $21$.
- **[A1]** Correct simplified relation: $\alpha + 3\beta = 7$ (or $\alpha = 7 - 3\beta$).

**Step 2: Use Vieta's formulas (Product of roots)**
$$\text{Product of roots} = \alpha(\alpha + 3\beta)(\alpha + 6\beta) = -(-91) = 91$$
- **[M1]** Product of roots equated to $91$.

**Step 3: Substitute $\alpha + 3\beta = 7$ into the product**
Notice that the middle root is $\alpha + 3\beta = 7$.
Substitute $\alpha + 3\beta = 7$ and $\alpha = 7 - 3\beta$ into the product equation:
$$(7 - 3\beta)(7)(7 + 3\beta) = 91 \Rightarrow 7(49 - 9\beta^2) = 91$$
$$49 - 9\beta^2 = \frac{91}{7} = 13 \Rightarrow 9\beta^2 = 36 \Rightarrow \beta^2 = 4 \Rightarrow \beta = \pm 2$$
- **[M1]** Substitutes $\alpha + 3\beta = 7$ into the product equation to form an equation in $\beta$.
- **[A1]** Correct values for $\beta$: $\beta = 2$ or $\beta = -2$.

**Step 4: Find corresponding values of $\alpha$ and the three roots**
If $\beta = 2$:
$$\alpha = 7 - 3(2) = 1$$
Roots are: $\alpha = 1$, $\alpha + 3\beta = 7$, $\alpha + 6\beta = 13$.

If $\beta = -2$:
$$\alpha = 7 - 3(-2) = 13$$
Roots are: $\alpha = 13$, $\alpha + 3\beta = 7$, $\alpha + 6\beta = 1$.
Thus, the three roots are $1, 7, 13$.
- **[M1]** Computes the values of $\alpha$ for each $\beta$.
- **[A1]** States all three roots clearly: $1, 7, 13$.

### **Examiner Report 11**

Solutions to this question usually showed an appreciation of the techniques required thus gaining the method marks but failed to gain accuracy marks because of mistakes in algebraic manipulation.

The sum of roots and the product of roots were obtained correctly with very few having sign errors in the signs of the sum and of the product.

Most then appreciated the need to eliminate one of $\alpha$ or $\beta$ from the pair of simultaneous equations that they had formed. The more straightforward substitution of $\alpha = 7 - 3\beta$ was seen almost as often as the more awkward $\beta = \frac{7 - \alpha}{3}$.

Attempts to simplify the resulting equation saw algebraic errors or insufficient simplification so that a correct simplified quadratic was not achieved. Often a cubic resulted which was solved via a calculator which was acceptable here, although previous errors led to incorrect values for $\alpha$ or $\beta$ being obtained.

With the value of $\alpha$ or $\beta$, most followed a correct method to achieve the three roots. There were cases where the values obtained deterred learners from proceeding to three roots so losing the final method and accuracy mark.
