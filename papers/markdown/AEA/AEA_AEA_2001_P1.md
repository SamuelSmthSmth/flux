---
topic: "Sequences and Series"
subtopic: "Arithmetic series"
---
### **Question 1**

**(a)** By considering the series
$$1 + t + t^2 + t^3 + \dots + t^n,$$
or otherwise, sum the series
$$1 + 2t + 3t^2 + 4t^3 + \dots + n t^{n-1}$$
for $t \neq 1$. **(5)**

**(b)** Hence find and simplify an expression for
$$1 + 2 \times 3 + 3 \times 3^2 + 4 \times 3^3 + \dots + 2001 \times 3^{2000}.$$ **(1)**

**(c)** Write down expressions for the sums of both of the series in part (a) for the case where $t = 1$. **(1)**

**(Total 7 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Write down the sum of the geometric progression**
$$S_n = 1 + t + t^2 + \dots + t^n = \frac{t^{n+1} - 1}{t - 1}$$
- **[M1]** Spot that the given series is a geometric progression and state the sum formula.
- **[A1]** Correct expression $\frac{t^{n+1} - 1}{t - 1}$.

**Step 2: Differentiate $S_n$ with respect to $t$**
$$S = 1 + 2t + 3t^2 + \dots + n t^{n-1} = \frac{d}{dt}(S_n) = \frac{(t - 1)(n + 1)t^n - (t^{n+1} - 1) \times 1}{(t - 1)^2}$$
- **[M1]** Differentiate $S_n$ with respect to $t$.
- **[M1]** Apply quotient rule correctly.

**Step 3: Simplify the expression**
$$S = \frac{(n + 1)t^{n+1} - (n + 1)t^n - t^{n+1} + 1}{(t - 1)^2} = \frac{n t^{n+1} - (n + 1)t^n + 1}{(t - 1)^2}$$
- **[A1]** Correct simplified expression $\frac{n t^{n+1} - (n + 1)t^n + 1}{(t - 1)^2}$.

#### **Part (b)**

**Step 4: Substitute $t = 3$ and $n = 2001$ into the derived formula**
$$\text{Sum} = \frac{2001 \times 3^{2002} - 2002 \times 3^{2001} + 1}{(3 - 1)^2} = \frac{6003 \times 3^{2001} - 2002 \times 3^{2001} + 1}{4} = \frac{4001 \times 3^{2001} + 1}{4}$$
- **[B1]** Correct simplified value $\frac{4001 \times 3^{2001} + 1}{4}$.

#### **Part (c)**

**Step 5: Write down the sums for $t = 1$**
For $1 + t + t^2 + \dots + t^n$, when $t = 1$, the sum is $n + 1$.
For $1 + 2t + 3t^2 + \dots + n t^{n-1}$, when $t = 1$, the sum is $\frac{n(n + 1)}{2}$.
- **[B1]** Both expressions correct: $n + 1$ and $\frac{n(n + 1)}{2}$.

---
topic: "Integration"
subtopic: "Integration by parts"
---
### **Question 2**

Given that $S = \int_0^{\frac{\pi}{2}} e^{2x} \sin x \, dx$ and $C = \int_0^{\frac{\pi}{2}} e^{2x} \cos x \, dx$,

**(a)** show that $S = 1 + 2C$, **(3)**

**(b)** find the exact value of $S$. **(6)**

**(Total 9 marks)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Apply integration by parts to $S$**
$$S = \int_0^{\frac{\pi}{2}} e^{2x} \sin x \, dx = \left[-\cos x \, e^{2x}\right]_0^{\frac{\pi}{2}} - \int_0^{\frac{\pi}{2}} (-\cos x)(2e^{2x}) \, dx$$
- **[M1]** Attempt integration by parts on $S$.

**Step 2: Obtain intermediate expression**
$$S = \left[-\cos x \, e^{2x}\right]_0^{\frac{\pi}{2}} + 2 \int_0^{\frac{\pi}{2}} e^{2x} \cos x \, dx$$
- **[A1]** Correct integration by parts result (ignoring limits).

**Step 3: Evaluate limits to show given result**
$$\left[-\cos x \, e^{2x}\right]_0^{\frac{\pi}{2}} = -\cos\left(\frac{\pi}{2}\right)e^\pi - (-\cos(0)e^0) = 0 - (-1) = 1$$
$$S = 1 + 2C$$
- **[A1]** Correct evaluation of limits showing $S = 1 + 2C$.

#### **Part (b)**

**Step 4: Apply integration by parts to $C$**
$$C = \int_0^{\frac{\pi}{2}} e^{2x} \cos x \, dx = \left[\sin x \, e^{2x}\right]_0^{\frac{\pi}{2}} - 2 \int_0^{\frac{\pi}{2}} e^{2x} \sin x \, dx$$
- **[M1]** Attempt integration by parts on $C$.
- **[A1]** Correct integration by parts result.

**Step 5: Evaluate limits for $C$**
$$C = \left(\sin\left(\frac{\pi}{2}\right)e^\pi - \sin(0)e^0\right) - 2S = e^\pi - 2S$$
- **[A1]** Correct expression $C = e^\pi - 2S$.

**Step 6: Substitute $C$ into $S = 1 + 2C$**
$$S = 1 + 2(e^\pi - 2S)$$
- **[M1]** Substitute $C$ into equation from part (a).

**Step 7: Collect terms in $S$**
$$S = 1 + 2e^\pi - 4S \implies 5S = 1 + 2e^\pi$$
- **[M1]** Collect terms in $S$.

**Step 8: State exact value of $S$**
$$S = \frac{1}{5}(1 + 2e^\pi)$$
- **[A1]** Correct exact value $\frac{1}{5}(1 + 2e^\pi)$.

---
topic: "Trigonometry and Modelling"
subtopic: "Solving trigonometric equations"
---
### **Question 3**

Find, to 1 decimal place, the values of $\theta$ that satisfy $0 \leqslant \theta \leqslant 360$ and
$$6 \cos 4\theta^\circ + 2 \cos^2 \theta^\circ = 1.$$ **(12)**

**(Total 12 marks)**

### **Mark Scheme 3**

**Step 1: Express $2\cos^2 \theta^\circ$ in terms of $\cos 2\theta^\circ$**
Using $2\cos^2 \theta^\circ = \cos 2\theta^\circ + 1$:
$$6 \cos 4\theta^\circ + (\cos 2\theta^\circ + 1) = 1 \implies 6 \cos 4\theta^\circ + \cos 2\theta^\circ = 0$$
- **[M1]** Express $\cos^2 \theta$ in terms of $\cos 2\theta$.

**Step 2: Express $\cos 4\theta^\circ$ in terms of $\cos 2\theta^\circ$**
Using $\cos 4\theta^\circ = 2\cos^2 2\theta^\circ - 1$:
$$6(2\cos^2 2\theta^\circ - 1) + \cos 2\theta^\circ = 0$$
- **[M1]** Express $\cos 4\theta$ in terms of $\cos 2\theta$.

**Step 3: Form a quadratic equation in $\cos 2\theta^\circ$**
$$12 \cos^2 2\theta^\circ + \cos 2\theta^\circ - 6 = 0$$
- **[A1]** Correct quadratic equation in $\cos 2\theta$.

**Step 4: Factorise the quadratic equation**
$$(4\cos 2\theta^\circ + 3)(3\cos 2\theta^\circ - 2) = 0$$
- **[M1]** Attempt to factorise or solve the quadratic.

**Step 5: Obtain roots for $\cos 2\theta^\circ$**
$$\cos 2\theta^\circ = \frac{2}{3} \quad \text{or} \quad \cos 2\theta^\circ = -\frac{3}{4}$$
- **[A1]** Both values of $\cos 2\theta$ correct: $\frac{2}{3}$ and $-\frac{3}{4}$.

**Step 6: Solve for $2\theta^\circ$ from $\cos 2\theta^\circ = \frac{2}{3}$**
For $0^\circ \leqslant 2\theta^\circ \leqslant 720^\circ$:
$$2\theta^\circ = 48.19^\circ, 311.81^\circ, 408.19^\circ, 671.81^\circ$$
- **[M1]** Finds one valid angle for $2\theta$.
- **[M1]** Finds complete set of angles in range $0^\circ \leqslant 2\theta \leqslant 720^\circ$.
- **[M1]** Adds $360^\circ$ for second pair of solutions.

**Step 7: Calculate $\theta$ for $\cos 2\theta^\circ = \frac{2}{3}$**
$$\theta = 24.1^\circ, 155.9^\circ, 204.1^\circ, 335.9^\circ$$
- **[M1]** Divide by 2 at the correct stage.

**Step 8: Solve for $2\theta^\circ$ and $\theta$ from $\cos 2\theta^\circ = -\frac{3}{4}$**
$$2\theta^\circ = 138.59^\circ, 221.41^\circ, 498.59^\circ, 581.41^\circ$$
$$\theta = 69.3^\circ, 110.7^\circ, 249.3^\circ, 290.7^\circ$$
- **[A2]** All eight values correct to 1 decimal place: $24.1^\circ, 69.3^\circ, 110.7^\circ, 155.9^\circ, 204.1^\circ, 249.3^\circ, 290.7^\circ, 335.9^\circ$ (deduct 1 mark per error).

---
topic: "Differentiation"
subtopic: "Differentiating exponentials and logarithms"
---
### **Question 4**

The variable $y$ is defined by
$$y = \ln(\sec^2 x + \csc^2 x) \quad \text{for } 0 < x < \frac{\pi}{2}.$$

A student was asked to prove that
$$\frac{dy}{dx} = -4 \cot 2x.$$

The attempted proof was as follows:
$$y = \ln(\sec^2 x + \csc^2 x)$$
$$= \ln(\sec^2 x) + \ln(\csc^2 x)$$
$$= 2 \ln \sec x + 2 \ln \csc x$$
$$\frac{dy}{dx} = 2 \tan x - 2 \cot x$$
$$= \frac{2(\sin^2 x - \cos^2 x)}{\sin x \cos x}$$
$$= \frac{-2 \cos 2x}{\frac{1}{2} \sin 2x}$$
$$= -4 \cot 2x$$

**(a)** Identify the error in this attempt at a proof. **(1)**

**(b)** Give a correct version of the proof. **(5)**

**(c)** Find and simplify a relationship between $p$ and $q$, where $p$ and $q$ are two functions of $x$, such that the student would obtain the correct answer when differentiating $\ln(p+q)$, with respect to $x$, by the above incorrect method. **(8)**

**(Total 14 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Identify the algebraic error**
Line 2 is incorrect because $\ln(a + b) \neq \ln a + \ln b$.
- **[B1]** Correctly states that $\ln(\sec^2 x + \csc^2 x) \neq \ln(\sec^2 x) + \ln(\csc^2 x)$.

#### **Part (b)**

**Step 2: Simplify $\sec^2 x + \csc^2 x$**
$$\sec^2 x + \csc^2 x = \frac{1}{\cos^2 x} + \frac{1}{\sin^2 x} = \frac{\sin^2 x + \cos^2 x}{\sin^2 x \cos^2 x} = \frac{1}{\sin^2 x \cos^2 x}$$
- **[M1]** Write terms in $\sin x$ and $\cos x$ and put over a common denominator.

**Step 3: Express using double angle formula**
$$\frac{1}{\sin^2 x \cos^2 x} = \frac{1}{(\sin x \cos x)^2} = \frac{1}{\left(\frac{1}{2}\sin 2x\right)^2} = \frac{4}{\sin^2 2x}$$
- **[M1]** Use $\sin 2x = 2 \sin x \cos x$.

**Step 4: Take logarithm of the simplified expression**
$$y = \ln\left(\frac{4}{\sin^2 2x}\right) = \ln 4 - 2 \ln(\sin 2x)$$
- **[M1]** Correct use of logarithm laws.

**Step 5: Differentiate $y$ with respect to $x$**
$$\frac{dy}{dx} = -2 \times \frac{2 \cos 2x}{\sin 2x}$$
- **[M1]** Correct differentiation of $\ln(\sin 2x)$.

**Step 6: Complete the proof**
$$\frac{dy}{dx} = -4 \cot 2x$$
- **[A1]** Complete and convincing proof showing all intermediate steps.

#### **Part (c)**

**Step 7: Express correct and incorrect derivatives of $\ln(p+q)$**
Correct derivative: $\frac{d}{dx}\ln(p+q) = \frac{p' + q'}{p + q}$
Student's method derivative: $\frac{d}{dx}(\ln p + \ln q) = \frac{p'}{p} + \frac{q'}{q}$
- **[M1]** Write down correct derivative $\frac{p' + q'}{p + q}$.
- **[M1]** Write down student's method derivative $\frac{p'}{p} + \frac{q'}{q}$.

**Step 8: Equate both derivatives**
$$\frac{p' + q'}{p + q} = \frac{p'}{p} + \frac{q'}{q}$$
- **[M1]** Set the two expressions equal.

**Step 9: Combine terms on right-hand side**
$$\frac{p' + q'}{p + q} = \frac{p' q + q' p}{p q}$$
- **[A1]** Correct equation formed.

**Step 10: Cross-multiply and expand**
$$(p' + q')pq = (p'q + q'p)(p + q)$$
$$p' p q + q' p q = p' p q + p' q^2 + q' p^2 + q' p q$$
- **[M1]** Multiply out brackets.

**Step 11: Simplify the resulting equation**
$$p' q^2 + q' p^2 = 0$$
- **[A1]** Simplify to $p' q^2 + q' p^2 = 0$.

**Step 12: Integrate or solve for $p$ and $q$**
Notice $\frac{d}{dx}\left(\frac{p'}{p} + \frac{q'}{q}\right) \implies p q = A(p + q)$ where $A$ is a constant.
$$p q - A p = A q \implies p(q - A) = A q \implies p = \frac{A q}{q - A}$$
- **[M1]** Integrate or rearrange to solve for $p$ in terms of $q$.
- **[A1]** Correct relationship $p(q - A) = A q$ or $p = \frac{A q}{q - A}$ (where $A$ is a constant).

---
topic: "Integration"
subtopic: "Areas between curves and lines"
---
### **Question 5**

The function $f$ is defined on the domain $[-2, 2]$ by:
$$f(x) = \begin{cases} -kx(2 + x), & -2 \leqslant x < 0, \\ kx(2 - x), & 0 \leqslant x \leqslant 2. \end{cases}$$
where $k$ is a positive constant.

The function $g$ is defined on the domain $[-2, 2]$ by $g(x) = (2.5)^2 - x^2$.

**(a)** Prove that there is a value of $k$ such that the graph of $f$ touches the graph of $g$. **(8)**

**(b)** For this value of $k$ sketch the graphs of the functions $f$ and $g$ on the same axes, stating clearly where the graphs touch. **(4)**

**(c)** Find the exact area of the region bounded by the two graphs. **(6)**

**(Total 18 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Equate $f(x)$ and $g(x)$ for $x \geqslant 0$ by symmetry**
$$g(x) = 6.25 - x^2 = \frac{25}{4} - x^2$$
$$f(x) = 2kx - kx^2 \quad \text{for } x \geqslant 0$$
$$\frac{25}{4} - x^2 = 2kx - kx^2$$
- **[M1]** Equate $f(x)$ and $g(x)$ for $x \geqslant 0$.

**Step 2: Form quadratic equation in $x$**
$$(k - 1)x^2 - 2kx + \frac{25}{4} = 0$$
- **[M1]** Form quadratic in $x$.

**Step 3: Apply condition for graphs to touch ($b^2 - 4ac = 0$)**
$$(-2k)^2 - 4(k - 1)\left(\frac{25}{4}\right) = 0$$
- **[M1]** Set discriminant equal to 0 for equal roots.

**Step 4: Form quadratic equation in $k$**
$$4k^2 - 25(k - 1) = 0 \implies 4k^2 - 25k + 25 = 0$$
- **[A1]** Correct quadratic equation $4k^2 - 25k + 25 = 0$.

**Step 5: Factorise and solve for $k$**
$$(4k - 5)(k - 5) = 0 \implies k = 5 \quad \text{or} \quad k = \frac{5}{4}$$
- **[M1]** Factorise quadratic in $k$.
- **[A1]** Correct values of $k$.

**Step 6: Check domain constraint for point of contact**
$$x = \frac{-b}{2a} = \frac{2k}{2(k - 1)} = \frac{k}{k - 1}$$
- **[M1]** Express $x$-coordinate of contact point in terms of $k$.

**Step 7: Reject invalid $k$ value**
If $k = \frac{5}{4}$, $x = \frac{5/4}{1/4} = 5$, which lies outside the domain $[-2, 2]$.
If $k = 5$, $x = \frac{5}{4} = 1.25$, which lies inside the domain $[0, 2]$.
Thus $k = 5$.
- **[M1]** Rejects $k = \frac{5}{4}$ with valid domain argument and concludes $k = 5$.

#### **Part (b)**

**Step 8: Sketch the graphs of $f$ and $g$**

**Figure 1** _(Graphs of f(x) and g(x) = 6.25 - x² on [-2, 2], showing symmetric touching points at (1.25, 4.6875) and (-1.25, 4.6875))._

- **[B1]** Symmetric sketch of $g(x)$ (inverted parabola with vertex at $(0, 6.25)$).
- **[B1]** Sketch of $f(x)$ showing two parabolic arcs for $x < 0$ and $x > 0$.
- **[B1]** Correctly indicate touching points at $x = \pm \frac{5}{4}$.
- **[B1]** Correct coordinates of touching points: $\left(\pm \frac{5}{4}, \frac{75}{16}\right)$.

#### **Part (c)**

**Step 9: Set up integral using symmetry**
$$\text{Area} = 2 \int_0^{5/4} (g(x) - f(x)) \, dx$$
- **[M1]** Use symmetry factor of 2 and limits $0$ to $\frac{5}{4}$.

**Step 10: Form integrand with $k = 5$**
$$\text{Area} = 2 \int_0^{5/4} \left(6.25 - x^2 - [10x - 5x^2]\right) \, dx = 2 \int_0^{5/4} (6.25 - 10x + 4x^2) \, dx$$
- **[M1]** Form correct integrand $g(x) - f(x)$.

**Step 11: Integrate term by term**
$$= 2 \left[6.25x - 5x^2 + \frac{4}{3}x^3\right]_0^{5/4}$$
- **[M1]** Integrate polynomial terms.
- **[A1]** Correct integrated expression.

**Step 12: Evaluate limits**
$$= 2 \left[6.25\left(\frac{5}{4}\right) - 5\left(\frac{25}{16}\right) + \frac{4}{3}\left(\frac{125}{64}\right)\right] = 2 \left[\frac{125}{16} - \frac{125}{16} + \frac{125}{48}\right] = 2 \times \frac{125}{48} = \frac{125}{24}$$
- **[M1]** Substitute limit $x = \frac{5}{4}$.
- **[A1]** Exact area $\frac{125}{24}$ (or $5\frac{5}{24}$).

---
topic: "Series"
subtopic: "The method of differences"
---
### **Question 6**

SECTION B
Attempt TWO questions in this Section.
PURE MATHEMATICS

Find the following sums:

**(a)** $\sum_{r=1}^n e^r$, **(2)**

**(b)** $\sum_{r=1}^n \ln\left(\frac{r+2}{r}\right)$, **(6)**

**(c)** $\sum_{r=1}^n \frac{1}{r(r+2)}$, **(5)**

**(d)** $\sum_{r=1}^n \binom{n}{r} \tan^{2r} \theta, \quad \theta \neq \frac{k\pi}{2}$, where $k$ is an integer. **(5)**

One of these sums is convergent as $n \to \infty$.

**(e)** State which sum it is and give the value of the limit. **(2)**

**(Total 20 marks)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Sum the geometric series**
Geometric progression with $a = e$ and $r = e$:
$$\sum_{r=1}^n e^r = \frac{e(e^n - 1)}{e - 1}$$
- **[M1]** Spot GP with first term $e$ and common ratio $e$.
- **[A1]** Correct sum $\frac{e(e^n - 1)}{e - 1}$.

#### **Part (b)**

**Step 2: Split the logarithm**
$$\sum_{r=1}^n \ln\left(\frac{r+2}{r}\right) = \sum_{r=1}^n [\ln(r+2) - \ln(r)]$$
- **[M1]** Apply logarithm law $\ln\left(\frac{a}{b}\right) = \ln a - \ln b$.

**Step 3: List terms to demonstrate cancellation**
$$= (\ln 3 - \ln 1) + (\ln 4 - \ln 2) + (\ln 5 - \ln 3) + \dots + (\ln(n+1) - \ln(n-1)) + (\ln(n+2) - \ln n)$$
- **[M1]** List terms showing method of differences.
- **[M1]** Demonstrate cancellation of intermediate terms.

**Step 4: Identify surviving terms**
$$= \ln(n+2) + \ln(n+1) - \ln 2 - \ln 1$$
- **[A1]** Correct surviving terms identified.
- **[A1]** Simplified surviving terms.

**Step 5: Combine into single logarithm**
$$= \ln\left[\frac{(n+1)(n+2)}{2}\right]$$
- **[A1]** Final combined logarithm expression.

#### **Part (c)**

**Step 6: Express in partial fractions**
$$\frac{1}{r(r+2)} = \frac{1}{2}\left[\frac{1}{r} - \frac{1}{r+2}\right]$$
- **[M1]** Partial fractions split.
- **[A1]** Correct constants with factor $\frac{1}{2}$.

**Step 7: List terms to show cancellation**
$$\sum_{r=1}^n \frac{1}{r(r+2)} = \frac{1}{2}\left[\left(1 - \frac{1}{3}\right) + \left(\frac{1}{2} - \frac{1}{4}\right) + \left(\frac{1}{3} - \frac{1}{5}\right) + \dots + \left(\frac{1}{n-1} - \frac{1}{n+1}\right) + \left(\frac{1}{n} - \frac{1}{n+2}\right)\right]$$
- **[M1]** List terms to apply method of differences.
- **[M1]** Show cancellation of terms.

**Step 8: Simplify remaining terms**
$$= \frac{1}{2}\left[1 + \frac{1}{2} - \frac{1}{n+1} - \frac{1}{n+2}\right] = \frac{1}{2}\left[\frac{3}{2} - \frac{1}{n+1} - \frac{1}{n+2}\right]$$
- **[A1]** Correct simplified expression $\frac{1}{2}\left[\frac{3}{2} - \frac{1}{n+1} - \frac{1}{n+2}\right]$.

#### **Part (d)**

**Step 9: Compare with binomial theorem**
Notice that $(1 + x)^n = \sum_{r=0}^n \binom{n}{r} x^r = 1 + \sum_{r=1}^n \binom{n}{r} x^r$.
Setting $x = \tan^2 \theta$:
- **[M1]** Compare sum to $(1 + x)^n$ expansion.
- **[A1]** Identify $x = \tan^2 \theta$.

**Step 10: Sum the series**
$$\sum_{r=1}^n \binom{n}{r} (\tan^2 \theta)^r = (1 + \tan^2 \theta)^n - 1$$
- **[M1]** Express sum as $(1 + \tan^2 \theta)^n - 1$.
- **[A1]** Correct expression.

**Step 11: Simplify using identity**
$$= (\sec^2 \theta)^n - 1 = \sec^{2n} \theta - 1$$
- **[A1]** Final simplified form $\sec^{2n}\theta - 1$.

#### **Part (e)**

**Step 12: Identify convergent series and its limit**
Series (c) is convergent as $n \to \infty$.
$$S_\infty = \lim_{n \to \infty} \frac{1}{2}\left[\frac{3}{2} - \frac{1}{n+1} - \frac{1}{n+2}\right] = \frac{1}{2} \times \frac{3}{2} = \frac{3}{4}$$
- **[B1]** Identifies (c) as the convergent sum.
- **[B1]** Value of limit is $\frac{3}{4}$.

---
topic: "Complex Numbers"
subtopic: "Roots of quadratic equations"
---
### **Question 7**

**(a)** Find a complex number $z$ such that $z^2 = 5 - 12\text{i}$. **(5)**

The complex numbers $\alpha$ and $\beta$ are the solutions of the equation
$$x(x + 1 - 4\text{i}) = 5 - \text{i}$$
and $\arg(\beta) > \arg(\alpha) > 0$.

**(b)** Find $\alpha$ and $\beta$, giving your answers in the form $a + \text{i}b$. **(7)**

**(c)** On the same Argand diagram plot the points representing the complex numbers $\alpha, \beta, \frac{1}{\alpha}$ and $\frac{1}{\beta}$. **(5)**

**(d)** Show that $\alpha^4$ is a real number and find the exact value of $\alpha^{2001}$, leaving your answer in the form $k^n(a + \text{i}b)$ where $k, n, a, b \in \mathbb{R}$. **(3)**

**(Total 20 marks)**

### **Mark Scheme 7**

#### **Part (a)**

**Step 1: Set $z = x + \text{i}y$**
$$z^2 = (x + \text{i}y)^2 = x^2 - y^2 + 2x y \text{i} = 5 - 12\text{i}$$
- **[M1]** Set $z = x + \text{i}y$ and expand $z^2$.

**Step 2: Equate real and imaginary parts**
$$x^2 - y^2 = 5 \quad \text{and} \quad 2xy = -12 \implies xy = -6 \implies x = -\frac{6}{y}$$
- **[A1]** Correct simultaneous equations for $x$ and $y$.

**Step 3: Solve for $y^2$**
$$\left(-\frac{6}{y}\right)^2 - y^2 = 5 \implies \frac{36}{y^2} - y^2 = 5 \implies y^4 + 5y^2 - 36 = 0$$
$$(y^2 + 9)(y^2 - 4) = 0$$
- **[M1]** Form quadratic in $y^2$ and factorise.

**Step 4: Find $x$ and $y$**
Since $y \in \mathbb{R}$, $y^2 = 4 \implies y = \pm 2$.
When $y = 2$, $x = -3$; when $y = -2$, $x = 3$.
- **[A1]** Correct values for real and imaginary parts.

**Step 5: State complex number $z$**
$$z = -3 + 2\text{i} \quad (\text{or } 3 - 2\text{i})$$
- **[A1]** State complex number $z$.

#### **Part (b)**

**Step 6: Form standard quadratic equation in $x$**
$$x^2 + (1 - 4\text{i})x - (5 - \text{i}) = 0$$
- **[M1]** Rearrange equation to standard quadratic form.

**Step 7: Apply quadratic formula**
$$x = \frac{-(1 - 4\text{i}) \pm \sqrt{(1 - 4\text{i})^2 + 4(5 - \text{i})}}{2}$$
- **[M1]** Use quadratic formula.

**Step 8: Simplify discriminant using result from part (a)**
$$(1 - 4\text{i})^2 + 4(5 - \text{i}) = (1 - 8\text{i} - 16) + (20 - 4\text{i}) = 5 - 12\text{i}$$
$$x = \frac{-1 + 4\text{i} \pm (-3 + 2\text{i})}{2}$$
- **[A1]** Simplify discriminant to $5 - 12\text{i}$ and use square root from part (a).

**Step 9: Calculate roots**
$$x_1 = \frac{-1 + 4\text{i} - 3 + 2\text{i}}{2} = -2 + 3\text{i}$$
$$x_2 = \frac{-1 + 4\text{i} + 3 - 2\text{i}}{2} = 1 + \text{i}$$
- **[M1]** Compute both solutions.

**Step 10: Identify $\alpha$ and $\beta$ based on argument condition**
Since $\arg(-2 + 3\text{i}) > \arg(1 + \text{i}) > 0$:
$$\alpha = 1 + \text{i}$$
$$\beta = -2 + 3\text{i}$$
- **[A1]** Assign $\alpha$ and $\beta$ correctly using argument condition.
- **[A1]** $\alpha = 1 + \text{i}$.
- **[A1]** $\beta = -2 + 3\text{i}$.

#### **Part (c)**

**Step 11: Calculate reciprocals $\frac{1}{\alpha}$ and $\frac{1}{\beta}$**
$$\frac{1}{\alpha} = \frac{1}{1 + \text{i}} = \frac{1 - \text{i}}{2} = \frac{1}{2} - \frac{1}{2}\text{i}$$
$$\frac{1}{\beta} = \frac{1}{-2 + 3\text{i}} = \frac{-2 - 3\text{i}}{13} = -\frac{2}{13} - \frac{3}{13}\text{i}$$
- **[M1]** Calculate reciprocal values in form $a + \text{i}b$.

**Step 12: Plot points on Argand diagram**

**Figure 2** _(Argand diagram showing alpha = 1+i in Q1, beta = -2+3i in Q2, 1/alpha = 0.5-0.5i in Q4, and 1/beta = -2/13 - 3/13 i in Q3)._

- **[A1]** Points $\alpha$ (Q1) and $\beta$ (Q2) plotted in correct quadrants.
- **[A1]** Points $\frac{1}{\alpha}$ (Q4) and $\frac{1}{\beta}$ (Q3) plotted in correct quadrants.

#### **Part (d)**

**Step 13: Show $\alpha^4$ is real**
$$\alpha = 1 + \text{i} \implies \alpha^2 = (1 + \text{i})^2 = 2\text{i}$$
$$\alpha^4 = (2\text{i})^2 = -4 \in \mathbb{R}$$
- **[B1]** Show $\alpha^4 = -4$, which is real.

**Step 14: Express $\alpha^{2001}$**
$$\alpha^{2001} = (\alpha^4)^{500} \times \alpha$$
- **[M1]** Express $\alpha^{2001}$ using power of $\alpha^4$.

**Step 15: Compute exact value**
$$\alpha^{2001} = (-4)^{500}(1 + \text{i}) = 4^{500}(1 + \text{i}) = 2^{1000}(1 + \text{i})$$
- **[A1]** Final exact answer $2^{1000}(1 + \text{i})$ (or $4^{500}(1 + \text{i})$).

---
topic: "Momentum and Impulse"
subtopic: "Conservation of momentum"
---
### **Question 8**

MECHANICS

**(a)** Two particles $A$ and $B$ have masses $m$ and $2m$ respectively and are joined by a light inextensible string of length $l$. Initially $B$ is at rest on a smooth horizontal surface when $A$, moving with speed $u$ on the same surface, collides directly with $B$. After the collision $A$ and $B$ move in a straight line and the speed of $A$ is $\frac{1}{4}u$. Air resistance should be ignored.

**(i)** Find the speed of $B$ directly after the collision. **(2)**

**(ii)** Find the time until the string becomes taut. **(2)**

After the string becomes taut, both particles move with the same speed $w$.

**(iii)** Find $w$. **(2)**

**(b)** **Figure 1** _(Two particles C and D of masses m and 2m connected by a string over a smooth pulley P, with C on a smooth horizontal plane and D on a rough inclined plane at angle alpha)._

Figure 1 shows two particles $C$ and $D$ having masses $m$ and $2m$ respectively and joined by a light inextensible string. Particle $D$ is moving down a rough plane inclined at an angle $\alpha$ to the horizontal, where $\tan \alpha = \frac{3}{4}$. The string passes over a smooth pulley $P$. Both particles have the same initial speed and particle $C$ moves along a smooth horizontal surface whilst $D$ moves down a line of greatest slope of the inclined plane. The motion of $C$ and $D$ is in a vertical plane and the coefficient of friction between $D$ and the inclined plane is $\mu$.

Find the acceleration of $D$ and describe the motion of the particles in the period before $C$ reaches the pulley in all the cases that arise according to the values of $\mu$. **(14)**

**(Total 20 marks)**

### **Mark Scheme 8**

#### **Part (a)**

**Step 1: Apply conservation of momentum for the collision**
$$m u = m \left(\frac{1}{4}u\right) + 2m v$$
- **[M1]** Apply conservation of linear momentum.

**Step 2: Solve for speed $v$ of particle $B$**
$$\frac{3}{4}m u = 2m v \implies v = \frac{3}{8}u$$
- **[A1]** Correct speed $v = \frac{3}{8}u$.

**Step 3: Calculate relative speed**
$$\text{Relative speed} = v - \frac{1}{4}u = \frac{3}{8}u - \frac{2}{8}u = \frac{1}{8}u$$
- **[M1]** Calculate relative speed of separation.

**Step 4: Find time until string becomes taut**
$$\text{Time} = \frac{\text{distance}}{\text{relative speed}} = \frac{l}{\frac{1}{8}u} = \frac{8l}{u}$$
- **[A1]** Correct time $t = \frac{8l}{u}$.

**Step 5: Apply conservation of momentum when string jerks taut**
$$m \left(\frac{1}{4}u\right) + 2m \left(\frac{3}{8}u\right) = (m + 2m) w$$
$$m u = 3m w$$
- **[M1]** Conservation of linear momentum for jerk stage.

**Step 6: Solve for common speed $w$**
$$w = \frac{1}{3}u$$
- **[A1]** Correct speed $w = \frac{1}{3}u$.

#### **Part (b)**

**Step 7: Set up equations of motion for $C$ and $D$**
For particle $C$: $T = m a$
For particle $D$: Normal reaction $R = 2mg \cos \alpha$
Friction force $F = \mu R = 2\mu mg \cos \alpha$
- **[B1]** $T = m a$ for particle $C$.
- **[B1]** $R = 2mg \cos \alpha$ for particle $D$.

**Step 8: Write equation of motion down the slope for $D$**
$$2mg \sin \alpha - T - F = 2m a$$
Given $\tan \alpha = \frac{3}{4} \implies \sin \alpha = \frac{3}{5}, \cos \alpha = \frac{4}{5}$.
$$2mg \left(\frac{3}{5}\right) - T - \mu \left(2mg \times \frac{4}{5}\right) = 2m a$$
- **[M1]** Equation of motion for $D$.
- **[A1]** Correct trigonometric substitution.

**Step 9: Combine equations to find acceleration $a$**
$$\frac{6}{5}mg - m a - \frac{8}{5}\mu mg = 2m a$$
$$3m a = \frac{2}{5}mg(3 - 4\mu) \implies a = \frac{2g}{15}(3 - 4\mu)$$
- **[M1]** Eliminate $T$ and solve for $a$.
- **[M1]** Determine condition for acceleration down the slope ($a > 0$).
- **[A1]** Acceleration $a = \frac{2g}{15}(3 - 4\mu)$ when $\mu < \frac{3}{4}$.

**Step 10: Case 1: $\mu < \frac{3}{4}$**
$a > 0$, so $D$ accelerates down the inclined plane and $C$ accelerates along the horizontal plane with acceleration $a = \frac{2g}{15}(3 - 4\mu)$.
- **[B1]** Fully describe motion for $\mu < \frac{3}{4}$.

**Step 11: Case 2: $\mu = \frac{3}{4}$**
$a = 0$, so acceleration is zero. Both particles continue moving with constant velocity.
- **[B1]** Fully describe motion for $\mu = \frac{3}{4}$.

**Step 12: Case 3: $\mu > \frac{3}{4}$**
$a < 0$, so $D$ tends to decelerate. $C$ keeps moving at initial speed so the string becomes slack.
Assuming $C$ does not catch up with $D$, particle $D$ decelerates independently under friction and gravity until it stops.
Equation of motion for $D$ when string is slack:
$$2mg \sin \alpha - \mu (2mg \cos \alpha) = 2m b \implies b = g(\sin \alpha - \mu \cos \alpha) = \frac{g}{5}(3 - 4\mu)$$
Deceleration $= \frac{g}{5}(4\mu - 3)$.
- **[B1]** Note that string becomes slack for $\mu > \frac{3}{4}$.
- **[M1]** Equation of motion for $D$ when string is slack.
- **[A1]** Deceleration of $D$ is $\frac{g}{5}(4\mu - 3)$.

---
topic: "Mechanics and Materials"
subtopic: "Projectile motion"
---
### **Question 9**

A girl is throwing screwed up pieces of paper into a large cylindrical bin of diameter $0.3\text{ m}$. She projects them towards the bin with speed $u$ at an angle $\alpha$ above the horizontal. The pieces of paper are modelled as particles that experience no air resistance.

**(a)** When the girl is sitting, the point of projection of the paper is the same height as the top of the bin and a horizontal distance $1.25\text{ m}$ from the nearest point of the bin. Given that $u = 4\text{ m s}^{-1}$ find, to the nearest $0.1$ of a degree, the ranges of values of $\alpha$ for which the paper will land in the bin. **(9)**

**(b)** When the girl is standing, the point of projection of the paper is $0.5\text{ m}$ above the level of the top of the bin and the horizontal distance between the point of projection and the nearest point on the top of the bin is $2.5\text{ m}$. Given that $\alpha = 45^\circ$ find, in $\text{m s}^{-1}$ to 1 decimal place, the range of values of $u$ that will ensure that the paper lands in the bin. **(9)**

**(c)** Discuss briefly what the effect would be of using these values for $u$ and $\alpha$, but not making the modelling assumptions about the screwed up paper. **(2)**

**(Total 20 marks)**

### **Mark Scheme 9**

#### **Part (a)**

**Step 1: Set up horizontal and vertical equations of motion**
$$\to x = u \cos \alpha \, t = 4 \cos \alpha \, t$$
$$\uparrow y = u \sin \alpha \, t - \frac{1}{2}g t^2 = 4 \sin \alpha \, t - 4.9 t^2$$
- **[B1]** $x = 4 \cos \alpha \, t$.
- **[B1]** $y = 4 \sin \alpha \, t - 4.9 t^2$.

**Step 2: Find time of flight when $y = 0$**
$$y = 0 \implies t(4 \sin \alpha - 4.9 t) = 0 \implies t = \frac{4 \sin \alpha}{4.9}$$
- **[M1]** Set $y = 0$ to find non-zero time of flight $t$.

**Step 3: Express range $x$ in terms of $\alpha$**
$$x = 4 \cos \alpha \left(\frac{4 \sin \alpha}{4.9}\right) = \frac{16 \sin \alpha \cos \alpha}{4.9} = \frac{8 \sin 2\alpha}{4.9}$$
- **[M1]** Express range $x$ in terms of $\alpha$.

**Step 4: Set up inequality for landing in the bin**
The paper lands in bin if $1.25 < x < 1.25 + 0.30 = 1.55$:
$$1.25 < \frac{8 \sin 2\alpha}{4.9} < 1.55$$
- **[M1]** Set up inequality for range bounds.
- **[A1]** Correct inequality for range $1.25 < x < 1.55$.

**Step 5: Solve for $\sin 2\alpha$**
$$\frac{1.25 \times 4.9}{8} < \sin 2\alpha < \frac{1.55 \times 4.9}{8}$$
$$0.765625 < \sin 2\alpha < 0.948979$$
- **[M1]** Solve inequality for $\sin 2\alpha$.

**Step 6: Calculate ranges for $\alpha$**
First interval:
$$50.0^\circ < 2\alpha < 71.6^\circ \implies 25.0^\circ < \alpha < 35.8^\circ$$
Second interval (using supplementary angles):
$$108.4^\circ < 2\alpha < 130.0^\circ \implies 54.2^\circ < \alpha < 65.0^\circ$$
- **[A1]** First range $25.0^\circ < \alpha < 35.8^\circ$.
- **[A1]** Second range $54.2^\circ < \alpha < 65.0^\circ$.

#### **Part (b)**

**Step 7: Equations of motion for standing case ($\alpha = 45^\circ$)**
$$\to x = u \cos 45^\circ \, t = \frac{u t}{\sqrt{2}}$$
$$\downarrow y = -0.5 \implies y = u \sin 45^\circ \, t - 4.9 t^2 = \frac{u t}{\sqrt{2}} - 4.9 t^2$$
- **[B1]** Horizontal equation $x = \frac{ut}{\sqrt{2}}$.
- **[M1]** Vertical equation set to $y = -0.5$.
- **[A1]** Correct system of trajectory equations.

**Step 8: Eliminate $t$ to get equation of trajectory**
Substitute $t = \frac{x \sqrt{2}}{u}$:
$$-0.5 = x - 4.9 \left(\frac{x \sqrt{2}}{u}\right)^2 = x - \frac{9.8 x^2}{u^2}$$
- **[M1]** Eliminate $t$ to form trajectory equation in $x$ and $u$.

**Step 9: Express $u^2$ in terms of $x$**
$$\frac{9.8 x^2}{u^2} = x + 0.5 \implies u^2 = \frac{9.8 x^2}{x + 0.5}$$
- **[M1]** Rearrange equation for $u^2$.

**Step 10: Apply bounds for $x$ ($2.5 < x < 2.8$)**
For $x = 2.5$: $u^2 = \frac{9.8 \times 2.5^2}{3.0} = 20.4167 \implies u \approx 4.518$
For $x = 2.8$: $u^2 = \frac{9.8 \times 2.8^2}{3.3} = 23.2824 \implies u \approx 4.825$
- **[M1]** Substitute boundary values $x = 2.5$ and $x = 2.8$.
- **[A1]** $u > 4.518$.
- **[A1]** $u < 4.825$.

**Step 11: State range for $u$ to 1 decimal place**
$$4.5 < u < 4.8 \text{ m s}^{-1}$$
- **[A1]** Correct range $4.5 < u < 4.8\text{ m s}^{-1}$.

#### **Part (c)**

**Step 12: Discuss real-world effects**
Screwed up paper will experience air resistance and lift/drag forces.
Air resistance reduces horizontal speed, so the paper will fall short of the bin.
- **[B1]** Mentions air resistance / non-particle nature of paper.
- **[B1]** States that paper might fall short due to energy lost to air resistance.

---
topic: "Discrete Random Variables"
subtopic: "Expected value of a discrete random variable"
---
### **Question 10**

STATISTICS

A factory receives deliveries of a large number of a component, a proportion $p$ of which are defective. Each delivery is tested for quality before being accepted. The quality assurance manager decides whether or not to accept the delivery on the basis of the following scheme.

A random sample of 10 components is examined and if no more than 1 of them is defective the delivery is accepted. If more than 2 defectives are found the whole delivery is rejected. If there are exactly 2 defective components in this first sample then a second sample of 10 components is examined. If there are no defectives in this second sample, the whole delivery is accepted; otherwise it is rejected.

**(a)** Show that the probability that the manager accepts the delivery is $q^9(q + 10p + 45p^2 q^9)$ where $q = 1 - p$. **(5)**

**(b)** Find an expression for the expected number of components sampled using the manager's scheme. **(5)**

A new assistant starts working for the quality assurance manager and she decides to simplify the scheme. She examines a random sample of 15 components and accepts the delivery if there are no more than 2 defective components; otherwise the delivery is rejected.

**(c)** Find an expression for the probability that the assistant will accept a delivery. **(3)**

The cost of testing each component sampled is £5, and the cost of rejecting a delivery is £1000 if $p = 0.05$ and £500 if $p = 0.10$.

**(d)** By considering the expected costs of sampling and rejecting deliveries in the cases where $p = 0.05$ and $p = 0.10$, explain which scheme you would recommend the factory to use in each of these cases. **(7)**

**(Total 20 marks)**

### **Mark Scheme 10**

#### **Part (a)**

**Step 1: Define the model**
Let $X \sim \text{B}(10, p)$ be the number of defectives in the first sample.
$$\text{P}(\text{Accept}) = \text{P}(X \leqslant 1) + \text{P}(X = 2) \times \text{P}(\text{No defectives in 2nd sample of 10})$$
- **[B1]** State binomial distribution $X \sim \text{B}(10, p)$.
- **[B1]** Express acceptance probability structure.

**Step 2: Calculate binomial probabilities**
$$\text{P}(X = 0) = q^{10}$$
$$\text{P}(X = 1) = \binom{10}{1} p q^9 = 10 p q^9$$
$$\text{P}(X = 2) = \binom{10}{2} p^2 q^8 = 45 p^2 q^8$$
$$\text{P}(\text{No defectives in 2nd sample of 10}) = q^{10}$$
- **[M1]** Calculate $\text{P}(X \leqslant 1)$ and $\text{P}(X = 2)$.
- **[A1]** Correct binomial probability terms.

**Step 3: Combine and factorise to obtain given expression**
$$\text{P}(\text{Accept}) = (q^{10} + 10 p q^9) + (45 p^2 q^8) \times q^{10}$$
$$= q^9 (q + 10 p + 45 p^2 q^9)$$
- **[A1]** Fully correct algebraic factorisation leading to the given expression.

#### **Part (b)**

**Step 4: Define random variable $N$ for sample size**
Let $N$ be the number of components sampled. $N$ takes value 10 if $X \neq 2$, and value 20 if $X = 2$.
$$\text{P}(N = 20) = \text{P}(X = 2) = 45 p^2 q^8$$
$$\text{P}(N = 10) = 1 - 45 p^2 q^8$$
- **[B1]** Identify that $N$ takes values 10 or 20.
- **[M1]** State probabilities for $N = 10$ and $N = 20$.

**Step 5: Apply expectation formula**
$$\text{E}(N) = 10 \times \text{P}(N = 10) + 20 \times \text{P}(N = 20)$$
$$\text{E}(N) = 10(1 - 45 p^2 q^8) + 20(45 p^2 q^8)$$
- **[M1]** Use expectation formula $\sum n \text{P}(N = n)$.
- **[A1]** Correct unsimplified expression.

**Step 6: Simplify expression for $\text{E}(N)$**
$$\text{E}(N) = 10 + 10(45 p^2 q^8) = 10(1 + 45 p^2 q^8) = 20 - 10(q^{10} + 10 p q^9)$$
- **[A1]** Simplify to $10(1 + 45 p^2 q^8)$ or equivalent.

#### **Part (c)**

**Step 7: Model assistant's scheme**
Let $Y \sim \text{B}(15, p)$ be defectives in sample of 15.
$$\text{P}(\text{Accept}) = \text{P}(Y \leqslant 2) = \text{P}(Y = 0) + \text{P}(Y = 1) + \text{P}(Y = 2)$$
$$= q^{15} + 15 p q^{14} + \binom{15}{2} p^2 q^{13} = q^{15} + 15 p q^{14} + 105 p^2 q^{13}$$
$$= q^{13}(q^2 + 15 p q + 105 p^2)$$
- **[M1]** Model assistant's scheme as $Y \sim \text{B}(15, p)$.
- **[M1]** Write sum of binomial probabilities for $Y = 0, 1, 2$.
- **[A1]** Correct expression $q^{13}(q^2 + 15 p q + 105 p^2)$.

#### **Part (d)**

**Step 8: Evaluate expected costs for $p = 0.05$ and $p = 0.10$**

For $p = 0.05$ ($q = 0.95$):
- Manager's scheme:
$\text{P}(\text{Accept}) = 0.95855 \implies \text{P}(\text{Reject}) = 0.04145$
$\text{E}(N) = 10.37 \implies \text{Sampling cost} = 10.37 \times 5 = £51.85$ (or $£54.31$)
$\text{Rejection cost} = 1000 \times 0.04145 = £41.45$
$\text{Total Expected Cost} = £95.76$
- Assistant's scheme:
$\text{P}(\text{Accept}) = 0.9638 \implies \text{P}(\text{Reject}) = 0.0362$
$\text{Sampling cost} = 15 \times 5 = £75.00$
$\text{Rejection cost} = 1000 \times 0.0362 = £36.20$
$\text{Total Expected Cost} = £111.20$

For $p = 0.10$ ($q = 0.90$):
- Manager's scheme:
$\text{P}(\text{Accept}) = 0.80364 \implies \text{P}(\text{Reject}) = 0.19636$
$\text{E}(N) = 12.64 \implies \text{Sampling cost} = 12.64 \times 5 = £63.20$
$\text{Rejection cost} = 500 \times 0.19636 = £98.18$
$\text{Total Expected Cost} = £161.38$
- Assistant's scheme:
$\text{P}(\text{Accept}) = 0.81594 \implies \text{P}(\text{Reject}) = 0.18406$
$\text{Sampling cost} = 15 \times 5 = £75.00$
$\text{Rejection cost} = 500 \times 0.18406 = £92.03$
$\text{Total Expected Cost} = £167.03$

- **[M1]** Calculate expected sampling and rejection costs for $p = 0.05$.
- **[M1]** Calculate expected sampling and rejection costs for $p = 0.10$.
- **[A1]** Correct expected total costs for Manager's scheme (£95.76 and £161.38).
- **[A1]** Correct expected total costs for Assistant's scheme (£111.20 and £167.03).

**Step 9: Recommendation**
Since the manager's scheme results in lower total expected costs in both cases (£95.76 vs £111.20 for $p = 0.05$, and £161.38 vs £167.03 for $p = 0.10$), the manager's scheme should be recommended for both $p = 0.05$ and $p = 0.10$.
- **[B1]** Recommend manager's scheme for both cases with justification.

---
topic: "Poisson Distributions"
subtopic: "The Poisson distribution"
---
### **Question 11**

Whenever Mr. Bumble gives a speech he makes hesitations at a rate of 1 every 2 minutes. The hesitations can occur at any point in his speech and are independent of one another.

**(a)** Find the probability that Mr. Bumble makes at least 3 hesitations in a 10-minute speech. **(2)**

During a certain 10-minute speech by Mr. Bumble, Mr. Drowsy fell asleep. He remembers hearing at least 2 hesitations but does not know how many there were during the whole speech or when he fell asleep.

**(b)** Find the probability that there were at least 5 hesitations in the whole 10-minute speech. **(5)**

Mr. Tally decides to count the number of complete minutes with no hesitations in a 10-minute speech by Mr. Bumble.

**(c)** Find the probability that there are no more than 7 complete minutes with no hesitations in Mr. Bumble's next 10-minute speech. **(6)**

**(d)** Explain briefly the difference between your answers to parts (a) and (c). **(1)**

Whenever Mr. Articulate delivers a speech there is a probability of $\frac{1}{2}$ that he makes at least one hesitation in the first minute. Thereafter he makes hesitations at a rate of 1 every 3 minutes.

**(e)** Find the probability that Mr. Articulate makes at least 3 hesitations in a 10-minute speech. **(6)**

**(Total 20 marks)**

### **Mark Scheme 11**

#### **Part (a)**

**Step 1: Model hesitations in 10 minutes**
Let $X \sim \text{Po}(5)$ be the number of hesitations in a 10-minute speech ($\lambda = 10 \times 0.5 = 5$).
$$\text{P}(X \geqslant 3) = 1 - \text{P}(X \leqslant 2) = 1 - 0.1247 = 0.8753$$
- **[M1]** Use $X \sim \text{Po}(5)$ and $1 - \text{P}(X \leqslant 2)$.
- **[A1]** Correct probability $0.8753$.

#### **Part (b)**

**Step 2: Set up conditional probability**
$$\text{P}(X \geqslant 5 \mid X \geqslant 2) = \frac{\text{P}(X \geqslant 5)}{\text{P}(X \geqslant 2)} = \frac{1 - \text{P}(X \leqslant 4)}{1 - \text{P}(X \leqslant 1)}$$
- **[M1]** Set up conditional probability formula.
- **[A1]** Correct formula in terms of cumulative Poisson probabilities.

**Step 3: Evaluate numerator and denominator**
$$1 - \text{P}(X \leqslant 4) = 1 - 0.4405 = 0.5595$$
$$1 - \text{P}(X \leqslant 1) = 1 - 0.0404 = 0.9596$$
- **[M1]** Evaluate $1 - \text{P}(X \leqslant 4)$.
- **[A1]** Evaluate $1 - \text{P}(X \leqslant 1)$.

**Step 4: Compute final conditional probability**
$$\text{P}(X \geqslant 5 \mid X \geqslant 2) = \frac{0.5595}{0.9596} \approx 0.5831$$
- **[A1]** Correct probability $0.5831$.

#### **Part (c)**

**Step 5: Find probability of no hesitations in 1 minute**
For 1 minute, rate is $\lambda = 0.5$.
$$p = \text{P}(\text{Po}(0.5) = 0) = e^{-0.5} \approx 0.60653$$
- **[B1]** Calculate $p = e^{-0.5}$.

**Step 6: Model complete minutes with no hesitations using Binomial**
Let $Y$ be the number of complete minutes with no hesitations. $Y \sim \text{B}(10, e^{-0.5})$.
$$\text{P}(Y \leqslant 7) = 1 - \text{P}(Y \geqslant 8) = 1 - [\text{P}(Y = 8) + \text{P}(Y = 9) + \text{P}(Y = 10)]$$
- **[B1]** Model $Y \sim \text{B}(10, p)$.
- **[M1]** Use $1 - \text{P}(Y \geqslant 8)$.

**Step 7: Calculate binomial terms**
$$\text{P}(Y = 10) = p^{10} = e^{-5} \approx 0.00674$$
$$\text{P}(Y = 9) = 10 p^9 (1 - p) \approx 0.04390$$
$$\text{P}(Y = 8) = 45 p^8 (1 - p)^2 \approx 0.12756$$
- **[M1]** Calculate binomial terms.
- **[A1]** Sum of upper terms $\approx 0.1782$.

**Step 8: Calculate final probability**
$$\text{P}(Y \leqslant 7) = 1 - 0.1782 = 0.8218 \quad (\text{or } 0.8219)$$
- **[A1]** Correct probability $0.8219$.

#### **Part (d)**

**Step 9: Explain difference**
Part (a) considers hesitations distributed continuously across the entire 10-minute interval, while part (c) checks each discrete 1-minute window independently. Hesitations could be clustered in fewer minutes, making the underlying random variables different.
- **[B1]** Clear explanation of continuous vs discrete 1-minute block model.

#### **Part (e)**

**Step 10: Model hesitations in first minute and remaining 9 minutes**
For first minute ($M$): $\text{P}(M \geqslant 1) = \frac{1}{2} \implies \text{P}(M = 0) = \frac{1}{2} = e^{-\lambda_1} \implies \lambda_1 = \ln 2$.
For remaining 9 minutes ($N$): rate is 1 per 3 minutes $\implies \lambda_2 = \frac{9}{3} = 3 \implies N \sim \text{Po}(3)$.
- **[M1]** Model remaining 9 minutes as $N \sim \text{Po}(3)$.
- **[A1]** Correct Poisson parameter $\lambda = 3$.

**Step 11: Set up cases for total hesitations $\geqslant 3$**
- Case 1: $M = 0$ and $N \geqslant 3$
- Case 2: $M = 1$ and $N \geqslant 2$
- Case 3: $M \geqslant 2$ and $N \geqslant 1$
- **[B1]** Identify appropriate mutually exclusive cases.
- **[M1]** Sum probabilities for all cases.

**Step 12: Evaluate case probabilities**
$\text{P}(N \geqslant 3) = 1 - \text{P}(N \leqslant 2) = 1 - e^{-3}\left(1 + 3 + \frac{9}{2}\right) = 1 - 8.5 e^{-3} \approx 0.57681$
$\text{P}(N \geqslant 2) = 1 - \text{P}(N \leqslant 1) = 1 - 4 e^{-3} \approx 0.80085$
$\text{P}(N \geqslant 1) = 1 - e^{-3} \approx 0.95021$

Using $M \sim \text{Po}(\ln 2)$:
$\text{P}(M = 0) = \frac{1}{2} = 0.5$
$\text{P}(M = 1) = \frac{1}{2}\ln 2 \approx 0.34657$
$\text{P}(M \geqslant 2) = 1 - \frac{1}{2}(1 + \ln 2) \approx 0.15343$

Total Probability $= 0.5(0.57681) + 0.34657(0.80085) + 0.15343(0.95021)$
$$= 0.28841 + 0.27755 + 0.14579 = 0.7118 \quad (\text{or } 0.7134)$$
- **[M1]** Calculate individual case products.
- **[A1]** Correct overall probability $0.7134$.

---
topic: "The Simplex Algorithm"
subtopic: "The simplex method"
---
### **Question 12**

DECISION MATHEMATICS

A firm manufactures three types of woollen rug $A$, $B$ and $C$. The rugs are woven, on machines, from three different colours of wool, I, II and III. The amount of wool (in kg), the machine time required (in hours) and the profit gained in producing each rug is shown in the table below.

| | Wool I | Wool II | Wool III | Machine time | Profit (£) |
|---|---|---|---|---|---|
| Type A | 1 | 3 | 1 | 2 | 5 |
| Type B | 4 | 2 | 2 | 4 | 6 |
| Type C | 3 | 3 | 1 | 2 | 4 |

The firm is currently supplied with $900\text{ kg}$, $440\text{ kg}$ and $240\text{ kg}$ of wool I, II and III respectively each week. There is a total of 510 hours of machine time available each week. The weekly profit is to be maximised.

**(a)** Formulate this information as a linear programming problem. Reduce it, with explanation, to a 3-variable, 3-constraint problem and solve it using the Simplex method. **(10)**

Due to improved efficiency, an extra $40\text{ kg}$ of wool can be supplied each week. The $40\text{ kg}$ may be in any one colour or any combination of colours (e.g. $20\text{ kg}$ of type I, $10\text{ kg}$ of type II and $10\text{ kg}$ of type III).

**(b)** State which wool type should not be increased and explain why. **(1)**

**(c)** Prove that none of the pivot elements chosen in part (a) need changing. **(6)**

**(d)** State the new optimal solution. **(3)**

**(Total 20 marks)**

### **Mark Scheme 12**

#### **Part (a)**

**Step 1: Formulate linear program**
Let $x_1, x_2, x_3$ be the number of rugs of Type A, B, C produced weekly.
Maximise $P = 5x_1 + 6x_2 + 4x_3$
Subject to:
$$x_1 + 4x_2 + 3x_3 \leqslant 900 \quad (\text{Wool I})$$
$$3x_1 + 2x_2 + 3x_3 \leqslant 440 \quad (\text{Wool II})$$
$$x_1 + 2x_2 + x_3 \leqslant 240 \quad (\text{Wool III})$$
$$2x_1 + 4x_2 + 2x_3 \leqslant 510 \quad (\text{Machine time})$$
Machine time constraint is redundant because $x_1 + 2x_2 + x_3 \leqslant 240 \implies 2x_1 + 4x_2 + 2x_3 \leqslant 480 \leqslant 510$.
- **[B1]** Objective function $P = 5x_1 + 6x_2 + 4x_3$.
- **[M1]** Set up all 4 constraints.
- **[A2]** Explain redundancy of machine time constraint to reduce to 3 constraints.

**Step 2: Set up initial Simplex tableau with slack variables $r, s, t$**
$$\begin{array}{c|cccccc|c}
\text{b.v.} & x_1 & x_2 & x_3 & r & s & t & \text{value} \\
\hline
r & 1 & 4 & 3 & 1 & 0 & 0 & 900 \\
s & 3 & 2 & 3 & 0 & 1 & 0 & 450 \\
t & 1 & 2 & 1 & 0 & 0 & 1 & 240 \\
\hline
P & -5 & -6 & -4 & 0 & 0 & 0 & 0
\end{array}$$
- **[B1]** Correct initial Simplex tableau.

**Step 3: Perform 1st pivot operation**
Pivot on row $t$, column $x_2$ (pivot element = 2).
$$\begin{array}{c|cccccc|c}
\text{b.v.} & x_1 & x_2 & x_3 & r & s & t & \text{value} \\
\hline
r & -1 & 0 & 1 & 1 & 0 & -2 & 420 \\
s & 2 & 0 & 2 & 0 & 1 & -1 & 200 \\
x_2 & \frac{1}{2} & 1 & \frac{1}{2} & 0 & 0 & \frac{1}{2} & 120 \\
\hline
P & -2 & 0 & -1 & 0 & 0 & 3 & 720
\end{array}$$
- **[M1]** Row operations applied correctly.
- **[A1]** Correct tableau after 1st pivot.

**Step 4: Perform 2nd pivot operation**
Pivot on row $s$, column $x_1$ (pivot element = 2).
$$\begin{array}{c|cccccc|c}
\text{b.v.} & x_1 & x_2 & x_3 & r & s & t & \text{value} \\
\hline
r & 0 & 0 & 2 & 1 & \frac{1}{2} & -\frac{5}{2} & 520 \\
x_1 & 1 & 0 & 1 & 0 & \frac{1}{2} & -\frac{1}{2} & 100 \\
x_2 & 0 & 1 & 0 & 0 & -\frac{1}{4} & \frac{3}{4} & 70 \\
\hline
P & 0 & 0 & 1 & 0 & 1 & 2 & 920
\end{array}$$
- **[M1]** Row operations applied correctly.
- **[A1]** Correct final tableau.

**Step 5: State optimal solution**
Maximum profit $= £920$.
$x_1 = 100$ (Type A), $x_2 = 70$ (Type B), $x_3 = 0$ (Type C).
- **[M1]** Read optimal profit from final tableau.
- **[A1]** State correct values of $x_1, x_2, x_3$.

#### **Part (b)**

**Step 6: Identify which wool type should not be increased**
Wool I should not be increased because $r = 520\text{ kg}$ of Wool I is already left unused (slack).
- **[B1]** Correctly identifies Wool I with valid explanation.

#### **Part (c)**

**Step 7: Analyze effect of extra 40 kg wool**
Let $x\text{ kg}$ go to Wool II and $(40 - x)\text{ kg}$ to Wool III ($0 \leqslant x \leqslant 40$).
In initial tableau, RHS values become: $R_1 = 900$, $R_2 = 450 + x$, $R_3 = 240 + (40 - x) = 280 - x$.
First pivot comparison for column $x_2$:
$$\frac{280 - x}{2} < \frac{450 + x}{2} \iff 280 - x < 450 + x \iff 2x > -170$$
This holds for all $0 \leqslant x \leqslant 40$, so row 3 supplies the first pivot element.
- **[B1]** Set up parameter $x$ for additional wool allocation.
- **[M1]** Test first pivot choice.
- **[A1]** Prove 1st pivot element remains unchanged.

**Step 8: Check second pivot choice**
In 2nd tableau, RHS values become $200 + 2x$ for row $s$ and $120 - \frac{1}{2}x$ for row $x_2$.
Comparison for column $x_1$:
$$\frac{200 + 2x}{2} < \frac{120 - \frac{1}{2}x}{\frac{1}{2}} \iff 100 + x < 240 - x \iff 2x < 140 \iff x < 70$$
Since $0 \leqslant x \leqslant 40 < 70$, row $s$ continues to supply the second pivot element.
- **[A1]** Prove 2nd pivot element remains unchanged for all $0 \leqslant x \leqslant 40$.

#### **Part (d)**

**Step 9: Express final column values in terms of $x$**
$R_1 = 420 + 3x$
$R_2 = 100 + x$
$R_3 = 70 - \frac{1}{2}x$
Profit $= 920 + 2.5(40 - x) + 1.5x = 1020 - x$
- **[M1]** Express profit in terms of $x$.

**Step 10: Maximise profit**
To maximise $P = 1020 - x$, set $x = 0$ (all extra 40 kg to Wool III).
- **[A1]** Determine $x = 0$.

**Step 11: State new optimal solution**
Maximum profit $= £1020$.
Number of rugs: Type A $= 100$, Type B $= 80$, Type C $= 0$.
- **[B1]** State new optimal profit and rug quantities.

---
topic: "Flows in Networks 1"
subtopic: "Flow-augmenting routes"
---
### **Question 13**

A printer ($P$) delivers a weekly newspaper in bundles of one hundred to three warehouses $A$, $B$ and $C$. The warehouses then dispatch the bundles to four wholesalers $D$, $E$, $F$ and $G$. The bundles are opened and individual retailers collect the papers from the wholesalers in the quantities they need.

The printer can deliver up to 31, 28 and 15 bundles to $A$, $B$ and $C$ respectively.

$A$ can dispatch up to 20 bundles to $D$, $B$ can dispatch up to 18 bundles to $E$ and 11 to $F$, $C$ can dispatch up to 11 bundles to $G$.

$D$, $E$, $F$ and $G$ estimate that the total number of papers required by the retailers they supply will not exceed 2500, 2200, 1000 and 2000 respectively.

**(a)** Draw a weighted, directed network to represent this situation. **(4)**

**(b)** Verify that this system can supply a maximum of 59 bundles of newspapers from the printers to the retailers, and draw a diagram to show how this may be achieved. **(4)**

The editor of the newspaper wishes to increase supply to the shop owners. Extra supply arcs are added to the network. The table below shows the extra arcs and the maximum number of bundles each can supply. All other arcs remain unchanged.

| New arc | A to E | C to F | E to D | F to G |
|---|---|---|---|---|
| Number of bundles | 20 | 10 | 5 | 8 |

**(c)** Using your answer to part (b) as the initial flow, and adding these new arcs to your network, use the labelling procedure to find the maximum number of papers that can be supplied. You must state your flow-augmenting routes and their value, and draw a diagram to show how your maximal flow may be achieved. **(12)**

**(Total 20 marks)**

### **Mark Scheme 13**

#### **Part (a)**

**Step 1: Draw weighted directed network**

**Figure 3** _(A weighted directed network from source P through warehouses A, B, C and wholesalers D, E, F, G to sink S, showing capacities: PA=31, PB=28, PC=15; AD=20, BE=18, BF=11, CG=11; DS=25, ES=22, FS=10, GS=20)._

- **[M1]** Vertices $P, A, B, C, D, E, F, G, S$ included with directed arcs.
- **[A1]** Correct capacities on printer-to-warehouse arcs ($PA=31, PB=28, PC=15$).
- **[A1]** Correct capacities on warehouse-to-wholesaler arcs ($AD=20, BE=18, BF=11, CG=11$).

#### **Part (b)**

**Step 2: Identify minimum cut**
Cut through arcs $AD, PB, CG$:
$$\text{Capacity} = 20 + 28 + 11 = 59$$
Since max flow = min cut, maximum supply is 59 bundles.
- **[M1]** Identify bottleneck / minimum cut.
- **[A1]** Prove min cut capacity $= 59$.

**Step 3: Draw diagram showing flow of 59 bundles**

**Figure 4** _(A network diagram showing a feasible flow of 59 bundles: PA=20, PB=28, PC=11; AD=20, BE=18, BF=10, CG=11; DS=20, ES=18, FS=10, GS=11)._

- **[M1]** Attempt flow diagram of 59 bundles.
- **[A1]** Correct feasible flow diagram achieving 59 bundles.

#### **Part (c)**

**Step 4: Add new arcs to network**
Add arcs $AE=20, CF=10, ED=5, FG=8$.
- **[M1]** Add new arcs with correct capacities.
- **[A1]** Correct updated network with initial flow of 59.

**Step 5: Find flow-augmenting routes**
- Route 1: $P \to A \to E \to D \to S$, flow value $= 5$
- Route 2: $P \to A \to E \to S$, flow value $= 4$
- Route 3: $P \to C \to F \to G \to S$, flow value $= 4$
- Route 4: $P \to A \to E \to B \to F \to G \to S$ (or equivalent reroute), flow value $= 1$
- **[M1]** Use labelling procedure to find flow-augmenting routes.
- **[A1]** List correct routes and flow values.

**Step 6: State maximal flow and verify minimum cut**
Maximal Flow $= 59 + 5 + 4 + 4 + 1 = 73$ bundles.
Minimum cut through arcs $PE, BF, ES, DS$:
$$\text{Capacity} = 30 + 11 + 22 + 10 = 73$$
- **[M1]** Identify new minimum cut.
- **[A1]** State maximal flow $= 73$ bundles.

**Step 7: Draw diagram of final maximal flow**

**Figure 5** _(A network diagram showing maximal flow of 73 bundles through updated network)._

- **[M1]** Attempt final flow diagram.
- **[A1]** Fully correct maximal flow diagram showing 73 bundles.
- **[A1]** Flow conservation satisfied at all internal vertices.
