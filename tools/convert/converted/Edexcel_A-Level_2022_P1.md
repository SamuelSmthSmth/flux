---
topic: "Functions and Graphs"
subtopic: "Combining transformations"
---
### **Question 1**

The point $P(-2, -5)$ lies on the curve with equation $y = \text{f}(x), \quad x \in \mathbb{R}$

Find the point to which $P$ is mapped, when the curve with equation $y = \text{f}(x)$ is transformed to the curve with equation

**(a)** $y = \text{f}(x) + 2$ **(1)**

**(b)** $y = |\text{f}(x)|$ **(1)**

**(c)** $y = 3\text{f}(x - 2) + 2$ **(2)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Translate the $y$-coordinate**
$$y \to -5 + 2 = -3$$
Mapping gives $(-2, -3)$.
- **[B1]** Correct coordinates $(-2, -3)$

#### **Part (b)**

**Step 2: Apply the modulus to the $y$-coordinate**
$$y \to |-5| = 5$$
Mapping gives $(-2, 5)$.
- **[B1]** Correct coordinates $(-2, 5)$

#### **Part (c)**

**Step 3: Transform the $x$-coordinate**
$$x \to -2 + 2 = 0$$

**Step 4: Transform the $y$-coordinate**
$$y \to 3(-5) + 2 = -13$$
Mapping gives $(0, -13)$.
- **[M1]** For showing correct method for either the $x$-coordinate or the $y$-coordinate, e.g. $x = 0$ or $y = -13$.
- **[A1]** Correct coordinates $(0, -13)$

---
topic: "Algebraic Methods"
subtopic: "The factor theorem"
---
### **Question 2**

$$\text{f}(x) = (x - 4)(x^2 - 3x + k) - 42 \quad \text{where } k \text{ is a constant}$$

Given that $(x + 2)$ is a factor of $\text{f}(x)$, find the value of $k$. **(3)**

### **Mark Scheme 2**

**Step 1: Apply the factor theorem**
Since $(x + 2)$ is a factor of $\text{f}(x)$, $\text{f}(-2) = 0$.
$$\text{f}(-2) = (-2 - 4)((-2)^2 - 3(-2) + k) - 42 = 0$$
- **[M1]** Sets $\text{f}(-2) = 0$ and attempts to substitute $x = -2$ into $\text{f}(x)$.

**Step 2: Simplify the equation**
$$-6(4 + 6 + k) - 42 = 0$$
$$-6(10 + k) = 42$$
- **[M1]** Expands or simplifies to linear equation in $k$, e.g., $-60 - 6k - 42 = 0$ or $-6(10 + k) = 42$.

**Step 3: Solve for $k$**
$$10 + k = -7 \Rightarrow k = -17$$
- **[A1]** $k = -17$

---
topic: "Circles"
subtopic: "Equation of a circle"
---
### **Question 3**

A circle has equation
$$x^2 + y^2 - 10x + 16y = 80$$

**(a)** Find

**(i)** the coordinates of the centre of the circle,

**(ii)** the radius of the circle. **(3)**

Given that $P$ is the point on the circle that is furthest away from the origin $O$,

**(b)** find the exact length $OP$ **(2)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Complete the square for $x$ and $y$**
$$(x - 5)^2 - 25 + (y + 8)^2 - 64 = 80$$
$$(x - 5)^2 + (y + 8)^2 = 169$$
- **[M1]** Completes the square for both $x$ and $y$ to obtain $(x \pm 5)^2 + (y \pm 8)^2 = \dots$

**Step 2: State centre and radius**
Centre: $(5, -8)$
Radius: $\sqrt{169} = 13$
- **[A1]** Centre $(5, -8)$
- **[A1]** Radius $13$

#### **Part (b)**

**Step 3: Calculate the distance from origin to centre**
$$OC = \sqrt{5^2 + (-8)^2} = \sqrt{25 + 64} = \sqrt{89}$$
- **[M1]** Uses $\sqrt{x_c^2 + y_c^2} + r$ with their centre coordinates and radius.

**Step 4: Find maximum distance $OP$**
$$OP = OC + r = \sqrt{89} + 13$$
- **[A1]** Correct exact length $13 + \sqrt{89}$ (or $\sqrt{89} + 13$).

---
topic: "Integration"
subtopic: "Definite integrals"
---
### **Question 4**

**(a)** Express 
$$\lim_{\delta x \to 0} \sum_{x=2.1}^{6.3} \frac{2}{x} \, \delta x$$
as an integral. **(1)**

**(b)** Hence show that
$$\lim_{\delta x \to 0} \sum_{x=2.1}^{6.3} \frac{2}{x} \, \delta x = \ln k$$
where $k$ is a constant to be found. **(2)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Convert limit of sum to integral form**
$$\int_{2.1}^{6.3} \frac{2}{x} \, \text{d}x$$
- **[B1]** Correct integral including limits, function, and $\text{d}x$.

#### **Part (b)**

**Step 2: Integrate $\frac{2}{x}$**
$$\int_{2.1}^{6.3} \frac{2}{x} \, \text{d}x = [2\ln x]_{2.1}^{6.3}$$
- **[M1]** Integrates $\frac{2}{x}$ to $k\ln x$ and applies limits $2.1$ and $6.3$.

