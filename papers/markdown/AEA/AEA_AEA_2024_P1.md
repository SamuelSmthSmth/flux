---
topic: "Binomial Expansion"
subtopic: "Expanding (1 + x)^n"
---
### **Question 1**

In the binomial expansion of

$$(1-8x)^p, \quad |x| < \frac{1}{8}$$

where $p$ is a positive constant,

- the sum of the coefficient of $x$ and the coefficient of $x^2$ is equal to the coefficient of $x^3$
- the coefficient of $x^2$ is positive

Determine the value of $p$. **(7)**

**(Total for Question 1 is 7 marks)**

### **Mark Scheme 1**

**Step 1: Write down terms in the binomial expansion.**

$$(1-8x)^p = 1 - 8px + \frac{p(p-1)}{2}(-8x)^2 + \frac{p(p-1)(p-2)}{6}(-8x)^3 + \dots$$

- **[B1]** Correct numerical coefficients of relevant terms, may be seen in an expansion or listed separately. Need not be simplified.

**Step 2: Equate relevant coefficients.**

$$-8p + \frac{64p(p-1)}{2} = -\frac{8^3 p(p-1)(p-2)}{6}$$

- **[M1]** Equates the relevant coefficients. If the $x$'s are left in and never recovers just coefficients, M0.

**Step 3: Cancel common factors to achieve a quadratic equation.**

$$-3 + 12(p-1) = -32(p^2 - 3p + 2)$$

- **[dM1]** Cancels or factors to achieve a quadratic in $p$ (need not be expanded).

**Step 4: Expand and collect terms into standard quadratic form.**

$$32p^2 - 84p + 49 = 0$$

- **[A1]** Correct expanded and gathered quadratic.

**Step 5: Factorise and solve the quadratic equation.**

$$(4p-7)(8p-7) = 0 \Rightarrow p = \frac{7}{4} \text{ or } p = \frac{7}{8}$$

- **[ddM1]** Solves their 3 term quadratic.

**Step 6: Apply the condition for a positive $x^2$ coefficient to disambiguate.**

The coefficient of $x^2$ is $32p(p-1)$.

Need $p(p-1) > 0$, so $p < 0$ or $p > 1$.

- **[M1]** Correct consideration of the $x^2$ coefficient to disambiguate (a selection must be made). Must have had at least two roots to choose from.

**Step 7: State the unique value of $p$.**

$$p = \frac{7}{4}$$

- **[A1]** Correct answer only.

### **Examiner Report 1**

This should have been a routine question up to the final couple of marks, but many lost marks with evidence suggesting students lacked awareness of common factors and tended to number crunch in the quadratic formula.

The first mark was secure for almost all who took the paper – where students lost marks, it was usually due to incorrectly identifying the coefficients in the expansion. Most students could proceed from the expansion to get to a correct quadratic by cancelling through by the common factor ‘$p$’, albeit in some cases after initial expansion to a cubic. However, in some cases the arithmetic was not accurate in the collection of terms. This is the first point where candidates could have eased their workload by first looking for the cancelling or factorizable terms before attempting to expand.

From the quadratic, most candidates opted to use the quadratic formula, as opposed to factorization, and were faced with some tedious arithmetic as they did not cancel factors earlier. In its simplest case, the process involved the evaluation of $84^2 - 4 \times 32 \times 49$, followed by finding the square root of $784$. Since $84 = 4 \times 21$; $84^2 = 4^2 \times 21^2 = 4^2 \times 3^2 \times 49$ and the other term is $4 \times 32 \times 49$, there is the opportunity to simplify the discriminant by suitable numerical factorization.

This was more of a challenge for those who did no simplification at all and got, for example $512p^2 - 1344p + 784 = 0$. Those who chose to attempt to solve by completing the square faced similar issues, but the candidates who looked for the factors fared much better.

Many were successful in finding the solutions of the quadratic, though some did not take cognizance of the information that "the coefficient of $x^2$ is positive", so lost marks by not considering it to identify a unique answer to the question. Some of the students who gave some consideration did not always provide a correct reason. Complicated roots from incorrect quadratics were not always easy to disambiguate as it was not always immediately clear if they were greater or less than 1.

There were, however, numerous correct, concise, and elegant responses seen, giving a good early indication on the paper of the aptitude of the candidates.

---
topic: "Differentiation"
subtopic: "Stationary points"
---
### **Question 2**

**Figure 1** _(A sketch of the curve defined by $y^2 + 3y - 6\sin y = 4 - x^2$, showing its intercepts on the axes at $(0, 2)$, $(0, -5)$, $(-2, 0)$, and $(2, 0)$)._

Figure 1 shows the curve defined by the equation

$$y^2 + 3y - 6\sin y = 4 - x^2$$

The point $P(x, y)$ lies on the curve.

The distance from the origin, $O$, to $P$ is $D$.

**(a)** Write down an equation for $D^2$ in terms of $y$ only. **(1)**

**(b)** Hence determine the minimum value of $D$ giving your answer in simplest form. **(5)**

**(Total for Question 2 is 6 marks)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Express $D^2$ in terms of $y$ only.**

Distance from curve to $O$ is given by:

$$D^2 = (x-0)^2 + (y-0)^2 = x^2 + y^2 = 4 - 3y + 6\sin y$$

- **[B1]** Correct formula. Allow with $D^2 = \dots$ or $x^2 + y^2 = \dots$

#### **Part (b)**

**Step 2: Differentiate $D^2$ with respect to $y$ to find stationary points.**

Need to minimise $D^2$:

$$\frac{\mathrm{d}}{\mathrm{d}y}(D^2) = -3 + 6\cos y = 0$$

(Or e.g. $\frac{\mathrm{d}D}{\mathrm{d}y} = \frac{1}{2\sqrt{4 - 3y + 6\sin y}}(-3 + 6\cos y) = 0$)

- **[M1]** Realises they need to minimise and applies a correct process to do so. The differentiation need not be correct for this mark.

**Step 3: Solve for $y$.**

$$\cos y = \frac{1}{2} \Rightarrow y = \pm \frac{\pi}{3}$$

- **[A1]** At least one of $y = \pm \frac{\pi}{3}$ from a correct derivative.

**Step 4: Substitute $y = \pm \frac{\pi}{3}$ into the equation for $D^2$.**

$$D^2 = 4 - 3\left(\pm \frac{\pi}{3}\right) + 6\sin\left(\pm \frac{\pi}{3}\right)$$

- **[dM1]** Proceeds to find a value for $D$ or $D^2$ for either root of form $k\pi \in (-5, 2), k \neq 0$.

**Step 5: Select the correct solution corresponding to the minimum distance.**

From the graph, the minimum distance clearly occurs in the lower half plane ($y < 0$).

(Alternatively: $\frac{\mathrm{d}^2}{\mathrm{d}y^2}(D^2) = -6\sin y > 0$ for $y = -\frac{\pi}{3}$ only.)

Hence:

