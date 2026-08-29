---
topic: "Trigonometric Identities and Equations"
subtopic: "Simple trigonometric equations"
---
### **Question 1**

Solve for $0 \le \theta \le 180^\circ$

$$\tan(\theta + 35^\circ) = \cot(\theta - 53^\circ)$$

**(Total 4 marks)**

### **Mark Scheme 1**

**Step 1: Use definitions of tan and cot**
$$\frac{\sin(\theta + 35^\circ)}{\cos(\theta + 35^\circ)} = \frac{\cos(\theta - 53^\circ)}{\sin(\theta - 53^\circ)}$$
- **[M1]** Use of correct definitions for $\tan$ and $\cot$.

**Step 2: Cross-multiply and use compound angle formula**
$$0 = \cos(\theta - 53^\circ)\cos(\theta + 35^\circ) - \sin(\theta + 35^\circ)\sin(\theta - 53^\circ)$$
$$0 = \cos(2\theta - 53^\circ + 35^\circ)$$
$$0 = \cos(2\theta - 18^\circ)$$
- **[M1]** Use of $\cos(A+B)$ rule to reach single trig function.

**Step 3: Solve for $\theta$**
$$2\theta - 18^\circ = 90^\circ, 270^\circ \Rightarrow \theta = 54^\circ, 144^\circ$$
- **[A1]** For $54^\circ$.
- **[A1]** For $144^\circ$.

#### **Alternative Method**

**Step 1: Use identity $\cot x = \tan(90^\circ - x)$**
$$\tan(\theta + 35^\circ) = \tan[90^\circ - (\theta - 53^\circ)]$$
- **[M1]** Use of $\cot x = \pm \tan(90^\circ \pm x)$.

**Step 2: Set up equation**
$$\theta + 35^\circ = 90^\circ - (\theta - 53^\circ) \quad \text{or} \quad \theta + 35^\circ = 90^\circ - (\theta - 53^\circ) + 180^\circ$$
- **[M1]** Either equation.

**Step 3: Solve for $\theta$**
$$\theta = 54^\circ, 144^\circ$$
- **[A1]** For $54^\circ$.
- **[A1]** For $144^\circ$.

---
topic: "Integration"
subtopic: "Integrating standard functions"
---
### **Question 2**

Given that

$$\int_0^{\frac{\pi}{2}} \left(1 + \tan\left[\frac{1}{2}x\right]\right)^2 dx = a + \ln b$$

find the value of $a$ and the value of $b$.

**(Total 7 marks)**

### **Mark Scheme 2**

**Step 1: Expand the integrand**
$$\left(1 + \tan\left[\frac{1}{2}x\right]\right)^2 = 1 + 2\tan\left(\frac{1}{2}x\right) + \tan^2\left(\frac{1}{2}x\right)$$
- **[M1]** Attempt to multiply, 3 terms with at least 2 correct.

**Step 2: Use trigonometric identity**
Using $\sec^2 \alpha = 1 + \tan^2 \alpha$:
$$= \sec^2\left(\frac{1}{2}x\right) + 2\tan\left(\frac{1}{2}x\right)$$
- **[M1]** Use of $\sec^2 \alpha = 1 + \tan^2 \alpha$.

**Step 3: Integrate**
$$\int \left(\sec^2\left(\frac{1}{2}x\right) + 2\tan\left(\frac{1}{2}x\right)\right) dx = 2\tan\left(\frac{1}{2}x\right) + 2\ln\left|\sec\left(\frac{1}{2}x\right)\right| \times 2$$
$$= 2\tan\left(\frac{1}{2}x\right) + 4\ln\left|\sec\left(\frac{1}{2}x\right)\right|$$
- **[M1]** Attempt to integrate ($k\tan\theta$ or $k\ln\sec\theta$).
- **[A1]** All correct.

**Step 4: Apply limits**
$$\left[2\tan\left(\frac{1}{2}x\right) + 4\ln\left|\sec\left(\frac{1}{2}x\right)\right|\right]_0^{\frac{\pi}{2}} = \left(2\tan\left(\frac{\pi}{4}\right) + 4\ln\left|\sec\left(\frac{\pi}{4}\right)\right|\right) - (0)$$
- **[M1]** Use of limits $\frac{\pi}{2}$ and $0$ seen (provided some integration attempt).

