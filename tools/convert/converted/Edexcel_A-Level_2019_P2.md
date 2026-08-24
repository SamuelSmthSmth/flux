---
topic: "Algebraic Expressions"
subtopic: "Index laws"
---
### **Question 1**

Given

$$2^x \times 4^y = \frac{1}{2\sqrt{2}}$$

express $y$ as a function of $x$. **(3)**

### **Mark Scheme 1**

**Step 1: Express all terms as powers of 2**

$$2^x \times (2^2)^y = 2^{-1} \times 2^{-\frac{1}{2}}$$

$$2^{x+2y} = 2^{-\frac{3}{2}}$$

- **[M1]** Expresses all terms as powers of 2 (or applies logarithms correctly to both sides).

**Step 2: Equate indices**

$$x + 2y = -\frac{3}{2}$$

- **[M1]** Equates indices to form a linear equation linking $x$ and $y$.

**Step 3: Rearrange to express $y$ as a function of $x$**

$$2y = -x - \frac{3}{2} \implies y = -\frac{1}{2}x - \frac{3}{4}$$

- **[A1]** Correct final expression for $y$ in terms of $x$, e.g., $y = -\frac{1}{2}x - \frac{3}{4}$ or $y = \frac{-2x - 3}{4}$.

---
topic: "Integration"
subtopic: "The trapezium rule"
---
### **Question 2**

The speed of a small jet aircraft was measured every 5 seconds, starting from the time it turned onto a runway, until the time when it left the ground.

The results are given in the table below with the time in seconds and the speed in $\text{m}\,\text{s}^{-1}$.

| Time (s) | 0 | 5 | 10 | 15 | 20 | 25 |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| Speed ($\text{m}\,\text{s}^{-1}$) | 2 | 5 | 10 | 18 | 28 | 42 |

Using all of this information,

**(a)** estimate the length of runway used by the jet to take off. **(3)**

Given that the jet accelerated smoothly in these 25 seconds,

**(b)** explain whether your answer to part (a) is an underestimate or an overestimate of the length of runway used by the jet to take off. **(1)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Set up the Trapezium Rule formula with $h = 5$**

$$\text{Distance} \approx \frac{1}{2} \times 5 \times [2 + 42 + 2(5 + 10 + 18 + 28)]$$

- **[M1]** Correct structure for the Trapezium Rule using $h = 5$.
- **[A1]** Correct values inside brackets leading to $\frac{5}{2} \times [44 + 2(61)] = \frac{5}{2} \times 166$.

**Step 2: Calculate the estimated distance**

$$\text{Distance} = 415\text{ m}$$

- **[A1]** Correct value of 415 (m).

#### **Part (b)**

**Step 3: State and justify whether it is an overestimate or underestimate**

The answer in part (a) is an overestimate because the gradient of the curve (acceleration) is increasing / the curve is convex (concave up) / the top edges of the trapezia lie above the curve.

- **[B1]** Correctly states overestimate with a valid explanation (e.g. speed graph is convex / rate of increase of speed increases / chords lie above the curve).

---
topic: "Radians"
subtopic: "Areas of sectors and segments"
---
### **Question 3**

**Figure 1** shows a sector $AOB$ of a circle with centre $O$, radius $5\text{ cm}$ and angle $AOB = 40^\circ$.

**Figure 1** shows a sector $AOB$ of a circle with centre $O$, radius $5\text{ cm}$ and angle $AOB = 40^\circ$.

The attempt of a student to find the area of the sector is shown below.

$$\text{Area of sector} = \frac{1}{2} r^2 \theta = \frac{1}{2} \times 5^2 \times 40 = 500\text{ cm}^2$$

**(a)** Explain the error made by this student. **(1)**

**(b)** Write out a correct solution. **(2)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Explain the error**

The student used the angle $\theta$ in degrees instead of radians in the formula $\text{Area} = \frac{1}{2}r^2\theta$.

- **[B1]** Correct explanation that $\theta$ must be in radians when using $\frac{1}{2}r^2\theta$ (or that $40^\circ$ was not converted to radians).

#### **Part (b)**

**Step 2: Apply a correct method to calculate the area**

$$\text{Area} = \frac{40}{360} \times \pi \times 5^2 \quad \text{or} \quad \text{Area} = \frac{1}{2} \times 5^2 \times \left(40 \times \frac{\pi}{180}\right)$$

- **[M1]** Correct method to calculate the area of the sector using degrees or converting the angle to radians.

**Step 3: Calculate the final area**

$$\text{Area} = \frac{25\pi}{9}\text{ cm}^2 \approx 8.73\text{ cm}^2$$

- **[A1]** Correct answer: $\frac{25\pi}{9}$ or awrt 8.73.

---
topic: "Parametric Equations"
subtopic: "Points of intersection"
---
### **Question 4**

**Figure 2** shows the curve $C_1$ with parametric equations

$$x = 10\cos t, \quad y = 4\sqrt{2}\sin t, \quad 0 \le t < 2\pi$$

which meets the circle $C_2$ with equation

$$x^2 + y^2 = 66$$

at four distinct points as shown in **Figure 2**.

