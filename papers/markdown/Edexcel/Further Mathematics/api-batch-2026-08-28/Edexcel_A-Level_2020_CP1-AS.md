---
topic: "Vectors"
subtopic: "Solving geometric problems"
---
### **Question 1**

A system of three equations is defined by

$$\begin{aligned} kx + 3y - z &= 3 \\ 3x - y + z &= -k \\ -16x - ky - kz &= k \end{aligned}$$

where $k$ is a positive constant.

Given that there is no unique solution to all three equations,

**(a)** show that $k = 2$ **(2)**

Using $k = 2$

**(b)** determine whether the three equations are consistent, justifying your answer. **(3)**

**(c)** Interpret the answer to part (b) geometrically. **(1)**

**(Total for Question 1 is 6 marks)**

### **Mark Scheme 1**

#### **Part (a)**
**Step 1: Write the system as a matrix equation and find the determinant**

$$\det \begin{pmatrix} k & 3 & -1 \\ 3 & -1 & 1 \\ -16 & -k & -k \end{pmatrix} = 0$$

- **[M1]** Attempt to set the determinant of the coefficient matrix to 0.

**Step 2: Evaluate the determinant and solve for $k$**

$$k(k + k) - 3(-3k + 16) - 1(-3k - 16) = 0$$
$$2k^2 + 9k - 48 + 3k + 16 = 0 \Rightarrow 2k^2 + 12k - 32 = 0$$
$$2(k + 8)(k - 2) = 0 \Rightarrow k = 2 \quad (\text{since } k > 0)$$

- **[A1]** Correctly obtains $k = 2$ with no invalid steps or false reasons.

#### **Part (b)**
**Step 3: Substitute $k = 2$ into the augmented matrix or equations and perform row operations**

$$\begin{pmatrix} 2 & 3 & -1 & | & 3 \\ 3 & -1 & 1 & | & -2 \\ -16 & -2 & -2 & | & 2 \end{pmatrix}$$

- **[M1]** Correctly substitutes $k = 2$ and attempts to reduce the augmented matrix or eliminate variables.

**Step 4: Reduce to row echelon form**

$$\begin{aligned} R_2 \rightarrow 2R_2 - 3R_1 &\Rightarrow (0, -11, 5 \mid -13) \\ R_3 \rightarrow R_3 + 8R_1 &\Rightarrow (0, 22, -10 \mid 26) \end{aligned}$$

Further reducing gives $0 = 0$ for the final row, or identifying that the three equations represent planes that intersect in a common line (consistent).

- **[A1]** Obtains a consistent system (e.g. leading to $0=0$ or a consistent set of equations).
- **[A1]** States that the equations are consistent and justifies properly (e.g. infinite solutions / consistent system).

#### **Part (c)**
**Step 5: Geometric interpretation**

- **[B1]** The planes intersect in a line (or form a sheaf/pencil of planes).

### **Examiner Report 1**

Very few students achieved full marks on this question. Many did not make any valid attempt for the full question.
Part (a) the majority of candidates score full marks
Part (b) the majority of candidates eliminated one variable to find two equations however many made arithmetic errors leading to inconsistent planes. These candidates did correctly go on to identify that would mean the planes form a prism but unfortunately this was not a B1ft.
Part (c) Most students did mention "planes" in their geometric description which is an improvement on last year.

---
topic: "Complex Numbers"
subtopic: "Modulus-argument form of complex numbers"
---
### **Question 2**

Given that

$$\begin{aligned} z_1 &= 2 + 3\text{i} \\ |z_1 z_2| &= 39\sqrt{2} \\ \arg(z_1 z_2) &= \frac{\pi}{4} \end{aligned}$$

where $z_1$ and $z_2$ are complex numbers,

**(a)** write $z_1$ in the form $r(\cos \theta + \text{i}\sin \theta)$

Give the exact value of $r$ and give the value of $\theta$ in radians to 4 significant figures. **(2)**

**(b)** Find $z_2$ giving your answer in the form $a + ib$ where $a$ and $b$ are integers. **(6)**

**(Total for Question 2 is 8 marks)**

### **Mark Scheme 2**

#### **Part (a)**
**Step 1: Find the modulus $r$ of $z_1$**

$$r = |z_1| = \sqrt{2^2 + 3^2} = \sqrt{13}$$

- **[B1]** Exact modulus $r = \sqrt{13}$.

**Step 2: Find the argument $\theta$ of $z_1$**

$$\theta = \arctan\left(\frac{3}{2}\right) \approx 0.982799\dots \Rightarrow 0.9828\text{ rad}$$

- **[B1]** Correct argument $\theta = 0.9828$ to 4 s.f.

#### **Part (b)**
**Step 3: Use modulus properties to find $|z_2|$**

$$|z_1||z_2| = 39\sqrt{2} \Rightarrow \sqrt{13}|z_2| = 39\sqrt{2} \Rightarrow |z_2| = \frac{39\sqrt{2}}{\sqrt{13}} = 3\sqrt{6}$$

- **[M1]** Uses $|z_1 z_2| = |z_1||z_2|$ to find $|z_2|$.

**Step 4: Use argument properties to find $\arg(z_2)$**

$$\arg(z_1) + \arg(z_2) = \frac{\pi}{4} \Rightarrow \arg(z_2) = \frac{\pi}{4} - \arctan\left(\frac{3}{2}\right)$$

