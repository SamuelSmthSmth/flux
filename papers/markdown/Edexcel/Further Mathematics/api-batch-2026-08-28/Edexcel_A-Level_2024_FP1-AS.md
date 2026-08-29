---
topic: "Graphs and Transformations"
subtopic: "Reciprocal graphs"
---
### **Question 1**

In this question you must show all stages of your working. Solutions relying entirely on calculator technology are not acceptable.

**(a)** Sketch the graph of the curve with equation $$y = \frac{1}{x^2}$$ **(2)**

**(b)** Solve, using algebra, the inequality $$3 - 2x^2 > \frac{1}{x^2}$$ **(5)**

**(Total for Question 1 is 7 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Sketch the graph**
- **[B1]** Correct shape (two branches in quadrants 1 and 2, symmetrical about the y-axis, never touching the axes and asymptotic to them).
- **[B1]** Fully correct sketch (clear maximum-like approach towards $y$-axis as $x \to 0$, asymptotic to $y = 0$ and $x = 0$).

#### **Part (b)**

**Step 2: Form equation or inequality in $x^2$**
Multiply both sides by $x^2$ (valid since $x^2 > 0$ for $x \neq 0$):
$$3x^2 - 2x^4 > 1$$
Rearrange into a quadratic form in $x^2$:
$$2x^4 - 3x^2 + 1 < 0$$
- **[M1]** Multiplies through by $x^2$ (or equivalent) and correctly collects terms to form a 3-term quadratic in $x^2$.

**Step 3: Factorise or solve the quadratic**
$$(2x^2 - 1)(x^2 - 1) < 0$$
Roots of the quadratic are $x^2 = \frac{1}{2}$ and $x^2 = 1$.
- **[M1]** Attempts to solve the quadratic equation in $x^2$ (by factorising, formula, or completing the square).
- **[A1]** Correct critical values for $x^2$: $x^2 = \frac{1}{2}$ and $x^2 = 1$ (or correct inequalities for $x^2$: $\frac{1}{2} < x^2 < 1$).

**Step 4: Find the range of values for $x$**
From $\frac{1}{2} < x^2 < 1$:
Taking square roots gives $-\mathbf{1} < x < -\frac{1}{\sqrt{2}}$ or $\frac{1}{\sqrt{2}} < x < 1$ (along with $-\mathbf{1} < x < - \frac{\sqrt{2}}{2}$ etc.).
- **[M1]** Recognises the need to find the range of values for $x$ from their critical values of $x^2$, considering both positive and negative roots.
- **[A1]** Fully correct inequalities: $-1 < x < -\frac{\sqrt{2}}{2}, \frac{\sqrt{2}}{2} < x < 1$ (or equivalent exact forms like $-\frac{1}{\sqrt{2}}$, $\text{or } -\frac{\sqrt{2}}{2}$).

### **Examiner Report 1**

In part (a), the quality and accuracy of the sketches was very varied. Many candidates could at least score the first mark for a recognisable branch in quadrant 1 or 2 although there were many cases where the branch clearly curved away from one axis or both axes or clearly stopped at an axis rather than being asymptotic to it. There were a significant number of cases where candidates sketched $y = \frac{1}{x}$ rather than $y = \frac{1}{x^2}$.

In part (b), the majority of candidates knew how to start and multiplied both sides by $x^2$ or sometimes $x^4$. A small minority multiplied one side by $x^2$ and the other by $x^4$ and made little progress. Of those who started correctly, most obtained a 3-term quadratic equation in $x^2$. At this point many candidates just used a calculator to quote roots and then, realising all working needed to be shown, tried to show the factorisation, which more often than not, did not match their equation. Some candidates only obtained a 2-term equation which often resulted by evaluating $x^2 \times x^{-2}$ as $0$ rather than $1$. Some who solved their equation for $x^2$ forgot about the negative values of $x$. The majority of those who obtained the correct critical values selected the correct regions although some had extra regions or incorporated $x = 0$ as a critical value.

Many candidates used set notation even though this was not required.

---
topic: "Numerical Methods"
subtopic: "Iteration"
---
### **Question 2**

An area of woodland contains a mixture of blue and yellow flowers.

A study found that the proportion, $x$, of blue flowers in the woodland area satisfies the differential equation

$$\frac{dx}{dt} = \frac{xt(0.8 - x)}{x^2 + 5t} \quad t > 0$$

where $t$ is the number of years since the start of the study.

Given that exactly $3$ years after the start of the study half of the flowers in the woodland area were blue,

**(a)** use one application of the approximation formula $$\left(\frac{dy}{dx}\right)_n \approx \frac{y_{n+1} - y_n}{h}$$ to estimate the proportion of blue flowers in the woodland area half a year later. **(5)**

**(b)** Deduce from the differential equation the proportion of flowers that will be blue in the long term. **(1)**

**(Total for Question 2 is 6 marks)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Identify given values**
$t_0 = 3$, $x_0 = 0.5$, $h = 0.5$
- **[B1]** Correct identification of initial values: $t_0 = 3$, $x_0 = 0.5$, and $h = 0.5$ (or $\Delta t = 0.5$).

**Step 2: Substitute into the differential equation to find the derivative**
$$\left(\frac{dx}{dt}\right)_0 = \frac{(0.5)(3)(0.8 - 0.5)}{(0.5)^2 + 5(3)}$$
- **[M1]** Substitutes $t = 3$ and $x = 0.5$ into the given expression for $\frac{dx}{dt}$.

Numerator: $0.5 \times 3 \times 0.3 = 0.45$
Denominator: $0.25 + 15 = 15.25$
$$\left(\frac{dx}{dt}\right)_0 = \frac{0.45}{15.25} = \frac{18}{610} = \frac{9}{305} \approx 0.029508...$$
- **[A1]** Correct value for the derivative (accept unsimplified or decimal form $\approx 0.0295$).

**Step 3: Apply the approximation formula**
$$\frac{x_1 - x_0}{h} \approx \left(\frac{dx}{dt}\right)_0 \implies x_1 - x_0 \approx h \left(\frac{dx}{dt}\right)_0$$
$$x_1 \approx 0.5 + 0.5 \left(\frac{9}{305}\right)$$
- **[M1]** Uses the approximation formula correctly to set up an expression for $x_1$ (i.e. $x_1 = x_0 + h \times \text{derivative}$).

$$x_1 = 0.5 + 0.014754... = 0.514754...$$
$$x_1 \approx 0.515$$
- **[A1]** Correct estimate to 3 significant figures (0.515).

#### **Part (b)**

**Step 4: Deduce the long-term proportion**
In the long term, $t \to \infty$, the proportion reaches a steady state where $\frac{dx}{dt} = 0$.
Since $\frac{xt(0.8 - x)}{x^2 + 5t} = 0$ and $x > 0$, we have $0.8 - x = 0 \implies x = 0.8$.
- **[B1]** Correct deduction: $0.8$ (or $\frac{4}{5}$).

### **Examiner Report 2**

Part (a) of this question proved to be very accessible to most candidates and there were many fully correct solutions. The most common error was to use an incorrect value for $x_0$. There were a few instances where candidates tried to use the approximation entirely in $x$ and could not proceed.

Part (b) was not well answered and the correct answer of $0.8$ was rarely seen. It was clear that the majority did not know how to deduce this value from the differential equation.

---
topic: "Vectors"
subtopic: "Vector product"
---
### **Question 3**

Vectors $\mathbf{u}$ and $\mathbf{v}$ are given by

$$\mathbf{u} = 5\mathbf{i} + 4\mathbf{j} - 3\mathbf{k} \quad \text{and} \quad \mathbf{v} = a\mathbf{i} - 6\mathbf{j} + 2\mathbf{k}$$

where $a$ is a constant.

**(a)** Determine, in terms of $a$, the vector product $\mathbf{u} \times \mathbf{v}$ **(2)**

Given that
- $\overrightarrow{AB} = 2\mathbf{u}$
- $\overrightarrow{AC} = \mathbf{v}$
- the area of triangle $ABC$ is $15$

**(b)** determine the possible values of $a$. **(4)**

**(Total for Question 3 is 6 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Calculate the cross product**
$$\mathbf{u} \times \mathbf{v} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 5 & 4 & -3 \\ a & -6 & 2 \end{vmatrix}$$
$$= \mathbf{i}(4(2) - (-3)(-6)) - \mathbf{j}(5(2) - (-3)(a)) + \mathbf{k}(5(-6) - 4(a))$$
$$= \mathbf{i}(8 - 18) - \mathbf{j}(10 + 3a) + \mathbf{k}(-30 - 4a)$$
$$= -10\mathbf{i} - (3a + 10)\mathbf{j} - (4a + 30)\mathbf{k}$$
- **[M1]** Correct method for evaluating the vector product (attempting determinant or component expansion with at least 2 components correct).
- **[A1]** Correct vector product: $-10\mathbf{i} - (3a + 10)\mathbf{j} - (4a + 30)\mathbf{k}$ (or vector components written as a column vector).

#### **Part (b)**

**Step 2: Relate area of triangle to vector product**
Area of triangle $ABC = \frac{1}{2} |\overrightarrow{AB} \times \overrightarrow{AC}|$
Since $\overrightarrow{AB} = 2\mathbf{u}$ and $\overrightarrow{AC} = \mathbf{v}$:
$$\text{Area} = \frac{1}{2} |2\mathbf{u} \times \mathbf{v}| = |\mathbf{u} \times \mathbf{v}|$$
- **[M1]** Expresses the area of triangle $ABC$ using the vector product of $\overrightarrow{AB}$ and $\overrightarrow{AC}$, incorporating the scaling factor correctly (i.e. $\frac{1}{2}|2\mathbf{u} \times \mathbf{v}| = |\mathbf{u} \times \mathbf{v}|$ or equivalent).

**Step 3: Set up equation using the given area**
$$|\mathbf{u} \times \mathbf{v}| = 15$$
$$\sqrt{(-10)^2 + (-(3a + 10))^2 + (-(4a + 30))^2} = 15$$
Squaring both sides:
$$100 + (3a + 10)^2 + (4a + 30)^2 = 225$$
- **[M1]** Equates the modulus of their vector product to $15$ (or uses squared modulus $= 15^2 = 225$) and expands.

**Step 4: Solve for $a$**
$$100 + (9a^2 + 60a + 100) + (16a^2 + 240a + 900) = 225$$
$$25a^2 + 300a + 1100 = 225$$
$$25a^2 + 300a + 875 = 0$$
Divide by $25$:
$$a^2 + 12a + 35 = 0$$
$$(a + 5)(a + 7) = 0$$
$$a = -5, \quad a = -7$$
- **[M1]** Forms a complete quadratic equation in $a$ and attempts to solve it.
- **[A1]** Correct values: $a = -5, a = -7$.

### **Examiner Report 3**

With the details of the vector product given in the formula book, most formed the vector product in part (a) correctly although there were a significant number of sign errors.

In part (b) the majority started again and had another attempt at the vector product, rather than use their answer from part (a). Interestingly some candidates obtained a different vector than their answer to part (a). Most knew and applied the formula for the area and the majority made a good attempt at the modulus although there were some bracketing and algebraic errors. Nearly all remembered to square the “15”, although there was some confusion with the $\frac{1}{2}$ in the area formula and the “2” with the vector $\vec{AB}$. It was pleasing to see that many could navigate their way through the algebra correctly and obtained the correct values for $a$. A few opted for a non-vector approach in part (b) and made little progress.

---
topic: "Trigonometric Identities and Equations"
subtopic: "Equations and identities"
---
### **Question 4**

**(a)** Given that $t = \tan \frac{x}{2}$ prove that $$\cos x \equiv \frac{1 - t^2}{1 + t^2}$$ **(3)**

**(b)** Show that the equation $$3\tan x - 10\cos x = 10$$ can be written in the form $$(t + 2)(at^2 + bt + c) = 0$$ where $t = \tan \frac{x}{2}$ and $a$, $b$ and $c$ are integers to be determined. **(4)**

**(c)** Hence solve, for $-180^\circ < x < 180^\circ$, the equation $$3\tan x - 10\cos x = 10$$ **(5)**

**(Total for Question 4 is 12 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Express $\cos x$ in terms of half-angle formulae or using standard substitutions**
$$\cos x = \cos^2\left(\frac{x}{2}\right) - \sin^2\left(\frac{x}{2}\right) = \frac{\cos^2\left(\frac{x}{2}\right) - \sin^2\left(\frac{x}{2}\right)}{\cos^2\left(\frac{x}{2}\right) + \sin^2\left(\frac{x}{2}\right)}$$
- **[M1]** Uses a correct double angle identity for $\cos x$ (e.g. $\cos^2\left(\frac{x}{2}\right) - \sin^2\left(\frac{x}{2}\right)$ or $2\cos^2\left(\frac{x}{2}\right) - 1$) and expresses in terms of $\sin\left(\frac{x}{2}\right)$ and $\cos\left(\frac{x}{2}\right)$ with denominator $\cos^2\left(\frac{x}{2}\right) + \sin^2\left(\frac{x}{2}\right) = 1$.

**Step 2: Divide numerator and denominator by $\cos^2\left(\frac{x}{2}\right)$**
$$= \frac{1 - \frac{\sin^2(x/2)}{\cos^2(x/2)}}{1 + \frac{\sin^2(x/2)}{\cos^2(x/2)}}$$
- **[M1]** Divides top and bottom by $\cos^2\left(\frac{x}{2}\right)$ or substitutes $\tan\left(\frac{x}{2}\right) = t$.

**Step 3: Conclude the proof**
$$= \frac{1 - t^2}{1 + t^2}$$
- **[A1]** Fully rigorous proof leading to the given expression with no errors seen.

#### **Part (b)**

**Step 4: Substitute standard half-angle identities for $\tan x$ and $\cos x$**
Using $\tan x = \frac{2t}{1 - t^2}$ and $\cos x = \frac{1 - t^2}{1 + t^2}$:
$$3\left(\frac{2t}{1 - t^2}\right) - 10\left(\frac{1 - t^2}{1 + t^2}\right) = 10$$
- **[M1]** Correctly substitutes $\tan x = \frac{2t}{1 - t^2}$ and $\cos x = \frac{1 - t^2}{1 + t^2}$ into the equation.

**Step 5: Clear denominators**
Multiply through by $(1 - t^2)(1 + t^2)$:
$$3(2t)(1 + t^2) - 10(1 - t^2)^2 = 10(1 - t^2)(1 + t^2)$$
$$6t(1 + t^2) - 10(1 - 2t^2 + t^4) = 10(1 - t^4)$$
- **[M1]** Multiplies through by the common denominator $(1 - t^2)(1 + t^2)$ to clear fractions.

**Step 6: Expand and simplify**
$$6t + 6t^3 - 10 + 20t^2 - 10t^4 = 10 - 10t^4$$
Add $10t^4$ to both sides:
$$6t + 6t^3 - 10 + 20t^2 = 10$$
$$6t^3 + 20t^2 + 6t - 20 = 0$$
- **[A1]** Obtains the cubic equation $6t^3 + 20t^2 + 6t - 20 = 0$ (or equivalent unsimplified polynomial).

**Step 7: Factor out $(t + 2)$**
Since $t = -2$ is a root ($6(-8) + 20(4) + 6(-2) - 20 = -48 + 80 - 12 - 20 = 0$), divide by $(t + 2)$ or factor by grouping:
$$6t^3 + 20t^2 + 6t - 20 = (t + 2)(6t^2 + 8t - 10)$$
$$= 2(t + 2)(3t^2 + 4t - 5)$$
Thus, $a = 3$, $b = 4$, $c = -5$ (or integer multiples if written as $(t + 2)(6t^2 + 8t - 10) = 0$).
- **[A1]** Factorises into $(t + 2)(at^2 + bt + c) = 0$ with correct integer values $a = 3$, $b = 4$, $c = -5$ (or equivalent scaled form).

#### **Part (c)**

**Step 8: Solve for $t$**
From $(t + 2)(3t^2 + 4t - 5) = 0$:
1. $t = -2$
2. $3t^2 + 4t - 5 = 0 \implies t = \frac{-4 \pm \sqrt{4^2 - 4(3)(-5)}}{2(3)} = \frac{-4 \pm \sqrt{16 + 60}}{6} = \frac{-4 \pm \sqrt{76}}{6} = \frac{-2 \pm \sqrt{19}}{3}$
- **[M1]** Solves the quadratic factor $3t^2 + 4t - 5 = 0$ using the quadratic formula or completing the square.

**Step 9: Convert $t$ back to $x$ ($t = \tan \frac{x}{2}$)**
1. $\tan\left(\frac{x}{2}\right) = -2 \implies \frac{x}{2} = \arctan(-2) \approx -63.434^\circ \implies x \approx -126.9^\circ$
2. $\tan\left(\frac{x}{2}\right) = \frac{-2 + \sqrt{19}}{3} \approx 0.78885 \implies \frac{x}{2} = \arctan(0.78885) \approx 38.267^\circ \implies x \approx 76.5^\circ$
3. $\tan\left(\frac{x}{2}\right) = \frac{-2 - \sqrt{19}}{3} \approx -2.12218 \implies \frac{x}{2} = \arctan(-2.12218) \approx -64.774^\circ \implies x \approx -129.5^\circ$ (outside range or check intervals). Wait, check range $-180^\circ < x < 180^\circ$:
- $\frac{x}{2} \in (-90^\circ, 90^\circ)$, so $x = 2 \arctan(t)$.
Let's calculate all valid values in range:
- $t = -2 \implies \frac{x}{2} = -63.43^\circ \implies x = -126.9^\circ$
- $t = \frac{-2 + \sqrt{19}}{3} \approx 0.7889 \implies \frac{x}{2} = 38.27^\circ \implies x = 76.5^\circ$
- $t = \frac{-2 - \sqrt{19}}{3} \approx -2.122 \implies \frac{x}{2} = -64.77^\circ \implies x = -129.5^\circ$ (Wait, $-64.77 \times 2 = -129.5^\circ$, which is within $(-180^\circ, 180^\circ)$).
- **[M1]** Uses $x = 2 \arctan(t)$ for at least one of their values of $t$.
- **[A1]** At least two correct values of $x$ to 3 significant figures.
- **[A1]** All three correct values of $x$: $x = -129^\circ, -127^\circ, 76.5^\circ$ (or exact/more precise equivalents: $-129.5^\circ, -126.9^\circ, 76.5^\circ$).
- **[A1]** Correct range and no extra invalid solutions within $-180^\circ < x < 180^\circ$.

### **Examiner Report 4**

Part (a) was probably the least well answered part on the paper and many candidates did not know how to prove this result using suitable double angle formula. Of those who attempted this part, the majority simply quoted the standard results for $\tan x$ and $\sin x$ to obtain the expression for $\cos x$. Such attempts were given a special case of 1 mark.

In part (b), nearly all substituted to obtain a correct initial equation in $t$, but the attempts to rearrange it were very variable. There were many sign errors which might have been avoided by careful bracketing of the numerators of fractions before multiplying up. Sometimes these errors prevented them from reducing the equation to a cubic, so they could not proceed to the required result. The most efficient solutions rearranged to $3\tan x = 10(1 + \cos x)$, which gave a much simpler expansion. Candidates who found the correct cubic nearly always factorised it as required although many forgot the “$= 0$” at the end and so forfeited the final mark in this part.

Part (c) was a very good source of marks for many candidates. Most could at least use a fully correct procedure for finding $x$ from the given factor and even without a correct quadratic factor, could score the next method mark. Some additional incorrect solutions were obtained by adding or subtracting $180^\circ$ after doubling their solution of $\arctan\left(\frac{x}{2}\right)$. There were also some solutions which were not accurate to 3 significant figures because the candidate had used a solution of the quadratic rounded to 3 significant figures.

---
topic: "Circles"
subtopic: "Equation of a circle"
---
### **Question 5**

The parabola $C$ has equation $y^2 = 16x$.

The point $P$ on $C$ has $y$ coordinate $p$, where $p$ is a positive constant.

**(a)** Show that an equation of the tangent to $C$ at $P$ is given by $$2py = 16x + p^2$$
$$\left[\text{You may quote without proof that for the general parabola } y^2 = 4ax, \, \frac{dy}{dx} = \frac{2a}{y}\right]$$ **(2)**

**(b)** Write down the equation of the directrix of $C$. **(1)**

The line $l$ is the reflection of the tangent to $C$ at $P$ in the directrix of $C$.

Given that $l$ passes through the focus of $C$,

**(c)** determine the exact value of $p$. **(6)**

**(Total for Question 5 is 9 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Find the coordinates of $P$ and the gradient of the tangent**
For $y^2 = 16x$, $4a = 16 \implies a = 4$.
The $y$-coordinate of $P$ is $p$, so the $x$-coordinate is $x_P = \frac{p^2}{16}$.
Gradient $m = \frac{2(4)}{p} = \frac{8}{p}$.
- **[M1]** Uses the given derivative formula with $a = 4$ and $y = p$ to find the gradient $\frac{8}{p}$ (or uses parametric coordinates).

**Step 2: Form the equation of the tangent**
$$y - p = \frac{8}{p}\left(x - \frac{p^2}{16}\right)$$
$$py - p^2 = 8x - \frac{8p^2}{16} = 8x - \frac{p^2}{2}$$
Multiply by $2$:
$$2py - 2p^2 = 16x - p^2 \implies 2py = 16x + p^2$$
- **[A1]** Correct algebraic manipulation showing $2py = 16x + p^2$.

#### **Part (b)**

**Step 3: State the equation of the directrix**
For $y^2 = 16x$, $4a = 16 \implies a = 4$.
Directrix is $x = -a \implies x = -4$.
- **[B1]** Correct equation: $x = -4$ (or $x + 4 = 0$).

#### **Part (c)**

**Step 4: Find the point of intersection of the tangent with the directrix ($x = -4$)**
Substitute $x = -4$ into the tangent equation $2py = 16x + p^2$:
$$2py = 16(-4) + p^2 = p^2 - 64$$
$$y = \frac{p^2 - 64}{2p}$$
So the intersection point $Q$ is $\left(-4, \frac{p^2 - 64}{2p}\right)$.
- **[M1]** Finds the point of intersection of the tangent with the directrix $x = -4$ in terms of $p$.

**Step 5: Determine the reflection of the tangent in the directrix ($l$)**
The line $l$ is the reflection of the tangent in the line $x = -4$.
Since the intersection point $Q$ lies on the mirror line $x = -4$, $Q$ is invariant under reflection. Thus, the reflected line $l$ also passes through $Q\left(-4, \frac{p^2 - 64}{2p}\right)$.
Also, the gradient of the tangent is $m_1 = \frac{8}{p}$.
When a line is reflected in a vertical line $x = k$, its gradient changes sign: $m_2 = -\frac{8}{p}$.
- **[M1]** Establishes the gradient of the reflected line $l$ as $-\frac{8}{p}$ (or uses geometric properties of reflections in vertical lines).

**Step 6: Form the equation of line $l$ or use the focus**
Line $l$ passes through $Q\left(-4, \frac{p^2 - 64}{2p}\right)$ with gradient $m = -\frac{8}{p}$:
$$y - \frac{p^2 - 64}{2p} = -\frac{8}{p}(x - (-4))$$
$$y - \frac{p^2 - 64}{2p} = -\frac{8}{p}(x + 4)$$
- **[M1]** Uses the point $Q$ and gradient $-\frac{8}{p}$ to write the equation of line $l$.

**Step 7: Use the condition that $l$ passes through the focus**
The focus of $C$ is $(a, 0) = (4, 0)$.
Substitute $x = 4$, $y = 0$ into the equation of $l$:
$$0 - \frac{p^2 - 64}{2p} = -\frac{8}{p}(4 + 4)$$
$$-\frac{p^2 - 64}{2p} = -\frac{8}{p}(8) = -\frac{64}{p}$$
- **[M1]** Substitutes the coordinates of the focus $(4, 0)$ into the equation of $l$.

**Step 8: Solve for $p$**
Multiply both sides by $-2p$ (since $p > 0$):
$$p^2 - 64 = 128$$
$$p^2 = 192$$
Since $p > 0$:
$$p = \sqrt{192} = \sqrt{64 \times 3} = 8\sqrt{3}$$
- **[A1]** Correct exact value $p = 8\sqrt{3}$ (or equivalent simplified surd).

### **Examiner Report 5**

Part (a) was usually answered well. The main difficulty which arose in this part was that some candidates who were used to using the parametric equations of a parabola found it confusing to use $p$ as the given $y$-coordinate. There were also a number who used $\frac{8}{y}$ as the gradient in their equation and were often unable to recover.

The mark in part (b) was often scored with a few giving just the point $(-4, 0)$ or the equation $y = -4$ or the equation $x = 4$.

Part (c) proved to be a very demanding part of the paper and success was varied. There were only a minority of fully correct solutions. The unstructured nature of the problem meant that candidates often didn’t know where to start. By far, the most significant error, was to assume that the gradient of $l$ was the negative reciprocal of the gradient in part (a). Without this misconception, many attempts would have been more successful. There were several attempts using circular arguments. Some tried to use distance from focus = distance from directrix, resulting in $p^2 = p^2$. Others used the intersection of $l$ with the directrix and $l$ passing through the focus to obtain the gradient of $l$, but then tried to use again the fact that it passed through the focus. There were some very neat and efficient solutions for this part such as alternative 3 on the mark scheme.
