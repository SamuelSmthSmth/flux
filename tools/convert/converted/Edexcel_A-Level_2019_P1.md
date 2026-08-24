---
topic: "Algebraic Methods"
subtopic: "The factor theorem"
---
### **Question 1**

$$\mathrm{f}(x) = 3x^3 + 2ax^2 - 4x + 5a$$

Given that $(x + 3)$ is a factor of $\mathrm{f}(x)$, find the value of the constant $a$. **(3)**

### **Mark Scheme 1**

**Step 1: Apply the factor theorem** Set $\mathrm{f}(-3) = 0$:
$$\mathrm{f}(-3) = 3(-3)^3 + 2a(-3)^2 - 4(-3) + 5a = 0$$

- **[M1]** Attempts $\mathrm{f}(-3) = 0$ or attempts algebraic division by $(x + 3)$ setting remainder to 0.

**Step 2: Simplify the equation in terms of $a$**
$$-81 + 18a + 12 + 5a = 0 \Rightarrow 23a - 69 = 0$$

- **[M1]** Simplifies to a linear equation in $a$.

**Step 3: Solve for $a$**
$$23a = 69 \Rightarrow a = 3$$

- **[A1]** Correct answer $a = 3$ with no errors seen.

---
topic: "Radians"
subtopic: "Small angle approximations"
---
### **Question 2**

**Figure 1** shows a plot of part of the curve with equation $y = \cos x$ where $x$ is measured in radians.

**Diagram 1**, on the opposite page, is a copy of **Figure 1**.

**(a)** Use **Diagram 1** to show why the equation
$$\cos x - 2x - \frac{1}{2} = 0$$
has only one real root, giving a reason for your answer. **(2)**

Given that the root of the equation is $\alpha$, and that $\alpha$ is small,

**(b)** use the small angle approximation for $\cos x$ to estimate the value of $\alpha$ to 3 decimal places. **(3)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Draw the line $y = 2x + \frac{1}{2}$ on Diagram 1 and explain the root count**
Rearrange $\cos x - 2x - \frac{1}{2} = 0$ to $\cos x = 2x + \frac{1}{2}$.

- **[M1]** Attempts to draw the straight line $y = 2x + \frac{1}{2}$ on the grid with positive gradient and $y$-intercept at $0.5$.
- **[A1]** Explains that there is only one point of intersection between the curve $y = \cos x$ and the line $y = 2x + \frac{1}{2}$, hence there is only one real root.

#### **Part (b)**

**Step 2: Apply the small angle approximation for $\cos x$**
Using $\cos \alpha \approx 1 - \frac{\alpha^2}{2}$:
$$1 - \frac{\alpha^2}{2} - 2\alpha - \frac{1}{2} = 0 \Rightarrow \frac{1}{2} - 2\alpha - \frac{\alpha^2}{2} = 0 \Rightarrow \alpha^2 + 4\alpha - 1 = 0$$

- **[M1]** Uses $\cos \alpha \approx 1 - \frac{\alpha^2}{2}$ to form a quadratic equation in $\alpha$.

**Step 3: Solve the quadratic equation for $\alpha$**
$$\alpha = \frac{-4 \pm \sqrt{4^2 - 4(1)(-1)}}{2} = \frac{-4 \pm \sqrt{20}}{2} = -2 \pm \sqrt{5}$$

- **[M1]** Solves their quadratic equation using the quadratic formula or completing the square to find the positive root.

$$\alpha = -2 + \sqrt{5} \approx 0.236068... \Rightarrow \alpha \approx 0.236$$

- **[A1]** $\alpha \approx 0.236$ (correct to 3 decimal places).

---
topic: "Differentiation"
subtopic: "The quotient rule"
---
### **Question 3**

$$y = \frac{5x^2 + 10x}{(x + 1)^2} \quad x \neq -1$$

**(a)** Show that $\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{A}{(x + 1)^n}$ where $A$ and $n$ are constants to be found. **(4)**

**(b)** Hence deduce the range of values for $x$ for which $\frac{\mathrm{d}y}{\mathrm{d}x} < 0$ **(1)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Apply the quotient rule or product rule**
Using the quotient rule with $u = 5x^2 + 10x$ and $v = (x + 1)^2$:
$$\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{(10x + 10)(x + 1)^2 - (5x^2 + 10x) \cdot 2(x + 1)}{(x + 1)^4}$$

- **[M1]** Applies the quotient rule (or product rule) with correct structure $\frac{u'v - uv'}{v^2}$.

**Step 2: Factorise $(x + 1)$ from the numerator**
$$\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{(x + 1) \left[ 10(x + 1)^2 - 2(5x^2 + 10x) \right]}{(x + 1)^4} = \frac{10(x + 1)^2 - 2(5x^2 + 10x)}{(x + 1)^3}$$

- **[M1]** Cancels or factorises $(x + 1)$ correctly from the numerator and denominator.

**Step 3: Simplify the numerator**
$$10(x^2 + 2x + 1) - 10x^2 - 20x = 10x^2 + 20x + 10 - 10x^2 - 20x = 10$$

- **[A1]** Numerator simplifies correctly to 10.

