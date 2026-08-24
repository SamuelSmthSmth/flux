---
topic: "Algebraic Methods"
subtopic: "The factor theorem"
---
### **Question 1**

$$g(x) = 3x^3 - 20x^2 + (k + 17)x + k$$

where $k$ is a constant.

Given that $(x - 3)$ is a factor of $g(x)$, find the value of $k$. **(3)**

### **Mark Scheme 1**

**Step 1: Apply the factor theorem**
Since $(x - 3)$ is a factor, set $x = 3$ in $g(x)$ and equate to 0:
$$g(3) = 3(3)^3 - 20(3)^2 + (k + 17)(3) + k = 0$$
- **[M1]** Attempts $g(3) = 0$ or uses algebraic division by $(x - 3)$ to find a remainder in terms of $k$ and sets it equal to 0.

**Step 2: Simplify and collect terms in $k$**
$$81 - 180 + 3k + 51 + k = 0$$
$$4k - 48 = 0$$
- **[M1]** Expands brackets correctly and collects terms to get a linear equation in $k$.

**Step 3: Solve for $k$**
$$k = 12$$
- **[A1]** Correct value of $k = 12$.

---
topic: "Binomial Expansion"
subtopic: "Expanding (1 + x)^n"
---
### **Question 2**

**(a)** Find, in ascending powers of $x$, the first four terms of the binomial expansion of
$$(1 - 9x)^{\frac{1}{2}}$$
giving each term in simplest form. **(3)**

**(b)** Give a reason why $x = -\frac{2}{9}$ should **not** be used in the expansion to find an approximation to $\sqrt{3}$ **(1)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Apply the binomial expansion formula**
$$(1 - 9x)^{\frac{1}{2}} = 1 + \left(\frac{1}{2}\right)(-9x) + \frac{\left(\frac{1}{2}\right)\left(-\frac{1}{2}\right)}{2!}(-9x)^2 + \frac{\left(\frac{1}{2}\right)\left(-\frac{1}{2}\right)\left(-\frac{3}{2}\right)}{3!}(-9x)^3 + \dots$$
- **[M1]** Correct attempt at the binomial expansion for $(1 + ax)^n$ with $n = \frac{1}{2}$, showing at least 2 non-zero terms involving powers of $x$.

**Step 2: Simplify the first two terms**
$$1 - \frac{9}{2}x$$
- **[A1]** First two terms correct.

**Step 3: Simplify the remaining terms to simplest form**
$$- \frac{81}{8}x^2 - \frac{729}{16}x^3$$
- **[A1]** All four terms correct and fully simplified: $1 - \frac{9}{2}x - \frac{81}{8}x^2 - \frac{729}{16}x^3$.

#### **Part (b)**

**Step 4: State the condition for validity**
The expansion is valid for $|-9x| < 1 \Rightarrow |x| < \frac{1}{9}$. Since $\left|-\frac{2}{9}\right| = \frac{2}{9} > \frac{1}{9}$, $x = -\frac{2}{9}$ lies outside the valid range.
- **[B1]** States that $x = -\frac{2}{9}$ is not in the valid range $|x| < \frac{1}{9}$ or $\left|-\frac{2}{9}\right| > \frac{1}{9}$.

---
topic: "Numerical Methods"
subtopic: "The Newton-Raphson method"
---
### **Question 3**

$$f(x) = x + \tan\left(\frac{1}{2}x\right) \quad \pi < x < \frac{3\pi}{2}$$

Given that the equation $f(x) = 0$ has a single root $\alpha$

**(a)** show that $\alpha$ lies in the interval $[3.6, 3.7]$ **(2)**

**(b)** Find $f'(x)$ **(2)**

**(c)** Using $3.7$ as a first approximation for $\alpha$, apply the Newton–Raphson method once to obtain a second approximation for $\alpha$. Give your answer to 3 decimal places. **(2)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Evaluate $f(3.6)$ and $f(3.7)$ in radians**
$$f(3.6) = 3.6 + \tan(1.8) \approx -0.6863$$
$$f(3.7) = 3.7 + \tan(1.85) \approx 0.6961$$
- **[M1]** Attempts to calculate $f(3.6)$ and $f(3.7)$ using radians.

**Step 2: Conclude using sign change argument**
$f(3.6) < 0$ and $f(3.7) > 0$. Since $f(x)$ is continuous on $[3.6, 3.7]$, there is a change of sign, so $\alpha \in [3.6, 3.7]$.
- **[A1]** Both values correct and gives a minimal conclusion mentioning change of sign and continuity.

#### **Part (b)**

**Step 3: Differentiate $f(x)$**
$$f'(x) = 1 + \frac{1}{2}\sec^2\left(\frac{1}{2}x\right)$$
- **[M1]** Differentiates $\tan\left(\frac{1}{2}x\right)$ to give $k\sec^2\left(\frac{1}{2}x\right)$.
- **[A1]** Fully correct derivative: $1 + \frac{1}{2}\sec^2\left(\frac{1}{2}x\right)$.

#### **Part (c)**

