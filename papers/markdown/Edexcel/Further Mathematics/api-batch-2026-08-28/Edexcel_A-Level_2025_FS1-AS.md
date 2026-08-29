---
topic: "Hypothesis Testing"
subtopic: "Chi-squared Tests"
---
### **Question 1**

A researcher is investigating the relationship between a person's age and their preferred method of shopping.

A random sample of 300 people is taken and the results are summarised in the table below.

$$\begin{array}{|c|c|c|c|}
\hline
\multicolumn{2}{|c|}{\multirow{2}{*}{}} & \multicolumn{2}{c|}{\textbf{Preferred method of shopping}} & \multirow{2}{*}{\textbf{Total}} \\ \cline{3-4}
\multicolumn{2}{|c|}{} & \textbf{Online} & \textbf{In-store} & \\ \hline
\multirow{4}{*}{\textbf{Age}} & \textbf{18 – 30} & 27 & 23 & 50 \\ \cline{2-5}
& \textbf{31 – 50} & 31 & 59 & 90 \\ \cline{2-5}
& \textbf{51 – 64} & 17 & 43 & 60 \\ \cline{2-5}
& \textbf{65 and older} & 30 & 70 & 100 \\ \hline
& \textbf{Total} & 105 & 195 & 300 \\ \hline
\end{array}$$

**(a)** Write down suitable hypotheses for a test to determine whether or not there is evidence of an association between age and preferred method of shopping. **(1)**

The researcher assumes that the null hypothesis is true and uses the data in the table to find expected values.

**(b)** 
**(i)** Identify the cell which would have the smallest expected value.

**(ii)** Calculate the expected value for this cell. **(2)**

The value of $\sum \frac{(O - E)^2}{E}$ for the other 7 cells is $5.060$

**(c)** Test, at the $5\%$ level of significance, whether or not there is evidence of an association between age and preferred method of shopping. 
You should state the test statistic, degrees of freedom, critical value and conclusion clearly. **(5)**

**(d)** Explain whether or not your conclusion to part (c) would be the same if the test was carried out at a $1\%$ level of significance. **(2)**

**(Total for Question 1 is 10 marks)**

### **Mark Scheme 1**

#### **Part (a)**
**Step 1: State hypotheses**
- $\mathrm{H}_0$: There is no association between age and preferred method of shopping.
- $\mathrm{H}_1$: There is an association between age and preferred method of shopping.
- **[B1]** Correct hypotheses in context (allow equivalent statements regarding independence).

#### **Part (b)**
**Step 2: Identify cell and calculate expected value**
- **(i)** Age 18 – 30 and Online shopping
- **(ii)** $\frac{50 \times 105}{300} = 17.5$
- **[B1]** Correctly identifies the cell (Age 18–30, Online).
- **[B1]** $17.5$

#### **Part (c)**
**Step 3: Calculate the test statistic**
$$\sum \frac{(O - E)^2}{E} = 5.060 + \frac{(27 - 17.5)^2}{17.5} = 5.060 + \frac{90.25}{17.5} = 5.060 + 5.15714\dots = 10.21714\dots$$
- **[M1]** Attempt to calculate the contribution for the cell from (b) and add to $5.060$.
- **[A1]** Correct test statistic $10.2$ or better ($10.22$).

**Step 4: Degrees of freedom and critical value**
- Degrees of freedom $\nu = (4 - 1)(2 - 1) = 3$.
- Critical value at $5\%$ level of significance: $\chi^2_3(0.05) = 7.815$.
- **[B1]** Correct degrees of freedom ($3$).
- **[B1]** Correct critical value ($7.815$).

**Step 5: Conclusion**
- $10.22 > 7.815$, so reject $\mathrm{H}_0$ (or significant result). There is evidence of an association between age and preferred method of shopping.
- **[A1]** Contextual conclusion following a correct comparison.

#### **Part (d)**
**Step 6: Assess at $1\%$ significance level**
- Critical value at $1\%$ level of significance: $\chi^2_3(0.01) = 11.345$.
- Since $10.22 < 11.345$, the conclusion would change; there is no longer sufficient evidence to reject $\mathrm{H}_0$ (or not significant at $1\%$).
- **[M1]** Identifies the new critical value ($11.345$) or compares test statistic against it.
- **[A1]** Correct conclusion stating that the result is no longer significant / conclusion changes.

