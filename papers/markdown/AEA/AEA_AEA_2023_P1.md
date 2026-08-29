---
topic: "Trigonometric Identities and Equations"
subtopic: "Trigonometric identities"
---
### **Question 1**

**(a)** Write down the exact value of $\cos 405^\circ$ **(1)**

**(b)** Hence, using a double angle identity for cosine, or otherwise, determine the exact value of $\cos 101.25^\circ$, giving your answer in the form
$$a\sqrt{b + c\sqrt{2 + \sqrt{2}}}$$
where $a, b$ and $c$ are rational numbers. **(5)**

**(Total for Question 1 is 6 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: State the exact value**
$$\cos 405^\circ = \cos 45^\circ = \frac{1}{\sqrt{2}}$$
- **[B1]** Correct value.

#### **Part (b)**

**Step 2: Apply the double angle identity**
$$\cos 2\theta = 2\cos^2\theta - 1 \Rightarrow \cos^2\theta = \frac{1}{2}(1 + \cos 2\theta)$$
With $\theta = A$ or $2A$ (where $A = 101.25^\circ$):
- **[M1]** Applies double angle identity to get $\cos A$ or its square in terms of $\cos 2A$ or $\cos 2A$ in terms of $\cos 4A$.

**Step 3: Express $\cos 2A$ using $\cos 4A$**
$$\cos 2A = \pm \sqrt{\frac{1}{2}\left(1 + \frac{\sqrt{2}}{2}\right)}$$
- **[M1]** Proceeds to find expression for $\cos 2A$, allow if sign not considered.

**Step 4: Determine the sign of $\cos 2A$**
As $2A = 202.5^\circ$ is in the third quadrant:
$$\cos 2A = -\sqrt{\frac{1}{2}\left(1 + \frac{\sqrt{2}}{2}\right)}$$
- **[A1]** Correct value for $\cos 2A$ (must have the negative and reject the positive).

**Step 5: Apply the double angle identity a second time to find $\cos A$**
$$\cos A = \pm \sqrt{\frac{1}{2}(1 + \cos 2A)} = \pm \sqrt{\frac{1}{2}\left(1 - \sqrt{\frac{1}{2}\left(1 + \frac{\sqrt{2}}{2}\right)}\right)}$$
- **[M1]** Complete method to get the required cosine (i.e. second use of double angle formula).

**Step 6: Simplify to the required form**
As $A = 101.25^\circ$ is obtuse:
$$\cos A = -\sqrt{\frac{1}{2}\left(1 - \sqrt{\frac{1}{2}\left(1 + \frac{\sqrt{2}}{2}\right)}\right)} = -\frac{1}{2}\sqrt{2 - \sqrt{2 + \sqrt{2}}}$$
- **[A1]** Correct answer, accept any reasonably simplified answer in the form specified, e.g. $-\sqrt{\frac{1}{2} - \frac{1}{4}\sqrt{2 + \sqrt{2}}}$.

### **Examiner Report 1**

This was the most accessible of all questions, where the majority were able to access the mark in part **(a)** and make some progress in part **(b)**, though the subtlety of needing the correct signs for the cosines was missed by most.

Part **(a)** was almost always correct, though some took a circuitous route through trigonometric identities to get to it, rather than realise the period of $360^\circ$ could be subtracted from the argument to reduce it to the well-known ratio of $\cos 45^\circ$.

In part **(b)** all of the approaches on the scheme, and variations on them, were seen. The most common ways were firstly to use the $\cos 2A = 2\cos^2 A - 1$ approach twice either through
$$\cos 2A = \sqrt{\frac{1}{2}(1 + \cos 4A)}$$
or through expanding $\cos 4A$ in terms of $\cos A$ to get a quadratic equation in $\cos^2 A$.

By far the most common mark for this part was 3 because students paid little attention to the signs of $\cos 2A$ and $\cos A$, assuming the square roots were positive, not appreciating the subtlety of the obtuse/reflex angles. Very few showed consideration of the quadrants or other reasoning for the required signs, with only a small proportion able to achieve full marks.

Another, but much rarer approach was to attempt to split $405^\circ$ into the sum of 2 angles and use the compound angle identity, then work out expressions for the sine and cosine of the smaller angles. Such methods often made little progress, though a couple managed to work their way through to a solution, but even if successful would not achieve an expression of the required form.

---
topic: "Algebraic Methods"
subtopic: "Proof by contradiction"
---
### **Question 2**

A student is attempting to prove that there are infinitely many prime numbers.

The student’s attempt to prove this is in the box below.

> Assume there are only finitely many prime numbers, then there is a biggest prime number, $p$.
>
> Let $n = 2p + 1$. Then $n$ is bigger than $p$ and since $2p + 1$ is not divisible by $p$, $n$ is a prime number.
>
> Hence $n$ is a prime number bigger than $p$, contradicting the initial assumption. So we conclude there are infinitely many prime numbers.

**(a)** Use $p = 7$ to show that the following claim made in the student’s proof is **not** true:
"since $2p + 1$ is not divisible by $p$, $n$ is a prime number." **(1)**

The student changes their proof to use $n = 6p + 1$ instead of $n = 2p + 1$.

**(b)** Show, by counter example, that this does not correct the student’s proof. **(2)**

**(c)** Write out a correct proof by contradiction to show that there are infinitely many prime numbers. **(5)**
**(+S1)**

**(Total for Question 2 is 9 marks)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Test $p = 7$**
For $p = 7$ we have $n = 2p + 1 = 15 = (5 \times 3)$, so $n$ is not prime.
- **[B1]** Identifies factors/not prime for the case $p = 7$.

#### **Part (b)**

**Step 2: Test suitable prime counterexample**
Look for a suitable counterexample using a prime $p$. E.g. for $p = 19$, $6 \times 19 + 1 = 115$.
- **[M1]** Looks for a suitable counterexample. Most likely by at least one trial with a prime $p$.

**Step 3: Conclude counterexample**
$115$ is a multiple of $5$ ($5 \times 23$), so $n = 115$ is not prime.
- **[A1]** Correct example and explanation with conclusion.

#### **Part (c)**

**Step 4: Set up initial assumption listing all primes**
Assume there are only finitely many primes, $p_1, p_2, \dots, p_n$ say.
- **[M1]** Sets up an assumption with all primes listed or indexed.

**Step 5: Define the test number $N$**
Now let $N = p_1 p_2 \dots p_n + 1$.
- **[A1]** Correct expression for $N$ set up. Allow if 1 is one of the primes for this mark.

**Step 6: Formulate strategy for contradiction**
$N$ cannot be prime as it is bigger than any prime in the list, so it must have a prime divisor $p_i$ for some $i$.
(OR: We deduce $N$ must be a prime number that is not in the list as none of the prime factors can divide $N$).
- **[M1]** A suitable strategy to derive a contradiction, considering the primality of $N$.

**Step 7: Demonstrate non-divisibility**
But $p_i$ divides $p_1 p_2 \dots p_n$ but not $1$, so $p_i$ cannot divide $N$.
(OR: dividing $N$ by $p_i$ will always give remainder $1$, hence $p_i$ is not a factor).
- **[M1]** Carries out full necessary work to derive the contradiction. Must give evidence; just stating $N$ is not divisible by any of the primes with no justification is M0.

**Step 8: Complete the proof**
This is a contradiction and hence the original assumption is false. We conclude there are infinitely many prime numbers.
- **[A1]** For a full argument, deduces a contradiction and concludes the result required. All work must be correct; A0 if 1 was in the list of primes.
- **[S1]** Award S1 for a good style of proof in **(c)** which is fully correct, well reasoned and concise. E.g. must clearly define all primes before forming the product, give algebraic, not just verbal, reasoning.

### **Examiner Report 2**

For a question based around a standard, named on the specification proof, the overall performance on this question could have been much better, as many did not seem aware or comfortable of the proof.

Part **(a)** was almost always correctly answered, with students able to use the given counter example to demonstrate $n = 2p + 1$ is not prime for $p = 7$. Showing of the prime factors in such counter examples should be encouraged, however, rather than just stating "not prime" with no reason.

Many students failed to gain marks in **(b)** as they did not use a prime number for their example. It seems they did not read the given attempted proof carefully enough to realise it was concentrated on $p$ being (the largest) prime, and so the example used must demonstrate that you can construct a new prime from using just one prime number in the fashion described. It was clear from the context that $p$ stood for a prime number, the use of $p$ for the number was a big hint of this as well, and so students lacked awareness of the situation here in many cases. The most common answer saw students using 4 as their 'prime' number, where presumably students tried each integer value of $p$ until they got to a non-prime value of $6p + 1$. Very few wrote down any of these trials other than their final choice of counterexample. This was also the case where students realised a prime needed to be used, with only a small recorded attempt at reasoning involving final digits as shown on the mark scheme. Some students gained the method for substituting a/some prime number(s) but did not always gain the accuracy as their choice did not result in $n$ being composite. Successful students generally used $p = 19$ as the example.

In part **(c)** many students presented an outline argument which displayed some knowledge of the standard proof but which in many cases lacked rigour, and so lost the final 3 marks. However, a large portion also showed little idea on how to proceed, often simply repeating the first line of the given incorrect proof, showing no understanding that all primes needed to be considered in forming the new number.

A common error following a correct initial assumption was to set up $N = p_1 + p_2 + \dots + p_n + 1$, or just $N = p_n + 1$. Such sets could make no further progress. In the more successful attempts, where progress was made, the students were able to set up their assumption and gave or implied a finite list of primes (sometimes only via the setting up of the number $N$). Many also stated a correct expression for $N$, as the product of primes plus one or in a few cases considering $p_n! + 1$. From this point on, progress was varied. Many simply stated that $N$ was not divisible by any of the primes in the set without giving a justification for this, so could gain the second method but no more. Others gave minimal reasoning, and were able to score the M, but lacked clarity enough to gain the A and/or S mark. Only few students were explicit in showing why each of the primes up to and including $p$ cannot be a factor of $N$.

There are various routes to the full proof that can be taken, but students often were unable to sufficiently robustly elucidate them. For instance, one common issue was that students claimed that $N = 2 \times 3 \times \dots \times p + 1$ (where $p$ is the largest of a finite number of primes) is itself prime without either considering whether it might be composite but divisible by a prime not in the original list, or reasoning that it must be prime since there cannot be any other prime divisors by exhaustion as none in the original list (assumed to be all primes) divides into it. Those able to discern such subtleties were able to pick up the S mark and A mark, but this was seldom achieved, showing only very few students understand the notions of proof well enough to construct even a standard one in exam conditions.

---
topic: "Parametric Equations"
subtopic: "Modelling with parametric equations"
---
### **Question 3**

**Figure 1** _(A sketch showing the curve $C$ and a circle with centre at the origin $O$, intersecting at points $A$ and $B$, enclosing a shaded region $R$.)_

Figure 1 shows the curve $C$ given by the parametric equations
$$x = \frac{5}{\sqrt{3}}\sin t \quad y = 5(1 - \cos t) \quad 0 \le t \le 2\pi$$

The circle with centre at the origin $O$ and with radius $\frac{5\sqrt{2}}{2}$ meets the curve $C$ at the points $A$ and $B$ as shown in Figure 1.

**(a)** Determine the value of $t$ at the point $B$. **(3)**

The region $R$, shown shaded in Figure 1, is bounded by the curve $C$ and the circle.

**(b)** Determine the area of the region $R$. **(7)**

**(Total for Question 3 is 10 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Set up the intersection equation**
$$\left(\frac{5}{\sqrt{3}}\sin t\right)^2 + \left(5(1 - \cos t)\right)^2 = \left(\frac{5\sqrt{2}}{2}\right)^2$$
$$\Rightarrow \frac{25}{3}(1 - \cos^2 t) + 25(1 - \cos t)^2 = \frac{25}{2}$$
- **[M1]** Solves circle and parametric equations simultaneously / uses distance formula at point $B$ and applies $\sin^2 t = 1 - \cos^2 t$ to get an equation in $\cos t$ only.

**Step 2: Solve the quadratic equation in $\cos t$**
$$4\cos^2 t - 12\cos t + 5 = 0 \Rightarrow (2\cos t - 5)(2\cos t - 1) = 0 \Rightarrow \cos t = \frac{1}{2}$$
- **[M1]** Gathers terms and solves a three term quadratic in $\cos t$ via correct method.

**Step 3: Determine the value of $t$**
$$\cos t = \frac{1}{2} \Rightarrow t = \frac{\pi}{3}$$
- **[A1]** Correct value of $t$, accept if both $\frac{\pi}{3}$ and $\frac{5\pi}{3}$ are given or just $\frac{\pi}{3}$ (as $x > 0$ for this value).

#### **Part (b)**

**Step 4: Find the angle of the sector**
For sector, angle $OBB_x = \arctan\left(\frac{5/2}{5/2}\right) = \frac{\pi}{4}$, so angle in sector $OBB_x$ is $\pi - 2 \times \frac{\pi}{4} = \frac{\pi}{2}$.
- **[M1]** Identifies the angle of the sector required. Alternatively, may set up the integral of the circle equation.

**Step 5: Calculate sector area**
$$\text{Area sector} = \frac{1}{2} \times \frac{\pi}{2} \times \left(\frac{5\sqrt{2}}{2}\right)^2$$
- **[M1]** Applies sector or segment formula with their angle which may be $\frac{\pi}{3}$ but not $\pi$ or $2\pi$.

**Step 6: Set up integral for area under curve from $O$ to $B$**
$$\text{Area under curve} = \int_{t=0}^{t=\pi/3} y \frac{dx}{dt} \, dt = \int_{0}^{\pi/3} 5(1 - \cos t) \frac{5}{\sqrt{3}}\cos t \, dt$$
- **[M1]** Correct method for area under curve, either half or all of it considered. Limits not needed.

**Step 7: Perform integration**
$$= \frac{25}{\sqrt{3}}\int_{0}^{\pi/3} \left(\cos t - \frac{1}{2}(1 + \cos 2t)\right) dt = \frac{25}{\sqrt{3}}\left[\sin t - \frac{1}{2}\left(t + \frac{1}{2}\sin 2t\right)\right]_{0}^{\pi/3}$$
- **[dM1]** Applies a correct method of integration (limits not needed).

**Step 8: Evaluate the integral**
$$= \frac{25}{\sqrt{3}}\left[\frac{\sqrt{3}}{2} - \frac{1}{2}\left(\frac{\pi}{3} + \frac{\sqrt{3}}{4}\right)\right]$$
- **[A1]** A correct, not necessarily fully simplified (trig terms evaluated) answer for the area under the curve.

**Step 9: Formulate the strategy for total area**
$$\text{Area} = \text{Area of sector } OAB + 2 \times (\text{Area triangle } OBB_x - \text{Area under curve from } 0 \text{ to } \frac{\pi}{3})$$
- **[M1]** A correct identifiable overall strategy.

**Step 10: Compute final area**
$$\text{Area} = \frac{25\pi}{8} + 2\left(\frac{1}{2}\cdot \frac{5}{2}\cdot \frac{5}{2} - \frac{25}{\sqrt{3}}\left(\frac{3\sqrt{3}}{8} - \frac{\pi}{6}\right)\right) = 25\left(\frac{\pi}{8} + \frac{\pi}{3\sqrt{3}} - \frac{1}{2}\right)$$
- **[A1]** Correct final answer, or equivalent form.

### **Examiner Report 3**

Though this was one of the more accessible questions of the paper, students performed less well than anticipated on this question, which was on a topic which historically has been done better. Few were able to score more than 5 marks on the question, which was surprising.

The question was based on the area common to a circle and a parametrically defined curve (which was an ellipse, though recognition of this was not required or expected), with a mix of parametric and Cartesian equations, and the students had to pick out correct strategies for each. Many resorted to converting everything to Cartesian equations, which lacked elegance and understanding of the geometry by turning it into a more "rote" process. Some high ability students, however, did realise the parametric curve was an ellipse and use scaling of the circle approaches to determine the area correctly.

Part **(a)** was generally well answered with most students going directly to
$$\frac{25}{3}\sin^2 t + (5 - 5\cos t)^2 = \frac{25}{2}$$
and then using at some stage $\sin^2 t = 1 - \cos^2 t$ to form and solve a quadratic in $\cos t$. Most of these divided through by 25 and multiplied through by 3 to simplify the quadratic so that the coefficients were relatively small, but many also attempted the formula with the more complicated coefficients, often resulting in masses of rough working to try and work out the simplified terms — on a non-calculator paper students should understand the questions are set up to be able to reduce to fairly simple equations that can be solved without masses of workings needed. With simplified coefficients, using the formula was possible, although most students factorised.

A few students wrote down the equation of the circle in Cartesian form and then did the same with the ellipse and eliminated one of the variables $x$ or $y$ from the equation. They then solved the resulting equations to get the values for $x$ or $y$ in order to get the value of $t$.

Where mistakes had been made in **(a)** there was often little progress in part **(b)**.

Part **(b)** proved more challenging and many different, and some ingenious (such as the use of scaling), approaches were seen. The symmetry in the $y$-axis was used by most, who tried to find the area between the ellipse and circle with the intention of eventually doubling. But working out how to decompose the area proved challenging for many.

The area under the ellipse was the best attempted of the two sections of area needed, and many were successful realising they needed to integrate the ellipse between $t = 0$ and $t = \frac{\pi}{3}$ and were able to make progress with it, deriving the integral for this in terms of $t$ and carrying out the integration of $\cos^2 t$. Arithmetic errors were sometimes made when evaluating the limits with some using the limits $\frac{\pi}{3}$ and $\frac{5\pi}{3}$ not realising that this would not give the desired area.

Though most did use the parametric form, many opted to convert to Cartesian form instead. Such attempts were less well carried out, often failing to reach an answer, though if a correct substitution was identified there was some success. Another, but unsuccessful, method attempted for the ellipse was to attempt the polar curve area formula, but students doing this assumed the required $r$ would be $r^2 = x^2 + y^2 = \frac{25}{3}\sin^2 t + 25(1 - \cos t)^2$. This is clearly incorrect so could gain no credit.

Some students made no further progress after finding the integral for the ellipse, and gained a maximum of 3 marks for this part, either thinking they had found the area, or not knowing how to work out the portion in the sector of the circle.

Those who made further progress attempted to find the area of the sector, but it was common to see the angle as $\frac{\pi}{3}$ instead of $\frac{\pi}{2}$ or $\frac{\pi}{4}$, not realising the parameter of curve $C$ was not the same as the angle between the $x$-axis and $OB$. Many students again attempted to use the Cartesian form, but in general with less success, dependent on whether they were able to identify a suitable substitution.

Although there were some excellent solutions with good explanations, fully correct answers were not common. After finding the area under the curve and the area of the sector many students were unable to use an appropriate strategy to obtain the desired area. Those who managed to integrate the Cartesian versions of the two curves tended to make more progress in applying a correct strategy, applying the area under circle minus area under ellipse.

A more rare, but usually successful if attempted, method was to use the integral $\int x \, dy$ from $t = 0$ to $t = \pi/3$ followed by an attempt to use the formula for the area of a segment.

---
topic: "Integration"
subtopic: "The trapezium rule"
---
### **Question 4**

**(a)** Use the trapezium rule with 4 strips to find an approximate value for
$$\int_{0}^{1} 16^x \, dx$$ **(2)**

**(b)** Use the trapezium rule with $n$ strips to write down an expression that would give an approximate value for
$$\int_{0}^{1} 16^x \, dx$$ **(2)**

**(c)** Hence show that
$$\int_{0}^{1} 16^x \, dx = \lim_{n \to \infty}\left(\frac{1}{n}\left(1 + 16^{1/n} + 16^{2/n} + \dots + 16^{(n-1)/n}\right)\right)$$ **(3)**

**(d)** Use integration to determine the exact value of
$$\int_{0}^{1} 16^x \, dx$$ **(3)**

Given that the limit exists,

**(e)** use part (c) and the answer to part (d) to determine the exact value of
$$\lim_{x \to 0} \frac{16^x - 1}{x}$$ **(5)**
**(+S1)**

**(Total for Question 4 is 16 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Apply the trapezium rule with $h = \frac{1}{4}$**
$$A \approx \frac{1}{2} \cdot \frac{1}{4} \left(1 + 16 + 2\left(16^{1/4} + 16^{1/2} + 16^{3/4}\right)\right)$$
- **[M1]** Correct structure and value for $h$ used.

**Step 2: Calculate the value**
$$= \frac{1}{8}(17 + 2(2 + 4 + 8)) = \frac{45}{8}$$
- **[A1]** Correct and simplified.

#### **Part (b)**

**Step 3: Apply the trapezium rule with $n$ strips ($h = \frac{1}{n}$)**
$$A \approx \frac{1}{2n}\left(1 + 16 + 2\left(16^{1/n} + 16^{2/n} + 16^{3/n} + \dots + 16^{(n-1)/n}\right)\right)$$
- **[M1]** Correct structure, including $h$. Allow slips in powers.
- **[A1]** Fully correct expression. May use $\sum$ notation.

#### **Part (c)**

**Step 4: Express integral as limit of sum**
$$\int_{0}^{1} 16^x \, dx = \lim_{n \to \infty}\frac{1}{2n}\left(17 + 2\left(16^{1/n} + 16^{2/n} + 16^{3/n} + \dots + 16^{(n-1)/n}\right)\right)$$
- **[M1]** Expresses as limit of their sum.

**Step 5: Separate terms in the limit**
$$= \lim_{n \to \infty}\frac{15}{2n} + \lim_{n \to \infty}\frac{1}{n}\left(1 + 16^{1/n} + 16^{2/n} + \dots + 16^{(n-1)/n}\right)$$
- **[M1]** Splits their sum to extract the desired terms (S+ if limit explained).

**Step 6: Evaluate the limit**
Since $\lim_{n \to \infty}\frac{15}{2n} = 0$:
$$= \lim_{n \to \infty}\frac{1}{n}\left(1 + 16^{1/n} + 16^{2/n} + \dots + 16^{(n-1)/n}\right)$$
- **[A1]** Applies limit and reaches correct answer.

#### **Part (d)**

**Step 7: Identify form of integral**
$$\int 16^x \, dx = k 16^x$$
- **[M1]** Integral is a non-unit multiple of $16^x$.

**Step 8: Perform integration**
$$\int 16^x \, dx = \frac{16^x}{\ln 16}$$
- **[A1]** Correct integral.

**Step 9: Evaluate limits**
$$\int_{0}^{1} 16^x \, dx = \left[\frac{16^x}{\ln 16}\right]_{0}^{1} = \frac{16 - 1}{\ln 16} = \frac{15}{\ln 16}$$
- **[A1]** Correct simplified answer - must be seen in (d).

#### **Part (e)**

**Step 10: Sum the geometric series**
$1 + 16^{1/n} + 16^{2/n} + \dots + 16^{(n-1)/n}$ is a geometric sequence with $a = 1$ and $r = 16^{1/n}$:
$$\text{Sum} = \frac{1\left(\left(16^{1/n}\right)^n - 1\right)}{16^{1/n} - 1} = \frac{15}{16^{1/n} - 1}$$
- **[M1]** Recognises geometric sequence and applies sum.
- **[A1]** $\frac{15}{16^{1/n} - 1}$

**Step 11: Equate answers from (c) and (d)**
$$\frac{15}{\ln 16} = \lim_{n \to \infty}\frac{1}{n}\left(\frac{15}{16^{1/n} - 1}\right) = 15 \lim_{n \to \infty} \left(\frac{1/n}{16^{1/n} - 1}\right)$$
- **[M1]** Equates answers with sum applied, and $1/n$ placed appropriately.

**Step 12: Change variable**
Let $x = 1/n$. As $n \to \infty$, $x \to 0$, so by continuity:
$$\frac{1}{\ln 16} = \lim_{x \to 0}\frac{x}{16^x - 1}$$
- **[M1]** Change variable (S+ good explanation, or mention of continuity).

**Step 13: Deduce required limit**
$$\lim_{x \to 0}\frac{16^x - 1}{x} = \ln 16$$
- **[A1]** Takes reciprocal and deduces correct limit (or $4\ln 2$).
- **[S1]** Award S1 for a fully correct solution that is succinct.

### **Examiner Report 4**

While there were some very accessible marks in this question, with **(a)**, **(b)** and **(d)** being done well by the majority, parts **(c)** and **(e)** proved a challenge. Many further mathematicians attempted l'Hospital's rule for part **(e)**, but this is not a method on the specification and did not satisfy the demand to bring together parts **(c)** and **(d)**. Students should be aware of the specification of the paper and stick to methods within the specification.

Parts **(a)** and **(b)** were generally well answered, and a good source of marks for all students taking the paper. Those who could not apply the trapezium rule were unlikely to make much progress with the question, but there were few such students. The trapezium rule is one of the easy topics on the mathematics specification, so most were able to secure marks in the first two parts. Where errors did occur, a common one was to miss either the first or the last $y$-value, a slip in accuracy rather than understanding and in such cases the answer to part **(b)** was often correct. For part **(b)** slips in the powers were the most common source of error. Use of sigma notation was sometimes seen, and there were numerous cases where students spotted and applied the geometric series summation in part **(b)**, without later realising this is what was required in part **(e)**.

For part **(c)** few students were confident in relating the limit of the series to the area. That is, they did not see how the integral was related to the given limit and very few gave a convincing derivation of the required expression because they could not see how to get from the expression in **(b)** to that in **(c)**. Many did realise they needed to write the integral as a limit of their sum in part **(b)**, though not all wrote this clearly or explicitly, but credit was given if the expression was implied. Many moved directly from the original limit to the answer with no explanation, while others realised the $\frac{17}{2n}$ would tend to zero and disappear, but then just put the "1+" in the final answer with no, or unconvincing, explanation. A lot of students did not attempt this part of the question at all and there were also numerous attempts seen to try and justify the limit without reference to part **(b)** but starting again with rectangles per the definition of integration.

Part **(d)** was well done, students were familiar with the integration of the exponential function $16^x$ and many students gained full marks. A few multiplied by $\ln 16$ rather than dividing, but this was less common.

Part **(e)** was beyond nearly all. Very few could see the relationship between parts **(d)** and **(e)** with many leaving the part out completely. Many students focussed on trying to find the limit by any means, often using l'Hospital's rule, or trying to work it out in some other way, without appreciating the question was requiring the previous answers to be linked. Students largely seemed to be trying to manipulate $\lim_{x \to 0} \frac{16^x - 1}{x}$ rather than working with the series.

Only a minority of students recognised that the expression was a geometric series and they needed to apply the sum formula — while some who had spotted this in part **(b)** failed to apply it in part **(e)**. Those that found an expression for the sum generally did so successfully and went on to equate this to their answer to **(d)** and obtain the correct limit, though not many gave a good explanation of the variable change. The S mark was very rare to award.

---
topic: "Discrete Random Variables"
subtopic: "Solving problems involving random variables"
---
### **Question 5**

**Figure 2** _(A Venn diagram showing three overlapping sets $F$, $G$, $H$ inside a universal set. Numbers in regions are $22$ in $F$ only, $5$ in $G$ only, $16$ in $H$ only, $e$ outside all sets, $b$ in $F \cap G \cap H'$, $a$ in $F \cap G \cap H$, $c$ in $F' \cap G \cap H$, $d$ in $F \cap H \cap G'$.)_

Figure 2 shows a partially completed Venn diagram of sports that a year group of students enjoy, where $a, b, c, d$ and $e$ are non-negative integers.

The diagram shows how many students enjoy a combination of football ($F$), golf ($G$) and hockey ($H$) or none of these sports.

There are $n$ students in the year group.

It is known that
- $\mathrm{P}(F) = \frac{3}{7}$
- $\mathrm{P}(H \mid G) = \frac{1}{3}$
- $F$ is independent of $H \cap G$

**(a)** Show that $\mathrm{P}(F \cap H \cap G) = \frac{1}{7}\mathrm{P}(G)$ **(3)**

**(b)** Prove that if two events $X$ and $Y$ are independent, then $X'$ and $Y$ are also independent. **(3)**

**(c)** Hence find the value $k$ such that $\mathrm{P}(F' \cap H \cap G) = k\mathrm{P}(G)$ **(2)**

**(d)** Show that $c = \frac{4}{3}a$ **(2)**

Given further that $\mathrm{P}(F \mid H) = \frac{1}{5}$

**(e)** find an expression for $d$ in terms of $a$, and hence deduce the maximum possible value of $a$. **(3)**

**(f)** Determine the possible values of $n$. **(6)**
**(+S2)**

**(Total for Question 5 is 21 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Apply independence of $F$ and $H \cap G$**
$$\mathrm{P}(F \cap H \cap G) = \mathrm{P}(F)\mathrm{P}(H \cap G)$$
- **[M1]** Applies the condition on independence correctly.

**Step 2: Apply conditional probability**
$$\mathrm{P}(H \mid G) = \frac{1}{3} \Rightarrow \mathrm{P}(H \cap G) = \mathrm{P}(G) \times \frac{1}{3}$$
- **[M1]** Applies the conditional probability correctly.

**Step 3: Combine facts**
$$\mathrm{P}(F \cap H \cap G) = \frac{3}{7} \times \frac{1}{3}\mathrm{P}(G) = \frac{1}{7}\mathrm{P}(G)$$
- **[A1]** Draws both facts together to deduce the given result.

#### **Part (b)**

**Step 4: Express $\mathrm{P}(X' \cap Y)$ using mutual exclusivity**
$$\mathrm{P}(X' \cap Y) = \mathrm{P}(Y) - \mathrm{P}(X \cap Y)$$
- **[M1]** Sets or applies up correct relation using mutual exclusivity of $X' \cap Y$ and $X \cap Y$.

**Step 5: Apply independence of $X$ and $Y$**
$$\mathrm{P}(X' \cap Y) = \mathrm{P}(Y) - \mathrm{P}(X)\mathrm{P}(Y)$$
- **[M1]** Uses independence of $X$ and $Y$ (must be applied, not just stated).

**Step 6: Factorise to complete proof**
$$\mathrm{P}(X' \cap Y) = \mathrm{P}(Y)(1 - \mathrm{P}(X)) = \mathrm{P}(X')\mathrm{P}(Y)$$
Hence $X'$ and $Y$ are independent.
- **[A1]** Factorises and uses complement property, and concludes independent.

#### **Part (c)**

**Step 7: Apply the result of (b)**
$$\mathrm{P}(F' \cap H \cap G) = \mathrm{P}(F')\mathrm{P}(H \cap G) = (1 - \mathrm{P}(F))\frac{1}{3}\mathrm{P}(G)$$
- **[M1]** Applies the result of (b) together with similar work shown in (a).

**Step 8: Calculate $k$**
$$= \left(1 - \frac{3}{7}\right)\frac{1}{3}\mathrm{P}(G) = \frac{4}{21}\mathrm{P}(G) \Rightarrow k = \frac{4}{21}$$
- **[A1]** Correct value of $k$ seen in formula or identified.

#### **Part (d)**

**Step 9: Set up equation relating $a$ and $c$**
$$\mathrm{P}(F \cap H \cap G) = \frac{a}{n} \quad \text{and} \quad \mathrm{P}(F' \cap H \cap G) = \frac{c}{n}$$
$$\frac{c}{n} = \frac{4}{21}\left(7 \times \frac{a}{n}\right) = \frac{4}{3}\frac{a}{n}$$
- **[M1]** Uses either the results from (a) and (c) or independence to set up an equation in $a$ and $c$.

**Step 10: State the result**
$$c = \frac{4}{3}a$$
- **[A1]** Correct result.

#### **Part (e)**

**Step 11: Apply $\mathrm{P}(F \mid H) = \frac{1}{5}$**
$$\mathrm{P}(F \mid H) = \frac{a+d}{a+c+d+16} = \frac{1}{5} \Rightarrow 5(a+d) = a + \frac{4}{3}a + d + 16$$
- **[M1]** Uses the given fact and result of (d) to set up an equation in $a$ and $d$ only.

**Step 12: Solve for $d$**
$$4d = 16 - \frac{8}{3}a \Rightarrow d = 4 - \frac{2}{3}a$$
- **[A1]** Correct answer for $d$ in terms of $a$.

**Step 13: Deduce maximum value of $a$**
Since $d \ge 0$, $4 - \frac{2}{3}a \ge 0 \Rightarrow a \le 6$.
As $c = \frac{4}{3}a$ must be an integer, $a$ must be a multiple of 3. Thus maximum $a = 6$.
- **[A1]** Correct value.

#### **Part (f)**

**Step 14: Identify possible values for $a$**
Since $c = \frac{4}{3}a$ is an integer and $a \le 6$, $a$ can be $0, 3$ or $6$.
- **[M1]** Uses the given constraint to work out possible values for $a$.

**Step 15: Find $b$ in terms of $a$**
$$\mathrm{P}(H \mid G) = \frac{1}{3} \Rightarrow \frac{a+c}{a+c+b+5} = \frac{1}{3} \Rightarrow 2(a+c) = b+5$$
With $c = \frac{4}{3}a$:
$$2\left(\frac{7}{3}a\right) = b + 5 \Rightarrow b = \frac{14}{3}a - 5$$
- **[M1]** Sets up an equation in order to find $b$.
- **[A1]** Correct equation for $b$ in terms of $a$ or correct value for either $a = 3$ ($b = 9$) or $a = 6$ ($b = 23$). Note for $a = 0$, $b = -5$ which is impossible.

**Step 16: Express $\mathrm{P}(F)$ in terms of $a$**
$$\mathrm{P}(F) = \frac{22 + a + b + d}{n} = \frac{22 + a + \left(\frac{14}{3}a - 5\right) + \left(4 - \frac{2}{3}a\right)}{n} = \frac{21 + 5a}{n}$$
- **[M1]** Find $\mathrm{P}(F)$ in terms of $a$ or for $a = 3$ or $6$.

**Step 17: Solve for $n$**
$$\mathrm{P}(F) = \frac{3}{7} \Rightarrow \frac{21 + 5a}{n} = \frac{3}{7} \Rightarrow n = \frac{7}{3}(21 + 5a)$$
- **[A1]** Uses $\mathrm{P}(F)$ to find $n$ in terms of $a$ or with a value for $a$.

**Step 18: Evaluate $n$ for valid $a$**
For $a = 3$: $n = \frac{7}{3}(21 + 15) = 84$.
For $a = 6$: $n = \frac{7}{3}(21 + 30) = 119$.
- **[A1]** Correct two values and no others ($n = 84$ or $n = 119$).
- **[S2]** Award S2 for a solution scoring 17+ marks that is succinct and includes some S+ points.

### **Examiner Report 5**

Overall students were much more prepared for a question of this nature than has been seen in the previous few years, with the inclusion of the mechanics and statistics specifications as part of the assessment material now expected, though there were still a few who made no attempt at all.

The access to the question was moderate, with many able to get started and make progress in some parts, but few able to persevere successfully to the end. Numerous students earnt a large proportion of the marks in this question and some really nice solutions that were concise, clearly explained and earned the 2 S marks on offer.

Part **(a)** was well done by those who used the standard properties of independence and conditional probability. Those that tried to express probabilities in terms of the numbers and letters on the diagram were less successful, though commonly returned to the definitions to achieve the result in the end. But many attempted to set up needless equations in $a, b$, etc. at this stage, often getting lost, or jumping ahead to later parts. For some the thought processes were very hard to follow and challenging for markers. It also became apparent in this and later parts that some students confuse the ideas of probability and set cardinality, with the letters in the diagram often being referred to as the probabilities, without division of the $n$.

Part **(b)** saw a great deal of confusion in how to go about proving this result, which was mainly included as a prelude to the latter parts. Most could write down the meaning of the property of independence of $X$ and $Y$, though some did not apply this to their proof and did not gain a mark. But the majority attempted to apply it in some way, scoring the second method, but found it difficult to complete the whole proof using the mutual exclusivity of the intersections. Many successful students drew a sketch of the two set Venn diagram with suitable shading to demonstrate the statement $\mathrm{P}(X \cap Y) + \mathrm{P}(X' \cap Y) = \mathrm{P}(Y)$. Other, more convoluted proofs were also seen, some successful, others faltering, where more complicated expressions involving the conditional probabilities were used, while some used a labelled Venn diagram to identify probabilities in terms of variables, $x, y, z$ and so on, prove the result using probabilities, rather than theory.

Parts **(c)** and **(d)** were successfully done by many students, as at this stage they were able to work with the algebra using the variables in the question and piece together the probabilities. The confusion of probabilities with set cardinality was the most common reason for loss of accuracy after the method was scored in both parts. A few different approaches to finding the value of $k$ and showing the value of $c$ were seen, by piecing together various of the bits of information. In some cases work for latter parts was done prior to achieving these.

Part **(e)** was the first which required detailed use of the symbols in the given diagram, though many had already made use of these by this stage. There was good progress seen in many responses, setting up an expression in $a, c$ and $d$ using $\mathrm{P}(F \mid H) = \frac{1}{5}$ and then eliminating $c$ to form an expression for $d$, usually the correct $d = 4 - \frac{2}{3}a$. Other, more circuitous routes to the result were also seen frequently, where equations also involving $b$ and some of the other numbers were used before eliminating successfully, using the given constraints, to reach $d$. It was good to see many persisting, albeit via more elaborate routes than necessary. The higher ability students were able to spot the more direct route.

Having found the correct expression most were then able to deduce that the maximum value for $a$ is 6, though a few omitted to answer this part of the question (often going on to give a range of values for $n$ in part **(f)** if they progressed that far). A common error was to state $a < 6$ and then to conclude that the maximum is 5, presumably having read 'non-negative' as 'positive'.

Part **(f)** was less well answered with many students unable to make much progress towards the answer, listing a lot of equations and not working out how to proceed with them. Only a few picked up on the point of asking for the maximum of $a$ in **(e)**, allowing them to conclude that the allowable values of $a$ were 0, 3 and 6, and instead wrote a lot more to complete the question as they had to consider each integer value of $a$ from 0 to 6 in turn, if considered at all. Seeing a range given for $n$ was common.

Some were able to set up equations using the given information or the Venn diagram but were then unable to eliminate enough variables to find an expression for $n$, particularly when they had included $e$ in their expression. However, many did manage to achieve the correct expression, or a correct value, for $b$, sometimes having done so in earlier parts, with disambiguating $e$ and $n$ being the main stumbling point. There were many valiant efforts which attempted various equations to eliminate $e$ without success, and only few fully correct answers were seen, but often these were from very good responses.

---
topic: "Differentiation"
subtopic: "Modelling with differentiation"
---
### **Question 6**

[In this question you may assume the following formulae for the volume and curved surface area of a cone of base radius $r$ and height $h$ and of a sphere of radius $r$.
Cone: volume $V = \frac{1}{3}\pi r^2 h$ and curved surface area $S = \pi r \sqrt{h^2 + r^2}$
Sphere: volume $V = \frac{4}{3}\pi r^3$ and curved surface area $S = 4\pi r^2$]

**Figure 3** _(A garden ornament consisting of a hemisphere of radius $R\text{ cm}$ on top of a truncated cone of base radius $2r\text{ cm}$, top radius $r\text{ cm}$ and height $4r\text{ cm}$.)_

Figure 3 shows the design for a garden ornament.

The ornament is made of a hemisphere on top of a truncated cone.

The truncated cone has base radius $2r\text{ cm}$, top radius $r\text{ cm}$ and height $4r\text{ cm}$.

The hemisphere has radius $R\text{ cm}$.

Given that the volume of the ornament is $2100\pi\text{ cm}^3$

**(a)** show that
$$R^3 = 3150 - 14r^3$$ **(5)**

**(b)** Find an expression involving $\frac{dR}{dr}$ in terms of $r$ and/or $R$. **(2)**

The base of the truncated cone of the ornament is fixed to the ground.

**(c)** Show that the visible surface area of the ornament, $A\text{ cm}^2$, is given by
$$A = (3\sqrt{17} - 1)\pi r^2 + 3\pi R^2$$ **(5)**

**Figure 4** _(A sketch of $A$ against $r$ for $r \ge 0$, showing a local minimum at $r=0$, a local maximum at $M$, and an overall minimum point at $N$ where the gradient of the curve is undefined.)_

Figure 4 shows a sketch of $A$ against $r$, for $r \ge 0$

There is a local minimum at $r = 0$ and a local maximum at the point $M$. The overall minimum point is at the point $N$, where the gradient of the curve is undefined.

**(d)** Hence show that
$$\frac{dA}{dr} = \gamma\pi r - \frac{\delta\pi r^2}{R}$$
where $\gamma$ and $\delta$ are real numbers to be determined. **(2)**

**(e)** **(i)** Determine the $r$ coordinate of the point $N$.

**(ii)** Explain why, for the ornament, $r$ must be less than this value. **(2)**

**(f)** Show that the $r$ coordinate of the point $M$ is
$$\sqrt[3]{\frac{p(3\sqrt{17} - 1)^3}{3q^2 + (3\sqrt{17} - 1)^3}}$$
where $p$ and $q$ are integers to be determined. **(5)**
**(+S2)**

**(Total for Question 6 is 23 marks)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Find volume of truncated cone using similar triangles**
By similar triangles, full cone would have height $8r$.
$$\text{Volume of truncated cone} = \frac{1}{3}\pi (2r)^2(8r) - \frac{1}{3}\pi r^2(4r)$$
- **[M1]** Correct strategy for finding the volume of truncated cone (S+ good reason).

**Step 2: Simplify volume of truncated cone**
$$= \frac{1}{3}\pi r^3 (32 - 4) = \frac{28}{3}\pi r^3$$
- **[A1]** Correct volume for truncated cone.

**Step 3: Sum volume of truncated cone and hemisphere**
$$\text{Total volume} = \frac{28}{3}\pi r^3 + \frac{1}{2}\left(\frac{4}{3}\pi R^3\right) = \frac{28}{3}\pi r^3 + \frac{2}{3}\pi R^3$$
- **[M1]** Sums their volume for truncated cone with volume for hemisphere.

**Step 4: Equate to total volume**
$$\frac{28}{3}\pi r^3 + \frac{2}{3}\pi R^3 = 2100\pi$$
- **[dM1]** Depends on both Ms. Sets expression equal to $2100\pi$ and solves for $R^3$.

**Step 5: Deduce $R^3$**
$$R^3 = \frac{3}{2}\left(2100 - \frac{28}{3}r^3\right) = 3150 - 14r^3$$
- **[A1]** Correct expression reached with a suitable intermediate line.

#### **Part (b)**

**Step 6: Differentiate implicitly or explicitly**
$$3R^2 \frac{dR}{dr} = -42r^2 \quad \text{or} \quad \frac{dR}{dr} = -14r^2 (3150 - 14r^3)^{-2/3}$$
- **[M1]** Differentiates implicitly or explicitly to an expression of the correct form.

**Step 7: State $\frac{dR}{dr}$**
$$3R^2 \frac{dR}{dr} = -42r^2 \Rightarrow \frac{dR}{dr} = -\frac{14r^2}{R^2}$$
- **[A1]** Any correct expression.

#### **Part (c)**

**Step 8: Find visible surface area of hemisphere**
$$\text{External part of hemisphere} = 2\pi R^2 + (\pi R^2 - \pi r^2) = 3\pi R^2 - \pi r^2$$
- **[M1]** Finds area of external part of hemisphere visible — i.e. removing the intersection of cone and sphere (S+ good reasoning).

**Step 9: Find curved surface area of truncated cone**
$$\text{CSA} = \pi(2r)\sqrt{(8r)^2 + (2r)^2} - \pi r \sqrt{(4r)^2 + r^2}$$
- **[M1]** Correct attempt at area of curved surface of truncated cone.

**Step 10: Sum the areas**
$$A = 3\pi R^2 - \pi r^2 + 2\pi r \sqrt{68r^2} - \pi r \sqrt{17r^2} = 3\pi R^2 - \pi r^2 + 4\pi r^2\sqrt{17} - \pi r^2\sqrt{17}$$
- **[A1]** Correct total area.

**Step 11: Simplify to required form**
$$= 3\pi R^2 - \pi r^2 + 3\sqrt{17}\pi r^2 = (3\sqrt{17} - 1)\pi r^2 + 3\pi R^2$$
- **[M1]** Simplifies the expressions for the SA of the frustum to the correct form.
- **[A1]** Correct answer reached with no errors seen.

#### **Part (d)**

**Step 12: Differentiate $A$ with respect to $r$**
$$\frac{dA}{dr} = 2(3\sqrt{17} - 1)\pi r + 6\pi R \frac{dR}{dr}$$
- **[M1]** Differentiates implicitly and uses their answer to (b) to replace $\frac{dR}{dr}$.

**Step 13: Substitute $\frac{dR}{dr}$**
$$\frac{dA}{dr} = 2(3\sqrt{17} - 1)\pi r + 6\pi R \left(-\frac{14r^2}{R^2}\right) = 2(3\sqrt{17} - 1)\pi r - \frac{84\pi r^2}{R}$$
So $\gamma = 2(3\sqrt{17} - 1)$ and $\delta = 84$.
- **[A1]** Correct answer.

#### **Part (e)**

**Step 14: Determine $r$ coordinate of $N$**
$N$ is where $R = 0$:
$$3150 - 14r^3 = 0 \Rightarrow r^3 = \frac{3150}{14} = 225 \Rightarrow r = \sqrt[3]{225}$$
- **[B1]** For $\sqrt[3]{225}$.

**Step 15: Explain why $r < \sqrt[3]{225}$**
If $r > \sqrt[3]{225}$, then $R^3 < 0$, so $R$ would be negative, which cannot happen in the context of the physical ornament (radius must be positive).
- **[B1]** Correct explanation (S+ if further explains context).

#### **Part (f)**

**Step 16: Set $\frac{dA}{dr} = 0$**
$$2(3\sqrt{17} - 1)\pi r - \frac{84\pi r^2}{R} = 0 \Rightarrow R(3\sqrt{17} - 1) = 42r$$
- **[M1]** Sets their derivative equal to zero and attempts to solve.

**Step 17: Cube both sides**
$$R^3(3\sqrt{17} - 1)^3 = (42r)^3 = 42^3 r^3$$
- **[M1]** Cubes and substitutes for $R^3$.

**Step 18: Substitute $R^3 = 3150 - 14r^3$**
$$(3150 - 14r^3)(3\sqrt{17} - 1)^3 = (42)^3 r^3$$
- **[A1]** Correct equation in just $r$.

**Step 19: Solve for $r^3$**
$$3150(3\sqrt{17} - 1)^3 = \left(42^3 + 14(3\sqrt{17} - 1)^3\right)r^3$$
Divide by 14 (noting $3150 = 14 \times 225$ and $42^3 / 14 = 3 \times 42^2$):
$$225(3\sqrt{17} - 1)^3 = \left(3 \times 42^2 + (3\sqrt{17} - 1)^3\right)r^3$$
$$r^3 = \frac{225(3\sqrt{17} - 1)^3}{3 \times 42^2 + (3\sqrt{17} - 1)^3}$$
- **[M1]** Makes $r$ or $r^3$ the subject.

**Step 20: State final answer**
$$r = \sqrt[3]{\frac{225(3\sqrt{17} - 1)^3}{3 \times 42^2 + (3\sqrt{17} - 1)^3}}$$
So $p = 225$ and $q = 42$.
- **[A1]** Correct answer.
- **[S2]** Award S2 for a succinct solution with good explanations.

### **Examiner Report 6**

This contextual question, based on ideas of calculus, saw many students achieve a good number of marks. It is an expected type of question, one that usually sees much progress made, so this was no different, giving good access throughout, while still proving to be a good discriminating question overall.

There were a large number of marks available in parts **(a)** and **(c)** for essentially being able to apply the formulae given in the question, with the twist being working out the height of the full cone. However, as the expressions for the volume and surface area of the ornament were both given, there were students who forced initial incorrect set ups, particularly for the volume, to make them fit the given expressions. Most students used the approaches on the mark scheme but there were some novel approaches to finding the volume and surface areas including consideration of volume, area scale-factors and consideration of the net of the truncated cone.

Part **(a)** required the vision to see that this depended on the application of lengths of similar shapes. That is, the frustum can be thought of as the result of removing a cone of radius $r$, height $4r$ from a similar cone of radius $2r$ and height $8r$. The result then follows straightforwardly. It was common for students to use a height of $8r$ without any justification, while others used $h$ for the full height, or height of the "top" cone before later replacing by the relevant $8r$ or $4r$ respectively. Some did show where these had come from, though for many benefit of the doubt was allowed even though they seem to work these out via figuring out what was needed to make their expression match the given ones. This was particularly rife in part **(a)**, as by part **(c)** many of these, having worked out the height of $8r$, were able to progress. Some students used $R + r$ for the height of the full cone, though, and these were not allowed benefit of doubt as $R$ was the radius of the cone and used as such. Often the relevant $R$ would be replaced by $4r$ later to force the result, but the clear misunderstanding meant at most 1 mark was scored in **(a)** and **(c)** (unless in **(c)** they started out with the correct height).

For part **(c)** most were able to find an expression for the external part of the hemisphere and the area of the curved surface area. The inclusion of the non-visible base was uncommon. Success in use of the surface area formula for the cone again depended on whether they had worked out the height correctly, with the same provisos as part **(a)**. Although many students arrived at the correct final expression, the intermediary steps to simplify the terms in $\sqrt{68}$ and $\sqrt{17}$ were not always clearly shown and so some students lost the final method. Students should be reminded that more detailed reasoning is required when the result is given.

The differentiation in parts **(b)** and **(d)** was generally well done, being the staple of this type of question. The most common approach was to differentiate implicitly which most students did confidently and accurately, often rearranging to make $\frac{dR}{dr}$ the subject directly. Some substituted for $R$ and differentiated explicitly, slightly more long-winded but usually still accurately though there was a higher occurrence of errors with the coefficient "$-84$" in these cases.

Part **(e)** transitioned out of the model and into a graphical analysis of the expression found in part **(c)**, and proved to be more challenging. Some students did not attempt part **(e)(i)** at all, while others got as far as stating $R = 0$, but did not find the corresponding value for $r$. Few students recognised that the cusp on the diagram corresponds to $R = 0$ and so were unable to find $r = \sqrt[3]{225}$, while others identified the correct value but were unable to sufficiently simplify it. Again part **(ii)** was often not attempted or the explanation referred to the value for $r$ rather than $R$. Few were able to identify, when $r$ was greater than $\sqrt[3]{225}$ the value of $R$ would be negative and so unrealistic, though many were able to do the latter but not the former.

Some students attempted to reason with reference to the ornament shape, realising that the model broke down for $r > R$ and focussing on this, rather than the function in question, and so were not able to gain credit.

Part **(f)** was generally started well and in many cases the algebraic manipulation was good, sometimes better than the arithmetic. Most realised that they needed to set $\frac{dA}{dr}$ to 0 and then re-arrange to make $r$ the subject, but it proved a challenge manipulating the expression. Some students gave up after forming the correct initial equation. Others attempted to substitute for $R$ but did not cube expressions. Those who cubed the expression before substituting for $R$ tended to be able to make more progress than those who tried to work with cube roots. Where students had got to this point, most went on to make $r$ the subject, but only very few managed to reach the required coefficients. The tendency was to try and work out the expansions of numbers such as $84^3 = 592704$ via lots of long multiplication. Aside working, and then to be unable to re-factorise the numbers (sometimes due to errors in calculation of the cubes) to reach the necessary simplified forms. Students would be well advised to work with the numbers as cubes to facilitate easy spotting of factors. However, many were able to access one or both S marks with a correct unsimplified form having been reached.

---
topic: "Sequences and Series"
subtopic: "Recurrence relations"
---
### **Question 7**

A sequence of non-zero real numbers $a_1, a_2, a_3, \dots$ is defined by
$$a_{n+1} = p + \frac{q}{a_n} \quad n \in \mathbb{N}$$
where $p$ and $q$ are real numbers with $q \neq 0$.

It is known that
- one of the terms of this sequence is $a$
- the sequence is periodic

**(a)** Determine an equation for $q$, in terms of $p$ and $a$, such that the sequence is constant (of period/order one). **(2)**

**(b)** Determine the value of $p$ that is necessary for the sequence to be of period/order 2. **(3)**

**(c)** Give an example of a sequence that satisfies the condition in part (b), but is **not** of period/order 2. **(2)**

**(d)** Determine an equation for $q$, in terms of $p$ only, such that the sequence has period/order 4. **(7)**
**(+S1)**

**(Total for Question 7 is 15 marks)**

### **Mark Scheme 7**

#### **Part (a)**

**Step 1: Set condition for constant sequence**
Need $a_{n+1} = a_n = a$, so $a = p + \frac{q}{a}$.
- **[M1]** Attempts to set up an equation where $a_{n+1} = a_n = a$.

**Step 2: Solve for $q$**
$$q = a^2 - ap$$
- **[A1]** Correct equation. Must be in terms of $a$ and $p$.

#### **Part (b)**

**Step 3: Set up condition for period 2**
Need $a_{n+2} = a_n = a$, so:
$$a = p + \frac{q}{p + \frac{q}{a}}$$
- **[M1]** Uses period to set up an equation in $a, p$ and $q$. Allow with $a_1$ instead of $a$. Alternatively sets up simultaneous equations $b = p + \frac{q}{a}$ and $a = p + \frac{q}{b}$.

**Step 4: Simplify equation**
$$a = p + \frac{qa}{pa + q} \Rightarrow a(pa + q) = p(pa + q) + qa$$
$$\Rightarrow pa^2 + qa = p^2 a + pq + qa \Rightarrow p(a^2 - ap - q) = 0$$
- **[A1]** For a correct one-line $=0$ equation in $p$, with $p$ factored out, or equivalent suitable correct working to establish the constraint.

**Step 5: Deduce required $p$**
Since $a^2 - ap - q = 0$ gives a constant sequence (period 1), we need $p = 0$ for a period 2 sequence.
- **[B1]** Deduces $p = 0$ required. Must give $p = 0$ only (S+ if explanation given).

#### **Part (c)**

**Step 6: Realise condition for order 1 sequence with $p = 0$**
With $p = 0$, $a_{n+1} = \frac{q}{a_n}$.
To be a constant sequence (period 1, so not order 2), we need $a = \frac{q}{a} \Rightarrow a^2 = q$.
- **[M1]** Realise need for order 1 sequence (may be implied by attempt to find one, or by a correct sequence being given; S+ for explanation).

**Step 7: Provide a valid sequence**
E.g. $a_{n+1} = \frac{4}{a_n}$ with $a_1 = 2$.
- **[A1]** Correct sequence with both recurrence relation and either first term or $a$ given, or with terms listed.

#### **Part (d)**

**Step 8: Express $a_{n+4}$ in terms of $a_n$**
Need $a_{n+4} = a_n = a$. First find $a_{n+2}$:
$$a_{n+2} = p + \frac{q}{p + \frac{q}{a_n}} = \frac{a_n(p^2 + q) + pq}{a_n p + q}$$
Then apply $a_{n+4}$:
$$a_{n+4} = \frac{a_{n+2}(p^2 + q) + pq}{a_{n+2} p + q} = a$$
- **[M1]** Sets up an equation for $a_{n+4}$ in terms of $a_n$, or with $a$ for both.
- **[A1]** Correct expression.

**Step 9: Multiply through to clear fractions**
Substitute $a_{n+2}$ into $a_{n+4} = a$:
$$a = \frac{\left(\frac{a(p^2+q)+pq}{ap+q}\right)(p^2+q) + pq}{\left(\frac{a(p^2+q)+pq}{ap+q}\right)p + q}$$
Multiply through by $(ap+q)$:
$$a\left(a(p^2+q)p + pq p + q(ap+q)\right) = a(p^2+q)^2 + pq(p^2+q) + pq(ap+q)$$
- **[M1]** Multiplies through to a single line equation.

**Step 10: Expand and factorise**
$$a^2 p(p^2+q) + ap^2 q + a^2 pq + aq^2 = a(p^2+q)^2 + pq(p^2+q) + ap^2 q + pq^2$$
Rearranging and factorising gives:
$$p(p^2 + 2q)(a^2 - ap - q) = 0$$
- **[M1]** Expands or otherwise and factorises to extract at least one of the order 1 and order 2 conditions from the equation.
- **[A1]** Correct equation with both factors extracted or cancelled.

**Step 11: Screen out lower order solutions**
$p = 0$ gives order 2 equation (from part (b)) and $a^2 - ap - q = 0$ gives order 1 equation (from part (a)), so we cannot have these.
- **[B1]** Explains why these two factors are not possible for order 4.

**Step 12: Deduce $q$ in terms of $p$**
Hence for period exactly 4, we need:
$$p^2 + 2q = 0 \Rightarrow q = -\frac{p^2}{2}$$
- **[A1]** Correct final equation $q = -\frac{p^2}{2}$.
- **[S1]** Award S1 for a fully correct solution that is succinct.

### **Examiner Report 7**

This question was found by far the most challenging question on the paper, with the algebraic skills required to successfully complete it beyond all except the very able students. Many students were unwilling to engage with a question they could not comprehend; timing did not seem to be an issue. This is unexpected as the first parts were relatively accessible if students were to take a calm and logical approach to disseminating the information given.

For those who made significant engagement with the question, part **(a)** was well-answered by the majority. Setting up the required equation was routine, though a few did not identify the same successive terms, and just gave an equation relating $a_{n+1}$ and $a_n$ or other subscripts one apart. But most showed a good understanding of the notation and what it meant for a sequence to be periodic, achieving the correct expression for part **(a)**.

This was usually then followed by a good go at part **(b)**, setting up a correct initial equation, though it was common to "cancel" the $p$, and so miss the solution, ending up with the same expression as from part **(a)** without realising it. Some students reasoned that $p = 0$ even if they had errors in their algebra, or from arguments about the general terms without setting up an equation, were able to access the B mark for this as long as they recognised it as the only solution. It is notable that a number of students set up more convoluted expressions than needed by equating the result of one iteration to the result of three iterations, before rearranging back to a more sensible form. Many were able to make some headway with simplifying but not all reach a single line equation equal to zero with common factor $p$ clearly indicated before concluding that $p = 0$ was the only solution, meaning M1A0B1 was common as a score. Only a small minority gave a full explanation as to why this was the only solution by referring to the other factor corresponding to the order 1 case.

Students seemed unsure about what was required in part **(c)**. A lack of good understanding from part **(b)** with separating the order 1 and order 2 case indicates they were not sure what they were distinguishing and many skipped over this part. However, some did explain they needed a sequence that was constant so not order 2, but not all went on to give one. A few listed a particular sequence, usually $1, 1, 1, \dots$ without an explanation or reason, while some stated $a^2 = q$ but did not know what to do with this and were unable to write down a possible value for $a$ and $q$. Few gave the sequence as a recurrence and starting term.

Part **(d)** proved very difficult for students with very little progress beyond the first 3 marks. Many made no attempt at all, particularly if they had struggled in the early parts. Many were able to write down a suitable continued fraction, but very few were able to simplify this accurately to a horizontal form and still less to a form which displayed all the factors of the expression.

The most successful attempts were to try attempting to repeat the given relation 4 times, commonly
$$a = p + \frac{q}{p + \frac{q}{p + \frac{q}{p + \frac{q}{a}}}}$$
though many simplified this in stages or used combination working on both sides. Some of the clearer attempts did see students realise they could apply the expression for $a_{n+2}$ twice to expedite the working. It was not uncommon to see one too few iterations, however, and such attempts could score at most one mark in **(d)**.

The result of the repeated iterations often resulted in a cumbersome fraction to manipulate but could gain the first two marks. Many gave up at this point and did not attempt to simplify the expression, while others persisted to reach a one line equation before giving in. Where students attempted to obtain a single line equation the challenging algebraic manipulation tended to result in algebraic errors being made at some stage. It was then not possible to make further progress. Only a handful of students reached a correct single line, and of those most were not able to identify the relevant factors or relate the factors to the different orders.

A few students picked up on the idea that order 1 and 2 sequences needed to be screened out, and some were able to identify and cancel the factor $p$ from **(b)**, but such responses were few and far between, with fully correct solutions very rare.