**Step 4: Substitute $x_0 = 3.7$ into the Newton-Raphson formula**
$$x_1 = 3.7 - \frac{f(3.7)}{f'(3.7)}$$
$$f(3.7) \approx 0.6961$$
$$f'(3.7) = 1 + \frac{1}{2}\sec^2(1.85) \approx 9.4844$$
- **[M1]** Correct substitution of $x_0 = 3.7$, $f(3.7)$, and $f'(3.7)$ into the formula $x_1 = x_0 - \frac{f(x_0)}{f'(x_0)}$.

**Step 5: Calculate the second approximation**
$$x_1 = 3.7 - \frac{0.6961...}{9.4844...} \approx 3.627$$
- **[A1]** $3.627$ cao.

---
topic: "Differentiation"
subtopic: "Finding the derivative"
---
### **Question 4**

Given that $y = x^2$, use differentiation from first principles to show that $\frac{\mathrm{d}y}{\mathrm{d}x} = 2x$ **(3)**

### **Mark Scheme 4**

**Step 1: Write down the definition of derivative from first principles**
$$\frac{\mathrm{d}y}{\mathrm{d}x} = \lim_{h \to 0} \frac{(x + h)^2 - x^2}{h}$$
- **[B1]** States or uses $\frac{(x + h)^2 - x^2}{h}$ or $\lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$.

**Step 2: Expand and simplify the algebraic fraction**
$$\frac{(x + h)^2 - x^2}{h} = \frac{x^2 + 2xh + h^2 - x^2}{h} = \frac{2xh + h^2}{h} = 2x + h$$
- **[M1]** Expands $(x + h)^2$ correctly, cancels $x^2$, and divides through by $h$.

**Step 3: Take the limit as $h \to 0$**
$$\lim_{h \to 0} (2x + h) = 2x$$
- **[A1]** Shows taking the limit as $h \to 0$ clearly to achieve $2x$, with all notation correct.

---
topic: "Differentiation"
subtopic: "The quotient rule"
---
### **Question 5**

The function $f$ is defined by
$$f(x) = \frac{2x - 3}{x^2 + 4} \quad x \in \mathbb{R}$$

**(a)** Show that
$$f'(x) = \frac{ax^2 + bx + c}{(x^2 + 4)^2}$$
where $a, b$ and $c$ are constants to be found. **(3)**

**(b)** Hence, using algebra, find the values of $x$ for which $f$ is decreasing.
You must show each step in your working. **(3)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Apply the quotient rule**
$$f'(x) = \frac{2(x^2 + 4) - (2x - 3)(2x)}{(x^2 + 4)^2}$$
- **[M1]** Applies the quotient rule $\frac{u'v - uv'}{v^2}$ with correct structure.

**Step 2: Expand and simplify numerator**
$$f'(x) = \frac{2x^2 + 8 - (4x^2 - 6x)}{(x^2 + 4)^2} = \frac{-2x^2 + 6x + 8}{(x^2 + 4)^2}$$
- **[A1]** Correctly simplified numerator.

**Step 3: State values of $a, b, c$**
$$a = -2, \quad b = 6, \quad c = 8$$
- **[A1]** Obtains $f'(x) = \frac{-2x^2 + 6x + 8}{(x^2 + 4)^2}$ and identifies $a = -2, b = 6, c = 8$.

#### **Part (b)**

**Step 4: Set up the inequality for a decreasing function**
$f'(x) \le 0 \Rightarrow -2x^2 + 6x + 8 \le 0$ since $(x^2 + 4)^2 > 0$ for all real $x$.
- **[M1]** Sets $f'(x) \le 0$ or $< 0$ and recognizes that the denominator is strictly positive.

**Step 5: Solve the critical quadratic equation**
$$-2(x^2 - 3x - 4) = 0 \Rightarrow -2(x - 4)(x + 1) = 0 \Rightarrow x = -1, \, x = 4$$
- **[M1]** Solves the quadratic equation to find critical values $x = -1$ and $x = 4$.

**Step 6: State the range of values**
$$x \le -1 \text{ or } x \ge 4$$
- **[A1]** Correct range of values in set notation or inequality notation.

---
topic: "Functions and Graphs"
subtopic: "The modulus function"
---
### **Question 6**

**Figure 1** shows a sketch of the graph with equation
$$y = 3|x - 2| + 5$$

The vertex of the graph is at the point $P$, shown in **Figure 1**.

**(a)** Find the coordinates of $P$. **(2)**

**(b)** Solve the equation
$$16 - 4x = 3|x - 2| + 5$$ **(2)**

A line $l$ has equation $y = kx + 4$ where $k$ is a constant.
Given that $l$ intersects $y = 3|x - 2| + 5$ at 2 distinct points,

**(c)** find the range of values of $k$. **(2)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Identify vertex coordinates**
Vertex occurs when $x - 2 = 0 \Rightarrow x = 2$.
When $x = 2$, $y = 3(0) + 5 = 5$.
- **[M1]** States $x = 2$ or $y = 5$.
- **[A1]** Coordinates $P(2, 5)$.

#### **Part (b)**

