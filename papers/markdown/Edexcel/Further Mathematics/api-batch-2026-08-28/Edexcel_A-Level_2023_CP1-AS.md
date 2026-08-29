---
topic: "Matrices"
subtopic: "Introduction to matrices"
---
### **Question 1**

$$\begin{pmatrix} x & 9 \\ y & z \end{pmatrix} - 3\begin{pmatrix} z & y \\ z & y \end{pmatrix} = k\mathbf{I}$$

where $x, y, z$ and $k$ are constants.

Determine the value of $x$, the value of $y$ and the value of $z$. **(4)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Set up simultaneous equations by equating elements**
From the matrix equation, equating components:
$x - 3z = k$  (top left)
$9 - 3y = 0 \Rightarrow y = 3$  (top right)
$y - 3z = 0$  (bottom left)
$z - 3y = k$  (bottom right)

- **[M1]** Forms at least three correct equations by equating elements.

**Step 2: Solve for $y$ and $z$**
Using $y - 3z = 0$ and $y = 3$:
$$3 - 3z = 0 \Rightarrow z = 1$$

- **[A1]** Correct value for $y$ ($y = 3$) and correct value for $z$ ($z = 1$).

**Step 3: Solve for $k$**
Using $z - 3y = k$:
$$k = 1 - 3(3) = -8$$

**Step 4: Solve for $x$**
Using $x - 3z = k$:
$$x - 3(1) = -8 \Rightarrow x = -5$$

- **[A1]** Correct value for $x$ ($x = -5$).
- **[A1]** All three values correctly determined ($x = -5, y = 3, z = 1$).

### **Examiner Report 1**

The vast majority of candidates obtained, by equating positional elements, four equations connecting $x, y, z$ and $k$ and then solved them simultaneously to find the required values. A number of candidates did not use the value of $k$ and thus obtained the incorrect equations $x - 3z = 1$ and $z - 3y = 1$ resulting in a loss of marks. However, many candidates scored full marks on this question and found it a good start to the paper.

---
topic: "Complex Numbers"
subtopic: "Roots of quadratic equations"
---
### **Question 2**

$$\text{f}(z) = z^3 + az^2 + bz + 175 \quad \text{where } a \text{ and } b \text{ are real constants}$$

Given that $-3 + 4\text{i}$ is a root of the equation $\text{f}(z) = 0$

**(a)** determine the value of $a$ and the value of $b$. **(4)**

**(b)** Show all the roots of the equation $\text{f}(z) = 0$ on a single Argand diagram. **(2)**

**(c)** Write down the roots of the equation $\text{f}(z + 2) = 0$ **(1)**

**(Total 7 marks)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Use conjugate root theorem**
Since coefficients are real and $-3 + 4\text{i}$ is a root, $-3 - 4\text{i}$ is also a root.

- **[B1]** Identifies the complex conjugate $-3 - 4\text{i}$ as another root.

**Step 2: Form the quadratic factor**
Sum of complex roots = $(-3 + 4\text{i}) + (-3 - 4\text{i}) = -6$
Product of complex roots = $(-3 + 4\text{i})(-3 - 4\text{i}) = 9 + 16 = 25$
Quadratic factor is $z^2 + 6z + 25$.

- **[M1]** Uses the sum and product of the complex roots to find a quadratic factor, or substitutes $z = -3 + 4\text{i}$ into $\text{f}(z) = 0$ and equates real and imaginary parts.

**Step 3: Find the third root or equate coefficients**
Using $\text{f}(z) = (z^2 + 6z + 25)(z + k)$:
Constant term: $25k = 175 \Rightarrow k = 7$.
So the third root is $-7$.

- **[A1]** Correct third root, $z = -7$.

**Step 4: Find $a$ and $b$**
Expanding $(z^2 + 6z + 25)(z + 7) = z^3 + 13z^2 + 67z + 175$
Therefore, $a = 13$ and $b = 67$.

- **[A1]** Both $a = 13$ and $b = 67$ correctly found.

#### **Part (b)**

**Step 1: Plot roots on an Argand diagram**
Roots are $-3 + 4\text{i}$, $-3 - 4\text{i}$, and $-7$.

- **[M1]** Plots all three roots correctly on an Argand diagram (with $-3 \pm 4\text{i}$ symmetrical about the real axis and $-7$ on the negative real axis).
- **[A1]** Fully correct and clearly labelled Argand diagram.

#### **Part (c)**

**Step 2: Find the roots of $\text{f}(z + 2) = 0$**
Substitute $w = z + 2$, so the roots are the original roots minus $2$:
$(-3 + 4\text{i}) - 2 = -5 + 4\text{i}$
$(-3 - 4\text{i}) - 2 = -5 - 4\text{i}$
$-7 - 2 = -9$

- **[B1]** $-5 + 4\text{i}$, $-5 - 4\text{i}$, and $-9$ (or equivalent).

### **Examiner Report 2**

In part (a), much success was achieved in finding the values of $a$ and $b$ with the two main methods, namely forming a quadratic function using the two complex roots or the use of the sum and pair sum, being used equally by the cohort. Occasionally, Alternative 2 was seen but the inability to give the associated simultaneous equations in $a$ and $b$ resulted in a loss of marks. The error, in Alternative 1, in making the product of roots $= +175$ was seen quite often and thus produced incorrect values for $a$ and $b$.

In part (b), the majority of candidates correctly plotted the complex numbers $-3 + 4\text{i}$ and $-3 - 4\text{i}$. However, a significant minority, having obtained an incorrect real root, lost the 2nd B mark in this part.

In part (c), many candidates recognised the need to subtract 2 from the roots found previously but there were many candidates who incorrectly added 2 to the roots and thus lacked confidence in the transformation required in dealing with the function $\text{f}(z + 2)$.

---
topic: "Linear Transformations"
subtopic: "Reflections and rotations"
---
### **Question 3**

$$\mathbf{A} = \begin{pmatrix} 1 & 0 & 0 \\ 0 & -\frac{\sqrt{3}}{2} & \frac{1}{2} \\ 0 & \frac{1}{2} & \frac{\sqrt{3}}{2} \end{pmatrix}$$

