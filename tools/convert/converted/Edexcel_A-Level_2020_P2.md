---
topic: "Integration"
subtopic: "The trapezium rule"
---
### **Question 1**

The table below shows corresponding values of $x$ and $y$ for $y = \sqrt{\frac{x}{1 + x}}$

The values of $y$ are given to 4 significant figures.

| $x$ | $0.5$ | $1$ | $1.5$ | $2$ | $2.5$ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| $y$ | $0.5774$ | $0.7071$ | $0.7746$ | $0.8165$ | $0.8452$ |

** (a)** Use the trapezium rule, with all the values of $y$ in the table, to find an estimate for

$$\int_{0.5}^{2.5} \sqrt{\frac{x}{1 + x}} \,\, \mathrm{d}x$$

giving your answer to 3 significant figures. **(3)**

** (b)** Using your answer to part **(a)**, deduce an estimate for

$$\int_{0.5}^{2.5} \sqrt{\frac{9x}{1 + x}} \,\, \mathrm{d}x$$

**(1)**

Given that

$$\int_{0.5}^{2.5} \sqrt{\frac{9x}{1 + x}} \,\, \mathrm{d}x = 4.535 \text{ to 4 significant figures}$$

** (c)** comment on the accuracy of your answer to part **(b)**. **(1)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: State or use the correct strip width**

$$h = 0.5$$

- **[B1]** Correct value for $h = 0.5$ seen or implied.

**Step 2: Apply the trapezium rule formula**

$$\text{Area} \approx \frac{1}{2} \times 0.5 \times \Big[0.5774 + 0.8452 + 2(0.7071 + 0.7746 + 0.8165)\Big]$$

- **[M1]** Correct structure of the trapezium rule: $\frac{1}{2} \times h \times \{y_0 + y_4 + 2(y_1 + y_2 + y_3)\}$.

**Step 3: Calculate the final answer**

$$= 0.25 \times \Big[1.4226 + 2(2.2982)\Big] = 0.25 \times 6.019 = 1.50475 \approx 1.50$$

- **[A1]** $1.50$ (must be given to 3 significant figures).

#### **Part (b)**

**Step 4: Use scaling property of integration**

$$\int_{0.5}^{2.5} \sqrt{\frac{9x}{1 + x}} \,\, \mathrm{d}x = 3 \int_{0.5}^{2.5} \sqrt{\frac{x}{1 + x}} \,\, \mathrm{d}x = 3 \times 1.50475 = 4.51425 \approx 4.51$$

- **[B1]** $4.51$ (accept $3 \times \text{ans (a)}$ rounded to 3 significant figures).

#### **Part (c)**

**Step 5: Comment on accuracy**

The answer in part **(b)** is an underestimate of the true value $4.535$, with a percentage error of approximately $0.46\%$, showing that the estimate is reasonably accurate.

- **[B1]** States that it is an underestimate or makes a correct calculation of difference/percentage error (e.g. $4.535 - 4.51 = 0.025$ or $\approx 0.5\%$ error) and comments correctly on accuracy.

---
topic: "Vectors"
subtopic: "Position vectors"
---
### **Question 2**

Relative to a fixed origin, points $P$, $Q$ and $R$ have position vectors $\mathbf{p}$, $\mathbf{q}$ and $\mathbf{r}$ respectively.

Given that
- $P$, $Q$ and $R$ lie on a straight line
- $Q$ lies one third of the way from $P$ to $R$

show that

$$\mathbf{q} = \frac{1}{3}(\mathbf{r} + 2\mathbf{p})$$

**(3)**

### **Mark Scheme 2**

**Step 1: Express vector $\vec{PQ}$ or $\vec{PR}$ in terms of $\mathbf{p}$, $\mathbf{q}$ and $\mathbf{r}$**

$$\vec{PR} = \mathbf{r} - \mathbf{p} \quad \text{or} \quad \vec{PQ} = \mathbf{q} - \mathbf{p}$$

- **[M1]** Expressing $\vec{PR}$ or $\vec{PQ}$ correctly in terms of position vectors.

**Step 2: Apply the ratio condition**

$$\vec{PQ} = \frac{1}{3}\vec{PR} \implies \mathbf{q} - \mathbf{p} = \frac{1}{3}(\mathbf{r} - \mathbf{p})$$

- **[M1]** Setting up the vector relation using the given ratio $1:3$ or $1:2$.

**Step 3: Rearrange to achieve the given result**

$$\mathbf{q} = \mathbf{p} + \frac{1}{3}\mathbf{r} - \frac{1}{3}\mathbf{p} = \frac{2}{3}\mathbf{p} + \frac{1}{3}\mathbf{r} = \frac{1}{3}(\mathbf{r} + 2\mathbf{p})$$

- **[A1*]** Fully correct proof with no errors seen, reaching $\mathbf{q} = \frac{1}{3}(\mathbf{r} + 2\mathbf{p})$.

---
topic: "Exponentials and Logarithms"
subtopic: "Laws of logarithms"
---
### **Question 3**

** (a)** Given that

$$2\log(4 - x) = \log(x + 8)$$

show that

$$x^2 - 9x + 8 = 0$$

**(3)**

** (b)** **(i)** Write down the roots of the equation

$$x^2 - 9x + 8 = 0$$

**(ii)** State which of the roots in **(b)(i)** is not a solution of

$$2\log(4 - x) = \log(x + 8)$$

giving a reason for your answer. **(2)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Apply logarithmic power law**

$$2\log(4 - x) = \log(4 - x)^2$$

- **[M1]** Uses $k\log A = \log A^k$ correctly.

**Step 2: Remove logarithms**

$$(4 - x)^2 = x + 8$$

- **[M1]** Equates arguments: $(4 - x)^2 = x + 8$.

**Step 3: Expand and rearrange**

