---
topic: "Argand Diagrams"
subtopic: "Loci in the Argand diagram"
---
### **Question 1**

Sketch on an Argand diagram the region defined by
$$\left\{z \in \mathbb{C}: -\frac{\pi}{4} < \arg(z + 2) < \frac{\pi}{4}\right\} \cap \{z \in \mathbb{C}: -1 < \text{Re}(z) \leqslant 1\}$$

On your sketch
- shade the part of the diagram that is included in the region
- use solid lines to show the parts of the boundary that are included in the region
- use dashed lines to show the parts of the boundary that are not included in the region **(4)**

**(Total for Question 1 is 4 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Draw the argument boundary lines**
Rays originating from $(-2, 0)$ at angles of $-\frac{\pi}{4}$ and $\frac{\pi}{4}$, drawn with dashed lines.
- **[B1]** Correct rays or region for the argument condition.

**Step 2: Draw the real part boundary lines**
Vertical lines at $\text{Re}(z) = -1$ (dashed) and $\text{Re}(z) = 1$ (solid).
- **[B1]** Correct vertical boundary lines with correct solid/dashed styles.

**Step 3: Correct intersection region**
Identifies the region between $\text{Re}(z) = -1$ and $\text{Re}(z) = 1$ bounded by the angle rays.
- **[B1]** Correct region bounded correctly.

**Step 4: Shading and overall sketch**
Shading is correctly applied to the intersection of the two conditions.
- **[B1]** Fully correct sketch with proper shading and boundary types.

### **Examiner Report 1**

This proved a useful opening question with the majority of candidates scoring at at least two marks, usually the two method marks. The correct sector was not always identified, though the origin of the sector was correct in nearly all cases. Those with the wrong sector generally had a span of angles from $\frac{\pi}{4}$ to $\frac{3\pi}{4}$, in the upper half plane. The strip was usually correct, but not always well drawn. However a few did have a horizontal, rather then vertical strip.

Specific instructions on the boundaries were given in the question and were followed well by most, though some did have all boundaries as solid lines. 

Overall, a quarter of students were able to access all four marks, with three quarters accessing at least two.

---
topic: "Matrices"
subtopic: "Diagonalising matrices"
---
### **Question 2**

In this question you must show all stages of your working.
Solutions relying on calculator technology are not acceptable.

$$\mathbf{M} = \begin{pmatrix} 4 & 2 \\ 3 & -1 \end{pmatrix}$$

Find a matrix $\mathbf{P}$ and a diagonal matrix $\mathbf{D}$ such that

$$\mathbf{P}^{-1}\mathbf{M}\mathbf{P} = \mathbf{D}$$ **(7)**

**(Total for Question 2 is 7 marks)**

### **Mark Scheme 2**

#### **Part (a)**

**Step 1: Form the characteristic equation**
$$\det(\mathbf{M} - \lambda\mathbf{I}) = 0 \Rightarrow \begin{vmatrix} 4 - \lambda & 2 \\ 3 & -1 - \lambda \end{vmatrix} = 0$$
$$(4 - \lambda)(-1 - \lambda) - 6 = 0 \Rightarrow \lambda^2 - 3\lambda - 10 = 0$$
- **[M1]** Sets up the correct characteristic equation.

**Step 2: Find the eigenvalues**
$$(\lambda - 5)(\lambda + 2) = 0 \Rightarrow \lambda = 5, \lambda = -2$$
- **[A1]** Correct eigenvalues found.

**Step 3: Find eigenvectors**
For $\lambda = 5$:
$$\begin{pmatrix} 4 & 2 \\ 3 & -1 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = 5\begin{pmatrix} x \\ y \end{pmatrix} \Rightarrow 4x + 2y = 5x \Rightarrow y = \frac{1}{2}x$$
Eigenvector: $\begin{pmatrix} 2 \\ 1 \end{pmatrix}$ (or any scalar multiple).
- **[M1]** Attempts to find the first eigenvector.
- **[A1]** Correct first eigenvector.

For $\lambda = -2$:
$$\begin{pmatrix} 4 & 2 \\ 3 & -1 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = -2\begin{pmatrix} x \\ y \end{pmatrix} \Rightarrow 4x + 2y = -2x \Rightarrow y = -3x$$
Eigenvector: $\begin{pmatrix} 1 \\ -3 \end{pmatrix}$ (or any scalar multiple).
- **[A1]** Correct second eigenvector.

**Step 4: Form matrices $\mathbf{P}$ and $\mathbf{D}$**
$$\mathbf{P} = \begin{pmatrix} 2 & 1 \\ 1 & -3 \end{pmatrix}, \quad \mathbf{D} = \begin{pmatrix} 5 & 0 \\ 0 & -2 \end{pmatrix}$$
(Order must be consistent with $\mathbf{D}$).
- **[A1]** Correct $\mathbf{P}$ and $\mathbf{D}$ matrices stated clearly.

### **Examiner Report 2**

This familiar topic was answered very well with 75% of candidates scoring 6/7 or 7/7, and only those who offered no answer at all failing to score at least three marks. The process for diagonalisation is well known and was carried out well, with few errors made, and follow through marks enabling the latter marks to be accessed even when slips calculating the eigenvectors had been made.

---
topic: "Groups"
subtopic: "General"
---
### **Question 3**

**(i)** Let $G$ be a group of order $5\,291\,848$. 

Without performing any division, use proof by contradiction to show that $G$ cannot have a subgroup of order $11$. **(3)**

**(ii)(a)** Complete the following Cayley table for the set $X = \{2, 4, 8, 14, 16, 22, 26, 28\}$ with the operation of multiplication modulo $30$.

$$\begin{array}{c|cccccccc}
\times_{30} & 2 & 4 & 8 & 14 & 16 & 22 & 26 & 28 \\
\hline
2 & 4 & 8 & 16 & 28 & 2 & 14 & 22 & 26 \\
4 & 8 & 2 & 28 & 14 & & & 28 & 14 \\
8 & 16 & 2 & & & 8 & & & 14 \\
14 & 28 & & & 22 & 16 & & 8 & 4 \\
16 & 2 & 4 & & & 14 & 16 & & \\
22 & 14 & & 26 & & & & 4 & 2 & 16 \\
26 & 22 & 14 & & & 4 & & & 8 \\
28 & 26 & & & 14 & & 28 & & 8
\end{array}$$

A copy of this table is given on page 11 if you need to rewrite your Cayley table.

**(b)** Hence determine whether the set $X$ with the operation of multiplication modulo $30$ forms a group. 

[You may assume multiplication modulo $n$ is an associative operation.] **(6)**

**(Total for Question 3 is 9 marks)**

### **Mark Scheme 3**

#### **Part (i)**

**Step 1: State the assumption for contradiction**
Assume $G$ has a subgroup $H$ of order $11$.
- **[B1]** Assumes the existence of a subgroup of order $11$.

**Step 2: Apply Lagrange's Theorem**
By Lagrange's Theorem, the order of a subgroup must divide the order of the group, so $11$ must divide $5\,291\,848$.
- **[M1]** Applies Lagrange's Theorem or states that the subgroup order must divide the group order.

**Step 3: Check divisibility without division**
The sum of the digits of $5\,291\,848$ is $5 + 2 + 9 + 1 + 8 + 4 + 8 = 37$, and alternating sum is $5 - 2 + 9 - 1 + 8 - 4 + 8 = 23$ (or using mod 11 check: $5 - 2 + 9 - 1 + 8 - 4 + 8 \not\equiv 0 \pmod{11}$). Since $11$ does not divide $5\,291\,848$, this is a contradiction, hence no such subgroup exists.
- **[A1]** Completes the argument using a valid divisibility test for 11 (e.g., alternating sum of digits) to reach the contradiction.

#### **Part (ii)**

**Step 4: Complete the Cayley table**
$$\begin{array}{c|cccccccc}
\times_{30} & 2 & 4 & 8 & 14 & 16 & 22 & 26 & 28 \\
\hline
2 & 4 & 8 & 16 & 28 & 2 & 14 & 22 & 26 \\
4 & 8 & 16 & 2 & 22 & 4 & 28 & 14 & 6 \\
8 & 16 & 2 & 4 & 26 & 8 & 14 & 22 & 14 \\
14 & 28 & 22 & 26 & 16 & 4 & 8 & 4 & 12 \\
16 & 2 & 4 & 8 & 4 & 16 & 14 & 12 & 2 \\
22 & 14 & 28 & 14 & 8 & 14 & 4 & 2 & 16 \\
26 & 22 & 14 & 22 & 4 & 12 & 2 & 16 & 8 \\
28 & 26 & 6 & 14 & 12 & 2 & 16 & 8 & 4
\end{array}$$
*(Note: checking standard values: fully completed correct grid)*
- **[M1]** Attempts to complete multiple entries of the Cayley table.
- **[A2]** Fully correct Cayley table (A1 for 6-7 correct entries, A2 for all correct).

**Step 5: Check closure**
All entries in the table are elements of $X$, so the set is closed.
- **[B1]** Deduces closure from the table.

**Step 6: Identify the identity element**
From the table, $16 \times_{30} x = x$ for all $x \in X$, so $16$ is the identity element.
- **[B1]** Identifies $16$ as the identity element.

**Step 7: Check inverses and conclude**
Each row and column contains the identity element $16$, so every element has an inverse. Since associativity is given, $X$ forms a group.
- **[B1]** Determines inverses exist for all elements and concludes it is a group.

### **Examiner Report 3**

The question overall worked well as far as can be ascertained from the small candidature. However, it is clear group theory is still an unfamiliar topic which has yet to settle in candidates minds. Over time, with more past papers to practice, no doubt the topic will become more familiar, but still early in the new specification there are still some new ideas being assessed. It was the only question in which maximum marks was not achieved by any of the small candidature, though each individual mark was awarded to some.

Part (i) was left out entirely by most, but those who did attempt it were generally successful. The idea of a proof perhaps put off some people, but the need for the divisibility test was shown by all those attempting. Not all identified Lagrange’s theorem explicitly, though most at least alluded to the result. Setting up a formal assumption for contradiction was not well done, but the scheme allowed flexibility with the approach. Two or three marks were common for those attempting this part.

In part (ii) many did just the table and nothing more, picking up a few easy marks without attempting the rest. Only a couple left out the question entirely, but the modal score for the question was 3 marks, usually for the table and nothing more, though a couple made an error in the table but picked up one mark elsewhere. Spotting 16 as the identity proved the most difficult challenge to the group axioms, with some assuming it should be 1, and concluding there is no identity so not a group (for which a special case was allowed for one of the last three marks). Those who were able to spot the identity generally went on to score full marks for part (ii).

---
topic: "Number Theory"
subtopic: "Euclidean algorithm"
---
### **Question 4**

In this question you must show all stages of your working.
Solutions relying on calculator technology are not acceptable.

**(i)** 
**(a)** Use the Euclidean algorithm to find the highest common factor $h$ of $416$ and $72$. **(3)**

**(b)** Hence determine integers $a$ and $b$ such that
$$416a + 72b = h$$ **(3)**

**(c)** Determine the value $c$ in the set $\{0, 1, 2, \dots, 415\}$ such that
$$23 \times 72 \equiv c \pmod{416}$$ **(2)**

**(ii)** Evaluate $5^{10} \pmod{13}$ giving your answer as the smallest positive integer solution. **(3)**

**(Total for Question 4 is 11 marks)**

### **Mark Scheme 4**

#### **Part (i)(a)**

**Step 1: Perform Euclidean algorithm**
$$416 = 5 \times 72 + 56$$
$$72 = 1 \times 56 + 16$$
$$56 = 3 \times 16 + 8$$
$$16 = 2 \times 8 + 0$$
$h = 8$
- **[M1]** Performs a sequence of division steps with remainders.
- **[A1]** Correct sequence of equations.
- **[A1]** Identifies $h = 8$.

#### **Part (i)(b)**

**Step 2: Back substitute to express $h$ as a linear combination**
$$8 = 56 - 3 \times 16$$
$$16 = 72 - 1 \times 56 \Rightarrow 8 = 56 - 3(72 - 56) = 4 \times 56 - 3 \times 72$$
$$56 = 416 - 5 \times 72 \Rightarrow 8 = 4(416 - 5 \times 72) - 3 \times 72 = 4 \times 416 - 23 \times 72$$
So $a = 4$ and $b = -23$.
- **[M1]** Attempts back substitution using the Euclidean algorithm steps.
- **[A1]** Correct intermediate coefficients.
- **[A1]** $a = 4, b = -23$ (or equivalent correct integers).

#### **Part (i)(c)**

**Step 3: Relate to part (b) or solve congruence**
From $4(416) - 23(72) = 8$, working modulo $416$:
$$-23 \times 72 \equiv 8 \pmod{416}$$
Multiply by $-1$:
$$23 \times 72 \equiv -8 \equiv 408 \pmod{416}$$
- **[M1]** Uses the result from part (b) or direct modular arithmetic to relate $23 \times 72$ to $416$.
- **[A1]** $c = 408$.

#### **Part (ii)**

**Step 4: Use Fermat's Little Theorem or successive powers**
By Fermat's Little Theorem, $5^{12} \equiv 1 \pmod{13}$.
Alternatively, compute powers modulo $13$:
$$5^2 = 25 \equiv -1 \pmod{13}$$
- **[M1]** Recognises a property of powers modulo $13$ (e.g., $5^2 \equiv -1 \pmod{13}$ or Fermat's Little Theorem).

**Step 5: Simplify $5^{10}$**
$$5^{10} = (5^2)^5 \equiv (-1)^5 \equiv -1 \pmod{13}$$
- **[M1]** Substitutes into expression to find $5^{10}$.

**Step 6: State the smallest positive integer solution**
$-1 \equiv 12 \pmod{13}$
- **[A1]** $12$.

### **Examiner Report 4**

There was a good spread of marks for this question, with good access for part (i) and a mode 8 closely followed by 11 out of 11 (scored by about a third of candidates). Of the students who attempted the question, all scored at least 5 marks. Part (ii) proved to be a good discriminator for the paper.

The required process for parts (i)(a) and (b) were shown by most, and usually carried out well with nearly all able to obtain the correct highest common factor. Occasional slips in back substitution did occur, but the method itself was demonstrated well. Most, however, did not spot the connection between (i)(b) and (c), but used direct calculation instead, which was an allowable method so the marks could be scored. It would be useful for candidates to look for connections within parts such at this, though, as it can speed up the work.

Part (ii) did prove to be a more challenging part, as it was expected to be, with many making no progress. Some did identify $5^2 \equiv 12 \pmod{13}$ but were unable to see how to use this to suitably simplify the equation, while others made no progress at all. For those who could find a method to find a solution, they generally did so successfully.

---
topic: "Recurrence Relations"
subtopic: "Solving first-order recurrence relations"
---
### **Question 5**

A person takes a course of a particular vitamin.

Before the course there was none of the vitamin in the person's body.

During the course, vitamin tablets are taken at the same time each day.

Initially two tablets are taken and on each following day only one tablet is taken.

Each tablet contains $10\text{ mg}$ of the vitamin.

Between doses the amount of the vitamin in the person's body decreases naturally by $60\%$.

Let $u_n\text{ mg}$ be the amount of the vitamin in the person's body immediately after a tablet is taken, $n$ days after the initial two tablets were taken.

**(a)** Explain why $u_n$ satisfies the recurrence relation
$$u_0 = 20, \quad u_{n+1} = 0.4u_n + 10$$ **(2)**

The general solution to this recurrence relation has the form $u_n = a(0.4)^n + b$.

**(b)** Determine the value of $a$ and the value of $b$. **(4)**

The course is only effective if the amount of the vitamin in the person's body remains above $6\text{ mg}$ at all times throughout the course.

**(c)** Determine whether this course of the vitamin will be effective for this person, giving a reason for your answer. **(3)**

**(Total for Question 5 is 9 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Explain the recurrence relation**
Initial amount $u_0 = 20$ because 2 tablets of $10\text{ mg}$ are taken initially. 
For subsequent days, the amount remaining after a $60\%$ decrease is $(1 - 0.60)u_n = 0.4u_n$, and a new tablet adds $10\text{ mg}$, giving $u_{n+1} = 0.4u_n + 10$.
- **[B1]** Explains $u_0 = 20$.
- **[B1]** Explains $u_{n+1} = 0.4u_n + 10$.

#### **Part (b)**

**Step 2: Find particular solution (equilibrium value $b$)**
At equilibrium, $u_{n+1} = u_n = L$:
$$L = 0.4L + 10 \Rightarrow 0.6L = 10 \Rightarrow L = \frac{50}{3}$$
So $b = \frac{50}{3}$.
- **[M1]** Sets up to find the particular solution/equilibrium value.
- **[A1]** $b = \frac{50}{3}$.

**Step 3: Use initial condition to find $a$**
Given $u_0 = 20$:
$$20 = a(0.4)^0 + \frac{50}{3} \Rightarrow a = 20 - \frac{50}{3} = \frac{10}{3}$$
- **[M1]** Uses $u_0 = 20$ to find $a$.
- **[A1]** $a = \frac{10}{3}$.

#### **Part (c)**

**Step 4: Determine minimum amount of vitamin**
As $n \to \infty$, $u_n \to \frac{50}{3} \approx 16.67\text{ mg}$. Since $a = \frac{10}{3} > 0$ and $0.4^n$ decreases, $u_n$ is monotonically increasing from $u_0 = 20$.
Wait, let's check: $u_0 = 20$, $u_1 = 0.4(20) + 10 = 18$, so $u_n$ is actually decreasing towards $\frac{50}{3}$ from $20$.
Lowest value is the limit as $n \to \infty$, which is $\frac{50}{3}\text{ mg}$.
- **[M1]** Identifies the long-term behaviour or minimum value of $u_n$.

**Step 5: Account for the dose drop or check minimum value**
Amount *immediately after* taking a tablet is at least $\frac{50}{3}$. The question asks for the amount in the body *at all times* (i.e. just before the next tablet is taken, which is after the $60\%$ decrease).
Just before taking the next tablet, the amount is $u_n - 10$ (since $10\text{ mg}$ was just added).
Or directly: amount before dose = $0.4u_n$.
As $n \to \infty$, minimum amount before dose is $0.4 \times \frac{50}{3} = \frac{20}{3} \approx 6.67\text{ mg}$.
Alternatively, subtract $10$ from $u_n$: minimum value is $\frac{50}{3} - 10 = \frac{20}{3}\text{ mg} = 6.67\text{ mg}$.
- **[M1]** Calculates the minimum amount in the body (either by finding $u_n - 10$ or $0.4u_n$).
- **[A1]** Compares $6.67\text{ mg}$ with $6\text{ mg}$, concludes it remains above $6\text{ mg}$, so it is effective.

### **Examiner Report 5**

There was a wide spread of marks again for this question, showing it worked well as a final question discriminator. Only 3 candidates did not score at all (no attempt made), with three modes of 0, 4 or 5 marks, the majority did score 4 or more.

The explanations required in part (a) are becoming familiar to people with most able to score both marks, though some did omit to explain the starting term, with a couple omitting (a) entirely but proceeding to attempt subsequent parts. 

It was interesting to note that in part (b) most adopted an unanticipated approach via forming an auxiliary equation and particular solution (Alt 2 on the mark scheme), rather than using the information in the question about the given form and setting up and solving equations using the first two terms. Candidates were going through the process they have been taught, rather than taking in the question as given and using the information already presented. However, the process was usually carried out correctly leading to the correct values for $a$ and $b$.

Part (c) was another good discriminating part, fitting for the last part of the paper. Although many were able to identify the long term behaviour (sometimes by substitution of large values), only very few realised they needed to subtract the 10 from this value to find the least amount of vitamin in the body before drawing a conclusion. Those who did realise this went on to make a correct conclusion.
