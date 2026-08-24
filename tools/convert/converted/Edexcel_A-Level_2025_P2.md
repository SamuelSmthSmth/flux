---
topic: "Algebraic Expressions"
subtopic: "Factorising"
---
### **Question 1**

In this question you must show all stages of your working.
Solutions relying on calculator technology are not acceptable.

Factorise completely

$$2x^3 - 24x^2 + 40x$$

**(3)**

### **Mark Scheme 1**

**Step 1: Factorise out the common factor of $2x$**

$$2x(x^2 - 12x + 20)$$

- **[M1]** Takes out a factor of $2x$ or $x$ or $2$ to achieve $2x(x^2 - 12x + 20)$ or $x(2x^2 - 24x + 40)$ or $2(x^3 - 12x^2 + 20x)$.

**Step 2: Factorise the remaining quadratic expression**

$$2x(x - 2)(x - 10)$$

- **[M1]** Correct attempt to factorise $x^2 - 12x + 20$ into two linear brackets $(x + a)(x + b)$ where $ab = 20$.
- **[A1]** Correct factorised expression $2x(x - 2)(x - 10)$ or equivalent e.g. $2x(x - 10)(x - 2)$.

---
topic: "Integration"
subtopic: "Integrating x^n"
---
### **Question 2**

Find

$$\int \left( x^4 - 6x^{\frac{1}{2}} - 3 \right) \mathrm{d}x$$

giving the answer in simplest form.

**(4)**

### **Mark Scheme 2**

**Step 1: Apply the power rule of integration to each term**

$$\int x^4 \mathrm{d}x = \frac{x^5}{5}, \quad \int -3 \mathrm{d}x = -3x$$

- **[M1]** $x^n \to x^{n+1}$ for at least one term.

**Step 2: Integrate the fractional power term**

$$\int -6x^{\frac{1}{2}} \mathrm{d}x = -6 \cdot \frac{x^{\frac{3}{2}}}{\frac{3}{2}} = -4x^{\frac{3}{2}}$$

- **[A1]** At least two terms integrated correctly, simplified or unsimplified.

**Step 3: Combine all integrated terms and include constant of integration**

$$\frac{1}{5}x^5 - 4x^{\frac{3}{2}} - 3x + C$$

- **[A1]** All terms correct and fully simplified.
- **[B1]** Constant of integration $+ C$ included with a fully correct integrated expression.

---
topic: "Exponentials and Logarithms"
subtopic: "Laws of logarithms"
---
### **Question 3**

Given that

$$3^x = 7^y$$

find the exact value of $\frac{x}{y}$

**(2)**

### **Mark Scheme 3**

**Step 1: Take logarithms of both sides and apply power law**

$$\ln(3^x) = \ln(7^y) \Rightarrow x \ln 3 = y \ln 7$$

- **[M1]** Takes logarithms (base $e$, $10$, $3$, or $7$) of both sides and uses power law e.g. $x \ln 3 = y \ln 7$ or $x = \log_3(7^y) = y \log_3 7$.

**Step 2: Rearrange to find the ratio $\frac{x}{y}$**

$$\frac{x}{y} = \frac{\ln 7}{\ln 3}$$

- **[A1]** Correct exact value for $\frac{x}{y}$, e.g. $\frac{\ln 7}{\ln 3}$, $\frac{\log 7}{\log 3}$, or $\log_3 7$.

---
topic: "Radians"
subtopic: "Areas of sectors and segments"
---
### **Question 4**

**Figure 1** shows the shape $ABCD$, consisting of a triangle $ABD$ containing a sector $ABC$ of a circle with centre $B$.

Given that
- $AD = 6.4\text{ cm}$
- $BD = 13\text{ cm}$
- $BA = BC = 8\text{ cm}$

**(a)** show that angle $ABC = 0.394$ radians to 3 significant figures. **(2)**

The region $R$, shown shaded in Figure 1, is bounded by the line $CD$, the line $DA$ and the arc $AC$.

**(b)** Find the area of $R$, giving the answer in $\text{cm}^2$ to 3 significant figures.
You must make your method clear. **(3)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Apply the cosine rule in triangle $ABD$**

$$\cos(\angle ABD) = \frac{8^2 + 13^2 - 6.4^2}{2 \times 8 \times 13}$$

- **[M1]** Correct substitution into the cosine rule to find angle $ABD$.

**Step 2: Calculate the angle in radians**

$$\cos(\angle ABC) = \frac{64 + 169 - 40.96}{208} = \frac{192.04}{208} \approx 0.923269...$$

$$\angle ABC = \arccos(0.923269...) = 0.39414... \approx 0.394 \text{ radians}$$

- **[A1]** Achieves $0.394$ with at least one intermediate step showing greater accuracy.

#### **Part (b)**

**Step 3: Calculate the area of triangle $ABD$**

$$\text{Area}_{ABD} = \frac{1}{2} \times 8 \times 13 \times \sin(0.39414...) \approx 19.968... \text{ cm}^2$$

- **[M1]** Correct method to find the area of triangle $ABD$ using $\frac{1}{2}ab\sin C$.

**Step 4: Calculate the area of sector $ABC$**

$$\text{Area}_{\text{sector}} = \frac{1}{2} \times 8^2 \times 0.39414... \approx 12.612... \text{ cm}^2$$

