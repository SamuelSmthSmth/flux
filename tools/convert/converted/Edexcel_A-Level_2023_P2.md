---
topic: "Differentiation"
subtopic: "Second order derivatives"
---
### **Question 1**

$$f(x) = x^3 + 2x^2 - 8x + 5$$

**(a)** Find $f''(x)$ **(2)**

**(b)**

**(i)** Solve $f''(x) = 0$

**(ii)** Hence find the range of values of $x$ for which $f(x)$ is concave. **(2)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Find the first derivative**
$$f'(x) = 3x^2 + 4x - 8$$

- **[M1]** Differentiates $f(x)$ to obtain at least two terms with correct powers.

**Step 2: Find the second derivative**
$$f''(x) = 6x + 4$$

- **[A1]** Correct second derivative $6x + 4$.

#### **Part (b)**

**Step 3: Solve $f''(x) = 0$**
$$6x + 4 = 0 \Rightarrow x = -\frac{2}{3}$$

- **[M1]** Sets their $f''(x) = 0$ and solves for $x$.

**Step 4: Determine the range of values for concavity**
$$x \le -\frac{2}{3}$$

- **[A1]** Correct inequality $x \le -\frac{2}{3}$ (or $x < -\frac{2}{3}$).

---
topic: "Sequences and Series"
subtopic: "Recurrence relations"
---
### **Question 2**

A sequence $u_1, u_2, u_3 \dots$ is defined by

$$u_1 = 35$$
$$u_{n+1} = u_n + 7\cos\left(\frac{n\pi}{2}\right) - 5(-1)^n$$

**(a)**

**(i)** Show that $u_2 = 40$

**(ii)** Find the value of $u_3$ and the value of $u_4$ **(3)**

Given that the sequence is periodic with order 4

**(b)**

**(i)** write down the value of $u_5$

**(ii)** find the value of $\sum_{r=1}^{25} u_r$ **(3)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Show $u_2 = 40$**
$$u_2 = 35 + 7\cos\left(\frac{\pi}{2}\right) - 5(-1)^1 = 35 + 0 + 5 = 40$$

- **[M1]** Substitutes $n = 1$ into the recurrence relation showing explicit evaluation of $\cos\left(\frac{\pi}{2}\right)$ and $(-1)^1$.

**Step 2: Calculate $u_3$ and $u_4$**
$$u_3 = 40 + 7\cos(\pi) - 5(-1)^2 = 40 - 7 - 5 = 28$$
$$u_4 = 28 + 7\cos\left(\frac{3\pi}{2}\right) - 5(-1)^3 = 28 + 0 + 5 = 33$$

- **[A1]** $u_3 = 28$
- **[A1]** $u_4 = 33$

#### **Part (b)**

**Step 3: Write down $u_5$**
$$u_5 = 35$$

- **[B1]** Correct value of $u_5 = 35$.

**Step 4: Sum one full period**
$$\text{Sum of one period} = 35 + 40 + 28 + 33 = 136$$

- **[M1]** Attempts to sum the 4 terms of one period.

**Step 5: Calculate the sum of 25 terms**
$$\sum_{r=1}^{25} u_r = 6 \times 136 + u_1 = 816 + 35 = 851$$

- **[A1]** Correct total sum $851$.

---
topic: "Exponentials and Logarithms"
subtopic: "Laws of logarithms"
---
### **Question 3**

Given that

$$\log_2(x + 3) + \log_2(x + 10) = 2 + 2\log_2 x$$

**(a)** show that

$$3x^2 - 13x - 30 = 0$$ **(3)**

**(b)**

**(i)** Write down the roots of the equation

$$3x^2 - 13x - 30 = 0$$

**(ii)** Hence state which of the roots in part **(b)(i)** is not a solution of

$$\log_2(x + 3) + \log_2(x + 10) = 2 + 2\log_2 x$$

giving a reason for your answer. **(2)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Apply log laws to combine terms**
$$\log_2((x+3)(x+10)) = \log_2 4 + \log_2(x^2) = \log_2(4x^2)$$

- **[M1]** Uses addition law $\log_2 A + \log_2 B = \log_2(AB)$ or power law $2\log_2 x = \log_2(x^2)$ or converts $2 = \log_2 4$.

**Step 2: Remove logarithms**
$$(x+3)(x+10) = 4x^2$$

- **[M1]** Removes logs correctly to form a polynomial equation.

**Step 3: Simplify to required quadratic**
$$x^2 + 13x + 30 = 4x^2 \Rightarrow 3x^2 - 13x - 30 = 0$$

- **[A1]** Fully correct proof with no errors showing $3x^2 - 13x - 30 = 0$.

#### **Part (b)**

**Step 4: Solve the quadratic equation**
$$(3x + 5)(x - 6) = 0 \Rightarrow x = 6 \text{ or } x = -\frac{5}{3}$$

- **[B1]** Both roots correct: $x = 6$ and $x = -\frac{5}{3}$.

**Step 5: Identify invalid root with reason**
$$x = -\frac{5}{3} \text{ is not a solution because } \log_2 x \text{ is undefined for } x \le 0$$

- **[B1]** Identifies $x = -\frac{5}{3}$ with a valid reason involving the domain of logarithms.

