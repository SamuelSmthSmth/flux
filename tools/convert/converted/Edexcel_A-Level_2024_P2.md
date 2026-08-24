---
topic: "Differentiation"
subtopic: "Second order derivatives"
---
### **Question 1**

$$y = 4x^3 - 7x^2 + 5x - 10$$

**(a)** Find in simplest form

**(i)** $\frac{\mathrm{d}y}{\mathrm{d}x}$

**(ii)** $\frac{\mathrm{d}^2y}{\mathrm{d}x^2}$

**(3)**

**(b)** Hence find the exact value of $x$ when $\frac{\mathrm{d}^2y}{\mathrm{d}x^2} = 0$

**(2)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Differentiate once to find $\frac{\mathrm{d}y}{\mathrm{d}x}$**

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 12x^2 - 14x + 5$$

- **[M1]** Differentiates at least two terms correctly from $y = 4x^3 - 7x^2 + 5x - 10$.
- **[A1]** Fully correct derivative $\frac{\mathrm{d}y}{\mathrm{d}x} = 12x^2 - 14x + 5$.

**Step 2: Differentiate a second time to find $\frac{\mathrm{d}^2y}{\mathrm{d}x^2}$**

$$\frac{\mathrm{d}^2y}{\mathrm{d}x^2} = 24x - 14$$

- **[B1]** Correct second derivative $\frac{\mathrm{d}^2y}{\mathrm{d}x^2} = 24x - 14$.

#### **Part (b)**

**Step 3: Set second derivative to 0 and solve for $x$**

$$24x - 14 = 0 \Rightarrow 24x = 14$$

- **[M1]** Sets their second derivative equal to 0 and attempts to solve for $x$.

**Step 4: State exact value of $x$**

$$x = \frac{7}{12}$$

- **[A1]** Correct exact value $x = \frac{7}{12}$ or equivalent fraction.

---
topic: "Sequences and Series"
subtopic: "Arithmetic series"
---
### **Question 2**

Jamie takes out an interest-free loan of £8100

Jamie makes a payment every month to pay back the loan.

Jamie repays £400 in month 1, £390 in month 2, £380 in month 3, and so on, so that the amounts repaid each month form an arithmetic sequence.

**(a)** Show that Jamie repays £290 in month 12

**(1)**

After Jamie's $N\text{th}$ payment, the loan is completely paid back.

**(b)** Show that $N^2 - 81N + 1620 = 0$

**(2)**

**(c)** Hence find the value of $N$.

**(2)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Calculate $u_{12}$ using the nth term formula**

$$u_{12} = a + (12 - 1)d = 400 + 11(-10) = 400 - 110 = 290$$

- **[B1]** Shows clear substitution into $a + 11d$ with $a = 400$ and $d = -10$ to obtain 290.

#### **Part (b)**

**Step 2: Set up $S_N = 8100$**

$$S_N = \frac{N}{2}\left(2a + (N-1)d\right) = 8100$$

$$\frac{N}{2}\left(2(400) + (N-1)(-10)\right) = 8100$$

- **[M1]** Uses $S_N = \frac{N}{2}(2a + (N-1)d) = 8100$ with $a = 400$ and $d = -10$.

**Step 3: Simplify to the target quadratic equation**

$$\frac{N}{2}(800 - 10N + 10) = 8100$$

$$N(810 - 10N) = 16200$$

$$810N - 10N^2 = 16200 \Rightarrow 10N^2 - 810N + 16200 = 0 \Rightarrow N^2 - 81N + 1620 = 0$$

- **[A1]** Correctly completes the algebraic manipulation to arrive at $N^2 - 81N + 1620 = 0$ with no errors.

#### **Part (c)**

**Step 4: Solve the quadratic equation for $N$**

$$(N - 36)(N - 45) = 0 \Rightarrow N = 36 \text{ or } N = 45$$

- **[M1]** Solves the quadratic equation $N^2 - 81N + 1620 = 0$ by factorising, completing the square, or using the quadratic formula.

**Step 5: Select the valid value of $N$**

$$N = 36$$

- **[A1]** Selects $N = 36$ and rejects $N = 45$ (since the loan is fully paid after 36 months, after which payments would become zero/negative).

---
topic: "Graphs and Transformations"
subtopic: "Transforming functions"
---
### **Question 3**

The point $P(3, -2)$ lies on the curve with equation $y = \mathrm{f}(x), x \in \mathbb{R}$

Find the coordinates of the point to which $P$ is mapped when the curve with equation $y = \mathrm{f}(x)$ is transformed to the curve with equation

**(i)** $y = \mathrm{f}(x - 2)$

**(ii)** $y = \mathrm{f}(2x)$

**(iii)** $y = 3\mathrm{f}(-x) + 5$

**(4)**

### **Mark Scheme 3**

**Step 1: Transform coordinates for (i)**

Translation by vector $\begin{pmatrix} 2 \\ 0 \end{pmatrix}$: $(3+2, -2) = (5, -2)$.

- **[B1]** Correct coordinates $(5, -2)$.

**Step 2: Transform coordinates for (ii)**

Stretch parallel to the $x$-axis with scale factor $\frac{1}{2}$: $\left(\frac{3}{2}, -2\right)$ or $(1.5, -2)$.

- **[B1]** Correct coordinates $(1.5, -2)$ or $\left(\frac{3}{2}, -2\right)$.

**Step 3: Transform $x$-coordinate and $y$-coordinate for (iii)**

Reflection in $y$-axis gives $x = -3$.
Vertical stretch by scale factor 3 followed by translation up 5 gives $y = 3(-2) + 5 = -1$.

- **[M1]** Shows method for transforming either the $x$-coordinate or $y$-coordinate correctly for (iii), e.g. $x = -3$ or $y = 3(-2) + 5 = -1$.
- **[A1]** Fully correct coordinates $(-3, -1)$.

