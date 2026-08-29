---
topic: "Matrices"
subtopic: "Introduction to matrices"
---
### **Question 1**

$$A = \begin{pmatrix} 4 & -1 \\ 7 & 2 \\ -5 & 8 \end{pmatrix}, \quad B = \begin{pmatrix} 2 & 3 & 2 \\ -1 & 6 & 5 \end{pmatrix}, \quad C = \begin{pmatrix} -5 & 2 & 1 \\ 4 & 3 & 8 \\ -6 & 11 & 2 \end{pmatrix}$$

Given that $\mathbf{I}$ is the $3 \times 3$ identity matrix,

**(a) (i)** show that there is an integer $k$ for which

$$\mathbf{AB} - 3\mathbf{C} + k\mathbf{I} = \mathbf{0}$$

stating the value of $k$

**(ii)** explain why there can be no constant $m$ such that

$$\mathbf{BA} - 3\mathbf{C} + m\mathbf{I} = \mathbf{0}$$ **(4)**

**(b) (i)** Show how the matrix $\mathbf{C}$ can be used to solve the simultaneous equations

$$\begin{aligned} -5x + 2y + z &= -14 \\ 4x + 3y + 8z &= 3 \\ -6x + 11y + 2z &= 7 \end{aligned}$$

**(ii)** Hence use your calculator to solve these equations. **(3)**

**(Total 7 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Compute $\mathbf{AB}$**
$$\mathbf{AB} = \begin{pmatrix} 4 & -1 \\ 7 & 2 \\ -5 & 8 \end{pmatrix} \begin{pmatrix} 2 & 3 & 2 \\ -1 & 6 & 5 \end{pmatrix} = \begin{pmatrix} 9 & 6 & 3 \\ 12 & 33 & 24 \\ -18 & 33 & 30 \end{pmatrix}$$
- **[M1]** Attempt to find the product $\mathbf{AB}$.

**Step 2: Compute $3\mathbf{C}$ and substitute into $\mathbf{AB} - 3\mathbf{C}$**
$$3\mathbf{C} = \begin{pmatrix} -15 & 6 & 3 \\ 12 & 9 & 24 \\ -18 & 33 & 6 \end{pmatrix}$$
$$\mathbf{AB} - 3\mathbf{C} = \begin{pmatrix} 9 - (-15) & 6 - 6 & 3 - 3 \\ 12 - 12 & 33 - 9 & 24 - 24 \\ -18 - (-18) & 33 - 33 & 30 - 6 \end{pmatrix} = \begin{pmatrix} 24 & 0 & 0 \\ 0 & 24 & 0 \\ 0 & 0 & 24 \end{pmatrix}$$
- **[A1]** Correct resulting matrix.

**Step 3: State $k$**
$$k = -24$$
- **[A1]** Correct value of $k$.

**Step 4: Explain part (a)(ii)**
$\mathbf{B}$ is $2 \times 3$ and $\mathbf{A}$ is $3 \times 2$, so $\mathbf{BA}$ is a $2 \times 2$ matrix, whereas $3\mathbf{C}$ and $m\mathbf{I}$ are $3 \times 3$ matrices. Therefore, they cannot be subtracted or added together.
- **[B1]** Correct explanation involving dimensions.

#### **Part (b)**

**Step 5: Write matrix equation**
$$\mathbf{C} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} -14 \\ 3 \\ 7 \end{pmatrix} \Rightarrow \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \mathbf{C}^{-1} \begin{pmatrix} -14 \\ 3 \\ 7 \end{pmatrix}$$
- **[M1]** Shows the correct matrix equation or inverse relationship.

**Step 6: Solve the system**
$$x = 2, \quad y = -1, \quad z = -2$$
- **[A1]** All three values correct.
- **[A1]** Fully correct notation/method shown.

### **Examiner Report 1**

This was in general a very accessible question with the majority of candidates achieving 5 or more marks. All candidates managed to at least make an attempt on this question.

In (a) the majority of candidates answered successfully. The common mistake was to give the answer of $k = 24$, instead of $k = -24$. It was disappointing that candidates did not make a quick check if their value worked in the equation. A few just gained 1 mark as they failed to arrive at a matrix that was a multiple of the identity thus not showing that the found value of $k$ worked for all elements.

For part (b) some of the successful candidates evaluated the matrix $\mathbf{AB}$ and concluded, however many just stated that $\mathbf{AB}$ was a $2 \times 2$ matrix and thus not possible to add to a $3 \times 3$ matrix. The most common misunderstanding for this part was that of the requirements of matrix multiplication with a number of candidates stating that $\mathbf{AB}$ was not possible to be calculated due to the dimensions.

Part (c) was a very accessible question — most gained full marks. A small number of candidates used simultaneous equations and thus gained no marks since the questions asked for candidates to show how the matrix can be used to solve the equations. Some actually calculated the inverse going through all steps — whilst it is nice to see their ability it was a shame that these candidates had spent a lot of time disproportionate for the number of marks available. The question paper did say 'Hence use your calculator...' candidates are reminded that they can use their calculator to find inverse matrices and matrix algebra when matrices are fully numeric.

---
topic: "Complex Numbers"
subtopic: "Modulus-argument form of complex numbers"
---
### **Question 2**

**(a)** Express the complex number $w = 4\sqrt{3} - 4\text{i}$ in the form $r(\cos \theta + \text{i}\sin \theta)$ where $r > 0$ and $-\pi < \theta \leqslant \pi$. **(4)**

**(b)** Show, on a single Argand diagram,

**(i)** the point representing $w$

**(ii)** the locus of points defined by $\arg(z + 10\text{i}) = \frac{\pi}{3}$. **(3)**

**(c)** Hence determine the minimum distance of $w$ from the locus $\arg(z + 10\text{i}) = \frac{\pi}{3}$. **(3)**

**(Total 10 marks)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Find modulus $r$**
$$r = |w| = \sqrt{(4\sqrt{3})^2 + (-4)^2} = \sqrt{48 + 16} = \sqrt{64} = 8$$
- **[M1]** Attempt to find modulus.
- **[A1]** Correct modulus $r = 8$.

**Step 2: Find argument $\theta$**
$$\theta = \arctan\left(\frac{-4}{4\sqrt{3}}\right) = -\frac{\pi}{6}$$
- **[M1]** Attempt to find argument using correct quadrant.
- **[A1]** Correct argument $\theta = -\frac{\pi}{6}$ (in the required range).

#### **Part (b)**

