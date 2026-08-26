### **Question 1**

Find

$$\int \frac{x^{\frac{1}{2}}(2x - 5)}{3} \, \mathrm{d}x$$

writing each term in simplest form. **(4)**

**(Total for Question 1 is 4 marks)**

### **Mark Scheme 1**

**Step 1: Expand the numerator and express as separate terms with fractional indices**

$$\frac{x^{\frac{1}{2}}(2x - 5)}{3} = \frac{2x^{\frac{3}{2}} - 5x^{\frac{1}{2}}}{3} = \frac{2}{3}x^{\frac{3}{2}} - \frac{5}{3}x^{\frac{1}{2}}$$

- **[M1]** Attempts to multiply out the brackets of the numerator and either writes the expression (or just the numerator) as a sum of terms with indices. Award for either one correct index of $\dots x^{\frac{3}{2}} + \dots x^{\frac{1}{2}}$.
- **[A1]** $\frac{2}{3}x^{\frac{3}{2}} - \frac{5}{3}x^{\frac{1}{2}}$ or equivalent e.g. $\frac{1}{3}\left(2x^{\frac{3}{2}} - 5x^{\frac{1}{2}}\right)$.

**Step 2: Integrate term by term**

$$\int \left(\frac{2}{3}x^{\frac{3}{2}} - \frac{5}{3}x^{\frac{1}{2}}\right) \mathrm{d}x = \frac{2}{3} \cdot \frac{x^{\frac{5}{2}}}{\frac{5}{2}} - \frac{5}{3} \cdot \frac{x^{\frac{3}{2}}}{\frac{3}{2}} + c = \frac{4}{15}x^{\frac{5}{2}} - \frac{10}{9}x^{\frac{3}{2}} + c$$

- **[dM1]** Increases the power by one on an $x^n$ term where $n$ is a fraction. Dependent on the previous method mark.
- **[A1]** $\frac{4}{15}x^{\frac{5}{2}} - \frac{10}{9}x^{\frac{3}{2}} + c$ and including the constant or simplified exact equivalent.

### **Examiner Report 1**

This was an accessible question for virtually all candidates. The fractional index had already been given to avoid any misconceptions. However, for the first question on the exam paper, this was frequently done poorly compared to previous years. Candidates may have anticipated a tougher start to the paper and wanted to demonstrate one of the more advanced integration techniques.

Candidates who spotted that you needed to expand the brackets usually went on to score full marks. The most common reason for losing the final answer mark was forgetting the constant of integration.

Many candidates failed to notice the simpler method in the main mark scheme and instead attempted to use integration by parts, with either part taken as $u$. If a candidate chose to set $u = 2x - 5$, they did not always expand the brackets in their integration formula to achieve a form which was ready to integrate where the indices had been combined correctly. Candidates who set $u = x^{\frac{1}{2}}$ were more successful, as there was less working to do to allow access to the marks. Candidates who chose to do integration by parts did not always combine the terms in their answer, losing the final mark. Many candidates would divide both their $u$ and $v'$ by 3, leading to final answers that were $\frac{1}{3}$ as large as they should have been.

Integration by substitution was occasionally seen, but rarely successfully completed. Most attempts involved setting $u = 2x - 5$, and this resulted in a tougher integral that required further work; candidates rarely progressed to a point which would have been worthy of a mark.

Across the various methods, a common error seen was initially to factorise out the $\frac{1}{3}$, work through the solution without it, but then to forget to reintroduce it. This error meant that neither of the two accuracy marks were available.

---
topic: "Algebraic Methods"
subtopic: "The factor theorem"
---
### **Question 2**

In this question you must show all stages of your working.

Solutions relying entirely on calculator technology are not acceptable.

$$\mathrm{f}(x) = 4x^3 + 5x^2 - 10x + 4a \quad x \in \mathbb{R}$$

where $a$ is a positive constant.

Given $(x - a)$ is a factor of $\mathrm{f}(x)$,

**(a)** show that

$$a(4a^2 + 5a - 6) = 0$$ **(2)**

**(b)** Hence

**(i)** find the value of $a$

**(ii)** use algebra to find the exact solutions of the equation

$$\mathrm{f}(x) = 3$$ **(4)**

**(Total for Question 2 is 6 marks)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Apply the factor theorem $\mathrm{f}(a) = 0$**

$$\mathrm{f}(a) = 4a^3 + 5a^2 - 10a + 4a = 0$$

$$4a^3 + 5a^2 - 6a = 0$$

- **[M1]** Attempts $\mathrm{f}(a) = 0$ leading to an equation in $a$ only and attempts to take a factor of $a$ out.

**Step 2: Factorise out $a$ to reach the given expression**

$$a(4a^2 + 5a - 6) = 0$$

- **[A1*]** Achieves the given answer with no errors including brackets.

#### **Part (b)**

**Step 3: Solve $a(4a^2 + 5a - 6) = 0$ to find the value of $a$**

$$a(4a - 3)(a + 2) = 0 \Rightarrow a = 0, \quad a = \frac{3}{4}, \quad a = -2$$

Since $a$ is a positive constant, $a = \frac{3}{4}$.

- **[B1]** Deduces that $a = \frac{3}{4}$ only.

**Step 4: Substitute $a = \frac{3}{4}$ into $\mathrm{f}(x) = 3$**

$$4x^3 + 5x^2 - 10x + 4\left(\frac{3}{4}\right) = 3$$

$$4x^3 + 5x^2 - 10x + 3 = 3 \Rightarrow 4x^3 + 5x^2 - 10x = 0$$

- **[M1]** Attempts to substitute their $a = \frac{3}{4}$ (which must be positive) into $\mathrm{f}(x)$, sets $\mathrm{f}(x) = 3$ and collects terms on one side.

**Step 5: Identify the root $x = 0$**

$$x(4x^2 + 5x - 10) = 0 \Rightarrow x = 0$$

- **[B1]** Identifies $x = 0$.

**Step 6: Solve the quadratic factor using the quadratic formula**

$$4x^2 + 5x - 10 = 0 \Rightarrow x = \frac{-5 \pm \sqrt{5^2 - 4(4)(-10)}}{2(4)} = \frac{-5 \pm \sqrt{185}}{8}$$

- **[A1]** $x = \frac{-5 \pm \sqrt{185}}{8}$ (and these values only) or exact equivalent.

### **Examiner Report 2**

This question was accessible and generally well answered, with a large number of candidates gaining full marks with concise solutions. Some, however, did not pay heed to the instruction to show all stages of their working.

The vast majority of candidates correctly identified that part (a) related to an application of the factor theorem, substituted in $a$ and were able to reach the required result. However, many lost marks for not including "$= 0$" until the final line. In a small number of cases, "$= 0$" was omitted completely and, in these cases, candidates were awarded no marks. Amongst the unsuccessful candidates, the majority had attempted algebraic long division using $(x - a)$ or carried out an attempt at factorisation via inspection, but had often abandoned their attempts, presumably unsure of how this would lead to the required result.

In part (b)(i), most candidates had no problems solving the cubic, getting the values $0$, $\frac{3}{4}$ and $-2$ for $a$. However, many did not take note of the fact that $a$ was positive, and that the question asked for the value of $a$, so lost the mark for not rejecting $a = 0$ and $a = -2$.

Part (b)(ii) was well done by those who showed every step of their working, but some failed to reject the values of $a$ that were not needed.

Once the cubic was obtained by substituting $a = \frac{3}{4}$ and setting $\mathrm{f}(x) = 3$, those who solved the cubic without factorising to $x(4x^2 + 5x - 10)$ lost the final A mark. Candidates were asked to show all stages of their working and not proceeding as far as the quadratic factor was penalised. Many gave the exact solutions followed by rounded decimal solutions, or even just the decimal solutions, so were not paying heed to the question asking for exact solutions.

The solution $x = 0$ was omitted by many candidates due to division by $x$ instead of using factorisation.

---
topic: "Vectors"
subtopic: "Magnitude and direction"
---
### **Question 3**

Relative to a fixed origin $O$

- the point $A$ has position vector $5\mathbf{i} + 3\mathbf{j} + 2\mathbf{k}$
- the point $B$ has position vector $2\mathbf{i} + 4\mathbf{j} + a\mathbf{k}$