---
topic: "Sequences and Series"
subtopic: "Recurrence relations"
---
### **Question 4**

A sequence $u_1, u_2, u_3, \dots$ is defined by
$$u_{n+1} = k u_n - 5$$
$$u_1 = 6$$

where $k$ is a positive constant.

Given that $u_3 = -1$

**(a)** show that
$$6k^2 - 5k - 4 = 0$$

**(2)**

**(b)** Hence

**(i)** find the value of $k$,

**(ii)** find the value of $\sum_{r=1}^3 u_r$

**(3)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Express $u_2$ and $u_3$ in terms of $k$**

$$u_2 = 6k - 5$$
$$u_3 = k(6k - 5) - 5 = 6k^2 - 5k - 5$$

- **[M1]** Uses the recurrence relation to find $u_2$ in terms of $k$ and substitutes into $u_3 = k u_2 - 5$.

**Step 2: Equate $u_3$ to $-1$ and show the given quadratic**

$$6k^2 - 5k - 5 = -1 \Rightarrow 6k^2 - 5k - 4 = 0$$

- **[A1]** Equates $u_3$ to $-1$ and correctly completes to $6k^2 - 5k - 4 = 0$.

#### **Part (b)**

**Step 3: Solve the quadratic to find $k$**

$$(2k + 1)(3k - 4) = 0 \Rightarrow k = -\frac{1}{2} \text{ or } k = \frac{4}{3}$$

Since $k$ is positive, $k = \frac{4}{3}$.

- **[M1]** Solves $6k^2 - 5k - 4 = 0$ for $k$.
- **[A1]** Deduces $k = \frac{4}{3}$ (rejecting $k = -\frac{1}{2}$ as $k > 0$).

**Step 4: Calculate $\sum_{r=1}^3 u_r$**

$$u_1 = 6$$
$$u_2 = 6\left(\frac{4}{3}\right) - 5 = 3$$
$$u_3 = -1$$
$$\sum_{r=1}^3 u_r = 6 + 3 + (-1) = 8$$

- **[B1]** Evaluates $u_1 + u_2 + u_3 = 6 + 3 + (-1) = 8$.

---
topic: "Radians"
subtopic: "Small angle approximations"
---
### **Question 5**

Given that $\theta$ is small and in radians, use the small angle approximations to find an approximate numerical value of

$$\frac{\theta \tan 2\theta}{1 - \cos 3\theta}$$

**(3)**

### **Mark Scheme 5**

**Step 1: Apply small angle approximations**

$$\tan 2\theta \approx 2\theta$$
$$\cos 3\theta \approx 1 - \frac{(3\theta)^2}{2} = 1 - \frac{9\theta^2}{2}$$

- **[M1]** Uses $\tan 2\theta \approx 2\theta$ and $\cos 3\theta \approx 1 - \frac{(3\theta)^2}{2}$.

**Step 2: Substitute approximations into the expression**

$$\frac{\theta(2\theta)}{1 - \left(1 - \frac{9\theta^2}{2}\right)} = \frac{2\theta^2}{\frac{9\theta^2}{2}}$$

- **[M1]** Substitutes approximations into the given expression and simplifies the denominator.

**Step 3: Calculate the numerical value**

$$\frac{2\theta^2}{\frac{9\theta^2}{2}} = \frac{4}{9}$$

- **[A1]** Fully correct simplified numerical value $\frac{4}{9}$.

---
topic: "Numerical Methods"
subtopic: "Iteration"
---
### **Question 6**

**Figure 1** shows a sketch of the curves with equations $y = \mathrm{f}(x)$ and $y = \mathrm{g}(x)$ where

$$\mathrm{f}(x) = \mathrm{e}^{4x^2 - 1} \quad x > 0$$
$$\mathrm{g}(x) = 8 \ln x \quad x > 0$$

**Figure 1** shows curves $y = \mathrm{f}(x)$ and $y = \mathrm{g}(x)$ plotted for $x > 0$.

**(a)** Find

**(i)** $\mathrm{f}'(x)$

**(ii)** $\mathrm{g}'(x)$

**(2)**

Given that $\mathrm{f}'(x) = \mathrm{g}'(x)$ at $x = \alpha$

**(b)** show that $\alpha$ satisfies the equation

$$4x^2 + 2\ln x - 1 = 0$$

**(2)**

The iterative formula

$$x_{n+1} = \sqrt{\frac{1 - 2\ln x_n}{4}}$$

is used with $x_1 = 0.6$ to find an approximate value for $\alpha$

**(c)** Calculate, giving each answer to 4 decimal places,

**(i)** the value of $x_2$

**(ii)** the value of $\alpha$

**(3)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Differentiate $\mathrm{f}(x)$ and $\mathrm{g}(x)$**

$$\mathrm{f}'(x) = 8x \mathrm{e}^{4x^2 - 1}$$
$$\mathrm{g}'(x) = \frac{8}{x}$$

- **[M1]** Differentiates one function correctly, e.g. $\mathrm{f}'(x) = 8x\mathrm{e}^{4x^2 - 1}$ or $\mathrm{g}'(x) = \frac{8}{x}$.
- **[A1]** Both derivatives correct: $\mathrm{f}'(x) = 8x\mathrm{e}^{4x^2 - 1}$ and $\mathrm{g}'(x) = \frac{8}{x}$.

#### **Part (b)**

**Step 2: Equate derivatives at $x = \alpha$**

$$8x \mathrm{e}^{4x^2 - 1} = \frac{8}{x}$$
$$x^2 \mathrm{e}^{4x^2 - 1} = 1$$

- **[M1]** Sets $\mathrm{f}'(x) = \mathrm{g}'(x)$ and multiplies by $x$ or takes logarithms.

