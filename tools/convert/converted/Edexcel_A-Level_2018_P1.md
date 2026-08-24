---
topic: "Radians"
subtopic: "Small angle approximations"
---
### **Question 1**

Given that $\theta$ is small and is measured in radians, use the small angle approximations to find an approximate value of

$$\frac{1 - \cos 4\theta}{2\theta \sin 3\theta}$$ **(3)**

### **Mark Scheme 1**

**Step 1: Apply small angle approximations to $\cos 4\theta$ and $\sin 3\theta$**

$$\cos 4\theta \approx 1 - \frac{(4\theta)^2}{2} = 1 - 8\theta^2$$

$$\sin 3\theta \approx 3\theta$$

- **[M1]** Attempts to use $\cos 4\theta \approx 1 - \frac{(4\theta)^2}{2}$ or $\sin 3\theta \approx 3\theta$.

**Step 2: Substitute approximations into the expression**

$$\frac{1 - \cos 4\theta}{2\theta \sin 3\theta} \approx \frac{1 - (1 - 8\theta^2)}{2\theta(3\theta)}$$

- **[M1]** Substitutes both valid approximations into the numerator and denominator to form an algebraic fraction in $\theta$.

**Step 3: Simplify to find the value**

$$\frac{8\theta^2}{6\theta^2} = \frac{4}{3}$$

- **[A1]** Correct value $\frac{4}{3}$ (or equivalent fraction/decimal).

---
topic: "Differentiation"
subtopic: "Stationary points"
---
### **Question 2**

A curve $C$ has equation

$$y = x^2 - 2x - 24\sqrt{x}, \quad x > 0$$

**(a)** Find

**(i)** $\frac{\mathrm{d}y}{\mathrm{d}x}$

**(ii)** $\frac{\mathrm{d}^2y}{\mathrm{d}x^2}$ **(3)**

**(b)** Verify that $C$ has a stationary point when $x = 4$ **(2)**

**(c)** Determine the nature of this stationary point, giving a reason for your answer. **(2)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Find the first derivative**

$$y = x^2 - 2x - 24x^{\frac{1}{2}}$$

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 2x - 2 - 12x^{-\frac{1}{2}}$$

- **[M1]** Differentiates $x^n \rightarrow x^{n-1}$ for at least one term.
- **[A1]** Correct expression for $\frac{\mathrm{d}y}{\mathrm{d}x}$.

**Step 2: Find the second derivative**

$$\frac{\mathrm{d}^2y}{\mathrm{d}x^2} = 2 + 6x^{-\frac{3}{2}}$$

- **[B1]** Correct expression for $\frac{\mathrm{d}^2y}{\mathrm{d}x^2}$.

#### **Part (b)**

**Step 3: Evaluate $\frac{\mathrm{d}y}{\mathrm{d}x}$ at $x = 4$**

$$\left.\frac{\mathrm{d}y}{\mathrm{d}x}\right|_{x=4} = 2(4) - 2 - 12(4)^{-\frac{1}{2}} = 8 - 2 - 6 = 0$$

- **[M1]** Substitutes $x = 4$ into their $\frac{\mathrm{d}y}{\mathrm{d}x}$.
- **[A1]** Shows working arriving at $0$ and concludes that $x = 4$ is a stationary point.

#### **Part (c)**

**Step 4: Evaluate $\frac{\mathrm{d}^2y}{\mathrm{d}x^2}$ at $x = 4$ and determine nature**

$$\left.\frac{\mathrm{d}^2y}{\mathrm{d}x^2}\right|_{x=4} = 2 + 6(4)^{-\frac{3}{2}} = 2 + \frac{6}{8} = \frac{11}{4}$$

- **[M1]** Substitutes $x = 4$ into their $\frac{\mathrm{d}^2y}{\mathrm{d}x^2}$.
- **[A1]** Evaluates as $\frac{11}{4} > 0$ (or $> 0$) and concludes minimum point.

---
topic: "Radians"
subtopic: "Areas of sectors and segments"
---
### **Question 3**

**Figure 1** shows a sector $AOB$ of a circle with centre $O$ and radius $r\text{ cm}$.

The angle $AOB$ is $\theta$ radians.

The area of the sector $AOB$ is $11\text{ cm}^2$

Given that the perimeter of the sector is $4$ times the length of the arc $AB$, find the exact value of $r$. **(4)**

### **Mark Scheme 3**

**Step 1: Set up the perimeter and arc length relationship**

$$\text{Perimeter} = 2r + r\theta$$

$$\text{Arc length } AB = r\theta$$