Given that one of these points, $S$, lies in the 4th quadrant, find the Cartesian coordinates of $S$. **(6)**

### **Mark Scheme 4**

**Step 1: Substitute parametric equations into the circle equation**

$$(10\cos t)^2 + (4\sqrt{2}\sin t)^2 = 66$$

$$100\cos^2 t + 32\sin^2 t = 66$$

- **[M1]** Substitutes $x = 10\cos t$ and $y = 4\sqrt{2}\sin t$ into $x^2 + y^2 = 66$.

**Step 2: Use trigonometric identity to obtain an equation in one variable**

$$100\cos^2 t + 32(1 - \cos^2 t) = 66$$

$$68\cos^2 t + 32 = 66 \implies 68\cos^2 t = 34 \implies \cos^2 t = \frac{1}{2}$$

- **[M1]** Uses $\sin^2 t = 1 - \cos^2 t$ (or $\cos^2 t = 1 - \sin^2 t$) to form an equation in a single trigonometric ratio.
- **[A1]** Obtains $\cos^2 t = \frac{1}{2}$ or $\sin^2 t = \frac{1}{2}$.

**Step 3: Determine signs for the 4th quadrant**

In the 4th quadrant, $x > 0$ and $y < 0$, so $\cos t > 0$ and $\sin t < 0$.

$$\cos t = \frac{1}{\sqrt{2}}, \quad \sin t = -\frac{1}{\sqrt{2}}$$

- **[M1]** Correctly selects $\cos t = \frac{1}{\sqrt{2}}$ and $\sin t = -\frac{1}{\sqrt{2}}$ for the 4th quadrant.

**Step 4: Calculate coordinates of $S$**

$$x = 10 \left(\frac{1}{\sqrt{2}}\right) = 5\sqrt{2}$$

$$y = 4\sqrt{2} \left(-\frac{1}{\sqrt{2}}\right) = -4$$

- **[A1]** Correct $x$-coordinate: $x = 5\sqrt{2}$ (or $\sqrt{50}$).
- **[A1]** Correct $y$-coordinate: $y = -4$. Coordinates are $(5\sqrt{2}, -4)$.

---
topic: "Integration"
subtopic: "Definite integrals"
---
### **Question 5**

**Figure 3** shows a sketch of the curve with equation $y = \sqrt{x}$.

The point $P(x, y)$ lies on the curve.

The rectangle, shown shaded on **Figure 3**, has height $y$ and width $\delta x$.

Calculate

$$\lim_{\delta x \to 0} \sum_{x=4}^{9} \sqrt{x} \, \delta x$$ **(3)**

### **Mark Scheme 5**

**Step 1: Express the limit of the sum as a definite integral**

$$\lim_{\delta x \to 0} \sum_{x=4}^{9} \sqrt{x} \, \delta x = \int_{4}^{9} x^{\frac{1}{2}} \, \text{d}x$$

- **[M1]** Recognises that the limit of the sum represents the definite integral $\int_4^9 \sqrt{x}\,\text{d}x$.

**Step 2: Integrate $x^{\frac{1}{2}}$**

$$\int_{4}^{9} x^{\frac{1}{2}} \, \text{d}x = \left[ \frac{2}{3} x^{\frac{3}{2}} \right]_4^9$$

- **[M1]** Integrates $x^{\frac{1}{2}}$ to obtain $\frac{2}{3}x^{\frac{3}{2}}$.

**Step 3: Evaluate the integral**

$$= \frac{2}{3}\left(9^{\frac{3}{2}} - 4^{\frac{3}{2}}\right) = \frac{2}{3}(27 - 8) = \frac{2}{3}(19) = \frac{38}{3}$$

- **[A1]** Correct answer $\frac{38}{3}$ or $12\frac{2}{3}$ or awrt 12.7.

---
topic: "Functions and Graphs"
subtopic: "Inverse functions"
---
### **Question 6**

**Figure 4** shows a sketch of the graph of $y = \text{g}(x)$, where

$$\text{g}(x) = \begin{cases} (x - 2)^2 + 1 & x \le 2 \\ 4x - 7 & x > 2 \end{cases}$$

**(a)** Find the value of $\text{gg}(0)$. **(2)**

**(b)** Find all values of $x$ for which

$$\text{g}(x) > 28$$ **(4)**

The function $\text{h}$ is defined by

$$\text{h}(x) = (x - 2)^2 + 1 \quad x \le 2$$

**(c)** Explain why $\text{h}$ has an inverse but $\text{g}$ does not. **(1)**

**(d)** Solve the equation

$$\text{h}^{-1}(x) = -\frac{1}{2}$$ **(3)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Evaluate $\text{g}(0)$**

Since $0 \le 2$, $\text{g}(0) = (0 - 2)^2 + 1 = 5$.

- **[M1]** Applies $x = 0$ to $(x-2)^2 + 1$ to find $\text{g}(0) = 5$.

**Step 2: Evaluate $\text{g}(5)$**

Since $5 > 2$, $\text{g}(5) = 4(5) - 7 = 13$.

- **[A1]** Correct value 13.

#### **Part (b)**

**Step 3: Solve $\text{g}(x) > 28$ for $x \le 2$**

