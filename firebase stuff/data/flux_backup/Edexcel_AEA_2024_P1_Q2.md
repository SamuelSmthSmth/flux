---
topic: "Differentiation"
subtopic: "Finding the derivative"
---

### Question 2

**Figure 1**

Figure 1 shows the curve defined by the equation $y^2 + 3y - 6\sin y = 4 - x^2$

The point $P(x, y)$ lies on the curve. The distance from the origin, $O$, to $P$ is $D$.

**(a)** Write down an equation for $D^2$ in terms of $y$ only. **(1)**

**(b)** Hence determine the minimum value of $D$ giving your answer in simplest form. **(5)**

### Mark Scheme

#### **Part (a)**

**Step 1: Equation for distance squared** Distance from curve to $O$ is given by $$D^2 = (x-0)^2 + (y-0)^2 = x^2 + y^2 = 4 - 3y + 6\sin y$$

- **[B1]** Correct formula. Allow with $D^2 = \dots$ or $x^2 + y^2 = \dots$
    

#### **Part (b)**

**Step 2: Differentiate to find minimum** Need to minimise: $$\frac{\text{d}}{\text{dy}}D^2 (= -3 + 6\cos y) = 0$$ Or e.g. $$\frac{\text{d}D}{\text{dy}}\left( = \frac{1}{2}\frac{-3 + 6\cos y}{\sqrt{4 - 3y + 6\sin y}} \right) = 0$$

- **[M1]** Realises they need to minimise and applies a correct process to do so. The differentiation need not be correct for this mark.
    

**Step 3: Solve derivative equal to zero** $$\Rightarrow \cos y = \frac{1}{2} \Rightarrow y = \pm\frac{\pi}{3}$$

- **[A1]** At least one of $y = \pm\frac{\pi}{3}$ from a correct derivative.
    

**Step 4: Substitute $y$ back into $D^2$** $$\Rightarrow D^2 = 4 - 3\left(\pm\frac{\pi}{3}\right) + 6\sin\left(\pm\frac{\pi}{3}\right) = \dots$$

- **[dM1]** Proceeds to find a value for $D$ or $D^2$ for either root of form $k\pi \in (-5, 2), k \neq 0$.
    

> _Note: If the derivative was not fully correct, allow the final two marks below for work from a correct numerator set to zero, ie $-3 + 6\cos y = 0$_

**Step 5: Select the correct root for the minimum** From graph, minimum is clearly in lower half plane. (Alt: $$\frac{\text{d}^2}{\text{dy}^2}D^2 = -6\sin y > 0$$ for the negative root only.) Hence $D^2 = 4 + \pi - 6\frac{\sqrt{3}}{2}$

- **[A1]** Selects correct solution for the minimum with minimal reason, getting at least as far as $D^2$. Reason may be comparison of relative values and choosing smaller (accept if both found and correct one clearly indicated as answer).
    

**Step 6: Final minimum distance** So minimum distance is $D = \sqrt{4 + \pi - 3\sqrt{3}}$

- **[A1]** Correct simplified value only for minimum distance. (Allow if no reason given.)
