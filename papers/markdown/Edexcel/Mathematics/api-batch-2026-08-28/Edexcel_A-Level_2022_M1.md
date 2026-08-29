---
topic: "Differentiation"
subtopic: "Rates of change"
---
### **Question 1**

At time $t$ seconds, where $t \ge 0$, a particle $P$ moves in the $x\text{-}y$ plane in such a way that its velocity $\mathbf{v} \text{ m s}^{-1}$ is given by

$$\mathbf{v} = t^{-\frac{1}{2}}\mathbf{i} - 4t\mathbf{j}$$

When $t = 1$, $P$ is at the point $A$ and when $t = 4$, $P$ is at the point $B$.

Find the exact distance $AB$. **(6)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Integrate velocity to find position vector** $\mathbf{r} = \int \mathbf{v} \, dt = \int (t^{-\frac{1}{2}}\mathbf{i} - 4t\mathbf{j}) \, dt$
- **[M1]** Attempt to integrate the velocity vector $\mathbf{v}$ with respect to $t$.

**Step 2: Find expression for position vector** $\mathbf{r} = 2t^{\frac{1}{2}}\mathbf{i} - 2t^2\mathbf{j} + \mathbf{c}$
- **[A1]** Correct integration of at least one component.
- **[A1]** Fully correct integrated expression including a constant of integration.

**Step 3: Find position vector at $A$ and $B$**
When $t = 1$, $\mathbf{r}_A = 2\mathbf{i} - 2\mathbf{j} + \mathbf{c}$
When $t = 4$, $\mathbf{r}_B = 4\mathbf{i} - 32\mathbf{j} + \mathbf{c}$
- **[M1]** Uses limits or substitutes $t=1$ and $t=4$ to find $\vec{AB} = \mathbf{r}_B - \mathbf{r}_A$.

**Step 4: Calculate vector $\vec{AB}$** $\vec{AB} = (4\mathbf{i} - 32\mathbf{j} + \mathbf{c}) - (2\mathbf{i} - 2\mathbf{j} + \mathbf{c}) = 2\mathbf{i} - 30\mathbf{j}$
- **[A1]** Correct vector $\vec{AB}$.

**Step 5: Calculate exact distance $AB$** $|\vec{AB}| = \sqrt{2^2 + (-30)^2} = \sqrt{4 + 900} = \sqrt{904} = 2\sqrt{226}$
- **[A1]** Correct exact distance.

### **Examiner Report 1**

In part (a) most candidates correctly substituted $t = 2$ into the expression for the velocity and went on to use Pythagoras correctly to find an exact answer or an answer correct to 2sf or better. Common mistakes were to stop once the velocity had been found, losing the $\mathbf{i}$ and $\mathbf{j}$ and then finding $12-6\sqrt{2}$ rather than apply Pythagoras. A small number subtracted the squared values rather than adding in their Pythagoras. In the second part, most candidates identified that this was variable acceleration and differentiated correctly to find the acceleration vector. Common mistakes were losing either or both $\mathbf{i}$ and $\mathbf{j}$ and not recovering, integrating instead of differentiating and, despite the question specifying the answer was to be given in $\mathbf{i}\text{ }\mathbf{j}$ form, final answers given in column vector form were occasionally seen. Many candidates integrated to achieve the first two marks in part (c), but not all used the displacement at $t = 4$ to find the constant of integration. Those that found a vector equation containing a constant of integration $C$, went on to find $C$ and then substituted $t = 1$ to reach the correct answer although some responses contained numerical errors involving the negative signs. A common error was to use suvat formulae or $\mathbf{r} = \mathbf{r}_0 + \mathbf{v}t$ rather than integrate.

---
topic: "Mechanics and Materials"
subtopic: "Motion along a straight line"
---
### **Question 2**

**Figure 1** _(A sketch showing a wooden crate of mass $20\text{ kg}$ on a rough horizontal floor being pulled by a handle inclined at angle $\alpha$ with a tension of $40\text{ N}$)._