**Step 3: Apply laws of logarithms to find $k$**
$$[2\ln x]_{2.1}^{6.3} = 2\ln(6.3) - 2\ln(2.1) = 2\ln\left(\frac{6.3}{2.1}\right) = 2\ln(3) = \ln(3^2) = \ln 9$$
Thus $k = 9$.
- **[A1]** Shows complete log work leading to $\ln 9$ and states $k = 9$ (or $k=9$ from $\ln 9$).

---
topic: "Equations and Inequalities"
subtopic: "Linear simultaneous equations"
---
### **Question 5**

The height, $h$ metres, of a tree, $t$ years after being planted, is modelled by the equation
$$h^2 = at + b \quad 0 \le t < 25$$

where $a$ and $b$ are constants.

Given that
- the height of the tree was $2.60\,\text{m}$, exactly 2 years after being planted
- the height of the tree was $5.10\,\text{m}$, exactly 10 years after being planted

**(a)** find a complete equation for the model, giving the values of $a$ and $b$ to 3 significant figures. **(4)**

Given that the height of the tree was $7\,\text{m}$, exactly 20 years after being planted

**(b)** evaluate the model, giving reasons for your answer. **(2)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Set up simultaneous equations**
For $t = 2, h = 2.60$:
$$2.60^2 = 2a + b \Rightarrow 6.76 = 2a + b$$
For $t = 10, h = 5.10$:
$$5.10^2 = 10a + b \Rightarrow 26.01 = 10a + b$$
- **[M1]** Translates given data into two equations involving $a$ and $b$.
- **[A1]** Both equations correct: $6.76 = 2a + b$ and $26.01 = 10a + b$.

**Step 2: Solve for $a$ and $b$**
$$8a = 26.01 - 6.76 = 19.25 \Rightarrow a = 2.40625 \approx 2.41$$
$$b = 6.76 - 2(2.40625) = 1.9475 \approx 1.95$$
- **[M1]** Solves simultaneous equations to find values for $a$ and $b$.

**Step 3: State the complete equation**
$$h^2 = 2.41t + 1.95 \quad \text{or} \quad h = \sqrt{2.41t + 1.95}$$
- **[A1]** Complete equation with $a = 2.41$ and $b = 1.95$ given to 3 significant figures.

#### **Part (b)**

**Step 4: Calculate predicted height at $t = 20$**
$$h = \sqrt{2.40625(20) + 1.9475} = \sqrt{50.0725} \approx 7.08\,\text{m}$$
- **[M1]** Substitutes $t = 20$ into their model equation to find $h$.

**Step 5: Evaluate model by comparison**
Predicted height $7.08\,\text{m}$ is very close to the actual height of $7\,\text{m}$ (differing by about 1%), so the model is reliable/accurate/good.
- **[A1]** Compares predicted height ($\approx 7.08\,\text{m}$) with $7\,\text{m}$ and concludes model is good/suitable.

---
topic: "Graphs and Transformations"
subtopic: "Cubic graphs"
---
### **Question 6**

**Figure 1** shows a sketch of a curve $C$ with equation $y = \text{f}(x)$ where $\text{f}(x)$ is a cubic expression in $x$.

The curve
- passes through the origin
- has a maximum turning point at $(2, 8)$
- has a minimum turning point at $(6, 0)$

**(a)** Write down the set of values of $x$ for which
$$\text{f}'(x) < 0$$ **(1)**

The line with equation $y = k$, where $k$ is a constant, intersects $C$ at only one point.

**(b)** Find the set of values of $k$, giving your answer in set notation. **(2)**

**(c)** Find the equation of $C$. You may leave your answer in factorised form. **(3)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Identify region of negative gradient**
Gradient is negative between the turning points $x = 2$ and $x = 6$.
$$2 < x < 6 \quad \text{or} \quad (2, 6) \quad \text{or} \quad \{x \in \mathbb{R} : 2 < x < 6\}$$
- **[B1]** Correct set of values.

#### **Part (b)**

**Step 2: Determine values of $k$ for a single intersection**
Single intersection occurs below the minimum turning point ($y < 0$) or above the maximum turning point ($y > 8$).
$$\{k : k < 0\} \cup \{k : k > 8\}$$
- **[M1]** Realises single intersection occurs for $k < 0$ or $k > 8$.
- **[A1]** Fully correct answer in set notation, e.g. $\{k : k < 0 \text{ or } k > 8\}$ or $\{k : k < 0\} \cup \{k : k > 8\}$.

#### **Part (c)**

**Step 3: Set up factorised form of cubic**
Since there is a minimum at $(6,0)$, $(x - 6)^2$ is a factor. Since it passes through $(0,0)$, $x$ is a factor.
$$\text{f}(x) = ax(x - 6)^2$$
- **[M1]** Identifies $\text{f}(x) = ax(x - 6)^2$ or equivalent factor form.

**Step 4: Find the constant $a$**
Substitute $(2, 8)$:
$$8 = a(2)(2 - 6)^2 \Rightarrow 8 = a(2)(16) \Rightarrow 32a = 8 \Rightarrow a = \frac{1}{4}$$
- **[M1]** Substitutes $(2, 8)$ to find $a$.

**Step 5: Write down the equation**
$$y = \frac{1}{4}x(x - 6)^2$$
- **[A1]** Correct equation for $C$ in any valid form, e.g. $y = \frac{1}{4}x(x - 6)^2$.

---
topic: "Algebraic Methods"
subtopic: "Proof by contradiction"
---
### **Question 7**

