---
topic: "Trigonometric Functions"
subtopic: "Modelling with trigonometric functions"
---
### **Question 1**

In this question you must show all stages of your working.
Solutions based entirely on calculator technology are not acceptable.

The surface temperature of the water in a lake during a particular year is modelled by the equation

$$S = 12 - \frac{15}{2}\cos x^\circ - \frac{27}{10}\sin x^\circ \quad \text{(I)}$$

where $S$ is the temperature in degrees Celsius and $x$ is the number of days after the start of the year.

**(a)** Use the model to write down the surface temperature of the water in the lake at the start of the year. **(1)**

Using the substitution $t = \tan\left(\frac{x}{2}\right)$

**(b)** show that equation (I) can be rewritten as

$$S = \frac{At^2 + Bt + C}{10(1 + t^2)}$$

where $A$, $B$ and $C$ are integers to be determined. **(3)**

**(c)** Hence determine, according to the model, the number of days after the start of the year when the surface temperature of the water in the lake is $10^\circ\text{C}$ for the second time that year. Give your answer to the nearest day. **(5)**

**(Total 9 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Substitute $x = 0$ into the model**
$$S = 12 - \frac{15}{2}\cos 0^\circ - \frac{27}{10}\sin 0^\circ = 12 - \frac{15}{2} = 4.5^\circ\text{C}$$
- **[B1]** Correct value of $4.5^\circ\text{C}$ (units required).

#### **Part (b)**

**Step 2: Use half-angle trigonometric substitutions**
Using $\cos x^\circ = \frac{1 - t^2}{1 + t^2}$ and $\sin x^\circ = \frac{2t}{1 + t^2}$ where $t = \tan\left(\frac{x}{2}\right)$:
$$S = 12 - \frac{15}{2}\left(\frac{1 - t^2}{1 + t^2}\right) - \frac{27}{10}\left(\frac{2t}{1 + t^2}\right)$$
- **[M1]** Correct substitutions for $\cos x^\circ$ and $\sin x^\circ$ in terms of $t$.

**Step 3: Combine over a common denominator**
$$S = \frac{12(1 + t^2) - \frac{15}{2}(1 - t^2) - \frac{54}{10}t}{1 + t^2}$$
$$S = \frac{12 + 12t^2 - \frac{15}{2} + \frac{15}{2}t^2 - \frac{27}{5}t}{1 + t^2}$$
Multiplying numerator and denominator by 10 to match the required form:
$$S = \frac{120 + 120t^2 - 75 + 75t^2 - 54t}{10(1 + t^2)} = \frac{195t^2 - 54t + 45}{10(1 + t^2)}$$
- **[M1]** Attempt to put over a common denominator and simplify.
- **[A1]** Correct expression with integers $A = 195$, $B = -54$, $C = 45$ (or equivalent valid integer scaling).

#### **Part (c)**

**Step 4: Set $S = 10$ and solve for $t$**
$$\frac{195t^2 - 54t + 45}{10(1 + t^2)} = 10$$
$$195t^2 - 54t + 45 = 100 + 100t^2$$
$$95t^2 - 54t - 55 = 0$$
- **[M1]** Forms a 3-term quadratic equation in $t$.

**Step 5: Solve the quadratic equation for $t$**
Using the quadratic formula:
$$t = \frac{54 \pm \sqrt{(-54)^2 - 4(95)(-55)}}{2(95)} = \frac{54 \pm \sqrt{2916 + 20900}}{190} = \frac{54 \pm \sqrt{23816}}{190}$$
$$t \approx 1.0322 \quad \text{or} \quad t \approx -0.5642$$
- **[M1]** Solves the quadratic equation to find values of $t$.

**Step 6: Convert $t$ back to $x$**
Since $t = \tan\left(\frac{x}{2}\right)$:
$$\frac{x}{2} = \arctan(1.0322) \approx 45.89^\circ \quad \text{or} \quad \frac{x}{2} = \arctan(-0.5642) \approx -29.43^\circ$$
$$x = 91.79^\circ \quad \text{or} \quad x = -58.85^\circ$$
For the second time in the year, considering subsequent values:
$$\frac{x}{2} = 180^\circ + (-29.43^\circ) = 150.57^\circ \Rightarrow x = 301.14^\circ$$
or taking the second positive branch:
$$\frac{x}{2} = 180^\circ + 45.89^\circ = 225.89^\circ \Rightarrow x = 451.78^\circ \quad (\text{too large for one year}})$$
Let's check alternative periodic values for the second occurrence:
First occurrence in range: $x_1 = 91.8^\circ$ (or from negative turned positive: $301.1^\circ$ or similar).
Checking roots properly:
$\frac{x}{2} = 45.89^\circ \Rightarrow x = 91.8^\circ$ (1st time)
$\frac{x}{2} = 180^\circ - 29.43^\circ = 150.57^\circ \Rightarrow x = 301.1^\circ$ (2nd time)
- **[M1]** Proceeds correctly from $t$ values to $x$ values, selecting the second occurrence.
- **[A1]** Correct number of days to the nearest day, $301$.

