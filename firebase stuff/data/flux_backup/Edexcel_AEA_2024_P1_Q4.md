---
topic: "Integration"
subtopic: "Definite integrals"
---

### Question 4

**(a)** Use the substitution $x = \sqrt{3}\tan u$ to show that $$\int \frac{1}{3 + x^2} \text{dx} = p \arctan(px) + c$$ where $p$ is a real constant to be determined and $c$ is an arbitrary constant. **(5)**

**(b)** Use the substitution $x = \frac{3u + 3}{u - 3}$ to determine the exact value of $I$ where $$I = \int_{-3}^{1} \frac{\ln(3 - x)}{3 + x^2} \text{dx}$$ giving your answer in simplest form. **(10)** **(+S1)**

### Mark Scheme

#### **Part (a)**

**Step 1: Differentiate the substitution** $$x = \sqrt{3}\tan u \Rightarrow \frac{\text{dx}}{\text{du}} = \sqrt{3}\sec^2 u$$

- **[B1]** Any correct derivative expression for the substitution.
    

**Step 2: Substitute into the integral** $$\int \frac{1}{3 + x^2} \text{dx} = \int \frac{1}{3 + 3\tan^2 u} \times \sqrt{3}\sec^2 u \text{ du}$$

- **[M1]** Complete substitution for $u$ made (including replacing $\text{dx}$).
    

**Step 3: Apply identity and integrate** $$= \frac{\sqrt{3}}{3} \int \frac{\sec^2 u}{1 + \tan^2 u} \text{ du} = \frac{\sqrt{3}}{3} \int \frac{\sec^2 u}{\sec^2 u} \text{ du}$$ $$= \frac{\sqrt{3}}{3} \int 1 \text{ du} = \frac{\sqrt{3}}{3}u (+ c)$$

- **[M1]** Applies Pythagorean identity and simplifies and integrates (allow without $+ c$).
    

**Step 4: Express $u$ in terms of $x$** $$x = \sqrt{3}\tan u \Rightarrow u = \arctan \frac{x}{\sqrt{3}}$$

- **[B1]** Correct $u$ in terms of $x$.
    

**Step 5: Final Result** $$\int \frac{1}{3 + x^2} \text{dx} = \frac{\sqrt{3}}{3}\arctan\left(\frac{\sqrt{3}}{3}x\right) + c$$

- **[A1]** Correct answer (including $+c$) from fully correct working. (Allow with $\frac{1}{\sqrt{3}}$). Allow $\tan^{-1}$ notation.
    

#### **Part (b)**

**Step 6: Differentiate the new substitution** $$x = \frac{3u + 3}{u - 3} \Rightarrow \frac{\text{dx}}{\text{du}} = \frac{3(u - 3) - (3u + 3) \times 1}{(u - 3)^2} = \frac{-12}{(u - 3)^2}$$ $$( \text{or } x = 3 + \frac{12}{u - 3} \Rightarrow \dots )$$

- **[M1]** Attempts quotient rule or other appropriate method ; correct derivative, suitably simplified numerator.
    
- **[A1]** Correct simplified derivative.
    

**Step 7: Change limits** $$x = -3 \Rightarrow u = 1 \quad \text{and} \quad x = 1 \Rightarrow u = -3$$

- **[B1]** Correct change of limits seen (S+).
    

**Step 8: Substitute into $I$** $$\int \frac{\ln(3 - x)}{3 + x^2} \text{dx} = \int \frac{\ln\left(3 - \frac{3u + 3}{u - 3}\right)}{3 + \left(\frac{3u + 3}{u - 3}\right)^2} \times \frac{-12}{(u - 3)^2} \text{ du}$$

- **[M1]** Complete substitution, including replacing $\text{dx}$, condone small slips e.g. with signs, but terms should be correctly placed.
    

**Step 9: Simplify the denominator and split the log** $$= -12 \int \frac{\ln\left(\frac{12}{3 - u}\right)}{3(u - 3)^2 + (3u + 3)^2} \text{ du} = -12 \int \frac{\ln 12 - \ln(3 - u)}{12u^2 + 36} \text{ du}$$

- **[M1]** Simplifies to achieve a Quadratic denominator and splits the log term — but $\ln(-12)$ is M0.
    

**Step 10: Fully correct split integral with limits** $$I = \int_{-3}^{1} \frac{\ln(3 - x)}{3 + x^2} \text{dx} = -\int_{1}^{-3} \frac{\ln 12 - \ln(3 - u)}{u^2 + 3} \text{ du}$$

- **[A1]** Fully correct with logs split, $u^2 + 3$ clear in denominator and correct limits attached.
    

**Step 11: Change order of limits** $$= \int_{-3}^{1} \frac{\ln 12 - \ln(3 - u)}{u^2 + 3} \text{ du}$$

- **[M1]** Correct process of changing order of limits and negating seen at some stage of working. (May be on just the $I$ integral.) (S+).
    

**Step 12: Recognise $I$ and apply part (a)** $$= \int_{-3}^{1} \frac{\ln 12}{u^2 + 3} \text{ du} - I \Rightarrow 2I = \ln 12 \left[ \frac{\sqrt{3}}{3} \arctan \frac{u\sqrt{3}}{3} \right]_{-3}^{1}$$

- **[M1]** Recognises $I$ in the integral, makes the subject and applies their result of (a).
    

**Step 13: Apply limits** $$\Rightarrow I = \frac{\sqrt{3}\ln 12}{6}\left(\arctan\frac{\sqrt{3}}{3} - \arctan(-\sqrt{3})\right)$$

- **[dM1]** Applies limits. Depends on previous M.
    

**Step 14: Final exact value** $$= \frac{\sqrt{3}\ln 12}{6}\left(\frac{\pi}{6} + \frac{\pi}{3}\right) = \frac{\pi\sqrt{3}\ln 12}{12}$$

- **[A1]** Correct answer.
    

#### **Special Marks (S1)**

- **[S1]** Award S1 for:
    
    - a fully correct solution that is succinct but does not mention any S+ points
        
    - a solution scoring 13+ marks that may be laboured but includes an S+ point
        

> **S+ Notes:**
> 
> - S+ For clear demonstration of the change of limits.
>     
> - S+ For good explanation/demonstration of reversal of limits.
>