$$D^2 = 4 + \pi - 6\left(\frac{\sqrt{3}}{2}\right) = 4 + \pi - 3\sqrt{3}$$

- **[A1]** Selects correct solution for the minimum with minimal reason, getting at least as far as $D^2$. Reason may be comparison of relative values and choosing smaller.

**Step 6: State the simplified minimum value of $D$.**

$$D = \sqrt{4 + \pi - 3\sqrt{3}}$$

- **[A1]** Correct simplified value only for minimum distance. (Allow if no reason given.)

### **Examiner Report 2**

This question was a friendly and well-attempted second question in the paper, testing familiar content in a relatively unfamiliar setting. Most candidates were able to score at least 4 of the 6 marks available here.

In part (a), the vast majority of candidates scored the B mark for a correct formula for $D^2$, with some candidates using $x^2 + y^2$ in place of $D^2$ and were not penalised. Occasional sign slips in rearranging meant the mark wasn’t scored, but it was more common that the mark was withheld because the candidate failed to recognise that they could make $x^2 + y^2$ the subject of the original implicit equation. Some gave $D$ instead of $D^2$, not paying due heed to the demand in the question.

In part (b), a minority of candidates were unclear on the correct way to minimise $D^2$ and, instead of differentiating, attempted to complete the square or examine only the minimum of the trigonometric term. For the majority that did differentiate, most found the correct numerator or wrote e.g. $f(y) = 4 - 3y + 6\sin y$ before differentiating correctly. The most straightforward way of dealing with this was to use $D^2$ rather than $D$, so that candidates only had to differentiate $4 - 3y + 6\sin y$ with respect to $y$ but some attempted $\frac{\mathrm{d}D}{\mathrm{d}y}$ and made slips, most commonly missing the $\frac{1}{2}$ when attempting the chain rule and as such, the first A mark was unavailable. Those that differentiated generally went on to substitute one of their values into either $D^2$ or $D$, most commonly $\frac{\pi}{3}$. It was pleasing to see the number of candidates that had analysed the given graph and established an approximate range for $y$ and were able to deduce that $-\frac{5\pi}{3}$ was not a sensible value to be using. The final two marks did a good job of discriminating between the strongest candidates, as it was rare that candidates chose the correct minimum value, with those that did roughly equally split between analysing where the minimum distance occurred on the graph versus analysing the comparative size of $3\sqrt{3}$ and $\pi$. A few attempted the second derivative – this was far easier for $D^2$ than for $D$.

---
topic: "Trigonometry and Modelling"
subtopic: "Double-angle formulae"
---
### **Question 3**

**(i)** Determine the value of $k$ such that

$$\arctan \frac{1}{2} - \arctan \frac{1}{3} = \arctan k$$ **(3)**

**(ii)(a)** Prove that

$$\cos 3A = 4\cos^3 A - 3\cos A$$ **(3)**

Given that $a = \cos 20^\circ$

**(b)** write down, in terms of $a$, an expression for $\cos 40^\circ$ **(1)**

**(c)** determine, in terms of $a$, a simplified expression for $\cos 80^\circ$ **(2)**

**(d)** Use part (a) to show that

$$4a^3 - 3a = \frac{1}{2}$$ **(1)**

**(e)** Hence, or otherwise, show that

$$\cos 20^\circ \cos 40^\circ \cos 80^\circ = \frac{1}{8}$$ **(4)**

**(Total for Question 3 is 14 marks)**

### **Mark Scheme 3**

#### **Part (i)**

**Step 1: Take tangents of both sides of the equation.**

$$k = \tan\left(\arctan \frac{1}{2} - \arctan \frac{1}{3}\right)$$

- **[M1]** Takes tangents of both sides.

**Step 2: Apply the compound angle formula for tangent.**

$$k = \frac{\tan\left(\arctan \frac{1}{2}\right) - \tan\left(\arctan \frac{1}{3}\right)}{1 + \tan\left(\arctan \frac{1}{2}\right)\tan\left(\arctan \frac{1}{3}\right)}$$

- **[M1]** Applies the correct compound angle formula – signs must be correct.

**Step 3: Simplify the fraction to obtain $k$.**

$$k = \frac{\frac{1}{2} - \frac{1}{3}}{1 + \frac{1}{2} \cdot \frac{1}{3}} = \frac{\frac{1}{6}}{\frac{7}{6}} = \frac{1}{7}$$

- **[A1]** Simplifies to the correct fraction.

#### **Part (ii)(a)**

**Step 4: Use the compound angle formula for $\cos(2A + A)$.**

$$\cos 3A = \cos(2A + A) = \cos 2A \cos A - \sin 2A \sin A$$

- **[M1]** Applies the correct compound angle formula.

**Step 5: Apply double angle formulae to write in terms of $\cos A$ and $\sin A$.**

$$\cos 3A = (2\cos^2 A - 1)\cos A - (2\sin A \cos A)\sin A$$

- **[M1]** Uses correct double angle formulae to reach an expression in single angle only.

**Step 6: Eliminate $\sin^2 A$ and complete the proof.**

$$\cos 3A = 2\cos^3 A - \cos A - 2(1 - \cos^2 A)\cos A = 4\cos^3 A - 3\cos A$$

- **[A1]** Eliminates $\sin A$ and completes proof correctly.

#### **Part (ii)(b)**

**Step 7: Express $\cos 40^\circ$ in terms of $a$.**

$$\cos 40^\circ = \cos(2 \times 20^\circ) = 2\cos^2 20^\circ - 1 = 2a^2 - 1$$

- **[B1]** Correct expression.

#### **Part (ii)(c)**

**Step 8: Apply double angle formula for $\cos 80^\circ$ using the result of part (b).**

$$\cos 80^\circ = \cos(2 \times 40^\circ) = 2(2a^2 - 1)^2 - 1$$

- **[M1]** Applies the double angle formula for $\cos$ a second time with their (b).

**Step 9: Simplify the expression.**

$$\cos 80^\circ = 2(4a^4 - 4a^2 + 1) - 1 = 8a^4 - 8a^2 + 1$$

- **[A1]** Simplified to correct expression.

#### **Part (ii)(d)**

**Step 10: Show the result using part (a) with $A = 20^\circ$.**

With $A = 20^\circ$, $a = \cos 20^\circ$:

$$4a^3 - 3a = \cos 60^\circ = \frac{1}{2}$$

- **[B1]** Uses $A = 20^\circ$ and achieves the result.

#### **Part (ii)(e)**

**Step 11: Multiply the expressions from parts (b) and (c) by $a$.**

$$\cos 20^\circ \cos 40^\circ \cos 80^\circ = a(2a^2 - 1)(8a^4 - 8a^2 + 1) = 16a^7 - 24a^5 + 10a^3 - a$$

- **[M1]** Uses the expressions from (b) and (c) to form an expression in $a$ only provided their expressions are not just multiples of $a$.

**Step 12: Use the identity $4a^3 - 3a = \frac{1}{2}$ to reduce powers.**

