---
topic: "Discrete Random Variables"
subtopic: "Discrete uniform distribution"
---
### **Question 1**

Helen believes that the random variable $C$, representing cloud cover from the large data set, can be modelled by a discrete uniform distribution.

**(a)** Write down the probability distribution for $C$. **(2)**

**(b)** Using this model, find the probability that cloud cover is less than $50\%$ **(1)**

Helen used all the data from the large data set for Hurn in $2015$ and found that the proportion of days with cloud cover of less than $50\%$ was $0.315$

**(c)** Comment on the suitability of Helen’s model in the light of this information. **(1)**

**(d)** Suggest an appropriate refinement to Helen’s model. **(1)**

**(Total for Question 1 is 5 marks)**

### **Mark Scheme 1**

#### **Part (a)**
**Step 1: Write down the probability distribution**
$\text{P}(C = c) = \frac{1}{9}$ for $c = 0, 1, 2, 3, 4, 5, 6, 7, 8$
- **[B1]** States all possible values of $C$ ($0$ to $8$).
- **[B1]** States correct probability $\frac{1}{9}$ for each value.

#### **Part (b)**
**Step 2: Find probability**
$\text{P}(C < 4) = \text{P}(C \le 3) = \frac{4}{9} \text{ or } 0.444$
- **[B1]** Correct probability ($\frac{4}{9}$ or $0.444$).

#### **Part (c)**
**Step 3: Comment on suitability**
Model is not very suitable as $0.444$ is quite different from $0.315$.
- **[B1]** Valid comparison indicating the model overestimates the proportion (or equivalent reasoning).

#### **Part (d)**
**Step 4: Suggest refinement**
Use a binomial distribution or a different probability distribution (e.g. non-uniform discrete distribution).
- **[B1]** Suggests a suitable refinement (such as a binomial distribution).

### **Examiner Report 1**
This proved to be a popular start to the paper with over $35\%$ of students scoring full marks. Part (a) was answered well with most understanding the term "mutually exclusive" and giving their answer as events not probabilities. Part (b) was very straightforward and nearly all could interpret the Venn diagram correctly to answer this. Many knew a suitable rule for independence in part (c) and could use this to find $\text{P}(A) = 0.6$ or write down a suitable equation for $q$ which was then solved correctly. Part (d) was more challenging as many could not use the given conditional probability correctly to obtain an equation for $r$ but most knew how to use this answer to find $s$ and were able to gain at least one mark in this part.

---
topic: "Correlation"
subtopic: "Pearson product-moment correlation coefficient"
---
### **Question 2**

Tessa owns a small clothes shop in a seaside town. She records the weekly sales figures, $£w$, and the average weekly temperature, $t\text{ }^\circ\text{C}$, for $8$ weeks during the summer.

The product moment correlation coefficient for these data is $-0.915$

**(a)** Stating your hypotheses clearly and using a $5\%$ level of significance, test whether or not the correlation between sales figures and average weekly temperature is negative. **(3)**

**(b)** Suggest a possible reason for this correlation. **(1)**

Tessa suggests that a linear regression model could be used to model these data.

**(c)** State, giving a reason, whether or not the correlation coefficient is consistent with Tessa’s suggestion. **(1)**

**(d)** State, giving a reason, which variable would be the explanatory variable. **(1)**

Tessa calculated the linear regression equation as $w = 10\,755 - 171t$

**(e)** Give an interpretation of the gradient of this regression equation. **(1)**

**(Total for Question 2 is 7 marks)**

### **Mark Scheme 2**

#### **Part (a)**
**Step 1: State hypotheses**
$\text{H}_0: \rho = 0, \quad \text{H}_1: \rho < 0$
- **[B1]** Both hypotheses correctly stated using $\rho$.

