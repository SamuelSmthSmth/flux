---
topic: "Algebraic Methods"
subtopic: "The factor theorem"
---
### **Question 1**

$$\mathrm{f}(x) = 2x^3 - 5x^2 + ax + a$$

Given that $(x + 2)$ is a factor of $\mathrm{f}(x)$, find the value of the constant $a$. **(3)**

### **Mark Scheme 1**

**Step 1: Apply the factor theorem**
Set $\mathrm{f}(-2) = 0$:
$$\mathrm{f}(-2) = 2(-2)^3 - 5(-2)^2 + a(-2) + a = 0$$

- **[M1]** Attempts $\mathrm{f}(-2) = 0$ or uses algebraic division by $(x + 2)$ with remainder equated to $0$.

**Step 2: Simplify the equation**
$$-16 - 20 - 2a + a = 0 \Rightarrow -36 - a = 0$$

- **[M1]** Correctly expands and simplifies terms to obtain a linear equation in $a$.

**Step 3: Solve for $a$**
$$a = -36$$

- **[A1]** Correct value for $a$.

---
topic: "Trigonometric Identities and Equations"
subtopic: "Simple trigonometric equations"
---
### **Question 2**

Some A level students were given the following question.

Solve, for $-90^\circ < \theta < 90^\circ$, the equation
$$\cos\theta = 2\sin\theta$$

The attempts of two of the students are shown below.

| Student A | Student B |
| :--- | :--- |
| $\cos\theta = 2\sin\theta$ | $\cos\theta = 2\sin\theta$ |
| $\tan\theta = 2$ | $\cos^2\theta = 4\sin^2\theta$ |
| $\theta = 63.4^\circ$ | $1 - \sin^2\theta = 4\sin^2\theta$ |
| | $\sin^2\theta = \dfrac{1}{5}$ |
| | $\sin\theta = \pm\dfrac{1}{\sqrt{5}}$ |
| | $\theta = \pm 26.6^\circ$ |

**(a)** Identify an error made by student A. **(1)**

Student B gives $\theta = -26.6^\circ$ as one of the answers to $\cos\theta = 2\sin\theta$.

**(b)**
**(i)** Explain why this answer is incorrect.

**(ii)** Explain how this incorrect answer arose. **(2)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Identify Student A's error**
Student A incorrectly wrote $\tan\theta = 2$ instead of $\tan\theta = \frac{1}{2}$ (or divided by $\sin\theta$ instead of $\cos\theta$).

- **[B1]** States that Student A incorrectly wrote $\tan\theta = 2$ instead of $\tan\theta = \frac{1}{2}$ (or equivalent).

#### **Part (b)**

**Step 2: Explain why $\theta = -26.6^\circ$ is incorrect and how it arose**
(i) For $\theta = -26.6^\circ$, $\cos(-26.6^\circ) > 0$ while $2\sin(-26.6^\circ) < 0$, so $\cos\theta \neq 2\sin\theta$.
(ii) Squaring both sides of the equation introduced the extraneous solution to $\cos\theta = -2\sin\theta$.

- **[B1]** Explains that for $\theta = -26.6^\circ$, $\cos\theta > 0$ and $2\sin\theta < 0$, so LHS $\neq$ RHS.
- **[B1]** Explains that squaring both sides introduces extraneous roots.

---
topic: "Differentiation"
subtopic: "The product rule"
---
### **Question 3**

Given $y = x(2x + 1)^4$, show that
$$\frac{\mathrm{d}y}{\mathrm{d}x} = (2x + 1)^n (Ax + B)$$

where $n$, $A$ and $B$ are constants to be found. **(4)**

### **Mark Scheme 3**

**Step 1: Apply the product rule**
Let $u = x$ and $v = (2x + 1)^4$:
$$\frac{\mathrm{d}u}{\mathrm{d}x} = 1, \quad \frac{\mathrm{d}v}{\mathrm{d}x} = 4(2x + 1)^3 \cdot 2 = 8(2x + 1)^3$$
$$\frac{\mathrm{d}y}{\mathrm{d}x} = (2x + 1)^4 + x \cdot 8(2x + 1)^3$$

- **[M1]** Applies product rule: $\frac{\mathrm{d}y}{\mathrm{d}x} = u \frac{\mathrm{d}v}{\mathrm{d}x} + v \frac{\mathrm{d}u}{\mathrm{d}x}$.
- **[A1]** Correct derivative expression.

**Step 2: Factor out $(2x + 1)^3$**
$$\frac{\mathrm{d}y}{\mathrm{d}x} = (2x + 1)^3 \left[ (2x + 1) + 8x \right]$$

- **[M1]** Takes out factor of $(2x + 1)^3$.

