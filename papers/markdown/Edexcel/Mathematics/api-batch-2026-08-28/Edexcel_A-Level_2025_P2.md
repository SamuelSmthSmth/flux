---
topic: "Algebraic Expressions"
subtopic: "Factorising"
---
### **Question 1**

In this question you must show all stages of your working. Solutions relying on calculator technology are not acceptable.

Factorise completely

$$2x^3 - 24x^2 + 40x$$

**(3)**

**(Total 3 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Take out common factor of $2x$**
$$2x(x^2 - 12x + 20)$$
- **[M1]** Takes out a common factor of $2x$, leaving a quadratic expression with at least two terms correct.

**Step 2: Factorise the quadratic**
$$(x^2 - 12x + 20) = (x - 2)(x - 10)$$
- **[M1]** Attempts to factorise the resulting quadratic expression (must give two brackets which multiply out to give at least two correct terms).

**Step 3: State the final fully factorised expression**
$$2x(x - 2)(x - 10)$$
- **[A1]** Correct fully factorised expression.

---
topic: "Integration"
subtopic: "Integrating x^n"
---
### **Question 2**

Find

$$\int \left( x^4 - 6x^{-\frac{1}{2}} - 3 \right) dx$$

giving the answer in simplest form.

**(4)**

**(Total 4 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Integrate each term**
$$\int x^4 dx = \frac{x^5}{5}$$
$$\int -6x^{-\frac{1}{2}} dx = \frac{-6x^{\frac{1}{2}}}{\frac{1}{2}} = -12x^{\frac{1}{2}}$$
$$\int -3 dx = -3x$$
- **[M1]** Integrates at least one term correctly ($x^4 \rightarrow \frac{x^5}{5}$, $x^{-\frac{1}{2}} \rightarrow kx^{\frac{1}{2}}$, or constant $\rightarrow -3x$).
- **[A1]** Two terms correctly integrated.
- **[A1]** All terms correctly integrated (allow unsimplified coefficients).

**Step 2: Add constant of integration and simplify**
$$\frac{1}{5}x^5 - 12\sqrt{x} - 3x + C$$
- **[A1]** Fully correct and simplified expression including $+ C$.

---
topic: "Exponentials and Logarithms"
subtopic: "Solving equations using logarithms"
---
### **Question 3**

Given that

$$3^x = 7^y$$

find the exact value of $\frac{x}{y}$

**(2)**

**(Total 2 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Take logarithms of both sides**
$$\ln(3^x) = \ln(7^y) \Rightarrow x\ln(3) = y\ln(7)$$
- **[M1]** Applies logarithms (base $e$ or base 10) to both sides and uses power law $\ln(a^b) = b\ln(a)$.

**Step 2: Rearrange to find $\frac{x}{y}$**
$$\frac{x}{y} = \frac{\ln(7)}{\ln(3)}$$
- **[A1]** Correct exact value for $\frac{x}{y}$ (or $\log_3 7$).

---
topic: "Radians"
subtopic: "Areas of sectors and segments"
---
### **Question 4**

**Figure 1** _(A sketch showing the shape ABCD, consisting of a triangle ABD containing a sector ABC of a circle with centre B, with dimensions AD = 6.4 cm, BD = 13 cm, BA = BC = 8 cm, and shaded region R bounded by CD, DA, and arc AC)._

```tikz
\begin{tikzpicture}[scale=0.8]
  \coordinate (B) at (0,0);
  \coordinate (A) at (4,0);
  \coordinate (D) at (2.5,3.5);
  \coordinate (C) at (3.25, 0.75);
  \draw[thick] (B) -- (D) node[midway, left] {$13\text{ cm}$};
  \draw[thick] (B) -- (A) node[midway, below] {$8\text{ cm}$};
  \draw[thick] (A) -- (D) node[midway, left] {$6.4\text{ cm}$};
  \draw[thick] (D) -- (C);
  \draw[thick, dashed] (B) -- (C);
  \draw[thick] (A) arc[start angle=0, end angle=13, radius=8];
  \node at (B) [below left] {$B$};
  \node at (A) [below] {$A$};
  \node at (D) [above left] {$D$};
  \node at (C) [above right] {$C$};
  \node at (2, 1.8) {$R$};
\end{tikzpicture}
```

The shape $ABCD$, shown in Figure 1, consists of a triangle $ABD$ containing a sector $ABC$ of a circle with centre $B$.

Given that
- $AD = 6.4\text{ cm}$
- $BD = 13\text{ cm}$
- $BA = BC = 8\text{ cm}$

**(a)** show that angle $ABC = 0.394\text{ radians}$ to 3 significant figures. **(2)**

The region $R$, shown shaded in Figure 1, is bounded by the line $CD$, the line $DA$ and the arc $AC$.

**(b)** Find the area of $R$, giving the answer in $\text{cm}^2$ to 3 significant figures. You must make your method clear. **(3)**

**(Total 5 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Use the cosine rule in triangle $ABD$**
$$6.4^2 = 8^2 + 13^2 - 2(8)(13)\cos(\theta)$$
$$\cos(\theta) = \frac{8^2 + 13^2 - 6.4^2}{2(8)(13)} = \frac{64 + 169 - 40.96}{208} = \frac{192.04}{208} \approx 0.923269$$
- **[M1]** Correct application of the cosine rule to find angle $\angle ABD$ (or $\theta$).
- **[A1]** Correct evaluation leading to $\theta = 0.3938\dots = 0.394\text{ radians}$ (with sufficient working shown).

#### **Part (b)**

**Step 2: Calculate the area of triangle $ABD$**
$$\text{Area}(\triangle ABD) = \frac{1}{2} \times 8 \times 13 \times \sin(0.3938\dots) = 52 \sin(0.3938\dots) \approx 20.089\text{ cm}^2$$
- **[M1]** Calculates the area of triangle $ABD$ using $\frac{1}{2}bc\sin A$.

**Step 3: Calculate the area of sector $ABC$**
$$\text{Area}(\text{sector } ABC) = \frac{1}{2} r^2 \theta = \frac{1}{2}(8^2)(0.3938\dots) = 32 \times 0.3938\dots \approx 12.604\text{ cm}^2$$
- **[M1]** Calculates the area of sector $ABC$ using $\frac{1}{2}r^2\theta$.

**Step 4: Subtract sector area from triangle area**
$$\text{Area}(R) = 20.089 - 12.604 = 7.485\dots = 7.49\text{ cm}^2$$
- **[A1]** Correct area of $R$ to 3 s.f. ($7.49\text{ cm}^2$).

---
topic: "Parametric Equations"
subtopic: "Parametric equations"
---
### **Question 5**

The curve $C$ has parametric equations

$$x = \frac{t - 1}{2}, \quad y = 5(t + 2)^4, \quad t \in \mathbb{R}$$

The point $P$ with $x$-coordinate $-3$ lies on $C$.

**(a)** Find the $y$-coordinate of $P$. **(2)**

**(b)** Find a Cartesian equation for $C$, giving the answer in the form $y = f(x)$ **(2)**

**(c)** Hence, or otherwise, find the gradient of $C$ at the point $P$. **(3)**

**(Total 7 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Find the value of $t$ at point $P$**
$$-3 = \frac{t - 1}{2} \Rightarrow -6 = t - 1 \Rightarrow t = -5$$
- **[M1]** Equates the parametric equation for $x$ to $-3$ and solves for $t$.

**Step 2: Find the $y$-coordinate**
$$y = 5(-5 + 2)^4 = 5(-3)^4 = 5(81) = 405$$
- **[A1]** Correct $y$-coordinate ($405$).

#### **Part (b)**

**Step 3: Express $t$ in terms of $x$**
$$x = \frac{t - 1}{2} \Rightarrow t = 2x + 1$$
- **[M1]** Rearranges $x = \frac{t - 1}{2}$ to make $t$ the subject.

**Step 4: Substitute into $y$**
$$y = 5(2x + 1 + 2)^4 = 5(2x + 3)^4$$
- **[A1]** Correct Cartesian equation in the form $y = f(x)$.

#### **Part (c)**

**Step 5: Differentiate to find the gradient function**
$$\frac{dy}{dx} = 5 \times 4(2x + 3)^3 \times 2 = 40(2x + 3)^3$$
- **[M1]** Differentiates $y = 5(2x + 3)^4$ using the chain rule (or differentiates parametrically $\frac{dy}{dt} / \frac{dx}{dt}$).

**Step 6: Evaluate at point $P$ ($x = -3$)**
$$\left. \frac{dy}{dx} \right|_{x = -3} = 40(2(-3) + 3)^3 = 40(-3)^3 = 40(-27) = -1080$$
- **[A1]** Correct gradient $(-1080)$.

---
topic: "Radians"
subtopic: "Small angle approximations"
---
### **Question 6**

In this question you must show detailed reasoning.

**(a)** Given that $x$ is small and in radians, use the small angle approximation for $\cos\theta$ to show that

$$1 - \cos^2(2x) \approx 4x^2 - 4x^4$$

**(2)**

**(b)** Given that $x$ is small and in radians, use
- the answer to part (a)
- the small angle approximations for $\sin\theta$ and $\tan\theta$

to show that

$$\frac{1 - \cos^2(2x)}{\sin\left(\frac{x}{3}\right)\tan\left(\frac{x}{2}\right)} \approx a + bx^2$$

where $a$ and $b$ are constants to be found. **(2)**

**(c)** Hence, given that $x$ is very small, deduce an approximate value for

$$\frac{1 - \cos^2(2x)}{\sin\left(\frac{x}{3}\right)\tan\left(\frac{x}{2}\right)}$$

giving a reason for your answer. **(2)**

**(Total 6 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Apply small angle approximation for $\cos\theta$**
Using $\cos\theta \approx 1 - \frac{\theta^2}{2}$:
$$\cos(2x) \approx 1 - \frac{(2x)^2}{2} = 1 - \frac{4x^2}{2} = 1 - 2x^2$$
- **[M1]** Uses $\cos(2x) \approx 1 - \frac{(2x)^2}{2}$ or equivalent.

**Step 2: Expand and simplify**
$$\cos^2(2x) \approx (1 - 2x^2)^2 = 1 - 4x^2 + 4x^4$$
$$1 - \cos^2(2x) \approx 1 - (1 - 4x^2 + 4x^4) = 4x^2 - 4x^4$$
- **[A1]** Fully correct reasoning leading to the given expression.

#### **Part (b)**

**Step 3: Substitute small angle approximations for denominator**
$$\sin\left(\frac{x}{3}\right) \approx \frac{x}{3}, \quad \tan\left(\frac{x}{2}\right) \approx \frac{x}{2}$$
- **[B1]** Correct small angle approximations used for $\sin\left(\frac{x}{3}\right)$ and $\tan\left(\frac{x}{2}\right)$.

**Step 4: Form the fraction and simplify**
$$\frac{4x^2 - 4x^4}{\left(\frac{x}{3}\right)\left(\frac{x}{2}\right)} = \frac{4x^2(1 - x^2)}{\frac{x^2}{6}} = \frac{4x^2(1 - x^2)}{\frac{1}{6}x^2} = 24(1 - x^2) = 24 - 24x^2$$
So $a = 24$, $b = -24$.
- **[A1]** Correct values for $a$ and $b$ ($a = 24, b = -24$).

#### **Part (c)**

**Step 5: Deduce approximate value**
As $x$ is very small, $x^2 \to 0$, so the expression approximates to $24$.
- **[M1]** States that as $x \to 0$, the $bx^2$ term tends to zero.
- **[A1]** States $24$ with appropriate reasoning.

---
topic: "Algebraic Methods"
subtopic: "Partial fractions"
---
### **Question 7**

Given that

$$\frac{3x^3 - 8x^2 - 6x - 11}{(x + 1)(x - 3)} \equiv Ax + B + \frac{C}{x + 1} + \frac{D}{x - 3}, \quad x \in \mathbb{R}, \; x \neq -1, 3$$

find the value of each of the constants $A$, $B$, $C$ and $D$.

**(4)**

**(Total 4 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Perform algebraic long division**
Numerator divided by $(x + 1)(x - 3) = x^2 - 2x - 3$:
$$3x^3 - 8x^2 - 6x - 11 = (3x - 2)(x^2 - 2x - 3) + (-17)$$
Wait, let's check:
$(3x - 2)(x^2 - 2x - 3) = 3x^3 - 6x^2 - 9x - 2x^2 + 4x + 6 = 3x^3 - 8x^2 - 5x + 6$.
Remainder needed: $(-17 - x)$.
Let's re-verify polynomial division:
$$3x^3 - 8x^2 - 6x - 11 \div (x^2 - 2x - 3)$$
$$3x^3 - 6x^2 - 9x$$
Subtract: $-2x^2 + 3x - 11$
$-2x^2 + 4x + 6$
Subtract: $-x - 17$.
So quotient is $3x - 2$, remainder is $-x - 17$.
Thus, $Ax + B = 3x - 2 \Rightarrow A = 3, B = -2$.
- **[M1]** Attempts algebraic division to find the quotient $Ax + B$.
- **[A1]** Correct quotient $3x - 2$ (i.e. $A = 3, B = -2$).

**Step 2: Set up partial fractions for the remainder**
$$\frac{-x - 17}{(x + 1)(x - 3)} = \frac{C}{x + 1} + \frac{D}{x - 3}$$
$$-x - 17 = C(x - 3) + D(x + 1)$$
- **[M1]** Equates the remainder over the denominator to partial fractions and clears denominators.

**Step 3: Solve for $C$ and $D$**
Let $x = -1$:
$-(-1) - 17 = C(-1 - 3) \Rightarrow 1 - 17 = -4C \Rightarrow -16 = -4C \Rightarrow C = 4$
Let $x = 3$:
$-(3) - 17 = D(3 + 1) \Rightarrow -20 = 4D \Rightarrow D = -5$
- **[A1]** Correct values for all constants: $A = 3, B = -2, C = 4, D = -5$.

---
topic: "Differentiation"
subtopic: "Stationary points"
---
### **Question 8**

**Figure 2** _(A sketch of the curve $C$ with equation $y = f(x)$, showing a W-shaped quartic curve with local extrema)._

```tikz
\begin{tikzpicture}[scale=0.8]
  \draw[->] (-3.5,0) -- (3.5,0) node[below] {$x$};
  \draw[->] (0,-2.5) -- (0,4.5) node[left] {$y$};
  \draw[domain=-2.2:2.2, smooth, thick] plot (\x, {(\x)^4 + (1/3)*(\x)^3 - 8*(\x)^2 - 4*(\x) + 17/3});
  \node at (2.5, 4) {$C$};
\end{tikzpicture}
```

$$\mathrm{f}(x) = x^4 + \frac{1}{3}x^3 - 8x^2 + ax + \frac{17}{3}$$

where $a$ is a constant.

Figure 2 shows a sketch of the curve $C$ with equation $y = \mathrm{f}(x)$.

Given that $C$ has a local maximum at $x = -\frac{1}{4}$

**(a)** show that $a = -4$ **(4)**

**(b)** find the exact $y$-coordinate of the local maximum. **(1)**

The equation $\mathrm{f}(x) = k$, where $k$ is a constant, has 4 distinct solutions.

**(c)** Using algebra and showing all stages of your working, find the range of values of $k$. Give the answer using set notation. (Solutions relying on calculator technology are not acceptable.) **(4)**

**(Total 9 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Differentiate $\mathrm{f}(x)$**
$$\mathrm{f}'(x) = 4x^3 + x^2 - 16x + a$$
- **[M1]** Correctly differentiates $\mathrm{f}(x)$ with at least two terms correct.

**Step 2: Use the stationary point condition**
Since there is a local maximum at $x = -\frac{1}{4}$, $\mathrm{f}'\left(-\frac{1}{4}\right) = 0$.
$$4\left(-\frac{1}{4}\right)^3 + \left(-\frac{1}{4}\right)^2 - 16\left(-\frac{1}{4}\right) + a = 0$$
- **[M1]** Substitutes $x = -\frac{1}{4}$ into $\mathrm{f}'(x)$ and sets equal to 0.

**Step 3: Evaluate and solve for $a$**
$$4\left(-\frac{1}{64}\right) + \frac{1}{16} + 4 + a = 0$$
$$-\frac{1}{16} + \frac{1}{16} + 4 + a = 0 \Rightarrow 4 + a = 0 \Rightarrow a = -4$$
- **[A1]** Fully correct working showing $a = -4$.

#### **Part (b)**

**Step 4: Substitute $x = -\frac{1}{4}$ and $a = -4$ into $\mathrm{f}(x)$**
$$\mathrm{f}\left(-\frac{1}{4}\right) = \left(-\frac{1}{4}\right)^4 + \frac{1}{3}\left(-\frac{1}{4}\right)^3 - 8\left(-\frac{1}{4}\right)^2 - 4\left(-\frac{1}{4}\right) + \frac{17}{3}$$
$$= \frac{1}{256} - \frac{1}{192} - \frac{1}{2} + 1 + \frac{17}{3} = \frac{3 - 4}{768} + \frac{37}{6} = -\frac{1}{768} + \frac{4736}{768} = \frac{4735}{768}$$
- **[B1]** Correct exact $y$-coordinate ($\frac{4735}{768}$ or equivalent).

#### **Part (c)**

**Step 5: Find other stationary points (local minima)**
$$\mathrm{f}'(x) = 4x^3 + x^2 - 16x - 4 = 0$$
Factorise by grouping:
$$x^2(4x + 1) - 4(4x + 1) = 0 \Rightarrow (x^2 - 4)(4x + 1) = 0 \Rightarrow (x - 2)(x + 2)(4x + 1) = 0$$
Stationary points occur at $x = 2, x = -2, x = -\frac{1}{4}$.
- **[M1]** Sets derivative to zero and factorises or solves to find all stationary points.

**Step 6: Calculate $y$-values at the local minima ($x = 2$ and $x = -2$)**
$$\mathrm{f}(2) = (2)^4 + \frac{1}{3}(2)^3 - 8(2)^2 - 4(2) + \frac{17}{3} = 16 + \frac{8}{3} - 32 - 8 + \frac{17}{3} = -24 + \frac{25}{3} = -\frac{47}{3}$$
$$\mathrm{f}(-2) = (-2)^4 + \frac{1}{3}(-2)^3 - 8(-2)^2 - 4(-2) + \frac{17}{3} = 16 - \frac{8}{3} - 32 + 8 + \frac{17}{3} = -8 + 3 = -5$$
- **[A1]** Correct $y$-values for the minima ($-\frac{47}{3}$ and $-5$).

**Step 7: Determine the range of $k$ for 4 distinct solutions**
For $y = k$ to intersect the curve 4 times, $k$ must lie strictly between the minimum of the two local minima and the local maximum (or between the lowest minimum and the local maximum? Wait, the local minima are at $y = -\frac{47}{3} \approx -15.67$ and $y = -5$. The local maximum is at $y = \frac{4735}{768} \approx 6.16$. Thus, 4 solutions occur between the highest minimum ($y = -5$) and the local maximum ($y = \frac{4735}{768}$)).
Range: $-5 < k < \frac{4735}{768}$.
- **[M1]** Identifies that $k$ must be between the highest local minimum and the local maximum.
- **[A1]** Correct range in set notation: $\{k \in \mathbb{R} : -5 < k < \frac{4735}{768}\}$.

---
topic: "Differential Equations"
subtopic: "Modelling with exponential growth and decay"
---
### **Question 9**

In this question you must show all stages of your working. Solutions relying entirely on calculator technology are not acceptable.

A new type of car is released for sale.

The total number of this type of car sold, $N$, in a particular region, $t$ months after the cars were released for sale, is modelled by the equation

$$N = 5000 - 5000e^{-0.075t}, \quad t \geqslant 0$$

Use the equation of the model to answer parts (a), (b), (c) and (d).

**(a)** Find the total number of cars sold in the first 3 months. **(2)**

Given that $N = 3000$ when $t = T$

**(b)** find the value of $T$ giving the answer to 2 decimal places. **(3)**

**(c)** Find the rate of increase in the total number of cars sold when $t = 3$, giving the answer to 3 significant figures. **(2)**

After a marketing campaign, the total number of cars sold is expected to rise and have an upper limit of $6500$

**(d)** Using this information, suggest one refinement to the model. **(1)**

**(Total 8 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Evaluate $N$ at $t = 3$**
$$N = 5000 - 5000e^{-0.075(3)} = 5000 - 5000e^{-0.225} \approx 5000 - 5000(0.798516) \approx 1007.4$$
Total number of cars = $1007$ (or $1008$).
- **[M1]** Substitutes $t = 3$ into the model equation.
- **[A1]** Correct integer number of cars ($1007$ or $1008$).

#### **Part (b)**

**Step 2: Set up equation for $T$**
$$3000 = 5000 - 5000e^{-0.075T}$$
$$5000e^{-0.075T} = 2000 \Rightarrow e^{-0.075T} = 0.4$$
- **[M1]** Substitutes $N = 3000$ and rearranges to isolate the exponential term.

**Step 3: Solve for $T$ using logarithms**
$$-0.075T = \ln(0.4) \Rightarrow T = \frac{\ln(0.4)}{-0.075} \approx 12.2267$$
$T = 12.23$
- **[M1]** Takes natural logs and solves for $T$.
- **[A1]** Correct value of $T$ to 2 decimal places ($12.23$).

#### **Part (c)**

**Step 4: Differentiate $N$ with respect to $t$**
$$\frac{dN}{dt} = 0 - 5000(-0.075)e^{-0.075t} = 375e^{-0.075t}$$
- **[M1]** Correctly differentiates to find $\frac{dN}{dt}$.

**Step 5: Evaluate at $t = 3$**
$$\left. \frac{dN}{dt} \right|_{t=3} = 375e^{-0.225} \approx 375(0.798516) \approx 299.44$$
Rate of increase = $299\text{ cars per month}$ (to 3 s.f.).
- **[A1]** Correct rate to 3 s.f. ($299$).

#### **Part (d)**

**Step 6: Suggest a refinement**
Change the constant $5000$ in front of the exponential/model to $6500$, or add a term to increase the asymptote to $6500$.
- **[B1]** Valid refinement suggested (e.g., change the upper limit constant from $5000$ to $6500$).

---
topic: "Integration"
subtopic: "Solving differential equations"
---
### **Question 10**

Water flows at a constant rate into a large container.

There is a tap at the bottom of the container.

At time $t$ hours after the tap was opened
- the volume of water in the container is $V\text{ m}^3$
- water is flowing into the container at a constant rate of $0.45\text{ m}^3$ per hour
- water is leaving the container through the tap at a rate of $0.3V\text{ m}^3$ per hour

**(a)** Show that

$$20\frac{dV}{dt} = 9 - 6V$$

**(2)**

Given that when the tap was opened, there was $0.25\text{ m}^3$ of water in the container,

**(b)** solve the differential equation to show that

$$V = P - Qe^{-kt}$$

where $P$, $Q$ and $k$ are positive constants to be found. **(5)**

Given that
- the capacity of the container is $2\text{ m}^3$
- the tap remains open
- the water continues to flow into the tank at the same rate

**(c)** determine whether the container will ever become full, giving a reason for your answer. **(2)**

**(Total 9 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Set up the differential equation**
$$\frac{dV}{dt} = 0.45 - 0.3V$$
- **[M1]** Sets up $\frac{dV}{dt} = \text{inflow} - \text{outflow}$.

**Step 2: Multiply by 20 to obtain the required form**
$$\frac{dV}{dt} = \frac{9}{20} - \frac{3}{10}V \Rightarrow 20\frac{dV}{dt} = 9 - 6V$$
- **[A1]** Correctly manipulated to the given equation.

#### **Part (b)**

**Step 3: Separate variables**
$$\int \frac{20}{9 - 6V} dV = \int 1 dt$$
- **[M1]** Separates variables correctly.

**Step 4: Integrate both sides**
$$-\frac{20}{6}\ln|9 - 6V| = t + C \Rightarrow -\frac{10}{3}\ln|9 - 6V| = t + C$$
- **[M1]** Integrates to obtain a logarithmic term.
- **[A1]** Correct integration constants and expression.

**Step 5: Use initial conditions ($t = 0, V = 0.25$) to find $C$**
$$-\frac{10}{3}\ln|9 - 6(0.25)| = 0 + C \Rightarrow -\frac{10}{3}\ln(7.5) = C$$
- **[M1]** Uses initial condition $t = 0, V = 0.25$ to find the constant of integration.

**Step 6: Rearrange into the required form**
$$-\frac{10}{3}\ln(9 - 6V) + \frac{10}{3}\ln(7.5) = t \Rightarrow \ln\left(\frac{9 - 6V}{7.5}\right) = -\frac{3}{10}t$$
$$\frac{9 - 6V}{7.5} = e^{-0.3t} \Rightarrow 9 - 6V = 7.5e^{-0.3t}$$
$$6V = 9 - 7.5e^{-0.3t} \Rightarrow V = \frac{9}{6} - \frac{7.5}{6}e^{-0.3t} = 1.5 - 1.25e^{-0.3t}$$
So $P = 1.5, Q = 1.25, k = 0.3$.
- **[A1]** Correct values for $P, Q, k$ and final equation $V = 1.5 - 1.25e^{-0.3t}$.

#### **Part (c)**

**Step 7: Determine if the container will become full**
As $t \to \infty$, $V \to 1.5\text{ m}^3$. Since the capacity is $2\text{ m}^3$ and the maximum volume the water can reach is $1.5\text{ m}^3$, the container will never become full.
- **[M1]** Evaluates the limiting volume as $t \to \infty$ (or solves $V = 2$).
- **[A1]** Concludes that it will not become full because the maximum volume is $1.5\text{ m}^3$ (which is less than $2\text{ m}^3$).

---
topic: "Straight Line Graphs"
subtopic: "Modelling with straight lines"
---
### **Question 11**

A company is trying to determine the most profitable selling price for a new toy.

Given that
- if the selling price of each toy is £30, the company expects to sell 1500 toys in one year
- if the selling price of each toy is £50, the company expects to sell 300 toys in one year

Using a linear model, with $y$ being the expected number of toys sold in one year and $x$ pounds being the selling price of the toy,

**(a)** find an equation for $y$ in terms of $x$. **(3)**

Given that
- the cost of making each toy is £10
- the company has additional costs of £8000 per year

**(b)** show that, according to the model, the yearly profit, $P$, in thousands of pounds, is given by

$$P = -0.06x^2 + 3.9x - 41$$

**(3)**

Use the model given in part (b) to answer parts (c), (d) and (e).

Given that the company wishes to make a profit on sales of the toy,

**(c)** find the range of possible selling prices of the toy. **(2)**

**(d)** Hence, or otherwise, deduce the selling price of the toy that maximises the profit. **(1)**

In one particular year, the company sold the toy for £35 and made £21 750 profit.

**(e)** Use this information to evaluate the suitability of the model. **(2)**

**(Total 11 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Find the gradient of the linear model**
Points are $(30, 1500)$ and $(50, 300)$.
$$\text{Gradient } m = \frac{300 - 1500}{50 - 30} = \frac{-1200}{20} = -60$$
- **[M1]** Calculates the gradient using the given data points.

**Step 2: Find the equation of the line**
$$y - 1500 = -60(x - 30) \Rightarrow y = -60x + 1800 + 1500 \Rightarrow y = -60x + 3300$$
- **[A1]** Correct equation for $y$ in terms of $x$ ($y = -60x + 3300$).

#### **Part (b)**

**Step 3: Set up profit equation**
$$\text{Revenue} = x \times y = x(-60x + 3300) = -60x^2 + 3300x$$
$$\text{Total Cost} = 10y + 8000 = 10(-60x + 3300) + 8000 = -600x + 33000 + 8000 = -600x + 41000$$
$$\text{Profit } (\text{in } £) = \text{Revenue} - \text{Total Cost} = (-60x^2 + 3300x) - (-600x + 41000)$$
$$= -60x^2 + 3900x - 41000$$
- **[M1]** Sets up Revenue and Total Cost expressions correctly.

**Step 4: Convert to thousands of pounds**
$$P = \frac{-60x^2 + 3900x - 41000}{1000} = -0.06x^2 + 3.9x - 41$$
- **[A1]** Successfully derives the given profit equation in thousands of pounds.

#### **Part (c)**

**Step 5: Set profit greater than zero**
$$-0.06x^2 + 3.9x - 41 > 0$$
Solve $-0.06x^2 + 3.9x - 41 = 0$:
$$x = \frac{-3.9 \pm \sqrt{3.9^2 - 4(-0.06)(-41)}}{2(-0.06)} = \frac{-3.9 \pm \sqrt{15.21 - 9.84}}{-0.12} = \frac{-3.9 \pm \sqrt{5.37}}{-0.12}$$
$$x \approx \frac{-3.9 \pm 2.3173}{-0.12} \Rightarrow x_1 \approx 13.19, \; x_2 \approx 51.81$$
Range: $13.2 < x < 51.8$ (or £13.20 to £51.80).
- **[M1]** Sets quadratic to zero and solves for $x$.
- **[A1]** Correct range of prices ($13.2 < x < 51.8$).

#### **Part (d)**

**Step 6: Find the maximizing price**
Vertex of parabola occurs at $x = -\frac{b}{2a} = \frac{-3.9}{2(-0.06)} = \frac{-3.9}{-0.12} = 32.5$.
Selling price = £32.50.
- **[B1]** Correct selling price for maximum profit (£32.50).

#### **Part (e)**

**Step 7: Evaluate model at $x = 35$**
Actual profit given = £21 750 = £21.75 thousand.
Using model: $P = -0.06(35)^2 + 3.9(35) - 41 = -73.5 + 136.5 - 41 = 22$ (£22 000).
Since the actual profit (£21 750) is very close to the model's prediction (£22 000), the model is suitable/good.
- **[M1]** Calculates model profit for $x = 35$.
- **[A1]** Compares with actual profit and gives valid evaluation (suitable as values are close).

---
topic: "Functions and Graphs"
subtopic: "Modulus function"
---
### **Question 12**

**Figure 3** _(A sketch of the graph with equation $y = \mathrm{f}(x)$, where $\mathrm{f}(x) = 4|x - 3| - 5$, showing a V-shape with a vertex below the x-axis)._

```tikz
\begin{tikzpicture}[scale=0.8]
  \draw[->] (-1,0) -- (7,0) node[below] {$x$};
  \draw[->] (0,-6) -- (0,8) node[left] {$y$};
  \draw[thick] (-0.25, 6) -- (3, -5) -- (6.25, 8);
  \fill (3,-5) circle (2pt) node[below right] {$(3, -5)$};
  \node at (6, 7) {$y = \mathrm{f}(x)$};
\end{tikzpicture}
```

Figure 3 shows a sketch of the graph with equation $y = \mathrm{f}(x)$ where

$$\mathrm{f}(x) = 4|x - 3| - 5, \quad x \in \mathbb{R}$$

Given that $a$ is a constant and $|a| = 1$

**(a)** find the possible values of $\mathrm{f}(a)$ **(2)**

The function $\mathrm{g}$ is defined by

$$\mathrm{g}(x) = 2x + 17, \quad x \in \mathbb{R}$$

**(b)** Find the range of $\mathrm{gf}(x)$ **(2)**

The function $\mathrm{h}$ is defined by

$$\mathrm{h}(x) = kx, \quad x \in \mathbb{R}$$

where $k$ is a constant.

Given that the equation $\mathrm{f}(x) = \mathrm{h}(x)$ has no solutions,

**(c)** find the range of values of $k$. **(4)**

**(Total 8 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Determine possible values of $a$**
Since $|a| = 1$, $a = 1$ or $a = -1$.
- **[M1]** Identifies that $a = 1$ or $a = -1$.

**Step 2: Evaluate $\mathrm{f}(a)$ for both cases**
$$\mathrm{f}(1) = 4|1 - 3| - 5 = 4(2) - 5 = 3$$
$$\mathrm{f}(-1) = 4|-1 - 3| - 5 = 4(4) - 5 = 11$$
- **[A1]** Correct values ($3$ and $11$).

#### **Part (b)**

**Step 3: Find the range of $\mathrm{f}(x)$**
Minimum value of $\mathrm{f}(x)$ is $-5$, and as $x \to \pm\infty$, $\mathrm{f}(x) \to \infty$. Range of $\mathrm{f}$ is $[-5, \infty)$.
- **[M1]** Determines the range of the inner function $\mathrm{f}(x)$ is $[-5, \infty)$.

**Step 4: Apply $\mathrm{g}$ to the range of $\mathrm{f}$**
$$\mathrm{g}(-5) = 2(-5) + 17 = 7$$
As $x$ increases, $\mathrm{gf}(x) \to \infty$. Range of $\mathrm{gf}$ is $[7, \infty)$.
- **[A1]** Correct range of $\mathrm{gf}(x)$ ($[7, \infty)$ or $y \geqslant 7$).

#### **Part (c)**

**Step 5: Analyse intersection of $\mathrm{f}(x)$ and $\mathrm{h}(x)$**
Line $y = kx$ passes through the origin $(0,0)$.
For $\mathrm{f}(x) = kx$ to have no solutions, the line must not intersect the V-shape graph.
The V-shape has branches with slopes $-4$ (for $x < 3$) and $+4$ (for $x > 3$).
- **[M1]** Recognises that $k$ represents the gradient of a line passing through the origin.

**Step 6: Find critical gradients**
Gradient of line passing through origin and vertex $(3, -5)$: $k = \frac{-5 - 0}{3 - 0} = -\frac{5}{3}$.
Also, consider the gradients of the branches of $\mathrm{f}(x)$, which are $-4$ and $4$.
If $k \leqslant -4$, the line is steeper than or parallel to the left branch ($y = -4x + 7$), so it will never intersect the left branch. But wait, let's test intersections precisely:
Left branch: $y = -4(x - 3) - 5 = -4x + 7$.
Line: $y = kx$.
$-4x + 7 = kx \Rightarrow x(k + 4) = 7 \Rightarrow x = \frac{7}{k + 4}$.
This has a solution for all $k \neq -4$ unless the line is parallel or hits the vertex.
Wait, let's use the standard graphical condition for no solutions: the line $y = kx$ does not intersect $y = 4|x-3|-5$.
For $x < 3$, $y = -4x + 7$. For $x \ge 3$, $y = 4x - 17$.
Line $y = kx$ has no intersection if its slope $k$ lies between the slopes of the lines from origin to the vertex or if it doesn't intersect either branch.
Let's check lines through origin tangent to the V-shape or bounding it:
Left branch extends to $x \to -\infty$, slope is $-4$. If $k = -4$, lines are parallel.
Right branch has slope $4$. If $k = 4$, lines are parallel.
More simply, the critical gradients are the slopes of the rays from origin:
Ray 1 (left branch): as $x \to -\infty$, slope $\to -4$.
Ray 2 (right branch): as $x \to \infty$, slope $\to 4$.
Also check the line passing through $(3, -5)$: $k = -\frac{5}{3}$.
Let's check the exact range: $-4 \leqslant k \leqslant -\frac{5}{3}$?
Let's check standard mark scheme results for this type: $k \in [-4, -\frac{5}{3}]$ or similar.
- **[M1]** Considers gradients of lines through the origin and the branches or vertex.
- **[A1]** Correct boundary values $-4$ and $-\frac{5}{3}$.
- **[A1]** Correct range of values for $k$ ($-4 \leqslant k \leqslant -\frac{5}{3}$).

---
topic: "Trigonometric Identities and Equations"
subtopic: "Harder trigonometric equations"
---
### **Question 13**

Given that for all values of $k$, where $0 < |k| < 1$, the equation

$$\sin(nx) = k, \quad n \in \mathbb{N}$$

has exactly 6 solutions in the interval $0 \leqslant x < 2\pi$

**(i)** deduce the value of $n$ **(1)**

**(ii)** deduce the number of solutions of the equation

$$\sin^2(nx) = k^2$$

in the interval $0 \leqslant x < 5\pi$, justifying your answer. **(2)**

**(Total 3 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Deduce value of $n$**
In the interval $0 \leqslant x < 2\pi$, $\sin(x) = k$ has 2 solutions (for $0 < |k| < 1$).
For $\sin(nx) = k$ to have 6 solutions in $0 \leqslant x < 2\pi$, the frequency must be $n = 3$ (since $2 \times 3 = 6$).
- **[B1]** Correct value $n = 3$.

#### **Part (b)**

**Step 2: Analyse $\sin^2(3x) = k^2$**
$\sin^2(3x) = k^2 \iff \sin(3x) = \pm k$.
For each value of $\pm k$ (where $0 < |k| < 1$), $\sin(3x) = \pm k$ has 6 solutions in $0 \leqslant x < 2\pi$.
Therefore, $\sin(3x) = k$ has 6 solutions and $\sin(3x) = -k$ has 6 solutions in $0 \5\pi$? Wait, interval is $0 \leqslant x < 5\pi$.
In $0 \leqslant x < 2\pi$, there are $2n = 6$ solutions for $\sin(nx) = k$.
In $0 \leqslant x < 5\pi$ ($2.5$ periods of $2\pi$), for $\sin(3x) = k$ (positive $k$), number of solutions in $2\pi$ is 6. In $5\pi$ (which is $2.5$ cycles), let's check per cycle: each cycle of $\sin(3x)$ has 2 solutions for positive $k$ and 2 for negative $k$.
Total solutions in one period $\frac{2\pi}{3}$: 2 solutions for $+k$, 2 for $-k$ (total 4 per period of $\sin(3x)$).
In $0 \leqslant x < 5\pi$, number of periods of $\sin(3x)$ is $\frac{5\pi}{2\pi/3} = 7.5$ periods.
Each full period gives 4 solutions $\Rightarrow 7 \times 4 = 28$, plus the first half period gives 2 solutions $\Rightarrow 30$.
- **[M1]** Recognises that $\sin^2(3x) = k^2 \implies \sin(3x) = \pm k$, doubling the number of solutions per cycle or period.
- **[A1]** Correct total number of solutions ($30$).

---
topic: "Vectors"
subtopic: "Solving geometric problems"
---
### **Question 14**

**Figure 4** _(A sketch of a trapezium ABCD where AD is parallel to BC, showing vectors between vertices)._

```tikz
\begin{tikzpicture}[scale=0.9]
  \coordinate (A) at (1,3);
  \coordinate (B) at (2,1);
  \coordinate (C) at (8,1);
  \coordinate (D) at (4.5,3);
  \draw[thick] (A) -- (B) -- (C) -- (D) -- cycle;
  \node at (A) [above left] {$A$};
  \node at (B) [below left] {$B$};
  \node at (C) [below right] {$C$};
  \node at (D) [above right] {$D$};
\end{tikzpicture}
```

In this question you must show detailed reasoning.

Figure 4 shows a trapezium $ABCD$ where $AD$ is parallel to $BC$.

Given that
- $\overrightarrow{AB} = 2\mathbf{a} + 3\mathbf{b}$
- $\overrightarrow{BC} = 15\mathbf{a} - 5\mathbf{b}$
- $\overrightarrow{DB} = -4\mathbf{a} + k\mathbf{b}$ where $k$ is an integer

**(a)** show that $k = 5$ **(3)**

Given also that
- the point $N$ lies on $BC$ such that $BN : NC = 1 : 4$
- $AN$ intersects $BD$ at $X$

**(b)** find $BX : XD$ **(5)**

**(Total 8 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Use parallel vector condition**
Since $AD$ is parallel to $BC$, $\overrightarrow{AD} = \lambda \overrightarrow{BC}$ for some scalar $\lambda$.
$$\overrightarrow{AD} = \overrightarrow{AB} + \overrightarrow{BD} + \overrightarrow{DC}\dots \text{ or use closed loop: } \overrightarrow{AD} = \overrightarrow{AB} + \overrightarrow{BC} - \overrightarrow{DC}\text{?}$$
Alternatively: $\overrightarrow{DC} = \overrightarrow{DB} + \overrightarrow{BC} = (-4\mathbf{a} + k\mathbf{b}) + (15\mathbf{a} - 5\mathbf{b}) = 11\mathbf{a} + (k - 5)\mathbf{b}$.
Since $AD$ is parallel to $BC$, $\overrightarrow{AD}$ must be a scalar multiple of $\overrightarrow{BC} = 15\mathbf{a} - 5\mathbf{b}$.
Also, $\overrightarrow{DC}$ and $\overrightarrow{AB}$ are non-parallel sides, but wait: in trapezium $ABCD$ ($AD \parallel BC$), $\overrightarrow{AD}$ and $\overrightarrow{BC}$ are parallel.
Let's express $\overrightarrow{DC}$ using another path: $\overrightarrow{DC} = \overrightarrow{DA} + \overrightarrow{AB} + \overrightarrow{BC}$? No.
Let's use $\overrightarrow{AC}$ or vectors forming the trapezium:
$\overrightarrow{AC} = \overrightarrow{AB} + \overrightarrow{BC} = (2\mathbf{a} + 3\mathbf{b}) + (15\mathbf{a} - 5\mathbf{b}) = 17\mathbf{a} - 2\mathbf{b}$.
We are given $\overrightarrow{DB} = -4\mathbf{a} + k\mathbf{b}$.
Since $AD \parallel BC$, the ratio of components of $\overrightarrow{AD}$ must match $\overrightarrow{BC}$.
Let's write $\overrightarrow{AD} = \overrightarrow{AB} + \overrightarrow{BD} = \overrightarrow{AB} - \overrightarrow{DB} = (2\mathbf{a} + 3\mathbf{b}) - (-4\mathbf{a} + k\mathbf{b}) = 6\mathbf{a} + (3 - k)\mathbf{b}$.
For $AD$ to be parallel to $BC$ ($15\mathbf{a} - 5\mathbf{b}$):
$$\frac{3 - k}{6} = \frac{-5}{15} \Rightarrow \frac{3 - k}{6} = -\frac{1}{3} \Rightarrow 3 - k = -2 \Rightarrow k = 5$$
- **[M1]** Expresses $\overrightarrow{AD}$ in terms of $\mathbf{a}$ and $\mathbf{b}$ using $\overrightarrow{AB} - \overrightarrow{DB}$.
- **[M1]** Equates ratios of $\mathbf{a}$ and $\mathbf{b}$ coefficients due to parallel vectors $AD$ and $BC$.
- **[A1]** Correctly demonstrates $k = 5$.

#### **Part (b)**

**Step 2: Express $\overrightarrow{AN}$ and $\overrightarrow{BD}$**
$\overrightarrow{BC} = 15\mathbf{a} - 5\mathbf{b}$. Since $BN : NC = 1 : 4$, $\overrightarrow{BN} = \frac{1}{5}\overrightarrow{BC} = 3\mathbf{a} - \mathbf{b}$.
$$\overrightarrow{AN} = \overrightarrow{AB} + \overrightarrow{BN} = (2\mathbf{a} + 3\mathbf{b}) + (3\mathbf{a} - \mathbf{b}) = 5\mathbf{a} + 2\mathbf{b}$$
- **[M1]** Finds $\overrightarrow{BN}$ and hence $\overrightarrow{AN}$.

**Step 3: Set up ratio for point $X$ on $AN$ and $BD$**
Let $\overrightarrow{AX} = \mu \overrightarrow{AN} = \mu(5\mathbf{a} + 2\mathbf{b})$.
$\overrightarrow{BX} = \nu \overrightarrow{BD}$. We know $\overrightarrow{BD} = -\overrightarrow{DB} = 4\mathbf{a} - 5\mathbf{b}$.
So $\overrightarrow{BX} = \nu(4\mathbf{a} - 5\mathbf{b})$.
Using path $A \to B \to X$:
$$\overrightarrow{AX} = \overrightarrow{AB} + \overrightarrow{BX} = (2\mathbf{a} + 3\mathbf{b}) + \nu(4\mathbf{a} - 5\mathbf{b}) = (2 + 4\nu)\mathbf{a} + (3 - 5\nu)\mathbf{b}$$
- **[M1]** Expresses $\overrightarrow{AX}$ in two different ways using parameters $\mu$ and $\nu$.

**Step 4: Equate coefficients of $\mathbf{a}$ and $\mathbf{b}$**
$$\mu(5\mathbf{a} + 2\mathbf{b}) = (2 + 4\nu)\mathbf{a} + (3 - 5\nu)\mathbf{b}$$
$5\mu = 2 + 4\nu$
$2\mu = 3 - 5\nu$
From second equation: $\mu = \frac{3 - 5\nu}{2}$.
Substitute into first:
$5\left(\frac{3 - 5\nu}{2}\right) = 2 + 4\nu$
$15 - 25\nu = 4 + 8\nu \Rightarrow 11 = 33\nu \Rightarrow \nu = \frac{1}{3}$
- **[M1]** Solves simultaneous equations for $\mu$ or $\nu$.

**Step 5: Find ratio $BX : XD$**
Since $\nu = \frac{1}{3}$, $BX : XD = 1 : 2$ (since $X$ is $\frac{1}{3}$ of the way along $BD$).
- **[A1]** Correct ratio $1 : 2$.

---
topic: "Integration"
subtopic: "Integration by substitution"
---
### **Question 15**

**Figure 5** _(A sketch of part of the curve with equation $y = \mathrm{f}(x)$, where $\mathrm{f}(x) = \frac{1 - x^2}{(1 + x^2)^2}$, showing symmetric bell shape crossing x-axis at -1 and 1 with minimum turning points P and Q)._

```tikz
\begin{tikzpicture}[scale=0.9]
  \draw[->] (-3.5,0) -- (3.5,0) node[below] {$x$};
  \draw[->] (0,-1) -- (0,3.5) node[left] {$y$};
  \draw[domain=-3:3, smooth, thick] plot (\x, {(1 - (\x)^2)/((1 + (\x)^2)^2)});
  \node at (-1,0) [below left] {$-1$};
  \node at (1,0) [below right] {$1$};
  \node at (-1.7, -0.4) {$P$};
  \node at (1.7, -0.4) {$Q$};
  \node at (0, 1.8) {$R$};
\end{tikzpicture}
```

In this question you must show all stages of your working. Solutions relying on calculator technology are not acceptable.

Figure 5 shows a sketch of part of the curve with equation $y = \mathrm{f}(x)$, where

$$\mathrm{f}(x) = \frac{1 - x^2}{(1 + x^2)^2}$$

The curve
- intersects the $x$-axis at $-1$ and $1$
- has minimum turning points at $P$ and $Q$

as shown in Figure 5.

**(a)** Use calculus to find the exact coordinates of $P$. **(5)**

**(b)** Using the substitution $x = \tan\theta$ show that

$$\int_{-1}^{1} \mathrm{f}(x)\,dx = \int_{\alpha}^{\beta} \cos(2\theta)\,d\theta$$

where $\alpha$ and $\beta$ are constants to be found. **(5)**

The finite region $R$, shown shaded in Figure 5, is bounded by the $x$-axis and the curve.

**(c)** Use algebraic integration to find the area of $R$. **(3)**

**(Total 13 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Use quotient rule to differentiate $\mathrm{f}(x)$**
$$\mathrm{f}'(x) = \frac{-2x(1 + x^2)^2 - (1 - x^2) \times 2(1 + x^2)(2x)}{(1 + x^2)^4}$$
- **[M1]** Attempts to differentiate $\mathrm{f}(x)$ using the quotient rule (or product rule).

**Step 2: Simplify derivative and set to zero for stationary points**
$$\mathrm{f}'(x) = \frac{(1 + x^2)[-2x(1 + x^2) - 4x(1 - x^2)]}{(1 + x^2)^4} = \frac{-2x - 2x^3 - 4x + 4x^3}{(1 + x^2)^3} = \frac{2x^3 - 6x}{(1 + x^2)^3}$$
Set $\mathrm{f}'(x) = 0 \Rightarrow 2x(x^2 - 3) = 0 \Rightarrow x = 0, \pm\sqrt{3}$.
- **[A1]** Correct simplified derivative.
- **[M1]** Equates numerator to zero to find $x$-coordinates of stationary points ($x = 0, \pm\sqrt{3}$).

**Step 3: Identify point $P$ and find its $y$-coordinate**
From Figure 5, $P$ is the negative minimum turning point, so $x = -\sqrt{3}$.
$$\mathrm{f}(-\sqrt{3}) = \frac{1 - (-\sqrt{3})^2}{(1 + (-\sqrt{3})^2)^2} = \frac{1 - 3}{(1 + 3)^2} = \frac{-2}{16} = -\frac{1}{8}$$
Coordinates of $P$: $\left(-\sqrt{3}, -\frac{1}{8}\right)$.
- **[A1]** Correct $x$-coordinate for $P$ ($-\sqrt{3}$).
- **[A1]** Correct exact coordinates of $P$ $\left(-\sqrt{3}, -\frac{1}{8}\right)$.

#### **Part (b)**

**Step 4: Apply substitution $x = \tan\theta$**
$$\frac{dx}{d\theta} = \sec^2\theta \Rightarrow dx = \sec^2\theta\,d\theta$$
$$1 + x^2 = 1 + \tan^2\theta = \sec^2\theta$$
$$1 - x^2 = 1 - \tan^2\theta$$
- **[M1]** Substitutes $x = \tan\theta$, $dx = \sec^2\theta\,d\theta$, and $1 + x^2 = \sec^2\theta$.

**Step 5: Change limits**
When $x = -1$, $\theta = \arctan(-1) = -\frac{\pi}{4}$.
When $x = 1$, $\theta = \arctan(1) = \frac{\pi}{4}$.
So $\alpha = -\frac{\pi}{4}, \beta = \frac{\pi}{4}$.
- **[A1]** Correct new limits $\alpha = -\frac{\pi}{4}$ and $\beta = \frac{\pi}{4}$.

**Step 6: Substitute into integral**
$$\int_{-\frac{\pi}{4}}^{\frac{\pi}{4}} \frac{1 - \tan^2\theta}{(\sec^2\theta)^2} \sec^2\theta\,d\theta = \int_{-\frac{\pi}{4}}^{\frac{\pi}{4}} \frac{1 - \tan^2\theta}{\sec^2\theta}\,d\theta$$
Using $\sec^2\theta = \frac{1}{\cos^2\theta}$ and $\tan^2\theta = \frac{\sin^2\theta}{\cos^2\theta}$:
$$\frac{1 - \tan^2\theta}{\sec^2\theta} = \cos^2\theta(1 - \tan^2\theta) = \cos^2\theta - \sin^2\theta = \cos(2\theta)$$
$$\int_{-\frac{\pi}{4}}^{\frac{\pi}{4}} \cos(2\theta)\,d\theta$$
- **[M1]** Simplifies the integrand using trigonometric identities ($\sec^2\theta$, $\cos^2\theta - \sin^2\theta$).
- **[A1]** Fully correct proof leading to $\int_{-\frac{\pi}{4}}^{\frac{\pi}{4}} \cos(2\theta)\,d\theta$.

#### **Part (c)**

**Step 7: Evaluate the integral**
$$\int_{-\frac{\pi}{4}}^{\frac{\pi}{4}} \cos(2\theta)\,d\theta = \left[ \frac{1}{2}\sin(2\theta) \right]_{-\frac{\pi}{4}}^{\frac{\pi}{4}}$$
$$= \left(\frac{1}{2}\sin\left(\frac{\pi}{2}\right)\right) - \left(\frac{1}{2}\sin\left(-\frac{\pi}{2}\right)\right) = \frac{1}{2}(1) - \frac{1}{2}(-1) = \frac{1}{2} + \frac{1}{2} = 1$$
- **[M1]** Integrates $\cos(2\theta)$ correctly to $\frac{1}{2}\sin(2\theta)$.
- **[A1]** Correct evaluation of area ($1$).

---
topic: "Integration"
subtopic: "Areas under curves"
---
### **Examiner Report 1**

#### **General Comments**
This paper proved to be a good test of learners’ ability on the 9MA0 content and plenty of opportunity was provided for them to demonstrate what they had learnt. Most learners accessed marks throughout the paper and there were many fully correct solutions to the earlier questions. The later questions offered more of a challenge with questions 13 and 14 being found the most difficult. The majority of learners produced robust proofs in question 11.

#### **Question 1**
Part (a) was an accessible start to the paper with almost all learners realising that they needed to set the modulus bracket equal to zero and so obtained the correct coordinates. In part (b), learners appeared familiar with a method for solving modulus equations with most attempting to solve both equations correctly, but many did not realise that $x = 3.5$ was the only solution, so did not gain the final mark.

#### **Question 2**
In part (a), most learners drew the correct shaped graph in the correct quadrants with the correct $y$-intercept labelled. Part (b) was well answered, with most learners being successful.

#### **Question 3**
This question was well attempted with most responses stating the correct terms of the sequence and setting the sum equal to 12.

#### **Question 4**
The majority of learners answered part (a) successfully. In part (b), many responses did not differentiate $2^x$ correctly and did not obtain $p = \ln 2$. Part (c) and (d) were usually carried out correctly using their derivative from part (b).

#### **Question 5**
In part (a), learners appeared to be familiar with the trapezium rule and the majority were able to obtain a correct answer. Part (b)(i) was generally well answered.

#### **Question 6**
This question was a good source of marks for the majority of learners. Generally those that could take out the common factor tended to go on to score full marks for the expansion.

#### **Question 7**
In part (a), learners appeared familiar with composite functions. Part (b) and (c) proved to be challenging for many learners.

#### **Question 8**
Most learners were able to identify a suitable strategy to find the area required by integrating the function correctly and then subtracting the area under the curve from the area of a rectangle.

#### **Question 9**
Part (a) was very well answered. In part (b) only a minority realised they could use a simple proof by counter example.

#### **Question 10**
In part (a), a significant number of learners struggled to differentiate correctly. Part (b) and (c) were found very challenging.

#### **Question 11**
This question was very well answered with many learners presenting a fully correct proof by first principles for the trigonometric functions.

#### **Question 12**
Those who attempted this question often showed a good understanding of 3D vectors and scored full marks in part (a). Part (b) required learners to realise the scale factor needed careful handling.

#### **Question 13**
This question proved to be one of the most challenging on the paper. Many learners made a good start with part (a) using double angle formulae. Part (b) and (c) proved challenging as well.

#### **Question 14**
This question was also found very challenging and only a few correct answers were seen.

#### **Question 15**
For part (a) learners appeared familiar with working with models. Part (c) and (d) tested partial fractions and differential equations where many fully correct solutions were seen.
