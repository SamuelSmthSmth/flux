---
topic: "Linear Regression"
subtopic: "Equation of a regression line"
---
### **Question 1**

Fred and Nadine are investigating whether there is a linear relationship between Daily Mean Pressure, $p\text{ hPa}$, and Daily Mean Air Temperature, $t\text{ }^\circ\text{C}$, in Beijing using the 2015 data from the large data set.

Fred randomly selects one month from the data set and draws the scatter diagram in Figure 1 using the data from that month.

The scale has been left off the horizontal axis.

**Figure 1** _(A scatter diagram showing Daily Mean Air Temperature, $t$, against Daily Mean Pressure, $p$, for Beijing in a randomly selected month from 2015.)_

Nadine chooses to use all of the data for Beijing from 2015 and draws the scatter diagram in Figure 2.

She uses the same scales as Fred.

**Figure 2** _(A scatter diagram showing Daily Mean Air Temperature, $t$, against Daily Mean Pressure, $p$, for Beijing using all data from 2015.)_

**(a)** Describe the correlation shown in Figure 1. **(1)**

**(b)** Explain, in context, what Nadine can infer about the relationship between $p$ and $t$ using the information shown in Figure 2. **(1)**

**(c)** Using your knowledge of the large data set, state a value of $p$ for which interpolation can be used with Figure 2 to predict a value of $t$. **(1)**

**(d)** Using your knowledge of the large data set, explain why it is not meaningful to look for a linear relationship between Daily Mean Wind Speed (Beaufort Conversion) and Daily Mean Air Temperature in Beijing in 2015. **(1)**

**(Total 4 marks)**

### **Mark Scheme 1**

#### **Part (a)**
- **[B1]** No correlation / little or no correlation / zero correlation.

#### **Part (b)**
- **[B1]** Negative correlation (as pressure increases, temperature decreases, or vice versa) in context of temperature and pressure.

