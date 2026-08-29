---
topic: "Mechanics and Materials"
subtopic: "Motion along a straight line"
---
### **Question 1**

At time $t = 0$, a small stone is projected vertically upwards with speed $U\text{ m s}^{-1}$ from a point $A$ that is $1.8\text{ m}$ vertically above horizontal ground.

At time $t = T$ seconds, the stone hits the ground.

The speed of the stone as it hits the ground is $10\text{ m s}^{-1}$

In an initial model of the motion of the stone as it moves from $A$ to where it hits the ground
- the stone is modelled as a particle moving freely under gravity
- the acceleration due to gravity is modelled as having magnitude $10\text{ m s}^{-2}$

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
Using $v^2 = u^2 + 2as$ with $v = -10$ (or considering the whole journey downwards/upwards), $s = -1.8$, $a = -10$:
$$(-10)^2 = U^2 + 2(-10)(-1.8)$$
- **[M1]** Correct equation linking $v^2, u^2, a, s$ with consistent signs.

**Step 2: Solve for $U$**
$$100 = U^2 + 36 \Rightarrow U^2 = 64$$
$$U = 8$$
- **[A1]** Correct substitution and manipulation leading to $U^2 = 64$.
- **[A1]** $U = 8$ (accept $-8$ discarded or rejected properly).

#### **Part (b)**
**Step 3: Set up SUVAT equation for time**
Using $v = u + at$ with $u = 8, v = -10, a = -10$:
$$-10 = 8 - 10T$$
- **[M1]** Uses a correct SUVAT formula to find $T$ using their $U$.

**Step 4: Solve for $T$**
$$10T = 18 \Rightarrow T = 1.8$$
- **[A1]** $T = 1.8$ (or $\frac{9}{5}$).

#### **Part (c)**
**Step 5: Suggest refinement**
- **[B1]** Any sensible physical refinement, e.g., "Account for wind/spin/variations in gravity/dimensions of the stone".

#### **Part (d)**
**Step 6: Explain effect of air resistance**
- **[B1]** The value of $U$ would be greater because air resistance opposes motion / slows the stone down, so a larger initial speed is needed to reach the ground at $10\text{ m s}^{-1}$.

### **Examiner Report 1**

Part (a) was generally well done with most candidates using the figures $10, 10$ and $1.8$ in a correct constant acceleration formula to obtain the given $U = 8$. Occasionally there was a sign error and although the correct answer was quoted, it did not actually follow from the working. A few used $0$ as opposed to $10$ for the final velocity. Some considered the motion 'up' and 'down' separately and used the distances to successfully derive the value of $U$. 

The most common approach in part (b) was to write down a quadratic equation in $t$ and to solve it using the quadratic formula. There were occasional sign errors in the equation and some were either unable to deal with the quadratic or misquoted the formula. Nevertheless, a significant number did successfully find the two values of $t$ and gave the correct one as their answer. The alternative approach of 'up' and 'down' separately was seen, but often only one of the times was calculated correctly. The other most common method being use of $v = u + at$ but a significant number made a sign error in their equation and $0.2$ was a very common wrong answer. 

In part (c), correct refinements seemed to be in the majority but only just. A more accurate value of gravity ($9.8$) was the most common correct response but wind, spin and dimensions of the stone were also seen. Many reasoned that due to air resistance the acceleration was smaller making the velocity smaller. Very few considered how changing the value of $a$ in the equation they used would affect their answer for $U$. Weight/mass and force were the most common incorrect answers, often being given as an incorrect extra answer to what would have been a correct one, and as a result losing the mark. 

In the final part, correct answers were in the minority, with most candidates failing to appreciate that if there was air resistance, the stone would have to be projected faster in order to still hit the ground at $10\text{ m s}^{-1}$.

---
topic: "Mechanics and Materials"
subtopic: "Motion along a straight line"
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

### **Mark Scheme 1**