- **[M1]** Correct method to find area of sector $ABC$ using $\frac{1}{2}r^2\theta$.

**Step 5: Subtract the sector area from the triangle area**

$$\text{Area}_R = 19.968... - 12.612... = 7.3556... \approx 7.36\text{ cm}^2$$

- **[A1]** $7.36\text{ cm}^2$ (or $7.35\text{ cm}^2$).

---
topic: "Parametric Equations"
subtopic: "Parametric equations"
---
### **Question 5**

The curve $C$ has parametric equations

$$x = \frac{t - 1}{2}, \quad y = 5(t + 2)^4, \quad t \in \mathbb{R}$$

The point $P$ with $x$ coordinate $-3$ lies on $C$.

**(a)** Find the $y$ coordinate of $P$. **(2)**

**(b)** Find a Cartesian equation for $C$, giving the answer in the form $y = \text{f}(x)$ **(2)**

**(c)** Hence, or otherwise, find the gradient of $C$ at the point $P$. **(3)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Find the value of $t$ at $P$**

$$-3 = \frac{t - 1}{2} \Rightarrow t - 1 = -6 \Rightarrow t = -5$$

- **[M1]** Sets $x = -3$ to find $t$.

**Step 2: Calculate the $y$ coordinate**

$$y = 5(-5 + 2)^4 = 5(-3)^4 = 5 \times 81 = 405$$

- **[A1]** $y = 405$.

#### **Part (b)**

**Step 3: Eliminate $t$ to form Cartesian equation**

$$x = \frac{t - 1}{2} \Rightarrow t = 2x + 1$$

$$y = 5((2x + 1) + 2)^4 = 5(2x + 3)^4$$

- **[M1]** Rearranges $x$ to express $t$ in terms of $x$ and substitutes into $y$.
- **[A1]** $y = 5(2x + 3)^4$.

#### **Part (c)**

**Step 4: Differentiate $y$ with respect to $x$**

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 5 \times 4(2x + 3)^3 \times 2 = 40(2x + 3)^3$$

- **[M1]** Correct differentiation of $y$ with respect to $x$, using the chain rule or using $\frac{\mathrm{d}y/\mathrm{d}t}{\mathrm{d}x/\mathrm{d}t}$.
- **[A1]** $\frac{\mathrm{d}y}{\mathrm{d}x} = 40(2x + 3)^3$.

**Step 5: Substitute $x = -3$ to find gradient at $P$**

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 40(2(-3) + 3)^3 = 40(-3)^3 = 40 \times (-27) = -1080$$

- **[A1]** $-1080$.

---
topic: "Radians"
subtopic: "Small angle approximations"
---
### **Question 6**

In this question you must show detailed reasoning.

**(a)** Given that $x$ is small and in radians, use the small angle approximation for $\cos \theta$ to show that

$$1 - \cos^2(2x) \approx 4x^2 - 4x^4$$

**(2)**

**(b)** Given that $x$ is small and in radians, use
- the answer to part (a)
- the small angle approximations for $\sin \theta$ and $\tan \theta$

to show that

$$\frac{1 - \cos^2(2x)}{\sin\left(\frac{x}{3}\right) \tan\left(\frac{x}{2}\right)} \approx a + bx^2$$

where $a$ and $b$ are constants to be found. **(2)**

**(c)** Hence, given that $x$ is **very small**, deduce an approximate value for

$$\frac{1 - \cos^2(2x)}{\sin\left(\frac{x}{3}\right) \tan\left(\frac{x}{2}\right)}$$

giving a reason for your answer. **(2)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Apply the small angle approximation for $\cos(2x)$**

$$\cos(2x) \approx 1 - \frac{(2x)^2}{2} = 1 - 2x^2$$

$$1 - \cos^2(2x) \approx 1 - (1 - 2x^2)^2$$

- **[M1]** Uses $\cos(2x) \approx 1 - 2x^2$.

**Step 2: Expand and simplify**

$$1 - (1 - 4x^2 + 4x^4) = 4x^2 - 4x^4$$

- **[A1]** Correct expansion leading to $4x^2 - 4x^4$ with no errors seen.

#### **Part (b)**

**Step 3: Apply small angle approximations to the denominator**

$$\sin\left(\frac{x}{3}\right) \approx \frac{x}{3}, \quad \tan\left(\frac{x}{2}\right) \approx \frac{x}{2}$$

$$\text{Denominator} \approx \left(\frac{x}{3}\right)\left(\frac{x}{2}\right) = \frac{x^2}{6}$$

- **[M1]** Replaces $\sin(x/3)$ with $x/3$ and $\tan(x/2)$ with $x/2$.

**Step 4: Perform algebraic division**

$$\frac{4x^2 - 4x^4}{\frac{x^2}{6}} = 6\left(\frac{4x^2 - 4x^4}{x^2}\right) = 6(4 - 4x^2) = 24 - 24x^2$$

- **[A1]** $24 - 24x^2$ (so $a = 24, b = -24$).

#### **Part (c)**

**Step 5: Deduce the approximate value**

$$24$$

- **[B1]** $24$.

**Step 6: Give reason**

Reason: As $x \to 0$, $24x^2 \to 0$ (the $x^2$ term becomes negligible).

