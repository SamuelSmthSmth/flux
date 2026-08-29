---
topic: "Trigonometric Ratios"
subtopic: "Solving triangle problems"
---
### **Question 1**

In $\triangle OAB$, $OA = AB = 1$. The angle $\angle OAB = \frac{3\pi}{4}$.
Let $X$ be the projection of $A$ onto the line $OB$ produced, such that $AX \perp OX$ and $OX = AX$.

Show that $\tan \frac{3\pi}{8} = \sqrt{2} + 1$. **(5)**

### **Mark Scheme 1**

**Step 1: Identify the properties of the triangle**
$\triangle OAB$ is isosceles since $|OA| = |AB| = 1$.
- **[B1]** For identifying that $\triangle OAB$ is isosceles.

**Step 2: Find the angles**
Since $|OX| = |AX|$ and $AX \perp OX$, we have $\angle AOX = \frac{\pi}{4}$.
Therefore, $\angle OAB = \pi - \angle OAX = \pi - \frac{\pi}{4} = \frac{3\pi}{4}$.
- **[B1]** For finding $\angle OAB = \frac{3\pi}{4}$ or $\angle AOX = \frac{\pi}{4}$.

**Step 3: Calculate the remaining angles**
Since $\triangle OAB$ is isosceles with $OA = AB$, we have:
$$\angle BOA = \frac{\pi - \frac{3\pi}{4}}{2} = \frac{\pi}{8}$$
Thus, the total angle $\angle BOX$ is:
$$\angle BOX = \angle AOX + \angle BOA = \frac{\pi}{4} + \frac{\pi}{8} = \frac{3\pi}{8}$$
- **[B1]** For finding $\angle BOA = \frac{\pi}{8}$ or $\angle BOX = \frac{3\pi}{8}$.

**Step 4: Express the tangent ratio**
Using the right-angled triangle $OXB$:
$$\tan \frac{3\pi}{8} = \frac{BX}{OX} = \frac{AX + AB}{OX} = \frac{\frac{1}{\sqrt{2}} + 1}{\frac{1}{\sqrt{2}}} = 1 + \sqrt{2}$$
- **[M1]** For writing $\tan \frac{3\pi}{8}$ in terms of the lengths $BX$ and $OX$.
- **[A1]** cso to show $\tan \frac{3\pi}{8} = \sqrt{2} + 1$.

---
topic: "Trigonometric Identities and Equations"
subtopic: "Equations and identities"
---
### **Question 2**

Solve the equation:
$$2\sin^2\theta - \tan\theta = 2\sin 2\theta - 2$$
for $0 \le \theta < 360^\circ$. **(8)**

### **Mark Scheme 2**

#### **Method 1**

**Step 1: Divide by $\cos^2\theta$ and rewrite in terms of $\tan\theta$**
$$2\sin^2\theta - \tan\theta = 2\sin 2\theta - 2$$
Dividing by $\cos^2\theta$:
$$2\tan^2\theta - \tan\theta\sec^2\theta = \frac{2(2\sin\theta\cos\theta)}{\cos^2\theta} - 2\sec^2\theta$$
$$2\tan^2\theta - \tan\theta(1+\tan^2\theta) = 4\tan\theta - 2(1+\tan^2\theta)$$
- **[M1]** For using $\sin\theta\sec\theta = \tan\theta$ or dividing by $\cos^2\theta$.
- **[B1]** For using $\sec^2\theta = 1+\tan^2\theta$ or $\sin 2\theta = 2\sin\theta\cos\theta$.

**Step 2: Form a cubic equation in $t = \tan\theta$**
$$2t^2 - t(1+t^2) = 4t - 2(1+t^2)$$
$$t^3 - 4t^2 + 5t - 2 = 0$$
- **[M1]** For substituting to obtain an equation in $\tan\theta$ only.
- **[A1]** For the correct simplified cubic equation.

**Step 3: Factorise the cubic equation**
$$(t-1)(t^2 - 3t + 2) = 0 \Rightarrow (t-1)^2(t-2) = 0$$
- **[M1]** For finding a first factor.
- **[A1]** For factorising completely.