#### **Part (a)**
**Step 1: Sketch velocity-time graph**
```tikz
\begin{tikzpicture}[scale=0.8]
  \draw[->] (0,0) -- (7,0) node[below] {$t$};
  \draw[->] (0,0) -- (0,4) node[left] {$v$};
  \draw[thick] (0,0) -- (2,3) -- (5,3) -- (6,0);
  \draw[dashed] (2,3) -- (2,0) node[below] {$t_1$};
  \draw[dashed] (5,3) -- (5,0) node[below] {$700 - 4t_1$};
  \draw (6,0) node[below] {$700$};
  \node at (1, 1.8) {$a$};
  \node at (3.5, 3.3) {$25\text{ m s}^{-1}$};
  \node at (5.7, 1.8) {$d$};
\end{tikzpicture}
```
- **[B1]** A trapezium-like speed-time graph starting and ending at the origin, with a clear constant speed phase and deceleration phase longer than the acceleration phase.

#### **Part (b)**
**Step 2: Formulate distance equation**
Let $t_1$ be the time accelerating. Then the time decelerating is $4t_1$.
Time at constant speed is $700 - t_1 - 4t_1 = 700 - 5t_1$.
Distance = Area under graph:
$$\frac{1}{2} (700 + (700 - 5t_1)) \times 25 = 15000$$
- **[M1]** Uses area of trapezium or sum of areas of triangles and rectangle equal to $15000$ (or $15\text{ km}$ in metres).

**Step 3: Solve for $t_1$**
$$\frac{1}{2} (1400 - 5t_1) \times 25 = 15000$$
$$1400 - 5t_1 = \frac{30000}{25} = 1200$$
$$5t_1 = 200 \Rightarrow t_1 = 40$$
- **[A1]** Correct intermediate equation.
- **[A1]** Fully correct proof showing $t_1 = 40$.

#### **Part (c)**
**Step 4: Find acceleration**
$$a = \frac{\Delta v}{\Delta t} = \frac{25}{40} = 0.625\text{ m s}^{-2}$$
- **[B1]** $0.625$ or $\frac{5}{8}$.

#### **Part (d)**
**Step 5: Determine phase at $t = 572$**
Acceleration time = $40$, Constant speed ends at $700 - 4(40) = 540$.
At $t = 572$, the train is in the deceleration phase.
Deceleration time = $4 \times 40 = 160\text{ s}$.
Deceleration $d = \frac{25}{160} = \frac{5}{32} = 0.15625\text{ m s}^{-2}$.
Time into deceleration = $572 - 540 = 32\text{ s}$.
Speed at $572\text{ s}$:
$$v = 25 - \left(\frac{25}{160}\right) \times 32 = 25 - 5 = 20\text{ m s}^{-1}$$
- **[M1]** Identifies that $t = 572$ is during deceleration and correctly sets up to find the speed (e.g., using $v = u - at$ or similar).
- **[A1]** $20\text{ m s}^{-1}$.

#### **Part (e)**
**Step 6: State limitation**
- **[B1]** Any valid limitation, e.g., "acceleration/deceleration is not constant", "air resistance is ignored", "train is not modelled as a particle".

### **Examiner Report 1**

In part (a), most diagrams were drawn with the correct shape. The most common error was to not have the deceleration phase clearly longer than the acceleration phase. Also a few candidates didn't account for the time travelling at constant speed and drew a triangle which generally meant that they were unable to score many marks in the remainder of the question.

In the second part, most candidates connected the area under the graph to the distance of $15\text{ km}$ travelled, although some forgot to change km into m or converted it wrongly. Some chose to use the formula for the area of a trapezium directly, others divided the area into two triangles and a rectangle and a small number used a rectangle with two triangles subtracted. A significant number of candidates chose to solve the problem by using an explicit verification method, using $t = 40$ and the information given about the acceleration and deceleration times and the total time to show that the distance travelled was $15000\text{ m}$ but lost the final mark if they did not say that this was equal to $15\text{ km}$. 

The vast majority of candidates scored the mark in part (c) for the acceleration. Part (d) was the most challenging part, with only better candidates able to come up with a method and of those, having worked out that the change in velocity was $5\text{ m s}^{-1}$, forgot that it was decelerating at this stage and added it on to $25\text{ m s}^{-1}$ instead of subtracting it.

---
topic: "Mechanics and Materials"
subtopic: "Motion along a straight line"
---
### **Question 3**

A fixed point $O$ lies on a straight line.

A particle $P$ moves along the straight line.

At time $t$ seconds, $t \ge 0$, the distance, $s$ metres, of $P$ from $O$ is given by