- **[B1]** States that $24x^2 \approx 0$ or $x^2$ is negligible when $x$ is very small.

---
topic: "Algebraic Methods"
subtopic: "Partial fractions"
---
### **Question 7**

Given that

$$\frac{3x^3 - 8x^2 - 6x - 11}{(x + 1)(x - 3)} \equiv Ax + B + \frac{C}{x + 1} + \frac{D}{x - 3} \quad x \in \mathbb{R}, x \neq -1, 3$$

find the value of each of the constants $A, B, C$ and $D$.

**(4)**

### **Mark Scheme 7**

**Step 1: Perform algebraic division or match polynomial coefficients to find quotient $Ax + B$**

$$(x + 1)(x - 3) = x^2 - 2x - 3$$

$$\frac{3x^3 - 8x^2 - 6x - 11}{x^2 - 2x - 3} = (3x - 2) + \frac{-x - 17}{x^2 - 2x - 3}$$

- **[M1]** Correct method for algebraic division or equating coefficients to find $A$ and $B$.

**Step 2: State values of $A$ and $B$**

$$A = 3, \quad B = -2$$

- **[A1]** $A = 3$ and $B = -2$.

**Step 3: Decompose the remainder into partial fractions**

$$\frac{-x - 17}{(x + 1)(x - 3)} \equiv \frac{C}{x + 1} + \frac{D}{x - 3}$$

$$-x - 17 = C(x - 3) + D(x + 1)$$

$$\text{Set } x = -1: \quad -(-1) - 17 = C(-1 - 3) \Rightarrow -16 = -4C \Rightarrow C = 4$$

$$\text{Set } x = 3: \quad -3 - 17 = D(3 + 1) \Rightarrow -20 = 4D \Rightarrow D = -5$$

- **[M1]** Correct method to find $C$ or $D$ (substitution or equating coefficients).

**Step 4: State values of $C$ and $D$**

$$C = 4, \quad D = -5$$

- **[A1]** $C = 4$ and $D = -5$.

---
topic: "Differentiation"
subtopic: "Stationary points"
---
### **Question 8**

**Figure 2** shows a sketch of the curve $C$ with equation $y = \text{f}(x)$, where

$$\text{f}(x) = x^4 + \frac{1}{3}x^3 - 8x^2 + ax + \frac{17}{3}$$

where $a$ is a constant.

Given that $C$ has a local maximum at $x = -\frac{1}{4}$

**(a)** show that $a = -4$ **(4)**

**(b)** find the exact $y$ coordinate of the local maximum. **(1)**

The equation $\text{f}(x) = k$, where $k$ is a constant, has 4 distinct solutions.

**(c)** Using algebra and showing all stages of your working, find the range of values of $k$. 
Give the answer using set notation.

(Solutions relying on calculator technology are not acceptable.) **(4)**

### **Mark Scheme 8**

#### **Part (a)**

**Step 1: Differentiate $\text{f}(x)$ with respect to $x$**

$$\text{f}'(x) = 4x^3 + x^2 - 16x + a$$

- **[M1]** Differentiates $\text{f}(x)$ with at least two terms correct.

**Step 2: Set derivative to zero at $x = -\frac{1}{4}$**

$$\text{f}'\left(-\frac{1}{4}\right) = 4\left(-\frac{1}{4}\right)^3 + \left(-\frac{1}{4}\right)^2 - 16\left(-\frac{1}{4}\right) + a = 0$$

- **[M1]** Sets $\text{f}'\left(-\frac{1}{4}\right) = 0$.

**Step 3: Solve for $a$**

$$-\frac{1}{16} + \frac{1}{16} + 4 + a = 0 \Rightarrow a = -4$$

- **[A1]** Correctly establishes $a = -4$.

**Step 4: Confirm $x = -\frac{1}{4}$ is a local maximum**

$$\text{f}''(x) = 12x^2 + 2x - 16 \Rightarrow \text{f}''\left(-\frac{1}{4}\right) = 12\left(\frac{1}{16}\right) + 2\left(-\frac{1}{4}\right) - 16 = \frac{3}{4} - \frac{1}{2} - 16 = -15.75 < 0$$

- **[B1]** Confirms local maximum using second derivative or sign argument.

#### **Part (b)**

**Step 5: Substitute $x = -\frac{1}{4}$ into $\text{f}(x)$**

$$\text{f}\left(-\frac{1}{4}\right) = \left(-\frac{1}{4}\right)^4 + \frac{1}{3}\left(-\frac{1}{4}\right)^3 - 8\left(-\frac{1}{4}\right)^2 - 4\left(-\frac{1}{4}\right) + \frac{17}{3} = \frac{4735}{768}$$

- **[B1]** Exact value $\frac{4735}{768}$ (or equivalent fraction).

#### **Part (c)**

**Step 6: Solve $\text{f}'(x) = 0$ to find remaining turning points**

$$4x^3 + x^2 - 16x - 4 = 0 \Rightarrow x^2(4x + 1) - 4(4x + 1) = 0 \Rightarrow (x^2 - 4)(4x + 1) = 0$$

$$x = 2, \quad x = -2, \quad x = -\frac{1}{4}$$

- **[M1]** Factorises $\text{f}'(x) = 0$ to find roots $x = 2$ and $x = -2$.