**Step 4: Write in the final required form**
$$\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{10}{(x + 1)^3}$$

- **[A1]** Correct final form with $A = 10$ and $n = 3$.

#### **Part (b)**

**Step 5: Deduce the range for $\frac{\mathrm{d}y}{\mathrm{d}x} < 0$**
Since $10 > 0$, $\frac{10}{(x + 1)^3} < 0 \Rightarrow (x + 1)^3 < 0 \Rightarrow x + 1 < 0 \Rightarrow x < -1$.

- **[B1]** $x < -1$

---
topic: "Binomial Expansion"
subtopic: "Expanding (a + bx)^n"
---
### **Question 4**

**(a)** Find the first three terms, in ascending powers of $x$, of the binomial expansion of
$$\frac{1}{\sqrt{4 - x}}$$
giving each coefficient in its simplest form. **(4)**

The expansion can be used to find an approximation to $\sqrt{2}$

Possible values of $x$ that could be substituted into this expansion are:

- $x = -14$ because $\frac{1}{\sqrt{4 - x}} = \frac{1}{\sqrt{18}} = \frac{\sqrt{2}}{6}$
- $x = 2$ because $\frac{1}{\sqrt{4 - x}} = \frac{1}{\sqrt{2}} = \frac{\sqrt{2}}{2}$
- $x = -\frac{1}{2}$ because $\frac{1}{\sqrt{4 - x}} = \frac{1}{\sqrt{\frac{9}{2}}} = \frac{\sqrt{2}}{3}$

**(b)** Without evaluating your expansion,

**(i)** state, giving a reason, which of the three values of $x$ should not be used **(1)**

**(ii)** state, giving a reason, which of the three values of $x$ would lead to the most accurate approximation to $\sqrt{2}$ **(1)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Rewrite $\frac{1}{\sqrt{4 - x}}$ in index form and factor out 4**
$$\frac{1}{\sqrt{4 - x}} = (4 - x)^{-\frac{1}{2}} = 4^{-\frac{1}{2}} \left( 1 - \frac{x}{4} \right)^{-\frac{1}{2}} = \frac{1}{2} \left( 1 - \frac{x}{4} \right)^{-\frac{1}{2}}$$

- **[B1]** Factors out $4^{-\frac{1}{2}}$ or $\frac{1}{2}$ correctly.

**Step 2: Expand $\left( 1 - \frac{x}{4} \right)^{-\frac{1}{2}}$ using the binomial theorem**
$$\left( 1 - \frac{x}{4} \right)^{-\frac{1}{2}} = 1 + \left(-\frac{1}{2}\right)\left(-\frac{x}{4}\right) + \frac{\left(-\frac{1}{2}\right)\left(-\frac{3}{2}\right)}{2!}\left(-\frac{x}{4}\right)^2 + \dots = 1 + \frac{x}{8} + \frac{3}{128}x^2 + \dots$$

- **[M1]** Valid attempt at binomial expansion with correct structure for $x$ and $x^2$ terms.

**Step 3: Multiply through by $\frac{1}{2}$**
$$\frac{1}{2} \left( 1 + \frac{x}{8} + \frac{3}{128}x^2 \right) = \frac{1}{2} + \frac{1}{16}x + \frac{3}{256}x^2$$

- **[A1]** First two terms correct: $\frac{1}{2} + \frac{1}{16}x$.
- **[A1]** Third term correct: $\frac{3}{256}x^2$.

#### **Part (b)**

**Step 4: Answer (b)(i)**
$x = -14$ should not be used because the expansion is only valid for $|x| < 4$ (or $\left|-\frac{x}{4}\right| < 1$).

- **[B1]** States $x = -14$ with a valid reason referencing validity $|x| < 4$.

**Step 5: Answer (b)(ii)**
$x = -\frac{1}{2}$ because $\left|-\frac{1}{2}\right| < |2|$ (it is closest to zero), so higher power terms will be smallest and the series converges most rapidly.

- **[B1]** States $x = -\frac{1}{2}$ with a valid reason referencing proximity to 0.

---
topic: "Quadratics"
subtopic: "Completing the square"
---
### **Question 5**

$$\mathrm{f}(x) = 2x^2 + 4x + 9 \quad x \in \mathbb{R}$$

**(a)** Write $\mathrm{f}(x)$ in the form $a(x + b)^2 + c$, where $a$, $b$ and $c$ are integers to be found. **(3)**

**(b)** Sketch the curve with equation $y = \mathrm{f}(x)$ showing any points of intersection with the coordinate axes and the coordinates of any turning point. **(3)**

**(c) (i)** Describe fully the transformation that maps the curve with equation $y = \mathrm{f}(x)$ onto the curve with equation $y = \mathrm{g}(x)$ where
$$\mathrm{g}(x) = 2(x - 2)^2 + 4x - 3 \quad x \in \mathbb{R}$$

**(ii)** Find the range of the function
$$\mathrm{h}(x) = \frac{21}{2x^2 + 4x + 9} \quad x \in \mathbb{R}$$ **(4)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Complete the square on $2x^2 + 4x + 9$**
$$\mathrm{f}(x) = 2(x^2 + 2x) + 9 = 2\left[(x + 1)^2 - 1\right] + 9 = 2(x + 1)^2 + 7$$

