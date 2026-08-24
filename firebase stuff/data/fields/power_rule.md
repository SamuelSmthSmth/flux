---
id: differentiation_power_rule
title: "The Product Rule"
carousel_category: Calculus Stuff
---
### **Theorem**

Let $y = x^n$ for some integer $n \ge 1$. Then, $\frac{\mathrm{d}}{\mathrm{d}x}(x^n) = nx^{n-1}$.

_(Note: While the Power Rule is ultimately true for any real number $n \in \mathbb{R}$, this specific proof relies on the combinatorial Binomial Theorem, which requires $n$ to be a positive integer.)_

### **Derivation**

Using the formal definition of the derivative gives us:

$$\frac{\mathrm{d}y}{\mathrm{d}x} = \lim_{\Delta \to 0} \frac{f(x + \Delta) - f(x)}{\Delta}$$

So for our specific function, we have:

$$\frac{\mathrm{d}}{\mathrm{d}x} \left( x^n \right) = \lim_{\Delta \to 0} \frac{(x + \Delta)^n - x^n}{\Delta}$$

Utilising the Binomial Theorem to expand $(x + \Delta)^n$, we obtain:

$$\frac{\mathrm{d}}{\mathrm{d}x}(x^n) = \lim_{\Delta \to 0} \frac{\left[ \sum_{k = 0}^n \binom{n}{k} x^{n - k} \Delta^k \right] - x^n}{\Delta}$$

$$= \lim_{\Delta \to 0} \frac{\left[x^n + n \Delta x^{n - 1} + \binom{n}{2}\Delta^2x^{n-2} + \dots + \binom{n}{n - 2}\Delta^{n-2}x^2 + n \Delta^{n - 1}x + \Delta^n \right] - x^n}{\Delta}$$

The $x^n$ terms cancel out. After factoring out a $\Delta$ from the remaining terms in the numerator and simplifying, we obtain:

$$\frac{\mathrm{d}}{\mathrm{d}x}(x^n) = \lim_{\Delta \to 0} \left( n x^{n-1} + \binom{n}{2}\Delta x^{n-2} + \dots + \binom{n}{n - 2}\Delta^{n-3}x^2 + n \Delta^{n - 2}x + \Delta^{n - 1} \right)$$

Though not explicitly stated until now, we are making use of standard limit laws. For arbitrary functions $f(x)$ and $g(x)$ that are continuous on an interval, and for some constant $\lambda$:

$$\lim_{x \to \alpha} \left[ f(x) + g(x) \right] = \lim_{x \to \alpha} f(x) + \lim_{x \to \alpha} g(x)$$

$$\lim_{x \to \alpha} \left[ \lambda \cdot f(x) \right] = \lambda \cdot \lim_{x \to \alpha} f(x)$$

Applying these limit laws (specifically as our $\Delta \to 0$), we can separate the terms:

$$= n x^{n-1} \lim_{\Delta \to 0} (1) + \lim_{\Delta \to 0} \left[ \binom{n}{2}\Delta x^{n-2} + \dots + n\Delta^{n - 2}x + \Delta^{n - 1} \right]$$

As $\Delta \to 0$, every term containing a $\Delta$ evaluates to zero. Taking the limit leaves us with our expected answer:

$$\frac{\mathrm{d}}{\mathrm{d}x}(x^n) = n x^{n-1}$$

### **Further Reading**

#### **Bridging the Gap: Rational Numbers ($n \in \mathbb{Q}$)**

The Binomial Theorem proof only works for positive integers. But before jumping straight to real numbers, how do we prove the Power Rule works for fractions, like $y = x^{p/q}$? We can cleverly use Implicit Differentiation to turn it back into an integer problem.

By raising both sides to the power of $q$, we get:

$$y^q = x^p$$

Because $p$ and $q$ are integers, we can now safely use our proven Power Rule and the Chain Rule to differentiate both sides with respect to $x$:

$$q y^{q-1} \frac{\mathrm{d}y}{\mathrm{d}x} = p x^{p-1}$$

Rearranging for $\frac{\mathrm{d}y}{\mathrm{d}x}$ gives:

$$\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{p}{q} \cdot \frac{x^{p-1}}{y^{q-1}}$$

Finally, we substitute our original $y = x^{p/q}$ back in and use our exponent rules to simplify:

$$\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{p}{q} \cdot \frac{x^{p-1}}{(x^{p/q})^{q-1}} = \frac{p}{q} \cdot \frac{x^{p-1}}{x^{p - p/q}} = \frac{p}{q} x^{(p-1) - (p - p/q)} = \frac{p}{q} x^{\frac{p}{q} - 1}$$

This proves the Power Rule works flawlessly for all rational numbers!

#### **Generalising to all Real Numbers ($n \in \mathbb{R}$)**

To prove the Power Rule for _any_ real number—including irrational numbers like $n = \pi$ or $n = \sqrt{2}$—we can use the exponential definition of a base: $x^n = e^{n \ln(x)}$. Applying the Chain Rule to $e^{n \ln(x)}$ neatly produces $n x^{n-1}$ for absolutely all real numbers.

#### **Alternative Power Rule Derivation**

Although we used the standard forward-difference quotient throughout this proof to obtain the derivative, it's also entirely possible to use the symmetric difference quotient:

$$\frac{\mathrm{d}y}{\mathrm{d}x} = \lim_{\Delta \to 0} \frac{f(x + \Delta) - f(x - \Delta)}{2 \Delta}$$