**Step 4: Solve for $\theta$**
$$\tan\theta = 1 \quad \text{or} \quad \tan\theta = 2$$
- **[A1]** For $\tan\theta = 1$.
- **[A1]** For $\tan\theta = 2$.

#### **Alternative Method**

**Step 1: Factorise the terms directly**
$$\frac{\sin\theta}{\cos\theta}(2\sin\theta\cos\theta - 1) = 2(\sin 2\theta - 1)$$
$$\tan\theta(\sin 2\theta - 1) = 2(\sin 2\theta - 1)$$
- **[M1]** For using $\sec\theta = \frac{1}{\cos\theta}$ and attempting to factorise.
- **[B1]** For identifying the $(\sin 2\theta - 1)$ factor.

**Step 2: Group the factors**
$$(\tan\theta - 2)(\sin 2\theta - 1) = 0$$
- **[M1]** For obtaining the two factors.
- **[A1]** Both factors correct.

**Step 3: Solve the factor equations**
*   $\sin 2\theta = 1 \Rightarrow 2\theta = 90^\circ, 450^\circ \Rightarrow \theta = 45^\circ, 225^\circ$ (which corresponds to $\tan\theta = 1$).
*   $\tan\theta = 2$
- **[M1]** For solving $\sin 2\theta = 1$.
- **[A1]** For $\theta = 45^\circ, 225^\circ$ (or $\tan\theta = 1$).
- **[A1, A1]** For $\tan\theta = 1$ or $\tan\theta = 2$.

---
topic: "Parametric Equations"
subtopic: "Parametric equations"
---
### **Question 3**

A curve $C$ has parametric equations:
$$x = t^3, \quad y = t^2$$
The point $P$ on $C$ has parameter $t = 2$.

**(a)** Find the equation of the tangent to $C$ at $P$. **(3)**

**(b)** Show that this tangent meets the curve $C$ again at the point $Q$ where $t = -1$. **(3)**

**(c)** Find the area of the finite region bounded by the tangent and the curve $C$. **(5)**