**(i)** Given that $p$ and $q$ are integers such that
$$pq \text{ is even}$$
use algebra to prove by contradiction that at least one of $p$ or $q$ is even. **(3)**

**(ii)** Given that $x$ and $y$ are integers such that
- $x < 0$
- $(x + y)^2 < 9x^2 + y^2$
show that $y > 4x$ **(2)**

### **Mark Scheme 7**

#### **Part (i)**

**Step 1: State the contradiction assumption**
Assume the negation: $p$ and $q$ are both odd integers.
- **[B1]** Begins proof by assuming that neither $p$ nor $q$ is even (i.e. both $p$ and $q$ are odd).

**Step 2: Algebraically expand the product of two odd numbers**
Let $p = 2m + 1$ and $q = 2n + 1$ for integers $m, n$.
$$pq = (2m + 1)(2n + 1) = 4mn + 2m + 2n + 1 = 2(2mn + m + n) + 1$$
- **[M1]** Writes $p = 2m + 1$ and $q = 2n + 1$ (or equivalent) and expands $pq$.

**Step 3: Conclude the contradiction**
$2(2mn + m + n) + 1$ is an odd integer, which contradicts the given condition that $pq$ is even. Therefore, at least one of $p$ or $q$ must be even.
- **[A1]** Completes argument showing $pq$ is odd, states the contradiction to $pq$ being even, and concludes original statement is true.

#### **Part (ii)**

**Step 4: Expand and simplify the inequality**
$$(x + y)^2 < 9x^2 + y^2$$
$$x^2 + 2xy + y^2 < 9x^2 + y^2$$
$$2xy < 8x^2$$
- **[M1]** Expands LHS and cancels $y^2$ to obtain $2xy < 8x^2$ (or $xy < 4x^2$).

**Step 5: Divide by $2x$ using the condition $x < 0$**
Since $x < 0$, dividing by $2x$ reverses the inequality sign:
$$\frac{2xy}{2x} > \frac{8x^2}{2x} \Rightarrow y > 4x$$
- **[A1]** Divides by $x$ (or $2x$), explicitly stating or using $x < 0$ to reverse inequality direction, obtaining $y > 4x$.

---
topic: "Numerical Methods"
subtopic: "Iteration"
---
### **Question 8**

**Figure 2** shows a graph of the speed of the car, $v\,\text{ms}^{-1}$, as it travels between the two sets of traffic lights.

The car takes $T$ seconds to travel between the two sets of traffic lights.

The speed of the car is modelled by the equation
$$v = (10 - 0.4t) \ln(t + 1) \quad 0 \le t \le T$$

where $t$ seconds is the time after the car leaves the first set of traffic lights.

According to the model,

**(a)** find the value of $T$ **(1)**

**(b)** show that the maximum speed of the car occurs when
$$t = \frac{26}{1 + \ln(t + 1)} - 1$$ **(4)**

Using the iteration formula
$$t_{n+1} = \frac{26}{1 + \ln(t_n + 1)} - 1$$

with $t_1 = 7$

**(c) (i)** find the value of $t_3$ to 3 decimal places,

**(ii)** find, by repeated iteration, the time taken for the car to reach maximum speed. **(3)**

### **Mark Scheme 8**

#### **Part (a)**

**Step 1: Find $T$ when $v = 0$**
$$v = 0 \Rightarrow 10 - 0.4T = 0 \Rightarrow T = 25$$
- **[B1]** $T = 25$

#### **Part (b)**

**Step 2: Differentiate $v$ with respect to $t$**
Using product rule on $u = 10 - 0.4t$ and $w = \ln(t + 1)$:
$$\frac{\text{d}v}{\text{d}t} = -0.4\ln(t + 1) + (10 - 0.4t)\frac{1}{t + 1}$$
- **[M1]** Applies product rule to differentiate $(10 - 0.4t)\ln(t + 1)$.
- **[A1]** Correct derivative $\frac{\text{d}v}{\text{d}t} = -0.4\ln(t + 1) + \frac{10 - 0.4t}{t + 1}$.

**Step 3: Set $\frac{\text{d}v}{\text{d}t} = 0$ and rearrange**
$$-0.4\ln(t + 1) + \frac{10 - 0.4t}{t + 1} = 0$$
$$(10 - 0.4t) - 0.4(t + 1)\ln(t + 1) = 0$$
- **[M1]** Equates derivative to 0 and multiplies by $(t + 1)$.

**Step 4: Rearrange to given form**
$$10 - 0.4t = 0.4(t + 1)\ln(t + 1)$$
$$25 - t = (t + 1)\ln(t + 1)$$
$$26 - (t + 1) = (t + 1)\ln(t + 1)$$
$$26 = (t + 1)(1 + \ln(t + 1))$$
$$t + 1 = \frac{26}{1 + \ln(t + 1)} \Rightarrow t = \frac{26}{1 + \ln(t + 1)} - 1$$
- **[A1]** Complete convincing proof showing all steps to given answer.

#### **Part (c)**

**Step 5: Apply iteration formula**
$$t_1 = 7$$
$$t_2 = \frac{26}{1 + \ln(7 + 1)} - 1 = \frac{26}{1 + \ln 8} - 1 \approx 7.442...$$
$$t_3 = \frac{26}{1 + \ln(7.442... + 1)} - 1 \approx 7.300$$
- **[M1]** Calculates $t_2$ correctly and uses it to find $t_3$.
- **[A1]** $t_3 = 7.300$ (or $7.300...$) to 3 decimal places.

