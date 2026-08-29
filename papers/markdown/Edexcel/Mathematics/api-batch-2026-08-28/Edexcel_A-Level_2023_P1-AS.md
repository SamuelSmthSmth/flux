---
topic: "Integration"
subtopic: "Integrating x^n"
---
### **Question 1**

Find
$$\int \left(\frac{2}{3}x^3 - 6\sqrt{x} + 1\right) dx$$
giving your answer in its simplest form. **(4)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Integrate each term of the expression**
$$\int \left(\frac{2}{3}x^3 - 6x^{\frac{1}{2}} + 1\right) dx = \frac{2}{3} \left(\frac{x^4}{4}\right) - 6 \left(\frac{x^{\frac{3}{2}}}{\frac{3}{2}}\right) + x$$
- **[M1]** Attempt to integrate $x^n$ to $x^{n+1}$ for at least one term (power increased by 1).
- **[A1]** Any two terms correctly integrated (unsimplified or simplified).
- **[A1]** All three terms correctly integrated.

**Step 2: Simplify the expression**
$$= \frac{1}{6}x^4 - 4x^{\frac{3}{2}} + x + C$$
- **[A1]** Correct simplest form including constant of integration $+C$.

---
topic: "Quadratics"
subtopic: "The discriminant"
---
### **Question 2**

**(i)** Show that $x^2 - 8x + 17 > 0$ for all real values of $x$. **(3)**

**(ii)** "If I add 3 to a number and square the sum, the result is greater than the square of the original number."

State, giving a reason, if the above statement is always true, sometimes true or never true. **(2)**

**(Total 5 marks)**

### **Mark Scheme 2**

#### **Part (i)**

**Step 1: Complete the square**
$$x^2 - 8x + 17 = (x - 4)^2 - 16 + 17 = (x - 4)^2 + 1$$
- **[M1]** Attempt to complete the square.
- **[A1]** Correct completed form $(x - 4)^2 + 1$.

**Step 2: Deduce inequality**
Since $(x - 4)^2 \ge 0$ for all real $x$, then $(x - 4)^2 + 1 > 0$ for all real values of $x$.
- **[A1]** Valid conclusion with clear reasoning.

#### **Part (ii)**

**Step 1: Set up algebra**
Let the number be $x$. The statement claims $(x + 3)^2 > x^2$.
Expanding: $x^2 + 6x + 9 > x^2 \Rightarrow 6x + 9 > 0 \Rightarrow x > -\frac{3}{2}$.
- **[M1]** Sets up the inequality or tests with an algebraic counter-example / proof.

**Step 2: State conclusion**
Sometimes true (e.g. true for $x = 0$, false for $x = -2$).
- **[A1]** States "sometimes true" with a valid reason or counter-example.

---
topic: "Vectors"
subtopic: "Magnitude and direction"
---
### **Question 3**

Given that the point $A$ has position vector $4\mathbf{i} - 5\mathbf{j}$ and the point $B$ has position vector $-5\mathbf{i} - 2\mathbf{j}$,

**(a)** find the vector $\overrightarrow{AB}$, **(2)**

**(b)** find $|\overrightarrow{AB}|$.

Give your answer as a simplified surd. **(2)**

