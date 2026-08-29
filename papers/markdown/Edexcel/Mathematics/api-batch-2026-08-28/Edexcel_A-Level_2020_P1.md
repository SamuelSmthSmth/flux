---
topic: "Binomial Expansion"
subtopic: "Expanding (1 + x)^n"
---
### **Question 1**

**(a)** Find the first four terms, in ascending powers of $x$, of the binomial expansion of
$$(1 + 8x)^{\frac{1}{2}}$$
giving each term in simplest form. **(3)**

**(b)** Explain how you could use $x = \frac{1}{32}$ in the expansion to find an approximation for $\sqrt{5}$.

There is no need to carry out the calculation. **(2)**

**(Total for Question 1 is 5 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Set up the binomial expansion** 
$$(1 + 8x)^{\frac{1}{2}} = 1 + \left(\frac{1}{2}\right)(8x) + \frac{\left(\frac{1}{2}\right)\left(-\frac{1}{2}\right)}{2!}(8x)^2 + \frac{\left(\frac{1}{2}\right)\left(-\frac{1}{2}\right)\left(-\frac{3}{2}\right)}{3!}(8x)^3$$
- **[M1]** Correct structure for the first four terms: $1 + n(ax) + \frac{n(n-1)}{2!}(ax)^2 + \frac{n(n-1)(n-2)}{3!}(ax)^3$ with $n = \frac{1}{2}$ and $a = 8$.

**Step 2: Simplify each term**
$$= 1 + 4x - 8x^2 + 32x^3$$
- **[A1]** Any two correct simplified terms.
- **[A1]** All four terms correct: $1 + 4x - 8x^2 + 32x^3$.

#### **Part (b)**

**Step 3: Explain the substitution**
Substitute $x = \frac{1}{32}$ into $(1 + 8x)^{\frac{1}{2}}$ to get $\left(1 + \frac{8}{32}\right)^{\frac{1}{2}} = \left(\frac{5}{4}\right)^{\frac{1}{2}} = \frac{\sqrt{5}}{2}$.
- **[M1]** Substitute $x = \frac{1}{32}$ into the expansion and recognize $\left(1 + \frac{8}{32}\right)^{\frac{1}{2}} = \frac{\sqrt{5}}{2}$ (or equivalent).
- **[A1]** Complete clear explanation stating to substitute $x = \frac{1}{32}$ into the expansion and multiply the result by 2 to find an approximation for $\sqrt{5}$.

### **Examiner Report 1**

As hoped for, this proved to be a gentle and accessible start to the paper. The majority of prepared candidates scored all available marks in part (a). Errors, although rare, were mainly seen in the failure not to square the 8 of $(8x)^2$. Part (b) was found to be more demanding. Successful students substituted $x = \frac{1}{32}$ into $(1 + 8x)^{\frac{1}{2}}$ and noted that the result was $\frac{\sqrt{5}}{2}$. It then became a simple task of stating that you merely needed to substitute $x = \frac{1}{32}$ into the expansion in (a) and multiply the result by 2. Concise explanations are still a weakness in the early years of this specification.

---
topic: "Exponentials and Logarithms"
subtopic: "Solving equations using logarithms"
---
### **Question 2**

By taking logarithms of both sides, solve the equation
$$4^{3p-1} = 5^{2\mathcal{L}}$$
giving the value of $p$ to one decimal place. **(3)**

**(Total for Question 2 is 3 marks)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Take logarithms of both sides**
$$\log(4^{3p-1}) = \log(5^{210})$$
- **[M1]** Takes logarithms of both sides and uses the power law correctly, e.g., $(3p - 1)\log 4 = 210 \log 5$ (or using $\ln$).

**Step 2: Rearrange to solve for $p$**
$$3p - 1 = \frac{210 \log 5}{\log 4}$$
$$3p = \frac{210 \log 5}{\log 4} + 1$$
$$p = \frac{1}{3}\left(\frac{210 \log 5}{\log 4} + 1\right)$$
- **[M1]** Correct rearrangement and isolation of $p$.

**Step 3: Evaluate**
$$p = 81.6$$
- **[A1]** $81.6$ (to 1 decimal place).

### **Examiner Report 2**

As with question 1 there were many fully correct answers here. Of these, most took logs or lns of both sides, then used the power law on each side and the correct order of operations before proceeding to the correct answer of 81.6. There were a few candidates who failed to put brackets around $(3p - 1)$ but they were usually able to recover. There were several cases of candidates failing to apply the power rule to both sides, usually not dealing with the '210'. Some candidates misapplied the power rule, multiplying first for example by 3, rather than $3p - 1$. 

Common errors were:
- after applying the power rule correctly changing $\log 5 / \log 4$ to $\log(5/4)$.
- taking either $\log_4$ of one side or $\log_5$ of the other without any application of the power law.

---
topic: "Vectors"
subtopic: "Vectors"
---
### **Question 3**

Relative to a fixed origin $O$,
- point $A$ has position vector $2\mathbf{i} + 5\mathbf{j} - 6\mathbf{k}$
- point $B$ has position vector $3\mathbf{i} - 3\mathbf{j} - 4\mathbf{k}$
- point $C$ has position vector $2\mathbf{i} - 16\mathbf{j} + 4\mathbf{k}$

**(a)** Find $\overrightarrow{AB}$. **(2)**

**(b)** Show that quadrilateral $OABC$ is a trapezium, giving reasons for your answer. **(2)**

**(Total for Question 3 is 4 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Find $\overrightarrow{AB}$**
$$\overrightarrow{AB} = \mathbf{b} - \mathbf{a} = (3\mathbf{i} - 3\mathbf{j} - 4\mathbf{k}) - (2\mathbf{i} + 5\mathbf{j} - 6\mathbf{k}) = \mathbf{i} - 8\mathbf{j} + 2\mathbf{k}$$
- **[M1]** Attempt to find $\overrightarrow{AB}$ by $\mathbf{b} - \mathbf{a}$ or $\mathbf{a} - \mathbf{b}$.
- **[A1]** Correct vector $\mathbf{i} - 8\mathbf{j} + 2\mathbf{k}$ (allow column vector notation).

#### **Part (b)**

**Step 2: Show that $OABC$ is a trapezium**
$$\overrightarrow{OC} = 2\mathbf{i} - 16\mathbf{j} + 4\mathbf{k}$$
$$\overrightarrow{OC} = 2(\mathbf{i} - 8\mathbf{j} + 2\mathbf{k}) = 2\overrightarrow{AB}$$
Since $\overrightarrow{OC} = 2\overrightarrow{AB}$, the sides $OC$ and $AB$ are parallel. Therefore, $OABC$ is a trapezium.
- **[M1]** Compares $\overrightarrow{OC}$ and $\overrightarrow{AB}$ (or other appropriate vectors) to show they are scalar multiples (parallel).
- **[A1]** Correct deduction with a valid reason stating that one pair of opposite sides are parallel.

### **Examiner Report 3**

In part (a) most candidates were able to successfully subtract vectors the correct way round gaining both marks. Very few candidates added the two vectors together.
In (b) those who gained both marks were able to compare the two vectors $\overrightarrow{AB}$ and $\overrightarrow{OC}$ to show that they were parallel and conclude that $OABC$ is a trapezium. Usually candidates made a sketch of a trapezium so they could visualize which vectors or sides they would compare. This is a very good idea and should be encouraged by centres. 
Marks were lost when:
- candidates did not give a minimal conclusion after finding $\overrightarrow{OC}$ and $\overrightarrow{AB}$ were parallel.
- candidates incorrectly stating that $\overrightarrow{AB} = 2\overrightarrow{OC}$.
- candidates finding the length of each side $OABC$ rather than their directions.

---
topic: "Functions and Graphs"
subtopic: "Inverse functions"
---
### **Question 4**

The function $\text{f}$ is defined by
$$\text{f}(x) = \frac{3x - 7}{x - 2} \quad x \in \mathbb{R}, x \neq 2$$

**(a)** Find $\text{f}^{-1}(7)$. **(2)**

**(b)** Show that $\text{ff}(x) = \frac{ax + b}{x - 3}$ where $a$ and $b$ are integers to be found. **(3)**

**(Total for Question 4 is 5 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Method 1: Find $\text{f}^{-1}(x)$ first**
Let $y = \frac{3x - 7}{x - 2}$
$$yx - 2y = 3x - 7$$
$$yx - 3x = 2y - 7$$
$$x(y - 3) = 2y - 7 \implies \text{f}^{-1}(x) = \frac{2x - 7}{x - 3}$$
$$\text{f}^{-1}(7) = \frac{2(7) - 7}{7 - 3} = \frac{7}{4}$$

**Method 2: Solve $\text{f}(x) = 7$**
$$\frac{3x - 7}{x - 2} = 7 \implies 3x - 7 = 7(x - 2)$$
$$3x - 7 = 7x - 14 \implies 4x = 7 \implies x = \frac{7}{4}$$
- **[M1]** Valid method to find $\text{f}^{-1}(7)$ (either finding inverse function and substituting 7, or solving $\text{f}(x) = 7$).
- **[A1]** Correct answer $\frac{7}{4}$ (or $1.75$).

#### **Part (b)**

**Step 1: Form the composite function $\text{ff}(x)$**
$$\text{ff}(x) = \text{f}\left(\frac{3x - 7}{x - 2}\right) = \frac{3\left(\frac{3x - 7}{x - 2}\right) - 7}{\left(\frac{3x - 7}{x - 2}\right) - 2}$$
- **[M1]** Correct substitution of $\text{f}(x)$ into $\text{f}(x)$.

**Step 2: Simplify the rational expression**
Multiply numerator and denominator by $(x - 2)$:
$$\text{ff}(x) = \frac{3(3x - 7) - 7(x - 2)}{(3x - 7) - 2(x - 2)} = \frac{9x - 21 - 7x + 14}{3x - 7 - 2x + 4}$$
$$= \frac{2x - 7}{x - 3}$$
- **[M1]** Correct method of clearing fractions by multiplying numerator and denominator by $(x - 2)$.
- **[A1]** Correct expression with integers $a = 2$ and $b = -7$.

### **Examiner Report 4**

This was a relatively straightforward test on function notation.
In part (a) most candidates opted to find the inverse function $\text{f}^{-1}(x)$ before substituting in $x = 7$. Very few attempted the more straightforward method of solving $\text{f}(x) = 7$. Most candidates achieved some success, with some slips being made by those attempting to find $\text{f}^{-1}(x)$. Of those gaining no marks, the majority came from a misunderstanding of the notation with some substituting $x = 7$ into $\text{f}'(x)$ and others into $[\text{f}(x)]^{-1}$.
In part (b) most candidates understood the notation and gained the first mark by forming an expression of the correct form. Many were then able to multiply both numerator and denominator by $(x - 2)$ to form a single fraction of the required form. This part is where most errors crept in; some having problems with the bracketing but most with the process of multiplying all terms on both numerator and denominator by the $(x - 2)$ term.

---
topic: "Sequences and Series"
subtopic: "Arithmetic sequences"
---
### **Question 5**

A car has six forward gears.

The fastest speed of the car
- in $1^{\text{st}}$ gear is $28\text{ km h}^{-1}$
- in $6^{\text{th}}$ gear is $115\text{ km h}^{-1}$

Given that the fastest speed of the car in successive gears is modelled by an arithmetic sequence,

**(a)** find the fastest speed of the car in $3^{\text{rd}}$ gear. **(3)**

Given that the fastest speed of the car in successive gears is modelled by a geometric sequence,

**(b)** find the fastest speed of the car in $5^{\text{th}}$ gear. **(3)**

**(Total for Question 5 is 6 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Set up equations for the arithmetic sequence**
$$a = 28$$
$$a_6 = a + 5d = 115$$
- **[M1]** Uses correct formula for arithmetic term $a_6 = a + 5d$ with $a = 28$ and $a_6 = 115$.

**Step 2: Solve for $d$**
$$28 + 5d = 115 \implies 5d = 87 \implies d = 17.4$$
- **[M1]** Solves for the common difference $d$.

**Step 3: Find $a_3$**
$$a_3 = a + 2d = 28 + 2(17.4) = 62.8$$
- **[A1]** $62.8\text{ km h}^{-1}$ (or $\frac{314}{5}$).

#### **Part (b)**

**Step 4: Set up equations for the geometric sequence**
$$a = 28$$
$$a_6 = ar^5 = 115$$
- **[M1]** Uses correct formula for geometric term $ar^5 = 115$ with $a = 28$.

**Step 5: Solve for $r$ and find $a_5$**
$$r^5 = \frac{115}{28} \implies r = \left(\frac{115}{28}\right)^{\frac{1}{5}}$$
$$a_5 = ar^4 = 28 \left(\left(\frac{115}{28}\right)^{\frac{1}{5}}\right)^4 = 28 \left(\frac{115}{28}\right)^{\frac{4}{5}}$$
$$a_5 \approx 98.4$$
- **[M1]** Correct method to find $r$ or $r^4$ and substitute into $a_5 = ar^4$.
- **[A1]** $98.4$ (accept $98.37\dots$).

### **Examiner Report 5**

This question on modelling the speed of a car using arithmetic and geometric sequences proved popular. Many candidates answered both parts well and gained full marks.
In (a) the most common errors were to divide $(115 - 28)$ by 6 in finding $d$. In part (b) errors were mainly due to a lack of accuracy and prematurely rounding their value for $r$. A small number of candidates used the sum formula in both (a) and (b) and as a result scored no marks. Additionally other candidates used their answer from (a) as one of the terms in (b), leading to an incorrect value of $r$. The second method mark was made available to these candidates.

---
topic: "Trigonometry and Modelling"
subtopic: "Simplifying a cos x ± b sin x"
---
### **Question 6**

**(a)** Express $\sin x + 2\cos x$ in the form $R\sin(x + \alpha)$ where $R$ and $\alpha$ are constants, $R > 0$ and $0 < \alpha < \frac{\pi}{2}$.

Give the exact value of $R$ and give the value of $\alpha$ in radians to 3 decimal places. **(3)**

The temperature, $\theta\text{ \textdegree C}$, inside a room on a given day is modelled by the equation
$$\theta = 5 + \sin\left(\frac{\pi t}{12} - 3\right) + 2\cos\left(\frac{\pi t}{12} - 3\right) \quad 0 \leqslant t < 24$$
where $t$ is the number of hours after midnight.

Using the equation of the model and your answer to part (a),

**(b)** deduce the maximum temperature of the room during this day, **(1)**

**(c)** find the time of day when the maximum temperature occurs, giving your answer to the nearest minute. **(3)**

**(Total for Question 6 is 7 marks)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Expand $R\sin(x + \alpha)$**
$$R\sin(x + \alpha) = R\sin x\cos\alpha + R\cos x\sin\alpha$$
Comparing coefficients with $\sin x + 2\cos x$:
$$R\cos\alpha = 1, \quad R\sin\alpha = 2$$
- **[M1]** Uses angle addition formula correctly and equates coefficients to find $R$ and $\alpha$.

**Step 2: Find $R$ and $\alpha$**
$$R = \sqrt{1^2 + 2^2} = \sqrt{5}$$
$$\tan\alpha = 2 \implies \alpha = 1.107\text{ radians}$$
- **[A1]** Exact value $R = \sqrt{5}$.
- **[A1]** $\alpha = 1.107$ (3 decimal places).

#### **Part (b)**

**Step 3: Find maximum temperature**
$$\theta_{\max} = 5 + \sqrt{5} \approx 7.24^{\circ}\text{C}$$
- **[B1]** $5 + \sqrt{5}$ (or $7.24$).

#### **Part (c)**

**Step 4: Set argument for maximum**
$$\frac{\pi t}{12} - 3 + \alpha = \frac{\pi}{2} \quad (\text{or } 2\pi + \frac{\pi}{2})$$
$$\frac{\pi t}{12} - 3 + 1.10715 = \frac{\pi}{2}$$
- **[M1]** Sets the argument of the combined trigonometric function equal to $\frac{\pi}{2}$ (or equivalent maximum position).

**Step 5: Solve for $t$**
$$\frac{\pi t}{12} = \frac{\pi}{2} + 3 - 1.10715 \implies \frac{\pi t}{12} \approx 3.463$$
$$t = \frac{12}{\pi}(3.463) \approx 13.226\text{ hours}$$
- **[M1]** Correct rearrangement to solve for $t$.

**Step 6: Convert to time of day**
$0.226 \times 60 \approx 14$ minutes.
Time is $13:14$ (or 1:14 pm).
- **[A1]** $13:14$ (or 1:14 pm, or 13 hours 14 minutes).

### **Examiner Report 6**

This was the second modelling question on the paper. 
Part (a) was generally well done, with few errors on giving the exact value of $R$ or the angle in radians to the required degree of accuracy. A very small number of candidates gave $R$ as a decimal or the angle in degrees.
Part (b) was also well done with most of those candidates giving the exact answer for the temperature. Occasionally candidates obtained an answer of $8^{\circ}\text{C}$ from $5 + 1 + 2$, which they obtained from taking the maximum values of $\sin$ and $\cos$.
Part (c) was more challenging. The correct answer could be obtained fairly quickly by solving $\frac{\pi t}{12} + 1.107 - 3 = \frac{\pi}{2}$ but often the 1.107 and/or the 3 were omitted. Stating the time in an acceptable format also proved surprisingly difficult.

---
topic: "Equations and Inequalities"
subtopic: "Regions"
---
### **Question 7**

**Figure 1** _(A sketch of a curve $C$ with equation $y = \text{f}(x)$ and a straight line $l$, meeting at $(-2, 13)$ and $(0, 25)$ with $C$ having a minimum turning point at $(-2, 13)$)._

```tikz
\begin{tikzpicture}[scale=0.8]
  \draw[->] (-5,0) -- (2,0) node[below] {$x$};
  \draw[->] (0,-1) -- (0,28) node[left] {$y$};
  \draw[domain=-4.2:0.5, smooth, thick] plot (\x, {(\x+2)*(\x+2) + 13});
  \draw[domain=-3:0.8, smooth, thick] plot (\x, {6*(\x) + 25});
  \fill (-2,13) circle (2pt) node[below left] {$(-2,13)$};
  \fill (0,25) circle (2pt) node[right] {$25$};
  \node at (-3,20) {$C$};
  \node at (-2.5,4) {$l$};
  \node at (-1.5,18) {$R$};
\end{tikzpicture}
```

Figure 1 shows a sketch of a curve $C$ with equation $y = \text{f}(x)$ and a straight line $l$.

The curve $C$ meets $l$ at the points $(-2, 13)$ and $(0, 25)$ as shown.

The shaded region $R$ is bounded by $C$ and $l$ as shown in Figure 1.

Given that
- $\text{f}(x)$ is a quadratic function in $x$
- $(-2, 13)$ is the minimum turning point of $y = \text{f}(x)$

use inequalities to define $R$. **(5)**

**(Total for Question 7 is 5 marks)**

### **Mark Scheme 7**

#### **Part (a)**

**Step 1: Find the equation of the curve $C$**
Since $(-2, 13)$ is the minimum turning point:
$$\text{f}(x) = a(x + 2)^2 + 13$$
Using the point $(0, 25)$:
$$25 = a(0 + 2)^2 + 13 \implies 12 = 4a \implies a = 3$$
$$\text{f}(x) = 3(x + 2)^2 + 13 \quad (\text{or } 3x^2 + 12x + 25)$$
- **[M1]** Uses the turning point form $\text{f}(x) = a(x + 2)^2 + 13$ or expands $ax^2 + bx + c$ using given points and turning point condition.
- **[A1]** Correct equation for the curve: $y = 3(x + 2)^2 + 13$ (or $y = 3x^2 + 12x + 25$).

**Step 2: Find the equation of the line $l$**
Using points $(-2, 13)$ and $(0, 25)$:
Gradient $m = \frac{25 - 13}{0 - (-2)} = \frac{12}{2} = 6$
Equation of line: $y = 6x + 25$
- **[M1]** Finds the equation of the straight line $l$: $y = 6x + 25$.

**Step 3: Define the region $R$ using inequalities**
$$3(x + 2)^2 + 13 \leqslant y \leqslant 6x + 25$$
- **[M1]** Combines the two boundary equations with inequality signs.
- **[A1]** Fully correct inequality statements defining $R$: $3(x + 2)^2 + 13 \leqslant y \leqslant 6x + 25$ (or equivalent).

### **Examiner Report 7**

A very significant majority of the candidates did not seem to know how to define a region using inequalities. It was common to see a response where the area of region $R$ was attempted using integration. It was only a small minority of candidates who made a correct inequality statement at the end, even with the allowance of follow through on their quadratic curve and their line equations. It was often the case that this final mark was lost due to a candidate using the letter $R$ rather than $y$ in their inequality. 

Finding the equations of the boundaries of the region is essential when defining the inequalities, so candidates who went on to find an area were mostly still trying to do this and if successful would have only lost the final mark. A very small minority of candidates found the area below the line by using a trapezium area formula and so did not manage to gain the marks for the line equation.

Finding the line equation correctly was achieved by a majority of candidates, although a slip with the line gradient did occur occasionally even if the diagram showed a convincingly positive gradient. Finding the equation of the quadratic curve was found to be more difficult, with a common error being $\text{f}(x) = (x + 2)^2 + 13$. Occasionally a candidate spotted that this was not consistent with the curve going through $(0, 25)$ and tried to adjust their answer, but not often in a correct way. Attempts at using $\text{f}(x) = a(x + 2)^2 + 13$ were often successful at finding $a$, whilst attempts at using $\text{f}(x) = ax^2 + bx + c$ were much less often correct.

---
topic: "Differential Equations"
subtopic: "Modelling with differential equations"
---
### **Question 8**

A new smartphone was released by a company.

The company monitored the total number of phones sold, $n$, at time $t$ days after the phone was released.

The company observed that, during this time,
the rate of increase of $n$ was proportional to $n$

Use this information to write down a suitable equation for $n$ in terms of $t$.

(You do not need to evaluate any unknown constants in your equation.) **(2)**

**(Total for Question 8 is 2 marks)**

### **Mark Scheme 8**

#### **Part (a)**

**Step 1: Write down the differential equation and solve it**
$$\frac{dn}{dt} = kn \implies n = Ae^{kt} \quad (\text{or } n = Ae^{\lambda t}, \text{ etc.})$$
- **[M1]** Translates the proportionality statement into a correct differential equation or exponential growth model form.
- **[A1]** Correct equation for $n$ in terms of $t$, e.g., $n = Ae^{kt}$ (with explicit mention or definition of constants).

### **Examiner Report 8**

Candidates were expected to realise that ''when the rate of change is proportional to the $y$ value, an exponential model should be used.'' The question seemed to take a great many candidates by surprise and many assumed that '$n$ was proportional to $n$' or that '$n$ was proportional to $t$', not that the rate of growth of '$n$ was proportional to $n$'. Those that did interpret the situation correctly could write down an equation very quickly whereas others attempted to solve a differential equation.

Equations scoring one of two marks were common and included $n = Ae^{kt}$, $n = e^{kt}$ and $n = Ae^{kt} + b$.

---
topic: "Differentiation"
subtopic: "The product rule"
---
### **Question 9**

**Figure 2** _(A sketch of the curve $C$ with equation $y = \text{f}(x)$ where $\text{f}(x) = 4(x^2 - 2)\text{e}^{-2x}$, showing a local minimum, a local maximum, and passing below the origin)._

```tikz
\begin{tikzpicture}[scale=0.8]
  \draw[->] (-3,0) -- (4,0) node[below] {$x$};
  \draw[->] (0,-4) -- (0,3) node[left] {$y$};
  \draw[domain=-2.5:3.2, smooth, thick] plot (\x, {4*((\x)^2 - 2)*exp(-2*(\x))});
  \node at (-1.5,2.5) {$C$};
  \fill (0,0) node[below left] {$O$};
\end{tikzpicture}
```

Figure 2 shows a sketch of the curve $C$ with equation $y = \text{f}(x)$ where
$$\text{f}(x) = 4(x^2 - 2)\text{e}^{-2x} \quad x \in \mathbb{R}$$

**(a)** Show that $\text{f}'(x) = 8(2 + x - x^2)\text{e}^{-2x}$. **(3)**

**(b)** Hence find, in simplest form, the exact coordinates of the stationary points of $C$. **(3)**

The function $\text{g}$ and the function $\text{h}$ are defined by
$$\text{g}(x) = 2\text{f}(x) \quad x \in \mathbb{R}$$
$$\text{h}(x) = 2\text{f}(x) - 3 \quad x \geqslant 0$$

**(c)** Find
**(i)** the range of $\text{g}$
**(ii)** the range of $\text{h}$ **(3)**

**(Total for Question 9 is 9 marks)**

### **Mark Scheme 9**

#### **Part (a)**

**Step 1: Apply the product rule**
Let $u = 4(x^2 - 2)$ and $v = \text{e}^{-2x}$
$$\frac{du}{dx} = 8x, \quad \frac{dv}{dx} = -2\text{e}^{-2x}$$
$$\text{f}'(x) = 4(x^2 - 2)(-2\text{e}^{-2x}) + (8x)(\text{e}^{-2x})$$
- **[M1]** Uses the product rule correctly to differentiate $\text{f}(x)$.

**Step 2: Simplify to the required form**
$$\text{f}'(x) = \text{e}^{-2x}(-8x^2 + 16 + 8x) = 8\text{e}^{-2x}(2 + x - x^2)$$
- **[A1]** Correct unsimplified derivative.
- **[A1]** Fully correct algebraic manipulation to reach the given expression $8(2 + x - x^2)\text{e}^{-2x}$.

#### **Part (b)**

**Step 3: Set derivative to zero**
$$8(2 + x - x^2)\text{e}^{-2x} = 0 \implies 2 + x - x^2 = 0 \quad (\text{since } \text{e}^{-2x} \neq 0)$$
$$(2 - x)(1 + x) = 0 \implies x = 2, \quad x = -1$$
- **[M1]** Sets $\text{f}'(x) = 0$ and solves the quadratic equation for $x$.

**Step 4: Find corresponding $y$-coordinates**
For $x = 2$: $y = 4(2^2 - 2)\text{e}^{-4} = 8\text{e}^{-4}$
For $x = -1$: $y = 4((-1)^2 - 2)\text{e}^{2} = -4\text{e}^{2}$
- **[A1]** Correct $y$-coordinates: $8\text{e}^{-4}$ and $-4\text{e}^{2}$.
- **[A1]** Correct exact coordinates: $(2, 8\text{e}^{-4})$ and $(-1, -4\text{e}^{2})$.

#### **Part (c)**

**Step 5: Find the range of $\text{g}$ and $\text{h}$**
**(i)** Range of $\text{g}$: $\text{g}(x) \geqslant 2(-4\text{e}^2) \implies [-8\text{e}^2, \infty)$
**(ii)** Range of $\text{h}$: Minimum value at $x = 2$ is $2(8\text{e}^{-4}) - 3 = 16\text{e}^{-4} - 3$. As $x \to \infty$, $\text{f}(x) \to 0$, so $\text{h}(x) \to -3$. Range is $[-3, 16\text{e}^{-4} - 3]$ (or $-3 \leqslant \text{h}(x) \leqslant 16\text{e}^{-4} - 3$).
- **[B1]** Correct range for $\text{g}$: $\text{g}(x) \geqslant -8\text{e}^2$.
- **[B1]** Correct lower bound for $\text{h}$: $-3$.
- **[B1]** Correct upper bound for $\text{h}$: $16\text{e}^{-4} - 3$ (with correct inclusive interval).

### **Examiner Report 9**

Parts (a) and (b) of question 9 were standard bookwork involving the product rule of differentiation using an exponential function. Well rehearsed candidates were very successful here scoring the majority of marks. The diagram should have helped in determining the maximum and minimum points of the function.

Unsurprisingly candidates found part (c) more challenging, especially (c)(ii) where the significance of $x = 0$ was rarely understood. It was however a good discriminator for stronger candidates.

---
topic: "Integration"
subtopic: "Integration by substitution"
---
### **Question 10**

**(a)** Use the substitution $x = u^2 + 1$ to show that
$$\int_{5}^{10} \frac{3\text{ dx}}{(x - 1)(3 + 2\sqrt{x - 1})} = \int_{p}^{q} \frac{6\text{ du}}{u(3 + 2u)}$$
where $p$ and $q$ are positive constants to be found. **(4)**

**(b)** Hence, using algebraic integration, show that
$$\int_{5}^{10} \frac{3\text{ dx}}{(x - 1)(3 + 2\sqrt{x - 1})} = \ln a$$
where $a$ is a rational constant to be found. **(6)**

**(Total for Question 10 is 10 marks)**

### **Mark Scheme 10**

#### **Part (a)**

**Step 1: Differentiate the substitution**
$$x = u^2 + 1 \implies \frac{dx}{du} = 2u \implies dx = 2u\text{ du}$$
- **[M1]** Correctly differentiates $x = u^2+1$ to find $\frac{dx}{du}$ or $dx$ in terms of $u$.

**Step 2: Substitute into the integral and change limits**
When $x = 10$, $10 = u^2 + 1 \implies u^2 = 9 \implies u = 3$ (since $u > 0$).
When $x = 5$, $5 = u^2 + 1 \implies u^2 = 4 \implies u = 2$.
Also, $x - 1 = u^2$ and $\sqrt{x - 1} = u$.
$$\int_{2}^{3} \frac{3(2u\text{ du})}{(u^2)(3 + 2u)} = \int_{2}^{3} \frac{6u\text{ du}}{u^2(3 + 2u)} = \int_{2}^{3} \frac{6\text{ du}}{u(3 + 2u)}$$
- **[A1]** Correct substitution of denominator terms and $dx$.
- **[A1]** Correct new limits $p = 2$ and $q = 3$.
- **[A1]** Fully correct intermediate line leading to the required expression.

#### **Part (b)**

**Step 3: Use partial fractions**
$$\frac{6}{u(3 + 2u)} \equiv \frac{A}{u} + \frac{B}{3 + 2u}$$
$$6 = A(3 + 2u) + Bu$$
Let $u = 0 \implies 3A = 6 \implies A = 2$.
Let $u = -\frac{3}{2} \implies -\frac{3}{2}B = 6 \implies B = -4$.
$$\frac{6}{u(3 + 2u)} = \frac{2}{u} - \frac{4}{3 + 2u}$$
- **[M1]** Correct partial fraction decomposition form with correct coefficients $A = 2$ and $B = -4$.

**Step 4: Integrate each term**
$$\int_{2}^{3} \left(\frac{2}{u} - \frac{4}{3 + 2u}\right)\text{ du} = \left[ 2\ln|u| - 4\frac{\ln|3 + 2u|}{2} \right]_{2}^{3}$$
$$= \left[ 2\ln u - 2\ln(3 + 2u) \right]_{2}^{3}$$
- **[M1]** Correct integration of the partial fractions to logarithmic terms (including division by 2 for the second term).

**Step 5: Substitute limits**
$$= \left(2\ln 3 - 2\ln(3 + 2(3))\right) - \left(2\ln 2 - 2\ln(3 + 2(2))\right)$$
$$= (2\ln 3 - 2\ln 9) - (2\ln 2 - 2\ln 7)$$
- **[M1]** Substitutes upper and lower limits 3 and 2 correctly into the integral.

**Step 6: Use logarithm laws to simplify**
$$= 2\ln 3 - 2(2\ln 3) - 2\ln 2 + 2\ln 7$$
$$= 2\ln 3 - 4\ln 3 - 2\ln 2 + 2\ln 7 = -2\ln 3 - 2\ln 2 + 2\ln 7$$
$$= \ln\left(\frac{7^2}{3^2 \times 2^2}\right) = \ln\left(\frac{49}{36}\right)$$
So $a = \frac{49}{36}$.
- **[A1]** Correct exact value $a = \frac{49}{36}$.

### **Examiner Report 10**

This question proved to be more discriminating than expected with many failing to notice the partial fractions in part (b), thereby losing 6 marks.

Part (a) was well answered by many candidates, particularly those who opted to calculate $dx/du$ rather than $du/dx$, as the latter proved harder to substitute correctly into the expression in terms of $u$. Some students lost the final accuracy mark for not showing a correct intermediate line with integral signs and some did not finish their working with an expression showing the given integral. A few candidates made arithmetic slips in finding the limits or did not attempt to change them at all.

Of those who did use partial fractions in part (b), most found the values of "$A$" and "$B$" correctly. Unfortunately many integrated $\frac{B}{3 + 2u}$ to $B\ln(3 + 2u)$, failing to divide the coefficient by 2. The final Method mark was still available for these candidates, but a number failed to simplify their numerical logs to an expression of the required form and so did not gain this mark.

A pleasing number of well prepared candidates did gain full marks in this question.

---
topic: "Circles"
subtopic: "Equation of a circle"
---
### **Question 11**

**Figure 3** _(Two intersecting circles $C_1$ and $C_2$ meeting at points $A$ and $B$, with $C_1$ centered at the origin $O$ and $C_2$ to the right)._

```tikz
\begin{tikzpicture}[scale=0.6]
  \draw[->] (-4,0) -- (6,0) node[below] {$x$};
  \draw[->] (0,-4) -- (0,4) node[left] {$y$};
  \draw (0,0) circle (3cm);
  \draw (4.5,0) circle (1.9cm);
  \fill (0,0) circle (2pt) node[below left] {$O$};
  \fill (3,1.4) circle (2pt) node[above right] {$A$};
  \fill (3,-1.4) circle (2pt) node[below right] {$B$};
  \node at (-1.5,1.5) {$C_1$};
  \node at (5,1.5) {$C_2$};
\end{tikzpicture}
```

Circle $C_1$ has equation $x^2 + y^2 = 100$

Circle $C_2$ has equation $(x - 15)^2 + y^2 = 40$

The circles meet at points $A$ and $B$ as shown in Figure 3.

**(a)** Show that angle $AOB = 0.635$ radians to 3 significant figures, where $O$ is the origin. **(4)**

The region shown shaded in Figure 3 is bounded by $C_1$ and $C_2$.

**(b)** Find the perimeter of the shaded region, giving your answer to one decimal place. **(4)**

**(Total for Question 11 is 8 marks)**

### **Mark Scheme 11**

#### **Part (a)**

**Step 1: Find the points of intersection or use the cosine rule on triangle $OAX$**
Centre of $C_2$ is $X(15, 0)$, radius of $C_2$ is $\sqrt{40}$.
Radius of $C_1$ is $OA = 10$.
In triangle $OAX$ (where $X$ is the centre of $C_2$):
$OX = 15$, $OA = 10$, $AX = \sqrt{40}$.
Let $\alpha = \angle AOX$. Using the cosine rule:
$$\cos\alpha = \frac{10^2 + 15^2 - (\sqrt{40})^2}{2(10)(15)} = \frac{100 + 225 - 40}{300} = \frac{285}{300} = 0.95$$
$$\alpha = \arccos(0.95) \approx 0.31765\text{ radians}$$
- **[M1]** Identifies radii and centre of circles and sets up triangle $OAX$ (or solves simultaneous equations for $A$).
- **[M1]** Applies the cosine rule correctly to find half the angle $AOB$ (or uses right-angled trigonometry / simultaneous equations).
- **[A1]** Calculates $\alpha \approx 0.31765$.
- **[A1]** Concludes angle $AOB = 2\alpha \approx 0.635$ radians (correct to 3 sig fig).

#### **Part (b)**

**Step 2: Find the arc lengths bounding the shaded region**
For circle $C_1$:
Radius $r_1 = 10$.
Reflex angle for major arc of $C_1$ (or remaining circumference):
$\text{Arc}_1 = r_1(2\pi - \theta) = 10(2\pi - 0.6353) \approx 10(5.6479) \approx 56.48$
For circle $C_2$:
Let $\beta$ be half the angle $AXB$ at the centre of $C_2$.
In triangle $OAX$, using the cosine rule for angle at $X$:
$$\cos\beta = \frac{(\sqrt{40})^2 + 15^2 - 10^2}{2(\sqrt{40})(15)} = \frac{40 + 225 - 100}{30\sqrt{40}} = \frac{165}{30\sqrt{40}} = \frac{5.5}{\sqrt{40}}$$
$$\beta = \arccos\left(\frac{5.5}{\sqrt{40}}\right) \approx 0.5163\text{ radians}$$
Angle $AXB = 2\beta \approx 1.0326\text{ radians}$.
Minor arc of $C_2$:
$\text{Arc}_2 = r_2(\text{angle}) = \sqrt{40} \times 1.0326 \approx 6.3245 \times 1.0326 \approx 6.53$
- **[M1]** Attempts to find the arc length on $C_1$ using $r(2\pi - \theta)$ (or equivalent).
- **[M1]** Attempts to find angle subtended at the centre of $C_2$ (or arc length on $C_2$).
- **[A1]** Correct arc length on $C_1 \approx 56.5$ (or $56.48$).
- **[A1]** Correct perimeter $\approx 63.0$ (accept $63.0$ or $63.01$).

### **Examiner Report 11**

This proved to be a challenging question with very few candidates achieving full marks overall, and with many more difficulties encountered in (b) rather than (a). 

**(a)** Candidates used a variety of approaches. The most common started by using algebra to find the coordinates of the points where the circles meet. This was achieved correctly by a majority of those who did the question this way. Then the required angle was found either by trigonometry in a right angled triangle and doubling an angle, or by the cosine rule in triangle $AOB$. Errors in this approach included processing $x^2 + y^2 = 100$ into $x + y = 10$. Although a minority of candidates' answers stopped after finding coordinates for $A$ or $B$, there were a significant number who went on to score the remaining 2 marks. However, some did not seem to realise that length $OA = 10$ as it is a radius of $C_1$, and had to use the distance formula to find this length. 

Another approach that was seen, but not so frequently was to use knowledge of circle equations in finding the radii and centres, to establish the lengths of the sides of triangle $OAX$, with $X$ being the centre of circle $C_2$. Using the cosine rule then led to half of the required angle. When used, this method often gained all four marks.

**(b)** It was very common to see just the first mark scored in this part. This was due to many candidates wrongly assuming that the given angle $\text{AOB} = 0.635$ was the same size as the angle $AXB$ at the centre of circle $C_2$. For the minority of candidates who tried a correct method to find the size of angle $AXB$, or half of it, most of these achieved the correct values of either $1.03$ or $0.516$. Even for the minority of candidates who found one of these angles correctly, getting the final answer correct proved a challenge and only a very small minority managed this. Note that it was possible to do part (b) even if (a) was not attempted. However, it seemed that failure to find a way to do (a), led in nearly every case to no valid attempt at (b).

---
topic: "Trigonometric Identities and Equations"
subtopic: "Trigonometric identities"
---
### **Question 12**

In this question you must show all stages of your working.

Solutions relying entirely on calculator technology are not acceptable.

**(a)** Show that
$$\csc\theta - \sin\theta \equiv \cos\theta\cot\theta \quad \theta \neq (180n)^{\circ}, n \in \mathbb{Z}$$ **(3)**

**(b)** Hence, or otherwise, solve for $0 < x < 180^{\circ}$
$$\csc x - \sin x = \cos x\cot(3x - 50^{\circ})$$ **(5)**

**(Total for Question 12 is 8 marks)**

### **Mark Scheme 12**

#### **Part (a)**

**Step 1: Express in terms of sine and cosine**
$$\text{LHS} = \frac{1}{\sin\theta} - \sin\theta = \frac{1 - \sin^2\theta}{\sin\theta}$$
- **[M1]** Expresses $\csc\theta$ as $\frac{1}{\sin\theta}$ and combines terms over a common denominator.

**Step 2: Use trigonometric identity $1 - \sin^2\theta = \cos^2\theta$**
$$\frac{\cos^2\theta}{\sin\theta} = \frac{\cos\theta}{\sin\theta} \cos\theta = \cot\theta\cos\theta = \text{RHS}$$
- **[M1]** Uses $\cos^2\theta + \sin^2\theta = 1$ to simplify numerator.
- **[A1]** Completes the proof rigorously to reach $\cos\theta\cot\theta$.

#### **Part (b)**

**Step 3: Apply part (a) identity to the equation**
$$\cos x\cot x = \cos x\cot(3x - 50^{\circ})$$
$$\cos x\cot x - \cos x\cot(3x - 50^{\circ}) = 0$$
$$\cos x(\cot x - \cot(3x - 50^{\circ})) = 0$$
- **[M1]** Uses the identity from part (a) and factorises.

**Step 4: Solve for $\cos x = 0$**
$$\cos x = 0 \implies x = 90^{\circ}$$
- **[A1]** First correct solution $x = 90^{\circ}$.

**Step 5: Solve for $\cot x = \cot(3x - 50^{\circ})$**
$$\tan x = \tan(3x - 50^{\circ})$$
$$3x - 50^{\circ} = x + 180^{\circ}k \implies 2x = 50^{\circ} + 180^{\circ}k \implies x = 25^{\circ} + 90^{\circ}k$$
For $0 < x < 180^{\circ}$:
$k = 0 \implies x = 25^{\circ}$
$k = 1 \implies x = 115^{\circ}$
- **[M1]** Solves $\cot x = \cot(3x - 50^{\circ})$ by relating arguments (using interval $180^{\circ}$).
- **[A1]** Both remaining correct solutions $x = 25^{\circ}$ and $x = 115^{\circ}$.

### **Examiner Report 12**

Part (a) was generally answered well and there were remarkably few solutions containing missing variables. On this occasion, candidates who started with the RHS fared better as those who worked from the LHS occasionally missed the required step between $\cos^2\theta/\sin\theta$ and $\cos\theta\cot\theta$, while those who worked from both sides would often get confused or, if they progressed correctly they simply failed to make the necessary conclusion.

Part (b), however was very often left completely blank. Many who attempted it failed to see the connection with (a) and got lost in complicated trig expansions which led nowhere. Of those who did use part (a) to answer part (b), the most common solution was simply $x = 25$ after $\cos x$ had been cancelled, thus losing the solution given by $\cos x = 0$. Only a small minority of the most able found all 3 solutions.

---
topic: "Sequences and Series"
subtopic: "Recurrence relations"
---
### **Question 13**

A sequence of numbers $a_1, a_2, a_3, \dots$ is defined by
$$a_{n+1} = \frac{k(a_n + 2)}{a_n} \quad n \in \mathbb{N}$$
where $k$ is a constant.

Given that
- the sequence is a periodic sequence of order 3
- $a_1 = 2$

**(a)** show that
$$k^2 + k - 2 = 0$$ **(3)**

**(b)** For this sequence explain why $k \neq 1$. **(1)**

**(c)** Find the value of
$$\sum_{r=1}^{80} a_r$$ **(3)**

**(Total for Question 13 is 7 marks)**

### **Mark Scheme 13**

#### **Part (a)**

**Step 1: Find $a_2$ and $a_3$ in terms of $k$**
$$a_1 = 2$$
$$a_2 = \frac{k(2 + 2)}{2} = \frac{4k}{2} = 2k$$
$$a_3 = \frac{k(2k + 2)}{2k} = \frac{2k(k + 1)}{2k} = k + 1$$
- **[M1]** Correctly finds $a_2$ in terms of $k$.
- **[M1]** Correctly finds $a_3$ in terms of $k$.

**Step 2: Use periodicity of order 3**
Since the sequence has order 3, $a_4 = a_1 = 2$.
$$a_4 = \frac{k(a_3 + 2)}{a_3} = \frac{k(k + 1 + 2)}{k + 1} = \frac{k(k + 3)}{k + 1}$$
Set $a_4 = 2$:
$$\frac{k(k + 3)}{k + 1} = 2 \implies k^2 + 3k = 2k + 2$$
$$k^2 + k - 2 = 0$$
- **[A1]** Obtains $a_4$ and equates to 2, successfully showing $k^2 + k - 2 = 0$.

#### **Part (b)**

**Step 3: Explain why $k \neq 1$**
Solving $k^2 + k - 2 = 0 \implies (k + 2)(k - 1) = 0 \implies k = -2$ or $k = 1$.
If $k = 1$, the sequence becomes $2, 2, 2, \dots$ which is a periodic sequence of order 1 (not order 3).
- **[B1]** Gives a valid reason why $k \neq 1$ (e.g., sequence would be constant / period 1, or $a_1 = a_2 = a_3 = 2$).

#### **Part (c)**

**Step 4: Find the sum of the first 80 terms**
Using $k = -2$:
$a_1 = 2$
$a_2 = 2(-2) = -4$
$a_3 = -2 + 1 = -1$
The repeating cycle of 3 terms is $2, -4, -1$.
Sum of one period $S_3 = 2 + (-4) + (-1) = -3$.
Since $80 = 3 \times 26 + 2$:
$$\sum_{r=1}^{80} a_r = 26(-3) + a_1 + a_2 = -78 + 2 + (-4) = -80$$
- **[M1]** Identifies the values of the cycle using $k = -2$ ($2, -4, -1$) and recognises the period of 3.
- **[M1]** Uses the number of full cycles in 80 terms (26 cycles plus 2 terms).
- **[A1]** Correct sum $-80$.

### **Examiner Report 13**

This question on sequences proved very discriminating, with weaker candidates scoring only the first mark. As with many questions on this paper however, there were some excellent and well written responses.

In part (a) applying the iterative formula to find $a_2$ was achieved by almost every candidate. A significant number then attempted to find $a_3$ and also $a_4$ in many cases but failed to simplify expressions for $a_2 = \frac{4k}{2}$ and $a_3 = \frac{k(2k+2)}{2k}$. Setting $a_4 = a_1$ was often seen but fully correct proofs were rare.

In part (b) only a very small minority of candidates gave a correct and sufficient reason why $k$ cannot be equal to 1. Although a larger minority did state the sequence would be $2, 2, 2, \dots$ only a small number of these pointed out that this is not a periodic sequence with order 3.

Part (c) could be done independently to (a) and (b), and many candidates took advantage of this. It was not uncommon to see the terms $2, -4, -1$ in (c) where only the first mark in (a) had been scored. Methods of finding the sum to 80 terms generally revolved around the calculation $26 \times (2 + -4 + -1) + 2 + -4$. Incorrect attempts involved uses of both arithmetic or geometric sum formula or ones involving an average of the terms.

---
topic: "Integration"
subtopic: "Solving differential equations"
---
### **Question 14**

A large spherical balloon is deflating.

At time $t$ seconds the balloon has radius $r\text{ cm}$ and volume $V\text{ cm}^3$.

The volume of the balloon is modelled as decreasing at a constant rate.

**(a)** Using this model, show that
$$\frac{dr}{dt} = -\frac{k}{r^2}$$
where $k$ is a positive constant. **(3)**

Given that
- the initial radius of the balloon is $40\text{ cm}$
- after 5 seconds the radius of the balloon is $20\text{ cm}$
- the volume of the balloon continues to decrease at a constant rate until the balloon is empty

**(b)** solve the differential equation to find a complete equation linking $r$ and $t$. **(5)**

**(c)** Find the limitation on the values of $t$ for which the equation in part (b) is valid. **(2)**

**(Total for Question 14 is 10 marks)**

### **Mark Scheme 14**

#### **Part (a)**

**Step 1: Set up rate of change of volume**
$$\frac{dV}{dt} = -c \quad (\text{where } c > 0)$$
- **[B1]** States $\frac{dV}{dt} = -c$ (or equivalent constant rate).

**Step 2: Relate volume of sphere to radius**
$V = \frac{4}{3}\pi r^3 \implies \frac{dV}{dr} = 4\pi r^2$
- **[M1]** Uses chain rule $\frac{dr}{dt} = \frac{dr}{dV} \times \frac{dV}{dt}$ with volume of a sphere formula $V = \frac{4}{3}\pi r^3$.

**Step 3: Derive the given differential equation**
$$\frac{dr}{dt} = \frac{1}{4\pi r^2} \times (-c) = -\frac{c}{4\pi r^2} = -\frac{k}{r^2}$$
where $k = \frac{c}{4\pi}$ is a positive constant.
- **[A1]** Completes algebra to show $\frac{dr}{dt} = -\frac{k}{r^2}$.

#### **Part (b)**

**Step 4: Separate variables and integrate**
$$\int r^2\text{ dr} = \int -k\text{ dt}$$
$$\frac{1}{3}r^3 = -kt + C$$
- **[M1]** Separates variables and integrates both sides correctly ($\frac{1}{3}r^3$ and $-kt$).

**Step 5: Use initial conditions to find $C$ and $k$**
When $t = 0, r = 40$:
$$\frac{1}{3}(40)^3 = -k(0) + C \implies C = \frac{64000}{3}$$
When $t = 5, r = 20$:
$$\frac{1}{3}(20)^3 = -k(5) + \frac{64000}{3}$$
$$\frac{8000}{3} = -5k + \frac{64000}{3} \implies 5k = \frac{56000}{3} \implies k = \frac{11200}{3}$$
- **[M1]** Uses $t = 0, r = 40$ to find the constant of integration $C$.
- **[M1]** Uses $t = 5, r = 20$ to find $k$.

**Step 6: State the complete equation linking $r$ and $t$**
$$\frac{1}{3}r^3 = -\frac{11200}{3}t + \frac{64000}{3}$$
$$r^3 = 64000 - 11200t \quad (\text{or } r = \sqrt[3]{64000 - 11200t})$$
- **[A1]** Correct complete equation linking $r$ and $t$.

#### **Part (c)**

**Step 7: Find the limitation on $t$**
The balloon is empty when $r = 0$:
$$0 = 64000 - 11200t \implies t = \frac{64000}{11200} = \frac{40}{7} \approx 5.71\text{ seconds}$$
Limitation: $0 \leqslant t \leqslant \frac{40}{7}$ (or $0 \leqslant t \leqslant 5.71$).
- **[M1]** Sets $r = 0$ to find the upper time limit.
- **[A1]** Correct limitation $0 \leqslant t \leqslant \frac{40}{7}$ (or $5.71$).

### **Examiner Report 14**

Students found aspects of this question difficult despite the fact that the differential equation to be solved in (b) was not too demanding. Only high scoring candidates tended to make any significant progress in this question.

In part (a) many candidates failed to use the chain rule $\frac{dV}{dt} = \frac{dV}{dr} \times \frac{dr}{dt}$ with an acceptable $\frac{dV}{dt}$ and $\frac{dV}{dr}$. It was possible to proceed to the given answer without knowing the formula for a sphere, using $V = \lambda r^3$ but errors and blank solutions were common.

Common errors were:
- stating $\frac{dV}{dt} = -k$, and then failing to provide a minimal explanation of how their $k/4\pi$ was replaced with $k$.
- quoting an incorrect formula for the volume of a sphere. Attempts included $V = \pi r^3$, $2\pi r^3$, $4\pi r^3$ and even $4\pi r^2$.

In (b) students who attempted to solve the given differential equation often separated the variables correctly and integrated both sides with both indices correct. Marks were lost when students failed to give a constant of integration and as a result could not apply the given conditions correctly to their equation in $r$ and $t$.

In part (c) many students were confused by the wording and did not realise that a limiting value for $t$ was required. Many attempts merely stated that $t$ could not be negative or that $t > 0$. Those candidates who did proceed to a limiting value for $t$ generally had the right idea and most of these obtained a value of $t > 5$ and gained the A mark when their equation from part (b) was followed through.

---
topic: "Differentiation"
subtopic: "Implicit differentiation"
---
### **Question 15**

The curve $C$ has equation
$$x^2\tan y = 9 \quad 0 < y < \frac{\pi}{2}$$

**(a)** Show that
$$\frac{dy}{dx} = \frac{-18x}{x^4 + 81}$$ **(4)**

**(b)** Prove that $C$ has a point of inflection at $x = \sqrt[4]{27}$. **(3)**

**(Total for Question 15 is 7 marks)**

### **Mark Scheme 15**

#### **Part (a)**

**Step 1: Differentiate implicitly with respect to $x$**
$$\frac{d}{dx}(x^2\tan y) = \frac{d}{dx}(9)$$
$$2x\tan y + x^2\sec^2 y \frac{dy}{dx} = 0$$
- **[M1]** Attempts implicit differentiation, obtaining at least one term correct (e.g., differentiates $x^2\tan y$ using the product rule).
- **[A1]** Correct differentiated equation: $2x\tan y + x^2\sec^2 y \frac{dy}{dx} = 0$.

**Step 2: Rearrange for $\frac{dy}{dx}$**
$$\frac{dy}{dx} = \frac{-2x\tan y}{x^2\sec^2 y} = -\frac{2\tan y}{x\sec^2 y} = -\frac{2\sin y\cos y}{x}$$
Using $\tan y = \frac{9}{x^2}$ and $\sec^2 y = 1 + \tan^2 y = 1 + \frac{81}{x^4} = \frac{x^4 + 81}{x^4}$:
$$\frac{dy}{dx} = -\frac{2x\left(\frac{9}{x^2}\right)}{x^2\left(1 + \frac{81}{x^4}\right)} = -\frac{\frac{18}{x}}{x^2 + \frac{81}{x^2}} = -\frac{18x}{x^4 + 81}$$
- **[M1]** Substitutes $\tan y = \frac{9}{x^2}$ and uses $\sec^2 y = 1 + \tan^2 y$ to eliminate $y$.
- **[A1]** Fully correct algebraic manipulation to reach $\frac{-18x}{x^4 + 81}$.

#### **Part (b)**

**Step 3: Find the second derivative $\frac{d^2y}{dx^2}$**
Using quotient rule on $\frac{-18x}{x^4 + 81}$:
$$\frac{d^2y}{dx^2} = \frac{-18(x^4 + 81) - (-18x)(4x^3)}{(x^4 + 81)^2} = \frac{-18x^4 - 1458 + 72x^4}{(x^4 + 81)^2} = \frac{54x^4 - 1458}{(x^4 + 81)^2}$$
- **[M1]** Attempts to differentiate $\frac{dy}{dx}$ using the quotient rule or product rule.
- **[A1]** Correct second derivative $\frac{54x^4 - 1458}{(x^4 + 81)^2}$ (or unsimplified equivalent).

**Step 4: Test for point of inflection at $x = \sqrt[4]{27}$**
At $x^4 = 27$ ($x = \sqrt[4]{27}$):
$$\frac{d^2y}{dx^2} = \frac{54(27) - 1458}{(27 + 81)^2} = \frac{1458 - 1458}{(108)^2} = 0$$
Check sign change of $\frac{d^2y}{dx^2}$ around $x = \sqrt[4]{27}$ (e.g., for $x^4 < 27$, numerator is negative; for $x^4 > 27$, numerator is positive).
Thus $\frac{d^2y}{dx^2} = 0$ and changes sign, so $x = \sqrt[4]{27}$ is a point of inflection.
- **[A1]** Substitutes $x^4 = 27$ to show $\frac{d^2y}{dx^2} = 0$ and confirms change of sign (or higher derivative test) to prove point of inflection.

### **Examiner Report 15**

Although fully correct solutions to this question were very rare, many candidates were able to score marks from both parts.

In part (a) the first two marks for the implicit differentiation were very accessible for the prepared candidate. Proceeding to the required result for the second two marks proved a little more challenging. Only high achieving students noticed the relationship could be proven via the trigonometric identity $1 + \tan^2 y = \sec^2 y$.

In (b) candidates often scored the M1 for an unsimplified second derivative or a correct structure with a sign incorrect. Where the first A1 was scored in (b), it was usually awarded for a correct simplified $\frac{d^2y}{dx^2}$, or solving $\frac{d^2y}{dx^2} = 0$ to get $x = \sqrt[4]{27}$. Very few candidates seemed aware that they needed to show a change in sign of $\frac{d^2y}{dx^2}$ either side of $x = \sqrt[4]{27}$ to show a point of inflection.

---
topic: "Algebraic Methods"
subtopic: "Proof by contradiction"
---
### **Question 16**

Prove by contradiction that there are no positive integers $p$ and $q$ such that
$$4p^2 - q^2 = 25$$ **(4)**

**(Total for Question 16 is 4 marks)**

### **Mark Scheme 16**

#### **Part (a)**

**Step 1: State assumption**
Assume that there do exist positive integers $p$ and $q$ such that $4p^2 - q^2 = 25$.
- **[B1]** States the assumption that positive integers $p$ and $q$ exist satisfying the equation.

**Step 2: Factorise the expression**
$$(2p - q)(2p + q) = 25$$
- **[M1]** Factorises the left-hand side as $(2p - q)(2p + q)$.

**Step 3: Consider factor pairs of 25**
Since $p$ and $q$ are positive integers, $2p + q > 2p - q$, and both are integers.
The possible factor pairs for 25 are $(1, 25)$ and $(5, 5)$.
Case 1:
$$2p - q = 1$$
$$2p + q = 25$$
Adding gives $4p = 26 \implies p = 6.5$ (not an integer, contradiction since $p$ is an integer).

Case 2:
$$2p - q = 5$$
$$2p + q = 5$$
Adding gives $4p = 10 \implies p = 2.5$ (not an integer, contradiction).
*(Alternatively, $2p + q = 5 \implies q = 0$, but $q$ must be a positive integer).*
- **[M1]** Considers the factor pairs of 25 and sets up simultaneous equations for $2p - q$ and $2p + q$.
- **[A1]** Completes the contradiction by showing no positive integer solutions exist for $p$ and $q$, completing the proof.

### **Examiner Report 16**

Marks on this question were only scored by above average candidates and many made little or no progress towards a proof. There were many blank responses.

Candidates who attempted to factorise $4p^2 - q^2$ were more successful than by other methods, although the large majority of these scored only the first mark, by stating the assumption and factorising to $(2p + q)(2p - q)$, but making no further progress.

Of those that did consider the factors of 25, many did set up and solve two relevant equations simultaneously, and so gained 3 marks, but very few considered both of the required pairs of equations and so did not get all marks.

There were many discussions of odd/even integers but this was commonly followed by working in the same variable for $p$ and $q$, which gained no marks.