**Step 2: Form and solve linear equations derived from the modulus**
Case 1: $16 - 4x = 3(x - 2) + 5 \Rightarrow 16 - 4x = 3x - 1 \Rightarrow 7x = 17 \Rightarrow x = \frac{17}{7}$
Case 2: $16 - 4x = -3(x - 2) + 5 \Rightarrow 16 - 4x = -3x + 11 \Rightarrow x = 5$
- **[M1]** Attempts to solve at least one correct linear equation derived from removing the modulus sign.
- **[A1]** Both values $x = \frac{17}{7}$ and $x = 5$.

#### **Part (c)**

**Step 3: Analyze gradients of intersecting lines**
Line $l$ passes through $(0, 4)$.
Gradient from $(0, 4)$ to $P(2, 5)$ is $k = \frac{5 - 4}{2 - 0} = \frac{1}{2}$.
The right branch of the V-shape has gradient $3$.
For 2 distinct intersections, the gradient $k$ must be greater than $\frac{1}{2}$ and less than $3$.
- **[M1]** Calculates $k = \frac{1}{2}$ using point $P(2, 5)$ or considers gradient boundaries.
- **[A1]** Correct range: $\frac{1}{2} < k < 3$.

---
topic: "Integration"
subtopic: "Solving differential equations"
---
### **Question 7**

**Figure 2** shows a cylindrical tank of height $1.5\text{ m}$.
Initially the tank is full of water.
The water starts to leak from a small hole, at a point $L$, in the side of the tank.
While the tank is leaking, the depth, $H$ metres, of the water in the tank is modelled by the differential equation
$$\frac{\mathrm{d}H}{\mathrm{d}t} = -0.12\mathrm{e}^{-0.2t}$$
where $t$ hours is the time after the leak starts.

Using the model,

**(a)** show that
$$H = A\mathrm{e}^{-0.2t} + B$$
where $A$ and $B$ are constants to be found, **(3)**

**(b)** find the time taken for the depth of the water to decrease to $1.2\text{ m}$. Give your answer in hours and minutes, to the nearest minute. **(3)**

In the long term, the water level in the tank falls to the same height as the hole.

**(c)** Find, according to the model, the height of the hole from the bottom of the tank. **(2)**

### **Mark Scheme 7**

#### **Part (a)**

**Step 1: Integrate the differential equation**
$$H = \int -0.12\mathrm{e}^{-0.2t} \, \mathrm{d}t = \frac{-0.12}{-0.2}\mathrm{e}^{-0.2t} + B = 0.6\mathrm{e}^{-0.2t} + B$$
- **[M1]** Integrates to obtain $H = k\mathrm{e}^{-0.2t} + B$.
- **[A1]** Correct coefficient $A = 0.6$.

**Step 2: Find constant $B$ using initial conditions**
At $t = 0, H = 1.5$:
$$1.5 = 0.6\mathrm{e}^0 + B \Rightarrow 1.5 = 0.6 + B \Rightarrow B = 0.9$$
- **[A1]** $A = 0.6$ and $B = 0.9$, so $H = 0.6\mathrm{e}^{-0.2t} + 0.9$.

#### **Part (b)**

**Step 3: Set $H = 1.2$ and solve for $t$**
$$1.2 = 0.6\mathrm{e}^{-0.2t} + 0.9 \Rightarrow 0.3 = 0.6\mathrm{e}^{-0.2t} \Rightarrow \mathrm{e}^{-0.2t} = 0.5$$
- **[M1]** Substitutes $H = 1.2$ into their equation for $H$ and rearranges to $\mathrm{e}^{-0.2t} = k$.

**Step 4: Take natural logarithms to solve for $t$**
$$-0.2t = \ln(0.5) \Rightarrow t = \frac{\ln(0.5)}{-0.2} = 5\ln(2) \approx 3.4657\text{ hours}$$
- **[M1]** Takes $\ln$ correctly to solve for $t$.

**Step 5: Convert to hours and minutes**
$$3\text{ hours } + 0.4657 \times 60\text{ minutes} \approx 3\text{ hours } 28\text{ minutes}$$
- **[A1]** $3$ hours $28$ minutes.

#### **Part (c)**

**Step 6: Determine height as $t \to \infty$**
As $t \to \infty$, $\mathrm{e}^{-0.2t} \to 0$, so $H \to 0.9\text{ m}$.
- **[M1]** Realises that height as $t \to \infty$ gives $H = B$.
- **[A1]** $0.9\text{ m}$.

---
topic: "Functions and Graphs"
subtopic: "Composite functions"
---
### **Question 8**

The functions $f$ and $g$ are defined by
$$f(x) = 4 - 3x^2 \quad x \in \mathbb{R}$$
$$g(x) = \frac{5}{2x - 9} \quad x \in \mathbb{R}, \, x \neq \frac{9}{2}$$

**(a)** Find $fg(2)$ **(2)**

**(b)** Find $g^{-1}$ **(3)**

**(c) (i)** Find $gf(x)$, giving your answer as a simplified fraction.
**(ii)** Deduce the range of $gf(x)$. **(3)**

