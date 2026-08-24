---
id: differentiation_first_principles
title: "Differentiation from First Principles"
carousel_category: Calculus Stuff
---
### **Definition**

For a given function $f(x)$, continuous on the interval $[a,b]$, its gradient function is given as:

$$f'(x) = \lim_{\Delta \to 0} \frac{f(x + \Delta) - f(x)}{\Delta}$$

for $a \leq x \leq b$ and $x \in \mathbb{R}$.

### **Derivation**

The slope of any given curve at the point $(x, f(x))$ is estimated by comparing it with a small step in the x and y directions:

$$\text{gradient} = \frac{f(x + \Delta) - f(x)}{(x + \Delta) - x} = \frac{f(x + \Delta) - f(x)}{\Delta}$$

Our approximation for the gradient becomes more accurate as our comparison point approaches our point of interest:

$$\text{gradient} \simeq \frac{f(x + \Delta) - f(x)}{\Delta} \implies \lim_{\Delta \to 0} \frac{f(x + \Delta) - f(x)}{\Delta}$$

We define this process by the function $\frac{\mathrm{d}}{\mathrm{d}x}$:

$$\frac{\mathrm{d}}{\mathrm{d}x} \left[ f(x) \right] = \lim_{\Delta \to 0} \frac{f(x + \Delta) - f(x)}{\Delta}$$

### **Notation**

If you're well versed, you'll immediately realise that I've used two forms of notation here to describe the derivative: Leibniz's notation and Lagrange's notation. To clarify, Leibniz uses $\frac{\mathrm{d}y}{\mathrm{d}x}$ to express derivatives, whereas Lagrange uses $f'(x)$ to express the derivative.

If you've studied a lot of applied differential calculus in mechanics, you'll be far more familiar than most with Newton's Notation for the derivative: $$\dot{y}, \ddot{y}, \text{ and } \dddot{y}$$

At a far more advanced level, you'll become more aware of D-notation: $$(Df)(x) = \frac{\mathrm{d}f(x)}{\mathrm{d}x}$$, though it's not exactly used that often unless you have reached the undergraduate level of mathematics.

### **Further Reading: Alternative Differentiation Formulae**

Whilst there's nothing wrong with the standard differentiation formula, it's slightly deceptive with it being presented as the ONLY formula out there for finding the derivative. The entire premise of the derivative is zooming in on a point and observing the direction of the tangent with your estimation using very small values. What if instead of comparing the point of interest $(x, f(x))$ to a point a small step away $(x + \Delta, f(x + \Delta))$ (where $\Delta \approx 0$), we just compared any two points and shrank them down to $(x, f(x))$?

One such observation of the slope is called the Midpoint Method (which Edexcel Further Pure students will be familiar with in the Numerical Methods chapter). We can approximate the gradient of a curve by comparing points a small step backwards and forwards:

$$\mathrm{P}_1 = (x - \Delta, f(x - \Delta)) \hspace{1cm} \mathrm{P}_2 = (x + \Delta, f(x + \Delta))$$

where once again $\Delta \approx 0$.

The gradient of the secant line between these points (our approximation for the gradient of the slope) simplified is:

$$\text{gradient} \simeq \frac{f(x + \Delta) - f(x - \Delta)}{(x + \Delta) - (x - \Delta)} = \frac{f(x + \Delta) - f(x - \Delta)}{2 \Delta}$$

By taking the limit, we obtain a new gradient function formula:

$$\frac{\mathrm{d}}{\mathrm{d}x}[f(x)] = \lim_{\Delta \to 0} \frac{f(x + \Delta) - f(x - \Delta)}{2 \Delta}$$

You can test this out in your free time with functions like $x^2$ or $x^n$ or even trigonometric functions, and you will find it yields the exact same derivatives.

However, this symmetric approach requires caution. Take the function $f(x) = |x|$ at $x = 0$ for instance. The function is perfectly continuous at zero—meaning the left and right-hand limits of the _function_ match. But if you look at the graph, the left-hand slope is -1 and the right-hand slope is 1. There is a sharp spike, meaning there is no true derivative at $x = 0$.

