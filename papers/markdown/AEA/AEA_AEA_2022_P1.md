---
topic: "Differentiation"
subtopic: "Differentiating exponentials and logarithms"
---
### **Question 1**

$$\text{f}(x) = x^{(x^2)} \quad x > 0$$

Use logarithms to find the $x$ coordinate of the stationary point of the curve with equation $y = \text{f}(x)$.

**(5)**

**(Total 5 marks)**

### **Mark Scheme 1**

**Step 1: Express function in logarithmic form** Writes $\text{f}(x) = \text{e}^{x^2 \ln x}$ or $y = x^{(x^2)} \Rightarrow \ln y = x^2 \ln x$

- **[B1]** Applies $\ln$ (or $\log$) in an appropriate manner.

**Step 2: Differentiate applying product rule**

$$\text{f}'(x) = \left(2x \ln x + \frac{x^2}{x}\right)\text{e}^{x^2 \ln x} \quad \text{or} \quad \frac{1}{y}\frac{\text{d}y}{\text{d}x} = 2x \ln x + \frac{x^2}{x}$$

- **[M1]** Differentiates $x^2 \ln x$ applying the product rule.
- **[A1]** Fully correct differentiated expression (both sides) and must be in base $\text{e}$, though allow recovery from "$\log$" if base $\text{e}$ is implied later.

**Step 3: Set derivative to zero and solve for $x$**

$$\text{f}'(x) = 0 \Rightarrow 2x \ln x + x = 0 \Rightarrow \ln x = -\frac{1}{2} \Rightarrow x = \dots$$

- **[dM1]** Sets $\text{f}'(x)$ or $\frac{\text{d}y}{\text{d}x} = 0$ and solves for $x$ (allow any base).

**Step 4: Obtain exact $x$-coordinate**

$$x = \frac{1}{\sqrt{\text{e}}}$$

- **[A1]** Correct answer. Accept answers from a correct attempt at differentiating $x^2 \ln x$ even if the "$\frac{1}{y}$" was incorrect. Ignore reference to $x = 0$.

### **Examiner Report 1**

The opening question on differentiation saw good scoring for the majority of students with full marks being widely awarded and was by far the most successfully answered question on the paper. However, about a fifth of students did not see how to use logarithms to get started and invariably scored no marks. They presumably had not met logarithmic differentiation or did not know the derivation of $\text{f}'(x)\text{e}^{\text{f}(x)}$ from $\text{e}^{\text{f}(x)}$ or failed to connect such with the given function, with $x^2 \text{e}^{x^2-1}$ or something similar sometimes seen, a mistake that is quite poor for this paper.

Most chose to take natural logarithms of both sides and the subsequent application of the product rule was almost always correct. A small number lost accuracy marks by using logarithms to the base 10. Those that completed the differentiation correctly almost always proceeded to the required $x$ coordinate of the stationary point, while a few incorrectly confused range and domain stating that $\ln x = -\frac{1}{2}$ has no solution as $\ln(x) > 0$.

Some worked out both coordinates, not having paid careful enough attention to the question.

---
topic: "Vectors"
subtopic: "Application to mechanics"
---
### **Question 2**

**Figure 1** _(A regular hexagon $OPQRST$ with vectors $\mathbf{p} = \vec{OP}$ and $\mathbf{q} = \vec{OQ}$ labelled.)_

Figure 1 shows a regular hexagon $OPQRST$.

The vectors $\mathbf{p}$ and $\mathbf{q}$ are defined by $\mathbf{p} = \vec{OP}$ and $\mathbf{q} = \vec{OQ}$

Forces, in Newtons, $\mathbf{F}_P = (\vec{OP})$, $\mathbf{F}_Q = 2 \times (\vec{OQ})$, $\mathbf{F}_R = 3 \times (\vec{OR})$, $\mathbf{F}_S = 4 \times (\vec{OS})$ and $\mathbf{F}_T = 5 \times (\vec{OT})$ are applied to a particle.

**(a)** Find, in terms of $\mathbf{p}$ and $\mathbf{q}$, the resultant force on the particle. **(5)**

The magnitude of the acceleration of the particle due to these forces is $13\text{ m}\,\text{s}^{-2}$

Given that the mass of the particle is $3\text{ kg}$,

**(b)** find $|\mathbf{p}|$ **(5)**

**(Total 10 marks)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Express position vectors in terms of $\mathbf{p}$ and $\mathbf{q}$** Centre point is $\vec{PQ} = \vec{OQ} - \vec{OP}$, so

$$\vec{OR} = 2 \times (\vec{OQ} - \vec{OP}) = 2(\mathbf{q} - \mathbf{p})$$

$$\vec{OS} = \vec{OQ} - 2\vec{OP} + \vec{PQ} = 2\mathbf{q} - 3\mathbf{p}$$

$$\vec{OT} = \mathbf{q} - 2\mathbf{p}$$

- **[M1]** Attempts to find at least one of the other vectors in terms of $\mathbf{p}$ and $\mathbf{q}$ with at least one correct expression for a key vector.
- **[A1]** Two correct expressions: $\vec{OR} = 2(\mathbf{q} - \mathbf{p})$, $\vec{OS} = 2\mathbf{q} - 3\mathbf{p}$, or $\vec{OT} = \mathbf{q} - 2\mathbf{p}$.
- **[A1]** All three correct.

**Step 2: Sum the forces**

$$\mathbf{R} = \mathbf{p} + 2\mathbf{q} + 3 \times 2(\mathbf{q} - \mathbf{p}) + 4(2\mathbf{q} - 3\mathbf{p}) + 5(\mathbf{q} - 2\mathbf{p})$$

- **[M1]** Attempts the sum using their expressions with at least one force involving both $\mathbf{p}$ and $\mathbf{q}$.

**Step 3: Simplify the resultant force**

$$\mathbf{R} = -27\mathbf{p} + 21\mathbf{q}$$

- **[A1]** Correct answer.

#### **Part (b)**