### **Examiner Report 1**
**(a)** Most were able to set up appropriate hypotheses using the required context of 'age' and 'shopping'. On some occasions, these were given the wrong way round. Others used vague or incorrect language such as 'relationship' or 'correlation'.

**(b)(i)(ii)** Nearly all students were able to clearly identify the cell with the smallest expected frequency. And virtually all who did went on to correctly calculate the value of $17.5$.

**(c)** Of those realising that the given value was only part of the test statistic, most accurately calculated the value of the test statistic. The calculation of the degrees of freedom was generally correct but there were some slips in using the tables to identify the correct value of the critical value. Some, however, did not give their answer to the required accuracy (which must match or exceed the accuracy of the table values). It was pleasing to see that most conclusions to the hypothesis test were given in context.

**(d)** Most identified the new critical value and realised that the conclusion of the test statistic would change. Again, some slips were seen in reading the correct column of the table for the given significance level.

---
topic: "Discrete Random Variables"
subtopic: "Expected value of a discrete random variable"
---
### **Question 2**

The discrete random variable $X$ represents the score when a spinner is spun.

The probability distribution of $X$ is given by

$$\begin{array}{|c|c|c|c|}
\hline
x & 2 & 5 & 9 \\ \hline
\mathrm{P}(X = x) & 0.6 & 0.3 & 0.1 \\ \hline
\end{array}$$

**(a)** Find $\operatorname{Var}(X)$. Show your working clearly. **(4)**

A game is played by spinning the spinner twice.

If the two scores are the same, the number of points earned is $0$.

If the two scores are different, the number of points earned is the sum of the two scores.

**(b)** Show that the probability of earning $14$ points in one game is $0.06$. **(1)**

**(c)** Find the expected number of points earned when the game is played once. **(4)**

Mehmet plays the game $150$ times.

**(d)** Using a Poisson approximation, find the probability that Mehmet earns $14$ points in exactly $4$ of the games. **(3)**

**(Total for Question 2 is 12 marks)**

### **Mark Scheme 2**

#### **Part (a)**
**Step 1: Calculate $\operatorname{E}(X)$**
$$\operatorname{E}(X) = (2 \times 0.6) + (5 \times 0.3) + (9 \times 0.1) = 1.2 + 1.5 + 0.9 = 3.6$$
- **[M1]** Attempt to find $\operatorname{E}(X)$ (at least two correct products summed).

**Step 2: Calculate $\operatorname{E}(X^2)$**
$$\operatorname{E}(X^2) = (2^2 \times 0.6) + (5^2 \times 0.3) + (9^2 \times 0.1) = (4 \times 0.6) + (25 \times 0.3) + (81 \times 0.1) = 2.4 + 7.5 + 8.1 = 18$$
- **[M1]** Attempt to find $\operatorname{E}(X^2)$ (squaring $x$ values and multiplying by probabilities).

**Step 3: Calculate $\operatorname{Var}(X)$**
$$\operatorname{Var}(X) = \operatorname{E}(X^2) - (\operatorname{E}(X))^2 = 18 - 3.6^2 = 18 - 12.96 = 5.04$$
- **[M1]** Correct use of the formula $\operatorname{Var}(X) = \operatorname{E}(X^2) - (\operatorname{E}(X))^2$.
- **[A1]** Correct variance $5.04$.

#### **Part (b)**
**Step 4: Show probability of $14$ points**
- Scores must be $5$ and $9$ (in either order).
- $\mathrm{P}(5 \text{ and } 9) = 0.3 \times 0.1 + 0.1 \times 0.3 = 0.03 + 0.03 = 0.06$ (or $2 \times 0.3 \times 0.1 = 0.06$)
- **[B1]** Fully convinced proof leading to $0.06$.

#### **Part (c)**
**Step 5: Determine all possible point outcomes and their probabilities**
- Outcomes for pairs $(X_1, X_2)$:
  - Same scores ($0$ points):
    - $(2, 2): 0.6 \times 0.6 = 0.36$
    - $(5, 5): 0.3 \times 0.3 = 0.09$
    - $(9, 9): 0.1 \times 0.1 = 0.01$
    - Total probability for $0$ points = $0.36 + 0.09 + 0.01 = 0.46$
  - Different scores (sum of scores):
    - $(2, 5)$ or $(5, 2) \Rightarrow$ sum $= 7$, $\mathrm{P} = 2 \times 0.6 \times 0.3 = 0.36$
    - $(2, 9)$ or $(9, 2) \Rightarrow$ sum $= 11$, $\mathrm{P} = 2 \times 0.6 \times 0.1 = 0.12$
    - $(5, 9)$ or $(9, 5) \Rightarrow$ sum $= 14$, $\mathrm{P} = 0.06$ (from part (b))
