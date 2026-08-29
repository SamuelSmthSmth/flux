---
topic: "Continuous Probability Distributions"
subtopic: "Continuous uniform distribution"
---
### **Question 1**

**Figure 1** _A histogram showing frequency density against Time (minutes) for a random sample of students completing a crossword._

The histogram in Figure 1 shows the times taken to complete a crossword by a random sample of students.

The number of students who completed the crossword in more than $15$ minutes is $78$

Estimate the percentage of students who took less than $11$ minutes to complete the crossword. **(4)**

**(Total for Question 1 is 4 marks)**

### **Mark Scheme 1**

#### **Part (a)**
**Step 1: Use frequencies and bar areas to find the scaling factor**
Let $k$ be the proportionality constant for area to frequency.
Using the bar for $> 15$ minutes:
Area for $> 15$ minutes = $3 \times 15 + 1 \times 4 + 1 \times 2 = 45 + 4 + 2 = 51$ small squares or using intervals:
Interval $15-18$: width $3$, height $13$ $\Rightarrow$ area $= 39$
Interval $18-22$: width $4$, height $2$ $\Rightarrow$ area $= 8$
Interval $22-24$: width $2$, height $1$ $\Rightarrow$ area $= 2$
Total area for $> 15 = 39 + 8 + 2 = 49$ units? **[ILLEGIBLE — see source]**

---
topic: "Discrete Random Variables"
subtopic: "Expected value of a discrete random variable"
---
### **Question 2**

Jerry is studying visibility for Camborne using the large data set June 1987.

The table below contains two extracts from the large data set.

It shows the daily maximum relative humidity and the daily mean visibility.

| Date | Daily Maximum Relative Humidity | Daily Mean Visibility |
| :---: | :---: | :---: |
| Units | $\%$ | |
| $10/06/1987$ | $90$ | $5300$ |
| $28/06/1987$ | $100$ | $0$ |

*(The units for Daily Mean Visibility are deliberately omitted.)*

Given that daily mean visibility is given to the nearest $100$,

**(a)** write down the range of distances in metres that corresponds to the recorded value $0$ for the daily mean visibility. **(1)**

Jerry drew the following scatter diagram, Figure 2, and calculated some statistics using the June 1987 data for Camborne from the large data set.

**Figure 2** _A scatter diagram of Daily mean visibility against Daily maximum relative humidity (%) with associated statistics table showing $Q_1 = 1100$, $\text{IQR} = 1600$ for daily mean visibility and $Q_1 = 92$, $\text{IQR} = 8$ for daily maximum relative humidity._

Jerry defines an outlier as a value that is more than $1.5$ times the interquartile range above $Q_3$ or more than $1.5$ times the interquartile range below $Q_1$.

**(b)** Show that the point circled on the scatter diagram is an outlier for visibility. **(2)**

**(c)** Interpret the correlation between the daily mean visibility and the daily maximum relative humidity. **(1)**

**(Total for Question 2 is 4 marks)**

### **Mark Scheme 2**

#### **Part (a)**
**Step 1: State the range**
$0 \leqslant x < 50$ or $0 \leqslant distance < 50$
- **[B1]** Correct range.

#### **Part (b)**
**Step 2: Find upper boundary for outliers**
Upper quartile $Q_3 = Q_1 + \text{IQR} = 1100 + 1600 = 2700$ (or given from table context as $2700$)
Upper outlier boundary $= Q_3 + 1.5 \times \text{IQR} = 2700 + 1.5(1600) = 5100$
- **[M1]** Correct expression or evaluation of the upper boundary threshold.
- **[A1cic]** Conclusion that the point at $5300$ is greater than $5100$ and therefore an outlier.

#### **Part (c)**
**Step 1: Interpretation in context**
As relative humidity increases, daily mean visibility tends to decrease.
- **[B1]** Correct contextual interpretation of negative correlation.

