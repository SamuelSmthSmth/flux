---
topic: "Kinematics"
subtopic: "Motion along a straight line with variable force"
---
### **Question 1**

Two children, Pat ($P$) and Sam ($S$), run a race along a straight horizontal track.

Both children start from rest at the same time and cross the finish line at the same time.

In a model of the motion:

Pat accelerates at a constant rate from rest for $5\text{ s}$ until reaching a speed of $4\text{ ms}^{-1}$ and then maintains a constant speed of $4\text{ ms}^{-1}$ until crossing the finish line.

Sam accelerates at a constant rate of $1\text{ ms}^{-2}$ from rest until reaching a speed of $X\text{ ms}^{-1}$ and then maintains a constant speed of $X\text{ ms}^{-1}$ until crossing the finish line.

Both children take $27.5\text{ s}$ to complete the race.

The velocity-time graphs shown in Figure 1 describe the model of the motion of each child from the instant they start to the instant they cross the finish line together.

**Figure 1** _(Two velocity-time graphs on the same set of axes representing the motion of children Pat (P) and Sam (S) during a race, showing maximum speeds $4\text{ ms}^{-1}$ and $X\text{ ms}^{-1}$ respectively, with a total time of $27.5\text{ s}$ and acceleration phase ending at $t = 5\text{ s}$ for Pat)._

```tikz
\begin{tikzpicture}[scale=0.9]
  \draw[->] (0,0) -- (8,0) node[below] {Time (s)};
  \draw[->] (0,0) -- (0,5) node[above] {Velocity ($\text{ms}^{-1}$)};
  \draw[thick] (0,0) -- (1.5,4) -- (7,4) -- (7,0);
  \draw[thick, dashed] (0,0) -- (2.2,3.2) -- (7,3.2);
  \draw[dashed] (1.5,0) node[below] {$5$} -- (1.5,4);
  \draw[dashed] (7,0) node[below] {$27.5$} -- (7,4);
  \node at (7.5,4) {$(P)$};
  \node at (7.5,3.2) {$(S)$};
  \node at (-0.3,4) {$4$};
  \node at (-0.3,3.2) {$X$};
  \node at (0,0) [below left] {$0$};
\end{tikzpicture}
```

Using the model,

**(a)** explain why the areas under the two graphs are equal, **(1)**

**(b)** find the acceleration of Pat during the first 5 seconds, **(1)**

**(c)** find, in metres, the length of the race, **(2)**

**(d)** find the value of $X$, giving your answer to 3 significant figures. **(4)**

**(Total 8 marks)**

### **Mark Scheme 1**

#### **Part (a)**

- **[B1]** Both children run the same distance in the same time, and the area under a velocity-time graph represents distance.

#### **Part (b)**

- **[B1]** $\frac{4}{5} = 0.8\text{ ms}^{-2}$

#### **Part (c)**

- **[M1]** Correct method to find the area under Pat's graph (e.g. $\frac{1}{2}(27.5 + 22.5) \times 4$ or $0.5 \times 5 \times 4 + (27.5 - 5) \times 4$).
- **[A1]** $100\text{ m}$

#### **Part (d)**

- **[M1]** Equates the distance for Sam to the total distance $100\text{ m}$, using $t_{\text{acc}} = \frac{X}{1} = X$.
- **[M1]** Area expression for Sam: $\frac{1}{2}X(X + 27.5) = 100$ or $\frac{1}{2}(27.5 + 27.5 - X)X = 100$
- **[A1]** Correct quadratic equation: $X^2 + 27.5X - 200 = 0$
- **[A1]** $X = 6.20$ (3 sf)

---
topic: "Mechanics and Materials"
subtopic: "Projectile motion"
---
### **Question 2**

A small stone is projected vertically upwards with speed $39.2\text{ ms}^{-1}$ from a point $O$.

The stone is modelled as a particle moving freely under gravity from when it is projected until it hits the ground $10\text{ s}$ later.

Using the model, find

**(a)** the height of $O$ above the ground, **(3)**

**(b)** the total length of time for which the speed of the stone is less than or equal to $24.5\text{ ms}^{-1}$, **(3)**

**(c)** State one refinement that could be made to the model that would make your answer to part (a) more accurate. **(1)**

**(Total 7 marks)**

### **Mark Scheme 2**