The function $h$ is defined by
$$h(x) = 2x^2 - 6x + k \quad x \in \mathbb{R}$$
where $k$ is a constant.

**(d)** Find the range of values of $k$ for which the equation
$$f(x) = h(x)$$
has no real solutions. **(3)**

### **Mark Scheme 8**

#### **Part (a)**

**Step 1: Calculate $g(2)$ and substitute into $f$**
$$g(2) = \frac{5}{2(2) - 9} = -1$$
$$fg(2) = f(-1) = 4 - 3(-1)^2 = 1$$
- **[M1]** Substitutes $x = 2$ into $g(x)$ and then substitutes result into $f(x)$.
- **[A1]** $1$.

#### **Part (b)**

**Step 2: Rearrange $y = g(x)$ to make $x$ the subject**
$$y = \frac{5}{2x - 9} \Rightarrow y(2x - 9) = 5 \Rightarrow 2xy = 9y + 5 \Rightarrow x = \frac{9y + 5}{2y}$$
- **[M1]** Rearranges $y = \frac{5}{2x - 9}$ to make $x$ the subject.
- **[A1]** $x = \frac{9y + 5}{2y}$.

**Step 3: Write down inverse function**
$$g^{-1}(x) = \frac{9x + 5}{2x}$$
- **[A1]** $g^{-1}(x) = \frac{9x + 5}{2x}$.

#### **Part (c)**

**Step 4: Form $gf(x)$ and simplify**
$$gf(x) = g(4 - 3x^2) = \frac{5}{2(4 - 3x^2) - 9} = \frac{5}{8 - 6x^2 - 9} = -\frac{5}{6x^2 + 1}$$
- **[M1]** Substitutes $f(x)$ into $g(x)$ and simplifies the denominator.
- **[A1]** $-\frac{5}{6x^2 + 1}$.

**Step 5: Deduce range of $gf(x)$**
Since $x^2 \ge 0$, $6x^2 + 1 \ge 1 \Rightarrow 0 < \frac{5}{6x^2 + 1} \le 5 \Rightarrow -5 \le gf(x) < 0$.
- **[A1]** $-5 \le gf(x) < 0$.

#### **Part (d)**

**Step 6: Form quadratic equation $f(x) = h(x)$**
$$4 - 3x^2 = 2x^2 - 6x + k \Rightarrow 5x^2 - 6x + (k - 4) = 0$$
- **[M1]** Sets $f(x) = h(x)$ and forms a quadratic equation $Ax^2 + Bx + C = 0$.

**Step 7: Apply discriminant condition for no real solutions**
$$b^2 - 4ac < 0 \Rightarrow (-6)^2 - 4(5)(k - 4) < 0$$
- **[M1]** Sets $b^2 - 4ac < 0$.

**Step 8: Solve inequality for $k$**
$$36 - 20k + 80 < 0 \Rightarrow 116 < 20k \Rightarrow k > \frac{29}{5} \quad (k > 5.8)$$
- **[A1]** $k > \frac{29}{5}$ or $k > 5.8$.

---
topic: "Sequences and Series"
subtopic: "Geometric series"
---
### **Question 9**

The first 3 terms of a geometric sequence are
$$3^{4k-5} \quad 9^{7-2k} \quad 3^{2(k-1)}$$
where $k$ is a constant.

**(a)** Using algebra and making your reasoning clear, prove that $k = \frac{5}{2}$ **(3)**

**(b)** Hence find the sum to infinity of the geometric sequence. **(3)**

### **Mark Scheme 9**

#### **Part (a)**

**Step 1: Express terms with base 3**
$$u_1 = 3^{4k-5}, \quad u_2 = 9^{7-2k} = 3^{14-4k}, \quad u_3 = 3^{2k-2}$$
- **[M1]** Writes $9^{7-2k}$ as $3^{14-4k}$ or uses common ratio $\frac{u_2}{u_1} = \frac{u_3}{u_2}$.

**Step 2: Equate ratios using exponent rules**
$$\frac{u_2}{u_1} = \frac{u_3}{u_2} \Rightarrow (u_2)^2 = u_1 u_3 \Rightarrow 3^{28-8k} = 3^{(4k-5) + (2k-2)}$$
$$28 - 8k = 6k - 7$$
- **[M1]** Equates exponents to form linear equation in $k$.

**Step 3: Solve for $k$**
$$35 = 14k \Rightarrow k = \frac{5}{2}$$
- **[A1]** Fully clear proof leading to $k = \frac{5}{2}$.

#### **Part (b)**

**Step 4: Find first term $a$ and common ratio $r$**
When $k = \frac{5}{2}$:
$$a = u_1 = 3^{4(2.5) - 5} = 3^5 = 243$$
$$u_2 = 3^{14 - 4(2.5)} = 3^4 = 81 \Rightarrow r = \frac{81}{243} = \frac{1}{3}$$
- **[M1]** Calculates numerical values of $a$ and $r$.
- **[A1]** $a = 243$ and $r = \frac{1}{3}$.

