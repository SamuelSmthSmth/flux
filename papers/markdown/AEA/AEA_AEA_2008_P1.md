---
topic: "Sequences and Series"
subtopic: "Arithmetic series"
---
### **Question 1**

The first and second terms of an arithmetic series are $200$ and $197.5$ respectively.

The sum to $n$ terms of the series is $S_n$.

Find the largest positive value of $S_n$.

**(Total 5 marks)**

### **Mark Scheme 1**

**Step 1: Identify first term and common difference** $a = 200$, $d = -2.5$

- **[M1]** Identifies $a$ and $d$, and sets $u_n = 0$.

**Step 2: Find the term index where terms become non-positive** $u_n = 0 \Rightarrow 200 - \frac{5}{2}(n - 1) = 0 \Rightarrow n = 81$

- **[A1]** Obtains $n = 81$.

**Step 3: Determine $n$ for maximum sum** Maximum sum occurs when $n = 80$ or $n = 81$.

- **[M1]** Uses $S_n$ formula with their $n = 80$ or $n = 81$.

**Step 4: Calculate the maximum sum**

$$S_{80} = \frac{80}{2}\left( 2(200) + (80 - 1)(-2.5) \right) = 40(400 - 197.5) = 40(202.5) = 8100$$

- **[A1]** Correct evaluation of $S_{80}$ (or $S_{81}$).
- **[A1]** Final answer 8100.

---
topic: "Integration"
subtopic: "Solving differential equations"
---
### **Question 2**

The points $(x, y)$ on the curve $C$ satisfy

$$(x + 1)(x + 2)\frac{dy}{dx} = xy.$$

The line with equation $y = 2x + 5$ is the tangent to $C$ at a point $P$.

**(a)** Find the coordinates of $P$. **(4)**

**(b)** Find the equation of $C$, giving your answer in the form $y = \text{f}(x)$. **(8)**

**(Total 12 marks)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Substitute the gradient at $P$** Since $y = 2x + 5$ is tangent to $C$, $\frac{dy}{dx} = 2$.

$$2(x + 1)(x + 2) = xy$$

- **[M1]** Substitutes $\frac{dy}{dx} = 2$ into the differential equation.

**Step 2: Substitute $y = 2x + 5$**

$$2(x^2 + 3x + 2) = x(2x + 5)$$

- **[M1]** Substitutes $y = 2x + 5$ to form an equation in $x$ and attempts to solve.

**Step 3: Solve for $x$**

$$2x^2 + 6x + 4 = 2x^2 + 5x \Rightarrow x = -4$$

- **[A1]** $x = -4$

**Step 4: Find $y$-coordinate** $y = 2(-4) + 5 = -3$

- **[A1]** $y = -3$, so $P = (-4, -3)$.

#### **Part (b)**

**Step 5: Separate variables**

$$\int \frac{1}{y} \, dy = \int \frac{x}{(x + 1)(x + 2)} \, dx$$

- **[M1]** Attempts separation of variables.

**Step 6: Express integrand using partial fractions**

$$\frac{x}{(x + 1)(x + 2)} = \frac{2}{x + 2} - \frac{1}{x + 1}$$

- **[M1]** Attempts partial fraction decomposition.

**Step 7: Integrate both sides**

$$\ln|y| = 2\ln|x + 2| - \ln|x + 1| + c$$

- **[M1]** Correct log integration for at least one term.
- **[A1]** Fully correct integration including constant of integration.

**Step 8: Apply laws of logarithms**

$$\ln|y| = \ln\left| \frac{A(x + 2)^2}{x + 1} \right|$$

- **[M1]** Uses log rules to combine terms into a single logarithmic expression.

**Step 9: Remove logarithms**

$$y = \frac{A(x + 2)^2}{x + 1}$$

- **[M1]** Obtains explicit form for $y$ containing a constant $A$ (or $\text{e}^c$).

**Step 10: Substitute coordinates of $P(-4, -3)$**