---
topic: "Exponentials and Logarithms"
subtopic: "Exponential modelling"
---
### **Question 4**

Coffee is poured into a cup.

The temperature of the coffee, $H\,^\circ\text{C}$, $t$ minutes after being poured into the cup is modelled by the equation

$$H = A\text{e}^{-Bt} + 30$$

where $A$ and $B$ are constants.

Initially, the temperature of the coffee was $85^\circ\text{C}$.

**(a)** State the value of $A$. **(1)**

Initially, the coffee was cooling at a rate of $7.5^\circ\text{C}$ per minute.

**(b)** Find a complete equation linking $H$ and $t$, giving the value of $B$ to 3 decimal places. **(3)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: State the value of $A$**
$$85 = A(1) + 30 \Rightarrow A = 55$$

- **[B1]** $A = 55$.

#### **Part (b)**

**Step 2: Differentiate $H$ with respect to $t$**
$$\frac{\text{d}H}{\text{d}t} = -AB\text{e}^{-Bt} = -55B\text{e}^{-Bt}$$

- **[M1]** Differentiates to get $\frac{\text{d}H}{\text{d}t} = k\text{e}^{-Bt}$.

**Step 3: Equate initial rate of cooling**
$$\left.\frac{\text{d}H}{\text{d}t}\right|_{t=0} = -7.5 \Rightarrow -55B = -7.5 \Rightarrow B = \frac{7.5}{55} \approx 0.136$$

- **[M1]** Sets $\left.\frac{\text{d}H}{\text{d}t}\right|_{t=0} = -7.5$ and solves for $B$.

**Step 4: Write complete equation**
$$H = 55\text{e}^{-0.136t} + 30$$

- **[A1]** Complete equation with $B = 0.136$ (or $B = \frac{3}{22}$).

---
topic: "Integration"
subtopic: "Finding functions"
---
### **Question 5**

The curve $C$ has equation $y = \text{f}(x)$

The curve
- passes through the point $P(3, -10)$
- has a turning point at $P$

Given that

$$\frac{\text{d}y}{\text{d}x} = 2x^3 - 9x^2 + 5x + k$$

where $k$ is a constant,

**(a)** show that $k = 12$ **(2)**

**(b)** Hence find the coordinates of the point where $C$ crosses the $y$-axis. **(3)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Use turning point condition**
$$\left.\frac{\text{d}y}{\text{d}x}\right|_{x=3} = 0 \Rightarrow 2(3)^3 - 9(3)^2 + 5(3) + k = 0$$

- **[M1]** Sets $\frac{\text{d}y}{\text{d}x} = 0$ at $x = 3$.

**Step 2: Solve for $k$**
$$54 - 81 + 15 + k = 0 \Rightarrow -12 + k = 0 \Rightarrow k = 12$$

- **[A1*]** Shows $k = 12$ convincingly.

#### **Part (b)**

**Step 3: Integrate $\frac{\text{d}y}{\text{d}x}$**
$$y = \int (2x^3 - 9x^2 + 5x + 12)\,\text{d}x = \frac{1}{2}x^4 - 3x^3 + \frac{5}{2}x^2 + 12x + C$$

- **[M1]** Integrates with at least 3 terms correct including constant $+ C$.

**Step 4: Find constant $C$**
$$-10 = \frac{1}{2}(3)^4 - 3(3)^3 + \frac{5}{2}(3)^2 + 12(3) + C$$
$$-10 = 40.5 - 81 + 22.5 + 36 + C \Rightarrow -10 = 18 + C \Rightarrow C = -28$$

- **[M1]** Substitutes $(3, -10)$ into their integrated expression to find $C$.

**Step 5: State coordinates**
$$(0, -28)$$

- **[A1]** Correct coordinates $(0, -28)$.

---
topic: "Vectors"
subtopic: "Position vectors"
---
### **Question 6**

Relative to a fixed origin $O$,

- $A$ is the point with position vector $12\mathbf{i}$
- $B$ is the point with position vector $16\mathbf{j}$
- $C$ is the point with position vector $(50\mathbf{i} + 136\mathbf{j})$
- $D$ is the point with position vector $(22\mathbf{i} + 24\mathbf{j})$

**(a)** Show that $AD$ is parallel to $BC$. **(2)**

Points $A, B, C$ and $D$ are used to model the vertices of a running track in the shape of a quadrilateral.

Runners complete one lap by running along all four sides of the track.

The lengths of the sides are measured in metres.

Given that a particular runner takes exactly 5 minutes to complete 2 laps,

**(b)** calculate the average speed of this runner, giving the answer in kilometres per hour. **(4)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Find vectors $\vec{AD}$ and $\vec{BC}$**
$$\vec{AD} = (22\mathbf{i} + 24\mathbf{j}) - 12\mathbf{i} = 10\mathbf{i} + 24\mathbf{j}$$
$$\vec{BC} = (50\mathbf{i} + 136\mathbf{j}) - 16\mathbf{j} = 50\mathbf{i} + 120\mathbf{j}$$

- **[M1]** Attempts vector subtraction to find both $\vec{AD}$ and $\vec{BC}$.

