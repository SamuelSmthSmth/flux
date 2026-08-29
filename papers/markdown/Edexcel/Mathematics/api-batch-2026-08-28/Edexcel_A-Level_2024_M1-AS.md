---
topic: "Mechanics and Materials"
subtopic: "Motion along a straight line"
---
### **Question 1**

**Figure 1** _(A speed-time graph showing a car accelerating uniformly from rest to $5\text{ ms}^{-1}$ in $5\text{ seconds}$, travelling at a constant speed of $5\text{ ms}^{-1}$ for $15\text{ seconds}$, and then decelerating uniformly to rest at $T\text{ seconds}$)_

Figure 1 shows the speed-time graph for the journey of a car moving in a long queue of traffic on a straight horizontal road.

At time $t = 0$, the car is at rest at the point $A$.

The car then accelerates uniformly for $5\text{ seconds}$ until it reaches a speed of $5\text{ ms}^{-1}$

For the next $15\text{ seconds}$ the car travels at a constant speed of $5\text{ ms}^{-1}$

The car then decelerates uniformly until it comes to rest at the point $B$.

The total journey time is $30\text{ seconds}$.

**(a)** Find the distance $AB$. **(3)**

**(b)** Sketch a distance-time graph for the journey of the car from $A$ to $B$. **(3)**

