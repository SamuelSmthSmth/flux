---
topic: "Kinematics"
subtopic: "Acceleration varying with time"
---
### **Question 1**

At time $t$ seconds, where $t \geqslant 0$, a particle $P$ moves in the $x-y$ plane in such a way that its velocity $\mathbf{v} \text{ ms}^{-1}$ is given by

$$\mathbf{v} = t^{-\frac{1}{2}}\mathbf{i} - 4t\mathbf{j}$$

When $t = 1$, $P$ is at the point $A$ and when $t = 4$, $P$ is at the point $B$.

Find the exact distance $AB$. **(6)**

**(Total for Question 6 is 6 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Integrate velocity to find position vector $\mathbf{r}$**

$$\mathbf{r} = \int \left( t^{-\frac{1}{2}}\mathbf{i} - 4t\mathbf{j} \right) dt = 2t^{\frac{1}{2}}\mathbf{i} - 2t^2\mathbf{j} + \mathbf{c}$$

- **[M1]** Integrates $\mathbf{v}$ with respect to $t$, with at least one term correct (power increased by 1).
- **[A1]** Both terms correct.

**Step 2: Find position vector at $A$ ($t = 1$) and $B$ ($t = 4$)**

$$\mathbf{r}_A = 2(1)^{\frac{1}{2}}\mathbf{i} - 2(1)^2\mathbf{j} + \mathbf{c} = 2\mathbf{i} - 2\mathbf{j} + \mathbf{c}$$

$$\mathbf{r}_B = 2(4)^{\frac{1}{2}}\mathbf{i} - 2(4)^2\mathbf{j} + \mathbf{c} = 4\mathbf{i} - 32\mathbf{j} + \mathbf{c}$$

- **[M1]** Substitutes $t = 1$ and $t = 4$ into their integrated expression.

**Step 3: Find vector $\vec{AB}$**

$$\vec{AB} = \mathbf{r}_B - \mathbf{r}_A = (4\mathbf{i} - 32\mathbf{j}) - (2\mathbf{i} - 2\mathbf{j}) = 2\mathbf{i} - 30\mathbf{j}$$

- **[M1]** Subtracts $\mathbf{r}_A$ from $\mathbf{r}_B$ to find the displacement vector $\vec{AB}$ (the constant of integration $\mathbf{c}$ must be eliminated).

**Step 4: Find the exact magnitude of $\vec{AB}$**

$$AB = |\vec{AB}| = \sqrt{2^2 + (-30)^2} = \sqrt{4 + 900} = \sqrt{904} = \sqrt{4 \times 226} = 2\sqrt{226}$$

- **[A1]** Correct unsimplified or simplified exact distance.

---
topic: "Mechanics and Materials"
subtopic: "Moments"
---
### **Question 2**

**Figure 1** _(A sketch showing a wooden crate of mass $20\text{ kg}$ on a rough horizontal floor, pulled by a handle of tension $40\text{ N}$ inclined at an angle $\alpha$ to the floor, where $\tan\alpha = \frac{3}{4}$)._

A wooden crate of mass $20\text{ kg}$ is pulled in a straight line along a rough horizontal floor using a handle attached to the crate.

The handle is inclined at an angle $\alpha$ to the floor, as shown in Figure 1, where $\tan\alpha = \frac{3}{4}$.

The tension in the handle is $40\text{ N}$.

The coefficient of friction between the crate and the floor is $0.14$.

The crate is modelled as a particle and the handle is modelled as a light rod.

Using the model,

**(a)** find the acceleration of the crate. **(6)**

The crate is now pushed along the same floor using the handle. The handle is again inclined at the same angle $\alpha$ to the floor, and the thrust in the handle is $40\text{ N}$ as shown in Figure 2 below.

**Figure 2** _(A sketch showing the wooden crate being pushed along the floor by a thrust of $40\text{ N}$ inclined at angle $\alpha$)._

**(b)** Explain briefly why the acceleration of the crate would now be less than the acceleration of the crate found in part (a). **(2)**

**(Total for Question 7 is 8 marks)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Determine trigonometric values for $\alpha$**

Since $\tan\alpha = \frac{3}{4}$, $\sin\alpha = \frac{3}{5} = 0.6$ and $\cos\alpha = \frac{4}{5} = 0.8$.

- **[B1]** Correct values for $\sin\alpha$ and $\cos\alpha$.

**Step 2: Resolve forces vertically**

$$R + 40\sin\alpha - 20g = 0$$

$$R = 20(9.8) - 40\left(\frac{3}{5}\right) = 196 - 24 = 172\text{ N}$$

- **[M1]** Resolves vertically with all relevant forces included (normal reaction, weight, vertical component of tension).
- **[A1]** Correct equation and correct value for $R$ ($172\text{ N}$ or $170\text{ N}$ using $g=9.8$).

**Step 3: Calculate maximum friction**

$$F = \mu R = 0.14 \times 172 = 24.08\text{ N}$$

- **[M1]** Uses $F = \mu R$ with their calculated value of $R$.

**Step 4: Resolve forces horizontally and use Newton's Second Law**

$$40\cos\alpha - F = ma$$

$$40\left(\frac{4}{5}\right) - 24.08 = 20a$$

$$32 - 24.08 = 20a \implies 7.92 = 20a$$

$$a = \frac{7.92}{20} = 0.396\text{ ms}^{-2}$$

- **[M1]** Applies Newton's Second Law horizontally ($X - F = ma$).
- **[A1]** Correct acceleration (accept $0.40$ or $0.396$).

#### **Part (b)**

**Step 1: Explain the change in acceleration**

When pushed, the vertical component of the force acts downwards, increasing the normal reaction $R$. Since friction $F = \mu R$, the frictional force increases, which decreases the resultant horizontal driving force ($40\cos\alpha - F$), resulting in a smaller acceleration.

- **[M1]** Identifies that normal reaction $R$ increases (or friction increases).
- **[A1]** Explains that greater friction leads to a smaller net horizontal force and thus a smaller acceleration.

---
topic: "Kinematics"
subtopic: "Acceleration varying with time"
---
### **Question 3**

[In this question $\mathbf{i}$ and $\mathbf{j}$ are horizontal unit vectors due east and due north respectively and position vectors are given relative to the fixed point $O$.]

A particle $P$ moves with constant acceleration.

At time $t = 0$, the particle is at $O$ and is moving with velocity $(2\mathbf{i} - 3\mathbf{j})\text{ ms}^{-1}$.

At time $t = 2$ seconds, $P$ is at the point $A$ with position vector $(7\mathbf{i} - 10\mathbf{j})\text{m}$.

**(a)** Show that the magnitude of the acceleration of $P$ is $2.5\text{ ms}^{-2}$. **(4)**

At the instant when $P$ leaves the point $A$, the acceleration of $P$ changes so that $P$ now moves with constant acceleration $(4\mathbf{i} + 8.8\mathbf{j})\text{ ms}^{-2}$.

At the instant when $P$ reaches the point $B$, the direction of motion of $P$ is north east.

**(b)** Find the time it takes for $P$ to travel from $A$ to $B$. **(4)**

**(Total for Question 8 is 8 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Use SUVAT to find acceleration $\mathbf{a}$**

Using $\mathbf{r} = \mathbf{u}t + \frac{1}{2}\mathbf{a}t^2$:

$$7\mathbf{i} - 10\mathbf{j} = (2\mathbf{i} - 3\mathbf{j})(2) + \frac{1}{2}\mathbf{a}(2^2)$$

$$7\mathbf{i} - 10\mathbf{j} = 4\mathbf{i} - 6\mathbf{j} + 2\mathbf{a}$$

$$2\mathbf{a} = (7 - 4)\mathbf{i} + (-10 + 6)\mathbf{j} = 3\mathbf{i} - 4\mathbf{j}$$

$$\mathbf{a} = 1.5\mathbf{i} - 2\mathbf{j}$$

- **[M1]** Uses a correct SUVAT equation relating displacement, initial velocity, time, and acceleration.
- **[A1]** Correct acceleration vector $\mathbf{a} = 1.5\mathbf{i} - 2\mathbf{j}$.

**Step 2: Find the magnitude of $\mathbf{a}$**

$$|\mathbf{a}| = \sqrt{1.5^2 + (-2)^2} = \sqrt{2.25 + 4} = \sqrt{6.25} = 2.5\text{ ms}^{-2}$$

- **[M1]** Attempts to find the magnitude of the acceleration vector.
- **[A1]** Obtains the given answer of $2.5\text{ ms}^{-2}$ with clear working.

#### **Part (b)**

**Step 1: Find velocity $\mathbf{u}_A$ at point $A$**

Using $\mathbf{v} = \mathbf{u} + \mathbf{a}t$:

$$\mathbf{u}_A = (2\mathbf{i} - 3\mathbf{j}) + (1.5\mathbf{i} - 2\mathbf{j})(2) = 2\mathbf{i} - 3\mathbf{j} + 3\mathbf{i} - 4\mathbf{j} = 5\mathbf{i} - 7\mathbf{j}$$

- **[M1]** Calculates the velocity at $A$ using $\mathbf{v} = \mathbf{u} + \mathbf{a}t$.

**Step 2: Set up velocity equation for motion from $A$ to $B$**

Let the time taken from $A$ to $B$ be $T$.

$$\mathbf{v}_B = \mathbf{u}_A + \mathbf{a}'T = (5\mathbf{i} - 7\mathbf{j}) + (4\mathbf{i} + 8.8\mathbf{j})T = (5 + 4T)\mathbf{i} + (-7 + 8.8T)\mathbf{j}$$

- **[M1]** Writes an expression for the velocity at $B$ using the new acceleration.

**Step 3: Use the condition for north-east motion**

Since the motion is north-east, the $\mathbf{i}$ and $\mathbf{j}$ components of velocity are equal:

$$5 + 4T = -7 + 8.8T$$

$$12 = 4.8T$$

$$T = \frac{12}{4.8} = 2.5\text{ seconds}$$

- **[M1]** Equates the $\mathbf{i}$ and $\mathbf{j}$ components of velocity (or sets their ratio to 1).
- **[A1]** Correct time $T = 2.5\text{ s}$.

---
topic: "Mechanics and Materials"
subtopic: "Moments"
---
### **Question **

**Figure 3** _(A sketch showing a uniform plank $AB$ of mass $M$ and length $2a$ resting with end $A$ against a rough vertical wall, held horizontally by a rope attached to $B$ and a point $C$ vertically above $A$, with a block of mass $3M$ at point $P$ where $AP = x$)._

A plank, $AB$, of mass $M$ and length $2a$, rests with its end $A$ against a rough vertical wall. The plank is held in a horizontal position by a rope. One end of the rope is attached to the plank at $B$ and the other end is attached to the wall at the point $C$, which is vertically above $A$.

A small block of mass $3M$ is placed on the plank at the point $P$, where $AP = x$.

The plank is in equilibrium in a vertical plane which is perpendicular to the wall.

The angle between the rope and the plank is $\alpha$, where $\tan\alpha = \frac{3}{4}$, as shown in Figure 3.

The plank is modelled as a uniform rod, the block is modelled as a particle and the rope is modelled as a light inextensible string.

**(a)** Using the model, show that the tension in the rope is $\frac{5Mg(3x + a)}{6a}$. **(3)**

The magnitude of the horizontal component of the force exerted on the plank at $A$ by the wall is $2Mg$.

**(b)** Find $x$ in terms of $a$. **(2)**

The force exerted on the plank at $A$ by the wall acts in a direction which makes an angle $\beta$ with the horizontal.

**(c)** Find the value of $\tan\beta$. **(5)**

The rope will break if the tension in it exceeds $5Mg$.

**(d)** Explain how this will restrict the possible positions of $P$. You must justify your answer carefully. **(3)**

**(Total for Question 9 is 13 marks)**

### **Mark Scheme **

#### **Part (a)**

**Step 1: Take moments about $A$**

$$\sum \mathcal{M}_A = 0 \Rightarrow T \sin\alpha (2a) - Mg(a) - 3Mg(x) = 0$$

- **[M1]** Forms a moment equation about $A$ containing all relevant vertical forces (tension, weight of plank, weight of block).
- **[A1]** Correct terms and distances in the moment equation.

**Step 2: Substitute $\sin\alpha$ and simplify**

From $\tan\alpha = \frac{3}{4}$, $\sin\alpha = \frac{3}{5}$.

$$T \left(\frac{3}{5}\right) (2a) = Mg a + 3Mg x$$

$$\frac{6}{5} a T = Mg(a + 3x)$$

$$T = \frac{5Mg(3x + a)}{6a}$$

- **[A1]** Obtains the printed result correctly.

#### **Part (b)**

**Step 1: Resolve horizontally**

$$H = T \cos\alpha$$

Given $H = 2Mg$ and $\cos\alpha = \frac{4}{5}$:

$$2Mg = T \left(\frac{4}{5}\right) \implies T = \frac{10}{4}Mg = \frac{5}{2}Mg$$

- **[M1]** Resolves horizontally and equates to $2Mg$.

**Step 2: Equate with the expression for $T$ from part (a)**

$$\frac{5}{2}Mg = \frac{5Mg(3x + a)}{6a}$$

$$\frac{5}{2} = \frac{5(3x + a)}{6a} \implies 30a = 10(3x + a)$$

$$3a = 3x + a \implies 2a = 3x \implies x = \frac{2}{3}a$$

- **[A1]** Correct value $x = \frac{2}{3}a$.

#### **Part (c)**

**Step 1: Find vertical force at $A$ ($V$)**

Resolving vertically:

$$V + T\sin\alpha - Mg - 3Mg = 0$$

$$V = 4Mg - T\sin\alpha$$

Substitute $T = \frac{5}{2}Mg$ and $\sin\alpha = \frac{3}{5}$:

$$V = 4Mg - \left(\frac{5}{2}Mg\right)\left(\frac{3}{5}\right) = 4Mg - \frac{3}{2}Mg = \frac{5}{2}Mg$$

- **[M1]** Resolves vertically to find the vertical component of the reaction at $A$.
- **[A1]** Correct vertical component $V = \frac{5}{2}Mg$.

**Step 2: Calculate $\tan\beta$**

$$\tan\beta = \frac{V}{H} = \frac{\frac{5}{2}Mg}{2Mg} = \frac{5}{4}$$

- **[M1]** Uses $\tan\beta = \frac{V}{H}$ with their values for $V$ and $H$.
- **[A1]** Correct value $\tan\beta = \frac{5}{4}$ (or $1.25$).

#### **Part (d)**

**Step 1: Apply tension limit**

$$T \leqslant 5Mg \implies \frac{5Mg(3x + a)}{6a} \leqslant 5Mg$$

$$3x + a \leqslant 6a \implies 3x \leqslant 5a \implies x \leqslant \frac{5}{3}a$$

- **[M1]** Sets up an inequality using the maximum tension condition $T \leqslant 5Mg$.
- **[A1]** Solves for the upper limit of $x$: $x \leqslant \frac{5}{3}a$.

**Step 2: State physical restriction**

Since the block must remain on the plank of length $2a$ (and $x \ge 0$), the possible positions of $P$ are restricted to $0 \leqslant x \leqslant \frac{5}{3}a$.

- **[A1]** Fully justifies the restriction on the range of $x$ (mentioning $x \ge 0$ or plank boundaries).

---
topic: "Trigonometric Functions"
subtopic: "Projectile motion"
---
### **Question 10**

**Figure 4** _(A sketch showing a boy throwing a ball from point $A$, which is $2\text{ m}$ above horizontal ground, with speed $U$ at an angle $\alpha$ above the horizontal, reaching a maximum height of $3\text{ m}$ above the ground, and hitting a target at point $T$)._

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

### **Mark Scheme 10**

#### **Part (a)**

**Step 1: Use vertical motion to maximum height**

Considering vertical motion from $A$ to the highest point:
- Initial vertical velocity $u_y = U\sin\alpha$
- Final vertical velocity $v_y = 0$
- Vertical displacement $s_y = 3 - 2 = 1\text{ m}$

Using $v^2 = u^2 + 2as$:

$$0 = (U\sin\alpha)^2 - 2g(1)$$

$$(U\sin\alpha)^2 = 2g \implies U^2\sin^2\alpha = 2g \implies U^2 = \frac{2g}{\sin^2\alpha}$$

- **[M1]** Uses $v^2 = u^2 + 2as$ vertically with $v = 0$, $s = 1$, and $a = -g$.
- **[A1]** Obtains the printed result correctly.

#### **Part (b)**

**Step 1: Set up equation of trajectory**

Using the equation of trajectory:
$$y = x\tan\alpha - \frac{gx^2}{2U^2\cos^2\alpha}$$

Substitute $U^2 = \frac{2g}{\sin^2\alpha}$:
$$y = x\tan\alpha - \frac{gx^2}{2\left(\frac{2g}{\sin^2\alpha}\right)\cos^2\alpha} = x\tan\alpha - \frac{gx^2\sin^2\alpha}{4g\cos^2\alpha} = x\tan\alpha - \frac{x^2\tan^2\alpha}{4}$$

- **[M1]** Substitutes $U^2$ into the equation of trajectory or derives the trajectory equation.
- **[A1]** Correct equation in terms of $x$, $y$, and $\tan\alpha$.

**Step 2: Substitute coordinates of $T$**

Target $T$ is at $x = 20$, and height above $A$ is $y = 0.75 - 2 = -1.25\text{ m}$.

$$-1.25 = 20\tan\alpha - \frac{20^2\tan^2\alpha}{4}$$

$$-1.25 = 20\tan\alpha - \frac{400\tan^2\alpha}{4}$$

$$-1.25 = 20\tan\alpha - 100\tan^2\alpha$$

- **[M1]** Substitutes $x = 20$ and $y = 0.75 - 2$ into the trajectory equation.

**Step 3: Solve quadratic in $\tan\alpha$**

Let $T = \tan\alpha$:
$$100T^2 - 20T - 1.25 = 0$$

Multiply by 4 to clear decimals:
$$400T^2 - 80T - 5 = 0 \implies 80T^2 - 16T - 1 = 0$$

Using the quadratic formula:
$$T = \frac{16 \pm \sqrt{(-16)^2 - 4(80)(-1)}}{2(80)} = \frac{16 \pm \sqrt{256 + 320}}{160} = \frac{16 \pm \sqrt{576}}{160} = \frac{16 \pm 24}{160}$$

$$T = \frac{40}{160} = 0.25 \quad \text{or} \quad T = \frac{-8}{160} = -0.05$$

- **[M1]** Solves the resulting quadratic equation for $\tan\alpha$.
- **[A1]** Correct values for $\tan\alpha$ ($0.25$ and $-0.05$).

**Step 4: Find valid angles $\alpha$**

$$\tan\alpha = 0.25 \implies \alpha = \arctan(0.25) \approx 14.0^\circ$$

$$\tan\alpha = -0.05 \implies \alpha = \arctan(-0.05) \approx -2.86^\circ \text{ (reject as } \alpha > 0 \text{)}$$

$$\alpha = 14.0^\circ \quad (\text{or } 0.245\text{ radians})$$

- **[M1]** Rejects the negative root and finds the corresponding angle $\alpha$.
- **[A1]** Correct value for $\alpha$ to 3 sf ($14.0^\circ$ or $0.245^{\text{rad}}$).

#### **Part (c)**

**Step 1: State a limitation**

Air resistance is ignored / the ball is not a particle (has spin/dimensions) / wind effects / variation in $g$.

- **[B1]** Any valid limitation of the model.

#### **Part (d)**

**Step 1: Find time of flight to $T$**

Using horizontal motion:
$$x = u_x t \implies x = (U\cos\alpha)t$$

From part (a), $U^2 = \frac{2(9.8)}{\sin^2(14.036^\circ)} \implies U \approx 39.2$ (or use exact values).
Alternatively, using $U\sin\alpha = \sqrt{2g} = \sqrt{19.6} \approx 4.427$, and since $\tan\alpha = 0.25$, $U\cos\alpha = \frac{U\sin\alpha}{\tan\alpha} = \frac{4.427}{0.25} = 17.71$.

$$t = \frac{x}{U\cos\alpha} = \frac{20}{17.71} \approx 1.13\text{ seconds}$$

- **[M1]** Uses horizontal motion equation $x = (U\cos\alpha)t$ to find time $t$.
- **[A1]** Correct time $1.13\text{ s}$ (accept $1.1$ or $1.13$).

---
topic: "Graphs and Transformations"
subtopic: "General"
---
### **Examiner Report 1**

General feedback highlights that the paper worked well with most candidates attempting all six questions. Questions 1 to 3 provided an accessible start, while questions 4, 5, and 6 ramped up in difficulty. Standard errors included precision issues in "show that" questions and omitting units or significant figure requirements.

**Question 1:** Very well answered. Most used correct $suvat$ equations or integration. A few arithmetic slips occurred with acceleration values.

**Question 2:** Part (a) was answered correctly by nearly all. Parts (b) and (c) were generally well done, though some omitted the $28\text{ N}$ force or struggled with significant figures for the final coefficient of friction.

**Question 3:** Part (a) was answered well, though some stopped after finding the velocity vector instead of calculating its magnitude using Pythagoras' theorem. Part (b) saw various successful approaches, though some candidates set components incorrectly to $1$.

**Question 4:** Part (a) was well attempted. Parts (b) and (c) proved challenging; candidates who used integration with constants of integration generally fared better than those using standard $suvat$ without accounting for initial positions properly.

**Question 5:** Part (a) was well done. Part (b) proved to be a significant stumbling block, requiring correct algebraic manipulation and trigonometric identities ($\sec^2\alpha = 1 + \tan^2\alpha$) to reach the printed quadratic. Part (c) required selecting the correct larger angle. Part (d) answers often incorrectly cited mass or flat ground as limitations.

**Question 6:** Part (a) was answered well. Part (b) was well handled using moments about $A$. Part (c) had mixed success in resolving forces. Part (d) successfully tested Pythagoras' theorem applied to reactions. Part (e) required precise reasoning regarding the position of the weight and moments.
