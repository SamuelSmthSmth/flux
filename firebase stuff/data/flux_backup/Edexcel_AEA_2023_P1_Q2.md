---
topic: "Algebraic Methods"
subtopic: "Proof by contradiction"
---

### Question 2

A student is attempting to prove that there are infinitely many prime numbers. The student’s attempt to prove this is in the box below.

> Assume there are only finitely many prime numbers, then there is a biggest prime number, $p$. Let $n = 2p + 1$. Then $n$ is bigger than $p$ and since $2p + 1$ is not divisible by $p$, $n$ is a prime number. Hence $n$ is a prime number bigger than $p$, contradicting the initial assumption. So we conclude there are infinitely many prime numbers.

**(a)** Use $p = 7$ to show that the following claim made in the student’s proof is not true: _since $2p + 1$ is not divisible by $p$, $n$ is a prime number._ **(1)**

The student changes their proof to use $n = 6p + 1$ instead of $n = 2p + 1$ **(b)** Show, by counter example, that this does not correct the student’s proof. **(2)**

**(c)** Write out a correct proof by contradiction to show that there are infinitely many prime numbers. **(5)** **(+S1)**

### Mark Scheme 2

#### **Part (a)**

**Step 1: Test p=7** For $p = 7$ we have $n = 2p + 1 = 15 = (5 \times 3)$, so is not prime.

- **[B1]** Identifies factors/not prime for the case $p = 7$.
    

#### **Part (b)**

**Step 2: Find a suitable counterexample** Looks for a suitable counterexample. Most likely by at least one trial with a prime $p$. e.g. $$p = 19 \Rightarrow n = 6(19) + 1 = 115$$, which is a multiple of $5$, so not prime.

- **[M1]** Looks for a suitable counterexample.
    
- **[A1]** Correct example and explanation with conclusion.
    

#### **Part (c)**

**Step 3: Set up contradiction assumption** Assume there are only finitely many primes, $p_1, p_2, \dots, p_n$ say.

- **[M1]** Sets up an assumption with all primes listed or indexed.
    

**Step 4: Define N** Now let $N = p_1 p_2 \dots p_n + 1$

- **[A1]** Correct expression for $N$ set up.
    

**Step 5: Logical deduction strategy** E.g. Now $N$ cannot be prime as it is bigger than any prime in the list, so it must have a prime divisor $p_i$ for some $i$.

- **[M1]** A suitable strategy to derive a contradiction, considering the primality of $N$.
    

**Step 6: Carry out contradiction** But $p_i$ divides $p_1 p_2 \dots p_n$ but not $1$, so cannot divide $N$. (OR dividing $N$ by $p_i$ will always give remainder $1$).

- **[M1]** Carries out full necessary work to derive the contradiction.
    

**Step 7: Conclusion** This is a contradiction and hence the original assumption is false. We conclude there are infinitely many primes.

- **[A1]** For a full argument and deduces a contradiction and concludes the result required.
    

**Special Mark (+S1)**

- **[S1]** Award S1 for a good style of proof in (c) which is fully correct, well reasoned and concise. E.g. must clearly define all primes before forming the product, give algebraic, not just verbal, reasoning.