$$2r + r\theta = 4r\theta$$

- **[M1]** Uses perimeter $= 2r + r\theta$ and arc length $= r\theta$ to form an equation connecting $r$ and $\theta$.

**Step 2: Solve for $\theta$**

$$2r = 3r\theta \Rightarrow \theta = \frac{2}{3}$$

- **[A1]** Correct value for $\theta = \frac{2}{3}$.

**Step 3: Use the area formula to find $r$**

$$\text{Area} = \frac{1}{2}r^2\theta = 11$$

$$\frac{1}{2}r^2 \left(\frac{2}{3}\right) = 11 \Rightarrow \frac{1}{3}r^2 = 11$$

- **[M1]** Uses area $= \frac{1}{2}r^2\theta = 11$ with their $\theta$ to solve for $r^2$ or $r$.

$$r^2 = 33 \Rightarrow r = \sqrt{33}$$

- **[A1]** $r = \sqrt{33}$.

---
topic: "Numerical Methods"
subtopic: "Iteration"
---
### **Question 4**

The curve with equation $y = 2\ln(8 - x)$ meets the line $y = x$ at a single point, $x = \alpha$.

**(a)** Show that $3 < \alpha < 4$ **(2)**

**Figure 2** shows the graph of $y = 2\ln(8 - x)$ and the graph of $y = x$.

A student uses the iteration formula

$$x_{n+1} = 2\ln(8 - x_n), \quad n \in \mathbb{N}$$

in an attempt to find an approximation for $\alpha$.

Using the graph and starting with $x_1 = 4$

**(b)** determine whether or not this iteration formula can be used to find an approximation for $\alpha$, justifying your answer. **(2)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Define a continuous function and test boundaries**

Let $f(x) = 2\ln(8 - x) - x$

$$f(3) = 2\ln(5) - 3 \approx 0.2188 > 0$$

$$f(4) = 2\ln(4) - 4 \approx -1.227 < 0$$

- **[M1]** Attempts $f(3)$ and $f(4)$ with $f(x) = 2\ln(8 - x) - x$ or evaluates values of $2\ln(8 - x)$ and $x$ at $x = 3$ and $x = 4$.
- **[A1]** Gives correct values to at least 1 significant figure, notes change of sign, and concludes $3 < \alpha < 4$.

#### **Part (b)**

**Step 2: Use the graph or calculate iterations to justify convergence**

Starting with $x_1 = 4$:

$$x_2 = 2\ln(4) \approx 2.77$$

$$x_3 = 2\ln(5.23) \approx 3.31$$

- **[M1]** Draws a cobweb diagram starting at $x_1 = 4$ or calculates $x_2 \approx 2.77$ and $x_3 \approx 3.31$.
- **[A1]** States that the iteration formula can be used, with valid justification (e.g. cobweb diagram spirals inwards towards $\alpha$ / sequence converges to $\alpha$).

---
topic: "Differentiation"
subtopic: "The quotient rule"
---
### **Question 5**

Given that

$$y = \frac{3\sin\theta}{2\sin\theta + 2\cos\theta} \quad -\frac{\pi}{4} < \theta < \frac{3\pi}{4}$$

show that

$$\frac{\mathrm{d}y}{\mathrm{d}\theta} = \frac{A}{1 + \sin 2\theta} \quad -\frac{\pi}{4} < \theta < \frac{3\pi}{4}$$

where $A$ is a rational constant to be found. **(5)**

### **Mark Scheme 5**

**Step 1: Apply the quotient rule**

$$\frac{\mathrm{d}y}{\mathrm{d}\theta} = \frac{(2\sin\theta + 2\cos\theta)(3\cos\theta) - (3\sin\theta)(2\cos\theta - 2\sin\theta)}{(2\sin\theta + 2\cos\theta)^2}$$

- **[M1]** Applies the quotient rule $\frac{u'v - uv'}{v^2}$ or product rule on $3\sin\theta (2\sin\theta + 2\cos\theta)^{-1}$.
- **[A1]** Correct unsimplified derivative.

**Step 2: Expand the numerator**

$$\text{Numerator} = 6\sin\theta\cos\theta + 6\cos^2\theta - 6\sin\theta\cos\theta + 6\sin^2\theta = 6(\sin^2\theta + \cos^2\theta) = 6$$

- **[M1]** Uses $\sin^2\theta + \cos^2\theta = 1$ to simplify the numerator to a constant.

**Step 3: Expand and simplify the denominator**