- **[M1]** Factorises out 2 or completes square on $x^2 + 2x$.
- **[A1]** $a = 2, b = 1$
- **[A1]** $c = 7$

#### **Part (b)**

**Step 2: Sketch the parabola $y = \mathrm{f}(x)$**
**Figure 2** shows a U-shaped parabola in the 1st and 2nd quadrants above the x-axis.

- **[B1]** U-shaped parabola completely above the $x$-axis.
- **[B1]** Correct $y$-intercept at $(0, 9)$.
- **[B1]** Minimum/turning point labelled at $(-1, 7)$.

#### **Part (c)**

**Step 3: Simplify $\mathrm{g}(x)$ and identify the transformation**
$$\mathrm{g}(x) = 2(x - 2)^2 + 4(x - 2 + 2) - 3 = 2(x - 2)^2 + 4(x - 2) + 5 = 2((x - 2) + 1)^2 + 7 = 2(x - 1)^2 + 7 = \mathrm{f}(x - 2)$$

- **[M1]** Attempts to express $\mathrm{g}(x)$ in completed square form or as $\mathrm{f}(x - 2)$.
- **[A1]** Translation by vector $\begin{pmatrix} 2 \\ 0 \end{pmatrix}$ (or 2 units in the positive $x$-direction).

**Step 4: Find the range of $\mathrm{h}(x) = \frac{21}{\mathrm{f}(x)}$**
Since $\mathrm{f}(x) \ge 7$ for all $x \in \mathbb{R}$, the maximum value of $\mathrm{h}(x)$ is $\frac{21}{7} = 3$.
As $x \to \pm\infty$, $\mathrm{f}(x) \to \infty$, so $\mathrm{h}(x) \to 0^+$.

- **[M1]** Uses the minimum value of $\mathrm{f}(x) = 7$ to find the maximum value of 3.
- **[A1]** $0 < \mathrm{h}(x) \le 3$ (or $(0, 3]$).

---
topic: "Trigonometric Identities and Equations"
subtopic: "Harder trigonometric equations"
---
### **Question 6**

**(a)** Solve, for $-180^\circ \le \theta \le 180^\circ$, the equation
$$5 \sin 2\theta = 9 \tan \theta$$
giving your answers, where necessary, to one decimal place.

[Solutions based entirely on graphical or numerical methods are not acceptable.] **(6)**

**(b)** Deduce the smallest positive solution to the equation
$$5 \sin (2x - 50^\circ) = 9 \tan (x - 25^\circ)$$ **(2)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Apply double angle and tangent identities**
$$5(2 \sin \theta \cos \theta) = 9 \frac{\sin \theta}{\cos \theta}$$

- **[M1]** Uses $\sin 2\theta = 2\sin\theta\cos\theta$ and $\tan\theta = \frac{\sin\theta}{\cos\theta}$.

**Step 2: Factorise the equation**
$$10 \sin \theta \cos^2 \theta - 9 \sin \theta = 0 \Rightarrow \sin \theta (10 \cos^2 \theta - 9) = 0$$

- **[M1]** Rearranges to form a factorised equation or finds $\cos^2\theta = 0.9$.

**Step 3: Solve $\sin \theta = 0$**
$$\theta = -180^\circ, 0^\circ, 180^\circ$$

- **[B1]** Gives solutions $\theta = 0, \pm 180^\circ$.

**Step 4: Solve $\cos^2 \theta = 0.9 \Rightarrow \cos \theta = \pm \sqrt{0.9}$**
$$\cos \theta = 0.94868... \Rightarrow \theta = \pm 18.43...^\circ \approx \pm 18.4^\circ$$
$$\cos \theta = -0.94868... \Rightarrow \theta = \pm (180^\circ - 18.43...^\circ) = \pm 161.56...^\circ \approx \pm 161.6^\circ$$

- **[M1]** Solves $\cos^2\theta = 0.9$ to get $\cos\theta = \pm \sqrt{0.9}$ and finds angle solutions.
- **[A1]** $\pm 18.4^\circ$
- **[A1]** $\pm 161.6^\circ$

#### **Part (b)**

**Step 5: Relate the equation to part (a)**
Comparing $5 \sin(2(x - 25^\circ)) = 9 \tan(x - 25^\circ)$ with $5 \sin 2\theta = 9 \tan \theta$, we have $\theta = x - 25^\circ \Rightarrow x = \theta + 25^\circ$.

- **[M1]** Identifies $\theta = x - 25^\circ$ or $x = \theta + 25^\circ$.

**Step 6: Find the smallest positive value of $x$**
Using $\theta = -18.43...^\circ$:
$$x = -18.43...^\circ + 25^\circ = 6.565...^\circ \approx 6.6^\circ$$

- **[A1]** $x = 6.6^\circ$ (or $6.57^\circ$).

---
topic: "Exponentials and Logarithms"
subtopic: "Exponential modelling"
---
### **Question 7**

In a simple model, the value, $£V$, of a car depends on its age, $t$, in years.

