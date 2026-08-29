---
topic: "Groups"
subtopic: "Axioms of a group"
---
### **Question 1**

The set $G = \{1, 3, 7, 9, 11, 13, 17, 19\}$ under the binary operation of multiplication modulo 20 forms a group.

**(a)** Find the inverse of each element of $G$. **(3)**

**(b)** Find the order of each element of $G$. **(3)**

**(c)** Find a subgroup of $G$ of order 4. **(1)**

**(d)** Explain how the subgroup you found in part (c) satisfies Lagrange's theorem. **(1)**

**(Total 8 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Identify inverses for each element in $G$ under multiplication modulo 20.**
- $1^{-1} = 1$
- $3^{-1} = 7$
- $7^{-1} = 3$
- $9^{-1} = 9$
- $11^{-1} = 11$
- $13^{-1} = 17$
- $17^{-1} = 13$
- $19^{-1} = 19$
- **[B3]** All 8 inverses correctly stated (deduct 1 mark for each error, minimum 0 marks).

#### **Part (b)**

**Step 2: Determine the order of each element.**
- Order of $1$ is $1$.
- Order of $3$ is $4$.
- Order of $7$ is $4$.
- Order of $9$ is $2$.
- Order of $11$ is $2$.
- Order of $13$ is $4$.
- Order of $17$ is $4$.
- Order of $19$ is $2$.
- **[B3]** All 8 orders correctly stated (deduct 1 mark for each error, minimum 0 marks).

#### **Part (c)**

**Step 3: State a subgroup of order 4.**
- For example: $\{1, 3, 7, 9\}$ or $\{1, 9, 11, 19\}$ or $\{1, 3, 13, 17\}$.
- **[B1]** Any valid subgroup of order 4.

#### **Part (d)**

**Step 4: Explain Lagrange's theorem.**
- The order of the subgroup (4) divides the order of the group (8).
- **[B1]** Correct explanation referencing the order of the subgroup and group.

---
topic: "Number Theory"
subtopic: "Euclidean algorithm"
---
### **Question 2**

The highest common factor of 963 and 657 is $c$.

**(a)** Use the Euclidean algorithm to find the value of $c$. **(3)**

**(b)** Hence find integers $a$ and $b$ such that 
$$963a + 657b = c$$
**(3)**

**(Total 6 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Apply the Euclidean algorithm.**
$$963 = 1 \times 657 + 306$$
$$657 = 2 \times 306 + 45$$
$$306 = 6 \times 45 + 36$$
$$45 = 1 \times 36 + 9$$
$$36 = 4 \times 9 + 0$$
- **[M1]** Sets up a correct sequence of division equations leading to the HCF.
- **[A1]** All division equations correct.
- **[A1]** $c = 9$

#### **Part (b)**

**Step 2: Work backwards to express 9 as a linear combination.**
$$9 = 45 - 1 \times 36$$
$$36 = 306 - 6 \times 45 \implies 9 = 45 - 1 \times (306 - 6 \times 45) = 7 \times 45 - 1 \times 306$$
$$45 = 657 - 2 \times 306 \implies 9 = 7(657 - 2 \times 306) - 1 \times 306 = 7 \times 657 - 15 \times 306$$
$$306 = 963 - 1 \times 657 \implies 9 = 7 \times 657 - 15(963 - 1 \times 657) = 22 \times 657 - 15 \times 963$$
- **[M1]** Works backwards substituting remainders.
- **[A1]** Correct intermediate coefficients.
- **[A1]** $a = -15, b = 22$ (or equivalent valid integers).

---
topic: "Matrices"
subtopic: "Eigenvalues and eigenvectors"
---
### **Question 3**

**(i)** Let $\mathbf{A} = \begin{pmatrix} 1 & -2 \\ 1 & 4 \end{pmatrix}$.

**(a)** Show that the characteristic equation for $\mathbf{A}$ is $\lambda^2 - 5\lambda + 6 = 0$. **(2)**

**(b)** Use the Cayley-Hamilton theorem to find integers $p$ and $q$ such that 
$$\mathbf{A}^3 = p\mathbf{A} + q\mathbf{I}$$
**(3)**

**(ii)** Given that the $2 \times 2$ matrix $\mathbf{M}$ has eigenvalues $-1 + \text{i}$ and $-1 - \text{i}$, with eigenvectors $\begin{pmatrix} 1 \\ 2 - \text{i} \end{pmatrix}$ and $\begin{pmatrix} 1 \\ 2 + \text{i} \end{pmatrix}$ respectively, find the matrix $\mathbf{M}$. **(5)**

**(Total 10 marks)**

### **Mark Scheme 1**

#### **Part (i)(a)**

**Step 1: Form the characteristic equation.**
$$\det(\mathbf{A} - \lambda\mathbf{I}) = \det\begin{pmatrix} 1 - \lambda & -2 \\ 1 & 4 - \lambda \end{pmatrix} = (1 - \lambda)(4 - \lambda) - (-2)(1) = 0$$
- **[M1]** Attempts $\det(\mathbf{A} - \lambda\mathbf{I}) = 0$.

**Step 2: Expand and simplify.**
$$\lambda^2 - 5\lambda + 4 + 2 = 0 \implies \lambda^2 - 5\lambda + 6 = 0$$
- **[A1]** Obtains the required quadratic equation with clear working.

#### **Part (i)(b)**

**Step 3: Apply the Cayley-Hamilton theorem.**
$$\mathbf{A}^2 - 5\mathbf{A} + 6\mathbf{I} = \mathbf{0} \implies \mathbf{A}^2 = 5\mathbf{A} - 6\mathbf{I}$$
- **[M1]** States $\mathbf{A}^2 - 5\mathbf{A} + 6\mathbf{I} = \mathbf{0}$ or uses it to multiply by $\mathbf{A}$.

**Step 4: Multiply by $\mathbf{A}$ to find $\mathbf{A}^3$.**
$$\mathbf{A}^3 = 5\mathbf{A}^2 - 6\mathbf{A} = 5(5\mathbf{A} - 6\mathbf{I}) - 6\mathbf{A} = 25\mathbf{A} - 30\mathbf{I} - 6\mathbf{A} = 19\mathbf{A} - 30\mathbf{I}$$
- **[M1]** Substitutes for $\mathbf{A}^2$ to express $\mathbf{A}^3$ in terms of $\mathbf{A}$ and $\mathbf{I}$.
- **[A1]** $p = 19, q = -30$

#### **Part (ii)**

**Step 5: Set up the relation $\mathbf{M} \mathbf{P} = \mathbf{P} \mathbf{D}$.**
$$\mathbf{P} = \begin{pmatrix} 1 & 1 \\ 2 - \text{i} & 2 + \text{i} \end{pmatrix}, \quad \mathbf{D} = \begin{pmatrix} -1 + \text{i} & 0 \\ 0 & -1 - \text{i} \end{pmatrix}$$
- **[M1]** Identifies the matrices of eigenvectors $\mathbf{P}$ and eigenvalues $\mathbf{D}$.

**Step 6: Find $\mathbf{P}^{-1}$.**
$$\det(\mathbf{P}) = (1)(2 + \text{i}) - (1)(2 - \text{i}) = 2 + \text{i} - 2 + \text{i} = 2\text{i}$$
$$\mathbf{P}^{-1} = \frac{1}{2\text{i}} \begin{pmatrix} 2 + \text{i} & -1 \\ -(2 - \text{i}) & 1 \end{pmatrix}$$
- **[M1]** Attempts to invert $\mathbf{P}$.
- **[A1]** Correct inverse $\mathbf{P}^{-1}$.

**Step 7: Compute $\mathbf{M} = \mathbf{P} \mathbf{D} \mathbf{P}^{-1}$.**
$$\mathbf{M} = \begin{pmatrix} 1 & 1 \\ 2 - \text{i} & 2 + \text{i} \end{pmatrix} \begin{pmatrix} -1 + \text{i} & 0 \\ 0 & -1 - \text{i} \end{pmatrix} \frac{1}{2\text{i}} \begin{pmatrix} 2 + \text{i} & -1 \\ -2 + \text{i} & 1 \end{pmatrix}$$
Carrying out the matrix multiplication:
$$\mathbf{M} = \begin{pmatrix} -1 & -1 \\ 2 & -1 \end{pmatrix}$$
- **[A1]** Correct matrix $\mathbf{M}$.

---
topic: "Sequences and Series"
subtopic: "Recurrence relations"
---
### **Question 4**

Sam borrows $£10\,000$ from a bank to pay for an extension to his house.
The bank charges $5\%$ annual interest on the portion of the loan yet to be repaid.
Immediately after the interest has been added at the end of each year and before the start of the next year, Sam pays the bank a fixed amount, $£F$.

Given that $£A_n$ (where $A_n \ge 0$) is the amount owed at the start of year $n$,

**(a)** write down an expression for $A_{n+1}$ in terms of $A_n$ and $F$. **(1)**

**(b)** prove, by induction that, for $n \ge 1$
$$A_n = (10\,000 - 20F)1.05^{n-1} + 20F$$
**(5)**

**(c)** Find the smallest value of $F$ for which Sam can repay all of the loan by the start of year 16. **(4)**

**(Total 10 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Form the recurrence relation.**
$$A_{n+1} = 1.05A_n - F$$
- **[B1]** Correct expression.

#### **Part (b)**

**Step 2: Test the base case.**
For $n = 1$:
$$\text{LHS} = A_1 = 10\,000$$
$$\text{RHS} = (10\,000 - 20F)1.05^{1-1} + 20F = 10\,000 - 20F + 20F = 10\,000$$
$\text{LHS} = \text{RHS}$, so the result is true for $n = 1$.
- **[B1]** Verified for $n = 1$.

**Step 3: Assume true for $n = k$ and consider $n = k+1$.**
Assume $A_k = (10\,000 - 20F)1.05^{k-1} + 20F$.
Using the recurrence relation:
$$A_{k+1} = 1.05A_k - F = 1.05\left((10\,000 - 20F)1.05^{k-1} + 20F\right) - F$$
- **[M1]** Substitutes the assumed expression into the recurrence relation for $A_{k+1}$.

**Step 4: Simplify the expression.**
$$A_{k+1} = (10\,000 - 20F)1.05^k + 21F - F = (10\,000 - 20F)1.05^{(k+1)-1} + 20F$$
- **[A1]** Correct algebraic manipulation showing the result holds for $n = k+1$.
- **[A1]** Concludes the proof by mathematical induction with a clear statement.

#### **Part (c)**

**Step 5: Set up the inequality for repayment by year 16.**
By the start of year 16, $A_{16} \le 0$:
$$(10\,000 - 20F)1.05^{15} + 20F \le 0$$
- **[M1]** Sets up the inequality or equation with $n = 16$ and $A_{16} \le 0$.

**Step 6: Rearrange for $F$.**
$$10\,000 \times 1.05^{15} - 20F \times 1.05^{15} + 20F \le 0$$
$$10\,000 \times 1.05^{15} \le 20F(1.05^{15} - 1)$$
$$F \ge \frac{10\,000 \times 1.05^{15}}{20(1.05^{15} - 1)}$$
- **[M1]** Rearranges to isolate $F$.

**Step 7: Evaluate the numerical value.**
$$F \ge \frac{20\,789.28\dots}{20(0.5793\dots)} \approx 958.07$$
- **[A1]** Evaluates the expression correctly (approx 958.07).
- **[A1]** States the smallest integer value $F = 959$.

---
topic: "Argand Diagrams"
subtopic: "Modulus and argument"
---
### **Question 5**

**Figure 1** _(An Argand diagram showing a shaded circular region centered at the origin with radius 2, bounded by rays from the origin at angles $-\frac{\pi}{4}$ and $\frac{\pi}{4}$)._

```tikz
\begin{tikzpicture}[scale=0.8]
  \draw[->] (-4,0) -- (4,0) node[below] {Re};
  \draw[->] (0,-3) -- (0,3) node[left] {Im};
  \fill[gray!40] (0,0) -- (2,2) arc (45:-45:2.828) -- cycle;
  \draw[thick] (0,0) circle (2);
  \draw[dashed] (-2,2) -- (2,-2);
  \draw[thick] (0,0) -- (2.12, 2.12);
  \draw[thick] (0,0) -- (2.12, -2.12);
  \node at (2,2.4) {$2+2\text{i}$};
  \node at (2,-2.6) {$2-2\text{i}$};
  \node at (0.5,0.3) {$O$};
  \node at (2.5,0.5) {$2$};
  \node at (0.3,2) {$2\text{i}$};
  \node at (-0.5,-2) {$-2\text{i}$};
  \node at (-2,0.4) {$-2$};
  \node at (-4,0.4) {$-4$};
\end{tikzpicture}
```

Figure 1 shows an Argand diagram.
The set of points, $A$, that lies within the shaded region, including its boundaries, is defined by
$$A = \{z : p \le \arg(z) \le q\} \cap \{z : |z| \le r\}$$
where $p$, $q$ and $r$ are positive constants.

**(a)** Write down the values of $p$, $q$ and $r$. **(2)**

Given that $w = -2\sqrt{3} + 2\text{i}$ and $z \in A$,

**(b)** find the maximum value of $|w - z|^2$ giving your answer in an exact simplified form. **(4)**

**(Total 6 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Identify the values of $p$, $q$ and $r$ from the region.**
- $p = -\frac{\pi}{4}$
- $q = \frac{\pi}{4}$
- $r = 2$
- **[B2]** All three values correct (deduct 1 mark for each error).

#### **Part (b)**

**Step 2: Locate point $w$ and the region $A$ on the Argand diagram.**
- $w = -2\sqrt{3} + 2\text{i}$ has modulus $|w| = \sqrt{(-2\sqrt{3})^2 + 2^2} = \sqrt{12 + 4} = 4$.
- Argument of $w$ is $\pi - \frac{\pi}{6} = \frac{5\pi}{6}$.
- **[M1]** Finds the modulus or argument of $w$ or plots $w$ correctly.

**Step 3: Determine the point in $A$ furthest from $w$.**
- The region $A$ is a sector of a circle centered at the origin with radius 2, bounded by arguments $-\frac{\pi}{4}$ and $\frac{\pi}{4}$.
- The furthest point in $A$ from $w$ will lie on the boundary of the circle $|z| = 2$, specifically at an angle of $\frac{3\pi}{4}$ or along the line passing through $w$ and the origin.
- The maximum distance squared is given by $(|w| + r)^2 = (4 + 2)^2 = 36$ only if collinear; otherwise, use geometry or coordinates.
- Let $w = (-2\sqrt{3}, 2)$. The points on $|z| = 2$ are $(2\cos\theta, 2\sin\theta)$.
- Distance squared is $(-2\sqrt{3} - 2\cos\theta)^2 + (2 - 2\sin\theta)^2$.
- Maximize this expression for $\theta \in [-\frac{\pi}{4}, \frac{\pi}{4}]$.
- **[M1]** Identifies that the maximum distance occurs at the boundary point on the circle furthest from $w$, such as $z = 2\left(-\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}}\right) = (-\sqrt{2}, \sqrt{2})$.

**Step 4: Calculate $|w - z|^2$ for the extreme point.**
- $z = - \sqrt{2} + \sqrt{2}\text{i}$
- $w - z = (-2\sqrt{3} + \sqrt{2}) + (2 - \sqrt{2})\text{i}$
- $|w - z|^2 = (-2\sqrt{3} + \sqrt{2})^2 + (2 - \sqrt{2})^2$
- $= (12 - 4\sqrt{6} + 2) + (4 - 4\sqrt{2} + 2) = 14 - 4\sqrt{6} + 6 - 4\sqrt{2} = 20 - 4\sqrt{6} - 4\sqrt{2}$
- **[M1]** Substitutes the coordinates of the furthest point into the distance formula.
- **[A1]** Obtains the exact simplified form $20 - 4\sqrt{6} - 4\sqrt{2}$ (or equivalent).
