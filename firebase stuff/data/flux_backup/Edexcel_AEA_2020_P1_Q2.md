---
topic: "Quadratics"
subtopic: "Functions"
---

### Question 2

The functions $f$ and $g$ are defined by $$f(x) = 2\sqrt{1 - e^{-x}} \quad x \in \mathbb{R}, x \ge 0$$ $$g(x) = \ln(4 - x^2) \quad x \in \mathbb{R}, -2 < x < 2$$

**(a)** (i) Explain why $fg$ cannot be formed as a composite function. (ii) Explain why $gf$ can be formed as a composite function. **(2)**

**(b)** (i) Find $gf(x)$, giving the answer in the form $$gf(x) = a + bx$$ where $a$ and $b$ are constants. (ii) State the domain and range of $gf$. **(5)**

**(c)** Sketch the graph of the function $gf$. On your sketch, you should show the coordinates of any points where the graph meets or crosses the coordinate axes. **(2)**

The circle $C$ with centre $(0, -\ln 9)$ touches the line with equation $$y = gf(x)$$ at precisely one point. **(d)** Find an equation of the circle $C$. **(3)** **(+S1)**

### Mark Scheme 2

#### **Part (a)**

**Step 1: Explain impossibility of fg** As the ranges of $f$ and $g$ are $0 \le f(x) < 2$ and $g(x) \le \ln 4$. A function $fg$ cannot be formed as the range of $g$ does not lie in the domain of $f$. (e.g., $g(7/4) = \ln(15/16) < 0$ so range of $g$ is not in domain of $f$).

- **[B1]** A reason or example is acceptable.
    

**Step 2: Explain validity of gf** A function $gf$ can be formed as the range of $f$ lies in the domain of $g$.

- **[B1]** Correct range for $f$ must have been found/implied and reason given.
    

#### **Part (b)**

**Step 3: Find composite function gf(x)** $$g(f(x)) = \ln(4 - (2\sqrt{1 - e^{-x}})^2)$$

- **[M1]** Attempts the composite.
    

$$= \ln(4 - 4(1 - e^{-x})) = \ln(4e^{-x}) = \ln 4 + \ln(e^{-x})$$

- **[A1]** Correct composite with square evaluated, need not be simplified.
    

$$gf(x) = \ln 4 - x$$ (or $2\ln 2 - x)$

- **[A1]** Correct form $a + bx$.
    

**Step 4: Domain and Range** Domain is $x \in \mathbb{R}, x \ge 0$ Range is $gf(x) \le \ln 4$

- **[B1, B1]** Correct domain and range.
    

#### **Part (c)**

**Step 5: Sketch graph** _(Sketch should be a straight line segment with negative gradient)_ Line starting at $(0, \ln 4)$ and passing through $(\ln 4, 0)$.

- **[M1]** A line consistent with their gradient and intercept from (b).
    
- **[A1]** Correct specific segment in the correct domain.
    

#### **Part (d)**

**Step 6: Determine radius** If $X$ is centre $(0, -\ln 9)$, $P$ is $(0, \ln 4)$ and $Q$ is the point where the circle touches the line $y = \ln 4 - x$, then triangle $XPQ$ is an isosceles right-angled triangle. $$2r^2 = (\ln 4 - (-\ln 9))^2 \Rightarrow r^2 = \dots$$

- **[M1 (S+)]** A complete method to find $r$ or $r^2$ where $r$ is the radius.
    

$$r^2 = \frac{1}{2}(\ln 36)^2 = 2(\ln 6)^2$$

- **[A1]** Correct value for $r^2$.
    

**Step 7: Equation of circle** So equation of $C$ is: $$x^2 + (y + \ln 9)^2 = 2(\ln 6)^2$$ oe

- **[A1]** Correct equation.
    

**Special Mark (+S1)**

- **[S1]** Award S1 for a clear and concise solution that scores 10+ marks and includes the S+ point (succinct method for radius).