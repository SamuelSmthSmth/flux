---
topic: "Discrete Random Variables"
subtopic: "Solving problems involving random variables"
---

### Question 5

**Figure 2** _(A Venn Diagram shows three intersecting sets F, G, H. The universal set contains $n$ students. F contains 22, G contains 5, H contains 16 in their non-intersecting parts. The intersection of F and G only is $b$, F and H only is $d$, G and H only is $c$, and the intersection of all three is $a$. The region outside all sets is $e$.)_

Figure 2 shows a partially completed Venn diagram of sports that a year group of students enjoy, where $a$, $b$, $c$, $d$ and $e$ are non-negative integers. There are $n$ students in the year group. It is known that:

- $P(F) = \frac{3}{7}$
    
- $P(H|G) = \frac{1}{3}$
    
- $F$ is independent of $H \cap G$
    
- $P(F \cap H \cap G) = \frac{1}{7}P(G)$
    

**(a)** Show that $P(F \cap G \cap H) = \frac{1}{7}P(G)$ **(3)** _(Note: Prompt appears to contain a typo where the question asks to show the exact statement given in the bullet points. Assuming standard proof based on the previous 3 bullets)._

**(b)** Prove that if two events $X$ and $Y$ are independent, then $X'$ and $Y$ are also independent. **(3)**

**(c)** Hence find the value $k$ such that $P(F' \cap H \cap G) = k P(G)$ **(2)**

**(d)** Show that $c = \frac{4}{3}a$ **(2)**

Given further that $P(F|H) = \frac{1}{5}$ **(e)** find an expression for $d$ in terms of $a$, and hence deduce the maximum possible value of $a$. **(3)**

**(f)** Determine the possible values of $n$. **(6)** **(+S2)**

### Mark Scheme 5

#### **Part (a)**

**Step 1: Use independence** $F$ and $H \cap G$ independent $$\Rightarrow P(F \cap G \cap H) = P(F)P(G \cap H)$$

- **[M1]** Applies the condition on independence correctly.
    

**Step 2: Use conditional probability** $$P(H|G) = \frac{1}{3} \Rightarrow P(G \cap H) = P(G) \times \frac{1}{3}$$

- **[M1]** Applies the conditional probability correctly.
    

**Step 3: Combine** $$P(F \cap G \cap H) = \frac{3}{7} \times \frac{1}{3} P(G) = \frac{1}{7}P(G) *$$

- __[A1_]_* Draws both facts together to deduce given result.
    

#### **Part (b)**

**Step 4: Mutual exclusivity** $P(X \cap Y) = P(Y) - P(X \cap Y)$

- **[M1]** Sets or applies up correct relation using mutual exclusivity.
    

**Step 5: Apply independence of X and Y** $= P(Y) - P(X)P(Y)$ (since X and Y independent) $= P(Y)(1 - P(X)) = P(X')P(Y)$ hence $X'$ and $Y$ are independent *

- __[M1, A1_]_* Uses independence, factorises and uses complement property.
    

#### **Part (c)**

**Step 6: Apply result of (b)** $$P(F' \cap G \cap H) = P(F')P(G \cap H) = (1 - P(F))\frac{1}{3}P(G)$$

- **[M1]** Applies result of (b) and (a).
    

**Step 7: Find k** $$= \frac{4}{7} \times \frac{1}{3} P(G) = \frac{4}{21}P(G)$$ so $k = \frac{4}{21}$

- **[A1]** Correct value.
    

#### **Part (d)**

**Step 8: Set up equations for c and a** $P(F \cap G \cap H) = \frac{a}{n}$ and $P(F' \cap G \cap H) = \frac{c}{n}$ $$\Rightarrow \frac{c}{n} = \frac{4}{21}\left(7\frac{a}{n}\right)$$

- **[M1]** Uses results from (a) and (c) to set up equation.
    

**Step 9: Solve for c** $$\Rightarrow c = \frac{4}{3}a *$$

- __[A1_]_* Correct result.
    

#### **Part (e)**

**Step 10: Apply conditional probability for P(F|H)** $$P(F|H) = \frac{1}{5} \Rightarrow \frac{a + d}{a + c + d + 16} = \frac{1}{5}$$ $$\Rightarrow 5(a + d) = a + \frac{4}{3}a + d + 16$$

- **[M1]** Sets up equation in $a$ and $d$ only.
    

**Step 11: Solve for d** $$\Rightarrow 4d = \frac{7a}{3} + 16 - 5a \Rightarrow d = 4 - \frac{2}{3}a$$

- **[A1]** Correct answer for $d$ in terms of $a$.
    

**Step 12: Deduce maximum a** As $d \geqslant 0$, the maximum value of $a$ is $6$.

- **[A1]** Correct value.
    

#### **Part (f)**

**Step 13: Determine allowed values for a** Since $c = 4/3 a$ must be an integer, $a$ must be a multiple of 3. Hence $a$ is $0$, $3$, or $6$.

- **[M1]** Uses constraint to find possible values for $a$.
    

**Step 14: Use P(H|G) to find b** $$P(H|G) = \frac{1}{3} \Rightarrow \frac{a + c}{a + c + b + 5} = \frac{1}{3} \Rightarrow 2(a + c) = b + 5$$ $$\Rightarrow b = \frac{14}{3}a - 5$$

- **[M1, A1]** Sets up equation for $b$; correct equation.
    

**Step 15: Find P(F) in terms of n and a** $$P(F) = \frac{1}{n}\left(22 + a + \frac{14}{3}a - 5 + 4 - \frac{2}{3}a\right) = \frac{21 + 5a}{n}$$

- **[M1]** Sets up $P(F)$.
    

**Step 16: Solve for n** $$\frac{21 + 5a}{n} = \frac{3}{7} \Rightarrow n = \frac{7}{3}(21 + 5a)$$

- **[A1]** Expression for $n$.
    

**Step 17: Final values** If $a = 3$, $n = 84$. If $a = 6$, $n = 119$. (Note $$a=0 \Rightarrow b=-5$$ which is impossible).

- **[A1]** Correct two values.