$$\text{Denominator} = 4\sin^2\theta + 8\sin\theta\cos\theta + 4\cos^2\theta = 4(\sin^2\theta + \cos^2\theta) + 4(2\sin\theta\cos\theta) = 4 + 4\sin 2\theta$$

- **[M1]** Uses $\sin 2\theta = 2\sin\theta\cos\theta$ and $\sin^2\theta + \cos^2\theta = 1$ in the denominator.

**Step 4: Express in final form**

$$\frac{\mathrm{d}y}{\mathrm{d}\theta} = \frac{6}{4 + 4\sin 2\theta} = \frac{1.5}{1 + \sin 2\theta}$$

- **[A1]** Obtains $A = \frac{3}{2}$ or $1.5$ (accept $\frac{1.5}{1 + \sin 2\theta}$ or $\frac{3/2}{1 + \sin 2\theta}$).

---
topic: "Circles"
subtopic: "Intersections of straight lines and circles"
---
### **Question 6**

**Figure 3** shows circle $C$ with centre $A(7, 5)$.

The line $l$, with equation $y = 2x + 1$, is the tangent to $C$ at the point $P$, as shown in **Figure 3**.

**(a)** Show that an equation of the line $PA$ is $2y + x = 17$ **(3)**

**(b)** Find an equation for $C$. **(4)**

The line with equation $y = 2x + k, \quad k \neq 1$ is also a tangent to $C$.

**(c)** Find the value of the constant $k$. **(3)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Find the gradient of line $PA$**

Gradient of tangent $l$ is $2$.

$$\text{Gradient of } PA = -\frac{1}{2}$$

- **[M1]** Uses perpendicular gradient rule $m_2 = -\frac{1}{m_1}$.

**Step 2: Form the equation of line $PA$**

$$y - 5 = -\frac{1}{2}(x - 7)$$

$$2y - 10 = -x + 7 \Rightarrow 2y + x = 17$$

- **[M1]** Uses point $(7, 5)$ and gradient $-\frac{1}{2}$ to form line equation.
- **[A1*]** Correctly proves $2y + x = 17$.

#### **Part (b)**

**Step 3: Find coordinates of point $P$**

Solve $y = 2x + 1$ and $2y + x = 17$ simultaneously:

$$2(2x + 1) + x = 17 \Rightarrow 5x + 2 = 17 \Rightarrow x = 3$$

$$y = 2(3) + 1 = 7$$

- **[M1]** Solves $y = 2x + 1$ and $2y + x = 17$ simultaneously to find $P$.
- **[A1]** $P(3, 7)$.

**Step 4: Calculate the radius $r$ and write the equation of $C$**

$$r^2 = (7 - 3)^2 + (5 - 7)^2 = 16 + 4 = 20$$

- **[M1]** Uses distance formula to find radius or radius squared.

$$(x - 7)^2 + (y - 5)^2 = 20$$

- **[A1]** Correct equation for circle $C$.

#### **Part (c)**

**Step 5: Find the value of $k$**

Midpoint of tangents passes through $A(7, 5)$ with gradient $2$:

$$y - 5 = 2(x - 7) \Rightarrow y = 2x - 9$$

- **[M1]** Finds equation of line parallel to $l$ passing through centre $(7, 5)$ or uses vector translation from $P(3, 7)$.

$$k = -9 - (1 - (-9)) = -19$$

- **[M1]** Method to calculate $k$.
- **[A1]** $k = -19$.

---
topic: "Integration"
subtopic: "Definite integrals"
---
### **Question 7**

Given that $k \in \mathbb{Z}^+$

**(a)** show that $\int_k^{3k} \frac{2}{3x - k} \, \mathrm{d}x$ is independent of $k$, **(4)**

**(b)** show that $\int_k^{2k} \frac{2}{(2x - k)^2} \, \mathrm{d}x$ is inversely proportional to $k$. **(3)**

### **Mark Scheme 7**

#### **Part (a)**

**Step 1: Integrate $\frac{2}{3x - k}$**

$$\int \frac{2}{3x - k} \, \mathrm{d}x = \frac{2}{3}\ln|3x - k|$$

- **[M1]** Integrates to $\lambda \ln(3x - k)$.
- **[A1]** Correct integral $\frac{2}{3}\ln(3x - k)$.

**Step 2: Apply limits and show independence of $k$**

$$\left[ \frac{2}{3}\ln(3x - k) \right]_k^{3k} = \frac{2}{3}\ln(8k) - \frac{2}{3}\ln(2k) = \frac{2}{3}\ln\left(\frac{8k}{2k}\right) = \frac{2}{3}\ln 4$$