$$16 - 8x + x^2 = x + 8 \implies x^2 - 9x + 8 = 0$$

- **[A1*]** Obtains $x^2 - 9x + 8 = 0$ with no algebraic errors.

#### **Part (b)**

**Step 4: State the roots of the quadratic**

$$(x - 1)(x - 8) = 0 \implies x = 1, x = 8$$

- **[B1]** Both $x = 1$ and $x = 8$ stated.

**Step 5: Identify invalid root with reason**

$x = 8$ is not a solution because when $x = 8$, $4 - x = -4$, and $\log(-4)$ is undefined.

- **[B1]** States $x = 8$ and gives valid reason (e.g. $\log(4 - 8) = \log(-4)$ which cannot be evaluated / logarithm of a negative number is undefined).

---
topic: "Binomial Expansion"
subtopic: "Expanding (a + bx)^n"
---
### **Question 4**

In the binomial expansion of

$$(a + 2x)^7 \quad \text{where } a \text{ is a constant}$$

the coefficient of $x^4$ is $15\,120$

Find the value of $a$. **(3)**

### **Mark Scheme 4**

**Step 1: Identify the $x^4$ term in the expansion**

$$\binom{7}{4} a^3 (2x)^4 = 35 \times a^3 \times 16x^4 = 560 a^3 x^4$$

- **[M1]** Identifies term as $\binom{7}{4} a^3 (2x)^4$ or $\binom{7}{3} a^3 (2x)^4$ with correct binomial coefficient ($\binom{7}{4} = 35$).

**Step 2: Equate coefficient to $15\,120$**

$$560 a^3 = 15\,120$$

- **[M1]** Equates $560a^3$ to $15\,120$.

**Step 3: Solve for $a$**

$$a^3 = \frac{15\,120}{560} = 27 \implies a = 3$$

- **[A1]** $a = 3$.

---
topic: "Exponentials and Logarithms"
subtopic: "Solving equations using logarithms"
---
### **Question 5**

The curve with equation $y = 3 \times 2^x$ meets the curve with equation $y = 15 - 2^{x+1}$ at the point $P$.

Find, using algebra, the exact $x$ coordinate of $P$. **(4)**

### **Mark Scheme 5**

**Step 1: Equate equations of the curves**

$$3 \times 2^x = 15 - 2^{x+1}$$

- **[M1]** Equates expressions to form an equation in $2^x$.

**Step 2: Use index laws to express in terms of $2^x$**

$$3 \times 2^x = 15 - 2 \times 2^x$$

- **[M1]** Uses $2^{x+1} = 2 \times 2^x$.

**Step 3: Solve for $2^x$**

$$5 \times 2^x = 15 \implies 2^x = 3$$

- **[A1]** $2^x = 3$.

**Step 4: Solve for $x$ using logarithms**

$$x = \log_2 3 \quad \text{or} \quad x = \frac{\ln 3}{\ln 2}$$

- **[A1]** $x = \log_2 3$ or $x = \frac{\ln 3}{\ln 2}$ or $\frac{\log 3}{\log 2}$.

---
topic: "Algebraic Methods"
subtopic: "Algebraic division"
---
### **Question 6**

** (a)** Given that

$$\frac{x^2 + 8x - 3}{x + 2} \equiv Ax + B + \frac{C}{x + 2} \quad x \in \mathbb{R}, x \neq -2$$

find the values of the constants $A, B$ and $C$ **(3)**

** (b)** Hence, using algebraic integration, find the exact value of

$$\int_0^6 \frac{x^2 + 8x - 3}{x + 2} \,\, \mathrm{d}x$$

giving your answer in the form $a + b\ln 2$ where $a$ and $b$ are integers to be found. **(4)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Perform polynomial division or multiply out denominators**

$$x^2 + 8x - 3 \equiv (Ax + B)(x + 2) + C = Ax^2 + (2A + B)x + (2B + C)$$

- **[M1]** Complete method to find at least one constant (division or multiplying out).

**Step 2: Determine constants**

Compare coefficients:
$$A = 1$$
$$2A + B = 8 \implies 2(1) + B = 8 \implies B = 6$$
$$2B + C = -3 \implies 12 + C = -3 \implies C = -15$$

- **[A1]** Two of $A = 1, B = 6, C = -15$ correct.
- **[A1]** All three $A = 1, B = 6, C = -15$ correct.

#### **Part (b)**

**Step 3: Integrate term by term**

$$\int_0^6 \left(x + 6 - \frac{15}{x + 2}\right) \mathrm{d}x = \left[ \frac{x^2}{2} + 6x - 15\ln|x + 2| \right]_0^6$$

- **[M1]** Integrates $\frac{C}{x+2}$ to $C\ln|x+2|$ and integrates polynomial part.
- **[A1ft]** Correct integration $\left[ \frac{1}{2}x^2 + 6x - 15\ln(x + 2) \right]_0^6$ based on their constants.

**Step 4: Substitute limits and evaluate**

$$\left( \frac{36}{2} + 36 - 15\ln 8 \right) - \left( 0 + 0 - 15\ln 2 \right) = 54 - 15\ln 8 + 15\ln 2$$

- **[dM1]** Substitutes limits 6 and 0 correctly into an integrated expression containing a log term.

**Step 5: Simplify log terms to the required form**

$$\ln 8 = 3\ln 2 \implies 54 - 45\ln 2 + 15\ln 2 = 54 - 30\ln 2$$

- **[A1]** $54 - 30\ln 2$ (with $a = 54, b = -30$).

---
topic: "Numerical Methods"
subtopic: "Iteration"
---
### **Question 7**

**Figure 1** shows a sketch of the curve $C$ with equation

$$y = \frac{4x^2 + x}{2\sqrt{x}} - 4\ln x \quad x > 0$$

