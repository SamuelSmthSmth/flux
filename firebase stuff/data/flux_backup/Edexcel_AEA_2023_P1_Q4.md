---
topic: "Integration"
subtopic: "The trapezium rule"
---

### Question 4

**(a)** Use the trapezium rule with 4 strips to find an approximate value for $$\int_{0}^{1} 16^x dx$$ **(2)**

**(b)** Use the trapezium rule with $n$ strips to write down an expression that would give an approximate value for $$\int_{0}^{1} 16^x dx$$ **(2)**

**(c)** Hence show that $$\int_{0}^{1} 16^x dx = \lim_{n \to \infty} \left( \frac{1}{n} \left( 1 + 16^{\frac{1}{n}} + \dots + 16^{\frac{n-1}{n}} \right) \right)$$ **(3)**

**(d)** Use integration to determine the exact value of $$\int_{0}^{1} 16^x dx$$ **(3)**

Given that the limit exists, **(e)** use part (c) and the answer to part (d) to determine the exact value of $$\lim_{x \to 0} \frac{16^x - 1}{x}$$ **(5)** **(+S1)**

### Mark Scheme 4

#### **Part (a)**

**Step 1: Trapezium Rule (4 strips)** $$A \approx \frac{1}{2} \times \frac{1}{4} (1 + 16 + 2(16^{1/4} + 16^{1/2} + 16^{3/4})) = \frac{1}{8}(17 + 2(2 + 4 + 8)) = \frac{45}{8}$$

- **[M1, A1]** Correct structure and value for $h$ used; correct and simplified.
    

#### **Part (b)**

**Step 2: Trapezium Rule (n strips)** $$A \approx \frac{1}{2n} (1 + 16 + 2(16^{1/n} + 16^{2/n} + 16^{3/n} + \dots + 16^{(n-1)/n}))$$

- **[M1, A1]** Correct structure, including $1/2n$; fully correct expression.
    

#### **Part (c)**

**Step 3: Apply limit to infinity** $$\int 16^x dx = \lim_{n \to \infty} \frac{1}{2n} (17 + 2(16^{1/n} + \dots + 16^{(n-1)/n}))$$ $$= \lim_{n \to \infty} \frac{15}{2n} + \lim_{n \to \infty} \frac{1}{n} (1 + 16^{1/n} + \dots + 16^{(n-1)/n})$$

- **[M1]** Splits their sum to extract the desired terms.
    

**Step 4: Evaluate limits** $$= \lim_{n \to \infty} \frac{1}{n} (1 + 16^{1/n} + \dots + 16^{(n-1)/n}) *$$

- __[A1_]_* Applies limit ($15/2n \to 0$) and reaches correct answer.
    

#### **Part (d)**

**Step 5: Exact Integration** $$\int 16^x dx = \frac{16^x}{\ln 16}$$ $$\int_{0}^{1} 16^x dx = \left[ \frac{16^x}{\ln 16} \right]_0^1 = \frac{16 - 1}{\ln 16} = \frac{15}{\ln 16}$$

- **[M1, A1, A1]** Integral is a non-unit multiple of $16^x$; correct integral; correct simplified answer.
    

#### **Part (e)**

**Step 6: Sum Geometric Sequence** $1 + 16^{1/n} + \dots + 16^{(n-1)/n}$ is a geometric sequence with $a=1$, $r=16^{1/n}$. $$\text{Sum} = \frac{1((16^{1/n})^n - 1)}{16^{1/n} - 1} = \frac{15}{16^{1/n} - 1}$$

- **[M1]** Recognises geometric sequence and applies sum.
    

**Step 7: Set up limit equation** So $$\frac{15}{\ln 16} = \lim_{n \to \infty} \frac{1}{n} \left(\frac{15}{16^{1/n} - 1}\right) = 15 \lim_{n \to \infty} \left(\frac{1/n}{16^{1/n} - 1}\right)$$

- **[M1]** Equates answers with sum applied, and $1/n$ placed appropriately.
    

**Step 8: Change variable and find limit** Let $x = 1/n$, then $x \to 0$ as $n \to \infty$. By continuity: $$\frac{1}{\ln 16} = \lim_{x \to 0} \frac{x}{16^x - 1}$$ Hence $$\lim_{x \to 0} \frac{16^x - 1}{x} = \ln 16$$

- **[M1, A1]** Change variable; takes reciprocal and deduces correct limit.
    

**Special Mark (+S1)**

- **[S1]** S+ for good demonstration of the limit tending to 0 (ie not just disappearing without comment).