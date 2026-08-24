---
topic: "Binomial Expansion"
subtopic: "Expanding (1 + x)^n"
---
### **Question 1**

**(a)** Find the first four terms, in ascending powers of $x$, of the binomial expansion of

$$(1 + 8x)^{\frac{1}{2}}$$

giving each term in simplest form. **(3)**

**(b)** Explain how you could use $x = \frac{1}{32}$ in the expansion to find an approximation for $\sqrt{5}$

There is no need to carry out the calculation. **(2)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Apply the binomial expansion formula**

$$(1 + 8x)^{\frac{1}{2}} = 1 + \left(\frac{1}{2}\right)(8x) + \frac{\left(\frac{1}{2}\right)\left(-\frac{1}{2}\right)}{2!}(8x)^2 + \frac{\left(\frac{1}{2}\right)\left(-\frac{1}{2}\right)\left(-\frac{3}{2}\right)}{3!}(8x)^3 + \dots$$

- **[M1]** For an attempt at the binomial expansion with $\left(\frac{1}{2}\right)$ and correct structure for at least two terms in $x$.

**Step 2: Simplify the coefficients**

$$= 1 + 4x - 4x^2 + 8x^3 + \dots$$

- **[A1]** For any two correct non-constant terms in simplest form.
- **[A1]** For all four terms correct: $1 + 4x - 4x^2 + 8x^3$.

#### **Part (b)**

**Step 3: Substitute $x = \frac{1}{32}$ into $(1 + 8x)^{\frac{1}{2}}$**

$$\left(1 + 8\left(\frac{1}{32}\right)\right)^{\frac{1}{2}} = \left(1 + \frac{1}{4}\right)^{\frac{1}{2}} = \left(\frac{5}{4}\right)^{\frac{1}{2}} = \frac{\sqrt{5}}{2}$$

- **[M1]** Substitutes $x = \frac{1}{32}$ into $(1 + 8x)^{\frac{1}{2}}$ to show that it equals $\frac{\sqrt{5}}{2}$ or $\sqrt{\frac{5}{4}}$.

**Step 4: Explain how to obtain $\sqrt{5}$**

$$\sqrt{5} = 2 \times \text{value obtained from substituting } x = \frac{1}{32} \text{ into the expansion}$$

- **[A1]** Explains that substituting $x = \frac{1}{32}$ into the expansion and multiplying the resulting value by $2$ gives an approximation for $\sqrt{5}$.

---
topic: "Exponentials and Logarithms"
subtopic: "Solving equations using logarithms"
---
### **Question 2**

By taking logarithms of both sides, solve the equation

$$4^{3p-1} = 5^{210}$$

giving the value of $p$ to one decimal place. **(3)**

### **Mark Scheme 2**

**Step 1: Take logarithms of both sides and apply power law**

$$\ln\left(4^{3p-1}\right) = \ln\left(5^{210}\right) \Rightarrow (3p - 1)\ln 4 = 210 \ln 5$$

- **[M1]** Takes logs (any base) of both sides and uses the power law correctly on at least one side.

**Step 2: Rearrange to make $p$ the subject**

$$3p - 1 = \frac{210 \ln 5}{\ln 4} \Rightarrow 3p = \frac{210 \ln 5}{\ln 4} + 1 \Rightarrow p = \frac{1}{3}\left(\frac{210 \ln 5}{\ln 4} + 1\right)$$

- **[M1]** Correct strategy to isolate $p$.

**Step 3: Calculate the value of $p$**

$$p \approx 81.6$$

- **[A1]** $p = 81.6$ (given to 1 decimal place).

---
topic: "Vectors"
subtopic: "Vectors"
---
### **Question 3**

Relative to a fixed origin $O$

- point $A$ has position vector $2\mathbf{i} + 5\mathbf{j} - 6\mathbf{k}$
- point $B$ has position vector $3\mathbf{i} - 3\mathbf{j} - 4\mathbf{k}$
- point $C$ has position vector $2\mathbf{i} - 16\mathbf{j} + 4\mathbf{k}$

**(a)** Find $\overrightarrow{AB}$ **(2)**

**(b)** Show that quadrilateral $OABC$ is a trapezium, giving reasons for your answer. **(2)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Calculate $\overrightarrow{AB} = \mathbf{b} - \mathbf{a}$**

$$\overrightarrow{AB} = (3\mathbf{i} - 3\mathbf{j} - 4\mathbf{k}) - (2\mathbf{i} + 5\mathbf{j} - 6\mathbf{k})$$

- **[M1]** Subtracts position vector $\mathbf{a}$ from $\mathbf{b}$.

$$\overrightarrow{AB} = \mathbf{i} - 8\mathbf{j} + 2\mathbf{k}$$

- **[A1]** Correct vector $\mathbf{i} - 8\mathbf{j} + 2\mathbf{k}$ (or column vector $\begin{pmatrix} 1 \\ -8 \\ 2 \end{pmatrix}$).

#### **Part (b)**

**Step 2: Compare $\overrightarrow{OC}$ with $\overrightarrow{AB}$**

$$\overrightarrow{OC} = 2\mathbf{i} - 16\mathbf{j} + 4\mathbf{k} = 2(\mathbf{i} - 8\mathbf{j} + 2\mathbf{k}) = 2\overrightarrow{AB}$$

