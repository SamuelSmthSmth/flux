---
topic: "Number Theory"
subtopic: "Divisibility tests"
---
### **Question 1**

**(i)** Using a suitable algorithm and without performing any division, determine whether $23738$ is divisible by $11$ **(2)**

**(ii)** Use the Euclidean algorithm to find the highest common factor of $2322$ and $654$ **(3)**

**(Total for Question 1 is 5 marks)**

### **Mark Scheme 1**

#### **Part (i)**

**Step 1: Apply the alternating sum test for divisibility by 11**
$$2 - 3 + 7 - 3 + 8 = 11$$

- **[M1]** Alternating sum attempted with correct signs and digits.
- **[A1]** Correctly evaluates to $11$ (or a multiple of 11) and concludes that $23738$ is divisible by $11$.

#### **Part (ii)**

**Step 2: Apply successive divisions using the Euclidean algorithm**
$$2322 = 3 \times 654 + 360$$
$$654 = 1 \times 360 + 294$$
$$360 = 1 \times 294 + 66$$
$$294 = 4 \times 66 + 30$$
$$66 = 2 \times 30 + 6$$
$$30 = 5 \times 6 + 0$$

- **[M1]** Sets up the Euclidean algorithm with at least two correct successive division statements.
- **[M1]** Continues the process until a remainder of zero is reached.
- **[A1]** Identifies $6$ as the highest common factor.

---
topic: "Groups"
subtopic: "Axioms of a group"
---
### **Question 2**

**Figure 1** _(An equilateral triangle $ABC$ with internal symmetry lines $x$, $y$, and $z$ intersecting at the center $O$)._

```tikz
\begin{tikzpicture}[scale=1.2]
  \coordinate (A) at (0,2);
  \coordinate (B) at (-1.732,-1);
  \coordinate (C) at (1.732,-1);
  \coordinate (O) at (0,0);
  \draw[thick] (A) -- (B) -- (C) -- cycle;
  \draw[dashed] (A) -- (O) node[right, above] {$y$} -- (B) node[below left] {$x$ (or z)};
  \draw[dashed] (B) -- (O) -- (C);
  \draw[dashed] (C) -- (O) -- (A);
  \node[above] at (A) {$A$};
  \node[below left] at (B) {$B$};
  \node[below right] at (C) {$C$};
  \node[above left] at (O) {$O$};
  \path (O) -- (A) node[midway, right] {$z$};
  \path (O) -- (B) node[midway, above left] {$x$};
  \path (O) -- (C) node[midway, above right] {$y$};
\end{tikzpicture}
```

Figure 1 shows an equilateral triangle $ABC$. The lines $x$, $y$ and $z$ and their point of intersection, $O$, are fixed in the plane. The triangle $ABC$ is transformed about these fixed lines and the fixed point $O$. The lines $x$, $y$ and $z$ each pass through a vertex of the triangle and the midpoint of the opposite side.

The transformations $I$, $X$, $Y$, $Z$, $R_1$ and $R_2$ of the plane containing triangle $ABC$ are defined as follows:
* $I$: Do nothing
* $X$: Reflect in the line $x$
* $Y$: Reflect in the line $y$
* $Z$: Reflect in the line $z$
* $R_1$: Rotate $120^\circ$ anticlockwise about $O$
* $R_2$: Rotate $240^\circ$ anticlockwise about $O$

The operation $*$ is defined as 'followed by' on the set $T = \{I, X, Y, Z, R_1, R_2\}$.
For example, $X * Y$ means a reflection in the line $x$ followed by a reflection in the line $y$.

**(a) (i)** Complete the Cayley table on page 5 **(6)**

Given that the associative law is satisfied,

**(ii)** show that $T$ is a group under the operation $*$ **(6)**

**(b)** Show that the element $R_2$ has order $3$ **(2)**

**(c)** Explain why $T$ is not a cyclic group. **(1)**

**(d)** Write down the elements of a subgroup of $T$ that has order $3$ **(1)**

**(Total for Question 2 is 10 marks)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Complete the Cayley table**
Completed table entries:
$$\begin{array}{c|cccccc}
* & I & X & Y & Z & R_1 & R_2 \\
\hline
I & I & X & Y & Z & R_1 & R_2 \\
X & X & I & R_2 & R_1 & Z & Y \\
Y & Y & R_1 & I & R_2 & X & Z \\
Z & Z & R_2 & R_1 & I & Y & X \\
R_1 & R_1 & Y & Z & X & R_2 & I \\
R_2 & R_2 & Z & X & Y & I & R_1
\end{array}$$

- **[B2]** Fully correct Cayley table (B1 for 1 or 2 errors, B0 for 3 or more errors).

**Step 2: Verify group axioms**
- Closure: All entries in the table are elements of $T$.
- Identity: $I$ is in the table and leaves all elements unchanged ($I * A = A * I = A$).
- Inverse: Every element has an inverse in the table (e.g., $X^{-1} = X$, $R_1^{-1} = R_2$, etc.).
- Associativity: Given.
Hence $T$ is a group.

