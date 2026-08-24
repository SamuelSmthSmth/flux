---
id: "completing_the_square"
title: "Completing the Square"
carousel_category: "Foundational Algebra"
---

### Formal Statement
Any quadratic expression of the form $ax^2 + bx + c$ can be written in the vertex form:

$$ ax^2 + bx + c = a\left(x + \frac{b}{2a}\right)^2 + \left(c - \frac{b^2}{4a}\right) $$

### Rigorous Proof
Let us start with the standard quadratic expression and factor out the leading coefficient $a$ from the first two terms:

$$ ax^2 + bx + c = a\left(x^2 + \frac{b}{a}x\right) + c $$

To form a perfect square trinomial inside the parentheses, we need to add the square of half the coefficient of $x$. The coefficient of $x$ is $\frac{b}{a}$, and half of it is $\frac{b}{2a}$. Its square is:

$$ \left(\frac{b}{2a}\right)^2 = \frac{b^2}{4a^2} $$

Since we are adding this term inside the parentheses (which is multiplied by $a$), we must simultaneously subtract the same quantity from the outside of the parentheses to keep the overall expression equivalent:

$$ ax^2 + bx + c = a\left(x^2 + \frac{b}{a}x + \frac{b^2}{4a^2}\right) + c - a\left(\frac{b^2}{4a^2}\right) $$

Now, rewrite the perfect square trinomial as a squared binomial, and simplify the constant term:

$$ ax^2 + bx + c = a\left(x + \frac{b}{2a}\right)^2 + c - \frac{b^2}{4a} $$

This completes the proof.

### GeoGebra
```geogebra
// Dynamic geometric representation of completing the square
x_slider = Slider(1, 5, 0.1, 1, 200, false, true, false, false)
b_slider = Slider(1, 4, 0.1, 1, 200, false, true, false, false)
MainSquare = Polygon((0,0), (x_slider,0), (x_slider,x_slider), (0,x_slider))
```
