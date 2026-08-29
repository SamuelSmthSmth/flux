---
topic: "Linear Regression"
subtopic: "Equation of a regression line"
---
### **Question 1**

A company is introducing a job evaluation scheme. Points ($x$) will be awarded to each job based on the qualifications and skills needed and the level of responsibility. Pay (£$y$) will then be allocated to each job according to the number of points awarded.

Before the scheme is introduced, a random sample of $8$ employees was taken and the linear regression equation of pay on points was $y = 4.5x - 47$

**(a)** Describe the correlation between points and pay. **(1)**

**(b)** Give an interpretation of the gradient of this regression line. **(1)**

**(c)** Explain why this model might not be appropriate for all jobs in the company. **(1)**

**(Total for Question 1 is 3 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: State the correlation**
- **[B1]** Positive correlation.

#### **Part (b)**

**Step 2: Interpret the gradient**
- **[B1]** For every 1 point increase, pay increases by £4.50 (or equivalent context).

#### **Part (c)**

**Step 3: Explain model limitation**
- **[B1]** May not be appropriate for extremely high/low scoring jobs due to extrapolation, or not all jobs fit a linear relationship.

---
topic: "Binomial and Geometric Distributions"
subtopic: "The binomial expansion"
---
### **Question 2**

A factory buys $10\%$ of its components from supplier $A$, $30\%$ from supplier $B$ and the rest from supplier $C$. It is known that $6\%$ of the components it buys are faulty.

Of the components bought from supplier $A$, $9\%$ are faulty and of the components bought from supplier $B$, $3\%$ are faulty.

**(a)** Find the percentage of components bought from supplier $C$ that are faulty. **(3)**

A component is selected at random.

**(b)** Explain why the event "the component was bought from supplier $B$" is not statistically independent from the event "the component is faulty". **(1)**

**(Total for Question 2 is 4 marks)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Set up the equation using probabilities**
Let $p$ be the percentage of faulty components from supplier $C$.
$$0.10 \times 9 + 0.30 \times 3 + 0.60 \times p = 6$$

- **[M1]** Correct equation for overall percentage.

**Step 2: Solve for $p$**
$$0.9 + 0.9 + 0.6p = 6$$
$$1.8 + 0.6p = 6 \Rightarrow 0.6p = 4.2 \Rightarrow p = 7$$

- **[A1]** Correct working leading to $7$.
- **[A1]** $7\%$ (units not strictly needed if implied).

#### **Part (b)**

**Step 3: State the reason for lack of independence**
- **[B1]** $P(\text{faulty} \mid B) = 0.03$, whereas $P(\text{faulty}) = 0.06$, and since these are not equal, the events are not independent.

---
topic: "Binomial and Geometric Distributions"
subtopic: "The binomial expansion"
---
### **Question 3**

Naasir is playing a game with two friends. The game is designed to be a game of chance so that the probability of Naasir winning each game is $\frac{1}{3}$

Naasir and his friends play the game $15$ times.

**(a)** Find the probability that Naasir wins

**(i)** exactly $2$ games,

**(ii)** more than $5$ games. **(3)**

Naasir claims he has a method to help him win more than $\frac{1}{3}$ of the games. To test this claim, the three of them played the game again $32$ times and Naasir won $16$ of these games.

**(b)** Stating your hypotheses clearly, test Naasir's claim at the $5\%$ level of significance. **(4)**

**(Total for Question 3 is 7 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Define the distribution**
Let $X$ be the number of games Naasir wins. $X \sim \text{B}\left(15, \frac{1}{3}\right)$.

**Step 2: Calculate $P(X = 2)$**
$$P(X = 2) = \binom{15}{2} \left(\frac{1}{3}\right)^2 \left(\frac{2}{3}\right)^{13} = 0.0573$$

- **[M1]** Use of correct binomial probability formula or calculator function for $P(X = 2)$.
- **[A1]** $0.0573$ (to 3 s.f.)

**Step 3: Calculate $P(X > 5)$**
$$P(X > 5) = 1 - P(X \leqslant 5) = 1 - 0.6161 \dots = 0.384$$

- **[A1]** $0.384$ (to 3 s.f.)

#### **Part (b)**

**Step 4: State hypotheses**
Let $p$ be the probability of winning.
$$H_0: p = \frac{1}{3}, \quad H_1: p > \frac{1}{3}$$

- **[B1]** Both hypotheses correctly stated using $p$.

**Step 5: Calculate probability for the test statistic**
Let $Y \sim \text{B}\left(32, \frac{1}{3}\right)$.
$$P(Y \geqslant 16) = 1 - P(Y \leqslant 15) = 1 - 0.9455 = 0.0545$$

- **[M1]** Correct probability calculation or statement of $P(Y \geqslant 16)$.

**Step 6: Compare with significance level and conclude**
Since $0.0545 > 0.05$, this is not significant. There is insufficient evidence to reject $H_0$.

- **[A1]** Correct comparison and contextual conclusion.

---
topic: "Data Presentation and Interpretation"
subtopic: "Measures of central tendency and dispersion"
---
### **Question 4**

Helen is studying the daily mean wind speed for Camborne using the large data set from 1987. The data for one month are summarised in Table 1 below.

| Windspeed | $\text{n/a}$ | $6$ | $7$ | $8$ | $9$ | $11$ | $12$ | $13$ | $14$ | $16$ |
|---|---|---|---|---|---|---|---|---|---|---|
| **Frequency** | $13$ | $2$ | $3$ | $2$ | $2$ | $3$ | $1$ | $2$ | $1$ | $2$ |

**Table 1**

**(a)** Calculate the mean for these data. **(1)**

**(b)** Calculate the standard deviation for these data and state the units. **(2)**

The means and standard deviations of the daily mean wind speed for the other months from the large data set for Camborne in 1987 are given in Table 2 below. The data are not in month order.

| Month | $A$ | $B$ | $C$ | $D$ | $E$ |
|---|---|---|---|---|---|
| **Mean** | $7.58$ | $8.26$ | $8.57$ | $8.57$ | $11.57$ |
| **Standard Deviation** | $2.93$ | $3.89$ | $3.46$ | $3.87$ | $4.64$ |

**Table 2**

**(c)** Using your knowledge of the large data set, suggest, giving a reason, which month had a mean of $11.57$ **(2)**

The data for these months are summarised in the box plots on the opposite page. They are not in month order or the same order as in Table 2.

**(d) (i)** State the meaning of the $*$ symbol on some of the box plots.

**(ii)** Suggest, giving your reasons, which of the months in Table 2 is most likely to be summarised in the box plot marked $Y$. **(3)**

**(Total for Question 4 is 8 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Calculate the mean**
$$\sum fx = 6(2) + 7(3) + 8(2) + 9(2) + 11(3) + 12(1) + 13(2) + 14(1) + 16(2) = 180$$
$$\sum f = 2 + 3 + 2 + 2 + 3 + 1 + 2 + 1 + 2 = 18$$
$$\text{Mean} = \frac{180}{18} = 10$$

- **[B1]** Mean = 10.

#### **Part (b)**

**Step 2: Calculate the standard deviation**
$$\sigma = \sqrt{\frac{\sum fx^2}{\sum f} - (\text{mean})^2} = \sqrt{\frac{1996}{18} - 10^2} = \sqrt{110.888 - 100} = 3.30$$
Units: knots ($\text{kn}$)

- **[M1]** Correct method for standard deviation.
- **[A1]** $3.30$ (knots).

#### **Part (c)**

**Step 3: Identify the month**
- **[B1]** January (or winter month)
- **[B1]** because wind speeds are generally higher in winter.

#### **Part (d)**

**Step 4: Explain $*$ symbol and identify $Y$**
- **[B1]** An outlier.
- **[B1]** Month $E$ (highest mean/wind speed) or month with lowest spread/mean corresponding to $Y$.

---
topic: "Binomial and Geometric Distributions"
subtopic: "Discrete random variables"
---
### **Question 5**

A biased spinner can only land on one of the numbers $1, 2, 3$ or $4$. The random variable $X$ represents the number that the spinner lands on after a single spin and $P(X = r) = P(X = r + 2)$ for $r = 1, 2$

Given that $P(X = 2) = 0.35$

**(a)** find the complete probability distribution of $X$. **(2)**

Ambroh spins the spinner $60$ times.

**(b)** Find the probability that more than half of the spins land on the number $4$
Give your answer to $3$ significant figures. **(3)**

The random variable $Y = \frac{12}{X}$

**(c)** Find $P(Y - X \leqslant 4)$ **(3)**

**(Total for Question 5 is 8 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Determine probabilities**
$P(X = 3) = P(X = 1)$ and $P(X = 4) = P(X = 2) = 0.35$.
Let $P(X = 1) = p$. Then $p + 0.35 + p + 0.35 = 1 \Rightarrow 2p = 0.3 \Rightarrow p = 0.15$.

- **[M1]** Uses given relations to set up equations for probabilities.
- **[A1]** Complete probability distribution: $P(X=1)=0.15, P(X=2)=0.35, P(X=3)=0.15, P(X=4)=0.35$.

#### **Part (b)**

**Step 2: Calculate binomial probability**
Let $B$ be the number of times it lands on 4. $B \sim \text{B}(60, 0.35)$.
We want $P(B > 30) = 1 - P(B \leqslant 30)$.
$$1 - 0.9959 = 0.00411$$

- **[M1]** Identifies binomial distribution $\text{B}(60, 0.35)$.
- **[M1]** Uses $1 - P(B \leqslant 30)$.
- **[A1]** $0.00411$ (to 3 s.f.)

#### **Part (c)**

**Step 3: Evaluate $Y - X \leqslant 4$ for each value of $X$**
- If $X = 1$: $Y = \frac{12}{1} = 12$. $12 - 1 = 11 \leqslant 4$ is False.
- If $X = 2$: $Y = \frac{12}{2} = 6$. $6 - 2 = 4 \leqslant 4$ is True.
- If $X = 3$: $Y = \frac{12}{3} = 4$. $4 - 3 = 1 \leqslant 4$ is True.
- If $X = 4$: $Y = \frac{12}{4} = 3$. $3 - 4 = -1 \leqslant 4$ is True.

**Step 4: Sum probabilities**
$$P(X = 2) + P(X = 3) + P(X = 4) = 0.35 + 0.15 + 0.35 = 0.85$$

- **[M1]** Evaluates $Y$ for all values of $X$.
- **[M1]** Tests the inequality $Y - X \leqslant 4$ for each $X$.
- **[A1]** $0.85$

---
topic: "Linear Regression"
subtopic: "Equation of a regression line"
---
### **Examiner Report 5**

#### **Introduction**
Questions 1, 2, 3(a) and 5(a) proved to be accessible to nearly all students taking this examination and question 5(b) offered some discrimination for the more able. Question 3(b) proved beyond most students this time around: it was a first attempt to assess this area of the specification and, being written in the early days of covid, it proved unfortunate that this group of students, with such a disrupted preparation, encountered it.

#### **Comments on individual questions**

##### **Question 1**
Part (a) was answered well with most stating that the correlation was negative or in a few cases giving us a suitable description such as “t increases as p decreases”. It was encouraging to see most giving a suitable description of the units for the gradient in part (b) too although some simply said “days” having failed to appreciate that the gradient represented a rate. In part (c) some simply substituted $t = 3$ into the equation and gained no marks but most used $t = 3$ and $t = 0$ and subtracted to obtain a value of $+3.3$. A sizeable minority thought that using $t = 3$ and $t = 1$ would give them the change over 3 days. Few though told us though that this change represented a decrease in $p$ and so that last mark was rarely scored. The responses to part (d) were encouraging. Most secured the mark by stating that the estimate would be unreliable and either mentioned that the data were based on values of $t$ between 1 and 10 or said that using 19 involved extrapolation. A common incorrect argument was that because the estimate was still positive when $t = 19$, the estimate was reliable.

##### **Question 2**
This question was answered well with nearly 40% scoring 6 or 7 marks. In part (a) many selected the correct model and usually stated it correctly though on this occasion we did condone seeing $\text{B}(0.08, 35)$ for example. Many students simply write down what appears on their calculator input screen and they should be aware that this is not standard mathematical notation and without a correct answer following it would not gain the method mark. Most also scored the mark for (i) though some failed to give an accurate enough answer with 0.24 being the only answer offered on a few occasions. The front of the paper says that 3 significant figures should be used but we will usually allow any answer which rounds to 3sf (indicated as awrt on the mark scheme). Part (ii) was not answered so well with some finding $P(D \dots)$, some thinking that $P(D > 3) = 1 - P(D \leqslant 2)$ and others unsure about which function to use on their calculator and ending up with $P(D = 3)$. In part (b) the hypotheses were usually correctly stated using $p$ and a correct model selected. Most obtained the correct probability although some found $P(X = 2)$ rather than $P(X \leqslant 2)$. The correct decision was usually made but some failed to give a suitable contextual conclusion: the simplest description mentioned that there was evidence to support supplier B’s claim but others chose to talk about damp bags and often referred to the “number of bags” rather than the “proportion” decreasing.

##### **Question 3**
Part (a) should have been familiar territory for candidates and most did manage to list the frequencies for each of the bars though, rather disappointingly, nearly a quarter of candidates could not do this successfully with a common incorrect answer of 50 rather than 75 being recorded for the bar between 2 and 3.5. Those who did understand this important feature of histograms often went on to use linear interpolation correctly to find the median.

Part (b) sadly defeated almost all candidates. This was the first time we had attempted to assess the part of the specification dealing with “connection (of histograms) to probability distributions” (section 2.1). A small minority of candidates realised they needed to integrate and set the area under the curve to 256 and they often went onto achieve the correct value of $k$ but most attempts involved differentiating the curve or solving a quadratic equation and made no progress. A few could use the symmetry of the model in part (c) to write down the median but most were completely lost after part (a).

##### **Question 4**
Although a few students simply left this question blank most had a go though only about a quarter scored either of the marks. The median was the most successfully answered with 1000 being a common acceptable value. Selecting a suitable value for the range was more challenging with most responses being far too large.

Although the specification requires students to be “familiar” with the large data set, for this sitting it is understandable that many would not have had as much time for familiarisation as would be desirable.

##### **Question 5**
Part (a) was answered well by most candidates but often there was little explanation offered to explain where their probabilities came from, nevertheless the correct answers to (i) and (ii) were often seen. Some thought that, for example, in (i) the answer should be $\frac{3}{4} \times \frac{1}{4} + \frac{1}{3} \times \frac{3}{4}$ but they had at least realised that the red spinner must have landed on 3 and the green spinner on 4 and scored the first mark. Part (b) was designed as a problem-solving question and it was good to see a number of students trying it though understandable that many felt there were easier pickings available in paper 22 and moved onto that. Most attempts involved setting up two linear equations and solving them but there was some confusion over values of the random variables and probabilities associated with these values. However over 10% of candidates scored full marks on this question and showed a good understanding of this topic.
