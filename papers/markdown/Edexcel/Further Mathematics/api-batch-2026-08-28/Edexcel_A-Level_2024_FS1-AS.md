---
topic: "Hypothesis Testing"
subtopic: "Goodness of fit"
---
### **Question 1**

Sharma believes that each computer game he sells appeals equally to all age ranges.
To investigate this, he takes a random sample of 100 people who play these games and asks them which of the games $A$, $B$ or $C$ they prefer.
The results are summarised in the table below.

$$
\begin{array}{|c|c|c|c|c|}
\hline
\multicolumn{2}{|c|}{\text{Computer game}} & A & B & C \\
\hline
\multirow{3}{*}{\text{Age range}} & < 20 & 8 & 15 & 6 \\
\cline{2-5}
& 20 - 30 & 21 & 12 & 9 \\
\cline{2-5}
& > 30 & 6 & 10 & 13 \\
\hline
\end{array}
$$

**(a)** Write down hypotheses for a suitable test to assess Sharma's belief. **(1)**

**(b)** For the test, calculate the expected frequency for
**(i)** those players aged under 20 who prefer game $C$
**(ii)** those players aged between 20 and 30 who prefer game $A$ **(2)**

**(c)** State the degrees of freedom of the test statistic for this test. **(1)**

Sharma correctly calculates the test statistic for this test to be $11.542$ (to 3 decimal places).

**(d)** Using a $5\%$ significance level, and stating your critical value, comment on Sharma's belief. **(2)**

**(Total 6 marks)**

### **Mark Scheme 1**

#### **Part (a)**
**Step 1: State hypotheses**
- **[B1]** $H_0$: Preference for computer game is independent of age range (or equivalent, e.g. games appeal equally across age ranges) and $H_1$: Preference for computer game is not independent of age range.

#### **Part (b)**
**Step 2: Calculate expected frequencies**
**(i)** $\frac{29 \times 35}{100} = 10.15$ (or $\frac{203}{20}$)
- **[A1]** Correct expected frequency for under 20 preferring game $C$.

**(ii)** $\frac{42 \times 35}{100} = 14.7$ (or $\frac{147}{10}$)
- **[A1]** Correct expected frequency for 20-30 preferring game $A$.

#### **Part (c)**
**Step 3: State degrees of freedom**
- **[B1]** $\text{d.f.} = (3-1)(3-1) = 4$