- **[M1]** Compares $\overrightarrow{OC}$ (or $\mathbf{c}$) with $\overrightarrow{AB}$, finding that $\overrightarrow{OC} = 2\overrightarrow{AB}$.

**Step 3: Conclude quadrilateral $OABC$ is a trapezium**

- **[A1]** States that since $\overrightarrow{OC} = 2\overrightarrow{AB}$, $OC$ is parallel to $AB$ (and not equal in length), therefore $OABC$ is a trapezium.

---
topic: "Functions and Graphs"
subtopic: "Composite functions"
---
### **Question 4**

The function $f$ is defined by

$$f(x) = \frac{3x - 7}{x - 2} \quad x \in \mathbb{R}, x \neq 2$$

**(a)** Find $f^{-1}(7)$ **(2)**

**(b)** Show that $ff(x) = \frac{ax + b}{x - 3}$ where $a$ and $b$ are integers to be found. **(3)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Set $f(x) = 7$ and solve for $x$**

$$\frac{3x - 7}{x - 2} = 7 \Rightarrow 3x - 7 = 7(x - 2)$$

- **[M1]** Sets $f(x) = 7$ and removes fraction, or finds $f^{-1}(x) = \frac{2x - 7}{x - 3}$ and substitutes $x = 7$.

$$3x - 7 = 7x - 14 \Rightarrow 4x = 7 \Rightarrow x = \frac{7}{4}$$

- **[A1]** $f^{-1}(7) = \frac{7}{4}$ (or $1.75$).

#### **Part (b)**

**Step 2: Substitute $f(x)$ into $f(x)$**

$$ff(x) = f\left(\frac{3x - 7}{x - 2}\right) = \frac{3\left(\frac{3x - 7}{x - 2}\right) - 7}{\left(\frac{3x - 7}{x - 2}\right) - 2}$$

- **[M1]** Correct expression for $ff(x)$ with substitution of $f(x)$ into $f(x)$.

**Step 3: Simplify the expression**

$$ff(x) = \frac{3(3x - 7) - 7(x - 2)}{(3x - 7) - 2(x - 2)}$$

- **[M1]** Multiplies numerator and denominator by $(x - 2)$ and expands brackets correctly.

$$ff(x) = \frac{9x - 21 - 7x + 14}{3x - 7 - 2x + 4} = \frac{2x - 7}{x - 3}$$

- **[A1]** Achieves $\frac{2x - 7}{x - 3}$ with $a = 2$ and $b = -7$.

---
topic: "Sequences and Series"
subtopic: "Arithmetic sequences"
---
### **Question 5**

A car has six forward gears. 

The fastest speed of the car 
- in 1st gear is $28\text{ km h}^{-1}$
- in 6th gear is $115\text{ km h}^{-1}$

Given that the fastest speed of the car in successive gears is modelled by an arithmetic sequence, 

**(a)** find the fastest speed of the car in 3rd gear. **(3)**

Given that the fastest speed of the car in successive gears is modelled by a geometric sequence, 

**(b)** find the fastest speed of the car in 5th gear. **(3)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Set up equations for arithmetic sequence**

$$a = 28, \quad u_6 = a + 5d = 115$$

- **[M1]** Uses $a + 5d = 115$ with $a = 28$ to solve for $d$.

$$5d = 115 - 28 = 87 \Rightarrow d = 17.4$$

- **[A1]** $d = 17.4$

**Step 2: Find speed in 3rd gear**

$$u_3 = a + 2d = 28 + 2(17.4) = 62.8\text{ km h}^{-1}$$

- **[A1]** $62.8\text{ km h}^{-1}$

#### **Part (b)**

**Step 3: Set up equations for geometric sequence**

$$a = 28, \quad u_6 = ar^5 = 115$$

- **[M1]** Uses $ar^5 = 115$ with $a = 28$ to find $r$.

$$r^5 = \frac{115}{28} \Rightarrow r = \left(\frac{115}{28}\right)^{\frac{1}{5}} \approx 1.3262...$$

- **[A1]** $r = \left(\frac{115}{28}\right)^{\frac{1}{5}}$ or $r \approx 1.326$

**Step 4: Find speed in 5th gear**

$$u_5 = ar^4 = 28 \times \left(\frac{115}{28}\right)^{\frac{4}{5}} \approx 86.712...\text{ km h}^{-1}$$

- **[A1]** $86.7\text{ km h}^{-1}$ (accept $86.7$ or $86.71$).

---
topic: "Trigonometry and Modelling"
subtopic: "Simplifying a cos x ± b sin x"
---
### **Question 6**

**(a)** Express $\sin x + 2 \cos x$ in the form $R \sin(x + \alpha)$ where $R$ and $\alpha$ are constants, $R > 0$ and $0 < \alpha < \frac{\pi}{2}$

Give the exact value of $R$ and give the value of $\alpha$ in radians to 3 decimal places. **(3)**

The temperature, $\theta^\circ\text{C}$, inside a room on a given day is modelled by the equation

$$\theta = 5 + \sin\left(\frac{\pi t}{12} - 3\right) + 2 \cos\left(\frac{\pi t}{12} - 3\right) \quad 0 \le t < 24$$

where $t$ is the number of hours after midnight.

Using the equation of the model and your answer to part (a),

**(b)** deduce the maximum temperature of the room during this day, **(1)**

