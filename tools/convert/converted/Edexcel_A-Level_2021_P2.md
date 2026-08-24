---
topic: "Sequences and Series"
subtopic: "Arithmetic series"
---
### **Question 1**

In an arithmetic series
- the first term is $16$
- the 21st term is $24$

**(a)** Find the common difference of the series. **(2)**

**(b)** Hence find the sum of the first 500 terms of the series. **(2)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Set up equation for the 21st term using $u_n = a + (n-1)d$**
$$u_{21} = a + 20d \Rightarrow 16 + 20d = 24$$
- **[M1]** Uses $a = 16$ and $u_{21} = 24$ in $16 + 20d = 24$ or equivalent correct method to find $d$.

**Step 2: Solve for $d$**
$$20d = 8 \Rightarrow d = 0.4$$
- **[A1]** $d = 0.4$ or $\frac{2}{5}$ or equivalent.

#### **Part (b)**

**Step 3: Apply the sum formula $S_n = \frac{n}{2}[2a + (n-1)d]$**
$$S_{500} = \frac{500}{2}[2(16) + 499(0.4)]$$
- **[M1]** Applies $S_{500} = \frac{500}{2}[2(16) + 499d]$ using their value of $d$.

**Step 4: Calculate the final sum**
$$S_{500} = 250[32 + 199.6] = 57900$$
- **[A1]** $57900$

---
topic: "Functions and Graphs"
subtopic: "Functions and mappings"
---
### **Question 2**

The functions $f$ and $g$ are defined by
$$f(x) = 7 - 2x^2 \quad x \in \mathbb{R}$$
$$g(x) = \frac{3x}{5x - 1} \quad x \in \mathbb{R}, \quad x \neq \frac{1}{5}$$

**(a)** State the range of $f$ **(1)**

**(b)** Find $gf(1.8)$ **(2)**

**(c)** Find $g^{-1}(x)$ **(2)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: State the range of $f$**
$$f(x) \le 7$$
- **[B1]** $f(x) \le 7$ or $y \le 7$ or $(-\infty, 7]$ using correct notation.

#### **Part (b)**

**Step 2: Calculate $f(1.8)$ and substitute into $g(x)$**
$$f(1.8) = 7 - 2(1.8)^2 = 7 - 6.48 = 0.52$$
$$g(0.52) = \frac{3(0.52)}{5(0.52) - 1} = \frac{1.56}{1.6} = 0.975$$
- **[M1]** Calculates $f(1.8) = 0.52$ and attempts to evaluate $g(0.52)$.
- **[A1]** $0.975$ or $\frac{39}{40}$

#### **Part (c)**

**Step 3: Rearrange $y = g(x)$ to make $x$ the subject**
$$y = \frac{3x}{5x - 1} \Rightarrow y(5x - 1) = 3x \Rightarrow 5xy - y = 3x \Rightarrow x(5y - 3) = y \Rightarrow x = \frac{y}{5y - 3}$$
$$g^{-1}(x) = \frac{x}{5x - 3}$$
- **[M1]** Rearranges $y = \frac{3x}{5x - 1}$ to express $x$ in terms of $y$.
- **[A1]** $g^{-1}(x) = \frac{x}{5x - 3}$ or equivalent e.g. $\frac{-x}{3 - 5x}$.

---
topic: "Exponentials and Logarithms"
subtopic: "Laws of logarithms"
---
### **Question 3**

Using the laws of logarithms, solve the equation
$$\log_3(12y + 5) - \log_3(1 - 3y) = 2$$ **(3)**

### **Mark Scheme 3**

**Step 1: Apply the subtraction law of logarithms**
$$\log_3\left(\frac{12y + 5}{1 - 3y}\right) = 2$$
- **[M1]** Correctly uses $\log_3 A - \log_3 B = \log_3 \left(\frac{A}{B}\right)$.

**Step 2: Remove the logarithm by converting to exponential form**
$$\frac{12y + 5}{1 - 3y} = 3^2 = 9$$
- **[M1]** Unlogs correctly to form $\frac{12y + 5}{1 - 3y} = 9$.

**Step 3: Solve for $y$**
$$12y + 5 = 9(1 - 3y) \Rightarrow 12y + 5 = 9 - 27y \Rightarrow 39y = 4 \Rightarrow y = \frac{4}{39}$$
- **[A1]** $y = \frac{4}{39}$ or exact equivalent.

---
topic: "Radians"
subtopic: "Small angle approximations"
---
### **Question 4**

Given that $\theta$ is small and measured in radians, use the small angle approximations to show that
$$4 \sin \frac{\theta}{2} + 3 \cos^2 \theta \approx a + b\theta + c\theta^2$$
where $a, b$ and $c$ are integers to be found. **(3)**

### **Mark Scheme 4**

**Step 1: Substitute the small angle approximations**
$$\sin \frac{\theta}{2} \approx \frac{\theta}{2} \quad \text{and} \quad \cos \theta \approx 1 - \frac{\theta^2}{2}$$
$$4 \sin \frac{\theta}{2} + 3 \cos^2 \theta \approx 4\left(\frac{\theta}{2}\right) + 3\left(1 - \frac{\theta^2}{2}\right)^2$$
- **[M1]** Substitutes $\sin \frac{\theta}{2} \approx \frac{\theta}{2}$ and $\cos \theta \approx 1 - \frac{\theta^2}{2}$ into the given expression.

