---
topic: "Integration"
subtopic: "Integrating x^n"
---
### **Question 1**

Find
$$\int \frac{x^{\frac{1}{2}}(2x - 5)}{3} \, dx$$
writing each term in simplest form. **(4)**

### **Mark Scheme 1**

**Step 1: Expand the numerator**
$$\frac{1}{3} \int (2x^{\frac{3}{2}} - 5x^{\frac{1}{2}}) \, dx$$
- **[M1]** Attempts to expand the numerator, at least one term correct.
- **[A1]** Correct expression.

**Step 2: Integrate**
$$\frac{1}{3} \left( \frac{2x^{\frac{5}{2}}}{\frac{5}{2}} - \frac{5x^{\frac{3}{2}}}{\frac{3}{2}} \right) + c$$
- **[M1]** Integrates $x^n \to \frac{x^{n+1}}{n+1}$.

**Step 3: Simplify**
$$\frac{1}{3} \left( \frac{4}{5}x^{\frac{5}{2}} - \frac{10}{3}x^{\frac{3}{2}} \right) + c = \frac{4}{15}x^{\frac{5}{2}} - \frac{10}{9}x^{\frac{3}{2}} + c$$
- **[A1]** Correct simplified answer.

### **Examiner Report 1**

This was an accessible question for virtually all candidates. The fractional index had already been given to avoid any misconceptions. However, for the first question on the exam paper, this was frequently done poorly compared to previous years. Candidates who spotted that you needed to expand the brackets usually went on to score full marks. The most common reason for losing the final answer mark was forgetting the constant of integration. Many candidates failed to notice the simpler method in the main mark scheme and instead attempted to use integration by parts. Integration by substitution was occasionally seen, but rarely successfully completed. Across the various methods, a common error seen was initially to factorise out the $\frac{1}{3}$, work through the solution without it, but then to forget to reintroduce it. This error meant that neither of the two accuracy marks were available.

---
topic: "Algebraic Methods"
subtopic: "The factor theorem"
---
### **Question 2**

In this question you must show all stages of your working.
Solutions relying entirely on calculator technology are not acceptable.
$$f(x) = 4x^3 + 5x^2 - 10x + 4a \quad x \in \mathbb{R}$$
where $a$ is a positive constant.
Given $(x - a)$ is a factor of $f(x)$,

**(a)** show that
$$a(4a^2 + 5a - 6) = 0$$ **(2)**

**(b)** Hence
**(i)** find the value of $a$
**(ii)** use algebra to find the exact solutions of the equation
$$f(x) = 3$$ **(4)**

### **Mark Scheme 2**

#### **Part (a)**
**Step 4: Apply Factor Theorem**
$$f(a) = 4a^3 + 5a^2 - 10a + 4a = 0$$
- **[M1]** Substitutes $x=a$ into $f(x)$ and sets to 0.
- **[A1]** Correct algebra leading to $4a^3 + 5a^2 - 6a = 0 \Rightarrow a(4a^2 + 5a - 6) = 0$.

#### **Part (b)**
**Step 5: Solve for $a$**
$$a(4a^2 + 5a - 6) = 0 \Rightarrow a = 0 \text{ or } a = \frac{-5 \pm \sqrt{25 - 4(4)(-6)}}{8} = \frac{-5 \pm \sqrt{121}}{8}$$
$$a = \frac{-5 \pm 11}{8} \Rightarrow a = \frac{6}{8} = \frac{3}{4} \text{ or } a = -2$$
Since $a > 0$, $a = \frac{3}{4}$.
- **[M1]** Solves the quadratic.
- **[A1]** Correct value $a = \frac{3}{4}$ (rejecting others).

**Step 6: Solve $f(x) = 3$**
$$4x^3 + 5x^2 - 10x + 4(\frac{3}{4}) = 3 \Rightarrow 4x^3 + 5x^2 - 10x = 0$$
$$x(4x^2 + 5x - 10) = 0$$
- **[M1]** Substitutes $a$ and sets $f(x)=3$.
- **[A1]** $x=0$ and $x = \frac{-5 \pm \sqrt{25 - 4(4)(-10)}}{8} = \frac{-5 \pm \sqrt{185}}{8}$.

### **Examiner Report 2**

