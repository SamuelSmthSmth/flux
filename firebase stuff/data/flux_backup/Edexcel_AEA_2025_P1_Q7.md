---
topic: "Differentiation"
subtopic: "The product rule"
---

### Question 7

Given $u = y^x$

**(a)** by taking $\ln$ of both sides, or otherwise, determine $\frac{du}{dx}$ in terms of $x$, $y$ and $\frac{dy}{dx}$ only. **(5)**

**Figure 1**

Figure 1 shows a sketch of the curve given by the equation

$$3y^x - x^3 \ln y = 0$$

The curve has a horizontal asymptote $y = 1$, and is defined for

- $x \leqslant -a, \quad x \geqslant a$
    
- $b \leqslant y \leqslant c \quad y \neq 1$
    

where $a$, $b$ and $c$ are positive constants.

**(b)** Determine $\frac{dy}{dx}$ for this curve. **(4)**

**(c)** Find the value of $a$. **(6)**

**(d)** Find the value of $b$ and the value of $c$. **(7)**

**(+S2)**

### Mark Scheme

#### **Part (a)**

**Step 1: Take natural logarithms**

$\ln u = x \ln y$

- **[B1]** Takes $\ln$ and applies power law correctly.
    

**Step 2: Implicit differentiation**

$$\frac{1}{u}\frac{du}{dx} = \ln y + \frac{x}{y}\frac{dy}{dx}$$

- **[M1, A1]** Differentiates implicitly and attempts the product rule. Allow one slip for M1.
    

**Step 3: Rearrange for $\frac{du}{dx}$**

$$\frac{du}{dx} = u\left(\ln y + \frac{x}{y}\frac{dy}{dx}\right)$$

- **[M1]** Makes $\frac{du}{dx}$ the subject.
    

**Step 4: Final expression**

$$\frac{du}{dx} = y^x\left(\ln y + \frac{x}{y}\frac{dy}{dx}\right)$$ o.e.

- **[A1]** Correct in terms of $y$ and $x$. Any equivalent correct expression seen in (a) or at the start of (b).
    

#### **Part (b)**

**Step 5: Differentiate the second term**

$x^3 \ln y \rightarrow kx^2 \ln y \pm \frac{x^3}{y}\frac{dy}{dx}$

- **[M1]** Differentiates the $x^3 \ln y$ implicitly with the product rule attempted. Allow sign slips due to the subtraction.
    

$x^3 \ln y \rightarrow 3x^2 \ln y + \frac{x^3}{y}\frac{dy}{dx}$

- **[A1]** Correct differentiation. May have divided by 3 which is acceptable.
    

**Step 6: Combine and rearrange for $\frac{dy}{dx}$**

So $$3y^x\left(\ln y + \frac{x}{y}\frac{dy}{dx}\right) - 3x^2 \ln y - \frac{x^3}{y}\frac{dy}{dx} = 0 \Rightarrow \frac{dy}{dx} = \dots$$

- **[M1]** Uses (a) and makes $dy/dx$ the subject. Must be $2$ terms in $dy/dx$.
    

**Step 7: Final derivative**

$$\frac{dy}{dx} = \frac{3y(x^2 - y^x)\ln y}{3xy^x - x^3}$$

- **[A1]** Any equivalent correct expression. Condone fractions embedded within the fraction.
    

> **Alt for (b) using $u = y^x$:**
> 
> - **[M1]** Sets $3u - x^2 \ln u = 0$ and differentiate implicitly with respect to $x$ using the chain and product rule to the form $$\lambda\frac{du}{dx} \pm \mu x \ln u \pm \gamma\frac{x^2}{u}\frac{du}{dx} = 0$$ o.e.
>     
> - **[A1]** Correct e.g. $$3\frac{du}{dx} - 2x \ln u - \frac{x^2}{u}\frac{du}{dx} = 0$$ o.e.
>     
> - **[M1]** Substitutes their $\frac{du}{dx}$ from (a) and makes $\frac{dy}{dx}$ the subject. Requires two $\frac{dy}{dx}$ terms.
>     
> - **[A1]** Correct e.g. $$\frac{dy}{dx} = \frac{2y \ln y^x}{3y^x - x^2} - \frac{y}{x}\ln y$$ o.e.
>     

#### **Part (c)**

_Note: if roles of numerator and denominator are mixed up (so finds "$a$" from numerator etc) then penalise the first B mark in each part but allow any other marks to be earned._

**Step 8: Set denominator to zero**

($a$ is where tangents are vertical, so need) $3xy^x - x^3 = 0$