**(c)** find the time of day when the maximum temperature occurs, giving your answer to the nearest minute. **(3)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Find $R$**

$$R = \sqrt{1^2 + 2^2} = \sqrt{5}$$

- **[B1]** $R = \sqrt{5}$

**Step 2: Find $\alpha$**

$$R \sin(x + \alpha) = R \sin x \cos \alpha + R \cos x \sin \alpha$$

$$\Rightarrow R \cos \alpha = 1, \quad R \sin \alpha = 2 \Rightarrow \tan \alpha = 2 \Rightarrow \alpha = \arctan(2) \approx 1.1071...$$

- **[M1]** $\tan \alpha = 2$ or $\sin \alpha = \frac{2}{\sqrt{5}}$ or $\cos \alpha = \frac{1}{\sqrt{5}}$
- **[A1]** $\alpha = 1.107$

#### **Part (b)**

**Step 3: Deduce maximum temperature**

$$\theta_{\max} = 5 + \sqrt{5} \approx 7.24^\circ\text{C}$$

- **[B1ft]** $5 + \sqrt{5}$ or awrt $7.24$

#### **Part (c)**

**Step 4: Find $t$ for maximum temperature**

$$\sqrt{5}\sin\left(\frac{\pi t}{12} - 3 + 1.107\right) = \sqrt{5} \Rightarrow \frac{\pi t}{12} - 3 + 1.107 = \frac{\pi}{2}$$

- **[M1]** Sets $\frac{\pi t}{12} - 3 + \alpha = \frac{\pi}{2}$ (or $\frac{5\pi}{2}$ etc.)

$$\frac{\pi t}{12} = \frac{\pi}{2} + 3 - 1.107 = 3.4637... \Rightarrow t = \frac{12}{\pi}(3.4637...) \approx 13.2302... \text{ hours}$$

- **[M1]** Solves for $t$.

**Step 5: Convert $t$ to time of day**

$$0.2302... \times 60 \approx 14 \text{ minutes} \Rightarrow 13:14 \text{ or } 1:14\text{ pm}$$

- **[A1]** 13:14 or 1:14 pm (or 13:13 / 13:15 depending on rounding, nearest minute required).

---
topic: "Equations and Inequalities"
subtopic: "Regions"
---
### **Question 7**

**Figure 1**

**Figure 1** shows a sketch of a curve $C$ with equation $y = f(x)$ and a straight line $l$.
The curve $C$ meets $l$ at the points $(-2, 13)$ and $(0, 25)$ as shown.
The shaded region $R$ is bounded by $C$ and $l$ as shown in **Figure 1**.

Given that
- $f(x)$ is a quadratic function in $x$
- $(-2, 13)$ is the minimum turning point of $y = f(x)$

use inequalities to define $R$. **(5)**

### **Mark Scheme 7**

**Step 1: Find equation of curve $C$**

Since $(-2, 13)$ is the minimum point:

$$f(x) = a(x + 2)^2 + 13$$

Uses $(0, 25)$ to find $a$:

$$25 = a(0 + 2)^2 + 13 \Rightarrow 4a = 12 \Rightarrow a = 3$$

$$y = 3(x + 2)^2 + 13 = 3(x^2 + 4x + 4) + 13 = 3x^2 + 12x + 25$$

- **[M1]** Uses $y = a(x + 2)^2 + 13$ with $(0, 25)$ to find $a$.
- **[A1]** $y = 3(x + 2)^2 + 13$ or $y = 3x^2 + 12x + 25$.

**Step 2: Find equation of line $l$**

$$m = \frac{25 - 13}{0 - (-2)} = \frac{12}{2} = 6$$

$$y = 6x + 25$$

- **[M1]** Uses $(-2, 13)$ and $(0, 25)$ to find equation of line $l$.
- **[A1]** $y = 6x + 25$.

**Step 3: Define region $R$ using inequalities**

Region $R$ lies above $C$, below $l$, and between $x = -2$ and $x = 0$:

$$y \ge 3(x + 2)^2 + 13 \quad (\text{or } y \ge 3x^2 + 12x + 25)$$
$$y \le 6x + 25$$
$$-2 \le x \le 0$$

- **[A1]** Fully correct set of inequalities defining $R$: $3(x + 2)^2 + 13 \le y \le 6x + 25$ for $-2 \le x \le 0$ (strict or non-strict inequalities accepted).

---
topic: "Modelling with Differential Equations"
subtopic: "Modelling with first-order differential equations"
---
### **Question 8**

A new smartphone was released by a company. 
The company monitored the total number of phones sold, $n$, at time $t$ days after the phone was released.

The company observed that, during this time, 

$$\text{the rate of increase of } n \text{ was proportional to } n$$

Use this information to write down a suitable equation for $n$ in terms of $t$.

*(You do not need to evaluate any unknown constants in your equation.)* **(2)**

### **Mark Scheme 8**

**Step 1: Write down differential equation or general solution**

$$\frac{\mathrm{d}n}{\mathrm{d}t} = kn \quad \text{or} \quad n = A\mathrm{e}^{kt}$$

- **[M1]** Recognises rate of change is proportional to $n$, writing $\frac{\mathrm{d}n}{\mathrm{d}t} = kn$ or $n = A\mathrm{e}^{kt}$.

**Step 2: Express $n$ in terms of $t$**

