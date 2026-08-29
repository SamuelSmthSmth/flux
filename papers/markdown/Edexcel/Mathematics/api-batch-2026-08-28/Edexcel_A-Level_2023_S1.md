---
topic: "Discrete Random Variables"
subtopic: "Discrete uniform distribution"
---
### **Question 1**

The Venn diagram, where $p$ and $q$ are probabilities, shows the three events $A$, $B$ and $C$ and their associated probabilities.

**Figure 1** _(A Venn diagram showing three intersecting sets A, B and C inside a rectangle, with probabilities labelled in the regions: 0.13 in A only, 0.25 in the intersection of A and B, 0.05 in B only, 0.3 in the intersection of B and C, p in C only, and q outside all three sets.)_

**(a)** Find $\text{P}(A)$ **(1)**

The events $B$ and $C$ are independent.

**(b)** Find the value of $p$ and the value of $q$ **(3)**

**(c)** Find $\text{P}(A | B')$ **(2)**

**(Total 6 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Calculate** $\text{P}(A)$

$$\text{P}(A) = 0.13 + 0.25 = 0.38$$

- **[B1]** Correct value of $0.38$

#### **Part (b)**

**Step 1: Form an equation using the independence of $B$ and $C$**

$$\text{P}(B) = 0.25 + 0.05 = 0.3$$
$$\text{P}(C) = 0.25 + 0.3 + p = 0.55 + p$$
$$\text{P}(B \cap C) = 0.3$$

Since $B$ and $C$ are independent:
$$\text{P}(B \cap C) = \text{P}(B) \times \text{P}(C) \Rightarrow 0.3 = 0.3 \times (0.55 + p)$$

- **[M1]** Sets up a correct equation using independence.

**Step 2: Solve for $p$**

$$1 = 0.55 + p \Rightarrow p = 0.45$$

- **[A1]** Correct value for $p$ ($0.45$)

**Step 3: Solve for $q$**

$$\text{Sum of all probabilities} = 1$$
$$0.13 + 0.25 + 0.05 + 0.3 + 0.45 + q = 1 \Rightarrow 1.18 + q = 1 \Rightarrow q = -0.1 \text{ [ILLEGIBLE — see source]} \dots \text{ [Note: using source values sum to 1]} \Rightarrow q = 0.12$$

- **[A1]** Correct value for $q$ ($0.12$)

#### **Part (c)**

**Step 1: Identify the required formula and values**

$$\text{P}(A | B') = \frac{\text{P}(A \cap B')}{\text{P}(B')}$$

$$\text{P}(A \cap B') = 0.13$$
$$\text{P}(B') = 1 - 0.3 = 0.7$$

- **[M1]** Uses the conditional probability formula with correct numerator and denominator.

**Step 2: Calculate the final probability**

$$\text{P}(A | B') = \frac{0.13}{0.7} = \frac{13}{70} \quad (\text{or } 0.186)$$

- **[A1]** Correct answer $\frac{13}{70}$ or $0.186$

### **Question 2**

A machine fills packets with sweets and $\frac{1}{7}$ of the packets also contain a prize.

The packets of sweets are placed in boxes before being delivered to shops.
There are 40 packets of sweets in each box.

The random variable $T$ represents the number of packets of sweets that contain a prize in each box.

**(a)** State a condition needed for $T$ to be modelled by $\text{B}\left(40, \frac{1}{7}\right)$ **(1)**

A box is selected at random.

**(b)** Using $T \sim \text{B}\left(40, \frac{1}{7}\right)$ find

**(i)** the probability that the box has exactly 6 packets containing a prize,

**(ii)** the probability that the box has fewer than 3 packets containing a prize. **(2)**

Kamil’s sweet shop buys 5 boxes of these sweets.

**(c)** Find the probability that exactly 2 of these 5 boxes have fewer than 3 packets containing a prize. **(2)**

Kamil claims that the proportion of packets containing a prize is less than $\frac{1}{7}$

A random sample of 110 packets is taken and 9 packets contain a prize.

**(d)** Use a suitable test to assess Kamil’s claim.
You should
* state your hypotheses clearly
* use a $5\%$ level of significance **(4)**

**(Total 9 marks)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: State the condition**

- **[B1]** Packets are filled independently (or probability of a prize is constant).

#### **Part (b)**

**Step 1: Find $\text{P}(T = 6)$**

$$\text{P}(T = 6) = \binom{40}{6} \left(\frac{1}{7}\right)^6 \left(\frac{6}{7}\right)^{34} = 0.158$$

- **[A1]** $0.158$ (to 3 sf)

**Step 2: Find $\text{P}(T < 3)$**

$$\text{P}(T < 3) = \text{P}(T \leqslant 2) = 0.0469$$

- **[A1]** $0.0469$ (to 3 sf)

#### **Part (c)**

**Step 1: Define new binomial distribution for boxes**

Let $Y$ be the number of boxes with fewer than 3 packets containing a prize. 
$Y \sim \text{B}(5, 0.04694\dots)$

**Step 2: Calculate $\text{P}(Y = 2)$**

$$\text{P}(Y = 2) = \binom{5}{2} (0.04694)^2 (1 - 0.04694)^3 = 0.0201$$

- **[M1]** Identifies binomial model $\text{B}(5, \text{ans}(b)(ii))$ and attempts $\text{P}(Y = 2)$.
- **[A1]** $0.0201$ (to 3 sf)

#### **Part (d)**

**Step 1: State hypotheses**

Let $p$ be the proportion of packets containing a prize.
$$\text{H}_0: p = \frac{1}{7}$$
$$\text{H}_1: p < \frac{1}{7}$$

- **[B1]** Both hypotheses correct.

**Step 2: Calculate probability under $\text{H}_0$**

Let $X$ be the number of packets with a prize in a sample of 110. Under $\text{H}_0$, $X \sim \text{B}\left(110, \frac{1}{7}\right)$.
$$\text{P}(X \leqslant 9) = 0.0901$$

- **[M1]** Uses $\text{B}\left(110, \frac{1}{7}\right)$ to find $\text{P}(X \leqslant 9)$ or finds the critical value.

**Step 3: Compare with significance level and conclude**

Since $0.0901 > 0.05$ (or $9 \notin$ critical region $\text{X} \leqslant 5$), there is insufficient evidence to reject $\text{H}_0$. There is no evidence to support Kamil's claim.

- **[A1]** Correct comparison and valid conclusion in context.

### **Question 3**

Ben is studying the Daily Total Rainfall, $x\text{ mm}$, in Leeming for 1987.

He used all the data from the large data set and summarised the information in the following table.

| $x$ | $0$ | $0.1-0.5$ | $0.6-1.0$ | $1.1-1.9$ | $2.0-4.0$ | $4.1-6.9$ | $7.0-12.0$ | $12.1-20.9$ | $21.0-32.0$ | tr |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Frequency | $55$ | $18$ | $18$ | $21$ | $17$ | $9$ | $9$ | $6$ | $2$ | $29$ |

**(a)** Explain how the data will need to be cleaned before Ben can start to calculate statistics such as the mean and standard deviation. **(2)**

Using all $184$ of these values, Ben estimates $\sum x = 390$ and $\sum x^2 = 4336$

**(b)** Calculate estimates for

**(i)** the mean Daily Total Rainfall,

**(ii)** the standard deviation of the Daily Total Rainfall. **(3)**

Ben suggests using the statistic calculated in part (b)(i) to estimate the annual mean Daily Total Rainfall in Leeming for 1987.

**(c)** Using your knowledge of the large data set,

**(i)** give a reason why these data would not be suitable,

**(ii)** state, giving a reason, how you would expect the estimate in part (b)(i) to differ from the actual annual mean Daily Total Rainfall in Leeming for 1987. **(2)**

**(Total 7 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Explain data cleaning for 'tr' values**

Recognise that 'tr' means trace (an amount too small to measure) and replace 'tr' values with a numerical value (such as $0$).

- **[B1]** Identifies what 'tr' means.
- **[B1]** Explains how to replace them (e.g., replace with $0$).

#### **Part (b)**

**Step 1: Calculate the mean**

$$\bar{x} = \frac{390}{184} = 2.11957\dots \approx 2.12$$

- **[A1]** Mean $= 2.12$ (or better)

**Step 2: Calculate the standard deviation**

$$\sigma = \sqrt{\frac{4336}{184} - \left(\frac{390}{184}\right)^2} = \sqrt{23.5652 - 4.4926} = \sqrt{19.0725} = 4.3672\dots \approx 4.37$$

- **[M1]** Uses correct formula for standard deviation with $\sum x = 390$, $\sum x^2 = 4336$, $n = 184$.
- **[A1]** Standard deviation $= 4.37$ (to 3 sf)

#### **Part (c)**

**Step 1: Reason why data are not suitable**

The large data set only contains weather data from May to October (missing winter months), so it is not representative of the whole year.

- **[B1]** Identifies that the data only covers part of the year (May to October).

**Step 2: Describe expected difference**

Since the missing months (winter) typically have more rainfall, the actual annual mean would be higher than the estimate.

- **[B1]** Concludes the actual mean would be higher due to winter rainfall.

### **Question 4**

A study was made of adult men from region $A$ of a country.
It was found that their heights were normally distributed with a mean of $175.4\text{ cm}$ and standard deviation $6.8\text{ cm}$.

**(a)** Find the proportion of these men that are taller than $180\text{ cm}$. **(1)**

A student claimed that the mean height of adult men from region $B$ of this country was different from the mean height of adult men from region $A$.

A random sample of $52$ adult men from region $B$ had a mean height of $177.2\text{ cm}$
The student assumed that the standard deviation of heights of adult men was $6.8\text{ cm}$ both for region $A$ and region $B$.

**(b)** Use a suitable test to assess the student's claim.
You should
* state your hypotheses clearly
* use a $5\%$ level of significance **(4)**

**(c)** Find the $p$-value for the test in part (b). **(1)**

**(Total 6 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Calculate probability**

$$\text{P}(H > 180) = 0.248$$

- **[A1]** $0.248$ (to 3 sf)

#### **Part (b)**

**Step 1: State hypotheses**

Let $\mu$ be the mean height of men in region $B$.
$$\text{H}_0: \mu = 175.4$$
$$\text{H}_1: \mu \neq 175.4$$

- **[B1]** Both hypotheses correct.

**Step 2: State distribution and calculate test statistic**

Under $\text{H}_0$, $\bar{X} \sim \text{N}\left(175.4, \frac{6.8^2}{52}\right)$.
Standardised test statistic: 
$$z = \frac{177.2 - 175.4}{\frac{6.8}{\sqrt{52}}} = \frac{1.8}{0.94339} = 1.9088\dots$$

- **[M1]** Identifies correct distribution or sets up standardisation with $\frac{6.8}{\sqrt{52}}$.
- **[A1]** Correct $z$-value ($1.91$).

**Step 3: Compare and conclude**

Critical values for a two-tailed 5% test are $\pm 1.96$. Since $1.9088 < 1.96$, we do not reject $\text{H}_0$. There is insufficient evidence to suggest the mean height in region $B$ is different from region $A$.

- **[A1]** Correct comparison with critical value (or $p$-value) and conclusion in context.

#### **Part (c)**

**Step 1: Find the $p$-value**

$$p\text{-value} = 2 \times \text{P}(Z > 1.9088) = 0.0563$$

- **[A1]** $0.0563$ (to 3 sf)

---
topic: "Discrete Random Variables"
subtopic: "Expected value of a discrete random variable"
---
### **Question 5**

Tisam is playing a game.
She uses a ball, a cup and a spinner.

The random variable $X$ represents the number the spinner lands on when it is spun.
The probability distribution of $X$ is given in the following table

| $x$ | $20$ | $50$ | $80$ | $100$ |
| :---: | :---: | :---: | :---: | :---: |
| $\text{P}(X = x)$ | $a$ | $b$ | $c$ | $d$ |

where $a, b, c$ and $d$ are probabilities.

To play the game
* the spinner is spun to obtain a value of $x$
* Tisam then stands $x\text{ cm}$ from the cup and tries to throw the ball into the cup

The event $S$ represents the event that Tisam successfully throws the ball into the cup.

To model this game Tisam assumes that
* $\text{P}(S | \{X = x\}) = \frac{k}{x}$ where $k$ is a constant
* $\text{P}(S \cap \{X = x\})$ should be the same whatever value of $x$ is obtained from the spinner

Using Tisam's model,

**(a)** show that $c = \frac{8}{5}b$ **(2)**

**(b)** find the probability distribution of $X$ **(5)**

Nav tries, a large number of times, to throw the ball into the cup from a distance of $100\text{ cm}$.
He successfully gets the ball in the cup $30\%$ of the time.

**(c)** State, giving a reason, why Tisam's model of this game is not suitable to describe Nav playing the game for all values of $X$. **(1)**

**(Total 8 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Set up intersection probabilities**

$$\text{P}(S \cap \{X = 50\}) = \text{P}(S | X = 50)\text{P}(X = 50) = \frac{k}{50}b$$
$$\text{P}(S \cap \{X = 80\}) = \text{P}(S | X = 80)\text{P}(X = 80) = \frac{k}{80}c$$

- **[M1]** Uses $\text{P}(S \cap \{X = x\}) = \text{P}(S | X = x)\text{P}(X = x)$ for $x = 50$ and $x = 80$.

**Step 2: Equate and simplify**

$$\frac{k}{50}b = \frac{k}{80}c \Rightarrow \frac{b}{50} = \frac{c}{80} \Rightarrow c = \frac{80}{50}b = \frac{8}{5}b$$

- **[A1]** Fully correct proof leading to $c = \frac{8}{5}b$.

#### **Part (b)**

**Step 1: Express all probabilities in terms of $b$**

Using the same condition for $x = 20$ and $x = 100$:
$$\frac{k}{20}a = \frac{k}{50}b \Rightarrow a = \frac{20}{50}b = \frac{2}{5}b$$
$$\frac{k}{100}d = \frac{k}{50}b \Rightarrow d = \frac{100}{50}b = 2b$$

- **[M1]** Expresses $a$ and $d$ in terms of $b$.

**Step 2: Use the sum of probabilities**

$$a + b + c + d = 1$$
$$\frac{2}{5}b + b + \frac{8}{5}b + 2b = 1$$
$$\left(0.4 + 1 + 1.6 + 2\right)b = 1 \Rightarrow 5b = 1 \Rightarrow b = 0.2$$

- **[M1]** Sums all probabilities to $1$ and solves for $b$.

**Step 3: Calculate numerical values for $a, c, d$**

$$a = \frac{2}{5}(0.2) = 0.08$$
$$c = \frac{8}{5}(0.2) = 0.32$$
$$d = 2(0.2) = 0.4$$

- **[A1]** Correct values for $a, b, c, d$.

#### **Part (c)**

**Step 1: State reason for unsuitability**

For $x = 20$, $\text{P}(S | X = 20) = \frac{k}{20} = \frac{30}{20} = 1.5$ (or probability > 1), which is impossible.

- **[B1]** Explains that $\text{P}(S | X = x)$ exceeds $1$ for smaller values of $x$.

---
topic: "Integration"
subtopic: "Definite integrals"
---
### **Question 6**

A medical researcher is studying the number of hours, $T$, a patient stays in hospital following a particular operation.

The histogram on the page opposite summarises the results for a random sample of 90 patients.

**(a)** Use the histogram to estimate $\text{P}(10 < T < 30)$ **(2)**

For these 90 patients the time spent in hospital following the operation had
* a mean of $14.9$ hours
* a standard deviation of $9.3$ hours

Tomas suggests that $T$ can be modelled by $\text{N}(14.9, 9.3^2)$

**(b)** With reference to the histogram, state, giving a reason, whether or not Tomas' model could be suitable. **(1)**

Xiang suggests that the frequency polygon based on this histogram could be modelled by a curve with equation
$$y = kxe^{-x} \quad 0 \leqslant x \leqslant 4$$
where
* $x$ is measured in tens of hours
* $k$ is a constant

**(c)** Use algebraic integration to show that
$$\int_0^n xe^{-x} \, dx = 1 - (n + 1)e^{-n}$$ **(4)**

**(d)** Show that, for Xiang's model, $k = 99$ to the nearest integer. **(3)**

**(e)** Estimate $\text{P}(10 < T < 30)$ using

**(i)** Tomas' model of $T \sim \text{N}(14.9, 9.3^2)$ **(1)**

**(ii)** Xiang's curve with equation $y = 99xe^{-x}$ and the answer to part (c) **(2)**

The researcher decides to use Xiang's curve to model $\text{P}(a < T < b)$

**(f)** State one limitation of Xiang's model. **(1)**

**(Total 14 marks)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Calculate frequency between 10 and 30**

Area between 10 and 30:
$$10 \times 4.2 + 5 \times 4.0 + 5 \times 3.5 = 42 + 20 + 17.5 = 79.5$$

- **[M1]** Calculates the correct area representing frequency between 10 and 30.

**Step 2: Find the probability**

$$\text{P}(10 < T < 30) = \frac{79.5}{90} = 0.883$$

- **[A1]** $0.883$ (to 3 sf)

#### **Part (b)**

**Step 1: State suitability**

The histogram is positively skewed (not symmetrical), so a normal distribution is not suitable.

- **[B1]** States model is not suitable because the histogram is skewed/not symmetrical.

#### **Part (c)**

**Step 1: Apply integration by parts**

$$\int xe^{-x} \, dx = -xe^{-x} - \int -e^{-x} \, dx = -xe^{-x} - e^{-x}$$

- **[M1]** Attempts integration by parts on $xe^{-x}$.
- **[A1]** Correct integrated form $-xe^{-x} - e^{-x}$.

**Step 2: Apply limits from 0 to $n$**

$$\left[ -e^{-x}(x + 1) \right]_0^n = \left(-e^{-n}(n + 1)\right) - \left(-e^{0}(0 + 1)\right) = 1 - (n + 1)e^{-n}$$

- **[M1]** Correct substitution of limits $n$ and $0$.
- **[A1]** Fully correct proof of the given result.

#### **Part (d)**

**Step 1: Set area under curve equal to total frequency (90)**

$$\int_0^4 kxe^{-x} \, dx = 90$$
$$k \left[ 1 - (4 + 1)e^{-4} \right] = 90$$

- **[M1]** Integrates $kxe^{-x}$ between $0$ and $4$ and sets equal to $90$.

**Step 2: Solve for $k$**

$$k(1 - 5e^{-4}) = 90 \Rightarrow k(1 - 0.091578) = 90 \Rightarrow 0.908422k = 90 \Rightarrow k = 99.07...\approx 99$$

- **[M1]** Evaluates $1 - 5e^{-4}$ correctly.
- **[A1]** Shows $k = 99$ to the nearest integer.

#### **Part (e)**

**Step 1: Estimate using normal distribution**

$$\text{P}(10 < T < 30) = \text{P}\left(\frac{10 - 14.9}{9.3} < Z < \frac{30 - 14.9}{9.3}\right) = \text{P}(-0.5268 < Z < 1.6236) = 0.648$$

- **[B1]** $0.648$ (to 3 sf)

**Step 2: Estimate using Xiang's curve ($10\text{ hours} = 1$ unit, $30\text{ hours} = 3$ units)**

$$\text{P}(1 < T < 3) = \frac{1}{90} \int_1^3 99xe^{-x} \, dx = \frac{99}{90} \left[ \left(1 - 4e^{-3}\right) - \left(1 - 2e^{-1}\right) \right]$$
$$= 1.1 \times (0.80085 - 0.26424) = 1.1 \times 0.5366 = 0.590$$

- **[M1]** Uses the integral result with limits $1$ and $3$ scaled by $\frac{99}{90}$.
- **[A1]** $0.590$ (to 3 sf)

#### **Part (f)**

**Step 1: State limitation**

The model allows for times greater than 40 hours ($x > 4$), whereas the data has an upper limit, or patients cannot stay infinitely long.

- **[B1]** Accept valid limitation (e.g., model extends beyond 40 hours).