**Step 6: Perform repeated iteration to convergence**
$$t_4 \approx 7.340$$
$$t_5 \approx 7.328$$
$$t_6 \approx 7.331$$
Converges to $7.33$ seconds.
- **[A1]** $7.33$ (seconds)

---
topic: "Vectors"
subtopic: "Vectors in 3D"
---
### **Question 9**

**Figure 3** shows a sketch of a parallelogram $PQRS$.

Given that
- $\overrightarrow{PQ} = 2\mathbf{i} + 3\mathbf{j} - 4\mathbf{k}$
- $\overrightarrow{QR} = 5\mathbf{i} - 2\mathbf{k}$

**(a)** show that parallelogram $PQRS$ is a rhombus. **(2)**

**(b)** Find the exact area of the rhombus $PQRS$. **(4)**

### **Mark Scheme 9**

#### **Part (a)**

**Step 1: Calculate magnitudes of adjacent side vectors**
$$|\overrightarrow{PQ}| = \sqrt{2^2 + 3^2 + (-4)^2} = \sqrt{4 + 9 + 16} = \sqrt{29}$$
$$|\overrightarrow{QR}| = \sqrt{5^2 + 0^2 + (-2)^2} = \sqrt{25 + 0 + 4} = \sqrt{29}$$
- **[M1]** Calculates magnitude of either $\overrightarrow{PQ}$ or $\overrightarrow{QR}$.

**Step 2: Conclude that $PQRS$ is a rhombus**
Since $|\overrightarrow{PQ}| = |\overrightarrow{QR}| = \sqrt{29}$, adjacent sides are equal in length, so $PQRS$ is a rhombus.
- **[A1]** Shows both magnitudes are $\sqrt{29}$ and makes a concluding statement.

#### **Part (b)**

**Step 3: Calculate the scalar product $\overrightarrow{PQ} \cdot \overrightarrow{QR}$**
$$\overrightarrow{PQ} \cdot \overrightarrow{QR} = 2(5) + 3(0) + (-4)(-2) = 10 + 0 + 8 = 18$$
- **[M1]** Uses dot product formula to find $\overrightarrow{PQ} \cdot \overrightarrow{QR} = 18$.

**Step 4: Find $\cos \theta$ where $\theta$ is angle $PQR$**
$$\cos \theta = \frac{18}{\sqrt{29}\sqrt{29}} = \frac{18}{29}$$
- **[M1]** Finds $\cos \theta = \frac{18}{29}$.

**Step 5: Find $\sin \theta$**
$$\sin \theta = \sqrt{1 - \left(\frac{18}{29}\right)^2} = \sqrt{\frac{841 - 324}{841}} = \frac{\sqrt{517}}{29}$$
- **[M1]** Uses $\sin^2 \theta + \cos^2 \theta = 1$ to find $\sin \theta = \frac{\sqrt{517}}{29}$.

**Step 6: Compute Area**
$$\text{Area} = |\overrightarrow{PQ}| |\overrightarrow{QR}| \sin \theta = \sqrt{29} \cdot \sqrt{29} \cdot \frac{\sqrt{517}}{29} = \sqrt{517}$$
- **[A1]** $\sqrt{517}$

---
topic: "Exponentials and Logarithms"
subtopic: "Exponential modelling"
---
### **Question 10**

A scientist is studying the number of bees and the number of wasps on an island.

The number of bees, measured in thousands, $N_b$, is modelled by the equation
$$N_b = 45 + 220\,\text{e}^{0.05t}$$

where $t$ is the number of years from the start of the study.

According to the model,

**(a)** find the number of bees at the start of the study, **(1)**

**(b)** show that, exactly 10 years after the start of the study, the number of bees was increasing at a rate of approximately 18 thousand per year. **(3)**

The number of wasps, measured in thousands, $N_w$, is modelled by the equation
$$N_w = 10 + 800\,\text{e}^{-0.05t}$$

where $t$ is the number of years from the start of the study.

When $t = T$, according to the models, there are an equal number of bees and wasps.

**(c)** Find the value of $T$ to 2 decimal places. **(4)**

### **Mark Scheme 10**

#### **Part (a)**

**Step 1: Evaluate $N_b$ at $t = 0$**
$$N_b = 45 + 220\,\text{e}^0 = 45 + 220 = 265 \text{ thousand (or 265 000)}$$
- **[B1]** 265 thousand or 265 000

#### **Part (b)**

**Step 2: Differentiate $N_b$ with respect to $t$**
$$\frac{\text{d}N_b}{\text{d}t} = 220(0.05)\text{e}^{0.05t} = 11\text{e}^{0.05t}$$
- **[M1]** Differentiates $N_b$ to obtain $k\text{e}^{0.05t}$.
- **[A1]** Correct derivative $\frac{\text{d}N_b}{\text{d}t} = 11\text{e}^{0.05t}$.

**Step 3: Substitute $t = 10$**
$$\frac{\text{d}N_b}{\text{d}t} = 11\text{e}^{0.5} \approx 18.135... \approx 18 \text{ thousand per year}$$
- **[A1]** Substitutes $t = 10$ to get $18.135...$ and concludes $\approx 18$ thousand per year.

#### **Part (c)**

