---
topic: "Integration"
subtopic: "The trapezium rule"
---
### **Question 1**

The table below shows corresponding values of $x$ and $y$ for $y = \sqrt{\frac{x}{1 + x}}$

The values of $y$ are given to $4$ significant figures.

$$\begin{array}{|c|c|c|c|c|c|}
\hline
x & 0.5 & 1 & 1.5 & 2 & 2.5 \\
\hline
y & 0.5774 & 0.7071 & 0.7746 & 0.8165 & 0.8452 \\
\hline
\end{array}$$

**(a)** Use the trapezium rule, with all the values of $y$ in the table, to find an estimate for

$$\int_{0.5}^{2.5} \sqrt{\frac{x}{1 + x}} \, dx$$

giving your answer to $3$ significant figures. **(3)**

**(b)** Using your answer to part (a), deduce an estimate for

$$\int_{0.5}^{2.5} \frac{9x}{\sqrt{1 + x}} \, dx$$

**(1)**

Given that

$$\int_{0.5}^{2.5} \frac{9x}{\sqrt{1 + x}} \, dx = 4.535 \text{ to } 4 \text{ significant figures}$$

**(c)** comment on the accuracy of your answer to part (b). **(1)**

**(Total for Question 1 is 5 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Use the trapezium rule formula with $h = 0.5$**

$$\text{Area} \approx \frac{0.5}{2} [0.5774 + 0.8452 + 2(0.7071 + 0.7746 + 0.8165)]$$

- **[B1]** Correct value for $h$ ($h = 0.5$) used or implied in a correct bracket structure.
- **[M1]** Correct structure of the trapezium rule bracket (first + last + $2 \times$ sum of middle ordinates).

**Step 2: Evaluate and round to 3 significant figures**

$$\text{Area} \approx 1.50$$

- **[A1]** $1.50$ (must be to 3 sf).

#### **Part (b)**

**Step 3: Multiply the answer from part (a) by $9$**

$$\int_{0.5}^{2.5} \frac{9x}{\sqrt{1+x}} \, dx = 9 \times 1.5028\dots = 13.5 \text{ (or } 13.525\dots \text{)}$$

- **[B1ft]** $13.5$ (following through from their part (a) answer).

#### **Part (c)**

**Step 4: Comment on accuracy**

The answer is quite accurate (correct to 2 significant figures / 1 decimal place, or percentage error is small $\approx 0.22\%$).

- **[B1]** Any valid comment indicating good accuracy (e.g., correct to 2 s.f., 1 d.p., or small percentage error).

### **Examiner Report 1**

Part (a) was generally answered well, with the majority of candidates using $h = 0.5$ and finding an area rounding to 1.50, but a number completed it with a final answer of $1.505\dots$ and consequently lost the final A mark for part (a). The most common error seen was the use of $h = \frac{2}{5}$ which candidates are arriving at because of a misunderstanding in the '$n$' seen in the formula $\frac{b-a}{n}$, they presumably think $n$ is the number of entries in a row of the table ignoring that the first column represents $x_0$ and $y_0$. Those candidates who calculated the width of the trapezia independent of the formula $\frac{b-a}{n}$ were usually more successful. The formula was set up correctly on most occasions, with the most common error being the lack of exterior brackets, often resulting in $4.95$ as an answer. There were some candidates using a variation of the formula, with the $\frac{1}{2}$ absorbed into the brackets, and a few worked out the areas of four separate trapezia, usually successfully.

Success in part (b) was mixed, with around half the candidates multiplying their answer by $3$ and the others multiplying by $9$. A minority of candidates restarted, losing access to marks in this question.

In part (c), the mark was only available to those who arrived at an answer rounding to $4.5$ in part (b) (Wait, the examiner report notes rounding to 4.5 or comments on accuracy based on their answer). Answers were often concise and clear, stating that their answer was correct to 2 s.f. or 1 d.p. and therefore quite accurate. Others went for a percentage error approach, which was also acceptable and usually completed successfully. The main error in this part was that candidates misunderstood what was being asked of them, and instead arguing that the answer was an underestimate, confusing this with another common trapezium rule question.

---
topic: "Vectors"
subtopic: "Solving geometric problems"
---
### **Question 2**

Relative to a fixed origin, points $P$, $Q$ and $R$ have position vectors $\mathbf{p}$, $\mathbf{q}$ and $\mathbf{r}$ respectively.

Given that
* $P$, $Q$ and $R$ lie on a straight line
* $Q$ lies one third of the way from $P$ to $R$

show that

$$\mathbf{q} = \frac{1}{3}(\mathbf{r} + 2\mathbf{p})$$

**(3)**

**(Total for Question 2 is 3 marks)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Form a vector relation using the given ratio**

$$\vec{PQ} = \frac{1}{3}\vec{PR}$$

- **[M1]** Expresses the geometric statement as a correct vector equation (e.g., $\vec{PQ} = \frac{1}{3}\vec{PR}$ or $\vec{OQ} = \vec{OP} + \frac{1}{3}\vec{PR}$).

**Step 2: Substitute position vectors**

$$\mathbf{q} - \mathbf{p} = \frac{1}{3}(\mathbf{r} - \mathbf{p})$$

- **[M1]** Substitutes $\vec{PQ} = \mathbf{q} - \mathbf{p}$ and $\vec{PR} = \mathbf{r} - \mathbf{p}$ correctly.

**Step 3: Rearrange to the required form**

$$\mathbf{q} = \mathbf{p} + \frac{1}{3}\mathbf{r} - \frac{1}{3}\mathbf{p} = \frac{2}{3}\mathbf{p} + \frac{1}{3}\mathbf{r} = \frac{1}{3}(\mathbf{r} + 2\mathbf{p})$$

- **[A1]** Completes the algebraic manipulation rigorously to reach the given result with no errors.

### **Examiner Report 2**

This proved to be a demanding question for many candidates, with false starts and seemingly random statements. Those who were able to make some progress generally gained the initial method mark for expressing one of the line segments in terms of the difference of two position vectors, but many candidates were unable to make further progress. Unfortunately, the addition of two position vectors was a common error. Diagrams helped with some responses, but they frequently depicted $OP$, $OQ$ and $OR$ as collinear, which tended to cause more confusion. The most common approach amongst those who were able to make further progress were either $\vec{PQ} = \frac{1}{3}\vec{PR}$ or $\vec{OQ} = \vec{OP} + \frac{1}{3}\vec{PR}$. Vector notation was often poor, for example $Q$ being used to denote a vector rather than a point, leading to such confused statements as $Q = \frac{1}{3}PR$.

---
topic: "Exponentials and Logarithms"
subtopic: "Solving equations using logarithms"
---
### **Question 3**

**(a)** Given that

$$2\log(4 - x) = \log(x + 8)$$

show that

$$x^2 - 9x + 8 = 0$$

**(3)**

**(b)** 
**(i)** Write down the roots of the equation $x^2 - 9x + 8 = 0$.

**(ii)** State which of the roots in (b)(i) is not a solution of $2\log(4 - x) = \log(x + 8)$, giving a reason for your answer.

**(2)**

**(Total for Question 3 is 5 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Use the power law of logarithms**

$$\log((4 - x)^2) = \log(x + 8)$$

- **[M1]** Uses the power law correctly to obtain $2\log(4 - x) = \log((4 - x)^2)$.

**Step 2: Equate arguments**

$$(4 - x)^2 = x + 8$$

- **[M1]** Removes logs correctly to get an equation in $x$.

**Step 3: Expand and rearrange into the required quadratic form**

$$16 - 8x + x^2 = x + 8 \Rightarrow x^2 - 9x + 8 = 0$$

- **[A1]** Correctly expands and rearranges to the printed target equation.

#### **Part (b)**

**Step 4: Solve the quadratic equation**

$$(x - 1)(x - 8) = 0 \Rightarrow x = 1, x = 8$$

- **[B1]** States both roots: $1$ and $8$.

**Step 5: Identify the invalid root and give a reason**

$x = 8$ is not a solution because $\log(4 - 8) = \log(-4)$ which is undefined (or cannot take the log of a negative/zero number).

- **[B1]** Identifies $8$ and gives a valid reason relating to the domain of the logarithm (e.g., $\log$ of a negative number).

### **Examiner Report 3**

This was a fairly accessible question for prepared candidates and provided an early source of marks for many. Generally, most candidates recognised the need to use the power law for logs and correctly obtained $2\log(4 - x) = \log((4 - x)^2)$, then proceeded to remove the logs. In fact, many candidates jumped immediately to $(4 - x)^2 = (x + 8)$ with no sign of logs whatsoever in their solution. This was condoned although it must be noted that combining steps of working in a 'show that' question can be risky. Some candidates diligently wrote out $10^{\log((4-x)^2)} = 10^{\log(x+8)}$ before removing logs, others subtracted $\log((4 - x)^2)$ from both sides and used the log subtraction law to combine the log terms before removing the log. Both approaches were often successful although the latter tended to be the riskier of the two as some candidates forgot that $10^0 = 1$ and instead obtained $\frac{(4-x)^2}{x+8} = 0$ which was then fudged to give the required solution. Those candidates that did not recognise the need to employ the power law for logs early on in their solution made very little progress. Disappointingly, some candidates failed to earn the final mark in part (a) as their final line was missing the "$= 0$". Candidates should take care to check their final line matches the printed answer in a 'show that' question.

The first part of part (b) was straightforward and gave an opportunity to re-enter the question for those who had come unstuck in part (a). Indeed, for some candidates this was the only mark attained in this question. It was surprising that a number of candidates left their 'solution' as $(x - 1)(x - 8)$ or gave 'solutions': $(x - 1)$ and $(x - 8)$. Only a very small number of candidates incorrectly obtained $x = -1$ or $x = -8$.

The second part of part (b) was more discriminating and a careful explanation was required here. Most candidates were able to identify $x = 8$ as the value which was not a solution. However, in order to gain credit, it was also necessary for candidates to make specific reference to the fact that $\log(4 - 8)$ is undefined. Too many candidates simply stated 'logs can't be negative' which was incorrect and quite different to 'you can't take logs of a negative number'. Candidates should be reminded that reasoning should be precise and specific.

---
topic: "Binomial Expansion"
subtopic: "The binomial expansion"
---
### **Question 4**

In the binomial expansion of

$$(a + 2x)^7 \quad \text{where } a \text{ is a constant}$$

the coefficient of $x^4$ is $15\,120$.

Find the value of $a$. **(3)**

**(Total for Question 4 is 3 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Write down the general term for the expansion**

$$\binom{7}{4} a^{7-4} (2x)^4 \quad \text{or equivalent}$$

- **[M1]** Identifies the correct term $\binom{7}{4} a^3 (2x)^4$ or sets up the binomial coefficient and powers correctly.

**Step 2: Form an equation using the given coefficient**

$$\binom{7}{4} a^3 (2)^4 = 15\,120 \Rightarrow 35 \times a^3 \times 16 = 15\,120$$

$$560a^3 = 15\,120$$

- **[M1]** Equates their coefficient of $x^4$ to $15\,120$.

**Step 3: Solve for $a$**

$$a^3 = \frac{15\,120}{560} = 27 \Rightarrow a = 3$$

- **[A1]** $a = 3$.

### **Examiner Report 4**

This was generally well done, and most candidates scored full marks. A few candidates missed out the brackets around the $2x$ which usually led to $a = 6$. Several candidates made a mistake when finding the correct coefficient of $x^4$ and scored no marks. This was either because the power of $a$ was incorrect or the binomial coefficient was incorrect or occasionally completely missing. The most common error was having the wrong power of $a$, usually as $a^4$ or sometimes $a$ or $a^7$. Several candidates used $a^7(1 + 2x/a)^7$ and errors with the power of $a$ were also common with this method. Some candidates forgot to multiply by $a^7$ and some forgot to divide the $2x$ by $a$.

---
topic: "Exponentials and Logarithms"
subtopic: "Solving equations using logarithms"
---
### **Question 5**

The curve with equation $y = 3 \times 2^x$ meets the curve with equation $y = 15 - 2^{x+1}$ at the point $P$.

Find, using algebra, the exact $x$ coordinate of $P$. **(4)**

**(Total for Question 5 is 4 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Equate the two equations**

$$3 \times 2^x = 15 - 2^{x+1}$$

- **[M1]** Sets up the correct equation by equating the two expressions for $y$.

**Step 2: Express $2^{x+1}$ in terms of $2^x$**

$$3 \times 2^x = 15 - 2 \times 2^x$$

- **[M1]** Uses index laws to write $2^{x+1}$ as $2 \times 2^x$.

**Step 3: Solve for $2^x$**

$$5 \times 2^x = 15 \Rightarrow 2^x = 3$$

- **[A1]** Correctly simplifies to $2^x = 3$.

**Step 4: Take logarithms to find the exact value of $x$**

$$x = \log_2 3 \quad \left(\text{or } \frac{\ln 3}{\ln 2}\right)$$

- **[A1]** Correct exact value for $x$.

### **Examiner Report 5**

Nearly all candidates combined the equations correctly and gained the first mark. Many then struggled to progress further. A few made mistakes with the indices such as changing $3(2^x)$ into $6^x$ but the most common mistake was attempting to take logs incorrectly, usually $\log 15 - \log(2(2^x))$ or $\log(15 - 2^{x+1})$ being wrongly expanded to arrive at $\log 15 - (x + 1)\log 2$. Those who realised $2^{x+1} = 2(2^x)$ usually went on to solve correctly, giving a correct exact answer and therefore gain full marks. Candidates need to understand that seeing an equation with an unknown index does not automatically mean that it is a question involving logarithms.

---
topic: "Algebraic Methods"
subtopic: "Partial fractions"
---
### **Question 6**

**(a)** Given that

$$\frac{x^2 + 8x - 3}{x + 2} \equiv Ax + B + \frac{C}{x + 2} \quad x \in \mathbb{R}, x \neq -2$$

find the values of the constants $A$, $B$ and $C$. **(3)**

**(b)** Hence, using algebraic integration, find the exact value of

$$\int_{0}^{6} \frac{x^2 + 8x - 3}{x + 2} \, dx$$

giving your answer in the form $a + b\ln 2$ where $a$ and $b$ are integers to be found. **(4)**

**(Total for Question 6 is 7 marks)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Perform polynomial division or algebraic equivalence**

Using algebraic division:
$$(x^2 + 8x - 3) \div (x + 2) = x + 6 - \frac{15}{x + 2}$$

- **[M1]** Attempts algebraic division or equating coefficients with $Ax + B + \frac{C}{x+2}$.
- **[A1]** Obtains $A = 1$ and $B = 6$.
- **[A1]** Obtains $C = -15$.

#### **Part (b)**

**Step 2: Integrate the expanded expression**

$$\int_{0}^{6} \left(x + 6 - \frac{15}{x + 2}\right) dx = \left[ \frac{1}{2}x^2 + 6x - 15\ln|x + 2| \right]_{0}^{6}$$

- **[M1]** Integrates the expression correctly (at least two terms correct).
- **[A1]** Fully correct integration: $\frac{1}{2}x^2 + 6x - 15\ln(x + 2)$.

**Step 3: Substitute limits**

$$= \left( \frac{1}{2}(6)^2 + 6(6) - 15\ln 8 \right) - \left( 0 + 0 - 15\ln 2 \right)$$

$$= (18 + 36 - 15\ln 8) - (-15\ln 2) = 54 - 15\ln 8 + 15\ln 2$$

- **[M1]** Substitutes limits $6$ and $0$ correctly into their integrated expression.

**Step 4: Simplify using logarithm laws**

$$\ln 8 = \ln(2^3) = 3\ln 2$$
$$54 - 15(3\ln 2) + 15\ln 2 = 54 - 45\ln 2 + 15\ln 2 = 54 - 30\ln 2$$

- **[A1]** Correct exact integer values: $a = 54, b = -30$.

### **Examiner Report 6**

As would be hoped, most candidates scored some marks on this question. Many found part (a) quite straightforward and there were a good proportion of candidates who gained full marks. Candidates used various approaches to find $A$, $B$ and $C$, but the most common tended to be long division. There were a significant number of candidates who performed a completely correct division, but were unable to relate their answer to $A$, $B$ and $C$ and so lost the accuracy marks. There were many more errors seen when students attempted to multiply $(Ax + B)$ by $(x + 2)$ and compare the numerators, and when candidates selected values of $x$ to substitute in, any errors usually cost both accuracy marks. In comparison, those who used long division were more likely to make an error only in the remainder ($-3 - (+12) = 9$ being a common slip) and so secure the first accuracy mark.

In part (b), a pleasingly high number of candidates who had found values for $A$, $B$ and $C$ were able to successfully integrate to gain the first two marks, often aided by the follow through mark that was available. Candidates generally substituted the limits correctly and there was also a relatively good use of the laws of logarithms to combine their terms, albeit with occasional sign errors. The most common being "$-15\ln 8 - (-15\ln 2) = -15\ln 8 - 15\ln 2$". It was not uncommon for a candidate to then incorrectly combine this to get "$-15\ln \frac{8}{2}$". Most success was seen where candidates changed the $\ln(8)$ into $\ln(2^3)$ and then $3\ln(2)$ before combining the two $\ln 2$ terms.

---
topic: "Differentiation"
subtopic: "Stationary points"
---
### **Question 7**

**Figure 1** _(A sketch of the curve $C$ with equation $y = \frac{4x^2 + x}{2\sqrt{x}} - 4\ln x$, for $x > 0$, showing a minimum turning point $P$ in the first quadrant)._

```tikz
\begin{tikzpicture}[scale=0.9]
  \draw[->] (-0.5,0) -- (4,0) node[below] {$x$};
  \draw[->] (0,-0.5) -- (0,4) node[left] {$y$};
  \draw[domain=0.5:3.2, smooth, thick] plot (\x, {(4*(\x)^*(\x) + \x)/(2*sqrt(\x)) - 4*ln(\x)});
  \fill (1.5, 0.8) circle (1.6pt) node[below] {$P$};
  \node at (-0.3,-0.3) {$O$};
\end{tikzpicture}
```

Figure 1 shows a sketch of the curve $C$ with equation

$$y = \frac{4x^2 + x}{2\sqrt{x}} - 4\ln x \quad x > 0$$

**(a)** Show that

$$\frac{dy}{dx} = \frac{12x^2 + x - 16\sqrt{x}}{4x\sqrt{x}}$$

**(4)**

The point $P$, shown in Figure 1, is the minimum turning point on $C$.

**(b)** Show that the $x$ coordinate of $P$ is a solution of

$$x = \left(\frac{4}{3} - \frac{\sqrt{x}}{12}\right)^{\frac{2}{3}}$$

**(3)**

**(c)** Use the iteration formula

$$x_{n+1} = \left(\frac{4}{3} - \frac{\sqrt{x_n}}{12}\right)^{\frac{2}{3}} \quad \text{with } x_1 = 2$$

to find 
**(i)** the value of $x_2$ to $5$ decimal places,
**(ii)** the $x$ coordinate of $P$ to $5$ decimal places.

**(3)**

**(Total for Question 7 is 10 marks)**

### **Mark Scheme 7**

#### **Part (a)**

**Step 1: Simplify $y$ prior to differentiation**

$$y = \frac{4x^2}{2x^{\frac{1}{2}}} + \frac{x}{2x^{\frac{1}{2}}} - 4\ln x = 2x^{\frac{3}{2}} + \frac{1}{2}x^{\frac{1}{2}} - 4\ln x$$

- **[M1]** Splits and writes $y$ in index form ready for differentiation: $2x^{\frac{3}{2}} + \frac{1}{2}x^{\frac{1}{2}} - 4\ln x$.

**Step 2: Differentiate term by term**

$$\frac{dy}{dx} = 3x^{\frac{1}{2}} + \frac{1}{4}x^{-\frac{1}{2}} - \frac{4}{x}$$

- **[A1]** Correct differentiation of all terms.

**Step 3: Combine over a common denominator**

$$\frac{dy}{dx} = 3\sqrt{x} + \frac{1}{4\sqrt{x}} - \frac{4}{x} = \frac{12x(\sqrt{x}) + \sqrt{x} - 16\sqrt{x}}{4x\sqrt{x}} \quad \text{or equivalent}$$

$$\frac{dy}{dx} = \frac{12x^2 + x - 16\sqrt{x}}{4x\sqrt{x}}$$

- **[M1]** Collects terms over a common denominator $4x\sqrt{x}$ or $4x^{\frac{3}{2}}$.
- **[A1]** Fully correct proof to the given expression.

#### **Part (b)**

**Step 4: Set the derivative to zero and rearrange**

$$\frac{12x^2 + x - 16\sqrt{x}}{4x\sqrt{x}} = 0 \Rightarrow 12x^2 + x - 16\sqrt{x} = 0$$

$$12x^2 + x = 16\sqrt{x}$$

- **[M1]** Sets $\frac{dy}{dx} = 0$ and equates numerator to zero.

**Step 5: Rearrange to isolate $x^{\frac{3}{2}}$ or $x$**

$$12x^{\frac{3}{2}} + \sqrt{x} = 16 \Rightarrow 12x^{\frac{3}{2}} = 16 - \sqrt{x}$$

$$x^{\frac{3}{2}} = \frac{16 - \sqrt{x}}{12} = \frac{4}{3} - \frac{\sqrt{x}}{12}$$

- **[M1]** Divides by $12\sqrt{x}$ or rearranges algebraically towards the target form.

**Step 6: Raise to the power of $\frac{2}{3}$**

$$x = \left(\frac{4}{3} - \frac{\sqrt{x}}{12}\right)^{\frac{2}{3}}$$

- **[A1]** Completes the rearrangement to obtain the required form.

#### **Part (c)**

**Step 7: Calculate $x_2$**

$$x_2 = \left(\frac{4}{3} - \frac{\sqrt{2}}{12}\right)^{\frac{2}{3}} \approx 1.15651$$

- **[B1]** $1.15651$ (to 5 decimal places).

**Step 8: Perform further iterations to find $x$**

$$x_3 = 1.15850, \quad x_4 = 1.15841, \quad x_5 = 1.15842, \dots$$
$$x = 1.15842$$

- **[M1]** Attempts iteration process to sufficient decimal places.
- **[A1]** $1.15842$ (to 5 decimal places).

### **Examiner Report 7**

In part (a), most candidates used a correct method to differentiate, the majority using the quotient rule. A few applied the rule the wrong way round $(uv' - vu') / v^2$. Candidates who initially wrote the quotient as $2x^{\frac{3}{2}} + \frac{1}{2}x^{\frac{1}{2}}$ were often more successful with the differentiation. A few candidates forgot about the $4\ln x$ term but most dealt with this correctly. Errors from missing brackets or when simplifying their differentiated expression, in particular dealing with the powers, meant that many did not gain full marks in this part.

In part (b), although almost all candidates made $\frac{dy}{dx} = 0$ and reached $12x^2 + x - 16\sqrt{x} = 0$ the majority then failed to make progress and did not gain any marks. Several made no attempt to rearrange this equation and others made $x^2$, $x$ or $\sqrt{x}$ the subject but did not make the key step of dividing by $\sqrt{x}$ first.

Part (c) was generally well done, with most candidates getting part (i) correct. Some candidates left out part (ii) and a few made an error with their accuracy here, $1.15651$ and $1.1565$ being seen a few times.

---
topic: "Algebraic Methods"
subtopic: "The factor theorem"
---
### **Question 8**

A curve $C$ has equation $y = \mathrm{f}(x)$.

Given that
* $\mathrm{f}'(x) = 6x^2 + ax - 23$ where $a$ is a constant
* the $y$ intercept of $C$ is $-12$
* $(x + 4)$ is a factor of $\mathrm{f}(x)$

find, in simplest form, $\mathrm{f}(x)$. **(6)**

**(Total for Question 8 is 6 marks)**

### **Mark Scheme 8**

#### **Part (a)**

**Step 1: Integrate $\mathrm{f}'(x)$ to find $\mathrm{f}(x)$**

$$\mathrm{f}(x) = \int (6x^2 + ax - 23) \, dx = 2x^3 + \frac{1}{2}ax^2 - 23x + d$$

- **[M1]** Integrates the derivative with respect to $x$ (at least two powers of $x$ increased by 1).

**Step 2: Use the $y$-intercept to find $d$**

Since the $y$-intercept is $-12$, $\mathrm{f}(0) = -12 \Rightarrow d = -12$.

- **[B1]** Deduces that the constant of integration $d = -12$.

**Step 3: Use the factor theorem**

Since $(x + 4)$ is a factor, $\mathrm{f}(-4) = 0$.

$$2(-4)^3 + \frac{1}{2}a(-4)^2 - 23(-4) - 12 = 0$$

$$-128 + 8a + 92 - 12 = 0$$

- **[M1]** Applies $\mathrm{f}(-4) = 0$ to the integrated expression.

**Step 4: Solve for $a$**

$$8a - 48 = 0 \Rightarrow a = 6$$

- **[A1]** Obtains $a = 6$.

**Step 5: Write the complete function $\mathrm{f}(x)$**

$$\mathrm{f}(x) = 2x^3 + 3x^2 - 23x - 12$$

- **[A1ft]** Fully correct function with their value of $a$ and $d$.

### **Examiner Report 8**

This question was very well answered, with many candidates gaining full marks. Candidates who used the factor theorem (solving $\mathrm{f}(-4) = 0$ to find $a = 6$, as in the main scheme) were more successful than those who attempted long division, which invariably went wrong and in some cases resulted in a remainder containing '$x$'. Typical mistakes included: solving $\mathrm{f}(4) = 0$ instead of $\mathrm{f}(-4) = 0$ (usually forfeiting 2 marks), mistakes in integrating the '$ax$' term and forgetting the constant of integration or adding it in at the end. It was noted that some candidates were able to score full marks in this question without explicitly finding $a$ i.e. by considering $(x + 4)(2x^2 \dots - 3)$ and deducing the $x$ coefficient of the quadratic directly.

---
topic: "Exponentials and Logarithms"
subtopic: "Exponential modelling"
---
### **Question 9**

A quantity of ethanol was heated until it reached boiling point.

The temperature of the ethanol, $\theta\,^\circ\text{C}$, at time $t$ seconds after heating began, is modelled by the equation

$$\theta = A - Be^{-0.07t}$$

where $A$ and $B$ are positive constants.

Given that
* the initial temperature of the ethanol was $18\,^\circ\text{C}$
* after $10$ seconds the temperature of the ethanol was $44\,^\circ\text{C}$

**(a)** find a complete equation for the model, giving the values of $A$ and $B$ to $3$ significant figures. **(4)**

Ethanol has a boiling point of approximately $78\,^\circ\text{C}$.

**(b)** Use this information to evaluate the model. **(2)**

**(Total for Question 9 is 6 marks)**

### **Mark Scheme 9**

#### **Part (a)**

**Step 1: Set up equations using the given conditions**

When $t = 0, \theta = 18$:
$$18 = A - B$$

When $t = 10, \theta = 44$:
$$44 = A - Be^{-0.7}$$

- **[M1]** Substitutes $t = 0, \theta = 18$ and $t = 10, \theta = 44$ into the model to form simultaneous equations.

**Step 2: Solve for $B$ and $A$**

From equation 1: $B = A - 18$. Substitute into equation 2:
$$44 = A - (A - 18)e^{-0.7} \Rightarrow 44 = A(1 - e^{-0.7}) + 18e^{-0.7}$$

$$A - (A - 18)e^{-0.7} = 44 \Rightarrow A(1 - e^{-0.7}) = 44 - 18e^{-0.7}$$

$$A = \frac{44 - 18e^{-0.7}}{1 - e^{-0.7}} \approx 69.614\dots$$

$$B = A - 18 \approx 51.614\dots$$

- **[M1]** Solves the simultaneous equations to find $A$ and $B$.
- **[A1]** Correct values rounded to 3 s.f.: $A = 69.6, B = 51.6$.

**Step 3: Write down the complete model equation**

$$\theta = 69.6 - 51.6e^{-0.07t}$$

- **[A1]** States the complete equation with numerical values of $A$ and $B$.

#### **Part (b)**

**Step 4: Evaluate the model against the boiling point**

As $t \to \infty$, $\theta \to A = 69.6^\circ\text{C}$ (or maximum temperature is $69.6^\circ\text{C}$). Since this is significantly lower than $78^\circ\text{C}$, the model is inadequate/inappropriate.

- **[B1]** Identifies that the asymptotic/maximum temperature is approximately $69.6^\circ\text{C}$.
- **[B1]** Concludes that the model is unsuitable because this maximum temperature is well below the boiling point of $78^\circ\text{C}$.

### **Examiner Report 9**

This question proved to be quite challenging for many candidates and awarding full marks was rare. Nonetheless, most candidates recognised the need to set up simultaneous equations in $A$ and $B$ and were often able to use the information provided in the question to establish at least one equation linking $A$ and $B$. Usually problems arose initially with the $18 = A - Be^0$ which was frequently incorrectly simplified to $18 = A$ or sometimes $18 = A - 1$. Indeed, some candidates assumed immediately that $A = \text{initial temperature} = 18$ as is sometimes the case in modelling questions. Such errors proved costly as candidates were then limited to one mark from four in part (a). It was pleasing to see that most candidates who managed to set up the two equations correctly were often unphased by the presence of $e^{-0.7}$ as a coefficient of $B$. Often this was rewritten as a decimal approximation before solving for $B$. This was acceptable although some candidates did not provide sufficiently accurate approximations and so lost a mark for values of $A$ and $B$ that were not accurate to 3sf ($51.7$ and $69.7$ were sometimes seen). Candidates also lost a mark here for being too accurate and giving their final values of $A$ and $B$ to 3dp for example. Candidates should be advised to check the question carefully for the required degree of accuracy. Unfortunately, it was quite common for candidates to find correct values for $A$ and $B$ but then fail to state the equation of the model in full which led to the loss of one mark.

Part (b) was quite discriminating. Occasionally, candidates noted that the maximum temperature according to the model is $69.6^\circ\text{C}$ but the most common approach taken by candidates was to set $\theta(t) = 78$ and attempt to solve for $t$. Some candidates were unable to solve the equation but allowed their work to peter out without comment. However, a good number of candidates correctly noted that a solution was not possible - recognising that the model would not reach the boiling point of ethanol which was sufficient for one mark. It was also common however to see minus signs conveniently disappear in order to obtain a solution for $t$ at all costs. Such candidates usually obtained $t = 25.9$ and concluded that the model would be appropriate up to this time; or obtained $t = -25.9$ noting that 'time cannot be negative'. A significant number of responses gave general comments relating to the model being inappropriate once ethanol's boiling point was reached - such responses were not creditworthy. Unfortunately, errors in the calculation of $A$ and $B$ from part (a) sometimes resulted in a version of $\theta(t) = 78$ which could legitimately be solved which precluded the marks in (b). It was extremely rare to award the second mark in part (b) as candidates almost always failed to acknowledge that the model was inappropriate because the maximum value of $69.6^\circ\text{C}$ is significantly lower than the boiling point of $78^\circ\text{C}$.

---
topic: "Trigonometry and Modelling"
subtopic: "Double-angle formulae"
---
### **Question 10**

In this question you must show all stages of your working.
Solutions relying entirely on calculator technology are not acceptable.

**(a)** Show that

$$\cos 3A \equiv 4\cos^3 A - 3\cos A$$

**(4)**

**(b)** Hence solve, for $-90^\circ \leqslant x \leqslant 180^\circ$, the equation

$$1 - \cos 3x = \sin^2 x$$

**(4)**

**(Total for Question 10 is 8 marks)**

### **Mark Scheme 10**

#### **Part (a)**

**Step 1: Write $\cos 3A$ as $\cos(2A + A)$ and apply the addition formula**

$$\cos 3A = \cos(2A + A) = \cos 2A \cos A - \sin 2A \sin A$$

- **[M1]** Uses compound angle formula for $\cos(2A + A)$.

**Step 2: Substitute double angle identities**

$$= (2\cos^2 A - 1)\cos A - (2\sin A \cos A)\sin A$$

$$= (2\cos^2 A - 1)\cos A - 2\sin^2 A \cos A$$

- **[M1]** Uses $\cos 2A = 2\cos^2 A - 1$ (or equivalent) and $\sin 2A = 2\sin A \cos A$.

**Step 3: Convert remaining sine terms to cosine**

$$= 2\cos^3 A - \cos A - 2(1 - \cos^2 A)\cos A$$

- **[M1]** Uses $\sin^2 A = 1 - \cos^2 A$ to express everything in terms of $\cos A$.

**Step 4: Expand and simplify to the target expression**

$$= 2\cos^3 A - \cos A - 2\cos A + 2\cos^3 A = 4\cos^3 A - 3\cos A$$

- **[A1]** Correctly reaches the printed result with clear algebraic steps.

#### **Part (b)**

**Step 5: Substitute the identity from part (a) into the equation**

$$1 - (4\cos^3 x - 3\cos x) = 1 - \cos^2 x$$

- **[M1]** Substitutes $\cos 3x = 4\cos^3 x - 3\cos x$ and $\sin^2 x = 1 - \cos^2 x$.

**Step 6: Simplify to form a polynomial in $\cos x$**

$$1 - 4\cos^3 x + 3\cos x = 1 - \cos^2 x$$

$$4\cos^3 x - \cos^2 x - 3\cos x = 0$$

- **[A1]** Correct cubic equation in $\cos x$.

**Step 7: Factorise the cubic equation**

$$\cos x (4\cos^2 x - \cos x - 3) = 0$$

$$\cos x (4\cos x + 3)(\cos x - 1) = 0$$

- **[M1]** Factorises or solves the resulting cubic equation.

**Step 8: Find all solutions in the given range**

$$\cos x = 0 \Rightarrow x = -90^\circ, 90^\circ$$
$$\cos x = -\frac{3}{4} \Rightarrow x = 138.6^\circ \text{ (or } -138.6^\circ \text{ outside range)}$$
$$\cos x = 1 \Rightarrow x = 0^\circ$$

Valid solutions: $x = -90^\circ, 0^\circ, 90^\circ, 138.6^\circ$

- **[A1]** All correct values: $-90^\circ, 0^\circ, 90^\circ, 139^\circ$ (accept $138.6^\circ$, omit $180^\circ$ if included, include $-90^\circ$).

### **Examiner Report 10**

Many students were able to get started in part (a) with correct use of $\cos(2A + A)$ alongside the addition formula. Candidates who managed this, regularly went on to apply the double angle formulae correctly to achieve an expression in $\cos A$ only. Often circuitous routes were taken, most notably with the use of $\cos 2A = \cos^2 A - \sin^2 A$ and then making a second substitution for $\sin^2 A$ (this sometimes resulted in bracketing and/or sign errors). A small number of candidates added a proof for the double angle formulae from the addition formulae even though this was unnecessary. A high proportion of students who managed to get the first mark went on to get at least 3 if not 4 marks in this part of the question. It was very much an all or nothing question with many only getting the first mark. A significant number presented their work in a way that was sometimes difficult to follow even if they did manage to score full marks.

In part (b), it was common for candidates to achieve no marks for part (a) and then full marks for this part. Most of the students gained the first method mark and managed to produce an equation in $\cos x$ only. Mistakes were made with signs and brackets. In particular, candidates failed to write brackets around $4\cos^3 x - 3\cos x$ and hence would obtain an incorrect quadratic equation to solve. Several candidates 'solved' the cubic/quadratic equation using the polynomial equation function on their calculator and did not show any evidence of their working. Some incorrect equations led to complex solutions but most of these candidates still did not realise that they had made an error. A large number of candidates divided by $\cos x$ to simplify their expression but they failed to recognise this lost a solution and therefore were not awarded the final mark. A small number of candidates failed to gain any marks on this part as they replaced the right hand side with $\cos x$ but left the left hand side with $\cos 3x$ and then proceeded to treat this as a cubic/quadratic. When candidates had identified the correct equation and solutions they were very good at finding all the solutions in the range. A large number who did get solutions did not include $-90^\circ$ or included $180^\circ$ and therefore lost the final mark.

---
topic: "Functions and Graphs"
subtopic: "The modulus function"
---
### **Question 11**

**Figure 2** _(A sketch of the V-shaped modulus graph $y = 2|x + 4| - 5$, with its vertex labelled $P$ in the third quadrant below the x-axis)._

```tikz
\begin{tikzpicture}[scale=0.9]
  \draw[->] (-8,0) -- (2,0) node[below] {$x$};
  \draw[->] (-4,-6) -- (-4,4) node[left] {$y$};
  \draw[thick, domain=-6.5:-1.5] plot (\x, {2*abs(\x + 4) - 5});
  \fill (-4,-5) circle (1.6pt) node[below left] {$P$};
  \node at (-3.7,-0.3) {$O$};
\end{tikzpicture}
```

Figure 2 shows a sketch of the graph with equation

$$y = 2|x + 4| - 5$$

The vertex of the graph is at the point $P$, shown in Figure 2.

**(a)** Find the coordinates of $P$. **(2)**

**(b)** Solve the equation

$$3x + 40 = 2|x + 4| - 5$$

**(2)**

A line $l$ has equation $y = ax$, where $a$ is a constant.

Given that $l$ intersects $y = 2|x + 4| - 5$ at least once,

**(c)** find the range of possible values of $a$, writing your answer in set notation. **(3)**

**(Total for Question 11 is 7 marks)**

### **Mark Scheme 11**

#### **Part (a)**

**Step 1: Determine coordinates of vertex $P$**

$x + 0 = 0 \Rightarrow x = -4$, $y = -5$. So $P = (-4, -5)$.

- **[B1]** Correct $x$-coordinate ($-4$).
- **[B1]** Correct $y$-coordinate ($-5$).

#### **Part (b)**

**Step 2: Solve the modulus equation**

$$3x + 45 = 2(x + 4) \quad \text{for } x \geqslant -4$$
$$3x + 45 = 2x + 8 \Rightarrow x = -37 \text{ (rejected as } x \geqslant -4\text{)}$$

For $x < -4$:
$$3x + 45 = 2(-(x + 4))$$
$$3x + 45 = -2x - 8 \Rightarrow 5x = -53 \Rightarrow x = -10.6$$

- **[M1]** Considers the negative branch or sets up the correct linear equation for the valid region.
- **[A1]** $x = -10.6$ (or $-\frac{53}{5}$) only.

#### **Part (c)**

**Step 3: Determine the gradient conditions for intersection**

Gradient of the left-hand ray of $y = 2|x + 4| - 5$ is $-2$.
Gradient of the right-hand ray of $y = 2|x + 4| - 5$ is $2$.
Line $l$ passes through $(0,0)$. For intersection with the V-graph:
The gradient $a$ must be less than or equal to the left ray gradient, or greater than or equal to the right ray gradient? Let's check passing through $P(-4, -5)$: slope of line through origin and $P$ is $\frac{-5}{-4} = \frac{5}{4}$.
Since the V-graph opens upwards, the line $l$ of slope $a$ must have a slope greater than the slope of the right branch ($a \ge 2$), or steeper than the line connecting origin to $P$ ($a \le \frac{5}{4}$? Wait, let's look at standard solutions: $a \le \frac{5}{4}$ or $a \ge 2$).

- **[B1]** Identifies $a \geqslant 2$ (or equivalent).
- **[M1]** Finds gradient through vertex $P(-4, -5)$, giving $\frac{5}{4}$.
- **[A1]** Correct set notation: $\left\{a : a \leqslant \frac{5}{4}\right\} \cup \{a : a \geqslant 2\}$ (or $(-\infty, \frac{5}{4}] \cup [2, \infty)$).

### **Examiner Report 11**

Part (a) of this question was generally well answered, with most candidates being able locate $P$ correctly. A few candidates launched into some lengthy algebra, in some cases resulting in values for $x$ and $y$ bearing no relation to the position of $P$ on the diagram.

Answers to part (b) from this cohort of candidates were very disappointing and displayed an overreliance on algebra and poor understanding of modulus graphs. Very few candidates identified $x = -10.6$ as the solution to the equation. Instead most answers wrote down the solution to $3x + 40 = 2(x + 4) - 5$ $\{x = -37\}$ as well as $x = -10.6$, scoring M1A0. A few candidates used a calculator to directly write down the correct value of $x$ to gain both marks – perhaps not a bad strategy for students who are weak at modulus graphs. A simple check on a calculator would also have established that only $x = -10.6$ was a solution to the printed equation.

Part (c) of this question was one of the most challenging parts of this paper, with hardly any candidates gaining all 3 marks. Candidates seemed unable to 'visualise' the question and see directly that there would be an intersection if $a$ was greater than 2, so the B mark was hardly ever gained (and consequently the A mark was immediately lost). The M mark for considering $P$ and attempting $a = 5/4$ was occasionally gained, although as above this often entailed long winded algebraic methods e.g. solving simultaneous equations to find $a$.

---
topic: "Integration"
subtopic: "Areas under curves"
---
### **Question 12**

**Figure 3** _(A sketch of the region R bounded by a parametric curve and the x-axis in the first quadrant)._

```tikz
\begin{tikzpicture}[scale=0.9]
  \draw[->] (-0.5,0) -- (6.5,0) node[below] {$x$};
  \draw[->] (0,-0.5) -- (0,4) node[left] {$y$};
  \draw[domain=0:3.1415, smooth, thick] plot ({6*sin(\x r)}, {5*sin(2*\x r)});
  \node at (3,2) {$R$};
  \node at (-0.3,-0.3) {$O$};
\end{tikzpicture}
```

The curve shown in Figure 3 has parametric equations

$$x = 6\sin t, \quad y = 5\sin 2t, \quad 0 \leqslant t \leqslant \frac{\pi}{2}$$

The region $R$, shown shaded in Figure 3, is bounded by the curve and the $x$-axis.

**(a)** 
**(i)** Show that the area of $R$ is given by

$$\int_{0}^{\frac{\pi}{2}} 60\sin t \cos^2 t \, dt$$

**(3)**

**(ii)** Hence show, by algebraic integration, that the area of $R$ is exactly $20$.

**(3)**

**Figure 4** _(A sketch of the same curve showing a vertical line of height 4.2 inside region R, with a horizontal walkway MN across the top)._

```tikz
\begin{tikzpicture}[scale=0.9]
  \draw[->] (-0.5,0) -- (6.5,0) node[below] {$x$};
  \draw[->] (0,-0.5) -- (0,4.5) node[left] {$y$};
  \draw[domain=0:3.1415, smooth, thick] plot ({6*sin(\x r)}, {5*sin(2*\x r)});
  \draw[dashed] (3.5,0) -- (3.5,3.3);
  \draw[<->] (2.2,3.3) -- (4.8,3.3) node[midway, above] {$MN$};
  \draw[<->] (3.6,0) -- (3.6,3.3) node[midway, right] {$4.2$};
  \fill (2.2,3.3) circle (1.2pt) node[above left] {$M$};
  \fill (4.8,3.3) circle (1.2pt) node[above right] {$N$};
  \node at (-0.3,-0.3) {$O$};
\end{tikzpicture}
```

Part of the curve is used to model the profile of a small dam, shown shaded in Figure 4.
Using the model and given that
* $x$ and $y$ are in metres
* the vertical wall of the dam is $4.2$ metres high
* there is a horizontal walkway of width $MN$ along the top of the dam

**(b)** calculate the width of the walkway. **(5)**

**(Total for Question 12 is 11 marks)**

### **Mark Scheme 12**

#### **Part (a)**

**Step 1: Set up the area integral using parametric equations**

$$\text{Area} = \int y \frac{dx}{dt} \, dt$$

$$\frac{dx}{dt} = 6\cos t$$

$$\text{Area} = \int_{0}^{\frac{\pi}{2}} (5\sin 2t)(6\cos t) \, dt$$

- **[M1]** States the formula $\text{Area} = \int y \frac{dx}{dt} \, dt$ and attempts $\frac{dx}{dt}$.

**Step 2: Use double angle formula to simplify the integrand**

$$\sin 2t = 2\sin t \cos t$$

$$\text{Area} = \int_{0}^{\frac{\pi}{2}} (5(2\sin t \cos t))(6\cos t) \, dt = \int_{0}^{\frac{\pi}{2}} 60\sin t \cos^2 t \, dt$$

- **[M1]** Uses the double angle identity $\sin 2t = 2\sin t \cos t$.
- **[A1]** Correctly obtains the printed integral expression.

**Step 3: Integrate algebraically**

$$\int_{0}^{\frac{\pi}{2}} 60\sin t \cos^2 t \, dt = \left[ -20\cos^3 t \right]_{0}^{\frac{\pi}{2}}$$

- **[M1]** Integrates $60\sin t \cos^2 t$ to obtain $-20\cos^3 t$ (or uses substitution $u = \cos t$).

**Step 4: Evaluate with limits**

$$= (-20(0)^3) - (-20(1)^3) = 0 - (-20) = 20$$

- **[A1]** Shows correct substitution of limits resulting in exactly $20$ (with intermediate steps shown).

#### **Part (b)**

**Step 5: Set $y = 4.2$ to find the value of $t$**

$$5\sin 2t = 4.2 \Rightarrow \sin 2t = 0.84$$

$$2t = \arcsin(0.84) \approx 0.9974 \text{ rad} \quad \text{or } 2t = \pi - 0.9974 = 2.1442 \text{ rad}$$

$$t_1 \approx 0.4987, \quad t_2 \approx 1.0721$$

- **[M1]** Sets $5\sin 2t = 4.2$ and solves for $t$ to find two values.
- **[A1]** Correct values for $t$ (or $2t$).

**Step 6: Find the corresponding $x$ coordinates for $M$ and $N$**

$$x_1 = 6\sin(0.4987) \approx 2.859$$
$$x_2 = 6\sin(1.0721) \approx 5.395$$

- **[M1]** Substitutes their values of $t$ into $x = 6\sin t$ to find the two $x$-coordinates.

**Step 7: Calculate the width $MN$**

$$\text{Width} = x_2 - x_1 = 5.3948 - 2.8587 = 2.54 \text{ metres}$$

- **[A1]** Correct width to 3 significant figures ($2.54$).

### **Examiner Report 12**

Many candidates left the entire question or parts of this question completely blank and clearly found it difficult to access the content being assessed here, perhaps due to a lack of familiarity with integration using parametric equations. Many tried to establish the Cartesian equation to answer various parts. That said, there were many candidates who provided clear and concise solutions to each part.

In part (a)(i), most candidates recalled the formula for integrating parametric equations and knew to find $\frac{dx}{dt}$. Awareness of the double angle formula for $\sin 2t$ was good. The main problem caused for these candidates was a lack of "$dt$" throughout their work, and only included this in the final line, losing the final accuracy mark. There was a significant proportion of candidates who attempted some differentiation using the chain rule: $\frac{dy}{dx} = \frac{dy}{dt} \times \frac{dt}{dx}$, scoring no marks.

In part (a)(ii), many knew that the integral was a multiple of $\cos^3 t$ but had trouble getting to the printed answer of 20 with correct steps. As the answer was given, it was a requirement to see the limits calculated separately as $0 - (-20) = 20$. Integration by parts was a common approach for unsuccessful candidates, while others attempted to use a substitution, often not using the necessary $u = \cos x$. Those candidates with an understanding of the integration of $\mathrm{f}'(x)[\mathrm{f}(x)]^n$ were generally very successful here. Some lost the penultimate accuracy mark usually due to a sign error.

In part (b) many candidates who had found part (a) difficult gave up and lost the opportunity of scoring some easier marks. Many candidates who scored no marks elsewhere were still able to access at least the first two marks in part (b) by setting $\sin 2t = \frac{4.2}{5}$ and solving, frequently getting at least one correct angle; but too many of these found their second value of $t$ by subtracting their first value from $\pi$ instead of calculating $\pi - \sin^{-1}(0.84)$ before dividing by $2$. The following mark was for finding two values of $x$, but many simply substituted their first value in to find $x$, thinking that this gave them the width of the walkway. Too many marks were lost by approximating too soon and hence not having values with the required accuracy. A few lost the last mark because they omitted the units.

---
topic: "Functions and Graphs"
subtopic: "Functions and mappings"
---
### **Question 13**

The function $\mathrm{g}$ is defined by

$$\mathrm{g}(x) = \frac{3\ln(x) - 7}{\ln(x) - 2} \quad x > 0, \quad x \neq k$$

where $k$ is a constant.

**(a)** Deduce the value of $k$. **(1)**

**(b)** Prove that

$$\mathrm{g}'(x) > 0$$

for all values of $x$ in the domain of $\mathrm{g}$. **(3)**

**(c)** Find the range of values of $a$ for which

$$\mathrm{g}(a) > 0$$

**(2)**

**(Total for Question 13 is 6 marks)**

### **Mark Scheme 13**

#### **Part (a)**

**Step 1: Find the excluded value $k$ from the denominator**

$$\ln(x) - 2 = 0 \Rightarrow \ln(x) = 2 \Rightarrow x = e^2$$
So $k = e^2$.

- **[B1]** $k = e^2$ (or $\exp(2)$).

#### **Part (b)**

**Step 2: Differentiate $\mathrm{g}(x)$ using the quotient rule**

Let $u = 3\ln(x) - 7 \Rightarrow u' = \frac{3}{x}$
Let $v = \ln(x) - 2 \Rightarrow v' = \frac{1}{x}$

$$\mathrm{g}'(x) = \frac{\left(\frac{3}{x}\right)(\ln(x) - 2) - (3\ln(x) - 7)\left(\frac{1}{x}\right)}{(\ln(x) - 2)^2}$$

- **[M1]** Uses the quotient rule correctly.

**Step 3: Simplify the numerator**

$$\mathrm{g}'(x) = \frac{\frac{3}{x}\ln(x) - \frac{6}{x} - \frac{3}{x}\ln(x) + \frac{7}{x}}{(\ln(x) - 2)^2} = \frac{1}{x(\ln(x) - 2)^2}$$

- **[A1]** Correct simplified derivative: $\frac{1}{x(\ln(x) - 2)^2}$.

**Step 4: Prove $\mathrm{g}'(x) > 0$**

For all $x$ in the domain ($x > 0$), $x > 0$ and $(\ln(x) - 2)^2 > 0$ (since the denominator is squared and $x \neq e^2$). Thus $\mathrm{g}'(x) > 0$.

- **[A1]** Explains clearly that both numerator and denominator are positive for all valid $x$, hence $\mathrm{g}'(x) > 0$.

#### **Part (c)**

**Step 5: Solve $\mathrm{g}(a) > 0$**

$$\frac{3\ln(a) - 7}{\ln(a) - 2} > 0$$

Critical values at $\ln(a) = \frac{7}{3} \Rightarrow a = e^{\frac{7}{3}}$ and $\ln(a) = 2 \Rightarrow a = e^2$.

Solving the inequality gives $0 < a < e^2$ or $a > e^{\frac{7}{3}}$.

- **[M1]** Finds the critical values $e^2$ and $e^{\frac{7}{3}}$ (or $\frac{7}{3}$ and $2$ for $\ln a$).
- **[A1]** Correct range: $0 < a < e^2 \text{ or } a > e^{\frac{7}{3}}$ (or in set notation).

### **Examiner Report 13**

Part (a) was often answered correctly and candidates knew to set the denominator equal to zero and solve to obtain a value for $k$. Unfortunately, candidates sometimes left their answer as $x = e^2$ which was, of course, incorrect. Some candidates gave the inexact answer of $k = 7.39$ which was condoned. Commonly seen incorrect answers included $k = 0$, or $k = 1$. A number of candidates gave the value $k = 3$ suggesting that the expression in the denominator had been incorrectly interpreted as $\ln(x - 2)$ rather than $\ln(x) - 2$ as was stated. A small number of candidates wrote "there is no $k$ in the question" perhaps failing to spot its presence in the domain.

Part (b) was attempted by most candidates although it was not uncommon to see attempts to find the inverse of $\mathrm{g}(x)$ instead of differentiating. The differentiation in part (b) was however correctly carried out by many candidates, with the majority using the quotient rule. Those who stated the correct formula and the individual components of $u$, $v$, $u'$ and $v'$ were often more successful. A few used $\left(\frac{dy}{dx}\right)^2$ instead of $v^2$ in the denominator, while others made slips on expanding the bracket $3(\ln(x) - 2)$. Some attempted the product rule, usually with less success.

Many candidates did not attempt to simplify the numerator of $\mathrm{g}'(x)$. Often those that did made slips and it was frustrating to see candidates losing marks due to missing brackets and sign errors when expanding. It was common to see numerators incorrectly simplified to $\frac{-13}{x}$ or $\frac{5}{x}$ although many did manage the correct simplification to $\frac{1}{x}$. Some candidates unnecessarily expanded the denominator, sometimes incorrectly writing $\ln(x^2)$ instead of $(\ln x)^2$. Candidates who managed to correctly simplify their expression for $\mathrm{g}'(x)$ argued correctly why $\mathrm{g}'(x) > 0$ for all $x$ in the domain, but some simply stated this with no reason or gave an incomplete argument of "$x > 0$ so $\mathrm{g}'(x) > 0$" and lost the final mark in this part.

In part (c), most candidates only gained one out of two available marks as they usually considered only the set of values of $a$ for which the numerator is positive by solving $3\ln a - 7 = 0$ to obtain $a > e^{\frac{7}{3}}$. Usually no consideration was given to the case where the numerator and denominator are both negative and the few that did solve $\ln a = 2$ usually failed to state $0 < a < e^2$.

---
topic: "Circles"
subtopic: "Equation of a circle"
---
### **Question 14**

A circle $C$ with radius $r$
* lies only in the $1$st quadrant
* touches the $x$-axis and touches the $y$-axis

The line $l$ has equation $2x + y = 12$

**(a)** Show that the $x$ coordinates of the points of intersection of $l$ with $C$ satisfy

$$5x^2 + (2r - 48)x + (r^2 - 24r + 144) = 0$$

**(3)**

Given also that $l$ is a tangent to $C$,

**(b)** find the two possible values of $r$, giving your answers as fully simplified surds. **(4)**

**(Total for Question 14 is 7 marks)**

### **Mark Scheme 14**

#### **Part (a)**

**Step 1: Write down the equation of the circle**

Since the circle touches both axes and lies in the 1st quadrant, its centre is $(r, r)$ and its radius is $r$.
$$(x - r)^2 + (y - r)^2 = r^2$$

- **[B1]** States the correct equation of the circle: $(x - r)^2 + (y - r)^2 = r^2$.

**Step 2: Substitute the equation of the line into the circle equation**

From $2x + y = 12 \Rightarrow y = 12 - 2x$.
$$(x - r)^2 + (12 - 2x - r)^2 = r^2$$

- **[M1]** Eliminates $y$ by substituting $y = 12 - 2x$ into the circle equation.

**Step 3: Expand and rearrange to the required form**

$x^2 - 2rx + r^2 + (144 - 48x - 24r + 4x^2 + 4rx + r^2) = r^2$

$$5x^2 + (-2r - 48 + 4r)x + (r^2 + 144 - 24r) = 0$$

$$5x^2 + (2r - 48)x + (r^2 - 24r + 144) = 0$$

- **[A1]** Correctly expands and collects terms to obtain the printed quadratic equation.

#### **Part (b)**

**Step 4: Use the condition for tangency (discriminant $\Delta = 0$)**

$$b^2 - 4ac = 0$$
$$(2r - 48)^2 - 4(5)(r^2 - 24r + 144) = 0$$

- **[M1]** Sets the discriminant of the quadratic to zero.

**Step 5: Expand the discriminant equation**

$$4r^2 - 192r + 2304 - 20(r^2 - 24r + 144) = 0$$

$$4r^2 - 192r + 2304 - 20r^2 + 480r - 2880 = 0$$

$$-16r^2 + 288r - 576 = 0$$

$$16r^2 - 288r + 576 = 0 \Rightarrow r^2 - 18r + 36 = 0$$

- **[A1]** Simplifies to a correct quadratic in $r$ (e.g., $r^2 - 18r + 36 = 0$).

**Step 6: Solve for $r$ using the quadratic formula**

$$r = \frac{18 \pm \sqrt{(-18)^2 - 4(1)(36)}}{2(1)} = \frac{18 \pm \sqrt{324 - 144}}{2} = \frac{18 \pm \sqrt{180}}{2}$$

$$r = \frac{18 \pm 6\sqrt{5}}{2} = 9 \pm 3\sqrt{5}$$

- **[A1]** Both exact surd values: $9 + 3\sqrt{5}$ and $9 - 3\sqrt{5}$.

### **Examiner Report 14**

Part (a) presented some thinking challenges for many candidates, in particular spotting that $a = b = r$ in their equation for the circle. About half of the candidates were not able to deduce the correct equation of the circle. The most commonly seen incorrect equations were $x^2 + y^2 = r^2$, $(x + r)^2 + (y + r)^2 = r^2$ and $(x \pm a)^2 + (y \pm b)^2 = r^2$. Some of these candidates managed to gain the method mark for using $y = 12 - 2x$, but a disappointingly high number didn't progress. Relatively few candidates who initially used $a$ and $b$, correctly replaced them with $r$ to attain at least one mark. Some candidates tried to use a sketch to help them. This did allow some to identify the centre as $(r, r)$, but many put the circle in the wrong quadrant and proceeded to use $(r, -r)$ or $(-r, r)$. The majority of candidates who gained the B1 and M1 expanded their expressions correctly to give the correct equation and attain the A1, although the algebra involved in squaring the 3-term expression $(r^2 - 24r + 144)$ was not always carried out correctly. Candidates were generally more successful when they expanded $(y - r)^2$ first before substituting $y = 12 - 2x$.

Part (b) proved to be more accessible to most candidates. Many recognised the need to use the discriminant and equate to zero, though poor algebraic manipulation often cost them the accuracy marks. Almost all candidates used a calculator to solve the quadratic, though there were examples of the quadratic formula being used, mainly correctly. A small number resorted to calculus to find a gradient, but very few successfully attempted to differentiate their equation and set the gradient to $-2$. A few tried to use the idea of gradient or even equate the equation with $12 - 2x$.

---
topic: "Sequences and Series"
subtopic: "Geometric series"
---
### **Question 15**

In this question you must show all stages of your working.
Solutions relying entirely on calculator technology are not acceptable.

A geometric series has common ratio $r$ and first term $a$.
Given $r \neq 1$ and $a \neq 0$

**(a)** prove that

$$S_n = \frac{a(1 - r^n)}{1 - r}$$

**(4)**

Given also that $S_{10}$ is four times $S_5$

**(b)** find the exact value of $r$. **(4)**

**(Total for Question 15 is 8 marks)**

### **Mark Scheme 15**

#### **Part (a)**

**Step 1: Write out the sum of the first $n$ terms**

$$S_n = a + ar + ar^2 + \dots + ar^{n-1}$$

- **[B1]** States the sum as a series: $S_n = a + ar + ar^2 + \dots + ar^{n-1}$.

**Step 2: Multiply by $r$ and subtract**

$$rS_n = ar + ar^2 + \dots + ar^{n-1} + ar^n$$

$$S_n - rS_n = a - ar^n$$

- **[M1]** Multiplies the series by $r$ and sets up the subtraction $S_n - rS_n$.

**Step 3: Factorise and rearrange**

$$S_n(1 - r) = a(1 - r^n)$$

$$S_n = \frac{a(1 - r^n)}{1 - r}$$

- **[A1]** Completes the algebraic proof clearly and rigorously.

#### **Part (b)**

**Step 4: Set up equation using $S_{10} = 4S_5$**

$$\frac{a(1 - r^{10})}{1 - r} = 4 \left( \frac{a(1 - r^5)}{1 - r} \right)$$

- **[M1]** Sets up the equation $\frac{a(1 - r^{10})}{1 - r} = 4 \frac{a(1 - r^5)}{1 - r}$.

**Step 5: Cancel $a$ and $(1-r)$ and use difference of two squares**

$$1 - r^{10} = 4(1 - r^5)$$
$$(1 - r^5)(1 + r^5) = 4(1 - r^5)$$

- **[M1]** Cancels common terms and factorises $1 - r^{10}$ as $(1 - r^5)(1 + r^5)$ (or substitutes $u = r^5$).

**Step 6: Solve for $r^5$**

Since $r \neq 1$, $1 - r^5 \neq 0$, so:
$$1 + r^5 = 4 \Rightarrow r^5 = 3$$

- **[A1]** Obtains $r^5 = 3$.

**Step 7: Find the exact value of $r$**

$$r = \sqrt[5]{3} \quad (\text{or } 3^{\frac{1}{5}})$$

- **[A1]** $r = \sqrt[5]{3}$.

### **Examiner Report 15**

A number of the responses were completely blank suggesting perhaps that candidates had run out of time to complete this question. In part (a), a very high proportion of the candidates had some idea what the layout of the proof looked like yet only around 50% were able to complete it accurately and rigorously. There were many solutions containing the final term of $S_n$ as $ar^n$ rather than $ar^{n-1}$. Candidates who had the correct initial sequence regularly went on to complete the proof correctly. Only a small number prematurely factorised. Some were trying to apply the method of proving the sum of an arithmetic series instead, hence losing the majority of the marks.

In part (b), the first method mark was gained by the majority of students. Some didn't divide by "$a$" or wrongly cancelled $r^{10}$ and $r^5$ in their equation, so lost the first accuracy mark. However, many of the students who gained the first two marks continued to gain the last two marks by dealing with the quadratic and achieving the correct solution for "$r$". A few candidates used $(n - 1)$ in the formula rather than $n$ and a number of candidates got confused with $n$ and $r$, replacing $r = 10$ and $5$ in the denominator of each fraction. Only around 50% realised that they had ended up with a quadratic equation in $r^5$ and candidates who did not cancel the "$a$" out early often ended up with an overcomplicated equation which they could not solve. Very few did not eliminate $r = 1$ if they found it, although a few solved the quadratic and then forgot to cube root the answer and so had $r = 3$.

---
topic: "Algebraic Methods"
subtopic: "Mathematical proof"
---
### **Question 16**

Use algebra to prove that the square of any natural number is either a multiple of $3$ or one more than a multiple of $3$. **(4)**

**(Total for Question 16 is 4 marks)**

### **Mark Scheme 16**

#### **Part (a)**

**Step 1: Define cases for natural numbers modulo 3**

Any natural number $n$ can be written in one of three forms: $3k$, $3k + 1$, or $3k + 2$ (where $k$ is an integer, $k \ge 0$).

- **[B1]** Considers all three cases: $3k$, $3k + 1$, and $3k + 2$ (or $3k - 1$).

**Step 2: Square each case**

Case 1: $(3k)^2 = 9k^2 = 3(3k^2)$ (multiple of 3)

Case 2: $(3k + 1)^2 = 9k^2 + 6k + 1 = 3(3k^2 + 2k) + 1$ (one more than a multiple of 3)

Case 3: $(3k + 2)^2 = 9k^2 + 12k + 4 = 9k^2 + 12k + 3 + 1 = 3(3k^2 + 4k + 1) + 1$ (one more than a multiple of 3)

- **[M1]** Squares each of the three expressions.
- **[M1]** Expresses each squared result in the form $3m$ or $3m + 1$.
- **[A1]** Completes the proof with clear concluding statements covering all three cases.

### **Examiner Report 16**

This was a very poorly answered question, with the majority of candidates not writing anything at all. A fairly common attempt was to only split the natural numbers into odd/even cases and square $2n$, $2n+1$, which gained no marks. Many students who obtained any marks on this question seemed to stumble on these more by chance than by considering the problem. The problem mentioned that the square was to be a multiple of 3 or one more than a multiple of 3 and many students were able to write this as $3n$ and $3n + 1$. Some went on to square these and show that the result was also a multiple of 3 or one more than a multiple of 3. Few students realised that they needed a third case (e.g. $3n - 1$ or $3n + 2$) to cover all integers, and as a result two marks was the most that could be achieved. It was very rare to see full marks scored in this question. Candidates who did gain full marks typically presented model solutions with thorough explanations and conclusions.