$$(x - 2)^2 + 1 > 28 \implies (x - 2)^2 > 27 \implies x - 2 < -\sqrt{27} \implies x < 2 - 3\sqrt{3}$$

- **[M1]** Sets $(x-2)^2 + 1 = 28$ and solves for $x \le 2$.
- **[A1]** Correct inequality $x < 2 - 3\sqrt{3}$ (or $x < 2 - \sqrt{27}$ or awrt $-3.20$).

**Step 4: Solve $\text{g}(x) > 28$ for $x > 2$**

$$4x - 7 > 28 \implies 4x > 35 \implies x > \frac{35}{4}$$

- **[M1]** Sets $4x - 7 = 28$ and solves for $x > 2$.
- **[A1]** Correct inequality $x > \frac{35}{4}$ (or $x > 8.75$).

#### **Part (c)**

**Step 5: Explain why $\text{h}$ has an inverse but $\text{g}$ does not**

$\text{h}$ is a one-to-one function (because its domain is restricted to $x \le 2$), whereas $\text{g}$ is a many-to-one function.

- **[B1]** States that $\text{h}$ is one-to-one whereas $\text{g}$ is many-to-one.

#### **Part (d)**

**Step 6: Set up equation using inverse property**

$$\text{h}^{-1}(x) = -\frac{1}{2} \iff x = \text{h}\left(-\frac{1}{2}\right)$$

- **[M1]** Realises that $x = \text{h}\left(-\frac{1}{2}\right)$ (or finds $\text{h}^{-1}(x) = 2 - \sqrt{x-1}$ and sets $2 - \sqrt{x-1} = -\frac{1}{2}$).

**Step 7: Substitute $x = -\frac{1}{2}$ into $\text{h}$**

$$x = \left(-\frac{1}{2} - 2\right)^2 + 1 = \left(-\frac{5}{2}\right)^2 + 1$$

- **[M1]** Correct substitution of $-\frac{1}{2}$ into $(x-2)^2 + 1$.

**Step 8: Calculate $x$**

$$x = \frac{25}{4} + 1 = \frac{29}{4} \quad (7.25)$$

- **[A1]** Correct value $\frac{29}{4}$ or $7.25$.

---
topic: "Straight Line Graphs"
subtopic: "Modelling with straight lines"
---
### **Question 7**

A small factory makes bars of soap.

On any day, the total cost to the factory, $£y$, of making $x$ bars of soap is modelled to be the sum of two separate elements:

- a fixed cost
- a cost that is proportional to the number of bars of soap that are made that day

**(a)** Write down a general equation linking $y$ with $x$, for this model. **(1)**

The bars of soap are sold for $£2$ each.

On a day when 800 bars of soap are made and sold, the factory makes a profit of $£500$

On a day when 300 bars of soap are made and sold, the factory makes a loss of $£80$

Using the above information,

**(b)** show that $y = 0.84x + 428$ **(3)**

**(c)** With reference to the model, interpret the significance of the value 0.84 in the equation. **(1)**

Assuming that each bar of soap is sold on the day it is made,

**(d)** find the least number of bars of soap that must be made on any given day for the factory to make a profit that day. **(2)**

### **Mark Scheme 7**

#### **Part (a)**

**Step 1: Write down the linear equation**

$$y = kx + c \quad \text{or} \quad y = ax + b$$

- **[B1]** Correct linear form where constants are defined.

#### **Part (b)**

**Step 2: Calculate the cost for 800 bars**

$$\text{Revenue} = 800 \times 2 = £1600$$

$$\text{Profit} = \text{Revenue} - \text{Cost} \implies 500 = 1600 - y \implies y(800) = 1100$$

- **[M1]** Uses Profit = Revenue - Cost to find $y = 1100$ when $x = 800$.

**Step 3: Calculate the cost for 300 bars**

$$\text{Revenue} = 300 \times 2 = £600$$

$$\text{Loss} = \text{Cost} - \text{Revenue} \implies 80 = y - 600 \implies y(300) = 680$$

- **[M1]** Uses Loss = Cost - Revenue to find $y = 680$ when $x = 300$.

**Step 4: Determine the constants and show the equation**

$$\text{Gradient } m = \frac{1100 - 680}{800 - 300} = \frac{420}{500} = 0.84$$

$$c = 1100 - 0.84(800) = 428 \implies y = 0.84x + 428$$

- **[A1*]** Fully correct derivation leading to $y = 0.84x + 428$.

#### **Part (c)**

**Step 5: Interpret 0.84**

The cost of making each additional bar of soap is $£0.84$ (84p per bar).

- **[B1]** Correct interpretation (e.g. variable cost per bar of soap / cost to make 1 bar of soap is £0.84).

#### **Part (d)**

**Step 6: Set up the inequality for profit**

$$\text{Revenue} > \text{Cost} \implies 2x > 0.84x + 428 \implies 1.16x > 428$$

- **[M1]** Sets revenue greater than cost: $2x > 0.84x + 428$.

**Step 7: Solve for the least number of bars**

$$x > \frac{428}{1.16} = 368.96... \implies \text{Least number of bars} = 369$$

- **[A1]** Correct answer 369 bars.