### **Examiner Report 1**

Part (a) The majority of candidates achieved $4.5^\circ\text{C}$, although some did not include the units. There were some who answered $12^\circ$, just looking at the function $S = 12 - \frac{15}{2}\cos x^\circ - \frac{27}{10}\sin x^\circ$ and not substituting in $x = 0$.

Part (b) Nearly all candidates could start this section correctly; there were just a few sign errors in the formulae. Most knew how to reach a common denominator, although more sign errors appeared during the manipulation. However, the correct expression was frequently achieved.

Part (c) Most candidates started correctly by multiplying up, obtaining a 3-term quadratic, but there were some careless errors – notably $100 + 10t = \dots$ The majority then solved their 3-term quadratic, most of them remembered that they needed to proceed from $t = \dots$ to $x = \dots$ Several candidates rejected the negative value of $t$, saying the number of days must be positive. Some also answered in radians; candidates need to look at the expression to identify the degrees symbol.

There were some very good responses, picking out the second value confidently, and others who were rather more laborious in the process. There were frequent errors in the order of operations, ranging from implying $\tan x = 2\tan\left(\frac{x}{2}\right)$, to doubling the value of $\frac{x}{2}$ before adding $180^\circ$ etc. to obtain further values.

---
topic: "Differentiation"
subtopic: "Rates of change"
---
### **Question 2**

Water is leaking from a hole in the base of a large spherical tank. The depth of water, $H$ metres, in the tank is modelled by the differential equation

$$3(5H - H^2)\frac{dH}{dt} = -4\sqrt{H} \quad 0 < H < 5$$

where $t$ is the time in hours after the leak started.

The depth of water in the tank 10 minutes after the leak started was $2\text{ m}$.

Use two applications of the approximation formula

$$\left(\frac{dy}{dx}\right)_n \approx \frac{y_{n+1} - y_n}{h}$$

to estimate the depth of water in the tank, one hour after the leak started. **(7)**

**(Total 7 marks)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Identify step size $h$**
Since the interval is from $t = \frac{1}{6}$ hours (10 minutes) to $t = 1$ hour (60 minutes) using 2 steps:
$$h = \frac{1 - \frac{1}{6}}{2} = \frac{\frac{5}{6}}{2} = \frac{5}{12}$$
- **[B1]** Correct step size $h = \frac{5}{12}$ (or $0.4167$).

**Step 2: Rearrange differential equation to find $\frac{dH}{dt}$**
$$\frac{dH}{dt} = \frac{-4\sqrt{H}}{3(5H - H^2)}$$
- **[M1]** Expresses $\frac{dH}{dt}$ in terms of $H$.

**Step 3: First iteration ($t_0 = \frac{1}{6}, H_0 = 2$)**
$$\left(\frac{dH}{dt}\right)_0 = \frac{-4\sqrt{2}}{3(5(2) - 2^2)} = \frac{-4\sqrt{2}}{3(10 - 4)} = \frac{-4\sqrt{2}}{18} = -\frac{2\sqrt{2}}{9} \approx -0.31427$$
Using the approximation formula with $h = \frac{5}{12}$:
$$H_1 = H_0 + h\left(\frac{dH}{dt}\right)_0 = 2 + \frac{5}{12}\left(-\frac{2\sqrt{2}}{9}\right) = 2 - \frac{5\sqrt{2}}{54} \approx 1.8692$$
- **[M1]** Calculates the derivative at the initial point and computes $H_1$.