$$-3 = \frac{A(-4 + 2)^2}{-4 + 1} \Rightarrow -3 = \frac{4A}{-3} \Rightarrow A = \frac{9}{4}$$

- **[M1]** Uses their point $P$ to find the constant $A$.

**Step 11: Final equation**

$$y = \frac{9(x + 2)^2}{4(x + 1)}$$

- **[A1]** Correct equation for $C$.

---
topic: "Trigonometry and Modelling"
subtopic: "Using the angle addition formulae"
---
### **Question 3**

**(a)** Prove that $\tan 15^\circ = 2 - \sqrt{3}$ **(4)**

**(b)** Solve, for $0 \le \theta < 360^\circ$,

$$\sin(\theta + 60^\circ)\sin(\theta - 60^\circ) = (1 - \sqrt{3})\cos^2\theta$$ **(8)**

**(Total 12 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Use double-angle formula or angle difference formula for tangent**

Using $\tan 30^\circ = \frac{2\tan 15^\circ}{1 - \tan^2 15^\circ}$ with $t = \tan 15^\circ$:

$$\frac{1}{\sqrt{3}} = \frac{2t}{1 - t^2}$$

- **[B1]** Uses a known formula for $\tan 15^\circ$.
- **[M1]** Sets up an equation in $t = \tan 15^\circ$.

**Step 2: Solve the quadratic equation**

$$t^2 + 2\sqrt{3}t - 1 = 0 \Rightarrow t = \frac{-2\sqrt{3} \pm \sqrt{12 + 4}}{2} = -\sqrt{3} \pm 2$$

- **[M1]** Solves the quadratic equation for $t$.

**Step 3: Conclude with positive root** Since $\tan 15^\circ > 0$, $t = 2 - \sqrt{3}$.

- **[A1]** Obtains $2 - \sqrt{3}$ with justification for choosing the positive root.

#### **Part (b)**

**Step 4: Apply product-to-sum identity or expand left-hand side**

$$\sin(\theta + 60^\circ)\sin(\theta - 60^\circ) = \left(\sin\theta\cos 60^\circ + \cos\theta\sin 60^\circ\right)\left(\sin\theta\cos 60^\circ - \cos\theta\sin 60^\circ\right)$$

$$= \frac{1}{4}\sin^2\theta - \frac{3}{4}\cos^2\theta$$

- **[M1]** Expands or applies identity to $\sin(\theta + 60^\circ)\sin(\theta - 60^\circ)$.

**Step 5: Equate to right-hand side**

$$\frac{1}{4}\sin^2\theta - \frac{3}{4}\cos^2\theta = (1 - \sqrt{3})\cos^2\theta$$

- **[M1]** Sets expression equal to $(1 - \sqrt{3})\cos^2\theta$.

**Step 6: Rearrange into equation in $\tan^2\theta$**

$$\frac{1}{4}\sin^2\theta = \left(1 - \sqrt{3} + \frac{3}{4}\right)\cos^2\theta = \frac{7 - 4\sqrt{3}}{4}\cos^2\theta \Rightarrow \tan^2\theta = 7 - 4\sqrt{3}$$

- **[M1]** Rearranges into $\tan^2\theta = \dots$ or $\cos 2\theta = \dots$ or $\sin^2\theta = \dots$

**Step 7: Recognize $(2 - \sqrt{3})^2$**

$$(2 - \sqrt{3})^2 = 4 - 4\sqrt{3} + 3 = 7 - 4\sqrt{3} \Rightarrow \tan^2\theta = (2 - \sqrt{3})^2$$

- **[A1]** Correctly identifies $\tan^2\theta = (2 - \sqrt{3})^2$.

**Step 8: Take square root**

$$\tan\theta = \pm(2 - \sqrt{3})$$

- **[M1]** Takes square root considering both positive and negative values.
- **[A1]** Correct values for $\tan\theta$.

**Step 9: Find all solutions in range $0 \le \theta < 360^\circ$**

When $\tan\theta = 2 - \sqrt{3} = \tan 15^\circ$: $\theta = 15^\circ, 195^\circ$.

When $\tan\theta = -(2 - \sqrt{3})$: $\theta = 165^\circ, 345^\circ$.

- **[A1]** $\theta = 15^\circ, 195^\circ$
- **[A1]** $\theta = 165^\circ, 345^\circ$

---
topic: "Integration"
subtopic: "Finding areas"
---
### **Question 4**

**Figure 1** _(A sketch of the curve $C$ with equation $y = \cos x \ln(\sec x)$ for $-\frac{\pi}{2} < x < \frac{\pi}{2}$, showing maximum points $A$ and $B$, and a minimum at the origin $O$.)_

Figure 1 shows a sketch of the curve $C$ with equation

$$y = \cos x \ln(\sec x), \quad -\frac{\pi}{2} < x < \frac{\pi}{2}$$

The points $A$ and $B$ are maximum points on $C$.

**(a)** Find the coordinates of $B$ in terms of $\text{e}$. **(5)**

The finite region $R$ lies between $C$ and the line $AB$.

**(b)** Show that the area of $R$ is

$$\frac{2}{\text{e}}\arccos\left(\frac{1}{\text{e}}\right) + 2\ln\left(\text{e} + \sqrt{\text{e}^2 - 1}\right) - \frac{4}{\text{e}}\sqrt{\text{e}^2 - 1}.$$

$[\arccos x \text{ is an alternative notation for } \cos^{-1} x]$ **(8)**

**(Total 13 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Differentiate $y = \cos x \ln(\sec x)$ using product rule**

$$\frac{dy}{dx} = -\sin x \ln(\sec x) + \cos x \cdot \frac{\sec x \tan x}{\sec x} = -\sin x \ln(\sec x) + \sin x$$

- **[M1]** Applies product rule.
- **[A1]** Correct derivative: $\sin x(1 - \ln(\sec x))$.

**Step 2: Set derivative to zero for stationary points**

$$\sin x (1 - \ln(\sec x)) = 0$$

- **[M1]** Sets $\frac{dy}{dx} = 0$ and factorises out $\sin x$.

**Step 3: Solve for $x$ at maximum point $B$**

$$\ln(\sec x) = 1 \Rightarrow \sec x = \text{e} \Rightarrow \cos x = \frac{1}{\text{e}}$$

- **[A1]** Obtains $\cos x = \frac{1}{\text{e}}$ or $\sec x = \text{e}$.

**Step 4: Find coordinates of $B$**

$$x = \arccos\left(\frac{1}{\text{e}}\right), \quad y = \frac{1}{\text{e}}\ln(\text{e}) = \frac{1}{\text{e}}$$

So $B = \left( \arccos\left(\frac{1}{\text{e}}\right), \frac{1}{\text{e}} \right)$.

- **[A1]** Coordinates of $B$ correct in terms of $\text{e}$.

#### **Part (b)**

**Step 5: Integrate $y = \cos x \ln(\sec x)$ using integration by parts**

Let $u = \ln(\sec x)$, $dv = \cos x \, dx \Rightarrow du = \tan x \, dx$, $v = \sin x$.

$$I = \int \cos x \ln(\sec x) \, dx = \sin x \ln(\sec x) - \int \sin x \tan x \, dx$$

- **[M1]** Uses integration by parts.
- **[A1]** Correct first stage: $\sin x \ln(\sec x) - \int \sin x \tan x \, dx$.

**Step 6: Rewrite $\int \sin x \tan x \, dx$ into integrable form**

$$\int \sin x \tan x \, dx = \int \frac{\sin^2 x}{\cos x} \, dx = \int \frac{1 - \cos^2 x}{\cos x} \, dx = \int (\sec x - \cos x) \, dx$$

- **[M1]** Expresses $\sin x \tan x$ as $\sec x - \cos x$.

**Step 7: Perform integration**

$$\int (\sec x - \cos x) \, dx = \ln|\sec x + \tan x| - \sin x$$

So $I = \sin x \ln(\sec x) - \ln|\sec x + \tan x| + \sin x$.

- **[A1]** Correct integral of $\sec x$.
- **[A1]** Fully correct indefinite integral for $y$.

**Step 8: Evaluate area under curve from $x = 0$ to $x_B = \arccos(1/\text{e})$**

At $x = x_B$: $\cos x_B = \frac{1}{\text{e}}$, $\sin x_B = \frac{\sqrt{\text{e}^2 - 1}}{\text{e}}$, $\tan x_B = \sqrt{\text{e}^2 - 1}$, $\sec x_B = \text{e}$.

$$S = \int_0^{x_B} y \, dx = \frac{\sqrt{\text{e}^2 - 1}}{\text{e}}(1) - \ln\left( \text{e} + \sqrt{\text{e}^2 - 1} \right) + \frac{\sqrt{\text{e}^2 - 1}}{\text{e}} - (0 - 0 + 0)$$

$$= \frac{2\sqrt{\text{e}^2 - 1}}{\text{e}} - \ln\left(\text{e} + \sqrt{\text{e}^2 - 1}\right)$$

- **[M1]** Attempts substitution of correct limits into the integral.

**Step 9: Calculate area of region $R$**

$$\text{Area of } R = 2 \times \text{Area of rectangle} - 2S$$

$$\text{Rectangle area} = x_B \times y_B = \frac{1}{\text{e}}\arccos\left(\frac{1}{\text{e}}\right)$$

$$\text{Area of } R = \frac{2}{\text{e}}\arccos\left(\frac{1}{\text{e}}\right) - 2\left[ \frac{2\sqrt{\text{e}^2 - 1}}{\text{e}} - \ln\left(\text{e} + \sqrt{\text{e}^2 - 1}\right) \right]$$

$$= \frac{2}{\text{e}}\arccos\left(\frac{1}{\text{e}}\right) + 2\ln\left(\text{e} + \sqrt{\text{e}^2 - 1}\right) - \frac{4}{\text{e}}\sqrt{\text{e}^2 - 1}$$

- **[A1]** Fully correct proof with no errors (cso).

---
topic: "Exponentials and Logarithms"
subtopic: "Laws of logarithms"
---
### **Question 5**

**(i)** Anna, who is confused about the rules for logarithms, states that

$$(\log_3 p)^2 = \log_3(p^2)$$

and

$$\log_3(p + q) = \log_3 p + \log_3 q.$$

However, there is a value for $p$ and a value for $q$ for which both statements are correct.

Find the value of $p$ and the value of $q$. **(7)**

**(ii)** Solve

$$\frac{\log_3(3x^3 - 23x^2 + 40x)}{\log_3 9} = 0.5 + \log_3(3x - 8).$$ **(7)**

**(Total 14 marks)**

### **Mark Scheme 5**

#### **Part (i)**

**Step 1: Apply power law to logarithmic equation**

$$(\log_3 p)^2 = \log_3(p^2) \Rightarrow (\log_3 p)^2 = 2\log_3 p$$

- **[M1]** Uses $n\log x$ rule on $\log_3(p^2)$.

**Step 2: Solve equation for $\log_3 p$**

$$\log_3 p (\log_3 p - 2) = 0 \Rightarrow \log_3 p = 0 \text{ or } \log_3 p = 2$$

- **[A1]** Obtains $\log_3 p = 0$ or $\log_3 p = 2$.

**Step 3: Solve for $p$**

$$p = 1 \text{ or } p = 9$$

- **[A1]** $p = 1$ or $p = 9$.

**Step 4: Use second logarithm equation**

$$\log_3(p + q) = \log_3 p + \log_3 q \Rightarrow \log_3(p + q) = \log_3(pq) \Rightarrow p + q = pq$$

- **[M1]** Uses $\log A + \log B = \log(AB)$.
- **[A1]** Correct equation $p + q = pq$.

**Step 5: Express $q$ in terms of $p$**

$$q(p - 1) = p \Rightarrow q = \frac{p}{p - 1} \quad (p \neq 1)$$

- **[M1]** Makes $q$ the subject of the formula.

**Step 6: Determine unique values of $p$ and $q$**

Since $p = 1$ gives division by zero, we must have $p = 9$:

$$q = \frac{9}{9 - 1} = \frac{9}{8}$$

- **[A1]** $p = 9$ and $q = \frac{9}{8}$.

#### **Part (ii)**

**Step 7: Simplify $\log_3 9$**

$$\log_3 9 = 2$$

- **[B1]** $\log_3 9 = 2$ seen anywhere.

**Step 8: Use logarithm laws to clear fractions and combine terms**

$$\frac{1}{2}\log_3(3x^3 - 23x^2 + 40x) = 0.5 + \log_3(3x - 8)$$

$$\log_3(3x^3 - 23x^2 + 40x) = 1 + 2\log_3(3x - 8) = \log_3 3 + \log_3(3x - 8)^2$$

- **[M1]** Uses log rules to form a single logarithm or eliminate fractions.

**Step 9: Remove logarithms**

$$3x^3 - 23x^2 + 40x = 3(3x - 8)^2 = 3(9x^2 - 48x + 64)$$

- **[M1]** Removes logarithms to obtain a cubic equation in $x$.

**Step 10: Expand and simplify cubic equation**

$$3x^3 - 23x^2 + 40x = 27x^2 - 144x + 192 \Rightarrow 3x^3 - 50x^2 + 184x - 192 = 0$$

Factor out $(3x - 8)$:

$$(3x - 8)(x^2 - 14x + 24) = 0$$

- **[M1]** Reduces cubic equation to linear times quadratic using factor $(3x - 8)$.

**Step 11: Obtain reduced quadratic equation**

$$x^2 - 14x + 24 = 0$$

- **[A1]** Correct quadratic equation.

**Step 12: Solve quadratic equation**

$$(x - 2)(x - 12) = 0 \Rightarrow x = 2 \text{ or } x = 12$$

- **[M1]** Solves 3-term quadratic equation.
- **[A1]** $x = 2$ and $x = 12$ only (must reject $x = \frac{8}{3}$ as $\log_3 0$ is undefined).

---
topic: "Functions and Graphs"
subtopic: "Inverse functions"
---
### **Question 6**

$$\text{f}(x) = \frac{ax + b}{x + 2}; \quad x \in \mathbb{R}, x \neq -2,$$

where $a$ and $b$ are constants and $b > 0$.

**(a)** Find $\text{f}^{-1}(x)$. **(2)**

**(b)** Hence, or otherwise, find the value of $a$ so that $\text{f}\text{f}(x) = x$. **(2)**

The curve $C$ has equation $y = \text{f}(x)$ and $\text{f}(x)$ satisfies $\text{f}\text{f}(x) = x$.

**(c)** On separate axes sketch

**(i)** $y = \text{f}(x)$, **(3)**

**(ii)** $y = \text{f}(x - 2) + 2$. **(3)**

On each sketch you should indicate the equations of any asymptotes and the coordinates, in terms of $b$, of any intersections with the axes.

The normal to $C$ at the point $P$ has equation $y = 4x - 39$. The normal to $C$ at the point $Q$ has equation $y = 4x + k$, where $k$ is a constant.

**(d)** By considering the images of the normals to $C$ on the curve with equation $y = \text{f}(x - 2) + 2$, or otherwise, find the value of $k$. **(5)**

**(Total 15 marks)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Rearrange $y = \frac{ax + b}{x + 2}$ to make $x$ the subject**

$$y(x + 2) = ax + b \Rightarrow yx + 2y = ax + b \Rightarrow x(y - a) = b - 2y \Rightarrow x = \frac{b - 2y}{y - a}$$

- **[M1]** Rearranges to express $x$ in terms of $y$.
- **[A1]** $\text{f}^{-1}(x) = \frac{b - 2x}{x - a}$.

#### **Part (b)**

**Step 2: Use $\text{f}\text{f}(x) = x \Rightarrow \text{f}^{-1}(x) = \text{f}(x)$**

$$\frac{b - 2x}{x - a} = \frac{ax + b}{x + 2} \Rightarrow a = -2$$

- **[M1]** Sets $\text{f}^{-1}(x) = \text{f}(x)$ or computes $\text{f}(\text{f}(x))$ and sets equal to $x$.
- **[A1]** $a = -2$.

#### **Part (c)**

#### **Part (c)(i)**

**Step 3: Sketch $y = \text{f}(x) = \frac{b - 2x}{x + 2}$**

- **[B1]** Correct rectangular hyperbola shape with two branches in 2nd and 4th quadrants relative to asymptotes.
- **[B1]** Equations of asymptotes: $x = -2$ and $y = -2$.
- **[B1]** Intersects with axes: $\left(0, \frac{b}{2}\right)$ and $\left(\frac{b}{2}, 0\right)$.

#### **Part (c)(ii)**

**Step 4: Sketch $y = \text{f}(x - 2) + 2$**

- **[M1]** Translates graph by vector $\binom{2}{2}$.
- **[M1]** Asymptotes become $x = 0$ and $y = 0$.
- **[A1]** Correct branches in 1st and 3rd quadrants with axes as asymptotes and no axis intercepts.

#### **Part (d)**

**Step 5: Translate normal at $P$ to transformed curve**

Normal at $P$ on $y = \text{f}(x)$ is $y = 4x - 39$. Under translation by $\binom{2}{2}$, the normal at image point $P'$ on $y = \text{f}(x - 2) + 2$ becomes:

$$y - 2 = 4(x - 2) - 39 \Rightarrow y = 4x - 45$$

- **[M1]** Applies translation $\binom{2}{2}$ to normal at $P$.
- **[A1]** Equation of normal at $P'$ is $y = 4x - 45$.

**Step 6: Use symmetry of transformed curve $y = \text{f}(x - 2) + 2$**

The curve $y = \frac{b}{x}$ is symmetric about $y = x$ (or origin symmetry under reflection through center). The normal at $Q'$ on $y = \text{f}(x - 2) + 2$ is:

$$y = 4x + 45$$

- **[M1]** Uses symmetry to find normal at $Q'$.

**Step 7: Translate normal back to original curve**

Translating $y = 4x + 45$ back by $\binom{-2}{-2}$:

$$y + 2 = 4(x + 2) + 45 \Rightarrow y = 4x + 51$$

- **[M1]** Applies reverse translation $\binom{-2}{-2}$.
- **[A1]** $k = 51$.

---
topic: "Vectors"
subtopic: "Solving geometric problems"
---
### **Question 7**

Relative to a fixed origin $O$, the position vectors of the points $A$, $B$ and $C$ are

$$\vec{OA} = -3\mathbf{i} + \mathbf{j} - 9\mathbf{k}, \quad \vec{OB} = \mathbf{i} - \mathbf{k}, \quad \vec{OC} = 5\mathbf{i} + 2\mathbf{j} - 5\mathbf{k}$$

respectively.

**(a)** Find the cosine of angle $ABC$. **(4)**

The line $L$ is the angle bisector of angle $ABC$.

**(b)** Show that an equation of $L$ is $\mathbf{r} = \mathbf{i} - \mathbf{k} + t(\mathbf{i} + 2\mathbf{j} - 7\mathbf{k})$. **(4)**

**(c)** Show that $|\vec{AB}| = |\vec{AC}|$. **(2)**

The circle $S$ lies inside triangle $ABC$ and each side of the triangle is a tangent to $S$.

**(d)** Find the position vector of the centre of $S$. **(7)**

**(e)** Find the radius of $S$. **(5)**

**(Total 22 marks)**

### **Mark Scheme 7**

#### **Part (a)**

**Step 1: Find vectors $\vec{BA}$ and $\vec{BC}$**

$$\vec{BA} = \vec{OA} - \vec{OB} = \begin{pmatrix} -3 \\ 1 \\ -9 \end{pmatrix} - \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix} = \begin{pmatrix} -4 \\ 1 \\ -8 \end{pmatrix}$$

$$\vec{BC} = \vec{OC} - \vec{OB} = \begin{pmatrix} 5 \\ 2 \\ -5 \end{pmatrix} - \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix} = \begin{pmatrix} 4 \\ 2 \\ -4 \end{pmatrix}$$

