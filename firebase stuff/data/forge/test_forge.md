---
id: STEP_2_2014_Q1
carousel_category: Hall of Fame
---

### Question
Show that, for any continuous function $f$, 
$$\int_0^\pi x f(\sin x) \, dx = \frac{\pi}{2} \int_0^\pi f(\sin x) \, dx$$

Hence evaluate:
$$\int_0^\pi \frac{x \sin x}{1 + \cos^2 x} \, dx$$

### The Solution
The first part of this question screams for a standard reflection substitution. 
Let $I = \int_0^\pi x f(\sin x) \, dx$. 
We use the substitution $x = \pi - u$, which means $dx = -du$. The limits change from $0 \to \pi$ to $\pi \to 0$.

$$I = \int_\pi^0 (\pi - u) f(\sin(\pi - u)) (-du)$$

Since $\sin(\pi - u) = \sin u$, we can flip the limits to absorb the negative sign:

$$I = \int_0^\pi (\pi - u) f(\sin u) \, du$$

Splitting the integral gives:

$$I = \pi \int_0^\pi f(\sin u) \, du - \int_0^\pi u f(\sin u) \, du$$

Notice that the second integral is exactly our original $I$. So, $I = \pi \int_0^\pi f(\sin x) \, dx - I$. 
Moving $I$ to the left side:

$$2I = \pi \int_0^\pi f(\sin x) \, dx \implies I = \frac{\pi}{2} \int_0^\pi f(\sin x) \, dx$$

For the second part, note that $\frac{\sin x}{1 + \cos^2 x} = \frac{\sin x}{2 - \sin^2 x}$, which is a function of purely $\sin x$. We apply the identity we just proved:

$$\int_0^\pi \frac{x \sin x}{1 + \cos^2 x} \, dx = \frac{\pi}{2} \int_0^\pi \frac{\sin x}{1 + \cos^2 x} \, dx$$

Now, substitute $v = \cos x$, so $dv = -\sin x \, dx$. The limits become $1$ to $-1$:

$$\frac{\pi}{2} \int_1^{-1} \frac{-dv}{1 + v^2} = \frac{\pi}{2} \int_{-1}^1 \frac{dv}{1 + v^2}$$

This is a standard arctan integral:

$$\frac{\pi}{2} [\arctan(v)]_{-1}^1 = \frac{\pi}{2} \left( \frac{\pi}{4} - \left(-\frac{\pi}{4}\right) \right) = \frac{\pi^2}{4}$$

### Discussion
This is a gorgeous classic. It relies on the "King's Property" of definite integrals ($\int_a^b f(x) \, dx = \int_a^b f(a+b-x) \, dx$). What makes this specific application so elegant is how the $x$ term completely vanishes, turning a terrifying-looking integration by parts problem into a trivial arctan lookup. It perfectly illustrates why symmetry is often a more powerful tool than brute-force calculus.