---
topic: "Sequences and Series"
subtopic: "Sigma notation"
---
### **Question 8**

**(i)** Find the value of

$$\sum_{r=4}^{\infty} 20 \times \left(\frac{1}{2}\right)^r$$ **(3)**

**(ii)** Show that

$$\sum_{n=1}^{48} \log_5 \left(\frac{n+2}{n+1}\right) = 2$$ **(3)**

### **Mark Scheme 8**

#### **Part (i)**

**Step 1: Identify the first term and common ratio**

First term $a = 20 \times \left(\frac{1}{2}\right)^4 = 20 \times \frac{1}{16} = \frac{5}{4} = 1.25$

Common ratio $r = \frac{1}{2}$

- **[M1]** Finds the first term $a = \frac{5}{4}$ (or uses $S_\infty - S_3$).

**Step 2: Apply the sum to infinity formula**

$$S_\infty = \frac{a}{1 - r} = \frac{\frac{5}{4}}{1 - \frac{1}{2}}$$

- **[M1]** Uses $S_\infty = \frac{a}{1-r}$ with their $a$ and $r = \frac{1}{2}$.

**Step 3: Calculate the final sum**

$$S_\infty = \frac{5}{2} = 2.5$$

- **[A1]** Correct answer $\frac{5}{2}$ or 2.5.

#### **Part (ii)**

**Step 4: Expand the sum using logarithm rules**

$$\sum_{n=1}^{48} \log_5 \left(\frac{n+2}{n+1}\right) = \log_5 \left(\frac{3}{2}\right) + \log_5 \left(\frac{4}{3}\right) + \dots + \log_5 \left(\frac{50}{49}\right)$$

$$= \log_5 \left( \frac{3}{2} \times \frac{4}{3} \times \frac{5}{4} \times \dots \times \frac{50}{49} \right)$$

- **[M1]** Applies the addition law for logarithms to write the sum as $\log_5(\text{product of fractions})$.

**Step 5: Cancel intermediate terms**

$$\frac{3}{2} \times \frac{4}{3} \times \frac{5}{4} \times \dots \times \frac{50}{49} = \frac{50}{2} = 25$$

- **[M1]** Cancels intermediate numerators and denominators to simplify the product to 25.

**Step 6: Evaluate $\log_5 25$**

$$\log_5 25 = 2$$

- **[A1*]** Concludes with $\log_5 25 = 2$ with all working clearly shown.

---
topic: "Exponentials and Logarithms"
subtopic: "Logarithms and non-linear data"
---
### **Question 9**

A research engineer is testing the effectiveness of the braking system of a car when it is driven in wet conditions.

The engineer measures and records the braking distance, $d$ metres, when the brakes are applied from a speed of $V\text{ km}\,\text{h}^{-1}$.

Graphs of $d$ against $V$ and $\log_{10} d$ against $\log_{10} V$ were plotted.

The results are shown below together with a data point from each graph.

**Figure 5** shows a curve of $d$ against $V$ passing through $(30, 20)$.

**Figure 6** shows a straight line graph of $\log_{10} d$ against $\log_{10} V$ with vertical intercept $(0, -1.77)$.

**(a)** Explain how **Figure 6** would lead the engineer to believe that the braking distance should be modelled by the formula

$$d = k V^n \quad \text{where } k \text{ and } n \text{ are constants}$$

with $k \approx 0.017$ **(3)**

Using the information given in **Figure 5**, with $k = 0.017$

**(b)** find a complete equation for the model giving the value of $n$ to 3 significant figures. **(3)**

Sean is driving this car at $60\text{ km}\,\text{h}^{-1}$ in wet conditions when he notices a large puddle in the road $100\text{ m}$ ahead. It takes him 0.8 seconds to react before applying the brakes.

**(c)** Use your formula to find out if Sean will be able to stop before reaching the puddle. **(3)**

### **Mark Scheme 9**

#### **Part (a)**

**Step 1: Take logarithms of the model equation**

$$d = k V^n \implies \log_{10} d = \log_{10}(k V^n) = \log_{10} k + n \log_{10} V$$

- **[M1]** Takes $\log_{10}$ of both sides of $d = kV^n$ to get $\log_{10} d = n\log_{10} V + \log_{10} k$.

**Step 2: Relate to the straight line graph**

Comparing with $y = mx + c$, a plot of $\log_{10} d$ against $\log_{10} V$ gives a straight line with vertical intercept $\log_{10} k$.

- **[M1]** Explains that the straight line in Figure 6 confirms the power model, with vertical intercept equal to $\log_{10} k$.

**Step 3: Calculate $k$**

$$\log_{10} k = -1.77 \implies k = 10^{-1.77} = 0.01698... \approx 0.017$$

- **[A1*]** Calculates $k = 10^{-1.77} \approx 0.017$.

#### **Part (b)**

**Step 4: Substitute $(30, 20)$ into $d = 0.017 V^n$**

$$20 = 0.017 \times 30^n$$

- **[M1]** Substitutes $V = 30$, $d = 20$ and $k = 0.017$ into the model.

**Step 5: Solve for $n$**

$$30^n = \frac{20}{0.017} = 1176.47... \implies n = \frac{\log_{10}(1176.47...)}{\log_{10} 30}$$