```tikz
\begin{tikzpicture}[scale=0.9]
  \draw[thick] (0,0) -- (6,0);
  \draw[thick, fill=gray!30] (2,0) rectangle (4,0.8);
  \node at (3,0.4) {$20\text{ kg}$};
  \draw[thick] (4,0.4) -- (5.5,1.2);
  \draw[->, thick] (5.5,1.2) -- (6.3,1.6) node[above] {$40\text{ N}$};
  \draw[dashed] (4,0.4) -- (5.5,0.4);
  \node at (4.9,0.55) {$\alpha$};
\end{tikzpicture}
```

A wooden crate of mass $20\text{ kg}$ is pulled in a straight line along a rough horizontal floor using a handle attached to the crate.

The handle is inclined at an angle $\alpha$ to the floor, as shown in Figure 1, where $\tan\alpha = \frac{3}{4}$.

The tension in the handle is $40\text{ N}$.

The coefficient of friction between the crate and the floor is $0.14$.

The crate is modelled as a particle and the handle is modelled as a light rod.

Using the model,

**(a) find the acceleration of the crate.** **(6)**

The crate is now pushed along the same floor using the handle. The handle is again inclined at the same angle $\alpha$ to the floor, and the thrust in the handle is $40\text{ N}$ as shown in Figure 2 below.

**Figure 2** _(A sketch showing the wooden crate being pushed by a handle inclined at angle $\alpha$ with a thrust of $40\text{ N}$)._

```tikz
\begin{tikzpicture}[scale=0.9]
  \draw[thick] (0,0) -- (6,0);
  \draw[thick, fill=gray!30] (2,0) rectangle (4,0.8);
  \node at (3,0.4) {$20\text{ kg}$};
  \draw[thick] (2,0.4) -- (0.5,1.2);
  \draw[->, thick] (0.5,1.2) -- (1.3,0.8);
  \node at (1.3,1.2) {$40\text{ N}$};
  \draw[dashed] (2,0.4) -- (0.5,0.4);
  \node at (1.1,0.55) {$\alpha$};
\end{tikzpicture}
```

**(b) Explain briefly why the acceleration of the crate would now be less than the acceleration of the crate found in part (a).** **(2)**

**(Total 8 marks)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Identify angle components** $\cos\alpha = \frac{4}{5} = 0.8$, $\sin\alpha = \frac{3}{5} = 0.6$
- **[B1]** Correct values for $\sin\alpha$ and $\cos\alpha$.

**Step 2: Resolve vertically** $R + 40\sin\alpha - 20g = 0$
$R = 20(9.8) - 40(0.6) = 196 - 24 = 172\text{ N}$
- **[M1]** Resolves vertically to find the normal reaction $R$.
- **[A1]** Correct value for $R$.

**Step 3: Calculate friction** $F = \mu R = 0.14 \times 172 = 24.08\text{ N}$
- **[M1]** Uses $F = \mu R$ with their calculated $R$.

**Step 4: Apply Newton's Second Law horizontally** $40\cos\alpha - F = ma$
$40(0.8) - 24.08 = 20a$
$32 - 24.08 = 20a \Rightarrow a = \frac{7.92}{20} = 0.396\text{ m s}^{-2}$
- **[M1]** Applies Newton's Second Law horizontally.
- **[A1]** Correct acceleration $0.396\text{ m s}^{-2}$ (or $0.40$).

#### **Part (b)**

**Step 5: Explain the difference in acceleration**
When pushed, the vertical component of the force acts downwards, increasing the normal reaction $R$. This increases the frictional force $F$, leaving a smaller net horizontal force, hence a smaller acceleration.
- **[M1]** States that the normal reaction is increased (or friction is increased).
- **[A1]}** Fully explains that the horizontal driving force is the same (or vertical component acts downwards) leading to smaller acceleration.

### **Examiner Report 2**

