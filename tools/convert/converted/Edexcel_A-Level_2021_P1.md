---
topic: "Algebraic Methods"
subtopic: "The factor theorem"
---
### **Question 1**

$$f(x) = ax^3 + 10x^2 - 3ax - 4$$

Given that $(x - 1)$ is a factor of $f(x)$, find the value of the constant $a$.

You must make your method clear. **(3)**

### **Mark Scheme 1**

**Step 1: Apply the factor theorem**
Since $(x - 1)$ is a factor of $f(x)$, $f(1) = 0$.
$$f(1) = a(1)^3 + 10(1)^2 - 3a(1) - 4 = 0$$
- **[M1]** Attempts $f(1) = 0$ or sets $x = 1$ in $f(x)$ and equates to $0$.

**Step 2: Simplify the equation**
$$a + 10 - 3a - 4 = 0$$
$$6 - 2a = 0$$
- **[M1]** Simplifies to an equation involving $a$.

**Step 3: Solve for $a$**
$$2a = 6 \Rightarrow a = 3$$
- **[A1]** $a = 3$ cwo.

---
topic: "Quadratics"
subtopic: "Completing the square"
---
### **Question 2**

Given that

$$f(x) = x^2 - 4x + 5 \quad x \in \mathbb{R}$$

**(a)** express $f(x)$ in the form $(x + a)^2 + b$ where $a$ and $b$ are integers to be found. **(2)**

The curve with equation $y = f(x)$
- meets the $y$-axis at the point $P$
- has a minimum turning point at the point $Q$

**(b)** Write down
- **(i)** the coordinates of $P$
- **(ii)** the coordinates of $Q$ **(2)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Complete the square**
$$f(x) = (x - 2)^2 - 2^2 + 5$$
- **[M1]** For $(x - 2)^2 + k$ where $k \ne 5$.

**Step 2: State the final expression**
$$f(x) = (x - 2)^2 + 1$$
- **[A1]** Correct expression with $a = -2$ and $b = 1$.

#### **Part (b)**

**Step 3: Find the coordinates of $P$**
When $x = 0$, $y = 5$, so $P = (0, 5)$.
- **[B1]** $(0, 5)$ or $x = 0, y = 5$.

**Step 4: Find the coordinates of $Q$**
From the completed square form, the minimum point is $(2, 1)$.
- **[B1]** $(2, 1)$ or $x = 2, y = 1$.

---
topic: "Sequences and Series"
subtopic: "Recurrence relations"
---
### **Question 3**

The sequence $u_1, u_2, u_3, \dots$ is defined by

$$u_{n+1} = k - \frac{24}{u_n} \quad u_1 = 2$$

where $k$ is an integer.

Given that $u_1 + 2u_2 + u_3 = 0$

**(a)** show that

$$3k^2 - 58k + 240 = 0$$ **(3)**

**(b)** Find the value of $k$, giving a reason for your answer. **(2)**

**(c)** Find the value of $u_3$ **(1)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Express $u_2$ and $u_3$ in terms of $k$**
$$u_2 = k - \frac{24}{2} = k - 12$$
$$u_3 = k - \frac{24}{k - 12}$$
- **[M1]** Finds $u_2 = k - 12$ and uses it to form an expression for $u_3$.

**Step 2: Substitute $u_1, u_2, u_3$ into $u_1 + 2u_2 + u_3 = 0$**
$$2 + 2(k - 12) + \left(k - \frac{24}{k - 12}\right) = 0$$
$$2 + 2k - 24 + k - \frac{24}{k - 12} = 0$$
$$3k - 22 - \frac{24}{k - 12} = 0$$
- **[M1]** Substitutes $u_1, u_2, u_3$ into the given linear equation.

**Step 3: Clear the fraction and simplify to achieve the required quadratic**
$$(3k - 22)(k - 12) - 24 = 0$$
$$3k^2 - 36k - 22k + 264 - 24 = 0$$
$$3k^2 - 58k + 240 = 0$$
- **[A1*]** Correct proof with no errors.

#### **Part (b)**

**Step 4: Solve the quadratic equation for $k$**
$$(3k - 20)(k - 12) = 0 \Rightarrow k = \frac{20}{3} \text{ or } k = 12$$
- **[M1]** Solves the quadratic to find values for $k$.

**Step 5: Select the correct value with reason**
$k$ must be an integer, so $k = 12$ since $\frac{20}{3}$ is not an integer.
- **[A1]** $k = 12$ with a valid reason stating $k$ is an integer (or $\frac{20}{3}$ is not an integer).

#### **Part (c)**

**Step 6: Calculate $u_3$**
When $k = 12$, $u_2 = 0$, which makes $u_3$ undefined, or substituting directly into $3k - 22$:
$$3(12) - 22 + u_3 = 0 \Rightarrow 14 + u_3 = 0 \Rightarrow u_3 = -14$$
- **[B1]** $u_3 = -14$.

---
topic: "Numerical Methods"
subtopic: "Iteration"
---
### **Question 4**

The curve with equation $y = f(x)$ where

$$f(x) = x^2 + \ln(2x^2 - 4x + 5)$$

has a single turning point at $x = \alpha$

**(a)** Show that $\alpha$ is a solution of the equation

$$2x^3 - 4x^2 + 7x - 2 = 0$$ **(4)**

The iterative formula

$$x_{n+1} = \frac{1}{7}\left(2 + 4x_n^2 - 2x_n^3\right)$$

is used to find an approximate value for $\alpha$.

Starting with $x_1 = 0.3$