**Step 2: Show vectors are scalar multiples**
$$\vec{BC} = 5(10\mathbf{i} + 24\mathbf{j}) = 5\vec{AD}$$
Therefore, $AD$ is parallel to $BC$.

- **[A1]** Shows $\vec{BC} = 5\vec{AD}$ and concludes $AD$ is parallel to $BC$.

#### **Part (b)**

**Step 3: Calculate lengths of all four sides**
$$|\vec{AB}| = \sqrt{(-12)^2 + 16^2} = 20\text{ m}$$
$$|\vec{BC}| = \sqrt{50^2 + 120^2} = 130\text{ m}$$
$$\vec{CD} = -28\mathbf{i} - 112\mathbf{j} \Rightarrow |\vec{CD}| = \sqrt{(-28)^2 + (-112)^2} = \sqrt{13328} \approx 115.45\text{ m}$$
$$|\vec{DA}| = \sqrt{(-10)^2 + (-24)^2} = 26\text{ m}$$

- **[M1]** Uses distance formula / magnitude formula for at least 3 sides.
- **[A1]** All side lengths correct ($20, 130, \sqrt{13328}, 26$).

**Step 4: Calculate total distance for 2 laps**
$$\text{Perimeter} = 20 + 130 + 115.447 + 26 = 291.447\text{ m}$$
$$\text{Total distance} = 2 \times 291.447 = 582.894\text{ m} = 0.582894\text{ km}$$

- **[M1]** Sums lengths of all four sides and doubles for 2 laps, converting distance to km or time to hours.

**Step 5: Calculate average speed in km/h**
$$\text{Time} = 5\text{ minutes} = \frac{1}{12}\text{ h}$$
$$\text{Speed} = \frac{0.582894}{1/12} = 6.9947 \approx 6.99\text{ km/h}$$

- **[A1]** Correct average speed of $6.99\text{ km/h}$ (or $7.00\text{ km/h}$).

---
topic: "Differentiation"
subtopic: "Implicit differentiation"
---
### **Question 7**

**In this question you must show all stages of your working.**

**Solutions relying on calculator technology are not acceptable.**

A curve has equation

$$x^3 + 2xy + 3y^2 = 47$$

**(a)** Find $\frac{\text{d}y}{\text{d}x}$ in terms of $x$ and $y$ **(4)**

The point $P(-2, 5)$ lies on the curve.

**(b)** Find the equation of the normal to the curve at $P$, giving your answer in the form $ax + by + c = 0$, where $a, b$ and $c$ are integers to be found. **(3)**

### **Mark Scheme 7**

#### **Part (a)**

**Step 1: Differentiate implicitly**
$$3x^2 + 2y + 2x\frac{\text{d}y}{\text{d}x} + 6y\frac{\text{d}y}{\text{d}x} = 0$$

- **[M1]** Differentiates $x^3 \rightarrow 3x^2$ and $3y^2 \rightarrow ky\frac{\text{d}y}{\text{d}x}$.
- **[M1]** Uses product rule on $2xy \rightarrow 2y + 2x\frac{\text{d}y}{\text{d}x}$.
- **[A1]** Correct implicit derivative expression.

**Step 2: Rearrange for $\frac{\text{d}y}{\text{d}x}$**
$$\frac{\text{d}y}{\text{d}x}(2x + 6y) = -(3x^2 + 2y) \Rightarrow \frac{\text{d}y}{\text{d}x} = -\frac{3x^2 + 2y}{2x + 6y}$$

- **[A1]** Correct expression for $\frac{\text{d}y}{\text{d}x}$.

#### **Part (b)**

**Step 3: Evaluate gradient of tangent and normal at $P(-2, 5)$**
$$m_T = -\frac{3(-2)^2 + 2(5)}{2(-2) + 6(5)} = -\frac{12 + 10}{-4 + 30} = -\frac{22}{26} = -\frac{11}{13}$$
$$m_N = \frac{13}{11}$$

- **[M1]** Substitutes $(-2, 5)$ into their $\frac{\text{d}y}{\text{d}x}$ and takes negative reciprocal to find normal gradient.

**Step 4: Find equation of normal**
$$y - 5 = \frac{13}{11}(x - (-2)) \Rightarrow 11y - 55 = 13x + 26 \Rightarrow 13x - 11y + 81 = 0$$

- **[A1]** Correct equation in specified integer form $13x - 11y + 81 = 0$ (or any non-zero integer multiple).

---
topic: "Trigonometry and Modelling"
subtopic: "Simplifying a cos x ± b sin x"
---
### **Question 8**

**(a)** Express $2\cos\theta + 8\sin\theta$ in the form $R\cos(\theta - \alpha)$, where $R$ and $\alpha$ are constants, $R > 0$ and $0 < \alpha < \frac{\pi}{2}$

Give the exact value of $R$ and give the value of $\alpha$ in radians to 3 decimal places. **(3)**

The first three terms of an arithmetic sequence are

$$\cos x \quad \cos x + \sin x \quad \cos x + 2\sin x \quad x \neq n\pi$$

Given that $S_9$ represents the sum of the first 9 terms of this sequence as $x$ varies,

**(b)**

**(i)** find the exact maximum value of $S_9$

