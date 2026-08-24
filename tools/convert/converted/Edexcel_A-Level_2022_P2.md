---
topic: "Functions and Graphs"
subtopic: "Solving modulus problems"
---
### **Question 1**

In this question you must show all stages of your working.

Solutions relying entirely on calculator technology are not acceptable.

**Figure 1** shows a sketch of the graph with equation $y = |3 - 2x|$

Solve
$$|3 - 2x| = 7 + x$$ **(4)**

---

### **Mark Scheme 1**

**Step 1: Solve the non-reflected (positive) equation**
$$3 - 2x = 7 + x \Rightarrow -3x = 4 \Rightarrow x = -\frac{4}{3}$$

- **[M1]** Attempts to solve $3 - 2x = 7 + x$ or $(3 - 2x)^2 = (7 + x)^2$ to obtain a value for $x$.
- **[A1]** Obtains $x = -\frac{4}{3}$ (or $-1.33$ or equivalent fraction).

**Step 2: Solve the reflected (negative) equation**
$$-(3 - 2x) = 7 + x \Rightarrow 2x - 3 = 7 + x \Rightarrow x = 10$$

- **[M1]** Attempts to solve $-(3 - 2x) = 7 + x$ to obtain a second value for $x$.
- **[A1]** Obtains $x = 10$ with no extra incorrect solutions.

---

---
topic: "Exponentials and Logarithms"
subtopic: "Exponential functions"
---
### **Question 2**

**(a)** Sketch the curve with equation
$$y = 4^x$$
stating any points of intersection with the coordinate axes. **(2)**

**(b)** Solve
$$4^x = 100$$
giving your answer to 2 decimal places. **(2)**

---

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Sketch the exponential curve**

- **[B1]** Correct shape for $y = 4^x$ located entirely in quadrants 1 and 2, strictly increasing, asymptotic to the negative $x$-axis.

**Step 2: State intercept**

- **[B1]** Intersecting the $y$-axis at $(0, 1)$ or states $y = 1$ when $x = 0$.

#### **Part (b)**

**Step 3: Take logarithms of both sides**
$$x = \log_4 100 = \frac{\ln 100}{\ln 4}$$

- **[M1]** Uses logs to solve $4^x = 100$, writing $x = \log_4 100$ or $x = \frac{\ln 100}{\ln 4}$ or equivalent.

**Step 4: Calculate final answer**
$$x \approx 3.32$$

- **[A1]** $x = 3.32$ (given to 2 decimal places).

---

---
topic: "Sequences and Series"
subtopic: "Recurrence relations"
---
### **Question 3**

A sequence of terms $a_1, a_2, a_3, \dots$ is defined by
$$a_1 = 3$$
$$a_{n+1} = 8 - a_n$$

**(a)** **(i)** Show that this sequence is periodic.

**(ii)** State the order of this periodic sequence. **(2)**

**(b)** Find the value of
$$\sum_{n=1}^{85} a_n$$ **(2)**

---

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Generate terms of the sequence**
$$a_1 = 3, \quad a_2 = 8 - 3 = 5, \quad a_3 = 8 - 5 = 3$$

- **[M1]** Calculates $a_2 = 5$ and $a_3 = 3$ to show $a_3 = a_1$.

**Step 2: State order of periodicity**
The sequence repeats every 2 terms, so order $= 2$.

- **[A1]** Shows $a_3 = a_1 = 3$ and concludes sequence is periodic with order 2.

#### **Part (b)**

**Step 3: Calculate sum of one period and total full periods**
Each pair of terms $(a_1 + a_2) = 3 + 5 = 8$.
In 85 terms, there are 42 full pairs and 1 remaining term ($a_{85} = a_1 = 3$).

- **[M1]** Realises that terms repeat in pairs $(3 + 5)$ and attempts $42 \times (3 + 5) + 3$ or equivalent calculation.

**Step 4: Compute total sum**
$$\sum_{n=1}^{85} a_n = 42 \times 8 + 3 = 336 + 3 = 339$$

- **[A1]** $339$.

---

---
topic: "Differentiation"
subtopic: "Finding the derivative"
---
### **Question 4**

Given that
$$y = 2x^2$$
use differentiation from first principles to show that
$$\frac{\mathrm{d}y}{\mathrm{d}x} = 4x$$ **(3)**

---

### **Mark Scheme 4**

**Step 1: Set up the definition of the derivative from first principles**
$$\frac{\mathrm{d}y}{\mathrm{d}x} = \lim_{h \to 0} \frac{2(x + h)^2 - 2x^2}{h}$$

- **[B1]** Writes down the correct structure for the derivative using first principles, e.g. $\frac{f(x+h) - f(x)}{h}$ with $f(x) = 2x^2$.

**Step 2: Expand and simplify the numerator**
$$2(x + h)^2 - 2x^2 = 2(x^2 + 2xh + h^2) - 2x^2 = 4xh + 2h^2$$
$$\frac{4xh + 2h^2}{h} = 4x + 2h$$

- **[M1]** Expands $2(x+h)^2$ correctly and divides each term in the numerator by $h$ to reach $4x + 2h$.

**Step 3: Take the limit as $h \to 0$**
$$\lim_{h \to 0} (4x + 2h) = 4x$$

- **[A1]** Fully correct proof with clear limiting argument $\lim_{h \to 0}$ shown, giving $\frac{\mathrm{d}y}{\mathrm{d}x} = 4x$.

---

---
topic: "Integration"
subtopic: "The trapezium rule"
---
### **Question 5**

The table below shows corresponding values of $x$ and $y$ for $y = \log_3 2x$

The values of $y$ are given to 2 decimal places as appropriate.