**Step 2: Expand the squared bracket**
$$= 2\theta + 3\left(1 - \theta^2 + \frac{\theta^4}{4}\right)$$
- **[M1]** Expands $\left(1 - \frac{\theta^2}{2}\right)^2$ to at least $1 - \theta^2$.

**Step 3: Collect terms ignoring powers higher than $\theta^2$**
$$\approx 3 + 2\theta - 3\theta^2$$
- **[A1]** $3 + 2\theta - 3\theta^2$ (giving $a = 3, b = 2, c = -3$).

---
topic: "Differentiation"
subtopic: "Stationary points"
---
### **Question 5**

The curve $C$ has equation
$$y = 5x^4 - 24x^3 + 42x^2 - 32x + 11 \quad x \in \mathbb{R}$$

**(a)** Find
(i) $\frac{\mathrm{d}y}{\mathrm{d}x}$
(ii) $\frac{\mathrm{d}^2y}{\mathrm{d}x^2}$ **(3)**

**(b)**
(i) Verify that $C$ has a stationary point at $x = 1$
(ii) Show that this stationary point is a point of inflection, giving reasons for your answer. **(4)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Differentiate to find $\frac{\mathrm{d}y}{\mathrm{d}x}$**
$$\frac{\mathrm{d}y}{\mathrm{d}x} = 20x^3 - 72x^2 + 84x - 32$$
- **[M1]** Differentiates at least two terms correctly.
- **[A1]** $\frac{\mathrm{d}y}{\mathrm{d}x} = 20x^3 - 72x^2 + 84x - 32$

**Step 2: Differentiate again to find $\frac{\mathrm{d}^2y}{\mathrm{d}x^2}$**
$$\frac{\mathrm{d}^2y}{\mathrm{d}x^2} = 60x^2 - 144x + 84$$
- **[A1]** $\frac{\mathrm{d}^2y}{\mathrm{d}x^2} = 60x^2 - 144x + 84$

#### **Part (b)**

**Step 3: Verify that $x = 1$ is a stationary point**
$$\text{At } x = 1: \quad \frac{\mathrm{d}y}{\mathrm{d}x} = 20(1)^3 - 72(1)^2 + 84(1) - 32 = 20 - 72 + 84 - 32 = 0$$
- **[B1]** Evaluates $\frac{\mathrm{d}y}{\mathrm{d}x}$ at $x = 1$ and correctly shows it equals $0$.

**Step 4: Test $\frac{\mathrm{d}^2y}{\mathrm{d}x^2}$ at $x = 1$ and analyze gradient or second derivative either side**
$$\text{At } x = 1: \quad \frac{\mathrm{d}^2y}{\mathrm{d}x^2} = 60(1)^2 - 144(1) + 84 = 0$$
$$\text{Test gradient either side of } x = 1:$$
$$\text{At } x = 0.9: \quad \frac{\mathrm{d}y}{\mathrm{d}x} = 20(0.9)^3 - 72(0.9)^2 + 84(0.9) - 32 = -0.16 < 0$$
$$\text{At } x = 1.1: \quad \frac{\mathrm{d}y}{\mathrm{d}x} = 20(1.1)^3 - 72(1.1)^2 + 84(1.1) - 32 = -0.16 < 0$$
- **[M1]** Shows $\frac{\mathrm{d}^2y}{\mathrm{d}x^2} = 0$ at $x = 1$ and considers the value/sign of $\frac{\mathrm{d}y}{\mathrm{d}x}$ or $\frac{\mathrm{d}^2y}{\mathrm{d}x^2}$ either side of $x = 1$.
- **[A1]** Shows that $\frac{\mathrm{d}y}{\mathrm{d}x} \le 0$ on both sides of $x = 1$ (or that $\frac{\mathrm{d}^2y}{\mathrm{d}x^2}$ changes sign across $x = 1$).
- **[A1]** Fully correct conclusion giving reasons, confirming that $(1, 2)$ is a point of inflection.

---
topic: "Radians"
subtopic: "Areas of sectors and segments"
---
### **Question 6**

**Figure 1**

**Figure 1** shows the shape $OABCDEFO$, which is a design for a logo.
In the design
- $OAB$ is a sector of a circle centre $O$ and radius $r$
- sector $OFE$ is congruent to sector $OAB$
- $ODC$ is a sector of a circle centre $O$ and radius $2r$
- $AOF$ is a straight line

Given that the size of angle $COD$ is $\theta$ radians,

**(a)** write down, in terms of $\theta$, the size of angle $AOB$ **(1)**

**(b)** Show that the area of the logo is
$$\frac{1}{2} r^2 (3\theta + \pi)$$ **(2)**

**(c)** Find the perimeter of the logo, giving your answer in simplest form in terms of $r, \theta$ and $\pi$. **(2)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Calculate angle $AOB$**
$$\angle AOB = \frac{\pi - \theta}{2}$$
- **[B1]** $\frac{\pi - \theta}{2}$ or $\frac{1}{2}(\pi - \theta)$

#### **Part (b)**

**Step 2: Express total area of logo as sum of sectors**
$$\text{Area} = 2 \times \frac{1}{2} r^2 \left(\frac{\pi - \theta}{2}\right) + \frac{1}{2} (2r)^2 \theta$$
- **[M1]** Sums the areas of the two smaller congruent sectors $OAB$ and $OFE$ and the larger sector $ODC$.