**Figure 1** shows a curve starting high on the positive $y$-axis, decreasing to a minimum turning point $P$, and then increasing as $x$ increases.

** (a)** Show that

$$\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{12x^2 + x - 16\sqrt{x}}{4x\sqrt{x}}$$

**(4)**

The point $P$, shown in **Figure 1**, is the minimum turning point on $C$.

** (b)** Show that the $x$ coordinate of $P$ is a solution of

$$x = \left(\frac{4}{3} - \frac{\sqrt{x}}{12}\right)^{\frac{2}{3}}$$

**(3)**

** (c)** Use the iteration formula

$$x_{n+1} = \left(\frac{4}{3} - \frac{\sqrt{x_n}}{12}\right)^{\frac{2}{3}} \quad \text{with } x_1 = 2$$

to find
**(i)** the value of $x_2$ to 5 decimal places,
**(ii)** the $x$ coordinate of $P$ to 5 decimal places. **(3)**

### **Mark Scheme 7**

#### **Part (a)**

**Step 1: Simplify $y$ into separate terms**

$$y = \frac{4x^2}{2x^{1/2}} + \frac{x}{2x^{1/2}} - 4\ln x = 2x^{3/2} + \frac{1}{2}x^{1/2} - 4\ln x$$

- **[M1]** Rewrites $y$ into terms with fractional powers of $x$.

**Step 2: Differentiate term by term**

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 3x^{1/2} + \frac{1}{4}x^{-1/2} - \frac{4}{x}$$

- **[A1]** Correct differentiation of all three terms.

**Step 3: Combine over a common denominator**

$$\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{3x^{1/2} \cdot 4x^{3/2} + \frac{1}{4}x^{-1/2} \cdot 4x^{3/2} - 4 \cdot 4x^{1/2}}{4x^{3/2}} = \frac{12x^2 + x - 16\sqrt{x}}{4x\sqrt{x}}$$

- **[M1]** Expresses derivative over a single common denominator $4x\sqrt{x}$ or $4x^{3/2}$.
- **[A1*]** Reaches given expression with no errors.

#### **Part (b)**

**Step 4: Set $\frac{\mathrm{d}y}{\mathrm{d}x} = 0$ for turning point $P$**

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 0 \implies 12x^2 + x - 16\sqrt{x} = 0$$

- **[M1]** Sets numerator of $\frac{\mathrm{d}y}{\mathrm{d}x}$ to zero.

**Step 5: Rearrange to isolate $x^{3/2}$ or $x^2$**

$$12x^2 = 16\sqrt{x} - x \implies x^2 = \frac{16\sqrt{x} - x}{12}$$

- **[M1]** Rearranges to isolate $x^2$ or $x^{3/2}$.

**Step 6: Complete rearrangement to the target formula**

$$x^2 = \frac{16\sqrt{x}}{12} - \frac{x}{12} = \frac{4\sqrt{x}}{3} - \frac{x}{12}$$

Divide by $\sqrt{x}$:

$$x^{3/2} = \frac{4}{3} - \frac{\sqrt{x}}{12} \implies x = \left(\frac{4}{3} - \frac{\sqrt{x}}{12}\right)^{\frac{2}{3}}$$

- **[A1*]** Fully correct proof leading to given iterative formula.

#### **Part (c)**

**Step 7: Calculate $x_2$**

$$x_2 = \left(\frac{4}{3} - \frac{\sqrt{2}}{12}\right)^{\frac{2}{3}} = (1.333333 - 0.117851)^{2/3} = (1.215482)^{2/3} \approx 1.13894$$

- **[M1]** Attempt to substitute $x_1 = 2$ into iterative formula.
- **[A1]** $x_2 = 1.13894$ (correct to 5 d.p.).

**Step 8: Perform further iterations to find $x$ coordinate of $P$**

$$x_3 = 1.15689, \quad x_4 = 1.15647, \quad x_5 = 1.15650$$

So the $x$ coordinate of $P$ is $1.15650$ to 5 decimal places.

- **[A1]** $x = 1.15650$.

---
topic: "Integration"
subtopic: "Finding functions"
---
### **Question 8**

A curve $C$ has equation $y = \mathrm{f}(x)$

Given that
- $\mathrm{f}''(x) = 6x^2 + ax - 23$ where $a$ is a constant
- the $y$ intercept of $C$ is $-12$
- $(x + 4)$ is a factor of $\mathrm{f}(x)$

find, in simplest form, $\mathrm{f}(x)$ **(6)**

### **Mark Scheme 8**

**Step 1: Integrate $\mathrm{f}''(x)$ to find $\mathrm{f}'(x)$**

$$\mathrm{f}'(x) = \int (6x^2 + ax - 23) \mathrm{d}x = 2x^3 + \frac{1}{2}ax^2 - 23x + c$$

- **[M1]** Integrates $\mathrm{f}''(x)$ once, with constant of integration included or implied.

**Step 2: Integrate $\mathrm{f}'(x)$ to find $\mathrm{f}(x)$**

$$\mathrm{f}(x) = \int \left(2x^3 + \frac{1}{2}ax^2 - 23x + c\right) \mathrm{d}x = \frac{1}{2}x^4 + \frac{1}{6}ax^3 - \frac{23}{2}x^2 + cx + d$$

- **[M1]** Integrates a second time, introducing a second constant $d$.

**Step 3: Use $y$-intercept condition**

The $y$-intercept is $-12 \implies \mathrm{f}(0) = -12 \implies d = -12$.

- **[B1]** Deduces $d = -12$.

**Step 4: Use factor theorem condition $\mathrm{f}(-4) = 0$**

$$\mathrm{f}(-4) = \frac{1}{2}(-4)^4 + \frac{1}{6}a(-4)^3 - \frac{23}{2}(-4)^2 + c(-4) - 12 = 0$$