- **[M1]** Attempts to calculate $\vec{BA}$ and $\vec{BC}$.

**Step 2: Calculate scalar product $\vec{BA} \cdot \vec{BC}$**

$$\vec{BA} \cdot \vec{BC} = (-4)(4) + (1)(2) + (-8)(-4) = -16 + 2 + 32 = 18$$

- **[M1]** Attempts scalar product $\vec{BA} \cdot \vec{BC}$.

**Step 3: Calculate magnitudes $|\vec{BA}|$ and $|\vec{BC}|$**

$$|\vec{BA}| = \sqrt{(-4)^2 + 1^2 + (-8)^2} = \sqrt{81} = 9$$

$$|\vec{BC}| = \sqrt{4^2 + 2^2 + (-4)^2} = \sqrt{36} = 6$$

- **[M1]** Attempts magnitudes of $\vec{BA}$ and $\vec{BC}$.

**Step 4: Find $\cos(\angle ABC)$**

$$\cos(\angle ABC) = \frac{\vec{BA} \cdot \vec{BC}}{|\vec{BA}||\vec{BC}|} = \frac{18}{9 \times 6} = \frac{1}{3}$$

- **[A1]** Correct value $\frac{1}{3}$.

#### **Part (b)**

**Step 5: Construct direction vector of angle bisector**

