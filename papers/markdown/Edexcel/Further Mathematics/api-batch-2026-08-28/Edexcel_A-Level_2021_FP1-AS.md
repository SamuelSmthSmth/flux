---
topic: "Inequalities"
subtopic: "Algebraic methods"
---
### **Question 1**

Use algebra to determine the values of $x$ for which

$$x(x - 1) > \frac{x - 1}{x}$$

giving your answer in set notation. **(6)**

**(Total for Question 1 is 6 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Rearrange the inequality** 

$$x(x - 1) - \frac{x - 1}{x} > 0$$

- **[M1]** Collects terms onto one side with zero on the other.

**Step 2: Factorise** 

$$(x - 1)\left(x - \frac{1}{x}\right) > 0 \Rightarrow \frac{(x - 1)(x^2 - 1)}{x} > 0 \Rightarrow \frac{(x - 1)^2(x + 1)}{x} > 0$$

- **[M1]** Factorises or combines over a common denominator to obtain a single fraction.

**Step 3: Identify critical values** 

Critical values are $x = -1, 0, 1$.

- **[A1]** Correct critical values.

**Step 4: Determine valid regions** 

Testing regions or using properties of $(x-1)^2 \ge 0$: since $(x-1)^2$ is always non-negative, we require $\frac{x+1}{x} > 0$ for $x \neq 1$, or test intervals $x < -1$, $-1 < x < 0$, $0 < x < 1$, $x > 1$.

- **[M1]** Considers appropriate regions or uses test values.

**Step 5: Obtain correct intervals** 

$x < -1$ or $0 < x < 1$ or $x > 1$ (noting $x \neq 1$).

- **[A1]** Correct intervals for $x$.

**Step 6: Write in set notation** 

$$\{x \in \mathbb{R} : x < -1\} \cup \{x \in \mathbb{R} : 0 < x < 1\} \cup \{x \in \mathbb{R} : x > 1\}$$
or equivalent, e.g., $\{x \in \mathbb{R} : x < -1\} \cup \{x \in \mathbb{R} : x > 0, x \neq 1\}$.

- **[A1ft]** Correct set notation following through their intervals.

---
topic: "Numerical Methods"
subtopic: "Solving first-order differential equations"
---
### **Question 2**

The variables $x$ and $y$ satisfy the differential equation

$$\frac{d^2y}{dx^2} + 15\frac{dy}{dx} - 3y^2 = 2x$$

where $y = 1$ at $x = 0$ and where $y = 2$ at $x = 0.1$

Use the approximations

$$\left(\frac{d^2y}{dx^2}\right)_n \approx \frac{y_{n+1} - 2y_n + y_{n-1}}{h^2} \quad \text{and} \quad \left(\frac{dy}{dx}\right)_n \approx \frac{y_{n+1} - y_{n-1}}{2h}$$

with $h = 0.1$ to find an estimate for the value of $y$ when $x = 0.3$ **(6)**

**(Total for Question 2 is 6 marks)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Identify values from given points** 

Let $x_0 = 0$, so $y_0 = 1$.
Let $x_1 = 0.1$, so $y_1 = 2$.
We need $y_3$ at $x_3 = 0.3$, via $y_2$ at $x_2 = 0.2$.
Here $h = 0.1$.

- **[B1]** Identifies $y_0 = 1, y_1 = 2$ and sets up the step length correctly.

**Step 2: Substitute approximations into the differential equation at $n = 1$ ($x = 0.1$)** 

$$\frac{y_2 - 2y_1 + y_0}{h^2} + 15\left(\frac{y_2 - y_0}{2h}\right) - 3y_1^2 = 2x_1$$

- **[M1]** Substitutes the finite difference approximations into the differential equation for $n = 1$.

**Step 3: Substitute numerical values** 

$$\frac{y_2 - 2(2) + 1}{(0.1)^2} + 15\left(\frac{y_2 - 1}{2(0.1)}\right) - 3(2)^2 = 2(0.1)$$

$$\frac{y_2 - 3}{0.01} + 75(y_2 - 1) - 12 = 0.2$$

- **[M1]** Correct substitution of $h = 0.1, y_0 = 1, y_1 = 2, x_1 = 0.1$.

**Step 4: Solve for $y_2$** 

$$100(y_2 - 3) + 75(y_2 - 1) - 12 = 0.2$$

$$100y_2 - 300 + 75y_2 - 75 - 12 = 0.2$$

$$175y_2 - 387 = 0.2 \Rightarrow 175y_2 = 387.2 \Rightarrow y_2 = \frac{387.2}{175} = 2.21257\dots$$

- **[A1]** Correct value for $y_2$.

**Step 5: Apply approximations at $n = 2$ ($x = 0.2$) to find $y_3$** 

$$\frac{y_3 - 2y_2 + y_1}{h^2} + 15\left(\frac{y_3 - y_1}{2h}\right) - 3y_2^2 = 2x_2$$

$$\frac{y_3 - 2(2.21257) + 2}{(0.1)^2} + 75(y_3 - 2) - 3(2.21257)^2 = 2(0.2)$$

- **[M1]** Sets up the equation for $n = 2$ to find $y_3$.

**Step 6: Calculate $y_3$** 

$$100(y_3 - 4.42514 + 2) + 75(y_3 - 2) - 3(4.89547) = 0.4$$

$$100(y_3 - 2.42514) + 75(y_3 - 2) - 14.6864 = 0.4$$

$$175y_3 - 242.514 - 150 - 14.6864 = 0.4$$

$$175y_3 - 407.2 = 0.4 \Rightarrow 175y_3 = 407.6 \Rightarrow y_3 = 2.3291...\approx 2.33$$

- **[A1]** Correct estimate for $y$ when $x = 0.3$ (awrt $2.33$).

---
topic: "Trigonometry and Modelling"
subtopic: "Simplifying a cos x ± b sin x"
---
### **Question 3**

On a particular day, the depth of water in a river estuary at a specific location is modelled by the equation

$$D = 2\sin\left(\frac{x}{3}\right) + 3\cos\left(\frac{x}{3}\right) + 6 \quad 0 \leqslant x \leqslant 7\pi \quad \text{(I)}$$

where the depth of water is $D$ metres at time $x$ hours after midnight on that day.

**(a)** Write down the depth of water at midnight, according to the model. **(1)**

Using the substitution $t = \tan\left(\frac{x}{6}\right)$

**(b)** show that equation (I) can be re-written as

$$D = \frac{3t^2 + 4t + 9}{1 + t^2}$$ **(3)**

**(c)** Hence determine, according to the model, the time after midnight when the depth of water is 5 metres for the first time. Give your answer to the nearest minute. **(5)**

**(Total for Question 3 is 9 marks)**

### **Mark Scheme 3

#### **Part (a)**

**Step 1: Evaluate at $x = 0$** 

At midnight, $x = 0$:
$$D = 2\sin(0) + 3\cos(0) + 6 = 0 + 3(1) + 6 = 9$$

- **[B1]** Correct depth of 9 (metres).

#### **Part (b)**

**Step 2: Use standard t-formula substitutions** 

Using $t = \tan\left(\frac{x}{6}\right)$:
$$\sin\left(\frac{x}{3}\right) = \frac{2t}{1 + t^2} \quad \text{and} \quad \cos\left(\frac{x}{3}\right) = \frac{1 - t^2}{1 + t^2}$$

- **[M1]** States or uses standard double-angle results for $\sin\left(\frac{x}{3}\right)$ and $\cos\left(\frac{x}{3}\right)$ in terms of $t$.

**Step 3: Substitute into the expression for $D$** 

$$D = 2\left(\frac{2t}{1 + t^2}\right) + 3\left(\frac{1 - t^2}{1 + t^2}\right) + 6$$

- **[M1]** Substitutes expressions into equation (I).

**Step 4: Simplify to the required form** 

$$D = \frac{4t + 3 - 3t^2 + 6(1 + t^2)}{1 + t^2} = \frac{4t + 3 - 3t^2 + 6 + 6t^2}{1 + t^2} = \frac{3t^2 + 4t + 9}{1 + t^2}$$

- **[A1]** Completes the algebraic manipulation correctly to reach the printed result.

#### **Part (c)**

**Step 5: Set $D = 5$** 

$$\frac{3t^2 + 4t + 9}{1 + t^2} = 5$$

- **[M1]** Sets the rational expression equal to 5.

**Step 6: Form a quadratic equation in $t$** 

$$3t^2 + 4t + 9 = 5(1 + t^2) \Rightarrow 3t^2 + 4t + 9 = 5 + 5t^2 \Rightarrow 2t^2 - 4t - 4 = 0 \Rightarrow t^2 - 2t - 2 = 0$$

- **[M1]** Rearranges into a 3-term quadratic equation in $t$.

**Step 7: Solve for $t$** 

$$t = \frac{-(-2) \pm \sqrt{(-2)^2 - 4(1)(-2)}}{2(1)} = \frac{2 \pm \sqrt{12}}{2} = 1 \pm \sqrt{3}$$

Since we want the first time after midnight, we consider the values of $x$:
$t = 1 - \sqrt{3} = -0.73205$ or $t = 1 + \sqrt{3} = 2.73205$.

- **[A1]** Correct values for $t$ (or selects the appropriate $t$ for the first time).

**Step 8: Find $x$ for the first time** 

$\tan\left(\frac{x}{6}\right) = 1 - \sqrt{3} \Rightarrow \frac{x}{6} = \arctan(-0.73205...) = -0.63003$ or $\pi - 0.63003$ etc.
Since $0 \leqslant x \...$ wait, adding $\pi$ to get the principal positive root in the interval:
$\frac{x}{6} = -0.63003 + \pi = 2.51156$ (not first time) or considering negative/positive branches.
Let's check $t = 1 - \sqrt{3} = -0.73205$:
$\frac{x}{6} = \arctan(1 - \sqrt{3}) = -0.63003$. Adding $\pi$: $\frac{x}{6} = 2.51156 \Rightarrow x = 15.069$.
Alternatively, $\frac{x}{6} = \arctan(2.73205) = 1.22059 \Rightarrow x = 7.3235$.
Let's check both:
If $\tan\left(\frac{x}{6}\right) = 1 + \sqrt{3} = 2.73205 \Rightarrow \frac{x}{6} = 1.22059 \Rightarrow x = 7.3235$ hours.
If $\tan\left(\frac{x}{6}\right) = 1 - \sqrt{3} = -0.73205 \Rightarrow \frac{x}{6} = -0.63003$ (gives negative $x$, outside domain $0 \leqslant x \leqslant 7\pi$), so add $\pi$: $\frac{x}{6} = 2.5116 \Rightarrow x = 15.069$ hours.
Thus the first time is $x = 7.3235$ hours.

- **[M1]** Uses $\arctan$ correctly to find the value of $x$ for the first time.

**Step 9: Convert to hours and minutes** 

$x = 7.3235$ hours = $7$ hours $+ 0.3235 \times 60$ minutes = $7$ hours $+ 19.41$ minutes $\approx 7$ hours $19$ minutes.

- **[A1]** Correct time to the nearest minute (7 hours 19 minutes or 07:19).

---
topic: "Vectors"
subtopic: "Solving geometric problems"
---
### **Question 4**

With respect to a fixed origin $O$, the points $A$, $B$ and $C$ have position vectors given by

$$\vec{OA} = 18\mathbf{i} - 14\mathbf{j} - 2\mathbf{k}, \quad \vec{OB} = -7\mathbf{i} - 5\mathbf{j} + 3\mathbf{k}, \quad \vec{OC} = -2\mathbf{i} - 9\mathbf{j} - 6\mathbf{k}$$

The points $O$, $A$, $B$ and $C$ form the vertices of a tetrahedron.

**(a)** Show that the area of the triangular face $ABC$ of the tetrahedron is 108 to 3 significant figures. **(3)**

**(b)** Find the volume of the tetrahedron. **(4)**

An oak wood block is made in the shape of the tetrahedron, with centimetres taken for the units.

The density of oak is $0.85\text{ g cm}^{-3}$

**(c)** Determine the mass of the block, giving your answer in kg. **(2)**

**(Total for Question 4 is 9 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Find vectors $\vec{AB}$ and $\vec{AC}$** 

$$\vec{AB} = \vec{OB} - \vec{OA} = \begin{pmatrix} -7 \\ -5 \\ 3 \end{pmatrix} - \begin{pmatrix} 18 \\ -14 \\ -2 \end{pmatrix} = \begin{pmatrix} -25 \\ 9 \\ 5 \end{pmatrix}$$

$$\vec{AC} = \vec{OC} - \vec{OA} = \begin{pmatrix} -2 \\ -9 \\ -6 \end{pmatrix} - \begin{pmatrix} 18 \\ -14 \\ -2 \end{pmatrix} = \begin{pmatrix} -20 \\ 5 \\ -4 \end{pmatrix}$$

- **[M1]** Finds two correct edge vectors from $A$, e.g., $\vec{AB}$ and $\vec{AC}$.

**Step 2: Calculate the cross product $\vec{AB} \times \vec{AC}$** 

$$\vec{AB} \times \vec{AC} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ -25 & 9 & 5 \\ -20 & 5 & -4 \end{vmatrix} = \mathbf{i}(-36 - 25) - \mathbf{j}(100 - (-100)) + \mathbf{k}(-125 - (-180))$$

$$= \begin{pmatrix} -61 \\ -200 \\ 55 \end{pmatrix}$$

- **[M1]** Correctly computes the cross product of the two vectors.

**Step 3: Calculate the area of triangle $ABC$** 

$$\text{Area} = \frac{1}{2}|\vec{AB} \times \vec{AC}| = \frac{1}{2}\sqrt{(-61)^2 + (-200)^2 + 55^2} = \frac{1}{2}\sqrt{3721 + 40000 + 3025} = \frac{1}{2}\sqrt{46746} = 108.347...\approx 108$$

- **[A1]** Completes magnitude calculation to show area is 108 to 3 sig fig.

#### **Part (b)**

**Step 4: Use scalar triple product to find the volume of the tetrahedron** 

$$\text{Volume} = \frac{1}{6}|\vec{OA} \cdot (\vec{OB} \times \vec{OC})| \quad \text{or} \quad \frac{1}{6}|\vec{OA} \cdot (\vec{AB} \times \vec{AC})|$$

Using $\vec{OA} \cdot (\vec{AB} \times \vec{AC})$:

$$\begin{pmatrix} 18 \\ -14 \\ -2 \end{pmatrix} \cdot \begin{pmatrix} -61 \\ -200 \\ 55 \end{pmatrix} = 18(-61) + (-14)(-200) + (-2)(55)$$

$$= -1098 + 2800 - 110 = 1592$$

$$\text{Volume} = \frac{1}{6} |1592| = \frac{1592}{6} = 265.33...\text{ cm}^3$$

- **[M1]** States or uses the formula for the volume of a tetrahedron using vectors.
- **[M1]** Evaluates the scalar triple product correctly.
- **[A1]** Correct volume $\frac{796}{3}$ or $265.33...\text{ cm}^3$.

#### **Part (c)**

**Step 5: Calculate the mass in grams** 

$$\text{Mass} = \text{Volume} \times \text{Density} = \frac{796}{3} \times 0.85 = 225.533...\text{ g}$$

- **[M1]** Multiplies their volume by the density.

**Step 6: Convert to kilograms** 

$$\text{Mass in kg} = \frac{225.533}{1000} \approx 0.226\text{ kg}$$

- **[A1]** Correct mass in kg to 3 sig fig (awrt $0.226$).

---
topic: "Conic Sections 1"
subtopic: "Tangents and normals"
---
### **Question 5**

The point $P(ap^2, 2ap)$, where $a$ is a positive constant, lies on the parabola with equation

$$y^2 = 4ax$$

The normal to the parabola at $P$ meets the parabola again at the point $Q(aq^2, 2aq)$

**(a)** Show that 

$$q = \frac{-p^2 - 2}{p}$$ **(5)**

**(b)** Hence show that 

$$PQ^2 = \frac{ka^2}{p^4}(p^2 + 1)^n$$

where $k$ and $n$ are integers to be determined. **(5)**

**(Total for Question 5 is 10 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Find the derivative $\frac{dy}{dx}$ implicitly** 

$$2y\frac{dy}{dx} = 4a \Rightarrow \frac{dy}{dx} = \frac{4a}{2y} = \frac{2a}{y}$$

- **[M1]** Differentiates $y^2 = 4ax$ implicitly to find $\frac{dy}{dx}$.

**Step 2: Find the gradient of the normal at $P$** 

At $P(ap^2, 2ap)$, $y = 2ap$:
$$\text{Gradient of tangent} = \frac{2a}{2ap} = \frac{1}{p}$$
$$\text{Gradient of normal} = -p$$

- **[M1]** Finds the gradient of the normal at $P$.

**Step 3: Find the equation of the normal at $P$** 

$$y - 2ap = -p(x - ap^2)$$

$$y = -px + ap^3 + 2ap$$

- **[M1]** Finds the equation of the normal.

**Step 4: Substitute $Q(aq^2, 2aq)$ into the normal equation** 

$$2aq = -p(aq^2) + ap^3 + 2ap$$

- **[M1]** Substitutes the coordinates of $Q$ into the normal equation.

**Step 5: Solve for $q$** 

$$2a(q - p) = -pa(q^2 - p^2) = -pa(q - p)(q + p)$$

Since $P \neq Q$, we can divide by $a(q - p)$:
$$2 = -p(q + p) \Rightarrow 2 = -pq - p^2 \Rightarrow pq = -p^2 - 2 \Rightarrow q = \frac{-p^2 - 2}{p}$$

- **[A1]** Successfully manipulates and solves to derive the required expression for $q$.

#### **Part (b)**

**Step 6: Express $q - p$ in terms of $p$** 

$$q - p = \frac{-p^2 - 2}{p} - p = \frac{-p^2 - 2 - p^2}{p} = \frac{-2p^2 - 2}{p}$$

- **[M1]** Finds an expression for $q - p$.

**Step 7: Recall or set up the distance formula for $PQ^2$** 

For $P(ap^2, 2ap)$ and $Q(aq^2, 2aq)$:
$$PQ^2 = (aq^2 - ap^2)^2 + (2aq - 2ap)^2$$

$$PQ^2 = a^2(q^2 - p^2)^2 + 4a^2(q - p)^2$$

- **[M1]** States the formula for $PQ^2$ or substitutes coordinates into the distance squared formula.

**Step 8: Factor out $(q - p)^2$** 

$$PQ^2 = a^2(q - p)^2(q + p)^2 + 4a^2(q - p)^2 = a^2(q - p)^2\left[(q + p)^2 + 4\right]$$

- **[M1]** Factorises $(q - p)^2$ out of the expression.

**Step 9: Substitute expressions for $(q - p)$ and $(q + p)$ in terms of $p$** 

From $q = -p - \frac{2}{p}$, we have:
$$q + p = -\frac{2}{p}$$
$$q - p = -\frac{2p^2 + 2}{p} = -\frac{2(p^2 + 1)}{p}$$

Substitute into $PQ^2$:
$$PQ^2 = a^2\left(-\frac{2(p^2 + 1)}{p}\right)^2 \left[\left(-\frac{2}{p}\right)^2 + 4\right]$$

- **[M1]** Substitutes expressions for $(q-p)$ and $(q+p)$ into $PQ^2$.

**Step 10: Simplify to the required form and find $k$ and $n$** 

$$PQ^2 = a^2 \frac{4(p^2 + 1)^2}{p^2} \left[\frac{4}{p^2} + 4\right] = a^2 \frac{4(p^2 + 1)^2}{p^2} \left[\frac{4(1 + p^2)}{p^2}\right]$$

$$PQ^2 = \frac{16a^2(p^2 + 1)^3}{p^4}$$

Thus, $k = 16$ and $n = 3$.

- **[A1]** Correctly simplifies to $\frac{16a^2(p^2 + 1)^3}{p^4}$ (or states $k = 16, n = 3$).