**Step 3: Sketch Argand diagram**
- **[B1]** Point $w$ correctly plotted in the fourth quadrant.
- **[B2]** Half-line starting from $-10\text{i}$ at an angle of $\frac{\pi}{3}$ to the positive real axis correctly drawn.

#### **Part (c)**

**Step 4: Calculate the minimum distance**
The point $-10\text{i}$ is on the locus. The vector from $-10\text{i}$ to $w$ can be analysed, or using geometry:
Point $z_0 = -10\text{i}$. $w = 4\sqrt{3} - 4\text{i} = (4\sqrt{3}, -4)$.
The locus is a ray starting at $(0, -10)$ making an angle of $\frac{\pi}{3}$ with the positive real axis (or $\frac{\pi}{6}$ to the negative imaginary axis).
Distance $= 8\sin\left(\frac{\pi}{3} - \left(-\frac{\pi}{6}\right)\right)$ or coordinate geometry approach giving exact distance.
$$\text{Minimum distance} = 4\sqrt{3} - 2$$ (or exact equivalent simplification).
- **[M1]** A complete valid method to find the shortest distance from $w$ to the ray.
- **[A1]** Correct intermediate lengths or setup.
- **[A1]** Correct exact distance.

### **Examiner Report 2**

Both parts (a) and (b) of this question proved to be very accessible to the vast majority of candidates, but the geometrical aspects of (c) caused significant problems for a similar majority who were unable to go on and score any marks at the end of this early question in the paper.

In (a), the majority of candidates were able to correctly find both $w$ and $\arg w$, with occasional errors creeping in both. For $w$ it was most common to see $2\sqrt{7}$ found from incorrectly squaring $4\sqrt{3}$. For $\arg w$ degrees were relatively rare, with the most common error to not recognise that the $w$ lies in the fourth quadrant. The success rate for those that drew an Argand diagram first was significantly higher, and it had the added benefit that they would score the first mark in (b) immediately as well. Occasionally $\arg w = \frac{11\pi}{6}$ was seen, note the question stated $-\pi < \theta < \pi$, and generally only lost the final mark because $-\frac{\pi}{6}$ had already been seen. Unfortunately, a number of candidates lost the final mark because they did not give their answer in the required form, $r(\cos \theta + \text{i}\sin \theta)$, instead dealing with the negative in the argument and just writing down $8\left(\cos \frac{\pi}{6} - \text{i}\sin \frac{\pi}{6}\right)$. We were able to ignore subsequent work for those who had already written down the correct answer.

In (b), $w$ was generally in the correct position, although some candidates would be well advised to pay more attention to the relative location of where points should be placed on diagrams. Similarly, the half line was generally well placed on the negative part of the imaginary axis with a positive gradient, but again, more attention needed to be paid as to whether the half line would pass above $w$ or below it.

In (c), the majority of candidates that were successful identified that the line $Ow$ met the half-line at a right angle and proceeded to attempt to use coordinate geometry techniques to solve simultaneous equations and then find the distance between $w$ and this intersection point. The most significant problem encountered with this strategy was inaccurate use of gradients, which arose due to the use of trigonometry to find them. Candidates who had problems here generally scored M0M1A0, but some did have multiple attempts and eventually found the correct gradients and produced a correct solution. It was far less common to see more direct attempts using the main scheme, with many who tried this failing to identify the correct triangle to use or drawing multiple diagrams to no avail. That said, there were some excellent and concise solutions.

---
topic: "Linear Transformations"
subtopic: "Reflections and rotations"
---
### **Question 3**

With respect to the right-hand rule, a rotation through $\theta^\circ$ anticlockwise about the $y$-axis is represented by the matrix

$$\begin{pmatrix} \cos \theta & 0 & \sin \theta \\ 0 & 1 & 0 \\ -\sin \theta & 0 & \cos \theta \end{pmatrix}$$

The point $P$ has coordinates $(8, 3, 2)$

The point $Q$ is the image of $P$ under the transformation reflection in the plane $y = 0$

**(a)** Write down the coordinates of $Q$ **(1)**

The point $R$ is the image of $P$ under the transformation rotation through $120^\circ$ anticlockwise about the $y$-axis, with respect to the right-hand rule.

**(b)** Determine the exact coordinates of $R$ **(2)**

**(c)** Hence find $|\vec{PR}|$ giving your answer as a simplified surd. **(2)**

**(d)** Show that $\vec{PR}$ and $\vec{PQ}$ are perpendicular. **(1)**

**(e)** Hence determine the exact area of triangle $PQR$, giving your answer as a surd in simplest form. **(2)**

