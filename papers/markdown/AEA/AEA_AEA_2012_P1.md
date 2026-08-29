---
topic: "Functions and Graphs"
subtopic: "Inverse functions"
---
### **Question 1**

The function $f$ is given by

$$f(x) = x^2 - 2x + 6, \quad x \ge 0$$

**(a)** Find the range of $f$. **(3)**

The function $g$ is given by

$$g(x) = 3 + \sqrt{x + 4}, \quad x \ge 2$$

**(b)** Find $gf(x)$. **(2)**

**(c)** Find the domain and range of $gf$. **(3)**

**(Total 8 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Complete the square or differentiate to find the minimum**

$$x^2 - 2x + 6 = (x - 1)^2 + 5 \quad \text{or} \quad 2x - 2 = 0$$

- **[M1]** Differentiating or completing the square.

**Step 2: Identify the minimum point**

Sketch or work to show minimum at $(1, 5)$.

- **[A1]** Correct identification of minimum.

**Step 3: State the range**

Range: $f(x) \ge 5$ (Accept $y \ge 5$)

- **[A1]** Correct range. (Answer only 3/3. $x \ge 5$ can score M1A1A0).

#### **Part (b)**

**Step 4: Find the composite function**

$$gf(x) = 3 + \sqrt{x^2 - 2x + 6 + 4} = 3 + \sqrt{x^2 - 2x + 10}$$

- **[M1]** Correct substitution of $f(x)$ into $g(x)$.
- **[A1]** Correct simplified expression.

#### **Part (c)**

**Step 5: Find the value at the boundary/minimum**

$gf(1)$ or $3 + \sqrt{"5" + 4}$

- **[M1]** Clear attempt to find $gf(1)$ or correct expression.

**Step 6: State the range of $gf$**

Range of $gf \ge 6$

- **[A1]** Correct range.

**Step 7: State the domain of $gf$**

Domain = domain of $f = x \ge 0$

- **[B1]** Correct domain.

---
topic: "Trigonometry and Modelling"
subtopic: "Proving trigonometric identities"
---
### **Question 2**

**(a)** Show that

$$\sin 3x = 3 \sin x - 4 \sin^3 x$$

**(3)**

Hence find

**(b)** $\int \cos x (6 \sin x - 2 \sin 3x)^{\frac{2}{3}} \, \text{d}x$ **(3)**

**(c)** $\int (3 \sin 2x - 2 \sin 3x \cos x)^{\frac{1}{3}} \, \text{d}x$ **(4)**

**(Total 10 marks)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Use compound angle formula**

$$\sin(2x + x) = \sin 2x \cos x + \cos 2x \sin x$$

- **[M1]** Use of $\sin(A+B)$.

**Step 2: Use double angle formulae**

$$= 2 \sin x \cos^2 x + (\cos^2 x - \sin^2 x)\sin x$$

- **[M1]** Use of $\sin 2x$ and $\cos 2x$.

**Step 3: Simplify to the required form**

$$= 2 \sin x(1 - \sin^2 x) + \sin x - 2\sin^3 x = 3 \sin x - 4 \sin^3 x$$

- **[A1]** Correct solution only (cso).

*(Note: Use of $\sin 3x = 3 \cos^2 x \sin x - \sin^3 x$ for M1, M1)*

#### **Part (b)**

**Step 4: Simplify the integrand using part (a)**

$$6 \sin x - 2 \sin 3x = 6 \sin x - 2(3 \sin x - 4 \sin^3 x) = 8 \sin^3 x$$

- **[M1]** Attempt to use (a).

**Step 5: Rewrite the integral**

$$I = \int \cos x (8 \sin^3 x)^{\frac{2}{3}} \, \text{d}x = \int 4 \sin^2 x \cos x \, \text{d}x$$

- **[A1]** For $4 \sin^2 x \cos x$ only.

**Step 6: Integrate**

$$= \frac{4\sin^3 x}{3} + c$$

- **[A1]** Correct integration (or equivalent, e.g., $\frac{2}{3} \sin 2x \cos x - \frac{4}{3} \sin x \cos 2x + c$).

#### **Part (c)**

**Step 7: Use double angle formula for $\sin 2x$**

$$\int (3 \sin 2x - 2 \sin 3x \cos x)^{\frac{1}{3}} \, \text{d}x = \int (6 \sin x \cos x - 2 \sin 3x \cos x)^{\frac{1}{3}} \, \text{d}x$$

- **[M1]** Use of $\sin 2x$.

**Step 8: Simplify the integrand using part (a)**

$$= \int (\cos x (6 \sin x - 2 \sin 3x))^{\frac{1}{3}} \, \text{d}x = \int (\cos x \cdot 8 \sin^3 x)^{\frac{1}{3}} \, \text{d}x = \int 2 \sin x \cos^{\frac{1}{3}} x \, \text{d}x$$

- **[A1]** Use of (a) to simplify integrand to $\int 2 \sin x \cos^{\frac{1}{3}} x \, \text{d}x$ or $\int (8 \cos x \sin^3 x)^{\frac{1}{3}} \, \text{d}x$.

**Step 9: Integrate**

Attempt integration $\to k \cos^{\frac{4}{3}} x$:

- **[M1]** Attempt to integrate.

$$= -\frac{3}{2} \cos^{\frac{4}{3}} x + c$$

- **[A1]** Correct integration.

---
topic: "Trigonometric Identities and Equations"
subtopic: "Harder trigonometric equations"
---
### **Question 3**

The angle $\theta$, $0 < \theta < \frac{\pi}{2}$, satisfies

$$\tan \theta \tan 2\theta = \sum_{r=0}^{\infty} 2 \cos^r 2\theta$$

**(a)** Show that $\tan \theta = 3^p$, where $p$ is a rational number to be found. **(8)**

**(b)** Hence show that $\frac{\pi}{6} < \theta < \frac{\pi}{4}$. **(2)**

**(Total 10 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Identify the geometric progression on the RHS**

RHS is a GP with $a = 2$, $r = \cos 2\theta$.

Sum to infinity:

$$S_{\infty} = \frac{2}{1 - \cos 2\theta}$$

- **[M1]** Identify GP and attempt sum to infinity.
- **[A1]** Correct sum to infinity expression.

**Step 2: Simplify the RHS using double angle formula**

Using $\cos 2\theta = 1 - 2 \sin^2 \theta$:

$$\text{RHS} = \frac{2}{2 \sin^2 \theta} = \csc^2 \theta \quad \left(\text{Allow } \frac{k}{\sin^2 \theta}\right)$$

- **[M1]** Use $\cos 2\theta$ to simplify.

**Step 3: Express LHS in terms of $\tan \theta$**

Using $\tan 2\theta = \frac{2 \tan \theta}{1 - \tan^2 \theta}$:

$$\text{LHS} = \tan \theta \tan 2\theta = \frac{2 \tan^2 \theta}{1 - \tan^2 \theta}$$

- **[M1]** Use of $\tan 2\theta$ on LHS.

**Step 4: Equate LHS and RHS and express in terms of $\tan \theta$**

$$\frac{2 \tan^2 \theta}{1 - \tan^2 \theta} = 1 + \cot^2 \theta = \frac{1 + \tan^2 \theta}{\tan^2 \theta}$$

- **[M1]** Equate LHS = RHS and use formula to get equation in $\tan \theta$ or a single trig function.

**Step 5: Form a polynomial in $\tan \theta$**

$$2 \tan^4 \theta = (1 - \tan^2 \theta)(1 + \tan^2 \theta) \Rightarrow 2 \tan^4 \theta = 1 - \tan^4 \theta$$

$$3 \tan^4 \theta - 1 = 0$$

- **[A1]** Correct equation (either line).

**Step 6: Solve for $\tan \theta$**

$$\tan^4 \theta = \frac{1}{3} \Rightarrow \tan \theta = \left(\frac{1}{3}\right)^{\frac{1}{4}}$$

- **[dM1]** Solve their equation leading to $\tan \theta = \dots$ (Dependent on 4th M).

**Step 7: State the final value of $\tan \theta$ and $p$**

$$\tan \theta = 3^{-\frac{1}{4}} \quad \text{or} \quad p = -\frac{1}{4}$$

- **[A1]** Correct value of $\tan \theta$ or $p$.

#### **Part (b)**

**Step 8: Compare values of tangent**

Since $1 > 3^{-\frac{1}{4}} > 3^{-\frac{1}{2}}$:

$$\tan \frac{\pi}{4} > \tan \theta > \tan \frac{\pi}{6}$$

- **[M1]** Attempt to compare $\tan \theta$ with $\tan \frac{\pi}{4}$ and $\tan \frac{\pi}{6}$.

**Step 9: Conclude the inequality**

$$\frac{\pi}{4} > \theta > \frac{\pi}{6}$$

- **[A1]** Correct solution only (cso).

---
topic: "Vectors"
subtopic: "Vectors in 3D"
---
### **Question 4**

$$\mathbf{a} = \begin{pmatrix} -3 \\ 1 \\ 4 \end{pmatrix}, \quad \mathbf{b} = \begin{pmatrix} 5 \\ -2 \\ 9 \end{pmatrix}, \quad \mathbf{c} = \begin{pmatrix} 8 \\ -4 \\ 3 \end{pmatrix}$$

The points $A$, $B$ and $C$ with position vectors $\mathbf{a}$, $\mathbf{b}$ and $\mathbf{c}$, respectively, are 3 vertices of a cube.

**(a)** Find the volume of the cube. **(5)**

The points $P$, $Q$ and $R$ are vertices of a second cube with $\overrightarrow{PQ} = \begin{pmatrix} 3 \\ 4 \\ \alpha \end{pmatrix}$, $\overrightarrow{PR} = \begin{pmatrix} 7 \\ 1 \\ 0 \end{pmatrix}$ and $\alpha$ a positive constant.

**(b)** Given that angle $QPR = 60^\circ$, find the value of $\alpha$. **(3)**

**(c)** Find the length of a diagonal of the second cube. **(3)**

**(Total 11 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Find the vectors between the vertices**

$$\overrightarrow{AB} = \mathbf{b} - \mathbf{a} = \begin{pmatrix} 8 \\ -3 \\ 5 \end{pmatrix}, \quad \overrightarrow{BC} = \mathbf{c} - \mathbf{b} = \begin{pmatrix} 3 \\ -2 \\ -6 \end{pmatrix}, \quad \overrightarrow{AC} = \mathbf{c} - \mathbf{a} = \begin{pmatrix} 11 \\ -5 \\ -1 \end{pmatrix}$$

- **[M1]** Attempt all of these three vectors or two and show perpendicular.

**Step 2: Calculate the lengths of the vectors**

$$|\overrightarrow{AB}| = \sqrt{98}, \quad |\overrightarrow{BC}| = \sqrt{49} = 7, \quad |\overrightarrow{AC}| = \sqrt{147}$$

- **[M1]** Attempting at least one length.
- **[A1]** All 2 or 3 correct.

**Step 3: Identify the side length of the cube**

$\overrightarrow{BC}$ is the shortest, so it must be the side length of the cube.

- **[M1]** Select the shortest length.

**Step 4: Calculate the volume**

$$\text{Volume} = 7^3 = 343$$

- **[A1]** Correct volume (requires all M marks).

#### **Part (b)**

**Step 5: Calculate the scalar product**

$$\overrightarrow{PQ} \cdot \overrightarrow{PR} = 21 + 4 + 0 = 25$$

- **[M1]** Attempt scalar product.

**Step 6: Set up the equation using the cosine formula**

$$\cos(QPR) = \frac{25}{\sqrt{50}\sqrt{25 + \alpha^2}} = \frac{1}{2}$$

- **[M1]** Use of $\cos 60^\circ$ and scalar product formula to get an equation for $\alpha$.

**Step 7: Solve for $\alpha$**

$$\alpha = 5 \quad (\text{Allow } \pm 5)$$

- **[A1]** Correct value of $\alpha$.

#### **Part (c)**

**Step 8: Identify the face diagonal**

For $60^\circ$ angle, $PQ = PR = \sqrt{50}$ must be a diagonal of a face.

- **[M1]** Recognize $PQ$ or $PR$ is a face diagonal (OK on figure).

**Step 9: Find the side length of the cube**

Therefore side must be $5$ (since face diagonal is $\text{side} \times \sqrt{2}$).

- **[A1]** Correct side length.

**Step 10: Find the diagonal of the cube**

$$\text{Diagonal} = 5\sqrt{3}$$

- **[A1]** Correct diagonal length.

---
topic: "Exponentials and Logarithms"
subtopic: "Laws of logarithms"
---
### **Question 5**

[ In this question the values of $a$, $x$, and $n$ are such that $a$ and $x$ are positive real numbers, with $a > 1$, $x \ne a$, $x \ne 1$ and $n$ is an integer with $n > 1$ ]

Sam was confused about the rules of logarithms and thought that

$$\log_a x^n = (\log_a x)^n \quad (1)$$

**(a)** Given that $x$ satisfies statement (1) find $x$ in terms of $a$ and $n$. **(3)**

Sam also thought that

$$\log_a x + \log_a x^2 + \dots + \log_a x^n = \log_a x + (\log_a x)^2 + \dots + (\log_a x)^n \quad (2)$$

**(b)** For $n = 3$, $x_1$ and $x_2$ ($x_1 > x_2$) are the two values of $x$ that satisfy statement (2).

**(i)** Find, in terms of $a$, an expression for $x_1$ and an expression for $x_2$.

**(ii)** Find the exact value of $\log_a \left(\frac{x_1}{x_2}\right)$. **(5)**

**(c)** Show that if $\log_a x$ satisfies statement (2) then

$$2(\log_a x)^n - n(n+1)\log_a x + (n^2 + n - 2) = 0$$

**(6)**

**(Total 14 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Use the power rule of logarithms**

$$\log_a x^n = (\log_a x)^n \Rightarrow n \log_a x = (\log_a x)^n$$

- **[M1]** Use of the power rule to form an equation.

**Step 2: Solve for $\log_a x$**

$$n = (\log_a x)^{n-1} \Rightarrow \log_a x = n^{\frac{1}{n-1}}$$

- **[M1]** Attempt root to get an expression for $\log_a x$.

**Step 3: Express $x$ in terms of $a$ and $n$**

$$x = a^{n^{\frac{1}{n-1}}} \quad (\text{o.e.})$$

- **[A1]** Correct expression for $x$.

#### **Part (b)**

**Step 4: Set up the equation for $n = 3$**

$$(\log_a x)^3 + (\log_a x)^2 - 5\log_a x = 0 \quad \text{or} \quad (\log_a x)^3 - 6\log_a x + 5 = 0$$

- **[M1]** Use $n = 3$ to get either equation.

**Step 5: Solve the quadratic in $\log_a x$**

Since $x \ne 1$, $\log_a x \ne 0$, so we divide by $\log_a x$ or solve the quadratic:

Let $u = \log_a x$ and solve $u^2 + u - 5 = 0 \Rightarrow u = \frac{-1 \pm \sqrt{21}}{2}$

- **[M1]** Attempt to solve relevant quadratic.

**Step 6: Write expressions for $x_1$ and $x_2$**

$$x_1 = a^{\frac{-1 + \sqrt{21}}{2}}, \quad x_2 = a^{\frac{-1 - \sqrt{21}}{2}}$$

- **[A1]** Both correct.

**Step 7: Find the exact value of the log ratio**

$$\log_a \left(\frac{x_1}{x_2}\right) = \log_a x_1 - \log_a x_2 = \frac{-1 + \sqrt{21}}{2} - \frac{-1 - \sqrt{21}}{2}$$

- **[M1]** Use $\log x - \log y$ rule and attempt to substitute values for $x$.

$$= \sqrt{21}$$

- **[A1]** Correct exact value.

#### **Part (c)**

**Step 8: Simplify the LHS of statement (2)**

$$\text{LHS} = \log_a x(1 + 2 + \dots + n)$$

- **[M1]** Attempt to use power rule on all of LHS.

$$= \frac{n(n+1)}{2} \log_a x$$

- **[A1]** Correct LHS simplification.

**Step 9: Simplify the RHS of statement (2)**

RHS is a geometric series with first term $a = \log_a x$ and common ratio $r = \log_a x$:

$$\text{RHS} = \frac{\log_a x [(\log_a x)^n - 1]}{\log_a x - 1}$$

- **[M1]** Identify and attempt sum of GP.
- **[A1]** Correct RHS simplification.

**Step 10: Equate LHS and RHS**

$$\log_a x \left(\frac{n(n+1)}{2}\right) = \frac{\log_a x [(\log_a x)^n - 1]}{\log_a x - 1}$$

- **[dM1]** Equate and attempt to simplify to given answer (dependent on both previous M marks).

**Step 11: Show the final equation**

$$\frac{n(n+1)}{2}(\log_a x - 1) = (\log_a x)^n - 1$$

$$n(n+1)\log_a x - n(n+1) = 2(\log_a x)^n - 2$$

$$2(\log_a x)^n - n(n+1)\log_a x + (n^2 + n - 2) = 0$$

- **[A1]** Correct solution only (cso) leading to the given answer.

---
topic: "Integration"
subtopic: "Areas under curves"
---
### **Question 6**

**Figure 1** _(A sketch of the curve $y = (x + a)(x - b)^2$, crossing the x-axis at $P(-a, 0)$ and touching it at $Q(b, 0)$, with a maximum point at $S$ and a shaded region between the curve and the x-axis from $P$ to $Q$.)_

Figure 1 shows a sketch of the curve with equation $y = (x + a)(x - b)^2$, where $a$ and $b$ are positive constants. The curve cuts the $x$-axis at $P$ and has a maximum point at $S$ and a minimum point at $Q$.

**(a)** Write down the coordinates of $P$ and $Q$ in terms of $a$ and $b$. **(2)**

**(b)** Show that $G$, the area of the shaded region between the curve $PSQ$ and the $x$-axis, is given by

$$G = \frac{(a+b)^4}{12}$$

**(6)**

The rectangle $PQRST$ has $RST$ parallel to $QP$ and both $PT$ and $QR$ are parallel to the $y$-axis.

**(c)** Show that

$$\frac{G}{\text{Area of } PQRST} = k$$

where $k$ is a constant independent of $a$ and $b$ and find the value of $k$. **(8)**

**(Total 16 marks)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: State coordinates of $P$ and $Q$**

$P(-a, 0)$, $Q(b, 0)$

- **[B1]** Correct coordinates for $P$.
- **[B1]** Correct coordinates for $Q$. (Allow B1B0 for $(0, -a)$ etc.)

#### **Part (b)**

**Step 2: Set up the integration by parts**

$$I = \int_{-a}^{b} (x + a)(x - b)^2 \, \text{d}x$$

Let $u = x + a \Rightarrow \text{d}u = \text{d}x$, and $\text{d}v = (x - b)^2 \, \text{d}x \Rightarrow v = \frac{(x - b)^3}{3}$:

$$I = \left[ (x + a)\frac{(x - b)^3}{3} \right]_{-a}^{b} - \int_{-a}^{b} \frac{(x - b)^3}{3} \, \text{d}x$$

- **[M1]** Correct attempt by parts.
- **[A1]** Correct first term.
- **[A1]** Correct integral term.

**Step 3: Integrate the second term**

$$= 0 - \left[ \frac{(x - b)^4}{12} \right]_{-a}^{b}$$

- **[B1]** Correct evaluation of the first term at limits.
- **[M1]** Correct second stage integration.

**Step 4: Evaluate the limits**

$$= - \left( 0 - \frac{(-a - b)^4}{12} \right) = \frac{(a + b)^4}{12}$$

- **[A1]** Correct solution only (cso).

*Alternative for Part (b):*

**Step 2 (Alt): Expand the integrand**

$$I = \int_{-a}^{b} (x^3 + (a - 2b)x^2 + (b^2 - 2ab)x + ab^2) \, \text{d}x$$

- **[M1]** For 6 terms (at least 3 correct).
- **[A1]** For all terms correct.

**Step 3 (Alt): Integrate term by term**

$$= \left[ \frac{x^4}{4} + \frac{(a - 2b)x^3}{3} + \frac{(b^2 - 2ab)x^2}{2} + ab^2 x \right]_{-a}^{b}$$

- **[M1]** Some integration.
- **[B1]** Some use of $b$ and $-a$.

**Step 4 (Alt): Substitute limits and simplify**

$$= \left( \frac{b^4}{12} + \frac{4ab^3}{12} \right) - \left( -\frac{a^4}{12} - \frac{4a^3b}{12} - \frac{6a^2b^2}{12} \right) = \frac{(a+b)^4}{12}$$

- **[A1]** One bracket correct.
- **[A1]** Correct solution only (cso).

#### **Part (c)**

**Step 5: Differentiate to find the maximum point $S$**

$$y' = (x - b)^2 + 2(x + a)(x - b)$$

- **[M1]** Some correct differentiation.

**Step 6: Solve $y' = 0$**

$$(x - b)[(x - b) + 2(x + a)] = 0 \Rightarrow (x - b)(3x + 2a - b) = 0$$

Since $x \ne b$ at $S$:

$$x = \frac{b - 2a}{3}$$

- **[M1]** Attempt to solve $y' = 0$.
- **[A1]** Correct $x$-coordinate of $S$.

**Step 7: Find the $y$-coordinate of $S$**

$$y_S = \left( \frac{b - 2a}{3} + a \right)\left( \frac{b - 2a}{3} - b \right)^2 = \left( \frac{a + b}{3} \right)\left( \frac{-2a - 2b}{3} \right)^2 = \frac{4}{27}(a + b)^3$$

- **[dM1]** Substitute to get $y$-coordinate of $S$ (dependent on second M1).

**Step 8: Find the area of the rectangle $PQRST$**

The width of the rectangle is $QP = b - (-a) = a + b$.
The height of the rectangle is $y_S$.

$$\text{Area of } PQRST = y_S \times (a + b) = \frac{4}{27}(a + b)^4$$

- **[dM1]** Use correct formula for area of rectangle (dependent on third M1).
- **[A1]** Correct area of rectangle.

**Step 9: Calculate the ratio**

$$\text{Ratio} = \frac{\frac{(a+b)^4}{12}}{\frac{4}{27}(a+b)^4} = \frac{27}{48} = \frac{9}{16}$$

- **[dM1]** Attempt to find the ratio and eliminate $(a+b)^4$ (dependent on second and third M1).
- **[A1]** Correct ratio $k = \frac{9}{16}$.

---
topic: "Trigonometric Functions"
subtopic: "Inverse trigonometric functions"
---
### **Question 7**

**Figure 2** _(A sketch of the curve $C_1$ with equation $y = \cos(\cos x)$ for $0 \le x < 2\pi$, showing its turning points at $(0, \cos 1)$, $P$, $Q$, and $R$.)_

Figure 2 shows a sketch of the curve $C_1$ with equation $y = \cos(\cos x)$, $0 \le x < 2\pi$.
The curve has turning points at $(0, \cos 1)$, $P$, $Q$ and $R$ as shown in Figure 2.

**(a)** Find the coordinates of the points $P$, $Q$ and $R$. **(4)**

The curve $C_2$ has equation $y = \sin(\cos x)$, $0 \le x < 2\pi$. The curves $C_1$ and $C_2$ intersect at the points $S$ and $T$.

**(b)** Copy Figure 2 and on this diagram sketch $C_2$ stating the coordinates of the minimum point on $C_2$ and the points where $C_2$ meets or crosses the coordinate axes. **(5)**

The coordinates of $S$ are $(\alpha, d)$ where $0 < \alpha < \pi$.

**(c)** Show that $\alpha = \arccos\left(\frac{\pi}{4}\right)$. **(2)**

**(d)** Find the value of $d$ in surd form and write down the coordinates of $T$. **(3)**

The tangent to $C_1$ at the point $S$ has gradient $\tan \beta$.

**(e)** Show that $\beta = \arctan\left(\sqrt{\frac{16 - \pi^2}{32}}\right)$. **(5)**

**(f)** Find, in terms of $\beta$, the obtuse angle between the tangent to $C_1$ at $S$ and the tangent to $C_2$ at $S$. **(5)**

**(Total 24 marks)**

### **Mark Scheme 7**

#### **Part (a)**

**Step 1: Find the conditions for stationary points**

Max of $\cos u$ is $1$ when $u = 0$.
$u = \cos x = 0 \Rightarrow x = \frac{\pi}{2}$ or $x = \frac{3\pi}{2}$.

- **[M1]** Method to get at least one of these values (implied by correct $P$ or $R$). Condone degrees in any part.

**Step 2: State coordinates of $P$ and $R$**

$$P\left(\frac{\pi}{2}, 1\right), \quad R\left(\frac{3\pi}{2}, 1\right)$$

- **[A1]** Correct coordinates for $P$.
- **[A1]** Correct coordinates for $R$. (Require $1$, not $\cos(0)$).

**Step 3: State coordinates of $Q$**

$\cos(-1) = \cos(1)$, so $Q(\pi, \cos 1)$

- **[B1]** Correct coordinates for $Q$ (accept $\cos(-1)$).

#### **Part (b)**

**Step 4: Sketch the curve $C_2$**

- **[B1]** Correct shape (one negative minimum).
- **[B1]** $\sin 1$ seen at ends and $\cos 1 < \sin 1 < 1$.
- **[B1]** Intercepts at $\frac{\pi}{2}$ and $\frac{3\pi}{2}$ on the x-axis.
- **[B1]** Minimum point at $(\pi, \sin(-1))$.

*(Accept points NOT marked on graph if listed).*

#### **Part (c)**

**Step 5: Set up intersection equation**

$$\cos(\cos x) = \sin(\cos x) \Rightarrow 1 = \tan(\cos x)$$

- **[M1]** Use of $\frac{\sin}{\cos} = \tan$.

**Step 6: Solve for $x$**

$$\cos x = \frac{\pi}{4} \quad \left(\text{or } \frac{5\pi}{4}\right) \Rightarrow x = \alpha = \arccos\left(\frac{\pi}{4}\right)$$

- **[A1]** Correct solution only (cso). (Allow verify but needs a comment "so $\alpha = \dots$").

#### **Part (d)**

**Step 7: Find $d$**

$$d = \cos(\cos \alpha) = \cos\left(\frac{\pi}{4}\right) = \frac{1}{\sqrt{2}}$$

- **[M1]** Substitute $\cos \alpha$ into the equation.
- **[A1]** Correct value of $d$ (accept $d = \frac{1}{\sqrt{2}}$ or equivalent).

**Step 8: State coordinates of $T$**

$$T\left(2\pi - \arccos\left(\frac{\pi}{4}\right), \frac{1}{\sqrt{2}}\right)$$

- **[B1ft]** Correct coordinates of $T$ (follow through their $y$-coordinate of $S$).

#### **Part (e)**

**Step 9: Differentiate $C_1$**

$$y' = \sin(\cos x)\sin x$$

- **[M1]** Attempt at chain rule.
- **[A1]** Correct derivative.

**Step 10: Substitute $x = \alpha$**

$$m = \sin\left(\frac{\pi}{4}\right)\sin \alpha$$

- **[M1]** Substitution attempt.

**Step 11: Express $\sin \alpha$ in terms of $\pi$**

$$\sin \alpha = \sqrt{1 - \cos^2 \alpha} = \sqrt{1 - \left(\frac{\pi}{4}\right)^2} = \frac{\sqrt{16 - \pi^2}}{4}$$

$$m = \frac{1}{\sqrt{2}} \times \frac{\sqrt{16 - \pi^2}}{4} = \sqrt{\frac{16 - \pi^2}{32}}$$

- **[M1]** Attempt $\sin \alpha$ in terms of $\pi$.

**Step 12: Show the final expression for $\beta$**

$$\tan \beta = \sqrt{\frac{16 - \pi^2}{32}} \Rightarrow \beta = \arctan\left(\sqrt{\frac{16 - \pi^2}{32}}\right)$$

- **[A1]** Correct solution only (cso).

#### **Part (f)**

**Step 13: Differentiate $C_2$**

$$y' = -\cos(\cos x)\sin x$$

- **[M1]** Attempt $y'$.

**Step 14: Find the gradient of $C_2$ at $S$**

$$m' = -\cos\left(\frac{\pi}{4}\right)\sin \alpha = -\tan \beta = -\sqrt{\frac{16 - \pi^2}{32}}$$

- **[M1]** Substitution of $\alpha$.
- **[A1]** Correct gradient $m'$.

**Step 15: Find the angle between the tangents**

The gradients are $\tan \beta$ and $-\tan \beta$.
The angle between the two tangents is $2\beta$ or $\pi - 2\beta$.

- **[M1]** Attempt to find angle between two tangents to get $2\beta$ or $\pi - 2\beta$.

**Step 16: Conclude the obtuse angle**

Since $\tan \beta = \sqrt{\frac{16 - \pi^2}{32}} < 1 \Rightarrow \beta < \frac{\pi}{4}$, so $2\beta$ is acute.
Therefore, the obtuse angle is $\pi - 2\beta$ (or $180^\circ - 2\beta$).

- **[A1]** Correct obtuse angle.