**(b)** calculate, giving each answer to 4 decimal places,
- **(i)** the value of $x_2$
- **(ii)** the value of $x_4$ **(3)**

Using a suitable interval and a suitable function that should be stated,

**(c)** show that $\alpha$ is 0.341 to 3 decimal places. **(2)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Differentiate $f(x)$**
$$f'(x) = 2x + \frac{4x - 4}{2x^2 - 4x + 5}$$
- **[M1]** Differentiates $x^2 \rightarrow 2x$ and uses chain rule on $\ln(2x^2 - 4x + 5)$ to obtain $\frac{ax + b}{2x^2 - 4x + 5}$.
- **[A1]** Fully correct derivative $f'(x) = 2x + \frac{4x - 4}{2x^2 - 4x + 5}$.

**Step 2: Set $f'(x) = 0$ at the turning point**
$$2x + \frac{4x - 4}{2x^2 - 4x + 5} = 0$$
$$2x(2x^2 - 4x + 5) + 4x - 4 = 0$$
- **[M1]** Sets $f'(x) = 0$ and multiplies through by $(2x^2 - 4x + 5)$.

**Step 3: Expand and simplify**
$$4x^3 - 8x^2 + 10x + 4x - 4 = 0$$
$$4x^3 - 8x^2 + 14x - 4 = 0$$
Divide by 2:
$$2x^3 - 4x^2 + 7x - 2 = 0$$
- **[A1*]** Reaches $2x^3 - 4x^2 + 7x - 2 = 0$ with no algebraic errors.

#### **Part (b)**

**Step 4: Calculate $x_2, x_3, x_4$ using the iterative formula**
$$x_1 = 0.3$$
$$x_2 = \frac{1}{7}\left(2 + 4(0.3)^2 - 2(0.3)^3\right) = 0.32942857\dots$$
- **[M1]** Attempts to evaluate $x_2$ using $x_1 = 0.3$.
- **[A1]** $x_2 = 0.3294$ (rounded to 4 decimal places).

$$x_3 = \frac{1}{7}\left(2 + 4(0.32942857)^2 - 2(0.32942857)^3\right) = 0.337588\dots$$
$$x_4 = \frac{1}{7}\left(2 + 4(0.337588)^2 - 2(0.337588)^3\right) = 0.341138\dots$$
- **[A1]** $x_4 = 0.3411$ (rounded to 4 decimal places).

#### **Part (c)**

