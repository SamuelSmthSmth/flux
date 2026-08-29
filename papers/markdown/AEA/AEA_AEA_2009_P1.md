---
topic: "Functions and Graphs"
subtopic: "y = |f(x)| and y = f(|x|)"
---
### **Question 1**

**(a)** On the same diagram, sketch

$$y = (x + 1)(2 - x) \quad \text{and} \quad y = x^2 - 2|x|$$

Mark clearly the coordinates of the points where these curves cross the coordinate axes. **(3)**

**(b)** Find the $x$-coordinates of the points of intersection of these two curves. **(5)**

**(Total 8 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Sketch $y = (x+1)(2-x)$**

An inverted parabola crossing the $x$-axis at $(-1, 0)$ and $(2, 0)$, and the $y$-axis at $(0, 2)$.

- **[B1]** Correct shape and intercepts for $y = (x+1)(2-x)$.

**Step 2: Sketch $y = x^2 - 2|x|$**

A W-shaped curve crossing the $x$-axis at $(-2, 0)$, $(0, 0)$, and $(2, 0)$, with minimum points at $(-1, -1)$ and $(1, -1)$.

- **[B2]** Correct shape and intercepts for $y = x^2 - 2|x|$ (1 mark for the right-hand side $x \ge 0$, 1 mark for the left-hand side $x < 0$).

#### **Part (b)**

**Step 3: Set up equations for $x \ge 0$**

For $x \ge 0$, the equation is:

$$(x+1)(2-x) = x^2 - 2x \Rightarrow -x^2 + x + 2 = x^2 - 2x$$

$$2x^2 - 3x - 2 = 0$$

- **[M1]** Equates the two functions for $x \ge 0$.

**Step 4: Solve for $x \ge 0$**

$$(2x+1)(x-2) = 0 \Rightarrow x = 2 \quad \text{or} \quad x = -\frac{1}{2}$$

Since $x \ge 0$, $x = 2$.

- **[A1]** Correctly identifies $x = 2$ as a solution.

**Step 5: Set up equations for $x < 0$**

For $x < 0$, the equation is:

$$(x+1)(2-x) = x^2 + 2x \Rightarrow -x^2 + x + 2 = x^2 + 2x$$

$$2x^2 + x - 2 = 0$$

- **[M1]** Equates the two functions for $x < 0$.

**Step 6: Solve for $x < 0$**

$$x = \frac{-1 \pm \sqrt{1^2 - 4(2)(-2)}}{4} = \frac{-1 \pm \sqrt{17}}{4}$$

Since $x < 0$, we choose the negative root:

$$x = \frac{-1 - \sqrt{17}}{4}$$

- **[A1]** Correct method to solve the quadratic.
- **[A1]** Correctly identifies $x = \frac{-1 - \sqrt{17}}{4}$ and rejects the positive root.

---
topic: "Differentiation"
subtopic: "Gradients, tangents and normal"
---
### **Question 2**

The curve $C$ has equation $y = x^{\sin x}$, $x > 0$.

**(a)** Find the equation of the tangent to $C$ at the point where $x = \frac{\pi}{2}$. **(6)**

**(b)** Prove that this tangent touches $C$ at infinitely many points. **(3)**

**(Total 9 marks)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 7: Find the $y$-coordinate at $x = \frac{\pi}{2}$**

$$y = \left(\frac{\pi}{2}\right)^{\sin(\pi/2)} = \left(\frac{\pi}{2}\right)^1 = \frac{\pi}{2}$$

- **[B1]** Correct $y$-coordinate.

**Step 8: Use logarithmic differentiation to find $\frac{dy}{dx}$**

$$\ln y = \sin x \ln x$$

$$\frac{1}{y}\frac{dy}{dx} = \cos x \ln x + \frac{\sin x}{x}$$

- **[M1]** Takes logarithms of both sides.
- **[M1]** Differentiates using the product rule.
- **[A1]** Correct expression for $\frac{dy}{dx}$.

**Step 9: Evaluate the gradient at $x = \frac{\pi}{2}$**

$$\frac{dy}{dx} = \left(\frac{\pi}{2}\right) \left( \cos\left(\frac{\pi}{2}\right)\ln\left(\frac{\pi}{2}\right) + \frac{\sin(\pi/2)}{\pi/2} \right) = \frac{\pi}{2} \left( 0 + \frac{1}{\pi/2} \right) = 1$$

- **[A1]** Correct gradient of $1$.

**Step 10: Find the equation of the tangent**

$$y - \frac{\pi}{2} = 1\left(x - \frac{\pi}{2}\right) \Rightarrow y = x$$

- **[A1]** Correct equation of the tangent.

#### **Part (b)**

**Step 11: Set up the equation for intersection**

$$x^{\sin x} = x \Rightarrow \ln(x^{\sin x}) = \ln x \Rightarrow \sin x \ln x = \ln x$$

$$(\sin x - 1)\ln x = 0$$

- **[M1]** Equates the curve and tangent equations and takes logarithms.

**Step 12: Find the points of intersection**

Either $\ln x = 0 \Rightarrow x = 1$, or $\sin x = 1 \Rightarrow x = 2n\pi + \frac{\pi}{2}$ for $n \in \mathbb{Z}$.

- **[A1]** Identifies the infinite set of solutions $x = 2n\pi + \frac{\pi}{2}$.

**Step 13: Verify tangency at these points**

At $x = 2n\pi + \frac{\pi}{2}$, the gradient of the curve is:

$$\frac{dy}{dx} = x^{\sin x} \left( \cos x \ln x + \frac{\sin x}{x} \right) = x^1 \left( 0 + \frac{1}{x} \right) = 1$$

Since the gradient of the curve equals the gradient of the tangent line ($1$) at all these points, the line touches the curve at infinitely many points.

- **[A1]** Complete proof showing the gradients are equal at these points.

---
topic: "Trigonometric Functions"
subtopic: "Inverse trigonometric functions"
---
### **Question 3**

**(a)** Solve, for $0 \le \theta < 2\pi$,

$$\sin\left(\frac{\pi}{3} - \theta\right) = \frac{1}{\sqrt{3}}\cos\theta$$ **(5)**

**(b)** Find the value of $x$ for which

$$\arcsin(1 - 2x) = \frac{\pi}{3} - \arcsin x, \quad 0 < x < 0.5$$

$[\arcsin x \text{ is an alternative notation for } \sin^{-1} x]$ **(7)**

**(Total 12 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 14: Expand the sine term**

$$\sin\left(\frac{\pi}{3}\right)\cos\theta - \cos\left(\frac{\pi}{3}\right)\sin\theta = \frac{1}{\sqrt{3}}\cos\theta$$

$$\frac{\sqrt{3}}{2}\cos\theta - \frac{1}{2}\sin\theta = \frac{1}{\sqrt{3}}\cos\theta$$

- **[M1]** Uses the compound angle formula for $\sin(A-B)$.
- **[A1]** Correct expanded equation with exact values.

**Step 15: Convert to an equation in $\tan\theta$**

Divide by $\cos\theta$:

$$\frac{\sqrt{3}}{2} - \frac{1}{2}\tan\theta = \frac{1}{\sqrt{3}}$$

$$\frac{1}{2}\tan\theta = \frac{\sqrt{3}}{2} - \frac{\sqrt{3}}{3} = \frac{\sqrt{3}}{6} \Rightarrow \tan\theta = \frac{\sqrt{3}}{3} = \frac{1}{\sqrt{3}}$$

- **[M1]** Divides by $\cos\theta$ to obtain an expression for $\tan\theta$.

**Step 16: Solve for $\theta$**

$$\theta = \frac{\pi}{6}, \quad \frac{7\pi}{6}$$

- **[A1]** First correct value.
- **[A1]** Second correct value.

#### **Part (b)**

**Step 17: Take the sine of both sides**

Let $\alpha = \arcsin(1-2x)$ and $\beta = \arcsin x$.

$$\alpha = \frac{\pi}{3} - \beta \Rightarrow \sin\alpha = \sin\left(\frac{\pi}{3} - \beta\right)$$

$$1 - 2x = \sin\left(\frac{\pi}{3}\right)\cos\beta - \cos\left(\frac{\pi}{3}\right)\sin\beta$$

- **[M1]** Applies sine to both sides and uses the compound angle formula.

**Step 18: Substitute algebraic expressions**

Since $\sin\beta = x$, then $\cos\beta = \sqrt{1-x^2}$.

$$1 - 2x = \frac{\sqrt{3}}{2}\sqrt{1-x^2} - \frac{1}{2}x$$

- **[M1]** Uses $\cos(\arcsin x) = \sqrt{1-x^2}$.
- **[A1]** Correct algebraic equation.

**Step 19: Rearrange and isolate the square root**

$$2 - 4x = \sqrt{3}\sqrt{1-x^2} - x \Rightarrow 2 - 3x = \sqrt{3}\sqrt{1-x^2}$$

- **[M1]** Rearranges to isolate the term with the square root.

**Step 20: Square both sides and form a quadratic**

$$(2 - 3x)^2 = 3(1-x^2) \Rightarrow 4 - 12x + 9x^2 = 3 - 3x^2$$

$$12x^2 - 12x + 1 = 0$$

- **[M1]** Squares both sides and simplifies to a quadratic equation.
- **[A1]** Correct quadratic equation.

**Step 21: Solve the quadratic and select the valid root**

$$x = \frac{12 \pm \sqrt{144 - 48}}{24} = \frac{12 \pm 4\sqrt{6}}{24} = \frac{3 \pm \sqrt{6}}{6}$$

Since $0 < x < 0.5$, we must have:

$$x = \frac{3 - \sqrt{6}}{6}$$

- **[A1]** Correct value of $x$ with the positive root rejected.

---
topic: "Differentiation"
subtopic: "Modelling with differentiation"
---
### **Question 4**

**(a)** The function $f(x)$ has $f'(x) = \frac{u(x)}{v(x)}$. Given that $f'(k) = 0$, show that

$$f''(k) = \frac{u'(k)}{v(k)}$$ **(3)**

**Figure 1** _(A sketch of the curve $C$ with equation $y = \frac{2x^2+3}{x^2-1}$ showing its three asymptotes at $x = -1$, $x = 1$, and $y = 2$, and its $y$-intercept at $A(0, -3)$.)_

**(b)** The curve $C$ with equation

$$y = \frac{2x^2 + 3}{x^2 - 1}$$

crosses the $y$-axis at the point $A$. Figure 1 shows a sketch of $C$ together with its 3 asymptotes.

**(i)** Find the coordinates of the point $A$. **(1)**

**(ii)** Find the equations of the asymptotes of $C$. **(2)**

The point $P(a, b)$, $a > 0$ and $b > 0$, lies on $C$. The point $Q$ also lies on $C$ with $PQ$ parallel to the $x$-axis and $AP = AQ$.

**(iii)** Show that the area of triangle $PAQ$ is given by

$$\frac{5a^3}{a^2 - 1}$$ **(2)**

**(iv)** Find, as $a$ varies, the minimum area of triangle $PAQ$, giving your answer in its simplest form. **(6)**

**(Total 14 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 22: Differentiate $f'(x)$ using the quotient rule**

$$f''(x) = \frac{u'(x)v(x) - u(x)v'(x)}{[v(x)]^2}$$

- **[M1]** Applies the quotient rule to $f'(x)$.

**Step 23: Use the condition $f'(k) = 0$**

Since $f'(k) = 0 \Rightarrow \frac{u(k)}{v(k)} = 0 \Rightarrow u(k) = 0$ (assuming $v(k) \neq 0$).

- **[M1]** Deduces that $u(k) = 0$.

**Step 24: Substitute $u(k) = 0$ into $f''(k)$**

$$f''(k) = \frac{u'(k)v(k) - 0 \cdot v'(k)}{[v(k)]^2} = \frac{u'(k)v(k)}{[v(k)]^2} = \frac{u'(k)}{v(k)}$$

- **[A1]** Completes the proof.

#### **Part (b)**

**Step 25: Find coordinates of $A$**

At $x = 0$, $y = \frac{3}{-1} = -3 \Rightarrow A = (0, -3)$.

- **[B1]** Correct coordinates.

**Step 26: Find asymptotes**

Vertical asymptotes: $x^2 - 1 = 0 \Rightarrow x = 1, \quad x = -1$.

Horizontal asymptote: $y = 2$.

- **[B1]** Correct vertical asymptotes.
- **[B1]** Correct horizontal asymptote.

**Step 27: Express the area of triangle $PAQ$**

Since $C$ is symmetric about the $y$-axis, $Q = (-a, b)$.

The base of the triangle is $PQ = 2a$.

The height is $b - (-3) = b + 3$.

$$\text{Area} = \frac{1}{2} \times 2a \times (b + 3) = a(b + 3)$$

- **[M1]** Writes down a correct expression for the area in terms of $a$ and $b$.

**Step 28: Substitute $b$ to show the area formula**

$$b + 3 = \frac{2a^2 + 3}{a^2 - 1} + 3 = \frac{2a^2 + 3 + 3a^2 - 3}{a^2 - 1} = \frac{5a^2}{a^2 - 1}$$

$$\text{Area} = a \left( \frac{5a^2}{a^2 - 1} \right) = \frac{5a^3}{a^2 - 1}$$

- **[A1]** Correctly derives the given area formula.

**Step 29: Differentiate the area function**

Let $S(a) = \frac{5a^3}{a^2 - 1}$.

$$S'(a) = \frac{15a^2(a^2 - 1) - 5a^3(2a)}{(a^2 - 1)^2} = \frac{5a^4 - 15a^2}{(a^2 - 1)^2} = \frac{5a^2(a^2 - 3)}{(a^2 - 1)^2}$$

- **[M1]** Attempts to differentiate $S(a)$ using the quotient rule.
- **[A1]** Correct derivative.

**Step 30: Find the stationary point**

Set $S'(a) = 0 \Rightarrow 5a^2(a^2 - 3) = 0$.

Since $a > 1$ (for $b > 0$), we have $a = \sqrt{3}$.

- **[M1]** Sets derivative to 0 and solves for $a$.
- **[A1]** Correct value $a = \sqrt{3}$.

**Step 31: Calculate the minimum area**

$$\text{Minimum Area} = S(\sqrt{3}) = \frac{5(\sqrt{3})^3}{(\sqrt{3})^2 - 1} = \frac{15\sqrt{3}}{2}$$

- **[M1]** Substitutes $a = \sqrt{3}$ back into the area formula.
- **[A1]** Correct minimum area in simplest form.

---
topic: "Sequences and Series"
subtopic: "Arithmetic series"
---
### **Question 5**

**(a)** The sides of the triangle $ABC$ have lengths $BC = a$, $AC = b$ and $AB = c$, where $a < b < c$. The sizes of the angles $A$, $B$ and $C$ form an arithmetic sequence.

**(i)** Show that the area of triangle $ABC$ is $\frac{\sqrt{3}}{4}ac$. **(4)**

Given that $a = 2$ and $\sin A = \frac{\sqrt{15}}{5}$, find

**(ii)** the value of $b$, **(2)**

**(iii)** the value of $c$. **(4)**

**(b)** The internal angles of an $n$-sided polygon form an arithmetic sequence with first term $143^\circ$ and common difference $2^\circ$.

Given that all of the internal angles are less than $180^\circ$, find the value of $n$. **(5)**

**(Total 15 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 32: Determine angle $B$**

Since $a < b < c$, the angles satisfy $A < B < C$.

Since they form an arithmetic sequence, $2B = A + C$.

Since $A + B + C = 180^\circ$, we have $3B = 180^\circ \Rightarrow B = 60^\circ$.

- **[M1]** Uses the properties of arithmetic sequences and triangle angles to set up an equation.
- **[A1]** Deduces $B = 60^\circ$.

**Step 33: Show the area formula**

$$\text{Area} = \frac{1}{2} ac \sin B = \frac{1}{2} ac \sin 60^\circ = \frac{\sqrt{3}}{4} ac$$

- **[M1]** Uses the area formula $\frac{1}{2}ac\sin B$.
- **[A1]** Correctly obtains the given expression.

**Step 34: Find the value of $b$**

Using the Sine Rule:

$$\frac{b}{\sin B} = \frac{a}{\sin A} \Rightarrow \frac{b}{\sin 60^\circ} = \frac{2}{\sqrt{15}/5}$$

$$b = \frac{10}{\sqrt{15}} \times \frac{\sqrt{3}}{2} = \frac{5\sqrt{3}}{\sqrt{15}} = \sqrt{5}$$

- **[M1]** Applies the Sine Rule.
- **[A1]** Correct value $b = \sqrt{5}$.

**Step 35: Set up the Cosine Rule to find $c$**

$$b^2 = a^2 + c^2 - 2ac \cos B$$

$$5 = 4 + c^2 - 2(2)c \cos 60^\circ$$

$$5 = 4 + c^2 - 2c \Rightarrow c^2 - 2c - 1 = 0$$

- **[M1]** Applies the Cosine Rule.
- **[A1]** Correct quadratic equation in $c$.

**Step 36: Solve for $c$**

$$c = \frac{2 \pm \sqrt{4 - 4(1)(-1)}}{2} = 1 \pm \sqrt{2}$$

Since $c > b = \sqrt{5}$, we must have $c = 1 + \sqrt{2}$.

- **[M1]** Solves the quadratic equation.
- **[A1]** Correct value $c = 1 + \sqrt{2}$ (rejects negative root).

#### **Part (b)**

**Step 37: Set up the sum of angles**

The sum of the internal angles of an $n$-sided polygon is $(n-2) \times 180^\circ$.

The sum of the arithmetic series is:

$$S_n = \frac{n}{2} [2(143) + (n-1)2] = n(142 + n)$$

- **[M1]** Equates the sum of the polygon's angles to the sum of the arithmetic progression.
- **[A1]** Correct equation: $n(142 + n) = 180(n-2)$.

**Step 38: Solve the quadratic equation**

$$n^2 + 142n = 180n - 360 \Rightarrow n^2 - 38n + 360 = 0$$

$$(n-18)(n-20) = 0 \Rightarrow n = 18 \quad \text{or} \quad n = 20$$

- **[M1]** Solves the quadratic equation to find two possible values of $n$.
- **[A1]** Correct values $n = 18$ and $n = 20$.

**Step 39: Eliminate the invalid solution**

The largest angle is $U_n = a + (n-1)d$.

If $n = 20$, $U_{20} = 143 + 19(2) = 181^\circ \ge 180^\circ$, which is invalid.

If $n = 18$, $U_{18} = 143 + 17(2) = 177^\circ < 180^\circ$, which is valid.

Thus, $n = 18$.

- **[B1]** Correctly rejects $n=20$ with a valid reason and states $n=18$.

---
topic: "Integration"
subtopic: "Areas under curves"
---
### **Question 6**

**Figure 2** _(A sketch of the curve $C$ with parametric equations $x = 2\sin t$, $y = \ln(\sec t)$ for $0 \le t < \frac{\pi}{2}$, showing the tangent at $P(t = \frac{\pi}{3})$ intersecting the $x$-axis at $A$, and the shaded region $R$ bounded by $C$, the $x$-axis, and the tangent $AP$.)_

Figure 2 shows a sketch of the curve $C$ with parametric equations

$$x = 2\sin t, \quad y = \ln(\sec t), \quad 0 \le t < \frac{\pi}{2}$$

The tangent to $C$ at the point $P$, where $t = \frac{\pi}{3}$, cuts the $x$-axis at $A$.

**(a)** Show that the $x$-coordinate of $A$ is $\frac{\sqrt{3}}{3}(3 - \ln 2)$. **(6)**

The shaded region $R$ lies between $C$, the positive $x$-axis and the tangent $AP$ as shown in Figure 2.

**(b)** Show that the area of $R$ is $\sqrt{3}(1 + \ln 2) - 2\ln(2 + \sqrt{3}) - \frac{\sqrt{3}}{6}(\ln 2)^2$. **(11)**

**(Total 17 marks)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 40: Find coordinates of $P$**

At $t = \frac{\pi}{3}$:

$$x_P = 2\sin\left(\frac{\pi}{3}\right) = \sqrt{3}$$

$$y_P = \ln\left(\sec\left(\frac{\pi}{3}\right)\right) = \ln 2$$

- **[B1]** Correct coordinates of $P$.

**Step 41: Find the gradient of the tangent**

$$\frac{dx}{dt} = 2\cos t, \quad \frac{dy}{dt} = \tan t$$

$$\frac{dy}{dx} = \frac{\tan t}{2\cos t} = \frac{\sin t}{2\cos^2 t}$$

At $t = \frac{\pi}{3}$:

$$\frac{dy}{dx} = \frac{\sqrt{3}/2}{2(1/4)} = \sqrt{3}$$

- **[M1]** Differentiates $x$ and $y$ with respect to $t$.
- **[M1]** Uses the chain rule to find $\frac{dy}{dx}$.
- **[A1]** Correct gradient of $\sqrt{3}$.

**Step 42: Find the equation of the tangent and the $x$-coordinate of $A$**

$$y - \ln 2 = \sqrt{3}(x - \sqrt{3})$$

At $A$, $y = 0$:

$$-\ln 2 = \sqrt{3}(x_A - \sqrt{3}) \Rightarrow x_A = \sqrt{3} - \frac{\ln 2}{\sqrt{3}} = \frac{\sqrt{3}}{3}(3 - \ln 2)$$

- **[M1]** Sets up the equation of the tangent and sets $y = 0$.
- **[A1]** Correctly derives the given $x$-coordinate of $A$.

#### **Part (b)**

**Step 43: Set up the integral for the area under the curve**

$$\text{Area under curve} = \int_{0}^{\sqrt{3}} y \, dx = \int_{0}^{\pi/3} \ln(\sec t) \cdot (2\cos t) \, dt$$

- **[M1]** Uses $\int y \frac{dx}{dt} \, dt$ with correct limits.

**Step 44: Integrate by parts**

Let $u = \ln(\sec t) \Rightarrow du = \tan t \, dt$ and $dv = 2\cos t \, dt \Rightarrow v = 2\sin t$.

$$\int_{0}^{\pi/3} 2\cos t \ln(\sec t) \, dt = [2\sin t \ln(\sec t)]_{0}^{\pi/3} - \int_{0}^{\pi/3} 2\sin t \tan t \, dt$$

- **[M1]** Applies integration by parts.
- **[A1]** Correctly integrated first term: $[2\sin t \ln(\sec t)]_{0}^{\pi/3} = \sqrt{3}\ln 2$.

**Step 45: Integrate the remaining term**

$$\int_{0}^{\pi/3} 2\sin t \tan t \, dt = 2\int_{0}^{\pi/3} \frac{\sin^2 t}{\cos t} \, dt = 2\int_{0}^{\pi/3} (\sec t - \cos t) \, dt$$

$$= 2[\ln(\sec t + \tan t) - \sin t]_{0}^{\pi/3}$$

- **[M1]** Rewrites $\sin t \tan t$ in terms of $\sec t$ and $\cos t$.
- **[A1]** Correct integration of $\sec t - \cos t$.

**Step 46: Evaluate the integral**

$$2[\ln(\sec t + \tan t) - \sin t]_{0}^{\pi/3} = 2\left(\ln(2 + \sqrt{3}) - \frac{\sqrt{3}}{2}\right) = 2\ln(2 + \sqrt{3}) - \sqrt{3}$$

So, Area under curve $= \sqrt{3}\ln 2 - (2\ln(2 + \sqrt{3}) - \sqrt{3}) = \sqrt{3}(1 + \ln 2) - 2\ln(2 + \sqrt{3})$.

- **[A1]** Correct exact value for the area under the curve.

**Step 47: Calculate the area of the triangle under the tangent**

$$\text{Area of triangle} = \frac{1}{2} \times (\sqrt{3} - x_A) \times y_P = \frac{1}{2} \left(\frac{\sqrt{3}}{3}\ln 2\right) \ln 2 = \frac{\sqrt{3}}{6}(\ln 2)^2$$

- **[M1]** Uses $\frac{1}{2} \times \text{base} \times \text{height}$ for the triangle.
- **[A1]** Correct area of the triangle.

**Step 48: Find the area of region $R$**

$$\text{Area of } R = \text{Area under curve} - \text{Area of triangle}$$

$$= \sqrt{3}(1 + \ln 2) - 2\ln(2 + \sqrt{3}) - \frac{\sqrt{3}}{6}(\ln 2)^2$$

- **[A1]** Correctly derives the final given expression.

---
topic: "Vectors"
subtopic: "Solving geometric problems"
---
### **Question 7**

Relative to a fixed origin $O$ the points $A$, $B$ and $C$ have position vectors

$$\mathbf{a} = -\mathbf{i} + \frac{4}{3}\mathbf{j} + 7\mathbf{k}, \quad \mathbf{b} = 4\mathbf{i} + \frac{4}{3}\mathbf{j} + 2\mathbf{k} \quad \text{and} \quad \mathbf{c} = 6\mathbf{i} + \frac{16}{3}\mathbf{j} + 2\mathbf{k} \text{ respectively.}$$

**(a)** Find the cosine of angle $ABC$. **(3)**

The quadrilateral $ABCD$ is a kite $K$.

**(b)** Find the area of $K$. **(3)**

A circle is drawn inside $K$ so that it touches each of the 4 sides of $K$.

**(c)** Find the radius of the circle, giving your answer in the form $p\sqrt{q} - q\sqrt{p}$, where $p$ and $q$ are positive integers. **(5)**

**(d)** Find the position vector of the point $D$. **(7)**

**(Total 18 marks)**

**(For Style, Clarity and Presentation: 7 marks)**

**(TOTAL FOR PAPER: 100 MARKS)**

### **Mark Scheme 7**

#### **Part (a)**

**Step 49: Find vectors $\vec{BA}$ and $\vec{BC}$**

$$\vec{BA} = \mathbf{a} - \mathbf{b} = -5\mathbf{i} + 5\mathbf{k}$$

$$\vec{BC} = \mathbf{c} - \mathbf{b} = 2\mathbf{i} + 4\mathbf{j}$$

- **[B1]** Correct vectors $\vec{BA}$ and $\vec{BC}$.

**Step 50: Calculate dot product and magnitudes**

$$\vec{BA} \cdot \vec{BC} = (-5)(2) + (0)(4) + (5)(0) = -10$$

$$|\vec{BA}| = \sqrt{(-5)^2 + 5^2} = \sqrt{50} = 5\sqrt{2}$$

$$|\vec{BC}| = \sqrt{2^2 + 4^2} = \sqrt{20} = 2\sqrt{5}$$

- **[M1]** Uses the scalar product formula.

**Step 51: Find $\cos(\angle ABC)$**

$$\cos(\angle ABC) = \frac{-10}{(5\sqrt{2})(2\sqrt{5})} = -\frac{1}{\sqrt{10}}$$

- **[A1]** Correct value of $-\frac{1}{\sqrt{10}}$.

#### **Part (b)**

**Step 52: Find the area of triangle $ABC$**

$$\sin(\angle ABC) = \sqrt{1 - \left(-\frac{1}{\sqrt{10}}\right)^2} = \frac{3}{\sqrt{10}}$$

$$\text{Area of } \triangle ABC = \frac{1}{2} |\vec{BA}| |\vec{BC}| \sin(\angle ABC) = \frac{1}{2} (5\sqrt{2})(2\sqrt{5}) \left(\frac{3}{\sqrt{10}}\right) = 15$$

- **[M1]** Finds $\sin(\angle ABC)$ and uses the area formula.
- **[A1]** Correct area of $\triangle ABC = 15$.

**Step 53: Find the area of kite $K$**

Since $ABCD$ is a kite with symmetry line $AC$, the area of $K$ is twice the area of $\triangle ABC$:

$$\text{Area of } K = 2 \times 15 = 30$$

- **[A1]** Correct area of $30$.

#### **Part (c)**

**Step 54: Use the area and semi-perimeter relationship**

For a tangential quadrilateral, $\text{Area} = r \times s$, where $s$ is the semi-perimeter.

$$s = \frac{AB + BC + CD + DA}{2}$$

Since $AB = AD = 5\sqrt{2}$ and $BC = CD = 2\sqrt{5}$:

$$s = 5\sqrt{2} + 2\sqrt{5}$$

- **[M1]** Recognizes and uses the formula $\text{Area} = r \times s$.
- **[A1]** Correct semi-perimeter $s = 5\sqrt{2} + 2\sqrt{5}$.

**Step 55: Solve for $r$ and rationalize**

$$r = \frac{30}{5\sqrt{2} + 2\sqrt{5}} = \frac{30(5\sqrt{2} - 2\sqrt{5})}{(5\sqrt{2})^2 - (2\sqrt{5})^2} = \frac{30(5\sqrt{2} - 2\sqrt{5})}{50 - 20} = 5\sqrt{2} - 2\sqrt{5}$$

- **[M1]** Attempts to rationalize the denominator.
- **[A1]** Correctly rationalizes to obtain $5\sqrt{2} - 2\sqrt{5}$.
- **[A1]** Identifies $p = 5, \quad q = 2$.

#### **Part (d)**

**Step 56: Find the equation of the line of symmetry $AC$**

$$\vec{AC} = \mathbf{c} - \mathbf{a} = 7\mathbf{i} + 4\mathbf{j} - 5\mathbf{k}$$

The midpoint of $BD$, let's call it $M$, lies on $AC$.

$$\mathbf{m} = \mathbf{a} + \lambda \vec{AC} = \begin{pmatrix} -1 + 7\lambda \\ \frac{4}{3} + 4\lambda \\ 7 - 5\lambda \end{pmatrix}$$

- **[M1]** Sets up a vector equation for the line $AC$.

**Step 57: Use perpendicularity of diagonals**

Since $BM \perp AC$, we have $\vec{BM} \cdot \vec{AC} = 0$.

$$\vec{BM} = \mathbf{m} - \mathbf{b} = \begin{pmatrix} -5 + 7\lambda \\ 4\lambda \\ 5 - 5\lambda \end{pmatrix}$$

$$\vec{BM} \cdot \vec{AC} = 7(-5 + 7\lambda) + 4(4\lambda) - 5(5 - 5\lambda) = 0$$

$$-35 + 49\lambda + 16\lambda - 25 + 25\lambda = 0 \Rightarrow 90\lambda = 60 \Rightarrow \lambda = \frac{2}{3}$$

- **[M1]** Sets up the dot product $\vec{BM} \cdot \vec{AC} = 0$.
- **[A1]** Correct value of $\lambda = \frac{2}{3}$.

**Step 58: Find the coordinates of $M$**

$$\mathbf{m} = \begin{pmatrix} -1 + \frac{14}{3} \\ \frac{4}{3} + \frac{8}{3} \\ 7 - \frac{10}{3} \end{pmatrix} = \begin{pmatrix} \frac{11}{3} \\ 4 \\ \frac{11}{3} \end{pmatrix}$$

- **[A1]** Correct position vector of $M$.

**Step 59: Find the position vector of $D$**

Since $M$ is the midpoint of $BD$:

$$\mathbf{d} = 2\mathbf{m} - \mathbf{b} = 2\begin{pmatrix} \frac{11}{3} \\ 4 \\ \frac{11}{3} \end{pmatrix} - \begin{pmatrix} 4 \\ \frac{4}{3} \\ 2 \end{pmatrix} = \begin{pmatrix} \frac{10}{3} \\ \frac{20}{3} \\ \frac{16}{3} \end{pmatrix}$$

$$\mathbf{d} = \frac{10}{3}\mathbf{i} + \frac{20}{3}\mathbf{j} + \frac{16}{3}\mathbf{k}$$

- **[M1]** Uses the midpoint formula to find $\mathbf{d}$.
- **[A1]** Correct position vector of $D$.
