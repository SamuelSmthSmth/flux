---
topic: "Discrete Random Variables"
subtopic: "The binomial distribution"
---
### **Question 1**

George throws a ball at a target $15$ times.

Each time George throws the ball, the probability of the ball hitting the target is $0.48$

The random variable $X$ represents the number of times George hits the target in $15$ throws.

**(a)** Find

**(i)** $\text{P}(X = 3)$

**(ii)** $\text{P}(X \ge 5)$ **(3)**

George now throws the ball at the target $250$ times.

**(b)** Use a normal approximation to calculate the probability that he will hit the target more than $110$ times. **(3)**

**(Total for Question 1 is 6 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Identify the correct binomial model** $X \sim \text{B}(15, 0.48)$

- **[B1]** Identifies correct distribution (implied or stated).

**Step 2: Calculate $\text{P}(X = 3)$** $\text{P}(X = 3) = 0.0197$

- **[A1]** Correct answer for (i).

**Step 3: Calculate $\text{P}(X \ge 5)$** $\text{P}(X \ge 5) = 1 - \text{P}(X \le 4) = 1 - 0.05267\dots = 0.947$

- **[A1]** Correct answer for (ii).

#### **Part (b)**

**Step 4: Find the mean and variance** $\mu = 250 \times 0.48 = 120$, $\sigma^2 = 250 \times 0.48 \times 0.52 = 62.4$

- **[M1]** Correct mean and variance or standard deviation ($7.899\dots$).

**Step 5: Apply continuity correction** $\text{P}(X > 110) = \text{P}(X \ge 110.5)$

- **[M1]** Uses continuity correction $110.5$ (or $110$ or $111$ if justified, but $110.5$ standard).

**Step 6: Standardise and find probability** $Z = \frac{110.5 - 120}{\sqrt{62.4}} = -1.202\dots$

$\text{P}(Z > -1.202) = 0.885$

- **[A1]** Correct probability in range $0.883$ to $0.886$.

### **Examiner Report 1**

This was generally a good start to the paper for many students with almost all being able to score some of the marks on this question. 

In part (a) students were usually able to find at least one of the two required probabilities although occasionally they miscopied from their calculator with $0.197$ being written down rather than $0.0197$. The notation demonstrating use of a binomial distribution was varied. Some students wrote down answers without stating the distribution that was being used, in this instance this was condoned provided that a correct probability was seen, but students should be aware that method marks are often awarded for sight of the correct model. Where full marks were not awarded the most common reasons were, rounding answers to fewer than $3$ significant figures, not knowing whether to use Binomial PD or CD on their calculator, or for not knowing how to rewrite $\text{P}(X \ge 5)$ in a form that allowed use of the binomial CD function. 

Part (b) caused more problems for students. The question clearly asked the students to use a normal approximation and most found the correct mean and variance for the Normal distribution and went on to find a probability. There is some confusion about whether it is the variance or the standard deviation which is a parameter of the normal distribution and too many failed to summarise their working with a simple statement $\text{N}(120, 62.4)$. Almost all students correctly interpreted “more than $110$” as requiring $\text{P}(X > 110)$ but a minority of students remembered to use a continuity correction, required when approximating a discrete distribution with the normal distribution, and those that did attempt to use a continuity correction often used an incorrect one, most commonly $109.5$. Despite being directed to use a normal approximation by the question some students used the binomial distribution. This gave an answer very close to the one obtained from the correct distribution, so it was very important to write down the distribution used, the probability statement with its continuity correction and give the answer to a sufficient degree of accuracy before rounding.

### **Question 2**

A manufacturer uses a machine to make metal rods.

The length of a metal rod, $L\text{ cm}$, is normally distributed with
- a mean of $8\text{ cm}$
- a standard deviation of $x\text{ cm}$

Given that the proportion of metal rods less than $7.902\text{ cm}$ in length is $2.5\%$

**(a)** show that $x = 0.05$ to $2$ decimal places. **(2)**

**(b)** Calculate the proportion of metal rods that are between $7.94\text{ cm}$ and $8.09\text{ cm}$ in length. **(1)**

The cost of producing a single metal rod is $20\text{p}$

A metal rod
- where $L < 7.94$ is sold for scrap for $5\text{p}$
- where $7.94 \le L \le 8.09$ is sold for $50\text{p}$
- where $L > 8.09$ is shortened for an extra cost of $10\text{p}$ and then sold for $50\text{p}$

**(c)** Calculate the expected profit per $500$ of the metal rods.
Give your answer to the nearest pound. **(5)**

The same manufacturer makes metal hinges in large batches.

The hinges each have a probability of $0.015$ of having a fault.

A random sample of $200$ hinges is taken from each batch and the batch is accepted if fewer than $6$ hinges are faulty.

The manufacturer's aim is for $95\%$ of batches to be accepted.

**(d)** Explain whether the manufacturer is likely to achieve its aim. **(4)**

**(Total for Question 2 is 12 marks)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Set up equation using standardisation** $\text{P}(L < 7.902) = 0.025 \Rightarrow \frac{7.902 - 8}{x} = -1.96$ (or $-1.9599\dots$)

- **[M1]** Uses standardisation with correct probability level (e.g. $z = -1.96$ or better).

**Step 2: Solve for $x$** $x = \frac{0.098}{1.96} = 0.05$

- **[A1]** Fully correct proof leading to $x = 0.05$.

#### **Part (b)**

**Step 3: Calculate proportion** $\text{P}(7.94 < L < 8.09) = 0.880$ (to 3 sf)

- **[B1]** Correct probability.

#### **Part (c)**

**Step 4: Find probabilities for each category** 
$\text{P}(L < 7.94) = \text{P}\left(Z < \frac{7.94 - 8}{0.05}\right) = \text{P}(Z < -1.2) = 0.1151$
$\text{P}(L > 8.09) = \text{P}\left(Z > \frac{8.09 - 8}{0.05}\right) = \text{P}(Z > 1.8) = 0.0359$

- **[M1]** Finds probabilities for all three regions correctly.

**Step 5: Calculate expected revenue and cost per rod**
Revenue = $0.05(0.1151) + 0.50(0.880 + 0.0359) = 0.465855$
Cost = $0.20 + 0.10(0.0359) = 0.20359$

- **[M1]** Attempts to calculate expected income and costs per rod.

**Step 6: Calculate expected profit per rod and per 500 rods**
Expected profit per rod = $0.465855 - 0.20359 = 0.262265\text{ (£0.262)}$
Per $500$ rods = $500 \times 0.262265 = 131.13$

- **[M1]** Multiplies net profit per rod by $500$.

**Step 7: Round to nearest pound** £131

- **[A1]** £131.

#### **Part (d)**

**Step 8: Set up binomial distribution** $Y \sim \text{B}(200, 0.015)$

- **[B1]** Correct binomial distribution stated or implied.

**Step 9: Calculate acceptance probability** $\text{P}(Y < 6) = \text{P}(Y \le 5) = 0.988$ (or $0.9881$)

- **[M1]** Calculates $\text{P}(Y \le 5)$ using calculator.

**Step 10: Compare with aim and conclude** Probability is $98.8\%$, which is greater than $95\%$, so the manufacturer is likely to achieve their aim.

- **[A1]** Correct comparison and valid conclusion.

### **Examiner Report 2**

Students had mixed success with part (a) of this question. Most students who recognised that they needed to use standardisation and found a z-value of $\pm 1.96$ completed the proof without error scoring both marks. A few students who used $+1.96$ then “fudged” the signs part way through their solution losing the A mark. 

Part (b) was a good introduction to part (c) with the majority of students scoring the mark although there were some who didn’t read the question carefully enough and used the $7.902$ from (a) as the lower limit rather than $7.94$. The majority of marks lost were due to rounding to $2$ s.f.

Most students were able to make a credible attempt at answering part (c). However, there was a lot of information for students to process and it was common to see errors or omissions at some point in their solution. There were several correct ways of approaching this question. All approaches required the calculation of the probability of a rod lying in each of the categories, some students mistakenly used $\text{P}(L < 7.94) = 0.025$ presumably assuming that $7.94$ was the value given in the question ($7.902$). Another common error was assuming that $7.94$ and $8.09$ were evenly spaced about the mean so the probability from (b) was subtracted from $1$ and then the result halved. 

Once the students had found the probabilities a common approach was to start with calculating the number of rods in each category, and then calculating the income/profit. Many students calculated the total income and went no further. Whether this was because of a misunderstanding of the term “profit” or whether having got that far they simply forgot to subtract the costs was unclear. The ability for students to apply their skills in “real life” situations needs further development including training in setting out working methodically.

Common errors included rounding the probabilities inappropriately, rounding the number of rods to integer values and some occasionally being uncertain whether they were working in pounds or pence. The most successful answers were those where the calculation was combined into a single expression. 

Students who attempted part (d) usually selected the correct Binomial model. A few students, recognising that $n$ was large, used a normal approximation which was not appropriate in this case with very small $p$. It was common for students to find $\text{P}(X \le 6)$ rather than $\text{P}(X < 6)$. Those who made this error were however still able to access the mark available for a correct interpretation. A minority of the students who gave a correct interpretation did not make the required comparison of their probability with the given $95\%$ aim thus losing the final A mark. Students need to be aware that in questions such as this they should be using the values calculated to justify and explain any conclusions they make. 

A reasonable proportion of students were confused about what the question was asking and tried to set up a hypothesis test, making a conclusion based on whether they were accepting or rejecting the null hypothesis rather than judging the likelihood of the manufacturer meeting his aim by comparing their probability with the given $95\%$ aim. Some weaker students simply worked out $6$ out of $200$ as a percentage and compared this with $5\%$.

---
topic: "Exponentials and Logarithms"
subtopic: "Logarithms and non-linear data"
---
### **Question 3**

Dian uses the large data set to investigate the Daily Total Rainfall, $r\text{ mm}$, for Camborne.

**(a)** Write down how a value of $0 < r \le 0.05$ is recorded in the large data set. **(1)**

Dian uses the data for the $31$ days of August $2015$ for Camborne and calculates the following statistics
$$n = 31, \quad \sum r = 174.9, \quad \sum r^2 = 3523.283$$

**(b)** Use these statistics to calculate

**(i)** the mean of the Daily Total Rainfall in Camborne for August $2015$,

**(ii)** the standard deviation of the Daily Total Rainfall in Camborne for August $2015$. **(3)**

Dian believes that the mean Daily Total Rainfall in August is less in the South of the UK than in the North of the UK.

The mean Daily Total Rainfall in Leuchars for August $2015$ is $1.72\text{ mm}$ to $2$ decimal places.

**(c)** State, giving a reason, whether this provides evidence to support Dian's belief. **(2)**

Dian uses the large data set to estimate the proportion of days with no rain in Camborne for $1987$ to be $0.27$ to $2$ decimal places.

**(d)** Explain why the distribution $\text{B}(14, 0.27)$ might not be a reasonable model for the number of days without rain for a $14\text{-day}$ summer event. **(1)**

**(Total for Question 3 is 7 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: State recording method** 'tr' or 'trace'

- **[B1]** Correct answer.

#### **Part (b)**

**Step 2: Calculate the mean** $\bar{r} = \frac{174.9}{31} = 5.64$ (or $5.6419\dots$)

- **[A1]** Correct mean.

**Step 3: Calculate the standard deviation** $\sigma = \sqrt{\frac{3523.283}{31} - \left(\frac{174.9}{31}\right)^2} = \sqrt{113.65429 - 31.83145} = \sqrt{81.8228} = 9.05$ (or $9.0455\dots$)

- **[A1]** Correct standard deviation.

#### **Part (c)**

**Step 4: Compare locations and means** Camborne is in the South (Cornwall) and Leuchars is in the North (Scotland). The mean for Camborne ($\approx 5.64$) is greater than the mean for Leuchars ($\approx 1.72$), so this does not support Dian's belief.

- **[B1]** Correct geographical identification of both locations.
- **[B1ft]** Valid conclusion consistent with their calculated mean and locations.

#### **Part (d)**

**Step 5: Explain limitation of binomial model** The probability of rain/no rain is not independent from day to day (or probability is not constant across the summer).

- **[E1]** Valid reason relating to lack of independence or variable probability.

### **Examiner Report 3**

Part (a) tested knowledge of the data set. Some students were able to identify tr or trace as the required answer, but many displayed their lack of knowledge of the data set, with n/a being a typical wrong answer, or $0$ or $0.025$. Many students gave no answer of any sort and there were a few nonsensical or confused answers such as explaining how the rainfall might be collected (a particular favourite being ‘with a bucket and ruler’) or how it might be recorded (in an excel spreadsheet). 

The vast majority of students were able to find the mean correctly in Part (b). Mistakes if any in (i) tended to be rounding the answer to $5.6$ without previously showing a more accurate answer, hence losing the single mark. A few students showed the calculation without evaluating it. Disturbingly there was a tiny minority who seemed to have formulae involving square root signs etc. It is disappointing to see evidence of students studying statistics at advanced level who still do not know how to calculate a mean. There were more errors in (ii) although well answered by the majority. Errors tended to be missing the square root in their expression for the standard deviation giving the variance as the final answer, with students believing this to be the standard deviation; subtracting the mean rather than the square of the mean premature approximation of the mean leading to inaccurate final answers and giving the answer to $2\text{sf}$ or an even lesser degree of accuracy. A small number of students gave an answer with no working and were then at the mercy of having obtained a sufficiently accurate answer or risk losing these relatively easy marks. 

Part (c) proved to be more problematic. Many students lacked knowledge of the LDS and did not know the relative geographical locations of Camborne and Leuchars within the UK. As such, a significant number of students made the incorrect assumption that Leuchars is in the South and Camborne is in the North. However, when students were able to locate the relative positions of the two places correctly, they were generally able to draw the correct conclusion, resulting from comparing the mean rainfall between the two places. 

The main errors included:
- not making reference to the relative positions of the two locations in their answer e.g. stating that Camborne was in the South with no reference to the relative position of Leuchars, 
- not making any statements about either of the geographical locations at all and only compared means, with responses such as: no, as the mean is less in Leuchars than in Camborne. 
- not drawing the correct conclusion after correctly comparing locations and means,
- not stating any conclusion, 
- incorrectly comparing standard deviations rather than means. 

There was a wide variety of responses to part (d). Successful students often stated one or more of the conditions of the Binomial Distribution, with reasons why this distribution was not suitable in this case. e.g. the probability needs to be independent but the probability of rainfall is not independent as it often depends on the weather from the day before, or the probability of rain needs to be constant but the probability was taken from May to October and summer is June to September and therefore the probability is likely to be higher than in the summer when there is less rain. 

Errors included:
- referring to independence without context, 
- commenting on the great storm of $1987$ or global warming, 
- stating that the data is out of date,
- the sample size is too small,
- some values are trace values and/or rainfall is influenced by other factors.

---
topic: "Hypothesis Testing"
subtopic: "Hypothesis testing for the parameter p of a binomial distribution"
---
### **Question 4**

A dentist knows from past records that $10\%$ of customers arrive late for their appointment.

A new manager believes that there has been a change in the proportion of customers who arrive late for their appointment.

A random sample of $50$ of the dentist's customers is taken.

**(a)** Write down
- a null hypothesis corresponding to no change in the proportion of customers who arrive late
- an alternative hypothesis corresponding to the manager's belief **(1)**

**(b)** Using a $5\%$ level of significance, find the critical region for a two-tailed test of the null hypothesis in (a)

You should state the probability of rejection in each tail, which should be less than $0.025$ **(3)**

**(c)** Find the actual level of significance of the test based on your critical region from part (b) **(1)**

The manager observes that $15$ of the $50$ customers arrived late for their appointment.

**(d)** With reference to part (b), comment on the manager’s belief. **(1)**

**(Total for Question 4 is 6 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: State hypotheses** $\text{H}_0: p = 0.1$, $\text{H}_1: p \neq 0.1$

- **[B1]** Both hypotheses correct.

#### **Part (b)**

**Step 2: Set up binomial model** Let $X$ be the number of late customers, $X \sim \text{B}(50, 0.1)$

- **[M1]** Identifies $\text{B}(50, 0.1)$.

**Step 3: Find critical values** 
Lower tail: $\text{P}(X \le 0) = 0.00515 < 0.025$, $\text{P}(X \le 1) = 0.0338 > 0.025$, so lower critical region is $X = 0$.
Upper tail: $\text{P}(X \ge 9) = 1 - \text{P}(X \le 8) = 1 - 0.9421 = 0.0579$, $\text{P}(X \ge 10) = 1 - \text{P}(X \le 9) = 1 - 0.9755 = 0.0245 < 0.025$, so upper critical region is $X \ge 10$.

- **[A1]** Lower critical region $X \le 0$ (or $0$).
- **[A1]** Upper critical region $X \ge 10$.

#### **Part (c)**

**Step 4: Calculate actual significance level** $\text{P}(X = 0) + \text{P}(X \ge 10) = 0.00515 + 0.02447 = 0.0296$ (or $2.96\%$)

- **[B1ft]** Correct combined probability.

#### **Part (d)**

**Step 5: Conclusion in context** $15$ lies in the critical region ($15 \ge 10$), so there is sufficient evidence to reject $\text{H}_0$. There is evidence to support the manager's belief that the proportion of late customers has changed.

- **[B1ft]** Compares $15$ with critical region and gives valid conclusion.

### **Examiner Report 4**

Part (a) was well answered with the majority of students writing their hypotheses in terms of $p$. 

Part (b) proved to be a challenge for many of the students with a reasonable proportion unable to even begin, which is unusual for a question of this nature – as it is quite standard. 

Most students were able to state the correct distribution and write some probabilities, but many were not able to identify correctly the CR from their probabilities. Responses scoring M1A1A1 were rare. This was often due students giving probability statements rather than giving a CR. 

Other issues included:
- giving probabilities to only $2$ s.f.,
- selecting the region between the two Critical values as their CR.

Students who were aware of what a two-tailed CR looks like almost always got part (c) correct. The students who did not really understand the idea of the correct CR seemed to make a fairly random guess at the actual significance level.

For those students who stated both tails of the critical region in (b), the majority correctly compared $15$ with their critical region and then usually supported the manager. Others used the longer version of the contextual statement and most did so correctly.

---
topic: "Functions and Graphs"
subtopic: "Functions and mappings"
---
### **Question 5**

A company has $1825$ employees.

The employees are classified as professional, skilled or elementary.

The following table shows
- the number of employees in each classification
- the two areas, $A$ or $B$, where the employees live

$$\begin{array}{|l|c|c|}
\hline
 & A & B \\ \hline
\text{Professional} & 740 & 380 \\ \hline
\text{Skilled} & 275 & 90 \\ \hline
\text{Elementary} & 260 & 80 \\ \hline
\end{array}$$

An employee is chosen at random.

Find the probability that this employee

**(a)** is skilled, **(1)**

**(b)** lives in area $B$ and is not a professional. **(1)**

Some classifications of employees are more likely to work from home.
- $65\%$ of professional employees in both area $A$ and area $B$ work from home
- $40\%$ of skilled employees in both area $A$ and area $B$ work from home
- $5\%$ of elementary employees in both area $A$ and area $B$ work from home
- Event $F$ is that the employee is a professional
- Event $H$ is that the employee works from home
- Event $R$ is that the employee is from area $A$

**(c)** Using this information, complete the Venn diagram on the opposite page. **(4)**

**(d)** Find $\text{P}(R' \cap F)$ **(1)**

**(e)** Find $\text{P}([H \cup R]')$ **(1)**

**(f)** Find $\text{P}(F | H)$ **(2)**

**Figure 2** _(A Venn diagram showing three intersecting sets $H$, $R$, and $F$ with region labels to be completed)._

```tikz
\begin{tikzpicture}[scale=0.8]
  \draw (-3,-2.5) rectangle (4.5,3.5);
  \draw (-0.5,1) circle (1.5cm) node[above left] {$H$};
  \draw (1.5,1) circle (1.5cm) node[above right] {$R$};
  \draw (0.5,-0.5) circle (1.5cm) node[below] {$F$};
  \node at (-1.2,1.2) {$123$};
  \node at (2.2,1.2) {$412$};
  \node at (-0.5,-0.8) {$247$};
  \node at (0.5,-1.8) {$133$};
\end{tikzpicture}
```

**(Total for Question 5 is 10 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Calculate probability of being skilled** Total skilled = $275 + 90 = 365$. Total employees = $1825$.
$\text{P}(\text{skilled}) = \frac{365}{1825} = \frac{1}{5}$ (or $0.2$)

- **[B1]** Correct fraction or decimal.

#### **Part (b)**

**Step 2: Calculate probability** Non-professionals in area $B$ = $90 + 80 = 170$.
$\text{P} = \frac{170}{1825} = \frac{34}{365}$ (or $0.0466$)

- **[B1]** Correct fraction or decimal.

#### **Part (c)**

**Step 3: Calculate regions of the Venn diagram**
- Professional from $A$ working from home = $740 \times 0.65 = 481$
- Professional from $A$ NOT working from home = $740 - 481 = 259$
- Professional from $B$ working from home = $380 \times 0.65 = 247$ (given)
- Professional from $B$ NOT working from home = $380 - 247 = 133$ (given)
- Skilled from $A$ working from home = $275 \times 0.40 = 110$
- Skilled from $A$ NOT working from home = $275 - 110 = 165$
- Skilled from $B$ working from home = $90 \times 0.40 = 36$
- Skilled from $B$ NOT working from home = $90 - 36 = 54$
- Elementary from $A$ working from home = $260 \times 0.05 = 13$
- Elementary from $A$ NOT working from home = $260 - 13 = 247$
- Elementary from $B$ working from home = $80 \times 0.05 = 4$
- Elementary from $B$ NOT working from home = $80 - 4 = 76$

Combining into set regions:
- $H \cap R \cap F = 481$
- $H \cap R' \cap F = 247$
- $H' \cap R \cap F = 259$
- $H' \cap R' \cap F = 133$
- Remaining $H \cap R$ (skilled/elementary from $A$ and $B$ working from home) = $110 + 36 + 13 + 4 = 163$
- Remaining $R$ only (skilled/elementary from $A$ not working from home) = $165 + 247 = 412$ (given)
- Remaining $H$ only (skilled/elementary from $B$ working from home) = $36 + 4 = 40$
- Outside all sets ($[H \cup R \cup F]'$) = $54 + 76 = 130$

- **[M1]** At least two correct values placed in the Venn diagram.
- **[A3]** All regions correctly identified and placed (deduct 1 mark per error).

#### **Part (d)**

**Step 4: Find $\text{P}(R' \cap F)$** $\frac{247 + 133}{1825} = \frac{380}{1825} = \frac{76}{365}$ (or $0.208$)

- **[B1ft]** Correct probability from their diagram.

#### **Part (e)**

**Step 5: Find $\text{P}([H \cup R]')$** $\frac{54 + 76}{1825} = \frac{130}{1825} = \frac{26}{365}$ (or $0.0356$)

- **[B1ft]** Correct probability.

#### **Part (f)**

**Step 6: Find conditional probability $\text{P}(F | H)$** $\frac{481 + 247}{481 + 247 + 163 + 40} = \frac{728}{931} = \frac{56}{71}$ (or $0.782$)

- **[M1]** Numerator correct ($481 + 247$) and denominator correct ($728 + 163 + 40$).
- **[A1]** Correct fraction or decimal.

### **Examiner Report 5**

Part (a) was well answered with most students able to gain the mark for a correct answer. A simplified fraction or the correct decimal value was often seen.

Whilst the majority of students continued to score well in part (b) the most common incorrect answer came from students who thought the question was conditional, giving $\frac{170}{550}$, i.e. the probability of not being a professional given they live in area $B$. Some students attempted a product of probabilities assuming independence, which was not given and not correct.

In part (c) there was mixed success in the interpretation of the information given in the question with only about half of students getting the Venn diagram completely correct. Some correct diagrams followed minimal working whilst others filled at least a page. A common omission was to leave the region $H' \cap R' \cap F'$ blank. The method mark was most commonly given when implied by one correct value in the Venn diagram, rather than for the student’s working, which was commonly unclear. Some working indicated incorrect use of the given percentages. Where only one value was correct in the Venn diagram it was usually the $481$ or $259$, for ‘professionals from area $A$’. When none or only one of the four correct values was seen many students benefited from being able to achieve $1$ mark for the sums of certain pairs of values in their diagram. There were a number of students who simply abandoned the Venn diagram which often resulted in no attempts being made at the remaining parts of the question. 

Part (d) had a mixed response with many correct answers. This part could be answered independently of whether or not (c) had been attempted and it was good to see most students doing so successfully. Whilst many realised the $133$ given in the Venn diagram was required, the follow-through mark could only be scored by students who had some value in the region $H' \cap R' \cap F'$ so that this value could be added to the $133$ in their calculation. A common non-scoring answer of $\frac{133}{1825}$ was often seen.

Most students realised that part (d) [referring to part (f)] was a conditional probability question with many taking the simpler approach of using numbers rather than probabilities in their ratio. Those with a correct Venn diagram usually scored both marks here. As is often the case, a noticeable number of students had the incorrect event, namely $F$, as the denominator in their probability expression rather than $H$.

---
topic: "Exponentials and Logarithms"
subtopic: "Logarithms and non-linear data"
---
### **Question 6**

Anna is investigating the relationship between exercise and resting heart rate.

She takes a random sample of $19$ people in her year at school and records for each person
- their resting heart rate, $h$ beats per minute
- the number of minutes, $m$, spent exercising each week

Her results are shown on the scatter diagram.

**Figure 3** _(A scatter diagram showing resting heart rate $h$ against exercise minutes $m$, with negative correlation trend)._

```tikz
\begin{tikzpicture}[scale=0.8]
  \draw[->] (0,0) -- (6,0) node[below] {$m$};
  \draw[->] (0,0) -- (0,5) node[left] {$h$};
  \node at (0,0) [below left] {$0$};
  \node at (2,0) [below] {$200$};
  \node at (4,0) [below] {$400$};
  \node at (0,3.5) [left] {$70$};
  \node at (0,4.5) [left] {$80$};
  \foreach \x/\y in {0.2/4.2, 0.4/3.8, 0.5/3.7, 0.6/3.6, 0.6/3.8, 0.8/3.4, 1.2/2.8, 1.5/2.5, 1.8/2.3, 2.2/2.2, 2.5/2.1, 2.8/2.0, 3.2/2.0, 3.5/2.1, 3.8/2.2} {
    \node at (\x*1.2, \y*1.1) {$\times$};
  }
\end{tikzpicture}
```

**(a)** Interpret the nature of the relationship between $h$ and $m$ **(1)**

Anna codes the data using the formulae
$$x = \log_{10} m$$
$$y = \log_{10} h$$

The product moment correlation coefficient between $x$ and $y$ is $-0.897$

**(b)** Test whether or not there is significant evidence of a negative correlation between $x$ and $y$

You should
- state your hypotheses clearly
- use a $5\%$ level of significance
- state the critical value used **(3)**

The equation of the line of best fit of $y$ on $x$ is
$$y = -0.05x + 1.92$$

**(c)** Use the equation of the line of best fit of $y$ on $x$ to find a model for $h$ on $m$ in the form
$$h = am^k$$
where $a$ and $k$ are constants to be found. **(5)**

**(Total for Question 6 is 9 marks)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Interpret relationship in context** As the number of minutes spent exercising increases, resting heart rate tends to decrease.

- **[B1]** Correct interpretation mentioning both variables in context.

#### **Part (b)**

**Step 2: State hypotheses** $\text{H}_0: \rho = 0$, $\text{H}_1: \rho < 0$

- **[B1]** Correct hypotheses using $\rho$.

**Step 3: State critical value** Critical value for $n = 19$ at $5\%$ significance level is $-0.3887$ (or table value for $17$ degrees of freedom).

- **[B1]** Correct critical value.

**Step 4: Conclusion** Since $-0.897 < -0.3887$, it falls in the critical region. There is significant evidence of a negative correlation between $x$ and $y$.

- **[B1ft]** Correct conclusion based on comparison.

#### **Part (c)**

**Step 5: Substitute definitions into the linear equation** Substitute $y = \log_{10} h$ and $x = \log_{10} m$:
$$\log_{10} h = -0.05 \log_{10} m + 1.92$$

- **[M1]** Substitutes $\log_{10} h$ and $\log_{10} m$ into the equation.

**Step 6: Use log laws to simplify**
$$\log_{10} h = \log_{10}(m^{-0.05}) + 1.92$$
$$\log_{10} h - \log_{10}(m^{-0.05}) = 1.92 \implies \log_{10}\left(\frac{h}{m^{-0.05}}\right) = 1.92$$
or
$$\log_{10} h = -0.05 \log_{10} m + 1.92 \log_{10} 10$$

- **[M1]** Uses log laws correctly (e.g. power law).

**Step 7: Convert to exponential form**
$$h = 10^{-0.05m} \times 10^{1.92} \quad \text{[Wait: correction for index]} \implies h = 10^{1.92} \cdot m^{-0.05}$$

- **[M1]** Converts from logarithmic form to $h = am^k$ form.

**Step 8: Calculate constant $a$** $a = 10^{1.92} = 83.176\dots \approx 83.2$

- **[A1]** Correct value for $a$ ($83.2$ or $10^{1.92}$).

**Step 9: State final equation** $k = -0.05$, $a = 83.2$ (or $10^{1.92}$)

- **[A1]** Both $a$ and $k$ correctly stated.

### **Examiner Report 6**

In part (a) a large number of students simply wrote ‘negative correlation’, with no context. The word Interpret in the question hints that context is required. Of the students that did try to truly interpret the correlation in a contextual statement, the vast majority were successful.

Whilst many students realised that one-tailed hypotheses were needed in part (b) few used $\rho$ for the parameter. Most students had $\pm$ the correct CV but the final A1 was lost by many students, as they compared the positive value $0.3887$ to the negative test statistic. This showed these students were unfamiliar with the meaning of the CV/CR and how it related to their test statistic.

Part (d) [referring to part (c)] differentiated well between students with basic knowledge and those with deeper understanding. The majority of students scored $5/5$ on this part. Almost all used the $\text{LH}$ approach on the MS. This was usually well done, though a good number made errors with the laws of indices and maintained a $+$ between the two terms after making the equation into powers of $10$. The students knew their log rules, but many did only so to a basic degree, and came unstuck during their working. Sometimes this was to such an extent that they lost the marks. A surprisingly high number of students used natural logarithms and hence the exponential function in this question showing a less secure grip of this topic.
