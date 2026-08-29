---
topic: "Probability Generating Functions"
subtopic: "Venn diagrams"
---
### **Question 1**

The Venn diagram, where $p$ is a probability, shows the 3 events $A$, $B$ and $C$ with their associated probabilities.

**Figure 1** _(A Venn diagram showing three intersecting sets A, B and C with probabilities 0.17, 0.08, 0.2, 0.12, 0.18 inside the regions and 0.25 outside the circles.)_

```tikz
\begin{tikzpicture}
  \draw (0,0) ellipse (1.5cm and 1cm);
  \draw (1.5,0) ellipse (1.5cm and 1cm);
  \draw (3,0) ellipse (1.5cm and 1cm);
  \node at (-0.5,0.5) {0.17};
  \node at (0.5,0.5) {0.08};
  \node at (1.5,0.5) {0.2};
  \node at (2.5,0.5) {0.12};
  \node at (3.5,0.5) {0.18};
  \node at (4.5,-1) {0.25};
\end{tikzpicture}
```

**(a)** Find the value of $p$. **(1)**

**(b)** Write down a pair of mutually exclusive events from $A$, $B$ and $C$. **(1)**

**(Total 2 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Sum all probabilities to 1**
$$0.17 + 0.08 + 0.2 + 0.12 + 0.18 + p + 0.25 = 1$$
- **[M1]** Summing all regions to 1.

**Step 2: Solve for $p$**
$$p = 1 - 0.8 = 0.2$$
- **[A1]** $p = 0.2$.

#### **Part (b)**

**Step 3: Identify mutually exclusive events**
- **[B1]** Any correct pair, e.g., $A$ and $C$.

### **Examiner Report 1**

The vast majority were able to find the correct value for $p$ but under half managed to identify a pair of mutually exclusive events. Some lost the mark for confusing events with probabilities of events and others thought the answer was $A$ and $B$ or $B$ and $C$.

### **Question 5**

Two bags, $A$ and $B$, each contain balls which are either red or yellow or green.

Bag $A$ contains 4 red, 3 yellow and $n$ green balls.
Bag $B$ contains 5 red, 3 yellow and 1 green ball.

A ball is selected at random from bag $A$ and placed into bag $B$.
A ball is then selected at random from bag $B$ and placed into bag $A$.

The probability that bag $A$ now contains an equal number of red, yellow and green balls is $p$.

Given that $p > 0$, find the possible values of $n$ and $p$. **(5)**

**(Total 5 marks)**

### **Mark Scheme 5**

**Step 1: Set up cases**
- **[M1]** Considering cases for the first transfer (Red, Yellow, Green).

**Step 2: Calculate probabilities**
- **[M1]** Calculating probabilities for the second transfer.
- **[A1]** Setting up the equation for equal numbers.

**Step 3: Solve for $n$**
- **[A1]** $n=4$.

**Step 4: Calculate $p$**
- **[A1]** $p = \frac{1}{10}$.

### **Examiner Report 5**

Sadly two thirds of the candidates were not able to make any progress with this question. Those who did pause for a moment and consider the situation often realised that there were two possible cases to consider. The majority of these failed to give the correct probabilities though as they did not realise that after the initial transfer from bag $A$ there were 10, rather than 9, balls in bag $B$. A handful of the students did negotiate the problem successfully though some then added together their probabilities (instead of giving the two pairings of $n$ and $p$) and lost the final mark.