Yet, if we blindly use our Midpoint formula, we get a false positive:

$$\lim_{\Delta \to 0} \frac{|0 + \Delta| - |0 - \Delta|}{2\Delta} = \lim_{\Delta \to 0} \frac{|\Delta| - |\Delta|}{2\Delta} = \lim_{\Delta \to 0} \frac{0}{2\Delta} = 0$$

This falsely implies a smooth, horizontal tangent at $x = 0$. This highlights why the standard one-sided limit is the strict mathematical definition. Where the Midpoint Method truly wins, however, is in numerical analysis.

>**Big O Notation and Error Bounding**
>
When computing derivatives numerically (by a computer rather than algebraically), we can't actually make $\Delta$ infinitely small. We have to pick a tiny number for $\Delta$ and accept that our answer will be an approximation. This is where Big O notation comes in.
>
The standard differentiation formula has an error of $O(\Delta)$. This means the error shrinks _linearly_. If you make your step size $\Delta$ ten times smaller, your approximation error becomes about ten times smaller.
>
Our Midpoint formula, however, has an error of $O(\Delta^2)$. This means the error shrinks _quadratically_. If you make $\Delta$ ten times smaller, your approximation error becomes a **hundred** times smaller. Because the symmetric nature of the Midpoint Method cancels out a lot of the structural error, it provides a vastly more accurate approximation of the slope without requiring the computer to work any harder.

### **Second-Order Formula**

One idea that many students have is whether or not you can use differentiation from first principles on itself to obtain a second-order variant, to which I say you can! All it requires is some algebraic manipulation and limit laws.

Start by defining a curve $y = f(x)$ and taking the derivative:

$$\frac{\mathrm{d}}{\mathrm{d}x} \left[ f(x) \right] = \lim_{\Delta \to 0} \frac{f(x + \Delta) - f(x)}{\Delta}$$

We can then plug this back into the formula:

$$\frac{\mathrm{d}^2 y}{\mathrm{d} x^2} = \frac{\mathrm{d}}{\mathrm{d}x} \left( \frac{\mathrm{d}y}{\mathrm{d}x} \right) = \lim_{\Delta \to 0} \frac{f'(x + \Delta) - f'(x)}{\Delta}$$

$$= \lim_{\Delta \to 0} \frac{\left[\lim_{\gamma \to 0} \frac{f(x + \Delta + \gamma) - f(x + \Delta)}{\gamma} \right] - \left[ \lim_{\gamma \to 0} \frac{f(x + \gamma) - f(x)}{\gamma} \right]}{\Delta}$$

We can simplify it down by assuming $\Delta$ and $\gamma$ approach 0 at the same rate:

$$\frac{\mathrm{d}^2y}{\mathrm{d}x^2} = \lim_{\Delta \to 0} \frac{f(x + 2 \Delta) - f(x + \Delta) - f(x + \Delta) + f(x)}{\Delta^2} = \lim_{\Delta \to 0} \frac{f(x + 2 \Delta) - 2 f(x + \Delta) + f(x)}{\Delta^2}$$

leaving us with our second-order forward differentiation formula.

> **Note:** Just as the Midpoint Method improved our first derivative, applying symmetric differences yields the **Central Second Difference**:
> 
> $$f''(x) \approx \frac{f(x + \Delta) - 2f(x) + f(x - \Delta)}{\Delta^2}$$
> 
> This is the gold standard for numerical second derivatives.

Finally, looking closely at our forward second-order derivation, you may notice a familiar pattern in the coefficients $(1, -2, 1)$. This formula can actually be extended to the n-th derivative by recognising the binomial pattern and utilising the binomial theorem:

$$\frac{\mathrm{d}^n y}{\mathrm{d}x^n} = \frac{1}{\Delta^n} \sum_{k = 0}^n \binom{n}{k} (-1)^{k} f(x + (n - k) \Delta)$$