**(ii)** deduce the smallest positive value of $x$ at which this maximum value of $S_9$ occurs. **(3)**

### **Mark Scheme 8**

#### **Part (a)**

**Step 1: Calculate $R$**
$$R = \sqrt{2^2 + 8^2} = \sqrt{68} = 2\sqrt{17}$$

- **[B1]** $R = \sqrt{68}$ or $2\sqrt{17}$.

**Step 2: Calculate $\alpha$**
$$\tan\alpha = \frac{8}{2} = 4 \Rightarrow \alpha = \arctan(4) \approx 1.326\text{ radians}$$

- **[M1]** $\tan\alpha = \pm\frac{8}{2}$ or $\pm\frac{2}{8}$.
- **[A1]** $\alpha \approx 1.326$.

#### **Part (b)**

**Step 3: Express $S_9$ using the arithmetic sum formula**
$$S_9 = \frac{9}{2}\Big(2\cos x + 8\sin x\Big) = 9\cos x + 36\sin x = \frac{9}{2}\sqrt{68}\cos(x - 1.326)$$

- **[M1]** Uses $S_n = \frac{n}{2}(2a + (n-1)d)$ with $a = \cos x$ and $d = \sin x$.

**Step 4: Find maximum value of $S_9$**
$$\text{Max value} = \frac{9}{2}\sqrt{68} = 9\sqrt{17}$$

- **[A1]** Exact maximum value $9\sqrt{17}$ (or $\frac{9\sqrt{68}}{2}$ or $3\sqrt{153}$).

**Step 5: Deduce smallest positive value of $x$**
$$\cos(x - \alpha) = 1 \Rightarrow x = \alpha = 1.326$$

- **[A1]** Smallest positive $x \approx 1.326$.

---
topic: "Parametric Equations"
subtopic: "Parametric equations"
---
### **Question 9**

The curve $C$ has parametric equations

$$x = t^2 + 6t - 16 \quad y = 6\ln(t + 3) \quad t > -3$$

**(a)** Show that a Cartesian equation for $C$ is

$$y = A\ln(x + B) \quad x > -B$$

where $A$ and $B$ are integers to be found. **(3)**

The curve $C$ cuts the $y$-axis at the point $P$

**(b)** Show that the equation of the tangent to $C$ at $P$ can be written in the form

$$ax + by = c\ln 5$$

where $a, b$ and $c$ are integers to be found. **(4)**

### **Mark Scheme 9**

#### **Part (a)**

**Step 1: Express $x$ as a completed square**
$$x = (t + 3)^2 - 25$$

- **[M1]** Completes the square for $x$ in terms of $t+3$.

**Step 2: Eliminate $t$**
$$(t+3)^2 = x + 25 \Rightarrow t+3 = \sqrt{x+25}$$
$$y = 6\ln(\sqrt{x+25}) = 6\ln((x+25)^{\frac{1}{2}}) = 3\ln(x + 25)$$

- **[M1]** Substitutes $t+3$ into $y$ and uses log laws $a\ln(b^c) = ac\ln b$.
- **[A1]** $y = 3\ln(x+25)$ with $A = 3, B = 25$.

#### **Part (b)**

**Step 3: Find parameter $t$ at $P$**
$$x = 0 \Rightarrow t^2 + 6t - 16 = 0 \Rightarrow (t+8)(t-2) = 0 \Rightarrow t = 2 \quad (\text{since } t > -3)$$

- **[M1]** Sets $x = 0$ to find $t = 2$.

**Step 4: Find $y$-coordinate and gradient at $P$**
$$y_P = 6\ln(2+3) = 6\ln 5$$
$$\frac{\text{d}x}{\text{d}t} = 2t + 6, \quad \frac{\text{d}y}{\text{d}t} = \frac{6}{t+3}$$
$$\text{At } t = 2: \frac{\text{d}x}{\text{d}t} = 10, \quad \frac{\text{d}y}{\text{d}t} = \frac{6}{5} \Rightarrow \frac{\text{d}y}{\text{d}x} = \frac{6/5}{10} = \frac{3}{25}$$

- **[M1]** Calculates $\frac{\text{d}y}{\text{d}x} = \frac{\text{d}y/\text{d}t}{\text{d}x/\text{d}t}$ at $t = 2$.

**Step 5: Form tangent equation**
$$y - 6\ln 5 = \frac{3}{25}(x - 0) \Rightarrow 25y - 150\ln 5 = 3x \Rightarrow -3x + 25y = 150\ln 5$$

- **[M1]** Uses $y - y_1 = m(x - x_1)$ with point $(0, 6\ln 5)$ and gradient $\frac{3}{25}$.
- **[A1]** $-3x + 25y = 150\ln 5$ (or $3x - 25y = -150\ln 5$).

---
topic: "Algebraic Methods"
subtopic: "Partial fractions"
---
### **Question 10**

$$\text{f}(x) = \frac{3kx - 18}{(x + 4)(x - 2)} \quad \text{where } k \text{ is a positive constant}$$

**(a)** Express $\text{f}(x)$ in partial fractions in terms of $k$. **(3)**

**(b)** Hence find the exact value of $k$ for which

$$\int_{-3}^{1} \text{f}(x)\,\text{d}x = 21$$ **(4)**