$$16a^7 - 24a^5 + 10a^3 - a = (2a^3 - a)(8a^4 - 8a^2 + 1) = (4a^3 - 3a)^2 + \dots$$

- **[M1]** Uses the expression from (d) to reduce power at least once or attempts to use (d) to compare.

**Step 13: Continue reducing powers of $a$ to arrive at a cubic.**

$$= \frac{1}{4}(4a^3 - 3a)$$

- **[M1]** Continues to reduce powers of $a$ to get to a cubic provided their expressions in (b) and (c) were correct up to sign error.

**Step 14: Substitute $4a^3 - 3a = \frac{1}{2}$ to complete the proof.**

$$\cos 20^\circ \cos 40^\circ \cos 80^\circ = \frac{1}{4}\left(\frac{1}{2}\right) = \frac{1}{8}$$

- **[A1]** Correct completion of proof.

### **Examiner Report 3**

Another accessible question with a little bit of bite at the end, this was answered well with most candidates able to make good progress in parts (ii)(a) to (d).

Part (i) generally yielded all 3 marks or no marks, as either candidates were able to see what to do or could not. The algebra was generally sound with only a small number of cases of algebraic errors, failing to reach $\frac{1}{7}$ after a correct unsimplified expression. Most who were correct used the main method of taking tangents of both sides and applying the expansion $\tan(A-B)$. Some rearranged first to a sum of arctans but applied the same process to obtain an equation in $k$ before solving. A few, also, were successful in the more geometric approach, using right angled triangles, but these responses were only infrequently seen.

The bookwork in (ii)(a) was well done with nearly all students scoring full marks for the proof. Occasional slips lost the final accuracy, but the method was performed well. Similarly, parts (b), (c) and (d) generally yielded full marks for the standard application of double angle formula, and the straightforward proof. Again, nearly all used the main versions shown on the scheme, with the alternative version only observed on a couple of scripts. The most common error was to lose a square in one of the identities, while a few weaker candidates thought the solutions to (b) and (c) were $2a$ and $4a$.

Part (e) proved more of a challenge; most could score the first M by writing down an appropriate expression for $\cos 20^\circ \cos 40^\circ \cos 80^\circ$ written in terms of ‘$a$’. Fewer could go much further than that, although some stumbled on one reduction almost by accident before coming to a halt, particularly where earlier error led them to a quadratic in $a$. Most started by expanding the brackets completely, rather than looking for ways each term could be reduced. However, some did spot that $a(2a^2 - 1) = 2a^3 - a$ was close to the identity from (d) and so used this. Such candidates generally proceeded to the correct answer.

Another common route was to expand the $\cos 40^\circ \cos 80^\circ$ terms to get $16a^6 - 24a^4 + 10a^2 - 1$ and use the expansion of $(4a^3 - 3a)^2$ to simplify the former expression to $\frac{1}{4} + a^2 - 1$ which then led fairly directly to the required value. Other variations did occur but these two were the most common approaches.

Some students fell into the temptation to use $(4a^3 - 3a)^3$ as its value is $\frac{1}{8}$ but this leads nowhere directly and were ground to a halt before too long. Other, but rarer, approaches included setting $k = \cos 20^\circ \cos 40^\circ \cos 80^\circ$ and multiplying both sides by $\sin 20^\circ$ followed by use of the double angle formula for sine three times.

---
topic: "Integration"
subtopic: "Integration by substitution"
---
### **Question 4**

**(a)** Use the substitution $x = \sqrt{3}\tan u$ to show that

$$\int \frac{1}{3+x^2}\,\mathrm{d}x = p\arctan(px) + c$$

where $p$ is a real constant to be determined and $c$ is an arbitrary constant. **(5)**

**(b)** Use the substitution $x = \frac{3u+3}{u-3}$ to determine the exact value of $I$ where

$$I = \int_{-3}^{1} \frac{\ln(3-x)}{3+x^2}\,\mathrm{d}x$$

giving your answer in simplest form. **(10)**
**(+S1)**

