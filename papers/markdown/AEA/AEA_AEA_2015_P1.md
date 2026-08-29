---
topic: "Functions and Graphs"
subtopic: "y = |f(x)| and y = f(|x|)"
---
### **Question 1**

**(a)** Sketch the graph of the curve with equation

$$y = |\ln(2x + 5)|, \quad x > -\frac{5}{2}$$

On your sketch you should clearly state the equations of any asymptotes and mark the coordinates of points where the curve meets the coordinate axes. **(3)**

**(b)** Solve the equation $|\ln(2x + 5)| = \ln 9$ **(3)**

**(Total 6 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Sketch the graph and state key features**
The graph consists of two branches for $x > -\frac{5}{2}$ with $y \ge 0$, having a cusp on the negative $x$-axis at $(-2, 0)$, $y$-intercept at $(0, \ln 5)$, and a vertical asymptote at $x = -\frac{5}{2}$.

- **[B1]** Correct shape with a cusp on the negative $x$-axis and both branches above the $x$-axis ($y \ge 0$).
- **[B1]** Correct position in quadrants 1 and 2.
- **[B1]** Vertical asymptote $x = -\frac{5}{2}$ and intercepts $(-2, 0)$ and $(0, \ln 5)$ clearly stated and marked.

#### **Part (b)**

**Step 2: Solve the positive case**
$$\ln(2x + 5) = \ln 9 \Rightarrow 2x + 5 = 9 \Rightarrow x = 2$$

- **[B1]** Correct solution $x = 2$.

**Step 3: Solve the negative case**
$$\ln(2x + 5) = -\ln 9 = \ln\left(\frac{1}{9}\right) \Rightarrow 2x + 5 = \frac{1}{9}$$

- **[M1]** Removes $\ln$ correctly to set up a linear equation for the second root.

**Step 4: Find the second solution**
$$2x = \frac{1}{9} - 5 = -\frac{44}{9} \Rightarrow x = -\frac{22}{9}$$

- **[A1]** Correct solution $x = -\frac{22}{9}$ (or equivalent).

---
topic: "Algebraic Methods"
subtopic: "The factor theorem"
---
### **Question 2**

**(a)** Show that $(x + 1)$ is a factor of $2x^3 + 3x^2 - 1$ **(1)**

**(b)** Solve the equation

$$\sqrt{x^2 + 2x + 5} = x + \sqrt{2x + 3}$$

**(8)**

**(Total 9 marks)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Apply the factor theorem**
Let $f(x) = 2x^3 + 3x^2 - 1$.
$$f(-1) = 2(-1)^3 + 3(-1)^2 - 1 = -2 + 3 - 1 = 0$$
Since $f(-1) = 0$, $(x + 1)$ is a factor.

- **[B1]** Completely correct proof (cso).

#### **Part (b)**

**Step 2: Square both sides**
$$x^2 + 2x + 5 = (x + \sqrt{2x + 3})^2$$
$$x^2 + 2x + 5 = x^2 + 2x\sqrt{2x + 3} + (2x + 3)$$

- **[M1]** Attempts to square both sides to obtain 3 terms on the RHS.

**Step 3: Isolate the radical term**
$$x^2 + 2x + 5 = x^2 + 2x + 3 + 2x\sqrt{2x + 3}$$
$$2 = 2x\sqrt{2x + 3} \Rightarrow 1 = x\sqrt{2x + 3}$$

- **[M1]** Rearranges to isolate the radical term in preparation for squaring.

**Step 4: Square again to form a cubic polynomial**
$$1 = x^2(2x + 3) \Rightarrow 2x^3 + 3x^2 - 1 = 0$$

- **[A1]** Correct cubic equation derived (cso).

**Step 5: Factorise the cubic using part (a)**
$$2x^3 + 3x^2 - 1 = (x + 1)(2x^2 + x - 1) = (x + 1)(2x - 1)(x + 1) = 0$$
Possible roots: $x = -1$ or $x = \frac{1}{2}$.

- **[M1]** Division attempt yielding at least 2 correct terms of the quadratic factor.
- **[A1]** Correct factors $(x + 1)(2x - 1)(x + 1)$ and both potential roots $x = -1, \frac{1}{2}$.

**Step 6: Check root $x = -1$ in original equation**
$$\text{LHS} = \sqrt{(-1)^2 + 2(-1) + 5} = \sqrt{4} = 2$$
$$\text{RHS} = -1 + \sqrt{2(-1) + 3} = -1 + 1 = 0$$
Since $\text{LHS} \neq \text{RHS}$, $x = -1$ is not a solution.

- **[B1]** Must explicitly reject $x = -1$ with justification.

**Step 7: Check root $x = \frac{1}{2}$ in original equation**
$$\text{LHS} = \sqrt{\left(\frac{1}{2}\right)^2 + 2\left(\frac{1}{2}\right) + 5} = \sqrt{\frac{25}{4}} = \frac{5}{2} = 2.5$$
$$\text{RHS} = \frac{1}{2} + \sqrt{2\left(\frac{1}{2}\right) + 3} = \frac{1}{2} + 2 = 2.5$$

- **[M1]** Attempts to substitute $x = 0.5$ in the original equation (or line 2).
- **[A1]** Concludes that the only valid solution is $x = 0.5$ (or $\frac{1}{2}$).

---
topic: "Trigonometric Identities and Equations"
subtopic: "Harder trigonometric equations"
---
### **Question 3**

Solve for $0 < x < 360^\circ$

$$\cot 2x - \tan 78^\circ = \frac{(\sec x)(\sec 78^\circ)}{2}$$

where $x$ is not an integer multiple of $90^\circ$ **(9)**

**(Total 9 marks)**

### **Mark Scheme 3**

**Step 1: Express $\cot$ and $\tan$ in terms of $\sin$ and $\cos$**
$$\text{LHS} = \frac{\cos 2x}{\sin 2x} - \frac{\sin 78^\circ}{\cos 78^\circ}$$

- **[M1]** Converts $\cot$ and $\tan$ to sine and cosine.

**Step 2: Use the cosine addition formula**
$$\text{LHS} = \frac{\cos 2x \cos 78^\circ - \sin 2x \sin 78^\circ}{\sin 2x \cos 78^\circ} = \frac{\cos(2x + 78^\circ)}{\sin 2x \cos 78^\circ}$$

- **[M1]** Uses $\cos(A + B) = \cos A \cos B - \sin A \sin B$.

**Step 3: Equate to RHS and simplify using double-angle formula**
$$\frac{\cos(2x + 78^\circ)}{\sin 2x \cos 78^\circ} = \frac{1}{2 \cos x \cos 78^\circ}$$
$$\cos(2x + 78^\circ) = \frac{\sin 2x}{2 \cos x} = \frac{2 \sin x \cos x}{2 \cos x} = \sin x$$

- **[M1]** Uses $\sin 2x = 2 \sin x \cos x$ and cancels common factors.
- **[A1]** Arrives at $\cos(2x + 78^\circ) = \sin x$ or $\cos(2x + 78^\circ) = \cos(90^\circ - x)$.

**Step 4: Form a non-trigonometric equation in $x$**
$$2x + 78^\circ = 90^\circ - x$$

- **[M1]** Forms non-trigonometric equation in $x$ (allowing $90^\circ \pm x$).

**Step 5: Solve for the principal solution**
$$3x = 12^\circ \Rightarrow x = 4^\circ$$

- **[A1]** $x = 4^\circ$.

**Step 6: Find remaining solutions in the domain $0 < x < 360^\circ$**
Using general quadrant symmetries:
- $2x + 78^\circ = 270^\circ + x \Rightarrow x = 192^\circ$
- $2x + 78^\circ = 450^\circ - x \Rightarrow 3x = 372^\circ \Rightarrow x = 124^\circ$
- $2x + 78^\circ = 810^\circ - x \Rightarrow 3x = 732^\circ \Rightarrow x = 244^\circ$

- **[A3]** Award **[A1]** for each correct additional solution found ($x = 192^\circ$, $x = 124^\circ$, $x = 244^\circ$).

---
topic: "Binomial Expansion"
subtopic: "Expanding (a + bx)^n"
---
### **Question 4**

**(a)** Find the binomial series expansion for $(4 + y)^{\frac{1}{2}}$ in ascending powers of $y$ up to and including the term in $y^3$. Simplify the coefficient of each term. **(3)**

**(b)** Hence show that the binomial series expansion for $(4 + 5x + x^2)^{\frac{1}{2}}$ in ascending powers of $x$ up to and including the term in $x^3$ is

$$2 + \frac{5x}{4} - \frac{9x^2}{64} + \frac{45x^3}{512}$$

**(3)**

**(c)** Show that the binomial series expansion of $(4 + 5x + x^2)^{\frac{1}{2}}$ will converge for $-\frac{1}{2} \le x \le \frac{1}{2}$ **(6)**

**(d)** Use the result in part (b) to estimate

$$\int_{-\frac{1}{2}}^{\frac{1}{2}} \sqrt{4 + 5x + x^2} \, \mathrm{d}x$$

Give your answer as a single fraction. **(3)**

**(Total 15 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Factor out 4**
$$(4 + y)^{\frac{1}{2}} = 4^{\frac{1}{2}}\left(1 + \frac{y}{4}\right)^{\frac{1}{2}} = 2\left(1 + \frac{y}{4}\right)^{\frac{1}{2}}$$

- **[M1]** Correct preparation or factoring out of 4.

**Step 2: Apply the binomial expansion formula**
$$2\left[ 1 + \left(\frac{1}{2}\right)\left(\frac{y}{4}\right) + \frac{\left(\frac{1}{2}\right)\left(-\frac{1}{2}\right)}{2!}\left(\frac{y}{4}\right)^2 + \frac{\left(\frac{1}{2}\right)\left(-\frac{1}{2}\right)\left(-\frac{3}{2}\right)}{3!}\left(\frac{y}{4}\right)^3 + \dots \right]$$

- **[M1]** Clear use of binomial formula for 3rd or 4th terms.

**Step 3: Simplify coefficients**
$$= 2 + \frac{y}{4} - \frac{y^2}{64} + \frac{y^3}{512}$$

- **[A1]** Correct simplified expansion.

#### **Part (b)**

**Step 4: Substitute $y = 5x + x^2$**
Let $y = 5x + x^2$:
$$(4 + 5x + x^2)^{\frac{1}{2}} = 2 + \frac{5x + x^2}{4} - \frac{(5x + x^2)^2}{64} + \frac{(5x + x^2)^3}{512}$$

- **[M1]** Attempts to substitute $y = 5x + x^2$ into the series expansion.

**Step 5: Collect powers of $x$ up to $x^3$**
$$= 2 + \frac{5x}{4} + \frac{x^2}{4} - \frac{25x^2 + 10x^3}{64} + \frac{125x^3}{512}$$
$$= 2 + \frac{5x}{4} + \left(\frac{1}{4} - \frac{25}{64}\right)x^2 + \left(-\frac{10}{64} + \frac{125}{512}\right)x^3$$
$$= 2 + \frac{5x}{4} - \frac{9x^2}{64} + \frac{45x^3}{512}$$

- **[M1]** Clearly attempts expansion of $x^2$ and $x^3$ terms.
- **[A1]** Fully correct proof with no errors (cso).

#### **Part (c)**

**Step 6: Set up condition for convergence**
For $(1 + \frac{y}{4})^{\frac{1}{2}}$, convergence requires $\left|\frac{y}{4}\right| < 1 \Rightarrow |5x + x^2| < 4$.

- **[M1]** Attempt factors or a correct equation $5x + x^2 = 4$.

**Step 7: Find critical values**
Solving $5x + x^2 = 4 \Rightarrow x^2 + 5x - 4 = 0$:
$$x = \frac{-5 \pm \sqrt{41}}{2}$$

- **[A1]** Correct factorisation or critical values for $x^2 + 5x - 4 = 0$.

Solving $5x + x^2 = -4 \Rightarrow x^2 + 5x + 4 = 0 \Rightarrow (x + 4)(x + 1) = 0$:
$$x = -1 \quad \text{or} \quad x = -4$$

- **[M1]** Solves 2nd equation $x^2 + 5x + 4 = 0$.
- **[A1]** All critical values correct ($x = -1, -4$).

**Step 8: Determine convergence interval**
Factorising $(4 + 5x + x^2)^{\frac{1}{2}} = (x + 4)^{\frac{1}{2}}(x + 1)^{\frac{1}{2}} = 2\left(1 + \frac{x}{4}\right)^{\frac{1}{2}}(1 + x)^{\frac{1}{2}}$:
- Expansion of $(1 + \frac{x}{4})^{\frac{1}{2}}$ converges for $-4 < x < 4$.
- Expansion of $(1 + x)^{\frac{1}{2}}$ converges for $-1 < x < 1$.

- **[M1]** Identifies a suitable combined region for convergence.
- **[A1]** Concludes series converges for $-\frac{1}{2} \le x \le \frac{1}{2}$ as it lies within the valid interval $-1 < x < 1$ (cso).

#### **Part (d)**

**Step 9: Integrate the series expansion term-by-term**
$$\int_{-\frac{1}{2}}^{\frac{1}{2}} \left( 2 + \frac{5x}{4} - \frac{9x^2}{64} + \frac{45x^3}{512} \right) \mathrm{d}x = \left[ 2x + \frac{5x^2}{8} - \frac{9x^3}{3 \times 64} + \frac{45x^4}{4 \times 512} \right]_{-\frac{1}{2}}^{\frac{1}{2}}$$

- **[M1]** Some correct integration (ignoring limits).

**Step 10: Evaluate limits**
Using properties of odd and even functions (odd terms evaluate to 0):
$$= 2 \left[ 2\left(\frac{1}{2}\right) - \frac{3(1/2)^3}{64} \right] = 2 \left[ 1 - \frac{3}{512} \right] = \frac{509}{256}$$

- **[M1]** Attempt both limits using properties of odd and even functions.
- **[A1]** $\frac{509}{256}$ (or equivalent).

---
topic: "Functions and Graphs"
subtopic: "Inverse functions"
---
### **Question 5**

**Figure 1** _(A sketch of the curve $y = f(x)$ showing a branch in the third quadrant with a local maximum at $A$ and a branch in the first quadrant.)_

Figure 1 shows a sketch of the curve with equation $y = f(x)$ where

$$f(x) = \frac{x^2 + 16}{3x}, \quad x \neq 0$$

The curve has a maximum at the point $A$ with coordinates $(a, b)$.

**(a)** Find the value of $a$ and the value of $b$. **(4)**

The function $g$ is defined as

$$g : x \mapsto \frac{x^2 + 16}{3x}, \quad a \le x < 0$$

where $a$ is the value found in part (a).

**(b)** Write down the range of $g$. **(1)**

**(c)** On the same axes sketch $y = g(x)$ and $y = g^{-1}(x)$. **(3)**

**(d)** Find an expression for $g^{-1}(x)$ and state the domain of $g^{-1}$. **(5)**

**(e)** Solve the equation $g(x) = g^{-1}(x)$. **(3)**

**(Total 16 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Differentiate $f(x)$**
$$f(x) = \frac{1}{3}x + \frac{16}{3}x^{-1} \Rightarrow f'(x) = \frac{1}{3} - \frac{16}{3}x^{-2}$$

- **[M1]** Some correct differentiation.

**Step 2: Solve $f'(x) = 0$**
$$\frac{1}{3} - \frac{16}{3x^2} = 0 \Rightarrow x^2 = 16 \Rightarrow x = \pm 4$$

- **[M1]** Sets $y' = 0 \Rightarrow x^2 = \dots$

**Step 3: State coordinates of maximum point $A$**
Since $A$ lies in $x < 0$: $a = -4$.
$$b = f(-4) = \frac{(-4)^2 + 16}{3(-4)} = -\frac{8}{3}$$

- **[A1]** $a = -4$.
- **[A1]** $b = -\frac{8}{3}$ (or equivalent).

#### **Part (b)**

**Step 4: State the range of $g$**
Since $g$ is defined for $-4 \le x < 0$, $g(x) \le -\frac{8}{3}$.

- **[B1ft]** $g(x) \le -\frac{8}{3}$ (ft their value of $b$).

#### **Part (c)**

**Step 5: Sketch $y = g(x)$ and $y = g^{-1}(x)$**
- **[B1]** Correct position of $g(x)$ in quadrant 3 (not crossing axes, ending at $(-4, -\frac{8}{3})$).
- **[B1]** Correct position of $g^{-1}(x)$ in quadrant 3 (not crossing axes, ending at $(-\frac{8}{3}, -4)$).
- **[B1]** Intersection at roughly correct point on line $y = x$, with points and labels clearly shown.

#### **Part (d)**

**Step 6: Set up quadratic in $x$**
$$y = \frac{x^2 + 16}{3x} \Rightarrow x^2 - 3yx + 16 = 0$$

- **[M1]** 3TQ in $x$ formed.

**Step 7: Apply quadratic formula**
$$x = \frac{3y \pm \sqrt{9y^2 - 64}}{2}$$

- **[M1]** Attempt formula or complete the square leading to $x = \dots$
- **[A1]** Correct formula derived.

**Step 8: Choose the correct sign for the inverse**
Since $a \le x < 0$, when $y = -\frac{8}{3}$, $x = -4$.
$$\frac{3(-8/3) + \sqrt{9(-8/3)^2 - 64}}{2} = \frac{-8 + 0}{2} = -4$$
So select the positive root:

$$g^{-1}(x) = \frac{3x + \sqrt{9x^2 - 64}}{2}$$

- **[A1]** Correct selection of $+$ sign with good reason.

**Step 9: State the domain of $g^{-1}$**
Domain of $g^{-1}$ is $x \le -\frac{8}{3}$.

- **[B1ft]** Domain $x \le -\frac{8}{3}$ (ft their (b) or $b$).

#### **Part (e)**

**Step 10: Solve $g(x) = x$**
$$g(x) = g^{-1}(x) \iff g(x) = x \Rightarrow \frac{x^2 + 16}{3x} = x$$

- **[M1]** Writes down correct equation $g(x) = x$ and attempts to simplify to quadratic or quartic.

**Step 11: Solve for $x$**
$$x^2 + 16 = 3x^2 \Rightarrow 2x^2 = 16 \Rightarrow x^2 = 8$$

- **[M1]** Solves 2-term quadratic $x^2 = 8$.

**Step 12: Select correct root**
Since domain of $g$ is $-4 \le x < 0$:
$$x = -2\sqrt{2} \quad (\text{or } -\sqrt{8})$$

- **[A1]** $x = -2\sqrt{2}$ with valid reason for discarding positive root.

---
topic: "Vectors"
subtopic: "Vectors in 3D"
---
### **Question 6**

The lines $L_1$ and $L_2$ have vector equations

$$L_1 : \mathbf{r} = \begin{pmatrix} 1 \\ 10 \\ -3 \end{pmatrix} + \lambda \begin{pmatrix} 2 \\ -5 \\ 4 \end{pmatrix}$$

$$L_2 : \mathbf{r} = \begin{pmatrix} -1 \\ 2 \\ 3 \end{pmatrix} + \mu \begin{pmatrix} 1 \\ 2 \\ 2 \end{pmatrix}$$

**(a)** Show that $L_1$ and $L_2$ are perpendicular. **(2)**

**(b)** Show that $L_1$ and $L_2$ are skew lines. **(3)**

The point $A$ with position vector $-\mathbf{i} + 2\mathbf{j} + 3\mathbf{k}$ lies on $L_2$ and the point $X$ lies on $L_1$ such that $\vec{AX}$ is perpendicular to $L_1$.

**(c)** Find the position vector of $X$. **(5)**

**(d)** Find $|\vec{AX}|$ **(2)**

The point $B$ (distinct from $A$) also lies on $L_2$ and $|\vec{BX}| = |\vec{AX}|$.

**(e)** Find the position vector of $B$. **(5)**

**(f)** Find the cosine of angle $AXB$. **(2)**

**(Total 19 marks)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Calculate scalar product of direction vectors**
$$\begin{pmatrix} 2 \\ -5 \\ 4 \end{pmatrix} \cdot \begin{pmatrix} 1 \\ 2 \\ 2 \end{pmatrix} = 2 - 10 + 8 = 0$$

- **[M1]** Attempt correct scalar product.
- **[A1]** Correct calculation and conclusion that lines are perpendicular.

#### **Part (b)**

**Step 2: Set up simultaneous equations from components**
$$1 + 2\lambda = -1 + \mu \quad \text{and} \quad 10 - 5\lambda = 2 + 2\mu$$

- **[M1]** Form suitable equations.

**Step 3: Solve for $\lambda$ and $\mu$**
Solving the first two equations gives $\lambda = \frac{4}{9}, \mu = \frac{26}{9}$.

- **[A1]** Correct values for $\lambda$ and $\mu$.

**Step 4: Check in 3rd equation and conclude skew**
In 3rd equation: $\text{LHS} = -3 + 4\left(\frac{4}{9}\right) = -\frac{11}{9}$, $\text{RHS} = 3 + 2\left(\frac{26}{9}\right) = \frac{79}{9}$.
Since $\text{LHS} \neq \text{RHS}$ and directions are not parallel, lines are skew.

- **[M1]** Check in 3rd equation and comment on inconsistency.

#### **Part (c)**

**Step 5: Form vector $\vec{AR}$ for a general point $R$ on $L_1$**
$$\vec{AR} = \begin{pmatrix} 1 + 2\lambda - (-1) \\ 10 - 5\lambda - 2 \\ -3 + 4\lambda - 3 \end{pmatrix} = \begin{pmatrix} 2 + 2\lambda \\ 8 - 5\lambda \\ -6 + 4\lambda \end{pmatrix}$$

- **[M1]** Forming vector $\vec{AR}$.

**Step 6: Set scalar product $\vec{AR} \cdot \mathbf{d}_1 = 0$**
$$\begin{pmatrix} 2 + 2\lambda \\ 8 - 5\lambda \\ -6 + 4\lambda \end{pmatrix} \cdot \begin{pmatrix} 2 \\ -5 \\ 4 \end{pmatrix} = 0$$
$$4 + 4\lambda - 40 + 25\lambda - 24 + 16\lambda = 0 \Rightarrow 45\lambda = 60 \Rightarrow \lambda = \frac{4}{3}$$

- **[M1]** Attempt suitable scalar product.
- **[M1]** Solve for $\lambda$.
- **[A1]** $\lambda = \frac{4}{3}$.

**Step 7: Calculate position vector of $X$**
$$\vec{OX} = \frac{11}{3}\mathbf{i} + \frac{10}{3}\mathbf{j} + \frac{7}{3}\mathbf{k}$$

- **[A1]** Correct position vector (column vector or coordinate form allowed).

#### **Part (d)**

**Step 8: Find vector $\vec{AX}$**
$$\vec{AX} = \begin{pmatrix} \frac{14}{3} \\ \frac{4}{3} \\ -\frac{2}{3} \end{pmatrix}$$

- **[M1]** Attempt vector $\vec{AX}$.

**Step 9: Calculate magnitude $|\vec{AX}|$**
$$|\vec{AX}| = \sqrt{\left(\frac{14}{3}\right)^2 + \left(\frac{4}{3}\right)^2 + \left(-\frac{2}{3}\right)^2} = \sqrt{\frac{216}{9}} = 2\sqrt{6}$$

- **[A1]** $2\sqrt{6}$ (allow $\sqrt{24}$ or $\sqrt{\frac{216}{9}}$).

#### **Part (e)**

**Step 10: Projection strategy**
Let $M$ be the midpoint of $AB$. $AM = \vec{AX} \cdot (\text{unit vector in direction of } L_2)$.

- **[M1]** Suitable strategy identifying projection of $\vec{AX}$ onto $L_2$.

**Step 11: Calculate length $AM$**
$$AM = \left| \frac{1}{3}\left(\frac{14}{3} \times 1 + \frac{4}{3} \times 2 - \frac{2}{3} \times 2\right) \right| = 2$$

- **[M1]** Correct calculations.
- **[A1]** $AM = 2$ (or $AB = 4$).

**Step 12: Find position vector of $B$**
Since $A = (-1, 2, 3)$ corresponds to $\mu = 0$ on $L_2$, and unit direction vector has length 3, $AB = 4$ corresponds to parameter step $4 \times \frac{1}{3}$:
$$\vec{OB} = \vec{OA} + 4(\text{unit vector in direction of } L_2)$$
$$\vec{OB} = \begin{pmatrix} -1 \\ 2 \\ 3 \end{pmatrix} + 4 \begin{pmatrix} 1/3 \\ 2/3 \\ 2/3 \end{pmatrix} = \begin{pmatrix} 1/3 \\ 14/3 \\ 17/3 \end{pmatrix}$$

- **[M1]** Strategy using unit vector of $L_2$.
- **[A1]** Correct position vector $\begin{pmatrix} 1/3 \\ 14/3 \\ 17/3 \end{pmatrix}$.

#### **Part (f)**

**Step 13: Compute scalar product $\vec{XA} \cdot \vec{XB}$**
$$\vec{XA} = \begin{pmatrix} -14/3 \\ -4/3 \\ 2/3 \end{pmatrix}, \quad \vec{XB} = \begin{pmatrix} -10/3 \\ 4/3 \\ 10/3 \end{pmatrix}$$
$$\vec{XA} \cdot \vec{XB} = \frac{1}{9}(140 - 16 + 20) = \frac{144}{9} = 16$$

- **[M1]** Attempt correct scalar product $\vec{XA} \cdot \vec{XB}$ and set equal to $|\vec{AX}||\vec{BX}|\cos\theta$.

**Step 14: Solve for $\cos\theta$**
$$16 = 2\sqrt{6} \cdot 2\sqrt{6} \cos\theta = 24 \cos\theta \Rightarrow \cos\theta = \frac{2}{3}$$

- **[A1]** $\cos\theta = \frac{2}{3}$ (cao).

---
topic: "Volumes of Revolution"
subtopic: "Volumes of revolution around the x-axis"
---
### **Question 7**

**(a)** Use the substitution $x = \sec \theta$ to show that

$$\int_{\sqrt{2}}^{2} \frac{1}{(x^2 - 1)^{\frac{3}{2}}} \, \mathrm{d}x = \frac{\sqrt{6} - 2}{\sqrt{3}}$$

**(5)**

**(b)** Use integration by parts to show that

$$\int \csc \theta \cot^2 \theta \, \mathrm{d}\theta = -\frac{1}{2}\left[ \ln|\csc \theta + \cot \theta| - \csc \theta \cot \theta \right] + c$$

**(6)**

**Figure 2** _(A sketch of part of the curve $y = \frac{1}{(x^2 - 1)^{\frac{5}{4}}}$ for $x > 1$, showing the shaded region $R$ bounded by the curve, the x-axis and the lines $x = \sqrt{2}$ and $x = 2$.)_

Figure 2 shows a sketch of part of the curve with equation $y = \frac{1}{(x^2 - 1)^{\frac{5}{4}}}$ for $x > 1$.
The region $R$, shown shaded in Figure 2, is bounded by the curve, the $x$-axis and the lines $x = \sqrt{2}$ and $x = 2$.
The region $R$ is rotated through $2\pi$ radians about the $x$-axis.

**(c)** Show that the volume of the solid formed is

$$\pi \left[ \frac{3}{8}\ln\left(\frac{1 + \sqrt{2}}{\sqrt{3}}\right) + \frac{7}{36} - \frac{\sqrt{2}}{8} \right]$$

**(8)**

**(Total 19 marks)**

### **Mark Scheme 7**

#### **Part (a)**

**Step 1: Differentiate substitution**
$$x = \sec \theta \Rightarrow \mathrm{d}x = \sec \theta \tan \theta \, \mathrm{d}\theta$$

- **[M1]** Correct derivative of $\sec \theta$.

**Step 2: Transform the integrand**
$$I = \int \frac{\sec \theta \tan \theta}{\tan^3 \theta} \, \mathrm{d}\theta = \int \csc \theta \cot \theta \, \mathrm{d}\theta$$

- **[A1]** Correct $\theta$ integral.
- **[M1]** Preparation to integrate.

**Step 3: Integrate and change limits**
$$\int \csc \theta \cot \theta \, \mathrm{d}\theta = [-\csc \theta]$$
When $x = 2 \Rightarrow \theta = \frac{\pi}{3}$; when $x = \sqrt{2} \Rightarrow \theta = \frac{\pi}{4}$.
$$\left[ -\csc \theta \right]_{\frac{\pi}{4}}^{\frac{\pi}{3}} = -\frac{2}{\sqrt{3}} - (-\sqrt{2}) = \frac{\sqrt{6} - 2}{\sqrt{3}}$$

- **[A1]** Antiderivative $-\csc \theta$.
- **[A1cso]** Changes limits and completes proof (cso).

#### **Part (b)**

**Step 4: Integration by parts (1st step)**
Let $J = \int \csc \theta \cot^2 \theta \, \mathrm{d}\theta = \int \cot \theta (\csc \theta \cot \theta) \, \mathrm{d}\theta$:
$$J = [-\csc \theta \cot \theta] - \int \csc^3 \theta \, \mathrm{d}\theta$$

- **[M1]** Suitable 1st step using integration by parts (condoning sign slips).

**Step 5: Apply identity $\csc^2 \theta = 1 + \cot^2 \theta$**
$$J = [-\csc \theta \cot \theta] - \int \csc \theta (1 + \cot^2 \theta) \, \mathrm{d}\theta$$
$$J = [-\csc \theta \cot \theta] - \int \csc \theta \, \mathrm{d}\theta - J$$

- **[M1]** Uses $1 + \cot^2 \theta$.
- **[A1]** Correctly deals with 2nd integral in terms of $J$.

**Step 6: Integrate $\csc \theta$ and complete proof**
Using $\int \csc \theta \, \mathrm{d}\theta = -\ln|\csc \theta + \cot \theta|$:
$$2J = \ln|\csc \theta + \cot \theta| - \csc \theta \cot \theta$$

- **[B1]** Integral of $\csc \theta$.
- **[M1]** Identifies $2J = \dots$
- **[A1]** $J = -\frac{1}{2}\left[ \ln|\csc \theta + \cot \theta| - \csc \theta \cot \theta \right] + c$ (cso).

#### **Part (c)**

**Step 7: Set up volume integral**
$$V = \pi \int_{\sqrt{2}}^{2} \frac{1}{(x^2 - 1)^{\frac{5}{2}}} \, \mathrm{d}x = \pi K$$

- **[B1]** Correct integral and limits (ignoring $\pi$).

**Step 8: Change to $\theta$ integral using $x = \sec \theta$**
$$K = \int_{\frac{\pi}{4}}^{\frac{\pi}{3}} \csc \theta \cot^3 \theta \, \mathrm{d}\theta$$

- **[M1]** Changes to integral in $\theta$.

**Step 9: Integration by parts on $K$**
$$K = [-\csc \theta \cot^2 \theta] - \int 3 \cot^2 \theta \csc^3 \theta \, \mathrm{d}\theta$$

- **[M1]** Attempt integration by parts.

**Step 10: Split second integral**
$$3 \int \cot^2 \theta \csc^3 \theta \, \mathrm{d}\theta = 3 \int \csc \theta \cot^2 \theta \, \mathrm{d}\theta + 3 \int \csc \theta \cot^4 \theta \, \mathrm{d}\theta = 3J + 3K$$

- **[M1]** Splits 2nd integral into $3J + 3K$.
- **[M1]** Relates $K = f(\theta) + J - nK$.

**Step 11: Solve for $K$ and evaluate limits**
$$4K = [-\csc \theta \cot^2 \theta] - 3J \Rightarrow K = \frac{1}{4}[-\csc \theta \cot^2 \theta] - \frac{3}{4}J$$
Evaluating terms at limits $\frac{\pi}{4}$ and $\frac{\pi}{3}$:
$$\left[-\csc \theta \cot^2 \theta\right]_{\frac{\pi}{4}}^{\frac{\pi}{3}} = \sqrt{2} - \frac{2}{9}\sqrt{3}$$

- **[A1]** Correct value for boundary term.

$$[J]_{\frac{\pi}{4}}^{\frac{\pi}{3}} = \frac{1}{2}\left[ \ln\left(\frac{\sqrt{3}}{\sqrt{2}+1}\right) - \frac{2}{3} + \sqrt{2} \right]$$

- **[A1]** Correct value for $J$.

Combining terms:
$$K = \frac{1}{4}\left(\sqrt{2} - \frac{2}{9}\sqrt{3}\right) - \frac{3}{8}\left[ \ln\left(\frac{\sqrt{3}}{\sqrt{2}+1}\right) - \frac{2}{3} + \sqrt{2} \right]$$
$$V = \pi K = \pi \left[ \frac{3}{8}\ln\left(\frac{1 + \sqrt{2}}{\sqrt{3}}\right) + \frac{7}{36} - \frac{\sqrt{2}}{8} \right]$$

- **[A1cso]** Fully correct proof including $\pi$ (cso).