This question was accessible and generally well answered. The vast majority of candidates correctly identified that part (a) related to an application of the factor theorem. In part (b)(i), most candidates had no problems solving the cubic, getting the values $0, \frac{3}{4}$ and $-2$ for $a$. However, many did not take note of the fact that $a$ was positive. Part (b)(ii) was well done by those who showed every step of their working. Candidates were asked to show all stages of their working and not proceeding as far as the quadratic factor was penalised.

---
topic: "Vectors"
subtopic: "Magnitude and direction"
---
### **Question 3**

Relative to a fixed origin $O$
• the point $A$ has position vector $5\mathbf{i} + 3\mathbf{j} + 2\mathbf{k}$
• the point $B$ has position vector $2\mathbf{i} + 4\mathbf{j} + a\mathbf{k}$
where $a$ is a positive integer.

**(a)** Show that $|\vec{OA}| = \sqrt{38}$ **(1)**

**(b)** Find the smallest value of $a$ for which
$$|\vec{OB}| > |\vec{OA}|$$ **(2)**

### **Mark Scheme 3**

#### **Part (a)**
**Step 7: Calculate magnitude**
$$|\vec{OA}| = \sqrt{5^2 + 3^2 + 2^2} = \sqrt{25 + 9 + 4} = \sqrt{38}$$
- **[B1]** Correct calculation shown.

#### **Part (b)**
**Step 8: Set up inequality**
$$|\vec{OB}| = \sqrt{2^2 + 4^2 + a^2} = \sqrt{20 + a^2}$$
$$\sqrt{20 + a^2} > \sqrt{38} \Rightarrow 20 + a^2 > 38 \Rightarrow a^2 > 18$$
- **[M1]** Correct magnitude expression and inequality.
- **[A1]** $a > \sqrt{18} \approx 4.24$, so smallest integer $a = 5$.

### **Examiner Report 3**

This was another short question on two-dimensional vectors with many candidates able to score 2 out of the 3 marks. Part (a) was generally answered accurately. In part (b), the most common approach was to proceed to $a^2 > 18$ or $a^2 = 18$, and the majority of candidates were able to achieve this. However, a significant number of candidates did not conclude that $a = 5$, with some claiming that e.g. $\sqrt{18}$ is an integer or missing the requirement that "$a$" had to be an integer.

---
topic: "Differentiation"
subtopic: "Stationary points"
---
### **Question 4**

In this question you must show all stages of your working.
Solutions relying entirely on calculator technology are not acceptable.
The curve $C$ has equation $y = f(x)$ where $x \in \mathbb{R}$
Given that
• $f'(x) = 2x + \frac{1}{2} \cos x$
• the curve has a stationary point with $x$ coordinate $\alpha$
• $\alpha$ is small

**(a)** use the small angle approximation for $\cos x$ to estimate the value of $\alpha$ to 3 decimal places. **(3)**

The point $P(0, 3)$ lies on $C$

**(b)** Find the equation of the tangent to the curve at $P$, giving your answer in the form $y = mx + c$, where $m$ and $c$ are constants to be found. **(2)**

### **Mark Scheme 4**

#### **Part (a)**
**Step 9: Use small angle approximation**
$$f'(\alpha) = 0 \Rightarrow 2\alpha + \frac{1}{2}(1 - \frac{\alpha^2}{2}) = 0$$
- **[M1]** Sets $f'(\alpha)=0$ and uses $\cos \alpha \approx 1 - \frac{\alpha^2}{2}$.
- **[M1]** Solves $2\alpha + 0.5 - 0.25\alpha^2 = 0 \Rightarrow 0.25\alpha^2 - 2\alpha - 0.5 = 0$.
- **[A1]** $\alpha = \frac{2 \pm \sqrt{4 - 4(0.25)(-0.5)}}{0.5} = \frac{2 \pm \sqrt{4.5}}{0.5}$. Small $\alpha \approx -0.243$.

#### **Part (b)**
**Step 10: Find tangent**
$$f'(0) = 2(0) + \frac{1}{2} \cos(0) = 0.5$$
- **[M1]** Finds gradient at $x=0$.
- **[A1]** $y - 3 = 0.5(x - 0) \Rightarrow y = 0.5x + 3$.

### **Examiner Report 4**

