---
topic: "Exponentials and Logarithms"
subtopic: "Laws of logarithms"
---
### **Question 1**

**(a)** By writing $u = \log_4 r$, where $r > 0$, show that
$$\log_4 r = \frac{1}{2} \log_2 r$$
**(2)**

**(b)** Solve the equation
$$\log_4(5x^2 - 11) = \log_2(3x - 5)$$
**(5)**

**(Total for Question 1 is 7 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Write in exponential form and take logs to base 2**

Let $u = \log_4 r \Rightarrow 4^u = r$.

Taking logs to base 2:
$$\log_2(4^u) = \log_2 r \Rightarrow u \log_2 4 = \log_2 r \Rightarrow 2u = \log_2 r$$

Alternatively, using the change of base formula:
$$u = \log_4 r = \frac{\log_2 r}{\log_2 4}$$

- **[M1]** Accept use of the "Change of base" formula, but not $\log_4 r = \log_2 r^{\frac{1}{2}}$ without further working.

**Step 2: Complete the proof**

$$u = \log_4 r = \frac{\log_2 r}{2} = \frac{1}{2}\log_2 r$$

- **[A1]** Correct work leading to given answer.

#### **Part (b)**

**Step 3: Express both logarithms to the same base**

Using the result from part (a):
$$\log_4(5x^2 - 11) = \frac{1}{2}\log_2(5x^2 - 11)$$

So the equation becomes:
$$\frac{1}{2}\log_2(5x^2 - 11) = \log_2(3x - 5)$$

- **[M1]** For getting both terms to the same base.

**Step 4: Remove the logarithms**

$$\log_2(5x^2 - 11) = 2\log_2(3x - 5) = \log_2(3x - 5)^2$$
$$\Rightarrow 5x^2 - 11 = (3x - 5)^2$$

- **[M1]** Removing the logs (FT but must involve a power).

**Step 5: Form and solve the quadratic equation**

$$5x^2 - 11 = 9x^2 - 30x + 25$$
$$4x^2 - 30x + 36 = 0 \quad \text{or} \quad 2x^2 - 15x + 18 = 0$$
$$(2x - 3)(x - 6) = 0 \Rightarrow x = \frac{3}{2} \quad \text{or} \quad x = 6$$

- **[M1]** Forms and solves a three term quadratic (need not be the correct one).
- **[A1]** Both answers (or $x = 6$, with $x = \frac{3}{2}$ seen in a factorisation).

**Step 6: Reject the extraneous root**

Noting that $3x - 5 < 0$ when $x = \frac{3}{2}$ (so $\log_2(3x - 5)$ is undefined), hence $x = 6$.

- **[B1]** Single final answer with reason.

### **Examiner Report 1**

This question gave good access for people at the start of the paper, with many scoring full marks, or perhaps just losing the last mark.

In part (a) most used the route $4^u = 2^{2u}$, although some used the change of base formula. Others used a short cut and did not score the marks essentially using what they were intended to prove. Typically, these were $\log_2 r^{1/2} = \log_{2^2}(r^{1/2})^2$ and $\log_4 r = \log_2 r^{1/2}$.

For part (b) most candidates used the result from (a), though a few started again. Some errors, mainly ending up with constant term 26 instead of 36 in the quadratic, were made due to poor algebra. The most common lost mark in this question was the final one as not all checked their solutions were valid and so gave two answers.

---
topic: "Discrete Random Variables"
subtopic: "Solving problems involving random variables"
---
### **Question 2**

The discrete random variable $X$ follows the binomial distribution
$$X \sim \text{B}(n, p)$$
where $0 < p < 1$. The mode of $X$ is $m$.

**(a)** Write down, in terms of $m$, $n$ and $p$, an expression for $\text{P}(X = m)$. **(1)**

**(b)** Determine, in terms of $n$ and $p$, an interval of width 1, in which $m$ lies. **(5)**

**(c)** Find a value of $n$ where $n > 100$, and a value of $p$ where $p < 0.2$, for which $X$ has two modes.
For your chosen values of $n$ and $p$, state these two modes. **(2)**

**(Total for Question 2 is 8 marks)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Write down probability expression**

$$\text{P}(X = m) = \binom{n}{m} p^m (1 - p)^{n - m}$$

- **[B1]** Correct expression. Accept $\text{}^n\text{C}_m$ or factorial form etc. for the binomial coefficient.

#### **Part (b)**

**Step 2: Set up inequality for mode**

Want $\text{P}(X = m - 1) \le \text{P}(X = m)$ or $\text{P}(X = m + 1) \le \text{P}(X = m)$.

- **[M1]** Allow $\le$ for $<$ at endpoints throughout (may be implied by final answer).

**Step 3: Substitute binomial expressions**

$$\binom{n}{m - 1} p^{m - 1} (1 - p)^{n - m + 1} \le \binom{n}{m} p^m (1 - p)^{n - m}$$
$$\text{or} \quad \binom{n}{m + 1} p^{m + 1} (1 - p)^{n - m - 1} \le \binom{n}{m} p^m (1 - p)^{n - m}$$

- **[M1]** Attempted with at least one correct inequality. Allow with $=$ used for this and the next two Ms.

**Step 4: Use factorial form**

$$\frac{n!}{(m - 1)!(n - m + 1)!} p^{m - 1} (1 - p)^{n - m + 1} \le \frac{n!}{m!(n - m)!} p^m (1 - p)^{n - m}$$
$$\text{or} \quad \frac{n!}{(m + 1)!(n - m - 1)!} p^{m + 1} (1 - p)^{n - m - 1} \le \frac{n!}{m!(n - m)!} p^m (1 - p)^{n - m}$$

- **[M1]** Use of factorial form for the binomial coefficients in at least two probability expressions.

**Step 5: Cancel common factors**

$$\frac{1 - p}{n - m + 1} \le \frac{p}{m} \quad \text{or} \quad \frac{p}{m + 1} \le \frac{1 - p}{n - m}$$

- **[M1]** Appropriate cancelling of terms attempted.

**Step 6: Simplify to obtain the interval**

From $\frac{1 - p}{n - m + 1} \le \frac{p}{m} \Rightarrow m(1 - p) \le p(n - m + 1) \Rightarrow m \le (n + 1)p$.

From $\frac{p}{m + 1} \le \frac{1 - p}{n - m} \Rightarrow p(n - m) \le (m + 1)(1 - p) \Rightarrow (n + 1)p - 1 \le m$.

Combining gives:
$$(n + 1)p - 1 \le m \le (n + 1)p$$

- **[A1]** Correct inequality.

#### **Part (c)**

**Step 7: Choose parameters for non-unique mode**

Taking e.g. $p = 0.1$, we require both ends of the above interval to be integers, so $\frac{1}{10}(n + 1)$ must be an integer.

- **[M1]** Sensible choice for $p$ and a strategy to calculate a suitable $n$ i.e. sets the end points of their interval of length 1 to be integers.

**Step 8: State values and corresponding modes**

Try $n = 109$ (e.g.), then $(n + 1)p = 110 \times 0.1 = 11$.

The interval is $10 \le m \le 11$, giving modes 10 and 11.

- **[A1]** Valid answers given.

### **Examiner Report 2**

This question did not work as expected, with most candidates, even distinction candidates, making little progress beyond part (a). Candidates seem to be very well prepared for the pure mathematics questions, but were unprepared for a question on the binomial distribution.

Nearly all of the candidates did recall the basic definition and obtain a correct expression for part (a). However, very few even attempted (b) or (c) and those that did most often assumed the interval would be centred on the mean, so gave $np - \frac{1}{2} < m < np + \frac{1}{2}$ as the interval. Even these generally did not proceed with a correct strategy for part (c).

Those that knew what to do generally achieved the correct interval in part (b), but still had trouble with part (c).

---
topic: "Algebraic Expressions"
subtopic: "Rationalising denominators"
---
### **Question 3**

Given that $\phi = \frac{1}{2}(\sqrt{5} + 1)$,

**(a)** show that

**(i)** $\phi^2 = \phi + 1$

**(ii)** $\frac{1}{\phi} = \phi - 1$
**(4)**

**(b)** The equations of two curves are
$$y = \frac{1}{x}, \quad x > 0$$
$$\text{and} \quad y = \ln x - x + k, \quad x > 0$$
where $k$ is a positive constant.
The curves touch at the point $P$.
Find in terms of $\phi$

**(i)** the coordinates of $P$,

**(ii)** the value of $k$.
**(6)**
**(+S1)**

**(Total for Question 3 is 11 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Square $\phi$**

$$\phi^2 = \left(\frac{1}{2}(\sqrt{5} + 1)\right)^2 = \frac{1}{4}(5 + 2\sqrt{5} + 1) = \frac{1}{4}(6 + 2\sqrt{5}) = \frac{1}{2}(3 + \sqrt{5})$$

- **[M1]** Good attempt at squaring.

**Step 2: Complete the proof for (a)(i)**

$$\frac{1}{2}(3 + \sqrt{5}) = \frac{1}{2}(1 + \sqrt{5}) + 1 = \phi + 1$$

- **[A1]** All legitimately shown.

**Step 3: Evaluate $\frac{1}{\phi}$**

$$\frac{1}{\phi} = \frac{2}{\sqrt{5} + 1} \times \left(\frac{\sqrt{5} - 1}{\sqrt{5} - 1}\right) = \frac{2(\sqrt{5} - 1)}{4} = \frac{1}{2}(\sqrt{5} - 1)$$

Alternatively, divide $\phi^2 = \phi + 1$ by $\phi$ to obtain $\phi = 1 + \frac{1}{\phi} \Rightarrow \frac{1}{\phi} = \phi - 1$.

- **[M1]** Relevant surd-work attempted (or divides $\phi^2 = \phi + 1$ by $\phi$).

**Step 4: Complete the proof for (a)(ii)**

$$\frac{1}{2}(\sqrt{5} - 1) = \frac{1}{2}(\sqrt{5} + 1) - 1 = \phi - 1$$

- **[A1]** All legitimately shown.

#### **Part (b)**

**Step 5: Find the derivatives of both curves**

$$\frac{\text{d}y_1}{\text{d}x} = -\frac{1}{x^2} \quad \text{and} \quad \frac{\text{d}y_2}{\text{d}x} = \frac{1}{x} - 1$$

- **[M1]** Both gradients attempted.

**Step 6: Equate gradients at the point of touching**

$$-\frac{1}{x^2} = \frac{1}{x} - 1 \Rightarrow x^2 - x - 1 = 0 \quad (\text{or } x^2 = x + 1)$$

- **[M1]** Gradients equated.
- **[A1]** Correct equation deduced.

**Step 7: Find coordinates of $P$ in terms of $\phi$**

Since $x > 0$, the positive root of $x^2 - x - 1 = 0$ is $x = \phi$.

$y = \frac{1}{\phi}$ or $\phi - 1$.

- **[A1]** $x$-coordinate correct.
- **[A1]** $y$-coordinate correct.
(Allow SC A1A0 here if both correct but not in terms of $\phi$).

**Step 8: Find $k$**

Substitute $P\left(\phi, \frac{1}{\phi}\right)$ into $y = \ln x - x + k$:
$$\frac{1}{\phi} = \ln \phi - \phi + k \Rightarrow k = \frac{1}{\phi} + \phi - \ln \phi$$
$$k = (\phi - 1) + \phi - \ln \phi = 2\phi - 1 - \ln \phi \quad \text{or} \quad \sqrt{5} - \ln \phi$$

- **[A1]** Accept any sensible equivalent in terms of $\phi$.

**Step 9: Presentation mark S1**

- **[S1]** Award S1 for a clear solution that is EITHER fully correct and concise OR that scores 9+ and includes an S+ but may be slightly laboured.

### **Examiner Report 3**

This question most commonly scored either 4 or 10 marks (and possibly an S mark in the latter case), with very little variety in between.

Part (a) was routine work for most, with a mix of candidates who worked from left to right and those who evaluated to a common middle term. In the latter case some did not write down a conclusion at the end, so lost some credit. Very few noticed in (ii) that the result could be achieved directly from the result of (i) without needing to evaluate $\phi^2$. This approach was a good marker for distinction candidates in this question.

For part (b) the key was understanding that the curves ‘touching’ meant the derivatives had to agree at the point. Those who spotted this usually went on to achieve the correct answer, otherwise no marks were scored.

---
topic: "Trigonometry and Modelling"
subtopic: "Proving trigonometric identities"
---
### **Question 4**

**(a)** Prove the identity
$$(\sin x + \cos y)\cos(x - y) \equiv (1 + \sin(x - y))(\cos x + \sin y)$$
**(5)**

**(b)** Hence, or otherwise, show that
$$\frac{\sin 5\theta + \cos 3\theta}{\cos 5\theta + \sin 3\theta} \equiv \frac{1 + \tan \theta}{1 - \tan \theta}$$
**(6)**

**(c)** Given that $k > 1$, show that the equation
$$\frac{\sin 5\theta + \cos 3\theta}{\cos 5\theta + \sin 3\theta} = k$$
has a unique solution in the interval $0 < \theta < \frac{\pi}{4}$.
**(4)**
**(+S2)**

**(Total for Question 4 is 17 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Expand LHS using compound angle formula**

$$\text{LHS} = (\sin x + \cos y)(\cos x \cos y + \sin x \sin y)$$
$$= \sin x \cos x \cos y + \sin^2 x \sin y + \cos x \cos^2 y + \sin x \sin y \cos y$$

- **[M1]** Applies $\cos(x - y)$ formula and expands the brackets.

**Step 2: Replace $\cos^2 y$ and $\sin^2 x$ using Pythagorean identities**

$$\text{LHS} = \sin x \cos x \cos y + (1 - \cos^2 x)\sin y + \cos x(1 - \sin^2 y) + \sin x \sin y \cos y$$

- **[M1]** Replaces $\cos^2 y$ by $1 - \sin^2 y$ and $\sin^2 x$ by $1 - \cos^2 x$ respectively.

**Step 3: Rearrange and factorise**

$$\text{LHS} = \sin y + \cos x + \cos x(\sin x \cos y - \cos x \sin y) + \sin y(\sin x \cos y - \cos x \sin y)$$

- **[M1]** Expands, rearranges and factorises appropriately.

**Step 4: Factor out $(\sin y + \cos x)$**

$$\text{LHS} = (\sin y + \cos x)(1 + (\sin x \cos y - \cos x \sin y))$$

- **[M1]** Factors out the $(\sin y + \cos x)$.

**Step 5: Apply $\sin(x - y)$ formula to complete LHS = RHS**

$$\text{LHS} = (\cos x + \sin y)(1 + \sin(x - y)) = \text{RHS}$$

- **[A1]** Applies $\sin(x - y)$ formula and completes to RHS.

#### **Part (b)**

**Step 6: Rearrange the identity from (a)**

Setting $x = 5\theta$ and $y = 3\theta$:
$$(\sin 5\theta + \cos 3\theta)\cos 2\theta \equiv (1 + \sin 2\theta)(\cos 5\theta + \sin 3\theta)$$
$$\Rightarrow \frac{\sin 5\theta + \cos 3\theta}{\cos 5\theta + \sin 3\theta} \equiv \frac{1 + \sin 2\theta}{\cos 2\theta}$$

- **[M1]** Re-arranging and setting $x = 5\theta, y = 3\theta$ using (a)'s result.

**Step 7: Apply double-angle formulae**

$$\frac{1 + \sin 2\theta}{\cos 2\theta} = \frac{1 + 2\sin\theta\cos\theta}{\cos^2\theta - \sin^2\theta}$$

- **[M1]** Use of double-angle formulae.
- **[A1]** Correct expression in terms of $\sin\theta$ and $\cos\theta$.

**Step 8: Factorise numerator and denominator**

$$\frac{\cos^2\theta + 2\sin\theta\cos\theta + \sin^2\theta}{\cos^2\theta - \sin^2\theta} = \frac{(\cos\theta + \sin\theta)^2}{(\cos\theta - \sin\theta)(\cos\theta + \sin\theta)} = \frac{\cos\theta + \sin\theta}{\cos\theta - \sin\theta}$$

- **[M1]** Factorisation & cancelling.

**Step 9: Convert to $\tan\theta$**

Dividing numerator and denominator by $\cos\theta$:
$$\frac{\frac{\cos\theta}{\cos\theta} + \frac{\sin\theta}{\cos\theta}}{\frac{\cos\theta}{\cos\theta} - \frac{\sin\theta}{\cos\theta}} = \frac{1 + \tan\theta}{1 - \tan\theta}$$

- **[M1]** Converting to tans.
- **[A1]** Given Answer all correctly obtained.

#### **Part (c)**

**Step 10: Rearrange to find $\tan\theta$ in terms of $k$**

$$\frac{1 + \tan\theta}{1 - \tan\theta} = k \Rightarrow 1 + \tan\theta = k - k\tan\theta \Rightarrow k - 1 = \tan\theta(k + 1)$$
$$\Rightarrow \tan\theta = \frac{k - 1}{k + 1} \quad \text{or} \quad \theta = \arctan\left(\frac{k - 1}{k + 1}\right)$$

- **[M1]** Rearranging to $\tan\theta = \dots$
- **[A1]** Correct expression for $\tan\theta$ or $\theta$.

**Step 11: Explain 1-1 property**

Explain 1-1-ness of mapping $k \to \theta$ (e.g. by graph of $y = \frac{x - 1}{x + 1}$ or its gradient $> 0$ always).

- **[B1]** Clear explanation of one-to-one property.

**Step 12: Deduce interval for $\theta$**

For $k > 1$, $0 < k - 1 < k + 1$, so $0 < \frac{k - 1}{k + 1} < 1$.
$$\Rightarrow 0 < \tan\theta < 1 \Rightarrow 0 < \theta < \frac{\pi}{4}$$

- **[B1]** For convincing reasoning that each $k > 1$ gives a unique $\theta$ in the required interval.

**Step 13: Presentation marks S2**

- **[S2]** Award S1 for a clear solution scoring 9+ in (a) and (b) with one part fully correct and concise, or 12+ total with S+ point. Award S2 for clear and concise solution throughout scoring at least 12 marks with S+ point.

### **Examiner Report 4**

This was the first question that gave distinction candidates a chance to excel, with some very elegant answers seen to parts (a) and (b). Fully correct solutions to (c), however, were rare.

In part (a) the challenge was proceeding from the first 1 or 2 marks to completing the proof. Most expanded both sides independently to try and reach a common expression. Spotting and applying the use of $\cos^2 x = 1 - \sin^2 x$ and $\sin^2 x = 1 - \cos^2 x$ was the main stumbling block. Candidates who worked on the sides in parallel often did not state a conclusion.

For part (b) most used the result in (a) to arrive at $\frac{1 + \sin 2\theta}{\cos 2\theta}$, but many went astray by choosing a less convenient form for the denominator such as $2\cos^2\theta - 1$. These would often try to write the expression in terms of $\sec\theta$ and $\tan\theta$ with varying degrees of success and arriving at an expression in $\tan\theta$.

Again several candidates chose to work with both sides to reach a common expression, but would often lack a conclusion. Only a very small proportion used the $4\theta, \theta$ route. It was very rare to see candidates achieve the S+ for observing $\tan\theta \neq 1$ was required, or similar.

In part (c) most took the strategy of finding $\tan\theta$ in terms of $k$ to score the first two marks. The last two marks were harder to achieve, but many scored one or the other. Scoring both was rare; either they would focus on the explanation of uniqueness of a solution, or else would concentrate on showing any solution must be in the interval $0 < \theta < \pi/4$, but seldom brought both aspects together.

Some wrote $\tan\theta = 1 - \frac{2}{k+1}$ to clearly show the behaviour of the term on the right hand side as $k$ increases, but others thought that they had to produce a quadratic equation and look for a repeated root, which they did by squaring up.

There was a good proportion of candidates who scored S1 for a good attempt at both (a) and (b), while distinction candidates had a good opportunity to score S2.

---
topic: "Vectors"
subtopic: "Solving geometric problems"
---
### **Question 5**

Points $A$ and $B$ have position vectors $\mathbf{a}$ and $\mathbf{b}$, respectively, relative to an origin $O$, and are such that $OAB$ is a triangle with $OA = a$ and $OB = b$.

The point $C$, with position vector $\mathbf{c}$, lies on the line through $O$ that bisects the angle $AOB$.

**(a)** Prove that the vector $b\mathbf{a} - a\mathbf{b}$ is perpendicular to $\mathbf{c}$. **(4)**

The point $D$, with position vector $\mathbf{d}$, lies on the line $AB$ between $A$ and $B$.

**(b)** Explain why $\mathbf{d}$ can be expressed in the form $\mathbf{d} = (1 - \lambda)\mathbf{a} + \lambda\mathbf{b}$ for some scalar $\lambda$ with $0 < \lambda < 1$ **(2)**

**(c)** Given that $D$ is also on the line $OC$, find an expression for $\lambda$ in terms of $a$ and $b$ only and hence show that
$$DA : DB = OA : OB$$
**(8)**
**(+S2)**

**(Total for Question 5 is 16 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Define points along $OA$ and $OB$**

Let $P$ and $Q$ be points such that $\overrightarrow{OP} = b\mathbf{a}$ and $\overrightarrow{OQ} = a\mathbf{b}$.

- **[M1]** Extends $OA$ and $OB$ (may use unit vectors instead).

**Step 2: Show triangle $OPQ$ is isosceles**

$|\overrightarrow{OP}| = |b\mathbf{a}| = ba$ and $|\overrightarrow{OQ}| = |a\mathbf{b}| = ab$, hence $|\overrightarrow{OP}| = |\overrightarrow{OQ}|$, so $OPQ$ is isosceles.

- **[A1]** Deduce isosceles or equivalent.

**Step 3: Relate angle bisector to perpendicularity**

In an isosceles triangle, the angle bisector from $O$ is perpendicular to $PQ$.

- **[M1]** Use isosceles property to deduce perpendicularity.

**Step 4: Draw conclusion**

$\overrightarrow{QP} = \overrightarrow{OP} - \overrightarrow{OQ} = b\mathbf{a} - a\mathbf{b}$. As $C$ is on the angle bisector, $b\mathbf{a} - a\mathbf{b}$ is perpendicular to $\mathbf{c}$.

- **[A1]** Draw correct conclusion.

#### **Part (b)**

**Step 5: Set up equation for $D$ on line $AB$**

$$\overrightarrow{OD} = \overrightarrow{OA} + \lambda\overrightarrow{AB} \Rightarrow \mathbf{d} = \mathbf{a} + \lambda(\mathbf{b} - \mathbf{a})$$

- **[M1]** Sets up appropriate vector equation.

**Step 6: Complete explanation**

$$\mathbf{d} = (1 - \lambda)\mathbf{a} + \lambda\mathbf{b}$$
Since $D$ lies on $AB$ strictly between $A$ and $B$, $0 < \lambda < 1$.

- **[A1]** Correctly shown with reasoning for $\lambda$.

#### **Part (c)**

**Step 7: Express $\mathbf{d}$ as a multiple of $b\mathbf{a} + a\mathbf{b}$**

Since $D$ lies on $OC$ (the angle bisector), $\mathbf{d} = k\mathbf{c}$. From part (a), $\mathbf{c}$ is parallel to $\overrightarrow{OP} + \overrightarrow{OQ} = b\mathbf{a} + a\mathbf{b}$, so $\mathbf{d} = k'(b\mathbf{a} + a\mathbf{b})$.

- **[M1]** Makes deduction that $\mathbf{d}$ is a multiple of $b\mathbf{a} + a\mathbf{b}$.

**Step 8: Equate two expressions for $\mathbf{d}$**

$$k'(b\mathbf{a} + a\mathbf{b}) = (1 - \lambda)\mathbf{a} + \lambda\mathbf{b}$$

- **[M1]** Equates their $\mathbf{d}$ to $\mathbf{d}$ from part (b).
- **[M1]** Forms equation in $\mathbf{a}$ and $\mathbf{b}$.

**Step 9: Solve for $\lambda$**

Since $\mathbf{a}$ and $\mathbf{b}$ are non-parallel vectors:
$$k'b = 1 - \lambda \quad \text{and} \quad k'a = \lambda$$
$$\Rightarrow \frac{\lambda}{a} b = 1 - \lambda \Rightarrow \lambda\left(1 + \frac{b}{a}\right) = 1 \Rightarrow \lambda = \frac{a}{a + b}$$

- **[M1]** Extracts simultaneous equations.
- **[A1]** Solves for $\lambda = \frac{a}{a + b}$.

**Step 10: Express lengths $AD$ and $BD$**

$$\overrightarrow{AD} = \mathbf{d} - \mathbf{a} = (1 - \lambda)\mathbf{a} + \lambda\mathbf{b} - \mathbf{a} = \lambda(\mathbf{b} - \mathbf{a}) \Rightarrow AD = \lambda|\mathbf{b} - \mathbf{a}|$$
$$\overrightarrow{BD} = \mathbf{d} - \mathbf{b} = (1 - \lambda)\mathbf{a} + \lambda\mathbf{b} - \mathbf{b} = (1 - \lambda)(\mathbf{a} - \mathbf{b}) \Rightarrow BD = (1 - \lambda)|\mathbf{b} - \mathbf{a}|$$

- **[M1]** Correct work to establish ratio of vector lengths.

**Step 11: Establish the ratio**

$$\frac{DA}{DB} = \frac{\lambda}{1 - \lambda} = \frac{\frac{a}{a + b}}{1 - \frac{a}{a + b}} = \frac{\frac{a}{a + b}}{\frac{b}{a + b}} = \frac{a}{b} = \frac{OA}{OB}$$

- **[dM1]** Substitutes in for $\lambda$.
- **[A1]** Given result established: $DA : DB = OA : OB$.

**Step 12: Presentation marks S2**

- **[S2]** Award S1 for clear solution scoring 10+ with at least one S+ point. Award S2 for clear and concise solution scoring 12+ with at least 2 S+ points and no majorly incorrect vector notation used.

### **Examiner Report 5**

This vector question proved to be very discriminating, with many candidates struggling to see the way through parts (a) and (c). One change to the specification is that the scalar product is no longer tested at A-level, and it provided little extra help to those who knew of it here. A much more visual approach to vectors will be needed to tackle this kind of question, and a good sketch proved very useful to those who gave one. However many drew only $\mathbf{a}$ and $\mathbf{b}$ on a sketch, and did not proceed further to $b\mathbf{a}$ and $a\mathbf{b}$.

Most who went for a geometric approach used either isosceles triangles (mainly sides $b\mathbf{a}$ and $a\mathbf{b}$ or sides $\mathbf{a}/a$ and $\mathbf{b}/b$) or rhombuses. These candidates tended to be successful in part (c) also.

Those that used a scalar product approach sometimes used poor algebra and notation left a lot to be desired with poor distinction between scalars and vectors. There was also a great deal of confusion between vectors and their components.

Only part (b) was well answered by the majority, though some missed out this routine part when they could not get started with part (a). Consequently, it was rare to see more than one S mark awarded for this question.

---
topic: "Integration"
subtopic: "Integration by parts"
---
### **Question 6**

**Figure 1** _(A sketch of part of the curve $y = x\sin(\ln x)$ for $x \ge 1$, crossing the x-axis at $A$ and enclosing a shaded region $R$ with the x-axis)._

Figure 1 shows a sketch of part of the curve with equation $y = x\sin(\ln x)$, $x \ge 1$.

For $x > 1$, the curve first crosses the $x$-axis at the point $A$.

**(a)** Find the $x$ coordinate of $A$. **(3)**

**(b)** Differentiate $x\sin(\ln x)$ and $x\cos(\ln x)$ with respect to $x$ and hence find
$$\int \sin(\ln x)\,\text{d}x \quad \text{and} \quad \int \cos(\ln x)\,\text{d}x$$
**(7)**

**(c)** **(i)** Find $\int x\sin(\ln x)\,\text{d}x$.

**(ii)** Hence show that the area of the shaded region $R$, bounded by the curve and the $x$-axis between the points $(1, 0)$ and $A$, is
$$\frac{1}{5}(e^{2\pi} + 1)$$
**(9)**

**(Total for Question 6 is 19 marks)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Set equation to 0**

Want $x\sin(\ln x) = 0 \Rightarrow \ln x = 0, \pi, 2\pi, \dots$

- **[M1]** Sets equal to 0 and extracts second solution for $\sin$ to $\ln x$.

**Step 2: Find $x$-coordinate of $A$**

$\ln x = \pi \Rightarrow x = e^\pi$

- **[M1]** Sets $e$ to their "$\pi$".
- **[A1]** Must give only the one answer $x = e^\pi$.

#### **Part (b)**

**Step 3: Differentiate $x\sin(\ln x)$**

$$\frac{\text{d}}{\text{d}x}(x\sin(\ln x)) = 1 \cdot \sin(\ln x) + x \cdot \cos(\ln x) \cdot \frac{1}{x} = \sin(\ln x) + \cos(\ln x)$$

- **[M1]** Use of the Product Rule.
- **[A1]** All correct, simplified.

**Step 4: Differentiate $x\cos(\ln x)$**

$$\frac{\text{d}}{\text{d}x}(x\cos(\ln x)) = 1 \cdot \cos(\ln x) + x \cdot \left(-\sin(\ln x) \cdot \frac{1}{x}\right) = \cos(\ln x) - \sin(\ln x)$$

- **[M1]** With Product Rule.
- **[A1]** All correct, simplified.

**Step 5: Combine results to find the integrals**

Adding the two derivatives:
$$\frac{\text{d}}{\text{d}x}(x\sin(\ln x) + x\cos(\ln x)) = 2\cos(\ln x) \Rightarrow \int \cos(\ln x)\,\text{d}x = \frac{1}{2}x(\sin(\ln x) + \cos(\ln x)) + k_1$$

Subtracting the second derivative from the first:
$$\frac{\text{d}}{\text{d}x}(x\sin(\ln x) - x\cos(\ln x)) = 2\sin(\ln x) \Rightarrow \int \sin(\ln x)\,\text{d}x = \frac{1}{2}x(\sin(\ln x) - \cos(\ln x)) + k_2$$

- **[M1]** Must be a genuine attempt to combine derivatives to integrate.
- **[A1]** Correct $\int \cos(\ln x)\,\text{d}x$.
- **[A1]** Correct $\int \sin(\ln x)\,\text{d}x$.

#### **Part (c)**

**Step 6: Set up integration by parts**

Let $S = \int x\sin(\ln x)\,\text{d}x$ and $C = \int x\cos(\ln x)\,\text{d}x$.

Method I — Using integration by parts on $S$:
$$S = \int \sin(\ln x) \cdot x\,\text{d}x = \frac{1}{2}x^2\sin(\ln x) - \int \frac{1}{2}x^2 \cdot \cos(\ln x) \cdot \frac{1}{x}\,\text{d}x = \frac{1}{2}x^2\sin(\ln x) - \frac{1}{2}C$$

- **[M1]** Use of integration by parts on $S$.
- **[A1]** Correct (unsimplified).

**Step 7: Apply integration by parts on $C$**

$$C = \int \cos(\ln x) \cdot x\,\text{d}x = \frac{1}{2}x^2\cos(\ln x) - \int \frac{1}{2}x^2 \cdot \left(-\sin(\ln x) \cdot \frac{1}{x}\right)\text{d}x = \frac{1}{2}x^2\cos(\ln x) + \frac{1}{2}S$$

- **[M1]** Use of integration by parts on $C$.
- **[A1]** Correct (unsimplified).

**Step 8: Eliminate $C$ and solve for $S$**

$$S = \frac{1}{2}x^2\sin(\ln x) - \frac{1}{2}\left(\frac{1}{2}x^2\cos(\ln x) + \frac{1}{2}S\right) = \frac{1}{2}x^2\sin(\ln x) - \frac{1}{4}x^2\cos(\ln x) - \frac{1}{4}S$$

- **[M1]** Solves simultaneously for $S$ and $C$.

**Step 9: Obtain final integral for $S$**

$$\frac{5}{4}S = \frac{1}{4}x^2(2\sin(\ln x) - \cos(\ln x)) \Rightarrow S = \frac{1}{5}x^2(2\sin(\ln x) - \cos(\ln x)) + k$$

- **[M1]** Rearranges to find $S = \dots$
- **[A1]** Correct answer (ignore missing $+ k$).

**Step 10: Evaluate definite integral for area of $R$**

Use limits $1$ and $e^\pi$:
$$\text{Area of } R = \left[ \frac{1}{5}x^2(2\sin(\ln x) - \cos(\ln x)) \right]_1^{e^\pi}$$
$$= \frac{1}{5}(e^\pi)^2(2\sin\pi - \cos\pi) - \frac{1}{5}(1)^2(2\sin 0 - \cos 0)$$
$$= \frac{1}{5}e^{2\pi}(0 - (-1)) - \frac{1}{5}(0 - 1) = \frac{1}{5}e^{2\pi} + \frac{1}{5} = \frac{1}{5}(e^{2\pi} + 1)$$

- **[M1]** Attempted use of limits $1$ and their answer to (a) in their integral.
- **[A1]** Correct Given Answer from fully correct working.

### **Examiner Report 6**

This question was very well answered by the majority of candidates and provided the bulk of the marks for low scoring candidates. Fully correct answers were seen even by candidates below the merit boundary. It is the type of question that candidates were well prepared for, and looked to be expecting a question of this type.

Part (a) proved little trouble for candidates, with nearly all scoring all the marks. A few gave $2\pi$ (or even 180 in very rare instances) instead of $\pi$ in the index, but such cases were few and far between.

Many understood the structure of part (b) in its reliance on the fundamental theorem and were able to achieve full marks. Candidates who did not were unlikely to be ones to reach the merit threshold.

Likewise for (c) most understood they had to find an implicit expression for $I$. All the approaches given in the mark scheme were seen as approaches, as also were some hybrid attempts – recognising the need to find two expressions in $I$ and $J$ and solve. As an element of advice to candidates, using capital letters such as $I$ and $J$ for integrals keeps the work tidier and more compact and less liable to errors (especially sign errors, which was the most common type of error to make in this part).

A few candidates failed to give a final answer to part (c)(i) but rather rolled their work directly into evaluating the definite integral for (ii).

---
topic: "Differentiation"
subtopic: "Modelling with differentiation"
---
### **Question 7**

**Figure 2** _(A rectangle $OABC$ with side $OA = a$ along the x-axis and side $OC = b$. Edgar runs along $OA$ a distance $x$ to $D$, then wades through the marsh from $D$ to $B$)._

Figure 2 shows a rectangular section of marshland, $OABC$, which is $a$ metres long by $b$ metres wide, where $a > b$.

Edgar intends to get from $O$ to $B$ in the shortest possible time. In order to do this, he runs along edge $OA$ for a distance $x$ metres ($0 \le x < a$) to the point $D$ before wading through the marsh directly from $D$ to $B$.

Edgar can wade through the marsh at a constant speed of $1\text{ m s}^{-1}$, and he can run along the edge of the marsh at a constant speed of $\lambda\text{ m s}^{-1}$, where $\lambda > 1$.

**(a)** By finding an expression in terms of $x$ for the time taken, $t$ seconds, for Edgar to reach $B$ from $O$, show that
$$\frac{\text{d}t}{\text{d}x} = \frac{1}{\lambda} - \frac{a - x}{\sqrt{(a - x)^2 + b^2}}$$
**(5)**

**(b)** **(i)** Find, in terms of $a$, $b$ and $\lambda$, the value of $x$ for which $\frac{\text{d}t}{\text{d}x} = 0$

**(ii)** Show that this value of $x$ lies in the interval $0 \le x < a$ provided $\lambda \ge \sqrt{1 + \frac{b^2}{a^2}}$

**(iii)** For $\lambda$ in this range, show that the value of $x$ found in (b)(i) gives a minimum value of $t$.
**(8)**

**(c)** Find the minimum time taken for Edgar to get from $O$ to $B$ if

**(i)** $\lambda \ge \sqrt{1 + \frac{b^2}{a^2}}$

**(ii)** $1 < \lambda < \sqrt{1 + \frac{b^2}{a^2}}$
**(4)**

Edgar's friend, Frankie, also runs at a constant speed of $\lambda\text{ m s}^{-1}$. Frankie runs along the edges $OA$ and $AB$. Given that $\lambda \ge \sqrt{1 + \frac{b^2}{a^2}}$

**(d)** find the range of values of $\lambda$ for which Frankie gets to $B$ from $O$ in a shorter time than Edgar's minimum time. **(3)**
**(+S2)**

**(Total for Question 7 is 22 marks)**

### **Mark Scheme 7**

#### **Part (a)**

**Step 1: Express $DB$ using Pythagoras' Theorem**

$$DB = \sqrt{(a - x)^2 + b^2}$$

- **[B1]** May be implied by use in formula.

**Step 2: Form expression for total time $t$**

$$t = \frac{x}{\lambda} + \sqrt{(a - x)^2 + b^2}$$

- **[B1]** Correct expression.

**Step 3: Differentiate $t$ with respect to $x$**

$$\frac{\text{d}t}{\text{d}x} = \frac{1}{\lambda} + \frac{1}{2}((a - x)^2 + b^2)^{-\frac{1}{2}} \times 2(a - x) \times (-1)$$

- **[M1]** Attempts differentiation of square root using chain rule.
- **[A1]** Correct differentiation of square root term.

**Step 4: Obtain given answer**

$$\frac{\text{d}t}{\text{d}x} = \frac{1}{\lambda} - \frac{a - x}{\sqrt{(a - x)^2 + b^2}}$$

- **[A1]** Given Answer legitimately obtained.

#### **Part (b)**

**Step 5: Set $\frac{\text{d}t}{\text{d}x} = 0$ and square**

$$\frac{1}{\lambda} = \frac{a - x}{\sqrt{(a - x)^2 + b^2}} \Rightarrow \sqrt{(a - x)^2 + b^2} = \lambda(a - x)$$
$$(a - x)^2 + b^2 = \lambda^2(a - x)^2 \Rightarrow b^2 = (\lambda^2 - 1)(a - x)^2$$

- **[M1]** Setting $\frac{\text{d}t}{\text{d}x} = 0$ & squaring.

**Step 6: Solve for $x$**

$$(a - x)^2 = \frac{b^2}{\lambda^2 - 1} \Rightarrow a - x = \frac{b}{\sqrt{\lambda^2 - 1}} \quad (\text{since } x < a)$$
$$\Rightarrow x = a - \frac{b}{\sqrt{\lambda^2 - 1}}$$

- **[M1]** Rearranging for $x$.
- **[A1]** Correct solution selected and simplified.

**Step 7: Establish condition for $0 \le x < a$**

For $x \ge 0$:
$$a - \frac{b}{\sqrt{\lambda^2 - 1}} \ge 0 \Rightarrow \sqrt{\lambda^2 - 1} \ge \frac{b}{a} \Rightarrow \lambda^2 - 1 \ge \frac{b^2}{a^2} \Rightarrow \lambda \ge \sqrt{1 + \frac{b^2}{a^2}}$$

Since $\frac{b}{\sqrt{\lambda^2 - 1}} > 0$, $x < a$ is satisfied for all $\lambda > 1$.

- **[M1]** Attempt to find $x$ in required interval.
- **[A1]** Given Answer legitimately obtained.

**Step 8: Verify minimum using second derivative**

Let $\frac{\text{d}t}{\text{d}x} = \frac{1}{\lambda} - \frac{N}{D}$ where $N = a - x$ and $D = \sqrt{(a - x)^2 + b^2}$.

$$\frac{\text{d}^2 t}{\text{d}x^2} = -\frac{(-1)\sqrt{(a - x)^2 + b^2} - (a - x) \cdot \frac{-(a - x)}{\sqrt{(a - x)^2 + b^2}}}{(a - x)^2 + b^2}$$
$$= \frac{(a - x)^2 + b^2 - (a - x)^2}{((a - x)^2 + b^2)^{\frac{3}{2}}} = \frac{b^2}{((a - x)^2 + b^2)^{\frac{3}{2}}}$$

Since $b^2 > 0$ and $((a - x)^2 + b^2)^{\frac{3}{2}} > 0$, $\frac{\text{d}^2 t}{\text{d}x^2} > 0$, hence a minimum.

- **[M1]** Attempt at 2nd derivative.
- **[A1]** Correct unsimplified answer.
- **[A1]** Correctly concluded from correct second derivative.

#### **Part (c)**

**Step 9: Calculate minimum time for case (i)**

Substitute $x = a - \frac{b}{\sqrt{\lambda^2 - 1}}$ into $t$:

$$t = \frac{a - \frac{b}{\sqrt{\lambda^2 - 1}}}{\lambda} + \sqrt{\frac{b^2}{\lambda^2 - 1} + b^2} = \frac{a}{\lambda} - \frac{b}{\lambda\sqrt{\lambda^2 - 1}} + \frac{b\lambda}{\sqrt{\lambda^2 - 1}}$$
$$= \frac{a}{\lambda} + \frac{b(\lambda^2 - 1)}{\lambda\sqrt{\lambda^2 - 1}} = \frac{1}{\lambda}\left(a + b\sqrt{\lambda^2 - 1}\right)$$

- **[M1]** Substituting for $x$.
- **[A1]** Correct in terms of $\sqrt{\lambda^2 - 1}$.

**Step 10: Calculate minimum time for case (ii)**

When $1 < \lambda < \sqrt{1 + \frac{b^2}{a^2}}$, the derivative $\frac{\text{d}t}{\text{d}x} > 0$ for all $0 \le x \le a$, so $t$ is minimised when $x = 0$:

$$t = \frac{0}{\lambda} + \sqrt{(a - 0)^2 + b^2} = \sqrt{a^2 + b^2}$$

- **[M1]** Finds time for $x = 0$ from their equation.
- **[A1]** Correct answer $\sqrt{a^2 + b^2}$.

#### **Part (d)**

**Step 11: Express Frankie's time**

Frankie runs distance $OA + AB = a + b$ at speed $\lambda$:
$$t_A = \frac{a + b}{\lambda}$$

- **[B1]** Correct expression for Frankie's time $t_A$.

**Step 12: Set up inequality $t_A < t_{\text{Edgar}}$**

$$t_A < t_{\text{Edgar}} \Rightarrow \frac{a + b}{\lambda} < \frac{1}{\lambda}\left(a + b\sqrt{\lambda^2 - 1}\right)$$

- **[M1]** Sets up inequality.

**Step 13: Solve for $\lambda$**

$$a + b < a + b\sqrt{\lambda^2 - 1} \Rightarrow 1 < \sqrt{\lambda^2 - 1} \Rightarrow 1 < \lambda^2 - 1 \Rightarrow \lambda^2 > 2 \Rightarrow \lambda > \sqrt{2}$$

- **[A1]** Correct range $\lambda > \sqrt{2}$.

**Step 14: Presentation marks S2**

- **[S2]** Award S1 for clear and concise solution in (a) and (b). Award S2 for meeting S1 criteria, scoring at least 5 marks from (c) and (d), and including at least one S+ point.

### **Examiner Report 7**

There was good progress in the first two parts of this question by the majority of candidates, but attempts often died away in the latter two parts.

Most could derive the given equation in part (a), though there were a few candidates who neglected to show working for the given answer. Where an answer is given, candidates should realise there is an expectation that working be shown, even if they are able to perform the differentiation from the expression for $t$ directly.

Part (b)(i) was done efficiently by those who first found $(a - x)^2$ in terms of $\lambda$. Many expanded all the brackets and collected terms to end up with a complicated quadratic equation and some of these were able to use the formula and further algebra to arrive at the simplest expression for $x$ but approaches via such expansions had far less success overall.

The wording of part (b)(ii) seemed to be confusing for many candidates, as there were many who started with the condition on $\lambda$ and tried to show $x$ was in the given range, rather than vice versa. Attempts at this part were often unconvincing whichever direction was attempted.

In part (b)(iii) many candidates could not differentiate the expression $\frac{a - x}{\sqrt{(a - x)^2 + b^2}}$ accurately with a sign error in either one or both terms being common. Those using product rule seemed more successful. Very few recognised that the second derivative simplified to $\frac{b^2}{((a - x)^2 + b^2)^{\frac{3}{2}}}$, which was clearly positive, and instead attempted to substitute their value for $x$ and attempt to simplify, often unsuccessfully, before drawing a conclusion.

For part (c) candidates were generally poor at understanding the difference between (i) and (ii) and often gave the answers the wrong way round, or only attempted one part or the other. Very few could do (d) fully but many did manage to get the B mark. These latter parts were another place for distinction candidates to showcase their skills and obtained some S marks in the process.