- **[M1]** Identifies at least two non-zero point outcomes and their correct probabilities.
- **[A1]** All point outcomes and probabilities correct.

**Step 6: Calculate expected points**
$$\operatorname{E}(\text{points}) = (0 \times 0.46) + (7 \times 0.36) + (11 \times 0.12) + (14 \times 0.06) = 0 + 2.52 + 1.32 + 0.84 = 4.68$$
- **[M1]** Correct method to find expectation using $\sum x \mathrm{P}(X=x)$.
- **[A1]** Correct expected value $4.68$.

#### **Part (d)**
**Step 7: Set up Poisson approximation**
- $Y \sim \operatorname{Po}(\lambda)$, where $\lambda = 150 \times 0.06 = 9$.
- **[M1]** Identifies Poisson distribution with parameter $\lambda = 9$.

**Step 8: Calculate probability**
- $\mathrm{P}(Y = 4) = \mathrm{e}^{-9} \frac{9^4}{4!} = 0.03369... \approx 0.0337$
- **[M1]** Uses formula for $\mathrm{P}(Y = 4)$ with their $\lambda$.
- **[A1]** Correct probability $0.0337$ (to 3 s.f.).

### **Examiner Report 2**
Overall, good attempts were seen at this question, but part (c) proved to be one of the more discriminating parts of the paper.

**(a)** Students generally did well to follow the instructions that working was required here and many showed clearly all stages in calculating the variance.

**(b)** Nearly all students realised that there were two ways of obtaining 14 points and showed clearly the calculation needed in order to do so.

**(c)** There was a mixed response to this part. Some simply restated the expected value calculated in part (a). Some missed the instruction for scoring 0 points and went on to give extra point values which were not possible. Another common error was to just list the possible totals and select the one that appeared most often, rather than calculating an expected value.

**(d)** This part had a high success rate as most were able to select the appropriate Poisson distribution and use it to calculate the required probability. Only on rare occasions did students use the exact binomial distribution.

---
topic: "Poisson Distributions"
subtopic: "The Poisson distribution"
---
### **Question 3**

Raoul, Steffi and Taro are catching butterflies for research.

The number of butterflies caught by Raoul per hour may be assumed to follow a Poisson distribution with mean $4.2$.

Find the probability that Raoul catches

**(a)** 
**(i)** exactly $6$ butterflies in a randomly selected one-hour period, **(1)**

**(ii)** exactly $1$ butterfly in a randomly selected $10$-minute period. **(2)**

Following a long period without rain, Raoul believes there will now be a change to the rate at which he catches butterflies.

To test his belief, he uses the random variable $R$ to represent the number of butterflies he catches in a $4$-hour period.

A hypothesis test is to be carried out to determine whether or not there is support for Raoul's belief. The null hypothesis of the test will be rejected if $R \leqslant 9$ or $R > 25$.

**(b)** Stating the hypotheses clearly, find the actual level of significance of the test. **(4)**

The number of butterflies caught by Steffi per hour may be assumed to follow a Poisson distribution with mean $3.2$.

**(c)** Find the probability that in exactly $2$ of the next $4$ hours, Steffi catches less than or equal to $3$ butterflies each hour. **(3)**

The number of butterflies caught by Taro per hour may be assumed to follow a Poisson distribution with mean $2.7$.

Steffi and Taro both go to catch butterflies in a field one day.

Taro models the total number of butterflies caught per hour with a Poisson distribution with mean $3.2 + 2.7 = 5.9$.

**(d)** State a condition that would be needed for Taro's model to be valid. **(1)**

**(Total for Question 3 is 11 marks)**

### **Mark Scheme 3**

#### **Part (a)**
**Step 1: Calculate probability for (i)**
- Let $X$ be the number of butterflies in 1 hour: $X \sim \operatorname{Po}(4.2)$
- $\mathrm{P}(X = 6) = \mathrm{e}^{-4.2} \frac{4.2^6}{6!}$
- $\mathrm{P}(X = 6) = 0.126$
- **[A1]** Correct probability $0.126$ (to 3 s.f.).

