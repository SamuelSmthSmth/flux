---
topic: "Functions and Graphs"
subtopic: "Inverse functions"
---
### **Question 1**

1. The function $f$ is given by
$$f(x) = x^2 - 4x + 9 \quad x \in \mathbb{R}, \; x \geqslant 3$$

**(a)** Find the range of $f$. **(2)**

The function $g$ is given by
$$g(x) = \frac{10}{x + 1} \quad x \in \mathbb{R}, \; x \geqslant 4$$

**(b)** Find an expression for $gf(x)$. **(1)**

**(c)** Find the domain and range of $gf$. **(4)**

**(Total 7 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Calculate the value at the boundary**
$$f(3) = 6$$
- **[M1]** Attempt $f(3)$

**Step 2: Determine the range of** $f$
$$f(x) = (x - 2)^2 + 5, \text{ so minimum at } (2, 5), \text{ therefore range is } f(x) \geqslant 6$$
- **[A1]** Correct range $f(x) \geqslant 6$

#### **Part (b)**

**Step 3: Form the composite function** $gf(x)$
$$gf(x) = \frac{10}{x^2 - 4x + 10}$$
- **[B1]** Correct expression (or equivalent)

#### **Part (c)**

**Step 4: Determine the domain of** $gf$
$$\text{Domain of } gf \text{ is domain of } f \text{ i.e. } x \geqslant 3$$
- **[B1]** Correct domain $x \geqslant 3$

**Step 5: Find the upper bound of the range**
$$\text{Range of } f \text{ is } f(x) \geqslant 6 \text{ so smallest value put into } g \text{ is } 6 \text{ giving } g(6) = \frac{10}{7}$$
- **[M1]** Attempt $g(6)$ or equivalent

**Step 6: Determine the lower bound as** $x \to \infty$
$$\text{As } x \to \infty \text{ then } gf \text{ and } g \to 0, \text{ so } gf(x) > 0$$
- **[B1]** $gf(x) > 0$ (not just in words)

**Step 7: State the complete range of** $gf$
$$\text{Range of } gf \text{ is } 0 < gf(x) \leqslant \frac{10}{7}$$
- **[A1]** Correct range $0 < gf(x) \leqslant \frac{10}{7}$ (allow B0A1 for $gf(x) \leqslant \frac{10}{7}$)

---
topic: "Trigonometric Functions"
subtopic: "Inverse trigonometric functions"
---
### **Question 2**

2. Find the value of
$$\arccos\left(\frac{1}{\sqrt{2}}\right) + \arcsin\left(\frac{1}{3}\right) + 2\arctan\left(\frac{1}{\sqrt{2}}\right)$$

Give your answer as a multiple of $\pi$.

$(\arccos x \text{ is an alternative notion for } \cos^{-1} x \text{ etc.})$

**(Total 7 marks)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Evaluate the inverse cosine term**
$$\arccos\left(\frac{1}{\sqrt{2}}\right) = \frac{\pi}{4}$$
- **[B1]** State $\frac{\pi}{4}$

**Step 2: Define and relate the inverse sine term**
$$\arcsin\left(\frac{1}{3}\right) = \alpha \Rightarrow \sin\alpha = \frac{1}{3}$$
- **[B1]** $\sin\alpha = \frac{1}{3}$ and right-angled triangle or equivalent with $\alpha$ indicated

**Step 3: Define the double arctan term**
$$2\arctan\left(\frac{1}{\sqrt{2}}\right) = \beta \Rightarrow \tan\left(\frac{\beta}{2}\right) = \frac{1}{\sqrt{2}}$$
- **[M1]** Relevant use of $\tan\left(\frac{\beta}{2}\right)$ or cosine rule

**Step 4: Apply double angle identity for tangent**
$$\tan\beta = \frac{2 \times \frac{1}{\sqrt{2}}}{1 - \left(\frac{1}{\sqrt{2}}\right)^2} = 2\sqrt{2}$$
- **[M1]** Attempt to use $\tan(2A)$ formula or get trigonometric ratio for $\beta$
- **[A1]** $\tan\beta = 2\sqrt{2}$ (or $\cos\beta = \frac{1}{3}$)

**Step 5: Relate angles** $\alpha$ **and** $\beta$
$$\text{Use of triangle or other link between } \alpha \text{ and } \beta \text{ (e.g. } \cos\beta = \frac{1}{3} \Rightarrow \alpha + \beta = \frac{\pi}{2}\text{)}$$
- **[M1]** Link between $\alpha$ and $\beta$

**Step 6: Calculate the total sum**
$$\text{So answer is } \frac{\pi}{4} + \frac{\pi}{2} = \frac{3\pi}{4}$$
- **[A1]** Correct final answer $\frac{3\pi}{4}$

---
topic: "Vectors"
subtopic: "Vectors in 3D"
---
### **Question 3**

3. The points $A$, $B$, $C$, $D$ and $E$ are five of the vertices of a rectangular cuboid and $AE$ is a diagonal of the cuboid. With respect to a fixed origin $O$, the position vectors of $A$, $B$, $C$ and $D$ are $\mathbf{a}$, $\mathbf{b}$, $\mathbf{c}$ and $\mathbf{d}$ respectively, where
$$\mathbf{a} = \begin{pmatrix} 1 \\ 2 \\ -1 \end{pmatrix}, \quad \mathbf{b} = \begin{pmatrix} 0 \\ -3 \\ -8 \end{pmatrix}, \quad \mathbf{c} = \begin{pmatrix} 4 \\ -1 \\ -10 \end{pmatrix} \quad \text{and} \quad \mathbf{d} = \begin{pmatrix} -4 \\ 2 \\ -11 \end{pmatrix}$$

**(a)** Find the position vector of $E$. **(6)**

The volume of a tetrahedron is given by the formula
$$\text{volume} = \frac{1}{3}(\text{area of base}) \times (\text{height})$$

**(b)** Find the volume of the tetrahedron $ABCD$. **(3)**

**(Total 9 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Find vector displacements between vertices**
$$\vec{AB} = \begin{pmatrix} -1 \\ -5 \\ -7 \end{pmatrix}, \quad \vec{AC} = \begin{pmatrix} 3 \\ -3 \\ -9 \end{pmatrix}, \quad \vec{AD} = \begin{pmatrix} -5 \\ 0 \\ -10 \end{pmatrix}, \quad \vec{BC} = \begin{pmatrix} 4 \\ 2 \\ -2 \end{pmatrix}, \quad \vec{BD} = \begin{pmatrix} -4 \\ 5 \\ -3 \end{pmatrix}, \quad \vec{CD} = \begin{pmatrix} -8 \\ 3 \\ -1 \end{pmatrix}$$
$$\text{or } |\vec{AB}| = \sqrt{75}, \quad |\vec{AC}| = \sqrt{99}, \quad |\vec{AD}| = \sqrt{125}, \quad |\vec{BC}| = \sqrt{24}, \quad |\vec{BD}| = \sqrt{50}, \quad |\vec{CD}| = \sqrt{74}$$
- **[M1]** Attempt at least 3 displacement vectors (at least 2 correct). Can be vectors or magnitudes.

**Step 2: Identify perpendicular edges using scalar products**
$$\vec{AB} \cdot \vec{BC} = -4 - 10 + 14 = 0$$
$$\vec{AB} \cdot \vec{BD} = 4 - 25 + 21 = 0$$
$$\vec{BC} \cdot \vec{BD} = -16 + 10 + 6 = 0$$
- **[dM1]** Seek perpendicular vectors. Check at least one correct pair using Pythagoras or scalar product.
- **[A1]** First edge check correct ($\vec{AB}, \vec{BC}, \vec{BD}$).
- **[A1]** Second edge check correct.

**Step 3: Express** $\vec{OE}$ **in terms of known vectors**
$$\vec{OE} = \vec{OD} + \vec{DE} = \vec{OD} + \vec{BC} \quad \text{(or equivalent)}$$
- **[M1]** Correct expression for $\vec{OE}$.

**Step 4: Calculate position vector of** $E$
$$\vec{OE} = \begin{pmatrix} -4 \\ 2 \\ -11 \end{pmatrix} + \begin{pmatrix} 4 \\ 2 \\ -2 \end{pmatrix} = \begin{pmatrix} 0 \\ 4 \\ -13 \end{pmatrix}$$
- **[A1]** Correct position vector of $E$.

#### **Part (b)**

**Step 5: Find lengths of the three perpendicular edges meeting at** $B$
$$|\vec{AB}| = \sqrt{1 + 25 + 49} = \sqrt{75}, \quad |\vec{BC}| = \sqrt{24}, \quad |\vec{BD}| = \sqrt{50}$$
- **[M1]** Attempt 3 relevant edge lengths and try area formula.

**Step 6: Set up the volume calculation**
$$\text{volume} = \frac{1}{3} \times \left(\frac{1}{2} \times |\vec{BC}| \times |\vec{BD}|\right) \times |\vec{AB}| = \frac{1}{3} \times \frac{1}{2} \times 2\sqrt{6} \times 5\sqrt{2} \times 5\sqrt{3}$$
- **[M1]** Suitable expression for volume.

**Step 7: Evaluate the volume**
$$\text{volume} = 50$$
- **[A1]** Correct volume $50$.

---
topic: "Exponentials and Logarithms"
subtopic: "Laws of logarithms"
---
### **Question 4**

4. **(a)** Given that $x > 0$, $y > 0$, $x \neq 1$ and $n > 0$, show that
$$\log_x y = \log_{x^n} y^n$$ **(2)**

**(b)** Solve the following, leaving your answers in the form $2^p$, where $p$ is a rational number.

**(i)** $\log_2 u + \log_4 u^2 + \log_8 u^3 + \log_{16} u^4 = 5$ **(2)**

**(ii)** $\log_2 v + \log_4 v + \log_8 v + \log_{16} v = 5$ **(3)**

**(iii)** $\log_4 w^2 + \frac{3\log_8 64}{\log_2 w} = 5$ **(4)**

**(Total 11 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Use exponential form or change of base**
$$\log_x y = k \Rightarrow x^k = y \Rightarrow y^n = (x^k)^n = (x^n)^k \quad \text{or use } \log_{x^n} y^n = \frac{\log_x y^n}{\log_x x^n} = \frac{n\log_x y}{n}$$
- **[M1]** Out of logs and $y^n$ attempt or suitable first step / base change.

**Step 2: Complete the proof**
$$y^n = (x^n)^k \Rightarrow \log_{x^n} y^n = k = \log_x y$$
- **[A1]** Fully correct proof with no errors (cso).

#### **Part (b)**

**Step 3: Solve part (b)(i)**
$$\text{LHS} = \log_2 u + \log_2 u + \log_2 u + \log_2 u = 4\log_2 u$$
- **[M1]** All same base and add.

$$4\log_2 u = 5 \Rightarrow \log_2 u = \frac{5}{4} \Rightarrow u = 2^{\frac{5}{4}}$$
- **[A1]** Correct value $u = 2^{\frac{5}{4}}$ (allow $p = 1.25$).

**Step 4: Solve part (b)(ii) - convert terms to a common base**
$$\log_{16} v^4 + \log_{16} v^2 + \log_{16} v^{\frac{4}{3}} + \log_{16} v \quad \text{or} \quad \log_2 v + \log_2 v^{\frac{1}{2}} + \log_2 v^{\frac{1}{3}} + \log_2 v^{\frac{1}{4}}$$
- **[M1]** All same base.

**Step 5: Combine into a single logarithm**
$$= \log_{16} v^{\frac{25}{3}} = \log_2 v^{\frac{25}{12}}$$
- **[M1]** Express as a single log.

**Step 6: Solve for** $v$
$$\frac{25}{12} \log_2 v = 5 \Rightarrow \log_2 v = \frac{60}{25} = \frac{12}{5} \Rightarrow v = 2^{\frac{12}{5}}$$
- **[A1]** Correct answer $v = 2^{\frac{12}{5}}$ (allow $p = 2.4$).

**Step 7: Solve part (b)(iii) - evaluate** $\log_8 64$ **and change base**
$$\log_4 w^2 = \log_2 w, \quad 3\log_8 64 = 3 \times 2 = 6$$
$$\text{LHS} = \log_2 w + \frac{6}{\log_2 w}$$
- **[M1]** Evaluate $\log_8 64$ and logs to same base.

**Step 8: Form quadratic equation in** $\log_2 w$
$$\text{Sub } t = \log_2 w \Rightarrow t + \frac{6}{t} = 5 \Rightarrow t^2 - 5t + 6 = 0 \Rightarrow (t - 3)(t - 2) = 0$$
- **[M1]** Reduce to 3-term quadratic equation.

**Step 9: Solve for** $w$
$$\log_2 w = 2 \Rightarrow w = 2^2 \quad \text{and} \quad \log_2 w = 3 \Rightarrow w = 2^3$$
- **[A1]** $t = 2$ and $t = 3$.
- **[A1]** Final values $w = 2^2$ and $2^3$ (accept 4 and 8).

---
topic: "Sequences and Series"
subtopic: "Geometric series"
---
### **Question 5**

5. **(a)** Show that
$$\sum_{r=0}^n x^{-r} = \frac{x}{x-1} - \frac{x^{-n}}{x-1} \quad \text{where } x \neq 0 \text{ and } x \neq 1$$ **(2)**

**(b)** Hence find an expression in terms of $x$ and $n$ for
$$\sum_{r=0}^n r x^{-(r+1)} \quad \text{for } x \neq 0 \text{ and } x \neq 1$$
Simplify your answer. **(4)**

**(c)** Find
$$\sum_{r=0}^n \left( \frac{3 + 5r}{2^r} \right)$$
Give your answer in the form $a - \frac{b + cn}{2^n}$, where $a$, $b$ and $c$ are integers. **(7)**

**(Total 13 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Identify geometric progression and sum formula**
$$\text{GP with } a = 1, \; r = \frac{1}{x} \text{ so } S_{n+1} = \frac{1(1 - x^{-(n+1)})}{1 - x^{-1}}$$
- **[M1]** Identify correct GP and attempt sum. Allow $n$ instead of $n+1$ terms initially.

**Step 2: Simplify to the required form**
$$\text{Multiply top and bottom by } x \text{ and open bracket} = \frac{x}{x-1} - \frac{x^{-n}}{x-1}$$
- **[A1]** Fully correct proof with no incorrect working seen (cso).

#### **Part (b)**

**Step 3: Differentiate the series equation**
$$\frac{d}{dx}\left( \sum_{r=0}^n x^{-r} \right) = -\sum_{r=0}^n r x^{-(r+1)} \quad \text{so differentiate both sides with respect to } x$$
- **[M1]** Identify need to differentiate and differentiate LHS.

**Step 4: Differentiate the RHS using the quotient rule**
$$\frac{d}{dx}(\text{RHS}) = \left[ \frac{(x-1) \cdot 1 - x \cdot 1}{(x-1)^2} \right] - \left[ \frac{(x-1)(-n x^{-(n+1)}) - x^{-n} \cdot 1}{(x-1)^2} \right]$$
- **[M1]** Some correct use of quotient rule.
- **[A1]** Correct differentiation of RHS.

**Step 5: Rearrange and simplify**
$$\sum_{r=0}^n r x^{-(r+1)} = \frac{1 + n x^{-(n+1)} - (n+1)x^{-n}}{(x-1)^2}$$
- **[A1]** A correct expression with common denominator and like terms collected.

#### **Part (c)**

**Step 6: Split the sum**
$$\text{Sum} = \sum_{r=0}^n 3 \times 2^{-r} + \sum_{r=0}^n 5r \times 2^{-r}$$
- **[M1]** Split sum.

**Step 7: Evaluate the first summation**
$$\sum_{r=0}^n 3 \times 2^{-r} = 3(2 - 2^{-n})$$
- **[M1]** Use of $x = 2$ in part (a).
- **[A1]** Correct evaluation $3(2 - 2^{-n})$.

**Step 8: Evaluate the second summation**
$$\sum_{r=0}^n 5r \times 2^{-r} = 10 \sum_{r=0}^n r \times 2^{-(r+1)} = 10 \left[ 1 + \frac{n \times 2^{-(n+1)} - (n+1) \times 2^{-n}}{1} \right]$$
- **[M1]** Into form for (b) ($x = 2$ and factor of 10 needed).
- **[dM1]** Use $x = 2$ in their formula from (b).

**Step 9: Combine and format the answer**
$$\text{Sum} = 16 - \frac{13 + 5n}{2^n}$$
- **[A2]** Correct answer $16 - \frac{13 + 5n}{2^n}$ or $a = 16$, $b = 13$ and $c = 5$ (-1 for each error).

---
topic: "Integration"
subtopic: "Areas between curves and lines"
---
### **Question 6**

6. **Figure 1** _(A sketch of the curve $C_1$ with equation $y = \cos(\cos x)\sin x$ for $0 \leqslant x \leqslant \pi$, starting at the origin, reaching a maximum near $x = \pi/2$, and returning to zero at $x = \pi$.)_

Figure 1 shows a sketch of the curve $C_1$ with equation
$$y = \cos(\cos x) \sin x \quad \text{for } 0 \leqslant x \leqslant \pi$$

**(a)** Find $\frac{dy}{dx}$. **(3)**

**(b)** Hence verify that the turning point is at $x = \frac{\pi}{2}$ and find the $y$ coordinate of this point. **(2)**

**(c)** Find the area of the region bounded by $C_1$ and the positive $x$-axis between $x = 0$ and $x = \pi$. **(4)**

Figure 2 shows a sketch of the curve $C_1$ and the curve $C_2$ with equation
$$y = \sin(\cos x) \sin x \quad \text{for } 0 \leqslant x \leqslant \pi$$

**Figure 2** _(A sketch showing curves $C_1$ and $C_2$ between $x = 0$ and $x = \pi$, intersecting at the origin and at point $A(a, b)$.)_

The curves $C_1$ and $C_2$ intersect at the origin and the point $A(a, b)$, where $a < \pi$.

**(d)** Find $a$ and $b$, giving $b$ in a form not involving trigonometric functions. **(5)**

**(e)** Find the area of the shaded region between $C_1$ and $C_2$. **(8)**

**(Total 22 marks)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Apply product rule and chain rule to find** $\frac{dy}{dx}$
$$\frac{dy}{dx} = -\sin(\cos x) \times (-\sin x) \times \sin x + \cos(\cos x) \times \cos x$$
- **[M1]** Use of product rule with 2 terms (allow slips).
- **[A1]** First term correct: $\sin(\cos x)\sin^2 x$.
- **[A1]** Second term correct: $\cos(\cos x)\cos x$.
$$\frac{dy}{dx} = \sin(\cos x)\sin^2 x + \cos(\cos x)\cos x$$

#### **Part (b)**

**Step 2: Verify turning point at** $x = \frac{\pi}{2}$
$$\text{Sub } x = \frac{\pi}{2} \Rightarrow \frac{dy}{dx} = \sin(0)\sin^2\left(\frac{\pi}{2}\right) + \cos(0)\cos\left(\frac{\pi}{2}\right) = 0 \cdot 1 + 1 \cdot 0 = 0$$
- **[B1ft]** Shows turning point correctly (follow through their $\frac{dy}{dx}$).

**Step 3: Calculate the** $y$-coordinate
$$y = \cos\left(\cos\frac{\pi}{2}\right)\sin\left(\frac{\pi}{2}\right) = \cos(0) \cdot 1 = 1$$
- **[B1]** Correct $y$-coordinate $y = 1$.

#### **Part (c)**

**Step 4: Integrate** $y = \cos(\cos x)\sin x$
$$\int \cos(\cos x)\sin x \, dx = -\sin(\cos x)$$
- **[M1]** Suitable integration method.
- **[A1]** Correct antiderivative $-\sin(\cos x)$.

**Step 5: Apply limits** $0$ **and** $\pi$
$$\text{Area} = [-\sin(\cos x)]_0^\pi = (-\sin(-1)) - (-\sin(1))$$
- **[dM1]** Correct use of limits.

**Step 6: Simplify the area**
$$= 2\sin 1$$
- **[A1]** Correct value $2\sin 1$ (not $\sin(1) - \sin(-1)$).

#### **Part (d)**

**Step 7: Equate equations of** $C_1$ **and** $C_2$
$$\sin(\cos x)\sin x = \cos(\cos x)\sin x \Rightarrow \tan(\cos x) = 1 \quad (\text{for } \sin x \neq 0)$$
- **[M1]** Form equation and cancel $\sin x$.
- **[M1]** Reach $\tan(\cos x) = 1$ (or equivalent).

**Step 8: Solve for** $a$
$$\cos x = \frac{\pi}{4} \Rightarrow a = \arccos\left(\frac{\pi}{4}\right)$$
- **[A1]** $a = \arccos\left(\frac{\pi}{4}\right)$.

**Step 9: Calculate** $b$ **in non-trigonometric form**
$$\text{Using right triangle or identity for } \sin a = \sqrt{1 - \cos^2 a} = \sqrt{1 - \frac{\pi^2}{16}}$$
$$b = \frac{1}{\sqrt{2}} \frac{\sqrt{16 - \pi^2}}{4} = \frac{\sqrt{32 - 2\pi^2}}{8}$$
- **[M1]** Triangle or method for $\sin x$.
- **[A1]** Correct surd expression for $b$ (must see $\pi$).

#### **Part (e)**

**Step 10: Integrate outer curve** $C_2$ **from** $0$ **to** $a$
$$\int_0^a \sin(\cos x)\sin x \, dx = [\cos(\cos x)]_0^a = \cos\left(\frac{\pi}{4}\right) - \cos(1) = \frac{1}{\sqrt{2}} - \cos 1$$
- **[M1]** Suitable integration method.
- **[A1]** Correct antiderivative $\cos(\cos x)$.
- **[M1]** Follow through use of their limits.
- **[A1]** Correct value $\frac{1}{\sqrt{2}} - \cos 1$.

**Step 11: Integrate inner curve** $C_1$ **from** $0$ **to** $a$
$$\int_0^a \cos(\cos x)\sin x \, dx = [-\sin(\cos x)]_0^a = -\sin\left(\frac{\pi}{4}\right) + \sin 1 = -\frac{1}{\sqrt{2}} + \sin 1$$
- **[M1]** Use of their limits, follow through integration from (c).
- **[A1]** Correct value $-\frac{1}{\sqrt{2}} + \sin 1$.

**Step 12: Subtract inner area from outer area**
$$\text{Shaded area} = \left(\frac{1}{\sqrt{2}} - \cos 1\right) - \left(-\frac{1}{\sqrt{2}} + \sin 1\right)$$
- **[M1]** Follow through outer minus inner area.

**Step 13: Simplify the shaded area**
$$= \sqrt{2} - \cos 1 - \sin 1$$
- **[A1]** Correct final simplified area $\sqrt{2} - \cos 1 - \sin 1$.

---
topic: "Graphs and Transformations"
subtopic: "Transforming functions"
---
### **Question 7**

7. **(a)** Find the set of values of $k$ for which the equation
$$\frac{x^2 + 3x + 8}{x^2 + x - 2} = k$$
has no real roots. **(6)**

**Figure 3** _(A sketch of the curve $C_1$ with equation $y = f(x)$, showing vertical asymptotes at $x = a$ and $x = b$, and a horizontal asymptote at $y = c$.)_

Figure 3 shows a sketch of the curve $C_1$ with equation $y = f(x)$ where $f(x) = \frac{x^2 + 3x + 8}{x^2 + x - 2}$.
The curve has asymptotes $x = a$, $x = b$ and $y = c$, where $a$, $b$ and $c$ are integers.

**(b)** Find the value of $a$, the value of $b$ and the value of $c$. **(4)**

**(c)** Find the coordinates of the points of intersection of $C_1$ with the line $y = 2$. **(3)**

**(d)** Find all the integer pairs $(r, s)$ that satisfy
$$s = \frac{r^2 + 3r + 8}{r^2 + r - 2}$$ **(4)**

The curve $C_2$ has equation $y = g(x)$ where $g(x) = \frac{2x^2 - 4x + 6}{x^2 - 3x}$.

**(e)** Show that, for suitable integers $m$ and $n$, $g(x)$ can be written in the form $f(x + m) + n$. **(4)**

**(f)** Sketch $C_2$, showing any asymptotes and stating their equations. **(3)**

**(Total 24 marks)**

### **Mark Scheme 7**

#### **Part (a)**

**Step 1: Rearrange into a quadratic equation in** $x$
$$x^2 + 3x + 8 = kx^2 + kx - 2k \Rightarrow (k - 1)x^2 + (k - 3)x - (2k + 8) = 0$$
- **[M1]** 3-term quadratic in $x$ (2 correct coefficients $\pm 1$ and $\pm 3$).

**Step 2: Set up the discriminant condition for no real roots**
$$b^2 - 4ac < 0 \Rightarrow (k - 3)^2 + 4(k - 1)(2k + 8) < 0$$
- **[M1]** Attempt discriminant.

**Step 3: Simplify the discriminant quadratic**
$$k^2 - 6k + 9 + 8k^2 + 24k - 32 < 0 \Rightarrow 9k^2 + 18k - 23 < 0$$
- **[M1]** Form 3-term quadratic in $k$.
- **[A1]** Correct quadratic $9k^2 + 18k - 23 < 0$.

**Step 4: Find critical values**
$$(k + 1)^2 - 1 - \frac{23}{9} < 0 \Rightarrow k = -1 \pm \frac{4\sqrt{2}}{3}$$
- **[M1]** Attempt critical values (at least 1 correct).

**Step 5: Write the set of values for** $k$
$$-1 - \frac{4\sqrt{2}}{3} < k < -1 + \frac{4\sqrt{2}}{3}$$
- **[A1cso]** Correct limits with clear use of $< 0$.

#### **Part (b)**

**Step 6: Factorise the denominator to find vertical asymptotes**
$$x^2 + x - 2 = (x + 2)(x - 1) = 0 \Rightarrow x = -2 \text{ or } x = 1$$
- **[M1]** Factorise denominator.
- **[A1]** $a = -2$.
- **[A1]** $b = 1$.

**Step 7: Determine the horizontal asymptote**
$$\text{Division or limits of } x \Rightarrow y = 1 \text{ so } c = 1$$
- **[B1]** $c = 1$.

#### **Part (c)**

**Step 8: Set** $f(x) = 2$ **and simplify**
$$f(x) = 2 \Rightarrow x^2 - x - 12 = 0$$
- **[M1]** Form suitable equation.

**Step 9: Solve the quadratic equation**
$$(x - 4)(x + 3) = 0 \Rightarrow x = 4 \text{ or } x = -3$$
- **[M1]** Solve quadratic equation.

**Step 10: State coordinates of intersection points**
$$\text{Coordinates are } (-3, 2) \text{ and } (4, 2)$$
- **[A1]** Both coordinates correct.

#### **Part (d)**

**Step 11: Test small integer values of** $r$
$$\text{Check } r = 0 \text{ and } -1 \text{ gives pairs } (0, -4) \text{ and } (-1, -3)$$
- **[B1]** $(0, -4)$ pair.
- **[B1]** $(-1, -3)$ pair.

**Step 12: Check** $s = 1$ **and** $s = 2$
$$\text{Check } s = 1 \text{ gives } (-5, 1); \text{ from part (c), } s = 2 \text{ gives } (-3, 2) \text{ and } (4, 2)$$
- **[M1]** Check $y = 1$ or list values.
- **[A1]** All 3 additional pairs $(-5, 1)$, $(-3, 2)$, $(4, 2)$ found and verified that $r = 2, 3$ give no integer solutions.

#### **Part (e)**

**Step 13: Determine horizontal translation** $m$
$$\text{Consider denominator and see } m = -2$$
- **[B1]** $m = -2$.

**Step 14: Determine vertical translation** $n$
$$\text{Consider coefficients of } x^2 \text{ giving } n = 1$$
- **[B1]** $n = 1$.

**Step 15: Verify by substitution**
$$f(x - 2) + 1 = \frac{(x - 2)^2 + 3(x - 2) + 8}{(x - 2)^2 + (x - 2) - 2} + 1 = \frac{x^2 - 4x + 4 + 3x - 6 + 8 + x^2 - 3x}{x^2 - 3x}$$
$$= \frac{2x^2 - 4x + 6}{x^2 - 3x} = g(x)$$
- **[M1]** Attempt to show by suitable substitution.
- **[A1cso]** Complete verification showing $g(x)$.

#### **Part (f)**

**Step 16: Sketch transformed curve** $C_2$
$$\text{Horizontal translation to right or middle part (no crossing with } x\text{-axis)}$$
- **[B1ft]** Follow through their $m$.

$$\text{Vertical translation up or LH \& RH parts (LH must cross their } y = 2\text{)}$$
- **[B1ft]** Follow through their $n$.

**Step 17: State asymptote equations**
$$\text{Asymptotes are } x = 3 \quad \text{and} \quad y = 2 \quad (\text{and } x = 0)$$
- **[B1]** Correct asymptotes $x = 3$ and $y = 2$ (must be equations, condone no $x = 0$).
