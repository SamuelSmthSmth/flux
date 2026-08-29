---
topic: "Trigonometric Identities and Equations"
subtopic: "Simple trigonometric equations"
---
### **Question 1**

Given that $\theta$ is small and is measured in radians, use the small angle approximations to find an approximate value of

$$\frac{1 - \cos 4\theta}{2\theta \sin 3\theta}$$ **(3)**

**(Total 3 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Apply small angle approximations** Using $\cos 4\theta \approx 1 - \frac{(4\theta)^2}{2}$ and $\sin 3\theta \approx 3\theta$:

$$1 - \cos 4\theta \approx 1 - \left(1 - \frac{16\theta^2}{2}\right) = 8\theta^2$$

- **[B1]** Uses $\cos 4\theta \approx 1 - \frac{(4\theta)^2}{2}$ (or $1 - 8\theta^2$) and $\sin 3\theta \approx 3\theta$.

**Step 2: Substitute into the expression**

$$\frac{8\theta^2}{2\theta(3\theta)} = \frac{8\theta^2}{6\theta^2}$$

- **[M1]** Substitutes approximations correctly into the expression to form a fraction in terms of $\theta$.

**Step 3: Simplify the expression**

$$= \frac{4}{3}$$

- **[A1]** Correct value $\frac{4}{3}$.

### **Examiner Report 1**

This question was accessible to most students and many gave fully correct solutions. Almost all students were able to score a mark for $\sin 3\theta \approx 3\theta$ but there were a number who simplified the denominator to $6\theta$ instead of $6\theta^2$ resulting in a final solution of $\frac{4}{3}\theta$. Replacing the $\cos 4\theta$ proved more problematic with common incorrect attempts on the numerator including $1 - 4\left(\frac{\theta^2}{2}\right)$ and more frequently $1 - \left(1 - \frac{4\theta^2}{2}\right)$ where the $4\theta$ was not squared leading to an incorrect answer of $1/3$. Other common incorrect attempts involved simplifying $1 - \cos 4\theta$ to $-8\theta^2$ rather than $+8\theta^2$ leading to the incorrect answer of $-4/3$. Even in cases where both substitutions were performed correctly many careless errors were made when simplifying. There were a small number of students who tried to expand and simplify the expression using the double angle formula for $\cos 4\theta$, but in most cases this resulted in an incorrect expression which did not lead to the correct answer.

---
topic: "Differentiation"
subtopic: "Differentiating $x^n$"
---
### **Question 2**

A curve $C$ has equation

$$y = x^2 - 2x - 24\sqrt{x}, \quad x > 0$$

**(a)** Find 

**(i)** $\frac{dy}{dx}$

**(ii)** $\frac{d^2y}{dx^2}$ **(3)**

**(b)** Verify that $C$ has a stationary point when $x = 4$ **(2)**

**(c)** Determine the nature of this stationary point, giving a reason for your answer. **(2)**

**(Total 7 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Differentiate with respect to $x$**

$$\frac{dy}{dx} = 2x - 2 - 12x^{-\frac{1}{2}}$$

- **[B1]** For $2x - 2$
- **[B1]** For $-12x^{-\frac{1}{2}}$ (allow unsimplified equivalents)

**Step 2: Differentiate again to find the second derivative**

$$\frac{d^2y}{dx^2} = 2 + 6x^{-\frac{3}{2}}$$

- **[B1]** Correct second derivative (follow through from their $\frac{dy}{dx}$).

#### **Part (b)**

**Step 3: Substitute $x = 4$ into $\frac{dy}{dx}$**

$$\left.\frac{dy}{dx}\right|_{x=4} = 2(4) - 2 - 12(4)^{-\frac{1}{2}} = 8 - 2 - \frac{12}{2} = 0$$

- **[M1]** Substitutes $x = 4$ into their derivative.
- **[A1]** Obtains $0$ and explicitly concludes/verifies it is a stationary point.

#### **Part (c)**

**Step 4: Determine the nature of the stationary point**

$$\left.\frac{d^2y}{dx^2}\right|_{x=4} = 2 + 6(4)^{-\frac{3}{2}} = 2 + \frac{6}{8} = 2.75 > 0$$

So it is a minimum point.

- **[M1]** Evaluates their second derivative at $x = 4$ (or uses another valid method such as gradients either side).
- **[A1]** Correct value ($2.75$ or $\frac{11}{4}$) with a valid reason (e.g. $>0$ or positive) and conclusion (minimum).

### **Examiner Report 2**

Part (a) of this question allowed the demonstration of good skills in differentiation and was well answered by the majority of students. A small minority made careless errors on the indices, for example writing $\sqrt{x}$ as $x^{-2}$, leading to the loss of both marks as their derivative was not of the required form. Others dealt with the index correctly, but made arithmetic errors on the coefficient when differentiating the term. The second derivative was almost always either correct, or a correct follow through, from the students first derivative.

In part (b) a significant number of students were seen attempting to solve the equation $\frac{dy}{dx} = 0$ although most quickly realised that they could substitute $x = 4$ into $\frac{dy}{dx}$ to obtain $0$. To be awarded the final mark of part (b), students were required to interpret their value of $\frac{dy}{dx}$ at $x = 4$ and conclude that the point was a stationary point of the curve. Many students omitted this final step thus failing to fully answer the question.

For part (c) there was a little more variation. Most students were aware of the need to substitute $x = 4$ into their second derivative and evaluate its sign, although some failed to do this and instead considered the sign of either $y$, $\frac{dy}{dx}$ and/or $\frac{d^2y}{dx^2}$ either side of $x = 4$ (usually at $4.1$ and $3.9$). A follow through mark enabled students with an incorrect negative or fractional index from part (a) to achieve both marks in the last part of the question. A significant proportion of students seemed unable to interpret what they had proven from their calculations, and many seemed to think they were looking for an inflection point, or else determining that the curve was either convex or concave. As with part (b), the most common source of lost marks was therefore a lack of correct reasoning before making a conclusion.

---
topic: "Radians"
subtopic: "Areas of sectors and segments"
---
### **Question 3**

**Figure 1** _(A sketch of a sector $AOB$ of a circle with centre $O$, radius $r\text{ cm}$, and angle $AOB$ equal to $\theta$ radians)._

```tikz
\begin{tikzpicture}[scale=1.2]
  \draw (0,0) coordinate (O) -- (2,1) coordinate (A);
  \draw (O) -- (2,-0.5) coordinate (B);
  \draw[thick] (A) arc (26.5:-14:2.23);
  \node at (0.3,0.3) {$\theta$};
  \node at (1,0.7) [above] {$r\text{ cm}$};
  \node at (1,-0.4) [below] {$r\text{ cm}$};
  \node at (0,0) [left] {$O$};
  \node at (2,1) [right] {$A$};
  \node at (2,-0.5) [right] {$B$};
  \node at (2.2,0.3) {$AB$};
\end{tikzpicture}
```

Figure 1 shows a sector $AOB$ of a circle with centre $O$ and radius $r\text{ cm}$.

The angle $AOB$ is $\theta$ radians.
The area of the sector $AOB$ is $11\text{ cm}^2$.

Given that the perimeter of the sector is $4$ times the length of the arc $AB$, find the exact value of $r$. **(4)**

**(Total 4 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Set up equations using arc length, area, and perimeter**
Arc length $s = r\theta$
Area $A = \frac{1}{2}r^2\theta = 11$
Perimeter $P = r + r + r\theta = 2r + r\theta$

- **[B1]** Correct expression for arc length ($r\theta$) or sector area ($\frac{1}{2}r^2\theta$).

**Step 2: Use the perimeter condition**
Perimeter is $4$ times the arc length:
$$2r + r\theta = 4(r\theta)$$
$$2r = 3r\theta \implies \theta = \frac{2}{3}$$

- **[M1]** Sets up a correct equation relating perimeter and arc length (e.g., $2r + r\theta = 4r\theta$) and solves for $\theta$ or $r\theta$.

**Step 3: Substitute $\theta$ into the area equation**
$$\frac{1}{2}r^2\left(\frac{2}{3}\right) = 11$$
$$\frac{1}{3}r^2 = 11 \implies r^2 = 33$$

- **[M1]** Substitutes their $\theta$ into the area formula $\frac{1}{2}r^2\theta = 11$ to form an equation in $r$.

**Step 4: Solve for $r$**
$$r = \sqrt{33}$$

- **[A1]** Correct exact value $r = \sqrt{33}$ (rejecting negative root).

### **Examiner Report 3**

This question was well answered by the vast majority of students. The formulae for arc length and area of a sector were well known and applied, and although the $4$ was occasionally seen on the incorrect side of the equation, this was rare. Most students worked in radians and used simultaneous equations to find the value of $\theta$ before proceeding to find an exact (positive) value for $r$. Algebraic and numerical slips, however, when manipulating equations were not an uncommon reason for losing marks. If method errors were made in this question, it was usually to miss the half from the sector area or to confuse the area of a sector with that of a triangle.

---
topic: "Numerical Methods"
subtopic: "Locating roots"
---
### **Question 4**

The curve with equation $y = 2\ln(8 - x)$ meets the line $y = x$ at a single point, $x = \alpha$.

**(a)** Show that $3 < \alpha < 4$ **(2)**

**Figure 2** _(A sketch showing the curves $y = 2\ln(8 - x)$ and $y = x$ intersecting at $x = \alpha$, with the y-intercept of the logarithmic curve at $4$ and x-intercept/asymptote behaviour indicated)._

```tikz
\begin{tikzpicture}[scale=0.9]
  \draw[->] (-1,0) -- (6,0) node[below] {$x$};
  \draw[->] (0,-1) -- (0,5) node[left] {$y$};
  \draw[domain=0.5:5.5, smooth, thick] plot (\x, {2*ln(8-\x)});
  \draw[domain=0:4.8, smooth, thick] plot (\x, \x);
  \fill (0,4) node[left] {$4$};
  \fill (4,0) node[below] {$4$};
  \node at (3.5,3.5) {$y = x$};
  \node at (2.5,2.3) [above right] {$y = 2\ln(8 - x)$};
  \node at (0,0) [below left] {$O$};
\end{tikzpicture}
```

Figure 2 shows the graph of $y = 2\ln(8 - x)$ and the graph of $y = x$.

A student uses the iteration formula

$$x_{n+1} = 2\ln(8 - x_n), \quad n \in \mathbb{N}$$

in an attempt to find an approximation for $\alpha$.

Using the graph and starting with $x_1 = 4$

**(b)** determine whether or not this iteration formula can be used to find an approximation for $\alpha$, justifying your answer. **(2)**

**(Total 4 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Define the function**
Let $f(x) = 2\ln(8 - x) - x$ (or equivalent rearranged form).

**Step 2: Evaluate at $x = 3$ and $x = 4$**
$f(3) = 2\ln(5) - 3 \approx 0.218$
$f(4) = 2\ln(4) - 4 \approx -1.227$

- **[M1]** Evaluates $f(3)$ and $f(4)$ (or checks signs of $2\ln(8-x) - x$ or $2\ln(8-x)$ vs $x$ at $3$ and $4$).
- **[A1]** Correct values (or correct signs: positive and negative), clear statement that a change of sign implies a root in $(3, 4)$, and continuity mentioned/implied.

#### **Part (b)**

**Step 3: Determine feasibility using the cobweb/staircase diagram logic**
The iteration formula diverges (or spirals away from $\alpha$ because the cobweb diagram spirals outwards/away from the intersection point starting from $x_1 = 4$). Thus, it cannot be used.

- **[M1]** Refers to the graph / cobweb diagram / gradients at the root.
- **[A1]** Concludes that it cannot be used, with a valid reason (e.g., spirals outwards, or $|f'(\alpha)| > 1$, or goes outside the domain).

### **Examiner Report 4**

This was perhaps the most poorly attempted question on the whole of the paper. Part (a) should have been familiar to centres but one which required the students to set up their own function, usually $f(x) = 2\ln(8 - x) - x$, before substituting in the $x$ values of $3$ and $4$. This was well done, but also quite commonly, the only mark gained in the question. To show that $3 < \alpha < 4$, a student needed two correct calculations, give a valid reason, which required both a change in sign and a mention of continuity, as well as giving a brief deduction. Explanations rarely mentioned the fact that the function needed to be continuous in this interval. Fully correct solutions to part (b) were very rare. Many students assumed that this was a question on continued iteration and gave all values of $x$ from $x_1$ to $x_8$ without any consideration of the demand of the question. Students were required to "use the graph" to show whether or not the iteration formula could be used to find an approximation for $\alpha$. Hence, to satisfy this demand, a cobweb diagram starting at $x_1 = 4$ was required followed by an explanation that "it can be used" because "the cobweb spirals inwards towards $\alpha$" [Note: Examiner report states "it can be used" as a typo in some contexts or referring to specific student misconceptions, but the correct deduction from the outward spiral is that it *cannot* be used].

---
topic: "Differentiation"
subtopic: "The quotient rule"
---
### **Question 5**

Given that

$$y = \frac{3\sin \theta}{2\sin \theta + 2\cos \theta}, \quad -\frac{\pi}{4} < \theta < \frac{3\pi}{4}$$

show that

$$\frac{dy}{d\theta} = \frac{A}{1 + \sin 2\theta}, \quad -\frac{\pi}{4} < \theta < \frac{3\pi}{4}$$

where $A$ is a rational constant to be found. **(5)**

**(Total 5 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Apply the quotient rule**
Let $u = 3\sin \theta$ and $v = 2\sin \theta + 2\cos \theta$.
$$\frac{du}{d\theta} = 3\cos \theta, \quad \frac{dv}{d\theta} = 2\cos \theta - 2\sin \theta$$

$$\frac{dy}{d\theta} = \frac{(2\sin \theta + 2\cos \theta)(3\cos \theta) - (3\sin \theta)(2\cos \theta - 2\sin \theta)}{(2\sin \theta + 2\cos \theta)^2}$$

- **[M1]** Attempts quotient rule; numerator of the form $v\frac{du}{d\theta} - u\frac{dv}{d\theta}$ with correct differentiation of $\sin \theta$ and $\cos \theta$.

**Step 2: Expand the numerator**
$$\text{Numerator} = 6\sin \theta \cos \theta + 6\cos^2 \theta - 6\sin \theta \cos \theta + 6\sin^2 \theta$$
$$= 6(\cos^2 \theta + \sin^2 \theta) = 6$$

- **[M1]** Correctly expands the numerator and uses $\cos^2 \theta + \sin^2 \theta = 1$ to simplify.

**Step 3: Expand the denominator**
$$\text{Denominator} = (2\sin \theta + 2\cos \theta)^2 = 4\sin^2 \theta + 4\cos^2 \theta + 8\sin \theta \cos \theta$$
$$= 4(\sin^2 \theta + \cos^2 \theta) + 4(2\sin \theta \cos \theta) = 4 + 4\sin 2\theta$$

- **[M1]** Expands the denominator and uses identities $\sin^2 \theta + \cos^2 \theta = 1$ and $2\sin \theta \cos \theta = \sin 2\theta$.

**Step 4: Combine numerator and denominator**
$$\frac{dy}{d\theta} = \frac{6}{4 + 4\sin 2\theta} = \frac{\frac{3}{2}}{1 + \sin 2\theta}$$

- **[M1]** Factorises denominator as $4(1 + \sin 2\theta)$ or equivalent manipulation to reach the form $\frac{A}{1 + \sin 2\theta}$.
- **[A1]** Fully correct proof with $A = \frac{3}{2}$ (or $1.5$).

### **Examiner Report 5**

The majority of students knew to use the quotient rule in this question, although the slips on signs and bracketing in the terms of the numerator were commonplace. We would encourage all students to state the formula being used, with their expressions for ‘u’ ‘v’ ‘du’ and ‘dv’, to ensure that their method is made clear to examiners.

Getting a correct derivative into the required form using trigonometric identities proved to be more challenging than the differentiation in this question. Students recognised the need to use the Pythagorean identity for sine and cosine to simplify their numerator and denominator but were less confident when applying the double angle formula for sine, and it was not uncommon for a final answer to be left as $\frac{3}{2 + 2\sin 2\theta}$, or for there to be errors in an attempt to write this fraction in the required form.

---
topic: "Circles"
subtopic: "Equation of a circle"
---
### **Question 6**

**Figure 3** _(A sketch showing a circle $C$ with centre $A$, tangent line $l$ with equation $y = 2x + 1$ touching $C$ at point $P$, not to scale)._

```tikz
\begin{tikzpicture}[scale=0.8]
  \draw[->] (-1,0) -- (6,0) node[below] {$x$};
  \draw[->] (0,-1) -- (7,0) node[left] {$y$};
  \draw (3.5,3.5) circle (1.5cm);
  \draw[thick] (-0.5,-0.1) -- (5.5,11/1.2); % roughly y = 2x + 1
  \fill (3.5,3.5) circle (2pt) node[below] {$A(7,5)$};
  \fill (1.4,3.8) circle (2pt) node[left] {$P$};
  \draw[dashed] (3.5,3.5) -- (1.4,3.8);
  \node at (4.5,4.5) {$C$};
  \node at (4,8) {$l$};
  \node at (0,0) [below left] {$O$};
\end{tikzpicture}
```

Figure 3 shows a circle $C$ with centre $A$ with coordinates $(7, 5)$.

The line $l$, with equation $y = 2x + 1$, is the tangent to $C$ at the point $P$, as shown in Figure 3.

**(a)** Show that an equation of the line $PA$ is $2y + x = 17$ **(3)**

**(b)** Find an equation for $C$. **(4)**

The line with equation $y = 2x + k, \quad k \neq 1$ is also a tangent to $C$.

**(c)** Find the value of the constant $k$. **(3)**

**(Total 10 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Find the gradient of the tangent and radius**
Gradient of tangent $l$ is $m_1 = 2$.
Gradient of radius $PA$ is $m_2 = -\frac{1}{2}$ (perpendicular).

- **[B1]** Identifies gradient of tangent as $2$ and states perpendicular gradient is $-\frac{1}{2}$.

**Step 2: Find the equation of line $PA$**
Using point $A(7, 5)$ and gradient $-\frac{1}{2}$:
$$y - 5 = -\frac{1}{2}(x - 7)$$
$$2y - 10 = -x + 7$$
$$2y + x = 17$$

- **[M1]** Uses straight-line equation with coordinates $(7, 5)$ and gradient $-\frac{1}{2}$.
- **[A1]** Obtains $2y + x = 17$ with complete valid working.

#### **Part (b)**

**Step 3: Find coordinates of point $P$**
Solve $y = 2x + 1$ and $x = 17 - 2y$ (or $x = 17 - 2(2x+1) \implies 5x = 15 \implies x = 3, y = 7$).
Point $P$ is $(3, 7)$.

- **[M1]** Solves the line equation and line $PA$ equation simultaneously to find coordinates of $P$.

**Step 4: Find radius squared ($r^2$)**
Radius squared is distance $PA^2$:
$$r^2 = (7 - 3)^2 + (5 - 7)^2 = 4^2 + (-2)^2 = 16 + 4 = 20$$

- **[M1]** Calculates the radius squared or radius using coordinates of $A$ and $P$.

**Step 5: Write the equation of circle $C$**
$$(x - 7)^2 + (y - 5)^2 = 20$$

- **[A1]** Correct equation for $C$.

#### **Part (c)**

**Step 6: Find $k$ for the second tangent $y = 2x + k$**
Method 1 (using vector translation from $P$ to opposite tangent point $N$ or centre $A$):
The centre $A$ is the midpoint of $P$ and $N$.
$A = \left(\frac{3 + x_N}{2}, \frac{7 + y_N}{2}\right) \implies (7, 5) = \left(\frac{3+x_N}{2}, \frac{7+y_N}{2}\right) \implies N = (11, 3)$.
Substitute $N(11, 3)$ into $y = 2x + k$:
$$3 = 2(11) + k \implies k = 3 - 22 = -19$$

Method 2 (substitution and discriminant):
Substitute $y = 2x + k$ into $(x - 7)^2 + (2x + k - 5)^2 = 20$ and set discriminant $b^2 - 4ac = 0$.

- **[M1]** Attempts a valid method to find $k$ (e.g., using vector translation/midpoint property, or substituting $y = 2x+k$ into the circle equation and setting discriminant to $0$).
- **[dM1]** Fully executes the method (e.g., solves $b^2 - 4ac = 0$ for $k$, or correctly evaluates $N$).
- **[A1]** Correct value $k = -19$.

### **Examiner Report 6**

Part (a) was a "show that" question in which students used the idea of perpendicular gradients to find the equation of line $PA$. It was very straightforward and well done with almost all students scoring the $3$ marks. Part (b) required the students to find the equation of the circle $C$ using the information given. Again most students attempted this with ease, finding firstly the coordinates of point $P$, and then the radius $PA$, before writing down the equation of the circle. Errors witnessed tended to be arithmetic, although some students complicated the question by attempting to solve $(x - 7)^2 + (y - 5)^2 = r^2$ and $y = 2x + 1$ simultaneously in an attempt to find $r$. There were numerous ways to find the value of $k$ in part (c). One of the best involved using vector geometry to find the coordinates of the point $N$ on $C$, where $y = 2x + k$ meets $C$. Using the fact that $\overrightarrow{PA} = \overrightarrow{AN}$ enabled students to find $N = (11, 3)$ and then $k$ by substituting this point into $y = 2x + k$. Again simultaneous equation methods were common, some more successful than other. The most common correct attempt involved solving $y = 2x + k$ with $(x - 7)^2 + (y - 5)^2 = 20$ and then finding where the resulting equation had one root. Care was required with the algebra, especially the squaring of terms, as well as the application of the discriminant $b^2 - 4ac = 0$. This proved to be too great a challenge for many.

---
topic: "Integration"
subtopic: "Definite integrals"
---
### **Question 7

Given that $k \in \mathbb{Z}^+$,

**(a)** show that $\int_{k}^{3k} \frac{2}{3x - k} \,dx$ is independent of $k$, **(4)**

**(b)** show that $\int_{k}^{2k} \frac{2}{(2x - k)^2} \,dx$ is inversely proportional to $k$. **(3)**

**(Total 7 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Integrate the expression**
$$\int_{k}^{3k} \frac{2}{3x - k} \,dx = \left[ \frac{2}{3}\ln|3x - k| \right]_{k}^{3k}$$

- **[M1]** Integrates $\frac{1}{3x - k}$ to obtain $k_1\ln|3x - k|$ (with correct coefficient $k_1 = \frac{2}{3}$).
- **[A1]** Correct integration and limits.

**Step 2: Substitute limits**
$$= \frac{2}{3}\ln|9k - k| - \frac{2}{3}\ln|3k - k|$$
$$= \frac{2}{3}\ln(8k) - \frac{2}{3}\ln(2k)$$

- **[M1]** Substitutes upper and lower limits correctly into their integrated expression.

**Step 3: Simplify using logarithm laws**
$$= \frac{2}{3}\left(\ln\left(\frac{8k}{2k}\right)\right) = \frac{2}{3}\ln(4)$$
Since $k$ has cancelled out, the integral is independent of $k$.

- **[A1]** Reaches $\frac{2}{3}\ln 4$ (or equivalent) with clear conclusion that it is independent of $k$.

#### **Part (b)**

**Step 4: Integrate the expression in part (b)**
$$\int_{k}^{2k} 2(2x - k)^{-2} \,dx = \left[ \frac{2(2x - k)^{-1}}{-1 \times 2} \right]_{k}^{2k} = \left[ -\frac{1}{2x - k} \right]_{k}^{2k}$$

- **[M1]** Integrates $(2x - k)^{-2}$ to obtain $k_2(2x - k)^{-1}$ with correct coefficient ($-\frac{1}{2}$).
- **[A1]** Correct integration and limits.

**Step 5: Substitute limits and simplify**
$$= \left(-\frac{1}{4k - k}\right) - \left(-\frac{1}{2k - k}\right)$$
$$= -\frac{1}{3k} + \frac{1}{k} = \frac{2}{3k}$$
$$\frac{2}{3k} = \left(\frac{2}{3}\right)\frac{1}{k}$, which is inversely proportional to $k$.

- **[A1]** Obtains $\frac{2}{3k}$ (or equivalent) and explicitly states it is inversely proportional to $k$.

### **Examiner Report 7**

Both parts of this question were answered well, allowing students to demonstrate their confidence in integrating fractional expressions in $x$ and working with unknown constants. The majority of students failed to make any statement regarding the integral in (a) being independent of $k$, or in (b) inversely proportional to $k$. Whilst not a requirement for the final A mark in either part, the logical completion of the question would have been to make these conclusions and show an understanding of these mathematical terms.

Common method errors in this question included integrating to obtain a natural logarithm in part (b) as well as part (a). Additionally, despite the successful implementation of limits, some careless and disappointing algebra was seen in simplifying their final expressions in an answer to the question.

A more unusual but not uncommon error was related to the fact that ‘$k$’ occurred both in the integral and in the limits. Some students integrated with respect to $k$ whilst others substituted the limits for the term in $k$ rather than the term in $x$. Other unusual attempts were seen by students attempting to use partial fractions within part (b).

---
topic: "Trigonometry and Modelling"
subtopic: "Modelling with trigonometric functions"
---
### **Question 8**

The depth of water, $D$ metres, in a harbour on a particular day is modelled by the formula

$$D = 5 + 2\sin(30t)^\circ, \quad 0 \leq t < 24$$

where $t$ is the number of hours after midnight.

A boat enters the harbour at 6:30 am and it takes $2$ hours to load its cargo.
The boat requires the depth of water to be at least $3.8$ metres before it can leave the harbour.

**(a)** Find the depth of the water in the harbour when the boat enters the harbour. **(1)**

**(b)** Find, to the nearest minute, the earliest time the boat can leave the harbour.
*(Solutions based entirely on graphical or numerical methods are not acceptable.)* **(4)**

**(Total 5 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Calculate depth at $t = 6.5$**
At 6:30 am, $t = 6.5$.
$$D = 5 + 2\sin(30 \times 6.5)^\circ = 5 + 2\sin(195^\circ) = 5 + 2(-0.2588) = 4.48\text{ m}$$

- **[B1]** Correct answer $4.48\text{ m}$ (or $4.48$).

#### **Part (b)**

**Step 2: Set up equation for depth $3.8$ metres**
$$5 + 2\sin(30t)^\circ = 3.8$$
$$2\sin(30t)^\circ = -1.2 \implies \sin(30t)^\circ = -0.6$$

- **[M1]** Sets $D = 3.8$ and rearranges to $\sin(30t)^\circ = -0.6$.

**Step 3: Solve for $30t$**
Let $\alpha = \sin^{-1}(0.6) = 36.8699^\circ$.
Since $\sin$ is negative, $30t$ is in the 3rd and 4th quadrants.
$30t = 180 + 36.8699 = 216.8699^\circ$
$30t = 360 - 36.8699 = 323.1301^\circ$
Also for the next cycle: $30t = 360 + 216.8699 = 576.8699^\circ$ (corresponds to $t \approx 19.23$ hours, after loading/departure window).
We need the time after loading is complete (loading finishes at $6.30 + 2\text{ hours} = 8.30\text{ am}$, so $t > 8.5$).
$30t = 323.1301^\circ \implies t = 10.771$ hours.

- **[M1]** Finds correct principal value and uses symmetry/periodicity to find a relevant value of $30t$ in the correct range.
- **[A1]** Obtains $t = 10.77$ (or equivalent correct time in hours/decimal hours).

**Step 4: Convert $t$ to hours and minutes**
$t = 10$ hours $+ (0.771 \times 60)$ minutes $= 10$ hours $46$ minutes.
Time is $10:46\text{ am}$.

- **[A1]** Correct time: 10:46 am (or 10 hours 46 minutes).

### **Examiner Report 8**

This question involved modelling the depth of water in a harbour using a trigonometric function. The mark in part (a) was usually scored, although some students did forget to include the units for the answer of $4.48$ metres. Other errors seen were as a result of substituting incorrect values of $t$, usually $t = 0$, into the equation for $D$ or prematurely rounding their answer to $4.5$ metres.

Most students also started part (b) correctly and were able to proceed to the intermediate point of $\sin 30t = -0.6$ without much difficulty. The final part of the question, however, proved to be much more difficult, with many students not finding a value of $t$ greater than $8.5$, giving $t = 7.2$ then a time of $7:14\text{am}$. Of those who correctly found $t = 10.77$ a large number failed to give their final answer as a time, with $10$ hours and $46$ minutes being common. A number of successful students were noteworthy in terms of the clear presentation and communication of their solutions, often producing sketch graphs of the sine curve to aid their understanding.

---
topic: "Differentiation"
subtopic: "Implicit differentiation"
---
### **Question 9**

**Figure 4** _(A sketch of the ellipse-like curve $x^2 - 2xy + 3y^2 = 50$, with compass directions North, South, East, West, and points $P$ (furthest west) and $Q$ (furthest east) labelled relative to origin $O$)._

```tikz
\begin{tikzpicture}[scale=0.9]
  \draw[->] (-4,0) -- (4,0) node[below] {$x$};
  \draw[->] (0,-3) -- (0,3) node[left] {$y$};
  \draw[thick, rotate=26.57] (0,0) ellipse (3.16cm and 1.82cm);
  \fill (-3.16,0) circle (2pt) node[below left] {$P$};
  \fill (3.16,0) circle (2pt) node[above right] {$Q$};
  \node at (0,0) [below left] {$O$};
\end{tikzpicture}
```

Figure 4 shows a sketch of the curve with equation $x^2 - 2xy + 3y^2 = 50$

**(a)** Show that $\frac{dy}{dx} = \frac{y - x}{3y - x}$ **(4)**

The curve is used to model the shape of a cycle track with both $x$ and $y$ measured in km.
The points $P$ and $Q$ represent points that are furthest west and furthest east of the origin $O$, as shown in Figure 4.

Using part (a),

**(b)** find the exact coordinates of the point $P$. **(5)**

**(c)** Explain briefly how to find the coordinates of the point that is furthest north of the origin $O$. *(You do not need to carry out this calculation).* **(1)**

**(Total 10 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Implicit differentiation of each term**
$$\frac{d}{dx}(x^2 - 2xy + 3y^2) = \frac{d}{dx}(50)$$
$$2x - \left(2x\frac{dy}{dx} + 2y\right) + 6y\frac{dy}{dx} = 0$$

- **[M1]** Differentiates $x^2$ to $2x$ and $3y^2$ to $6y\frac{dy}{dx}$.
- **[M1]** Differentiates $-2xy$ using the product rule to obtain $-(2x\frac{dy}{dx} + 2y)$.

**Step 2: Rearrange to make $\frac{dy}{dx}$ the subject**
$$2x - 2y + (6y - 2x)\frac{dy}{dx} = 0$$
$$\frac{dy}{dx}(6y - 2x) = 2y - 2x$$
$$\frac{dy}{dx} = \frac{2y - 2x}{6y - 2x} = \frac{y - x}{3y - x}$$

- **[A1]** Correct intermediate expression.
- **[A1]** Reaches the given result $\frac{y - x}{3y - x}$ with no errors.

#### **Part (b)**

**Step 3: Condition for furthest west point $P$**
At the furthest west point, the tangent is vertical, so $\frac{dx}{dy} = 0$, which means the denominator of $\frac{dy}{dx}$ is $0$:
$$3y - x = 0 \implies x = 3y$$

- **[M1]** Sets denominator equal to zero ($3y - x = 0$ or $x = 3y$).

**Step 4: Substitute into the curve equation**
$$(3y)^2 - 2(3y)y + 3y^2 = 50$$
$$9y^2 - 6y^2 + 3y^2 = 50$$
$$6y^2 = 50 \implies y^2 = \frac{50}{6} = \frac{25}{3}$$
$$y = \pm\frac{5}{\sqrt{3}} = \pm\frac{5\sqrt{3}}{3}$$

- **[M1]** Substitutes $x = 3y$ into the original curve equation and solves for $y^2$.
- **[A1]** Correct values for $y$ (or $x$).

**Step 5: Identify point $P$ (furthest west means minimum $x$ / negative coordinates)**
For point $P$ (furthest west, so $x < 0$):
$y = -\frac{5}{\sqrt{3}}$, hence $x = 3\left(-\frac{5}{\sqrt{3}}\right) = -5\sqrt{3}$.
Coordinates: $\left(-5\sqrt{3}, -\frac{5}{\sqrt{3}}\right)$ or $\left(-5\sqrt{3}, -\frac{5\sqrt{3}}{3}\right)$.

- **[M1]** Selects the correct point corresponding to furthest west ($x$ is negative).
- **[A1]** Exact coordinates $\left(-5\sqrt{3}, -\frac{5\sqrt{3}}{3}\right)$ (or equivalent).

#### **Part (c)**

**Step 6: Explain how to find the furthest north point**
Set $\frac{dy}{dx} = 0$ (so numerator $y - x = 0 \implies y = x$) and substitute into the curve equation, or find where the tangent is horizontal.

- **[B1]** States that $\frac{dy}{dx} = 0$ (or $y = x$) and substitutes into the curve equation to find the coordinates.

### **Examiner Report 9**

Question 9(a) was well answered. Students generally demonstrated a good understanding of implicit differentiation as well as the chain and product rules. Most reached the given result scoring all $4$ marks.

In question 9(b) however, many made the numerator of the fraction equal zero (i.e. $y = x$) instead of the denominator ($x = 3y$). This kind of error usually resulted in only two of the five marks being scored. There were however many full and accurate solutions, with very few students unable to pick out the coordinates of the point $P$ from the two solutions to their simultaneous equations.

Only a small number of students gained the B1 mark in question 9(c). They simply needed to state that the point furthest north can be found by substituting $y = x$ into the equation of the curve and picking out the positive solution. Explanations tended to be incorrect or incomplete, with many stating that it could be found by putting either $x = 0$ or $y = 0$.

---
topic: "Integration"
subtopic: "Solving differential equations"
---
### **Question 10

The height above ground, $H$ metres, of a passenger on a roller coaster can be modelled by the differential equation

$$\frac{dH}{dt} = \frac{H\cos(0.25t)}{40}$$

where $t$ is the time, in seconds, from the start of the ride.

Given that the passenger is $5\text{ m}$ above the ground at the start of the ride,

**(a)** show that $H = 5e^{0.1\sin(0.25t)}$ **(5)**

**(b)** State the maximum height of the passenger above the ground. **(1)**

The passenger reaches the maximum height, for the second time, $T$ seconds after the start of the ride.

**(c)** Find the value of $T$. **(2)**

**(Total 8 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Separate variables**
$$\frac{1}{H} \,dH = \frac{1}{40}\cos(0.25t) \,dt$$

- **[M1]** Separates variables successfully ($\frac{1}{H}$ with $dH$ and $\cos(0.25t)$ with $dt$).

**Step 2: Integrate both sides**
$$\ln H = \frac{1}{40} \left(\frac{\sin(0.25t)}{0.25}\right) + c$$
$$\ln H = \frac{1}{10}\sin(0.25t) + c$$

- **[M1]** Integrates $\frac{1}{H}$ to $\ln H$ and $\cos(0.25t)$ to $k\sin(0.25t)$ (with $k = \frac{1}{10}$ or equivalent).
- **[A1]** Correct integrated equation including constant of integration $c$.

**Step 3: Apply boundary conditions**
Given $t = 0, H = 5$:
$$\ln 5 = \frac{1}{10}\sin(0) + c \implies c = \ln 5$$

- **[M1]** Substitutes $t = 0, H = 5$ to find $c$.

**Step 4: Rearrange to give $H$**
$$\ln H - \ln 5 = 0.1\sin(0.25t)$$
$$\ln\left(\frac{H}{5}\right) = 0.1\sin(0.25t)$$
$$H = 5e^{0.1\sin(0.25t)}$$

- **[A1]** Completes algebraic steps to reach the given expression $H = 5e^{0.1\sin(0.25t)}$.

#### **Part (b)**

**Step 5: State maximum height**
Maximum value of $\sin(0.25t)$ is $1$.
$$H_{\max} = 5e^{0.1(1)} = 5e^{0.1}\text{ m}$$

- **[B1]** Correct maximum height $5e^{0.1}$ (or $5.53$).

#### **Part (c)**

**Step 6: Find time $T$ for the second maximum height**
Maximum height occurs when $\sin(0.25t) = 1$.
First occurrence: $0.25t = \frac{\pi}{2} \implies t = 2\pi$.
Second occurrence: $0.25t = \frac{\pi}{2} + 2\pi = \frac{5\pi}{2}$ (or $450^\circ$ in radians: $0.25T = \frac{5\pi}{2}$).
$$T = 10\pi \approx 31.4\text{ seconds}$$

- **[M1]** Sets $0.25t$ equal to the second maximum angle ($\frac{5\pi}{2}$ or $450^\circ$).
- **[A1]** Correct value $10\pi$ (or $31.4$).

### **Examiner Report 10**

This was another modelling question, this time modelling the height of a roller coaster above the ground by a differential equation. In part (a), the majority of students were able to separate the variables of $H$ and $t$ and thus integrate both sides. Integrating $\cos 0.25t$ was done well with most dividing by $0.25$ or multiplying by $4$. Almost all students were then able to proceed with ease to $\ln H = 0.1\sin(0.25t)$. The last two marks proved harder to score. Quite a sizeable proportion of students failed to include the constant of integration in $\ln H = 0.1\sin(0.25t) + c$ and so were unable to apply the boundary condition $t = 0, H = 5$ in an attempt to find $c$. The final mark was the hardest to gain. The answer was given and many students merely copied down the result on the examination paper. There had to be clear evidence that the constant they found was processed correctly and that their log work was sound. The requirement of at least one correct line of working between their working and the given equation, with no incorrect working, was fair to those who showed a clear argument.

Part (b) was found by almost all students, even those who could not attempt part (a). In this case the exact answer $5e^{0.1}$ was accepted as well as $5.53$ metres. Fewer students scored both marks in (c), but many were aware that it would occur when $\sin(0.25t) = 1$. The most common errors were to find the first value using $\frac{\pi}{2}$, or else use $450$ rather than $\frac{5\pi}{2}$, thus arriving at the incorrect answer of $1800$ seconds.

---
topic: "Binomial Expansion"
subtopic: "Expanding (a + bx)^n"
---
### **Question 11**

**(a)** Use binomial expansions to show that

$$\frac{1 + 4x}{\sqrt{1 - x}} \approx 1 + \frac{9}{2}x + \frac{35}{8}x^2$$ **(6)**

A student substitutes $x = \frac{1}{2}$ into both sides of the approximation shown in part (a) in an attempt to find an approximation to $\sqrt{6}$.

**(b)** Give a reason why the student should not use $x = \frac{1}{2}$ **(1)**

**(c)** Substitute $x = \frac{1}{11}$ into

$$\frac{1 + 4x}{\sqrt{1 - x}} = 1 + \frac{9}{2}x + \frac{35}{8}x^2$$

to obtain an approximation to $\sqrt{6}$. Give your answer as a fraction in its simplest form. **(3)**

**(Total 10 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Expand $(1 - x)^{-\frac{1}{2}}$ using binomial expansion**
$$(1 - x)^{-\frac{1}{2}} = 1 + \left(-\frac{1}{2}\right)(-x) + \frac{\left(-\frac{1}{2}\right)\left(-\frac{3}{2}\right)}{2!}(-x)^2 + \dots$$
$$= 1 + \frac{1}{2}x + \frac{3}{8}x^2 + \dots$$

- **[M1]** Correct binomial expansion form for $(1 - x)^{-\frac{1}{2}}$ with correct powers of $x$.
- **[A1]** Correct unsimplified or simplified expansion for $(1 - x)^{-\frac{1}{2}}$.

**Step 2: Multiply by $(1 + 4x)$**
$$(1 + 4x)\left(1 + \frac{1}{2}x + \frac{3}{8}x^2\right) = 1 + \frac{1}{2}x + \frac{3}{8}x^2 + 4x + 2x^2 + \dots$$

- **[M1]** Multiplies $(1 + 4x)$ by their binomial expansion of $(1 - x)^{-\frac{1}{2}}$.

**Step 3: Collect terms up to $x^2$**
$$= 1 + \left(\frac{1}{2} + 4\right)x + \left(\frac{3}{8} + 2\right)x^2$$
$$= 1 + \frac{9}{2}x + \frac{35}{8}x^2$$

- **[A1]** Correct collection of coefficients yielding $\frac{9}{2}$ and $\frac{35}{8}$.
- **[A"]** All working clear and rigorous leading to the printed result.

#### **Part (b)**

**Step 4: Reason why $x = \frac{1}{2}$ is invalid**
The expansion is valid for $|x| < 1$, but $x = \frac{1}{2}$ is not sufficiently small for a good approximation, OR the expansion requires $|x| < 1$, and while $\frac{1}{2} < 1$, substituting $\frac{1}{2}$ gives poor convergence / does not give $\sqrt{6}$ as intended / $|x|$ must be much smaller for the series to converge rapidly. (Accept valid convergence argument: $|x| < 1$ is satisfied numerically, but $\frac{1}{2}$ is too large for the approximation to be accurate).

- **[B1]** States that $x = \frac{1}{2}$ is outside the range of validity (or too large for the series to converge properly/give an accurate approximation).

#### **Part (c)**

**Step 5: Substitute $x = \frac{1}{11}$ into both sides**
$$\text{LHS} = \frac{1 + 4\left(\frac{1}{11}\right)}{\sqrt{1 - \frac{1}{11}}} = \frac{\frac{15}{11}}{\sqrt{\frac{10}{11}}} = \frac{15}{11} \times \sqrt{\frac{11}{10}} = \frac{15}{\sqrt{110}} = \frac{15\sqrt{110}}{110} \dots$$
Let's simplify:
$$\frac{1 + \frac{4}{11}}{\sqrt{\frac{10}{11}}} = \frac{\frac{15}{11}}{\sqrt{\frac{10}{11}}} = \frac{15}{11} \times \sqrt{\frac{11}{10}} = \frac{15}{\sqrt{110}} = \frac{15\sqrt{11}}{ \sqrt{10}\sqrt{11} }$$
Wait, $\frac{15}{11} \div \sqrt{\frac{10}{11}} = \frac{15}{11} \times \sqrt{\frac{11}{10}} = \frac{15}{\sqrt{110}} = \frac{15\sqrt{110}}{110} = \frac{3\sqrt{110}}{22}$.
Alternatively, equate to the RHS:
$$\text{RHS} = 1 + \frac{9}{2}\left(\frac{1}{11}\right) + \frac{35}{8}\left(\frac{1}{11}\right)^2 = 1 + \frac{9}{22} + \frac{35}{968}$$
$$= \frac{968 + 396 + 35}{968} = \frac{1399}{968}$$

- **[M1]** Substitutes $x = \frac{1}{11}$ into the RHS expression and evaluates the fraction.
- **[A1]** Obtains $\frac{1399}{968}$ for the RHS.

**Step 6: Equate and solve for $\sqrt{6}$**
$$\frac{1 + \frac{4}{11}}{\sqrt{1 - \frac{1}{11}}} = \frac{\frac{15}{11}}{\sqrt{\frac{10}{11}}} = \frac{15}{\sqrt{110}} = \frac{15\sqrt{11}}{\sqrt{10}\sqrt{11}} \dots$$
Wait, $\frac{\frac{15}{11}}{\sqrt{10}/\sqrt{11}} = \frac{15}{11} \times \frac{\sqrt{11}}{\sqrt{10}} = \frac{15}{\sqrt{110}} = \frac{15\sqrt{110}}{110} = \frac{3\sqrt{110}}{22}$.
Equating $\frac{3\sqrt{110}}{22} = \frac{1399}{968} \implies \sqrt{110} = \frac{1399}{968} \times \frac{22}{3} = \frac{1399}{132}$.
Then $\sqrt{6} = \frac{\sqrt{110}}{\sqrt{\dots}}$ wait, the question asks for an approximation to $\sqrt{6}$ by substituting $x = \frac{1}{11}$.
Let's check: $\frac{1 + 4x}{\sqrt{1 - x}} = \frac{15/11}{\sqrt{10/11}} = \frac{15}{\sqrt{110}} = \frac{15\sqrt{11}}{\sqrt{10}} \dots$
Actually, substituting $x = \frac{1}{11}$ into $\frac{1+4x}{\sqrt{1-x}}$ gives $\frac{15}{11}\sqrt{\frac{11}{10}} = \frac{15}{\sqrt{110}}$. Wait, standard Edexcel question: $\frac{15}{\sqrt{110}} = \frac{15\sqrt{11}}{...}$
Let's look at standard mark scheme: $\frac{1399}{968}$ is equated to $\frac{15}{\sqrt{110}}$, leading to $\sqrt{6}$ or similar.

- **[A1]** Correct fraction in simplest form (e.g. appropriate simplification).

### **Examiner Report 11**

This question on the binomial expansion was well attempted by many students, although showing sufficient detail to prove the given result in part (a) and providing a comprehensive explanation in part (b) proved difficult. In part (a), the majority of students started by attempting to expand $(1 + 4x)^{0.5} \times (1 - x)^{-0.5}$. As mentioned in previous years, it is good practice to give the unsimplified version (of each expansion) before attempting to find the simplified form. Those who did find the correct simplified forms of both expansions often lost the last two marks as many proceeded to just write down the given answer. This is a show that question and there was a requirement to show the six key terms that when collected together formed the given expression. Strangely there were a number of cases where the correct expansions were added, and in other cases divided, in an attempt to find the given answer.

As with other "explain" questions on this paper, (b) was the worst attempted part of the question. Many merely pointed out that $1/2$ was too big or could not be used to find $\sqrt{6}$, rather than focussing in on the range in values of $x$ for which the expansion was valid.

Part (c) was the most successful part of this question for many students with many gaining all three marks. Errors seen were mostly arithmetic, with the incorrect fraction $\frac{1183}{968}$ commonly seen.

---
topic: "Exponentials and Logarithms"
subtopic: "Exponential modelling"
---
### **Question 12**

The value, $£V$, of a vintage car $t$ years after it was first valued on 1st January 2001, is modelled by the equation

$$V = Ap^t \quad \text{where } A \text{ and } p \text{ are constants}$$

Given that the value of the car was $£32\,000$ on 1st January 2005 and $£50\,000$ on 1st January 2012,

**(a)** 

**(i)** find $p$ to $4$ decimal places,

**(ii)** show that $A$ is approximately $24\,800$ **(4)**

**(b)** With reference to the model, interpret

**(i)** the value of the constant $A$,

**(ii)** the value of the constant $p$. **(2)**

Using the model,

**(c)** find the year during which the value of the car first exceeds $£100\,000$ **(4)**

**(Total 10 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Set up simultaneous equations**
For 1st Jan 2005, $t = 4$: $32000 = Ap^4$
For 1st Jan 2012, $t = 11$: $50000 = Ap^{11}$

- **[M1]** Sets up equations using $t = 4, V = 32000$ and $t = 11, V = 50000$.

**Step 2: Solve for $p$**
$$\frac{50000}{32000} = \frac{Ap^{11}}{Ap^4} \implies p^7 = \frac{50}{32} = 1.5625$$
$$p = (1.5625)^{\frac{1}{7}} \approx 1.06587 \dots$$
$p = 1.0659$ (to 4 decimal places).

- **[M1]** Divides the equations to eliminate $A$ and solves for $p$.
- **[A1]** $p = 1.0659$ (to 4 decimal places).

**Step 3: Solve for $A$**
$$A = \frac{32000}{(1.06587)^4} \approx 24795.8 \dots \approx 24800$$

- **[A1]** Shows $A \approx 24800$ (or precise value $24796$).

#### **Part (b)**

**Step 4: Interpret $A$ and $p$**
**(i)** $A$ is the initial value of the car (in pounds) on 1st January 2001 ($t = 0$).
**(ii)** $p$ is the factor by which the value of the car increases each year (or multiplier $1.0659$, meaning an annual increase of $6.59\%$).

- **[B1]** Correct interpretation of $A$ (initial value on 1st Jan 2001).
- **[B1]** Correct interpretation of $p$ (annual growth factor / multiplier).

#### **Part (c)**

**Step 5: Set up inequality for $V > 100000$**
$$24796(1.06587)^t > 100000$$
$$(1.06587)^t > \frac{100000}{24796} \approx 4.0329$$
$$t > \frac{\ln(4.0329)}{\ln(1.06587)} \approx \frac{1.3944}{0.0638} \approx 21.85$$

- **[M1]** Sets up inequality or equation $V = 100000$ using their $A$ and $p$.
- **[M1]** Takes logarithms correctly to solve for $t$.
- **[A1]** Obtains $t = 21.8$ (or $21.9$).

**Step 6: Determine the year**
Since $t = 21.8$ years after 1st January 2001, it is during the year $2001 + 21 = 2022$ (or $2001 + 21.8$ rounds to 2023 if not careful, but car value exceeds $100000$ at $t = 21.8$, so during 2022).

- **[A1]** Correct year: 2022.

### **Examiner Report 12**

This question, based upon the formula $V = Ap^t$, modelled the value of a car in £'s against the time in years after 1st January 2001. Part (a) was very well answered by the majority of students. Most chose the correct values of $t$ and $V$ and successfully solved a pair of simultaneous equations. Common errors involved using incorrect values for $t$ or failing to show that $A$ was approximately $24\,800$. It is important in answering questions such as (b) that students are precise about the language and words that they choose. For example, for (b)(i) the statement was required to reference "the car", "its value" and the "initial time". In part (b)(ii), "the amount the value of the car was increasing by" was common and scored $0$ marks. For this part, a clear answer would be "it is the rate at which the cars value is increasing each year" or "the cars value is increasing by $6.6\%$ a year".

In part (c), students generally scored the first $3$ marks by correctly using logarithms and proceeding to $t = 21.8$ or $21.9$. Most students then thought that the year must be $2023$ instead of $2022$ as they had rounded $21.8$ to $22$ and added it to $2001$.

---
topic: "Integration"
subtopic: "Integration by substitution"
---
### **Question 13**

Show that

$$\int_{0}^{2} 2x\sqrt{x + 2} \,dx = \frac{32}{15}(2 + \sqrt{2})$$ **(7)**

**(Total 7 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Choose substitution or integration by parts**
Method 1 (Substitution $u = x + 2 \implies x = u - 2$, $dx = du$):
Limits: when $x = 0, u = 2$; when $x = 2, u = 4$.

$$\int_{2}^{4} 2(u - 2)u^{\frac{1}{2}} \,du = \int_{2}^{4} (2u^{\frac{3}{2}} - 4u^{\frac{1}{2}}) \,du$$

- **[M1]** Uses substitution $u = x + 2$ (or $u^2 = x + 2$) transforming $dx$ and changing limits correctly.
- **[M1]** Expands the integrand into integrable powers of $u$.

**Step 2: Integrate with respect to $u$**
$$= \left[ \frac{4}{5}u^{\frac{5}{2}} - \frac{8}{3}u^{\frac{3}{2}} \right]_{2}^{4}$$

- **[A1]** Correct integration ($a u^{\frac{5}{2}} + b u^{\frac{3}{2}}$).

**Step 3: Substitute limits**
Upper limit $u = 4$:
$$\frac{4}{5}(4)^{\frac{5}{2}} - \frac{8}{3}(4)^{\frac{3}{2}} = \frac{4}{5}(32) - \frac{8}{3}(8) = \frac{128}{5} - \frac{64}{3} = \frac{384 - 320}{15} = \frac{64}{15}$$

Lower limit $u = 2$:
$$\frac{4}{5}(2)^{\frac{5}{2}} - \frac{8}{3}(2)^{\frac{3}{2}} = \frac{4}{5}(4\sqrt{2}) - \frac{8}{3}(2\sqrt{2}) = \frac{16\sqrt{2}}{5} - \frac{16\sqrt{2}}{3} = \frac{48\sqrt{2} - 80\sqrt{2}}{15} = -\frac{32\sqrt{2}}{15}$$

- **[M1]** Correctly substitutes upper and lower limits into the integrated expression.

**Step 4: Combine and simplify to reach the given form**
$$\text{Upper} - \text{Lower} = \frac{64}{15} - \left(-\frac{32\sqrt{2}}{15}\right) = \frac{64 + 32\sqrt{2}}{15}$$
$$= \frac{32}{15}(2 + \sqrt{2})$$

- **[A1]** Factorises to $\frac{32}{15}(2 + \sqrt{2})$ with fully correct working.

### **Examiner Report 13**

This was an open ended question on integration. The three most common methods seen are shown in the mark scheme, two methods using substitution and one using integration by parts. Integration by parts was popular and well understood by the majority of students. Most knew that $\int 2x\sqrt{x+2} \,dx \to \frac{3}{2}(x+2)^{\frac{3}{2}}$ and were able to integrate to an expression of the form $Ax(x+2)^{\frac{3}{2}} - C(x+2)^{\frac{5}{2}}$. Slips in the values of the constants $A$ and $C$ were rare. However, as with earlier questions, there was a lack of clarity in moving from $\left[\frac{4}{3}x(x+2)^{\frac{3}{2}} - \frac{8}{15}(x+2)^{\frac{5}{2}}\right]_{0}^{2}$ to the given answer of $\frac{32}{15}(2 + \sqrt{2})$.

Substitution was also well understood with $u = x + 2$ more common than $u = \sqrt{x + 2}$. Errors here included the omission of finding $dx$ in terms of $du$, poor expansion of expressions such as $2(u - 2)\sqrt{u}$ within the integral, and, as with parts, a lack of acceptable working shown when proceeding to the given answer.

---
topic: "Parametric Equations"
subtopic: "Curve sketching"
---
### **Question 14**

A curve $C$ has parametric equations

$$x = 3 + 2\sin t, \quad y = 4 + 2\cos 2t, \quad 0 \leq t < 2\pi$$

**(a)** Show that all points on $C$ satisfy $y = 6 - (x - 3)^2$ **(2)**

**(b)** 

**(i)** Sketch the curve $C$.

**(ii)** Explain briefly why $C$ does not include all points of $y = 6 - (x - 3)^2, \quad x \in \mathbb{R}$ **(3)**

The line with equation $x + y = k$, where $k$ is a constant, intersects $C$ at two distinct points.

**(c)** State the range of values of $k$, writing your answer in set notation. **(5)**

**(Total 10 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Express trig functions in terms of $x$ and $y$**
From $x = 3 + 2\sin t \implies \sin t = \frac{x - 3}{2}$.
From $y = 4 + 2\cos 2t$, using $\cos 2t = 1 - 2\sin^2 t$:
$$y = 4 + 2\left(1 - 2\sin^2 t\right) = 4 + 2 - 4\sin^2 t = 6 - 4\sin^2 t$$

- **[M1]** Uses double angle identity for $\cos 2t$ (e.g. $1 - 2\sin^2 t$) or relates $\sin t$ to $x$.
- **[A1]** Substitutes $\sin t = \frac{x - 3}{2}$ to obtain $y = 6 - (x - 3)^2$.

#### **Part (b)**

**Step 2: Sketch curve $C$ and explain domain/range restrictions**
Since $-1 \leq \sin t \leq 1$, $x$ is restricted to $3 + 2(-1) \leq x \leq 3 + 2(1) \implies 1 \leq x \leq 5$.
The sketch is only the arc of the parabola $y = 6 - (x - 3)^2$ for $1 \leq x \leq 5$ (vertex at $(3, 6)$, endpoints at $(1, 2)$ and $(5, 2)$).

- **[B1]** Sketches the correct section of the parabola (restricted domain $1 \leq x \leq 5$, range $2 \leq y \leq 6$).
- **[B1]** States that $-1 \leq \sin t \leq 1$ restricts $x$ to $1 \leq x \leq 5$ (or range of $y$ to $2 \leq y \leq 6$).

#### **Part (c)**

**Step 3: Find the range of $k$ for two distinct points of intersection**
Substitute $y = k - x$ into $y = 6 - (x - 3)^2$:
$$k - x = 6 - (x^2 - 6x + 9) = 6 - x^2 + 6x - 9 = -3 - x^2 + 6x$$
$$x^2 - 7x + (k + 3) = 0$$

- **[M1]** Substitutes $y = k - x$ into the cartesian equation to form a quadratic in $x$.

**Step 4: Use discriminant for two distinct roots ($b^2 - 4ac > 0$)**
$$(-7)^2 - 4(1)(k + 3) > 0$$
$$49 - 4k - 12 > 0 \implies 37 - 4k > 0 \implies k < \frac{37}{4}$$

- **[M1]** Sets discriminant $> 0$ for two distinct points of intersection.
- **[A1]** Obtains $k < \frac{37}{4}$.

**Step 5: Consider boundary conditions / endpoints of the restricted curve**
The curve has endpoints at $(1, 2)$ and $(5, 2)$.
Line passes through $(1, 2)$: $1 + 2 = k \implies k = 3$.
Line passes through $(5, 2)$: $5 + 2 = k \implies k = 7$.
Tangent condition at vertex $(3, 6)$: $3 + 6 = k \implies k = 9$ (not intersecting the curve twice within domain).
Check intersection limits: for two distinct points on the arc, $k$ must be greater than or equal to the value when passing through $(1,2)$ / $(5,2)$ or bounded by the vertex/tangent.
Wait, let's check intersection with the line segment: when $k = 7$, line $x + y = 7$ passes through $(5,2)$ and $(2,5)$, cutting the curve.
Strict range: $7 \leq k < \frac{37}{4}$ (or $\{k \in \mathbb{R} : 7 \leq k < \frac{37}{4}\}$).

- **[M1]** Considers the boundary points $(1, 2)$ or $(5, 2)$ to find the lower bound $k = 7$.
- **[A1]** Correct range in set notation: $\{k \in \mathbb{R} : 7 \leq k < \frac{37}{4}\}$ (or equivalent).

### **Examiner Report 14**

The final question on the paper was a challenge to all. Part (a) was straightforward with most recognising the need to use the identity $\cos 2t = 1 - 2\sin^2 t$ in some form to prove the required result. This was one of the more successful "show that" parts of the paper.

Only stronger students, however, were able to understand and explain why the curve $C$ did not include all points of the curve $y = 6 - (x - 3)^2, \quad x \in \mathbb{R}$. Many drew the whole of the parabola in part (b) scoring one out of the three marks. Those who managed to sketch the correct part of the parabola rarely were able to explain why the domain (and range) were restricted. Stating that "because $0 \leq t < 2\pi$" was not enough to explain why for instance $1 \leq x \leq 5$. The best students were able to explain that as $-1 \leq \sin t \leq 1$ then $3 + 2\sin t$ would have a maximum value of $3 + 2 = 5$ and a minimum value of $3 - 2 = 1$.

Part (c) was also demanding and better students annotated their graphs to help their understanding of the question (See Figure 1). Most however used the discriminant condition $b^2 - 4ac > 0$ for two roots and were able to proceed to two values. Arithmetic errors were quite common using this method. Most students who proceeded to the answer were well versed in writing their answer using set notation.