$$\text{Area} = r^2 \left(\frac{\pi - \theta}{2}\right) + 2r^2 \theta = \frac{1}{2} r^2 (\pi - \theta + 4\theta) = \frac{1}{2} r^2 (3\theta + \pi)$$
- **[A1]** Correct algebraic working leading to $\frac{1}{2} r^2 (3\theta + \pi)$.

#### **Part (c)**

**Step 3: Sum all straight edges and arc lengths**
$$\text{Arc } CD = 2r\theta$$
$$\text{Arc } AB + \text{Arc } EF = 2 \times r\left(\frac{\pi - \theta}{2}\right) = r(\pi - \theta)$$
$$\text{Straight boundaries } OA + OF + BC + DE = r + r + r + r = 4r$$
$$\text{Perimeter} = 2r\theta + r(\pi - \theta) + 4r$$
- **[M1]** Correctly identifies and sums all relevant arc lengths and straight edge lengths.

$$\text{Perimeter} = r(2\theta + \pi - \theta + 4) = r(\theta + \pi + 4)$$
- **[A1]** $r(\theta + \pi + 4)$ or $r(4 + \pi + \theta)$

---
topic: "Integration"
subtopic: "Areas between curves and lines"
---
### **Question 7**

In this question you should show all stages of your working.
Solutions relying entirely on calculator technology are not acceptable.

**Figure 2**

**Figure 2** shows a sketch of part of the curve $C$ with equation
$$y = x^3 - 10x^2 + 27x - 23$$
The point $P(5, -13)$ lies on $C$.
The line $l$ is the tangent to $C$ at $P$.

**(a)** Use differentiation to find the equation of $l$, giving your answer in the form $y = mx + c$ where $m$ and $c$ are integers to be found. **(4)**

**(b)** Hence verify that $l$ meets $C$ again on the $y$-axis. **(1)**

The finite region $R$, shown shaded in Figure 2, is bounded by the curve $C$ and the line $l$.

**(c)** Use algebraic integration to find the exact area of $R$. **(4)**

### **Mark Scheme 7**

#### **Part (a)**

**Step 1: Differentiate $y$ to find the gradient at $x = 5$**
$$\frac{\mathrm{d}y}{\mathrm{d}x} = 3x^2 - 20x + 27$$
$$\text{At } x = 5: \quad m = 3(5)^2 - 20(5) + 27 = 75 - 100 + 27 = 2$$
- **[M1]** Differentiates $y$ to get $\frac{\mathrm{d}y}{\mathrm{d}x} = 3x^2 - 20x + 27$ and substitutes $x = 5$.
- **[A1]** Gradient $m = 2$.

**Step 2: Find equation of tangent $l$**
$$y - (-13) = 2(x - 5) \Rightarrow y + 13 = 2x - 10 \Rightarrow y = 2x - 23$$
- **[M1]** Uses $y - y_1 = m(x - x_1)$ with $(5, -13)$ and their gradient $m$.
- **[A1]** $y = 2x - 23$

#### **Part (b)**

**Step 3: Verify intersection on the $y$-axis**
$$\text{On } l, \text{ when } x = 0: \quad y = -23$$
$$\text{On } C, \text{ when } x = 0: \quad y = 0^3 - 10(0)^2 + 27(0) - 23 = -23$$
- **[B1]** Verifies that both $l$ and $C$ pass through $(0, -23)$.

#### **Part (c)**

**Step 4: Set up the integral for area $R$**
$$\text{Area} = \int_0^5 [(x^3 - 10x^2 + 27x - 23) - (2x - 23)] \, \mathrm{d}x = \int_0^5 (x^3 - 10x^2 + 25x) \, \mathrm{d}x$$
- **[M1]** Sets up integral of $y_C - y_l = x^3 - 10x^2 + 25x$ with limits $0$ and $5$.

**Step 5: Integrate and apply limits**
$$\int (x^3 - 10x^2 + 25x) \, \mathrm{d}x = \left[ \frac{x^4}{4} - \frac{10x^3}{3} + \frac{25x^2}{2} \right]_0^5$$
- **[M1]** Integrates to achieve $\frac{x^4}{4} - \frac{10x^3}{3} + \frac{25x^2}{2}$.

$$= \left( \frac{625}{4} - \frac{1250}{3} + \frac{625}{2} \right) - 0$$
- **[dM1]** Substitutes limits $0$ and $5$ into their integrated function.

$$= \frac{1875 - 5000 + 3750}{12} = \frac{625}{12}$$
- **[A1]** $\frac{625}{12}$ or equivalent exact fraction.

---
topic: "Differentiation"
subtopic: "Implicit differentiation"
---
### **Question 8**

The curve $C$ has equation
$$px^3 + qxy + 3y^2 = 26$$
where $p$ and $q$ are constants.

**(a)** Show that
$$\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{apx^2 + bqy}{qx + cy}$$
where $a, b$ and $c$ are integers to be found. **(4)**

Given that
- the point $P(-1, -4)$ lies on $C$
- the normal to $C$ at $P$ has equation $19x + 26y + 123 = 0$

**(b)** find the value of $p$ and the value of $q$. **(5)**

### **Mark Scheme 8**

#### **Part (a)**

