---
topic: "Vectors"
subtopic: "Vectors in 3D"
---

### Question 3

The line $L_1$ has equation $$\mathbf{r} = \begin{pmatrix} -13 \\ 7 \\ -1 \end{pmatrix} + t \begin{pmatrix} 6 \\ -2 \\ 3 \end{pmatrix}$$

The line $L_2$ passes through the point $A$ with position vector $$\begin{pmatrix} 1 \\ p \\ 10 \end{pmatrix}$$ and is parallel to $$\begin{pmatrix} -2 \\ 11 \\ -5 \end{pmatrix}$$, where $p$ is a constant.

The lines $L_1$ and $L_2$ intersect at the point $B$.

**(a)** Find (i) the value of $p$, (ii) the position vector of $B$. **(5)**

The point $C$ lies on $L_1$ and angle $ACB$ is $90^\circ$. **(b)** Find the position vector of $C$. **(5)**

The point $D$ also lies on $L_1$ and triangle $ABD$ is isosceles with $AB = AD$. **(c)** Find the area of triangle $ABD$. **(3)**

### Mark Scheme 3

#### **Part (a)**

**Step 1: Set up intersection equations** Equating the components of $L_1$ and $L_2$: $$1 - 2s = -13 + 6t$$ $$10 - 5s = -1 + 3t$$ (and the y-component: $p + 11s = 7 - 2t$)

- **[M1]** Forms two equations in $t$ and $s$.
    

**Step 2: Solve for parameters** Multiply the second equation by 2: $$20 - 10s = -2 + 6t$$. Subtracting gives $$(1 - 2s) - (20 - 10s) = -13 - (-2) \Rightarrow 8s - 19 = -11 \Rightarrow 8s = 8 \Rightarrow s = 1$$. Substituting $s = 1$ gives $$1 - 2(1) = -13 + 6t \Rightarrow 12 = 6t \Rightarrow t = 2$$.

- **[M1]** Solves the equations for $s$ and $t$.
    
- **[A1]** Correct values for $s = 1$ and $t = 2$.
    

**Step 3: Find p and B** Substitute $s = 1$ and $t = 2$ into the y-component: $$p + 11(1) = 7 - 2(2) \Rightarrow p + 11 = 3 \Rightarrow p = -8$$

- **[A1]** Correct value for $p$.
    

Substitute $t = 2$ into $L_1$ to find $B$: $$\mathbf{b} = \begin{pmatrix} -13 + 12 \\ 7 - 4 \\ -1 + 6 \end{pmatrix} = \begin{pmatrix} -1 \\ 3 \\ 5 \end{pmatrix}$$

- **[A1]** Correct position vector for $B$.
    

#### **Part (b)**

**Step 4: Vector AC in terms of t** Since $C$ lies on $L_1$, its position vector is $$\overrightarrow{OC} = \begin{pmatrix} -13 + 6t \\ 7 - 2t \\ -1 + 3t \end{pmatrix}$$. $$\overrightarrow{AC} = \overrightarrow{OC} - \overrightarrow{OA} = \begin{pmatrix} 6t - 14 \\ -2t + 15 \\ 3t - 11 \end{pmatrix}$$

- **[M1]** Attempts $\overrightarrow{AC}$ in terms of $t$.
    

**Step 5: Apply dot product for perpendicularity** Angle $ACB$ is $90^\circ$, meaning $AC$ is perpendicular to $BC$ (which lies along $L_1$). Thus, $$\overrightarrow{AC} \cdot \text{direction of } L_1 = 0$$: $$\begin{pmatrix} 6t - 14 \\ -2t + 15 \\ 3t - 11 \end{pmatrix} \cdot \begin{pmatrix} 6 \\ -2 \\ 3 \end{pmatrix} = 0$$

- **[M1]** Sets up correct dot product equal to 0.
    

**Step 6: Solve for t** $$36t - 84 + 4t - 30 + 9t - 33 = 0$$ $$49t = 147 \Rightarrow t = 3$$

- **[dM1, A1]** Solves equation in $t$. Correct $t=3$.
    

**Step 7: Find C** Substitute $t = 3$ into $L_1$: $$\overrightarrow{OC} = \begin{pmatrix} -13 + 18 \\ 7 - 6 \\ -1 + 9 \end{pmatrix} = \begin{pmatrix} 5 \\ 1 \\ 8 \end{pmatrix}$$

- **[A1]** Correct position vector for $C$.
    

#### **Part (c)**

**Step 8: Find lengths BC and AC** Since $\triangle ACB$ is a right-angled triangle, the area of $\triangle ABD$ (where $D$ is on the line making $AB = AD$, forming an isosceles triangle with altitude $AC$) is twice the area of $\triangle ABC$. $$|\overrightarrow{BC}| = \sqrt{6^2 + (-2)^2 + 3^2} = \sqrt{49} = 7$$ $$|\overrightarrow{AC}| = \sqrt{4^2 + 9^2 + (-2)^2} = \sqrt{101}$$

- **[M1]** Correct method to find the relevant lengths.
    

**Step 9: Calculate Area** $$\text{Area of } \triangle ABD = 2 \times (\text{Area of } \triangle ABC)$$ $$= 2 \times \frac{1}{2} \times 7 \times \sqrt{101}$$ $$= 7\sqrt{101}$$

- **[M1, A1]** Applies area formula correctly; correct exact answer.