The following information is available for car $A$

- its value when new is $£20\,000$
- its value after one year is $£16\,000$

**(a)** Use an exponential model to form, for car $A$, a possible equation linking $V$ with $t$. **(4)**

The value of car $A$ is monitored over a 10-year period.
Its value after 10 years is $£2\,000$

**(b)** Evaluate the reliability of your model in light of this information. **(2)**

The following information is available for car $B$

- it has the same value, when new, as car $A$
- its value depreciates more slowly than that of car $A$

**(c)** Explain how you would adapt the equation found in (a) so that it could be used to model the value of car $B$. **(1)**

### **Mark Scheme 7**

#### **Part (a)**

**Step 1: Set up the exponential model form**
Let $V = A r^t$ or $V = A \mathrm{e}^{-kt}$. When new ($t = 0$), $V = 20000 \Rightarrow A = 20000$.

- **[M1]** Uses $V = A r^t$ or $V = A \mathrm{e}^{-kt}$ with $A = 20000$.

**Step 2: Find the rate/decay factor using $t = 1, V = 16000$**
$$16000 = 20000 r \Rightarrow r = 0.8$$
or $\mathrm{e}^{-k} = 0.8 \Rightarrow k = -\ln 0.8 \approx 0.223$.

- **[M1]** Substitutes $t = 1, V = 16000$ to solve for $r$ or $k$.
- **[A1]** $r = 0.8$ or $k \approx 0.223$.
- **[A1]** Correct equation: $V = 20000(0.8)^t$ or $V = 20000 \mathrm{e}^{-0.223t}$.

#### **Part (b)**

**Step 3: Calculate predicted value at $t = 10$**
$$V(10) = 20000(0.8)^{10} = 20000(0.107374) = £2147.48 \approx £2150$$

- **[M1]** Substitutes $t = 10$ into their model equation.

**Step 4: Evaluate reliability**
The predicted value of $£2147$ is very close to $£2000$ (difference of $£147$ or ~7%), so the model is reliable/reasonable.

- **[A1]** Valid evaluation concluding model is reliable because $£2147 \approx £2000$.

#### **Part (c)**

**Step 5: Adapt the equation for car $B$**
Increase the value of $r$ (e.g. from $0.8$ to a value closer to 1 like $0.85$), or decrease the value of $k$ (e.g. from $0.223$ to a smaller value like $0.15$).

- **[B1]** States that $r$ should be increased (closer to 1) or $k$ should be decreased.

---
topic: "Integration"
subtopic: "Areas under curves"
---
### **Question 8**

**Figure 2** shows a sketch of part of the curve with equation $y = x(x + 2)(x - 4)$.

The region $R_1$ shown shaded in **Figure 2** is bounded by the curve and the negative x-axis.

**(a)** Show that the exact area of $R_1$ is $\frac{20}{3}$ **(4)**

The region $R_2$ also shown shaded in **Figure 2** is bounded by the curve, the positive x-axis and the line with equation $x = b$, where $b$ is a positive constant and $0 < b < 4$.

Given that the area of $R_1$ is equal to the area of $R_2$

**(b)** verify that $b$ satisfies the equation
$$(b + 2)^2 (3b^2 - 20b + 20) = 0$$ **(4)**

The roots of the equation $3b^2 - 20b + 20 = 0$ are $1.225$ and $5.442$ to 3 decimal places.
The value of $b$ is therefore $1.225$ to 3 decimal places.

**(c)** Explain, with the aid of a diagram, the significance of the root $5.442$ **(2)**

### **Mark Scheme 8**

#### **Part (a)**

**Step 1: Expand the polynomial $y = x(x + 2)(x - 4)$**
$$y = x(x^2 - 2x - 8) = x^3 - 2x^2 - 8x$$

- **[M1]** Expands $y = x(x + 2)(x - 4)$ to a 3-term polynomial.

**Step 2: Integrate between limits $-2$ and $0$**
$$\int_{-2}^0 (x^3 - 2x^2 - 8x) \, \mathrm{d}x = \left[ \frac{x^4}{4} - \frac{2x^3}{3} - 4x^2 \right]_{-2}^0$$

- **[M1]** Integrates term by term correctly.

**Step 3: Evaluate using limits $-2$ and $0$**
$$0 - \left( \frac{(-2)^4}{4} - \frac{2(-2)^3}{3} - 4(-2)^2 \right) = - \left( 4 + \frac{16}{3} - 16 \right) = - \left( -\frac{20}{3} \right) = \frac{20}{3}$$

- **[M1]** Substitutes limits $-2$ and $0$ into their integrated expression.
- **[A1]** cso Area = $\frac{20}{3}$.

#### **Part (b)**

**Step 4: Set up the integral for Area of $R_2$**
Since $R_2$ lies below the $x$-axis for $0 < b < 4$:
$$\text{Area}(R_2) = -\int_0^b (x^3 - 2x^2 - 8x) \, \mathrm{d}x = -\left[ \frac{b^4}{4} - \frac{2b^3}{3} - 4b^2 \right] = \frac{20}{3}$$