$$s = \frac{1}{3}t^3 - \frac{5}{2}t^2 + 6t$$

**(a)** Find the acceleration of $P$ at each of the times when $P$ is at instantaneous rest. **(6)**

**(b)** Find the total distance travelled by $P$ in the interval $0 \le t \le 4$ **(3)**

**(Total 9 marks)**

### **Mark Scheme 1**

#### **Part (a)**
**Step 1: Find velocity**
$$v = \frac{ds}{dt} = t^2 - 5t + 6$$
- **[M1]** Differentiates $s$ with respect to $t$.
- **[A1]** Correct expression for $v$.

**Step 2: Find times when particle is at instantaneous rest**
$$t^2 - 5t + 6 = 0 \Rightarrow (t - 2)(t - 3) = 0$$
$$t = 2, \quad t = 3$$
- **[M1]** Sets $v = 0$ and solves for $t$.
- **[A1]** Correct values $t = 2$ and $t = 3$.

**Step 3: Find acceleration**
$$a = \frac{dv}{dt} = 2t - 5$$
- **[M1]** Differentiates $v$ with respect to $t$ (or differentiates $s$ twice).

**Step 4: Evaluate acceleration at the times**
When $t = 2$: $a = 2(2) - 5 = -1\text{ m s}^{-2}$
When $t = 3$: $a = 2(3) - 5 = 1\text{ m s}^{-2}$
- **[A1]** Both values correct ($-1$ and $1$).

#### **Part (b)**
**Step 5: Calculate displacements at turning points and boundaries**
At $t = 0$: $s = 0$
At $t = 2$: $s = \frac{1}{3}(2)^3 - \frac{5}{2}(2)^2 + 6(2) = \frac{8}{3} - 10 + 12 = \frac{14}{3} = 4.67\text{ m}$
At $t = 3$: $s = \frac{1}{3}(3)^3 - \frac{5}{2}(3)^2 + 6(3) = 9 - \frac{45}{2} + 18 = \frac{9}{2} = 4.5\text{ m}$
At $t = 4$: $s = \frac{1}{3}(4)^3 - \frac{5}{2}(4)^2 + 6(4) = \frac{64}{3} - 40 + 24 = \frac{16}{3} = 5.33\text{ m}$
- **[M1]** Finds values of $s$ at $t = 0, 2, 3, 4$.

**Step 6: Compute total distance**
Distance from $t=0$ to $2$: $\frac{14}{3}$
Distance from $t=2$ to $3$: $\left|\frac{9}{2} - \frac{14}{3}\right| = \left|\frac{27 - 28}{6}\right| = \frac{1}{6}$
Distance from $t=3$ to $4$: $\frac{16}{3} - \frac{9}{2} = \frac{32 - 27}{6} = \frac{5}{6}$
$$\text{Total distance} = \frac{14}{3} + \frac{1}{6} + \frac{5}{6} = \frac{28 + 1 + 5}{6} = \frac{34}{6} = \frac{17}{3} = 5.67\text{ m}$$
- **[M1]** Adds the magnitudes of the intervals: $|s(2) - s(0)| + |s(3) - s(2)| + |s(4) - s(3)|$.
- **[A1]** Correct total distance $\frac{17}{3}$ (or $5.67$).

### **Examiner Report 1**

Part (a) was generally well answered by candidates with accurate and efficient methods frequently shown. The majority knew to differentiate to obtain an expression for velocity and were able to do so correctly and differentiating again to find the acceleration was almost always done correctly also. Some didn't set their velocity equal to zero and instead put their acceleration equal to zero, commonly scoring 3 out of the 6 marks available in this part. A number of candidates integrated instead of differentiating but this was rare. A tiny minority attempted to use suvat formulae in this variable acceleration question. 

Part (b) was much more challenging and most candidates didn't see the connection with the work they'd done in part (a) and what this meant for the direction of travel and total distance travelled. The majority of the successful candidates showed three separate sets of working for each of the three sections and then knew they needed to add the modulus of each section. This was often supported by sketching a graph. Integrating the velocity between $0$ and $4$ or using the given equation and a single calculation between $0$ and $4$ was the most common error leading to an answer of $\frac{16}{3}$. A significant number of candidates did find $s_2, s_3$ and $s_4$ (and often $s_1$ as well) but then just added these values together so just scored the first method mark in this part.