Using scaled vectors of equal length along $\vec{BC}$ and $\vec{BA}$:

$$\vec{BX} = \vec{BC} + \frac{2}{3}\vec{BA} = \begin{pmatrix} 4 \\ 2 \\ -4 \end{pmatrix} + \frac{2}{3}\begin{pmatrix} -4 \\ 1 \\ -8 \end{pmatrix} = \begin{pmatrix} 4/3 \\ 8/3 \\ -28/3 \end{pmatrix} = \frac{4}{3}\begin{pmatrix} 1 \\ 2 \\ -7 \end{pmatrix}$$

- **[M1]** Attempts direction vector of angle bisector using equal-length vectors.
- **[A1]** Any correct direction vector proportional to $\mathbf{i} + 2\mathbf{j} - 7\mathbf{k}$.

**Step 6: Form vector equation of line $L$**

Since $L$ passes through $B(1, 0, -1)$:

$$\mathbf{r} = \mathbf{i} - \mathbf{k} + t(\mathbf{i} + 2\mathbf{j} - 7\mathbf{k})$$

- **[A1]** Correct line equation.
- **[A1]** Complete proof with full working (cso).

#### **Part (c)**

**Step 7: Calculate vector $\vec{AC}$ and its magnitude**

$$\vec{AC} = \vec{OC} - \vec{OA} = \begin{pmatrix} 5 \\ 2 \\ -5 \end{pmatrix} - \begin{pmatrix} -3 \\ 1 \\ -9 \end{pmatrix} = \begin{pmatrix} 8 \\ 1 \\ 4 \end{pmatrix}$$