**Step 5: Calculate sum to infinity**
$$S_\infty = \frac{a}{1 - r} = \frac{243}{1 - \frac{1}{3}} = \frac{729}{2} = 364.5$$
- **[A1]** $\frac{729}{2}$ or $364.5$.

---
topic: "Integration"
subtopic: "Areas between curves and lines"
---
### **Question 10**

**Figure 3** shows a sketch of part of the curve with equation
$$y = 8x - x^{\frac{5}{2}} \quad x \ge 0$$

The curve crosses the $x$-axis at the point $A$.

**(a)** Verify that the $x$ coordinate of $A$ is 4 **(1)**

The line $l_1$ is the tangent to the curve at $A$.

**(b)** Use calculus to show that an equation of line $l_1$ is
$$12x + y = 48$$ **(3)**

The line $l_2$ has equation $y = 8x$

The region $R$, shown shaded in **Figure 3**, is bounded by the curve, the line $l_1$ and the line $l_2$

**(c)** Use algebraic integration to find the exact area of $R$. **(5)**

### **Mark Scheme 10**

#### **Part (a)**

**Step 1: Substitute $x = 4$ into curve equation**
$$y = 8(4) - (4)^{\frac{5}{2}} = 32 - 32 = 0$$
- **[B1]** Shows $8(4) - 4^{2.5} = 32 - 32 = 0$.

#### **Part (b)**

**Step 2: Differentiate curve equation**
$$\frac{\mathrm{d}y}{\mathrm{d}x} = 8 - \frac{5}{2}x^{\frac{3}{2}}$$
- **[M1]** Differentiates $x^{\frac{5}{2}}$ to get $k x^{\frac{3}{2}}$.

**Step 3: Evaluate gradient at $x = 4$**
$$m = 8 - \frac{5}{2}(4)^{\frac{3}{2}} = 8 - 20 = -12$$
- **[M1]** Evaluates derivative at $x = 4$.

**Step 4: Find line equation**
$$y - 0 = -12(x - 4) \Rightarrow y = -12x + 48 \Rightarrow 12x + y = 48$$
- **[A1]** Correctly shows required equation $12x + y = 48$.

#### **Part (c)**

**Step 5: Find point of intersection of $l_1$ and $l_2$**
$$8x = 48 - 12x \Rightarrow 20x = 48 \Rightarrow x = 2.4$$
- **[M1]** Solves $8x = 48 - 12x$ to find $x = 2.4$.

**Step 6: Calculate area under the linear boundary lines**
The triangle formed by $(0,0)$, $(2.4, 19.2)$, and $(4,0)$ has area:
$$\text{Area}_{\text{triangle}} = \frac{1}{2} \times 4 \times 19.2 = 38.4$$
- **[M1]** Calculates total area under lines boundary ($38.4$).

**Step 7: Integrate curve equation from $0$ to $4$**
$$\int_0^4 (8x - x^{\frac{5}{2}}) \, \mathrm{d}x = \left[ 4x^2 - \frac{2}{7}x^{\frac{7}{2}} \right]_0^4$$
- **[M1]** Integrates $x^{\frac{5}{2}}$ to obtain $\frac{2}{7}x^{\frac{7}{2}}$.

**Step 8: Evaluate integral at limits**
$$\left( 4(4)^2 - \frac{2}{7}(4)^{\frac{7}{2}} \right) - 0 = 64 - \frac{256}{7} = \frac{192}{7}$$
- **[A1]** Area under curve $= \frac{192}{7}$.

**Step 9: Calculate Area $R$**
$$\text{Area } R = 38.4 - \frac{192}{7} = \frac{192}{5} - \frac{192}{7} = \frac{384}{35}$$
- **[A1]** Exact area $\frac{384}{35}$.

---
topic: "Radians"
subtopic: "Areas of sectors and segments"
---
### **Question 11**

**Figure 4** shows the design of a badge.
The shape $ABCOA$ is a semicircle with centre $O$ and diameter $10\text{ cm}$.
$OB$ is the arc of a circle with centre $A$ and radius $5\text{ cm}$.
The region $R$, shown shaded in **Figure 4**, is bounded by the arc $OB$, the arc $BC$ and the line $OC$.

Find the exact area of $R$.
Give your answer in the form $(a\sqrt{3} + b\pi)\text{ cm}^2$, where $a$ and $b$ are rational numbers. **(4)**

### **Mark Scheme 11**

**Step 1: Identify geometric angles**
$\triangle AOB$ is equilateral with side length $5\text{ cm}$, so $\angle AOB = \frac{\pi}{3}$ and $\angle BOC = \pi - \frac{\pi}{3} = \frac{2\pi}{3}$.
- **[M1]** Identifies $\triangle AOB$ is equilateral or angle $\angle BOC = \frac{2\pi}{3}$ / angle $\angle OAB = \frac{\pi}{3}$.

**Step 2: Calculate area of sector $BOC$**
$$\text{Area}_{\text{sector } BOC} = \frac{1}{2} (5)^2 \left(\frac{2\pi}{3}\right) = \frac{25\pi}{3}$$
- **[B1]** Area of sector $BOC = \frac{25\pi}{3}$.