This question testing the small angle approximation for cosine and finding the equation of a straight line was accessible to many candidates with a large number scoring full marks. In part (a), some candidates formed and solved the equation but were not able to use the information that $x$ was small to choose the correct solution. Part (b) was mostly well answered with the majority scoring both marks.

---
topic: "Integration"
subtopic: "The trapezium rule"
---
### **Question 5**

A continuous curve has equation $y = f(x)$.
The table shows corresponding values of $x$ and $y$ for this curve, where $a$ and $b$ are constants.

| $x$ | 3 | 3.2 | 3.4 | 3.6 | 3.8 | 4 |
|---|---|---|---|---|---|---|
| $y$ | $a$ | 16.8 | $b$ | 20.2 | 18.7 | 13.5 |

The trapezium rule is used, with all the $y$ values in the table, to find an approximate area under the curve between $x = 3$ and $x = 4$. Given that this area is 17.59

**(a)** show that $a + 2b = 51$ **(3)**

Given also that the sum of all the $y$ values in the table is 97.2

**(b)** find the value of $a$ and the value of $b$ **(3)**

### **Mark Scheme 5**

#### **Part (a)**
**Step 11: Apply Trapezium Rule**
$$h = 0.2$$
$$\text{Area} = \frac{0.2}{2} [a + 13.5 + 2(16.8 + b + 20.2 + 18.7)] = 17.59$$
- **[M1]** Correct $h$ and formula structure.
- **[A1]** $0.1 [a + 13.5 + 2(55.7 + b)] = 17.59$.
- **[A1]** $a + 13.5 + 111.4 + 2b = 175.9 \Rightarrow a + 2b = 51$.

#### **Part (b)**
**Step 12: Solve simultaneous equations**
$$a + 16.8 + b + 20.2 + 18.7 + 13.5 = 97.2 \Rightarrow a + b = 28$$
- **[M1]** Sum of $y$ values.
- **[A1]** $a + b = 28$ and $a + 2b = 51$.
- **[A1]** $b = 23, a = 5$.

### **Examiner Report 5**

This was a lovely twist on a usually very standard question using the trapezium rule that was overall very well-answered. Candidates usually scored full marks in part (a). Part (b) was dealt with very well overall, with a variety of different methods used to solve the equations simultaneously, usually via the use of a calculator.

---
topic: "Exponentials and Logarithms"
subtopic: "Laws of logarithms"
---
### **Question 6**

$a = \log_2 x \quad b = \log_2 (x + 8)$
Express in terms of $a$ and/or $b$

**(a)** $\log_2 \sqrt{x}$ **(1)**

**(b)** $\log_2 (x^2 + 8x)$ **(2)**

**(c)** $\log_2 \left( 8 + \frac{64}{x} \right)$
Give your answer in simplest form. **(3)**

### **Mark Scheme 6**

#### **Part (a)**
**Step 13: Apply power law**
$$\log_2 x^{\frac{1}{2}} = \frac{1}{2} \log_2 x = \frac{1}{2}a$$
- **[B1]** Correct.

#### **Part (b)**
**Step 14: Factorise and apply addition law**
$$\log_2 (x(x+8)) = \log_2 x + \log_2 (x+8) = a + b$$
- **[M1]** Factorise.
- **[A1]** Correct.

#### **Part (c)**
**Step 15: Simplify argument**
$$\log_2 \left( \frac{8x + 64}{x} \right) = \log_2 \left( \frac{8(x+8)}{x} \right)$$
$$\log_2 8 + \log_2 (x+8) - \log_2 x = 3 + b - a$$
- **[M1]** Combine fractions.
- **[M1]** Apply log laws.
- **[A1]** $3 + b - a$.

### **Examiner Report 6**

This was again another accessible question. However, this topic continues to be one which candidates struggle with. It was not uncommon to see candidates attempting to use rules of indices rather than logarithms. Part (c) was the most challenging part of this question and clearly identified the stronger mathematicians of the cohort.

---
topic: "Functions and Graphs"
subtopic: "Inverse functions"
---
### **Question 7**

The function $f$ is defined by
$$f(x) = 3 + \sqrt{x - 2} \quad x \in \mathbb{R} \quad x > 2$$

**(a)** State the range of $f$ **(1)**

**(b)** Find $f^{-1}$ **(3)**

The function $g$ is defined by
$$g(x) = \frac{15}{x - 3} \quad x \in \mathbb{R} \quad x \neq 3$$