$$|\vec{AC}| = \sqrt{8^2 + 1^2 + 4^2} = \sqrt{81} = 9$$

- **[M1]** Calculates $\vec{AC}$ and its magnitude.

**Step 8: Conclude equality of magnitudes**

$$|\vec{AB}| = |\vec{BA}| = 9 \Rightarrow |\vec{AB}| = |\vec{AC}| = 9$$

- **[A1]** States $|\vec{AB}| = |\vec{AC}| = 9$.

#### **Part (d)**

**Step 9: Find equation of angle bisector $L_1$ from vertex $A$**

Since $|\vec{AB}| = |\vec{AC}|$, triangle $ABC$ is isosceles with $AB = AC$. The angle bisector from $A$, line $L_1$, points along $\vec{AB} + \vec{AC}$:

$$\vec{AB} + \vec{AC} = \begin{pmatrix} 4 \\ -1 \\ 8 \end{pmatrix} + \begin{pmatrix} 8 \\ 1 \\ 4 \end{pmatrix} = \begin{pmatrix} 12 \\ 0 \\ 12 \end{pmatrix} \propto \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}$$

- **[B1]** Direction of $L_1$ is $\mathbf{i} + \mathbf{k}$.

**Step 10: Form equation of line $L_1$**

Line $L_1$ passes through $A(-3, 1, -9)$:

$$\mathbf{r} = \begin{pmatrix} -3 \\ 1 \\ -9 \end{pmatrix} + u\begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}$$

- **[M1]** Equation of line $L_1$.

**Step 11: Set up simultaneous equations for intersection of $L$ and $L_1$**

$$\begin{pmatrix} 1 + t \\ 2t \\ -1 - 7t \end{pmatrix} = \begin{pmatrix} -3 + u \\ 1 \\ -9 + u \end{pmatrix}$$

- **[M1]** Strategy: equates general points on $L$ and $L_1$.

**Step 12: Solve for parameter values $t$ and $u$**

From $y$-components: $2t = 1 \Rightarrow t = \frac{1}{2}$.

From $x$-components: $1 + \frac{1}{2} = -3 + u \Rightarrow u = \frac{9}{2}$.

- **[M1]** Solves for $t$ or $u$.
- **[A1]** $t = \frac{1}{2}$ and $u = \frac{9}{2}$.

**Step 13: Find position vector of centre of $S$**

Substituting $t = \frac{1}{2}$ into $L$:

$$\vec{ON} = \begin{pmatrix} 1 + 1/2 \\ 2(1/2) \\ -1 - 7(1/2) \end{pmatrix} = \begin{pmatrix} 3/2 \\ 1 \\ -9/2 \end{pmatrix} = \frac{3}{2}\mathbf{i} + \mathbf{j} - \frac{9}{2}\mathbf{k}$$