- **[M1]** Uses $\arg(z_1 z_2) = \arg(z_1) + \arg(z_2)$ to find $\arg(z_2)$.

**Step 5: Calculate numerical value for $\arg(z_2)$**

$$\arg(z_2) = \frac{\pi}{4} - 0.982799\dots = -0.1970\dots$$

- **[A1]** Correct value for $\arg(z_2)$.

**Step 6: Express $z_2$ in modulus-argument form or Cartesian form**

$$z_2 = 3\sqrt{6} \left(\cos\left(\frac{\pi}{4} - \arctan\left(\frac{3}{2}\right)\right) + \text{i}\sin\left(\frac{\pi}{4} - \arctan\left(\frac{3}{2}\right)\right)\right)$$

Alternatively, using $\cos(\arctan(x))$ identities:
$$\cos(\arg z_2) = \cos\left(\frac{\pi}{4} - \theta\right) = \cos\left(\frac{\pi}{4}\right)\cos\theta + \sin\left(\frac{\pi}{4}\right)\sin\theta = \frac{1}{\sqrt{2}}\left(\frac{2}{\sqrt{13}}\right) + \frac{1}{\sqrt{2}}\left(\frac{3}{\sqrt{13}}\right) = \frac{5}{\sqrt{26}}$$
$$\sin(\arg z_2) = \sin\left(\frac{\pi}{4} - \theta\right) = \sin\left(\frac{\pi}{4}\right)\cos\theta - \cos\left(\frac{\pi}{4}\right)\sin\theta = \frac{1}{\sqrt{2}}\left(\frac{2}{\sqrt{13}}\right) - \frac{1}{\sqrt{2}}\left(\frac{3}{\sqrt{13}}\right) = -\frac{1}{\sqrt{26}}$$

- **[M1]** Expands using trigonometric angle subtraction formulae or converts accurately to Cartesian form.

**Step 7: Determine real and imaginary parts**

$$z_2 = 3\sqrt{6} \left( \frac{5}{\sqrt{26}} - \text{i}\frac{1}{\sqrt{26}} \right) = 3\sqrt{6} \frac{\sqrt{26}}{26} (5 - \text{i}) = \dots$$
$$z_2 = 9 - 3\text{i}$$

- **[A1]** Real part $a = 9$.
- **[A1]** Imaginary part $b = -3$.

### **Examiner Report 2**
Part (a) on the whole was answered very well. Occasionally some students did not leave to 4sf as requested and a few surprising blank responses.
Part (b) was not as successful but still had good success overall. It often saw students using a mixture of the main scheme and the alternative. Few went for the most efficient direct root to the answer. Those that did were nearly always successful whilst those that used the alternative method often ended up with sign errors.
Of those students who didn't come up with a full method in (b) they nearly always managed to find the correct modulus.
$z_1 + z_2 = 1$ was an error that appeared a few times.

---
topic: "Integration"
subtopic: "Volumes of revolution around the x-axis"
---
### **Question 3**

**Figure 1** _(A sketch of a circle with radius $r$ and centre at the origin, with the region $R$ shaded for $y > 0$)._

```tikz
\begin{tikzpicture}
  \draw[->] (-2.5,0) -- (2.5,0) node[below] {$x$};
  \draw[->] (0,-2.5) -- (0,2.5) node[left] {$y$};
  \draw[thick] (0,0) circle (2cm);
  \fill[gray, opacity=0.3] (-2,0) arc (180:0:2cm) -- cycle;
  \node at (0,1) {$R$};
  \node at (0,0) [below left] {$O$};
  \node at (2,0) [below right] {$r$};
\end{zinger}
```

Figure 1 shows a circle with radius $r$ and centre at the origin.
The region $R$, shown shaded in Figure 1, is bounded by the $x$-axis and the part of the circle for which $y > 0$.
The region $R$ is rotated through $360^\circ$ about the $x$-axis to create a sphere with volume $V$.

Use integration to show that $V = \frac{4}{3}\pi r^3$ **(5)**

**(Total for Question 3 is 5 marks)**

### **Mark Scheme 3**

#### **Part (a)**
**Step 1: State the equation of the circle**

$$x^2 + y^2 = r^2 \Rightarrow y^2 = r^2 - x^2$$

- **[B1]** Correct expression for $y^2$ in terms of $r$ and $x$.

**Step 2: Set up the volume of revolution integral**

$$V = \pi \int_{-r}^{r} y^2 \, dx \quad \text{or} \quad V = 2\pi \int_{0}^{r} (r^2 - x^2) \, dx$$

- **[M1]** Uses the correct formula for volume of revolution $V = \pi \int y^2 \, dx$ with correct limits $-r$ and $r$ (or $0$ and $r$ with a factor of 2).

**Step 3: Integrate with respect to $x$**

$$\int (r^2 - x^2) \, dx = \left[ r^2 x - \frac{x^3}{3} \right]$$

- **[M1]** Correct integration of $r^2 - x^2$.

**Step 4: Substitute limits**

$$V = 2\pi \left( r^2(r) - \frac{r^3}{3} - (0) \right) = 2\pi \left( \frac{2}{3} r^3 \right)$$

- **[dM1]** Correct substitution of limits into the integrated expression (dependent on previous M marks).

**Step 5: Reach the given result**

$$V = \frac{4}{3}\pi r^3$$

- **[A1]** Fully correct proof with clear steps leading to the printed result.