| $x$ | 3 | 4.5 | 6 | 7.5 | 9 |
| :--- | :---: | :---: | :---: | :---: | :---: |
| $y$ | 1.63 | 2 | 2.26 | 2.46 | 2.63 |

**(a)** Using the trapezium rule with all the values of $y$ in the table, find an estimate for
$$\int_3^9 \log_3 2x \, \mathrm{d}x$$ **(3)**

Using your answer to part (a) and making your method clear, estimate

**(b)** **(i)** $\int_3^9 \log_3 (2x)^{10} \, \mathrm{d}x$

**(ii)** $\int_3^9 \log_3 18x \, \mathrm{d}x$ **(3)**

---

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: State $h$ and set up Trapezium Rule formula**
$$h = 4.5 - 3 = 1.5$$
$$\text{Area} \approx \frac{1}{2} \times 1.5 \times \left[ 1.63 + 2.63 + 2(2 + 2.26 + 2.46) \right]$$

- **[B1]** States $h = 1.5$.
- **[M1]** Applies trapezium rule structure e.g. $\frac{1}{2} \times h \times \{ y_0 + y_4 + 2(y_1 + y_2 + y_3) \}$.

**Step 2: Evaluate trapezium rule integral**
$$\text{Area} \approx 0.75 \times [4.26 + 2(6.72)] = 0.75 \times 17.7 = 13.275$$

- **[A1]** $13.275$ or $13.3$ (3 s.f.).

#### **Part (b)**

**Step 3: Solve (b)(i) using log laws**
$$\int_3^9 \log_3 (2x)^{10} \, \mathrm{d}x = 10 \int_3^9 \log_3 2x \, \mathrm{d}x \approx 10 \times 13.275 = 132.75$$

- **[B1]** Uses $\log_3 (2x)^{10} = 10 \log_3 2x$ to give $10 \times \text{ans (a)} = 132.75$ or $133$.

**Step 4: Solve (b)(ii) using log laws**
$$\log_3 18x = \log_3 9 + \log_3 2x = 2 + \log_3 2x$$
$$\int_3^9 \log_3 18x \, \mathrm{d}x = \int_3^9 2 \, \mathrm{d}x + \int_3^9 \log_3 2x \, \mathrm{d}x = 2(9 - 3) + 13.275 = 12 + 13.275 = 25.275$$

- **[M1]** Uses $\log_3 18x = \log_3 9 + \log_3 2x = 2 + \log_3 2x$ and integrates $2$ over $[3, 9]$ to get $12$.
- **[A1]** $12 + 13.275 = 25.275$ or $25.3$.

---

---
topic: "Numerical Methods"
subtopic: "The Newton-Raphson method"
---
### **Question 6**

**Figure 2** shows a sketch of part of the curve with equation $y = f(x)$ where
$$f(x) = 8 \sin \left(\frac{1}{2} x\right) - 3x + 9 \quad x > 0$$
and $x$ is measured in radians.

The point $P$, shown in Figure 2, is a local maximum point on the curve.

Using calculus and the sketch in Figure 2,

**(a)** find the $x$ coordinate of $P$, giving your answer to 3 significant figures. **(4)**

The curve crosses the $x$-axis at $x = \alpha$, as shown in Figure 2.

Given that, to 3 decimal places, $f(4) = 4.274$ and $f(5) = -1.212$

**(b)** explain why $\alpha$ must lie in the interval $[4, 5]$ **(1)**

**(c)** Taking $x_0 = 5$ as a first approximation to $\alpha$, apply the Newton-Raphson method once to $f(x)$ to obtain a second approximation to $\alpha$.

Show your method and give your answer to 3 significant figures. **(2)**

---

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Differentiate $f(x)$**
$$f'(x) = 8 \times \frac{1}{2} \cos \left(\frac{1}{2} x\right) - 3 = 4 \cos \left(\frac{1}{2} x\right) - 3$$

- **[M1]** Differentiates $8 \sin\left(\frac{1}{2} x\right)$ to give $k \cos\left(\frac{1}{2} x\right)$.
- **[A1]** Correct derivative $f'(x) = 4 \cos\left(\frac{1}{2} x\right) - 3$.

**Step 2: Set $f'(x) = 0$ and solve for $x$**
$$4 \cos \left(\frac{1}{2} x\right) - 3 = 0 \Rightarrow \cos \left(\frac{1}{2} x\right) = \frac{3}{4}$$
$$\frac{1}{2} x = \arccos(0.75) \approx 0.72273 \Rightarrow x = 2 \times 0.72273 \approx 1.445$$
For local maximum point $P$ (second quadrant solution for $\frac{1}{2}x$):
$$\frac{1}{2} x = 2\pi - 0.72273 = 5.560 \Rightarrow x = 11.1$$
(Looking at Figure 2, $P$ is the turning point after $\alpha \approx 4.7$, e.g. $\frac{1}{2} x = 2\pi - \arccos(0.75)$ or $2\pi + \arccos(0.75)$).
$$\frac{1}{2} x = 2\pi - 0.72273 = 5.5604 \Rightarrow x = 11.1$$

- **[M1]** Sets $f'(x) = 0$ and attempts to solve for $x$ in radians.
- **[A1]** $x \approx 11.1$ (3 s.f.).

#### **Part (b)**

**Step 3: Reason for change of sign**

- **[B1]** States that $f(x)$ is continuous on $[4, 5]$ and there is a change of sign between $f(4) = 4.274 > 0$ and $f(5) = -1.212 < 0$, therefore a root $\alpha$ exists in $[4, 5]$.

#### **Part (c)**