- **[M1]** Uses logarithms to solve for $n$.

**Step 6: State the complete model equation**

$$n = 2.08 \implies d = 0.017 V^{2.08}$$

- **[A1]** Gives $n = 2.08$ (3 sf) and writes the complete equation $d = 0.017 V^{2.08}$.

#### **Part (c)**

**Step 7: Calculate the reaction (thinking) distance**

$$\text{Speed } V = 60\text{ km}\,\text{h}^{-1} = \frac{60 \times 1000}{3600} = \frac{50}{3}\text{ m}\,\text{s}^{-1}$$

$$\text{Thinking distance} = \frac{50}{3} \times 0.8 = \frac{40}{3} \approx 13.33\text{ m}$$

- **[M1]** Converts speed to $\text{m}\,\text{s}^{-1}$ and calculates reaction distance ($\approx 13.3\text{ m}$).

**Step 8: Calculate the braking distance**

$$d = 0.017 \times 60^{2.08} \approx 86.84\text{ m}$$

- **[M1]** Calculates braking distance using $V = 60$ in their formula from (b).

**Step 9: Calculate total stopping distance and draw conclusion**

$$\text{Total stopping distance} = 13.33 + 86.84 = 100.17\text{ m}$$

Since $100.17\text{ m} > 100\text{ m}$, Sean will **not** be able to stop before reaching the puddle.

- **[A1]** Correct total stopping distance ($\approx 100\text{ m}$) and correct conclusion.

---
topic: "Vectors"
subtopic: "Solving geometric problems"
---
### **Question 10**

**Figure 7** shows a sketch of triangle $OAB$.

The point $C$ is such that $\vec{OC} = 2\vec{OA}$.

The point $M$ is the midpoint of $AB$.

The straight line through $C$ and $M$ cuts $OB$ at the point $N$.

Given $\vec{OA} = \mathbf{a}$ and $\vec{OB} = \mathbf{b}$

**(a)** Find $\vec{CM}$ in terms of $\mathbf{a}$ and $\mathbf{b}$ **(2)**

**(b)** Show that $\vec{ON} = \left(2 - \frac{3}{2}\lambda\right)\mathbf{a} + \frac{1}{2}\lambda\mathbf{b}$, where $\lambda$ is a scalar constant. **(2)**

**(c)** Hence prove that $ON : NB = 2 : 1$ **(2)**

### **Mark Scheme 10**

#### **Part (a)**

**Step 1: Express $\vec{CM}$ using vector addition**

$$\vec{CM} = \vec{CO} + \vec{OA} + \vec{AM}$$

$$\vec{CM} = -2\mathbf{a} + \mathbf{a} + \frac{1}{2}(\mathbf{b} - \mathbf{a})$$

- **[M1]** Uses a correct vector path for $\vec{CM}$.

**Step 2: Simplify $\vec{CM}$**

$$\vec{CM} = -\mathbf{a} + \frac{1}{2}\mathbf{b} - \frac{1}{2}\mathbf{a} = -\frac{3}{2}\mathbf{a} + \frac{1}{2}\mathbf{b}$$

- **[A1]** Correct simplified vector $-\frac{3}{2}\mathbf{a} + \frac{1}{2}\mathbf{b}$.

#### **Part (b)**

**Step 3: Write $\vec{ON}$ in terms of $\vec{OC}$ and $\vec{CM}$**

$$\vec{ON} = \vec{OC} + \lambda \vec{CM}$$

- **[M1]** Writes $\vec{ON} = 2\mathbf{a} + \lambda \vec{CM}$.

**Step 4: Substitute $\vec{CM}$ and factorise**

$$\vec{ON} = 2\mathbf{a} + \lambda \left(-\frac{3}{2}\mathbf{a} + \frac{1}{2}\mathbf{b}\right) = \left(2 - \frac{3}{2}\lambda\right)\mathbf{a} + \frac{1}{2}\lambda\mathbf{b}$$

- **[A1*]** Fully correct proof.

#### **Part (c)**

**Step 5: Use condition that $N$ lies on $OB$**

Since $N$ lies on $OB$, $\vec{ON}$ must be a scalar multiple of $\mathbf{b}$ only, so the coefficient of $\mathbf{a}$ is 0.

$$2 - \frac{3}{2}\lambda = 0 \implies \lambda = \frac{4}{3}$$

- **[M1]** Sets the coefficient of $\mathbf{a}$ to zero to find $\lambda = \frac{4}{3}$.

**Step 6: Find $\vec{ON}$ and the ratio $ON : NB$**

$$\vec{ON} = \frac{1}{2} \left(\frac{4}{3}\right)\mathbf{b} = \frac{2}{3}\mathbf{b}$$

Since $\vec{ON} = \frac{2}{3}\vec{OB}$, $\vec{NB} = \frac{1}{3}\vec{OB}$, which proves that $ON : NB = 2 : 1$.

- **[A1*]** Shows $\vec{ON} = \frac{2}{3}\mathbf{b}$ and concludes $ON : NB = 2 : 1$.

---
topic: "Numerical Methods"
subtopic: "Iteration"
---
### **Question 11**