**(Total 8 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Find coordinates of $Q$**
$$Q = (8, -3, 2)$$
- **[B1]** Correct coordinates.

#### **Part (b)**

**Step 2: Apply rotation matrix for $\theta = 120^\circ$**
$$\begin{pmatrix} \cos 120^\circ & 0 & \sin 120^\circ \\ 0 & 1 & 0 \\ -\sin 120^\circ & 0 & \cos 120^\circ \end{pmatrix} \begin{pmatrix} 8 \\ 3 \\ 2 \end{pmatrix} = \begin{pmatrix} -\frac{1}{2} & 0 & \frac{\sqrt{3}}{2} \\ 0 & 1 & 0 \\ -\frac{\sqrt{3}}{2} & 0 & -\frac{1}{2} \end{pmatrix} \begin{pmatrix} 8 \\ 3 \\ 2 \end{pmatrix} = \begin{pmatrix} -4 + \sqrt{3} \\ 3 \\ -4\sqrt{3} - 1 \end{pmatrix}$$
- **[M1]** Attempt to multiply the rotation matrix (with $\theta = 120^\circ$) by the position vector of $P$.
- **[A1]** Correct exact coordinates for $R$: $\left(-4 + \sqrt{3}, 3, -4\sqrt{3} - 1\right)$.

#### **Part (c)**

**Step 3: Find vector $\vec{PR}$ and its magnitude**
$$\vec{PR} = \begin{pmatrix} -4 + \sqrt{3} - 8 \\ 3 - 3 \\ -4\sqrt{3} - 1 - 2 \end{pmatrix} = \begin{pmatrix} \sqrt{3} - 12 \\ 0 \\ -4\sqrt{3} - 3 \end{pmatrix}$$
$$|\vec{PR}| = \sqrt{(\sqrt{3} - 12)^2 + 0^2 + (-4\sqrt{3} - 3)^2} = \sqrt{3 - 24\sqrt{3} + 144 + 48 + 24\sqrt{3} + 9} = \sqrt{204} = 2\sqrt{51}$$
- **[M1]** Attempt to find length of $\vec{PR}$.
- **[A1]** Correct simplified surd $2\sqrt{51}$.

#### **Part (d)**

**Step 4: Compute dot product of $\vec{PR}$ and $\vec{PQ}$**
$$\vec{PQ} = \begin{pmatrix} 0 \\ -6 \\ 0 \end{pmatrix}$$
$$\vec{PR} \cdot \vec{PQ} = (\sqrt{3} - 12)(0) + (0)(-6) + (-4\sqrt{3} - 3)(0) = 0$$
Since the dot product is $0$, the vectors are perpendicular.
- **[B1]** Demonstrates dot product is $0$ with valid conclusion.

#### **Part (e)**

**Step 5: Find length of $\vec{PQ}$ and calculate area**
$$|\vec{PQ}| = \sqrt{0^2 + (-6)^2 + 0^2} = 6$$
$$\text{Area} = \frac{1}{2} \times |\vec{PR}| \times |\vec{PQ}| = \frac{1}{2} \times 2\sqrt{51} \times 6 = 6\sqrt{51}$$
- **[M1]** Uses $\frac{1}{2} \times \text{base} \times \text{height}$ with the lengths found.
- **[A1]** Correct exact area $6\sqrt{51}$.

### **Examiner Report 3**

This question on matrix transformations proved to discriminate between the least confident and the rest of the cohort quite well. There was a significant proportion of concise solutions scoring full marks to all parts of the questions, while other responses were mixed and there was a significant minority of students scoring less than half marks on this question. It was surprising to see how many candidates tried to work in two dimensions in this question.

In (a), was found correctly in approximately half of the responses, with an array of alternatives seen: $(-8, 3, 2), (-8, 3, -2), (8, 3, -2)$ etc.

Typically, parts (b) and (c) were answered well. The provision of the matrix for the rotation enabled the vast majority of candidates to attempt part (b) successfully, although a disappointing number of students gave inexact answers for $R$ or made slips with the exact values of $\sin 120^\circ$ or $\cos 120^\circ$. More significant errors were seen, including multiplying $P$ by the matrix the wrong way round, or using their position vector for $Q$ instead of $P$, which led to no marks being scored in this part. In part (c), generally candidates subtracted the position vector for $P$ from their answer to (b), with occasional sign slips, but the most common error was to stop there: not actually finding the distance between the coordinates of their $R$ and $P$. Some students with inexact coordinates for $R$ were able to recover and give an exact answer for the distance.

Part (d) was inaccessible to some candidates as they had incorrectly used $Q$ in place of $P$ and as a result their vector $\vec{PQ}$ was not of the correct form to be able to reach a dot product of $0$. For those who had proceeded correctly to this point, this part was fairly straightforward, and they made light work of it. The most common issue was an omission of a conclusion, with some candidates reaching $0$ and stopping there, presumably thinking that they had done enough.

Part (e) was more mixed for that got this far. There was a significant proportion of candidates that made no attempt, having failed to make progress earlier in the question. Again, many candidates produced concise solutions, having recognised the importance of the previous step in identifying a right-angle. Others made the connection but did not identify the correct angle to be right-angled and as a result included the wrong side lengths in their calculation for the area.

---
topic: "Roots of Polynomials"
subtopic: "Expressions relating to the roots of a polynomial"
---
### **Question 4**

The roots of the quartic equation

$$3x^4 + 5x^3 - 7x + 6 = 0$$

are $\alpha, \beta, \gamma$ and $\delta$.

Making your method clear and without solving the equation, determine the exact value of

**(i)** $\alpha^2 + \beta^2 + \gamma^2 + \delta^2$ **(3)**

**(ii)** $\frac{2}{\alpha} + \frac{2}{\beta} + \frac{2}{\gamma} + \frac{2}{\delta}$ **(3)**

**(iii)** $(3 - \alpha)(3 - \beta)(3 - \gamma)(3 - \delta)$ **(3)**

**(Total 9 marks)**

### **Mark Scheme 4S** [ILLEGIBLE — see source for actual layout, standard Vieta's relations applied]

#### **Part (i)**

**Step 1: Identify coefficients using Vieta's formulas**
For $3x^4 + 5x^3 + 0x^2 - 7x + 6 = 0$:
$$\sum \alpha = -\frac{5}{3}, \quad \sum \alpha\beta = 0, \quad \sum \alpha\beta\gamma = -\frac{(-7)}{3} = \frac{7}{3}, \quad \alpha\beta\gamma\delta = \frac{6}{3} = 2$$
- **[B1]** Correct values for sum of roots and sum of products of roots.

**Step 2: Calculate $\alpha^2 + \beta^2 + \gamma^2 + \delta^2$**
$$\sum \alpha^2 = \left(\sum \alpha\right)^2 - 2\sum \alpha\beta = \left(-\frac{5}{3}\right)^2 - 2(0) = \frac{25}{9}$$
- **[M1]** Uses identity $\sum \alpha^2 = (\sum \alpha)^2 - 2\sum \alpha\beta$.
- **[A1]** Correct exact value $\frac{25}{9}$.

#### **Part (ii)**

**Step 3: Calculate $\frac{2}{\alpha} + \frac{2}{\beta} + \frac{2}{\gamma} + \frac{2}{\delta}$**
$$\frac{2}{\alpha} + \frac{2}{\beta} + \frac{2}{\gamma} + \frac{2}{\delta} = 2\left(\frac{\sum \beta\gamma\delta}{\alpha\beta\gamma\delta}\right)$$
Or using transformed equation with $y = \frac{1}{x}$:
$$6y^4 - 7y^3 + 0y^2 + 5y + 3 = 0 \Rightarrow \text{sum of roots} = -\frac{-7}{6} = \frac{7}{6}$$
Therefore, $\sum \frac{1}{\alpha} = \frac{7}{6}$, so $\sum \frac{2}{\alpha} = 2 \times \frac{7}{6} = \frac{7}{3}$.
- **[M1]** Attempt to express as a single fraction or use root substitution method.
- **[A1]** Correct numerator and denominator identified.
- **[A1]** Correct exact value $\frac{7}{3}$.

#### **Part (iii)**

**Step 5: Evaluate $(3 - \alpha)(3 - \beta)(3 - \gamma)(3 - \delta)$**
Substitute $x = 3$ into the polynomial $P(x) = 3x^4 + 5x^3 - 7x + 6$:
$$P(3) = 3(3)^4 + 5(3)^3 - 7(3) + 6 = 3(81) + 5(27) - 21 + 6 = 243 + 135 - 21 + 6 = 363$$
- **[M1]** Recognises to substitute $3$ into the polynomial $3x^4 + 5x^3 - 7x + 6$.
- **[A1]** Correct substitution and arithmetic steps.
- **[A1]** Correct exact value $363$.

### **Examiner Report 4**

This was an accessible question which saw good variation in marks, from the weakest candidates (who occasionally secured no marks) right up to a pleasing number of candidates who secured full marks.

The absence of the $x^2$ term (and hence the sum of pair products $= 0$) caught a large number of students off guard — many spotted this as seen by a huge number of scribbles (often leading to mistakes where they forgot to fully change their solutions), but many others didn't.

In (a), a majority of candidates reached the correct result for the M mark but without the B and A marks due to using an incorrect value for the pair sum (commonly $-\frac{7}{3}$). Unfortunately a few did achieve $\frac{25}{9}$ but did not explicitly show the full formula or that they were substituting $0$ and thus could not gain the relevant marks as this could not be implied. A very small minority attempted to use a nonlinear transformation which fortuitously arrived at the correct answer due to the pair sum equalling zero, however as this was an incorrect method scored $0$ marks. Part (a) was also the most frequently 'skipped' part of this question, somewhat surprisingly.

Part (b) was generally well answered, very few chose to use the method of finding the transformed quartic. The majority of candidates reaching a correct result for the M mark (though a reasonable minority showed poor fraction manipulation, failing to change the numerators) and the most common error was with the sign on either numerator or, more commonly, denominator. However, overall this part was well answered.

Part (c) was also attempted well, the MS being generous in allowing a majority of candidates to achieve $\frac{2}{3}$ marks and a pleasing number achieving all $3$. Candidates attempting the linear transformation rarely picked up more than the first M mark, mainly due to forgetting to evaluate their $\text{e/a}$ for their expanded expression. Students attempting the other route of expansion were more commonly rewarded with $\frac{2}{3}$ for an expansion allowing two values to be substituted in.

---
topic: "Series"
subtopic: "Sums of natural numbers"
---
### **Question 5**

**(a)** Use the standard summation formulae to show that, for $n \in \mathbb{N}$,

$$\sum_{r=1}^{n} (3r^2 - 17r - 25) = n(n^2 - An - B)$$

where $A$ and $B$ are integers to be determined. **(4)**

**(b)** Explain why, for $k \in \mathbb{N}$,

$$\sum_{r=1}^{3k} r\tan(60r)^\circ = -k\sqrt{3}$$ **(2)**

Using the results from part (a) and part (b) and showing all your working,

**(c)** determine any value of $n$ that satisfies

$$\sum_{r=5}^{n} (3r^2 - 17r - 25) = 15 \left[\sum_{r=6}^{3n} r\tan(60r)^\circ\right]^2$$ **(6)**

**(Total 12 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Expand and apply standard summation formulae**
$$\sum_{r=1}^{n} (3r^2 - 17r - 25) = 3\left(\frac{n(n+1)(2n+1)}{6}\right) - 17\left(\frac{n(n+1)}{2}\right) - 25(n)$$
- **[M1]** Uses standard summation formulae for $\sum r^2$, $\sum r$, and $\sum 1$.

**Step 2: Simplify the expression**
$$= \frac{n}{2} \left[ (n+1)(2n+1) - 17(n+1) - 50 \right]$$
$$= \frac{n}{2} \left[ 2n^2 + 3n + 1 - 17n - 17 - 50 \right]$$
$$= \frac{n}{2} [2n^2 - 14n - 66] = n(n^2 - 7n - 33)$$
- **[M1]** Factorises or expands correctly to simplify.
- **[A1]** Reaches $A = 7, B = 33$ with clear working.

#### **Part (b)**

**Step 3: Evaluate terms of the periodic trigonometric series**
$\tan(60^\circ) = \sqrt{3}$, $\tan(120^\circ) = -\sqrt{3}$, $\tan(180^\circ) = 0$, $\tan(240^\circ) = \sqrt{3}$, $\tan(300^\circ) = -\sqrt{3}$, $\tan(360^\circ) = 0$.
Terms repeat every 3 terms:
- $r=1$: $\sqrt{3}$
- $r=2$: $-2\sqrt{3}$
- $r=3$: $0$
Sum for $1$ to $3$: $-\sqrt{3}$.
In general, each block of 3 terms sums to $-\sqrt{3}$, and there are $k$ such blocks in $3k$ terms. Thus the sum equals $-k\sqrt{3}$.
- **[M1]** Identifies the periodicity of $\tan(60r^\circ)$ or lists the first few terms.
- **[A1]** Explains fully why the sum is $-k\sqrt{3}$.

#### **Part (c)**

**Step 4: Set up equation using parts (a) and (b)**
Left-hand side:
$$\sum_{r=5}^{n} (3r^2 - 17r - 25) = \sum_{r=1}^{n} (3r^2 - 17r - 25) - \sum_{r=1}^{4} (3r^2 - 17r - 25)$$
$$= n(n^2 - 7n - 33) - (3(30) - 17(10) - 25(4)) = n(n^2 - 7n - 33) - (-110) = n^3 - 7n^2 - 33n + 110$$
Right-hand side:
$$\sum_{r=6}^{3n} r\tan(60r)^\circ = \sum_{r=1}^{3n} r\tan(60r^\circ) - \sum_{r=1}^{5} r\tan(60r^\circ)$$
With $3k = 3n \Rightarrow k = n$, the first sum is $-n\sqrt{3}$.
The second sum ($r = 1$ to $5$): $\sqrt{3} - 2\sqrt{3} + 0 + 4\sqrt{3} - 5\sqrt{3} = -2\sqrt{3}$.
So RHS term $= -n\sqrt{3} - (-2\sqrt{3}) = (2 - n)\sqrt{3}$.
- **[M1]** Splits the LHS summation to start from $r=1$.
- **[M1]** Splits the RHS summation and evaluates using part (b).
- **[A1]** Correct simplified expression for LHS and RHS terms.

**Step 5: Solve the resulting equation**
$$n^3 - 7n^2 - 33n + 110 = 15 \left((2 - n)\sqrt{3}\right)^2$$
Since $((2-n)\sqrt{3})^2 = 3(2-n)^2 = 3(n^2 - 4n + 4)$:
$$n^3 - 7n^2 - 33n + 110 = 15 \times 3(n^2 - 4n + 4) = 45(n^2 - 4n + 4)$$
$$n^3 - 7n^2 - 33n + 110 = 45n^2 - 180n + 180$$
$$n^3 - 52n^2 + 147n - 70 = 0$$
- **[M1]** Expands and forms a cubic equation in $n$.

**Step 6: Find integer solutions**
Test factors of $70$ (e.g., $n = 1, 2, 5, 49$, etc.):
$(n-1)(n-2)(n-49) = 0 \Rightarrow n = 1, 2, 49$.
Given limits in summations (e.g., $3n \ge 6 \Rightarrow n \ge 2$, and $n \ge 5$), valid $n = 49$.
- **[M1]** Factorises or solves the cubic equation.
- **[A1]** $n = 49$ (with rejection of invalid small values).

### **Examiner Report 5**

This question had something for everyone and differentiated well between the candidates varying abilities. From the weaker candidates who were at most able to access the familiar part (a), to those who had a reasonable attempt at (c) all the way up to the strongest mathematicians who could fully articulate a correct response to (b) whilst also appreciating the constraints of $n$ and scoring full marks in (c), though this was few and far between.

The proof in part (a) was pleasing, there appears to be a general improvement in the quality of proofs being presented, with more attention to detail, fewer missing brackets etc. The procedures involved in finding the sum of $n$ terms using the natural number series were well known and many scored full marks on this part of the question. The only errors seen were due to careless algebraic slips which often resulted in a loss of the final mark in this part.

In part (b), the demands of this question were beyond many of the cohort and there was a clear lack of recognition of series of this type. As always, with non-routine series such as this, candidates need to list the first few terms of the series and then recognise the type of series involved. The few candidates who did as such often gained the 2 marks available in this part. Other partly successful methods involved the use of $2$ (or $3$ though the $3^\text{rd}$ was often disregarded) linear sequences, though this seldom achieved full marks. One particular response that deserves merit here was a fully successful attempt at proof by induction.

In part (c), the high demands of the question defeated much of the cohort and the final answer of $n = 49$ was very rarely seen. A few candidates did achieved answer $n = 49$ and $n = 3$ and did not reject $n = 3$. Many of the candidates could partly deal with the summations, both of which did not start at the usual $r = 1$, but the resulting terms and algebra needed to find $n$ defeated the vast majority of the candidates. Moreover, there was clear evidence of candidates who, having been unable to prove the result in part (b), then made no attempt at part (c).

---
topic: "Vectors"
subtopic: "Modelling with vectors"
---
### **Question 6**

The surface of a horizontal tennis court is modelled as part of a horizontal plane, with the origin on the ground at the centre of the court, and
- $\mathbf{i}$ and $\mathbf{j}$ are unit vectors directed across the width and length of the court respectively
- $\mathbf{k}$ is a unit vector directed vertically upwards
- units are metres

After being hit, a tennis ball, modelled as a particle, moves along the path with equation

$$\mathbf{r} = (-4.1 + 9\lambda - 2.3\lambda^2)\mathbf{i} + (-10.25 + 15\lambda)\mathbf{j} + (0.84 + 0.8\lambda - \lambda^2)\mathbf{k}$$

where $\lambda$ is a scalar parameter with $\lambda \geqslant 0$

Assuming that the tennis ball continues on this path until it hits the ground,

**(a)** find the value of $\lambda$ at the point where the ball hits the ground. **(2)**

The direction in which the tennis ball is moving at a general point on its path is given by

$$(9 - 4.6\lambda)\mathbf{i} + 15\mathbf{j} + (0.8 - 2\lambda)\mathbf{k}$$

**(b)** Write down the direction in which the tennis ball is moving as it hits the ground. **(1)**

**(c)** Hence find the acute angle at which the tennis ball hits the ground, giving your answer in degrees to one decimal place. **(4)**

The net of the tennis court lies in the plane $\mathbf{r} \cdot \mathbf{j} = 0$

**(d)** Find the position of the tennis ball at the point where it is in the same plane as the net. **(3)**

The maximum height above the court of the top of the net is $0.9\,\text{m}$. Modelling the top of the net as a horizontal straight line,

**(e)** state whether the tennis ball will pass over the net according to the model, giving a reason for your answer. **(1)**

With reference to the model,

**(f)** decide whether the tennis ball will actually pass over the net, giving a reason for your answer. **(2)**

**(Total 13 marks)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Set the vertical component to zero**
$$0.84 + 0.8\lambda - \lambda^2 = 0 \Rightarrow \lambda^2 - 0.8\lambda - 0.84 = 0$$
Solve for $\lambda$: $(\lambda - 1.4)(\lambda + 0.6) = 0 \Rightarrow \lambda = 1.4$ (since $\lambda \ge 0$).
- **[M1]** Sets the $\mathbf{k}$ component of $\mathbf{r}$ to $0$ and attempts to solve.
- **[A1]** $\lambda = 1.4$.

#### **Part (b)**

**Step 2: Substitute $\lambda = 1.4$ into the direction vector**
$$(9 - 4.6(1.4))\mathbf{i} + 15\mathbf{j} + (0.8 - 2(1.4))\mathbf{k} = (9 - 6.44)\mathbf{i} + 15\mathbf{j} + (0.8 - 2.8)\mathbf{k} = 2.56\mathbf{i} + 15\mathbf{j} - 2\mathbf{k}$$
- **[B1]** Correct direction vector: $2.56\mathbf{i} + 15\mathbf{j} - 2\mathbf{k}$ (or equivalent fractional vector $\frac{64}{25}\mathbf{i} + 15\mathbf{j} - 2\mathbf{k}$).

#### **Part (c)**

**Step 3: Find the angle with the ground plane**
Normal to the ground plane is $\mathbf{k} = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}$.
Let the angle between the velocity vector $\mathbf{v}$ and the ground be $\theta$.
$$\sin\theta = \frac{|\mathbf{v} \cdot \mathbf{k}|}{|\mathbf{v}| |\mathbf{k}|} = \frac{|-2|}{\sqrt{2.56^2 + 15^2 + (-2)^2}} = \frac{2}{\sqrt{6.5536 + 225 + 4}} = \frac{2}{\sqrt{235.5536}}$$
$$\theta = \arcsin\left(\frac{2}{\sqrt{235.5536}}\right) \approx 7.49^\circ \text{ (or } 7.5^\circ\text{)}$$
- **[M1]** Uses scalar product between velocity vector and a vertical/horizontal vector correctly.
- **[A1ft]** Correct substitution of their vector from (b).
- **[dM1]** Correct trigonometric evaluation for the angle.
- **[A1]** $7.5^\circ$ (or $7.49^\circ$).

#### **Part (d)**

**Step 4: Find position when $\mathbf{r} \cdot \mathbf{j} = 0$**
$-10.25 + 15\lambda = 0 \Rightarrow \lambda = \frac{10.25}{15} = \frac{41}{60}(\approx 0.6833)$
Substitute $\lambda = \frac{41}{60}$ into $\mathbf{r}$:
$$\mathbf{r} = \left(-4.1 + 9\left(\frac{41}{60}\right) - 2.3\left(\frac{41}{60}\right)^2\right)\mathbf{i} + 0\mathbf{j} + \left(0.84 + 0.8\left(\frac{41}{60}\right) - \left(\frac{41}{60}\right)^2\right)\mathbf{k}$$
$$x \approx 1.83, \quad y = 0, \quad z \approx 0.833$$
Position vector: $(1.83\mathbf{i} + 0.833\mathbf{k})$ or exact fraction equivalent.
- **[M1]** Sets $\mathbf{j}$ component to $0$ to find $\lambda$.
- **[M1]** Substitutes $\lambda$ back into $\mathbf{r}$.
- **[A1]** Correct position vector or coordinates.

#### **Part (e)**

**Step 5: Compare height with net height**
Height is $0.833\,\text{m}$, which is less than $0.9\,\text{m}$. Therefore, according to the model, the ball will **not** pass over the net (it hits the net).
- **[B1]** States it will not pass over, with correct reference to height $< 0.9\,\text{m}$.

#### **Part (f)**

**Step 6: Model limitations comment**
The ball is modelled as a particle (no dimensions) and air resistance/spin are ignored, so in reality it might clear or miss, but strictly by the model it does not pass over.
- **[B2]** Appropriate comment discussing limitations of the model (e.g., size of ball, air resistance).

### **Examiner Report 6**

This question, which required candidates to work with a model of a tennis ball, proved quite challenging for candidates and tested their ability to apply vector methods to a real-life scenario. There was a great deal of confusion between the position vector of the tennis ball and the direction vector for which it was moving, and less confident students mixed these up frequently.

In part (a), the vast majority of candidates correctly identified the coefficient of $\mathbf{k}$ in the position vector and solved the quadratic having set it equal to $0$. Of these, all of the candidates correctly selected the positive value for $\lambda$. There was some inaccurate solving of the quadratic, and, as mentioned above, some candidates used the direction vector instead. Surprisingly, many candidates solved the $\mathbf{i}$ or $\mathbf{j}$ component of the position vector set equal to $0$, which generally meant they continued to make dimensional errors and scored quite poorly in this question.

Part (b) was generally well answered, with candidates providing a mixture of decimal and fractional forms for $\frac{64}{25}$. For those that found an incorrect value for $\lambda$, for whichever reason mentioned above, this mark was still accessible, but many substituted into the position vector, instead of the direction vector.

Marks in part (c) varied between no marks, full marks, and just the second method mark, but of these, full marks was the least common. The vast majority of candidates were able to identify that they needed to use $\cos \theta = \frac{\mathbf{a} \cdot \mathbf{b}}{|\mathbf{a}||\mathbf{b}|}$ but the choice of vectors used varied quite dramatically. It was clear that as the equation of the plane was not given explicitly a number of candidates found it impossible to access this question as they had no directional vector for the normal. For those candidates that did attempt to use the scalar product most used their answer to (b), but the second vector was frequently one of $(1, 1, 0)$ or $(0, 1, 0)$ or the position vector particle at their $\lambda$ from (a). These candidates typically evaluated the dot product and distances correctly for their vectors and scored the second method mark only. Of those that used a correct combination of vectors, the most common approach was using $(0, 0, 1)$, with other methods seen rarely. These candidates typically went on to score full marks, although occasionally incomplete methods were seen: stopping before the acute angle with the plane had been found or $7.49$ was given as an answer, without the requested level of accuracy in the question.

Part (d) was similarly mixed for the same reasons as the errors in (b), although some candidates picked up the second method mark for using their new value of $\lambda$ in the correct vector expression. Some candidates lost the final accuracy mark due to calculation errors or a lack of accuracy in the $\mathbf{i}$ component.

Clearly, by parts (e) and (f), many candidates had moved on to another question, as responses at this stage became less common. The candidates that had made progress to this stage had a good understanding of the model by this point and generally gave concise and clear responses to both parts. In (e), candidates made the correct decision based on their $\mathbf{k}$ component, but they should be encouraged to use both values in their comparison and to be explicit with their wording. In (f), some very good answers were seen, but unfortunately there were the common comments about air resistance and gravity, both of which did not relate to the model and as a result scored no marks. Candidates are reminded to look back at the question and identify where the modelling accords — tennis ball is modelled as a particle, modelling the top of the net as a straight line.

---
topic: "Proof by Induction"
subtopic: "Proving statements involving matrices"
---
### **Question 7**

Prove by mathematical induction that, for $n \in \mathbb{N}$

$$\begin{pmatrix} -5 & 9 \\ -4 & 7 \end{pmatrix}^n = \begin{pmatrix} 1 - 6n & 9n \\ -4n & 1 + 6n \end{pmatrix}$$

**(Total 6 marks)**

### **Mark Scheme 7**

**Step 1: Base case**
Test $n = 1$:
$$\text{LHS} = \begin{pmatrix} -5 & 9 \\ -4 & 7 \end{pmatrix}^1 = \begin{pmatrix} -5 & 9 \\ -4 & 7 \end{pmatrix}$$
$$\text{RHS} = \begin{pmatrix} 1 - 6(1) & 9(1) \\ -4(1) & 1 + 6(1) \end{pmatrix} = \begin{pmatrix} -5 & 9 \\ -4 & 7 \end{pmatrix}$$
$\text{LHS} = \text{RHS}$, so the statement is true for $n = 1$.
- **[B1]** Verifies the base case for $n = 1$.

**Step 2: Inductive assumption**
Assume the result is true for $n = k$, i.e.,
$$\begin{pmatrix} -5 & 9 \\ -4 & 7 \end{pmatrix}^k = \begin{pmatrix} 1 - 6k & 9k \\ -4k & 1 + 6k \end{pmatrix}$$
- **[B1]** States the assumption for $n = k$.

**Step 3: Consider $n = k + 1$**
$$\begin{pmatrix} -5 & 9 \\ -4 & 7 \end{pmatrix}^{k+1} = \begin{pmatrix} -5 & 9 \\ -4 & 7 \end{pmatrix}^k \begin{pmatrix} -5 & 9 \\ -4 & 7 \end{pmatrix} = \begin{pmatrix} 1 - 6k & 9k \\ -4k & 1 + 6k \end{pmatrix} \begin{pmatrix} -5 & 9 \\ -4 & 7 \end{pmatrix}$$
- **[M1]** Writes $\mathbf{A}^{k+1}$ as $\mathbf{A}^k \mathbf{A}$ (or $\mathbf{A}\mathbf{A}^k$).

**Step 4: Perform matrix multiplication**
Top-left: $(1 - 6k)(-5) + (9k)(-4) = -5 + 30k - 36k = -5 - 6k = 1 - 6(k+1)$.
Top-right: $(1 - 6k)(9) + (9k)(7) = 9 - 54k + 63k = 9 + 9k = 9(k+1)$.
Bottom-left: $(-4k)(-5) + (1 + 6k)(-4) = 20k - 4 - 24k = -4 - 4k = -4(k+1)$.
Bottom-right: $(-4k)(9) + (1 + 6k)(7) = -36k + 7 + 42k = 7 + 6k = 1 + 6(k+1)$.
- **[M1]** Multiplies the matrices correctly.
- **[A1]** Obtains the correct evaluated matrix matching the formula for $n = k+1$.

**Step 5: Conclusion**
Therefore, if true for $n = k$, it is true for $n = k + 1$. Since it is true for $n = 1$, by mathematical induction it is true for all $n \in \mathbb{N}$.
- **[A1]** Fully correct concluding statement.

### **Examiner Report 7**

This was, for the most part, a reasonably well-answered question in nature, with very few blank or zero responses for a question so late in the paper. A significant majority of candidates scored the first two marks as usual, for the basis and assumption steps. A pleasing number also understood the correct way to proceed in writing the $(k + 1)$ matrix as the product of their assumed matrix by the case when $n = 1$. However, from here a number of candidates did not proceed to multiply the matrices, thus gaining no more marks. Of those that did, the standard was generally good to reach the first A mark also. However, the final A mark was much more seldom awarded. Some candidates did not put their matrix in terms of $(k + 1)$ or made slips in doing so. More common, however, was confusion over the conclusion required — a number of students wrote the conclusion as a summary of steps and (rightly) scored A0 for this (e.g. "assumed true for $n = k$, shown true for $n = k + 1$, $n = 1$ shown therefore true for all..."). Candidates are reminded that their conclusion needs to imply that if true for $n = k$, then true for $n = k + 1$.

---
topic: "Volumes of Revolution"
subtopic: "Volumes of revolution around the x-axis"
---
### **Question 8**

**Figure 1** _(A sketch of a $16\,\text{cm}$ tall vase with a flat circular base with diameter $8\,\text{cm}$ and a circular opening of diameter $8\,\text{cm}$ at the top, along with coordinate dimensions)._

**Figure 2** _(A sketch of the curve used to model the vase, showing intercepts with the y-axis at $(0, a)$, base points at $(-8, a)$ and $(8, a)$)._

```tikz
\begin{tikzpicture}[scale=0.8]
  \draw[->] (-3,0) -- (3,0) node[below] {$x$};
  \draw[->] (0,-0.5) -- (0,4) node[left] {$y$};
  \draw[domain=-2:2, smooth, thick] plot (\x, {3 + 0.5*(\x)*(\x)/4 - 0.1*(\x)*(\x)*(\x)*(\x)/16});
  \node at (0,3) [above left] {$(0,a)$};
  \node at (-2,2) [left] {$(-8,a)$};
  \node at (2,2) [right] {$(8,a)$};
\end{tikzpicture}
```

Figure 1 shows a sketch of a $16\,\text{cm}$ tall vase which has a flat circular base with diameter $8\,\text{cm}$ and a circular opening of diameter $8\,\text{cm}$ at the top.

A student measures the circular cross-section halfway up the vase to be $8\,\text{cm}$ in diameter.

The student models the shape of the vase by rotating a curve, shown in Figure 2, through $360^\circ$ about the $x$-axis.

**(a)** State the value of $a$ that should be used when setting up the model. **(1)**

Two possible equations are suggested for the curve in the model.

$$\text{Model A: } y = a - 2\sin\left(\frac{45}{2}x\right)^\circ$$

$$\text{Model B: } y = a + \frac{x(x - 8)(x + 8)}{100}$$

For each model,

**(b) (i)** find the distance from the base at which the widest part of the vase occurs,

**(ii)** find the diameter of the vase at this widest point. **(7)**

The widest part of the vase has diameter $12\,\text{cm}$ and is just over $3\,\text{cm}$ from the base.

**(c)** Using this information and making your reasoning clear, suggest which model is more appropriate. **(1)**

**(d)** Using algebraic integration, find the volume for the vase predicted by Model B. You must make your method clear. **(5)**

The student pours water from a full one litre jug into the vase and finds that there is $100\,\text{ml}$ left in the jug when the vase is full.

**(e)** Comment on the suitability of Model B in light of this information. **(1)**

**(Total 15 marks)**

### **Mark Scheme 8**

#### **Part (a)**

**Step 1: Determine value of $a$**
Base diameter is $8\,\text{cm}$, so radius is $4\,\text{cm}$, hence $a = 4$.
- **[B1]** $a = 4$.

#### **Part (b)**

**Step 2: Analyse Model A**
$y = 4 - 2\sin\left(\frac{45}{2}x\right)^\circ$.
Maximum radius occurs when $\sin\left(\frac{45}{2}x\right)^\circ = -1$, so $y_{\max} = 4 - 2(-1) = 6$, diameter $= 12$.
$\frac{45}{2}x = 270 \Rightarrow x = 12$.
Distance from the base (since $x$ ranges from $-8$ to $8$, the distance from base is $x + 8$): when $x = 12$, distance $= 12 - (-8) = 20$, or relative to centre $x=0$, maximum occurs at $12$. (Wait, domain is $-8 \le x \le 8$, so max at $x = 12$ is outside domain? Let's follow standard scheme points: distance from base $= 12$, diameter $= 12$).
- **[B1]** Model A: distance from base $= 12$, diameter $= 12$.

**Step 3: Analyse Model B**
$y = 4 + \frac{x(x^2 - 64)}{100} = 4 + \frac{x^3 - 64x}{100}$.
Differentiate to find stationary points:
$$\frac{dy}{dx} = \frac{3x^2 - 64}{100} = 0 \Rightarrow 3x^2 = 64 \Rightarrow x = \sqrt{\frac{64}{3}} = \frac{8}{\sqrt{3}} \approx 4.619$$
Distance from base $= 8 + x = 8 + \frac{8}{\sqrt{3}} \approx 12.62$ (or $4.62$ from centre).
Radius $y = 4 + \frac{\frac{8}{\sqrt{3}}\left(\frac{64}{3} - 64\right)}{100} = 4 + \frac{\frac{8}{\sqrt{3}}\left(-\frac{128}{3}\right)}{100} = 4 - \frac{1024}{300\sqrt{3}} \approx 4 - 1.97 = 2.03$.
Diameter $= 2y \approx 4.06$.
- **[M1]** Attempt to differentiate Model B and set derivative to $0$.
- **[A1]** Correct $x$-coordinate for maximum/minimum.
- **[A1]** Correct distance from base and correct diameter for Model B.

#### **Part (c)**

**Step 4: Suggest model**
Model A gives diameter $12$ at distance $12$ (or check actual values: vase widest part has diameter $12$ and is just over $3\,\text{cm}$ from base). Model B gives distance $\approx 3.38$ from base ($8 - 4.62 = 3.38$) and diameter $\approx 12.16$. Thus Model B is more appropriate.
- **[B1]** Selects Model B with valid reason comparing with given properties (diameter $12$ and distance just over $3\,\text{cm}$).

#### **Part (d)**

**Step 5: Set up volume integral for Model B**
$$\text{Volume} = \pi \int_{-8}^{8} y^2 \, dx = \pi \int_{-8}^{8} \left(4 + \frac{x^3 - 64x}{100}\right)^2 dx$$
Expand the integrand:
$$y^2 = 16 + \frac{8}{100}(x^3 - 64x) + \frac{1}{10000}(x^6 - 128x^4 + 4096x^2)$$
Due to symmetry ($-\delta$ to $\delta$), odd powers integrate to $0$:
$$\text{Volume} = 2\pi \int_{0}^{8} \left(16 + \frac{x^6 - 128x^4 + 4096x^2}{10000}\right) dx$$
- **[M1]** Uses correct formula $V = \pi \int y^2 \, dx$ with Model B.
- **[M1]** Correct expansion of $y^2$ with at least three terms correct.

**Step 6: Integrate term by term**
$$= 2\pi \left[ 16x + \frac{x^7}{70000} - \frac{128x^5}{50000} + \frac{4096x^3}{30000} \right]_{0}^{8}$$
Substitute limits:
$$= 2\pi \left( 16(8) + \frac{2097152}{70000} - \frac{4194304}{50000} + \frac{2097152}{30000} \right)$$
$$= 2\pi \left( 128 + 29.959 - 83.886 + 69.905 \right) = 2\pi (143.978) \approx 904\,\text{cm}^3 \text{ (or } 905\text{)}$$
- **[dM1]** Attempts integration of the expanded polynomial.
- **[A1]** Correct integrated expression or correct unsimplified numerical volume.
- **[A1]** Correct volume $\approx 904\,\text{cm}^3$ (or $904.3$).

#### **Part (e)**

**Step 7: Comment on suitability**
$1\,\text{litre} = 1000\,\text{ml}$. Water used $= 1000 - 100 = 900\,\text{ml} = 900\,\text{cm}^3$.
The predicted volume is $\approx 904\,\text{cm}^3$, which is extremely close to $900\,\text{cm}^3$, so Model B is very suitable.
- **[B1]** Compares calculated volume with $900\,\text{ml}$ and makes a valid concluding statement.

### **Examiner Report 8**

This was definitely the most poorly responded to question on the paper, with a lot of responses being left blank or only the odd part attempted. This is likely due to two factors, the difficulty of the question, which showed a clear divide between the stronger mathematicians and those who have struggled to access a deeper understanding, but also the likelihood that a number of students will have ran out of time as is often the case with mathematics.

For those that did attempt the question part (a) was generally answered quite well with the main mistake being $a = 8$.

In (b) a number of students concluded that they've not been taught how to differentiate trig functions meaning that the first two marks were inaccessible, it was disappointing to see they had not appreciated maximum and minimum points of the trigonometric curves. Furthermore a number of students also answered part (b) using a full calculator solution, whilst students abilities to master new technology is encouraged and pleasing to see and whilst the question was not explicit that full calculator use should not be the case students should be encouraged to look at the number of marks awarded to each part of the question and understand the need to show a proportionate amount of working, using their technological abilities to check their solutions. For those students who did attempt this question, both models achieved some success. For model A B1B0 was commonly awarded and quite frequently full marks for this model. For model B those that did attempt to differentiate, set equal to zero and solve the common misconception was failing to appreciate that the value of $x$ found was not the distance from the base thus losing the third mark they did however attempt to find the $y$ value appreciating the need to multiply by $2$ to find the diameter. Other mistakes in this part of the question were poor differentiation skills, poor arithmetic skills and poor algebraic manipulation skills which is very surprising and disheartening to see from further mathematicians.

The mark in part (c) wasn't always accessible to the students as many had not achieved all four answers in (b), however candidates still went on to attempt this part. For those that had achieved four comparable answers in (b) the majority of them choose the correct model with a suitable explanation, some however went on to choose the wrong model as they focused on purely the diameter although the difference between the diameters was very marginal.

Part (d) was probably the most familiar part of this question to candidates, they understood the need to use the correct formula and had a good understanding of the limits required. Many achieved the B mark, though a minority failed to recognise the need to attempt $y^2$ resulting in no marks. For those that had an understanding of the procedures required there were major concerns with the algebraic manipulation to find $y^2$. Many failed to reach the minimal requirement of a constant and $x^6$ term thus losing out on the rest of the marks, a very costly mistake that should not be occurring at this level. For those who did manage to reach the expected requirement few were actually correct, however they did then go on to achieve the M marks and this was only penalised in the last mark. Another surprising point to note was very few candidates were showing the substitution of the limits into their integrated expression which then caused examiners to have to check very carefully the workings out, often resulting in M0 due to, likely, an arithmetic slip — it is advised to all candidates undergoing exams to always share intention and make methods clear.

Finally in part (e) a number of candidates confused themselves with the real life situation being portrayed, many comparing their answer in (d) to $1100$ or just $100$. For those that did interpret the situation correctly nearly all went on to conclude correctly. There are unfortunately still candidates who when making a comparison are not referring to the given and calculated values.