**Step 4: Apply Newton-Raphson formula with $x_0 = 5$**
$$f(5) = -1.212$$
$$f'(5) = 4 \cos(2.5) - 3 \approx 4(-0.80114) - 3 = -6.2046$$
$$x_1 = 5 - \frac{f(5)}{f'(5)} = 5 - \frac{-1.212}{-6.2046} = 5 - 0.1953 = 4.8047$$

- **[M1]** Applies $x_1 = 5 - \frac{f(5)}{f'(5)}$ using their $f'(x)$.
- **[A1]** $x_1 \approx 4.80$ (3 s.f.).

---

---
topic: "Binomial Expansion"
subtopic: "Expanding (a + bx)^n"
---
### **Question 7**

**(a)** Find the first four terms, in ascending powers of $x$, of the binomial expansion of
$$\sqrt{4 - 9x}$$
writing each term in simplest form. **(4)**

A student uses this expansion with $x = \frac{1}{9}$ to find an approximation for $\sqrt{3}$

Using the answer to part (a) and without doing any calculations,

**(b)** state whether this approximation will be an overestimate or an underestimate of $\sqrt{3}$ giving a brief reason for your answer. **(1)**

---

### **Mark Scheme 7**

#### **Part (a)**

**Step 1: Rewrite expression in standard form $(1 + y)^n$**
$$\sqrt{4 - 9x} = 2 \left(1 - \frac{9}{4} x\right)^{\frac{1}{2}}$$

- **[B1]** Factors out $2$ or $\sqrt{4}$ correctly to get $2(1 - \frac{9}{4}x)^{\frac{1}{2}}$.

**Step 2: Apply Binomial Expansion**
$$\left(1 - \frac{9}{4} x\right)^{\frac{1}{2}} = 1 + \left(\frac{1}{2}\right)\left(-\frac{9}{4} x\right) + \frac{\left(\frac{1}{2}\right)\left(-\frac{1}{2}\right)}{2!}\left(-\frac{9}{4} x\right)^2 + \frac{\left(\frac{1}{2}\right)\left(-\frac{1}{2}\right)\left(-\frac{3}{2}\right)}{3!}\left(-\frac{9}{4} x\right)^3 + \dots$$
$$= 1 - \frac{9}{8} x - \frac{81}{128} x^2 - \frac{729}{1024} x^3 + \dots$$

- **[M1]** Correct binomial structure for powers up to $x^3$ with $n = \frac{1}{2}$.
- **[A1]** Two terms correct out of the non-constant terms.

**Step 3: Multiply through by 2**
$$\sqrt{4 - 9x} = 2 - \frac{9}{4} x - \frac{81}{64} x^2 - \frac{729}{512} x^3$$

- **[A1]** Fully simplified expansion $2 - \frac{9}{4} x - \frac{81}{64} x^2 - \frac{729}{512} x^3$.

#### **Part (b)**

**Step 4: Determine overestimate vs underestimate**
When $x = \frac{1}{9}$, $\sqrt{4 - 9(\frac{1}{9})} = \sqrt{3}$.
Since all truncated terms after the first term are negative (specifically the next term $-\frac{6561}{8192}x^4$ is negative / subtracted terms are all negative), truncating the series gives an overestimate.

- **[B1]** States **overestimate** and gives a valid reason e.g. "all subsequent terms being subtracted are negative".

---

---
topic: "Integration"
subtopic: "Areas under curves"
---
### **Question 8**

In this question you must show all stages of your working.

Solutions relying on calculator technology are not acceptable.

**Figure 3** shows a sketch of part of a curve with equation
$$y = \frac{(x - 2)(x - 4)}{4\sqrt{x}} \quad x > 0$$

The region $R$, shown shaded in Figure 3, is bounded by the curve and the $x$-axis.

Find the exact area of $R$, writing your answer in the form $a\sqrt{2} + b$, where $a$ and $b$ are constants to be found. **(6)**

---

### **Mark Scheme 8**

**Step 1: Find the limits of integration**
$y = 0 \Rightarrow (x - 2)(x - 4) = 0 \Rightarrow x = 2, x = 4$

- **[B1]** Identifies correct limits $x = 2$ and $x = 4$.

**Step 2: Expand and simplify the integrand**
$$y = \frac{x^2 - 6x + 8}{4x^{\frac{1}{2}}} = \frac{1}{4} \left( x^{\frac{3}{2}} - 6x^{\frac{1}{2}} + 8x^{-\frac{1}{2}} \right)$$

- **[M1]** Expands numerator and writes as individual powers of $x$.

**Step 3: Integrate term by term**
$$\int \frac{1}{4} \left( x^{\frac{3}{2}} - 6x^{\frac{1}{2}} + 8x^{-\frac{1}{2}} \right) \mathrm{d}x = \frac{1}{4} \left[ \frac{2}{5} x^{\frac{5}{2}} - 4 x^{\frac{3}{2}} + 16 x^{\frac{1}{2}} \right]$$

- **[M1]** Integrates to increase powers of $x$ by 1 for at least two terms.
- **[A1]** Correct integrated expression $\frac{1}{4} \left[ \frac{2}{5} x^{\frac{5}{2}} - 4 x^{\frac{3}{2}} + 16 x^{\frac{1}{2}} \right]$.

**Step 4: Apply limits $x = 2$ and $x = 4$**
At $x = 4$:
$$\frac{1}{4} \left[ \frac{2}{5}(32) - 4(8) + 16(2) \right] = \frac{1}{4} \left[ \frac{64}{5} - 32 + 32 \right] = \frac{16}{5}$$

At $x = 2$:
$$\frac{1}{4} \left[ \frac{2}{5}(4\sqrt{2}) - 4(2\sqrt{2}) + 16(\sqrt{2}) \right] = \frac{1}{4} \left[ \frac{8\sqrt{2}}{5} + 8\sqrt{2} \right] = \frac{1}{4} \left[ \frac{48\sqrt{2}}{5} \right] = \frac{12\sqrt{2}}{5}$$

- **[dM1]** Substitutes 4 and 2 into their integrated expression and subtracts.

**Step 5: Write final exact area**
$$\text{Area} = \left| \frac{16}{5} - \frac{12\sqrt{2}}{5} \right| = \frac{12\sqrt{2}}{5} - \frac{16}{5} \quad \text{or} \quad -\frac{12}{5}\sqrt{2} + \frac{16}{5}$$
(Since area is magnitude, $a = -\frac{12}{5}, b = \frac{16}{5}$ or $\frac{12}{5}\sqrt{2} - \frac{16}{5}$).

- **[A1]** $-\frac{12}{5}\sqrt{2} + \frac{16}{5}$ or $\frac{12}{5}\sqrt{2} - \frac{16}{5}$.

---

---
topic: "Trigonometry and Modelling"
subtopic: "Modelling with trigonometric functions"
---
### **Question 9**

**Figure 4** shows a sketch of a Ferris wheel.

The height above the ground, $H\,\mathrm{m}$, of a passenger on the Ferris wheel, $t$ seconds after the wheel starts turning, is modelled by the equation
$$H = |A \sin(bt + \alpha)^\circ|$$
where $A$, $b$ and $\alpha$ are constants.

**Figure 5** shows a sketch of the graph of $H$ against $t$, for one revolution of the wheel.

Given that
- the maximum height of the passenger above the ground is $50\,\mathrm{m}$
- the passenger is $1\,\mathrm{m}$ above the ground when the wheel starts turning
- the wheel takes 720 seconds to complete one revolution

**(a)** find a complete equation for the model, giving the exact value of $A$, the exact value of $b$ and the value of $\alpha$ to 3 significant figures. **(4)**

**(b)** Explain why an equation of the form
$$H = |A \sin(bt + \alpha)^\circ| + d$$
where $d$ is a positive constant, would be a more appropriate model. **(1)**

---

### **Mark Scheme 9**

#### **Part (a)**

**Step 1: Determine $A$**
Maximum height $= 50\,\mathrm{m} \Rightarrow |A| = 50 \Rightarrow A = 50$.

- **[B1]** $A = 50$.

**Step 2: Determine $b$**
Period $= 720$ seconds $\Rightarrow \text{Period} = \frac{360^\circ}{b} = 720 \Rightarrow b = \frac{360}{720} = 0.5$.

- **[B1]** $b = 0.5$ or $\frac{1}{2}$.

**Step 3: Determine $\alpha$**
At $t = 0, H = 1$:
$$1 = |50 \sin(\alpha)^\circ| \Rightarrow \sin\alpha = \frac{1}{50} = 0.02 \Rightarrow \alpha = \arcsin(0.02) \approx 1.15^\circ$$

- **[M1]** Substitutes $t = 0, H = 1$ and solves for $\alpha$.
- **[A1]** $\alpha = 1.15^\circ$ (to 3 s.f.). Equation: $H = |50 \sin(0.5t + 1.15)^\circ|$.

#### **Part (b)**

**Step 4: Explain addition of constant $d$**

- **[B1]** Explains that the passenger's minimum height on a Ferris wheel is above ground level (e.g. carriage hangs above ground level / passenger does not touch the ground at minimum height), so $d > 0$ elevates the minimum point.

---

---
topic: "Functions and Graphs"
subtopic: "Composite functions"
---
### **Question 10**

The function $f$ is defined by
$$f(x) = \frac{8x + 5}{2x + 3} \quad x > -\frac{3}{2}$$

**(a)** Find $f^{-1}\left(\frac{3}{2}\right)$ **(2)**

**(b)** Show that
$$f(x) = A + \frac{B}{2x + 3}$$
where $A$ and $B$ are constants to be found. **(2)**

The function $g$ is defined by
$$g(x) = 16 - x^2 \quad 0 \le x \le 4$$

**(c)** State the range of $g^{-1}$ **(1)**

**(d)** Find the range of $f g^{-1}$ **(3)**

---

### **Mark Scheme 10**

#### **Part (a)**

**Step 1: Set $f(x) = \frac{3}{2}$ and solve for $x$**
$$\frac{8x + 5}{2x + 3} = \frac{3}{2} \Rightarrow 2(8x + 5) = 3(2x + 3)$$
$$16x + 10 = 6x + 9 \Rightarrow 10x = -1 \Rightarrow x = -\frac{1}{10}$$

- **[M1]** Sets $\frac{8x+5}{2x+3} = \frac{3}{2}$ and solves for $x$.
- **[A1]** $x = -\frac{1}{10}$ or $-0.1$.

#### **Part (b)**

**Step 2: Use algebraic division or partial fraction manipulation**
$$\frac{8x + 5}{2x + 3} = \frac{4(2x + 3) - 7}{2x + 3} = 4 - \frac{7}{2x + 3}$$

- **[M1]** Attempts long division or equates coefficients e.g. $A(2x+3) + B = 8x + 5$.
- **[A1]** $A = 4$ and $B = -7$, showing $f(x) = 4 - \frac{7}{2x + 3}$.

#### **Part (c)**

**Step 3: Determine range of inverse function**
Range of $g^{-1}$ is equal to the domain of $g$, which is $0 \le x \le 4$.

- **[B1]** $0 \le g^{-1}(x) \le 4$ or $[0, 4]$.

#### **Part (d)**

**Step 4: Find range of $fg^{-1}$**
Domain of $fg^{-1}$ is the range of $g$, which is $[0, 16]$.
For $y \in [0, 16]$:
At $y = 0$: $f(0) = \frac{5}{3}$
At $y = 16$: $f(16) = \frac{8(16) + 5}{2(16) + 3} = \frac{133}{35} = \frac{19}{5}$

- **[M1]** Evaluates $f$ at the end points of the domain of $fg^{-1}$, i.e., at 0 and 16.
- **[A1]** Values $\frac{5}{3}$ and $\frac{19}{5}$ obtained.
- **[A1]** Range is $\frac{5}{3} \le fg^{-1}(x) \le \frac{19}{5}$.

---

---
topic: "Algebraic Methods"
subtopic: "Mathematical proof"
---
### **Question 11**

Prove, using algebra, that
$$n(n^2 + 5)$$
is even for all $n \in \mathbb{N}$. **(4)**

---

### **Mark Scheme 11**

**Step 1: Case 1 — $n$ is even**
Let $n = 2k$ where $k \in \mathbb{N}$.
$$n(n^2 + 5) = 2k((2k)^2 + 5) = 2k(4k^2 + 5) = 2(4k^3 + 5k)$$
Since this has a factor of 2, it is even.

- **[M1]** Considers case when $n = 2k$ and substitutes into expression.
- **[A1]** Shows expression equals $2 \times (\text{integer})$ e.g. $2(4k^3 + 5k)$, concluding even.

**Step 2: Case 2 — $n$ is odd**
Let $n = 2k + 1$ where $k \in \mathbb{N} \cup \{0\}$.
$$n^2 + 5 = (2k + 1)^2 + 5 = 4k^2 + 4k + 1 + 5 = 4k^2 + 4k + 6 = 2(2k^2 + 2k + 3)$$
$$n(n^2 + 5) = (2k + 1) \cdot 2(2k^2 + 2k + 3) = 2(2k + 1)(2k^2 + 2k + 3)$$
Since this has a factor of 2, it is even.

- **[M1]** Considers case when $n = 2k + 1$ and substitutes into expression.
- **[A1]** Shows expression equals $2 \times (\text{integer})$ for both cases and completes proof with clear conclusion.

---

---
topic: "Differentiation"
subtopic: "Stationary points"
---
### **Question 12**

The function $f$ is defined by
$$f(x) = \frac{\mathrm{e}^{3x}}{4x^2 + k}$$
where $k$ is a positive constant.

**(a)** Show that
$$f'(x) = (12x^2 - 8x + 3k)g(x)$$
where $g(x)$ is a function to be found. **(3)**

Given that the curve with equation $y = f(x)$ has at least one stationary point,

**(b)** find the range of possible values of $k$. **(3)**

---

### **Mark Scheme 12**

#### **Part (a)**

**Step 1: Apply Quotient Rule**
$$u = \mathrm{e}^{3x}, \quad u' = 3\mathrm{e}^{3x}$$
$$v = 4x^2 + k, \quad v' = 8x$$
$$f'(x) = \frac{3\mathrm{e}^{3x}(4x^2 + k) - 8x\mathrm{e}^{3x}}{(4x^2 + k)^2}$$

- **[M1]** Applies quotient rule correctly e.g. $\frac{vu' - uv'}{v^2}$.
- **[A1]** Correct unsimplified derivative.

**Step 2: Factor out $\mathrm{e}^{3x}$ and rearrange**
$$f'(x) = \frac{\mathrm{e}^{3x}(12x^2 + 3k - 8x)}{(4x^2 + k)^2} = (12x^2 - 8x + 3k) \frac{\mathrm{e}^{3x}}{(4x^2 + k)^2}$$

- **[A1]** Reaches target form with $g(x) = \frac{\mathrm{e}^{3x}}{(4x^2 + k)^2}$.

#### **Part (b)**

**Step 3: Set up condition for stationary points**
Stationary points occur when $f'(x) = 0$. Since $g(x) > 0$ for all $x$, we require:
$$12x^2 - 8x + 3k = 0$$
For at least one real stationary point, the discriminant $\Delta \ge 0$.

- **[M1]** Sets $12x^2 - 8x + 3k = 0$ and considers discriminant $b^2 - 4ac \ge 0$.

**Step 4: Solve inequality for $k$**
$$(-8)^2 - 4(12)(3k) \ge 0 \Rightarrow 64 - 144k \ge 0 \Rightarrow 144k \le 64 \Rightarrow k \le \frac{4}{9}$$

- **[M1]** Evaluates discriminant $64 - 144k \ge 0$.
- **[A1]** Gives final range $0 < k \le \frac{4}{9}$ (recalling $k$ is a positive constant).

---

---
topic: "Vectors"
subtopic: "Vectors in 3D"
---
### **Question 13**

Relative to a fixed origin $O$
- the point $A$ has position vector $4\mathbf{i} - 3\mathbf{j} + 5\mathbf{k}$
- the point $B$ has position vector $4\mathbf{j} + 6\mathbf{k}$
- the point $C$ has position vector $-16\mathbf{i} + p\mathbf{j} + 10\mathbf{k}$

where $p$ is a constant.

Given that $A$, $B$ and $C$ lie on a straight line,

**(a)** find the value of $p$. **(3)**

The line segment $OB$ is extended to a point $D$ so that $\overrightarrow{CD}$ is parallel to $\overrightarrow{OA}$

**(b)** Find $|\overrightarrow{OD}|$, writing your answer as a fully simplified surd. **(3)**

---

### **Mark Scheme 13**

#### **Part (a)**

**Step 1: Find vector $\overrightarrow{AB}$**
$$\overrightarrow{AB} = \mathbf{b} - \mathbf{a} = (0\mathbf{i} + 4\mathbf{j} + 6\mathbf{k}) - (4\mathbf{i} - 3\mathbf{j} + 5\mathbf{k}) = -4\mathbf{i} + 7\mathbf{j} + \mathbf{k}$$

- **[M1]** Computes $\overrightarrow{AB}$ or $\overrightarrow{AC}$.

**Step 2: Relate $\overrightarrow{AC}$ to $\overrightarrow{AB}$**
$$\overrightarrow{AC} = \mathbf{c} - \mathbf{a} = -20\mathbf{i} + (p + 3)\mathbf{j} + 5\mathbf{k}$$
Since $A, B, C$ lie on a line, $\overrightarrow{AC} = \lambda \overrightarrow{AB}$.
Comparing $\mathbf{i}$ components: $-20 = -4\lambda \Rightarrow \lambda = 5$.
Comparing $\mathbf{k}$ components: $5 = 1(5)$, consistent.

- **[M1]** Sets up scalar multiple $\overrightarrow{AC} = 5 \overrightarrow{AB}$ to find $\lambda = 5$.

**Step 3: Solve for $p$**
$$p + 3 = 5(7) = 35 \Rightarrow p = 32$$

- **[A1]** $p = 32$.

#### **Part (b)**

**Step 4: Express $\overrightarrow{OD}$ and set up parallel condition**
Since $D$ lies on $OB$ extended, $\overrightarrow{OD} = k \overrightarrow{OB} = k(4\mathbf{j} + 6\mathbf{k})$.
$$\overrightarrow{CD} = \mathbf{d} - \mathbf{c} = 16\mathbf{i} + (4k - 32)\mathbf{j} + (6k - 10)\mathbf{k}$$
Since $\overrightarrow{CD}$ is parallel to $\overrightarrow{OA} = 4\mathbf{i} - 3\mathbf{j} + 5\mathbf{k}$:
$$\overrightarrow{CD} = \mu \overrightarrow{OA}$$
Comparing $\mathbf{i}$ components: $16 = 4\mu \Rightarrow \mu = 4$.

- **[M1]** Uses $\overrightarrow{OD} = k\overrightarrow{OB}$ and $\overrightarrow{CD} = \mu \overrightarrow{OA}$ to solve for $\mu = 4$.

**Step 5: Find position vector $\overrightarrow{OD}$**
$$\mathbf{k} \text{ component: } 6k - 10 = 5(4) = 20 \Rightarrow 6k = 30 \Rightarrow k = 5$$
$$\overrightarrow{OD} = 5(4\mathbf{j} + 6\mathbf{k}) = 20\mathbf{j} + 30\mathbf{k}$$

- **[M1]** Finds $k = 5$ and hence $\overrightarrow{OD} = 20\mathbf{j} + 30\mathbf{k}$.

**Step 6: Compute magnitude $|\overrightarrow{OD}|$**
$$|\overrightarrow{OD}| = \sqrt{0^2 + 20^2 + 30^2} = \sqrt{400 + 900} = \sqrt{1300} = 10\sqrt{13}$$

- **[A1]** $10\sqrt{13}$.

---

---
topic: "Integration"
subtopic: "Modelling with differential equations"
---
### **Question 14**

**(a)** Express $\frac{3}{(2x - 1)(x + 1)}$ in partial fractions. **(3)**

When chemical $A$ and chemical $B$ are mixed, oxygen is produced.

A scientist mixed these two chemicals and measured the total volume of oxygen produced over a period of time.

The total volume of oxygen produced, $V\,\mathrm{m}^3$, $t$ hours after the chemicals were mixed, is modelled by the differential equation
$$\frac{\mathrm{d}V}{\mathrm{d}t} = \frac{3V}{(2t - 1)(t + 1)} \quad V \ge 0 \quad t \ge k$$
where $k$ is a constant.

Given that exactly 2 hours after the chemicals were mixed, a total volume of $3\,\mathrm{m}^3$ of oxygen had been produced,

**(b)** solve the differential equation to show that
$$V = \frac{3(2t - 1)}{(t + 1)}$$ **(5)**

The scientist noticed that
- there was a time delay between the chemicals being mixed and oxygen being produced
- there was a limit to the total volume of oxygen produced

Deduce from the model

**(c)** **(i)** the time delay giving your answer in minutes,

**(ii)** the limit giving your answer in $\mathrm{m}^3$ **(2)**

---

### **Mark Scheme 14**

#### **Part (a)**

**Step 1: Set up partial fraction decomposition**
$$\frac{3}{(2x - 1)(x + 1)} = \frac{A}{2x - 1} + \frac{B}{x + 1}$$
$$3 = A(x + 1) + B(2x - 1)$$

- **[M1]** Correct form for partial fractions and attempts to find $A$ or $B$.

**Step 2: Solve for constants $A$ and $B$**
Let $x = -1 \Rightarrow 3 = B(-3) \Rightarrow B = -1$
Let $x = \frac{1}{2} \Rightarrow 3 = A\left(\frac{3}{2}\right) \Rightarrow A = 2$

- **[A1]** One correct constant ($A = 2$ or $B = -1$).
- **[A1]** Fully correct fraction $\frac{2}{2x - 1} - \frac{1}{x + 1}$.

#### **Part (b)**

**Step 3: Separate variables in the differential equation**
$$\int \frac{1}{V} \, \mathrm{d}V = \int \frac{3}{(2t - 1)(t + 1)} \, \mathrm{d}t$$
$$\ln V = \int \left( \frac{2}{2t - 1} - \frac{1}{t + 1} \right) \mathrm{d}t$$

- **[M1]** Separates variables correctly.

**Step 4: Integrate both sides**
$$\ln V = \ln(2t - 1) - \ln(t + 1) + c = \ln\left( \frac{C(2t - 1)}{t + 1} \right)$$
$$V = \frac{C(2t - 1)}{t + 1}$$

- **[M1]** Integrates to give $\ln V = \ln(2t - 1) - \ln(t + 1) (+ c)$.
- **[A1]** Correct logarithmic form or exponentiated form $V = \frac{C(2t - 1)}{t + 1}$.

**Step 5: Apply initial conditions $t = 2, V = 3$**
$$3 = \frac{C(2(2) - 1)}{2 + 1} \Rightarrow 3 = \frac{3C}{3} \Rightarrow C = 3$$
$$V = \frac{3(2t - 1)}{t + 1}$$

- **[A1]** Evaluates $C = 3$ and completes proof to reach given answer.

#### **Part (c)**

**Step 6: Determine time delay**
Oxygen production starts when $V = 0 \Rightarrow 2t - 1 = 0 \Rightarrow t = \frac{1}{2}\text{ hour} = 30\text{ minutes}$.

- **[B1]** 30 minutes.

**Step 7: Determine limit of volume**
As $t \to \infty$, $V = \frac{3(2 - \frac{1}{t})}{1 + \frac{1}{t}} \to 6$.

- **[B1]** $6\,\mathrm{m}^3$.

---

---
topic: "Sequences and Series"
subtopic: "Geometric series"
---
### **Question 15**

In this question you must show all stages of your working.

Solutions relying on calculator technology are not acceptable.

Given that the first three terms of a geometric series are
$$12 \cos \theta \quad 5 + 2 \sin \theta \quad \text{and} \quad 6 \tan \theta$$

**(a)** show that
$$4 \sin^2 \theta - 52 \sin \theta + 25 = 0$$ **(3)**

Given that $\theta$ is an obtuse angle measured in radians,

**(b)** solve the equation in part (a) to find the exact value of $\theta$ **(2)**

**(c)** show that the sum to infinity of the series can be expressed in the form
$$k(1 - \sqrt{3})$$
where $k$ is a constant to be found. **(5)**

---

### **Mark Scheme 15**

#### **Part (a)**

**Step 1: Use common ratio property of geometric series**
$$r = \frac{u_2}{u_1} = \frac{u_3}{u_2} \Rightarrow (5 + 2 \sin \theta)^2 = (12 \cos \theta)(6 \tan \theta)$$

- **[M1]** Sets up e.g. $\frac{5 + 2\sin\theta}{12\cos\theta} = \frac{6\tan\theta}{5 + 2\sin\theta}$.

**Step 2: Simplify trigonometric terms**
$$(12 \cos \theta)(6 \tan \theta) = 72 \cos \theta \left(\frac{\sin \theta}{\cos \theta}\right) = 72 \sin \theta$$
$$(5 + 2 \sin \theta)^2 = 25 + 20 \sin \theta + 4 \sin^2 \theta$$
$$25 + 20 \sin \theta + 4 \sin^2 \theta = 72 \sin \theta$$
$$4 \sin^2 \theta - 52 \sin \theta + 25 = 0$$

- **[M1]** Uses $\tan \theta = \frac{\sin \theta}{\cos \theta}$ to simplify right hand side to $72 \sin \theta$.
- **[A1]** Reaches given equation $4 \sin^2 \theta - 52 \sin \theta + 25 = 0$ clearly.

#### **Part (b)**

**Step 3: Solve quadratic in $\sin \theta$**
$$(2 \sin \theta - 1)(2 \sin \theta - 25) = 0$$
Since $|\sin \theta| \le 1$, $\sin \theta = \frac{1}{2}$.

- **[M1]** Solves quadratic to obtain $\sin \theta = \frac{1}{2}$.

**Step 4: Find exact value of obtuse angle $\theta$**
$$\theta = \pi - \frac{\pi}{6} = \frac{5\pi}{6}$$

- **[A1]** $\theta = \frac{5\pi}{6}$.

#### **Part (c)**

**Step 5: Find first term $a$ and common ratio $r$**
$$\theta = \frac{5\pi}{6} \Rightarrow \cos \theta = -\frac{\sqrt{3}}{2}, \quad \sin \theta = \frac{1}{2}$$
$$a = 12 \cos \left(\frac{5\pi}{6}\right) = 12 \left(-\frac{\sqrt{3}}{2}\right) = -6\sqrt{3}$$
$$u_2 = 5 + 2\left(\frac{1}{2}\right) = 6$$
$$r = \frac{6}{-6\sqrt{3}} = -\frac{1}{\sqrt{3}}$$

- **[M1]** Finds values of $a = -6\sqrt{3}$ and $r = -\frac{1}{\sqrt{3}}$ (or $-\frac{\sqrt{3}}{3}$).

**Step 6: Compute $S_\infty$**
$$S_\infty = \frac{a}{1 - r} = \frac{-6\sqrt{3}}{1 - \left(-\frac{1}{\sqrt{3}}\right)} = \frac{-6\sqrt{3}}{1 + \frac{1}{\sqrt{3}}} = \frac{-6\sqrt{3} \cdot \sqrt{3}}{\sqrt{3} + 1} = \frac{-18}{\sqrt{3} + 1}$$

- **[M1]** Applies $S_\infty = \frac{a}{1 - r}$ formula.

**Step 7: Rationalise the denominator**
$$S_\infty = \frac{-18(\sqrt{3} - 1)}{(\sqrt{3} + 1)(\sqrt{3} - 1)} = \frac{-18(\sqrt{3} - 1)}{3 - 1} = -9(\sqrt{3} - 1) = 9(1 - \sqrt{3})$$

- **[M1]** Rationalises denominator by multiplying by $(\sqrt{3}-1)$.
- **[A1]** Reaches $9(1 - \sqrt{3})$, so $k = 9$.

---

---
topic: "Parametric Equations"
subtopic: "Parametric equations"
---
### **Question 16**

**Figure 6** shows a sketch of the curve $C$ with parametric equations
$$x = 2 \tan t + 1 \quad y = 2 \sec^2 t + 3 \quad -\frac{\pi}{4} \le t \le \frac{\pi}{3}$$

The line $l$ is the normal to $C$ at the point $P$ where $t = \frac{\pi}{4}$

**(a)** Using parametric differentiation, show that an equation for $l$ is
$$y = -\frac{1}{2} x + \frac{17}{2}$$ **(5)**

**(b)** Show that all points on $C$ satisfy the equation
$$y = \frac{1}{2} (x - 1)^2 + 5$$ **(2)**

The straight line with equation
$$y = -\frac{1}{2} x + k \quad \text{where } k \text{ is a constant}$$
intersects $C$ at two distinct points.

**(c)** Find the range of possible values for $k$. **(5)**

---

### **Mark Scheme 16**

#### **Part (a)**

**Step 1: Find parametric derivatives**
$$\frac{\mathrm{d}x}{\mathrm{d}t} = 2 \sec^2 t$$
$$\frac{\mathrm{d}y}{\mathrm{d}t} = 4 \sec t (\sec t \tan t) = 4 \sec^2 t \tan t$$

- **[M1]** Differentiates $x$ and $y$ with respect to $t$.

**Step 2: Find $\frac{\mathrm{d}y}{\mathrm{d}x}$**
$$\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{4 \sec^2 t \tan t}{2 \sec^2 t} = 2 \tan t$$

- **[A1]** $\frac{\mathrm{d}y}{\mathrm{d}x} = 2 \tan t$.

**Step 3: Evaluate gradient of normal at $t = \frac{\pi}{4}$**
$$\text{At } t = \frac{\pi}{4}, \quad m_T = 2 \tan\left(\frac{\pi}{4}\right) = 2 \Rightarrow m_N = -\frac{1}{2}$$

- **[M1]** Finds numerical gradient of tangent and takes negative reciprocal to find normal gradient.

**Step 4: Find coordinates of point $P$**
$$x = 2(1) + 1 = 3, \quad y = 2(\sqrt{2})^2 + 3 = 7 \Rightarrow P(3, 7)$$

- **[B1]** Correct coordinates $P(3, 7)$.

**Step 5: Form line equation**
$$y - 7 = -\frac{1}{2}(x - 3) \Rightarrow y = -\frac{1}{2} x + \frac{3}{2} + 7 \Rightarrow y = -\frac{1}{2} x + \frac{17}{2}$$

- **[A1]** Correctly completes proof to obtain $y = -\frac{1}{2}x + \frac{17}{2}$.

#### **Part (b)**

**Step 6: Eliminate parameter $t$**
From $x = 2 \tan t + 1 \Rightarrow \tan t = \frac{x - 1}{2}$.
Using identity $\sec^2 t = 1 + \tan^2 t$:
$$y = 2 \sec^2 t + 3 = 2(1 + \tan^2 t) + 3 = 2 + 2\left( \frac{x - 1}{2} \right)^2 + 3$$
$$y = \frac{1}{2}(x - 1)^2 + 5$$

- **[M1]** Uses identity $\sec^2 t = 1 + \tan^2 t$ and substitutes $\tan t = \frac{x - 1}{2}$.
- **[A1]** Reaches $y = \frac{1}{2}(x - 1)^2 + 5$ clearly.

#### **Part (c)**

**Step 7: Determine domain of Cartesian curve**
For $-\frac{\pi}{4} \le t \le \frac{\pi}{3}$:
$$x_{\text{min}} = 2\tan\left(-\frac{\pi}{4}\right) + 1 = -2 + 1 = -1$$
$$x_{\text{max}} = 2\tan\left(\frac{\pi}{3}\right) + 1 = 2\sqrt{3} + 1$$

- **[B1]** Finds domain endpoints $x \in [-1, 2\sqrt{3} + 1]$.

**Step 8: Set up intersection equation and discriminant**
$$\frac{1}{2}(x - 1)^2 + 5 = -\frac{1}{2} x + k \Rightarrow \frac{1}{2}(x^2 - 2x + 1) + 5 + \frac{1}{2}x - k = 0$$
$$\frac{1}{2} x^2 - \frac{1}{2} x + \frac{11}{2} - k = 0 \Rightarrow x^2 - x + (11 - 2k) = 0$$
For tangency/2 solutions, set discriminant $\Delta = 0$:
$$(-1)^2 - 4(1)(11 - 2k) = 0 \Rightarrow 1 - 44 + 8k = 0 \Rightarrow 8k = 43 \Rightarrow k = \frac{43}{8}$$

- **[M1]** Equates line and curve equation and applies discriminant $\Delta > 0$ or $= 0$.
- **[A1]** Lower bound for 2 intersections is $k > \frac{43}{8} = 5.375$.

**Step 9: Check upper bound at end points of domain**
At left endpoint $x = -1, y = \frac{1}{2}(-2)^2 + 5 = 7$:
$$7 = -\frac{1}{2}(-1) + k \Rightarrow k = \frac{13}{2} = 6.5$$
At right endpoint $x = 2\sqrt{3} + 1$: only one intersection past $x = -1$.
Hence for 2 distinct intersections on the restricted domain:

- **[M1]** Substitutes domain limit $x = -1$ into line to find upper boundary $k = \frac{13}{2}$.
- **[A1]** $\frac{43}{8} < k \le \frac{13}{2}$.
