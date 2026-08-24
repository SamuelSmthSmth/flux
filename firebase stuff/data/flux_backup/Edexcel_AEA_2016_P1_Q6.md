---
topic: "Differentiation"
subtopic: "Stationary points"
---

### **Question 6**

**Figure 1** _(A sketch of a single 'arch' shape curve $C_1$, starting at the origin, reaching a peak, and ending at $x=\pi$ on the positive x-axis)._ Figure 1 shows a sketch of the curve $C_1$ with equation $$y = \cos(\cos x)\sin x \quad \text{for} \quad 0 \le x \le \pi$$

**(a)** Find $\frac{dy}{dx}$. **(3)**

**(b)** Hence verify that the turning point is at $x = \frac{\pi}{2}$ and find the y coordinate of this point. **(2)**

**(c)** Find the area of the region bounded by $C_1$ and the positive x-axis between $x = 0$ and $x = \pi$. **(4)**

**Figure 2** _(A sketch of two overlapping wave-like curves starting at the origin. $C_1$ arcs high and falls back to $x=\pi$. $C_2$ dips slightly below $C_1$, then crosses it at point A, and arches below the x-axis before ending at $x=\pi$. The region between $x=0$ and point A enclosed by $C_1$ (bottom boundary) and $C_2$ (top boundary) is shaded)._ Figure 2 shows a sketch of the curve $C_1$ and the curve $C_2$ with equation $$y = \sin(\cos x)\sin x \quad \text{for} \quad 0 \le x \le \pi$$ The curves $C_1$ and $C_2$ intersect at the origin and the point $A(a, b)$, where $a < \pi$.

**(d)** Find $a$ and $b$, giving $b$ in a form not involving trigonometric functions. **(5)**

**(e)** Find the area of the shaded region between $C_1$ and $C_2$. **(8)** **(Total 22 marks)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Differentiate using the Product Rule** $$y = \cos(\cos x)\sin x$$ Let $u = \cos(\cos x)$ and $v = \sin x$. $$\frac{du}{dx} = -\sin(\cos x) \times (-\sin x) = \sin(\cos x)\sin x$$ $$\frac{dv}{dx} = \cos x$$

- **[M1]** Use of product rule.
    

$$\frac{dy}{dx} = u \frac{dv}{dx} + v \frac{du}{dx} = \cos(\cos x)\cos x + \sin(\cos x)\sin^2 x$$

- **[A1, A1]** A1 for each correct term.
    

#### **Part (b)**

**Step 2: Verify the turning point** Substitute $x = \pi/2$ into the derivative: $$\frac{dy}{dx} = \cos(\cos(\pi/2))\cos(\pi/2) + \sin(\cos(\pi/2))\sin^2(\pi/2)$$ Since $\cos(\pi/2) = 0$ and $\sin(\pi/2) = 1$: $$= \cos(0) \times 0 + \sin(0) \times 1^2 = 1 \times 0 + 0 \times 1 = 0$$ Shows $\frac{dy}{dx} = 0$ correctly, verifying the turning point.