- **[M1]** Explains closure using the table.
- **[M1]** Identifies identity element $I$.
- **[M1]** Identifies inverses for all elements.
- **[A1]** Concludes all group axioms are satisfied. *(Note: combined with part (a)(i) marking scheme allocation)*

#### **Part (b)**

**Step 3: Show order of $R_2$ is 3**
$$R_2 * R_2 = R_1$$
$$R_2 * R_1 = I \quad (\text{or } R_2^3 = I)$$
Since $R_2^1 \neq I$, $R_2^2 \neq I$ and $R_2^3 = I$, the order of $R_2$ is $3$.

- **[M1]** Attempts powers of $R_2$.
- **[A1]** Correctly shows $R_2^3 = I$ with no lower positive integer power yielding $I$.

#### **Part (c)**

**Step 4: Explain why $T$ is not cyclic**
No element in $T$ has order $6$ (the maximum order of an element is $3$). Therefore, no element can generate the whole group.

- **[B1]** Correct explanation (e.g., no element of order 6).

#### **Part (d)**

**Step 5: Write down the subgroup of order 3**
$$\{I, R_1, R_2\}$$

- **[B1]** $\{I, R_1, R_2\}$ (or $\{I, R_2, R_1\}$).

---
topic: "Sequences and Series"
subtopic: "Recurrence relations"
---
### **Question 3**

A tree at the bottom of a garden needs to be reduced in height. The tree is known to increase in height by $15$ centimetres each year.

On the first day of every year, the height is measured and the tree is immediately trimmed by $3\%$ of this height.

When the tree is measured, before trimming on the first day of year $1$, the height is $6$ metres.

Let $H_n$ be the height of the tree immediately before trimming on the first day of year $n$.

**(a)** Explain, in the context of the problem, why the height of the tree may be modelled by the recurrence relation
$$H_{n+1} = 0.97H_n + 0.15, \quad H_1 = 6, \quad n \in \mathbb{Z}^+$$ **(3)**

**(b)** Prove by induction that $H_n = 0.97^{n-1} + 5, \quad n \geqslant 1$ **(4)**

**(c)** Explain what will happen to the height of the tree immediately before trimming in the long term. **(1)**

**(d)** By what fixed percentage should the tree be trimmed each year if the height of the tree immediately before trimming is to be $4$ metres in the long term? **(2)**

**(Total for Question 3 is 10 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Formulate recurrence relation components**
- Increase of $15$ cm is $0.15$ metres.
- Trimming by $3\%$ leaves $97\%$ of the previous height, represented by $0.97H_n$.
- Combining these gives $H_{n+1} = 0.97H_n + 0.15$ with initial condition $H_1 = 6$.

- **[B1]** Explains $0.97H_n$ (or equivalent).
- **[B1]** Explains $+0.15$ (converting $15$ cm to $0.15$ m).
- **[B1]** States initial condition $H_1 = 6$.

#### **Part (b)**

**Step 2: Base case**
For $n = 1$:
$$LHS = H_1 = 6$$
$$RHS = 0.97^{1-1} + 5 = 1 + 5 = 6$$
True for $n = 1$.

- **[B1]** Shows result holds for $n = 1$.

**Step 3: Inductive hypothesis**
Assume the result is true for $n = k$:
$$H_k = 0.97^{k-1} + 5$$

- **[M1]** Assumes true for $n = k$.

**Step 4: Inductive step**
For $n = k+1$:
$$H_{k+1} = 0.97H_k + 0.15 = 0.97(0.97^{k-1} + 5) + 0.15$$
$$= 0.97^k + 0.485 + 0.15 = 0.97^k + 0.635 \quad \text{[Wait, check algebra:]}$$
Correct substitution:
$$H_{k+1} = 0.97(0.97^{k-1} + 5) + 0.15 = 0.97^k + 4.85 + 0.15 = 0.97^k + 5$$
This matches the formula for $n = k+1$.

- **[M1]** Substitutes $H_k$ into the recurrence relation and attempts to simplify.
- **[A1]** Completes the proof rigorously, establishing the result for $n = k+1$ and concluding by induction.

#### **Part (c)**

**Step 5: Long term behaviour**
As $n \to \infty$, $0.97^{n-1} \to 0$, so $H_n \to 5$ metres.

- **[B1]** States that the height approaches $5$ metres.

#### **Part (d)**

**Step 6: Calculate new percentage**
Let the remaining fraction be $p$.
In the long term, $H = p H + 0.15 \Rightarrow 4 = 4p + 0.15$
$$4p = 3.85 \Rightarrow p = \frac{3.85}{4} = 0.9625$$
Percentage trimmed = $1 - 0.9625 = 0.0375 = 3.75\%$.

- **[M1]** Sets up steady-state equation with unknown multiplier, e.g., $4 = p(4) + 0.15$.
- **[A1]** Obtains $3.75\%$ (or $\frac{15}{4}\%$).

---
topic: "Matrices"
subtopic: "Diagonalising matrices"
---
### **Question 4**

$$\mathbf{A} = \begin{pmatrix} 1 & 1 \\ -2 & 4 \end{pmatrix}$$

Find a matrix $\mathbf{P}$ and a diagonal matrix $\mathbf{D}$ such that $\mathbf{D} = \mathbf{P}^{-1}\mathbf{A}\mathbf{P}$ **(7)**

**(Total for Question 4 is 7 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Find eigenvalues**
$$\det(\mathbf{A} - \lambda \mathbf{I}) = \begin{vmatrix} 1 - \lambda & 1 \\ -2 & 4 - \lambda \end{vmatrix} = 0$$
$$(1 - \lambda)(4 - \lambda) - (-2) = 0$$
$$\lambda^2 - 5\lambda + 4 + 2 = 0 \Rightarrow \lambda^2 - 5\lambda + 6 = 0$$
$$(\lambda - 2)(\lambda - 3) = 0 \Rightarrow \lambda = 2, \lambda = 3$$

- **[M1]** Sets up the characteristic equation $\det(\mathbf{A} - \lambda \mathbf{I}) = 0$.
- **[A1]** Correct quadratic equation and eigenvalues $\lambda = 2, 3$.

**Step 2: Find eigenvectors**
For $\lambda = 2$:
$$\begin{pmatrix} -1 & 1 \\ -2 & 2 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \Rightarrow -x + y = 0 \Rightarrow \text{ eigenvector } \begin{pmatrix} 1 \\ 1 \end{pmatrix}$$

For $\lambda = 3$:
$$\begin{pmatrix} -2 & 1 \\ -2 & 1 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \Rightarrow -2x + y = 0 \Rightarrow \text{ eigenvector } \begin{pmatrix} 1 \\ 2 \end{pmatrix}$$

- **[M1]** Attempts to find eigenvectors for both eigenvalues.
- **[A1]** Correct eigenvectors obtained (allow multiples).

**Step 3: Construct $\mathbf{P}$ and $\mathbf{D}$**
$$\mathbf{P} = \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}, \quad \mathbf{D} = \begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}$$
*(Order of eigenvalues must correspond to columns of $\mathbf{P}$)*

