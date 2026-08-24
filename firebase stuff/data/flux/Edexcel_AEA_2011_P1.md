### **Question 1**

Solve for $0 \le \theta \le 180^\circ$ $\tan(\theta + 35^\circ) = \cot(\theta - 53^\circ)$ **(4)** **(Total 4 marks)**

### **Mark Scheme 1**

**Step 1: Convert to sine and cosine or use complementary angle identity** _Method 1:_ $\frac{\sin(\theta + 35^\circ)}{\cos(\theta + 35^\circ)} = \frac{\cos(\theta - 53^\circ)}{\sin(\theta - 53^\circ)}$

- **[M1]** Use of correct definitions for tan and cot.
    

$0 = \cos(\theta - 53^\circ)\cos(\theta + 35^\circ) - \sin(\theta + 35^\circ)\sin(\theta - 53^\circ)$

- **[M1]** Use of $\cos(A+B)$ rule to reach a single trig function.
    

$0 = \cos(2\theta - 53^\circ + 35^\circ) = \cos(2\theta - 18^\circ)$

- **[A1, A1]** A1 for $54^\circ$ and A1 for $144^\circ$.
    

_Method 2:_ $\tan(\theta + 35^\circ) = \tan(90^\circ - (\theta - 53^\circ))$

- **[M1]** Use of $\cot x = \tan(90^\circ - x)$ (either side).
    

Equate arguments: $\theta + 35^\circ = 90^\circ - (\theta - 53^\circ) \quad \text{or} \quad \theta + 35^\circ = 90^\circ - (\theta - 53^\circ) + 180^\circ$

- **[M1]** Sets up equations for principal and secondary values.
    

$2\theta = 108^\circ \Rightarrow \theta = 54^\circ$ $2\theta = 288^\circ \Rightarrow \theta = 144^\circ$

- **[A1, A1]** A1 for $54^\circ$, A1 for $144^\circ$.
    

### **Question 2**

Given that $\int_{0}^{\frac{\pi}{2}} \left(1 + \tan\left[\frac{1}{2}x\right]\right)^2 dx = a + \ln b$ find the value of $a$ and the value of $b$. **(7)** **(Total 7 marks)**

### **Mark Scheme 2**

**Step 1: Expand the integrand** $\left(1 + \tan\left[\frac{1}{2}x\right]\right)^2 = 1 + 2\tan\left(\frac{1}{2}x\right) + \tan^2\left(\frac{1}{2}x\right)$

- **[M1]** Attempt to multiply 3 terms, at least 2 correct.
    

**Step 2: Use trigonometric identities** Use $\sec^2 a = 1 + \tan^2 a$: $= \sec^2\left(\frac{1}{2}x\right) + 2\tan\left(\frac{1}{2}x\right)$

- **[M1]** Applies the identity.
    

**Step 3: Integrate** $\int \left( \sec^2\left(\frac{1}{2}x\right) + 2\tan\left(\frac{1}{2}x\right) \right) dx = 2\tan\left(\frac{1}{2}x\right) + 4\ln\left|\sec\left(\frac{1}{2}x\right)\right|$

- **[M1, A1]** M1 for attempt to integrate. A1 for all correct.
    

**Step 4: Apply limits** $\int_{0}^{\frac{\pi}{2}} (\dots) dx = \left( 2\tan\left(\frac{\pi}{4}\right) + 4\ln\left|\sec\left(\frac{\pi}{4}\right)\right| \right) - (0 + 4\ln|1|)$

- **[M1]** Use of limit $\pi/2$ (so angle evaluated is $\pi/4$) seen.
    

$= 2(1) + 4\ln(\sqrt{2}) = 2 + 4\left(\frac{1}{2}\ln 2\right) = 2 + 2\ln 2 = 2 + \ln 4$

- **[M1]** Evaluates logarithms correctly (provided some integration attempt was made).
    

**Step 5: State a and b** $a = 2$ $b = 4$ (Accept $2\ln 2$ for the term, so $b = 4$).

- **[A1]** Correct values for $a$ and $b$.
    

### **Question 3**