---
topic: "Mechanics and Materials"
subtopic: "Newton's laws of motion"
---
### **Question 4**

**Figure 1** _(A vertical rope $PQ$ with end $Q$ attached to a lift cage of mass $40\text{ kg}$ carrying a block of mass $10\text{ kg}$, being raised with constant acceleration $0.2\text{ m s}^{-2}$)._

```tikz
\begin{tikzpicture}[scale=0.8]
  \draw[thick] (3,4) -- (3,5) node[above] {$P$};
  \draw[thick] (3,2.5) rectangle (5,4) node[midway] {Lift cage};
  \draw[thick] (3.5,1.8) rectangle (4.5,2.5) node[midway] {Block};
  \node at (4, 4.3) {$Q$};
  \draw[->] (3, 5.2) -- (3, 6) node[right] {acceleration};
\end{tikzpicture}
```

A vertical rope $PQ$ has its end $Q$ attached to the top of a small lift cage.

The lift cage has mass $40\text{ kg}$ and carries a block of mass $10\text{ kg}$, as shown in Figure 1.

The lift cage is raised vertically by moving the end $P$ of the rope vertically upwards with constant acceleration $0.2\text{ m s}^{-2}$

The rope is modelled as being light and inextensible and air resistance is ignored.

Using the model,

**(a)** find the tension in the rope $PQ$ **(3)**

**(b)** find the magnitude of the force exerted on the block by the lift cage. **(3)**

**(Total 6 marks)**

### **Mark Scheme 1**

#### **Part (a)**
**Step 1: Set up equation of motion for the whole system (cage + block)**
Let $T$ be the tension in the rope $PQ$.
Total mass $M = 40 + 10 = 50\text{ kg}$.
Equation of motion upwards:
$$T - 50g = 50 \times 0.2$$
- **[M1]** Forms equation of motion for the combined system (or cage and block separately).
- **[A1]** Correct equation with all terms present.

**Step 2: Solve for $T$**
$$T - 50(9.8) = 10 \Rightarrow T = 490 + 10 = 500\text{ N}$$
(Using $g = 9.8\text{ m s}^{-2}$)
- **[A1]** $500\text{ N}$ (or $490 + \text{ma}$ evaluated correctly, e.g., $50 \times 9.8 + 10 = 500$).

#### **Part (b)**
**Step 3: Set up equation of motion for the block**
Let $R$ be the normal reaction force exerted on the block by the lift floor.
$$R - 10g = 10 \times 0.2$$
- **[M1]** Forms equation of motion for the block.
- **[A1]** Correct equation.

**Step 4: Solve for $R$**
$$R = 10(9.8) + 2 = 98 + 2 = 100\text{ N}$$
- **[A1]** $100\text{ N}$.

### **Examiner Report 1**

Although fully correct answers were seen, it was clear that many candidates had little experience of answering this type of question. In particular, there were many equations seen with an incorrect number of terms, particularly in part (b). Clear force diagrams would have helped some candidates, but these were not often forthcoming. 

In part (a), many candidates gained all 3 marks. The most common error occurred where the direction of travel had been mixed up. For those who set up an equation of motion for the cage and block together, the most common mistake was '$50g - T = 50 \times 0.2$' (as if it was accelerating downwards). Some students attempted '$F = ma$' for the cage, but omitted '$R$', scoring zero marks as there were an incorrect number of terms. There were instances of numerical mistakes in calculating '$50 \times 0.2$' ('$25$' being a common one). Most students used the correct value of $9.8$ for $g$. There were a few cases where $g$ was omitted from the weight or added incorrectly in the '$ma$' term. 

In part (b), few candidates gained the full 3 marks. Some failed to identify the forces which were acting on the block; others considered the forces acting on the cage rather than the block. A common error was to get the direction of motion mixed up. There were quite a few blanks here, even by students who had made a good attempt in part (a). For students who knew what to do here, there were a few instances of '$10g - R = 10 \times 0.2$'. Some students attempted '$F = ma$' for the cage rather than the block, but omitted '$T$' or they tried to combine the cage and the block. For those students scoring zero marks for Q4, their responses were either completely blank, or they tried to equate forces, ignoring the fact that the cage and block were accelerating.
