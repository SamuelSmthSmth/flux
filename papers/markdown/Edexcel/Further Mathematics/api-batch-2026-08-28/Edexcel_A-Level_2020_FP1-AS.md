---
topic: "Numerical Methods"
subtopic: "Solving first-order differential equations"
---
### **Question 1**

The variables $x$ and $y$ satisfy the differential equation
$$\frac{d^2y}{dx^2} = 2y^2 - x - 1$$
where $\frac{dy}{dx} = 3$ and $y = 0$ at $x = 0$.

Use the approximations
$$\left(\frac{d^2y}{dx^2}\right)_n \approx \frac{y_{n+1} - 2y_n + y_{n-1}}{h^2} \quad \text{and} \quad \left(\frac{dy}{dx}\right)_n \approx \frac{y_{n+1} - y_{n-1}}{2h}$$
with $h = 0.1$ to find an estimate for the value of $y$ at $x = 0.2$. **(7)**

---
topic: "Inequalities"
subtopic: "Algebraic methods"
---
### **Question 2**

Use algebra to determine the values of $x$ for which
$$\frac{x+1}{2x^2 + 5x - 3} > \frac{x}{4x^2 - 1}$$
**(5)**

---
topic: "Trigonometric Identities and Equations"
subtopic: "Trigonometric identities"
---
### **Question 3**

**(i)** Use the substitution $t = \tan\left(\frac{x}{2}\right)$ to prove that
$$\cot x + \tan\left(\frac{x}{2}\right) = \csc x, \quad x \neq n\pi, \, n \in \mathbb{Z}$$
**(2)**

**(ii)** 

**Figure 1** _(A sketch of a wind turbine showing blade height $H$ metres above ground)_

```tikz
\begin{tikzpicture}[scale=0.8]
  \draw[thick] (0,0) -- (4,0);
  \draw[thick] (2,0) -- (2,3.5);
  \fill[gray!40] (1.7,-0.2) rectangle (2.3,0);
  \draw[thick, fill=white] (2,3.5) circle (0.3);
  \draw[thick] (2,3.5) -- (2,4.5);
  \draw[thick] (2,3.5) -- (1.2,2.9);
  \draw[thick] (2,3.5) -- (2.8,2.9);
  \draw[<->] (2.8,0) -- (2.8,4.5) node[midway, right] {$H \text{ metres}$};
\end{tikzpicture}
```

An engineer models the vertical height above the ground of the tip of one blade of a wind turbine, shown in Figure 1. The ground is assumed to be horizontal.

The vertical height of the tip of the blade above the ground, $H$ metres, at time $x$ seconds after the wind turbine has reached its constant operating speed, is modelled by the equation
$$H = 90 - 30\cos(120x)^\circ - 40\sin(120x)^\circ \quad \text{(I)}$$

**(a)** Show that $H = 60$ when $x = 0$. **(1)**

Using the substitution $t = \tan(60x)^\circ$

**(b)** show that equation (I) can be rewritten as
$$H = \frac{120t^2 - 80t + 60}{1 + t^2}$$
**(3)**

**(c)** Hence find, according to the model, the value of $x$ when the tip of the blade is $100\text{ m}$ above the ground for the first time after the wind turbine has reached its constant operating speed. **(5)**

**(Total 11 marks)**

---
topic: "Conic Sections 1"
subtopic: "Parabolas"
---
### **Question 4**

**Figure 2** _(A sketch of the parabola $C$ with equation $y^2 = 4ax$ showing its focus $S$ and point $P(ap^2, 2ap)$)_

```tikz
\begin{tikzpicture}[scale=0.9]
  \draw[->] (-1,0) -- (4,0) node[below] {$x$};
  \draw[->] (0,-2.5) -- (0,2.5) node[left] {$y$};
  \draw[domain=0:3, smooth, thick] plot ({\x*\x/3}, {\x});
  \draw[domain=0:3, smooth, thick] plot ({\x*\x/3}, {-\x});
  \node at (0.5, 0.2) {$S$};
  \fill (0.75,0) circle (1.5pt);
  \fill (2.1, 1.8) circle (1.5pt) node[above right] {$P$};
  \node at (2.5, -1.8) {$C$};
  \node at (-0.3, -0.3) {$O$};
\end{tikzpicture}
```

Figure 2 shows a sketch of the parabola $C$ with equation $y^2 = 4ax$, where $a$ is a positive constant. The point $S$ is the focus of $C$ and the point $P(ap^2, 2ap)$ lies on $C$ where $p > 0$.

**(a)** Write down the coordinates of $S$. **(1)**

**(b)** Write down the length of $SP$ in terms of $a$ and $p$. **(1)**

The point $Q(aq^2, 2aq)$, where $p \neq q$, also lies on $C$.
The point $M$ is the midpoint of $PQ$.

Given that $pq = -1$

**(c)** prove that, as $P$ varies, the locus of $M$ has equation
$$y^2 = 2a(x - a)$$
**(5)**