**Step 3: Take natural logarithms to achieve target equation**

$$\ln(x^2 \mathrm{e}^{4x^2 - 1}) = \ln(1)$$
$$\ln(x^2) + 4x^2 - 1 = 0$$
$$4x^2 + 2\ln x - 1 = 0$$

- **[A1]** Correctly applies logarithm laws to complete proof to $4x^2 + 2\ln x - 1 = 0$.

#### **Part (c)**

**Step 4: Calculate $x_2$**

$$x_2 = \sqrt{\frac{1 - 2\ln(0.6)}{4}} = 0.710925\dots \approx 0.7109$$

- **[M1]** Substitutes $x_1 = 0.6$ into the iterative formula to find $x_2$.
- **[A1]** $x_2 = 0.7109$ (to 4 decimal places).

**Step 5: Continue iteration to find $\alpha$**

$$x_3 = 0.6485, \quad x_4 = 0.6830, \quad x_5 = 0.6638, \quad \dots \quad \alpha \approx 0.6681$$

- **[A1]** $\alpha = 0.6681$ (to 4 decimal places).

---
topic: "Vectors"
subtopic: "Vectors in 3D"
---
### **Question 7**

**Figure 2** shows a sketch of the straight line $l$.

Line $l$ passes through the points $A$ and $B$.

Relative to a fixed origin $O$
- the point $A$ has position vector $2\mathbf{i} - 3\mathbf{j} + 5\mathbf{k}$
- the point $B$ has position vector $5\mathbf{i} + 6\mathbf{j} + 8\mathbf{k}$

**Figure 2** shows points $A$ and $B$ on line $l$.

**(a)** Find $\vec{AB}$

**(1)**

Given that a point $P$ lies on $l$ such that
$$|\vec{AP}| = 2|\vec{BP}|$$

**(b)** find the possible position vectors of $P$.

**(4)**

### **Mark Scheme 7**

#### **Part (a)**

**Step 1: Calculate vector $\vec{AB}$**

$$\vec{AB} = \mathbf{r}_B - \mathbf{r}_A = (5\mathbf{i} + 6\mathbf{j} + 8\mathbf{k}) - (2\mathbf{i} - 3\mathbf{j} + 5\mathbf{k}) = 3\mathbf{i} + 9\mathbf{j} + 3\mathbf{k}$$

- **[B1]** Correct vector $\vec{AB} = 3\mathbf{i} + 9\mathbf{j} + 3\mathbf{k}$ or $\begin{pmatrix} 3 \\ 9 \\ 3 \end{pmatrix}$.

#### **Part (b)**

**Step 2: Express position vector of $P$ on line $l$**

$$\vec{OP} = \vec{OA} + \lambda \vec{AB} = (2\mathbf{i} - 3\mathbf{j} + 5\mathbf{k}) + \lambda (3\mathbf{i} + 9\mathbf{j} + 3\mathbf{k})$$
$$\vec{AP} = \lambda \vec{AB}, \quad \vec{BP} = (\lambda - 1)\vec{AB}$$

- **[M1]** Expresses $\vec{AP}$ and $\vec{BP}$ in terms of a parameter along line $l$ or uses ratio of division.

**Step 3: Solve for $\lambda$ using $|\vec{AP}| = 2|\vec{BP}|$**

$$|\lambda| = 2|\lambda - 1|$$

Case 1 ($P$ between $A$ and $B$): $\lambda = 2(1 - \lambda) \Rightarrow 3\lambda = 2 \Rightarrow \lambda = \frac{2}{3}$

Case 2 ($B$ between $A$ and $P$): $\lambda = 2(\lambda - 1) \Rightarrow \lambda = 2$

- **[M1]** Finds one valid value of $\lambda$ (e.g. $\lambda = \frac{2}{3}$ or $\lambda = 2$).
- **[A1]** Finds both values of $\lambda$: $\lambda = \frac{2}{3}$ and $\lambda = 2$.

**Step 4: Calculate the position vectors of $P$**

For $\lambda = \frac{2}{3}$:
$$\vec{OP}_1 = (2\mathbf{i} - 3\mathbf{j} + 5\mathbf{k}) + \frac{2}{3}(3\mathbf{i} + 9\mathbf{j} + 3\mathbf{k}) = 4\mathbf{i} + 3\mathbf{j} + 7\mathbf{k}$$

For $\lambda = 2$:
$$\vec{OP}_2 = (2\mathbf{i} - 3\mathbf{j} + 5\mathbf{k}) + 2(3\mathbf{i} + 9\mathbf{j} + 3\mathbf{k}) = 8\mathbf{i} + 15\mathbf{j} + 11\mathbf{k}$$

- **[A1]** Both position vectors correct: $4\mathbf{i} + 3\mathbf{j} + 7\mathbf{k}$ and $8\mathbf{i} + 15\mathbf{j} + 11\mathbf{k}$ (or in column vector form).

---
topic: "Trigonometric Identities and Equations"
subtopic: "Proving trigonometric identities"
---
### **Question 8**

In this question you must show all stages of your working.
Solutions relying entirely on calculator technology are not acceptable.

**(a)** Prove that

$$\frac{1}{\mathrm{cosec}\,\theta - 1} + \frac{1}{\mathrm{cosec}\,\theta + 1} \equiv 2 \tan \theta \sec \theta \quad \theta \neq (90n)^\circ, n \in \mathbb{Z}$$

**(3)**

**(b)** Hence solve, for $0 < x < 90^\circ$, the equation

$$\frac{1}{\mathrm{cosec}\,2x - 1} + \frac{1}{\mathrm{cosec}\,2x + 1} = \cot 2x \sec 2x$$

Give each answer, in degrees, to one decimal place.

