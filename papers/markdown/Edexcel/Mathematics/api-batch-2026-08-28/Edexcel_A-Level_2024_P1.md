---
topic: "Algebraic Methods"
subtopic: "The factor theorem"
---
### **Question 1**

$$g(x) = 3x^3 - 20x^2 + (k + 17)x + k$$

where $k$ is a constant.

Given that $(x - 3)$ is a factor of $\text{g}(x)$, find the value of $k$. **(3)**

**(Total for Question 1 is 3 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Use the factor theorem**
$$3(3)^3 - 20(3)^2 + (k + 17)(3) + k = 0$$
- **[M1]** Substitutes $x = 3$ into $\text{g}(x)$ and sets equal to 0.

**Step 2: Simplify and solve for $k$**
$$81 - 180 + 3k + 51 + k = 0$$
$$4k - 48 = 0$$
$$k = 12$$
- **[A1]** Correct equation leading to $k = 12$.
- **[A1]** $k = 12$

### **Examiner Report 1**

This question was very accessible, familiar to candidates and of low demand, making it particularly suitable for the opening question of the paper. Candidates were required to determine the value of a constant, $k$, in a cubic expression, $\text{g}(x)$, given that $(x - 3)$ was a factor of this expression. The vast majority of candidates found this question straightforward and clearly understood that they should apply the factor theorem to the question, determining the value of $k$ via a linear equation in $k$ that followed from $\text{g}(3) = 0$. A small proportion of candidates made errors in setting up the linear equation, or in attempting to solve their linear equation, however method marks were available in these instances.

---
topic: "Binomial Expansion"
subtopic: "Expanding (a + bx)^n"
---
### **Question 2**

**(a)** Find, in ascending powers of $x$, the first four terms of the binomial expansion of
$$(1 - 9x)^{\frac{1}{2}}$$
giving each term in simplest form. **(3)**

**(b)** Give a reason why $x = -\frac{2}{9}$ should not be used in the expansion to find an approximation to $\sqrt{3}$. **(1)**

**(Total for Question 2 is 4 marks)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Set up the binomial expansion formula**
$$1 + \left(\frac{1}{2}\right)(-9x) + \frac{\left(\frac{1}{2}\right)\left(-\frac{1}{2}\right)}{2!}(-9x)^2 + \frac{\left(\frac{1}{2}\right)\left(-\frac{1}{2}\right)\left(-\frac{3}{2}\right)}{3!}(-9x)^3$$
- **[M1]** Correct structure for the second, third, or fourth term (binomial coefficients with correct powers of $-9x$).

**Step 2: Simplify each term**
$$= 1 - \frac{9}{2}x - \frac{81}{8}x^2 - \frac{729}{16}x^3$$
- **[A1]** Any two simplified terms correct.
- **[A1]** All four terms correct and simplified.

#### **Part (b)**

**Step 3: State the reason for validity**
$$|x| < \frac{1}{9} \text{ and } \left|-\frac{2}{9}\right| \text{ is not } < \frac{1}{9} \quad \text{(or outside the range of validity)}$$
- **[B1]** Gives a correct reason (e.g., it is outside the range of validity, or $|-2/9| \ngtr \frac{1}{9}$ or similar correct mathematical justification).

### **Examiner Report 2**

This was another question that was familiar to candidates, providing excellent access, with plenty of candidates scoring full marks and many more scoring 3 marks out of the available 4. In part (a), the presentation of the binomial structure was generally very good. Inconsistency with brackets or lack of attention to detail were the main reasons why candidates who started correctly dropped accuracy marks. Part (b) proved to be more challenging. Candidates who stated an acceptable range of validity were usually able to compare this to $-\frac{2}{9}$ and correctly conclude that the expansion was not valid. However, there were also incomplete attempts where the range of validity was found without a correct comparison or conclusion.

---
topic: "Numerical Methods"
subtopic: "The Newton-Raphson method"
---
### **Question 3**

$$\text{f}(x) = x + \tan\left(\frac{1}{2}x\right) \quad \pi < x < \frac{3\pi}{2}$$

Given that the equation $\text{f}(x) = 0$ has a single root $\alpha$

**(a)** show that $\alpha$ lies in the interval $[3.6, 3.7]$. **(2)**

**(b)** Find $\text{f}'(x)$. **(2)**

**(c)** Using $3.7$ as a first approximation for $\alpha$, apply the Newton–Raphson method once to obtain a second approximation for $\alpha$. Give your answer to 3 decimal places. **(2)**

**(Total for Question 3 is 6 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Evaluate $\text{f}(x)$ at interval endpoints (in radians)**
$$\text{f}(3.6) = 3.6 + \tan(1.8) = -0.322...$$
$$\text{f}(3.7) = 3.7 + \tan(1.85) = +0.334...$$
- **[M1]** Evaluates $\text{f}(3.6)$ and $\text{f}(3.7)$ correctly (to at least 1 sig fig giving opposite signs) with angle in radians.

**Step 2: Conclude the result**
- **[A1]** Change of sign, continuous function in interval, hence root lies between $3.6$ and $3.7$.

#### **Part (b)**

**Step 3: Differentiate $\text{f}(x)$**
$$\text{f}'(x) = 1 + \frac{1}{2}\sec^2\left(\frac{1}{2}x\right)$$
- **[M1]** Differentiates $\tan(kx)$ to $\sec^2(kx)$ with correct use of the chain rule.
- **[A1]** Fully correct derivative $\text{f}'(x) = 1 + \frac{1}{2}\sec^2\left(\frac{1}{2}x\right)$.

#### **Part (c)**

**Step 4: Apply Newton-Raphson formula**
$$x_1 = 3.7 - \frac{3.7 + \tan(1.85)}{1 + \frac{1}{2}\sec^2(1.85)}$$
- **[M1]** Correct formula substitution using their $\text{f}(3.7)$ and $\text{f}'(3.7)$.
$$x_1 = 3.7 - \frac{0.33403...}{1.73463...} = 3.7 - 0.19256... = 3.507...$$
- **[A1]** $3.507$

### **Examiner Report 3**

Many candidates were successful across all parts of this question demonstrating a good understanding of the Newton-Raphson method. In part (a), almost all candidates made good progress, able to find the values of $\text{f}(3.6)$ and $\text{f}(3.7)$ correctly and observe a sign change. A conclusion was required for the accuracy mark and had to include a reference to a sign change, continuity of the function, and an indication of a root lying in the interval. The differentiation in part (b) was generally well attempted. In part (c), difficulty evaluating $\sec^2(3.7/2)$ led to the accuracy mark being lost by some, and candidates are encouraged to show their explicit substitution into the Newton-Raphson formula rather than just writing the final number.

---
topic: "Differentiation"
subtopic: "Finding the derivative"
---
### **Question 4**

Given that $y = x^2$, use differentiation from first principles to show that $\frac{\text{d}y}{\text{d}x} = 2x$. **(3)**

**(Total for Question 4 is 3 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Form the difference quotient**
$$\frac{\text{d}y}{\text{d}x} = \lim_{h \to 0} \frac{(x + h)^2 - x^2}{h}$$
- **[B1]** Correct expression for the gradient of the chord $\frac{(x + h)^2 - x^2}{h}$ or equivalent.

**Step 2: Expand the numerator**
$$= \lim_{h \to 0} \frac{x^2 + 2xh + h^2 - x^2}{h} = \lim_{h \to 0} \frac{2xh + h^2}{h}$$
- **[M1]** Correct expansion of $(x+h)^2$ and attempt to simplify the fraction by cancelling $h$.

**Step 3: Take the limit as $h \to 0$**
$$= \lim_{h \to 0} (2x + h) = 2x$$
- **[A1]** Fully correct proof with proper limit notation leading to $2x$.

### **Examiner Report 4**

This question was very similar to previous differentiation from first principles questions and many candidates scored full marks, being much better prepared. Most candidates used $\frac{\text{f}(x+h) - \text{f}(x)}{h}$ to find the gradient of the chord. Slips when expanding $(x+h)^2$ were condoned for the method mark, but the $-x^2$ was required. Common errors included incorrectly simplifying the fraction, failure to cancel $h$ correctly, or an incomplete limiting argument. A significant minority of candidates failed to include $\frac{\text{d}y}{\text{d}x} = $ anywhere in their answer despite being asked to show $\frac{\text{d}y}{\text{d}x} = 2x$, thereby losing the final mark.

---
topic: "Differentiation"
subtopic: "Increasing and decreasing functions"
---
### **Question 5**

The function $\text{f}$ is defined by
$$\text{f}(x) = \frac{2x - 3}{x^2 + 4} \quad x \in \mathbb{R}$$

**(a)** Show that
$$\text{f}'(x) = \frac{ax^2 + bx + c}{(x^2 + 4)^2}$$
where $a$, $b$ and $c$ are constants to be found. **(3)**

**(b)** Hence, using algebra, find the values of $x$ for which $\text{f}$ is decreasing. You must show each step in your working. **(3)**

**(Total for Question 5 is 6 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Use the quotient rule**
$$\text{f}'(x) = \frac{(x^2 + 4)(2) - (2x - 3)(2x)}{(x^2 + 4)^2}$$
- **[M1]** Correct application of the quotient rule (numerator differentiation or denominator squared correctly).

**Step 2: Expand and simplify the numerator**
$$= \frac{2x^2 + 8 - (4x^2 - 6x)}{(x^2 + 4)^2} = \frac{-2x^2 + 6x + 8}{(x^2 + 4)^2}$$
- **[A1]** Correct unsimplified numerator expression.
- **[A1]** Correct values found: $a = -2, b = 6, c = 8$ (must have $\text{f}'(x) = ...$ stated correctly).

#### **Part (b)**

**Step 2: Set up inequality for decreasing function**
$$\text{f}'(x) < 0 \Rightarrow \frac{-2x^2 + 6x + 8}{(x^2 + 4)^2} < 0$$
- **[M1]** Sets their derivative $< 0$.

**Step 3: Solve the quadratic inequality**
$$-2x^2 + 6x + 8 < 0 \Rightarrow x^2 - 3x - 4 > 0 \Rightarrow (x - 4)(x + 1) > 0$$
Critical values: $x = -1, x = 4$
- **[M1]** Finds the critical values by solving $-2x^2 + 6x + 8 = 0$.

**Step 4: State final region**
$$x < -1 \text{ or } x > 4$$
- **[A1]** Correct region stated using proper inequality notation or 'or'.

### **Examiner Report 5**

Most candidates attempted the differentiation in part (a) via the quotient rule and this was generally correctly applied. A significant number of candidates lost the final accuracy mark due to either a sign error from expanding brackets or missing the $\text{f}'(x) = $ requirement. In part (b), candidates generally recognised the need to set $\text{f}'(x) < 0$, but not all observed the demand to use algebra, with some relying solely on calculators. Common errors included selecting the wrong region (e.g. $-1 < x < 4$) by failing to account for the negative coefficient of $x^2$, or writing commas instead of 'or'.

---
topic: "Functions and Graphs"
subtopic: "The modulus function"
---
### **Question 6**

**Figure 1** _(A sketch of the graph $y = 3|x - 2| + 5$, showing its vertex at point P)._

```tikz
\begin{tikzpicture}[scale=0.9]
  \draw[->] (-1,0) -- (5,0) node[below] {$x$};
  \draw[->] (2,0) -- (2,7) node[left] {$y$};
  \draw[domain=0.3:3.7, smooth, thick] plot (\x, {3*abs(\x-2) + 5});
  \fill (2,5) circle (1.6pt) node[below right] {$P$};
\end{tikzpicture}
```

Figure 1 shows a sketch of the graph with equation
$$y = 3|x - 2| + 5$$

The vertex of the graph is at the point $P$, shown in Figure 1.

**(a)** Find the coordinates of $P$. **(2)**

**(b)** Solve the equation
$$16 - 4x = 3|x - 2| + 5$$ **(2)**

A line $l$ has equation $y = kx + 4$ where $k$ is a constant.

Given that $l$ intersects $y = 3|x - 2| + 5$ at 2 distinct points,

**(c)** find the range of values of $k$. **(2)**

**(Total for Question 6 is 6 marks)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Identify vertex coordinates**
$$x = 2, \quad y = 3(0) + 5 = 5 \Rightarrow P(2, 5)$$
- **[B1]** $x$-coordinate correct ($2$).
- **[B1]** $y$-coordinate correct ($5$).

#### **Part (b)**

**Step 2: Rearrange and split into cases**
$$11 - 4x = 3|x - 2|$$
Case 1 ($x \ge 2$): $11 - 4x = 3(x - 2) \Rightarrow 11 - 4x = 3x - 6 \Rightarrow 7x = 17 \Rightarrow x = \frac{17}{7}$
Case 2 ($x < 2$): $11 - 4x = -3(x - 2) \Rightarrow 11 - 4x = -3x + 6 \Rightarrow x = 5$ (reject as $5 \not< 2$)
- **[M1]** Removes modulus correctly for at least one branch and attempts to solve for $x$.
- **[A1]** $x = \frac{17}{7}$ only (with $5$ rejected or omitted).

#### **Part (c)**

**Step 3: Find critical values of $k$**
Passing through $P(2,5)$: $5 = 2k + 4 \Rightarrow k = 0.5$
Parallel to the right branch (gradient $3$): $k = 3$
- **[M1]** Identifies at least one critical value of $k$ ($0.5$ or $3$).

**Step 4: State range of $k$**
$$0.5 < k < 3$$
- **[A1]** Correct range $0.5 < k < 3$.

### **Examiner Report 6**

The overwhelming majority of candidates answered part (a) correctly, demonstrating a strong understanding that the minimum $y$-value occurs when $x - 2 = 0$. In part (b), the most common approach was to remove modulus signs and solve two equations, though many failed to reject the extraneous solution $x = 5$. Part (c) was found to be less accessible, with few candidates securing full marks for the range of $k$. Successful candidates used a visual approach involving gradients of the lines passing through the vertex and parallel to the branches, while many others resorted to complicated algebra without success.

---
topic: "Integration"
subtopic: "Modelling with differential equations"
---
### **Question 7**

**Figure 2** _(A sketch of a cylindrical tank of height $1.5\text{ m}$ containing water up to height $H\text{ m}$, with a leak point $L$ near the base)._

```tikz
\begin{tikzpicture}[scale=0.9]
  \draw (0,0) ellipse (1.5cm and 0.5cm);
  \draw (-1.5,0) -- (-1.5,-3);
  \draw (1.5,0) -- (1.5,-3);
  \draw[dashed] (-1.5,-3) arc (180:360:1.5cm and 0.5cm);
  \draw (-1.5,-3) arc (180:360:1.5cm and 0.5cm);
  \fill (-1.5,-1.5) circle (2pt) node[left] {$L$};
  \draw[<->] (2.2,-3) -- (2.2,0) node[midway, right] {$1.5\text{ m}$};
  \draw[<->] (-2.2,-3) -- (-2.2,-1.5) node[midway, left] {$H\text{ m}$};
\end{tikzpicture}
```

Figure 2 shows a cylindrical tank of height $1.5\text{ m}$. Initially the tank is full of water.

The water starts to leak from a small hole, at a point $L$, in the side of the tank.

While the tank is leaking, the depth, $H$ metres, of the water in the tank is modelled by the differential equation
$$\frac{\text{d}H}{\text{d}t} = -0.12\text{e}^{-0.2t}$$

where $t$ hours is the time after the leak starts.

Using the model,

**(a)** show that
$$H = A\text{e}^{-0.2t} + B$$

where $A$ and $B$ are constants to be found. **(3)**

**(b)** find the time taken for the depth of the water to decrease to $1.2\text{ m}$. Give your answer in hours and minutes, to the nearest minute. **(3)**

In the long term, the water level in the tank falls to the same height as the hole.

**(c)** Find, according to the model, the height of the hole from the bottom of the tank. **(2)**

**(Total for Question 7 is 8 marks)**

### **Mark Scheme 7**

#### **Part (a)**

**Step 1: Integrate the differential equation**
$$H = \int -0.12\text{e}^{-0.2t} \, \text{d}t = \frac{-0.12}{-0.2}\text{e}^{-0.2t} + C = 0.6\text{e}^{-0.2t} + C$$
- **[M1]** Integrates $\text{e}^{-0.2t}$ to give $k\text{e}^{-0.2t}$.

**Step 2: Use boundary conditions to find constants**
Initially full, so at $t = 0, H = 1.5$:
$$1.5 = 0.6\text{e}^{0} + C \Rightarrow C = 0.9$$
$$H = 0.6\text{e}^{-0.2t} + 0.9$$
- **[M1]** Uses $t = 0, H = 1.5$ to find the integration constant.
- **[A1]** Fully correct proof showing $A = 0.6, B = 0.9$.

#### **Part (b)**

**Step 3: Solve for $t$ when $H = 1.2$**
$$1.2 = 0.6\text{e}^{-0.2t} + 0.9 \Rightarrow 0.3 = 0.6\text{e}^{-0.2t} \Rightarrow \text{e}^{-0.2t} = 0.5$$
$$-0.2t = \ln(0.5) \Rightarrow t = -5\ln(0.5) = 3.4657\text{ hours}$$
- **[M1]** Substitutes $H = 1.2$ and rearranges to $\text{e}^{-0.2t} = k$.
- **[M1]** Solves for $t$ using logarithms.
$$0.4657 \times 60 \approx 28\text{ minutes} \Rightarrow 3\text{ hours } 28\text{ minutes}$$
- **[A1]** 3 hours 28 minutes.

#### **Part (c)**

**Step 4: Find long-term limit ($t \to \infty$)**
As $t \to \infty$, $\text{e}^{-0.2t} \to 0$, so $H \to 0.9$.
- **[M1]** Considers the limit as $t \to \infty$ or sets $\frac{\text{d}H}{\text{d}t} = 0$.
- **[A1]** $0.9\text{ m}$ (or $90\text{ cm}$).

### **Examiner Report 7**

Most candidates recognised the need to integrate the exponential function in part (a). A significant minority multiplied by $-0.2$ instead of dividing, but the presence of the answer allowed many to recover in subsequent parts. In part (b), candidates generally performed well, though some lost the final accuracy mark due to errors converting decimals into hours and minutes. In part (c), many failed to understand what was being asked, with some attempting to solve $\frac{\text{d}H}{\text{d}t} = 0$ or giving answers higher than the maximum height, forgetting to find the limiting value of $H$ as $t \to \infty$.

---
topic: "Functions and Graphs"
subtopic: "Composite functions"
---
### **Question 8**

The functions $\text{f}$ and $\text{g}$ are defined by
$$\text{f}(x) = 4 - 3x^2 \quad x \in \mathbb{R}$$
$$\text{g}(x) = \frac{5}{2x - 9} \quad x \in \mathbb{R}, \, x \neq \frac{9}{2}$$

**(a)** Find $\text{fg}(2)$. **(2)**

**(b)** Find $\text{g}^{-1}(x)$. **(3)**

**(c)** **(i)** Find $\text{gf}(x)$, giving your answer as a simplified fraction.
**(ii)** Deduce the range of $\text{gf}(x)$. **(3)**

The function $\text{h}$ is defined by
$$\text{h}(x) = 2x^2 - 6x + k \quad x \in \mathbb{R}$$

where $k$ is a constant.

**(d)** Find the range of values of $k$ for which the equation
$$\text{f}(x) = \text{h}(x)$$
has no real solutions. **(3)**

**(Total for Question 8 is 11 marks)**

### **Mark Scheme 8**

#### **Part (a)**

**Step 1: Evaluate inner function then outer function**
$$\text{g}(2) = \frac{5}{2(2) - 9} = \frac{5}{-5} = -1$$
$$\text{fg}(2) = \text{f}(-1) = 4 - 3(-1)^2 = 1$$
- **[M1]** Attempts $\text{g}(2)$ and substitutes result into $\text{f}$.
- **[A1]** $1$

#### **Part (b)**

**Step 2: Find inverse of $\text{g}(x)$**
Let $y = \frac{5}{2x - 9} \Rightarrow y(2x - 9) = 5 \Rightarrow 2xy - 9y = 5 \Rightarrow 2xy = 5 + 9y \Rightarrow x = \frac{5 + 9y}{2y}$
$$\text{g}^{-1}(x) = \frac{5 + 9x}{2x}, \quad x \in \mathbb{R}, \, x \neq 0$$
- **[M1]** Starts process of finding inverse by swapping $x$ and $y$ and rearranging.
- **[A1]** Correct expression $\frac{5 + 9x}{2x}$.
- **[B1]** Correct domain stated: $x \in \mathbb{R}, x \neq 0$ (or equivalent).

#### **Part (c)**

**Step 3: Find composite function $\text{gf}(x)$**
$$\text{gf}(x) = \text{g}(4 - 3x^2) = \frac{5}{2(4 - 3x^2) - 9} = \frac{5}{8 - 6x^2 - 9} = \frac{5}{-6x^2 - 1} = -\frac{5}{6x^2 + 1}$$
- **[M1]** Substitutes $\text{f}(x)$ into $\text{g}(x)$.
- **[A1]** Correct simplified fraction $-\frac{5}{6x^2 + 1}$ (or $\frac{-5}{6x^2 + 1}$).

**Step 4: State range of $\text{gf}(x)$**
As $6x^2 + 1 \ge 1$, the maximum value is $-5$ when $x = 0$.
$$\text{Range}: -5 < \text{gf}(x) \le -5 \text{ (i.e. } -\frac{5}{6x^2 + 1} \le -5 \text{ or } -5 \le y < 0\text{)}$$
- **[B1]** Correct range stated (e.g. $-5 \le \text{gf}(x) < 0$).

#### **Part (d)**

**Step 5: Set up equation with no real solutions**
$$4 - 3x^2 = 2x^2 - 6x + k \Rightarrow 5x^2 - 6x + k - 4 = 0$$
- **[M1]** Equates $\text{f}(x) = \text{h}(x)$ and forms a 3-term quadratic equation.

**Step 6: Use discriminant for no real roots**
$$\Delta < 0 \Rightarrow (-6)^2 - 4(5)(k - 4) < 0$$
$$36 - 20k + 80 < 0 \Rightarrow 116 < 20k \Rightarrow k > \frac{116}{20} = \frac{29}{5} \text{ (or } 5.8\text{)}$$
- **[M1]** Uses $\Delta < 0$ on their quadratic.
- **[A1]** $k > \frac{29}{5}$ (or $5.8$).

### **Examiner Report 8**

This question was answered very well by the majority of candidates. In part (a) and (c)(i), most scored full marks. However, part (b) highlighted ongoing difficulties with stating the domain of inverse functions. In part (c)(ii), very few candidates secured the mark, often confusing domain and range or only giving one boundary. In part (d), most successfully formed the quadratic and used the discriminant, though some set $\Delta \ge 0$ or made arithmetic slips when expanding brackets.

---
topic: "Sequences and Series"
subtopic: "Geometric series"
---
### **Question 9**

The first 3 terms of a geometric sequence are
$$3^{4k - 5}, \quad 9^{7 - 2k}, \quad 3^{2(k - 1)}$$

where $k$ is a constant.

**(a)** Using algebra and making your reasoning clear, prove that $k = \frac{5}{2}$. **(3)**

**(b)** Hence find the sum to infinity of the geometric sequence. **(3)**

**(Total for Question 9 is 6 marks)**

### **Mark Scheme 9**

#### **Part (a)**

**Step 1: Set up the common ratio relationship**
$$\frac{u_2}{u_1} = \frac{u_3}{u_2} \quad \text{or} \quad u_2^2 = u_1 u_3$$
$$(9^{7 - 2k})^2 = 3^{4k - 5} \cdot 3^{2(k - 1)}$$
- **[M1]** Sets up a correct algebraic equation using the property of geometric sequences.

**Step 2: Express with base 3 and use index laws**
$$(3^{2(7 - 2k)})^2 = 3^{4k - 5 + 2k - 2} \Rightarrow 3^{28 - 8k} = 3^{6k - 7}$$
- **[M1]** Converts all terms to base 3 and applies index laws correctly.

**Step 3: Equate indices and solve for $k$**
$$28 - 8k = 6k - 7 \Rightarrow 35 = 14k \Rightarrow k = \frac{35}{14} = \frac{5}{2}$$
- **[A1]** Fully correct proof showing $k = \frac{5}{2}$.

#### **Part (b)**

**Step 4: Find the first term ($a$) and common ratio ($r$)**
$a = 3^{4\left(\frac{5}{2}\right) - 5} = 3^{10 - 5} = 3^5 = 243$
$r = \frac{9^{7 - 2\left(\frac{5}{2}\right)}}{3^5} = \frac{9^2}{243} = \frac{81}{243} = \frac{1}{3}$
- **[M1]** Substitutes $k = \frac{5}{2}$ to find $a$ and $r$.

**Step 5: Apply sum to infinity formula**
$$S_\infty = \frac{a}{1 - r} = \frac{243}{1 - \frac{1}{3}} = \frac{243}{\frac{2}{3}} = \frac{729}{2} = 364.5$$
- **[M1]** Uses the sum to infinity formula with their $a$ and $r$ (|r| < 1).
- **[A1]** $\frac{729}{2}$ (or $364.5$).

### **Examiner Report 9**

Part (a) was a discriminatory question. Many candidates struggled with index laws combined with a geometric sequence. The most successful approach was using $\frac{u_2}{u_1} = \frac{u_3}{u_2}$ or $u_2^2 = u_1u_3$ and changing bases to 3. The most common error was incorrect use of index laws (such as dividing indices instead of subtracting). Despite challenges in part (a), part (b) was very accessible, as the given answer allowed candidates to restart and find $a$, $r$, and $S_\infty$ successfully.

---
topic: "Integration"
subtopic: "Areas under curves"
---
### **Question 10**

**Figure 3** _(A sketch of the region $R$ bounded by the curve $y = 8x - x^{\frac{5}{2}}$, the tangent line $l_1$ at point $A$, and the line $l_2$ with equation $y = 8x$)._

```tikz
\begin{tikzpicture}[scale=0.9]
  \draw[->] (-1,0) -- (6,0) node[below] {$x$};
  \draw[->] (0,-1) -- (0,6) node[left] {$y$};
  \draw[domain=0:4.5, smooth, thick] plot (\x, {8*\x - (\x)^(5/2)});
  \node at (4,0) [below] {$A$};
  \node at (2,3) {$R$};
\end{tikzpicture}
```

In this question you must show all stages of your working. Solutions relying entirely on calculator technology are not acceptable.

Figure 3 shows a sketch of part of the curve with equation
$$y = 8x - x^{\frac{5}{2}} \quad x \ge 0$$

The curve crosses the $x$-axis at the point $A$.

**(a)** Verify that the $x$-coordinate of $A$ is $4$. **(1)**

The line $l_1$ is the tangent to the curve at $A$.

**(b)** Use calculus to show that an equation of line $l_1$ is
$$12x + y = 48$$ **(3)**

The line $l_2$ has equation $y = 8x$.

The region $R$, shown shaded in Figure 3, is bounded by the curve, the line $l_1$ and the line $l_2$.

**(c)** Use algebraic integration to find the exact area of $R$. **(5)**

**(Total for Question 10 is 9 marks)**

### **Mark Scheme 10**

#### **Part (a)**

**Step 1: Verify the $x$-coordinate**
Substitute $x = 4$ into $y = 8x - x^{\frac{5}{2}}$:
$$y = 8(4) - (4)^{\frac{5}{2}} = 32 - 32 = 0$$
Hence $A$ has $x$-coordinate $4$.
- **[B1]** Correct substitution and conclusion showing $y = 0$ when $x = 4$.

#### **Part (b)**

**Step 2: Differentiate to find gradient at $A$**
$$\frac{\text{d}y}{\text{d}x} = 8 - \frac{5}{2}x^{\frac{3}{2}}$$
At $x = 4$:
$$\left.\frac{\text{d}y}{\text{d}x}\right|_{x=4} = 8 - \frac{5}{2}(4)^{\frac{3}{2}} = 8 - \frac{5}{2}(8) = 8 - 20 = -12$$
- **[M1]** Differentiates correctly and substitutes $x = 4$ to find the gradient.

**Step 3: Find equation of tangent $l_1$**
$$y - 0 = -12(x - 4) \Rightarrow y = -12x + 48 \Rightarrow 12x + y = 48$$
- **[M1]** Uses straight-line equation with point $(4,0)$ and gradient $-12$.
- **[A1]** Fully correct proof leading to $12x + y = 48$.

#### **Part (c)**

**Step 4: Find intersection of $l_1$ and $l_2$**
$l_1: y = 48 - 12x$ and $l_2: y = 8x$:
$$48 - 12x = 8x \Rightarrow 20x = 48 \Rightarrow x = \frac{48}{20} = \frac{12}{5} \text{ (or } 2.4\text{)}$$
- **[B1]** Correct $x$-coordinate of intersection ($\frac{12}{5}$ or $2.4$).

**Step 5: Set up area integrals**
$$\text{Area} = \int_{0}^{\frac{12}{5}} 8x \, \text{d}x + \int_{\frac{12}{5}}^{4} (48 - 12x) \, \text{d}x - \int_{0}^{4} \left(8x - x^{\frac{5}{2}}\right) \text{d}x$$
$$\text{Area of triangle under lines} = \frac{1}{2} \times 4 \times \frac{96}{5} = \frac{192}{5} \text{ (or } 38.4\text{)}$$
- **[M1]** Strategy to find area using triangle/linear integration combined with curve integration.

**Step 6: Integrate the curve**
$$\int_{0}^{4} \left(8x - x^{\frac{5}{2}}\right) \text{d}x = \left[4x^2 - \frac{2}{7}x^{\frac{7}{2}}\right]_{0}^{4} = \left(4(16) - \frac{2}{7}(128)\right) = 64 - \frac{256}{7} = \frac{188}{7}$$
- **[M1]** Correct integration of the curve $8x - x^{\frac{5}{2}}$.

**Step 7: Calculate total exact area**
$$\text{Area} = \frac{192}{5} - \frac{188}{7} = \frac{1344 - 940}{35} = \frac{404}{35}$$
- **[A1]** Exact area $\frac{404}{35}$ (or $11.54$).

### **Examiner Report 10**

Part (a) and (b) were very well answered, with most candidates successfully verifying $x = 4$ and finding the tangent equation. Part (c) proved much more challenging and differentiated candidates. While most recognised the need to use integration for the curve, many struggled to find a complete and efficient strategy for the area of the triangular region formed by the lines. Common errors included using inappropriate geometric formulas or approximations, failing to use exact values, or omitting $\text{d}x$ and integration notation.

---
topic: "Radians"
subtopic: "Areas of sectors and segments"
---
### **Question 11**

**Figure 4** _(A sketch of a badge design where semicircle $ABCOA$ of diameter $10\text{ cm}$ intersects with a circular arc $OB$ of radius $5\text{ cm}$ centered at $A$, enclosing a shaded region $R$)._

```tikz
\begin{tikzpicture}[scale=0.9]
  \draw (0,0) arc (0:180:2.5cm);
  \draw (-2.5,0) -- (2.5,0);
  \draw (0,0) arc (0:60:5cm);
  \fill[gray!50] (0,0) -- (2.5,0) arc (0:60:5cm) -- cycle;
  \node at (0,-0.3) {$O$};
  \node at (-2.5,-0.3) {$A$};
  \node at (2.5,-0.3) {$C$};
  \node at (1.2,1.5) {$R$};
\end{tikzpicture}
```

Figure 4 shows the design of a badge.

The shape $ABCOA$ is a semicircle with centre $O$ and diameter $10\text{ cm}$.

$OB$ is the arc of a circle with centre $A$ and radius $5\text{ cm}$.

The region $R$, shown shaded in Figure 4, is bounded by the arc $OB$, the arc $BC$ and the line $OC$.

Find the exact area of $R$.

Give your answer in the form $(a\sqrt{3} + b\pi)\text{ cm}^2$, where $a$ and $b$ are rational numbers. **(4)**

**(Total for Question 11 is 4 marks)**

### **Mark Scheme 11**

#### **Part (a)**

**Step 1: Identify key geometric properties**
Triangle $AOB$ is equilateral with side length $5\text{ cm}$ (since $OA = AB = OB = 5$).
Angle $\angle OAB = \frac{\pi}{3}$ radians (or $60^\circ$).
Angle $\angle OAC = \pi$ radians, so angle $\angle BAC = \frac{2\pi}{3}$ radians.

**Step 2: Calculate area of sector $ABC$ or segment components**
Area of semicircle = $\frac{1}{2} \pi r^2 = \frac{1}{2} \pi (5)^2 = \frac{25}{2}\pi$
Area of sector $AOB$ (centre $A$, radius $5$, angle $\frac{\pi}{3}$) = $\frac{1}{2} r^2 \theta = \frac{1}{2}(5)^2\left(\frac{\pi}{3}\right) = \frac{25\pi}{6}$
- **[M1]** Recognises that triangle $AOB$ is equilateral or identifies angle $\frac{\pi}{3}$ / $\frac{2\pi}{3}$.

**Step 3: Formulate area of region $R$**
$\text{Area of } R = \text{Area of semicircle} - \text{Area of sector } AOB$
$$\text{Area} = \frac{25}{2}\pi - \frac{25}{6}\pi = \left(\frac{75 - 25}{6}\right)\pi = \frac{50\pi}{6} = \frac{25\pi}{3}$$
- **[M1]** Correct method to combine areas (semicircle minus sector $AOB$).
- **[A1]** Correct intermediate exact value $\frac{25\pi}{3}$.

**Step 4: Express in required form**
$$\text{Area} = 0\sqrt{3} + \frac{25}{3}\pi \quad \left(\text{or } 0\sqrt{3} + \frac{25\pi}{3}\right)$$
- **[A1]** Fully correct exact expression in required form.

### **Examiner Report 11**

Many candidates did not spot that triangle $AOB$ was an equilateral triangle, which would have immediately provided the angle $\frac{\pi}{3}$. Instead, a significant proportion engaged in lengthy work using Pythagoras and trigonometry. Many candidates who found an appropriate angle only progressed as far as finding a sector or triangle area without combining them correctly for the shaded region $R$. Sign errors when subtracting segment areas were also common.

---
topic: "Trigonometry and Modelling"
subtopic: "Simplifying a cos x ± b sin x"
---
### **Question 12**

**(a)** Express $140\cos\theta - 480\sin\theta$ in the form $K\cos(\theta + \alpha)$

where $K > 0$ and $0 < \alpha < 90^\circ$.

State the value of $K$ and give the value of $\alpha$, in degrees, to 2 decimal places. **(3)**

A scientist studies the number of rabbits and the number of foxes in a wood for one year.

The number of rabbits, $R$, is modelled by the equation
$$R = A + 140\cos(30t)^\circ - 480\sin(30t)^\circ$$

where $t$ months is the time after the start of the year and $A$ is a constant.

Given that, during the year, the maximum number of rabbits in the wood is $1500$

**(b)** **(i)** find a complete equation for this model.
**(ii)** Hence write down the minimum number of rabbits in the wood during the year according to the model. **(2)**

The actual number of rabbits in the wood is at its minimum value in the middle of April.

**(c)** Use this information to comment on the model for the number of rabbits. **(2)**

The number of foxes, $F$, in the wood during the same year is modelled by the equation
$$F = 100 + 70\sin(30t + 70)^\circ$$

The number of foxes is at its minimum value after $T$ months.

**(d)** Find, according to the models, the number of rabbits in the wood at time $T$ months. **(4)**

**(Total for Question 12 is 11 marks)**

### **Mark Scheme 12**

#### **Part (a)**

**Step 1: Find $K$**
$$K = \sqrt{140^2 + (-480)^2} = \sqrt{19600 + 230400} = \sqrt{250000} = 500$$
- **[B1]** $K = 500$

**Step 2: Find $\alpha$**
$$\tan\alpha = \frac{480}{140} \Rightarrow \alpha = \arctan\left(\frac{48}{14}\right) = 73.7397^\circ$$
- **[M1]** Uses $\tan\alpha = \frac{480}{140}$ or equivalent.
- **[A1]** $\alpha = 73.74^\circ$ (to 2 decimal places).

#### **Part (b)**

**Step 3: Find constant $A$ and minimum $R$**
Maximum $R = A + K = A + 500 = 1500 \Rightarrow A = 1000$
Complete equation: $R = 1000 + 500\cos(30t + 73.74)^\circ$
Minimum $R = A - K = 1000 - 500 = 500$
- **[B1]** Complete equation $R = 1000 + 500\cos(30t + 73.74)^\circ$ (or $A = 1000$).
- **[B1]** Minimum number of rabbits is $500$.

#### **Part (c)**

**Step 4: Interpret mid-April and comment on model**
Middle of April $\implies t = 3.5$.
Substitute $t = 3.5$ into model:
$$R = 1000 + 500\cos(30(3.5) + 73.74)^\circ = 1000 + 500\cos(178.74)^\circ \approx 1000 - 499.7 = 500$$
Minimum occurs when $\cos(30t + \alpha) = -1 \implies 30t + 73.74 = 180 \implies t = 3.54$ (mid-April).
Model predicts minimum in mid-April, which matches actual data $\implies$ model is reliable.
- **[M1]** Substitutes $t = 3.5$ (or finds $t$ for minimum $R$) and evaluates.
- **[A1]** Compares with $500$ and concludes the model is reliable / appropriate.

#### **Part (d)**

**Step 5: Find $T$ when foxes are at minimum**
Minimum of $F$ occurs when $\sin(30T + 70)^\circ = -1$:
$$30T + 70 = 270 \implies 30T = 200 \implies T = \frac{20}{3} = 6.666...\text{ months}$$
- **[M1]** Sets $\sin(30T + 70) = -1$ and solves for $T$.

**Step 6: Substitute $T$ into rabbit model**
$$R = 1000 + 500\cos\left(30\left(\frac{20}{3}\right) + 73.740^\circ\right) = 1000 + 500\cos(200 + 73.740)^\circ$$
$$= 1000 + 500\cos(273.740^\circ) = 1000 + 500(0.06526) = 1032.6$$
Using exact value: $R = 1000 + 500\cos\left(200^\circ + \arctan\left(\frac{48}{14}\right)\right) = 1032$ (or $1033$).
- **[M1]** Substitutes their $T$ into the rabbit model equation.
- **[A1]** Correct evaluation before rounding ($1032.6...$).
- **[A1]** $1032$ or $1033$ (must be rounded to an integer).

### **Examiner Report 12**

Part (a) was answered well, with most candidates correctly finding $K$ and $\alpha$. In part (b), many candidates failed to use their harmonic form from part (a), instead attempting simultaneous equations or omitting parts. In part (c), generous method marks were given for interpreting "middle of April" as $t$ in the range $3$ to $4.5$. Part (d) was accessible, though some candidates incorrectly set $\sin(30t + 70) = 1$ or $0$, or failed to round their final population answer to an integer.

---
topic: "Integration"
subtopic: "Integration by substitution"
---
### **Question 13**

**(a)** Given that $a$ is a positive constant, use the substitution $x = a\sin^2\theta$ to show that
$$\int_{0}^{a} x^{\frac{1}{2}}\sqrt{a - x} \, \text{d}x = \frac{1}{2}a^2 \int_{0}^{\frac{\pi}{2}} \sin^2 2\theta \, \text{d}\theta$$ **(4)**

**(b)** Hence use algebraic integration to show that
$$\int_{0}^{a} x^{\frac{1}{2}}\sqrt{a - x} \, \text{d}x = k\pi a^2$$

where $k$ is a constant to be found. **(4)**

**(Total for Question 13 is 8 marks)**

### **Mark Scheme 13**

#### **Part (a)**

**Step 1: Differentiate substitution and change limits**
$x = a\sin^2\theta \implies \frac{\text{d}x}{\text{d}\theta} = 2a\sin\theta\cos\theta$
Limits: when $x = 0, \sin\theta = 0 \implies \theta = 0$; when $x = a, \sin^2\theta = 1 \implies \theta = \frac{\pi}{2}$.
- **[M1]** Correct derivative $\frac{\text{d}x}{\text{d}\theta} = 2a\sin\theta\cos\theta$ (or $\text{d}x = 2a\sin\theta\cos\theta\,\text{d}\theta$).

**Step 2: Substitute into integral**
$x^{\frac{1}{2}} = \sqrt{a}\sin\theta$
$\sqrt{a - x} = \sqrt{a - a\sin^2\theta} = \sqrt{a(1 - \sin^2\theta)} = \sqrt{a}\cos\theta$
$$\int_{0}^{\frac{\pi}{2}} (\sqrt{a}\sin\theta)(\sqrt{a}\cos\theta)(2a\sin\theta\cos\theta) \, \text{d}\theta$$
- **[M1]** Substitutes $x^{\frac{1}{2}}$ and $\sqrt{a-x}$ correctly in terms of $\theta$.

**Step 3: Simplify integrand**
$$= \int_{0}^{\frac{\pi}{2}} (a^{\frac{1}{2}}\sin\theta)(a^{\frac{1}{2}}\cos\theta)(2a\sin\theta\cos\theta) \, \text{d}\theta = \int_{0}^{\frac{\pi}{2}} 2a^2\sin^2\theta\cos^2\theta \, \text{d}\theta$$
Since $2\sin\theta\cos\theta = \sin 2\theta$, $\sin^2\theta\cos^2\theta = \frac{1}{4}\sin^2 2\theta$.
$$= \int_{0}^{\frac{\pi}{2}} 2a^2 \left(\frac{1}{4}\sin^2 2\theta\right) \text{d}\theta = \frac{1}{2}a^2 \int_{0}^{\frac{\pi}{2}} \sin^2 2\theta \, \text{d}\theta$$
- **[A1]** Correct simplification using double angle identity to reach the required form.

#### **Part (b)**

**Step 4: Use double angle formula for integration**
$$\sin^2 2\theta = \frac{1 - \cos 4\theta}{2}$$
$$\text{Integral} = \frac{1}{2}a^2 \int_{0}^{\frac{\pi}{2}} \frac{1 - \cos 4\theta}{2} \, \text{d}\theta = \frac{1}{4}a^2 \int_{0}^{\frac{\pi}{2}} (1 - \cos 4\theta) \, \text{d}\theta$$
- **[M1]** Uses correct double angle identity for $\sin^2 2\theta$.

**Step 5: Integrate with respect to $\theta$**
$$= \frac{1}{4}a^2 \left[ \theta - \frac{1}{4}\sin 4\theta \right]_{0}^{\frac{\pi}{2}}$$
- **[M1]** Correct integration to $\theta - \frac{1}{4}\sin 4\theta$ (or equivalent).

**Step 6: Substitute limits and evaluate**
$$= \frac{1}{4}a^2 \left( \left(\frac{\pi}{2} - 0\right) - (0 - 0) \right) = \frac{1}{4}a^2 \left(\frac{\pi}{2}\right) = \frac{1}{8}\pi a^2$$
$k = \frac{1}{8}$
- **[A1]** Fully correct exact evaluation resulting in $\frac{1}{8}\pi a^2$ (or $k = \frac{1}{8}$).

### **Examiner Report 13**

This question successfully distinguished the most able mathematicians. In part (a), most candidates recognised the need to find $\frac{\text{d}x}{\text{d}\theta}$, but many struggled with the simplification of the square root terms and rearranging the integrand into the form required for the double angle formula. In part (b), candidates who recognised the need to use the double angle identity for $\sin^2 2\theta$ were generally successful, though sign errors and incorrect integration of $\cos 4\theta$ were common amongst the less prepared.

---
topic: "Differential Equations"
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

**(c)** Hence find the radius of the balloon when $t = 20$. Give your answer to the nearest millimetre. **(2)**

**(d)** Suggest a limitation of the model. **(1)**

**(Total for Question 14 is 9 marks)**

### **Mark Scheme 14**

#### **Part (a)**

**Step 1: Form differential equation**
$$\frac{\text{d}r}{\text{d}t} = \frac{k}{\sqrt{r}} \quad (\text{or } r^{-\frac{1}{2}})$$
- **[B1]** Correct differential equation $\frac{\text{d}r}{\text{d}t} = \frac{k}{\sqrt{r}}$ (or proportional equivalent with constant $k$).

#### **Part (b)**

**Step 2: Find constant of proportionality $k$**
When $t = 10, r = 16, \frac{\text{d}r}{\text{d}t} = 0.9$:
$$0.9 = \frac{k}{\sqrt{16}} = \frac{k}{4} \implies k = 3.6$$
- **[M1]** Substitutes given values into differential equation to find $k$.

**Step 3: Separate variables and integrate**
$$\int r^{\frac{1}{2}} \, \text{d}r = \int 3.6 \, \text{d}t$$
$$\frac{2}{3}r^{\frac{3}{2}} = 3.6t + C$$
- **[M1]** Separates variables and integrates both sides correctly.

**Step 4: Find integration constant $C$**
When $t = 10, r = 16$:
$$\frac{2}{3}(16)^{\frac{3}{2}} = 3.6(10) + C \implies \frac{2}{3}(64) = 36 + C \implies \frac{128}{3} = 36 + C \implies C = \frac{20}{3}$$
$$\frac{2}{3}r^{\frac{3}{2}} = 3.6t + \frac{20}{3}$$
- **[M1]** Substitutes $t = 10, r = 16$ to find $C$.

**Step 5: Rearrange into required form**
Multiply through by $\frac{3}{2}$:
$$r^{\frac{3}{2}} = \frac{3}{2}(3.6t) + \frac{3}{2}\left(\frac{20}{3}\right) = 5.4t + 10$$
- **[A1]** Fully correct algebraic steps showing $r^{\frac{3}{2}} = 5.4t + 10$.

#### **Part (c)**

**Step 6: Evaluate radius at $t = 20$**
$$r^{\frac{3}{2}} = 5.4(20) + 10 = 108 + 10 = 118$$
$$r = 118^{\frac{2}{3}} = 23.978\text{ cm} \approx 240\text{ mm}$$
- **[M1]** Substitutes $t = 20$ into the equation and solves for $r$.
- **[A1]** $240\text{ mm}$ (or $24.0\text{ cm}$).

#### **Part (d)**

**Step 7: State limitation**
The balloon would eventually pop / burst, or it won't stay perfectly spherical.
- **[B1]** Any sensible physical limitation (e.g. balloon will burst, or shape won't remain spherical).

### **Examiner Report 14**

This question was generally very well attempted. In part (a), most candidates successfully wrote down the correct differential equation. In part (b), candidates were well-practiced in separating variables and integrating, though some struggled to find the constant of proportionality early on or made arithmetic errors. The given answer in part (b) allowed many to successfully tackle part (c). In part (d), most candidates gained the mark by pointing out that the balloon would eventually pop or not remain a sphere.

---
topic: "Algebraic Methods"
subtopic: "Proof by contradiction"
---
### **Question 15**

**(i)** Show that $k^2 - 4k + 5$ is positive for all real values of $k$. **(2)**

**(ii)** A student was asked to prove by contradiction that
“There are no positive integers $x$ and $y$ such that $(3x + 2y)(2x - 5y) = 28$”

The start of the student’s proof is shown below.

$$\text{Assume that positive integers } x \text{ and } y \text{ exist such that } (3x + 2y)(2x - 5y) = 28$$
$$\text{If } 3x + 2y = 14 \text{ and } 2x - 5y = 2$$
$$\begin{cases} 3x + 2y = 14 \\ 2x - 5y = 2 \end{cases} \implies x = \frac{74}{19}, \, y = \frac{22}{19} \text{ Not integers}$$

Show the calculations and statements needed to complete the proof. **(4)**

**(Total for Question 15 is 6 marks)**

### **Mark Scheme 15**

#### **Part (i)**

**Step 1: Complete the square**
$$k^2 - 4k + 5 = (k - 2)^2 - 4 + 5 = (k - 2)^2 + 1$$
Since $(k - 2)^2 \ge 0$ for all real $k$, $(k - 2)^2 + 1 \ge 1 > 0$.
- **[M1]** Attempts to complete the square or use the discriminant ($b^2 - 4ac < 0$ and $a > 0$).
- **[A1]** Fully correct conclusion showing the expression is always positive.

#### **Part (ii)**

**Step 2: Examine all factor pairs of 28**
Since $x$ and $y$ are positive integers, $3x + 2y$ and $2x - 5y$ must be factors of 28.
Consider possible factor pairs $(A, B)$ where $A = 3x + 2y$ and $B = 2x - 5y$ with $AB = 28$:
- Pair $(14, 2) \implies x = \frac{74}{19}, y = \frac{22}{19}$ (not integers)
- Pair $(28, 1) \implies 3x + 2y = 28, 2x - 5y = 1 \implies x = \frac{142}{19}, y = \frac{53}{19}$ (not integers)
- Pair $(7, 4) \implies 3x + 2y = 7, 2x - 5y = 4 \implies x = \frac{43}{19}, y = \frac{2}{19}$ (not integers)
- Pair $(4, 7) \implies 3x + 2y = 4, 2x - 5y = 7 \implies x = \frac{34}{19}, y = -\frac{13}{19}$ (not integers / not positive)
- Pair $(2, 14) \implies x = \frac{38}{19} = 2, y = -\frac{4}{19}$ (not positive integers)
- Pair $(1, 28) \implies x = \frac{29}{19}, y = -\frac{80}{38}$ (not integers)
- **[M1]** Examines at least one other valid factor pair of 28 and attempts to solve for $x$ and $y$.
- **[A1]** Solves correctly for all relevant positive factor pairs, showing no integer solutions exist.
- **[M1]** Recognizes that negative factors / other remaining pairs can be tested or discarded (e.g. $3x + 2y > 0$).
- **[A1]** Completes the proof by contradiction, stating that since no positive integer solutions $(x,y)$ exist for any case, the original statement holds.

### **Examiner Report 15**

This question was a clear discriminator between the most secure and intermediate candidates. In part (i), completing the square or using the discriminant were common methods, but many candidates lost marks by failing to state a complete conclusion or omitting that squared terms can be zero. In part (ii), many candidates struggled due to the unfamiliar nature of the proof by contradiction structure. While some tested a few factor pairs of 28, very few systematically checked all cases or explicitly concluded why no positive integer solutions could exist across all possibilities.
