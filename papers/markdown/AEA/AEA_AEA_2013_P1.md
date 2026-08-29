---
topic: "Binomial Expansion"
subtopic: "Solving binomial problems"
---
### **Question 1**

In the binomial expansion of
$$ \left(1 + \frac{12n}{5}x\right)^n $$
the coefficients of $x^2$ and $x^3$ are equal and non-zero.

**(a)** Find the possible values of $n$. **(4)**

**(b)** State, giving a reason, which value of $n$ gives a valid expansion when $x = \frac{1}{2}$ **(2)**

**(Total 6 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Set up the equation for the coefficients of $x^2$ and $x^3$**
$$ \frac{n(n-1)}{2!} \left(\frac{12n}{5}\right)^2 = \frac{n(n-1)(n-2)}{3!} \left(\frac{12n}{5}\right)^3 $$
- **[M1]** For attempting suitable equation. Ignore $x$s but must use binomial.

**Step 2: Simplify the equation**
$$ 3 \times 5 = n(n-2) \times 12 \quad \text{or} \quad 4n^2 - 8n - 5 = 0 \quad \text{(o.e.)} $$
- **[A1]** Correct 3TQ in $n$. May be other factors.

**Step 3: Solve the quadratic equation**
$$ (2n+1)(2n-5) = 0 \Rightarrow n = -\frac{1}{2}, \frac{5}{2} $$
- **[dM1]** Dependent on 1st M1.
- **[A1]** Both & no others unless revoked later.

#### **Part (b)**

**Step 4: Check validity of expansion for both values of $n$**
For $n = -\frac{1}{2}$, we need $\left|\frac{12nx}{5}\right| < 1 \Rightarrow \left|-\frac{6}{5}x\right| < 1 \Rightarrow |x| < \frac{5}{6}$.
For $n = \frac{5}{2}$, we need $\left|\frac{12nx}{5}\right| < 1 \Rightarrow |6x| < 1 \Rightarrow |x| < \frac{1}{6}$.
Since $x = \frac{1}{2}$ satisfies $|x| < \frac{5}{6}$ but not $|x| < \frac{1}{6}$:
- **[M1]** Attempt both cases. Just check $n = -\frac{1}{2}$ (SC: **[B1]**).

So should choose $n = -\frac{1}{2}$.
- **[A1]** Correct choice with valid reason. (May sub $x = \frac{1}{2}$ and get $|n| < \frac{5}{6}$ for M1 and A1 for stating $n = -\frac{1}{2}$).

---
topic: "Trigonometric Identities and Equations"
subtopic: "Equations and identities"
---
### **Question 2**

**(a)** Use the formula for $\sin(A - B)$ to show that $\sin(90^\circ - x) = \cos x$ **(1)**

**(b)** Solve for $0 < \theta < 360^\circ$
$$ 2\sin(\theta + 17^\circ) = \frac{\cos(\theta + 8^\circ)}{\cos(\theta + 17^\circ)} $$
**(7)**

**(Total 8 marks)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Apply the compound angle formula**
$$ \sin(90^\circ - x) = \sin 90^\circ \cos x - \cos 90^\circ \sin x = 1 \cdot \cos x - 0 \cdot \sin x = \cos x $$
- **[B1]** One intermediate line.

#### **Part (b)**

**Step 2: Multiply by $\cos(\theta + 17^\circ)$ and use double angle formula**
$$ 2\sin(\theta + 17^\circ)\cos(\theta + 17^\circ) = \cos(\theta + 8^\circ) \Rightarrow \sin[2(\theta + 17^\circ)] = \cos(\theta + 8^\circ) $$
- **[M1]** Use of $\sin 2A = \dots$

**Step 3: Use the identity from part (a) to convert cosine to sine**
$$ \sin(2\theta + 34^\circ) = \sin[90^\circ - (\theta + 8^\circ)] \Rightarrow 2\theta + 34^\circ = 90^\circ - (\theta + 8^\circ) $$
- **[dM1]** Use of (a) – not trig $\theta$.

**Step 4: Solve the first equation**
$$ 3\theta = 82^\circ - 34^\circ = 48^\circ \Rightarrow \theta = 16^\circ $$
- **[A1]** Correct value of $\theta = 16^\circ$.

**Step 5: Set up the second equation for other solutions**
$$ 2\theta + 34^\circ = 180^\circ - [90^\circ - (\theta + 8^\circ)] \quad \text{or} \quad 2\theta + 34^\circ = [90^\circ - (\theta + 8^\circ)] + 360^\circ $$
- **[M1]** 2nd eqn for $\theta$.

**Step 6: Solve for other values of $\theta$**
$$ \theta = 98^\circ - 34^\circ \Rightarrow \theta = 64^\circ $$
- **[A1]** Correct value of $\theta = 64^\circ$.

$$ 3\theta = 48^\circ + 360^\circ \Rightarrow \theta = 136^\circ $$
- **[A1]** Correct value of $\theta = 136^\circ$.

$$ 3\theta = 48^\circ + 720^\circ \Rightarrow \theta = 256^\circ $$
- **[A1]** Correct value of $\theta = 256^\circ$.

**NB:** $\sin(2\theta + 34^\circ) - \sin(82^\circ - \theta)$ gives $2\cos[(\theta + 116^\circ)/2]\sin[(3\theta - 48^\circ)/2]$.
Then: $\theta/2 + 58^\circ = 90^\circ$ gets **[M1]** and e.g. $3\theta/2 - 24^\circ = 0$ gets **[M1]**.

---
topic: "Vectors"
subtopic: "Straight lines"
---
### **Question 3**

The lines $L_1$ and $L_2$ have equations given by
$$ L_1: \mathbf{r} = \begin{pmatrix} -7 \\ 7 \\ 1 \end{pmatrix} + \lambda \begin{pmatrix} 2 \\ 0 \\ -3 \end{pmatrix} \quad \text{and} \quad L_2: \mathbf{r} = \begin{pmatrix} 7 \\ p \\ -6 \end{pmatrix} + \mu \begin{pmatrix} 10 \\ -4 \\ -1 \end{pmatrix} $$
where $\lambda$ and $\mu$ are parameters and $p$ is a constant.

The two lines intersect at the point $C$.

**(a)** Find
**(i)** the value of $p$,
**(ii)** the position vector of $C$.
**(5)**

**(b)** Show that the point $B$ with position vector $\begin{pmatrix} -13 \\ 11 \\ -4 \end{pmatrix}$ lies on $L_2$. **(1)**

The point $A$ with position vector $\begin{pmatrix} -7 \\ 7 \\ 1 \end{pmatrix}$ lies on $L_1$.

**(c)** Find $\cos(\angle ACB)$, giving your answer as an exact fraction. **(3)**

The line $L_3$ bisects the angle $ACB$.

**(d)** Find a vector equation of $L_3$. **(4)**

**(Total 13 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Form equations from the $x$ and $z$ components**
$$ -7 + 2\lambda = 7 + 10\mu \quad \text{and} \quad 1 - 3\lambda = -6 - \mu \quad \text{(o.e.)} $$
- **[M1]** Form suitable equations.

**Step 2: Solve for $\lambda$ and $\mu$**
$$ \Rightarrow 14\mu = -14 \Rightarrow \mu = -1, \quad (\lambda = 2) $$
- **[M1]** For equation in 1 variable.
- **[A1]** Correct values of $\mu$ and $\lambda$.

**Step 3: Find $p$ using the $y$ component**
Check in 3rd equation: $7 = p - 4\mu \Rightarrow p = 3$
- **[A1]** Check in 3rd, $p = 3$.

**Step 4: Find the position vector of $C$**
$$ \mathbf{r}_C = \begin{pmatrix} -3 \\ 7 \\ -5 \end{pmatrix} $$
- **[A1]** Accept as coordinates.

#### **Part (b)**

**Step 5: Verify point $B$ lies on $L_2$**
$$ \mu = -2 \Rightarrow 7 - 2 \times 10 = -13, \quad 3 - 2 \times (-4) = 11 \quad \text{and} \quad -6 - 2 \times (-1) = -4 $$
- **[B1]** See $\mu = -2$ & answer.

#### **Part (c)**

**Step 6: Find vectors $\overrightarrow{CA}$ and $\overrightarrow{CB}$**
$$ \overrightarrow{CA} = \begin{pmatrix} -4 \\ 0 \\ 6 \end{pmatrix} \quad \text{and} \quad \overrightarrow{CB} = \begin{pmatrix} -10 \\ 4 \\ 1 \end{pmatrix} $$
$$ \overrightarrow{CA} \cdot \overrightarrow{CB} = 40 + 0 + 6 = 46 $$
- **[M1]** Attempts a suitable scalar product. Allow 1 sign slip. Allow $\pm$.

**Step 7: Calculate $\cos(\angle ACB)$**
$$ \cos(\angle ACB) = \frac{46}{\sqrt{52}\sqrt{117}} = \frac{46}{2\sqrt{13} \times 3\sqrt{13}} = \frac{23}{39} \quad \text{(o.e.)} $$
- **[dM1]** Allow $\pm$.
- **[A1]** For an exact fraction (no surds).

#### **Part (d)**

**Step 8: Form a rhombus to find the direction of the angle bisector**
Let $\overrightarrow{CM} = \frac{1}{2}\overrightarrow{CA}$ then $\overrightarrow{CD} = \overrightarrow{CB} + 3\overrightarrow{CM}$
- **[M1]** Attempt suitable rhombus or unit vectors.

**Step 9: Find the direction vector of $L_3$**
$$ \overrightarrow{CD} = \begin{pmatrix} -16 \\ 4 \\ 10 \end{pmatrix} \quad \text{or} \quad \overrightarrow{OD} = \begin{pmatrix} -19 \\ 11 \\ 5 \end{pmatrix} $$
- **[A1]** Correct direction vector or position vector of $D$.

**Step 10: Write the vector equation of $L_3$**
$$ \mathbf{r} = \overrightarrow{OC} + t\overrightarrow{CD} \Rightarrow \mathbf{r} = \begin{pmatrix} -3 \\ 7 \\ -5 \end{pmatrix} + t \begin{pmatrix} -8 \\ 2 \\ 5 \end{pmatrix} \quad \text{(o.e.)} $$
- **[dM1]** Dependent on 1st M1. For attempt equation of line.
- **[A1]** Correct equation.

---
topic: "Sequences and Series"
subtopic: "Geometric series"
---
### **Question 4**

A sequence of positive integers $a_1, a_2, a_3, \dots$ has $r$th term given by
$$ a_r = 2^r - 1 $$

**(a)** Write down the first 6 terms of this sequence. **(1)**

**(b)** Verify that $a_{r+1} = 2a_r + 1$ **(1)**

**(c)** Find $\sum_{r=1}^{n} a_r$ **(3)**

**(d)** Show that $\frac{1}{a_{r+1}} < \frac{1}{2} \times \frac{1}{a_r}$ **(1)**

**(e)** Hence show that $1 + \frac{1}{3} + \frac{1}{7} + \frac{1}{15} + \frac{1}{31} + \dots < 1 + \frac{1}{3} + \left(\frac{1}{7} + \frac{1}{7} \times \frac{1}{2} + \frac{1}{7} \times \frac{1}{4} + \dots\right)$ **(2)**

**(f)** Show that $\frac{31}{21} < \sum_{r=1}^{\infty} \frac{1}{a_r} < \frac{34}{21}$ **(5)**

**(Total 13 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Write down the first 6 terms**
$$ a_1 = 1, \quad a_2 = 3, \quad a_3 = 7, \quad a_4 = 15, \quad a_5 = 31, \quad a_6 = 63 $$
- **[B1]** All correct.

#### **Part (b)**

**Step 2: Verify the recurrence relation**
Sub: $a_{r+1} = 2^{r+1} - 1$
$$ 2a_r + 1 = 2(2^r - 1) + 1 = 2^{r+1} - 2 + 1 = 2^{r+1} - 1 $$
- **[B1cso]** Correct demonstration in $r$.

#### **Part (c)**

**Step 3: Find the sum of the sequence**
$$ \sum_{r=1}^{n} a_r = \sum_{r=1}^{n} 2^r - \sum_{r=1}^{n} 1 = \sum_{r=1}^{n} 2^r - n $$
- **[B1]** For $\sum 1 = n$.

$$ \sum_{r=1}^{n} 2^r = \frac{2(2^n - 1)}{2-1} \Rightarrow \sum_{r=1}^{n} a_r = 2(2^n - 1) - n \quad \text{(o.e.)} $$
- **[M1]** Use of GP formula.
- **[A1]** Any correct expression. A1 needs $-n$ too.

#### **Part (d)**

**Step 4: Prove the inequality**
$$ a_{r+1} = 2a_r + 1 \Rightarrow a_{r+1} > 2a_r \Rightarrow \frac{1}{a_{r+1}} < \frac{1}{2} \times \frac{1}{a_r} $$
- **[B1cso]** Or equivalent in words.

#### **Part (e)**

**Step 5: Apply the inequality to the terms**
$$ \frac{1}{a_4} < \frac{1}{2}\frac{1}{a_3} \quad \text{and} \quad \frac{1}{a_5} < \frac{1}{2}\frac{1}{a_4} < \left(\frac{1}{2}\right)^2 \frac{1}{a_3} $$
- **[M1]** Use of (d) to get any 2 inequalities for 4th and 5th terms.

So:
$$ \sum_{r=1}^{\infty} \frac{1}{a_r} < 1 + \frac{1}{3} + \frac{1}{7} + \frac{1}{7}\left(\frac{1}{2}\right) + \frac{1}{7}\left(\frac{1}{2}\right)^2 + \dots $$
- **[A1cso]** All 3 inequalities & no incorrect work.

#### **Part (f)**

**Step 6: Find the lower limit**
$$ \text{Lower limit} = 1 + \frac{1}{3} + \frac{1}{7} = \frac{31}{21} $$
- **[B1cso]** Correct lower limit.

**Step 7: Sum the geometric progression**
Identify GP: $a = \frac{1}{7}$, $r = \frac{1}{2}$
- **[M1]** Correct $r$ or $a$.

$$ S_{\infty} = \frac{\frac{1}{7}}{1 - \frac{1}{2}} = \frac{2}{7} $$
- **[dM1]** Attempt sum $|r| < 1$.
- **[A1]** Correct expression or sum.

**Step 8: Find the upper limit**
$$ \text{Upper limit} = 1 + \frac{1}{3} + \frac{2}{7} = \frac{34}{21} $$
- **[A1cso]** Correct upper limit.

---
topic: "Integration"
subtopic: "Solving differential equations"
---
### **Question 5**

In this question $u$ and $v$ are functions of $x$. Given that $\int u \, \mathrm{d}x$, $\int v \, \mathrm{d}x$ and $\int uv \, \mathrm{d}x$ satisfy
$$ \int uv \, \mathrm{d}x = \left(\int u \, \mathrm{d}x\right) \times \left(\int v \, \mathrm{d}x\right) \quad uv \neq 0 $$

**(a)** show that $1 = \frac{\int u \, \mathrm{d}x}{u} + \frac{\int v \, \mathrm{d}x}{v}$ **(3)**

Given also that $\frac{\int u \, \mathrm{d}x}{u} = \sin^2 x$,

**(b)** use part **(a)** to write down an expression, in terms of $x$, for $\frac{\int v \, \mathrm{d}x}{v}$, **(1)**

**(c)** show that
$$ \frac{1}{u}\frac{\mathrm{d}u}{\mathrm{d}x} = \frac{1 - 2\sin x \cos x}{\sin^2 x} $$
**(3)**

**(d)** hence use integration to show that $u = A \mathrm{e}^{-\cot x} \operatorname{cosec}^2 x$, where $A$ is an arbitrary constant. **(6)**

**(e)** By differentiating $\mathrm{e}^{\tan x}$ find a similar expression for $v$. **(2)**

**(Total 15 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Differentiate both sides of the given equation**
Differentiate: $uv = v \int u \, \mathrm{d}x + u \int v \, \mathrm{d}x$
- **[M1]** Attempt to differentiate.
- **[A1]** Correct product rule.

**Step 2: Divide by $uv$**
$$ \div uv \Rightarrow 1 = \frac{\int u \, \mathrm{d}x}{u} + \frac{\int v \, \mathrm{d}x}{v} \quad (*) $$
- **[A1cso]** Correct derivation.

#### **Part (b)**

**Step 3: Write down the expression for $v$**
$$ \frac{\int v \, \mathrm{d}x}{v} = \cos^2 x $$
- **[B1]** Correct expression. (S+ for $1 - c^2 = s^2$)

#### **Part (c)**

**Step 4: Differentiate the expression for $u$**
Diff. $u \sin^2 x = \int u \, \mathrm{d}x$ gives:
$$ u = \frac{\mathrm{d}u}{\mathrm{d}x} \sin^2 x + u(2\sin x \cos x) $$
- **[M1]** Multiply by $u$ and differentiate. Or quotient rule.

**Step 5: Rearrange to find $\frac{1}{u}\frac{\mathrm{d}u}{\mathrm{d}x}$**
$$ \frac{\mathrm{d}u}{\mathrm{d}x} \sin^2 x = u(1 - 2\sin x \cos x) \Rightarrow \frac{1}{u}\frac{\mathrm{d}u}{\mathrm{d}x} = \frac{1 - 2\sin x \cos x}{\sin^2 x} $$
- **[dM1]** Collect $u$ terms.
- **[A1cso]** Correct derivation.

#### **Part (d)**

**Step 6: Separate variables**
$$ \int \frac{1}{u} \, \mathrm{d}u = \int \left(\frac{1 - 2\sin x \cos x}{\sin^2 x}\right) \, \mathrm{d}x $$
- **[M1]** Separation of variables. Condone missing integral signs.

**Step 7: Prepare the RHS for integration**
$$ \text{RHS} = \int (\operatorname{cosec}^2 x - 2\cot x) \, \mathrm{d}x $$
- **[M1]** Prepares RHS.

**Step 8: Integrate both sides**
$$ \ln u = -\cot x - 2\ln \sin x + c $$
- **[A1, A1]** $+c$ on 2nd A1.

**Step 9: Combine logarithms**
$$ \ln(u \sin^2 x) = -\cot x + c $$
- **[M1]** Collect $\ln$ terms or remove $\ln$.

**Step 10: Solve for $u$**
$$ u = A \mathrm{e}^{-\cot x} \operatorname{cosec}^2 x $$
- **[A1cso]** No incorrect work.

#### **Part (e)**

**Step 11: Differentiate $\mathrm{e}^{\tan x}$**
$$ y = \mathrm{e}^{\tan x} \Rightarrow \frac{\mathrm{d}y}{\mathrm{d}x} = \mathrm{e}^{\tan x} \sec^2 x \quad \text{or} \quad \mathrm{e}^{\tan x} \frac{\mathrm{d}}{\mathrm{d}x}(\tan x) $$
- **[M1]** For differentiation.

**Step 12: Write down the expression for $v$**
Hence:
$$ v = B \mathrm{e}^{\tan x} \sec^2 x $$
- **[A1]** Condone $A$ not $B$ but S-.

---
topic: "Integration"
subtopic: "Definite integrals"
---
### **Question 6**

**(a)** Starting from $[f(x) - \lambda g(x)]^2 \ge 0$ show that $\lambda$ satisfies the quadratic inequality
$$ \left( \int_{a}^{b} [g(x)]^2 \, \mathrm{d}x \right) \lambda^2 - 2 \left( \int_{a}^{b} f(x)g(x) \, \mathrm{d}x \right) \lambda + \int_{a}^{b} [f(x)]^2 \, \mathrm{d}x \ge 0 $$
where $a$ and $b$ are constants and $\lambda$ can take any real value. **(2)**

**(b)** Hence prove that
$$ \left[ \int_{a}^{b} f(x)g(x) \, \mathrm{d}x \right]^2 \le \left[ \int_{a}^{b} [f(x)]^2 \, \mathrm{d}x \right] \times \left[ \int_{a}^{b} [g(x)]^2 \, \mathrm{d}x \right] $$
**(3)**

**(c)** By letting $f(x) = 1$ and $g(x) = (1 + x^3)^{\frac{1}{2}}$ show that
$$ \int_{-1}^{2} (1 + x^3)^{\frac{1}{2}} \, \mathrm{d}x \le \frac{9}{2} $$
**(4)**

**(d)** Show that $\int_{-1}^{2} x^2(1 + x^3)^{\frac{1}{4}} \, \mathrm{d}x = \frac{12\sqrt{3}}{5}$ **(3)**

**(e)** Hence show that
$$ \frac{144}{55} \le \int_{-1}^{2} (1 + x^3)^{\frac{1}{2}} \, \mathrm{d}x $$
**(4)**

**(Total 16 marks)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Expand the bracket**
$$ [f(x) - \lambda g(x)]^2 = [f(x)]^2 - 2\lambda f(x)g(x) + \lambda^2 [g(x)]^2 $$
- **[M1]** Attempt to multiply.

**Step 2: Integrate throughout**
Integrate $\mathrm{d}x$ throughout with inequality:
$$ \int_{a}^{b} [f(x) - \lambda g(x)]^2 \, \mathrm{d}x \ge 0 \Rightarrow \left( \int_{a}^{b} [g(x)]^2 \, \mathrm{d}x \right) \lambda^2 - 2 \left( \int_{a}^{b} f(x)g(x) \, \mathrm{d}x \right) \lambda + \int_{a}^{b} [f(x)]^2 \, \mathrm{d}x \ge 0 $$
- **[A1cso]** No incorrect work. (S+ for area comment)

#### **Part (b)**

**Step 3: Use the discriminant of the quadratic in $\lambda$**
Treat as quadratic in $\lambda$ and attempt to use discriminant:
- **[M1]** $\Delta$ & identify $a, b, c$.

Clear reason for use of $b^2 - 4ac \le 0$ (or $< 0$) e.g. "no real roots" (since the quadratic is always $\ge 0$):
- **[M1]** Reason for $\le 0$.

Giving:
$$ \left[ \int_{a}^{b} f(x)g(x) \, \mathrm{d}x \right]^2 \le \left[ \int_{a}^{b} [f(x)]^2 \, \mathrm{d}x \right] \times \left[ \int_{a}^{b} [g(x)]^2 \, \mathrm{d}x \right] \quad \text{(o.e.)} $$
- **[A1cso]** Condone $4$s.

#### **Part (c)**

**Step 4: Substitute $f(x) = 1$ and $g(x) = (1 + x^3)^{\frac{1}{2}}$**
Then:
$$ \left[ \int_{-1}^{2} (1 + x^3)^{\frac{1}{2}} \, \mathrm{d}x \right]^2 \le \left[ \int_{-1}^{2} (1 + x^3) \, \mathrm{d}x \right] \times \left[ \int_{-1}^{2} 1^2 \, \mathrm{d}x \right] $$
- **[M1]** Substitution.

**Step 5: Evaluate the integrals**
$$ \int_{-1}^{2} (1 + x^3) \, \mathrm{d}x = \left[ x + \frac{x^4}{4} \right]_{-1}^{2} = (2 + 4) - \left(-1 + \frac{1}{4}\right) = \frac{27}{4} $$
- **[M1, A1]** Integration 6.75 (o.e.)

$$ \int_{-1}^{2} 1 \, \mathrm{d}x = 3 $$
So:
$$ E^2 \le \frac{27}{4} \times 3 = \frac{81}{4} \Rightarrow E \le \frac{9}{2} $$
- **[A1cso]** Correct derivation.

#### **Part (d)**

**Step 6: Integrate by substitution or inspection**
Let $u = 1 + x^3 \Rightarrow \mathrm{d}u = 3x^2 \, \mathrm{d}x$.
$$ \int x^2(1+x^3)^{\frac{1}{4}} \, \mathrm{d}x = \frac{1}{3} \int u^{\frac{1}{4}} \, \mathrm{d}u = \frac{4}{15} (1+x^3)^{\frac{5}{4}} $$
- **[M1]** $k(\dots)$ and $5/4$ power.
- **[A1]** All correct.

**Step 7: Evaluate the definite integral**
$$ \left[ \frac{4}{15} (1+x^3)^{\frac{5}{4}} \right]_{-1}^{2} = \frac{4}{15} \left( 9^{\frac{5}{4}} - 0 \right) = \frac{12\sqrt{3}}{5} $$
- **[A1cso]** Must see one of the expressions between $\{..\}$ and the answer.

#### **Part (e)**

**Step 8: Choose appropriate $f(x)$ and $g(x)$**
Let $E = \int_{-1}^{2} (1+x^3)^{\frac{1}{2}} \, \mathrm{d}x$.
Choose $f(x) = (1+x^3)^{\frac{1}{4}}$ and $g(x) = x^2$.
- **[B1]** Suitable $f$ and $g$.

**Step 9: Apply the inequality from part (b)**
$$ \left[ \int_{-1}^{2} x^2(1+x^3)^{\frac{1}{4}} \, \mathrm{d}x \right]^2 \le \left[ \int_{-1}^{2} (1+x^3)^{\frac{1}{2}} \, \mathrm{d}x \right] \times \left[ \int_{-1}^{2} x^4 \, \mathrm{d}x \right] $$
- **[M1]** Suitable inequality for $E$.

**Step 10: Evaluate the integral of $x^4$**
$$ \int_{-1}^{2} x^4 \, \mathrm{d}x = \left[ \frac{x^5}{5} \right]_{-1}^{2} = \frac{32}{5} - \left(-\frac{1}{5}\right) = \frac{33}{5} $$
- **[M1]** Allow slip e.g. $\frac{16}{5} - \frac{1}{5}$ or $\frac{32}{5} - \frac{1}{5}$.

**Step 11: Solve for $E$**
$$ \left( \frac{12\sqrt{3}}{5} \right)^2 \le E \times \frac{33}{5} \Rightarrow \frac{144 \times 3}{25} \le E \times \frac{33}{5} \Rightarrow E \ge \frac{144}{55} $$
- **[A1cso]** Correct derivation.

---
topic: "Graphs and Transformations"
subtopic: "Transforming functions"
---
### **Question 7**

**Figure 1** _(A sketch of the curve $C_1$ with equation $y = \frac{x}{3} + \frac{12}{x}$, showing its two branches, with a minimum at $A$ in the first quadrant and a maximum at $B$ in the third quadrant, and asymptotes $x = 0$ and $y = \frac{x}{3}$.)_

```tikz
\begin{tikzpicture}[scale=0.8]
\draw[->] (-8,0) -- (8,0) node[below] {$x$};
\draw[->] (0,-8) -- (0,8) node[left] {$y$};
\draw[dashed, domain=-8:8] plot (\x, {\x/3});
\draw[domain=1.6:8, smooth, thick] plot (\x, {\x/3 + 12/\x});
\draw[domain=-8:-1.6, smooth, thick] plot (\x, {\x/3 + 12/\x});
\fill (6,4) circle (1.6pt) node[above right] {$A$};
\fill (-6,-4) circle (1.6pt) node[below left] {$B$};
\node at (-0.3,-0.3) {$O$};
\end{tikzpicture}
```

Figure 1 shows a sketch of the curve $C_1$ with equation $y = \mathrm{f}(x)$ where
$$ \mathrm{f}(x) = \frac{x}{3} + \frac{12}{x}, \quad x \neq 0 $$
The lines $x = 0$ and $y = \frac{x}{3}$ are asymptotes to $C_1$. The point $A$ on $C_1$ is a minimum and the point $B$ on $C_1$ is a maximum.

**(a)** Find the coordinates of $A$ and $B$. **(4)**

There is a normal to $C_1$, which does not intersect $C_1$ a second time, that has equation $x = k$, where $k > 0$.

**(b)** Write down the value of $k$. **(1)**

The point $P(\alpha, \beta)$, $\alpha > 0$ and $\alpha \neq k$, lies on $C_1$. The normal to $C_1$ at $P$ does not intersect $C_1$ a second time.

**(c)** Find the value of $\alpha$, leaving your answer in simplified surd form. **(5)**

**(d)** Find the equation of this normal. **(3)**

The curve $C_2$ has equation $y = |\mathrm{f}(x)|$

**(e)** Sketch $C_2$ stating the coordinates of any turning points and the equations of any asymptotes. **(4)**

The line with equation $y = mx + 1$ does not touch or intersect $C_2$.

**(f)** Find the set of possible values for $m$. **(5)**

**(Total 22 marks)**

### **Mark Scheme 7**

#### **Part (a)**

**Step 1: Differentiate $\mathrm{f}(x)$**
$$ \mathrm{f}'(x) = \frac{1}{3} - 12x^{-2} $$
- **[M1]** Some correct differentiation.

**Step 2: Find stationary points**
$$ \mathrm{f}'(x) = 0 \Rightarrow x^2 = 36 \Rightarrow x = \pm 6 $$
- **[M1]** $\mathrm{f}'(x) = 0$ to give $x^2 = \dots$

**Step 3: State coordinates of $A$ and $B$**
$$ A = (6, 4) \quad \text{and} \quad B = (-6, -4) $$
- **[A1]** For $+6$ or $(6, 4)$.
- **[A1]** Both correct (cso).

#### **Part (b)**

**Step 4: State the value of $k$**
$$ k = 6 \quad \text{(Allow } k = \pm 6\text{)} $$
- **[B1ft]**

#### **Part (c)**

**Step 5: Find the gradient of the normal and tangent**
Gradient of normal = $\frac{1}{3}$, so gradient of tangent must be $-3$.
- **[B1]** Gradient of normal = $\frac{1}{3}$.
- **[M1]** For perpendicular rule.

**Step 6: Set up the equation for the derivative**
$$ \frac{1}{3} - 12x^{-2} = -3 \quad \text{or} \quad \frac{-1}{\mathrm{f}'(x)} = \frac{1}{3} $$
- **[dM1]** Form a suitable equation using their $\mathrm{f}'(x)$.

**Step 7: Solve for $\alpha$**
$$ x^2 = \frac{36}{10} \Rightarrow \alpha = \frac{6}{\sqrt{10}} = \frac{3\sqrt{10}}{5} \quad \text{or} \quad 3\sqrt{\frac{2}{5}} $$
- **[dM1]** Solving suitable equation.
- **[A1]** $\alpha = \frac{3\sqrt{10}}{5}$ (or equivalent).

#### **Part (d)**

**Step 8: Find the $y$-coordinate $\beta$**
$$ \beta = \frac{\alpha}{3} + \frac{12}{\alpha} = \frac{\sqrt{10}}{5} + \frac{12\sqrt{10}}{6} = \frac{\sqrt{10}}{5} + 2\sqrt{10} = \frac{11\sqrt{10}}{5} $$
- **[M1]** Attempt $y$-coordinate.

**Step 9: Find the equation of the normal**
$$ y - \beta = \frac{1}{3}(x - \alpha) $$
- **[M1]** Follow through their $\alpha$ and $\beta$. Must be values and $m = \frac{1}{3}$.

$$ y = \frac{1}{3}x + 2\sqrt{10} \quad \text{(o.e.)} $$
- **[A1]** Correct equation.

#### **Part (e)**

**Step 10: Sketch $C_2$**
```tikz
\begin{tikzpicture}[scale=0.8]
\draw[->] (-8,0) -- (8,0) node[below] {$x$};
\draw[->] (0,-1) -- (0,8) node[left] {$y$};
\draw[dashed, domain=-8:8] plot (\x, {abs(\x/3)});
\draw[domain=1.6:8, smooth, thick] plot (\x, {\x/3 + 12/\x});
\draw[domain=-8:-1.6, smooth, thick] plot (\x, {-\x/3 - 12/\x});
\fill (6,4) circle (1.6pt) node[above right] {$(6,4)$};
\fill (-6,4) circle (1.6pt) node[above left] {$(-6,4)$};
\node at (-0.3,-0.3) {$O$};
\end{tikzpicture}
```
- **[B1]** Both branches correct shape.
- **[B1ft]** Turning points at $(6, 4)$ and $(-6, 4)$ (follow through their $A$ and $B$).
- **[B1, B1]** Asymptotes: $x = 0$, $y = \pm \frac{1}{3}x$. (-1 each omission, $y = \left|\frac{x}{3}\right|$ is OK).

#### **Part (f)**

**Step 11: Find the intersection of the line and the curve**
If the line $y = mx + 1$ intersects the curve, then:
$$ mx + 1 = \frac{x}{3} + \frac{12}{x} \Rightarrow (3m - 1)x^2 + 3x - 36 = 0 $$
- **[M1]** Attempt line = curve $\Rightarrow$ 3TQ.

**Step 12: Use the discriminant**
For no intersection, discriminant $< 0$:
$$ 9 - 4(3m - 1)(-36) < 0 $$
- **[M1]** Correct use of discriminant leading to inequality in $m$.

**Step 13: Solve the inequality**
$$ 9 + 144(3m - 1) < 0 \Rightarrow 144(3m - 1) < -9 \Rightarrow 3m - 1 < -\frac{1}{16} \Rightarrow 3m < \frac{15}{16} \Rightarrow m < \frac{5}{16} $$
- **[M1]** Solving to $m < k$.
- **[A1]** $m < \frac{5}{16}$.

**Step 14: Consider the other branch/asymptote**
From the sketch, the line must also not intersect the left branch. Since the line passes through $(0, 1)$, to avoid intersecting the left branch, we must have $m > -\frac{5}{16}$.
Thus:
$$ -\frac{5}{16} < m < \frac{5}{16} $$
- **[A1]** Both limits correct.

**ALT (f):**

**Step 11 (ALT): Use tangent method**
Tangent at $\left(\delta, \frac{\delta}{3} + \frac{12}{\delta}\right)$ goes through $(0, 1)$, gradient $= m = \mathrm{f}'(\delta)$.
- **[M1]** Use of limiting case: gradient of chord = gradient of tangent.

**Step 12 (ALT): Set up the equation**
$$ \frac{\frac{\delta}{3} + \frac{12}{\delta} - 1}{\delta} = \frac{1}{3} - \frac{12}{\delta^2} $$
- **[M1]** Correct equation.

**Step 13 (ALT): Solve for $\delta$**
$$ 3\delta = 72 \Rightarrow \delta = 24 \quad \text{or} \quad \delta = -24 $$
- **[M1]** Solve for $\delta$.

**Step 14 (ALT): Find $m$**
$$ m = \frac{1}{3} - \frac{12}{24^2} = \frac{5}{16} $$
Then as above.
