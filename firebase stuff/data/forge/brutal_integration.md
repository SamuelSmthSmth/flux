---
id: "brutal_integration_beast"
title: "Brutal Integration"
carousel_category: "Hardcore Focus"
---

### Question
Evaluate the integral:

$$ I = \int_{0}^{\pi} \ln(1 - 2a\cos x + a^2) \, dx \quad \text{for } a \in \mathbb{R} $$

### The Solution
This is a classic problem that can be resolved elegantly using **Feynman's Integration Trick** (Differentiation under the integral sign). Let:

$$ I(a) = \int_{0}^{\pi} \ln(1 - 2a\cos x + a^2) \, dx $$

Notice that $I(0) = \int_{0}^{\pi} \ln(1) \, dx = 0$.

Differentiating with respect to $a$:

$$ I'(a) = \int_{0}^{\pi} \frac{2a - 2\cos x}{1 - 2a\cos x + a^2) } \, dx $$

We can solve this using the standard Weierstrass substitution or complex numbers. A faster algebraic way is to manipulate the integrand:

$$ \frac{2a - 2\cos x}{1 - 2a\cos x + a^2} = \frac{1}{a} \left( 1 + \frac{a^2 - 1}{1 - 2a\cos x + a^2} \right) $$

Integrating this expression from $0$ to $\pi$:

$$ \int_{0}^{\pi} \frac{a^2 - 1}{1 - 2a\cos x + a^2} \, dx $$

Using the standard integral result:

$$ \int_{0}^{\pi} \frac{1}{A + B\cos x} \, dx = \frac{\pi}{\sqrt{A^2 - B^2}} \quad \text{for } A > |B| $$

Here, $A = 1+a^2$ and $B = -2a$. The term $A^2 - B^2 = (1+a^2)^2 - 4a^2 = (1-a^2)^2$. Thus, the square root is $|1-a^2|$.

If $|a| < 1$, then $1-a^2 > 0$:

$$ \int_{0}^{\pi} \frac{a^2 - 1}{1 - 2a\cos x + a^2} \, dx = (a^2 - 1) \frac{\pi}{1-a^2} = -\pi $$

Thus:

$$ I'(a) = \frac{1}{a} \left( \pi - \pi \right) = 0 \implies I(a) = \text{constant} $$

Since $I(0) = 0$, we have $I(a) = 0$ for all $|a| < 1$.

If $|a| > 1$, then $a^2 - 1 > 0$ and the square root is $a^2 - 1$:

$$ \int_{0}^{\pi} \frac{a^2 - 1}{1 - 2a\cos x + a^2} \, dx = (a^2 - 1) \frac{\pi}{a^2 - 1} = \pi $$

Thus:

$$ I'(a) = \frac{1}{a} \left( \pi + \pi \right) = \frac{2\pi}{a} $$

Integrating $I'(a)$ with respect to $a$:

$$ I(a) = 2\pi \ln|a| + C $$

By continuity at $a=1$, the two cases must match: $I(1) = 0 \implies C = 0$.

Therefore, the final result is:

$$ I = \begin{cases} 0 & \text{if } |a| \le 1 \\ 2\pi\ln|a| & \text{if } |a| > 1 \end{cases} $$

### Discussion
This is a gorgeous demonstration of how differentiation under the integral sign converts a transcendental logarithmic integrand into a clean rational trigonometric integrand. 

Interestingly, this is also a classic application of complex variables (Poisson's integral formula for a circle). If we let $z = e^{ix}$, the integral represents the real part of a contour integral over the unit circle, which immediately reveals the division of cases based on whether the singularity at $z=a$ lies inside or outside the contour.