**Step 4: Equate $N_b$ and $N_w$**
$$45 + 220\text{e}^{0.05T} = 10 + 800\text{e}^{-0.05T}$$
$$35 + 220\text{e}^{0.05T} - 800\text{e}^{-0.05T} = 0$$
- **[M1]** Sets $N_b = N_w$ to form an equation in $T$.

**Step 5: Form quadratic in $\text{e}^{0.05T}$**
Let $x = \text{e}^{0.05T}$:
$$220x^2 + 35x - 800 = 0 \Rightarrow 44x^2 + 7x - 160 = 0$$
- **[M1]** Multiplies by $\text{e}^{0.05T}$ to form a quadratic in $\text{e}^{0.05T}$.

**Step 6: Solve for $\text{e}^{0.05T}$**
$$x = \frac{-7 \pm \sqrt{7^2 - 4(44)(-160)}}{2(44)} = \frac{-7 + \sqrt{28209}}{88} \approx 1.8290$$
- **[M1]** Solves quadratic to obtain positive value $\text{e}^{0.05T} \approx 1.8290$.

**Step 7: Solve for $T$ using logarithms**
$$0.05T = \ln(1.8290...) \Rightarrow T = \frac{\ln 1.8290...}{0.05} \approx 12.08$$
- **[A1]** $T = 12.08$ (to 2 decimal places).

---
topic: "Algebraic Methods"
subtopic: "Dividing polynomials"
---
### **Question 11**

**Figure 4** shows a sketch of part of the curve $C_1$ with equation
$$y = 2x^3 + 10 \quad x > 0$$

and part of the curve $C_2$ with equation
$$y = 42x - 15x^2 - 7 \quad x > 0$$

**(a)** Verify that the curves intersect at $x = \frac{1}{2}$ **(2)**

The curves intersect again at the point $P$

**(b)** Using algebra and showing all stages of working, find the exact $x$ coordinate of $P$ **(5)**

### **Mark Scheme 11**

#### **Part (a)**

**Step 1: Evaluate $y$ for both curves at $x = \frac{1}{2}$**
For $C_1$: $y = 2\left(\frac{1}{2}\right)^3 + 10 = \frac{1}{4} + 10 = 10.25$
For $C_2$: $y = 42\left(\frac{1}{2}\right) - 15\left(\frac{1}{2}\right)^2 - 7 = 21 - 3.75 - 7 = 10.25$
- **[M1]** Substitutes $x = \frac{1}{2}$ into both equations.
- **[A1]** Shows both give $y = 10.25$ (or $\frac{41}{4}$) and concludes curves intersect.

#### **Part (b)**

**Step 2: Equate equations of $C_1$ and $C_2$**
$$2x^3 + 10 = 42x - 15x^2 - 7$$
$$2x^3 + 15x^2 - 42x + 17 = 0$$
- **[M1]** Equates $C_1$ and $C_2$ to form cubic equation $2x^3 + 15x^2 - 42x + 17 = 0$.

**Step 3: Factor out $(2x - 1)$ or $\left(x - \frac{1}{2}\right)$**
$$(2x - 1)(x^2 + 8x - 17) = 0$$
- **[M1]** Divides cubic by $(2x - 1)$ or $(x - 0.5)$ to find quadratic factor.
- **[A1]** Correct quadratic factor $(x^2 + 8x - 17)$.

**Step 4: Solve the quadratic equation**
$$x^2 + 8x - 17 = 0 \Rightarrow x = \frac{-8 \pm \sqrt{8^2 - 4(1)(-17)}}{2} = \frac{-8 \pm \sqrt{132}}{2} = -4 \pm \sqrt{33}$$
- **[M1]** Uses quadratic formula or completing the square to solve quadratic.

**Step 5: Select the positive root for point $P$**
Since $x > 0$:
$$x = \sqrt{33} - 4$$
- **[A1]** Exact answer $x = \sqrt{33} - 4$ (or $-4 + \sqrt{33}$).

---
topic: "Integration"
subtopic: "Integration by parts"
---
### **Question 12**

In this question you must show all stages of your working.

Solutions relying on calculator technology are not acceptable.

Show that
$$\int_1^{\text{e}^2} x^3 \ln x \, \text{d}x = a\text{e}^8 + b$$

where $a$ and $b$ are rational constants to be found. **(5)**

### **Mark Scheme 12**

**Step 1: Apply integration by parts formula**
Let $u = \ln x \Rightarrow u' = \frac{1}{x}$
Let $v' = x^3 \Rightarrow v = \frac{x^4}{4}$
$$\int x^3 \ln x \, \text{d}x = \frac{x^4}{4} \ln x - \int \frac{x^4}{4} \cdot \frac{1}{x} \, \text{d}x$$
- **[M1]** Identifies $u = \ln x$ and $v' = x^3$, applying integration by parts.
- **[A1]** Correct intermediate expression $\frac{x^4}{4}\ln x - \int \frac{x^3}{4} \, \text{d}x$.

**Step 2: Complete integration**
$$\int x^3 \ln x \, \text{d}x = \frac{x^4}{4} \ln x - \frac{x^4}{16}$$
- **[A1]** Correct integrated expression $\frac{x^4}{4}\ln x - \frac{x^4}{16}$.