Almost a quarter of the candidates scored zero whilst $21\%$ scored full marks on this question. In part (a) the most common approach was to resolve perpendicular and parallel to the plane to first find a value for $X$ before finding a value for the friction. Very few used the most efficient method and resolved vertically. The resolving was generally done well with most candidates resolving all the forces that needed to be resolved and most without $\sin/\cos$ confusion and sign errors. Many who reached the correct value for friction were able to give the correct direction of the force, including those that had assumed that it acted up the plane and had obtained a negative answer. Not all remembered to give the magnitude of the force and numerical calculation errors were seen in some working. $\mu R$ was seen in some responses which lost the last mark as friction is not limiting in this part of the question. Part (b) was generally done well, even by those that had struggled with the first part, with many candidates writing down a correct $F = ma$ equation. The most common mistake was to take $R$ as $68.6\text{ N}$, the value given in part (a), and not resolve to find the new value of $R$. Those that resolved perpendicular to the plane generally went on to use $F = \mu R$ correctly and then accurately calculate the acceleration of the block. A few candidates did not remove the force $X$. It was noticeable that candidates who produced well labelled diagrams and who presented their solutions in a logical, neat and concise manner often continued to produce a correct solution in both parts.

---
topic: "Vectors"
subtopic: "Solving geometric problems"
---
### **Question 3**

[In this question $\mathbf{i}$ and $\mathbf{j}$ are horizontal unit vectors due east and due north respectively and position vectors are given relative to the fixed point $O$.]

A particle $P$ moves with constant acceleration.

At time $t = 0$, the particle is at $O$ and is moving with velocity $(2\mathbf{i} - 3\mathbf{j})\text{ m s}^{-1}$.

At time $t = 2$ seconds, $P$ is at the point $A$ with position vector $(7\mathbf{i} - 10\mathbf{j})\text{ m}$.

**(a) Show that the magnitude of the acceleration of $P$ is $2.5\text{ m s}^{-2}$.** **(4)**

At the instant when $P$ leaves the point $A$, the acceleration of $P$ changes so that $P$ now moves with constant acceleration $(4\mathbf{i} + 8.8\mathbf{j})\text{ m s}^{-2}$.

At the instant when $P$ reaches the point $B$, the direction of motion of $P$ is north east.

**(b) Find the time it takes for $P$ to travel from $A$ to $B$.** **(4)**

**(Total 8 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Use displacement formula** $\mathbf{r} = \mathbf{u}t + \frac{1}{2}\mathbf{a}t^2$
$7\mathbf{i} - 10\mathbf{j} = 2(2\mathbf{i} - 3\mathbf{j}) + \frac{1}{2}\mathbf{a}(2^2)$
- **[M1]** Uses $\mathbf{r} = \mathbf{u}t + \frac{1}{2}\mathbf{a}t^2$ with correct values substituted.

**Step 2: Simplify equation** $7\mathbf{i} - 10\mathbf{j} = 4\mathbf{i} - 6\mathbf{j} + 2\mathbf{a}$
$2\mathbf{a} = 3\mathbf{i} - 4\mathbf{j} \Rightarrow \mathbf{a} = 1.5\mathbf{i} - 2\mathbf{j}$
- **[A1]** Correct acceleration vector $\mathbf{a}$.

**Step 3: Calculate magnitude of acceleration** $|\mathbf{a}| = \sqrt{1.5^2 + (-2)^2} = \sqrt{2.25 + 4} = \sqrt{6.25} = 2.5\text{ m s}^{-2}$
- **[M1]** Finds the magnitude of the acceleration vector.
- **[A1]}** Obtains $2.5\text{ m s}^{-2}$ with no errors seen (given answer).

#### **Part (b)**

**Step 4: Find velocity at point $A$** $\mathbf{v}_A = \mathbf{u} + \mathbf{a}t = (2\mathbf{i} - 3\mathbf{j}) + (1.5\mathbf{i} - 2\mathbf{j})(2) = 5\mathbf{i} - 7\mathbf{j}$
- **[M1]** Finds velocity at $A$ using $\mathbf{v} = \mathbf{u} + \mathbf{a}t$.

