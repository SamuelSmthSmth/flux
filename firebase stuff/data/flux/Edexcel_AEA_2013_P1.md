### **Question 1**

In the binomial expansion of $\left(1 + \frac{12n}{5}x\right)^n$ the coefficients of $x^2$ and $x^3$ are equal and non-zero.

**(a)** Find the possible values of $n$. **(4)**

**(b)** State, giving a reason, which value of $n$ gives a valid expansion when $x = \frac{1}{2}$. **(2)** **(Total 6 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Set up the equation for coefficients** The coefficient of $x^2$ is $\frac{n(n-1)}{2!} \left(\frac{12n}{5}\right)^2$. The coefficient of $x^3$ is $\frac{n(n-1)(n-2)}{3!} \left(\frac{12n}{5}\right)^3$. Equating them: $\frac{n(n-1)}{2} \left(\frac{12n}{5}\right)^2 = \frac{n(n-1)(n-2)}{6} \left(\frac{12n}{5}\right)^3$

- **[M1]** For attempting a suitable equation. Ignore $x$s but must use binomial theorem.
    

**Step 2: Simplify and solve for n** Since the coefficients are non-zero, $n \ne 0$ and $n \ne 1$. We can divide by $\frac{n(n-1)}{2} \left(\frac{12n}{5}\right)^2$: $1 = \frac{n-2}{3} \left(\frac{12n}{5}\right)$ $15 = 12n(n-2) \Rightarrow 15 = 12n^2 - 24n \Rightarrow 4n^2 - 8n - 5 = 0$

- **[A1]** Correct 3-term quadratic in $n$.
    

**Step 3: Factorise and find roots** $(2n + 1)(2n - 5) = 0$

- **[dM1]** Depends on 1st M1. Solves quadratic.
    

$n = -\frac{1}{2}, \quad \frac{5}{2}$

- **[A1]** Both values found and no others.
    

#### **Part (b)**

**Step 4: Check validity conditions** For a valid expansion of $(1 + ax)^n$ where $n$ is not a positive integer, we need $|ax| < 1$. If $n = -\frac{1}{2}$, $\left| \frac{12(-1/2)x}{5} \right| = \left| -\frac{6x}{5} \right| < 1 \Rightarrow |x| < \frac{5}{6}$. If $n = \frac{5}{2}$, $\left| \frac{12(5/2)x}{5} \right| = \left| 6x \right| < 1 \Rightarrow |x| < \frac{1}{6}$.

- **[M1]** Attempt both cases.
    

**Step 5: Conclude based on x = 1/2** Since $x = 1/2$, $1/2$ is less than $5/6$ but not less than $1/6$. So we should choose: $n = -\frac{1}{2}$

- **[A1]** Correct choice with valid reasoning. _(May substitute $x = 1/2$ directly to get $|n| < 5/6$ for M1 and A1 for stating $n = -1/2$)._
    

### **Question 2**

**(a)** Use the formula for $\sin(A-B)$ to show that $\sin(90^\circ - x) = \cos x$. **(1)**

**(b)** Solve for $0 < \theta < 360^\circ$ $2\sin(\theta + 17^\circ) = \frac{\cos(\theta + 8^\circ)}{\cos(\theta + 17^\circ)}$ **(7)** **(Total 8 marks)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Apply compound angle formula** $\sin(90^\circ - x) = \sin 90^\circ \cos x - \cos 90^\circ \sin x = (1)\cos x - (0)\sin x = \cos x$

- **[B1]** One intermediate line demonstrating the formula.
    

#### **Part (b)**

**Step 2: Rearrange and apply double angle formula** Multiply by $\cos(\theta + 17^\circ)$: $2\sin(\theta + 17^\circ)\cos(\theta + 17^\circ) = \cos(\theta + 8^\circ)$ Use the double angle formula $\sin 2A = 2\sin A\cos A$: $\sin(2(\theta + 17^\circ)) = \cos(\theta + 8^\circ)$ $\sin(2\theta + 34^\circ) = \cos(\theta + 8^\circ)$

- **[M1]** Use of $\sin 2A$ formula.
    

**Step 3: Convert cosine to sine using part (a)** Using $\cos x = \sin(90^\circ - x)$: $\sin(2\theta + 34^\circ) = \sin(90^\circ - (\theta + 8^\circ))$

- **[dM1]** Use of (a), not trig equations.
    

**Step 4: Solve for principal value** Equate the arguments: $2\theta + 34^\circ = 90^\circ - \theta - 8^\circ = 82^\circ - \theta$ $3\theta = 82^\circ - 34^\circ = 48^\circ$ $\theta = 16^\circ$

- **[A1]** First correct solution.
    

**Step 5: Find secondary values** Other solutions for $\sin A = \sin B$ are $A = 180^\circ - B + 360^\circ k$ or $A = B + 360^\circ k$. Case 2: $2\theta + 34^\circ = 180^\circ - (82^\circ - \theta)$ $2\theta + 34^\circ = 98^\circ + \theta \Rightarrow \theta = 64^\circ$

- **[M1, A1]** Forms second equation and finds $\theta = 64^\circ$.
    

Case 3: $2\theta + 34^\circ = 82^\circ - \theta + 360^\circ$ $3\theta = 48^\circ + 360^\circ = 408^\circ \Rightarrow \theta = 136^\circ$

- **[A1]** Third correct solution.
    

Case 4: $2\theta + 34^\circ = 98^\circ + \theta + 360^\circ$ $\theta = 64^\circ + 360^\circ = 424^\circ$ (out of range).

Case 5: $2\theta + 34^\circ = 82^\circ - \theta + 720^\circ$ $3\theta = 48^\circ + 720^\circ = 768^\circ \Rightarrow \theta = 256^\circ$

- **[A1]** Fourth correct solution.
    

### **Question 3**

The lines $L_1$ and $L_2$ have equations given by $L_1: \mathbf{r} = \begin{pmatrix} -7 \\ 7 \\ 1 \end{pmatrix} + \lambda \begin{pmatrix} 2 \\ 0 \\ -3 \end{pmatrix}$ and $L_2: \mathbf{r} = \begin{pmatrix} 7 \\ p \\ -6 \end{pmatrix} + \mu \begin{pmatrix} 10 \\ -4 \\ -1 \end{pmatrix}$ where $\lambda$ and $\mu$ are parameters and $p$ is a constant. The two lines intersect at the point $C$.

**(a)** Find (i) the value of $p$, (ii) the position vector of $C$. **(5)**

**(b)** Show that the point $B$ with position vector $\begin{pmatrix} -13 \\ 11 \\ -4 \end{pmatrix}$ lies on $L_2$. **(1)**

The point $A$ with position vector $\begin{pmatrix} -7 \\ 7 \\ 1 \end{pmatrix}$ lies on $L_1$. **(c)** Find $\cos(\angle ACB)$, giving your answer as an exact fraction. **(3)**

The line $L_3$ bisects the angle $ACB$. **(d)** Find a vector equation of $L_3$. **(4)** **(Total 13 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Set up simultaneous equations** Equate components of $L_1$ and $L_2$: $-7 + 2\lambda = 7 + 10\mu$ $7 = p - 4\mu$ $1 - 3\lambda = -6 - \mu$

- **[M1]** Forms suitable equations.
    

**Step 2: Solve for lambda and mu** From the first and third equations: Multiply the third by 10: $10 - 30\lambda = -60 - 10\mu$. Add to the first: $(-7 + 2\lambda) + (10 - 30\lambda) = (7 + 10\mu) + (-60 - 10\mu)$. $3 - 28\lambda = -53 \Rightarrow -28\lambda = -56 \Rightarrow \lambda = 2$

- **[M1, A1]** M1 for equation in 1 variable; A1 for $\lambda = 2$. Substitute $\lambda = 2$ into first: $-7 + 4 = 7 + 10\mu \Rightarrow -3 = 7 + 10\mu \Rightarrow 10\mu = -10 \Rightarrow \mu = -1$.
    

**Step 3: Find p** Check in the 2nd equation: $7 = p - 4(-1) \Rightarrow p + 4 = 7 \Rightarrow p = 3$

- **[A1]** Correct value for $p$.
    

**Step 4: Find C** Substitute $\lambda = 2$ into $L_1$: $\overrightarrow{OC} = \begin{pmatrix} -7 + 4 \\ 7 + 0 \\ 1 - 6 \end{pmatrix} = \begin{pmatrix} -3 \\ 7 \\ -5 \end{pmatrix}$

- **[A1]** Correct position vector for $C$ (accept as coordinates).
    

#### **Part (b)**

**Step 5: Show B is on L2** Substitute $\mathbf{r} = \begin{pmatrix} -13 \\ 11 \\ -4 \end{pmatrix}$ into $L_2$: $7 + 10\mu = -13 \Rightarrow 10\mu = -20 \Rightarrow \mu = -2$ Check y: $3 - 4(-2) = 11$ (matches). Check z: $-6 - (-2) = -4$ (matches).

- **[B1]** See $\mu = -2$ and confirms it works for all coordinates.
    

#### **Part (c)**

**Step 6: Find vectors CA and CB** $\overrightarrow{CA} = \mathbf{a} - \mathbf{c} = \begin{pmatrix} -7 \\ 7 \\ 1 \end{pmatrix} - \begin{pmatrix} -3 \\ 7 \\ -5 \end{pmatrix} = \begin{pmatrix} -4 \\ 0 \\ 6 \end{pmatrix}$ $\overrightarrow{CB} = \mathbf{b} - \mathbf{c} = \begin{pmatrix} -13 \\ 11 \\ -4 \end{pmatrix} - \begin{pmatrix} -3 \\ 7 \\ -5 \end{pmatrix} = \begin{pmatrix} -10 \\ 4 \\ 1 \end{pmatrix}$

- **[M1]** Attempts a suitable scalar product using correct vectors.
    

**Step 7: Calculate Dot Product and Magnitudes** $\overrightarrow{CA} \cdot \overrightarrow{CB} = (-4)(-10) + (0)(4) + (6)(1) = 40 + 0 + 6 = 46$ $|\overrightarrow{CA}| = \sqrt{16 + 0 + 36} = \sqrt{52} = 2\sqrt{13}$ $|\overrightarrow{CB}| = \sqrt{100 + 16 + 1} = \sqrt{117} = 3\sqrt{13}$

- **[dM1]** Calculates dot product and magnitudes (allow 1 sign slip).
    

**Step 8: Find cosine** $\cos(\angle ACB) = \frac{46}{\sqrt{52}\sqrt{117}} = \frac{46}{2\sqrt{13} \times 3\sqrt{13}} = \frac{46}{6 \times 13} = \frac{46}{78} = \frac{23}{39}$

- **[A1]** Correct exact fraction (no surds).
    

#### **Part (d)**

**Step 9: Find angle bisector direction** Form a rhombus or use unit vectors. Since $|\overrightarrow{CB}| = 3\sqrt{13}$ and $|\overrightarrow{CA}| = 2\sqrt{13}$, we can scale $CA$ to match $CB$'s length, or scale them to unit vectors. Let $M$ be a point on $CA$ extended such that $|\overrightarrow{CM}| = |\overrightarrow{CB}|$. $\overrightarrow{CM} = \frac{3}{2}\overrightarrow{CA} = \begin{pmatrix} -6 \\ 0 \\ 9 \end{pmatrix}$ The direction of the bisector is the diagonal of the rhombus formed by $\overrightarrow{CB}$ and $\overrightarrow{CM}$. Let's call the diagonal direction vector $\mathbf{d}$. $\mathbf{d} = \overrightarrow{CB} + \overrightarrow{CM} = \begin{pmatrix} -10 \\ 4 \\ 1 \end{pmatrix} + \begin{pmatrix} -6 \\ 0 \\ 9 \end{pmatrix} = \begin{pmatrix} -16 \\ 4 \\ 10 \end{pmatrix}$ This can be simplified to $\begin{pmatrix} -8 \\ 2 \\ 5 \end{pmatrix}$.

- **[M1, A1]** Attempt suitable rhombus or unit vectors; correct direction vector.
    

**Step 10: Form line equation** $\mathbf{r} = \overrightarrow{OC} + t \mathbf{d}$ $\mathbf{r} = \begin{pmatrix} -3 \\ 7 \\ -5 \end{pmatrix} + t \begin{pmatrix} -8 \\ 2 \\ 5 \end{pmatrix}$

- **[dM1, A1]** Attempt equation of line; correct final equation.
    

### **Question 4**

A sequence of positive integers $a_1, a_2, a_3, \dots$ has $r$-th term given by $a_r = 2^r - 1$

**(a)** Write down the first 6 terms of this sequence. **(1)**

**(b)** Verify that $a_{r+1} = 2a_r + 1$. **(1)**

**(c)** Find $\sum_{r=1}^{n} a_r$. **(3)**

**(d)** Show that $\frac{1}{a_{r+1}} < \frac{1}{2} \times \frac{1}{a_r}$. **(1)**

**(e)** Hence show that $1 + \frac{1}{3} + \frac{1}{7} + \frac{1}{15} + \frac{1}{31} + \dots < 1 + \frac{1}{3} + \left(\frac{1}{7} + \frac{1/2}{7} + \frac{1/4}{7} + \dots \right)$. **(2)**

**(f)** Show that $\frac{31}{21} < \sum_{r=1}^{\infty} \frac{1}{a_r} < \frac{34}{21}$ **(5)** **(Total 13 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Write terms** $a_1 = 1, \quad a_2 = 3, \quad a_3 = 7, \quad a_4 = 15, \quad a_5 = 31, \quad a_6 = 63$

- **[B1]** Correct values.
    

#### **Part (b)**

**Step 2: Verify recurrence** $2a_r + 1 = 2(2^r - 1) + 1 = 2^{r+1} - 2 + 1 = 2^{r+1} - 1 = a_{r+1}$

- **[B1 cso]** Correct demonstration in $r$.
    

#### **Part (c)**

**Step 3: Sum the sequence** $\sum_{r=1}^{n} a_r = \sum_{r=1}^{n} (2^r - 1) = \sum_{r=1}^{n} 2^r - \sum_{r=1}^{n} 1$

- **[B1]** Uses $\sum 1 = n$.
    

Using the geometric progression formula for $\sum 2^r$: $\sum_{r=1}^{n} 2^r = \frac{2(2^n - 1)}{2 - 1} = 2(2^n - 1) = 2^{n+1} - 2$

- **[M1]** Use of GP formula.
    

$\sum_{r=1}^{n} a_r = 2(2^n - 1) - n$

- **[A1]** Any correct expression.
    

#### **Part (d)**

**Step 4: Prove inequality** From (b), $a_{r+1} = 2a_r + 1$. Since $a_r$ are positive integers, $a_{r+1} > 2a_r$. Taking reciprocals reverses the inequality: $\frac{1}{a_{r+1}} < \frac{1}{2a_r} = \frac{1}{2} \times \frac{1}{a_r}$

- **[B1 cso]** Correct reasoning (or equivalent in words).
    

#### **Part (e)**

**Step 5: Apply inequality iteratively** From (d), $\frac{1}{a_4} < \frac{1}{2} \times \frac{1}{a_3} = \frac{1/2}{7}$. And $\frac{1}{a_5} < \frac{1}{2} \times \frac{1}{a_4} < \frac{1}{4} \times \frac{1}{a_3} = \frac{1/4}{7}$.

- **[M1]** Use of (d) to get inequality for 4th and 5th terms.
    

Summing these up: $\sum_{r=1}^{\infty} \frac{1}{a_r} < 1 + \frac{1}{3} + \frac{1}{7} + \frac{1/2}{7} + \frac{1/4}{7} + \dots$

- **[A1 cso]** All inequalities correctly shown with no incorrect work.
    

#### **Part (f)**

**Step 6: Lower Limit** The sum to infinity must be strictly greater than the sum of its first few positive terms. Using the first 3 terms: $\text{Lower limit} = 1 + \frac{1}{3} + \frac{1}{7} = \frac{21 + 7 + 3}{21} = \frac{31}{21}$

- **[B1 cso]** Correctly establishes lower bound.
    

**Step 7: Upper Limit** The upper bound series from (e) contains a geometric progression starting from the 3rd term: $\frac{1}{7} + \frac{1/2}{7} + \frac{1/4}{7} + \dots$ This is a GP with $a = 1/7$ and $r = 1/2$.

- **[M1]** Identifies GP with correct $r$ or $a$.
    

Sum to infinity of this GP: $S_\infty = \frac{a}{1 - r} = \frac{1/7}{1 - 1/2} = \frac{1/7}{1/2} = \frac{2}{7}$

- **[dM1, A1]** Attempts sum of infinite GP; correct value $2/7$.
    

Thus, the upper limit is: $1 + \frac{1}{3} + \frac{2}{7} = \frac{21 + 7 + 6}{21} = \frac{34}{21}$

- **[A1 cso]** Correctly concludes the upper bound.
    

### **Question 5**

In this question $u$ and $v$ are functions of $x$. Given that $\int u dx$ and $\int v dx$ satisfy $\int uv dx = \left(\int u dx\right) \times \left(\int v dx\right) \quad (uv \ne 0)$

**(a)** show that $1 = \frac{\int u dx}{u} + \frac{\int v dx}{v}$ **(3)**

Given also that $\frac{\int u dx}{u} = \sin^2 x$

**(b)** use part (a) to write down an expression, in terms of $x$, for $\frac{\int v dx}{v}$. **(1)**

**(c)** show that $\frac{1}{u}\frac{du}{dx} = \frac{1 - 2\sin x \cos x}{\sin^2 x}$ **(3)**

**(d)** hence use integration to show that $u = A e^{-\cot x} \csc^2 x$, where $A$ is an arbitrary constant. **(6)**

**(e)** By differentiating $e^{\tan x}$ find a similar expression for $v$. **(2)** **(Total 15 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Differentiate the given identity** Given $\int uv dx = \left(\int u dx\right) \left(\int v dx\right)$. Differentiate both sides with respect to $x$. The LHS becomes $uv$. The RHS requires the product rule. Let $I_u = \int u dx$ and $I_v = \int v dx$. $uv = \frac{d}{dx}(I_u) \times I_v + I_u \times \frac{d}{dx}(I_v)$ $uv = u \int v dx + v \int u dx$

- **[M1]** Attempt to differentiate using product rule.
    
- **[A1]** Correct derivative expression.
    

**Step 2: Divide by uv** Divide the entire equation by $uv$ (since $uv \ne 0$): $\frac{uv}{uv} = \frac{u \int v dx}{uv} + \frac{v \int u dx}{uv}$ $1 = \frac{\int v dx}{v} + \frac{\int u dx}{u}$

- **[A1 cso]** Completes proof with no errors.
    

#### **Part (b)**

**Step 3: Substitute the known value** Since $\frac{\int u dx}{u} = \sin^2 x$: $1 = \sin^2 x + \frac{\int v dx}{v} \Rightarrow \frac{\int v dx}{v} = 1 - \sin^2 x = \cos^2 x$

- **[B1]** Correct expression. (S+ for writing $\cos^2 x$).
    

#### **Part (c)**

**Step 4: Differentiate the given u equation** We have $\int u dx = u \sin^2 x$. Differentiate both sides with respect to $x$: $u = \frac{du}{dx}\sin^2 x + u(2\sin x \cos x)$

- **[M1]** Multiply by $u$ and differentiate (or use quotient rule on $\sin^2 x$).
    

**Step 5: Rearrange for (1/u)(du/dx)** $u - u(2\sin x \cos x) = \frac{du}{dx}\sin^2 x$ $u(1 - 2\sin x \cos x) = \frac{du}{dx}\sin^2 x$ Divide by $u\sin^2 x$: $\frac{1}{u}\frac{du}{dx} = \frac{1 - 2\sin x \cos x}{\sin^2 x} \quad (*)$

- **[dM1, A1 cso]** Collects $u$ terms and divides properly; correct final form.
    

#### **Part (d)**

**Step 6: Separate variables and integrate** $\int \frac{1}{u} du = \int \left( \frac{1 - 2\sin x \cos x}{\sin^2 x} \right) dx$

- **[M1]** Separation of variables (condone missing integral signs initially).
    

**Step 7: Prepare RHS for integration** $\int \frac{1}{u} du = \int \left( \frac{1}{\sin^2 x} - \frac{2\sin x \cos x}{\sin^2 x} \right) dx = \int (\csc^2 x - 2\cot x) dx$

- **[M1]** Splits the fraction into integrable forms.
    

**Step 8: Integrate both sides** $\ln|u| = -\cot x - 2\ln|\sin x| + c$

- **[A1, A1]** First A1 for $-\cot x$ and $\ln u$. Second A1 for $-2\ln\sin x$ and $+c$.
    

**Step 9: Convert to exponential form** $\ln|u| = -\cot x - \ln(\sin^2 x) + c$ $\ln|u| + \ln(\sin^2 x) = -\cot x + c \Rightarrow \ln|u\sin^2 x| = -\cot x + c$

- **[M1]** Collects ln terms or removes ln.
    

Take exponential of both sides: $u\sin^2 x = e^{-\cot x + c} = e^c e^{-\cot x} = A e^{-\cot x}$ $u = A e^{-\cot x} \csc^2 x$

- **[A1 cso]** Correct completion with arbitrary constant $A$.
    

#### **Part (e)**

**Step 10: Differentiate given expression to deduce v** From (b), $\frac{\int v dx}{v} = \cos^2 x$. So $\int v dx = v \cos^2 x$. Differentiating gives $v = \frac{dv}{dx}\cos^2 x + v(-2\cos x \sin x)$. Then $\frac{1}{v}\frac{dv}{dx} = \frac{1 + 2\cos x \sin x}{\cos^2 x} = \sec^2 x + 2\tan x$. Integrating gives $\ln v = \tan x + \ln(\sec^2 x)$. Alternatively, following the hint, differentiate $y = e^{\tan x}$: $\frac{dy}{dx} = e^{\tan x} \sec^2 x$

- **[M1]** Differentiation of $e^{\tan x}$.
    

Comparing this to the structure for $u$, we deduce: $v = B e^{\tan x} \sec^2 x$

- **[A1]** Correct deduced form.
    

### **Question 6**

**(a)** Starting from $[f(x) - \lambda g(x)]^2 \ge 0$ show that $\lambda$ satisfies the quadratic inequality $\left(\int_a^b [g(x)]^2 dx\right)\lambda^2 - 2\left(\int_a^b f(x)g(x) dx\right)\lambda + \int_a^b [f(x)]^2 dx \ge 0$ where $a$ and $b$ are constants and $\lambda$ can take any real value. **(2)**

**(b)** Hence prove that $\left[ \int_a^b f(x)g(x) dx \right]^2 \le \left[ \int_a^b [f(x)]^2 dx \right] \times \left[ \int_a^b [g(x)]^2 dx \right]$ **(3)**

**(c)** By letting $f(x) = 1$ and $g(x) = (1+x^3)^{\frac{1}{2}}$ show that $\int_{-1}^{2} (1+x^3)^{\frac{1}{2}} dx \le \frac{9}{2}$ **(4)**

**(d)** Show that $\int_{-1}^{2} x^2(1+x^3)^{\frac{1}{4}} dx = \frac{12\sqrt{3}}{5}$ **(3)**

**(e)** Hence show that $\frac{144}{55} \le \int_{-1}^{2} (1+x^3)^{\frac{1}{2}} dx$ **(4)** **(Total 16 marks)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Expand the squared expression** $[f(x) - \lambda g(x)]^2 = [f(x)]^2 - 2\lambda f(x)g(x) + \lambda^2 [g(x)]^2$

- **[M1]** Attempt to multiply out the square.
    

**Step 2: Integrate over the interval** Integrate with respect to $x$ from $a$ to $b$. Since the integrand is always non-negative, its integral is $\ge 0$. $\int_a^b [f(x)]^2 dx - 2\lambda \int_a^b f(x)g(x) dx + \lambda^2 \int_a^b [g(x)]^2 dx \ge 0$ This matches the required inequality.

- **[A1 cso]** Correct completion with no errors.
    

#### **Part (b)**

**Step 3: View as a quadratic in lambda** The inequality is a quadratic in $\lambda$ of the form $A\lambda^2 - B\lambda + C \ge 0$ where: $A = \int_a^b [g(x)]^2 dx$, $B = 2\int_a^b f(x)g(x) dx$, $C = \int_a^b [f(x)]^2 dx$.

- **[M1]** Treat as quadratic and attempt to use discriminant.
    

**Step 4: Apply discriminant condition** Since the quadratic is always non-negative (never crosses below the axis), it has at most one real root. Thus, its discriminant must be $\le 0$. $\Delta = B^2 - 4AC \le 0$

- **[M1]** Clear reason for use of $b^2 - 4ac \le 0$ (e.g., "no real roots" or "curve stays above x-axis").
    

**Step 5: Substitute integrals** $\left(2\int_a^b f(x)g(x) dx\right)^2 - 4\left(\int_a^b [g(x)]^2 dx\right)\left(\int_a^b [f(x)]^2 dx\right) \le 0$ $4\left[\int_a^b f(x)g(x) dx\right]^2 \le 4\left[\int_a^b [f(x)]^2 dx\right]\left[\int_a^b [g(x)]^2 dx\right]$ Dividing by 4 gives the required result.

- **[A1 cso]** Given result obtained correctly.
    

#### **Part (c)**

**Step 6: Setup functions and apply inequality** Let $E = \int_{-1}^{2} (1+x^3)^{\frac{1}{2}} dx$. Using $f(x) = 1$ and $g(x) = (1+x^3)^{\frac{1}{2}}$: $E^2 = \left[ \int_{-1}^{2} 1 \cdot (1+x^3)^{\frac{1}{2}} dx \right]^2 \le \left[ \int_{-1}^{2} 1^2 dx \right] \times \left[ \int_{-1}^{2} (\sqrt{1+x^3})^2 dx \right]$

- **[M1]** Uses the correct functions in the inequality.
    

**Step 7: Evaluate the bounding integrals** $\int_{-1}^{2} 1 dx = [x]_{-1}^2 = 2 - (-1) = 3$ $\int_{-1}^{2} (1+x^3) dx = \left[ x + \frac{x^4}{4} \right]_{-1}^2 = \left(2 + \frac{16}{4}\right) - \left(-1 + \frac{1}{4}\right) = 6 - \left(-\frac{3}{4}\right) = \frac{27}{4}$

- **[M1, A1]** Evaluates the integrals correctly.
    

**Step 8: Final calculation** $E^2 \le 3 \times \frac{27}{4} = \frac{81}{4}$ Since $E$ must be positive (integrand is positive): $E \le \sqrt{\frac{81}{4}} = \frac{9}{2}$

- **[A1 cso]** Correct conclusion.
    

#### **Part (d)**

**Step 9: Integrate by substitution/recognition** $\int x^2(1+x^3)^{\frac{1}{4}} dx = \frac{1}{3} \int 3x^2(1+x^3)^{\frac{1}{4}} dx$ $= \frac{1}{3} \frac{(1+x^3)^{5/4}}{5/4} = \frac{4}{15}(1+x^3)^{\frac{5}{4}}$

- **[M1, A1]** Correct method; correct indefinite integral.
    

**Step 10: Apply limits** Evaluate between $-1$ and $2$: Upper limit: $\frac{4}{15}(1 + 2^3)^{5/4} = \frac{4}{15}(9)^{5/4} = \frac{4}{15} (3^2)^{5/4} = \frac{4}{15} (3^{5/2}) = \frac{4}{15} (9\sqrt{3}) = \frac{12\sqrt{3}}{5}$. Lower limit: $\frac{4}{15}(1 + (-1)^3)^{5/4} = 0$. $\text{Integral} = \frac{12\sqrt{3}}{5}$

- **[A1 cso]** Correctly evaluates to given answer.
    

#### **Part (e)**

**Step 11: Choose new f(x) and g(x)** We want to establish a lower bound for $E = \int_{-1}^{2} (1+x^3)^{\frac{1}{2}} dx$. Notice the integral in (d) is $\int x^2(1+x^3)^{\frac{1}{4}} dx$. We can think of this as $\int f(x)g(x) dx$. Let $f(x) = (1+x^3)^{\frac{1}{4}}$ and $g(x) = x^2$. Then $[f(x)]^2 = (1+x^3)^{\frac{1}{2}}$ and $[g(x)]^2 = x^4$.

- **[B1]** Suitable choice of $f$ and $g$.
    

**Step 12: Apply the inequality** $\left[ \int_{-1}^{2} x^2(1+x^3)^{\frac{1}{4}} dx \right]^2 \le \left[ \int_{-1}^{2} (1+x^3)^{\frac{1}{2}} dx \right] \times \left[ \int_{-1}^{2} x^4 dx \right]$ Using result from (d) for the LHS: $\left(\frac{12\sqrt{3}}{5}\right)^2 \le E \times \int_{-1}^{2} x^4 dx$

- **[M1]** Suitable inequality for $E$.
    

**Step 13: Evaluate x^4 integral and solve** $\int_{-1}^{2} x^4 dx = \left[ \frac{x^5}{5} \right]_{-1}^2 = \frac{32}{5} - \left(-\frac{1}{5}\right) = \frac{33}{5}$

- **[M1]** Computes $x^4$ integral.
    

$\frac{144 \times 3}{25} \le E \times \frac{33}{5}$ $\frac{432}{25} \le E \times \frac{33}{5} \Rightarrow E \ge \frac{432}{25} \times \frac{5}{33} = \frac{432}{5 \times 33} = \frac{144}{55}$

- **[A1 cso]** Correctly rearranges to given answer.
    

### **Question 7**

**Figure 1** _(A sketch of a rational function with branches in four quadrants, crossing the axes. The line $y = x/3$ serves as a slant asymptote. Two turning points A and B are shown)._

Figure 1 shows a sketch of the curve $C_1$ with equation $y = f(x)$ where $f(x) = \frac{x}{3} + \frac{12}{x} \quad x \ne 0$ The lines $x = 0$ and $y = \frac{x}{3}$ are asymptotes to $C_1$. The point $A$ on $C_1$ is a minimum and the point $B$ on $C_1$ is a maximum.

**(a)** Find the coordinates of $A$ and $B$. **(4)**

There is a normal to $C_1$, which does not intersect $C_1$ a second time, that has equation $x = k$, where $k > 0$.

**(b)** Write down the value of $k$. **(1)**

The point $P(\alpha, \beta)$, $\alpha > 0$ and $\alpha \ne k$, lies on $C_1$. The normal to $C_1$ at $P$ does not intersect $C_1$ a second time.

**(c)** Find the value of $\alpha$, leaving your answer in simplified surd form. **(5)**

**(d)** Find the equation of this normal. **(3)**

The curve $C_2$ has equation $y = |f(x)|$.

**(e)** Sketch $C_2$ stating the coordinates of any turning points and the equations of any asymptotes. **(4)**

The line with equation $y = mx + 1$ does not touch or intersect $C_2$.

**(f)** Find the set of possible values for $m$. **(5)** **(Total 22 marks)**

### **Mark Scheme 7**

#### **Part (a)**

**Step 1: Differentiate the function** $f'(x) = \frac{1}{3} - 12x^{-2}$

- **[M1]** Some correct differentiation.
    

**Step 2: Find stationary points** $f'(x) = 0 \Rightarrow \frac{1}{3} = \frac{12}{x^2} \Rightarrow x^2 = 36 \Rightarrow x = \pm 6$

- **[M1]** Sets derivative to zero.
    

**Step 3: Calculate y-coordinates** If $x = 6$: $y = 6/3 + 12/6 = 2 + 2 = 4$. So $A$ is $(6, 4)$. If $x = -6$: $y = -6/3 + 12/(-6) = -2 - 2 = -4$. So $B$ is $(-6, -4)$.

- **[A1, A1 cso]** Correct pairs of coordinates.
    

#### **Part (b)**

**Step 4: Identify the vertical normal** A normal with equation $x = k$ is a vertical line. This implies the tangent at that point is horizontal (i.e., a stationary point). Since $k > 0$, it must be the normal at the minimum point $A(6, 4)$. $k = 6$

- **[B1ft]** Follow through from their $A$.
    

#### **Part (c)**

**Step 5: Condition for normal not intersecting again** The normal at $P(\alpha, \beta)$ has gradient $m_n = -\frac{1}{f'(\alpha)}$. For this line not to intersect the curve $C_1$ again, it must be parallel to the slant asymptote $y = x/3$. Thus, the gradient of the normal must be $1/3$. $-\frac{1}{f'(\alpha)} = \frac{1}{3} \Rightarrow f'(\alpha) = -3$

- **[B1, M1]** Recognizes normal gradient is 1/3 and uses perpendicular rule to set tangent gradient to -3.
    

**Step 6: Solve for alpha** $\frac{1}{3} - \frac{12}{\alpha^2} = -3$ $\frac{10}{3} = \frac{12}{\alpha^2} \Rightarrow 10\alpha^2 = 36 \Rightarrow \alpha^2 = \frac{36}{10} = \frac{18}{5}$

- **[dM1]** Forms and solves suitable equation.
    

Since $\alpha > 0$: $\alpha = \frac{6}{\sqrt{10}} = \frac{6\sqrt{10}}{10} = \frac{3\sqrt{10}}{5}$

- **[M1, A1]** Correct rationalization to simplified surd form $p\sqrt{q}$.
    

#### **Part (d)**

**Step 7: Find beta** Substitute $\alpha = \frac{3\sqrt{10}}{5}$ into $C_1$: $\beta = \frac{1}{3}\left(\frac{3\sqrt{10}}{5}\right) + 12\left(\frac{5}{3\sqrt{10}}\right) = \frac{\sqrt{10}}{5} + \frac{20}{\sqrt{10}} = \frac{\sqrt{10}}{5} + \frac{20\sqrt{10}}{10} = \frac{\sqrt{10}}{5} + 2\sqrt{10} = \frac{11\sqrt{10}}{5}$

- **[M1]** Attempt y-coordinate.
    

**Step 8: Find normal equation** Gradient is $1/3$. $y - \frac{11\sqrt{10}}{5} = \frac{1}{3}\left(x - \frac{3\sqrt{10}}{5}\right)$ $y = \frac{1}{3}x - \frac{\sqrt{10}}{5} + \frac{11\sqrt{10}}{5} = \frac{1}{3}x + \frac{10\sqrt{10}}{5} = \frac{1}{3}x + 2\sqrt{10}$

- **[M1, A1]** Forms line equation and simplifies correctly.
    

#### **Part (e)**

**Step 9: Sketch C2** $C_2 = |f(x)|$. Reflect the negative parts of $C_1$ in the x-axis.

- Both branches are now entirely above the x-axis.
    
- Turning points at $(6, 4)$ and $(-6, 4)$ (the maximum B flips to become a local minimum).
    
- Asymptotes are $x = 0$, $y = x/3$ (for $x > 0$), and $y = -x/3$ (for $x < 0$).
    
- **[B1]** Both branches positive, U-shaped.
    
- **[B1ft]** Coordinates $(6,4)$ and $(-6,4)$.
    
- **[B1, B1]** Asymptotes stated clearly $x=0, y=x/3, y=-x/3$ (or $y=|x/3|$).
    

#### **Part (f)**

**Step 10: Analyze intersection of line and curve** The line $y = mx + 1$ passes through $(0, 1)$. For it to not intersect $C_2$, it must pass through the gap between the two branches of $C_2$ without touching them. Consider the intersection with $C_1$: $\frac{x}{3} + \frac{12}{x} = mx + 1 \Rightarrow x^2 + 36 = 3mx^2 + 3x$ $(3m - 1)x^2 + 3x - 36 = 0$

- **[M1]** Equates line and curve to form a quadratic.
    

**Step 11: Set discriminant condition** For no intersection, discriminant $< 0$. $3^2 - 4(3m - 1)(-36) < 0$ $9 + 144(3m - 1) < 0 \Rightarrow 9 + 432m - 144 < 0$

- **[M1]** Uses discriminant.
    

$432m < 135 \Rightarrow m < \frac{135}{432} = \frac{5}{16}$

- **[M1, A1]** Solves inequality correctly.
    

**Step 12: Consider negative gradient** By symmetry on the left side, the curve is $y = -(x/3 + 12/x)$ and the line is $y = mx + 1$. The same intersection logic leads to $m > -5/16$. Or simply from the sketch, the line pivoting at $(0, 1)$ can swing between the two tangents to the bottom of the curves. Thus: $-\frac{5}{16} < m < \frac{5}{16}$

- **[A1]** Correct final interval for $m$.