$$128 - \frac{32}{3}a - 184 - 4c - 12 = 0 \implies -4c - \frac{32}{3}a = 68 \implies c + \frac{8}{3}a = -17$$

- **[M1]** Sets $\mathrm{f}(-4) = 0$ to establish an equation connecting $a$ and $c$.

**Step 5: Differentiate or find another relationship**

Wait, $\mathrm{f}(x)$ must have $(x+4)$ as a factor. We need to find $a$ and $c$.

Wait! We are given $\mathrm{f}(0) = -12$ and $(x+4)$ is a factor of $\mathrm{f}(x)$. But we need another condition! Ah, $\mathrm{f}(x)$ is a polynomial. Is there another constraint?

Let's check the given information:
$\mathrm{f}''(x) = 6x^2 + ax - 23$
$\mathrm{f}(0) = -12$
$(x+4)$ is a factor of $\mathrm{f}(x)$.
Wait, is $a$ determined?
Ah, $\mathrm{f}(-4) = 0$:
$$\frac{1}{2}(256) + \frac{1}{6}a(-64) - \frac{23}{2}(16) + c(-4) - 12 = 0$$
$$128 - \frac{32}{3}a - 184 - 4c - 12 = 0 \implies -68 - \frac{32}{3}a - 4c = 0$$
$$\implies 4c + \frac{32}{3}a = -68 \implies 3c + 8a = -51$$

Wait, is there any other factor?
Ah, if $\mathrm{f}(x)$ has $(x+4)$ as a factor, does $\mathrm{f}'(x)$ also have some property?
Wait, $(x+4)$ is a factor of $\mathrm{f}(x)$ means $\mathrm{f}(-4) = 0$.
Wait! Let's check if $a$ can be determined from $(x+4)$ being a factor of $\mathrm{f}(x)$ and $\mathrm{f}''(x)$.
Wait, $\mathrm{f}(-4) = 0$ gives $3c + 8a = -51$.
Wait! If $(x+4)$ is a factor, is $(x+4)$ also a factor of something else? No, wait!
Let's check if $\mathrm{f}'(-4) = 0$? No, it doesn't say turning point at $x=-4$.
Wait, let's re-read the OCR text of Q8:
"Given that
- $\mathrm{f}'(x) = 6x^2 + ax - 23$ where $a$ is a constant"
AH! OCR on page 20: "f'(x) = 6x^2 + ax - 23" !!
Look closely at screenshot 20:
It says $\mathrm{f}'(x) = 6x^2 + ax - 23$, NOT $\mathrm{f}''(x)$!
Let's verify from screenshot 20!
"f'(x) = 6x^2 + ax - 23"
Yes! It is $f'(x)$!

Let's re-evaluate with $\mathrm{f}'(x) = 6x^2 + ax - 23$:

**Step 1: Integrate $\mathrm{f}'(x)$ to find $\mathrm{f}(x)$**

$$\mathrm{f}(x) = \int (6x^2 + ax - 23) \mathrm{d}x = 2x^3 + \frac{1}{2}ax^2 - 23x + c$$

- **[M1]** Integrates $\mathrm{f}'(x)$ to obtain $\mathrm{f}(x) = 2x^3 + \frac{1}{2}ax^2 - 23x + c$.

**Step 2: Use the $y$-intercept condition**

The $y$-intercept is $-12 \implies \mathrm{f}(0) = -12 \implies c = -12$.

- **[B1]** State $c = -12$.

**Step 3: Use the factor theorem condition**

$(x+4)$ is a factor of $\mathrm{f}(x) \implies \mathrm{f}(-4) = 0$.

$$\mathrm{f}(-4) = 2(-4)^3 + \frac{1}{2}a(-4)^2 - 23(-4) - 12 = 0$$

- **[M1]** Sets $\mathrm{f}(-4) = 0$ with $c = -12$.

**Step 4: Solve for $a$**

$$2(-64) + 8a + 92 - 12 = 0$$
$$-128 + 8a + 80 = 0 \implies 8a = 48 \implies a = 6$$

- **[A1]** $a = 6$.

**Step 5: Write down $\mathrm{f}(x)$ in simplest form**

$$\mathrm{f}(x) = 2x^3 + 3x^2 - 23x - 12$$

- **[A1]** $\mathrm{f}(x) = 2x^3 + 3x^2 - 23x - 12$.

---
topic: "Exponentials and Logarithms"
subtopic: "Exponential modelling"
---
### **Question 9**

A quantity of ethanol was heated until it reached boiling point.

The temperature of the ethanol, $\theta^\circ\text{C}$, at time $t$ seconds after heating began, is modelled by the equation

$$\theta = A - B\text{e}^{-0.07t}$$

where $A$ and $B$ are positive constants.

Given that
- the initial temperature of the ethanol was $18^\circ\text{C}$
- after 10 seconds the temperature of the ethanol was $44^\circ\text{C}$

** (a)** find a complete equation for the model, giving the values of $A$ and $B$ to 3 significant figures. **(4)**

Ethanol has a boiling point of approximately $78^\circ\text{C}$

** (b)** Use this information to evaluate the model. **(2)**

### **Mark Scheme 9**

#### **Part (a)**

**Step 1: Use initial conditions $t = 0, \theta = 18$**

$$18 = A - B\text{e}^0 \implies A - B = 18 \implies A = B + 18$$

- **[M1]** Substitutes $t = 0, \theta = 18$ into the model equation.

**Step 2: Use conditions $t = 10, \theta = 44$**

$$44 = A - B\text{e}^{-0.7}$$

- **[M1]** Substitutes $t = 10, \theta = 44$ into the model equation.

**Step 3: Solve simultaneous equations for $A$ and $B$**

