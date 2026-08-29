---
topic: "Differentiation"
subtopic: "Differentiating trigonometric functions"
---
### **Question 1**

$y = \csc x, \quad x \in \mathbb{R}, \quad x \neq n\pi, \quad n \in \mathbb{Z}$

where $x$ is measured in radians.

By writing $\csc x = \frac{1}{\sin x}$, use differentiation from first principles to prove that

$$\frac{\mathrm{d}y}{\mathrm{d}x} = -\csc x \cot x$$

You may

• use without proof the formulae for $\sin (A \pm B)$

• assume that as $h \to 0$, $\frac{\sin h}{h} \to 1$ and $\frac{\cos h - 1}{h} \to 0$

You may **not** use without proof

• the chain rule

• the product rule

• the quotient rule

**(6)**

**(Total 6 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Write down the definition of derivative from first principles**

$$\frac{\mathrm{d}y}{\mathrm{d}x} = \lim_{h \to 0} \frac{\frac{1}{\sin(x+h)} - \frac{1}{\sin x}}{h}$$

- **[B1]** Writes down/uses the correct gradient of the chord. May be in terms of $\csc x$.

**Step 2: Combine terms over a common denominator and apply addition formula**

$$\frac{\frac{1}{\sin(x+h)} - \frac{1}{\sin x}}{h} = \frac{\sin x - \sin(x+h)}{h \sin x \sin(x+h)} = \frac{\sin x - (\sin x \cos h \pm \cos x \sin h)}{h \sin x \sin(x+h)}$$

- **[M1]** Puts over a common denominator and attempts to use the addition formula in the numerator (with or without the $h$).

**Step 3: Obtain fully expanded expression**

$$\frac{\mathrm{d}y}{\mathrm{d}x} = \lim_{h \to 0} \left( \frac{\sin x - (\sin x \cos h + \cos x \sin h)}{h \sin x \sin(x+h)} \right)$$

- **[A1]** Correct expression with a common denominator, the numerator expanded and $h$ included in the denominator. Accept with nested fractions for this mark. Denominator may also be expanded.

**Step 4: Factorise and extract standard limits**

$$= \lim_{h \to 0} \left( \frac{1 - \cos h}{h} \times \frac{-\sin x}{\sin x \sin(x+h)} - \frac{\sin h}{h} \times \frac{\cos x}{\sin x \sin(x+h)} \right)$$

- **[dM1]** Factorises and extracts/identifies the standard limits within their expression – must make the individual limits clear for this mark (should be separate fractions).

**Step 5: Apply given limits as $h \to 0$**

As $h \to 0$, $\frac{\sin h}{h} \to 1$, $\frac{\cos h - 1}{h} \to 0$ (and $\sin(x+h) \to \sin x$), so

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 0 \times \frac{1}{\sin x} - 1 \times \frac{\cos x}{\sin x \sin x}$$

- **[B1]** Use of both given limits applied at an appropriate time. Note this mark may be scored for correct application implied even if the limits are not made explicitly clear.

**Step 6: Complete proof**

$$\frac{\mathrm{d}y}{\mathrm{d}x} = -\csc x \cot x$$

- **[A1*]** Fully correct proof with correct notation throughout and use of limits clearly evident.

### **Examiner Report 1**

The first half of this question was accessible to most learners as it was testing basic application of differentiation from first principles and the trigonometric addition formula. Learners were familiar with the process of finding an expression for the gradient of the chord and taking limits. Most were able to put the terms over a common denominator and realised they needed to use the addition formula in the numerator and did so correctly, with most scoring the first three marks. However, many also applied the $\sin(x + h)$ formula to the denominator and sometimes multiplied through by $\sin x$, making the denominator unnecessarily cumbersome.

The next three marks were more discriminating, with many not able to clearly exemplify the method, although most showed an understanding of the correct general procedure. Those who made clear the separation of the terms to identify the limits usually proceeded to score full marks, but many applied the two given limits in situ without clear demonstration of them and so could gain the B mark only of the last three. Some were not able to factorise to the form where standard limits could be used at all, and others went through multiple rearrangements instead of focusing on how to actually extract the given limits.

There were a few cases of learners trying to use small angle approximation instead of using the standard limits provided in the question, and a few tried using (in some cases trying to prove by first principles first) the quotient rule and derivative of $\sin x$. These were not permitted credit for the method but could access the B mark if limits were applied appropriately. Overall, the trigonometric manipulation and factorisation proved to be the hardest part of this question.

Most learners used the limit notation very well throughout their proof even if the extraction of the limits was not clear.

---
topic: "Functions and Graphs"
subtopic: "Inverse functions"
---
### **Question 2**

$$f(x) = x^2 - 3x + 5 \quad x \le k$$

where $k$ is a constant.

Given that $f(x)$ has an inverse function,

**(a)** determine the maximum possible value of $k$. **(2)**

For the value of $k$ found in part **(a)**,

**(b)** determine $f^{-1}(x)$, stating the domain of $f^{-1}$ **(3)**

**Figure 1** _(A sketch of the curve $y = g(x) = x^4 - 3x^2 + 5$, showing three turning points $P$, $Q$, and $R$, where $Q$ lies on the $y$-axis and $P, R$ are local minima.)_

Figure 1 shows a sketch of the curve with equation $y = g(x)$, where

$$g(x) = x^4 - 3x^2 + 5$$

The points $P$, $Q$ and $R$, also shown in Figure 1, are the turning points of the curve with equation $y = g(x)$.

Given that

$$h(x) = x^4 - 3x^2 + 5 \quad 0 \le x \le a$$

where $a$ is the $x$ coordinate of $R$,

**(c)** use the answer to part **(b)**, or otherwise, to determine $h^{-1}(x)$, stating the domain of $h^{-1}$ **(2)**

**(Total 7 marks)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Complete the square or differentiate**

$$f(x) = \left(x - \frac{3}{2}\right)^2 + \dots \quad \text{or} \quad f'(x) = 2x - 3 = 0 \Rightarrow x = \dots$$

- **[M1]** Attempts to complete the square (may be implied). Alternatively, differentiates, sets $= 0$ and attempts to solve.

**Step 2: Deduce $k$**

$$k = \frac{3}{2}$$

- **[A1]** Deduces the correct value of $k$. The $k$ need not be given but $x = \frac{3}{2}$ is A0. Answer only scores both marks (without clearly incorrect work). Condone $k \le \frac{3}{2}$ or $x \le \frac{3}{2}$.

#### **Part (b)**

**Step 3: Rearrange to find inverse function**

$$y = \left(x - \frac{3}{2}\right)^2 + \frac{11}{4} \Rightarrow x = \dots$$

or $x = \left(y - \frac{3}{2}\right)^2 + \frac{11}{4} \Rightarrow y = \dots$

- **[M1]** Sets $y = \dots$ and attempts to make $x$ the subject of their completed the square form condoning sign errors (or vice versa).

**Step 4: State inverse function**

$$f^{-1}(x) = \frac{3}{2} - \sqrt{x - \frac{11}{4}} \quad \text{or e.g.} \quad f^{-1}(x) = \frac{3 - \sqrt{4x - 11}}{2}$$

- **[A1]** Correct inverse function in any form but LHS must be correct notation with $f^{-1}(x)$, not $y$. Must have selected the correct root.

**Step 5: State domain of $f^{-1}$**

$$x \ge \frac{11}{4}$$

- **[B1ft]** Correct domain following through on their $\frac{11}{4}$. Must be $x \ge \frac{11}{4}$.

#### **Part (c)**

**Step 6: State $h^{-1}(x)$**

$$h^{-1}(x) = \sqrt{\frac{3 - \sqrt{4x - 11}}{2}} \quad \text{or e.g.} \quad h^{-1}(x) = \sqrt{\frac{3}{2} - \sqrt{x - \frac{11}{4}}}$$

- **[B1ft]** Deduces a correct form for $h^{-1}$ following through on their $f^{-1}$. Condone $y = \dots$ here. ($\pm$ included is B0).

**Step 7: State domain of $h^{-1}$**

$$\frac{11}{4} \le x \le 5$$

- **[B1ft]** Correct domain following through on their $\frac{11}{4}$. (Must be using $x$, not $h^{-1}$).

### **Examiner Report 2**

This question again provided good early access with most learners able to score marks in parts (a) and (b) but part (c) was a good discriminator with only the stronger learners producing full marks, and many unable to access either mark in part (c).

In part (a), most learners completed the square and deduced the correct value of $k$. Differentiation was also a common alternative method and also carried out well. However, some learners left their answer as $x = \frac{3}{2}$ rather than the correct answer which is $k = \frac{3}{2}$, and so learners should be careful to check what they are being asked for and answer appropriately. Some leniency was given for those who stated the full domain, but alone $x = \frac{3}{2}$ could not score the accuracy.

Part (b) was accessible with most learners gaining the first method mark by attempting to make $x$ the subject of their completed-square form, or by first swapping $x$ and $y$ and then making $y$ the subject. A few used the quadratic formula rather than completing the square, also generally successfully in reaching the correct form. However, many did not obtain the correct inverse function, commonly selecting the incorrect root or failing to select a root at all and leaving the $\pm$ in their answer. A few learners used the incorrect notation $f'(x)$ instead of $f^{-1}(x)$, but overall the function notation was used well. The most common error in finding the domain of the inverse function was giving the answer as $x > \frac{11}{4}$ rather than $x \ge \frac{11}{4}$.

Learners found part (c) more challenging and many learners scored no marks here. Attaining a correct domain was more common than a correct function, but both aspects caused difficulty. The most popular incorrect approach was to replace $x$ with $x^2$, rather than taking the square root of the expression obtained in part (b). Others tried working through from a restart with $h(x)$, which had better success in reaching a correct form, but the choice of signs was often incorrect, and again many left their answer with $\pm$ in the equation, sometimes in both places. Domains were more erratic, though the lower bound was more successfully achieved (sometimes via follow through) than the upper bound, and various incorrect upper bounds were seen.

---
topic: "Discrete Random Variables"
subtopic: "Solving problems involving random variables"
---
### **Question 3**

A discrete random variable $X$ takes positive integer values only.

The probability distribution of $X$ is given by

• $\mathrm{P}(X = 1) = \frac{1}{3}$

• $\mathrm{P}(X = 2) = a$

where $a$ is a constant, $0 < a < 1$, and

• if $k$ is an odd integer and $k > 1$, then $\mathrm{P}(X = k) = \frac{1}{9} \mathrm{P}(X = k - 2)$

• if $k$ is an even integer and $k > 2$, then $\mathrm{P}(X = k) = \frac{1}{\sqrt{5}} \mathrm{P}(X = k - 2)$

This is illustrated in the table below for the first six values of $x$

| $x$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|---|---|---|---|---|---|---|
| $\mathrm{P}(X = x)$ | $\frac{1}{3}$ | $a$ | $\frac{1}{27}$ | $\frac{1}{\sqrt{5}}a$ | $\frac{1}{243}$ | $\frac{1}{5}a$ |

**(a)** Determine, in terms of $a$ where appropriate,

**(i)** $\mathrm{P}(X = 7)$

**(ii)** $\mathrm{P}(X = 8)$ **(1)**

**(b)** Show that

$$a = \frac{5 - \sqrt{5}}{8}$$ **(2)**

**(c)** Determine $\mathrm{P}(1 < X \le 8 \mid X \text{ is even})$, giving the answer as a rational number. **(3)**

Three independent observations of $X$ are made, denoted by $X_1, X_2$ and $X_3$.

The variable $Y$ is defined as $Y = X_1 + X_2 + X_3$.

**(d)** Determine $\mathrm{P}(Y < 5)$, giving the answer in simplest form. **(3)**

**(Total 9 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Calculate probabilities**

$$\mathrm{P}(X = 7) = \frac{1}{9} \cdot \frac{1}{243} = \frac{1}{2187} \quad \text{and} \quad \mathrm{P}(X = 8) = \frac{1}{5\sqrt{5}}a = \frac{\sqrt{5}}{25}a \quad (\text{o.e.})$$

- **[B1]** Both correct, accept unsimplified and isw.

#### **Part (b)**

**Step 2: Find sum to infinity for odd and even terms**

$$S_\infty(\text{odd}) = \frac{\frac{1}{3}}{1 - \frac{1}{9}} = \frac{3}{8} \quad \text{or} \quad S_\infty(\text{even}) = \frac{a}{1 - \frac{1}{\sqrt{5}}}$$

- **[M1]** Attempts the sum to infinity for either the odd or even $k$.

**Step 3: Solve for $a$ using sum of probabilities $= 1$**

$$S_\infty(\text{even}) = 1 - \frac{3}{8} \Rightarrow \frac{a}{1 - \frac{1}{\sqrt{5}}} = \frac{5}{8} \Rightarrow a = \frac{5 - \sqrt{5}}{8}$$

- **[A1*]** Uses that the probabilities sum to 1 to set up and solve an equation in $a$ leading to the given answer.

#### **Part (c)**

**Step 4: Find $\mathrm{P}(1 < X \le 8 \cap X \text{ is even})$**

$$\mathrm{P}(1 < X \le 8 \cap X \text{ is even}) = a + a \times \frac{1}{\sqrt{5}} + a \times \left(\frac{1}{\sqrt{5}}\right)^2 + a \times \left(\frac{1}{\sqrt{5}}\right)^3 = \frac{3}{5}$$

or

$$\frac{5 - \sqrt{5}}{8} \left( \frac{1 - (\frac{1}{\sqrt{5}})^4}{1 - \frac{1}{\sqrt{5}}} \right) = \frac{3}{5}$$

- **[M1]** Attempts to find $\mathrm{P}(1 < X \le 8 \cap X \text{ is even})$ using the given $a$ or in terms of $a$ via a correct method.

**Step 5: Apply conditional probability formula**

$$\mathrm{P}(1 < X \le 8 \mid X \text{ is even}) = \frac{\mathrm{P}(1 < X \le 8 \cap X \text{ is even})}{\mathrm{P}(X \text{ is even})} = \frac{\frac{3}{5}}{1 - \frac{3}{8}}$$

- **[dM1]** Correct method to find the required probability using the given $a$. Must achieve a rational answer. May use the sum to infinity to find $\mathrm{P}(X \text{ is even})$ in which case the $a$'s will cancel, so may not see the substitution.

**Step 6: Evaluate**

$$= \frac{24}{25}$$

- **[A1]** cao.

#### **Part (d)**

**Step 7: Identify cases for $Y < 5$**

$$\mathrm{P}(Y < 5) = \mathrm{P}(Y = 3) + \mathrm{P}(Y = 4)$$

- **[B1]** Identifies the required probabilities (may be implied).

**Step 8: Calculate probability using $a$**

$$\mathrm{P}(Y < 5) = \left(\frac{1}{3}\right)^3 + \left(\frac{1}{3}\right)^2 \times \frac{5 - \sqrt{5}}{8} \times 3$$

- **[M1]** Correct method, must have the three cases for $Y = 4$. May be in terms of $a$.

**Step 9: Simplify fraction**

$$= \frac{53 - 9\sqrt{5}}{216}$$

- **[A1]** cao in simplest form.

### **Examiner Report 3**

This question was pleasingly well attempted, perhaps helped by a recent question on a similar theme on a previous paper. Learners showed a good understanding of probability distributions and realised the need to sum the geometric series to prove the results in (b) and (c).

Part (a) was very well answered showing that learners understood the definitions of the distribution in both the even and the odd cases, with only a few weaker responses failing to make any headway. Learners demonstrated high confidence in establishing the next two probabilities in the distribution.

There was also good access in part (b), which was efficiently done by the many who understood that the number of possible cases was infinite. Most learners understood the requirement for the sum of all the probabilities to be 1 and recognized the infinite nature of the progression of both odd and even terms. They applied the sum to infinity formula confidently, and either summed the two expressions, or in more efficient cases subtracted the sum of the odd term probabilities from 1 first before simplifying. The algebraic manipulation that was then needed was generally carried out successfully, although some learners made harder work of it by trying to rationalise the denominator of the sum of even terms before summing, and then having to repeat the procedure after rearranging.

Some learners, however, assumed that the number of cases was finite (usually 8) and were not (sometimes after a great deal of arithmetic and algebra) able to access the two marks for this part.

Part (c) was less successfully done and acted as a good differentiator, with only the more mathematically precise learners securing full marks. Those who assumed a finite number of cases could score at most one mark, but they often displayed a lack of understanding of what was required even in finding the probability of selecting an even number less than or equal to eight.

A few learners just worked out the probability of an even number less than or equal to 8. They scored only one mark, if successful. More successful learners knew that they had to divide this probability by the probability of getting any even number. Many learners made the resulting algebra and arithmetic more difficult for themselves by overlooking that the probability of any even number was $1 - \frac{3}{8} = \frac{5}{8}$ where the $\frac{3}{8}$ was found in the previous part. Such learners often worked with their irrational expression in terms of $a$ from the sum of even terms ($\frac{a\sqrt{5}}{\sqrt{5}-1}$ oe) and struggled to simplify the resulting fractional expression, being unable to successfully reach a rational value, meaning they still only secured 1 mark overall for this section.

Learners were more secure in part (d), with many able to enumerate the cases for $Y = 3$ and for $Y = 4$ followed by the correct probabilities and then their sum. A few learners left their answer as the sum of two fractions or as a single fraction not in its simplest form and they were not awarded the final mark. The most common errors here were to omit a case (often considering only the case where $Y = 4$) or to include $Y = 5$ as an extra case.

---
topic: "Circles"
subtopic: "Intersections of straight lines and circles"
---
### **Question 4**

**Figure 2** _(A diagram showing a parabola $C_1: y = Ax^2 + k$ opening upwards with vertex below the $x$-axis, and a circle $C_2: x^2 + y^2 = r^2$ centered at the origin $O$, touching $C_1$ at two distinct points $P$ and $Q$.)_

The curve $C_1$, shown in Figure 2, has equation

$$y = Ax^2 + k$$

where $A$ and $k$ are constants with $A > 0$ and $k < 0$.

The circle $C_2$, also shown in Figure 2, has centre at the origin and radius $r$, where $r$ is a positive constant.

Given that $C_1$ and $C_2$ touch at exactly two distinct points, $P$ and $Q$,

**(a) (i)** show that

$$k = -\frac{1}{4A} - Ar^2$$ **(4)**

**(ii)** Hence determine the $y$ coordinates of the points $P$ and $Q$ in terms of $A$ only. **(2)**

**(iii)** Show that the $x$ coordinates of the points $P$ and $Q$ are given by

$$x = \pm \sqrt{r^2 - \frac{1}{4A^2}}$$ **(1)**

**(iv)** Determine, in terms of $A$, the range of possible values of $r$. **(1)**

The curve $C_3$ has equation

$$y = Ax^2 + Bx + C$$

where $B$ and $C$ are constants and $A$ is the constant in part **(a)**.

The circle $C_4$ has centre $(a, b)$ and radius $r$, where $a$ and $b$ are constants and $r$ is the constant in part **(a)**.

Given that $C_3$ and $C_4$ touch at exactly two distinct points, $R$ and $S$,

**(b) (i)** determine an equation for $C_3$. Give your answer in the form $y = f(x)$ in terms of $A$, $a$, $b$ and $r$. **(2)**

**(ii)** determine the equations of all lines that are normal to both $C_3$ and $C_4$. Give the equations in terms of $A$, $a$, $b$ and $r$ where appropriate. **(4)**
**(+S1)**

**(Total 15 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Eliminate $x$ from equations**

Substitute $x^2 = \frac{y - k}{A}$ into $x^2 + y^2 = r^2$:

$$\frac{y - k}{A} + y^2 = r^2$$

- **[M1]** Substitutes to eliminate $x$.

**Step 2: Obtain 3TQ in $y$**

$$Ay^2 + y - k - Ar^2 = 0$$

- **[A1]** Correct 3TQ in $y$ set $= 0$. Alternatively, allow for a correct complete square equation.

**Step 3: Apply discriminant $= 0$**

$$1 - 4A(-k - Ar^2) = 0 \quad \text{or} \quad r^2 + \frac{k}{A} + \frac{1}{4A^2} = 0$$

- **[dM1]** Attempts the discriminant $= 0$ from either their 3TQ with gathered terms or via completing the square.

**Step 4: Solve for $k$**

$$k = -\frac{1}{4A} - Ar^2$$

- **[A1*]** Cancels terms and reaches the given answer with no errors. Equality must be used throughout.

**Step 5: Determine $y$ coordinates of $P$ and $Q$**

Substitute $k$ back into $Ay^2 + y - k - Ar^2 = 0$:

$$Ay^2 + y + \frac{1}{4A} = 0 \Rightarrow y^2 + \frac{1}{A}y + \frac{1}{4A^2} = 0 \Rightarrow y = -\frac{1}{2A}$$

- **[M1]** Full method to find $y$ using $k$. E.g. substitutes the given answer into a 3TQ in terms of $y$ and simplifies to eliminate $r$, or any other complete method.
- **[A1]** $y = -\frac{1}{2A}$. Cao A0 if positive case also included.

**Step 6: Show $x$ coordinates of $P$ and $Q$**

Substitute $y = -\frac{1}{2A}$ into $x^2 + y^2 = r^2$:

$$x^2 + \left(-\frac{1}{2A}\right)^2 = r^2 \Rightarrow x = \pm \sqrt{r^2 - \frac{1}{4A^2}}$$

- **[B1*]** Substitutes $y = -\frac{1}{2A}$ into $x^2 + y^2 = r^2$ and makes $x$ the subject or other full method to establish the result.

**Step 7: Determine range of possible values of $r$**

For $x$ to be real and non-zero:

$$r > \frac{1}{2A}$$

- **[B1]** cao.

#### **Part (b)**

**Step 8: Determine equation for $C_3$**

Replacing $x$ with $x - a$ and $y$ with $y - b$:

$$y - b = A(x - a)^2 + k \Rightarrow y = A(x - a)^2 - \frac{1}{4A} - Ar^2 + b$$

- **[M1]** Attempts to replace $x$ with $x \pm a$ and $y$ with $y \pm b$ with or without $k$ replaced using (a)(i).
- **[A1]** Correct equation in the form $y = \dots$ with $k$ replaced using (a)(i). No need to expand.

**Step 9: State normal parallel to the axis of symmetry**

$$x = a$$

- **[B1]** Deduces $x = a$ is normal to both curves.

**Step 10: Find gradient of other normals**

Gradient of normal from centre $(a, b)$ to contact points:

$$\text{Gradient} = \mp \frac{1}{\sqrt{4A^2 r^2 - 1}}$$

- **[M1]** Attempts the gradient using their $y$ and the given $x$ for the original situation or with centre $(a, b)$ and ignore signs.

**Step 11: State remaining normal equations**

$$y - b = \frac{1}{\sqrt{4A^2 r^2 - 1}}(x - a) \quad \text{or/and} \quad y - b = -\frac{1}{\sqrt{4A^2 r^2 - 1}}(x - a)$$

- **[A1]** One of the other normal equations in any form.
- **[A1]** Both of the normal equations in any form and no others (other than $x = a$).

**Step 12: Award S mark for presentation and efficiency**

- **[S1]** Awarded for succinct/efficient solution according to standard criteria.

### **Examiner Report 4**

This question is where the difficulty of the paper ramped up and learners had to answer an extended question. Though part (a) was generally well attempted and gave access to many learners, part (b) was much more discriminating and only relatively few stronger responses scored heavily in this question.

Part (a)(i) was an accessible start with most realising the curve and circle being tangential meant needing to show a single solution for either $y$ or $x^2$. A less common approach was to use that the gradients of the normals needed to match, but this also was effectively applied by some. Although not the most efficient, the commonest approach was to substitute $y = Ax^2 + k$ from the equation of the parabola into the equation of the circle and then apply the condition for repeated roots to the resulting quadratic in $x^2$. After some manipulation the given expression for $k$ was usually found. A few learners used the more efficient way of substituting for $x^2$ to get a quadratic in $y$ in which the resulting algebra was more straightforward. Those matching the gradients of the circle and the parabola would get the point of contact $y = -\frac{1}{2A}$, and could then find $x^2$ at the point of contact using the equation of the circle and hence the value of $k$ from the equation of the parabola.

Some learners who could not see how to proceed from the given set up instead tried to work backwards using the expression in $r^2$ from part (iii) to work out the value of $y$ in (ii) or $k$ in (i). Such responses were not credited as they had not established the results for themselves.

Another common errancy was to state that the discriminant was positive (or $\ge 0$) before switching to an equality at the end of the manipulation in unconvincing manner, precluding the award of the final mark.

Parts (ii) and (iii) were usually well done, although some responses took a very long and circuitous route to arrive at the final coordinate $y = -\frac{1}{2A}$ for (ii). While these long methods ultimately yielded the correct results, they increased the potential for algebraic arithmetic errors. More elegant, direct simplifications would have been preferred and would have saved considerable time.

Responses to part (a)(iv) were less successfully completed and proved to be a subtle discriminator, as the strict inequality on $r$ was often missed. Errors included giving '$r \ge \frac{1}{2A}$' or the combination '$r > \frac{1}{2A}$ and $r < -\frac{1}{2A}$'. Both of these errors contradict the original information given.

Part (b) proved to be a very good discriminator across learners, as few recognized the underlying idea was one of translation of the two curves $C_1$ and $C_2$ by means of the vector $\binom{a}{b}$. (Hence, $x^2 + y^2 = r^2$ becomes $(x-a)^2 + (y-b)^2 = r^2$). Those who understood this usually completed (i) in two lines, replacing $x$ with $x - a$ and $y$ with $y - b$ before substituting for $k$, but there were many who simply did not attempt this part at all. Of those that did understand the requirement the A mark was often lost due to sign or expansion errors made before substituting for $k$. Another more cumbersome but potentially successful method was to compare coefficients of the quadratic, but the same accuracy errors in expansion would occur in such responses too.

For part (ii) alert learners realized that translation preserves parallelism so they could work with the normals using the $x$ and $y$ values found in part (a). Since the value of $y$ in part (a) was already given and it was a simple manipulation to find the expression for $x$ these learners derived the correct equations very quickly, but some missed out the normal parallel to the $y$-axis – i.e. $x = 0$ translated to $x = a$.

However, such responses were in the minority here, with many not even offering an attempt, and of those the route taken was generally not the most optimal approach, with learners tending to work with the new centre and coordinates to find the gradients and equations rather than realise they could work with the original circle and parabola and translate later. Use of derivatives rather than recognising the line was a radius of the circle was also common, which frequently led to algebraic errors.

This was the first question on the paper which carried an S mark – given for efficient methods in (a)(i) and (b)(ii), for example, or other succinct approaches or good style and communication shown.

---
topic: "Mechanics and Materials"
subtopic: "Newton's laws of motion"
---
### **Question 5**

**Figure 3** _(A diagram showing two inclined planes meeting at a peak where a small pulley is fixed. Block $A$ of mass $26m$ rests on the left incline at angle $\alpha$. Block $B$ of mass $75m$ rests on the right incline at angle $\beta$. A light inextensible string connects $A$ and $B$ over the pulley. A horizontal force $P$ acts on block $B$.)_

Figure 3 shows a block $A$ with mass $26m$ and a block $B$ with mass $75m$.

Block $A$ lies on a rough plane inclined at an angle $\alpha$ to the horizontal.

Block $B$ lies on a rough plane inclined at an angle $\beta$ to the horizontal.

The blocks are connected by a light inextensible string which passes over a small smooth fixed light pulley.

The pulley lies on the line where the two inclined planes meet, with $A$, $B$ and the pulley all lying in the same vertical plane.

The part of the string between $A$ and the pulley lies along a line of greatest slope of the plane of angle $\alpha$.

The part of the string between $B$ and the pulley lies along a line of greatest slope of the plane of angle $\beta$.

The two blocks, $A$ and $B$, are modelled as particles.

• $\tan \alpha = \frac{5}{12}$ and $\tan \beta = \frac{3}{4}$

• the coefficient of friction between block $A$ and its plane is $0.5$

• the coefficient of friction between block $B$ and its plane is $0.2$

A horizontal force of magnitude $P$ acts on block $B$. The line of action of $P$ lies in the same vertical plane as $A$, $B$ and the pulley. The tension in the string is $T$.

When $k_1 mg \le P \le k_2 mg$, the system is at rest in equilibrium with the string taut.

**(a)** Determine the exact values of $k_1$ and $k_2$ **(9)**

Assuming that the system remains in equilibrium,

**(b)** determine, in simplest form in terms of $T$, the reaction force acting on the pulley. **(3)**

Without further calculation,

**(c)** explain the effect of decreasing $P$ below $k_1 mg$ on

**(i)** block $B$

**(ii)** block $A$

**(iii)** the reaction force on the pulley

Justify your answers. **(3)**

Without further calculation,

**(d)** explain the effect of increasing $P$ above $k_2 mg$ on

**(i)** block $B$

**(ii)** block $A$

**(iii)** the reaction force on the pulley

Justify your answers. **(3)**
**(+S2)**

**(Total 20 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Resolve forces for block $A$**

For block $A$:
$R_A = 26mg \cos \alpha = 24mg$
$T = 26mg \sin \alpha + F_A = 10mg + F_A$
Using $F_A = \mu_A R_A = 0.5(24mg) = 12mg$:
$T = 10mg + 12mg = 22mg$

- **[M1]** Resolves all forces for block $A$ in both directions. Allow friction in either direction. Allow if $\sin$ and $\cos$ are mixed up.
- **[A1]** Correct equations for block $A$.

**Step 2: Resolve forces for block $B$**

For block $B$:
$R_B = 75mg \cos \beta + P \sin \beta = 60mg + \frac{3}{5}P$
$T + P \cos \beta \pm F_B = 75mg \sin \beta$

- **[M1]** Resolves all forces for block $B$ in both directions with friction acting in either direction. Allow if $\sin$ and $\cos$ are mixed up.
- **[A1ft]** Correct equations for block $B$. Follow through on their (positive) $T$.

**Step 3: Use limiting friction for lower bound $k_1$**

$F_B = 0.2 R_B = 0.2 \left(60mg + \frac{3}{5}P\right)$
$22mg + \frac{4}{5}P + \frac{1}{5}\left(60mg + \frac{3}{5}P\right) = 45mg \Rightarrow P = \frac{275}{23}mg$

- **[M1]** Use maximal friction in at least one of the parallel equations, allowing use of $F \le \mu R$ throughout.
- **[dddM1]** Eliminates $R_B$ from their parallel equation, uses their $T$ and proceeds to find a bounding value for $P$.
- **[A1]** One correct bounding value for $P$ ($P = \frac{275}{23}mg$ or $P = \frac{1425}{17}mg$).

**Step 4: Find upper bound $k_2$**

For upper bound, string remains taut ($T = 0$ at limit for string being taut):
$\frac{4}{5}P - \frac{1}{5}\left(60mg + \frac{3}{5}P\right) = 45mg \Rightarrow P = \frac{1425}{17}mg$

- **[M1]** Uses symmetry or restarts on block $B$ with friction acting in the other direction leading to another bounding value for $P$. $T$ must now be $0$ for the upper bound.
- **[A1]** Correct range for $P$: $\frac{275}{23}mg \le P \le \frac{1425}{17}mg$ or $k_1 = \frac{275}{23}$ and $k_2 = \frac{1425}{17}$ including labelling.

#### **Part (b)**

**Step 5: Apply cosine rule or resolve components for reaction on pulley**

$$R_{\text{pulley}}^2 = T^2 + T^2 - 2T^2 \cos(\alpha + \beta)$$

or $R_x = T(\cos \alpha - \cos \beta) = -\frac{8}{65}T$ and $R_y = T(\sin \alpha + \sin \beta) = \frac{64}{65}T$

- **[M1]** Uses the cosine rule to find an expression for the reaction force on the pulley (or the square of this) or other trig methods can be used.

**Step 6: Expand $\cos(\alpha + \beta)$**

$$\cos(\alpha + \beta) = \cos \alpha \cos \beta - \sin \alpha \sin \beta = \frac{12}{13} \times \frac{4}{5} - \frac{5}{13} \times \frac{3}{5} = \frac{33}{65}$$

- **[dM1]** Uses addition formula to expand $\cos(\alpha + \beta)$.

**Step 7: Simplify $R_{\text{pulley}}$**

$$R_{\text{pulley}}^2 = \frac{64}{65}T^2 \Rightarrow R_{\text{pulley}} = \frac{8\sqrt{65}}{65}T \quad \text{or} \quad \frac{8}{\sqrt{65}}T$$

- **[A1]** Correct exact expression for the reaction on the pulley in terms of $T$.

#### **Part (c)**

**Step 8: Justify effects of decreasing $P < k_1 mg$**

**(i)** Block $B$ accelerates/moves down the plane as e.g. the total resistance force from $P$ and friction is no longer sufficient to keep it from sliding down the plane.

- **[B1]** Effect and explanation given. Must refer to friction in some way.

**(ii)** Block $A$ accelerates/moves up the plane as e.g. the string is taut, both blocks accelerate at the same rate.

- **[B1]** Effect and explanation given. Must reference the string / connected system.

**(iii)** The reaction force on the pulley increases as $T$ increases.

- **[B1]** Effect and explanation given.

#### **Part (d)**

**Step 9: Justify effects of increasing $P > k_2 mg$**

**(i)** Block $B$ accelerates/moves up the plane as e.g. $P$ is too large for friction to keep it from sliding up the plane.

- **[B1]** Effect and explanation given. Must refer to friction in some way.

**(ii)** Block $A$ does not move as e.g. maximal friction is larger than the component of block $A$'s weight down the plane.

- **[B1]** Effect and explanation given.

**(iii)** The reaction force on the pulley is $0$ as e.g. $T$ is $0$ because the string is slack (and the pulley is modelled as being small).

- **[B1]** Effect and explanation given.

**Step 10: Award S marks for presentation and communication**

- **[S2]** Awarded for a solution scoring 15+ marks that is succinct and includes S+ points.

### **Examiner Report 5**

This question proved challenging for many learners, with very few achieving a substantial tally of marks. The standard of work throughout this question was disappointing with learners often presenting muddled and uncertain work, and the question performed below its expected profile. The presence of such a question should not be a surprise to learners and yet many seemed unprepared for it and particularly had difficulty with the justifications in part (c). The challenge and strength of this question, in particular part (a), was the openness with no structure which gave freedom for learners to exhibit their aptitude but also meant that those who were not able to get started had little hope of continuing to the end.

The overriding issue in part (a) that hampered many learners was a lack of clearly resolved systems of forces for the two blocks. Although most learners were able to resolve all forces acting on blocks $A$ and $B$ this was often only tacit in their working, with the perpendicular equations only being apparent by virtue of the substitution into the maximal friction equation. Many also tried to “resolve along the slope” for both blocks combined, omitting the tension entirely, and making it difficult to determine if they had truly resolved both systems in their entirety. Those who clearly resolved both systems first are the ones who fared better on the question as a whole, as they were able to identify the directions for the friction and components for force $P$ more accurately to get the two extremes set up correctly.

Use of the diagram in the question was helpful, with many students annotating to show the force diagrams, though very few actually sketched out a forced diagram in their working, something that would have perhaps given them a better understanding of the problem.

A common error was to assign friction in the incorrect direction, though these could often score the first five or six marks before missing out on the second extreme case. Some responses omitted the force components of $P$ from the equations for block $B$ entirely (forfeiting most marks). The most secure mark was the third method mark for using limiting friction in the equations parallel to the plane, although the use of the inequality $F \le \mu R$ was rarely seen and equality used.

Very few learners recognised that $T$ must be zero for the upper bound, meaning the final two marks were lost by most. Learners often did not clearly show their strategies to find the extreme values of $k$, relying on the answers they found to imply the marks on some occasions. Such responses were automatically forfeiting the right to any S marks in the question as the solutions were far from clearly communicated.

Part (b) also was found surprisingly difficult by learners with many bypassing the part. Rather, learners simply appeared not to know how to find the reaction force on a pulley, indeed, of those who did answer many attempts resolved only horizontally and neglected the vertical components, a few resolved just the vertical components. Relatively few learners used the cosine rule and addition formula to determine the resultant force on the pulley. Where this method was used, it tended to be more successful than resolving the force into horizontal and vertical components and then applying Pythagoras’ theorem. Even so, there were a surprising number of algebraic slips in the process, such as forgetting to square root at the end and giving $R = \frac{64}{65}T$.

Parts (c) and (d) required learners to explain the effects of decreasing and increasing $P$, respectively, but very few convincing explanations were given. Although there was some success in identifying the effects in part (c), learners often did not provide reasoning that was sufficiently clear or rigorous to justify all of them. Often just one or two marks were scored for one correct effect and reason. In part (d) very often, due to the lack of understanding shown in part (a), the conclusion would be that block $A$ moves down the slope, and tension decreases, rather than being zero.

Overall, while learners had some idea about the general process to get started in part (a), very few were careful enough to resolve both systems fully for both cases. Very few S marks were awarded as a result, and those who did well enough to achieve S marks in this question were by and large distinction level learners.

---
topic: "Integration"
subtopic: "Integration by substitution"
---
### **Question 6**

Given that

$$y = \arctan x$$

**(a)** prove that

$$\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{1}{1 + x^2}$$ **(2)**

Given that $f$ is a function such that the integrals exist,

**(b) (i)** use the substitution $u = a + b - x$ to show that

$$\int_a^b f(x) \, \mathrm{d}x = \int_a^b f(a + b - x) \, \mathrm{d}x$$

where $a$ and $b$ are constants

**(ii)** determine the value of the constant $\lambda$ such that

$$\int_a^b f(x) \, \mathrm{d}x = \lambda \int_a^b (f(x) + f(a + b - x)) \, \mathrm{d}x$$ **(3)**

Given that $I = \int_{-\pi}^\pi \frac{x(1 + \sin x)}{1 + \cos^2 x} \, \mathrm{d}x$

**(c)** use detailed reasoning to show that

$$I = \int_{-\pi}^\pi \frac{x \sin x}{1 + \cos^2 x} \, \mathrm{d}x$$ **(2)**

Given that

$$g(x) = \frac{x \sin x}{1 + \cos^2 x}$$

**(d)** show that

$$g(x) = g(-x)$$ **(1)**

**(e)** Using the results from parts **(a)**, **(b)**, **(c)** and **(d)**, determine the value of $I$ **(8)**
**(+S2)**

**(Total 18 marks)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Differentiate inverse trigonometric function**

$$y = \arctan x \Rightarrow x = \tan y \Rightarrow \frac{\mathrm{d}x}{\mathrm{d}y} = \sec^2 y$$

- **[M1]** Makes $x$ the subject and differentiates with respect to $y$, or may differentiate implicitly.

**Step 2: Complete proof**

$$\frac{\mathrm{d}x}{\mathrm{d}y} = 1 + \tan^2 y = 1 + x^2 \Rightarrow \frac{\mathrm{d}y}{\mathrm{d}x} = \frac{1}{1 + x^2} *$$

- **[A1*]** cso with no steps omitted. May use other identities.

#### **Part (b)**

**Step 3: Perform substitution $u = a + b - x$**

• $\frac{\mathrm{d}u}{\mathrm{d}x} = -1$

• $x = a \to u = b$

• $x = b \to u = a$

• $\int_a^b f(x) \, \mathrm{d}x = -\int_b^a f(a + b - u) \, \mathrm{d}u$

- **[M1]** Full attempt to replace $x$ with $u$. Must see a substitution with $u$ used.

**Step 4: Reverse limits and complete proof**

$$\int_a^b f(x) \, \mathrm{d}x = \int_a^b f(a + b - u) \, \mathrm{d}u = \int_a^b f(a + b - x) \, \mathrm{d}x *$$

- **[A1*]** Convincing argument with fully correct work. Must show the reversal of limits in $u$ and then replace $u$ with $x$.

**Step 5: Deduce $\lambda$**

$$\lambda = \frac{1}{2}$$

- **[B1]** Deduces $\lambda = \frac{1}{2}$. May be embedded.

#### **Part (c)**

**Step 6: Apply result from (b)**

Using result from (b)(ii) with $a = -\pi$ and $b = \pi \Rightarrow a + b - x = -x$:

$$I = \frac{1}{2} \int_{-\pi}^\pi \left( \frac{x(1 + \sin x)}{1 + \cos^2 x} + \frac{-x(1 + \sin(-x))}{1 + \cos^2(-x)} \right) \mathrm{d}x$$

- **[M1]** Uses the result from (b). Allow ft on their $\lambda$ for this mark.

**Step 7: Simplify integrand to required form**

$$I = \frac{1}{2} \int_{-\pi}^\pi \frac{2x \sin x}{1 + \cos^2 x} \, \mathrm{d}x = \int_{-\pi}^\pi \frac{x \sin x}{1 + \cos^2 x} \, \mathrm{d}x *$$

- **[A1*]** Convincing argument with fully correct work.

#### **Part (d)**

**Step 8: Prove $g(x)$ is an even function**

$$g(-x) = \frac{(-x)\sin(-x)}{1 + \cos^2(-x)} = \frac{x \sin x}{1 + \cos^2 x} = g(x) *$$

- **[B1*]** cso with sufficient clarity. No need to see the $g$'s.

#### **Part (e)**

**Step 9: Apply symmetry from (d)**

$$I = \int_{-\pi}^\pi \frac{x \sin x}{1 + \cos^2 x} \, \mathrm{d}x = 2 \int_0^\pi \frac{x \sin x}{1 + \cos^2 x} \, \mathrm{d}x$$

- **[M1]** Applies the result from (d) to the result from (c) to rewrite the integral.

**Step 10: Apply result from (b) to interval $[0, \pi]$**

With $a = 0, b = \pi \Rightarrow a + b - x = \pi - x$:

$$I = \int_0^\pi \left( \frac{x \sin x}{1 + \cos^2 x} + \frac{(\pi - x)\sin(\pi - x)}{1 + \cos^2(\pi - x)} \right) \mathrm{d}x$$

- **[dM1]** Uses the result from (b).

**Step 11: Simplify using trig identities**

Using $\sin(\pi - x) = \sin x$ and $\cos(\pi - x) = -\cos x$:

$$I = \int_0^\pi \frac{\pi \sin x}{1 + \cos^2 x} \, \mathrm{d}x$$

- **[ddM1]** Uses $\sin(\pi - x) = \sin x$ and $\cos(\pi - x) = -\cos x$ to achieve a common denominator.
- **[A1]** Correct simplified integrand with correct limits.

**Step 12: Integrate using substitution $u = \cos x$**

$$\frac{\mathrm{d}u}{\mathrm{d}x} = -\sin x \Rightarrow I = \pi \int_1^{-1} \frac{-1}{1 + u^2} \, \mathrm{d}u = \pi \int_{-1}^1 \frac{1}{1 + u^2} \, \mathrm{d}u$$

- **[M1]** Fully substitutes, using a suitable substitution to achieve an integrable form.
- **[B1]** Correct changing of limits for their suitable substitution on relevant work ($x = \pi \to u = -1$ and $x = 0 \to u = 1$).

**Step 13: Evaluate integral**

$$I = \pi [\arctan u]_{-1}^1 = \pi (\arctan(1) - \arctan(-1)) = \pi \left( \frac{\pi}{4} - \left(-\frac{\pi}{4}\right) \right) = \frac{\pi^2}{2}$$

- **[dM1]** Uses the result from (a) to integrate to $\arctan u$ and substitutes changed limits.
- **[A1]** cso $\frac{\pi^2}{2}$.

**Step 14: Award S marks for succinctness and quality of proof**

- **[S2]** Awarded for a solution scoring 13+ marks that is succinct and includes S+ points.

### **Examiner Report 6**

Although calculus is generally a strong topic for learners taking this paper, this question did test understanding and discriminated well. While not as low access as question 5, it did prove to be the second most challenging question on the paper in terms of performance. Overall, this was a challenging question for most, but not necessarily due to lack of skill but due to not fully understanding the flow of the question.

Part (a) was easily the most successfully answered part in this question, being a fairly staple A-level type question to ease into the rest of the question. Most learners scored both marks, most commonly by making $x$ the subject, differentiating implicitly, taking the reciprocal and using the identity $\sec^2 y = 1 + \tan^2 y$ to rewrite in terms of $x$. A few converted to $\cos^2 x$ first and used a triangle with Pythagoras to derive the result, and only few scored no marks here.

There was less success in part (b), more due to a lack of care than a lack of understanding. Many learners failed to appreciate that the demand of the question was to show the result using the given substitution and were too informal in reasoning. A lot of responses missed one or both marks because of this, even though the learners clearly possessed the correct skills.

Most made an attempt at the substitution and while many did clearly demonstrate all four bullet points and complete with convincing argument to achieve the given expression, there were at least as many who did not complete successfully. Achieving $\mathrm{d}x = -\mathrm{d}u$ or equivalent was the most successful of the bulleted points achieved, the other three had mixed success rates. Some simply replaced $x$ with $u$ in the integral rather than with $a + b - x$, with or without changing limits, while others neglected to change limits. Knowing to change the sign when switching the limits was shown well by most, but those who did not change limits initially could not show this well. Learners who started with one of these false steps would usually somehow complete to the given result, but had already lost the marks for the unconvincing argument.

Part (b)(ii) was much better answered, as long as it was attempted. The result was easily deducible even for learners who were not able to do other parts, although some learners had several rows of working to achieve this.

Part (c) was found more challenging by learners, and the discriminating aspects of the question were more apparent here, with again many convincing and many less convincing responses seen. Surprisingly many learners missed the connection between parts (b) and (c) and simply tried to argue that $\int_{-\pi}^\pi \frac{x}{1+\cos^2 x} \, \mathrm{d}x = 0$, which did not score any marks unless they were awarded the special case for arguing that from the oddness of the integrand. For those that did use part (b) success was reasonable.

There was greater success with part (d) and again many were able to access a mark here when other parts were left out or poorly answered. Learners showed familiarity with odd and even functions and argued this part well enough for the one mark on offer. A few learners argued that $\cos(-x) = -\cos(x)$, which cost them the mark even though the result was still correct.

Finally, part (e) again was a good discriminator for strong learners, with many weaker responses failing to make progress beyond the first mark if even that. Once learners made progress into the second mark success in the remainder increased dramatically with many then being able to go on to achieve full marks. To get started learners needed to apply their knowledge of integrals of odd functions, but many instead attempted to use some kind of substitution, or to try integration by parts, and end up making no suitable progress.

Those who did identify the properties of the odd function were generally able to access the first mark. Those that were able to apply the results from parts (b) and (c) generally achieved the second stage integral required.

Those who got to this point were generally able to use a suitable substitution and integrate to $\arctan u$ and apply the correct limits or apply the reverse chain rule process using part (a). Aside from a few who made slips (evaluating $\arctan(1)$ incorrectly to $\frac{\pi}{2}$ being surprisingly common), most who reached this stage completed successfully to achieve the correct answer.

---
topic: "Differentiation"
subtopic: "Differentiating exponentials and logarithms"
---
### **Question 7**

$$y = x^x \quad x > 0$$

By taking logarithms of both sides, or otherwise,

**(a)** determine $\frac{\mathrm{d}y}{\mathrm{d}x}$, giving the answer in simplest form in terms of $x$ only. **(3)**

Given that, for $x > 0$

$$f(x) = (x^x)^x$$

$$g(x) = x^{(x^x)}$$

**(b)** determine the exact coordinates of the turning point of $y = f(x)$ **(5)**

**(c)** Show that $g'(x)$ can be written in the form

$$g'(x) = P(x) x^{Q(x)}$$

where $P(x) = x(\ln x)^2 + x \ln x + 1$ and $Q(x)$ is a function of $x$ to be found. **(4)**

**(d)** Solve $P(x) = 1$ **(2)**

Given that $y = P(x)$ has a stationary point at $x = \alpha$ and a stationary point at $x = \beta$, where $\alpha < \beta$,

**(e)** determine the value of $\alpha$ and the value of $\beta$ **(3)**

**(f)** Hence show that $P(x)$ has a minimum at $x = \beta$ **(2)**

Using the answers to parts **(c)**, **(d)**, **(e)** and **(f)**,

**(g)** show that $g(x)$ is an increasing function for $x > 0$ **(4)**
**(+S2)**

**(Total 25 marks)**

### **Mark Scheme 7**

#### **Part (a)**

**Step 1: Take logarithms of both sides**

$$\ln y = x \ln x \quad \text{or} \quad y = \mathrm{e}^{x \ln x}$$

$$\frac{1}{y} \frac{\mathrm{d}y}{\mathrm{d}x} = \ln x + 1 \quad \text{or} \quad \frac{\mathrm{d}y}{\mathrm{d}x} = \mathrm{e}^{x \ln x} \left( x \cdot \frac{1}{x} + \ln x \right)$$

- **[M1]** Takes $\ln$ of both sides and differentiates with either the LHS or RHS correct, or writes as $\mathrm{e}^{x \ln x}$ and uses the product and chain rule.
- **[A1]** Fully correct derivative equation.

**Step 2: Simplify derivative**

$$\frac{\mathrm{d}y}{\mathrm{d}x} = x^x(\ln x + 1) \quad \text{or} \quad x^x + x^x \ln x$$

- **[A1]** Correct derivative in simplest form in terms of $x$ of.

#### **Part (b)**

**Step 3: Differentiate $y = f(x)$**

$y = (x^x)^x \Rightarrow \ln y = x \ln(x^x) = x^2 \ln x$

$$\frac{1}{y} \frac{\mathrm{d}y}{\mathrm{d}x} = 2x \ln x + \frac{x^2}{x} = x(2 \ln x + 1)$$

- **[M1]** Repeats the process, taking $\ln$ of both sides and applying the product rule, and their answer to (a).
- **[A1]** Correct differentiation in any form.

**Step 4: Solve for $x$ at turning point**

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 0 \Rightarrow 2 \ln x + 1 = 0 \Rightarrow \ln x = -\frac{1}{2} \Rightarrow x = \mathrm{e}^{-\frac{1}{2}}$$

- **[dM1]** Sets $= 0$ and solves for (non-zero) $x$. May still be in terms of $y$.
- **[A1]** Correct value for $x$.

**Step 5: Determine exact $y$ coordinate**

$$y = \left( (\mathrm{e}^{-\frac{1}{2}})^{\mathrm{e}^{-\frac{1}{2}}} \right)^{\mathrm{e}^{-\frac{1}{2}}} = \mathrm{e}^{-\frac{1}{2}\mathrm{e}^{-1}}$$

Coordinates: $\left( \mathrm{e}^{-\frac{1}{2}}, \mathrm{e}^{-\frac{1}{2}\mathrm{e}^{-1}} \right)$ or $\left( \frac{1}{\sqrt{\mathrm{e}}}, \frac{1}{\sqrt{\mathrm{e}^{1/\mathrm{e}}}} \right)$

- **[A1]** Correct coordinates in a simplified exact form.

#### **Part (c)**

**Step 6: Differentiate $g(x)$**

$y = x^{(x^x)} \Rightarrow \ln y = x^x \ln x$

$$\frac{1}{y} \frac{\mathrm{d}y}{\mathrm{d}x} = \frac{\mathrm{d}}{\mathrm{d}x}(x^x) \ln x + x^x \cdot \frac{1}{x} = x^x(\ln x + 1) \ln x + x^{x-1}$$

- **[M1]** Repeats the process, taking $\ln$ of both sides and applying the product rule, and their answer to (a).
- **[A1]** Correct differentiation in any form.

**Step 7: Factorise to $P(x) x^{Q(x)}$ form**

$$\frac{\mathrm{d}y}{\mathrm{d}x} = x^{(x^x)} \cdot x^{x-1} (x(\ln x)^2 + x \ln x + 1) = (x(\ln x)^2 + x \ln x + 1) x^{x^x + x - 1} *$$

where $P(x) = x(\ln x)^2 + x \ln x + 1$ and $Q(x) = x^x + x - 1$.

- **[dM1]** Multiplies by $y$ and factorises to the required form.
- **[A1*]** Correct differentiation to the required form.

#### **Part (d)**

**Step 8: Solve $P(x) = 1$**

$$x(\ln x)^2 + x \ln x + 1 = 1 \Rightarrow x \ln x (\ln x + 1) = 0$$

Since $x > 0$: $\ln x = 0 \Rightarrow x = 1$ or $\ln x + 1 = 0 \Rightarrow x = \mathrm{e}^{-1}$.

- **[M1]** Cancels the 1s, factorises fully, and solves for at least one non-zero value of $x$ or may be implied by $x = 1$ or $x = \mathrm{e}^{-1}$.
- **[A1]** $x = 1$ and $x = \mathrm{e}^{-1}$ (ignore reference to $x = 0$).

#### **Part (e)**

**Step 9: Differentiate $P(x)$**

$$P'(x) = (\ln x)^2 + \frac{2x \ln x}{x} + \ln x + \frac{x}{x} = (\ln x)^2 + 3 \ln x + 1$$

- **[M1]** Attempts to differentiate $P(x)$ (two terms correct).

**Step 10: Solve $P'(x) = 0$**

$$P'(x) = 0 \Rightarrow \left(\ln x + \frac{3}{2}\right)^2 - \frac{5}{4} = 0 \Rightarrow \ln x = \frac{-3 \pm \sqrt{5}}{2} \Rightarrow x = \mathrm{e}^{\frac{-3 \pm \sqrt{5}}{2}}$$

- **[M1]** Solves $P'(x) = 0$ for $x$ using correct operations (must reach $x = \dots$).

**Step 11: Identify $\alpha$ and $\beta$**

$$\alpha = \mathrm{e}^{\frac{-3-\sqrt{5}}{2}} \quad \text{and} \quad \beta = \mathrm{e}^{\frac{-3+\sqrt{5}}{2}}$$

- **[A1]** Correct values for $\alpha$ and $\beta$ (must be correctly labelled).

#### **Part (f)**

**Step 12: Determine nature of stationary point at $x = \beta$**

$$P''(x) = \frac{2 \ln x + 3}{x}$$

At $x = \beta = \mathrm{e}^{\frac{-3+\sqrt{5}}{2}}$:

$$P''(\beta) = \frac{2\left(\frac{-3+\sqrt{5}}{2}\right) + 3}{\beta} = \frac{\sqrt{5}}{\beta} = \sqrt{5} \mathrm{e}^{\frac{3-\sqrt{5}}{2}} > 0 \Rightarrow \text{minimum at } x = \beta *$$

- **[M1]** Differentiates $P'(x)$ (two terms correct) and attempts to find the value of $P''(x)$ at the larger of the two roots of $P'(x) = 0$.
- **[A1*]** Correct value for the second derivative at $x = \beta$, shows it is positive and concludes it is a minimum.

#### **Part (g)**

**Step 13: Establish positivity of $x^{Q(x)}$**

Since $x > 0$, $x^{Q(x)} > 0$ for all $x > 0$.

- **[B1]** Identifies $x^{Q(x)} > 0$ for $x > 0$.

**Step 14: Evaluate $P(\beta)$**

For $\beta = \mathrm{e}^{\frac{-3+\sqrt{5}}{2}}$:

$$P(\beta) = \mathrm{e}^{\frac{-3+\sqrt{5}}{2}}(2 - \sqrt{5}) + 1$$

- **[M1]** Attempts to find the value of $P(\beta)$ (need not be simplified).

**Step 15: Prove $P(\beta) > 0$**

Since $0 < \mathrm{e}^{\frac{-3+\sqrt{5}}{2}} < 1$ and $-1 < 2 - \sqrt{5} < 0$, we have $-1 < \mathrm{e}^{\frac{-3+\sqrt{5}}{2}}(2 - \sqrt{5}) < 0$, and hence $0 < P(\beta) < 1$.

- **[dM1]** Attempts to show that the value of $P(\beta)$ is greater than 0 by analysing its terms.

**Step 16: Complete proof that $g(x)$ is increasing**

Since $P(x)$ has a single local minimum point at $x = \beta$, with $P(\beta) > 0$, and $P(x)$ only crosses $y = 1$ once either side of $x = \beta$, and $P(x)$ is a continuous function, we conclude the minimum is a global minimum, hence $P(x) > 0$ for all $x > 0$.

Since also $x^{Q(x)} > 0$, we have $g'(x) > 0$ for $x > 0$ and hence $g(x)$ is an increasing function for all $x > 0$.

- **[A1*]** Complete argument including all relevant points.

**Step 17: Award S marks for quality and presentation**

- **[S2]** Awarded for a solution scoring 16+ marks that is succinct and includes S+ points.

### **Examiner Report 7**

Considering that this was the final question on the paper, a large amount of the question proved to be accessible, and a lot of learners were able to make a reasonable attempt at most of the question. The structure of the question very much led them through and armed them with sufficient information to be able to show that $g(x)$ is an increasing function. As has been noted, calculus tends to be the strongest topic for learners taking this paper and this proved to be the case here. Although very few managed to achieve full marks, it was only due to the very demanding final mark, and there were many excellent responses that came close to full marks, with even the S marks being accessed with some regularity on this question.

Part (a) was completed well by most learners, with most using implicit differentiation efficiently and accurately. Those who did not make progress in this part would generally not get any further than this point in the question.

Success was slightly less secure in part (b), but many learners were able to successfully complete it. The unsuccessful attempts tended to be due to trying to apply the chain rule directly to the function rather than taking $\ln$ of both sides first, and so did not reach a suitable expression, but rather something akin to $\frac{\mathrm{d}y}{\mathrm{d}x} = 2x x^{x^2} (\ln x + 1)$. Those who did recognise the need to repeat the process of taking $\ln$ generally reached an expression for $\frac{1}{y}\frac{\mathrm{d}y}{\mathrm{d}x}$ before multiplying back across. The first two methods of the scheme were both seen regularly, but the third approach was less common. However, each approach was carried out well when seen. Most efficient were those who spotted that they could write $(x^x)^x$ as $x^{x^2}$. The most common error was the loss of the factor 2 before $x \ln x$. Few spotted that they could set $\frac{\mathrm{d}y}{\mathrm{d}x} = 0$ earlier and proceeded to substitute back in for $y$ before continuing to solve.

Having scored the first 2 marks, learners were generally able to obtain the correct $x$ value, but the $y$-value caused problems for many, particularly in reaching a simplified form, and some convoluted answers appeared, including with 3 levels of indices.

Part (c) was often completed more successfully than part (b), repeating the process to obtain a derivative (even when this had not been done in part (b)), substituting for $y$ and manipulating the expression into the required form. The first 2 marks were consequently commonly scored. There were some slips in the subsequent factorisation, often because of over-complicated approaches, but most were able to achieve the correct result, despite that even some of the stronger responses had errors in obtaining the expression for $Q(x)$.

There was also generally good progress in part (d) in attaining at least one correct solution, even when learners had struggled in earlier parts, learners spotting that there was a re-entry point here. However, many cancelled out the $\ln x$ term, thus failing to obtain the value $x = 1$, while some others identified this but failed to solve for the $x = \mathrm{e}^{-1}$ solution. It was also common to see $x = 0$, but better responses identified that $x > 0$ was required.

Again, many learners were able to gain marks in part (e) even if earlier parts of the question were less successful. Learners were not fazed by having to differentiate the slightly more unusual $(\ln x)^2$ term and easily coped with applying the product rule appropriately and solving their resulting quadratic in $\ln x$ to obtain the values of $\alpha$ and $\beta$. Occasionally these were given the wrong way round and sometimes notation needed more care with floating minus signs making it awkward to discern accuracy. Errors in differentiating $P(x)$ often led to trivial values, but such responses were less common, the differentiation overall being of a very high standard.

Once again in part (f) the differentiation to find the second derivative was usually correct, and this was the most popular way to determine that $P(x)$ was minimum at $x = \beta$, by attempting to find the value of the second derivative at this point. Because most had obtained the correct value of $\beta$, they were able to obtain the correct value of $P''(\beta)$, show $P''(\beta) > 0$ and conclude that there was a minimum at $x = \beta$. There were some nice responses where learners appreciated that $x > 0$, and in particular $\beta > 0$, and so obtained an expression $P''(\beta) = \frac{\sqrt{5}}{\beta} > 0$. The most common error here was to choose the smaller of the two roots to evaluate at, though this was not common. Slips in the evaluation also occasionally occurred.

While the progress through parts (a) to (f) had generally been very good, part (g) was much more discriminating and there were very few strong attempts at this final part of the question with many learners making no attempt at all. Some indicated that they knew they needed to show that $g'(x) > 0$ for $x > 0$ and identified that $x^{Q(x)} > 0$, but then did not know how to proceed further. Only the stronger distinction level responses showed a good understanding of the requirements of this part.

Some learners made a brief and weak argument that because $P(x)$ has a minimum at $x = \beta$, $P(x) > 0$ and so $g(x)$ is increasing. There were also some learners who considered the curvature, attempting to show that $P''(x) > 0$ for $x > 0$ and there were some attempts to argue that $P(x) > 0$ for all values of $x$ by considering each term, without considering the value of $P(\beta)$, with varying degrees of success. There were, of course, also attempts to find the value of $P(\beta)$ but fewer rigorous arguments that $P(\beta) > 0$.

The final mark was particularly demanding and seldom scored, the full list of relevant points required for the mark not being satisfied. It was the need for $g(x)$ to be continuous and utilising part (d) of the question to argue that $y = 1$ is crossed only once that were most often missing.
