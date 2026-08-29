---
topic: "Equations and Inequalities"
subtopic: "Quadratic inequalities"
---
### **Question 1**

**(a)** Use algebra to determine the values of $x$ for which
$$\frac{5x}{x-2} \ge 12$$ **(4)**

**(b)** Hence, given that $x$ is an integer, deduce the value of $x$. **(1)**

**(Total for Question 1 is 5 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Multiply by $(x-2)^2$**
$$\frac{5x(x-2)^2}{x-2} \ge 12(x-2)^2 \Rightarrow 5x(x-2) \ge 12(x-2)^2$$
- **[M1]** Multiplies by $(x-2)^2$ (or equivalent valid method to clear the denominator).

**Step 2: Expand and form a quadratic inequality**
$$5x^2 - 10x \ge 12(x^2 - 4x + 4) \Rightarrow 5x^2 - 10x \ge 12x^2 - 48x + 48 \Rightarrow 7x^2 - 38x + 48 \le 0$$
- **[A1]** Correct quadratic inequality.

**Step 3: Find critical values**
$$(7x - 24)(x - 2) = 0 \Rightarrow x = \frac{24}{7}, \, x = 2$$
- **[M1]** Solves the quadratic to find critical values.

**Step 4: State the range**
$$2 < x \le \frac{24}{7}$$
- **[A1]** Correct inequality range with strict inequality at $2$ (accept $x > 2$ and $x \le \frac{24}{7}$).

#### **Part (b)**

**Step 5: Deduce the integer value**
$$x = 3$$
- **[B1]** Correct integer value.

### **Examiner Report 1**

With full marks achieved by well over one third of students, this question provided a reassuring start to the paper for many. However, part (b) was not well understood, and so full marks was relatively uncommon.

Part (a) was well answered by the vast majority, with mainly slips in the inclusion or not of boundary values in the solution preventing full marks from this part for many. Most were able to achieve the correct critical values, though there were occasional slips or miscopies, e.g. from omitting the $x$ to obtain $5(x-2)$ when multiplying by $(x-2)^2$, or incorrect multiplying out to give $5x^2 - 10$. Multiplication through by $(x-2)^2$ was the most common of the methods to find the critical values, though the other approaches were also seen frequently. Most students solved the quadratic (if one was found) correctly, but a few who factorised gave the value as $\frac{7}{24}$ rather than $\frac{24}{7}$. There were also some sign errors at this stage. A few assumed that the critical values needed to be integers so tried rounding.

As noted, the biggest problem in this part was the inequality at the end, with many students failing to give a strict inequality at the lower end of the range – even if they had said $x \neq 2$ in their response. Only a small number of students made the error of selecting the outside ranges as their solution.

For part (b) there seemed to be some difficulty in picking out an integer value within the range; a large number of students seemed to think they needed a critical value in part (b), so there were responses like $x \neq 2$ so $x = \frac{24}{7}$, or $x = 2$ because $\frac{24}{7}$ is not an integer. What should have been a routine task seem instead to confuse many, who did not realise, for one reason or another, what was being asked.

---
topic: "Trigonometry and Modelling"
subtopic: "Simplifying a cos x ± b sin x"
---
### **Question 2**

**(a)** Use the substitution $t = \tan\left(\frac{x}{2}\right)$ to show that the equation
$$3\cos x - 2\sin x = 1$$
can be written in the form
$$2t^2 + 2t - 1 = 0$$ **(3)**

**(b)** Hence solve, for $-180^\circ < x < 180^\circ$, the equation
$$3\cos x - 2\sin x = 1$$
giving your answers to one decimal place. **(4)**

**(Total for Question 2 is 7 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Substitute standard trigonometric identities**
Using $\cos x = \frac{1 - t^2}{1 + t^2}$ and $\sin x = \frac{2t}{1 + t^2}$:
$$3\left(\frac{1 - t^2}{1 + t^2}\right) - 2\left(\frac{2t}{1 + t^2}\right) = 1$$
- **[M1]** Correct use of both $t$-formulae for $\cos x$ and $\sin x$.

**Step 2: Clear denominators and simplify**
$$3(1 - t^2) - 4t = 1 + t^2$$
$$3 - 3t^2 - 4t = 1 + t^2 \Rightarrow 4t^2 + 4t - 2 = 0$$
- **[M1]** Multiplies through by $(1 + t^2)$ and collects terms to form a quadratic equation in $t$.

**Step 3: Obtain the required form**
$$2t^2 + 2t - 1 = 0$$
- **[A1]** Fully correct proof leading to the given equation.

#### **Part (b)**

**Step 4: Solve the quadratic for $t$**
$$t = \frac{-2 \pm \sqrt{2^2 - 4(2)(-1)}}{2(2)} = \frac{-2 \pm \sqrt{12}}{4} = \frac{-1 \pm \sqrt{3}}{2}$$
$$t \approx 0.3660,\quad t \approx -1.3660$$
- **[M1]** Solves the quadratic equation to find values for $t$.

**Step 5: Find values for $x/2$**
$$\frac{x}{2} = \arctan\left(\frac{-1 + \sqrt{3}}{2}\right) = 20.103^\circ, \dots$$
$$\frac{x}{2} = \arctan\left(\frac{-1 - \sqrt{3}}{2}\right) = -53.799^\circ, \, 126.20^\circ \dots$$
- **[M1]** Applies $\arctan$ correctly to find values of $\frac{x}{2}$ within the range $-90^\circ < \frac{x}{2} < 90^\circ$ (and considers other solutions in range).

**Step 6: Double the angles to find $x$**
$$x = 40.2^\circ, \quad x = -107.6^\circ, \quad x = 252.4^\circ \text{ (outside range)}$$
- **[A1]** At least two correct values of $x$.

**Step 7: Final filtered solutions**
$$x = 40.2^\circ, \quad x = -107.6^\circ$$
- **[A1]** Both solutions correct to one decimal place with no extra or missing solutions within the range.

### **Examiner Report 2**

An expected and well-rehearsed topic, many had little trouble answering the whole question, and showing good accuracy throughout.

In part (a) the majority of responses were fully correct, with the correct $t$-formulae well known, only a very small number had a wrong formula for one or the other. Occasional inaccuracies, with an error in some steps of working, meant the final accuracy mark in the part was lost, but generally the manipulation required to reach the given quadratic was done well. That the quadratic was given was a great help as a guide to confirm work as well as giving access into part (b) where a slip may otherwise have not been detected.

For part (b), solving the quadratic correctly posed little problem for the most part, with just a few sign errors. Method was not always shown, the mark was implied by correct solutions, and evidence of students reliance on calculators to solve quadratics was shown, and very few attempted factorisation approaches.

Most students went on to apply arctan to their solutions and remembered to double their angles to give the final answer, but some forgot, and some halved them instead, causing the loss of the last three marks. There were also a few who tried $x = \arctan(2t)$.

The main loss of marks came at the end, where some either had their calculator in the wrong mode or failed to carry out the process correctly having shown the correct method, such as sign errors (getting the negatives of one or both answers). Another common error was the inclusion of additional solutions, e.g. from substituting the values of $t$ back into formulae for either $\sin$ or $\cos$ and generating extras, or invalid solutions arising from attempts at e.g. $x \pm 180^\circ$.

Nearly all gave their answers to the required accuracy. But the final accuracy was occasionally lost by those rounding to an incorrect number of decimal places, e.g. given to 3 significant figures instead of the required 3 decimal places. Careful checking of instructions in the question should be advised.

---
topic: "Circles"
subtopic: "Equation of a circle"
---
### **Question 3**

The rectangular hyperbola $H$ has equation $xy = c^2$ where $c$ is a positive constant.
The line $l$ has equation $x - 2y = c$
The points $P$ and $Q$ are the points of intersection of $H$ and $l$

**(a)** Determine, in terms of $c$, the coordinates of $P$ and the coordinates of $Q$. **(3)**

The point $R$ is the midpoint of $PQ$

**(b)** Show that, as $c$ varies, the coordinates of $R$ satisfy the equation
$$xy = -\frac{c^2}{a}$$
where $a$ is a constant to be determined. **(2)**

**(Total for Question 3 is 5 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Eliminate a variable to form a quadratic**
From $x = 2y + c$, substitute into $xy = c^2$:
$$(2y + c)y = c^2 \Rightarrow 2y^2 + cy - c^2 = 0$$
- **[M1]** Eliminates one variable to form a quadratic equation in the other variable.

**Step 2: Solve the quadratic for $y$**
$$(2y - c)(y + c) = 0 \Rightarrow y = \frac{1}{2}c, \, y = -c$$
- **[A1]** Correct $y$-coordinates (or correct $x$-coordinates if eliminating $y$).

**Step 3: Find corresponding coordinates for $P$ and $Q$**
If $y = \frac{1}{2}c$, $x = 2\left(\frac{1}{2}c\right) + c = 2c$. Point: $\left(2c, \frac{1}{2}c\right)$.
If $y = -c$, $x = 2(-c) + c = -c$. Point: $(-c, -c)$.
- **[A1]** Both points correctly stated as coordinates: $\left(2c, \frac{1}{2}c\right)$ and $(-c, -c)$ (order doesn't matter).

#### **Part (b)**

**Step 4: Find the midpoint coordinates $(X, Y)$**
$$X = \frac{2c + (-c)}{2} = \frac{1}{2}c, \quad Y = \frac{\frac{1}{2}c + (-c)}{2} = -\frac{1}{4}c$$
- **[M1]** Uses the midpoint formula with their intersection points.

**Step 5: Form the product $XY$ and eliminate $c$**
$$XY = \left(\frac{1}{2}c\right)\left(-\frac{1}{4}c\right) = -\frac{1}{8}c^2$$
Rearranging gives $xy = -\frac{c^2}{8}$, so $a = 8$.
- **[A1]** Fully correct derivation showing $xy = -\frac{c^2}{8}$ (or equivalent with $a = 8$).

### **Examiner Report 3**

The first of the two coordinate geometry questions on the paper, both of which provided a good challenge for students. This question did prove to be a good discriminator for the paper, with on the whole only the higher levels of candidates able to produce fully correct solutions.

For part (a) many students recognised that they needed to eliminate a variable, mostly commonly eliminating $x$ to get a quadratic in $y$. Though they often obtained a suitable quadratic but then did not always see what to do with it. It was quite common to see 2 or 3 quadratics in different combinations of variables before they (sometimes) proceeded to solve one of them. Several students eliminated $c$ to obtain a 3 term quadratic in $x$ and $y$, and some successfully combined their solution with one of the original equations, but others gave up at that point and made no further progress with the question.

A few students had mostly correct work but gave the $x$ and $y$ coordinates the wrong way round, while various errors in manipulation or slips in algebra prevented many from achieving the coordinates successfully.

Part (b) was often omitted, even when a correct answer to part (a) had been obtained. The method for finding the midpoint was less well attempted than might have been expected, with a number halving the difference rather than the sum of the coordinates. This may have been due to the negative coordinates in $(-c, -c)$, but with no formula stated for the most cases, an incorrect method was assumed. Stating formulae before using them is advisable.

When successfully showing the result, many students made their substitution into $xy$ explicit and clear, earning the final mark, but there were also many attempts that made no reference to the $xy$ at all, and so lost the final A mark. Some confused their answer with the original equation, equating their $xy$ to $c^2$ with some erroneous statement such as $c^2 = -\frac{c^2}{8}$ being given, again losing the final accuracy.

It was possible to get the correct midpoint and locus from incorrect work, since common errors in solving their quadratics did not affect the "sum of roots" hence the midpoint could be fortuitously correct. They also got a correct locus from incorrect work if they had written the coordinates the wrong way round. Such attempts were not permitted recovery, the correct midpoint was required to have been found for the final accuracy to be awarded.

---
topic: "Numerical Methods"
subtopic: "Iteration"
---
### **Question 4**

A teacher made a cup of coffee. The temperature $\theta\,^\circ\text{C}$ of the coffee, $t$ minutes after it was made, is modelled by the differential equation
$$\frac{d\theta}{dt} + 0.05(\theta - 20) = 0$$

Given that
- the initial temperature of the coffee was $95\,^\circ\text{C}$
- the coffee can only be safely drunk when its temperature is below $70\,^\circ\text{C}$
- the teacher made the cup of coffee at $1.15\text{ pm}$
- the teacher needs to be able to start drinking the coffee by $1.20\text{ pm}$

use two iterations of the approximation formula
$$\left(\frac{dy}{dx}\right)_n \approx \frac{y_{n+1} - y_n}{h}$$
to estimate whether the teacher will be able to start drinking the coffee at $1.20\text{ pm}$. **(6)**

**(Total for Question 4 is 6 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Express $\frac{d\theta}{dt}$ in terms of $\theta$**
$$\frac{d\theta}{dt} = -0.05(\theta - 20)$$
- **[B1]** Correct expression for $\frac{d\theta}{dt}$.

**Step 2: Identify initial conditions and step size $h$**
When $t_0 = 0$, $\theta_0 = 95$.
Time interval from $1.15\text{ pm}$ to $1.20\text{ pm}$ is $5$ minutes.
Using 2 iterations means step size $h = \frac{5}{2} = 2.5$ (or $h = \frac{1}{12}$ if working in hours).
- **[B1]** Correct step size $h = 2.5$ (or equivalent).

**Step 3: First iteration ($n = 0$)**
$$\left(\frac{d\theta}{dt}\right)_0 = -0.05(95 - 20) = -0.05(75) = -3.75$$
$$\frac{\theta_1 - 95}{2.5} \approx -3.75 \Rightarrow \theta_1 - 95 = -9.375 \Rightarrow \theta_1 = 85.625$$
- **[M1]** Uses the approximation formula to find $\theta_1$.
- **[A1]** Correct value for $\theta_1 = 85.625$.

**Step 4: Second iteration ($n = 1$)**
$$\left(\frac{d\theta}{dt}\right)_1 = -0.05(85.625 - 20) = -0.05(65.625) = -3.28125$$
$$\frac{\theta_2 - 85.625}{2.5} \approx -3.28125 \Rightarrow \theta_2 - 85.625 = -8.203125 \Rightarrow \theta_2 \approx 77.4$$
- **[M1]** Uses the approximation formula a second time to find $\theta_2$.
- **[A1]** Correct value for $\theta_2 \approx 77.4$ (or $77.42$) and makes a valid conclusion that since $\theta_2 > 70$, the teacher cannot start drinking at $1.20\text{ pm}$.

### **Examiner Report 4**

This was another question on another well-rehearsed topic which provided a good source of marks across all grades of student.

Although the question was very well answered by most students, there were varying degrees of clarity in their processes. The method was clearly well understood, and its application carried out well. The place where students most commonly lost a mark was with the final conclusion, which was often missing an explicit comparison to justify the answer. Also common by way of error losing just one mark was the final A mark being lost due to calculation error during the process, but the follow through final mark was often gained in such instances. Where responses were incorrect other than calculation error, this was usually a right method but with an incorrect value from the set up - usually $h$, where time was considered as a duration going from $1:15$ to $1:20$ rather than a clock time going from $1:15$ to $1:20$ giving $h = 0.025$. Others worked in hours so had $h = \frac{1}{24}$, and a few used $h = 2.5$ for the first iteration then $h = 5$ for the second.

A few also failed to recalculate the value of $\frac{d\theta}{dt}$ for the second iteration, using the same value for both.

---
topic: "Vectors"
subtopic: "Vector product"
---
### **Question 5**

The points $A$, $B$ and $C$ are the vertices of a triangle.

Given that
- $\overrightarrow{AB} = \begin{pmatrix} p \\ 4 \\ 6 \end{pmatrix}$ and $\overrightarrow{AC} = \begin{pmatrix} q \\ 4 \\ 5 \end{pmatrix}$ where $p$ and $q$ are constants
- $\overrightarrow{AB} \times \overrightarrow{AC}$ is parallel to $2\mathbf{i} + 3\mathbf{j} + 4\mathbf{k}$

**(a)** determine the value of $p$ and the value of $q$. **(7)**

**(b)** Hence, determine the exact area of triangle $A B C$. **(2)**

**(Total for Question 5 is 9 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Calculate the cross product $\overrightarrow{AB} \times \overrightarrow{AC}$**
$$\overrightarrow{AB} \times \overrightarrow{AC} = \begin{pmatrix} 4 & p \\ 5 & 4 \end{pmatrix}\mathbf{i} - \begin{pmatrix} 6 & p \\ 5 & q \end{pmatrix}\mathbf{j} + \begin{pmatrix} 6 & 4 \\ 4 & q \end{pmatrix}\mathbf{k}$$
$$= (20 - 24)\mathbf{i} - (30 - 5q)\mathbf{j} + (24 - 4q)\mathbf{k}$$
$$= -4\mathbf{i} + (5q - 30)\mathbf{j} + (24 - 4q)\mathbf{k}$$
*(Note: terms in $p$ vanish from the cross product because of the second component evaluation or direct expansion)*
Let's re-expand carefully:
$$\begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ p & 4 & 6 \\ q & 4 & 5 \end{vmatrix} = \mathbf{i}(20 - 24) - \mathbf{j}(5p - 6q) + \mathbf{k}(4p - 4q)$$
Wait, recalculating $\mathbf{j}$ component:
$\text{det}\begin{pmatrix} p & 6 \\ q & 5 \end{pmatrix} = 5p - 6q$? No:
$\mathbf{i}(4\times 5 - 6\times 4) = 20 - 24 = -4$.
$-\mathbf{j}(p\times 5 - 6\times q) = -(5p - 6q) = 6q - 5p$.
$\mathbf{k}(p\times 4 - 4\times q) = 4p - 4q$.
So $\overrightarrow{AB} \times \overrightarrow{AC} = -4\mathbf{i} + (6q - 5p)\mathbf{j} + (4p - 4q)\mathbf{k}$.
- **[M1]** Attempts to find the vector product $\overrightarrow{AB} \times \overrightarrow{AC}$.
- **[A1]** Correct expression for $\overrightarrow{AB} \times \overrightarrow{AC}$.

**Step 2: Use the parallelism condition**
Since $\overrightarrow{AB} \times \overrightarrow{AC}$ is parallel to $2\mathbf{i} + 3\mathbf{j} + 4\mathbf{k}$, there exists a scalar $\lambda$ such that:
$$-4 = 2\lambda \implies \lambda = -2$$
- **[M1]** Equates components using a scalar multiple $\lambda$.

**Step 3: Solve for $p$ and $q$**
Using $\lambda = -2$:
$$6q - 5p = 3\lambda = 3(-2) = -6$$
$$4p - 4q = 4\lambda = 4(-2) = -8$$
From $4p - 4q = -8 \implies p - q = -2 \implies p = q - 2$.
Substitute into $6q - 5(q - 2) = -6$:
$$6q - 5q + 10 = -6 \implies q + 10 = -6 \implies q = -16$$
Then $p = -16 - 2 = -18$.
- **[M1]** Sets up simultaneous equations for $p$ and $q$.
- **[A1]** Correct value for $q$ ($q = -16$).
- **[A1]** Correct value for $p$ ($p = -18$).

#### **Part (b)**

**Step 4: Find the vector product using the found values or scalar multiple**
$$\overrightarrow{AB} \times \overrightarrow{AC} = -2(2\mathbf{i} + 3\mathbf{j} + 4\mathbf{k}) = -4\mathbf{i} - 6\mathbf{j} - 8\mathbf{k}$$
- **[M1]** Uses the vector product to find its magnitude.

**Step 5: Calculate the area of triangle $ABC$**
$$\text{Area} = \frac{1}{2}|\overrightarrow{AB} \times \overrightarrow{AC}| = \frac{1}{2}\sqrt{(-4)^2 + (-6)^2 + (-8)^2} = \frac{1}{2}\sqrt{16 + 36 + 64} = \frac{1}{2}\sqrt{116} = \sqrt{29}$$
- **[A1]** Correct exact area $\sqrt{29}$.

### **Examiner Report 5**

This proved to be a very accessible question on the unloved topic of vectors, with over half achieving the full marks, but a mixed performance among those who did not achieve the maximum score.

The mark scheme in part (a) was particularly fair, especially given the very quick alternative method using two scalar products, though only very few students spotted the quicker approach. Most saw the question was about cross products and so proceeded to find the cross product of the vectors on automatic pilot. A few very astute students did consider the definition of the cross product being a vector perpendicular to both given vectors and so solved the two equations from setting the scalar product to zero, picking up the marks very straightforwardly. However, these then had to evaluate the cross product (or use a more long winded approach, but no such was recorded as seen) to compute the area in part (b), so the question overall still had as much demand.

The majority of students made a good attempt at the vector product, usually correct although sign errors were common, especially on the $\mathbf{j}$ component. For some of the lower grade students this was all they managed in the question, scoring either 1 or 2 marks, but the majority were able to progress further into the question.

Most, however, understood the correct strategy required and equated their cross product to $\lambda(2\mathbf{i} + 3\mathbf{j} + 4\mathbf{k})$, although some used $\lambda = 1$ and so made no further progress. Sorting out the correct multiple did create problems for some, with minus sign sometimes missing and/or the position of the 2 sometime being incorrect placed (equating $\mathbf{j}$ and $\mathbf{k}$ components to $\pm\frac{3}{2}$ and $\pm 2$ respectively) or other such slips. These were still able to form and solve simultaneous equations, though not always correctly with sign errors again being common, but as long as values were reached they could access the method marks.

A few students attempted the approach of taking the vector product of their $\overrightarrow{AB} \times \overrightarrow{AC}$ with $(2\mathbf{i} + 3\mathbf{j} + 4\mathbf{k})$, and some of these formed simultaneous equations by equating the components to zero. Such methods were less well carried out overall, often losing accuracy along the way.

One fairly common incorrect approach was to form the scalar product of the two given vectors and put it equal to either zero or one, before making no further progress. Another noted error was misreading the question to set the cross product equal to the given vector rather than parallel to it.

In part (b) most students knew how to find the area of the triangle, and were often able to recover these marks despite errors in part (a), by using the given vector and a correct scale factor. Use of a clearly incorrect vector, e.g. with a sign error in one component, would lead to the correct answer, but was penalised in the accuracy mark, though if no incorrect vector was seen benefit of doubt was awarded in such cases. In a small number, an incorrect approach to finding the modulus of the vector was seen, usually just adding the components rather than using the Pythagoras identity, while in others a neglect to divide the result of the modulus of the cross product by 2 lost either one or both marks depending on if the formula had been initially quoted or not.

---
topic: "Differentiation"
subtopic: "Gradients, tangents and normal"
---
### **Question 6**

The parabola $C$ has equation $y^2 = 4ax$ where $a$ is a positive constant.
The point $P(at^2, 2at)$, $t \neq 0$, lies on $C$.

The normal to $C$ at $P$ is parallel to the line with equation $y = 2x$.

**(a)** For the point $P$, show that $t = -2$. **(3)**

The normal to $C$ at $P$ intersects $C$ again when $x = 9$.

**(b)** Determine the value of $a$, giving a reason for your answer. **(5)**

**(Total for Question 6 is 8 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Find the derivative $\frac{dy}{dx}$**
Differentiating implicitly:
$$2y\frac{dy}{dx} = 4a \implies \frac{dy}{dx} = \frac{4a}{2y} = \frac{2a}{y}$$
- **[M1]** Attempts differentiation (implicit or parametric) to find $\frac{dy}{dx}$.

**Step 2: Find the gradient of the normal**
At point $P(at^2, 2at)$, substitute $y = 2at$:
$$\text{Gradient of tangent} = \frac{2a}{2at} = \frac{1}{t}$$
$$\text{Gradient of normal} = -t$$
- **[A1]** Correct gradient of the normal in terms of $t$.

**Step 3: Equate to the given normal gradient and solve**
Since the normal is parallel to $y = 2x$, its gradient is $2$:
$$-t = 2 \implies t = -2$$
- **[A1]** Concludes $t = -2$ correctly with clear working.

#### **Part (b)**

**Step 4: Find the coordinates of $P$**
Using $t = -2$:
$$P = (a(-2)^2, 2a(-2)) = (4a, -4a)$$
- **[B1]** Correct coordinates of $P$ in terms of $a$.

**Step 5: Form the equation of the normal at $P$**
Using gradient $m = 2$ and point $(4a, -4a)$:
$$y - (-4a) = 2(x - 4a) \implies y + 4a = 2x - 8a \implies y = 2x - 12a$$
- **[M1]** Correctly uses the point and gradient to write the equation of the normal.

**Step 6: Find the intersection with the parabola $C$ at $x = 9$**
Substitute $x = 9$ into the normal equation:
$$y = 2(9) - 12a = 18 - 12a$$
Substitute $x = 9$ and $y = 18 - 12a$ into the parabola equation $y^2 = 4ax$:
$$(18 - 12a)^2 = 4a(9) = 36a$$
- **[M1]** Substitutes $x = 9$ and the normal equation into $y^2 = 4ax$ to form an equation in $a$.

**Step 7: Solve for $a$**
$$324 - 432a + 144a^2 = 36a \implies 144a^2 - 468a + 324 = 0$$
Dividing by $36$:
$$4a^2 - 13a + 9 = 0$$
$$(4a - 9)(a - 1) = 0 \implies a = 1, \, a = \frac{9}{4}$$
- **[A1]** Correct quadratic equation and solutions for $a$.

**Step 8: Select the correct value for $a$**
Since $P$ has $x$-coordinate $4a$ and the normal intersects the parabola again at $x = 9$, and looking at the sketch/geometry, $a = 1$ (or reasoning about the point of intersection not being $P$).
Wait, if $a = \frac{9}{4}$, $x$-coordinate of $P$ is $4\left(\frac{9}{4}\right) = 9$, which means $P$ is the point of intersection itself, but $P$ is where the normal is drawn, so $a \neq \frac{9}{4}$ (or $a = 1$ since $a = \frac{9}{4}$ gives $x_P = 9$, but $P$ is distinct from the second intersection point).
- **[A1]** Selects $a = 1$ with a valid reason (e.g. $a = \frac{9}{4}$ gives $x = 9$ at $P$, which is the intersection point itself, not a distinct second point).

### **Examiner Report 6**

This proved a good challenge to end the paper, befitting the final question on the paper. Timing did not seem to be the issue with the question and the majority made some attempt at it, but it was clear that lower grade students were not able to work out the geometry of the situation to identify a suitable strategy.

In part (a) the result for the derivative $\frac{dy}{dx} = \frac{2a}{y}$ was not given on the paper this year, with students expected to be able to work out an approach to the derivative themselves, and this did actually prove to be the first difficulty of the question. Though higher grade students were able to do this, usually via $y = 2\sqrt{ax}$, lower grade students struggle to find any traction in the question, instead attempting various equations for the tangent using the gradient 2, but never showing any calculus to establish the result. These would usually then make no further progress with the question, even though the given value for $t$ gave access to part (b).

Students who had knowledge of either parametric or implicit approaches to the derivative were much better equipped to get started on the problem, and those who formed a correct derivative statement from any of the approaches were generally successful in showing the result in part (a). However, some were quite inefficient about it, finding the equation of the normal in parametric form before picking out the gradient and a number of such students ended up going awry in such approaches.

Part (b) did prove to be quite discriminating, with many students unable to unravel the information given in the question to produce a correct approach. A common error was to use $y = 2x$ as the normal, rather than a parallel line, many seeing the $-2$ from part (a) and thinking this was the gradient needed for (b). Use of $-\frac{1}{2}$ as the gradients was also noted in a few cases.

There were a few different approaches possible for (b), though the most prevalent was the main scheme approach. All of the approaches were considerably simpler by early substitution of values of $t$ to find $P$ in terms of $a$, and of $x = 9$ for the second point, but many worked in more general terms and often got stuck in complicated polynomials involving $a$, $t$ and $x$ with errors in expansion of brackets and/or signs. Few of these succeeded in reaching a correct value for $a$. Of those who did take the direct approach, substituting the values, a considerable number obtained the equation of the normal correctly in the form $y + 4a = 2(x - 4a)$, but did not simplify this correctly so got the wrong quadratic.

The method of solving equations simultaneously was demonstrated by most (albeit with an incorrect equation for the normal in many cases) and so the two method marks were often gained, and where a correct normal had been achieved correct values for $a$ usually followed.

Justifying which solution of their quadratic to use was often unclear, though, meaning the final mark was difficult to attain. In particular for those who found $\sqrt{a}$, they often argued that $\sqrt{a} \neq -1.5$ "because you cannot square root a negative number", as opposed to the square root function not giving negative results, getting the argument back to front. Various other unclear attempts at explaining which root was needed were offered, with mixed success in actually choosing the correct one out of $1$ and $\frac{9}{4}$. Some sketched the parabola, which proved helpful as they were able to deduce the required value based on the location of the intersection, although some of the sketches were actually of a hyperbola, not a parabola.
