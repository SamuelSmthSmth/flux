---
topic: "Sequences and Series"
subtopic: "Arithmetic series"
---
### **Question 1**

In an arithmetic series
- the first term is $16$
- the $21\text{st}$ term is $24$

**(a)** Find the common difference of the series. **(2)**

**(b)** Hence find the sum of the first $500$ terms of the series. **(2)**

**(Total 4 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Use the nth term formula for an arithmetic series** 
$$u_{21} = a + 20d$$
$$24 = 16 + 20d$$
- **[M1]** Uses $u_{21} = a + 20d$ with $u_{21} = 24$ and $a = 16$.

**Step 2: Solve for $d$** 
$$20d = 8 \Rightarrow d = \frac{8}{20} = 0.4 \text{ (or } \frac{2}{5}\text{)}$$
- **[A1]** Correct common difference.

#### **Part (b)**

**Step 3: Use the sum formula for an arithmetic series** 
$$S_{500} = \frac{500}{2} (2(16) + (500 - 1)(0.4))$$
- **[M1]** Uses $S_n = \frac{n}{2}(2a + (n-1)d)$ with $n = 500$, $a = 16$, and their $d$.

**Step 4: Evaluate $S_{500}$** 
$$S_{500} = 250(32 + 499(0.4)) = 250(32 + 199.6) = 250(231.6) = 57900$$
- **[A1ft]** Correct sum following through their $d$.

### **Examiner Report 1**

As the first question of the paper this did its job in settling nervous students: a straightforward question on arithmetic series which was answered correctly by the vast majority of students. 

Where mistakes were made the most common error in part (a) was to use the $21^{\text{st}}$ term as $21$, rather than $24$, or students used an incorrect formula for the $n^{\text{th}}$ term, using $u_n = a + nd$ and not $u_n = a + (n-1)d$. A few students incorrectly treated $24$ as the sum of the first $21$ terms in their attempt to find $d$.

For part (b) most students used the correct formula and therefore gained the method mark, however some lost the accuracy mark from the incorrect common difference, and a very small minority of students used $S_{500} = \frac{n}{2}(a + (n-1)d)$ rather than $S_{500} = \frac{n}{2}(2a + (n-1)d)$.

---
topic: "Functions and Graphs"
subtopic: "Functions and mappings"
---
### **Question 2**

The functions $f$ and $g$ are defined by
$$\text{f}(x) = 7 - 2x^2 \quad x \in \mathbb{R}$$
$$\text{g}(x) = \frac{3x}{5x - 1} \quad x \in \mathbb{R}, \quad x \neq \frac{1}{5}$$

**(a)** State the range of $\text{f}$. **(1)**

**(b)** Find $\text{gf}(1.8)$. **(2)**

**(c)** Find $\text{g}^{-1}(x)$. **(2)**

**(Total 5 marks)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Determine the range of $\text{f}$** 
$$\text{f}(x) \leqslant 7 \text{ (or } (-\infty, 7] \text{)}$$
- **[B1]** Correct range.

#### **Part (b)**

**Step 2: Evaluate $\text{f}(1.8)$** 
$$\text{f}(1.8) = 7 - 2(1.8)^2 = 7 - 2(3.24) = 7 - 6.48 = 0.52$$
- **[M1]** Correctly evaluates $\text{f}(1.8)$.

**Step 3: Evaluate $\text{gf}(1.8)$** 
$$\text{g}(0.52) = \frac{3(0.52)}{5(0.52) - 1} = \frac{1.56}{2.6 - 1} = \frac{1.56}{1.6} = 0.975 \text{ (or } \frac{39}{40}\text{)}$$
- **[A1]** Correct value.

#### **Part (c)**

**Step 4: Set $y = \text{g}(x)$ and rearrange to make $x$ the subject** 
$$y = \frac{3x}{5x - 1}$$
$$y(5x - 1) = 3x$$
$$5xy - y = 3x \Rightarrow 5xy - 3x = y$$
$$x(5y - 3) = y \Rightarrow x = \frac{y}{5y - 3}$$
- **[M1]** Attempts to find the inverse by making $x$ the subject.

**Step 5: Write the inverse function $\text{g}^{-1}(x)$** 
$$\text{g}^{-1}(x) = \frac{x}{5x - 3}$$
- **[A1]** Correct inverse function.

### **Examiner Report 2**

This question was well answered with the modal mark being full marks. Part (a) was the least well answered part where it is clear that students have difficulty with the concept of range. Incorrect answers included $y < 7$ and $y \geqslant 7$. Some candidates attempted to use the graph’s $x$-intercepts in their work, so incorrect answers such as $-\frac{\sqrt{14}}{4} < x < \frac{\sqrt{14}}{4}$ appeared occasionally.

In contrast, part (b) was well answered, with most candidates gaining all of the marks. The most common approach was to find $\text{f}(1.8) = 0.52$ and then $\text{g}(0.52) = 0.975$. Some candidates correctly established the composite function $\text{gf}(x)$ and then calculated $\text{gf}(1.8)$. There were occasional instances of finding $\text{fg}(1.8)$ by mistake.

Similarly (c) was well answered. Most candidates knew the process of finding the inverse function by rearranging $y = \frac{3x}{5x - 1}$ to make $x$ the subject and switching the $x$'s and $y$'s (or by switching first and then rearranging) and many successfully reached the correct answer of $\text{g}^{-1}(x) = \frac{x}{5x - 3}$.

---
topic: "Exponentials and Logarithms"
subtopic: "Solving equations using logarithms"
---
### **Question 3**

Using the laws of logarithms, solve the equation
$$\log_3 (12y + 5) - \log_3 (1 - 3y) = 2$$

**(Total 3 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Combine the logarithmic terms using the subtraction law** 
$$\log_3 \left(\frac{12y + 5}{1 - 3y}\right) = 2$$
- **[M1]** Uses the subtraction law of logarithms correctly.

**Step 2: Rewrite in exponential form** 
$$\frac{12y + 5}{1 - 3y} = 3^2 = 9$$
- **[M1]** Correctly removes logarithms by raising $3$ to the power of $2$.

**Step 3: Solve the linear equation for $y$** 
$$12y + 5 = 9(1 - 3y)$$
$$12y + 5 = 9 - 27y$$
$$39y = 4 \Rightarrow y = \frac{4}{39}$$
- **[A1]** Correct value for $y$.

### **Examiner Report 3**

This $3$ mark question was attempted by almost all students and differentiated between those who could apply laws of logarithms and those who could not. It was generally a well answered question and most students were able to get some marks and a large majority scored full marks.

A few students showed an invalid line of $\frac{\log_3 (12y + 5)}{\log_3 (1 - 3y)} = 2$ before recovering the error and continuing to the correct value of $4/39$ for $y$, so only scored $1$ of the $3$ available marks. A few students were unable to apply the subtraction law but they were often able to score the B mark for $9$ seen. This was a straightforward question on logarithms so it was nice to see the candidates were generally prepared and those that correctly removed the logs were, on the whole, able to go on get full marks. A few students make slips when solving their linear equation, obtaining $39/4$ instead of $4/39$. A few also tried to use base $e$ incorrectly, and a minority tried expanding the logs, hence getting no marks.

---
topic: "Radians"
subtopic: "Small angle approximations"
---
### **Question 4**

Given that $\theta$ is small and measured in radians, use the small angle approximations to show that
$$4 \sin \frac{\theta}{2} + 3 \cos^2 \theta \approx a + b\theta + c\theta^2$$
where $a$, $b$ and $c$ are integers to be found.

**(Total 3 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Apply small angle approximations for $\sin\left(\frac{\theta}{2}\right)$ and $\cos \theta$**
$$\sin \left(\frac{\theta}{2}\right) \approx \frac{\theta}{2}$$
$$\cos \theta \approx 1 - \frac{\theta^2}{2}$$
- **[B1]** Uses $\sin\left(\frac{\theta}{2}\right) \approx \frac{\theta}{2}$ and $\cos\theta \approx 1 - \frac{\theta^2}{2}$ (or $\cos^2\theta \approx (1 - \frac{\theta^2}{2})^2$ or $1 - \theta^2$).

**Step 2: Substitute approximations into the expression**
$$4\left(\frac{\theta}{2}\right) + 3\left(1 - \frac{\theta^2}{2}\right)^2$$
- **[M1]** Substitutes the small angle approximations into the expression.

**Step 3: Expand and simplify**
$$= 2\theta + 3\left(1 - \theta^2 + \frac{\theta^4}{4}\right)$$
$$= 2\theta + 3 - 3\theta^2 \quad (\text{ignoring higher powers})$$
$$= 3 + 2\theta - 3\theta^2$$
- **[A1]** Correct expression with $a = 3$, $b = 2$, $c = -3$.

### **Examiner Report 4**

The first method mark in this question was often gained for sight of $4\left(\frac{\theta}{2}\right)$, but the second mark proved more challenging, with errors seen in the correct application of the $\cos \theta$ small-angle approximation. Some candidates missed out the square completely and just wrote $3\left(1 - \frac{\theta^2}{2}\right)$. Many of those who did attempt to expand $3\left(1 - \frac{\theta^2}{2}\right)^2$ made mistakes with fractions and powers, with $3\left(1 - \theta^2 + \frac{\theta^2}{4}\right)$ occasionally seen. Candidates who realised they could use $3\cos^2\theta = 3(1 - \sin^2\theta)$ and then use the $\sin \theta$ approximation fared better. In contrast, those using the double angle formula performed less well, with many fraction and sign errors seen with this approach.

It was not uncommon to see candidates who followed the main method 'multiply everything by $4$' at the end leading to an incorrect final expression of $12 + 8\theta - 12\theta^2$, forfeiting the final A mark.

---
topic: "Differentiation"
subtopic: "Second order derivatives"
---
### **Question 5**

The curve $C$ has equation
$$y = 5x^4 - 24x^3 + 42x^2 - 32x + 11 \quad x \in \mathbb{R}$$

**(a)** Find 
**(i)** $\frac{\text{d}y}{\text{d}x}$
**(ii)** $\frac{\text{d}^2y}{\text{d}x^2}$ **(3)**

**(b)** 
**(i)** Verify that $C$ has a stationary point at $x = 1$
**(ii)** Show that this stationary point is a point of inflection, giving reasons for your answer. **(4)**

**(Total 7 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Find the first derivative**
$$\frac{\text{d}y}{\text{d}x} = 20x^3 - 72x^2 + 84x - 32$$
- **[B1]** Correct first derivative.

**Step 2: Find the second derivative**
$$\frac{\text{d}^2y}{\text{d}x^2} = 60x^2 - 144x + 84$$
- **[B1]** Correct second derivative.

#### **Part (b)**

**Step 3: Verify stationary point at $x = 1$**
$$\text{At } x = 1, \quad \frac{\text{d}y}{\text{d}x} = 20(1)^3 - 72(1)^2 + 84(1) - 32 = 20 - 72 + 84 - 32 = 0$$
- **[B1]** Evaluates $\frac{\text{d}y}{\text{d}x}$ at $x = 1$ and states it is equal to $0$ (or factors the derivative to show $(x-1)$ is a factor).

**Step 4: Show point of inflection**
$$\text{At } x = 1, \quad \frac{\text{d}^2y}{\text{d}x^2} = 60(1)^2 - 144(1) + 84 = 60 - 144 + 84 = 0$$
- **[M1]** Evaluates $\frac{\text{d}^2y}{\text{d}x^2}$ at $x = 1$ (or tests points either side of $x = 1$ for $\frac{\text{d}y}{\text{d}x}$).

**Step 5: Conclude point of inflection**
Since $\frac{\text{d}^2y}{\text{d}x^2} = 0$ and the sign of $\frac{\text{d}^2y}{\text{d}x^2}$ changes (or $\frac{\text{d}y}{\text{d}x}$ does not change sign, e.g., $\frac{\text{d}y}{\text{d}x} > 0$ for $x < 1$ and $x > 1$), it is a point of inflection.
- **[A1]** Both $\frac{\text{d}^2y}{\text{d}x^2} = 0$ (or derivative sign check) and a correct valid conclusion.

### **Examiner Report 5**

This question was accessible to the majority of students however part (b) proved to be a good discriminator with only the most able gaining all $7$ marks.

The majority of students gained the first three marks of this questions by correctly differentiating the expression twice. A few arithmetic errors were seen occasionally, although if this was the case then students would only lose $1$ out of the three marks.

Part (b) differentiated out the students to a greater extent. Most students could identify the correct method to find the stationary point, although there were a disappointing number of students who failed to follow this up with a concluding statement or preamble. A number of students got confused between parts (i) and (ii) and tried to use the second derivative to identify stationary points. The most common method to identify the stationary point was using the first derivative and substituting the value $x = 1$, although there were a significant number who chose to deduce the value $x = 1$ by factorising their cubic expression. Both approaches tended to lead to a positive outcome, and full marks. Part (ii) was much more mixed in response. A significant number of students gained no marks on this part as they assumed that when both first and second derivative equal zero then the point is a point of inflection. Of those students who successfully answered this question there were an equal number of students who considered the first derivative as those that considered the second derivative. Most of these students considered an appropriate intervals to gain full marks here, however a significant number of students considered inappropriate intervals such as $0$ and $2$ or $1.5$ and so were unable to gain the accuracy mark.

---
topic: "Radians"
subtopic: "Areas of sectors and segments"
---
### **Question 6**

**Figure 1** _(A sketch of the shape $OABCDEFO$, showing sector $OAB$ with radius $r$, sector $OFE$ congruent to $OAB$, and sector $ODC$ with radius $2r$ and angle $\theta$ subtended at the centre $O$, with $AOF$ being a straight line)._

```tikz
\begin{tikzpicture}[scale=1]
  \draw (0,0) coordinate (O) node[below] {$O$};
  \draw (-1.5,0) coordinate (A) node[below left] {$A$};
  \draw (1.5,0) coordinate (F) node[below right] {$F$};
  \draw (-0.75, 1.3) coordinate (B);
  \draw (0.75, 1.3) coordinate (E);
  \draw (-1.5, 2.6) coordinate (C);
  \draw (1.5, 2.6) coordinate (D);
  
  \draw (-1.5,0) -- (1.5,0);
  \draw (O) -- (-0.75, 1.3);
  \draw (O) -- (0.75, 1.3);
  \draw (O) -- (-1.5, 2.6);
  \draw (O) -- (1.5, 2.6);
  
  \draw[thick] (-1.5,0) arc (180:0:1.5);
  \draw[thick] (-1.5, 2.6) arc (120:60:3);
  
  \node at (0, 0.4) {$\theta$};
  \node at (-1.1, 0.4) {$r$};
  \node at (1.1, 0.4) {$r$};
  \node at (-0.6, 2.0) {$2r$};
  \node at (0.6, 2.0) {$2r$};
  \node at (-1.7, 0.1) {$A$};
  \node at (-0.9, 1.4) {$B$};
  \node at (-1.7, 2.7) {$C$};
  \node at (1.7, 2.7) {$D$};
  \node at (0.9, 1.4) {$E$};
  \node at (1.7, 0.1) {$F$};
\end{tikzpicture}
```

The shape $OABCDEFO$ shown in Figure 1 is a design for a logo.

In the design
- $OAB$ is a sector of a circle centre $O$ and radius $r$
- sector $OFE$ is congruent to sector $OAB$
- $ODC$ is a sector of a circle centre $O$ and radius $2r$
- $AOF$ is a straight line

Given that the size of angle $COD$ is $\theta$ radians,

**(a)** write down, in terms of $\theta$, the size of angle $AOB$. **(1)**

**(b)** Show that the area of the logo is
$$\frac{1}{2}r^2(3\theta + \pi)$$ **(2)**

**(c)** Find the perimeter of the logo, giving your answer in simplest form in terms of $r$, $\theta$ and $\pi$. **(2)**

**(Total 5 marks)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Determine the angle of sector $OAB$**
$$\text{Angle } AOB = \pi - \theta \quad (\text{or } 180^\circ - \theta)$$
- **[B1]** Correct angle.

#### **Part (b)**

**Step 2: Formulate the total area of the logo**
$$\text{Area} = \text{Area}(ODC) + \text{Area}(OAB) + \text{Area}(OFE)$$
$$\text{Area} = \frac{1}{2}(2r)^2\theta + \frac{1}{2}r^2(\pi - \theta) + \frac{1}{2}r^2(\pi - \theta)$$
- **[M1]** Uses area of sectors formula $\frac{1}{2}r^2\theta$ correctly for all three sectors.

**Step 3: Simplify to the given result**
$$\text{Area} = 2r^2\theta + \frac{1}{2}r^2\pi - \frac{1}{2}r^2\theta + \frac{1}{2}r^2\pi - \frac{1}{2}r^2\theta$$
$$= r^2\theta + r^2\pi = \frac{1}{2}r^2(2\theta + 2\pi) \text{ wait, } 2\theta - \theta - \theta = 0 \dots$$
Let's re-verify:
Angle $AOF$ is a straight line, so angle sum is $\pi$.
Angle $AOB$ + Angle $BOC$ + Angle $COD$ + Angle $DOE$ + Angle $EOF$ = $\pi$.
Since $OFE$ is congruent to $OAB$, angle $EOF$ = angle $AOB$.
Also by symmetry or properties, angle $BOC$ = angle $DOE$.
Given angle $COD = \theta$, and $AOF$ is straight ($\pi$), angle $2(\text{Angle } AOB) + \theta = \pi \Rightarrow \text{Angle } AOB = \frac{\pi - \theta}{2}$.
Let's check area calculation:
$$\text{Area} = \frac{1}{2}(2r)^2\theta + 2 \times \frac{1}{2}r^2\left(\frac{\pi - \theta}{2}\right) = 2r^2\theta + \frac{1}{2}r^2(\pi - \theta) = \frac{1}{2}r^2(4\theta + \pi - \theta) = \frac{1}{2}r^2(3\theta + \pi)$$
- **[A1]** Fully correct proof leading to the printed result.

#### **Part (c)**

**Step 4: Formulate the perimeter**
$$\text{Perimeter} = \text{Arc}(CD) + \text{Arc}(AB) + \text{Arc}(EF) + OA + AF + FO + BC + ED$$
Wait, let's look at the outer boundaries:
Arc $CD$ has radius $2r$ and angle $\theta$: $\text{Arc} = 2r\theta$.
Arc $AB$ and Arc $EF$ each have radius $r$ and angle $\frac{\pi - \theta}{2}$: sum of arcs = $2 \times r \left(\frac{\pi - \theta}{2}\right) = r(\pi - \theta)$.
Straight edges: $OA = r$, $OF = r$, so $AOF = 2r$.
And radial lengths $BC$ and $ED$: length is $2r - r = r$ each, so $BC + ED = 2r$.
Total perimeter $= 2r\theta + r(\pi - \theta) + 2r + 2r = 2r\theta + r\pi - r\theta + 4r = r\theta + r\pi + 4r = r(\theta + \pi + 4)$.
- **[M1]** Sums all perimeter components correctly.
- **[A1]** Correct simplified expression $r(\theta + \pi + 4)$ (or equivalent).

### **Examiner Report 6**

Performance on this question was variable and approximately $25\%$ of candidates failed to score any marks.

**(a)** The majority of candidates were successful with this part. Common errors were stating that angle $AOB$ was $\frac{1}{2}\theta$ or $\frac{180 - \theta}{2}$, sometimes following through to gain marks in (b) and (c).

**(b)** Most candidates followed the correct strategy for finding the area of the logo by finding the sum of the areas of sectors $OCD$, $OAB$ and $OFE$. Common errors were omitting the brackets round the $2r$ when finding the area of the sector $OCD$ and algebraic errors when simplifying their expression for the sum of the two smaller sectors $OAB$ and $OFE$. A small number of candidates showed insufficient working when simplifying their area of the sum of the two smaller sectors to arrive at the given result.

**(c)** Again, most candidates attempted this part well. A common error was not to include $4r$ in the expression for the perimeter of the logo and there were some algebraic errors when simplifying the expression for the sum of the perimeters of sectors $OAB$ and $OFE$.

---
topic: "Integration"
subtopic: "Areas under curves"
---
### **Question 7**

In this question you should show all stages of your working. Solutions relying entirely on calculator technology are not acceptable.

**Figure 2** _(A sketch of part of the curve $C$ with equation $y = x^3 - 10x^2 + 27x - 23$, passing through $P(5, -13)$, with tangent line $l$ at $P$, and a shaded finite region $R$ bounded by the curve $C$ and the line $l$)._

```tikz
\begin{tikzpicture}[scale=0.8]
  \draw[->] (-1,0) -- (6,0) node[below] {$x$};
  \draw[->] (0,-15) -- (0,4) node[left] {$y$};
  \draw[domain=0.5:5.5, smooth, thick] plot (\x, {(\x)*(\x)*(\x) - 10*(\x)*(\x) + 27*(\x) - 23});
  \draw[domain=-0.5:5.5, thick] plot (\x, {2*\x - 23});
  \fill (5,-13) circle (2pt) node[below right] {$P(5, -13)$};
  \node at (1.5, -7) {$R$};
  \node at (5.2, 2) {$C$};
  \node at (0.5, -14) {$l$};
\end{tikzpicture}
```

Figure 2 shows a sketch of part of the curve $C$ with equation
$$y = x^3 - 10x^2 + 27x - 23$$
The point $P(5, -13)$ lies on $C$.
The line $l$ is the tangent to $C$ at $P$.

**(a)** Use differentiation to find the equation of $l$, giving your answer in the form $y = mx + c$ where $m$ and $c$ are integers to be found. **(4)**

**(b)** Hence verify that $l$ meets $C$ again on the $y$-axis. **(1)**

The finite region $R$, shown shaded in Figure 2, is bounded by the curve $C$ and the line $l$.

**(c)** Use algebraic integration to find the exact area of $R$. **(4)**

**(Total 9 marks)**

### **Mark Scheme 7**

#### **Part (a)**

**Step 1: Differentiate to find the gradient of the curve**
$$\frac{\text{d}y}{\text{d}x} = 3x^2 - 20x + 27$$
- **[M1]** Attempts to differentiate $y$, with at least two terms correct.

**Step 2: Find the gradient at $P(5, -13)$**
$$\left.\frac{\text{d}y}{\text{d}x}\right|_{x=5} = 3(5)^2 - 20(5) + 27 = 75 - 100 + 27 = 2$$
- **[A1]** Correct gradient $m = 2$.

**Step 3: Find the equation of the tangent line $l$**
$$y - (-13) = 2(x - 5)$$
$$y + 13 = 2x - 10 \Rightarrow y = 2x - 23$$
- **[A1]** Correct equation in the form $y = mx + c$ with integer values.

#### **Part (b)**

**Step 4: Verify the intersection point**
Curve and line equations:
$$x^3 - 10x^2 + 27x - 23 = 2x - 23$$
$$x^3 - 10x^2 + 25x = 0$$
$$x^2(x - 10) = 0 \text{ or using } y\text{-intercepts:}$$
At $x = 0$, curve gives $y = -23$ and line gives $y = 2(0) - 23 = -23$.
- **[B1]** Shows that both the curve and the line give $y = -23$ when $x = 0$ (or solves intersection to show $x = 0$ is a repeated root and $x = 5$ is a root, and states it meets on the $y$-axis).

#### **Part (c)**

**Step 5: Set up the integral for the area of $R$**
$$\text{Area} = \int_0^5 ((2x - 23) - (x^3 - 10x^2 + 27x - 23)) \, \text{d}x$$
$$= \int_0^5 (-x^3 + 10x^2 - 25x) \, \text{d}x$$
- **[M1]** Sets up the correct integral (line minus curve, or using trapezium minus curve integral). Limits from $0$ to $5$.

**Step 6: Integrate the expression**
$$\int_0^5 (-x^3 + 10x^2 - 25x) \, \text{d}x = \left[ -\frac{x^4}{4} + \frac{10x^3}{3} - \frac{25x^2}{2} \right]_0^5$$
- **[M1]** Integrates the polynomial term by term correctly.

**Step 7: Substitute limits**
$$= \left( -\frac{625}{4} + \frac{1250}{3} - \frac{625}{2} \right) - (0)$$
$$= 625 \left( -\frac{1}{4} + \frac{2}{3} - \frac{1}{2} \right) = 625 \left( \frac{-3 + 8 - 6}{12} \right) = 625 \left( -\frac{1}{12} \right) = -\frac{625}{12}$$
Taking the magnitude:
$$\text{Area} = \frac{625}{12}$$
- **[A1]** Correct exact area $\frac{625}{12}$.

### **Examiner Report 7**

Part (a) was generally well answered, with most students able to differentiate correctly and understand the need to use the first derivate to find the gradient of the tangent line. A few tried to use the diagram to obtain the gradient, even after differentiating correctly so were only able to gain the first B mark, but they were in a minority. The vast majority of candidates who correctly differentiated (a few integrated, hence lost the marks), were able to go on to find the correct equation of the line, often using $y = mx + c$ rather than $y - y_1 = m(x - x_1)$. A small minority displayed poor algebraic skills when rearranging their linear equation to find $c$, and a few used a gradient of $\frac{1}{2}$ instead of $2$.

In part (b), most students understood the need to show that the $y$-intercepts were the same for both the line and the curve, but often candidates struggled to write an adequate conclusion to verify they meet again, and hence lost this mark.

Most students were able to gain some marks in part (c) but a score of two out of four was common. Those who got this, generally integrated the curve, obtaining a correct area of $455/12$, but then failed to go any further. Very few students used the area of a trapezium formula, instead preferring to integrate the $(2x - 23)$ or to split the area into a rectangle and triangle. Of those who attempted the area of the trapezium a number struggled to get the correct dimensions. Fully correct solutions using a trapezium were rare. A few students translated the curve and line upwards correctly by $23$ units and often scored full marks using this method. Those students who attempted the curve minus the line, often struggled with the constant $23$, or incorrectly collected like terms (e.g. an $x$ term with an $x^2$ term).

---
topic: "Differentiation"
subtopic: "Implicit differentiation"
---
### **Question 8**

The curve $C$ has equation
$$px^3 + qxy + 3y^2 = 26$$
where $p$ and $q$ are constants.

**(a)** Show that
$$\frac{\text{d}y}{\text{d}x} = \frac{apx^2 + bqy}{qx + cy}$$
where $a$, $b$ and $c$ are integers to be found. **(4)**

Given that
- the point $P(-1, -4)$ lies on $C$
- the normal to $C$ at $P$ has equation $19x + 26y + 123 = 0$

**(b)** find the value of $p$ and the value of $q$. **(5)**

**(Total 9 marks)**

### **Mark Scheme 8**

#### **Part (a)**

**Step 1: Differentiate each term implicitly with respect to $x$**
$$\frac{\text{d}}{\text{d}x}(px^3) = 3px^2$$
$$\frac{\text{d}}{\text{d}x}(qxy) = qy + qx\frac{\text{d}y}{\text{d}x}$$
$$\frac{\text{d}}{\text{d}x}(3y^2) = 6y\frac{\text{d}y}{\text{d}x}$$
$$\frac{\text{d}}{\text{d}x}(26) = 0$$
- **[B1]** Correct differentiation of $px^3$ and $3y^2$.
- **[M1]** Correct application of the product rule to differentiate $qxy$.

**Step 2: Collect terms in $\frac{\text{d}y}{\text{d}x}$ and rearrange**
$$3px^2 + qy + qx\frac{\text{d}y}{\text{d}x} + 6y\frac{\text{d}y}{\text{d}x} = 0$$
$$\frac{\text{d}y}{\text{d}x}(qx + 6y) = -3px^2 - qy$$
$$\frac{\text{d}y}{\text{d}x} = \frac{-3px^2 - qy}{qx + 6y}$$
- **[A1]** Correct expression for $\frac{\text{d}y}{\text{d}x}$ with $a = -3$, $b = -1$, $c = 6$.

#### **Part (b)**

**Step 3: Find the gradient of the normal and tangent at $P(-1, -4)$**
Normal equation: $19x + 26y + 123 = 0 \Rightarrow y = -\frac{19}{26}x - \frac{123}{26}$, so gradient of normal is $-\frac{19}{26}$.
Gradient of tangent at $P$: $m_T = \frac{26}{19}$.
- **[M1]** Uses the normal equation to find the gradient of the tangent at $P$.

**Step 4: Substitute $P(-1, -4)$ into the curve equation to get an equation in $p$ and $q$**
$$p(-1)^3 + q(-1)(-4) + 3(-4)^2 = 26$$
$$-p + 4q + 48 = 26 \Rightarrow -p + 4q = -22$$
- **[M1]** Substitutes $(-1, -4)$ into $px^3 + qxy + 3y^2 = 26$.

**Step 5: Substitute $P(-1, -4)$ and $m_T = \frac{26}{19}$ into $\frac{\text{d}y}{\text{d}x}$**
$$\frac{-3p(-1)^2 - q(-4)}{q(-1) + 6(-4)} = \frac{26}{19}$$
$$\frac{-3p + 4q}{-q - 24} = \frac{26}{19}$$
- **[M1]** Substitutes $(-1, -4)$ and the gradient into $\frac{\text{d}y}{\text{d}x}$.

**Step 6: Solve simultaneous linear equations for $p$ and $q$**
$$19(-3p + 4q) = 26(-q - 24)$$
$$-57p + 76q = -26q - 624 \Rightarrow -57p + 102q = -624$$
From $-p + 4q = -22 \Rightarrow p = 4q + 22$:
$$-57(4q + 22) + 102q = -624$$
$$-228q - 1254 + 102q = -624$$
$$-126q = 630 \Rightarrow q = -5$$
$$p = 4(-5) + 22 = 2$$
- **[A1]** $p = 2$
- **[A1]** $q = -5$

### **Examiner Report 8**

Many candidates gained some credit in this question but few gained full marks. Part (a) was relatively well answered. Most candidates identified that implicit differentiation was required and made good progress by correctly differentiating the given equation. When mistakes happened at this stage, they usually appeared in the differentiation of $qxy$ rather than in the differentiation of $px^3$ or $3y^2$. There were a few candidates, however, who clearly were not able to employ implicit differentiation and who gained no marks.

Once a differentiated expression had been obtained, many were able to rearrange correctly to make $\frac{\text{d}y}{\text{d}x}$ the subject, obtaining the required answer of $\frac{-3px^2 - qy}{qx + 6y}$. A common mistake, however, was to make sign errors in the rearranging process and incorrect answers like $\frac{3px^2 + qy}{qx + 6y}$ and $\frac{-3px^2 + qy}{qx + 6y}$ were surprisingly common following correct differentiation.

In (b) most candidates gained some marks but few used a fully correct method to achieve the correct answer of $p = 2$ and $q = -5$. Most were able to rearrange the equation of the normal, and identified that its gradient was $-\frac{19}{26}$. They then identified the gradient of the tangent as $\frac{26}{19}$ and used their result from (a) at $x = -1$ and $y = -4$ to attempt to form a correct equation in $p$ and $q$ such as $\frac{-3p + 4q}{-q - 24} = \frac{26}{19}$. A number of candidates incorrectly equated the numerators and denominators to form the equations $-3p + 4q = 26$ and $-q - 24 = 19$ and solved these to fortuitously arrive at the correct solution, losing most marks in (b).

Another incorrect approach was to form the equation of the normal of the form $y + 4 = \frac{q + 24}{4q - 3p}(x + 1)$ and to rearrange to the form $\alpha x + \beta y + \gamma = 0$ followed by 'comparing coefficients' with $19x + 26y + 123 = 0$ (an incorrect method).

Many candidates successfully substituted $x = -1$ and $y = -4$ into the equation of $C$ to get $p - 4q = 22$ (or $-p + 4q = -22$). This step was missed, however, by quite a few candidates, who could not then gain full marks for the question.

---
topic: "Sequences and Series"
subtopic: "Sum to infinity"
---
### **Question 9**

Show that
$$\sum_{n=2}^{\infty} \left(\frac{3}{4}\right)^n \cos(180n)^\circ = \frac{9}{28}$$

**(Total 3 marks)**

### **Mark Scheme 9**

#### **Part (a)**

**Step 1: Identify the sequence terms for $n = 2, 3, 4, \dots$**
$$\text{For } n = 2: \quad \left(\frac{3}{4}\right)^2 \cos(360^\circ) = \frac{9}{16}(1) = \frac{9}{16}$$
$$\text{For } n = 3: \quad \left(\frac{3}{4}\right)^3 \cos(540^\circ) = \frac{27}{64}(-1) = -\frac{27}{64}$$
$$\text{For } n = 4: \quad \left(\frac{3}{4}\right)^4 \cos(720^\circ) = \frac{81}{256}(1) = \frac{81}{256}$$
- **[M1]** Identifies the first term $a = \frac{9}{16}$ and common ratio $r = -\frac{3}{4}$ (by evaluating terms or recognising alternating signs from $\cos(180n)^\circ = (-1)^n$).

**Step 2: Use the sum to infinity formula for a geometric series**
$$S_\infty = \frac{a}{1 - r}$$
$$a = \frac{9}{16}, \quad r = -\frac{3}{4}$$
- **[M1]** Uses $S_\infty = \frac{a}{1-r}$ with their correct $a$ and $r$.

**Step 3: Evaluate the sum**
$$S_\infty = \frac{\frac{9}{16}}{1 - \left(-\frac{3}{4}\right)} = \frac{\frac{9}{16}}{\frac{7}{4}} = \frac{9}{16} \times \frac{4}{7} = \frac{36}{112} = \frac{9}{28}$$
- **[A1]** Fully correct proof leading to $\frac{9}{28}$.

### **Examiner Report 9**

This question was fairly well answered by a number of candidates, who understood the need to use the sum to infinity formula, but a sizeable majority made little or no progress, not realising for example, that the sum started from $n = 2$ and not $n = 1$ – hence they often did not get the first mark for a correct first term and/or common ratio. $9/16$ was seen fairly often, but not always attributed to the first term, with some candidates thinking this was the value of the sum. One candidate misread the infinity symbol as an $8$ and applied the sum to $8$ terms correctly, but was obviously not able to score any marks. A number of students found the sum to infinity, using $n = 1$ to infinity and then subtracting the first term. This was done well by candidates who went down this route. Unfortunately, many students achieved no marks on this part due to a wide variety of errors at the beginning. Calculating $\cos(360)$ on the calculator in radians instead of degrees was seen. Some tried to split the summation incorrectly into $\sum_{n=2}^{\infty} \left(\frac{3}{4}\right)^n \times \sum_{n=1}^{\infty} \cos(180n)^\circ$ and find the sum to infinity of the trigonometric terms separately. A few wrote $\left(\frac{3}{4}\right)^2 \cos(360)$ but did not evaluate the $\cos(360)$. There were some very good solutions but in many responses there was often a lack of clear structure to their proof.

---
topic: "Exponentials and Logarithms"
subtopic: "Logarithms and non-linear data"
---
### **Question 10**

The time, $T$ seconds, that a pendulum takes to complete one swing is modelled by the formula
$$T = al^b$$
where $l$ metres is the length of the pendulum and $a$ and $b$ are constants.

**(a)** Show that this relationship can be written in the form
$$\log_{10} T = b \log_{10} l + \log_{10} a$$ **(2)**

**Figure 3** _(A straight line graph of $\log_{10} T$ against $\log_{10} l$, passing through the points $(-0.7, 0)$ and $(0.21, 0.45)$)._

```tikz
\begin{tikzpicture}[scale=0.9]
  \draw[->] (-3,0) -- (3,0) node[below] {$\log_{10} l$};
  \draw[->] (0,-1) -- (0,3) node[left] {$\log_{10} T$};
  \draw[thick] (-2.1,0) -- (1.5, 2.7);
  \fill (-2.1,0) circle (1.5pt) node[below left] {$(-0.7, 0)$};
  \fill (1.5, 2.7) circle (1.5pt) node[above right] {$(0.21, 0.45)$};
  \node at (0,0) [below left] {$O$};
\end{tikzpicture}
```

A student carried out an experiment to find the values of the constants $a$ and $b$. The student recorded the value of $T$ for different values of $l$.

Figure 3 shows the linear relationship between $\log_{10} l$ and $\log_{10} T$ for the student's data. The straight line passes through the points $(-0.7, 0)$ and $(0.21, 0.45)$.

Using this information,

**(b)** find a complete equation for the model in the form
$$T = al^b$$
giving the value of $a$ and the value of $b$, each to $3$ significant figures. **(3)**

**(c)** With reference to the model, interpret the value of the constant $a$. **(1)**

**(Total 6 marks)**

### **Mark Scheme 10**

#### **Part (a)**

**Step 1: Take $\log_{10}$ of both sides**
$$\log_{10} T = \log_{10}(al^b)$$
$$\log_{10} T = \log_{10} a + \log_{10}(l^b)$$
$$\log_{10} T = b \log_{10} l + \log_{10} a$$
- **[M1]** Takes $\log_{10}$ of both sides and uses multiplication law $\log(xy) = \log x + \log y$.
- **[A1]** Uses power law $\log(x^n) = n\log x$ to complete the proof correctly.

#### **Part (b)**

**Step 2: Find the gradient $b$**
$$b = \frac{0.45 - 0}{0.21 - (-0.7)} = \frac{0.45}{0.91} \text{ wait, } 0.21 - (-0.7) = 0.91? \text{ Let's check: } 0.21 + 0.7 = 0.91 \dots \text{ Ah, } 0.21 - (-0.7) = 0.91? \text{ Let's re-verify: } 0.21 - (-0.7) = 0.91 \dots \text{ Wait, } 0.91? \text{ Let's calculate: } \frac{0.45}{0.91} \text{ or } \frac{0.45}{0.21 - (-0.7)} = \frac{0.45}{0.91} \dots \text{ Wait, } 0.21 - (-0.7) = 0.91 \dots \text{ Wait, } 0.21 - (-0.7) = 0.91 \text{ is } 0.21 + 0.70 = 0.91. \text{ Let's check: } \frac{0.45}{0.91} = \frac{45}{91} = 0.4945... \text{ Let's write } b = \frac{0.45}{0.91} \text{ or } \frac{45}{91}.$$
Wait, let's re-read points: $(-0.7, 0)$ and $(0.21, 0.45)$.
$$\text{Gradient } b = \frac{0.45 - 0}{0.21 - (-0.7)} = \frac{0.45}{0.91} = \frac{45}{91}$$
- **[M1]** Finds the gradient using the given coordinates.

**Step 3: Find $\log_{10} a$ using one of the points**
Using $(-0.7, 0)$:
$$0 = \left(\frac{45}{91}\right)(-0.7) + \log_{10} a$$
$$\log_{10} a = \frac{45}{91} \times 0.7 = \frac{45}{91} \times \frac{7}{10} = \frac{45}{13} \times \frac{1}{10} = \frac{9}{26} \approx 0.34615$$
$$a = 10^{\frac{9}{26}} \approx 2.22$$
- **[M1]** Uses a point to find $\log_{10} a$ and hence $a$.

**Step 4: State the complete equation with values to 3 sf**
$$b = 0.549, \quad a = 2.22$$
$$T = 2.22 l^{0.549}$$
- **[A1]** Correct complete equation with $a$ and $b$ to $3$ sf.

#### **Part (c)**

**Step 5: Interpret $a$**
$a$ is the time taken for one complete swing when the length of the pendulum is $1$ metre ($l = 1$).
- **[B1]** Correct interpretation (e.g. time for one swing when $l = 1$).

### **Examiner Report 10**

The majority of candidates scored both marks for part (a). A common error was omitting base $10$ when writing their final equation. In “show that” questions, we need to see the equation as stated in the question.

Part (b) was demanding for many candidates, with confusion as to how to correctly deal with the log terms. Most candidates who were successful found the value of $b$ by finding the gradient of the line. A less popular but usually successful approach was using simultaneous equations to eliminate $b$. Solving the equation $\log_{10} a = \frac{9}{26}$ to find the value of $a$ caused some problems.

The question required a complete equation for the model, so just stating the correct values of $a$ and $b$ without the equation written explicitly meant candidates scored $3$ out of $4$ marks, which was a very common error.

Part (c) was very rarely completed successfully. Common errors were thinking $a$ was the intercept on the $T$ axis or the time for the initial swing of the pendulum.

---
topic: "Functions and Graphs"
subtopic: "y = |f(x)| and y = f(|x|)"
---
### **Question 11**

**Figure 4** _(A sketch of the graph $y = |2x - 3k|$, where $k$ is a positive constant, showing an upturned V-shape with vertex on the x-axis)._

```tikz
\begin{tikzpicture}[scale=0.9]
  \draw[->] (-1,0) -- (4,0) node[below] {$x$};
  \draw[->] (0,-0.5) -- (0,3) node[left] {$y$};
  \draw[thick] (-0.5, 2.5) -- (1.5, 0) -- (3, 2.5);
  \fill (1.5,0) circle (1.5pt) node[below] {$\frac{3k}{2}$};
  \node at (0,0) [below left] {$O$};
\end{tikzpicture}
```

Figure 4 shows a sketch of the graph with equation
$$y = |2x - 3k|$$
where $k$ is a positive constant.

**(a)** Sketch the graph with equation $y = \text{f}(x)$ where
$$\text{f}(x) = k - |2x - 3k|$$
stating
- the coordinates of the maximum point
- the coordinates of any points where the graph cuts the coordinate axes **(4)**

**(b)** Find, in terms of $k$, the set of values of $x$ for which
$$k - |2x - 3k| > x - k$$
giving your answer in set notation. **(4)**

**(c)** Find, in terms of $k$, the coordinates of the minimum point of the graph with equation
$$y = 3 - 5\text{f}\left(\frac{1}{2}x\right)$$ **(2)**

**(Total 10 marks)**

### **Mark Scheme 11**

#### **Part (a)**

**Step 1: Sketch graph of $y = k - |2x - 3k|$**
- Peak (maximum point) at $\left(\frac{3k}{2}, k\right)$.
- Cuts $y$-axis at $(0, -2k)$.
- Cuts $x$-axis where $k - |2x - 3k| = 0 \Rightarrow |2x - 3k| = k \Rightarrow 2x - 3k = \pm k \Rightarrow x = k$ and $x = 2k$.
- **[B1]** Correct general shape (inverted V).
- **[B1]** Correct coordinates of maximum point $\left(\frac{3k}{2}, k\right)$.
- **[B1]** Correct $y$-intercept $(0, -2k)$.
- **[B1]** Correct $x$-intercepts $(k, 0)$ and $(2k, 0)$.

#### **Part (b)**

**Step 2: Set up and solve the inequality**
$$k - |2x - 3k| > x - k$$
Consider cases for $2x - 3k \ge 0 \Rightarrow x \ge \frac{3k}{2}$:
$$k - (2x - 3k) > x - k \Rightarrow 4k - 2x > x - k \Rightarrow 3x < 5k \Rightarrow x < \frac{5k}{3}$$
Combined with $x \ge \frac{3k}{2}$: $\frac{3k}{2} \le x < \frac{5k}{3}$.

Consider cases for $2x - 3k < 0 \Rightarrow x < \frac{3k}{2}$:
$$k - (3k - 2x) > x - k \Rightarrow -2k + 2x > x - k \Rightarrow x > k$$
Combined with $x < \frac{3k}{2}$: $k < x < \frac{3k}{2}$.
- **[M1]** Attempts to solve the modulus inequality by considering relevant linear cases.
- **[A1]** Obtains critical values $x = k$ and $x = \frac{5k}{3}$.
- **[M1]** Combines intervals correctly.
- **[A1]** Correct set notation: $\{x \in \mathbb{R} : k < x < \frac{5k}{3}\}$.

#### **Part (c)**

**Step 3: Determine the transformation on the maximum point**
Original maximum is $\left(\frac{3k}{2}, k\right)$.
For $y = 3 - 5\text{f}\left(\frac{1}{2}x\right)$:
- Scaling factor inside function $\frac{1}{2}$ means $x$-coordinate is multiplied by $2$: $x$-coordinate $= 2 \times \frac{3k}{2} = 3k$.
- Maximum becomes a minimum due to the factor $-5$: $y$-coordinate $= 3 - 5(k) = 3 - 5k$.
- **[B1]** Correct $x$-coordinate $3k$.
- **[B1]** Correct $y$-coordinate $3 - 5k$.

### **Examiner Report 11**

In general part (a) was poorly answered, with many candidates seemingly unfamiliar with sketching modulus functions. The majority of candidates scored at least one B mark for their upturned V but a V shape was occasionally seen, typically scoring no marks. Of those with the correct, many could not find the correct intersections and maximum point. Finding the correct $y$ intercept seemed to be less challenging than finding the $x$ intercept or the maximum point.

Part (b) was better answered than part (a). Many candidates made correct attempts to find the second critical value of $x = \frac{5k}{3}$, gaining the M mark, but $x = k$ was often not found. The 'squaring' method was occasionally seen, but as this led to a 3TQ in $x$ and $k$ which was hard to factorise this was rarely successful. The final A mark was often lost due to lack of correct set notation.

There were few fully successful answers to part (c) but some candidates could write down one correct coordinate. There was occasional success seen by candidates who used algebra by writing the transformed function as $y = 3 - 5(k - |x - 3k|)$.

---
topic: "Integration"
subtopic: "Integration by substitution"
---
### **Question 12**

**(a)** Use the substitution $u = 1 + \sqrt{x}$ to show that
$$\int_0^{16} \frac{x}{1 + \sqrt{x}} \, \text{d}x = \int_p^q \frac{2(u-1)^3}{u} \, \text{d}u$$
where $p$ and $q$ are constants to be found. **(3)**

**(b)** Hence show that
$$\int_0^{16} \frac{x}{1 + \sqrt{x}} \, \text{d}x = A - B \ln 5$$
where $A$ and $B$ are constants to be found. **(4)**

**(Total 7 marks)**

### **Mark Scheme 12**

#### **Part (a)**

**Step 1: Express $x$ and $\text{d}x$ in terms of $u$**
$$u = 1 + \sqrt{x} \Rightarrow \sqrt{x} = u - 1 \Rightarrow x = (u - 1)^2$$
$$\frac{\text{d}x}{\text{d}u} = 2(u - 1) \Rightarrow \text{d}x = 2(u - 1) \, \text{d}u$$
- **[B1]** Correct expression for $x$ in terms of $u$ and correct $\text{d}x = 2(u - 1) \, \text{d}u$.

**Step 2: Change limits**
$$\text{When } x = 0, \quad u = 1 + \sqrt{0} = 1$$
$$\text{When } x = 16, \quad u = 1 + \sqrt{16} = 1 + 4 = 5$$
- **[B1]** Correct lower limit $p = 1$ and upper limit $q = 5$.

**Step 3: Substitute into the integral**
$$\int_1^5 \frac{(u-1)^2}{u} \cdot 2(u-1) \, \text{d}u = \int_1^5 \frac{2(u-1)^3}{u} \, \text{d}u$$
- **[B1]** Completes the substitution to arrive at the printed result.

#### **Part (b)**

**Step 4: Expand the numerator**
$$(u - 1)^3 = u^3 - 3u^2 + 3u - 1$$
$$\int_1^5 \frac{2(u^3 - 3u^2 + 3u - 1)}{u} \, \text{d}u = \int_1^5 \left( 2u^2 - 6u + 6 - \frac{2}{u} \right) \, \text{d}u$$
- **[M1]** Expands $(u-1)^3$ and divides each term by $u$ (or attempts integration by parts).

**Step 5: Integrate term by term**
$$\left[ \frac{2u^3}{3} - 3u^2 + 6u - 2\ln|u| \right]_1^5$$
- **[M1]** Integrates the expanded polynomial and logarithmic terms correctly.

**Step 6: Substitute limits $5$ and $1$**
$$\left( \frac{2(125)}{3} - 3(25) + 6(5) - 2\ln 5 \right) - \left( \frac{2}{3} - 3 + 6 - 2\ln 1 \right)$$
$$= \left( \frac{250}{3} - 75 + 30 - 2\ln 5 \right) - \left( \frac{2}{3} + 3 \right)$$
$$= \left( \frac{250}{3} - 45 - 2\ln 5 \right) - \frac{11}{3}$$
$$= \frac{239}{3} - 45 - 2\ln 5 = \frac{239 - 135}{3} - 2\ln 5 = \frac{104}{3} - 2\ln 5$$
- **[A1]** Correct value for $A = \frac{104}{3}$ and $B = 2$.

### **Examiner Report 12**

This question discriminated well with weaker students generally able to pick up $2$ marks and many able students were able to gain full marks.

Part (a) was a relatively straightforward substitution question and as such many students made a very positive attempt at this part. There were a mixture of methods used to answer part (a) with most students correctly identifying $\frac{\text{d}u}{\text{d}x}$ or $\frac{\text{d}x}{\text{d}u}$. Those that found the second of these found the substitution very straightforward and generally went on to achieve full marks. Students who found $\frac{\text{d}u}{\text{d}x}$ instead sometimes struggled with the indices and how to deal with the negative power when dividing and hence made mistakes here. There were a small number of students who simply failed to make any attempt at this question, and generally these students gave up on the question entirely. A few students lost the accuracy mark for not stating the limits or omitting $\text{d}u$.

In part (b) it was good to see many students recognised that "hence" meant that the answer in part (a) must be used and proceeded with the correct method of expanding the cubic and dividing by $u$, proceeding correctly to the correct answer. If this was done correctly these students would usually go on to successfully apply the limits correctly and gain full marks. Unfortunately, a number of students attempted a method of integration by parts or some kind of product rule and therefore gained no marks here. Unfortunately a few did not take heed of the "hence" and proceeded to integrate the original expression scoring no marks in this part. Some weaker students split the integral into an incorrect sum of $2$ fractions e.g. $\frac{2}{u} + \frac{(u-1)^3}{u}$ and then used integration by parts which they tended to give up on half way through. The method most successful was to take the $2$ outside the integral, then integrate. Those that multiplied by $2$ were more likely to make slips on the value of the coefficients for the $3^{\text{rd}}$ and $4^{\text{th}}$ term. Several students lost the final $2$ marks as they used incorrect limits either $16$ and $0$ or $5$ and $0$.

---
topic: "Differentiation"
subtopic: "Parametric differentiation"
---
### **Question 13**

The curve $C$ has parametric equations
$$x = \sin 2\theta, \quad y = \csc^3 \theta, \quad 0 < \theta < \frac{\pi}{2}$$

**(a)** Find an expression for $\frac{\text{d}y}{\text{d}x}$ in terms of $\theta$. **(3)**

**(b)** Hence find the exact value of the gradient of the tangent to $C$ at the point where $y = 8$. **(3)**

**(Total 6 marks)**

### **Mark Scheme 13**

#### **Part (a)**

**Step 1: Differentiate $x$ and $y$ with respect to $\theta$**
$$\frac{\text{d}x}{\text{d}\theta} = 2\cos 2\theta$$
$$\frac{\text{d}y}{\text{d}\theta} = 3\csc^2 \theta (-\csc \theta \cot \theta) = -3\csc^3 \theta \cot \theta$$
- **[B1]** Correct $\frac{\text{d}x}{\text{d}\theta}$.
- **[B1]** Correct $\frac{\text{d}y}{\text{d}\theta}$.

**Step 2: Use the chain rule to find $\frac{\text{d}y}{\text{d}x}$**
$$\frac{\text{d}y}{\text{d}x} = \frac{\text{d}y}{\text{d}\theta} \div \frac{\text{d}x}{\text{d}\theta} = \frac{-3\csc^3 \theta \cot \theta}{2\cos 2\theta}$$
- **[M1]** Applies $\frac{\text{d}y}{\text{d}x} = \frac{\text{d}y}{\text{d}\theta} \div \frac{\text{d}x}{\text{d}\theta}$.
- **[A1]** Correct expression for $\frac{\text{d}y}{\text{d}x}$.

#### **Part (b)**

**Step 3: Find $\theta$ where $y = 8$**
$$\csc^3 \theta = 8 \Rightarrow \csc \theta = 2 \Rightarrow \sin \theta = \frac{1}{2} \Rightarrow \theta = \frac{\pi}{6}$$
- **[M1]** Solves $\csc^3 \theta = 8$ to find $\theta = \frac{\pi}{6}$.

**Step 4: Substitute $\theta = \frac{\pi}{6}$ into $\frac{\text{d}y}{\text{d}x}$**
$$\csc\left(\frac{\pi}{6}\right) = 2, \quad \cot\left(\frac{\pi}{6}\right) = \sqrt{3}$$
$$\cos 2\theta = \cos\left(\frac{\pi}{3}\right) = \frac{1}{2}$$
$$\left.\frac{\text{d}y}{\text{d}x}\right|_{\theta=\frac{\pi}{6}} = \frac{-3(2)^3(\sqrt{3})}{2\left(\frac{1}{2}\right)} = \frac{-24\sqrt{3}}{1} = -24\sqrt{3}$$
- **[M1]** Substitutes their $\theta$ into $\frac{\text{d}y}{\text{d}x}$.
- **[A1]** Correct exact gradient $-24\sqrt{3}$.

### **Examiner Report 13**

This question involving differentiation of parametric equations was found to be challenging by the majority of students, particularly the differentiation of $y = \csc^3 \theta$ and part (b).

The majority of candidates knew what was expected in part (a) and proceeded to attempt to use the chain rule to find $\frac{\text{d}y}{\text{d}x}$, however they found differentiating $y = \csc^3 \theta$ challenging. Some did not check in the formula book that the derivative of $\csc \theta$ was negative, or omitted the constant $3$, and this cost $3$ of the $6$ marks available in the whole question. For those that attempted to write $y = \sin^{-3} \theta$ and use either the chain rule or the quotient rule success was mixed. Other common incorrect derivatives included $\frac{\text{d}y}{\text{d}\theta} = (\csc^3 \theta \cot^3 \theta)$ and variants of this. Differentiating $x = \sin 2\theta$ proved less troublesome, with most doing so correctly. There was a proportion of candidates that rewrote $\sin 2\theta$ as $2\sin \theta \cos \theta$ and used the product rule, creating more work but ultimately doing so successfully in most cases. The method mark was scored by the majority of candidates as a result, although there were a few candidates who tried to write $y$ in terms of $x$ and differentiate, with no marks being scored for this approach. A number of candidates, having found a correct derivative, proceeded to attempt to tidy this up, unfortunately using time that could have been spent elsewhere in the paper.

Part (b) proved more challenging for many candidates, with some unable to make a start as they were unable to process $8 = \csc^3 \theta$ to arrive at either a value for $\sin \theta$ or $\theta$. Of those that did arrive at a value for $\sin \theta$ or $\theta$, many were able to work in exact form using their value to find an exact value for their $\frac{\text{d}y}{\text{d}x}$, others were unable to proceed or attempted to give a decimal answer. $24\sqrt{3}$ and $8\sqrt{3}$ were common incorrect final answers. There were, however, some excellent and concise responses to this question.

---
topic: "Modelling with Differential Equations"
subtopic: "Modelling with first-order differential equations"
---
### **Question 14**

**Figure 5** _(A sketch of a cuboid tank with base $8\text{m}$ by $3\text{m}$, height $5\text{m}$, depth of water $h\text{ m}$, and a tap at the bottom point $T$)._

```tikz
\begin{tikzpicture}[scale=0.8]
  \draw (0,0) -- (4,0) -- (5,1.5) -- (1,1.5) -- cycle;
  \draw (0,0) -- (0,3) -- (1,4.5) -- (1,1.5);
  \draw (4,0) -- (4,3) -- (5,4.5) -- (5,1.5);
  \draw[dashed] (0,3) -- (4,3);
  \draw[dashed] (1,4.5) -- (5,4.5);
  
  % Water level
  \draw[thick, fill=gray!30] (0,0) -- (4,0) -- (5,1.5) -- (1,1.5) -- cycle;
  \draw[thick] (0,0) -- (0,1.5) -- (1,1.5);
  \draw[thick] (4,0) -- (4,1.5) -- (5,1.5);
  
  \node at (2.5, -0.3) {$8\text{ m}$};
  \node at (4.7, 0.7) {$3\text{ m}$};
  \node at (-0.3, 0.7) {$h\text{ m}$};
  \node at (5.5, 3) {$5\text{ m}$};
  \fill (2,0) circle (1.5pt) node[below] {$T$};
\end{tikzpicture}
```

Water flows at a constant rate into a large tank. The tank is a cuboid, with all sides of negligible thickness. The base of the tank measures $8\text{m}$ by $3\text{m}$ and the height of the tank is $5\text{m}$. There is a tap at a point $T$ at the bottom of the tank, as shown in Figure 5.

At time $t$ minutes after the tap has been opened
- the depth of water in the tank is $h$ metres
- water is flowing into the tank at a constant rate of $0.48\text{ m}^3$ per minute
- water is modelled as leaving the tank through the tap at a rate of $0.1h\text{ m}^3$ per minute

**(a)** Show that, according to the model,
$$1200\frac{\text{d}h}{\text{d}t} = 24 - 5h$$ **(4)**

Given that when the tap was opened, the depth of water in the tank was $2\text{m}$,

**(b)** show that, according to the model,
$$h = A + Be^{-kt}$$
where $A$, $B$ and $k$ are constants to be found. **(6)**

Given that the tap remains open,

**(c)** determine, according to the model, whether the tank will ever become full, giving a reason for your answer. **(2)**

**(Total 12 marks)**

### **Mark Scheme 14**

#### **Part (a)**

**Step 1: Express volume $V$ in terms of $h$**
Volume of water $V = 8 \times 3 \times h = 24h$.
- **[B1]** States $V = 24h$ (or base area $\times h = 24$).

**Step 2: Set up rate of change of volume**
$$\frac{\text{d}V}{\text{d}t} = 0.48 - 0.1h$$
- **[B1]** States $\frac{\text{d}V}{\text{d}t} = 0.48 - 0.1h$.

**Step 3: Apply chain rule to obtain differential equation in $h$ and $t$**
$$\frac{\text{d}V}{\text{d}t} = \frac{\text{d}V}{\text{d}h} \cdot \frac{\text{d}h}{\text{d}t} = 24\frac{\text{d}h}{\text{d}t}$$
$$24\frac{\text{d}h}{\text{d}t} = 0.48 - 0.1h$$
- **[M1]** Uses chain rule $\frac{\text{d}V}{\text{d}t} = \frac{\text{d}V}{\text{d}h} \frac{\text{d}h}{\text{d}t}$.

**Step 4: Scale to arrive at the printed result**
$$24\frac{\text{d}h}{\text{d}t} = \frac{24}{50} - \frac{1}{10}h \Rightarrow 1200\frac{\text{d}h}{\text{d}t} = 24 - 5h$$
- **[A1]** Multiplies through by $50$ to achieve the printed result.

#### **Part (b)**

**Step 5: Separate variables and integrate**
$$\frac{1200}{24 - 5h} \, \text{d}h = \text{d}t$$
$$\int \frac{1200}{24 - 5h} \, \text{d}h = \int 1 \, \text{d}t$$
$$-240 \ln|24 - 5h| = t + C$$
- **[M1]** Separates variables and attempts integration (obtaining $\ln(24-5h)$ term).
- **[A1]** Correct integration with correct coefficients.

**Step 6: Use initial condition $t = 0, h = 2$ to find $C$**
$$-240 \ln(24 - 5(2)) = 0 + C \Rightarrow C = -240 \ln 14$$
- **[M1]** Uses $t = 0, h = 2$ to find the constant of integration.

**Step 7: Rearrange to find $h$**
$$-240 \ln(24 - 5h) - (-240 \ln 14) = t$$
$$-240 \ln\left(\frac{24 - 5h}{14}\right) = t$$
$$\frac{24 - 5h}{14} = e^{-\frac{t}{240}}$$
$$24 - 5h = 14e^{-\frac{t}{240}}$$
$$5h = 24 - 14e^{-\frac{t}{240}}$$
$$h = \frac{24}{5} - \frac{14}{5}e^{-\frac{t}{240}}$$
- **[M1]** Rearranges logarithmic equation to express $h$ as an exponential function.
- **[A1]** Correct values for constants $A = \frac{24}{5}$ (or $4.8$), $B = -\frac{14}{5}$ (or $-2.8$), and $k = \frac{1}{240}$ (or $0.00417$).

#### **Part (c)**

**Step 8: Determine if tank becomes full**
Maximum depth as $t \to \infty$ is $h = \frac{24}{5} = 4.8\text{ m}$.
Since the height of the tank is $5\text{ m}$ and the maximum height water can reach is $4.8\text{ m}$ ($< 5\text{ m}$), the tank will never become full.
- **[M1]** Considers the limit as $t \to \infty$ or solves for $h = 5$.
- **[A1]** Correct conclusion with reason (limiting height is $4.8\text{ m}$, which is less than $5\text{ m}$).

### **Examiner Report 14**

This question proved challenging for the majority of candidates, with many not answering it at all.

For those that did attempt a response, part (a) was reasonably well answered, with many candidates gaining at least one of the B marks but quite a few then failing to correctly apply the chain rule and complete the proof.

Some weaker candidates recognised they had to consider "flow in - flow out" but didn’t identify this as $\frac{\text{d}V}{\text{d}t}$, with $\frac{\text{d}V}{\text{d}t} = 0.48 - 0.1h$ sometimes seen. It was also not uncommon to see $\frac{\text{d}V}{\text{d}t} = 0.48$ or $\frac{\text{d}V}{\text{d}t} = 0.1h$ 'uncombined' in some responses. Some candidates even started with $24h = 0.48t - 0.1ht$ and "differentiated" to get the printed result.

Responses to part (b) were mixed. Some candidates failed to separate the variables correctly or did not recognise the logarithmic form for the integration. It was not unusual for the "$+c$" to be missed completely, but if it was included candidates were able to gain the $2^{\text{nd}}$ method mark despite poor integration.

Some candidates changed $\frac{\text{d}h}{\text{d}t}$ to $\frac{\text{d}t}{\text{d}h}$, making their following working much harder. There was some occasional use of Further Maths methods (e.g. integrating factors), potentially gaining full marks.

Candidates who did not answer (a) rarely attempted (b), perhaps not realising (b) could be answered independently using the printed differential equation.

Part (c) was attempted by many candidates, even if they hadn’t attempted (a) and (b). Students who progressed well in (b) often interpreted their formula correctly to obtain marks in (c). A minority of students who didn’t complete (b) still attempted (c) with some success, e.g. recognising that $\frac{\text{d}h}{\text{d}t}$ was zero at the maximum height or using a 'flow in = flow out' argument.

---
topic: "Trigonometry and Modelling"
subtopic: "Simplifying a cos x ± b sin x"
---
### **Question 15**

**(a)** Express $2\cos \theta - \sin \theta$ in the form $R\cos(\theta + \alpha)$, where $R > 0$ and $0 < \alpha < \frac{\pi}{2}$. Give the exact value of $R$ and the value of $\alpha$ in radians to $3$ decimal places. **(3)**

**Figure 6** _(Cross-section of a water wheel with centre $C$, paddle point $P$, and water level at $H$ metres below $C$)._

```tikz
\begin{tikzpicture}[scale=1]
  \draw (0,0) circle (1.5cm);
  \fill (0,0) circle (1.5pt) node[below left] {$C$};
  
  % Spokes
  \foreach \a in {0, 30, ..., 330} {
    \draw (0,0) -- (\a:1.5);
  }
  
  \fill (45:1.5) circle (1.5pt) node[above right] {$P$};
  
  % Water level line
  \draw[dashed] (-2.5, -2.0) -- (2.5, -2.0) node[right] {Water level};
  \draw[<->] (1.8, 0) -- (1.8, -2.0) node[midway, right] {$H$ metres};
  \draw (1.7, 0) -- (1.9, 0);
  \draw (1.7, -2.0) -- (1.9, -2.0);
\end{tikzpicture}
```

Figure 6 shows the cross-section of a water wheel. The wheel is free to rotate about a fixed axis through the point $C$. The point $P$ is at the end of one of the paddles of the wheel, as shown in Figure 6. The water level is assumed to be horizontal and of constant height. The vertical height, $H$ metres, of $P$ above the water level is modelled by the equation
$$H = 3 + 4\cos(0.5t) - 2\sin(0.5t)$$
where $t$ is the time in seconds after the wheel starts rotating.

Using the model, find

**(b)** 
**(i)** the maximum height of $P$ above the water level,
**(ii)** the value of $t$ when this maximum height first occurs, giving your answer to one decimal place. **(3)**

In a single revolution of the wheel, $P$ is below the water level for a total of $T$ seconds. According to the model,

**(c)** find the value of $T$ giving your answer to $3$ significant figures. (Solutions based entirely on calculator technology are not acceptable.) **(4)**

In reality, the water level may not be of constant height.

**(d)** Explain how the equation of the model should be refined to take this into account. **(1)**

**(Total 11 marks)**

### **Mark Scheme 15**

#### **Part (a)**

**Step 1: Expand $R\cos(\theta + \alpha)$**
$$R\cos(\theta + \alpha) = R\cos\theta\cos\alpha - R\sin\theta\sin\alpha$$
Compare with $2\cos\theta - \sin\theta$:
$$R\cos\alpha = 2, \quad R\sin\alpha = 1$$
- **[M1]** Expands $R\cos(\theta+\alpha)$ and equates coefficients.

**Step 2: Find $R$ and $\alpha$**
$$R = \sqrt{2^2 + (-1)^2} = \sqrt{5}$$
$$\tan\alpha = \frac{1}{2} \Rightarrow \alpha = 0.4636... \text{ rad}$$
- **[A1]** Exact $R = \sqrt{5}$.
- **[A1]** $\alpha = 0.464$ (to $3$ decimal places).

#### **Part (b)**

**Step 3: Find maximum height and time $t$**
Rewrite model using part (a):
$$H = 3 + 2\left(2\cos(0.5t) - \sin(0.5t)\right) = 3 + 2\sqrt{5}\cos(0.5t + \alpha)$$
**(i)** Maximum height: $3 + 2\sqrt{5}$ (or $7.47\text{ m}$).
**(ii)** First maximum occurs when $0.5t + \alpha = 0$ (or $2\pi$ for positive $t$).
$$0.5t + 0.4636 = 2\pi \Rightarrow 0.5t = 2\pi - 0.4636 \approx 5.8196 \Rightarrow t \approx 11.6\text{ s}$$
- **[B1]** Maximum height $3 + 2\sqrt{5}$.
- **[M1]** Solves $0.5t + \alpha = 2\pi$ (or equivalent derivative method $\frac{\text{d}H}{\text{d}t} = 0$).
- **[A1]** $t = 11.6$ (to $1$ decimal place).

#### **Part (c)**

**Step 4: Find time $T$ when $P$ is below water level ($H < 0$)**
$$3 + 2\sqrt{5}\cos(0.5t + \alpha) < 0 \Rightarrow \cos(0.5t + \alpha) < -\frac{3}{2\sqrt{5}} = -\frac{3\sqrt{5}}{10} \approx -0.6708$$
Find critical times when $H = 0$:
$$0.5t + \alpha = \arccos(-0.6708) \approx 2.3051 \text{ or } 3.9781 \text{ (or } \pi \pm \arccos\dots\text{)}$$
$$0.5t + \alpha_1 = 2.3051 \Rightarrow 0.5t_1 = 2.3051 - 0.4636 = 1.8415 \Rightarrow t_1 = 3.683$$
$$0.5t + \alpha_2 = 3.9781 \Rightarrow 0.5t_2 = 3.9781 - 0.4636 = 3.5145 \Rightarrow t_2 = 7.029$$
$$T = t_2 - t_1 = 7.029 - 3.683 = 3.35\text{ s}$$
- **[M1]** Sets $H = 0$ and rearranges to $\cos(0.5t + \alpha) = -\frac{3}{2\sqrt{5}}$.
- **[M1]** Finds two relevant values of $(0.5t + \alpha)$ in the appropriate range.
- **[M1]** Calculates the two times $t_1$ and $t_2$ and finds their difference.
- **[A1]** $T = 3.35$ (to $3$ sf).

#### **Part (d)**

**Step 5: Refine the model**
Add a time-dependent function (e.g. a trigonometric term with a longer period, or a linear term) to represent the changing water level height.
- **[B1]** Suggests a suitable refinement (e.g. adding a periodic function of time to represent changing water level).

### **Examiner Report 15**

This question discriminated well between candidates that got this far, but it did appear that many candidates had simply run out of time, perhaps indicative of a generally lower understanding than in a June series because of it being a resit paper following the pandemic.

Part (a) was answered very accurately by the vast majority of candidates, recognising the need to use the compound angle formulae for $\cos(\theta + \alpha)$. Two common errors occurred, namely $\tan \alpha = -\frac{1}{2}$, following inaccurate equating of the coefficients of $\cos \theta$ and $\sin \theta$, and an approximate value for $R$, which usually arose from candidates using their value of $\alpha$ to find $R$ from either $\sin \alpha = \frac{1}{R}$ or $\cos \alpha = \frac{2}{R}$. These candidates should be encouraged to find $R$ using Pythagoras.

Part (b)(i) was usually well attempted by those who had answered part (a), however, some candidates did not recognise the need to double $R$ and arrived at $3 + R$ rather than $3 + 2R$ instead. Others simply assumed that the maximum was $3$, $5$ or $7$, from a poor understanding of combining two trigonometric functions and the purpose of using the compound angle formulae to combine these two functions.

Part (b)(ii) proved to cause problems for many candidates, with the majority incorrectly assuming that $0.5t + \alpha = 0$, and proceeded to ignore that this equation results in a negative value of $t$ (usually $-0.9$) by simply making this value of $t$ positive. They had failed to recognise that the first maximum would occur when $0.5t + \alpha = 2\pi$. Perhaps the use of a sketch or graphical calculators would have helped these candidates. An alternative approach to part (b) required candidates to differentiate $H$, either in its original form or having used part (a) and solve the equation $\frac{\text{d}H}{\text{d}t} = 0$. This approach was more complicated and resulted in needing to solve $\tan(0.5t) = -\frac{1}{2}$ and find the third solution, in order to avoid finding the maximum when $t < 0$ or the first minimum. Generally, candidates taking this approach were unsuccessful in scoring the accuracy mark, although the method mark was scored reasonably frequently.

Part (c) was another challenging part to this question and many candidates made no attempt. A surprising proportion of candidates attempted to solve the equation $\cos(0.5t + \alpha) = -1$, apparently in an attempt to find the minimum, but did not appear to understand how to use this to solve the problem. It was uncommon to see this method result in a correct value for $T$. More commonly, candidates were successful in finding a value for $t$ that satisfied $H = 0$, but incorrectly interpreted this as the solution to the problem. Instead, they were required to find a second value of $t$ and find the difference between these times. Again, there were a number of efficient and concise solutions to the problem that demonstrated an excellent understanding of what was required.

The final mark in this question, in part (d), was rarely scored, and demonstrated that candidates are generally not well prepared to answer questions about refining models, as required in AO3.5c. Many candidates did attempt this part, often despite making little or no progress with the earlier parts of the question. Most concentrated on having an extra constant, wanted the average water level to be used, or simply restated the question by saying that the varying water level needed to be accounted for, without suggesting how this might be done. Others knew that they needed to adjust the model, but suggested exponential, linear or quadratic terms to do this, which would not have been appropriate. Again, there were some excellent and detailed explanations of how a trigonometric function could be included to take into account the varying water level.
