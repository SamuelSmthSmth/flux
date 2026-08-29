---
topic: "Differentiation"
subtopic: "Integration"
---
### **Question 1**

At time $t$ seconds, where $t \ge 0$, a particle $P$ moves in the $x$-$y$ plane in such a way that its velocity $\mathbf{v} \text{ m s}^{-1}$ is given by

$$\mathbf{v} = t^{-\frac{1}{2}}\mathbf{i} - 4t\mathbf{j}$$

When $t = 1$, $P$ is at the point $A$ and when $t = 4$, $P$ is at the point $B$.

Find the exact distance $AB$. **(6)**

**(Total for Question 6 is 6 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Integrate velocity to find displacement**

$$\mathbf{r} = \int \left( t^{-\frac{1}{2}}\mathbf{i} - 4t\mathbf{j} \right) dt = 2t^{\frac{1}{2}}\mathbf{i} - 2t^2\mathbf{j} + \mathbf{c}$$

- **[M1]** Integrates $\mathbf{v}$ with respect to $t$, increasing power by 1 for at least one term.
- **[A1]** Correct integration.

**Step 2: Find position vector at $t = 1$ (point $A$) and $t = 4$ (point $B$)**

$$\mathbf{r}_A = 2(1)^{\frac{1}{2}}\mathbf{i} - 2(1)^2\mathbf{j} + \mathbf{c} = 2\mathbf{i} - 2\mathbf{j} + \mathbf{c}$$

$$\mathbf{r}_B = 2(4)^{\frac{1}{2}}\mathbf{i} - 2(4)^2\mathbf{j} + \mathbf{c} = 4\mathbf{i} - 32\mathbf{j} + \mathbf{c}$$

- **[M1]** Finds $\mathbf{r}_B - \mathbf{r}_A$ (constant of integration $\mathbf{c}$ cancels).

$$\vec{AB} = \mathbf{r}_B - \mathbf{r}_A = (4\mathbf{i} - 32\mathbf{j}) - (2\mathbf{i} - 2\mathbf{j}) = 2\mathbf{i} - 30\mathbf{j}$$

- **[A1]** Correct displacement vector $\vec{AB}$.

**Step 3: Calculate exact distance $AB$**

$$AB = \sqrt{2^2 + (-30)^2} = \sqrt{4 + 900} = \sqrt{904} = 2\sqrt{226}$$

- **[M1]** Uses Pythagoras' theorem on the displacement components.
- **[A1]** Correct exact distance $2\sqrt{226}$ (or $\sqrt{904}$).

---
topic: "Mechanics and Materials"
subtopic: "Moments"
---
### **Question 2**

**Figure 1** _(A wooden crate of mass $20\text{ kg}$ on a rough horizontal floor, pulled by a handle inclined at angle $\alpha$ with tension $40\text{ N}$)._

A wooden crate of mass $20\text{ kg}$ is pulled in a straight line along a rough horizontal floor using a handle attached to the crate.

The handle is inclined at an angle $\alpha$ to the floor, as shown in Figure 1, where $\tan\alpha = \frac{3}{4}$.

The tension in the handle is $40\text{ N}$.

The coefficient of friction between the crate and the floor is $0.14$.

The crate is modelled as a particle and the handle is modelled as a light rod.

Using the model,

**(a)** find the acceleration of the crate. **(6)**

The crate is now pushed along the same floor using the handle. The handle is again inclined at the same angle $\alpha$ to the floor, and the thrust in the handle is $40\text{ N}$ as shown in Figure 2 below.

**Figure 2** _(The wooden crate being pushed by a handle inclined downwards at angle $\alpha$ with thrust $40\text{ N}$)._

**(b)** Explain briefly why the acceleration of the crate would now be less than the acceleration of the crate found in part (a). **(2)**

**(Total for Question 7 is 8 marks)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Resolve forces vertically**

$$R + 40\sin\alpha = 20g$$

Since $\tan\alpha = \frac{3}{4}$, $\sin\alpha = \frac{3}{5}$ and $\cos\alpha = \frac{4}{5}$.

$$R + 40\left(\frac{3}{5}\right) = 20(9.8) \implies R + 24 = 196 \implies R = 172\text{ N}$$

- **[M1]** Resolves vertically, including weight, normal reaction, and a vertical component of the force.
- **[A1]** Correct equation for vertical equilibrium.
- **[A1]** Correct value of $R = 172$.

**Step 2: Calculate friction and apply Newton's second law horizontally**

$$F = \mu R = 0.14 \times 172 = 24.08\text{ N}$$

$$40\cos\alpha - F = 20a$$

$$40\left(\frac{4}{5}\right) - 24.08 = 20a$$

$$32 - 24.08 = 20a \implies 7.92 = 20a \implies a = 0.396\text{ m s}^{-2}$$

- **[M1]** Uses $F = \mu R$ with their $R$.
- **[M1]** Applies Newton's Second Law horizontally ($F = ma$).
- **[A1]** Correct acceleration $0.396\text{ m s}^{-2}$ (or $0.40$ using $g=9.8$).

#### **Part (b)**

**Step 1: Explain the change in acceleration**

When pushed, the vertical component of the force acts downwards, increasing the normal reaction $R$. This increases the frictional force $F = \mu R$, thereby reducing the resultant horizontal force and hence the acceleration.

- **[B1]** Identifies that normal reaction $R$ is larger (or friction is larger).
- **[B1]** Concludes that acceleration is smaller.

---
topic: "Differentiation"
subtopic: "Integration"
---
### **Question 3**

**[In this question $\mathbf{i}$ and $\mathbf{j}$ are horizontal unit vectors due east and due north respectively and position vectors are given relative to the fixed point $O$.]**

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

**Step 1: Use constant acceleration formula to find acceleration $\mathbf{a}$**

$$\mathbf{r} = \mathbf{u}t + \frac{1}{2}\mathbf{a}t^2$$

$$7\mathbf{i} - 10\mathbf{j} = (2\mathbf{i} - 3\mathbf{j})(2) + \frac{1}{2}\mathbf{a}(2^2)$$

$$7\mathbf{i} - 10\mathbf{j} = 4\mathbf{i} - 6\mathbf{j} + 2\mathbf{a}$$

$$2\mathbf{a} = 3\mathbf{i} - 4\mathbf{j} \implies \mathbf{a} = 1.5\mathbf{i} - 2.0\mathbf{j}$$

- **[M1]** Uses a correct suvat displacement formula with given values.
- **[A1]** Correct equation for $\mathbf{a}$.

**Step 2: Calculate the magnitude of $\mathbf{a}$**

$$|\mathbf{a}| = \sqrt{1.5^2 + (-2.0)^2} = \sqrt{2.25 + 4} = \sqrt{6.25} = 2.5\text{ m s}^{-2}$$

- **[M1]** Attempts to find the magnitude of the acceleration vector.
- **[A1]** Obtains $2.5\text{ m s}^{-2}$ with no errors seen.

#### **Part (b)**

**Step 1: Find velocity at point $A$**

$$\mathbf{v}_A = \mathbf{u} + \mathbf{a}t = (2\mathbf{i} - 3\mathbf{j}) + (1.5\mathbf{i} - 2\mathbf{j})(2) = 2\mathbf{i} - 3\mathbf{j} + 3\mathbf{i} - 4\mathbf{j} = 5\mathbf{i} - 7\mathbf{j}$$

- **[M1]** Finds velocity at $A$ using $\mathbf{v} = \mathbf{u} + \mathbf{a}t$.

**Step 2: Find velocity at point $B$ after time $t'$ from $A$**

$$\mathbf{v}_B = (5\mathbf{i} - 7\mathbf{j}) + (4\mathbf{i} + 8.8\mathbf{j})t' = (5 + 4t')\mathbf{i} + (-7 + 8.8t')\mathbf{j}$$

- **[M1]** Sets up expression for velocity at $B$ with new acceleration and time $t'$.

**Step 3: Use the condition that motion is north-east**

Since motion is north-east, the components of velocity in $\mathbf{i}$ and $\mathbf{j}$ directions are equal:

$$5 + 4t' = -7 + 8.8t'$$

$$12 = 4.8t' \implies t' = \frac{12}{4.8} = 2.5\text{ seconds}$$

- **[M1]** Sets $i$-component equal to $j$-component for north-east motion and solves for $t'$.
- **[A1]** Correct time $2.5$ seconds.

---
topic: "Statics"
subtopic: "Moments"
---
### **Question 4**

**Figure 3** _(A uniform plank $AB$ of mass $M$ and length $2a$, resting against a rough vertical wall at $A$, held horizontally by a rope from $B$ to $C$, with a block of mass $3M$ at $P$)._

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

$$\sum M(A) = 0 \Rightarrow T \sin\alpha (2a) - Mg(a) - 3Mg(x) = 0$$

- **[M1]** Forms a moment equation about $A$ containing all relevant forces.
- **[A1]** Correct unsimplified moment equation.

**Step 2: Substitute $\sin\alpha$ and simplify**

Since $\tan\alpha = \frac{3}{4}$, $\sin\alpha = \frac{3}{5}$.

$$2a T \left(\frac{3}{5}\right) = Mga + 3Mgx$$

$$\frac{6}{5}a T = Mg(a + 3x)$$

$$T = \frac{5Mg(3x + a)}{6a}$$

- **[A1]** Obtains the printed result correctly with clear substitution.

#### **Part (b)**

**Step 1: Resolve horizontally**

$$H = T \cos\alpha$$

Given $H = 2Mg$ and $\cos\alpha = \frac{4}{5}$:

$$2Mg = T \left(\frac{4}{5}\right) \implies T = \frac{10}{4}Mg = \frac{5}{2}Mg$$

- **[M1]** Resolves horizontally to relate $H$ and $T$.

**Step 2: Solve for $x$ in terms of $a$**

$$\frac{5}{2}Mg = \frac{5Mg(3x + a)}{6a}$$

$$\frac{3}{2} = \frac{3x + a}{2a} \implies 3a = 3x + a \implies 3x = 2a \implies x = \frac{2}{3}a$$

- **[A1]** Correct $x = \frac{2}{3}a$.

#### **Part (c)**

**Step 1: Resolve vertically**

$$V + T\sin\alpha = Mg + 3Mg$$

$$V + \left(\frac{5}{2}Mg\right)\left(\frac{3}{5}\right) = 4Mg$$

$$V + \frac{3}{2}Mg = 4Mg \implies V = \frac{5}{2}Mg$$

- **[M1]** Resolves vertically to find the vertical component $V$ of the hinge force at $A$.
- **[A1]** Correct vertical component $V = \frac{5}{2}Mg$.

**Step 2: Find $\tan\beta$**

$$\tan\beta = \frac{V}{H} = \frac{\frac{5}{2}Mg}{2Mg} = \frac{5}{4}$$

- **[M1]** Uses $\tan\beta = \frac{V}{H}$ or equivalent trigonometric relationship.
- **[A1]** Correct value $\tan\beta = \frac{5}{4}$.

#### **Part (d)**

**Step 1: Apply condition for tension**

$$T \le 5Mg \implies \frac{5Mg(3x + a)}{6a} \le 5Mg$$

$$\frac{3x + a}{6a} \le 1 \implies 3x + a \le 6a \implies 3x \le 5a \implies x \le \frac{5}{3}a$$

- **[M1]** Sets up inequality using $T \le 5Mg$.
- **[A1]** Obtains upper bound for $x$.

**Step 2: State the restriction on $P$**

Since $0 \le x \le 2a$ (or $x$ must lie on the plank), the position of $P$ is restricted such that $0 \le x \le \frac{5}{3}a$.

- **[B1]** Fully explains the restriction, accounting for the physical limits of the plank ($0 \le x \le 2a$).

---
topic: "Kinematics"
subtopic: "Projectile motion"
---
### **Question 5**

**Figure 4** _(A ball thrown from point $A$, $2\text{ m}$ above the ground, with speed $U$ at angle $\alpha$, reaching a maximum height of $3\text{ m}$ above the ground, hitting a target at $T$)._

A boy throws a ball at a target. At the instant when the ball leaves the boy's hand at the point $A$, the ball is $2\text{ m}$ above horizontal ground and is moving with speed $U$ at an angle $\alpha$ above the horizontal.

In the subsequent motion, the highest point reached by the ball is $3\text{ m}$ above the ground. The target is modelled as being the point $T$, as shown in Figure 4.

The ball is modelled as a particle moving freely under gravity.

Using the model,

**(a)** show that $U^2 = \frac{2g}{\sin^2\alpha}$. **(2)**

The point $T$ is at a horizontal distance of $20\text{ m}$ from $A$ and is at a height of $0.75\text{ m}$ above the ground. The ball reaches $T$ without hitting the ground.

**(b)** Find the size of the angle $\alpha$. **(9)**

**(c)** State one limitation of the model that could affect your answer to part (b). **(1)**

**(d)** Find the time taken for the ball to travel from $A$ to $T$. **(3)**

**(Total for Question 10 is 15 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Use vertical motion to maximum height**

$$v_y^2 = u_y^2 + 2as_y \implies 0 = (U\sin\alpha)^2 - 2g(1)$$

$$U^2\sin^2\alpha = 2g \implies U^2 = \frac{2g}{\sin^2\alpha}$$

- **[M1]** Uses $v^2 = u^2 + 2as$ vertically with $v_y = 0$, $u_y = U\sin\alpha$, and $s_y = 1$.
- **[A1]** Correct derivation of the given result.

#### **Part (b)**

**Step 1: Form equation of trajectory**

Taking origin at $A$:

$$y = x\tan\alpha - \frac{gx^2}{2U^2\cos^2\alpha}$$

Substitute $U^2 = \frac{2g}{\sin^2\alpha}$:

$$y = x\tan\alpha - \frac{gx^2}{2\left(\frac{2g}{\sin^2\alpha}\right)\cos^2\alpha} = x\tan\alpha - \frac{gx^2}{\left(\frac{4g}{\sin^2\alpha}\right)\cos^2\alpha} = x\tan\alpha - \frac{gx^2 \sin^2\alpha}{4g\cos^2\alpha}$$

$$y = x\tan\alpha - \frac{x^2\tan^2\alpha}{4}$$

- **[M1]** Uses the standard cartesian equation of trajectory or derives it.
- **[M1]** Substitutes for $U^2$ into the trajectory equation.
- **[A1]** Simplifies the trajectory equation to $y = x\tan\alpha - \frac{x^2\tan^2\alpha}{4}$ (or in terms of $\alpha$).

**Step 2: Substitute coordinates of $T$**

Target $T$ is at $x = 20$, and height above $A$ is $y = 0.75 - 2 = -1.25\text{ m}$.

$$-1.25 = 20\tan\alpha - \frac{20^2\tan^2\alpha}{4}$$

$$-1.25 = 20\tan\alpha - \frac{400\tan^2\alpha}{4}$$

$$-1.25 = 20\tan\alpha - 100\tan^2\alpha$$

- **[M1]** Substitutes $x = 20$ and $y = -1.25$ into the trajectory equation.
- **[A1]** Correct quadratic equation in $\tan\alpha$.

**Step 3: Solve quadratic equation for $\tan\alpha$**

Let $T = \tan\alpha$:

$$100T^2 - 20T - 1.25 = 0 \implies 400T^2 - 80T - 5 = 0$$

$$(20T - 1)(20T + 5) = 0 \implies T = \frac{1}{20} = 0.05\text{ or } T = -\frac{5}{20} = -0.25$$

Since $\alpha$ is an angle of projection above the horizontal, $\tan\alpha > 0$, so $\tan\alpha = 0.05$.

- **[M1]** Solves the quadratic equation for $\tan\alpha$.
- **[A1]** Obtains correct value $\tan\alpha = 0.05$ (rejecting negative root).

**Step 4: Find angle $\alpha$**

$$\alpha = \arctan(0.05) = 2.8624^\circ \approx 2.86^\circ$$

- **[A1]** Correct value for $\alpha$ to 3 significant figures ($2.86^\circ$).

#### **Part (c)**

**Step 1: State a limitation**

Air resistance is ignored / the ball is not a particle / wind effects / rotation of the ball (spin).

- **[B1]** Any valid limitation of the model.

#### **Part (d)**

**Step 1: Find horizontal velocity component**

$$U^2 = \frac{2(9.8)}{\sin^2(2.8624^\circ)} = \frac{19.6}{(0.04987)^2} \approx 7878\implies U \approx 88.76\text{ m s}^{-1}$$

$$u_x = U\cos\alpha = 88.76 \times \cos(2.8624^\circ) \approx 88.65\text{ m s}^{-1}$$

Alternatively, using $x = u_x t$:

First find $U^2$ directly: $U^2 = \frac{2g}{\sin^2\alpha} = \frac{2 \times 9.8}{0.05^2 \cos^2\alpha}$ ... easier:

$u_x = U\cos\alpha$. From $U^2\sin^2\alpha = 2g$:

$U = \frac{\sqrt{2g}}{\sin\alpha} = \frac{\sqrt{19.6}}{0.05} = 28\sqrt{19.6} \approx 123.95$? Wait:
$\sin\alpha = 0.05$, so $\cos\alpha = \sqrt{1 - 0.05^2} = \sqrt{0.9975}$.
$U^2 = \frac{19.6}{0.0025} = 7840 \implies U = \sqrt{7840} = 28\sqrt{10}$.
$u_x = U\cos\alpha = 28\sqrt{10} \times \frac{\sqrt{399}}{20} = \frac{28\sqrt{3990}}{20} = 1.4\sqrt{3990} \approx 88.44\text{ m s}^{-1}$.

Horizontal distance $x = 20\text{ m}$:

$$t = \frac{x}{u_x} = \frac{20}{88.44} \approx 0.226\text{ seconds}$$

- **[M1]** Uses horizontal motion formula $x = (U\cos\alpha)t$.
- **[M1]** Calculates $U$ or $u_x$ correctly.
- **[A1]** Correct time $0.226\text{ s}$ (or $0.23\text{ s}$).