**Step 2: Calculate probability for (ii)**
- Mean in 10 minutes = $\frac{4.2}{6} = 0.7$
- Let $Y$ be the number of butterflies in 10 minutes: $Y \sim \operatorname{Po}(0.7)$
- $\mathrm{P}(Y = 1) = \mathrm{e}^{-0.7} \frac{0.7^1}{1!} = 0.347$
- **[M1]** Uses $\lambda = 0.7$ (or equivalent correct scaling).
- **[A1]** Correct probability $0.347$ (to 3 s.f.).

#### **Part (b)**
**Step 3: State hypotheses**
- $\mathrm{H}_0: \lambda = 16.8$ (or $\mu = 16.8$), $\mathrm{H}_1: \lambda \neq 16.8$ (where $\lambda$ is the mean in 4 hours).
- **[B1]** Correct hypotheses using $\lambda$ (or $\mu$) and the mean for 4 hours ($16.8$).

**Step 4: Calculate actual significance level**
- Let $R$ be the number of butterflies in 4 hours: $R \sim \operatorname{Po}(16.8)$
- Lower tail probability: $\mathrm{P}(R \leqslant 9) = 0.02102...$
- Upper tail probability: $\mathrm{P}(R > 25) = 1 - \mathrm{P}(R \leqslant 25) = 1 - 0.97869... = 0.02130...$
- Actual level of significance = $\mathrm{P}(R \leqslant 9) + \mathrm{P}(R > 25) = 0.02102 + 0.02130 = 0.0423$ (or $4.23\%$)
- **[M1]** Identifies correct Poisson distribution with $\lambda = 16.8$.
- **[M1]** Attempts to find either $\mathrm{P}(R \leqslant 9)$ or $\mathrm{P}(R \geqslant 26)$ (or $\mathrm{P}(R > 25)$).
- **[A1]** Correct actual level of significance ($0.0423$ or $4.23\%$).

#### **Part (c)**
**Step 5: Find probability for Steffi catching $\leqslant 3$ butterflies in a single hour**
- Let $S$ be the number of butterflies caught by Steffi in 1 hour: $S \sim \operatorname{Po}(3.2)$
- $\mathrm{P}(S \leqslant 3) = 0.60256...$
- **[M1]** Finds $\mathrm{P}(S \leqslant 3)$ using $\lambda = 3.2$.

**Step 6: Use binomial distribution for the 4 hours**
- Let $W$ be the number of hours out of 4 where $S \leqslant 3$: $W \sim \operatorname{B}(4, 0.60256)$
- $\mathrm{P}(W = 2) = \binom{4}{2} (0.60256)^2 (1 - 0.60256)^{4 - 2} = 6 \times (0.60256)^2 \times (0.39744)^2 = 0.347$
- **[M1]** Uses binomial with $n = 4$ and their $\mathrm{P}(S \leqslant 3)$ to find $\mathrm{P}(W = 2)$.
- **[A1]** Correct probability $0.347$ (to 3 s.f.).

#### **Part (d)**
**Step 7: State condition**
- Steffi and Taro catching butterflies independently.
- **[B1]** States independence (between Steffi and Taro).

### **Examiner Report 3**
**(a)(i)(ii)** The calculation of Poisson probabilities proved to be accessible to nearly all students. Nearly all understand the requirement to give answer to at least 3 significant figures. Only on some rare occasions were students unable to accurately convert the mean in part (ii).

**(b)** In general, the hypotheses were stated with correct notation and in terms of $\lambda$. Nearly all identified the appropriate Poisson distribution in this part and most calculated a correct lower tail probability. Of those also finding a correct upper tail probability, some went on to approximate the actual level of significance and gave an answer of $5\%$ or $6\%$ rather than simply adding together the two tails.

**(c)** This was well answered with most working accurately enough to arrive at the final answer.

**(d)** Those who gave their answer in context generally identified independence as the reason that Taro’s model allowed him to add together the means of the other two distributions. Some unsuccessful responses saw students giving generic answers about the conditions required for a Poisson distribution in general, such as singly or constant rate.

---
topic: "Hypothesis Testing"
subtopic: "Chi-squared Tests"
---
### **Question 4**

A $5$-question test is taken by $80$ students.

Each question was answered either correctly or incorrectly.

$$\begin{array}{|l|c|c|c|c|c|c|}
\hline
\textbf{Number of questions answered correctly} & 0 & 1 & 2 & 3 & 4 & 5 \\ \hline
\textbf{Observed frequency} & 15 & 23 & 31 & 9 & 2 & 0 \\ \hline
\end{array}$$

