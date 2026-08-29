---
topic: "Functions and Graphs"
subtopic: "Inverse functions"
---
### **Question 1**

The function $f$ is given by

$$f(x) = \ln(2x - 5), \quad x > 2.5$$

**(a)** Find $f^{-1}(x)$. **(2)**

The function $g$ has domain $x > 2$ and

$$fg(x) = \ln\left(\frac{x + 10}{x - 2}\right), \quad x > 2$$

**(b)** Find $g(x)$ and simplify your answer. **(3)**

**(Total 5 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Set up the inverse equation**

$$y = \ln(2x - 5) \Rightarrow e^y = 2x - 5$$

- **[M1]** 1st stage to $f^{-1}$ - use of $e$.

**Step 2: Solve for $x$ to find the inverse function**

$$f^{-1}(x) = \frac{e^x + 5}{2}$$

- **[A1]** Correct inverse.

#### **Part (b)**

**Step 3: Apply $f^{-1}$ to $fg(x)$**

$$g(x) = f^{-1}fg(x) = \frac{e^{\ln\left(\frac{x+10}{x-2}\right)} + 5}{2}$$

- **[M1]** Attempt to use a suitable strategy to find $g(x)$.

**Step 4: Simplify the expression**

$$g(x) = \frac{\frac{x+10}{x-2} + 5}{2} = \frac{x+10+5(x-2)}{2(x-2)} = \frac{3x}{x-2} \quad (x > 2)$$

- **[A1]** Deal with $e^{\ln}$ and obtain a correct expression.
- **[A1]** Correct simplified expression.

**Alternative Method for Part (b)**

**Step 5: Set up equation using $f(g(x))$**

$$fg(x) = \ln(2g(x) - 5) = \ln\left(\frac{x+10}{x-2}\right) \Rightarrow 2g(x) - 5 = \frac{x+10}{x-2}$$

- **[M1]** Set up equation. Allow $2g + 5$.

**Step 6: Solve for $g(x)$**

$$2g(x) = \frac{x+10}{x-2} + 5 = \frac{x+10+5(x-2)}{x-2} = \frac{6x}{x-2} \Rightarrow g(x) = \frac{3x}{x-2}$$

- **[A1]** First A1 for $2g(x) = \dots$
- **[A1]** Second A1 for correct simplified expression. A0 for $\frac{6x}{2x-4}$.

---
topic: "Trigonometric Identities and Equations"
subtopic: "Equations and identities"
---
### **Question 2**

Given that

$$3\sin^2 x + 2\sin x = 6\cos x + 9\sin x\cos x$$

and that $-90^\circ < x < 90^\circ$,

find the possible values of $\tan x$.

**(Total 6 marks)**

### **Mark Scheme 2**

**Step 1: Factorise both sides of the equation**

$$\sin x(3\sin x + 2) = 3\cos x(3\sin x + 2)$$

- **[M1]** Factorise both sides.

**Step 2: Rearrange and find the second factor**

$$0 = (3\sin x + 2)(3\cos x - \sin x)$$

- **[M1]** Finds a 2nd factor (or equivalent).

**Step 3: Solve the first factor for $\tan x$**

$$3\cos x - \sin x = 0 \Rightarrow \tan x = 3$$

- **[A1]** For $\tan x = 3$ (Dependent on at least one M).

**Step 4: Solve the second factor for $\sin x$**

$$3\sin x + 2 = 0 \Rightarrow \sin x = -\frac{2}{3}$$

- **[A1]** For $\sin x = \dots$ or an equation in $\tan x$ (e.g. $3\tan x + 2\sqrt{1+\tan^2 x} = 0$).

**Step 5: Attempt to find $\tan x$ from $\sin x$**

$$\cos^2 x = 1 - \sin^2 x = 1 - \frac{4}{9} = \frac{5}{9} \Rightarrow \tan^2 x = \frac{\sin^2 x}{\cos^2 x} = \frac{4}{5} \Rightarrow \tan x = \pm\frac{2}{\sqrt{5}}$$

- **[M1]** Attempt to find $\tan x$.

**Step 6: Determine the correct sign based on the given interval**

Since $-90^\circ < x < 90^\circ$ and $\sin x = -\frac{2}{3} < 0$, $x$ must be in the fourth quadrant, where $\tan x$ is negative.

$$\tan x = -\frac{2}{\sqrt{5}}$$

- **[A1]** Must have the negative sign.

---
topic: "Functions and Graphs"
subtopic: "y = |f(x)| and y = f(|x|)"
---
### **Question 3**

**(a)** On separate diagrams sketch the curves with the following equations. On each sketch you should mark the coordinates of the points where the curve crosses the coordinate axes.

**(i)** $y = x^2 - 2x - 3$

**(ii)** $y = x^2 - 2|x| - 3$

**(iii)** $y = x^2 - x - |x| - 3$

**(7)**

**(b)** Solve the equation

$$x^2 - x - |x| - 3 = x + |x|$$

**(4)**

**(Total 11 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Sketch (i)**

- **[B1]** Correct shape and $y$-intercept at $(0, -3)$.
- **[B1]** Crossing $x$-axis at $-1$ and $3$.

**Step 2: Sketch (ii)**

- **[B1]** Symmetrical shape with 2 minima and crossing $x$-axis at $x = \pm 3$.
- **[B1]** Correct shape at $(0, -3)$.

**Step 3: Sketch (iii)**

- **[B1]** Correct for $x > 0$ and $(3, 0)$ marked.
- **[B1]** Correct for $x \le 0$ and crossing $x$-axis at $-\sqrt{3}$. Zero gradient at $(0, -3)$.
- **[B1]** Clear "kink" at $(0, -3)$.

#### **Part (b)**

**Step 4: Solve for $x > 0$**

For $x > 0$, the equation becomes:

$$x^2 - 2x - 3 = 2x \Rightarrow x^2 - 4x - 3 = 0 \Rightarrow x = 2 + \sqrt{7}$$

- **[M1]** Method for positive root.
- **[A1]** Correct positive root (A0 for $> 1$ root).

**Step 5: Solve for $x < 0$**

For $x < 0$, the equation becomes:

$$x^2 - 2x - 3 = -2x \Rightarrow x^2 - 3 = 0 \Rightarrow x = -\sqrt{3}$$

- **[M1]** Method for negative root.
- **[A1]** Correct negative root (A0 for $> 1$ root).

---
topic: "Binomial Expansion"
subtopic: "Expanding (1 + x)^n"
---
### **Question 4**

Given that

$$(1 + x)^n = 1 + \sum_{r=1}^\infty \frac{n(n-1)\dots(n-r+1)}{1 \times 2 \times \dots \times r} x^r \quad (|x| < 1, x \in \mathbb{R}, n \in \mathbb{R})$$

**(a)** show that

$$(1 - x)^{-\frac{1}{2}} = \sum_{r=0}^\infty \binom{2r}{r} \left(\frac{x}{4}\right)^r$$

**(5)**

**(b)** show that $(9 - 4x^2)^{-\frac{1}{2}}$ can be written in the form $\sum_{r=0}^\infty \binom{2r}{r} \frac{x^{2r}}{3^q}$ and give $q$ in terms of $r$. **(3)**

**(c)** Find $\sum_{r=1}^\infty \binom{2r}{r} \times \frac{2r}{9} \times \left(\frac{x}{3}\right)^{2r-1}$ **(3)**

**(d)** Hence find the exact value of

$$\sum_{r=1}^\infty \binom{2r}{r} \times \frac{2r\sqrt{5}}{9} \times \frac{1}{5^r}$$

giving your answer as a rational number. **(2)**

**(Total 13 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Write the general term**

$$\text{rth term} = \frac{\left(-\frac{1}{2}\right)\left(-\frac{3}{2}\right)\dots\left(-\frac{1}{2}-r+1\right)}{r!} (-x)^r$$

- **[M1]** Substitute $n = -\frac{1}{2}$ and "$x$" $= -x$. Condone $-x^r$.

**Step 2: Remove negative signs**

$$= \frac{(-1)^r}{r!} \times \frac{(1.3.5\dots(2r-1))}{2^r} \times (-1)^r x^r$$

- **[M1]** Remove minus signs.

**Step 3: Simplify the numerator**

$$= \frac{1.3.5\dots(2r-1)}{r! 2^r} x^r$$

- **[M1]** Simplify numerator.

**Step 4: Insert $2^r$ and $r!$ to express as a binomial coefficient**

$$= \frac{1.2.3.4.5\dots(2r-1)(2r)}{r! 2^r \times 2^r r!} x^r = \frac{(2r)!}{r! r! 4^r} x^r = \binom{2r}{r} \left(\frac{x}{4}\right)^r$$

- **[M1]** Insert $2^r$ and $r!$.
- **[A1]** Correct proof (cso). Award S+ for comment about $r = 0$ case.

#### **Part (b)**

**Step 5: Adjust the expression to form $k(1-u)^{-1/2}$**

$$(9 - 4x^2)^{-\frac{1}{2}} = \frac{1}{3}\left(1 - \frac{4x^2}{9}\right)^{-\frac{1}{2}}$$

- **[M1]** Adjust to form $k(\dots)^{-1/2}$.

**Step 6: Apply the result from part (a)**

$$= \frac{1}{3} \sum_{r=0}^\infty \binom{2r}{r} \left(\frac{4x^2}{9 \times 4}\right)^r = \sum_{r=0}^\infty \binom{2r}{r} \frac{x^{2r}}{3 \times 9^r} = \sum_{r=0}^\infty \binom{2r}{r} \frac{x^{2r}}{3^{2r+1}}$$

- **[A1]** Correct expansion (cso).

**Step 7: Identify $q$**

$$q = 2r + 1$$

- **[A1]** Correct $q$ in terms of $r$. (M1A0A1 is possible).

#### **Part (c)**

**Step 8: Identify differentiation**

$$\frac{d}{dx}\left(\frac{x^{2r}}{3^{2r+1}}\right) = \frac{2r x^{2r-1}}{3^{2r+1}} = \frac{2r}{9} \left(\frac{x}{3}\right)^{2r-1}$$

- **[M1]** Identify differentiation.
- **[dM1]** Chain rule (allow 1 slip).

**Step 9: Differentiate the function**

$$\text{Sum} = \frac{d}{dx}(9 - 4x^2)^{-\frac{1}{2}} = -\frac{1}{2}(9 - 4x^2)^{-\frac{3}{2}} \times (-8x) = \frac{4x}{(9 - 4x^2)^{\frac{3}{2}}}$$

- **[A1]** Correct derivative. (S+ for dealing with $r = 0$).

#### **Part (d)**

**Step 10: Find a suitable substitution for $x$**

We require:

$$\frac{x^{2r-1}}{3^{2r-1}} = \frac{1}{(\sqrt{5})^{2r-1}} \Rightarrow x = \frac{3}{\sqrt{5}}$$

- **[M1]** Attempt a suitable substitution for $x$.

**Step 11: Calculate the exact value**

$$\text{Sum} = 4 \times \frac{3}{\sqrt{5}} \times \frac{1}{\left(9 - 4 \times \frac{9}{5}\right)^{\frac{3}{2}}} = \frac{12}{\sqrt{5}} \times \frac{5\sqrt{5}}{27} = \frac{20}{9}$$

- **[A1]** Correct rational number.

---
topic: "Vectors"
subtopic: "Vectors in 3D"
---
### **Question 5**

The square-based pyramid $P$ has vertices $A, B, C, D$ and $E$. The position vectors of $A, B, C$ and $D$ are $\mathbf{a}, \mathbf{b}, \mathbf{c}$ and $\mathbf{d}$ respectively where

$$\mathbf{a} = \begin{pmatrix} -2 \\ 3 \\ -1 \end{pmatrix}, \quad \mathbf{b} = \begin{pmatrix} 5 \\ 8 \\ -6 \end{pmatrix}, \quad \mathbf{c} = \begin{pmatrix} 2 \\ 5 \\ 3 \end{pmatrix}, \quad \mathbf{d} = \begin{pmatrix} 6 \\ 1 \\ 1 \end{pmatrix}$$

**(a)** Find the vectors $\vec{AB}, \vec{AC}, \vec{AD}, \vec{BC}, \vec{BD}$ and $\vec{CD}$. **(3)**

**(b)** Find

**(i)** the length of a side of the square base of $P$,

**(ii)** the cosine of the angle between one of the slanting edges of $P$ and its base,

**(iii)** the height of $P$,

**(iv)** the position vector of $E$.

**(9)**

A second pyramid, identical to $P$, is attached by its square base to the base of $P$ to form an octahedron.

**(c)** Find the position vector of the other vertex of this octahedron. **(3)**

**(Total 15 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Calculate the vectors**

$$\vec{AB} = \begin{pmatrix} 7 \\ 5 \\ -5 \end{pmatrix}, \quad \vec{AC} = \begin{pmatrix} 4 \\ 2 \\ 4 \end{pmatrix}, \quad \vec{AD} = \begin{pmatrix} 8 \\ -2 \\ 2 \end{pmatrix}$$

$$\vec{BC} = \begin{pmatrix} -3 \\ -3 \\ 9 \end{pmatrix}, \quad \vec{BD} = \begin{pmatrix} 1 \\ -7 \\ 7 \end{pmatrix}, \quad \vec{CD} = \begin{pmatrix} 4 \\ -4 \\ -2 \end{pmatrix}$$

- **[M1]** Attempt at least one and condone sign errors.
- **[A2]** All correct (-1 for each error).

#### **Part (b)**

**Step 2: Find the lengths of the vectors**

$$|\vec{AB}| = \sqrt{99}, \quad |\vec{AC}| = 6, \quad |\vec{AD}| = \sqrt{72}$$

$$|\vec{BC}| = \sqrt{99}, \quad |\vec{BD}| = \sqrt{99}, \quad |\vec{CD}| = 6$$

- **[M1]** Attempt at least 3 lengths.

**Step 3: Identify the base and its side length**

Since $\vec{AC} \cdot \vec{CD} = 4(4) + 2(-4) + 4(-2) = 0$, $\vec{AC} \perp \vec{CD}$.
The base is the square $ACDE$, so the length of a side of the square base is $6$.

- **[A1]** Length of base $= 6$. (S+ for clear reason).

**Step 4: Find the cosine of the angle between a slanting edge and the base**

We need the angle between a slanting edge (e.g., $AB$) and the base.
Let $M$ be the midpoint of $AD$ (the center of the base).

$$|\vec{AM}| = \frac{1}{2}|\vec{AD}| = \frac{3\sqrt{2}}{1}$$

$$\cos\theta = \frac{|\vec{AM}|}{|\vec{AB}|} = \frac{3\sqrt{2}}{\sqrt{99}} = \frac{\sqrt{2}}{\sqrt{11}}$$

- **[M1]** Identify a suitable pair (e.g., $\vec{AB} \cdot \vec{AD}$ or $\vec{BD} \cdot \vec{AD}$).
- **[M1]** Finding an expression for $\cos\theta$ using trigonometry or dot product.
- **[A1]** $\cos\theta = \frac{\sqrt{2}}{\sqrt{11}}$ (or equivalent).

**Step 5: Find the height of $P$**

Using Pythagoras:

$$h^2 + |\vec{AM}|^2 = |\vec{AB}|^2 \Rightarrow h^2 + 18 = 99 \Rightarrow h = 9$$

- **[M1]** Pythagoras: $h^2 + \frac{"72"}{4} = "99" \Rightarrow h = 9$. (ft their 72 and 99).
- **[A1]** $h = 9$.

**Step 6: Find the position vector of $E$**

$$\mathbf{e} = \mathbf{a} + \vec{CD} = \begin{pmatrix} -2 \\ 3 \\ -1 \end{pmatrix} + \begin{pmatrix} 4 \\ -4 \\ -2 \end{pmatrix} = \begin{pmatrix} 2 \\ -1 \\ -3 \end{pmatrix}$$

- **[M1]** Suitable expression using known vectors (ft their $\vec{CD}$).
- **[A1]** $\mathbf{e} = \begin{pmatrix} 2 \\ -1 \\ -3 \end{pmatrix}$.

#### **Part (c)**

**Step 7: Find the position vector of the other vertex**

Let $M$ be the midpoint of $AD$. The equation of the line $BM$ is:

$$\mathbf{r} = \begin{pmatrix} 5 \\ 8 \\ -6 \end{pmatrix} + t \begin{pmatrix} -3 \\ -6 \\ 6 \end{pmatrix}$$

When $t = 1$, $\mathbf{r}$ gives the position vector of $M$. Use $t = 2$ to get the other vertex:

$$\mathbf{r}_{B'} = \begin{pmatrix} -1 \\ -4 \\ 6 \end{pmatrix}$$

- **[M1]** Attempt equation of $BM$ or other line containing the other vertex, or just vector $\vec{BM}$.
- **[M1]** Full method (e.g., $\mathbf{a} + \vec{BD}$).
- **[A1]** Correct position vector $\begin{pmatrix} -1 \\ -4 \\ 6 \end{pmatrix}$.

---
topic: "Integration"
subtopic: "Definite integrals"
---
### **Question 6**

**(i)** A curve with equation $y = f(x)$ has $f(x) \ge 0$ for $x \ge a$ and

$$A = \int_a^b f(x) \, dx \quad \text{and} \quad V = \pi \int_a^b [f(x)]^2 \, dx$$

where $a$ and $b$ are constants with $b > a$.

Use integration by substitution to show that for the positive constants $r$ and $h$

$$\pi \int_{a+h}^{b+h} [r + f(x-h)]^2 \, dx = \pi r^2(b-a) + 2\pi r A + V$$

**(3)**

**(ii)**

**Figure 1** _(A sketch of the curve $C$ with asymptotes $x=m$ and $x=n$, crossing the y-axis at $(0, p)$.)_

Figure 1 shows part of the curve $C$ with equation

$$y = 4 + \frac{2}{\sqrt{3}\cos x + \sin x}$$

This curve has asymptotes $x = m$ and $x = n$ and crosses the $y$-axis at $(0, p)$.

**(a)** Find the value of $p$, the value of $m$ and the value of $n$. **(4)**

**(b)** Show that the equation of $C$ can be written in the form $y = r + f(x-h)$ and specify the function $f$ and the constants $r$ and $h$. **(4)**

The region bounded by $C$, the $x$-axis and the lines $x = \frac{\pi}{6}$ and $x = \frac{\pi}{3}$ is rotated through $2\pi$ radians about the $x$-axis.

**(c)** Find the volume of the solid formed. **(9)**

**(Total 20 marks)**

### **Mark Scheme 6**

#### **Part (i)**

**Step 1: Apply substitution $u = x - h$**

Let $u = x - h \Rightarrow dx = du$.
When $x = a+h$, $u = a$. When $x = b+h$, $u = b$.

$$I = \pi \int_a^b [r + f(u)]^2 \, du$$

- **[M1]** Select and use a suitable substitution. Change limits and function.

**Step 2: Expand the bracket**

$$I = \pi \int_a^b \left(r^2 + 2rf(u) + [f(u)]^2\right) \, du$$

- **[dM1]** Expand bracket.

**Step 3: Split and integrate**

$$= \pi r^2(b-a) + 2\pi r A + V$$

- **[A1]** Correct proof (cso). Split and integrate.

#### **Part (ii)(a)**

**Step 4: Find $p$**

At $x = 0$:

$$y = 4 + \frac{2}{\sqrt{3}}$$

So $p = 4 + \frac{2}{\sqrt{3}}$.

- **[B1]** Correct value of $p$.

**Step 5: Find asymptotes $m$ and $n$**

$$\sqrt{3}\cos x + \sin x = 0 \Rightarrow \tan x = -\sqrt{3}$$

- **[M1]** Method for finding asymptotes.

$$m = -\frac{\pi}{3}, \quad n = \frac{2\pi}{3}$$

- **[A1]** Correct $m$.
- **[A1]** Correct $n$.

#### **Part (ii)(b)**

**Step 6: Express denominator in $R\cos(x-\alpha)$ form**

$$\sqrt{3}\cos x + \sin x = 2\cos\left(x - \frac{\pi}{6}\right)$$

- **[M1]** Use of $R\cos(x+\alpha)$ or equivalent.
- **[A1]** Correct expression.

**Step 7: Write equation of $C$ in required form**

$$y = 4 + \sec\left(x - \frac{\pi}{6}\right)$$

- **[B1]** $r = 4$.
- **[A1]** $f(x) = \sec x$, $h = \frac{\pi}{6}$ (or $4 + \csc\left(x + \frac{\pi}{3}\right)$).

#### **Part (ii)(c)**

**Step 8: Identify connection to part (i)**

Using $h = \frac{\pi}{6}$, $a = 0$, $b = \frac{\pi}{6}$, $f(x) = \sec x$ and $r = 4$:

- **[M1]** Identify connection. Or give at end if fully correct.

**Step 9: Find $A$**

$$A = \int_0^{\pi/6} \sec x \, dx = [\ln(\sec x + \tan x)]_0^{\pi/6} = \ln\left(\frac{2}{\sqrt{3}} + \frac{1}{\sqrt{3}}\right) - \ln(1) = \ln\sqrt{3}$$

- **[B1]** Correct integration of $\sec x$.
- **[M1]** Use of appropriate limits.
- **[A1]** Correct value of $A$.

**Step 10: Find $V$**

$$V = \pi \int_0^{\pi/6} \sec^2 x \, dx = \pi [\tan x]_0^{\pi/6} = \frac{\pi}{\sqrt{3}}$$

- **[B1]** Correct integration of $\sec^2 x$.
- **[M1]** Use of limits.
- **[A1]** Correct value of $V$.

**Step 11: Calculate total volume**

$$\text{Volume} = 16\pi \times \frac{\pi}{6} + 8\pi A + V = \frac{8\pi^2}{3} + 8\pi\ln\sqrt{3} + \frac{\pi}{\sqrt{3}}$$

- **[M1]** Substitute into formula.
- **[A1]** Correct simplified volume (dependent on previous 3 M marks).

---
topic: "Integration"
subtopic: "Areas under curves"
---
### **Question 7**

**Figure 2** _(A diagram showing a circular tower of radius 1 centered at $T(0,1)$. A goat is attached to $O(0,0)$ by a string of length $\pi$. The curve $C$ represents the boundary of the region the goat can reach.)_

A circular tower stands in a large horizontal field of grass. A goat is attached to one end of a string and the other end of the string is attached to the fixed point $O$ at the base of the tower. Taking the point $O$ as the origin $(0, 0)$, the centre of the base of the tower is at the point $T(0, 1)$. The radius of the base of the tower is $1$. The string has length $\pi$ and you may ignore the size of the goat. The curve $C$ represents the edge of the region that the goat can reach as shown in Figure 2.

**(a)** Write down the equation of $C$ for $y < 0$. **(1)**

When the goat is at the point $G(x, y)$, with $x > 0$ and $y > 0$, as shown in Figure 2, the string lies along $OAG$ where $OA$ is an arc of the circle with angle $OTA = \theta$ radians and $AG$ is a tangent to the circle at $A$.

**(b)** With the aid of a suitable diagram show that

$$x = \sin\theta + (\pi - \theta)\cos\theta$$

$$y = 1 - \cos\theta + (\pi - \theta)\sin\theta$$

**(5)**

**(c)** By considering $\int y \frac{dx}{d\theta} \, d\theta$, show that the area between $C$, the positive $x$-axis and the positive $y$-axis can be expressed in the form

$$\int_0^\pi u\sin u \, du + \int_0^\pi u^2\sin^2 u \, du + \int_0^\pi u\sin u\cos u \, du$$

**(5)**

**(d)** Show that

$$\int_0^\pi u^2\sin^2 u \, du = \frac{\pi^3}{6} + \int_0^\pi u\sin u\cos u \, du$$

**(4)**

**(e)** Hence find the area of grass that can be reached by the goat. **(8)**

**(Total 23 marks)**

### **Mark Scheme 7**

#### **Part (a)**

**Step 1: Write down the equation for $y < 0$**

$$x^2 + y^2 = \pi^2$$

- **[B1]** Correct equation (or equivalent).

#### **Part (b)**

**Step 2: Identify lengths**

$$OA = \theta, \quad AG = \pi - \theta$$

- **[B1]** Correct $OA$.
- **[B1]** Correct $AG$.

**Step 3: Set up coordinates of $A$ and $G$**

Let $X$ be the point vertically below $G$ such that $\angle GXA = 90^\circ$.

- **[M1]** Clear method for $x$ or $y$.

**Step 4: Show $x$ and $y$**

$$x = \sin\theta + (\pi - \theta)\cos\theta$$

- **[A1]** Correct proof for $x$ (cso).

$$y = 1 - \cos\theta + (\pi - \theta)\sin\theta$$

- **[A1]** Correct proof for $y$ (cso).

#### **Part (c)**

**Step 5: Differentiate $x$ with respect to $\theta$**

$$\frac{dx}{d\theta} = \cos\theta - \cos\theta - (\pi - \theta)\sin\theta = -(\pi - \theta)\sin\theta$$

- **[M1]** For $\frac{dx}{d\theta}$ (allow 1 slip).

**Step 6: Set up the area integral**

$$\text{Area} = \int_0^\pi [1 - \cos\theta + (\pi - \theta)\sin\theta][(\pi - \theta)\sin\theta] \, d\theta$$

- **[A1]** Correct integral expression (ignore limits).

**Step 7: Apply substitution $u = \pi - \theta$**

Let $u = \pi - \theta \Rightarrow d\theta = -du$.
When $\theta = 0$, $u = \pi$. When $\theta = \pi$, $u = 0$.
Also, $\cos(\pi - u) = -\cos u$ and $\sin(\pi - u) = \sin u$.

$$\text{Area} = -\int_\pi^0 [1 + \cos u + u\sin u][u\sin u] \, du = \int_0^\pi \left(u\sin u + u^2\sin^2 u + u\sin u\cos u\right) \, du$$

- **[M1]** Suitable substitution.
- **[M1]** Simplify trigonometric terms.
- **[A1]** Correct proof (cso). Limits correctly derived.

#### **Part (d)**

**Step 8: Use double angle formula**

$$\int_0^\pi u^2\sin^2 u \, du = \int_0^\pi \frac{u^2}{2} \, du - \int_0^\pi \frac{u^2\cos 2u}{2} \, du$$

- **[M1]** Use of $\sin^2 x$ in terms of $\cos 2x$.

**Step 9: Integrate first term and apply integration by parts to second term**

$$\int_0^\pi \frac{u^2}{2} \, du = \frac{\pi^3}{6}$$

- **[A1]** For $\frac{\pi^3}{6}$ (cso).

$$\int_0^\pi \frac{u^2\cos 2u}{2} \, du = \left[\frac{u^2\sin 2u}{4}\right]_0^\pi - \int_0^\pi \frac{u\sin 2u}{2} \, du$$

- **[M1]** Integration by parts.

**Step 10: Simplify to the required form**

$$\int_0^\pi u^2\sin^2 u \, du = \frac{\pi^3}{6} + \int_0^\pi u\sin u\cos u \, du$$

- **[A1]** Correct proof (cso). Show $[\dots] = 0$ and simplify.

#### **Part (e)**

**Step 11: Evaluate $\int_0^\pi u\sin u \, du$**

$$\int_0^\pi u\sin u \, du = [-u\cos u]_0^\pi + \int_0^\pi \cos u \, du = \pi$$

- **[M1]** Use of parts to integrate (ignore limits for M).
- **[A1]** Correct value $\pi$.

**Step 12: Evaluate $\int_0^\pi u\sin u\cos u \, du$**

$$\int_0^\pi u\sin u\cos u \, du = \int_0^\pi \frac{u\sin 2u}{2} \, du = \left[-\frac{u\cos 2u}{4}\right]_0^\pi + \int_0^\pi \frac{\cos 2u}{4} \, du = -\frac{\pi}{4}$$

- **[M1]** Use of parts to integrate.
- **[A1]** Correct value $-\frac{\pi}{4}$.

**Step 13: Calculate the area between the curve and positive axes**

$$\text{Area} = \pi + \frac{\pi^3}{6} + 2\left(-\frac{\pi}{4}\right) = \frac{\pi^3}{6} + \frac{\pi}{2}$$

- **[A1]** Correct quadrant area.

**Step 14: Calculate total reachable area**

$$\text{Total Area} = 2\left[\frac{\pi^3}{6} + \frac{\pi}{2}\right] + \text{semicircle} - \text{tower} = \frac{\pi^3}{3} + \pi + \frac{\pi^3}{2} - \pi = \frac{5\pi^3}{6}$$

- **[M1]** Suitable strategy.
- **[B1]** Semicircle area $= \frac{\pi^3}{2}$ or tower's base area $= \pi$.
- **[A1]** Reachable area $= \frac{5\pi^3}{6}$.
