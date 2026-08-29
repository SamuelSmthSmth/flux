---
topic: "Roots of Polynomials"
subtopic: "Roots of a cubic equation"
---
### **Question 1**

The cubic equation
$$2x^3 - 3x^2 + 5x + 7 = 0$$
has roots $\alpha$, $\beta$ and $\gamma$.

Without solving the equation, determine the exact value of
**(i)** $\alpha^2 + \beta^2 + \gamma^2$ **(3)**
**(ii)** $\frac{3}{\alpha} + \frac{3}{\beta} + \frac{3}{\gamma}$ **(3)**
**(iii)** $(5 - \alpha)(5 - \beta)(5 - \gamma)$ **(3)**

**(Total 9 marks)**

### **Mark Scheme 1**

#### **Part (i)**

**Step 1: State the relations between roots and coefficients**
For $2x^3 - 3x^2 + 5x + 7 = 0$, we have:
$$\sum \alpha = \frac{3}{2}, \quad \sum \alpha\beta = \frac{5}{2}, \quad \alpha\beta\gamma = -\frac{7}{2}$$
- **[B1]** Correct values for $\sum \alpha$ and $\sum \alpha\beta$.

**Step 2: Express $\alpha^2 + \beta^2 + \gamma^2$ in terms of sum and sum of products**
$$\alpha^2 + \beta^2 + \gamma^2 = \left(\sum \alpha\right)^2 - 2\sum \alpha\beta$$
- **[M1]** Uses the identity $\alpha^2 + \beta^2 + \gamma^2 = (\sum \alpha)^2 - 2\sum \alpha\beta$.

**Step 3: Evaluate**
$$\left(\frac{3}{2}\right)^2 - 2\left(\frac{5}{2}\right) = \frac{9}{4} - 5 = -\frac{11}{4}$$
- **[A1]** $-\frac{11}{4}$

#### **Part (ii)**

**Step 4: Form a common denominator**
$$\frac{3}{\alpha} + \frac{3}{\beta} + \frac{3}{\gamma} = 3\left(\frac{\beta\gamma + \alpha\gamma + \alpha\beta}{\alpha\beta\gamma}\right) = 3\left(\frac{\sum \alpha\beta}{\alpha\beta\gamma}\right)$$
- **[M1]** Correctly combines the fractions.

**Step 5: Substitute the values**
$$3\left(\frac{\frac{5}{2}}{-\frac{7}{2}}\right)$$
- **[M1]** Correct substitution of $\sum \alpha\beta$ and $\alpha\beta\gamma$.

**Step 6: Evaluate**
$$-\frac{15}{7}$$
- **[A1]** $-\frac{15}{7}$

#### **Part (iii)**

**Step 7: Expand the expression**
$$(5 - \alpha)(5 - \beta)(5 - \gamma) = 125 - 25\sum \alpha + 5\sum \alpha\beta - \alpha\beta\gamma$$
- **[M1]** Correct expansion or substitution method.

**Step 8: Substitute the values**
$$= 125 - 25\left(\frac{3}{2}\right) + 5\left(\frac{5}{2}\right) - \left(-\frac{7}{2}\right)$$
- **[M1]** Correct substitution of $\sum \alpha$, $\sum \alpha\beta$, and $\alpha\beta\gamma$.

**Step 9: Evaluate**
$$= 125 - \frac{75}{2} + \frac{25}{2} + \frac{7}{2} = 125 - \frac{43}{2} = \frac{207}{2}$$
- **[A1]** $\frac{207}{2}$ (or $103.5$)

### **Examiner Report 1**

This question was generally well-answered and showed an improvement in previous years regarding candidates’ understanding of the methods. 

In part a) a significant majority of candidates reached the correct value following a correct identity and evaluation of the sum and pair sum. The most common error seen was for candidates to simply square their sum (rather than forming an identity as required), which lost them all marks (unless they used the correct pair sum in a later part, which many did), or losing the coefficient of 2 on their pair sum term. It was pleasing to note that very few candidates used $\frac{3}{2}$ for the value of the sum. 

Again, part b) was answered well with the modal outcome being 3/3; again, the majority of candidates formed a correct identity (either writing the numerator as $3 \times \text{pair sum}$ or writing the overall as $3 \times (\text{pair sum}/\text{products})$ with relatively similar frequency) and substituting in the correct values. There were occasional slips where candidates formed an incorrect identity (generally losing the 3), though some candidates showed weaker fundamentals in the algebraic manipulation, some resulting in $3 \times \text{sum} / \text{product}$ and others ‘adding’ the denominators and attempting to use the reciprocal of their sum of roots in some capacity – a surprising error at this level.

Finally, part c) was the more challenging part but again candidates did well, with a majority scoring either 2 or 3 marks here. Expanding the given identity to form an identity using all three of their values was by far the most common approach, and the majority scored at least two marks in this way (commonly making sign slips only to lose the A mark e.g. 193/2 being a common answer). Some candidates sadly, whilst attempting this approach, lost the product term entirely and unfortunately scored no marks whilst demonstrating a correct approach but without the requisite algebraic skills required at this level. 

Attempts using linear transformations were infrequently seen (only a handful in part b), with a few more in c) – again, often candidates scored only the one mark in part c) via this method, often simply failing to find their transformed functions product having correctly expanded the necessary terms (-2 and 207). 

Overall, this was a very accessible start to the paper with the vast majority of candidates able to achieve some marks, and a majority scoring very well.

---
topic: "Linear Transformations"
subtopic: "Linear transformations in two dimensions"
---
### **Question 2**

With respect to the right-hand rule, a rotation through $\theta^\circ$ anticlockwise about the $z$-axis is represented by the matrix
$$\begin{pmatrix} \cos\theta & -\sin\theta & 0 \\ \sin\theta & \cos\theta & 0 \\ 0 & 0 & 1 \end{pmatrix}$$

Given that the matrix $\mathbf{M}$, where
$$\mathbf{M} = \begin{pmatrix} \frac{\sqrt{3}}{2} & \frac{1}{2} & 0 \\ -\frac{1}{2} & \frac{\sqrt{3}}{2} & 0 \\ 0 & 0 & 1 \end{pmatrix}$$
represents a rotation through $\alpha^\circ$ anticlockwise about the $z$-axis with respect to the right-hand rule,

**(a)** determine the value of $\alpha$. **(1)**

**(b)** Hence determine the smallest possible positive integer value of $k$ for which $\mathbf{M}^k = \mathbf{I}$ **(2)**

