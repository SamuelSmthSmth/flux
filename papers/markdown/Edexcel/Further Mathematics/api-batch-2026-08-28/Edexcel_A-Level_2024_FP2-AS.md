---
topic: "Groups"
subtopic: "Axioms of a group"
---
### **Question 1**

**(i)** The table below is a Cayley table for the group $G$ with operation $\circ$

$$\begin{array}{c|cccccc}
\circ & a & b & c & d & e & f \\
\hline
a & d & c & b & a & f & e \\
b & e & f & a & b & c & d \\
c & f & e & d & c & b & a \\
d & a & b & c & d & e & f \\
e & b & a & f & e & d & c \\
f & c & d & e & f & a & b
\end{array}$$

**(a)** State which element is the identity of the group. **(1)**

**(b)** Determine the inverse of the element $(b \circ c)$ **(2)**

**(c)** Give a reason why the set $\{a, b, e, f\}$ cannot be a subgroup of $G$. You must justify your answer. **(1)**

**(d)** Show that the set $\{b, d, f\}$ is a subgroup of $G$. **(2)**

**(ii)** Given that $H$ is a group with an element $x$ of order 3 and an element $y$ of order 6 satisfying

$$yx = xy^5$$

show that $y^3xy^3x^2$ is the identity element. **(3)**

**(Total 9 marks)**

### **Mark Scheme 1**

#### **Part (i)(a)**
- **[B1]** $d$

#### **Part (i)(b)**
- **[M1]** $b \circ c = a$
- **[A1]** Inverse of $a$ is $d$ (or equivalent valid deduction from Cayley table)

#### **Part (i)(c)**
- **[B1]** Either order of subgroup (4) does not divide order of group (6) by Lagrange's Theorem, or closure fails (e.g., $a \circ a = d \notin \{a, b, e, f\}$).

#### **Part (i)(d)**
- **[M1]** Constructs correct Cayley table for $\{b, d, f\}$ or checks all closure properties, inverses, and identity.
- **[A1]** Concludes fully that it is closed, $d$ is identity, and every element has an inverse in the set.

#### **Part (ii)**
- **[M1]** Uses $yx = xy^5$ appropriately to simplify expressions or substitute.
- **[M1]** Uses orders $x^3 = e$ and $y^6 = e$ (or $y^3 y^3 = e$).
- **[A1]** Fully establishes that the expression equals the identity with rigorous steps.

### **Examiner Report 1**

**(i)**
Part (a): The majority of candidates were able to identify the identity element.
Part (b): Many candidates failed to find the inverse of $b \circ c$, mistakingly thinking that $b \circ c = e$ instead of $a$. Candidates who did find $b \circ c = a$ correctly found the inverse.
Part (c): Candidates were able to explain why the set of 4 elements cannot be a subgroup of $G$. The majority said that it does not satisfy Lagrange's Theorem, with some showing that closure fails as e.g., $a \circ a = d$ is not in the set.
Part (d): To show that the set $\{b, d, f\}$ is a subgroup of $G$, candidates needed to find the Cayley table and conclude that it is closed, $b$ and $f$ are inverses and $d$ is the identity, so the subset is a subgroup. Many candidates only showed the result for a few products so were not able to prove closure and gained only 1 mark.

**(ii)**
This part was found very demanding by the majority of candidates, with many making no attempt. A few candidates scored a method mark for using the relation $yx = xy^5$ once on $y^3xy^3x^2$ but made no further progress. There were only 2 candidates who managed to successfully show that $y^3xy^3x^2$ is the identity.

---
topic: "Number Theory"
subtopic: "Modular arithmetic"
---
### **Question 2**

Tiles are sold in boxes with 21 tiles in each box.

The tiles are laid out in $x$ rows of 5 tiles and $y$ rows of 6 tiles.

All the tiles from a box are used before the next box is opened.

When all the rows of tiles have been laid, there are $n$ tiles left in the last opened box.