**Step 1: Differentiate implicitly with respect to $x$**
$$3px^2 + q\left(y + x\frac{\mathrm{d}y}{\mathrm{d}x}\right) + 6y\frac{\mathrm{d}y}{\mathrm{d}x} = 0$$
- **[M1]** Differentiates $px^3 \rightarrow 3px^2$ or $3y^2 \rightarrow 6y\frac{\mathrm{d}y}{\mathrm{d}x}$.
- **[M1]** Uses product rule on $qxy \rightarrow q y + q x \frac{\mathrm{d}y}{\mathrm{d}x}$.

**Step 2: Rearrange for $\frac{\mathrm{d}y}{\mathrm{d}x}$**
$$\frac{\mathrm{d}y}{\mathrm{d}x}(qx + 6y) = -3px^2 - qy \Rightarrow \frac{\mathrm{d}y}{\mathrm{d}x} = \frac{-3px^2 - qy}{qx + 6y}$$
- **[A1]** Correct implicit derivative expression.
- **[A1]** Matches required form giving $a = -3, b = -1, c = 6$.

#### **Part (b)**

**Step 3: Use point $P(-1, -4)$ on $C$**
$$p(-1)^3 + q(-1)(-4) + 3(-4)^2 = 26 \Rightarrow -p + 4q + 48 = 26 \Rightarrow -p + 4q = -22$$
- **[M1]** Substitutes $x = -1, y = -4$ into the curve equation.
- **[A1]** $-p + 4q = -22$ or $p - 4q = 22$.

**Step 4: Use normal equation to find tangent gradient**
$$19x + 26y + 123 = 0 \Rightarrow y = -\frac{19}{26}x - \frac{123}{26} \Rightarrow \text{Normal gradient } = -\frac{19}{26}$$
$$\Rightarrow \text{Tangent gradient } \frac{\mathrm{d}y}{\mathrm{d}x} = \frac{26}{19}$$
$$\text{At } P(-1, -4): \quad \frac{-3p(-1)^2 - q(-4)}{q(-1) + 6(-4)} = \frac{-3p + 4q}{-q - 24} = \frac{26}{19}$$
- **[M1]** Equates derivative at $P$ to the perpendicular gradient $\frac{26}{19}$.

**Step 5: Solve simultaneous equations for $p$ and $q$**
$$19(-3p + 4q) = 26(-q - 24) \Rightarrow -57p + 76q = -26q - 624 \Rightarrow -57p + 102q = -624$$
Substitute $p = 4q + 22$:
$$-57(4q + 22) + 102q = -624 \Rightarrow -228q - 1254 + 102q = -624 \Rightarrow -126q = 630 \Rightarrow q = -5$$
$$p = 4(-5) + 22 = 2$$
- **[dM1]** Solves the system of equations simultaneously.
- **[A1]** $p = 2, \quad q = -5$

---
topic: "Sequences and Series"
subtopic: "Geometric series"
---
### **Question 9**

Show that
$$\sum_{n=2}^{\infty} \left(\frac{3}{4}\right)^n \cos(180n)^\circ = \frac{9}{28}$$ **(3)**

### **Mark Scheme 9**

**Step 1: Identify the terms of the geometric series**
$$\text{For } n = 2: \quad \left(\frac{3}{4}\right)^2 \cos(360^\circ) = \frac{9}{16}(1) = \frac{9}{16}$$
$$\text{For } n = 3: \quad \left(\frac{3}{4}\right)^3 \cos(540^\circ) = \frac{27}{64}(-1) = -\frac{27}{64}$$
$$\text{First term } a = \frac{9}{16}, \quad \text{common ratio } r = -\frac{3}{4}$$
- **[M1]** Finds the first term $a = \frac{9}{16}$ and common ratio $r = -\frac{3}{4}$.

**Step 2: Apply the sum to infinity formula $S_\infty = \frac{a}{1 - r}$**
$$S_\infty = \frac{\frac{9}{16}}{1 - \left(-\frac{3}{4}\right)} = \frac{\frac{9}{16}}{\frac{7}{4}}$$
- **[M1]** Substitutes their $a$ and $r$ into $S_\infty = \frac{a}{1 - r}$.

**Step 3: Simplify to reach the answer**
$$S_\infty = \frac{9}{16} \times \frac{4}{7} = \frac{9}{28}$$
- **[A1]** Complete proof leading to $\frac{9}{28}$.

---
topic: "Exponentials and Logarithms"
subtopic: "Logarithms and non-linear data"
---
### **Question 10**

The time, $T$ seconds, that a pendulum takes to complete one swing is modelled by the formula
$$T = a l^b$$
where $l$ metres is the length of the pendulum and $a$ and $b$ are constants.

**(a)** Show that this relationship can be written in the form
$$\log_{10} T = b \log_{10} l + \log_{10} a$$ **(2)**

**Figure 3**

A student carried out an experiment to find the values of the constants $a$ and $b$.
The student recorded the value of $T$ for different values of $l$.

**Figure 3** shows the linear relationship between $\log_{10} l$ and $\log_{10} T$ for the student's data.
The straight line passes through the points $(-0.7, 0)$ and $(0.21, 0.45)$

Using this information,

**(b)** find a complete equation for the model in the form
$$T = a l^b$$
giving the value of $a$ and the value of $b$, each to 3 significant figures. **(3)**