- **[M1]** Sets $-\left(\frac{b^4}{4} - \frac{2b^3}{3} - 4b^2\right) = \frac{20}{3}$ or $\int_0^b y \, \mathrm{d}x = -\frac{20}{3}$.

**Step 5: Rearrange into a quartic equation**
$$-\frac{b^4}{4} + \frac{2b^3}{3} + 4b^2 = \frac{20}{3} \Rightarrow -3b^4 + 8b^3 + 48b^2 = 80 \Rightarrow 3b^4 - 8b^3 - 48b^2 + 80 = 0$$

- **[M1]** Rearranges to $3b^4 - 8b^3 - 48b^2 + 80 = 0$.

**Step 6: Expand $(b + 2)^2 (3b^2 - 20b + 20)$**
$$(b^2 + 4b + 4)(3b^2 - 20b + 20) = 3b^4 - 20b^3 + 20b^2 + 12b^3 - 80b^2 + 80b + 12b^2 - 80b + 80 = 3b^4 - 8b^3 - 48b^2 + 80$$

- **[M1]** Expands $(b + 2)^2 (3b^2 - 20b + 20)$ or factorises $3b^4 - 8b^3 - 48b^2 + 80$.
- **[A1]** Fully correct verification showing both expressions are equal.

#### **Part (c)**

**Step 7: Explain the root $5.442$ with a diagram**
At $b = 5.442$, the net integrated area $\int_0^{5.442} y \, \mathrm{d}x = 0$.

- **[M1]** Sketch showing region below the $x$-axis between 0 and 4 and region above the $x$-axis between 4 and $5.442$.
- **[A1]** Explains that the region above the $x$-axis from $x = 4$ to $x = 5.442$ has an area equal to the region below the $x$-axis from $x = 0$ to $x = 4$ minus $\frac{20}{3}$, so $\int_0^{5.442} y \, \mathrm{d}x = -\frac{20}{3}$.

---
topic: "Exponentials and Logarithms"
subtopic: "Laws of logarithms"
---
### **Question 9**

Given that $a > b > 0$ and that $a$ and $b$ satisfy the equation
$$\log a - \log b = \log(a - b)$$

**(a)** show that
$$a = \frac{b^2}{b - 1}$$ **(3)**

**(b)** Write down the full restriction on the value of $b$, explaining the reason for this restriction. **(2)**

### **Mark Scheme 9**

#### **Part (a)**

**Step 1: Apply the logarithm subtraction law**
$$\log\left(\frac{a}{b}\right) = \log(a - b)$$

- **[M1]** Applies $\log a - \log b = \log\left(\frac{a}{b}\right)$.

**Step 2: Remove logarithms and expand**
$$\frac{a}{b} = a - b \Rightarrow a = b(a - b) \Rightarrow a = ab - b^2$$

- **[M1]** Removes logarithms and clears fraction.

**Step 3: Solve for $a$**
$$b^2 = ab - a = a(b - 1) \Rightarrow a = \frac{b^2}{b - 1}$$

- **[A1]** cso $a = \frac{b^2}{b - 1}$.

#### **Part (b)**

**Step 4: Determine the restriction on $b$**
Since $a > 0$ and $b > 0$, denominator $b - 1 > 0 \Rightarrow b > 1$.
Also $a > b \Rightarrow \frac{b^2}{b - 1} > b \Rightarrow \frac{b}{b - 1} > 1 \Rightarrow b > 1$.

- **[B1]** States $b > 1$.
- **[B1]** Gives valid reasoning showing $b > 1$ (e.g. $b - 1 > 0$ for positive $a$, or $a > b$).

---
topic: "Algebraic Methods"
subtopic: "Mathematical proof"
---
### **Question 10**

**(i)** Prove that for all $n \in \mathbb{N}$, $n^2 + 2$ is not divisible by 4. **(4)**

**(ii)** "Given $x \in \mathbb{R}$, the value of $|3x - 28|$ is greater than or equal to the value of $(x - 9)$."
State, giving a reason, if the above statement is always true, sometimes true or never true. **(2)**

### **Mark Scheme 10**

#### **Part (i)**

**Step 1: Consider Case 1 where $n$ is even**
Let $n = 2k$ for $k \in \mathbb{N}$:
$$n^2 + 2 = (2k)^2 + 2 = 4k^2 + 2$$
This gives a remainder of 2 when divided by 4, so it is not divisible by 4.

- **[M1]** Sets $n = 2k$ and computes $n^2 + 2 = 4k^2 + 2$.
- **[A1]** Shows $4k^2 + 2$ leaves remainder 2 upon division by 4.

**Step 2: Consider Case 2 where $n$ is odd**
Let $n = 2k + 1$ for $k \in \mathbb{N} \cup \{0\}$:
$$n^2 + 2 = (2k + 1)^2 + 2 = 4k^2 + 4k + 1 + 2 = 4(k^2 + k) + 3$$
This gives a remainder of 3 when divided by 4, so it is not divisible by 4.

- **[M1]** Sets $n = 2k + 1$ and computes $n^2 + 2 = 4(k^2 + k) + 3$.
- **[A1]** Fully correct proof covering both even and odd cases with clear conclusion.

#### **Part (ii)**

