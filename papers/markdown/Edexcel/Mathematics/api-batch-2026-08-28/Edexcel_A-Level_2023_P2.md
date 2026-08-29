---
topic: "Differentiation"
subtopic: "Second order derivatives"
---
### **Question 1**

$$f(x) = x^3 + 2x^2 - 8x + 5$$

**(a)** Find $f''(x)$ **(2)**

**(b)** **(i)** Solve $f''(x) = 0$

**(ii)** Hence find the range of values of $x$ for which $f(x)$ is concave. **(2)**

**(Total 4 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Differentiate $f(x)$ twice**
$f'(x) = 3x^2 + 4x - 8 \Rightarrow f''(x) = 6x + 4$
- **[M1]** Attempts to differentiate twice, with at least two terms correct overall across the two derivatives.
- **[A1]** Correct expression $6x + 4$.

#### **Part (b)**

**Step 2: Solve $f''(x) = 0$**
$6x + 4 = 0 \Rightarrow x = -\frac{2}{3}$
- **[B1ft]** Correct value for $x$ following through from part (a).

**Step 3: Find the range for concavity**
$f(x)$ is concave when $f''(x) \leqslant 0$ (or $< 0$), so $x \leqslant -\frac{2}{3}$ (or $x < -\frac{2}{3}$).
- **[A1]** Correct inequality or range.

### **Examiner Report 1**

This question provided an accessible start to the paper for the vast majority of candidates, most of whom picked up at least some of the marks available. 

In part (a) most candidates were able to differentiate $f(x)$ twice and were able to earn both marks. If candidates did lose marks it was mainly due to arithmetic or processing errors such as differentiating $3x^2$ to $5x$. The most common error was a slip in the final coefficient of $x$. 

In (b) part (i), most candidates were able to make a successful attempt to solve $f''(x) = 0$ for $x$. The mark in this part was sometimes lost due to sign errors when rearranging. It was surprisingly common to see $6x + 4 = 0$ leading to $x = \frac{2}{3}$. A significant number of candidates did not simplify their answer, but this was condoned as were values which followed correctly from an incorrect second derivative of the correct form.

Part (ii) proved to more of a challenge and many responses highlighted a lack of understanding or awareness of the condition for a function to be concave. A number of blank responses were seen here. Many who attempted this part of the question deduced, or guessed, that it was necessary to consider the sign of the second derivative but were often confused about which sign was required. Others attempted incorrect calculations setting $f'(x) = 0$ and solving the resulting quadratic in $x$. Occasionally, candidates attempted sketches of $f(x)$ and/or $f'(x)$ in order to determine the range of $f(x)$ which was not required. Others attempted to demonstrate a sign change in attempt to prove that the solution from part (i) was an inflection point. For those employing the correct method, both strict and non-strict inequalities were accepted.

---
topic: "Sequences and Series"
subtopic: "Recurrence relations"
---
### **Question 2**

A sequence $u_1, u_2, u_3, \dots$ is defined by
$$u_1 = 35$$
$$u_{n+1} = u_n + 7\cos\left(\frac{n\pi}{2}\right) - 5(-1)^n$$

**(a)** **(i)** Show that $u_2 = 40$

**(ii)** Find the value of $u_3$ and the value of $u_4$ **(3)**

Given that the sequence is periodic with order 4

**(b)** **(i)** write down the value of $u_5$

**(ii)** find the value of $\sum_{r=1}^{25} u_r$ **(3)**

**(Total 6 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Compute $u_2$**
For $n = 1$: $u_2 = 35 + 7\cos\left(\frac{\pi}{2}\right) - 5(-1)^1 = 35 + 0 - 5(-1) = 40$.
- **[B1]** Fully correct substitution and evaluation leading to the given answer $u_2 = 40$.

**Step 2: Compute $u_3$ and $u_4$**
For $n = 2$: $u_3 = 40 + 7\cos(\pi) - 5(-1)^2 = 40 + 7(-1) - 5(1) = 28$.
For $n = 3$: $u_3 = 28$, so $u_4 = 28 + 7\cos\left(\frac{3\pi}{2}\right) - 5(-1)^3 = 28 + 0 - 5(-1) = 33$.
- **[M1]** Correct method to find $u_3$ or $u_4$ using the recurrence relation.
- **[A1]** Both $u_3 = 28$ and $u_4 = 33$ correct.

#### **Part (b)**

**Step 3: State $u_5$**
Since the sequence is periodic of order 4, $u_5 = u_1 = 35$.
- **[B1]** Correctly identifies $u_5 = 35$.

**Step 4: Compute the sum $\sum_{r=1}^{25} u_r$**
$\sum_{r=1}^{25} u_r = 6(u_1 + u_2 + u_3 + u_4) + u_1 = 6(35 + 40 + 28 + 33) + 35 = 6(136) + 35 = 851$.
- **[M1]** Recognises the periodic grouping (e.g., $6 \times \sum_{period} + u_1$).
- **[A1]** Correct sum 851.

### **Examiner Report 1**

For the most part candidates answered this question well. This was dependent on whether they correctly understood the iteration formula. 

In part (a) (i), although many scored this first mark, there was a common misunderstanding of how a recurrence relationship works with confusion as to the meaning of $n$. Rather than term position, it was often confused with $u_n$ so that the incorrect calculation $u_2 = 35 + 7\cos\left(\frac{35\pi}{2}\right) - 5(-1)^{35}$ was often seen, giving the correct answer but obviously not scoring the B mark. Also not uncommonly seen was $n$ replaced by $u_{n+1}$, with candidates stating $u_2 = 40 + 7\cos\left(\frac{40\pi}{2}\right) - 5(-1)^{40}$.

The errors stated above also affected the performance of some candidates in part (ii). Furthermore, a minority of candidates had difficulty with accuracy in the sign of the final term, struggling with the odd/even power of $-1$. For example, when calculating $u_3$, $u_3 = 40 + 7\cos\left(\frac{2\pi}{2}\right) - 5(-1)^2 = 40 - 7 + 5 = 38$, was not uncommon. Occasionally, candidates were seen to be working with degrees rather than radians, also leading to loss of the accuracy mark. 

In part (b) (i) most candidates understood the order 4, periodic nature of the recurrence relationship and that $u_5 = u_1 = u_{4k-3}, k \in \mathbb{Z}^+$. Occasionally, candidates unnecessarily calculated $u_5$, using $u_4$ in the recurrence relationship, which sometimes led to the mark being lost either if $u_4$ had an incorrect value or if an error was made in the calculation.

In part (ii) many candidates recognised how to construct the arithmetic calculation to find the required sum. The most common of these attempts were: $6(u_1 + u_2 + u_3 + u_4) + u_1$ and $6(u_2 + u_3 + u_4 + u_1) + 7u_1$.

Credit was given to candidates who used such ideas with incorrect values from earlier in the question for $u_3$ and $u_4$, although those who had a wrong answer in (a)(i) who used their incorrect value for $u_2$ (rather than the given $u_2 = 40$), lost both marks. It is important that centres make candidates aware that they must use the ‘show that’ answer in subsequent calculations no matter what they achieve in their working. Occasionally, candidates used $\sum_{r=1}^{25} u_r = 6.25(u_1 + u_2 + u_3 + u_4)$ but these usually did not add 1 to give a fully correct method. Some also incorrectly tried summing the series as though the terms formed an arithmetic progression. Some candidates incorrectly multiplied $(u_1 + u_2 + u_3 + u_4)$ by 4 instead of by 6. A minority forgot to add 35 to their total. A very small minority of candidates generated all the terms of the whole sequence and added them together.

---
topic: "Exponentials and Logarithms"
subtopic: "Laws of logarithms"
---
### **Question 3**

Given that
$$\log_2(x + 3) + \log_2(x + 10) = 2 + 2\log_2 x$$

**(a)** show that 
$$3x^2 - 13x - 30 = 0$$
**(3)**

**(b)** **(i)** Write down the roots of the equation 
$$3x^2 - 13x - 30 = 0$$

**(ii)** Hence state which of the roots in part (b)(i) is not a solution of 
$$\log_2(x + 3) + \log_2(x + 10) = 2 + 2\log_2 x$$
giving a reason for your answer. **(2)**

**(Total 5 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Combine logarithmic terms**
Using log laws: $\log_2((x + 3)(x + 10)) = \log_2(4) + \log_2(x^2)$
- **[M1]** Uses logarithm laws correctly to combine $\log_2(x + 3) + \log_2(x + 10)$ or deals with $2\log_2 x$ as $\log_2(x^2)$ and writes $2$ as $\log_2(4)$.

**Step 2: Equate arguments**
$(x + 3)(x + 10) = 4x^2$
- **[M1]** Removes logs to form an algebraic equation involving arguments.

**Step 3: Expand and rearrange**
$x^2 + 13x + 30 = 4x^2 \Rightarrow 3x^2 - 13x - 30 = 0$
- **[A1]** Correctly reaches the printed equation with no errors seen.

#### **Part (b)**

**Step 4: State the roots**
$x = 6, \quad x = -\frac{5}{3}$
- **[B1]** Both roots correctly stated.

**Step 5: Reject invalid root**
$x = -\frac{5}{3}$ is not a solution because $\log_2 x$ (or $\log_2(x+3)$) is undefined for negative numbers (or domain restriction $x > 0$).
- **[B1]** Correctly identifies $x = -\frac{5}{3}$ and gives a valid mathematical reason referencing the domain of the logarithm.

### **Examiner Report 1**

There were very few non-attempts or zero scores here and this question proved to be a good discriminator with a spread of marks achieved by candidates. Most students managed to score at least one mark out of three in part (a) by correctly applying a single log law, usually the product, division or power rules for logs. Dealing with the constant, 2, proved to be more challenging for many. Those who wrote 2 as $\log_2(4)$ and then applied the product rule for logs on the right-hand-side had most success. Others grouped the three log terms and applied the exponential rule to eliminate the logs. Sometimes there was a lot of working which wasn’t always set out as clearly as it could have been. A significant proportion of candidates did succeed, but it was not uncommon to see correct use of a log law followed by incorrect log work in an attempt to fudge the printed result. Some poor responses involved an initial ‘cancelling’ of logs before any attempt to combine log terms or to raise both sides to the base 2 correctly. There was a minority of candidates who perhaps knew how to proceed but did not show sufficient working to gain full marks in a ‘show that’ question. Candidates should be reminded that all steps should be shown in this type of question. It was a shame when fully correct log work was followed by an incomplete ‘equation’ at the end of this part, as missing the ‘= 0’ meant the loss of the final mark here. A small number of candidates who were unsure how to start part (a) used the printed answer and tried to “work backwards” but often made errors leading to incorrect solutions.

In (b) part (i), almost all candidates were able to correctly state the values $6$ and $-\frac{5}{3}$, it was clear that in many cases candidates were making use of their calculators to solve the quadratic equation which was acceptable. Part (ii) however, was answered less reliably. Although most candidates had some understanding of the domain of a log function and knew that $x = -\frac{5}{3}$ was not a valid solution, many were unable to provide reasoning that was precise enough for the mark here. It was common to see, for example, “a log can’t be negative”, which was not considered sufficiently clear. Others stated simply ‘because it is negative’ which was also insufficient. A range of responses which engaged specifically with the domain of a log function needing to be positive were considered acceptable such as; ‘log of a negative value is undefined/impossible/gives a math error’.

---
topic: "Exponentials and Logarithms"
subtopic: "Exponential modelling"
---
### **Question 4**

Coffee is poured into a cup.

The temperature of the coffee, $H\text{ \textdegree C}$, $t$ minutes after being poured into the cup is modelled by the equation
$$H = Ae^{-Bt} + 30$$
where $A$ and $B$ are constants.

Initially, the temperature of the coffee was $85\text{ \textdegree C}$.

**(a)** State the value of $A$. **(1)**

Initially, the coffee was cooling at a rate of $7.5\text{ \textdegree C}$ per minute.

**(b)** Find a complete equation linking $H$ and $t$, giving the value of $B$ to $3$ decimal places. **(3)**

**(Total 4 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Find $A$**
When $t = 0$, $H = 85 \Rightarrow 85 = Ae^0 + 30 \Rightarrow A = 55$.
- **[B1]** $A = 55$

#### **Part (b)**

**Step 2: Differentiate with respect to $t$**
$\frac{dH}{dt} = -ABe^{-Bt} = -55Be^{-Bt}$
- **[M1]** Differentiates the model correctly to find $\frac{dH}{dt}$.

**Step 3: Substitute initial rate of cooling**
When $t = 0$, $\frac{dH}{dt} = -7.5 \Rightarrow -7.5 = -55B(1) \Rightarrow B = \frac{7.5}{55} = \frac{3}{22} \approx 0.13636\dots$
- **[M1]** Uses the condition at $t = 0$ (i.e. $\frac{dH}{dt} = -7.5$) to form an equation for $B$.

**Step 4: State complete equation**
$H = 55e^{-0.136t} + 30$ (or exact equivalent with $B = \frac{3}{22}$).
- **[A1]** Complete equation with $B$ given to 3 decimal places ($0.136$).

### **Examiner Report 1**

Those scoring full marks in this question were in a significant minority of candidates. 

In part (a) the majority of candidates used the given information to find the value of $A$. Those that did not achieve this mark typically gave $85$ as an answer. A few students failed to recognise the standard technique of substituting $t = 0$ into the expression for $H$ to find the value of $A$, often using $t = 1$. Sometimes $e^0$ was evaluated as $e$ or $0$ rather than $1$.

Part (b) had mixed outcomes for candidates. Interpretation of the given initial rate of cooling was problematic for many candidates. There was a general lack of appreciation that the rate of cooling was a continuous variable which represented $-\frac{dH}{dt}$. Those candidates not recognising this and using a difference method (similar to those introduced at GCSE) between $t = 0$ and $t = 1$ were restricted to the initial B mark in part (a). The most common attempt at a response for these candidates was setting $H(1) = 85 - 7.5$ and working from there. Of those who recognised the need to first find $\frac{dH}{dt}$ and then substitute $t = 0$, many incorrectly used $\frac{dH}{dt} = 7.5$ rather than the correct $\frac{dH}{dt} = -7.5$ to express a negative increase in temperature. This led to the loss of the last mark. Another error was to forget to differentiate the $+ 30$ to zero leaving a constant in their $\frac{dH}{dt}$, only scoring at most the second method mark for substituting $t = 0$ and their $A$ into their $\frac{dH}{dt}$. Some differentiated incorrectly to obtain $-55Bte^{-Bt}$. Several students missed out on the final mark despite correct work by not writing out the final equation. It is important that centres make candidates aware that when a question asks for the complete equation for a model that it is given as such and not just the values of any required constants.

---
topic: "Differentiation"
subtopic: "Finding the derivative"
---
### **Question 5**

The curve $C$ has equation $y = f(x)$.

The curve
- passes through the point $P(3, -10)$
- has a turning point at $P$

Given that
$$\frac{dy}{dx} = 2x^3 - 9x^2 + 5x + k$$
where $k$ is a constant,

**(a)** show that $k = 12$ **(2)**

**(b)** Hence find the coordinates of the point where $C$ crosses the $y$-axis. **(3)**

**(Total 5 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Use turning point condition**
Since there is a turning point at $x = 3$, $\frac{dy}{dx} = 0$ when $x = 3$.
$2(3)^3 - 9(3)^2 + 5(3) + k = 0$
- **[M1]** Substitutes $x = 3$ into $\frac{dy}{dx}$ and sets it equal to $0$.

**Step 2: Solve for $k$**
$54 - 81 + 15 + k = 0 \Rightarrow -12 + k = 0 \Rightarrow k = 12$ (with full working shown).
- **[A1]** Fully justified proof that $k = 12$.

#### **Part (b)**

**Step 3: Integrate $\frac{dy}{dx}$**
$y = \int (2x^3 - 9x^2 + 5x + 12) \, dx = \frac{1}{2}x^4 - 3x^3 + \frac{5}{2}x^2 + 12x + c$
- **[M1]** Attempts to integrate $\frac{dy}{dx}$ with $k = 12$ (at least two powers of $x$ increased by 1).

**Step 4: Find constant of integration $c$**
Using $(3, -10)$:
$-10 = \frac{1}{2}(3)^4 - 3(3)^3 + \frac{5}{2}(3)^2 + 12(3) + c$
$-10 = \frac{81}{2} - 81 + \frac{45}{2} + 36 + c$
$-10 = 18 + c \Rightarrow c = -28$
- **[M1]** Substitutes $(3, -10)$ into their integrated expression to find $c$.

**Step 5: Find the $y$-intercept**
When $x = 0$, $y = -28$, so the coordinates are $(0, -28)$.
- **[A1]** Correct coordinates $(0, -28)$.

### **Examiner Report 1**

Part (a) of this question was accessible for the majority of candidates. Most understood that the derivative at a stationary point is zero and were able to achieve both the method mark and the accuracy mark, substituting $x = 3$ into the given derivative and setting it equal to zero. Occasionally the accuracy mark was lost due to insufficient working following substitution e.g. $2(3)^3 - 9(3)^2 + 5(3) + k = 0$ followed by $k = 12$ thus omitting a required intermediate step. In a ‘show that’ question candidates need to ensure that they have completely justified the given answer. Occasionally students showed the substitution of $x = 3$ into the derivative, processed the powers and simplified to obtain $k - 12$ and then jumped to $k = 12$. These responses lacked the appreciation that the correct answer had been achieved because the gradient equals $0$ at $x = 3$. 

There were some rare instances of candidates incorrectly substituting $x = 3$ and $\frac{dy}{dx} = -10$ to find the value of $k$. Some candidates automatically integrated the given derivative but then realised that the differentiated expression was required in order to answer part (a) which they then successfully did. Other candidates integrated the expression and then substituted in the value for $k = 12$ to achieve an answer for part (b). Occasionally they then used the answer to part (b) to find $k = 12$, so were unable to access the marks available for this part of the question. A rarely seen alternative was to use algebraic division to divide the given polynomial by the linear factor $(x - 3)$ to achieve a remainder of $-12 + k$, and then equate that remainder to zero. This approach was met with varying degrees of success and students were often unable to complete the algebraic division successfully.

In part (b), candidates generally understood that they were required to integrate the expression and the straightforward integration meant the first method mark was commonly achieved. Most realised that they then needed to find the value of their constant of integration using $x = 3$ and $y = -10$ to determine the point where the curve crossed the $y$-axis and achieved the second method mark. The majority of students were successful in achieving full marks in this part, with most stating their answer in coordinate form $(0, -28)$ though some candidates left their answer as $c = -28$, not making the link with the $y$-intercept explicit. Very few candidates made numerical slips in their processing to find the value of their constant of integration. Where mistakes were made, a common reason for not scoring the second method mark was due to substituting in a value of $0$ instead of $-10$ for $y$ in the integrated expression. Where the constant of integration had been omitted candidates went directly to substituting $x = 0$. Less commonly, some candidates differentiated rather than integrated and tried to find the roots of the second derivative rather than the $y$-intercept.

---
topic: "Vectors"
subtopic: "Modelling with vectors"
---
### **Question 6**

Relative to a fixed origin $O$,
- $A$ is the point with position vector $12\mathbf{i}$
- $B$ is the point with position vector $16\mathbf{j}$
- $C$ is the point with position vector $(50\mathbf{i} + 136\mathbf{j})$
- $D$ is the point with position vector $(22\mathbf{i} + 24\mathbf{j})$

**(a)** Show that $AD$ is parallel to $BC$. **(2)**

Points $A$, $B$, $C$ and $D$ are used to model the vertices of a running track in the shape of a quadrilateral.

Runners complete one lap by running along all four sides of the track.

The lengths of the sides are measured in metres.

Given that a particular runner takes exactly $5$ minutes to complete $2$ laps,

**(b)** calculate the average speed of this runner, giving the answer in kilometres per hour. **(4)**

**(Total 6 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Find vectors $\vec{AD}$ and $\vec{BC}$**
$\vec{AD} = \mathbf{d} - \mathbf{a} = (22\mathbf{i} + 24\mathbf{j}) - 12\mathbf{i} = 10\mathbf{i} + 24\mathbf{j}$
$\vec{BC} = \mathbf{c} - \mathbf{b} = (50\mathbf{i} + 136\mathbf{j}) - 16\mathbf{j} = 50\mathbf{i} + 120\mathbf{j}$
- **[M1]** Correct attempt to find vectors $\vec{AD}$ and $\vec{BC}$ (or multiples thereof).

**Step 2: Show parallelism**
$\vec{BC} = 5(10\mathbf{i} + 24\mathbf{j}) = 5\vec{AD}$, hence $\vec{AD}$ and $\vec{BC}$ are parallel (scalar multiple).
- **[A1]** Correct vectors found and a clear statement/deduction that one is a scalar multiple of the other, implying parallelism.

#### **Part (b)**

**Step 3: Calculate lengths of all four sides**
$|\vec{AD}| = \sqrt{10^2 + 24^2} = 26$
$|\vec{BC}| = \sqrt{50^2 + 120^2} = 130$
$\vec{AB} = \mathbf{b} - \mathbf{a} = -12\mathbf{i} + 16\mathbf{j} \Rightarrow |\vec{AB}| = \sqrt{(-12)^2 + 16^2} = 20$
$\vec{DC} = \mathbf{c} - \mathbf{d} = (50-22)\mathbf{i} + (136-24)\mathbf{j} = 28\mathbf{i} + 112\mathbf{j} \Rightarrow |\vec{DC}| = \sqrt{28^2 + 112^2} = \sqrt{784 + 12544} = \sqrt{13328} = 28\sqrt{17} \approx 115.44$
Perimeter of one lap $= 26 + 130 + 20 + 28\sqrt{17} = 176 + 28\sqrt{17} \approx 291.44\text{ m}$
- **[M1]** Finds the lengths of all four sides using Pythagoras' theorem.
- **[A1]** Correct total perimeter for one lap ($176 + 28\sqrt{17}$ or $291.44\text{ m}$).

**Step 4: Calculate average speed in km/h**
Total distance for 2 laps $= 2 \times (176 + 28\sqrt{17}) = 352 + 56\sqrt{17}\text{ m} = 0.352 + 0.056\sqrt{17}\text{ km}\text{ (or } 582.88\text{ m} = 0.58288\text{ km)}$
Time $= \frac{5}{60}\text{ hours} = \frac{1}{12}\text{ hours}$
Speed $= \frac{\text{Distance}}{\text{Time}} = \frac{0.58288\dots}{1/12} = 6.994\dots \approx 7.00\text{ km/h}$
- **[M1]** Uses distance divided by time with correct unit conversions.
- **[A1]** $7.00$ (km/h) (must be to 3 sig fig).

### **Examiner Report 1**

This question was relatively well attempted. Most candidates attempted both parts and scored highly overall.

In part (a) the majority of candidates correctly identified $10\mathbf{i} + 24\mathbf{j}$, and $50\mathbf{i} + 120\mathbf{j}$. Those who didn’t, often mistakenly added the position vectors instead of subtracting them. Most then went on to show that one was a multiple of the other (or that they were both different multiples of the same vector). However, some wrote the vectors the wrong way round for their multiple, which lost the second mark. 

Some candidates used other successful methods involving ratios or “gradients”.

A common error here was candidates attempting to conclude the vectors were parallel by calculating and using their magnitudes. The most common reason for the loss of a mark in part (a) was with candidates correctly showing that the two vectors were multiples of each other but then not drawing a conclusion afterwards. It is important that candidates state what is shown by their working and provide a conclusion.

In part (b) most candidates correctly identified the lengths of $AB$, $BC$, $CD$ and $AD$, but many left out their calculations by not showing the application of Pythagoras’ Theorem. This is an important step that should be included to fully demonstrate where their answers came from. There was a misunderstanding by some students who thought they could add the 4 vectors of the sides together to calculate a total vector and work out the length of the resulting vector. A few instead found the lengths of the position vectors and added them. Some also assumed that there were two pairs of equal length lines and/or two pairs of parallel lines and just used the two lengths from part (a) then doubled them. Despite this, candidates often achieved the first two marks. The calculation of the average speed was also done well by many candidates. Although several candidates based their calculation on a single lap and arrived at half the correct answer, the majority completed it correctly and clearly showed division by a fraction equivalent to $\frac{5}{60}$ (most commonly $\frac{1}{12}$) or multiplication by its reciprocal. Candidates should be aware of the general instruction in the rubric to give non-exact answers to 3 significant figures; it was common to see $7$ or $7.0$ instead of the correct final answer.

---
topic: "Differentiation"
subtopic: "Implicit differentiation"
---
### **Question 7**

In this question you must show all stages of your working.

Solutions relying on calculator technology are not acceptable.

A curve has equation
$$x^3 + 2xy + 3y^2 = 47$$

**(a)** Find $\frac{dy}{dx}$ in terms of $x$ and $y$ **(4)**

The point $P(-2, 5)$ lies on the curve.

**(b)** Find the equation of the normal to the curve at $P$, giving your answer in the form $ax + by + c = 0$, where $a$, $b$ and $c$ are integers to be found. **(3)**

**(Total 7 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Differentiate implicitly**
$\frac{d}{dx}(x^3 + 2xy + 3y^2) = \frac{d}{dx}(47)$
$3x^2 + 2y + 2x\frac{dy}{dx} + 6y\frac{dy}{dx} = 0$
- **[M1]** Differentiates $x^3$ to $3x^2$ and $3y^2$ to $6y\frac{dy}{dx}$.
- **[M1]** Applies the product rule correctly to differentiate $2xy$ to get $2y + 2x\frac{dy}{dx}$.
- **[A1]** Completely correct differentiated equation.

**Step 2: Make $\frac{dy}{dx}$ the subject**
$\frac{dy}{dx}(2x + 6y) = -3x^2 - 2y \Rightarrow \frac{dy}{dx} = \frac{-3x^2 - 2y}{2x + 6y}$
- **[A1]** Correct expression for $\frac{dy}{dx}$.

#### **Part (b)**

**Step 3: Evaluate the gradient at $P(-2, 5)$**
Substituting $x = -2, y = 5$:
$\left.\frac{dy}{dx}\right|_{(-2,5)} = \frac{-3(-2)^2 - 2(5)}{2(-2) + 6(5)} = \frac{-12 - 10}{-4 + 30} = \frac{-22}{26} = -\frac{11}{13}$
- **[M1]** Substitutes $x = -2, y = 5$ into their derivative to find the tangent gradient.

**Step 4: Find the gradient of the normal**
$m_{\text{normal}} = -\frac{1}{m_{\text{tangent}}} = \frac{13}{11}$
- **[M1]** Uses negative reciprocal to find the normal gradient.

**Step 5: Find the equation of the normal**
$y - 5 = \frac{13}{11}(x - (-2))$
$11(y - 5) = 13(x + 2)$
$11y - 55 = 13x + 26 \Rightarrow 13x - 11y + 81 = 0$
- **[A1]** Correct equation in the required integer form $ax + by + c = 0$ (e.g. $13x - 11y + 81 = 0$).

### **Examiner Report 1**

Almost all candidates attempted to use implicit differentiation with good levels of success. It was somewhat surprising that a significant number of candidates were let down by failing to differentiate the constant term correctly despite, in many cases, managing to correctly carry out some of the more complex steps in the implicit differentiation. It was not uncommon though to see errors in either the product rule for $2xy$ (often obtaining $\frac{d}{dx}(2xy) = 2\frac{dy}{dx}$ or $\frac{d}{dx}(2xy) = 2x\frac{dy}{dx}$) or errors in the application of the chain rule when differentiating $3y^2$. A surprising number of candidates set their first line of working equal to $\frac{dy}{dx}$ and fortunately this was often ignored in later working and so was condoned. Some candidates however, attempted to incorporate the extra $\frac{dy}{dx}$ term into their manipulations to find an expression for $\frac{dy}{dx}$ and this was costly. A few candidates struggled to deal with the negative terms in their numerator (or denominator) which led to sign errors in part (b). Others made slips in the rearrangement which lost the final mark. In some cases, there were issues with clarity of notation for the final statement of $\frac{dy}{dx}$ in terms of the positioning of the minus sign and candidates should be advised to take care when drawing the vinculum, particularly when the starting term of the numerator is negative to make sure the sign is in the correct place.

In part (b), the majority of candidates were able to use the correct approach to find the equation of the normal and candidates were often able to earn at least some of the marks here even if they had been unsuccessful in part (a). The least successful approach for calculation of the gradient of the normal tended to involve an attempt to rearrange the expression for $\frac{dy}{dx}$ into $-\frac{dx}{dy}$ prior to substitution and this seem to be more error-prone than the alternative of substituting in values as a first. Some candidates did not spot that point $P$ on the curve had been given in the question and so didn’t use this point in order to find the equation of the line. In some cases, candidates found the equation of the tangent rather than the normal whilst others made arithmetical slips and lost the accuracy mark. Occasionally candidates did not state their equation in the required form which was a shame when it followed correct work.

---
topic: "Trigonometry and Modelling"
subtopic: "Simplifying a cos x ± b sin x"
---
### **Question 8**

**(a)** Express $2\cos\theta + 8\sin\theta$ in the form $R\cos(\theta - \alpha)$, where $R$ and $\alpha$ are constants, $R > 0$ and $0 < \alpha < \frac{\pi}{2}$.

Give the exact value of $R$ and give the value of $\alpha$ in radians to $3$ decimal places. **(3)**

The first three terms of an arithmetic sequence are
$$\cos x, \quad \cos x + \sin x, \quad \cos x + 2\sin x, \quad x \neq n\pi$$

Given that $S_9$ represents the sum of the first $9$ terms of this sequence as $x$ varies,

**(b)** **(i)** find the exact maximum value of $S_9$

**(ii)** deduce the smallest positive value of $x$ at which this maximum value of $S_9$ occurs. **(3)**

**(Total 6 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Expand harmonic form**
$R\cos(\theta - \alpha) = R\cos\theta\cos\alpha + R\sin\theta\sin\alpha = 2\cos\theta + 8\sin\theta$
$R\cos\alpha = 2, \quad R\sin\alpha = 8$
$R = \sqrt{2^2 + 8^2} = \sqrt{68} = 2\sqrt{17}$
$\tan\alpha = \frac{8}{2} = 4 \Rightarrow \alpha = 1.326$ radians.
- **[M1]** Method for $R$ (e.g. $\sqrt{2^2 + 8^2}$) and method for $\alpha$ (e.g. $\arctan(4)$).
- **[A1]** Exact $R = 2\sqrt{17}$.
- **[A1]** $\alpha = 1.326$ (radians).

#### **Part (b)**

**Step 2: Find the sum $S_9$**
First term $a = \cos x$, common difference $d = \sin x$.
$S_9 = \frac{9}{2}[2\cos x + (9 - 1)\sin x] = \frac{9}{2}[2\cos x + 8\sin x] = 9(\cos x + 4\sin x)$.
- **[M1]** Uses sum formula for arithmetic series with $a = \cos x$ and $d = \sin x$ to obtain $9(\cos x + 4\sin x)$ or equivalent.

**Step 3: Find maximum value of $S_9$**
Using part (a), $\cos\theta + 4\sin\theta = \frac{1}{2}(2\cos\theta + 8\sin\theta) = \frac{1}{2}(2\sqrt{17}\cos(\theta - 1.326)) = \sqrt{17}\cos(\theta - 1.326)$.
Maximum value $= 9 \times \sqrt{17} = 9\sqrt{17}$.
- **[A1]** Exact maximum value $9\sqrt{17}$.

**Step 4: Find the smallest positive value of $x$**
Maximum occurs when $\cos(x - 1.326) = 1 \Rightarrow x - 1.326 = 0 \Rightarrow x = 1.326$ (or $1.33$ or $\arctan(4)$).
- **[B1]** $1.33$ or $1.326$ (or exact $\arctan(4)$).

### **Examiner Report 1**

Part (a) of this question was generally answered very well with candidates regularly scoring full marks. Candidates seemed to be well practiced at converting to harmonic form and working in radians. The most successful candidates wrote out the full expansion of $R\cos(\theta - \alpha)$ rather than trying to take a short cut. The common issues included giving a decimal solution for $R$ or rounding the value of $\alpha$ to a lower degree of accuracy than was required in the question. There were a small number of candidates who worked with $\tan\alpha = \frac{2}{8}$ and so lost the method mark and the accuracy mark.

Candidates found part (b) more challenging, with many failing to link areas of mathematics, in this case trigonometry and series. Even where a candidate successfully found the sum, $S_x = 9\cos x + 36\sin x$, many did not relate it to part (a). Those who did recognise the form were usually able to get $\pm 4.5 \times "R"$, usually $\pm 4.5 \times 2\sqrt{17}$ for part (i). Some seemed to misread the question and stated the minimum value, so lost the accuracy mark. A significant number of candidates found a correct expression in harmonic form but lost both the M1 and A1 as they kept a correct $9\sqrt{17}$ embedded in their expression.

Candidates were slightly more successful in part (ii). Most candidates who stated a correct value for the maximum, also got the value of $x$ correct, more often than not giving it to the same accuracy as in part (a). A few benefitted from this being a follow through mark. Some candidates tried to find a subsequent value for $\alpha$ and were often out by $\pi$ or $2\pi$, or attempted to rearrange $x - 1.326 = \pi$. A few responses were seen where $S$ was differentiated and set to zero to find a maximum. These candidates often lost the accuracy mark as they found an answer of $37.1$. A lot of incorrect responses gave a maximum of $36$ when $\sin x = 1$ or $45$ from finding $36 + 9$.

---
topic: "Parametric Equations"
subtopic: "Curve sketching"
---
### **Question 9**

The curve $C$ has parametric equations
$$x = t^2 + 6t - 16, \quad y = 6\ln(t + 3), \quad t > -3$$

**(a)** Show that a Cartesian equation for $C$ is
$$y = A\ln(x + B), \quad x > -B$$
where $A$ and $B$ are integers to be found. **(3)**

The curve $C$ cuts the $y$-axis at the point $P$.

**(b)** Show that the equation of the tangent to $C$ at $P$ can be written in the form
$$ax + by = c\ln 5$$
where $a$, $b$ and $c$ are integers to be found. **(4)**

**(Total 7 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Express $t$ in terms of $y$ or complete the square for $x$**
From $y = 6\ln(t + 3) \Rightarrow \frac{y}{6} = \ln(t + 3) \Rightarrow t + 3 = e^{y/6} \Rightarrow t = e^{y/6} - 3$
Substitute into $x$:
$x = (e^{y/6} - 3)^2 + 6(e^{y/6} - 3) - 16$
$x = e^{y/6} - 6e^{y/6} + 9 + 6e^{y/6} - 18 - 16$
$x = e^{y/3} - 25$
- **[M1]** Rearranges $y = 6\ln(t + 3)$ to make $t$ the subject, or completes the square on the parametric equation for $x$: $x = (t + 3)^2 - 25$.

**Step 2: Form Cartesian equation**
$x + 25 = e^{y/3} \Rightarrow \ln(x + 25) = \frac{y}{3}$
$y = 3\ln(x + 25)$
- **[M1]** Substitutes into $x$ and simplifies correctly to form an equation linking $x$ and $y$.
- **[A1]** $y = 3\ln(x + 25)$ (with $A = 3, B = 25$).

#### **Part (b)**

**Step 3: Find the point $P$ where $C$ cuts the $y$-axis**
At $y$-axis, $x = 0 \Rightarrow y = 3\ln(25) = 6\ln 5$ (or finds $t = 2$ when $x = 0$).
- **[B1]** Identifies point $P$ coordinates or parameter value $t = 2$ at $P$.

**Step 4: Find the gradient of the tangent at $P$**
Using Cartesian equation: $\frac{dy}{dx} = \frac{3}{x + 25}$.
At $x = 0$, gradient $m = \frac{3}{25}$.
(Alternatively using parametric: $\frac{dy}{dt} = \frac{6}{t+3}, \frac{dx}{dt} = 2t + 6 \Rightarrow \frac{dy}{dx} = \frac{6}{(t+3)(2t+6)}$. At $t = 2$, $\frac{dy}{dx} = \frac{6}{5(10)} = \frac{3}{25}$).
- **[M1]** Finds the gradient at $P$ (either via Cartesian or parametric differentiation).

**Step 5: Find the equation of the tangent**
$y - 6\ln 5 = \frac{3}{25}(x - 0)$
$25y - 150\ln 5 = 3x$
$3x - 25y = -150\ln 5$ (or integer equivalent, e.g. $-3x + 25y = 150\ln 5$).
- **[M1]** Forms the equation of the tangent using their gradient and point $P$.
- **[A1]** Correct integer equation in the required form $ax + by = c\ln 5$.

### **Examiner Report 1**

Most candidates found part (a) challenging but it was usually attempted. There were not many blank responses. Of the four methods listed on the mark scheme, one common successful method was to substitute $t$ in terms of $x$ into $y = 6\ln(t + 3)$ via “completing the square” (way 1). When substituting into $y = 6\ln(t + 3)$, if a correct $t$ equation was created, then this usually led to full marks. Another common approach was to rearrange $t$ in terms of $y$, usually successfully as $t = e^{y/6} - 3$ and substitute into $x = t^2 + 6t - 16$ (way 3). When using this method some candidates had difficulty squaring $e^{y/6}$ meaning they were unable to earn full marks. Some candidates incorrectly set $\sqrt{x + 25} = \sqrt{x} + 5$ thus also losing the accuracy mark. A significant number of candidates factorised $x = t^2 + 6t - 16$ to give $x = (t - 2)(t + 8)$ and then wrongly thought $x = t - 2$. This then often led to $y = 6\ln(x + 5)$ which scored no marks in this part.

Candidates were generally more successful in part (b) than part (a). Many candidates found the $y$-intercept by substituting $t = 2$ into the parametric equation for $y$ rather than substituting $x = 0$ into the Cartesian equation. The first method mark was more challenging. Some candidates attempted the derivative from the Cartesian equation and they usually reached either $\frac{3}{x + A}$ or $\frac{3}{x}$ whilst others attempted to use the chain rule approach. Some candidates obtained the correct derivative but failed to substitute $x = 0$. If a candidate achieved the first method mark, they usually went on to achieve the dependent method mark for attempting to find the equation of the tangent. There were very few cases where the candidate used the negative reciprocal of their gradient. The most successful way candidates achieved full marks was differentiating their Cartesian equation. Those that differentiated parametrically were often caught out by arithmetic and algebraic errors or substituted $t = 0$ instead of $t = 2$ and failed to achieve the gradient correctly. For the final answer, some candidates had failed to realise the form of equation the question was asking for so left their answer as “$y =$” or they didn’t have $a$, $b$ and $c$ as integers. Many candidates who had incorrectly answered (a), were able to go on to achieve full marks in (b) by using parametric differentiation to work out the gradient. There were very few blank responses for this part of the question.

---
topic: "Algebraic Methods"
subtopic: "Partial fractions"
---
### **Question 10**

$$f(x) = \frac{3kx - 18}{(x + 4)(x - 2)}$$
where $k$ is a positive constant

**(a)** Express $f(x)$ in partial fractions in terms of $k$. **(3)**

**(b)** Hence find the exact value of $k$ for which
$$\int_{-3}^{1} f(x) \, dx = 21$$
**(4)**

**(Total 7 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Set up partial fractions identity**
$\frac{3kx - 18}{(x + 4)(x - 2)} \equiv \frac{A}{x + 4} + \frac{B}{x - 2}$
$3kx - 18 = A(x - 2) + B(x + 4)$
- **[M1]** Correct form of partial fractions with constants $A$ and $B$.

**Step 2: Solve for $A$ and $B$**
Let $x = 2$: $6k - 18 = B(6) \Rightarrow B = k - 3$.
Let $x = -4$: $-12k - 18 = A(-6) \Rightarrow A = 2k + 3$.
- **[M1]** Correct method for finding $A$ and $B$ (e.g. substituting $x = 2, -4$ or equating coefficients).
- **[A1]** Correct partial fractions: $\frac{2k + 3}{x + 4} + \frac{k - 3}{x - 2}$.

#### **Part (b)**

**Step 3: Integrate partial fractions**
$\int_{-3}^{1} \left( \frac{2k + 3}{x + 4} + \frac{k - 3}{x - 2} \right) \, dx = \left[ (2k + 3)\ln|x + 4| + (k - 3)\ln|x - 2| \right]_{-3}^{1}$
- **[M1]** Integrates the partial fractions to obtain terms of the form $P\ln|x + 4|$ and $Q\ln|x - 2|$.

**Step 4: Substitute limits**
Upper limit $x = 1$:
$(2k + 3)\ln(5) + (k - 3)\ln(1) = (2k + 3)\ln 5$ (since $\ln 1 = 0$).
Lower limit $x = -3$:
$(2k + 3)\ln(1) + (k - 3)\ln(-5) = (k - 3)\ln 5$ (using modulus $|-5| = 5$).
- **[M1]** Correctly substitutes limits $1$ and $-3$ and uses $\ln 1 = 0$ and modulus appropriately.

**Step 5: Solve for $k$**
$((2k + 3)\ln 5 + 0) - (0 + (k - 3)\ln 5) = 21$
$(2k + 3 - k + 3)\ln 5 = 21$
$(k + 6)\ln 5 = 21$
$k + 6 = \frac{21}{\ln 5} \Rightarrow k = \frac{21}{\ln 5} - 6$
- **[A1]** Correct exact value $k = \frac{21}{\ln 5} - 6$ (or equivalent).

### **Examiner Report 1**

Part (a) was generally done well with most candidates not deterred by the occurrence of the “$k$” in the numerator. The majority of students correctly formed the partial fractions and set up the identity in terms of $A$ and $B$. Once there, most of them correctly went forward by substituting $x$ as $2$ and $-4$ and finding $A$ and $B$ in terms of $k$. Some set up their partial fractions in the form $\frac{A}{x - 2} + \frac{B}{x + 4}$ but very rarely managed to achieve $A = 0$. The method of comparing coefficients and solving two equations in $A$ and $B$ simultaneously was seen very occasionally. Errors were made where candidates had assigned the wrong values for $A$ and $B$ in their final partial fractions. A common sign error was made when substituting in $x = -4$, leading to solving $-12k - 18 = -6A$ to obtain $A = 2k - 3$, instead of $A = 2k + 3$. Some did not fully simplify their expressions for $A$ or $B$, leaving them as fractions. Another error at this stage generally involved not substituting for $x$ in the $3kx$ term, leaving $A$ and $B$ in terms of $x$. Some students transposed the $x - 2$ and $x + 4$ at the beginning so lost the $B$ mark but generally followed through correctly and scored the method mark. In a small number of cases, the last mark was lost after candidates correctly found the numerators in terms of $k$, but did not write down the correct partial fractions.

Very few candidates managed full marks in part (b), although the majority did gain the first method mark for integrating to obtain $\dots\ln(x + 4)$ or $\dots\ln(x - 2)$. Those who did not recognise the logarithmic form for the integration were unable to score any marks in this part. Some achieved the correct form after first using a formal substitution. Of those who integrated their partial fractions successfully, the vast majority were far from strict in their use of the modulus symbol and many lost marks due to lack of appreciation of its importance. Use of modulus notation for integrating reciprocal functions should be picked up by centres as a teaching point with future cohorts. Students who had written the incorrect term $-(k - 3)\ln(-5)$ or even the correct term $-(k - 3)\ln| -5 |$ after applying the limit $x = -3$, went on to indicate that they believed this term was zero or could just be ignored. Another example of poor practice was missing brackets around the coefficients e.g. $2k + 3\ln(5) + k - 3\ln(1)$ being surprisingly common. The “invisible” brackets were sometimes recovered but in many cases were not. There were also examples where the brackets around the $(x + 4)$ and the $(x - 2)$ were also missing. Those with a systematic well-laid out approach for the substitution of limits in both terms and identifying clear subtraction of the lower limit, went on to score $3$ or $4$ marks in part (b) and commonly full marks for the question. Many candidates however were hampered by their own layout making the correct interpretation of $\ln(-5)$ as $\ln|5|$ even more challenging. The perhaps unfamiliar, exact form needed for $k$ also proved a challenge for even the best candidates. There were some elaborate attempts to achieve an expression for $k$, some using exponentials, but many gave up along the way. There were, however some very elegant and correct solutions to this question and some different forms of the exact equivalent answer were seen, for example $21\log_e(5) - 6$ but most correct answers were given as $\frac{21}{\ln 5} - 6$.

---
topic: "Integration"
subtopic: "Modelling with differential equations"
---
### **Question 11**

**Figure 1** _(A sketch of a cuboid tank with dimensions 20m by 10m at the base and a height of 5m, containing water up to a height of h m)._

```tikz
\begin{tikzpicture}[scale=0.8]
  \draw (0,0) coordinate (a) -- ++(5,0) coordinate (b) -- ++(2,1.5) coordinate (c) -- ++(-5,0) coordinate (d) -- cycle;
  \draw (a) -- ++(0,3) coordinate (e);
  \draw (b) -- ++(0,3) coordinate (f);
  \draw (c) -- ++(0,3) coordinate (g);
  \draw (d) -- ++(0,3) coordinate (h);
  \draw (e) -- (f) -- (g) -- (h) -- cycle;
  \draw[dashed] (e) -- (g);
  \draw[dashed] (f) -- (h);
  % Water level
  \fill[gray!30, opacity=0.5] (a) -- (b) -- (c) -- (d) -- cycle;
  \fill[gray!40, opacity=0.5] (a) -- (b) -- (f') -- (e') -- cycle; % approximate water box
\end{tikzpicture}
```

A tank in the shape of a cuboid is being filled with water.

The base of the tank measures $20\text{ m}$ by $10\text{ m}$ and the height of the tank is $5\text{ m}$, as shown in Figure 1.

At time $t$ minutes after water started flowing into the tank the height of the water was $h\text{ m}$ and the volume of water in the tank was $V\text{ m}^3$.

In a model of this situation
- the sides of the tank have negligible thickness
- the rate of change of $V$ is inversely proportional to the square root of $h$

**(a)** Show that
$$\frac{dh}{dt} = \frac{\lambda}{\sqrt{h}}$$
where $\lambda$ is a constant. **(3)**

Given that
- initially the height of the water in the tank was $1.44\text{ m}$
- exactly $8$ minutes after water started flowing into the tank the height of the water was $3.24\text{ m}$

**(b)** use the model to find an equation linking $h$ with $t$, giving your answer in the form
$$h^{\frac{3}{2}} = At + B$$
where $A$ and $B$ are constants to be found. **(5)**

**(c)** Hence find the time taken, from when water started flowing into the tank, for the tank to be completely full. **(2)**

**(Total 10 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Relate volume to height**
$V = 20 \times 10 \times h = 200h \Rightarrow \frac{dV}{dh} = 200$.
- **[B1]** Correct relationship $V = 200h$ or $\frac{dV}{dh} = 200$.

**Step 2: Express rate of change of volume**
$\frac{dV}{dt} = \frac{k}{\sqrt{h}}$ (or $\frac{k'}{\sqrt{h}}$).
- **[M1]** States $\frac{dV}{dt} = \frac{k}{\sqrt{h}}$ (or proportional equivalent).

**Step 3: Use chain rule to find $\frac{dh}{dt}$**
$\frac{dh}{dt} = \frac{dh}{dV} \times \frac{dV}{dt} = \frac{1}{200} \times \frac{k}{\sqrt{h}} = \frac{\lambda}{\sqrt{h}}$ (where $\lambda = \frac{k}{200}$).
- **[A1]** Successfully derives $\frac{dh}{dt} = \frac{\lambda}{\sqrt{h}}$ with complete reasoning.

#### **Part (b)**

**Step 4: Separate variables and integrate**
$\int h^{\frac{1}{2}} \, dh = \int \lambda \, dt$
$\frac{2}{3}h^{\frac{3}{2}} = \lambda t + c$
- **[M1]** Separates variables and attempts integration to get $Ph^{\frac{3}{2}} = \lambda t + c$.

**Step 5: Use initial conditions to find integration constant**
When $t = 0, h = 1.44$:
$\frac{2}{3}(1.44)^{\frac{3}{2}} = 0 + c \Rightarrow \frac{2}{3}(1.728) = c \Rightarrow c = 1.152$ (or $\frac{288}{250} = \frac{144}{125}$).
- **[M1]** Substitutes $t = 0, h = 1.44$ to find constant $c$ (or $B$).

**Step 6: Use second condition to find $\lambda$**
When $t = 8, h = 3.24$:
$\frac{2}{3}(3.24)^{\frac{3}{2}} = 8\lambda + 1.152$
$\frac{2}{3}(5.832) = 8\lambda + 1.152 \Rightarrow 3.888 = 8\lambda + 1.152 \Rightarrow 8\lambda = 2.736 \Rightarrow \lambda = 0.342$.
- **[M1]** Substitutes $t = 8, h = 3.24$ to find $\lambda$ (or $A$).

**Step 7: Rearrange into required form**
$\frac{2}{3}h^{\frac{3}{2}} = 0.342t + 1.152 \Rightarrow h^{\frac{3}{2}} = 0.513t + 1.728$.
- **[A1]** Correct values for $A$ and $B$ ($A = 0.513$ or $\frac{513}{1000}$, $B = 1.728$ or $\frac{216}{125}$).
- **[A1]** Fully correct equation in the requested form $h^{\frac{3}{2}} = At + B$.

#### **Part (c)**

**Step 8: Calculate time when tank is full**
When tank is full, $h = 5$.
$5^{\frac{3}{2}} = 0.513t + 1.728$
$5\sqrt{5} = 0.513t + 1.728 \Rightarrow 11.1803 = 0.513t + 1.728$
$0.513t = 9.4523 \Rightarrow t = 18.425\dots \approx 18.4$ minutes.
- **[M1]** Substitutes $h = 5$ into their equation from part (b) and rearranges for $t$.
- **[A1]** $18.4$ minutes (or exact equivalent $18.425\dots$).

### **Examiner Report 1**

Many candidates found this question challenging and there were a significant number of blank responses.

Candidates found part (a) particularly challenging, with many attaining either no marks or the first mark only. The concept of connected rates of change is one that candidates frequently struggle with. A good number found an expression for $V$ and successfully differentiated to get $\frac{dV}{h} = 200$, although some confused the volume of water with the volume of the tank. Many candidates failed to recognise that $\frac{dV}{t} \propto \frac{1}{\sqrt{h}}$ and hence $\frac{dV}{dt} = \frac{k}{\sqrt{h}}$. Of those who had some concept of the rate being $\frac{dV}{dt}$, many misunderstood the idea of inverse proportion and others missed the constant of proportionality. Even where candidates had correct expressions for both $\frac{dV}{dh}$ and $\frac{dV}{dt}$, they often failed to use the chain rule correctly to find $\frac{dh}{dt}$. Many candidates who did link their expressions correctly, achieving $\frac{dh}{dt} = \frac{1}{200} \times \frac{k}{\sqrt{h}}$ or equivalent, stated that this could be expressed as $\frac{\lambda}{\sqrt{h}}$, with $\lambda = \frac{k}{200}$ and so gained all three marks. Others made no reference to $\lambda$ and so lost the accuracy mark. A less common, but correct, approach used $\frac{dh}{dt} = \frac{d(200h)}{dt}$ [sic].

Approaches to part (b) of the question were very mixed. Many candidates failed to realise that, as the question said, ‘use the model to find an equation’, they were expected to, for example, separate the variables and use calculus to solve the differential equation. As they were asked to give their answer in a specific form, a large number started from this and found the constants $A$ and $B$ using the given values of $t$ and $h$. Fortunately, they were able to gain two marks from the special case. Candidates who used calculus rarely had problems integrating $\sqrt{h}$, although errors were seen later when substituting into $h^{\frac{3}{2}}$ or in dealing with the $\frac{2}{3}$ when rearranging the equation. Candidates who started this part with the $\lambda$ were generally more successful. Some candidates correctly found $c$ and $\lambda$, and then rearranged. Others rearranged before making substitutions, stating $\frac{2}{3}\lambda = A$ and $\frac{2}{3}c = B$. A minority lost the second accuracy mark as they did not give the final equation in the correct form. Some candidates who had correctly found $\frac{dh}{dt} = \frac{1}{200} \times \frac{k}{\sqrt{h}}$ solved the differential equation using $\frac{k}{200}$ in place of $\lambda$, in most cases successfully, although the algebraic manipulation was more tricky. Some candidates who had made an incorrect attempt at (a) continued with their answer, usually $\frac{dh}{dt} = \frac{1}{200} \times \frac{1}{\sqrt{h}}$, in this part. As they only had one constant, the ‘$c$’, in their expression, they could only attain the first two method marks. It was rare to see the constant of integration missed and basic arithmetical errors when finding either $\lambda$ and $c$ or $A$ and $B$ were also relatively infrequent. The alternative approach, rearranging to give $\frac{dt}{dh} = \frac{\sqrt{h}}{\lambda}$ or $\frac{200\sqrt{h}}{k}$ was seen on a few occasions.

The majority of candidates who had a correct form of the equation in part (b) made a good attempt at part (c) and were generally able to gain the method mark. Relatively few lost the accuracy mark due to missing the units in their final answer. A number of candidates used an incorrect value for $h$, most commonly $1000$, and so lost both marks.

---
topic: "Functions and Graphs"
subtopic: "y = |f(x)| and y = f(|x|)"
---
### **Question 12**

**Figure 2** _(A sketch of two V-shaped modulus curves $N_A = |t - 3| + 4$ and $N_B = 8 - |2t - 6|$ intersecting on a 5-year period t-axis)._

```tikz
\begin{tikzpicture}[scale=0.8]
  \draw[->] (-0.5,0) -- (6,0) node[below] {$t$};
  \draw[->] (0,-0.5) -- (0,6) node[left] {$N$};
  % NA = |t-3| + 4 -> vertex at (3,4), passes through (0,7) and (5,6)
  \draw[thick] (0,7) -- (3,4) -- (5,6) node[right] {$N_A$};
  % NB = 8 - |2t-6| -> vertex at (3,8), passes through (0,2) and (5,2)
  \draw[thick] (0,2) -- (3,8) -- (5,2) node[right] {$N_B$};
  \node at (5,0) [below] {$5$};
  \node at (0,0) [bottom left] {$O$};
\end{tikzpicture}
```

The number of subscribers to two different music streaming companies is being monitored.

The number of subscribers, $N_A$, in thousands, to company A is modelled by the equation
$$N_A = |t - 3| + 4, \quad t \geqslant 0$$
where $t$ is the time in years since monitoring began.

The number of subscribers, $N_B$, in thousands, to company B is modelled by the equation
$$N_B = 8 - |2t - 6|, \quad t \geqslant 0$$
where $t$ is the time in years since monitoring began.

Figure 2 shows a sketch of the graph of $N_A$ and the graph of $N_B$ over a $5$-year period.

Use the equations of the models to answer parts (a), (b), (c) and (d).

**(a)** Find the initial difference between the number of subscribers to company A and the number of subscribers to company B. **(2)**

When $t = T$ company A reduced its subscription prices and the number of subscribers increased.

**(b)** Suggest a value for $T$, giving a reason for your answer. **(2)**

**(c)** Find the range of values of $t$ for which $N_A > N_B$ giving your answer in set notation. **(5)**

**(d)** State a limitation of the model used for company B. **(1)**

**(Total 10 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Evaluate $N_A$ and $N_B$ at $t = 0$**
When $t = 0$:
$N_A = |0 - 3| + 4 = 3 + 4 = 7$
$N_B = 8 - |2(0) - 6| = 8 - 6 = 2$
Difference $= 7 - 2 = 5$ (thousand)
- **[M1]** Evaluates both $N_A$ and $N_B$ at $t = 0$.
- **[A1]** Correct initial difference of $5$ (thousand) (or $5000$).

#### **Part (b)**

**Step 2: Identify $T$**
$T = 3$
Reason: This corresponds to the turning point (minimum) of $N_A$ where subscribers start to increase after decreasing initially.
- **[B1]** $T = 3$.
- **[B1]** Correct valid reason referencing the minimum point / change of direction in $N_A$.

#### **Part (c)**

**Step 3: Set up inequality**
$|t - 3| + 4 > 8 - |2t - 6|$
Note that $|2t - 6| = |2(t - 3)| = 2|t - 3|$.
$|t - 3| + 2|t - 3| > 4 \Rightarrow 3|t - 3| > 4$
- **[M1]** Forms a correct inequality using the modulus models (e.g. $3|t - 3| > 4$).

**Step 4: Solve inequality for critical values**
$|t - 3| > \frac{4}{3}$
$t - 3 > \frac{4}{3} \Rightarrow t > \frac{13}{3}$
$t - 3 < -\frac{4}{3} \Rightarrow t < \frac{5}{3}$
- **[M1]** Solves the modulus inequality to find critical values $\frac{5}{3}$ and $\frac{13}{3}$.

**Step 5: State range in set notation**
Since $t \geqslant 0$, the range is $\left\{ t \in \mathbb{R} : 0 \leqslant t < \frac{5}{3} \right\} \cup \left\{ t \in \mathbb{R} : t > \frac{13}{3} \right\}$ (or equivalent).
- **[A1]** Correct critical values $\frac{5}{3}$ and $\frac{13}{3}$.
- **[A1]** Correct region choice (outside region).
- **[A1]** Correct set notation including restriction $t \geqslant 0$.

#### **Part (d)**

**Step 6: State limitation**
Company B's model predicts negative subscribers after some time (or subscriber numbers drop to zero and cannot be negative).
- **[B1]** Acceptable limitation (e.g. subscribers cannot be negative, or model breaks down when $N_B = 0$).

### **Examiner Report 1**

In part (a), most candidates were successful in understanding the requirement to substitute zero into $N_A$ and $N_B$. There were some processing errors resulting in incorrect values for $N_A$ and $N_B$. A significant number failed to score the method mark by not subtracting their values. There were a few candidates that did not recognise the question was scaled in thousands and left a final answer of $5$.

In part (b), a large majority of candidates were able to deduce that $T = 3$ and most explanations were around the idea of the values increasing after this point. The next most common explanation centred on the graph being a minimum or having “turning point” at this location. There were also candidates who stated the gradient has increased or was positive.

In part (c), a significant number of candidates failed to identify either of the correct equations. Many were able to identify and solve correctly at least one equation to find one critical value for $t$. A common error often followed their correct equation of $5 = 3t$ when they wrote the value of $t$ as $3/5$ and similarly, but less common, $13 = 3t$ leading to $t = \frac{3}{13}$. Some students kept the modulus signs within their equations and ignored them at various stages in their working which often led to incorrect equations. There was an array of methods seen trying to negotiate the modulus signs, and $|A| + |B| = |A + B|$ was seen a few times and $|A| + |B| = k \Rightarrow |A|^2 + |B|^2 = k^2$ was also seen.

Those who found two values for $t$ were generally able to score the 2nd follow through accuracy mark for choosing the outside region for their critical values. The biggest challenge was the final accuracy mark as quite a few candidates did not write the inequalities using set notation. Those who attempted set notation usually were unable to write their answer correctly in that form, some confusing $\cup$ with $\cap$. A common answer was $\left\{ t < \frac{5}{3} \right\} \cup \left\{ t > \frac{13}{3} \right\}$ which was condoned for this final mark.

Those who attempted the squaring method in this part had minimal success depending on when they chose to square.

Many candidates were successful in part (d) even if they had not progressed with the other parts of the question. The majority of candidates correctly referenced the subscribers will become negative to obtain this B mark. Where a candidate attempted this part but did not obtain this mark, it was usually due to not making a reference to the number of subscribers becoming negative, saying it goes to zero or that it is linear or decreasing. Several candidates thought it couldn’t go above $8000$ subscribers.

---
topic: "Binomial Expansion"
subtopic: "Expanding (a + bx)^n"
---
### **Question 13**

In this question you must show all stages of your working.

Solutions relying entirely on calculator technology are not acceptable.

**(a)** Find the first three terms, in ascending powers of $x$, of the binomial expansion of
$$(3 + x)^{-2}$$
writing each term in simplest form. **(4)**

**(b)** Using the answer to part (a) and using algebraic integration, estimate the value of
$$\int_{0.2}^{0.4} \frac{6x}{(3 + x)^2} \, dx$$
giving your answer to $4$ significant figures. **(4)**

**(c)** Find, using algebraic integration, the exact value of
$$\int_{0.2}^{0.4} \frac{6x}{(3 + x)^2} \, dx$$
giving your answer in the form $a\ln b + c$, where $a$, $b$ and $c$ are constants to be found. **(5)**

**(Total 13 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Factorise to form $(1 + kx)^n$**
$(3 + x)^{-2} = [3(1 + \frac{x}{3})]^{-2} = 3^{-2}(1 + \frac{x}{3})^{-2} = \frac{1}{9}(1 + \frac{x}{3})^{-2}$
- **[M1]** Factorises out $3$ correctly to get $3^{-2}(1 + \frac{x}{3})^{-2}$ (or equivalent).

**Step 2: Expand using binomial theorem**
$\frac{1}{9} \left[ 1 + (-2)\left(\frac{x}{3}\right) + \frac{(-2)(-3)}{2!}\left(\frac{x}{3}\right)^2 + \dots \right]$
$= \frac{1}{9} \left[ 1 - \frac{2}{3}x + \frac{x^2}{3} + \dots \right]$
- **[M1]** Correct binomial coefficients structure for $n = -2$.
- **[A1]** Correct expansion of brackets: $1 - \frac{2}{3}x + \frac{1}{3}x^2$.

**Step 3: Multiply by $\frac{1}{9}$**
$= \frac{1}{9} - \frac{2}{27}x + \frac{1}{27}x^2$
- **[A1]** Simplifies to $\frac{1}{9} - \frac{2}{27}x + \frac{1}{27}x^2$.

#### **Part (b)**

**Step 4: Form integrand using expansion from part (a)**
$\frac{6x}{(3 + x)^2} = 6x(3 + x)^{-2} \approx 6x\left(\frac{1}{9} - \frac{2}{27}x + \frac{1}{27}x^2\right) = \frac{2}{3}x - \frac{4}{9}x^2 + \frac{2}{9}x^3$
- **[M1]** Multiplies their expansion from part (a) by $6x$.

**Step 5: Integrate the polynomial approximation**
$\int_{0.2}^{0.4} \left( \frac{2}{3}x - \frac{4}{9}x^2 + \frac{2}{9}x^3 \right) \, dx = \left[ \frac{1}{3}x^2 - \frac{4}{27}x^3 + \frac{1}{18}x^4 \right]_{0.2}^{0.4}$
- **[M1]** Integrates the expanded expression term by term.

**Step 6: Evaluate limits and round**
At $x = 0.4$: $\frac{1}{3}(0.4)^2 - \frac{4}{27}(0.4)^3 + \frac{1}{18}(0.4)^4 = 0.053333 - 0.009481 + 0.000142 = 0.043994$
At $x = 0.2$: $\frac{1}{3}(0.2)^2 - \frac{4}{27}(0.2)^3 + \frac{1}{18}(0.2)^4 = 0.013333 - 0.001185 + 0.000009 = 0.012157$
Difference $= 0.043994 - 0.012157 = 0.033037\dots \approx 0.03304$
- **[A1]** Correct evaluation to 4 sig fig ($0.03304$).

#### **Part (c)**

**Step 7: Perform exact algebraic integration**
$\int_{0.2}^{0.4} \frac{6x}{(3 + x)^2} \, dx$
Using substitution $u = 3 + x \Rightarrow x = u - 3, dx = du$ (or integration by parts):
$\int \frac{6(u - 3)}{u^2} \, du = \int \left( \frac{6}{u} - 18u^{-2} \right) du = 6\ln|u| + \frac{18}{u} = 6\ln(3 + x) + \frac{18}{3 + x}$
- **[M1]** Recognizes valid integration strategy (substitution, parts, partial fractions, or rewriting as $6(x+3-3)(3+x)^{-2}$).
- **[A1]** Correct integration resulting in $6\ln(3 + x) - \frac{18}{3 + x}$ or equivalent.

**Step 8: Substitute limits**
$\left[ 6\ln(3 + x) + \frac{18}{3 + x} \right]_{0.2}^{0.4} = \left( 6\ln(3.4) + \frac{18}{3.4} \right) - \left( 6\ln(3.2) + \frac{18}{3.2} \right)$
$= 6\ln(3.4) - 6\ln(3.2) + \frac{18}{3.4} - \frac{18}{3.2}$
$= 6\ln\left(\frac{3.4}{3.2}\right) + \frac{45}{17} - \frac{45}{16} = 6\ln\left(\frac{17}{16}\right) - \frac{45}{272}$ (or exact equivalent).
- **[M1]** Correctly substitutes limits $0.4$ and $0.2$ into their integrated expression.
- **[A1]** Correct exact expression in the required form $a\ln b + c$ (e.g. $6\ln\left(\frac{17}{16}\right) - \frac{45}{272}$).

### **Examiner Report 1**

Most candidates attempted at least part (a) of this question, but some found the work more demanding in (b) and (c) and made little progress in either part. Despite this, there were many fully correct or nearly fully correct attempts at the whole question.

In part (a), most candidates successfully factorised out $3^{-2}$ and attempted the correct resulting expansion of $\left(1 + \frac{x}{3}\right)^{-2}$. There were some arithmetic slips, but generally candidates often reached the correct answer. A common error, however, was failing to factorise properly, reaching $3(1 + x)^{-2}$. There were a number of attempts at direct expansion. Some of these used non-standard binomial coefficients involving negative integers. To achieve credit for using these, candidates needed to demonstrate the meaning of their non-standard notation. Very occasionally candidates multiplied their correct simplified expansion by $9$ or $27$ at the end. This still received full marks as examiners could ignore subsequent working following seeing a correct simplified answer. 

In part (b), many candidates correctly multiplied their expansion by $6x$ and then integrated using the limits of $0.2$ and $0.4$ reaching $0.03304$, gaining full marks. A common error, however, was not giving the final answer to the required accuracy of four significant figures, thus losing the final accuracy mark. Those candidates who had expanded part (a) to more than three terms also lost this final accuracy mark as it led to a different approximation. A more complicated and unnecessary method involving integration by parts was used by a small minority of candidates. Candidates also often tried inappropriate approaches like dividing $6x$ by their expansion followed by a logarithmic integral. A minority of candidates, despite the warning at the start of the question, clearly used calculator technology to obtain $0.032865$, rather than the answer of $0.03304$ required. Others made inappropriate attempts at the trapezium rule, thus gaining no credit as algebraic integration was required. 

In part (c), the commonest methods of integration adopted were substitution, using either $u = x + 3$ or $u = (x + 3)^2$, integration by parts, integration after applying partial fractions and integration using the reverse chain rule after writing the integrand in appropriate form. Candidates had varying success with all of these approaches, gaining a variety of marks. Integration by parts seemed to lead to most arithmetical mistakes. Errors resulted from using parts ‘the wrong way round’ and others integrated the $(3 + x)^{-2}$ term incorrectly. When integrating by substitution some students incorrectly thought that $\frac{18}{u^2}$ would integrate to a natural logarithm. There was some confusion with the limits; some candidates did not change the limits to “$u$” values and other who did evaluate new limits for their substitution switched back to an expression in $x$ before substituting their changed limits. When using partial fractions some students struggled with the initial format for the partial fractions and it was not uncommon to see partial fractions of the form $\frac{A}{3 + x} + \frac{B}{3 + x}$. There was a number of candidates who either did not attempt this part of the question at all or who lacked a correct strategy. There were responses where students attempted to integrate numerator and denominator separately, e.g. $6x$ to $3x^2$ and $\frac{1}{(3 + x)^2}$ to a variation of $\ln(3 + x)^2$, and proceeded to multiply both results. A number of candidates were awarded just the first mark as their overall problem solving strategy was correct despite the fact they were unable to fully implement it. There were also many candidates who could carry out the work in this part completely successfully.

---
topic: "Trigonometric Functions and Identities"
subtopic: "Double-angle formulae"
---
### **Question 14**

In this question you must show all stages of your working.

Solutions relying entirely on calculator technology are not acceptable.

**(a)** Show that the equation
$$2\tan\theta(8\cos\theta + 23\sin^2\theta) = 8\sin 2\theta(1 + \tan^2\theta)$$
may be written as
$$\sin 2\theta(A\cos^2\theta + B\cos\theta + C) = 0$$
where $A$, $B$ and $C$ are constants to be found. **(3)**

**(b)** Hence, solve for $360^\circ \leqslant x \leqslant 540^\circ$
$$2\tan x(8\cos x + 23\sin^2 x) = 8\sin 2x(1 + \tan^2 x), \quad x \in \mathbb{R}, \quad x \neq 450^\circ$$
**(4)**

**(Total 7 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Use trigonometric identities for $\tan\theta$, $\sin 2\theta$, and $1 + \tan^2\theta$**
Substitute $\tan\theta = \frac{\sin\theta}{\cos\theta}$, $\sin 2\theta = 2\sin\theta\cos\theta$, and $1 + \tan^2\theta = \sec^2\theta = \frac{1}{\cos^2\theta}$:
$$2\left(\frac{\sin\theta}{\cos\theta}\right)(8\cos\theta + 23\sin^2\theta) = 8(2\sin\theta\cos\theta)\left(\frac{1}{\cos^2\theta}\right)$$
- **[M1]** Uses at least two correct standard identities ($\tan\theta = \frac{\sin\theta}{\cos\theta}$, $\sin 2\theta = 2\sin\theta\cos\theta$, $1 + \tan^2\theta = \sec^2\theta$ or $\frac{1}{\cos^2\theta}$).

**Step 2: Simplify and multiply through**
$$\frac{2\sin\theta}{\cos\theta}(8\cos\theta + 23\sin^2\theta) = \frac{16\sin\theta\cos\theta}{\cos^2\theta}$$
Multiply both sides by $\cos^2\theta$:
$$2\sin\theta\cos\theta(8\cos\theta + 23\sin^2\theta) = 16\sin\theta\cos\theta$$
- **[M1]** Clears fractions or simplifies to get an expression involving $\sin\theta\cos\theta$ or $\sin 2\theta$.

**Step 3: Factor out $\sin 2\theta$ and use $\sin^2\theta = 1 - \cos^2\theta$**
Since $2\sin\theta\cos\theta = \sin 2\theta$:
$$\sin 2\theta(8\cos\theta + 23\sin^2\theta) = 8\sin 2\theta$$
$$\sin 2\theta(8\cos\theta + 23\sin^2\theta - 8) = 0$$
Substitute $\sin^2\theta = 1 - \cos^2\theta$:
$$\sin 2\theta(8\cos\theta + 23(1 - \cos^2\theta) - 8) = 0$$
$$\sin 2\theta(-23\cos^2\theta + 8\cos\theta + 15) = 0 \Rightarrow \sin 2\theta(23\cos^2\theta - 8\cos\theta - 15) = 0$$
- **[A1]** Correct values found for $A, B, C$ leading to $\sin 2\theta(23\cos^2\theta - 8\cos\theta - 15) = 0$ (or negative equivalent).

#### **Part (b)**

**Step 4: Solve $\sin 2x = 0$ or $23\cos^2 x - 8\cos x - 15 = 0$**
Case 1: $\sin 2x = 0$
For $360^\circ \leqslant x \leqslant 540^\circ \Rightarrow 720^\circ \leqslant 2x \leqslant 1080^\circ$.
$2x = 720^\circ, 900^\circ, 1080^\circ \Rightarrow x = 360^\circ, 450^\circ, 540^\circ$.
(Note: $x = 450^\circ$ is excluded per question). So $x = 360^\circ, 540^\circ$.
- **[M1]** Solves $\sin 2x = 0$ for the given range, identifying valid solutions $360^\circ, 540^\circ$ (and rejecting $450^\circ$).

Case 2: $23\cos^2 x - 8\cos x - 15 = 0$
Factorising quadratic: $(23\cos x + 15)(\cos x - 1) = 0$
$\cos x = 1$ or $\cos x = -\frac{15}{23}$.
- **[M1]** Solves the quadratic in $\cos x$.

**Step 5: Find values of $x$ for the quadratic solutions**
- $\cos x = 1 \Rightarrow x = 360^\circ$.
- $\cos x = -\frac{15}{23} \Rightarrow x = 180^\circ + 49.3^\circ = 229.3^\circ$ (not in range), or $360^\circ + \arccos\left(\frac{15}{23}\right)$? Wait, for $360^\circ \leqslant x \leqslant 540^\circ$, cosine is negative in the 3rd quadrant ($180^\circ + \theta$) which gives $180^\circ + \arccos\left(\frac{15}{23}\right)$ (out of range), or $540^\circ - \dots$ wait:
$\arccos\left(-\frac{15}{23}\right) \approx 130.8^\circ$.
In range $[360^\circ, 540^\circ]$, $\cos x = -\frac{15}{23} \Rightarrow x = 360^\circ + 130.8^\circ = 490.8^\circ$.
- **[A1]** Correct solutions $360^\circ, 540^\circ, 490.8^\circ$ (accept $491^\circ$).
- **[A1]** Fully correct set of solutions with no extra invalid values included ($360^\circ, 491^\circ, 540^\circ$).

### **Examiner Report 1**

Part (a) was at least started by many but when students failed to make any progress towards the result, they tended not to attempt part (b). 

In part (a) the vast majority of candidates scored the first mark for using a correct trigonometric identity. The M and A marks were often both given or both lost, as candidates explored multiple manipulative steps to reach the final form for the equation. In many cases this involved expanding the brackets, using a substitution for $\sin 2\theta$, but later putting back into $\sin 2\theta$ form i.e., undoing the manipulation that had been introduced. Whilst in many cases this resulted in the candidate getting there in the end, there were many examples of multiple attempts or unnecessarily long solutions. The most efficient methods did not involve multiplying out the bracket on the LHS which seemed to be the default first step for most students. A common mistake was to suddenly put the RHS equal to zero so it disappeared rather than being subtracted on the LHS. For those that were successful, there were a variety of approaches as well as variety in the number of steps required to reach the correct final form, with some methods considerably more efficient than others. Arithmetic errors were commonly seen in this question. Many successful candidates attempted to find a factor of $\sin 2\theta$ on both sides of the equation before proceeding to collecting these on the same side. Another typical successful method involved writing all the terms in terms of $\sin\theta$ and $\cos\theta$, collecting all terms on the same side, and then taking a factor of $2\sin\theta\cos\theta$. However, many candidates who expanded tended to forget terms when expanding or factorising, leading to an expression in an incorrect format. Replacing $\tan\theta$ and $\sin 2\theta$ was usually handled well, as was replacing $1 + \tan^2\theta$ with $\sec^2\theta$ and then $\frac{1}{\cos^2\theta}$ but many candidates didn’t follow the manipulation to the end and were unsure what to do with the $\sin 2\theta$ on the right hand side, so either left it on the right hand side and lost both the M and A marks, or moved it to the left but then incorrectly dealt with it when combined with the quadratic formed on that side.

Part (b) was generally done well by the candidates who managed to obtain a quadratic in part (a), with many candidates correctly solving to get $360$ or $540$, and then solving their quadratic. Those who found a solution to their quadratic also tended to find solutions based on that within the specified set of values. Where marks were lost, it was often by incorrectly including extra values, in particular the value of $450$ degrees which had been specifically excluded in the question.

---
topic: "Algebraic Methods"
subtopic: "Proof by contradiction"
---
### **Question 15**

A student attempts to answer the following question:

> Given that $x$ is an obtuse angle, use algebra to prove by contradiction that
> $$\sin x - \cos x \geqslant 1$$

The student starts the proof with:
> Assume that $\sin x - \cos x < 1$ when $x$ is an obtuse angle
> $\Rightarrow (\sin x - \cos x)^2 < 1$
> $\Rightarrow \dots$

The start of the student’s proof is reprinted below.

Complete the proof. **(3)**

$$\text{Assume that } \sin x - \cos x < 1 \text{ when } x \text{ is an obtuse angle}$$
$$\Rightarrow (\sin x - \cos x)^2 < 1$$

**(Total 3 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Expand the squared inequality**
$\sin^2 x - 2\sin x\cos x + \cos^2 x < 1$
- **[M1]** Expands $(\sin x - \cos x)^2$ to $\sin^2 x - 2\sin x\cos x + \cos^2 x$ (or uses $\sin^2 x + \cos^2 x = 1$).

**Step 2: Simplify using trigonometric identities**
Since $\sin^2 x + \cos^2 x = 1$ and $2\sin x\cos x = \sin 2x$:
$1 - \sin 2x < 1 \Rightarrow -\sin 2x < 0 \Rightarrow \sin 2x > 0$
- **[M1]** Simplifies to $\sin 2x > 0$ (or $\sin x\cos x > 0$).

**Step 3: Complete the contradiction argument**
Since $x$ is an obtuse angle ($90^\circ < x < 180^\circ$ or $\frac{\pi}{2} < x < \pi$), $2x$ lies in the range $180^\circ < 2x < 360^\circ$ (or $\pi < 2x < 2\pi$), which means $\sin 2x \leqslant 0$ (or $\sin x > 0, \cos x < 0 \Rightarrow \sin x\cos x < 0$). This contradicts $\sin 2x > 0$. Hence, $\sin x - \cos x \geqslant 1$.
- **[A1]** Explains that for obtuse $x$, $\sin 2x \leqslant 0$ (or $\sin x\cos x < 0$), leading to a contradiction, and concludes the proof.

### **Examiner Report 1**

A number of candidates lost all marks on this question by not attempting any solution. 

Most candidates correctly expanded the given expression and used $\sin^2 x + \cos^2 x = 1$ to simplify and score the first two marks. A small number incorrectly used $(\sin x - \cos x)^2 = \sin^2 x - \cos^2 x$, scoring no marks. Others attempted to substitute values of $90$ and $180$ into the given expression instead of using algebraic manipulation.

Whilst most candidates scored the first two marks, only the very best were able to score the final mark, with most candidates failing to offer a convincing reason for a contradiction. Candidates who drew a graph of $\sin x$ and $\cos x$ or $\sin 2x$ to support their understanding tended to score well. Successful candidates typically explained that $2x$ must be between $180$ and $360$, and hence $\sin 2x$ must be negative, which is a contradiction with their inequality. Those that worked with $\sin x\cos x$ were generally more successful in achieving this mark than those who chose to use $\sin 2x$. However, it was clear that not all students understood what an obtuse angle was. Another typical correct conclusion involved candidates stating if $x$ is obtuse, $\sin x$ must be positive and $\cos x$ must be negative, leading to a negative product and a contradiction. Of those who were able to offer a reason for the contradiction, some still lost the final A mark for failing to then reach a conclusion that the original statement was true or because of errors in the proof such as missing $x$'s or mixed variables.