### **Examiner Report 3**
Many candidates ended up at the given answer but from incorrect working. The most error was with the integration $\int r^2 + x^2 \, dx = \frac{1}{3}r^3 + \frac{1}{3}x^3$. Another error seen was multiplying their answer by 4 to get to what they knew they needed.
Other incorrect responses involved trying to integrate $\pi r^2$.
A surprising number of responses were blank for a question that should be very familiar.

---
topic: "Vectors"
subtopic: "Equation of a plane in three dimensions"
---
### **Question 4**

All units in this question are in metres.

A lawn is modelled as a plane that contains the points $L(-2, -3, -1)$, $M(6, -2, 0)$ and $N(2, 0, 0)$, relative to a fixed origin $O$.

**(a)** Determine a vector equation of the plane that models the lawn, giving your answer in the form $\mathbf{r} = \mathbf{a} + \lambda \mathbf{b} + \mu \mathbf{c}$ **(3)**

**(b)** 
**(i)** Show that, according to the model, the lawn is perpendicular to the vector $\begin{pmatrix} 1 \\ 2 \\ -10 \end{pmatrix}$ **(2)**

**(ii)** Hence determine a Cartesian equation of the plane that models the lawn. **(2)**

There are two posts set in the lawn.
There is a washing line between the two posts.
The washing line is modelled as a straight line through points at the top of each post with coordinates $P(-10, 8, 2)$ and $Q(6, 4, 3)$.

**(c)** Determine a vector equation of the line that models the washing line. **(2)**

**(d)** State a limitation of one of the models. **(1)**

The point $R(2, 5, 2.75)$ lies on the washing line.

**(e)** Determine, according to the model, the shortest distance from the point $R$ to the lawn, giving your answer to the nearest cm. **(2)**

Given that the shortest distance from the point $R$ to the lawn is actually $1.5\text{ m}$,

**(f)** use your answer to part (e) to evaluate the model, explaining your reasoning. **(1)**

**(Total for Question 4 is 13 marks)**

### **Mark Scheme 4**

#### **Part (a)**
**Step 1: Find two direction vectors in the plane**

$$\vec{LM} = \begin{pmatrix} 6 - (-2) \\ -2 - (-3) \\ 0 - (-1) \end{pmatrix} = \begin{pmatrix} 8 \\ 1 \\ 1 \end{pmatrix}, \quad \vec{LN} = \begin{pmatrix} 2 - (-2) \\ 0 - (-3) \\ 0 - (-1) \end{pmatrix} = \begin{pmatrix} 4 \\ 3 \\ 1 \end{pmatrix}$$

- **[M1]** Finds at least one correct direction vector between the given points.

**Step 2: Form the vector equation**

$$\mathbf{r} = \begin{pmatrix} -2 \\ -3 \\ -1 \end{pmatrix} + \lambda \begin{pmatrix} 8 \\ 1 \\ 1 \end{pmatrix} + \mu \begin{pmatrix} 4 \\ 3 \\ 1 \end{pmatrix}$$
*(or using any valid point and any set of parallel direction vectors)*

- **[A1]** Correct position vector and correct direction vectors.
- **[A1]** Includes $\mathbf{r} =$ formulation correctly.

#### **Part (b)**
**(i)**
**Step 3: Show perpendicularity using the scalar product**

$$\begin{pmatrix} 8 \\ 1 \\ 1 \end{pmatrix} \cdot \begin{pmatrix} 1 \\ 2 \\ -10 \end{pmatrix} = 8(1) + 1(2) + 1(-10) = 8 + 2 - 10 = 0$$
$$\begin{pmatrix} 4 \\ 3 \\ 1 \end{pmatrix} \cdot \begin{pmatrix} 1 \\ 2 \\ -10 \end{pmatrix} = 4(1) + 3(2) + 1(-10) = 4 + 6 - 10 = 0$$

- **[M1]** Computes scalar products of the normal vector with two direction vectors in the plane, showing both equal zero.
- **[A1]** Concludes clearly that the vector is perpendicular to the plane.

**(ii)**
**Step 4: Determine the Cartesian equation**

$$1(x - (-2)) + 2(y - (-3)) - 10(z - (-1)) = 0$$
$$x + 2 + 2y + 6 - 10z - 10 = 0 \Rightarrow x + 2y - 10z - 2 = 0$$

- **[M1]** Uses the normal components as coefficients and substitutes a point to find the constant term.
- **[A1]** Correct Cartesian equation of the plane.

#### **Part (c)**
**Step 5: Form vector equation of the line**

$$\mathbf{r} = \begin{pmatrix} -10 \\ 8 \\ 2 \end{pmatrix} + t \begin{pmatrix} 16 \\ -4 \\ 1 \end{pmatrix} \quad \text{or} \quad \mathbf{r} = \begin{pmatrix} 6 \\ 4 \\ 3 \end{pmatrix} + s \begin{pmatrix} 16 \\ -4 \\ 1 \end{pmatrix}$$

- **[M1]** Finds the direction vector $\vec{PQ} = \begin{pmatrix} 16 \\ -4 \\ 1 \end{pmatrix}$ and uses either point.
- **[A1]** Fully correct vector equation including $\mathbf{r} =$.

#### **Part (d)**
**Step 6: State a limitation**

- **[B1]** E.g., The lawn may not be completely flat, or the washing line might sag.

#### **Part (e)**
**Step 7: Calculate shortest distance from point $R$ to the plane**

Using the formula for distance from $(x_1, y_1, z_1)$ to $Ax + By + Cz + D = 0$:

$$d = \frac{|1(2) + 2(5) - 10(2.75) - 2|}{\sqrt{1^2 + 2^2 + (-10)^2}}$$
$$d = \frac{|2 + 10 - 27.5 - 2|}{\sqrt{105}} = \frac{|-17.5|}{\sqrt{105}} = \frac{17.5}{\sqrt{105}} \approx 1.7078\text{ m} \approx 171\text{ cm}$$

- **[M1]** Substitutes point $R$ coordinates into the distance formula from a point to a plane.
- **[A1]** $171\text{ cm}$ (or $1.71\text{ m}$).

#### **Part (f)**
**Step 8: Evaluate the model**

- **[B1]** The model is not very accurate/good because the calculated distance ($1.71\text{ m}$) is noticeably different from the actual distance ($1.5\text{ m}$).

### **Examiner Report 4**
It was pleasing to see that the large majority of candidates attempted at least parts of this question.
Part (a) was answered correctly by most candidates. Only a very small handful omitted $\mathbf{r} =$ couple didn't find direction vectors at all and others made an arithmetic error in one of the direction vectors.
Part (b) (i) and (ii) were not so successful. The large majority attempted the main scheme though just under half failed to show the vector was perpendicular to both direction vectors. A small number of candidates attempted alternate 1 or 2 method, all being successful in gaining the method mark but not having a conclusion lost them the accuracy mark.
Part (c) was answered very well though some failed to gain the A mark through loss of $\mathbf{r} =$
Part (d) was answered very well with the majority of candidates commenting on how washing would make the line not straight or that the lawn would not be flat.
Part (e) was very poorly answered, especially considering the formula is in the formula book! Many did not even attempt this part and of those that did most attempted it incorrectly, some not using the normal vector, others using an incorrect formula and the majority trying to solve as though it were the shortest distance between a point and a line.
Part (f) was again surprisingly not answered correctly by all that could, though this again should be a familiar question. Over half did achieve this mark whilst those that didn't often did not conclude with others not attempting.

---
topic: "Series"
subtopic: "Sums of squares and cubes"
---
### **Question 5**

**Figure 2** _(A sketch of a rectangular block of length $(r+2)\text{ cm}$, width $(r+1)\text{ cm}$ and height $r\text{ cm}$)._

```tikz
\begin{tikzpicture}[scale=0.9]
  \draw (0,0) -- (3,0) -- (4,1) -- (1,1) -- cycle;
  \draw (0,0) -- (0,2) -- (3,2) -- (3,0);
  \draw (3,2) -- (4,3) -- (4,1);
  \draw[dashed] (0,2) -- (1,3) -- (4,3);
  \draw[dashed] (1,1) -- (1,3);
  \node at (2,-0.3) {$(r+2)$};
  \node at (3.7,0.5) {$(r+1)$};
  \node at (4.3,2) {$r$};
\end{tikzpicture}
```

A block has length $(r+2)\text{ cm}$, width $(r+1)\text{ cm}$ and height $r\text{ cm}$, as shown in Figure 2.
In a set of $n$ such blocks, the first block has a height of $1\text{ cm}$, the second block has a height of $2\text{ cm}$, the third block has a height of $3\text{ cm}$ and so on.

**(a)** Use the standard results for $\sum_{r=1}^{n} r^3$, $\sum_{r=1}^{n} r^2$ and $\sum_{r=1}^{n} r$ to show that the total volume, $V$, of all $n$ blocks in the set is given by

$$V = \frac{n}{4}(n+1)(n+2)(n+3) \quad n \ge 1$$ **(5)**

Given that the total volume of all $n$ blocks is $(n^4 + 6n^3 - 11710)\text{ cm}^3$

**(b)** determine how many blocks make up the set. **(2)**

**(Total for Question 5 is 7 marks)**

### **Mark Scheme 5**

#### **Part (a)**
**Step 1: Write down the volume of the $r$-th block**

$$V_r = r(r+1)(r+2) = r(r^2 + 3r + 2) = r^3 + 3r^2 + 2r$$

- **[B1]** Correct expression for the volume of a single block expanded as a cubic.

**Step 2: Set up the sum for total volume $V$**

$$V = \sum_{r=1}^{n} (r^3 + 3r^2 + 2r) = \sum_{r=1}^{n} r^3 + 3\sum_{r=1}^{n} r^2 + 2\sum_{r=1}^{n} r$$

- **[M1]** Attempts to sum $V_r$ from $r=1$ to $n$ using linearity.

**Step 3: Substitute standard summation formulae**

$$V = \frac{1}{4}n^2(n+1)^2 + 3\left(\frac{1}{6}n(n+1)(2n+1)\right) + 2\left(\frac{1}{2}n(n+1)\right)$$

- **[M1]** Correctly substitutes standard formulae for $\sum r^3$, $\sum r^2$, and $\sum r$.

**Step 4: Factorise and simplify**

$$V = \frac{1}{4}n(n+1) \left[ n(n+1) + 2(2n+1) + 4 \right]$$
$$= \frac{1}{4}n(n+1) \left[ n^2 + n + 4n + 2 + 4 \right] = \frac{1}{4}n(n+1)(n^2 + 5n + 6)$$

- **[dM1]** Takes out a common factor of $\frac{1}{4}n(n+1)$ or simplifies the quadratic factor.

**Step 5: Factorise the quadratic and reach the given result**