**Step 3: Test values or analyze the inequality $|3x - 28| \ge x - 9$**
For $x = 9.3$:
$$|3(9.3) - 28| = |27.9 - 28| = 0.1$$
$$x - 9 = 9.3 - 9 = 0.3$$
$0.1 \ge 0.3$ is FALSE.

For $x = 0$:
$$|3(0) - 28| = 28 \ge -9$$ is TRUE.

- **[M1]** States "sometimes true" and gives a counterexample (e.g. $x = 9.3$) AND an example where it is true (e.g. $x = 0$).
- **[A1]** States "Sometimes true" with complete justification.

---
topic: "Sequences and Series"
subtopic: "Geometric series"
---
### **Question 11**

A competitor is running a 20 kilometre race.

She runs each of the first 4 kilometres at a steady pace of 6 minutes per kilometre.
After the first 4 kilometres, she begins to slow down.

In order to estimate her finishing time, the time that she will take to complete each subsequent kilometre is modelled to be 5% greater than the time that she took to complete the previous kilometre.

Using the model,

**(a)** show that her time to run the first 6 kilometres is estimated to be 36 minutes 55 seconds, **(2)**

**(b)** show that her estimated time, in minutes, to run the $r\text{th}$ kilometre, for $5 \le r \le 20$, is
$$6 \times 1.05^{r - 4}$$ **(1)**

**(c)** estimate the total time, in minutes and seconds, that she will take to complete the race. **(4)**

### **Mark Scheme 11**

#### **Part (a)**

**Step 1: Calculate time for first 6 kilometres**
First 4 km: $4 \times 6 = 24$ minutes.
5th km: $6 \times 1.05 = 6.3$ minutes.
6th km: $6.3 \times 1.05 = 6.615$ minutes.
Total time = $24 + 6.3 + 6.615 = 36.915$ minutes.

- **[M1]** Calculates $24 + 6(1.05) + 6(1.05)^2$.

**Step 2: Convert to minutes and seconds**
$36.915$ minutes = 36 minutes + $(0.915 \times 60)$ seconds = 36 minutes $54.9$ seconds $\approx 36$ minutes 55 seconds.

- **[A1]** cso 36 minutes 55 seconds.

#### **Part (b)**

**Step 3: Derive formula for the $r\text{th}$ kilometre**
For $r = 5$, time = $6 \times 1.05^1$.
For $r = 6$, time = $6 \times 1.05^2$.
Since $r - 4$ represents the number of 5% increases after km 4, time for $r\text{th}$ km = $6 \times 1.05^{r - 4}$.

- **[B1]** Explains or shows $r - 4$ is the number of increases applied for $5 \le r \le 20$.

#### **Part (c)**

**Step 4: Use geometric series sum formula for kilometres 5 to 20**
Number of terms $n = 20 - 5 + 1 = 16$.
First term $a = 6 \times 1.05 = 6.3$.
Common ratio $r = 1.05$.
$$S_{16} = \frac{a(r^{16} - 1)}{r - 1} = \frac{6.3(1.05^{16} - 1)}{1.05 - 1} = \frac{6.3(2.18287... - 1)}{0.05} = 149.0418... \text{ minutes}$$

- **[M1]** Identifies $a = 6.3, r = 1.05, n = 16$ and uses $S_n = \frac{a(r^n - 1)}{r - 1}$.
- **[A1]** $S_{16} \approx 149.04$ minutes.

**Step 5: Calculate total time**
$$\text{Total time} = 24 + 149.0418... = 173.0418... \text{ minutes}$$

- **[M1]** Adds 24 minutes for the first 4 km.

**Step 6: Convert to minutes and seconds**
$173.0418...$ minutes = 173 minutes + $(0.0418... \times 60)$ seconds $\approx 173$ minutes 3 seconds.

- **[A1]** 173 minutes 3 seconds (or 173 mins 2.5 secs).

---
topic: "Differentiation"
subtopic: "Modelling with differentiation"
---
### **Question 12**

$$\mathrm{f}(x) = 10 \mathrm{e}^{-0.25x} \sin x \quad x \ge 0$$

**(a)** Show that the $x$ coordinates of the turning points of the curve with equation $y = \mathrm{f}(x)$ satisfy the equation $\tan x = 4$ **(4)**

**Figure 3** shows a sketch of part of the curve with equation $y = \mathrm{f}(x)$.

**(b)** Sketch the graph of $H$ against $t$ where
$$H(t) = |10 \mathrm{e}^{-0.25t} \sin t| \quad t \ge 0$$
showing the long-term behaviour of this curve. **(2)**

The function $H(t)$ is used to model the height, in metres, of a ball above the ground $t$ seconds after it has been kicked.

Using this model, find

**(c)** the maximum height of the ball above the ground between the first and second bounce. **(3)**

**(d)** Explain why this model should not be used to predict the time of each bounce. **(1)**

### **Mark Scheme 12**

#### **Part (a)**

**Step 1: Differentiate $\mathrm{f}(x)$ using the product rule**
$$\mathrm{f}'(x) = 10(-0.25)\mathrm{e}^{-0.25x} \sin x + 10 \mathrm{e}^{-0.25x} \cos x = \mathrm{e}^{-0.25x} (-2.5 \sin x + 10 \cos x)$$

