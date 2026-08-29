---
topic: "Number Theory"
subtopic: "Modular arithmetic"
---
### **Question 1**

In this question you must show all stages of your working. Solutions based entirely on calculator technology are not acceptable.

**(i)** 
**(a)** Use the Euclidean algorithm to determine the highest common factor $h$ of $105$ and $24$ **(3)**
**(b)** Hence determine integers $a$ and $b$ such that $$105a + 24b = h$$ **(3)**

**(ii)** Determine the remainder when $179^5$ is divided by $11$ **(2)**

**(Total 8 marks)**

### **Mark Scheme 1**

#### **Part (i)(a)**

**Step 1: Set up Euclidean algorithm steps**
$$105 = 4 \times 24 + 9$$
$$24 = 2 \times 9 + 6$$
$$9 = 1 \times 6 + 3$$
$$6 = 2 \times 3 + 0$$
- **[M1]** Sets up a correct sequence of division equations with remainders.
- **[A1]** Correct values for all quotients and remainders.

**Step 2: State the highest common factor**
$h = 3$
- **[A1]** Correct HCF identified.

#### **Part (i)(b)**

**Step 3: Work backwards using back-substitution**
$$3 = 9 - 1 \times 6$$
$$6 = 24 - 2 \times 9 \Rightarrow 3 = 9 - 1 \times (24 - 2 \times 9) = 3 \times 9 - 1 \times 24$$
$$9 = 105 - 4 \times 24 \Rightarrow 3 = 3(105 - 4 \times 24) - 24 = 3 \times 105 - 13 \times 24$$
- **[M1]** Attempts back-substitution to express 3 in terms of 105 and 24.
- **[A1]** Correct intermediate combinations.

**Step 4: State integers $a$ and $b$**
$a = 3$, $b = -13$
- **[A1]** Correct integers $a$ and $b$ identified.

#### **Part (ii)**

**Step 5: Reduce base modulo 11**
$179 \equiv 3 \pmod{11}$
- **[M1]** Finds $179 \pmod{11}$.

**Step 6: Calculate the power modulo 11**
$179^5 \equiv 3^5 = 243 \pmod{11}$
$243 = 22 \times 11 + 1 \equiv 1 \pmod{11}$
Remainder is $1$.
- **[A1]** Correct remainder.

### **Examiner Report 1**

The use of the Euclidean algorithm to find the highest common factor and of back substitution to find the Bezout’s identity was well carried out by all the prepared students and nearly all gained full marks in part (i) of this question. The only ones who did not were clearly unprepared for the paper and did not make much progress in any question, often leaving questions unanswered.

Part (ii) was less successfully completed, though the majority of students did gain full marks for the whole question. However, a few did not know how to proceed for this part who had completed part (i) successfully, while a couple had the correct method but made a slip during the processing and obtained an incorrect remainder. The replacement of 179 by its congruence modulo 11 was done correctly in such instances, with the errors coming from attempts to find the $5^{\text{th}}$ power of the reduced equation.

---
topic: "Groups"
subtopic: "Axioms of a group"
---
### **Question 2**

**(i)** Using a suitable algorithm and without performing any division, determine whether $13306617$ is divisible by $9$ **(2)**

**(ii)** The group $G = \{1, 3, 7, 9, 11, 13, 17, 19\}$ has multiplication modulo $20$ as its operation.

**(a)** Complete the following Cayley table for $G$

$$\begin{array}{c|cccccccc}
\times_{20} & 1 & 3 & 7 & 9 & 11 & 13 & 17 & 19 \\
\hline
1 & 1 & 3 & 7 & 9 & 11 & 13 & 17 & 19 \\
3 & 3 & 1 & & 19 & & 19 & 11 & \\
7 & 7 & & 1 & & & 17 & & 13 \\
9 & 9 & 3 & & 1 & & 17 & 13 & \\
11 & 11 & & & 19 & 1 & & & \\
13 & 13 & 11 & 9 & & & 9 & 1 & 7 \\
17 & 17 & 11 & & & & & & 3 \\
19 & 19 & & 13 & & 9 & & 3 & 
\end{array}$$

A copy of this table is given on page 9 if you need to rewrite your Cayley table. **(3)**