**Step 3: Substitute upper and lower limits**
$$\left[ \frac{x^4}{4} \ln x - \frac{x^4}{16} \right]_1^{\text{e}^2} = \left( \frac{(\text{e}^2)^4}{4} \ln(\text{e}^2) - \frac{(\text{e}^2)^4}{16} \right) - \left( \frac{1^4}{4}\ln 1 - \frac{1^4}{16} \right)$$
- **[M1]** Substitutes limits $\text{e}^2$ and $1$ into integrated function and subtracts.

**Step 4: Simplify to form $a\text{e}^8 + b$**
$$= \left( \frac{\text{e}^8}{4} (2) - \frac{\text{e}^8}{16} \right) - \left( 0 - \frac{1}{16} \right)$$
$$= \frac{\text{e}^8}{2} - \frac{\text{e}^8}{16} + \frac{1}{16} = \frac{7}{16}\text{e}^8 + \frac{1}{16}$$
Thus $a = \frac{7}{16}$ and $b = \frac{1}{16}$.
- **[A1]** Correct final answer $\frac{7}{16}\text{e}^8 + \frac{1}{16}$ (with $a = \frac{7}{16}, b = \frac{1}{16}$).

---
topic: "Sequences and Series"
subtopic: "Arithmetic series"
---
### **Question 13**

**(i)** In an arithmetic series, the first term is $a$ and the common difference is $d$.

Show that
$$S_n = \frac{n}{2} [2a + (n - 1)d]$$ **(3)**

**(ii)** James saves money over a number of weeks to buy a printer that costs £64

He saves £10 in week 1, £9.20 in week 2, £8.40 in week 3 and so on, so that the weekly amounts he saves form an arithmetic sequence.

Given that James takes $n$ weeks to save exactly £64

**(a)** show that
$$n^2 - 26n + 160 = 0$$ **(2)**

**(b)** Solve the equation
$$n^2 - 26n + 160 = 0$$ **(1)**

**(c)** Hence state the number of weeks James takes to save enough money to buy the printer, giving a brief reason for your answer. **(1)**

### **Mark Scheme 13**

#### **Part (i)**

**Step 1: Write down sum in forward and reverse order**
$$S_n = a + (a + d) + (a + 2d) + \dots + (a + (n - 1)d)$$
$$S_n = (a + (n - 1)d) + (a + (n - 2)d) + \dots + a$$
- **[M1]** Writes down sum of $n$ terms in forward order and reverse order (or uses sum of pairs argument).

**Step 2: Add the two equations**
$$2S_n = n [2a + (n - 1)d]$$
- **[M1]** Adds corresponding terms to obtain $2S_n = n[\text{first term} + \text{last term}]$.

**Step 3: Conclude formula**
$$S_n = \frac{n}{2} [2a + (n - 1)d]$$
- **[A1]** Complete proof with no errors.

#### **Part (ii)(a)**

**Step 4: Identify parameters and set up sum equation**
$a = 10$, $d = -0.80$, $S_n = 64$
$$64 = \frac{n}{2} [2(10) + (n - 1)(-0.8)]$$
- **[M1]** Substitutes $a = 10, d = -0.80, S_n = 64$ into arithmetic sum formula.

**Step 5: Simplify to given quadratic**
$$64 = \frac{n}{2} [20 - 0.8n + 0.8]$$
$$128 = n [20.8 - 0.8n]$$
$$128 = 20.8n - 0.8n^2$$
$$0.8n^2 - 20.8n + 128 = 0 \xrightarrow{\div 0.8} n^2 - 26n + 160 = 0$$
- **[A1]** Rearranges correctly to obtain $n^2 - 26n + 160 = 0$.

#### **Part (ii)(b)**

**Step 6: Solve the quadratic equation**
$$(n - 10)(n - 16) = 0 \Rightarrow n = 10 \text{ or } n = 16$$
- **[B1]** Both $n = 10$ and $n = 16$.

#### **Part (ii)(c)**

**Step 7: Select valid answer with reason**
10 weeks.
Reason: James reaches the required target of £64 after 10 weeks, so he does not need to continue saving until week 16.
- **[B1]** States 10 weeks with a valid reason (e.g. target reached after 10 weeks / money saved in subsequent weeks leads to negative saving).

---
topic: "Trigonometry and Modelling"
subtopic: "Addition formulae"
---
### **Question 14**

In this question you must show all stages of your working.

Solutions relying entirely on calculator technology are not acceptable.

**(a)** Given that
$$2\sin(x - 60^\circ) = \cos(x - 30^\circ)$$

show that
$$\tan x = 3\sqrt{3}$$ **(4)**

**(b)** Hence or otherwise solve, for $0 \le \theta < 180^\circ$
$$2\sin 2\theta = \cos(2\theta + 30^\circ)$$

giving your answers to one decimal place. **(4)**

### **Mark Scheme 14**

#### **Part (a)**

**Step 1: Expand using compound angle formulas**
$$2(\sin x \cos 60^\circ - \cos x \sin 60^\circ) = \cos x \cos 30^\circ + \sin x \sin 30^\circ$$
- **[M1]** Uses $\sin(A - B)$ and $\cos(A - B)$ expansion formulas.

**Step 2: Substitute exact trigonometric values**
$$2\left(\frac{1}{2}\sin x - \frac{\sqrt{3}}{2}\cos x\right) = \frac{\sqrt{3}}{2}\cos x + \frac{1}{2}\sin x$$
$$\sin x - \sqrt{3}\cos x = \frac{\sqrt{3}}{2}\cos x + \frac{1}{2}\sin x$$
- **[M1]** Substitutes exact values $\sin 60^\circ = \cos 30^\circ = \frac{\sqrt{3}}{2}$ and $\cos 60^\circ = \sin 30^\circ = \frac{1}{2}$.

