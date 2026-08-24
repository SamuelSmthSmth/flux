---
topic: "Algebraic Methods"
subtopic: "Proof by contradiction"
---

### Question 4

_In this question you may assume that $\sqrt{p}$ is irrational for any prime number $p$._

**(a)** Use proof by contradiction to show that there is no rational number $a$ and integer $b$ for which

$$\sqrt{5} = a + b\sqrt{7}$$

**(5)**

**(b)** Hence prove that $\sqrt{5} + \sqrt{7}$ is not a rational number. **(2)**

**(+S1)**

### Mark Scheme

#### **Part (a)**

**Step 1: Set up the contradiction**

Suppose there is such a rational number $a$ and integer $b$ such that $\sqrt{5} = a + b\sqrt{7}$

- **[B1]** Sets up the proof. Need not be as formal. Allow $b$ to be rational but not $a$ to be an integer.
    

**Step 2: Square both sides**

Then $5 = a^2 + 2ab\sqrt{7} + 7b^2$

_Alt 1:_ $$b\sqrt{7} = \sqrt{5} - a \Rightarrow 7b^2 = 5 - 2a\sqrt{5} + a^2$$

- **[M1]** Squares the equation (and expands). Condone a slip e.g. missing square but not a missing term.
    

**Step 3: Consider zero cases**

If $a = 0$ then $5 = 7b^2$, so e.g. $b^2 \neq 1$, and as $5$ is prime this cannot happen or e.g. $b^2 < 1$ so $b$ is not an integer.

If $b = 0$ then $\sqrt{5} = a$, which is rational, a contradiction. ($b = 0$ not required in Alt 1)

- **[B1]** $a = 0$ and $b = 0$ dealt with at some point. Condone $b = \frac{\sqrt{5}}{\sqrt{7}}$ is not an integer. (S+)
    

**Step 4: Rearrange for the irrational term**

So, ($a, b \neq 0$) and we can write e.g.

$\sqrt{7} = \frac{5 - a^2 - 7b^2}{2ab}$ **or** $\sqrt{5} = \frac{5 + a^2 - 7b^2}{2a}$ **or**

$2ab\sqrt{7} = 5 - a^2 - 7b^2$ **or** $2a\sqrt{5} = 5 + a^2 - 7b^2$

- **[M1]** Makes e.g. $\sqrt{7}$ or $2ab\sqrt{7}$ the subject of the equation. In Alt 1, makes $\sqrt{5}$ or $2a\sqrt{5}$ the subject. Allow instead an argument that $5$, $a^2$ and $7b^2$ are rational etc. directly from $5 = a^2 + 2ab\sqrt{7} + 7b^2$.
    

**Step 5: Final conclusion**

e.g. But $\frac{5 - a^2 - 7b^2}{2ab}$ is rational as $a$ and $b$ are rational, which contradicts that $\sqrt{7}$ is irrational. Hence there are no such numbers (or other conclusion).

- **[A1]** Correct work and conclusion drawn, referencing contradiction. A0 if there are incorrect statements in the body of their work e.g. "$2ab$ is an integer".
    
- _Note: The final A is possible if the second B is not scored (zeros cases omitted) but the first B must have been scored, so 11011 is possible. (4/5 is likely)_
    

#### **Part (b)**

**Step 6: Use part (a)**

Suppose $\sqrt{5} + \sqrt{7} = a$ (where $a$ is rational), then $\sqrt{5} = a + (-1)\sqrt{7}$

- **[M1]** Sets up and rearranges an appropriate equation using the result of (a). e.g. $b = -1$ so $\sqrt{5} - \sqrt{7} = a$
    

**Step 7: Final contradiction**

Since $a$ is rational and $b$ is an integer, by e.g. the result of (a) this is a contradiction, hence $\sqrt{5} + \sqrt{7}$ is irrational.

- **[A1]** Uses the result of (a) to draw the conclusion including all aspects of the main scheme.
    

#### **Special Mark (S1)**

- **[S1]** Award S1 for: a fully correct solution that is succinct and includes the S+ point.
    
- _S+ Good explanations of zero condition(s)._
    

> **Notes:**
> 
> They may write $a = p/q$ where $p, q$ are (coprime) integers (and $q$ is non-zero) which should not affect the way the proof works.
> 
> They may write $2ab\sqrt{7} = 5 - a^2 - 7b^2$ for second M1. They may then proceed as e.g. The RHS is rational. Since $ab$ is rational (either $a$ or $b$ is 0 or) $\sqrt{7}$ is rational $\rightarrow$ contradiction for A1. Then deal with the zero cases as in the main scheme for B1.
> 
> If they reach $\sqrt{35}$ (from $$a = \sqrt{5} - b\sqrt{7} \rightarrow a^2 = 5 + 7b^2 - 2b\sqrt{35}$$ – which scores first M1) they must prove that $\sqrt{35}$ is irrational for the second M, alongside a similar rational/irrational argument as above. There is no need to prove e.g. sum of rational and irrational numbers is irrational.
> 
> Alternative phrasing in (b):
> 
> Let $b = -1$ then rearrange to reach $a = \sqrt{5} + \sqrt{7}$. Since $a$ is irrational if $b$ is an integer then $\sqrt{5} + \sqrt{7}$ is irrational.
> 
> **Proof that $\sqrt{35}$ is irrational**
> 
> Assume that $\sqrt{35}$ is rational, so that $\sqrt{35} = \frac{p}{q}$ for $p, q$ coprime integers (or in simplest form) and $q$ non-zero.
> 
> Then $35q^2 = p^2$, hence $p^2$ is a multiple of $35$ (or $5$ and $7$). Hence $p$ is a multiple of $35$ (or $5$ and $7$).
> 
> So, we can write $p = 35n$, for integer $n$, so that $$35q^2 = (35n)^2 \Rightarrow q^2 = 35n^2$$, hence $q^2$ is a multiple of $35$ (or $5$ and $7$). Hence $q$ is a multiple of $35$ (or $5$ and $7$). So, we can write $q = 35m$ which means that we have a contradiction since $p$ and $q$ are not coprime. Hence $\sqrt{35}$ is irrational.
> 
> (Or, then $$\sqrt{35} = \frac{p}{q} = \frac{35n}{35m} = \frac{n}{m}$$ which means that we have a contradiction since $\frac{p}{q}$ is not in simplest form.)