$$n^2 + 5n + 6 = (n+2)(n+3) \Rightarrow V = \frac{n}{4}(n+1)(n+2)(n+3)$$

- **[A1]** Fully correct algebraic manipulation leading to the given expression.

#### **Part (b)**
**Step 6: Equate expressions for volume**

$$\frac{n}{4}(n+1)(n+2)(n+3) = n^4 + 6n^3 - 11710$$

Expand LHS:
$$\frac{n}{4}(n^3 + 6n^2 + 11n + 6) = \frac{1}{4}n^4 + \frac{3}{2}n^3 + \frac{11}{4}n^2 + \frac{3}{2}n$$
Equating or solving:
Wait, let's expand $\frac{n}{4}(n+1)(n+2)(n+3)$:
$$\frac{1}{4}(n^4 + 6n^3 + 11n^2 + 6n) = n^4 + 6n^3 - 11710$$
$$\frac{1}{4}n^4 + \frac{3}{2}n^3 + \frac{11}{4}n^2 + \frac{3}{2}n = n^4 + 6n^3 - 11710$$
$$\frac{3}{4}n^4 + \frac{9}{2}n^3 - \frac{11}{4}n^2 - \frac{3}{2}n - 11710 = 0 \Rightarrow 3n^4 + 18n^3 - 11n^2 - 6n - 46840 = 0$$

- **[M1]** Equates the derived volume expression to the given expression and simplifies to form a polynomial equation in $n$.

**Step 7: Solve for $n$**

Testing values or using a calculator:
If $n = 10$: $3(10000) + 18(1000) - 11(100) - 6(10) - 46840 = 30000 + 18000 - 1100 - 60 - 46840 = 46800 - 46840 \neq 0$
Wait, let's recheck expansion:
$V = \frac{1}{4}n(n+1)(n+2)(n+3)$.
If $n = 10$: $V = \frac{10}{4}(11)(12)(13) = 2.5 \times 1716 = 4290$.
Given volume: $10^4 + 6(10^3) - 11710 = 10000 + 6000 - 11710 = 4290$.
Thus $n = 10$.

- **[A1]** $n = 10$.

### **Examiner Report 5**
Very well answered on the whole.
Candidates spotted that $n$ can be factorised out but many did not spot that $(n+1)$ can be factorised out...
Part (b) was also answered well though some got to the quartic and struggled to/didn't attempt to solve...

---
topic: "Linear Transformations"
subtopic: "Linear transformations in two dimensions"
---
### **Question 6**

**(i)** 
$$\mathbf{A} = \begin{pmatrix} 2 & a \\ a - 4 & b \end{pmatrix}$$

where $a$ and $b$ are non-zero constants.

Given that the matrix $\mathbf{A}$ is self-inverse,

**(a)** determine the value of $b$ and the possible values for $a$. **(5)**

The matrix $\mathbf{A}$ represents a linear transformation $M$.

Using the smaller value of $a$ from part (a),

**(b)** show that the invariant points of the linear transformation $M$ form a line, stating the equation of this line. **(3)**

**(ii)**
$$\mathbf{P} = \begin{pmatrix} p & 2p \\ -1 & 3p \end{pmatrix}$$

where $p$ is a positive constant.

The matrix $\mathbf{P}$ represents a linear transformation $U$.
The triangle $T$ has vertices at the points with coordinates $(1, 2)$, $(3, 2)$ and $(2, 5)$.
The area of the image of $T$ under the linear transformation $U$ is $15$.

**(a)** Determine the value of $p$. **(4)**

The transformation $V$ consists of a stretch scale factor $3$ parallel to the $x$-axis with the $y$-axis invariant followed by a stretch scale factor $-2$ parallel to the $y$-axis with the $x$-axis invariant. The transformation $V$ is represented by the matrix $\mathbf{Q}$.

**(b)** Write down the matrix $\mathbf{Q}$. **(2)**

Given that $U$ followed by $V$ is the transformation $W$, which is represented by the matrix $\mathbf{R}$,

**(c)** find the matrix $\mathbf{R}$. **(2)**

**(Total for Question 6 is 16 marks)**

### **Mark Scheme 6**

#### **Part (i)(a)**
**Step 1: Use the self-inverse property $\mathbf{A}^2 = \mathbf{I}$**

$$\mathbf{A}^2 = \begin{pmatrix} 2 & a \\ a - 4 & b \end{pmatrix} \begin{pmatrix} 2 & a \\ a - 4 & b \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$$

- **[M1]** States or uses $\mathbf{A}^2 = \mathbf{I}$ (or $\mathbf{A} = \mathbf{A}^{-1}$).

**Step 2: Multiply matrices to find equations**

$$\begin{pmatrix} 4 + a(a-4) & 2a + ab \\ 2(a-4) + b(a-4) & a(a-4) + b^2 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$$

- **[M1]** Correct matrix multiplication.

**Step 3: Equate elements to form equations**

1) $4 + a^2 - 4a = 1 \Rightarrow a^2 - 4a + 3 = 0 \Rightarrow (a-1)(a-3) = 0 \Rightarrow a = 1, 3$
2) $2a + ab = 0 \Rightarrow a(2 + b) = 0$. Since $a \neq 0$, $b = -2$.
3) Check bottom right element: $a(a-4) + b^2 = 1 \Rightarrow 3(3-4) + (-2)^2 = -3 + 4 = 1$ (consistent).