**Step 3: Calculate area of segment on chord $OB$ (circle centre $A$)**
$$\text{Area}_{\text{segment } OB} = \text{Area}_{\text{sector } AOB} - \text{Area}_{\triangle AOB} = \frac{1}{2}(5)^2\left(\frac{\pi}{3}\right) - \frac{1}{2}(5)^2\sin\left(\frac{\pi}{3}\right) = \frac{25\pi}{6} - \frac{25\sqrt{3}}{4}$$
- **[M1]** Uses sector area minus triangle area formula to find segment area.

**Step 4: Subtract segment area from sector $BOC$ area**
$$\text{Area } R = \frac{25\pi}{3} - \left(\frac{25\pi}{6} - \frac{25\sqrt{3}}{4}\right) = \frac{25\sqrt{3}}{4} + \frac{25\pi}{6}$$
- **[A1]** Correct exact area $\frac{25\sqrt{3}}{4} + \frac{25\pi}{6}$ (i.e. $a = \frac{25}{4}, b = \frac{25}{6}$).

---
topic: "Trigonometry and Modelling"
subtopic: "Simplifying a cos x ± b sin x"
---
### **Question 12**

**(a)** Express $140\cos\theta - 480\sin\theta$ in the form $K\cos(\theta + \alpha)$
where $K > 0$ and $0 < \alpha < 90^\circ$
State the value of $K$ and give the value of $\alpha$, in degrees, to 2 decimal places. **(3)**

A scientist studies the number of rabbits and the number of foxes in a wood for one year.
The number of rabbits, $R$, is modelled by the equation
$$R = A + 140\cos(30t)^\circ - 480\sin(30t)^\circ$$
where $t$ months is the time after the start of the year and $A$ is a constant.
Given that, during the year, the maximum number of rabbits in the wood is 1500

**(b) (i)** find a complete equation for this model.
**(ii)** Hence write down the minimum number of rabbits in the wood during the year according to the model. **(2)**

The actual number of rabbits in the wood is at its minimum value in the middle of April.

**(c)** Use this information to comment on the model for the number of rabbits. **(2)**

The number of foxes, $F$, in the wood during the same year is modelled by the equation
$$F = 100 + 70\sin(30t + 70)^\circ$$
The number of foxes is at its minimum value after $T$ months.

**(d)** Find, according to the models, the number of rabbits in the wood at time $T$ months. **(4)**

### **Mark Scheme 12**

#### **Part (a)**

**Step 1: Expand and equate coefficients**
$K\cos\theta\cos\alpha - K\sin\theta\sin\alpha = 140\cos\theta - 480\sin\theta$
$$K\cos\alpha = 140, \quad K\sin\alpha = 480$$
- **[M1]** Equates coefficients to obtain $K\cos\alpha = 140$ and $K\sin\alpha = 480$.

**Step 2: Calculate $K$ and $\alpha$**
$$K = \sqrt{140^2 + 480^2} = 500$$
$$\tan\alpha = \frac{480}{140} = \frac{24}{7} \Rightarrow \alpha \approx 73.74^\circ$$
- **[A1]** $K = 500$.
- **[A1]** $\alpha \approx 73.74^\circ$.

#### **Part (b)**

**Step 3: Determine $A$ and form equation**
$R = A + 500\cos(30t + 73.74)^\circ$. Maximum $R = A + 500 = 1500 \Rightarrow A = 1000$.
Complete equation: $R = 1000 + 500\cos(30t + 73.74)^\circ$
- **[B1]** $A = 1000$ and gives a complete equation.

**Step 4: Find minimum value**
Minimum $R = 1000 - 500 = 500$.
- **[B1]** Minimum number of rabbits $= 500$.

#### **Part (c)**

**Step 5: Compare model minimum time with mid-April**
Minimum $R$ occurs when $30t + 73.74 = 180 \Rightarrow 30t = 106.26 \Rightarrow t \approx 3.54$ months.
$t = 3.54$ corresponds to middle of April (since $t = 3.5$ is mid-April).
- **[M1]** Calculates $t$ for minimum $R$ ($t \approx 3.54$).
- **[A1]** Mentions that $3.54$ months is in mid-April, so the model is accurate.

#### **Part (d)**

**Step 6: Find $T$ when $F$ is minimum**
$\sin(30T + 70)^\circ = -1 \Rightarrow 30T + 70 = 270 \Rightarrow 30T = 200 \Rightarrow T = \frac{20}{3}$
- **[M1]** Sets $\sin(30T + 70)^\circ = -1$ and solves for $T$.
- **[A1]** $T = \frac{20}{3}$ (or $6.67$).

**Step 7: Calculate $R$ at time $T$**
$$R = 1000 + 500\cos\left(30\left(\frac{20}{3}\right) + 73.74\right)^\circ = 1000 + 500\cos(273.74^\circ) \approx 1033$$
- **[M1]** Substitutes $T$ into rabbit equation.
- **[A1]** 1033 (accept 1032 to 1034).

---
topic: "Integration"
subtopic: "Integration by substitution"
---
### **Question 13**

