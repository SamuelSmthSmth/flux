---
topic: "Algebraic Methods"
subtopic: "The factor theorem"
---
### **Question 1**

$$\mathrm{f}(x) = ax^3 + 10x^2 - 3ax - 4$$

Given that $(x - 1)$ is a factor of $\mathrm{f}(x)$, find the value of the constant $a$.

You must make your method clear. **(3)**

**(Total for Question 1 is 3 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Use the factor theorem** Substituting $x = 1$ into $\mathrm{f}(x)$ and equating to $0$:
$$\mathrm{f}(1) = a(1)^3 + 10(1)^2 - 3a(1) - 4 = 0$$
- **[M1]** States $\mathrm{f}(1) = 0$ or attempts algebraic division leading to a remainder equated to 0.

**Step 2: Simplify the equation**
$$a + 10 - 3a - 4 = 0 \Rightarrow 6 - 2a = 0$$
- **[A1]** Correct linear equation in $a$, e.g., $6 - 2a = 0$ or equivalent.

**Step 3: Solve for $a$**
$$2a = 6 \Rightarrow a = 3$$
- **[A1]** Correct value of $a = 3$.

### **Examiner Report 1**

This was a very familiar and accessible question, and hence proved to be a suitable first question. A significant majority of candidates gave a fully correct response to this question, with the most common and successful approach being via the use of the factor theorem. Very few candidates tried to evaluate $\mathrm{f}(-1)$. Following on from correct use of $\mathrm{f}(1)=0$, there were occasional errors in solving the resulting simple linear equation. One (perhaps unexpected) error seen several times was to simplify $a(1)^3$ as $a^3$.

Algebraic division was attempted by some candidates, but the working needed here was much more complicated and so often led to errors (mainly with signs). This does highlight the importance of choosing the best method to a problem, as well as carrying it out accurately.

---
topic: "Quadratics"
subtopic: "Completing the square"
---
### **Question 2**

Given that

$$\mathrm{f}(x) = x^2 - 4x + 5 \quad x \in \mathbb{R}$$

**(a)** express $\mathrm{f}(x)$ in the form $(x + a)^2 + b$ where $a$ and $b$ are integers to be found. **(2)**

The curve with equation $y = \mathrm{f}(x)$
* meets the $y$-axis at the point $P$
* has a minimum turning point at the point $Q$

**(b)** Write down 
**(i)** the coordinates of $P$ **(2)**
**(ii)** the coordinates of $Q$

**(Total for Question 2 is 4 marks)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Complete the square**
$$\mathrm{f}(x) = (x - 2)^2 - 4 + 5 = (x - 2)^2 + 1$$
- **[M1]** Attempts to complete the square, achieving $(x \pm 2)^2 + \dots$
- **[A1]** Correct expression $(x - 2)^2 + 1$.

#### **Part (b)**

**Step 2: Find coordinates of $P$ and $Q$**
$P = (0, 5)$
- **[B1f]** Correct coordinates for $P$.
$Q = (2, 1)$
- **[B1f]** Correct coordinates for $Q$ (follow through from their completed square form).

### **Examiner Report 2**

This focussed on the ability of a student to complete the square and proved to be as accessible as the first question. The vast majority of responses seen were fully correct. In part (a) most candidates were able to score full marks. The form $(x-2)^2 + \dots$ was almost always achieved, although occasionally an incorrect $(x+2)^2 + \dots$ was offered. The most common error was having $+9$ instead of $+1$.

In response to part (b) both $P$ and $Q$ were often stated correctly with some candidates able to score the follow through mark for their $Q$ from their value of '$b$' from part (a). Occasionally a mark was lost if they had $P = 5$ instead of $y = 5$ when $x = 0$. Very few sketches were seen, which if correctly labelled would have also scored full marks in (b). It was relatively common in (b)(ii) to see differentiation used, rather than the completed square expression.

---
topic: "Sequences and Series"
subtopic: "Recurrence relations"
---
### **Question 3**

The sequence $u_1, u_2, u_3, \dots$ is defined by

$$u_{n+1} = k - \frac{24}{u_n} \quad u_1 = 2$$

where $k$ is an integer.

Given that $u_1 + 2u_2 + u_3 = 0$

**(a)** show that 

$$3k^2 - 58k + 240 = 0$$

**(3)**

**(b)** Find the value of $k$, giving a reason for your answer. **(2)**

**(c)** Find the value of $u_3$ **(1)**

**(Total for Question 3 is 6 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Find expressions for $u_2$ and $u_3$ in terms of $k$**
$$u_2 = k - \frac{24}{2} = k - 12$$
$$u_3 = k - \frac{24}{u_2} = k - \frac{24}{k - 12}$$
- **[M1]** Correct expressions for $u_2$ and $u_3$ in terms of $k$.

**Step 2: Substitute into the given relation**
$$2 + 2(k - 12) + k - \frac{24}{k - 12} = 0$$
- **[M1]** Substitutes $u_1$, $u_2$, and $u_3$ into $u_1 + 2u_2 + u_3 = 0$.

**Step 3: Simplify to the required quadratic**
$$2 + 2k - 24 + k - \frac{24}{k - 12} = 0 \Rightarrow 3k - 22 = \frac{24}{k - 12}$$
$$(3k - 22)(k - 12) = 24 \Rightarrow 3k^2 - 36k - 22k + 264 = 24$$
$$3k^2 - 58k + 240 = 0$$
- **[A1]** Correct algebraic manipulation leading to the given quadratic equation.

#### **Part (b)**

**Step 4: Solve the quadratic equation**
$$(3k - 40)(k - 6) = 0 \Rightarrow k = \frac{40}{3}, 6$$
- **[M1]** Solves the quadratic to find two values for $k$.

**Step 5: Select the integer value with reason**
Since $k$ is an integer, $k = 6$.
- **[A1]** $k = 6$ with a valid reason (stating that $k$ must be an integer).

#### **Part (c)**

**Step 6: Calculate $u_3$**
Using $k = 6$:
$$u_3 = 6 - \frac{24}{6 - 12} = 6 - \frac{24}{-6} = 6 - (-4) = 10$$
- **[A1]** $u_3 = 10$.

### **Examiner Report 3**

This proved to be a little more demanding than the first two questions but over 40% of candidates still scored all 6 marks.

Errors seen by candidates are summarised below.

In part (a) several candidates did not simplify $u_2$ sufficiently, giving $u_2 = k - 24/2$ which then lead to a more complicated expression for $u_3$ which they had difficulty simplifying. Some candidates did not use the given expression, but rather used $u_1 + u_2 + u_3 = 0$.

In part (b) candidates usually found both roots of the given quadratic either by factorisation or by use of the quadratic formula, with a small number by completing the square. A significant minority failed to gain the A mark here as they did not state that 6 was an integer or that $40/3$ was not an integer, with some excluding $40/3$ on the grounds that it was irrational.

Part (c) was invariably answered correctly by those who had solved the quadratic in part (b), although there were some candidates who gave a choice of answers.

---
topic: "Numerical Methods"
subtopic: "Locating roots"
---
### **Question 4**

The curve with equation $y = \mathrm{f}(x)$ where

$$\mathrm{f}(x) = x^2 + \ln(2x^2 - 4x + 5)$$

has a single turning point at $x = \alpha$

**(a)** Show that $\alpha$ is a solution of the equation

$$2x^3 - 4x^2 + 7x - 2 = 0$$

**(4)**

The iterative formula

$$x_{n+1} = \frac{1}{7}(2 + 4x_n^2 - 2x_n^3)$$

is used to find an approximate value for $\alpha$.

Starting with $x_1 = 0.3$

**(b)** calculate, giving each answer to 4 decimal places,

**(i)** the value of $x_2$

**(ii)** the value of $x_4$

**(3)**

Using a suitable interval and a suitable function that should be stated,

**(c)** show that $\alpha$ is $0.341$ to 3 decimal places. **(2)**

**(Total for Question 4 is 9 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Differentiate $\mathrm{f}(x)$**
$$\mathrm{f}'(x) = 2x + \frac{4x - 4}{2x^2 - 4x + 5}$$
- **[M1]** Attempts to differentiate $\mathrm{f}(x)$, with at least the $x^2$ term correct and chain rule applied to the log term.
- **[A1]** Correct derivative $\mathrm{f}'(x) = 2x + \frac{4x - 4}{2x^2 - 4x + 5}$.

**Step 2: Set derivative to zero at $x = \alpha$**
$$2\alpha + \frac{4\alpha - 4}{2\alpha^2 - 4\alpha + 5} = 0$$
- **[M1]** Sets $\mathrm{f}'(x) = 0$.

**Step 3: Rearrange to the required form**
$$2\alpha(2\alpha^2 - 4\alpha + 5) + 4\alpha - 4 = 0$$
$$4\alpha^3 - 8\alpha^2 + 10\alpha + 4\alpha - 4 = 0$$
$$4\alpha^3 - 8\alpha^2 + 14\alpha - 4 = 0 \Rightarrow 2\alpha^3 - 4\alpha^2 + 7\alpha - 2 = 0$$
- **[A1]** Correct algebraic manipulation leading to the required result.

#### **Part (b)**

**Step 4: Calculate iterations**
$$x_2 = \frac{1}{7}(2 + 4(0.3)^2 - 2(0.3)^3) = \frac{1}{7}(2 + 0.36 - 0.054) = 0.33514...$$
$$x_2 = 0.3351$$
- **[M1]** Correct substitution to find $x_2$.
- **[A1]** $x_2 = 0.3351$ (to 4 decimal places).

$$x_3 = \frac{1}{7}(2 + 4(0.33514...)^2 - 2(0.33514...)^3) = 0.34005...$$
$$x_4 = \frac{1}{7}(2 + 4(0.34005...)^2 - 2(0.34005...)^3) = 0.34087...$$
$$x_4 = 0.3409$$
- **[A1]** $x_4 = 0.3409$ (to 4 decimal places).

#### **Part (c)**

**Step 5: Evaluate function for bounds**
Let $\mathrm{g}(x) = 2x^3 - 4x^2 + 7x - 2$ (or equivalent valid function).
$$\mathrm{g}(0.3405) = 2(0.3405)^3 - 4(0.3405)^2 + 7(0.3405) - 2 = -0.0033...$$
$$\mathrm{g}(0.3415) = 2(0.3415)^3 - 4(0.3415)^2 + 7(0.3415) - 2 = +0.0038...$$
- **[M1]** Evaluates a suitable function at $0.3405$ and $0.3415$ (or tight enough bounds).
- **[A1]** States change of sign, gives correct values, concludes $\alpha = 0.341$ to 3 d.p. with a reason (function is continuous).

### **Examiner Report 4**

Aspects of this question proved to be more demanding than expected, but overall good marks were scored by candidates with most achieving over half marks in this question.

Part (a) Almost all candidates identified the need to differentiate and set their expression equal to zero. Although the derivative was often accurately found – the chain rule aspect of the log expression was omitted by some so that the expression $4x - 4$ was not seen as the numerator of the required fraction. Some numerators seen included $2x - 2$, $2x - 4$ or most often 1. Manipulating their equation into the desired form was also an issue for some, with sign errors causing problems, whilst others could not properly convert their equation involving fractions into one not involving fractions.

Part (b) A significant majority of candidates obtained both required answers to this part. Occasionally only $x_2$ and $x_3$ were found. There were just a few occasions where a candidate had misread the $1/7$ in the iterative formula as $1/2$. If the working was shown for this situation, then a method mark could still have been awarded.

Part (c) Whilst many candidates realised that a sign change of a function between $0.3405$ and $0.3415$ was required, it was also common to see an attempt at further iteration. This method was not acceptable as a proof of the location of the root. A few chose to substitute into an inappropriate function such as $\mathrm{f}(x)$, or the iterative formula, and some failed to specify a function at all. For those who did use (typically) the expression from (a), most selected correct values to substitute in and identify the change of sign, finishing with a clear conclusion. It was very common, however, for the final mark to be lost in this part because there was no mention that the chosen function was continuous.

---
topic: "Sequences and Series"
subtopic: "Geometric series"
---
### **Question 5**

In this question you should show all stages of your working.
Solutions relying entirely on calculator technology are not acceptable.

A company made a profit of £20 000 in its first year of trading, Year 1.

A model for future trading predicts that the yearly profit will increase by $8\%$ each year, so that the yearly profits will form a geometric sequence.

According to the model,

**(a)** show that the profit for Year 3 will be £23 328 **(1)**

**(b)** find the first year when the yearly profit will exceed £65 000 **(3)**

**(c)** find the total profit for the first 20 years of trading, giving your answer to the nearest £1000 **(2)**

**(Total for Question 5 is 6 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Show profit for Year 3**
$$20000 \times 1.08^2 = 23328$$
- **[B1]** Correct calculation shown or $20000 \times 1.08$ then $\times 1.08$ leading to $23328$.

#### **Part (b)**

**Step 2: Set up inequality for profit exceeding £65000**
$$20000 \times (1.08)^{n-1} > 65000$$
- **[M1]** Sets up a correct inequality or equation using the geometric progression formula.

**Step 3: Solve using logarithms**
$$(1.08)^{n-1} > 3.25 \Rightarrow (n-1)\ln(1.08) > \ln(3.25)$$
$$n - 1 > \frac{\ln(3.25)}{\ln(1.08)} = 15.31... \Rightarrow n > 16.31...$$
- **[M1]** Uses logarithms correctly to solve for $n$.

**Step 4: State the year**
Year 17
- **[A1]** Correct year found (Year 17).

#### **Part (c)**

**Step 5: Use sum formula for geometric series**
$$S_{20} = \frac{20000(1.08^{20} - 1)}{1.08 - 1}$$
$$S_{20} = \frac{20000(4.6609... - 1)}{0.08} = 915234.9...$$
- **[M1]** Correct application of the geometric series sum formula with $n = 20$.

**Step 6: Round to nearest £1000**
£915 000
- **[A1]** £915 000.

### **Examiner Report 5**

This was yet another good source of marks with the modal mark being 6 out of 6, achieved by over 35% of the candidature.

Almost every candidate gained the B1 mark in part (a) with a fairly even split between those who used $20000 \times 1.08^2$ and those who first calculated the profit after Year 1 = 21600 and then Year 2 = 23328 showing each step of their working to gain the mark.

Part (b) was more problematic for many candidates. There was a very good understanding of the inequality/equation to be formed, and the use of logs was almost always very good. However, a significant minority of candidates failed to gain the final A mark giving an answer of 15.3 or 16 instead of Year 17.

Part (c) proved to be very well answered with the vast majority using the sum formula correctly. Errors included using $n = 19$ instead of 20 in the formula or finding the 20th term instead of the sum. A few candidates listed all the terms before adding them which often led to accuracy errors.

---
topic: "Vectors"
subtopic: "Vectors"
---
### **Question 6**

**Figure 1** _(A sketch of triangle ABC with vertices A, B, and C)._

```tikz
\begin{tikzpicture}[scale=0.8]
  \draw[thick] (0,0) node[below left] {$A$} -- (3,1) node[right] {$B$} -- (2,3) node[above] {$C$} -- cycle;
\end{tikzpicture}
```

Figure 1 shows a sketch of triangle $ABC$.

Given that
* $\overrightarrow{AB} = -3\mathbf{i} - 4\mathbf{j} - 5\mathbf{k}$
* $\overrightarrow{BC} = \mathbf{i} + \mathbf{j} + 4\mathbf{k}$

**(a)** find $\overrightarrow{AC}$ **(2)**

**(b)** show that $\cos ABC = \frac{9}{10}$ **(3)**

**(Total for Question 6 is 5 marks)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Find vector $\overrightarrow{AC}$**
$$\overrightarrow{AC} = \overrightarrow{AB} + \overrightarrow{BC} = (-3\mathbf{i} - 4\mathbf{j} - 5\mathbf{k}) + (\mathbf{i} + \mathbf{j} + 4\mathbf{k}) = -2\mathbf{i} - 3\mathbf{j} - \mathbf{k}$$
- **[M1]** Attempts vector addition $\overrightarrow{AB} + \overrightarrow{BC}$.
- **[A1]** Correct vector $-2\mathbf{i} - 3\mathbf{j} - \mathbf{k}$ (or column vector equivalent).

#### **Part (b)**

**Step 2: Find lengths of the sides of triangle $ABC$**
$$|\overrightarrow{AB}| = \sqrt{(-3)^2 + (-4)^2 + (-5)^2} = \sqrt{9 + 16 + 25} = \sqrt{50}$$
$$|\overrightarrow{BC}| = \sqrt{1^2 + 1^2 + 4^2} = \sqrt{1 + 1 + 16} = \sqrt{18}$$
$$|\overrightarrow{AC}| = \sqrt{(-2)^2 + (-3)^2 + (-1)^2} = \sqrt{4 + 9 + 1} = \sqrt{14}$$
- **[M1]** Finds the magnitudes of all three sides of the triangle.

**Step 3: Apply the cosine rule**
$$\cos ABC = \frac{|\overrightarrow{AB}|^2 + |\overrightarrow{BC}|^2 - |\overrightarrow{AC}|^2}{2 |\overrightarrow{AB}| |\overrightarrow{BC}|}$$
$$\cos ABC = \frac{50 + 18 - 14}{2 \sqrt{50}\sqrt{18}} = \frac{54}{2 \sqrt{900}} = \frac{54}{2(30)} = \frac{54}{60} = \frac{9}{10}$$
- **[M1]** Correct use of the cosine rule with their lengths.
- **[A1]** Fully correct proof leading to $\cos ABC = \frac{9}{10}$.

### **Examiner Report 6**

This was another question where the modal mark was full marks, this time achieved by over 40% of the candidates.

Part (a) A very significant majority of candidates obtained vector $\overrightarrow{AC}$ correctly. Only a few subtracted rather than adding the given vectors $\overrightarrow{AB}$ and $\overrightarrow{BC}$.

Part (b) The vast majority of candidates made some progress in this part, realising that the lengths of the vectors would be required to solve this problem. A small minority then simply stopped, having done no more than finding the lengths of the sides of the triangle $ABC$, with some assuming that the triangle was right angled. However most then went on to use the cosine rule to try to show the required result. In almost all cases a correct cosine rule was stated and used, so that following on from a previous accuracy error, the method marks could be awarded. Fully correct calculations were necessary in order to gain the final accuracy mark and very many candidates managed to do this and so gained full marks for this question.

A few candidates, presumably those who had studied further maths, used the scalar product. This method would be perfectly acceptable, as long as the vectors are used the correct way around. Many using this method showed that $\cos ABC = -\frac{9}{10}$ but failed to explain why the answer should be positive.

---
topic: "Circles"
subtopic: "Equation of a circle"
---
### **Question 7**

The circle $C$ has equation

$$x^2 + y^2 - 10x + 4y + 11 = 0$$

**(a)** Find

**(i)** the coordinates of the centre of $C$,

**(ii)** the exact radius of $C$, giving your answer as a simplified surd.

**(4)**

The line $l$ has equation $y = 3x + k$ where $k$ is a constant.

Given that $l$ is a tangent to $C$,

**(b)** find the possible values of $k$, giving your answers as simplified surds. **(5)**

**(Total for Question 7 is 9 marks)**

### **Mark Scheme 7**

#### **Part (a)**

**Step 1: Complete the square for $x$ and $y$**
$$(x - 5)^2 - 25 + (y + 2)^2 - 4 + 11 = 0$$
$$(x - 5)^2 + (y + 2)^2 = 18$$
- **[M1]** Attempts to complete the square for both $x$ and $y$.
- **[A1]** Centre coordinates $(5, -2)$.
- **[A1]** Radius squared $= 18 \Rightarrow \text{Radius} = \sqrt{18} = 3\sqrt{2}$.

#### **Part (b)**

**Step 2: Substitute $y = 3x + k$ into the circle equation**
$$x^2 + (3x + k)^2 - 10x + 4(3x + k) + 11 = 0$$
$$x^2 + 9x^2 + 6kx + k^2 - 10x + 12x + 4k + 11 = 0$$
$$10x^2 + (6k + 2)x + (k^2 + 4k + 11) = 0$$
- **[M1]** Substitutes line equation into circle equation and expands to form a quadratic in $x$.
- **[A1]** Correct quadratic equation.

**Step 3: Use the condition for a tangent ($b^2 - 4ac = 0$)**
$$b^2 - 4ac = (6k + 2)^2 - 4(10)(k^2 + 4k + 11) = 0$$
$$36k^2 + 24k + 4 - 40(k^2 + 4k + 11) = 0$$
$$36k^2 + 24k + 4 - 40k^2 - 160k - 440 = 0$$
$$-4k^2 - 136k - 436 = 0 \Rightarrow k^2 + 34k + 109 = 0$$
- **[M1]** Sets discriminant equal to zero.
- **[A1]** Correct quadratic in $k$.

**Step 4: Solve for $k$ using the quadratic formula**
$$k = \frac{-34 \pm \sqrt{34^2 - 4(1)(109)}}{2} = \frac{-34 \pm \sqrt{1156 - 436}}{2} = \frac{-34 \pm \sqrt{720}}{2}$$
$$k = \frac{-34 \pm 12\sqrt{5}}{2} = -17 \pm 6\sqrt{5}$$
- **[A1]** Correct exact simplified surd values for $k$: $-17 + 6\sqrt{5}$ and $-17 - 6\sqrt{5}$.

### **Examiner Report 7**

The first few marks in this question were very accessible but the final part of the question proved to be a useful discriminator especially around grade C and below.

Part (a) The majority of candidates achieved full marks in this part. Sign errors were responsible for most errors, although failure to halve was also seen with either or both of $(x \pm 10)^2$ and $(y \pm 4)^2$ being seen. Having achieved $(x-5)^2 + (y+2)^2 = 18$, it rare to see the centre or radius not found correctly.

Part (b) This part was found to be discriminating with complete solutions seen from only the most competent of candidates. The most common approach was to substitute $y = 3x + k$ into the circle equation to find a quadratic in $x$ (with coefficients in terms of $k$) for the points of intersection. Errors mostly arose when $(3x + k + 2)^2$ was expanded incorrectly or the $2x + 6kx$ terms not being gathered together. Many solutions then stopped after the substitution and expansion step, as candidates did not seem to appreciate what to do with an equation of this complexity in two variables.

Application of $b^2 = 4ac$ to find equal roots was used on many occasions but errors frequently occurred. Only a very few solutions involved attempts via $b^2 - 4ac > 0$. It was not always obvious to see how a student had solved their quadratic (formula not quoted and values for $a$, $b$ and $c$ not seen) but a limited number of correct solutions were seen. Using a calculator quadratic solver was frequent and acceptable.

Several attempts started by using implicit differentiation on the circle equation. Although this is a possible method, it did not often go beyond using $\frac{\mathrm{d}y}{\mathrm{d}x} = 3$ to get $x + 3y + 1 = 0$. Another method seen several times was to find the equation of the normal (i.e. the radius) to try to make progress towards finding values of $k$, but this method also seldom went further than the equation of the line.

---
topic: "Exponentials and Logarithms"
subtopic: "Exponential modelling"
---
### **Question 8**

A scientist is studying the growth of two different populations of bacteria.

The number of bacteria, $N$, in the first population is modelled by the equation

$$N = Ae^{kt} \quad t \geqslant 0$$

where $A$ and $k$ are positive constants and $t$ is the time in hours from the start of the study.

Given that
* there were 1000 bacteria in this population at the start of the study
* it took exactly 5 hours from the start of the study for this population to double

**(a)** find a complete equation for the model. **(4)**

**(b)** Hence find the rate of increase in the number of bacteria in this population exactly 8 hours from the start of the study. Give your answer to 2 significant figures. **(2)**

The number of bacteria, $M$, in the second population is modelled by the equation

$$M = 500e^{1.4kt} \quad t \geqslant 0$$

where $k$ has the value found in part (a) and $t$ is the time in hours from the start of the study.

Given that $T$ hours after the start of the study, the number of bacteria in the two different populations was the same,

**(c)** find the value of $T$. **(3)**

**(Total for Question 8 is 9 marks)**

### **Mark Scheme 8**

#### **Part (a)**

**Step 1: Find constant $A$**
At $t = 0, N = 1000 \Rightarrow 1000 = Ae^0 \Rightarrow A = 1000$
- **[B1]** States or uses $A = 1000$.

**Step 2: Find constant $k$**
At $t = 5, N = 2000 \Rightarrow 2000 = 1000e^{5k}$
$$e^{5k} = 2 \Rightarrow 5k = \ln 2 \Rightarrow k = \frac{1}{5}\ln 2 \text{ (or } 0.1386... \text{)}$$
- **[M1]** Uses $t = 5, N = 2000$ to form an equation for $k$.
- **[A1]** Correct value for $k$.

**Step 3: State complete equation**
$$N = 1000e^{\frac{1}{5}t\ln 2} \text{ (or } 1000e^{0.139t} \text{)}$$
- **[A1]** Correct complete equation.

#### **Part (b)**

**Step 4: Differentiate $N$ with respect to $t$**
$$\frac{\mathrm{d}N}{\mathrm{d}t} = 1000k e^{kt}$$
- **[M1]** Differentiates $N$ correctly to find $\frac{\mathrm{d}N}{\mathrm{d}t}$.

**Step 5: Evaluate at $t = 8$**
$$\left.\frac{\mathrm{d}N}{\mathrm{d}t}\right|_{t=8} = 1000 \times \left(\frac{1}{5}\ln 2\right) e^{8 \times \frac{1}{5}\ln 2} = 200\ln(2) \times e^{\frac{8}{5}\ln 2} = 485.03...$$
To 2 significant figures: $490$
- **[A1]** $490$ (2 s.f.).

#### **Part (c)**

**Step 6: Set up equation for $N = M$**
$$1000e^{kt} = 500e^{1.4kt}$$
- **[M1]** Equates the two population models with $t = T$.

**Step 7: Solve for $T$ using logarithms**
$$\frac{1000}{500} = \frac{e^{1.4kT}}{e^{kT}} \Rightarrow 2 = e^{0.4kT}$$
$$\ln 2 = 0.4kT \Rightarrow T = \frac{\ln 2}{0.4k}$$
Substitute $k = \frac{1}{5}\ln 2$:
$$T = \frac{\ln 2}{0.4 \times \frac{1}{5}\ln 2} = \frac{\ln 2}{0.08\ln 2} = \frac{1}{0.08} = 12.5$$
- **[M1]** Simplifies and applies logarithms correctly to solve for $T$.
- **[A1]** $T = 12.5$.

### **Examiner Report 8**

This was the first significant modelling question on this paper. As with other series, candidates find aspects of modelling difficult. The barriers to success here were parts (b) and (c).

In part (a) many candidates made progress and achieved a complete equation for the model with $k$ given exactly as $\ln(2)/5$ or rounded to $0.139$. A few students rounded more accurately giving $k$ as $0.1386$. Some rounded $k$ to $0.14$ and lost the accuracy mark. A fair number of students who failed to find the correct value of '$A$' evaluated $e^0$ as $e$.

In part (b) many students used an incorrect method to find the rate of increase in the number of bacteria. Some substituted $t = 8$ into their expression for $N$, which just found the number of bacteria after 8 hours; others then went on to divide this number by 8 or even 1000 to try and find the rate of increase. Those who realised that the expression for $N$ needed to be differentiated to find the rate of increase often scored at least the method mark.

For part (c) the majority of candidates who obtained the correct equation of the model in (a) were able to use both models given to set up an appropriate equation in $t$ or $T$ to gain the first method mark. Processing the resulting equation using logs to obtain a linear equation in $t$ or $T$ posed more of a challenge and many made no further progress. A large proportion who did attempt to make progress often used incorrect log work: some multiplied the logs rather than add them; others did not find the log of all the components, usually the '2'. Some students combined the exponential functions incorrectly by dividing the powers rather than subtracting them. Those scoring all three marks here were usually the most able candidates.

---
topic: "Algebraic Methods"
subtopic: "Partial fractions"
---
### **Question 9**

$$\mathrm{f}(x) = \frac{50x^2 + 38x + 9}{(5x + 2)^2(1 - 2x)} \quad x \neq -\frac{2}{5}, \, x \neq \frac{1}{2}$$

Given that $\mathrm{f}(x)$ can be expressed in the form

$$\frac{A}{5x + 2} + \frac{B}{(5x + 2)^2} + \frac{C}{1 - 2x}$$

where $A$, $B$ and $C$ are constants

**(a) (i)** find the value of $B$ and the value of $C$

**(ii)** show that $A = 0$

**(4)**

**(b) (i)** Use binomial expansions to show that, in ascending powers of $x$

$$\mathrm{f}(x) = p + qx + rx^2 + \dots$$

where $p$, $q$ and $r$ are simplified fractions to be found.

**(ii)** Find the range of values of $x$ for which this expansion is valid.

**(7)**

**(Total for Question 9 is 11 marks)**

### **Mark Scheme 9**

#### **Part (a)**

**Step 1: Set up the partial fractions identity**
$$50x^2 + 38x + 9 = A(5x + 2)(1 - 2x) + B(1 - 2x) + C(5x + 2)^2$$
- **[M1]** Correct identity and correct clearing of denominators.

**Step 2: Find $B$ and $C$**
Substitute $x = \frac{1}{2}$:
$$50\left(\frac{1}{4}\right) + 38\left(\frac{1}{2}\right) + 9 = C\left(5\left(\frac{1}{2}\right) + 2\right)^2$$
$$12.5 + 19 + 9 = C\left(\frac{9}{2}\right)^2 \Rightarrow 40.5 = C\left(\frac{81}{4}\right) \Rightarrow C = 2$$
Substitute $x = -\frac{2}{5}$:
$$50\left(\frac{4}{25}\right) + 38\left(-\frac{2}{5}\right) + 9 = B\left(1 - 2\left(-\frac{2}{5}\right)\right)$$
$$8 - 15.2 + 9 = B\left(\frac{9}{5}\right) \Rightarrow 1.8 = B\left(\frac{9}{5}\right) \Rightarrow B = 1$$
- **[A1]** $B = 1$.
- **[A1]** $C = 2$.

**Step 3: Show $A = 0$**
Compare coefficients of $x^2$:
$$50 = -10A + 25C \Rightarrow 50 = -10A + 25(2) \Rightarrow 50 = -10A + 50 \Rightarrow A = 0$$
(or substitute another value of $x$, e.g., $x = 0$: $9 = 2A + B + 4C \Rightarrow 9 = 2A + 1 + 8 \Rightarrow 2A = 0 \Rightarrow A = 0$).
- **[A1]** Demonstrates clearly that $A = 0$.

#### **Part (b)**

**Step 4: Rewrite $\mathrm{f}(x)$ using indices**
$$\mathrm{f}(x) = (5x + 2)^{-2} + 2(1 - 2x)^{-1} = 2^{-2}\left(1 + \frac{5}{2}x\right)^{-2} + 2(1 - 2x)^{-1}$$
$$= \frac{1}{4}\left(1 + \frac{5}{2}x\right)^{-2} + 2(1 - 2x)^{-1}$$
- **[M1]** Expresses terms as powers with bracket factors extracted correctly (e.g., $2^{-2}$ or $2$ factored).

**Step 5: Apply binomial expansion to each term**
$$\left(1 + \frac{5}{2}x\right)^{-2} = 1 + (-2)\left(\frac{5}{2}x\right) + \frac{(-2)(-3)}{2!}\left(\frac{5}{2}x\right)^2 + \dots = 1 - 5x + \frac{75}{4}x^2$$
$$\frac{1}{4}\left(1 - 5x + \frac{75}{4}x^2\right) = \frac{1}{4} - \frac{5}{4}x + \frac{75}{16}x^2$$
$$(1 - 2x)^{-1} = 1 + (-1)(-2x) + (-1)(-2)(-2x)^2 + \dots = 1 + 2x + 4x^2$$
$$2(1 + 2x + 4x^2) = 2 + 4x + 8x^2$$
- **[M1]** Expands $(1 + \frac{5}{2}x)^{-2}$ correctly up to the $x^2$ term.
- **[M1]** Expands $(1 - 2x)^{-1}$ correctly up to the $x^2$ term.

**Step 6: Combine the expansions**
$$\mathrm{f}(x) = \left(\frac{1}{4} + 2\right) + \left(-\frac{5}{4} + 4\right)x + \left(\frac{75}{16} + 8\right)x^2$$
$$p = \frac{9}{4}, \quad q = \frac{11}{4}, \quad r = \frac{203}{16}$$
- **[A1]** Correct values for $p, q, r$: $p = \frac{9}{4}$, $q = \frac{11}{4}$, $r = \frac{203}{16}$.

**Step 7: Determine the range of validity**
For validity: $\left|\frac{5}{2}x\right| < 1 \Rightarrow |x| < \frac{2}{5}$ and $|2x| < 1 \Rightarrow |x| < \frac{1}{2}$.
Combined range: $|x| < \frac{2}{5}$ (or $-\frac{2}{5} < x < \frac{2}{5}$).
- **[M1]** Determines validity conditions for both binomial expansions.
- **[A1]** Correct combined range: $|x| < \frac{2}{5}$.

### **Examiner Report 9**

This question was answered with varying degrees of success. Around $28\%$ of the candidates failed to score any marks here at all, which was very surprising. There were however, many well formed and accurate solutions by careful candidates.

In part (a) most candidates managed to write down a correct identity and use an appropriate method to find values for $B$ and $C$. To prove $A = 0$ was generally done via equating coefficients of $x^2$ or by setting $x = 0$ or $x = 1$. A few candidates wrote down three equations for the coefficients and constants, but rarely was a correct set of solutions gained from this method. It was also not uncommon to see the RHS expanded either with or without the terms involving $A$ in an attempt to prove that $A = 0$. Errors included having an incorrect identity from the start which resulted in no marks.

In part (b)(i) it was rare to see fully correct expansions. Good candidates often lost the final mark due to an error in adding the required terms. A common error was forgetting to use their value for $C$ and only adding the expansion for $(1-2x)^{-1}$ rather than $C(1-2x)^{-1}$. A few were unable to extract $2^{-1}$ correctly from $(5x+2)^{-2}$ (usually having this as 2). Other errors seen involved an expansion of $(1 + 2/5 x)^{-2}$ or else $(1 + 5/2 x)^2$ rather than $(1 + 5/2 x)^{-2}$.

Very few correct answers were seen for part (b)(ii) and this was very often not attempted. Those who did write a correct range sometimes also gave a second range which therefore did not gain the B mark here.

---
topic: "Trigonometric Identities and Equations"
subtopic: "Trigonometric identities"
---
### **Question 10**

In this question you should show all stages of your working.
Solutions relying entirely on calculator technology are not acceptable.

**(a)** Given that $1 + \cos 2\theta + \sin 2\theta \neq 0$ prove that

$$\frac{1 - \cos 2\theta + \sin 2\theta}{1 + \cos 2\theta + \sin 2\theta} \equiv \tan \theta$$

**(4)**

**(b)** Hence solve, for $0 < x < 180^\circ$

$$\frac{1 - \cos 4x + \sin 4x}{1 + \cos 4x + \sin 4x} = 3\sin 2x$$

giving your answers to one decimal place where appropriate. **(4)**

**(Total for Question 10 is 8 marks)**

### **Mark Scheme 10**

#### **Part (a)**

**Step 1: Use double angle identities for $\cos 2\theta$ and $\sin 2\theta$**
$$\cos 2\theta = 1 - 2\sin^2 \theta \quad \text{or} \quad 2\cos^2 \theta - 1$$
$$\sin 2\theta = 2\sin \theta \cos \theta$$
- **[M1]** Uses appropriate double angle formulae for $\cos 2\theta$ and $\sin 2\theta$.

**Step 2: Substitute into numerator and denominator**
Numerator: $1 - (1 - 2\sin^2 \theta) + 2\sin \theta \cos \theta = 2\sin^2 \theta + 2\sin \theta \cos \theta$
Denominator: $1 + (2\cos^2 \theta - 1) + 2\sin \theta \cos \theta = 2\cos^2 \theta + 2\sin \theta \cos \theta$
- **[M1]** Substitutes into LHS correctly, eliminating the constant $1$.

**Step 3: Factorise and simplify**
$$\frac{2\sin \theta(\sin \theta + \cos \theta)}{2\cos \theta(\cos \theta + \sin \theta)} = \frac{\sin \theta}{\cos \theta} \equiv \tan \theta$$
- **[A1]** Correct factorisation of numerator and denominator.
- **[A1]** Complete rigorous proof reaching $\tan \theta$.

#### **Part (b)**

**Step 4: Apply part (a) result with $\theta = 2x$**
$$\tan 2x = 3\sin 2x$$
- **[M1]** Uses part (a) to replace the LHS with $\tan 2x$.

**Step 5: Express in terms of sine and cosine and rearrange**
$$\frac{\sin 2x}{\cos 2x} = 3\sin 2x \Rightarrow \sin 2x = 3\sin 2x \cos 2x$$
$$\sin 2x(1 - 3\cos 2x) = 0$$
- **[M1]** Forms a factorised equation $\sin 2x(1 - 3\cos 2x) = 0$ (or divides by $\sin 2x$ with a note of $\sin 2x = 0$).

**Step 6: Solve for $2x$ and then $x$**
Case 1: $\sin 2x = 0$
$$2x = 180^\circ \Rightarrow x = 90^\circ$$
Case 2: $\cos 2x = \frac{1}{3}$
$$2x = 70.5287..., \, 289.471...^\circ \Rightarrow x = 35.3^\circ, \, 144.7^\circ$$
- **[A1]** $x = 90^\circ$.
- **[A1]** $x = 35.3^\circ, 144.7^\circ$ (all three correct values).

### **Examiner Report 10**

This was found to be another discriminating question. Those who were familiar with the topic made good progress yet there were many other attempts that scored no marks at all.

Part (a) There were a significant number of fully correct solutions for this part, although some candidates did not achieve the stage where both the numerator and denominators of their fraction were factorised correctly with a common factor of $(\sin\theta + \cos\theta)$. Another difficulty encountered by some, was how to use the different forms of the identity for $\cos 2\theta$ in order to deal with, and remove, the presence of both "1's" in the fraction. Very few notational errors were seen, which was a pleasing improvement.

Part (b) A significant number of candidates used the result of (a) correctly and started their solution with $\tan 2x = 3\sin 2x$. However, it was also the case that $\tan x = 3\sin 2x$ was seen several times as well. Of those candidates who started correctly with $\tan 2x = 3\sin 2x$, the significant majority simply cancelled out the resulting factor of $\sin 2x$ and in so doing neglected to consider the possibility that $\sin 2x = 0$ and in so doing the solution $x = 90^\circ$ was omitted from the fully correct list of three answers. Many candidates however, did state that $\cos 2x = \frac{1}{3}$ and went on to get $35.3^\circ$ and $144.7^\circ$ and so only one mark was lost.

---
topic: "Integration"
subtopic: "The trapezium rule"
---
### **Question 11**

**Figure 2** _(A sketch of part of the curve $y = (\ln x)^2$ for $x > 0$, showing the region $R$ bounded by the curve, $x = 2$, $x = 4$, and the x-axis)._

```tikz
\begin{tikzpicture}[scale=0.8]
  \draw[->] (-0.5,0) -- (5,0) node[below] {$x$};
  \draw[->] (0,-0.5) -- (0,4) node[left] {$y$};
  \draw[domain=0.5:4.5, smooth, thick] plot (\x, {(ln(\x))*(ln(\x))});
  \fill[gray!30] (2, {ln(2)*ln(2)}) -- plot[domain=2:4] (\x, {ln(\x)*ln(\x)}) -- (4,0) -- (2,0) -- cycle;
  \draw[thick] (2,0) node[below] {$2$} -- (2, {ln(2)*ln(2)});
  \draw[thick] (4,0) node[below] {$4$} -- (4, {ln(4)*ln(4)});
  \node at (3,1) {$R$};
  \node at (-0.3,-0.3) {$O$};
\end{tikzpicture}
```

Figure 2 shows a sketch of part of the curve with equation 

$$y = (\ln x)^2 \quad x > 0$$

The finite region $R$, shown shaded in Figure 2, is bounded by the curve, the line with equation $x = 2$, the $x$-axis and the line with equation $x = 4$.

The table below shows corresponding values of $x$ and $y$, with the values of $y$ given to 4 decimal places.

| $x$ | $2$ | $2.5$ | $3$ | $3.5$ | $4$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| $y$ | $0.4805$ | $0.8396$ | $1.2069$ | $1.5694$ | $1.9218$ |

**(a)** Use the trapezium rule, with all the values of $y$ in the table, to obtain an estimate for the area of $R$, giving your answer to 3 significant figures. **(3)**

**(b)** Use algebraic integration to find the exact area of $R$, giving your answer in the form

$$y = a(\ln 2)^2 + b\ln 2 + c$$

where $a$, $b$ and $c$ are integers to be found. **(5)**

**(Total for Question 11 is 8 marks)**

### **Mark Scheme 11**

#### **Part (a)**

**Step 1: Apply the trapezium rule formula**
$$\text{Area} \approx \frac{0.5}{2} \Big( 0.4805 + 1.9218 + 2(0.8396 + 1.2069 + 1.5694) \Big)$$
- **[M1]** Correct structure of the trapezium rule with correct strip width $h = 0.5$ and correct $y$ values.
- **[A1]** Correct unrounded answer (approx $2.261625$).
- **[A1]** $2.26$ (to 3 sig. figs.).

#### **Part (b)**

**Step 2: Use integration by parts for $\int (\ln x)^2 \, \mathrm{d}x$**
Let $u = (\ln x)^2, \frac{\mathrm{d}v}{\mathrm{d}x} = 1 \Rightarrow \frac{\mathrm{d}u}{\mathrm{d}x} = \frac{2\ln x}{x}, v = x$
$$\int (\ln x)^2 \, \mathrm{d}x = x(\ln x)^2 - \int x \left(\frac{2\ln x}{x}\right) \, \mathrm{d}x = x(\ln x)^2 - 2\int \ln x \, \mathrm{d}x$$
- **[M1]** Uses integration by parts once.

**Step 3: Integrate $\int \ln x \, \mathrm{d}x$**
$$\int \ln x \, \mathrm{d}x = x\ln x - x$$
$$\int (\ln x)^2 \, \mathrm{d}x = x(\ln x)^2 - 2(x\ln x - x) = x(\ln x)^2 - 2x\ln x + 2x$$
- **[M1]** Completes integration by parts a second time (or standard integral for $\ln x$) to get the antiderivative.

**Step 4: Apply limits $2$ and $4$**
$$\left[ x(\ln x)^2 - 2x\ln x + 2x \right]_2^4$$
At $x = 4$:
$$4(\ln 4)^2 - 8\ln 4 + 8 = 4(2\ln 2)^2 - 8(2\ln 2) + 8 = 16(\ln 2)^2 - 16\ln 2 + 8$$
At $x = 2$:
$$2(\ln 2)^2 - 2(2)\ln 2 + 4 = 2(\ln 2)^2 - 4\ln 2 + 4$$
- **[M1]** Substitutes limits 4 and 2 correctly (and uses $\ln 4 = 2\ln 2$).

**Step 5: Subtract limits and simplify**
$$(16(\ln 2)^2 - 16\ln 2 + 8) - (2(\ln 2)^2 - 4\ln 2 + 4) = 14(\ln 2)^2 - 12\ln 2 + 4$$
$a = 14, b = -12, c = 4$.
- **[A1]** Correct exact values $a = 14, b = -12, c = 4$.

### **Examiner Report 11**

The modal mark here was 3, most likely due to the accessibility of part (a). Marks in part (b) were only really awarded to the highest scoring candidates on this exam.

Most candidates successfully answered part (a) applying the Trapezium Rule using all five values of $y$ from the given table. Some students, who found the correct estimate of the area of $R$, failed to round their answer as requested, or occasionally rounded incorrectly, and lost the accuracy mark. Errors, although rare, were usually as a result of an incorrect strip width.

In part (b) many candidates failed to recognise that integration by parts was needed to make progress. Several students, who made progress and correctly applied 'integration by parts' twice, unfortunately lost the final accuracy mark due to sign or coefficient errors that had crept in. Most who integrated appropriately applied the correct limits and applied $\ln(4) = 2\ln(2)$. Errors were many and varied here and included:
* Candidates who believed that $\int (\ln x)^3 \, \mathrm{d}x = \frac{1}{3}(\ln x)^3$
* Candidates who believed that $(\ln x)^2 = 2\ln x$

Candidates who used the substitution $u = \ln x$ seemed to more easily recognise $\int u^2 e^u \, \mathrm{d}u$ as integration by parts twice.

---
topic: "Quadratics"
subtopic: "Modelling with quadratics"
---
### **Question 12**

**Figure 3** _(A sketch of the trajectory of a golf ball above the ground, starting at height 3 on the y-axis and reaching a maximum height)._

```tikz
\begin{tikzpicture}[scale=0.8]
  \draw[->] (-0.5,0) -- (6,0) node[below] {$x$};
  \draw[->] (0,-0.5) -- (0,5) node[left] {$H$};
  \draw[domain=0:5.2, smooth, thick] plot (\x, {3 + 3.2*(\x/1.5) - 1.2*(\x/1.5)*(\x/1.5)});
  \node at (0,3) [left] {$3$};
  \node at (0,0) [below left] {$O$};
\end{tikzpicture}
```

Figure 3 is a graph of the trajectory of a golf ball after the ball has been hit until it first hits the ground.

The vertical height, $H$ metres, of the ball above the ground has been plotted against the horizontal distance travelled, $x$ metres, measured from where the ball was hit.

The ball is modelled as a particle travelling in a vertical plane above horizontal ground.

Given that the ball
* is hit from a point on the top of a platform of vertical height $3\text{m}$ above the ground
* reaches its maximum vertical height after travelling a horizontal distance of $90\text{m}$
* is at a vertical height of $27\text{m}$ above the ground after travelling a horizontal distance of $120\text{m}$

Given also that $H$ is modelled as a quadratic function in $x$

**(a)** find $H$ in terms of $x$ **(5)**

**(b)** Hence find, according to the model,

**(i)** the maximum vertical height of the ball above the ground,

**(ii)** the horizontal distance travelled by the ball, from when it was hit to when it first hits the ground, giving your answer to the nearest metre. 

**(3)**

**(c)** The possible effects of wind or air resistance are two limitations of the model. Give one other limitation of this model. **(1)**

**(Total for Question 12 is 9 marks)**

### **Mark Scheme 12**

#### **Part (a)**

**Step 1: Set up quadratic model**
$$H = ax^2 + bx + c \quad \text{or} \quad H = a(x - 90)^2 + d$$
- **[B1]** Uses the fact that when $x = 0, H = 3$ (so $c = 3$).

**Step 2: Use given points to form equations**
Using vertex form $H = a(x - 90)^2 + d$:
At $x = 0, H = 3 \Rightarrow 3 = a(0 - 90)^2 + d \Rightarrow 3 = 8100a + d$
At $x = 120, H = 27 \Rightarrow 27 = a(120 - 90)^2 + d \Rightarrow 27 = 900a + d$
- **[M1]** Sets up two equations in $a$ and $d$ using the given conditions.

**Step 3: Solve for $a$ and $d$**
Subtracting equations:
$$24 = -7200a \Rightarrow a = -\frac{24}{7200} = -\frac{1}{300} = -0.00333...$$
$$d = 27 - 900\left(-\frac{1}{300}\right) = 27 + 3 = 30$$
- **[M1]** Solves simultaneous equations for $a$ and $d$.
- **[A1]** Correct values for $a$ and $d$.

**Step 4: Write down $H$ in terms of $x$**
$$H = -\frac{1}{300}(x - 90)^2 + 30 \quad \text{or} \quad H = -\frac{1}{300}x^2 + \frac{3}{5}x + 3$$
- **[A1]** Correct equation for $H$ in terms of $x$.

#### **Part (b)**

**Step 5: Find maximum vertical height**
Maximum height = $30\text{m}$ (from vertex form).
- **[B1f]** $30\text{m}$.

**Step 6: Find distance when ball hits the ground ($H = 0$)**
$$-\frac{1}{300}(x - 90)^2 + 30 = 0 \Rightarrow (x - 90)^2 = 9000$$
$$x - 90 = \pm\sqrt{9000} = \pm 30\sqrt{10}$$
$$x = 90 + 30\sqrt{10} = 184.868...$$
To the nearest metre: $185$
- **[M1]** Sets $H = 0$ and solves for $x$.
- **[A1]** $185\text{m}$.

#### **Part (c)**

**Step 7: State one limitation**
e.g., The ball is not a particle / The ground is not horizontal / Spin is ignored.
- **[B1]** Any valid limitation of the model.

### **Examiner Report 12**

This was the second modelling question on this paper. It proved to be a significant discriminator between candidates, with a significant minority making little or no progress. It certainly seems to be a topic that students find hard to access.

Part (a) The most common approach which led to either partial or complete success was to start with $H = ax^2 + bx + c$ and use $(0,3)$ to find that $c = 3$. Many candidates then used $(120,27)$ to find an equation connecting $a$ and $b$, but sometimes no more progress was made. Of those who did make further progress, the most common approach was to use differentiation and the knowledge that the gradient was zero when $x = 90$ to get a second equation in $a$ and $b$. Candidates using this approach often went on to get (a) fully correct and then also to gain most if not all of the marks in (b) as well. It was only rarely that there was a misunderstanding about $H = 0$ rather than $H = 3$ when $x = 0$.

There were other methods used in (a) and any of these could have led to success if applied correctly. For example, using the fact that the quadratic has a turning point when $x = 90$ and so $H = a(x - 90)^2 + c$ was used correctly by some candidates. Alternatively, using additional implied points such as $(60,27)$ or $(180,3)$ due to the symmetry of quadratic curves, was used appropriately by candidates.

Part (b) Both parts were done well by candidates who had achieved a correct answer to (a).
Part (b)(i) There were only a very few who omitted the units here. A wrong answer to (a) would have had made it difficult to gain the accuracy mark here.
Part (b)(ii) A wrong answer to (a) could have scored a method mark here if the candidate's quadratic had been solved correctly.

Part (c) A wide range of comments were quoted here – some of those that did not gain the B1. Many of these focussed on what happened to the ball after hitting the ground, or picked out a relatively trivial aspect such as the height of the tee being inaccurate. Others mentioned the weight of the ball, or that it depended on the force of the contact. There were many acceptable comments. These should have focussed on why one of the four modelling assumptions referred to in the question may not have been valid. Acceptable responses included the fact that the ball is not a particle, the ground may not be horizontal, the path may not be a quadratic (parabola) or it might not travel in a vertical plane (Spin was mentioned in this context).

---
topic: "Parametric Equations"
subtopic: "Parametric equations"
---
### **Question 13**

A curve $C$ has parametric equations

$$x = \frac{t^2 + 5}{t^2 + 1} \quad y = \frac{4t}{t^2 + 1} \quad t \in \mathbb{R}$$

Show that all points on $C$ satisfy

$$(x - 3)^2 + y^2 = 4$$

**(3)**

**(Total for Question 13 is 3 marks)**

### **Mark Scheme 13**

#### **Part (a)**

**Step 1: Find expression for $x - 3$**
$$x - 3 = \frac{t^2 + 5}{t^2 + 1} - 3 = \frac{t^2 + 5 - 3(t^2 + 1)}{t^2 + 1} = \frac{-2t^2 + 2}{t^2 + 1}$$
- **[M1]** Finds an expression for $x - 3$ as a single algebraic fraction.

**Step 2: Substitute $x - 3$ and $y$ into LHS of Cartesian equation**
$$(x - 3)^2 + y^2 = \left(\frac{-2t^2 + 2}{t^2 + 1}\right)^2 + \left(\frac{4t}{t^2 + 1}\right)^2$$
$$= \frac{4t^4 - 8t^2 + 4}{(t^2 + 1)^2} + \frac{16t^2}{(t^2 + 1)^2}$$
- **[M1]** Substitutes into $(x - 3)^2 + y^2$ and expands numerator correctly.

**Step 3: Simplify to reach the RHS**
$$= \frac{4t^4 + 8t^2 + 4}{(t^2 + 1)^2} = \frac{4(t^4 + 2t^2 + 1)}{(t^2 + 1)^2} = \frac{4(t^2 + 1)^2}{(t^2 + 1)^2} = 4$$
- **[A1]** Completes the proof successfully showing LHS = RHS.

### **Examiner Report 13**

A solution gaining all three marks was relatively rare to see, and there were many very poor demonstrations of algebraic manipulation seen. Many candidates managed to score the first M mark but usually were unable to make further progress. The attempts were split between candidates who attempted to substitute into the LHS of the Cartesian equation to give an equation/expression in $t$ and those who attempted to eliminate $t$, usually via $t^2 = (5-x)/(x-1)$, to give an equation involving $x$ and $y$ only. The errors then ranged from incorrect squaring of a bracket to incorrect manipulation of fractions with very few unable to complete the proof.

---
topic: "Differentiation"
subtopic: "The quotient rule"
---
### **Question 14**

Given that

$$y = \frac{x - 4}{2 + \sqrt{x}} \quad x > 0$$

show that 

$$\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{1}{A\sqrt{x}} \quad x > 0$$

where $A$ is a constant to be found. **(4)**

**(Total for Question 14 is 4 marks)**

### **Mark Scheme 14**

#### **Part (a)**

**Step 1: Apply the quotient rule or product rule**
Let $u = x - 4, v = 2 + x^{\frac{1}{2}}$
$$\frac{\mathrm{d}u}{\mathrm{d}x} = 1, \quad \frac{\mathrm{d}v}{\mathrm{d}x} = \frac{1}{2}x^{-\frac{1}{2}}$$
$$\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{(2 + \sqrt{x})(1) - (x - 4)\left(\frac{1}{2}x^{-\frac{1}{2}}\right)}{(2 + \sqrt{x})^2}$$
- **[M1]** Correct application of the quotient rule (or product rule).
- **[A1]** Correct derivative expression before simplification.

**Step 2: Simplify the numerator**
$$\frac{2 + \sqrt{x} - \frac{1}{2}x^{\frac{1}{2}} + 2x^{-\frac{1}{2}}}{(2 + \sqrt{x})^2} = \frac{2 + \frac{1}{2}\sqrt{x} + \frac{2}{\sqrt{x}}}{(2 + \sqrt{x})^2}$$
Multiplying numerator and denominator by $2\sqrt{x}$:
$$= \frac{4\sqrt{x} + x + 4}{2\sqrt{x}(2 + \sqrt{x})^2}$$
- **[M1]** Collects terms and clears fractional powers.

**Step 3: Factorise and cancel**
Note that $x + 4\sqrt{x} + 4 = (\sqrt{x} + 2)^2 = (2 + \sqrt{x})^2$:
$$\frac{(2 + \sqrt{x})^2}{2\sqrt{x}(2 + \sqrt{x})^2} = \frac{1}{2\sqrt{x}}$$
$A = 2$.
- **[A1]** Completes algebraic simplification to obtain $\frac{1}{2\sqrt{x}}$ with $A = 2$.

### **Examiner Report 14**

This question proved equally challenging and very few fully correct solutions were seen. The modal mark achieved here was 2, scored by over $40\%$ of the candidates, most often for a fully correct attempt at $\frac{\mathrm{d}y}{\mathrm{d}x}$.

Most solutions seen used the quotient rule although incorrect application of the rule often meant that no marks could be awarded. The most common errors were subtracting the wrong way round on the numerator, or else adding the two expressions on the numerator. Differentiation of $\sqrt{x}$ surprisingly caused a few problems as well. Product rule expansions seldom got past the first expression.

The ability to manipulate the ensuing algebraic expression was often lacking, with fractional terms within a fraction, the main cause for failure.

Alternative methods which might have simplified the algebra were seen, but only rarely. Only a handful spotted that a difference of two squares method applied to the numerator would have made this a very simple problem.

---
topic: "Algebraic Methods"
subtopic: "Methods of proof"
---
### **Question 15**

**(i)** Use proof by exhaustion to show that for $n \in \mathbb{N}, n \leqslant 4$

$$(n + 1)^3 > 3^n$$

**(2)**

**(ii)** Given that $m^3 + 5$ is odd, use proof by contradiction to show, using algebra, that $m$ is even. **(4)**

**(Total for Question 15 is 6 marks)**

### **Mark Scheme 15**

#### **Part (i)**

**Step 1: Test all required values of $n$ ($1, 2, 3, 4$)**
* For $n = 1$: $(1 + 1)^3 = 8$, $3^1 = 3 \Rightarrow 8 > 3$ (True)
* For $n = 2$: $(2 + 1)^3 = 27$, $3^2 = 9 \Rightarrow 27 > 9$ (True)
* For $n = 3$: $(3 + 1)^3 = 64$, $3^3 = 27 \Rightarrow 64 > 27$ (True)
* For $n = 4$: $(4 + 1)^3 = 125$, $3^4 = 81 \Rightarrow 125 > 81$ (True)
- **[M1]** Tests all integer values $n = 1, 2, 3, 4$ in both expressions.
- **[A1]** Evaluates all cases correctly and makes a concluding statement that the inequality holds for all $n \leqslant 4$.

#### **Part (ii)**

**Step 2: State the assumption for proof by contradiction**
Assume that $m$ is odd (i.e. $m = 2k + 1$ for some integer $k$).
- **[M1]** Assumes the negation: $m$ is odd.

**Step 3: Substitute into $m^3 + 5$ and expand**
$$m^3 + 5 = (2k + 1)^3 + 5 = 8k^3 + 12k^2 + 6k + 1 + 5 = 8k^3 + 12k^2 + 6k + 6$$
- **[M1]** Substitutes $m = 2k + 1$ into $m^3 + 5$ and expands the cubic correctly.

**Step 4: Factorise and deduce contradiction**
$$8k^3 + 12k^2 + 6k + 6 = 2(4k^3 + 6k^2 + 3k + 3)$$
Since $4k^3 + 6k^2 + 3k + 3$ is an integer, $m^3 + 5$ is even.
- **[A1]** Shows that $m^3 + 5$ is even (a multiple of 2).

**Step 5: State contradiction and conclusion**
This contradicts the given statement that $m^3 + 5$ is odd. Therefore, $m$ must be even.
- **[A1]** Completes the proof by contradiction with a clear logical deduction.

### **Examiner Report 15**

Candidates have not been too successful in answering questions on the topic of 'Proof' within this new specification, and this question proved to be no different.

Part (i) The meaning of "proof by exhaustion" was not fully understood by all. Many candidates failing to consider all four of the possible cases mentioned. A common response was to test just $n = 4$ and $n = 5$ and conclude that it was true for $n = 4$ but not $n = 5$ so it was proven for $n \leqslant 4$.

Some candidates who did consider all values of $n = 1, 2, 3$ and $4$, left some expressions unevaluated. Occasionally the eight required values were found but there was no evidence that they were being compared. It was essential that a proper conclusion is made at the end of a proof, and despite having convincing working and reasons, some candidates lost the final accuracy mark here because they did not have a conclusion saying that the required result was indeed true.

Part (ii) Very many candidates did score the first mark here for saying "Suppose that $m$ is odd". However, a common error was to state "let $m^3 + 5$ be odd" instead leading to 0 marks. It was common to see $2p+1$ or $2k+1$ being used to represent an odd number and there were many occasions where $(2p+1)^3 + 5$ was seen in a candidate's working. In some cases there were algebraic errors in attempting to expand the cube of $(2p+1)$, but most candidates did achieve the required four term cubic $8p^3 + 12p^2 + 6p + 6$. When this cubic was correct, those candidates very often went on to gain the next two accuracy marks by proving, by factorisation, that $m^3 + 5$ was even, and then stating that there is a contradiction (to the assumption that $m$ is odd) and so $m$ must be even.
