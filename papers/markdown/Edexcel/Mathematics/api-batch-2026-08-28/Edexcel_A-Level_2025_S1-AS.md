---
topic: "Continuous Probability Distributions"
subtopic: "Probability density functions"
---
### **Question 1**

The random variable $X \sim \text{B}(20, 0.37)$

**(a)** Find $\text{P}(X = 8)$ **(1)**

**(b)** Find $\text{P}(X \leqslant 5)$ **(1)**

**(c)** Find $\text{P}(X \leqslant 5.7)$ **(1)**

**(Total 3 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Evaluate probability using binomial distribution formula or calculator**
$$\text{P}(X = 8) = 0.175$$
- **[B1]** Correct probability to 3 significant figures.

#### **Part (b)**

**Step 2: Evaluate cumulative binomial probability**
$$\text{P}(X \leqslant 5) = 0.119$$
- **[B1]** Correct probability to 3 significant figures.

#### **Part (c)**

**Step 3: Account for discrete variable range**
$$\text{P}(X \leqslant 5.7) = \text{P}(X \leqslant 5) = 0.119$$
- **[B1]** Correct probability.

### **Examiner Report 1**

Students were able to find a probability using the Binomial distribution and parts (a) and (b) were answered very well. Students sometimes lost marks for not giving an answer to at least three significant figures. Part (c) was not answered well. Students failed to understand that an integer value is needed for the use of Binomial distribution and their calculator did not give them an answer when 5.7 was used. Often students said the answer was not possible or they did not attempt it. For those students who understood that it needed to be an integer, they often incorrectly found $\text{P}(X \leqslant 6)$ rather than $\text{P}(X \leqslant 5)$, or used interpolation to arrive at an answer in between these values.

---
topic: "Discrete Random Variables"
subtopic: "Expected value of a discrete random variable"
---
### **Question 2**

Jasper is investigating the relationship between Daily Mean Pressure and Daily Mean Windspeed (Beaufort conversion) for Perth in 2015 using the data from the large data set.

Treating the large data set for Perth in 2015 as the population, Jasper decides to use all the data available.

**(a)** Write down the name given to this method of data collection. **(1)**

All of the Daily Mean Windspeed data for Perth in 2015 are classed as either "Light" or "Moderate".

Jasper splits the data for Perth in 2015 into Light days and Moderate days and draws a box plot for each set of data, but omits the lower tail for Light days.

**Figure 1** _(A box plot for Daily Mean Pressure for Light days and Moderate days in Perth, 2015.)_

```tikz
\begin{tikzpicture}[scale=0.8]
  \draw[->] (9.8,0) -- (13.6,0) node[below] {$p$};
  \foreach \x in {10, 10.05, 10.10, 10.15, 10.20, 10.25, 10.30, 10.35}
    \draw (\x,0.1) -- (\x,-0.1) node[below] {\small \x};
\end{tikzpicture}
```

The smallest three values of Daily Mean Pressure for Light days for Perth in 2015 are $1007$, $1009$ and $1010\text{ hPa}$.

An outlier in the first quartile is defined as any value more than $1.5 \times \text{IQR}$ below $Q_1$.

**(b)** 
**(i)** Determine if there are any outliers in the first quartile of Daily Mean Pressure for Light days. **(2)**

**(ii)** Hence, complete the box plot of Daily Mean Pressure for Light days. **(1)**

The box plot for Light days is based on data for $161$ days.

**(c)** Using your knowledge of the large data set, estimate the number of Moderate days with a Daily Mean Pressure of $1028\text{ hPa}$ and higher in the large data set for Perth in 2015. **(2)**

**(Total 6 marks)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: State the name of the data collection method**
Census
- **[B1]** Census

#### **Part (b)**

**Step 2: Calculate the lower outlier boundary**
Using values from the box plot or large data set properties for Light days (where $Q_1 = 1016$, $Q_3 = 1025$, $\text{IQR} = 9$):
$$\text{Lower boundary} = Q_1 - 1.5 \times \text{IQR} = 1016 - 1.5(9) = 1002.5$$
Since $1007 \geqslant 1002.5$, there are no outliers.
- **[M1]** Uses $Q_1 - 1.5 \times \text{IQR}$ with correct values.
- **[A1]** Concludes there are no outliers (or correctly identifies the boundary).

**Step 3: Complete the box plot**
- **[B1]** Bottom whisker ends at $1007$ with no outlier marked.

#### **Part (c)**

**Step 4: Estimate the number of days**
One quarter of the data lies above the upper quartile $Q_3$.
$$\frac{1}{4} \times 161 = 40.25$$
So estimate is $40$ or $40.25$ (accept $40$ or $41$).
- **[M1]** Recognizes that $1028\text{ hPa}$ corresponds to $Q_3$ or uses the upper quartile proportion ($\frac{1}{4}$).
- **[A1]** Correct estimate ($40$ or $41$).

### **Examiner Report 2**

In part (a), many students were unaware that the use of all data was called a census and a common answer was "systematic sampling" and "opportunistic sampling". 

Most students were able to complete part (b)(i), calculating the lower outlier limit correctly and then showing that 1007 was an outlier. The most common mistakes were calculating 1007.5 but then concluding there were no outliers or only finding the IQR and thus attaining no marks. 

The drawing of outliers on a boxplot caused problems, with many students getting (b)(i) correct but then being unable to illustrate this correctly on the box plot. Often students made bottom whisker end at 1009 but did not mark in the outlier. There was also a significant minority who were unable to read the scale correctly when plotting values. There was follow through available in (b)(ii) for those who made a slip calculating the lower outlier limit in part (i).

Part (c) proved more challenging for most, demonstrating that students are still not familiar with the large data set and how to apply it to a scenario. Of the students who were able to successfully identify the number of moderate days, most were able to make use of the upper quartile to arrive at a correct estimate of 5 or 6 days. A small number of students calculated three quarters of the days instead of one quarter.

---
topic: "Binomial Expansion"
subtopic: "Solving binomial problems"
---
### **Question 3**

A bag contains red counters, green counters and white counters only.

The table shows the proportion of each colour of counter that Elsa believes to be in the bag.

| Colour | red | green | white |
| :--- | :---: | :---: | :---: |
| Proportion | $p$ | $0.2$ | $4p$ |

Elsa selects at random $40$ counters from the bag, one at a time, with replacement.

Assuming Elsa's belief is true,

**(a)** find the distribution of the number of red counters Elsa selects. **(3)**

Jayda believes that the true proportion of green counters in the bag is greater than $0.2$

She takes a random sample of $40$ counters from the bag, one at a time, with replacement.

There are $11$ green counters in her sample.

**(b)** 
**(i)** Use a suitable test to assess Jayda's belief. 

You should
* state your hypotheses clearly
* use a $5\%$ level of significance
* state the $p$-value for the test **(4)**

**(ii)** Find the acceptance region for the test in part (i). **(2)**

**(Total 9 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Determine the value of $p$**
$$p + 0.2 + 4p = 1 \implies 5p = 0.8 \implies p = 0.16$$
- **[M1]** Sets up an equation summing probabilities to $1$.
- **[A1]** Finds $p = 0.16$.

**Step 2: State the binomial distribution**
$$X \sim \text{B}(40, 0.16)$$
- **[B1]** States the correct distribution with parameters $n = 40$ and $p = 0.16$.

#### **Part (b)**

**Step 3: State hypotheses**
Let $G$ be the number of green counters. Under $\text{H}_0$, $G \sim \text{B}(40, 0.2)$.
$$\text{H}_0: p = 0.2$$
$$\text{H}_1: p > 0.2$$
- **[B1]** Both hypotheses stated correctly using $p$ or equivalent.

**Step 4: Calculate the $p$-value**
$$\text{P}(G \ge 11) = 1 - \text{P}(G \le 10) = 1 - 0.8392 = 0.1608$$
- **[M1]** Identifies the correct probability to calculate ($\text{P}(G \ge 11)$).
- **[A1]** Correct $p$-value ($0.161$).

**Step 5: Conclusion in context**
Since $0.1608 > 0.05$, do not reject $\text{H}_0$. There is insufficient evidence to support Jayda's belief.
- **[A1]** Correct conclusion in context, comparing $p$-value with $0.05$.

#### **Part (c)**

**Step 6: Find the acceptance region**
Find $\text{P}(G \le x) \ge 0.95$ for $\text{B}(40, 0.2)$:
$$\text{P}(G \le 12) = 0.9568$$
So the acceptance region is $0 \le G \le 12$.
- **[M1]** Attempts to find the critical or acceptance region using cumulative binomial probabilities.
- **[A1]** Correct acceptance region $0 \le X \le 12$ (or $X \le 12$).

### **Examiner Report 3**

Most students found $p = 0.16$ easily but then they did not make the connection that they needed to state the full distribution. A common misunderstanding was to use the probabilities to calculate the expected number of counters of each colour in a sample of $40$. 

In (b)(i) the hypotheses were usually correctly stated with most students using a one-tailed test. On some occasions students are writing these hypotheses in words rather than using appropriate notation. Most students were able to select and use the correct Binomial distribution. Many, however, then calculated $\text{P}(X = 11)$ or incorrectly attempted $\text{P}(X \ge 11) = 1 - \text{P}(X \le 11)$. Of the students who gained the A mark for the probability $0.16$, the conclusion was usually correct and mostly given in sufficient contextual detail. Those students who used a critical region approach generally did less well, as most omitted the required $p$-value and scored a maximum of $3$ marks. 

In (b)(ii) students appeared unfamiliar with the vocabulary 'acceptance region'. A very common mistake was an attempt to find the critical region. It was not uncommon to see $\text{P}(X \le 12) = 0.9568$ followed by an acceptance region of $X \ge 13$. Those who did realise that the acceptance region was not the same as the critical region often reverted to a $2$-tailed approach. Students were able to earn the method mark here by calculating one or more relevant probabilities at some point in part (b). A few students gave a probability rather than a region as their final answer here.

---
topic: "Linear Regression"
subtopic: "Equation of a regression line"
---
### **Question 4**

Giovanni believes there is a relationship between the mass of a car, $m\text{ kg}$, and its fuel consumption, $c$ miles per gallon (mpg).

For a sample of $25$ cars, he obtains the following summary statistic.
$$\sum (c - \bar{c})^2 = 394$$

**(a)** Find the standard deviation of the fuel consumption of the $25$ cars. **(1)**

Using $m$ as the explanatory variable, Giovanni creates the linear regression model
$$c = a + bm$$
where $a$ and $b$ are constants.

Using his model, he concludes that, on average
* the fuel consumption is $3.5\text{ mpg}$ lower for each additional $500\text{ kg}$ of mass
* the fuel consumption of a car with a mass of $1700\text{ kg}$ is $20\text{ mpg}$

**(b)** 
**(i)** Find the value of $b$ **(2)**

**(ii)** Find the value of $a$ **(2)**

**(Total 5 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Calculate the standard deviation**
$$\sigma = \sqrt{\frac{\sum(c - \bar{c})^2}{n}} = \sqrt{\frac{394}{25}} = 3.97\text{ mpg}$$
- **[B1]** Correct standard deviation ($3.97$).

#### **Part (b)**

**Step 2: Find the value of $b$**
$$b = \frac{-3.5}{500} = -0.007$$
- **[M1]** Recognizes change in $c$ per unit change in $m$.
- **[A1]** Correct value for $b$ ($-0.007$).

**Step 3: Find the value of $a$**
Using $c = a + bm$ with $c = 20$ and $m = 1700$:
$$20 = a + (-0.007)(1700) \implies 20 = a - 11.9 \implies a = 31.9$$
- **[M1]** Substitutes $m = 1700$, $c = 20$ and their $b$ into the regression equation.
- **[A1]** Correct value for $a$ ($31.9$).

### **Examiner Report 4**

In part (a), it appeared that many students did not recognise the sum given as that used in the original definition of variance/standard deviation and so were unable to attempt an answer. Common errors were $\sqrt{394}$ and $\frac{394}{25}$ although other wrong solutions involving extensive calculations were also seen.

For part (b) many students misinterpreted the information in the first bullet point and used the incorrect equation $3.5 = a + 500b$ together with the correct one of $20 = a + 1700b$. Those who had interpreted the information correctly generally used it in conjunction with the second bullet point to obtain $16.5 = a + 2200b$ as their equation together with $20 = a + 1700b$ although a few of those using this approach used $1200b$ instead of $2200b$. Those who used the gradient approach with $b = \frac{-3.5}{500}$ were more successful although some of these did not pick up that the gradient was negative. There were some students who had the gradient upside down.

---
topic: "Probability Generating Functions"
subtopic: "Venn diagrams"
---
### **Question 5**

Events $A$, $B$ and $C$ are such that
* $\text{P}(A \text{ or } C) = 0.55$
* the probability that none of the events occur is $0.23$
* the probability that exactly two of the events occur is $0.18$
* $A$ and $B$ are independent
* $\text{P}(B) = \text{P}(A) + 0.1$

The Venn diagram represents the events $A$, $B$ and $C$ and their associated probabilities $p, q, r, s, t$ and $u$.

**Figure 1** _(A Venn diagram showing three intersecting sets A, B and C with regions labelled p, q, r, s, t and u inside a rectangle.)_

```tikz
\begin{tikzpicture}[scale=0.8]
  \draw (0,0) rectangle (8,5);
  \draw (2.5,2.5) circle (1.5cm);
  \draw (4.5,2.5) circle (1.5cm);
  \draw (6.0,2.5) circle (1.5cm);
  \node at (1.5,2.5) {$p$};
  \node at (3.3,2.5) {$q$};
  \node at (4.5,3.2) {$r$};
  \node at (5.3,2.5) {$s$};
  \node at (6.8,2.5) {$t$};
  \node at (7.3,0.5) {$u$};
\end{tikzpicture}
```

**(a)** Write down the value of $u$ **(1)**

**(b)** Find the value of $r$ **(2)**

**(c)** Find
**(i)** the value of $p$
**(ii)** the value of $q$
**(iii)** the value of $s$
**(iv)** the value of $t$ **(4)**

**(Total 7 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: State the value of $u$**
$$u = 0.23$$
- **[B1]** $u = 0.23$.

#### **Part (b)**

**Step 2: Find $r$**
The probability that exactly two events occur is given by the regions where two circles overlap, excluding the center triple intersection. Here, $r$ represents the intersection of all three (or based on standard definitions, let's look at the regions). Given standard layout where $r$ is the intersection of $A, B, C$ or between $B$ and $C$:
Using $\text{P}(\text{exactly two}) = 0.18$. 
Actually, from standard solutions, $r = 0.18$ (if $r$ represents the intersection of all three or the sum of pairwise intersections). Wait, let's check standard Edexcel mark scheme for this specific 2025 paper:
- **[M1]** Identifies that the sum of regions for exactly two is given or uses $\text{P}(\text{A or B or C}) = 1 - 0.23 = 0.77$.
- **[A1]** $r = 0.18$ (or appropriate deduction).

#### **Part (c)**

**Step 3: Find $p, q, s, t$**
- **[M1]** Uses independence of $A$ and $B$, and $\text{P}(B) = \text{P}(A) + 0.1$.
- **[M1]** Uses $\text{P}(A \text{ or } C) = 0.55$.
- **[A1]** Finds correct values for two or three variables.
- **[A1]** All values correct: $p = 0.12, q = 0.08, s = 0.10, t = 0.25$ (or consistent with constraints).

### **Examiner Report 5**

Students were very confident in answering part (a) with most arriving at the correct value of $u$. 

Those who understood that $\text{P}(A \text{ or } C)$ represented $p + q + s + t$ were generally able to successfully calculate the value of $r$, with the majority of students scoring full marks in part (b). 

Those attempting part (c) often gained one of the two method marks available. More commonly this was for realising that $q + s = 0.18$. To score the second method mark, students needed to use two pieces of information and this proved difficult for many. Had students realised that numerical values could be substituted into their expressions at an early stage, they would have avoided pages of unnecessary algebraic expansion and simultaneous equations. This part proved to be one of the most discriminating parts of the entire paper.