**(a)** Write down a congruence expression for $n$ in the form

$$ax + by \pmod{c}$$

where $a$, $b$ and $c$ are integers. **(1)**

Given that
- exactly 43 rows of tiles are laid
- there are no tiles left in the last opened box

**(b)** use your congruence expression to determine the minimum number of rows of 6 tiles laid. **(5)**

**(Total 6 marks)**

### **Mark Scheme 2**

#### **Part (a)**
- **[B1]** $n \equiv 5x + 6y \pmod{21}$ (or equivalent)

#### **Part (b)**
- **[M1]** States $x + y = 43$ and $n = 0 \implies 5x + 6y \equiv 0 \pmod{21}$ or uses $5x + 6y = 21N$ for some integer $N$.
- **[M1]** Eliminates one variable, e.g. $5(43 - y) + 6y = 21N \implies 215 + y = 21N$.
- **[M1]** Solves for $y$ in terms of $N$: $y = 21N - 215$.
- **[M1]** Considers values of $N$ to find the minimum positive integer value for $y$.
- **[A1]** $y = 10$

### **Examiner Report 2**

Candidates found this question demanding with many scoring no marks; again, many did not attempt this question.

Part (a): Candidates who did attempt this question managed to correctly write $5x + 6y \pmod{21}$.

Part (b): Candidates needed to use the fact that $x + y = 43$ and the answer to (a) to form and solve simultaneous equations. Some candidates incorrectly thought that $5x + 6y = 43$. Some candidates stopped there, but those who used $5x + 6y = 21N$ went on to successfully find the values of $x$ and $y$.

---
topic: "Matrices"
subtopic: "Eigenvalues and eigenvectors"
---
### **Question 3**

In this question you must show all stages of your working.

Solutions relying on calculator technology are not acceptable.

$$\mathbf{A} = \begin{pmatrix} 3 & k \\ -5 & 2 \end{pmatrix}$$

where $k$ is a constant.

Given that there exists a matrix $\mathbf{P}$ such that $\mathbf{P}^{-1}\mathbf{AP}$ is a diagonal matrix where

$$\mathbf{P}^{-1}\mathbf{AP} = \begin{pmatrix} 8 & 0 \\ 0 & -3 \end{pmatrix}$$

**(a)** show that $k = -6$ **(3)**

**(b)** determine a suitable matrix $\mathbf{P}$ **(4)**

**(Total 7 marks)**

### **Mark Scheme 3**

#### **Part (a)**
- **[M1]** Sets up the characteristic equation: $\det(\mathbf{A} - \lambda\mathbf{I}) = 0 \implies (3-\lambda)(2-\lambda) - (-5k) = 0$ or uses trace/determinant properties of the eigenvalues 8 and $-3$.
- **[M1]** Substitutes either $\lambda = 8$ or $\lambda = -3$ into the characteristic equation: $(3-8)(2-8) + 5k = 0 \implies (-5)(-6) + 5k = 0$.
- **[A1]** Simplifies and correctly shows $k = -6$.

#### **Part (b)**
- **[M1]** Substitutes $k = -6$ and $\lambda = 8$ into $(\mathbf{A} - \lambda\mathbf{I})\mathbf{v} = \mathbf{0}$ to find the first eigenvector.
- **[A1]** Obtains correct eigenvector for $\lambda = 8$, e.g., $\begin{pmatrix} 6 \\ -5 \end{pmatrix}$ (or equivalent scalar multiple).
- **[M1]** Substitutes $k = -6$ and $\lambda = -3$ to find the second eigenvector.
- **[A1]** Obtains correct matrix $\mathbf{P}$, e.g., $\mathbf{P} = \begin{pmatrix} 6 & 1 \\ -5 & 1 \end{pmatrix}$ (matching the order of eigenvalues in the diagonal matrix).

### **Examiner Report 3**

There were a few blank attempts, but many candidates found this question accessible and scored full marks.