$$n = A\mathrm{e}^{kt} \quad (\text{or } n = C\mathrm{e}^{kt} \text{ or } n = n_0\mathrm{e}^{kt})$$

- **[A1]** Correct equation linking $n$ and $t$ with constant(s).

---
topic: "Differentiation"
subtopic: "Stationary points"
---
### **Question 9**

**Figure 2** shows a sketch of the curve $C$ with equation $y = f(x)$ where 

$$f(x) = 4(x^2 - 2)\mathrm{e}^{-2x} \quad x \in \mathbb{R}$$

**(a)** Show that $f'(x) = 8(2 + x - x^2)\mathrm{e}^{-2x}$ **(3)**

**(b)** Hence find, in simplest form, the exact coordinates of the stationary points of $C$. **(3)**

The function $g$ and the function $h$ are defined by 

$$g(x) = 2f(x) \quad x \in \mathbb{R}$$
$$h(x) = 2f(x) - 3 \quad x \ge 0$$

**(c)** Find
**(i)** the range of $g$
**(ii)** the range of $h$ **(3)**

### **Mark Scheme 9**

#### **Part (a)**

**Step 1: Differentiate using product rule**

$$u = 4(x^2 - 2) \Rightarrow u' = 8x$$
$$v = \mathrm{e}^{-2x} \Rightarrow v' = -2\mathrm{e}^{-2x}$$

- **[M1]** Applies product rule to $4(x^2 - 2)\mathrm{e}^{-2x}$.

$$f'(x) = 8x\mathrm{e}^{-2x} + 4(x^2 - 2)(-2\mathrm{e}^{-2x})$$

- **[A1]** Correct unsimplified derivative.

$$f'(x) = \mathrm{e}^{-2x}[8x - 8(x^2 - 2)] = 8(x - x^2 + 2)\mathrm{e}^{-2x} = 8(2 + x - x^2)\mathrm{e}^{-2x}$$

- **[A1*]** Fully correct simplification leading to given result.

#### **Part (b)**

**Step 2: Set $f'(x) = 0$ to find stationary points**

$$8(2 + x - x^2)\mathrm{e}^{-2x} = 0 \Rightarrow 2 + x - x^2 = 0 \quad (\text{since } \mathrm{e}^{-2x} \neq 0)$$

$$(2 - x)(1 + x) = 0 \Rightarrow x = 2, \quad x = -1$$

- **[M1]** Sets $f'(x) = 0$ and solves quadratic for $x$.

**Step 3: Calculate $y$-coordinates**

$$x = -1 \Rightarrow y = 4((-1)^2 - 2)\mathrm{e}^{-2(-1)} = -4\mathrm{e}^2$$
$$x = 2 \Rightarrow y = 4(2^2 - 2)\mathrm{e}^{-2(2)} = 8\mathrm{e}^{-4}$$

- **[A1]** Both $x$-values correct and exact $y$-values found.
- **[A1]** Stationary points are $(-1, -4\mathrm{e}^2)$ and $(2, 8\mathrm{e}^{-4})$.

#### **Part (c)**

**Step 4: Find range of $g(x) = 2f(x)$ for $x \in \mathbb{R}$**

Minimum value of $f(x)$ is $-4\mathrm{e}^2$, so minimum value of $g(x)$ is $2(-4\mathrm{e}^2) = -8\mathrm{e}^2$.
As $x \to \infty$, $f(x) \to 0$, so $g(x) \ge -8\mathrm{e}^2$.

- **[B1]** Range of $g$: $g(x) \ge -8\mathrm{e}^2$ (or $y \ge -8\mathrm{e}^2$).

**Step 5: Find range of $h(x) = 2f(x) - 3$ for $x \ge 0$**

For $x \ge 0$, maximum of $f(x)$ is at $x = 2$ where $f(2) = 8\mathrm{e}^{-4}$.
Minimum of $f(x)$ on $[0, \infty)$ occurs at $x = 0$ where $f(0) = -8$.
Max of $h(x)$ is $2(8\mathrm{e}^{-4}) - 3 = 16\mathrm{e}^{-4} - 3$.
Min of $h(x)$ is $2(-8) - 3 = -19$.

- **[M1]** Considers critical values at $x = 0$ and $x = 2$ for $h(x)$.
- **[A1]** Range of $h$: $-19 \le h(x) \le 16\mathrm{e}^{-4} - 3$.

---
topic: "Integration"
subtopic: "Integration by substitution"
---
### **Question 10**

**(a)** Use the substitution $x = u^2 + 1$ to show that 

$$\int_5^{10} \frac{3}{(x - 1)(3 + 2\sqrt{x - 1})} \, \mathrm{d}x = \int_p^q \frac{6}{u(3 + 2u)} \, \mathrm{d}u$$

where $p$ and $q$ are positive constants to be found. **(4)**

**(b)** Hence, using algebraic integration, show that 

$$\int_5^{10} \frac{3}{(x - 1)(3 + 2\sqrt{x - 1})} \, \mathrm{d}x = \ln a$$

where $a$ is a rational constant to be found. **(6)**

### **Mark Scheme 10**

#### **Part (a)**

**Step 1: Differentiate substitution and find limits**

$$x = u^2 + 1 \Rightarrow \frac{\mathrm{d}x}{\mathrm{d}u} = 2u \Rightarrow \mathrm{d}x = 2u\,\mathrm{d}u$$