**Step 3: Simplify inside the bracket**
$$\frac{\mathrm{d}y}{\mathrm{d}x} = (2x + 1)^3 (10x + 1)$$
where $n = 3, A = 10, B = 1$.

- **[A1]** Fully correct expression in the required form with $n = 3, A = 10, B = 1$.

---
topic: "Functions and Graphs"
subtopic: "Composite functions"
---
### **Question 4**

Given
$$\mathrm{f}(x) = \mathrm{e}^x, \quad x \in \mathbb{R}$$
$$\mathrm{g}(x) = 3\ln x, \quad x > 0, x \in \mathbb{R}$$

**(a)** find an expression for $\mathrm{gf}(x)$, simplifying your answer. **(2)**

**(b)** Show that there is only one real value of $x$ for which $\mathrm{gf}(x) = \mathrm{fg}(x)$ **(3)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Substitute $\mathrm{f}(x)$ into $\mathrm{g}(x)$**
$$\mathrm{gf}(x) = \mathrm{g}(\mathrm{f}(x)) = 3\ln(\mathrm{e}^x)$$

- **[M1]** Substitutes $\mathrm{f}(x)$ into $\mathrm{g}(x)$ to obtain $3\ln(\mathrm{e}^x)$.

**Step 2: Simplify $\mathrm{gf}(x)$**
$$\mathrm{gf}(x) = 3x$$

- **[A1]** Correct simplified expression $3x$.

#### **Part (b)**

**Step 3: Find $\mathrm{fg}(x)$**
$$\mathrm{fg}(x) = \mathrm{f}(\mathrm{g}(x)) = \mathrm{e}^{3\ln x} = \mathrm{e}^{\ln(x^3)} = x^3$$

- **[M1]** Finds $\mathrm{fg}(x) = x^3$.

**Step 4: Equate $\mathrm{gf}(x)$ and $\mathrm{fg}(x)$ and solve**
$$3x = x^3 \Rightarrow x^3 - 3x = 0 \Rightarrow x(x^2 - 3) = 0$$

- **[M1]** Equates $3x = x^3$ and attempts to solve.

**Step 5: Conclude the unique solution**
Since the domain of $\mathrm{g}$ is $x > 0$, $x = 0$ and $x = -\sqrt{3}$ are not valid.
$$x = \sqrt{3}$$
Hence there is only one real value of $x$.

- **[A1]** Correct value $x = \sqrt{3}$ with valid justification that other roots are outside the domain $x > 0$.

---
topic: "Exponentials and Logarithms"
subtopic: "Exponential modelling"
---
### **Question 5**

The mass, $m$ grams, of a radioactive substance, $t$ years after first being observed, is modelled by the equation
$$m = 25\mathrm{e}^{-0.05t}$$

According to the model,

**(a)** find the mass of the radioactive substance six months after it was first observed, **(2)**

**(b)** show that $\dfrac{\mathrm{d}m}{\mathrm{d}t} = km$, where $k$ is a constant to be found. **(2)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Substitute $t = 0.5$**
Six months $= 0.5$ years.
$$m = 25\mathrm{e}^{-0.05(0.5)} = 25\mathrm{e}^{-0.025} \approx 24.38...$$

- **[M1]** Substitutes $t = 0.5$ into $m = 25\mathrm{e}^{-0.05t}$.
- **[A1]** Awrt $24.4$ (g).

#### **Part (b)**

**Step 2: Differentiate $m$ with respect to $t$**
$$\frac{\mathrm{d}m}{\mathrm{d}t} = 25(-0.05)\mathrm{e}^{-0.05t} = -0.05(25\mathrm{e}^{-0.05t}) = -0.05m$$

- **[M1]** Differentiates to get $\frac{\mathrm{d}m}{\mathrm{d}t} = -0.05 \times 25\mathrm{e}^{-0.05t}$ or equivalent.
- **[A1]** Shows $\frac{\mathrm{d}m}{\mathrm{d}t} = -0.05m$ and states $k = -0.05$.

---
topic: "Algebraic Methods"
subtopic: "Mathematical proof"
---
### **Question 6**

Complete the table below. The first one has been done for you.

For each statement you must state if it is always true, sometimes true or never true, giving a reason in each case.

| Statement | Always True | Sometimes True | Never True | Reason |
| :--- | :---: | :---: | :---: | :--- |
| The quadratic equation $ax^2 + bx + c = 0$, ($a \neq 0$) has 2 real roots. | | $\checkmark$ | | It only has 2 real roots when $b^2 - 4ac > 0$. When $b^2 - 4ac = 0$ it has 1 real root and when $b^2 - 4ac < 0$ it has 0 real roots. |
| **(i)** When a real value of $x$ is substituted into $x^2 - 6x + 10$ the result is positive. | | | | **(2)** |
| **(ii)** If $ax > b$ then $x > \dfrac{b}{a}$ | | | | **(2)** |
| **(iii)** The difference between consecutive square numbers is odd. | | | | **(2)** |