---
topic: "Discrete Random Variables"
subtopic: "Expected value of a discrete random variable"
---
### **Question 3**

In a game, a player can score $0, 1, 2, 3$ or $4$ points each time the game is played.

The random variable $S$, representing the player’s score, has the following probability distribution where $a$, $b$ and $c$ are constants.

| $s$ | $0$ | $1$ | $2$ | $3$ | $4$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| $\text{P}(S = s)$ | $a$ | $b$ | $c$ | $0.1$ | $0.15$ |

The probability of scoring less than $2$ points is twice the probability of scoring at least $2$ points.

Each game played is independent of previous games played.

John plays the game twice and adds the two scores together to get a total.

Calculate the probability that the total is $6$ points. **(6)**

**(Total for Question 3 is 6 marks)**

### **Mark Scheme 3**

#### **Part (a)**
**Step 1: Set up simultaneous equations from the given conditions**
$$\text{P}(S < 2) = a + b$$
$$\text{P}(S \ge 2) = c + 0.1 + 0.15 = c + 0.25$$
$$a + b = 2(c + 0.25) \Rightarrow a + b - 2c = 0.5$$
Also, total probability sums to $1$:
$$a + b + c + 0.1 + 0.15 = 1 \Rightarrow a + b + c = 0.75$$
- **[M1]** Formulates equations for probabilities.

**Step 2: Solve for $a, b, c$**
Subtracting the equations:
$$(a + b + c) - (a + b - 2c) = 0.75 - 0.5 \Rightarrow 3c = 0.25 \text{ (or equivalent)}$$
Wait, re-evaluating:
$a + b = 0.75 - c$. Substituting into $a + b - 2c = 0.5$:
$0.75 - c - 2c = 0.5 \Rightarrow 3c = 0.25 \Rightarrow c = \frac{1}{12}$.
- **[A1]** Correct value for $c$, i.e., $\frac{1}{12}$ or $0.0833$.

**Step 3: Calculate combinations for total score of $6$**
Possible pairs $(s_1, s_2)$ that sum to $6$:
$(2, 4)$, $(3, 3)$, $(4, 2)$
- **[M1]** Identifies correct pairs summing to $6$.

**Step 4: Compute probabilities for each pair**
$$\text{P}(S=2) = c = \frac{1}{12}$$
$$\text{P}(S=3) = 0.1 = \frac{1}{10}$$
$$\text{P}(S=4) = 0.15 = \frac{3}{20}$$
$$\text{P}(\text{total} = 6) = \text{P}(2)\text{P}(4) + \text{P}(3)\text{P}(3) + \text{P}(4)\text{P}(2)$$
$$= \left(\frac{1}{12} \times \frac{3}{20}\right) + \left(\frac{1}{10} \times \frac{1}{10}\right) + \left(\frac{3}{20} \times \frac{1}{12}\right)$$
$$= \frac{3}{240} + \frac{1}{100} + \frac{3}{240} = \frac{6}{240} + \frac{1}{100} = \frac{1}{40} + \frac{1}{100} = \frac{5 + 2}{200} = \frac{7}{200} = 0.035$$
- **[M1]** Multiplies correct probabilities for independent events and sums them.
- **[A1]** Correct final answer $0.035$ or $\frac{7}{200}$.

---
topic: "Hypothesis Testing"
subtopic: "Testing for the mean of a Poisson distribution"
---
### **Question 4**

A lake contains three different types of carp.

There are an estimated $450$ mirror carp, $300$ leather carp and $850$ common carp.

Tim wishes to investigate the health of the fish in the lake.

He decides to take a sample of $160$ fish.

**(a)** Give a reason why stratified random sampling cannot be used. **(1)**

**(b)** Explain how a sample of size $160$ could be taken to ensure that the estimated populations of each type of carp are fairly represented.

You should state the name of the sampling method used. **(2)**

As part of the health check, Tim weighed the fish.

