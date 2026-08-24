### **Question 1**

The function $f$ is given by $f(x) = x^2 - 2x + 6, \quad x \ge 0$

**(a)** Find the range of $f$. **(3)**

The function $g$ is given by $g(x) = 3 + \sqrt{x + 4}, \quad x \ge 2$

**(b)** Find $gf(x)$. **(2)**

**(c)** Find the domain and range of $gf$. **(3)** **(Total 8 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Find the minimum of f(x)** Complete the square or differentiate: $f(x) = x^2 - 2x + 6 = (x - 1)^2 + 5$ or $f'(x) = 2x - 2 = 0 \Rightarrow x = 1$.

- **[M1]** Differentiating or complete the square.
    

**Step 2: State the range** Since the minimum is at $(1, 5)$ and the domain $x \ge 0$ includes $x = 1$, the minimum value is $5$. Range: $f(x) \ge 5$ (Accept $y \ge 5$)

- **[A1, A1]** Sketch or work to show minimum at $(1, 5)$; correct range.
    

#### **Part (b)**

**Step 3: Find the composite function** Substitute $f(x)$ into $g(x)$: $gf(x) = 3 + \sqrt{(x^2 - 2x + 6) + 4}$ $= 3 + \sqrt{x^2 - 2x + 10}$

- **[M1, A1]** Correct substitution and simplified expression.
    

#### **Part (c)**

**Step 4: Determine domain and range** The domain of $gf$ is restricted by the domain of $f$: Domain = domain of $f$ = $x \ge 0$.

- **[B1]** Correct domain.
    

The range of $gf$ depends on the range of $f$. Since $f(x) \ge 5$: $gf_{min} = 3 + \sqrt{5 + 4} = 3 + \sqrt{9} = 6$

- **[M1]** Clear attempt to find $gf(1)$ or correct expression evaluated at the minimum of $f$.
    

Range: $gf(x) \ge 6$

- **[A1]** Correct range.
    

### **Question 2**

**(a)** Show that $\sin 3x = 3\sin x - 4\sin^3 x$ **(3)**

Hence find **(b)** $\int \cos x(6\sin x - 2\sin 3x)^{\frac{2}{3}} dx$ **(3)**

**(c)** $\int (3\sin 2x - 2\sin 3x \cos x)^{\frac{1}{3}} dx$ **(4)** **(Total 10 marks)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Expand sin(3x)** Write $\sin 3x = \sin(2x + x)$. $\sin(2x + x) = \sin 2x \cos x + \cos 2x \sin x$

- **[M1]** Use of $\sin(A+B)$ formula.
    

**Step 2: Apply double angle identities** Substitute $\sin 2x = 2\sin x \cos x$ and $\cos 2x = 1 - 2\sin^2 x$: $= (2\sin x \cos x)\cos x + (1 - 2\sin^2 x)\sin x$ $= 2\sin x \cos^2 x + \sin x - 2\sin^3 x$

- **[M1]** Use of $\sin 2x$ and $\cos 2x$ identities.
    

**Step 3: Convert to sine entirely** Substitute $\cos^2 x = 1 - \sin^2 x$: $= 2\sin x(1 - \sin^2 x) + \sin x - 2\sin^3 x$ $= 2\sin x - 2\sin^3 x + \sin x - 2\sin^3 x$ $= 3\sin x - 4\sin^3 x \quad (*)$

- **[A1 cso]** Correct completion with no errors.
    

#### **Part (b)**

**Step 4: Simplify the integrand using part (a)** $6\sin x - 2\sin 3x = 6\sin x - 2(3\sin x - 4\sin^3 x)$

- **[M1]** Attempt to use (a).
    

$= 6\sin x - 6\sin x + 8\sin^3 x = 8\sin^3 x$

- **[A1]** Correct simplified expression.
    

**Step 5: Integrate** Substitute back into the integral: $I = \int \cos x (8\sin^3 x)^{\frac{2}{3}} dx = \int \cos x (4\sin^2 x) dx = 4\int \sin^2 x \cos x dx$

- **[M1]** Applies power $2/3$ correctly to get $4\sin^2 x$.
    

$I = \frac{4\sin^3 x}{3} + c$

- **[A1]** Correct integration (allow equivalents like $\frac{2}{3}\sin 2x \cos x - \frac{4}{3}\sin x \cos 2x$).
    

#### **Part (c)**

**Step 6: Simplify the integrand** $\int (3\sin 2x - 2\sin 3x \cos x)^{\frac{1}{3}} dx = \int (6\sin x \cos x - 2(3\sin x - 4\sin^3 x)\cos x)^{\frac{1}{3}} dx$

- **[M1]** Use of $\sin 2x$ and part (a) to simplify the integrand.
    

$= \int (6\sin x \cos x - 6\sin x \cos x + 8\sin^3 x \cos x)^{\frac{1}{3}} dx$ $= \int (8\sin^3 x \cos x)^{\frac{1}{3}} dx = \int 2\sin x \cos^{\frac{1}{3}} x dx$

- **[A1]** Correctly simplified to $2\sin x \cos^{1/3} x$.
    

**Step 7: Integrate** Let $u = \cos x \Rightarrow du = -\sin x dx$: $= \int -2 u^{\frac{1}{3}} du = -2 \left( \frac{u^{\frac{4}{3}}}{4/3} \right) + c = -\frac{6}{4} u^{\frac{4}{3}} + c$

- **[M1]** Attempt integration of $\sin x \cos^n x$.
    

$= -\frac{3}{2}\cos^{\frac{4}{3}} x + c$

- **[A1]** Correct final answer.
    

### **Question 3**

The angle $\theta$, satisfies $0 < \theta < \frac{\pi}{2}$ and $\tan\theta \tan 2\theta = \sum_{r=0}^{\infty} 2\cos^r 2\theta$

**(a)** Show that $\tan\theta = 3^p$ where $p$ is a rational number to be found. **(8)**

**(b)** Hence show that $\frac{\pi}{6} < \theta < \frac{\pi}{4}$. **(2)** **(Total 10 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Evaluate the infinite sum** The RHS is an infinite geometric progression: $\text{RHS} = \sum_{r=0}^{\infty} 2\cos^r 2\theta = 2 + 2\cos 2\theta + 2\cos^2 2\theta + \dots$ This is a GP with $a = 2$ and common ratio $r = \cos 2\theta$. Since $0 < \theta < \pi/2 \Rightarrow 0 < 2\theta < \pi$, we have $|\cos 2\theta| < 1$. $S_\infty = \frac{a}{1 - r} = \frac{2}{1 - \cos 2\theta}$

- **[M1, A1]** Identifies GP and attempts sum to infinity; correct sum expression.
    

**Step 2: Express both sides in terms of tan** Using $\cos 2\theta = 1 - 2\sin^2 \theta$: $\text{RHS} = \frac{2}{1 - (1 - 2\sin^2 \theta)} = \frac{2}{2\sin^2 \theta} = \csc^2 \theta = 1 + \cot^2 \theta = \frac{1 + \tan^2 \theta}{\tan^2 \theta}$

- **[M1]** Uses $\cos 2\theta$ identity to simplify RHS.
    

For the LHS, use the double angle formula for tan: $\text{LHS} = \tan \theta \left( \frac{2\tan \theta}{1 - \tan^2 \theta} \right) = \frac{2\tan^2 \theta}{1 - \tan^2 \theta}$

- **[M1]** Use of $\tan 2\theta$ formula.
    

**Step 3: Equate LHS and RHS and solve** $\frac{2\tan^2 \theta}{1 - \tan^2 \theta} = \frac{1 + \tan^2 \theta}{\tan^2 \theta}$

- **[dM1]** Equates LHS and RHS.
    

Cross-multiply: $2\tan^4 \theta = (1 - \tan^2 \theta)(1 + \tan^2 \theta) = 1 - \tan^4 \theta$ $3\tan^4 \theta - 1 = 0$

- **[A1]** Correct equation (either line).
    

$\tan^4 \theta = \frac{1}{3} \Rightarrow \tan \theta = \left(\frac{1}{3}\right)^{\frac{1}{4}} = 3^{-\frac{1}{4}}$

- **[M1, A1]** Solves their equation for $\tan\theta$; correct value $p = -1/4$.
    

#### **Part (b)**

**Step 4: Justify the bounds** We know $\tan(\pi/6) = \frac{1}{\sqrt{3}} = 3^{-\frac{1}{2}}$ and $\tan(\pi/4) = 1 = 3^0$. Since $-1/2 < -1/4 < 0$, we have: $3^{-\frac{1}{2}} < 3^{-\frac{1}{4}} < 3^0$ $\Rightarrow \tan\left(\frac{\pi}{6}\right) < \tan \theta < \tan\left(\frac{\pi}{4}\right)$

- **[M1]** Uses known values of $\tan(\pi/6)$ and $\tan(\pi/4)$.
    

Since $\tan x$ is strictly increasing for $0 < x < \pi/2$: $\frac{\pi}{6} < \theta < \frac{\pi}{4} \quad (*)$

- **[A1 cso]** Correct deduction with no incorrect working.
    

### **Question 4**

The points $A$, $B$ and $C$ with position vectors $\mathbf{a}$, $\mathbf{b}$ and $\mathbf{c}$, respectively, are 3 vertices of a cube. $\mathbf{a} = \begin{pmatrix} -3 \\ 1 \\ 4 \end{pmatrix}, \quad \mathbf{b} = \begin{pmatrix} 5 \\ -2 \\ 9 \end{pmatrix}, \quad \mathbf{c} = \begin{pmatrix} 8 \\ -4 \\ 3 \end{pmatrix}$

**(a)** Find the volume of the cube. **(5)**

The points $P$, $Q$ and $R$ are vertices of a second cube with $\overrightarrow{PQ} = \begin{pmatrix} 3 \\ 4 \\ a \end{pmatrix}, \quad \overrightarrow{PR} = \begin{pmatrix} 7 \\ 1 \\ 0 \end{pmatrix}$ and $a$ a positive constant.

**(b)** Given that angle $QPR = 60^\circ$, find the value of $a$. **(3)**

**(c)** Find the length of a diagonal of the second cube. **(3)** **(Total 11 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Calculate vectors between points** $\overrightarrow{AB} = \mathbf{b} - \mathbf{a} = \begin{pmatrix} 8 \\ -3 \\ 5 \end{pmatrix}$ $\overrightarrow{BC} = \mathbf{c} - \mathbf{b} = \begin{pmatrix} 3 \\ -2 \\ -6 \end{pmatrix}$ $\overrightarrow{AC} = \mathbf{c} - \mathbf{a} = \begin{pmatrix} 11 \\ -5 \\ -1 \end{pmatrix}$

- **[M1]** Attempt to calculate all three vertex-to-vertex vectors (or two, and check perpendicularity).
    

**Step 2: Find lengths** $|\overrightarrow{AB}|^2 = 64 + 9 + 25 = 98$ $|\overrightarrow{BC}|^2 = 9 + 4 + 36 = 49 \Rightarrow |\overrightarrow{BC}| = 7$ $|\overrightarrow{AC}|^2 = 121 + 25 + 1 = 147$

- **[M1, A1]** Finds the lengths; correct lengths.
    

**Step 3: Identify the side length** Since this is a cube, the distance between any two vertices can only be a side length $s$, a face diagonal $s\sqrt{2}$, or a space diagonal $s\sqrt{3}$. $49$, $98$, $147$ perfectly correspond to $s^2$, $2s^2$, and $3s^2$. Therefore, $BC$ is the shortest length and must be a side of the cube. Side length $s = 7$.

- **[M1]** Selects shortest length as the side.
    

**Step 4: Calculate Volume** $\text{Volume} = s^3 = 7^3 = 343$

- **[A1]** Correct volume.
    

#### **Part (b)**

**Step 5: Apply the dot product formula** $\overrightarrow{PQ} \cdot \overrightarrow{PR} = (3)(7) + (4)(1) + (a)(0) = 21 + 4 = 25$

- **[M1]** Evaluates the scalar product.
    

$|\overrightarrow{PQ}| = \sqrt{9 + 16 + a^2} = \sqrt{25 + a^2}$ $|\overrightarrow{PR}| = \sqrt{49 + 1 + 0} = \sqrt{50}$ Using $\cos \theta = \frac{\mathbf{u} \cdot \mathbf{v}}{|\mathbf{u}||\mathbf{v}|}$ with $\theta = 60^\circ$: $\cos 60^\circ = \frac{1}{2} = \frac{25}{\sqrt{50}\sqrt{25 + a^2}}$

- **[M1]** Uses dot product formula to form an equation for $a$.
    

**Step 6: Solve for a** $\sqrt{50(25 + a^2)} = 50 \Rightarrow 50(25 + a^2) = 2500 \Rightarrow 25 + a^2 = 50 \Rightarrow a^2 = 25$ Since $a$ is a positive constant, $a = 5$.

- **[A1]** Correct positive value.
    

#### **Part (c)**

**Step 7: Identify the geometric relationship** With $a=5$, $|\overrightarrow{PQ}| = \sqrt{25+25} = \sqrt{50}$ and $|\overrightarrow{PR}| = \sqrt{50}$. For a $60^\circ$ angle between two equal lengths $\sqrt{50}$ in a cube, these vectors must represent face diagonals originating from the same vertex.

- **[M1]** Recognize $PQ$ or $PR$ is a face diagonal.
    

**Step 8: Determine side length and space diagonal** If face diagonal is $\sqrt{50} = 5\sqrt{2}$, then the side length of the cube is $5$.

- **[M1]** Deduces the side length.
    

The length of the space diagonal (main diagonal) of the cube is $s\sqrt{3}$: $\text{Diagonal} = 5\sqrt{3}$

- **[A1]** Correct space diagonal length.
    

### **Question 5**

[In this question the values of $a$, $x$, and $n$ are such that $a$ and $x$ are positive real numbers, with $a > 1$, $x \ne a$, $x \ne 1$ and $n$ is an integer with $n > 1$]

Sam was confused about the rules of logarithms and thought that $\log_a x^n = (\log_a x)^n \quad \text{(1)}$

**(a)** Given that $x$ satisfies statement (1) find $x$ in terms of $a$ and $n$. **(3)**

Sam also thought that $\log_a x + \log_a x^2 + \dots + \log_a x^n = \log_a x + (\log_a x)^2 + \dots + (\log_a x)^n \quad \text{(2)}$

**(b)** For $n = 3$, $x_1$ and $x_2$ ($x_1 > x_2$) are the two values of $x$ that satisfy statement (2). (i) Find, in terms of $a$, an expression for $x_1$ and an expression for $x_2$. (ii) Find the exact value of $\log_a \left(\frac{x_1}{x_2}\right)$. **(5)**

**(c)** Show that if $\log_a x$ satisfies statement (2) then $2(\log_a x)^n - n(n+1)\log_a x + (n^2 + n - 2) = 0$ **(6)** **(Total 14 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Apply log rules to LHS** Using the power rule $\log_a x^n = n\log_a x$: $n\log_a x = (\log_a x)^n$

- **[M1]** Use of the power rule to form an equation.
    

**Step 2: Solve for log x** Since $x \ne 1$, $\log_a x \ne 0$. Divide by $\log_a x$: $n = (\log_a x)^{n-1} \Rightarrow \log_a x = n^{\frac{1}{n-1}}$

- **[M1]** Attempt root to get an expression for log.
    

**Step 3: Solve for x** $x = a^{n^{\frac{1}{n-1}}}$

- **[A1]** Correct explicit formula for $x$.
    

#### **Part (b)**

**Step 4: Form equation for n=3** For $n=3$, statement (2) becomes: $\log_a x + 2\log_a x + 3\log_a x = \log_a x + (\log_a x)^2 + (\log_a x)^3$ $6\log_a x = \log_a x + (\log_a x)^2 + (\log_a x)^3$

- **[M1]** Use $n=3$ to get relevant equation.
    

**Step 5: Solve quadratic in log x** Let $u = \log_a x$. Then $6u = u + u^2 + u^3 \Rightarrow u^3 + u^2 - 5u = 0$. Since $x \ne 1$, $u \ne 0$. Divide by $u$: $u^2 + u - 5 = 0$ $u = \frac{-1 \pm \sqrt{1 - 4(1)(-5)}}{2} = \frac{-1 \pm \sqrt{21}}{2}$

- **[M1, A1]** Attempts to solve relevant quadratic; correct roots for $u$.
    

Thus: $x_1 = a^{\frac{-1 + \sqrt{21}}{2}} \quad \text{and} \quad x_2 = a^{\frac{-1 - \sqrt{21}}{2}}$

**Step 6: Evaluate the ratio** (ii) We need $\log_a(x_1 / x_2)$: $\log_a\left(\frac{x_1}{x_2}\right) = \log_a x_1 - \log_a x_2 = u_1 - u_2$

- **[M1]** Uses log rules on the ratio.
    

$= \frac{-1 + \sqrt{21}}{2} - \frac{-1 - \sqrt{21}}{2} = \frac{2\sqrt{21}}{2} = \sqrt{21}$

- **[A1]** Exact value.
    

#### **Part (c)**

**Step 7: Simplify the LHS of Statement (2)** $\text{LHS} = \log_a x + 2\log_a x + \dots + n\log_a x = (\log_a x)(1 + 2 + \dots + n) = (\log_a x) \frac{n(n+1)}{2}$

- **[M1, A1]** Attempt to use power rule on all of LHS; correct simplified LHS.
    

**Step 8: Simplify the RHS of Statement (2)** The RHS is a geometric progression with first term $\log_a x$ and common ratio $\log_a x$. $\text{RHS} = \frac{\log_a x [(\log_a x)^n - 1]}{\log_a x - 1}$

- **[M1, A1]** Identify and attempt sum of GP; correct RHS.
    

**Step 9: Equate and manipulate to given result** $(\log_a x) \frac{n(n+1)}{2} = \frac{\log_a x [(\log_a x)^n - 1]}{\log_a x - 1}$ Since $x \ne 1$, $\log_a x \ne 0$, we can divide by $\log_a x$ and multiply by $2(\log_a x - 1)$: $n(n+1)(\log_a x - 1) = 2[(\log_a x)^n - 1]$

- **[dM1]** Equate and simplify.
    

$n(n+1)\log_a x - (n^2 + n) = 2(\log_a x)^n - 2$ $2(\log_a x)^n - n(n+1)\log_a x + (n^2 + n - 2) = 0 \quad (*)$

- **[A1 cso]** Completes proof showing all steps correctly.
    

### **Question 6**

**Figure 1** _(A sketch of an inverted bell-shape curve starting from below the x-axis, crossing at P, reaching a local maximum at S, and falling to just touch the x-axis at a local minimum Q, before rising to infinity)._

Figure 1 shows a sketch of the curve with equation $y = (x+a)(x-b)^2$, where $a$ and $b$ are positive constants. The curve cuts the x-axis at $P$ and has a maximum point at $S$ and a minimum point at $Q$.

**(a)** Write down the coordinates of $P$ and $Q$ in terms of $a$ and $b$. **(2)**

**(b)** Show that $G$, the area of the shaded region between the curve $PSQ$ and the x-axis, is given by $G = \frac{(a+b)^4}{12}$ **(6)**

The rectangle $PQRST$ has $RST$ parallel to $QP$ and both $PT$ and $QR$ are parallel to the y-axis.

**(c)** Show that $\frac{G}{\text{Area of } PQRST} = k$ where $k$ is a constant independent of $a$ and $b$, and find the value of $k$. **(8)** **(Total 16 marks)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Identify x-intercepts** The roots of $y = 0$ are $x = -a$ and $x = b$. Since it touches the axis at $Q$ (a minimum) and crosses at $P$ (and $a, b > 0$), we have: $P$ is $(-a, 0)$ and $Q$ is $(b, 0)$.

- **[B1, B1]** Correct coordinates (Allow B1B0 for stating $-a$ and $b$ without coordinates).
    

#### **Part (b)**

**Step 2: Set up the area integral** $G = \int_{-a}^{b} (x+a)(x-b)^2 dx$

- **[M1]** Correct setup of integral with limits.
    

**Step 3: Integrate by parts or expand** _Method 1 (Integration by parts):_ Let $u = x+a \Rightarrow du = dx$. Let $dv = (x-b)^2 dx \Rightarrow v = \frac{(x-b)^3}{3}$. $G = \left[ (x+a)\frac{(x-b)^3}{3} \right]_{-a}^b - \int_{-a}^{b} \frac{(x-b)^3}{3} dx$

- **[M1]** Correct attempt by parts.
    

$G = (0 - 0) - \left[ \frac{(x-b)^4}{12} \right]_{-a}^b = 0 - \left( 0 - \frac{(-a-b)^4}{12} \right) = \frac{(a+b)^4}{12} \quad (*)$

- **[A1, A1 cso]** M1 for 2nd stage integration, A1 for completely correct steps.
    

_Method 2 (Expansion):_ $I = \int (x^3 + (a-2b)x^2 + (b^2-2ab)x + ab^2) dx$ $= \left[ \frac{x^4}{4} + \frac{(a-2b)x^3}{3} + \frac{(b^2-2ab)x^2}{2} + ab^2x \right]_{-a}^b$ Substitute $b$ and $-a$, then simplify to $(a+b)^4/12$.

- **[M1, M1, A1 cso]** Expansion, integration, and factorization to final answer.
    

#### **Part (c)**

**Step 4: Find the y-coordinate of maximum S** Differentiate $y$: $\frac{dy}{dx} = (x-b)^2 + 2(x+a)(x-b)$

- **[M1]** Use of product rule.
    

Set to zero to find turning points: $(x-b)[(x-b) + 2(x+a)] = 0 \Rightarrow (x-b)(3x - b + 2a) = 0$

- **[M1]** Sets derivative to zero.
    

Roots are $x = b$ (which is Q) and $x = \frac{b-2a}{3}$ (which is S).

- **[A1]** Correct x-coordinate for S.
    

Substitute $x$ into $y$ to get height of rectangle: $y_S = \left(\frac{b-2a}{3} + a\right)\left(\frac{b-2a}{3} - b\right)^2 = \left(\frac{a+b}{3}\right)\left(\frac{-2a-2b}{3}\right)^2$

- **[dM1]** Substitute $x$ into original equation.
    

$y_S = \left(\frac{a+b}{3}\right) \frac{4(a+b)^2}{9} = \frac{4}{27}(a+b)^3$

- **[dM1, A1]** Correctly simplifies the y-coordinate.
    

**Step 5: Area of Rectangle** Width of rectangle $PQ$ is $b - (-a) = a + b$. $\text{Area}_{PQRST} = y_S \times (a+b) = \frac{4}{27}(a+b)^4$

- **[M1]** Use of correct formula for rectangle area.
    

**Step 6: Ratio calculation** $\frac{G}{\text{Area}} = \frac{\frac{(a+b)^4}{12}}{\frac{4}{27}(a+b)^4} = \frac{27}{48} = \frac{9}{16}$ Thus $k = 9/16$.

- **[A1]** Correct value for $k$.
    

### **Question 7**

**Figure 2** _(A sketch of a wave-like curve bouncing between y=1 and y=cos1. The curve crosses the y-axis at (0, cos1), peaks at P, dips to a minimum at Q, and peaks again at R)._

Figure 2 shows a sketch of the curve $C_1$ with equation $y = \cos(\cos x)$, $0 \le x < 2\pi$. The curve has turning points at $(0, \cos 1)$, $P$, $Q$ and $R$ as shown in Figure 2.

**(a)** Find the coordinates of the points $P$, $Q$ and $R$. **(4)**

The curve $C_2$ has equation $y = \sin(\cos x)$, $0 \le x < 2\pi$. The curves $C_1$ and $C_2$ intersect at the points $S$ and $T$.

**(b)** Copy Figure 2 and on this diagram sketch $C_2$ stating the coordinates of the minimum point on $C_2$ and the points where $C_2$ meets or crosses the coordinate axes. **(5)**

The coordinates of $S$ are $(\alpha, d)$ where $0 < \alpha < \pi$.

**(c)** Show that $\alpha = \arccos\left(\frac{\pi}{4}\right)$ **(2)**

**(d)** Find the value of $d$ in surd form and write down the coordinates of $T$. **(3)**

The tangent to $C_1$ at the point $S$ has gradient $\tan\beta$.

**(e)** Show that $\beta = \arctan\sqrt{\left(\frac{16-\pi^2}{32}\right)}$ **(5)**

**(f)** Find, in terms of $\beta$, the obtuse angle between the tangent to $C_1$ at $S$ and the tangent to $C_2$ at $S$. **(5)** **(Total 24 marks)**

### **Mark Scheme 7**

#### **Part (a)**

**Step 1: Understand the turning points** The turning points of $\cos(\cos x)$ occur when $\cos x$ is at a maximum/minimum (i.e. $\pm 1$) or when $\cos(\dots)$ reaches a maximum/minimum (i.e. argument is 0). Maximum of $\cos(u)$ is 1 when $u = 0$. So $\cos x = 0 \Rightarrow x = \pi/2$ and $x = 3\pi/2$. At these points, $y = \cos(0) = 1$. Thus, $P$ and $R$ are $(\pi/2, 1)$ and $(3\pi/2, 1)$.

- **[M1]** Method to get at least one of these values.
    
- **[A1, A1]** Implied by correct P and R.
    

Minimum occurs when $\cos x = -1 \Rightarrow x = \pi$. $y = \cos(-1) = \cos(1)$. Thus, $Q$ is $(\pi, \cos 1)$.

- **[B1]** Correct coordinate for Q.
    

#### **Part (b)**

**Step 2: Sketch C2** $C_2 : y = \sin(\cos x)$.

- At $x = 0$, $y = \sin(1)$. (Note $\sin 1 > \cos 1$).
    
- At $x = \pi/2, 3\pi/2$, $y = \sin(0) = 0$ (crosses x-axis).
    
- At $x = \pi$, $y = \sin(-1) = -\sin 1$ (this is a minimum).
    
- **[B1]** Shape: one negative minimum.
    
- **[B1]** Ends at $\sin 1$ and $\cos 1 < \sin 1 < 1$ correctly shown.
    
- **[B1, B1]** Crosses at $\pi/2$ and $3\pi/2$.
    
- **[B1]** Min stated as $(\pi, -\sin 1)$.
    

#### **Part (c)**

**Step 3: Equate curves to find intersections** $C_1 = C_2 \Rightarrow \cos(\cos x) = \sin(\cos x)$. Divide by $\cos(\cos x)$: $1 = \tan(\cos x)$

- **[M1]** Use of $\sin / \cos = \tan$.
    

**Step 4: Solve for x** Since $\cos x$ is bounded between $-1$ and $1$, the only solution to $\tan u = 1$ in this range is $u = \pi/4$. $\cos x = \frac{\pi}{4} \Rightarrow x = \alpha = \arccos\left(\frac{\pi}{4}\right) \quad (*)$

- **[A1 cso]** Must show reasoning to conclude $\alpha$.
    

#### **Part (d)**

**Step 5: Find d** Substitute $\alpha$ into $C_1$: $d = \cos(\cos \alpha) = \cos\left(\frac{\pi}{4}\right) = \frac{1}{\sqrt{2}}$

- **[M1, A1]** Correct value for $d$ in surd form.
    

**Step 6: Coordinates of T** By symmetry of cosine, the other intersection in $0 \le x < 2\pi$ is at $2\pi - \alpha$. $T\left(2\pi - \arccos\left(\frac{\pi}{4}\right), \frac{1}{\sqrt{2}}\right)$

- **[B1ft]** Coordinates correctly stated.
    

#### **Part (e)**

**Step 7: Find the gradient of C1 at S** $y' = -\sin(\cos x) \times (-\sin x) = \sin(\cos x)\sin x$

- **[M1]** Attempt chain rule derivative.
    

**Step 8: Substitute x = alpha** At $S$, $x = \alpha$ and $\cos \alpha = \pi/4$. $m = \sin(\cos \alpha)\sin \alpha = \sin\left(\frac{\pi}{4}\right)\sin \alpha$

- **[M1]** Sub of $\alpha$.
    

Since $\cos \alpha = \pi/4$, we have $\sin \alpha = \sqrt{1 - (\pi/4)^2} = \frac{\sqrt{16 - \pi^2}}{4}$. $m = \frac{1}{\sqrt{2}} \times \frac{\sqrt{16 - \pi^2}}{4} = \sqrt{\frac{16 - \pi^2}{32}}$

- **[M1, A1]** Attempt $\sin \alpha$ in terms of $\pi$; correct expression for gradient.
    

**Step 9: Form expression for beta** Since $m = \tan \beta$, we have: $\beta = \arctan\sqrt{\left(\frac{16 - \pi^2}{32}\right)} \quad (*)$

- **[A1 cso]** Given answer correctly proven.
    

#### **Part (f)**

**Step 10: Find gradient of C2 at S** For $C_2 : y' = \cos(\cos x) \times (-\sin x) = -\cos(\cos x)\sin x$.

- **[M1]** Attempt $y'$.
    

Substitute $x = \alpha$: $m' = -\cos\left(\frac{\pi}{4}\right)\sin \alpha = -\frac{1}{\sqrt{2}} \frac{\sqrt{16 - \pi^2}}{4} = -m$ So $m' = -\tan \beta$.

- **[M1, A1]** Substitutes into $y'$ and deduces $-m$ or $- \tan \beta$.
    

**Step 11: Find the angle between tangents** The tangents have gradients $\tan \beta$ and $-\tan \beta$. This means their angles of inclination to the x-axis are $\beta$ and $-\beta$. The angle between the lines is $2\beta$. We need the obtuse angle. Note that $\tan \beta = \sqrt{(16-\pi^2)/32} < 1$, meaning $\beta < \pi/4$, so $2\beta < \pi/2$ (it is acute). Thus, the obtuse angle is: $\pi - 2\beta$

- **[M1, A1]** Attempts angle between two tangents; correct obtuse angle.