**(a)** Describe fully the single geometric transformation $A$ represented by the matrix $\mathbf{A}$. **(2)**

$$\mathbf{B} = \begin{pmatrix} 1 & 3 & 0 \\ -\sqrt{3} & 0 & 5\sqrt{3} \\ 1 & 2 & 0 \end{pmatrix}$$

The transformation $B$ is represented by the matrix $\mathbf{B}$.
The transformation $A$ followed by the transformation $B$ is the transformation $C$, which is represented by the matrix $\mathbf{C}$.

To determine matrix $\mathbf{C}$, a student attempts the following matrix multiplication:

$$\begin{pmatrix} 1 & 0 & 0 \\ 0 & -\frac{\sqrt{3}}{2} & \frac{1}{2} \\ 0 & \frac{1}{2} & \frac{\sqrt{3}}{2} \end{pmatrix} \begin{pmatrix} 1 & 3 & 0 \\ -\sqrt{3} & 0 & 5\sqrt{3} \\ 1 & 2 & 0 \end{pmatrix}$$

**(b)** State the error made by the student. **(1)**

**(c)** Determine the correct matrix $\mathbf{C}$. **(1)**

**(Total 4 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Describe the transformation**
Rotation through an angle of $30^\circ$ (or $\frac{\pi}{6}$ radians) anticlockwise about the $x$-axis.

- **[B1]** Rotation about the $x$-axis (or $x$-direction).
- **[B1]** Angle of $30^\circ$ (or $\frac{\pi}{6}$) anticlockwise.

#### **Part (b)**

**Step 2: Identify the student's error**
The student has multiplied in the wrong order (calculated $\mathbf{A}\mathbf{B}$ instead of $\mathbf{B}\mathbf{A}$).

- **[B1]** States that the matrices are multiplied in the wrong order, or should be $\mathbf{B}\mathbf{A}$.

#### **Part (c)**

**Step 3: Calculate the correct matrix product $\mathbf{C} = \mathbf{B}\mathbf{A}$**

$$\mathbf{C} = \begin{pmatrix} 1 & 3 & 0 \\ -\sqrt{3} & 0 & 5\sqrt{3} \\ 1 & 2 & 0 \end{pmatrix} \begin{pmatrix} 1 & 0 & 0 \\ 0 & -\frac{\sqrt{3}}{2} & \frac{1}{2} \\ 0 & \frac{1}{2} & \frac{\sqrt{3}}{2} \end{pmatrix} = \begin{pmatrix} 1 & -\frac{3\sqrt{3}}{2} & \frac{3}{2} \\ --\dots & \dots & \dots \\ \dots & \dots & \dots \end{pmatrix}$$

Evaluating the matrix product gives:
$$\mathbf{C} = \begin{pmatrix} 1 & -\frac{3\sqrt{3}}{2} & \frac{3}{2} \\ -\sqrt{3} & \frac{5\sqrt{3}}{4} & \frac{13}{4} \\ 1 & -\sqrt{3} & 1 \end{pmatrix}$$

- **[B1]** Correct matrix $\mathbf{C}$.

### **Examiner Report 3**

Nearly all candidates made some attempt at this question.

In part (a), the first B mark was almost always given for rotation, most did also achieve the second B, though some added extra information e.g. 'around origin' or gave an incorrect description e.g. 'z-plane', '$x = 0$' so lost the second B mark.

In part (b), this was generally correct and explained using all examples in the scheme.

In part (c), many gained this mark. Where it was lost this was either due to occasional errors in multiplication or, more often, giving the answers to 3sf rather than exact figures as requested. A few just stated the matrices in the correct order but did not proceed to multiply.

---
topic: "Complex Numbers"
subtopic: "Exponential form of complex numbers"
---
### **Question 4**

**(i)** **(a)** Show that

$$\frac{2 + 3\text{i}}{5 + \text{i}} = k(1 + \text{i})$$

where $k$ is a constant to be determined.

(Solutions relying on calculator technology are not acceptable.) **(3)**

Given that
* $n$ is a positive integer
* $\left(\frac{2 + 3\text{i}}{5 + \text{i}}\right)^n$ is a real number

**(b)** use the answer to part (a) to write down the smallest possible value of $n$. **(1)**

**(ii)** The complex number $z = a + bi$ where $a$ and $b$ are real constants.

Given that
* $|z^{10}| = 59049$
* $\arg(z^{10}) = -\frac{5\pi}{3}$

determine the value of $a$ and the value of $b$. **(4)**

**(Total 8 marks)**

### **Mark Scheme 4**

#### **Part (i)**

**Step 1: Multiply numerator and denominator by the complex conjugate**
$$\frac{2 + 3\text{i}}{5 + \text{i}} \times \frac{5 - \text{i}}{5 - \text{i}} = \frac{(10 + 3) + (15 - 2)\text{i}}{5^2 + 1^2} = \frac{13 + 13\text{i}}{26}$$

- **[M1]** Multiplies numerator and denominator by $5 - \text{i}$.

**Step 2: Simplify and find $k$**
$$= \frac{1}{2}(1 + \text{i})$$
So $k = \frac{1}{2}$.

- **[A1]** Correct working leading to $\frac{1}{2}(1 + \text{i})$.
- **[A1]** Fully correct proof with $k = \frac{1}{2}$ explicitly stated.

#### **Part (i)(b)**

**Step 3: Determine the smallest positive integer $n$**
$$\left(\frac{2 + 3\text{i}}{5 + \text{i}}\right)^n = \left(\frac{1}{2}(1 + \text{i})\right)^n = \left(\frac{1}{\sqrt{2}}\text{e}^{\text{i}\frac{\pi}{4}}\right)^n = \frac{1}{2^{n/2}}\text{e}^{\text{i}\frac{n\pi}{4}}$$
For this to be real, $\frac{n\pi}{4}$ must be a multiple of $\pi$, so $n$ must be a multiple of $4$.
Smallest positive integer $n$ is $4$.

- **[B1]** $n = 4$.

#### **Part (ii)**

**Step 4: Use the modulus and argument of $z^{10}$**
$|z^{10}| = |z|^{10} = 59049 \Rightarrow |z| = \sqrt[10]{59049} = 3$.
$\arg(z^{10}) = 10\arg(z) = -\frac{5\pi}{3} + 2\pi k$
$\arg(z) = -\frac{5\pi}{30} + \frac{2\pi k}{10} = -\frac{\pi}{6} + \frac{k\pi}{5}$ for $k \in \mathbb{Z}$.
Principal argument for $z$: choosing $k = 1$, $\arg(z) = -\frac{\pi}{6} + \frac{\pi}{5} = \frac{\pi}{30}$? Wait, let's check standard domain $(-\pi, \pi]$ or $[0, 2\pi)$.
Since $\arg(z^{10}) = -\frac{5\pi}{3}$, $10\theta = -\frac{5\pi}{3} \Rightarrow \theta = -\frac{\pi}{6}$.
Alternatively, possible values of $\arg(z)$ are $-\frac{\pi}{6} + \frac{2k\pi}{10}$.

- **[M1]** Uses $|z| = \sqrt[10]{59049} = 3$ or $|z|^{10} = 59049$.
- **[M1]** Uses $10\arg(z) = -\frac{5\pi}{3}$ (or with $2k\pi$) to find $\arg(z) = -\frac{\pi}{6}$ (or other valid branch).

**Step 5: Calculate $a$ and $b$**
$z = |z|(\cos\theta + \text{i}\sin\theta) = 3\left(\cos\left(-\frac{\pi}{6}\right) + \text{i}\sin\left(-\frac{\pi}{6}\right)\right)$
$= 3\left(\frac{\sqrt{3}}{2} - \frac{1}{2}\text{i}\right) = \frac{3\sqrt{3}}{2} - \frac{3}{2}\text{i}$
So $a = \frac{3\sqrt{3}}{2}$ and $b = -\frac{3}{2}$.

- **[A1]** Correct value for $a$.
- **[A1]** Correct value for $b$.

### **Examiner Report 4**

This question enabled all students to access some part of the question whilst also providing challenge to the more able.

In (i) part (a), this was generally answered very well with the majority of candidates achieving full marks. The common errors that did occur were usually either the incorrect denominator $25 - \text{i}^2 = 24$ or students not giving the answer in the correct form. Occasionally we saw some state the correct answer but without the working to demonstrate their understanding and thus, lost marks.

In (i) part (b), most candidates realised that they could use trial and error, there were lots of students who calculated this by hand instead of using the calculator. Frequent incorrect answers were $n = 0$ which almost satisfies the demand of the question except it is not a positive integer, or $n = 2$.

In (ii) This proved a very challenging question for most students. Many blank or no scoring attempts were seen however a good number of students were able to gain the first mark from either $|z| = 3$ or $a^2 + b^2 = 9$ and whilst it was certainly less common for them to be able to deal with the argument correctly some did go on to achieve the second M for a valid attempt to find the complex number, with an incorrect argument generally leading to $a = \frac{3}{2}$ and $b = \frac{3\sqrt{3}}{2}$. For those who did manage to correctly identify the modulus and argument they nearly always went on to achieve a correct answer, with the occasional loss of sign on the real part. Other incorrect attempts involved attempts at expanding $z^{10} = (a + bi)^{10}$.

---
topic: "Integration"
subtopic: "Volumes of revolution around the y-axis"
---
### **Question 5**

In this question you must show all stages of your working.
Solutions relying on calculator technology are not acceptable.

**Figure 1** _(A sketch of a central vertical cross-section of the concrete waste pile, showing a symmetric mound rising from the x-axis)._
**Figure 2** _(A sketch of the region R in the first quadrant bounded by the curve C, the y-axis, and the x-axis)._

A large pile of concrete waste is created on a building site.
Figure 1 shows a central vertical cross-section of the concrete waste.
The curve $C$, shown in Figure 2, has equation

$$y + x^2 = 2, \quad 0 \le x \le \sqrt{2}$$

The region $R$, shown shaded in Figure 2, is bounded by the $y$-axis, the $x$-axis and the curve $C$.
The volume of concrete waste is modelled by the volume of revolution formed when $R$ is rotated through $360^\circ$ about the $y$-axis. The units are metres.
The density of the concrete waste is $900\text{ kgm}^{-3}$.

**(a)** Use the model to estimate the mass of the concrete waste. Give your answer to 2 significant figures. **(6)**

**(b)** Give a limitation of the model. **(1)**

**(c)** Use this information and your answer to part (a) to evaluate the model, giving a reason for your answer. **(1)**

**(Total 8 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Set up the volume integral about the $y$-axis**
$x^2 = 2 - y$.
Limits for $y$: when $x = 0$, $y = 2$; when $x = \sqrt{2}$, $y = 0$.
$$V = \pi \int_{0}^{2} x^2 \, \text{d}y = \pi \int_{0}^{2} (2 - y) \, \text{d}y$$

- **[M1]** Uses the correct volume formula $V = \pi \int x^2 \, \text{d}y$ (or $\int y^2 \, \text{d}x$ with appropriate limits subtraction if needed).
- **[A1]** Correct integrand $(2 - y)$ and correct limits $0$ to $2$.

**Step 2: Evaluate the integral**
$$\int_{0}^{2} (2 - y) \, \text{d}y = \left[ 2y - \frac{y^2}{2} \right]_{0}^{2} = (4 - 2) - (0) = 2$$
$$V = 2\pi\text{ m}^3$$

- **[M1]** Successfully integrates to obtain $2\pi$ (or equivalent correct evaluation).

**Step 3: Calculate the mass**
$$\text{Mass} = \text{Volume} \times \text{Density} = 2\pi \times 900 = 1800\pi \approx 5654.8\text{ kg}$$

- **[M1]** Multiplies volume by density ($900$).

**Step 4: Round to 2 significant figures**
$$\text{Mass} = 5700\text{ kg}$$

- **[A1]** Correct mass $5700$ (or $5.7 \times 10^3$).

#### **Part (b)**

**Step 5: State a limitation**
Concrete waste might not be uniformly dense / the shape may not be perfectly symmetrical / gaps/air pockets in the pile.

- **[B1]** Any valid limitation (e.g., waste is not uniformly dense, or the pile is not a perfect solid of revolution).

#### **Part (c)**

**Step 6: Evaluate the model**
The model is quite good/reasonable as the estimated mass ($5700\text{ kg}$) is close to the actual mass ($5500\text{ kg}$) (error around $3.6\%$).

- **[B1]** Evaluates the model by comparing $5700\text{ kg}$ with $5500\text{ kg}$ (stating it is a good model / close approximation).

### **Examiner Report 5**

In part (a), the majority of candidates used the correct volume of revolution formula, taken around the $y$-axis, to set up and process the associated integration. The main errors seem in this part were either the use of an incorrect upper limit on the integration, usually $\sqrt{2}$, or taking the revolution around the $x$-axis. However, many of the cohort obtained the correct mass of $5700\text{ kg}$.

In parts (b) and (c), many of the candidates gave valid comments relating to the limitation and evaluation of the model and thus obtained the two available marks. Any marks lost here were mainly due to references to density or an incorrect calculation of errors.

---
topic: "Vectors"
subtopic: "Straight lines"
---
### **Question 6**

The line $l_1$ has equation $\mathbf{r} = \begin{pmatrix} -2 \\ 2 \\ 0 \end{pmatrix} + \lambda \begin{pmatrix} 3 \\ 0 \\ 1 \end{pmatrix}$ where $\lambda$ is a scalar parameter.

The line $l_2$ is parallel to $\begin{pmatrix} 1 \\ 2 \\ -3 \end{pmatrix}$

**(a)** Show that $l_1$ and $l_2$ are perpendicular. **(2)**

The plane $\Pi$ contains the line $l_1$ and is perpendicular to $\begin{pmatrix} 1 \\ 2 \\ -3 \end{pmatrix}$

**(b)** Determine a Cartesian equation of $\Pi$ **(2)**

**(c)** Verify that the point $A(3, 1, 1)$ lies on $\Pi$ **(1)**

Given that
* the point of intersection of $\Pi$ and $l_2$ has coordinates $(2, 3, 2)$
* the point $B(p, q, r)$ lies on $l_2$
* the distance $AB$ is $2\sqrt{5}$
* $p, q$ and $r$ are positive integers

**(d)** determine the coordinates of $B$. **(6)**

**(Total 11 marks)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Compute the dot product of the direction vectors**
Direction vector of $l_1$ is $\mathbf{d}_1 = \begin{pmatrix} 3 \\ 0 \\ 1 \end{pmatrix}$, direction vector of $l_2$ is $\mathbf{d}_2 = \begin{pmatrix} 1 \\ 2 \\ -3 \end{pmatrix}$.
$$\mathbf{d}_1 \cdot \mathbf{d}_2 = (3)(1) + (0)(2) + (1)(-3) = 3 + 0 - 3 = 0$$

- **[M1]** Attempts the scalar product of the two direction vectors.
- **[A1]** Obtains $0$ and concludes that the lines are perpendicular.

#### **Part (b)**

**Step 2: Find the Cartesian equation of $\Pi$**
Normal vector to $\Pi$ is $\mathbf{n} = \begin{pmatrix} 1 \\ 2 \\ -3 \end{pmatrix}$.
Equation of plane: $1x + 2y - 3z = d$.
Since $\Pi$ contains $l_1$, take a point on $l_1$, e.g., $(-2, 2, 0)$:
$d = 1(-2) + 2(2) - 3(0) = -2 + 4 = 2$.
Cartesian equation: $x + 2y - 3z = 2$ (or $x + 2y - 3z - 2 = 0$).

- **[M1]** Uses the normal vector and a point on $l_1$ to find the constant $d$.
- **[A1]** Correct Cartesian equation ($x + 2y - 3z = 2$).

#### **Part (c)**

**Step 3: Verify point $A(3, 1, 1)$ lies on $\Pi$**
Substitute $x = 3, y = 1, z = 1$ into $x + 2y - 3z$:
$$3 + 2(1) - 3(1) = 3 + 2 - 3 = 2$$
Since $2 = 2$, point $A$ lies on $\Pi$.

- **[B1]** Substitutes coordinates into the equation and shows it holds true.

#### **Part (d)**

**Step 4: Find the equation of line $l_2$ and point $B$**
Line $l_2$ passes through $(2, 3, 2)$ with direction $\begin{pmatrix} 1 \\ 2 \\ -3 \end{pmatrix}$:
$$\mathbf{r}_2 = \begin{pmatrix} 2 \\ 3 \\ 2 \end{pmatrix} + \mu \begin{pmatrix} 1 \\ 2 \\ -3 \end{pmatrix} = \begin{pmatrix} 2 + \mu \\ 3 + 2\mu \\ 2 - 3\mu \end{pmatrix}$$
Point $B$ has coordinates $(2 + \mu, 3 + 2\mu, 2 - 3\mu) = (p, q, r)$.

- **[M1]** Sets up the general point $B$ on $l_2$ in terms of a parameter $\mu$.

**Step 5: Use the distance $AB = 2\sqrt{5}$**
$A = (3, 1, 1)$.
$$AB^2 = (2 + \mu - 3)^2 + (3 + 2\mu - 1)^2 + (2 - 3\mu - 1)^2 = (2\sqrt{5})^2 = 20$$
$$(\mu - 1)^2 + (2\mu + 2)^2 + (-3\mu + 1)^2 = 20$$

- **[M1]** Forms an expression for $AB^2$ or $AB$ in terms of the parameter.

**Step 6: Expand and solve the quadratic equation**
$$(\mu^2 - 2\mu + 1) + (4\mu^2 + 8\mu + 4) + (9\mu^2 - 6\mu + 1) = 20$$
$$14\mu^2 + 6 = 20 \Rightarrow 14\mu^2 = 14 \Rightarrow \mu^2 = 1 \Rightarrow \mu = \pm 1$$

- **[M1]** Simplifies to a quadratic equation in $\mu$ and solves for $\mu$.

**Step 7: Find coordinates for both possible values of $\mu$**
If $\mu = 1$:
$B = (2 + 1, 3 + 2(1), 2 - 3(1)) = (3, 5, -1)$ — but $p, q, r$ must be positive integers, so reject.
If $\mu = -1$:
$B = (2 - 1, 3 + 2(-1), 2 - 3(-1)) = (1, 1, 5)$ — all coordinates are positive integers ($1, 1, 5$).

- **[A1]** Selects $\mu = -1$ (or rejects $\mu = 1$).
- **[A1]** Correct coordinates of $B$: $(1, 1, 5)$.

### **Examiner Report 6**

This was another good question with the first three parts being accessed by the majority with part (d) providing a good level of challenge.

In part (a), this was generally well answered with most candidates using the dot product. They were able to show the answer was equal to zero, although a minority of candidates failed to conclude that the lines were perpendicular or in fact incorrectly concluded parallel. Some failed to show full use of dot product, instead just stating $= 0$ and therefore gained no marks despite correct conclusion.

In part (b), this part was also well answered although some candidates left their answer as a scalar equation, other errors were to attempt the Cartesian equation of a line. Those who proceeded to a cartesian equation most likely did so correctly with either achieving $x + 2y - 3z = 2$ or $x + 2y - 3z - 2 = 0$.

In part (c), those who obtained both marks in (b) typically also obtained the mark here, it was pleasing to see that most gave a minimal conclusion, though that was not necessary for this mark.

In part (d), this part was less well answered. Several candidates obtained the first mark for finding the coordinates of $B$ but were unable to then use the distance between points in terms of their parameter. There were several numerical errors which led to an incorrect quadratic equation. It was very common for candidates to only find the positive root of their quadratic equation and therefore find the wrong coordinate. Some candidates used the Alternative approach finding the length of $AX$ then $XB$. They were not always certain how to then proceed and compare to find $\mu$. For those successful candidates the main scheme proved most popular, occasionally candidates rewrote their three expressions in terms of $p$ in place of $\mu$ which proved to be equally as effective.

---
topic: "Argand Diagrams"
subtopic: "Loci in the Argand diagram"
---
### **Question 7**

**(i)** Shade, on an Argand diagram, the set of points for which

$$|z - 3| \le |z + 6\text{i}|$$

**(3)**

**(ii)** Determine the exact complex number $w$ which satisfies both

$$\arg(w - 2) = \frac{\pi}{3} \quad \text{and} \quad \arg(w + 1) = \frac{\pi}{6}$$

**(6)**

**(Total 9 marks)**

### **Mark Scheme 7**

#### **Part (i)**

**Step 1: Identify the boundary line**
The boundary is the perpendicular bisector of the line joining $3$ (i.e., $(3, 0)$) and $-6\text{i}$ (i.e., $(0, -6)$).
Midpoint is $\left(\frac{3}{2}, -3\right)$.
Gradient of joining line is $\frac{0 - (-6)}{3 - 0} = 2$, so perpendicular gradient is $-\frac{1}{2}$.
Equation of boundary line: $y + 3 = -\frac{1}{2}\left(x - \frac{3}{2}\right)$.

- **[M1]** Identifies the boundary as the perpendicular bisector between $(3, 0)$ and $(0, -6)$.

**Step 2: Draw the line and shade the correct region**
Line passes through $(3, 0)$ and $(0, -6)$? Let's check: distance from $(3,0)$ to $(0,-6)$ is $\sqrt{9+36} = \sqrt{45}$.
Boundary line drawn correctly passing through intercepts or midpoint with correct gradient.
Shading is on the side containing $3$ (since $|z - 3| \le |z + 6\text{i}|$ means points closer to $3$).

- **[A1]** Correct boundary line drawn.
- **[A1]** Correct region shaded.

#### **Part (ii)**

**Step 3: Form equations for the lines corresponding to the arguments**
Let $w = x + iy$.
$\arg(w - 2) = \frac{\pi}{3} \Rightarrow \frac{y}{x - 2} = \tan\left(\frac{\pi}{3}\right) = \sqrt{3}$ (for $x > 2$).
So, $y = \sqrt{3}(x - 2)$.

- **[M1]** Translates $\arg(w - 2) = \frac{\pi}{3}$ into a linear equation or relation between real and imaginary parts.

$\arg(w + 1) = \frac{\pi}{6} \Rightarrow \frac{y}{x + 1} = \tan\left(\frac{\pi}{6}\right) = \frac{1}{\sqrt{3}}$ (for $x > -1$).
So, $y = \frac{1}{\sqrt{3}}(x + 1)$.

- **[M1]** Translates $\arg(w + 1) = \frac{\pi}{6}$ into a linear equation or relation.

**Step 4: Solve simultaneously**
$$\sqrt{3}(x - 2) = \frac{1}{\sqrt{3}}(x + 1)$$
Multiply by $\sqrt{3}$:
$$3(x - 2) = x + 1$$
$$3x - 6 = x + 1 \Rightarrow 2x = 7 \Rightarrow x = \frac{7}{2}$$

- **[M1]** Equates the expressions for $y$ and solves for $x$.
- **[A1]** Correct real part $x = \frac{7}{2}$.

**Step 5: Find the imaginary part $y$**
$$y = \sqrt{3}\left(\frac{7}{2} - 2\right) = \sqrt{3}\left(\frac{3}{2}\right) = \frac{3\sqrt{3}}{2}$$

- **[A1]** Correct imaginary part $y = \frac{3\sqrt{3}}{2}$.

**Step 6: State the exact complex number $w$**
$$w = \frac{7}{2} + \frac{3\sqrt{3}}{2}\text{i}$$

- **[A1]** Correct exact complex number $w$.

### **Examiner Report 7**

In part (a), the first part of this question was well done overall, with the best solutions coming from candidates who drew a scale drawing of the perpendicular bisector required. It was necessary for equal scales on both axes to ensure that the $y$-intercept was negative. Quite a few went to the trouble of calculating the exact equation of the line and then drew it correctly, not required for the marks in this case. Shading the correct side of the line caused a few more difficulties with some not knowing how to decide which side to shade. Occasionally the shading was bounded which cost them the final mark.

In part (b), using the argument to find the gradient of each line proved quite challenging for some in this part of the question. If the correct Cartesian equations of both lines were found, then a correct solution for $w$ usually followed. M0A0A0M1M1A0 was a fairly common mark trait as the demand of the final Ms was simply simultaneously equating their two lines and solving to reach $w$. Some very good diagrams allowed some candidates to use basic trigonometry to reach the correct complex number from a very neat geometric approach, although this was not seen often it was usually correct providing the real length had been dealt with correctly. It is clear that not all students have a sound enough understanding of what the argument of a complex number actually represents.

---
topic: "Series"
subtopic: "Sums of squares and cubes"
---
### **Question 8**

**(a)** Use the standard results for $\sum_{r=1}^{n} r^2$ and $\sum_{r=1}^{n} r$ to show that, for all positive integers $n$,

$$\sum_{r=1}^{n} (2r - 1)^2 = \frac{n}{3}(an^2 - 1)$$

where $a$ is a constant to be determined. **(5)**

**(b)** Hence determine the sum of the squares of all positive odd three-digit integers. **(3)**

**(Total 8 marks)**

### **Mark Scheme 8**

#### **Part (a)**

**Step 1: Expand the general term**
$$(2r - 1)^2 = 4r^2 - 4r + 1$$

- **[B1]** Correct expansion of $(2r - 1)^2$.

**Step 2: Apply summation and standard formulae**
$$\sum_{r=1}^{n} (2r - 1)^2 = 4\sum_{r=1}^{n} r^2 - 4\sum_{r=1}^{n} r + \sum_{r=1}^{n} 1$$
$$= 4\left[\frac{1}{6}n(n+1)(2n+1)\right] - 4\left[\frac{1}{2}n(n+1)\right] + n$$

- **[M1]** Substitutes standard summation formulae for $\sum r^2$ and $\sum r$.

**Step 3: Simplify the expression**
$$= \frac{2}{3}n(n+1)(2n+1) - 2n(n+1) + n$$
$$= \frac{n}{3} \big[ 2(n+1)(2n+1) - 6(n+1) + 3 \big]$$
$$= \frac{n}{3} \big[ 2(2n^2 + 3n + 1) - 6n - 6 + 3 \big]$$
$$= \frac{n}{3} \big[ 4n^2 + 6n + 2 - 6n - 3 \big] = \frac{n}{3}(4n^2 - 1)$$

- **[M1]** Factorises out $\frac{n}{3}$ or puts over a common denominator.
- **[A1]** Obtains $\frac{n}{3}(4n^2 - 1)$ with clear algebraic steps.
- **[A1]** States $a = 4$ clearly.

#### **Part (b)**

**Step 1: Identify the correct limits for odd three-digit integers**
Positive odd three-digit integers start at $101$ ($2r - 1 = 101 \Rightarrow r = 51$) and end at $999$ ($2r - 1 = 999 \Rightarrow r = 500$).
We need $\sum_{r=51}^{500} (2r - 1)^2 = \sum_{r=1}^{500} (2r - 1)^2 - \sum_{r=1}^{50} (2r - 1)^2$.

- **[M1]** Identifies upper limit $500$ and lower limit $51$ (or sets up the difference of two sums).

**Step 2: Calculate the sums using the formula from part (a)**
For $n = 500$:
$$\text{Sum}_{500} = \frac{500}{3}(4(500)^2 - 1) = \frac{500}{3}(1000000 - 1) = \frac{500}{3}(999999) = 500 \times 333333 = 166666500$$

For $n = 50$:
$$\text{Sum}_{50} = \frac{50}{3}(4(50)^2 - 1) = \frac{50}{3}(10000 - 1) = \frac{50}{3}(9999) = 50 \times 3333 = 166650$$

- **[M1]** Evaluates the formula for $n = 500$ and $n = 50$.

**Step 3: Subtract to find the required sum**
$$\text{Required Sum} = 166666500 - 166650 = 166499850$$

- **[A1]** Correct final sum: $166\,499\,850$.

### **Examiner Report 8**

In part (a), a standard question that was very well answered though there were some unavoidable errors when expanding $(2r - 1)^2$, most frequently with the $r^2$ term. The majority of candidates knew their sum formulae and where there was an error it was generally incorrectly stating $\sum_{r=1}^{n} 1 = 1$ which resulted in the last 3 marks being lost. It was pleasing to see that there were very few mistakes in the algebra and even more pleasing to see that those candidates that did make errors and corrected themselves generally knew to do so on all lines of their working so as not to lose the final A.

In part (b), this was a more challenging question, due to the necessity to realise that they had the sum of $n$ odd integers already, so the limits had to be considered with more care. Still, a good number of candidates got it right. The mistakes with the limits were mainly of 2 types:
1 - limits at 101 and 999 - they could gain the method mark here as long as they split their sum correctly into $\sum_{r=1}^{999} (2r - 1)^2 - \sum_{r=1}^{100} (2r - 1)^2$.
2 - attempt at halving the number of three digit numbers and using this at the top limit.
Further to the struggle with limits there were a few blank scripts on this part of the question and others thought about the limits but then failed to use part (a).

---
topic: "Matrices"
subtopic: "Determinants"
---
### **Question 9**

**(i)** 

$$\mathbf{P} = \begin{pmatrix} k & -2 & 7 \\ -3 & -5 & 2 \\ k & k & 4 \end{pmatrix} \quad \text{where } k \text{ is a constant}$$

Show that $\mathbf{P}$ is non-singular for all real values of $k$. **(4)**

**(ii)** 

$$\mathbf{Q} = \begin{pmatrix} 2 & -1 \\ -3 & 0 \end{pmatrix}$$

The matrix $\mathbf{Q}$ represents a linear transformation $T$.
Under $T$, the point $A(a, 2)$ and the point $B(4, -a)$, where $a$ is a constant, are transformed to the points $A'$ and $B'$ respectively.
Given that the distance $A'B'$ is $\sqrt{58}$, determine the possible values of $a$. **(5)**

**(Total 9 marks)**

### **Mark Scheme 9**

#### **Part (i)**

**Step 1: Calculate the determinant of $\mathbf{P}$**
$$\det(\mathbf{P}) = k \begin{vmatrix} -5 & 2 \\ k & 4 \end{vmatrix} - (-2) \begin{vmatrix} -3 & 2 \\ k & 4 \end{vmatrix} + 7 \begin{vmatrix} -3 & -5 \\ k & k \end{vmatrix}$$
$$= k(-20 - 2k) + 2(-12 - 2k) + 7(-3k - (-5k))$$
$$= -20k - 2k^2 - 24 - 4k + 7(2k)$$
$$= -2k^2 - 24k - 24 + 14k = -2k^2 - 10k - 24$$
Wait, let's re-evaluate carefully:
$k(-20 - 2k) + 2(-12 - 2k) + 7(-3k - (-5k))$
$= -20k - 2k^2 - 24 - 4k + 7(2k) = -2k^2 - 24k - 24 + 14k$ ? Wait:
$-3k - (-5k) = 2k$. $7(2k) = 14k$.
$-20k - 4k + 14k = -10k$.
So $\det(\mathbf{P}) = -2k^2 - 10k - 24$.
Let's check the determinant expansion again:
$= k(-20 - 2k) + 2(-12 - 2k) + 7(-3k - (-5k))$
$= -20k - 2k^2 - 24 - 4k + 14k = -2k^2 - 10k - 24$.

- **[M1]** Attempts to expand the determinant along any row or column.
- **[A1]** Correct expression for $\det(\mathbf{P})$ (e.g., $-2k^2 - 10k - 24$).

**Step 2: Show the determinant is never zero for real $k$**
Complete the square or use the discriminant:
Discriminant $b^2 - 4ac = (-10)^2 - 4(-2)(-24) = 100 - 192 = -92 < 0$.
Since the discriminant is negative and the coefficient of $k^2$ is negative, $-2k^2 - 10k - 24 < 0$ for all real $k$.
Alternatively, $-2(k^2 + 5k + 12) = -2\left(\left(k + \frac{5}{2}\right)^2 + \frac{23}{4}\right) < 0$ for all real $k$.
Thus $\det(\mathbf{P}) \neq 0$ for all real $k$, so $\mathbf{P}$ is non-singular.

- **[M1]** Attempts to find the discriminant or complete the square on the quadratic in $k$.
- **[A1]** Concludes validly (discriminant $<0$ or completed square strictly negative) and states $\mathbf{P}$ is non-singular for all real $k$.

#### **Part (ii)**

**Step 3: Find the coordinates of $A'$ and $B'$**
$$\mathbf{A}' = \begin{pmatrix} 2 & -1 \\ -3 & 0 \end{pmatrix} \begin{pmatrix} a \\ 2 \end{pmatrix} = \begin{pmatrix} 2a - 2 \\ -3a \end{pmatrix}$$
$$\mathbf{B}' = \begin{pmatrix} 2 & -1 \\ -3 & 0 \end{pmatrix} \begin{pmatrix} 4 \\ -a \end{pmatrix} = \begin{pmatrix} 8 + a \\ -12 \end{pmatrix}$$

- **[M1]** Applies matrix $\mathbf{Q}$ to point $A$ and point $B$ to find their image coordinates.
- **[A1]** Correct coordinates for $A'$ and $B'$.

**Step 4: Use the distance formula between $A'$ and $B'$**
Distance $A'B' = \sqrt{58}$, so $A'B'^2 = 58$.
$$(8 + a - (2a - 2))^2 + (-12 - (-3a))^2 = 58$$
$$(10 - a)^2 + (3a - 12)^2 = 58$$

- **[M1]** Sets up the distance squared equation equal to $58$.

**Step 5: Expand and solve for $a$**
$$(100 - 20a + a^2) + (9a^2 - 72a + 144) = 58$$
$$10a^2 - 92a + 244 = 58$$
$$10a^2 - 92a + 186 = 0$$
Dividing by $2$:
$$5a^2 - 46a + 93 = 0$$

- **[M1]** Expands and simplifies to a quadratic equation in $a$.

Using the quadratic formula:
$$a = \frac{46 \pm \sqrt{(-46)^2 - 4(5)(93)}}{2(5)} = \frac{46 \pm \sqrt{2116 - 1860}}{10} = \frac{46 \pm \sqrt{256}}{10} = \frac{46 \pm 16}{10}$$
$a_1 = \frac{62}{10} = \frac{31}{5}$ (or $6.2$)
$a_2 = \frac{30}{10} = 3$

- **[A1]** Both possible values of $a$ correctly determined ($a = 3, \frac{31}{5}$).

### **Examiner Report 9**

In part (i), the vast majority of the candidates expanded along the first row to find the determinant of the matrix $\mathbf{P}$ and much success was achieved. The most common error was not applying the change of sign rule which resulted in the loss of the first two marks at least. For those responses that had found the correct determinant, the proof of the non-singularity of $\mathbf{P}$ proved demanding and although the use of either the discriminant or completing the square were well identified methods, many solutions did not include all of the necessary details and thus fully complete solutions did not often appear. This is a show question and candidates are reminded that they do need to show the reasoning clearly. Just saying no real roots is insufficient they need to show why it has no real roots.

In part (ii), the vast majority of the candidates correctly found the coordinates of $A'$ and $B'$ and then equated the distance between them to $\sqrt{58}$ to form the required quadratic equation. The occasional sign error or incorrect expansions were the main reasons here as to why marks were lost but much success was achieved in this part and many of the cohort scored full marks.

---
topic: "Roots of Polynomials"
subtopic: "Roots of a quartic equation"
---
### **Question 10**

In this question you must show all stages of your working.
Solutions relying on calculator technology are not acceptable.

**(i)** The quartic equation

$$z^4 + 5z^2 - 30 = 0$$

has roots $p, q, r$ and $s$.
Without solving the equation, determine the quartic equation whose roots are $(3p - 1), (3q - 1), (3r - 1)$ and $(3s - 1)$.
Give your answer in the form $w^4 + aw^3 + bw^2 + cw + d = 0$, where $a, b, c$ and $d$ are integers to be found. **(5)**

**(ii)** The roots of the cubic equation

$$4x^3 + nx + 81 = 0 \quad \text{where } n \text{ is a real constant}$$

are $\alpha, 2\alpha$ and $\alpha - \beta$.
Determine

**(a)** the values of the roots of the equation, **(5)**

**(b)** the value of $n$. **(2)**

**(Total 12 marks)**

### **Mark Scheme 10**

#### **Part (i)**

**Step 1: Relate $w$ and $z$**
Let $w = 3z - 1$, so $z = \frac{w + 1}{3}$.

- **[M1]** Substitutes $z = \frac{w + 1}{3}$ into the given equation.

**Step 2: Substitute into the quartic equation**
$$\left(\frac{w + 1}{3}\right)^4 + 5\left(\frac{w + 1}{3}\right)^2 - 30 = 0$$
$$\frac{(w + 1)^4}{81} + \frac{5(w + 1)^2}{9} - 30 = 0$$

- **[M1]** Expands or simplifies powers of $\frac{w + 1}{3}$.

**Step 3: Multiply through by $81$**
$$(w + 1)^4 + 45(w + 1)^2 - 2430 = 0$$

- **[M1]** Eliminates fractions by multiplying by $81$.

**Step 4: Expand the brackets**
$$(w^4 + 4w^3 + 6w^2 + 4w + 1) + 45(w^2 + 2w + 1) - 2430 = 0$$
$$w^4 + 4w^3 + 6w^2 + 4w + 1 + 45w^2 + 90w + 45 - 2430 = 0$$
$$w^4 + 4w^3 + 51w^2 + 94w - 2384 = 0$$

- **[A1]** Correct expanded coefficients.
- **[A1]** Fully correct equation in the requested form.

#### **Part (ii)(a)**

**Step 1: Use the sum of the roots**
Roots are $\alpha, 2\alpha, \alpha - \beta$.
Sum of roots = $\alpha + 2\alpha + (\alpha - \beta) = 4\alpha - \beta$.
From $4x^3 + nx + 81 = 0$, dividing by $4$: $x^3 + \frac{n}{4}x + \frac{81}{4} = 0$.
Coefficient of $x^2$ is $0$, so sum of roots = $0$.
$$4\alpha - \beta = 0 \Rightarrow \beta = 4\alpha$$

- **[M1]** Uses sum of roots = $0$ to relate $\alpha$ and $\beta$.

**Step 2: Use the product of the roots**
Product of roots = $\alpha(2\alpha)(\alpha - \beta) = -\frac{81}{4}$.
Substitute $\beta = 4\alpha$:
$$2\alpha^2(\alpha - 4\alpha) = -\frac{81}{4}$$
$$2\alpha^2(-3\alpha) = -\frac{81}{4}$$
$$-6\alpha^3 = -\frac{81}{4} \Rightarrow \alpha^3 = \frac{81}{24} = \frac{27}{8}$$
$$\alpha = \frac{3}{2}$$

- **[M1]** Uses product of roots $= -\frac{81}{4}$ (or $\frac{81}{4}$ depending on sign convention check).
- **[A1]** Correct value for $\alpha$ ($\frac{3}{2}$).

**Step 3: Find all three roots**
$\alpha = \frac{3}{2}$
$2\alpha = 2\left(\frac{3}{2}\right) = 3$
$\alpha - \beta = \alpha - 4\alpha = -3\alpha = -3\left(\frac{3}{2}\right) = -\frac{9}{2}$

- **[A1]** All three roots correctly found ($\frac{3}{2}, 3, -\frac{9}{2}$).

#### **Part (ii)(b)**

**Step 4: Find the value of $n$ using the sum of products in pairs**
Sum of products in pairs = $\alpha(2\alpha) + \alpha(\alpha - \beta) + 2\alpha(\alpha - \beta) = 2\alpha^2 + 3\alpha(\alpha - \beta)$.
Substitute $\beta = 4\alpha$:
$$= 2\alpha^2 + 3\alpha(-3\alpha) = 2\alpha^2 - 9\alpha^2 = -7\alpha^2$$
From the cubic equation $x^3 + \frac{n}{4}x + \frac{81}{4} = 0$, the sum of products in pairs is equal to $\frac{n}{4}$.
$$\frac{n}{4} = -7\alpha^2$$
Substitute $\alpha = \frac{3}{2}$:
$$\frac{n}{4} = -7\left(\frac{3}{2}\right)^2 = -7\left(\frac{9}{4}\right) = -\frac{63}{4}$$
$$n = -63$$

- **[M1]** Uses sum of products in pairs to set up an equation for $n$.
- **[A1]** Correct value for $n$ ($n = -63$).

### **Examiner Report 10**

In part (i), the vast majority of the candidates correctly expressed $z$ as a function of $w$ and then substituted it into the given quartic equation. In general the expansions of $\left(\frac{w + 1}{3}\right)^4$ and $\left(\frac{w + 1}{3}\right)^3$ were handled well and the most common error was not multiplying the $-30$ term by $81$ when rearranging the equation into the requested form.

In part (ii), many of the candidates were able to form the two required equations in $\alpha$ and $\beta$ using the sum and product of the roots of the given equation and then went on to solve for $\alpha$ and $\beta$. The equating of the product of roots to $+\frac{81}{4}$ instead of $-\frac{81}{4}$ was a fairly common error but was condoned for the method mark. The way in which the given roots were labelled did cause confusion with some of the cohort with the root $2\alpha$ being incorrectly taken as $\beta$, presumably from the fact that students often think of the three roots as being labelled $\alpha, \beta$ and $\gamma$.