When $x = 5 \Rightarrow u^2 = 4 \Rightarrow u = 2$, so $p = 2$.
When $x = 10 \Rightarrow u^2 = 9 \Rightarrow u = 3$, so $q = 3$.

- **[B1]** Correct limits $p = 2$ and $q = 3$.

**Step 2: Substitute into integral**

$$\int_2^3 \frac{3}{(u^2)(3 + 2u)} (2u\,\mathrm{d}u)$$

- **[M1]** Substitutes $x - 1 = u^2$, $\sqrt{x - 1} = u$, and $\mathrm{d}x = 2u\,\mathrm{d}u$.
- **[M1]** Cancels $u$ in numerator and denominator.

$$= \int_2^3 \frac{6u}{u^2(3 + 2u)} \, \mathrm{d}u = \int_2^3 \frac{6}{u(3 + 2u)} \, \mathrm{d}u$$

- **[A1*]** Reaches given expression with $p = 2$ and $q = 3$.

#### **Part (b)**

**Step 3: Split into partial fractions**

$$\frac{6}{u(3 + 2u)} = \frac{A}{u} + \frac{B}{3 + 2u}$$

$$6 = A(3 + 2u) + Bu$$
$$u = 0 \Rightarrow 6 = 3A \Rightarrow A = 2$$
$$u = -\frac{3}{2} \Rightarrow 6 = B\left(-\frac{3}{2}\right) \Rightarrow B = -4$$

- **[M1]** Partial fractions method to find $A$ and $B$.
- **[A1]** $A = 2$ and $B = -4$.

**Step 4: Integrate using partial fractions**

$$\int_2^3 \left(\frac{2}{u} - \frac{4}{3 + 2u}\right) \mathrm{d}u = \left[ 2\ln u - 2\ln(3 + 2u) \right]_2^3 = \left[ 2\ln\left(\frac{u}{3 + 2u}\right) \right]_2^3$$

- **[M1]** Integrates to give terms in $\ln u$ and $\ln(3 + 2u)$.
- **[A1]** Correct integration $2\ln u - 2\ln(3 + 2u)$.

**Step 5: Apply limits**

$$\text{At } u = 3: 2\ln\left(\frac{3}{9}\right) = 2\ln\left(\frac{1}{3}\right)$$
$$\text{At } u = 2: 2\ln\left(\frac{2}{7}\right)$$

$$\text{Value} = 2\ln\left(\frac{1}{3}\right) - 2\ln\left(\frac{2}{7}\right) = 2\ln\left(\frac{7}{6}\right) = \ln\left(\left(\frac{7}{6}\right)^2\right) = \ln\left(\frac{49}{36}\right)$$

- **[M1]** Substitutes limits 2 and 3 into integrated expression and uses log laws.
- **[A1]** Reaches $\ln\left(\frac{49}{36}\right)$, so $a = \frac{49}{36}$.

---
topic: "Radians"
subtopic: "Arc length"
---
### **Question 11**

**Figure 3**

Circle $C_1$ has equation $x^2 + y^2 = 100$
Circle $C_2$ has equation $(x - 15)^2 + y^2 = 40$

The circles meet at points $A$ and $B$ as shown in **Figure 3**.

**(a)** Show that angle $AOB = 0.635$ radians to 3 significant figures, where $O$ is the origin. **(4)**

The region shown shaded in **Figure 3** is bounded by $C_1$ and $C_2$

**(b)** Find the perimeter of the shaded region, giving your answer to one decimal place. **(4)**

### **Mark Scheme 11**

#### **Part (a)**

**Step 1: Find points of intersection $A$ and $B$**

From $C_1$: $y^2 = 100 - x^2$. Substitute into $C_2$:

$$(x - 15)^2 + (100 - x^2) = 40$$
$$x^2 - 30x + 225 + 100 - x^2 = 40 \Rightarrow -30x + 325 = 40$$
$$30x = 285 \Rightarrow x = 9.5$$

- **[M1]** Solves equations simultaneously to find $x$.
- **[A1]** $x = 9.5$.

**Step 2: Find angle $AOB$**

$$y = \sqrt{100 - 9.5^2} = \sqrt{9.75}$$

In $\triangle OAB$, let angle $AOX = \theta$:

$$\cos \theta = \frac{9.5}{10} = 0.95 \Rightarrow \theta = \arccos(0.95) \approx 0.31756...$$

- **[M1]** Uses trigonometry to find angle $AOX$ or uses cosine rule in triangle $OAC_2$.

$$\text{Angle } AOB = 2\theta = 2 \times 0.31756... = 0.63512... \approx 0.635 \text{ radians}$$

- **[A1*]** Shows angle $AOB = 0.635$ radians to 3 significant figures.

#### **Part (b)**

**Step 3: Calculate major arc length of $C_1$**

Radius of $C_1 = 10$. Major angle $= 2\pi - 0.63512... \approx 5.64806...$

$$\text{Arc }_1 = 10 \times (2\pi - 0.63512...) \approx 56.48\text{ cm}$$

- **[M1]** Method for major arc length of $C_1$.

**Step 4: Calculate major arc length of $C_2$**

Center of $C_2$ is $(15,0)$, radius $R_2 = \sqrt{40}$.
Vector $\overrightarrow{C_2 A} = (-5.5, \sqrt{9.75})$.
Angle $\phi = \angle AC_2 B$:

$$\cos\left(\frac{\phi}{2}\right) = \frac{15 - 9.5}{\sqrt{40}} = \frac{5.5}{\sqrt{40}} \Rightarrow \frac{\phi}{2} \approx 0.5187... \Rightarrow \phi \approx 1.0374...$$

Major angle for $C_2 = 2\pi - 1.0374... \approx 5.2457...$

$$\text{Arc }_2 = \sqrt{40} \times 5.2457... \approx 33.18\text{ cm}$$

- **[M1]** Method to find angle at center of $C_2$ and major arc length.
- **[A1]** Correct arc length calculation for both $C_1$ and $C_2$.

**Step 5: Total perimeter**

$$\text{Perimeter} = 56.48 + 33.18 = 89.7\text{ cm}$$

- **[A1]** $89.7$ (or awrt $89.7$).

---
topic: "Trigonometric Identities and Equations"
subtopic: "Trigonometric identities"
---
### **Question 12**

In this question you must show all stages of your working.
Solutions relying entirely on calculator technology are not acceptable.

**(a)** Show that 

$$\mathrm{cosec}\,\theta - \sin\theta \equiv \cos\theta \cot\theta \quad \theta \neq (180n)^\circ \quad n \in \mathbb{Z}$$ **(3)**

**(b)** Hence, or otherwise, solve for $0 < x < 180^\circ$

$$\mathrm{cosec}\,x - \sin x = \cos x \cot(3x - 50^\circ)$$ **(5)**

### **Mark Scheme 12**

#### **Part (a)**

**Step 1: Rewrite LHS in terms of $\sin\theta$ and $\cos\theta$**

$$\text{LHS} = \frac{1}{\sin\theta} - \sin\theta = \frac{1 - \sin^2\theta}{\sin\theta}$$

- **[M1]** Uses $\mathrm{cosec}\,\theta = \frac{1}{\sin\theta}$ and combines over common denominator.

**Step 2: Use Pythagorean identity $\cos^2\theta = 1 - \sin^2\theta$**

$$= \frac{\cos^2\theta}{\sin\theta} = \cos\theta \cdot \frac{\cos\theta}{\sin\theta} = \cos\theta \cot\theta = \text{RHS}$$

- **[M1]** Replaces $1 - \sin^2\theta$ with $\cos^2\theta$.
- **[A1*]** Reaches $\cos\theta \cot\theta$ with clear steps shown.

#### **Part (b)**

**Step 3: Apply identity from part (a)**

$$\cos x \cot x = \cos x \cot(3x - 50^\circ)$$

$$\cos x (\cot x - \cot(3x - 50^\circ)) = 0$$

- **[M1]** Replaces LHS using identity and sets equal to RHS.

**Step 4: Case 1: $\cos x = 0$**

$$x = 90^\circ$$

- **[B1]** $x = 90^\circ$.

**Step 5: Case 2: $\cot x = \cot(3x - 50^\circ)$**

$$3x - 50^\circ = x + 180k^\circ$$

For $k = 0$:

$$2x = 50^\circ \Rightarrow x = 25^\circ$$

For $k = 1$:

$$2x = 230^\circ \Rightarrow x = 115^\circ$$

- **[M1]** Equates angles $3x - 50^\circ = x$ or $3x - 50^\circ = x + 180^\circ$ and attempts to solve for $x$.
- **[A1]** $x = 25^\circ, 115^\circ$.
- **[A1]** All solutions $x = 25^\circ, 90^\circ, 115^\circ$ with no extra solutions in range.

---
topic: "Sequences and Series"
subtopic: "Recurrence relations"
---
### **Question 13**

A sequence of numbers $a_1, a_2, a_3, \dots$ is defined by 

$$a_{n+1} = \frac{k(a_n + 2)}{a_n} \quad n \in \mathbb{N}$$

where $k$ is a constant.

Given that 
- the sequence is a periodic sequence of order 3
- $a_1 = 2$

**(a)** show that 

$$k^2 + k - 2 = 0$$ **(3)**

**(b)** For this sequence explain why $k \neq 1$ **(1)**

**(c)** Find the value of 

$$\sum_{r=1}^{80} a_r$$ **(3)**

### **Mark Scheme 13**

#### **Part (a)**

**Step 1: Calculate $a_2$ and $a_3$ in terms of $k$**

$$a_1 = 2$$
$$a_2 = \frac{k(2 + 2)}{2} = 2k$$
$$a_3 = \frac{k(2k + 2)}{2k} = k + 1$$

- **[M1]** Calculates $a_2 = 2k$ and attempts $a_3$.

**Step 2: Use periodicity of order 3: $a_4 = a_1 = 2$**

$$a_4 = \frac{k(a_3 + 2)}{a_3} = \frac{k(k + 1 + 2)}{k + 1} = \frac{k(k + 3)}{k + 1}$$

Set $a_4 = 2$:

$$\frac{k(k + 3)}{k + 1} = 2 \Rightarrow k^2 + 3k = 2(k + 1)$$

- **[M1]** Sets $a_4 = 2$ and expands to form an equation in $k$.

$$k^2 + 3k = 2k + 2 \Rightarrow k^2 + k - 2 = 0$$

- **[A1*]** Fully correct proof leading to given equation.

#### **Part (b)**