### **Mark Scheme 6**

**Step 1: Statement (i)**
Always True.
Reason: $x^2 - 6x + 10 = (x - 3)^2 + 1$. Since $(x - 3)^2 \ge 0$, $(x - 3)^2 + 1 \ge 1 > 0$ for all real $x$.

- **[B1]** Selects "Always True".
- **[B1]** Gives a valid reason, e.g. completing the square $(x - 3)^2 + 1 > 0$ or discriminant $b^2 - 4ac = -4 < 0$ with positive $x^2$ coefficient.

**Step 2: Statement (ii)**
Sometimes True.
Reason: It is true when $a > 0$, but when $a < 0$, dividing by $a$ reverses the inequality to give $x < \frac{b}{a}$.

- **[B1]** Selects "Sometimes True".
- **[B1]** Gives a valid reason mentioning that if $a < 0$ the inequality direction changes.

**Step 3: Statement (iii)**
Always True.
Reason: Let the consecutive integers be $n$ and $n + 1$. Then $(n + 1)^2 - n^2 = n^2 + 2n + 1 - n^2 = 2n + 1$, which is always odd.

- **[B1]** Selects "Always True".
- **[B1]** Gives a valid algebraic proof, e.g. $(n + 1)^2 - n^2 = 2n + 1$ which is odd.

---
topic: "Binomial Expansion"
subtopic: "Expanding (a + bx)^n"
---
### **Question 7**

**(a)** Use the binomial expansion, in ascending powers of $x$, to show that
$$\sqrt{4 - x} = 2 - \frac{1}{4}x + kx^2 + \dots$$

where $k$ is a rational constant to be found. **(4)**

A student attempts to substitute $x = 1$ into both sides of this equation to find an approximate value for $\sqrt{3}$.

**(b)** State, giving a reason, if the expansion is valid for this value of $x$. **(1)**

### **Mark Scheme 7**

#### **Part (a)**

**Step 1: Factor out 4**
$$\sqrt{4 - x} = 4^{\frac{1}{2}} \left(1 - \frac{x}{4}\right)^{\frac{1}{2}} = 2 \left(1 - \frac{x}{4}\right)^{\frac{1}{2}}$$

- **[B1]** Takes out factor of 4 to get $2\left(1 - \frac{x}{4}\right)^{\frac{1}{2}}$.

**Step 2: Expand $\left(1 - \frac{x}{4}\right)^{\frac{1}{2}}$**
$$\left(1 - \frac{x}{4}\right)^{\frac{1}{2}} = 1 + \left(\frac{1}{2}\right)\left(-\frac{x}{4}\right) + \frac{\left(\frac{1}{2}\right)\left(-\frac{1}{2}\right)}{2!}\left(-\frac{x}{4}\right)^2 + \dots$$

- **[M1]** Uses correct binomial expansion structure for $(1 + cx)^n$ with $n = \frac{1}{2}$.
- **[A1]** Correct unsimplified expansion.

**Step 3: Multiply by 2 and find $k$**
$$2\left(1 - \frac{x}{8} - \frac{1}{128}x^2\right) = 2 - \frac{1}{4}x - \frac{1}{64}x^2$$
$$k = -\frac{1}{64}$$

- **[A1]** Obtains $2 - \frac{1}{4}x - \frac{1}{64}x^2$ and states $k = -\frac{1}{64}$.

#### **Part (b)**

**Step 4: Check validity for $x = 1$**
The expansion is valid for $\left|\frac{x}{4}\right| < 1 \Rightarrow |x| < 4$.
Since $|1| < 4$, the expansion is valid.

- **[B1]** States valid because $|x| < 4$ and $x = 1$ satisfies this condition.

---
topic: "Straight Line Graphs"
subtopic: "Parallel and perpendicular lines"
---
### **Question 8**

**Figure 1** shows a rectangle $ABCD$.

The point $A$ lies on the $y$-axis and the points $B$ and $D$ lie on the $x$-axis as shown in Figure 1.

**Figure 1** shows a rectangle $ABCD$ with vertex $A$ on the positive $y$-axis, $B$ on the positive $x$-axis, $D$ on the negative $x$-axis, and $C$ in the fourth quadrant.

Given that the straight line through the points $A$ and $B$ has equation $5y + 2x = 10$

**(a)** show that the straight line through the points $A$ and $D$ has equation $2y - 5x = 4$ **(4)**

**(b)** find the area of the rectangle $ABCD$. **(3)**

### **Mark Scheme 8**

#### **Part (a)**

**Step 1: Find coordinates of $A$**
For $5y + 2x = 10$, when $x = 0$:
$$5y = 10 \Rightarrow y = 2 \Rightarrow A(0, 2)$$