**(c)** With reference to the model, interpret the value of the constant $a$. **(1)**

### **Mark Scheme 10**

#### **Part (a)**

**Step 1: Take $\log_{10}$ of both sides and apply laws of logarithms**
$$T = a l^b \Rightarrow \log_{10} T = \log_{10}(a l^b) = \log_{10} a + \log_{10}(l^b) = b \log_{10} l + \log_{10} a$$
- **[M1]** Takes $\log_{10}$ of both sides and uses product or power law of logarithms.
- **[A1]** Correct proof leading to $\log_{10} T = b \log_{10} l + \log_{10} a$.

#### **Part (b)**

**Step 2: Find gradient $b$**
$$b = \frac{0.45 - 0}{0.21 - (-0.7)} = \frac{0.45}{0.91} \approx 0.4945...$$
- **[M1]** Calculates gradient $b = \frac{0.45 - 0}{0.21 - (-0.7)}$.

**Step 3: Find constant $a$**
$$\text{Using point } (-0.7, 0): \quad 0 = 0.4945...(-0.7) + \log_{10} a \Rightarrow \log_{10} a = 0.34615...$$
$$a = 10^{0.34615...} \approx 2.2189...$$
- **[M1]** Uses point on line to find $\log_{10} a$ and computes $a = 10^{\text{intercept}}$.

$$T = 2.22 l^{0.495}$$
- **[A1]** $T = 2.22 l^{0.495}$ (accept $a = 2.22, b = 0.495$).

#### **Part (c)**

**Step 4: Interpret constant $a$**
$$a \text{ is the time in seconds taken for a pendulum of length } 1\text{ metre to complete one swing.}$$
- **[B1]** States that $a$ is the time (in seconds) for a pendulum of length $1\text{ m}$ to complete one swing.

---
topic: "Functions and Graphs"
subtopic: "y = |f(x)| and y = f(|x|)"
---
### **Question 11**

**Figure 4**

**Figure 4** shows a sketch of the graph with equation
$$y = |2x - 3k|$$
where $k$ is a positive constant.

**(a)** Sketch the graph with equation $y = f(x)$ where
$$f(x) = k - |2x - 3k|$$
stating
- the coordinates of the maximum point
- the coordinates of any points where the graph cuts the coordinate axes **(4)**

**(b)** Find, in terms of $k$, the set of values of $x$ for which
$$k - |2x - 3k| > x - k$$
giving your answer in set notation. **(4)**

**(c)** Find, in terms of $k$, the coordinates of the minimum point of the graph with equation
$$y = 3 - 5f\left(\frac{1}{2}x\right)$$ **(2)**

### **Mark Scheme 11**

#### **Part (a)**

**Step 1: Sketch $y = k - |2x - 3k|$ and identify key points**

**Figure 4 Description**: An inverted V-shape graph.
- Maximum point at $\left(\frac{3k}{2}, k\right)$.
- $y$-intercept at $(0, -2k)$.
- $x$-intercepts where $k - |2x - 3k| = 0 \Rightarrow |2x - 3k| = k \Rightarrow 2x - 3k = \pm k \Rightarrow x = k \text{ or } 2k$.
- **[M1]** Inverted V-shape with maximum in first quadrant.
- **[A1]** Maximum point at $\left(\frac{3}{2}k, k\right)$ or $(1.5k, k)$.
- **[A1]** $x$-intercepts at $(k, 0)$ and $(2k, 0)$.
- **[A1]** $y$-intercept at $(0, -2k)$.

#### **Part (b)**

**Step 2: Solve $k - |2x - 3k| > x - k$**
$$|2x - 3k| < 2k - x$$
$$\text{Line 1: } -(2x - 3k) = 2k - x \Rightarrow -2x + 3k = 2k - x \Rightarrow x = k$$
$$\text{Line 2: } 2x - 3k = 2k - x \Rightarrow 3x = 5k \Rightarrow x = \frac{5}{3}k$$
- **[M1]** Equates $2x - 3k = 2k - x$ or $-(2x - 3k) = 2k - x$.
- **[A1]** Finds critical value $x = \frac{5}{3}k$.
- **[A1]** Finds critical value $x = k$.

$$\left\{x \in \mathbb{R} : k < x < \frac{5}{3}k\right\}$$
- **[A1]** Expresses answer in correct set notation, e.g. $\{x : k < x < \frac{5}{3}k\}$.

#### **Part (c)**

**Step 3: Transform maximum of $f(x)$ to minimum of $y = 3 - 5f\left(\frac{1}{2}x\right)$**
$$\text{Maximum of } f(x) \text{ is at } \left(\frac{3k}{2}, k\right)$$
$$\text{For } f\left(\frac{1}{2}x\right): \quad x\text{-coordinate is multiplied by } 2 \Rightarrow x = 3k$$
$$\text{For } 3 - 5f(...): \quad y\text{-coordinate becomes } 3 - 5(k) = 3 - 5k$$
$$\text{Minimum point is } (3k, 3 - 5k)$$
- **[M1]** Applies correct transformations to both coordinates of the vertex.
- **[A1]** $(3k, 3 - 5k)$

---
topic: "Integration"
subtopic: "Integration by substitution"
---
### **Question 12**