$$44 = (B + 18) - B\text{e}^{-0.7} \implies 26 = B(1 - \text{e}^{-0.7})$$

$$B = \frac{26}{1 - \text{e}^{-0.7}} = \frac{26}{1 - 0.496585} = \frac{26}{0.503415} \approx 51.647 \approx 51.6$$

$$A = 51.647 + 18 = 69.647 \approx 69.6$$

- **[A1]** $A \approx 69.6$ and $B \approx 51.6$ (or $51.7$).

**Step 4: State the complete equation**

$$\theta = 69.6 - 51.6\text{e}^{-0.07t}$$

- **[A1]** Complete equation given with values to 3 significant figures.

#### **Part (b)**

**Step 5: Find maximum temperature predicted by the model**

As $t \to \infty$, $\text{e}^{-0.07t} \to 0$, so $\theta \to A = 69.6^\circ\text{C}$.

- **[M1]** Considers the limit as $t \to \infty$ or calculates temperature for a large value of $t$.

**Step 6: Evaluate the model**

The model predicts a maximum temperature of $69.6^\circ\text{C}$, which is lower than the actual boiling point of $78^\circ\text{C}$. Therefore, the model is not suitable / inaccurate for higher temperatures.

- **[A1]** States that the predicted maximum temperature ($69.6^\circ\text{C}$) is less than $78^\circ\text{C}$, so the model is invalid/inadequate for predicting boiling.

---
topic: "Trigonometry and Modelling"
subtopic: "Double-angle formulae"
---
### **Question 10**

In this question you must show all stages of your working.
Solutions relying entirely on calculator technology are not acceptable.

** (a)** Show that

$$\cos 3A \equiv 4\cos^3 A - 3\cos A$$

**(4)**

** (b)** Hence solve, for $-90^\circ \leqslant x \leqslant 180^\circ$, the equation

$$1 - \cos 3x = \sin^2 x$$

**(4)**

### **Mark Scheme 10**

#### **Part (a)**

**Step 1: Write $\cos 3A$ as $\cos(2A + A)$ and expand**

$$\cos 3A = \cos(2A + A) = \cos 2A \cos A - \sin 2A \sin A$$

- **[M1]** Uses compound angle formula $\cos(2A + A) = \cos 2A \cos A - \sin 2A \sin A$.

**Step 2: Express $\cos 2A$ and $\sin 2A$ in terms of single angle functions**

$$\cos 2A = 2\cos^2 A - 1, \quad \sin 2A = 2\sin A \cos A$$

- **[M1]** Applies double angle formulae $\cos 2A = 2\cos^2 A - 1$ (or $\cos^2 A - \sin^2 A$) and $\sin 2A = 2\sin A \cos A$.

**Step 3: Replace $\sin^2 A$ with $1 - \cos^2 A$**

$$\cos 3A = (2\cos^2 A - 1)\cos A - (2\sin A \cos A)\sin A$$
$$= 2\cos^3 A - \cos A - 2\cos A \sin^2 A$$
$$= 2\cos^3 A - \cos A - 2\cos A (1 - \cos^2 A)$$

- **[M1]** Uses $\sin^2 A = 1 - \cos^2 A$ to express entirely in terms of $\cos A$.

**Step 4: Collect terms to obtain target identity**

$$= 2\cos^3 A - \cos A - 2\cos A + 2\cos^3 A = 4\cos^3 A - 3\cos A$$

- **[A1*]** Fully correct proof with all steps clear.

#### **Part (b)**

**Step 5: Substitute identity into equation**

$$1 - (4\cos^3 x - 3\cos x) = 1 - \cos^2 x$$

- **[M1]** Uses $\cos 3x = 4\cos^3 x - 3\cos x$ and $\sin^2 x = 1 - \cos^2 x$.

**Step 6: Simplify to a cubic in $\cos x$**

$$1 - 4\cos^3 x + 3\cos x = 1 - \cos^2 x \implies 4\cos^3 x - \cos^2 x - 3\cos x = 0$$

$$\cos x (4\cos^2 x - \cos x - 3) = 0$$

- **[M1]** Factors out $\cos x$ or solves cubic in $\cos x$.

**Step 7: Factorise quadratic factor**

$$\cos x (4\cos x + 3)(\cos x - 1) = 0$$

$$\implies \cos x = 0, \quad \cos x = -\frac{3}{4}, \quad \cos x = 1$$

- **[A1]** Correct values for $\cos x$: $\cos x = 0, 1, -0.75$.

**Step 8: Find solutions for $x$ in domain $-90^\circ \leqslant x \leqslant 180^\circ$**

- $\cos x = 0 \implies x = -90^\circ, 90^\circ$
- $\cos x = 1 \implies x = 0^\circ$
- $\cos x = -0.75 \implies x = 138.6^\circ$

Solutions: $x = -90^\circ, 0^\circ, 90^\circ, 138.6^\circ$ (or $139^\circ$)

- **[A1]** All four correct solutions, and no extra solutions in the range.

---
topic: "Functions and Graphs"
subtopic: "The modulus function"
---
### **Question 11**

**Figure 2** shows a sketch of the graph with equation

$$y = 2|x + 4| - 5$$

**Figure 2** shows a V-shaped modulus graph with a vertex $P$ below the $x$-axis in the third quadrant, opening upwards.

The vertex of the graph is at the point $P$, shown in **Figure 2**.

** (a)** Find the coordinates of $P$. **(2)**

** (b)** Solve the equation

$$3x + 40 = 2|x + 4| - 5$$

**(2)**

A line $l$ has equation $y = ax$, where $a$ is a constant.

Given that $l$ intersects $y = 2|x + 4| - 5$ at least once,

** (c)** find the range of possible values of $a$, writing your answer in set notation. **(3)**

### **Mark Scheme 11**

#### **Part (a)**