- **[B1]** Finds $A(0, 2)$.

**Step 2: Find the perpendicular gradient for $AD$**
Gradient of $AB$:
$$y = -\frac{2}{5}x + 2 \Rightarrow m_{AB} = -\frac{2}{5}$$
Since $AD \perp AB$:
$$m_{AD} = \frac{5}{2}$$

- **[M1]** Uses $m_1 m_2 = -1$ to find gradient of $AD$ as $\frac{5}{2}$.

**Step 3: Form equation of line $AD$**
Using $A(0, 2)$ and $m = \frac{5}{2}$:
$$y - 2 = \frac{5}{2}(x - 0) \Rightarrow 2y - 4 = 5x \Rightarrow 2y - 5x = 4$$

- **[M1]** Uses $y - y_1 = m(x - x_1)$ with $A(0, 2)$ and $m = \frac{5}{2}$.
- **[A1]** Correctly completes proof to show $2y - 5x = 4$.

#### **Part (b)**

**Step 4: Find coordinates of $B$ and $D$**
For $B$: on $5y + 2x = 10$, set $y = 0 \Rightarrow 2x = 10 \Rightarrow B(5, 0)$.
For $D$: on $2y - 5x = 4$, set $y = 0 \Rightarrow -5x = 4 \Rightarrow D\left(-\frac{4}{5}, 0\right)$.

- **[M1]** Finds $x$-intercepts $B(5, 0)$ and $D\left(-\frac{4}{5}, 0\right)$.

**Step 5: Calculate the area of rectangle $ABCD$**
$$AB = \sqrt{(5 - 0)^2 + (0 - 2)^2} = \sqrt{29}$$
$$AD = \sqrt{\left(-\frac{4}{5} - 0\right)^2 + (0 - 2)^2} = \sqrt{\frac{116}{25}} = \frac{2\sqrt{29}}{5}$$
$$\text{Area} = AB \times AD = \sqrt{29} \times \frac{2\sqrt{29}}{5} = \frac{58}{5} = 11.6$$

- **[M1]** Calculates distances $AB$ and $AD$ and multiplies them.
- **[A1]** Correct area: $11.6$ or $\frac{58}{5}$.

---
topic: "Integration"
subtopic: "Definite integrals"
---
### **Question 9**

Given that $A$ is constant and
$$\int_1^4 (3\sqrt{x} + A)\,\mathrm{d}x = 2A^2$$

show that there are exactly two possible values for $A$. **(5)**

### **Mark Scheme 9**

**Step 1: Integrate $3\sqrt{x} + A$**
$$\int (3x^{\frac{1}{2}} + A)\,\mathrm{d}x = \left[ 3 \left(\frac{x^{\frac{3}{2}}}{\frac{3}{2}}\right) + Ax \right] = \left[ 2x^{\frac{3}{2}} + Ax \right]$$

- **[M1]** Integrates $x^{\frac{1}{2}} \to x^{\frac{3}{2}}$ and $A \to Ax$.
- **[A1]** Correct integrated expression $2x^{\frac{3}{2}} + Ax$.

**Step 2: Substitute limits 4 and 1**
$$\left[ 2(4)^{\frac{3}{2}} + A(4) \right] - \left[ 2(1)^{\frac{3}{2}} + A(1) \right] = (16 + 4A) - (2 + A) = 14 + 3A$$

- **[M1]** Substitutes limits 4 and 1 into their integrated function and subtracts.

**Step 3: Form a quadratic equation**
$$14 + 3A = 2A^2 \Rightarrow 2A^2 - 3A - 14 = 0$$

- **[A1]** Correct quadratic equation $2A^2 - 3A - 14 = 0$.

**Step 4: Solve the quadratic**
$$(2A - 7)(A + 2) = 0 \Rightarrow A = \frac{7}{2} \text{ or } A = -2$$

- **[A1]** Finds $A = 3.5$ and $A = -2$ (or uses discriminant $b^2 - 4ac = 121 > 0$) to complete proof of two possible values.

---
topic: "Sequences and Series"
subtopic: "Sum to infinity"
---
### **Question 10**

In a geometric series the common ratio is $r$ and sum to $n$ terms is $S_n$

Given
$$S_\infty = \frac{8}{7} \times S_6$$

show that $r = \pm\dfrac{1}{\sqrt{k}}$, where $k$ is an integer to be found. **(4)**

### **Mark Scheme 10**

**Step 1: Write expressions for $S_\infty$ and $S_6$**
$$S_\infty = \frac{a}{1 - r}, \quad S_6 = \frac{a(1 - r^6)}{1 - r}$$

- **[M1]** Uses correct standard formulae for $S_\infty$ and $S_6$.