**Step 5: Use velocity equation with new acceleration** Let $T$ be the time taken from $A$ to $B$:
$\mathbf{v}_B = \mathbf{v}_A + \mathbf{a}'T = (5\mathbf{i} - 7\mathbf{j}) + (4\mathbf{i} + 8.8\mathbf{j})T = (5 + 4T)\mathbf{i} + (-7 + 8.8T)\mathbf{j}$
- **[M1]** Sets up expression for velocity at $B$ using new acceleration.

**Step 6: Apply condition for north east motion** Since motion is north east, the $\mathbf{i}$ and $\mathbf{j}$ components of velocity are equal:
$5 + 4T = -7 + 8.8T$
$12 = 4.8T \Rightarrow T = 2.5$
- **[M1]** Equates $\mathbf{i}$ and $\mathbf{j}$ components of velocity at $B$.
- **[A1]}** Correct time $T = 2.5$ seconds.

### **Examiner Report 3**

In part (a), the majority of candidates were able to achieve the first mark for adding the two forces and collecting the $\mathbf{i}$ and $\mathbf{j}$ components. Many just equated this resultant force to the vector $(3\mathbf{i} + \mathbf{j})$ rather than using $(3\mathbf{i} + \mathbf{j})$ to define the direction. Some set up equations $\lambda + 4 = 3$ and $\mu - 1 = 1$ and proceeded to solve them simultaneously gaining no credit. Those who did use ratio usually went on to derive the required equation correctly; however, it should be remembered that, if required to derive a given answer, this must be written as a final conclusion in the form exactly as stated in the question. Another successful approach was to equate the $\mathbf{i}$ and $\mathbf{j}$ coefficients to $3k$ and $k$ and solve as simultaneous equations. A small minority of candidates applied $\mathbf{F} = 4\mathbf{a}$ or used integration to find $\mathbf{v}$ at this stage and then used ratio appropriately to obtain the required answer. In the second part, many candidates were able to find the resultant force and acceleration vectors. Some candidates found the magnitude of the force or acceleration at this stage and proceeded correctly with suvat formulae from there, while others continued with vectors. A number of candidates did not identify the initial velocity as zero, reading back to the information given at the start of the question being important here, so failed to use suvat formulae correctly. Use of $\mathbf{u} = 3\mathbf{i} + \mathbf{j}$ was not uncommon. Although most used suvat formulae, some successfully integrated the constant acceleration to find the velocity and displacement vectors. The majority of candidates knew how to find the magnitude of a vector using Pythagoras. The most significant errors seen included finding the resultant force but then using it as a displacement or velocity, showing a lack of understanding of the situation. A small number of candidates found an incorrect value for $\mu$ when substituting $\lambda$ and there was occasional use of only one of the forces.

---
topic: "Centres of Mass of Plane Figures"
subtopic: "Lamina in equilibrium"
---
### **Question 4**

**Figure 3** _(A sketch showing a plank $AB$ resting with end $A$ against a rough vertical wall and held in a horizontal position by a rope attached from $B$ to a point $C$ on the wall vertically above $A$, with a small block of mass $3M$ at point $P$)._

```tikz
\begin{tikzpicture}[scale=0.9]
  \draw[thick] (0,0) -- (5,0);
  \node at (0,0) [below left] {$A$};
  \node at (5,0) [below right] {$B$};
  \draw[thick] (0,0) -- (0,3.75);
  \node at (0,3.75) [left] {$C$};
  \draw[thick] (0,3.75) -- (5,0);
  \node at (2.5,1.875) [above left] {$\alpha$};
  \fill (3,0) circle (2pt);
  \node at (3,0) [below] {$P$};
  \draw[->] (0,0.8) -- (2.5,0.8);
  \node at (1.25,0.8) [above] {$x$};
  \draw[->] (2.5,0.8) -- (5,0.8);
  \node at (3.75,0.8) [above] {$2a - x$};
  \node at (2.5,-0.5) {$2a$};
\end{tikzpicture}
```