#### **Part (a)**

- **[M1]** Uses a suitable suvat equation for the whole motion, e.g., $s = ut + \frac{1}{2}at^2$ with $u = 39.2$, $t = 10$, $a = -9.8$.
- **[A1]** $s = (39.2 \times 10) + \frac{1}{2}(-9.8)(10^2) = 392 - 490$
- **[A1]** Height is $98\text{ m}$.

#### **Part (b)**

- **[M1]** Sets up an inequality or equations for the velocity: $-24.5 \le 39.2 - 9.8t \le 24.5$
- **[M1]** Solves for the two time boundaries: $t_1 = \frac{39.2 - 24.5}{9.8} = 1.5\text{ s}$ and $t_2 = \frac{39.2 + 24.5}{9.8} = 6.5\text{ s}$
- **[A1]** Total time is $6.5 - 1.5 = 5.0\text{ s}$.

#### **Part (c)**

- **[B1]** Include air resistance / use a more accurate value for $g$.

---
topic: "Kinematics"
subtopic: "Acceleration varying with time"
---
### **Question 3**

In this question you must show all stages of your working.

Solutions relying entirely on calculator technology are not acceptable.

A fixed point $O$ lies on a straight line.

A particle $P$ moves along the straight line such that at time $t$ seconds, $t \ge 0$, after passing through $O$, the velocity of $P$, $v\text{ ms}^{-1}$, is modelled as

$$v = 15 - t^2 - 2t$$

**(a)** Verify that $P$ comes to instantaneous rest when $t = 3$. **(1)**

**(b)** Find the magnitude of the acceleration of $P$ when $t = 3$. **(3)**

**(c)** Find the total distance travelled by $P$ in the interval $0 \le t \le 4$. **(4)**

**(Total 8 marks)**

### **Mark Scheme 3**

#### **Part (a)**

- **[B1]** Substitute $t = 3$ into $v = 15 - 3^2 - 2(3) = 15 - 9 - 6 = 0$. (Hence verified).

#### **Part (b)**

- **[M1]** Differentiates velocity to find acceleration: $a = \frac{dv}{dt} = -2t - 2$.
- **[M1]** Substitutes $t = 3$: $a = -2(3) - 2 = -8$.
- **[A1]** Magnitude is $8\text{ ms}^{-2}$.

#### **Part (c)**

- **[M1]** Integrates $v$ to find $s$: $s = \int (15 - t^2 - 2t)\,dt = 15t - \frac{1}{3}t^3 - t^2$.
- **[M1]** Evaluates $s(3) = 15(3) - \frac{1}{3}(3^3) - 3^2 = 45 - 9 - 9 = 27$, and $s(4) = 15(4) - \frac{1}{3}(4^3) - 4^2 = 60 - \frac{64}{3} - 16 = \frac{56}{3}$.
- **[M1]** Calculates distance as $|s(3) - s(0)| + |s(4) - s(3)| = 27 + |18.67 - 27| = 27 + 8.33$.
- **[A1]** Total distance is $\frac{107}{3}\text{ m}$ (or $35.7\text{ m}$).

---
topic: "Mechanics and Materials"
subtopic: "Newton's laws of motion"
---
### **Question 4**

**Figure 2** _(A car of mass $1200\text{ kg}$ towing a trailer of mass $400\text{ kg}$ along a straight horizontal road using a horizontal tow rope, with resistances $2R$ on the car and $R$ on the trailer)._

```tikz
\begin{tikzpicture}[scale=0.9]
  \draw[thick] (2,0) rectangle (4,1);
  \draw (2.5,0) circle (0.3);
  \draw (3.5,0) circle (0.3);
  \node at (3,0.5) {$400\,\text{kg}$};
  
  \draw[thick] (5,0) rectangle (7.5,1.2);
  \draw (5.5,0) circle (0.3);
  \draw (7,0) circle (0.3);
  \node at (6.25,0.6) {$1200\,\text{kg}$};
  
  \draw[thick] (4,0.5) -- (5,0.5);
\end{tikzpicture}
```

A car of mass $1200\text{ kg}$ is towing a trailer of mass $400\text{ kg}$ along a straight horizontal road using a tow rope, as shown in Figure 2.

The rope is horizontal and parallel to the direction of motion of the car.