**Step 3: Collect terms in $\sin x$ and $\cos x$**
$$\sin x - \frac{1}{2}\sin x = \frac{\sqrt{3}}{2}\cos x + \sqrt{3}\cos x$$
$$\frac{1}{2}\sin x = \frac{3\sqrt{3}}{2}\cos x$$
- **[M1]** Collects $\sin x$ terms on one side and $\cos x$ terms on the other.

**Step 4: Divide by $\cos x$ to reach $\tan x$**
$$\tan x = 3\sqrt{3}$$
- **[A1]** Complete proof reaching $\tan x = 3\sqrt{3}$.

#### **Part (b)**

**Step 5: Relate equation to part (a)**
Let $x = 2\theta + 60^\circ$.
Then $x - 60^\circ = 2\theta$ and $x - 30^\circ = 2\theta + 30^\circ$.
Thus $2\sin 2\theta = \cos(2\theta + 30^\circ) \Rightarrow \tan(2\theta + 60^\circ) = 3\sqrt{3}$.
- **[M1]** Connects given equation to part (a) by setting $\tan(2\theta + 60^\circ) = 3\sqrt{3}$.

**Step 6: Determine range for $2\theta + 60^\circ$**
$$0 \le \theta < 180^\circ \Rightarrow 60^\circ \le 2\theta + 60^\circ < 420^\circ$$

**Step 7: Calculate principal and secondary values**
$$\arctan(3\sqrt{3}) \approx 79.1066^\circ$$
$$2\theta + 60^\circ = 79.1066^\circ, 259.1066^\circ$$
- **[M1]** Finds $\arctan(3\sqrt{3})$ and identifies correct angles in range.

**Step 8: Solve for $\theta$**
$$2\theta = 19.1066^\circ \Rightarrow \theta = 9.6^\circ$$
$$2\theta = 199.1066^\circ \Rightarrow \theta = 99.6^\circ$$
- **[A1]** $\theta = 9.6^\circ$
- **[A1]** $\theta = 99.6^\circ$

---
topic: "Differentiation"
subtopic: "Modelling with differentiation"
---
### **Question 15**

**Figure 5** shows the design for a solid toy that looks like a piece of cheese.

The toy is modelled so that
- face $ABC$ is a sector of a circle with radius $r\,\text{cm}$ and centre $A$
- angle $BAC = 0.8\,\text{radians}$
- faces $ABC$ and $DEF$ are congruent
- edges $AD$, $CF$ and $BE$ are perpendicular to faces $ABC$ and $DEF$
- edges $AD$, $CF$ and $BE$ have length $h\,\text{cm}$

Given that the volume of the toy is $240\,\text{cm}^3$

**(a)** show that the surface area of the toy, $S\,\text{cm}^2$, is given by
$$S = 0.8r^2 + \frac{1680}{r}$$

making your method clear. **(4)**

Using algebraic differentiation,

**(b)** find the value of $r$ for which $S$ has a stationary point. **(4)**

**(c)** Prove, by further differentiation, that this value of $r$ gives the minimum surface area of the toy. **(2)**

### **Mark Scheme 15**

#### **Part (a)**

**Step 1: Express volume in terms of $r$ and $h$**
$$\text{Area of sector } ABC = \frac{1}{2} r^2 \theta = \frac{1}{2} r^2 (0.8) = 0.4r^2$$
$$\text{Volume} = 0.4r^2 h = 240 \Rightarrow h = \frac{600}{r^2}$$
- **[B1]** Correct volume expression $0.4r^2 h = 240$ or $h = \frac{600}{r^2}$.

**Step 2: Express total surface area $S$ in terms of $r$ and $h$**
$$\text{Arc length } BC = r\theta = 0.8r$$
$$S = 2 \times (\text{Area of sector}) + \text{Area of } ABED + \text{Area of } ACFD + \text{Area of curved face } BCFE$$
$$S = 2(0.4r^2) + rh + rh + (0.8r)h = 0.8r^2 + 2.8rh$$
- **[M1]** Sums areas of all 5 faces to write $S = 2(0.4r^2) + 2rh + 0.8rh$.

**Step 3: Substitute $h = \frac{600}{r^2}$ into $S$**
$$S = 0.8r^2 + 2.8r \left( \frac{600}{r^2} \right) = 0.8r^2 + \frac{1680}{r}$$
- **[M1]** Substitutes $h = \frac{600}{r^2}$ into surface area formula.
- **[A1]** Complete convincing proof showing all steps to given answer.

#### **Part (b)**

**Step 4: Differentiate $S$ with respect to $r$**
$$\frac{\text{d}S}{\text{d}r} = 1.6r - \frac{1680}{r^2}$$
- **[M1]** Differentiates $S$ to obtain $ar + br^{-2}$.
- **[A1]** Correct derivative $\frac{\text{d}S}{\text{d}r} = 1.6r - \frac{1680}{r^2}$.