**Step 7: Evaluate $\text{f}(x)$ at the local minima**

$$\text{f}(2) = 2^4 + \frac{1}{3}(8) - 8(4) - 4(2) + \frac{17}{3} = 16 + \frac{8}{3} - 32 - 8 + \frac{17}{3} = -\frac{47}{3}$$

$$\text{f}(-2) = (-2)^4 + \frac{1}{3}(-8) - 8(4) - 4(-2) + \frac{17}{3} = 16 - \frac{8}{3} - 32 + 8 + \frac{17}{3} = -5$$

- **[M1]** Evaluates $\text{f}(2)$ and $\text{f}(-2)$.
- **[A1]** Correct values for local minima: $y = -5$ and $y = -\frac{47}{3}$.

**Step 8: Express range of $k$ for 4 distinct solutions in set notation**

For 4 distinct solutions, $k$ must lie strictly between the higher local minimum ($y = -5$) and the local maximum ($y = \frac{4735}{768}$):

$$\left\{ k \in \mathbb{R} : -5 < k < \frac{4735}{768} \right\}$$

- **[A1]** Correct set notation e.g. $\{k : -5 < k < \frac{4735}{768}\}$.

---
topic: "Exponentials and Logarithms"
subtopic: "Exponential modelling"
---
### **Question 9**

In this question you must show all stages of your working.
Solutions relying entirely on calculator technology are not acceptable.

A new type of car is released for sale.
The total number of this type of car sold, $N$, in a particular region, $t$ months after the cars were released for sale, is modelled by the equation

$$N = 5000 - 5000\mathrm{e}^{-0.075t} \quad t \ge 0$$

Use the equation of the model to answer parts (a), (b), (c) and (d).

**(a)** Find the total number of cars sold in the first 3 months. **(2)**

Given that $N = 3000$ when $t = T$

**(b)** find the value of $T$ giving the answer to 2 decimal places. **(3)**

**(c)** Find the rate of increase in the total number of cars sold when $t = 3$, giving the answer to 3 significant figures. **(2)**

After a marketing campaign, the total number of cars sold is expected to rise and have an upper limit of 6500

**(d)** Using this information, suggest **one** refinement to the model. **(1)**

### **Mark Scheme 9**

#### **Part (a)**

**Step 1: Substitute $t = 3$ into the model**

$$N = 5000 - 5000\mathrm{e}^{-0.075 \times 3} = 5000 - 5000\mathrm{e}^{-0.225}$$

- **[M1]** Substitutes $t = 3$ into the given equation.

**Step 2: Calculate $N$**

$$N \approx 5000 - 3992.58... = 1007.41... \Rightarrow 1007 \text{ (or } 1008\text{)}$$

- **[A1]** $1007$ or $1008$ cars (or $1010$ to 3 sig figs).

#### **Part (b)**

**Step 3: Set $N = 3000$ and rearrange for the exponential term**

$$3000 = 5000 - 5000\mathrm{e}^{-0.075T} \Rightarrow 5000\mathrm{e}^{-0.075T} = 2000 \Rightarrow \mathrm{e}^{-0.075T} = 0.4$$

- **[M1]** Rearranges equation to $\mathrm{e}^{-0.075T} = 0.4$.

**Step 4: Take natural logarithms**

$$-0.075T = \ln(0.4) \Rightarrow T = \frac{\ln(0.4)}{-0.075}$$

- **[M1]** Takes natural logs to solve for $T$.

**Step 5: Calculate $T$ to 2 decimal places**

$$T = \frac{-0.91629...}{-0.075} \approx 12.217... \approx 12.22$$

- **[A1]** $12.22$ months.

#### **Part (c)**

**Step 6: Differentiate $N$ with respect to $t$**

$$\frac{\mathrm{d}N}{\mathrm{d}t} = -5000(-0.075)\mathrm{e}^{-0.075t} = 375\mathrm{e}^{-0.075t}$$

- **[M1]** Differentiates $N$ correctly to $k\mathrm{e}^{-0.075t}$.

**Step 7: Evaluate rate at $t = 3$**

$$\frac{\mathrm{d}N}{\mathrm{d}t} = 375\mathrm{e}^{-0.225} \approx 299.44... \approx 299 \text{ cars per month}$$

- **[A1]** $299$ cars per month (3 sig figs).

#### **Part (d)**

**Step 8: Suggest refinement**

- **[B1]** Change $5000$ to $6500$, e.g. $N = 6500 - 6500\mathrm{e}^{-kt}$.

---
topic: "Integration"
subtopic: "Modelling with differential equations"
---
### **Question 10**

Water flows at a constant rate into a large container.
There is a tap at the bottom of the container.
At time $t$ hours after the tap was opened
- the volume of water in the container is $V\text{ m}^3$
- water is flowing into the container at a constant rate of $0.45\text{ m}^3$ per hour
- water is leaving the container through the tap at a rate of $0.3V\text{ m}^3$ per hour

**(a)** Show that

$$20\frac{\mathrm{d}V}{\mathrm{d}t} = 9 - 6V$$

**(2)**

Given that when the tap was opened, there was $0.25\text{ m}^3$ of water in the container,

**(b)** solve the differential equation to show that

