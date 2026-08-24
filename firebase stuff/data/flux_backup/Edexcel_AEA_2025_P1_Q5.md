---
topic: "Quadratics"
subtopic: "Completing the square"
---

### Question 5

The discrete random variable $X$ has the probability distribution

|**n**|**2**|**4**|**6**|**8**|**10**|
|---|---|---|---|---|---|
|$\text{P}(X = n)$|$\frac{1}{10}\csc^2 x$|$a$|$\frac{1}{5}\cot^2 x$|$\frac{1}{10}\sec^2 x$|$\frac{1}{5}\tan^2 x$|

where $a$ and $x$ are constants.

**(a)** Show that

$$\sin^2 2x = \frac{6}{7 - 5a}$$

**(7)**

**(b)** Use the result from part (a) to find a restriction on the maximum possible value of $a$. **(2)**

The random variables $X_1$ and $X_2$ are independent and each have the same distribution as $X$.

Given that $$\text{P}(X_1 \times X_2 = 16) = a - \frac{1}{25}$$

**(c)** determine any possible values of $a$, justifying your answer. **(8)**

**(+S2)**

### Mark Scheme

#### **Part (a)**

**Step 1: Use sum of probabilities**

e.g. $$\frac{\csc^2 x}{10} + a + \frac{\cot^2 x}{5} + \frac{\sec^2 x}{10} + \frac{\tan^2 x}{5} = 1$$

- **[B1]** States or implies sum of probabilities is $1$.
    

**Step 2: Convert to sine and cosine**

$$\frac{1}{10\sin^2 x} + a + \frac{\cos^2 x}{5\sin^2 x} + \frac{1}{10\cos^2 x} + \frac{\sin^2 x}{5\cos^2 x} = 1$$

or e.g.

$$\csc^2 x + 10a + 2\csc^2 x - 2 + \sec^2 x + 2\sec^2 x - 2 = 10$$

- **[M1]** Uses trig identities to create an equation in two trig functions only. Condone the usual sign errors.
    

**Step 3: Combine terms**

$$\frac{\cos^2 x + 2\cos^4 x + \sin^2 x + 2\sin^4 x}{10\sin^2 x \cos^2 x} = 1 - a$$

or e.g.

$$\frac{\cos^2 x + \sin^2 x}{\sin^2 x \cos^2 x} = \frac{14 - 10a}{3}$$

- **[M1]** Combines the trig terms (which must now be $\sin x$ and $\cos x$) to a single fraction or multiplies through. May have also replaced $4\sin^2x \cos^2x$ with $\sin^2 2x$.
    

**Step 4: Use identities to simplify numerator**

$$1 + 2(\cos^2 x + \sin^2 x)(\cos^2 x - 2\sin^2 x \cos^2 x + \sin^2 x) = \frac{5}{2}(1 - a)\sin^2 2x$$

$$\Rightarrow 1 + 2(1 - 2\sin^2 x \cos^2 x) = \frac{5}{2}(1 - a)\sin^2 2x$$

or e.g.

$$\frac{1}{\sin^2 x \cos^2 x} = \frac{14 - 10a}{3}$$

- _Method Note:_ Replaces the quartic terms with quadratic terms using a valid method and replaces any $\sin^2x + \cos^2x$ with $1$ to achieve an equation in $\sin^2x\cos^2x$ only (or mixed $\sin^2x\cos^2x$ and $\sin^2 2x$). Note: $$\sin^4x + \cos^4x = (\sin^2x + \cos^2x)^2 - 2\sin^2x\cos^2x$$.
    

**Step 5: Convert to double angle**

$$1 + 2 - \sin^2 2x = \frac{5}{2}(1 - a)\sin^2 2x$$

- **[dM1]** Use double angle formula to get to an equation in $\sin^2 2x$ only. Dependent on the previous M mark.
    

**Step 6: Gather terms and factorize**

$6 = (2 + 5(1 - a))\sin^2 2x$

- **[M1]** Gathers the $\sin^2 2x$ (or the $\sin^2x\cos^2x$) terms on one side and factorises or e.g. $14 - 10a = \frac{12}{\sin^2 2x}$.
    

**Step 7: Final Result**

$$\Rightarrow \sin^2 2x = \frac{6}{7 - 5a} *$$

- __[A1_]_* Completes correctly. Condone occasional notational slips such as missing arguments.
    

#### **Part (b)**

**Step 8: Set up inequality**

$$\sin^2 2x \leqslant 1 \Rightarrow \text{e.g. } 6 \leqslant 7 - 5a$$

- **[M1]** Uses the maximum value of $\sin^2 2x$ to form an inequality/equation in $a$ which may come from e.g. max value of $a$ is when $\sin 2x = \pm 1$.
    