- **[M1]** Applies product rule correctly to differentiate $\mathrm{f}(x)$.
- **[A1]** Correct derivative expression.

**Step 2: Set $\mathrm{f}'(x) = 0$ and solve for $\tan x$**
Since $\mathrm{e}^{-0.25x} \neq 0$:
$$-2.5 \sin x + 10 \cos x = 0 \Rightarrow 10 \cos x = 2.5 \sin x$$

- **[M1]** Sets $\mathrm{f}'(x) = 0$ and rearranges for $\frac{\sin x}{\cos x}$.

$$\tan x = \frac{10}{2.5} = 4$$

- **[A1]** cso $\tan x = 4$.

#### **Part (b)**

**Step 3: Sketch $H(t) = |10 \mathrm{e}^{-0.25t} \sin t|$**
**Figure 3** reflected upwards so all loops lie above the $t$-axis with decaying amplitude.

- **[B1]** Reflected curve with all loops positive (bouncing shape above $t$-axis).
- **[B1]** Amplitudes decaying towards 0 as $t \to \infty$.

#### **Part (c)**

**Step 4: Find $t$ for maximum between 1st and 2nd bounce**
Bounces occur when $\sin t = 0 \Rightarrow t = 0, \pi, 2\pi, \dots$
Between first bounce ($t = \pi$) and second bounce ($t = 2\pi$), turning point occurs at:
$$t = \pi + \arctan(4) \approx 3.14159 + 1.32582 = 4.4674...$$

- **[M1]** Uses $t = \pi + \arctan(4) \approx 4.467$.

**Step 5: Evaluate $H(t)$ at $t \approx 4.467$**
$$H(4.467) = |10 \mathrm{e}^{-0.25(4.467)} \sin(4.467)| = 10 \mathrm{e}^{-1.11685} \times |-0.97014| \approx 3.175... \text{ m}$$

- **[M1]** Substitutes $t = \pi + \arctan(4)$ into $H(t)$.
- **[A1]** $3.18$ metres (or $3.17$ m).

#### **Part (d)**

**Step 6: Reason about bounce time model limitations**
The time between bounces according to $\sin t = 0$ is constant ($\pi \approx 3.14$ seconds), but in reality, consecutive bounce intervals decrease over time.

- **[B1]** States that time between bounces in reality decreases / is not constant ($\pi$ seconds).

---
topic: "Algebraic Methods"
subtopic: "Partial fractions"
---
### **Question 13**

The curve $C$ with equation
$$y = \frac{p - 3x}{(2x - q)(x + 3)} \quad x \in \mathbb{R}, x \neq -3, x \neq 2$$
where $p$ and $q$ are constants, passes through the point $\left(3, \frac{1}{2}\right)$ and has two vertical asymptotes with equations $x = 2$ and $x = -3$.

**(a) (i)** Explain why you can deduce that $q = 4$

**(ii)** Show that $p = 15$ **(3)**

**Figure 4** shows a sketch of part of the curve $C$. The region $R$, shown shaded in **Figure 4**, is bounded by the curve $C$, the x-axis and the line with equation $x = 3$.

**(b)** Show that the exact value of the area of $R$ is $a \ln 2 + b \ln 3$, where $a$ and $b$ are rational constants to be found. **(8)**

### **Mark Scheme 13**

#### **Part (a)**

**Step 1: Explain $q = 4$**
Vertical asymptotes occur where the denominator is zero. Since $x = 2$ is an asymptote, $2(2) - q = 0 \Rightarrow q = 4$.

- **[B1]** Explains $2(2) - q = 0 \Rightarrow q = 4$.

**Step 2: Find $p$ using point $\left(3, \frac{1}{2}\right)$**
$$\frac{1}{2} = \frac{p - 3(3)}{(2(3) - 4)(3 + 3)} \Rightarrow \frac{1}{2} = \frac{p - 9}{12} \Rightarrow p - 9 = 6 \Rightarrow p = 15$$

- **[M1]** Substitutes $\left(3, \frac{1}{2}\right)$ and $q = 4$ into equation.
- **[A1]** cso $p = 15$.

#### **Part (b)**

**Step 3: Find the $x$-intercept of $C$**
$y = 0 \Rightarrow 15 - 3x = 0 \Rightarrow x = 5$.
So the limits of integration for region $R$ are $x = 3$ and $x = 5$.

- **[B1]** Identifies $x$-intercept at $x = 5$.

**Step 4: Express $y$ in partial fractions**
$$\frac{15 - 3x}{(2x - 4)(x + 3)} = \frac{A}{2x - 4} + \frac{B}{x + 3}$$
$$15 - 3x = A(x + 3) + B(2x - 4)$$
Let $x = 2$: $15 - 6 = 5A \Rightarrow A = \frac{9}{5}$.
Let $x = -3$: $15 + 9 = -10B \Rightarrow B = -\frac{12}{5}$.

- **[M1]** Sets up partial fractions equation.
- **[A1]** $A = \frac{9}{5}$
- **[A1]** $B = -\frac{12}{5}$