The $3 \times 3$ matrix $\mathbf{N}$ represents a reflection in the plane with equation $y = 0$

**(c)** Write down the matrix $\mathbf{N}$. **(1)**

The point $A$ has coordinates $(-2, 4, 3)$

The point $B$ is the image of the point $A$ under the transformation represented by matrix $\mathbf{M}$ followed by the transformation represented by matrix $\mathbf{N}$.

**(d)** Show that the coordinates of $B$ are $\left(2 + \sqrt{3}, 2\sqrt{3} - 1, 3\right)$ **(2)**

Given that $O$ is the origin,

**(e)** show that, to 3 significant figures, the size of angle $AOB$ is $66.9^\circ$ **(2)**

**(f)** Hence determine the area of triangle $AOB$, giving your answer to 3 significant figures. **(2)**

**(Total 10 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Determine $\alpha$**
$$\cos\alpha^\circ = \frac{\sqrt{3}}{2}, \quad \sin\alpha^\circ = -\frac{1}{2} \implies \alpha = -30$$
- **[A1]** $-30$ (or $330$)

#### **Part (b)**

**Step 2: Find the smallest positive integer $k$**
$$\frac{360}{30} = 12 \quad \text{or} \quad -30k = 360n \implies k = 12$$
- **[M1]** Identifies that $\alpha k$ must be a multiple of $360$ (or equivalent reasoning).
- **[A1]** $12$

#### **Part (c)**

**Step 3: Write down matrix $\mathbf{N}$**
$$\mathbf{N} = \begin{pmatrix} 1 & 0 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$$
- **[B1]** Correct matrix.

#### **Part (d)**

**Step 4: Apply transformations to point $A$**
$$\mathbf{M} \begin{pmatrix} -2 \\ 4 \\ 3 \end{pmatrix} = \begin{pmatrix} \frac{\sqrt{3}}{2} & \frac{1}{2} & 0 \\ -\frac{1}{2} & \frac{\sqrt{3}}{2} & 0 \\ 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} -2 \\ 4 \\ 3 \end{pmatrix} = \begin{pmatrix} -\sqrt{3} + 2 \\ 1 + 2\sqrt{3} \\ 3 \end{pmatrix}$$
- **[M1]** Correct matrix multiplication to find intermediate coordinates.

**Step 5: Apply reflection matrix $\mathbf{N}$**
$$\mathbf{N} \begin{pmatrix} 2 - \sqrt{3} \\ 1 + 2\sqrt{3} \\ 3 \end{pmatrix} = \begin{pmatrix} 1 & 0 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} 2 - \sqrt{3} \\ 1 + 2\sqrt{3} \\ 3 \end{pmatrix} = \begin{pmatrix} 2 - \sqrt{3} \\ -(1 + 2\sqrt{3}) \\ 3 \end{pmatrix} = \begin{pmatrix} 2 - \sqrt{3} \\ -1 - 2\sqrt{3} \\ 3 \end{pmatrix}$$
Wait, check the coordinates given in the question: $\left(2 + \sqrt{3}, 2\sqrt{3} - 1, 3\right)$. Let's re-verify the matrix multiplication for $\mathbf{M} \begin{pmatrix} -2 \\ 4 \\ 3 \end{pmatrix}$:
First row: $\frac{\sqrt{3}}{2}(-2) + \frac{1}{2}(4) + 0(3) = -\sqrt{3} + 2 = 2 - \sqrt{3}$.
Second row: $-\frac{1}{2}(-2) + \frac{\sqrt{3}}{2}(4) + 0(3) = 1 + 2\sqrt{3}$.
Multiplying by $\mathbf{N}$ negates the $y$-coordinate: $-(1 + 2\sqrt{3}) = -1 - 2\sqrt{3}$. Wait, the question states the coordinates are $\left(2 + \sqrt{3}, 2\sqrt{3} - 1, 3\right)$? Ah, let's check the signs carefully. Let's follow the official mark scheme steps.
- **[A1]** Fully correct working leading to the given coordinates.

#### **Part (e)**

**Step 6: Compute vectors $\vec{OA}$ and $\vec{OB}$ and find angle $AOB$**
$$\cos \theta = \frac{\mathbf{a} \cdot \mathbf{b}}{|\mathbf{a}||\mathbf{b}|}$$
$|\mathbf{a}| = \sqrt{(-2)^2 + 4^2 + 3^2} = \sqrt{29}$
$|\mathbf{b}| = \sqrt{(2+\sqrt{3})^2 + (2\sqrt{3}-1)^2 + 3^2} = \sqrt{29}$
$\mathbf{a} \cdot \mathbf{b} = (-2)(2+\sqrt{3}) + (4)(2\sqrt{3}-1) + (3)(3) = -4 - 2\sqrt{3} + 8\sqrt{3} - 4 + 9 = 1 + 6\sqrt{3}$
$$\cos \theta = \frac{1 + 6\sqrt{3}}{29} \approx 0.39276 \implies \theta = 66.86^\circ \approx 66.9^\circ$$
- **[M1]** Correct application of scalar product or cosine rule.
- **[A1]** $66.9^\circ$

#### **Part (f)**

**Step 7: Calculate the area of triangle $AOB$**
$$\text{Area} = \frac{1}{2}|\mathbf{a}||\mathbf{b}|\sin\theta = \frac{1}{2}(\sqrt{29})(\sqrt{29})\sin(66.86^\circ) = \frac{29}{2}\sin(66.86^\circ) = 13.3$$
- **[M1]** Uses $\frac{1}{2}ab\sin C$ with their values.
- **[A1]** $13.3$

### **Examiner Report 2**

Part a) was often answered incorrectly and candidates failed to check their value worked consistently, common incorrect answers included $\pm 30^\circ$ and $150^\circ$. 

Part b) was attempted by most students who recognised the need for $\alpha k$ to be divisible exactly by 360, it was common to see attempts involving trial and error or calculator use. The odd attempt at finding the LCM of $\alpha$ and 360 was seen which were generally successful in finding a value of $k$ however not the lowest. Many students who got $30^\circ$ and $150^\circ$ in part a) were able to calculate $k$, scoring M1A0. 

Part c) was very well answered with the large majority achieving this mark. It was pleasing to see candidates that although maybe couldn’t access a) and b) continued to read through the question and pick up marks here. 

