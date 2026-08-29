---
topic: "Kinematics"
subtopic: "Acceleration varying with time"
---
### **Question 1**

At time $t = 0$, a small stone is thrown vertically upwards with speed $14.7\text{ ms}^{-1}$ from a point $A$.

At time $t = T$ seconds, the stone passes through $A$, moving downwards.

The stone is modelled as a particle moving freely under gravity throughout its motion.

Using the model,

**(a)** find the value of $T$, **(2)**

**(b)** find the total distance travelled by the stone in the first $4\text{ seconds}$ of its motion. **(4)**

**(c)** State one refinement that could be made to the model, apart from air resistance, that would make the model more realistic. **(1)**

**(Total 7 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Set up displacement equation** Using $s = ut + \frac{1}{2}at^2$ with $s = 0$, $u = 14.7$, and $a = -9.8$:
$$0 = 14.7T - \frac{1}{2}(9.8)T^2$$

- **[M1]** Correct equation set up to find time $T$ when displacement is zero.

**Step 2: Solve for T** 
$$14.7T - 4.9T^2 = 0 \Rightarrow T = \frac{14.7}{4.9} = 3$$

- **[A1]** $T = 3$

#### **Part (b)**

**Step 1: Find time to maximum height** 
$$v = u + at \Rightarrow 0 = 14.7 - 9.8t \Rightarrow t = 1.5$$

- **[M1]** Finds the time to reach the highest point.

**Step 2: Find maximum height above A**
$$s = 14.7(1.5) - \frac{1}{2}(9.8)(1.5)^2 = 11.025\text{ m}$$

- **[M1]** Correctly calculates the maximum height above A.

**Step 3: Calculate distance from $t = 1.5$ to $t = 4$**
At $t = 4$, displacement from $A$:
$$s(4) = 14.7(4) - \frac{1}{2}(9.8)(4)^2 = 58.8 - 78.4 = -19.6\text{ m}$$
Total distance $= 11.025 + 11.025 + 19.6 = 41.65\text{ m}$

- **[M1]** Considers the motion after the highest point including the return past $A$ to $t = 4$.
- **[A1]** $41.7\text{ m}$ (or $41.65\text{ m}$)

#### **Part (c)**

**Step 1: State refinement** Account for variable gravity with height / wind effects / rotation of the stone.

- **[B1]** Any acceptable physical refinement excluding air resistance.

---
topic: "Kinematics"
subtopic: "Acceleration varying with time"
---
### **Question 2**

A particle $P$ moves along a straight line.

At time $t$ seconds, the velocity $v\text{ ms}^{-1}$ of $P$ is modelled as

$$v = 10t - t^2 - k \quad t \geqslant 0$$

where $k$ is a constant.

**(a)** Find the acceleration of $P$ at time $t$ seconds. **(2)**

The particle $P$ is instantaneously at rest when $t = 6$

**(b)** Find the other value of $t$ when $P$ is instantaneously at rest. **(4)**

**(c)** Find the total distance travelled by $P$ in the interval $0 \leqslant t \leqslant 6$ **(4)**

**(Total 10 marks)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Differentiate velocity with respect to time**
$$a = \frac{dv}{dt} = 10 - 2t$$

- **[M1]** Differentiates $v$ with respect to $t$.
- **[A1]** $10 - 2t$

#### **Part (b)**

**Step 1: Substitute $t = 6$ into the velocity equation to find $k$**
$$0 = 10(6) - (6)^2 - k \Rightarrow 0 = 60 - 36 - k \Rightarrow k = 24$$

- **[M1]** Substitutes $t = 6$ and $v = 0$ into the velocity formula.
- **[A1]** $k = 24$

**Step 2: Solve for other value of $t$**
$$v = 10t - t^2 - 24 = 0 \Rightarrow t^2 - 10t + 24 = 0$$
$$(t - 4)(t - 6) = 0 \Rightarrow t = 4 \text{ or } t = 6$$

- **[M1]** Solves the resulting quadratic equation for $t$.
- **[A1]** $t = 4$

#### **Part (c)**

**Step 1: Integrate velocity to find displacement**
$$s = \int (10t - t^2 - 24) \, dt = 5t^2 - \frac{1}{3}t^3 - 24t$$

- **[M1]** Integrates the velocity function.

**Step 2: Evaluate displacement at turning points ($t = 4$)**
$$s(0) = 0$$
$$s(4) = 5(4)^2 - \frac{1}{3}(4)^3 - 24(4) = 80 - \frac{64}{3} - 96 = -\frac{112}{3}$$
$$s(6) = 5(6)^2 - \frac{1}{3}(6)^3 - 24(6) = 180 - 72 - 144 = -36$$

- **[M1]** Evaluates displacement limits correctly.

**Step 3: Calculate total distance**
$$\text{Distance} = \left|s(4) - s(0)\right| + \left|s(6) - s(4)\right| = \left|-\frac{112}{3}\right| + \left|-36 - \left(-\frac{112}{3}\right)\right| = \frac{112}{3} + \frac{4}{3} = \frac{116}{3} = 38.7\text{ m}$$

- **[A1]** Correct total distance ($38.7\text{ m}$ or $\frac{116}{3}\text{ m}$).

---
topic: "Mechanics and Materials"
subtopic: "Motion along a straight line"
---
### **Question 3**

**Figure 1** _(A sketch showing two masses $P(2m)$ and $Q(5m)$ connected by a string passing over a pulley, with $P$ at height $2h$ and $Q$ at height $h$ above the ground)._

```tikz
\begin{tikzpicture}[scale=0.8]
  \draw[thick] (0,4) circle (0.3cm);
  \draw[thick] (-0.3, 3.7) -- (-0.3, 1);
  \draw[thick] (0.3, 3.7) -- (0.3, 2);
  \fill (-0.3, 1) circle (0.2cm) node[left] {$P(2m)$};
  \fill (0.3, 2) circle (0.2cm) node[right] {$Q(5m)$};
  \draw[dashed] (-1.5, 0) -- (1.5, 0);
  \node[below] at (0, 0) { ground };
  \draw[<->] (-1, 0) -- (-1, 1) node[midway, left] {$2h$};
  \draw[<->] (1.5, 0) -- (1.5, 2) node[midway, right] {$h$};
\end{tikzpicture}
```

A ball $P$ of mass $2m$ is attached to one end of a string.

The other end of the string is attached to a ball $Q$ of mass $5m$.

The string passes over a fixed pulley.

The system is held at rest with the balls hanging freely and the string taut.

The hanging parts of the string are vertical with $P$ at a height $2h$ above horizontal ground and with $Q$ at a height $h$ above the ground, as shown in Figure 1.

The system is released from rest. 

In the subsequent motion, $Q$ does not rebound when it hits the ground and $P$ does not hit the pulley.

The balls are modelled as particles.

The string is modelled as being light and inextensible.

The pulley is modelled as being small and smooth.

Air resistance is modelled as being negligible.

Using this model,

**(a)** 
**(i)** write down an equation of motion for $P$,

**(ii)** write down an equation of motion for $Q$, **(4)**

**(b)** find, in terms of $h$ only, the height above the ground at which $P$ first comes to instantaneous rest. **(7)**

**(c)** State one limitation of modelling the balls as particles that could affect your answer to part (b). **(1)**

In reality, the string will not be inextensible.

**(d)** State how this would affect the accelerations of the particles. **(1)**

**(Total 13 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Equation of motion for P**
$$T - 2mg = 2ma$$

- **[B1]** Correct equation of motion for $P$.

**Step 2: Equation of motion for Q**
$$5mg - T = 5ma$$

- **[B1]** Correct equation of motion for $Q$.

#### **Part (b)**

**Step 1: Find acceleration $a$**
Adding equations: $3mg = 7ma \Rightarrow a = \frac{3}{7}g$

- **[M1]** Solves simultaneous equations for acceleration $a$.

**Step 2: Find speed when $Q$ hits the ground**
$Q$ travels distance $h$:
$$v^2 = u^2 + 2as \Rightarrow v^2 = 0 + 2\left(\frac{3}{7}g\right)h = \frac{6}{7}gh$$

- **[M1]** Uses kinematic equation to find velocity when $Q$ hits the ground.

**Step 3: Motion of $P$ after $Q$ hits the ground**
After $Q$ hits the ground, the string becomes slack, and $P$ moves freely under gravity with acceleration $-g$.
Distance travelled upwards before coming to instantaneous rest:
$$0 = v^2 + 2as' \Rightarrow 0 = \frac{6}{7}gh - 2gs' \Rightarrow s' = \frac{3}{7}h$$

- **[M1]** Recognises that $P$ moves under gravity alone once $Q$ hits the ground.
- **[A1]** Correct additional height $s' = \frac{3}{7}h$.

**Step 4: Total height calculation**
Initial height of $P = 2h$.
Height when $Q$ hits ground $= 2h + h = 3h$.
Total height above ground $= 3h + \frac{3}{7}h = \frac{24}{7}h$.

- **[M1]** Adds initial height and displacements correctly.
- **[A1]** $\frac{24}{7}h$

#### **Part (c)**

**Step 1: State limitation** Air resistance on the balls / dimensions of the balls / rotation of the balls.

- **[B1]** Any acceptable limitation.

#### **Part (d)**

**Step 1: Describe effect of extensible string** The string would stretch, reducing the acceleration / smoothing out jerks.

- **[B1]** States accelerations will be smaller / affected.

---
topic: "Mechanics and Materials"
subtopic: "Newton's laws of motion"
---
### **Question 4**

**Figure 2** _(A sketch showing a car of mass $1200\text{ kg}$ towing a trailer of mass $400\text{ kg}$ via a tow rope)._

```tikz
\begin{tikzpicture}[scale=0.9]
  \draw[thick] (2,0) rectangle (5,1.2);
  \draw[thick] (3.5,1.2) rectangle (4.8,2);
  \fill (2.7,0) circle (0.3cm);
  \fill (4.3,0) circle (0.3cm);
  \draw[thick] (-1,0.5) rectangle (1,1.2);
  \fill (-0.5,0) circle (0.3cm);
  \fill (0.5,0) circle (0.3cm);
  \draw[thick] (1,0.6) -- (2,0.6);
  \node at (0, 0.8) {$400\text{ kg}$};
  \node at (3.5, 0.6) {$1200\text{ kg}$};
  \draw[thick] (-2,-0.2) -- (6,-0.2);
\end{tikzpicture}
```

A car of mass $1200\text{ kg}$ is towing a trailer of mass $400\text{ kg}$ along a straight horizontal road using a tow rope, as shown in Figure 2.

The rope is horizontal and parallel to the direction of motion of the car.

* The resistance to motion of the car is modelled as a constant force of magnitude $2R\text{ newtons}$
* The resistance to motion of the trailer is modelled as a constant force of magnitude $R\text{ newtons}$
* The rope is modelled as being light and inextensible
* The acceleration of the car is modelled as $a\text{ ms}^{-2}$

The driving force of the engine of the car is $7400\text{ N}$ and the tension in the tow rope is $2400\text{ N}$.

Using the model,

**(a)** find the value of $a$ **(5)**

In a refined model, the rope is modelled as having mass and the acceleration of the car is found to be $a_1\text{ ms}^{-2}$

**(b)** State how the value of $a_1$ compares with the value of $a$ **(1)**

**(c)** State one limitation of the model used for the resistance to motion of the car. **(1)**

**(Total 7 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Equation of motion for trailer**
$$2400 - R = 400a$$

- **[M1]** Equation of motion for the trailer.
- **[A1]** Correct equation.

**Step 2: Equation of motion for car**
$$7400 - 2400 - 2R = 1200a$$

- **[M1]** Equation of motion for the car.
- **[A1]** Correct equation.

**Step 3: Solve simultaneous equations**
From trailer: $R = 2400 - 400a$. Substitute into car equation:
$$5000 - 2(2400 - 400a) = 1200a \Rightarrow 5000 - 4800 + 800a = 1200a$$
$$200 = 400a \Rightarrow a = 0.5$$

- **[M1]** Solves for $a$.
- **[A1]** $a = 0.5$

#### **Part (b)**

**Step 1: Compare accelerations** $a_1 < a$ (because some driving force goes into accelerating the rope).

- **[B1]** States $a_1$ is less than $a$ with a valid reason.

#### **Part (c)**

**Step 1: State limitation** Resistance is not constant / depends on speed / air resistance increases with speed.

- **[B1]** Any valid limitation.

### **Examiner Report 1**

The entry for this paper was small. The vast majority of candidates offered a response to all three questions and there was no evidence of time pressure. The candidates showed some understanding of the topics examined but did not always use the information given or follow the instructions in the questions. As has been noted in previous papers, accuracy marks were often lost through slips in algebraic manipulation.

For Question 1, many candidates only found the time to the top in part (a), losing marks. In part (b), very few fully correct answers were seen because candidates failed to account for the change in direction when using suvat equations, and many neglected proper rounding rules. Part (c) was poorly answered, with incorrect references to mass and air resistance (despite being excluded).

For Question 2, most candidates successfully differentiated in part (a). In part (b), sign errors were common when substituting $t = 6$ to find $k$, leading to incorrect quadratic equations. Part (c) saw mixed results, with some attempting incorrect suvat methods instead of integration, and few successfully accounting for the particle's change of direction.

For Question 3, many candidates correctly set up equations of motion in part (a), though confusion regarding the inclusion of $g$ and mass $m$ was evident. Part (b) was challenging, with many candidates failing to properly account for the motion of $P$ after $Q$ hit the ground. Parts (c) and (d) were answered correctly by only a small number of candidates.

For Question 4, candidates generally handled the connected particle equations well in part (a). Part (b) and (c) responses showed a lack of conceptual understanding regarding mass of the rope and variable resistance.
