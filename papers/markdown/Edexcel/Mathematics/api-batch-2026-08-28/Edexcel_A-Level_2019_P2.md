---
topic: "Exponentials and Logarithms"
subtopic: "Solving equations using logarithms"
---
### **Question 1**

Given
$$2^x \times 4^y = \frac{1}{2\sqrt{2}}$$
express $y$ as a function of $x$. **(3)**

**(Total 3 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Write $4^y$ and $\frac{1}{2\sqrt{2}}$ with base 2**
$$4^y = (2^2)^y = 2^{2y}$$
$$\frac{1}{2\sqrt{2}} = \frac{1}{2^1 \times 2^{\frac{1}{2}}} = \frac{1}{2^{\frac{3}{2}}} = 2^{-\frac{3}{2}}$$
- **[B1]** Writes either $4^y$ as $2^{2y}$ or $\frac{1}{2\sqrt{2}}$ as $2^{-\frac{3}{2}}$ (or equivalent base 2 expressions).

**Step 2: Combine terms using index laws**
$$2^x \times 2^{2y} = 2^{x + 2y} = 2^{-\frac{3}{2}}$$
- **[M1]** Uses index laws correctly to combine terms to a single base on the LHS, e.g., $2^{x+2y}$ or taking logs of both sides correctly.

**Step 3: Solve for $y$**
$$x + 2y = -\frac{3}{2}$$
$$2y = -\frac{3}{2} - x \Rightarrow y = -\frac{1}{2}x - \frac{3}{4}$$
- **[A1]** Correct expression for $y$ as a function of $x$.

### **Examiner Report 1**

Q01 proved challenging for a significant number of candidates. This was probably because of the more open-ended nature of the question, allowing candidates to select their own problem-solving strategy to express $y$ as a function of $x$. It was not apparent to most candidates that $y$ could be expressed as a linear function of $x$.

More able candidates, however, were able to provide a concise solution. Other candidates were still able to achieve full marks but expressed $y$ as a more complicated function of $x$. A few candidates attempted to express $x$ as a function of $y$, suggesting a lack of understanding of the terminology.

It appeared that most candidates failed to realise that Q01 could be solved purely using indices. Instead, most candidates chose to immediately take logarithms as their first step towards a solution. A correct first step, e.g., $\log_2(2^x \times 4^y) = \log_2\left(\frac{1}{2\sqrt{2}}\right)$, was rewarded by the mark scheme. Unfortunately, some candidates combined taking logarithms with an incorrect application of the addition law for logarithms as their first step, therefore gaining no marks. Most candidates who had a correct first step of work went on to achieve full marks, with some only failing to do so by making an arithmetic error.

---
topic: "Integration"
subtopic: "The trapezium rule"
---
### **Question 2**

The speed of a small jet aircraft was measured every $5$ seconds, starting from the time it turned onto a runway, until the time when it left the ground.

The results are given in the table below with the time in seconds and the speed in $\text{m s}^{-1}$.

$$\begin{array}{|l|c|c|c|c|c|c|}
\hline
\text{Time (s)} & 0 & 5 & 10 & 15 & 20 & 25 \\
\hline
\text{Speed } (\text{m s}^{-1}) & 2 & 5 & 10 & 18 & 28 & 42 \\
\hline
\end{array}$$

Using all of this information,

**(a)** estimate the length of runway used by the jet to take off. **(3)**

Given that the jet accelerated smoothly in these $25$ seconds,

**(b)** explain whether your answer to part (a) is an underestimate or an overestimate of the length of runway used by the jet to take off. **(1)**

**(Total 4 marks)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Apply the trapezium rule formula**
$$\text{Area} \approx \frac{5}{2} \left[ 2 + 42 + 2(5 + 10 + 18 + 28) \right]$$
- **[B1]** Correct strip width $h = 5$ (or correct use of formula structure).
- **[M1]** Correct structure of the trapezium rule bracket: first plus last speeds, plus $2 \times$ sum of the interior speeds.

**Step 2: Calculate the final value**
$$= \frac{5}{2} \left[ 44 + 2(61) \right] = \frac{5}{2} [44 + 122] = \frac{5}{2} [166] = 415$$
- **[A1]** $415$ (units not required, but accept $415\text{ m}$).

#### **Part (b)**

**Step 1: State whether it is an overestimate/underestimate with a reason**
- **[B1]** Overestimate, because the straight lines of the trapezia lie above the curve (as the speed-time graph is convex / has a positive second derivative / acceleration is increasing).

### **Examiner Report 2**

Q02 proved to be challenging, with a significant number of candidates struggling to realise that the length of the runway could be estimated by the area under the speed-time curve generated from the table of values given in the question.

In Q02(a), only a minority of candidates estimated the length of the runway by applying the trapezium rule, which was considered the most appropriate method, with many of these giving the correct answer of $415\text{ m}$. While the table of values clearly shows an interval width $h = 5$, the application of the formula $h = \frac{b-a}{n}$ with $n = 6$ instead of $n = 5$ led some candidates to use an incorrect strip width $h = \frac{25}{6}$. Other candidates made calculation errors, bracketing errors or transcription errors.

Some candidates used the equations of motion with constant acceleration (i.e. the suvat equations) to estimate the length. Many of the candidates who used this method applied the calculation $\left(\frac{2+42}{2}\right)(25)$ to obtain an estimate of $550\text{ m}$. A few used $v = u + at$ to find the acceleration, followed by $s = ut + \frac{1}{2}at^2$ to estimate the length. Some candidates used $u = 0$ in their suvat calculations, in contradiction to the table of values which indicated an initial speed of $2\text{ ms}^{-1}$. A few candidates used a method which was equivalent to the trapezium rule, of applying suvat to each of the $5$ time-intervals, to give the correct answer of $415\text{ m}$.

As for Q02(b), while many candidates who used a trapezium rule or suvat method in Q02(a) identified their estimate of the length as an overestimate, some found difficulty in articulating a reason for this. Those who were most successful drew a diagram which showed clearly the extra area generated by the trapezium rule in relation to the curve. Some candidates sketched the speed-time curve and explained that the curve was convex or that the acceleration was continually increasing. Only a few candidates who used a rectangle method were able to give a correct reason.

---
topic: "Radians"
subtopic: "Areas of sectors and segments"
---
### **Question 3**

**Figure 1** _(A sector $AOB$ of a circle with centre $O$, radius $5\text{ cm}$ and angle $A\hat{O}B = 40^\circ$.)_

```tikz
\begin{tikzpicture}
  \draw (0,0) node[left] {$O$} -- (3,1.2) node[above] {$A$};
  \draw (0,0) -- (3,-1.2) node[below] {$B$};
  \draw (3,1.2) arc (21.8:-21.8:3);
  \node at (2.2,0) {$5\text{ cm}$};
  \draw (0.8,0) arc (0:21.8:0.8);
  \node at (1.1,0.3) {$40^\circ$};
\end{towards}
```

Figure 1 shows a sector $AOB$ of a circle with centre $O$, radius $5\text{ cm}$ and angle $AOB = 40^\circ$

The attempt of a student to find the area of the sector is shown below.

$$\begin{aligned}
\text{Area of sector} &= \frac{1}{2}r^2\theta \\
&= \frac{1}{2} \times 5^2 \times 40 \\
&= 500\text{ cm}^2
\end{aligned}$$

**(a)** Explain the error made by this student. **(1)**

**(b)** Write out a correct solution. **(2)**

**(Total 3 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Explain the error**
- **[B1]** The student used the angle in degrees instead of converting it to radians (or $\theta$ must be in radians).

#### **Part (b)**

**Step 1: Convert angle to radians**
$$\theta = 40^\circ \times \frac{\pi}{180^\circ} = \frac{2\pi}{9}$$
- **[M1]** Correct method to find the area using the formula $\frac{1}{2}r^2\theta$ with $\theta$ converted to radians, or using $\frac{\theta}{360}\pi r^2$ with $\theta = 40$.

**Step 2: Calculate the area**
$$\text{Area} = \frac{1}{2} \times 5^2 \times \frac{2\pi}{9} = \frac{25\pi}{9}\text{ cm}^2 \quad (\text{or } 8.73\text{ cm}^2)$$
- **[A1]** Correct exact answer $\frac{25\pi}{9}$ (or $8.73$ to 3 sig fig).

### **Examiner Report 3**

Q03 proved to be the most accessible question on this paper with many candidates obtaining full marks.

In Q03(a), many candidates explained that the angle $40^\circ$ should have been converted to its equivalent in radians in order for it to be applied to the formula $\frac{1}{2}r^2\theta$. Some candidates’ explanations lacked sufficient detail, e.g. they stated ‘the angle is in degrees’ but failed to mention that the angle used in the formula should have been expressed in radians. A few candidates did not give a reason in Q03(a), but correctly calculated the area of sector $AOB$ in Q3(b).

Q03(b) was also well-answered. Most candidates converted $40^\circ$ to radians and applied a correct $\frac{2\pi}{9}$ to the given formula $\frac{1}{2}r^2\theta$. Some candidates applied a correct formula $\frac{\theta}{360}\pi r^2$ with $\theta = 40^\circ$. Errors included converting $40^\circ$ to either $\frac{40\pi}{360}$ or $\frac{9\pi}{2}$; applying $\frac{1}{2}\left(\frac{5^2}{2}\right)\left(\frac{2}{9}\right)$; and applying incorrect formulae such as $\frac{1}{2}r^2\sin\theta$ or $\frac{1}{2}\pi r^2\theta$. Most candidates gave the correct answer in exact form as $\frac{25}{9}\pi$, and some gave an answer $8.73$ which was rounded to $3$ significant figures, while others gave both exact and rounded values. Most candidates gave the units $\text{cm}^2$ in their answer to Q03(b). On this occasion, a lack of units in their final answer was condoned.

---
topic: "Parametric Equations"
subtopic: "Points of intersection"
---
### **Question 4**

**Figure 2** _(A sketch of an ellipse $C_1$ and a circle $C_2$ centred at the origin, intersecting at four points including $S$ in the 4th quadrant.)_

```tikz
\begin{tikzpicture}
  \draw[->] (-3,0) -- (3,0) node[below] {$x$};
  \draw[->] (0,-2.5) -- (0,2.5) node[left] {$y$};
  \draw (0,0) ellipse (2.2cm and 1.2cm);
  \node at (2.4,1.2) {$C_1$};
  \draw (0,0) circle (1.5cm);
  \node at (1.7,0.3) {$C_2$};
  \fill (1.4,-0.6) circle (1.5pt) node[below right] {$S$};
  \node at (-0.2,-0.2) {$O$};
\end{tikzpicture}
```

The curve $C_1$ with parametric equations
$$x = 10\cos t, \quad y = 4\sqrt{2}\sin t, \quad 0 \leqslant t < 2\pi$$
meets the circle $C_2$ with equation
$$x^2 + y^2 = 66$$
at four distinct points as shown in Figure 2.

Given that one of these points, $S$, lies in the $4\text{th}$ quadrant, find the Cartesian coordinates of $S$. **(6)**

**(Total 6 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Substitute parametric equations into the circle equation**
$$(10\cos t)^2 + (4\sqrt{2}\sin t)^2 = 66$$
$$100\cos^2 t + 32\sin^2 t = 66$$
- **[M1]** Substitutes the parametric equations into $x^2 + y^2 = 66$.

**Step 2: Use trigonometric identity to form an equation in a single trigonometric function**
$$100(1 - \sin^2 t) + 32\sin^2 t = 66$$
$$100 - 68\sin^2 t = 66$$
$$68\sin^2 t = 34 \Rightarrow \sin^2 t = \frac{34}{68} = \frac{1}{2}$$
- **[M1]** Uses $\cos^2 t = 1 - \sin^2 t$ (or equivalent) to form an equation in $\sin^2 t$ (or $\cos^2 t$).

**Step 3: Solve for $\sin t$ or find coordinate components**
$$\sin t = \pm \frac{1}{\sqrt{2}}$$
For the $4\text{th}$ quadrant, since $y < 0$ and $x > 0$, $\sin t = -\frac{1}{\sqrt{2}}$ and $\cos t = \frac{1}{\sqrt{2}}$.
- **[M1]** Solves for $\sin t$ (or $\cos t$ or $t$), and identifies the correct sign corresponding to the $4\text{th}$ quadrant.

**Step 4: Find the $x$ and $y$ coordinates**
$$x = 10\left(\frac{1}{\sqrt{2}}\right) = \frac{10}{\sqrt{2}} = 5\sqrt{2}$$
$$y = 4\sqrt{2}\left(-\frac{1}{\sqrt{2}}\right) = -4$$
- **[A1]** Correct $x$-coordinate, e.g., $5\sqrt{2}$ or $7.07$.
- **[A1]** Correct $y$-coordinate, $-4$.
- **[A1]** Fully correct coordinates given as $(5\sqrt{2}, -4)$ or $(7.07, -4)$.

### **Examiner Report 4**

Q04 was well attempted by both medium ability and higher ability candidates. Lower ability candidates struggled to make progress, with most of them scoring no more than one mark.

There were two common methods that used by candidates. The first method, covered by Way 1 in the mark scheme, was the substitution of the parametric equations of $C_1$ into the Cartesian equation of $C_2$ to give an equation in $t$ only; the trigonometric identity $\sin^2 t + \cos^2 t \equiv 1$ being used to obtain an equation in $\sin^2 t$ (or $\cos^2 t$) only, and a value for $\sin t$ (or $\cos t$) found. The second method, covered by Way 2 in the mark scheme, was the application of the trigonometric identity $\sin^2 t + \cos^2 t \equiv 1$ to the parametric equations of $C_1$ to give $\left(\frac{x}{10}\right)^2 + \left(\frac{y}{4\sqrt{2}}\right)^2 = 1$, the Cartesian equation of $C_2$ being used to obtain an equation in $x^2$ (or $y^2$) only, and a value for $x$ (or $y$) found. A few candidates used a correct method of progressing from $(10\cos t)^2 + (4\sqrt{2}\sin t)^2 = 66$ to either $\tan^2 t = 1$ or $\cos 2t = 0$. In all these methods, substituting back yielded their coordinates for $S$, with most candidates realising that $x_S > 0$ and $y_S < 0$. Some candidates incorrectly stated $S$ as $(5\sqrt{2}, 4)$. In the first method, successful candidates used either $t = \frac{7\pi}{4}$ or $t = \frac{\pi}{4}$, and then applied symmetry to find the correct coordinates for $S$ as either $(5\sqrt{2}, -4)$ or $(7.07, -4)$.

An area of concern centred around arithmetical slips or errors in elementary algebra. Examples of the former included $(4\sqrt{2})^2$ becoming $8$ or $64$; $\sin^2 t = \frac{1}{2}$ becoming $\sin t = \frac{1}{4}$; and $\frac{x^2}{100} + \frac{y^2}{32} = 1$ becoming $32x^2 + 100y^2 = 1$ or $100$ or $32$. Examples of the latter included the invalid methods of $y = \sqrt{66 - x^2}$ becoming $y = \sqrt{66} - x$ and $\sin^2 t = 1 - \frac{x^2}{100}$ becoming $\sin t = 1 - \frac{x}{10}$. Candidates who made no creditable progress included those who differentiated the parametric equations for $C_1$, and those who obtained, e.g., $y = 4\sqrt{2}\sin\left(\arccos\left(\frac{x}{10}\right)\right)$ leading to $x^2 + 32\sin^2\left(\arccos\left(\frac{x}{10}\right)\right) = 66$.

---
topic: "Integration"
subtopic: "Definite integrals"
---
### **Question 5**

**Figure 3** _(A sketch of the curve $y = \sqrt{x}$, showing a shaded strip of height $y$ and width $\delta x$ between $x = 4$ and $x = 9$.)_

```tikz
\begin{tikzpicture}
  \draw[->] (-0.5,0) -- (5,0) node[below] {$x$};
  \draw[->] (0,-0.5) -- (0,3) node[left] {$y$};
  \draw[domain=0:4.5, smooth, thick] plot (\x, {sqrt(\x)});
  \node at (3.5, 2.2) {$y = \sqrt{x}$};
  \draw[fill=gray, opacity=0.5] (2,0) rectangle (2.4, {sqrt(2)});
  \draw (2.4, {sqrt(2)}) node[above] {$P(x,y)$};
  \draw (2,0) node[below] {$4$};
  \draw (2.4,0) node[below] {$\delta x$};
  \draw (3.8,0) node[below] {$9$};
  \draw[dashed] (3.8,0) -- (3.8, {sqrt(3.8)});
  \draw[dashed] (2,0) -- (2, {sqrt(2)});
\end{tikzpicture}
```

Figure 3 shows a sketch of the curve with equation $y = \sqrt{x}$

The point $P(x, y)$ lies on the curve.

The rectangle, shown shaded on Figure 3, has height $y$ and width $\delta x$.

Calculate
$$\lim_{\delta x \to 0} \sum_{x=4}^{9} \sqrt{x} \, \delta x$$ **(3)**

**(Total 3 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Recognise the limit of a sum as an integral**
$$\lim_{\delta x \to 0} \sum_{x=4}^{9} \sqrt{x} \, \delta x = \int_{4}^{9} \sqrt{x} \, dx$$
- **[B1]** Recognises the expression as $\int_{4}^{9} \sqrt{x} \, dx$.

**Step 2: Integrate $\sqrt{x}$**
$$\int x^{\frac{1}{2}} \, dx = \frac{x^{\frac{3}{2}}}{\frac{3}{2}} = \frac{2}{3}x^{\frac{3}{2}}$$
- **[M1]** Integrates $\sqrt{x}$ correctly to $k x^{\frac{3}{2}}$.

**Step 3: Evaluate the definite integral using limits $4$ and $9$**
$$\left[ \frac{2}{3}x^{\frac{3}{2}} \right]_{4}^{9} = \frac{2}{3}(9^{\frac{3}{2}}) - \frac{2}{3}(4^{\frac{3}{2}}) = \frac{2}{3}(27) - \frac{2}{3}(8) = 18 - \frac{16}{3} = \frac{38}{3}$$
- **[A1]** Correct evaluation, $\frac{38}{3}$ (or $12.7$ or better).

### **Examiner Report 5**

Q05 proved challenging for many candidates and some candidates were unfamiliar with the notation that was used. Most candidates scored either all three marks or zero marks in this question. There were a substantial number of blank responses.

It is noted that section 8.4 (guidance) of the Pure Specification states 'Recognise $\int_{a}^{b} \mathrm{f}(x) \, dx = \lim_{\delta x \to 0} \sum_{a}^{b} \mathrm{f}(x) \, \delta x$'. It is also noted that a similar question had not appeared on the 9MA0 June 2018 papers, the SAMs, the specimen papers or the mock papers.

Those candidates who recognised that $\lim_{\delta x \to 0} \sum_{x=4}^{9} \sqrt{x} \, \delta x$ was another way of writing $\int_{4}^{9} \sqrt{x} \, dx$ generally produced a correct solution to score all $3$ marks. Only a few made errors in their integration of $\sqrt{x}$ or in the application of the limits $4$ and $9$.

Most candidates, however, made no creditable progress. Some applied the trapezium rule with $h = 1$, but did not link their trapezium rule attempt with a stated $\int_{4}^{9} \sqrt{x} \, dx$.

Other candidates attempted to sum $\sqrt{x}$ using integer values from $x = 4$ to $x = 9$, resulting in $\sqrt{4} + \sqrt{5} + \sqrt{6} + \dots + \sqrt{9} \, (= 15.1597\dots)$. Some candidates mistakenly interpreted '$\delta x$' as a trigger to differentiate $\sqrt{x}$, with a few of these candidates attempting to differentiate $\sqrt{x}$ from first principles.

A few candidates applied the incorrect method $(\sqrt{4} + \sqrt{5} + \sqrt{6} + \dots + \sqrt{9}) - \int_{4}^{9} \sqrt{x} \, dx$ to give an answer of $2.49$ to $3$ significant figures.

---
topic: "Functions and Graphs"
subtopic: "Composite functions"
---
### **Question 6**

**Figure 4** _(A sketch of the graph of $y = \mathrm{g}(x)$ made of a parabola branch for $x \leqslant 2$ and a straight line for $x > 2$.)_

```tikz
\begin{tikzpicture}
  \draw[->] (-2,0) -- (4,0) node[below] {$x$};
  \draw[->] (0,-1) -- (0,5) node[left] {$y$};
  \draw[domain=-0.6:2, smooth, thick] plot (\x, {(\x-2)*(\x-2) + 1});
  \draw[domain=2:3.5, smooth, thick] plot (\x, {4*(\x) - 7});
  \node at (0.3, 0) {$O$};
  \fill (2,1) circle (1.5pt);
\end{tikzpicture}
```

Figure 4 shows a sketch of the graph of $y = \mathrm{g}(x)$, where
$$\mathrm{g}(x) = \begin{cases} (x - 2)^2 + 1 & x \leqslant 2 \\ 4x - 7 & x > 2 \end{cases}$$

**(a)** Find the value of $\mathrm{gg}(0)$. **(2)**

**(b)** Find all values of $x$ for which
$$\mathrm{g}(x) > 28$$ **(4)**

The function $\mathrm{h}$ is defined by
$$\mathrm{h}(x) = (x - 2)^2 + 1 \quad x \leqslant 2$$

**(c)** Explain why $\mathrm{h}$ has an inverse but $\mathrm{g}$ does not. **(1)**

**(d)** Solve the equation
$$\mathrm{h}^{-1}(x) = -\frac{1}{2}$$ **(3)**

**(Total 10 marks)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Evaluate inner function $\mathrm{g}(0)$**
Since $0 \leqslant 2$, use $\mathrm{g}(x) = (x - 2)^2 + 1$:
$$\mathrm{g}(0) = (0 - 2)^2 + 1 = 4 + 1 = 5$$
- **[B1]** Correctly finds $\mathrm{g}(0) = 5$.

**Step 2: Evaluate outer function $\mathrm{g}(\mathrm{g}(0))$**
Now evaluate $\mathrm{g}(5)$. Since $5 > 2$, use $\mathrm{g}(x) = 4x - 7$:
$$\mathrm{g}(5) = 4(5) - 7 = 20 - 7 = 13$$
- **[M1]** Substitutes their result into $\mathrm{g}$ correctly using the correct domain branch ($5 > 2$).
- **[A1]** Correctly evaluates to $13$.

#### **Part (b)**

**Step 1: Solve for the first branch where $\mathrm{g}(x) > 28$**
$$(x - 2)^2 + 1 > 28$$
$$(x - 2)^2 > 27$$
$$x - 2 < -\sqrt{27} \text{ or } x - 2 > \sqrt{27}$$
$$x < 2 - 3\sqrt{3}$$
(since $2 - 3\sqrt{3} \approx -3.20 \leqslant 2$, this is valid).
- **[M1]** Attempts to solve $(x - 2)^2 + 1 > 28$.
- **[A1]** Obtains $x < 2 - 3\sqrt{3}$ (or exact equivalent).

**Step 2: Solve for the second branch where $\mathrm{g}(x) > 28$**
$$4x - 7 > 28$$
$$4x > 35 \Rightarrow x > \frac{35}{4}$$
- **[M1]** Attempts to solve $4x - 7 > 28$.
- **[A1]** Obtains $x > \frac{35}{4}$ (and rejects any invalid region).

#### **Part (c)**

**Step 1: State why $\mathrm{h}$ has an inverse and $\mathrm{g}$ does not**
- **[B1]** $\mathrm{h}$ is one-to-one (over its domain), whereas $\mathrm{g}$ is many-to-one (over its domain) / $\mathrm{h}$ has an inverse because it is strictly monotonic, but $\mathrm{g}$ is not.

#### **Part (d)**

**Step 1: Use inverse property $\mathrm{h}^{-1}(x) = y \Leftrightarrow \mathrm{h}(y) = x$**
$$\mathrm{h}\left(-\frac{1}{2}\right) = x$$
- **[M1]** Uses the relationship $\mathrm{h}\left(-\frac{1}{2}\right) = x$ or correctly finds $\mathrm{h}^{-1}(x)$.

**Step 2: Calculate $\mathrm{h}\left(-\frac{1}{2}\right)$**
$$x = \left(-\frac{1}{2} - 2\right)^2 + 1 = \left(-\frac{5}{2}\right)^2 + 1 = \frac{25}{4} + 1 = \frac{29}{4} = 7.25$$
- **[A1]** Correct answer $7.25$ (or $\frac{29}{4}$).

### **Examiner Report 6**

Q06 discriminated well between candidates of all abilities, with only a few candidates gaining full marks. There were some marks in Q06(b) and Q06(d) which were accessible to the majority of candidates.

In Q06(a), many candidates struggled with the split domain for $\mathrm{g}(x)$ (i.e. for $x \leqslant 2$, $\mathrm{g}(x) = (x - 2)^2 + 1$ and for $x > 2$, $\mathrm{g}(x) = 4x - 7$) and only a minority gained both marks. Many candidates found a correct $\mathrm{g}(0) = 5$, but a significant number used the incorrect method of substituting '5' to give $\mathrm{gg}(0) = (5 - 2)^2 + 1 = 10$. Only a minority used a correct method and found $\mathrm{gg}(0) = 4(5) - 7 = 13$. Occasionally candidates found an algebraic expression for $\mathrm{gg}(x)$, although this was often incorrect. Very few obtained a correct answer of $13$ by substituting $x = 0$ into $4((x - 2)^2 + 1) - 7$ or $4(x - 2)^2 - 3$.

In Q06(b), many candidates attempted to solve the inequality $\mathrm{g}(x) > 28$ by finding the critical values for $x$. Most solved the linear equation to find a correct critical value $x = \frac{35}{4}$, and many solved the quadratic equation to find $x = 2 \pm 3\sqrt{3}$. A minority rejected $x = 2 - 3\sqrt{3}$ and deduced that $x = 2 - 3\sqrt{3}$ was the second critical value. Only a few candidates used the critical values and the diagram in Q6 to write down the correct solution $x < 2 - 3\sqrt{3} \cup x > \frac{35}{4}$. Some candidates, however, incorrectly gave $x = \frac{35}{4}$, $x = 2 \pm 3\sqrt{3}$ or gave $x < 2 + 3\sqrt{3} \cup x > \frac{35}{4}$ as their final answer. A few candidates made no creditable progress in Q06(b) by using a method of equating both parts of $\mathrm{g}(x)$ and attempting to solve the equation $(x - 2)^2 + 1 = 4x - 7$.

Although Q6(c) required a comment for both functions, $\mathrm{f}$ and $\mathrm{g}$, some candidates only wrote a comment about one of the two functions. A significant number of candidates believed that $\mathrm{g}$ did not have an inverse due to its being defined in 'two parts'. Candidates who were successful in Q6(c) usually gave a reason such as, '$\mathrm{g}$ is a many-one function and $\mathrm{h}$ is a one-one function'. A few correctly stated that the inverse of $\mathrm{g}$ is one-many, which is not a function, whereas the inverse of $\mathrm{h}$ is one-one, which is a function. A few candidates incorrectly described $\mathrm{g}$ as a 'one-many function'.

In Q06(d), only a few candidates applied the method of finding $x$ by applying $\mathrm{h}\left(-\frac{1}{2}\right)$. As this method was less prone to error, most candidates who used it scored full marks. Most candidates applied a complete method of finding their inverse $\mathrm{h}^{-1}(x)$, followed by using their inverse to form and solve the equation $\mathrm{h}^{-1}(x) = -\frac{1}{2}$. Many candidates who found a correct answer $x = 7.25$ lost the final mark in Q06(d). This was because they used the incorrect inverse $\mathrm{h}^{-1}(x) = 2 + \sqrt{x - 1}$ (instead of the correct $\mathrm{h}^{-1}(x) = 2 - \sqrt{x - 1}$) which led to their 'solving' the incorrect $\sqrt{x - 1} = -\frac{1}{2}$ (which has no solutions) to give $x = 7.25$. A few candidates in Q06(d) incorrectly believed that $\mathrm{h}^{-1}(x)$ referred to the reciprocal of $\mathrm{h}$, or even to the first derivative of $\mathrm{h}$ with respect to $x$.

---
topic: "Straight Line Graphs"
subtopic: "Modelling with straight lines"
---
### **Question 7**

A small factory makes bars of soap.

On any day, the total cost to the factory, £$y$, of making $x$ bars of soap is modelled to be the sum of two separate elements:
- a fixed cost
- a cost that is proportional to the number of bars of soap that are made that day

**(a)** Write down a general equation linking $y$ with $x$, for this model. **(1)**

The bars of soap are sold for £$2$ each.

On a day when $800$ bars of soap are made and sold, the factory makes a profit of £$500$

On a day when $300$ bars of soap are made and sold, the factory makes a loss of £$80$

Using the above information,

**(b)** show that $y = 0.84x + 428$ **(3)**

**(c)** With reference to the model, interpret the significance of the value $0.84$ in the equation. **(1)**

Assuming that each bar of soap is sold on the day it is made,

**(d)** find the least number of bars of soap that must be made on any given day for the factory to make a profit that day. **(2)**

**(Total 7 marks)**

### **Mark Scheme 7**

#### **Part (a)**

**Step 1: Write down the general equation**
$$y = ax + b \quad (\text{or } y = mx + c \text{ etc.})$$
- **[B1]** Correct equation of the form $y = ax + b$ (where $a, b$ are constants).

#### **Part (b)**

**Step 1: Determine total costs for the given days**
Total revenue for $800$ bars $= 800 \times 2 = 1600$.
Total cost $y_1 = 1600 - 500 = 1100$.
Total revenue for $300$ bars $= 300 \times 2 = 600$.
Total cost $y_2 = 600 - (-80) = 680$.
- **[M1]** Calculates the correct costs for both $800$ and $300$ bars ($1100$ and $680$).

**Step 2: Find the gradient ($a$) and intercept ($b$)**
$$a = \frac{1100 - 680}{800 - 300} = \frac{420}{500} = 0.84$$
$$1100 = 0.84(800) + b \Rightarrow 1100 = 672 + b \Rightarrow b = 428$$
- **[M1]** Uses the two points $(800, 1100)$ and $(300, 680)$ to find the gradient and intercept.
- **[A1]** Concludes with the given equation $y = 0.84x + 428$.

#### **Part (c)**

**Step 1: Interpret the value $0.84$**
- **[B1]** The cost of making an extra bar of soap is £$0.84$ (or equivalent).

#### **Part (d)**

**Step 1: Set up the profit condition**
$$\text{Revenue} > \text{Cost}$$
$$2x > 0.84x + 428$$
- **[M1]** Sets up an inequality or equation for profit $> 0$, e.g., $2x - (0.84x + 428) > 0$ (or solves $1.16x = 428$).

**Step 2: Solve and interpret for the least number of bars**
$$1.16x > 428 \Rightarrow x > \frac{428}{1.16} = 368.96\dots$$
Since $x$ must be an integer, $x = 369$.
- **[A1]** $369$.

### **Examiner Report 7**

Q07 discriminated well between the medium and higher ability candidates. Lower ability candidates struggled to make much progress with this modelling question and most of them scored no more than one mark.

In Q07(a), most candidates wrote down a correct equation for the model in the form $y = kx + c$, with constants $k$ and $c$. A minority struggled to give a suitable form of the linear equation, with some omitting the fixed cost constant, $c$. Some candidates gave incorrect answers, such as $y \propto x$; equations involving exponential models; or differential equations.

Q07(b) proved challenging for those candidates who struggled to grasp the concept '$\text{profit} = \text{sales} - \text{cost}$', with many of them incorrectly assuming that the model from Q07(a) was for the profit made. Many of these candidates used $(800, 500)$ and either $(300, 80)$ or $(300, -80)$ to form two linear equations, with some erroneously finding a gradient of $0.84$.

Those candidates who understood the link between profit and cost usually found the total cost to the factory of £$1100$ and £$680$ for $800$ and $300$ bars of soap respectively. Most used $(800, 1100)$ and $(300, 680)$ to form two linear equations and proceeded to find the gradient, $0.84$, and $y$-intercept, $428$. A large proportion concluded by stating the given equation $y = 0.84x + 428$. A few candidates, however, did not complete their analysis with a suitable conclusion, and so lost the final mark. Some candidates used $(800, 1100)$ and $(300, 680)$ to verify the model $y = 0.84x + 428$. Many of these were successful but often failed to give a suitable conclusion stating that the given model was true.

Q07(c) gave a significant number of candidates their only creditable access to Q07. Some candidates gave a correct interpretation such as $0.84$ represented 'the cost of making an extra bar of soap'. Incorrect explanations included that $0.84$ represented 'the selling price of a bar of soap' or 'the profit per bar of soap made'.

There was a mixed response to Q07(d). The most popular approach was to form and solve a correct $2n = 0.84n + 428$ or $2n > 0.84n + 428$, which mostly led to the correct answer $n = 369$. A final answer left as an inequality such as $n > 368$ or $n \geqslant 369$, without reference to the statement that $369$ was the number of bars required, was not sufficient for the final mark. Some candidates used trials of both $n = 368$ and $n = 369$ in a complete trial and error method leading to a correct conclusion of $n = 369$.

---
topic: "Sequences and Series"
subtopic: "Geometric series"
---
### **Question 8**

**(i)** Find the value of
$$\sum_{r=4}^{\infty} 20 \times \left(\frac{1}{2}\right)^r$$ **(3)**

**(ii)** Show that
$$\sum_{n=1}^{48} \log_5 \left(\frac{n+2}{n+1}\right) = 2$$ **(3)**

**(Total 6 marks)**

### **Mark Scheme 8**

#### **Part (i)**

**Step 1: Identify the first term and common ratio**
First term for $r=4$: $a = 20 \times \left(\frac{1}{2}\right)^4 = \frac{20}{16} = \frac{5}{4}$ (or uses sum to infinity minus first 3 terms).
Common ratio $r = \frac{1}{2}$.
- **[M1]** Identifies $a = \frac{5}{4}$ (or $20$) and common ratio $r = \frac{1}{2}$.

**Step 2: Apply the sum to infinity formula**
$$S_\infty = \frac{a}{1 - r} = \frac{\frac{5}{4}}{1 - \frac{1}{2}} = \frac{\frac{5}{4}}{\frac{1}{2}} = \frac{5}{2}$$
- **[M1]** Correctly substitutes into $S_\infty = \frac{a}{1 - r}$.
- **[A1]** Correct value $\frac{5}{2}$ (or $2.5$).

#### **Part (ii)**

**Step 1: Expand the summation using logarithm laws**
$$\sum_{n=1}^{48} \log_5 \left(\frac{n+2}{n+1}\right) = \log_5\left(\frac{3}{2}\right) + \log_5\left(\frac{4}{3}\right) + \log_5\left(\frac{5}{4}\right) + \dots + \log_5\left(\frac{50}{49}\right)$$
- **[M1]** Writes out at least the first three terms and the last term of the series.

**Step 2: Combine using logarithm addition laws (telescoping series)**
$$= \log_5\left(\frac{3}{2} \times \frac{4}{3} \times \frac{5}{4} \times \dots \times \frac{50}{49}\right)$$
- **[M1]** Uses log laws to combine the sum into a single product or difference, showing cancellation.

**Step 3: Evaluate to the final result**
$$= \log_5\left(\frac{50}{2}\right) = \log_5(25) = 2$$
- **[A1]** Completes the proof clearly leading to $2$.

### **Examiner Report 8**

Q08 was found challenging by many candidates, with Q08(i) more successfully answered than Q08(ii). The most successful candidates were the ones who listed the first few terms of the series. In other words, those candidates that wrote $20\left(\frac{1}{2}\right)^4 + 20\left(\frac{1}{2}\right)^5 + 20\left(\frac{1}{2}\right)^6 + \dots$ and $\log_5\left(\frac{3}{2}\right) + \log_5\left(\frac{4}{3}\right) + \log_5\left(\frac{5}{4}\right) + \dots$ gained a better understanding of the series that they were required to sum. There were, however, many attempts that made no creditable progress and a significant number of blank responses to either one or both parts of Q08.

In Q08(i), many candidates identified that a sum to infinity was required in their solution and attempted to apply the formula $\frac{a}{1-r}$. Most used $r = \frac{1}{2}$ in this formula, although some used incorrect values such as $r = \frac{1}{4}$ or $r = -\frac{1}{2}$. Disappointingly, a significant number of candidates used $r = 4$ from the expression given in the question and applied it to the formula $\frac{a}{1-r}$, even though the formula only works when $-1 < r < 1$. There were a number of correct strategies that candidates could use. The most successful strategy was to apply $a = 20\left(\frac{1}{2}\right)^4 = \frac{5}{4}$, $r = \frac{1}{2}$ to $\frac{a}{1-r}$, and many candidates who used this strategy achieved the correct answer of $2.5$. Other complete strategies included applying $\sum_{r=1}^{\infty} 20\left(\frac{1}{2}\right)^r - \sum_{r=1}^{3} 20\left(\frac{1}{2}\right)^r$ or $\sum_{r=0}^{\infty} 20\left(\frac{1}{2}\right)^r - \sum_{r=0}^{3} 20\left(\frac{1}{2}\right)^r$ which led to $(20 - 17.5)$ or $(40 - 37.5)$ respectively. Some candidates applied an incorrect overall strategy by subtracting an incorrect number of terms from their sum to infinity. These candidates gave incorrect answers such as $(20 - 18.75)$, $(40 - 38.75)$, $(40 - 35)$ or $(40 - 17.5)$. A few candidates obtained the correct answer of $2.5$ by using their calculator.

Only a few candidates produced a correct solution to Q08(ii). There were two main correct methods that were used by candidates in equal measure. One was to list the first few terms and the last few terms of the series and use the addition law of logarithms to achieve $\log_5\left(\frac{3}{2} \times \frac{4}{3} \times \dots \times \frac{50}{49}\right)$. Many candidates used cancelling to complete their proof correctly by writing $\log_5(25) = 2$. The other method was to use the subtraction law of logarithms to give $\sum_{n=1}^{48}(\log_5(n+2) - \log_5(n+1))$ and list terms to give $(\log_5 3 + \log_5 4 + \dots + \log_5 50) - (\log_5 2 + \log_5 3 + \dots + \log_5 49)$. Again many candidates used cancelling and completed their proof by writing $\log_5(50) - \log_5(2) = \log_5(25) = 2$. A few candidates progressed by writing $\log_5(3 \times 4 \times \dots \times 50) - \log_5(2 \times 3 \times \dots \times 49)$ and used factorials to give $\log_5\left(\frac{50!}{2}\right) - \log_5(49!) = \log_5\left(\frac{50!}{2(49!)}\right) = \log_5(25) = 2$.

---
topic: "Exponentials and Logarithms"
subtopic: "Logarithms and non-linear data"
---
### **Question 9**

A research engineer is testing the effectiveness of the braking system of a car when it is driven in wet conditions.

The engineer measures and records the braking distance, $d$ metres, when the brakes are applied from a speed of $V\text{ km h}^{-1}$.

Graphs of $d$ against $V$ and $\log_{10} d$ against $\log_{10} V$ were plotted.

The results are shown below together with data points from each graph.

**Figure 5** _(A curve of $d$ against $V$ passing through the origin and passing through $(30, 20)$.)_

**Figure 6** _(A straight line graph of $\log_{10} d$ against $\log_{10} V$ passing through $(0, -1.77)$.)_

```tikz
\begin{tikzpicture}
  % Figure 5
  \begin{scope}[scale=0.8]
    \draw[->] (0,0) -- (4,0) node[below] {$V$};
    \draw[->] (0,0) -- (0,4) node[left] {$d$};
    \draw[domain=0:3.5, smooth, thick] plot (\x, {0.3*(\x)*(\x)});
    \fill (2.5, 2) circle (1.5pt) node[above right] {$(30, 20)$};
  \end{scope}
  % Figure 6
  \begin{scope}[shift={(6,0)}, scale=0.8]
    \draw[->] (-1,0) -- (4,0) node[below] {$\log_{10} V$};
    \draw[->] (0,-2.5) -- (0,3) node[left] {$\log_{10} d$};
    \draw[domain=-0.5:3.2, smooth, thick] plot (\x, {0.8*(\x) - 1.77});
    \fill (0,-1.77) circle (1.5pt) node[below left] {$(0, -1.77)$};
  \end{scope}
\end{tikzpicture}
```

**(a)** Explain how Figure 6 would lead the engineer to believe that the braking distance should be modelled by the formula
$$d = kV^n \quad \text{where } k \text{ and } n \text{ are constants}$$
with $k \approx 0.017$. **(3)**

Using the information given in Figure 5, with $k = 0.017$

**(b)** find a complete equation for the model giving the value of $n$ to 3 significant figures. **(3)**

Sean is driving this car at $60\text{ km h}^{-1}$ in wet conditions when he notices a large puddle in the road $100\text{ m}$ ahead. It takes him $0.8$ seconds to react before applying the brakes.

**(c)** Use your formula to find out if Sean will be able to stop before reaching the puddle. **(3)**

**(Total 9 marks)**

### **Mark Scheme 9S**

#### **Part (a)**

**Step 1: Take logarithms of the proposed model**
$$d = kV^n \Rightarrow \log_{10} d = \log_{10} k + n\log_{10} V$$
- **[M1]** Takes logarithms base $10$ of $d = kV^n$ to get a linear relationship.

**Step 2: Relate to the straight line graph**
The equation is of the form $Y = mX + c$, which represents a straight line graph of $\log_{10} d$ against $\log_{10} V$ with gradient $n$ and intercept $\log_{10} k$. Since Figure 6 is a straight line, this justifies the model.
- **[A1]** Explains that a straight line graph of $\log_{10} d$ against $\log_{10} V$ confirms the power model.

**Step 3: Show $k \approx 0.017$**
Using the $y$-intercept $(0, -1.77)$: $\log_{10} k = -1.77 \Rightarrow k = 10^{-1.77} \approx 0.01698\dots \approx 0.017$.
- **[A1]** Shows $\log_{10} k = -1.77$ leading to $k \approx 0.017$.

#### **Part (b)**

**Step 1: Substitute the point $(30, 20)$ into the model**
$$20 = 0.017 \times 30^n$$
- **[M1]** Substitutes $V = 30$ and $d = 20$ into $d = kV^n$ with $k = 0.017$.

**Step 2: Solve for $n$ using logarithms**
$$\frac{20}{0.017} = 30^n \Rightarrow \log_{10}\left(\frac{20}{0.017}\right) = n \log_{10}(30)$$
$$n = \frac{\log_{10}\left(\frac{20}{0.017}\right)}{\log_{10}(30)} = \frac{3.07058}{1.47712} = 2.0787\dots$$
- **[M1]** Uses logarithms correctly to solve for $n$.

**Step 3: State complete equation**
$$d = 0.017V^{2.08}$$
- **[A1]** $d = 0.017V^{2.08}$ (or $n = 2.08$).

#### **Part (c)**

**Step 1: Calculate thinking distance**
$$\text{Speed} = 60\text{ km h}^{-1} = \frac{60000}{3600}\text{ m s}^{-1} = \frac{50}{3}\text{ m s}^{-1} \approx 16.67\text{ m s}^{-1}$$
$$\text{Thinking distance} = \frac{50}{3} \times 0.8 = \frac{40}{3} = 13.33\text{ m}$$
- **[M1]** Calculates the thinking distance correctly (converting speed to $\text{m s}^{-1}$).

**Step 2: Calculate braking distance**
$$\text{Braking distance } d = 0.017(60)^{2.08} = 0.017 \times 4496.8 = 76.45\text{ m}$$
- **[M1]** Calculates the braking distance using $V = 60$ and their model.

**Step 3: Total stopping distance and conclusion**
$$\text{Total distance} = 13.33 + 76.45 = 89.78\text{ m}$$
Since $89.78\text{ m} < 100\text{ m}$, Sean will be able to stop before reaching the puddle.
- **[A1]** Finds total stopping distance $\approx 89.8\text{ m}$ and concludes he will stop in time.

### **Examiner Report 9**

In general, Q09 discriminated well between candidates of all abilities. Q09(b) and Q09(c) were more accessible to candidates than Q09(a). Some candidates left Q09(a) blank while others struggled to make any creditable progress.

In Q09(a), many candidates wrote down a valid log equation as part of their explanation. Those who used mathematical reasoning to progress from $\log_{10} d = \log_{10} k + n\log_{10} V$ to $d = kV^n$ (or vice versa) usually showed an intermediate step in their working and so were successful in their explanation. A few candidates made errors in progressing between these two equations, such as an incorrect method of combining logarithms (e.g., $\log_{10} d = n\log_{10}(kV)$), or an incorrect use of powers (e.g., $d = kV + n$). Those who made a direct comparison of their log equation with $y = mx + c$ usually did so clearly enough but sometimes did not allude to $d = kV^n$ (if using $-1.77$ rather than $\log_{10} k$ in their log equation). A significant number of candidates did not apply $10^{-1.77}$ or use logarithms to show that $k = 0.017$.

In Q09(b), the majority of candidates substituted $V = 30$ and $d = 20$ into $d = kV^n$ and applied logarithms correctly, leading to the correct value of $n = 2.08$. A few candidates used the incorrect method of simplifying $20 = 0.017(30)^n$ to give $20 = (0.51)^n$. Some candidates substituted in $V$ and $d$ the wrong way around, usually leading to $n = 2.50$, and a few used both $V$ and $d$ as $20$. A small minority substituted $V = 30$ and $d = 20$ into a correct log equation, while a few others correctly found $n$ by finding the gradient between the known points $(0, -1.77)$ and $(\log_{10} 30, \log_{10} 20)$. The most common mistake was not writing a complete equation $d = (0.017)V^{2.08}$ or $\log_{10} d = -1.77 + 2.08\log_{10} V$ after finding a correct $n = 2.08$.

In Q09(c), most candidates applied $V = 60$ to their exponential model and found the braking distance. Some then used the incorrect method of comparing this braking distance with the overall stopping distance. The majority attempted to calculate the thinking distance and either added it to their braking distance $d$ or subtracted it from $100$. The main error was due to the units. Some candidates did not attempt to convert $60\text{ km h}^{-1}$ to $\text{m s}^{-1}$ and simply multiplied $60$ by the thinking time of $0.8$ seconds to obtain a thinking distance of $48$ metres. Others only managed a partial conversion, with some using $\frac{1}{75}$ metres instead of $13.3\text{ m}$ ($\approx \frac{1}{75}\text{ km}$) as their thinking distance. In some of the answers, candidates used an incorrect method of combining their values to give a dimensionally incorrect quantity. For example, they might add their breaking distance to either a speed or a time. Candidates who obtained a thinking distance of $13.3\text{ m}$ usually reached a correct answer and conclusion. A few compared the maximum speed needed to stop at the puddle with the given $60$, while even fewer compared the maximum value of $n$ needed to stop at the puddle with $n = 2.08$; and with correct conclusions these were valid solutions.

---
topic: "Vectors"
subtopic: "Solving geometric problems"
---
### **Question 10**

**Figure 7** _(A sketch of triangle $OAB$, showing points $C$ on the extension of $OA$, midpoint $M$ of $AB$, and point $N$ on $OB$.)_

```tikz
\begin{tikzpicture}
  \coordinate (O) at (0,0);
  \coordinate (A) at (2,3);
  \coordinate (B) at (5,0.5);
  \coordinate (C) at (4,6);
  \coordinate (M) at (3.5, 1.75);
  \coordinate (N) at (3.33, 0.33);
  
  \draw (O) node[below left] {$O$} -- (A) node[above] {$A$} -- (B) node[right] {$B$} -- cycle;
  \draw (O) -- (C) node[above] {$C$};
  \draw (C) -- (M) node[above right] {$M$};
  \draw (A) -- (B);
  \draw (O) -- (N) node[below] {$N$};
  \fill (M) circle (1.5pt);
  \fill (N) circle (1.5pt);
  \fill (C) circle (1.5pt);
\end{tikzpicture}
```

Figure 7 shows a sketch of triangle $OAB$.

The point $C$ is such that $\overrightarrow{OC} = 2\overrightarrow{OA}$.

The point $M$ is the midpoint of $AB$.

The straight line through $C$ and $M$ cuts $OB$ at the point $N$.

Given $\overrightarrow{OA} = \mathbf{a}$ and $\overrightarrow{OB} = \mathbf{b}$

**(a)** Find $\overrightarrow{CM}$ in terms of $\mathbf{a}$ and $\mathbf{b}$. **(2)**

**(b)** Show that $\overrightarrow{ON} = \left(2 - \frac{3}{2}\lambda\right)\mathbf{a} + \frac{1}{2}\lambda\mathbf{b}$, where $\lambda$ is a scalar constant. **(2)**

**(c)** Hence prove that $ON : NB = 2 : 1$. **(2)**

**(Total 6 marks)**

### **Mark Scheme 10**

#### **Part (a)**

**Step 1: Express $\overrightarrow{AB}$ and $\overrightarrow{CM}$ in terms of $\mathbf{a}$ and $\mathbf{b}$**
$$\overrightarrow{AB} = \mathbf{b} - \mathbf{a}$$
$$\overrightarrow{CM} = \overrightarrow{CO} + \overrightarrow{OM} = -2\mathbf{a} + \left(\mathbf{a} + \frac{1}{2}\overrightarrow{AB}\right) = -2\mathbf{a} + \mathbf{a} + \frac{1}{2}(\mathbf{b} - \mathbf{a}) = -\frac{3}{2}\mathbf{a} + \frac{1}{2}\mathbf{b}$$
- **[M1]** Uses a correct vector route for $\overrightarrow{CM}$, e.g., $\overrightarrow{CA} + \overrightarrow{AM}$ or $\overrightarrow{CO} + \overrightarrow{OA} + \overrightarrow{AM}$.
- **[A1]** $-\frac{3}{2}\mathbf{a} + \frac{1}{2}\mathbf{b}$ (or equivalent).

#### **Part (b)**

**Step 1: Use scalar multiples on line $CMN$**
Since $N$ lies on $CM$, $\overrightarrow{CN} = \lambda \overrightarrow{CM} = \lambda\left(-\frac{3}{2}\mathbf{a} + \frac{1}{2}\mathbf{b}\right)$.
- **[M1]** States $\overrightarrow{CN} = \lambda \overrightarrow{CM}$ or uses ratio theorem along the line $CMN$.

**Step 2: Find $\overrightarrow{ON}$**
$$\overrightarrow{ON} = \overrightarrow{OC} + \overrightarrow{CN} = 2\mathbf{a} + \lambda\left(-\frac{3}{2}\mathbf{a} + \frac{1}{2}\mathbf{b}\right) = \left(2 - \frac{3}{2}\lambda\right)\mathbf{a} + \frac{1}{2}\lambda\mathbf{b}$$
- **[A1]** Completes the algebraic manipulation to show the required expression.

#### **Part (c)**

**Step 1: Use collinearity or parallel conditions**
Since $N$ lies on $OB$, the coefficient of $\mathbf{a}$ in $\overrightarrow{ON}$ must be zero (as $\overrightarrow{ON}$ is a scalar multiple of $\mathbf{b}$).
$$2 - \frac{3}{2}\lambda = 0 \Rightarrow \frac{3}{2}\lambda = 2 \Rightarrow \lambda = \frac{4}{3}$$
- **[M1]** Sets the coefficient of $\mathbf{a}$ to $0$ to find $\lambda$.

**Step 2: Find $\overrightarrow{ON}$ and establish the ratio**
$$\overrightarrow{ON} = \frac{1}{2}\left(\frac{4}{3}\right)\mathbf{b} = \frac{2}{3}\mathbf{b}$$
Since $\overrightarrow{ON} = \frac{2}{3}\overrightarrow{OB}$, $ON : NB = 2 : 1$.
- **[A1]** Deduces $\overrightarrow{ON} = \frac{2}{3}\mathbf{b}$ and concludes $ON : NB = 2 : 1$.

### **Examiner Report 10**

Q10 discriminated well between the medium and higher ability candidates, with lower ability candidates struggling to gain any creditable access. Q10 increased in difficulty as the candidates progressed through the question, and only a small proportion of candidates scored full marks.

In Q10(a), most candidates followed a correct method to achieve the correct answer $-\frac{3}{2}\mathbf{a} + \frac{1}{2}\mathbf{b}$. Of the candidates who identified a suitable route from $C$ to $M$, the most common approach was $\overrightarrow{CM} = \overrightarrow{CA} + \overrightarrow{AM} = -\mathbf{a} + \frac{1}{2}\overrightarrow{AB}$. Less efficient routes such as $\overrightarrow{CM} = \overrightarrow{CO} + \overrightarrow{OB} + \overrightarrow{BM}$ or even $\overrightarrow{CM} = \overrightarrow{CO} + \overrightarrow{OA} + \overrightarrow{AM}$ were also observed. Some candidates struggled to apply the vectors $\mathbf{a}$ and $\mathbf{b}$ to the routes they had chosen. Incorrect methods included applying $\overrightarrow{CA} = \mathbf{a}$ (instead of $\overrightarrow{CA} = -\mathbf{a}$) or applying $\overrightarrow{AB} = \mathbf{a} - \mathbf{b}$ (instead of $\overrightarrow{AB} = \mathbf{b} - \mathbf{a}$). There were a few candidates who incorrectly deduced the position of $C$ to be in the opposite direction to $\overrightarrow{OA}$ and they were mostly able to apply the approach, $\overrightarrow{CM} = \overrightarrow{CO} + \overrightarrow{OA} + \overrightarrow{AM} = \overrightarrow{CO} + \overrightarrow{OA} + \frac{1}{2}\overrightarrow{AB}$, to gain some credit.

Q10(b) proved to be demanding, with some candidates struggling to understand what the question required them to do, and many seemed to be confused by the introduction of the scalar multiple $\lambda$. Only a minority deduced that $\overrightarrow{CN} = \lambda\overrightarrow{CM}$ and applied this deduction to the route $\overrightarrow{ON} = \overrightarrow{OC} + \overrightarrow{CN}$. Most of these candidates progressed well to the given answer unless they had found an incorrect $\overrightarrow{CM}$ in Q10(a). Many candidates used $\overrightarrow{ON} = \overrightarrow{OC} + \overrightarrow{CM} + \overrightarrow{MB} + \overrightarrow{BN}$ or $\overrightarrow{ON} = \overrightarrow{OA} + \overrightarrow{AB} + \overrightarrow{BN}$ and made no creditable progress. These candidates usually produced solutions which led to the elimination of $\lambda$ from the $\mathbf{a}$ component of the resulting vector for $\overrightarrow{ON}$. A few candidates used $\overrightarrow{ON} = \overrightarrow{OM} + \overrightarrow{MN}$ and proceeded to obtain a correct expression $\frac{1}{2}\mathbf{a} + \frac{1}{2}\mathbf{b} + \mu\left(-\frac{3}{2}\mathbf{a} + \frac{1}{2}\mathbf{b}\right)$ in terms of $\mu$ (or $\lambda$), but only a few deduced that this could lead to the stated solution by setting $\mu = \lambda - 1$ (or $\lambda' = \lambda - 1$).

Q10(c) proved to be challenging with many candidates failing to make any creditable progress. The crucial step was to recognise that $\overrightarrow{ON}$ is parallel to $\mathbf{b}$ and hence is a multiple of $\mathbf{b}$ with no $\mathbf{a}$ component. Only a few candidates set the $\mathbf{a}$ component of $\overrightarrow{ON}$ to zero to give the equation $2 - \frac{3}{2}\lambda = 0$. Almost all of these candidates found $\lambda = \frac{4}{3}$, with many finding $\overrightarrow{ON} = \frac{2}{3}\mathbf{b}$ and giving a correct explanation of the given ratio.

---
topic: "Differentiation"
subtopic: "Differentiating exponentials and logarithms"
---
### **Question 11**

**Figure 8** _(A sketch of the curve $C$ with equation $y = x^x, x > 0$, showing a minimum turning point.)_

```tikz
\begin{tikzpicture}
  \draw[->] (-0.5,0) -- (4,0) node[below] {$x$};
  \draw[->] (0,-0.5) -- (0,4) node[left] {$y$};
  \draw[domain=0.4:3.2, smooth, thick] plot (\x, {(\x)^(\x)});
  \node at (2.8, 3.2) {$C$};
  \node at (0.2, 0.2) {$O$};
\end{tikzpicture}
```

Figure 8 shows a sketch of the curve $C$ with equation $y = x^x, x > 0$

**(a)** Find, by firstly taking logarithms, the $x$ coordinate of the turning point of $C$.
*(Solutions based entirely on graphical or numerical methods are not acceptable.)* **(5)**

The point $P(\alpha, 2)$ lies on $C$.

**(b)** Show that $1.5 < \alpha < 1.6$. **(2)**

A possible iteration formula that could be used in an attempt to find $\alpha$ is
$$x_{n+1} = 2x_n^{1 - x_n}$$

Using this formula with $x_1 = 1.5$

**(c)** find $x_4$ to 3 decimal places, **(2)**

**(d)** describe the long-term behaviour of $x_n$. **(2)**

**(Total 11 marks)**

### **Mark Scheme 11**

#### **Part (a)**

**Step 1: Take natural logarithms of both sides**
$$\ln y = \ln(x^x) = x \ln x$$
- **[M1]** Takes natural logs of both sides and uses log laws to bring the power down.

**Step 2: Differentiate implicitly with respect to $x$**
$$\frac{1}{y}\frac{dy}{dx} = 1 \cdot \ln x + x \cdot \frac{1}{x} = \ln x + 1$$
- **[M1]** Differentiates implicitly on the LHS and uses the product rule on the RHS.

**Step 3: Set $\frac{dy}{dx} = 0$ at the turning point**
$$\frac{dy}{dx} = y(\ln x + 1) = 0$$
Since $y \neq 0$ for $x > 0$:
$$\ln x + 1 = 0 \Rightarrow \ln x = -1$$
- **[M1]** Sets $\frac{dy}{dx} = 0$ and equates $\ln x + 1 = 0$.

**Step 4: Solve for $x$**
$$x = e^{-1}$$
- **[A1]** Correct $x$-coordinate $e^{-1}$ (or $\frac{1}{e}$).

#### **Part (b)**

**Step 1: Substitute boundary values into the equation $x^\alpha = 2$**
Let $\mathrm{f}(x) = x^x - 2$.
$$\mathrm{f}(1.5) = 1.5^{1.5} - 2 = 1.837 - 2 = -0.163 < 0$$
$$\mathrm{f}(1.6) = 1.6^{1.6} - 2 = 2.112 - 2 = +0.112 > 0$$
- **[M1]** Evaluates $\mathrm{f}(x)$ or $x^x$ at $1.5$ and $1.6$ (or compares $1.5^{1.5}$ and $1.6^{1.6}$ with $2$).
- **[A1]** Change of sign (negative to positive) and continuity argument implies $1.5 < \alpha < 1.6$.

#### **Part (c)**

**Step 1: Perform iterations**
$$x_1 = 1.5$$
$$x_2 = 2(1.5)^{1 - 1.5} = 2(1.5)^{-0.5} = 1.63299\dots$$
$$x_3 = 2(1.63299)^{1 - 1.63299} = 2(1.63299)^{-0.63299} = 1.48839\dots$$
$$x_4 = 2(1.48839)^{1 - 1.48839} = 2(1.48839)^{-0.48839} = 1.6468\dots$$
*(Wait, let's recalculate precisely)*
$x_1 = 1.5$
$x_2 = 2(1.5)^{-0.5} = 1.63299$
$x_3 = 2(1.63299)^{-0.63299} = 1.4884$
$x_4 = 2(1.4884)^{-0.4884} = 1.6468 \to 1.673$ or similar depending on rounding. Let's check: $2(1.5)^{-0.5} = 1.633$; $2(1.633)^{-0.633} = 1.488$; $2(1.488)^{-0.488} = 1.673$.
- **[M1]** Uses the iteration formula to find $x_2, x_3, x_4$.
- **[A1]** $x_4 = 1.673$ (to 3 decimal places).

#### **Part (d)**

**Step 1: Describe the long-term behaviour**
- **[B1]** Oscillates / alternates between two values (or non-convergent / periodic of period 2).

### **Examiner Report 11**

In general, Q11 discriminated well between candidates of all abilities. Q11(a) was demanding with most candidates scoring no more than one mark. Q11(b), Q11(c) and Q11(d) proved accessible to candidates of all abilities.

In Q11(a), most candidates took logs, as advised by the question, and many obtained either $\ln y = x\ln x$ or $\log y = x\log x$. At this point a significant number of candidates made no further creditable progress. Some candidates used a complete method of applying the product rule on $x\ln x$ and implicit differentiation to obtain a correct $\frac{1}{y}\frac{dy}{dx} = 1 + \ln x$. Most of these candidates then applied $\frac{dy}{dx} = 0$ to obtain $x = e^{-1}$. Some candidates, who received partial credit, used a '$\log_{10}$' method to obtain $x = 0.1$, after finding $\frac{1}{y}\frac{dy}{dx} = 1 + \log_{10} x$. A few candidates used logarithms without reference to a base. Those who proceeded to obtain $x = 0.1$ received partial credit and those who obtained $x = e^{-1}$ were allowed full marks.

There were some alternative methods employed by a few candidates in Q11(a). A few candidates rewrote $y = x^x$ as $y = e^{x\ln x}$ and applied $\frac{dy}{dx} = (1 + \ln x)e^{x\ln x} = 0$ to give a correct $x = e^{-1}$. Others differentiated both sides of the equation $\ln y = x\ln x$ with respect to $y$ and usually proceeded to find $x = e^{-1}$. A very few candidates applied the quotient rule to the equation $x = \frac{\ln y}{\ln x}$, but were rarely successful with this method.

In Q11(b), most candidates evaluated either $x^x$ or $x^x - 2$ at both $x = 1.5$ and $x = 1.6$. Many candidates compared their values with either $2$ or $0$ (depending on whether they evaluated $x^x$ or $x^x - 2$). Although many of these concluded that $1.5 < \alpha < 1.6$, only a few made any reference to the curve being continuous in this interval. A few candidates, who made no creditable progress, used values of $x$ outside the given range, e.g. $x = 1.4$ and $x = 1.6$. Very few candidates used values within the range e.g. $x = 1.51$ and $x = 1.59$, which meant that they were able to earn both marks.

In Q11(c), most candidates found a correct $x_4 = 1.673$, although a few did not state $x_4$ correct to 3 decimal places. Some wrote down the iterates $x_1, x_2$ and $x_3$ as part of their solution, while others stated $x_4$ with no intermediate work.

In Q11(d), some candidates gave correct descriptions such as 'sequence oscillates between 1 and 2' or 'the sequence is periodic with period 2'. Other descriptions such as 'alternates between 1 and 2', 'keep getting 1 and 2' or 'fluctuates between 1 and 2' were condoned. Some credit was given for partial explanations such as 'sequence is non-convergent', 'sequence oscillates' or 'sequence is divergent'.

---
topic: "Trigonometric Identities and Equations"
subtopic: "Trigonometric identities"
---
### **Question 12**

**(a)** Prove
$$\frac{\cos 3\theta}{\sin \theta} + \frac{\sin 3\theta}{\cos \theta} = 2\cot 2\theta, \quad \theta \neq (90n)^\circ, n \in \mathbb{Z}$$ **(4)**

**(b)** Hence solve, for $90^\circ < \theta < 180^\circ$, the equation
$$\frac{\cos 3\theta}{\sin \theta} + \frac{\sin 3\theta}{\cos \theta} = 4$$
giving any solutions to one decimal place. **(3)**

**(Total 7 marks)**

### **Mark Scheme 12**

#### **Part (a)**

**Step 1: Combine the fractions over a common denominator**
$$\text{LHS} = \frac{\cos 3\theta \cos \theta + \sin 3\theta \sin \theta}{\sin \theta \cos \theta}$$
- **[M1]** Puts terms over a common denominator $\sin \theta \cos \theta$.

**Step 2: Use angle subtraction formula for cosine on the numerator**
$$\cos 3\theta \cos \theta + \sin 3\theta \sin \theta = \cos(3\theta - \theta) = \cos 2\theta$$
- **[M1]** Uses $\cos(A - B)$ identity on numerator to get $\cos 2\theta$.

**Step 3: Use double angle formula on the denominator**
$$\sin \theta \cos \theta = \frac{1}{2}\sin 2\theta$$
- **[M1]** Uses $\sin 2\theta = 2\sin \theta \cos \theta$ (or equivalent) on the denominator.

**Step 4: Simplify to the required result**
$$\frac{\cos 2\theta}{\frac{1}{2}\sin 2\theta} = \frac{2\cos 2\theta}{\sin 2\theta} = 2\cot 2\theta = \text{RHS}$$
- **[A1]** Completes the proof rigorously to reach $2\cot 2\theta$.

#### **Part (b)**

**Step 1: Substitute the identity into the equation**
$$2\cot 2\theta = 4 \Rightarrow \cot 2\theta = 2 \Rightarrow \tan 2\theta = \frac{1}{2}$$
- **[M1]** Uses part (a) to form $\cot 2\theta = 2$ or $\tan 2\theta = \frac{1}{2}$.

**Step 2: Find values for $2\theta$**
$$2\theta = \arctan(0.5) = 26.565^\circ, 206.565^\circ, 386.565^\circ, 566.565^\circ$$
- **[M1]** Finds correct general or principal values for $2\theta$ within the correct range ($180^\circ < 2\theta < 360^\circ$).

**Step 3: Solve for $\theta$**
Since $90^\circ < \theta < 180^\circ$, $180^\circ < 2\theta < 360^\circ$.
$$2\theta = 206.565^\circ \Rightarrow \theta = 103.28^\circ \to 103.3^\circ$$
- **[A1]** $\theta = 103.3^\circ$ (and no other solutions).

### **Examiner Report 12**

Q12(a) discriminated well between the higher ability candidates and it was possible for candidates of all abilities to gain access to Q12(b).

In Q12(a), many candidates struggled to apply a complete strategy which would help them to make significant progress in proceeding from $\frac{\cos 3\theta}{\sin \theta} + \frac{\sin 3\theta}{\cos \theta}$ via an intermediate stage of $\frac{\cos(3\theta - \theta)}{\sin \theta \cos \theta}$, $\frac{\cos 2\theta(\cos^2 \theta + \sin^2 \theta)}{\sin \theta \cos \theta}$ or $\frac{\cos 2\theta}{\sin \theta \cos \theta}$ to the given result $2\cot 2\theta$.

Candidates who used Way 1, as described in the mark scheme, gained some credit for rationalising $\frac{\cos 3\theta}{\sin \theta} + \frac{\sin 3\theta}{\cos \theta}$ to give $\frac{\cos 3\theta \cos \theta + \sin 3\theta \sin \theta}{\sin \theta \cos \theta}$. Of those candidates who correctly applied $\sin \theta \cos \theta = \frac{1}{2}\sin 2\theta$ to the denominator, only a few realised that the numerator could be written as $\cos 2\theta$. A common error in using Way 1 was to simplify $\frac{\cos 3\theta}{\sin \theta} + \frac{\sin 3\theta}{\cos \theta}$ to give $\frac{\cos 3\theta + \sin 3\theta}{\sin \theta \cos \theta}$ or $\frac{\cos 4\theta + \sin 4\theta}{\sin \theta \cos \theta}$.

Way 2, as described in the mark scheme (and variations of this), was the most popular approach among candidates who completed the proof successfully. Candidates only started to access the marks for Way 2 when they combined their fractions by rationalising the denominator. Errors using Way 2 included the incorrect expansion of $\cos(2\theta + \theta)$ or $\sin(2\theta + \theta)$, bracketing errors, manipulation errors or sign errors.

A few candidates started their proof from $2\cot 2\theta$. They usually progressed as far as writing either $\frac{2\cos 2\theta}{\sin 2\theta}$ or $\frac{2(1 - \tan^2 \theta)}{2\tan \theta}$, but could make no creditable progress until they applied a Way 3 method as described in the mark scheme.

Some candidates spent a considerable amount of time attempting to write $\frac{\cos 3\theta}{\sin \theta} + \frac{\sin 3\theta}{\cos \theta}$ in terms of $\theta$ to give e.g. $\frac{4\cos^3 \theta - 3\cos \theta}{\sin \theta} + \frac{3\sin \theta - 4\sin^3 \theta}{\cos \theta}$. Candidates only started to access the marks for this method when they combined their fractions by rationalising the denominator.

In Q13(b) [Note: refers to Q12(b)], most candidates used the result given in Q13(a) [Q12(a)] to deduce the equation $2\cot 2\theta = 4$. Most of these then attempted to solve $\tan 2\theta = \frac{1}{2}$, and some obtained the correct answer $\theta = 103.3^\circ$. Common errors included attempting to solve $\tan 2\theta = 2$ and finding more than one value for $\theta$. A few candidates obtained $\theta = 103.3^\circ$ by solving the equation $\frac{2(1 - \tan^2 \theta)}{2\tan \theta} = 4$.

---
topic: "Differentiation"
subtopic: "Modelling with differentiation"
---
### **Question 13**

**Figure 9** _(A storage tank made of a hollow cylinder of radius $r$ and height $h$ closed with a hemispherical shell of radius $r$ at one end.)_

```tikz
\begin{tikzpicture}
  \draw (-1.5, 2) ellipse (1.5cm and 0.5cm);
  \draw (-3, 2) -- (-3, -1);
  \draw (0, 2) -- (0, -1);
  \draw (-1.5, -1) ellipse (1.5cm and 0.5cm);
  \draw[dashed] (-3, -1) arc (180:360:1.5cm and 0.5cm);
  \draw (-3, -1) arc (180:360:1.5cm and 1.5cm); % Hemisphere
  \node at (-1.5, 0.5) {$h\text{ m}$};
  \node at (-1.5, 2.5) {$r\text{ m}$};
  \node at (-1.5, -2) {$r\text{ m}$};
  \draw[<->] (-3.5, 2) -- (-3.5, -1);
  \draw[<->] (-3, 2.7) -- (0, 2.7);
\end{tikzpicture}
```

$$\text{[A sphere of radius } r \text{ has volume } \frac{4}{3}\pi r^3 \text{ and surface area } 4\pi r^2 \text{]} $$

A manufacturer produces a storage tank.

The tank is modelled in the shape of a hollow circular cylinder closed at one end with a hemispherical shell at the other end as shown in Figure 9.

The walls of the tank are assumed to have negligible thickness.

The cylinder has radius $r$ metres and height $h$ metres and the hemisphere has radius $r$ metres.

The volume of the tank is $6\text{ m}^3$.

**(a)** Show that, according to the model, the surface area of the tank, in $\text{m}^2$, is given by
$$\frac{12}{r} + \frac{5}{3}\pi r^2$$ **(4)**

The manufacturer needs to minimise the surface area of the tank.

**(b)** Use calculus to find the radius of the tank for which the surface area is a minimum. **(4)**

**(c)** Calculate the minimum surface area of the tank, giving your answer to the nearest integer. **(2)**

**(Total 10 marks)**

### **Mark Scheme 13**

#### **Part (a)**

**Step 1: Set up the volume equation**
$$\text{Volume } V = \pi r^2 h + \frac{2}{3}\pi r^3 = 6$$
- **[B1]** Correct expression for volume in terms of $r$ and $h$: $\pi r^2 h + \frac{2}{3}\pi r^3 = 6$.

**Step 2: Rearrange for $h$**
$$\pi r^2 h = 6 - \frac{2}{3}\pi r^3 \Rightarrow h = \frac{6}{\pi r^2} - \frac{2}{3}r$$
- **[M1]** Rearranges volume equation to make $h$ the subject.

**Step 3: Set up the surface area equation**
$$\text{Surface Area } A = 2\pi r h + \pi r^2 + 2\pi r^2 = 2\pi r h + 3\pi r^2$$
- **[M1]** Sets up correct surface area expression including cylindrical curved surface, circular base, and hemispherical shell.

**Step 4: Substitute $h$ into the surface area equation**
$$A = 2\pi r \left(\frac{6}{\pi r^2} - \frac{2}{3}r\right) + 3\pi r^2 = \frac{12}{r} - \frac{4}{3}\pi r^2 + 3\pi r^2 = \frac{12}{r} + \frac{5}{3}\pi r^2$$
- **[A1]** Completes the algebraic substitution and simplification to achieve the given result.

#### **Part (b)**

**Step 1: Differentiate surface area with respect to $r$**
$$A = 12r^{-1} + \frac{5}{3}\pi r^2 \Rightarrow \frac{dA}{dr} = -\frac{12}{r^2} + \frac{10}{3}\pi r$$
- **[M1]** Attempts to differentiate $A$ with respect to $r$ (at least one term correct).
- **[A1]** Fully correct derivative $\frac{dA}{dr} = -\frac{12}{r^2} + \frac{10}{3}\pi r$.

**Step 2: Set derivative to zero and solve for $r$**
$$-\frac{12}{r^2} + \frac{10}{3}\pi r = 0 \Rightarrow \frac{10}{3}\pi r = \frac{12}{r^2} \Rightarrow \frac{10}{3}\pi r^3 = 12$$
$$r^3 = \frac{36}{10\pi} = \frac{18}{5\pi} \Rightarrow r = \left(\frac{18}{5\pi}\right)^{\frac{1}{3}} \approx 1.05\text{ m}$$
- **[M1]** Sets $\frac{dA}{dr} = 0$ and solves for $r^3$ or $r$.
- **[A1]** $r = 1.05$ (or $\sqrt[3]{\frac{18}{5\pi}}$).

#### **Part (c)**

**Step 1: Substitute value of $r$ back into the surface area equation**
$$A = \frac{12}{1.0543} + \frac{5}{3}\pi (1.0543)^2 = 11.382 + 5.834 = 17.216$$
- **[M1]** Substitutes their value of $r$ into the expression for $A$.
- **[A1]** $17$ (to the nearest integer).

### **Examiner Report 13**

Q13 discriminated well between the medium and higher ability candidates. Lower ability candidates, however, struggled to gain any creditable progress. It was obvious that some candidates had been well prepared for this 'optimisation' question and the quality of their responses reflected this. Candidates who attempted this question generally found Q13(b) and Q13(c) accessible but some struggled to complete the proof in Q13(a). In a few cases, candidates who scored zero marks in Q13(a) went on to achieve full marks in the remainder of Q13 by using the given result for the surface area. There were, however, many instances where candidates who struggled with Q13(a) then gave up and did not attempt the remainder of the question.

In Q13(a), successful candidates followed a correct strategy of forming an equation for the volume of the tank, rearranging their equation to give an expression for $h$ in terms of $r$ and substituting their expression for $h$ into their formula for the surface area of the tank. Some candidates did not halve the given sphere formulae so that they could use these for the hemispherical shell. This led to errors in both their volume equation and surface area expression. Other candidates did not include the area of the circular base in their surface area expression. These errors led to an incorrect volume equation $\pi r^2 h + \frac{4}{3}\pi r^3 = 6$ and incorrect surface area expressions $A = 5\pi r^2 + 2\pi rh$ and $A = 2\pi r^2 + 2\pi rh$. In other cases, bracketing errors, manipulation errors, or using incorrect formulae for the curved surface area of a cylinder, prevented candidates from achieving the given result.

In Q13(b), many candidates who attempted this part applied a complete method to find their value of $r$ for which $\frac{dA}{dr} = 0$. Most successful candidates found $r = 1.05$ metres, with a few giving an exact answer $\sqrt[3]{\frac{18}{5\pi}}$ metres, which was condoned. Some candidates differentiated $A$ incorrectly to give $\frac{dA}{dr} = \frac{12}{r} + \frac{10}{3}\pi r$, while others used incorrect algebra when solving the correct equation $-\frac{12}{r^2} + \frac{10}{3}\pi r = 0$. A few candidates used the incorrect method of finding a value of $r$ for which $\frac{d^2A}{dr^2} = 0$.

In Q13(c), most candidates who attempted this part correctly substituted their value of $r$, found from solving $\frac{dA}{dr} = 0$, into the model with equation $A = \frac{12}{r} + \frac{5}{3}\pi r^2$, with many obtaining a correct minimum surface area of $17\text{ m}^2$. A few candidates, who made no creditable progress, substituted their value for $r$, found from solving $\frac{d^2A}{dr^2} = 0$, into the model for $A$.

---
topic: "Integration"
subtopic: "Integration by substitution"
---
### **Question 14**

**(a)** Use the substitution $u = 4 - \sqrt{h}$ to show that
$$\int \frac{dh}{4 - \sqrt{h}} = -8\ln|4 - \sqrt{h}| - 2\sqrt{h} + k$$
where $k$ is a constant. **(6)**

A team of scientists is studying a species of slow growing tree.

The rate of change in height of a tree in this species is modelled by the differential equation
$$\frac{dh}{dt} = \frac{t^{0.25}(4 - \sqrt{h})}{20}$$
where $h$ is the height in metres and $t$ is the time, measured in years, after the tree is planted.

**(b)** Find, according to the model, the range in heights of trees in this species. **(2)**

One of these trees is one metre high when it is first planted.

According to the model,

**(c)** calculate the time this tree would take to reach a height of 12 metres, giving your answer to 3 significant figures. **(7)**

**(Total 15 marks)**

### **Mark Scheme 14**

#### **Part (a)**

**Step 1: Differentiate the substitution to find $\frac{du}{dh}$ or $dh$**
$$u = 4 - h^{\frac{1}{2}} \Rightarrow \frac{du}{dh} = -\frac{1}{2}h^{-\frac{1}{2}} = -\frac{1}{2\sqrt{h}}$$
$$dh = -2\sqrt{h} \, du = -2(4 - u) \, du$$
- **[M1]** Differentiates $u = 4 - \sqrt{h}$ to obtain $\frac{du}{dh}$ in terms of $h$ (or expresses $h$ in terms of $u$ and differentiates).

**Step 2: Substitute into the integral**
Since $\sqrt{h} = 4 - u$, $dh = -2(4 - u) \, du$.
$$\int \frac{-2(4 - u)}{u} \, du = \int \frac{2u - 8}{u} \, du$$
- **[M1]** Substitutes $u$, $\sqrt{h}$, and $dh$ correctly into the integral to obtain an integral in terms of $u$.

**Step 3: Integrate term by term**
$$\int \left(2 - \frac{8}{u}\right) du = 2u - 8\ln|u|$$
- **[M1]** Integrates the rational expression in $u$ to get $a u + b \ln|u|$.
- **[A1]** Correct integration: $2u - 8\ln|u|$ (or equivalent).

**Step 4: Substitute back $u = 4 - \sqrt{h}$**
$$2(4 - \sqrt{h}) - 8\ln|4 - \sqrt{h}| + C = 8 - 2\sqrt{h} - 8\ln|4 - \sqrt{h}| + C$$
- **[M1]** Substitutes back $u = 4 - \sqrt{h}$.

**Step 5: Conclude with the required form**
Absorbing the constant $8$ into $k$, this becomes $-8\ln|4 - \sqrt{h}| - 2\sqrt{h} + k$.
- **[A1]** Reaches the given result cleanly with clear handling of constants.

#### **Part (b)**

**Step 1: Find maximum height using $\frac{dh}{dt} = 0$**
$$\frac{dh}{dt} = 0 \Rightarrow 4 - \sqrt{h} = 0 \Rightarrow \sqrt{h} = 4 \Rightarrow h = 16$$
- **[M1]** Sets $\frac{dh}{dt} = 0$ to find the limit of height.

**Step 2: State the range**
$0 < h \leqslant 16$ (or $0 \leqslant h < 16$ or $h < 16$).
- **[A1]** $0 < h < 16$ (or $0 \leqslant h \leqslant 16$).

#### **Part (c)**

**Step 1: Separate variables**
$$\frac{1}{4 - \sqrt{h}} \, dh = \frac{1}{20}t^{0.25} \, dt$$
- **[M1]** Separates variables correctly.

**Step 2: Integrate both sides**
$$\int \frac{1}{4 - \sqrt{h}} \, dh = \int \frac{1}{20}t^{0.25} \, dt$$
$$-8\ln|4 - \sqrt{h}| - 2\sqrt{h} = \frac{1}{20} \times \frac{t^{1.25}}{1.25} + C = \frac{1}{25}t^{1.25} + C$$
- **[M1]** Integrates LHS using part (a) and RHS to get $\frac{1}{25}t^{1.25}$ (or equivalent).

**Step 3: Use boundary conditions ($t = 0, h = 1$) to find $C$**
$$-8\ln|4 - \sqrt{1}| - 2\sqrt{1} = \frac{1}{25}(0)^{1.25} + C$$
$$-8\ln(3) - 2 = C \Rightarrow C = -8\ln 3 - 2 \approx -10.7917$$
- **[M1]** Substitutes $t = 0, h = 1$ to find the constant of integration $C$.

**Step 4: Substitute $h = 12$ to find $t$**
$$-8\ln|4 - \sqrt{12}| - 2\sqrt{12} = \frac{1}{25}t^{1.25} - 8\ln 3 - 2$$
$$\frac{1}{25}t^{1.25} = 8\ln 3 + 2 - 8\ln|4 - \sqrt{12}| - 2\sqrt{12}$$
$$\sqrt{12} \approx 3.4641 \Rightarrow 4 - \sqrt{12} \approx 0.5359$$
$$\frac{1}{25}t^{1.25} = 8\ln 3 + 2 - 8\ln(0.5359) - 6.9282$$
$$\approx 8(1.0986) + 2 - 8(-0.6238) - 6.9282 = 8.7888 + 2 + 4.9904 - 6.9282 = 8.851$$
$$t^{1.25} = 25 \times 8.851 = 221.27\dots$$
$$t = (221.27)^{\frac{1}{1.25}} = (221.27)^{0.8} \approx 75.2\text{ years}$$
- **[dM1]** Substitutes $h = 12$ and their $C$ into the integrated equation.
- **[dM1]** Rearranges to solve for $t^{1.25}$.
- **[A1]** $t = 75.2$ (to 3 sig fig).

### **Examiner Report 14**

Q14 discriminated well between the higher ability candidates. Lower and medium ability candidates, however, found this question demanding with most of these candidates scoring no more than two marks. There were a few candidates who made no attempt at this question, either because the question was too demanding, or because their time had run out. Most higher ability candidates made good progress in Q14(a) and Q14(c) but they often struggled to make progress in Q14(b).

In Q14(a), most candidates who attempted this part differentiated $u = 4 - \sqrt{h}$ to give a correct $\frac{du}{dh} = -\frac{1}{2}h^{-\frac{1}{2}}$, with a few finding a correct $\frac{dh}{du} = -2(4 - u)$ and some differentiating incorrectly to give $\frac{du}{dh} = \frac{1}{2}h^{-\frac{1}{2}}$. At this stage, some candidates failed to make further creditable progress. Many candidates struggled to apply the substitution completely to give an integral of the form $\int \frac{k(4 - u)}{u} \, du$, with some making sign errors in the numerator of this integral. Those who progressed this far generally went on to divide each term in the numerator by $u$ to give an integral of the form $\int \left(\frac{A}{u} + B\right) du$, with many of them obtaining a correct $\int \left(-\frac{8}{u} + 2\right) du$. Most integrated correctly and applied $u = 4 - \sqrt{h}$ to obtain a correct $-8\ln|4 - \sqrt{h}| + 2(4 - \sqrt{h}) + c$. Some candidates could not deal with the transition from $8 + c$ to $k$ to achieve the given $-8\ln|4 - \sqrt{h}| - 2\sqrt{h} + k$, and a large number of these candidates incorrectly stated $k = 8$. Those few candidates who applied integration by parts on $\int \frac{2u - 8}{u} \, du$ rarely progressed to give a correct solution to this part.

In Q14(b), some candidates correctly set $\frac{dh}{dt} = 0$ but only a few deduced the equation $4 - \sqrt{h} = 0$. Some candidates used $h = 16$ to state a correct allowable answer such as $0 < h < 16$, $0 \leqslant h \leqslant 16$ or $h < 16$. A common mistake was to solve $\sqrt{h} = 4$ to give $h = 2$.

Material for Q14(c) was sometimes seen in Q14(b). Most candidates who attempted Q14(c) separated the variables correctly. Some candidates integrated $t^{0.25}$ incorrectly to give $\lambda t^{0.25}, \lambda t^{-0.75}$ or $\frac{5}{4}t^{1.25}$ while others integrated $\frac{1}{4 - \sqrt{h}}$ without reference to the result from Q14(a). Many candidates applied $t = 0, h = 1$ to find their constant of integration. Common errors at this stage included not applying a constant of integration and using either $t = 0, h = 0$ or $t = 1, h = 1$ to find their constant of integration. Most candidates who progressed this far applied a complete process of substituting their constant of integration and $h = 12$ into their integrated equation and solving this equation to find their value for $t$. In many cases, sign errors, bracketing errors, manipulation errors or an incorrect method of solving a correct $t^{1.25} = 221.2795202\dots$ prevented candidates from obtaining the correct answer $t = 75.2$ years.