**Step 2: Find critical value and compare**
Critical value for $n = 8$, $1$-tailed at $5\%$ level is $-0.6215$ (or $-0.6664$ depending on exact tables used, e.g. $-0.6215$).
Since $-0.915 < -0.6215$ (test statistic lies in critical region), reject $\text{H}_0$.
- **[M1]** Uses correct critical value from tables for $n = 8$, $5\%$ significance level.
- **[A1]** Correct conclusion in context (evidence of negative correlation).

#### **Part (b)**
**Step 3: Suggest reason**
When it is warmer, people buy fewer clothes (or go to the beach instead of shopping).
- **[B1]** A sensible context-based reason.

#### **Part (c)**
**Step 4: Comment on consistency**
Yes, because $-0.915$ is close to $-1$, indicating strong linear correlation.
- **[B1]** States yes with a valid reason.

#### **Part (d)**
**Step 5: Explanatory variable**
Temperature ($t$), because it is controlled/independent of sales.
- **[B1]** Temperature with a valid reason.

#### **Part (e)**
**Step 6: Interpret gradient**
For every $1\text{ }^\circ\text{C}$ increase in average weekly temperature, weekly sales decrease by $£171$.
- **[B1]** Correct interpretation including units and direction.

### **Examiner Report 2**
Very few students were unable to identify the negative correlation in part (a) with many attempting to describe the strength as well (split fairly evenly between weak and strong) though this was not required here. In part (b) it was clear that more students were familiar with the large data set. Many identified "rainfall" as the variable on the $y$-axis and they usually gave the correct units although some thought it should be $\text{mm}^3$. The most common incorrect answer here was "cloud cover" but, of course, this variable is not available on the large data set for Perth. Part (c) was a standard hypothesis test for correlation. It was encouraging to see a good number using $\rho$ for the hypotheses but fewer realised that the test was two-tailed. The phrase "...believes there is a correlation between..." shows that a two tailed test should be used, however many were swayed by the negative value of $r$ and opted for a one tailed test. It was good to see that most chose the critical value from the tables that was compatible with their alternative hypothesis and this meant that they could also access the final mark provided their comment was in context, "support for Stav's belief" was perhaps the simplest way of including the context. There were some good answers to part (d) but many others were unable to pull together the various parts of the question to make a correct inference. Some stated that the humidity was high and other assumed this but interpreted the negative value of $r$ correctly and were then able to state that they would expect the number of hours of sunshine to be low. Some gave a suggested value for the number of hours of sunshine but this needed to be realistic and values more than $5$ were not accepted. A few students knew (from the large data set) that humidity greater than $95\%$ implies foggy conditions and argued correctly that this would suggest a low amount of sunshine.

---
topic: "Poisson Distributions"
subtopic: "The Poisson distribution"
---
### **Question 3**

In an experiment a group of children each repeatedly throw a dart at a target. 

For each child, the random variable $H$ represents the number of times the dart hits the target in the first $10$ throws.

Peta models $H$ as $\text{B}(10, 0.1)$

**(a)** State two assumptions Peta needs to make to use her model. **(2)**

**(b)** Using Peta’s model, find $\text{P}(H \ge 4)$ **(1)**

For each child the random variable $F$ represents the number of the throw on which the dart first hits the target.

Using Peta’s assumptions about this experiment,

**(c)** find $\text{P}(F = 5)$ **(2)**

Thomas assumes that in this experiment no child will need more than $10$ throws for the dart to hit the target for the first time. He models $\text{P}(F = n)$ as 

$$\text{P}(F = n) = 0.01 + (n - 1) \times \alpha$$

where $\alpha$ is a constant.

**(d)** Find the value of $\alpha$ **(4)**

**(e)** Using Thomas’ model, find $\text{P}(F = 5)$ **(1)**

**(f)** Explain how Peta’s and Thomas’ models differ in describing the probability that a dart hits the target in this experiment. **(1)**

**(Total for Question 3 is 11 marks)**

### **Mark Scheme 3**

#### **Part (a)**
**Step 1: State assumptions**
1. Probability of hitting the target is constant.
2. Throws are independent.
- **[B1]** First valid assumption.
- **[B1]** Second valid assumption.