$$V = P - Q\mathrm{e}^{-kt}$$

where $P, Q$ and $k$ are positive constants to be found. **(5)**

Given that
- the capacity of the container is $2\text{ m}^3$
- the tap remains open
- the water continues to flow into the tank at the same rate

**(c)** determine whether the container will ever become full, giving a reason for your answer. **(2)**

### **Mark Scheme 10**

#### **Part (a)**

**Step 1: Write differential equation for rate of change of volume**

$$\frac{\mathrm{d}V}{\mathrm{d}t} = \text{rate in} - \text{rate out} = 0.45 - 0.3V$$

- **[M1]** Sets up $\frac{\mathrm{d}V}{\mathrm{d}t} = 0.45 - 0.3V$.

**Step 2: Multiply equation by 20**

$$20\frac{\mathrm{d}V}{\mathrm{d}t} = 20(0.45 - 0.3V) = 9 - 6V$$

- **[A1]** Correctly reaches $20\frac{\mathrm{d}V}{\mathrm{d}t} = 9 - 6V$.

#### **Part (b)**

**Step 3: Separate variables**

$$\int \frac{1}{9 - 6V} \mathrm{d}V = \int \frac{1}{20} \mathrm{d}t$$

- **[M1]** Separates variables correctly.

**Step 4: Integrate both sides**

$$-\frac{1}{6} \ln|9 - 6V| = \frac{1}{20}t + C$$

- **[A1]** Correct integration on both sides.

**Step 5: Exponentiate to express $V$ in terms of $t$**

$$\ln|9 - 6V| = -0.3t - 6C \Rightarrow 9 - 6V = A\mathrm{e}^{-0.3t} \Rightarrow 6V = 9 - A\mathrm{e}^{-0.3t}$$

$$V = 1.5 - B\mathrm{e}^{-0.3t}$$

- **[M1]** Rearranges to $V = P - Q\mathrm{e}^{-kt}$.

**Step 6: Apply initial condition $V = 0.25$ at $t = 0$**

$$0.25 = 1.5 - B \Rightarrow B = 1.25$$

- **[M1]** Uses $t = 0, V = 0.25$ to solve for the constant.

**Step 7: State final equation**

$$V = 1.5 - 1.25\mathrm{e}^{-0.3t}$$

$P = 1.5$, $Q = 1.25$, $k = 0.3$.

- **[A1]** $V = 1.5 - 1.25\mathrm{e}^{-0.3t}$ (or $V = \frac{3}{2} - \frac{5}{4}\mathrm{e}^{-\frac{3}{10}t}$).

#### **Part (c)**

**Step 8: Consider the long-term behavior as $t \to \infty$**

$$\text{As } t \to \infty, \mathrm{e}^{-0.3t} \to 0 \Rightarrow V \to 1.5\text{ m}^3$$

- **[M1]** Determines limiting volume as $t \to \infty$.

**Step 9: State conclusion**

Since the maximum volume water can reach is $1.5\text{ m}^3 < 2\text{ m}^3$, the container will **never** become full.

- **[A1]** Correct conclusion with reason $1.5 < 2$.

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

**(b)** show that, according to the model, the yearly profit, $P$, in **thousands of pounds**, is given by

$$P = -0.06x^2 + 3.9x - 41$$

**(3)**

Use the model given in part (b) to answer parts (c), (d) and (e).

Given that the company wishes to make a profit on sales of the toy,

**(c)** find the range of possible selling prices of the toy. **(2)**

**(d)** Hence, or otherwise, deduce the selling price of the toy that maximises the profit. **(1)**

In one particular year, the company sold the toy for £35 and made £21 750 profit.

**(e)** Use this information to evaluate the suitability of the model. **(2)**

### **Mark Scheme 11**

#### **Part (a)**

**Step 1: Calculate gradient $m$**

$$m = \frac{300 - 1500}{50 - 30} = \frac{-1200}{20} = -60$$

- **[M1]** Uses coordinates $(30, 1500)$ and $(50, 300)$ to calculate gradient $m$.

**Step 2: Form equation of the line**

$$y - 1500 = -60(x - 30) \Rightarrow y = -60x + 1800 + 1500 = -60x + 3300$$

- **[M1]** Uses $y - y_1 = m(x - x_1)$ or $y = mx + c$.
- **[A1]** $y = -60x + 3300$ or $y = 3300 - 60x$.

#### **Part (b)**

**Step 3: Express total profit in pounds**

$$\text{Revenue} = x \cdot y = x(-60x + 3300) = -60x^2 + 3300x$$

$$\text{Cost} = 10y + 8000 = 10(-60x + 3300) + 8000 = -600x + 41000$$

$$\text{Profit (in pounds)} = (-60x^2 + 3300x) - (-600x + 41000) = -60x^2 + 3900x - 41000$$

- **[M1]** Sets up $\text{Profit} = \text{Revenue} - \text{Total Cost}$.
- **[M1]** Expands and simplifies profit expression in pounds to $-60x^2 + 3900x - 41000$.

**Step 4: Convert profit to thousands of pounds**

$$P = \frac{-60x^2 + 3900x - 41000}{1000} = -0.06x^2 + 3.9x - 41$$

- **[A1]** Divides by 1000 to show given quadratic equation for $P$.

#### **Part (c)**