**(4)**

### **Mark Scheme 8**

#### **Part (a)**

**Step 1: Combine fractions on LHS over a common denominator**

$$\text{LHS} = \frac{(\mathrm{cosec}\,\theta + 1) + (\mathrm{cosec}\,\theta - 1)}{(\mathrm{cosec}\,\theta - 1)(\mathrm{cosec}\,\theta + 1)} = \frac{2\mathrm{cosec}\,\theta}{\mathrm{cosec}^2\,\theta - 1}$$

- **[M1]** Combines fractions over common denominator $(\mathrm{cosec}\,\theta - 1)(\mathrm{cosec}\,\theta + 1) = \mathrm{cosec}^2\,\theta - 1$.

**Step 2: Use identity $\mathrm{cosec}^2\,\theta - 1 = \cot^2\,\theta$**

$$\text{LHS} = \frac{2\mathrm{cosec}\,\theta}{\cot^2\,\theta}$$

- **[M1]** Replaces $\mathrm{cosec}^2\,\theta - 1$ with $\cot^2\,\theta$.

**Step 3: Express in terms of $\sin \theta$ and $\cos \theta$ to complete proof**

$$\frac{2 / \sin \theta}{\cos^2 \theta / \sin^2 \theta} = \frac{2 \sin \theta}{\cos^2 \theta} = 2 \left(\frac{\sin \theta}{\cos \theta}\right) \left(\frac{1}{\cos \theta}\right) = 2 \tan \theta \sec \theta$$

- **[A1]** Correctly converts to sine and cosine and finishes proof with clear steps to reach $2\tan \theta \sec \theta$.

#### **Part (b)**

**Step 4: Use identity from (a) with $\theta = 2x$**

$$2\tan 2x \sec 2x = \cot 2x \sec 2x$$

- **[M1]** Uses part (a) to write $2\tan 2x \sec 2x = \cot 2x \sec 2x$.

**Step 5: Simplify to a single trigonometric equation**

Since $\sec 2x \neq 0$:
$$2\tan 2x = \cot 2x \Rightarrow 2\tan 2x = \frac{1}{\tan 2x}$$
$$\tan^2 2x = \frac{1}{2} \Rightarrow \tan 2x = \pm \frac{1}{\sqrt{2}}$$

- **[M1]** Replaces $\cot 2x$ with $\frac{1}{\tan 2x}$ to obtain $\tan^2 2x = \frac{1}{2}$ or $\tan 2x = \pm \frac{1}{\sqrt{2}}$.

**Step 6: Solve for $2x$ in interval $0 < 2x < 180^\circ$**

$\tan 2x = \frac{1}{\sqrt{2}} \Rightarrow 2x = 35.264^\circ$
$\tan 2x = -\frac{1}{\sqrt{2}} \Rightarrow 2x = 180^\circ - 35.264^\circ = 144.736^\circ$

- **[M1]** Solves $\tan 2x = \pm \frac{1}{\sqrt{2}}$ for $2x$ in the correct quadrant.

**Step 7: Calculate values of $x$**

$$x = 17.6^\circ \quad \text{and} \quad x = 72.4^\circ$$

- **[A1]** Both $x = 17.6^\circ$ and $x = 72.4^\circ$ correct to 1 decimal place.

---
topic: "Quadratics"
subtopic: "Modelling with quadratics"
---
### **Question 9**

The graph in **Figure 3** shows the path of a small ball.

The ball travels in a vertical plane above horizontal ground.

The ball is thrown from the point represented by $A$ and caught at the point represented by $B$.

The height, $H$ metres, of the ball above the ground has been plotted against the horizontal distance, $x$ metres, measured from the point where the ball was thrown.

With respect to a fixed origin $O$, the point $A$ has coordinates $(0, 2)$ and the point $B$ has coordinates $(20, 0.8)$, as shown in **Figure 3**.

**Figure 3** shows the parabolic trajectory of a ball thrown from $A(0, 2)$, reaching a maximum height at $x = 9$ and caught at $B(20, 0.8)$.

The ball reaches its maximum height when $x = 9$

A quadratic function, linking $H$ with $x$, is used to model the path of the ball.

**(a)** Find $H$ in terms of $x$.

**(4)**

**(b)** Give one limitation of the model.

**(1)**

Chandra is standing directly under the path of the ball at a point $16\,\text{m}$ horizontally from $O$.

Chandra can catch the ball if the ball is less than $2.5\,\text{m}$ above the ground.

**(c)** Use the model to determine if Chandra can catch the ball.

**(2)**

### **Mark Scheme 9**

#### **Part (a)**

**Step 1: Set up vertex form of quadratic equation**

Since maximum height occurs at $x = 9$, $H(x) = a(x - 9)^2 + k$.

- **[M1]** Uses $H = a(x-9)^2 + k$ or $H = ax^2 + bx + c$ with $-\frac{b}{2a} = 9$.

**Step 2: Substitute points $A(0, 2)$ and $B(20, 0.8)$**

$$H(0) = 81a + k = 2$$
$$H(20) = 121a + k = 0.8$$

- **[M1]** Substitutes both $(0, 2)$ and $(20, 0.8)$ to form simultaneous equations in $a$ and $k$.

**Step 3: Solve for $a$ and $k$**

$$121a - 81a = 0.8 - 2 \Rightarrow 40a = -1.2 \Rightarrow a = -0.03$$
$$k = 2 - 81(-0.03) = 4.43$$

- **[A1]** Correct values $a = -0.03$ (or $-\frac{3}{100}$) and $k = 4.43$ (or $\frac{443}{100}$).

**Step 4: State $H$ in terms of $x$**

$$H = -0.03(x - 9)^2 + 4.43 \quad \left(\text{or } H = -0.03x^2 + 0.54x + 2\right)$$

