---
topic: "Discrete Random Variables"
subtopic: "Discrete Random Variables"
---
### **Question 1**

Bag $A$ contains $5$ red, $4$ yellow and $3$ green beads.

Bag $B$ only contains red and yellow beads.

A bead is selected at random from bag $A$ and a second bead is selected at random from bag $B$

Given that the probability that both beads selected are yellow is $\frac{3}{16}$

**(a) (i)** find the probability of selecting a yellow bead from bag $B$ **(2)**

**(ii)** Hence complete the tree diagram below by finding the probability on each branch.

**Figure 1** _(A tree diagram showing selection from Bag A then Bag B, with branches for red, yellow, and green from Bag A and red and yellow from Bag B.)_

```tikz
\begin{tikzpicture}
  \node at (0,0) {};
\end{tikzpicture}
```

**(2)**

**(b)** Find the exact probability that at least one of the two beads selected is yellow. **(3)**

The event $X$ is that at least one of the beads selected is yellow.

The event $W$ is that a green bead is selected.

**(c)** Find the exact value of $P(W|X)$ **(2)**

**(Total 9 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Set up equation for both yellow** $\frac{4}{12} \times p = \frac{3}{16}$ where $p$ is the probability of selecting a yellow bead from bag $B$.
- **[M1]** Sets up a correct equation or product involving the probabilities.

**Step 2: Solve for $p$** $p = \frac{9}{16}$ and completes tree diagram.
- **[A1]** Correct value for $p$ and fully correct tree diagram branches.

#### **Part (b)**

**Step 3: Calculate probability of at least one yellow** $P(\text{at least one yellow}) = 1 - P(\text{no yellow}) = 1 - \left(\frac{8}{12} \times \frac{7}{16}\right)$ or summing relevant branches: $\frac{5}{12} \times \frac{7}{16} + \frac{5}{12} \times \frac{9}{16} + \frac{4}{12} \times 1 + \frac{3}{12} \times \frac{7}{16} + \frac{3}{12} \times \frac{9}{16}$
- **[M1]** Identifies the correct combination of paths or uses $1 - P(\text{none})$.
- **[M1]** Correct evaluation of the probability expression.
- **[A1]** Correct exact fraction $\frac{13}{16}$ (or equivalent).

#### **Part (c)**

**Step 4: Calculate conditional probability $P(W|X)$** $P(W|X) = \frac{P(W \cap X)}{P(X)} = \frac{\frac{3}{12} \times \frac{9}{16}}{\frac{13}{16}}$
- **[M1]** Uses conditional probability formula with correct numerator and denominator.
- **[A1]** Correct exact fraction $\frac{27}{156}$ or simplified to $\frac{9}{52}$.

### **Examiner Report 1**

Most learners appeared comfortable working with tree diagrams and could find the probability of selecting a yellow bead from bag $B$ correctly. A small minority wrote down a correct equation such as $\frac{4}{12} \times p = \frac{3}{16}$ but did not solve it correctly, but the vast majority obtained $p = \frac{9}{16}$ and were able to go on and complete the tree diagram correctly. A few responses had different pairs of probabilities on the branches for bag $B$.

Part (b) was usually answered well, but the most common error was to overlook the “at least” condition and omit the case for two yellows. The most popular approach was to identify the $4$ cases from the tree diagram, but a few used $1 - P(\bar{Y}\bar{Y}) = 1 - \frac{2}{3} \times \frac{7}{16}$ and some used $1 - P(RR) - P(GR)$. Few responses did not present their answers in (b) and (c) as exact fractions as required.

In part (c) many could write down $\frac{P(W \cap X)}{P(X)}$ but appreciating that $W \cap X$ meant that the case $GY$ was required defeated a large number. It was fairly common to see the answer to part (b) or $\frac{9}{16}$ appearing in both the numerator and denominator and leading to an incorrect answer of $\frac{1}{4}$.

---
topic: "Statistics and Mechanics"
subtopic: "Summary statistics"
---
### **Question 2**

Runners in an athletics club can train with either coach $A$ or coach $B$ for the $400\text{ m}$ race.

Coach $A$ trains $120$ runners for the $400\text{ m}$ and records the best time, $x$ seconds, for each runner.

The results are summarised by the following statistics
$$\sum x = 6612 \quad \sum x^2 = 364902$$

**(a)** Calculate the mean of the best times for the runners trained by coach $A$ **(1)**

**(b)** Calculate the standard deviation of the best times for the runners trained by coach $A$ **(2)**

The mean and standard deviation for the best times of the $100$ runners trained for the $400\text{ m}$ by coach $B$ are $55.1\text{ seconds}$ and $3.6\text{ seconds}$ respectively.

A $400\text{ m}$ race consists of equal numbers of the fastest runners trained by coach $A$ and by coach $B$

**(c)** State, giving a reason, which coach is more likely to have trained the winner. **(2)**

**(Total 5 marks)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Calculate the mean** $\bar{x} = \frac{6612}{120} = 55.1$
- **[B1]** Correct mean (55.1).

#### **Part (b)**

**Step 2: Calculate the standard deviation** $\sigma = \sqrt{\frac{364902}{120} - \left(\frac{6612}{120}\right)^2} = \sqrt{3040.85 - 3036.01} = \sqrt{4.84} = 2.2$
- **[M1]** Correct formula for variance or standard deviation using summary statistics.
- **[A1]** Correct standard deviation (2.2).

#### **Part (c)**

**Step 3: State and justify the coach** Coach $B$ because the larger standard deviation means there is a greater spread, increasing the likelihood of an extreme value (a very fast time).
- **[M1]** Identifies coach $B$ and links standard deviation to extreme/fastest times.
- **[A1]** Fully correct reasoning.

### **Examiner Report 2**

The majority of learners answered parts (a) and (b) very well. A very small minority used $\frac{364902}{6612}$ in part (a) and a sizeable number found the variance not the standard deviation in part (b).

Part (c) proved to be more challenging with many choosing coach $A$ on the basis that the lower standard deviation meant that those runners would be more “consistent”. A good number of responses chose coach $B$ citing the larger standard deviation as a reason, but few were able to explain that the larger standard deviation increases the likelihood of an extreme value such as the fastest time. A small minority of responses did not consider standard deviation and instead incorrectly focused on the different sample sizes.

---
topic: "Poisson Distributions"
subtopic: "Hypothesis Testing"
---
### **Question 3**

A manufacturer makes components for the car industry.

On average $1.5\%$ of the components made are defective.

**(a) Using a suitable model, find the probability that in a random sample of $36$ components there are**

**(i) exactly $2$ defective components,**

**(ii) more than $3$ defective components.**
**(3)**

Once every six months, the manufacturer tests whether the proportion of defective components has changed using hypotheses $H_0 : p = 0.015$ and $H_1 : p \neq 0.015$

A random sample of $260$ components is taken and $8$ are found to be defective.

**(b) Using a $5\%$ level of significance, complete the test.** **(3)**

**(Total 6 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Define model** Let $X$ be the number of defective components, $X \sim \text{B}(36, 0.015)$
- **[B1]** Implied or stated binomial distribution.

**Step 2: Calculate $P(X = 2)$** $P(X = 2) = \binom{36}{2}(0.015)^2(0.985)^{34} = 0.0847$
- **[A1]** Correct probability to 3 significant figures.

**Step 3: Calculate $P(X > 3)$** $P(X > 3) = 1 - P(X \leqslant 3) = 1 - 0.9980 = 0.00196$ (or $0.0020$)
- **[A1]** Correct probability to 3 significant figures.

#### **Part (b)**

**Step 4: Set up test** Let $Y$ be the number of defective components in the sample, $Y \sim \text{B}(260, 0.015)$
- **[M1]** Identifies correct binomial distribution for the test.

**Step 5: Calculate probability for observed value** $P(Y \geqslant 8) = 1 - P(Y \leqslant 7) = 1 - 0.9754 = 0.0246$
- **[M1]** Calculates $P(Y \geqslant 8)$ or compares with critical value / significance level ($\frac{0.05}{2} = 0.025$).

**Step 6: Conclusion** Since $0.0246 < 0.025$ (or $8$ is in the critical region), there is sufficient evidence to reject $H_0$. There is evidence that the proportion of defective components has changed.
- **[A1]** Correct conclusion in context.

### **Examiner Report 3**

Part (a) was usually answered well. Some explicitly stated the correct model but others achieved this mark by giving one of the correct probabilities though accuracy marks were often not gained as a number of responses truncated in (i) to give $0.0847$ and others simply gave $0.002$ in (ii) rather than to the $3$ significant figures expected. In part (ii) the most commonly seen incorrect answer was $0.0167$ caused by thinking that the phrase “more than 3” included 3 or using $1 - P(D \leqslant 2)$ as the complement for $P(D > 3)$.

In part (b) most responses had the correct binomial model or inferred it by stating a suitable probability. A common mistake though was to use $P(X = 8)$ rather than $P(X \geqslant 8)$ which did not gain either of the remaining marks. Those with the correct probability sometimes gave a comparison with $0.05$ rather than $0.025$ and did not gain the final mark and others did not give a conclusion in context. Although a critical region was not required here (we will only ask for this if it can be found using the tables provided) some did use this approach. Many were successful, but a few did not give both tails of the critical region and others did not state the critical region properly for example by just stating $P(X \geqslant 9) = 0.0177...$ and not writing the critical region as $X \geqslant 9$ and $X = 0$. A small number attempted to use a normal approximation here.

---
topic: "Correlation"
subtopic: "Linear regression"
---
### **Question 4**

Kay is studying the variables Daily Total Sunshine ($x$) and Daily Total Rainfall ($y$) from the large data set for Leeming in $2015$

Kay starts with $5\text{th}$ May and then selects every $10\text{th}$ day thereafter.

**(a) State the name of the sampling technique Kay uses.** **(1)**

Kay wants to find the regression line of $y$ on $x$ for these data.

**(b) Using your knowledge of the large data set, explain how Kay might need to clean these data before finding the equation of the regression line.** **(1)**

The equation of the regression line Kay finds is $y = 0.741 + 0.199x$

**(c) Using your knowledge of the large data set,**

**(i) state the units of the gradient of the regression line,**

**(ii) give an interpretation of the $y$-intercept of the regression line.**
**(2)**

Kay’s teacher claimed that the greater the amount of sunshine in a day the lower the amount of rain there should be.

**(d) State, giving a reason, whether the teacher’s claim is true for Kay’s data.** **(1)**

The teacher used all the data for these variables from the large data set for Leeming in $2015$, as a sample. 
The teacher calculated the product moment correlation coefficient for $x$ and $y$ to be $-0.160$

In a suitable test to determine whether there is evidence to support the teacher’s claim, the $p$-value was $0.015$

**(e) Using a $5\%$ level of significance, state the hypotheses and conclusion for this test.** **(2)**

**(f) For the test in part (e) describe**

**(i) the sample,**

**(ii) a possible population.**
**(2)**

**(Total 9 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Identify sampling technique** Systematic sampling.
- **[B1]** Systematic (sampling).

#### **Part (b)**

**Step 2: Explain data cleaning** Deal with 'tr' (trace) values by converting them to a small numerical value (such as $0$ or $0.05$).
- **[B1]** Mentions dealing with 'tr' or trace values.

#### **Part (c)**

**Step 3: State units of gradient** $\text{mm per hour}$ (or $\text{mm hr}^{-1}$).
- **[B1]** Correct units.

**Step 4: Interpret $y$-intercept** The predicted daily total rainfall when there is zero hours of sunshine is $0.741\text{ mm}$.
- **[B1]** Correct interpretation referencing zero sunshine and correct value/units.

#### **Part (d)**

**Step 5: Comment on teacher's claim** The teacher's claim is not true for Kay's data because the gradient is positive ($0.199$), meaning more sunshine is associated with more rain.
- **[B1]** States not true and gives a valid reason based on the positive gradient/coefficient.

#### **Part (e)**

**Step 6: State hypotheses and conclusion** 
$H_0 : \rho = 0, \quad H_1 : \rho < 0$
Since $p$-value ($0.015$) $< 0.05$, reject $H_0$. There is evidence to support the teacher's claim.
- **[B1]** Correct hypotheses ($H_0 : \rho = 0, H_1 : \rho < 0$).
- **[B1]** Correct conclusion in context based on the $p$-value.

#### **Part (f)**

**Step 7: Describe sample and population**
**(i)** The daily total sunshine and daily total rainfall for Leeming from May to October $2015$ (or all days in Leeming for $2015$).
**(ii)** All days at Leeming over a long period (or all days in all years for Leeming).
- **[B1]** Correct description of the sample.
- **[B1]** Correct description of a possible population.

### **Examiner Report 4**

On the whole this question proved quite challenging as it tested a number of topics: sampling, regression, correlation and hypothesis testing as well as using the large data set and having a number of parts requiring a written explanation. However, there was something for all learners and very few blank responses were seen and parts (e) and (f) provided an opportunity for differentiation.

Part (a) was answered well though some incorrect responses of “stratified” or “quota sampling” were seen. There were very few responses not using the correct terminology here. In part (b) most identified that “trace” or “tr” would need attention, but some did not link this to the rainfall variable. In part (c) (i) there were many correct answers and some who identified mm or hours but not in a correct combination: answers such as $\text{mm}^2$ or even $\text{hour mm}^{-1}$ were seen, whilst others appeared not to be that familiar with the large data set and used other incorrect units such as oktas, lumens or Hpa. Most responses gave a suitable contextual response to part (ii) but some simply said that $0.714$ was the minimum rainfall rather than the (average) rainfall when there was no sun. The majority of responses recognised the inconsistency between Kay’s teacher’s claim and Kay’s data and many cited “positive correlation” for Kay’s data as their reason. A few opted to substitute two different values into the equation of the line to demonstrate their point. A small minority believed the teacher’s claim to be true and they were perhaps relying on their knowledge of weather conditions rather than interpreting the data Kay had collected.

Part (e) was found to be much more challenging for learners. Many were able to state the hypotheses correctly although some had an alternative hypothesis of $\rho > 0$ and a few had a null hypothesis of $\rho = 0.015$ though few were using $r$ instead of $\rho$. Very few responses interpreted the $p$-value with many comparing it to $0.16$ or comparing $0.16$ with $0.05$ but some gave a correct conclusion in context. Good attempts to part (f) were rare and blank responses not uncommon. Many answers did not give full and precise definitions and others lacked clarity so that they could have been interpreted as either the sample or a population. For part (i) the information was given in the question but few were able to extract the relevant information: the variables (sun and rain) for May to October (or from the large data set) from $2015$. Part (ii) produced a slightly better response with successful comments such as “sun and rain from all of $2015$” or “all the variables in the large data set” or “from all across the UK” being seen. Common mistakes often involved describing a population for which the sample was not a subset such as using months from April to November or the year $2016$.

---
topic: "Continuous Probability Distributions"
subtopic: "Normal distribution"
---
### **Question 5**

The heights of men in a tennis club are normally distributed with a mean of $183\text{ cm}$ and a standard deviation of $4.9\text{ cm}$.

A man from the tennis club is selected at random.

**(a) Find the probability that the man’s height is**

**(i) more than $186\text{ cm}$,**

**(ii) between $175\text{ cm}$ and $185\text{ cm}$.**
**(2)**

The heights of women in the tennis club are normally distributed with a mean of $\mu\text{ cm}$ and a standard deviation of $\sigma\text{ cm}$. 

Given that $40\%$ of the women are shorter than $170\text{ cm}$ and $15\%$ are taller than $175\text{ cm}$,

**(b) find the value of $\mu$ and the value of $\sigma$**
Show your working clearly.
**(5)**

A man from the tennis club and a woman from the tennis club are selected at random.

**(c) Find the probability that both players have heights between $170\text{ cm}$ and $175\text{ cm}$.** **(3)**

**(Total 10 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Calculate $P(M > 186)$** $P(M > 186) = 0.2727$ (or $0.273$)
- **[B1]** Correct probability.

**Step 2: Calculate $P(175 < M < 185)$** $P(175 < M < 185) = 0.6558$ (or $0.656$)
- **[B1]** Correct probability.

#### **Part (b)**

**Step 3: Set up equations for women's heights** Let $W \sim \text{N}(\mu, \sigma^2)$
$P(W < 170) = 0.4 \Rightarrow \frac{170 - \mu}{\sigma} = -0.2533$
$P(W > 175) = 0.15 \Rightarrow P(W < 175) = 0.85 \Rightarrow \frac{175 - \mu}{\sigma} = 1.0364$
- **[M1]** Uses standardisation with correct percentage/probability points (z-values).
- **[A1]** One correct equation relating $\mu$ and $\sigma$.
- **[A1]** Second correct equation relating $\mu$ and $\sigma$.

**Step 4: Solve for $\mu$ and $\sigma$** $\mu = 171.0$, $\sigma = 3.9$
- **[M1]** Solves simultaneous equations for $\mu$ and $\sigma$.
- **[A1]** $\mu = 171.0, \sigma = 3.9$ (or correct to 3 sf).

#### **Part (c)**

**Step 5: Calculate joint probability** $P(170 < W < 175) = 0.85 - 0.40 = 0.45$
$P(\text{both between } 170 \text{ and } 175) = P(175 < M < 185) \times P(170 < W < 175)$
$= 0.6558 \times 0.45 = 0.295$
- **[M1]** Finds $P(170 < W < 175)$ (can use $1 - 0.4 - 0.15 = 0.45$).
- **[M1]** Multiplies independent probabilities for man and woman.
- **[A1]** Correct probability ($0.295$ or $0.296$).

### **Examiner Report 5**

This question was answered very well. Most knew how to use their calculators to answer part (a) though some didn’t appreciate the difference between discrete and continuous random variables and in part (i) calculated $P(M \geqslant 187)$ whilst others incorrectly applied a continuity correction.

In part (b) many correctly formed and solved their simultaneous equations, but some made sign errors in their $z$-values and a few did not standardise correctly for example using $0.4$ and $0.15$ as $z$-values. Those who sketched a diagram of the distribution usually avoided sign errors. Some did not use accurate enough $z$-values (the tables give values to $4$ decimal places) and this often meant they lost an accuracy mark for their value of sigma. Many relied on their calculator for solving the simultaneous equations which was fine if the equations were correct but without some written attempt to eliminate one variable, we were unable to give further credit if the equations were incorrect. Some responses accepted a negative standard deviation without checking to identify the error.

Part (c) was completed successfully by many learners though many used their calculated mean and standard deviation from part (b) to calculate $P(170 < F < 175)$ rather than using the information in the question in the calculation $1 - (0.4 + 0.15)$. A few responses added the two probabilities rather than multiplying here.

---
topic: "Discrete Random Variables"
subtopic: "Discrete Random Variables"
---
### **Question 6**

The discrete random variable $R$ takes even integer values from $2$ to $2n$ inclusive.

The probability distribution of $R$ is given by 
$$P(R = r) = \frac{r}{k} \quad r = 2, 4, 6, \dots, 2n$$

where $k$ is a constant.

**(a) Show that $k = n(n + 1)$** **(4)**

When $n = 20$

**(b) find the exact value of $P(16 \leqslant R < 26)$** **(2)**

When $n = 20$, a random value $g$ of $R$ is taken and the quadratic equation in $x$
$$x^2 + gx + 3g = 5$$

is formed.

**(c) Find the exact probability that the equation has no real roots.** **(5)**

**(Total 11 marks)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Sum of probabilities equals 1** $\sum_{r=2}^{2n} \frac{r}{k} = 1 \Rightarrow \frac{1}{k}(2 + 4 + 6 + \dots + 2n) = 1$
- **[M1]** Uses $\sum P(R = r) = 1$.

**Step 2: Use arithmetic series sum** Sum is an AP with $a = 2$, last term $l = 2n$, number of terms $n$.
$\frac{2 + 2n}{2} \times n = n(n + 1)$
- **[M1]** Identifies the series as an arithmetic progression and uses the sum formula correctly.
- **[A1]** Correct expression for the sum: $\frac{n}{2}(2 + 2n) = n(n+1)$.
- **[A1]** Completes the proof to show $k = n(n + 1)$.

#### **Part (b)**

**Step 3: Evaluate $k$ for $n = 20$** $k = 20(21) = 420$
- **[B1]** Identifies correct values and sums probabilities for $r \in \{16, 18, 20, 22, 24\}$: $\frac{16 + 18 + 20 + 22 + 24}{420} = \frac{100}{420} = \frac{5}{21}$
- **[A1]** Correct exact fraction $\frac{5}{21}$.

#### **Part (c)**

**Step 4: Use discriminant condition for no real roots** For no real roots, $\Delta < 0$.
$g^2 - 4(1)(3g - 5) < 0 \Rightarrow g^2 - 12g + 20 < 0$
- **[M1]** Writes down the discriminant and sets it $< 0$.

**Step 5: Solve inequality** $(g - 2)(g - 10) < 0 \Rightarrow 2 < g < 10$
- **[M1]** Solves the quadratic inequality to find the range for $g$.

**Step 6: Identify valid values of $g$** Since $g$ is an even integer (values of $R$), $g \in \{4, 6, 8\}$.
- **[A1]** Identifies the correct possible values of $g$.

**Step 7: Calculate probability** $P(g \in \{4, 6, 8\}) = \frac{4 + 6 + 8}{420} = \frac{18}{420} = \frac{3}{70}$
- **[M1]** Sums the probabilities for the valid values of $g$.
- **[A1]** Correct exact fraction $\frac{3}{70}$.

### **Examiner Report 6**

This question provided some challenge and discrimination for the end of the paper. Most learners attempted this and made some progress.

Part (a) was a “show that” question and learners need to remember therefore to show all steps in their working clearly and present a solution without incorrect working. Most were able to identify that they needed to use the fact that the sum of the probabilities equalled 1. A popular starting point was to write down $1 = \frac{2}{k} + \frac{4}{k} + \frac{6}{k} + \dots + \frac{2n}{k}$ and some were then able to recognise that an arithmetic series was involved and use a suitable formula to find the sum. Some learners didn’t use the correct number of terms with $2n$ or $4$ (from the 4 terms $2, 4, 6$ and $2n$) being common errors. Full and concisely presented solutions were rare.

Part (b) was generally answered well, though some were confused by the even number restriction and attempted $\frac{16 + 17 + 18 + \dots + 24 + 25}{420}$ and a few included $26$. Those who attempted $P(R \leqslant 24) - P(R \leqslant 14)$ were rarely successful, but many simply listed the $5$ cases required and were readily able to reach the correct answer.

The attempts seen in part (c) were encouraging with many realising that the discriminant of the quadratic equation was required and for “no real roots” this must be negative. Most of these learners were able to form the correct quadratic equation in $g$ and find the correct critical values, but the correct critical region eluded some with $g < 2$ and $g < 10$ being a common error. From the correct inequalities for $g$ it was a small step to identify that the values of $g$ required were $4$, $6$ and $8$ and the majority of learners who got this far were able to complete the solution and state the correct probability in the correct form.
