---
topic: "Quadratics"
subtopic: "Functions"
---

### Question 4

Given that $$f(x) = e^{x^3 - 2x}$$ **(a)** find $f'(x)$. **(2)**

The curves $C_1$ and $C_2$ are defined by the functions $g$ and $h$ respectively, where $$g(x) = 8x^3 e^{x^3 - 2x} \quad x \in \mathbb{R}, x > 0$$ $$h(x) = (3x^5 + 4x)e^{x^3 - 2x} \quad x \in \mathbb{R}, x > 0 $$**(b)** Find the $x$ coordinates of the points of intersection of $C_1$ and $C_2$. **(4)**

Given that $C_1$ lies above $C_2$ between these points of intersection, **(c)** find the area of the region bounded by the curves between these two points. Give your answer in the form $A + Be^C$ where $A$, $B$, and $C$ are exact real numbers to be found. **(7)** **(+S1)**

### Mark Scheme 4

#### **Part (a)**

**Step 1: Differentiate** $$f'(x) = (ax^2 + b)e^{x^3 - 2x}$$ $$f'(x) = (3x^2 - 2)e^{x^3 - 2x}$$

- **[M1, A1]** Valid attempt at chain rule. Correct derivative.
    

#### **Part (b)**

**Step 2: Equate functions** $$g(x) = h(x) \Rightarrow 8x^3 e^{x^3 - 2x} = (3x^5 + 4x)e^{x^3 - 2x}$$ $$\Rightarrow 8x^3 = 3x^5 + 4x$$

- **[M1]** Equates and cancels or factorises out exponentials.
    

**Step 3: Factorise** $$\Rightarrow x(3x^4 - 8x^2 + 4) = 0 \Rightarrow x(3x^2 - 2)(x^2 - 2) = 0$$

- **[M1]** Factorises or equivalent.
    

**Step 4: Find roots** $(x > 0)$ $$x = \sqrt{\frac{2}{3}} = \frac{\sqrt{6}}{3}$ or $x = \sqrt{2}$$

- **[A1, A1 (S+)]** A1 for one correct, A2 for both. (S+ reason for rejecting negative roots).
    

#### **Part (c)**

**Step 5: Set up integral** $$\text{Area} = \int_{\alpha}^{\beta} (8x^3 - 3x^5 - 4x)e^{x^3 - 2x} dx$$

- **[M1]** Area integral set up correctly.
    

**Step 6: Integration by parts** $$\text{Integral} = (-) \int (x^3 - 2x)(3x^2 - 2)e^{x^3 - 2x} dx$$ $$= (-) \left[ (x^3 - 2x)e^{x^3 - 2x} - \int (3x^2 - 2)e^{x^3 - 2x} dx \right]$$

- **[M1, A1]** Identifies appropriate parts split and applies. A1 for correct result.
    

**Step 7: Evaluate integral** $$= \pm (-(x^3 - 2x)e^{x^3 - 2x} + e^{x^3 - 2x})$$

- **[A1]** Correct result after second integral.
    

**Step 8: Apply limits** $$\left[ e^{x^3 - 2x} - (x^3 - 2x)e^{x^3 - 2x} \right]_{\sqrt{6}/3}^{\sqrt{2}} = \dots$$

- **[M1]** Applies their limits from (b) either way round.
    

**Step 9: Simplify** $$= (1) - \left(1 - \frac{6\sqrt{6}}{27} + 2\frac{\sqrt{6}}{3}\right)e^{\frac{6\sqrt{6}}{27} - 2\frac{\sqrt{6}}{3}}$$

- **[A1]** Simplifies at least the $1$ correctly following a correct expression.
    

**Step 10: Final Answer** $$= 1 - \frac{4\sqrt{6} + 9}{9} e^{-\frac{4\sqrt{6}}{9}}$$ oe simplified.

- **[A1 (S+)]** Correct in a simplified form. (S+ if any reasoning for correct sign given).
    

**Special Mark (+S1)**

- **[S1]** Award S1 for a succinct fully correct solution (or 10+ marks with an S+ point).