**Step 4: Second iteration ($t_1 = \frac{7}{12}, H_1 \approx 1.8692$)**
$$\left(\frac{dH}{dt}\right)_1 = \frac{-4\sqrt{1.8692}}{3(5(1.8692) - 1.8692^2)} \approx \frac{-5.4697}{3(9.346 - 3.4939)} \approx \frac{-5.4697}{17.5563} \approx -0.31156$$
$$H_2 = H_1 + h\left(\frac{dH}{dt}\right)_1 \approx 1.8692 + \frac{5}{12}(-0.31156) \approx 1.8692 - 0.12982 \approx 1.74\text{ m}$$
- **[M1]** Calculates the derivative at $H_1$ and computes $H_2$.
- **[A1]** Correct final value $1.74$ (or $1.739$ / rounding to 3 sig fig).
- **[B1]** Correct units stated (metres / m).

### **Examiner Report 2**

Many candidates obtained the correct value for $h$, but values of $25$, $0.5$, $\frac{1}{6}$ also appeared quite frequently. Most understood the method, although some confused values of $t$ for values of $H$ in the formulae. There were frequent sign slips in the working, often giving increasing values for the depth; if candidates had realised after the first iteration that this must be wrong they might have corrected it early in the process.

Most candidates remembered to give the units for their final answer. Many had some combination of a table and other working, which was not always easy to decipher.

---
topic: "Vectors"
subtopic: "Vector product"
---
### **Question 3**

**Figure 1** _A sketch of the parallelepiped $ABCDHEFG$ with vertices $A, B, C, D, E, F, G, H$._

```tikz
\begin{tikzpicture}[scale=0.8]
  \coordinate (A) at (0,0);
  \coordinate (B) at (4,0);
  \coordinate (C) at (5.5,1.5);
  \coordinate (D) at (1.5,1.5);
  \coordinate (E) at (1,3);
  \coordinate (F) at (5,3);
  \coordinate (G) at (6.5,4.5);
  \coordinate (H) at (2.5,4.5);
  
  \draw[dashed] (A) -- (D);
  \draw[dashed] (D) -- (C);
  \draw[dashed] (D) -- (H);
  \draw (A) -- (B);
  \draw (B) -- (C);
  \draw (B) -- (F);
  \draw (C) -- (G);
  \draw (E) -- (F);
  \draw (F) -- (G);
  \draw (G) -- (H);
  \draw (H) -- (E);
  \draw (A) -- (E);

  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[right] at (C) {$C$};
  \node[above left] at (D) {$D$};
  \node[left] at (E) {$E$};
  \node[right] at (F) {$F$};
  \node[above right] at (G) {$G$};
  \node[above left] at (H) {$H$};
\end{tikzpicture}
```

Figure 1 shows the parallelepiped $ABCDHEFG$.

Relative to a fixed origin $O$, the points $A$, $B$, $D$ and $E$ have coordinates $(3, 2, 7)$, $(4, 4, 3)$, $(4, 1, t)$ and $(t, -1, 10)$ respectively, where $t$ is a constant.

**(a)** Determine, in simplest form in terms of $t$, $\vec{AB} \times \vec{AD}$. **(3)**

Given that the volume of the parallelepiped is $9$

**(b)** determine the possible values of $t$. **(6)**