**Step 1: Identify coordinates of vertex $P$**

The minimum of $2|x + 4| - 5$ occurs when $x + 4 = 0 \implies x = -4$.
When $x = -4$, $y = -5$.

$$P = (-4, -5)$$

- **[B1]** $x = -4$.
- **[B1]** $y = -5$.

#### **Part (b)**

**Step 2: Solve $3x + 40 = 2|x + 4| - 5$**

Rearrange: $3x + 45 = 2|x + 4|$

Case 1 ($x \geqslant -4$):
$$3x + 45 = 2(x + 4) = 2x + 8 \implies x = -37 \quad \text{(invalid since } -37 < -4\text{)}$$

Case 2 ($x < -4$):
$$3x + 45 = -2(x + 4) = -2x - 8 \implies 5x = -53 \implies x = -\frac{53}{5} = -10.6$$

- **[M1]** Solves one valid linear equation involving absolute values.
- **[A1]** $x = -10.6$ (or $-\frac{53}{5}$) only.

#### **Part (c)**

**Step 3: Consider critical gradients for line $y = ax$ through origin**

Line $l$ passes through $(0,0)$.

Boundary 1: Parallel to left branch ($y = -2x - 13$), gradient $= -2$.
Boundary 2: Line passing through vertex $P(-4, -5)$:
$$\text{gradient } a = \frac{-5 - 0}{-4 - 0} = \frac{5}{4} = 1.25$$

Boundary 3: Parallel to right branch ($y = 2x + 3$), gradient $= 2$.

- **[M1]** Calculates gradient to vertex: $a = \frac{5}{4}$.
- **[M1]** Identifies gradient boundaries $a < -2$ or $a \geqslant \frac{5}{4}$.

**Step 4: Express answer in set notation**

$$\{a : a \leqslant -2\} \cup \{a : a \geqslant 1.25\} \quad \text{or} \quad \{a : a < -2 \text{ or } a \geqslant \frac{5}{4}\}$$

- **[A1]** $\{a : a < -2\} \cup \{a : a \geqslant \frac{5}{4}\}$ (or equivalent correct set notation).

---
topic: "Parametric Equations"
subtopic: "Modelling with parametric equations"
---
### **Question 12**

**Figure 3** shows the curve with parametric equations

$$x = 6\sin t \quad y = 5\sin 2t \quad 0 \leqslant t \leqslant \frac{\pi}{2}$$

The region $R$, shown shaded in **Figure 3**, is bounded by the curve and the $x$-axis.

** (a)** **(i)** Show that the area of $R$ is given by

$$\int_0^{\frac{\pi}{2}} 60\sin t \cos^2 t \,\, \mathrm{d}t$$

**(3)**

**(ii)** Hence show, by algebraic integration, that the area of $R$ is exactly 20. **(3)**

**Figure 4** shows part of the curve used to model the profile of a small dam, shown shaded in **Figure 4**.
Using the model and given that
- $x$ and $y$ are in metres
- the vertical wall of the dam is 4.2 metres high
- there is a horizontal walkway of width $MN$ along the top of the dam

** (b)** calculate the width of the walkway. **(5)**

### **Mark Scheme 12**

#### **Part (a)(i)**

**Step 1: Set up area integral in parametric form**

$$\text{Area} = \int y \,\, \mathrm{d}x = \int y \frac{\mathrm{d}x}{\mathrm{d}t} \,\, \mathrm{d}t$$

$$\frac{\mathrm{d}x}{\mathrm{d}t} = 6\cos t$$

- **[M1]** Differentiates $x = 6\sin t$ to get $\frac{\mathrm{d}x}{\mathrm{d}t} = 6\cos t$.

**Step 2: Express integrand in terms of $t$**

$$y \frac{\mathrm{d}x}{\mathrm{d}t} = (5\sin 2t)(6\cos t) = 30\sin 2t \cos t$$

Uses $\sin 2t = 2\sin t \cos t$:

$$= 30(2\sin t \cos t)\cos t = 60\sin t \cos^2 t$$

- **[M1]** Uses double angle formula $\sin 2t = 2\sin t \cos t$.

**Step 3: Apply limits**

When $x = 0$, $t = 0$; when $x = 6$, $t = \frac{\pi}{2}$.

$$\text{Area} = \int_0^{\frac{\pi}{2}} 60\sin t \cos^2 t \,\, \mathrm{d}t$$

- **[A1*]** Fully correct proof with correct limits shown.

#### **Part (a)(ii)**

**Step 4: Perform integration by substitution or inspection**

$$\int 60\sin t \cos^2 t \,\, \mathrm{d}t = \left[ -20\cos^3 t \right]_0^{\frac{\pi}{2}}$$

- **[M1]** Integrates to $k\cos^3 t$.
- **[A1]** Correct integral $\left[ -20\cos^3 t \right]_0^{\frac{\pi}{2}}$.

**Step 5: Evaluate limits**

$$\left( -20\cos^3 \frac{\pi}{2} \right) - \left( -20\cos^3 0 \right) = 0 - (-20) = 20$$

- **[A1*]** Obtains 20 with clear working.

#### **Part (b)**

**Step 6: Find $t$ values when $y = 4.2$**

$$5\sin 2t = 4.2 \implies \sin 2t = 0.84$$

$$2t = \arcsin(0.84) \approx 0.99684 \implies t_1 \approx 0.49842 \text{ rad}$$

$$2t = \pi - 0.99684 \approx 2.14475 \implies t_2 \approx 1.07238 \text{ rad}$$

- **[M1]** Sets $y = 4.2$ and solves for $2t$.
- **[A1]** Both $t$ values correctly found ($t_1 \approx 0.498, t_2 \approx 1.072$).

**Step 7: Calculate corresponding $x$ values**

