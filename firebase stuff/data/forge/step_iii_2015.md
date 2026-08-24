---
id: "step_iii_2015_q1"
title: "STEP III 2015 Q1"
carousel_category: "Hall of Fame"
---

### Question
Find all solutions to the differential equation:

$$ \frac{d^2 y}{dx^2} - 2\frac{dy}{dx} + y = e^x \ln x \quad (x > 0) $$

subject to the initial conditions $y(1) = 0$ and $y'(1) = 0$.

### The Solution
To solve the linear non-homogeneous second-order differential equation:

$$ y'' - 2y' + y = e^x \ln x $$

First, we solve the homogeneous equation:

$$ y'' - 2y' + y = 0 $$

The characteristic equation is:

$$ r^2 - 2r + 1 = 0 \implies (r-1)^2 = 0 \implies r = 1 \text{ (repeated root)} $$

Therefore, the complementary function (CF) is:

$$ y_c(x) = (C_1 + C_2 x) e^x $$

Since the non-homogeneous term is $e^x \ln x$, we use the method of **Variation of Parameters**. Let the general solution be:

$$ y(x) = u_1(x) e^x + u_2(x) x e^x $$

We set up the system of equations for $u_1'$ and $u_2'$:

1. $u_1' e^x + u_2' x e^x = 0$
2. $u_1' e^x + u_2' (1+x) e^x = e^x \ln x$

From the first equation, we get $u_1' = -x u_2'$. Substituting this into the second equation:

$$ -x u_2' e^x + u_2' (1+x) e^x = e^x \ln x \implies u_2' e^x = e^x \ln x \implies u_2' = \ln x $$

Now, substitute $u_2'$ back to find $u_1'$:

$$ u_1' = -x \ln x $$

Integrate $u_2'$ to find $u_2(x)$:

$$ u_2(x) = \int \ln x \, dx = x \ln x - x + A $$

Integrate $u_1'$ to find $u_1(x)$ using integration by parts ($u=\ln x, dv=-x \, dx$):

$$ u_1(x) = -\int x \ln x \, dx = -\left( \frac{1}{2}x^2 \ln x - \int \frac{1}{2}x \, dx \right) = -\frac{1}{2}x^2 \ln x + \frac{1}{4}x^2 + B $$

Now substitute $u_1(x)$ and $u_2(x)$ back into the general solution equation:

$$ y(x) = \left(-\frac{1}{2}x^2 \ln x + \frac{1}{4}x^2 + B\right) e^x + \left(x \ln x - x + A\right) x e^x $$
$$ y(x) = \left( B + Ax - x^2 + \frac{1}{4}x^2 + \frac{1}{2}x^2 \ln x \right) e^x $$
$$ y(x) = \left( B + Ax - \frac{3}{4}x^2 + \frac{1}{2}x^2 \ln x \right) e^x $$

Using initial conditions $y(1) = 0$:

$$ 0 = \left( B + A - \frac{3}{4} + 0 \right) e \implies B + A = \frac{3}{4} $$

Using initial condition $y'(1) = 0$:

$$ y'(x) = y(x) + \left( A - \frac{3}{2}x + x \ln x + \frac{1}{2}x \right) e^x $$
$$ 0 = 0 + \left( A - \frac{3}{2} + 0 + \frac{1}{2} \right) e \implies A = 1 $$

Thus, $B = \frac{3}{4} - 1 = -\frac{1}{4}$. The particular solution is:

$$ y(x) = \left( x - \frac{1}{4} - \frac{3}{4}x^2 + \frac{1}{2}x^2 \ln x \right) e^x $$

### Discussion
This question beautifully synthesizes two core ideas of advanced analysis:
1. Identifying that standard undetermined coefficients cannot handle non-polynomial logarithmic forcing terms.
2. Employing Variation of Parameters carefully without getting bogged down in algebraic bookkeeping. 

The Wronskian of the homogeneous system is $W(e^x, xe^x) = e^{2x}$, which appears implicitly in our variation system and cancels the forcing exponent cleanly. A very pleasing STEP question.