### **Mark Scheme 10**

#### **Part (a)**

**Step 1: Set up partial fractions identity**
$$\frac{3kx - 18}{(x + 4)(x - 2)} = \frac{A}{x + 4} + \frac{B}{x - 2}$$
$$3kx - 18 = A(x - 2) + B(x + 4)$$

- **[M1]** Correct form for partial fractions and forms identity.

**Step 2: Solve for $A$ and $B$**
$$\text{Let } x = 2: \quad 6k - 18 = 6B \Rightarrow B = k - 3$$
$$\text{Let } x = -4: \quad -12k - 18 = -6A \Rightarrow A = 2k + 3$$

- **[A1]** One correct constant in terms of $k$.
- **[A1]** Both constants correct: $\text{f}(x) = \frac{2k+3}{x+4} + \frac{k-3}{x-2}$.

#### **Part (b)**

**Step 3: Integrate $\text{f}(x)$**
$$\int \text{f}(x)\,\text{d}x = (2k+3)\ln|x+4| + (k-3)\ln|x-2|$$

- **[M1]** Integrates to get $P\ln|x+4| + Q\ln|x-2|$.

**Step 4: Substitute limits $-3$ and $1$**
$$\left[ (2k+3)\ln|x+4| + (k-3)\ln|x-2| \right]_{-3}^1$$
$$= \big((2k+3)\ln 5 + 0\big) - \big(0 + (k-3)\ln 5\big) = (k+6)\ln 5$$

- **[M1]** Applies limits $1$ and $-3$ correctly.
- **[M1]** Simplifies logarithmic expression using log laws to $C\ln 5$.

**Step 5: Solve for $k$**
$$(k+6)\ln 5 = 21 \Rightarrow k + 6 = \frac{21}{\ln 5} \Rightarrow k = \frac{21}{\ln 5} - 6$$

- **[A1]** Correct exact value $k = \frac{21}{\ln 5} - 6$.

---
topic: "Modelling with Differential Equations"
subtopic: "Modelling with first-order differential equations"
---
### **Question 11**

**Figure 1** shows a tank in the shape of a cuboid being filled with water.

**Figure 1** shows a cuboid tank with base dimensions $20\,\text{m}$ by $10\,\text{m}$ and height $5\,\text{m}$, containing water up to height $h\,\text{m}$.

A tank in the shape of a cuboid is being filled with water.

The base of the tank measures $20\,\text{m}$ by $10\,\text{m}$ and the height of the tank is $5\,\text{m}$, as shown in **Figure 1**.

At time $t$ minutes after water started flowing into the tank the height of the water was $h\,\text{m}$ and the volume of water in the tank was $V\,\text{m}^3$

In a model of this situation
- the sides of the tank have negligible thickness
- the rate of change of $V$ is inversely proportional to the square root of $h$

**(a)** Show that

$$\frac{\text{d}h}{\text{d}t} = \frac{\lambda}{\sqrt{h}}$$

where $\lambda$ is a constant. **(3)**

Given that
- initially the height of the water in the tank was $1.44\,\text{m}$
- exactly 8 minutes after water started flowing into the tank the height of the water was $3.24\,\text{m}$

**(b)** use the model to find an equation linking $h$ with $t$, giving your answer in the form

$$h^{\frac{3}{2}} = At + B$$

where $A$ and $B$ are constants to be found. **(5)**

**(c)** Hence find the time taken, from when water started flowing into the tank, for the tank to be completely full. **(2)**

### **Mark Scheme 11**

#### **Part (a)**

**Step 1: Relate volume $V$ and height $h$**
$$V = 20 \times 10 \times h = 200h \Rightarrow \frac{\text{d}V}{\text{d}h} = 200$$

- **[B1]** State $V = 200h$ or $\frac{\text{d}V}{\text{d}h} = 200$.

**Step 2: Apply chain rule**
$$\frac{\text{d}V}{\text{d}t} = \frac{c}{\sqrt{h}} \quad \text{and} \quad \frac{\text{d}V}{\text{d}t} = \frac{\text{d}V}{\text{d}h}\frac{\text{d}h}{\text{d}t}$$
$$200\frac{\text{d}h}{\text{d}t} = \frac{c}{\sqrt{h}} \Rightarrow \frac{\text{d}h}{\text{d}t} = \frac{c/200}{\sqrt{h}} = \frac{\lambda}{\sqrt{h}}$$

- **[M1]** Uses chain rule linking $\frac{\text{d}V}{\text{d}t}$ and $\frac{\text{d}h}{\text{d}t}$.
- **[A1*]** Fully correct proof to give $\frac{\text{d}h}{\text{d}t} = \frac{\lambda}{\sqrt{h}}$.

#### **Part (b)**

**Step 3: Separate variables and integrate**
$$\int \sqrt{h}\,\text{d}h = \int \lambda\,\text{d}t \Rightarrow \frac{2}{3}h^{\frac{3}{2}} = \lambda t + C \Rightarrow h^{\frac{3}{2}} = \frac{3}{2}\lambda t + \frac{3}{2}C = At + B$$

- **[M1]** Separates variables and integrates $\sqrt{h}$ to $k h^{3/2}$.