**Step 3: Explain why $k \neq 1$**

If $k = 1$, $a_1 = 2, a_2 = 2, a_3 = 2, \dots$ so the sequence is constant (periodic of order 1, not order 3).

- **[B1]** States that if $k = 1$, all terms are equal to $2$, making the sequence periodic of order 1.

#### **Part (c)**

**Step 4: Solve for $k$ and find term values**

$$k^2 + k - 2 = 0 \Rightarrow (k + 2)(k - 1) = 0 \Rightarrow k = -2$$

$$a_1 = 2$$
$$a_2 = 2(-2) = -4$$
$$a_3 = -2 + 1 = -1$$

- **[M1]** Selects $k = -2$ and evaluates $a_1, a_2, a_3$.

**Step 5: Calculate sum of 80 terms**

Sum of one full period of 3 terms $= 2 + (-4) + (-1) = -3$.
$80 = 26 \times 3 + 2$ terms.

$$\sum_{r=1}^{80} a_r = 26(-3) + a_1 + a_2 = -78 + 2 + (-4) = -80$$

- **[M1]** Uses $26 \times (\text{sum of 3 terms}) + a_1 + a_2$.
- **[A1]** $-80$.

---
topic: "Modelling with Differential Equations"
subtopic: "Modelling with first-order differential equations"
---
### **Question 14**

A large spherical balloon is deflating.

At time $t$ seconds the balloon has radius $r\text{ cm}$ and volume $V\text{ cm}^3$

The volume of the balloon is modelled as decreasing at a constant rate.

**(a)** Using this model, show that 

$$\frac{\mathrm{d}r}{\mathrm{d}t} = -\frac{k}{r^2}$$

where $k$ is a positive constant. **(3)**

Given that
- the initial radius of the balloon is $40\text{ cm}$
- after 5 seconds the radius of the balloon is $20\text{ cm}$
- the volume of the balloon continues to decrease at a constant rate until the balloon is empty

**(b)** solve the differential equation to find a complete equation linking $r$ and $t$. **(5)**

**(c)** Find the limitation on the values of $t$ for which the equation in part (b) is valid. **(2)**

### **Mark Scheme 14**

#### **Part (a)**

**Step 1: Write down volume formula and apply chain rule**

$$V = \frac{4}{3}\pi r^3 \Rightarrow \frac{\mathrm{d}V}{\mathrm{d}r} = 4\pi r^2$$

Since volume decreases at a constant rate: $\frac{\mathrm{d}V}{\mathrm{d}t} = -c$ (where $c > 0$).

- **[B1]** $\frac{\mathrm{d}V}{\mathrm{d}r} = 4\pi r^2$ and states $\frac{\mathrm{d}V}{\mathrm{d}t} = -c$ (or constant).

**Step 2: Use chain rule to show $\frac{\mathrm{d}r}{\mathrm{d}t} = -\frac{k}{r^2}$**

$$\frac{\mathrm{d}r}{\mathrm{d}t} = \frac{\mathrm{d}V}{\mathrm{d}t} \div \frac{\mathrm{d}V}{\mathrm{d}r} = \frac{-c}{4\pi r^2} = -\frac{k}{r^2} \quad \text{where } k = \frac{c}{4\pi} > 0$$

- **[M1]** Uses $\frac{\mathrm{d}r}{\mathrm{d}t} = \frac{\mathrm{d}V}{\mathrm{d}t} \cdot \frac{\mathrm{d}r}{\mathrm{d}V}$.
- **[A1*]** Correct completion leading to $\frac{\mathrm{d}r}{\mathrm{d}t} = -\frac{k}{r^2}$.

#### **Part (b)**

**Step 3: Separate variables and integrate**

$$r^2 \,\mathrm{d}r = -k \,\mathrm{d}t \Rightarrow \int r^2 \,\mathrm{d}r = \int -k \,\mathrm{d}t$$

$$\frac{1}{3}r^3 = -kt + C \quad \text{or} \quad r^3 = -3kt + D$$

- **[M1]** Separates variables and integrates to give $r^3 = A t + B$.

**Step 4: Use boundary conditions to find constants**

At $t = 0, r = 40 \Rightarrow 40^3 = D \Rightarrow D = 64000$.
At $t = 5, r = 20 \Rightarrow 20^3 = -3k(5) + 64000 \Rightarrow 8000 = -15k + 64000$

$$15k = 56000 \Rightarrow 3k = 11200$$

- **[M1]** Uses $t = 0, r = 40$ to find constant.
- **[M1]** Uses $t = 5, r = 20$ to find $k$.

$$r^3 = 64000 - 11200t \quad \left(\text{or } r = \sqrt[3]{64000 - 11200t}\right)$$

- **[A1]** Correct equation for $r^3$ or $r$ in terms of $t$.

#### **Part (c)**

**Step 5: Find upper limit when balloon is empty ($r = 0$)**

$$64000 - 11200t = 0 \Rightarrow t = \frac{64000}{11200} = \frac{40}{7} \approx 5.71\text{ seconds}$$

- **[M1]** Sets $r = 0$ to find upper limit of $t$.
- **[A1]** $0 \le t \le \frac{40}{7}$ (or $0 \le t \le 5.71$).

---
topic: "Differentiation"
subtopic: "Implicit differentiation"
---
### **Question 15**

The curve $C$ has equation 