**(a)** Use the substitution $u = 1 + \sqrt{x}$ to show that
$$\int_0^{16} \frac{x}{1 + \sqrt{x}} \, \mathrm{d}x = \int_p^q \frac{2(u-1)^3}{u} \, \mathrm{d}u$$
where $p$ and $q$ are constants to be found. **(3)**

**(b)** Hence show that
$$\int_0^{16} \frac{x}{1 + \sqrt{x}} \, \mathrm{d}x = A - B \ln 5$$
where $A$ and $B$ are constants to be found. **(4)**

### **Mark Scheme 12**

#### **Part (a)**

**Step 1: Differentiate substitution and express $x$ and $\mathrm{d}x$ in terms of $u$**
$$u = 1 + \sqrt{x} \Rightarrow \sqrt{x} = u - 1 \Rightarrow x = (u - 1)^2$$
$$\frac{\mathrm{d}x}{\mathrm{d}u} = 2(u - 1) \Rightarrow \mathrm{d}x = 2(u - 1) \, \mathrm{d}u$$
- **[M1]** Differentiates $u = 1 + \sqrt{x}$ or $x = (u-1)^2$ to find $\mathrm{d}x$ in terms of $\mathrm{d}u$.

**Step 2: Change limits and substitute**
$$\text{When } x = 0: \quad u = 1 + 0 = 1 \Rightarrow p = 1$$
$$\text{When } x = 16: \quad u = 1 + \sqrt{16} = 5 \Rightarrow q = 5$$
$$\int_0^{16} \frac{x}{1 + \sqrt{x}} \, \mathrm{d}x = \int_1^5 \frac{(u - 1)^2}{u} \cdot 2(u - 1) \, \mathrm{d}u = \int_1^5 \frac{2(u - 1)^3}{u} \, \mathrm{d}u$$
- **[A1]** Correct limits $p = 1, q = 5$.
- **[A1]** Fully correct integrand and limits showing complete steps to $\int_1^5 \frac{2(u - 1)^3}{u} \, \mathrm{d}u$.

#### **Part (b)**

**Step 3: Expand numerator and divide term by term**
$$\frac{2(u - 1)^3}{u} = \frac{2(u^3 - 3u^2 + 3u - 1)}{u} = 2u^2 - 6u + 6 - \frac{2}{u}$$
- **[M1]** Expands $(u-1)^3$ and divides each term by $u$.

**Step 4: Integrate term by term**
$$\int_1^5 \left(2u^2 - 6u + 6 - \frac{2}{u}\right) \, \mathrm{d}u = \left[ \frac{2u^3}{3} - 3u^2 + 6u - 2\ln u \right]_1^5$$
- **[M1]** Integrates to achieve $a u^3 + b u^2 + c u + d \ln u$.

**Step 5: Apply limits**
$$= \left( \frac{250}{3} - 75 + 30 - 2\ln 5 \right) - \left( \frac{2}{3} - 3 + 6 - 2\ln 1 \right)$$
$$= \left( \frac{115}{3} - 2\ln 5 \right) - \left( \frac{11}{3} \right) = \frac{104}{3} - 2\ln 5$$
- **[M1]** Applies limits $1$ and $5$ correctly into their integrated expression.
- **[A1]** $\frac{104}{3} - 2\ln 5$ (so $A = \frac{104}{3}, B = 2$).

---
topic: "Differentiation"
subtopic: "Parametric differentiation"
---
### **Question 13**

The curve $C$ has parametric equations
$$x = \sin 2\theta \quad y = \operatorname{cosec}^3 \theta \quad 0 < \theta < \frac{\pi}{2}$$

**(a)** Find an expression for $\frac{\mathrm{d}y}{\mathrm{d}x}$ in terms of $\theta$ **(3)**

**(b)** Hence find the exact value of the gradient of the tangent to $C$ at the point where $y = 8$ **(3)**

### **Mark Scheme 13**

#### **Part (a)**

**Step 1: Differentiate $x$ and $y$ with respect to $\theta$**
$$\frac{\mathrm{d}x}{\mathrm{d}\theta} = 2\cos 2\theta$$
$$\frac{\mathrm{d}y}{\mathrm{d}\theta} = 3\operatorname{cosec}^2 \theta (-\operatorname{cosec} \theta \cot \theta) = -3\operatorname{cosec}^3 \theta \cot \theta$$
- **[M1]** Finds $\frac{\mathrm{d}x}{\mathrm{d}\theta} = 2\cos 2\theta$ or differentiates $\operatorname{cosec}^3 \theta$.
- **[A1]** Correct $\frac{\mathrm{d}x}{\mathrm{d}\theta} = 2\cos 2\theta$ and $\frac{\mathrm{d}y}{\mathrm{d}\theta} = -3\operatorname{cosec}^3 \theta \cot \theta$.

**Step 2: Apply chain rule for parametric differentiation**
$$\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{\frac{\mathrm{d}y}{\mathrm{d}\theta}}{\frac{\mathrm{d}x}{\mathrm{d}\theta}} = \frac{-3\operatorname{cosec}^3 \theta \cot \theta}{2\cos 2\theta}$$
- **[A1]** $\frac{-3\operatorname{cosec}^3 \theta \cot \theta}{2\cos 2\theta}$ or equivalent in terms of $\sin \theta, \cos \theta$.

#### **Part (b)**