**(a)** Given that $a$ is a positive constant, use the substitution $x = a\sin^2\theta$ to show that
$$\int_{0}^{a} x^{\frac{1}{2}} \sqrt{a - x} \, \mathrm{d}x = \frac{1}{2}a^2 \int_{0}^{\frac{\pi}{2}} \sin^2 2\theta \, \mathrm{d}\theta$$ **(4)**

**(b)** Hence use algebraic integration to show that
$$\int_{0}^{a} x^{\frac{1}{2}} \sqrt{a - x} \, \mathrm{d}x = k\pi a^2$$
where $k$ is a constant to be found. **(4)**

### **Mark Scheme 13**

#### **Part (a)**

**Step 1: Find derivative $\frac{\mathrm{d}x}{\mathrm{d}\theta}$**
$$\mathrm{d}x = 2a\sin\theta\cos\theta \, \mathrm{d}\theta$$
- **[B1]** Correct expression for $\mathrm{d}x$.

**Step 2: Change limits**
When $x = 0$, $\theta = 0$. When $x = a$, $\sin^2\theta = 1 \Rightarrow \theta = \frac{\pi}{2}$.
- **[B1]** Correct limits $\theta = 0$ and $\theta = \frac{\pi}{2}$.

**Step 3: Substitute expressions into integral**
$$x^{\frac{1}{2}} = \sqrt{a}\sin\theta, \quad \sqrt{a - x} = \sqrt{a(1 - \sin^2\theta)} = \sqrt{a}\cos\theta$$
$$\int_{0}^{a} x^{\frac{1}{2}} \sqrt{a - x} \, \mathrm{d}x = \int_{0}^{\frac{\pi}{2}} (\sqrt{a}\sin\theta)(\sqrt{a}\cos\theta)(2a\sin\theta\cos\theta) \, \mathrm{d}\theta = 2a^2 \int_{0}^{\frac{\pi}{2}} \sin^2\theta\cos^2\theta \, \mathrm{d}\theta$$
- **[M1]** Complete substitution into integral.

**Step 4: Apply double angle identity**
Since $\sin\theta\cos\theta = \frac{1}{2}\sin 2\theta$:
$$2a^2 \int_{0}^{\frac{\pi}{2}} \left(\frac{1}{2}\sin 2\theta\right)^2 \, \mathrm{d}\theta = \frac{1}{2}a^2 \int_{0}^{\frac{\pi}{2}} \sin^2 2\theta \, \mathrm{d}\theta$$
- **[A1]** Fully correct proof with no steps missing.

#### **Part (b)**

**Step 5: Rewrite $\sin^2 2\theta$ using double angle formula**
$$\sin^2 2\theta = \frac{1 - \cos 4\theta}{2}$$
- **[M1]** Rewrites $\sin^2 2\theta$ as $\frac{1 - \cos 4\theta}{2}$.

**Step 6: Integrate**
$$\int_{0}^{\frac{\pi}{2}} \frac{1 - \cos 4\theta}{2} \, \mathrm{d}\theta = \left[ \frac{\theta}{2} - \frac{\sin 4\theta}{8} \right]_0^{\frac{\pi}{2}}$$
- **[M1]** Integrates to get $\left[ \frac{\theta}{2} - \frac{\sin 4\theta}{8} \right]$.

**Step 7: Evaluate limits**
$$\left( \frac{\pi}{4} - 0 \right) - 0 = \frac{\pi}{4}$$
- **[M1]** Correct evaluation at limits.

**Step 8: Complete product to find $k$**
$$\frac{1}{2}a^2 \left(\frac{\pi}{4}\right) = \frac{1}{8}\pi a^2 \Rightarrow k = \frac{1}{8}$$
- **[A1]** $k = \frac{1}{8}$.

---
topic: "Integration"
subtopic: "Modelling with differential equations"
---
### **Question 14**

A balloon is being inflated.
In a simple model,
- the balloon is modelled as a sphere
- the rate of increase of the radius of the balloon is inversely proportional to the square root of the radius of the balloon

At time $t$ seconds, the radius of the balloon is $r\text{ cm}$.

**(a)** Write down a differential equation to model this situation. **(1)**

At the instant when $t = 10$
- the radius is $16\text{ cm}$
- the radius is increasing at a rate of $0.9\text{ cm s}^{-1}$

**(b)** Solve the differential equation to show that
$$r^{\frac{3}{2}} = 5.4t + 10$$ **(5)**

**(c)** Hence find the radius of the balloon when $t = 20$
Give your answer to the nearest millimetre. **(2)**

**(d)** Suggest a limitation of the model. **(1)**

### **Mark Scheme 14**

#### **Part (a)**

**Step 1: Write differential equation**
$$\frac{\mathrm{d}r}{\mathrm{d}t} = \frac{k}{\sqrt{r}}$$
- **[B1]** $\frac{\mathrm{d}r}{\mathrm{d}t} = \frac{k}{\sqrt{r}}$ (or $k r^{-\frac{1}{2}}$).

#### **Part (b)**