A plank, $AB$, of mass $M$ and length $2a$, rests with its end $A$ against a rough vertical wall. The plank is held in a horizontal position by a rope. One end of the rope is attached to the plank at $B$ and the other end is attached to the wall at the point $C$, which is vertically above $A$.

A small block of mass $3M$ is placed on the plank at the point $P$, where $AP = x$.

The plank is in equilibrium in a vertical plane which is perpendicular to the wall.

The angle between the rope and the plank is $\alpha$, where $\tan\alpha = \frac{3}{4}$, as shown in Figure 3.

The plank is modelled as a uniform rod, the block is modelled as a particle and the rope is modelled as a light inextensible string.

Using the model,

**(a) Using the model, show that the tension in the rope is $\frac{5Mg(3x + a)}{6a}$** **(3)**

The magnitude of the horizontal component of the force exerted on the plank at $A$ by the wall is $2Mg$.

**(b) Find $x$ in terms of $a$.** **(2)**

The force exerted on the plank at $A$ by the wall acts in a direction which makes an angle $\beta$ with the horizontal.

**(c) Find the value of $\tan\beta$.** **(5)**

The rope will break if the tension in it exceeds $5Mg$.

**(d) Explain how this will restrict the possible positions of $P$. You must justify your answer carefully.** **(3)**

**(Total 13 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Take moments about $A$**
$\circlearrowleft\text{ moment about } A$: $T \sin\alpha \times (2a) - Mg \times a - 3Mg \times x = 0$
- **[M1]** Takes moments about $A$, including all relevant force terms (tension component, weight of plank, weight of block).

**Step 2: Substitute $\sin\alpha$**
Given $\tan\alpha = \frac{3}{4}$, so $\sin\alpha = \frac{3}{5}$ and $\cos\alpha = \frac{4}{5}$.
$T \left(\frac{3}{5}\right)(2a) = Mga + 3Mgx$
$\frac{6}{5}a T = Mg(3x + a)$
- **[M1]** Substitutes $\sin\alpha = \frac{3}{5}$ into the moments equation.

**Step 3: Rearrange for $T$**
$T = \frac{5Mg(3x + a)}{6a}$
- **[A1]}** Obtains the required expression for $T$ (given answer).

#### **Part (b)**

**Step 4: Resolve horizontally**
Horizontal force from wall $R_H = T \cos\alpha = 2Mg$
- **[M1]** Sets horizontal component of tension equal to the horizontal force from the wall ($2Mg$).

**Step 5: Solve for $x$**
$T \left(\frac{4}{5}\right) = 2Mg \Rightarrow T = \frac{5}{2}Mg$
$\frac{5Mg(3x + a)}{6a} = \frac{5}{2}Mg \Rightarrow \frac{3x + a}{6a} = \frac{1}{2}$
$3x + a = 3a \Rightarrow 3x = 2a \Rightarrow x = \frac{2}{3}a$
- **[A1]** Correct value $x = \frac{2}{3}a$.

#### **Part (c)**

**Step 6: Resolve vertically at $A$**
Let vertical component of force at $A$ be $V$ (acting upwards).
$V + T \sin\alpha - Mg - 3Mg = 0$
- **[M1]** Resolves vertically for the whole system to find $V$.

**Step 7: Calculate $V$**
$V + \frac{5}{2}Mg \left(\frac{3}{5}\right) - 4Mg = 0$
$V + \frac{3}{2}Mg - 4Mg = 0 \Rightarrow V = \frac{5}{2}Mg$
- **[A1]** Correct vertical reaction component $V = \frac{5}{2}Mg$.

**Step 8: Identify horizontal component**
Horizontal component $H = 2Mg$
- **[B1]** Identifies horizontal force $H = 2Mg$.

**Step 9: Calculate $\tan\beta$**
$\tan\beta = \frac{V}{H} = \frac{\frac{5}{2}Mg}{2Mg} = \frac{5}{4}$
- **[M1]** Uses $\tan\beta = \frac{V}{H}$ (or equivalent trigonometric ratio).
- **[A1]** Correct value $\tan\beta = \frac{5}{4}$.