- **[B1ft]** Shows TP correctly (follow through for their $y'$).
    

**Step 3: Find the y-coordinate** Substitute $x = \pi/2$ into the original curve $C_1$: $$y = \cos(\cos(\pi/2))\sin(\pi/2) = \cos(0) \times 1 = 1 \times 1 = 1$$

- **[B1]** Correct y-coordinate.
    

#### **Part (c)**

**Step 4: Integrate the curve C1** We require $$\int \cos(\cos x)\sin x \, dx.$$Let $u = \cos x \Rightarrow du = -\sin x \, dx$. The integral becomes $$\int -\cos u \, du = -\sin u = -\sin(\cos x).$$
- **[M1, A1]** Suitable method; correct antiderivative.
    

**Step 5: Apply limits 0 to pi** $$\text{Area} = \left[ -\sin(\cos x) \right]_0^\pi$$ $$= (-\sin(\cos \pi)) - (-\sin(\cos 0)) = (-\sin(-1)) - (-\sin(1))$$ Since sine is odd, $\sin(-1) = -\sin(1)$: $$= \sin(1) + \sin(1) = 2\sin(1)$$

- **[dM1, A1]** Correct use of limits; final exact area.
    

#### **Part (d)**

**Step 6: Equate the two curves** Intersect $C_1$ and $C_2$: $$\sin(\cos x)\sin x = \cos(\cos x)\sin x$$

- **[M1]** Forms equation.
    

For $x$ strictly between 0 and $\pi$, $\sin x \ne 0$ so we can divide by $\sin x$: $$\sin(\cos x) = \cos(\cos x) \Rightarrow \tan(\cos x) = 1$$

- **[M1]** Cancels $\sin x$ and rearranges to get $\tan(\cos x)$. (S+ mark if explicitly commenting on $\sin x \ne 0$).
    

**Step 7: Solve for a** $$\cos x = \frac{\pi}{4} \Rightarrow x = \arccos\left(\frac{\pi}{4}\right) \quad (\text{so } a = \arccos(\pi/4))$$

- **[A1]** Correct value for $a$.
    

**Step 8: Find the y-coordinate b** Substitute $x = a$ into $C_2$ (or $C_1$): $b = \sin\left(\frac{\pi}{4}\right) \sin\left(\arccos\frac{\pi}{4}\right)$ Use a right-angled triangle where adjacent = $\pi$, hypotenuse = 4. Opposite = $\sqrt{16 - \pi^2}$. So $$\sin(\arccos(\pi/4)) = \frac{\sqrt{16 - \pi^2}}{4}$$. $$b = \frac{1}{\sqrt{2}} \times \frac{\sqrt{16 - \pi^2}}{4} = \frac{\sqrt{32 - 2\pi^2}}{8}$$

- **[M1, A1]** Method using triangle or identity for $\sin(\arccos x)$. A1 for correct exact surd form (must see $\pi$).
    

#### **Part (e)**

**Step 9: Identify bounding curves** Between $x = 0$ and $x = a$, the upper curve is $C_2$ (since $\tan(\cos x) > 1$ for $x < a \implies \cos x > \pi/4$). We need $$\int_0^a (\text{Upper} - \text{Lower}) dx = \int_0^a (C_2 - C_1) dx.$$
- **[M1]** Strategy indicating subtraction of integrated curves.
    

**Step 10: Integrate C2** For $C_2$: $$\int \sin(\cos x)\sin x \, dx = \cos(\cos x)$$. Apply limits $0$ to $a$: $$\int_0^a \sin(\cos x)\sin x \, dx = [\cos(\cos x)]_0^a = \cos(\cos a) - \cos(\cos 0)$$ $$= \cos\left(\frac{\pi}{4}\right) - \cos(1) = \frac{1}{\sqrt{2}} - \cos(1)$$

- **[M1, A1]** Correct integration and use of limits for the inner curve (outer boundary).
    

**Step 11: Evaluate integral of C1** From (c), the integral of $C_1$ is $-\sin(\cos x)$. $$\int_0^a \cos(\cos x)\sin x \, dx = [-\sin(\cos x)]_0^a = -\sin(\cos a) - (-\sin(\cos 0))$$ $$= -\sin\left(\frac{\pi}{4}\right) + \sin(1) = -\frac{1}{\sqrt{2}} + \sin(1)$$

- **[M1, A1]** Use of limits on integral from (c).
    

**Step 12: Calculate Shaded Area** $$\text{Shaded Area} = \left( \frac{1}{\sqrt{2}} - \cos(1) \right) - \left( -\frac{1}{\sqrt{2}} + \sin(1) \right)$$ $$= \frac{2}{\sqrt{2}} - \cos(1) - \sin(1) = \sqrt{2} - (\cos(1) + \sin(1))$$

- **[M1, A1]** Subtracts appropriate areas to obtain correct final exact answer.