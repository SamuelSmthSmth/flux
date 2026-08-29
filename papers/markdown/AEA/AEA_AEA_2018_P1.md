---
topic: "Binomial Expansion"
subtopic: "Expanding (1 + x)^n"
---
### **Question 1**

**(a)** Show that $\sqrt{\frac{1+x}{1-x}}$ can be written in the form $\frac{1+x}{\sqrt{1-x^2}}$ for $|x| < 1$ **(1)**

**(b)** Hence, or otherwise, find the expansion, in ascending powers of $x$ up to and including the term in $x^5$, of $\sqrt{\frac{1+x}{1-x}}$ **(4)**

**(Total 5 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Rationalise the numerator**

$$\sqrt{\frac{1+x}{1-x}} = \frac{\sqrt{1+x}\sqrt{1+x}}{\sqrt{1-x}\sqrt{1+x}} = \frac{1+x}{\sqrt{(1-x)(1+x)}} = \frac{1+x}{\sqrt{1-x^2}}$$

- **[B1]** Complete and clear algebraic proof showing multiplication of numerator and denominator under the square root by $1+x$.

#### **Part (b)**

**Step 2: Expand $(1-x^2)^{-\frac{1}{2}}$ using the binomial series**

$$(1-x^2)^{-\frac{1}{2}} = 1 + \left(-\frac{1}{2}\right)(-x^2) + \frac{\left(-\frac{1}{2}\right)\left(-\frac{3}{2}\right)}{2!}(-x^2)^2 + \dots$$

$$= 1 + \frac{1}{2}x^2 + \frac{3}{8}x^4 + \dots$$

- **[M1]** Applies the binomial expansion to $(1-x^2)^{-\frac{1}{2}}$ up to the term in $x^4$ with at least two correct non-zero terms.
- **[A1]** Correct expanded form $1 + \frac{1}{2}x^2 + \frac{3}{8}x^4$.

**Step 3: Multiply by $(1+x)$**

$$(1+x)\left(1 + \frac{1}{2}x^2 + \frac{3}{8}x^4\right) = 1 + \frac{1}{2}x^2 + \frac{3}{8}x^4 + x + \frac{1}{2}x^3 + \frac{3}{8}x^5$$

$$= 1 + x + \frac{1}{2}x^2 + \frac{1}{2}x^3 + \frac{3}{8}x^4 + \frac{3}{8}x^5$$

- **[M1]** Multiplies their expansion by $(1+x)$ to collect terms up to $x^5$.
- **[A1]** Fully correct expanded polynomial $1 + x + \frac{1}{2}x^2 + \frac{1}{2}x^3 + \frac{3}{8}x^4 + \frac{3}{8}x^5$.

---

---
topic: "Trigonometric Identities and Equations"
subtopic: "Harder trigonometric equations"
---
### **Question 2**

Solve, for $0 \leqslant x \leqslant 360^\circ$

$$\sin 47^\circ \cos^3 x + \cos 47^\circ \sin x \cos^2 x = \frac{1}{2} \cos^2 x$$

**(7)**

**(Total 7 marks)**

### **Mark Scheme 2**

**Step 1: Rearrange and factorise $\cos^2 x$**

$$\sin 47^\circ \cos^3 x + \cos 47^\circ \sin x \cos^2 x - \frac{1}{2} \cos^2 x = 0$$

$$\cos^2 x \left( \sin 47^\circ \cos x + \cos 47^\circ \sin x - \frac{1}{2} \right) = 0$$

- **[M1]** Collects all terms on one side and factorises out $\cos^2 x$ (or equates $\cos x = 0$ as a set of solutions).
- **[A1]** Correct factorisation yielding $\cos^2 x = 0$ or $\sin 47^\circ \cos x + \cos 47^\circ \sin x = \frac{1}{2}$.

**Step 2: Solve $\cos^2 x = 0$**

$$\cos x = 0 \implies x = 90^\circ, 270^\circ$$

- **[B1]** Identifies $x = 90^\circ$ and $x = 270^\circ$ as solutions.

**Step 3: Apply the compound angle identity**

$$\sin 47^\circ \cos x + \cos 47^\circ \sin x = \sin(x + 47^\circ)$$

$$\sin(x + 47^\circ) = \frac{1}{2}$$

- **[M1]** Recognises and applies the compound angle formula $\sin(A+B) = \sin A \cos B + \cos A \sin B$.
- **[A1]** Obtains the simplified trigonometric equation $\sin(x + 47^\circ) = \frac{1}{2}$.

**Step 4: Solve $\sin(x + 47^\circ) = \frac{1}{2}$ in the required interval**

For $0^\circ \leqslant x \leqslant 360^\circ$, $47^\circ \leqslant x + 47^\circ \leqslant 407^\circ$:

$$x + 47^\circ = 150^\circ \implies x = 103^\circ$$

$$x + 47^\circ = 390^\circ \implies x = 343^\circ$$

- **[M1]** Finds principal/secondary values for $x + 47^\circ$ and subtracts $47^\circ$ to find values of $x$.
- **[A1]** Gives both $x = 103^\circ$ and $x = 343^\circ$ (with no extra incorrect solutions in the range).

---

---
topic: "Vectors"
subtopic: "Solving geometric problems"
---
### **Question 3**

The lines $L_1$ and $L_2$ have the equations

$$L_1 : \mathbf{r} = \begin{pmatrix} 1 \\ 0 \\ 9 \end{pmatrix} + s \begin{pmatrix} 2 \\ p \\ 6 \end{pmatrix} \quad \text{and} \quad L_2 : \mathbf{r} = \begin{pmatrix} -15 \\ 12 \\ -9 \end{pmatrix} + t \begin{pmatrix} 4 \\ -5 \\ 2 \end{pmatrix}$$

where $p$ is a constant.

The acute angle between $L_1$ and $L_2$ is $\theta$ where $\cos \theta = \frac{\sqrt{5}}{3}$

**(a)** Find the value of $p$. **(5)**

The line $L_3$ has equation $\mathbf{r} = \begin{pmatrix} -15 \\ 12 \\ -9 \end{pmatrix} + u \begin{pmatrix} 8 \\ -6 \\ -5 \end{pmatrix}$ and the lines $L_3$ and $L_2$ intersect at the point $A$.

The point $B$ on $L_2$ has position vector $\begin{pmatrix} 5 \\ -13 \\ 1 \end{pmatrix}$ and point $C$ lies on $L_3$ such that $ABDC$ is a rhombus.

**(b)** Find the two possible position vectors of $D$. **(5)**

**(Total 10 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Calculate the scalar product of direction vectors**

Let $\mathbf{d}_1 = \begin{pmatrix} 2 \\ p \\ 6 \end{pmatrix}$ and $\mathbf{d}_2 = \begin{pmatrix} 4 \\ -5 \\ 2 \end{pmatrix}$.

$$\mathbf{d}_1 \cdot \mathbf{d}_2 = 2(4) + p(-5) + 6(2) = 8 - 5p + 12 = 20 - 5p$$

- **[M1]** Calculates the scalar product $\mathbf{d}_1 \cdot \mathbf{d}_2$ in terms of $p$.

**Step 2: Calculate the magnitudes of the direction vectors**

$$|\mathbf{d}_1| = \sqrt{2^2 + p^2 + 6^2} = \sqrt{40 + p^2}$$

$$|\mathbf{d}_2| = \sqrt{4^2 + (-5)^2 + 2^2} = \sqrt{16 + 25 + 4} = \sqrt{45} = 3\sqrt{5}$$

- **[M1]** Calculates the magnitude of both direction vectors (at least $|\mathbf{d}_2| = 3\sqrt{5}$ correct).

**Step 3: Set up the scalar product formula for $\cos \theta$**

$$\cos \theta = \frac{|\mathbf{d}_1 \cdot \mathbf{d}_2|}{|\mathbf{d}_1| |\mathbf{d}_2|} \implies \frac{\sqrt{5}}{3} = \frac{|20 - 5p|}{3\sqrt{5}\sqrt{40+p^2}}$$

- **[M1]** Equates the cosine formula to $\frac{\sqrt{5}}{3}$.

**Step 4: Solve for $p$**

$$\frac{\sqrt{5}}{3} = \frac{5|4 - p|}{3\sqrt{5}\sqrt{40+p^2}} \implies \sqrt{5} = \frac{5|4-p|}{\sqrt{5}\sqrt{40+p^2}} \implies |4 - p| = \sqrt{40+p^2}$$

$$(4 - p)^2 = 40 + p^2 \implies 16 - 8p + p^2 = 40 + p^2 \implies -8p = 24 \implies p = -3$$

- **[M1]** Squares both sides to eliminate the square root and absolute value, then solves the linear equation in $p$.
- **[A1]** $p = -3$.

#### **Part (b)**

**Step 5: Find the intersection point $A$ and vector $\vec{AB}$**

$L_2$ and $L_3$ both pass through $\begin{pmatrix} -15 \\ 12 \\ -9 \end{pmatrix}$ (at $t=0$ and $u=0$), so $\mathbf{a} = \begin{pmatrix} -15 \\ 12 \\ -9 \end{pmatrix}$.

Position vector of $B$ is $\mathbf{b} = \begin{pmatrix} 5 \\ -13 \\ 1 \end{pmatrix}$.

$$\vec{AB} = \mathbf{b} - \mathbf{a} = \begin{pmatrix} 5 - (-15) \\ -13 - 12 \\ 1 - (-9) \end{pmatrix} = \begin{pmatrix} 20 \\ -25 \\ 10 \end{pmatrix}$$

$$|\vec{AB}| = \sqrt{20^2 + (-25)^2 + 10^2} = \sqrt{400 + 625 + 100} = \sqrt{1125} = 15\sqrt{5}$$

- **[M1]** Determines position vector of intersection point $A$ and calculates $\vec{AB}$ and its magnitude.

**Step 6: Find vector $\vec{AC}$ for the rhombus**

Since $ABDC$ is a rhombus, $AC = AB = 15\sqrt{5}$.

$C$ lies on $L_3$, so $\vec{AC} = u \begin{pmatrix} 8 \\ -6 \\ -5 \end{pmatrix}$.

$$\left|\begin{pmatrix} 8 \\ -6 \\ -5 \end{pmatrix}\right| = \sqrt{64 + 36 + 25} = \sqrt{125} = 5\sqrt{5}$$

$$|\vec{AC}| = |u| \cdot 5\sqrt{5} = 15\sqrt{5} \implies |u| = 3 \implies u = 3 \text{ or } u = -3$$

- **[M1]** Uses the equal side length property of a rhombus to find the parameter $u = \pm 3$.
- **[A1]** Correct values of $u = 3$ and $u = -3$.

**Step 7: Calculate position vectors of $D$**

Since $ABDC$ is a parallelogram/rhombus, $\vec{AD} = \vec{AB} + \vec{AC} \implies \mathbf{d} = \mathbf{b} + \vec{AC}$.

When $u = 3$: $\vec{AC} = \begin{pmatrix} 24 \\ -18 \\ -15 \end{pmatrix} \implies \mathbf{d}_1 = \begin{pmatrix} 5 \\ -13 \\ 1 \end{pmatrix} + \begin{pmatrix} 24 \\ -18 \\ -15 \end{pmatrix} = \begin{pmatrix} 29 \\ -31 \\ -14 \end{pmatrix}$

When $u = -3$: $\vec{AC} = \begin{pmatrix} -24 \\ 18 \\ 15 \end{pmatrix} \implies \mathbf{d}_2 = \begin{pmatrix} 5 \\ -13 \\ 1 \end{pmatrix} + \begin{pmatrix} -24 \\ 18 \\ 15 \end{pmatrix} = \begin{pmatrix} -19 \\ 5 \\ 16 \end{pmatrix}$

- **[M1]** Adds $\vec{AC}$ to $\mathbf{b}$ for both values of $u$.
- **[A1]** Both position vectors $\begin{pmatrix} 29 \\ -31 \\ -14 \end{pmatrix}$ and $\begin{pmatrix} -19 \\ 5 \\ 16 \end{pmatrix}$ correct.

---

---
topic: "Functions and Graphs"
subtopic: "Inverse functions"
---
### **Question 4**

A curve $C$ has equation $y = f(x)$ where $x \in \mathbb{R}$ and $f$ is a one-one function.

**(a)** Describe a single transformation that transforms $C$ to the curve with equation $y = -f(-x)$. **(1)**

The curve $C$ is reflected in the line with equation $y = -x$ to give the curve $V$.
The equation of $V$ is $y = g(x)$.

**(b)** Explain why $g^{-1}(x) = -f(-x)$. **(1)**

**Figure 1** _(A sketch of the curve $C$ with equation $y = f(x)$, showing asymptotes at $x = p$ and $y = q$, crossing the $x$-axis at $A$ and the $y$-axis at $B$)_.

```tikz
\begin{tikzpicture}[scale=0.85]
\draw[->] (-3.5,0) -- (4.5,0) node[below] {$x$};
\draw[->] (0,-4.5) -- (0,5.5) node[left] {$y$};
\node[below left] at (0,0) {$O$};

\draw[dashed] (2,-4.5) -- (2,5.5) node[below right] {$x = p$};
\draw[dashed] (-3.5,3) -- (4.5,3) node[below right] {$y = q$};

\draw[domain=-3.5:1.7, smooth, thick] plot (\x, {(3*\x - 3)/(\x - 2)});
\draw[domain=2.3:4.5, smooth, thick] plot (\x, {(3*\x - 3)/(\x - 2)});

\fill (1,0) circle (1.8pt) node[below right] {$A$};
\fill (0,1.5) circle (1.8pt) node[left] {$B$};
\end{tikzpicture}
```

Figure 1 shows a sketch of the curve $C$ with equation $y = f(x)$ where

$$f(x) = \frac{3(x - 1)}{x - 2}, \quad x \in \mathbb{R}, x \neq 2$$

The curve has asymptotes with equations $x = p$ and $y = q$ and $C$ crosses the $x$-axis at the point $A$ and the $y$-axis at the point $B$.

**(c)** Write down the value of $p$ and the value of $q$. **(1)**

**(d)** Write down the coordinates of the point $A$ and the coordinates of the point $B$. **(1)**

Given the definition of $g(x)$ in part (b),

**(e)** find the function $g$. **(4)**

**(f)** Solve $g^{-1}f(x) = x$ **(5)**

**(Total 13 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Identify transformation**

- **[B1]** Rotation of $180^\circ$ (or $\pi$ radians) about the origin $(0,0)$.

#### **Part (b)**

**Step 2: Explain reflection in $y = -x$**

Reflection in the line $y = -x$ maps $(x, y) \to (-y, -x)$.
Applying this to $y = f(x)$ gives $-x = f(-y) \implies -y = f^{-1}(-x) \implies y = -f^{-1}(-x)$.
Hence $g(x) = -f^{-1}(-x)$, which implies $g^{-1}(x) = -f(-x)$.

- **[B1]** Clear explanation linking reflection in $y = -x$ to coordinate transformation $(x, y) \to (-y, -x)$ leading to $g^{-1}(x) = -f(-x)$.

#### **Part (c)**

**Step 3: State asymptote equations**

- **[B1]** $p = 2$ and $q = 3$.

#### **Part (d)**

**Step 4: State intercept coordinates**

$x$-intercept $A$: $3(x-1) = 0 \implies x = 1 \implies A = (1, 0)$

$y$-intercept $B$: $f(0) = \frac{-3}{-2} = \frac{3}{2} \implies B = \left(0, \frac{3}{2}\right)$

- **[B1]** $A = (1, 0)$ and $B = \left(0, \frac{3}{2}\right)$.

#### **Part (e)**

**Step 5: Find $g^{-1}(x)$**

$$g^{-1}(x) = -f(-x) = -\frac{3(-x - 1)}{-x - 2} = -\frac{3x+3}{x+2}$$

- **[M1]** Substitutes $-x$ into $-f(x)$ to get $g^{-1}(x) = -\frac{3x+3}{x+2}$.

**Step 6: Invert $g^{-1}(x)$ to find $g(x)$**

Let $y = -\frac{3x+3}{x+2}$:

$$y(x+2) = -3x - 3 \implies yx + 2y = -3x - 3$$

$$yx + 3x = -2y - 3 \implies x(y+3) = -(2y+3)$$

$$x = -\frac{2y+3}{y+3} \implies g(x) = -\frac{2x+3}{x+3}$$

- **[M1]** Sets $y = g^{-1}(x)$ and rearranges to make $x$ the subject.
- **[A1]** Correct algebraic step isolating $x$.
- **[A1]** $g(x) = -\frac{2x+3}{x+3}$ (or equivalent single fraction $\frac{-2x-3}{x+3}$).

#### **Part (f)**

**Step 7: Equate $f(x)$ and $g(x)$**

$$g^{-1}f(x) = x \iff f(x) = g(x)$$

$$\frac{3(x-1)}{x-2} = -\frac{2x+3}{x+3}$$

- **[M1]** Applies $g$ to both sides to write $f(x) = g(x)$ (or uses $g^{-1}(f(x)) = x$).
- **[M1]** Equates $f(x) = \frac{3x-3}{x-2}$ and $g(x) = \frac{-2x-3}{x+3}$.

**Step 8: Form and solve quadratic equation**

$$(3x - 3)(x + 3) = (-2x - 3)(x - 2)$$

$$3x^2 + 6x - 9 = -2x^2 + x + 6$$

$$5x^2 + 5x - 15 = 0 \implies x^2 + x - 3 = 0$$

- **[M1]** Cross-multiplies to eliminate denominators and collects terms into a quadratic.
- **[A1]** Correct quadratic equation $x^2 + x - 3 = 0$.

**Step 9: Solve using quadratic formula**

$$x = \frac{-1 \pm \sqrt{1^2 - 4(1)(-3)}}{2} = \frac{-1 \pm \sqrt{13}}{2}$$

- **[A1]** Correct exact solutions $x = \frac{-1 \pm \sqrt{13}}{2}$.

---

---
topic: "Differentiation"
subtopic: "Using second derivatives"
---
### **Question 5**

**Figure 2** _(Part of the curve $T$ with equation $y = \cos 2x$ and the circle $C_1$ that touches $T$ at $\left(\frac{\pi}{4}, 0\right)$ and $\left(\frac{3\pi}{4}, 0\right)$)_.

```tikz
\begin{tikzpicture}[scale=1.2]
\draw[->] (-0.5,0) -- (3.5,0) node[below] {$x$};
\draw[->] (0,-1.5) -- (0,1.5) node[left] {$y$};
\node[below left] at (0,0) {$O$};

\draw[domain=0:3.14, smooth, thick] plot (\x, {cos(2*\x r)}) node[right] {$T$};

\coordinate (P1) at ({pi/4},0);
\coordinate (P2) at ({3*pi/4},0);

\draw[thick] ({pi/2},{pi/8}) circle ({sqrt(5)*pi/8});
\node[above] at ({pi/2},{pi/8} + {sqrt(5)*pi/8}) {$C_1$};
\end{tikzpicture}
```

Figure 2 shows part of the curve $T$ with equation $y = \cos 2x$ and the circle $C_1$ that touches $T$ at $\left(\frac{\pi}{4}, 0\right)$ and $\left(\frac{3\pi}{4}, 0\right)$.

**(a)** Find the radius of $C_1$ **(5)**

**Figure 3** _(A sketch of part of $T$ and part of a circle $C_2$ that touches $T$ at the point $P\left(\frac{\pi}{2}, -1\right)$)_.

```tikz
\begin{tikzpicture}[scale=1.2]
\draw[->] (-0.5,0) -- (3.5,0) node[below] {$x$};
\draw[->] (0,-1.5) -- (0,1.5) node[left] {$y$};
\node[below left] at (0,0) {$O$};

\draw[domain=0.5:2.6, smooth, thick] plot (\x, {cos(2*\x r)}) node[right] {$T$};

\draw[thick] ({pi/2}, {-1 + 0.6}) circle (0.6);
\node[below right] at ({pi/2}+0.6, -0.4) {$C_2$};
\fill ({pi/2},-1) circle (1.5pt) node[below] {$P$};
\end{tikzpicture}
```

Figure 3 shows a sketch of part of $T$ and part of a circle $C_2$ that touches $T$ at the point $P$ with coordinates $\left(\frac{\pi}{2}, -1\right)$. For values of $x$ close to $\frac{\pi}{2}$ the curve $T$ lies inside $C_2$ as shown in Figure 3.

**(b)** Without doing any calculation, explain why the value of $\frac{d^2 y}{dx^2}$ for $C_2$ at $P$ is less than the value of $\frac{d^2 y}{dx^2}$ for $T$ at $P$. **(1)**

The radius of $C_2$ is $r$.

**(c)** Use the result from part (b) to find a value of $k$ such that $r > k$. **(6)**

Given that $C_2$ cuts $T$ at the point $(0, 1)$,

**(d)** find the value of $r$. **(2)**

**(Total 14 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Differentiate $y = \cos 2x$ to find the normal gradient**

$$\frac{dy}{dx} = -2\sin 2x$$

At $x = \frac{\pi}{4}$: $\frac{dy}{dx} = -2\sin\left(\frac{\pi}{2}\right) = -2$

Gradient of normal line at $\left(\frac{\pi}{4}, 0\right)$ is $\frac{1}{2}$.

- **[M1]** Differentiates $\cos 2x$ to get $k\sin 2x$.
- **[A1]** Obtains normal gradient of $\frac{1}{2}$ at $x = \frac{\pi}{4}$.

**Step 2: Find the center of circle $C_1$**

Equation of normal line at $\left(\frac{\pi}{4}, 0\right)$:

$$y - 0 = \frac{1}{2}\left(x - \frac{\pi}{4}\right)$$

By symmetry, the center of $C_1$ lies on the line $x = \frac{\pi}{2}$.

$$y_c = \frac{1}{2}\left(\frac{\pi}{2} - \frac{\pi}{4}\right) = \frac{\pi}{8}$$

Center of $C_1$ is $\left(\frac{\pi}{2}, \frac{\pi}{8}\right)$.

- **[M1]** Uses symmetry $x = \frac{\pi}{2}$ together with normal line equation to find the $y$-coordinate of the center.
- **[A1]** Center $\left(\frac{\pi}{2}, \frac{\pi}{8}\right)$.

**Step 3: Calculate the radius of $C_1$**

$$\text{Radius} = \sqrt{\left(\frac{\pi}{2} - \frac{\pi}{4}\right)^2 + \left(\frac{\pi}{8} - 0\right)^2} = \sqrt{\left(\frac{\pi}{4}\right)^2 + \left(\frac{\pi}{8}\right)^2} = \sqrt{\frac{\pi^2}{16} + \frac{\pi^2}{64}} = \frac{\sqrt{5}\pi}{8}$$

- **[A1]** Radius is $\frac{\sqrt{5}\pi}{8}$.

#### **Part (b)**

**Step 4: Explain second derivative comparison**

- **[B1]** Near $P$, curve $T$ lies inside $C_2$, meaning $T$ curves/bends upwards more sharply than $C_2$, so the rate of change of gradient (curvature $\frac{d^2 y}{dx^2}$) for $C_2$ is less than that for $T$.

#### **Part (c)**

**Step 5: Find $\frac{d^2 y}{dx^2}$ for $T$ at $P$**

$$\frac{dy}{dx} = -2\sin 2x \implies \frac{d^2 y}{dx^2} = -4\cos 2x$$

At $P\left(\frac{\pi}{2}, -1\right)$: $\frac{d^2 y}{dx^2} = -4\cos\pi = 4$.

- **[M1]** Finds $\frac{d^2 y}{dx^2} = -4\cos 2x$ for $T$.
- **[A1]** Evaluates second derivative of $T$ at $x = \frac{\pi}{2}$ to get $4$.

**Step 6: Find $\frac{d^2 y}{dx^2}$ for circle $C_2$ at $P$**

$C_2$ has center $\left(\frac{\pi}{2}, -1+r\right)$ and radius $r$. Equation of $C_2$:

$$\left(x - \frac{\pi}{2}\right)^2 + (y + 1 - r)^2 = r^2$$

Differentiating implicitly with respect to $x$:

$$2\left(x - \frac{\pi}{2}\right) + 2(y + 1 - r)\frac{dy}{dx} = 0$$

Differentiating again at $P\left(\frac{\pi}{2}, -1\right)$, where $x = \frac{\pi}{2}, y = -1 \implies \frac{dy}{dx} = 0$:

$$2 + 2(-r)\frac{d^2 y}{dx^2} = 0 \implies \frac{d^2 y}{dx^2} = \frac{1}{r}$$

- **[M1]** Differentiates circle equation implicitly twice.
- **[A1]** Obtains $\frac{d^2 y}{dx^2} = \frac{1}{r}$ at $P$ for $C_2$.

**Step 7: Apply the result from part (b)**

$$\frac{1}{r} < 4 \implies r > \frac{1}{4}$$

Thus $k = \frac{1}{4}$.

- **[M1]** Sets $\frac{1}{r} < 4$.
- **[A1]** Obtains $r > \frac{1}{4}$, so $k = \frac{1}{4}$.

#### **Part (d)**

**Step 8: Use point $(0,1)$ on $C_2$**

$C_2$ passes through $(0,1)$ and has center $\left(\frac{\pi}{2}, -1+r\right)$ and radius $r$:

$$\left(0 - \frac{\pi}{2}\right)^2 + (1 - (-1+r))^2 = r^2$$

$$\frac{\pi^2}{4} + (2 - r)^2 = r^2 \implies \frac{\pi^2}{4} + 4 - 4r + r^2 = r^2$$

$$4r = 4 + \frac{\pi^2}{4} \implies r = 1 + \frac{\pi^2}{16}$$

- **[M1]** Substitutes $(0,1)$ into equation of $C_2$.
- **[A1]** $r = 1 + \frac{\pi^2}{16}$ (or $\frac{16+\pi^2}{16}$).

---

---
topic: "Integration"
subtopic: "Reverse chain rule"
---
### **Question 6**

**(a)** Use the substitution $u = \sqrt{t}$ to show that

$$\int_1^x \frac{\ln t}{\sqrt{t}} \, dt = 4 - 4\sqrt{x} + 2\sqrt{x}\ln x \quad x \geqslant 1$$

**(5)**

**(b)** The function $g$ is such that

$$\int_1^x g(t) \, dt = x - \sqrt{x}\ln x - 1 \quad x \geqslant 1$$

**(i)** Use differentiation to find the function $g$.

**(ii)** Evaluate $\int_4^{16} g(t) \, dt$ and simplify your answer.

**(5)**

**(c)** Find the value of $x$ (where $x > 1$) that gives the maximum value of

$$\int_x^{x+1} \frac{\ln t}{2^t} \, dt$$

**(7)**

**(Total 17 marks)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Apply substitution $u = \sqrt{t}$**

$$t = u^2 \implies dt = 2u \, du$$

Limits: when $t = 1 \implies u = 1$; when $t = x \implies u = \sqrt{x}$.

$$\ln t = \ln(u^2) = 2\ln u$$

- **[M1]** Calculates $dt = 2u \, du$ and transforms limits correctly.

**Step 2: Transform integral into terms of $u$**

$$\int_1^x \frac{\ln t}{\sqrt{t}} \, dt = \int_1^{\sqrt{x}} \frac{2\ln u}{u} (2u \, du) = 4 \int_1^{\sqrt{x}} \ln u \, du$$

- **[A1]** Correct transformed integral $4 \int_1^{\sqrt{x}} \ln u \, du$.

**Step 3: Integrate $\ln u$ by parts**

$$\int \ln u \, du = u \ln u - \int u \cdot \frac{1}{u} \, du = u \ln u - u$$

- **[M1]** Uses integration by parts on $\int \ln u \, du$.

**Step 4: Evaluate limits and simplify**

$$4 [u \ln u - u]_1^{\sqrt{x}} = 4 \left( \sqrt{x}\ln\sqrt{x} - \sqrt{x} - (0 - 1) \right)$$

$$= 4 \left( \sqrt{x} \cdot \frac{1}{2}\ln x - \sqrt{x} + 1 \right) = 2\sqrt{x}\ln x - 4\sqrt{x} + 4 = 4 - 4\sqrt{x} + 2\sqrt{x}\ln x$$

- **[M1]** Substitutes upper and lower limits into integrated expression.
- **[A1]** Fully correct algebraic proof leading to $4 - 4\sqrt{x} + 2\sqrt{x}\ln x$.

#### **Part (b)**

**Step 5: Differentiate to find $g(x)$**

By the Fundamental Theorem of Calculus, $g(x) = \frac{d}{dx}\left(x - \sqrt{x}\ln x - 1\right)$.

$$\frac{d}{dx}(x - 1) = 1$$

$$\frac{d}{dx}(\sqrt{x}\ln x) = \frac{1}{2\sqrt{x}}\ln x + \sqrt{x}\cdot\frac{1}{x} = \frac{\ln x}{2\sqrt{x}} + \frac{1}{\sqrt{x}}$$

$$g(x) = 1 - \frac{\ln x + 2}{2\sqrt{x}}$$

- **[M1]** Differentiates $x - \sqrt{x}\ln x - 1$ using product rule on $\sqrt{x}\ln x$.
- **[A1]** $g(x) = 1 - \frac{\ln x + 2}{2\sqrt{x}}$ (or equivalent).

**Step 6: Evaluate $\int_4^{16} g(t) \, dt$**

Let $F(x) = x - \sqrt{x}\ln x - 1$. Then $\int_4^{16} g(t) \, dt = F(16) - F(4)$.

$$F(16) = 16 - \sqrt{16}\ln 16 - 1 = 15 - 4(4\ln 2) = 15 - 16\ln 2$$

$$F(4) = 4 - \sqrt{4}\ln 4 - 1 = 3 - 2(2\ln 2) = 3 - 4\ln 2$$

$$\int_4^{16} g(t) \, dt = (15 - 16\ln 2) - (3 - 4\ln 2) = 12 - 12\ln 2 = 12(1 - \ln 2)$$

- **[M1]** Uses $\int_4^{16} g(t) \, dt = F(16) - F(4)$.
- **[M1]** Applies log laws ($\ln 16 = 4\ln 2$, $\ln 4 = 2\ln 2$).
- **[A1]** $12(1 - \ln 2)$ or $12 - 12\ln 2$.

#### **Part (c)**

**Step 7: Set up the derivative of the integral**

Let $I(x) = \int_x^{x+1} \frac{\ln t}{2^t} \, dt$. By the Fundamental Theorem of Calculus:

$$\frac{dI}{dx} = \frac{\ln(x+1)}{2^{x+1}} - \frac{\ln x}{2^x}$$

- **[M1]** Differentiates the integral with respect to $x$ using Leibniz rule / FTC.
- **[A1]** Correct derivative $\frac{\ln(x+1)}{2^{x+1}} - \frac{\ln x}{2^x}$.

**Step 8: Set derivative to zero for maximum**

$$\frac{\ln(x+1)}{2^{x+1}} - \frac{\ln x}{2^x} = 0 \implies \frac{\ln(x+1)}{2^{x+1}} = \frac{\ln x}{2^x}$$

- **[M1]** Equates derivative to zero.

**Step 9: Simplify indices and log expressions**

$$\frac{\ln(x+1)}{2 \cdot 2^x} = \frac{\ln x}{2^x} \implies \ln(x+1) = 2\ln x$$

- **[M1]** Cancels $2^x$ to obtain $\ln(x+1) = 2\ln x$.

**Step 10: Form quadratic equation and solve**

$$\ln(x+1) = \ln(x^2) \implies x + 1 = x^2 \implies x^2 - x - 1 = 0$$

$$x = \frac{1 + \sqrt{5}}{2} \quad (\text{since } x > 1)$$

- **[M1]** Converts log equation into quadratic $x^2 - x - 1 = 0$.
- **[A1]** Correct quadratic $x^2 - x - 1 = 0$.
- **[A1]** $x = \frac{1 + \sqrt{5}}{2}$ (rejecting $\frac{1-\sqrt{5}}{2}$ as $x > 1$).

---

---
topic: "Trigonometry and Modelling"
subtopic: "Modelling with trigonometric functions"
---
### **Question 7**

**Figure 4** _(A polygon $S(\theta)$ with 5 vertices $A, B, C, D, E$, where $AB = BC = 5\text{ cm}$, $CD = EA = 3\text{ cm}$, $DE = 7\text{ cm}$, and $\angle BAE = \angle BCD = \theta$ radians)_.

```tikz
\begin{tikzpicture}[scale=0.6]
\coordinate (E) at (0,0);
\coordinate (D) at (7,0);
\coordinate (A) at (-1.5, 2.6);
\coordinate (C) at (8.5, 2.6);
\coordinate (B) at (3.5, 5.2);

\draw[thick] (E) node[below left] {$E$} -- (D) node[below right] {$D$} -- (C) node[right] {$C$} -- (B) node[above] {$B$} -- (A) node[left] {$A$} -- cycle;

\node at (3.5,-0.4) {$7\text{ cm}$};
\node at (-1.1,1.1) {$3\text{ cm}$};
\node at (8.1,1.1) {$3\text{ cm}$};
\node at (0.7,4.2) {$5\text{ cm}$};
\node at (6.3,4.2) {$5\text{ cm}$};

\node at (-0.8,2.2) {$\theta$};
\node at (7.8,2.2) {$\theta$};
\end{tikzpicture}
```

Figure 4 shows a shape $S(\theta)$ made up of five line segments $AB$, $BC$, $CD$, $DE$ and $EA$.
The lengths of the sides are $AB = BC = 5\text{ cm}$, $CD = EA = 3\text{ cm}$ and $DE = 7\text{ cm}$.
Angle $BAE = \text{angle } BCD = \theta$ radians.

The length of each line segment always remains the same but the value of $\theta$ can be varied so that different symmetrical shapes can be formed, with the added restriction that none of the line segments cross.

**(a)** Sketch $S(\pi)$, labelling the vertices clearly. **(2)**

The shape $S(\phi)$ is a trapezium.

**(b)** Sketch $S(\phi)$ and calculate the value of $\phi$. **(3)**

The smallest possible value for $\theta$ is $\alpha$, where $\alpha > 0$, and the largest possible value for $\theta$ is $\beta$, where $\beta > \pi$.

**(c)** Show that $\alpha = \arccos\left(\frac{29}{40}\right)$. $[\arccos(x)$ is an alternative notation for $\cos^{-1}(x)]$ **(4)**

**(d)** Find the value of $\beta$. **(4)**

The area, in $\text{cm}^2$, of shape $S(\theta)$ is $R(\theta)$.

**(e)** Show that for $\alpha \leqslant \theta < \pi$

$$R(\theta) = 15 \sin \theta + \frac{7}{4}\sqrt{87 - 120\cos \theta}$$

**(4)**

Given that this formula for $R(\theta)$ holds for $\alpha \leqslant \theta \leqslant \beta$

**(f)** show that $R(\theta)$ has only one stationary point and that this occurs when $\theta = \frac{2\pi}{3}$ **(7)**

**(g)** find the maximum and minimum values of $R(\theta)$. **(3)**

**(Total 27 marks)**

### **Mark Scheme 7**

#### **Part (a)**

**Step 1: Sketch $S(\pi)$**

When $\theta = \pi$, $E-A-B$ and $D-C-B$ form straight lines of length $3+5 = 8\text{ cm}$.
Shape $S(\pi)$ is an isosceles triangle $BDE$ with $BE = BD = 8\text{ cm}$ and base $DE = 7\text{ cm}$, with point $A$ on $BE$ ($EA=3\text{ cm}$) and point $C$ on $BD$ ($DC=3\text{ cm}$).

- **[M1]** Correct triangular shape drawn showing $E-A-B$ and $D-C-B$ as straight line segments.
- **[A1]** Vertices $A, B, C, D, E$ clearly labelled with correct positions.

#### **Part (b)**

**Step 2: Sketch $S(\phi)$ and calculate $\phi$**

For $S(\phi)$ to be a trapezium with line of symmetry, $AE \parallel CD$ (both perpendicular to $DE$) so $\angle AED = \angle CDE = \frac{\pi}{2}$.
Interior angles of pentagon: $\phi + \frac{\pi}{2} = \pi \implies \phi = \frac{\pi}{2}$.

- **[M1]** Correct sketch of trapezium shape shown with symmetry.
- **[M1]** Uses horizontal/vertical parallel side property to set up angle equation.
- **[A1]** $\phi = \frac{\pi}{2}$ radians (or $90^\circ$).

#### **Part (c)**

**Step 3: Apply Cosine Rule at minimum angle $\alpha$**

The minimum angle $\alpha$ occurs when $B$ lies on $DE$, so $B$ is the midpoint of $DE \implies EB = 3.5 = \frac{7}{2}\text{ cm}$.

In $\triangle EAB$: $EA = 3$, $AB = 5$, $EB = \frac{7}{2}$, and $\angle BAE = \alpha$.

$$EB^2 = EA^2 + AB^2 - 2(EA)(AB) \cos \alpha$$

$$\left(\frac{7}{2}\right)^2 = 3^2 + 5^2 - 2(3)(5) \cos \alpha$$

$$\frac{49}{4} = 34 - 30 \cos \alpha$$

$$30 \cos \alpha = 34 - \frac{49}{4} = \frac{87}{4} \implies \cos \alpha = \frac{87}{120} = \frac{29}{40}$$

$$\alpha = \arccos\left(\frac{29}{40}\right)$$

- **[M1]** Identifies that at $\theta = \alpha$, $B$ lies on $DE$ with $EB = 3.5$.
- **[M1]** Applies the cosine rule to $\triangle EAB$.
- **[A1]** Obtains $34 - 30\cos\alpha = \frac{49}{4}$.
- **[A1]** Fully correct algebraic proof leading to $\alpha = \arccos\left(\frac{29}{40}\right)$.

#### **Part (d)**

**Step 4: Find the maximum angle $\beta$**

As $\theta$ increases past $\pi$, $B$ moves below $AE$ and $CD$ until $B$ touches $DE$ again from above/below.
The geometric configuration at the limit is the reflection of the minimum angle configuration across $AE$ and $CD$.

$$\beta = 2\pi - \alpha = 2\pi - \arccos\left(\frac{29}{40}\right)$$

- **[M1]** Identifies symmetry for maximum angle $\beta > \pi$.
- **[A1]** Relates $\beta$ to $\alpha$ via $\beta = 2\pi - \alpha$.
- **[A1]** Obtains $\beta = 2\pi - \arccos\left(\frac{29}{40}\right)$.
- **[A1]** Correct numerical/exact form $\beta = 2\pi - \arccos\left(\frac{29}{40}\right)$.

#### **Part (e)**

**Step 5: Calculate Area $R(\theta)$**

$$\text{Area}(\triangle EAB) = \frac{1}{2} \times 3 \times 5 \times \sin \theta = \frac{15}{2} \sin \theta$$

By symmetry, $\text{Area}(\triangle DCB) = \frac{15}{2} \sin \theta$.

Sum of areas of $\triangle EAB$ and $\triangle DCB = 15 \sin \theta$.

In $\triangle EAB$, by Cosine Rule: $EB^2 = 3^2 + 5^2 - 2(3)(5)\cos\theta = 34 - 30\cos\theta$.

Height $h$ of $\triangle EBD$ above $DE$:

$$h = \sqrt{EB^2 - \left(\frac{7}{2}\right)^2} = \sqrt{34 - 30\cos\theta - \frac{49}{4}} = \frac{1}{2}\sqrt{87 - 120\cos\theta}$$

$$\text{Area}(\triangle EBD) = \frac{1}{2} \times 7 \times h = \frac{7}{4}\sqrt{87 - 120\cos\theta}$$

$$R(\theta) = 15 \sin \theta + \frac{7}{4}\sqrt{87 - 120\cos \theta}$$

- **[M1]** Expresses area of $\triangle EAB$ as $\frac{15}{2}\sin\theta$.
- **[M1]** Uses Cosine Rule to find $EB^2 = 34 - 30\cos\theta$.
- **[M1]** Uses Pythagoras to find height of $\triangle EBD$ as $\frac{1}{2}\sqrt{87 - 120\cos\theta}$.
- **[A1]** Combines areas to achieve the given formula $R(\theta) = 15 \sin \theta + \frac{7}{4}\sqrt{87 - 120\cos \theta}$.

#### **Part (f)**

**Step 6: Differentiate $R(\theta)$**

$$R'(\theta) = 15\cos\theta + \frac{7}{4} \cdot \frac{120\sin\theta}{2\sqrt{87 - 120\cos\theta}} = 15\cos\theta + \frac{105\sin\theta}{\sqrt{87 - 120\cos\theta}}$$

- **[M1]** Differentiates $R(\theta)$ using chain rule.
- **[A1]** Correct derivative $15\cos\theta + \frac{105\sin\theta}{\sqrt{87 - 120\cos\theta}}$.

**Step 7: Set $R'(\theta) = 0$ and solve for $\cos\theta$**

$$15\cos\theta + \frac{105\sin\theta}{\sqrt{87 - 120\cos\theta}} = 0 \implies \cos\theta + \frac{7\sin\theta}{\sqrt{87 - 120\cos\theta}} = 0$$

$$\frac{7\sin\theta}{\sqrt{87 - 120\cos\theta}} = -\cos\theta$$

Squaring both sides (noting $\cos\theta < 0$):

$$\frac{49\sin^2\theta}{87 - 120\cos\theta} = \cos^2\theta \implies 49(1 - \cos^2\theta) = \cos^2\theta(87 - 120\cos\theta)$$

$$49 - 49\cos^2\theta = 87\cos^2\theta - 120\cos^3\theta$$

$$120\cos^3\theta - 136\cos^2\theta + 49 = 0$$

- **[M1]** Equates $R'(\theta) = 0$ and rearranges.
- **[M1]** Squares both sides and uses $\sin^2\theta = 1 - \cos^2\theta$ to form a cubic in $\cos\theta$.
- **[A1]** Correct cubic equation $120c^3 - 136c^2 + 49 = 0$ where $c = \cos\theta$.

**Step 8: Show $\theta = \frac{2\pi}{3}$ is the unique solution**

Test $c = \cos\left(\frac{2\pi}{3}\right) = -\frac{1}{2}$:

$$120\left(-\frac{1}{8}\right) - 136\left(\frac{1}{4}\right) + 49 = -15 - 34 + 49 = 0$$

Factorising: $(2c+1)(60c^2 - 98c + 49) = 0$.

For $60c^2 - 98c + 49 = 0$, discriminant $\Delta = (-98)^2 - 4(60)(49) = 9604 - 11760 = -2156 < 0$, so no other real solutions.

- **[M1]** Verifies $c = -\frac{1}{2}$ is a root of the cubic equation.
- **[A1]** Shows the remaining quadratic factor has negative discriminant and concludes $\theta = \frac{2\pi}{3}$ is the only stationary point.

#### **Part (g)**

**Step 9: Calculate maximum and minimum values of $R(\theta)$**

Maximum occurs at stationary point $\theta = \frac{2\pi}{3}$:

$$R\left(\frac{2\pi}{3}\right) = 15\left(\frac{\sqrt{3}}{2}\right) + \frac{7}{4}\sqrt{87 - 120\left(-\frac{1}{2}\right)} = \frac{15\sqrt{3}}{2} + \frac{7}{4}\sqrt{147} = \frac{15\sqrt{3}}{2} + \frac{49\sqrt{3}}{4} = \frac{79\sqrt{3}}{4}$$

Minimum occurs at endpoint $\theta = \alpha$:

Since $\cos\alpha = \frac{29}{40} \implies \sin\alpha = \sqrt{1 - \left(\frac{29}{40}\right)^2} = \frac{\sqrt{759}}{40}$

$$R(\alpha) = 15 \sin\alpha + \frac{7}{4}\sqrt{87 - 87} = 15 \cdot \frac{\sqrt{759}}{40} = \frac{3\sqrt{759}}{8}$$

- **[M1]** Evaluates $R\left(\frac{2\pi}{3}\right)$ and $R(\alpha)$.
- **[A1]** Maximum value $= \frac{79\sqrt{3}}{4}$.
- **[A1]** Minimum value $= \frac{3\sqrt{759}}{8}$.