#### **Part (d)**

**Step 10: Use maximum tension condition**
$T \le 5Mg \Rightarrow \frac{5Mg(3x + a)}{6a} \le 5Mg$
$\frac{3x + a}{6a} \le 1 \Rightarrow 3x + a \le 6a \Rightarrow 3x \le 5a \Rightarrow x \le \frac{5}{3}a$
- **[M1]** Sets up inequality $T \le 5Mg$ using the expression from part (a).

**Step 11: State restriction with physical limits**
Since the block is on the plank of length $2a$, $0 \le x \le 2a$.
Thus, the position is restricted to $0 \le x \le \frac{5}{3}a$.
- **[A1]}** Fully explains the restriction on the range of possible values for $x$.

### **Examiner Report 4**

In part (a), very few candidates gave a fully correct reason for why the frictional force must act to the right on the diagram. Many stated that friction must oppose the direction of motion, saying that the rod would otherwise slip to the left. Some did mention it opposing the horizontal component of the tension but then failed to include that friction was the only other horizontal force in the system which was a key part of the argument. In the second part, it was required to derive a given expression for $T$ (tension). Although some candidates struggled to make a valid start and basically just wrote down the answer and stated ’by resolving ’, it was well done by a fair number who set up a correct equation for moments about $A$ and hence deduced the given result. Alternative approaches by either taking moments about other points or resolving forces were very rare and almost never successful, mostly because of missing terms. A few candidates failed to use perpendicular distances for the moments of the weight terms or failed to include the weight of the rod leading to a missing term. Part (c) was generally well answered by those candidates who resolved vertically, substituted for $T$ and re-arranged to obtain the given answer thereby gaining full marks in a few lines of working. Candidates who used alternative equations as a starting point were generally unsuccessful, usually a result of a missing term in one or both equations used, this often involving friction. In part (d) those candidates who resolved horizontally to give $F = T \sin\theta$ usually managed to score all four marks for deriving the exact value of the coefficient of friction. There were a variety of equations, resolving or taking moments, which would have led directly to a value for $F$ since the tension and normal reaction were known at that stage; however, these involved more working and therefore greater opportunity for error. Nevertheless, successful solutions by these methods were seen on occasion. Most of those candidates who found an expression for $F$ were able to achieve the independent method mark for the use of $F = \mu R$ even if their method for finding $F$ was incorrect. Since all the answers were given in this question, candidates needed to ensure that they showed sufficient detail in their working to warrant being awarded all the available marks. In particular, candidates should be encouraged to state their resolved forces and moments as equations, rather than considering them in isolation, and to ensure the substitution stages are shown.

---
topic: "Mechanics and Materials"
subtopic: "Projectile motion"
---
### **Question 5**

**Figure 4** _(A sketch showing a boy throwing a ball from point $A$ at a height of $2\text{ m}$ above horizontal ground with speed $U$ at an angle $\alpha$ above the horizontal, reaching a maximum height of $3\text{ m}$ above the ground, and hitting a target at point $T$)._

```tikz
\begin{tikzpicture}[scale=0.9]
  \draw[thick] (0,0) -- (7,0);
  \draw[dashed] (0,2) -- (7,2);
  \draw[dashed] (0,3) -- (7,3);
  \node at (0,2) [left] {$2\text{ m}$};
  \node at (0,3) [left] {$3\text{ m}$};
  \fill (1,2) circle (2pt);
  \node at (1,2) [above left] {$A$};
  \draw[->, thick] (1,2) -- (2,3.2);
  \node at (1.8,2.7) {$U$};
  \draw[dashed] (1,2) -- (2.5,2);
  \node at (2.2,2.2) {$\alpha$};
  \draw[domain=1:6, smooth, thick] plot (\x, {3 - 0.2*(\x-3.5)*(\x-3.5)});
  \fill (6,0.75) circle (2pt);
  \node at (6,0.75) [right] {$T$};
\end{tikzpicture}
```