**Figure 8** shows a sketch of the curve $C$ with equation $y = x^x, \; x > 0$

**(a)** Find, by firstly taking logarithms, the $x$ coordinate of the turning point of $C$.

(Solutions based entirely on graphical or numerical methods are not acceptable.) **(5)**

The point $P(\alpha, 2)$ lies on $C$.

**(b)** Show that $1.5 < \alpha < 1.6$ **(2)**

A possible iteration formula that could be used in an attempt to find $\alpha$ is

$$x_{n+1} = 2 x_n^{1 - x_n}$$

Using this formula with $x_1 = 1.5$

**(c)** find $x_4$ to 3 decimal places, **(2)**

**(d)** describe the long-term behaviour of $x_n$ **(2)**

### **Mark Scheme 11**

#### **Part (a)**

**Step 1: Take natural logarithms**

$$\ln y = \ln(x^x) \implies \ln y = x \ln x$$

- **[M1]** Takes natural logarithms of both sides to get $\ln y = x\ln x$.

**Step 2: Differentiate implicitly**

$$\frac{1}{y} \frac{\text{d}y}{\text{d}x} = 1 \cdot \ln x + x \cdot \frac{1}{x} = \ln x + 1$$

- **[M1]** Uses the product rule to differentiate $x\ln x$.
- **[A1]** Correct derivative $\frac{\text{d}y}{\text{d}x} = x^x(1 + \ln x)$.

**Step 3: Set $\frac{\text{d}y}{\text{d}x} = 0$**

$$x^x(1 + \ln x) = 0 \implies 1 + \ln x = 0 \quad (\text{since } x^x \neq 0)$$

- **[M1]** Sets derivative equal to 0.

**Step 4: Solve for $x$**

$$\ln x = -1 \implies x = \text{e}^{-1} = \frac{1}{\text{e}}$$

- **[A1]** Correct $x$-coordinate: $x = \text{e}^{-1}$ or $\frac{1}{\text{e}}$.

#### **Part (b)**

**Step 5: Evaluate $\text{f}(x) = x^x - 2$ at $x = 1.5$ and $x = 1.6$**

$$\text{f}(1.5) = 1.5^{1.5} - 2 \approx 1.837 - 2 = -0.163 < 0$$

$$\text{f}(1.6) = 1.6^{1.6} - 2 \approx 2.121 - 2 = +0.121 > 0$$

- **[M1]** Evaluates $x^x - 2$ at 1.5 and 1.6.

**Step 6: Conclude root exists in interval**

There is a change of sign and $\text{f}(x)$ is continuous, so $1.5 < \alpha < 1.6$.

- **[A1]** States change of sign and continuity, concluding $1.5 < \alpha < 1.6$.

#### **Part (c)**

**Step 7: Calculate $x_2$**

$$x_1 = 1.5 \implies x_2 = 2 \times 1.5^{1 - 1.5} = 2 \times 1.5^{-0.5} \approx 1.63299$$

- **[M1]** Calculates $x_2$ using the iteration formula.

**Step 8: Calculate $x_3$ and $x_4$**

$$x_3 = 2 \times 1.63299^{1 - 1.63299} \approx 1.46626$$

$$x_4 = 2 \times 1.46626^{1 - 1.46626} \approx 1.673$$

- **[A1]** $x_4 = 1.673$ (to 3 decimal places).

#### **Part (d)**

**Step 9: Describe long-term behaviour**

The sequence oscillates between two values (approx $1.47$ and $1.67$).

- **[B1]** States that the sequence oscillates.
- **[B1]** States that it oscillates periodically between two specific values (or forms a cobweb cycle).

---
topic: "Trigonometry and Modelling"
subtopic: "Proving trigonometric identities"
---
### **Question 12**

**(a)** Prove

$$\frac{\cos 3\theta}{\sin \theta} + \frac{\sin 3\theta}{\cos \theta} \equiv 2\cot 2\theta \quad \theta \neq (90n)^\circ, \; n \in \mathbb{Z}$$ **(4)**

**(b)** Hence solve, for $90^\circ < \theta < 180^\circ$, the equation

$$\frac{\cos 3\theta}{\sin \theta} + \frac{\sin 3\theta}{\cos \theta} = 4$$

giving any solutions to one decimal place. **(3)**

### **Mark Scheme 12**

#### **Part (a)**

**Step 1: Combine fractions over a common denominator**

$$\text{LHS} = \frac{\cos 3\theta \cos \theta + \sin 3\theta \sin \theta}{\sin \theta \cos \theta}$$

- **[M1]** Expresses LHS over common denominator $\sin \theta \cos \theta$.

**Step 2: Apply the compound angle formula to the numerator**

$$\cos 3\theta \cos \theta + \sin 3\theta \sin \theta = \cos(3\theta - \theta) = \cos 2\theta$$

- **[M1]** Applies $\cos(A - B) = \cos A \cos B + \sin A \sin B$ to obtain $\cos 2\theta$.

**Step 3: Apply the double angle formula to the denominator**

$$\sin \theta \cos \theta = \frac{1}{2} \sin 2\theta$$

- **[M1]** Applies $\sin 2\theta = 2\sin \theta \cos \theta$.