**Step 5: Evaluate constants**
$$= 2(1) + 4\ln\sqrt{2} = 2 + 2\ln 2 = 2 + \ln 4$$
- **[A1]** $a = 2$.
- **[A1]** $b = 4$ (Accept $2\ln 2$, A1A1 dependent on 4th M only).

---
topic: "Sequences and Series"
subtopic: "Geometric series"
---
### **Question 3**

A sequence $\{u_n\}$ is given by

$$u_1 = k$$
$$u_{2n} = u_{2n-1} \times p \quad n \ge 1$$
$$u_{2n+1} = u_{2n} \times q \quad n \ge 1$$

where $k, p$ and $q$ are positive constants with $pq \ne 1$.

**(a)** Write down the first 6 terms of this sequence. **(3)**

**(b)** Show that

$$\sum_{r=1}^{2n} u_r = \frac{k(1+p)(1-(pq)^n)}{1-pq}$$
**(6)**

In part **(c)** $[x]$ means the integer part of $x$, so for example $[2.73] = 2$, $[4] = 4$ and $[0] = 0$.

**(c)** Find

$$\sum_{r=1}^{\infty} 6 \times \left(\frac{4}{3}\right)^{\left[\frac{r}{2}\right]} \times \left(\frac{3}{5}\right)^{\left[\frac{r-1}{2}\right]}$$
**(4)**