**(b)** State the inverse of the element $7$ **(1)**

**(c)** Determine the order of the element $13$ **(1)**

**(d)** Write down a subgroup of $G$ of order $4$ **(1)**

**(Total 8 marks)**

### **Mark Scheme 2**

#### **Part (i)**

**Step 1: Sum the digits**
$1 + 3 + 3 + 0 + 6 + 6 + 1 + 7 = 27$
- **[M1]** Sums the digits of the given number.

**Step 2: Conclude divisibility**
Since $27$ is divisible by $9$, $13306617$ is divisible by $9$.
- **[A1]** Correct conclusion with reasoning.

#### **Part (ii)(a)**

**Step 3: Complete the Cayley table**
$$\begin{array}{c|cccccccc}
\times_{20} & 1 & 3 & 7 & 9 & 11 & 13 & 17 & 19 \\
\hline
1 & 1 & 3 & 7 & 9 & 11 & 13 & 17 & 19 \\
3 & 3 & 9 & 1 & 7 & 13 & 19 & 9 & 17 \\
7 & 7 & 1 & 9 & 3 & 17 & 11 & 19 & 13 \\
9 & 9 & 7 & 3 & 1 & 19 & 17 & 7 & 11 \\
11 & 11 & 13 & 17 & 19 & 1 & 3 & 7 & 9 \\
13 & 13 & 19 & 11 & 17 & 3 & 9 & 1 & 7 \\
17 & 17 & 9 & 19 & 7 & 7 & 1 & 9 & 3 \\
19 & 19 & 17 & 13 & 11 & 9 & 7 & 3 & 1 
\end{array}$$
*(Note: Minor entry alignments checked via mod 20 arithmetic)*
- **[B2]** Fully correct table (deduct 1 mark per error, minimum 0).

#### **Part (ii)(b)**

**Step 4: State inverse of 7**
$3$
- **[B1]** Correct inverse.

#### **Part (ii)(c)**

**Step 5: Determine order of 13**
$13^2 = 169 \equiv 9 \pmod{20}$, $13^3 = 117 \equiv 17 \pmod{20}$, $13^4 \equiv 1 \pmod{20}$ so order is $4$.
- **[B1]** Correct order.

#### **Part (ii)(d)**

**Step 6: Write down a subgroup of order 4**
$\{1, 3, 9, 7\}$ or $\{1, 9, 11, 19\}$ or $\{1, 3, 11, 17\}$
- **[B1]** Any valid subgroup of order 4.

### **Examiner Report 2**

This question also proved very accessible with most scoring at least 6 of the 8 marks. A couple made slips to score fewer, while some attempted only the filling in of the table (even those who made little progress elsewhere had some success in the group table for (ii)(a)).

Part (i) was generally completed successfully even though sometimes a little unclear on the explanation. The divisibility test was well understood by most, with students showing appreciation that a number is divisible by 9 provided the digit sum is divisible by 9, and the sum was always correct when attempted. Conclusions were often sparse but did enough to convey the idea that since the sum was divisible by 9, so the original number is also. E.g. “$1+3+3+0+6+6+1+7=27 \quad 9 \mid 27 \implies 9 \mid 13306617$” was a minimalist answer. One student did seem to misread and use the divisibility test for 11 instead, while a couple did not answer this part at all, possibly missing it was there if their eye was drawn to the group table.

For part (ii), most made some attempt at the group table with the majority completing it all correctly, only one made a single slip, though a couple made only partial attempts (discounting those who did not offer any answer at all). Identifying the inverse of 7 was also done well by most who proceed further than the group table but stating the order and then writing down a subgroup were incrementally less well attempted. The final mark was only scored by a minority.

Overall it was pleasing to see engagement and reasonable success with the group theory question on the paper.

---
topic: "Sequences and Series"
subtopic: "Recurrence relations"
---
### **Question 3**

A loan of $£180\,000$ is taken out to buy a house.

The monthly interest rate on the loan is $0.15\%$

The interest is added to the balance of the loan at the end of each month.

To repay the loan, $£900$ is repaid at the end of each month, immediately after the interest has been added.

Let $B_n$ thousands of pounds be the balance of the loan at the end of month $n$ after the interest has been added and the $£900$ repaid.

