---
topic: "Continuous Probability Distributions"
subtopic: "Continuous uniform distribution"
---
### **Question 1**

The random variable $X \sim \text{B}(27, 0.35)$

**(a)** Find 
**(i)** $\text{P}(X = 10)$
**(ii)** $\text{P}(12 \leqslant X < 15)$ **(3)**

Historical records show that the proportion of defective items produced by a machine is $0.12$.

Following a maintenance service of the machine, a random sample of $60$ items is taken and $3$ defective items are found.

**(b)** Carry out a suitable test to determine whether the proportion of defective items produced by the machine has decreased following the maintenance service.

You should state your hypotheses clearly and use a $5\%$ level of significance. **(4)**

**(c)** Write down the $p$-value for your test in part (b) **(1)**

**(Total 8 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Evaluate $\text{P}(X = 10)$**
$$\text{P}(X = 10) = 0.1559 \dots$$
- **[B1]** Correct answer to 3 significant figures ($0.156$).

**Step 2: Evaluate $\text{P}(12 \leqslant X < 15)$**
$$\text{P}(12 \leqslant X < 15) = \text{P}(X \leqslant 14) - \text{P}(X \leqslant 11)$$
$$= 0.9416 \dots - 0.7229 \dots = 0.2187 \dots$$
- **[M1]** Identifies the correct probability expression or lists probabilities to sum.
- **[A1]** Correct answer to 3 significant figures ($0.219$).

#### **Part (b)**

**Step 3: Define hypotheses**
Let $p$ be the true proportion of defective items.
$$\text{H}_0: p = 0.12$$
$$\text{H}_1: p < 0.12$$
- **[B1]** Both hypotheses correctly stated in terms of $p$.

**Step 4: Set up distribution and find probability**
Let $Y$ be the number of defective items. 
$$Y \sim \text{B}(60, 0.12)$$
$$\text{P}(Y \leqslant 3) = 0.1197 \dots$$
- **[M1]** Uses the correct binomial distribution and finds $\text{P}(Y \leqslant 3)$.

**Step 5: Compare with significance level and conclude**
Since $0.1197 \dots > 0.05$ (or comparing test statistic $3$ with critical value), do not reject $\text{H}_0$.
- **[A1]** Correct comparison and non-contextual conclusion.
- **[A1]** Insufficient evidence to suggest that the proportion of defective items has decreased, given in context.

#### **Part (c)**

**Step 6: State the $p$-value**
$$p\text{-value} = 0.120 \text{ (or } 0.1197\text{)}$$
- **[B1]** Correct $p$-value.

### **Examiner Report 1**

This question was generally well attempted, but there are still a significant number of students who show no understanding of hypothesis testing. Some students truncated the values seen on their calculators rather than giving them to an appropriate degree of accuracy.

Part (a) was well answered with the majority of students gaining this mark, the only issues occurring with rounding or calculating $\text{P}(X \leqslant 10)$ rather than $\text{P}(X = 10)$.

Part (a)(ii) was less well attempted with many students unsure of the difference between $\leqslant$ and $<$. The most common error seen was to evaluate $\text{P}(X \leqslant 14) - \text{P}(X \geqslant 12)$ although many other incorrect expressions were seen. Often when students worked out $\text{P}(X = 12) + \text{P}(X = 13) + \text{P}(X = 14)$, they attained full marks.

For those who attempted part (b), this was answered much better than in previous series and students are becoming more familiar with the structure of these questions, writing the hypotheses in terms of $p$ and the distribution clearly. Sometimes the probability statements were not clearly stated, with students writing down the values that they had inputted into their calculators. It was quite common to see $\text{P}(X < 3)$ or $\text{P}(X = 3)$ rather than $\text{P}(X \leqslant 3)$ calculated. The conclusion was not always given in context. When the context was given, it was usually correct, although missing out the word "proportion" or its equivalent meant the mark was lost.

Some students chose to use a critical region approach rather than a $p$-value approach, but they often did not make this clear and some were then unsure about whether $3$ was inside or outside the critical region and what this implied for the acceptance or otherwise of $\text{H}_0$.

Part (d) [Note: referring to part (c) in the paper] was frequently omitted or the value $p = 0.12$ given. Those who used the critical region approach rarely got this mark. However, students are becoming more aware of what the $p$-value represents.

---
topic: "Discrete Random Variables"
subtopic: "The geometric distribution"
---
### **Question 2**

A biased 4-sided spinner has the numbers $6$, $7$, $8$ and $10$ on it.

The discrete random variable $X$ represents the score when the spinner is spun once and has the following probability distribution,

| $x$ | $6$ | $7$ | $8$ | $10$ |
| :---: | :---: | :---: | :---: | :---: |
| $\text{P}(X = x)$ | $0.5$ | $0.2$ | $q$ | $q$ |

where $q$ is a probability.

**(a)** Find the value of $q$ **(1)**

Karen spins the spinner repeatedly until she **either** gets a $7$ **or** she has taken $4$ spins.

**(b)** Show that the probability that Karen stops after taking her 3rd spin is $0.128$ **(2)**

The random variable $S$ represents the number of spins Karen takes.

**(c)** Find the probability distribution for $S$ **(4)**

The random variable $N$ represents the number of times Karen gets a $7$

**(d)** Find $\text{P}(S > N)$ **(1)**

**(Total 8 marks)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Use sum of probabilities equals 1**
$$0.5 + 0.2 + q + q = 1 \Rightarrow 2q = 0.3 \Rightarrow q = 0.15$$
- **[B1]** $q = 0.15$ (or exact equivalent).

#### **Part (b)**

**Step 2: Calculate probability of stopping on 3rd spin**
Stopping on the 3rd spin means the first two spins are not $7$, and the third spin is not $7$ (since 3 spins are taken and the game stops at 4 if no 7 is hit, or stops if a 7 is hit).
Wait, looking at the rules: Karen spins repeatedly until she either gets a 7 or she has taken 4 spins.
Thus, stopping on 3rd spin means:
- Spin 1: Not 7 (probability $0.8$)
- Spin 2: Not 7 (probability $0.8$)
- Spin 3: It must be a 7 (probability $0.2$) OR on the 3rd spin she gets a 7.
Let's check: $\text{P}(\text{Not } 7) = 1 - 0.2 = 0.8$.
$$\text{P}(\text{ stops on 3rd spin}) = 0.8 \times 0.8 \times 0.2 = 0.128$$
- **[M1]** Identifies the correct product of probabilities: $0.8 \times 0.8 \times 0.2$.
- **[A1]** Fully correct proof leading to $0.128$.

#### **Part (c)**

**Step 3: Find probability distribution for $S$**
- For $S = 1$: She gets a $7$ on the first spin. $\text{P}(S = 1) = 0.2$
- For $S = 2$: Not $7$ on 1st, $7$ on 2nd. $\text{P}(S = 2) = 0.8 \times 0.2 = 0.16$
- For $S = 3$: Not $7$ on 1st, not $7$ on 2nd, $7$ on 3rd. $\text{P}(S = 3) = 0.8 \times 0.8 \times 0.2 = 0.128$
- For $S = 4$: Not $7$ on 1st, not $7$ on 2nd, not $7$ on 3rd, and then 4th spin is taken (regardless of outcome, since max is 4). 
$$\text{P}(S = 4) = 0.8 \times 0.8 \times 0.8 = 0.512$$
Check sum: $0.2 + 0.16 + 0.128 + 0.512 = 1.0$.
- **[M1]** Identifies outcomes for at least two of $S = 1, 2, 3, 4$.
- **[A1]** Correct probabilities for $S = 1, 2, 3$.
- **[A1]** Correct probability for $S = 4$.
- **[B1ft]** Presented as a probability distribution table or clear list of values with probabilities summing to $1$.

#### **Part (d)**

**Step 4: Find $\text{P}(S > N)$**
$N$ is the number of times Karen gets a $7$.
- If $S = 1$, $N = 1$ ($S > N$ is false).
- If $S = 2$, $N = 1$ if she stops, wait: if she stops on $S = 2$, she got a $7$ on the 2nd spin, so $N = 1$ ($S > N$ is $2 > 1$, which is TRUE).
- If $S = 3$, she got a $7$ on the 3rd spin, so $N = 1$ ($3 > 1$, TRUE).
- If $S = 4$, she did NOT get a $7$ in 4 spins (otherwise she would have stopped earlier when she got a $7$). Thus $N = 0$, so $4 > 0$, TRUE.
Wait, let's check all cases where $S > N$:
- $S = 2$: $N = 1$ ($\text{P} = 0.16$) -> $2 > 1$ (yes)
- $S = 3$: $N = 1$ ($\text{P} = 0.128$) -> $3 > 1$ (yes)
- $S = 4$: $N = 0$ ($\text{P} = 0.512$) -> $4 > 0$ (yes)
So $\text{P}(S > N) = \text{P}(S = 2) + \text{P}(S = 3) + \text{P}(S = 4) = 0.16 + 0.128 + 0.512 = 0.8$ (or $1 - \text{P}(S = 1) = 1 - 0.2 = 0.8$).
- **[B1]** Correct answer ($0.8$ or $\frac{4}{5}$).

### **Examiner Report 2**

The final question on the paper, as expected, proved to be the most demanding and parts (c) and (d) were only completed by the most able students.

Part (a) and part (b) was generally done well by the vast majority of students. A large number of students overcomplicated their workings by calculating probabilities for all 9 possibilities rather than simply calculating $\text{P}(\text{not } 7) \times \text{P}(\text{not } 7) \times \text{P}(7)$.

Many students still do not understand the concept of a probability distribution and many attempts were made to calculate a single probability, usually from a binomial distribution, in part (c). Some students were able to make a good attempt at the probability distribution, but a large number failed to correctly calculate $\text{P}(S = 4)$ as they didn't account for the spinner failing to land on a $7$ four times.

Most students left out part (d) as they were unable to interpret what this probability represented. Of those who did try, many complicated probability expressions were seen often leading to an incorrect answer.
