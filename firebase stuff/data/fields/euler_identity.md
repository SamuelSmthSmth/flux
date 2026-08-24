---
id: "euler_identity"
title: "Euler's Identity"
carousel_category: "Beautiful Mathematics"
---

### Formal Statement
Euler's identity establishes a profound connection between five of the most fundamental constants in mathematics ($e$, $i$, $\pi$, $1$, and $0$):

$$ e^{i\pi} + 1 = 0 $$

### Rigorous Proof
Euler's identity is a special case of Euler's formula, which states that for any real number $x$:

$$ e^{ix} = \cos x + i \sin x $$

We can prove Euler's formula using the Maclaurin series expansion. The Maclaurin series for $e^z$ is:

$$ e^z = \sum_{n=0}^{\infty} \frac{z^n}{n!} = 1 + z + \frac{z^2}{2!} + \frac{z^3}{3!} + \frac{z^4}{4!} + \dots $$

Let $z = ix$. Substituting this in:

$$ e^{ix} = 1 + ix + \frac{(ix)^2}{2!} + \frac{(ix)^3}{3!} + \frac{(ix)^4}{4!} + \frac{(ix)^5}{5!} + \dots $$

Using the properties of the imaginary unit $i$ ($i^2 = -1, i^3 = -i, i^4 = 1, i^5 = i$, etc.), we can expand the series:

$$ e^{ix} = 1 + ix - \frac{x^2}{2!} - \frac{ix^3}{3!} + \frac{x^4}{4!} + \frac{ix^5}{5!} - \dots $$

Group the real terms and the imaginary terms separately:

$$ e^{ix} = \left( 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \dots \right) + i \left( x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots \right) $$

Recognize that the first parenthetical term is the Maclaurin series for $\cos x$, and the second is the Maclaurin series for $\sin x$:

$$ e^{ix} = \cos x + i \sin x $$

Now, evaluate this formula at $x = \pi$:

$$ e^{i\pi} = \cos\pi + i \sin\pi $$

Since $\cos\pi = -1$ and $\sin\pi = 0$:

$$ e^{i\pi} = -1 + i(0) = -1 \implies e^{i\pi} + 1 = 0 $$

This completes the proof.

### GeoGebra
```geogebra
// Complex number rotation on the unit circle
Slider(0, 6.28, 0.05, 1, 200, false, true, false, false)
Point = (cos(a), sin(a))
UnitCircle = Circle((0,0), 1)
```