**Step 4: Find $B$ using initial conditions**
$$\text{At } t = 0, h = 1.44 \Rightarrow B = (1.44)^{\frac{3}{2}} = 1.728$$

- **[M1]** Substitutes $t = 0, h = 1.44$ to find $B$.

**Step 5: Find $A$ using $t = 8, h = 3.24$**
$$(3.24)^{\frac{3}{2}} = 8A + 1.728 \Rightarrow 5.832 = 8A + 1.728 \Rightarrow 8A = 4.104 \Rightarrow A = 0.513$$

- **[M1]** Substitutes $t = 8, h = 3.24$ to find $A$.
- **[A1]** Correct equation $h^{\frac{3}{2}} = 0.513t + 1.728$.

#### **Part (c)**

**Step 6: Calculate time to fill tank ($h = 5$)**
$$5^{\frac{3}{2}} = 0.513t + 1.728 \Rightarrow 11.1803 = 0.513t + 1.728$$
$$0.513t = 9.4523 \Rightarrow t \approx 18.4\text{ minutes}$$

- **[M1]** Sets $h = 5$ in their model and solves for $t$.
- **[A1]** $t \approx 18.4\text{ minutes}$ (or $18.425...$).

---
topic: "Functions and Graphs"
subtopic: "The modulus function"
---
### **Question 12**

**Figure 2** shows two V-shaped lines representing $N_A$ and $N_B$ over $0 \le t \le 5$, with $N_A$ having a vertex at $(3, 4)$ and $N_B$ having a vertex at $(3, 8)$.

The number of subscribers to two different music streaming companies is being monitored.

The number of subscribers, $N_A$, in thousands, to company A is modelled by the equation

$$N_A = |t - 3| + 4 \quad t \ge 0$$

where $t$ is the time in years since monitoring began.

The number of subscribers, $N_B$, in thousands, to company B is modelled by the equation

$$N_B = 8 - |2t - 6| \quad t \ge 0$$

where $t$ is the time in years since monitoring began.

**Figure 2** shows a sketch of the graph of $N_A$ and the graph of $N_B$ over a 5-year period.

Use the equations of the models to answer parts (a), (b), (c) and (d).

**(a)** Find the initial difference between the number of subscribers to company A and the number of subscribers to company B. **(2)**

When $t = T$ company A reduced its subscription prices and the number of subscribers increased.

**(b)** Suggest a value for $T$, giving a reason for your answer. **(2)**

**(c)** Find the range of values of $t$ for which $N_A > N_B$ giving your answer in set notation. **(5)**

**(d)** State a limitation of the model used for company B. **(1)**

### **Mark Scheme 12**

#### **Part (a)**

**Step 1: Calculate initial subscribers for each company**
$$\text{At } t = 0: \quad N_A = |0 - 3| + 4 = 7$$
$$N_B = 8 - |0 - 6| = 2$$

- **[M1]** Evaluates both $N_A$ and $N_B$ at $t = 0$.

**Step 2: Find difference**
$$\text{Difference} = 7 - 2 = 5 \text{ (i.e. 5000 subscribers)}$$

- **[A1]** Difference = 5 (or 5000).

#### **Part (b)**

**Step 3: State $T$ with reason**
$$T = 3$$
Reason: The minimum point of $N_A$ occurs at $t = 3$, after which the number of subscribers begins to increase.

- **[B1]** $T = 3$.
- **[B1]** Valid reason linking $t = 3$ to the minimum of $N_A$ / point where $N_A$ stops decreasing.

#### **Part (c)**

**Step 4: Set up inequality $N_A > N_B$**
$$|t - 3| + 4 > 8 - |2t - 6| \Rightarrow 3|t - 3| > 4 \Rightarrow |t - 3| > \frac{4}{3}$$

- **[M1]** Combines modulus terms: $3|t - 3| > 4$.

**Step 5: Solve modulus inequality**
$$t - 3 > \frac{4}{3} \Rightarrow t > \frac{13}{3}$$
$$t - 3 < -\frac{4}{3} \Rightarrow t < \frac{5}{3}$$

- **[M1]** Solves $t - 3 > \frac{4}{3}$ to get $t > \frac{13}{3}$.
- **[M1]** Solves $t - 3 < -\frac{4}{3}$ to get $t < \frac{5}{3}$.

**Step 6: Write answer in set notation**
$$\left\{t \in \mathbb{R} : 0 \le t < \frac{5}{3}\right\} \cup \left\{t \in \mathbb{R} : t > \frac{13}{3}\right\}$$

- **[A1]** Correct set notation accounting for domain $t \ge 0$.

#### **Part (d)**

**Step 7: State a limitation**
For $t > 7$, $N_B < 0$, which means subscriber numbers become negative, which is impossible.

- **[B1]** Valid limitation e.g. subscriber count becomes negative for $t > 7$, or subscriber numbers drop too rapidly after 3 years.

---
topic: "Binomial Expansion"
subtopic: "Expanding (a + bx)^n"
---
### **Question 13**

**In this question you must show all stages of your working.**

**Solutions relying entirely on calculator technology are not acceptable.**

**(a)** Find the first three terms, in ascending powers of $x$, of the binomial expansion of