A sequence ${u_n}$ is given by $u_1 = k$ $u_{2n} = u_{2n-1} \times p \quad n \ge 1$ $u_{2n+1} = u_{2n} \times q \quad n \ge 1$ where $k$, $p$ and $q$ are positive constants with $pq \ne 1$.

**(a)** Write down the first 6 terms of this sequence. **(3)**

**(b)** Show that $\sum_{r=1}^{2n} u_r = \frac{k(1+p)(1-(pq)^n)}{1-pq}$ **(6)**

In part (c) $[x]$ means the integer part of $x$, so for example $[2.73] = 2$, $[4] = 4$ and $[0] = 0$.

**(c)** Find $\sum_{r=1}^{\infty} 6 \times \left(\frac{4}{3}\right)^{\left[\frac{r}{2}\right]} \times \left(\frac{3}{5}\right)^{\left[\frac{r-1}{2}\right]}$ **(4)** **(Total 13 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Generate the terms** $u_1 = k, \quad u_2 = kp, \quad u_3 = kpq, \quad u_4 = kp^2q, \quad u_5 = kp^2q^2, \quad u_6 = kp^3q^2$

- **[M1, A2/1/0]** M1 for first 3 terms. A2 for all correct (-1 for each error/omission for the next 3).
    

#### **Part (b)**

**Step 2: Split into two geometric progressions** The sum of the first $2n$ terms can be grouped into odd and even indices. Odd terms: $k + kpq + kp^2q^2 + \dots$ (this is a GP with first term $a = k$ and common ratio $r = pq$). Even terms: $kp + kp^2q + kp^3q^2 + \dots$ (this is a GP with first term $a = kp$ and common ratio $r = pq$).

- **[M1, A1]** M1 for splitting into 2 series. A1 for 1st $a$ and $r$.
    
- **[M1, A1]** M1 for identifying 2nd GP. A1 for 2nd $a$ and $r$.
    

**Step 3: Sum the two GPs** Both GPs have $n$ terms. $S_{\text{odd}} = \frac{k(1 - (pq)^n)}{1 - pq}$ $S_{\text{even}} = \frac{kp(1 - (pq)^n)}{1 - pq}$

- **[M1]** Use of $S_n$ formula twice.
    

**Step 4: Combine and factorize** $\sum_{r=1}^{2n} u_r = S_{\text{odd}} + S_{\text{even}} = \frac{k(1 - (pq)^n)}{1 - pq} + \frac{kp(1 - (pq)^n)}{1 - pq}$ $= \frac{k(1+p)(1-(pq)^n)}{1-pq} \quad (*)$

- **[A1 cso]** No incorrect working seen.
    

#### **Part (c)**

**Step 5: Identify the sequence parameters** Evaluate the first few terms: $r=1$: $6 \times (4/3)^0 \times (3/5)^0 = 6$ $r=2$: $6 \times (4/3)^1 \times (3/5)^0 = 6(4/3)$ $r=3$: $6 \times (4/3)^1 \times (3/5)^1 = 6(4/3)(3/5)$ Identify the link with the sequence above: $k = 6$, $p = \frac{4}{3}$, $q = \frac{3}{5}$.

- **[B1]** Identifies link and values for $k, p, q$.
    

**Step 6: Evaluate sum to infinity** The common ratio of the double-step is $r = pq = \frac{4}{3} \times \frac{3}{5} = \frac{4}{5}$. Since $r < 1$, the sum to infinity formula can be used.

- **[M1]** Attempt to find $r$.
    

$S_\infty = \lim_{n \to \infty} \frac{k(1+p)(1-(pq)^n)}{1-pq} = \frac{k(1+p)}{1-pq}$ $S_\infty = \frac{6(1 + 4/3)}{1 - 4/5} = \frac{6(7/3)}{1/5} = \frac{14}{1/5} = 70$

- **[A1, A1]** A1 for an expression in $k, p, q$. A1 for exactly $70$.
    

### **Question 4**

The curve $C$ has parametric equations $x = \cos^2 t$ $y = \cos t \sin t$ where $0 \le t < \pi$.

**(a)** Show that $C$ is a circle and find its centre and its radius. **(5)**

Figure 1 shows a sketch of $C$. The point $P$, with coordinates $(\cos^2 \alpha, \cos \alpha \sin \alpha)$, $0 < \alpha < \frac{\pi}{2}$, lies on $C$. The rectangle $R$ has one side on the x-axis, one side on the y-axis and $OP$ as a diagonal, where $O$ is the origin.

**(b)** Show that the area of $R$ is $\sin \alpha \cos^3 \alpha$. **(1)**

**(c)** Find the maximum area of $R$, as $\alpha$ varies. **(7)** **(Total 13 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Eliminate the parameter t** Use double angle identities: $2y = 2\cos t \sin t = \sin 2t$

- **[M1]** Use of $\sin 2t$.
    

$2x = 2\cos^2 t \Rightarrow 2x - 1 = 2\cos^2 t - 1 = \cos 2t$

- **[M1]** Use of $\cos 2t$.
    

**Step 2: Form the Cartesian equation** Since $\sin^2 2t + \cos^2 2t = 1$: $(2y)^2 + (2x - 1)^2 = 1$

- **[M1]** Successfully eliminating $t$ and forming equation for circle.
    

$4y^2 + 4\left(x - \frac{1}{2}\right)^2 = 1 \Rightarrow y^2 + \left(x - \frac{1}{2}\right)^2 = \frac{1}{4}$

**Step 3: State centre and radius** $\text{Centre } = \left(\frac{1}{2}, 0\right)$

- **[A1]** Correct centre.
    

$\text{Radius } = \frac{1}{2}$

- **[A1]** Correct radius.
    

#### **Part (b)**

**Step 4: Area of Rectangle** The width is $x = \cos^2 \alpha$ and height is $y = \cos \alpha \sin \alpha$. $\text{Area of } R = x \times y = \cos^2 \alpha \times \cos \alpha \sin \alpha = \sin \alpha \cos^3 \alpha \quad (*)$

- **[B1]** Area expression properly shown.
    

#### **Part (c)**

**Step 5: Differentiate the Area** Let $A = \sin \alpha \cos^3 \alpha$. Using the product rule: $\frac{dA}{d\alpha} = \cos \alpha (\cos^3 \alpha) + \sin \alpha (-3\cos^2 \alpha \sin \alpha) = \cos^4 \alpha - 3\sin^2 \alpha \cos^2 \alpha$

- **[M1, A1]** M1 for use of product rule. A1 for correct derivative.
    

**Step 6: Find stationary points** Set the derivative to zero for maximum area: $\cos^2 \alpha (\cos^2 \alpha - 3\sin^2 \alpha) = 0$

- **[M1]** Setting derivative to 0 and attempting to solve.
    

Since $0 < \alpha < \pi/2$, $\cos \alpha \ne 0$. $\cos^2 \alpha - 3\sin^2 \alpha = 0 \Rightarrow \tan^2 \alpha = \frac{1}{3} \Rightarrow \tan \alpha = \frac{1}{\sqrt{3}}$

- **[A1]** Correct ratio $\tan^2 \alpha = 1/3$ or equivalent.
    

$\alpha = \frac{\pi}{6} \quad (\text{or } 30^\circ)$

- **[M1]** Finds angle $\alpha$.
    

**Step 7: Calculate the Maximum Area** Substitute $\alpha = \pi/6$ back into the area formula: $A_{\text{max}} = \sin\left(\frac{\pi}{6}\right) \cos^3\left(\frac{\pi}{6}\right) = \left(\frac{1}{2}\right) \left(\frac{\sqrt{3}}{2}\right)^3 = \frac{1}{2} \times \frac{3\sqrt{3}}{8}$ $A_{\text{max}} = \frac{3\sqrt{3}}{16}$

- **[A1]** Correct exact maximum area.
    

### **Question 5**

Figure 2 shows a sketch of the curve $C$ with equation $y = \frac{x^2 - 2}{x^2 - 4} \quad \text{and } x \ne \pm 2$ The curve cuts the y-axis at $U$.

**(a)** Write down the coordinates of the point $U$. **(1)**

The point $P$ with x-coordinate $a$ ($a \ne 0$) lies on $C$.

**(b)** Show that the normal to $C$ at $P$ cuts the y-axis at the point $\left( 0, \frac{a^2 - 2}{a^2 - 4} - \frac{(a^2 - 4)^2}{4} \right)$ **(6)**

The circle $E$, with centre on the y-axis, touches all three branches of $C$. **(c)** (i) Show that $\left[ \frac{a^2}{2(a^2 - 4)} - \frac{(a^2 - 4)^2}{4} \right]^2 = a^2 + \frac{(a^2 - 4)^4}{16}$ **(4)** (ii) Hence, show that $(a^2 - 4)^2 = 1$ **(4)** (iii) Find the centre and radius of $E$. **(2)** **(Total 17 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Find coordinates of U** Substitute $x = 0$: $y = \frac{0 - 2}{0 - 4} = \frac{1}{2}$ $U = \left(0, \frac{1}{2}\right)$

- **[B1]** Correct coordinates for $U$.
    

#### **Part (b)**

**Step 2: Differentiate the curve equation** $\frac{dy}{dx} = \frac{(x^2 - 4)(2x) - (x^2 - 2)(2x)}{(x^2 - 4)^2} = \frac{-4x}{(x^2 - 4)^2}$

- **[M1, A1]** M1 for attempt to diff (quotient rule). A1 for correct simplified numerator.
    

**Step 3: Find the gradient of the normal** At $x = a$, gradient of tangent is $m_t = \frac{-4a}{(a^2 - 4)^2}$. Gradient of normal is $m_n = -\frac{1}{m_t} = \frac{(a^2 - 4)^2}{4a}$.

- **[M1]** Use of perpendicular gradient rule.
    

**Step 4: Equation of the normal** The point $P$ is $\left(a, \frac{a^2 - 2}{a^2 - 4}\right)$. $y - \frac{a^2 - 2}{a^2 - 4} = \frac{(a^2 - 4)^2}{4a} (x - a)$

- **[M1]** Attempt at equation of normal.
    

**Step 5: Find y-intercept** Set $x = 0$: $y = \frac{a^2 - 2}{a^2 - 4} + \frac{(a^2 - 4)^2}{4a}(-a) = \frac{a^2 - 2}{a^2 - 4} - \frac{(a^2 - 4)^2}{4} \quad (*)$

- **[M1, A1 cso]** M1 for setting $x=0$. A1 for no incorrect working leading to result.
    

#### **Part (c)**

**(i)** **Step 6: Set up geometric properties of the circle** The circle $E$ is centered on the y-axis at $(0, k)$. Since it touches the middle branch at $U(0, 1/2)$, its radius $r$ must vertically connect the center to $U$. Thus, $r = k - 1/2$.

- **[B1]** Identifies $r = k - 0.5$.
    

**Step 7: Distance to point P** The circle touches the other branches at $P(a, y_p)$. The normal at $P$ must pass through the center of the circle, so $k$ is the y-intercept of the normal found in (b). $k = \frac{a^2 - 2}{a^2 - 4} - \frac{(a^2 - 4)^2}{4}$

- **[B1]** Matches $k$ to the normal's y-intercept.
    

The radius squared is $r^2 = a^2 + (y_p - k)^2$. $(y_p - k)^2 = \left(\frac{(a^2 - 4)^2}{4}\right)^2 = \frac{(a^2 - 4)^4}{16}$

- **[M1]** Expression for radius squared from center to P.
    

And $r = k - 1/2 = \left( \frac{a^2 - 2}{a^2 - 4} - \frac{1}{2} \right) - \frac{(a^2 - 4)^2}{4} = \frac{a^2}{2(a^2 - 4)} - \frac{(a^2 - 4)^2}{4}$. Equating $r^2$ from both sides: $\left[ \frac{a^2}{2(a^2 - 4)} - \frac{(a^2 - 4)^2}{4} \right]^2 = a^2 + \frac{(a^2 - 4)^4}{16} \quad (*)$

- **[A1 cso]** Full equation assembled and verified.
    

**(ii)** **Step 8: Expand and simplify** $\frac{a^4}{4(a^2 - 4)^2} - \frac{a^2(a^2 - 4)}{4} + \frac{(a^2 - 4)^4}{16} = a^2 + \frac{(a^2 - 4)^4}{16}$

- **[M1]** Expands the bracket.
    

$\frac{a^4}{4(a^2 - 4)^2} - \frac{a^2(a^2 - 4)}{4} = a^2$

- **[M1]** Cancels $(a^2-4)^4/16$.
    

Divide by $a^2$: $\frac{a^2}{4(a^2 - 4)^2} - \frac{a^2 - 4}{4} = 1$

- **[A1]** Cancels $a^2$.
    

$\frac{a^2}{4(a^2 - 4)^2} = 1 + \frac{a^2 - 4}{4} = \frac{a^2}{4}$ $\Rightarrow \frac{1}{(a^2 - 4)^2} = 1 \Rightarrow (a^2 - 4)^2 = 1 \quad (*)$

- **[A1 cso]** Correct completion of algebraic manipulation.
    

**(iii)** **Step 9: Find center and radius** $a^2 - 4 = \pm 1 \Rightarrow a^2 = 5 \quad (\text{reject } 3 \text{ as } x^2 > 4 \text{ for outer branches})$

- **[M1]** Solves for $a^2$.
    

Substitute $a^2 = 5$ into $k$ and $r$: $k = \frac{5 - 2}{5 - 4} - \frac{(5 - 4)^2}{4} = 3 - \frac{1}{4} = \frac{11}{4}$ Centre is $(0, \frac{11}{4})$. Radius $r = \frac{11}{4} - \frac{2}{4} = \frac{9}{4}$.

- **[A1, A1]** A1 for centre, A1 for radius.
    

### **2010 AEA Mathematics Paper 1**

### **Question 1**

**(a)** Solve the equation $\sqrt{3x+16} = 3 + \sqrt{x+1}$ **(5)**

**(b)** Solve the equation $\log_3(x-7) - \frac{1}{2}\log_3 x = 1 - \log_3 2$ **(7)** **(Total 12 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Square both sides** $3x + 16 = 9 + x + 1 + 6\sqrt{x+1}$

- **[M1]** Initial squaring both sides.
    

**Step 2: Collect terms** $2x + 6 = 6\sqrt{x+1} \Rightarrow x + 3 = 3\sqrt{x+1}$

- **[A1]** Correct collecting of terms.
    

**Step 3: Square again** $(x+3)^2 = 9(x+1) \Rightarrow x^2 + 6x + 9 = 9x + 9$

- **[M1]** Second squaring.
    

$x^2 - 3x = 0 \Rightarrow x(x - 3) = 0$ $x = 0 \quad \text{or} \quad x = 3$

- **[A1, B1]** A1 for both values. B1 for valid completion (S+ for checking values in original equation).
    

#### **Part (b)**

**Step 4: Use log rules** $\frac{1}{2}\log_3 x = \log_3 \sqrt{x}$

- **[B1]** For use of $n\log x$ rule.
    

$\log_3(x-7) - \log_3 \sqrt{x} = \log_3\left(\frac{x-7}{\sqrt{x}}\right)$

- **[M1]** For reducing $x$s to a single log.
    

**Step 5: Remove logarithms** Since $1 - \log_3 2 = \log_3 3 - \log_3 2 = \log_3(3/2)$: $\frac{x-7}{\sqrt{x}} = \frac{3}{2}$

- **[M1, A1]** M1 for getting out of logs. A1 for correct equation.
    

**Step 6: Solve quadratic in root x** $2x - 14 = 3\sqrt{x} \Rightarrow 2(\sqrt{x})^2 - 3\sqrt{x} - 14 = 0$

- **[M1]** Attempt to solve suitable 3TQ in $x$ or $\sqrt{x}$.
    

$(2\sqrt{x} - 7)(\sqrt{x} + 2) = 0$ $\sqrt{x} = \frac{7}{2} \quad (\text{reject } -2)$

- **[A1]** Either solution for $\sqrt{x}$.
    

$x = \frac{49}{4}$

- **[A1]** 49/4 only. (S+ for clear reason for rejecting negative square root).
    

### **Question 2**

The sum of the first $p$ terms of an arithmetic series is $q$ and the sum of the first $q$ terms of the same arithmetic series is $p$, where $p$ and $q$ are positive integers and $p \ne q$. Giving simplified answers in terms of $p$ and $q$, find **(a)** the common difference of the terms in this series, **(5)** **(b)** the first term of the series, **(3)** **(c)** the sum of the first $(p+q)$ terms of the series. **(3)** **(Total 11 marks)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Set up arithmetic sum equations** $q = \frac{p}{2}(2a + (p-1)d) \quad \text{and} \quad p = \frac{q}{2}(2a + (q-1)d)$

- **[M1, A1]** M1 for attempting one sum formula. A1 for both correct expressions.
    

**Step 2: Eliminate a** Divide by $p/2$ and $q/2$ respectively: $\frac{2q}{p} = 2a + (p-1)d \quad \text{and} \quad \frac{2p}{q} = 2a + (q-1)d$ Subtract the second from the first: $2\left(\frac{q}{p} - \frac{p}{q}\right) = d(p - 1 - q + 1) = d(p - q)$

- **[dM1, A1]** Eliminate $a$ using 2 independent equations; correct elimination of $a$.
    

**Step 3: Solve for d** $d(p - q) = 2\left(\frac{q^2 - p^2}{pq}\right) = \frac{-2(p - q)(p + q)}{pq}$ $d = \frac{-2(p+q)}{pq}$

- **[A1]** Correct simplified $d$.
    

#### **Part (b)**

**Step 4: Solve for a** Substitute $d$ back into one of the equations: $2a = \frac{2q}{p} - (p-1)\left(\frac{-2(p+q)}{pq}\right) = \frac{2q}{p} + \frac{2(p-1)(p+q)}{pq}$

- **[M1]** Substitute for $d$ in a correct sum formula.
    

$a = \frac{q}{p} + \frac{(p-1)(p+q)}{pq} = \frac{q^2 + p^2 + pq - p - q}{pq}$

- **[dM1, A1]** Rearrange to $a = \dots$ and provide correct single fraction.
    

#### **Part (c)**

**Step 5: Calculate sum of p+q terms** $S_{p+q} = \frac{p+q}{2}(2a + (p+q-1)d)$

- **[M1]** Attempt sum formula with $n = p+q$.
    

$= \frac{p+q}{2} \left[ \frac{2(q^2 + pq + p^2 - p - q)}{pq} - \frac{2(p+q)(p+q-1)}{pq} \right]$

- **[M1]** Attempt to simplify with denominator $pq$ or $2pq$.
    

$= \frac{p+q}{pq} [q^2 + pq + p^2 - p - q - (p^2 + 2pq + q^2 - p - q)] = \frac{p+q}{pq} [-pq]$ $= -(p+q)$

- **[A1]** Correct simplification to $-(p+q)$.
    

### **Question 3**

The curve $C$ has equation $x^2 + y^2 + fxy = g^2$ where $f$ and $g$ are constants and $g \ne 0$.

**(a)** Find an expression in terms of $\alpha$, $\beta$ and $f$ for the gradient of $C$ at the point $(\alpha, \beta)$. **(4)**

Given that $f < 2$ and $f \ne -2$ and that the gradient of $C$ at the point $(\alpha, \beta)$ is 1, **(b)** show that $\alpha = -\beta = \frac{\pm g}{\sqrt{(2-f)}}$. **(4)**

Given that $f = -2$, **(c)** sketch $C$. **(3)** **(Total 11 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Implicit differentiation** $2x + 2y\frac{dy}{dx} + fy + fx\frac{dy}{dx} = 0$

- **[M1, A1]** M1 for correct attempt to differentiate $y^2$ or $xy$. A1 for fully correct and $=0$.
    

**Step 2: Isolate dy/dx** $\frac{dy}{dx}(2y + fx) = -(2x + fy) \Rightarrow \frac{dy}{dx} = -\frac{2x + fy}{2y + fx}$

- **[dM1]** Isolate $y'$.
    

**Step 3: Substitute point** At $(\alpha, \beta)$, gradient $m$ is: $m = -\frac{2\alpha + f\beta}{2\beta + f\alpha}$

- **[A1]** Correct expression.
    

#### **Part (b)**

**Step 4: Apply gradient m = 1** $1 = -\frac{2\alpha + f\beta}{2\beta + f\alpha} \Rightarrow 2\beta + f\alpha = -2\alpha - f\beta$

- **[M1]** Sub $m=1$ and form linear equation.
    

$2\alpha + f\alpha + 2\beta + f\beta = 0 \Rightarrow (\alpha + \beta)(2 + f) = 0$ Since $f \ne -2$, we have $\alpha + \beta = 0 \Rightarrow \alpha = -\beta$.

- **[A1 cso]** Correct conclusion.
    

**Step 5: Substitute into curve equation** $\alpha^2 + (-\alpha)^2 + f(\alpha)(-\alpha) = g^2$

- **[M1]** Sub into curve equation.
    

$2\alpha^2 - f\alpha^2 = g^2 \Rightarrow \alpha^2(2 - f) = g^2$ $\alpha^2 = \frac{g^2}{2 - f} \Rightarrow \alpha = \pm \frac{g}{\sqrt{2 - f}}$ Thus, $\alpha = -\beta = \frac{\pm g}{\sqrt{2-f}} \quad (*)$.

- **[A1 cso]** Simplify to answer.
    

#### **Part (c)**

**Step 6: Substitute f = -2** $x^2 + y^2 - 2xy = g^2 \Rightarrow (x - y)^2 = g^2$

- **[M1]** Attempt to complete the square/factorize.
    

$x - y = \pm g \Rightarrow y = x - g \quad \text{and} \quad y = x + g$

- **[A1, A1]** Two parallel straight lines with gradient 1, intersecting y-axis at $\pm g$.
    

### **Question 5**

$I = \int \frac{1}{(x-1)\sqrt{x^2 - 1}} dx, \quad x > 1$

**(a)** Use the substitution $x = 1 + u^{-1}$ to show that $I = -\left(\frac{x+1}{x-1}\right)^{\frac{1}{2}} + c$ **(7)**

**(b)** Hence show that $\int_{\sec \alpha}^{\sec \beta} \frac{1}{(x-1)\sqrt{x^2 - 1}} dx = \cot\left(\frac{\alpha}{2}\right) - \cot\left(\frac{\beta}{2}\right), \quad 0 < \alpha < \beta < \frac{\pi}{2}$ **(5)** **(Total 12 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Calculate differential for substitution** $x = 1 + u^{-1} \Rightarrow \frac{dx}{du} = -u^{-2}$

- **[B1]** Correct $dx/du$.
    

**Step 2: Substitute into integrand** $x - 1 = u^{-1}$ $x^2 - 1 = (1 + u^{-1})^2 - 1 = 1 + 2u^{-1} + u^{-2} - 1 = 2u^{-1} + u^{-2}$ $I = \int \frac{1}{u^{-1} \sqrt{2u^{-1} + u^{-2}}} (-u^{-2}) du$

- **[M1]** Attempt to get $I$ in $u$ only.
    

**Step 3: Simplify the integral** $I = \int \frac{-u^{-1}}{\sqrt{u^{-2}(2u + 1)}} du = \int \frac{-u^{-1}}{u^{-1}\sqrt{2u + 1}} du = -\int \frac{1}{\sqrt{2u + 1}} du$

- **[A1]** Correct simplified expression in $u$ only.
    

**Step 4: Integrate** $I = -\int (1 + 2u)^{-1/2} du = -(1 + 2u)^{1/2} + c$

- **[M1, A1]** Attempt to integrate; correct integration.
    

**Step 5: Convert back to x** Since $u = \frac{1}{x-1}$: $1 + 2u = 1 + \frac{2}{x-1} = \frac{x - 1 + 2}{x-1} = \frac{x+1}{x-1}$ $I = -\left(\frac{x+1}{x-1}\right)^{\frac{1}{2}} + c \quad (*)$

- **[M1, A1 cso]** Sub back in $x$s; correct final expression including $+ c$.
    

#### **Part (b)**

**Step 6: Evaluate with limits** At $x = \sec \theta$: $\frac{\sec \theta + 1}{\sec \theta - 1} = \frac{1/\cos \theta + 1}{1/\cos \theta - 1} = \frac{1 + \cos \theta}{1 - \cos \theta}$

- **[M1, M1]** Use of part (a) and multiply by $\cos x$.
    

**Step 7: Apply half-angle identities** Using $1 + \cos \theta = 2\cos^2(\theta/2)$ and $1 - \cos \theta = 2\sin^2(\theta/2)$: $\frac{1 + \cos \theta}{1 - \cos \theta} = \frac{2\cos^2(\theta/2)}{2\sin^2(\theta/2)} = \cot^2\left(\frac{\theta}{2}\right)$

- **[M1]** Use of half angle formulae.
    

**Step 8: Final evaluation** $I = -\sqrt{\cot^2\left(\frac{\theta}{2}\right)} = -\cot\left(\frac{\theta}{2}\right)$

- **[M1]** Correct removal of $\sqrt{}$.
    

Apply limits $\sec \beta$ and $\sec \alpha$: $\left[ -\cot\left(\frac{\theta}{2}\right) \right]_\alpha^\beta = -\cot\left(\frac{\beta}{2}\right) - \left(-\cot\left(\frac{\alpha}{2}\right)\right) = \cot\left(\frac{\alpha}{2}\right) - \cot\left(\frac{\beta}{2}\right)$

- **[A1 cso]** Accurate final evaluation.
    

### **Question 6**

**(a)** Given that $x^4 + y^4 = 1$, prove that $x^2 + y^2$ is a maximum when $x = \pm y$, and find the maximum and minimum values of $x^2 + y^2$. **(7)**

**(b)** On the same diagram, sketch the curves $C_1$ and $C_2$ with equations $x^4 + y^4 = 1$ and $x^2 + y^2 = 1$ respectively. **(2)**

**(c)** Write down the equation of the circle $C_3$, centre the origin, which touches the curve $C_1$ at the points where $x = \pm y$. **(1)** **(Total 10 marks)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Set up the area/value to maximize** Let $A = x^2 + y^2$. Since $x^4 + y^4 = 1 \Rightarrow y^2 = \sqrt{1 - x^4}$. $A = x^2 + \sqrt{1 - x^4}$

- **[B1]** $A$ as a function of $x$ only.
    

**Step 2: Differentiate** $\frac{dA}{dx} = 2x + \frac{1}{2}(1 - x^4)^{-1/2}(-4x^3) = 2x - \frac{2x^3}{\sqrt{1 - x^4}}$

- **[M1, A1]** Some correct differentiation; correct derivative.
    

**Step 3: Find stationary points** Set $\frac{dA}{dx} = 0$: $2x = \frac{2x^3}{\sqrt{1 - x^4}} \Rightarrow \sqrt{1 - x^4} = x^2 \Rightarrow 1 - x^4 = x^4 \Rightarrow 2x^4 = 1 \Rightarrow x^4 = \frac{1}{2}$ Since $y^4 = 1 - x^4 = 1/2$, we have $x^4 = y^4 \Rightarrow x = \pm y$.

- **[M1, A1]** Reaching $x^4 = 1/2$ or $x = \pm y$.
    

**Step 4: Find maximum and minimum values** Max value occurs at $x = \pm y$. $x^2 + y^2 = \frac{1}{\sqrt{2}} + \frac{1}{\sqrt{2}} = \frac{2}{\sqrt{2}} = \sqrt{2}$

- **[B1]** Max is $\sqrt{2}$.
    

Min value occurs at $x = 0$ (or $y = 0$). $A = 0 + 1 = 1$

- **[B1]** Min is $1$.
    

#### **Part (b)**

**Step 5: Sketch the curves** $x^2 + y^2 = 1$ is a unit circle. $x^4 + y^4 = 1$ resembles a "squircle". It matches the unit circle at $(\pm 1, 0)$ and $(0, \pm 1)$ and lies entirely outside the circle everywhere else, bound within the square $x=\pm 1, y=\pm 1$.

- **[B1]** Circle, centre $(0,0)$, $r=1$.
    
- **[B1]** Squircle curve outside the circle, touching at axes.
    

#### **Part (c)**

**Step 6: Equation of circle C3** The points where $x = \pm y$ are the maximum distance from the origin, which is $\sqrt{2}$. The circle touching here has radius $\sqrt{\sqrt{2}} = 2^{1/4}$. Wait, $x^2 + y^2 = \sqrt{2}$ IS the squared radius! Thus, equation is: $x^2 + y^2 = \sqrt{2}$

- **[B1]** Correct equation.