**Step 4: Complete the proof**

$$\text{LHS} = \frac{\cos 2\theta}{\frac{1}{2} \sin 2\theta} = 2 \frac{\cos 2\theta}{\sin 2\theta} = 2\cot 2\theta \equiv \text{RHS}$$

- **[A1*]** Fully correct proof with all steps clear.

#### **Part (b)**

**Step 5: Rewrite the equation using the identity**

$$2\cot 2\theta = 4 \implies \cot 2\theta = 2 \implies \tan 2\theta = \frac{1}{2}$$

- **[M1]** Uses identity from part (a) to obtain $\tan 2\theta = \frac{1}{2}$.

**Step 6: Solve for $2\theta$ in the range $180^\circ < 2\theta < 360^\circ$**

$$2\theta = \arctan(0.5) + 180^\circ = 26.565^\circ + 180^\circ = 206.565^\circ$$

- **[M1]** Solves for $2\theta$ in the interval $(180^\circ, 360^\circ)$.

**Step 7: Calculate $\theta$**

$$\theta = \frac{206.565^\circ}{2} = 103.3^\circ$$

- **[A1]** Correct answer $\theta = 103.3^\circ$ (1 dp).

---
topic: "Differentiation"
subtopic: "Modelling with differentiation"
---
### **Question 13**

**Figure 9** shows a storage tank modelled in the shape of a hollow circular cylinder closed at one end with a hemispherical shell at the other end.

$$\left[\text{A sphere of radius } r \text{ has volume } \frac{4}{3}\pi r^3 \text{ and surface area } 4\pi r^2\right]$$

A manufacturer produces a storage tank.

The tank is modelled in the shape of a hollow circular cylinder closed at one end with a hemispherical shell at the other end as shown in **Figure 9**.

The walls of the tank are assumed to have negligible thickness.

The cylinder has radius $r$ metres and height $h$ metres and the hemisphere has radius $r$ metres.

The volume of the tank is $6\text{ m}^3$.

**(a)** Show that, according to the model, the surface area of the tank, in $\text{m}^2$, is given by

$$\frac{12}{r} + \frac{5}{3}\pi r^2$$ **(4)**

The manufacturer needs to minimise the surface area of the tank.

**(b)** Use calculus to find the radius of the tank for which the surface area is a minimum. **(4)**

**(c)** Calculate the minimum surface area of the tank, giving your answer to the nearest integer. **(2)**

### **Mark Scheme 13**

#### **Part (a)**

**Step 1: Write an expression for the total volume and rearrange for $h$**

$$V = \pi r^2 h + \frac{2}{3}\pi r^3 = 6$$

$$\pi r^2 h = 6 - \frac{2}{3}\pi r^3 \implies h = \frac{6}{\pi r^2} - \frac{2}{3}r$$

- **[M1]** Equates volume formula of cylinder + hemisphere to 6.
- **[A1]** Correct expression $h = \frac{6}{\pi r^2} - \frac{2}{3}r$.

**Step 2: Write an expression for the surface area $S$**

$$S = \text{base} + \text{curved cylinder} + \text{hemisphere} = \pi r^2 + 2\pi r h + 2\pi r^2 = 3\pi r^2 + 2\pi r h$$

- **[M1]** Sets up surface area equation $S = 3\pi r^2 + 2\pi r h$.

**Step 3: Substitute $h$ into $S$**

$$S = 3\pi r^2 + 2\pi r \left(\frac{6}{\pi r^2} - \frac{2}{3}r\right) = 3\pi r^2 + \frac{12}{r} - \frac{4}{3}\pi r^2 = \frac{12}{r} + \frac{5}{3}\pi r^2$$

- **[A1*]** Fully correct proof.

#### **Part (b)**

**Step 4: Differentiate $S$ with respect to $r$**

$$\frac{\text{d}S}{\text{d}r} = -\frac{12}{r^2} + \frac{10}{3}\pi r$$

- **[M1]** Differentiates $12r^{-1} + \frac{5}{3}\pi r^2$.
- **[A1]** Correct derivative $-\frac{12}{r^2} + \frac{10}{3}\pi r$.

**Step 5: Set $\frac{\text{d}S}{\text{d}r} = 0$ and solve for $r$**

$$-\frac{12}{r^2} + \frac{10}{3}\pi r = 0 \implies \frac{10}{3}\pi r^3 = 12 \implies r^3 = \frac{36}{10\pi} = \frac{18}{5\pi}$$

- **[M1]** Sets derivative to zero and rearranges for $r^3$ or $r$.

**Step 6: Evaluate $r$**

$$r = \sqrt[3]{\frac{18}{5\pi}} \approx 1.05\text{ m}$$

- **[A1]** $r = 1.05\text{ m}$ (or awrt 1.05).

#### **Part (c)**

**Step 7: Substitute $r \approx 1.046$ into $S$**

$$S_{\text{min}} = \frac{12}{1.046} + \frac{5}{3}\pi (1.046)^2 \approx 11.47 + 5.73 = 17.20\text{ m}^2$$

- **[M1]** Substitutes their value of $r$ into the surface area equation.

**Step 8: Round to nearest integer**

$$S_{\text{min}} = 17\text{ m}^2$$