**(c)** Find $gf(6)$ **(2)**

**(d)** Find the exact value of the constant $a$ for which
$$f(a^2 + 2) = g(a)$$ **(2)**

### **Mark Scheme 7**

#### **Part (a)**
**Step 16: Range**
$$f(x) > 3$$
- **[B1]** Correct.

#### **Part (b)**
**Step 17: Inverse**
$$y = 3 + \sqrt{x - 2} \Rightarrow y - 3 = \sqrt{x - 2} \Rightarrow (y - 3)^2 = x - 2 \Rightarrow x = (y - 3)^2 + 2$$
$$f^{-1}(x) = (x - 3)^2 + 2$$
- **[M1]** Rearrange.
- **[A1]** Correct expression.
- **[A1]** Correct domain/notation.

#### **Part (c)**
**Step 18: Composite**
$$f(6) = 3 + \sqrt{6 - 2} = 3 + 2 = 5$$
$$g(5) = \frac{15}{5 - 3} = \frac{15}{2} = 7.5$$
- **[M1]** Evaluate $f(6)$.
- **[A1]** Correct.

#### **Part (d)**
**Step 19: Solve equation**
$$f(a^2 + 2) = 3 + \sqrt{a^2 + 2 - 2} = 3 + a$$
$$3 + a = \frac{15}{a - 3} \Rightarrow (3 + a)(a - 3) = 15 \Rightarrow a^2 - 9 = 15 \Rightarrow a^2 = 24$$
$$a = \sqrt{24} = 2\sqrt{6}$$
- **[M1]** Set up equation.
- **[A1]** Correct $a$.

### **Examiner Report 7**

Overall, this was an accessible question on functions. Part (c) had the lowest number of errors out of the entire question and was one of the most successfully answered parts over the entire paper. In part (b), a small number of candidates made some errors in applying the correct order of operations. A common error was seen with candidates who incorrectly manipulated $y = 3 + \sqrt{x-2}$ to obtain $y^2 = 9 + x - 2$.

---
topic: "Radians"
subtopic: "Arc length"
---
### **Question 8**

Figure 1 shows the plan view of a stage.
The plan view shows two congruent triangles $ABO$ and $GFO$ joined to a sector $OCDEO$ of a circle, centre $O$, where
• angle $COE = 2.3$ radians
• arc length $CDE = 27.6$ m
• $AOG$ is a straight line of length 15 m

**(a)** Show that $OC = 12$ m. **(2)**

**(b)** Show that the size of angle $AOB$ is 0.421 radians correct to 3 decimal places. **(2)**

Given that the total length of the front of the stage, $BCDEF$, is 35 m,

**(c)** find the total area of the stage, giving your answer to the nearest square metre. **(6)**

### **Mark Scheme 8**

#### **Part (a)**
**Step 20: Arc length**
$$s = r\theta \Rightarrow 27.6 = r(2.3) \Rightarrow r = 12$$
- **[M1]** Use $s=r\theta$.
- **[A1]** Correct.

#### **Part (b)**
**Step 21: Angle**
$$\text{Angle } AOB = \frac{\pi - 2.3}{2} = 0.42079... \approx 0.421$$
- **[M1]** Use straight line.
- **[A1]** Correct.

#### **Part (c)**
**Step 22: Area**
$$\text{Area sector} = \frac{1}{2}r^2\theta = 0.5(12^2)(2.3) = 165.6$$
$$\text{Length } BC = 35 - 27.6 = 7.4 \Rightarrow BC = 3.7$$
$$\text{Area triangle} = \frac{1}{2}ab\sin C = 0.5(12)(OB)\sin(0.421)$$
- **[M1]** Area sector.
- **[M1]** Find $BC$.
- **[M1]** Area triangle.
- **[A1]** Total area.

### **Examiner Report 8**

Generally most candidates found this question accessible, working confidently in radians throughout. In part (a) a rigorous solution was expected; a very large number of candidates lost the second mark by failing to explicitly show the process of dividing the arc length by the angle. Part (b) was typically answered well. There was a wide range of marks for part (c), although many candidates produced highly competent solutions and gained full marks.

---
topic: "Sequences and Series"
subtopic: "Geometric series"
---
### **Question 9**