- **[M1]** Substitutes limits $3k$ and $k$ and uses log laws to combine.
- **[A1*]** Obtains $\frac{2}{3}\ln 4$ (or $\frac{4}{3}\ln 2$) and states that this is independent of $k$.

#### **Part (b)**

**Step 3: Integrate $\frac{2}{(2x - k)^2}$**

$$\int 2(2x - k)^{-2} \, \mathrm{d}x = -(2x - k)^{-1} = -\frac{1}{2x - k}$$

- **[M1]** Integrates to $\mu(2x - k)^{-1}$.
- **[A1]** Correct integral $-\frac{1}{2x - k}$.

**Step 4: Apply limits and show inverse proportionality to $k$**

$$\left[ -\frac{1}{2x - k} \right]_k^{2k} = \left(-\frac{1}{4k - k}\right) - \left(-\frac{1}{2k - k}\right) = -\frac{1}{3k} + \frac{1}{k} = \frac{2}{3k}$$

- **[A1*]** Obtains $\frac{2}{3k}$ and concludes that it is inversely proportional to $k$ (since $\frac{2}{3k} = \frac{C}{k}$).

---
topic: "Trigonometry and Modelling"
subtopic: "Modelling with trigonometric functions"
---
### **Question 8**

The depth of water, $D$ metres, in a harbour on a particular day is modelled by the formula

$$D = 5 + 2\sin(30t)^\circ \quad 0 \le t < 24$$

where $t$ is the number of hours after midnight.

A boat enters the harbour at 6:30am and it takes 2 hours to load its cargo.

The boat requires the depth of water to be at least $3.8\text{ metres}$ before it can leave the harbour.

**(a)** Find the depth of the water in the harbour when the boat enters the harbour. **(1)**

**(b)** Find, to the nearest minute, the earliest time the boat can leave the harbour.

*(Solutions based entirely on graphical or numerical methods are not acceptable.)* **(4)**

### **Mark Scheme 8**

#### **Part (a)**

**Step 1: Calculate depth at 6:30am ($t = 6.5$)**

$$D = 5 + 2\sin(30 \times 6.5)^\circ = 5 + 2\sin(195^\circ) \approx 4.48\text{ m}$$

- **[B1]** $4.48\text{ m}$ (or $4.482\dots$).

#### **Part (b)**

**Step 2: Set up the inequality / equation for leaving depth**

Earliest leaving attempt is after 8:30am ($t \ge 8.5$).

$$5 + 2\sin(30t)^\circ = 3.8 \Rightarrow 2\sin(30t)^\circ = -1.2 \Rightarrow \sin(30t)^\circ = -0.6$$

- **[M1]** Sets $D = 3.8$ and rearranges to $\sin(30t)^\circ = -0.6$.

**Step 3: Solve for $t > 8.5$**

$$30t = 360^\circ - 36.87^\circ = 323.13^\circ$$

- **[M1]** Uses correct trigonometric method to find angle in 4th quadrant ($323.13^\circ$).

$$t = \frac{323.13}{30} = 10.771\dots \text{ hours}$$

- **[A1]** $t \approx 10.771$.

**Step 4: Convert $t$ to time of day**

$$10.771\text{ hours} = 10\text{ hours } 46.26\text{ minutes} \Rightarrow 10\text{: }46\text{ am}$$

- **[A1]** Earliest time is 10:46 am (or 10:46).

---
topic: "Differentiation"
subtopic: "Implicit differentiation"
---
### **Question 9**

**Figure 4** shows a sketch of the curve with equation $x^2 - 2xy + 3y^2 = 50$

**(a)** Show that $\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{y - x}{3y - x}$ **(4)**

The curve is used to model the shape of a cycle track with both $x$ and $y$ measured in km.

The points $P$ and $Q$ represent points that are furthest west and furthest east of the origin $O$, as shown in **Figure 4**.

Using part (a),

**(b)** find the exact coordinates of the point $P$. **(5)**

**(c)** Explain briefly how to find the coordinates of the point that is furthest north of the origin $O$. (You do not need to carry out this calculation). **(1)**

### **Mark Scheme 9**

#### **Part (a)**

**Step 1: Differentiate implicitly with respect to $x$**

$$2x - \left(2y + 2x\frac{\mathrm{d}y}{\mathrm{d}x}\right) + 6y\frac{\mathrm{d}y}{\mathrm{d}x} = 0$$

- **[M1]** Differentiates $x^2 \rightarrow 2x$ and $3y^2 \rightarrow 6y\frac{\mathrm{d}y}{\mathrm{d}x}$.
- **[M1]** Uses product rule on $-2xy \rightarrow -2y - 2x\frac{\mathrm{d}y}{\mathrm{d}x}$.

