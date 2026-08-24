---
topic: "Trigonometric Identities and Equations"
subtopic: "Simple trigonometric equations"
---

### Question 3

Solve the equation

$$\arcsin 2x = \arccos x - \frac{\pi}{6} \quad 0 \leqslant x \leqslant 0.5$$

**(5)**
### Mark Scheme

#### **Main Method**

**Step 1: Attempt compound angle formula**

$$\Rightarrow 2x = \sin(\arccos x)\cos\frac{\pi}{6} - \cos(\arccos x)\sin\frac{\pi}{6}$$ **or**

$$\Rightarrow x = \cos(\arcsin 2x)\cos\frac{\pi}{6} - \sin(\arcsin 2x)\sin\frac{\pi}{6}$$

- **[M1]** Takes either $\sin$ or $\cos$ of both sides and attempts correct compound angle formula condoning sign errors. Other arrangements may be possible.
    

**Step 2: Eliminate trigonometric terms**

(1) $$2x = \sqrt{1 - x^2}\frac{\sqrt{3}}{2} - \frac{x}{2}$$ **or**

(2) $$x = \frac{\sqrt{3}}{2}\sqrt{1 - (2x)^2} - \frac{2x}{2}$$

- **[M1]** Inverses $\sin$ and $\arcsin$ or $\cos$ and $\arccos$ uses Pythagoras to achieve an equation without trig terms.
    
- **[A1]** Any correct equation in $x$ only with trig terms removed. _(Other equations are possible if starting with e.g. $\frac{\pi}{6} = \arccos x - \arcsin 2x$)_.
    

**Step 3: Solve for $x$**

e.g. $$4x + x = \sqrt{3}\sqrt{1 - x^2} \Rightarrow (25x^2 = 3 - 3x^2 \Rightarrow) x = \dots$$

- **[ddM1]** Full method to find a real value for $x$. Minor slips in solving the equation are condoned, but they should not materially simplify the equation.
    

**Step 4: Final Answer**

$x = \frac{\sqrt{21}}{14}$

- **[A1]** cao (Correct Answer Only).
    

> **Notes on alternative algebraic routes for Step 2:**
> 
> All equations give the same solution but less efficient routes take a bit more algebra, e.g.
> 
> (3) $$\left(2x^2 + \frac{1}{2}\right)^2 = (1-x^2)(1-4x^2) \Rightarrow 4x^4 + 2x^2 + \frac{1}{4} = 1 - 5x^2 + 4x^4 \Rightarrow 7x^2 = \frac{3}{4} \Rightarrow x = \dots$$
> 
> **or**
> 
> (4) $$\left(\sqrt{3} - 2x\sqrt{1-4x^2}\right)^2 = 16x^2(1-x^2) \Rightarrow 3 - 4x\sqrt{3}\sqrt{1-4x^2} + 4x^2(1-4x^2) = 16x^2(1-x^2)$$
> 
> $$\Rightarrow (3-12x^2)^2 = 48x^2(1-4x^2) \Rightarrow 9 - 72x^2 + 144x^4 = 48x^2 - 192x^4 \Rightarrow 112x^4 - 40x^2 + 3 = 0 \Rightarrow x^2 = \dots \Rightarrow x = \dots$$
> 
> _(However, this generates extra solutions which would need to be rejected)._
> 
> You may also see:
> 
> (5) $$\arcsin\left(\frac{5}{\sqrt{3}}x\right) = \arccos(x) \Rightarrow \left(\frac{5}{\sqrt{3}}x\right)^2 + x^2 = 1 \Rightarrow x^2 = \dots \Rightarrow x = \dots$$

#### **Alternative Method (3 Alt)**

Let e.g. $$y = \arcsin 2x = \arccos x - \frac{\pi}{6}$$

**Step 1: Compound angle formula on $y$**

$$\Rightarrow x = \cos\left(y + \frac{\pi}{6}\right) = \cos y \cos\frac{\pi}{6} - \sin y \sin\frac{\pi}{6}$$

- **[M1]** Sets $y = \arccos x - \frac{\pi}{6}$, takes $\cos$ of both sides and attempts compound angle formula.
    

**Step 2: Eliminate $x$**

$\left(x = \frac{1}{2}\sin y\right)$ so

$$\Rightarrow \frac{1}{2}\sin y = \frac{\sqrt{3}}{2}\cos y - \frac{1}{2}\sin y$$

- **[M1]** Sets $y = \arcsin 2x$, takes $\sin$ of both sides and eliminates $x$ to create an equation in $y$ only with trig terms evaluated.
    
- **[A1]** Any correct equation in $y$ only, with trig terms evaluated.
    

**Step 3: Solve for $x$ via $y$**

e.g. $$\tan y = \frac{\sqrt{3}}{2} \rightarrow \sin y = \frac{\sqrt{3}}{\sqrt{7}}$$

$$x = \frac{1}{2}\sin y = \frac{\sqrt{3}}{2\sqrt{7}}$$

- **[ddM1]** Full method to find a real value for $x$. Minor slips in solving the equation are condoned, but they should not materially simplify the equation.
    

**Step 4: Final Answer**

$x = \frac{\sqrt{21}}{14}$

- **[A1]** cao (Correct Answer Only).