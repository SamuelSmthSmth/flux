---
topic: "Parametric Equations"
subtopic: "Parametric equations"
---

### Question 3

**Figure 1**

_(Figure 1 shows the curve C given by parametric equations meeting a circle at points A and B. A shaded region R is bounded by curve C and the lower arc of the circle.)_

Figure 1 shows the curve $C$ given by the parametric equations $$x = \frac{5}{\sqrt{3}}\sin t, \hspace{1cm} y = 5(1 - \cos t), \hspace{1cm} 0 \leqslant t \leqslant 2\pi$$

The circle with centre at the origin $O$ and with radius $\frac{5\sqrt{2}}{2}$ meets the curve $C$ at the points $A$ and $B$ as shown in Figure 1.

**(a)** Determine the value of $t$ at the point $B$. **(3)**

The region $R$, shown shaded in Figure 1, is bounded by the curve $C$ and the circle. **(b)** Determine the area of the region $R$. **(7)**

### Mark Scheme 3

#### **Part (a)**

**Step 1: Solve simultaneously** $$\left(\frac{5}{\sqrt{3}}\sin t\right)^2 + (5(1 - \cos t))^2 = \left(\frac{5\sqrt{2}}{2}\right)^2$$

- **[M1]** Solves circle and parametric equations simultaneously / uses distance formula at point $B$.
    

**Step 2: Form quadratic in cos t** $$\Rightarrow \frac{25}{3}(1 - \cos^2 t) + 25(1 - \cos t)^2 = \frac{25}{2}$ $\Rightarrow 4\cos^2 t - 12\cos t + 5 = 0$$

- **[M1]** Uses $\sin^2 t = 1 - \cos^2 t$ to get equation in $\cos t$ only, gathers terms and solves a three term quadratic.
    

**Step 3: Solve for t** $$\Rightarrow (2\cos t - 5)(2\cos t - 1) = 0 \Rightarrow \cos t = \frac{1}{2} \Rightarrow t = \frac{\pi}{3}$$

- **[A1]** Correct value of $t$.
    

#### **Part (b)**

**Step 4: Identify sector angle** Angle $$OBB_x = \arctan\left(\frac{5/2}{5/2}\right) = \frac{\pi}{4}$$ For sector, angle is $$\pi - 2\times\frac{\pi}{4} = \frac{\pi}{2}$$

- **[M1]** Identifies the angle of the sector required.
    

**Step 5: Area of sector** Area sector $$= \frac{1}{2} \times \frac{\pi}{2} \times \left(\frac{5\sqrt{2}}{2}\right)^2 = \frac{25\pi}{8}$$

- **[M1]** Applies sector formula with their angle.
    

**Step 6: Integrate curve C** $$\int_{0}^{\pi/3} y \frac{dx}{dt} dt = \int_{0}^{\pi/3} 5(1 - \cos t)\frac{5}{\sqrt{3}}\cos t dt$$

- **[M1]** Correct method for area under curve.
    

**Step 7: Evaluate integral** $$= \frac{25}{\sqrt{3}} \int_{0}^{\pi/3} \cos t - \frac{1}{2}(1 + \cos 2t) dt = \frac{25}{\sqrt{3}} \left[ \sin t - \frac{1}{2}\left(t + \frac{1}{2}\sin 2t\right) \right]_0^{\pi/3}$ $= \frac{25}{\sqrt{3}} \left[ \frac{\sqrt{3}}{2} - \frac{1}{2}\left(\frac{\pi}{3} + \frac{\sqrt{3}}{4}\right) \right]$$

- **[dM1, A1]** Applies correct method of integration. A correct answer for area under the curve.
    

**Step 8: Calculate total shaded area R** $$Area = \frac{25\pi}{8} + 2\left( \frac{1}{2} \times \frac{5}{2} \times \frac{5}{2} - \frac{25}{\sqrt{3}}\left(\frac{3\sqrt{3}}{8} - \frac{\pi}{6}\right) \right) = 25\left(\frac{\pi}{8} + \frac{\pi}{3\sqrt{3}} - \frac{1}{2}\right)$$ oe

- **[M1, A1]** Identifiable overall strategy (e.g. Sector OAB + 2*(Triangle - Area under curve)).