**Step 2: Rearrange for $\frac{\mathrm{d}y}{\mathrm{d}x}$**

$$2x - 2y = (2x - 6y)\frac{\mathrm{d}y}{\mathrm{d}x} \Rightarrow \frac{\mathrm{d}y}{\mathrm{d}x} = \frac{2y - 2x}{6y - 2x} = \frac{y - x}{3y - x}$$

- **[A1]** Correct intermediate equation for $\frac{\mathrm{d}y}{\mathrm{d}x}$.
- **[A1*]** Correctly reaches $\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{y - x}{3y - x}$.

#### **Part (b)**

**Step 3: Condition for furthest west/east**

Points furthest west/east occur where tangent is vertical ($\frac{\mathrm{d}x}{\mathrm{d}y} = 0$ / denominator is zero):

$$3y - x = 0 \Rightarrow x = 3y$$

- **[M1]** Sets denominator $3y - x = 0 \Rightarrow x = 3y$.

**Step 4: Substitute $x = 3y$ into original curve equation**

$$(3y)^2 - 2(3y)y + 3y^2 = 50 \Rightarrow 9y^2 - 6y^2 + 3y^2 = 50$$

$$6y^2 = 50 \Rightarrow y^2 = \frac{25}{3} \Rightarrow y = \pm \frac{5}{\sqrt{3}}$$

- **[M1]** Substitutes $x = 3y$ into $x^2 - 2xy + 3y^2 = 50$.
- **[A1]** $y = \pm \frac{5}{\sqrt{3}}$ (or $\pm \frac{5\sqrt{3}}{3}$).

**Step 5: Select coordinates for $P$ (furthest west $\Rightarrow x < 0$)**

$$y = -\frac{5}{\sqrt{3}}, \quad x = 3\left(-\frac{5}{\sqrt{3}}\right) = -5\sqrt{3}$$

- **[M1]** Chooses negative root for $P$.
- **[A1]** Exact coordinates $P\left(-5\sqrt{3}, -\frac{5\sqrt{3}}{3}\right)$ or $P\left(-5\sqrt{3}, -\frac{5}{\sqrt{3}}\right)$.

#### **Part (c)**

**Step 6: Explain how to find point furthest north**

Set $\frac{\mathrm{d}y}{\mathrm{d}x} = 0 \Rightarrow y - x = 0 \Rightarrow y = x$, substitute $y = x$ into original equation and solve for $y$ (selecting the positive value for $y$).

- **[B1]** Clear explanation: set $y = x$, substitute into curve equation and select positive root for $y$.

---
topic: "Integration"
subtopic: "Modelling with differential equations"
---
### **Question 10**

The height above ground, $H\text{ metres}$, of a passenger on a roller coaster can be modelled by the differential equation

$$\frac{\mathrm{d}H}{\mathrm{d}t} = \frac{H\cos(0.25t)}{40}$$

where $t$ is the time, in seconds, from the start of the ride.

Given that the passenger is $5\text{ m}$ above the ground at the start of the ride,

**(a)** show that $H = 5\mathrm{e}^{0.1\sin(0.25t)}$ **(5)**

**(b)** State the maximum height of the passenger above the ground. **(1)**

The passenger reaches the maximum height, for the second time, $T\text{ seconds}$ after the start of the ride.

**(c)** Find the value of $T$. **(2)**

### **Mark Scheme 10**

#### **Part (a)**

**Step 1: Separate variables**

$$\int \frac{1}{H} \, \mathrm{d}H = \int \frac{\cos(0.25t)}{40} \, \mathrm{d}t$$

- **[M1]** Separates variables correctly.

**Step 2: Integrate both sides**

$$\ln H = \frac{1}{40 \times 0.25}\sin(0.25t) + c = 0.1\sin(0.25t) + c$$

- **[A1]** Integrates $\frac{1}{H}$ to $\ln H$.
- **[A1]** Integrates $\frac{\cos(0.25t)}{40}$ to $0.1\sin(0.25t)$.

**Step 3: Apply initial condition $t = 0, H = 5$**

$$\ln 5 = 0.1\sin(0) + c \Rightarrow c = \ln 5$$

- **[M1]** Substitutes $t = 0, H = 5$ to find constant $c$.

$$\ln H - \ln 5 = 0.1\sin(0.25t) \Rightarrow \ln\left(\frac{H}{5}\right) = 0.1\sin(0.25t) \Rightarrow H = 5\mathrm{e}^{0.1\sin(0.25t)}$$