A boy throws a ball at a target. At the instant when the ball leaves the boy's hand at the point $A$, the ball is $2\text{ m}$ above horizontal ground and is moving with speed $U$ at an angle $\alpha$ above the horizontal.

In the subsequent motion, the highest point reached by the ball is $3\text{ m}$ above the ground. The target is modelled as being the point $T$, as shown in Figure 4. 

The ball is modelled as a particle moving freely under gravity.

Using the model,

**(a) show that $U^2 = \frac{2g}{\sin^2\alpha}$.** **(2)**

The point $T$ is at a horizontal distance of $20\text{ m}$ from $A$ and is at a height of $0.75\text{ m}$ above the ground. The ball reaches $T$ without hitting the ground.

**(b) Find the size of the angle $\alpha$.** **(9)**

**(c) State one limitation of the model that could affect your answer to part (b).** **(1)**

**(d) Find the time taken for the ball to travel from $A$ to $T$.** **(3)**

**(Total 15 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Consider vertical motion to maximum height**
Using $v^2 = u^2 + 2as$ with $v = 0$, $u = U\sin\alpha$, and $s = 3 - 2 = 1\text{ m}$:
$0 = (U\sin\alpha)^2 - 2g(1)$
- **[M1]** Uses vertical motion formula $v^2 = u^2 + 2as$ from $A$ to highest point.

**Step 2: Rearrange for $U^2$**
$U^2\sin^2\alpha = 2g \Rightarrow U^2 = \frac{2g}{\sin^2\alpha}$
- **[A1]}** Obtains required expression (given answer).

#### **Part (b)**

**Step 3: Set up equation of trajectory**
Taking origin at $A$, coordinates of $T$ are $(x, y) = (20, 0.75 - 2) = (20, -1.25)$.
Using $y = x\tan\alpha - \frac{gx^2}{2U^2\cos^2\alpha}$:
- **[M1]** Uses standard trajectory equation.

**Step 4: Substitute $U^2$**
Since $U^2 = \frac{2g}{\sin^2\alpha}$, then $U^2\cos^2\alpha = \frac{2g\cos^2\alpha}{\sin^2\alpha} = 2g\cot^2\alpha$.
$\frac{gx^2}{2U^2\cos^2\alpha} = \frac{g(20^2)}{2(2g\cot^2\alpha)} = \frac{400}{4}\tan^2\alpha = 100\tan^2\alpha$.
- **[M1]** Substitutes expression for $U^2$ or equivalent into trajectory equation.

**Step 5: Form quadratic in $\tan\alpha$**
$-1.25 = 20\tan\alpha - \frac{g(20^2)}{2\left(\frac{2g}{\sin^2\alpha}\right)\cos^2\alpha}$
$-1.25 = 20\tan\alpha - 100\tan^2\alpha$
Divide by $-1.25$:
$80\tan^2\alpha - 16\tan\alpha - 1 = 0$
- **[M1]** Forms a quadratic equation in terms of $\tan\alpha$.
- **[A1]** Correct quadratic equation.

**Step 6: Solve quadratic for $\tan\alpha$**
Using the quadratic formula:
$\tan\alpha = \frac{16 \pm \sqrt{(-16)^2 - 4(80)(-1)}}{2(80)} = \frac{16 \pm \sqrt{256 + 320}}{160} = \frac{16 \pm \sqrt{576}}{160} = \frac{16 \pm 24}{160}$
$\tan\alpha = \frac{40}{160} = 0.25$  (or $\tan\alpha = -\frac{8}{160} = -0.05$, rejected since $\alpha > 0$)
- **[M1]** Solves the quadratic equation for $\tan\alpha$.
- **[A1]** Correct value for $\tan\alpha = 0.25$.

**Step 7: Calculate angle $\alpha$**
$\alpha = \arctan(0.25) = 14.0^\circ$ (or $0.245\text{ radians}$)
- **[A1]** Correct angle $\alpha$ to $3$ sig fig ($14.0^\circ$).

#### **Part (c)**