His results are given in the table below.

| Weight ($w\text{ kg}$) | Frequency ($f$) | Midpoint ($m\text{ kg}$) |
| :---: | :---: | :---: |
| $2 \leqslant w < 3.5$ | $8$ | $2.75$ |
| $3.5 \leqslant w < 4$ | $32$ | $3.75$ |
| $4 \leqslant w < 4.5$ | $64$ | $4.25$ |
| $4.5 \leqslant w < 5$ | $40$ | $4.75$ |
| $5 \leqslant w < 6$ | $16$ | $5.5$ |

*(You may use $\sum fm = 692$ and $\sum fm^2 = 3053$)*

**(c)** Calculate an estimate for the standard deviation of the weight of the carp. **(2)**

Tim realised that he had transposed the figures for $2$ of the weights of the fish.

He had recorded in the table $2.3$ instead of $3.2$ and $4.6$ instead of $6.4$

**(d)** Without calculating a new estimate for the standard deviation, state what effect

**(i)** using the correct figure of $3.2$ instead of $2.3$

**(ii)** using the correct figure of $6.4$ instead of $4.6$

would have on your estimated standard deviation.

Give a reason for each of your answers. **(2)**

**(Total for Question 4 is 7 marks)**

### **Mark Scheme 4**

#### **Part (a)**
**Step 1: Reason why stratified sampling fails**
It is impossible to create a complete sampling frame (a list of all individual fish in the lake).
- **[B1]** Correct reason (lack of sampling frame / cannot list every fish).

#### **Part (b)**
**Step 2: State method and description**
Method: Quota sampling.
Description: Catch fish until the required quotas for each type of carp are met (proportionate to their population sizes).
- **[B1]** Names quota sampling.
- **[B1]** Explains how it is carried out in context.

#### **Part (c)**
**Step 3: Calculate standard deviation**
$$\sigma = \sqrt{\frac{\sum fm^2}{\sum f} - \left(\frac{\sum fm}{\sum f}\right)^2}$$
Total frequency $\sum f = 8 + 32 + 64 + 40 + 16 = 160$.
$$\sigma = \sqrt{\frac{3053}{160} - \left(\frac{692}{160}\right)^2} = \sqrt{19.08125 - 4.325^2} = \sqrt{19.08125 - 18.705625} = \sqrt{0.375625} \approx 0.613$$
- **[M1]** Correct formula substitution.
- **[A1]** Correct value to $3$ sf ($0.613$).

#### **Part (d)**
**Step 4: Analyze effect of corrections**
**(i)** $2.3$ changed to $3.2$: Both values lie within the same class interval ($2 \leqslant w < 3.5$), so midpoints and frequencies are unaffected $\Rightarrow$ no effect on standard deviation.
**(ii)** $4.6$ changed to $6.4$: $4.6$ is in interval $4.5 \leqslant w < 5$ while $6.4$ is in interval $5 \leqslant w < 6$. Moving a value further from the mean increases the spread $\Rightarrow$ standard deviation will increase.
- **[B1]** (i) States no change, with reason (stays in same class).
- **[B1]** (ii) States increases, with reason (moves to a higher class, increasing spread).

---
topic: "Hypothesis Testing"
subtopic: "Finding critical regions for a Poisson distribution"
---
### **Question 5**

Afrika works in a call centre.

She assumes that calls are independent and knows, from past experience, that on each sales call that she makes there is a probability of $\frac{1}{6}$ that it is successful.

Afrika makes $9$ sales calls.

**(a)** Calculate the probability that at least $3$ of these sales calls will be successful. **(2)**

The probability of Afrika making a successful sales call is the same each day.

Afrika makes $9$ sales calls on each of $5$ different days.

**(b)** Calculate the probability that at least $3$ of the sales calls will be successful on exactly $1$ of these days. **(2)**

Rowan works in the same call centre as Afrika and believes he is a more successful salesperson.

