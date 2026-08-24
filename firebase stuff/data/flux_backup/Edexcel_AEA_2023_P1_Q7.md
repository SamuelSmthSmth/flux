---
topic: "Algebraic Expressions"
subtopic: "Factorising"
---

### Question 7

A sequence of non-zero real numbers $a_1, a_2, a_3, \dots$ is defined by $$a_{n+1} = p + \frac{q}{a_n} \quad n \in \mathbb{N}$$ where $p$ and $q$ are real numbers with $q \neq 0$. It is known that:

- one of the terms of this sequence is $a$
    
- the sequence is periodic
    

**(a)** Determine an equation for $q$, in terms of $p$ and $a$, such that the sequence is constant (of period/order one). **(2)**

**(b)** Determine the value of $p$ that is necessary for the sequence to be of period/order 2. **(3)**

**(c)** Give an example of a sequence that satisfies the condition in part (b), but is not of period/order 2. **(2)**

**(d)** Determine an equation for $q$, in terms of $p$ only, such that the sequence has period/order 4. **(7)** **(+S1)**

### Mark Scheme 7

#### **Part (a)**

**Step 1: Condition for Order 1** Need $a_{n+1} = a_n$ so $a = p + \frac{q}{a}$

- **[M1]** Attempts to set up an equation where $a_{n+1} = a_n$.
    

**Step 2: Equation for q** $q = a^2 - ap$

- **[A1]** Correct equation in terms of $a$.
    

#### **Part (b)**

**Step 3: Condition for Order 2** Need $a_{n+2} = a_n$ so $a = p + \frac{q}{p + \frac{q}{a}}$

- **[M1]** Uses period to set up equation.
    

**Step 4: Solve for p** $$a = p + \frac{qa}{pa + q} = \frac{ap^2 + pq + aq}{ap + q}$$ $$\Rightarrow a^2p + aq = ap^2 + pq + aq \Rightarrow p(a^2 - ap - q) = 0$$

- **[M1]** Correct algebra to a single line equation.
    

**Step 5: Deduce p=0** But $a^2 - ap - q = 0$ gives a constant sequence (not period 2), so need $p = 0$.

- **[A1]** Deduces $p = 0$ required.
    

#### **Part (c)**

**Step 6: Counter example** Have $p = 0$, so need $a = \frac{q}{a}$ to be constant (ie not order 2), so $a^2 = q$. E.g. $a_{n+1} = \frac{4}{a_n}$ with $a_1 = 2$.

- **[M1, A1]** Realise need for order 1 sequence; correct sequence with initial term given.
    

#### **Part (d)**

**Step 7: Condition for Order 4** Need $a_{n+4} = a_n$. Let $a_n = a$. $a_{n+2} = \frac{a(p^2 + q) + pq}{ap + q}$ (from (b) before equating to a) $$a_{n+4} = \frac{a_{n+2}(p^2+q) + pq}{a_{n+2}p + q}$$

- **[M1, A1]** Sets up equation for $a_{n+4}$.
    

**Step 8: Substitute and expand** $$a = \frac{\left(\frac{a(p^2 + q) + pq}{ap + q}\right)(p^2 + q) + pq}{\left(\frac{a(p^2 + q) + pq}{ap + q}\right)p + q}$$ $$\Rightarrow a\left[ (a(p^2 + q) + pq)p + q(ap + q) \right] = (a(p^2 + q) + pq)(p^2 + q) + pq(ap + q)$$

- **[M1]** Multiplies through to a single line equation.
    

**Step 9: Factorise** $$\Rightarrow a^2p(p^2 + q) + ap^2q + a^2pq + aq^2 = a(p^2 + q)^2 + pq(p^2 + q) + ap^2q + pq^2$$ $$\Rightarrow p(p^2 + 2q)(a^2 - ap - q) = 0$$

- **[M1, A1]** Expands and factorises to extract the factors.
    

**Step 10: Deduce condition for order 4** But $p = 0$ gives order 2 equation, and $a^2 - ap - q = 0$ gives order 1 equation. So we cannot have these. Hence for period exactly 4, we need $p^2 + 2q = 0$. $$\Rightarrow q = -\frac{p^2}{2}$$

- **[B1, A1]** Explains why other factors are impossible; final correct equation for $q$.
    

**Special Mark (+S1)**

- **[S1]** A succinct solution that scores 12+ marks that includes at least one S+ point (e.g. referencing $a \neq 0$ or clearly excluding the $p=0$ case).