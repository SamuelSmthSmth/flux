---
topic: "Exponentials and Logarithms"
subtopic: "Laws of logarithms"
---

### **Question 4**

**(a)** Given that $x > 0$, $y > 0$, $x \ne 1$ and $n > 0$, show that $\log_{x} y = \log_{x^{n}} y^{n}$ **(2)**

**(b)** Solve the following, leaving your answers in the form $2^p$, where $p$ is a rational number. (i) $\log_{2} u + \log_{4} u^{2} + \log_{8} u^{3} + \log_{16} u^{4} = 5$ **(2)** (ii) $\log_{2} v + \log_{4} v + \log_{8} v + \log_{16} v = 5$ **(3)** (iii) $\log_{4} w^{2} + \frac{3 \log_{8} 64}{\log_{2} w} = 5$ **(4)** **(Total 11 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Convert to exponential form** Let $k = \log_{x} y \Rightarrow x^{k} = y$.

- **[M1]** Takes the expression out of logs and sets up an attempt involving $y^n$ (or uses the change of base formula appropriately).
    

**Step 2: Manipulate exponents** Raise both sides to the power of $n$: $y^{n} = (x^{k})^{n} = x^{nk} = (x^{n})^{k}$ Therefore, converting back to logarithmic form: $\log_{x^{n}} y^{n} = k = \log_{x} y \quad (*)$

- **[A1 cso]** Correct proof with no incorrect working seen.
    

#### **Part (b)(i)**

**Step 3: Apply the identity from part (a)** Using the result $\log_{x^n} y^n = \log_x y$, each term can be simplified: $\log_4 u^2 = \log_{2^2} u^2 = \log_2 u$ $\log_8 u^3 = \log_{2^3} u^3 = \log_2 u$ $\log_{16} u^4 = \log_{2^4} u^4 = \log_2 u$

- **[M1]** Converts all terms to the same base and evaluates.
    

**Step 4: Solve for u** $4 \log_{2} u = 5 \Rightarrow \log_{2} u = \frac{5}{4}$ $u = 2^{5/4}$

- **[A1]** Correct answer (allow $p = 1.25$).
    

#### **Part (b)(ii)**

**Step 5: Apply change of base** Rewrite all terms using base 2: $\log_{2} v + \frac{1}{2}\log_{2} v + \frac{1}{3}\log_{2} v + \frac{1}{4}\log_{2} v = 5$

- **[M1]** Converts all to the same base.
    

**Step 6: Combine terms and solve** $\left(1 + \frac{1}{2} + \frac{1}{3} + \frac{1}{4}\right)\log_{2} v = 5 \Rightarrow \frac{25}{12}\log_{2} v = 5$

- **[M1]** Combines into a single log term or numeric coefficient.
    

$$\log_{2} v = \frac{60}{25} = \frac{12}{5} \Rightarrow v = 2^{12/5}$$

- **[A1]** Correct answer (allow $p = 2.4$).
    

#### **Part (b)(iii)**

**Step 7: Simplify the terms** Using the property, $\log_4 w^2 = \log_2 w$. Evaluate the numerator: $\log_8 64 = 2$. Substitute these back into the equation: $$\log_{2} w + \frac{3 \times 2}{\log_{2} w} = 5$$

- **[M1]** Evaluates $\log_8 64$ and gets logs to the same base.
    

**Step 8: Form and solve a quadratic** Let $t = \log_2 w$. $$t + \frac{6}{t} = 5 \Rightarrow t^2 - 5t + 6 = 0$$

- **[M1]** Reduces the equation to a three-term quadratic.
    

$$(t - 3)(t - 2) = 0 \Rightarrow t = 2 \text{ or } t = 3$$

- **[A1]** Correct roots $2$ and $3$.
    

**Step 9: Find corresponding w values** If $$\log_2 w = 2 \Rightarrow w = 2^2$$. If $\log_2 w = 3 \Rightarrow w = 2^3$.

- **[A1]** Both answers correctly specified (accept $4$ and $8$ initially, but must be in requested format).