**Step 3: Find value of $\theta$ when $y = 8$**
$$y = \operatorname{cosec}^3 \theta = 8 \Rightarrow \operatorname{cosec} \theta = 2 \Rightarrow \sin \theta = \frac{1}{2}$$
$$\text{Since } 0 < \theta < \frac{\pi}{2}: \quad \theta = \frac{\pi}{6}$$
- **[M1]** Sets $y = 8 \Rightarrow \sin \theta = \frac{1}{2}$ to find $\theta = \frac{\pi}{6}$.

**Step 4: Substitute $\theta = \frac{\pi}{6}$ into $\frac{\mathrm{d}y}{\mathrm{d}x}$**
$$\operatorname{cosec}\left(\frac{\pi}{6}\right) = 2, \quad \cot\left(\frac{\pi}{6}\right) = \sqrt{3}, \quad \cos\left(\frac{\pi}{3}\right) = \frac{1}{2}$$
$$\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{-3(2)^3(\sqrt{3})}{2\left(\frac{1}{2}\right)} = -24\sqrt{3}$$
- **[M1]** Substitutes $\theta = \frac{\pi}{6}$ into their expression for $\frac{\mathrm{d}y}{\mathrm{d}x}$.
- **[A1]** $-24\sqrt{3}$

---
topic: "Modelling with Differential Equations"
subtopic: "Modelling with first-order differential equations"
---
### **Question 14**

**Figure 5**

Water flows at a constant rate into a large tank.
The tank is a cuboid, with all sides of negligible thickness.
The base of the tank measures $8\text{ m}$ by $3\text{ m}$ and the height of the tank is $5\text{ m}$.
There is a tap at a point $T$ at the bottom of the tank, as shown in Figure 5.

At time $t$ minutes after the tap has been opened
- the depth of water in the tank is $h$ metres
- water is flowing into the tank at a constant rate of $0.48\text{ m}^3$ per minute
- water is modelled as leaving the tank through the tap at a rate of $0.1h\text{ m}^3$ per minute

**(a)** Show that, according to the model,
$$1200 \frac{\mathrm{d}h}{\mathrm{d}t} = 24 - 5h$$ **(4)**

Given that when the tap was opened, the depth of water in the tank was $2\text{ m}$,

**(b)** show that, according to the model,
$$h = A + B\mathrm{e}^{-kt}$$
where $A, B$ and $k$ are constants to be found. **(6)**

Given that the tap remains open,

**(c)** determine, according to the model, whether the tank will ever become full, giving a reason for your answer. **(2)**

### **Mark Scheme 14**

#### **Part (a)**

**Step 1: Write formula for volume $V$ in terms of $h$**
$$V = 8 \times 3 \times h = 24h \Rightarrow \frac{\mathrm{d}V}{\mathrm{d}h} = 24$$
- **[B1]** Writes $V = 24h$ or $\frac{\mathrm{d}V}{\mathrm{d}t} = 24\frac{\mathrm{d}h}{\mathrm{d}t}$.

**Step 2: Express net rate of change of volume $\frac{\mathrm{d}V}{\mathrm{d}t}$**
$$\frac{\mathrm{d}V}{\mathrm{d}t} = 0.48 - 0.1h$$
- **[M1]** Forms $\frac{\mathrm{d}V}{\mathrm{d}t} = \text{rate in} - \text{rate out} = 0.48 - 0.1h$.

**Step 3: Connect to $\frac{\mathrm{d}h}{\mathrm{d}t}$ using the chain rule**
$$24 \frac{\mathrm{d}h}{\mathrm{d}t} = 0.48 - 0.1h$$
$$\text{Multiply by } 50: \quad 1200 \frac{\mathrm{d}h}{\mathrm{d}t} = 24 - 5h$$
- **[M1]** Uses chain rule $\frac{\mathrm{d}h}{\mathrm{d}t} = \frac{\mathrm{d}h}{\mathrm{d}V} \times \frac{\mathrm{d}V}{\mathrm{d}t}$.
- **[A1]** Fully correct proof leading to $1200 \frac{\mathrm{d}h}{\mathrm{d}t} = 24 - 5h$.

#### **Part (b)**

**Step 4: Separate variables and integrate**
$$\int \frac{1}{24 - 5h} \, \mathrm{d}h = \int \frac{1}{1200} \, \mathrm{d}t$$
$$-\frac{1}{5} \ln|24 - 5h| = \frac{1}{1200} t + C$$
- **[M1]** Separates variables and integrates both sides.
- **[A1]** Correct integration: $-\frac{1}{5} \ln(24 - 5h) = \frac{1}{1200} t + C$ or equivalent.

**Step 5: Apply initial condition $t = 0, h = 2$**
$$\text{At } t = 0, h = 2: \quad -\frac{1}{5} \ln(24 - 10) = C \Rightarrow C = -\frac{1}{5} \ln 14$$
$$\ln(24 - 5h) = -\frac{1}{240} t + \ln 14$$
$$24 - 5h = 14 \mathrm{e}^{-\frac{1}{240}t}$$
$$5h = 24 - 14 \mathrm{e}^{-\frac{1}{240}t} \Rightarrow h = 4.8 - 2.8 \mathrm{e}^{-\frac{1}{240}t}$$
- **[M1]** Uses initial condition $t = 0, h = 2$ to find the constant.
- **[M1]** Rearranges to express $h$ explicitly in terms of $t$.
- **[A1]** Correct value for two of $A, B, k$.
- **[A1]** $h = 4.8 - 2.8\mathrm{e}^{-\frac{1}{240}t}$ (so $A = 4.8, B = -2.8, k = \frac{1}{240}$).