**Step 9: Solve inequality**

$$\Rightarrow (0 \leqslant) a \leqslant \frac{1}{5}$$

- **[A1]** Correct condition or maximum value for $a$. The lower limit is not required. Condone $a = 1/5$ but not $a < 1/5$. A0 if another interval given e.g. $a > 13/5$.
    

#### **Part (c)**

**Step 10: Identify combinations**

Possibilities for $X_1 \times X_2 = 16$ are $4^2$ or $2 \times 8$ or $8 \times 2$

- **[B1]** Correct possible ways to form $16$ identified or implied. Must include both ways round for $2 \times 8$ and $4^2$ only once.
    

**Step 11: Set up probability equation**

$$P(X_1 X_2 = 16) = a^2 + 2 \times \frac{1}{10}\csc^2 x \times \frac{1}{10}\sec^2 x$$

- **[M1]** Attempts the probability as the sum of $(P(X=4))^2$ and $2 \times P(X=2) \times P(X=8)$, but allow if the "$2\times$" is missing or if $(P(X=4))^2$ is doubled.
    

**Step 12: Simplify using double angle**

$$= a^2 + \frac{1}{50(\sin x \cos x)^2} = a^2 + \frac{2}{25\sin^2 2x}$$

- **[M1, A1]** Writes a probability in terms of $\sin^2 2x$ (or equivalent if working in reverse) so the $a^2$ may be missing; Correct expression for the **sum** of the probabilities which may be unsimplified.
    

**Step 13: Substitute expression for $\sin^2 2x$**

$$\Rightarrow a - \frac{1}{25} = a^2 + \frac{2(7 - 5a)}{25 \times 6}$$

- **[M1]** Uses the given probability and the given answer to part (a) to get an equation in $a$ only which may be missing the $a^2$.
    

**Step 14: Form quadratic**

$$\Rightarrow 75a^2 - 80a + 10 = 0 \text{ o.e.}$$

- **[A1]** Correct quadratic equation e.g. $15a^2 - 16a + 2 = 0$ ($=0$ may be implied).
    

**Step 15: Solve quadratic**

$$\Rightarrow a = \frac{16 \pm \sqrt{16^2 - 4 \times 15 \times 2}}{30} = \frac{8 \pm \sqrt{34}}{15}$$

- **[dddM1]** Correct attempt to solve their 3TQ using the formula or by completing the square. If their equation will factorise, allow factorisation to be used. Their 3TQ must have real solutions. Dependent on all previous method marks.
    

**Step 16: Select valid root**

$$a \leqslant \frac{1}{5} \text{ so } \Rightarrow a = \frac{8 - \sqrt{34}}{15} \text{ only}$$

- **[A1]** Requires (minimal) justification for final mark (S+ for good reasoning). Condone occasional notational slips such as missing arguments or invisible brackets which are recovered.
    

**Step 17: Additional check (S+)**

Also $a - \frac{1}{25} > 0$ as $$a = \frac{8 - \sqrt{34}}{15} > \frac{8 - 6}{15} = \frac{2}{15}$$

- **[S+]** See notes below for specific S+ conditions.
    

#### **Special Marks (S1 / S2)**

- **[S2]** Award S2 for a fully correct solution that is succinct and includes at least one S+ point (see notes below).
    
- **[S1]** Award S1 for:
    
    - a fully correct solution that is succinct but does not mention any S+ points
        
    - a fully correct solution that may be laboured but includes an S+ point
        
    - a succinct solution that scores 15+ marks that includes one S+ point.
        

> **S+ Notes for good reasoning:**
> 
> - **Rejecting larger root:** e.g., $$\frac{8 + \sqrt{34}}{15} > \frac{8}{15} \left(\text{or } \frac{13}{15}\right) > \frac{1}{5}$$ shown.
>     
> - **Accepting smaller root:** e.g. $$\frac{8 - \sqrt{34}}{15} < \frac{8 - 5}{15} = \frac{3}{15} = \frac{1}{5}$$ or e.g. $$\frac{8 - \sqrt{34}}{15} > \frac{8 - 6}{15} = \frac{2}{15} > \frac{1}{25}$$ so $a - \frac{1}{25} > 0$ (or $\geqslant 0$) hence valid.
>     
> 
> **General Notes:**
> 
> - Condone use of $\sin^2 2x = 2\sin^2x\cos^2x$ and trig identities with sign errors for the M marks only.
>     
> - Condone the use of e.g. $s^2x$ or $s^2$ for all intermediate marks, provided $s^22x$ is clearly identified as different. For the final mark of part (a) they must write it in the form given.
>     
> - If they do not sum the probabilities in part (c), they score maximum B1M0M1A0M1A0dddM0A0.
>