- **[A1*]** Correctly proves $H = 5\mathrm{e}^{0.1\sin(0.25t)}$.

#### **Part (b)**

**Step 4: State maximum height**

Maximum occurs when $\sin(0.25t) = 1$:

$$H_{\max} = 5\mathrm{e}^{0.1} \approx 5.53\text{ m}$$

- **[B1]** $5\mathrm{e}^{0.1}$ or $5.53\text{ m}$ (accept $5.525\dots$).

#### **Part (c)**

**Step 5: Calculate $T$ for second maximum**

Second maximum occurs when $0.25T = \frac{5\pi}{2}$

$$T = 10\pi \approx 31.4\text{ s}$$

- **[M1]** Sets $0.25T = \frac{5\pi}{2}$ (or $450^\circ$).
- **[A1]** $T = 10\pi$ or $31.4$.

---
topic: "Binomial Expansion"
subtopic: "Expanding (1 + x)^n"
---
### **Question 11**

**(a)** Use binomial expansions to show that

$$\sqrt{\frac{1 + 4x}{1 - x}} \approx 1 + \frac{5}{2}x - \frac{5}{8}x^2$$ **(6)**

A student substitutes $x = \frac{1}{2}$ into both sides of the approximation shown in part (a) in an attempt to find an approximation to $\sqrt{6}$

**(b)** Give a reason why the student should not use $x = \frac{1}{2}$ **(1)**

**(c)** Substitute $x = \frac{1}{11}$ into

$$\sqrt{\frac{1 + 4x}{1 - x}} = 1 + \frac{5}{2}x - \frac{5}{8}x^2$$

to obtain an approximation to $\sqrt{6}$. Give your answer as a fraction in its simplest form. **(3)**

### **Mark Scheme 11**

#### **Part (a)**

**Step 1: Expand $(1 + 4x)^{\frac{1}{2}}$**

$$(1 + 4x)^{\frac{1}{2}} = 1 + \frac{1}{2}(4x) + \frac{\left(\frac{1}{2}\right)\left(-\frac{1}{2}\right)}{2!}(4x)^2 = 1 + 2x - 2x^2$$

- **[M1]** Binomial expansion of $(1 + 4x)^{\frac{1}{2}}$ up to $x^2$.
- **[A1]** Correct unsimplified or simplified expansion $1 + 2x - 2x^2$.

**Step 2: Expand $(1 - x)^{-\frac{1}{2}}$**

$$(1 - x)^{-\frac{1}{2}} = 1 + \left(-\frac{1}{2}\right)(-x) + \frac{\left(-\frac{1}{2}\right)\left(-\frac{3}{2}\right)}{2!}(-x)^2 = 1 + \frac{1}{2}x + \frac{3}{8}x^2$$

- **[M1]** Binomial expansion of $(1 - x)^{-\frac{1}{2}}$ up to $x^2$.
- **[A1]** Correct unsimplified or simplified expansion $1 + \frac{1}{2}x + \frac{3}{8}x^2$.

**Step 3: Multiply the two expansions**

$$\left(1 + 2x - 2x^2\right)\left(1 + \frac{1}{2}x + \frac{3}{8}x^2\right) = 1 + \frac{1}{2}x + \frac{3}{8}x^2 + 2x + x^2 - 2x^2 = 1 + \frac{5}{2}x - \frac{5}{8}x^2$$

- **[M1]** Multiplies expansions collecting terms up to $x^2$.
- **[A1*]** Shows final result $1 + \frac{5}{2}x - \frac{5}{8}x^2$.

#### **Part (b)**

**Step 4: State reason for invalidity**

Expansion of $(1 + 4x)^{\frac{1}{2}}$ requires $|4x| < 1 \Rightarrow |x| < \frac{1}{4}$. Since $x = \frac{1}{2} > \frac{1}{4}$, the expansion is not valid.

- **[B1]** States that $x = \frac{1}{2}$ is outside the range of validity $|x| < \frac{1}{4}$.

#### **Part (c)**

**Step 5: Substitute $x = \frac{1}{11}$**

$$\text{LHS} = \sqrt{\frac{1 + \frac{4}{11}}{1 - \frac{1}{11}}} = \sqrt{\frac{15/11}{10/11}} = \sqrt{\frac{3}{2}} = \frac{\sqrt{6}}{2}$$

- **[M1]** Evaluates LHS with $x = \frac{1}{11}$ to get $\frac{\sqrt{6}}{2}$ or $\sqrt{\frac{3}{2}}$.