#### **Part (b)**
**Step 2: Calculate probability**
$\text{P}(H \ge 4) = 1 - \text{P}(H \le 3) = 1 - 0.9872 = 0.0128$ (using $\text{B}(10, 0.1)$)
- **[B1]** Correct probability ($0.0128$).

#### **Part (c)**
**Step 3: Geometric probability calculation**
$\text{P}(F = 5) = 0.9^4 \times 0.1 = 0.0656$
- **[M1]** Uses geometric distribution form $p(1-p)^{n-1}$.
- **[A1]** Correct value ($0.0656$).

#### **Part (d)**
**Step 4: Form and solve equation for $\alpha$**
Sum of probabilities must equal $1$:
$$\sum_{n=1}^{10} (0.01 + (n-1)\alpha) = 1$$
$10(0.01) + \alpha(0 + 1 + 2 + \dots + 9) = 1$
$0.1 + 45\alpha = 1 \Rightarrow 45\alpha = 0.9 \Rightarrow \alpha = \frac{0.9}{45} = 0.02$
- **[M1]** Recognises that $\sum \text{P}(F=n) = 1$.
- **[M1]** Uses formula for sum of arithmetic progression or sums terms correctly.
- **[A1]** Correct equation leading to $\alpha$.
- **[A1]** $\alpha = 0.02$.

#### **Part (e)**
**Step 5: Apply Thomas' model**
$\text{P}(F = 5) = 0.01 + (5 - 1) \times 0.02 = 0.01 + 0.08 = 0.09$
- **[B1]** Correct probability ($0.09$).

#### **Part (f)**
**Step 6: Explain difference**
Peta's model assumes a constant probability of hitting the target, whereas Thomas' model assumes the probability changes (increases) with each throw.
- **[B1]** Clear statement explaining the difference in probability of success per trial.

### **Examiner Report 3**
Part (a) should have been an easy start to the question but a surprisingly large number of students gave an answer of $33$ by failing to consider the outliers to determine the range. Part (b) though was answered very well and nearly all students answered (c) correctly. The presence of the formula for standard deviation in the formula booklet meant that a good number answered part (d) correctly although occasionally some forgot to take the square root of failed to square the mean. In (e) most gave a suitable calculation to support their statement that Taruni would identify only $1$ outlier. Some candidates used the median of $20$ rather than the mean of $22.5$ though. The last two parts were more challenging but it was encouraging to see a good number of attempts. Many were able to deduce that because the mean did not change then $a + b = 45$ but fewer were able to establish that, because the median increases, both values had to be greater than $20$. Some did state these two conditions but sadly did not choose suitable values ($a = 25$ and $b = 20$ was a common error) for their final answer. In (g) many students stated that the new values would be "close to the mean" but this was not precise enough to ensure that the standard deviation would decrease. Some of the very strongest candidates did realise that because both values were within $1$ standard deviation of the mean then they could be sure that the new standard deviation would be smaller. This appreciation that standard deviation represents "average distance from the mean" is clearly not well known.

---
topic: "Continuous Probability Distributions"
subtopic: "Mean and variance of continuous distributions"
---
### **Question 4**

Charlie is studying the time it takes members of his company to travel to the office. He stands by the door to the office from $0840$ to $0850$ one morning and asks workers, as they arrive, how long their journey was.

**(a)** State the sampling method Charlie used. **(1)**

**(b)** State and briefly describe an alternative method of non-random sampling Charlie could have used to obtain a sample of $40$ workers. **(2)**

Taruni decided to ask every member of the company the time, $x$ minutes, it takes them to travel to the office.

**(c)** State the data selection process Taruni used. **(1)**

Taruni’s results are summarised by the box plot and summary statistics below.

**Figure 2** _(A box plot showing journey times ranging from approximately $10$ to $135$ minutes, with median around $35$, lower quartile around $23$, upper quartile around $52$, and two outliers marked at around $120$ and $122$ minutes.)_