* The resistance to motion of the car is modelled as a constant force of magnitude $2R$ newtons
* The resistance to motion of the trailer is modelled as a constant force of magnitude $R$ newtons
* The rope is modelled as being light and inextensible
* The acceleration of the car is modelled as $a\text{ ms}^{-2}$

The driving force of the engine of the car is $7400\text{ N}$ and the tension in the tow rope is $2400\text{ N}$.

Using the model,

**(a)** find the value of $a$. **(5)**

In a refined model, the rope is modelled as having mass and the acceleration of the car is found to be $a_1\text{ ms}^{-2}$.

**(b)** State how the value of $a_1$ compares with the value of $a$. **(1)**

**(c)** State one limitation of the model used for the resistance to motion of the car. **(1)**

**(Total 7 marks)**

### **Mark Scheme 4**

#### **Part (a)**

- **[M1]** Equation of motion for the trailer: $2400 - R = 400a$.
- **[M1]** Equation of motion for the car: $7400 - 2400 - 2R = 1200a$.
- **[M1]** Solves simultaneous equations for $a$ and $R$.
- **[A1]** Correct value for $R$ or intermediate step.
- **[A1]** $a = 2.5\text{ ms}^{-2}$.

#### **Part (b)**

- **[B1]** $a_1 < a$ (or smaller).

#### **Part (c)**

- **[B1]** Resistance is not constant / depends on speed.

---
### **Examiner Report Set 1**

#### **General**
Overall the quality of the scripts was reasonably good with most candidates able to make some attempt at at least three of the four questions. There were quite a few blanks for some of the parts of the last question, but it wasn't clear whether candidates were running out of time or running out of ideas. Question 1 proved to be a good starter with a majority of candidates able to score at least 4 of the 8 marks available. Questions 1 and 3 performed at a similar level and the performance on questions 2 and 4 was almost identical although significantly lower than the other two. Question 4 in particular proved to be a challenge for candidates with more than half only scoring 2 or fewer of the 7 marks.

In calculations the numerical value of $g$ which should be used is $9.8$, unless otherwise stated. Final answers should then be given to 2 (or 3) significant figures — more accurate answers will be penalised, including fractions but exact multiples of $g$ are usually accepted. Use of $g = 9.81$ seemed more prevalent this year than in previous years and this led to the loss of a mark.

#### **Question 1**
In part (a), common incorrect answers were "took the same time" or explanations about one accelerating faster but running at a slower speed with no reference to distance. However, most seemed to know that the area represented distance and realised that since it was a race, the children had covered the same distance. In the second part, a few used Pythagoras or found the area but most either used the gradient or a suvat approach. Most candidates, in part (c), found the area correctly using Pat's graph. Some made errors with lengths of sides or omitted the $\frac{1}{2}$. Very few used suvat for the whole motion and a few left out the triangle thus getting either 90 or 110. There were many poor responses for the final part. Since the shape of the graph used in part (d) was the same shape as the graph used in part (c), it was surprising to see so many candidates using a different approach for finding this area even though they realised that the areas were the same.

#### **Question 2**
In part (a), there were surprisingly few diagrams seen and this would have helped candidates to understand the situation. The most common error was to set $v = 0$ leading to a height of $78.4\text{ m}$. A few used $t = 5\text{ s}$ or $t = 10\text{ s}$ for both the up part and the down part of the motion. The most successful approach was the "whole motion" one. A significant number of candidates gave a negative answer. In part (c), "air resistance" was the most common response, followed by "use a more accurate value of $g$". A common error was not to reference the model at all.

#### **Question 3**
In part (a), virtually all the candidates achieved the mark either by substitution of $t = 3$ to show that $v = 0$ or by putting $v = 0$ and solving for $t$. Most candidates differentiated correctly in part (b) and then obtained $-8$, though many stopped at $-8$ not understanding that magnitude had to be positive. In part (c), most integrated correctly and scored the first two marks. But after that, the majority just found the value of the integral at $t = 4$ without properly accounting for the changing direction of motion.

#### **Question 4**
Many candidates made no attempt at part (a). Those who did mostly realised that they needed to use $F = ma$ although many were unable to use the correct combination of forces in their car/trailer/whole system equations. Sign errors in solving simultaneous equations were common. The most common error in the final part was to make no reference to the modelling of the resistance.
