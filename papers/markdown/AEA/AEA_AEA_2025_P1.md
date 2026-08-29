---
topic: "Integration"
subtopic: "Integration by substitution"
---
### **Question 1**

Using the substitution $u = \frac{\pi}{2}\sqrt{1 + x}$ evaluate

$$\int_{5/4}^{21/4} \sec^2 \left( \frac{\pi}{2}\sqrt{1 + x} \right) \mathrm{d}x$$

**(10)**

**(Total for Question 1 is 10 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Differentiate the substitution relation**

$$u = \frac{\pi}{2}(1 + x)^{\frac{1}{2}} \Rightarrow \frac{\mathrm{d}u}{\mathrm{d}x} = \frac{\pi}{4}(1 + x)^{-\frac{1}{2}} = \frac{\pi^2}{8u} \quad \text{or} \quad \frac{4}{\pi^2}u^2 = 1 + x \Rightarrow \frac{8}{\pi^2}u \, \mathrm{d}u = \mathrm{d}x$$

- **[B1]** Correct derivative of $u$. Accept any equivalent.

**Step 2: Apply substitution to the integral**

$$I = \int \sec^2 \left( \frac{\pi}{2}\sqrt{1 + x} \right) \mathrm{d}x = \frac{8}{\pi^2} \int u \sec^2 u \, \mathrm{d}u$$

- **[M1]** Full method of substitution. Limits not required.
- **[A1]** Correct substituted integrand.

**Step 3: Integrate by parts**

$$\int u \sec^2 u \, \mathrm{d}u = u \tan u - \int \tan u \, \mathrm{d}u$$

- **[M1]** Attempts integration by parts on $\int u \sec^2 u \, \mathrm{d}u$ in the correct direction.
- **[A1]** Correct initial integration by parts expression.

**Step 4: Integrate $\tan u$**

$$\int \tan u \, \mathrm{d}u = \ln|\sec u| \quad \text{or} \quad -\ln|\cos u|$$

- **[M1]** Integral of $\tan u$ seen separately or as part of working. Modulus may be missing.

**Step 5: Write the complete indefinite integral**

$$\int u \sec^2 u \, \mathrm{d}u = u \tan u - \ln|\sec u| \quad \text{or} \quad u \tan u + \ln|\cos u|$$

- **[A1]** Fully correct integral for $\int u \sec^2 u \, \mathrm{d}u$.

**Step 6: Transform the integration limits**

$$x = \frac{5}{4} \Rightarrow u = \frac{3\pi}{4}, \qquad x = \frac{21}{4} \Rightarrow u = \frac{5\pi}{4}$$

$$\Rightarrow \int_{3\pi/4}^{5\pi/4} \dots \mathrm{d}u = f\left(\frac{5\pi}{4}\right) - f\left(\frac{3\pi}{4}\right)$$

- **[B1]** Correct new limits applied correctly to their integral or returns to $x$ correctly for their integral and applies the given limits correctly.

**Step 7: Substitute limits and evaluate trig terms**

$$\left[ I \right]_{3\pi/4}^{5\pi/4} = \frac{8}{\pi^2} \left[ \left( \frac{5\pi}{4}\tan\frac{5\pi}{4} - \ln\left|\sec\frac{5\pi}{4}\right| \right) - \left( \frac{3\pi}{4}\tan\frac{3\pi}{4} - \ln\left|\sec\frac{3\pi}{4}\right| \right) \right]$$

$$= \frac{8}{\pi^2} \left[ \left( \frac{5\pi}{4} - \ln\sqrt{2} \right) - \left( \frac{3\pi}{4}(-1) - \ln\sqrt{2} \right) \right] = k$$

- **[dddM1]** Evaluates trig terms correctly and simplifies to single term $k$. Must be working in radians in their integration. Must deal with the $\ln(\text{negative})$ terms correctly.

**Step 8: Final simplification**

$$= \frac{16}{\pi}$$

- **[A1]** Correct answer only ($\mathrm{cso}$).

### **Examiner Report 1**

This question, which involved integration by substitution and integration by parts, was well attempted by the vast majority of learners. Almost all the responses demonstrated understanding of the process of using a substitution to simplify an integral, using the given substitution to find an expression for $\frac{\mathrm{d}u}{\mathrm{d}x}$ and apply a complete substitution. Those that rearranged to make $\mathrm{d}x$ the subject in terms of $u$, before replacing with $\mathrm{d}u$, had a greater rate of success in achieving the correct $\frac{8}{\pi^2} \int u \sec^2 u \, \mathrm{d}u$. It was rare to see $u$ appearing in the denominator.

Learners recognised the need to use integration by parts, and nearly all got the first application correct. Most responses then simply wrote down the correct integral for $\tan u$; a small number derived the result correctly by writing $\tan u = \frac{\sin u}{\cos u}$, while a smaller proportion came to a stop at this point, unable to make further progress, or thought the integral of $\tan u$ was $\sec^2 u$.

Very few responses did not attempt to change the limits, and the majority successfully changed from $\frac{5}{4}$ to $\frac{3\pi}{4}$ and from $\frac{21}{4}$ to $\frac{5\pi}{4}$. However, some responses did not get the B mark as they did not show sufficiently clear working to demonstrate correct application of the correct limits, jumping straight to incorrectly evaluated trigonometric terms rather than showing a clear substitution first, or introducing sign errors due to incorrect or missing brackets.

Some responses seemed to show a lack of confidence working with radians and converted to degrees. The dddM mark was where the better responses demonstrated clear appreciation of the need for the moduli on the $\ln$ functions and did not prematurely negate the value of the argument. Due to the symmetry of the cosine graph and the limits involved, the $\ln$ terms were often cancelled without the argument being calculated, which demonstrated no understanding of the need to justify such a decision. There were a large number of instances of poorly communicated working or a lack of sufficient working to demonstrate that these terms had been given appropriate consideration.

Notation was good with integral symbols, $\mathrm{d}x$ and $\mathrm{d}u$ used appropriately.

---

topic: "Functions and Graphs"
subtopic: "y = |f(x)| and y = f(|x|)"
---
### **Question 2**

**(a)** On separate diagrams sketch the graph of

**(i)** $y = |x^2 - 4|$ **(3)**

**(ii)** $y = ||x^2 - 4| - 5|$ **(4)**

Indicate clearly on each sketch the coordinates of
- any vertices
- any points where the graph touches or crosses the coordinate axes

**(b)** Hence solve the equation

$$||x^2 - 4| - 5| = \frac{1}{2}x^2$$

**(4)**

**(Total for Question 2 is 11 marks)**

### **Mark Scheme 2**

#### **Part (a)(i)**

**Step 1: Sketch the general shape of $y = |x^2 - 4|$**

**Figure 1** _(A sketch of $y = |x^2 - 4|$, showing a "W" shape reflected above the x-axis with a maximum turning point at $(0, 4)$ and x-intercepts at $-2$ and $2$)._

- **[B1]** Correct "W" type shape, symmetric about $y$-axis, not below the $x$-axis. Curvature should be correct in each section.

**Step 2: Indicate the $y$-intercept**

- **[B1]** Inverted U turning point on $y$-axis at $y = 4$. Coordinates not required.

**Step 3: Indicate the $x$-intercepts**

- **[B1]** Correct $x$-intercepts labelled $2$ and $-2$. Coordinates not required.

#### **Part (a)(ii)**

**Step 4: Sketch the general shape of $y = ||x^2 - 4| - 5|$**

**Figure 2** _(A sketch of $y = ||x^2 - 4| - 5|$, showing a symmetrical curve reflected above the x-axis with minimum turning point at $(0, 1)$, x-intercepts at $-3$ and $3$, and vertices at $(-2, 5)$ and $(2, 5)$)._

- **[B1]** Correct shape, symmetric about $y$-axis, not below the $x$-axis.

**Step 5: Indicate the $y$-intercept**

- **[B1]** Correct $y$-intercept at a U minimum point on the $y$-axis at $y = 1$. Coordinates not required.

**Step 6: Indicate the $x$-intercepts**

- **[B1]** Correct $x$-intercepts labelled $3$ and $-3$. Coordinates not required.

**Step 7: Indicate the remaining vertices**

- **[B1]** Coordinates of the other two vertices correct and clearly labelled on the diagram at $(-2, 5)$ and $(2, 5)$.

#### **Part (b)**

**Step 8: Attempt to solve one relevant quadratic equation**

$$-(x^2 - 4) + 5 = \frac{1}{2}x^2 \Rightarrow x = \dots \quad \text{or} \quad (x^2 - 4) - 5 = \frac{1}{2}x^2 \Rightarrow x = \dots$$

- **[M1]** Attempts to solve one of the relevant quadratic equations using the correct section of the graph without modulus.

**Step 9: Find two correct answers**

$$x = \pm\sqrt{6} \quad \text{and/or} \quad x = \pm 3\sqrt{2}$$

- **[A1]** Any two correct answers. Accept $\sqrt{18}$ for $3\sqrt{2}$ for this mark.

**Step 10: Attempt to solve both relevant quadratic equations**

$$-(x^2 - 4) + 5 = \frac{1}{2}x^2 \Rightarrow x = \dots \quad \text{and} \quad (x^2 - 4) - 5 = \frac{1}{2}x^2 \Rightarrow x = \dots$$

- **[dM1]** Attempts to solve both of the relevant quadratic equations using the correct section of the graph without modulus.

**Step 11: State all four solutions in simplified form**

$$x = \pm\sqrt{6} \quad \text{and} \quad x = \pm 3\sqrt{2}$$

- **[A1]** All four correct answers and no others. Must now have $3\sqrt{2}$ and not just $\sqrt{18}$.

### **Examiner Report 2**

This question was a well-attempted second question in the paper, testing understanding of the modulus function and transformations of graphs. Most responses scored well on this question.

In part (a)(i), there were very few errors in producing the sketch. Some responses did not produce an inverted U shape, with an inverted V shape quite a common error. Points were generally labelled correctly or labelled on the axes.

In part (a)(ii), most responses were successful in obtaining the correct shape, although the curvature was sometimes questionable, with a V in the centre, or with additional $x$-intercepts seen. A significant minority did not label the vertices, either because they had not realised this was necessary or because they were unable to identify the correct coordinates.

Although most responses were able to find the 4 solutions to the equations in part (b), some attempted to solve only one quadratic. The main reason for this error was in their sketch of the graph of $y = \frac{1}{2}x^2$, where they had not appreciated that the curve was less steep than their curve from (a)(ii). Some responses did not utilise the sketches and resorted to solving a variety of quadratic equations before checking their solutions in the original equation, which was not an efficient strategy. Other responses decided that only positive roots were relevant or left solutions in the form $\sqrt{18}$ rather than $3\sqrt{2}$ and lost the final mark as a result.

---

topic: "Trigonometric Functions"
subtopic: "Inverse trigonometric functions"
---
### **Question 3**

Solve the equation

$$\arcsin 2x = \arccos x - \frac{\pi}{6} \qquad 0 \le x \le 0.5$$

**(5)**

**(Total for Question 3 is 5 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Take sine or cosine of both sides and apply compound angle formula**

$$2x = \sin\left(\arccos x - \frac{\pi}{6}\right) = \sin(\arccos x)\cos\frac{\pi}{6} - \cos(\arccos x)\sin\frac{\pi}{6}$$

$$\text{or} \quad x = \cos\left(\arcsin 2x + \frac{\pi}{6}\right) = \cos(\arcsin 2x)\cos\frac{\pi}{6} - \sin(\arcsin 2x)\sin\frac{\pi}{6}$$

- **[M1]** Takes either $\sin$ or $\cos$ of both sides and attempts correct compound angle formula condoning sign errors.

**Step 2: Express inverse trigonometric terms algebraically**

$$2x = \sqrt{1 - x^2} \cdot \frac{\sqrt{3}}{2} - x \cdot \frac{1}{2} \quad \text{or} \quad x = \frac{\sqrt{3}}{2}\sqrt{1 - (2x)^2} - \frac{2x}{2}$$

- **[M1]** Inverses $\sin$ and $\arcsin$ or $\cos$ and $\arccos$ using Pythagoras to achieve an equation without trig terms.

**Step 3: Form an algebraic equation in $x$ only**

$$2x = \sqrt{1 - x^2}\frac{\sqrt{3}}{2} - \frac{x}{2}$$

- **[A1]** Any correct equation in $x$ only with trig terms removed.

**Step 4: Solve the algebraic equation for $x$**

$$4x + x = \sqrt{3}\sqrt{1 - x^2} \Rightarrow 5x = \sqrt{3}\sqrt{1 - x^2} \Rightarrow 25x^2 = 3(1 - x^2) \Rightarrow 28x^2 = 3$$

- **[ddM1]** Full method to find a real value for $x$. Minor slips in solving the equation are condoned, but they should not materially simplify the equation.

**Step 5: Obtain the simplified exact value**

$$x = \frac{\sqrt{21}}{14}$$

- **[A1]** Correct answer only ($\mathrm{cao}$).

### **Examiner Report 3**

This question, assessing understanding of inverse trigonometric functions, was the first to cause the majority of learners real problems. Many responses struggled to know where to start and so did not make any progress. There were however many very good succinct solutions. Of those that had some success, the majority took sine of both sides of the equation and then attempted the compound angle formula. Learners were familiar with the formula, and there were very few sign errors.

It was quite common that learners were unable to proceed beyond an equation such as $2x = \frac{\sqrt{3}}{2}\sin(\arccos x) - \frac{1}{2}\cos(\arccos x)$, scoring just the first method mark. The core of the difficulty of this question was that learners were unsure how to find an alternative algebraic expression for $\sin(\arccos x)$ or $\cos(\arcsin 2x)$. There were, however, many who did manage to use Pythagoras and achieve an equation in $x$, which they usually solved with concise algebra.

A minority of responses arrived at the required answer in the appropriate surd form, with those that solved the equation correctly tending to leave their answer as $\sqrt{\frac{3}{28}}$ or $\frac{\sqrt{3}}{2\sqrt{7}}$. Learners are reminded that answers are to be presented in simplified form – in this case $\frac{\sqrt{21}}{14}$.

Use of the alternative method of setting $y$ equal to $\arccos x - \frac{\pi}{6}$, taking $\cos$ of both sides and applying the compound angle formula, was less common but tended to make better progress, and were more likely to reach a correct answer.

---

topic: "Algebraic Methods"
subtopic: "Proof by contradiction"
---
### **Question 4**

In this question you may assume that $\sqrt{p}$ is irrational for any prime number $p$.

**(a)** Use proof by contradiction to show that there is no rational number $a$ and integer $b$ for which

$$\sqrt{5} = a + b\sqrt{7}$$

**(5)**

**(b)** Hence prove that $\sqrt{5} + \sqrt{7}$ is not a rational number.

**(2)**
**(+S1)**

**(Total for Question 4 is 8 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Set up the proof by contradiction**

Suppose there is such a rational number $a$ and integer $b$ such that $\sqrt{5} = a + b\sqrt{7}$.

- **[B1]** Sets up the proof. Need not be as formal. Allow $b$ to be rational but not $a$ to be an integer.

**Step 2: Square both sides**

$$5 = a^2 + 2ab\sqrt{7} + 7b^2$$

- **[M1]** Squares the equation (and expands). Condone a slip e.g. missing square but not a missing term.

**Step 3: Analyze boundary cases for $a$ and $b$**

If $a = 0$ then $5 = 7b^2$, so $b^2 = \frac{5}{7}$, which is impossible for an integer $b$.
If $b = 0$ then $\sqrt{5} = a$, which means $\sqrt{5}$ is rational, a contradiction.

- **[B1]** $a = 0$ and $b = 0$ dealt with at some point.

**Step 4: Rearrange to isolate the irrational surd**

$$\sqrt{7} = \frac{5 - a^2 - 7b^2}{2ab}$$

- **[M1]** Makes $\sqrt{7}$ or $2ab\sqrt{7}$ the subject of the equation.

**Step 5: Deduce contradiction and state conclusion**

$$\frac{5 - a^2 - 7b^2}{2ab} \text{ is rational as } a \text{ and } b \text{ are rational, which contradicts that } \sqrt{7} \text{ is irrational.}$$

Hence there are no such numbers $a$ and $b$.

- **[A1]** Correct work and conclusion drawn, referencing contradiction.

#### **Part (b)**

**Step 6: Set up proof using part (a)**

Suppose $\sqrt{5} + \sqrt{7} = a$ (where $a$ is rational), then $\sqrt{5} = a + (-1)\sqrt{7}$.

- **[M1]** Sets up and rearranges an appropriate equation using the result of (a). E.g. $b = -1$ so $\sqrt{5} = a + (-1)\sqrt{7}$.

**Step 7: Conclude the proof**

Since $a$ is rational and $b = -1$ is an integer, by the result of (a) this is a contradiction, hence $\sqrt{5} + \sqrt{7}$ is irrational.

- **[A1]** Uses the result of (a) to draw the conclusion including all aspects of the main scheme.

**Step 8: Style and clarity mark**

- **[S1]** Award S1 for a fully correct solution that is succinct and includes good explanations of zero condition(s).

### **Examiner Report 4**

Learners found question 4, a proof by contradiction, to be a challenging problem.

In part (a), most responses were able to score the opening mark for setting up the proof although this was sometimes omitted, incomplete or incorrect, with some responses stating that $a$ needed to be real, or only referencing the domain of one of $a$ or $b$. The key was to square the equation but many merely embarked upon inadequate explanations using the given equation, attempting to form an argument based on the irrationality of both $\sqrt{5}$ and $\sqrt{7}$, which was essentially the underlying issue that the proof was trying to resolve.

A common error seen was with the squaring, with the square of $b\sqrt{7}$ often incorrectly evaluated. Those who obtained $\sqrt{35}$ tended to assume it was irrational; some did try and prove this, although were generally unsuccessful in doing so. It was also common to see responses that unnecessarily introduced a further rational, $a = \frac{p}{q}$, which complicated the argument and, in most cases, did not aid their progression.

A fairly small number moved on to make an $\alpha\sqrt{\beta}$ term the subject of the formula. Others tried to put together an argument from their squared equation. In such cases the flaws were either with incorrect statements, such as the product of $ab$ being an integer, or with omissions in their argument.

Some did obtain the final mark but sometimes conclusions fell short or there were incorrect statements elsewhere in their attempt. In particular, very few responses considered the $a = 0$ or $b = 0$ cases, and so the second B mark and the S+ mark were very rarely scored.

Part (b) allowed some learners who scored poorly in part (a) to pick up both marks, as they used the general case with $b = -1$ to argue that this was a special case of the contradiction. A small number identified that they could use $b = -1$ but did not produce a complete argument, scoring the M mark but did not gain the A mark. Despite the “Hence” in the question, some restarted from scratch, which meant no further marks could be awarded.

---

topic: "Discrete Random Variables"
subtopic: "Solving problems involving random variables"
---
### **Question 5**

The discrete random variable $X$ has the probability distribution

$$\begin{array}{|c|c|c|c|c|c|}
\hline
n & 2 & 4 & 6 & 8 & 10 \\
\hline
\mathrm{P}(X = n) & \frac{1}{10}\mathrm{cosec}^2 x & a & \frac{1}{5}\cot^2 x & \frac{1}{10}\sec^2 x & \frac{1}{5}\tan^2 x \\
\hline
\end{array}$$

where $a$ and $x$ are constants.

**(a)** Show that

$$\sin^2 2x = \frac{6}{7 - 5a}$$

**(7)**

**(b)** Use the result from part (a) to find a restriction on the maximum possible value of $a$.

**(2)**

The random variables $X_1$ and $X_2$ are independent and each have the same distribution as $X$.

Given that $\mathrm{P}(X_1 \times X_2 = 16) = a - \frac{1}{25}$

**(c)** determine any possible values of $a$, justifying your answer.

**(8)**
**(+S2)**

**(Total for Question 5 is 19 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Equate sum of probabilities to 1**

$$\frac{1}{10}\mathrm{cosec}^2 x + a + \frac{1}{5}\cot^2 x + \frac{1}{10}\sec^2 x + \frac{1}{5}\tan^2 x = 1$$

- **[B1]** States or implies sum of probabilities is 1.

**Step 2: Express in terms of $\sin x$ and $\cos x$**

$$\frac{1}{10\sin^2 x} + a + \frac{\cos^2 x}{5\sin^2 x} + \frac{1}{10\cos^2 x} + \frac{\sin^2 x}{5\cos^2 x} = 1$$

- **[M1]** Uses trig identities to create an equation in two trig functions only. Condone the usual sign errors.

**Step 3: Combine trigonometric fractions**

$$\frac{\cos^2 x + 2\cos^4 x + \sin^2 x + 2\sin^4 x}{10\sin^2 x \cos^2 x} = 1 - a$$

- **[M1]** Combines the trig terms to a single fraction or multiplies through.

**Step 4: Use identity $\sin^4 x + \cos^4 x = 1 - 2\sin^2 x \cos^2 x$**

$$\frac{1 + 2(\cos^2 x + \sin^2 x)(\cos^2 x - 2\sin^2 x \cos^2 x + \sin^2 x)}{\dots} = \frac{5}{2}(1 - a)\sin^2 2x$$

$$\Rightarrow 1 + 2(1 - 2\sin^2 x \cos^2 x) = \frac{5}{2}(1 - a)\sin^2 2x$$

- **[M1]** Replaces the quartic terms with quadratic terms using a valid method and replaces any $\sin^2 x + \cos^2 x$ with 1.

**Step 5: Apply double angle formula**

$$1 + 2\left(1 - \frac{1}{2}\sin^2 2x\right) = \frac{5}{2}(1 - a)\sin^2 2x$$

- **[dM1]** Use double angle formula to get to an equation in $\sin^2 2x$ only. Dependent on the previous M mark.

**Step 6: Isolate $\sin^2 2x$**

$$6 = (2 + 5(1 - a))\sin^2 2x$$

- **[M1]** Gathers the $\sin^2 2x$ terms on one side and factorises.

**Step 7: Complete the proof**

$$\sin^2 2x = \frac{6}{7 - 5a}$$

- **[A1*]** Completes correctly. Condone occasional notational slips.

#### **Part (b)**

**Step 8: Set up inequality using range of $\sin^2 2x$**

$$\sin^2 2x \le 1 \Rightarrow \frac{6}{7 - 5a} \le 1 \Rightarrow 6 \le 7 - 5a$$

- **[M1]** Uses the maximum value of $\sin^2 2x$ to form an inequality/equation in $a$.

**Step 9: State condition on $a$**

$$a \le \frac{1}{5} \quad \left(\text{or } 0 \le a \le \frac{1}{5}\right)$$

- **[A1]** Correct condition or maximum value for $a$. The lower limit is not required. Condone $a = 1/5$ but not $a < 1/5$.

#### **Part (c)**

**Step 10: Identify combinations for $X_1 \times X_2 = 16$**

Possibilities for $X_1 \times X_2 = 16$ are $4^2$, $2 \times 8$, or $8 \times 2$.

- **[B1]** Correct possible ways to form 16 identified or implied. Must include both ways round for $2 \times 8$ and $4^2$ only once.

**Step 11: Express $\mathrm{P}(X_1 \times X_2 = 16)$**

$$\mathrm{P}(X_1 \times X_2 = 16) = a^2 + 2 \times \frac{1}{10}\mathrm{cosec}^2 x \times \frac{1}{10}\sec^2 x$$

- **[M1]** Attempts the probability as the sum of $(\mathrm{P}(X=4))^2$ and $2 \times \mathrm{P}(X=2) \times \mathrm{P}(X=8)$.

**Step 12: Simplify using $\sin^2 2x$**

$$= a^2 + \frac{1}{50(\sin x \cos x)^2} = a^2 + \frac{2}{25\sin^2 2x}$$

- **[M1]** Writes probability in terms of $\sin^2 2x$.
- **[A1]** Correct expression for the sum of probabilities.

**Step 13: Form equation in $a$**

$$a - \frac{1}{25} = a^2 + \frac{2(7 - 5a)}{25 \times 6}$$

- **[M1]** Uses the given probability and the given answer to part (a) to get an equation in $a$ only.

**Step 14: Simplify to quadratic equation**

$$75a^2 - 80a + 10 = 0 \quad \text{or} \quad 15a^2 - 16a + 2 = 0$$

- **[A1]** Correct quadratic equation.

**Step 15: Solve quadratic equation**

$$a = \frac{16 \pm \sqrt{16^2 - 4 \times 15 \times 2}}{30} = \frac{8 \pm \sqrt{34}}{15}$$

- **[dddM1]** Correct attempt to solve their 3TQ using formula or completing the square. Dependent on all previous method marks.

**Step 16: Select and justify valid solution**

Since $a \le \frac{1}{5}$, $a = \frac{8 - \sqrt{34}}{15}$ only.

Also $a - \frac{1}{25} > 0$ as $a = \frac{8 - \sqrt{34}}{15} > \frac{8 - 6}{15} = \frac{2}{15} > \frac{1}{25}$.

- **[A1]** Requires minimal justification for final mark ($a \le \frac{1}{5}$ so $a = \frac{8 - \sqrt{34}}{15}$ only).
- **[S2]** Award S2 for a fully correct solution that is succinct and includes at least one S+ justification point.

### **Examiner Report 5**

This question, which assessed understanding of probability distributions, trigonometric identities and basic probability, seemed to be well-received by learners, with almost all learners making a good attempt.

In part (a), almost all responses showed an understanding to sum the probabilities to 1 to gain the first mark, although occasionally learners appeared to be calculating the expected value. Many different approaches were then taken to simplify to the given result with some much more succinct than others. The most common approach reached quartic terms which were almost always dealt with correctly, while the most succinct methods tended to be from responses that used the Pythagorean identities from the start to reach an equation in $\mathrm{cosec}^2 x$ and $\sec^2 x$ only. Very few errors in manipulation were seen. Some appeared to attempt to use the given result and work backwards to meet in the middle of their working, usually apparent from errors in their interim working that were not clearly recovered. In most cases, the identity $\sin 2x = 2 \sin x \cos x$ was used correctly, but occasionally responses used the incorrect $\sin^2 2x = 2 \sin^2 x \cos^2 x$, costing the final accuracy mark here as well as accuracy marks in part (c).

Part (b) was also attempted well with a lot of responses setting up an equation and solving with very minimal effort. Other responses spent time calculating other values of $a$ which were generally rejected. Where responses did not show an appreciation that $a$ was a probability and as such had limits, the second mark was sometimes not gained due to not rejecting an incorrect additional range/value (usually $\frac{7}{5}$ or $\frac{13}{5}$).

Part (c) was significantly more demanding and gave good differentiation between the responses. The best responses went on to achieve full marks and generally at least one S mark for a good explanation as to why they were rejecting the larger root (or accepting the smaller, though this was less common). This, however, was rare. A significant proportion of responses reached a correct quadratic but then either struggled to solve without a calculator or did not acknowledge that both answers were not valid.

However, some responses identified the correct possible pairings but set each individual product equal to the given probability without considering the sum. This scored a maximum of 3 marks in this part if they produced equivalent work to that required for the main scheme.

Whilst still not common, manipulation errors were more frequent here than in part (a). A costly error involved finding the sum of two lots of $(\mathrm{P}(X = 4))^2$ or only including one product of $\mathrm{P}(X = 2) \times \mathrm{P}(X = 8)$. Only a very small minority of responses left this part blank.

---

topic: "Vectors"
subtopic: "Solving geometric problems"
---
### **Question 6**

Relative to a fixed origin $O$, the points $A$, $B$ and $C$ have position vectors

$$\vec{OA} = 10\mathbf{i} + 5\mathbf{j} + 4\mathbf{k} \qquad \vec{OB} = -4\mathbf{i} + 7\mathbf{j} - \mathbf{k} \qquad \vec{OC} = -2\mathbf{i} + 17\mathbf{j} + 10\mathbf{k}$$

**(a)** Show that triangle $ABC$ is isosceles. **(2)**

The circle $S$ lies inside triangle $ABC$ such that each side of the triangle is a tangent to $S$.
The centre, $X$, of $S$ lies on the angle bisector of each vertex of the triangle.
The point $D$ lies on $AC$ such that $|\vec{AD}| = |\vec{AB}|$

**(b)** Find the position vector of $D$. **(2)**

**(c)** Find the position vector of the midpoint of $BD$. **(2)**

**(d)** Hence show that the position of $X$ is given by

$$\vec{OX} = 10\mathbf{i} + 5\mathbf{j} + 4\mathbf{k} + p(-2\mathbf{i} + \mathbf{j})$$

where $p$ is a scalar constant. **(4)**

**(e)** Use the angle bisector of vertex $B$ to find another expression for $\vec{OX}$ in terms of a scalar constant $q$. **(3)**

**(f)** By equating the $\mathbf{k}$ components of the two expressions for $\vec{OX}$, determine the value of $q$. **(2)**

**(g)** Find
**(i)** the position vector of the centre of $S$, **(2)**
**(ii)** the radius of $S$. **(4)**
**(+S2)**

**(Total for Question 6 is 23 marks)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Calculate magnitudes of sides $AB$ and $BC$**

$$\vec{AB} = -14\mathbf{i} + 2\mathbf{j} - 5\mathbf{k} \Rightarrow |\vec{AB}| = \sqrt{14^2 + 2^2 + 5^2} = \sqrt{225} = 15$$

$$\vec{BC} = 2\mathbf{i} + 10\mathbf{j} + 11\mathbf{k} \Rightarrow |\vec{BC}| = \sqrt{2^2 + 10^2 + 11^2} = \sqrt{225} = 15$$

- **[M1]** Attempts at least the lengths or squared lengths of $AB$ and $BC$.

**Step 2: Conclude triangle is isosceles**

$$|\vec{AB}| = \sqrt{225} = 15 \quad \text{and} \quad |\vec{BC}| = \sqrt{225} = 15$$

$$|\vec{AB}| = |\vec{BC}| \Rightarrow \text{Triangle } ABC \text{ is isosceles.}$$

- **[A1*]** Correct lengths and conclusion.

#### **Part (b)**

**Step 3: Calculate position vector of $D$**

$$\vec{AC} = -12\mathbf{i} + 12\mathbf{j} + 6\mathbf{k} \Rightarrow |\vec{AC}| = 18$$

$$\vec{OD} = \vec{OA} + \frac{5}{6}\vec{AC} \quad \text{or} \quad \vec{OC} - \frac{1}{6}\vec{CA}$$

- **[M1]** Correct method to find $D$.

**Step 4: State position vector of $D$**

$$\vec{OD} = 15\mathbf{j} + 9\mathbf{k}$$

- **[A1]** Correct position vector.

#### **Part (c)**

**Step 5: Method for midpoint of $BD$**

Let the midpoint be $M$:

$$\vec{OM} = \vec{OB} + 0.5(\vec{OD} - \vec{OB}) = 0.5(\vec{OD} + \vec{OB})$$

- **[M1]** Method for midpoint.

**Step 6: State position vector of $M$**

$$\vec{OM} = -2\mathbf{i} + 11\mathbf{j} + 4\mathbf{k}$$

- **[A1]** Correct position vector.

#### **Part (d)**

**Step 7: Find direction vector $\vec{AM}$**

$$\vec{AM} = \vec{OM} - \vec{OA} = (-2\mathbf{i} + 11\mathbf{j} + 4\mathbf{k}) - (10\mathbf{i} + 5\mathbf{j} + 4\mathbf{k}) = -12\mathbf{i} + 6\mathbf{j}$$

- **[M1]** Attempts $\pm\vec{AM}$ with their $M$.
- **[A1]** $\pm\vec{AM}$ correct.

**Step 8: Form equation for $\vec{OX}$**

Triangle $ABD$ is isosceles, so $X$ lies on the angle bisector $AM$:

$$\vec{OX} = \vec{OA} + m\vec{AM}$$

- **[M1]** Forms an equation for $\vec{OX}$ using $\vec{AM}$.

**Step 9: Complete proof**

$$\vec{OX} = 10\mathbf{i} + 5\mathbf{j} + 4\mathbf{k} + m(-12\mathbf{i} + 6\mathbf{j})$$

Letting $p = 6m$ gives:

$$\vec{OX} = 10\mathbf{i} + 5\mathbf{j} + 4\mathbf{k} + p(-2\mathbf{i} + \mathbf{j})$$

- **[A1*]** Achieves correct answer including $\vec{OX} = \dots$ following a correct intermediate equation.

#### **Part (e)**

**Step 10: Find direction vector of angle bisector at $B$**

Midpoint $N$ of $AC$ is $4\mathbf{i} + 11\mathbf{j} + 7\mathbf{k}$.

$$\vec{BN} = 8\mathbf{i} + 4\mathbf{j} + 8\mathbf{k}$$

- **[B1]** Correct midpoint of $AC$ or direction vector for bisector.

**Step 11: Form second vector equation for $\vec{OX}$**

$$\vec{OX} = \vec{OB} + q\vec{BN} = -4\mathbf{i} + 7\mathbf{j} - \mathbf{k} + q(8\mathbf{i} + 4\mathbf{j} + 8\mathbf{k})$$

- **[M1]** Forms a second vector equation in terms of $q$ using direction vector found using correct method.
- **[A1]** Correct equation including $\vec{OX} = \dots$

#### **Part (f)**

**Step 12: Equate $\mathbf{k}$ components**

$$4 = -1 + 8q \Rightarrow q = \frac{5}{8}$$

- **[M1]** Sets the $\mathbf{k}$ component from their $\vec{OX}$ from (e) equal to 4 and solves for $q$.
- **[A1]** $q = \frac{5}{8}$.

#### **Part (g)(i)**

**Step 13: Find centre of $S$**

$$\vec{OX} = (-4\mathbf{i} + 7\mathbf{j} - \mathbf{k}) + \frac{5}{8}(8\mathbf{i} + 4\mathbf{j} + 8\mathbf{k})$$

- **[M1]** Attempts coordinates using their $q$ in their $\vec{OX}$.

**Step 14: State position vector of centre**

$$\vec{OX} = \mathbf{i} + \frac{19}{2}\mathbf{j} + 4\mathbf{k}$$

- **[A1]** Correct centre.

#### **Part (g)(ii)**

**Step 15: Determine strategy for radius**

$$\vec{XN} = (4\mathbf{i} + 11\mathbf{j} + 7\mathbf{k}) - \left(\mathbf{i} + \frac{19}{2}\mathbf{j} + 4\mathbf{k}\right) = 3\mathbf{i} + \frac{3}{2}\mathbf{j} + 3\mathbf{k}$$

- **[M1]** Strategy that can be used to solve the problem (e.g. identifies $N$ as point of tangency).
- **[A1]** Correct vector for radius or correct lengths.

**Step 16: Complete calculation of radius**

$$r = |\vec{XN}| = \sqrt{9 + \frac{9}{4} + 9} = \sqrt{\frac{81}{4}}$$

- **[dM1]** Completes the method. Dependent on previous method mark.

**Step 17: State radius**

$$r = \frac{9}{2}$$

- **[A1]** Correct answer.
- **[S2]** Award S2 for a solution scoring 20+ marks that is succinct and includes at least two S+ points.

### **Examiner Report 6**

This was a well-scaffolded question, which assessed learners’ understanding of vectors in 3 dimensions, and allowed most learners to access the question and gain a good proportion of the marks. An underlying issue that caused learners problems in this question was not being clear on the meaning of a position vector. The majority of responses produced clear diagrams that were essential to solving the later parts of the problem. In some cases, the diagrams were too small or not constructed carefully enough to be useful.

Part (a) was well done; all the responses showed an understanding of the required process and there were few errors in calculating the lengths of the required sides. Most responses calculated the lengths of all 3 sides and also showed that the triangle was not equilateral, although this was not required. In some cases, learners initially calculated the lengths of $OA$, $OB$ and $OC$ before realising this was not the correct strategy.

In part (b), most responses found an acceptable strategy for finding $\vec{BD}$, correctly calculating the ratio of the length of $AD : AC$. In most cases, learners spotted the ratio of $CD : DA$ as $5 : 6$ from their calculations in part (a) and were able to write down a vector $\vec{OD}$ using a correct method. Some attempted to set the magnitude of $k\vec{AC} = 15$, which was generally successful but sometimes resulted in arithmetic errors being made or not square rooting the ratio $\frac{225}{324}$. It was, however, fairly common for responses to simply give $\vec{BD}$ as the final answer, not realising a position vector is found relative to the origin.

Similarly, in part (c), most responses showed an acceptable strategy for finding $\vec{BM}$ but many did not complete the method to find vector $\vec{OM}$.

In part (d) there were many efficient solutions. A large proportion of responses were able to use the position vector $\vec{OA}$ and the direction vector $\vec{AM}$ to successfully form the equation of the line $OX$. Having obtained $\vec{AM} = -12\mathbf{i} + 6\mathbf{j}$ and formed an equation for $OX$ of the form $\vec{OX} = \vec{OA} + \lambda\vec{AM}$, learners had gained the first 3 marks, but a lot were unable to clearly communicate the rescaling required to go from $\lambda(-12\mathbf{i} + 6\mathbf{j})$ to $p(-2\mathbf{i} + \mathbf{j})$ and so missed out on the final A mark. There were a significant number of cases where $p$ was used in the initial equation $\vec{OX} = \vec{OA} + p(-12\mathbf{i} + 6\mathbf{j})$ and then again in $\vec{OX} = \vec{OA} + p(-2\mathbf{i} + \mathbf{j})$.

Those who had difficulties in part (d) usually did so because they could not find the vector $\vec{AM}$, and gave up when their vector did not match the given one. Other responses missed the significance of the scaffolding and thought that $X$ lay halfway along $BN$ or tried to form $\vec{OX}$ by first finding the vector from $C$ to the midpoint of $AB$. In both cases, these responses may have benefitted from using a diagram.

In general, responses that found a strategy for part (d) were also able to find a strategy for part (e) and obtain a second equation for the line $OX$. There was also a significant proportion of responses that struggled to form a strategy for part (d) but were able to attempt part (e). Both sets of responses were generally able to complete part (f) and g(i) in a routine manner.

Most responses, having got this far, then found $\vec{XN}$ and the magnitude of $\vec{XN}$ to complete the question. There were a few variations in approaches to finding the radius of the circle seen – some use of Pythagoras on the triangle $AXN$ and some calculating the ratio of the length of $BX : BN$ having found those vectors earlier in their solution. There were a couple of attempts at finding relevant angles, but these were usually abandoned or incomplete, although there was the occasional attempt to use geometry alongside the double angle formula for $\tan$, which produced an elegant solution to find the radius.

In many cases, notation was good – good use of modulus notation for magnitudes of vectors and over-arrow notation to denote e.g. “from $A$ to $B$”. Column vectors were commonly used and accepted throughout the question. Those using $\mathbf{i}, \mathbf{j}$ and $\mathbf{k}$ notation generally did not apply the convention of underlining. Learners should be reminded of the benefits of writing their vectors in terms of letters first, e.g. $\vec{OX} = \vec{OA} + \lambda\vec{AM}$, as those going straight to numerical expressions often ended up with errors in working which were very difficult to follow. There were very few cases of confusion between vector and scalar quantities.

---

topic: "Differentiation"
subtopic: "Implicit differentiation"
---
### **Question 7**

Given $u = y^x$

**(a)** by taking $\ln$ of both sides, or otherwise, determine $\frac{\mathrm{d}u}{\mathrm{d}x}$ in terms of $x$, $y$ and $\frac{\mathrm{d}y}{\mathrm{d}x}$ only. **(5)**

**Figure 1** _(A sketch of the curve $3y^x - x^3 \ln y = 0$, showing an upper branch defined for $x \ge a$ with horizontal asymptote $y = 1$ and a lower branch defined for $x \le -a$)._

Figure 1 shows a sketch of the curve given by the equation

$$3y^x - x^3 \ln y = 0$$

The curve has a horizontal asymptote $y = 1$, and is defined for
- $x \le -a, \quad x \ge a$
- $b \le y \le c, \quad y \ne 1$

where $a, b$ and $c$ are positive constants.

**(b)** Determine $\frac{\mathrm{d}y}{\mathrm{d}x}$ for this curve. **(4)**

**(c)** Find the value of $a$. **(6)**

**(d)** Find the value of $b$ and the value of $c$. **(7)**
**(+S2)**

**(Total for Question 7 is 24 marks)**

### **Mark Scheme 7**

#### **Part (a)**

**Step 1: Take natural logarithms**

$$\ln u = x \ln y$$

- **[B1]** Takes $\ln$ and applies power law correctly.

**Step 2: Differentiate implicitly**

$$\frac{1}{u}\frac{\mathrm{d}u}{\mathrm{d}x} = \ln y + \frac{x}{y}\frac{\mathrm{d}y}{\mathrm{d}x}$$

- **[M1]** Differentiates implicitly and attempts the product rule. Allow one slip.
- **[A1]** Correct implicit derivative.

**Step 3: Make $\frac{\mathrm{d}u}{\mathrm{d}x}$ the subject**

$$\frac{\mathrm{d}u}{\mathrm{d}x} = u\left(\ln y + \frac{x}{y}\frac{\mathrm{d}y}{\mathrm{d}x}\right)$$

- **[M1]** Makes $\frac{\mathrm{d}u}{\mathrm{d}x}$ the subject.

**Step 4: Substitute $u = y^x$**

$$\frac{\mathrm{d}u}{\mathrm{d}x} = y^x \left( \ln y + \frac{x}{y}\frac{\mathrm{d}y}{\mathrm{d}x} \right)$$

- **[A1]** Correct in terms of $y$ and $x$. Any equivalent correct expression.

#### **Part (b)**

**Step 5: Differentiate $x^3 \ln y$**

$$x^3 \ln y \to 3x^2 \ln y + \frac{x^3}{y}\frac{\mathrm{d}y}{\mathrm{d}x}$$

- **[M1]** Differentiates $x^3 \ln y$ implicitly with the product rule attempted.
- **[A1]** Correct differentiation of $x^3 \ln y$.

**Step 6: Differentiate the full equation and make $\frac{\mathrm{d}y}{\mathrm{d}x}$ the subject**

$$3y^x\left(\ln y + \frac{x}{y}\frac{\mathrm{d}y}{\mathrm{d}x}\right) - 3x^2 \ln y - \frac{x^3}{y}\frac{\mathrm{d}y}{\mathrm{d}x} = 0 \Rightarrow \frac{\mathrm{d}y}{\mathrm{d}x} = \dots$$

- **[M1]** Uses (a) and makes $\frac{\mathrm{d}y}{\mathrm{d}x}$ the subject. Must be 2 terms in $\frac{\mathrm{d}y}{\mathrm{d}x}$.

**Step 7: State $\frac{\mathrm{d}y}{\mathrm{d}x}$**

$$\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{3y(x^2 - y^x)\ln y}{3x y^x - x^3}$$

- **[A1]** Any equivalent correct expression.

#### **Part (c)**

**Step 8: Set denominator equal to 0 for vertical tangents**

$$3x y^x - x^3 = 0$$

- **[B1]** Sets denominator of their $\frac{\mathrm{d}y}{\mathrm{d}x} = 0$.

**Step 9: Simplify to find relationship between $y^x$ and $x$**

$$\text{As } x \ne 0, \quad 3y^x - x^2 = 0 \Rightarrow y^x = \frac{x^2}{3}$$

- **[M1]** Identifies $y^x$ or $3y^x$ and attempts to solve with original equation $3y^x - x^3 \ln y = 0$.

**Step 10: Substitute into original equation**

$$3\left(\frac{x^2}{3}\right) - x^3 \ln y = 0 \Rightarrow x^2 - x^3 \ln y = 0 \Rightarrow \ln y = \frac{1}{x}$$

- **[M1]** Eliminates $y^x$ using correct log work to get an equation in $x$ only.
- **[A1]** Correct equation $\ln y = \frac{1}{x}$.

**Step 11: Solve for $x$**

$$x \ln y = \ln\left(y^x\right) = \ln\left(\frac{x^2}{3}\right) = 1 \Rightarrow \frac{x^2}{3} = \mathrm{e}$$

- **[M1]** Eliminates $\ln$ from the equation so that they can solve for $x$.

**Step 12: State value of $a$**

$$a = \sqrt{3\mathrm{e}}$$

- **[A1]** Correct value.

#### **Part (d)**

**Step 13: Set numerator equal to 0 for horizontal tangents**

$$\text{As } y \ne 1, \, \ln y \ne 0 \Rightarrow x^2 - y^x = 0$$

- **[B1]** Sets numerator of their $\frac{\mathrm{d}y}{\mathrm{d}x} = 0$.

**Step 14: Substitute $y^x = x^2$ into original equation**

$$3x^2 - x^3 \ln y = 0 \Rightarrow 3 - x \ln y = 0$$

- **[M1]** Identifies $y^x$ and attempts to solve with original equation.

**Step 15: Eliminate $\ln y$ to find $x$**

$$x \ln y = \ln(y^x) = \ln(x^2) = 3 \Rightarrow x^2 = \mathrm{e}^3 \Rightarrow x = \pm \mathrm{e}^{3/2}$$

- **[M1]** Eliminates $\ln y$ using correct log work to get an equation in $x$ only.
- **[A1]** Correct value for $x$ or $x^2$.

**Step 16: Solve for $y$ values**

$$x \ln y = \ln(x^2) = \ln(\mathrm{e}^3) = 3 \Rightarrow y = \mathrm{e}^{3/x} = \mathrm{e}^{\pm 3/\mathrm{e}^{3/2}}$$

- **[M1]** Full method to find an expression or value for $y$.

**Step 17: State values of $b$ and $c$**

$$b = \mathrm{e}^{-3/\sqrt{\mathrm{e}^3}}, \qquad c = \mathrm{e}^{3/\sqrt{\mathrm{e}^3}} \qquad \left(\text{e.g. } b = \mathrm{e}^{-3\mathrm{e}^{-3/2}}, \; c = \mathrm{e}^{3\mathrm{e}^{-3/2}}\right)$$

- **[A1]** One mark for either unlabelled.
- **[A1]** Second mark for both correct and labelled/identified.
- **[S2]** Award S2 for a succinct solution scoring 20+ marks that includes at least two S+ points.

### **Examiner Report 7**

The theme of the final question was to find the points where $\frac{\mathrm{d}y}{\mathrm{d}x} = 0$ and where $\frac{\mathrm{d}x}{\mathrm{d}y} = 0$, with the majority of the work relying on accuracy when differentiating implicit functions and solving simultaneous equations. As in many problems which involve implicit functions, the strategy is to find a relationship between $y$ and $x$ and then return to the original equation, solving these two simultaneous equations to find the coordinates of the points. The demand in this question was the presence of the function $y^x$, which made the final two parts significantly more demanding, although learners generally performed the initial differentiation very well. There were some impressive efforts in parts (c) and (d), which really gave learners the opportunity to show off their algebraic skills and reasoning.

Many learners were able to give good answers to the first two parts. In part (a), most followed the lead given of using logs starting with $\ln u = x \ln y$. A few resorted to using $\mathrm{e}^{x \ln y}$, but both approaches had similar success rates, with the majority of responses successful in scoring full marks (or similar) in parts (a) and (b). Slips in using the product rule were fairly rare in those who made a significant attempt at all question parts.

The most common approach for part (b) was to use the result from part (a) together with differentiation of $x^3 \ln y$, followed by collecting terms to make $\frac{\mathrm{d}y}{\mathrm{d}x}$ the subject. Some took on the idea of part (a) and used $u$ to give the equation $3u = x^3 \ln u$ followed by differentiating with respect to $x$ and then using their answer to part (a). Apart from a few algebraic slips when rearranging to make $\frac{\mathrm{d}y}{\mathrm{d}x}$ the subject, the correct derivative, in various forms, was obtained by many. Those who left the expression in an unsimplified form often paid for this in the remaining parts of the question.

Parts (c) and (d) were rather more discriminating and there were some invalid strategies seen. It was a shame that some responses made limited progress in both parts. However, many did realise that they had to start by setting the denominator and numerator equal to 0. A small minority got these the wrong way round.

For part (c), learners had to put the denominator of their expression for $\frac{\mathrm{d}y}{\mathrm{d}x} = 0$. If their denominator was correct this gave the equation $3x y^x - x^3 = 0$ which most responses reduced to $3y^x - x^2 = 0$ without noting that $x$ cannot be 0. At this stage many responses did not then use this relationship together with the original equation $3y^x = x^3 \ln y$ to make inroads into the problem by deriving, for example, $\ln y = \frac{1}{x}$. These responses usually scored just 1 mark.

For part (d), learners now had to put the numerator of their expression for $\frac{\mathrm{d}y}{\mathrm{d}x} = 0$. Again, most responses that had the correct numerator arrived at $y^x - x^2 = 0$, with a minority explaining why they could discard the other factors of the numerator. The same problems that occurred in part (c) reappeared in part (d), as the procedure was very similar, with the additional task of finding $y$ values.

In general, responses that organised the work carefully, writing down the key equations at the start of their work, made better progress as they could formulate a strategy much more clearly. Similarly, those that tried to maintain their expressions in as simple a form as possible benefited from this approach. Some tried to do too many steps in one go and these attempts often ended in confusion or algebraic errors. The presentation of work varied enormously here – those whose work was unstructured ended up making mistakes, often misreading their own writing. Only a small few alluded to non-zero values of the cancelling factors, but there was some elegant algebra to be seen, and S+ marks were earned by a small but significant number of responses.