#### **Part (d)**
**Step 4: Critical value and conclusion**
- **[B1]** Critical value: $\chi^2_{4}(0.05) = 9.488$
- **[A1]** Since $11.542 > 9.488$ (or test statistic in critical region), reject $H_0$. There is evidence that preference for computer games is not independent of age range (or Sharma's belief is rejected).

### **Examiner Report 1**

The vast majority of students made good progress in this question and answered the numerical sections accurately, securing full marks on (b), and (c). Occasional method errors in (b) usually involved some sort of average of the 3 observed frequencies. In (d), the correct critical value was stated in almost all responses, although a small number of students lost a mark for not giving this value to the required degree of accuracy as specified on the front of the examination paper. It was rare for students to select the wrong critical value for their stated degree of freedom.

In part (a), a large number of students had difficulty expressing the hypotheses in a correct way for a test of independence, with a simple restating of the question being the most common wrong response. Reference to correlation was also common, whilst a significant minority of responses had the hypotheses the wrong way round. Responses which scored the mark were those which referred to independence or association and were usually expressed in a clear concise way. In part (d), the statement of the conclusion could use less specific phraseology and so more students earned this than the mark in (a). Some students lost this mark by confusing the test statistic and the critical value and so drawing an incorrect conclusion, because their initial hypotheses were reversed, or because their conclusion contained contradictions. Many misinterpreted that rejecting $H_0$ meant that games were preferred equally by all age groups.

---
topic: "Poisson Distributions"
subtopic: "Modelling with the Poisson distribution"
---
### **Question 2**

A manager keeps a record of accidents in a canteen.

Accidents occur randomly with an average of $2.7$ per month. The manager decides to model the number of accidents with a Poisson distribution.

**(a)** Give a reason why a Poisson distribution could be a suitable model in this situation. **(1)**

**(b)** Assuming that a Poisson model is suitable, find the probability of
**(i)** at least 3 accidents in the next month, **(1)**
**(ii)** no more than 10 accidents in a 3-month period, **(2)**
**(iii)** at least 2 months with no accidents in an 8-month period. **(4)**

One day, two members of staff bump into each other in the canteen and each report the accident to the manager. The canteen manager is unsure whether to record this as one or two accidents.

Given that the manager still wants to model the number of accidents per month with a Poisson distribution,

**(c)** state
* a property of the Poisson distribution that the manager should consider when deciding how to record this situation
* whether the manager should record this as one or two accidents **(1)**

The manager introduces some new procedures to try and reduce the average number of accidents per month.

During the following 12 months the total number of accidents is $22$.
The manager claims that the accident rate has been reduced.

**(d)** Use a $5\%$ level of significance to carry out a suitable test to assess the manager's claim.
You should state your hypotheses clearly and the $p$-value used in your test. **(4)**

**(Total 13 marks)**

### **Mark Scheme 2**

#### **Part (a)**
**Step 1: State reason**
- **[B1]** Accidents occur singly / independently / at a constant rate / at a known average rate. (Any one valid contextual reason).

#### **Part (b)**
**Step 2: Calculate probability for (i)**
Let $X$ be the number of accidents per month, $X \sim \text{Po}(2.7)$.
$\mathrm{P}(X \ge 3) = 1 - \mathrm{P}(X \le 2) = 1 - 0.4936... = 0.506$ (or $0.5064$)
- **[A1]** $0.506$

**Step 3: Calculate probability for (ii)**
Let $Y$ be the number of accidents in 3 months, $Y \sim \text{Po}(8.1)$.
$\mathrm{P}(Y \le 10) = 0.8058... = 0.806$
- **[M1]** Uses $\text{Po}(8.1)$ and attempts $\mathrm{P}(Y \le 10)$
- **[A1]** $0.806$

**Step 4: Calculate probability for (iii)**
Let $M$ be the number of months with no accidents in an 8-month period.
Probability of no accidents in a month: $p = \mathrm{P}(X = 0) = \mathrm{e}^{-2.7} = 0.067205...$
$M \sim \text{B}(8, 0.067205...)$
$\mathrm{P}(M \ge 2) = 1 - \mathrm{P}(M \le 1) = 1 - [\left(\frac{8}{0}\right)(0.0672)^0(0.9328)^8 + \left(\frac{8}{1}\right)(0.0672)^1(0.9328)^7]$
$= 1 - [0.57398 + 0.33089] = 1 - 0.90487 = 0.0951$ (or $0.09513$)
- **[M1]** Finds $\mathrm{P}(\text{no accidents in a month}) = \mathrm{e}^{-2.7}$
- **[M1]** Identifies binomial model $\mathrm{B}(8, \mathrm{e}^{-2.7})$
- **[M1]** Attempts $\mathrm{P}(M \ge 2)$
- **[A1]** $0.0951$

#### **Part (c)**
**Step 5: State property and decision**
- **[B1]** Property: Accidents must occur singly / independently. Decision: Record as one accident.

#### **Part (d)**
**Step 6: Hypothesis test**
Let $\lambda$ be the mean number of accidents per 12 months. Under $H_0$, $\lambda = 2.7 \times 12 = 32.4$.
$H_0: \lambda = 32.4$
$H_1: \lambda < 32.4$
Let $W$ be the number of accidents in 12 months, $W \sim \text{Po}(32.4)$.
$p\text{-value} = \mathrm{P}(W \le 22) = 0.0400...$ (or $0.040$)
Since $0.040 < 0.05$, reject $H_0$ (there is evidence that the accident rate has been reduced).
- **[B1]** Correct hypotheses ($H_0: \lambda = 32.4$ (or $\mu = 32.4$) and $H_1: \lambda < 32.4$).
- **[M1]** Calculates the $p\text{-value}$ as $\mathrm{P}(W \le 22)$ using $\text{Po}(32.4)$.
- **[A1]** Correct $p\text{-value} = 0.0400$ (or $0.040$).
- **[A1]** Correct conclusion in context (reject $H_0$, sufficient evidence that the accident rate has been reduced).

### **Examiner Report 2**

This question required students to give answers in context which they often find difficult. Accuracy was also an issue in part (b)(iii).

Part (a) was generally answered well but some students failed to relate their answer to the context (accidents) of the question. Common incorrect responses included referencing assumptions relating to the binomial distribution (constant probability).

Part (b)(i) was a good source of marks for most students.

In part (b)(ii) the new value of lambda was generally correct and also stated, when the answer was not correct a common error was calculating $\mathrm{P}(X \le 9) = 0.704$ rather than the correct answer of $\mathrm{P}(X \le 10) = 0.806$.

In part (b)(iii) it was pleasing to see the correct new model being stated before attempting to calculate $\mathrm{P}(\text{at least } 2 \text{ months})$. Common incorrect methods involved either calculating $\mathrm{P}(X > 2)$ or using a Poisson approximation rather than the exact binomial distribution. Many lost the final accuracy mark due to premature rounding which meant their final answer was not to the required level of accuracy.

There were some good attempts at part (c) with many students clearly understanding the assumptions required to model using a Poisson distribution – accidents having to occur independently of each other or singly. However, many then confused this and stated that the manager should record this as two accidents (since accidents cannot happen at the same time).

Finally, in part (d) the correct hypotheses with the required parameter stated were a common occurrence. A small number of students used $p$ rather than $\lambda$ or $\mu$.

Most students were able to appreciate the requirement to calculate a $p$-value using $\mathrm{P}(X \le 22)$ but there are still students who are incorrectly calculating $\mathrm{P}(X = 22)$.

Those students who used the given wording in the question were generally most successful. Far too many referred to the number of accidents reducing rather than it being the rate of accidents or number of accidents per month.

---
topic: "Discrete Random Variables"
subtopic: "Expected value of a discrete random variable"
---
### **Question 3**

The discrete random variable $X$ has probability distribution,

$$
\begin{array}{|c|c|c|c|c|c|}
\hline
x & -1 & 0 & 1 & 3 & 7 \\
\hline
\mathrm{P}(X = x) & p & r & p & 0.3 & r \\
\hline
\end{array}
$$

where $p$ and $r$ are probabilities.

Given that $\mathrm{E}(X) = 1.95$

find the exact value of $\mathrm{E}(\sqrt{X + 1})$ giving your answer in the form $a + b\sqrt{2}$ where $a$ and $b$ are rational. **(6)**

**(Total 6 marks)**

### **Mark Scheme 3**

#### **Part (a)**
**Step 1: Set up equations using total probability and expectation**
Sum of probabilities equals 1:
$$p + r + p + 0.3 + r = 1 \Rightarrow 2p + 2r + 0.3 = 1 \Rightarrow 2p + 2r = 0.7 \Rightarrow p + r = 0.35$$

Expectation equals $1.95$:
$$\mathrm{E}(X) = (-1)(p) + (0)(r) + (1)(p) + (3)(0.3) + (7)(r) = 1.95$$
$$-p + p + 0.9 + 7r = 1.95 \Rightarrow 0.9 + 7r = 1.95 \Rightarrow 7r = 1.05 \Rightarrow r = 0.15$$
- **[M1]** Sets up an equation for $\mathrm{E}(X)$ using the table.
- **[A1]** Correct equation leading to the value of $r$ ($r = 0.15$).

**Step 2: Find $p$**
Using $p + r = 0.35$:
$$p + 0.15 = 0.35 \Rightarrow p = 0.2$$
- **[A1]** Correct value for $p$ ($p = 0.2$).

**Step 3: Calculate $\mathrm{E}(\sqrt{X + 1})$**
$$\mathrm{E}(\sqrt{X + 1}) = \sum \sqrt{x_i + 1} \cdot \mathrm{P}(X = x_i)$$
$$= \sqrt{-1 + 1}(p) + \sqrt{0 + 1}(r) + \sqrt{1 + 1}(p) + \sqrt{3 + 1}(0.3) + \sqrt{7 + 1}(r)$$
$$= 0(0.2) + 1(0.15) + \sqrt{2}(0.2) + 2(0.3) + \sqrt{8}(0.15)$$
- **[M1]** Correct substitution of values into the definition of $\mathrm{E}(\sqrt{X+1})$.

**Step 4: Simplify the expression**
$$= 0.15 + 0.2\sqrt{2} + 0.6 + 0.15(2\sqrt{2})$$
$$= 0.75 + 0.2\sqrt{2} + 0.3\sqrt{2}$$
$$= 0.75 + 0.5\sqrt{2}$$
In fractional form: $\frac{3}{4} + \frac{1}{2}\sqrt{2}$ (or equivalent).
- **[M1]** Simplifies surds (e.g. $\sqrt{8} = 2\sqrt{2}$).
- **[A1]** Correct exact value $\frac{3}{4} + \frac{1}{2}\sqrt{2}$ (or $\frac{3 + 2\sqrt{2}}{4}$).

### **Examiner Report 3**

Many fully correct responses were seen to this question. Virtually all students found $r$ and $p$ correctly. Some then went on to make a slip when using these values to find the required expectation but were at least able to pick up the final method mark by showing their working clearly. Some attempted to find $\mathrm{E}(X)$ then add $1$ and square root this.

---
topic: "Hypothesis Testing"
subtopic: "Goodness of fit"
---
### **Question 4**

Robin shoots 8 arrows at a target each day for 100 days.

The number of times he hits the target each day is summarised in the table below.

$$
\begin{array}{|l|c|c|c|c|c|c|c|c|c|}
\hline
\text{Number of hits} & 0 & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 \\
\hline
\text{Frequency} & 1 & 10 & 30 & 34 & 17 & 4 & 2 & 0 & 2 \\
\hline
\end{array}
$$

Misha believes that these data can be modelled by a binomial distribution.

**(a)** State, in context, two assumptions that are implied by the use of this model. **(2)**

**(b)** Find an estimate for the proportion of arrows Robin shoots that hit the target. **(2)**

Misha calculates expected frequencies, to 2 decimal places, as follows.

$$
\begin{array}{|l|c|c|c|c|c|c|c|c|c|}
\hline
\text{Number of hits} & 0 & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 \\
\hline
\text{Expected frequency} & 2.81 & 12.67 & r & 28.05 & 19.73 & s & 2.50 & 0.40 & 0.03 \\
\hline
\end{array}
$$

**(c)** Find the value of $r$ and the value of $s$. **(3)**

Misha correctly used a suitable test to assess her belief.

**(d)** **(i)** Explain why she used a test with 3 degrees of freedom. **(2)**
**(ii)** Complete the test using a $5\%$ level of significance.
You should clearly state your hypotheses, test statistic, critical value and conclusion. **(6)**

**(Total 15 marks)**

### **Mark Scheme 4**

#### **Part (a)**
**Step 1: State assumptions**
- **[B1, B1]** Any two valid contextual assumptions, e.g.:
  - Each arrow shot is independent (of other arrows).
  - The probability of hitting the target is constant for each arrow shot.
  - There is a fixed number of arrows shot per day ($n=8$).

#### **Part (b)**
**Step 2: Estimate the proportion**
Total hits = $0(1) + 1(10) + 2(30) + 3(34) + 4(17) + 5(4) + 6(2) + 7(0) + 8(2) = 0 + 10 + 60 + 102 + 68 + 20 + 12 + 0 + 16 = 288$.
Total arrows shot = $100 \times 8 = 800$.
Proportion $\hat{p} = \frac{288}{800} = 0.36$.
- **[M1]** Finds total number of hits divided by total number of arrows (or equivalent mean calculation divided by 8).
- **[A1]** $0.36$ (or $\frac{9}{25}$).

#### **Part (c)**
**Step 3: Calculate $r$ and $s$**
$p = 0.36$, $q = 0.64$, $n = 8$.
$r = 100 \times \binom{8}{2} (0.36)^2 (0.64)^6 = 100 \times 28 \times 0.1296 \times 0.068719... = 24.93$ (or $24.94$)
$s = 100 \times \binom{8}{5} (0.36)^5 (0.64)^3 = 100 \times 56 \times 0.060466... \times 0.26214... = 8.87$ (or $8.86$)
- **[M1]** Correct binomial probability formula or expression for $r$ or $s$.
- **[A1]** $r = 24.93$ (accept $24.94$)
- **[A1]** $s = 8.87$ (accept $8.86$)

#### **Part (d)**
**Step 4: Explain degrees of freedom**
$n = 8$ classes after pooling (or combining cells where $E_i < 5$).
Number of parameters estimated = $1$ ($p$).
Degrees of freedom = $\text{Number of cells} - 1 - \text{parameters estimated} = 8 - 1 - 1 = 3$.
- **[B1]** States pooling is required because some expected frequencies are $< 5$ (specifically cells $0, 1, 6, 7, 8$ combined or similar pooling strategy).
- **[B1]** Explains calculation: $n_{\text{cells}} - 1 - 1$ (or correctly accounts for categories and 1 estimated parameter).

**Step 5: Perform the hypothesis test**
Hypotheses:
$H_0$: A binomial distribution is a suitable model.
$H_1$: A binomial distribution is not a suitable model.

Pooling table:
$$
\begin{array}{|l|c|c|c|c|c|}
\hline
\text{Cells (Hits)} & 0, 1 & 2 & 3 & 4 & 5, 6, 7, 8 \\
\hline
\text{Observed ($O_i$)} & 11 & 30 & 34 & 17 & 8 \\
\hline
\text{Expected ($E_i$)} & 15.48 & 24.93 & 28.05 & 19.73 & 11.81 \\
\hline
\frac{(O_i - E_i)^2}{E_i} & 1.285 & 0.743 & 1.266 & 0.380 & 1.230 \\
\hline
\end{array}
$$
Test statistic $\chi^2 = \sum \frac{(O_i - E_i)^2}{E_i} = 4.90$ (or $4.9$)
Critical value: $\chi^2_3(0.05) = 7.815$.
Conclusion: Since $4.90 < 7.815$ (test statistic is not in the critical region), do not reject $H_0$. There is insufficient evidence to reject the binomial model.
- **[B1]** States correct hypotheses.
- **[M1]** Correct pooling of categories with expected frequencies $< 5$.
- **[M1]** Correct calculation of $\frac{(O_i - E_i)^2}{E_i}$ for their pooled table.
- **[A1]** Correct test statistic $\chi^2 = 4.90$ (awrt).
- **[B1]** Correct critical value $7.815$.
- **[A1]** Correct contextual conclusion (do not reject $H_0$, binomial model is suitable).

### **Examiner Report 4**

This question tested all aspects of goodness of fits tests and many were able to make some headway with parts (a) and (d) providing discrimination at the top end. In part (a) most students were able to score 1 out of 2 marks. Those who scored only 1 mark were able to explain that the probability of the arrow hitting the target was constant or by giving two comments not in context mentioning the key words.

The concept of independence was not well understood and there were few comments that explained this concept and quite a significant number of explanations talked about the probabilities being independent and not referring to the ‘hits,’ ‘shots’, ‘arrow being shot.’

A significant number of scripts could not use the mathematical language, such as ‘probability’ and ‘independence’ in their answers and often gave an explanation which implied these and so could pick up 1 mark.

Part (b) was a successful part of the question with most scoring full marks, though we allowed the mark to be picked up in part (c) for those only calculating the mean in this part but who went on to use $0.36$ in the subsequent work. The reason for losing a mark here was a mistake made in calculating the expectation or by dividing by $100$ and not $800$.

Again in part (c) many good solution were seen with most students picking up full marks. Those that did not earn full marks, made errors like:
* choosing a Poisson model and then using it throughout the question
* correctly choosing a binomial model (so earning the first two marks) and then going to use a Poisson Approximation to work out the expected values
* giving values that were outside either of the ranges
* the sum of their expectations did not add up to $100$ or awrt $100.01$

Part (d)(i) saw a mixed response with most students picking up 1 of the two marks. Errors made were:
* not being specific enough and saying that it was the expected values being pooled as the $E_i < 5$ or needed to be such that all $E_i > 5$
* referring only to frequencies, rather than expected frequencies
* referring to 2 constraints but not explaining what they were
* combining more cells than necessary to arrive at 3 degrees of freedom

Many took the clue from the degrees of freedom given and were able to make a good start at part (d)(ii). This was a good discriminator with more able students able to pick up most marks. Less highly performing students were still able to earn the mark for finding the correct critical value. The main reasons for losing marks in the question were:
* stating hypotheses incorrectly either ‘having them the wrong way round’ or referring to $p = 0.36$
* incorrectly pooling either ‘0 and 1’ or ‘5, 6, 7 and 8’ or not showing these clearly enough
* not pooling ‘0 and 1’
* mistakes in $\frac{(O_i - E_i)^2}{E_i}$ or $\frac{O_i^2}{E_i}$ values, having them the wrong way round or not giving enough accuracy
* writing down an incorrect value of the test statistic with no supporting working