- **[A1]** Correct expression for $H$ in terms of $x$.

#### **Part (b)**

**Step 5: State a limitation of the model**

- **[B1]** Gives a valid limitation, e.g. "Model ignores air resistance/wind", "Model treats ball as a point mass", or "Model is valid only for $0 \le x \le 20$".

#### **Part (c)**

**Step 6: Calculate $H$ at $x = 16$**

$$H(16) = -0.03(16 - 9)^2 + 4.43 = -0.03(49) + 4.43 = 2.96\,\text{m}$$

- **[M1]** Substitutes $x = 16$ into their expression for $H$.

**Step 7: Compare height with $2.5\,\text{m}$ and draw conclusion**

Since $2.96\,\text{m} > 2.5\,\text{m}$, the ball is higher than $2.5\,\text{m}$ at $x = 16$, so Chandra **cannot** catch the ball.

- **[A1]** Obtains $H = 2.96\,\text{m}$ and concludes that Chandra cannot catch the ball as $2.96 > 2.5$.

---
topic: "Parametric Equations"
subtopic: "Parametric differentiation"
---
### **Question 10**

**Figure 4** shows a sketch of the curve $C$ with parametric equations

$$x = (t+3)^2, \quad y = 1 - t^3 \quad -2 \le t \le 1$$

**Figure 4** shows a smooth curve $C$ decreasing from left to right.

The point $P$ with coordinates $(4, 2)$ lies on $C$.

**(a)** Using parametric differentiation, show that the tangent to $C$ at $P$ has equation

$$3x + 4y = 20$$

**(5)**

The curve $C$ is used to model the profile of a slide at a water park.

Units are in metres, with $y$ being the height of the slide above water level.

**(b)** Find, according to the model, the greatest height of the slide above water level.

**(1)**

### **Mark Scheme 10**

#### **Part (a)**

**Step 1: Differentiate $x$ and $y$ with respect to $t$**

$$\frac{\mathrm{d}x}{\mathrm{d}t} = 2(t + 3)$$
$$\frac{\mathrm{d}y}{\mathrm{d}t} = -3t^2$$

- **[M1]** Differentiates both $x$ and $y$ with respect to $t$.

**Step 2: Express $\frac{\mathrm{d}y}{\mathrm{d}x}$ in terms of $t$**

$$\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{-3t^2}{2(t+3)}$$

- **[M1]** Uses $\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{\mathrm{d}y/\mathrm{d}t}{\mathrm{d}x/\mathrm{d}t}$.

**Step 3: Determine parameter $t$ at point $P(4, 2)$**

$$x = 4 \Rightarrow (t+3)^2 = 4 \Rightarrow t+3 = \pm 2 \Rightarrow t = -1 \text{ or } -5$$

Since $-2 \le t \le 1$, $t = -1$. (Check $y$: $1 - (-1)^3 = 2$).

- **[M1]** Solves for $t$ at $P(4, 2)$ to find $t = -1$.

**Step 4: Find gradient at $P$**

$$m = \left.\frac{\mathrm{d}y}{\mathrm{d}x}\right|_{t=-1} = \frac{-3(-1)^2}{2(-1+3)} = -\frac{3}{4}$$

- **[A1]** Correct gradient $m = -\frac{3}{4}$.

**Step 5: Form tangent equation and rearrange to given form**

$$y - 2 = -\frac{3}{4}(x - 4)$$
$$4(y - 2) = -3(x - 4) \Rightarrow 4y - 8 = -3x + 12 \Rightarrow 3x + 4y = 20$$

- **[A1]** Correctly completes proof to show $3x + 4y = 20$.

#### **Part (b)**

**Step 6: Find maximum height of slide**

For $-2 \le t \le 1$, maximum $y$ occurs at $t = -2$:
$$y_{\max} = 1 - (-2)^3 = 1 - (-8) = 9\,\text{m}$$

- **[B1]** Correct greatest height of $9\,\text{m}$ (or 9).

---
topic: "Integration"
subtopic: "Integration by parts"
---
### **Question 11**

In this question you must show all stages of your working.
Solutions relying entirely on calculator technology are not acceptable.

**Figure 5** shows a sketch of part of the curve $C$ with equation

$$y = 8x^2 \mathrm{e}^{-3x} \quad x \ge 0$$

**Figure 5** shows the shaded finite region $R$ bounded by $C$, the line $x = 1$, and the $x$-axis.

The finite region $R$, shown shaded in Figure 5, is bounded by
- the curve $C$
- the line with equation $x = 1$
- the $x$-axis

Find the exact area of $R$, giving your answer in the form

$$A + B\mathrm{e}^{-3}$$

where $A$ and $B$ are rational numbers to be found.

**(5)**

### **Mark Scheme 11**

**Step 1: Set up integral for Area**

$$\text{Area} = \int_{0}^{1} 8x^2 \mathrm{e}^{-3x} \,\mathrm{d}x$$

- **[M1]** Sets up integral $\int_0^1 8x^2 \mathrm{e}^{-3x} \,\mathrm{d}x$.

**Step 2: First integration by parts**

Let $u = 8x^2 \Rightarrow \frac{\mathrm{d}u}{\mathrm{d}x} = 16x$ and $\frac{\mathrm{d}v}{\mathrm{d}x} = \mathrm{e}^{-3x} \Rightarrow v = -\frac{1}{3}\mathrm{e}^{-3x}$

$$\int 8x^2 \mathrm{e}^{-3x} \,\mathrm{d}x = -\frac{8}{3}x^2 \mathrm{e}^{-3x} + \frac{16}{3} \int x \mathrm{e}^{-3x} \,\mathrm{d}x$$

