---
topic: "Trigonometric Identities and Equations"
subtopic: "Simple trigonometric equations"
---

### Question 5

An aeroplane leaves a runway and moves with a constant speed of $V \text{ km/h}$ due north along a straight path inclined at an angle $\arctan(3/4)$ to the horizontal. A light aircraft is moving due north in a straight horizontal line in the same vertical plane as the aeroplane, at a height of 3 km above the runway. The light aircraft is travelling with a constant speed of $2V \text{ km/h}$. At the moment the aeroplane leaves the runway, the light aircraft is at a horizontal distance $d \text{ km}$ behind the aeroplane. Both aircraft continue to move with the same trajectories due north.

**(a)** Show that the distance, $D \text{ km}$, between the two aircraft $t$ hours after the aeroplane leaves the runway satisfies $$D^2 = \left(\frac{6}{5}Vt - d\right)^2 + \left(\frac{3}{5}Vt - 3\right)^2$$ **(3)**

Given that the distance between the two aircraft is never less than 2 km, **(b)** find the range of possible values for $d$. **(7)** **(+S1)**

### Mark Scheme 5

#### **Part (a)**

**Step 1: Set up coordinates** Taking the point where the plane leaves the runway as the origin... At time $t$ the planes have coordinates $(Vt \cos \alpha, Vt \sin \alpha)$ and $(2Vt - d, 3)$ respectively.

- **[(S+)]** S+ for clear set up of vector coordinates.
    

**Step 2: Vertical and Horizontal distances** Vertical distance at time $t$ is $$h_v = Vt \sin \alpha - 3$$ Horizontal distance between planes is given by $$Vt \cos \alpha - (2Vt - d)$$

- **[B1, M1]** Establishes correct vertical distance. Correct attempt at horizontal distance.
    

**Step 3: Distance formula** $$D^2 = \left(\frac{4}{5}Vt - 2Vt + d\right)^2 + \left(\frac{3}{5}Vt - 3\right)^2 = \left(\frac{6}{5}Vt - d\right)^2 + \left(\frac{3}{5}Vt - 3\right)^2 *$$

- __[A1_]_* Including correct trig ratios (terms inside brackets either way).
    

#### **Part (b)**

**Step 4: Set up inequality** $$D \geqslant 2 \Rightarrow D^2 \geqslant 4$$ $$\Rightarrow \left(d - \frac{6}{5}Vt\right)^2 + \left(\frac{3}{5}Vt - 3\right)^2 \geqslant 4$$

- **[M1]** Sets up inequality with their distance squared.
    

**Step 5: Expand and collect terms** $$\Rightarrow \frac{9}{5}(Vt)^2 - \left(\frac{12d + 18}{5}\right)Vt + d^2 + 5 \geqslant 0$$

- **[M1]** Expands and collects to a quadratic in $Vt$ or $t$.
    

**Step 6: Discriminant condition** For the inequality to hold for all $t$, we need $b^2 - 4ac \leqslant 0$. $$\Rightarrow \frac{36(2d + 3)^2}{25} \leqslant 4 \times \frac{9}{5}(d^2 + 5)$$

- **[M1]** Applies $b^2 - 4ac \leqslant 0$ to their quadratic.
    

**Step 7: Simplify inequality** $$\Rightarrow (4d^2 + 12d + 9) \leqslant 5(d^2 + 5) \Rightarrow d^2 - 12d + 16 \geqslant 0$$

- **[A1]** Correct 3TQ quadratic inequality.
    

**Step 8: Find critical values** C.V.s are $$\frac{12 \pm \sqrt{144 - 4 \times 16}}{2} = 6 \pm \sqrt{20} = 6 \pm 2\sqrt{5}$$

- **[dM1]** Attempts critical values for their quadratic.
    

**Step 9: Solve for d** Need $d \leqslant 6 - 2\sqrt{5}$ and $d \geqslant 6 + 2\sqrt{5}$ (Second aircraft is behind first at start so $d > 0$) Hence $0 < d \leqslant 6 - 2\sqrt{5}$ or $d \geqslant 6 + 2\sqrt{5}$

- **[M1, A1 (S+)]** Chooses "outsides". Correct solution (allow $<$ or $\leqslant$ at 0). S+ for explaining $d > 0$.
    

**Special Mark (+S1)**

- **[S1]** Award S1 for succinct solution or 8+ marks with S+ point.