**Step 8: State limitation**
Air resistance is ignored / the ball is not a particle / wind effects / spin of the ball.
- **[B1]** Any valid limitation of the model.

#### **Part (d)**

**Step 9: Calculate horizontal velocity component**
$U^2 = \frac{2(9.8)}{(0.25 / \sqrt{1 + 0.25^2})^2} = \frac{19.6}{(1/17)} = 333.2$  (or using $U\cos\alpha$)
Alternatively, using horizontal motion:
$x = (U\cos\alpha)t \Rightarrow 20 = U\cos\alpha \cdot t$
From $U^2 = \frac{2g}{\sin^2\alpha}$ and $\tan\alpha = 0.25$:
$\sin\alpha = \frac{1}{\sqrt{17}}$, $\cos\alpha = \frac{4}{\sqrt{17}}$.
$U^2 = \frac{2(9.8)}{1/17} = 333.2 \Rightarrow U = 18.25\text{ m s}^{-1}$.
$U\cos\alpha = 18.25 \times \frac{4}{\sqrt{17}} = 17.7\text{ m s}^{-1}$.
$t = \frac{20}{17.7} = 1.13\text{ seconds}$.
- **[M1]** Uses horizontal motion equation $x = (U\cos\alpha)t$ to find $t$.
- **[M1]** Correctly calculates $U\cos\alpha$ or $U$.
- **[A1]}** Correct time $1.13\text{ s}$ (or $1.1\text{ s}$).

### **Examiner Report 5**

In part (a), the majority of candidates found an equation for the horizontal motion in terms of $t$. Most then used this to substitute $t = 120 / U\cos\alpha$ into $0 = U\sin\alpha t - \frac{1}{2}gt^2$, the vertical motion equation for the whole trajectory. This was generally rearranged to give the required answer although cancelling the common factor of $t$ from the quadratic before substitution led to a neater solution. A minority chose to consider just half the motion with $v = u + at$ and $v = 0$ at the greatest height which also led to a neat solution. Some candidates failed to identify that the vertical displacement would be zero over the whole motion, and some were inconsistent in considering the time for the whole or half trajectory. A small but surprising number of answers were seen where $120\text{ m}$ was used as the vertical distance. It should again be emphasised that candidates, when required to derive a given result, should write the final answer in exactly the same form as that stated in the question. In the second part, many candidates correctly arrived at an equation in $U\sin\alpha$ using $v^2 = u^2 + 2as$ although a failure to resolve the vertical velocity giving $U^2 = 196$ was not uncommon. Most were unable to progress further and so only gained 2 out of a possible 4 marks. For example, they just left it there or found the “correct” answer without any justification for the value of $\alpha$. Some did not realise they could use the answer from part (a) and, of those who did, some struggled with the required algebra. Many who correctly identified the value of $\alpha$ as $\tan^{-1}(1/3)$ used the decimal value for the angle in degrees rather than calculating an exact value for $\sin\alpha$ with which to substitute, and lost the final mark. A few candidates set up an equation by using $s = ut + \frac{1}{2}at^2$ with $s = 10$ and substituting in the time to travel $60\text{ m}$ horizontally, but again had trouble finishing off for the last 2 marks having more difficulty with the slightly more complicated algebra required. Part (c) required a comparison of the initial velocity in the model without air resistance ($U$) and the initial velocity in a model which took account of air resistance ($V$). Since the horizontal range and greatest height were fixed, the expected answer was that $V > U$ as air resistance would have to be overcome. However, it was very common to see ‘$U$ is greater because air resistance will decrease the velocity’ or something similar. A few perhaps confused $V$ with the final speed and so said that $U$ would be greater as air resistance would slow the final speed down. A correct possible refinement was often given in part (d). The most common correct suggestions were to take spin into account, consider the effect of wind or to model the particle as having dimensions. A fair number of candidates incorrectly believed that considering mass or weight was an acceptable answer and that a particle has no mass. Others made suggestions regarding the ground not being level but this, however, was not part of the model as defined in the question.