#### **Part (c)**

**Step 6: Determine long-term behavior of $h$**
$$\text{As } t \rightarrow \infty, \quad \mathrm{e}^{-\frac{1}{240}t} \rightarrow 0 \Rightarrow h \rightarrow 4.8\text{ m}$$
$$\text{Since height of tank is } 5\text{ m and } 4.8 < 5, \text{ the tank will never become full.}$$
- **[M1]** Evaluates $\lim_{t \rightarrow \infty} h = 4.8$ or tests $h = 5$.
- **[A1]** Concludes the tank will never be full as maximum depth is $4.8\text{ m} < 5\text{ m}$.

---
topic: "Trigonometry and Modelling"
subtopic: "Modelling with trigonometric functions"
---
### **Question 15**

**(a)** Express $2\cos \theta - \sin \theta$ in the form $R\cos(\theta + \alpha)$, where $R > 0$ and $0 < \alpha < \frac{\pi}{2}$

Give the exact value of $R$ and the value of $\alpha$ in radians to 3 decimal places. **(3)**

**Figure 6**

Figure 6 shows the cross-section of a water wheel.
The wheel is free to rotate about a fixed axis through the point $C$.
The point $P$ is at the end of one of the paddles of the wheel, as shown in Figure 6.
The water level is assumed to be horizontal and of constant height.
The vertical height, $H$ metres, of $P$ above the water level is modelled by the equation
$$H = 3 + 4\cos(0.5t) - 2\sin(0.5t)$$
where $t$ is the time in seconds after the wheel starts rotating.

Using the model, find

**(b)**
(i) the maximum height of $P$ above the water level,
(ii) the value of $t$ when this maximum height first occurs, giving your answer to one decimal place. **(3)**

In a single revolution of the wheel, $P$ is below the water level for a total of $T$ seconds.
According to the model,

**(c)** find the value of $T$ giving your answer to 3 significant figures.
*(Solutions based entirely on calculator technology are not acceptable.)* **(4)**

In reality, the water level may not be of constant height.

**(d)** Explain how the equation of the model should be refined to take this into account. **(1)**

### **Mark Scheme 15**

#### **Part (a)**

**Step 1: Calculate $R$ and $\alpha$**
$$R = \sqrt{2^2 + (-1)^2} = \sqrt{5}$$
$$\tan \alpha = \frac{1}{2} \Rightarrow \alpha = \arctan(0.5) \approx 0.4636... \approx 0.464\text{ rad}$$
- **[B1]** $R = \sqrt{5}$
- **[M1]** $\tan \alpha = \pm \frac{1}{2}$
- **[A1]** $\alpha = 0.464$

#### **Part (b)**

**Step 2: Rewrite $H$ using the $R\cos(\theta + \alpha)$ form**
$$H = 3 + 2(2\cos(0.5t) - \sin(0.5t)) = 3 + 2\sqrt{5}\cos(0.5t + 0.4636...)$$
- **[M1]** Writes $H = 3 + 2\sqrt{5}\cos(0.5t + 0.4636...)$

**Step 3: Find maximum height and time $t$**
$$\text{Max height } H_{\max} = 3 + 2\sqrt{5} \approx 7.47\text{ m}$$
$$\text{First maximum occurs when } \cos(0.5t + 0.4636) = 1 \Rightarrow 0.5t + 0.4636 = 2\pi$$
$$0.5t = 6.2832 - 0.4636 = 5.8196 \Rightarrow t \approx 11.6\text{ seconds}$$
- **[A1]** Maximum height $= 3 + 2\sqrt{5}$ or $\approx 7.47\text{ m}$
- **[A1]** $t = 11.6$

#### **Part (c)**

**Step 4: Set $H = 0$ to find critical values of $t$**
$$3 + 2\sqrt{5}\cos(0.5t + 0.4636) = 0 \Rightarrow \cos(0.5t + 0.4636) = -\frac{3}{2\sqrt{5}} \approx -0.6708$$
$$0.5t + 0.4636 = \arccos\left(-\frac{3}{2\sqrt{5}}\right) = 2.3060... \quad \text{and} \quad 2\pi - 2.3060... = 3.9771...$$
- **[M1]** Sets $H = 0$ and solves $\cos(0.5t + \alpha) = -\frac{3}{2\sqrt{5}}$.
- **[A1]** Gets $0.5t + \alpha \approx 2.306$ and $3.977$.

**Step 5: Calculate time interval $T$**
$$\Delta (0.5t) = 3.9771 - 2.3060 = 1.6711$$
$$T = \frac{1.6711}{0.5} = 3.3422... \approx 3.34\text{ seconds}$$
- **[M1]** Finds difference between the two angles and calculates time interval $T$.
- **[A1]** $T = 3.34$

#### **Part (d)**

**Step 6: Suggest a valid refinement**
$$\text{Replace the constant } 3 \text{ with a function of time } t, \text{ e.g. } 3 + f(t) \text{ or } 3 + A\sin(\omega t).$$
- **[B1]** States that the constant term ($3$) should be made variable/time-dependent.