- **[M1]** Applies integration by parts to obtain $C x^2 \mathrm{e}^{-3x} \pm D \int x \mathrm{e}^{-3x} \,\mathrm{d}x$.

**Step 3: Second integration by parts**

For $\int x \mathrm{e}^{-3x} \,\mathrm{d}x$, let $u = x$ and $\frac{\mathrm{d}v}{\mathrm{d}x} = \mathrm{e}^{-3x}$:

$$\int x \mathrm{e}^{-3x} \,\mathrm{d}x = -\frac{1}{3}x\mathrm{e}^{-3x} - \frac{1}{9}\mathrm{e}^{-3x}$$

Indefinite integral:
$$\left[ -\frac{8}{3}x^2 \mathrm{e}^{-3x} - \frac{16}{9}x\mathrm{e}^{-3x} - \frac{16}{27}\mathrm{e}^{-3x} \right]_0^1$$

- **[dM1]** Applies integration by parts a second time to integrate $\int x \mathrm{e}^{-3x} \,\mathrm{d}x$.
- **[A1]** Correct indefinite integral $-\mathrm{e}^{-3x}\left(\frac{8}{3}x^2 + \frac{16}{9}x + \frac{16}{27}\right)$ or equivalent.

**Step 4: Substitute limits 0 and 1**

At $x = 1$: $-\mathrm{e}^{-3}\left(\frac{8}{3} + \frac{16}{9} + \frac{16}{27}\right) = -\frac{136}{27}\mathrm{e}^{-3}$

At $x = 0$: $-\mathrm{e}^0\left(0 + 0 + \frac{16}{27}\right) = -\frac{16}{27}$

$$\text{Area} = -\frac{136}{27}\mathrm{e}^{-3} - \left(-\frac{16}{27}\right) = \frac{16}{27} - \frac{136}{27}\mathrm{e}^{-3}$$

- **[A1]** Correct final answer $\frac{16}{27} - \frac{136}{27}\mathrm{e}^{-3}$ (where $A = \frac{16}{27}$ and $B = -\frac{136}{27}$).

---
topic: "Integration"
subtopic: "Modelling with differential equations"
---
### **Question 12**

**(a)** Express

$$\frac{1}{V(25 - V)}$$

in partial fractions.

**(2)**

The volume, $V$ microlitres, of a plant cell $t$ hours after the plant is watered is modelled by the differential equation

$$\frac{\mathrm{d}V}{\mathrm{d}t} = \frac{1}{10}V(25 - V)$$

The plant cell has an initial volume of 20 microlitres.

**(b)** Find, according to the model, the time taken, in minutes, for the volume of the plant cell to reach 24 microlitres.

**(5)**

**(c)** Show that

$$V = \frac{A}{\mathrm{e}^{-kt} + B}$$

where $A, B$ and $k$ are constants to be found.

**(3)**

The model predicts that there is an upper limit, $L$ microlitres, on the volume of the plant cell.

**(d)** Find the value of $L$, giving a reason for your answer.

**(2)**

### **Mark Scheme 12**

#### **Part (a)**

**Step 1: Set up and solve partial fractions**

$$\frac{1}{V(25-V)} = \frac{P}{V} + \frac{Q}{25-V} \Rightarrow 1 = P(25-V) + QV$$

$V = 0 \Rightarrow P = \frac{1}{25}$

$V = 25 \Rightarrow Q = \frac{1}{25}$

$$\frac{1}{25V} + \frac{1}{25(25-V)}$$

- **[M1]** Sets $\frac{1}{V(25-V)} = \frac{P}{V} + \frac{Q}{25-V}$ and attempts to find at least one constant.
- **[A1]** Correct partial fractions $\frac{1/25}{V} + \frac{1/25}{25-V}$ or $\frac{1}{25V} + \frac{1}{25(25-V)}$.

#### **Part (b)**

**Step 2: Separate variables and integrate**

$$\int \frac{1}{V(25-V)} \,\mathrm{d}V = \int \frac{1}{10} \,\mathrm{d}t$$
$$\frac{1}{25}\left(\ln V - \ln(25-V)\right) = \frac{1}{10}t + c$$
$$\ln\left(\frac{V}{25-V}\right) = \frac{5}{2}t + C$$

- **[M1]** Separates variables and attempts integration of both sides.
- **[A1]** Correct integrated form $\frac{1}{25}\ln\left(\frac{V}{25-V}\right) = \frac{1}{10}t + c$.

**Step 3: Evaluate constant of integration using $t=0, V=20$**

$$\ln\left(\frac{20}{5}\right) = C \Rightarrow C = \ln 4$$
$$\ln\left(\frac{V}{25-V}\right) = \frac{5}{2}t + \ln 4$$

- **[M1]** Substitutes $t=0, V=20$ to find constant $C = \ln 4$.

**Step 4: Solve for $t$ when $V = 24$**

$$\ln\left(\frac{24}{1}\right) = \frac{5}{2}t + \ln 4 \Rightarrow \frac{5}{2}t = \ln 24 - \ln 4 = \ln 6$$
$$t = \frac{2}{5}\ln 6 \text{ hours}$$

- **[M1]** Substitutes $V=24$ and solves for $t$.

**Step 5: Convert time to minutes**

$$\text{Time in minutes} = \frac{2}{5}\ln(6) \times 60 = 24\ln 6 \approx 43.0 \text{ minutes}$$

- **[A1]** $43.0$ minutes (or $24\ln 6$ minutes, approx 43 minutes).

#### **Part (c)**

**Step 6: Rearrange for $V$ in terms of $t$**

$$\frac{V}{25-V} = 4\mathrm{e}^{2.5t} \Rightarrow V = 100\mathrm{e}^{2.5t} - 4\mathrm{e}^{2.5t}V$$
$$V(4\mathrm{e}^{2.5t} + 1) = 100\mathrm{e}^{2.5t}$$