The first three terms of a geometric sequence are
$$3k + 4 \quad 12 - 3k \quad k + 16$$
where $k$ is a constant.

**(a)** Show that $k$ satisfies the equation
$$3k^2 - 62k + 40 = 0$$ **(2)**

Given that the sequence converges,

**(b)** (i) find the value of $k$, giving a reason for your answer,
(ii) find the value of $S_\infty$ **(5)**

### **Mark Scheme 9**

#### **Part (a)**
**Step 23: Common ratio**
$$\frac{12 - 3k}{3k + 4} = \frac{k + 16}{12 - 3k}$$
$$(12 - 3k)^2 = (k + 16)(3k + 4)$$
$$144 - 72k + 9k^2 = 3k^2 + 4k + 48k + 64 \Rightarrow 6k^2 - 124k + 80 = 0 \Rightarrow 3k^2 - 62k + 40 = 0$$
- **[M1]** Equate ratios.
- **[A1]** Correct expansion.

#### **Part (b)**
**Step 24: Solve**
$$(3k - 2)(k - 20) = 0 \Rightarrow k = \frac{2}{3}, k = 20$$
- **[M1]** Solve quadratic.
- **[A1]** $k = \frac{2}{3}$ (reason: $|r| < 1$).
- **[A1]** $S_\infty = \frac{a}{1-r}$.

### **Examiner Report 9**

This was a more demanding than expected question on geometric sequences. Most candidates were able to score full marks in part (a) by correctly giving an equation in $k$. In part (b)(i) candidates were required to find the value of $k$ and to give a reason for their answer. However, many found giving a reason particularly challenging. Part (b)(ii) proved to be very challenging for many candidates.

---
topic: "Circles"
subtopic: "Equation of a circle"
---
### **Question 10**

A circle $C$ has equation
$$x^2 + y^2 + 6kx - 2ky + 7 = 0$$
where $k$ is a constant.

**(a)** Find in terms of $k$,
(i) the coordinates of the centre of $C$
(ii) the radius of $C$ **(3)**

The line with equation $y = 2x - 1$ intersects $C$ at 2 distinct points.

**(b)** Find the range of possible values of $k$. **(6)**

### **Mark Scheme 10**

#### **Part (a)**
**Step 25: Complete the square**
$$(x + 3k)^2 - 9k^2 + (y - k)^2 - k^2 + 7 = 0$$
$$(x + 3k)^2 + (y - k)^2 = 10k^2 - 7$$
- **[M1]** Complete square.
- **[A1]** Centre $(-3k, k)$.
- **[A1]** Radius $\sqrt{10k^2 - 7}$.

#### **Part (b)**
**Step 26: Intersect**
$$x^2 + (2x - 1)^2 + 6kx - 2k(2x - 1) + 7 = 0$$
$$5x^2 + (2k - 4)x + (2k + 8) = 0$$
Discriminant $D > 0$:
$$(2k - 4)^2 - 4(5)(2k + 8) > 0$$
$$4k^2 - 16k + 16 - 40k - 160 > 0 \Rightarrow 4k^2 - 56k - 144 > 0 \Rightarrow k^2 - 14k - 36 > 0$$
- **[M1]** Substitute line into circle.
- **[M1]** Discriminant.
- **[A1]** Correct inequality.

### **Examiner Report 10**

Candidates were typically able to make good progress in part (a). Part (b) was focused on using the discriminant and solving a quadratic inequality, however, the manipulation proved to be a lot for some, resulting in a wide range of marks. In general candidates obtained $(-3k, k)$ as the centre of the circle in part (a). In part (b), whilst a number of candidates had little idea how to proceed, the vast majority did realise what was required.

---
topic: "Exponentials and Logarithms"
subtopic: "Exponential modelling"
---
### **Question 11**

The value, $V$ pounds, of a mobile phone, $t$ months after it was bought, is modelled by
$$V = ab^t$$
where $a$ and $b$ are constants.
Figure 2 shows the linear relationship between $\log_{10} V$ and $t$.
The line passes through the points $(0, 3)$ and $(10, 2.79)$ as shown.

**(a)** find the initial value of the phone, **(2)**

**(b)** find a complete equation for $V$ in terms of $t$, giving the exact value of $a$ and giving the value of $b$ to 3 significant figures. **(3)**