**Step 5: Choose suitable function and evaluate at bounds**
Choose $g(x) = 2x^3 - 4x^2 + 7x - 2$ (or $g(x) = f'(x)$).
Bounds for 0.341 to 3 d.p. are $x = 0.3405$ and $x = 0.3415$.
$$g(0.3405) = 2(0.3405)^3 - 4(0.3405)^2 + 7(0.3405) - 2 = -0.00229\dots$$
$$g(0.3415) = 2(0.3415)^3 - 4(0.3415)^2 + 7(0.3415) - 2 = +0.00461\dots$$
- **[M1]** Evaluates a suitable continuous function $g(x)$ at $0.3405$ and $0.3415$.

**Step 6: Conclude with sign change reason**
Sign change (and continuous function) $\Rightarrow \alpha$ lies in $(0.3405, 0.3415) \Rightarrow \alpha = 0.341$ to 3 d.p.
- **[A1]** Both values correct to 1 s.f., states sign change and concludes $\alpha = 0.341$.

---
topic: "Sequences and Series"
subtopic: "Geometric series"
---
### **Question 5**

In this question you should show all stages of your working.

Solutions relying entirely on calculator technology are not acceptable.

A company made a profit of £20 000 in its first year of trading, Year 1

A model for future trading predicts that the yearly profit will increase by 8% each year, so that the yearly profits will form a geometric sequence.

According to the model,

**(a)** show that the profit for Year 3 will be £23 328 **(1)**

**(b)** find the first year when the yearly profit will exceed £65 000 **(3)**

**(c)** find the total profit for the first 20 years of trading, giving your answer to the nearest £1000 **(2)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Calculate Year 3 profit**
$$a = 20000, \quad r = 1.08$$
$$\text{Profit Year 3} = 20000 \times (1.08)^2 = 23328$$
- **[B1*]** Shows $20000 \times 1.08^2 = 23328$.

#### **Part (b)**

**Step 2: Set up inequality for Year $n$ profit**
$$20000 \times (1.08)^{n-1} > 65000$$
$$(1.08)^{n-1} > \frac{65000}{20000} = 3.25$$
- **[M1]** Sets up $20000 \times (1.08)^{n-1} > 65000$ or equal to $65000$.

**Step 3: Take logarithms to solve for $n$**
$$(n - 1) \ln(1.08) > \ln(3.25)$$
$$n - 1 > \frac{\ln(3.25)}{\ln(1.08)} \approx 15.31$$
$$n > 16.31$$
- **[M1]** Uses logs correctly to solve for $n$.

**Step 4: Identify the year**
First integer $n = 17$, so Year 17.
- **[A1]** Year 17.

#### **Part (c)**

**Step 5: Apply geometric series sum formula**
$$S_{20} = \frac{20000(1.08^{20} - 1)}{1.08 - 1}$$
- **[M1]** Uses $S_n = \frac{a(r^n - 1)}{r - 1}$ with $a = 20000, r = 1.08, n = 20$.

**Step 6: Evaluate and round to nearest £1000**
$$S_{20} = \frac{20000(4.660957 - 1)}{0.08} = 915239.38\dots$$
To nearest £1000: £915 000.
- **[A1]** £915 000.

---
topic: "Vectors"
subtopic: "Vectors in 3D"
---
### **Question 6**

**Figure 1** shows a sketch of triangle $ABC$.

Given that
- $\vec{AB} = -3\mathbf{i} - 4\mathbf{j} - 5\mathbf{k}$
- $\vec{BC} = \mathbf{i} + \mathbf{j} + 4\mathbf{k}$

**(a)** find $\vec{AC}$ **(2)**

**(b)** show that $\cos ABC = \frac{9}{10}$ **(3)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Calculate vector $\vec{AC}$**
$$\vec{AC} = \vec{AB} + \vec{BC} = (-3\mathbf{i} - 4\mathbf{j} - 5\mathbf{k}) + (\mathbf{i} + \mathbf{j} + 4\mathbf{k})$$
$$\vec{AC} = -2\mathbf{i} - 3\mathbf{j} - \mathbf{k}$$
- **[M1]** Uses $\vec{AC} = \vec{AB} + \vec{BC}$.
- **[A1]** $-2\mathbf{i} - 3\mathbf{j} - \mathbf{k}$ or $\begin{pmatrix} -2 \\ -3 \\ -1 \end{pmatrix}$.

#### **Part (b)**

**Step 2: Find the magnitudes of $\vec{BA}$, $\vec{BC}$, and $\vec{AC}$ (or use scalar product)**

**Method 1: Scalar product**
$$\vec{BA} = 3\mathbf{i} + 4\mathbf{j} + 5\mathbf{k}$$
$$\vec{BC} = \mathbf{i} + \mathbf{j} + 4\mathbf{k}$$
$$\vec{BA} \cdot \vec{BC} = (3)(1) + (4)(1) + (5)(4) = 3 + 4 + 20 = 27$$
- **[M1]** Finds $\vec{BA} \cdot \vec{BC}$ or magnitudes $|\vec{AB}|, |\vec{BC}|, |\vec{AC}|$.

$$|\vec{BA}| = \sqrt{3^2 + 4^2 + 5^2} = \sqrt{50}$$
$$|\vec{BC}| = \sqrt{1^2 + 1^2 + 4^2} = \sqrt{18}$$
- **[M1]** Finds both magnitudes $|\vec{BA}|$ and $|\vec{BC}|$.

$$\cos ABC = \frac{\vec{BA} \cdot \vec{BC}}{|\vec{BA}| |\vec{BC}|} = \frac{27}{\sqrt{50} \sqrt{18}} = \frac{27}{\sqrt{900}} = \frac{27}{30} = \frac{9}{10}$$
- **[A1*]** Fully correct proof leading to $\frac{9}{10}$.

---
topic: "Circles"
subtopic: "Intersections of straight lines and circles"
---
### **Question 7**

The circle $C$ has equation

$$x^2 + y^2 - 10x + 4y + 11 = 0$$

**(a)** Find
- **(i)** the coordinates of the centre of $C$,
- **(ii)** the exact radius of $C$, giving your answer as a simplified surd. **(4)**

The line $l$ has equation $y = 3x + k$ where $k$ is a constant.

Given that $l$ is a tangent to $C$,

**(b)** find the possible values of $k$, giving your answers as simplified surds. **(5)**

### **Mark Scheme 7**

#### **Part (a)**

**Step 1: Complete the square for the circle equation**
$$(x - 5)^2 - 25 + (y + 2)^2 - 4 + 11 = 0$$
$$(x - 5)^2 + (y + 2)^2 = 18$$
- **[M1]** Attempts to complete the square for both $x$ and $y$.
- **[A1]** $(x - 5)^2 + (y + 2)^2 = 18$.

**Step 2: Extract centre and radius**
- **(i)** Centre is $(5, -2)$.
- **[B1]** Centre $(5, -2)$.
- **(ii)** Radius $r = \sqrt{18} = 3\sqrt{2}$.
- **[A1]** $3\sqrt{2}$.

#### **Part (b)**

**Step 3: Substitute $y = 3x + k$ into the circle equation**
$$x^2 + (3x + k)^2 - 10x + 4(3x + k) + 11 = 0$$
$$x^2 + 9x^2 + 6kx + k^2 - 10x + 12x + 4k + 11 = 0$$
$$10x^2 + (6k + 2)x + (k^2 + 4k + 11) = 0$$
- **[M1]** Substitutes $y = 3x + k$ into circle equation to form a quadratic in $x$.
- **[A1]** Correct quadratic $10x^2 + (6k + 2)x + (k^2 + 4k + 11) = 0$.

**Step 4: Set discriminant $b^2 - 4ac = 0$ for tangency**
$$b^2 - 4ac = (6k + 2)^2 - 4(10)(k^2 + 4k + 11) = 0$$
$$36k^2 + 24k + 4 - 40k^2 - 160k - 440 = 0$$
$$-4k^2 - 136k - 436 = 0 \Rightarrow k^2 + 34k + 109 = 0$$
- **[M1]** Sets discriminant of their 3-term quadratic to 0.

**Step 5: Solve for $k$**
$$k = \frac{-34 \pm \sqrt{34^2 - 4(1)(109)}}{2} = \frac{-34 \pm \sqrt{1156 - 436}}{2}$$
$$k = \frac{-34 \pm \sqrt{720}}{2} = \frac{-34 \pm 12\sqrt{5}}{2} = -17 \pm 6\sqrt{5}$$
- **[M1]** Solves quadratic in $k$ using formula or completing square.
- **[A1]** $k = -17 \pm 6\sqrt{5}$.

---
topic: "Exponentials and Logarithms"
subtopic: "Exponential modelling"
---
### **Question 8**

A scientist is studying the growth of two different populations of bacteria.

The number of bacteria, $N$, in the first population is modelled by the equation

$$N = A\mathrm{e}^{kt} \quad t \ge 0$$

where $A$ and $k$ are positive constants and $t$ is the time in hours from the start of the study.

Given that
- there were 1000 bacteria in this population at the start of the study
- it took exactly 5 hours from the start of the study for this population to double

**(a)** find a complete equation for the model. **(4)**

**(b)** Hence find the rate of increase in the number of bacteria in this population exactly 8 hours from the start of the study. Give your answer to 2 significant figures. **(2)**

The number of bacteria, $M$, in the second population is modelled by the equation

$$M = 500\mathrm{e}^{1.4kt} \quad t \ge 0$$

where $k$ has the value found in part (a) and $t$ is the time in hours from the start of the study.

Given that $T$ hours after the start of the study, the number of bacteria in the two different populations was the same,

**(c)** find the value of $T$. **(3)**

### **Mark Scheme 8**

#### **Part (a)**

**Step 1: Find $A$**
When $t = 0$, $N = 1000 \Rightarrow A = 1000$.
- **[B1]** $A = 1000$.

**Step 2: Use $t = 5, N = 2000$ to find $k$**
$$2000 = 1000\mathrm{e}^{5k} \Rightarrow \mathrm{e}^{5k} = 2$$
$$5k = \ln 2 \Rightarrow k = \frac{1}{5}\ln 2 \quad (\approx 0.1386)$$
- **[M1]** Sets $2000 = 1000\mathrm{e}^{5k}$ and takes logarithms.
- **[A1]** $k = \frac{1}{5}\ln 2$ or $0.1386$.

**Step 3: Write the complete equation**
$$N = 1000\mathrm{e}^{\left(\frac{1}{5}\ln 2\right)t} \quad \left(\text{or } N = 1000(2)^{\frac{t}{5}} \text{ or } N = 1000\mathrm{e}^{0.1386t}\right)$$
- **[A1]** Complete equation with values of $A$ and $k$ substituted.

#### **Part (b)**

**Step 4: Differentiate $N$ with respect to $t$**
$$\frac{\mathrm{d}N}{\mathrm{d}t} = k A \mathrm{e}^{kt} = 1000k \mathrm{e}^{kt}$$
At $t = 8$:
$$\frac{\mathrm{d}N}{\mathrm{d}t} = 1000(0.138629...)\mathrm{e}^{8(0.138629...)} = 138.629... \times 3.0314... \approx 420.2...$$
- **[M1]** Differentiates $N$ and substitutes $t = 8$.
- **[A1]** $420$ (bacteria per hour).

#### **Part (c)**

**Step 5: Equate $N$ and $M$ at $t = T$**
$$1000\mathrm{e}^{kT} = 500\mathrm{e}^{1.4kT}$$
$$2 = \mathrm{e}^{0.4kT}$$
- **[M1]** Sets $N = M$ at $t = T$ and simplifies to exponential form.

**Step 6: Take logarithms to solve for $T$**
$$0.4kT = \ln 2$$
Substitute $k = \frac{1}{5}\ln 2$:
$$0.4\left(\frac{1}{5}\ln 2\right)T = \ln 2$$
$$0.08 T = 1 \Rightarrow T = \frac{1}{0.08} = 12.5$$
- **[M1]** Takes logs and substitutes value of $k$ to solve for $T$.
- **[A1]** $T = 12.5$ hours.

---
topic: "Binomial Expansion"
subtopic: "Using partial fractions"
---
### **Question 9**

$$f(x) = \frac{50x^2 + 38x + 9}{(5x + 2)^2 (1 - 2x)} \quad x \ne -\frac{2}{5} \quad x \ne \frac{1}{2}$$

Given that $f(x)$ can be expressed in the form

$$\frac{A}{5x + 2} + \frac{B}{(5x + 2)^2} + \frac{C}{1 - 2x}$$

where $A, B$ and $C$ are constants

**(a)**
- **(i)** find the value of $B$ and the value of $C$
- **(ii)** show that $A = 0$ **(4)**

**(b)**
- **(i)** Use binomial expansions to show that, in ascending powers of $x$

$$f(x) = p + qx + rx^2 + \dots$$

where $p, q$ and $r$ are simplified fractions to be found.
- **(ii)** Find the range of values of $x$ for which this expansion is valid. **(7)**

### **Mark Scheme 9**

#### **Part (a)**

**Step 1: Form the partial fraction identity**
$$50x^2 + 38x + 9 = A(5x + 2)(1 - 2x) + B(1 - 2x) + C(5x + 2)^2$$
- **[M1]** Forms correct identity.

**Step 2: Find $B$ by substituting $x = -\frac{2}{5}$**
$$50\left(-\frac{2}{5}\right)^2 + 38\left(-\frac{2}{5}\right) + 9 = B\left(1 - 2\left(-\frac{2}{5}\right)\right)$$
$$50\left(\frac{4}{25}\right) - \frac{76}{5} + 9 = B\left(\frac{9}{5}\right) \Rightarrow 8 - 15.2 + 9 = 1.8 B \Rightarrow 1.8 = 1.8 B \Rightarrow B = 1$$

**Step 3: Find $C$ by substituting $x = \frac{1}{2}$**
$$50\left(\frac{1}{4}\right) + 38\left(\frac{1}{2}\right) + 9 = C\left(5\left(\frac{1}{2}\right) + 2\right)^2$$
$$12.5 + 19 + 9 = C\left(\frac{9}{2}\right)^2 \Rightarrow 40.5 = 20.25 C \Rightarrow C = 2$$
- **[A1]** $B = 1$ and $C = 2$.

**Step 4: Show $A = 0$**
Compare coefficients of $x^2$:
$$50 = -10A + 25C \Rightarrow 50 = -10A + 25(2) \Rightarrow 50 = -10A + 50 \Rightarrow 10A = 0 \Rightarrow A = 0$$
- **[M1]** Method to show $A = 0$ (e.g. comparing coefficients or substituting another $x$ value).
- **[A1*]** Fully correct derivation showing $A = 0$.

#### **Part (b)**

**Step 5: Rewrite $f(x)$ using values of $A, B, C$**
$$f(x) = (5x + 2)^{-2} + 2(1 - 2x)^{-1} = \frac{1}{4}\left(1 + \frac{5}{2}x\right)^{-2} + 2(1 - 2x)^{-1}$$
- **[M1]** Writes terms with negative indices and factorises out $\frac{1}{4}$ from $(2 + 5x)^{-2}$.

**Step 6: Binomial expansion of $\frac{1}{4}\left(1 + \frac{5}{2}x\right)^{-2}$**
$$\frac{1}{4}\left[ 1 + (-2)\left(\frac{5}{2}x\right) + \frac{(-2)(-3)}{2!}\left(\frac{5}{2}x\right)^2 \right] = \frac{1}{4}\left[ 1 - 5x + \frac{75}{4}x^2 \right] = \frac{1}{4} - \frac{5}{4}x + \frac{75}{16}x^2$$
- **[M1]** Binomial expansion of $\left(1 + \frac{5}{2}x\right)^{-2}$ up to $x^2$.
- **[A1]** Correct expansion $\frac{1}{4} - \frac{5}{4}x + \frac{75}{16}x^2$.

**Step 7: Binomial expansion of $2(1 - 2x)^{-1}$**
$$2\left[ 1 + (-1)(-2x) + \frac{(-1)(-2)}{2!}(-2x)^2 \right] = 2[1 + 2x + 4x^2] = 2 + 4x + 8x^2$$
- **[M1]** Binomial expansion of $(1 - 2x)^{-1}$ up to $x^2$.
- **[A1]** Correct expansion $2 + 4x + 8x^2$.

**Step 8: Combine expansions**
$$f(x) = \left(\frac{1}{4} + 2\right) + \left(-\frac{5}{4} + 4\right)x + \left(\frac{75}{16} + 8\right)x^2 = \frac{9}{4} + \frac{11}{4}x + \frac{203}{16}x^2$$
- **[A1]** $p = \frac{9}{4}, q = \frac{11}{4}, r = \frac{203}{16}$.

**Step 9: Determine validity range**
Expansion of $\left(1 + \frac{5}{2}x\right)^{-2}$ requires $\left|\frac{5}{2}x\right| < 1 \Rightarrow |x| < \frac{2}{5}$.
Expansion of $(1 - 2x)^{-1}$ requires $|2x| < 1 \Rightarrow |x| < \frac{1}{2}$.
The stricter condition is $|x| < \frac{2}{5}$ (or $-\frac{2}{5} < x < \frac{2}{5}$).
- **[B1]** $|x| < \frac{2}{5}$ or $-\frac{2}{5} < x < \frac{2}{5}$.

---
topic: "Trigonometry and Modelling"
subtopic: "Proving trigonometric identities"
---
### **Question 10**

In this question you should show all stages of your working.

Solutions relying entirely on calculator technology are not acceptable.

**(a)** Given that $1 + \cos 2\theta + \sin 2\theta \ne 0$ prove that

$$\frac{1 - \cos 2\theta + \sin 2\theta}{1 + \cos 2\theta + \sin 2\theta} \equiv \tan \theta$$ **(4)**

**(b)** Hence solve, for $0 < x < 180^\circ$

$$\frac{1 - \cos 4x + \sin 4x}{1 + \cos 4x + \sin 4x} = 3 \sin 2x$$

giving your answers to one decimal place where appropriate. **(4)**

### **Mark Scheme 10**

#### **Part (a)**

**Step 1: Use double angle identities**
Substitute $\cos 2\theta = 1 - 2\sin^2\theta$ in the numerator, $\cos 2\theta = 2\cos^2\theta - 1$ in the denominator, and $\sin 2\theta = 2\sin\theta\cos\theta$ in both.
$$\text{LHS} = \frac{1 - (1 - 2\sin^2\theta) + 2\sin\theta\cos\theta}{1 + (2\cos^2\theta - 1) + 2\sin\theta\cos\theta}$$
- **[M1]** Uses $\cos 2\theta = 1 - 2\sin^2\theta$ or $2\cos^2\theta - 1$.
- **[M1]** Uses $\sin 2\theta = 2\sin\theta\cos\theta$.

**Step 2: Simplify numerator and denominator**
$$\text{LHS} = \frac{2\sin^2\theta + 2\sin\theta\cos\theta}{2\cos^2\theta + 2\sin\theta\cos\theta}$$
- **[A1]** Correct simplified expression for numerator and denominator.

**Step 3: Factorise and complete the proof**
$$\text{LHS} = \frac{2\sin\theta(\sin\theta + \cos\theta)}{2\cos\theta(\cos\theta + \sin\theta)} = \frac{\sin\theta}{\cos\theta} = \tan\theta \equiv \text{RHS}$$
- **[A1*]** Factorises numerator and denominator and cancels $(\sin\theta + \cos\theta)$ to achieve $\tan\theta$.

#### **Part (b)**

**Step 4: Use part (a) identity with $\theta = 2x$**
$$\tan 2x = 3 \sin 2x$$
- **[M1]** Applies result of part (a) to write $\tan 2x = 3 \sin 2x$.

**Step 5: Solve $\frac{\sin 2x}{\cos 2x} = 3 \sin 2x$**
$$\sin 2x = 3 \sin 2x \cos 2x \Rightarrow \sin 2x (1 - 3 \cos 2x) = 0$$
- **[M1]** Rearranges to factorise out $\sin 2x$ (or equivalent).

**Step 6: Find solutions for $\sin 2x = 0$ and $\cos 2x = \frac{1}{3}$**
For $0 < x < 180^\circ$, we have $0 < 2x < 360^\circ$.

Case 1: $\sin 2x = 0 \Rightarrow 2x = 180^\circ \Rightarrow x = 90^\circ$
Case 2: $\cos 2x = \frac{1}{3} \Rightarrow 2x = 70.5288^\circ \text{ or } 2x = 360^\circ - 70.5288^\circ = 289.4712^\circ$
$$x = 35.26^\dots \approx 35.3^\circ$$
$$x = 144.73^\dots \approx 144.7^\circ$$
- **[A1]** Any two correct solutions from $35.3^\circ, 90^\circ, 144.7^\circ$.
- **[A1]** All three solutions $x = 35.3^\circ, 90^\circ, 144.7^\circ$ and no others in the range.

---
topic: "Integration"
subtopic: "Integration by parts"
---
### **Question 11**

**Figure 2** shows a sketch of part of the curve with equation

$$y = (\ln x)^2 \quad x > 0$$

The finite region $R$, shown shaded in Figure 2, is bounded by the curve, the line with equation $x = 2$, the $x$-axis and the line with equation $x = 4$

The table below shows corresponding values of $x$ and $y$, with the values of $y$ given to 4 decimal places.

| $x$ | 2 | 2.5 | 3 | 3.5 | 4 |
| :--- | :---: | :---: | :---: | :---: | :---: |
| $y$ | 0.4805 | 0.8396 | 1.2069 | 1.5694 | 1.9218 |

**(a)** Use the trapezium rule, with all the values of $y$ in the table, to obtain an estimate for the area of $R$, giving your answer to 3 significant figures. **(3)**

**(b)** Use algebraic integration to find the exact area of $R$, giving your answer in the form

$$y = a (\ln 2)^2 + b \ln 2 + c$$

where $a, b$ and $c$ are integers to be found. **(5)**

### **Mark Scheme 11**

#### **Part (a)**

**Step 1: Identify interval width $h$**
$$h = \frac{4 - 2}{4} = 0.5$$
- **[B1]** $h = 0.5$.

**Step 2: Apply trapezium rule formula**
$$\text{Area} \approx \frac{0.5}{2} [0.4805 + 1.9218 + 2(0.8396 + 1.2069 + 1.5694)]$$
$$\text{Area} \approx 0.25 [2.4023 + 2(3.6159)] = 0.25 [2.4023 + 7.2318] = 0.25 [9.6341] = 2.408525$$
- **[M1]** Correct structure of trapezium rule with $h = 0.5$ and values from table.

**Step 3: Round to 3 significant figures**
$$\text{Area} \approx 2.41$$
- **[A1]** $2.41$.

#### **Part (b)**

**Step 4: Integrate $(\ln x)^2$ by parts**
Let $u = (\ln x)^2 \Rightarrow \frac{\mathrm{d}u}{\mathrm{d}x} = \frac{2\ln x}{x}$, and $\frac{\mathrm{d}v}{\mathrm{d}x} = 1 \Rightarrow v = x$.
$$\int (\ln x)^2 \mathrm{d}x = x(\ln x)^2 - \int x \cdot \frac{2\ln x}{x} \mathrm{d}x = x(\ln x)^2 - 2\int \ln x \mathrm{d}x$$
- **[M1]** Applies integration by parts on $\int (\ln x)^2 \mathrm{d}x$.

**Step 5: Integrate $\ln x$ by parts**
$$\int \ln x \mathrm{d}x = x\ln x - x$$
So $\int (\ln x)^2 \mathrm{d}x = x(\ln x)^2 - 2x\ln x + 2x$.
- **[dM1]** Applies integration by parts again to integrate $\int \ln x \mathrm{d}x$.
- **[A1]** Correct indefinite integral $x(\ln x)^2 - 2x\ln x + 2x$.

**Step 6: Substitute limits 2 and 4**
$$\left[ x(\ln x)^2 - 2x\ln x + 2x \right]_2^4$$
At $x = 4$:
$$4(\ln 4)^2 - 8\ln 4 + 8 = 4(2\ln 2)^2 - 8(2\ln 2) + 8 = 16(\ln 2)^2 - 16\ln 2 + 8$$
At $x = 2$:
$$2(\ln 2)^2 - 4\ln 2 + 4$$
Subtracting:
$$\text{Area} = [16(\ln 2)^2 - 16\ln 2 + 8] - [2(\ln 2)^2 - 4\ln 2 + 4]$$
$$\text{Area} = 14(\ln 2)^2 - 12\ln 2 + 4$$
- **[M1]** Substitutes limits 4 and 2 and uses $\ln 4 = 2\ln 2$.
- **[A1]** $14(\ln 2)^2 - 12\ln 2 + 4$ (so $a = 14, b = -12, c = 4$).

---
topic: "Quadratics"
subtopic: "Modelling with quadratics"
---
### **Question 12**

**Figure 3** is a graph of the trajectory of a golf ball after the ball has been hit until it first hits the ground.

The vertical height, $H$ metres, of the ball above the ground has been plotted against the horizontal distance travelled, $x$ metres, measured from where the ball was hit.

The ball is modelled as a particle travelling in a vertical plane above horizontal ground.

Given that the ball
- is hit from a point on the top of a platform of vertical height $3\text{ m}$ above the ground
- reaches its maximum vertical height after travelling a horizontal distance of $90\text{ m}$
- is at a vertical height of $27\text{ m}$ above the ground after travelling a horizontal distance of $120\text{ m}$

Given also that $H$ is modelled as a quadratic function in $x$

**(a)** find $H$ in terms of $x$ **(5)**

**(b)** Hence find, according to the model,
- **(i)** the maximum vertical height of the ball above the ground,
- **(ii)** the horizontal distance travelled by the ball, from when it was hit to when it first hits the ground, giving your answer to the nearest metre. **(3)**

**(c)** The possible effects of wind or air resistance are two limitations of the model.

Give one other limitation of this model. **(1)**

### **Mark Scheme 12**

#### **Part (a)**

**Step 1: Set up the general quadratic model**
Since maximum height occurs at $x = 90$, write $H = a(x - 90)^2 + b$ or $H = ax^2 + bx + c$.
Using $H = a(x - 90)^2 + b$:
At $x = 0, H = 3 \Rightarrow a(0 - 90)^2 + b = 3 \Rightarrow 8100a + b = 3$
- **[M1]** Uses coordinates $(0, 3)$, $(90, b)$, $(120, 27)$ to set up equations for the model.

**Step 2: Use point $(120, 27)$**
At $x = 120, H = 27 \Rightarrow a(120 - 90)^2 + b = 27 \Rightarrow 900a + b = 27$
- **[M1]** Sets up a second equation in $a$ and $b$.

**Step 3: Solve for $a$ and $b$**
Subtract equations:
$$(8100a + b) - (900a + b) = 3 - 27$$
$$7200a = -24 \Rightarrow a = -\frac{24}{7200} = -\frac{1}{300}$$
Substitute $a = -\frac{1}{300}$:
$$900\left(-\frac{1}{300}\right) + b = 27 \Rightarrow -3 + b = 27 \Rightarrow b = 30$$
- **[M1]** Solves simultaneously to find values for $a$ and $b$.
- **[A1]** $a = -\frac{1}{300}, b = 30$.

**Step 4: State $H$ in terms of $x$**
$$H = -\frac{1}{300}(x - 90)^2 + 30 \quad \left(\text{or } H = -\frac{1}{300}x^2 + \frac{3}{5}x + 3\right)$$
- **[A1]** Correct equation for $H$ in terms of $x$.

#### **Part (b)**

**Step 5: Find maximum vertical height**
Maximum height is $b = 30\text{ m}$.
- **(i)**
- **[B1]** $30\text{ m}$.

**Step 6: Find total horizontal distance when $H = 0$**
$$-\frac{1}{300}(x - 90)^2 + 30 = 0$$
$$(x - 90)^2 = 9000$$
$$x - 90 = \sqrt{9000} \Rightarrow x = 90 + 30\sqrt{10} \approx 90 + 94.868 = 184.868\text{ m}$$
- **(ii)**
- **[M1]** Sets $H = 0$ and solves for $x$.
- **[A1]** $185\text{ m}$ (nearest metre).

#### **Part (c)**

**Step 7: State another limitation of the model**
Any valid limitation such as:
- The ball is modelled as a particle (ignores spin/size/shape).
- The ground may not be flat/horizontal.
- Does not account for the motion after first impact.
- **[B1]** Any one sensible physical limitation mentioned.

---
topic: "Parametric Equations"
subtopic: "Parametric equations"
---
### **Question 13**

A curve $C$ has parametric equations

$$x = \frac{t^2 + 5}{t^2 + 1} \quad y = \frac{4t}{t^2 + 1} \quad t \in \mathbb{R}$$

Show that all points on $C$ satisfy

$$(x - 3)^2 + y^2 = 4$$ **(3)**

### **Mark Scheme 13**

**Step 1: Calculate $x - 3$**
$$x - 3 = \frac{t^2 + 5}{t^2 + 1} - 3 = \frac{t^2 + 5 - 3(t^2 + 1)}{t^2 + 1} = \frac{t^2 + 5 - 3t^2 - 3}{t^2 + 1} = \frac{2 - 2t^2}{t^2 + 1}$$
- **[M1]** Forms expression for $x - 3$ with a common denominator.

**Step 2: Substitute $(x - 3)$ and $y$ into $(x - 3)^2 + y^2$**
$$(x - 3)^2 + y^2 = \left(\frac{2 - 2t^2}{t^2 + 1}\right)^2 + \left(\frac{4t}{t^2 + 1}\right)^2 = \frac{(2 - 2t^2)^2 + (4t)^2}{(t^2 + 1)^2}$$
- **[M1]** Expands $(x - 3)^2 + y^2$ using a common denominator $(t^2 + 1)^2$.

**Step 3: Expand numerator and simplify**
$$\text{Numerator} = 4 - 8t^2 + 4t^4 + 16t^2 = 4t^4 + 8t^2 + 4 = 4(t^4 + 2t^2 + 1) = 4(t^2 + 1)^2$$
$$\Rightarrow (x - 3)^2 + y^2 = \frac{4(t^2 + 1)^2}{(t^2 + 1)^2} = 4$$
- **[A1*]** Fully correct algebra leading to $4$ with no steps omitted.

---
topic: "Differentiation"
subtopic: "The quotient rule"
---
### **Question 14**

Given that

$$y = \frac{x - 4}{2 + \sqrt{x}} \quad x > 0$$

show that

$$\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{1}{A\sqrt{x}} \quad x > 0$$

where $A$ is a constant to be found. **(4)**

### **Mark Scheme 14**

**Method 1: Using algebraic simplification first**

**Step 1: Simplify $y$ using factorisation of numerator**
$$x - 4 = (\sqrt{x} - 2)(\sqrt{x} + 2)$$
$$y = \frac{(\sqrt{x} - 2)(\sqrt{x} + 2)}{2 + \sqrt{x}} = \sqrt{x} - 2 = x^{\frac{1}{2}} - 2$$
- **[M1]** Factorises $x - 4$ as $(\sqrt{x} - 2)(\sqrt{x} + 2)$ or uses algebraic division to simplify $y$.
- **[A1]** Reaches $y = \sqrt{x} - 2$.

**Step 2: Differentiate with respect to $x$**
$$\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{1}{2}x^{-\frac{1}{2}} = \frac{1}{2\sqrt{x}}$$
- **[M1]** Differentiates $x^{\frac{1}{2}} - 2$.
- **[A1]** Shows $\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{1}{2\sqrt{x}}$ so $A = 2$.

---

**Method 2: Using the Quotient Rule**

**Step 1: Apply quotient rule**
Let $u = x - 4 \Rightarrow u' = 1$ and $v = 2 + x^{\frac{1}{2}} \Rightarrow v' = \frac{1}{2}x^{-\frac{1}{2}}$.
$$\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{(2 + \sqrt{x})(1) - (x - 4)\left(\frac{1}{2\sqrt{x}}\right)}{(2 + \sqrt{x})^2}$$
- **[M1]** Applies quotient rule formula correctly.

**Step 2: Multiply numerator and denominator by $2\sqrt{x}$**
$$\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{2\sqrt{x}(2 + \sqrt{x}) - (x - 4)}{2\sqrt{x}(2 + \sqrt{x})^2} = \frac{4\sqrt{x} + 2x - x + 4}{2\sqrt{x}(2 + \sqrt{x})^2} = \frac{x + 4\sqrt{x} + 4}{2\sqrt{x}(2 + \sqrt{x})^2}$$
- **[A1]** Correct unsimplified derivative.

**Step 3: Factorise numerator and cancel**
$$x + 4\sqrt{x} + 4 = (\sqrt{x} + 2)^2$$
$$\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{(\sqrt{x} + 2)^2}{2\sqrt{x}(\sqrt{x} + 2)^2} = \frac{1}{2\sqrt{x}}$$
- **[M1]** Recognises $x + 4\sqrt{x} + 4 = (\sqrt{x} + 2)^2$ and cancels.
- **[A1]** Concludes $\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{1}{2\sqrt{x}}$, giving $A = 2$.

---
topic: "Algebraic Methods"
subtopic: "Proof by contradiction"
---
### **Question 15**

**(i)** Use proof by exhaustion to show that for $n \in \mathbb{N}, n \le 4$

$$(n + 1)^3 > 3^n$$ **(2)**

**(ii)** Given that $m^3 + 5$ is odd, use proof by contradiction to show, using algebra, that $m$ is even. **(4)**

### **Mark Scheme 15**

#### **Part (i)**

**Step 1: Evaluate $(n+1)^3$ and $3^n$ for $n = 1, 2, 3, 4$**
- $n = 1: (1 + 1)^3 = 2^3 = 8$; $3^1 = 3$. $8 > 3$ ✓
- $n = 2: (2 + 1)^3 = 3^3 = 27$; $3^2 = 9$. $27 > 9$ ✓
- $n = 3: (3 + 1)^3 = 4^3 = 64$; $3^3 = 27$. $64 > 27$ ✓
- $n = 4: (4 + 1)^3 = 5^3 = 125$; $3^4 = 81$. $125 > 81$ ✓
- **[M1]** Demonstrates checking all four values $n = 1, 2, 3, 4$.

**Step 2: Conclude proof by exhaustion**
Since the inequality holds for all $n \in \{1, 2, 3, 4\}$, by exhaustion $(n + 1)^3 > 3^n$ is true for $n \in \mathbb{N}, n \le 4$.
- **[A1*]** Fully correct working for all four values and states conclusion.

#### **Part (ii)**

**Step 3: State the contradiction assumption**
Assume there exists an integer $m$ such that $m^3 + 5$ is odd and $m$ is odd.
- **[B1]** States the initial assumption clearly ("Assume $m$ is odd").

**Step 4: Express $m$ algebraically as an odd number**
Let $m = 2k + 1$ where $k \in \mathbb{Z}$.
$$m^3 + 5 = (2k + 1)^3 + 5$$
$$m^3 + 5 = 8k^3 + 12k^2 + 6k + 1 + 5 = 8k^3 + 12k^2 + 6k + 6$$
- **[M1]** Sets $m = 2k + 1$ and expands $m^3 + 5$.

**Step 5: Factorise to show $m^3 + 5$ is even**
$$m^3 + 5 = 2(4k^3 + 6k^2 + 3k + 3)$$
Since $4k^3 + 6k^2 + 3k + 3$ is an integer, $m^3 + 5$ is divisible by 2, hence $m^3 + 5$ is even.
- **[A1]** Shows $m^3 + 5$ is even algebraically.

**Step 6: State contradiction and conclusion**
This contradicts the given statement that $m^3 + 5$ is odd. Therefore, the assumption that $m$ is odd must be false, so $m$ must be even.
- **[A1*]** Complete proof with clear contradiction statement and final conclusion.