**(Total for Question 4 is 16 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Differentiate $x = \sqrt{3}\tan u$ with respect to $u$.**

$$\frac{\mathrm{d}x}{\mathrm{d}u} = \sqrt{3}\sec^2 u$$

- **[B1]** Any correct derivative expression for the substitution.

**Step 2: Substitute $x$ and $\mathrm{d}x$ into the integral.**

$$\int \frac{1}{3+x^2}\,\mathrm{d}x = \int \frac{1}{3+3\tan^2 u} \cdot \sqrt{3}\sec^2 u \,\mathrm{d}u$$

- **[M1]** Complete substitution for $u$ made (including replacing $\mathrm{d}x$).

**Step 3: Simplify using the trigonometric identity $1 + \tan^2 u = \sec^2 u$ and integrate.**

$$\int \frac{\sqrt{3}\sec^2 u}{3(1+\tan^2 u)}\,\mathrm{d}u = \int \frac{\sqrt{3}\sec^2 u}{3\sec^2 u}\,\mathrm{d}u = \frac{\sqrt{3}}{3}\int 1\,\mathrm{d}u = \frac{\sqrt{3}}{3}u (+ c)$$

- **[M1]** Applies Pythagorean identity and simplifies and integrates (allow without $+c$).

**Step 4: Express $u$ in terms of $x$.**

$$x = \sqrt{3}\tan u \Rightarrow \tan u = \frac{x}{\sqrt{3}} \Rightarrow u = \arctan\left(\frac{x}{\sqrt{3}}\right) = \arctan\left(\frac{\sqrt{3}}{3}x\right)$$

- **[B1]** Correct $u$ in terms of $x$.

**Step 5: Write down the final result for the integral.**

$$\int \frac{1}{3+x^2}\,\mathrm{d}x = \frac{\sqrt{3}}{3}\arctan\left(\frac{\sqrt{3}}{3}x\right) + c$$

Here $p = \frac{\sqrt{3}}{3}$.

- **[A1]** Correct answer (including $+c$) from fully correct working.

#### **Part (b)**

**Step 6: Differentiate $x = \frac{3u+3}{u-3}$ with respect to $u$.**

$$\frac{\mathrm{d}x}{\mathrm{d}u} = \frac{3(u-3) - (3u+3)(1)}{(u-3)^2} = \frac{-12}{(u-3)^2}$$

- **[M1]** Attempts quotient rule or other appropriate method.
- **[A1]** Correct derivative, suitably simplified numerator $-12$.

**Step 7: Change the limits of integration.**

When $x = -3$: $-3 = \frac{3u+3}{u-3} \Rightarrow -3u + 9 = 3u + 3 \Rightarrow 6u = 6 \Rightarrow u = 1$

When $x = 1$: $1 = \frac{3u+3}{u-3} \Rightarrow u - 3 = 3u + 3 \Rightarrow 2u = -6 \Rightarrow u = -3$

- **[B1]** Correct change of limits seen ($S+$).

**Step 8: Perform the substitution into the integral $I$.**

$$I = \int_{1}^{-3} \frac{\ln\left(3 - \frac{3u+3}{u-3}\right)}{3 + \left(\frac{3u+3}{u-3}\right)^2} \cdot \frac{-12}{(u-3)^2}\,\mathrm{d}u$$

- **[M1]** Complete substitution, including replacing $\mathrm{d}x$, condone small slips e.g. with signs, but terms should be correctly placed.

**Step 9: Simplify the integrand denominator and split the logarithm.**

$$3 - \frac{3u+3}{u-3} = \frac{3u-9-3u-3}{u-3} = \frac{-12}{u-3} = \frac{12}{3-u}$$

$$3 + \left(\frac{3u+3}{u-3}\right)^2 = \frac{3(u-3)^2 + (3u+3)^2}{(u-3)^2} = \frac{12u^2 + 36}{(u-3)^2}$$

Thus:

$$I = -12 \int_{1}^{-3} \frac{\ln 12 - \ln(3-u)}{12u^2 + 36}\,\mathrm{d}u = -\int_{1}^{-3} \frac{\ln 12 - \ln(3-u)}{u^2 + 3}\,\mathrm{d}u$$

- **[M1]** Simplifies to achieve a quadratic denominator and splits the log term.

**Step 10: State the simplified integral with correct limits.**

$$I = -\int_{1}^{-3} \frac{\ln 12 - \ln(3-u)}{u^2 + 3}\,\mathrm{d}u$$

- **[A1]** Fully correct with logs split, $u^2 + 3$ clear in denominator and correct limits attached.

**Step 11: Reverse the limits of integration by negating.**

$$I = \int_{-3}^{1} \frac{\ln 12 - \ln(3-u)}{u^2 + 3}\,\mathrm{d}u = \int_{-3}^{1} \frac{\ln 12}{u^2+3}\,\mathrm{d}u - \int_{-3}^{1} \frac{\ln(3-u)}{u^2+3}\,\mathrm{d}u$$

- **[M1]** Correct process of changing order of limits and negating seen at some stage of working ($S+$).

**Step 12: Recognize $I$ in the second integral and solve for $I$.**

$$I = \int_{-3}^{1} \frac{\ln 12}{u^2+3}\,\mathrm{d}u - I \Rightarrow 2I = \ln 12 \int_{-3}^{1} \frac{1}{u^2+3}\,\mathrm{d}u$$

Using part (a):

$$2I = \ln 12 \left[ \frac{\sqrt{3}}{3}\arctan\left(\frac{\sqrt{3}}{3}u\right) \right]_{-3}^{1}$$

- **[M1]** Recognises $I$ in the integral, makes $I$ the subject and applies their result of (a).

**Step 13: Substitute the limits.**

$$2I = \frac{\sqrt{3}\ln 12}{3} \left( \arctan\left(\frac{\sqrt{3}}{3}\right) - \arctan(-\sqrt{3}) \right) = \frac{\sqrt{3}\ln 12}{3} \left( \frac{\pi}{6} - \left(-\frac{\pi}{3}\right) \right)$$

- **[dM1]** Applies limits. Depends on previous M.

**Step 14: Evaluate to final simplified exact value.**

$$2I = \frac{\sqrt{3}\ln 12}{3} \left(\frac{\pi}{2}\right) = \frac{\pi\sqrt{3}\ln 12}{6} \Rightarrow I = \frac{\pi\sqrt{3}\ln 12}{12}$$

- **[A1]** Correct answer.

- **[S1]** Award S1 for a fully correct succinct solution or a 13+ mark solution containing S+ features (clear change/reversal of limits).

### **Examiner Report 4**

Questions on integration often prove popular with candidates at this level, with strong performances on previous series, and part (a) of this question proved no exception, with the vast majority of candidates scoring all 5 marks. Part (b) proved much more challenging and gave the strongest candidates an opportunity to shine.

The vast majority of candidates worked through part (a) in a routine fashion, differentiating $x$ with respect to $u$ correctly, substituting everything in, using $1 + \tan^2 u = \sec^2 u$ and integrating correctly, before replacing $u$ with $\arctan \frac{x}{\sqrt{3}}$ and including the $+ c$. It was rare for a candidate to struggle in this section, although there were a handful of responses that did not seem confident with integration by substitution and hence failed to differentiate $x$ with respect to $u$.

As in part (a), the majority of candidates worked through the routine work of integration by substitution fairly comfortably, picking up the first four marks quickly, although errors were far more frequent here. The most common mark lost in the early stages of this question was the first A mark, due to errors in simplifying the numerator of $\frac{\mathrm{d}x}{\mathrm{d}u}$, usually due to an error in expanding the brackets leading to $\frac{-6}{(u-3)^2}$ rather than the correct $\frac{-12}{(u-3)^2}$. Occasional slips in rearranging led to incorrect limits and this lost the B mark. A significant minority realised they could reverse the limits by negating the integrand and scored the fourth M mark.

However, the third M mark proved to be the point at which most candidates made no further progress. Despite careful and accurate algebra simplifying the denominator, it was rare for candidates to split the log term in the numerator to reduce the problem to the integrand in part (a) and another instance of the required integral in part (b). As such, it was common for candidates to score between 3 and 5 marks on this part of the question.

Even candidates that scored the third M mark often were unable to complete the problem, as they did not always spot the nested integral. Attempts at integration by parts at this stage (or before splitting logs) were common. Those who did spot the change of variables to get the nested integral $I$ usually proceeded to complete the process and scored full marks.

---
topic: "Vectors"
subtopic: "Solving geometric problems"
---
### **Question 5**

**Figure 2** _(A sketch of a hexagon $OABCDE$, with vector $\vec{OA} = \mathbf{a}$ and vector $\vec{OE} = \mathbf{e}$.)_

Figure 2 shows a sketch of a hexagon $OABCDE$ where

- the interior angle at $O$ and at $C$ are each $60^\circ$
- the interior angle at each of the other vertices is $150^\circ$
- $OA = OE = BC = CD$
- $AB = ED = 3 \times OA$

Given that $\vec{OA} = \mathbf{a}$ and $\vec{OE} = \mathbf{e}$

determine as simplified expressions in terms of $\mathbf{a}$ and $\mathbf{e}$

**(a)** $\vec{AB}$ **(3)**

**(b)** $\vec{OD}$ **(2)**

The point $R$ divides $AB$ internally in the ratio $1:2$

**(c)** Determine $\vec{RC}$ as a simplified expression in terms of $\mathbf{a}$ and $\mathbf{e}$ **(2)**

The line through the points $R$ and $C$ meets the line through the points $O$ and $D$ at the point $X$.

**(d)** Determine $\vec{OX}$ in the form $\lambda\mathbf{a} + \mu\mathbf{e}$, where $\lambda$ and $\mu$ are real values in simplest form. **(6)**
**(+S2)**

**(Total for Question 5 is 15 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Recognize that $\vec{AB}$ is parallel to $\mathbf{a} + \mathbf{e}$.**

$$\vec{AB} = k(\mathbf{a} + \mathbf{e})$$

- **[B1]** Recognises $\mathbf{a} + \mathbf{e}$ is parallel to $\vec{AB}$.

**Step 2: Compare lengths to determine $k$.**

Let $|\mathbf{a}| = |\mathbf{e}| = a$. Since the angle between $\mathbf{a}$ and $\mathbf{e}$ is $60^\circ$:

$$|\mathbf{a} + \mathbf{e}| = 2a\cos 30^\circ = a\sqrt{3}$$

Since $AB = 3 \times OA = 3a$:

$$k = \frac{3a}{a\sqrt{3}} = \sqrt{3}$$

- **[M1]** Correct method for comparing modulus / working out length of $\mathbf{a} + \mathbf{e}$.

**Step 3: State $\vec{AB}$.**

$$\vec{AB} = \sqrt{3}(\mathbf{a} + \mathbf{e})$$

- **[A1]** Correct answer (oe).

#### **Part (b)**

**Step 4: Use vector addition for $\vec{OD}$.**

$$\vec{OD} = \vec{OE} + \vec{ED} = \vec{OE} + \vec{AB}$$

- **[M1]** A correct strategy to find $\vec{OD}$.

**Step 5: Substitute expressions to find $\vec{OD}$.**

$$\vec{OD} = \mathbf{e} + \sqrt{3}(\mathbf{a} + \mathbf{e}) = \sqrt{3}\mathbf{a} + (\sqrt{3}+1)\mathbf{e}$$

- **[A1]** Either form acceptable (oe).

#### **Part (c)**

**Step 6: Formulate strategy to find $\vec{RC}$.**

Since $R$ divides $AB$ in ratio $1:2$, $\vec{AR} = \frac{1}{3}\vec{AB}$ and $\vec{RB} = \frac{2}{3}\vec{AB}$.

$$\vec{RC} = \vec{RB} + \vec{BC} = \frac{2}{3}\vec{AB} + \vec{OE}$$

- **[M1]** For any correct strategy to find $\vec{RC}$.

**Step 7: Substitute $\vec{AB}$ and $\vec{OE}$ into the expression for $\vec{RC}$.**

$$\vec{RC} = \frac{2}{3}\sqrt{3}(\mathbf{a} + \mathbf{e}) + \mathbf{e} = \frac{2}{3}\sqrt{3}\mathbf{a} + \left(\frac{2}{3}\sqrt{3} + 1\right)\mathbf{e}$$

- **[A1]** A correct expression.

#### **Part (d)**

**Step 8: Express $\vec{OX}$ via point $R$ on the line $RC$.**

$$\vec{OX} = \vec{OA} + \vec{AR} + p\vec{RC} = \mathbf{a} + \frac{\sqrt{3}}{3}(\mathbf{a} + \mathbf{e}) + p\left[ \frac{2\sqrt{3}}{3}\mathbf{a} + \left(\frac{2\sqrt{3}}{3} + 1\right)\mathbf{e} \right]$$

- **[M1]** For any complete, valid method to obtain $\vec{OX}$ in terms of $\mathbf{a}, \mathbf{e}$ and a scalar using collinearity of $R, C$ and $X$.
- **[A1]** Correct expression for $\vec{OX}$.

**Step 9: Express $\vec{OX}$ along the line $OD$.**

$$\vec{OX} = q\vec{OD} = q\sqrt{3}\mathbf{a} + q(\sqrt{3}+1)\mathbf{e}$$

- **[B1ft]** For a second correct expression for $\vec{OX}$ in terms of $\mathbf{a}, \mathbf{e}$ and a scalar using their $\vec{OD}$.

**Step 10: Equate components of $\mathbf{a}$ and $\mathbf{e}$ and solve the simultaneous equations.**

Equating components:

$$\mathbf{a}: \quad 1 + \frac{\sqrt{3}}{3} + \frac{2p\sqrt{3}}{3} = q\sqrt{3}$$

$$\mathbf{e}: \quad \frac{\sqrt{3}}{3} + p\left(\frac{2\sqrt{3}}{3} + 1\right) = q(\sqrt{3}+1)$$

Subtracting the $\mathbf{a}$ equation from the $\mathbf{e}$ equation yields $p - 1 = q$.

Substituting $q = p - 1$ back gives $p = \sqrt{3} + 4$ or $q = \sqrt{3} + 3$.

- **[M1]** Equates components of the two equations and solves ($S+$).
- **[A1]** A correct value for either of the two unknowns that were used.

**Step 11: Write $\vec{OX}$ in final simplified form.**

$$\vec{OX} = (\sqrt{3}+3)\left[ \sqrt{3}\mathbf{a} + (\sqrt{3}+1)\mathbf{e} \right] = (3+3\sqrt{3})\mathbf{a} + (6+4\sqrt{3})\mathbf{e}$$

- **[A1]** Correct answer. Accept equivalent simplified in correct form.

- **[S2]** Award S2 for a solution scoring 13 marks that is succinct and includes S+ points (consistent vector notation, efficient solution of equations).

### **Examiner Report 5**

The topic of vectors has proved a stumbling block to many candidates in the past, both at A-level and beyond. This question was, on the whole, answered better than the vectors questions on recent AEA papers, but still saw mixed performance, with many fully correct solutions, as well as the usual poor attempts. Success in parts (b) and (c) largely depended on success in part (a), while part (d) provided a challenge even for the better candidates.

In part (a) many candidates had great difficulty in deciding what to do. Although most realised the answer should be a multiple of $\mathbf{a} + \mathbf{e}$, working out the value of the multiple was more challenging, with many answering the question with $\mathbf{a} + \mathbf{e}$ or $3\mathbf{a} + 3\mathbf{e}$ scoring just the B mark. Some did not even have this success and $3\mathbf{a}$ was given as an answer by many candidates.

Parts (b) and (c) provided easier access, at least in the method, with most able to formulate correct expressions in terms of vectors and use their answer to part (a). But with no follow through, success in obtaining a correct answer therefore depended on whether they had been able to obtain the correct answer to (a).

For part (d) students were expected to equate two different expressions for the vector $\vec{OX}$. Many did so but also there were some who equated vector $\vec{OX}$ with a multiple of vector $\vec{RC}$, while others simply did not know how to get started at all. Successful attempts at this part were somewhat rare.

Very few who had the correct expressions were able to solve the equations, often resorting to substitution which resulted in some complicated manipulations of surds. The handful who spotted that subtracting the equations led to a simple relation between the two unknowns generally went on to score full marks. A few students resorted to using a Cartesian approach although this entailed a great deal more work.

---
topic: "Mechanics and Materials"
subtopic: "Newton's laws of motion"
---
### **Question 6**

**Figure 3** _(A sketch showing block $A$ of mass $4m$ on a plane inclined at $\alpha$, block $B$ of mass $5m$ on a plane inclined at $\beta$, connected by a light inextensible string over smooth pulleys with a ring $C$ of mass $8m$ suspended between them at angle $\gamma$ to the vertical.)_

Figure 3 shows a block $A$ with mass $4m$ and a block $B$ with mass $5m$.
Block $A$ is at rest on a rough plane inclined at an angle $\alpha$ to the horizontal.
Block $B$ is at rest on a rough plane inclined at an angle $\beta$ to the horizontal.
The blocks are connected by a light inextensible string which passes over a small smooth pulley at the top of each plane.
A small smooth ring $C$, of mass $8m$, is threaded on the string between the pulleys so that $A$, $B$ and $C$ all lie in the same vertical plane.
The part of the string between $A$ and its pulley lies along a line of greatest slope of the plane of angle $\alpha$.
The part of the string between $B$ and its pulley lies along a line of greatest slope of the plane of angle $\beta$.
The angle between the vertical and the string between each pulley and the ring $C$ is $\gamma$.
The two blocks, $A$ and $B$, are modelled as particles.

Given that

- $\tan\alpha = \frac{5}{12}$ and $\tan\beta = \frac{7}{24}$ and $\tan\gamma = \frac{3}{4}$
- the coefficient of friction, $\mu$, is the same between each block and its plane
- one of the blocks is on the point of sliding up its plane
- the tension in the string is $T$

**(a)** determine, in terms of $m$ and $g$, an expression for $T$, **(3)**

**(b)** draw a diagram showing the forces on block $A$, clearly labelling each of the forces acting on the block, **(3)**

**(c)** determine the value of $\mu$, giving a justification for your answer. **(10)**
**(+S2)**

**(Total for Question 6 is 18 marks)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Equate vertical forces acting on ring $C$ in equilibrium.**

$$8mg = 2T\cos\gamma$$

- **[M1]** Attempts to equate upward and downward forces for $C$ (allow if $\sin$ used) (must include both forces).

**Step 2: Calculate $\cos\gamma$ from $\tan\gamma = \frac{3}{4}$.**

$$\tan\gamma = \frac{3}{4} \Rightarrow \cos\gamma = \frac{4}{5}$$

$$8mg = 2T\left(\frac{4}{5}\right)$$

- **[dM1]** Uses $\tan\gamma = \frac{3}{4}$ to find $\cos\gamma$ (or $\sin\gamma$) and proceeds to obtain an expression for $T$.

**Step 3: Solve for $T$.**

$$T = 5mg$$

- **[A1]** Correct value $T = 5mg$.

#### **Part (b)**

**Step 4: Draw and label the force diagram for block $A$.**

The four forces are:
- $N_A$ (Normal reaction, perpendicular to the inclined plane, pointing upwards away from plane)
- $W_A$ or $4mg$ (Weight, acting vertically downwards)
- $T$ or $5mg$ (Tension, acting up along the line of greatest slope)
- $F_A$ (Friction, acting down along the line of greatest slope)

- **[M1]** At least forces $N, T$ and $W$ drawn correctly.
- **[A1]** All four drawn correctly. Must have correct direction.
- **[A1]** Forces labelled/defined (angle not required) ($S+$).

#### **Part (c)**

**Step 5: Resolve forces on block $A$ parallel and perpendicular to its plane.**

Parallel to plane: $T = F_A + 4mg\sin\alpha$

Perpendicular to plane: $N_A = 4mg\cos\alpha$

- **[M1]** Resolves forces for one of the blocks (likely block $A$), both directions. Allow if $\sin$ and $\cos$ are mixed up.
- **[A1ft]** Correct equations with $T$ or follow through their (a).

**Step 6: Find an expression for $F_A$.**

$$F_A = T - 4mg\sin\alpha = 5mg - 4mg\sin\alpha$$

- **[M1]** Uses (a) and finds expression for $F_A$ (or $\mu N$ or $\mu$).

**Step 7: Apply maximum friction condition $F_A \le \mu N_A$ for block $A$.**

$$5mg - 4mg\sin\alpha \le \mu (4mg\cos\alpha)$$

- **[M1]** Considers maximal friction. May use equality or inequality.

**Step 8: Compute the bounding value of $\mu$ for block $A$.**

Given $\tan\alpha = \frac{5}{12} \Rightarrow \sin\alpha = \frac{5}{13}, \cos\alpha = \frac{12}{13}$:

$$5 - 4\left(\frac{5}{13}\right) = \mu \cdot 4\left(\frac{12}{13}\right) \Rightarrow \frac{45}{13} = \mu \cdot \frac{48}{13} \Rightarrow \mu = \frac{45}{48} = \frac{15}{16}$$

- **[A1]** Correct bounding value for $\mu$ for block $A$.

**Step 9: Perform the corresponding calculation for block $B$.**

For block $B$ of mass $5m$:

Parallel to plane: $T = F_B + 5mg\sin\beta$

Perpendicular to plane: $N_B = 5mg\cos\beta$

Given $\tan\beta = \frac{7}{24} \Rightarrow \sin\beta = \frac{7}{25}, \cos\beta = \frac{24}{25}$:

$$F_B = 5mg - 5mg\left(\frac{7}{25}\right) = 5mg\left(\frac{18}{25}\right) = \frac{18}{5}mg$$

Maximum friction $F_{B, \text{max}} = \mu N_B = \mu \cdot 5mg\left(\frac{24}{25}\right) = \mu \cdot \frac{24}{5}mg$

$$\mu \ge \frac{18/5}{24/5} = \frac{3}{4}$$

- **[M1]** Uses symmetry or restarts on block $B$ to find the bounding value for block $B$ ($S+$).
- **[B1]** Correct value for $\cos\beta$ used in their equation.
- **[A1]** Correct value found ($\mu = \frac{3}{4}$).

**Step 10: Justify the choice of $\mu$ and state the final answer.**

Since one block is on the point of moving while the whole system is in equilibrium, $\mu$ must equal the larger of the two bounding values, so that both blocks satisfy $F \le \mu N$.

$$\mu = \frac{15}{16}$$

- **[M1]** Correct reason ($S+$).
- **[A1]** Must be simplified.

- **[S2]** Award S2 for a solution scoring 14+ marks that is succinct and includes S+ points (good diagram/labelling, good reasoning, formal definitions).

### **Examiner Report 6**

The quality of the work produced in this question suggested that candidates have been much better prepared for the applied sections of this paper and, in particular, that the understanding of mechanics has improved significantly.

Part (a) required candidates to focus on the forces acting on $C$ and resolve in the vertical direction. The majority of candidates scored all 3 marks here. It was noticeable that some candidates who were less secure tried to ignore $C$ and add equations of motion for $A$ and $B$, which was invalid.

The force diagrams in part (b) were generally very clear, with forces given a clear direction and labelled appropriately. The most common errors were omitting $N_A$, drawing friction acting up the slope, or labelling friction as $F_{\text{max}} = \mu R$ directly on the diagram.

In part (c), most were able to resolve forces at $A$ parallel and perpendicular to the slope, apply $F = \mu R$, and establish a limiting value for $\mu$ of $\frac{15}{16}$. However, many assumed block $A$ was automatically the block on the point of slipping and gave $\frac{15}{16}$ without considering block $B$, missing out on the final 5 marks. Those who analysed both blocks successfully compared the bounding values $\frac{15}{16}$ and $\frac{3}{4}$ and deduced that $\mu = \frac{15}{16}$ was required for equilibrium.

---
topic: "Circles"
subtopic: "Use tangent and chord properties"
---
### **Question 7**

**Figure 4** _(A sketch of two circles of radii $r_1$ and $r_2$ touching externally and both tangential to the x-axis, with the finite region $R$ shaded between the circles and the x-axis.)_

Figure 4 shows a circle with radius $r_1$ and a circle with radius $r_2$.
The circles touch externally at a single point above the x-axis.
Both circles also have the x-axis as a tangent.

**(a)** Show that the horizontal distance between the centres of the circles, $d$, is given by

$$d^2 = 4r_1 r_2$$ **(2)**

The finite region $R$, shown shaded in Figure 4, is bounded by the x-axis and minor arcs of the two circles.

Given that $r_1 \ge r_2$

**(b)** show that the area of $R$ is given by

$$(r_1 + r_2)\sqrt{r_1 r_2} - \frac{1}{2}(r_1^2 - r_2^2)\theta - \frac{1}{2}\pi r_2^2$$

where $\cos\theta = \frac{r_1 - r_2}{r_1 + r_2}$ **(5)**

**Figure 5** _(A sketch showing a sequence of circles $C_1, C_2, C_3, C_4, \dots$ resting on the x-axis, each touching the next, with shaded regions $R_1, R_2, \dots$ below them.)_

A sequence of circles, $C_1, C_2, C_3, \dots$ with radii $r_1, r_2, r_3, \dots$ respectively, is constructed such that

- each circle is tangential to and above the x-axis
- the first circle, $C_1$, has centre $(0, 1)$
- each successive circle touches the preceding one externally at a single point
- the horizontal distances between the centres of successive circles form a geometric sequence with first term 2 and common ratio $\frac{1}{\sqrt{3}}$

The first few circles in the sequence are shown in Figure 5.

**(c)**
**(i)** Determine the value of $r_3$
**(ii)** Show that, for $n \ge 1$, $r_{n+2} = k r_n$ where $k$ is a constant to be determined.
**(iii)** Hence show that, for $n \ge 1$, $r_{2n} = r_{2n-1}$ **(9)**

The region bounded between $C_n, C_{n+1}$ and the x-axis is $R_n$.
The total area, $A$, bounded above the x-axis and under all the circles is the sum of the areas of all these regions.

**(d)** Determine the value of $A$, giving the answer in simplest form. **(6)**
**(+S2)**

**(Total for Question 7 is 24 marks)**

### **Mark Scheme 7**

#### **Part (a)**

**Step 1: Set up a right-angled triangle connecting the centres of the two circles.**

The distance between the centres of the circles is $r_1 + r_2$.

The vertical difference between the centres is $r_1 - r_2$.

By Pythagoras' theorem on the triangle formed by the centres and horizontal/vertical components:

$$d^2 = (r_1 + r_2)^2 - (r_1 - r_2)^2$$

- **[M1]** Recognition of the distance between centres as sum of radii and uses Pythagoras on appropriate triangle ($S+$).

**Step 2: Expand and complete the proof.**

$$d^2 = (r_1^2 + 2r_1 r_2 + r_2^2) - (r_1^2 - 2r_1 r_2 + r_2^2) = 4r_1 r_2$$

- **[A1*]** Expands and completes proof.

#### **Part (b)**

**Step 3: State $\cos\theta$ for the angle subtended at the centre of the larger circle.**

Let $\theta$ be the angle subtended at the centre of circle 1 between the downward vertical and the segment joining the centres:

$$\cos\theta = \frac{\text{adj}}{\text{hyp}} = \frac{r_1 - r_2}{r_1 + r_2}$$

- **[B1]** Correctly shows cosine of the appropriate angle.

**Step 4: Determine the area of the two circular sectors.**

The sector in circle 1 has angle $\theta$ and area $\frac{1}{2}r_1^2 \theta$.

The sector in circle 2 has angle $\pi - \theta$ and area $\frac{1}{2}r_2^2 (\pi - \theta)$.

$$\text{Total sector area} = \frac{1}{2}r_1^2 \theta + \frac{1}{2}r_2^2 (\pi - \theta)$$

- **[M1]** Sets suitable angle and attempts area of both sectors.

**Step 5: Determine the area of the trapezium.**

The region below the line of centres bounded by the radii to the x-axis and the x-axis is a trapezium with parallel side lengths $r_1$ and $r_2$ and height $d = 2\sqrt{r_1 r_2}$:

$$\text{Trapezium area} = \frac{1}{2}(r_1 + r_2)d = \frac{1}{2}(r_1 + r_2)(2\sqrt{r_1 r_2}) = (r_1 + r_2)\sqrt{r_1 r_2}$$

- **[M1]** Attempts the area of the trapezium using (a).

**Step 6: Formulate the strategy for the shaded region $R$.**

$$\text{Area } R = \text{Trapezium area} - \text{Sector 1 area} - \text{Sector 2 area}$$

- **[M1]** For a correct overall strategy to find the area evidenced.

**Step 7: Simplify to achieve the required expression.**

$$\text{Area } R = (r_1 + r_2)\sqrt{r_1 r_2} - \frac{1}{2}r_1^2 \theta - \frac{1}{2}r_2^2(\pi - \theta) = (r_1 + r_2)\sqrt{r_1 r_2} - \frac{1}{2}(r_1^2 - r_2^2)\theta - \frac{1}{2}\pi r_2^2$$

- **[A1*]** Achieves correct expression.

#### **Part (c)(i)**

**Step 8: Calculate $r_3$.**

Given $r_1 = 1$.

Horizontal distance $d_{1,2} = 2 = 2\sqrt{r_1 r_2} \Rightarrow 2 = 2\sqrt{1 \cdot r_2} \Rightarrow r_2 = 1$.

The horizontal distances form a GS with $d_1 = 2$ and ratio $\frac{1}{\sqrt{3}}$, so $d_{2,3} = \frac{2}{\sqrt{3}}$.

$$d_{2,3} = 2\sqrt{r_2 r_3} \Rightarrow \frac{2}{\sqrt{3}} = 2\sqrt{1 \cdot r_3} \Rightarrow \sqrt{r_3} = \frac{1}{\sqrt{3}} \Rightarrow r_3 = \frac{1}{3}$$

- **[M1]** Uses the result of (a) and the second term of the GS for distances to form and solve an equation for $r_3$.
- **[A1]** Correct value $r_3 = \frac{1}{3}$.

#### **Part (c)(ii)**

**Step 9: Write down the expression for the horizontal distance $d_{m, m+1}$.**

$$d_{m, m+1} = 2\left(\frac{1}{\sqrt{3}}\right)^{m-1}$$

- **[M1]** Attempts the distance between centres of two general circles using the G.S.

**Step 10: Use $d_{n, n+1}^2 = 4r_n r_{n+1}$ to establish the recurrence relation.**

$$4 r_{n+1} r_{n+2} = d_{n+1, n+2}^2 = 4\left(\frac{1}{\sqrt{3}}\right)^{2n} = \frac{4}{3^n}$$

$$4 r_n r_{n+1} = d_{n, n+1}^2 = 4\left(\frac{1}{\sqrt{3}}\right)^{2n-2} = \frac{4}{3^{n-1}}$$

Dividing the two equations gives:

$$\frac{r_{n+2}}{r_n} = \frac{4/3^n}{4/3^{n-1}} = \frac{1}{3} \Rightarrow r_{n+2} = \frac{1}{3}r_n$$

- **[M1]** Uses result of (a) with their distance to find an expression for $r_{n+2}$ in terms of $r_n$.
- **[A1]** Correct answer $k = \frac{1}{3}$.

#### **Part (c)(iii)**

**Step 11: Identify the closed-form expression for $r_{2n-1}$.**

The odd-subscripted terms $r_1, r_3, r_5, \dots$ form a geometric sequence with first term $a = r_1 = 1$ and common ratio $r = \frac{1}{3}$:

$$r_{2n-1} = \left(\frac{1}{3}\right)^{n-1}$$

- **[M1]** Recognises alternating terms form a G.S and identifies the closed form.

**Step 12: Express $r_{2n}$ in terms of $r_{2n-1}$ and complete the proof.**

Using $4r_{2n-1} r_{2n} = d_{2n-1, 2n}^2 = 4\left(\frac{1}{\sqrt{3}}\right)^{2(2n-1)-2} = 4\left(\frac{1}{3}\right)^{2n-2}$:

$$r_{2n} = \frac{\frac{4}{3^{2n-2}}}{4 r_{2n-1}} = \frac{1}{3^{2n-2} \cdot \left(\frac{1}{3}\right)^{n-1}} = \frac{1}{3^{n-1}} = r_{2n-1}$$

- **[M1]** Substitutes into the formula and finds $r_{2n}$.
- **[A1]** Completes proof.

#### **Part (d)**

**Step 13: Determine the parameters for the odd and even regions $R_n$.**

For odd regions $R_{2n-1}$: adjacent radii are $r_{2n-1} = r_{2n} = 3^{1-n}$.

Equal radii $\Rightarrow \cos\theta = \frac{r - r}{r + r} = 0 \Rightarrow \theta = \frac{\pi}{2}$.

For even regions $R_{2n}$: adjacent radii are $r_{2n} = 3^{1-n}$ and $r_{2n+1} = 3^{-n}$.

$$\cos\theta = \frac{3^{1-n} - 3^{-n}}{3^{1-n} + 3^{-n}} = \frac{3-1}{3+1} = \frac{1}{2} \Rightarrow \theta = \frac{\pi}{3}$$

- **[M1]** Considers the odd and even cases for $R_n$ and identifies the same ratio of radii ($S+$).
- **[B1]** Correct value for $\cos\theta$ or $\theta$ deduced for the even alternate regions ($\frac{\pi}{3}$).

**Step 14: Calculate the areas of $R_{2n-1}$ and $R_{2n}$.**

For $R_{2n-1}$:

$$R_{2n-1} = \left(3^{1-n} + 3^{1-n}\right)\sqrt{3^{2(1-n)}} - \frac{1}{2}(0)\frac{\pi}{2} - \frac{1}{2}\pi 3^{2(1-n)} = \frac{9}{9^n}\left(2 - \frac{1}{2}\pi\right)$$

For $R_{2n}$:

$$R_{2n} = \left(3^{1-n} + 3^{-n}\right)\sqrt{3^{1-n}\cdot 3^{-n}} - \frac{1}{2}\left(3^{2(1-n)} - 3^{-2n}\right)\frac{\pi}{3} - \frac{1}{2}\pi 3^{-2n}$$

$$= \frac{9}{9^n}\left(\frac{4}{3}\sqrt{3} - \frac{4}{27}\pi - \frac{1}{18}\pi\right) = \frac{9}{9^n}\left(\frac{4}{3}\sqrt{3} - \frac{19}{54}\pi\right)$$

- **[M1]** Attempts the general expression for the two types of area, either separately or as a sum of adjacent pairs.

**Step 15: Sum the geometric series to infinity.**

The total area $A = \sum_{n=1}^{\infty} (R_{2n-1} + R_{2n})$.

Since $\sum_{n=1}^{\infty} \frac{9}{9^n} = \frac{1}{1 - 1/9} = \frac{9}{8}$:

- **[M1]** Recognises the sum to infinity of a G.S. is required and applies it with suitable ratio $\frac{1}{9}$.
- **[dM1]** Full method, both sets of areas considered, with angle attempted and substituted.

**Step 16: Evaluate the total area $A$.**

$$A = \frac{9}{8}\left[ \left(2 - \frac{1}{2}\pi\right) + \left(\frac{4}{3}\sqrt{3} - \frac{19}{54}\pi\right) \right] = \frac{9}{8}\left(2 + \frac{4\sqrt{3}}{3} - \frac{27+19}{54}\pi\right)$$

$$A = \frac{9}{8}\left(2 + \frac{4\sqrt{3}}{3} - \frac{23}{27}\pi\right) = \frac{9}{4} + \frac{3\sqrt{3}}{2} - \frac{23}{24}\pi$$

- **[A1]** Correct answer, accept simplified equivalents.

- **[S2]** Award S2 for a solution scoring 20+ marks that is succinct and includes S+ points (sketches, good explanations, efficient solutions).

### **Examiner Report 7**

This final question on the paper was well placed, and clearly taxed the candidates, with many unable to make progress beyond part (c)(i). But the first two parts did provide some access to marks for the merit candidates, who generally were able to score well in them.

Part (a) was usually well answered as students realised that the line joining the centres of the circles had length $r_1 + r_2$, so were able to use Pythagoras’ theorem on the triangle.

Similarly, many were successful with part (b), commonly scoring at least four marks. Candidates who drew a clear diagram generally did better in deriving the given result. Forming the area of the trapezium was usually completed first, and usually as a trapezium.

Part (c) was designed to lead students to derive the properties of successive circles so that they could make a good attempt at part (d). However, many started making assumptions of what they were actually being asked to prove and entered circular reasoning. Most were able to find the correct value for $r_3$ in (c)(i), but success in part (ii) was less likely. In (c)(iii), students found it very demanding and often tried to adapt their reasoning in part (ii), which did not work.

On part (d) some creditable attempts were seen by the better candidates taking the paper, by using the given results in the previous section. They were able to separate out regions with odd subscripts from those with even subscripts and were able to recognize and use that the areas in both cases were terms of a geometric series with common ratio $\frac{1}{9}$.