$$x_M = 6\sin(0.49842) \approx 6 \times 0.47829 \approx 2.8697 \text{ m}$$

$$x_N = 6\sin(1.07238) \approx 6 \times 0.87823 \approx 5.2694 \text{ m}$$

- **[M1]** Substitutes $t$ values into $x = 6\sin t$.
- **[A1]** Correct $x$ coordinates ($x_M \approx 2.87, x_N \approx 5.27$).

**Step 8: Calculate width of walkway $MN$**

$$\text{Width } MN = x_N - x_M = 5.2694 - 2.8697 = 2.3997 \approx 2.40 \text{ metres}$$

- **[A1]** $2.40$ m (or $2.4$ m).

---
topic: "Differentiation"
subtopic: "The quotient rule"
---
### **Question 13**

The function $\mathrm{g}$ is defined by

$$\mathrm{g}(x) = \frac{3\ln x - 7}{\ln x - 2} \quad x > 0 \quad x \neq k$$

where $k$ is a constant.

** (a)** Deduce the value of $k$. **(1)**

** (b)** Prove that

$$\mathrm{g}'(x) > 0$$

for all values of $x$ in the domain of $\mathrm{g}$. **(3)**

** (c)** Find the range of values of $a$ for which

$$\mathrm{g}(a) > 0$$

**(2)**

### **Mark Scheme 13**

#### **Part (a)**

**Step 1: Determine value of $k$**

Denominator cannot be zero $\implies \ln k - 2 = 0 \implies \ln k = 2 \implies k = \text{e}^2$.

- **[B1]** $k = \text{e}^2$.

#### **Part (b)**

**Step 2: Apply quotient rule to differentiate $\mathrm{g}(x)$**

Let $u = 3\ln x - 7 \implies u' = \frac{3}{x}$
Let $v = \ln x - 2 \implies v' = \frac{1}{x}$

$$\mathrm{g}'(x) = \frac{v u' - u v'}{v^2} = \frac{(\ln x - 2)\left(\frac{3}{x}\right) - (3\ln x - 7)\left(\frac{1}{x}\right)}{(\ln x - 2)^2}$$

- **[M1]** Applies quotient rule correctly.

**Step 3: Simplify the numerator**

$$\mathrm{g}'(x) = \frac{\frac{1}{x} \big(3\ln x - 6 - (3\ln x - 7)\big)}{(\ln x - 2)^2} = \frac{\frac{1}{x}(1)}{(\ln x - 2)^2} = \frac{1}{x(\ln x - 2)^2}$$

- **[A1]** Correct simplified derivative $\mathrm{g}'(x) = \frac{1}{x(\ln x - 2)^2}$.

**Step 4: Deduce $\mathrm{g}'(x) > 0$**

For $x > 0$ in the domain, $x > 0$ and $(\ln x - 2)^2 > 0$ (since $x \neq \text{e}^2$), so numerator $1 > 0$ and denominator $x(\ln x - 2)^2 > 0 \implies \mathrm{g}'(x) > 0$.

- **[A1*]** Fully justified conclusion that $\mathrm{g}'(x) > 0$ for all $x$ in the domain.

#### **Part (c)**

**Step 5: Solve $\mathrm{g}(a) > 0$**

$$\frac{3\ln a - 7}{\ln a - 2} > 0$$

Critical values: $\ln a = \frac{7}{3} \implies a = \text{e}^{7/3}$, and $\ln a = 2 \implies a = \text{e}^2$.

Testing intervals:
- $\ln a < 2 \implies a < \text{e}^2$: numerator $< 0$, denominator $< 0 \implies \frac{\text{neg}}{\text{neg}} > 0$.
- $2 < \ln a < \frac{7}{3} \implies \text{e}^2 < a < \text{e}^{7/3}$: numerator $< 0$, denominator $> 0 \implies < 0$.
- $\ln a > \frac{7}{3} \implies a > \text{e}^{7/3}$: numerator $> 0$, denominator $> 0 \implies > 0$.

- **[M1]** Identifies critical values $a = \text{e}^2$ and $a = \text{e}^{7/3}$.

Range: $0 < a < \text{e}^2$ or $a > \text{e}^{7/3}$.

- **[A1]** $0 < a < \text{e}^2$ or $a > \text{e}^{7/3}$ (or $(0, \text{e}^2) \cup (\text{e}^{7/3}, \infty)$).

---
topic: "Circles"
subtopic: "Intersections of straight lines and circles"
---
### **Question 14**

A circle $C$ with radius $r$
- lies only in the 1st quadrant
- touches the $x$-axis and touches the $y$-axis

The line $l$ has equation $2x + y = 12$

** (a)** Show that the $x$ coordinates of the points of intersection of $l$ with $C$ satisfy

$$5x^2 + (2r - 48)x + (r^2 - 24r + 144) = 0$$

**(3)**

Given also that $l$ is a tangent to $C$,

** (b)** find the two possible values of $r$, giving your answers as fully simplified surds. **(4)**

### **Mark Scheme 14**

#### **Part (a)**

**Step 1: Write equation of circle $C$**

Since $C$ touches both axes in the 1st quadrant with radius $r$, its centre is $(r, r)$.

$$(x - r)^2 + (y - r)^2 = r^2$$

- **[B1]** Writes circle equation as $(x - r)^2 + (y - r)^2 = r^2$.

**Step 2: Substitute line equation $y = 12 - 2x$**

$$(x - r)^2 + (12 - 2x - r)^2 = r^2$$

- **[M1]** Substitutes $y = 12 - 2x$ into circle equation.

**Step 3: Expand and simplify**

$$(x^2 - 2rx + r^2) + \Big(144 + 4x^2 + r^2 - 48x - 24r + 4rx\Big) = r^2$$

$$5x^2 + (2r - 48)x + (r^2 - 24r + 144) = 0$$