$$(3 + x)^{-2}$$

writing each term in simplest form. **(4)**

**(b)** Using the answer to part (a) and using algebraic integration, estimate the value of

$$\int_{0.2}^{0.4} \frac{6x}{(3 + x)^2}\,\text{d}x$$

giving your answer to 4 significant figures. **(4)**

**(c)** Find, using algebraic integration, the exact value of

$$\int_{0.2}^{0.4} \frac{6x}{(3 + x)^2}\,\text{d}x$$

giving your answer in the form $a\ln b + c$, where $a, b$ and $c$ are constants to be found. **(5)**

### **Mark Scheme 13**

#### **Part (a)**

**Step 1: Factor out $3^{-2}$**
$$(3 + x)^{-2} = 3^{-2}\left(1 + \frac{x}{3}\right)^{-2} = \frac{1}{9}\left(1 + \frac{x}{3}\right)^{-2}$$

- **[B1]** Factors out $3^{-2}$ or $\frac{1}{9}$.

**Step 2: Expand binomial**
$$\left(1 + \frac{x}{3}\right)^{-2} = 1 + (-2)\left(\frac{x}{3}\right) + \frac{(-2)(-3)}{2}\left(\frac{x}{3}\right)^2 + \dots = 1 - \frac{2}{3}x + \frac{1}{3}x^2$$

- **[M1]** Correct binomial structure for power $-2$.
- **[A1]** Correct expansion inside bracket $1 - \frac{2}{3}x + \frac{1}{3}x^2$.

**Step 3: Simplify expanded terms**
$$(3 + x)^{-2} = \frac{1}{9} - \frac{2}{27}x + \frac{1}{27}x^2$$

- **[A1]** Fully simplified terms: $\frac{1}{9} - \frac{2}{27}x + \frac{1}{27}x^2$.

#### **Part (b)**

**Step 4: Multiply expansion by $6x$**
$$\frac{6x}{(3+x)^2} \approx 6x\left(\frac{1}{9} - \frac{2}{27}x + \frac{1}{27}x^2\right) = \frac{2}{3}x - \frac{4}{9}x^2 + \frac{2}{9}x^3$$

- **[M1]** Multiplies expansion by $6x$.

**Step 5: Integrate polynomial approximation**
$$\int_{0.2}^{0.4} \left(\frac{2}{3}x - \frac{4}{9}x^2 + \frac{2}{9}x^3\right)\text{d}x = \left[ \frac{1}{3}x^2 - \frac{4}{27}x^3 + \frac{1}{18}x^4 \right]_{0.2}^{0.4}$$

- **[M1]** Integrates terms correctly.

**Step 6: Evaluate integral at limits**
$$\text{At } 0.4: \quad \frac{1}{3}(0.16) - \frac{4}{27}(0.064) + \frac{1}{18}(0.0256) \approx 0.045274$$
$$\text{At } 0.2: \quad \frac{1}{3}(0.04) - \frac{4}{27}(0.008) + \frac{1}{18}(0.0016) \approx 0.012237$$
$$\text{Difference} = 0.045274 - 0.012237 = 0.033037 \approx 0.03304$$

- **[M1]** Substitutes $0.4$ and $0.2$ and subtracts.
- **[A1]** $0.03304$ (correct to 4 s.f.).

#### **Part (c)**

**Step 7: Use substitution or partial fractions for exact integral**
$$\text{Let } u = 3 + x \Rightarrow \text{d}x = \text{d}u, \quad x = u - 3$$
$$\text{At } x = 0.2, u = 3.2; \quad \text{At } x = 0.4, u = 3.4$$

- **[M1]** Uses suitable substitution $u = 3+x$ or partial fractions $\frac{6x}{(3+x)^2} = \frac{6}{3+x} - \frac{18}{(3+x)^2}$.

**Step 8: Perform exact integration**
$$\int_{3.2}^{3.4} \frac{6(u-3)}{u^2}\,\text{d}u = \int_{3.2}^{3.4} \left(\frac{6}{u} - 18u^{-2}\right)\text{d}u = \left[ 6\ln u + \frac{18}{u} \right]_{3.2}^{3.4}$$

- **[M1]** Integrates to get $A\ln u + \frac{B}{u}$ or $A\ln(3+x) + \frac{B}{3+x}$.
- **[A1]** Correct integrated form $6\ln u + \frac{18}{u}$.

**Step 9: Evaluate limits and simplify to required form**
$$\left(6\ln 3.4 + \frac{18}{3.4}\right) - \left(6\ln 3.2 + \frac{18}{3.2}\right) = 6\ln\left(\frac{3.4}{3.2}\right) + \frac{90}{17} - \frac{45}{8}$$
$$= 6\ln\left(\frac{17}{16}\right) - \frac{45}{136}$$

- **[M1]** Combines log terms using log laws.
- **[A1]** Correct exact form $6\ln\left(\frac{17}{16}\right) - \frac{45}{136}$.

---
topic: "Trigonometric Identities and Equations"
subtopic: "Harder trigonometric equations"
---
### **Question 14**

**In this question you must show all stages of your working.**

**Solutions relying entirely on calculator technology are not acceptable.**