- **[M1]** Rearranges $\frac{V}{25-V} = 4\mathrm{e}^{2.5t}$ to make $V$ the subject.

**Step 7: Convert to requested form**

Divide numerator and denominator by $\mathrm{e}^{2.5t}$:
$$V = \frac{100}{4 + \mathrm{e}^{-2.5t}} = \frac{100}{\mathrm{e}^{-2.5t} + 4}$$

- **[M1]** Divides numerator and denominator by $\mathrm{e}^{2.5t}$ to get form $\frac{A}{\mathrm{e}^{-kt} + B}$.
- **[A1]** Correct expression $V = \frac{100}{\mathrm{e}^{-2.5t} + 4}$ with $A=100, B=4, k=2.5$.

#### **Part (d)**

**Step 8: Determine upper limit $L$**

As $t \to \infty$, $\mathrm{e}^{-2.5t} \to 0$, so $V \to \frac{100}{0 + 4} = 25$.

- **[B1]** States $L = 25$.
- **[B1]** Gives valid reason, e.g. as $t \to \infty$, $\mathrm{e}^{-2.5t} \to 0 \Rightarrow V \to 25$ microlitres.

---
topic: "Exponentials and Logarithms"
subtopic: "Logarithms and non-linear data"
---
### **Question 13**

The world human population, $P$ billions, is modelled by the equation

$$P = ab^t$$

where $a$ and $b$ are constants and $t$ is the number of years after 2004

Using the estimated population figures for the years from 2004 to 2007, a graph is plotted of $\log_{10} P$ against $t$.

The points lie approximately on a straight line with
- gradient 0.0054
- intercept 0.81 on the $\log_{10} P$ axis

**(a)** Estimate, to 3 decimal places, the value of $a$ and the value of $b$.

**(4)**

In the context of the model,

**(b)**

**(i)** interpret the value of the constant $a$,

**(ii)** interpret the value of the constant $b$.

**(2)**

**(c)** Use the model to estimate the world human population in 2030

**(2)**

**(d)** Comment on the reliability of the answer to part (c).

**(1)**

### **Mark Scheme 13**

#### **Part (a)**

**Step 1: Take logarithms of both sides**

$$\log_{10} P = \log_{10}(ab^t) = \log_{10} a + t \log_{10} b$$

- **[M1]** Takes logarithms of $P = ab^t$ to obtain $\log_{10} P = \log_{10} a + t \log_{10} b$.

**Step 2: Compare with given gradient and intercept**

$$\log_{10} a = 0.81$$
$$\log_{10} b = 0.0054$$

- **[M1]** Equates $\log_{10} a = 0.81$ and $\log_{10} b = 0.0054$.

**Step 3: Solve for $a$ and $b$**

$$a = 10^{0.81} \approx 6.45654\dots \approx 6.457$$
$$b = 10^{0.0054} \approx 1.01251\dots \approx 1.013$$

- **[A1]** $a = 6.457$ (to 3 d.p.).
- **[A1]** $b = 1.013$ (to 3 d.p.).

#### **Part (b)**

**Step 4: Interpret $a$ and $b$**

- **[B1]** (i) $a$ represents the estimated world human population in 2004 (6.457 billion).
- **[B1]** (ii) $b$ represents the annual population growth multiplier (e.g. population increases by ~1.25% or 1.3% per year).

#### **Part (c)**

**Step 5: Calculate population in 2030 ($t = 26$)**

$$P = 6.45654 \times (1.01251)^{26} = 10^{0.81 + 26(0.0054)} = 10^{0.9504} \approx 8.92 \text{ billion}$$

- **[M1]** Substitutes $t = 26$ into $P = ab^t$ or $\log_{10} P = 0.81 + 0.0054(26)$.
- **[A1]** $8.92$ billion (or between 8.9 and 9.0 billion).

#### **Part (d)**

**Step 6: Comment on reliability**

- **[B1]** States that the estimate is unreliable because $t = 26$ involves extrapolating far beyond the initial data period of 2004–2007 (or population growth rates may change).

---
topic: "Circles"
subtopic: "Equation of a circle"
---
### **Question 14**

The circle $C_1$ has equation

$$x^2 + y^2 - 6x + 14y + 33 = 0$$

**(a)** Find

**(i)** the coordinates of the centre of $C_1$

**(ii)** the radius of $C_1$

**(3)**

A different circle $C_2$
- has centre with coordinates $(-6, -8)$
- has radius $k$, where $k$ is a constant

Given that $C_1$ and $C_2$ intersect at 2 distinct points,

**(b)** find the range of values of $k$, writing your answer in set notation.

**(5)**

### **Mark Scheme 14**

#### **Part (a)**

**Step 1: Complete the square for $C_1$**

$$(x - 3)^2 - 9 + (y + 7)^2 - 49 + 33 = 0$$
$$(x - 3)^2 + (y + 7)^2 = 25$$

- **[M1]** Completes the square for both $x$ and $y$.
- **[A1]** Centre of $C_1$ is $(3, -7)$.
- **[A1]** Radius of $C_1$ is $\sqrt{25} = 5$.

#### **Part (b)**

**Step 2: Find distance $d$ between the centres of $C_1$ and $C_2$**

Centre $1 = (3, -7)$, Centre $2 = (-6, -8)$
$$d = \sqrt{(-6 - 3)^2 + (-8 - (-7))^2} = \sqrt{(-9)^2 + (-1)^2} = \sqrt{82}$$

- **[M1]** Applies distance formula to find distance between $(3, -7)$ and $(-6, -8)$.
- **[A1]** $d = \sqrt{82}$.

**Step 3: Apply condition for 2 distinct points of intersection**

