---
topic: "Discrete Random Variables"
subtopic: "Solving problems involving random variables"
---

### **Question 2**

The discrete random variable $X$ follows the binomial distribution $X \sim B(n, p)$ where $0 < p < 1$. The mode of $X$ is $m$.

**(a)** Write down, in terms of $m$, $n$ and $p$, an expression for $P(X = m)$ **(1)**

**(b)** Determine, in terms of $n$ and $p$, an interval of width 1, in which $m$ lies. **(5)**

**(c)** Find a value of $n$ where $n > 100$, and a value of $p$ where $p < 0.2$ for which $X$ has two modes. For your chosen values of $n$ and $p$, state these two modes. **(2)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Binomial Probability** $$P(X = m) = \binom{n}{m}p^{m}(1 - p)^{n - m}$$

- **[B1]** Correct expression (accept combinatorics notation like $^nC_m$).
    

#### **Part (b)**

**Step 2: Set up inequalities for mode** Since $m$ is the mode, it must be the most likely outcome: $$P(X = m - 1) \le P(X = m)$ and $P(X = m + 1) \le P(X = m)$$

- **[M1]** Sets up at least one correct inequality (allow strict or non-strict).
    

**Step 3: Expand the first inequality** $$\binom{n}{m - 1}p^{m - 1}(1 - p)^{n - m + 1} \le \binom{n}{m}p^{m}(1 - p)^{n - m}$$ $$\frac{n!}{(m - 1)!(n - m + 1)!}p^{m - 1}(1 - p)^{n - m + 1} \le \frac{n!}{m!(n - m)!}p^{m}(1 - p)^{n - m}$$

- **[M1]** Uses factorial form for the binomial coefficients.
    

**Step 4: Cancel terms to simplify** $$\frac{1 - p}{n - m + 1} \le \frac{p}{m}$$ $$m(1 - p) \le p(n - m + 1) \Rightarrow m - mp \le np - mp + p$ $\Rightarrow m \le (n + 1)p$$

- **[M1]** Appropriate cancelling of terms attempted.
    

**Step 5: Expand the second inequality** Similarly, expanding $$P(X = m + 1) \le P(X = m): \frac{p}{m + 1} \le \frac{1 - p}{n - m}$$$$\Rightarrow p(n - m) \le (1 - p)(m + 1) \Rightarrow np - mp \le m + 1 - mp - p$ $\Rightarrow (n + 1)p - 1 \le m$$

- **[M1]** Correct simplified inequality for the second side.
    

**Step 6: Final Interval** Combining these gives the interval of width 1: $$(n + 1)p - 1 \le m \le (n + 1)p$$

- **[A1]** Correct interval.
    

#### **Part (c)**

**Step 7: Strategy for two modes** To have two modes, the probabilities must be equal, which occurs when the bounds of the interval are exactly integers. Let $p = 0.1$ and ensure $(n + 1)p$ is an integer.

- **[M1]** Sensible choice for $p$ and a strategy to calculate a suitable $n$.
    

**Step 8: Example Values** Choose $p = 0.1$. We need $(n + 1)(0.1)$ to be an integer. Let $$n + 1 = 110 \Rightarrow n = 109$$. Modes are $m = (110)(0.1) - 1 = 10$ and $m = (110)(0.1) = 11$.

- **[A1]** Valid answers given (e.g., $n = 109, p = 0.1$, modes $10$ and $11$).