$$\text{RHS} = 1 + \frac{5}{2(11)} - \frac{5}{8(121)} = 1 + \frac{5}{22} - \frac{5}{968} = \frac{1183}{968}$$

- **[M1]** Evaluates RHS with $x = \frac{1}{11}$.

$$\frac{\sqrt{6}}{2} \approx \frac{1183}{968} \Rightarrow \sqrt{6} \approx \frac{1183}{484}$$

- **[A1]** Correct fraction $\frac{1183}{484}$.

---
topic: "Exponentials and Logarithms"
subtopic: "Exponential modelling"
---
### **Question 12**

The value, $£V$, of a vintage car $t$ years after it was first valued on 1st January 2001, is modelled by the equation

$$V = Ap^t \quad \text{where } A \text{ and } p \text{ are constants}$$

Given that the value of the car was $£32000$ on 1st January 2005 and $£50000$ on 1st January 2012

**(a)** **(i)** find $p$ to 4 decimal places,

**(ii)** show that $A$ is approximately $24\,800$ **(4)**

**(b)** With reference to the model, interpret

**(i)** the value of the constant $A$,

**(ii)** the value of the constant $p$. **(2)**

Using the model,

**(c)** find the year during which the value of the car first exceeds $£100\,000$ **(4)**

### **Mark Scheme 12**

#### **Part (a)**

**Step 1: Set up simultaneous equations**

At $t = 4, V = 32000 \Rightarrow 32000 = Ap^4$

At $t = 11, V = 50000 \Rightarrow 50000 = Ap^{11}$

- **[M1]** Forms equations $32000 = Ap^4$ and $50000 = Ap^{11}$.

**Step 2: Solve for $p$**

$$\frac{Ap^{11}}{Ap^4} = p^7 = \frac{50000}{32000} = 1.5625 \Rightarrow p = (1.5625)^{\frac{1}{7}} \approx 1.0658$$

- **[A1]** $p \approx 1.0658$.

**Step 3: Solve for $A$**

$$A = \frac{32000}{(1.0658)^4} = 24796.8\dots \approx 24800$$

- **[M1]** Substitutes $p$ into one equation to find $A$.
- **[A1*]** Correctly shows $A \approx 24800$.

#### **Part (b)**

**Step 4: Interpret constants $A$ and $p$**

**(i)** $A$ is the value of the car on 1st January 2001 (in $£$).

- **[B1]** Correct interpretation of $A$ (value on 1st Jan 2001).

**(ii)** $p$ is the annual factor by which the value of the car increases (or value increases by $6.58\%$ per year).

- **[B1]** Correct interpretation of $p$ (annual growth rate / factor).

#### **Part (c)**

**Step 5: Set up inequality/equation for $V > 100000$**

$$24800(1.0658)^t = 100000 \Rightarrow (1.0658)^t = \frac{100000}{24800} \approx 4.032258$$

- **[M1]** Sets $24800(1.0658)^t = 100000$.

**Step 6: Solve for $t$ using logarithms**

$$t \ln(1.0658) = \ln(4.032258) \Rightarrow t = \frac{\ln(4.032258)}{\ln(1.0658)} \approx 21.88\text{ years}$$

- **[M1]** Takes logarithms to solve for $t$.
- **[A1]** $t \approx 21.88$.

**Step 7: State the calendar year**

$$2001 + 21.88 = 2022.88 \Rightarrow \text{year } 2022$$

- **[A1]** Year 2022.

---
topic: "Integration"
subtopic: "Integration by substitution"
---
### **Question 13**

Show that

$$\int_0^2 2x\sqrt{x + 2} \, \mathrm{d}x = \frac{32}{15}(2 + \sqrt{2})$$ **(7)**

### **Mark Scheme 13**

**Step 1: Choose a substitution**

Let $u = x + 2 \Rightarrow \mathrm{d}u = \mathrm{d}x$ and $x = u - 2$.

- **[M1]** Attempts a valid substitution $u = x + 2$ or $u^2 = x + 2$.

**Step 2: Change limits**

When $x = 0, u = 2$; when $x = 2, u = 4$.

- **[B1]** Correct limits for $u$ ($2$ and $4$).

**Step 3: Express integrand in terms of $u$**

$$\int_2^4 2(u - 2)\sqrt{u} \, \mathrm{d}u = \int_2^4 (2u^{\frac{3}{2}} - 4u^{\frac{1}{2}}) \, \mathrm{d}u$$

- **[M1]** Expands integrand into powers of $u$.

**Step 4: Integrate term by term**

$$\left[ \frac{4}{5}u^{\frac{5}{2}} - \frac{8}{3}u^{\frac{3}{2}} \right]_2^4$$