**Step 2: Substitute into given relation**
$$\frac{a}{1 - r} = \frac{8}{7} \left( \frac{a(1 - r^6)}{1 - r} \right)$$

- **[M1]** Sets up the equation using $S_\infty = \frac{8}{7} S_6$.

**Step 3: Simplify to find $r^6$**
$$1 = \frac{8}{7}(1 - r^6) \Rightarrow \frac{7}{8} = 1 - r^6 \Rightarrow r^6 = \frac{1}{8}$$

- **[A1]** Obtains $r^6 = \frac{1}{8}$.

**Step 4: Solve for $r$**
$$r = \pm \left(\frac{1}{8}\right)^{\frac{1}{6}} = \pm \frac{1}{(2^3)^{\frac{1}{6}}} = \pm \frac{1}{\sqrt{2}}$$
where $k = 2$.

- **[A1]** Reaches $r = \pm\frac{1}{\sqrt{2}}$ and identifies $k = 2$.

---
topic: "Functions and Graphs"
subtopic: "Solving modulus problems"
---
### **Question 11**

**Figure 2** shows a sketch of part of the graph $y = \mathrm{f}(x)$, where
$$\mathrm{f}(x) = 2|3 - x| + 5, \quad x \ge 0$$

**Figure 2** shows a V-shaped piecewise linear graph starting at $y = 11$ on the $y$-axis, decreasing to a minimum point at $(3, 5)$, and then increasing.

**(a)** State the range of $\mathrm{f}$ **(1)**

**(b)** Solve the equation
$$\mathrm{f}(x) = \frac{1}{2}x + 30$$ **(3)**

Given that the equation $\mathrm{f}(x) = k$, where $k$ is a constant, has two distinct roots,

**(c)** state the set of possible values for $k$. **(2)**

### **Mark Scheme 11**

#### **Part (a)**

**Step 1: Find the minimum value**
Minimum occurs when $|3 - x| = 0 \Rightarrow x = 3$, so $\mathrm{f}(3) = 5$.
Range: $\mathrm{f}(x) \ge 5$.

- **[B1]** $\mathrm{f}(x) \ge 5$ or $y \ge 5$.

#### **Part (b)**

**Step 2: Set up equations for $x \le 3$ and $x > 3$**
Case 1 ($x \le 3$):
$$2(3 - x) + 5 = \frac{1}{2}x + 30 \Rightarrow 11 - 2x = \frac{1}{2}x + 30 \Rightarrow \frac{5}{2}x = -19 \Rightarrow x = -7.6$$
Since domain is $x \ge 0$, reject $x = -7.6$.

Case 2 ($x > 3$):
$$2(x - 3) + 5 = \frac{1}{2}x + 30 \Rightarrow 2x - 1 = \frac{1}{2}x + 30 \Rightarrow \frac{3}{2}x = 31 \Rightarrow x = \frac{62}{3}$$

- **[M1]** Sets up linear equations for both cases.
- **[M1]** Solves to find $x = \frac{62}{3}$ (and $x = -7.6$).
- **[A1]** $x = \frac{62}{3}$ or $20\frac{2}{3}$ only.

#### **Part (c)**

**Step 3: Determine values of $k$ for two distinct roots**
$\mathrm{f}(0) = 2|3| + 5 = 11$. Minimum value is 5.
For two distinct roots: $5 < k \le 11$.

- **[B1]** Identifies boundary values 5 or 11.
- **[B1]** $5 < k \le 11$.

---
topic: "Trigonometric Identities and Equations"
subtopic: "Harder trigonometric equations"
---
### **Question 12**

**(a)** Solve, for $-180^\circ \le x < 180^\circ$, the equation
$$3\sin^2 x + \sin x + 8 = 9\cos^2 x$$

giving your answers to 2 decimal places. **(6)**

**(b)** Hence find the smallest positive solution of the equation
$$3\sin^2(2\theta - 30^\circ) + \sin(2\theta - 30^\circ) + 8 = 9\cos^2(2\theta - 30^\circ)$$

giving your answer to 2 decimal places. **(2)**

### **Mark Scheme 12**

#### **Part (a)**

**Step 1: Form a quadratic in $\sin x$**
$$3\sin^2 x + \sin x + 8 = 9(1 - \sin^2 x)$$
$$12\sin^2 x + \sin x - 1 = 0$$

- **[M1]** Uses $\cos^2 x = 1 - \sin^2 x$.
- **[A1]** Correct quadratic $12\sin^2 x + \sin x - 1 = 0$.

**Step 2: Solve for $\sin x$**
$$(4\sin x - 1)(3\sin x + 1) = 0 \Rightarrow \sin x = \frac{1}{4} \text{ or } \sin x = -\frac{1}{3}$$

- **[M1]** Solves quadratic equation for $\sin x$.