- **[A1]** Correct value for $b$ ($b = -2$).
- **[A1]** Correct quadratic in $a$.
- **[A1]** Correct possible values for $a$ ($a = 1, 3$).

#### **Part (i)(b)**
**Step 4: Use smaller value $a = 1$ in matrix $\mathbf{A}$**

$$\mathbf{A} = \begin{pmatrix} 2 & 1 \\ -3 & -2 \end{pmatrix}$$

$$\begin{pmatrix} 2 & 1 \\ -3 & -2 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} x \\ y \end{pmatrix}$$
$$2x + y = x \Rightarrow y = -x$$
$$-3x - 2y = y \Rightarrow 3x + 3y = 0 \Rightarrow y = -x$$

- **[M1]** Sets up the matrix equation $\mathbf{A}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} x \\ y \end{pmatrix}$ using $a = 1$.
- **[A1]** Obtains $y = -x$ (or equivalent).
- **[A1]** States the equation of the line clearly ($y = -x$ or $x + y = 0$).

#### **Part (ii)(a)**
**Step 5: Find the area of the original triangle $T$**

Using vertices $(1,2), (3,2), (2,5)$:
Base along $y=2$ is from $x=1$ to $x=3$, so length = 2.
Height = $5 - 2 = 3$.
$$\text{Area of } T = \frac{1}{2} \times 2 \times 3 = 3$$

- **[M1]** Finds the area of triangle $T$.

**Step 6: Find the determinant of $\mathbf{P}$**

$$\det(\mathbf{P}) = p(3p) - (2p)(-1) = 3p^2 + 2p$$

- **[M1]** Finds $\det(\mathbf{P})$.

**Step 7: Relate image area to determinant and solve for $p$**

$$\text{Area of image} = |\det(\mathbf{P})| \times \text{Area of } T$$
$$15 = (3p^2 + 2p)(3) \Rightarrow 3p^2 + 2p = 5 \Rightarrow 3p^2 + 2p - 5 = 0$$
$$(3p + 5)(p - 1) = 0 \Rightarrow p = 1 \quad \text{since } p > 0$$

- **[dM1]** Equates $15$ to $|\det(\mathbf{P})| \times \text{Area of } T$ and forms a quadratic in $p$.
- **[A1]** Correct positive value $p = 1$.

#### **Part (ii)(b)**
**Step 8: Write down matrix $\mathbf{Q}$**

$$\mathbf{Q} = \begin{pmatrix} 3 & 0 \\ 0 & -2 \end{pmatrix}$$

- **[B2]** Correct matrix $\mathbf{Q}$ (B1 for mostly correct structure).

#### **Part (ii)(c)**
**Step 9: Find matrix $\mathbf{R}$**

$$\mathbf{R} = \mathbf{Q}\mathbf{P}$$
For $p = 1$:
$$\mathbf{P} = \begin{pmatrix} 1 & 2 \\ -1 & 3 \end{pmatrix}$$
$$\mathbf{R} = \begin{pmatrix} 3 & 0 \\ 0 & -2 \end{pmatrix} \begin{pmatrix} 1 & 2 \\ -1 & 3 \end{pmatrix} = \begin{pmatrix} 3(1) + 0(-1) & 3(2) + 0(3) \\ 0(1) + (-2)(-1) & 0(2) + (-2)(3) \end{pmatrix} = \begin{pmatrix} 3 & 6 \\ 2 & -6 \end{pmatrix}$$

- **[M1]** Correct order of matrix multiplication ($\mathbf{Q}\mathbf{P}$).
- **[A1ft]** Correct matrix $\mathbf{R}$.

### **Examiner Report 6**
(i) Part (a) - candidates that used the fact that for a matrix to be a self-inverse then $\mathbf{AA} = \mathbf{I}$ and were very successful. However, the majority attempted $\mathbf{A}^{-1} = \mathbf{A}$ this did have some success but very often not. Often the two equations pulled out were not from the different diagonals meaning no marks awarded...
(i) Part (b) This was largely not attempted though those that were successful with part (a) were often successful...
Section (ii) on the whole was much better answered. Part (a) - only a small number failed to find the area of the object... Part (b) - very high success rate. Part (c) - Due to the follow through marks available full marks where achieved on this part by nearly all who answered it.

---
topic: "Roots of Polynomials"
subtopic: "Roots of a quartic equation"
---
### **Question 7**

$$f(z) = z^4 + az^3 + bz^2 + cz + d$$

where $a, b, c$ and $d$ are real constants.

The equation $f(z) = 0$ has complex roots $z_1, z_2, z_3$ and $z_4$.
When plotted on an Argand diagram, the points representing $z_1, z_2, z_3$ and $z_4$ form the vertices of a square, with one vertex in each quadrant.

Given that $z_1 = 2 + 3\text{i}$, determine the values of $a, b, c$ and $d$. **(6)**

**(Total for Question 7 is 6 marks)**

### **Mark Scheme 7**

#### **Part (a)**
**Step 1: Identify all four complex roots**

Since the coefficients are real and the vertices form a square centred at the origin with one vertex in each quadrant at $z_1 = 2 + 3\text{i}$:
- $z_2 = -3 + 2\text{i}$
- $z_3 = -2 - 3\text{i}$
- $z_4 = 3 - 2\text{i}$

- **[B2]** All four roots correctly identified (B1 for at least two correct roots).

**Step 2: Form quadratic factors or expand directly**