This is a lesser-known derivative formula that any student can derive with enough algebraic thinking, and it produces the exact gradient functions for any arbitrary differentiable function. _(Note: While fantastic for numerical approximations, be careful when applying this to functions with sharp corners, like $f(x) = |x|$, as it can falsely imply a derivative exists where it does not)._

For practice, attempt to derive this alternative formula and test it by attempting to obtain $nx^{n-1}$ using it.

#### **Repeated Application**

Using the Power Rule once takes us from the function $x^n$ to the function $n x^{n-1}$, but what would happen if we just kept applying it? Applying the rule twice or three times shows us an interesting pattern:

$$\frac{\mathrm{d}^2}{\mathrm{d}x^2}(x^n) = n \cdot (n - 1) \cdot x^{n-2}$$

$$\frac{\mathrm{d}^3}{\mathrm{d}x^3}(x^n) = n \cdot (n - 1) \cdot (n - 2) \cdot x^{n-3}$$

The constants in front of the variable $x$ appear to look like a shortened factorial, or more specifically, the permutation formula $^n P_k = \frac{n!}{(n - k)!}$, with $k$ representing the number of times we took the derivative.

Extrapolating upon this result and pattern, we can obtain the general formula:

$$\frac{\mathrm{d}^k}{\mathrm{d}x^k}(x^n) = \ ^n P _k \ \cdot x^{n - k} = \frac{n!}{(n - k)!} \ \cdot x^{n - k}, \ \ \forall n \geq k$$

Following on from this, we can also easily find what the n-th derivative would be by simply letting $n = k$:

$$\frac{\mathrm{d}^n}{\mathrm{d}x^n}(x^n) = \ ^n P _n \ \cdot x^{n - n} = \frac{n!}{(n - n)!} = \frac{n!}{0!} = n!$$

This is very useful for finding the n-th derivative of a given polynomial $P(x)$ of degree $n$. If the polynomial has a leading coefficient of $a_n$ (i.e., $P(x) = a_nx^n + \dots$), the n-th derivative will always simply be $a_n \cdot n!$

#### **Discrete Calculus and "Falling Factorials"**

Since we've noticed the factorial pattern in derivatives, what happens if we look at _discrete_ mathematics? In discrete calculus, instead of taking limits, we find the gradient by taking steps of exactly 1. The discrete derivative (the forward difference) is defined as:

$$\Delta f(x) = f(x + 1) - f(x)$$

If you apply this to $x^n$ (e.g., $x^2$), the Power Rule breaks down: $\Delta(x^2) = (x+1)^2 - x^2 = 2x + 1$, which is not $2x$.

However, the Power Rule _is_ saved if we replace standard powers with **"falling factorials"**. A falling factorial is written as $x^{\underline{n}}$ and is defined as:

$$x^{\underline{n}} = x(x-1)(x-2)\dots(x-n+1)$$

Amazingly, if you apply the discrete derivative to a falling factorial, it perfectly mimics our continuous calculus rule:

$$\Delta (x^{\underline{n}}) = n x^{\underline{n-1}}$$

This beautifully ties together the combinatorial and factorial nature of the Power Rule!

#### **Fractional Derivatives**

By deduction and testing, we know that $\frac{\mathrm{d}^n}{\mathrm{d}x^n}(x^n) = n!$. However, this is only true for integers $n \in \mathbb{N}$. In mathematics, it is often highly preferable to have continuous functions so we can plug in any value we like.

If we want to observe our derivative pattern with continuity, we need to find a function that maps to the factorial function ($n!$) but fills in the non-integer gaps...

Introducing the Gamma function:

$$\Gamma (z) = \int_{0}^{\infty} e^{-t} t^{z - 1} \ \mathrm{d}t \mapsto (z - 1)!$$

This function was initially studied and introduced by Bernoulli attempting to make the factorial function continuous. There are FAR too many variations of this function to cover; an example of another variation is the Weierstrass definition:

$$\Gamma (z) = \frac{e^{- \gamma z}}{z} \prod_{n = 1}^{\infty} \left( 1 + \frac{z}{n} \right)^{-1} e^{z/n}$$

which you will likely never see or use as an A-Level student!

Back to the issue at hand: if we substitute our continuous Gamma function in place of the discrete factorial function, keeping in mind that $\Gamma(n+1) = n!$, we obtain the formula for the k-th derivative:

$$\frac{\mathrm{d}^k}{\mathrm{d}x^k}(x^n) = \frac{\Gamma (n + 1) \cdot x^{n - k}}{\Gamma (n - k + 1)}$$

Now we can plug in non-integer values for $k$, like $k = 0.5$ (the "half-derivative") for $n = 1$:

$$\left. \frac{\mathrm{d}^{0.5}}{\mathrm{d}x^{0.5}}(x) \ \right|_{n = 1} = \frac{\Gamma (2) \cdot x^{0.5}}{\Gamma (1.5)} = \frac{1}{\frac{\sqrt{\pi}}{2}} \sqrt{x} = \frac{2}{\sqrt{ \pi }} \sqrt{x}$$

This is part of a much bigger field of study called Fractional Calculus, which is a specific branch of mathematical analysis dedicated to exploring the generalisation of traditional calculus operations. Whilst not that useful for early Pure Mathematics, it is incredibly powerful in Applied Mathematics for things like signal processing and electromagnetism.
