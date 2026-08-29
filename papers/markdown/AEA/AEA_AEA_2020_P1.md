---
topic: "Graphs and Transformations"
subtopic: "Transforming functions"
---
### **Question 1**

**Figure 1** _(A sketch of the curve $y = f(x) = 1 + \frac{4}{x(x-3)}$, showing its turning point $P$, vertical asymptotes $x = 0$ and $x = a$, and horizontal asymptote $y = 1$.)_

Figure 1 shows a sketch of the curve with equation $y = f(x)$ where

$$f(x) = 1 + \frac{4}{x(x - 3)}$$

The curve has a turning point at the point $P$, and the lines with equations $y = 1$, $x = 0$ and $x = a$ are asymptotes to the curve.

**(a)** Write down the value of $a$. **(1)**

**(b)** Find the coordinates of $P$, justifying your answer. **(4)**

**(c)** Sketch the curve with equation $y = \left| f\left(x + \frac{3}{2}\right) \right| - 1$

On your sketch, you should show the coordinates of any points of intersection with the coordinate axes, the coordinates of any turning points and the equations of any asymptotes. **(7)**

**(Total for Question 1 is 12 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: State the asymptote value**

$$a = 3$$

- **[B1]** Correct value for $a$.

#### **Part (b)**

**Step 2: Differentiate** $f(x) = 1 + \frac{4}{x^2 - 3x}$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{-4(2x - 3)}{(x^2 - 3x)^2} \quad \text{or} \quad \frac{\mathrm{d}y}{\mathrm{d}x} = -\frac{4}{3x^2} - \frac{4}{3(x - 3)^2} \quad \text{oe}$$

- **[B1]** Correct derivative expression.

**Step 3: Solve for stationary point** Set $\frac{\mathrm{d}y}{\mathrm{d}x} = 0 \Rightarrow 2x - 3 = 0$

$$x = \frac{3}{2}$$

- **[M1]** Attempts $x$-coordinate from derivative set to zero.
- **[A1]** Correct $x$-coordinate from a correct derivative.

**Step 4: Find $y$-coordinate**

$$y = 1 - \frac{4}{\frac{3}{2}\left(\frac{3}{2} - 3\right)} = 1 - \frac{16}{9} = -\frac{7}{9} \Rightarrow P \text{ is } \left(\frac{3}{2}, -\frac{7}{9}\right)$$

- **[A1]** Correct $y$-coordinate from a correct derivative.

#### **Part (c)**

**Step 5: Apply transformations to key features**

- Translation left by $\frac{3}{2}$ units brings turning point $P$ onto the $y$-axis at $\left(0, -\frac{7}{9}\right)$. Asymptotes become $x = \pm \frac{3}{2}$.
- Taking the modulus $|f(...) |$ reflects the negative central curve section above the $x$-axis, creating a $\cup$-shape central curve with minimum at $\left(0, \frac{7}{9}\right)$.
- Translating down by $1$ unit lowers the asymptote $y = 1$ to $y = 0$, and turning point moves to $\left(0, -\frac{2}{9}\right)$.

- **[M1]** Evidence of translation left / TP Minimum on $y$-axis.
- **[A1]** Correct asymptotes $x = \pm \frac{3}{2}$.
- **[M1]** Evidence of $|f(...) |$, e.g. central $\cup$-shape.
- **[B1]** Translation down by 1 unit – the $y = 0$ asymptote may be implied (but must be correct if shown).
- **[B1ft]** $y$-intercept is $\left(0, -\frac{2}{9}\right)$ follow through their $y$-coordinate of $P$.

**Step 6: Find $x$-intercepts** Solve $f(x) = -1 \Rightarrow 1 + \frac{4}{x(x - 3)} = -1 \Rightarrow x^2 - 3x + 2 = 0 \Rightarrow x = 1, 2$.

Subtracting $\frac{3}{2}$ gives the transformed $x$-intercepts:

$$x = \pm \frac{1}{2}$$

- **[M1]** Attempts $f(x) = -1$ then subtracts $\frac{3}{2}$ or equivalent work.
- **[A1]** Finds the $x$-intercepts are $\pm \frac{1}{2}$.

---
topic: "Functions and Graphs"
subtopic: "Composite functions"
---
### **Question 2**

The functions $f$ and $g$ are defined by

$$f(x) = 2\sqrt{1 - \mathrm{e}^{-x}} \quad x \in \mathbb{R}, x \ge 0$$

$$g(x) = \ln(4 - x^2) \quad x \in \mathbb{R}, -2 < x < 2$$

**(a)** **(i)** Explain why $fg$ cannot be formed as a composite function.

**(ii)** Explain why $gf$ can be formed as a composite function. **(2)**

**(b)** **(i)** Find $gf(x)$, giving the answer in the form $gf(x) = a + bx$, where $a$ and $b$ are constants.

**(ii)** State the domain and range of $gf$. **(5)**

**(c)** Sketch the graph of the function $gf$.

On your sketch, you should show the coordinates of any points where the graph meets or crosses the coordinate axes. **(2)**

The circle $C$ with centre $(0, -\ln 9)$ touches the line with equation $y = gf(x)$ at precisely one point.

**(d)** Find an equation of the circle $C$. **(3)**

**(+S1)**

**(Total for Question 2 is 13 marks)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Check ranges and domains for composite functions**

As the ranges of $f$ and $g$ are $0 \le f(x) < 2$ and $(-\infty <) g(x) \le \ln 4$:

- $fg$ cannot be formed as the range of $g$ does not lie in the domain of $f$ (e.g. $g\left(\frac{7}{4}\right) = \ln\left(\frac{15}{16}\right) < 0$, so range of $g$ is not in domain of $f$).
- $gf$ can be formed as the range of $f$ lies in the domain of $g$ ($[0, 2) \subset (-2, 2)$).

- **[B1]** Correct explanation for why $fg$ cannot be formed (acceptable reason/example).
- **[B1]** Correct explanation for why $gf$ can be formed (correct range for $f$ must be found and reason given).

#### **Part (b)**

**Step 2: Form composite function $gf(x)$**

$$gf(x) = \ln\left(4 - \left(2\sqrt{1 - \mathrm{e}^{-x}}\right)^2\right) = \ln\left(4 - 4(1 - \mathrm{e}^{-x})\right) = \ln(4\mathrm{e}^{-x}) = \ln 4 - x$$

- **[M1]** Attempts the composite $g(f(x))$.
- **[A1]** Correct composite with square evaluated.
- **[A1]** Correct form $gf(x) = \ln 4 - x$ (or $2\ln 2 - x$).

**Step 3: State domain and range**

Domain of $gf$: $x \in \mathbb{R}, x \ge 0$

Range of $gf$: $(-\infty <) gf(x) \le \ln 4$

- **[B1]** Correct domain.
- **[B1]** Correct range.

#### **Part (c)**

**Step 4: Sketch the graph of $gf$**

Graph is a straight line segment starting at $(0, \ln 4)$ with negative slope $-1$, passing through $(\ln 4, 0)$.

- **[M1]** A line consistent with their gradient and intercept from (b).
- **[A1]** Line starting at $(0, \ln 4)$ and passing through $(\ln 4, 0)$.

#### **Part (d)**

**Step 5: Find equation of circle $C$**

Line $y = \ln 4 - x$. Centre $X = (0, -\ln 9)$.

Distance from centre $X(0, -\ln 9)$ to line $x + y - \ln 4 = 0$ gives radius $r$:

$$2r^2 = (\ln 4 - (-\ln 9))^2 \Rightarrow r^2 = \frac{1}{2}(\ln 36)^2 = 2(\ln 6)^2$$

- **[M1]** A complete method to find $r$ or $r^2$ where $r$ is the radius.
- **[A1]** Correct $r^2 = 2(\ln 6)^2$ (or $r = \sqrt{2}\ln 6$).
- **[A1]** Correct equation of $C$: $x^2 + (y + \ln 9)^2 = 2(\ln 6)^2$ oe.

- **[S1]** Award S1 for a clear and concise solution that scores 10+ marks and includes the S+ point.

---
topic: "Binomial Expansion"
subtopic: "Expanding (1 + x)^n"
---
### **Question 3**

**(a)** **(i)** Write down the binomial series expansion of

$$\left(1 + \frac{2}{n}\right)^n \quad n \in \mathbb{N}, n > 2$$

in powers of $\left(\frac{2}{n}\right)$ up to and including the term in $\left(\frac{2}{n}\right)^3$

**(ii)** Hence prove that, for $n \in \mathbb{N}, n \ge 3$

$$\left(1 + \frac{2}{n}\right)^n \ge \frac{19}{3} - \frac{6}{n}$$ **(3)**

**(b)** Use the binomial series expansion of $\left(1 - \frac{x}{4}\right)^{\frac{1}{2}}$ to show that $\sqrt{3} < \frac{7}{4}$ **(4)**

$$f(x) = \left(1 + \frac{2}{x}\right)^x - 3^{\frac{x}{6}} \quad x \in \mathbb{R}, x > 0$$

Given that the function $f(x)$ is continuous and that $\sqrt[3]{3} > \frac{6}{5}$

**(c)** prove that $f(x) = 0$ has a root in the interval $[9, 10]$ **(5)**

**(+S1)**

**(Total for Question 3 is 13 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Expand binomial**

$$\left(1 + \frac{2}{n}\right)^n = 1 + n\left(\frac{2}{n}\right) + \frac{n(n - 1)}{2}\left(\frac{2}{n}\right)^2 + \frac{n(n - 1)(n - 2)}{6}\left(\frac{2}{n}\right)^3 + \dots$$

- **[B1]** Correct expansion.

**Step 2: Simplify terms**

$$\left(1 + \frac{2}{n}\right)^n = 1 + 2 + \frac{2(n - 1)}{n} + \frac{4(n^2 - 3n + 2)}{3n^2} + \dots$$

$$= 1 + 2 + 2 - \frac{2}{n} + \frac{4}{3} - \frac{4}{n} + \left(\frac{8}{3n^2} + \dots\right)$$

- **[M1]** Simplifies terms and cancels common factors.

**Step 3: Deduce inequality**

$$= \frac{19}{3} - \frac{6}{n} + \text{(non-negative terms)}$$

$$\therefore \left(1 + \frac{2}{n}\right)^n \ge \frac{19}{3} - \frac{6}{n}$$

- **[A1*]** Fully correct proof with justification that all other terms are non-negative.

#### **Part (b)**

**Step 4: Expand $\left(1 - \frac{x}{4}\right)^{\frac{1}{2}}$**

$$\left(1 - \frac{x}{4}\right)^{\frac{1}{2}} = 1 + \frac{1}{2}\left(-\frac{x}{4}\right) + \frac{\frac{1}{2}\left(-\frac{1}{2}\right)}{2}\left(-\frac{x}{4}\right)^2 + \frac{\frac{1}{2}\left(-\frac{1}{2}\right)\left(-\frac{3}{2}\right)}{6}\left(-\frac{x}{4}\right)^3 + \dots$$

- **[M1]** Expands to enough terms to deduce pattern of signs.

**Step 5: Deduce inequality for expansion**

$$\left(1 - \frac{x}{4}\right)^{\frac{1}{2}} < 1 - \frac{x}{8} \quad \text{since all remaining terms are negative.}$$

- **[B1]** Deduces inequality noting all remaining terms are negative.

**Step 6: Substitute $x = 1$**

$$\left(1 - \frac{1}{4}\right)^{\frac{1}{2}} < 1 - \frac{1}{8} \Rightarrow \left(\frac{3}{4}\right)^{\frac{1}{2}} < \frac{7}{8}$$

- **[M1]** Substitutes $x = 1$ into inequality.

**Step 7: Rearrange for $\sqrt{3}$**

$$\frac{\sqrt{3}}{2} < \frac{7}{8} \Rightarrow \sqrt{3} < \frac{7}{4}$$

- **[A1*]** Simplifies and rearranges correctly with reason given.

#### **Part (c)**

**Step 8: Evaluate $f(9)$**

Using result of (a)(ii) with $n = 9$:

$$f(9) = \left(1 + \frac{2}{9}\right)^9 - 3^{\frac{9}{6}} \ge \frac{19}{3} - \frac{6}{9} - 3^{\frac{3}{2}} = \frac{17}{3} - 3\sqrt{3}$$

- **[M1]** Uses the result of (a)(ii).

Using result of (b): $\sqrt{3} < \frac{7}{4}$:

$$f(9) \ge \frac{17}{3} - 3\times\frac{7}{4} = \frac{17}{3} - \frac{21}{4} = \frac{5}{12} > 0$$

- **[A1]** Shows $f(9) > 0$ using result of (b).

**Step 9: Evaluate $f(10)$**

$$f(10) = \left(1 + \frac{2}{10}\right)^{10} - 3^{\frac{10}{6}} = \left(\frac{6}{5}\right)^{10} - (\sqrt[3]{3})^{10}$$

- **[M1]** Expresses $f(10)$ in terms of $\frac{6}{5}$ and $\sqrt[3]{3}$.

Given $\sqrt[3]{3} > \frac{6}{5} \Rightarrow (\sqrt[3]{3})^{10} > \left(\frac{6}{5}\right)^{10}$, so $f(10) < 0$.

- **[A1]** Gives correct reason to establish $f(10) < 0$.

**Step 10: Conclusion**

$f(x)$ changes sign on $[9, 10]$, and as it is a continuous function, $f(x) = 0$ has a root in $[9, 10]$.

- **[A1]** Concludes correctly, referencing sign change and continuity.

- **[S1]** Award S1 for a clear and concise solution scoring 10+ marks.

---
topic: "Quadratics"
subtopic: "Modelling with quadratics"
---
### **Question 4**

**Figure 2** _(A sketch of the parabola $y = \frac{1}{2}x(10 - x)$ for $0 \le x \le 10$, showing rectangles inscribed under the curve with bottom edges along the $x$-axis.)_

Figure 2 shows a sketch of the parabola with equation $y = \frac{1}{2}x(10 - x), 0 \le x \le 10$

This question concerns rectangles that lie under the parabola in the first quadrant. The bottom edge of each rectangle lies along the $x$-axis and the top left vertex lies on the parabola. Some examples are shown in Figure 2.

Let the $x$ coordinate of the top left vertex be $a$.

**(a)** Explain why the width, $w$, of such a rectangle must satisfy $w \le 10 - 2a$ **(2)**

**(b)** Find the value of $a$ that gives the maximum area for such a rectangle. **(5)**

Given that the rectangle must be a square,

**(c)** find the value of $a$ that gives the maximum area for such a square. **(3)**

Given that the area of the rectangles is fixed as $36$

**(d)** find the range of possible values for $a$. **(6)**

**(+S1)**

**(Total for Question 4 is 17 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Explain maximum width requirement**

The rectangle must lie under the parabola, so maximum width occurs when the top right vertex also lies on the parabola (by symmetry about $x = 5$). The top right vertex occurs at $(10 - a, \frac{1}{2}a(10 - a))$, so width satisfies $w \le 10 - a - a = 10 - 2a$.

- **[M1]** Recognises symmetry about $x = 5$ or top right vertex position.
- **[A1*]** Convincing explanation for $w \le 10 - 2a$.

#### **Part (b)**

**Step 2: Form area function**

Maximum area occurs for full width rectangle $w = 10 - 2a$:

$$A = \frac{1}{2}a(10 - a)(10 - 2a)$$

- **[B1]** States $w = 10 - 2a$.
- **[M1]** Formulates area expression $A = \frac{1}{2}a(10 - a)(10 - 2a)$.

**Step 3: Differentiate and set to 0**

$$\frac{\mathrm{d}A}{\mathrm{d}a} = \frac{1}{2}(100 - 60a + 6a^2) = 3a^2 - 30a + 50$$

Setting $\frac{\mathrm{d}A}{\mathrm{d}a} = 0 \Rightarrow 3a^2 - 30a + 50 = 0$

- **[M1]** Differentiates $A$ with respect to $a$ and sets $\frac{\mathrm{d}A}{\mathrm{d}a} = 0$.

**Step 4: Solve quadratic**

$$3(a - 5)^2 = 25 \Rightarrow a = 5 \pm \sqrt{\frac{25}{3}} = 5 \pm \frac{5}{\sqrt{3}}$$

- **[M1]** Correct method to solve quadratic.

**Step 5: Select valid root**

Since $0 < a < 5$ for a valid rectangle in the first quadrant:

$$a = 5 - \frac{5\sqrt{3}}{3}$$

- **[A1]** Correct value of $a$ in simplified form.

#### **Part (c)**

**Step 6: Set up equation for square**

For a square, height = width $\Rightarrow \frac{1}{2}a(10 - a) = 10 - 2a$:

$$10a - a^2 = 20 - 4a \Rightarrow a^2 - 14a + 20 = 0$$

- **[M1]** Sets up correct equation height = width.

**Step 7: Solve for $a$**

$$(a - 7)^2 = 29 \Rightarrow a = 7 \pm \sqrt{29}$$

- **[dM1]** Solves quadratic by valid means.

**Step 8: Select valid root**

Since $0 < a < 5$ and $\sqrt{29} < 7$:

$$a = 7 - \sqrt{29}$$

- **[A1*]** Selects correct root with justification.

#### **Part (d)**

**Step 9: Form inequality for fixed area 36**

If area is 36, then width $w = \frac{36}{\frac{1}{2}a(10 - a)} = \frac{72}{10a - a^2}$.

Since maximum possible width is $10 - 2a$:

$$\frac{72}{10a - a^2} \le 10 - 2a$$

- **[B1]** Correctly sets up inequality for area 36.

**Step 10: Convert to cubic**

$$72 \le (10 - 2a)(10a - a^2) \Rightarrow a^3 - 15a^2 + 50a - 36 \ge 0$$

- **[M1]** Forms cubic in $a$.
- **[A1]** Correct cubic $a^3 - 15a^2 + 50a - 36 \ge 0$.

**Step 11: Factorise cubic**

Identifies $a = 1$ as root:

$$(a - 1)(a^2 - 14a + 36) \ge 0$$

- **[M1]** Factorises cubic using factor theorem.

**Step 12: Find critical values**

$$a^2 - 14a + 36 = 0 \Rightarrow a = 7 \pm \sqrt{13}$$

Critical values are $a = 1, 7 - \sqrt{13}, 7 + \sqrt{13}$.

- **[M1]** Finds critical values.

**Step 13: Determine valid range for $a$**

Since $0 < a < 5$:

$$1 \le a \le 7 - \sqrt{13}$$

- **[A1]** Correct range for $a$.

- **[S1]** Award S1 for a clear and concise solution scoring 13+ marks.

---
topic: "Trigonometry and Modelling"
subtopic: "Modelling with trigonometric functions"
---
### **Question 5**

**(a)** The box below shows a student’s attempt to prove the following identity for $a > b > 0$

$$\arctan a - \arctan b \equiv \arctan \frac{a - b}{1 + ab}$$

Let $x = \arctan a$ and $y = \arctan b$, so that $a = \tan x$ and $b = \tan y$

So $\tan(\arctan a - \arctan b) \equiv \tan(x - y)$

$$\equiv \frac{\tan x - \tan y}{1 - \tan^2(xy)}$$

$$\equiv \frac{a - b}{1 - (ab)^2}$$

$$\equiv \frac{a - ab + ab - b}{(1 - ab)(1 + ab)}$$

$$\equiv \frac{a(1 - ab) - b(1 - ab)}{(1 - ab)(1 + ab)}$$

$$\equiv \frac{a - b}{1 + ab}$$

Taking $\arctan$ of both sides gives $\arctan a - \arctan b \equiv \arctan \frac{a - b}{1 + ab}$ as required.

There are three errors in the proof where the working does not follow from the previous line.

**(i)** Describe these three errors. **(3)**

**(ii)** Write out a correct proof of the identity. **(2)**

**(b)** [In this question take $g$ to be $9.8\,\text{m}\,\text{s}^{-2}$]

**Figure 3** _(A diagram showing a ball projected from point A, 1 m above ground, towards a 6 m high vertical wall at a horizontal distance of $10\sqrt{2}$ m.)_

Balls are projected, one after another, from a point, $A$, one metre above horizontal ground. Each ball travels in a vertical plane towards a 6 metre high vertical wall of negligible thickness, which is a horizontal distance of $10\sqrt{2}$ metres from $A$.

The balls are modelled as particles and it is assumed that there is no air resistance.

Each ball is projected with an initial speed of $28\,\text{m}\,\text{s}^{-1}$ and at a random angle $\theta$ to the horizontal, where $0 < \theta < 90^\circ$

Given that a ball will pass over the wall precisely when $\alpha \le \theta \le \beta$

**(i)** find, in degrees, the angle $\beta - \alpha$ **(10)**

**(ii)** Deduce that the probability that a particular ball will pass over the wall is $\frac{2}{3}$ **(1)**

**(iii)** Hence find the probability that exactly 2 of the first 10 balls projected pass over the wall.

You should give your answer in the form $\frac{P}{Q^k}$ where $P$, $Q$ and $k$ are integers and $P$ is not a multiple of $Q$. **(3)**

**(iv)** Explain whether taking air resistance into account would increase or decrease the probability in (b)(iii). **(1)**

**(+S2)**

**(Total for Question 5 is 22 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Identify proof errors**

- Error 1: The expansion of $\tan(x - y)$ between lines 2 and 3 is incorrect; the denominator should be $1 + \tan x \tan y$.
- Error 2: Between lines 3 and 4, replacing $\tan^2(xy)$ with $(ab)^2$ incorrectly assumes $(\tan xy)^2 = (\tan x \tan y)^2$.
- Error 3: The factorisation between lines 5 and 6 is incorrect: $a - ab + ab - b \neq a(1 - ab) - b(1 - ab)$.

- **[B1]** Correct description of Error 1.
- **[B1]** Correct description of Error 2.
- **[B1]** Correct description of Error 3.

**Step 2: Correct proof**

Let $x = \arctan a$ and $y = \arctan b$. We have:

$$\tan(x - y) = \frac{\tan x - \tan y}{1 + \tan x \tan y} = \frac{a - b}{1 + ab}$$

Hence taking $\arctan$ of both sides gives:

$$x - y = \arctan a - \arctan b = \arctan\left(\frac{a - b}{1 + ab}\right) \quad \text{as required.}$$

- **[M1]** Applies correct identity for $\tan(x - y)$.
- **[A1*]** Fully correct proof.

#### **Part (b)**

**Step 3: Horizontal motion**

Horizontal motion: $s_x = 28\cos\theta \times t = 10\sqrt{2} \Rightarrow t = \frac{10\sqrt{2}}{28\cos\theta}$

- **[B1]** Correct expression for $t$.

**Step 4: Vertical motion and condition to clear wall**

Vertical motion relative to $A$: $s_y = 28\sin\theta \times t - \frac{1}{2}gt^2$

The ball clears the wall if $s_y > 5$:

- **[B1]** Correct vertical motion equation and height condition $s_y > 5$.
- **[M1]** Sets up condition for ball to clear wall.

**Step 5: Substitute $t$ into vertical equation**

$$28\sin\theta \left(\frac{10\sqrt{2}}{28\cos\theta}\right) - \frac{1}{2}(9.8)\left(\frac{10\sqrt{2}}{28\cos\theta}\right)^2 > 5$$

$$10\sqrt{2}\tan\theta - \frac{49}{14 \times 14}(1 + \tan^2\theta) > 5$$

- **[M1]** Substitutes $t$ into vertical equation.
- **[M1]** Simplifies and applies $\frac{\sin\theta}{\cos\theta} = \tan\theta$ and $\sec^2\theta = 1 + \tan^2\theta$.

**Step 6: Form quadratic in $\tan\theta$**

$$\tan^2\theta - 8\sqrt{2}\tan\theta + 5 < 0$$

- **[A1]** Correct quadratic in $\tan\theta$.

**Step 7: Solve quadratic for $\tan\theta$**

$$\tan\theta = \frac{8\sqrt{2} \pm \sqrt{(8\sqrt{2})^2 - 4(1)(5)}}{2} = 4\sqrt{2} \pm \sqrt{27} = 4\sqrt{2} \pm 3\sqrt{3}$$

- **[M1]** Solves quadratic in $\tan\theta$.
- **[A1]** Correct roots $\tan\alpha = 4\sqrt{2} - 3\sqrt{3}$ and $\tan\beta = 4\sqrt{2} + 3\sqrt{3}$.

**Step 8: Calculate $\beta - \alpha$**

$$\tan(\beta - \alpha) = \frac{\tan\beta - \tan\alpha}{1 + \tan\beta\tan\alpha} = \frac{(4\sqrt{2} + 3\sqrt{3}) - (4\sqrt{2} - 3\sqrt{3})}{1 + (4\sqrt{2} + 3\sqrt{3})(4\sqrt{2} - 3\sqrt{3})}$$

$$= \frac{6\sqrt{3}}{1 + (32 - 27)} = \frac{6\sqrt{3}}{6} = \sqrt{3} \Rightarrow \beta - \alpha = 60^\circ$$

- **[M1]** Uses compound angle formula for $\tan(\beta - \alpha)$.
- **[A1]** Obtains $\beta - \alpha = 60^\circ$.

**Step 9: Calculate probability**

$$p = \frac{60^\circ}{90^\circ} = \frac{2}{3}$$

- **[B1*]** Correct probability deduction.

**Step 10: Binomial probability**

$$X \sim \text{B}\left(10, \frac{2}{3}\right) \Rightarrow P(X = 2) = \binom{10}{2} \left(\frac{2}{3}\right)^2 \left(\frac{1}{3}\right)^8 = 45 \times \frac{4}{3^{10}} = \frac{20}{3^8}$$

- **[B1]** Identifies Binomial distribution.
- **[M1]** Applies binomial formula.
- **[A1]** Correct answer $\frac{20}{3^8}$.

**Step 11: Air resistance effect**

Air resistance decreases the range and height of trajectory, reducing the probability $p$ of clearing the wall. Consequently, the probability of obtaining only 2 successes increases.

- **[B1]** Explains correctly that probability would increase.

- **[S2]** Award S2 for a succinct, fully correct solution with S+ points.

---
topic: "Integration"
subtopic: "Integration by substitution"
---
### **Question 6**

**(a)** Given that $f$ is a function such that the integrals exist,

**(i)** use the substitution $u = a - x$ to show that

$$\int_0^a f(x)\,\mathrm{d}x = \int_0^a f(a - x)\,\mathrm{d}x$$ **(2)**

**(ii)** Hence use symmetry of $f(\sin x)$ on the interval $[0, \pi]$ to show that

$$\int_0^\pi x f(\sin x)\,\mathrm{d}x = \pi \int_0^{\frac{\pi}{2}} f(\sin x)\,\mathrm{d}x$$ **(4)**

**(b)** Use the result of (a)(i) to show that

$$\int_0^{\frac{\pi}{2}} \frac{\sin^n x}{\sin^n x + \cos^n x}\,\mathrm{d}x$$

is independent of $n$, and find the value of this integral. **(4)**

**(c)** **(i)** Prove that

$$\frac{\cos x}{1 + \cos x} \equiv 1 - \frac{1}{2}\sec^2\left(\frac{x}{2}\right)$$

**(ii)** Hence use the results from (a) to find

$$\int_0^\pi \frac{x \sin x}{1 + \sin x}\,\mathrm{d}x$$ **(7)**

**(d)** Find

$$\int_0^\pi \frac{x \sin^4 x}{\sin^4 x + \cos^4 x}\,\mathrm{d}x$$ **(4)**

**(+S2)**

**(Total for Question 6 is 23 marks)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Prove substitution formula**

$u = a - x \Rightarrow \mathrm{d}u = -\mathrm{d}x$. Limits: $x=0 \to u=a$, $x=a \to u=0$.

$$\int_0^a f(x)\,\mathrm{d}x = \int_a^0 f(a - u)(-\mathrm{d}u) = \int_0^a f(a - u)\,\mathrm{d}u = \int_0^a f(a - x)\,\mathrm{d}x$$

- **[M1]** Differentiates substitution and applies to limits.
- **[A1*]** Correct work to achieve given result.

**Step 2: Apply substitution $x \to \pi - x$**

$$\int_0^\pi x f(\sin x)\,\mathrm{d}x = \int_0^\pi (\pi - x) f(\sin(\pi - x))\,\mathrm{d}x = \int_0^\pi (\pi - x) f(\sin x)\,\mathrm{d}x$$

- **[M1]** Applies substitution.
- **[A1]** Uses $\sin(\pi - x) = \sin x$.

**Step 3: Complete symmetry proof**

$$\int_0^\pi x f(\sin x)\,\mathrm{d}x = \pi \int_0^\pi f(\sin x)\,\mathrm{d}x - \int_0^\pi x f(\sin x)\,\mathrm{d}x$$

$$2 \int_0^\pi x f(\sin x)\,\mathrm{d}x = \pi \int_0^\pi f(\sin x)\,\mathrm{d}x$$

Since $f(\sin x)$ is symmetric about $x = \frac{\pi}{2}$, $\int_0^\pi f(\sin x)\,\mathrm{d}x = 2 \int_0^{\frac{\pi}{2}} f(\sin x)\,\mathrm{d}x$:

$$\int_0^\pi x f(\sin x)\,\mathrm{d}x = \pi \int_0^{\frac{\pi}{2}} f(\sin x)\,\mathrm{d}x$$

- **[M1]** Uses symmetry of $f(\sin x)$ about $x = \frac{\pi}{2}$.
- **[A1*]** Fully correct proof.

#### **Part (b)**

**Step 4: Transform integral using (a)(i)**

Let $I = \int_0^{\frac{\pi}{2}} \frac{\sin^n x}{\sin^n x + \cos^n x}\,\mathrm{d}x$. Applying (a)(i) with $a = \frac{\pi}{2}$:

$$I = \int_0^{\frac{\pi}{2}} \frac{\sin^n\left(\frac{\pi}{2} - x\right)}{\sin^n\left(\frac{\pi}{2} - x\right) + \cos^n\left(\frac{\pi}{2} - x\right)}\,\mathrm{d}x = \int_0^{\frac{\pi}{2}} \frac{\cos^n x}{\cos^n x + \sin^n x}\,\mathrm{d}x$$

- **[M1]** Applies result from (a)(i) and uses symmetry of $\sin$ and $\cos$.

**Step 5: Add the two integrals**

$$2I = \int_0^{\frac{\pi}{2}} \left(\frac{\sin^n x + \cos^n x}{\sin^n x + \cos^n x}\right)\,\mathrm{d}x = \int_0^{\frac{\pi}{2}} 1\,\mathrm{d}x = \frac{\pi}{2}$$

- **[M1]** Realises the need to add the two integrals.
- **[M1]** Uses equality of integrals to achieve expression in $I$.

**Step 6: State conclusion**

$$I = \frac{\pi}{4}$$

for any $n$, hence the integral is independent of $n$ and its value is $\frac{\pi}{4}$.

- **[A1]** Correct value $\frac{\pi}{4}$ and explanation of independence.

#### **Part (c)**

**Step 7: Prove trigonometric identity**

$$\frac{\cos x}{1 + \cos x} = \frac{1 + \cos x - 1}{1 + \cos x} = 1 - \frac{1}{1 + \cos x}$$

- **[M1]** Splits the fraction.

Using $1 + \cos x = 2\cos^2\left(\frac{x}{2}\right)$:

$$= 1 - \frac{1}{2\cos^2\left(\frac{x}{2}\right)} = 1 - \frac{1}{2}\sec^2\left(\frac{x}{2}\right)$$

- **[B1]** Uses double angle formula to get expression in terms of $\cos\left(\frac{x}{2}\right)$.
- **[A1*]** Correct result with no errors seen.

**Step 8: Apply (a)(ii) to the integral**

$$\int_0^\pi \frac{x \sin x}{1 + \sin x}\,\mathrm{d}x = \pi \int_0^{\frac{\pi}{2}} \frac{\sin x}{1 + \sin x}\,\mathrm{d}x$$

- **[M1]** Applies result of (a)(ii).

**Step 9: Convert integrand to $\cos x$**

Using $\sin\left(\frac{\pi}{2} - x\right) = \cos x$:

$$\int_0^{\frac{\pi}{2}} \frac{\sin x}{1 + \sin x}\,\mathrm{d}x = \int_0^{\frac{\pi}{2}} \frac{\cos x}{1 + \cos x}\,\mathrm{d}x$$

- **[A1]** Achieves integral in terms of $\cos x$ only.

**Step 10: Integrate using (c)(i)**

$$\pi \int_0^{\frac{\pi}{2}} \left(1 - \frac{1}{2}\sec^2\left(\frac{x}{2}\right)\right)\,\mathrm{d}x = \pi \left[ x - \tan\left(\frac{x}{2}\right) \right]_0^{\frac{\pi}{2}} = \pi \left(\frac{\pi}{2} - 1\right) = \frac{\pi^2}{2} - \pi$$

- **[M1]** Integrates correctly using result of (c)(i).
- **[A1]** Correct result $\frac{\pi^2}{2} - \pi$ (or $\pi\left(\frac{\pi}{2} - 1\right)$).

#### **Part (d)**

**Step 11: Apply (a)(ii)**

$$\int_0^\pi \frac{x \sin^4 x}{\sin^4 x + \cos^4 x}\,\mathrm{d}x = \pi \int_0^{\frac{\pi}{2}} \frac{\sin^4 x}{\sin^4 x + \cos^4 x}\,\mathrm{d}x$$

- **[B1]** Correct integral in terms of $\sin$ only or clear explanation.
- **[M1]** Applies the result of (a)(ii).

**Step 12: Apply (b)**

From (b) with $n = 4$, $\int_0^{\frac{\pi}{2}} \frac{\sin^4 x}{\sin^4 x + \cos^4 x}\,\mathrm{d}x = \frac{\pi}{4}$:

$$\pi \times \frac{\pi}{4} = \frac{\pi^2}{4}$$

- **[M1]** Applies the result of (b).
- **[A1]** Correct result $\frac{\pi^2}{4}$.

- **[S2]** Award S2 for a succinct, fully correct solution with S+ points.