- **[A1]** 17.

---
topic: "Integration"
subtopic: "Solving differential equations"
---
### **Question 14**

**(a)** Use the substitution $u = 4 - \sqrt{h}$ to show that

$$\int \frac{\text{d}h}{4 - \sqrt{h}} = -8 \ln |4 - \sqrt{h}| - 2\sqrt{h} + k$$

where $k$ is a constant **(6)**

A team of scientists is studying a species of slow growing tree.

The rate of change in height of a tree in this species is modelled by the differential equation

$$\frac{\text{d}h}{\text{d}t} = \frac{t^{0.25}(4 - \sqrt{h})}{20}$$

where $h$ is the height in metres and $t$ is the time, measured in years, after the tree is planted.

**(b)** Find, according to the model, the range in heights of trees in this species. **(2)**

One of these trees is one metre high when it is first planted.

According to the model,

**(c)** calculate the time this tree would take to reach a height of 12 metres, giving your answer to 3 significant figures. **(7)**

### **Mark Scheme 14**

#### **Part (a)**

**Step 1: Differentiate the substitution $u = 4 - \sqrt{h}$**

$$u = 4 - h^{\frac{1}{2}} \implies \frac{\text{d}u}{\text{d}h} = -\frac{1}{2}h^{-\frac{1}{2}} = -\frac{1}{2\sqrt{h}}$$

$$\text{d}h = -2\sqrt{h}\,\text{d}u = -2(4 - u)\,\text{d}u$$

- **[M1]** Differentiates $u = 4 - \sqrt{h}$ to express $\text{d}h$ in terms of $u$ and $\text{d}u$.

**Step 2: Transform integral into $u$**

$$\int \frac{\text{d}h}{4 - \sqrt{h}} = \int \frac{-2(4 - u)}{u} \, \text{d}u = \int \left( -\frac{8}{u} + 2 \right) \text{d}u$$

- **[M1]** Substitutes into integral to eliminate $h$.
- **[A1]** Correct simplified integral in $u$: $\int \left( 2 - \frac{8}{u} \right) \text{d}u$.

**Step 3: Integrate with respect to $u$**

$$= 2u - 8\ln|u| + C$$

- **[M1]** Integrates to $2u - 8\ln|u|$.

**Step 4: Substitute back $u = 4 - \sqrt{h}$**

$$= 2(4 - \sqrt{h}) - 8\ln|4 - \sqrt{h}| + C = 8 - 2\sqrt{h} - 8\ln|4 - \sqrt{h}| + C$$

- **[M1]** Substitutes $u = 4 - \sqrt{h}$ back into expression.

**Step 5: Combine constants**

$$= -8\ln|4 - \sqrt{h}| - 2\sqrt{h} + k \quad \text{where } k = 8 + C$$

- **[A1*]** Fully correct proof.

#### **Part (b)**

**Step 6: Determine maximum height**

The tree grows while $\frac{\text{d}h}{\text{d}t} > 0 \implies 4 - \sqrt{h} > 0 \implies \sqrt{h} < 4 \implies h < 16$.

- **[M1]** Sets $4 - \sqrt{h} = 0 \implies h = 16$.
- **[A1]** Range of heights: $0 \le h < 16$ (or $1 \le h < 16$).

#### **Part (c)**

**Step 7: Separate variables in the differential equation**

$$\int \frac{\text{d}h}{4 - \sqrt{h}} = \int \frac{t^{0.25}}{20} \, \text{d}t$$

- **[M1]** Separates variables correctly.

**Step 8: Integrate both sides**

$$-8\ln|4 - \sqrt{h}| - 2\sqrt{h} = \frac{t^{1.25}}{20 \times 1.25} + c = \frac{t^{1.25}}{25} + c$$

- **[M1]** Integrates RHS to $\frac{t^{1.25}}{25}$ (or $\frac{4}{100}t^{\frac{5}{4}}$).
- **[A1]** Correct integrated equation.

**Step 9: Use initial conditions $t = 0, h = 1$ to find $c$**

$$-8\ln|4 - 1| - 2(1) = 0 + c \implies c = -8\ln 3 - 2$$

- **[M1]** Substitutes $t = 0, h = 1$ to find constant $c$.

**Step 10: Substitute $h = 12$**

$$-8\ln|4 - \sqrt{12}| - 2\sqrt{12} = \frac{t^{1.25}}{25} - 8\ln 3 - 2$$

- **[M1]** Substitutes $h = 12$ into integrated equation.

**Step 11: Solve for $t$**

$$\frac{t^{1.25}}{25} = 8\ln\left(\frac{3}{4 - \sqrt{12}}\right) - 2\sqrt{12} + 2$$

$$\frac{t^{1.25}}{25} \approx 8\ln(5.598) - 6.928 + 2 \approx 13.779 - 4.928 = 8.851$$

$$t^{1.25} = 25 \times 8.851 = 221.28 \implies t = (221.28)^{\frac{1}{1.25}} \approx 75.3\text{ years}$$

- **[M1]** Rearranges to find $t^{1.25}$ and solves for $t$.
- **[A1]** Correct answer $t = 75.3$ years (3 sf).