**(c)** Use this information to evaluate the reliability of the model. **(2)**

### **Mark Scheme 11**

#### **Part (a)**
**Step 27: Intercept**
$$\log_{10} V = 3 \Rightarrow V = 10^3 = 1000$$
- **[M1]** $\log V = 3$.
- **[A1]** £1000.

#### **Part (b)**
**Step 28: Gradient**
$$\text{Gradient} = \frac{2.79 - 3}{10 - 0} = -0.021$$
$$\log_{10} V = -0.021t + 3 \Rightarrow V = 10^{-0.021t + 3} = 1000 \times (10^{-0.021})^t$$
- **[M1]** Gradient.
- **[A1]** $a = 1000$.
- **[A1]** $b = 10^{-0.021} \approx 0.953$.

#### **Part (c)**
**Step 29: Evaluate**
$$t = 24 \Rightarrow V = 1000(0.953)^{24} \approx 315$$
- **[M1]** Substitute $t=24$.
- **[A1]** Compare to 320, model is reliable.

### **Examiner Report 11**

This question proved to be quite challenging for a number of candidates. It is worth noting that there were a number of candidates who did not pay attention to the labelling on the $y$-axis and therefore were unable to score any marks. Part (b) was discriminating, requiring some understanding of the relationship between $V = ab^t$ and the linear graph.

---
topic: "Differentiation"
subtopic: "Differentiating trigonometric functions"
---
### **Question 12**

$y = \sin x$
where $x$ is measured in radians.
Use differentiation from first principles to show that
$$\frac{dy}{dx} = \cos x$$
You may
• use without proof the formula for $\sin(A \pm B)$
• assume that as $h \to 0$, $\frac{\sin h}{h} \to 1$ and $\frac{\cos h - 1}{h} \to 0$ **(5)**

### **Mark Scheme 12**

**Step 30: First principles**
$$\frac{dy}{dx} = \lim_{h \to 0} \frac{\sin(x+h) - \sin x}{h}$$
$$\frac{\sin x \cos h + \cos x \sin h - \sin x}{h}$$
$$\sin x \left( \frac{\cos h - 1}{h} \right) + \cos x \left( \frac{\sin h}{h} \right)$$
$$\sin x (0) + \cos x (1) = \cos x$$
- **[M1]** Correct limit definition.
- **[M1]** Use addition formula.
- **[M1]** Group terms.
- **[A1]** Apply limits.
- **[A1]** Final result.

### **Examiner Report 12**

This differentiation from first principles question was similar to the one that appeared in 2018 and candidates demonstrated a much greater confidence with the way in which they should approach this topic. The limits were provided in the question and the accessibility was evident. Most candidates were able to obtain the first 3 marks of this question.

---
topic: "Modelling with quadratics"
subtopic: "Modelling with quadratics"
---
### **Question 13**

On a roller coaster ride, passengers travel in carriages around a track.
The vertical height, $H$ m, of a carriage above the ground, $t$ seconds after the carriage starts the first circuit, is modelled by the equation
$$H = a - b(t - 20)^2$$
where $a$ and $b$ are positive constants.

**(a)** Find a complete equation for the model. **(3)**

**(b)** Use the model to determine the height of the carriage above the ground when $t = 40$ **(1)**

In an alternative model, the vertical height, $H$ m, of a carriage above the ground, $t$ seconds after the carriage starts the first circuit, is given by
$$H = 29 \cos(9t + \alpha)^\circ + \beta \quad 0 \leqslant \alpha < 360^\circ$$

**(c)** Find a complete equation for the alternative model. **(2)**

**(d)** give a reason why the alternative model would be more appropriate. **(1)**

### **Mark Scheme 13**

#### **Part (a)**
**Step 31: Model**
Max height 60 at $t=20 \Rightarrow a=60$.
Start $t=0, H=2 \Rightarrow 2 = 60 - b(0-20)^2 \Rightarrow 400b = 58 \Rightarrow b = 0.145$.
- **[M1]** $a=60$.
- **[M1]** Substitute $(0,2)$.
- **[A1]** $H = 60 - 0.145(t-20)^2$.

#### **Part (b)**
**Step 32: Evaluate**
$t=40 \Rightarrow H = 60 - 0.145(20)^2 = 2$.
- **[B1]** 2m.