To check Rowan’s belief, Afrika monitors the next $35$ sales calls Rowan makes and finds that $11$ of the sales calls are successful.

**(c)** Stating your hypotheses clearly test, at the $5\%$ level of significance, whether or not there is evidence to support Rowan’s belief. **(4)**

**(Total for Question 5 is 8 marks)**

### **Mark Scheme 5**

#### **Part (a)**
**Step 1: Define binomial distribution**
Let $X$ be the number of successful calls: $X \sim \text{B}\left(9, \frac{1}{6}\right)$
$$\text{P}(X \ge 3) = 1 - \text{P}(X \le 2) = 1 - [P(0) + P(1) + P(2)]$$
$$\text{P}(X = 0) = \binom{9}{0}\left(\frac{1}{6}\right)^0\left(\frac{5}{6}\right)^9 = 0.1938$$
$$\text{P}(X = 1) = \binom{9}{1}\left(\frac{1}{6}\right)^1\left(\frac{5}{6}\right)^8 = 0.3489$$
$$\text{P}(X = 2) = \binom{9}{2}\left(\frac{1}{6}\right)^2\left(\frac{5}{6}\right)^7 = 0.2791$$
$$\text{P}(X \le 2) = 0.8218 \Rightarrow \text{P}(X \ge 3) = 1 - 0.8218 = 0.178$$
- **[M1]** Recognises binomial distribution and attempts $1 - \text{P}(X \le 2)$.
- **[A1]** Correct probability ($0.178$).

#### **Part (b)**
**Step 2: Second-order binomial distribution**
Let $Y$ be the number of days out of $5$ where at least $3$ calls are successful.
$Y \sim \text{B}(5, 0.1782)$
$$\text{P}(Y = 1) = \binom{5}{1}(0.1782)^1(0.8218)^4 = 5 \times 0.1782 \times 0.4578 = 0.408$$
- **[M1]** Recognises binomial model with $n=5$ and $p = \text{Ans}(a)$.
- **[A1]** Correct probability ($0.408$).

#### **Part (c)**
**Step 3: Hypothesis test setup**
Let $R$ be successful calls for Rowan: $R \sim \text{B}\left(35, \frac{1}{6}\right)$
$\text{H}_0: p = \frac{1}{6}$
$\text{H}_1: p > \frac{1}{6}$ (one-tailed test)
- **[B1]** Correct hypotheses stated clearly.

**Step 4: Compute probability or critical region**
$$\text{P}(R \ge 11) = 1 - \text{P}(R \le 10)$$
Using calculator: $\text{P}(R \le 10) = 0.9592 \Rightarrow \text{P}(R \ge 11) = 1 - 0.9592 = 0.0408$
- **[M1]** Calculates $\text{P}(R \ge 11)$ or compares critical values.

**Step 5: Conclusion**
Since $0.0408 < 0.05$ (or $11$ falls in the critical region), we reject $\text{H}_0$.
There is sufficient evidence to support Rowan's belief that he is a more successful salesperson.
- **[A1]** Correct comparison with significance level and valid contextual conclusion.

---
topic: "Discrete Random Variables"
subtopic: "Expected value of a discrete random variable"
---
### **Examiner Report 5**

This question required the binomial distribution and it was pleasing to see that around $65\%$ of candidates were able to recognise the distribution required in part (a) with approximately $50\%$ being able to work out the correct probability.

In part (b) few candidates recognised that there was a connection between parts (a) and (b) and that in order to do part (b) you need the answer to part (a). The most common error was using the distribution $\text{B}\left(45, \frac{1}{6}\right)$.

Again in part (c) many candidates gave the correct model, but fewer were able to write down the hypotheses correctly. Of those who progressed to the end, most evaluated the required probability, but a not insubstantial minority worked out the probability of exactly eleven. The great majority of those who found the correct probability then went on to give the correct answer in context.