- **[M1]** Integrates $u^n \rightarrow u^{n+1}$.
- **[A1]** Correct integrated expression.

**Step 5: Substitute limits**

$$\text{Upper limit } (u = 4): \frac{4}{5}(32) - \frac{8}{3}(8) = \frac{128}{5} - \frac{64}{3} = \frac{64}{15}$$

$$\text{Lower limit } (u = 2): \frac{4}{5}(4\sqrt{2}) - \frac{8}{3}(2\sqrt{2}) = \frac{16\sqrt{2}}{5} - \frac{16\sqrt{2}}{3} = -\frac{32\sqrt{2}}{15}$$

- **[M1]** Substitutes limits $4$ and $2$ into their integrated expression.

**Step 6: Combine and simplify to required form**

$$\frac{64}{15} - \left(-\frac{32\sqrt{2}}{15}\right) = \frac{64 + 32\sqrt{2}}{15} = \frac{32}{15}(2 + \sqrt{2})$$

- **[A1*]** Correctly obtains $\frac{32}{15}(2 + \sqrt{2})$.

---
topic: "Parametric Equations"
subtopic: "Parametric equations"
---
### **Question 14**

A curve $C$ has parametric equations

$$x = 3 + 2\sin t, \quad y = 4 + 2\cos 2t, \quad 0 \le t < 2\pi$$

**(a)** Show that all points on $C$ satisfy $y = 6 - (x - 3)^2$ **(2)**

**(b)** **(i)** Sketch the curve $C$.

**(ii)** Explain briefly why $C$ does not include all points of $y = 6 - (x - 3)^2, \quad x \in \mathbb{R}$ **(3)**

The line with equation $x + y = k$, where $k$ is a constant, intersects $C$ at two distinct points.

**(c)** State the range of values of $k$, writing your answer in set notation. **(5)**

### **Mark Scheme 14**

#### **Part (a)**

**Step 1: Eliminate parameter $t$**

$$x - 3 = 2\sin t \Rightarrow \sin t = \frac{x - 3}{2}$$

$$y = 4 + 2\cos 2t = 4 + 2(1 - 2\sin^2 t) = 6 - 4\sin^2 t$$

- **[M1]** Uses double angle identity $\cos 2t = 1 - 2\sin^2 t$ and substitutes $\sin t = \frac{x - 3}{2}$.

$$y = 6 - 4\left(\frac{x - 3}{2}\right)^2 = 6 - (x - 3)^2$$

- **[A1*]** Correctly shows $y = 6 - (x - 3)^2$.

#### **Part (b)**

**Step 2: Sketch curve $C$**

- **Figure 5** shows a inverted parabola with maximum at $(3, 6)$, starting at $(1, 2)$ and ending at $(5, 2)$.

- **[B1]** Correct shape (inverted parabola) with vertex at $(3, 6)$.
- **[B1]** Correct domain restricted to $1 \le x \le 5$ (endpoints at $(1, 2)$ and $(5, 2)$).

**Step 3: Explain why not all points are included**

Since $-1 \le \sin t \le 1$, $x$ is restricted to $1 \le x \le 5$, whereas $x \in \mathbb{R}$ allows all real numbers.

- **[B1]** States that $x$ is restricted to $1 \le x \le 5$.

#### **Part (c)**

**Step 4: Find value of $k$ for tangency**

Substitute $y = k - x$ into parabola:

$$k - x = 6 - (x^2 - 6x + 9) \Rightarrow x^2 - 7x + k + 3 = 0$$

- **[M1]** Equates line $y = k - x$ and curve equation to form quadratic in $x$.

For tangency, set discriminant $b^2 - 4ac = 0$:

$$49 - 4(1)(k + 3) = 0 \Rightarrow 49 - 4k - 12 = 0 \Rightarrow 4k = 37 \Rightarrow k = 9.25$$

- **[M1]** Uses discriminant $= 0$ to find upper boundary $k = 9.25$.
- **[A1]** $k = 9.25$ (or $\frac{37}{4}$).

**Step 5: Find values of $k$ at endpoints**

At endpoint $(5, 2)$: $k = 5 + 2 = 7$.

- **[M1]** Evaluates $k = x + y$ at lower endpoint $(5, 2)$ (or $(1, 2)$).

**Step 6: Write range in set notation**

$$\{k \in \mathbb{R} : 7 < k < 9.25\}$$

- **[A1]** Correct set notation $\{k \in \mathbb{R} : 7 < k < 9.25\}$ or $\{k : 7 < k < 9.25\}$.