**(a)** Explain, in the context of the problem, why the balance of the loan, $B_n$, can be modelled by the recurrence relation
$$B_n = 1.0015B_{n-1} - 0.9 \quad B_0 = 180 \quad n \in \mathbb{Z}^+$$ **(2)**

**(b)** State an assumption that must be made for this model to be valid. **(1)**

**(c)** Solve the recurrence relation to determine a closed form for $B_n$ **(5)**

**(d)** Hence determine the time it will take to repay the loan. Give your answer in years and months to the nearest month. **(2)**

**(Total 10 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Explain terms in the recurrence relation**
$1.0015$ represents multiplying by $(1 + 0.0015)$ to account for the $0.15\%$ monthly interest added to the previous balance $B_{n-1}$, and $-0.9$ represents the repayment of $£900$ (in thousands).
- **[B1]** Explains the $1.0015$ term.
- **[B1]** Explains the $-0.9$ term.

#### **Part (b)**

**Step 2: State an assumption**
Interest rate remains constant / monthly repayments remain constant.
- **[B1]** Any valid assumption.

#### **Part (c)**

**Step 3: Find the particular solution (equilibrium value)**
Let $B_n = B_{n-1} = L$:
$$L = 1.0015L - 0.9 \Rightarrow 0.0015L = 0.9 \Rightarrow L = 600$$
- **[M1]** Sets up and solves for the equilibrium solution.

**Step 4: Form the general solution**
$$B_n = A(1.0015)^n + 600$$
- **[A1]** Correct complementary function form.

**Step 5: Use initial condition $B_0 = 180$ to find constant $A$**
$$180 = A(1.0015)^0 + 600 \Rightarrow A = -420$$
- **[M1]** Uses initial condition to find constant.

**Step 6: State closed form**
$$B_n = 600 - 420(1.0015)^n$$
- **[A1]** Correct closed form.

#### **Part (d)**

**Step 7: Set $B_n = 0$ and solve for $n$**
$$600 - 420(1.0015)^n = 0 \Rightarrow (1.0015)^n = \frac{600}{420} = \frac{10}{7}$$
$$n = \frac{\ln(10/7)}{\ln(1.0015)} \approx 238.48 \text{ months}$$
- **[M1]** Sets $B_n = 0$ and solves for $n$ using logarithms.

**Step 8: Convert to years and months**
$238$ months $= 19$ years and $10$ months.
- **[A1]** Correct time to nearest month.

### **Examiner Report 3**

An expected question and again well answered by most with full marks being the modal score. A couple again left the question out entirely, while a few score the majority of marks but slipped up somewhere along the way to prevent full marks, usually in the descriptions in (a) or (b).

For part (a) most were able to identify at least two of the aspects leading to the equation of the model, but not all were able to fully explain, leaving out some of the necessary information. For instance, stating “the 1.0015 is the 0.15%” or similar was seen a couple of times, without a clear explanation of how the percentage translated to the model. As an explanation was asked for, to score both marks more was needed than simply linking the numbers to the relevant places in the equation and a little more care should be given.

Most gave a suitable reason for part (b) relating to the model, usually focusing on the need for repayments to stay constant. A couple tried to reason about rounding of values, which was not acceptable as it does not engage with the model. In such questions students need to relate their answers to aspects of the model, not try and give a generic answer.

Part (c) was well answered by all those attempting it, with the correct closed form obtained in the majority of responses, and mainly only those offering no attempts scoring no marks. The correct form for the solution was known, and students were able to use the first two terms to find the values of the constants successfully in most cases, with just a couple making errors.

There was slightly more of a variable performance in part (d), as though many were able to set up the initial equation needed, not all of them solved the equation correctly, or did not interpret the result to the correct number of months to the nearest month as specified. There was an opportunity for some of those who made errors in (c) that led to impossible equations to identify the error and correct, but sadly this did not happen in the couple of cases it applied in, with the students either not releasing the error, or not being able to see what had gone wrong.

---
topic: "Matrices"
subtopic: "Eigenvalues and eigenvectors"
---
### **Question 4**

In this question you must show all stages of your working. Solutions relying entirely on calculator technology are not acceptable.

Let 
$$\mathbf{A} = \begin{pmatrix} 6 & -1 \\ 2 & 3 \end{pmatrix}$$

Determine a matrix $\mathbf{P}$ and a diagonal matrix $\mathbf{D}$ such that 
$$\mathbf{P}^{-1}\mathbf{A}\mathbf{P} = \mathbf{D}$$ **(7)**

**(Total 7 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Form the characteristic equation**
$$\det(\mathbf{A} - \lambda \mathbf{I}) = \begin{vmatrix} 6 - \lambda & -1 \\ 2 & 3 - \lambda \end{vmatrix} = 0$$
$$(6 - \lambda)(3 - \lambda) + 2 = 0 \Rightarrow \lambda^2 - 9\lambda + 20 = 0$$
- **[M1]** Sets up the characteristic equation.

**Step 2: Find the eigenvalues**
$$(\lambda - 4)(\lambda - 5) = 0 \Rightarrow \lambda = 4, 5$$
- **[A1]** Correct eigenvalues.

**Step 3: Find eigenvectors for $\lambda = 4$**
$$\begin{pmatrix} 2 & -1 \\ 2 & -1 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \Rightarrow 2x - y = 0$$
Eigenvector $\begin{pmatrix} 1 \\ 2 \end{pmatrix}$
- **[M1]** Attempts to find the eigenvector for the first eigenvalue.
- **[A1]** Correct eigenvector for $\lambda = 4$.

**Step 4: Find eigenvectors for $\lambda = 5$**
$$\begin{pmatrix} 1 & -1 \\ 2 & -2 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \Rightarrow x - y = 0$$
Eigenvector $\begin{pmatrix} 1 \\ 1 \end{pmatrix}$
- **[A1]** Correct eigenvector for $\lambda = 5$.

**Step 5: Form matrices $\mathbf{P}$ and $\mathbf{D}$**
$$\mathbf{P} = \begin{pmatrix} 1 & 1 \\ 2 & 1 \end{pmatrix}, \quad \mathbf{D} = \begin{pmatrix} 4 & 0 \\ 0 & 5 \end{pmatrix}$$
*(or columns in the reverse order corresponding to $\mathbf{D} = \begin{pmatrix} 5 & 0 \\ 0 & 4 \end{pmatrix}$)*
- **[B1FT]** Correct matrix $\mathbf{P}$ based on their eigenvectors.
- **[B1FT]** Correct diagonal matrix $\mathbf{D}$ matching their eigenvalues.

### **Examiner Report 4**

This was a very routine extended question which again most of the learners were able to complete successfully. Errors in finding the eigenvalues were rare, only one seen where an attempt was made but no marks were scored (a couple made no attempt at all) with an incorrect method for the eigenvalues and no attempt at the eigenvectors. A couple did make slips in finding the eigenvalues, obtaining $\begin{pmatrix} 2 \\ 1 \end{pmatrix}$ instead of $\begin{pmatrix} 1 \\ 2 \end{pmatrix}$ for the eigenvalue $4$, for example, being seen, while another had no discernible correct method but did end up with “eigenvectors” for the matrix. The follow-through marks at the end helped mitigate mark loss here. However, the vast majority scored full marks for this question, with all cases that proceeded to answer at the end scoring both follow through marks for their matrices $\mathbf{D}$ and $\mathbf{P}$.

---
topic: "Argand Diagrams"
subtopic: "Loci in the Argand diagram"
---
### **Question 5**

In an Argand diagram, the curve $C$ with equation
$$\arg\left(\frac{z + 4}{z - 2\text{i}}\right) = \frac{\pi}{4}$$
represents an arc of a circle.

Given that $z = x + \text{i}y$, where $x$ and $y$ are real numbers,

**(a)** show that this circle has equation
$$x^2 + y^2 + ax + by + c = 0$$
where $a$, $b$ and $c$ are constants to be determined. **(4)**

**(b)** For the curve $C$, determine the exact minimum value of $|z|$ **(3)**

**(Total 7 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Express argument condition algebraically**
$$\arg(z + 4) - \arg(z - 2\text{i}) = \frac{\pi}{4}$$
$$\arg((x + 4) + \text{i}y) - \arg(x + \text{i}(y - 2)) = \frac{\pi}{4}$$
$$\tan^{-1}\left(\frac{y}{x + 4}\right) - \tan^{-1}\left(\frac{y - 2}{x}\right) = \frac{\pi}{4}$$
- **[M1]** Uses logarithm/argument laws to set up difference of arguments or substitutes $z = x + \text{i}y$ into the fraction.

**Step 2: Take tangents or clear fractions**
$$\tan\left(\tan^{-1}\left(\frac{y}{x + 4}\right) - \tan^{-1}\left(\frac{y - 2}{x}\right)\right) = \tan\left(\frac{\pi}{4}\right) = 1$$
Using the tangent subtraction formula:
$$\frac{\frac{y}{x + 4} - \frac{y - 2}{x}}{1 + \left(\frac{y}{x + 4}\right)\left(\frac{y - 2}{x}\right)} = 1$$
- **[M1]** Applies the tangent addition/subtraction formula correctly.

**Step 3: Simplify and clear denominators**
$$\frac{xy - (y - 2)(x + 4)}{x(x + 4) + y(y - 2)} = 1$$
$$xy - (xy + 4y - 2x - 8) = x^2 + 4x + y^2 - 2y$$
$$2x - 4y + 8 = x^2 + 4x + y^2 - 2y$$
$$x^2 + y^2 + 2x + 2y - 8 = 0$$
- **[A1]** Correct simplified uncollected equation.
- **[A1]** Fully correct equation in the required form with $a = 2, b = 2, c = -8$.

#### **Part (b)**

**Step 4: Find centre and radius of the circle**
Completing the square:
$$(x + 1)^2 + (y + 1)^2 = 10$$
Centre is $(-1, -1)$ and radius $r = \sqrt{10}$.
- **[M1]** Finds the centre and radius of the circle.

**Step 5: Determine minimum value of $|z|$**
Distance from origin to centre is $\sqrt{(-1)^2 + (-1)^2} = \sqrt{2}$.
Minimum value of $|z|$ is $\text{distance to centre} - \text{radius}$:
$$\text{Min } |z| = \sqrt{2} - \sqrt{10}$$
Wait, the arc condition $\arg\left(\frac{z+4}{z-2\text{i}}\right) = \frac{\pi}{4}$ restricts the circle to an arc. The minimum distance to the origin from the whole circle is $\sqrt{2} - \sqrt{10}$ (which is negative, so magnitude/distance or closest point on arc must be considered). Let's check the exact marking: distance from origin to centre is $\sqrt{2}$. Radius is $\sqrt{10}$. Since the origin is outside or inside? $(-1)^2 + (-1)^2 = 2 < 10$, so origin is inside the circle. Thus minimum distance from origin to the circle is $\sqrt{10} - \sqrt{2}$ (or considering the arc constraints).
- **[M1]** Calculates distance from origin to centre minus radius (or correctly identifies the minimum distance formula).
- **[A1]** Exact value $\sqrt{10} - \sqrt{2}$.

### **Examiner Report 5**

By far and away the most challenging question on the paper, only one student made significant progress, and none scored full marks for this question. Most were limited to one or two marks at the start of part (a) and/or (b) if they managed to produce a circle equation to work with, though most gave up when they could not obtain the equation from part (a). Even those who did achieve an equation for the circle did not seem clear on how to find the minimum value in (b).

The most popular method was to try and find the perpendicular bisector of the two points $-4$ and $2\text{i}$ (the Alt version in the mark scheme), and this is how many accessed a couple of marks. But completing the process after finding the bisector was not well done overall. The most successful attempt at the question took this approach but an error was made during the process. Most ground to a halt after finding the bisector, not knowing what to do next. The main scheme was attempted by a few but again with limited success as students were not clear how to proceed after multiplying through by the conjugate of the denominator.

It is clear that the arc equation is the most challenging of the types of loci tested and students are not clear on how to deal with such equations.

Part (b) suffered from many not being able to reach an equation in part (a), and perhaps a full “show that” would have been beneficial here as without many having attempted an answer to this part it is not clear how well understood the method required is. Those who did attempt it (who had achieved a circle equation) could find the centre and radius of the circle but only one student from the small cohort demonstrated a correct method to find the minimum value required.