**Step 5: Solve $P > 0$**

$$-0.06x^2 + 3.9x - 41 = 0$$

$$x = \frac{-3.9 \pm \sqrt{3.9^2 - 4(-0.06)(-41)}}{2(-0.06)} = \frac{-3.9 \pm \sqrt{5.37}}{-0.12}$$

$$x \approx 13.19 \quad \text{and} \quad x \approx 51.81$$

- **[M1]** Solves $-0.06x^2 + 3.9x - 41 = 0$.
- **[A1]** $13.19 < x < 51.81$ (or $£13.20 \le x \le £51.80$).

#### **Part (d)**

**Step 6: Find price that maximises profit**

$$\text{Vertex } x = \frac{-3.9}{2(-0.06)} = 32.5$$

- **[B1]** $£32.50$.

#### **Part (e)**

**Step 7: Substitute $x = 35$ into model**

$$P(35) = -0.06(35)^2 + 3.9(35) - 41 = -0.06(1225) + 136.5 - 41 = 22$$

$$\text{Predicted profit} = £22\,000$$

- **[M1]** Calculates predicted profit $P(35) = 22$ ($£22\,000$).

**Step 8: Compare predicted and actual profit**

Actual profit is £21 750, which is extremely close to the predicted profit of £22 000 (a difference of only £250). Therefore, the model is **suitable**.

- **[A1]** Concludes the model is suitable, backing up with quantitative comparison.

---
topic: "Functions and Graphs"
subtopic: "The modulus function"
---
### **Question 12**

**Figure 3** shows a sketch of the graph with equation $y = \text{f}(x)$ where

$$\text{f}(x) = 4|x - 3| - 5 \quad x \in \mathbb{R}$$

Given that $a$ is a constant and $|a| = 1$

**(a)** find the possible values of $\text{f}(a)$ **(2)**

The function $\text{g}$ is defined by

$$\text{g}(x) = 2x + 17 \quad x \in \mathbb{R}$$

**(b)** Find the range of $\text{gf}(x)$ **(2)**

The function $\text{h}$ is defined by

$$\text{h}(x) = kx \quad x \in \mathbb{R}$$

where $k$ is a constant.

Given that the equation $\text{f}(x) = \text{h}(x)$ has no solutions,

**(c)** find the range of values of $k$. **(4)**

### **Mark Scheme 12**

#### **Part (a)**

**Step 1: Identify possible values of $a$**

$$|a| = 1 \Rightarrow a = 1 \text{ or } a = -1$$

- **[M1]** Evaluates $\text{f}(1)$ or $\text{f}(-1)$.

**Step 2: Calculate values**

$$\text{f}(1) = 4|1 - 3| - 5 = 4(2) - 5 = 3$$

$$\text{f}(-1) = 4|-1 - 3| - 5 = 4(4) - 5 = 11$$

- **[A1]** $\text{f}(a) = 3$ or $11$.

#### **Part (b)**

**Step 3: Determine the range of $\text{f}(x)$**

Since $|x - 3| \ge 0$, $\text{f}(x) \ge -5$.

- **[M1]** Identifies minimum value of $\text{f}(x)$ is $-5$.

**Step 4: Find the minimum value of $\text{gf}(x)$**

$$\text{gf}(x) \ge \text{g}(-5) = 2(-5) + 17 = 7$$

- **[A1]** $\text{gf}(x) \ge 7$ or $y \ge 7$.

#### **Part (c)**

**Step 5: Identify key features of $\text{f}(x)$**

Vertex of $\text{f}(x)$ is at $(3, -5)$.
Gradients of branches are $4$ (for $x > 3$) and $-4$ (for $x < 3$).

- **[M1]** Identifies gradients $4$ and $-4$.

**Step 6: Find $k$ where $y = kx$ passes through the vertex $(3, -5)$**

$$-5 = k(3) \Rightarrow k = -\frac{5}{3}$$

- **[M1]** Solves $-5 = 3k$ to get $k = -\frac{5}{3}$.

**Step 7: Determine range of $k$ for no intersection**

The line $y = kx$ does not intersect $\text{f}(x)$ when its gradient is strictly between $-\frac{5}{3}$ and $4$.

- **[M1]** Uses gradient of right branch ($4$) and gradient to vertex ($-\frac{5}{3}$).
- **[A1]** $-\frac{5}{3} < k < 4$.

---
topic: "Trigonometric Identities and Equations"
subtopic: "Simple trigonometric equations"
---
### **Question 13**

Given that for all values of $k$, where $0 < |k| < 1$, the equation

$$\sin(nx) = k \quad n \in \mathbb{N}$$

has exactly 6 solutions in the interval $0 \le x < 2\pi$

**(i)** deduce the value of $n$ **(1)**

**(ii)** deduce the number of solutions of the equation

$$\sin^2(nx) = k^2$$

in the interval $0 \le x < 5\pi$, justifying your answer. **(2)**

### **Mark Scheme 13**

#### **Part (i)**

**Step 1: Determine $n$**

In $0 \le x < 2\pi$, $0 \le nx < 2n\pi$.
Each full wave ($2\pi$) has 2 solutions for $\sin(nx) = k$.
Total solutions $= 2n = 6 \Rightarrow n = 3$.

- **[B1]** $n = 3$.