**(a)** Show that the equation

$$2\tan\theta (8\cos\theta + 23\sin^2\theta) = 8\sin 2\theta (1 + \tan^2\theta)$$

may be written as

$$\sin 2\theta (A\cos^2\theta + B\cos\theta + C) = 0$$

where $A, B$ and $C$ are constants to be found. **(3)**

**(b)** Hence, solve for $360^\circ \le x \le 540^\circ$

$$2\tan x (8\cos x + 23\sin^2 x) = 8\sin 2x (1 + \tan^2 x) \quad x \in \mathbb{R} \quad x \neq 450^\circ$$ **(4)**

### **Mark Scheme 14**

#### **Part (a)**

**Step 1: Simplify RHS using identity $1 + \tan^2\theta = \sec^2\theta$**
$$\text{RHS} = 8\sin 2\theta \sec^2\theta = 8(2\sin\theta\cos\theta)\frac{1}{\cos^2\theta} = \frac{16\sin\theta}{\cos\theta} = 16\tan\theta$$

- **[M1]** Replaces $1 + \tan^2\theta$ with $\sec^2\theta$ and $\sin 2\theta$ with $2\sin\theta\cos\theta$.

**Step 2: Collect terms and use $\sin^2\theta = 1 - \cos^2\theta$**
$$2\tan\theta (8\cos\theta + 23\sin^2\theta - 8) = 0$$
$$\frac{\sin 2\theta}{\cos^2\theta} (8\cos\theta + 23(1 - \cos^2\theta) - 8) = 0$$

- **[M1]** Uses $2\tan\theta = \frac{\sin 2\theta}{\cos^2\theta}$ and $\sin^2\theta = 1 - \cos^2\theta$.

**Step 3: Simplify to required form**
$$\sin 2\theta (-23\cos^2\theta + 8\cos\theta + 15) = 0$$

- **[A1]** Correct equation with $A = -23, B = 8, C = 15$ (or $A = 23, B = -8, C = -15$).

#### **Part (b)**

**Step 4: Solve $\sin 2x = 0$ in $360^\circ \le x \le 540^\circ$**
$$2x = 720^\circ, 900^\circ, 1080^\circ \Rightarrow x = 360^\circ, 450^\circ, 540^\circ$$
Since $x \neq 450^\circ$, solutions are $x = 360^\circ, 540^\circ$.

- **[B1]** Identifies $x = 360^\circ$ and $x = 540^\circ$ (excluding $450^\circ$).

**Step 5: Solve quadratic factor $23\cos^2 x - 8\cos x - 15 = 0$**
$$(23\cos x + 15)(\cos x - 1) = 0 \Rightarrow \cos x = 1 \text{ or } \cos x = -\frac{15}{23}$$

- **[M1]** Solves quadratic in $\cos x$.

**Step 6: Find angle for $\cos x = -\frac{15}{23}$**
$$\arccos\left(-\frac{15}{23}\right) \approx 130.76^\circ \Rightarrow x = 360^\circ + 130.76^\circ = 490.8^\circ$$

- **[M1]** Finds value of $x$ in interval $360^\circ \le x \le 540^\circ$.
- **[A1]** $x = 490.8^\circ$ (or $491^\circ$).

---
topic: "Algebraic Methods"
subtopic: "Proof by contradiction"
---
### **Question 15**

A student attempts to answer the following question:

> Given that $x$ is an obtuse angle, use algebra to prove by contradiction that
> $$\sin x - \cos x \ge 1$$

The student starts the proof with:

> Assume that $\sin x - \cos x < 1$ when $x$ is an obtuse angle
> $$\Rightarrow (\sin x - \cos x)^2 < 1$$
> $$\Rightarrow \dots$$

The start of the student's proof is reprinted below.

Complete the proof. **(3)**

Assume that $\sin x - \cos x < 1$ when $x$ is an obtuse angle
$$\Rightarrow (\sin x - \cos x)^2 < 1$$

### **Mark Scheme 15**

**Step 1: Expand bracket and use $\sin^2 x + \cos^2 x = 1$**
$$\sin^2 x - 2\sin x\cos x + \cos^2 x < 1 \Rightarrow 1 - 2\sin x\cos x < 1$$

- **[M1]** Expands $(\sin x - \cos x)^2$ and applies $\sin^2 x + \cos^2 x = 1$.

**Step 2: Rearrange to deduce sign of $2\sin x\cos x$**
$$-2\sin x\cos x < 0 \Rightarrow 2\sin x\cos x > 0$$

- **[M1]** Arrives at $2\sin x\cos x > 0$ (or $\sin 2x > 0$).

**Step 3: State contradiction and complete proof**
For an obtuse angle $x$ ($90^\circ < x < 180^\circ$), $\sin x > 0$ and $\cos x < 0$, so $2\sin x\cos x < 0$.
This contradicts $2\sin x\cos x > 0$.
Hence, the assumption is false, which proves by contradiction that $\sin x - \cos x \ge 1$ for all obtuse angles $x$.

- **[A1]** Clearly states the contradiction that for obtuse $x$, $\sin x > 0$ and $\cos x < 0 \Rightarrow 2\sin x\cos x < 0$, completing the proof by contradiction.