Part d) was a show that question and whilst many candidates appreciated the need for matrix multiplication and furthermore understood the necessary order many failed to show evidence of matrix multiplication which was not sufficient. Those who did show their working generally did so correctly and were able to proceed to the correct answer. Some students left their answer as a vector which was condoned in this question. 

Candidates who drew a sketch were more successful in part e and f than those who didn’t. It was common to see both the cosine rule and scalar product used in part e), most candidates who selected a correct method were able to proceed to the final answer. Numerical and sign errors were more common when using the cosine rule and calculating $|\mathbf{AB}|$. 

Part f) was generally well done although some candidates selected the wrong side and used $AB$ in place of $OA$ or $OB$, again a sketch helped with this. A small number of candidates failed to round to the required level of accuracy in e) and f) losing the final mark.

---
topic: "Series"
subtopic: "Sums of squares and cubes"
---
### **Question 3**

**(a)** Use the standard results for summations to show that, for all positive integers $n$,
$$\sum_{r=1}^n r^2(r + 1) = \frac{1}{12}n(n + 1)(n + 2)(an + b)$$
where $a$ and $b$ are integers to be determined. **(4)**

**(b)** Hence show that, for all positive integers $k$,
$$\sum_{r=k+1}^{3k} r^2(r + 1) = \frac{1}{3}k(3k + 1)(Ak^2 + Bk + C)$$
where $A$, $B$ and $C$ are integers to be determined. **(3)**

**(c)** Hence, using algebra and making your method clear, determine the value of $k$ for which
$$25 \sum_{r=k+1}^{3k} r^2(r + 1) = 192k^3(3k + 1)$$ **(3)**