**(Total 11 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Find the gradient of the tangent**
$$\frac{dy}{dx} = \frac{dy/dt}{dx/dt} = \frac{2t}{3t^2} = \frac{2}{3t}$$
At $P$ ($t = 2$), the gradient is:
$$m = \frac{2}{3(2)} = \frac{1}{3}$$
- **[M1]** For attempting to differentiate.
- **[A1]** For the correct derivative $\frac{2}{3t}$.

**Step 2: Find the equation of the tangent**
At $t = 2$, the coordinates of $P$ are $(8, 4)$.
$$y - 4 = \frac{1}{3}(x - 8) \quad \Rightarrow \quad 3y = x + 4$$
- **[M1]** For finding the equation of the tangent.

#### **Part (b)**

**Step 3: Substitute the parametric equations into the tangent equation**
$$3(t^2) = t^3 + 4$$
- **[M1]** For substituting $x = t^3$ and $y = t^2$ into the tangent equation.

**Step 4: Solve the cubic equation**
$$t^3 - 3t^2 + 4 = 0$$
Since $t = 2$ is a point of tangency, $(t-2)^2$ must be a factor:
$$(t-2)^2(t+1) = 0$$
- **[M1]** For a full method to solve the cubic equation.

**Step 5: Identify the parameter at $Q$**
Thus, the other intersection point $Q$ has parameter $t = -1$.
- **[A1]** For $t = -1$.

#### **Part (c)**

**Step 6: Set up the parametric integration for the area under the curve**
$$\int y \, dx = \int t^2 \left(\frac{dx}{dt}\right) dt = \int t^2 (3t^2) \, dt = \int 3t^4 \, dt$$
- **[M1]** For a suitable parametric integration attempt.

**Step 7: Evaluate the area under the curve between $t = -1$ and $t = 2$**
$$\text{Area} = \int_{-1}^{2} 3t^4 \, dt = \left[ \frac{3t^5}{5} \right]_{-1}^{2} = \left(\frac{96}{5}\right) - \left(-\frac{3}{5}\right) = 19.8$$
- **[M1]** For correct integration and substitution of limits.
- **[A1]** For $19.8$.

**Step 8: Find the area of the trapezium under the tangent**
At $t = -1$, $x = -1, y = 1$. At $t = 2$, $x = 8, y = 4$.
$$\text{Area of trapezium} = \frac{1}{2}(1 + 4) \times (8 - (-1)) = \frac{1}{2}(5)(9) = 22.5$$
- **[B1]** For finding the area of the trapezium.

**Step 9: Calculate the required bounded area**
$$\text{Required Area} = 22.5 - 19.8 = 2.7$$
- **[A1]** For $2.7$.

---
topic: "Algebraic Methods"
subtopic: "Partial fractions"
---
### **Question 4**

Let $f(x) = \frac{1-3x}{(1+3x^2)(1-x)^2}$.

**(a)** Express $f(x)$ in the form:
$$\frac{Ax+B}{1+3x^2} + \frac{C}{1-x} + \frac{D}{(1-x)^2}$$
where $A, B, C$ and $D$ are constants to be found. **(5)**

**(b)** Find the binomial expansion of $f(x)$ in ascending powers of $x$ up to and including the term in $x^4$. **(4)**

**(c)** Find the equation of the tangent to the curve $y = f(x)$ at the point where $x = 0$. **(2)**

**(Total 11 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Set up the identity**
$$1-3x \equiv (Ax+B)(1-x)^2 + C(1+3x^2)(1-x) + D(1+3x^2)$$
- **[M1]** For setting up the correct identity.

**Step 2: Solve for $D$**
Let $x = 1$:
$$-2 = 4D \Rightarrow D = -\frac{1}{2}$$
- **[B1]** For $D = -\frac{1}{2}$.

**Step 3: Form equations for the other coefficients**
*   Let $x = 0$:
$$1 = B + C + D \Rightarrow B + C = \frac{3}{2} \quad \text{--- (1)}$$
*   Equating coefficients of $x^3$:
$$0 = A - 3C \Rightarrow A = 3C \quad \text{--- (2)}$$
*   Equating coefficients of $x$:
$$-3 = A - 2B - C \quad \text{--- (3)}$$
- **[M1]** For forming a sufficient system of equations.

**Step 4: Solve the system of equations**
Substituting (2) into (3):
$$-3 = 3C - 2B - C \Rightarrow 2C - 2B = -3 \Rightarrow B - C = \frac{3}{2} \quad \text{--- (4)}$$
Solving (1) and (4) simultaneously:
$$2B = 3 \Rightarrow B = \frac{3}{2}$$
$$C = 0 \Rightarrow A = 0$$
- **[A2/1/0]** For $A = 0, B = \frac{3}{2}, C = 0$ (deduct 1 mark for each error).

#### **Part (b)**

**Step 5: Set up the binomial expansions**
$$f(x) = \frac{3}{2}(1+3x^2)^{-1} - \frac{1}{2}(1-x)^{-2}$$
Using the binomial theorem:
$$\frac{3}{2}(1+3x^2)^{-1} = \frac{3}{2}\left[ 1 - 3x^2 + (-1)(-2)\frac{(3x^2)^2}{2!} + \dots \right] = \frac{3}{2} - \frac{9}{2}x^2 + \frac{27}{2}x^4 - \dots$$
$$-\frac{1}{2}(1-x)^{-2} = -\frac{1}{2}\left[ 1 + 2x + \frac{(-2)(-3)}{2!}x^2 + \frac{(-2)(-3)(-4)}{3!}(-x)^3 + \frac{(-2)(-3)(-4)(-5)}{4!}(-x)^4 + \dots \right]$$
$$= -\frac{1}{2} - x - \frac{3}{2}x^2 - 2x^3 - \frac{5}{2}x^4 - \dots$$
- **[M1]** For attempting binomial expansion on both terms.

**Step 6: Combine the expansions**
$$f(x) = \left(\frac{3}{2} - \frac{9}{2}x^2 + \frac{27}{2}x^4\right) - \left(\frac{1}{2} + x + \frac{3}{2}x^2 + 2x^3 + \frac{5}{2}x^4\right)$$
$$f(x) = 1 - x - 6x^2 - 2x^3 + 11x^4 - \dots$$
- **[M1]** For collecting terms.
- **[A2/1/0]** For the correct expansion: $1 - x - 6x^2 - 2x^3 + 11x^4$ (deduct 1 mark for each error).

#### **Part (c)**

**Step 7: Identify the values of $f(0)$ and $f'(0)$**
From the expansion:
$$f(0) = 1, \quad f'(0) = -1$$
- **[M1]** For identifying $f(0)$ and $f'(0)$ from the expansion.

**Step 8: Write the equation of the tangent**
$$y = 1 - x$$
- **[A1]** For $y = 1 - x$.

---
topic: "Functions and Graphs"
subtopic: "y = |f(x)| and y = f(|x|)"
---
### **Question 5**

The function $f(x)$ is defined by:
$$f(x) = \frac{1}{\lambda}(x^2-4)(x^2-25), \quad x \in \mathbb{R}$$
where $\lambda$ is a positive constant.

**(a)** Sketch the graph of $y = f(x)$, showing the coordinates of the points of intersection with the axes. **(3)**

**(b)** Find the range of $f(x)$ in terms of $\lambda$. **(5)**

**(c)** Find the number of real roots of the equation $|f(x)| = k$ for different values of the positive constant $k$, in terms of $\lambda$. **(9)**

**(Total 17 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Sketch the curve**

```tikz
\begin{tikzpicture}[scale=0.8]
\draw[->] (-6,0) -- (6,0) node[below] {$x$};
\draw[->] (0,-4) -- (0,4) node[left] {$y$};
\draw[domain=-5.3:5.3, smooth, thick] plot (\x, {0.025*((\x)*(\x)-4)*((\x)*(\x)-25)});
\node at (2,0) [below right] {$2$};
\node at (-2,0) [below left] {$-2$};
\node at (5,0) [below right] {$5$};
\node at (-5,0) [below left] {$-5$};
\node at (0,2.5) [above right] {$\frac{100}{\lambda}$};
\end{tikzpicture}
```

- **[B1]** For correct shape and symmetry.
- **[B1]** For $x$-intercepts at $\pm 5, \pm 2$.
- **[B1]** For $y$-intercept at $\frac{100}{\lambda}$.

#### **Part (b)**

**Step 2: Differentiate to find stationary points**
$$f'(x) = \frac{1}{\lambda} \left[ 2x(x^2-25) + 2x(x^2-4) \right] = \frac{2x}{\lambda}(2x^2 - 29)$$
- **[M1]** For attempting to differentiate.

**Step 3: Solve $f'(x) = 0$**
$$2x(2x^2 - 29) = 0 \Rightarrow x = 0 \quad \text{or} \quad x = \pm \sqrt{\frac{29}{2}}$$
- **[M1]** For setting $f'(x) = 0$.
- **[A1]** For $x = \pm \sqrt{\frac{29}{2}}$.

**Step 4: Find the minimum value and state the range**
$$f\left(\pm \sqrt{\frac{29}{2}}\right) = \frac{1}{\lambda}\left(\frac{29}{2}-4\right)\left(\frac{29}{2}-25\right) = \frac{1}{\lambda}\left(\frac{21}{2}\right)\left(-\frac{21}{2}\right) = -\frac{441}{4\lambda} = -\frac{110.25}{\lambda}$$
Therefore, the range is:
$$f(x) \ge -\frac{110.25}{\lambda}$$
- **[M1]** For substituting $x^2 = 14.5$ into $f(x)$.
- **[A1]** For the correct range.

#### **Part (c)**

**Step 5: Sketch $y = |f(x)|$**

```tikz
\begin{tikzpicture}[scale=0.8]
\draw[->] (-6,0) -- (6,0) node[below] {$x$};
\draw[->] (0,-1) -- (0,5) node[left] {$y$};
\draw[domain=-5.3:5.3, smooth, thick] plot (\x, {abs(0.025*((\x)*(\x)-4)*((\x)*(\x)-25))});
\node at (0,2.5) [above right] {$\frac{100}{\lambda}$};
\node at (3.8,2.75) [above] {$\frac{110.25}{\lambda}$};
\end{tikzpicture}
```

- **[M1]** For a sketch of $y = |f(x)|$.
- **[A1]** Correct sketch with peak values labelled.

**Step 6: Determine the number of roots for different ranges of $k$**
*   If $k > \frac{110.25}{\lambda}$:
There are **2** roots.
- **[M1, A1]** For $k > \frac{110.25}{\lambda} \Rightarrow 2$ roots.

*   If $k = \frac{110.25}{\lambda}$:
There are **4** roots (since $\lambda > 0$, $\frac{110.25}{\lambda} \neq \frac{100}{\lambda}$).
- **[M1, A1]** For $k = \frac{110.25}{\lambda} \Rightarrow 4$ roots.

*   If $\frac{100}{\lambda} < k < \frac{110.25}{\lambda}$:
There are **6** roots.
- **[M1, A1, A1]** For $\frac{100}{\lambda} < k < \frac{110.25}{\lambda} \Rightarrow 6$ roots.

*   If $k = \frac{100}{\lambda}$:
There are **7** roots.
- **[B1]** For $k = \frac{100}{\lambda} \Rightarrow 7$ roots.

*   If $0 < k < \frac{100}{\lambda}$:
There are **8** roots.
- **[M1, A1]** For $0 < k < \frac{100}{\lambda} \Rightarrow 8$ roots.

---
topic: "Algebraic Expressions"
subtopic: "Surds"
---
### **Question 6**

**(a)** Show that $\sqrt{2+\sqrt{3}} - \sqrt{2-\sqrt{3}} = \sqrt{2}$. **(3)**

**(b)** Find the value of $\log_{1/8} \sqrt{2}$. **(3)**

**(c)** Find all pairs of positive integers $(a, n)$ such that:
$$\sqrt{a+\sqrt{15}} - \sqrt{a-\sqrt{15}} = \sqrt{n}$$
**(13)**

**(Total 19 marks)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Square the left-hand side**
$$\left(\sqrt{2+\sqrt{3}} - \sqrt{2-\sqrt{3}}\right)^2 = (2+\sqrt{3}) - 2\sqrt{(2+\sqrt{3})(2-\sqrt{3})} + (2-\sqrt{3})$$
- **[M1]** For attempting to square the LHS.

**Step 2: Simplify the expression**
$$= 4 - 2\sqrt{4-3} = 4 - 2 = 2$$
- **[A1]** For simplifying to 2.

**Step 3: Conclude the proof**
Since $2+\sqrt{3} > 2-\sqrt{3}$, the LHS is positive, so:
$$\sqrt{2+\sqrt{3}} - \sqrt{2-\sqrt{3}} = \sqrt{2}$$
- **[A1]** cso.

#### **Part (b)**

**Step 4: Use change of base or powers of 2**
Let $x = \log_{1/8} \sqrt{2}$.
$$\log_{1/8} \sqrt{2} = \frac{\log_2 \sqrt{2}}{\log_2 (1/8)} = \frac{\frac{1}{2}}{-3} = -\frac{1}{6}$$
- **[M1]** For change of base or setting up an equation.
- **[M1]** For expressing both terms as powers of 2.
- **[A1]** cso for $-\frac{1}{6}$.

**Alternative Method for (b):**
$$\log_{1/8} \sqrt{2} = x \Rightarrow \sqrt{2} = \left(\frac{1}{8}\right)^x$$
$$2^{1/2} = 2^{-3x} \Rightarrow \frac{1}{2} = -3x \Rightarrow x = -\frac{1}{6}$$

#### **Part (c)**

**Step 5: Square both sides of the equation**
$$\left(\sqrt{a+\sqrt{15}} - \sqrt{a-\sqrt{15}}\right)^2 = n$$
$$a+\sqrt{15} - 2\sqrt{(a+\sqrt{15})(a-\sqrt{15})} + a-\sqrt{15} = n$$
$$2a - 2\sqrt{a^2-15} = n$$
- **[M1]** For squaring both sides.
- **[A1]** For $2a - 2\sqrt{a^2-15} = n$.

**Step 6: Set up the integer condition**
For $n$ to be an integer, $a^2-15$ must be a perfect square, say $b^2$:
$$a^2 - 15 = b^2 \Rightarrow a^2 - b^2 = 15$$
- **[M1]** For identifying that $a^2-15$ must be a perfect square.
- **[A1]** For $a^2 - b^2 = 15$.

**Step 7: Factorise using difference of squares**
$$(a-b)(a+b) = 15$$
- **[M1]** For factorising $a^2-b^2$.

**Step 8: Consider factor pairs of 15**
Since $a$ and $b$ are positive integers, we have two cases:
*   **Case 1: $3 \times 5$**
$$a-b = 3, \quad a+b = 5 \Rightarrow 2a = 8 \Rightarrow a = 4$$
*   **Case 2: $1 \times 15$**
$$a-b = 1, \quad a+b = 15 \Rightarrow 2a = 16 \Rightarrow a = 8$$
- **[M1]** For considering the factor pairs of 15.
- **[A1]** For $a = 4$.
- **[A1]** For $a = 8$.

**Step 9: Find the corresponding values of $n$**
*   For $a = 4$:
$$n = 2(4) - 2\sqrt{16-15} = 8 - 2 = 6$$
*   For $a = 8$:
$$n = 2(8) - 2\sqrt{64-15} = 16 - 2(7) = 2$$
- **[A1]** For the pair $a = 4, n = 6$.
- **[A1]** For the pair $a = 8, n = 2$.

#### **Alternative Methods for Part (c)**

**Trial Method:**
*   **[M1]** For testing at least 3 values of $a \ge 4$.
*   **[A1]** For finding $a = 4$.
*   **[A1]** For finding $a = 8$.
*   **[B1]** Argument for $a > 8 \Rightarrow n < 2$.
*   **[B1]** Argument for $n \neq 1$ since if $n=1$, $a-\sqrt{a^2-15} = 0.5 \Rightarrow a = 15.25 \notin \mathbb{Z}$.

**Squaring Method:**
*   Rearrange to: $2a - n = 2\sqrt{a^2-15}$
*   Square: $4a^2 - 4an + n^2 = 4a^2 - 60 \Rightarrow a = \frac{n^2+60}{4n}$
*   **[M1]** For trying $n \ge 2$ for at least 3 values of $n$.
*   **[A1]** For $n = 2 \Rightarrow a = 8$.
*   **[A1]** For $n = 6 \Rightarrow a = 4$.
*   **[B2]** Full argument to show all cases considered.
*   **[M1]** Checking all answers in the original equation.
*   **[A2/1/0]** Only valid cases: $n=2, a=8$ and $n=6, a=4$.

---
topic: "Integration"
subtopic: "Integration by parts"
---
### **Question 7**

The curve $C$ has equation $y = e^{-x}\sin x$, for $x \ge 0$.

**(a)** Find the $x$-coordinates of the first three points where $C$ crosses the positive $x$-axis, labelling them $P, Q$ and $R$ in order of increasing $x$. **(2)**

**(b)** Find $\int e^{-x}\sin x \, dx$. **(5)**

**(c)** Let $A_n$ be the area of the region bounded by the curve $C$ and the $x$-axis between the $(n-1)$-th and $n$-th positive roots. Show that:
$$A_n = \frac{1}{2}(1+e^{-\pi})e^{-(n-1)\pi}$$
**(6)**

**(d)** Find the sum to infinity of the areas of these regions, $\sum_{n=1}^{\infty} A_n$. **(5)**

**(e)** Find the value of $\int_0^\infty e^{-x}|\sin x| \, dx$. **(4)**

**(Total 22 marks)**

### **Mark Scheme 7**

#### **Part (a)**

**Step 1: Solve for the roots**
$$e^{-x}\sin x = 0 \Rightarrow \sin x = 0 \Rightarrow x = 0, \pi, 2\pi, 3\pi, \dots$$
The first three positive roots are:
$$P = \pi, \quad Q = 2\pi, \quad R = 3\pi$$
- **[M1]** For solving $\sin x = 0$.
- **[A1]** For $P = \pi, Q = 2\pi, R = 3\pi$.

#### **Part (b)**

**Step 2: First integration by parts**
Let $I = \int e^{-x}\sin x \, dx$.
$$I = \left[ -e^{-x}\cos x \right] - \int e^{-x}\cos x \, dx$$
- **[M1]** For attempting integration by parts.
- **[A1]** Correct first stage.

**Step 3: Second integration by parts**
$$\int e^{-x}\cos x \, dx = \left[ e^{-x}\sin x \right] - \int -e^{-x}\sin x \, dx = e^{-x}\sin x + I$$
- **[M1]** For second attempt at integration by parts.
- **[M1]** For recognizing the integral $I$ on the RHS.

**Step 4: Solve for $I$**
$$I = -e^{-x}\cos x - e^{-x}\sin x - I \Rightarrow 2I = -e^{-x}(\cos x + \sin x)$$
$$I = -\frac{1}{2}e^{-x}(\cos x + \sin x) + C$$
- **[A1]** cso (including constant of integration).

#### **Part (c)**

**Step 5: Set up the limits for $A_n$**
The roots are at $(n-1)\pi$ and $n\pi$.
$$A_n = \left| \int_{(n-1)\pi}^{n\pi} e^{-x}\sin x \, dx \right|$$
- **[M1]** For setting up the limits $(n-1)\pi$ and $n\pi$.

**Step 6: Evaluate the integral**
$$\int_{(n-1)\pi}^{n\pi} e^{-x}\sin x \, dx = \left[ -\frac{1}{2}e^{-x}(\cos x + \sin x) \right]_{(n-1)\pi}^{n\pi}$$
$$= -\frac{1}{2}e^{-n\pi}(\cos n\pi + \sin n\pi) + \frac{1}{2}e^{-(n-1)\pi}(\cos(n-1)\pi + \sin(n-1)\pi)$$
Since $\sin(k\pi) = 0$ and $\cos(k\pi) = (-1)^k$:
$$= -\frac{1}{2}e^{-n\pi}(-1)^n + \frac{1}{2}e^{-(n-1)\pi}(-1)^{n-1}$$
- **[M1]** For applying the limits.
- **[A1]** For correct substitution.

**Step 7: Simplify to show the given result**
$$A_n = \frac{1}{2}(1+e^{-\pi})e^{-(n-1)\pi}$$
- **[A1]** For showing the given result.

#### **Part (d)**

**Step 8: Identify the geometric series**
$$A_1 = \frac{1}{2}(1+e^{-\pi})$$
$$A_2 = \frac{1}{2}(1+e^{-\pi})e^{-\pi}$$
This is a geometric progression with first term $a = \frac{1}{2}(1+e^{-\pi})$ and common ratio $r = e^{-\pi}$.
- **[M1]** For identifying a GP.
- **[A1]** For $a = \frac{1}{2}(1+e^{-\pi})$.
- **[A1]** For $r = e^{-\pi}$.

**Step 9: Find the sum to infinity**
$$S_\infty = \frac{a}{1-r} = \frac{\frac{1}{2}(1+e^{-\pi})}{1-e^{-\pi}} = \frac{e^\pi + 1}{2(e^\pi - 1)}$$
- **[M1]** For using the sum to infinity formula.
- **[A1]** cso.

#### **Part (e)**

**Step 10: Relate the integral to the sum of areas**
Let $S_A = \sum_{n=1}^{\infty} A_{2n-1}$ (sum of odd terms) and $S_B = \sum_{n=1}^{\infty} A_{2n}$ (sum of even terms).
The integral without the modulus is:
$$\int_0^\infty e^{-x}\sin x \, dx = \left[ -\frac{1}{2}e^{-x}(\cos x + \sin x) \right]_0^\infty = \frac{1}{2}$$
Thus:
$$S_A - S_B = \frac{1}{2}$$
We require the total sum $S = S_A + S_B$.
- **[M1]** For using $S_A - S_B = \frac{1}{2}$.
- **[M1]** For setting up the system of equations.

**Step 11: Solve for the total sum**
Adding the equations:
$$S + \frac{1}{2} = 2S_A \Rightarrow S = 2S_A - \frac{1}{2}$$
Since $S_A$ is a GP with first term $A_1 = \frac{1}{2}(1+e^{-\pi})$ and common ratio $R = e^{-2\pi}$:
$$S_A = \frac{\frac{1}{2}(1+e^{-\pi})}{1-e^{-2\pi}} = \frac{1}{2(1-e^{-\pi})}$$
Therefore:
$$S = \frac{1}{1-e^{-\pi}} - \frac{1}{2} = \frac{1+e^{-\pi}}{2(1-e^{-\pi})} = \frac{e^\pi + 1}{2(e^\pi - 1)}$$
- **[A1]** For the correct final value.
