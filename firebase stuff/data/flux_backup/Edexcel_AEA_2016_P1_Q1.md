---
topic: "Functions and Graphs"
subtopic: "Composite functions"
---

### **Question 1**

The function $f$ is given by $$f(x) = x^2 - 4x + 9 \quad x \in \mathbb{R}, x \ge 3$$

**(a)** Find the range of $f$. **(2)**

The function $g$ is given by $$g(x) = \frac{10}{x + 1} \quad x \in \mathbb{R}, x \ge 4$$

**(b)** Find an expression for $gf(x)$. **(1)**

**(c)** Find the domain and range of $gf$. **(4)** **(Total 7 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Determine the minimum value of f(x) on the restricted domain** $$f(3) = 3^2 - 4(3) + 9 = 6$$

- **[M1]** Attempt to evaluate $f(3)$.
    

Alternatively, complete the square: $$f(x) = (x - 2)^2 + 5.$$ The minimum of the quadratic is at $(2, 5)$, but since the domain is $x \ge 3$, the minimum for this domain is at $x = 3$. Therefore, the range is: $f(x) \ge 6$

- **[A1]** Correct range established.
    

#### **Part (b)**

**Step 2: Substitute f(x) into g(x)** $$gf(x) = \frac{10}{(x^2 - 4x + 9) + 1} = \frac{10}{x^2 - 4x + 10}$$

- **[B1]** Correct expression (or equivalent).
    

#### **Part (c)**

**Step 3: State the domain of gf** The domain of $gf$ is the same as the domain of the inner function $f$ (provided $f(x)$ falls within the domain of $g$, which requires $f(x) \ge 4$. Since $f(x) \ge 6$, this is satisfied). Domain: $x \ge 3$

- **[B1]** Correct domain stated.
    

**Step 4: Determine the range of gf** The range of $f$ is $f(x) \ge 6$. The smallest value we can put into $g$ is 6. $$g(6) = \frac{10}{6 + 1} = \frac{10}{7}$$

- **[M1]** Attempt to evaluate $g(6)$ (or equivalent boundary check).
    

As $x \to \infty$, $f(x) \to \infty$, which means the denominator of $gf(x)$ grows arbitrarily large. Thus, $gf(x) \to 0$. Since the numerator is positive, $gf(x)$ remains strictly greater than 0.

- **[B1]** Notes that $gf(x) > 0$ (not just in words; requires establishing the lower bound).
    

The range of $gf$ is: $$0 < gf(x) \le \frac{10}{7}$$

- **[A1]** Correct range with strict and non-strict inequalities correctly placed. Allow B0A1 if bounds are correct but reasoning was flawed.