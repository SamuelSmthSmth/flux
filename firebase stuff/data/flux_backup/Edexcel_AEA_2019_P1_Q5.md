---
topic: "Vectors"
subtopic: "Vectors"
---

### **Question 5**

Points $A$ and $B$ have position vectors $\mathbf{a}$ and $\mathbf{b}$, respectively, relative to an origin $O$, and are such that $OAB$ is a triangle with $OA = a$ and $OB = b$. The point $C$, with position vector $\mathbf{c}$, lies on the line through $O$ that bisects the angle $AOB$.

**(a)** Prove that the vector $b\mathbf{a} - a\mathbf{b}$ is perpendicular to $\mathbf{c}$. **(4)**

The point $D$, with position vector $\mathbf{d}$, lies on the line $AB$ between $A$ and $B$. **(b)** Explain why $\mathbf{d}$ can be expressed in the form $$\mathbf{d} = (1 - \lambda)\mathbf{a} + \lambda\mathbf{b}$$ for some scalar $\lambda$ with $0 < \lambda < 1$. **(2)**

**(c)** Given that $D$ is also on the line $OC$, find an expression for $\lambda$ in terms of $a$ and $b$ only and hence show that $DA : DB = OA : OB$ **(8)** **(+S2)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Define points on OA and OB** Let $P$ and $Q$ be points such that $\overrightarrow{OP} = b\mathbf{a}$ and $\overrightarrow{OQ} = a\mathbf{b}$.

- **[M1]** Extends $OA$ and $OB$ (or uses unit vectors).
    

**Step 2: Identify isosceles triangle** Then $|\overrightarrow{OP}| = b|\mathbf{a}| = ba$ and $|\overrightarrow{OQ}| = a|\mathbf{b}| = ab$. Hence $|\overrightarrow{OP}| = |\overrightarrow{OQ}|$, so triangle $OPQ$ is isosceles.

- **[A1]** Deduces isosceles property.
    

**Step 3: Relate to angle bisector** The angle bisector from $O$ in an isosceles triangle is perpendicular to the base $PQ$. $$\overrightarrow{QP} = \overrightarrow{OP} - \overrightarrow{OQ} = b\mathbf{a} - a\mathbf{b}$$.

- **[M1]** Relates the base vector to the bisector.
    

**Step 4: Conclusion** Since $C$ is on the angle bisector, $\mathbf{c}$ is parallel to the bisector, meaning $b\mathbf{a} - a\mathbf{b}$ is perpendicular to $\mathbf{c}$.

- **[A1]** Draws correct conclusion. _(Alternative via Dot Product: Let $\theta$ be half angle AOB. $\mathbf{a} \cdot \mathbf{c} = ac \cos\theta$ and $\mathbf{b} \cdot \mathbf{c} = bc \cos\theta$. Then $$(b\mathbf{a} - a\mathbf{b}) \cdot \mathbf{c} = b(ac\cos\theta) - a(bc\cos\theta) = 0$$.)_
    

#### **Part (b)**

**Step 5: Vector line equation** $$\overrightarrow{OD} = \overrightarrow{OA} + \lambda\overrightarrow{AB} \Rightarrow \mathbf{d} = \mathbf{a} + \lambda(\mathbf{b} - \mathbf{a})$$ $$\Rightarrow \mathbf{d} = (1 - \lambda)\mathbf{a} + \lambda\mathbf{b}$$

- **[M1]** Sets up appropriate equation.
    

**Step 6: Parameter constraints** Since $D$ lies strictly between $A$ and $B$ on the line segment, $\lambda$ must be a fraction representing the proportion of the distance along $AB$, so $0 < \lambda < 1$.

- **[A1 (S+)]** Correctly shown and reasoned.
    

#### **Part (c)**

**Step 7: D lies on OC** Since $D$ lies on $OC$, $\mathbf{d}$ is a multiple of $\mathbf{c}$. From (a), $\mathbf{c}$ is parallel to the angle bisector, so $$\mathbf{d} = k'(\overrightarrow{OP} + \overrightarrow{OQ}) = k'(b\mathbf{a} + a\mathbf{b})$$.

- **[M1]** Deduces $\mathbf{d}$ is a multiple of $b\mathbf{a} + a\mathbf{b}$.
    

**Step 8: Equate coefficients** Equating this to the expression from (b): $$k'(b\mathbf{a} + a\mathbf{b}) = (1 - \lambda)\mathbf{a} + \lambda\mathbf{b}$$

- **[M1]** Forms equation in $\mathbf{a}$ and $\mathbf{b}$.
    

Since $\mathbf{a}$ and $\mathbf{b}$ are non-parallel (they form a triangle), their coefficients must be equal: $k'b = 1 - \lambda$ and $k'a = \lambda$

- **[M1]** Extracts simultaneous equations.
    

**Step 9: Solve for lambda** Substitute $k' = \lambda / a$ into the first equation: $$\left(\frac{\lambda}{a}\right)b = 1 - \lambda \Rightarrow \lambda\left(\frac{b}{a} + 1\right) = 1$$ $$\Rightarrow \lambda\left(\frac{a + b}{a}\right) = 1 \Rightarrow \lambda = \frac{a}{a + b}$$

- **[A1]** Solves correctly for $\lambda$.
    

**Step 10: Find lengths AD and BD** $$\overrightarrow{AD} = \mathbf{d} - \mathbf{a} = (1 - \lambda)\mathbf{a} + \lambda\mathbf{b} - \mathbf{a} = \lambda(\mathbf{b} - \mathbf{a}) \Rightarrow AD = \lambda|\mathbf{b} - \mathbf{a}|$$ $$\overrightarrow{BD} = \mathbf{d} - \mathbf{b} = (1 - \lambda)\mathbf{a} + \lambda\mathbf{b} - \mathbf{b} = (1 - \lambda)(\mathbf{a} - \mathbf{b}) \Rightarrow BD = (1 - \lambda)|\mathbf{a} - \mathbf{b}|$$

- **[M1]** Correct work to establish lengths.
    

**Step 11: Calculate the Ratio** $$\frac{AD}{BD} = \frac{\lambda}{1 - \lambda}$$ Substitute $\lambda$: $$= \frac{\frac{a}{a + b}}{1 - \frac{a}{a + b}} = \frac{\frac{a}{a + b}}{\frac{b}{a + b}} = \frac{a}{b} = \frac{OA}{OB}$$

- **[dM1, A1]** Substitutes $\lambda$ and establishes given result.
    

**Special Marks (+S2)**

- **[S2]** Award S2 for a completely clear, concise solution lacking major notation errors, including S+ points like justifying equating coefficients.