**(Total 13 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Write first 3 terms**
$$u_1 = k, \quad u_2 = kp, \quad u_3 = kpq$$
- **[M1]** For first 3 terms.

**Step 2: Write next 3 terms**
$$u_4 = kp^2q, \quad u_5 = kp^2q^2, \quad u_6 = kp^3q^2$$
- **[A2]** For next 3 terms (A2/1/0, -1 eeoo).

#### **Part (b)**

**Step 3: Split the series into two geometric progressions**
Identify: $k + kpq + kp^2q^2 + \dots$ is GP with $a = k, r = pq$.
- **[M1]** For splitting into 2 series.
- **[A1]** For 1st $a$ and $r$.

Identify: $kp + kp^2q + kp^3q^2 + \dots$ is GP with $a = kp, r = pq$.
- **[M1]** For identifying 2nd GP.
- **[A1]** For 2nd $a$ and $r$.

**Step 4: Sum both GPs**
$$S_{2n} = \frac{k(1-(pq)^n)}{1-pq} + \frac{kp(1-(pq)^n)}{1-pq}$$
- **[M1]** Use of $S_n$ formula twice. One correct ft their $a$ & $r$.

**Step 5: Factorise to show the result**
$$= \frac{k(1+p)(1-(pq)^n)}{1-pq}$$
- **[A1]** Correct solution only (cso).

#### **Part (c)**

**Step 6: Identify the terms of the given series**
$$\sum_{r=1}^{\infty} 6 \times \left(\frac{4}{3}\right)^{\left[\frac{r}{2}\right]} \times \left(\frac{3}{5}\right)^{\left[\frac{r-1}{2}\right]} = 6 + 6 \times \left(\frac{4}{3}\right) + 6 \times \left(\frac{4}{3}\right) \times \left(\frac{3}{5}\right) + \dots$$
This is the sequence from (b) with $k = 6$, $p = \frac{4}{3}$, $q = \frac{3}{5}$.
- **[B1]** Identify link with above and values for $k, p$ and $q$.

**Step 7: Check convergence condition**
$$pq = \frac{4}{3} \times \frac{3}{5} = \frac{4}{5}$$
Since $r = pq = \frac{4}{5} < 1$, the sum to infinity formula can be used.
- **[M1]** Attempt to find $r$ (and noting $r < 1$).

**Step 8: Calculate the sum to infinity**
$$S_{\infty} = \frac{k(1+p)}{1-pq} = \frac{6\left(1 + \frac{4}{3}\right)}{1 - \frac{4}{5}} = \frac{6 \times \frac{7}{3}}{\frac{1}{5}} = \frac{14}{\frac{1}{5}} = 70$$
- **[A1]** For an expression in $k, p$ or $q$, ft their values.
- **[A1]** For 70.

---
topic: "Parametric Equations"
subtopic: "Parametric equations"
---
### **Question 4**

The curve $C$ has parametric equations

$$x = \cos^2 t$$
$$y = \cos t \sin t$$

where $0 \le t < \pi$.

**(a)** Show that $C$ is a circle and find its centre and its radius. **(5)**

**Figure 1** _(A sketch of the circle C, with a rectangle R in the first quadrant having one vertex at the origin O, and the opposite vertex P on the circle C. The diagonal of R is OP.)_

Figure 1 shows a sketch of $C$. The point $P$, with coordinates $(\cos^2 \alpha, \cos\alpha \sin\alpha)$, $0 < \alpha < \frac{\pi}{2}$, lies on $C$. The rectangle $R$ has one side on the $x$-axis, one side on the $y$-axis and $OP$ as a diagonal, where $O$ is the origin.

**(b)** Show that the area of $R$ is $\sin\alpha \cos^3\alpha$. **(1)**

**(c)** Find the maximum area of $R$, as $\alpha$ varies. **(7)**

**(Total 13 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Express using double angle formulae**
$$2y = 2\sin t \cos t = \sin 2t$$
- **[M1]** Use of $\sin 2t$.
$$2x = 2\cos^2 t \Rightarrow 2x - 1 = 2\cos^2 t - 1 = \cos 2t$$
- **[M1]** Use of $\cos 2t$.

**Step 2: Eliminate $t$**
$$(2x - 1)^2 + (2y)^2 = \cos^2 2t + \sin^2 2t = 1$$
- **[M1]** Successfully eliminating $t$ and equation for circle.

**Step 3: Write in standard circle form**
$$\left(x - \frac{1}{2}\right)^2 + y^2 = \left(\frac{1}{2}\right)^2$$
So centre is $\left(\frac{1}{2}, 0\right)$, radius $r = \frac{1}{2}$.
- **[A1]** For centre.
- **[A1]** For radius.

#### **Alternative Method for (a)**

**Step 1: Relate $x^2 + y^2$**
$$x^2 + y^2 = \cos^4 t + \cos^2 t \sin^2 t = \cos^2 t(\cos^2 t + \sin^2 t) = \cos^2 t = x$$
- **[M1]** Expression in $x$ and $y$ for $\cos^2 t$ or $\sin^2 t$.
- **[M1]** Equation in just $x$ or $y$.

**Step 2: Complete the square**
$$\left(x - \frac{1}{2}\right)^2 + y^2 = \frac{1}{4}$$
- **[M1]** An attempt to complete the square.
Then as in main scheme.

#### **Part (b)**

**Step 4: Write down area**
$$\text{Area of } R = x_P \times y_P = \cos^2\alpha \times \sin\alpha \cos\alpha = \cos^3\alpha \sin\alpha$$
- **[B1]** Some evidence of $xy$ leading to given result.

#### **Part (c)**

**Step 5: Differentiate**
$$\frac{dA}{d\alpha} = \cos\alpha \cos^3\alpha - 3\cos^2\alpha \sin^2\alpha = \cos^4\alpha - 3\cos^2\alpha \sin^2\alpha$$
- **[M1]** For use of product rule.
- **[A1]** Correct derivative.

**Step 6: Set to 0 and solve**
$$\frac{dA}{d\alpha} = 0 \Rightarrow \cos^2\alpha(\cos^2\alpha - 3\sin^2\alpha) = 0$$
- **[M1]** For setting derivative $= 0$ and attempting to solve.
Since $0 < \alpha < \frac{\pi}{2}$, $\cos^2\alpha \ne 0$.
$$\cos^2\alpha - 3\sin^2\alpha = 0 \Rightarrow \tan^2\alpha = \frac{1}{3} \Rightarrow \alpha = \frac{\pi}{6} \quad (\text{or } 30^\circ)$$
- **[A1]** For "trig" $= \dots$
- **[A1]** For $\alpha = \frac{\pi}{6}$ (Can ignore $\alpha = \frac{\pi}{2}$ but consider for S+).

**Step 7: Check for maximum**
$$A'' = -2\sin\alpha \cos\alpha(3 - 8\cos^2\alpha) \text{ and show } < 0 \text{ for } \alpha = \frac{\pi}{6}$$
or argument based on $\alpha = \frac{\pi}{2}$ gives minimum so this is maximum.
- **[M1]** Some check that this value of $\alpha$ gives a max.

**Step 8: Calculate maximum area**
$$\text{Maximum area} = \sin\left(\frac{\pi}{6}\right) \cos^3\left(\frac{\pi}{6}\right) = \frac{3\sqrt{3}}{16}$$
- **[B1]** Single fraction with rational denominator.

---
topic: "Circles"
subtopic: "Intersections of straight lines and circles"
---
### **Question 5**

**Figure 2** _(A sketch of the curve $y = \frac{x^2-2}{x^2-4}$ showing three branches: a middle branch passing through U on the y-axis, and two outer branches. Vertical asymptotes are at $x = -2$ and $x = 2$, and a horizontal asymptote is at $y = 1$.)_

Figure 2 shows a sketch of the curve $C$ with equation

$$y = \frac{x^2-2}{x^2-4} \quad \text{and} \quad x \ne \pm 2$$

The curve cuts the $y$-axis at $U$.

**(a)** Write down the coordinates of the point $U$. **(1)**

The point $P$ with $x$-coordinate $a$ ($a \ne 0$) lies on $C$.

**(b)** Show that the normal to $C$ at $P$ cuts the $y$-axis at the point

$$\left(0, \left[\frac{a^2-2}{a^2-4} - \frac{(a^2-4)^2}{4}\right]\right)$$
**(6)**

The circle $E$, with centre on the $y$-axis, touches all three branches of $C$.

**(c)** **(i)** Show that

$$\left[\frac{a^2}{2(a^2-4)} - \frac{(a^2-4)^2}{4}\right]^2 = a^2 + \frac{(a^2-4)^4}{16}$$

**(ii)** Hence, show that

$$(a^2-4)^2 = 1$$

**(iii)** Find the centre and radius of $E$.
**(10)**

**(Total 17 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Find coordinates of $U$**
At $x = 0$, $y = \frac{-2}{-4} = \frac{1}{2}$. So $U$ is $\left(0, \frac{1}{2}\right)$.
- **[B1]** For y-coordinate.

#### **Part (b)**

**Step 2: Differentiate $y$**
$$\frac{dy}{dx} = \frac{(x^2-4)(2x) - (x^2-2)(2x)}{(x^2-4)^2} = \frac{-4x}{(x^2-4)^2}$$
- **[M1]** For attempt to differentiate (Two parts and one correct). Wrong formula used is M0.
- **[A1]** Correct simplified derivative.

**Step 3: Find gradient of normal**
$$\text{Gradient of normal at } P = \frac{(a^2-4)^2}{4a}$$
- **[M1]** Use of perpendicular gradient rule and $x = a$.

**Step 4: Find equation of normal**
$$y - \frac{a^2-2}{a^2-4} = \frac{(a^2-4)^2}{4a}(x - a)$$
- **[M1]** Attempt at equation of normal (can ft their changed gradient).

**Step 5: Find y-intercept**
Setting $x = 0$ gives:
$$y = \frac{a^2-2}{a^2-4} - \frac{(a^2-4)^2}{4}$$
- **[M1]** Clear use of $x = 0$ in normal.
- **[A1]** Correct solution only (cso), no incorrect working seen.

#### **Part (c)**

**Step 6: Set up circle properties**
No use of circle is 0/5 for (i).
Centre of $E$ is at $(0, k)$ where $k$ is the y-coordinate of the normal intersection from part (b):
$$k = \frac{a^2-2}{a^2-4} - \frac{(a^2-4)^2}{4}$$
- **[B1]** Centre is at $(0, k)$.
Since the circle touches the middle branch at $U\left(0, \frac{1}{2}\right)$, the radius is:
$$\text{Radius} = k - 0.5$$
- **[B1]** Radius $= y$-coordinate of their centre $- 0.5$ (May be implied by a sketch showing radius touches at $U$).

**Step 7: Express radius to $P$**
$$\text{Radius to } P = \sqrt{a^2 + \left(k - \frac{a^2-2}{a^2-4}\right)^2} = \sqrt{a^2 + \frac{(a^2-4)^4}{16}}$$
- **[M1]** Expression for radius from centre to $P$.

**Step 8: Equate radius expressions**
$$\left(\frac{a^2-2}{a^2-4} - \frac{1}{2} - \frac{(a^2-4)^2}{4}\right)^2 = a^2 + \frac{(a^2-4)^4}{16}$$
Since $\frac{a^2-2}{a^2-4} - \frac{1}{2} = \frac{a^2}{2(a^2-4)}$, this becomes:
$$\left[\frac{a^2}{2(a^2-4)} - \frac{(a^2-4)^2}{4}\right]^2 = a^2 + \frac{(a^2-4)^4}{16}$$
- **[M1]** For attempt at a suitable equation in $a$. (NB $r^2 = \text{LHS}$ implies B1B1).
- **[A1]** Correct solution only (cso).

**Step 9: Expand and simplify**
$$\frac{a^4}{4(a^2-4)^2} - \frac{a^2(a^2-4)^2}{4(a^2-4)} + \frac{(a^2-4)^4}{16} = a^2 + \frac{(a^2-4)^4}{16}$$
$$\frac{a^4}{4(a^2-4)^2} - \frac{a^2(a^2-4)}{4} = a^2$$
Divide by $a^2$ (since $a \ne 0$):
$$\frac{a^2}{4(a^2-4)^2} - \frac{a^2-4}{4} = 1$$
$$\frac{a^2}{4(a^2-4)^2} = 1 + \frac{a^2-4}{4} = \frac{a^2}{4}$$
Divide by $\frac{a^2}{4}$:
$$\frac{1}{(a^2-4)^2} = 1 \Rightarrow (a^2-4)^2 = 1$$
- **[M1]** Remove $\frac{(a^2-4)^4}{16}$ and cancel $a^2$.
- **[A1]** Correct solution only (cso).

**Step 10: Solve for $a^2$**
$$a^2 - 4 = \pm 1 \Rightarrow a^2 = 5 \text{ or } a^2 = 3$$
- **[A1]** For $a^2 = 5$ or better, $\sqrt{3}$ can be ignored and $\pm$ dependent on 3rd M1. [S+ for reason to reject $\sqrt{3}$].

**Step 11: Find centre and radius**
Using $a^2 = 5$:
$$k = \frac{5-2}{5-4} - \frac{(5-4)^2}{4} = 3 - \frac{1}{4} = \frac{11}{4}$$
$$\text{Radius} = k - \frac{1}{2} = \frac{11}{4} - \frac{2}{4} = \frac{9}{4}$$
So centre is $\left(0, \frac{11}{4}\right)$, radius is $\frac{9}{4}$.
- **[A1]** For centre.
- **[A1]** For radius. (Dependent on 3rd M1).

---
topic: "Vectors"
subtopic: "Solving geometric problems"
---
### **Question 6**

The line $L$ has equation

$$\mathbf{r} = \begin{pmatrix} 13 \\ -3 \\ -8 \end{pmatrix} + t \begin{pmatrix} -5 \\ 3 \\ 4 \end{pmatrix}$$

The point $P$ has position vector $\begin{pmatrix} -7 \\ 2 \\ 7 \end{pmatrix}$.

The point $P'$ is the reflection of $P$ in $L$.

**(a)** Find the position vector of $P'$. **(6)**

**(b)** Show that the point $A$ with position vector $\begin{pmatrix} -7 \\ 9 \\ 8 \end{pmatrix}$ lies on $L$. **(1)**

**(c)** Show that angle $PAP' = 120^\circ$. **(3)**

**Figure 3** _(A diagram showing a line L with points A and B on it. P and P' are symmetric points on opposite sides of L, forming a kite APBP' with angle PAP' = 120 degrees.)_

The point $B$ lies on $L$ and $APBP'$ forms a kite as shown in Figure 3.

The area of the kite is $50\sqrt{3}$.

**(d)** Find the position vector of the point $B$. **(5)**

**(e)** Show that angle $BPA = 90^\circ$. **(2)**

The circle $C$ passes through the points $A, P, P'$ and $B$.

**(f)** Find the position vector of the centre of $C$. **(2)**

**(Total 19 marks)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Find vector $\vec{PR}$**
Let $R$ be a general point on $L$:
$$\vec{PR} = \begin{pmatrix} 13 - 5t \\ -3 + 3t \\ -8 + 4t \end{pmatrix} - \begin{pmatrix} -7 \\ 2 \\ 7 \end{pmatrix} = \begin{pmatrix} 20 - 5t \\ -5 + 3t \\ -15 + 4t \end{pmatrix}$$
- **[M1]** Attempt vector $\vec{PR}$.
- **[A1]** Correct vector.

**Step 2: Set up dot product**
$$\begin{pmatrix} 20 - 5t \\ -5 + 3t \\ -15 + 4t \end{pmatrix} \cdot \begin{pmatrix} -5 \\ 3 \\ 4 \end{pmatrix} = 0$$
$$-100 + 25t - 15 + 9t - 60 + 16t = 0$$
$$50t = 175 \Rightarrow t = \frac{7}{2}$$
- **[M1]** Attempt suitable scalar product.
- **[A1]** Correct value of $t$.

**Step 3: Find position vector of $P'$**
If $X$ is the midpoint of $PP'$ (which is the projection of $P$ on $L$ at $t = \frac{7}{2}$):
$$\vec{OX} = \begin{pmatrix} 13 \\ -3 \\ -8 \end{pmatrix} + \frac{7}{2} \begin{pmatrix} -5 \\ 3 \\ 4 \end{pmatrix} = \begin{pmatrix} -9/2 \\ 15/2 \\ 6 \end{pmatrix}$$
$$\vec{OP'} = \vec{OP} + 2\vec{PX} = 2\vec{OX} - \vec{OP}$$
$$\vec{OP'} = 2 \begin{pmatrix} -9/2 \\ 15/2 \\ 6 \end{pmatrix} - \begin{pmatrix} -7 \\ 2 \\ 7 \end{pmatrix} = \begin{pmatrix} -2 \\ 13 \\ 5 \end{pmatrix}$$
- **[M1]** Strategy using known vectors.
- **[A1]** Correct position vector of $P'$.

#### **Part (b)**

**Step 4: Show $A$ lies on $L$**
$$\begin{pmatrix} -7 \\ 9 \\ 8 \end{pmatrix} = \begin{pmatrix} 13 - 5t \\ -3 + 3t \\ -8 + 4t \end{pmatrix} \Rightarrow 13 - 5t = -7 \Rightarrow t = 4$$
Check other components: $-3 + 3(4) = 9$, $-8 + 4(4) = 8$.
- **[B1]** Showing $t = 4$ works.

#### **Part (c)**

**Step 5: Find vectors $\vec{AP}$ and $\vec{AP'}$**
$$\vec{AP} = \begin{pmatrix} -7 \\ 2 \\ 7 \end{pmatrix} - \begin{pmatrix} -7 \\ 9 \\ 8 \end{pmatrix} = \begin{pmatrix} 0 \\ -7 \\ -1 \end{pmatrix}$$
$$\vec{AP'} = \begin{pmatrix} -2 \\ 13 \\ 5 \end{pmatrix} - \begin{pmatrix} -7 \\ 9 \\ 8 \end{pmatrix} = \begin{pmatrix} 5 \\ 4 \\ -3 \end{pmatrix}$$
- **[M1]** Attempt suitable vectors ($\pm$).

**Step 6: Calculate angle**
$$\vec{AP} \cdot \vec{AP'} = 0(5) + (-7)(4) + (-1)(-3) = -28 + 3 = -25$$
$$|\vec{AP}| = \sqrt{0 + 49 + 1} = \sqrt{50}$$
$$|\vec{AP'}| = \sqrt{25 + 16 + 9} = \sqrt{50}$$
$$\cos(PAP') = \frac{-25}{\sqrt{50}\sqrt{50}} = -0.5 \Rightarrow \angle PAP' = 120^\circ$$
- **[M1]** Attempt suitable scalar product ($\pm$).
- **[A1]** Correct solution only (cso), no incorrect working seen.

#### **Part (d)**

**Step 7: Find length of $PP'$**
$$|P P'| = \sqrt{5^2 + 11^2 + (-2)^2} = \sqrt{150} = 5\sqrt{6}$$
- **[B1]** Correct length of $PP'$.

**Step 8: Use area to find $AB$**
$$\text{Area} = \frac{1}{2} \times AB \times PP' = 50\sqrt{3} \Rightarrow \frac{1}{2} \times AB \times 5\sqrt{6} = 50\sqrt{3}$$
$$AB = 10\sqrt{2}$$
- **[M1]** Attempt $|PP'|$ (oe) or use $\sin 60^\circ$.
- **[A1]** Correct equation giving length of $AB$.

**Step 9: Find position vector of $B$**
Since $A$ is at $t = 4$, and the direction vector of $L$ is $\mathbf{d} = \begin{pmatrix} -5 \\ 3 \\ 4 \end{pmatrix}$ with magnitude $|\mathbf{d}| = \sqrt{50} = 5\sqrt{2}$.
The distance $AB = 10\sqrt{2} = 2|\mathbf{d}|$.
So $B$ corresponds to $t = 4 \pm 2$.
Since $B$ is on the opposite side of $X$ (midpoint of $PP'$ at $t = 3.5$) to $A$ ($t = 4$), we must have $t = 4 - 2 = 2$.
$$\vec{OB} = \begin{pmatrix} 13 \\ -3 \\ -8 \end{pmatrix} + 2 \begin{pmatrix} -5 \\ 3 \\ 4 \end{pmatrix} = \begin{pmatrix} 3 \\ 3 \\ 0 \end{pmatrix}$$
- **[M1]** Strategy for finding $B$.
- **[A1]** Correct position vector of $B$ (ignore $t = 6 \Rightarrow \begin{pmatrix} -17 \\ 15 \\ 16 \end{pmatrix}$).

#### **Part (e)**

**Step 10: Show angle is $90^\circ$**
$$\vec{AP} = \begin{pmatrix} 0 \\ -7 \\ -1 \end{pmatrix}$$
$$\vec{PB} = \begin{pmatrix} 3 \\ 3 \\ 0 \end{pmatrix} - \begin{pmatrix} -7 \\ 2 \\ 7 \end{pmatrix} = \begin{pmatrix} 10 \\ 1 \\ -7 \end{pmatrix}$$
$$\vec{AP} \cdot \vec{PB} = 0(10) + (-7)(1) + (-1)(-7) = -7 + 7 = 0$$
Since the scalar product is 0, the angle is $90^\circ$.
- **[M1]** Full method to find angle.
- **[A1]** Correct solution only (cso).

#### **Part (f)**

**Step 11: Find centre of $C$**
Since $\angle APB = 90^\circ$, $AB$ is a diameter of the circle $C$ (angle in a semicircle theorem).
The centre of $C$ is the midpoint of $AB$:
$$\text{Centre} = \frac{1}{2} \left[ \begin{pmatrix} -7 \\ 9 \\ 8 \end{pmatrix} + \begin{pmatrix} 3 \\ 3 \\ 0 \end{pmatrix} \right] = \begin{pmatrix} -2 \\ 6 \\ 4 \end{pmatrix}$$
- **[M1]** Using angle in semicircle theorem (S+ for mentioning).
- **[A1]** Correct position vector of the centre.

---
topic: "Functions and Graphs"
subtopic: "Inverse functions"
---
### **Question 7**

**Figure 4** _(A sketch of the curve y = f(x) with a vertical asymptote at x = 3. The curve has a minimum at A in the third quadrant and a maximum at B in the fourth quadrant.)_

**(a)** Figure 4 shows a sketch of the curve with equation $y = f(x)$, where

$$f(x) = \frac{x^2-5}{3-x} \quad x \in \mathbb{R}, x \ne 3$$

The curve has a minimum at the point $A$, with $x$-coordinate $\alpha$, and a maximum at the point $B$, with $x$-coordinate $\beta$.

Find the value of $\alpha$, the value of $\beta$ and the $y$-coordinates of the points $A$ and $B$. **(5)**

**(b)** The functions $g$ and $h$ are defined as follows:

$$g: x \to x + p \quad x \in \mathbb{R}$$
$$h: x \to |x| \quad x \in \mathbb{R}$$

where $p$ is a constant.

**Figure 5** _(A sketch of the curve y = h(fg(x)+q), which is symmetric about the y-axis and has two minimum points C and D on the x-axis.)_

Figure 5 shows a sketch of the curve with equation $y = h(fg(x)+q)$, $x \in \mathbb{R}, x \ne 0$, where $q$ is a constant. The curve is symmetric about the $y$-axis and has minimum points at $C$ and $D$.

**(i)** Find the value of $p$ and the value of $q$.

**(ii)** Write down the coordinates of $D$. **(5)**

**(c)** The function $m$ is given by

$$m(x) = \frac{x^2-5}{3-x} \quad x \in \mathbb{R}, x \le \alpha$$

where $\alpha$ is the $x$-coordinate of $A$ as found in part **(a)**.

**(i)** Find $m^{-1}$.

**(ii)** Write down the domain of $m^{-1}$.

**(iii)** Find the value of $t$ such that $m(t) = m^{-1}(t)$. **(10)**

**(Total 20 marks)**

### **Mark Scheme 7**

#### **Part (a)**

**Step 1: Differentiate $f(x)$**
$$\frac{dy}{dx} = \frac{(3-x)(2x) + (x^2-5)}{(3-x)^2} = \frac{-x^2 + 6x - 5}{(3-x)^2}$$
or $y = -3 - x + \frac{4}{3-x} \Rightarrow y' = -1 + \frac{4}{(3-x)^2}$
- **[M1]** For an attempt to differentiate.
- **[A1]** Any correct version.

**Step 2: Find stationary points**
$$y' = 0 \Rightarrow -x^2 + 6x - 5 = 0 \Rightarrow x = 1 \text{ or } 5$$
- **[M1]** Find stationary points.
So $\alpha = 1$, $\beta = 5$.
At $x = 1$, $y = -2$. So $A$ is $(1, -2)$.
At $x = 5$, $y = -10$. So $B$ is $(5, -10)$.
- **[A1]** For $A(1, -2)$.
- **[A1]** For $B(5, -10)$.

#### **Part (b)**

**Step 3: Determine $p$ and $q$**
Horizontal translation 3 to left so $p = 3$.
$$-2 + q = -(q - 10) \Rightarrow q = 6$$
- **[B1]** $p = 3$.
- **[M1]** For a correct identifiable strategy for $q$ (e.g. equation for $q$).
- **[A1]** $q = 6$.

**Step 4: Find coordinates of $D$**
$D$ is $(2, 4)$.
- **[B1]** For $x$-coordinate of $D$ is 2.
- **[B1]** For $y$-coordinate of $D$ is 4.

#### **Part (c)**

**Step 5: Find $m^{-1}(x)$**
Set $y = \frac{x^2-5}{3-x} \Rightarrow 3y - xy = x^2 - 5$
- **[M1]** Set $y = \dots$ and 1st step.
$$x^2 + yx - (3y + 5) = 0$$
Using the quadratic formula to solve for $x$:
$$x = \frac{-y \pm \sqrt{y^2 + 12y + 20}}{2}$$
- **[M1]** Isolate $x$'s or set up as 3TQ and attempt to solve for $x$.
- **[A1]** $x = \frac{-y \pm \sqrt{y^2 + 12y + 20}}{2}$ (Accept $+$, $-$ or $\pm$).
Since $x \le \alpha = 1$, we must choose the negative root:
$$m^{-1}(x) = \frac{-x - \sqrt{x^2 + 12x + 20}}{2}$$
- **[A1]** Must choose $-$ [S+ for reason for choosing $-$].

**Step 6: Domain of $m^{-1}$**
Domain is range of $m(x)$ i.e. $\{x \in \mathbb{R} : x \ge -2\}$.
- **[B1]** Domain is $x \ge -2$.

**Step 7: Find $t$**
If $m(t) = m^{-1}(t)$ then $m(t)$ intersects with $y = x$:
$$\frac{t^2-5}{3-t} = t$$
- **[M1]** Suitable strategy leading to an equation for $t$ (ft their $m^{-1}$).
$$t^2 - 5 = 3t - t^2 \Rightarrow 2t^2 - 3t - 5 = 0$$
- **[A1]** A correct quadratic equation.
$$(2t - 5)(t + 1) = 0$$
- **[M1]** Solving correct 3TQ.
- **[A1]** Correct factors.
$$t = -1 \quad (\text{or } 2.5)$$
Can't be $2.5$ since not in domain for $m(x)$.
- **[A1]** $t = -1$ only [S+ for reason].