**(Total 9 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Find the vectors $\vec{AB}$ and $\vec{AD}$**
$$\vec{AB} = \mathbf{b} - \mathbf{a} = \begin{pmatrix} 4 \\ 4 \\ 3 \end{pmatrix} - \begin{pmatrix} 3 \\ 2 \\ 7 \end{pmatrix} = \begin{pmatrix} 1 \\ 2 \\ -4 \end{pmatrix}$$
$$\vec{AD} = \mathbf{d} - \mathbf{a} = \begin{pmatrix} 4 \\ 1 \\ t \end{pmatrix} - \begin{pmatrix} 3 \\ 2 \\ 7 \end{pmatrix} = \begin{pmatrix} 1 \\ -1 \\ t - 7 \end{pmatrix}$$
- **[M1]** Correctly finds both vectors $\vec{AB}$ and $\vec{AD}$.

**Step 2: Compute the cross product $\vec{AB} \times \vec{AD}$**
$$\vec{AB} \times \vec{AD} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 1 & 2 & -4 \\ 1 & -1 & t - 7 \end{vmatrix}$$
$$= \mathbf{i}(2(t - 7) - (-4)(-1)) - \mathbf{j}(1(t - 7) - (-4)(1)) + \mathbf{k}(1(-1) - 2(1))$$
$$= \begin{pmatrix} 2t - 14 - 4 \\ -(t - 7 + 4) \\ -1 - 2 \end{pmatrix} = \begin{pmatrix} 2t - 18 \\ -t + 3 \\ -3 \end{pmatrix}$$
- **[M1]** Attempts the vector product using a determinant or component method.
- **[A1]** Correct expression $\begin{pmatrix} 2t - 18 \\ 3 - t \\ -3 \end{pmatrix}$ (or equivalent).

#### **Part (b)**

**Step 3: Find the vector $\vec{AE}$**
$$\vec{AE} = \mathbf{e} - \mathbf{a} = \begin{pmatrix} t \\ -1 \\ 10 \end{pmatrix} - \begin{pmatrix} 3 \\ 2 \\ 7 \end{pmatrix} = \begin{pmatrix} t - 3 \\ -3 \\ 3 \end{pmatrix}$$
- **[M1]** Correctly finds the vector $\vec{AE}$.

**Step 4: Use the scalar triple product for volume**
$$\text{Volume} = |\vec{AE} \cdot (\vec{AB} \times \vec{AD})| = 9$$
$$\begin{pmatrix} t - 3 \\ -3 \\ 3 \end{pmatrix} \cdot \begin{pmatrix} 2t - 18 \\ 3 - t \\ -3 \end{pmatrix} = \pm 9$$
$$(t - 3)(2t - 18) + (-3)(3 - t) + (3)(-3) = \pm 9$$
- **[M1]** Sets up the scalar triple product (or determinant approach) equating to $\pm 9$.

**Step 5: Expand and solve the equations**
$$(2t^2 - 18t - 6t + 54) - (9 - 3t) - 9 = \pm 9$$
$$2t^2 - 24t + 54 - 9 + 3t - 9 = \pm 9$$
$$2t^2 - 21t + 36 = \pm 9$$

Case 1: $2t^2 - 21t + 36 = 9 \Rightarrow 2t^2 - 21t + 27 = 0$
$$(2t - 3)(t - 9) = 0 \Rightarrow t = \frac{3}{2}, \quad t = 9$$

Case 2: $2t^2 - 21t + 36 = -9 \Rightarrow 2t^2 - 21t + 45 = 0$
Using the quadratic formula:
$$t = \frac{21 \pm \sqrt{(-21)^2 - 4(2)(45)}}{4} = \frac{21 \pm \sqrt{441 - 360}}{4} = \frac{21 \pm \sqrt{81}}{4} = \frac{21 \pm 9}{4}$$
$$t = \frac{30}{4} = \frac{15}{2}, \quad t = \frac{12}{4} = 3$$
- **[M1]** Expands and forms quadratic equations considering both positive and negative volume cases.
- **[A1]** Solves the quadratics to find at least two correct values of $t$.
- **[A1]** All four correct values found: $t = \frac{3}{2}, 3, \frac{15}{2}, 9$.

### **Examiner Report 3**

Part (a) It was common to see incorrect vectors calculated for $\vec{AB}$ and $\vec{AD}$, using $\vec{AB}$ and $\vec{AE}$ so several vector products were formed from the wrong vectors. Position vectors were only occasionally used. There were a lot of sign slips in forming the vector product.

Part (b) Many knew how to form the triple scalar product, but several gave result as a vector, then tried to find the modulus to obtain a volume. Those who had used incorrect vectors in (a) could sometimes achieve the correct volume here if they used the determinant approach. Factors of $\frac{1}{6}$ or $\frac{1}{2}$ sometimes appeared in their expression for the product, resulting in an incorrect quadratic being solved.

There were not many candidates who used both $+9$ and $-9$ for the volume, so most achieved only 2 of the four possible answers.

---
topic: "Inequalities"
subtopic: "Algebraic methods"
---
### **Question 4**

In this question you must show all stages of your working.
Solutions based entirely on calculator technology are not acceptable.

Determine the values of $x$ for which

$$\frac{x - 8}{x} \leqslant \frac{7}{x(x - 2)}$$

giving your answer in set notation. **(6)**

**(Total 6 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Rearrange the inequality to one side**
$$\frac{x - 8}{x} - \frac{7}{x(x - 2)} \leqslant 0$$
- **[M1]** Collects all terms on one side with $\leqslant 0$.

**Step 2: Combine into a single fraction using a common denominator**
$$\frac{(x - 8)(x - 2) - 7}{x(x - 2)} \leqslant 0$$
$$\frac{x^2 - 10x + 16 - 7}{x(x - 2)} \leqslant 0$$
$$\frac{x^2 - 10x + 9}{x(x - 2)} \leqslant 0$$
- **[M1]** Obtains a common denominator and expands the numerator correctly.

**Step 3: Factorise the numerator**
$$\frac{(x - 1)(x - 9)}{x(x - 2)} \leqslant 0$$
- **[A1]** Correct fully factorised fraction $\frac{(x - 1)(x - 9)}{x(x - 2)} \leqslant 0$.

**Step 4: Find critical values**
Critical values are $x = 0$, $x = 1$, $x = 2$, $x = 9$.
- **[B1]** Identifies all four critical values correctly ($0, 1, 2, 9$).

**Step 5: Determine the regions satisfying the inequality**
Testing regions or using sign analysis for $\frac{(x-1)(x-9)}{x(x-2)} \leqslant 0$:
- Between $0$ and $1$: positive
- Between $1$ and $2$: negative ($1 \leqslant x < 2$)
- Between $2$ and $9$: positive
- Between $2$ and $9$ excluding singularities, giving the intervals $1 \leqslant x < 2$ and $2 < x \leqslant 9$.
- **[M1]** Tests intervals or uses a valid method to find the solution regions.

**Step 6: State the final answer in set notation**
$$\{x \in \mathbb{R} : 1 \leqslant x < 2\} \cup \{x \in \mathbb{R} : 2 < x \leqslant 9\}$$
or $\{x \in \mathbb{R} : 1 \leqslant x < 2 \text{ or } 2 < x \leqslant 9\}$
- **[A1]** Correct set notation with correct strict/non-strict inequalities.

### **Examiner Report 4**

The majority of candidates attempted to solve by multiplying up, although many algebraic errors arose, particularly in ensuring that they multiplied by squared terms throughout. Those who succeeded in forming a correct inequality this way sometimes proceeded to multiply out all their brackets, forming a polynomial in $x^4$ or $x^6$. Some candidates multiplied out the brackets and then used their calculator to solve and only gained two marks. Those who followed the instruction that calculator technology was not acceptable, and kept their terms as fully factorised as possible, were able to factorise the resulting expression correctly.

Candidates who moved onto one side and then used a common denominator were able to factorise their numerator correctly.

Some candidates ignored the $x = 0$ as one of their critical values.

In the final answer, some candidates realised that $x = 0$ and $x = 2$ were not included in the range, but many made errors in the $>$ or $\geqslant$ signs. A few candidates did not use set notation correctly, most often by using the intersection rather than union sign.

---
topic: "Conic Sections 1"
subtopic: "Tangents and normals"
---
### **Question 5**

The parabola $C$ has equation $y^2 = 16x$.

The point $P(4t^2, 8t)$ lies on $C$.

**(a)** Show that an equation for the tangent to $C$ at $P$ is

$$yt - x = 4t^2$$

**(3)**

The line $l$ passes through the origin and is perpendicular to the tangent to $C$ at $P$.
The line $l$ and the tangent to $C$ at $P$ intersect at the point $Q$.

**(b)** Determine, in simplest form in terms of $t$, the coordinates of $Q$. **(3)**

**(c)** Hence show that, as $t$ varies, the point $Q$ lies on the curve with equation

$$y^2 = \frac{Ax^3}{x + B}$$

where $A$ and $B$ are integers to be determined. **(3)**

**(Total 9 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Differentiate implicitly to find the gradient of the tangent**
$$y^2 = 16x \Rightarrow 2y\frac{dy}{dx} = 16 \Rightarrow \frac{dy}{dx} = \frac{8}{y}$$
At point $P(4t^2, 8t)$:
$$\text{Gradient } m = \frac{8}{8t} = \frac{1}{t}$$
- **[M1]** Differentiates implicitly or rearranges to find the gradient function $\frac{dy}{dx}$ and substitutes the coordinates of $P$.

**Step 2: Form the equation of the tangent**
$$y - 8t = \frac{1}{t}(x - 4t^2)$$
$$ty - 8t^2 = x - 4t^2$$
$$yt - x = 4t^2$$
- **[A1]** Correct manipulation to arrive at the required equation $yt - x = 4t^2$.

#### **Part (b)**

**Step 3: Find the equation of line $l$**
Line $l$ passes through $(0,0)$ and is perpendicular to the tangent, so its gradient is $-t$:
$$y = -tx$$
- **[M1]** States or uses the gradient of the perpendicular line as $-t$.

**Step 4: Solve simultaneously with the tangent equation to find $Q$**
Substitute $y = -tf$ into $yt - x = 4t^2$:
$$(-tx)t - x = 4t^2$$
$$-t^2x - x = 4t^2$$
$$-x(t^2 + 1) = 4t^2 \Rightarrow x = \frac{-4t^2}{t^2 + 1}$$
Substitute $x$ back to find $y$:
$$y = -t\left(\frac{-4t^2}{t^2 + 1}\right) = \frac{4t^3}{t^2 + 1}$$
Coordinates of $Q$: $\left(\frac{-4t^2}{t^2 + 1}, \frac{4t^3}{t^2 + 1}\right)$
- **[M1]** Solves the simultaneous equations for $x$ or $y$.
- **[A1]** Correct coordinates for $Q$.

#### **Part (c)**

**Step 5: Eliminate $t$ to find the Cartesian equation**
From $x = \frac{-4t^2}{t^2 + 1}$:
$$x(t^2 + 1) = -4t^2 \Rightarrow xt^2 + x = -4t^2 \Rightarrow xt^2 + 4t^2 = -x \Rightarrow t^2(x + 4) = -x \Rightarrow t^2 = \frac{-x}{x + 4}$$
- **[M1]** Rearranges to express $t^2$ in terms of $x$.

**Step 6: Substitute $t^2$ into $y^2$**
Consider $y = \frac{4t^3}{t^2 + 1} = \frac{4t \cdot t^2}{t^2 + 1}$. Alternatively, square $y$:
$$y^2 = \frac{16t^6}{(t^2 + 1)^2}$$
Since $t^2 = \frac{-x}{x + 4}$, notice also from $x = \frac{-4t^2}{t^2 + 1}$ that $t^2 + 1 = \frac{-4t^2}{x}$, so $(t^2 + 1)^2 = \frac{16t^4}{x^2}$.
Thus:
$$y^2 = \frac{16t^6}{\frac{16t^4}{x^2}} = t^2 x^2 = \left(\frac{-x}{x + 4}\right)x^2 = \frac{-x^3}{x + 4}$$
- **[M1]** Substitutes $t^2$ (or $t$) into an expression for $y^2$.
- **[A1]** Completes the proof to get $y^2 = \frac{-x^3}{x + 4}$, identifying $A = -1$ and $B = 4$.

### **Examiner Report 5**

Nearly all candidates could show the equation of the tangent in part (a) successfully.

Part (b) Many had the correct approach but there were frequent sign or other algebraic errors; for example $y = -tx$ then $yt - \frac{y}{-t} = 4t^2 \Rightarrow yt + y = 4t^2$, others could not make $x$ the subject.

Most candidates had difficulty with part (c). Several made no attempt; it was difficult to know whether they had run out of time or just didn’t know how to tackle it.

Of those who attempted this part, the most common misconception was the implicit assumption that $Q$ was on the parabola, as they tried to fit the parametric coords of $Q$ to the form of the original parabola.

Some found an efficient way to eliminate $t$ and form the required equation, but many tried to solve it by substituting the coordinates of $Q$ into the given form of the equation. This could lead to a reasonably simple solution if they simplified their equation as much as possible, but many multiplied out every bracket in sight and formed an expression which was too complicated to deal with. Another common error seen in this method was when they formed a fractional expression in $t$, $A$ and $B$, then equated the numerators and the denominators separately.