**Step 3: Find values of $x$ in $[-180^\circ, 180^\circ)$**
For $\sin x = \frac{1}{4}$:
$$x = 14.48^\circ, \quad 180^\circ - 14.48^\circ = 165.52^\circ$$
For $\sin x = -\frac{1}{3}$:
$$x = -19.47^\circ, \quad -180^\circ - (-19.47^\circ) = -160.53^\circ$$

- **[M1]** Uses inverse sine to calculate angle values.
- **[A1]** Two correct answers.
- **[A1]** All four answers correct: $x = -160.53^\circ, -19.47^\circ, 14.48^\circ, 165.52^\circ$.

#### **Part (b)**

**Step 4: Solve for smallest positive $\theta$**
Set $2\theta - 30^\circ = x \Rightarrow \theta = \frac{x + 30^\circ}{2}$.
Using $x = -19.47^\circ$:
$$\theta = \frac{-19.47^\circ + 30^\circ}{2} = 5.27^\circ$$

- **[M1]** Sets $2\theta - 30^\circ = x$ for a value of $x$ from part (a) and solves for $\theta$.
- **[A1]** $\theta = 5.27^\circ$.

---
topic: "Trigonometry and Modelling"
subtopic: "Simplifying a cos x ± b sin x"
---
### **Question 13**

**(a)** Express $10\cos\theta - 3\sin\theta$ in the form $R\cos(\theta + \alpha)$, where $R > 0$ and $0 < \alpha < 90^\circ$
Give the exact value of $R$ and give the value of $\alpha$, in degrees, to 2 decimal places. **(3)**

**Figure 3** shows a diagram of a Ferris wheel alongside a graph of $H$ against $t$.

The height above the ground, $H$ metres, of a passenger on a Ferris wheel $t$ minutes after the wheel starts turning, is modelled by the equation
$$H = a - 10\cos(80t)^\circ + 3\sin(80t)^\circ$$

where $a$ is a constant.

Figure 3 shows the graph of $H$ against $t$ for two complete cycles of the wheel.

Given that the initial height of the passenger above the ground is 1 metre,

**(b)**
**(i)** find a complete equation for the model,

**(ii)** hence find the maximum height of the passenger above the ground. **(2)**

**(c)** Find the time taken, to the nearest second, for the passenger to reach the maximum height on the second cycle.
*(Solutions based entirely on graphical or numerical methods are not acceptable.)* **(3)**

It is decided that, to increase profits, the speed of the wheel is to be increased.

**(d)** How would you adapt the equation of the model to reflect this increase in speed? **(1)**

### **Mark Scheme 13**

#### **Part (a)**

**Step 1: Equate coefficients**
$$R\cos\alpha = 10, \quad R\sin\alpha = 3$$

- **[M1]** Sets $R\cos\alpha = 10$ and $R\sin\alpha = 3$.

**Step 2: Find $R$ and $\alpha$**
$$R = \sqrt{10^2 + 3^2} = \sqrt{109}$$
$$\tan\alpha = \frac{3}{10} \Rightarrow \alpha = 16.70^\circ$$

- **[A1]** $R = \sqrt{109}$.
- **[A1]** $\alpha = 16.70^\circ$.

#### **Part (b)**

**Step 3: Find $a$ using $H(0) = 1$**
$$H(0) = a - 10 = 1 \Rightarrow a = 11$$
$$H = 11 - \sqrt{109}\cos(80t + 16.70)^\circ$$

- **[B1]** $a = 11$, giving $H = 11 - 10\cos(80t)^\circ + 3\sin(80t)^\circ$.

**Step 4: Find maximum height**
Maximum $H$ occurs when $\cos(80t + 16.70)^\circ = -1$:
$$H_{\max} = 11 + \sqrt{109} \approx 21.44\text{ m}$$

- **[B1]** $11 + \sqrt{109}$ or awrt $21.4\text{ m}$.

#### **Part (c)**

**Step 5: Solve for $t$ on the second cycle**
Maximum height requires $\cos(80t + 16.70)^\circ = -1$:
For the second cycle:
$$80t + 16.70^\circ = 540^\circ \Rightarrow 80t = 523.30^\circ \Rightarrow t = 6.54125\text{ minutes}$$

- **[M1]** Sets $80t + 16.70 = 540$.
- **[M1]** Solves for $t$.

**Step 6: Convert to minutes and seconds**
$$0.54125 \times 60 = 32.47\text{ seconds}$$
Time $= 6\text{ minutes } 32\text{ seconds}$.

- **[A1]** $6\text{ minutes } 32\text{ seconds}$ (or $392\text{ seconds}$).

#### **Part (d)**

**Step 7: Adapt the model**
Increase the coefficient of $t$ (e.g. increase 80 to a larger value).

