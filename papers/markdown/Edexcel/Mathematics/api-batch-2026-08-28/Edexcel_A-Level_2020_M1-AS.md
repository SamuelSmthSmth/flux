---
topic: "Mechanics and Materials"
subtopic: "Projectile motion"
---
### **Question 1**

The point $A$ is $1.8\text{ m}$ vertically above horizontal ground.

At time $t = 0$, a small stone is projected vertically upwards with speed $U\text{ m s}^{-1}$ from the point $A$.

At time $t = T$ seconds, the stone hits the ground.

The speed of the stone as it hits the ground is $10\text{ m s}^{-1}$

In an initial model of the motion of the stone as it moves from $A$ to where it hits the ground

* the stone is modelled as a particle moving freely under gravity
* the acceleration due to gravity is modelled as having magnitude $10\text{ m s}^{-2}$

Using the model,

**(a)** find the value of $U$, **(3)**

**(b)** find the value of $T$. **(2)**

**(c)** Suggest one refinement, apart from including air resistance, that would make the model more realistic. **(1)**

In reality the stone will not move freely under gravity and will be subject to air resistance.

**(d)** Explain how this would affect your answer to part (a). **(1)**

**(Total 7 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Set up SUVAT equation** 
Using $v^2 = u^2 + 2as$ with $s = -1.8, v = -10, a = -10$
$$(-10)^2 = U^2 + 2(-10)(-1.8)$$
- **[M1]** Uses a correct SUVAT equation involving $U$, $v$, $a$, and $s$.

**Step 2: Solve for $U$**
$$100 = U^2 + 36 \Rightarrow U^2 = 64$$
$$U = 8$$
- **[A1]** Correct substitution and rearrangement.
- **[A1]** $U = 8$

#### **Part (b)**

**Step 3: Set up SUVAT equation for time**
Using $v = u + at$ with $v = -10, u = 8, a = -10$
$$-10 = 8 - 10T$$
- **[M1]** Uses a correct SUVAT equation for $T$.

**Step 4: Solve for $T$**
$$10T = 18 \Rightarrow T = 1.8$$
- **[A1]** $T = 1.8$

#### **Part (c)**

**Step 5: Suggest a refinement**
- **[B1]** Any sensible refinement, e.g., "Account for the size/dimensions of the stone" or "Use a more accurate value for $g$ ($9.8\text{ m s}^{-2}$)".

#### **Part (d)**

**Step 6: Explain effect of air resistance**
- **[B1]** $U$ would be greater because energy/speed is lost due to air resistance (so a higher initial upward speed is needed to reach the ground with speed $10\text{ m s}^{-1}$).

---
topic: "Kinematics"
subtopic: "Motion along a straight line with variable force"
---
### **Question 2**

A train travels along a straight horizontal track from station $P$ to station $Q$.

In a model of the motion of the train, at time $t = 0$ the train starts from rest at $P$, and moves with constant acceleration until it reaches its maximum speed of $25\text{ m s}^{-1}$

The train then travels at this constant speed of $25\text{ m s}^{-1}$ before finally moving with constant deceleration until it comes to rest at $Q$.

The time spent decelerating is four times the time spent accelerating.

The journey from $P$ to $Q$ takes $700\text{ s}$.

Using the model,

**(a)** sketch a speed-time graph for the motion of the train between the two stations $P$ and $Q$. **(1)**

The distance between the two stations is $15\text{ km}$.

Using the model,

**(b)** show that the time spent accelerating by the train is $40\text{ s}$, **(3)**

**(c)** find the acceleration, in $\text{m s}^{-2}$, of the train, **(1)**

**(d)** find the speed of the train $572\text{ s}$ after leaving $P$. **(2)**

**(e)** State one limitation of the model which could affect your answers to parts (b) and (c). **(1)**

**(Total 8 marks)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Sketch the speed-time graph**

**Figure 1** _(A sketch of a trapezium-shaped speed-time graph with a linear increase to $25\text{ m s}^{-1}$, a constant speed section, and a longer linear decrease to rest at $700\text{ s}$)_

```tikz
\begin{tikzpicture}[scale=0.8]
  \draw[->] (0,0) -- (8,0) node[below] {$t$};
  \draw[->] (0,0) -- (0,4) node[left] {$v$};
  \draw[thick] (0,0) -- (2,3) -- (6,3) -- (7.5,0);
  \dashed (2,0) -- (2,3);
  \dashed (6,0) -- (6,3);
  \node[below] at (2,0) {$t_1$};
  \node[below] at (6,0) {$700 - 4t_1$};
  \node[below] at (7.5,0) {$700$};
  \node[left] at (0,3) {$25$};
\end{axis}
\end{tikzpicture}
```

- **[B1]** Correct shape of speed-time graph (trapezium starting and ending at zero).

#### **Part (b)**

**Step 2: Formulate distance equation using the area under the graph**
Let the time accelerating be $t_1$. Then the time decelerating is $4t_1$.
Let the time spent travelling at constant speed be $t_2$.
$$t_1 + t_2 + 4t_1 = 700 \Rightarrow 5t_1 + t_2 = 700 \Rightarrow t_2 = 700 - 5t_1$$
Total distance $=$ Area under graph:
$$\frac{1}{2}(700 + 700 - 5t_1)(25) = 15000$$
- **[M1]** Uses total time to express the constant speed section in terms of $t_1$, and sets up the area of the trapezium equal to $15000$.

**Step 3: Solve for $t_1$**
$$\frac{1}{2}(1400 - 5t_1)(25) = 15000$$
$$1400 - 5t_1 = \frac{30000}{25} = 1200$$
$$5t_1 = 200 \Rightarrow t_1 = 40$$
- **[A1]** Correct simplification and solution leading to $t_1 = 40$.

#### **Part (c)**

**Step 4: Find acceleration**
$$a = \frac{\Delta v}{\Delta t} = \frac{25}{40} = 0.625\text{ m s}^{-2}$$
- **[B1]** $0.625$ or $\frac{5}{8}$

#### **Part (d)**

**Step 5: Find speed at $t = 572$**
Times: accelerating for $40\text{ s}$, constant speed until $700 - 4(40) = 700 - 160 = 540\text{ s}$.
At $t = 572\text{ s}$, the train is in the deceleration phase.
Deceleration time = $572 - 540 = 32\text{ s}$ into deceleration.
Deceleration rate $a_d = \frac{25}{160} = \frac{5}{32} = 0.15625\text{ m s}^{-2}$.
Speed = $25 - \left(\frac{25}{160}\right)(32) = 25 - 5 = 20\text{ m s}^{-1}$.
- **[M1]** Identifies that $t = 572$ is during the deceleration phase and calculates time elapsed or uses appropriate SUVAT.
- **[A1]** $20\text{ m s}^{-1}$

#### **Part (e)**

**Step 6: State a limitation**
- **[B1]** E.g., "Acceleration/deceleration is not constant in reality" or "Trains do not instantaneous change between uniform acceleration/deceleration and constant speed".

---
topic: "Kinematics"
subtopic: "Acceleration varying with time"
---
### **Question 3**

A fixed point $O$ lies on a straight line.

A particle $P$ moves along the straight line.

At time $t$ seconds, $t \ge 0$, the distance, $s$ metres, of $P$ from $O$ is given by
$$s = \frac{1}{3}t^3 - \frac{5}{2}t^2 + 6t$$

**(a)** Find the acceleration of $P$ at each of the times when $P$ is at instantaneous rest. **(6)**

**(b)** Find the total distance travelled by $P$ in the interval $0 \le t \le 4$ **(3)**

**(Total 9 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Find velocity $v$**
$$v = \frac{ds}{dt} = t^2 - 5t + 6$$
- **[M1]** Differentiates $s$ with respect to $t$ to find $v$.
- **[A1]** Correct expression for $v$.

**Step 2: Find the times when $P$ is at instantaneous rest ($v = 0$)**
$$t^2 - 5t + 6 = 0 \Rightarrow (t - 2)(t - 3) = 0$$
$$t = 2, \quad t = 3$$
- **[M1]** Sets $v = 0$ and solves the quadratic equation for $t$.
- **[A1]** Correct times $t = 2$ and $t = 3$.

**Step 3: Find acceleration $a$**
$$a = \frac{dv}{dt} = 2t - 5$$
- **[M1]** Differentiates $v$ with respect to $t$ (or differentiates $s$ twice) to find $a$.

**Step 4: Calculate acceleration at each time**
When $t = 2$: $a = 2(2) - 5 = -1\text{ m s}^{-2}$
When $t = 3$: $a = 2(3) - 5 = 1\text{ m s}^{-2}$
- **[A1]** Both values correct: $-1\text{ m s}^{-2}$ and $1\text{ m s}^{-2}$.

#### **Part (b)**

**Step 5: Evaluate positions at turning points and endpoints**
Since $v = 0$ at $t = 2$ and $t = 3$, the particle changes direction at these points within the interval $[0, 4]$.
- At $t = 0$: $s(0) = 0$
- At $t = 2$: $s(2) = \frac{1}{3}(8) - \frac{5}{2}(4) + 6(2) = \frac{8}{3} - 10 + 12 = \frac{14}{3}$
- At $t = 3$: $s(3) = \frac{1}{3}(27) - \frac{5}{2}(9) + 6(3) = 9 - \frac{45}{2} + 18 = \frac{9}{2} = 4.5$
- At $t = 4$: $s(4) = \frac{1}{3}(64) - \frac{5}{2}(16) + 6(4) = \frac{64}{3} - 40 + 24 = \frac{16}{3}$
- **[M1]** Identifies relevant intervals or sets up the integral for total distance, evaluating $s$ at $t = 0, 2, 3, 4$.

**Step 6: Calculate distances in each interval**
- From $t = 0$ to $2$: distance = $\left|\frac{14}{3} - 0\right| = \frac{14}{3}$
- From $t = 2$ to $3$: distance = $\left|\frac{9}{2} - \frac{14}{3}\right| = \left|\frac{27 - 28}{6}\right| = \frac{1}{6}$
- From $t = 3$ to $4$: distance = $\left|\frac{16}{3} - \frac{9}{2}\right| = \left|\frac{32 - 27}{6}\right| = \frac{5}{6}$

Total distance = $\frac{14}{3} + \frac{1}{6} + \frac{5}{6} = \frac{28}{6} + \frac{6}{6} = \frac{34}{6} = \frac{17}{3} = 5.67\text{ m}$ (or $5\frac{2}{3}\text{ m}$).
- **[A1]** Correct total distance.

---
topic: "Dynamics"
subtopic: "Newton's laws of motion"
---
### **Question 4**

A vertical rope $PQ$ has its end $Q$ attached to the top of a small lift cage.

The lift cage has mass $40\text{ kg}$ and carries a block of mass $10\text{ kg}$, as shown in Figure 1.

**Figure 1** _A sketch showing a vertical rope $PQ$ attached to a lift cage containing a block._

```tikz
\begin{tikzpicture}[scale=0.9]
  \draw[thick] (4,6) -- (4,4.5);
  \node[above] at (4,6) {$P$};
  \node[below] at (4,4.5) {$Q$};
  \draw[thick] (2.5,2) rectangle (5.5,4.5);
  \fill[black] (3.5,2.3) rectangle (4.5,3.1);
  \node at (4,3.7) {Lift cage};
\end{tikzpicture}
```

The lift cage is raised vertically by moving the end $P$ of the rope vertically upwards with constant acceleration $0.2\text{ m s}^{-2}$

The rope is modelled as being light and inextensible and air resistance is ignored.

Using the model,

**(a)** find the tension in the rope $PQ$ **(3)**

**(b)** find the magnitude of the force exerted on the block by the lift cage. **(3)**

**(Total 6 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Consider the whole system (lift cage + block)**
Combined mass $M = 40 + 10 = 50\text{ kg}$.
Equation of motion upwards:
$$T - Mgs = Mf \Rightarrow T - 50g = 50(0.2)$$
- **[M1]** Considers the combined system and sets up the equation of motion using Newton's second law.

**Step 2: Solve for tension $T$**
$$T = 50(9.8) + 10 = 490 + 10 = 500\text{ N}$$
- **[A1]** Correct substitution.
- **[A1]** $500\text{ N}$

#### **Part (b)**

**Step 3: Consider the motion of the block alone**
Mass of block $m = 10\text{ kg}$. Let $R$ be the normal reaction force exerted on the block by the floor of the lift cage.
Equation of motion upwards for the block:
$$R - mg = ma \Rightarrow R - 10g = 10(0.2)$$
- **[M1]** Considers the motion of the block and sets up the equation of motion.

**Step 4: Solve for $R$**
$$R = 10(9.8) + 2 = 98 + 2 = 100\text{ N}$$
- **[A1]** Correct substitution.
- **[A1]** $100\text{ N}$

---
topic: "Dynamics"
subtopic: "Newton's laws of motion"
---
### **Examiner Report 4**

**General**
Performance on this paper varied significantly across questions, with candidates generally finding standard calculus-based kinematics more approachable than connected particle problems or vector work, though foundational mechanics principles remained well understood by the higher-attaining cohort.

**Question 1**
Part (a) was generally well attempted, with most candidates correctly selecting a suitable SUVAT equation. However, sign errors regarding displacement and initial velocity were common. In part (b), students frequently made arithmetic slips. Part (c) elicited a range of valid suggestions, though some candidates incorrectly proposed changing gravity rather than considering air resistance or height. In part (d), explanations regarding air resistance were mixed; candidates often stated the correct direction of change for $U$ but failed to justify it clearly in terms of energy or opposing forces.

**Question 2**
Part (a) was answered well, with most candidates providing a correct speed-time graph. In part (b), setting up the distance equation using the area under the trapezium was handled competently by most, though a significant minority miscalculated the time segments. Part (c) followed naturally from part (b) for well-prepared candidates. In part (d), identifying the correct time interval for the deceleration phase caused difficulty for some. Part (e) yielded varied responses; valid limitations such as track resistance or non-uniform acceleration were usually credited when specified clearly.

**Question 3**
Part (a) was well done; differentiating displacement to find velocity and subsequently acceleration was executed correctly by the majority of candidates. Finding the times when the particle was at instantaneous rest was also standard. In part (b), splitting the integral or evaluating positions at turning points to calculate the total distance travelled was done well, though some candidates mistakenly integrated speed instead of finding absolute displacements between turning points, leading to lost marks.

**Question 4**
Part (a) was generally well answered, with most candidates successfully treating the lift and block as a single particle to find the tension. In part (b), isolating the block to find the normal reaction force was also standard, though a number of candidates inverted the mass or acceleration terms in their equations of motion.
