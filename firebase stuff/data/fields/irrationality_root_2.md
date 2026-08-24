---
id: "irrationality_of_root_2"
title: "Irrationality of √2"
carousel_category: "Essential Proofs"
---

### Formal Statement
The square root of 2 is an irrational number. That is, it cannot be expressed as a ratio of two integers $a$ and $b$:

$$ \sqrt{2} \neq \frac{a}{b} \quad \text{for any } a, b \in \mathbb{Z}, b \neq 0 $$

### Rigorous Proof
We proceed by contradiction. Assume that $\sqrt{2}$ is rational. Then there exist integers $a$ and $b$ (with $b \neq 0$) such that:

$$ \sqrt{2} = \frac{a}{b} $$

We can assume that the fraction $\frac{a}{b}$ is in its simplest form, meaning that $a$ and $b$ share no common factors (they are coprime).

Squaring both sides of the equation gives:

$$ 2 = \frac{a^2}{b^2} \implies a^2 = 2b^2 $$

Since $2b^2$ is even, it follows that $a^2$ must be even. Because the square of an odd integer is always odd, $a$ itself must be even. Therefore, we can write:

$$ a = 2k \quad \text{for some integer } k $$

Substituting this back into the original equation:

$$ (2k)^2 = 2b^2 \implies 4k^2 = 2b^2 \implies b^2 = 2k^2 $$

Since $2k^2$ is even, it follows that $b^2$ is even, which implies that $b$ must also be even.

However, if both $a$ and $b$ are even, they both share a common factor of $2$. This directly contradicts our initial assumption that the fraction $\frac{a}{b}$ is in simplest form.

Consequently, the assumption that $\sqrt{2}$ is rational is false, and $\sqrt{2}$ must be irrational.

### GeoGebra
```geogebra
// Geometric visual proof of irrationality using square folding
A = (0, 0)
B = (10, 0)
C = (10, 10)
D = (0, 10)
Polygon(A, B, C, D)
Diagonal = Segment(A, C)
```