- **[B1]** States that the value "80" should be increased.

---
topic: "Differentiation"
subtopic: "Modelling with differentiation"
---
### **Question 14**

A company decides to manufacture a soft drinks can with a capacity of $500\text{ ml}$.

The company models the can in the shape of a right circular cylinder with radius $r\text{ cm}$ and height $h\text{ cm}$.

In the model they assume that the can is made from a metal of negligible thickness.

**(a)** Prove that the total surface area, $S\text{ cm}^2$, of the can is given by
$$S = 2\pi r^2 + \frac{1000}{r}$$ **(3)**

Given that $r$ can vary,

**(b)** find the dimensions of a can that has minimum surface area. **(5)**

**(c)** With reference to the shape of the can, suggest a reason why the company may choose not to manufacture a can with minimum surface area. **(1)**

### **Mark Scheme 14**

#### **Part (a)**

**Step 1: Write volume and surface area equations**
$$V = \pi r^2 h = 500, \quad S = 2\pi r^2 + 2\pi r h$$

- **[B1]** Uses $\pi r^2 h = 500$.

**Step 2: Express $h$ in terms of $r$ and substitute**
$$h = \frac{500}{\pi r^2}$$
$$S = 2\pi r^2 + 2\pi r \left(\frac{500}{\pi r^2}\right) = 2\pi r^2 + \frac{1000}{r}$$

- **[M1]** Substitutes $h = \frac{500}{\pi r^2}$ into surface area formula.
- **[A1]** Fully correct proof.

#### **Part (b)**

**Step 3: Differentiate $S$**
$$\frac{\mathrm{d}S}{\mathrm{d}r} = 4\pi r - \frac{1000}{r^2}$$

- **[M1]** Differentiates $S$ to form $a r - b r^{-2}$.
- **[A1]** Correct derivative $4\pi r - \frac{1000}{r^2}$.

**Step 4: Set $\frac{\mathrm{d}S}{\mathrm{d}r} = 0$ and solve for $r$**
$$4\pi r - \frac{1000}{r^2} = 0 \Rightarrow 4\pi r^3 = 1000 \Rightarrow r = \left(\frac{250}{\pi}\right)^{\frac{1}{3}} \approx 4.30\text{ cm}$$

- **[M1]** Sets $\frac{\mathrm{d}S}{\mathrm{d}r} = 0$ and solves for $r$.
- **[A1]** $r = 4.30\text{ cm}$.

**Step 5: Calculate $h$**
$$h = \frac{500}{\pi (4.301)^2} \approx 8.60\text{ cm}$$

- **[A1]** $h = 8.60\text{ cm}$.

#### **Part (c)**

**Step 6: Suggest a practical reason**
The can would be relatively wide and short, which may not fit standard cup holders/vending machines or be comfortable to hold.

- **[B1]** Any sensible reason related to dimensions/practicality.

---
topic: "Integration"
subtopic: "Areas between curves and lines"
---
### **Question 15**

**Figure 4** shows a sketch of the curve $C$ with equation
$$y = 5x^{\frac{3}{2}} - 9x + 11, \quad x \ge 0$$

The point $P$ with coordinates $(4, 15)$ lies on $C$.
The line $l$ is the tangent to $C$ at the point $P$.
The region $R$, shown shaded in Figure 4, is bounded by the curve $C$, the line $l$ and the $y$-axis.

**Figure 4** shows the curve $C$ starting at $(0, 11)$, dipping down then rising through $P(4, 15)$ where a tangent line $l$ is drawn, creating a region $R$ bounded by $C$, $l$, and the $y$-axis.

Show that the area of $R$ is 24, making your method clear.
*(Solutions based entirely on graphical or numerical methods are not acceptable.)* **(10)**

### **Mark Scheme 15**

**Step 1: Differentiate curve $C$**
$$\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{15}{2}x^{\frac{1}{2}} - 9$$

- **[M1]** Differentiates $y = 5x^{\frac{3}{2}} - 9x + 11$.
- **[A1]** $\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{15}{2}x^{\frac{1}{2}} - 9$.

**Step 2: Find gradient at $P(4, 15)$**
$$m = \frac{15}{2}\sqrt{4} - 9 = 15 - 9 = 6$$

- **[M1]** Evaluates derivative at $x = 4$.

**Step 3: Equation of tangent line $l$**
$$y - 15 = 6(x - 4) \Rightarrow y = 6x - 9$$

- **[A1]** Correct equation of tangent line $l$.

**Step 4: Integrate equation of curve $C$ from $x = 0$ to $x = 4$**
$$\int_0^4 (5x^{\frac{3}{2}} - 9x + 11)\,\mathrm{d}x = \left[ 2x^{\frac{5}{2}} - \frac{9}{2}x^2 + 11x \right]_0^4$$