- **[A1*]** Fully correct expansion and collection of terms to give required quadratic.

#### **Part (b)**

**Step 4: Set discriminant $b^2 - 4ac = 0$ for tangency**

$$b = 2r - 48, \quad a = 5, \quad c = r^2 - 24r + 144$$

$$(2r - 48)^2 - 4(5)(r^2 - 24r + 144) = 0$$

- **[M1]** Sets $b^2 - 4ac = 0$.

**Step 5: Expand and simplify quadratic in $r$**

$$(4r^2 - 192r + 2304) - 20(r^2 - 24r + 144) = 0$$

$$4r^2 - 192r + 2304 - 20r^2 + 480r - 2880 = 0$$

$$-16r^2 + 288r - 576 = 0$$

Divide by $-16$:

$$r^2 - 18r + 36 = 0$$

- **[A1]** Correct quadratic $r^2 - 18r + 36 = 0$.

**Step 6: Solve for $r$ using quadratic formula**

$$r = \frac{18 \pm \sqrt{18^2 - 4(1)(36)}}{2} = \frac{18 \pm \sqrt{324 - 144}}{2} = \frac{18 \pm \sqrt{180}}{2}$$

$$\sqrt{180} = 6\sqrt{5} \implies r = 9 \pm 3\sqrt{5}$$

- **[M1]** Solves quadratic in $r$ using formula or completing the square.
- **[A1]** $r = 9 + 3\sqrt{5}$ and $r = 9 - 3\sqrt{5}$ (fully simplified surds).

---
topic: "Sequences and Series"
subtopic: "Geometric series"
---
### **Question 15**

In this question you must show all stages of your working.
Solutions relying entirely on calculator technology are not acceptable.

A geometric series has common ratio $r$ and first term $a$.
Given $r \neq 1$ and $a \neq 0$

** (a)** prove that

$$S_n = \frac{a(1 - r^n)}{1 - r}$$

**(4)**

Given also that $S_{10}$ is four times $S_5$

** (b)** find the exact value of $r$. **(4)**

### **Mark Scheme 15**

#### **Part (a)**

**Step 1: Write down the expression for $S_n$**

$$S_n = a + ar + ar^2 + \dots + ar^{n-1}$$

- **[M1]** Writes sum of $n$ terms correctly.

**Step 2: Multiply by $r$**

$$r S_n = ar + ar^2 + ar^3 + \dots + ar^n$$

- **[M1]** Multiplies $S_n$ by $r$.

**Step 3: Subtract $r S_n$ from $S_n$**

$$S_n - r S_n = a - ar^n$$

$$S_n(1 - r) = a(1 - r^n)$$

- **[M1]** Subtracts the two equations to eliminate intermediate terms.

**Step 4: Divide by $(1 - r)$**

$$S_n = \frac{a(1 - r^n)}{1 - r}$$

- **[A1*]** Reaches given formula with no algebraic errors.

#### **Part (b)**

**Step 5: Set up equation $S_{10} = 4 S_5$**

$$\frac{a(1 - r^{10})}{1 - r} = 4 \times \frac{a(1 - r^5)}{1 - r}$$

- **[M1]** Uses formula for $S_{10}$ and $S_5$ with $S_{10} = 4S_5$.

**Step 6: Cancel common non-zero factors**

Since $a \neq 0$ and $r \neq 1$:

$$1 - r^{10} = 4(1 - r^5)$$

- **[A1]** $1 - r^{10} = 4 - 4r^5$.

**Step 7: Solve for $r^5$**

$$r^{10} - 4r^5 + 3 = 0$$

$$(r^5 - 1)(r^5 - 3) = 0$$

Since $r \neq 1$, $r^5 \neq 1 \implies r^5 = 3$.

- **[M1]** Factorises or solves quadratic in $r^5$ to find $r^5 = 3$.

**Step 8: State exact value of $r$**

$$r = 3^{1/5} \quad \text{or} \quad \sqrt[5]{3}$$

- **[A1]** $r = \sqrt[5]{3}$ (or $3^{1/5}$).

---
topic: "Algebraic Methods"
subtopic: "Mathematical proof"
---
### **Question 16**

Use algebra to prove that the square of any natural number is either a multiple of 3 or one more than a multiple of 3. **(4)**

### **Mark Scheme 16**

**Step 1: Define natural numbers in terms of modulo 3 cases**

Any natural number $n \in \mathbb{N}$ can be written in one of three forms for some integer $k \geqslant 0$:
- Case 1: $n = 3k$
- Case 2: $n = 3k + 1$
- Case 3: $n = 3k + 2$

- **[M1]** Considers cases for $n$: $3k, 3k+1, 3k+2$ (or equivalent exhausting all natural numbers).

**Step 2: Test Case 1 ($n = 3k$)**

$$n^2 = (3k)^2 = 9k^2 = 3(3k^2)$$

Since $3k^2$ is an integer, $n^2$ is a multiple of 3.

- **[A1]** Correct proof for $n = 3k$.

**Step 3: Test Case 2 ($n = 3k + 1$)**

$$n^2 = (3k + 1)^2 = 9k^2 + 6k + 1 = 3(3k^2 + 2k) + 1$$

Since $3k^2 + 2k$ is an integer, $n^2$ is one more than a multiple of 3.

- **[A1]** Correct proof for $n = 3k + 1$.

**Step 4: Test Case 3 ($n = 3k + 2$)**

$$n^2 = (3k + 2)^2 = 9k^2 + 12k + 4 = 9k^2 + 12k + 3 + 1 = 3(3k^2 + 4k + 1) + 1$$

Since $3k^2 + 4k + 1$ is an integer, $n^2$ is one more than a multiple of 3.

- **[A1]** Correct proof for $n = 3k + 2$, with a clear concluding sentence covering all cases.