Part (a): Candidates who deduced that the eigenvalues are $-3$ and $8$ then found the characteristic equation to successfully show that $k = -6$. A few candidates found the characteristic equation but did not deduce the eigenvalues.

Part (b): It was pleasing that of the few candidates who attempted part (a) did go on to successfully use $k = -6$ and found the eigenvectors and matrix $\mathbf{P}$. There was the occasional sign slip, but those that attempted this part did so successfully.

---
topic: "Complex Numbers"
subtopic: "Loci in the Argand diagram"
---
### **Question 4**

A circle $C$ in the complex plane has equation

$$|z - (-3 + 3\text{i})| = \alpha|z - (1 + \text{i})|$$

where $\alpha$ is a real constant with $\alpha > 1$

Given that the imaginary axis is a tangent to $C$

**(a)** sketch, on an Argand diagram, the circle $C$ **(2)**

**(b)** explain why the value of $\alpha$ is 3 **(1)**

The circle $C$ is contained in the region

$$R = \{z \in \mathbb{C} : \beta \le \arg z \le \frac{\pi}{2}\}$$

**(c)** Determine the maximum value of $\beta$

Give your answer in radians to 3 significant figures. **(6)**

**(Total 9 marks)**

### **Mark Scheme 4**

#### **Part (a)**
- **[M1]** Sketches a circle with the correct relative position (in the first quadrant touching the imaginary axis).
- **[A1]** Fully correct sketch with appropriate labels or indication of the circle in the correct region.

#### **Part (b)**
- **[B1]** Uses coordinates of Apollonius circle diameter endpoints or radius and centre relationship to deduce $\alpha = 3$.

#### **Part (c)**
- **[M1]** Determines the centre and radius of the circle $C$. Centre is $(3, 2)$ and radius is 3 (or equivalent).
- **[M1]** Identifies that the maximum value of $\beta$ corresponds to the line from the origin that is tangent to the circle $C$.
- **[M1]** Uses right-angled triangle trigonometry involving the centre $(3, 2)$, the origin $(0,0)$, and the radius 3.
- **[M1]** Calculates the angle of the line to the centre: $\arctan\left(\frac{2}{3}\right)$ or similar.
- **[M1]** Accounts for the right-angled triangle formed by the radius and tangent: $\sin(\theta) = \frac{r}{d} = \frac{3}{\sqrt{3^2 + 2^2}} = \frac{3}{\sqrt{13}}$.
- **[A1]** Correct final value for $\beta$ to 3 s.f., $\beta = 0.233$ (or $0.2325\dots$).

### **Examiner Report 4**

Candidates found this question demanding with unfortunately many scoring no marks.

Part (a): It was interesting to see many candidates draw circles where the imaginary axis was not a tangent, as stated in the question, scoring no mark. Some candidates did manage to draw a circle with the imaginary axis as a tangent but drew it with the centre in the second quadrant, scoring one mark. Only a few candidates scored both marks for the centre in the first quadrant. The correct position of the circle was needed to successfully answer part (c), so many candidates found this question demanding.

Part (b): Only one candidate was able to explain why the value of $\alpha$ is 3.

Part (c): Candidates needed to have a circle in the correct position, so not many candidates were able to score any marks in this part. Finding the centre and radius of the circle was the starting point, with a few candidates managing to score some marks. Finding the correct angle then proved more difficult.

---
topic: "Sequences and Series"
subtopic: "Recurrence relations"
---
### **Question 5**

**Figure 1** _(The first three stages of a square-fractal-like pattern starting with a single square, then replacing each square with 5 smaller squares of 1/9th the area in the corners and centre, then removing the square immediately to the right and above the centre square)._