Pair complex conjugates:
Factor 1: $(z - (2+3\text{i}))(z - (2-3\text{i})) = z^2 - 4z + 13$
Factor 2: $(z - (-3+2\text{i}))(z - (-3-2\text{i})) = z^2 + 6z + 13$

- **[M1]** Multiplies conjugate pairs to form quadratic factors with real coefficients.
- **[A1]** Both quadratic factors correct.

**Step 3: Multiply the quadratic factors to find $f(z)$**

$$f(z) = (z^2 - 4z + 13)(z^2 + 6z + 13)$$
$$= z^4 + 6z^3 + 13z^2 - 4z^3 - 24z^2 - 52z + 13z^2 + 78z + 169$$
$$= z^4 + 2z^3 + 2z^2 + 26z + 169$$

- **[M1]** Expands the product of the two quadratic factors.

**Step 4: State the values of $a, b, c, d$**

$$a = 2, \quad b = 2, \quad c = 26, \quad d = 169$$

- **[A1]** All four values correctly stated.

### **Examiner Report 7**
A small number of blank responses but most managed to attempt this question. About half correctly identified the 3rd and 4th root whilst the other half incorrectly used $-2 \pm 3\text{i}$, this meant 110100 was a common mark trait along with full marks.
Finding quadratic equations for each pair of roots and then multiplying to find the quartic equation was the most successful approach.

---
topic: "Proof by Induction"
subtopic: "Proving divisibility results"
---
### **Question 8**

Prove by induction that, for $n \in \mathbb{Z}^+$

$$f(n) = 2^{n+2} + 3^{2n+1}$$

is divisible by $7$. **(6)**

**(Total for Question 8 is 6 marks)**

### **Mark Scheme 8**

#### **Part (a)**
**Step 1: Base case ($n = 1$)**

$$f(1) = 2^{1+2} + 3^{2(1)+1} = 2^3 + 3^3 = 8 + 27 = 35$$
Since $35 = 7 \times 5$, $f(1)$ is divisible by $7$.

- **[B1]** Shows true for $n = 1$ and states it is divisible by $7$.

**Step 2: Assumption step**

Assume that $f(k) = 2^{k+2} + 3^{2k+1}$ is divisible by $7$ for some integer $k \ge 1$ (i.e., $f(k) = 7M$ for some integer $M$).

- **[M1]** Makes the inductive assumption for $n = k$.

**Step 3: Consider $f(k+1)$**

$$f(k+1) = 2^{(k+1)+2} + 3^{2(k+1)+1} = 2^{k+3} + 3^{2k+3}$$

- **[M1]** Writes down the expression for $f(k+1)$.

**Step 4: Express $f(k+1)$ in terms of $f(k)$**

$$f(k+1) = 2 \cdot 2^{k+2} + 9 \cdot 3^{2k+1}$$
$$= 2(2^{k+2} + 3^{2k+1}) + 7 \cdot 3^{2k+1}$$
$$= 2f(k) + 7 \cdot 3^{2k+1}$$

- **[M1]** Manipulates $f(k+1)$ to isolate a multiple of $f(k)$ or uses substitution correctly.

**Step 5: Conclusion**

Since $f(k) = 7M$,
$$f(k+1) = 2(7M) + 7 \cdot 3^{2k+1} = 7(2M + 3^{2k+1})$$
which is divisible by $7$.
Therefore, if true for $n = k$, it is true for $n = k+1$. Since it is true for $n = 1$, by mathematical induction it is true for all $n \in \mathbb{Z}^+$.

- **[A1]** Completes the proof with clear logical statements and valid conclusion.

### **Examiner Report 8**
The large majority of candidates achieved the first 3 marks but then struggled to get $f(k+1)$ in the required form to show that it is divisible by $7$. Those that did mostly used the main scheme or alternate 1 and generally went on to conclude with good success, only a few did not get the if/then conveyed in their conclusion.

---
topic: "Roots of Polynomials"
subtopic: "Expressions relating to the roots of a polynomial"
---
### **Question 9**

The cubic equation

$$3x^3 + x^2 - 4x + 1 = 0$$

has roots $\alpha, \beta$, and $\gamma$.

Without solving the cubic equation,

**(a)** determine the value of $\frac{1}{\alpha} + \frac{1}{\beta} + \frac{1}{\gamma}$ **(3)**

**(b)** find a cubic equation that has roots $\frac{1}{\alpha}, \frac{1}{\beta}$ and $\frac{1}{\gamma}$, giving your answer in the form $x^3 + ax^2 + bx + c = 0$, where $a, b$ and $c$ are integers to be determined. **(3)**

**(Total for Question 9 is 6 marks)**

### **Mark Scheme 9**

#### **Part (a)**
**Step 1: State the sum and product of roots for the original cubic**

From $3x^3 + x^2 - 4x + 1 = 0$:
$$\sum \alpha = \alpha + \beta + \gamma = -\frac{1}{3}$$
$$\sum \alpha\beta = \alpha\beta + \beta\gamma + \gamma\alpha = \frac{-4}{3} = -\frac{4}{3}$$
$$\alpha\beta\gamma = -\frac{1}{3}$$

- **[B1]** Correct values for $\sum \alpha$, $\sum \alpha\beta$, and $\alpha\beta\gamma$.

**Step 2: Express $\frac{1}{\alpha} + \frac{1}{\beta} + \frac{1}{\gamma}$ in terms of roots**

$$\frac{1}{\alpha} + \frac{1}{\beta} + \frac{1}{\gamma} = \frac{\sum \alpha\beta}{\alpha\beta\gamma}$$