- **[A1]** Correct position vector of centre of $S$.

#### **Part (e)**

**Step 14: Use geometry of incircle**

Let $X$ be the midpoint of $BC$. Since $ABC$ is isosceles with $AB = AC$, $AX$ is perpendicular to $BC$, and $X$ is the point of contact of $S$ with $BC$.

Since $|\vec{BC}| = 6$, $BX = 3$.

- **[B1]** $BX = 3$.

**Step 15: Calculate distance $BN$**

$$\vec{BN} = \vec{ON} - \vec{OB} = \begin{pmatrix} 3/2 \\ 1 \\ -9/2 \end{pmatrix} - \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix} = \begin{pmatrix} 1/2 \\ 1 \\ -7/2 \end{pmatrix}$$

$$|\vec{BN}|^2 = \left(\frac{1}{2}\right)^2 + 1^2 + \left(-\frac{7}{2}\right)^2 = \frac{1}{4} + 1 + \frac{49}{4} = \frac{54}{4} = \frac{27}{2}$$

- **[M1]** Calculates vector $\vec{BN}$.
- **[A1]** $|\vec{BN}|^2 = \frac{54}{4}$ or $|\vec{BN}| = \frac{3}{2}\sqrt{6}$.

**Step 16: Apply Pythagoras in right-angled triangle $NX B$**

$$r^2 = BN^2 - BX^2 = \frac{54}{4} - 9 = \frac{18}{4} = \frac{9}{2}$$

$$r = \frac{\sqrt{18}}{2} = \frac{3\sqrt{2}}{2}$$

- **[M1]** Full method for $r$.
- **[A1]** $r = \frac{3\sqrt{2}}{2}$ (or $\sqrt{\frac{9}{2}}$ or $\frac{3}{\sqrt{2}}$).