#### **Part (ii)**

**Step 2: Rewrite equation as two separate linear equations**

$$\sin^2(3x) = k^2 \iff \sin(3x) = k \quad \text{or} \quad \sin(3x) = -k$$

- **[M1]** States $\sin(3x) = \pm k$, recognizing 4 solutions per period of $\frac{2\pi}{3}$.

**Step 3: Count total solutions in $0 \le x < 5\pi$**

Interval $0 \le x < 5\pi \Rightarrow 0 \le 3x < 15\pi$.
In $15\pi$ radians of $3x$, there are $15$ half-periods of $\pi$.
Each half-period contains 2 solutions (1 for $k$ and 1 for $-k$).
Total solutions $= 15 \times 2 = 30$.

- **[A1]** $30$ with valid justification.

---
topic: "Vectors"
subtopic: "Solving geometric problems"
---
### **Question 14**

In this question you must show detailed reasoning.

**Figure 4** shows a trapezium $ABCD$ where $AD$ is parallel to $BC$

Given that
- $\overrightarrow{AB} = 2\mathbf{a} + 3\mathbf{b}$
- $\overrightarrow{BC} = 15\mathbf{a} - 5\mathbf{b}$
- $\overrightarrow{DB} = -4\mathbf{a} + k\mathbf{b}$ where $k$ is an integer

**(a)** show that $k = 5$ **(3)**

Given also that
- the point $N$ lies on $BC$ such that $BN : NC = 1 : 4$
- $AN$ intersects $BD$ at $X$

**(b)** find $BX : XD$ **(5)**

### **Mark Scheme 14**

#### **Part (a)**

**Step 1: Express $\overrightarrow{AD}$ in terms of $\mathbf{a}$ and $\mathbf{b}$**

$$\overrightarrow{AD} = \overrightarrow{AB} + \overrightarrow{BD} = (2\mathbf{a} + 3\mathbf{b}) - (-4\mathbf{a} + k\mathbf{b}) = 6\mathbf{a} + (3 - k)\mathbf{b}$$

- **[M1]** Expresses $\overrightarrow{AD} = \overrightarrow{AB} - \overrightarrow{DB}$.

**Step 2: Use parallel condition $AD \parallel BC$**

$$\overrightarrow{AD} = \lambda \overrightarrow{BC} \Rightarrow 6\mathbf{a} + (3 - k)\mathbf{b} = \lambda(15\mathbf{a} - 5\mathbf{b})$$

$$\text{Equating } \mathbf{a}: \quad 6 = 15\lambda \Rightarrow \lambda = \frac{2}{5}$$

- **[M1]** Equates $\mathbf{a}$ components to find scalar $\lambda = \frac{2}{5}$.

**Step 3: Equate $\mathbf{b}$ components to solve for $k$**

$$3 - k = -5\left(\frac{2}{5}\right) = -2 \Rightarrow k = 5$$

- **[A1]** Correctly establishes $k = 5$.

#### **Part (b)**

**Step 4: Find vector $\overrightarrow{AN}$**

$$\overrightarrow{BN} = \frac{1}{5}\overrightarrow{BC} = \frac{1}{5}(15\mathbf{a} - 5\mathbf{b}) = 3\mathbf{a} - \mathbf{b}$$

$$\overrightarrow{AN} = \overrightarrow{AB} + \overrightarrow{BN} = (2\mathbf{a} + 3\mathbf{b}) + (3\mathbf{a} - \mathbf{b}) = 5\mathbf{a} + 2\mathbf{b}$$

- **[M1]** Finds $\overrightarrow{AN} = 5\mathbf{a} + 2\mathbf{b}$.

**Step 5: Set up vector equation for point $X$**

Since $X$ lies on $AN$, $\overrightarrow{AX} = \mu \overrightarrow{AN} = 5\mu\mathbf{a} + 2\mu\mathbf{b}$.

Since $X$ lies on $BD$, $\overrightarrow{BX} = p \overrightarrow{BD} = p(4\mathbf{a} - 5\mathbf{b})$.

$$\overrightarrow{AX} = \overrightarrow{AB} + \overrightarrow{BX} = (2 + 4p)\mathbf{a} + (3 - 5p)\mathbf{b}$$

- **[M1]** Sets up expressions for $\overrightarrow{AX}$ along both lines.

**Step 6: Form simultaneous equations**

$$5\mu = 2 + 4p, \quad 2\mu = 3 - 5p$$

- **[M1]** Equates $\mathbf{a}$ and $\mathbf{b}$ components.

**Step 7: Solve for $p$**

$$\mu = \frac{2 + 4p}{5} \Rightarrow 2\left(\frac{2 + 4p}{5}\right) = 3 - 5p \Rightarrow 4 + 8p = 15 - 25p \Rightarrow 33p = 11 \Rightarrow p = \frac{1}{3}$$

- **[A1]** $p = \frac{1}{3}$.

**Step 8: Deduce ratio $BX : XD$**

Since $\overrightarrow{BX} = \frac{1}{3}\overrightarrow{BD}$, $X$ divides $BD$ in ratio $1 : 2$.

- **[A1]** $BX : XD = 1 : 2$.

---
topic: "Integration"
subtopic: "Integration by substitution"
---
### **Question 15**