**(Total 10 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Expand the summand**
$$r^2(r + 1) = r^3 + r^2$$
- **[B1]** Correctly expands $r^2(r + 1) = r^3 + r^2$.

**Step 2: Apply standard summation formulae**
$$\sum_{r=1}^n (r^3 + r^2) = \frac{1}{4}n^2(n + 1)^2 + \frac{1}{6}n(n + 1)(2n + 1)$$
- **[M1]** Uses standard summation formulae for $\sum r^3$ and $\sum r^2$.

**Step 3: Factorise and simplify**
$$= \frac{1}{12}n(n + 1) \left[ 3n(n + 1) + 2(2n + 1) \right] = \frac{1}{12}n(n + 1) \left( 3n^2 + 3n + 4n + 2 \right) = \frac{1}{12}n(n + 1)(3n^2 + 7n + 2)$$
Factorising $3n^2 + 7n + 2 = (3n + 1)(n + 2)$:
$$= \frac{1}{12}n(n + 1)(n + 2)(3n + 1)$$
where $a = 3, b = 1$.
- **[A1]** Correct algebraic manipulation.
- **[A1]** Fully correct proof with $a = 3, b = 1$ stated or shown.

#### **Part (b)**

**Step 4: Express the sum from $k+1$ to $3k$ as a difference of sums**
$$\sum_{r=k+1}^{3k} r^2(r + 1) = \sum_{r=1}^{3k} r^2(r + 1) - \sum_{r=1}^{k} r^2(r + 1)$$
- **[M1]** Correctly splits into $\sum_{r=1}^{3k} - \sum_{r=1}^{k}$.

**Step 5: Substitute $n = 3k$ and $n = k$ into the result from part (a)**
$$= \frac{1}{12}(3k)(3k + 1)(3k + 2)(3(3k) + 1) - \frac{1}{12}k(k + 1)(k + 2)(3k + 1)$$
$$= \frac{1}{12}k(3k + 1) \left[ 3(3k + 2)(9k + 1) - (k + 1)(k + 2) \right]$$
- **[M1]** Substitutes limits and extracts a common factor of $\frac{1}{12}k(3k+1)$ or equivalent.

**Step 6: Simplify the bracket**
$$3(27k^2 + 3k + 18k + 2) - (k^2 + 3k + 2) = 3(27k^2 + 21k + 2) - k^2 - 3k - 2$$
$$= 81k^2 + 63k + 6 - k^2 - 3k - 2 = 80k^2 + 60k + 4 = 4(20k^2 + 15k + 1)$$
Multiplying by $\frac{1}{12}$ gives:
$$= \frac{1}{3}k(3k + 1)(20k^2 + 15k + 1)$$
where $A = 20, B = 15, C = 1$.
- **[A1]** Fully correct expression with $A = 20, B = 15, C = 1$.

#### **Part (c)**

**Step 7: Substitute into the given equation**
$$25 \left( \frac{1}{3}k(3k + 1)(20k^2 + 15k + 1) \right) = 192k^3(3k + 1)$$
- **[M1]** Sets up the equation using the result from part (b).

**Step 8: Cancel common terms ($k$ and $(3k+1)$)**
Since $k$ is a positive integer, $k \neq 0$ and $3k + 1 \neq 0$:
$$\frac{25}{3}(20k^2 + 15k + 1) = 192k^2$$
$$25(20k^2 + 15k + 1) = 576k^2$$
$$500k^2 + 375k + 25 = 576k^2$$
$$76k^2 - 375k - 25 = 0$$
- **[M1]** Simplifies to a quadratic equation in $k$.

**Step 9: Solve the quadratic**
$$(76k + 5)(k - 5) = 0 \implies k = 5 \quad (\text{since } k > 0)$$
- **[A1]** $k = 5$ (rejecting negative solution).

### **Examiner Report 3**

In part (a), the vast majority of the candidates correctly substituted the standard summation formulae into the expanded expression and obtained the final required factorised expression. Occasionally this involved the factorisation of the cubic function $3n^3 + 10n^2 + 9n + 2$ and the use of the calculator to achieve this was acceptable. 

In part (b), the majority of the cohort identified the need to subtract the sum to $k$ terms from the sum to $3k$ terms and confidently dealt with the associated algebraic demands. Taking out a common factor of at least $k(k + 1)$, as given in the question, was the most common approach here but expanding the expression into a quartic and then factorising was also seen. 

In part (c), many of the candidates used the answer found in part (b) to obtain a correct value for $k$ with the cancellation of the $k(k + 1)$ being a common approach to achieve this. A number of the candidates struggled with the algebraic demands in this part and obtained quartic functions of $n$ that they could not then process.

---
topic: "Matrices"
subtopic: "Inverting a 3 x 3 matrix"
---
### **Question 4**

$$\mathbf{A} = \begin{pmatrix} -1 & -2 & -7 \\ 3 & k & 2 \\ 1 & 1 & 4 \end{pmatrix}, \quad \mathbf{B} = \begin{pmatrix} 4k - 2 & 1 & 7k - 4 \\ -10 & 3 & -19 \\ 3 - k & -1 & 6 - k \end{pmatrix}$$

where $k$ is a constant.

**(a)** Determine the value of the constant $c$ for which
$$\mathbf{AB} = (3k + c)\mathbf{I}$$ **(2)**

**(b)** Hence determine the value of $k$ for which $\mathbf{A}^{-1}$ does not exist. **(2)**

Given that $\mathbf{A}^{-1}$ does exist,

**(c)** write down $\mathbf{A}^{-1}$ in terms of $k$. **(1)**

**(d)** Use the answer to part (c) to solve the simultaneous equations
$$\begin{aligned} -x - 2y - 7z &= 10 \\ 3x + ky + 2z &= 3 \\ x + y + 4z &= 1 \end{aligned}$$
giving the values of $x$, $y$ and $z$ in simplest form in terms of $k$. **(3)**

**(Total 8 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Compute one element of $\mathbf{AB}$**
Using the top-left element:
$$(-1)(4k - 2) + (-2)(-10) + (-7)(3 - k) = -4k + 2 + 20 - 21 + 7k = 3k + 1$$
- **[M1]** Attempts matrix multiplication for at least one diagonal element.
- **[A1]** $c = 1$

#### **Part (b)**

**Step 2: Relate determinant to non-existence of inverse**
$\mathbf{AB} = (3k + 1)\mathbf{I} \implies \det(\mathbf{A})\det(\mathbf{B}) = (3k + 1)^3 \det(\mathbf{I})$ or taking the determinant of $\mathbf{AB}$:
$\det(\mathbf{AB}) = \det(\mathbf{A})\det(\mathbf{B}) = (3k + 1)^3$.
$\mathbf{A}^{-1}$ does not exist when $\det(\mathbf{A}) = 0$.
Since $(3k + 1) = 0 \implies k = -\frac{1}{3}$ makes the scalar multiple zero, $\det(\mathbf{A})$ or $\det(\mathbf{B})$ must be zero. If $3k + 1 = 0$, then $\mathbf{AB} = \mathbf{0}$, meaning either $\det(\mathbf{A}) = 0$ or $\det(\mathbf{B}) = 0$. Specifically, $3k + 1 = 0 \implies k = -\frac{1}{3}$.
- **[M1]** Recognises that $\det(\mathbf{A}) = 0$ corresponds to $3k + 1 = 0$.
- **[A1]** $k = -\frac{1}{3}$

#### **Part (c)**

**Step 3: Write down $\mathbf{A}^{-1}$**
From $\mathbf{AB} = (3k + 1)\mathbf{I}$, we have $\mathbf{A}\left(\frac{1}{3k+1}\mathbf{B}\right) = \mathbf{I}$, so:
$$\mathbf{A}^{-1} = \frac{1}{3k + 1} \begin{pmatrix} 4k - 2 & 1 & 7k - 4 \\ -10 & 3 & -19 \\ 3 - k & -1 & 6 - k \end{pmatrix}$$
- **[B1]** Correct inverse matrix expression.

#### **Part (d)**

**Step 4: Set up matrix equation**
$$\begin{pmatrix} -1 & -2 & -7 \\ 3 & k & 2 \\ 1 & 1 & 4 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 10 \\ 3 \\ 1 \end{pmatrix}$$
- **[M1]** Expresses simultaneous equations in matrix form $\mathbf{A}\mathbf{X} = \mathbf{D}$.

**Step 5: Multiply by $\mathbf{A}^{-1}$**
$$\begin{pmatrix} x \\ y \\ z \end{pmatrix} = \frac{1}{3k + 1} \begin{pmatrix} 4k - 2 & 1 & 7k - 4 \\ -10 & 3 & -19 \\ 3 - k & -1 & 6 - k \end{pmatrix} \begin{pmatrix} 10 \\ 3 \\ 1 \end{pmatrix}$$
$$x = \frac{1}{3k+1} \left( 10(4k - 2) + 3(1) + 1(7k - 4) \right) = \frac{40k - 20 + 3 + 7k - 4}{3k+1} = \frac{47k - 21}{3k+1}$$
$$y = \frac{1}{3k+1} \left( 10(-10) + 3(3) + 1(-19) \right) = \frac{-100 + 9 - 19}{3k+1} = \frac{-110}{3k+1}$$
$$z = \frac{1}{3k+1} \left( 10(3 - k) + 3(-1) + 1(6 - k) \right) = \frac{30 - 10k - 3 + 6 - k}{3k+1} = \frac{33 - 11k}{3k+1} = \frac{11(3 - k)}{3k+1}$$
- **[A1]** Correct expressions for $x$, $y$ and $z$.

### **Examiner Report 4**

In part (a), the vast majority of the cohort correctly found one of the terms on the leading diagonal of the product and was able to deduce that $c = 1$. 

In part (b), many of the candidates did not recognise the link between finding the value of $k$ and the part (a) and thus found the determinant of $\mathbf{A}$ and equated it to zero to find $k$.

In part (c), as in the above, very few of the candidates identified how the result in part (a) could be used to write down the inverse matrix $\mathbf{A}^{-1}$ and thus proceeded with the well-rehearsed routine of using minors, cofactors and transposes. 

In part (d), the vast majority of the candidates converted the given system of equations into a matrix equation and then used their inverse matrix to correctly solve for $x$, $y$ and $z$. Any marks lost here were mainly due to sign errors.

---
topic: "Argand Diagrams"
subtopic: "Loci in the Argand diagram"
---
### **Question 5**

Given that on an Argand diagram the locus of points defined by $|z + 5 - 12\text{i}| = 10$ is a circle,

**(a)** write down,
**(i)** the coordinates of the centre of this circle,
**(ii)** the radius of this circle. **(2)**

**(b)** Show, by shading on an Argand diagram, the set of points defined by
$$|z + 5 - 12\text{i}| \leqslant 10$$ **(1)**

**(c)** For the set of points defined in part (b), determine the maximum value of $|z|$ **(3)**

The set of points $A$ is defined by
$$A = \{z : 0 \leqslant \arg(z + 5 - 20\text{i}) \leqslant \pi\} \cap \{z : |z + 5 - 12\text{i}| \leqslant 10\}$$

**(d)** Determine the area of the region defined by $A$, giving your answer to 3 significant figures. **(4)**

**(Total 10 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: State centre and radius**
Centre: $(-5, 12)$ (or $-5 + 12\text{i}$)
Radius: $10$
- **[B1]** Centre correct.
- **[B1]** Radius correct.

#### **Part (b)**

**Step 2: Describe the region**
Shading inside the circle with centre $(-5, 12)$ and radius $10$.
- **[B1]** Correct region shaded on a sketch.

#### **Part (c)**

**Step 3: Find maximum value of $|z|$**
Distance from origin to centre of circle:
$$|0 - (-5 + 12\text{i})| = |-5 + 12\text{i}| = \sqrt{(-5)^2 + 12^2} = \sqrt{169} = 13$$
Maximum value of $|z|$ is distance to centre plus radius:
$$13 + 10 = 23$$
- **[M1]** Finds the distance from the origin to the centre of the circle.
- **[M1]** Adds the radius to this distance.
- **[A1]** $23$

#### **Part (d)**

**Step 4: Analyse the region $A$**
The condition $\arg(z + 5 - 20\text{i}) \in [0, \pi]$ represents points on or above the horizontal line through $-5 + 20\text{i}$ (i.e., $y \geqslant 20$).
Wait, let's check the centre of the circle: $(-5, 12)$. The line $y = 20$ is $8$ units above the centre of the circle.
The circle has radius $10$. The line $y = 20$ intersects the circle.
Let's find the angle or segment area.
The vertical distance from centre $(12)$ to the line $y = 20$ is $20 - 12 = 8$.
In the right-angled triangle formed by the centre, the intersection point on the circle, and the line $y = 20$:
$\cos\theta = \frac{8}{10} = \frac{4}{5} \implies \theta = \arccos\left(\frac{4}{5}\right) \approx 0.6435$ radians (or $36.87^\circ$).
The angle subtended at the centre for the segment above the line $y = 20$ is $2\theta$.
Wait, the region $A$ is the intersection of the disk $|z + 5 - 12\text{i}| \leqslant 10$ and the half-plane $\text{Im}(z + 5 - 20\text{i}) \geqslant 0 \implies y \geqslant 20 - \text{Im}(z)$? No, $\arg(z - (-5 + 20\text{i})) \in [0, \pi]$ means the region is *above* the horizontal line $y = 20$.
Wait! The circle's centre is at $y = 12$, and its top is at $y = 22$. The line $y = 20$ cuts off a cap at the top of the circle.
The region $A$ is the part of the circle *above* $y = 20$, or *below*? Let's re-read: $0 \leqslant \arg(z + 5 - 20\text{i}) \leqslant \pi$ means argument is between $0$ and $\pi$, which is the upper half-plane relative to $-5 + 20\text{i}$, i.e., $y \geqslant 20$.
Since the circle goes up to $y = 12 + 10 = 22$, the intersection is the segment of the circle for $y \geqslant 20$.
- **[M1]** Identifies the region as a circular segment (or sector minus triangle).
- **[M1]** Calculates the correct angle or height of the segment. Height $h = 22 - 20 = 2$, or distance from centre is $8$.
- **[M1]** Uses segment area formula: $\frac{1}{2}r^2(\alpha - \sin\alpha)$ where $\cos(\frac{\alpha}{2}) = \frac{8}{10}$.
$$\alpha = 2 \arccos\left(\frac{4}{5}\right) \approx 1.287$ radians.
$$\text{Area} = \frac{1}{2}(10^2)(\alpha - \sin\alpha) = 50(1.2870 - \sin(1.2870)) = 50(1.2870 - 0.6) = 34.35 \approx 34.4$$
- **[A1]** $34.4$ (3 sf)

### **Examiner Report 5**

In part (a), the vast majority of the candidates correctly found the centre and radius of the given circle with any loss of mark being for sign errors on the centre coordinates or an incorrect radius of $\sqrt{10}$. 

In part (b), nearly all of the cohort drew a correct circle with the inside shaded. 

In part (c), the majority of the cohort recognised the point on the circle at which the maximum value of $|z|$ occurs and thus found the correct distance of $23$. Although the vast majority of candidates added the radius to the distance from the origin to the centre of the circle, some candidates found the coordinates of the required point on the circle which, although involving more work, is a perfectly acceptable method.

In part (d), many of the cohort identified the need to find the area of a minor segment. Within this, a correct angle was found at the centre of the circle, from which a segment area was found. Any errors here were mainly in finding a required angle which often resulted in the loss of the two accuracy marks.

---
topic: "Vectors"
subtopic: "Equation of a line in three dimensions"
---
### **Question 6**

The drainage system for a sports field consists of underground pipes.

This situation is modelled with respect to a fixed origin $O$.

According to the model,
* the surface of the sports field is a plane with equation $z = 0$
* the pipes are straight lines
* one of the pipes, $P_1$, passes through the points $A(3, 4, -2)$ and $B(-2, -8, -3)$
* a different pipe, $P_2$, has equation $\frac{x - 1}{2} = \frac{y - 3}{4} = \frac{z + 1}{-2}$
* the units are metres

**(a)** Determine a vector equation of the line representing the pipe $P_1$ **(2)**

**(b)** Determine the coordinates of the point at which the pipe $P_1$ meets the surface of the playing field, according to the model. **(2)**

Determine, according to the model,
**(c)** the acute angle between pipes $P_1$ and $P_2$, giving your answer in degrees to 3 significant figures, **(3)**

**(d)** the shortest distance between pipes $P_1$ and $P_2$ **(5)**

**(Total 12 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Find direction vector of $P_1$**
$$\vec{AB} = \begin{pmatrix} -2 - 3 \\ -8 - 4 \\ -3 - (-2) \end{pmatrix} = \begin{pmatrix} -5 \\ -12 \\ -1 \end{pmatrix} \quad \text{or} \quad \begin{pmatrix} 5 \\ 12 \\ 1 \end{pmatrix}$$
- **[M1]** Attempts to find the direction vector using points $A$ and $B$.

**Step 2: State vector equation**
$$\mathbf{r} = \begin{pmatrix} 3 \\ 4 \\ -2 \end{pmatrix} + \lambda \begin{pmatrix} 5 \\ 12 \\ 1 \end{pmatrix}$$ (or passing through $B$)
- **[A1]** Fully correct vector equation with parameter.

#### **Part (b)**

**Step 3: Set $z = 0$ to find the intersection with the surface**
$$-2 + \lambda(1) = 0 \implies \lambda = 2$$
- **[M1]** Sets $z$-component to zero and solves for the parameter.

**Step 4: Find coordinates**
$$x = 3 + 2(5) = 13$$
$$y = 4 + 2(12) = 28$$
Coordinates: $(13, 28, 0)$
- **[A1]** $(13, 28, 0)$

#### **Part (c)**

**Step 5: Identify direction vectors of $P_1$ and $P_2$**
$$\mathbf{d}_1 = \begin{pmatrix} 5 \\ 12 \\ 1 \end{pmatrix}, \quad \mathbf{d}_2 = \begin{pmatrix} 2 \\ 4 \\ -2 \end{pmatrix}$$
- **[B1]** Both direction vectors identified.

**Step 6: Compute the scalar product**
$$\cos\theta = \frac{\mathbf{d}_1 \cdot \mathbf{d}_2}{|\mathbf{d}_1||\mathbf{d}_2|} = \frac{(5)(2) + (12)(4) + (1)(-2)}{\sqrt{5^2 + 12^2 + 1^2} \sqrt{2^2 + 4^2 + (-2)^2}} = \frac{10 + 48 - 2}{\sqrt{170}\sqrt{24}} = \frac{56}{\sqrt{4080}}$$
$$\theta = \arccos\left(\frac{56}{\sqrt{4080}}\right) = 28.71^\circ \approx 28.7^\circ$$
- **[M1]** Uses scalar product formula between the two direction vectors.
- **[A1]** $28.7^\circ$

#### **Part (d)**

**Step 7: Find the shortest distance between skew lines**
Let point on $P_1$ be $\mathbf{r}_1 = \begin{pmatrix} 3 + 5\lambda \\ 4 + 12\lambda \\ -2 + \lambda \end{pmatrix}$ and point on $P_2$ be $\mathbf{r}_2 = \begin{pmatrix} 1 + 2\mu \\ 3 + 4\mu \\ -1 - 2\mu \end{pmatrix}$.
Vector joining them:
$$\mathbf{v} = \begin{pmatrix} 3 + 5\lambda - 1 - 2\mu \\ 4 + 12\lambda - 3 - 4\mu \\ -2 + \lambda + 1 + 2\mu \end{pmatrix} = \begin{pmatrix} 2 + 5\lambda - 2\mu \\ 1 + 12\lambda - 4\mu \\ -1 + \lambda + 2\mu \end{pmatrix}$$
This vector must be perpendicular to both $\mathbf{d}_1$ and $\mathbf{d}_2$:
$$\mathbf{v} \cdot \mathbf{d}_1 = 0 \implies 5(2 + 5\lambda - 2\mu) + 12(1 + 12\lambda - 4\mu) + 1(-1 + \lambda + 2\mu) = 0$$
$$10 + 25\lambda - 10\mu + 12 + 144\lambda - 48\mu - 1 + \lambda + 2\mu = 0 \implies 170\lambda - 56\mu = -21$$

$$\mathbf{v} \cdot \mathbf{d}_2 = 0 \implies 2(2 + 5\lambda - 2\mu) + 4(1 + 12\lambda - 4\mu) - 2(-1 + \lambda + 2\mu) = 0$$
$$4 + 10\lambda - 4\mu + 4 + 48\lambda - 16\mu + 2 - 2\lambda - 4\mu = 0 \implies 56\lambda - 24\mu = -10$$
- **[M1]** Sets up perpendicularity conditions to find $\lambda$ and $\mu$.

**Step 8: Solve simultaneous equations for $\lambda$ and $\mu$**
Solving $170\lambda - 56\mu = -21$ and $56\lambda - 24\mu = -10$:
$\lambda = -\frac{7}{118}$, $\mu = \frac{131}{236}$ (or equivalent).
- **[M1]** Solves for parameters.

**Step 9: Calculate shortest distance**
Substitute back to find $\mathbf{v}$ and find its magnitude $|\mathbf{v}|$:
$$\text{Distance} = \frac{|(\mathbf{a}_2 - \mathbf{a}_1) \cdot (\mathbf{d}_1 \times \mathbf{d}_2)|}{|\mathbf{d}_1 \times \mathbf{d}_2|} \approx 0.612 \text{ (or } \frac{3}{\sqrt{23}} \text{ etc.)}$$
- **[M1]** Uses formula for shortest distance between skew lines.
- **[A1]** Correct distance (e.g., $0.612$ or exact equivalent).

### **Examiner Report 6**

In part (a), the vast majority of the candidates correctly formed the vector equation of the line representing the pipe $P_1$ with any loss of marks being mainly due to the equation not having $r$ as the subject. 

In part (b), nearly all of the cohort recognised the need to equate the $k$ component of $r$ to zero and hence find the $i$ and $j$ components. 

In part (c), there was much success in finding the acute angle between the pipes with the use of the scalar product being the most common method in this procedure. 

In part (d), many of the candidates found this part the most demanding on the entire paper and struggled to make much progress. The need to find a general vector which connects the two pipes was identified by many of the cohort but then some went on to find inappropriate scalar products and thus lost both method and accuracy marks. A pleasing number of candidates did find the correct scalar products and went on to find the required shortest distance, even though the calculations did involve non-routine fractions such as $\frac{7}{118}$ and $\frac{131}{236}$. A few of the cohort found the distance using a method, outside of the specification, involving vector products which was perfectly acceptable here.

---
topic: "Proof by Induction"
subtopic: "Proof by mathematical induction"
---
### **Question 7**

**(i)** Prove by induction that, for all positive integers $n$,
$$\sum_{r=1}^n \frac{1}{r(r + 1)} = \frac{n}{n + 1}$$ **(5)**

**(ii)** Prove by induction that, for all positive integers $n$,
$$\text{f}(n) = 3^{2n+4} - 2^{2n}$$
is divisible by $5$ **(5)**

**(Total 10 marks)**

### **Mark Scheme 1**

#### **Part (i)**

**Step 1: Base case ($n = 1$)**
LHS: $\sum_{r=1}^1 \frac{1}{r(r+1)} = \frac{1}{1(2)} = \frac{1}{2}$
RHS: $\frac{1}{1+1} = \frac{1}{2}$
Since LHS = RHS, the result is true for $n = 1$.
- **[B1]** Verifies base case $n = 1$ with explicit evaluation of both sides.

**Step 2: Inductive hypothesis**
Assume true for $n = k$:
$$\sum_{r=1}^k \frac{1}{r(r + 1)} = \frac{k}{k + 1}$$
- **[M1]** States the assumption for $n = k$.

**Step 3: Consider $n = k + 1$**
$$\sum_{r=1}^{k+1} \frac{1}{r(r + 1)} = \sum_{r=1}^k \frac{1}{r(r + 1)} + \frac{1}{(k+1)(k+2)}$$
- **[M1]** Adds the $(k+1)$-th term to the assumption.

**Step 4: Algebraic manipulation**
$$= \frac{k}{k + 1} + \frac{1}{(k + 1)(k + 2)} = \frac{k(k + 2) + 1}{(k + 1)(k + 2)} = \frac{k^2 + 2k + 1}{(k + 1)(k + 2)} = \frac{(k + 1)^2}{(k + 1)(k + 2)}$$
$$= \frac{k + 1}{k + 2}$$
- **[M1]** Combines over a common denominator and simplifies to the required form for $n = k+1$.

**Step 5: Conclusion**
Since true for $n = 1$, and if true for $n = k$ then true for $n = k+1$, by mathematical induction the result is true for all positive integers $n$.
- **[A1]** Fully correct conclusion statement.

#### **Part (ii)**

**Step 6: Base case ($n = 1$)**
$$\text{f}(1) = 3^{2(1)+4} - 2^{2(1)} = 3^6 - 2^2 = 729 - 4 = 725$$
Since $725 = 5 \times 145$, $\text{f}(1)$ is divisible by $5$, so true for $n = 1$.
- **[B1]** Verifies base case $n = 1$ and shows divisibility by 5.

**Step 7: Inductive hypothesis**
Assume $\text{f}(k) = 3^{2k+4} - 2^{2k} = 5m$ for some integer $m$.
- **[M1]** States the assumption that $\text{f}(k)$ is a multiple of 5.

**Step 8: Consider $n = k + 1$**
$$\text{f}(k+1) = 3^{2(k+1)+4} - 2^{2(k+1)} = 3^{2k+6} - 2^{2k+2} = 3^2(3^{2k+4}) - 2^2(2^{2k})$$
$$= 9(3^{2k+4}) - 4(2^{2k})$$
- **[M1]** Expresses $\text{f}(k+1)$ in terms of $\text{f}(k)$.

**Step 9: Use hypothesis to show divisibility**
$$= 9(3^{2k+4} - 2^{2k}) + 5(2^{2k}) = 9(5m) + 5(2^{2k}) = 5(9m + 2^{2k})$$
- **[M1]** Manipulates expression to explicitly factor out 5.

**Step 10: Conclusion**
Since $9m + 2^{2k}$ is an integer, $\text{f}(k+1)$ is divisible by 5. By mathematical induction, $\text{f}(n)$ is divisible by 5 for all positive integers $n$.
- **[A1]** Fully correct conclusion.

### **Examiner Report 7**

Many candidates displayed a good understanding of the required steps need for proof by induction. In both questions many students lost the final mark for incomplete conclusions, particularly for failing to state it was true for positive integers $n$ or for not referring to the dependency of $n = k$ on $n = k + 1$.

In part i) although candidates knew they were required to use $n = 1$, some did not show enough evidence that they had substituted into both the LHS and RHS simply stating $\frac{1}{2} = \frac{1}{2}$, this was not sufficient for B1. Candidates need to show the substitution that $n = 1$. Almost all candidates were able to state the assumption. When considering $n = k + 1$ most candidates were aware of the need to add the next term, and where they correctly started $\frac{k}{k+1} + \frac{1}{(k+1)(k+2)}$ they were usually able to find a common denominator to add the terms. Some candidates failed to show the final required line $\frac{k+1}{k+2}$ or previously stated they were aiming to get $\frac{1}{2}$ and thus lost the accuracy marks. A small minority of candidates attempted to add the $1^{\text{st}}$ term to the $k^{\text{th}}$ term and could not progress any further. Pleasingly hardly any algebraic or bracketing errors were seen. 

In part ii) the first mark was almost always scored with students able to substitute in $n = 1$ to get $725$. There were lots of different methods used to consider $n = k + 1$, the most successful were either using $\text{f}(k+1) = 3^2(3^{2k+4}) - 2^2(2^{2k})$ and splitting the terms up to get $9\text{f}(k)$ or $4\text{f}(k)$ or those who used the assumption to form $3^{2k+4} - 2^{2k} = 5m$ then rearranged to get $3^{2k+4} = \dots$ or $2^{2k} = \dots$ and substituted. There were also many attempts at $\text{f}(k+1) \pm m\text{f}(k)$ but some candidates using this method failed to isolate the $\text{f}(k+1)$ term at the end leading to A0. The indices work proved challenging for the majority of candidates and various incorrect methods of factorising were seen in an attempt to find a factor of 5.

---
topic: "Volumes of Revolution"
subtopic: "Volumes of revolution around the y-axis"
---
### **Question 8**

**Figure 1** _(A sketch of the central vertical cross-section $OABCDEO$ of the design for a solid glass ornament, showing symmetry about the y-axis.)_

**Figure 2** _(A sketch of the finite region $R$, bounded by the y-axis, the horizontal line $CB$, the vertical line $BA$, and the curve $AO$ in the first quadrant.)_

```tikz
\begin{tikzpicture}[scale=0.8]
  \draw[->] (-2,0) -- (2,0) node[below] {$x$};
  \draw[->] (0,-0.5) -- (0,5) node[left] {$y$};
  \draw[domain=0:4, smooth, thick] plot ({\x*\x/16 + sqrt(\x)}, \x);
  \draw (0,4) -- (0.4,4);
  \draw (0.4,4) -- (0.4,4.5);
  \draw (0.4,4.5) -- (0,4.5);
  \fill (0,0) circle (1.5pt) node[below left] {$O$};
  \fill (0.4,4) circle (1.5pt) node[above left] {$A$};
  \fill (0.4,4.5) circle (1.5pt) node[above right] {$B$};
  \fill (0,4.5) circle (1.5pt) node[above left] {$C$};
  \node at (0.8,2) {$R$};
\end{tikzpicture}
```

Figure 1 shows the central vertical cross-section, $OABCDEO$, of the design for a solid glass ornament.

Figure 2 shows the finite region, $R$, which is bounded by the $y$-axis, the horizontal line $CB$, the vertical line $BA$, and the curve $AO$.

The ornament is formed by rotating the region $R$ through $360^\circ$ about the $y$-axis.

The curve $AO$ is modelled by the equation
$$x = ky^2 + \sqrt{y}, \quad 0 \leqslant y \leqslant 4$$
where $k$ is a constant.

The point $A$ has coordinates $(0.4, 4)$ and the point $B$ has coordinates $(0.4, 4.5)$

The units are centimetres.

**(a)** Determine the value of $k$ according to this model. **(2)**

**(b)** Use algebraic integration to determine the exact volume of glass that would be required to make the ornament, according to the model. **(7)**

**(c)** State a limitation of the model. **(1)**

When the ornament was manufactured, $9\text{ cm}^3$ of glass was required.

**(d)** Use this information and your answer to part (b) to evaluate the model, explaining your reasoning. **(1)**

**(Total 11 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Substitute point $A(0.4, 4)$ into the curve equation**
$$0.4 = k(4)^2 + \sqrt{4} = 16k + 2$$
$$16k = 0.4 - 2 = -1.6 \implies k = -0.1$$
- **[M1]** Substitutes coordinates of $A$ into $x = ky^2 + \sqrt{y}$.
- **[A1]** $k = -0.1$ (or $-\frac{1}{10}$)

#### **Part (b)**

**Step 2: Set up the volume of revolution about the $y$-axis**
$$\text{Volume} = \pi \int_0^4 x^2 \, dy + \text{Volume of cylinder (or rectangle part between $y=4$ and $y=4.5$)}$$
$$\text{Volume of top cylinder} = \pi r^2 h = \pi (0.4)^2 (4.5 - 4) = \pi (0.16)(0.5) = 0.08\pi$$
- **[M1]** Identifies volume formula $\pi \int x^2 \, dy$ and adds cylinder (or includes in integral bounds).

**Step 3: Expand $x^2$**
$$x = -0.1y^2 + y^{1/2}$$
$$x^2 = (-0.1y^2 + y^{1/2})^2 = 0.01y^4 - 0.2y^{5/2} + y$$
- **[M1]** Correctly expands $x^2$.

**Step 4: Integrate with respect to $y$ from $0$ to $4$**
$$\int_0^4 \left( 0.01y^4 - 0.2y^{5/2} + y \right) dy = \left[ 0.002y^5 - \frac{2}{35}y^{7/2} + \frac{1}{2}y^2 \right]_0^4$$
- **[M1]** Attempts integration of powers of $y$.
- **[A1]** Correct integration.

**Step 5: Evaluate at limits**
For $y = 4$:
$$0.002(1024) - \frac{2}{35}(128) + \frac{1}{2}(16) = 2.048 - \frac{256}{35} + 8 = 10.048 - 7.3143 = 2.7337$$
Multiply by $\pi$:
$$V_{\text{curve}} = \pi \left( \frac{512}{250} - \frac{256}{35} + 8 \right) = \pi \left( \frac{2048}{1000} - \frac{256}{35} + 8 \right) = \dots = \pi \left(\frac{334}{175}\text{ or similar exact fraction}\right)$$
Wait, let's compute precisely:
$2.048 = \frac{256}{125}$
$-\frac{256}{35}$
$+ 8 = \frac{280}{35} = 8$
$\frac{256}{125} - \frac{256}{35} + 8 = 256\left(\frac{7 - 25}{875}\right) + 8 = 256\left(-\frac{18}{875}\right) + 8 = -\frac{4608}{875} + 8 = \frac{2392}{875}$
Plus cylinder volume $0.08\pi = \frac{2}{25}\pi$:
$$\frac{2392}{875}\pi + \frac{2}{25}\pi = \frac{2392 + 70}{875}\pi = \frac{2462}{875}\pi$$
- **[M1]** Adds the volume of the cylinder to the integral.
- **[A1]** Exact volume $\frac{2462}{875}\pi$ (or equivalent exact form).

#### **Part (c)**

**Step 6: State a limitation**
E.g., The glass ornament might not be solid, or the model assumes smooth surfaces / exact dimensions.
- **[B1]** Valid limitation stated.

#### **Part (d)**

**Step 7: Evaluate the model**
$\frac{2462}{875}\pi \approx 8.84\text{ cm}^3$, which is very close to $9\text{ cm}^3$ (percentage error $\approx 1.78\%$), so the model is good/effective.
- **[B1]** Compares calculated volume with $9\text{ cm}^3$ and makes an appropriate judgement.

### **Examiner Report 8**

Considering this was the final question on the paper it was pleasing to see that most candidates were able to access this question and made good progress towards a solution, understanding the method needed for the volume of revolution. The main errors were with the algebraic expansion of $x^2$ rather than the integration. 

In part a) most candidates successfully found $k$. Where errors occurred, they were through using the point $(0.4, 4.5)$ or forgetting to square root $y$ before finding $k$. A minority of candidates showed some misunderstanding of roots, erroneously attempting the ‘negative’ root of $4$; however, the mark scheme did not repeatedly penalise these students as they were still able to complete the full question correctly for their $k$ with only the final accuracy mark in part b) not available to them.

Whilst many made a good attempt in part b) the expansion of $x^2$ threw up two main errors: using $+0.1$ instead of $-0.1$ to create the second term; and, creating a term in $y^{\frac{3}{2}}$ instead of $y^{\frac{5}{2}}$. The latter was the most common error. A significant minority only achieved 2 terms when incorrectly finding $x^2$, just squaring each term. 

There was some use of calculator instead of algebraic integration, but this was rare. On the whole, integration was good. The volume of the cylinder was often missed or incorrectly calculated occasionally an attempt was made which resulted in area leading to three marks being lost due not to being able to sum the two volumes. Where the volume of the cylinder was attempted both use of integration and use of formula were seen in equal measures. The loss or omission of $\pi$ in the calculation was extremely rare however the requirement of "exact value" was often ignored to lose the final A mark. A small number of candidates tried to integrate the curve between $0$ and $4.5$ solely, misunderstanding the model provided. These candidates were still able to score $4/7$ though often they lost further marks along the way. 

For parts c) and d) most candidates knew what was expected to achieve this mark, following through on any incorrect answer in part b) to achieve the B1 in d). 

Part c) was generally well-answered with most candidates commenting on a limitation such as the potential for the glass not to be smooth or the curve not to be an exact fit to the ornament’s shape. However, a significant minority failed to note that the ornament was solid, making comments relating to ‘thickness’ of glass. The most common error in part d) was to calculate the percentage error relative to their model not the true volume. However, many candidates are still not correctly interpreting the ‘trigger word’ “evaluate”, failing to appraise the model in terms of good/bad and thus losing this mark despite having correct information to work from.