**Step 4: Formulate strategy for magnitude** E.g. $\mathbf{R} = 21(\mathbf{q} - \mathbf{p}) - 6\mathbf{p}$ and $\mathbf{q} - \mathbf{p}$ and $\mathbf{p}$ have same length, $p$ say (regular hexagon sides), with angle $60^\circ$ between them.

- **[M1]** Formulates a correct strategy — may be other ways, e.g. finding length of $\mathbf{q}$ relative to $\mathbf{p}$ first.

**Step 5: Apply cosine rule**

$$|\mathbf{R}|^2 = (6p)^2 + (21p)^2 - 2(6p)(21p)\cos 60^\circ$$

$$|\mathbf{R}|^2 = (3p)^2(2^2 + 7^2 - 2 \times 7) = (3p)^2 \times 39$$

- **[M1]** Applies cosine rule to appropriate triangle.

**Step 6: Simplify $|\mathbf{R}|$**

$$|\mathbf{R}|^2 = 39(3p)^2 \quad \text{or} \quad |\mathbf{R}| = 3p\sqrt{39}$$

- **[A1]** Correct simplified magnitude or its square.

**Step 7: Apply Newton's second law**

$$|\mathbf{F}| = m|\mathbf{a}| \Rightarrow 3p\sqrt{39} = 3 \times 13 \Rightarrow p = \dots$$

- **[M1]** Applies $|\mathbf{F}| = m|\mathbf{a}|$ to find $p$. Must include attempt at modulus, not solving a linear equation.

**Step 8: State final value of $p$**

$$p = \frac{13}{\sqrt{39}} = \frac{\sqrt{39}}{3}$$

- **[A1]** Correct answer, allow either form.

### **Examiner Report 2**

This question on vectors in a mechanics context proved to be difficult and although some were able to attain all five marks in part (a), significant scoring in part (b) was quite rare. The modal score was 5 marks, attained by 23%, which essentially was a fully correct part (a) with no correct work in (b). Less than 10% were able to score full marks.

In part (a), many students could not see a way to obtain the required vectors in terms of $\mathbf{p}$ and $\mathbf{q}$. Those that put together a decent diagram usually found this to be beneficial. Students who could find the required vector expressions usually proceeded to the correct resultant force. However, many assumed that $\vec{OT}$ was equal to $\vec{PQ}$, not appreciating the directions are different, and many other similar misconceptions were made.

Success was very limited in part (b) although some were able to find the length of $\mathbf{q}$ relative to $\mathbf{p}$. The majority knew to use "$F=ma$" but few knew how to approach this as a modulus equation. Most could not see a way of translating the problem into one involving a single variable. The few that did identify that the cosine rule or an equivalent method was required often got beyond the first mark. Some attempts could only establish that the modulus of $\mathbf{R}$ was 39. Others assumed that $\mathbf{p}$ and $\mathbf{q}$ were perpendicular and merely attempted the magnitude of $a\mathbf{p} + b\mathbf{q}$. Some treated $\mathbf{p}$ and $\mathbf{q}$ as parallel and were not working with the moduli. It was common to see $|\mathbf{R}| = (-)27|\mathbf{p}| + 21|\mathbf{q}|$ or that $|\mathbf{R}|$ could be found from $\sqrt{27^2|\mathbf{p}|^2 + 21^2|\mathbf{q}|^2}$.

A few attempts at resolving were seen but were rarely successful with only a few able to express $\mathbf{q}$ in terms of $\mathbf{p}$ using unit perpendicular vectors. If they managed this successfully they went on to complete the question correctly.

---
topic: "Trigonometric Identities and Equations"
subtopic: "Equations and identities"
---
### **Question 3**

**(a)** Use the formulae for $\sin(A \pm B)$ and $\cos(A \pm B)$ to prove that $\tan(90^\circ - \theta) \equiv \cot\theta$ **(3)**

**(b)** Solve for $0 < \theta < 360^\circ$

$$2 - \sec^2(\theta + 11^\circ) = 2\tan(\theta + 11^\circ)\tan(\theta - 34^\circ)$$

Give each answer as an integer in degrees. **(8)**
**(+S1)**