**Step 5: Set derivative to zero and solve for $r$**
$$1.6r - \frac{1680}{r^2} = 0 \Rightarrow 1.6r^3 = 1680 \Rightarrow r^3 = 1050$$
$$r = \sqrt[3]{1050} \approx 10.16\,\text{cm}$$
- **[M1]** Sets $\frac{\text{d}S}{\text{d}r} = 0$ and solves for $r$.
- **[A1]** $r = \sqrt[3]{1050} \approx 10.2$ (or $10.16$).

#### **Part (c)**

**Step 6: Find second derivative and determine sign**
$$\frac{\text{d}^2 S}{\text{d}r^2} = 1.6 + \frac{3360}{r^3}$$
- **[M1]** Differentiates again to find $\frac{\text{d}^2 S}{\text{d}r^2}$.

**Step 7: Evaluate second derivative**
At $r^3 = 1050$:
$$\frac{\text{d}^2 S}{\text{d}r^2} = 1.6 + \frac{3360}{1050} = 1.6 + 3.2 = 4.8 > 0$$
Since $\frac{\text{d}^2 S}{\text{d}r^2} > 0$, the stationary point gives a minimum surface area.
- **[A1]** Shows $\frac{\text{d}^2 S}{\text{d}r^2} > 0$ and concludes minimum.

---
topic: "Parametric Equations"
subtopic: "Parametric equations"
---
### **Question 16**

**Figure 6** shows a sketch of the curve $C$ with parametric equations
$$x = 8\sin^2 t \quad y = 2\sin 2t + 3\sin t \quad 0 \le t \le \frac{\pi}{2}$$

The region $R$, shown shaded in **Figure 6**, is bounded by $C$, the $x$-axis and the line with equation $x = 4$

**(a)** Show that the area of $R$ is given by
$$\int_0^a (8 - 8\cos 4t + 48\sin^2 t \cos t)\,\text{d}t$$

where $a$ is a constant to be found. **(5)**

**(b)** Hence, using algebraic integration, find the exact area of $R$. **(4)**

### **Mark Scheme 16**

#### **Part (a)**

**Step 1: Find $\frac{\text{d}x}{\text{d}t}$**
$$x = 8\sin^2 t \Rightarrow \frac{\text{d}x}{\text{d}t} = 16\sin t \cos t$$
- **[B1]** Correct derivative $\frac{\text{d}x}{\text{d}t} = 16\sin t \cos t$.

**Step 2: Determine integration limits for $t$**
When $x = 0$: $8\sin^2 t = 0 \Rightarrow t = 0$
When $x = 4$: $8\sin^2 t = 4 \Rightarrow \sin^2 t = \frac{1}{2} \Rightarrow t = \frac{\pi}{4}$
Thus $a = \frac{\pi}{4}$.
- **[M1]** Uses limits of $x$ to find upper limit $a = \frac{\pi}{4}$.

**Step 3: Substitute $y$ and $\frac{\text{d}x}{\text{d}t}$ into $\int y \frac{\text{d}x}{\text{d}t} \, \text{d}t$**
$$\text{Area} = \int_0^{\pi/4} (2\sin 2t + 3\sin t)(16\sin t \cos t)\,\text{d}t$$
$$= \int_0^{\pi/4} (4\sin t \cos t + 3\sin t)(16\sin t \cos t)\,\text{d}t$$
$$= \int_0^{\pi/4} (64\sin^2 t \cos^2 t + 48\sin^2 t \cos t)\,\text{d}t$$
- **[M1]** Expands integrand into forms suitable for integration.

**Step 4: Rewrite $64\sin^2 t \cos^2 t$ using double angle identities**
$$64\sin^2 t \cos^2 t = 16(2\sin t \cos t)^2 = 16\sin^2 2t = 16 \left( \frac{1 - \cos 4t}{2} \right) = 8 - 8\cos 4t$$
- **[M1]** Applies $\sin 2t = 2\sin t \cos t$ and double angle formula to rewrite $64\sin^2 t \cos^2 t$ as $8 - 8\cos 4t$.

**Step 5: Form given integral**
$$\text{Area} = \int_0^{\pi/4} (8 - 8\cos 4t + 48\sin^2 t \cos t)\,\text{d}t$$
with $a = \frac{\pi}{4}$.
- **[A1]** Reaches given integrand and explicitly states $a = \frac{\pi}{4}$.

#### **Part (b)**

**Step 6: Integrate term by term**
$$\int (8 - 8\cos 4t + 48\sin^2 t \cos t)\,\text{d}t = \left[ 8t - 2\sin 4t + 16\sin^3 t \right]_0^{\pi/4}$$
- **[M1]** Integrates $-8\cos 4t \to -2\sin 4t$ or $48\sin^2 t \cos t \to 16\sin^3 t$.
- **[A1]** Fully correct integrated expression $[8t - 2\sin 4t + 16\sin^3 t]$.

**Step 7: Evaluate limits**
At $t = \frac{\pi}{4}$:
$$8\left(\frac{\pi}{4}\right) - 2\sin\pi + 16\left(\sin\frac{\pi}{4}\right)^3 = 2\pi - 0 + 16\left(\frac{1}{\sqrt{2}}\right)^3 = 2\pi + 16\left(\frac{1}{2\sqrt{2}}\right) = 2\pi + 4\sqrt{2}$$
At $t = 0$: $0$
- **[M1]** Substitutes limits $\frac{\pi}{4}$ and $0$ into their integrated expression.
- **[A1]** Exact area $2\pi + 4\sqrt{2}$ (or $2\pi + \sqrt{32}$).
