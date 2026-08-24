---
topic: "Sequences and Series"
subtopic: "Sigma notation"
---

### **Question 5**

**(a)** Show that $$\sum_{r=0}^{n} x^{-r} = \frac{x}{x - 1} - \frac{x^{-n}}{x - 1} \quad \text{where } x \ne 0 \text{ and } x \ne 1$$ **(2)**

**(b)** Hence find an expression in terms of $x$ and $n$ for $$\sum_{r=0}^{n} r x^{-(r+1)} \quad \text{for } x \ne 0 \text{ and } x \ne 1$$ Simplify your answer. **(4)**

**(c)** Find $$\sum_{r=0}^{n} \left(\frac{3 + 5r}{2^r}\right)$$ Give your answer in the form $$a - \frac{b + cn}{2^n}$$ where $a$, $b$ and $c$ are integers. **(7)** **(Total 13 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Identify Geometric Progression** This is a geometric progression with first term $a = 1$ and common ratio $r = 1/x = x^{-1}$. Number of terms is $n + 1$. $$S_{n+1} = \frac{1(1 - x^{-(n+1)})}{1 - x^{-1}}$$

- **[M1]** Identifies geometric progression and attempts sum formula (allow $n$ instead of $n+1$ for method mark).
    

**Step 2: Simplify to given form** Multiply top and bottom by $x$: $$= \frac{x(1 - x^{-n-1})}{x(1 - x^{-1})} = \frac{x - x^{-n}}{x - 1} = \frac{x}{x - 1} - \frac{x^{-n}}{x - 1} \quad (*)$$

- **[A1 cso]** No incorrect working seen.
    

#### **Part (b)**

**Step 3: Differentiate the summation** Recognize that differentiating $x^{-r}$ with respect to $x$ generates the required terms. $$\frac{d}{dx} \left( \sum_{r=0}^{n} x^{-r} \right) = \sum_{r=0}^{n} -r x^{-(r+1)}$$ So the required sum is the negative derivative of the RHS from part (a).

- **[M1]** Identify need to differentiate and applies $d/dx$ to LHS.
    

**Step 4: Differentiate the RHS expression** Using the quotient rule on $\frac{x - x^{-n}}{x - 1}$: $$\frac{d}{dx} (\text{RHS}) = \frac{(1 + n x^{-n-1})(x - 1) - (x - x^{-n})(1)}{(x - 1)^2}$$

- **[M1, A1]** Some correct use of quotient rule; correct differentiation of RHS.
    

**Step 5: Simplify and apply the negative sign** $$\sum_{r=0}^{n} r x^{-(r+1)} = - \frac{x - 1 + n x^{-n} - n x^{-n-1} - x + x^{-n}}{(x - 1)^2}$ $= \frac{1 + n x^{-(n+1)} - (n+1)x^{-n}}{(x - 1)^2}$$

- **[A1]** Correct simplified expression.
    

#### **Part (c)**

**Step 6: Split the summation** $$\text{Sum} = \sum_{r=0}^{n} 3(2^{-r}) + \sum_{r=0}^{n} 5r(2^{-r})$$

- **[M1]** Splits the sum into two separate series.
    

**Step 7: Evaluate the first series** Using part (a) with $x = 2$: $$\sum_{r=0}^{n} 2^{-r} = \frac{2}{2 - 1} - \frac{2^{-n}}{2 - 1} = 2 - 2^{-n}$$ So the first part is $3(2 - 2^{-n}) = 6 - 3(2^{-n})$.

- **[M1]** Use of $x = 2$ in (a).
    

**Step 8: Evaluate the second series** Rewrite the second sum to match the form in (b): $$\sum_{r=0}^{n} 5r(2^{-r}) = 10 \sum_{r=0}^{n} r(2^{-(r+1)})$$

- **[A1]** Gets sum into the exact form required for (b).
    

Substitute $x = 2$ into the result from (b): $$10 \left[ \frac{1 + n(2^{-(n+1)}) - (n+1)2^{-n}}{(2 - 1)^2} \right] = 10 \left( 1 + \frac{n}{2} 2^{-n} - (n+1)2^{-n} \right)$$

- **[M1, dM1]** Realizes $x = 2$ and a factor of $10$ is needed. Substitutes $x = 2$ into their (b).
    

**Step 9: Combine and format** $$\text{Total} = 6 - 3(2^{-n}) + 10 + 5n(2^{-n}) - 10(n+1)2^{-n}$$ $$= 16 + \frac{-3 + 5n - 10n - 10}{2^n} = 16 - \frac{13 + 5n}{2^n}$$ Hence $a = 16$, $b = 13$ and $c = 5$.

- **[A2]** Completely correct expression (deduct 1 mark for each error).