- **[B1]** Sets denominator of their $dy/dx = 0$.
    

**Step 9: Solve simultaneously with original equation**

(So as $x \neq 0$ S+), so $y^x = \frac{x^2}{3}$ and so $x^2 - x^3 \ln y = 0$

- **[M1]** Identifies $y^x$ or $3y^x$ and attempts to solve with original equation $3y^x - x^3 \ln y = 0$ (S+ explanation $x$ non-zero).
    

**Step 10: Eliminate $\ln y$**

Also $$x \ln y = \ln\frac{x^2}{3} \Rightarrow x^2 - x^2 \ln\frac{x^2}{3} = 0$$

- **[M1, A1]** Eliminates the $\ln y$ using correct log work to get an equation in $x$ (or $a$) only ; Correct equation.
    

**Step 11: Solve for $x$**

$$x \neq 0 \Rightarrow \ln\frac{x^2}{3} = 1 \Rightarrow \frac{x^2}{3} = e$$

- **[M1]** Eliminates the $\ln$ from the equation so that they can potentially solve for $x$ so no e.g. $\ln x$ or $e^x$. (S+ for justification of $x$ non-zero if not earlier).
    

**Step 12: Final value for $a$**

So $a = (\pm)\sqrt{3e}$

- **[A1]** Correct value, may be called $x$ or $a$, ignore reference to $\pm$.
    

#### **Part (d)**

**Step 13: Set numerator to zero**

($b, c$ are where tangents are horizontal, and) ($y \neq 1$, $\ln y \neq 0$ S+) so need $x^2 - y^x = 0$

- **[B1]** Sets numerator of their $dy/dx = 0$. $dy/dx$ must be an algebraic fraction for this mark. (S+ for explaining non-zeroes.)
    

**Step 14: Solve simultaneously with original equation**

So $y^x = x^2$ thus $3x^2 - x^3 \ln y = 0$

- **[M1]** Identifies $y^x$ and attempts to solve with original equation $3y^x - x^3 \ln y = 0$.
    

**Step 15: Eliminate $\ln y$**

Also $$x \ln y = \ln x^2 \Rightarrow 3x^2 - x^2 \ln x^2 = 0$$

- **[M1]** Eliminates the $\ln y$ using correct log work to get an equation in $x$ only.
    

**Step 16: Solve for $x^2$**

$$x \neq 0 \Rightarrow \ln x^2 = 3 \Rightarrow x^2 = e^3 \quad \left(\text{or } \Rightarrow x = \pm e^{\frac{3}{2}}\right)$$

- **[A1]** Correct value for $x$ or $x^2$ (S+).
    

**Step 17: Find expression for $y$**

$$x \ln y = \ln x^2 = \ln e^3 = 3 \Rightarrow y = e^{3/x} \quad (= \dots)$$

- **[M1]** Full method to find an expression or value for $y$.
    

**Step 18: Final values for $b$ and $c$**

$b = e^{-3/\sqrt{e^3}}, \quad c = e^{3/\sqrt{e^3}}$ o.e.

(e.g. $b = e^{-3e^{-3/2}}, \quad c = e^{3e^{-3/2}}$)

- **[A1, A1]** One mark for either, unlabelled ; second mark both correct, labelled or identified.
    

#### **Special Marks (S1 / S2) & General Notes**

- **[S2]** Award S2 for a solution scoring 20+ marks that is succinct and includes at least two S+ points (see notes below).
    It
- **[S1]** Award S1 for:
    
    - a fully correct solution that is succinct but does not mention any S+ points
        
    - a solution scoring 20+ marks that may be laboured but includes an S+ point
        

> **Notes:**
> 
> - You will need to look carefully to see if their work is an attempt at (c) or (d).
>     
> - Whether the M marks in parts (c) and (d) are available will depend on the complexity of their denominator and numerator respectively. They cannot score the relevant M marks if they are missing the terms that need to be dealt with: e.g. (d) M2 cannot be scored if they don't need to eliminate $\ln y$ because the equation is trivial.
>     
> - If they have an extra factor / missing a factor in their answer to (b) but their work in (c) and/or (d) is otherwise correct, then allow full marks in both parts.
>     
> - **S+** good explanation(s) of non-zero values for cancelling factors in (c)
>     
> - **S+** good explanation(s) of non-zero values for cancelling factors in (d)
>     
> - **S+** for proceeding directly to $x^2$ in part (d).
>     
> - **S+** for elegant approaches to finding the $y$ values for (d).
>