$$x^2 \tan y = 9 \quad 0 < y < \frac{\pi}{2}$$

**(a)** Show that

$$\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{-18x}{x^4 + 81}$$ **(4)**

**(b)** Prove that $C$ has a point of inflection at $x = \sqrt[4]{27}$ **(3)**

### **Mark Scheme 15**

#### **Part (a)**

**Step 1: Differentiate implicitly with respect to $x$**

$$\frac{\mathrm{d}}{\mathrm{d}x}(x^2 \tan y) = \frac{\mathrm{d}}{\mathrm{d}x}(9)$$

$$2x \tan y + x^2 \sec^2 y \frac{\mathrm{d}y}{\mathrm{d}x} = 0$$

- **[M1]** Differentiates $x^2 \tan y$ using product rule and implicit differentiation.

**Step 2: Express $\tan y$ and $\sec^2 y$ in terms of $x$**

$$\tan y = \frac{9}{x^2}$$

$$\sec^2 y = 1 + \tan^2 y = 1 + \left(\frac{9}{x^2}\right)^2 = 1 + \frac{81}{x^4} = \frac{x^4 + 81}{x^4}$$

- **[M1]** Uses $\tan y = \frac{9}{x^2}$ and $\sec^2 y = 1 + \tan^2 y$.

**Step 3: Rearrange to find $\frac{\mathrm{d}y}{\mathrm{d}x}$**

$$x^2 \left(\frac{x^4 + 81}{x^4}\right) \frac{\mathrm{d}y}{\mathrm{d}x} = -2x \left(\frac{9}{x^2}\right)$$

$$\left(\frac{x^4 + 81}{x^2}\right) \frac{\mathrm{d}y}{\mathrm{d}x} = -\frac{18}{x}$$

- **[M1]** Substitutes expressions for $\tan y$ and $\sec^2 y$ into the derivative.

$$\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{-18}{x} \cdot \frac{x^2}{x^4 + 81} = \frac{-18x}{x^4 + 81}$$

- **[A1*]** Fully correct algebraic steps leading to given result.

#### **Part (b)**

**Step 4: Find $\frac{\mathrm{d}^2y}{\mathrm{d}x^2}$ using quotient rule**

$$u = -18x \Rightarrow u' = -18$$
$$v = x^4 + 81 \Rightarrow v' = 4x^3$$

$$\frac{\mathrm{d}^2y}{\mathrm{d}x^2} = \frac{-18(x^4 + 81) - (-18x)(4x^3)}{(x^4 + 81)^2} = \frac{-18x^4 - 1458 + 72x^4}{(x^4 + 81)^2} = \frac{54x^4 - 1458}{(x^4 + 81)^2}$$

- **[M1]** Applies quotient rule to find second derivative.

**Step 5: Set $\frac{\mathrm{d}^2y}{\mathrm{d}x^2} = 0$ and verify point of inflection**

$$54x^4 - 1458 = 0 \Rightarrow x^4 = \frac{1458}{54} = 27 \Rightarrow x = \sqrt[4]{27}$$

- **[M1]** Sets numerator of $\frac{\mathrm{d}^2y}{\mathrm{d}x^2}$ to 0 and shows $x = \sqrt[4]{27}$.
- **[A1]** Shows $\frac{\mathrm{d}^2y}{\mathrm{d}x^2} = 0$ at $x = \sqrt[4]{27}$ and confirms a change of sign in $\frac{\mathrm{d}^2y}{\mathrm{d}x^2}$ (or states $\frac{\mathrm{d}^3y}{\mathrm{d}x^3} \neq 0$), thus proving $C$ has a point of inflection.

---
topic: "Algebraic Methods"
subtopic: "Proof by contradiction"
---
### **Question 16**

Prove by contradiction that there are no positive integers $p$ and $q$ such that 

$$4p^2 - q^2 = 25$$ **(4)**

### **Mark Scheme 16**

**Step 1: State the assumption for proof by contradiction**

Assume that there exist positive integers $p$ and $q$ such that $4p^2 - q^2 = 25$.

- **[B1]** States the initial assumption clearly.

**Step 2: Factorise the difference of two squares**

$$(2p - q)(2p + q) = 25$$

- **[M1]** Factorises $4p^2 - q^2$ as $(2p - q)(2p + q)$.

**Step 3: Consider factor pairs of 25**

Since $p$ and $q$ are positive integers, $2p + q > 2p - q$ and $2p + q > 0$.

The factor pairs of $25$ into two positive integer factors are:
- $2p + q = 25$ and $2p - q = 1$
- $2p + q = 5$ and $2p - q = 5$

- **[M1]** Identifies both possible factor pairs for $(2p - q)$ and $(2p + q)$.

**Step 4: Solve the systems of equations and reach a contradiction**

**Case 1:** $2p + q = 25$ and $2p - q = 1$
Adding: $4p = 26 \Rightarrow p = 6.5$ (not an integer, contradiction).

**Case 2:** $2p + q = 5$ and $2p - q = 5$
Subtracting: $2q = 0 \Rightarrow q = 0$ (not a positive integer, contradiction).

Since both cases lead to a contradiction, there are no positive integers $p$ and $q$ such that $4p^2 - q^2 = 25$.

- **[A1]** Shows that both cases lead to a contradiction (non-integer or non-positive integer) and concludes the proof.