```tikz
\begin{tikzpicture}
  % Placeholder for Figure 1 showing three stages of the recursive square pattern
  \draw[thick] (0,0) rectangle (1.2,1.2);
  \node at (0.6,-0.4) {Stage 1};
  
  \begin{shift}{({2.5,0})}
    \draw (0,0) rectangle (0.4,0.4);
    \draw (0.8,0) rectangle (1.2,0.4);
    \draw (0.4,0.4) rectangle (0.8,0.8);
    \draw (0,0.8) rectangle (0.4,1.2);
    \draw (0.8,0.8) rectangle (1.2,1.2);
    \node at (0.6,-0.4) {Stage 2};
  \end{shift}
\end{tikzpicture}
```

Figure 1 shows the first three stages of a pattern that is created by a recursive process.

The process starts with a square and proceeds as follows
- each square is replaced by 5 smaller squares each $\frac{1}{9}\text{th}$ the size of the square being replaced
- the 5 smaller squares are the ones in each corner and the one in the centre
- once each of the squares has been replaced, the square immediately to the right and above the centre square of the pattern is then removed

Let $u_n$ be the number of squares in the pattern in stage $n$, where stage 1 is the original square.

**(a)** Explain why $u_n$ satisfies the recurrence system

$$u_1 = 1, \quad u_{n+1} = 5u_n - 1 \quad (n = 1, 2, 3, \dots)$$ **(2)**

**(b)** Solve this recurrence system. **(5)**

Given that the initial square has area 25

**(c)** determine the total area of all the squares in stage 8 of the pattern, giving your answer to 2 significant figures. **(2)**

**(Total 9 marks)**

### **Mark Scheme 5**

#### **Part (a)**
- **[M1]** Explains that each square is replaced by 5 smaller squares (giving $5u_n$) or notes initial condition $u_1 = 1$.
- **[A1]** Explains the subtraction of 1 due to the removal of the specific square, fully justifying $u_{n+1} = 5u_n - 1$ with $u_1 = 1$.

#### **Part (b)**
- **[M1]** Forms and solves the auxiliary equation for the homogeneous part: $r - 5 = 0 \implies r = 5$, giving complementary function $A(5^n)$.
- **[M1]** Uses a constant particular solution, e.g., $u_n = k$.
- **[A1]** Substitutes to find $k = \frac{1}{4}$ (or uses method of undetermined coefficients correctly to find particular solution $\frac{1}{4}$).
- **[M1]** Uses the initial condition $u_1 = 1$ to find the constant in the complementary function: $1 = 5A + \frac{1}{4} \implies A = \frac{3}{20}$.
- **[A1]** Obtains fully correct general solution: $u_n = \frac{3}{20}(5^n) + \frac{1}{4}$ (or equivalent).

#### **Part (c)**
- **[M1]** Evaluates $u_8$ and multiplies by $25 \times \left(\frac{1}{9}\right)^7$ (or equivalent scaling based on stage 8 area reduction).
- **[A1]** Obtains $0.18$ (or $0.179\dots$) to 2 significant figures.

### **Examiner Report 5**

Candidates found part (b) solving the recurrence relation accessible, but struggled to gain all the marks for explaining the recurrence relation. There were again some blank scripts.

Part (a): Candidates needed to explain two out of three: initially there is one square so $u_1 = 1$; each square is replaced by 5 smaller squares, so $u_{n+1} = 5u_n$; one of the squares is then removed. To score the final mark, candidates needed to explain all three and state $u_{n+1} = 5u_n - 1$, which some didn't.

Part (b): Most candidates solved the auxiliary equation and stated the correct complementary function. They knew the form for the particular solution and found it correctly. Some lost the final mark as they gave their answer as $u_n = \frac{3}{20} \times 5^n + \frac{1}{4}$ incorrectly written or manipulated, or similar slip.

Part (c): Only a handful of candidates scored any marks; to score the method mark they needed to find $u_8$ and multiply by $25 \times 3^{-k}$ or $25 \times 9^{-k}$ where $k$ is 7, 8 or 9. Some forgot the 25 or $9^{-k}$. Only four candidates scored any marks.