**(a)** Show that the proportion of questions answered correctly by these $80$ students is $0.3$. **(2)**

Anisa believes that the number of questions answered correctly can be modelled using a binomial distribution.

In order to test her belief, Anisa first calculates some of the expected frequencies.

$$\begin{array}{|l|c|c|c|c|c|c|}
\hline
\textbf{Number of questions answered correctly} & 0 & 1 & 2 & 3 & 4 & 5 \\ \hline
\textbf{Expected frequency} & 13.45 & r & s & 10.58 & 2.27 & 0.19 \\ \hline
\end{array}$$

**(b)** Find the value of $r$ and the value of $s$. **(3)**

**(c)** Explain fully why there are $2$ degrees of freedom for the test of Anisa's belief. **(2)**

**(Total for Question 4 is 7 marks)**

### **Mark Scheme 4**

#### **Part (a)**
**Step 1: Calculate total number of questions answered**
- Total questions answered correctly = $(0 \times 15) + (1 \times 23) + (2 \times 31) + (3 \times 9) + (4 \times 2) + (5 \times 0)$
- $= 0 + 23 + 62 + 27 + 8 + 0 = 120$
- **[M1]** Correct method to find the total number of correct answers.

**Step 2: Calculate proportion**
- Total possible correct answers = $80 \times 5 = 400$
- Proportion = $\frac{120}{400} = 0.3$
- **[A1]** Correctly demonstrates the proportion is $0.3$ with full working.

#### **Part (b)**
**Step 3: Calculate $r$ and $s$ using binomial distribution**
- Model is $X \sim \operatorname{B}(5, 0.3)$
- $\mathrm{P}(X = x) = \binom{5}{x}(0.3)^x (0.7)^{5-x}$
- For $x = 1$: $\mathrm{P}(X = 1) = \binom{5}{1}(0.3)^1 (0.7)^4 = 5 \times 0.3 \times 0.2401 = 0.36015$
  - $r = 80 \times 0.36015 = 28.812 \text{ (or } 28.8\text{)}$
- For $x = 2$: $\mathrm{P}(X = 2) = \binom{5}{2}(0.3)^2 (0.7)^3 = 10 \times 0.09 \times 0.343 = 0.3087$
  - $s = 80 \times 0.3087 = 24.696 \text{ (or } 24.7\text{)}$
- **[M1]** Identifies $\operatorname{B}(5, 0.3)$ and attempts to find $\mathrm{P}(X=1)$ or $\mathrm{P}(X=2)$.
- **[A1]** Correct value for $r$ ($28.8$).
- **[A1]** Correct value for $s$ ($24.7$).

#### **Part (c)**
**Step 4: Explain degrees of freedom**
- Number of classes after combining tail cells (or number of original classes $= 6$, minus $1$ for total frequency constraint, minus $1$ because the parameter $p$ was estimated from the data $\Rightarrow 6 - 1 - 1 = 4$, or adjusted appropriately with pooled cells).
- Specifically: Number of categories (after pooling) $= 4$ (or $5$).
- Constraints: Total expected frequency equals total observed frequency ($1$ constraint), and parameter $p$ estimated from the data ($1$ constraint).
- $\text{Degrees of freedom} = \text{number of categories} - 1 - \text{number of estimated parameters} = 4 - 1 - 1 = 2$.
- **[B1]** Mentions number of categories / pooling and constraint on total frequency (minus $1$).
- **[B1]** Mentions that a parameter ($p$ or probability) was estimated from the data (minus $1$).

### **Examiner Report 4**
Overall, this question saw a mixed response though it was pleasing to see an improved response to part (c) compared to previous series.

**(a)** It appears that most students understand how to calculate a proportion from a frequency table, though it was not uncommon to see this part left blank. Many completed this part in one clear calculation.

**(b)** The calculation of $r$ and $s$ was generally well done. Some used a Poisson distribution to calculate these values and scored no marks for their attempt.

**(c)** The attempts at the final part of this paper were promising and many earned at least one mark. The idea that the last three columns needed to be combined was generally well communicated, though, on some occasions, the word 'expected' was not mentioned. The idea that there were $2$ degrees of freedom was not communicated as effectively. A significant number said it was because they calculated expected values for the distribution rather than the fact that the proportion was estimated using the given data.