**(Total 6 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Use area under the speed-time graph to find distance**

$$\text{Distance} = \frac{1}{2}(30 + 15)(5)$$

- **[M1]** Uses area under the graph to find distance (e.g. splitting into a triangle, rectangle, and triangle, or using a trapezium formula).
- **[A1]** Correct unsimplified expression for the area, e.g. $\frac{1}{2}(5)(5) + (15)(5) + \frac{1}{2}(10)(5)$ or $\frac{1}{2}(30 + 15) \times 5$.

$$\text{Distance} = 112.5\text{ m} \quad (\text{or } \frac{225}{2}\text{ m})$$

- **[A1]** Correct distance of $112.5\text{ m}$.

#### **Part (b)**

**Step 2: Sketch the displacement-time graph**

```tikz
\begin{tikzpicture}[scale=0.9]
  \draw[->] (-0.5,0) -- (6.5,0) node[below] {$t$ (s)};
  \draw[->] (0,-0.5) -- (0,5.5) node[left] {$s$ (m)};
  \draw[domain=0:1, smooth, thick] plot (\x, {0.5*(\x)^2});
  \draw[domain=1:4, smooth, thick] plot (\x, {0.5 + 2.5*(\x - 1)});
  \draw[domain=4:6, smooth, thick] plot (\x, {8 + 2.5*(\x - 4) - 0.25*(\x - 4)^2});
  \node[below left] at (0,0) {$0$};
  \node[below] at (1,0) {$5$};
  \node[below] at (4,0) {$20$};
  \node[below] at (6,0) {$30$};
  \node[left] at (0,4.2) {$112.5$};
  \draw[dashed] (1,0) -- (1,0.5);
  \draw[dashed] (4,0) -- (4,8);
  \draw[dashed] (6,0) -- (6,11.25);
  \draw[dashed] (0,8) -- (4,8);
  \draw[dashed] (0,11.25) -- (6,11.25);
\end{tikzpicture}
```

- **[B1]** Correct shape showing three distinct sections: initially curving upwards (increasing gradient), followed by a straight section with constant positive gradient, and finally curving downwards (decreasing gradient) to a horizontal tangent at $t = 30$.
- **[B1]** Correct key time coordinates labelled on the $t$-axis ($5$, $20$, and $30$).
- **[B1]** Correct final distance labelled on the $s$-axis ($112.5\text{ m}$ or equivalent).

---
topic: "Integration"
subtopic: "Areas under curves"
---
### **Question 2**

In this question you must show all stages of your working.

Solutions relying entirely on calculator technology are not acceptable.

A particle is moving along a straight line.

At time $t$ seconds, $t > 0$, the velocity of the particle is $v\text{ ms}^{-1}$, where

$$v = 2t - 7\sqrt{t} + 6$$

**(a)** Find the acceleration of the particle when $t = 4$. **(3)**

When $t = 1$ the particle is at the point $X$.

When $t = 2$ the particle is at the point $Y$.

Given that the particle does not come to instantaneous rest in the interval $1 < t < 2$,

**(b)** show that $XY = \frac{1}{3}(41 - 28\sqrt{2})\text{ metres}$. **(4)**

**(Total 7 marks)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Find acceleration by differentiating velocity with respect to time**

$$a = \frac{dv}{dt} = 2 - \frac{7}{2}t^{-\frac{1}{2}}$$

- **[M1]** Differentiates $v$ with respect to $t$. At least one term correct (power decreases by 1).
- **[A1]** Fully correct derivative: $2 - \frac{7}{2}t^{-\frac{1}{2}}$ or equivalent.

**Step 2: Substitute $t = 4$ into the expression for acceleration**

$$a = 2 - \frac{7}{2}(4)^{-\frac{1}{2}} = 2 - \frac{7}{2}\left(\frac{1}{2}\right) = 2 - \frac{7}{4} = \frac{1}{4}\text{ ms}^{-2} \text{ (or } 0.25\text{)}$$

- **[A1]** Correct evaluation to $\frac{1}{4}\text{ ms}^{-2}$.

#### **Part (b)**

**Step 3: Integrate velocity to find displacement $s$**

$$s = \int (2t - 7t^{\frac{1}{2}} + 6) \, dt = t^2 - \frac{14}{3}t^{\frac{3}{2}} + 6t + C$$

- **[M1]** Integrates $v$ with respect to $t$. At least one power increases correctly.
- **[A1]** Fully correct integrated expression: $t^2 - \frac{14}{3}t^{\frac{3}{2}} + 6t$.

**Step 4: Set up the limits for the distance $XY$**

$$XY = s(2) - s(1)$$

$$s(2) = (2)^2 - \frac{14}{3}(2)^{\frac{3}{2}} + 6(2) = 4 - \frac{28\sqrt{2}}{3} + 12 = 16 - \frac{28\sqrt{2}}{3}$$

$$s(1) = (1)^2 - \frac{14}{3}(1)^{\frac{3}{2}} + 6(1) = 1 - \frac{14}{3} + 6 = \frac{7}{3}$$

- **[dM1]** Substitutes $t = 2$ and $t = 1$ into their integrated expression and subtracts (either order or uses modulus, consistent with the interval). Dependent on the previous M mark.

**Step 5: Simplify to the required form**

$$XY = \left(16 - \frac{28\sqrt{2}}{3}\right) - \frac{7}{3} = 16 - \frac{7}{3} - \frac{28\sqrt{2}}{3} = \frac{41}{3} - \frac{28\sqrt{2}}{3} = \frac{1}{3}(41 - 28\sqrt{2})$$

- **[A1]** Obtains the given answer $\frac{1}{3}(41 - 28\sqrt{2})$ with clear and fully correct working.

---
topic: "Vectors"
subtopic: "Application to mechanics"
---
### **Question 3**

[In this question, $\mathbf{i}$ and $\mathbf{j}$ are perpendicular unit vectors in a horizontal plane.]

A particle $P$ is moving on a smooth horizontal surface under the action of two forces.

Given that
* the mass of $P$ is $2\text{ kg}$
* the two forces are $(2\mathbf{i} + 4\mathbf{j})\text{ N}$ and $(c\mathbf{i} - 2\mathbf{j})\text{ N}$, where $c$ is a constant
* the magnitude of the acceleration of $P$ is $\sqrt{5}\text{ ms}^{-2}$

find the two possible values of $c$. **(5)**

**(Total 5 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Find the resultant force vector**

$$\mathbf{F}_{\text{res}} = (2\mathbf{i} + 4\mathbf{j}) + (c\mathbf{i} - 2\mathbf{j}) = (2 + c)\mathbf{i} + 2\mathbf{j}$$

- **[B1]** Correct resultant force vector in terms of $c$.

**Step 2: Use Newton's Second Law ($\mathbf{F} = m\mathbf{a}$) to find the magnitude of the resultant force**

$$\text{Magnitude of acceleration } |\mathbf{a}| = \sqrt{5}$$

$$|\mathbf{F}_{\text{res}}| = m|\mathbf{a}| = 2 \times \sqrt{5} = 2\sqrt{5}$$

- **[M1]** Uses $F = ma$ to find the magnitude of the resultant force (or squares the components and equates to $(m \times \text{acceleration})^2$).

**Step 3: Form an equation using the magnitude of the vector**

$$\sqrt{(2 + c)^2 + 2^2} = 2\sqrt{5}$$

$$(2 + c)^2 + 4 = (2\sqrt{5})^2 = 20$$

- **[M1]** Correctly sets up an equation for the magnitude of the resultant force equating it to $2\sqrt{5}$ (or squaring both sides to get $(2 + c)^2 + 2^2 = (2\sqrt{5})^2$).

**Step 4: Solve the quadratic equation for $c$**

$$(2 + c)^2 = 16$$

$$2 + c = \pm 4$$

$$c = 2 \text{ or } c = -6$$

- **[A1]** Correct quadratic equation solved or correct values obtained.
- **[A1]** Both $c = 2$ and $c = -6$ stated correctly.

---
topic: "Mechanics and Materials"
subtopic: "Newton's laws of motion"
---
### **Question 4**

**Figure 2** _(A car of mass $800\text{ kg}$ towing a trailer of mass $600\text{ kg}$ along a straight horizontal road via a towbar)_

Figure 2 shows a car towing a trailer along a straight horizontal road.

The mass of the car is $800\text{ kg}$ and the mass of the trailer is $600\text{ kg}$.

The trailer is attached to the car by a towbar which is parallel to the road and parallel to the direction of motion of the car and the trailer.

The towbar is modelled as a light rod.

The resistance to the motion of the car is modelled as a constant force of magnitude $400\text{ N}$.

The resistance to the motion of the trailer is modelled as a constant force of magnitude $R\text{ newtons}$.

The engine of the car is producing a constant driving force that is horizontal and of magnitude $1740\text{ N}$.

The acceleration of the car is $0.6\text{ ms}^{-2}$ and the tension in the towbar is $T\text{ newtons}$.

Using the model,

**(a)** show that $R = 500$. **(3)**

**(b)** find the value of $T$. **(3)**

At the instant when the speed of the car and the trailer is $12.5\text{ ms}^{-1}$, the towbar breaks.

The trailer moves a further distance $d\text{ metres}$ before coming to rest.

The resistance to the motion of the trailer is modelled as a constant force of magnitude $500\text{ N}$.

Using the model,

**(c)** show that, after the towbar breaks, the deceleration of the trailer is $\frac{5}{6}\text{ ms}^{-2}$. **(1)**

**(d)** find the value of $d$. **(3)**

In reality, the distance $d\text{ metres}$ is likely to be different from the answer found in part (d).

**(e)** Give two different reasons why this is the case. **(2)**

**(Total 12 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Form an equation of motion for the whole system**

$$1740 - 400 - R = (800 + 600) \times 0.6$$

- **[M1]** Forms a complete equation of motion for the combined system (driving force minus resistances equals total mass times acceleration).
- **[A1]** Correct unsimplified equation with all correct terms.
- **[A1]** Completes the proof to show $R = 500$ with no errors.

#### **Part (b)**

**Step 2: Form an equation of motion for the trailer alone**

$$T - 500 = 600 \times 0.6$$

- **[M1]** Forms an equation of motion for the trailer or the car, including tension $T$ and mass correctly.
- **[A1]** Correct equation for the trailer: $T - 500 = 600 \times 0.6$ (or for the car: $1740 - 400 - T = 800 \times 0.6$).
- **[A1]** $T = 860\text{ N}$.

#### **Part (c)**

**Step 3: Apply Newton's Second Law to the trailer after the towbar breaks**

$$500 = 600 \times a \implies a = \frac{500}{600} = \frac{5}{6}\text{ ms}^{-2}$$

- **[B1]** Shows clearly that deceleration is $\frac{5}{6}\text{ ms}^{-2}$ (accept $-\frac{5}{6}$ if defined as acceleration).

#### **Part (d)**

**Step 4: Use suvat equations to find distance $d$**

$$u = 12.5,\quad v = 0,\quad a = -\frac{5}{6}$$

$$v^2 = u^2 + 2as \implies 0 = 12.5^2 + 2\left(-\frac{5}{6}\right)d$$

- **[M1]** Selects an appropriate suvat formula involving $u, v, a$ and $s$ (e.g., $v^2 = u^2 + 2as$ or $s = ut + \frac{1}{2}at^2$ combined with $v = u + at$).
- **[A1]** Correct substitution into the suvat formula.
- **[A1]** $d = 93.75\text{ m}$ (or $\frac{375}{4}$).

#### **Part (e)**

**Step 5: Identify two limitations of the model**

* Resistance is not constant.
* Air resistance is not negligible / is ignored.
* The towbar has mass.
* The trailer may wobble or is not a particle.

- **[B1]** First valid reason given.
- **[B1]** Second valid reason given. (Ignore any extra incorrect reasons if more than two are given, but penalise contradictory statements).

### **Examiner Report 4**

#### **General Comments**
Overall, the paper proved to be very accessible and the quality of the scripts was reasonably good with most candidates able to make some attempt at all four questions. Questions 1 and 2 both proved to be fairly friendly with $45\%$ able to score $4$ out of $6$ for question 1 and $50\%$ able to achieve at least $6$ out of $7$ for question 2. Candidates found question 3 by far the most challenging with $40\%$ unable to achieve any marks.

In calculations the numerical value of $g$ which should be used is $9.8$, unless otherwise stated. Final answers should then be given to $2$ (or $3$) significant figures — more accurate answers will be penalised, including fractions but exact multiples of $g$ are usually accepted.

#### **Question 1**
Part (a) proved to be a good starter question for almost all of the candidates. Successful candidates found the area under the graph by either separating into two triangles and a rectangle (the most popular method) or by going directly to a trapezium. A few candidates applied suvat formulae to each part of the motion. Unsuccessful candidates used incorrect formulae or had a correct, unsimplified expression for the area but then made mistakes in the arithmetic. A few, oddly, found the length of the hypotenuse instead of the area of the triangles.

The second part proved to be much more of a challenge, although the majority of candidates did offer a graph with three sections. Most had three straight lines with different positive gradients or one continuous straight line but quite a few attempts included lines with negative gradients or horizontal lines for the first and/or last sections. Most candidates only gained one mark out of three in this part of the question. Successful candidates realised that the first and third sections of the graph needed to be quadratic, from suvat formula, whilst the middle section was a straight line with positive gradient. In addition, the numbers $5$, $20$, $30$ and their total distance were not always clearly shown on the axes. Some candidates had graphs that were unclearly drawn, often without straight lines. Many candidates with the three sections correct struggled with the transition between the sections and failed to produce a smooth curve, often exaggerating the curves, but they were not penalised for this. A few candidates simply recreated the speed-time graph trapezium with different axis labels.

#### **Question 2**
In part (a), most differentiated the given expression for $v$ with respect to $t$ to get to an expression for their acceleration. Candidates usually handled the powers correctly but there were the occasional errors in the coefficients or an error in the substitution of $t = 4$. Some tried to use suvat formulae to find the acceleration and a few integrated rather than differentiated.

In part (b), successful candidates integrated the expression for $v$ with respect to $t$ and were usually able to obtain a correct, unsimplified expression for the displacement of the particle at time $t$. There were then occasional errors with the simplification often due to incorrect coefficients. There was no penalty for not including a constant of integration. Successful candidates then used the limits of $t = 1$ and $t = 2$ to calculate the distance $XY$. A surprising number of candidates thought that finding $XY$ meant that they then had to multiply these two values. Since there was a printed answer, candidates needed to clearly show all stages of their working including the use of surds to get to the required form of the answer. Of those that tried to use surds, some struggled to reach the given answer whilst others did not show enough working to gain the final A mark. Ignoring the instructions at the top of the question, many candidates used calculators and decimals appeared in their solutions which resulted in the solutions being incomplete and losing the final mark. Very few candidates used differentiation in this part.

#### **Question 3**
This was a challenging question for many candidates since forces were given as vectors, but the acceleration was given as a scalar. Although most realised that the two forces needed to be combined to produce a resultant, some subtracted the components rather than adding, thereby failing to achieve the first mark. This also required the $\mathbf{i}$ and $\mathbf{j}$ terms to be collected to enable an expression for the magnitude to be found. A common starting point was to equate the vector sum of the forces to a scalar '$ma$' term often leading to no further valid progress. Those who attempted to work in scalars sometimes equated the magnitude of their resultant to $\sqrt{5}$ (acceleration) rather than $2\sqrt{5}$ ('$ma$' term) and managed to secure one of the two available method marks. Where a correct unsimplified equation in $c$ was reached, processing errors such as not squaring each side or in expanding brackets sometimes led to incorrect answers. The few who found the acceleration vector and equated the magnitude to $\sqrt{5}$ or the square of the magnitude to $5$ tended to do so successfully despite the slightly harder algebra.

#### **Question 4**
In part (a), those candidates who attempted to produce an equation of motion for the whole system were mostly successful in finding the resistance on the car, possibly helped by the fact that it was a given answer. Some used equations for the car and trailer separately, often finding the tension from the trailer equation and using it in the car equation to find $R$.

Part (b) required the tension to be found. Either the car or the trailer equation could be used, and some did both just to confirm their answer. However, there was confusion evident in many attempts with either extra or incorrect terms included or the wrong mass in the '$ma$' term. Some even included weight terms which were not relevant since the motion was horizontal.

Few scored the mark in part (c). Although often a correct equation was used to find $a = 5/6$ or $a = -5/6$, it was not always made explicitly clear that $5/6$ was the deceleration.

Those who had achieved few marks in the previous parts of the question were sometimes able to use a correct suvat method in part (d) to find the distance travelled by the trailer once the tow bar had broken. Occasionally the acceleration from before the break was used but generally this was well done with the correct numerical value obtained. The question required the value of '$d$' so some indication was expected that the calculated distance was actually $d$.

In part (e), it was fairly rare to see two acceptable correct reasons for why the distance was likely to be different from that calculated. Many scored one mark for 'resistance unlikely to be constant' or 'deceleration not constant'; however, these are not independent factors, so they were not credited as different reasons. Other common correct responses included that the mass of the broken tow bar was not considered, and the trailer would be unbalanced. The most common incorrect responses involved claiming that the model did not consider friction or air resistance. Also, some explanations included the car whereas this part was specifically about the trailer. It should be remembered that two reasons were asked for and if a candidate listed more than two then incorrect extra answers were penalised.