**(Total 4 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Calculate $\overrightarrow{AB}$**
$$\overrightarrow{AB} = \mathbf{b} - \mathbf{a} = (-5\mathbf{i} - 2\mathbf{j}) - (4\mathbf{i} - 5\mathbf{j}) = -9\mathbf{i} + 3\mathbf{j}$$
- **[M1]** Attempts $\mathbf{b} - \mathbf{a}$ or $\mathbf{a} - \mathbf{b}$.
- **[A1]** $-9\mathbf{i} + 3\mathbf{j}$ (or column vector).

#### **Part (b)**

**Step 1: Calculate magnitude**
$$|\overrightarrow{AB}| = \sqrt{(-9)^2 + 3^2} = \sqrt{81 + 9} = \sqrt{90} = 3\sqrt{10}$$
- **[M1]** Uses Pythagoras' theorem on the components from part (a).
- **[A1]** $3\sqrt{10}$ (simplified surd).

---
topic: "Straight Line Graphs"
subtopic: "Parallel and perpendicular lines"
---
### **Question 4**

The line $l_1$ has equation $4y - 3x = 10$.

The line $l_2$ passes through the points $(5, -1)$ and $(-1, 8)$.

Determine, giving full reasons for your answer, whether lines $l_1$ and $l_2$ are parallel, perpendicular or neither. **(4)**

**(Total 4 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Find gradient of $l_1$**
$$4y = 3x + 10 \Rightarrow y = \frac{3}{4}x + \frac{5}{2}$$
Gradient $m_1 = \frac{3}{4}$.
- **[M1]** Rearranges $l_1$ into $y = mx + c$ or attempts to find gradient of $l_1$.

**Step 2: Find gradient of $l_2$**
$$m_2 = \frac{8 - (-1)}{-1 - 5} = \frac{9}{-6} = -\frac{3}{2}$$
- **[M1]** Uses gradient formula $\frac{y_2 - y_1}{x_2 - x_1}$ for $l_2$.

**Step 3: Compare gradients**
$m_1 \neq m_2$ (not parallel) and $m_1 \times m_2 = \frac{3}{4} \times \left(-\frac{3}{2}\right) = -\frac{9}{8} \neq -1$ (not perpendicular).
- **[A1]** Both correct gradients stated.
- **[A1]** Concludes "neither" with valid reasoning based on gradient calculations.

---
topic: "Exponentials and Logarithms"
subtopic: "Laws of logarithms"
---
### **Question 5**

A student's attempt to solve the equation $2\log_2 x - \log_2 \sqrt{x} = 3$ is shown below.

$$2\log_2 x - \log_2 \sqrt{x} = 3$$
$$2\log_2 \left(\frac{x}{\sqrt{x}}\right) = 3 \quad \text{using the subtraction law for logs}$$
$$2\log_2 (\sqrt{x}) = 3 \quad \text{simplifying}$$
$$\log_2 x = 3 \quad \text{using the power law for logs}$$
$$x = 3^2 = 9 \quad \text{using the definition of a log}$$

**(a)** Identify two errors made by this student, giving a brief explanation of each. **(2)**

**(b)** Write out the correct solution. **(3)**

**(Total 5 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Identify error 1**
The subtraction law was applied incorrectly before the coefficient of 2 was dealt with (or power law applied incorrectly to the first term).
- **[B1]** Identifies first error with valid explanation.

**Step 2: Identify error 2**
The power law from line 3 to line 4 ($2\log_2 \sqrt{x} = \log_2 x$) was applied incorrectly, or index arithmetic error in final step ($3^2$ instead of $2^3$).
- **[B1]** Identifies second error with valid explanation.

#### **Part (b)**

**Step 1: Apply power law correctly**
$$\log_2(x^2) - \log_2(x^{\frac{1}{2}}) = 3$$
- **[M1]** Correctly applies power law: $2\log_2 x = \log_2(x^2)$ or similar.

**Step 2: Apply subtraction law**
$$\log_2\left(\frac{x^2}{x^{\frac{1}{2}}}\right) = 3 \Rightarrow \log_2(x^{\frac{3}{2}}) = 3$$
- **[M1]** Correctly combines terms using subtraction law.

**Step 3: Solve for $x$**
$$x^{\frac{3}{2}} = 2^3 = 8 \Rightarrow x = 8^{\frac{2}{3}} = 4$$
- **[A1]** $x = 4$.

---
topic: "Quadratics"
subtopic: "Modelling with quadratics"
---
### **Question 6**

A company makes a particular type of children's toy.

The annual profit made by the company is modelled by the equation
$$P = 100 - 6.25(x - 9)^2$$
where $P$ is the profit measured in thousands of pounds and $x$ is the selling price of the toy in pounds.

**Figure 1** _(A sketch of the parabola $P = 100 - 6.25(x - 9)^2$ opening downwards, with vertex at $(9, 100)$ and cutting the x-axis at two points)._

```tikz
\begin{tikzpicture}[scale=0.8]
  \draw[->] (-0.5,0) -- (18,0) node[below] {$x$};
  \draw[->] (0,-1) -- (0,6) node[left] {$P$};
  \draw[domain=3:15, smooth, thick] plot (\x, {5 - 0.2*(\x-9)*(\x-9)});
  \fill (9,5) circle (1.5pt) node[above] {$(9, 100)$};
  \node at (2,4.5) {$P = 100 - 6.25(x - 9)^2$};
\end{tikzpicture}
```

Figure 1 shows a sketch of $P$ against $x$.

Using the model,

**(a)** explain why £15 is not a sensible selling price for the toy. **(2)**

Given that the company made an annual profit of more than £80 000,

**(b)** find, according to the model, the least possible selling price for the toy. **(3)**

The company wishes to maximise its annual profit. State, according to the model,

**(c) (i)** the maximum possible annual profit,

**(ii)** the selling price of the toy that maximises the annual profit. **(2)**

**(Total 7 marks)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Evaluate $P$ at $x = 15$**
$$P = 100 - 6.25(15 - 9)^2 = 100 - 6.25(36) = 100 - 225 = -125$$
Since $P = -125$ (thousand pounds), this implies a loss of £125,000, which is not sensible for a profit model.
- **[M1]** Substitutes $x = 15$ into the equation.
- **[A1]** Calculates $P = -125$ and gives a suitable contextual explanation (e.g., results in a loss).

#### **Part (b)**

**Step 2: Set up inequality for profit $> 80$**
$$100 - 6.25(x - 9)^2 > 80$$
$$20 > 6.25(x - 9)^2 \Rightarrow (x - 9)^2 < 3.2$$
- **[M1]** Sets up the inequality $100 - 6.25(x - 9)^2 > 80$ (or $= 80$).

**Step 3: Solve inequality**
$$-\sqrt{3.2} < x - 9 < \sqrt{3.2} \Rightarrow 9 - \sqrt{3.2} < x < 9 + \sqrt{3.2}$$
$9 - 1.7885... = 7.21...$
Least possible integer/selling price: $7.21$ (or exact $9 - \frac{4\sqrt{5}}{5}$).
- **[M1]** Solves the quadratic inequality/equation.
- **[A1]** Least price is $7.21$ (accept $7.22$).

#### **Part (c)**

**Step 4: State maximum profit and corresponding $x$**
**(i)** Maximum profit = $£100\,000$ (or $100$ thousand pounds).
**(ii)** Selling price = $£9$.
- **[B1]** Max profit correct (£100,000).
- **[B1]** Optimal selling price correct (£9).

---
topic: "Trigonometric Ratios"
subtopic: "Solving triangle problems"
---
### **Question 7**

In a triangle $ABC$, side $AB$ has length $10\text{ cm}$, side $AC$ has length $5\text{ cm}$, and angle $BAC = \theta$, where $\theta$ is measured in degrees. The area of triangle $ABC$ is $15\text{ cm}^2$.

**(a)** Find the two possible values of $\cos \theta$. **(4)**

Given that $BC$ is the longest side of the triangle,

**(b)** find the exact length of $BC$. **(2)**

**(Total 6 marks)**

### **Mark Scheme 7**

#### **Part (a)**

**Step 1: Use area formula**
$$\text{Area} = \frac{1}{2}ab \sin C \Rightarrow \frac{1}{2}(10)(5) \sin \theta = 15$$
$$25 \sin \theta = 15 \Rightarrow \sin \theta = \frac{15}{25} = \frac{3}{5}$$
- **[M1]** Uses area formula $\frac{1}{2}bc \sin A = 15$.
- **[A1]** Finds $\sin \theta = \frac{3}{5}$.

**Step 2: Find $\cos \theta$**
$$\cos^2 \theta = 1 - \left(\frac{3}{5}\right)^2 = \frac{16}{25} \Rightarrow \cos \theta = \pm \frac{4}{5}$$
- **[M1]** Uses $\cos^2 \theta + \sin^2 \theta = 1$ to find $\cos \theta$.
- **[A1]** $\cos \theta = \frac{4}{5}$ and $\cos \theta = -\frac{4}{5}$.

#### **Part (b)**

**Step 3: Apply cosine rule**
Since $BC$ is the longest side, $\theta$ must be obtuse, so $\cos \theta = -\frac{4}{5}$.
$$BC^2 = 10^2 + 5^2 - 2(10)(5)\left(-\frac{4}{5}\right)$$
$$BC^2 = 100 + 25 - 100\left(-\frac{4}{5}\right) = 125 + 80 = 205$$
- **[M1]** Selects the correct negative value for $\cos \theta$ and applies the cosine rule.
- **[A1]** Exact length $BC = \sqrt{205}$.

---
topic: "Differentiation"
subtopic: "Modelling with differentiation"
---
### **Question 8**

A lorry is driven between London and Newcastle.

In a simple model, the cost of the journey $£C$ when the lorry is driven at a steady speed of $v$ kilometres per hour is
$$C = \frac{1500}{v} + \frac{2}{11}v + 60$$

**(a)** Find, according to this model,

**(i)** the value of $v$ that minimises the cost of the journey,

**(ii)** the minimum cost of the journey.

(Solutions based entirely on graphical or numerical methods are not acceptable.) **(6)**

**(b)** Prove by using $\frac{d^2C}{dv^2}$ that the cost is minimised at the speed found in (a)(i). **(2)**

**(c)** State one limitation of this model. **(1)**

**(Total 9 marks)**

### **Mark Scheme 8**

#### **Part (a)**

**Step 1: Differentiate $C$ with respect to $v$**
$$\frac{dC}{dv} = -1500v^{-2} + \frac{2}{11}$$
- **[M1]** Attempts to differentiate $C$ (at least one term correct).
- **[A1]** Fully correct derivative $\frac{dC}{dv} = -\frac{1500}{v^2} + \frac{2}{11}$.

**Step 2: Set derivative to zero and solve for $v$**
$$-\frac{1500}{v^2} + \frac{2}{11} = 0 \Rightarrow \frac{2}{11} = \frac{1500}{v^2}$$
$$2v^2 = 16500 \Rightarrow v^2 = 8250 \Rightarrow v = \sqrt{8250} \approx 90.8$$
- **[M1]** Sets $\frac{dC}{dv} = 0$ and rearranges for $v^2$.
- **[A1]** $v = \sqrt{8250}$ or $90.8$ (accept $55\sqrt{\frac{10}{3}}$ or $90.83$).

**Step 3: Calculate minimum cost**
$$C = \frac{1500}{\sqrt{8250}} + \frac{2}{11}(\sqrt{8250}) + 60 \approx 93.0$$
- **[A1]** Minimum cost $£93.00$ (or exact form/93).

#### **Part (b)**

**Step 4: Find second derivative and test**
$$\frac{d^2C}{dv^2} = 3000v^{-3} = \frac{3000}{v^3}$$
For $v > 0$, $\frac{d^2C}{dv^2} > 0$ (or substitute $v = \sqrt{8250}$ to get $\frac{3000}{8250\sqrt{8250}} > 0$), therefore minimum.
- **[M1]** Finds second derivative correctly.
- **[A1]** Evaluates or explains why $\frac{d^2C}{dv^2} > 0$ at the stationary point, confirming a minimum.

#### **Part (c)**

**Step 5: State limitation**
Traffic conditions / speed limits / stops / fuel consumption not being constant.
- **[B1]** Any sensible limitation of the model.

---
topic: "Algebraic Methods"
subtopic: "Algebraic Methods"
---
### **Question 9**

$$\mathrm{g}(x) = 4x^3 - 12x^2 - 15x + 50$$

**(a)** Use the factor theorem to show that $(x + 2)$ is a factor of $\mathrm{g}(x)$. **(2)**

**(b)** Hence show that $\mathrm{g}(x)$ can be written in the form $\mathrm{g}(x) = (x + 2)(ax + b)^2$, where $a$ and $b$ are integers to be found. **(4)**

**Figure 2** _(A sketch of the cubic curve $y = \mathrm{g}(x)$, showing it crossing the x-axis at $(-2, 0)$, touching the x-axis at a positive value, and crossing the y-axis at $(0, 50)$)._

```tikz
\begin{tikzpicture}[scale=0.8]
  \draw[->] (-3,0) -- (4,0) node[below] {$x$};
  \draw[->] (0,-2) -- (0,5) node[left] {$y$};
  \draw[domain=-2.3:3.2, smooth, thick] plot (\x, { 0.2*(4*(\x)*(\x)*(\x) - 12*(\x)*(\x) - 15*(\x) + 50) });
  \fill (-2,0) circle (1.5pt) node[above left] {$(-2,0$};
  \fill (2.5,0) circle (1.5pt) node[above right] {touch};
  \node at (2.5,4) {$y = \mathrm{g}(x)$};
\end{tikzpicture}
```

Figure 2 shows a sketch of part of the curve with equation $y = \mathrm{g}(x)$.

**(c)** Use your answer to part (b), and the sketch, to deduce the values of $x$ for which

**(i)** $\mathrm{g}(x) \le 0$

**(ii)** $\mathrm{g}(2x) = 0$ **(3)**

**(Total 9 marks)**

### **Mark Scheme 9**

#### **Part (a)**

**Step 1: Evaluate $\mathrm{g}(-2)$**
$$\mathrm{g}(-2) = 4(-2)^3 - 12(-2)^2 - 15(-2) + 50 = -32 - 48 + 30 + 50 = 0$$
Since $\mathrm{g}(-2) = 0$, $(x + 2)$ is a factor.
- **[M1]** Substitutes $x = -2$ into $\mathrm{g}(x)$.
- **[A1]** Evaluates to $0$ and states a valid conclusion.

#### **Part (b)**

**Step 2: Divide by $(x + 2)$ or equate coefficients**
$$\mathrm{g}(x) = (x + 2)(4x^2 - 20x + 25)$$
- **[M1]** Attempts algebraic division or equating coefficients to find quadratic factor $4x^2 + Bx + C$.
- **[A1]** Correct quadratic factor $4x^2 - 20x + 25$.

**Step 3: Factorise quadratic**
$$4x^2 - 20x + 25 = (2x - 5)^2$$
So $\mathrm{g}(x) = (x + 2)(2x - 5)^2$, where $a = 2, b = -5$.
- **[M1]** Factorises the quadratic completely into linear brackets squared.
- **[A1]** States $\mathrm{g}(x) = (x + 2)(2x - 5)^2$ (or equivalent with integer $a, b$).

#### **Part (c)**

**Step 4: Solve inequality $\mathrm{g}(x) \le 0$**
Roots are $x = -2$ and $x = \frac{5}{2}$ (repeated).
From sketch, $\mathrm{g}(x) \le 0$ when $x \le -2$ or $x = \frac{5}{2}$.
- **[B1]** $x \le -2$ and $x = \frac{5}{2}$.

**Step 5: Solve $\mathrm{g}(2x) = 0$**
Roots of $\mathrm{g}(X) = 0$ are $X = -2$ and $X = \frac{5}{2}$.
$$2x = -2 \Rightarrow x = -1$$
$$2x = \frac{5}{2} \Rightarrow x = \frac{5}{4}$$
- **[M1]** Sets $2x$ equal to the roots of $\mathrm{g}(x) = 0$.
- **[A1]** $x = -1, x = \frac{5}{4}$.

---
topic: "Differentiation"
subtopic: "Finding the derivative"
---
### **Question 10**

Prove, from first principles, that the derivative of $x^3$ is $3x^2$. **(4)**

**(Total 4 marks)**

### **Mark Scheme 10**

#### **Part (a)**

**Step 1: Set up first principles limit**
$$\lim_{h \to 0} \frac{(x + h)^3 - x^3}{h}$$
- **[B1]** Correct expression $\frac{(x+h)^3 - x^3}{h}$.

**Step 2: Expand the cube**
$$(x + h)^3 = x^3 + 3x^2h + 3xh^2 + h^3$$
$$\frac{x^3 + 3x^2h + 3xh^2 + h^3 - x^3}{h} = \frac{3x^2h + 3xh^2 + h^3}{h}$$
- **[M1]** Correct expansion of $(x + h)^3$ and subtraction of $x^3$.

**Step 3: Simplify and take limit**
$$= 3x^2 + 3xh + h^2$$
As $h \to 0$, $3x^2 + 3xh + h^2 \to 3x^2$.
- **[A1]** Divides by $h$ to get $3x^2 + 3xh + h^2$.
- **[A1]** Takes limit as $h \to 0$ with clear concluding statement.

---
topic: "Binomial Expansion"
subtopic: "The binomial expansion"
---
### **Question 11**

**(a)** Find the first 3 terms, in ascending powers of $x$, of the binomial expansion of
$$\left(2 - \frac{x}{16}\right)^9$$
giving each term in its simplest form. **(4)**

$$\mathrm{f}(x) = (a + bx)\left(2 - \frac{x}{16}\right)^9, \quad \text{where } a \text{ and } b \text{ are constants}$$

Given that the first two terms, in ascending powers of $x$, in the series expansion of $\mathrm{f}(x)$ are $128$ and $36x$,

**(b)** find the value of $a$, **(2)**

**(c)** find the value of $b$. **(2)**

**(Total 8 marks)**

### **Mark Scheme 11**

#### **Part (a)**

**Step 1: Expand binomial**
$$\left(2 - \frac{x}{16}\right)^9 = 2^9 + \binom{9}{1}2^8\left(-\frac{x}{16}\right) + \binom{9}{2}2^7\left(-\frac{x}{16}\right)^2$$
$$= 512 + 9(256)\left(-\frac{x}{16}\right) + 36(128)\left(\frac{x^2}{256}\right)$$
- **[M1]** Correct structure of binomial coefficients and powers.
- **[A1]** Correct unsimplified terms: $512, -144x, 18x^2$ (or similar).

**Step 2: Simplify terms**
$$= 512 - 144x + 18x^2$$
- **[A1]** All three terms fully simplified.

#### **Part (b)**

**Step 3: Multiply by $(a + bx)$ and match constant term**
$$\mathrm{f}(x) = (a + bx)(512 - 144x + 18x^2 + \dots) = 512a + (-144a + 512b)x + \dots$$
Constant term: $512a = 128 \Rightarrow a = \frac{128}{512} = \frac{1}{4}$.
- **[M1]** Multiplies expansion by $(a + bx)$ and sets constant term equal to 128.
- **[A1]** $a = \frac{1}{4}$ (or $0.25$).

#### **Part (c)**

**Step 4: Match coefficient of $x$**
$$-144a + 512b = 36$$
Substitute $a = \frac{1}{4}$:
$$-144\left(\frac{1}{4}\right) + 512b = 36 \Rightarrow -36 + 512b = 36$$
$$512b = 72 \Rightarrow b = \frac{72}{512} = \frac{9}{64}$$
- **[M1]** Equates coefficient of $x$ to 36 and substitutes value of $a$.
- **[A1]** $b = \frac{9}{64}$ (or $0.140625$).

---
topic: "Trigonometric Identities and Equations"
subtopic: "Equations and identities"
---
### **Question 12**

**(a)** Show that the equation
$$4\cos \theta - 1 = 2\sin \theta \tan \theta$$
can be written in the form
$$6\cos^2 \theta - \cos \theta - 2 = 0$$ **(4)**

**(b)** Hence solve, for $0 \le x < 90^{\circ}$,
$$4\cos 3x - 1 = 2\sin 3x \tan 3x$$
giving your answers, where appropriate, to one decimal place.
(Solutions based entirely on graphical or numerical methods are not acceptable.) **(4)**

**(Total 8 marks)**

### **Mark Scheme 12**

#### **Part (a)**

**Step 1: Substitute $\tan \theta = \frac{\sin \theta}{\cos \theta}$**
$$4\cos \theta - 1 = 2\sin \theta \left(\frac{\sin \theta}{\cos \theta}\right)$$
- **[M1]** Replaces $\tan \theta$ with $\frac{\sin \theta}{\cos \theta}$.

**Step 2: Clear denominator**
$$4\cos^2 \theta - \cos \theta = 2\sin^2 \theta$$
- **[M1]** Multiplies through by $\cos \theta$.

**Step 3: Use $\sin^2 \theta = 1 - \cos^2 \theta$**
$$4\cos^2 \theta - \cos \theta = 2(1 - \cos^2 \theta)$$
$$4\cos^2 \theta - \cos \theta = 2 - 2\cos^2 \theta$$
$$6\cos^2 \theta - \cos \theta - 2 = 0$$
- **[A1]** Uses $\sin^2 \theta = 1 - \cos^2 \theta$ correctly.
- **[A1]** Reaches required quadratic equation with no errors.

#### **Part (b)**

**Step 4: Solve for $\cos 3x$**
$$(3\cos 3x - 2)(2\cos 3x + 1) = 0$$
$$\cos 3x = \frac{2}{3} \quad \text{or} \quad \cos 3x = -\frac{1}{2}$$
- **[M1]** Solves quadratic for $\cos 3x$.

**Step 5: Find values for $3x$**
For $\cos 3x = \frac{2}{3}$:
$$3x = 48.189^{\circ}, 311.811^{\circ}, 408.189^{\circ}, \dots$$
For $\cos 3x = -\frac{1}{2}$:
$$3x = 120^{\circ}, 240^{\circ}, 480^{\circ}, \dots$$
Interval for $3x$: $0 \le 3x < 270^{\circ}$.
Valid values for $3x$: $48.2^{\circ}, 120^{\circ}$ (and $240^{\circ}$ depending on range, check $x$ range: $0 \le x < 90^{\circ} \Rightarrow 0 \le 3x < 270^{\circ}$).
- **[M1]** Finds correct angles for $3x$ within range $0 \le 3x < 270^{\circ}$.

**Step 6: Solve for $x$**
$$x = \frac{48.189^{\circ}}{3} \approx 16.1^{\circ}$$
$$x = \frac{120^{\circ}}{3} = 40.0^{\circ}$$
$$x = \frac{240^{\circ}}{3} = 80.0^{\circ}$$
- **[A1]** At least two correct solutions ($16.1^{\circ}, 40.0^{\circ}, 80.0^{\circ}$).
- **[A1]** All three correct solutions with no extra solutions in range.

---
topic: "Exponentials and Logarithms"
subtopic: "Logarithms and non-linear data"
---
### **Question 13**

**Figure 3** _(A sketch of a straight line graph of $\log_{10} V$ against $t$, with positive gradient and intercept at $4.8$ on the vertical axis)._

```tikz
\begin{tikzpicture}[scale=0.8]
  \draw[->] (0,0) -- (6,0) node[below] {$t$};
  \draw[->] (0,0) -- (0,5) node[left] {$\log_{10} V$};
  \draw[thick] (0,2) -- (5,4) node[right] {$l$};
  \node at (0,2) {$\bullet$};
  \node at (0,2.2) [left] {$4.8$};
\end{tikzpicture}
```

The value of a rare painting, $£V$, is modelled by the equation $V = pq^t$, where $p$ and $q$ are constants and $t$ is the number of years since the value of the painting was first recorded on 1st January 1980.

The line $l$ shown in Figure 3 illustrates the linear relationship between $t$ and $\log_{10} V$ since 1st January 1980.

The equation of line $l$ is $\log_{10} V = 0.05t + 4.8$.

**(a)** Find, to 4 significant figures, the value of $p$ and the value of $q$. **(4)**

**(b)** With reference to the model interpret

**(i)** the value of the constant $p$,

**(ii)** the value of the constant $q$. **(2)**

**(c)** Find the value of the painting, as predicted by the model, on 1st January 2010, giving your answer to the nearest hundred thousand pounds. **(2)**

**(Total 8 marks)**

### **Mark Scheme 13**

#### **Part (a)**

**Step 1: Take logarithms of the model equation**
$$\log_{10} V = \log_{10}(pq^t) = \log_{10} p + t \log_{10} q$$
Comparing with $\log_{10} V = 0.05t + 4.8$:
$$\log_{10} p = 4.8 \Rightarrow p = 10^{4.8} = 63095.7... \approx 63100$$
$$\log_{10} q = 0.05 \Rightarrow q = 10^{0.05} = 1.12201... \approx 1.122$$
- **[M1]** Applies logs to $V = pq^t$ to establish linear form.
- **[A1]** Correct expression for $\log_{10} p$ or $\log_{10} q$.
- **[A1]** $p = 63100$ (to 4 sf).
- **[A1]** $q = 1.122$ (to 4 sf).

#### **Part (b)**

**Step 2: Interpret constants**
**(i)** $p$ is the initial value of the painting (in pounds) on 1st January 1980 ($t = 0$).
**(ii)** $q$ is the factor by which the value of the painting increases each year.
- **[B1]** Correct interpretation of $p$.
- **[B1]** Correct interpretation of $q$.

#### **Part (c)**

**Step 3: Calculate value at 1st January 2010**
From 1980 to 2010 is $t = 30$ years.
$$\log_{10} V = 0.05(30) + 4.8 = 1.5 + 4.8 = 6.3$$
$$V = 10^{6.3} = 1995262...$$
To the nearest hundred thousand pounds: $£2,000,000$.
- **[M1]** Substitutes $t = 30$ into equation and evaluates $V$.
- **[A1]** $£2,000,000$ (or $2\,000\,000$).

---
topic: "Circles"
subtopic: "Equation of a circle"
---
### **Question 14**

The circle $C$ has equation
$$x^2 + y^2 - 6x + 10y + 9 = 0$$

**(a)** Find

**(i)** the coordinates of the centre of $C$,

**(ii)** the radius of $C$. **(3)**

The line with equation $y = kx$, where $k$ is a constant, cuts $C$ at two distinct points.

**(b)** Find the range of values for $k$. **(6)**

**(Total 9 marks)**

### **Mark Scheme 14**

#### **Part (a)**

**Step 1: Complete the square**
$$(x - 3)^2 - 9 + (y + 5)^2 - 25 + 9 = 0$$
$$(x - 3)^2 + (y + 5)^2 = 25$$
- **[M1]** Completes the square for $x$ and $y$.
- **[A1]** Centre $(3, -5)$.
- **[A1]** Radius $5$.

#### **Part (b)**

**Step 2: Substitute $y = kx$ into circle equation**
$$(x - 3)^2 + (kx + 5)^2 = 25$$
$$x^2 - 6x + 9 + k^2x^2 + 10kx + 25 = 25$$
$$(1 + k^2)x^2 + (10k - 6)x + 9 = 0$$
- **[M1]** Substitutes $y = kx$ into the equation of $C$ and rearranges into quadratic form.

**Step 3: Use discriminant for two distinct points**
For two distinct intersection points, discriminant $b^2 - 4ac > 0$.
$$(10k - 6)^2 - 4(1 + k^2)(9) > 0$$
$$100k^2 - 120k + 36 - 36 - 36k^2 > 0$$
$$64k^2 - 120k > 0 \Rightarrow 8k^2 - 15k > 0$$
- **[M1]** States $b^2 - 4ac > 0$ for distinct intersections.
- **[A1]** Correct quadratic inequality in $k$.

**Step 4: Solve inequality**
$$k(8k - 15) > 0$$
Critical values: $k = 0, k = \frac{15}{8}$.
Range: $k < 0$ or $k > \frac{15}{8}$.
- **[M1]** Finds critical values.
- **[A1]** $k < 0, k > \frac{15}{8}$ (or set notation / equivalent).

---
topic: "Integration"
subtopic: "Areas under curves"
---
### **Question 15**

**Figure 4** _(A sketch of the curve $C$ with equation $y = \frac{32}{x^2} + 3x - 8$, showing the point $P(4,6)$ and the normal line $l$ at $P$, bounding region $R$ with $x = 2$ and the x-axis)._

```tikz
\begin{tikzpicture}[scale=0.8]
  \draw[->] (-0.5,0) -- (6,0) node[below] {$x$};
  \draw[->] (0,-1) -- (0,7) node[left] {$y$};
  \draw[domain=1.5:5.5, smooth, thick] plot (\x, {32/(\x*\x) + 3*\x - 8});
  \draw[thick] (1, 6) -- (5, 2) node[right] {$l$};
  \fill (4,6) circle (1.5pt) node[above right] {$P(4,6)$};
  \draw[dashed] (2,0) -- (2, 4.8);
  \node at (2,0) [below] {$2$};
  \node at (3,2.5) {$R$};
\end{tikzpicture}
```

Figure 4 shows a sketch of part of the curve $C$ with equation
$$y = \frac{32}{x^2} + 3x - 8, \quad x > 0$$

The point $P(4, 6)$ lies on $C$.

The line $l$ is the normal to $C$ at the point $P$.

The region $R$, shown shaded in Figure 4, is bounded by the line $l$, the curve $C$, the line with equation $x = 2$ and the $x$-axis.

Show that the area of $R$ is $46$.

(Solutions based entirely on graphical or numerical methods are not acceptable.) **(10)**

**(Total 10 marks)**

### **Mark Scheme 15**

#### **Part (a)**

**Step 1: Differentiate to find gradient of tangent**
$$y = 32x^{-2} + 3x - 8 \Rightarrow \frac{dy}{dx} = -64x^{-3} + 3 = -\frac{64}{x^3} + 3$$
- **[M1]** Attempts to differentiate $y$ (powers decreased by 1).
- **[A1]** $\frac{dy}{dx} = -\frac{64}{x^3} + 3$.

**Step 2: Find gradient of normal at $x = 4$**
At $x = 4$, $\frac{dy}{dx} = -\frac{64}{4^3} + 3 = -\frac{64}{64} + 3 = 2$.
Gradient of normal $m_N = -\frac{1}{2}$.
- **[M1]** Evaluates gradient of tangent at $x = 4$ and uses $m_N = -\frac{1}{m_T}$.
- **[A1]** Gradient of normal is $-\frac{1}{2}$.

**Step 3: Find equation of normal $l$**
$$y - 6 = -\frac{1}{2}(x - 4) \Rightarrow y = -\frac{1}{2}x + 8$$
- **[M1]** Finds equation of straight line using $(4, 6)$ and gradient $-\frac{1}{2}$.
- **[A1]** $y = -\frac{1}{2}x + 8$ (or equivalent).

**Step 4: Find $x$-intercept of normal $l$**
When $y = 0$, $0 = -\frac{1}{2}x + 8 \Rightarrow x = 16$.
- **[B1]** Identifies $x$-intercept of normal is $16$.

**Step 5: Integrate curve between $2$ and $4$**
$$\int_2^4 \left(32x^{-2} + 3x - 8\right) dx = \left[-\frac{32}{x} + \frac{3}{2}x^2 - 8x\right]_2^4$$
At $x = 4$: $-\frac{32}{4} + \frac{3}{2}(16) - 8(4) = -8 + 24 - 32 = -16$.
At $x = 2$: $-\frac{32}{2} + \frac{3}{2}(4) - 8(2) = -16 + 6 - 16 = -26$.
Definite integral = $-16 - (-26) = 10$.
*(Note: Region under curve between 2 and 4 has negative signed area $-10$, but the geometric area below x-axis requires careful treatment or absolute value / splitting).*
- **[M1]** Integrates the curve function correctly.
- **[A1]** Correct integration $\left[-\frac{32}{x} + \frac{3}{2}x^2 - 8x\right]$.
- **[M1]** Substitutes limits $4$ and $2$ into the integrated function.

**Step 6: Calculate total area of region $R$**
Region $R$ consists of the area under the curve from $x = 2$ to $x = 4$ (treating magnitude as 10) plus the area under the normal line from $x = 4$ to $x = 16$.
Area under normal triangle: $\frac{1}{2} \times \text{base} \times \text{height} = \frac{1}{2} \times (16 - 4) \times 6 = \frac{1}{2} \times 12 \times 6 = 36$.
Total area = $10 + 36 = 46$.
- **[M1]** Calculates area under the normal line (as a triangle or via integration).
- **[A1]** Concludes total area is $46$ with complete valid working.
