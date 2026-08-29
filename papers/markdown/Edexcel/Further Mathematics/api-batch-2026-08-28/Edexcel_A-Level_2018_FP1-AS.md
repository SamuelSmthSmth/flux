---
topic: "Trigonometric Functions"
subtopic: "The t-formulae"
---
### **Question 1**

**(a)** Use the substitution $t = \tan\left(\frac{x}{2}\right)$ to show that the equation 

$$5\sin x + 12\cos x = 2$$

can be written in the form 

$$7t^2 - 5t - 5 = 0$$

**(3)**

**(b)** Hence solve, for $-180^\circ < x < 180^\circ$, the equation 

$$5\sin x + 12\cos x = 2$$

giving your answers to one decimal place. **(4)**

**(Total 7 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Substitute standard half-angle identities** 

Using $\sin x = \frac{2t}{1+t^2}$ and $\cos x = \frac{1-t^2}{1+t^2}$ where $t = \tan\left(\frac{x}{2}\right)$

- **[B1]** Correct expressions for $\sin x$ and $\cos x$ in terms of $t$.

**Step 2: Substitute into the given equation**

$$5\left(\frac{2t}{1+t^2}\right) + 12\left(\frac{1-t^2}{1+t^2}\right) = 2$$

- **[M1]** Substitutes correctly into the equation.

**Step 3: Simplify and rearrange**

$$\frac{10t + 12 - 12t^2}{1+t^2} = 2$$
$$10t + 12 - 12t^2 = 2 + 2t^2$$
$$14t^2 - 10t - 10 = 0$$
$$7t^2 - 5t - 5 = 0$$

- **[A1]** Correctly reaches the required quadratic equation with clear working.

#### **Part (b)**

**Step 4: Solve the quadratic equation for $t$**

$$t = \frac{5 \pm \sqrt{(-5)^2 - 4(7)(-5)}}{2(7)} = \frac{5 \pm \sqrt{165}}{14}$$
$$t \approx 1.278, \quad t \approx -0.5706$$

- **[M1]** Attempts to solve the quadratic equation to find values for $t$.

**Step 5: Find values for $x$ using $x = 2 \arctan(t)$**

For $t = 1.278$:
$$\frac{x}{2} = 51.95^\circ \Rightarrow x = 103.9^\circ$$

For $t = -0.5706$:
$$\frac{x}{2} = -29.71^\circ \Rightarrow x = -59.4^\circ$$

- **[M1]** Uses $x = 2\arctan(t)$ to find at least one value of $x$.

**Step 6: Check range and find any additional solutions**

Checking if other solutions lie within $-180^\circ < x < 180^\circ$:
$$x = 103.9^\circ, \quad x = -59.4^\circ$$
*(Note: no other values fall within the range)*

- **[A1]** One correct solution to one decimal place.
- **[A1]** Both correct solutions ($103.9^\circ$ and $-59.4^\circ$) and no extra invalid solutions within range.

---
topic: "Numerical Methods"
subtopic: "Iteration"
---
### **Question 2**

The temperature, $\theta\text{ }^\circ\text{C}$, of coffee in a cup, $t$ minutes after the cup of coffee is put in a room, is modelled by the differential equation

$$\frac{d\theta}{dt} = -k(\theta - 20)$$

where $k$ is a constant.

The coffee has an initial temperature of $80^\circ\text{C}$.

Using $k = 0.1$

**(a)** use two iterations of the approximation formula $\left(\frac{\text{d}y}{\text{d}x}\right)_0 \approx \frac{y_1 - y_0}{h}$ to estimate the temperature of the coffee $3$ minutes after it was put in the room. **(6)**

The coffee in a different cup, which also had an initial temperature of $80^\circ\text{C}$ when it was put in the room, cools more slowly.

**(b)** Use this information to suggest how the value of $k$ would need to be changed in the model. **(1)**

**(Total 7 marks)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Set up the step size**

Using two iterations to find the value at $t = 3$ implies a step size of $h = \frac{3}{2} = 1.5$.

- **[B1]** Correct step size $h = 1.5$ identified or used implicitly.

**Step 2: Apply the approximation formula for the first iteration**

Given $\theta_0 = 80$ at $t_0 = 0$, and $\frac{\text{d}\theta}{\text{d}t} = -0.1(\theta - 20)$:

$$\left(\frac{\text{d}\theta}{\text{d}t}\right)_0 = -0.1(80 - 20) = -6$$

- **[M1]** Calculates the gradient at the initial point.

$$\frac{\theta_1 - 80}{1.5} \approx -6 \Rightarrow \theta_1 = 80 + 1.5(-6) = 71$$

- **[A1]** Correct first estimate $\theta_1 = 71$.

**Step 3: Apply the approximation formula for the second iteration**

Calculate gradient at $\theta_1 = 71$:

$$\left(\frac{\text{d}\theta}{\text{d}t}\right)_1 = -0.1(71 - 20) = -5.1$$

- **[M1]** Calculates the gradient at the second point using $\theta_1$.

$$\frac{\theta_2 - 71}{1.5} \approx -5.1 \Rightarrow \theta_2 = 71 + 1.5(-5.1)$$

- **[M1]** Uses the iterative formula to set up the calculation for $\theta_2$.

$$\theta_2 = 71 - 7.65 = 63.35$$

- **[A1]** Correct final estimated temperature $63.4^\circ\text{C}$ (or $63.35$).

#### **Part (b)**

**Step 4: Suggest change to $k$**

Since the coffee cools more slowly, the rate of change of temperature is smaller in magnitude, so the value of $k$ needs to be **decreased** (made smaller).

- **[B1]** States that $k$ must be smaller / decrease.

---
topic: "Inequalities"
subtopic: "Algebraic methods"
---
### **Question 3**

Use algebra to find the values of $x$ for which

$$\frac{x}{x^2 - 2x - 3} \leqslant \frac{1}{x + 3}$$

**(Total 7 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Factorise the denominator**

$$x^2 - 2x - 3 = (x - 3)(x + 1)$$

- **[B1]** Correct factorisation of the quadratic denominator.

**Step 2: Rearrange the inequality**

$$\frac{x}{(x-3)(x+1)} - \frac{1}{x+3} \leqslant 0$$

- **[M1]** Collects all terms on one side with $\leqslant 0$.

**Step 3: Put terms over a common denominator**

$$\frac{x(x+3) - (x-3)(x+1)}{(x-3)(x+1)(x+3)} \leqslant 0$$

- **[M1]** Forms a single fraction with a common denominator.

**Step 4: Simplify the numerator**

Numerator: 
$$(x^2 + 3x) - (x^2 - 2x - 3) = x^2 + 3x - x^2 + 2x + 3 = 5x + 3$$
So the inequality becomes:
$$\frac{5x + 3}{(x-3)(x+1)(x+3)} \leqslant 0$$

- **[A1]** Correct simplified single-fraction inequality.

**Step 5: Identify critical values**

Critical values are $x = -\frac{3}{5}$, $x = 3$, $x = -1$, and $x = -3$.

- **[B1]** All four critical values correctly identified.

**Step 6: Determine regions using a sign table, graph, or test values**

Critical values partition the real line: $x < -3$, $-3 < x < -1$, $-\frac{3}{5} \leqslant x < 3$, etc.
Testing regions yields:
$$-3 < x < -1 \quad \text{and} \quad -\frac{3}{5} \leqslant x < 3$$

- **[M1]** Method to test regions or sketch the curve to find valid intervals.
- **[A1]** Fully correct set of inequalities: $-3 < x < -1$ and $-\frac{3}{5} \leqslant x < 3$ (or equivalent).

---
topic: "Vectors"
subtopic: "Solving geometric problems"
---
### **Question 4**

A scientist is investigating the properties of a crystal. The crystal is modelled as a tetrahedron whose vertices are $A(12, 4, -1)$, $B(10, 15, -3)$, $C(5, 8, 5)$ and $D(2, 2, -6)$, where the length of unit is the millimetre. The mass of the crystal is $0.5\text{ grams}$.

**(a)** Show that, to one decimal place, the area of the triangular face $ABC$ is $52.2\text{ mm}^2$ **(3)**

**(b)** Find the density of the crystal, giving your answer in $\text{g cm}^{-3}$ **(6)**

**(Total 9 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Find vectors representing two sides of triangle $ABC$**

$$\vec{AB} = \begin{pmatrix} 10 - 12 \\ 15 - 4 \\ -3 - (-1) \end{pmatrix} = \begin{pmatrix} -2 \\ 11 \\ -2 \end{pmatrix}, \quad \vec{AC} = \begin{pmatrix} 5 - 12 \\ 8 - 4 \\ 5 - (-1) \end{pmatrix} = \begin{pmatrix} -7 \\ 4 \\ 6 \end{pmatrix}$$

- **[M1]** Finds at least one correct vector $\vec{AB}$ or $\vec{AC}$.

**Step 2: Calculate the cross product $\vec{AB} \times \vec{AC}$**

$$\vec{AB} \times \vec{AC} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ -2 & 11 & -2 \\ -7 & 4 & 6 \end{vmatrix} = \mathbf{i}(66 - (-8)) - \mathbf{j}(-12 - 14) + \mathbf{k}(-8 - (-77))$$
$$= \begin{pmatrix} 74 \\ 26 \\ 69 \end{pmatrix}$$

- **[M1]** Correct method for calculating the cross product.

**Step 3: Calculate the area of the triangle**

$$\text{Area} = \frac{1}{2} |\vec{AB} \times \vec{AC}| = \frac{1}{2} \sqrt{74^2 + 26^2 + 69^2} = \frac{1}{2} \sqrt{5476 + 676 + 4761} = \frac{1}{2} \sqrt{10913} \approx 52.235 \dots$$

Rounding to one decimal place gives $52.2\text{ mm}^2$.

- **[A1]** Correct conclusion with sufficient intermediate steps shown to justify $52.2\text{ mm}^2$.

#### **Part (b)**

**Step 4: Find the vector $\vec{AD}$**

$$\vec{AD} = \begin{pmatrix} 2 - 12 \\ 2 - 4 \\ -6 - (-1) \end{pmatrix} = \begin{pmatrix} -10 \\ -2 \\ -5 \end{pmatrix}$$

- **[B1]** Correct vector $\vec{AD}$.

**Step 5: Calculate the scalar triple product to find the volume of the tetrahedron**

$$\text{Volume} = \frac{1}{6} |\vec{AD} \cdot (\vec{AB} \times \vec{AC})|$$
$$\vec{AD} \cdot (\vec{AB} \times \vec{AC}) = (-10)(74) + (-2)(26) + (-5)(69) = -740 - 52 - 345 = -1137$$
$$\text{Volume} = \frac{1}{6} |-1137| = \frac{1137}{6} = 189.5\text{ mm}^3$$

- **[M1]** Uses the scalar triple product formula for the volume of a tetrahedron.
- **[A1]** Correct volume in $\text{mm}^3$ ($189.5$).

**Step 6: Convert volume to $\text{cm}^3$**

Since $1\text{ cm} = 10\text{ mm}$, $1\text{ cm}^3 = 1000\text{ mm}^3$.

$$\text{Volume in cm}^3 = \frac{189.5}{1000} = 0.1895\text{ cm}^3$$

- **[M1]** Correct unit conversion from $\text{mm}^3$ to $\text{cm}^3$.

**Step 7: Calculate density**

$$\text{Density} = \frac{\text{Mass}}{\text{Volume}} = \frac{0.5\text{ g}}{0.1895\text{ cm}^3} \approx 2.6385\dots \text{g cm}^{-3}$$

Rounding to 3 significant figures: $2.64\text{ g cm}^{-3}$.

- **[A1]** Correct density value ($2.64\text{ g cm}^{-3}$).

---
topic: "Circles"
subtopic: "Equation of a circle"
---
### **Question 5**

The rectangular hyperbola $H$ has equation $xy = c^2$, where $c$ is a non-zero constant.

The point $P\left(cp, \frac{c}{p}\right)$, where $p \neq 0$, lies on $H$.

**(a)** Use calculus to show that an equation of the normal to $H$ at $P$ is 

$$p^3x - py + c(1 - p^4) = 0$$

**(4)**

The normal to $H$ at the point $P$ meets $H$ again at the point $Q$.

**(b)** Find the coordinates of the midpoint of $PQ$ in terms of $c$ and $p$, simplifying your answer where possible. **(6)**

**(Total 10 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Differentiate $y = \frac{c^2}{x}$ to find the gradient of the tangent**

$$y = c^2 x^{-1} \Rightarrow \frac{\text{d}y}{\text{d}x} = -c^2 x^{-2} = -\frac{c^2}{x^2}$$

- **[M1]** Attempts to differentiate the equation of the hyperbola using calculus.

**Step 2: Evaluate the gradient at point $P$**

Substitute $x = cp$:
$$\text{Gradient of tangent} = -\frac{c^2}{(cp)^2} = -\frac{c^2}{c^2 p^2} = -\frac{1}{p^2}$$

- **[A1]** Correct gradient of the tangent at $P$.

**Step 3: Find the gradient of the normal**

$$\text{Gradient of normal} = -\frac{1}{-\frac{1}{p^2}} = p^2$$

- **[B1]** Correct gradient of the normal ($p^2$).

**Step 4: Form the equation of the normal**

$$y - \frac{c}{p} = p^2(x - cp)$$
Multiply through by $p$:
$$py - c = p^3x - c0^4 \quad \text{(or similar)}$$
$$p^3x - py + c - c\cdot p^4 = 0 \Rightarrow p^3x - py + c(1 - p^4) = 0$$

- **[A1]** Correctly derives the given equation of the normal with no errors.

#### **Part (b)**

**Step 5: Substitute $y = \frac{c^2}{x}$ into the equation of the normal to find point $Q$**

$$p^3x - p\left(\frac{c^2}{x}\right) + c(1 - p^4) = 0$$
Multiply through by $x$:
$$p^3x^2 + c(1 - p^4)x - pc^2 = 0$$

- **[M1]** Substitutes $y = \frac{c^2}{x}$ into the normal equation to form a quadratic in $x$.

**Step 6: Use the known root $x_P = cp$ to factorise or solve for $x_Q$**

Since $x = cp$ is a root (corresponding to point $P$), we can divide by $(x - cp)$ or use the sum of roots:
$$\text{Sum of roots } x_P + x_Q = -\frac{c(1 - p^4)}{p^3}$$
$$cp + x_Q = \frac{c(p^4 - 1)}{p^3} = \frac{cp^4 - c}{p^3} = cp - \frac{c}{p^3}$$
$$x_Q = -\frac{c}{p^3}$$

- **[M1]** Uses the sum of roots or factorisation using the known root $x = cp$.
- **[A1]** Correct $x$-coordinate for $Q$: $x_Q = -\frac{c}{p^3}$.

**Step 7: Find the $y$-coordinate of $Q$**

$$y_Q = \frac{c^2}{x_Q} = \frac{c^2}{-\frac{c}{p^3}} = -cp^3$$

- **[A1]** Correct $y$-coordinate for $Q$: $y_Q = -cp^3$.

**Step 8: Calculate the coordinates of the midpoint of $PQ$**

Midpoint $= \left(\frac{x_P + x_Q}{2}, \frac{y_P + y_Q}{2}\right)$

$$x_{\text{mid}} = \frac{cp - \frac{c}{p^3}}{2} = \frac{c}{2}\left(p - \frac{1}{p^3}\right)$$
$$y_{\text{mid}} = \frac{\frac{c}{p} - cp^3}{2} = \frac{c}{2}\left(\frac{1}{p} - p^3\right)$$

- **[M1]** Uses the midpoint formula with coordinates of $P$ and $Q$.
- **[A1]** Fully simplified correct coordinates of the midpoint: $\left(\frac{c}{2}\left(p - \frac{1}{p^3}\right), \frac{c}{2}\left(\frac{1}{p} - p^3\right)\right)$ (or equivalent).

---
topic: "Trigonometric Functions"
subtopic: "General"
---
### **Examiner Report 1**

**Question 1**
This question was generally well answered, with many candidates demonstrating good competency in using the $t$-substitution and solving resulting trigonometric equations.
In part (a), almost all candidates correctly recalled the standard definitions $\sin x = \frac{2t}{1+t^2}$ and $\cos x = \frac{1-t^2}{1+t^2}$ and substituted them correctly. Errors were rare, usually restricted to algebraic slips when clearing denominators.
In part (b), most candidates successfully solved the quadratic equation to find two values for $t$. The majority correctly applied $x = 2\arctan(t)$ to find the corresponding angles. A small number of candidates lost accuracy marks by rounding prematurely or failing to check whether other solutions existed within the specified range $-180^\circ < x < 180^\circ$.

**Question 2**
Part (a) was answered well by well-prepared candidates who understood the iterative procedure. The step size $h = 1.5$ was correctly identified by most, though a few candidates incorrectly used $h = 3$ or misunderstood the number of iterations required. Arithmetic errors in evaluating intermediate gradients were the most common source of lost marks.
In part (b), most candidates understood that a slower rate of cooling corresponds to a smaller value of $k$, and gave clear, concise suggestions.

**Question 3**
This question on algebraic inequalities proved challenging for many candidates. A common error was to cross-multiply by $(x^2 - 2x - 3)(x + 3)$ without considering the signs of the expressions, leading to incorrect inequalities or missing critical values. Candidates who correctly collected all terms on one side, put them over a common denominator, and analysed the sign of the resulting rational expression achieved much higher success. Identifying all critical values correctly was key, and many candidates lost final marks by omitting one of the boundary values or failing to state the intervals correctly.

**Question 4**
Part (a) was well answered. Most candidates knew how to find vectors $\vec{AB}$ and $\vec{AC}$, calculate their cross product, and hence find the area of the triangular face. Errors were generally arithmetic.
In part (b), many candidates successfully found the volume of the tetrahedron using the scalar triple product. However, a significant number of candidates struggled with unit conversions, frequently confusing $\text{mm}^3$ and $\text{cm}^3$, leading to incorrect density calculations. Candidates are reminded to pay careful attention to units in applied modelling questions.

**Question 5**
This question tested calculus and coordinate geometry of rectangular hyperbolas and proved to be a good discriminator.
In part (a), almost all candidates successfully differentiated $xy = c^2$ to find the gradient of the tangent, deduced the gradient of the normal, and substituted point $P$ to establish the given equation.
In part (b), finding the coordinates of $Q$ required substituting the curve equation into the normal equation. While many candidates successfully formed the quadratic equation in $x$, some struggled to simplify or solve it efficiently without making algebraic errors. Using the known root $x = cp$ (via sum of roots or factorisation) was the most efficient method and was used effectively by able candidates. Finding the midpoint coordinates was generally done correctly once $Q$ was found, though algebraic simplification of the final expressions was sometimes incomplete.