#### **Part (c)**
**Step 33: Trig model**
Amplitude 29, Max 60, Min $60-58=2 \Rightarrow \beta = 31$.
- **[M1]** $\beta = 31$.
- **[A1]** $H = 29 \cos(9t + \alpha)^\circ + 31$.

#### **Part (d)**
**Step 34: Reason**
Periodic/continuous.
- **[B1]** Correct.

### **Examiner Report 13**

A significant number of candidates found this question very challenging. Those who were able to work with both the quadratic and trigonometric models confidently were able to score highly. In part (a), there were two common approaches that led to successfully scoring full marks. In part (d), the most popular correct answers involved an identification of the cyclic nature of the trigonometric function.

---
topic: "Algebraic Methods"
subtopic: "Mathematical proof"
---
### **Question 14**

Prove, using algebra, that
$$(n + 1)^3 - n^3$$
is odd for all $n \in \mathbb{N}$ **(4)**

### **Mark Scheme 14**

**Step 35: Expand**
$$(n^3 + 3n^2 + 3n + 1) - n^3 = 3n^2 + 3n + 1$$
$$= 3n(n + 1) + 1$$
Since $n(n+1)$ is always even, $3 \times (\text{even}) + 1$ is odd.
- **[M1]** Expand.
- **[M1]** Factorise.
- **[A1]** Logical argument.
- **[A1]** Conclusion.

### **Examiner Report 14**

Candidates were required to prove the statement. It was pleasing to see the majority of candidates were able to make more progress on this type of question this time. A large number of candidates tried to start correctly by substituting $n=2k$ and $n=2k+1$. The other common approach was from an attempt of algebra with logic.

---
topic: "Numerical Methods"
subtopic: "Iteration"
---
### **Question 15**

A curve has equation $y = f(x)$, where
$$f(x) = \frac{7xe^x}{e^{3x} - 2} \quad x > \ln \sqrt[3]{2}$$

**(a)** Show that
$$f'(x) = \frac{7e^x(e^{3x}(2 - x) + Ax + B)}{2(e^{3x} - 2)^2}$$
where $A$ and $B$ are constants to be found. **(5)**

**(b)** Hence show that the $x$ coordinates of the turning points of the curve are solutions of the equation
$$x = \frac{2e^{3x} - 4}{e^{3x} + 4}$$ **(2)**

**(c)** Draw a staircase diagram to show that the iteration formula starting with $x_1 = 1$ can be used to find an approximation for $\beta$ **(1)**

**(d)** Use the iteration formula with $x_1 = 1$, to find, to 3 decimal places,
(i) the value of $x_2$
(ii) the value of $\beta$ **(3)**

**(e)** Using a suitable interval and a suitable function that should be stated, show that $\alpha = 0.432$ to 3 decimal places. **(2)**

### **Mark Scheme 15**

#### **Part (a)**
**Step 36: Quotient rule**
$$u = 7xe^x, u' = 7e^x + 7xe^x$$
$$v = e^{3x} - 2, v' = 3e^{3x}$$
- **[M1]** Quotient rule.
- **[A1]** Correct expression.
- **[A1]** Simplify to required form.

#### **Part (b)**
**Step 37: Turning points**
$f'(x) = 0 \Rightarrow e^{3x}(2-x) + Ax + B = 0$.
- **[M1]** Set $f'(x)=0$.
- **[A1]** Rearrange.

#### **Part (d)**
**Step 38: Iterate**
$x_2 = \frac{2e^3 - 4}{e^3 + 4} \approx 1.502$.
- **[M1]** Substitute.
- **[A1]** 1.502.
- **[A1]** $\beta \approx 1.968$.

#### **Part (e)**
**Step 39: Interval**
$g(x) = x - \frac{2e^{3x} - 4}{e^{3x} + 4}$. $g(0.4315) < 0, g(0.4325) > 0$.
- **[M1]** Sign change.
- **[A1]** Conclusion.

### **Examiner Report 15**

This question brought together a variety of topics and was appropriately placed at the end of the paper. This was very good at discriminating between candidates at the higher end. In part (a) a significant proportion of candidates understood that they needed to use the product rule. Overall, whilst this question was demanding, there were some very impressive solutions demonstrating an excellent grasp of calculus, strong algebraic skills, and the ability to provide a rigorous argument.