- **[M1]** Writes $\frac{1}{\alpha} + \frac{1}{\beta} + \frac{1}{\gamma}$ as a single fraction $\frac{\sum \alpha\beta}{\alpha\beta\gamma}$.

**Step 3: Evaluate the expression**

$$\frac{-\frac{4}{3}}{-\frac{1}{3}} = 4$$

- **[A1]** Correct value $4$.

#### **Part (b)**
**Step 4: Use substitution $w = \frac{1}{x}$ or symmetric functions**

Substitute $x = \frac{1}{w}$ into $3x^3 + x^2 - 4x + 1 = 0$:
$$3\left(\frac{1}{w}\right)^3 + \left(\frac{1}{w}\right)^2 - 4\left(\frac{1}{w}\right) + 1 = 0$$
$$\frac{3}{w^3} + \frac{1}{w^2} - \frac{4}{w} + 1 = 0$$

- **[M1]** Uses substitution $x = \frac{1}{w}$ or finds new coefficients using relations.

**Step 5: Multiply through by $w^3$**

$$3 + w - 4w^2 + w^3 = 0 \Rightarrow w^3 - 4w^2 + w + 3 = 0$$

- **[M1]** Simplifies to a polynomial in $w$ (or $x$).

**Step 6: Write in the required form**

$$x^3 - 4x^2 + x + 3 = 0$$

- **[A1]** Correct cubic equation with integer coefficients.

### **Examiner Report 9**
On the whole this question was very successful for those that attempted it.
Part (a) was answered very well with the main error coming from their product being $\frac{1}{3}$ only a couple used $c$ and $-d$ in place of $\frac{c}{a}$ and $\frac{d}{a}$.
Part (b) the alternate method was the most popular and the most effective...

---
topic: "Argand Diagrams"
subtopic: "Loci in the Argand diagram"
---
### **Question 10**

Given that there are two distinct complex numbers $z$ that satisfy

$$\{z : |z - 3 - 5\text{i}| = 2r\} \cap \{z : \arg(z - 2) = \frac{3\pi}{4}\}$$

determine the exact range of values for the real constant $r$. **(7)**

**(Total for Question 10 is 7 marks)**

### **Mark Scheme 10**

#### **Part (a)**
**Step 1: Interpret the geometric meaning of the locus conditions**

- Condition 1: $|z - (3 + 5\text{i})| = 2r$ is a circle centred at $(3, 5)$ with radius $2r$ (where $r > 0$).
- Condition 2: $\arg(z - 2) = \frac{3\pi}{4}$ is a half-line starting from $(2, 0)$ at an angle of $\frac{3\pi}{4}$ to the positive real axis.

- **[B2]** Identifies both loci correctly (circle and ray/half-line).

**Step 2: Find the Cartesian equation of the half-line**

Passing through $(2, 0)$ with gradient $\tan\left(\frac{3\pi}{4}\right) = -1$:
$$y - 0 = -1(x - 2) \Rightarrow y = -x + 2 \quad (\text{for } x < 2)$$

- **[M1]** Finds the equation of the line representing the argument condition ($y = -x + 2$ with $x < 2$).

**Step 3: Substitute line into circle equation**

Circle equation: $(x - 3)^2 + (y - 5)^2 = (2r)^2$
Substitute $y = -x + 2$:
$$(x - 3)^2 + (-x + 2 - 5)^2 = 4r^2$$
$$(x - 3)^2 + (-x - 3)^2 = 4r^2$$
$$(x - 3)^2 + (x + 3)^2 = 4r^2$$
$$(x^2 - 6x + 9) + (x^2 + 6x + 9) = 4r^2$$
$$2x^2 + 18 = 4r^2 \Rightarrow x^2 + 9 = 2r^2 \Rightarrow x^2 = 2r^2 - 9$$

- **[M1]** Substitutes the line equation into the circle equation and simplifies to a quadratic in $x$.

**Step 4: Analyse conditions for two distinct points of intersection**

For two distinct solutions, we require:
1) $2r^2 - 9 > 0 \Rightarrow r^2 > \frac{9}{2} \Rightarrow r > \frac{3}{\sqrt{2}} = \frac{3\sqrt{2}}{2}$
2) The intersection points must lie on the half-line ($x < 2$):
If $x^2 = 2r^2 - 9$, then for $x < 2$, we test the boundary case where $x = 2$:
$2^2 = 2r^2 - 9 \Rightarrow 4 = 2r^2 - 9 \Rightarrow 2r^2 = 13 \Rightarrow r^2 = \frac{13}{2} \Rightarrow r = \sqrt{\frac{13}{2}} = \frac{\sqrt{26}}{2}$

- **[M1]** Considers the discriminant or limits for two intersection points.
- **[A1]** Obtains lower limit $r > \frac{3\sqrt{2}}{2}$.
- **[A1]** Obtains upper limit $r < \frac{\sqrt{26}}{2}$ (or $\frac{3}{2}\sqrt{2} < r < \frac{1}{2}\sqrt{26}$).

### **Examiner Report 10**
There were only a couple of fully correct responses to this question.
Many candidates achieved the first 3 marks for finding the equation of each loci and attempting to solve simultaneously. Many then failed to use the discriminant or rearranging for $x^2$ and setting $> 0$, many just tried to solve the quadratic in terms of $r$. Only a small minority realised to find the upper limit of $r$, though those that did all were successful.