- **[M1]** Integrates $C$: $x^{\frac{3}{2}} \to x^{\frac{5}{2}}$.
- **[A1]** Correct integrated expression $2x^{\frac{5}{2}} - \frac{9}{2}x^2 + 11x$.

**Step 5: Calculate area under $C$**
$$\text{Area} = 2(32) - \frac{9}{2}(16) + 11(4) = 64 - 72 + 44 = 36$$

- **[M1]** Evaluates definite integral at $x = 4$.

**Step 6: Area under line $l$ from $x = 0$ to $x = 4$**
$$\int_0^4 (6x - 9)\,\mathrm{d}x = \left[ 3x^2 - 9x \right]_0^4 = 3(16) - 9(4) = 12$$

- **[M1]** Integrates line equation or uses trapezium formula.
- **[A1]** Area under line $= 12$.

**Step 7: Find area of region $R$**
$$\text{Area of } R = 36 - 12 = 24$$

- **[M1]** Subtracts area under line from area under curve.
- **[A1]** Complete proof reaching 24.

---
topic: "Integration"
subtopic: "Solving differential equations"
---
### **Question 16**

**(a)** Express $\dfrac{1}{P(11 - 2P)}$ in partial fractions. **(3)**

A population of meerkats is being studied.
The population is modelled by the differential equation
$$\frac{\mathrm{d}P}{\mathrm{d}t} = \frac{1}{22}P(11 - 2P), \quad t \ge 0, \quad 0 < P < 5.5$$

where $P$, in thousands, is the population of meerkats and $t$ is the time measured in years since the study began.

Given that there were 1000 meerkats in the population when the study began,

**(b)** determine the time taken, in years, for this population of meerkats to double, **(6)**

**(c)** show that
$$P = \frac{A}{B + C\mathrm{e}^{-\frac{1}{2}t}}$$

where $A$, $B$ and $C$ are integers to be found. **(3)**

### **Mark Scheme 16**

#### **Part (a)**

**Step 1: Set up partial fractions**
$$\frac{1}{P(11 - 2P)} = \frac{A}{P} + \frac{B}{11 - 2P} \Rightarrow 1 = A(11 - 2P) + BP$$

- **[M1]** Sets up partial fraction structure.

**Step 2: Determine $A$ and $B$**
Set $P = 0 \Rightarrow A = \frac{1}{11}$.
Set $P = 5.5 \Rightarrow B = \frac{2}{11}$.
$$\frac{1}{P(11 - 2P)} = \frac{1/11}{P} + \frac{2/11}{11 - 2P}$$

- **[A1]** One coefficient correct.
- **[A1]** Fully correct partial fractions.

#### **Part (b)**

**Step 3: Separate variables**
$$\int \frac{1}{P(11 - 2P)}\,\mathrm{d}P = \int \frac{1}{22}\,\mathrm{d}t$$

- **[M1]** Separates variables.

**Step 4: Integrate both sides**
$$\frac{1}{11}\ln P - \frac{1}{11}\ln(11 - 2P) = \frac{1}{22}t + c$$
$$\ln\left(\frac{P}{11 - 2P}\right) = \frac{1}{2}t + 11c$$

- **[M1]** Integrates LHS using logs.
- **[A1]** Correct integrated relation.

**Step 5: Find constant using $t = 0, P = 1$**
$$\ln\left(\frac{1}{9}\right) = 11c$$

- **[M1]** Substitutes $t = 0, P = 1$ to determine constant.

**Step 6: Solve for $t$ when $P = 2$**
$$\ln\left(\frac{2}{7}\right) = \frac{1}{2}t + \ln\left(\frac{1}{9}\right)$$
$$\frac{1}{2}t = \ln\left(\frac{18}{7}\right) \Rightarrow t = 2\ln\left(\frac{18}{7}\right) \approx 1.89\text{ years}$$

- **[M1]** Sets $P = 2$ and solves for $t$.
- **[A1]** $t \approx 1.89\text{ years}$.

#### **Part (c)**

**Step 7: Rearrange for $P$**
$$\frac{P}{11 - 2P} = \frac{1}{9}\mathrm{e}^{\frac{1}{2}t} \Rightarrow \frac{11 - 2P}{P} = 9\mathrm{e}^{-\frac{1}{2}t}$$
$$\frac{11}{P} = 2 + 9\mathrm{e}^{-\frac{1}{2}t} \Rightarrow P = \frac{11}{2 + 9\mathrm{e}^{-\frac{1}{2}t}}$$

- **[M1]** Removes logarithms.
- **[M1]** Isolates $P$.
- **[A1]** Obtains $P = \frac{11}{2 + 9\mathrm{e}^{-\frac{1}{2}t}}$ with $A = 11, B = 2, C = 9$.
