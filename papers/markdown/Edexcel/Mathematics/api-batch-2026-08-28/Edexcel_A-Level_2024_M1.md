---
topic: "Mechanics and Materials"
subtopic: "Motion along a straight line"
---
### **Question 1**

At time $t$ seconds, where $t \ge 0$, a particle $P$ moves in the $x$-$y$ plane in such a way that its velocity $\mathbf{v} \text{ m s}^{-1}$ is given by

$$\mathbf{v} = t^{-\frac{1}{2}}\mathbf{i} - 4t\mathbf{j}$$

When $t = 1$, $P$ is at the point $A$ and when $t = 4$, $P$ is at the point $B$.

Find the exact distance $AB$. **(6)**

**(Total for Question 6 is 6 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Integrate velocity to find position vector $\mathbf{r}$**

$$\mathbf{r} = \int \left( t^{-\frac{1}{2}}\mathbf{i} - 4t\mathbf{j} \right) dt = 2t^{\frac{1}{2}}\mathbf{i} - 2t^2\mathbf{j} + \mathbf{c}$$

- **[M1]** Attempt to integrate $\mathbf{v}$ with respect to $t$ (at least one term correct power).
- **[A1]** Correct integration.

**Step 2: Find the positions at $t = 1$ and $t = 4$**

When $t = 1$, $\mathbf{r}_A = 2(1)\mathbf{i} - 2(1)\mathbf{j} + \mathbf{c} = 2\mathbf{i} - 2\mathbf{j} + \mathbf{c}$

When $t = 4$, $\mathbf{r}_B = 2(2)\mathbf{i} - 2(16)\mathbf{j} + \mathbf{c} = 4\mathbf{i} - 32\mathbf{j} + \mathbf{c}$

- **[M1]** Substitute limits or use definite integration $\int_{1}^{4} \mathbf{v} \, dt$.

**Step 3: Calculate displacement vector $\vec{AB}$**

$$\vec{AB} = \mathbf{r}_B - \mathbf{r}_A = (4\mathbf{i} - 32\mathbf{j}) - (2\mathbf{i} - 2\mathbf{j}) = 2\mathbf{i} - 30\mathbf{j}$$

- **[M1]** Subtract $\mathbf{r}_A$ from $\mathbf{r}_B$ (or vice versa).
- **[A1]** Correct vector $\vec{AB}$.

**Step 4: Find the exact distance $AB$**

$$AB = \sqrt{2^2 + (-30)^2} = \sqrt{4 + 900} = \sqrt{904} = 2\sqrt{226}$$

- **[A1]** Correct exact distance $2\sqrt{226}$ (or equivalent simplified surd).

---
topic: "Mechanics and Materials"
subtopic: "Dynamics"
---
### **Question 2**

**Figure 1** _(A wooden crate of mass $20\text{ kg}$ on a horizontal floor being pulled by a handle with tension $40\text{ N}$ inclined at angle $\alpha$ where $\tan\alpha = \frac{3}{4}$)._

A wooden crate of mass $20\text{ kg}$ is pulled in a straight line along a rough horizontal floor using a handle attached to the crate.

The handle is inclined at an angle $\alpha$ to the floor, as shown in Figure 1, where $\tan\alpha = \frac{3}{4}$.

The tension in the handle is $40\text{ N}$.

The coefficient of friction between the crate and the floor is $0.14$.

The crate is modelled as a particle and the handle is modelled as a light rod.

Using the model,

**(a)** find the acceleration of the crate. **(6)**

The crate is now pushed along the same floor using the handle. The handle is again inclined at the same angle $\alpha$ to the floor, and the thrust in the handle is $40\text{ N}$ as shown in Figure 2 below.

**Figure 2** _(The wooden crate being pushed by a thrust of $40\text{ N}$ at angle $\alpha$)._

**(b)** Explain briefly why the acceleration of the crate would now be less than the acceleration of the crate found in part (a). **(2)**

**(Total for Question 7 is 8 marks)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Determine trigonometric ratios for $\alpha$**

$\tan\alpha = \frac{3}{4} \Rightarrow \sin\alpha = \frac{3}{5}, \, \cos\alpha = \frac{4}{5}$

- **[B1]** Correct values for $\sin\alpha$ and $\cos\alpha$.

**Step 2: Resolve vertically**

$$R + 40\sin\alpha - 20g = 0$$

$$R = 20(9.8) - 40\left(\frac{3}{5}\right) = 196 - 24 = 172\text{ N}$$

- **[M1]** Formulate an equation for vertical equilibrium including $R$, weight ($20g$), and the vertical component of the tension.
- **[A1]** Correct value for $R$ ($172$).

**Step 3: Calculate friction**

$$F = \mu R = 0.14 \times 172 = 24.08\text{ N}$$

- **[M1]** Use $F = \mu R$ with their $R$.

**Step 4: Resolve horizontally and apply Newton's Second Law**

$$40\cos\alpha - F = ma$$

$$40\left(\frac{4}{5}\right) - 24.08 = 20a$$

$$32 - 24.08 = 20a \Rightarrow 7.92 = 20a$$

$$a = 0.396\text{ m s}^{-2}$$

- **[M1]** Apply Newton's Second Law horizontally ($T\cos\alpha - F = ma$).
- **[A1ft]** Correct equation leading to $a$.
- **[A1]** Correct acceleration $0.40\text{ m s}^{-2}$ (or $0.396$).

#### **Part (b)**

**Step 5: Explain the difference in acceleration**

When pushed, the vertical component of the force acts downwards, increasing the normal reaction $R$, which in turn increases the frictional force $F$. Since the forward horizontal component remains the same and friction is larger, the resultant force and hence the acceleration is smaller.

- **[B1]** States that normal reaction is increased (or friction is increased).
- **[B1]** Concludes that acceleration is less.

---
topic: "Mechanics and Materials"
subtopic: "Motion along a straight line"
---
### **Question 3**

[In this question $\mathbf{i}$ and $\mathbf{j}$ are horizontal unit vectors due east and due north respectively and position vectors are given relative to the fixed point $O$.]

A particle $P$ moves with constant acceleration.

At time $t = 0$, the particle is at $O$ and is moving with velocity $(2\mathbf{i} - 3\mathbf{j})\text{ m s}^{-1}$.

At time $t = 2$ seconds, $P$ is at the point $A$ with position vector $(7\mathbf{i} - 10\mathbf{j})\text{ m}$.

**(a)** Show that the magnitude of the acceleration of $P$ is $2.5\text{ m s}^{-2}$. **(4)**

At the instant when $P$ leaves the point $A$, the acceleration of $P$ changes so that $P$ now moves with constant acceleration $(4\mathbf{i} + 8.8\mathbf{j})\text{ m s}^{-2}$.

At the instant when $P$ reaches the point $B$, the direction of motion of $P$ is north east.

**(b)** Find the time it takes for $P$ to travel from $A$ to $B$. **(4)**

**(Total for Question 8 is 8 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Use constant acceleration equations for displacement**

$$\mathbf{s} = \mathbf{u}t + \frac{1}{2}\mathbf{a}t^2$$

$$7\mathbf{i} - 10\mathbf{j} = (2\mathbf{i} - 3\mathbf{j})(2) + \frac{1}{2}\mathbf{a}(2^2)$$

- **[M1]** Substitute given values into $\mathbf{s} = \mathbf{u}t + \frac{1}{2}\mathbf{a}t^2$ or equivalent uvat approach.

**Step 2: Solve for acceleration $\mathbf{a}$**

$$7\mathbf{i} - 10\mathbf{j} = 4\mathbf{i} - 6\mathbf{j} + 2\mathbf{a}$$

$$2\mathbf{a} = 3\mathbf{i} - 4\mathbf{j} \Rightarrow \mathbf{a} = 1.5\mathbf{i} - 2\mathbf{j}$$

- **[A1]** Correct acceleration vector $\mathbf{a} = 1.5\mathbf{i} - 2\mathbf{j}$.

**Step 3: Calculate the magnitude of $\mathbf{a}$**

$$|\mathbf{a}| = \sqrt{1.5^2 + (-2)^2} = \sqrt{2.25 + 4} = \sqrt{6.25} = 2.5\text{ m s}^{-2}$$

- **[M1]** Correct method for finding magnitude.
- **[A1]** Obtains $2.5$ with no errors seen (given answer).

#### **Part (b)**

**Step 4: Find velocity at point $A$**

$$\mathbf{v}_A = \mathbf{u} + \mathbf{a}t = (2\mathbf{i} - 3\mathbf{j}) + (1.5\mathbf{i} - 2\mathbf{j})(2) = 5\mathbf{i} - 7\mathbf{j}$$

- **[M1]** Correct method to find velocity at $A$.

**Step 5: Set up velocity for the second motion at time $t'$ after $A$**

$$\mathbf{v} = \mathbf{v}_A + \mathbf{a}'t' = (5\mathbf{i} - 7\mathbf{j}) + (4\mathbf{i} + 8.8\mathbf{j})t' = (5 + 4t')\mathbf{i} + (-7 + 8.8t')\mathbf{j}$$

- **[M1]** Express velocity in terms of time $t'$ after leaving $A$ using the new acceleration.

**Step 6: Use north-east direction condition**

For north-east motion, the $\mathbf{i}$ and $\mathbf{j}$ components of velocity are equal:

$$5 + 4t' = -7 + 8.8t'$$

$$12 = 4.8t' \Rightarrow t' = 2.5$$

- **[M1]** Equate $\mathbf{i}$ and $\mathbf{j}$ components of velocity (or use direction vector $\mathbf{i} + \mathbf{j}$).
- **[A1]** Correct time $2.5$ seconds.

---
topic: "Mechanics and Materials"
subtopic: "Moments"
---
### **Question 4**

**Figure 3** _(A uniform plank $AB$ of mass $M$ and length $2a$ resting with end $A$ against a rough vertical wall and held horizontally by a rope attached at $B$ and $C$ on the wall, with a block of mass $3M$ at $P$)._

A plank, $AB$, of mass $M$ and length $2a$, rests with its end $A$ against a rough vertical wall. The plank is held in a horizontal position by a rope. One end of the rope is attached to the plank at $B$ and the other end is attached to the wall at the point $C$, which is vertically above $A$.

A small block of mass $3M$ is placed on the plank at the point $P$, where $AP = x$.

The plank is in equilibrium in a vertical plane which is perpendicular to the wall.

The angle between the rope and the plank is $\alpha$, where $\tan\alpha = \frac{3}{4}$, as shown in Figure 3.

The plank is modelled as a uniform rod, the block is modelled as a particle and the rope is modelled as a light inextensible string.

Using the model,

**(a)** using the model, show that the tension in the rope is $\frac{5Mg(3x + a)}{6a}$. **(3)**

The magnitude of the horizontal component of the force exerted on the plank at $A$ by the wall is $2Mg$.

**(b)** Find $x$ in terms of $a$. **(2)**

The force exerted on the plank at $A$ by the wall acts in a direction which makes an angle $\beta$ with the horizontal.

**(c)** Find the value of $\tan\beta$. **(5)**

The rope will break if the tension in it exceeds $5Mg$.

**(d)** Explain how this will restrict the possible positions of $P$. You must justify your answer carefully. **(3)**

**(Total for Question 9 is 13 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Take moments about $A$**

$$\sum Moments about A = 0 \Rightarrow T \sin\alpha \times 2a - Mg \times a - 3Mg \times x = 0$$

- **[M1]** Correct moments equation about $A$ with all relevant forces and correct distances.

**Step 2: Substitute $\sin\alpha$ and solve for $T$**

Since $\tan\alpha = \frac{3}{4}$, $\sin\alpha = \frac{3}{5}$.

$$T \left(\frac{3}{5}\right)(2a) = Mga + 3Mgx$$

$$\frac{6}{5}a T = Mg(a + 3x)$$

$$T = \frac{5Mg(3x + a)}{6a}$$

- **[M1]** Substitute $\sin\alpha = \frac{3}{5}$ into the moments equation.
- **[A1]** Obtain the given expression for $T$ correctly.

#### **Part (b)**

**Step 3: Resolve horizontally**

$$H = T \cos\alpha$$

Given $H = 2Mg$ and $\cos\alpha = \frac{4}{5}$:

$$2Mg = T \left(\frac{4}{5}\right) \Rightarrow T = \frac{10}{4}Mg = \frac{5}{2}Mg$$

- **[M1]** Resolve forces horizontally to relate $H$ and $T\cos\alpha$.

**Step 4: Equate to expression for $T$ and solve for $x$**

$$\frac{5}{2}Mg = \frac{5Mg(3x + a)}{6a}$$

$$\frac{1}{2} = \frac{3x + a}{6a} \Rightarrow 3a = 3x + a \Rightarrow 3x = 2a \Rightarrow x = \frac{2}{3}a$$

- **[A1]** Correct value $x = \frac{2}{3}a$.

#### **Part (c)**

**Step 5: Resolve vertically at $A$**

$$V + T\sin\alpha - Mg - 3Mg = 0$$

Using $T = \frac{5}{2}Mg$ and $\sin\alpha = \frac{3}{5}$:

$$V + \frac{5}{2}Mg \left(\frac{3}{5}\right) - 4Mg = 0$$

$$V + \frac{3}{2}Mg - 4Mg = 0 \Rightarrow V = \frac{5}{2}Mg$$

- **[M1]** Resolve forces vertically to find the vertical component $V$ of the reaction at $A$.
- **[A1]** Correct value for $V$.

**Step 6: Calculate $\tan\beta$**

$$\tan\beta = \frac{V}{H} = \frac{\frac{5}{2}Mg}{2Mg} = \frac{5}{4}$$

- **[M1]** Use $\tan\beta = \frac{V}{H}$ (or equivalent angle calculation).
- **[A1]** Correct value $\frac{5}{4}$ (or $1.25$).

#### **Part (d)**

**Step 7: Set up inequality for maximum tension**

$$T \le 5Mg \Rightarrow \frac{5Mg(3x + a)}{6a} \le 5Mg$$

$$\frac{3x + a}{6a} \le 1 \Rightarrow 3x + a \le 6a \Rightarrow 3x \le 5a \Rightarrow x \le \frac{5}{3}a$$

- **[M1]** Set up inequality $T \le 5Mg$ using the expression from part (a).

**Step 8: Interpret physical limits for $P$**

Since $P$ is on the plank of length $2a$, $0 \le x \le 2a$. Therefore, the position is restricted to $0 \le x \le \frac{5}{3}a$.

- **[A1]** Correct upper limit $x \le \frac{5}{3}a$.
- **[B1]** Clear explanation incorporating the physical constraint $0 \le x \le 2a$ (or that $P$ cannot exceed the end of the plank).

---
topic: "Mechanics and Materials"
subtopic: "Projectile motion"
---
### **Question 5**

**Figure 4** _(A boy throwing a ball from $A$, $2\text{ m}$ above horizontal ground, with speed $U$ at angle $\alpha$ above the horizontal, reaching a maximum height of $3\text{ m}$ above the ground, and hitting target $T$)._

A boy throws a ball at a target. At the instant when the ball leaves the boy's hand at the point $A$, the ball is $2\text{ m}$ above horizontal ground and is moving with speed $U$ at an angle $\alpha$ above the horizontal.

In the subsequent motion, the highest point reached by the ball is $3\text{ m}$ above the ground. The target is modelled as being the point $T$, as shown in Figure 4.

The ball is modelled as a particle moving freely under gravity.

Using the model,

**(a)** show that $U^2 \sin^2\alpha = 2g$. **(2)**

The point $T$ is at a horizontal distance of $20\text{ m}$ from $A$ and is at a height of $0.75\text{ m}$ above the ground. The ball reaches $T$ without hitting the ground.

**(b)** Find the size of the angle $\alpha$. **(9)**

**(c)** State one limitation of the model that could affect your answer to part (b). **(1)**

**(d)** Find the time taken for the ball to travel from $A$ to $T$. **(3)**

**(Total for Question 10 is 15 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Use vertical motion to find maximum height relationship**

Using $v^2 = u^2 + 2as$ vertically at the highest point where $v = 0$:

$$0 = (U\sin\alpha)^2 - 2g(1)$$

$$(U\sin\alpha)^2 = 2g \Rightarrow U^2\sin^2\alpha = 2g$$

- **[M1]** Uses $v^2 = u^2 + 2as$ vertically with $v = 0$ and vertical displacement equal to $1\text{ m}$.
- **[A1]** Obtains $U^2\sin^2\alpha = 2g$ with no errors (given answer).

#### **Part (b)**

**Step 2: Set up trajectory equation**

Taking origin at $A$, coordinate of $T$ is $(20, -1.25)$ relative to $A$ (since $0.75 - 2 = -1.25$).

Using the trajectory equation:

$$y = x\tan\alpha - \frac{g x^2}{2U^2\cos^2\alpha}$$

Substitute $U^2 = \frac{2g}{\sin^2\alpha}$:

$$y = x\tan\alpha - \frac{g x^2}{2 \left(\frac{2g}{\sin^2\alpha}\right) \cos^2\alpha} = x\tan\alpha - \frac{gx^2\sin^2\alpha}{4g\cos^2\alpha} = x\tan\alpha - \frac{x^2\tan^2\alpha}{4}$$

- **[M1]** Substitute $U^2 = \frac{2g}{\sin^2\alpha}$ into the standard trajectory equation.
- **[A1]** Correct expression for trajectory in terms of $\tan\alpha$: $y = x\tan\alpha - \frac{x^2\tan^2\alpha}{4}$ (or equivalent).

**Step 3: Substitute coordinates of $T$**

Here $x = 20$ and $y = 0.75 - 2 = -1.25$.

$$-1.25 = 20\tan\alpha - \frac{20^2\tan^2\alpha}{4}$$

$$-1.25 = 20\tan\alpha - 100\tan^2\alpha$$

- **[M1]** Substitute $x = 20$ and $y = -1.25$ into the trajectory equation.

**Step 4: Solve quadratic equation for $\tan\alpha$**

$$100\tan^2\alpha - 20\tan\alpha - 1.25 = 0$$

Let $t = \tan\alpha$:

$$400t^2 - 80t - 5 = 0 \Rightarrow 80t^2 - 16t - 1 = 0$$

$$t = \frac{16 \pm \sqrt{(-16)^2 - 4(80)(-1)}}{2(80)} = \frac{16 \pm \sqrt{256 + 320}}{160} = \frac{16 \pm \sqrt{576}}{160} = \frac{16 \pm 24}{160}$$

$$t = \frac{40}{160} = 0.25 \quad \text{or} \quad t = \frac{-8}{160} = -0.05$$

- **[M1]** Solve the quadratic for $\tan\alpha$ (or $\tan^2\alpha$).
- **[A1]** Obtain correct values for $\tan\alpha$ ($0.25$ and $-0.05$).

**Step 5: Find angle $\alpha$**

$$\tan\alpha = 0.25 \Rightarrow \alpha = 14.0^\circ\text{ (or } 0.245\text{ rad)}$$

$$\tan\alpha = -0.05 \Rightarrow \alpha = -2.86^\circ \text{ (reject)}$$

- **[M1]** Select valid positive angle.
- **[A1]** Correct value for $\alpha$ ($14.0^\circ$ or $14^\circ$).

#### **Part (c)**

**Step 6: State limitation**

Air resistance is ignored / the ball is not a particle / wind effects / spin of the ball.

- **[B1]** Accept any valid physical limitation of the model.

#### **Part (d)**

**Step 7: Find time of flight to $T$**

Using horizontal motion:

$$x = (U\cos\alpha)t \Rightarrow t = \frac{x}{U\cos\alpha}$$

First find $U$:

$$U^2 = \frac{2(9.8)}{\sin^2(14.03^\circ)} = \frac{19.6}{(0.2425)^2} = 333.3 \Rightarrow U = 18.25\text{ m s}^{-1}$$

$$t = \frac{20}{18.25 \times \cos(14.03^\circ)} = \frac{20}{18.25 \times 0.970} = 1.13\text{ seconds}$$

- **[M1]** Uses horizontal motion equation $x = u_x t$ to find time.
- **[M1]** Calculates $U$ or $U\cos\alpha$ correctly.
- **[A1]** Correct time $1.13\text{ s}$ (or $1.1\text{ s}$).