**(Total 7 marks)**

---
topic: "Vectors"
subtopic: "Application to mechanics"
---
### **Question 5**

**Figure 3** _(A solid display stand with parallel triangular faces $ABC$ and $DEF$, where triangle $DEF$ is similar to triangle $ABC$)_

```tikz
\begin{tikzpicture}[scale=0.9]
  \coordinate (A) at (0,0);
  \coordinate (B) at (2,1.2);
  \coordinate (C) at (5,0.3);
  \coordinate (D) at (1.5,3);
  \coordinate (E) at (2.8,3.5);
  \coordinate (F) at (4.2,2.8);

  \draw[thick] (A) -- (B) -- (C) -- cycle;
  \draw[thick] (D) -- (E) -- (F) -- cycle;
  \draw[thick] (A) -- (D);
  \draw[thick, dashed] (B) -- (E);
  \draw[thick] (C) -- (F);

  \node[below left] at (A) {$A$};
  \node[above] at (B) {$B$};
  \node[right] at (C) {$C$};
  \node[above] at (D) {$D$};
  \node[above] at (E) {$E$};
  \node[above right] at (F) {$F$};
\end{tikzpicture}
```

Figure 3 shows a solid display stand with parallel triangular faces $ABC$ and $DEF$. Triangle $DEF$ is similar to triangle $ABC$.

With respect to a fixed origin $O$, the points $A$, $B$ and $C$ have coordinates $(3, -3, 1)$, $(-5, 3, 3)$ and $(1, 7, 5)$ respectively and the points $D$, $E$ and $F$ have coordinates $(2, -1, 8)$, $(-2, 2, 9)$ and $(1, 4, 10)$ respectively. The units are in centimetres.

**(a)** Show that the area of the triangular face $DEF$ is $\frac{1}{2}\sqrt{339}\text{ cm}^2$. **(3)**

**(b)** Find, in $\text{cm}^3$, the exact volume of the display stand. **(7)**

**(Total 10 marks)**

---
### **Examiner Report 1**

With only 17 entries, there were very few candidates who chose to sit this optional paper. Performance was variable. Some candidates had obviously prepared well for this assessment and scored full marks on many of the questions. Others struggled to make any significant progress and there were a large number of blank responses to questions. Question 4 and part (b) of question 5 proved to be the most demanding. Question 3 was the most accessible.

**Question 1**

Candidates who attempted this question could at least make a start by finding the value of the second derivative using the given differential equation. Some then went on to use both approximations and realised they needed to solve the resulting simultaneous equations to make progress. 4 candidates scored full marks and 6 candidates made no attempt at this question.

**Question 2**

All candidates apart from one made an attempt at this question. Success was variable and 5 candidates failed to score any marks as they simply multiplied up to eliminate the fractions with no consideration of sign. Others knew to multiply through by positive expressions but chose to expand to obtain a large number of terms rather than factorise where possible. This inevitably led to long complicated expressions that were difficult to make any headway with, to obtain the required critical values. 3 candidates scored full marks on this question.

**Question 3**

All candidates made an attempt at this question and success was variable, giving a full range of marks with 5 candidates scoring full marks. Part (i) was an easy source of marks for those who could recall the t-formulae. In (ii) part (a), several candidates spent time attempting to solve the equation when $H = 60$ when all that was required was the substitution of $x = 0$ to establish $H = 60$. Candidates should be aware that 1 mark would imply that minimal working was required. Most candidates could make a start with part (b) although there were a significant number of algebraic errors, particularly with signs when combining the fractions. Most candidates could reach the required quadratic equation in $t$ in part (c), but then failed to realise that they needed to then solve for $60x$ and forfeited the final 3 marks.

**Question 4**

There were no candidates who made any significant progress with this question. In part (a), only 9 candidates could identify the coordinates of the focus despite the fact that this is given in the formula book. In part (b), many candidates made poor attempts using Pythagoras’ theorem to prove the result, with many algebraic errors evident. There were no candidates who appeared to be aware of the focus-directrix property of the parabola. Part (c) was met with little success and the only mark scored was that for the coordinates for the mid-point.

**Question 5**

Part (a) was answered well by the majority of candidates. The application of the vector product was well known although some candidates reverted to trigonometric methods such as the cosine rule to find one of the angles and then went on to find the area. Such methods often lost the final mark for not working in exact terms to convincingly prove the given result. In part (b) there were no candidates who adopted the anticipated strategies for finding the volume of the display stand. Of those who did score marks in this part, all but one treated the solid as a tetrahedron and used 3 of the vertices to attempt the vector triple product. These candidates were credited with this approach with 2 marks and was interpreted as an attempt to find the volume of at least part of the solid. One candidate made significant progress by splitting the solid into several tetrahedra and finding the volume of each one before adding them up. The strategy was sound and was only spoilt by arithmetic errors along the way.