```tikz
\begin{tikzpicture}
  \draw[->] (0,0) -- (15,0) node[below] {Journey time (minutes)};
  \foreach \x in {1,2,3,4,5,6,7,8,9,10,11,12,13,14}
    \draw (\x, 0.1) -- (\x, -0.1) node[below] {\pgfmathparse{int(\x*10)}\pgfmathresult};
  \draw (2.3,0.5) -- (2.3,1.5);
  \draw (5.2,0.5) -- (5.2,1.5);
  \draw (3.5,0.5) -- (3.5,1.5);
  \draw (2.3,1) -- (1.5,1);
  \draw (5.2,1) -- (9.4,1);
  \draw (1.5,0.8) -- (1.5,1.2);
  \draw (9.4,0.8) -- (9.4,1.2);
  \draw (2.3,0.5) -- (5.2,0.5) -- (5.2,1.5) -- (2.3,1.5) -- cycle;
  \fill (12,1) circle (2pt);
  \fill (12.3,1) circle (2pt);
\end{tikzpicture}
```

$$n = 95, \quad \sum x = 4133, \quad \sum x^2 = 202\,294$$

**(d)** Write down the interquartile range for these data. **(1)**

**(e)** Calculate the mean and the standard deviation for these data. **(3)**

**(f)** State, giving a reason, whether you would recommend using the mean and standard deviation or the median and interquartile range to describe these data. **(2)**

Rana and David both work for the company and have both moved house since Taruni collected her data.

Rana’s journey to work has changed from $75$ minutes to $35$ minutes and David’s journey to work has changed from $60$ minutes to $33$ minutes.

Taruni drew her box plot again and only had to change two values.

**(g)** Explain which two values Taruni must have changed and whether each of these values has increased or decreased. **(3)**

**(Total for Question 4 is 13 marks)**

### **Mark Scheme 4**

#### **Part (a)**
**Step 1: Identify sampling method**
Opportunity sampling (or convenience sampling).
- **[B1]** Opportunity sampling.

#### **Part (b)**
**Step 2: Describe alternative non-random method**
Quota sampling: selecting a quota of workers with specific characteristics until $40$ are surveyed.
- **[B1]** Names quota sampling.
- **[B1]** Gives a brief valid description.

#### **Part (c)**
**Step 3: State data selection process**
A census.
- **[B1]** Census.

#### **Part (d)**
**Step 4: Interquartile range**
$\text{IQR} = Q_3 - Q_1 = 52 - 23 = 29$ (allow $28 - 30$).
- **[B1]** Correct IQR.

#### **Part (e)**
**Step 5: Calculate mean and standard deviation**
$$\text{Mean} = \frac{4133}{95} = 43.5$$
$$\text{Standard deviation} = \sqrt{\frac{202\,294}{95} - \left(\frac{4133}{95}\right)^2} = \sqrt{2129.41 - 1892.25} = \sqrt{237.16} = 15.4$$
- **[M1]** Correct formula for mean or standard deviation.
- **[A1]** Mean $= 43.5$.
- **[A1]** Standard deviation $= 15.4$.

#### **Part (f)**
**Step 6: Recommend measure**
Median and interquartile range, because the data are skewed / have outliers.
- **[B1]** Recommends median and IQR.
- **[B1]** Gives reason (presence of outliers or positive skew).

#### **Part (g)**
**Step 7: Explain changes to box plot**
Upper quartile ($Q_3$) and maximum value (or upper whisker). Both values have decreased.
- **[B1]** Identifies upper quartile (or $Q_3$) and maximum value (or upper whisker).
- **[B1]** States upper quartile has decreased.
- **[B1]** States maximum value has decreased.