In this question you must show all stages of your working.
Solutions relying on calculator technology are not acceptable.

**Figure 5** shows a sketch of part of the curve with equation $y = \text{f}(x)$, where

$$\text{f}(x) = \frac{1 - x^2}{(1 + x^2)^2}$$

The curve
- intersects the $x$-axis at $-1$ and $1$
- has minimum turning points at $P$ and $Q$

as shown in Figure 5.

**(a)** Use calculus to find the exact coordinates of $P$. **(5)**

**(b)** Using the substitution $x = \tan \theta$ show that

$$\int_{-1}^{1} \text{f}(x) \mathrm{d}x = \int_{\alpha}^{\beta} \cos 2\theta \mathrm{d}\theta$$

where $\alpha$ and $\beta$ are constants to be found. **(5)**

The finite region $R$, shown shaded in Figure 5, is bounded by the $x$-axis and the curve.

**(c)** Use algebraic integration to find the area of $R$. **(3)**

### **Mark Scheme 15**

#### **Part (a)**

**Step 1: Differentiate $\text{f}(x)$ using quotient rule**

$$\text{f}'(x) = \frac{(-2x)(1 + x^2)^2 - (1 - x^2) \cdot 2(1 + x^2)(2x)}{(1 + x^2)^4}$$

- **[M1]** Applies quotient rule or product rule correctly.

**Step 2: Simplify derivative**

$$\text{f}'(x) = \frac{-2x(1 + x^2) - 4x(1 - x^2)}{(1 + x^2)^3} = \frac{-2x - 2x^3 - 4x + 4x^3}{(1 + x^2)^3} = \frac{2x(x^2 - 3)}{(1 + x^2)^3}$$

- **[A1]** $\text{f}'(x) = \frac{2x(x^2 - 3)}{(1 + x^2)^3}$.

**Step 3: Solve $\text{f}'(x) = 0$ for $x < 0$**

$$2x(x^2 - 3) = 0 \Rightarrow x = -\sqrt{3}$$

- **[M1]** Finds $x = -\sqrt{3}$ for point $P$.

**Step 4: Find $y$ coordinate**

$$y = \frac{1 - (-\sqrt{3})^2}{(1 + (-\sqrt{3})^2)^2} = \frac{1 - 3}{(1 + 3)^2} = -\frac{2}{16} = -\frac{1}{8}$$

- **[M1]** Substitutes $x = -\sqrt{3}$ into $\text{f}(x)$.

**Step 5: State coordinates of $P$**

$$P = \left(-\sqrt{3}, -\frac{1}{8}\right)$$

- **[A1]** $\left(-\sqrt{3}, -\frac{1}{8}\right)$.

#### **Part (b)**

**Step 6: Substitute $x = \tan \theta$ and $\mathrm{d}x = \sec^2 \theta \mathrm{d}\theta$**

$$\text{f}(x) \mathrm{d}x = \frac{1 - \tan^2 \theta}{(1 + \tan^2 \theta)^2} \cdot \sec^2 \theta \mathrm{d}\theta = \frac{1 - \tan^2 \theta}{\sec^4 \theta} \cdot \sec^2 \theta \mathrm{d}\theta = \frac{1 - \tan^2 \theta}{\sec^2 \theta} \mathrm{d}\theta$$

- **[M1]** Uses $\mathrm{d}x = \sec^2 \theta \mathrm{d}\theta$ and $1 + \tan^2 \theta = \sec^2 \theta$.

**Step 7: Simplify integrand using double angle formula**

$$\frac{1 - \tan^2 \theta}{\sec^2 \theta} = \cos^2 \theta (1 - \tan^2 \theta) = \cos^2 \theta - \sin^2 \theta = \cos 2\theta$$

- **[M1]** Simplifies integrand to $\cos^2 \theta - \sin^2 \theta$.
- **[A1]** Shows integrand is $\cos 2\theta$.

**Step 8: Change integration limits**

$$\text{When } x = -1, \quad \tan \theta = -1 \Rightarrow \alpha = -\frac{\pi}{4}$$

$$\text{When } x = 1, \quad \tan \theta = 1 \Rightarrow \beta = \frac{\pi}{4}$$

- **[M1]** Changes limits using $\theta = \arctan x$.
- **[A1]** Fully correct proof with $\alpha = -\frac{\pi}{4}$ and $\beta = \frac{\pi}{4}$.

#### **Part (c)**

**Step 9: Integrate $\cos 2\theta$**

$$\text{Area} = \int_{-\frac{\pi}{4}}^{\frac{\pi}{4}} \cos 2\theta \mathrm{d}\theta = \left[ \frac{1}{2}\sin 2\theta \right]_{-\frac{\pi}{4}}^{\frac{\pi}{4}}$$

- **[M1]** Integrates $\cos 2\theta$ to $\frac{1}{2}\sin 2\theta$.

**Step 10: Substitute limits**

$$\text{Area} = \frac{1}{2}\sin\left(\frac{\pi}{2}\right) - \frac{1}{2}\sin\left(-\frac{\pi}{2}\right) = \frac{1}{2}(1) - \frac{1}{2}(-1) = 1$$

- **[M1]** Substitutes upper and lower limits into integrated expression.
- **[A1]** $\text{Area} = 1$.