**Step 2: Find constant $k$**
At $t = 10, r = 16, \frac{\mathrm{d}r}{\mathrm{d}t} = 0.9$:
$$0.9 = \frac{k}{\sqrt{16}} \Rightarrow k = 3.6$$
- **[M1]** Substitutes values to find $k = 3.6$.

**Step 3: Separate variables and integrate**
$$\int r^{\frac{1}{2}} \, \mathrm{d}r = \int 3.6 \, \mathrm{d}t \Rightarrow \frac{2}{3}r^{\frac{3}{2}} = 3.6t + c$$
- **[M1]** Separates variables and integrates $r^{\frac{1}{2}}$.
- **[A1]** Correct integral equation $\frac{2}{3}r^{\frac{3}{2}} = 3.6t + c$.

**Step 4: Find constant $c$**
At $t = 10, r = 16$:
$$\frac{2}{3}(16)^{\frac{3}{2}} = 3.6(10) + c \Rightarrow \frac{128}{3} = 36 + c \Rightarrow c = \frac{20}{3}$$
- **[M1]** Uses initial condition to find $c$.

**Step 5: Rearrange to required form**
$$\frac{2}{3}r^{\frac{3}{2}} = 3.6t + \frac{20}{3} \Rightarrow r^{\frac{3}{2}} = 5.4t + 10$$
- **[A1]** Correctly shows $r^{\frac{3}{2}} = 5.4t + 10$.

#### **Part (c)**

**Step 6: Calculate $r$ at $t = 20$**
$$r^{\frac{3}{2}} = 5.4(20) + 10 = 118 \Rightarrow r = (118)^{\frac{2}{3}} \approx 24.057\text{ cm} = 241\text{ mm}$$
- **[M1]** Substitutes $t = 20$ into equation and solves for $r$.
- **[A1]** $241\text{ mm}$ (or $24.1\text{ cm}$).

#### **Part (d)**

**Step 7: State a limitation**
As $t$ increases, $r$ continues to increase without bound, so the balloon will eventually burst.
- **[B1]** Gives a valid limitation e.g. "The balloon will eventually pop", "Inflation cannot continue indefinitely", or "Balloons are not perfect spheres".

---
topic: "Algebraic Methods"
subtopic: "Proof by contradiction"
---
### **Question 15**

**(i)** Show that $k^2 - 4k + 5$ is positive for all real values of $k$. **(2)**

**(ii)** A student was asked to prove by contradiction that
"There are no positive integers $x$ and $y$ such that $(3x + 2y)(2x - 5y) = 28$"

The start of the student's proof is shown below.

> Assume that positive integers $x$ and $y$ exist such that
> $$(3x + 2y)(2x - 5y) = 28$$
> If $3x + 2y = 14$ and $2x - 5y = 2$
> $$\begin{cases} 3x + 2y = 14 \\ 2x - 5y = 2 \end{cases} \Rightarrow x = \frac{74}{19}, \, y = \frac{22}{19} \quad \text{Not integers}$$

Show the calculations and statements needed to complete the proof. **(4)**

### **Mark Scheme 15**

#### **Part (i)**

**Step 1: Complete the square**
$$k^2 - 4k + 5 = (k - 2)^2 + 1$$
- **[M1]** Completes the square e.g., $(k - 2)^2 + 1$, or uses discriminant $b^2 - 4ac = -4 < 0$.

**Step 2: Conclude positivity**
Since $(k - 2)^2 \ge 0$ for all real $k$, $(k - 2)^2 + 1 \ge 1 > 0$. Therefore $k^2 - 4k + 5 > 0$ for all real $k$.
- **[A1]** Completes logic clearly.

#### **Part (ii)**

**Step 3: List all relevant factor pairs of 28**
Since $x, y$ are positive integers, $3x + 2y > 2x - 5y$ and $3x + 2y \ge 5$.
The remaining positive integer factor pairs $(3x + 2y, 2x - 5y)$ of 28 are $(28, 1)$ and $(7, 4)$.
- **[M1]** Identifies all other factor pairs $(28, 1)$ and $(7, 4)$.

**Step 4: Solve system for factor pair $(28, 1)$**
$$\begin{cases} 3x + 2y = 28 \\ 2x - 5y = 1 \end{cases} \Rightarrow 19x = 142 \Rightarrow x = \frac{142}{19}, \, y = \frac{53}{19}$$
- **[M1]** Solves the system $3x + 2y = 28, 2x - 5y = 1$ to get non-integer values.

**Step 5: Solve system for factor pair $(7, 4)$**
$$\begin{cases} 3x + 2y = 7 \\ 2x - 5y = 4 \end{cases} \Rightarrow 19x = 43 \Rightarrow x = \frac{43}{19}, \, y = \frac{2}{19}$$
- **[M1]** Solves the system $3x + 2y = 7, 2x - 5y = 4$ to get non-integer values.

**Step 6: Complete contradiction proof**
In all cases $x$ and $y$ are not integers, contradicting the assumption that positive integer solutions exist. Hence there are no positive integers $x$ and $y$ such that $(3x + 2y)(2x - 5y) = 28$.
- **[A1]** Gives a complete argument demonstrating contradiction for all possible factor pairs.