### **Examiner Report 4**
Part (a) was generally answered very well. Being a "show that" question meant that we needed to see a full explanation and most clearly showed the sum of the probabilities equal to $1$ and then solved the resulting equation to find $k$. Failing to show this key step usually meant that no marks could be awarded. A significant number of students left the rest of the question blank but those who did make an attempt were usually able to identify some, though rarely all, the cases in (b). Finding the probabilities was more of a problem with some using $\text{P}(D = 50) + \text{P}(D = 30)$ rather than the product and those having correct probabilities for all $3$ cases were quite rare. It was good to see many students who had faltered on (b) still making a start on part (c). Many identified the $4$ angles as terms of an arithmetic series and some were able to reach the condition $2a + 3d = 180$ (or equivalent) but many could not see how to complete the problem. Some used the information that $a > 50$ to reach $d < \frac{80}{3}$ but were unable to make the connection that this meant that only the two cases $d = 10$ and $d = 20$ were required and so the probability could simply be written down.

---
topic: "Continuous Probability Distributions"
subtopic: "Normal distribution"
---
### **Question 5**

The lifetime, $L$ hours, of a battery has a normal distribution with mean $18$ hours and standard deviation $4$ hours.

Alice’s calculator requires $4$ batteries and will stop working when any one battery reaches the end of its lifetime.

**(a)** Find the probability that a randomly selected battery will last for longer than $16$ hours. **(1)**

At the start of her exams Alice put $4$ new batteries in her calculator. 

She has used her calculator for $16$ hours, but has another $4$ hours of exams to sit.

**(b)** Find the probability that her calculator will not stop working for Alice’s remaining exams. **(5)**

Alice only has $2$ new batteries so, after the first $16$ hours of her exams, although her calculator is still working, she randomly selects $2$ of the batteries from her calculator and replaces these with the $2$ new batteries.

**(c)** Show that the probability that her calculator will not stop working for the remainder of her exams is $0.199$ to $3$ significant figures. **(3)**

After her exams, Alice believed that the lifetime of the batteries was more than $18$ hours.

She took a random sample of $20$ of these batteries and found that their mean lifetime was $19.2$ hours.

**(d)** Stating your hypotheses clearly and using a $5\%$ level of significance, test Alice’s belief. **(5)**

**(Total for Question 5 is 14 marks)**

### **Mark Scheme 5**

#### **Part (a)**
**Step 1: Probability for single battery**
$\text{P}(L > 16) = 0.6915$ (using $\text{N}(18, 4^2)$)
- **[B1]** Correct probability ($0.6915$).

#### **Part (b)**
**Step 2: Probability for calculator**
Needs all $4$ batteries to last another $4$ hours, given they have already lasted $16$ hours.
Using conditional probability: $\text{P}(L > 20 \mid L > 16) = \frac{\text{P}(L > 20)}{\text{P}(L > 16)}$
$\text{P}(L > 20) = 0.3085$
Probability for one battery = $\frac{0.308537}{0.691462} = 0.44621$
For all $4$ batteries: $(0.44621)^4 = 0.0396$
- **[M1]** Identifies need for conditional probability $\text{P}(L > 20 \mid L > 16)$ or uses survival after $16$ hours.
- **[A1]** Correct conditional probability for one battery ($0.446$).
- **[M1]** Raises conditional probability to the power of $4$.
- **[A1]** Correct probability ($0.0396$).

#### **Part (c)**
**Step 3: Calculate probability with replacements**
Possible combinations of old batteries surviving:
- All $2$ old batteries survive: $\binom{2}{2} p^2 \times 1^2 = p^2$
- Exactly $1$ old battery survives: $\binom{2}{1} p^1(1-p)^1 \times 1^2 = 2p(1-p)$
where $p = 0.44621$.
Total probability $= p^2 + 2p(1-p) = (0.44621)^2 + 2(0.44621)(0.55379) = 0.199$
- **[M1]** Identifies relevant cases (both old survive or one old survives).
- **[M1]** Correct calculation of terms.
- **[A1]** Correctly reaches $0.199$ (to $3$ s.f.).