#### **Part (c)**
- **[B1]** Any value in the range of the pressure data in the large data set for Beijing in 2015 (e.g. between $990\text{ hPa}$ and $1040\text{ hPa}$, or any sensible value visible within the graph's range).

#### **Part (d)**
- **[B1]** Wind speed (Beaufort conversion) is qualitative data (or ordinal data), so a linear relationship/regression is not appropriate.

### **Examiner Report 1**

This question was the second most accessible question on the paper thanks to parts (a) and (b), but due to parts (c) and (d) requiring familiarity with the large data set, only a small minority of students scored full marks here.

Most students successfully answered part (a) with a correct interpretation of a lack of correlation shown in Figure 1. 

Part (b) was also answered well with students answering in the context of temperature and pressure. There were some students who did not earn the mark as they only wrote negative correlation and others that described a negative correlation as one quantity decreasing as the other decreased. 

It was notable that many students are still unfamiliar with the large data set and the general standard in parts (c) and (d) was poor. Most students guessed an answer to part (c) but very few were able to give an answer in the correct range. In part (d), the students often described the location of Beijing as a factor or repeated an answer given in previous examination series rather than comment on the Beaufort Conversion being qualitative data. It was clear the students who had studied the large data set as their answers had a concise explanation.

---
topic: "Probability Generating Functions"
subtopic: "Venn diagrams"
---
### **Question 2**

In an after-school club, students can choose to take part in Art, Music, both or neither.

There are $45$ students that attend the after-school club. Of these
- $25$ students take part in Art
- $12$ students take part in both Art and Music
- the number of students that take part in Music is $x$

**(a)** Find the range of possible values of $x$. **(2)**

One of the $45$ students is selected at random.

Event $A$ is the event that the student selected takes part in Art.

Event $M$ is the event that the student selected takes part in Music.

**(b)** Determine whether or not it is possible for the events $A$ and $M$ to be independent. **(4)**

**(Total 6 marks)**

### **Mark Scheme 2**

#### **Part (a)**
- **[M1]** Considers the constraints: number taking only Music $\ge 0 \Rightarrow x \ge 12$, and total taking Music cannot exceed the total number of students who take Music or total club size. More precisely, $12 \le x \le 32$ (since Art alone is $25 - 12 = 13$, so remaining students outside Art is $45 - 13 = 32$, all of whom could potentially be in Music).
- **[A1]** $12 \le x \le 32$ (or equivalent correct range).

#### **Part (b)**
- **[M1]** Uses the condition for independence: $\mathrm{P}(A \cap M) = \mathrm{P}(A) \times \mathrm{P}(M)$.
- **[M1]** Substitutes probabilities: $\frac{12}{45} = \frac{25}{45} \times \frac{x}{45}$.
- **[M1]** Solves for $x$: $x = \frac{12 \times 45}{25} = 21.6$.
- **[A1]** Explains that since $x$ must be an integer, $x = 21.6$ is impossible, therefore the events $A$ and $M$ cannot be independent.

### **Examiner Report 2**

This was the second most demanding question on the paper.

In this question there was some confusion between the number of students who study Art and the number of students who study Art but not Music. This often led to incorrect Venn diagrams and subsequent errors in both parts of the question.

In part (a), students often found that at most 20 students studied Music but not Art, but then went no further. Very few were able to find both required end-points.

The rule for independence is given to students on the formulae booklet, but many quoted it in terms of $A$ and $B$ rather than the events $A$ and $M$ as required in part (b) of this question. Students making little progress often tended to use numbers rather than probabilities throughout. Only a small minority arrived at the correct result of $x = 21.6$, but some then concluded that $A$ and $M$ were independent as $21.6$ was in the range, ignoring the fact that $x$ had to be an integer in this context.

---
topic: "Hypothesis Testing"
subtopic: "Hypothesis testing for the parameter p of a binomial distribution"
---
### **Question 3**

Past information shows that $25\%$ of adults in a large population have a particular allergy.

Rylan believes that the proportion that has the allergy differs from $25\%$.

He takes a random sample of $50$ adults from the population.

Rylan carries out a test of the null hypothesis $\mathrm{H}_0: p = 0.25$ using a $5\%$ level of significance.

**(a)** Write down the alternative hypothesis for Rylan's test. **(1)**

**(b)** Find the critical region for this test.

You should state the probability associated with each tail, which should be as close to $2.5\%$ as possible. **(4)**

**(c)** State the actual probability of incorrectly rejecting $\mathrm{H}_0$ for this test. **(1)**

Rylan finds that $10$ of the adults in his sample have the allergy.

**(d)** State the conclusion of Rylan's hypothesis test. **(1)**

**(Total 7 marks)**

### **Mark Scheme 3**

#### **Part (a)**
- **[B1]** $\mathrm{H}_1: p \neq 0.25$

#### **Part (b)**
- **[M1]** Identifies binomial distribution $X \sim \mathrm{B}(50, 0.25)$.
- **[M1]** Finds lower tail probability: $\mathrm{P}(X \le 6) = 0.0321$ or $\mathrm{P}(X \le 5) = 0.0123$. Hence lower critical region is $X \le 5$.
- **[M1]** Finds upper tail probability: $\mathrm{P}(X \ge 18) = 0.0452$ or $\mathrm{P}(X \ge 19) = 0.0211$. Hence upper critical region is $X \ge 19$.
- **[A1]** Correct critical region: $X \le 5$ or $X \ge 19$.

#### **Part (c)**
- **[B1]** $0.0123 + 0.0211 = 0.0334$ (or $3.34\%$).

#### **Part (d)**
- **[B1ft]** Since $10$ is not in the critical region ($6 \le 10 \le 18$), do not reject $\mathrm{H}_0$ (insufficient evidence to suggest the proportion with the allergy differs from $25\%$).

### **Examiner Report 3**

There were some good attempts seen at this question with most students able to display some knowledge of hypothesis testing.

Part (a) was very well answered with most students scoring this mark for a correct alternative hypothesis using the correct notation. A few students did not appreciate that this was a two-tailed test and gave a one-tailed alternative hypothesis.

In part (b), when attempted, most students acknowledged that it was a Binomial distribution and many were able to find the probability associated with at least one of the tails (usually the lower one). However, some did not take notice in the question that the probability in each tail was required to be as close to $2.5\%$ as possible, and hence found an incorrect upper critical region. Marks were sometimes lost for failing to state the probability associated with each tail (particularly the upper tail) and for incorrectly identifying the upper critical region, usually opting for $X \ge 20$. There are a significant number of students writing the critical region as a probability. Many students with an incorrect critical region were still able to earn the mark in part (c) using the correct probabilities for their tails.

Part (d) was answered well by many students, but, as usual, some did not interpret the conclusion in context. Some ignored the hypothesis test and critical regions altogether and simply compared $10$ as a percentage of $50$ with $25\%$ to suggest a change in probability.

---
topic: "Discrete Random Variables"
subtopic: "Solving problems involving random variables"
---
### **Question 4**

Julia selects $3$ letters at random, one at a time without replacement, from the word

$$\text{V A R I A N C E}$$

The discrete random variable $X$ represents the number of times she selects a letter $\text{A}$.

**(a)** Find the complete probability distribution of $X$. **(5)**

Yuki selects $10$ letters at random, one at a time with replacement, from the word

$$\text{D E V I A T I O N}$$

**(b)** Find the probability that he selects the letter $\text{E}$ at least $4$ times. **(3)**

**(Total 8 marks)**

### **Mark Scheme 4**

#### **Part (a)**
- **[B1]** Identifies that the word $\text{V A R I A N C E}$ has $8$ letters, containing two $\text{A}$s and six non-$\text{A}$s.
- **[M1]** Calculates $\mathrm{P}(X = 0) = \frac{\binom{2}{0}\binom{6}{3}}{\binom{8}{3}} = \frac{20}{56} = \frac{5}{14}$.
- **[M1]** Calculates $\mathrm{P}(X = 1) = \frac{\binom{2}{1}\binom{6}{2}}{\binom{8}{3}} = \frac{30}{56} = \frac{15}{28}$.
- **[M1]** Calculates $\mathrm{P}(X = 2) = \frac{\binom{2}{2}\binom{6}{1}}{\binom{8}{3}} = \frac{6}{56} = \frac{3}{28}$.
- **[A1]** Complete probability distribution stated clearly in a table or list: $\mathrm{P}(X=0) = \frac{5}{14}$, $\mathrm{P}(X=1) = \frac{15}{28}$, $\mathrm{P}(X=2) = \frac{3}{28}$, with $X$ taking values $0, 1, 2$.

#### **Part (b)**
- **[M1]** Identifies binomial distribution for Yuki: $Y \sim \mathrm{B}\left(10, \frac{2}{9}\right)$ (since $\text{D E V I A T I O N}$ has $9$ letters, with two $\text{E}$s).
- **[M1]** Attempts to find $\mathrm{P}(Y \ge 4) = 1 - \mathrm{P}(Y \le 3)$.
- **[A1]** Correct probability evaluated to $3\text{sf}$: $0.127$ (or $0.1265\dots$).

### **Examiner Report 4**

The final question on the paper, as expected, proved to be the most demanding as many students were unable to make any progress at all here.

Part (a) was the most discriminating with many students leaving this part blank. Students often thought that $X$ followed a binomial distribution. Some tried to work out individual probabilities for each letter rather than focusing on the number of $\text{A}$s that could be selected. A large number of tree diagrams were seen but some could not get from the diagram to a probability distribution as they were unable to give a probability for each of the different values of $X$. Students who correctly worked out the probability of obtaining $1$ or $2$ $\text{A}$s sometimes did not recognise that the answer needed multiplying by $3$.

Part (b) saw a higher standard. Students were able to work out that a binomial distribution needed to be used and many were able to give the correct value of $n$ and $p$. One common mistake involved choosing $9$ trials rather than $10$ as there are $9$ letters in $\text{DEVIATION}$.