Two circles with radii $r_1 = 5$ and $r_2 = k$ intersect at 2 distinct points if and only if:
$$|r_1 - r_2| < d < r_1 + r_2$$
$$|5 - k| < \sqrt{82} < 5 + k$$

- **[M1]** Sets up condition for two intersecting circles: $|r_1 - r_2| < d < r_1 + r_2$.

**Step 4: Solve inequalities for $k$**

From $5 + k > \sqrt{82} \Rightarrow k > \sqrt{82} - 5$

From $|5 - k| < \sqrt{82} \Rightarrow 5 - \sqrt{82} < k < 5 + \sqrt{82}$

Combining: $\sqrt{82} - 5 < k < \sqrt{82} + 5$

- **[A1]** Correct lower bound $k > \sqrt{82} - 5$ and upper bound $k < \sqrt{82} + 5$.

**Step 5: Write final range in set notation**

$$\{k \in \mathbb{R} : \sqrt{82} - 5 < k < \sqrt{82} + 5\}$$

- **[A1]** Correct set notation solution.

---
topic: "Differentiation"
subtopic: "Implicit differentiation"
---
### **Question 15**

The curve $C$ has equation

$$(x + y)^3 = 3x^2 - 3y - 2$$

**(a)** Find an expression for $\frac{\mathrm{d}y}{\mathrm{d}x}$ in terms of $x$ and $y$.

**(5)**

The point $P(1, 0)$ lies on $C$.

**(b)** Show that the normal to $C$ at $P$ has equation

$$y = -2x + 2$$

**(2)**

**(c)** Prove that the normal to $C$ at $P$ does not meet $C$ again.

You should use algebra for your proof and make your reasoning clear.

**(5)**

### **Mark Scheme 15**

#### **Part (a)**

**Step 1: Differentiate implicitly with respect to $x$**

$$\frac{\mathrm{d}}{\mathrm{d}x}\left((x+y)^3\right) = 3(x+y)^2\left(1 + \frac{\mathrm{d}y}{\mathrm{d}x}\right)$$
$$\frac{\mathrm{d}}{\mathrm{d}x}\left(3x^2 - 3y - 2\right) = 6x - 3\frac{\mathrm{d}y}{\mathrm{d}x}$$

- **[M1]** Applies chain rule to differentiate $(x+y)^3$ obtaining $3(x+y)^2\left(1 + \frac{\mathrm{d}y}{\mathrm{d}x}\right)$.
- **[A1]** Correct RHS derivative $6x - 3\frac{\mathrm{d}y}{\mathrm{d}x}$.

**Step 2: Collect terms in $\frac{\mathrm{d}y}{\mathrm{d}x}$**

$$3(x+y)^2 + 3(x+y)^2 \frac{\mathrm{d}y}{\mathrm{d}x} = 6x - 3\frac{\mathrm{d}y}{\mathrm{d}x}$$
$$\left(3(x+y)^2 + 3\right) \frac{\mathrm{d}y}{\mathrm{d}x} = 6x - 3(x+y)^2$$

- **[M1]** Groups all $\frac{\mathrm{d}y}{\mathrm{d}x}$ terms on one side.

**Step 3: Solve for $\frac{\mathrm{d}y}{\mathrm{d}x}$**

$$\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{6x - 3(x+y)^2}{3(x+y)^2 + 3} = \frac{2x - (x+y)^2}{(x+y)^2 + 1}$$

- **[A1]** Correct unsimplified expression for $\frac{\mathrm{d}y}{\mathrm{d}x}$.
- **[A1]** Fully simplified derivative $\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{2x - (x+y)^2}{(x+y)^2 + 1}$.

#### **Part (b)**

**Step 4: Find gradient of normal at $P(1, 0)$**

At $x = 1, y = 0$:
$$\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{2(1) - (1+0)^2}{(1+0)^2 + 1} = \frac{1}{2}$$
$$m_N = -\frac{1}{1/2} = -2$$

- **[M1]** Evaluates derivative at $(1, 0)$ and uses $m_N = -\frac{1}{m_T}$.

**Step 5: Form normal equation**

$$y - 0 = -2(x - 1) \Rightarrow y = -2x + 2$$

- **[A1]** Correctly completes proof to show $y = -2x + 2$.

#### **Part (c)**

**Step 6: Substitute $y = 2 - 2x$ into $C$**

Note $x + y = x + (2 - 2x) = 2 - x$.

$$(2 - x)^3 = 3x^2 - 3(2 - 2x) - 2$$

- **[M1]** Substitutes normal equation $y = 2 - 2x$ into curve equation.

**Step 7: Expand and form cubic polynomial**

$$8 - 12x + 6x^2 - x^3 = 3x^2 - 6 + 6x - 2$$
$$8 - 12x + 6x^2 - x^3 = 3x^2 + 6x - 8$$
$$x^3 - 3x^2 + 18x - 16 = 0$$

- **[M1]** Expands LHS and RHS correctly.
- **[A1]** Correct cubic equation $x^3 - 3x^2 + 18x - 16 = 0$.

**Step 8: Factor out $(x - 1)$**

$$(x - 1)(x^2 - 2x + 16) = 0$$

- **[M1]** Factors out $(x - 1)$ since $P(1, 0)$ is a known point of intersection.

**Step 9: Test quadratic factor for real roots**

For $x^2 - 2x + 16 = 0$:
$$\Delta = b^2 - 4ac = (-2)^2 - 4(1)(16) = 4 - 64 = -60 < 0$$

Since the discriminant is negative, there are no real solutions to the quadratic factor.
Thus $x = 1$ is the only real point of intersection, so the normal does not meet $C$ again.

- **[A1]** Shows discriminant of quadratic factor is negative ($\Delta = -60 < 0$) and concludes clearly that there are no further real points of intersection.