where $a$ is a positive integer.

**(a)** Show that $|\overrightarrow{OA}| = \sqrt{38}$ **(1)**

**(b)** Find the smallest value of $a$ for which

$$|\overrightarrow{OB}| > |\overrightarrow{OA}|$$ **(2)**

**(Total for Question 3 is 3 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Calculate the magnitude of $\overrightarrow{OA}$**

$$|\overrightarrow{OA}| = \sqrt{5^2 + 3^2 + 2^2} = \sqrt{25 + 9 + 4} = \sqrt{38}$$

- **[B1*]** Shows the magnitude of $\overrightarrow{OA}$ is $\sqrt{38}$. Must see $\sqrt{5^2 + 3^2 + 2^2}$ or e.g. $\sqrt{25 + 9 + 4}$.

#### **Part (b)**

**Step 2: Express $|\overrightarrow{OB}|$ in terms of $a$ and set up the inequality**

$$|\overrightarrow{OB}| = \sqrt{2^2 + 4^2 + a^2} = \sqrt{20 + a^2}$$

$$\sqrt{20 + a^2} > \sqrt{38} \Rightarrow 20 + a^2 > 38 \Rightarrow a^2 > 18$$

- **[M1]** Attempts to find $|\overrightarrow{OB}|$ (or $|\overrightarrow{OB}|^2$) in terms of $a$ and sets up an inequality/equation to solve for $a$.

**Step 3: State the smallest positive integer $a$**

Since $a$ is a positive integer and $a > \sqrt{18} \approx 4.24$, the smallest value is $a = 5$.

- **[A1]** $a = 5$ cso.

### **Examiner Report 3**

This was another short question on two-dimensional vectors with many candidates able to score 2 out of the 3 marks.

Part (a) was generally answered accurately by all candidates. Sometimes the mark was lost because the candidate omitted the square root and wrote $|\overrightarrow{OA}| = 25 + 9 + 4$.

In part (b), the most common approach was to proceed to $a^2 > 18$ or $a^2 = 18$, and the majority of candidates were able to achieve this. However, a significant number of candidates did not conclude that $a = 5$, with some claiming that e.g. $\sqrt{18}$ is an integer or missing the requirement that "$a$" had to be an integer. Some other incorrect answers included $a = \sqrt{19}$ following $a > \sqrt{18}$ and the answer $a \ge 5$ was not condoned. A common processing error was the simplification of $\sqrt{20 + a^2}$ to $\sqrt{20} + a$.

---
topic: "Radians"
subtopic: "Small angle approximations"
---
### **Question 4**

In this question you must show all stages of your working.

Solutions relying entirely on calculator technology are not acceptable.

The curve $C$ has equation $y = \mathrm{f}(x)$ where $x \in \mathbb{R}$

Given that

- $\mathrm{f}'(x) = 2x + \frac{1}{2}\cos x$
- the curve has a stationary point with $x$ coordinate $\alpha$
- $\alpha$ is small

**(a)** use the small angle approximation for $\cos x$ to estimate the value of $\alpha$ to 3 decimal places. **(3)**

The point $P(0, 3)$ lies on $C$

**(b)** Find the equation of the tangent to the curve at $P$, giving your answer in the form $y = mx + c$, where $m$ and $c$ are constants to be found. **(2)**

**(Total for Question 4 is 5 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Substitute the small angle approximation $\cos x \approx 1 - \frac{x^2}{2}$ into $\mathrm{f}'(\alpha) = 0$**

$$\mathrm{f}'(\alpha) = 2\alpha + \frac{1}{2}\left(1 - \frac{\alpha^2}{2}\right) = 0$$

- **[M1]** Fully substitutes $\cos x = 1 - \frac{x^2}{2}$ into the derivative.

**Step 2: Form and solve a 3-term quadratic equation for $\alpha$**

$$2\alpha + \frac{1}{2} - \frac{\alpha^2}{4} = 0 \Rightarrow 8\alpha + 2 - \alpha^2 = 0 \Rightarrow \alpha^2 - 8\alpha - 2 = 0$$

$$\alpha = \frac{8 \pm \sqrt{(-8)^2 - 4(1)(-2)}}{2} = \frac{8 \pm \sqrt{72}}{2} = 4 \pm 3\sqrt{2}$$

- **[dM1]** Attempts to multiply out to achieve a 3TQ ($= 0$) and attempts to find a value for $\alpha$.

**Step 3: Select the small root**

$$\alpha = 4 - 3\sqrt{2} \approx -0.24264\dots \Rightarrow \alpha = -0.243 \text{ (3dp)}$$

- **[A1]** $\alpha = -0.243$ (3dp) only.

#### **Part (b)**

**Step 4: Find the gradient of the curve at $x = 0$**

$$\mathrm{f}'(0) = 2(0) + \frac{1}{2}\cos 0 = \frac{1}{2}(1) = \frac{1}{2}$$

- **[M1]** Attempts to find the gradient of the curve when $x = 0$ and achieves an equation of the form $y = \mathrm{f}'(0)x + 3$.

**Step 5: Write the equation of the tangent**

Using $m = \frac{1}{2}$ and $P(0, 3)$:

$$y = \frac{1}{2}x + 3$$

- **[A1]** $y = \frac{1}{2}x + 3$ or equivalent in the form $y = mx + c$.

### **Examiner Report 4**

This question testing the small angle approximation for cosine and finding the equation of a straight line was accessible to many candidates with a large number scoring full marks.

In part (a), some candidates formed and solved the equation but were not able to use the information that $x$ was small to choose the correct solution. There was a very small minority of candidates who did not quote the correct small angle approximation, despite this being in the formula book. A slightly larger minority misunderstood that $x$ being small meant that $x$ was 0 and therefore did not include the $2x$ term in their solution attempt.

Part (b) was mostly well answered with the majority scoring both marks. Most candidates found the gradient of the tangent by substituting $x = 0$ into the given derivative of $\mathrm{f}(x)$. Some candidates tried to substitute their answer from part (a) into the given derivative or found the gradient of the normal having originally found the correct gradient for the tangent; these approaches lost both marks.

---
topic: "Integration"
subtopic: "The trapezium rule"
---
### **Question 5**

A continuous curve has equation $y = \mathrm{f}(x)$.

The table shows corresponding values of $x$ and $y$ for this curve, where $a$ and $b$ are constants.

| $x$ | $3$ | $3.2$ | $3.4$ | $3.6$ | $3.8$ | $4$ |
|---|---|---|---|---|---|---|
| $y$ | $a$ | $16.8$ | $b$ | $20.2$ | $18.7$ | $13.5$ |

The trapezium rule is used, with all the $y$ values in the table, to find an approximate area under the curve between $x = 3$ and $x = 4$

Given that this area is $17.59$

**(a)** show that $a + 2b = 51$ **(3)**

Given also that the sum of all the $y$ values in the table is $97.2$

**(b)** find the value of $a$ and the value of $b$ **(3)**

**(Total for Question 5 is 6 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: State the strip width $h$**

$$h = \frac{4 - 3}{5} = 0.2$$

- **[B1]** States or uses $h = 0.2$ o.e.

**Step 2: Apply the trapezium rule formula**

$$\text{Area} \approx \frac{1}{2} \times 0.2 \times \left\{ a + 13.5 + 2(16.8 + b + 20.2 + 18.7) \right\} = 17.59$$

- **[M1]** Forms the equation $\frac{1}{2} \times 0.2 \times \{a + 13.5 + 2(16.8 + b + 20.2 + 18.7)\} = 17.59$ o.e.

**Step 3: Simplify to show $a + 2b = 51$**

$$0.1 \times (a + 2b + 111.4) = 17.59$$

$$a + 2b + 111.4 = 175.9 \Rightarrow a + 2b = 51$$

- **[A1*]** A rigorous argument leading to $a + 2b = 51$ from correct working and no errors seen including brackets.

#### **Part (b)**

**Step 4: Form an equation from the sum of all $y$ values**

$$a + 16.8 + b + 20.2 + 18.7 + 13.5 = 97.2$$

$$a + b + 69.2 = 97.2 \Rightarrow a + b = 28$$

- **[M1]** Attempts to form the equation $a + 16.8 + b + 20.2 + 18.7 + 13.5 = 97.2$ and attempts to solve simultaneously with $a + 2b = 51$.

**Step 5: Solve the simultaneous equations**

$$(a + 2b) - (a + b) = 51 - 28 \Rightarrow b = 23$$

$$a = 28 - 23 = 5$$

- **[A1]** for $a = 5$ or $b = 23$.
- **[A1]** for both $a = 5$ and $b = 23$.

### **Examiner Report 5**

This was a lovely twist on a usually very standard question using the trapezium rule that was overall very well-answered.

Candidates usually scored full marks in part (a). Where marks were lost the most common error was working out "$h$", the width of each strip, as $\frac{4-3}{6} = \frac{1}{6}$ where 6 was the number of ordinates given, rather than $\frac{4-3}{5} = \frac{1}{5}$, where 5 was the number of strips required. Very few candidates failed to give "$h$" a value. The brackets were dealt with correctly in most cases.

Part (b) was dealt with very well overall, with a variety of different methods used to solve the equations simultaneously, usually via the use of a calculator. Furthermore, it was pleasing to see candidates who made no attempt at (a) still proceeded to use the given answer to attempt and generally gain full marks in (b).

---
topic: "Exponentials and Logarithms"
subtopic: "Laws of logarithms"
---
### **Question 6**

$$a = \log_2 x, \quad b = \log_2 (x + 8)$$

Express in terms of $a$ and/or $b$

**(a)** $\log_2 \sqrt{x}$ **(1)**

**(b)** $\log_2 (x^2 + 8x)$ **(2)**

**(c)** $\log_2 \left(8 + \frac{64}{x}\right)$

Give your answer in simplest form. **(3)**

**(Total for Question 6 is 6 marks)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Apply the power law of logarithms**

$$\log_2 \sqrt{x} = \log_2 (x^{\frac{1}{2}}) = \frac{1}{2}\log_2 x = \frac{1}{2}a$$

- **[B1]** $\frac{1}{2}a$ or $\frac{a}{2}$ or $0.5a$.

#### **Part (b)**

**Step 2: Factorise the argument and apply the addition law of logarithms**

$$\log_2 (x^2 + 8x) = \log_2 [x(x + 8)] = \log_2 x + \log_2 (x + 8)$$

- **[M1]** Takes a factor of $x$ out of the bracket to achieve $\log_2 x(x + 8)$ and attempts to apply the addition law of logs.

**Step 3: Substitute $a$ and $b$**

$$= a + b$$

- **[A1]** $a + b$ or simplified equivalent.

#### **Part (c)**

**Step 4: Combine the terms inside the logarithm as a single fraction**

$$8 + \frac{64}{x} = \frac{8x + 64}{x} = \frac{8(x + 8)}{x}$$

- **[B1]** Writes $8 + \frac{64}{x}$ as a single fraction e.g. $\frac{8x + 64}{x}$ or $\frac{8(x + 8)}{x}$.

**Step 5: Apply logarithm laws**

$$\log_2 \left(\frac{8(x + 8)}{x}\right) = \log_2 8 + \log_2 (x + 8) - \log_2 x$$

Since $\log_2 8 = 3$:

$$= 3 + b - a$$

- **[M1]** Attempts to apply the laws of logs, uses $\log_2 8 = 3$ and proceeds to $3 \pm \log_2 x \pm \log_2 (x + 8)$.
- **[A1]** $3 + b - a$ or simplified equivalent.

### **Examiner Report 6**

This topic continues to be one which candidates struggle with in all parts. It was not uncommon to see candidates attempting to use rules of indices rather than logarithms, starting off with $2^a = x$, $2^b = x + 8$.

Part (a) was a B mark for achieving the correct answer. Several candidates got as far as $0.5\log_2 x$ without substituting $a$ into this and so gained no credit.

Part (b) surprisingly seemed to have more success. It was generally answered well with most candidates realising that factorising the argument of the logarithm was needed before applying the addition law of logarithms. The main misconception was the sight of $\log_2 x^2 + \log_2 8x$ which was awarded no marks.

Part (c) was the most challenging part of this question. For those who attempted with less success there were some rather dubious attempts at writing $8 + \frac{64}{x}$ as a single fraction. Of those who managed this correctly and progressed to applying the laws of logarithms, quite a few left in $\log_2 8$ rather than simplifying to its value of 3.

---
topic: "Functions and Graphs"
subtopic: "Inverse functions"
---
### **Question 7**

The function $\mathrm{f}$ is defined by

$$\mathrm{f}(x) = 3 + \sqrt{x - 2} \quad x \in \mathbb{R}, \quad x > 2$$

**(a)** State the range of $\mathrm{f}$ **(1)**

**(b)** Find $\mathrm{f}^{-1}$ **(3)**

The function $\mathrm{g}$ is defined by

$$\mathrm{g}(x) = \frac{15}{x - 3} \quad x \in \mathbb{R}, \quad x \neq 3$$

**(c)** Find $\mathrm{gf}(6)$ **(2)**

**(d)** Find the exact value of the constant $a$ for which

$$\mathrm{f}(a^2 + 2) = \mathrm{g}(a)$$ **(2)**

**(Total for Question 7 is 8 marks)**

### **Mark Scheme 7**

#### **Part (a)**

**Step 1: Determine the range of $\mathrm{f}$**

Since $x > 2$, $\sqrt{x - 2} > 0$, so $3 + \sqrt{x - 2} > 3$.

Range: $\mathrm{f}(x) > 3$.

- **[B1]** $\mathrm{f}(x) > 3$ o.e.

#### **Part (b)**

**Step 2: Rearrange to make $x$ the subject**

Let $y = 3 + \sqrt{x - 2}$

$$y - 3 = \sqrt{x - 2} \Rightarrow (y - 3)^2 = x - 2 \Rightarrow x = (y - 3)^2 + 2$$

- **[M1]** Sets $y = 3 + \sqrt{x - 2}$ and attempts to make $x$ the subject.

**Step 3: Write the inverse function**

$$\mathrm{f}^{-1}(x) = (x - 3)^2 + 2$$

- **[A1]** $\mathrm{f}^{-1}(x) = (x - 3)^2 + 2$.

**Step 4: State the domain of $\mathrm{f}^{-1}$**

Domain of $\mathrm{f}^{-1}$ is the range of $\mathrm{f}$: $x > 3$.

- **[B1ft]** $x > 3$ or follow through on their part (a).

#### **Part (c)**

**Step 5: Evaluate $\mathrm{f}(6)$ and then $\mathrm{g}(\mathrm{f}(6))$**

$$\mathrm{f}(6) = 3 + \sqrt{6 - 2} = 3 + \sqrt{4} = 3 + 2 = 5$$

$$\mathrm{gf}(6) = \mathrm{g}(5) = \frac{15}{5 - 3} = \frac{15}{2}$$

- **[M1]** Substitutes $x = 6$ into $\mathrm{f}$ and substitutes the result into $\mathrm{g}$ to find a value for $\mathrm{gf}(6)$.
- **[A1]** $\frac{15}{2}$ only oe.

#### **Part (d)**

**Step 6: Form the equation $\mathrm{f}(a^2 + 2) = \mathrm{g}(a)$**

$$\mathrm{f}(a^2 + 2) = 3 + \sqrt{(a^2 + 2) - 2} = 3 + \sqrt{a^2} = 3 + a$$

$$\mathrm{g}(a) = \frac{15}{a - 3}$$

$$3 + a = \frac{15}{a - 3} \Rightarrow (a + 3)(a - 3) = 15 \Rightarrow a^2 - 9 = 15 \Rightarrow a^2 = 24$$

- **[M1]** Attempts to form $3 + \sqrt{a^2 + 2 - 2} = \frac{15}{a - 3}$ and proceeds to a quadratic in $a$.

**Step 7: Solve for $a$**

$$a = \sqrt{24} = 2\sqrt{6} \quad (\text{rejecting } a = -2\sqrt{6})$$

- **[A1]** $a = 2\sqrt{6}$ or accept $\sqrt{24}$ (must reject negative solution).

### **Examiner Report 7**

Overall, this was an accessible question on functions. Part (c) had the lowest number of errors out of the entire question and was one of the most successfully answered parts over the entire paper.

In part (a), a large majority of candidates were able to score the B mark available.

In part (b), candidates correctly rearranged the formula and interchanged $x$ and $y$ successfully. A common error costing candidates the B mark was failing to record the domain of the inverse function. This mark was rarely scored across the entire cohort.

Part (c) was well attempted by many candidates. Finding $\mathrm{f}(6)$ first and then substituting this result into $\mathrm{g}$ was more common than substituting $x = 6$ into the composite function $\mathrm{gf}(x)$.

A large number of candidates scored the first mark in part (d) as they correctly formed the equation $(a - 3)(3 + a) = 15$ and proceeded to a quadratic in $a$. Some candidates that found $a = \pm 2\sqrt{6}$ did not reject the negative solution, losing the last A mark.

---
topic: "Radians"
subtopic: "Arc length"
---
### **Question 8**

**Figure 1** _(Plan view of a stage showing two congruent triangles ABO and GFO joined to a circular sector OCDEO, with arc CDE = 27.6 m, angle COE = 2.3 rad, and straight line AOG = 15 m)._

Figure 1 shows the plan view of a stage.

The plan view shows two congruent triangles $ABO$ and $GFO$ joined to a sector $OCDEO$ of a circle, centre $O$, where

- angle $COE = 2.3 \text{ radians}$
- arc length $CDE = 27.6 \text{ m}$
- $AOG$ is a straight line of length $15 \text{ m}$

**(a)** Show that $OC = 12 \text{ m}$. **(2)**

**(b)** Show that the size of angle $AOB$ is $0.421 \text{ radians}$ correct to 3 decimal places. **(2)**

Given that the total length of the front of the stage, $BCDEF$, is $35 \text{ m}$,

**(c)** find the total area of the stage, giving your answer to the nearest square metre. **(6)**

**(Total for Question 8 is 10 marks)**

### **Mark Scheme 8**

#### **Part (a)**

**Step 1: Use the arc length formula $l = r\theta$**

$$l = OC \times \theta \Rightarrow 27.6 = OC \times 2.3$$

- **[M1]** Uses $l = r\theta$ with $l = 27.6$ and $\theta = 2.3$ correctly substituted in.

**Step 2: Solve for $OC$**

$$OC = \frac{27.6}{2.3} = 12 \text{ m}$$

- **[A1*]** Achieves an expression for $OC$ before proceeding to $OC = 12 \text{ (m)}$ with no errors seen.

#### **Part (b)**

**Step 3: Use the angle sum on the straight line $AOG$**

Since $AOG$ is a straight line, the angles at $O$ sum to $\pi$ radians.
Triangles $ABO$ and $GFO$ are congruent, so $\text{angle } AOB = \text{angle } FOG$.

$$2 \times \text{angle } AOB + 2.3 = \pi \Rightarrow \text{angle } AOB = \frac{\pi - 2.3}{2}$$

- **[M1]** Attempts to subtract 2.3 from $\pi$.

**Step 4: Calculate angle $AOB$**

$$\text{angle } AOB = \frac{3.14159\dots - 2.3}{2} = \frac{0.84159\dots}{2} = 0.42079\dots \approx 0.421 \text{ rad}$$

- **[A1*]** Achieves $0.421 \text{ (rad)}$ with no errors seen.

#### **Part (c)**

**Step 5: Calculate the area of sector $OCDEO$**

$$\text{Area of sector} = \frac{1}{2} r^2 \theta = \frac{1}{2} \times 12^2 \times 2.3 = 165.6 \text{ m}^2$$

- **[M1]** Attempts to use $A = \frac{1}{2}r^2\theta$ with $r = 12$ and $\theta = 2.3$.
- **[A1]** $165.6 \text{ (m}^2\text{)}$ (accept awrt 166).

**Step 6: Find the length $OB$**

Total front length $BCDEF = 35 \text{ m}$.
Since arc $CDE = 27.6 \text{ m}$ and $BC = EF$ (by congruence):

$$BC = \frac{35 - 27.6}{2} = \frac{7.4}{2} = 3.7 \text{ m}$$

$$OB = OC + BC = 12 + 3.7 = 15.7 \text{ m}$$

- **[B1]** $(OB =) \frac{35 - 27.6}{2} + 12 = 15.7 \text{ m}$.

**Step 7: Calculate the area of triangle $AOB$**

Since $AOG = 15 \text{ m}$ and $O$ is the midpoint, $OA = 7.5 \text{ m}$.

$$\text{Area of } \triangle AOB = \frac{1}{2} \times OA \times OB \times \sin(\text{angle } AOB) = \frac{1}{2} \times 7.5 \times 15.7 \times \sin(0.421) \approx 24.037 \text{ m}^2$$

- **[M1]** Attempts to find the area of at least one of the two congruent triangles using $OB = 15.7$, $OA = 7.5$ and $\theta = 0.421$ in $\frac{1}{2} \times OA \times OB \times \sin C$.

**Step 8: Combine the areas for the total area**

$$\text{Total Area} = \text{Area of sector } OCDEO + 2 \times \text{Area of } \triangle AOB$$

$$\text{Total Area} = 165.6 + 2 \times 24.037\dots = 213.674\dots \text{ m}^2$$

- **[dM1]** Solves the problem by combining appropriate areas together which result in the total area of the stage.

**Step 9: Round to the nearest square metre**

$$\text{Total Area} \approx 214 \text{ m}^2$$

- **[A1]** awrt $214 \text{ (m}^2\text{)}$.

### **Examiner Report 8**

Generally most candidates found this question accessible, working confidently in radians throughout.

In part (a) a rigorous solution was expected; a very large number of candidates lost the second mark by failing to explicitly show the process of dividing the arc length by the angle. Candidates need to appreciate that every step of working needs to be clearly demonstrated in order to gain full marks for "show that" questions.

Part (b) was typically answered well, with many candidates recognising the straight line giving a total of $\pi$ radians.

There was a wide range of marks for part (c), although many candidates produced highly competent solutions. Most candidates were familiar with the area of a sector formula and the area of a triangle formula. The most common error was using 12 as opposed to 15.7 for $OB$.

---
topic: "Sequences and Series"
subtopic: "Geometric series"
---
### **Question 9**

The first three terms of a geometric sequence are

$$3k + 4, \quad 12 - 3k, \quad k + 16$$

where $k$ is a constant.

**(a)** Show that $k$ satisfies the equation

$$3k^2 - 62k + 40 = 0$$ **(2)**

Given that the sequence converges,

**(b)** **(i)** find the value of $k$, giving a reason for your answer,

**(ii)** find the value of $S_\infty$ **(5)**

**(Total for Question 9 is 7 marks)**

### **Mark Scheme 9**

#### **Part (a)**

**Step 1: Set up the common ratio equation**

$$r = \frac{12 - 3k}{3k + 4} = \frac{k + 16}{12 - 3k}$$

- **[M1]** Forms a correct equation linking the three terms.

**Step 2: Cross-multiply and simplify to the given quadratic**

$$(12 - 3k)^2 = (3k + 4)(k + 16)$$

$$144 - 72k + 9k^2 = 3k^2 + 52k + 64$$

$$6k^2 - 124k + 80 = 0 \Rightarrow 3k^2 - 62k + 40 = 0$$

- **[A1*]** Achieves the given quadratic with no errors including invisible brackets.

#### **Part (b)**

**Step 3: Solve $3k^2 - 62k + 40 = 0$**

$$(3k - 2)(k - 20) = 0 \Rightarrow k = \frac{2}{3} \quad \text{or} \quad k = 20$$

- **[M1]** Attempts to solve the given quadratic achieving at least one value for $k$.

**Step 4: Check convergence condition $|r| < 1$**

For $k = 20$:

$$a = 3(20) + 4 = 64$$

$$12 - 3(20) = -48 \Rightarrow r = \frac{-48}{64} = -\frac{3}{4}$$

Since $|r| = \left|-\frac{3}{4}\right| = 0.75 < 1$, the sequence converges.

(For $k = \frac{2}{3}$, $a = 6$, $12 - 3(\frac{2}{3}) = 10 \Rightarrow r = \frac{10}{6} = \frac{5}{3} > 1$, so it diverges.)

- **[A1]** States $k = 20$ and gives a reason e.g. that this gives a value of $r$ such that $|r| < 1$.

**Step 5: Identify $a$ and $r$ for $k = 20$**

$$a = 64, \quad r = -\frac{3}{4}$$

- **[B1]** $a = 64$ and $r = -\frac{3}{4}$.

**Step 6: Calculate $S_\infty$**

$$S_\infty = \frac{a}{1 - r} = \frac{64}{1 - \left(-\frac{3}{4}\right)} = \frac{64}{\frac{7}{4}} = \frac{256}{7}$$

- **[M1]** A full attempt to find $S_\infty$ by using their value of $k$ to reach a value for $r$ such that $|r| < 1$ and a value for $a$.
- **[A1]** $S_\infty = \frac{256}{7}$ cao.

### **Examiner Report 9**

This was a more demanding than expected question on geometric sequences with a number of candidates getting confused with the value of $k$ and the subsequent values of $a$ and $r$ required for the question.

Most candidates were able to score full marks in part (a) by correctly giving an equation in $k$. A noticeable number of candidates failed to gain the final mark as they gave a $-40$ term in their quadratic.

In part (b)(i) the majority of candidates were able to correctly solve the quadratic reaching $k = 20$ and $k = \frac{2}{3}$. However, many found giving a reason particularly challenging. A significant number chose $k = 20$ giving a reason "because the sequence is convergent" which they had already been told and did not demonstrate an understanding of what the term means.

Part (b)(ii) proved to be very challenging for many candidates. It was quite often the case that candidates tried to use $r = \frac{2}{3}$ and just found $a = 6$. It was very frequent that those who had correctly identified $k = 20$ in part (b)(i) did not show their working to find $a$ and $r$.

---
topic: "Circles"
subtopic: "Intersections of straight lines and circles"
---
### **Question 10**

A circle $C$ has equation

$$x^2 + y^2 + 6kx - 2ky + 7 = 0$$

where $k$ is a constant.

**(a)** Find in terms of $k$,

**(i)** the coordinates of the centre of $C$

**(ii)** the radius of $C$ **(3)**

The line with equation $y = 2x - 1$ intersects $C$ at 2 distinct points.

**(b)** Find the range of possible values of $k$. **(6)**

**(Total for Question 10 is 9 marks)**

### **Mark Scheme 10**

#### **Part (a)**

**Step 1: State the coordinates of the centre**

Completing the square: $(x + 3k)^2 - 9k^2 + (y - k)^2 - k^2 + 7 = 0$

Centre is $(-3k, k)$.

- **[B1]** Centre $(-3k, k)$ o.e.

**Step 2: Complete the square to find $r^2$**

$$(x + 3k)^2 + (y - k)^2 = 10k^2 - 7$$

- **[M1]** Attempts to find $r^2$ by completing the square and collects terms outside the brackets on the RHS.

**Step 3: State the radius**

$$\text{Radius} = \sqrt{10k^2 - 7}$$

- **[A1ft]** Radius $\sqrt{10k^2 - 7}$.

#### **Part (b)**

**Step 4: Substitute $y = 2x - 1$ into the circle equation**

$$x^2 + (2x - 1)^2 + 6kx - 2k(2x - 1) + 7 = 0$$

$$x^2 + (4x^2 - 4x + 1) + 6kx - 4kx + 2k + 7 = 0$$

$$5x^2 + (2k - 4)x + (2k + 8) = 0$$

- **[M1]** Substitutes $y = 2x - 1$ into the circle equation and attempts to collect terms proceeding to $5x^2 + (pk + q)x + rk + s = 0$.
- **[A1]** $5x^2 + (2k - 4)x + 2k + 8 = 0$.

**Step 5: Apply the discriminant $b^2 - 4ac > 0$ for 2 distinct intersection points**

$$b^2 - 4ac = (2k - 4)^2 - 4(5)(2k + 8) > 0$$

$$4k^2 - 16k + 16 - 40k - 160 > 0 \Rightarrow 4k^2 - 56k - 144 > 0 \Rightarrow k^2 - 14k - 36 > 0$$

- **[dM1]** Attempts to find $b^2 - 4ac$ for their 3TQ and attempts to find at least one critical value.

**Step 6: Find the critical values**

$$k^2 - 14k - 36 = 0 \Rightarrow k = \frac{14 \pm \sqrt{(-14)^2 - 4(1)(-36)}}{2} = \frac{14 \pm \sqrt{196 + 144}}{2} = \frac{14 \pm \sqrt{340}}{2} = 7 \pm \sqrt{85}$$

- **[A1]** Critical values $= 7 \pm \sqrt{85}$.

**Step 7: Determine the outside region for $k^2 - 14k - 36 > 0$**

- **[ddM1]** Attempts to find the outside region for their critical values.

**Step 8: State the final range**

$$k < 7 - \sqrt{85} \quad \text{or} \quad k > 7 + \sqrt{85}$$

- **[A1]** $k < 7 - \sqrt{85}$ or $k > 7 + \sqrt{85}$ o.e.

### **Examiner Report 10**

Candidates were typically able to make good progress in part (a) with completing the square. In part (a)(i), common errors included $(3k, -k)$ and $(-3kx, ky)$. In completing the square a common error was to subtract $3k^2$ instead of $(3k)^2$.

In part (b), the vast majority realised what was required and attempted to produce an equation in $x$ by substitution. A significant number of candidates produced a three-term quadratic for $x$, with coefficients in terms of $k$.

In general candidates who found critical values for their discriminant by solving $b^2 - 4ac = 0$ were more successful than those who expressed it as an inequality throughout. The "need" to write a single inequality was seemingly pressing for many, so $7 + \sqrt{85} < k < 7 - \sqrt{85}$ was seen. Some candidates used 'and' with their two regions, however, most recognised that this needed to be 'or'.

---
topic: "Exponentials and Logarithms"
subtopic: "Logarithms and non-linear data"
---
### **Question 11**

**Figure 2** _(A linear graph of $\log_{10}V$ against $t$, passing through $(0, 3)$ and $(10, 2.79)$)._

The value, $V$ pounds, of a mobile phone, $t$ months after it was bought, is modelled by

$$V = ab^t$$

where $a$ and $b$ are constants.

Figure 2 shows the linear relationship between $\log_{10}V$ and $t$.

The line passes through the points $(0, 3)$ and $(10, 2.79)$ as shown.

Using these points,

**(a)** find the initial value of the phone, **(2)**

**(b)** find a complete equation for $V$ in terms of $t$, giving the exact value of $a$ and giving the value of $b$ to 3 significant figures. **(3)**

Exactly 2 years after it was bought, the value of the phone was £320

**(c)** Use this information to evaluate the reliability of the model. **(2)**

**(Total for Question 11 is 7 marks)**

### **Mark Scheme 11**

#### **Part (a)**

**Step 1: Set $t = 0$ to find the initial value**

At $t = 0$, $\log_{10} V = 3 \Rightarrow V = 10^3 = 1000$

- **[M1]** Sets $\log_{10} V = 3$ and attempts to find a value for $a$ or an expression for $V$ when $t = 0$.

**Step 2: State the initial value**

$$\text{Initial value} = \text{£}1000$$

- **[A1]** £1000 cao (including units).

#### **Part (b)**

**Step 3: Linearise the model and find the gradient**

Taking $\log_{10}$ of $V = ab^t$:

$$\log_{10} V = \log_{10} a + t \log_{10} b$$

Gradient of line: $m = \frac{2.79 - 3}{10 - 0} = -0.021$

$$\log_{10} V = 3 - 0.021t$$

- **[M1]** Finds the gradient between the two points: $\frac{2.79 - 3}{10 - 0} = -0.021$ or forms the linear equation $\log_{10} V = 3 - 0.021t$.

**Step 4: Determine $b$**

$$\log_{10} b = -0.021 \Rightarrow b = 10^{-0.021} = 0.952796\dots \approx 0.953 \text{ (3sf)}$$

- **[M1]** Attempts to find the value or an expression for $b$ using their gradient ($10^{-0.021}$).

**Step 5: Write the complete equation**

$$V = 1000 \times 0.953^t$$

- **[A1ft]** $V = 1000 \times 0.953^t$ (follow through on their 1000).

#### **Part (c)**

**Step 6: Substitute $t = 24$ months into the model**

2 years $= 24$ months.

$$V = 1000 \times (0.953)^{24} \approx \text{£}314.94 \quad (\text{or £}313.33 \text{ using exact } b = 10^{-0.021})$$

- **[M1]** A full and valid attempt to substitute $t = 24$ into their model or set $V = 320$ to find $t$.

**Step 7: Evaluate reliability**

The predicted value of £315 (or £313) is very close to the actual value of £320 (a percentage difference of about $1.6\%$).
Therefore, the model is reliable / accurate.

- **[A1]** Compares their awrt £313–£315 with £320 and makes a valid conclusion with a reason.

### **Examiner Report 11**

This question proved to be quite challenging for a number of candidates. A number of candidates did not pay attention to the labelling on the $y$-axis ($\log_{10} V$).

In part (a), most candidates were able to find the initial value correctly, although several lost the accuracy mark by forgetting to include units. A common error was to assume $V = 3$ or $\log_{10} V = 3 \Rightarrow V = e^3$.

In part (b), those candidates who were most successful made the link between part (a) and $a = 1000$ without having to do additional calculations. Many were able to find the gradient $-0.021$. Finding $b = 10^{-0.021}$ was difficult for many candidates.

In part (c), the units caught a considerable number of candidates out, substituting 2 (years) rather than 24 (months), leading to a conclusion that the model was unreliable due to their own incorrect calculation.

---
topic: "Differentiation"
subtopic: "Differentiating sin x and cos x"
---
### **Question 12**

$$y = \sin x$$

where $x$ is measured in radians.

Use differentiation from first principles to show that

$$\frac{\mathrm{d}y}{\mathrm{d}x} = \cos x$$

You may

- use without proof the formula for $\sin(A \pm B)$
- assume that as $h \to 0$, $\frac{\sin h}{h} \to 1$ and $\frac{\cos h - 1}{h} \to 0$ **(5)**

**(Total for Question 12 is 5 marks)**

### **Mark Scheme 12**

**Step 1: Write down the derivative as a limit of the gradient fraction**

$$\frac{\mathrm{d}y}{\mathrm{d}x} = \lim_{h \to 0} \frac{\sin(x + h) - \sin x}{h}$$

- **[B1]** Gives the correct fraction $\frac{\sin(x + h) - \sin x}{h}$.

**Step 2: Expand $\sin(x + h)$ using the compound angle formula**

$$\sin(x + h) = \sin x \cos h + \cos x \sin h$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = \lim_{h \to 0} \frac{\sin x \cos h + \cos x \sin h - \sin x}{h}$$

- **[M1]** Uses the compound angle formula for $\sin(x + h)$ to give $\sin x \cos h \pm \cos x \sin h$.
- **[A1]** Achieves $\frac{\sin x \cos h + \cos x \sin h - \sin x}{h}$.

**Step 3: Factorise and isolate the standard limits**

$$\frac{\mathrm{d}y}{\mathrm{d}x} = \lim_{h \to 0} \left[ \sin x \left(\frac{\cos h - 1}{h}\right) + \cos x \left(\frac{\sin h}{h}\right) \right]$$

- **[dM1]** Dependent on both B and M marks. Complete attempt to apply the given limits by isolating $\frac{\cos h - 1}{h}$ (replacing with 0) and $\frac{\sin h}{h}$ (replacing with 1).

**Step 4: Take limits as $h \to 0$**

$$\text{As } h \to 0, \quad \frac{\mathrm{d}y}{\mathrm{d}x} = \sin x \times 0 + \cos x \times 1 = \cos x$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = \cos x$$

- **[A1*]** Uses correct mathematical language of limiting arguments to show that $\frac{\mathrm{d}y}{\mathrm{d}x} = \cos x$ with no errors seen (cso). Must see $h \to 0$ at some point and link $\frac{\mathrm{d}y}{\mathrm{d}x}$ with $\cos x$.

### **Examiner Report 12**

This differentiation from first principles question was similar to the one that appeared in 2018 and candidates demonstrated a much greater confidence with the way in which they should approach this topic. Most candidates were able to obtain the first 3 marks, with very few sign errors seen when using the addition formula.

Scoring the last two marks was not as common. If candidates lost marks here, it was often because they failed to separate their terms in $h$ correctly. The main mistakes were either failing to isolate the required expressions and jumping to the answer, or trying to replace each term separately without factorising $\sin x$. Limit notation was often seen right through to the end, even after the limits had been used.

---
topic: "Quadratics"
subtopic: "Modelling with quadratics"
---
### **Question 13**

On a roller coaster ride, passengers travel in carriages around a track.

On the ride, carriages complete multiple circuits of the track such that

- the maximum vertical height of a carriage above the ground is $60 \text{ m}$
- a carriage starts a circuit at a vertical height of $2 \text{ m}$ above the ground
- the ground is horizontal

The vertical height, $H \text{ m}$, of a carriage above the ground, $t \text{ seconds}$ after the carriage starts the first circuit, is modelled by the equation

$$H = a - b(t - 20)^2$$

where $a$ and $b$ are positive constants.

**(a)** Find a complete equation for the model. **(3)**

**(b)** Use the model to determine the height of the carriage above the ground when $t = 40$ **(1)**

In an alternative model, the vertical height, $H \text{ m}$, of a carriage above the ground, $t \text{ seconds}$ after the carriage starts the first circuit, is given by

$$H = 29\cos(9t + \alpha)^\circ + \beta \quad 0 \le \alpha < 360^\circ$$

where $\alpha$ and $\beta$ are constants.

**(c)** Find a complete equation for the alternative model. **(2)**

Given that the carriage moves continuously for 2 minutes,

**(d)** give a reason why the alternative model would be more appropriate. **(1)**

**(Total for Question 13 is 7 marks)**

### **Mark Scheme 13**

#### **Part (a)**

**Step 1: Identify $a$ from the maximum height**

Maximum height is $60 \text{ m}$, which occurs when $(t - 20)^2 = 0 \Rightarrow H = a = 60$.

- **[B1]** $a = 60$.

**Step 2: Find $b$ using $t = 0, H = 2$**

$$2 = 60 - b(0 - 20)^2 \Rightarrow 2 = 60 - 400b \Rightarrow 400b = 58 \Rightarrow b = 0.145$$

- **[M1]** Attempts to find $b$ by substituting $t = 0, H = 2$ and their $a$ and proceeding to a value for $b$.

**Step 3: Write the complete equation**

$$H = 60 - 0.145(t - 20)^2$$

- **[A1]** $H = 60 - 0.145(t - 20)^2$ or equivalent (e.g. $H = 60 - \frac{29}{200}(t - 20)^2$).

#### **Part (b)**

**Step 4: Calculate $H$ at $t = 40$**

$$H = 60 - 0.145(40 - 20)^2 = 60 - 0.145(400) = 60 - 58 = 2 \text{ m}$$

- **[B1]** Height $= 2 \text{ m}$.

#### **Part (c)**

**Step 5: Determine $\alpha$ and $\beta$**

Maximum height is $60 \text{ m}$ at $t = 20 \text{ s}$, minimum height is $2 \text{ m}$ at $t = 0 \text{ s}$.
The amplitude is $29$.
When $t = 20$, $9t = 180^\circ$. For maximum $H$:

$$29\cos(180 + \alpha)^\circ + \beta = 60$$

Since maximum cosine value is $1$: $\cos(180 + \alpha)^\circ = 1 \Rightarrow 180 + \alpha = 360 \Rightarrow \alpha = 180^\circ$.
Then $29(1) + \beta = 60 \Rightarrow \beta = 31$.

- **[M1]** $\alpha = 180$ or $\beta = 31$.

**Step 6: Write the complete equation**

$$H = 29\cos(9t + 180)^\circ + 31$$

- **[A1]** $H = 29\cos(9t + 180)^\circ + 31$ or equivalent (e.g. $H = 31 - 29\cos(9t)^\circ$).

#### **Part (d)**

**Step 7: State a valid reason**

- **[B1]** Score for a reason which makes reference to any of:
- the alternative model allows repetition / multiple cycles / repeated circuits / is periodic.
- after $t = 40 \text{ s}$ the quadratic model will yield negative heights (e.g. at $t = 120$, $H = -1390 \text{ m}$).
- at $t = 120 \text{ s}$ (2 minutes), the alternative model gives $H = 2 \text{ m}$, back at the start height.

### **Examiner Report 13**

A significant number of candidates found this question very challenging.

In part (a), those who applied the knowledge that $b(t - 20)^2 = 0$ at maximum $H = 60$ quickly found $a = 60$ and then substituted $t = 0, H = 2$ to find $b = 0.145$.

In part (b), an overwhelming majority of candidates who scored full marks in (a) successfully found $H = 2 \text{ m}$.

In part (c), a significant number of candidates had no real idea how to start. Candidates who realised that $H = 60$ occurs when $\cos(9t + \alpha) = 1$ had the most success, giving $\beta = 31$ and $\alpha = 180$.

In part (d), the most popular correct answers involved an identification of the cyclic/periodic nature of the trigonometric function, or realising the quadratic model would predict negative heights after $t = 40 \text{ s}$.

---
topic: "Algebraic Methods"
subtopic: "Mathematical proof"
---
### **Question 14**

Prove, using algebra, that

$$(n + 1)^3 - n^3$$

is odd for all $n \in \mathbb{N}$ **(4)**

**(Total for Question 14 is 4 marks)**

### **Mark Scheme 14**

**Step 1: Consider the cases when $n$ is even and when $n$ is odd**

Case 1: When $n$ is even, let $n = 2k$ ($k \in \mathbb{Z}^+$)

$$(n + 1)^3 - n^3 = (2k + 1)^3 - (2k)^3 = (8k^3 + 12k^2 + 6k + 1) - 8k^3 = 12k^2 + 6k + 1$$

$$= 6k(2k + 1) + 1 \quad \text{or} \quad 2(6k^2 + 3k) + 1$$

Since $2(6k^2 + 3k)$ is even, $2(6k^2 + 3k) + 1$ is odd.

- **[M1]** For the key step attempting to find $(n + 1)^3 - n^3$ when $n = 2k$ or $n = 2k + 1$, expanding and simplifying to achieve a three-term quadratic.
- **[A1]** Complete argument for $n = 2k$ or $n = 2k + 1$ showing the result is odd.

**Step 2: Consider the second case**

Case 2: When $n$ is odd, let $n = 2k + 1$

$$(n + 1)^3 - n^3 = (2k + 2)^3 - (2k + 1)^3$$

$$= (8k^3 + 24k^2 + 24k + 8) - (8k^3 + 12k^2 + 6k + 1) = 12k^2 + 18k + 7$$

$$= 6k(2k + 3) + 7 \quad \text{or} \quad 2(6k^2 + 9k + 3) + 1$$

Since $2(6k^2 + 9k + 3)$ is even, $2(6k^2 + 9k + 3) + 1$ is odd.

- **[dM1]** Attempts to find $(n + 1)^3 - n^3$ for the second case ($n = 2k + 1$) and attempts to multiply out and simplify to achieve a three-term quadratic.

**Step 3: State a complete conclusion**

Since $(n + 1)^3 - n^3$ is odd when $n$ is even and when $n$ is odd, $(n + 1)^3 - n^3$ is odd for all $n \in \mathbb{N}$.

- **[A1*]** Complete argument for both $n = 2k$ and $n = 2k + 1$ showing the result is odd, with minimal conclusion "Hence odd for all $n \in \mathbb{N}$".

**Alternative method (Algebraic expansion with logic):**

**Step 1: Expand and simplify $(n + 1)^3 - n^3$**

$$(n + 1)^3 - n^3 = (n^3 + 3n^2 + 3n + 1) - n^3 = 3n^2 + 3n + 1$$

- **[M1]** Expands and simplifies to a three-term quadratic.
- **[A1]** Correct quadratic expression $3n^2 + 3n + 1$.

**Step 2: Factorise to reveal consecutive integers**

$$3n^2 + 3n + 1 = 3n(n + 1) + 1$$

- **[dM1]** Factorises $n^2 + n \to n(n + 1)$ within the expression.

**Step 3: Logical deduction**

$n(n + 1)$ is the product of two consecutive integers, so one must be even, making $n(n + 1)$ always even.
Therefore $3n(n + 1)$ is $\text{odd} \times \text{even} = \text{even}$.
Adding 1 gives $\text{even} + 1 = \text{odd}$.
Hence $(n + 1)^3 - n^3$ is odd for all $n \in \mathbb{N}$.

- **[A1*]** Explains that $n(n + 1)$ is always even and completes the proof with a full conclusion.

### **Examiner Report 14**

Candidates were required to prove the statement that $(n + 1)^3 - n^3$ is odd for all $n \in \mathbb{N}$.

A large number of candidates tried to start correctly by substituting $n = 2k$ and $n = 2k + 1$ for even and odd numbers. The final mark was often lost as at least one element was missing or contained algebraic errors. Some candidates only proved one case, and some omitted the overall conclusion.

Common errors in expansions included $(2k)^3 = 2k^3$ instead of $8k^3$.

The alternative algebraic approach with logic ($3n(n + 1) + 1$) was also seen. Many expanded correctly to $3n^2 + 3n + 1$, but few factorised to $3n(n + 1) + 1$ and explained why $n(n + 1)$ is always even.

---
topic: "Differentiation"
subtopic: "The quotient rule"
---
### **Question 15**

A curve has equation $y = \mathrm{f}(x)$, where

$$\mathrm{f}(x) = \frac{7x\mathrm{e}^x}{\sqrt{\mathrm{e}^{3x} - 2}} \quad x > \ln \sqrt[3]{2}$$

**(a)** Show that

$$\mathrm{f}'(x) = \frac{7\mathrm{e}^x \left(\mathrm{e}^{3x}(2 - x) + Ax + B\right)}{2(\mathrm{e}^{3x} - 2)^{\frac{3}{2}}}$$

where $A$ and $B$ are constants to be found. **(5)**

**(b)** Hence show that the $x$ coordinates of the turning points of the curve are solutions of the equation

$$x = \frac{2\mathrm{e}^{3x} - 4}{\mathrm{e}^{3x} + 4}$$ **(2)**

The equation $x = \frac{2\mathrm{e}^{3x} - 4}{\mathrm{e}^{3x} + 4}$ has two positive roots $\alpha$ and $\beta$ where $\beta > \alpha$

A student uses the iteration formula

$$x_{n+1} = \frac{2\mathrm{e}^{3x_n} - 4}{\mathrm{e}^{3x_n} + 4}$$

in an attempt to find approximations for $\alpha$ and $\beta$

Diagram 1 shows a plot of part of the curve with equation $y = \frac{2\mathrm{e}^{3x} - 4}{\mathrm{e}^{3x} + 4}$ and part of the line with equation $y = x$

Using Diagram 1 on page 42

**(c)** draw a staircase diagram to show that the iteration formula starting with $x_1 = 1$ can be used to find an approximation for $\beta$ **(1)**

Use the iteration formula with $x_1 = 1$, to find, to 3 decimal places,

**(d)** **(i)** the value of $x_2$

**(ii)** the value of $\beta$ **(3)**

Using a suitable interval and a suitable function that should be stated

**(e)** show that $\alpha = 0.432$ to 3 decimal places. **(2)**

**(Total for Question 15 is 13 marks)**

### **Mark Scheme 15**

#### **Part (a)**

**Step 1: Differentiate the numerator $u = 7x\mathrm{e}^x$ using the product rule**

$$\frac{\mathrm{d}u}{\mathrm{d}x} = 7\mathrm{e}^x + 7x\mathrm{e}^x = 7\mathrm{e}^x(1 + x)$$

- **[M1]** Attempts product rule on $x\mathrm{e}^x$ achieving $\dots x\mathrm{e}^x + \dots \mathrm{e}^x$.
- **[A1]** $k(x\mathrm{e}^x + \mathrm{e}^x)$ or $7\mathrm{e}^x(1 + x)$.

**Step 2: Differentiate the denominator $v = (\mathrm{e}^{3x} - 2)^{\frac{1}{2}}$ using the chain rule**

$$\frac{\mathrm{d}v}{\mathrm{d}x} = \frac{1}{2}(\mathrm{e}^{3x} - 2)^{-\frac{1}{2}} \times 3\mathrm{e}^{3x}$$

- **[B1]** $\frac{1}{2} \times 3\mathrm{e}^{3x}(\mathrm{e}^{3x} - 2)^{-\frac{1}{2}}$.

**Step 3: Apply the quotient rule**

$$\mathrm{f}'(x) = \frac{(\mathrm{e}^{3x} - 2)^{\frac{1}{2}} \cdot 7\mathrm{e}^x(1 + x) - 7x\mathrm{e}^x \cdot \frac{3}{2}\mathrm{e}^{3x}(\mathrm{e}^{3x} - 2)^{-\frac{1}{2}}}{\mathrm{e}^{3x} - 2}$$

- **[dM1]** Attempts to use the quotient rule with their expressions.

**Step 4: Simplify the fraction**

Multiply numerator and denominator by $2(\mathrm{e}^{3x} - 2)^{\frac{1}{2}}$:

$$\mathrm{f}'(x) = \frac{2(\mathrm{e}^{3x} - 2) \cdot 7\mathrm{e}^x(1 + x) - 21x\mathrm{e}^{4x}}{2(\mathrm{e}^{3x} - 2)^{\frac{3}{2}}} = \frac{7\mathrm{e}^x \left[ 2(1 + x)(\mathrm{e}^{3x} - 2) - 3x\mathrm{e}^{3x} \right]}{2(\mathrm{e}^{3x} - 2)^{\frac{3}{2}}}$$

$$= \frac{7\mathrm{e}^x \left[ 2\mathrm{e}^{3x} + 2x\mathrm{e}^{3x} - 4 - 4x - 3x\mathrm{e}^{3x} \right]}{2(\mathrm{e}^{3x} - 2)^{\frac{3}{2}}} = \frac{7\mathrm{e}^x \left[ \mathrm{e}^{3x}(2 - x) - 4x - 4 \right]}{2(\mathrm{e}^{3x} - 2)^{\frac{3}{2}}}$$

So $A = -4$ and $B = -4$.

- **[A1]** $\mathrm{f}'(x) = \frac{7\mathrm{e}^x(\mathrm{e}^{3x}(2 - x) - 4x - 4)}{2(\mathrm{e}^{3x} - 2)^{\frac{3}{2}}}$.

#### **Part (b)**

**Step 5: Set $\mathrm{f}'(x) = 0$ for turning points**

Since $7\mathrm{e}^x \neq 0$ and $2(\mathrm{e}^{3x} - 2)^{\frac{3}{2}} \neq 0$:

$$\mathrm{e}^{3x}(2 - x) - 4x - 4 = 0$$

$$2\mathrm{e}^{3x} - x\mathrm{e}^{3x} - 4x - 4 = 0$$

$$2\mathrm{e}^{3x} - 4 = x\mathrm{e}^{3x} + 4x \Rightarrow 2\mathrm{e}^{3x} - 4 = x(\mathrm{e}^{3x} + 4)$$

$$x = \frac{2\mathrm{e}^{3x} - 4}{\mathrm{e}^{3x} + 4}$$

- **[M1]** Sets $\mathrm{e}^{3x}(2 - x) - 4x - 4 = 0$, collects terms in $x$ on one side and factorises out $x$.
- **[A1*]** Achieves the given equation $x = \frac{2\mathrm{e}^{3x} - 4}{\mathrm{e}^{3x} + 4}$ with no errors.

#### **Part (c)**

**Step 6: Draw the staircase diagram**

**Figure 3** _(A staircase diagram starting at x = 1 on the x-axis, going vertically up to the curve y = (2e^{3x} - 4)/(e^{3x} + 4), horizontally to the line y = x, and repeating vertically and horizontally, stepping upwards towards the upper intersection point \beta)._

Starting at $x_1 = 1$, draw a vertical line up to the curve $y = \frac{2\mathrm{e}^{3x} - 4}{\mathrm{e}^{3x} + 4}$, then a horizontal line to $y = x$, repeating at least twice, with steps tending to $\beta$.

- **[B1]** Draws a vertical line $x = 1$ up to the curve then across to $y = x$, then up to the curve finishing at the root $\beta$ (minimum 2 vertical and horizontal lines).

#### **Part (d)**

**Step 7: Calculate $x_2$**

$$x_2 = \frac{2\mathrm{e}^{3(1)} - 4}{\mathrm{e}^{3(1)} + 4} = \frac{2\mathrm{e}^3 - 4}{\mathrm{e}^3 + 4} \approx 1.5017756\dots \approx 1.502 \text{ (3dp)}$$

- **[M1]** Substitutes $x_1 = 1$ into the iterative formula.
- **[A1]** $x_2 = 1.502$ (awrt).

**Step 8: Calculate $\beta$**

$$x_3 = \frac{2\mathrm{e}^{3(1.501776)} - 4}{\mathrm{e}^{3(1.501776)} + 4} \approx 1.8732\dots$$

$$x_4 \approx 1.9602\dots \quad x_5 \approx 1.9675\dots \quad x_6 \approx 1.9679\dots$$

$$\beta \approx 1.968 \text{ (3dp)}$$

- **[dB1]** $\beta = 1.968$ cao.

#### **Part (e)**

**Step 9: Choose a suitable function and test the interval $[0.4315, 0.4325]$**

Let $\mathrm{h}(x) = \frac{2\mathrm{e}^{3x} - 4}{\mathrm{e}^{3x} + 4} - x$

$$\mathrm{h}(0.4315) = \frac{2\mathrm{e}^{3(0.4315)} - 4}{\mathrm{e}^{3(0.4315)} + 4} - 0.4315 = -0.000297\dots < 0$$

$$\mathrm{h}(0.4325) = \frac{2\mathrm{e}^{3(0.4325)} - 4}{\mathrm{e}^{3(0.4325)} + 4} - 0.4325 = +0.000947\dots > 0$$

- **[M1]** Attempts to substitute $x = 0.4315$ and $0.4325$ into a suitable function and gets one value correct.

**Step 10: State the conclusion**

There is a change of sign in $\mathrm{h}(x)$ between $x = 0.4315$ and $x = 0.4325$.
Since $\mathrm{h}(x)$ is continuous over the interval $[0.4315, 0.4325]$, there is a root $\alpha \in (0.4315, 0.4325)$.
Hence $\alpha = 0.432$ to 3 decimal places.

- **[A1cao]** Both calculations correct with sign change comment, continuity statement, and minimal conclusion $\alpha = 0.432$ (to 3dp).

### **Examiner Report 15**

This question brought together a variety of topics and was appropriately placed at the end of the paper. It was very good at discriminating between candidates at the higher end, while weaker candidates were still able to attempt parts (c) and (d).

In part (a), a significant proportion of candidates understood that they needed to use the product rule on $7x\mathrm{e}^x$, and most applied it correctly. Most candidates were unable to achieve the B1 mark for differentiating the denominator $\sqrt{\mathrm{e}^{3x} - 2}$, with many missing the chain rule. Final simplification to find $A = -4$ and $B = -4$ was achieved by very few candidates.

In part (b), some determined candidates attempted a solution using $A$ and $B$ and were able to achieve the method mark by setting $f'(x) = 0$ and rearranging.

In part (c), the majority of candidates scored the mark for a correct cobweb/staircase diagram.

Part (d) was an opportunity for many candidates to score full marks relatively easily. Rounding $x_2$ to 1.502 and finding $\beta = 1.968$ were widely achieved.

In part (e), many candidates failed to define a function set equal to zero ($\mathrm{h}(x) = 0$), instead substituting into the iterative formula. Of those who used a valid function, some failed to comment that the function was continuous.
