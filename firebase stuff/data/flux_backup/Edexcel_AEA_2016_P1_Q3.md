---
topic: "Vectors"
subtopic: "Vectors in 3D"
---

### **Question 3**

The points $A$, $B$, $C$, $D$ and $E$ are five of the vertices of a rectangular cuboid and $AE$ is a diagonal of the cuboid. With respect to a fixed origin $O$, the position vectors of $A$, $B$, $C$ and $D$ are $\mathbf{a}$, $\mathbf{b}$, $\mathbf{c}$ and $\mathbf{d}$ respectively, where $$\mathbf{a} = \begin{pmatrix} 1 \\ 2 \\ -1 \end{pmatrix}, \quad \mathbf{b} = \begin{pmatrix} 0 \\ -3 \\ -8 \end{pmatrix}, \quad \mathbf{c} = \begin{pmatrix} 4 \\ -1 \\ -10 \end{pmatrix} \quad \text{and} \quad \mathbf{d} = \begin{pmatrix} -4 \\ 2 \\ -11 \end{pmatrix}$$

**(a)** Find the position vector of $E$. **(6)**

The volume of a tetrahedron is given by the formula $\text{volume} = \frac{1}{3}(\text{area of base}) \times (\text{height})$

**(b)** Find the volume of the tetrahedron $ABCD$. **(3)** **(Total 9 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Find vectors between the given points** Calculate the vectors between pairs of the given points to identify the edges of the rectangular cuboid. $$\overrightarrow{AB} = \begin{pmatrix} -1 \\ -5 \\ -7 \end{pmatrix}, \quad \overrightarrow{AC} = \begin{pmatrix} 3 \\ -3 \\ -9 \end{pmatrix}, \quad \overrightarrow{AD} = \begin{pmatrix} -5 \\ 0 \\ -10 \end{pmatrix}$$ $$\overrightarrow{BC} = \begin{pmatrix} 4 \\ 2 \\ -2 \end{pmatrix}, \quad \overrightarrow{BD} = \begin{pmatrix} -4 \\ 5 \\ -3 \end{pmatrix}, \quad \overrightarrow{CD} = \begin{pmatrix} -8 \\ 3 \\ -1 \end{pmatrix}$$ _(Alternatively, calculate their lengths using Pythagoras: $|\overrightarrow{AB}| = \sqrt{75}$, $|\overrightarrow{BC}| = \sqrt{24}$, etc.)_

- **[M1]** Attempt at least 3 vectors (or lengths) with at least 2 correct.
    

**Step 2: Check for orthogonality to identify edges meeting at a vertex** Seek pairs of perpendicular vectors (dot product = 0) sharing a common vertex. $$\overrightarrow{AB} \cdot \overrightarrow{BC} = (-1)(4) + (-5)(2) + (-7)(-2) = -4 - 10 + 14 = 0$$ $$\overrightarrow{AB} \cdot \overrightarrow{BD} = (-1)(-4) + (-5)(5) + (-7)(-3) = 4 - 25 + 21 = 0$$ $$\overrightarrow{BC} \cdot \overrightarrow{BD} = (4)(-4) + (2)(5) + (-2)(-3) = -16 + 10 + 6 = 0$$

- **[dM1]** Check at least one correct pair for orthogonality.
    
- **[A1, A1]** A1 for 2 edges checked. A2 for all three edges correctly identified as $AB$, $BC$, and $BD$. (Thus, $B$ is a vertex with edges $BA$, $BC$, and $BD$).
    

**Step 3: Construct position vector of E** Since $AE$ is a body diagonal, $E$ is the vertex opposite to $A$. Moving from $A$ to $E$ travels along the three orthogonal directions defined at $B$. Equivalently, $E$ is reached from $D$ by moving along a vector parallel and equal to $\overrightarrow{BC}$. $\overrightarrow{OE} = \overrightarrow{OD} + \overrightarrow{BC}$ (or other equivalent combinations like $\overrightarrow{OA} + \overrightarrow{AB} + \overrightarrow{BC} + \overrightarrow{BD}$).

- **[M1]** Correct expression combining vectors to reach $E$.
    

$$\overrightarrow{OE} = \begin{pmatrix} -4 \\ 2 \\ -11 \end{pmatrix} + \begin{pmatrix} 4 \\ 2 \\ -2 \end{pmatrix} = \begin{pmatrix} 0 \\ 4 \\ -13 \end{pmatrix}$$

- **[A1]** Correct coordinates for $E$. (Note: max score of M1M0A0A0M1A1 if no proof is provided that $AB$, $BC$, $BD$ are edges).
    

#### **Part (b)**

**Step 4: Find edge lengths** Using the orthogonal edges meeting at $B$: $$|\overrightarrow{AB}| = \sqrt{(-1)^2 + (-5)^2 + (-7)^2} = \sqrt{75} = 5\sqrt{3}$$ $$|\overrightarrow{BC}| = \sqrt{4^2 + 2^2 + (-2)^2} = \sqrt{24} = 2\sqrt{6}$$ $$|\overrightarrow{BD}| = \sqrt{(-4)^2 + 5^2 + (-3)^2} = \sqrt{50} = 5\sqrt{2}$$

- **[M1]** Attempt 3 relevant lengths and try area/volume formula.
    

**Step 5: Calculate Volume** $$\text{Volume} = \frac{1}{3} \times \left( \frac{1}{2} \times |\overrightarrow{BC}| \times |\overrightarrow{BD}| \right) \times |\overrightarrow{AB}|$$

- **[M1]** Suitable expression applied.
    

$$\text{Volume} = \frac{1}{3} \times \frac{1}{2} \times \sqrt{24} \times \sqrt{50} \times \sqrt{75} = \frac{1}{6} \sqrt{90000} = \frac{300}{6} = 50$$

- **[A1]** Correct volume calculated.