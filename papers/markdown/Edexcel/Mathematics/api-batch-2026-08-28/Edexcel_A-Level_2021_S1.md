---
topic: "Hypothesis Testing"
subtopic: "Hypothesis testing for the parameter p of a geometric distribution"
---
### **Question 1**

**(a)** State one disadvantage of using quota sampling compared with simple random sampling. **(1)**

In a university $8\%$ of students are members of the university dance club.

A random sample of $36$ students is taken from the university.

The random variable $X$ represents the number of these students who are members of the dance club.

**(b)** Using a suitable model for $X$, find

**(i)** $P(X = 4)$

**(ii)** $P(X \geqslant 7)$ **(3)**

Only $40\%$ of the university dance club members can dance the tango.

**(c)** Find the probability that a student is a member of the university dance club and can dance the tango. **(1)**

A random sample of $50$ students is taken from the university.

**(d)** Find the probability that fewer than $3$ of these students are members of the university dance club and can dance the tango. **(2)**

**(Total for Question 1 is 7 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: State disadvantage**
- **[B1]** Allows for bias / not random / interviewer may choose who to ask / convenience sampling issues.

#### **Part (b)**

**Step 2: Identify model**
- $X \sim \text{B}(36, 0.08)$

**Step 3: Calculate $P(X = 4)$**
$$P(X = 4) = 0.174$$
- **[M1]** Identifies correct binomial distribution or expression for $P(X = 4)$.
- **[A1]** Correct value $0.174$ (or $0.1738\dots$).

**Step 4: Calculate $P(X \geqslant 7)$**
$$P(X \geqslant 7) = 1 - P(X \leqslant 6) = 0.0135$$
- **[A1]** Correct value $0.0135$ (or $0.01348\dots$).

#### **Part (c)**

**Step 5: Calculate combined probability**
$$0.08 \times 0.40 = 0.032$$
- **[B1]** $0.032$ (or $\frac{8}{250}$ or $3.2\%$).

#### **Part (d)**

**Step 6: Identify new distribution**
- Let $Y$ be the number of students who are club members and can tango.
- $Y \sim \text{B}(50, 0.032)$

**Step 7: Calculate $P(Y < 3)$**
$$P(Y < 3) = P(Y \leqslant 2) = 0.892$$
- **[M1]** Identifies $Y \sim \text{B}(50, 0.032)$ and attempts $P(Y < 3)$ or $P(Y \leqslant 2)$.
- **[A1]** Correct value $0.892$ (or $0.8918\dots$).

### **Examiner Report 1**

In part (a) many scored the mark by referring to the possibility of bias being introduced by the interviewer or the lack of randomness when using quota sampling. The most common answers that did not score the mark referred to cost or time failing to appreciate that quota sampling is generally quicker and therefore cheaper to implement than simple random sampling. Some thought that quota sampling required a sampling frame which suggested they were confused about the different types of sampling. Part (b) was generally answered very well with most stating the distribution, and scoring the method mark, and then evaluating part (i) correctly on their calculator. Part (ii) met with less success as many could not deal with the inequality or were unsure how to use their calculator correctly. Some seemed to confuse significant figures with decimal places: the front of the exam paper instructs then to use $3$ significant figures but some only gave an answer of $0.022$ here and lost this mark. Part (c) was usually answered correctly and many went on to use the correct binomial distribution in part (d) though some found interpreting “fewer than $3$” a problem and a common incorrect answer was $0.924$ (from $P(X \leqslant 3)$). Overall though this proved a good start to the paper and over $40\%$ scored $6$ or $7$ marks here.

---
topic: "Correlation"
subtopic: "Pearson product-moment correlation coefficient"
---
### **Question 2**

Marc took a random sample of $16$ students from a school and for each student recorded
- the number of letters, $x$, in their last name
- the number of letters, $y$, in their first name

His results are shown in the scatter diagram on the next page.

**(a)** Describe the correlation between $x$ and $y$. **(1)**

Marc suggests that parents with long last names tend to give their children shorter first names.

**(b)** Using the scatter diagram comment on Marc’s suggestion, giving a reason for your answer. **(1)**

The results from Marc’s random sample of $16$ observations are given in the table below.

$$
\begin{array}{|l|c|c|c|c|c|c|c|c|c|c|c|c|c|c|c|c|}
\hline
x & 3 & 6 & 8 & 7 & 5 & 3 & 11 & 3 & 4 & 5 & 4 & 9 & 7 & 10 & 6 & 6 \\
\hline
y & 7 & 7 & 4 & 4 & 6 & 8 & 5 & 5 & 8 & 4 & 7 & 4 & 5 & 5 & 6 & 3 \\
\hline
\end{array}
$$

**(c)** Use your calculator to find the product moment correlation coefficient between $x$ and $y$ for these data. **(1)**

**(d)** Test whether or not there is evidence of a negative correlation between the number of letters in the last name and the number of letters in the first name.

You should
- state your hypotheses clearly
- use a $5\%$ level of significance **(3)**

**Figure 1** _(A scatter diagram showing 16 plotted points relating x (number of letters in last name) to y (number of letters in first name), with x ranging from 0 to 12 and y from 0 to 10)._

```tikz
\begin{tikzpicture}[scale=0.8]
  \draw[->] (0,0) -- (12,0) node[right] {$x$};
  \draw[->] (0,0) -- (0,10) node[above] {$y$};
  \foreach \x in {0,2,4,6,8,10,12}
    \draw (\x,0.1) -- (\x,-0.1) node[below] {\small \x};
  \foreach \y in {0,2,4,6,8,10}
    \draw (0.1,\y) -- (-0.1,\y) node[left] {\small \y};
  \foreach \x/\y in {3/7, 6/7, 8/4, 7/4, 5/6, 3/8, 11/5, 3/5, 4/8, 5/4, 4/7, 9/4, 7/5, 10/5, 6/6, 6/3}
    \node at (\x,\y) {$\times$};
\end{tikzpicture}
```

**(Total for Question 2 is 6 marks)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Describe correlation**
- **[B1]** Negative correlation (allow weak/moderate negative).

#### **Part (b)**

**Step 2: Comment on suggestion**
- **[B1]** Agrees with Marc's suggestion and gives a reason referring to the negative correlation/downward trend shown in the scatter diagram.

#### **Part (c)**

**Step 3: Find PMCC**
$$r = -0.448$$
- **[B1]** $-0.448$ (accept $-0.4475\dots$).

#### **Part (d)**

**Step 4: State hypotheses**
- $\text{H}_0: \rho = 0, \quad \text{H}_1: \rho < 0$
- **[B1]** Both hypotheses correct using $\rho$.

**Step 5: Find critical value**
- Critical value for $n = 16$ at $5\%$ significance (one-tailed) is $-0.4259$ (or $-0.426$).
- **[M1]** Identifies correct critical value for their test.

**Step 6: Conclusion**
- Since $-0.448 < -0.4259$, reject $\text{H}_0$. There is evidence of a negative correlation.
- **[A1ft]** Correct comparison and contextual conclusion.

### **Examiner Report 2**

Most scored the mark in part (a) by identifying that the correlation was negative. When we ask students to “describe” we are simply requiring a non-contextual description. We will ask them to “interpret” when we require a contextual description. In this case we allowed students to describe the correlation in terms of the variables so answers such as “as $x$ increases $y$ decreases” were accepted. Some thought the correlation was strong and others weak but at this stage all we wanted was the negative description. Part (b) caused some problems with some stating that the scatter diagram showed negative correlation but failing to say whether or not this was compatible with Marc’s suggestion. Some students felt that there was no correlation shown by the scatter diagram and did not reconsider this even after correctly answering part (d). 

Most answered part (c) correctly though a number “lost” the minus sign between their calculator and writing down the answer on the page. Usually there were sufficient figures given for us to award the mark when the minus sign was included. In part (d) most attempted the hypotheses and the majority used $\rho$. Some didn’t have “$= 0$” for their null hypothesis with alternative values or inequalities being used and of course some used $r$ or simply wrote the hypotheses in words. We allowed $(\pm)$ for the critical value provided the actual value was compatible with their alternative hypothesis and many achieved this mark but few scored the final mark as the conclusion was not related to the context of the question.

---
topic: "Exponentials and Logarithms"
subtopic: "Exponential modelling"
---
### **Question 3**

Stav is studying the large data set for September 2015.

He codes the variable Daily Mean Pressure, $x$, using the formula $y = x - 1010$.

The data for all $30$ days from Hurn are summarised by
$$\sum y = 214, \quad \sum y^2 = 5912$$

**(a)** State the units of the variable $x$. **(1)**

**(b)** Find the mean Daily Mean Pressure for these $30$ days. **(2)**

**(c)** Find the standard deviation of Daily Mean Pressure for these $30$ days. **(3)**

Stav knows that, in the UK, winds circulate
- in a clockwise direction around a region of high pressure
- in an anticlockwise direction around a region of low pressure

The table gives the Daily Mean Pressure for $3$ locations from the large data set on $26/09/2015$.

$$
\begin{array}{|l|c|c|c|}
\hline
\text{Location} & \text{Heathrow} & \text{Hurn} & \text{Leuchars} \\
\hline
\text{Daily Mean Pressure} & 1029 & 1028 & 1028 \\
\hline
\text{Cardinal Wind Direction} & & & \\
\hline
\end{array}
$$

The Cardinal Wind Directions for these $3$ locations on $26/09/2015$ were, in random order,
$$\text{W}, \quad \text{NE}, \quad \text{E}$$

You may assume that these $3$ locations were under a single region of pressure.

**(d)** Using your knowledge of the large data set, place each of these Cardinal Wind Directions in the correct location in the table. Give a reason for your answer. **(2)**

**(Total for Question 3 is 8 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: State units**
- **[B1]** hPa (hectopascals) or mbar (millibars). (Accept Pascals).

#### **Part (b)**

**Step 2: Calculate mean of $y$ and convert back**
$$\bar{y} = \frac{214}{30} = 7.1333\dots$$
$$\bar{x} = \bar{y} + 1010 = 7.1333 + 1010 = 1017.1333\dots \approx 1017\text{ hPa}$$
- **[M1]** Calculates $\bar{y}$ and adds $1010$.
- **[A1]** Correct answer $1017$ (or $1017.1$).

#### **Part (c)**

**Step 3: Calculate standard deviation**
$$\sigma_y = \sqrt{\frac{5912}{30} - \left(\frac{214}{30}\right)^2} = \sqrt{197.0667 - 50.8444} = \sqrt{146.222} = 12.092$$
$$\sigma_x = \sigma_y = 12.1$$
- **[M1]** Uses correct formula for variance or standard deviation of $y$.
- **[A1]** Correct standard deviation for $y$ (approx $12.09$).
- **[A1]** Correct standard deviation for $x$ ($12.1$).

#### **Part (d)**

**Step 4: Assign wind directions and reason**
- Heathrow: $\text{NE}$, Hurn: $\text{E}$, Leuchars: $\text{W}$.
- Pressure is high ($\approx 1029 \text{ hPa}$), so winds circulate clockwise.
- **[M1]** Correctly identifies high pressure region and clockwise circulation.
- **[A1]** All three wind directions correctly placed in the table.

### **Examiner Report 3**

Although this question involved familiarisation with the large data set nearly $70\%$ scored $3$ or more marks here. Many students knew the units used for Daily Mean Pressure (or wrote “Pascals” which was allowed). The coding caused problems for many in part (b) finding $\bar{y}$ was easy enough but then adding the $1010$ seemed to elude a great number of the candidates. Another frequently seen error was to add $1010$ to $\sum y$ leading to the common wrong answer of $40.8$. Part (c) was the most successful part with many correct answers seen; sometimes the effect of coding was clearly stated but often, I suspect, it was simply ignored and the correct answer obtained anyway. Occasionally students felt they should add the $1010$ on after reaching the correct value of $12.1$ and this just lost the first method mark for this part. The final part proved challenging. There was evidence that students knew the relative locations of the $3$ sites and often they deduced that it was high pressure and therefore the winds circulated clockwise. The major problem though was that students did not seem to appreciate that Cardinal Wind Direction in the large data set gives the direction from which the wind comes. This led to an incorrect allocation of directions in the table, some students were clearly confused by this and felt that the circulation must be anticlockwise and then a correct allocation of wind directions could, of course, be deduced but this lost the first mark. A small percentage of students though did achieve full marks for this question.

### **Question 4**

A large college produces three magazines.

One magazine is about green issues, one is about equality and one is about sports.

A student at the college is selected at random and the events $G$, $E$ and $S$ are defined as follows
- $G$ is the event that the student reads the magazine about green issues
- $E$ is the event that the student reads the magazine about equality
- $S$ is the event that the student reads the magazine about sports

The Venn diagram, where $p$, $q$, $r$ and $t$ are probabilities, gives the probability for each subset.

**Figure 1** _(A Venn diagram showing three intersecting circles G, E, and S inside a rectangle representing the sample space, with region probabilities labelled 0.08, 0.05, 0.09, 0.36, p, q, r, and t)._

```tikz
\begin{tikzpicture}[scale=0.8]
  \draw (0,0) rectangle (7,5);
  \draw (2,2.5) circle (1.5cm);
  \draw (4.5,2.5) circle (1.5cm);
  \draw (3.25,1.5) circle (1.5cm);
  \node at (1.3,3) {$0.08$};
  \node at (5.2,3) {$0.09$};
  \node at (3.25,2.7) {$0.05$};
  \node at (3.25,1.2) {$0.36$};
  \node at (2.2,1.8) {$q$};
  \node at (4.3,1.8) {$r$};
  \node at (3.25,2.1) {$p$};
  \node at (6,4) {$t$};
  \node at (0.8,4.5) {$G$};
  \node at (5.7,4.5) {$E$};
  \node at (3.25,0.3) {$S$};
\end{tikzpicture}
```

**(a)** Find the proportion of students in the college who read exactly one of these magazines. **(1)**

No students read all three magazines and $P(G) = 0.25$.

**(b)** Find
**(i)** the value of $p$
**(ii)** the value of $q$ **(3)**

Given that $P(S \mid E) = \frac{5}{12}$

**(c)** find
**(i)** the value of $r$
**(ii)** the value of $t$ **(4)**

**(d)** Determine whether or not the events $(S \cap E')$ and $G$ are independent. Show your working clearly. **(3)**

**(Total for Question 4 is 11 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Calculate proportion reading exactly one magazine**
$$0.08 + 0.09 + 0.36 = 0.53$$
- **[B1]** $0.53$ (or equivalent fraction).

#### **Part (b)**

**Step 2: Find $p$ and $q$**
- Since no students read all three magazines, $p = 0$.
- $P(G) = 0.08 + 0.05 + q = 0.25 \Rightarrow 0.13 + q = 0.25 \Rightarrow q = 0.12$.
- **[B1]** $p = 0$.
- **[M1]** Uses $P(G) = 0.25$ to set up an equation for $q$.
- **[A1]** $q = 0.12$.

#### **Part (c)**

**Step 3: Find $r$ and $t$**
- $P(S \mid E) = \frac{P(S \cap E)}{P(E)} = \frac{p + r}{0.05 + 0.09 + p + r} = \frac{0 + r}{0.14 + r} = \frac{5}{12}$
- $12r = 5(0.14 + r) \Rightarrow 7r = 0.7 \Rightarrow r = 0.1$
- **[M1]** Uses conditional probability formula with $P(S \cap E)$ and $P(E)$.
- **[A1]** $r = 0.1$.
- Total probability $= 1$:
  $0.08 + 0.05 + 0.09 + 0.12 + 0 + 0.1 + 0.36 + t = 1 \Rightarrow 0.9 + t = 1 \Rightarrow t = 0.1$
- **[A1]** $t = 0.1$.

#### **Part (d)**

**Step 4: Test for independence**
- $S \cap E'$ is the part of $S$ not in $E$, which has probability $0.36 + q = 0.36 + 0.12 = 0.48$.
- $P(G) = 0.25$.
- $P((S \cap E') \cap G) = q = 0.12$.
- Check if $P((S \cap E') \cap G) = P(S \cap E') \times P(G)$:
  $0.48 \times 0.25 = 0.12$.
- Since $0.12 = 0.12$, the events are independent.
- **[M1]** Finds $P(S \cap E')$ and $P((S \cap E') \cap G)$.
- **[M1]** Compares $P(A \cap B)$ with $P(A) \times P(B)$.
- **[A1]** Concludes they are independent with valid supporting working.

### **Examiner Report 4**

This proved to be a good source of marks for most candidates with only $2\%$ failing to score and over $18\%$ scoring full marks. Most students navigated parts (a) and (b) successfully but a few missed the information that “No students read all three magazines” and wasted a lot of time trying to find two equations in $p$ and $q$. The conditional probability in part (c) proved to be a challenge for some; there were those who effectively used $P(E \mid S)$ and others were miscopying values from their Venn diagram. Those who failed to make any progress in (i) were often able to pick up a mark for a correct follow through when finding the value of $t$. Part (d) was the least successful part of the question often due to poor use of the notation. There were a curiously large number of students who confused events with the probability of events; for example we saw a number of cases of students writing $S \cap E' = 0.48$ instead of $P(S \cap E') = 0.48$. Another source of errors was confusing the symbols $\cap$ and $\cup$ in their expressions. There was a demand to show clear working here and this meant that we needed to see probabilities correctly labelled and an appropriate test clearly shown and a number of attempts lacked these features but there were plenty of good solutions to this part too.

### **Question 5**

The heights of females from a country are normally distributed with
- a mean of $166.5\text{ cm}$
- a standard deviation of $6.1\text{ cm}$

Given that $1\%$ of females from this country are shorter than $k\text{ cm}$,

**(a)** find the value of $k$. **(2)**

**(b)** Find the proportion of females from this country with heights between $150\text{ cm}$ and $175\text{ cm}$. **(1)**

A female, from this country, is chosen at random from those with heights between $150\text{ cm}$ and $175\text{ cm}$.

**(c)** Find the probability that her height is more than $160\text{ cm}$. **(4)**

The heights of females from a different country are normally distributed with a standard deviation of $7.4\text{ cm}$.

Mia believes that the mean height of females from this country is less than $166.5\text{ cm}$.

Mia takes a random sample of $50$ females from this country and finds the mean of her sample is $164.6\text{ cm}$.

**(d)** Carry out a suitable test to assess Mia’s belief.

You should
- state your hypotheses clearly
- use a $5\%$ level of significance **(4)**

**(Total for Question 5 is 11 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Find $k$**
$$P(H < k) = 0.01 \Rightarrow \frac{k - 166.5}{6.1} = -2.3263$$
$$k = 166.5 - 2.3263 \times 6.1 = 152.3$$
- **[M1]** Uses inverse normal distribution with probability $0.01$, mean $166.5$ and sd $6.1$.
- **[A1]** Correct value $152.3$ (or $152.31\dots$).

#### **Part (b)**

**Step 2: Find proportion between $150$ and $175$**
$$P(150 < H < 175) = 0.825$$
- **[B1]** Correct value $0.825$ (or $0.8252\dots$).

#### **Part (c)**

**Step 3: Calculate conditional probability**
$$P(H > 160 \mid 150 < H < 175) = \frac{P(160 < H < 175)}{P(150 < H < 175)}$$
$$P(160 < H < 175) = 0.7093$$
$$\text{Probability} = \frac{0.7093}{0.8252} = 0.860$$
- **[M1]** Identifies conditional probability structure.
- **[M1]** Correct numerator calculation $P(160 < H < 175)$.
- **[A1]** Correct denominator from part (b).
- **[A1]** Correct final answer $0.860$ (or $0.8595\dots$).

#### **Part (d)**

**Step 4: State hypotheses**
- $\text{H}_0: \mu = 166.5$
- $\text{H}_1: \mu < 166.5$
- **[B1]** Both hypotheses correct.

**Step 5: Test statistic / Critical value / $p$-value**
- Under $\text{H}_0$, $\bar{X} \sim \text{N}\left(166.5, \frac{7.4^2}{50}\right)$
- $P(\bar{X} \leqslant 164.6) = 0.0353$
- Critical value $\bar{x} = 166.5 - 1.6449 \times \frac{7.4}{\sqrt{50}} = 164.78$
- **[M1]** Identifies correct distribution for the sample mean or standardises with $\sqrt{50}$.
- **[A1]** Correct probability $0.0353$ (or critical value $164.78$).

**Step 6: Conclusion**
- Since $0.0353 < 0.05$ (or $164.6 < 164.78$), reject $\text{H}_0$.
- There is evidence to support Mia’s belief that the mean height is less than $166.5\text{ cm}$.
- **[A1]** Correct conclusion in context.

### **Examiner Report 5**

Most students used their calculators in part (a) with reasonable success but a frequent error was to use $0.1$ instead of $0.01$ and without any working being shown there was no opportunity to award the method mark. Part (b) was a straightforward probability calculation designed to be completed on a calculator as the specification requires and so it was disappointing that nearly $25\%$ of the candidates scored no marks at all on this question. Identifying the conditional probability in part (c) defeated many students and some of those who seemed to be attempting to use a conditional probability were unable to use the correct notation to write their expression. Those who did start with a correct conditional probability and moved onto a ratio of probabilities often had a correct denominator but a common error was to have $P(F > 160)$ as the numerator rather than $P(160 < F < 175)$. Part (d) was a familiar hypothesis test and many students scored something here. The hypotheses were usually stated in terms of $\mu$ and most of the time $166.5$ rather than $164.6$ was used. Selecting the correct model caused a number of problems: some used $164.6$ as the mean and others used $7.4$ (or occasionally $6.1$) as the standard deviation, simply stating the correct model will score the method mark here but a number of students didn’t show us the model they were using and we had to award this mark by implication from correct working. Most students successfully used the probability approach (as we would recommend) with a few attempting a critical region or using a $z$ value and comparing with $1.6449$ from the tables. The final mark required a correct interpretation of their calculation in context and some students simply stopped after stating that the result was significant and failed to score this final mark.

---
topic: "Discrete Random Variables"
subtopic: "Expected value of a discrete random variable"
---
### **Question 6**

The discrete random variable $X$ has the following probability distribution

$$
\begin{array}{|l|c|c|c|}
\hline
x & a & b & c \\
\hline
P(X = x) & \log_{36} a & \log_{36} b & \log_{36} c \\
\hline
\end{array}
$$

where
- $a$, $b$ and $c$ are distinct integers ($a < b < c$)
- all the probabilities are greater than zero

**(a)** Find
**(i)** the value of $a$
**(ii)** the value of $b$
**(iii)** the value of $c$

Show your working clearly. **(5)**

The independent random variables $X_1$ and $X_2$ each have the same distribution as $X$.

**(b)** Find $P(X_1 = X_2)$. **(2)**

**(Total for Question 6 is 7 marks)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Set sum of probabilities to 1**
$$\log_{36} a + \log_{36} b + \log_{36} c = 1$$
$$\log_{36}(abc) = 1 \Rightarrow abc = 36^1 = 36$$
- **[M1]** States that the sum of probabilities equals $1$ and applies log laws to get $abc = 36$.

**Step 2: Use constraints to find integer values**
- Probabilities must be $> 0$, so $\log_{36} a > 0 \Rightarrow a > 1$.
- Since $a, b, c$ are distinct integers and multiply to $36$, testing factors:
  $a = 2, b = 3, c = 6 \quad (\text{since } 2 \times 3 \times 6 = 36)$.
- **[M1]** Recognises $a, b, c$ must be distinct integers greater than $1$ whose product is $36$.
- **[A3]** $a = 2, b = 3, c = 6$ (award marks progressively: 1 for each correct value).

#### **Part (b)**

**Step 3: Calculate $P(X_1 = X_2)$**
$$P(X_1 = X_2) = P(X=2)^2 + P(X=3)^2 + P(X=6)^2$$
$$P(X=2) = \log_{36} 2 = \frac{\log_2 2}{\log_2 36} = \frac{1}{2 + 2\log_2 3} = \frac{1}{2}\text{? Let's use exact values:}$$
$$\log_{36} 2 = x \implies 36^x = 2 \implies (6^2)^x = 2 \implies 6^{2x} = 2$$
Alternatively:
- $P(X=2) = \log_{36} 2 = \frac{1}{2}\log_{6} 2$
- $P(X=3) = \log_{36} 3 = \frac{1}{2}\log_{6} 3$
- $P(X=6) = \log_{36} 6 = \frac{1}{2}$
- $P(X_1 = X_2) = \left(\frac{1}{2}\log_{6} 2\right)^2 + \left(\frac{1}{2}\log_{6} 3\right)^2 + \left(\frac{1}{2}\right)^2$
- $= \frac{1}{4} [(\log_6 2)^2 + (\log_6 3)^2 + 1] = 0.364$ (or exact equivalent).
- **[M1]** Sets up $P(X_1 = X_2) = \sum P(X=x)^2$.
- **[A1]** Correct exact or decimal value ($0.364$).

### **Examiner Report 6**

There is a requirement in the specification for questions occasionally to draw together knowledge from different areas of $9\text{MA}0$ and this was a question aiming to do that.

Many students realised that to start the problem they could use the fact that the sum of the probabilities must equal $1$ but fewer than half of the students could move beyond that mark. Those who realised they had a sum of logarithms were often able to arrive at the equation $abc = 36$ but few could devise a strategy to deduce the values of $a$, $b$ and $c$. Some stated that all of the values had to be greater than $1$ though it was not always clear that they deduced this from the given bullet points in the question. Around a quarter of the students found the correct set of values with varying degrees of explanation on the way. Part (b) was often left blank though the first mark was available without values for $a$, $b$ and $c$ provided brackets were used correctly for the expression. Nearly $10\%$ managed to score full marks for the question.
