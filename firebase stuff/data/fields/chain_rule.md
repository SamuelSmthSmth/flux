---
id: "differentiation_chain_rule"
title: "The Chain Rule"
carousel_category: "Calculus Stuff"
---

### Formal Statement
Let $y = f(u)$ and $u = g(x)$ be differentiable functions. The derivative of the composite function $(f \circ g)(x)$ with respect to $x$ is given by:

$$ \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} $$

In function notation:

$$ (f \circ g)'(x) = f'(g(x)) \cdot g'(x) $$

### Rigorous Proof
We define the derivative of the composite function from first principles. Let $y = (f \circ g)(x)$. The derivative is defined as:

$$ \frac{dy}{dx} = \lim_{\Delta x \to 0} \frac{\Delta y}{\Delta x} $$

Let $\Delta u = g(x + \Delta x) - g(x)$. Since $g$ is continuous, as $\Delta x \to 0$, we have $\Delta u \to 0$.

We can write the change in $y$ as $\Delta y = f(u + \Delta u) - f(u)$. 

If $\Delta u \neq 0$ in a neighborhood of $0$, we can express the difference quotient as:

$$ \frac{\Delta y}{\Delta x} = \frac{\Delta y}{\Delta u} \cdot \frac{\Delta u}{\Delta x} $$

Taking the limit as $\Delta x \to 0$:

$$ \frac{dy}{dx} = \lim_{\Delta x \to 0} \left( \frac{\Delta y}{\Delta u} \cdot \frac{\Delta u}{\Delta x} \right) = \left( \lim_{\Delta u \to 0} \frac{\Delta y}{\Delta u} \right) \cdot \left( \lim_{\Delta x \to 0} \frac{\Delta u}{\Delta x} \right) $$

Since $f$ and $g$ are differentiable, this evaluates to:

$$ \frac{dy}{dx} = f'(u) \cdot g'(x) = f'(g(x)) \cdot g'(x) $$

### GeoGebra
```geogebra
// Dynamic secant line approximation to composite tangent
Slider(0, 5, 0.1, 1, 200, false, true, false, false)
f(x) = sin(x)
g(x) = x^2
h(x) = f(g(x))
P = (a, h(a))
Q = (a + h, h(a + h))
Line(P, Q)
```