**(Total 12 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Write tangent in terms of sine and cosine**

$$\tan(90^\circ - \theta) = \frac{\sin(90^\circ - \theta)}{\cos(90^\circ - \theta)}$$

- **[M1]** Writes in terms of $\sin$ and $\cos$.

**Step 2: Apply compound angle expansion formulae**

$$\frac{\sin 90^\circ \cos\theta - \cos 90^\circ \sin\theta}{\cos 90^\circ \cos\theta + \sin 90^\circ \sin\theta}$$

- **[M1]** Applies both formulae (must be correct signs).

**Step 3: Complete proof**

$$\frac{\cos\theta - 0}{0 + \sin\theta} = \frac{\cos\theta}{\sin\theta} = \cot\theta \quad *$$

- **[A1*]** Correct completion (S+ for anyone who investigates $k 180^\circ$).

#### **Part (b)**

**Step 4: Rearrange equation and apply trigonometric identity**

$$2 - (1 + \tan^2(\theta + 11^\circ)) = 2\tan(\theta + 11^\circ)\tan(\theta - 34^\circ)$$

$$\cot(\theta - 34^\circ) = \frac{2\tan(\theta + 11^\circ)}{2 - (1 + \tan^2(\theta + 11^\circ))}$$

- **[M1]** Applies either $\sec^2 x = 1 + \tan^2 x$ or rearranges to make $\cot(\theta - 34^\circ)$ the subject.

**Step 5: Apply double angle identity for tangent**

$$\cot(\theta - 34^\circ) = \frac{2\tan(\theta + 11^\circ)}{1 - \tan^2(\theta + 11^\circ)} = \tan(2(\theta + 11^\circ))$$

- **[M1]** Identifies $\tan 2t$ formula and replaces.

**Step 6: Relate tangent and cotangent using part (a)**

$$\tan(90^\circ - (\theta - 34^\circ)) = \tan(2\theta + 22^\circ)$$

- **[M1]** Uses result from part (a) appropriately.
- **[A1]** Correct equation: $124^\circ - \theta = 2\theta + 22^\circ + k 180^\circ$.

**Step 7: Solve for $\theta$**

$$3\theta = 102^\circ + k 180^\circ \Rightarrow \theta = 34^\circ + k 60^\circ$$

- **[dM1]** Solves for at least one value for $\theta$. (S+ for good explanation of additional roots).
- **[A1]** At least one correct value.
- **[A1]** At least 3 correct values.
- **[A1]** All correct answers and no others: $\theta = 34^\circ, 94^\circ, 154^\circ, 214^\circ, 274^\circ, 334^\circ$. Must be from correct work.

- **[S1]** Award S1 for a fully correct solution that is succinct but does not mention the S+ point, OR a solution scoring 9+ marks that may be laboured but includes the S+ point.

### **Examiner Report 3**

This trigonometric equation question saw good scoring in part (a) with full marks widely awarded. Progress was fairly limited in part (b) however, with most students unable to pick up on the clue that part (a) provided. The modal mark, by some way, was 4 out of 10, scored by 44%, being the three marks in (a) and first M in (b). Marks of 3 (from part (a)) and full mark were the next most common scores (11%).

In part (a) most were able to express $\tan$ in terms of $\sin$ and $\cos$ and use the correct compound angle formulae. Invariably correct completion was achieved with only a handful of slips seen which were usually sign errors. Only 1% scored no marks at all for the question, with 6% scoring fewer than 3.

A wide range of strategies were attempted in part (b) with varying degrees of success. The first mark was commonly scored, usually by correct application of $\sec^2 x = 1 + \tan^2 x$. However, most were unable to deduce that rearrangement of the equation could then allow the double angle formula for $\tan$ to be used followed by the result from part (a). Most success was seen via Way 2 where many students were able to use the double angle formulae for $\sin$ and $\cos$ to make progress but the significance of part (a) was not appreciated by many. Some did achieve a correct equation in $\theta$ and if so they generally applied $+k 180^\circ$ fully to achieve all six solutions, though some missed one or more out. Some attempts used Way 3 reaching both required linear equations in $\tan$, though some did overlook the $1 - \tan(\theta + 11^\circ) = 0$ partial solution, and then proceeding to find the correct solutions for the first equation. However, without a calculator to deal with the arctan of the surd it proved almost impossible to generate any solutions for the second equation. A few students with correct equations in $\theta$ succumbed to arithmetic errors. The S mark was scored by many who obtained at least 4 solutions, the method to find extra solutions being apparent in the work.

The major problem for many students in part (b) was the immediate desire to try and expand the $\tan$ terms using compound angles, which was always heading towards failure due to the values in the argument not being known non-calculator ratios. A step back and care of thought was needed, but many were not able to find a successful way through.

There were some astute students who spotted a useful substitution $\alpha = \theta + 11^\circ$ which had the effect of making the working more concise and easier to follow, allowing a compound angle formula to be used, usually with success, to produce a suitable equation.

---
topic: "Integration"
subtopic: "Integration by parts"
---
### **Question 4**

Given that $\text{f}(x) = \text{e}^{x^3 - 2x}$

**(a)** find $\text{f}'(x)$ **(2)**

The curves $C_1$ and $C_2$ are defined by the functions $g$ and $h$ respectively, where

$$g(x) = 8x^3 \text{e}^{x^3 - 2x} \quad x \in \mathbb{R}, x > 0$$

$$h(x) = (3x^5 + 4x)\text{e}^{x^3 - 2x} \quad x \in \mathbb{R}, x > 0$$

**(b)** Find the $x$ coordinates of the points of intersection of $C_1$ and $C_2$ **(4)**

Given that $C_1$ lies above $C_2$ between these points of intersection,

**(c)** find the area of the region bounded by the curves between these two points.

Give your answer in the form $A + B\text{e}^C$ where $A$, $B$, and $C$ are exact real numbers to be found. **(7)**
**(+S1)**

**(Total 14 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Differentiate using the chain rule**

$$\text{f}'(x) = (ax^2 + b)\text{e}^{x^3 - 2x}$$

- **[M1]** Valid attempt at chain rule. (Allow $b=0$).

**Step 2: State derivative**

$$\text{f}'(x) = (3x^2 - 2)\text{e}^{x^3 - 2x}$$

- **[A1]** Correct derivative.

#### **Part (b)**

**Step 3: Equate functions to find points of intersection**

$$g(x) = h(x) \Rightarrow 8x^3 \text{e}^{x^3 - 2x} = (3x^5 + 4x)\text{e}^{x^3 - 2x}$$

$$8x^3 = 3x^5 + 4x$$

- **[M1]** Equates and cancels or factorises out exponentials.

**Step 4: Factorise and solve equation**

$$3x^5 - 8x^3 + 4x = 0 \Rightarrow x(3x^4 - 8x^2 + 4) = 0 \Rightarrow x(3x^2 - 2)(x^2 - 2) = 0$$

- **[M1]** Factorises or equivalent. (May cancel the $x$).

**Step 5: Obtain $x$-coordinates for $x > 0$**

$$x = \sqrt{\frac{2}{3}} = \frac{\sqrt{6}}{3} \quad \text{or} \quad x = \sqrt{2}$$

- **[A1]** For one correct coordinate.
- **[A1]** For both correct coordinates. (S+ for reason for rejecting $x = 0$ and negative roots).

#### **Part (c)**

**Step 6: Set up integral for area**

$$\text{Area} = \int_{\alpha}^{\beta} (8x^3 - 3x^5 - 4x)\text{e}^{x^3 - 2x} \, \text{d}x$$

- **[M1]** Allow either way round (limits may not be included yet); functions must be combined.

**Step 7: Split integrand to match part (a)**

$$\text{Integral} = -\int (x^3 - 2x)(3x^2 - 2)\text{e}^{x^3 - 2x} \, \text{d}x$$

- **[M1]** Identifies appropriate parts split and applies integration by parts using $\text{f}'(x) = (3x^2 - 2)\text{e}^{x^3 - 2x}$.
- **[A1]** Correct application of integration by parts:

$$= -(x^3 - 2x)\text{e}^{x^3 - 2x} - \int -(3x^2 - 2)\text{e}^{x^3 - 2x} \, \text{d}x$$

**Step 8: Complete integration**

$$= \pm\left(-(x^3 - 2x)\text{e}^{x^3 - 2x} + \text{e}^{x^3 - 2x}\right) = \left[\text{e}^{x^3 - 2x} - (x^3 - 2x)\text{e}^{x^3 - 2x}\right]_{\frac{\sqrt{6}}{3}}^{\sqrt{2}}$$

- **[A1]** Correct result after second integral.

**Step 9: Substitute limits**

$$\left[\text{e}^{x^3 - 2x}(1 - x^3 + 2x)\right]_{\frac{\sqrt{6}}{3}}^{\sqrt{2}} = (1) - \left(1 - \frac{6\sqrt{6}}{27} + 2\frac{\sqrt{6}}{3}\right)\text{e}^{\frac{6\sqrt{6}}{27} - \frac{2\sqrt{6}}{3}}$$

- **[M1]** Applies their limits from part (b) either way round.

**Step 10: Simplify expressions**

$$= 1 - \left(1 + \frac{4\sqrt{6}}{9}\right)\text{e}^{-\frac{4\sqrt{6}}{9}}$$

- **[A1]** Simplifies at least one term correctly following a correct expression. Must be correct sign by this stage.

**Step 11: Final exact simplified form**

$$1 - \frac{(4\sqrt{6} + 9)}{9}\text{e}^{-\frac{4\sqrt{6}}{9}}$$

- **[A1]** Correct in a simplified form. (S+ if any reasoning for correct sign given).

- **[S1]** Award S1 for a fully correct solution that is succinct but does not mention any S+ points, OR a fully correct solution that may be laboured but includes an S+ point, OR a succinct solution that scores 10+ marks that includes at least one S+ point.

### **Examiner Report 4**

This question involving differentiation and integration by parts saw a reasonable amount of marks awarded for most although it was rare to see students able to apply parts appropriately in (c). The most common scores were 6 or 7 marks (parts (a) and (b) correct, and maybe the first mark in (c)) scored each by around 25% of students. Only about 30% scored more than this, usually scoring at least 12 marks if they did so.

In part (a) the overwhelming majority were able to score both marks and very few errors were seen, though some weak attempts were made by students clearly unprepared for the exam.

Scoring was also good in part (b) with almost all equating the curve equations and then obtaining and solving the correct quadratic in $x^2$, producing the correct limits required for the final part. Some good explanations on the reasons for rejecting the inadmissible solutions to the equation were seen and that allowed a small number who made suitable progress in (c) to pick up the S mark.

The first mark in part (c) was fairly widely awarded although those who attempted to use two integrals separately were unable to progress. Students may well have been taught to do the two areas separately in questions like this, but students should realise the AEA paper requires some problem solving and think to write the area as one integrand if separate integrals yield no solution, and look for the link back to part (a).

As is common throughout A-level mathematics, earlier parts of questions are often critical in giving students direction in later parts but only a few students appreciated the significance of part (a) to help identify the appropriate parts split required. The small number who used integration by substitution with $u = x^3 - 2x$ to get $\int u \text{e}^u \, \text{d}u$, which at this level should be a write-down integration, usually had some success. The main approach that led to successful solutions, though, saw students connect up parts (a) and (b) with part (c), starting with $\int (8x^3 - 3x^5 - 4x)\text{e}^{x^3 - 2x} \, \text{d}x$, factorising and then using integration by parts correctly with the result of (a). However, only the most able students were able to produce a correct simplified surd form for the final answer.

---
topic: "Vectors"
subtopic: "Modelling with vectors"
---
### **Question 5**

5. An aeroplane leaves a runway and moves with a constant speed of $V\text{ km/h}$ due north along a straight path inclined at an angle $\arctan\left(\frac{3}{4}\right)$ to the horizontal.

A light aircraft is moving due north in a straight horizontal line in the same vertical plane as the aeroplane, at a height of $3\text{ km}$ above the runway.

The light aircraft is travelling with a constant speed of $2V\text{ km/h}$.

At the moment the aeroplane leaves the runway, the light aircraft is at a horizontal distance $d\text{ km}$ behind the aeroplane.

Both aircraft continue to move with the same trajectories due north.

**(a)** Show that the distance, $D\text{ km}$, between the two aircraft $t$ hours after the aeroplane leaves the runway satisfies

$$D^2 = \left(\frac{6}{5}Vt - d\right)^2 + \left(\frac{3}{5}Vt - 3\right)^2$$

**(3)**

Given that the distance between the two aircraft is never less than $2\text{ km}$,

**(b)** find the range of possible values for $d$. **(7)**
**(+S1)**

**(Total 11 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Set up coordinate positions or vertical distance** Taking the point where the plane leaves the runway as the origin and forward as positive. Angle $\alpha = \arctan\left(\frac{3}{4}\right) \Rightarrow \sin\alpha = \frac{3}{5}, \cos\alpha = \frac{4}{5}$.
Vertical distance at time $t$ is:

$$h_v = Vt \sin\alpha - 3 = \frac{3}{5}Vt - 3$$

- **[B1]** Establishes correct vertical distance.

**Step 2: Determine horizontal distance between aircraft** Horizontal position of aeroplane: $Vt \cos\alpha = \frac{4}{5}Vt$.
Horizontal position of light aircraft: $2Vt - d$.
Horizontal distance:

$$h_h = (2Vt - d) - \frac{4}{5}Vt = \frac{6}{5}Vt - d$$

- **[M1]** Correct attempt at horizontal distance.

**Step 3: Complete proof for $D^2$** By Pythagoras' theorem:

$$D^2 = \left(\frac{6}{5}Vt - d\right)^2 + \left(\frac{3}{5}Vt - 3\right)^2 \quad *$$

- **[A1*]** Correct proof including correct trig ratios.

#### **Part (b)**

**Step 4: Set up distance inequality** Given $D \ge 2 \Rightarrow D^2 \ge 4$:

$$\left(\frac{6}{5}Vt - d\right)^2 + \left(\frac{3}{5}Vt - 3\right)^2 \ge 4$$

- **[M1]** Sets up inequality with their distance squared $\ge 4$.

**Step 5: Expand and form quadratic in $Vt$**

$$\frac{36}{25}(Vt)^2 - \frac{12}{5}dVt + d^2 + \frac{9}{25}(Vt)^2 - \frac{18}{5}Vt + 9 \ge 4$$

$$\frac{45}{25}(Vt)^2 - \frac{12d + 18}{5}Vt + d^2 + 5 \ge 0$$

$$\frac{9}{5}(Vt)^2 - \frac{6(2d + 3)}{5}Vt + d^2 + 5 \ge 0$$

- **[M1]** Expands and collects to a quadratic in $Vt$ or $t$.

**Step 6: Apply discriminant condition for no roots below threshold** For the quadratic $A(Vt)^2 + B(Vt) + C \ge 0$ to hold for all $t$, we require discriminant $B^2 - 4AC \le 0$:

$$\left(\frac{6(2d + 3)}{5}\right)^2 - 4\left(\frac{9}{5}\right)(d^2 + 5) \le 0$$

$$\frac{36(2d + 3)^2}{25} - \frac{36}{5}(d^2 + 5) \le 0 \Rightarrow (2d + 3)^2 - 5(d^2 + 5) \le 0$$

- **[M1]** Applies $b^2 - 4ac \le 0$ to their quadratic in $Vt$ or completes the square.

**Step 7: Simplify quadratic in $d$**

$$4d^2 + 12d + 9 - 5d^2 - 25 \le 0 \Rightarrow -d^2 + 12d - 16 \le 0 \Rightarrow d^2 - 12d + 16 \ge 0$$

- **[A1]** Correct 3-term quadratic inequality in $d$.

**Step 8: Find critical values**

$$d = \frac{12 \pm \sqrt{144 - 4(1)(16)}}{2} = \frac{12 \pm \sqrt{80}}{2} = 6 \pm 2\sqrt{5}$$

- **[dM1]** Attempts critical values for their quadratic.

**Step 9: Choose outside regions**

$$d \le 6 - 2\sqrt{5} \quad \text{or} \quad d \ge 6 + 2\sqrt{5}$$

- **[M1]** Chooses "outsides".

**Step 10: Incorporate physical domain restriction $d > 0$** Since the light aircraft starts behind the aeroplane ($d > 0$):

$$0 < d \le 6 - 2\sqrt{5} \quad \text{or} \quad d \ge 6 + 2\sqrt{5}$$

- **[A1]** Correct solution with $d > 0$ explained. (Allow $<$ or $\le$ at $0$).

- **[S1]** Award S1 for a fully correct solution that is succinct but does not mention any S+ points, OR a fully correct solution that may be laboured but includes an S+ point.

### **Examiner Report 5**

This inequality question in a mechanics context proved very tough for most with a significant number of students making a cursory response or no attempt, which was disappointing. Nearly 20% were unable to score any marks at all, while only about 20% were able to score in excess of 5 marks. There nevertheless were some fully correct solutions seen which invariably accessed the S mark.

Part (a) was accessible to most although many responses were unconvincing in reaching the given answer. Many candidates just stated the horizontal and vertical distance differences, without justification, so had no evidence to award the marks. Several arrived at $\frac{6}{5}V$ by doubling $\frac{3}{5}V$, thinking this gave the required result. Those that afforded some time to carefully consider the given information, often with a good diagram, tended to score all three marks.

The first mark in part (b) was scored fairly widely (though some had the inequality incorrect), but following expansion of the brackets, many did not realise they could now collect terms to form a quadratic that would allow them to progress. Some abandoned their attempts following confusion with the algebra in the resulting expression and others formed and then attempted to solve a quadratic in $d$ before applying the required discriminant equation. Those that had achieved an appropriate quadratic more often than not attempted the discriminant but often an incorrect inequality sign was used. The correct three-term inequality in $d$ was quite rarely seen but those who had obtained it tended to find the correct critical values and choose the outside regions — although many did not appreciate the need to exclude negative values of $d$. Attempts via calculus were seen but tended to only achieve the first mark. The few solutions that scored eight or more marks did tend to pick up the S mark.

---
topic: "Sequences and Series"
subtopic: "Geometric series"
---
### **Question 6**

**Figure 2** _(Diagram showing the initial straight line $L_0$ and subsequent iterations $L_1, L_2, L_3$ forming a trapezium-based fractal curve.)_

Figure 2 shows the first few iterations in the construction of a curve, $L$.

Starting with a straight line $L_0$ of length 4, the middle half of this line is replaced by three sides of a trapezium above $L_0$ as shown, such that the length of each of these sides is $\frac{1}{4}$ of the length of $L_0$.

After the first iteration each line segment has length one.

In subsequent iterations, each line segment parallel to $L_0$ similarly has its middle half replaced by three sides of a trapezium above that line segment, with each side $\frac{1}{4}$ the length of that line segment.

Line segments in $L_n$ are either parallel to $L_0$ or are sloped.

**(a)** Show that the length of $L_2$ is $\frac{23}{4}$ **(2)**

**(b)** Write down the number of

**(i)** line segments in $L_n$ that are parallel to $L_0$

**(ii)** sloped line segments in $L_2$ that are not in $L_1$

**(iii)** new sloped line segments that are created by the $(n + 1)$th iteration. **(3)**

**(c)** Hence find the length of $L_n$ as $n \to \infty$ **(6)**

The area enclosed between $L_0$ and $L_n$ is $A_n$

**(d)** Find the value of $A_1$ **(2)**

**(e)** Find, in terms of $n$, an expression for $A_{n+1} - A_n$ **(3)**

**(f)** Hence find the value of $A_n$ as $n \to \infty$ **(3)**

The same construction as described above is applied externally to the three sides of an equilateral triangle of side length $a$.

Given that the limit of the area of the resulting shape is $26\sqrt{3}$

**(g)** find the value of $a$. **(3)**
**(+S2)**

**(Total 24 marks)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Calculate the length of $L_2$** Length of $L_0 = 4$, length of $L_1 = 5$ (3 horizontal segments of length 1, 2 sloped segments of length 1).
For $L_2$: the 3 horizontal segments each become length $3 \times \frac{1}{4} + 2 \times \frac{1}{4} = \frac{5}{4}$. Sloped segments remain length 1.

$$S_2 = 3 \times 5 \times \frac{1}{4} + 2 = \frac{15}{4} + 2 = \frac{23}{4} \quad *$$

- **[M1]** A correct expression/identifies correct terms. (S+ for a good explanation).
- **[A1*]** Correctly shown.

#### **Part (b)**

**Step 2: Number of parallel line segments in $L_n$**

$$\text{Number of parallel line segments} = 3^n$$

- **[B1]** Correct answer only ($3^n$).

**Step 3: Number of sloped line segments in $L_2$ not in $L_1$** Each of the 3 horizontal segments in $L_1$ produces 2 new sloped segments in $L_2$:

$$\text{Number} = 6$$

- **[B1]** cao. (S+ for explanation).

**Step 4: New sloped line segments created by $(n+1)$th iteration**

$$\text{Number} = 2 \times 3^n$$

- **[B1ft]** For $2 \times \text{their (b)(i)}$.

#### **Part (c)**

**Step 5: Express length of sloped sides and sum over iterations** Length of new sloped sides at iteration $k$: each side has length $\left(\frac{1}{4}\right)^k$.
Total length of $L_{n+1}$:

$$S_{n+1} = 2(1) + 6\left(\frac{1}{4}\right) + 18\left(\frac{1}{4}\right)^2 + \dots + 2 \times 3^n \times \left(\frac{1}{4}\right)^n + 3^{n+1} \times \left(\frac{1}{4}\right)^n$$

- **[M1]** Starts by working out the length of sloped sides — may use $S_n$ or $S_{n+1}$.
- **[M1]** Identifies the general term for sloped sides and considers horizontals.
- **[A1]** Correct expression.

**Step 6: Identify geometric series**

$$\text{Length of sloped segments} = 2 \sum_{r=0}^{n-1} \left(\frac{3}{4}\right)^r$$

- **[M1]** Recognises a G.S. excluding the final horizontal term.

**Step 7: Evaluate sum to infinity** As $n \to \infty$, $\left(\frac{3}{4}\right)^n \to 0$:

$$S_\infty = 2 \times \frac{1}{1 - \frac{3}{4}} + 3 \times 0 = 2 \times 4 = 8$$

- **[M1]** Applies sum of G.S. (S+ for explanation of last term disappearing).
- **[A1]** Correct answer: $S_\infty = 8$.

#### **Part (d)**

**Step 8: Calculate area $A_1$** Top width = 1, bottom width = 2, total base = 4. Trapezium height $h = 1 \times \sin(60^\circ) = \frac{\sqrt{3}}{2}$.

$$\text{Area } A_1 = \frac{(a + b)h}{2} = \frac{(2 + 1) \times \frac{\sqrt{3}}{2}}{2} = \frac{3\sqrt{3}}{4}$$

- **[M1]** Correct method to find height of trapezium (trig or Pythagoras) and applies area formula.
- **[A1]** Correct answer: $A_1 = \frac{3\sqrt{3}}{4}$.

#### **Part (e)**

**Step 9: Determine area scale factor between iterations** In iteration $n+1$, there are $3^n$ new trapezia created. Each trapezium is scaled down by linear factor $\left(\frac{1}{4}\right)^n$, so its area is scaled by $\left(\frac{1}{16}\right)^n$.

- **[M1]** Identifies the scaling factor of trapezia between iterations ($\frac{1}{16}$) OR number of new trapezia ($3^n$).
- **[M1]** Brings both facts together for $(n+1)$th iteration: area scales by $\left(\frac{3}{16}\right)^n$. (S+ good explanation).

**Step 10: Write expression for $A_{n+1} - A_n$**

$$A_{n+1} - A_n = \left(\frac{1}{16}\right)^n \times \frac{3\sqrt{3}}{4} \times 3^n = \frac{3\sqrt{3}}{4}\left(\frac{3}{16}\right)^n$$

- **[A1]** Correct expression.

#### **Part (f)**

**Step 11: Sum increase in area to infinity**

$$A_\infty = \frac{3\sqrt{3}}{4} + 3 \times \frac{3\sqrt{3}}{4 \times 16} + 3^2 \times \frac{3\sqrt{3}}{4 \times 16^2} + \dots = \frac{3\sqrt{3}}{4} \sum_{n=0}^{\infty} \left(\frac{3}{16}\right)^n$$

- **[M1]** Correct consideration of the area — sum of their term from (e) attempted.

**Step 12: Calculate infinite geometric sum**

$$A_\infty = \frac{3\sqrt{3}}{4} \times \frac{1}{1 - \frac{3}{16}} = \frac{3\sqrt{3}}{4} \times \frac{16}{13}$$

- **[A1ft]** Correct unsimplified expression follow through their (e) as long as it is a G.S.

**Step 13: State final area limit**

$$A_\infty = \frac{12\sqrt{3}}{13}$$

- **[A1]** Correct answer.

#### **Part (g)**

**Step 14: Set up area equation for equilateral triangle base** Area of equilateral triangle of side $a$: $T = \frac{1}{2}a^2 \sin(60^\circ) = \frac{a^2\sqrt{3}}{4}$.
The construction is applied to each of the 3 sides, scaled by linear factor $\frac{a}{4}$ (so area scaled by $\frac{a^2}{16}$ relative to base side 4):

$$\text{Limiting area} = \frac{a^2\sqrt{3}}{4} + 3 \times \left(\frac{a}{4}\right)^2 \times \frac{12\sqrt{3}}{13}$$

- **[M1]** Finds area of triangle and attempts to add $3 \times$ a scaled area from (f).

**Step 15: Solve for $a^2$**

$$\frac{a^2\sqrt{3}}{4} + 3 \times \frac{a^2}{16} \times \frac{12\sqrt{3}}{13} = 26\sqrt{3}$$

$$\frac{a^2\sqrt{3}}{4}\left(1 + \frac{9}{13}\right) = 26\sqrt{3} \Rightarrow \frac{a^2\sqrt{3}}{4} \times \frac{22}{13} = 26\sqrt{3}$$

$$a^2 \times \frac{11}{26} = 26 \Rightarrow a^2 = \frac{26^2}{11}$$

- **[dM1]** Applies correct $3 \times$ scaling to area from (f) and solves as far as $a^2$.

**Step 16: State final value of $a$**

$$a = \frac{26}{\sqrt{11}} = \frac{26\sqrt{11}}{11}$$

- **[A1]** Accept either form.

- **[S2]** Award S2 for a solution scoring 20+ marks that is succinct and includes some S+ points. Award S1 for a solution scoring 18+ marks or fully correct laboured.

### **Examiner Report 6**

There were plenty of marks awarded to students who persevered with this question, particularly in parts (a), (b) and (d), and the modal mark of 6 was achieved by nearly 15% and around 50% of students scoring more than this. Only 4% scored no marks at all. About 4% were able to score full marks. It seemed to be a question students enjoyed with many persevering and exploring the situation via diagrams.

Most got to grips with part (a), producing a variety of acceptable ways to show how the required value was arrived at.

Part (b) saw some reasonable scoring. Part (iii) was the least successful. The number of parallel line segments in part (i) was often seen with an index of $n-1$ or $n+1$ rather than $n$, but many benefited from follow-through.

Suitable progress in part (c) was much less common. Those that made an attempt often had a correct series for the lengths of the sloped sides but there were often errors in their consideration of the horizontals. Those who formed an appropriate series usually were able to apply the correct sum to infinity formula.

Many students were able to access the two marks in part (d).

Marks in parts (e) and (f) were very rare on the whole, although a fair number were able to pick up at least one of the key elements of how the area of successive trapezia was being affected.

In part (g) attempts tended to correctly find the area of the triangle although very few could produce a correct sum using the earlier work and the $3\times$ scaling was again often omitted.

---
topic: "Circles"
subtopic: "Intersections of straight lines and circles"
---
### **Question 7**

7. A circle $C$ has centre $X(a, b)$ and radius $r$.
A line $l$ has equation $y = mx + c$

**(a)** Show that the $x$ coordinates of the points where $C$ and $l$ intersect satisfy

$$(m^2 + 1)x^2 - 2(a - m(c - b))x + a^2 + (c - b)^2 - r^2 = 0$$

**(2)**

Given that $l$ is a tangent to $C$,

**(b)** show that

$$c = b - ma \pm r\sqrt{m^2 + 1}$$

**(6)**

The circle $C_1$ has equation

$$x^2 + y^2 - 16 = 0$$

and the circle $C_2$ has equation

$$x^2 + y^2 - 20x - 10y + 89 = 0$$

**(c)** Find the equations of any lines that are normal to both $C_1$ and $C_2$, justifying your answer. **(3)**

**(d)** Find the equations of all lines that are a tangent to both $C_1$ and $C_2$

$[\text{You may find the following Pythagorean triple helpful in this part: } 7^2 + 24^2 = 25^2]$ **(11)**
**(+S2)**

**(Total 24 marks)**

### **Mark Scheme 7**

#### **Part (a)**

**Step 1: Substitute line equation into circle equation** Circle $C$: $(x - a)^2 + (y - b)^2 = r^2$. Substitute $y = mx + c$:

$$(x - a)^2 + (mx + c - b)^2 = r^2$$

- **[M1]** Attempts to substitute $y = mx + c$ into $(x \pm a)^2 + (y \pm b)^2 = r^2$ and expands.

**Step 2: Collect terms to obtain target quadratic**

$$x^2 - 2ax + a^2 + m^2 x^2 + 2mx(c - b) + (c - b)^2 = r^2$$

$$(m^2 + 1)x^2 - 2(a - m(c - b))x + a^2 + (c - b)^2 - r^2 = 0 \quad *$$

- **[A1*]** Achieves correct result with intermediate step. (S+ for clean group of $(c - b)$).

#### **Part (b)**

**Step 3: Apply condition for tangency (discriminant $= 0$)** For line $l$ to be tangent to $C$, the intersection quadratic has equal roots: $b^2 - 4ac = 0$:

$$4(a - m(c - b))^2 - 4(m^2 + 1)(a^2 + (c - b)^2 - r^2) = 0$$

- **[M1]** Attempts $b^2 - 4ac = 0$ on equation from (a). (S+ for explanation).

**Step 4: Expand and simplify discriminant**

$$a^2 - 2am(c - b) + m^2(c - b)^2 - (m^2 a^2 + m^2(c - b)^2 - m^2 r^2 + a^2 + (c - b)^2 - r^2) = 0$$

- **[M1]** Expands both brackets.
- **[A1]** Any correct expansion.

**Step 5: Cancel terms**

$$-2am(c - b) - (c - b)^2 + r^2(m^2 + 1) = 0$$

$$(c - b)^2 + 2am(c - b) + m^2 a^2 - m^2 a^2 - r^2(m^2 + 1) = 0$$

- **[M1]** Cancels terms and forms quadratic in $c$, $b$, or $(c - b)$.

**Step 6: Solve for $(c - b)$**

$$((c - b) + am)^2 - a^2 m^2 - r^2(m^2 + 1) + a^2 m^2 = 0$$

$$((c - b) + am)^2 = r^2(m^2 + 1)$$

- **[dM1]** Solves via completing the square or quadratic formula.

**Step 7: Complete proof for $c$**

$$(c - b) + am = \pm r\sqrt{m^2 + 1} \Rightarrow c = b - ma \pm r\sqrt{m^2 + 1} \quad *$$

- **[A1*]** Correct result with no errors seen.

#### **Part (c)**

**Step 8: Identify nature of common normals** All normals to a circle pass through its centre. Therefore, any line normal to both circles must pass through the centres of both circles, so there is only one unique common normal.

- **[B1]** Explains normals pass through centres, justifying why there is only one.

**Step 9: Find equation of common normal** $C_1$ has centre $O(0, 0)$.
$C_2$: $(x - 10)^2 - 100 + (y - 5)^2 - 25 + 89 = 0 \Rightarrow (x - 10)^2 + (y - 5)^2 = 36$, so $C_2$ has centre $(10, 5)$.
Line through $(0, 0)$ and $(10, 5)$:

$$y - 0 = \frac{5 - 0}{10 - 0}(x - 0) \Rightarrow y = \frac{1}{2}x$$

- **[M1]** Extracts centres and attempts equation of line.
- **[A1]** Correct equation: $y = \frac{1}{2}x$ or $2y - x = 0$.

#### **Part (d)**

**Step 10: Identify centres and radii of $C_1$ and $C_2$** $C_1$: centre $(0, 0)$, radius $r_1 = 4$.
$C_2$: centre $(10, 5)$, radius $r_2 = 6$.

- **[M1]** Attempts to find centre and radius for each circle.

**Step 11: Identify vertical tangent** The horizontal distance between centres is $10$. Sum of radii $r_1 + r_2 = 4 + 6 = 10$.
Hence the vertical line $x = 4$ touches $C_1$ at $(4, 0)$ and $C_2$ at $(4, 5)$, forming a vertical common tangent.

- **[B1]** Identifies the vertical common tangent $x = 4$. (S+ for explanation).

**Step 12: Use formula from part (b) for non-vertical tangents** For $C_1(0, 0, r=4)$: $c = 0 - m(0) \pm 4\sqrt{m^2 + 1} \Rightarrow c = \pm 4\sqrt{m^2 + 1}$.
For $C_2(10, 5, r=6)$: $c = 5 - 10m \pm 6\sqrt{m^2 + 1}$.

- **[M1]** Uses the result of (b) with both centres and radii.

**Step 13: Equate expressions for $c$** Case 1 (same sign choices):

$$\pm 4\sqrt{m^2 + 1} = 5 - 10m \pm 6\sqrt{m^2 + 1} \Rightarrow \mp 2\sqrt{m^2 + 1} = 5 - 10m$$

$$4(m^2 + 1) = (5 - 10m)^2 = 25 - 100m + 100m^2$$

- **[M1]** Attempts and solves this combination of signs.

**Step 14: Solve for $m$ in Case 1**

$$96m^2 - 100m + 21 = 0 \Rightarrow (24m - 7)(4m - 3) = 0 \Rightarrow m = \frac{3}{4} \quad \text{or} \quad m = \frac{7}{24}$$

- **[A1]** Correct $m$ from first equation.
- **[M1]** Attempts other sign combination: $\pm 10\sqrt{m^2 + 1} = 5 - 10m \Rightarrow 100(m^2 + 1) = (5 - 10m)^2$, giving $m = -\frac{3}{4}$.
- **[dM1]** Solves quadratic in $m$.

**Step 15: Calculate $c$ for each gradient $m$** For $m = -\frac{3}{4}$: $c = 4\sqrt{\left(-\frac{3}{4}\right)^2 + 1} = 4\left(\frac{5}{4}\right) = 5$.
For $m = \frac{3}{4}$: $c = 4\sqrt{\left(\frac{3}{4}\right)^2 + 1} = 5$.
For $m = \frac{7}{24}$: $c = -4\sqrt{\left(\frac{7}{24}\right)^2 + 1} = -4\left(\frac{25}{24}\right) = -\frac{25}{6}$.

- **[M1]** Attempts to find $c$ for at least one value of $m$.
- **[A1]** Obtains one correct tangent equation.
- **[M1]** Attempts to find $c$ for all values of $m$.

**Step 16: State all four common tangent equations**

$$x = 4$$

$$y = -\frac{3}{4}x + 5$$

$$y = \frac{3}{4}x + 5$$

$$y = \frac{7}{24}x - \frac{25}{6}$$

- **[A1]** All three non-vertical equations (plus $x = 4$) found and no others.

- **[S2]** Award S2 for a solution scoring 20+ marks that is succinct and includes some S+ points.

### **Examiner Report 7**

The last question was obviously a very challenging one but there were some very impressive attempts here including some which accessed one of the S marks. Even those who could make little impact on part (c) were generally able to pick up some marks, particularly in part (a). Only 2% failed to score any marks with over 85% scoring at least 3. Less than 1% produced a fully correct solution.

The method was well known in part (a) and a lot of successful proofs were seen. Almost all substituted $y = mx + c$ appropriately. The most elegant solutions were those who immediately spotted they could bracket $(c - b)$ and not need to fully expand.

Part (b) was algebraically challenging but most did apply the discriminant correctly. Those who completed the square rather than use the formula were more likely to reach the given result with no errors.

Part (c) saw some reasonable scoring, although the required justification was not always sufficient. Those who sketched a good diagram and thought about the coordinate geometry were most likely to succeed, appreciating that the normal had to pass through the centre of both circles.

The final part was often omitted. Most attempts scored the first mark by correctly finding the centres and radii of the two circles. Identifying the common vertical tangent was incredibly rare, scored in only a handful of cases. Those who were able to form an equation by substituting twice into the part (b) result and equating usually did so correctly. Most getting this far could get a correct value for $m$. Only a very small number were able to find all correct equations for the common tangents.
