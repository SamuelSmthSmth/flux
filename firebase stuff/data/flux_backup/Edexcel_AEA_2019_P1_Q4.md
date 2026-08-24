---
topic: "Trigonometric Identities and Equations"
subtopic: "Trigonometric identities"
---

### **Question 4**

**(a)** Prove the identity $$(\sin x + \cos y)\cos(x - y) \equiv (1 + \sin(x - y))(\cos x + \sin y)$$ **(5)**

**(b)** Hence, or otherwise, show that $$\frac{\sin 5\theta + \cos 3\theta}{\cos 5\theta + \sin 3\theta} \equiv \frac{1 + \tan \theta}{1 - \tan \theta}$$ **(6)**

**(c)** Given that $k > 1$, show that the equation $$\frac{\sin 5\theta + \cos 3\theta}{\cos 5\theta + \sin 3\theta} = k$$ has a unique solution in the interval $0 < \theta < \frac{\pi}{4}$. **(4)** **(+S2)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Expand the RHS** Let $S_x = \sin x$, $C_x = \cos x$, etc. $$\text{RHS} \equiv (1 + \sin x \cos y - \cos x \sin y)(\cos x + \sin y)$$ $$\equiv \cos x + \sin y + \sin x \cos x \cos y - \cos^2 x \sin y + \sin x \sin y \cos y - \cos x \sin^2 y$$

- **[M1]** Applies $\sin(x - y)$ formula and expands the brackets.
    

**Step 2: Use Pythagorean identities** Replace $\cos^2 x$ with $1 - \sin^2 x$ and $\sin^2 y$ with $1 - \cos^2 y$: $$\equiv \cos x + \sin y + \sin x \cos x \cos y - (1 - \sin^2 x)\sin y + \sin x \sin y \cos y - \cos x(1 - \cos^2 y)$$

- **[M1]** Replaces squared terms appropriately.
    

**Step 3: Simplify and factorise** $\equiv \cos x + \sin y + \sin x \cos x \cos y - \sin y + \sin^2 x \sin y + \sin x \sin y \cos y - \cos x + \cos x \cos^2 y$ $\equiv \sin x \cos x \cos y + \sin^2 x \sin y + \sin x \sin y \cos y + \cos x \cos^2 y$

- **[M1]** Cancels $\cos x$ and $\sin y$, expanding and rearranging.
    

**Step 4: Regroup to form LHS** $$\equiv \cos x \cos y(\sin x + \cos y) + \sin x \sin y(\sin x + \cos y)$$ $$\equiv (\sin x + \cos y)(\cos x \cos y + \sin x \sin y)$$

- **[M1]** Factors out $(\sin x + \cos y)$.
    

**Step 5: Complete identity** $$\equiv (\sin x + \cos y)\cos(x - y) \equiv \text{LHS}$$

- **[A1]** Correct use of $\cos(x - y)$ formula and conclusion.
    

#### **Part (b)**

**Step 6: Substitution** Set $x = 5\theta$ and $y = 3\theta$ in the identity from (a): $$\frac{\sin 5\theta + \cos 3\theta}{\cos 5\theta + \sin 3\theta} \equiv \frac{1 + \sin(5\theta - 3\theta)}{\cos(5\theta - 3\theta)} \equiv \frac{1 + \sin 2\theta}{\cos 2\theta}$$

- **[M1, M1]** Uses (a)'s result, re-arranging to place terms on LHS/RHS.
    

**Step 7: Double angle formulae** Let $s = \sin\theta, c = \cos\theta$: $$\equiv \frac{1 + 2\sin\theta\cos\theta}{\cos^2\theta - \sin^2\theta}$$

- **[M1, A1]** Use of double-angle formulae.
    

**Step 8: Factorise numerator and denominator** Replace $1$ with $\sin^2\theta + \cos^2\theta$: $$\equiv \frac{(\cos\theta + \sin\theta)^2}{(\cos\theta - \sin\theta)(\cos\theta + \sin\theta)} = \frac{\cos\theta + \sin\theta}{\cos\theta - \sin\theta}$$

- **[M1]** Factorisation & cancelling.
    

**Step 9: Convert to tan** Divide numerator and denominator by $\cos\theta$: $\equiv \frac{1 + \tan\theta}{1 - \tan\theta} *$

- **[A1]** Given Answer correctly obtained.
    

#### **Part (c)**

**Step 10: Set up equation in terms of tan** $$\frac{1 + \tan\theta}{1 - \tan\theta} = k \Rightarrow 1 + \tan\theta = k - k\tan\theta$ $\Rightarrow \tan\theta(k + 1) = k - 1 \Rightarrow \tan\theta = \frac{k - 1}{k + 1}$$

- **[M1, A1]** Rearranges to $\tan\theta = \dots$.
    

**Step 11: Justify unique solution in interval** Since $k > 1$, $k - 1 > 0$ and $k + 1 > 0$. Also $k - 1 < k + 1$. Thus, $0 < \frac{k - 1}{k + 1} < 1$. This means $0 < \tan\theta < 1$.

- **[B1]** Establishes the bounds for $\tan\theta$.
    

**Step 12: Conclude uniqueness** In the interval $0 < \theta < \frac{\pi}{4}$, $\tan\theta$ is a strictly increasing (one-to-one) continuous function that takes all values between 0 and 1. Therefore, there is exactly one solution for $\theta$.

- **[B1]** Convincing reasoning for unique solution mapping.
    

**Special Marks (+S2)**

- **[S2]** Award for a completely clear handling of the trigonometric identities throughout, with succinct notation and logic.