- **[B1]** Correct diagonal matrix $\mathbf{D}$.
- **[A1]** Correct matrix $\mathbf{P}$ matching the order of $\mathbf{D}$.

---
topic: "Argand Diagrams"
subtopic: "Loci in the Argand diagram"
---
### **Question 5**

A complex number $z$ is represented by the point $P$ on an Argand diagram.

Given that $\arg\left(\frac{z - 6\mathrm{i}}{z - 3\mathrm{i}}\right) = \frac{\pi}{3}$

**(a)** sketch the locus of $P$ as $z$ varies, **(3)**

**(b)** find the exact maximum possible value of $|z|$ **(5)**

**(Total for Question 5 is 8 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Identify the locus**
The locus represents an arc of a circle passing through $A(0, 3)$ and $B(0, 6)$, restricted by the angle $\frac{\pi}{3}$.

- **[M1]** Identifies that the locus is an arc of a circle.
- **[A1]** Identifies correct endpoints $(0, 3)$ and $(0, 6)$ on the imaginary axis.
- **[A1]** Correct sketch showing the correct region/arc for angle $\frac{\pi}{3}$ above the points.

#### **Part (b)**

**Step 2: Find circle geometry parameters**
Chord length $AB = 6 - 3 = 3$.
Angle subtended at the circumference is $\frac{\pi}{3}$, so angle subtended at the center is $\frac{2\pi}{3}$.
Using sine rule or trigonometry on the isosceles triangle formed by the center $C$ and points $A, B$:
Radius $r = \frac{3 / 2}{\sin(\frac{\pi}{3})} = \frac{3/2}{\frac{\sqrt{3}}{2}} = \sqrt{3}$.

- **[M1]** Calculates the radius of the circle (e.g., using $r = \frac{\text{chord}}{2\sin\theta}$ or geometry).
- **[A1]** Correct radius $r = \sqrt{3}$.

**Step 3: Find center coordinates**
The chord lies on the imaginary axis between $y = 3$ and $y = 6$. The midpoint is $(0, 4.5)$.
The center of the circle has $x$-coordinate $x_c = r \cos(\frac{\pi}{6}) = \sqrt{3} \times \frac{\sqrt{3}}{2} = \frac{3}{2} = 1.5$.
So center is at $\left(\frac{3}{2}, \frac{9}{2}\mathrm{i}\right)$.

- **[M1]** Finds the coordinates of the center of the circle.

**Step 4: Find maximum modulus $|z|$**
The maximum modulus of $z$ corresponds to the point on the circle furthest from the origin.
$$\text{Max } |z| = \text{distance to center} + \text{radius} = \sqrt{\left(\frac{3}{2}\right)^2 + \left(\frac{9}{2}\right)^2} + \sqrt{3}$$
$$= \sqrt{\frac{9}{4} + \frac{81}{4}} + \sqrt{3} = \sqrt{\frac{90}{4}} + \sqrt{3} = \frac{\sqrt{90}}{2} + \sqrt{3} = \frac{3\sqrt{10}}{2} + \sqrt{3}$$

- **[M1]** Uses distance from origin to center plus radius to find the maximum modulus.
- **[A1]** Exact simplified value $\frac{3\sqrt{10}}{2} + \sqrt{3}$ (or equivalent).