#### **Part (d)**
**Step 4: Hypothesis test**
$\text{H}_0: \mu = 18, \quad \text{H}_1: \mu > 18$
Test statistic for sample mean $\bar{X}$:
$\bar{X} \sim \text{N}\left(18, \frac{4^2}{20}\right)$
$\text{P}(\bar{X} \ge 19.2) = 0.0874$ (or using $z = \frac{19.2 - 18}{4/\sqrt{20}} = 1.3416$)
Critical value method: $z = 1.6449$, critical region $\bar{X} > 18.47$.
Since $19.2$ is in the critical region (or $0.0874 > 0.05$ - wait, $1.3416 < 1.6449$, so insignificant at $5\%$ level).
Let's re-verify: $0.0874 > 0.05$, insufficient evidence to reject $\text{H}_0$.
- **[B1]** Correct hypotheses.
- **[M1]** Standardises or finds distribution of sample mean correctly.
- **[A1]** Correct probability or test statistic ($z = 1.34$).
- **[B1]** Correct critical value ($1.6449$) or significance level comparison.
- **[A1]** Insufficient evidence to reject $\text{H}_0$ (Alice's belief is not supported).

### **Examiner Report 5**
It was disappointing that over $20\%$ of candidates scored no marks here as there were some straightforward marks available to those who had studied this part of the specification. Part (a) was a very straightforward opening part and the vast majority of students could use their calculator efficiently to score this mark. Part (b) was a fairly standard hypothesis test and a good number made progress here. Some still did not use $\mu$ for the hypotheses and a null hypothesis of $T = 10$ was all too common. Most attempts used a normal distribution with a correct variance but a significant number of students used a mean of $11.5$ rather than $10$. This is not a correct method for a hypothesis test (the probabilities should be calculated on the assumption that $\text{H}_0$ is true) but, on this occasion, for those who still managed to reach a correct conclusion a special case enabled them to secure one mark. A variety of different approaches were used in part (b), some finding the critical value for $\bar{X}$ and others calculating the test statistic of $1.677\dots$ but some of these candidates compared this value to the significance level rather than the critical value of $1.6669$ from the tables. The first part of (c) was another fairly straightforward calculation which many scoring this mark, sometimes including those who failed to score the mark in part (a). Students need to be aware of which "tail" their calculator gives them. Beyond (c)(i) the question was more challenging but it is encouraging that over $50\%$ of students scored some of these first $6$ marks. 
In (c)(ii) although a good number of students recognised that a conditional probability was required, few could find a correct expression for the numerator and a common error was to see $\frac{\text{(c)(i)}}{\text{P}(T > 0)}$ used rather than a correct numerator of $\text{P}(0 < T < 2)$. In part (iii) many realised that the model would assign some probability to negative values of $T$ but this will always be true when a normal distribution is used as a model. The point here was that a significant proportion of the values for $T$ were negative and so this means that the normal model is not very good. Most responses seemed to believe that a model must match reality exactly but a few did comment that $\text{P}(T > 0)$ should be closer to $1$ or that the difference between (i) and (ii) was too big and therefore the model was not a good one to use.
Fully correct answers to part (d) were rare and this part gave the A* students an opportunity to shine. Successful students realised that they needed to look at $\text{P}(T > 2)$ and often found this by taking $1 - \text{(c)(i)}$ but they rarely realised that the median splits this probability into $2$ so they were seeking the value of $t$ such that $\text{P}(T > t) = 0.40\dots$ Some who reached this stage tried, incorrectly to use their calculator, failing to realise that their calculator gave $t$ for probabilities of the form $\text{P}(T < t)$, a few used the tables provided to find $z = 0.2533$ and some did prepare correctly to use their calculator and found $\text{P}(T < t) = 0.5978\dots$ (the $0.402\dots + \text{(c)(i)}$) from whence the correct value of $t = 5.9$ could be found. It was encouraging to see some good use of diagrams in this question being used to help students identify which probabilities they needed.