**Step 5: Integrate partial fractions**
$$\int_3^5 \left( \frac{9}{5(2x - 4)} - \frac{12}{5(x + 3)} \right) \, \mathrm{d}x = \left[ \frac{9}{10} \ln|2x - 4| - \frac{12}{5} \ln|x + 3| \right]_3^5$$

- **[M1]** Integrates to log terms with correct chain rule factors.
- **[A1]** Correct integrated expression.

**Step 6: Substitute limits 3 and 5**
$$\text{At } x = 5: \quad \frac{9}{10} \ln 6 - \frac{12}{5} \ln 8$$
$$\text{At } x = 3: \quad \frac{9}{10} \ln 2 - \frac{12}{5} \ln 6$$
$$\text{Area} = \frac{33}{10} \ln 6 - \frac{12}{5} \ln 8 - \frac{9}{10} \ln 2$$

- **[M1]** Applies limits 3 and 5 correctly.

**Step 7: Simplify logarithms into $a \ln 2 + b \ln 3$**
Using $\ln 6 = \ln 2 + \ln 3$ and $\ln 8 = 3\ln 2$:
$$\text{Area} = \frac{33}{10}(\ln 2 + \ln 3) - \frac{12}{5}(3 \ln 2) - \frac{9}{10} \ln 2$$
$$= \left( \frac{33}{10} - \frac{36}{5} - \frac{9}{10} \right) \ln 2 + \frac{33}{10} \ln 3 = -\frac{24}{5} \ln 2 + \frac{33}{10} \ln 3$$

- **[A1]** $a = -\frac{24}{5}, b = \frac{33}{10}$ (or $-\frac{24}{5} \ln 2 + \frac{33}{10} \ln 3$).

---
topic: "Differentiation"
subtopic: "Parametric differentiation"
---
### **Question 14**

The curve $C$, in the standard Cartesian plane, is defined by the equation
$$x = 4 \sin 2y \quad -\frac{\pi}{4} < y < \frac{\pi}{4}$$

The curve $C$ passes through the origin $O$.

**(a)** Find the value of $\frac{\mathrm{d}y}{\mathrm{d}x}$ at the origin. **(2)**

**(b) (i)** Use the small angle approximation for $\sin 2y$ to find an equation linking $x$ and $y$ for points close to the origin.

**(ii)** Explain the relationship between the answers to (a) and (b)(i). **(2)**

**(c)** Show that, for all points $(x, y)$ lying on $C$,
$$\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{1}{a\sqrt{b - x^2}}$$
where $a$ and $b$ are constants to be found. **(3)**

### **Mark Scheme 14**

#### **Part (a)**

**Step 1: Differentiate $x$ with respect to $y$**
$$\frac{\mathrm{d}x}{\mathrm{d}y} = 8 \cos 2y \Rightarrow \frac{\mathrm{d}y}{\mathrm{d}x} = \frac{1}{8 \cos 2y}$$

- **[M1]** Differentiates $x = 4\sin 2y$ to get $\frac{\mathrm{d}x}{\mathrm{d}y} = k \cos 2y$.

**Step 2: Evaluate at origin $(0, 0) \Rightarrow y = 0$**
$$\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{1}{8 \cos 0} = \frac{1}{8}$$

- **[A1]** $\frac{1}{8}$

#### **Part (b)**

**Step 3: Answer (b)(i)**
Using $\sin 2y \approx 2y$:
$$x = 4(2y) \Rightarrow x = 8y \quad (\text{or } y = \frac{1}{8}x)$$

- **[B1]** $y = \frac{1}{8}x$ or $x = 8y$.

**Step 4: Answer (b)(ii)**
The gradient of the straight line $y = \frac{1}{8}x$ is $\frac{1}{8}$, which is equal to the value of $\frac{\mathrm{d}y}{\mathrm{d}x}$ at the origin found in part (a) (it represents the tangent to $C$ at $O$).

- **[B1]** Explains that $\frac{1}{8}$ is the gradient of the tangent line at the origin.

#### **Part (c)**

**Step 5: Express $\cos 2y$ in terms of $x$**
$\sin 2y = \frac{x}{4}$
Using $\cos^2 2y = 1 - \sin^2 2y = 1 - \left(\frac{x}{4}\right)^2 = 1 - \frac{x^2}{16} = \frac{16 - x^2}{16}$:
$$\cos 2y = \frac{\sqrt{16 - x^2}}{4}$$

- **[M1]** Uses $\cos 2y = \sqrt{1 - \sin^2 2y}$ to write $\cos 2y$ in terms of $x$.

**Step 6: Substitute $\cos 2y$ into $\frac{\mathrm{d}y}{\mathrm{d}x}$**
$$\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{1}{8 \cos 2y} = \frac{1}{8 \left( \frac{\sqrt{16 - x^2}}{4} \right)} = \frac{1}{2 \sqrt{16 - x^2}}$$

- **[M1]** Substitutes $\cos 2y$ into $\frac{\mathrm{d}y}{\mathrm{d}x}$.
- **[A1]** Correct form with $a = 2$ and $b = 16$.
