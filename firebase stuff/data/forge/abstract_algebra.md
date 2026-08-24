---
id: "abstract_algebra_groups"
title: "Abstract Algebra"
carousel_category: "Hardcore Focus"
---

### Question
Let $G$ be a finite group of odd order. Show that the map $\phi: G \to G$ defined by $\phi(x) = x^2$ is a bijection.

### The Solution
Let $G$ be a finite group of order $n$, where $n = 2k + 1$ is an odd integer.

To show that $\phi(x) = x^2$ is a bijection, since $G$ is finite, it suffices to show that $\phi$ is either injective or surjective. Let us prove it is **injective**.

Suppose $\phi(x) = \phi(y)$ for some $x, y \in G$. This means:

$$ x^2 = y^2 $$

Since the order of $G$ is $2k + 1$, by Lagrange's Theorem, the order of any element $g \in G$ divides the order of the group. Therefore:

$$ g^{2k + 1} = e \quad \text{for all } g \in G $$

where $e$ is the identity element of $G$.

Using this identity, we can write:

$$ x = x \cdot e = x \cdot (x^2)^k = x^{2k+1} = x $$
Wait, more precisely:
$$ x = x^{2k+2} \cdot x^{-(2k+1)} = (x^2)^{k+1} \cdot e = (x^2)^{k+1} $$

Since $x^2 = y^2$, we can substitute $y^2$ for $x^2$:

$$ x = (x^2)^{k+1} = (y^2)^{k+1} = y^{2k+2} $$

Now, using the Lagrange identity for $y$:

$$ y^{2k+2} = y^{2k+1} \cdot y = e \cdot y = y $$

Therefore:

$$ x = y $$

This proves that $\phi$ is injective. Since $G$ is a finite set, any injective map from $G$ to itself is also surjective, and therefore $\phi$ is a **bijection**.

### Discussion
This is an incredibly clean and elegant group theory proof. 

The core of the trick is showing that when the order of the group $n$ is coprime to $2$ (which is true if and only if $n$ is odd), the squaring operation is invertible. In fact, the inverse map is simply $\psi(x) = x^{k+1}$ where $n = 2k+1$, because:

$$ \phi(\psi(x)) = (x^{k+1})^2 = x^{2k+2} = x^{2k+1} \cdot x = x $$

This bijection is the mathematical reason why every element in a group of odd order has a unique square root!
