---
topic: "Integration"
subtopic: "Integration by substitution"
---

### Question 6

**(a)** Show that $$\frac{d}{du}\ln(u + \sqrt{u^2 - 1}) = \frac{1}{\sqrt{u^2 - 1}}$ **(2)**$$

**(b)** Use the result from part (a) and the substitution $x + 3 = \frac{1}{t}$ to find $$\int \frac{1}{(x + 3)\sqrt{2x + 7}} dx$$ **(6)**

**(c)** Express $$\frac{1}{2x^2 + 13x + 21}$$ in partial fractions. **(2)**

**(d)** Find $$\int_{1}^{9} \frac{1}{(2x^2 + 13x + 21)\sqrt{2x + 7}} dx$$ giving your answer in the form $\ln r - s$ where $r$ and $s$ are rational numbers. **(6)**

### Mark Scheme 6

#### **Part (a)**

**Step 1: Chain Rule Differentiation** Let $$y = \ln(u + \sqrt{u^2 - 1})$$. $$\frac{dy}{du} = \frac{1}{u + \sqrt{u^2 - 1}} \times \left[ 1 + \frac{1}{2}(u^2 - 1)^{-1/2} \times 2u \right]$$

- **[M1]** For an attempt at the chain rule. Allow one slip.
    

**Step 2: Simplify to result** $$= \frac{1}{u + \sqrt{u^2 - 1}} \times \left[ 1 + \frac{u}{\sqrt{u^2 - 1}} \right]$$ $$= \frac{1}{u + \sqrt{u^2 - 1}} \times \left[ \frac{\sqrt{u^2 - 1} + u}{\sqrt{u^2 - 1}} \right]$ $= \frac{1}{\sqrt{u^2 - 1}} \quad (*)$$

- **[A1]** No incorrect working seen. Correctly cancels terms.
    

#### **Part (b)**

**Step 3: Differentiation of substitution** Given $x + 3 = \frac{1}{t}$. Differentiating gives $$dx = -\frac{1}{t^2} dt$$. Also, $$2x + 7 = 2(x + 3) + 1 = \frac{2}{t} + 1 = \frac{2 + t}{t}$$.

- **[M1]** Finds $dx$ in terms of $dt$.
    

**Step 4: Substitute into integral** Let $I$ be the integral: $$I = \int \frac{1}{(1/t)\sqrt{(2+t)/t}} \left(-\frac{1}{t^2}\right) dt = \int \frac{-t}{t^2 \sqrt{(t+2)/t}} dt = - \int \frac{1}{\sqrt{t^2 + 2t}} dt$$

- **[M1, A1]** Substitutes all components correctly. Simplifies integrand correctly in terms of $t$.
    

**Step 5: Complete the square and integrate** Complete the square for the quadratic inside the root: $$t^2 + 2t = (t + 1)^2 - 1$$ So $$I = - \int \frac{1}{\sqrt{(t + 1)^2 - 1}} dt$$.

- **[M1]** Attempt to complete the square to use part (a).
    

Using the result from (a) with $u = t + 1$: $$I = - \ln\left( (t + 1) + \sqrt{(t + 1)^2 - 1} \right) (+C)$$

- **[M1]** Use of the integral derived from part (a).
    

**Step 6: Substitute back x** Since $t = \frac{1}{x + 3}$: $$I = - \ln\left( \frac{1}{x+3} + 1 + \sqrt{\left(\frac{1}{x+3} + 1\right)^2 - 1} \right)$$ $$= - \ln\left( \frac{x+4}{x+3} + \frac{\sqrt{2x+7}}{x+3} \right)$$ (Alternative forms exist, e.g., $\ln(x+3) - \ln(x+4 + \sqrt{2x+7})$).

- **[A1]** Correct integral in terms of $x$.
    

#### **Part (c)**

**Step 7: Partial Fractions** Factor the denominator: $$2x^2 + 13x + 21 = (2x + 7)(x + 3)$$. Let $$\frac{1}{(2x+7)(x+3)} = \frac{A}{x+3} + \frac{B}{2x+7}$$. $$1 = A(2x+7) + B(x+3)$$ Set $x = -3$: $$1 = A(1) \Rightarrow A = 1$$. Set $x = -7/2$: $$1 = B(-1/2) \Rightarrow B = -2$$. $$\frac{1}{2x^2 + 13x + 21} = \frac{1}{x+3} - \frac{2}{2x+7}$$

- **[M1, A1]** Correct split method; correct constants $A=1$ and $B=-2$.
    

#### **Part (d)**

**Step 8: Split the integral** Let $$J = \int_{1}^{9} \frac{1}{(2x^2 + 13x + 21)\sqrt{2x + 7}} dx$$. Using the partial fractions from (c): $$J = \int_{1}^{9} \frac{1}{(x+3)\sqrt{2x+7}} dx - \int_{1}^{9} \frac{2}{(2x+7)\sqrt{2x+7}} dx$$

- **[M1]** Uses the partial fractions to split the integral.
    

**Step 9: Integrate second term** The first integral is exactly what we evaluated in part (b). The second integral is $$\int 2(2x+7)^{-3/2} dx$$. $$= 2 \frac{(2x+7)^{-1/2}}{-1/2} \times \frac{1}{2} = -2(2x+7)^{-1/2} = \frac{-2}{\sqrt{2x+7}}$$ So the combined indefinite integral is: $$[I \text{ from (b)}] + 2(2x+7)^{-1/2}$$ (Wait, the integral was $$- \int \dots$$, so $- (-2) = +2$).

- **[M1, A1]** Prepares 2nd integral as $(...)^{-3/2}$; obtains correct integrated form $2(2x+7)^{-1/2}$.
    

**Step 10: Apply limits** Substitute $x=9$ and $x=1$ into the total integrated expression: At $x=9$: $t = 1/12$. $$I(9) = - \ln\left( \frac{13}{12} + \frac{\sqrt{25}}{12} \right) = - \ln\left( \frac{18}{12} \right) = - \ln\left(\frac{3}{2}\right)$$ Second term at $x=9$: $2(25)^{-1/2} = \frac{2}{5}$. So upper limit gives $- \ln\left(\frac{3}{2}\right) + \frac{2}{5}$.

At $x=1$: $t = 1/4$. $$I(1) = - \ln\left( \frac{5}{4} + \frac{\sqrt{9}}{4} \right) = - \ln\left( \frac{8}{4} \right) = - \ln(2)$$ Second term at $x=1$: $2(9)^{-1/2} = \frac{2}{3}$. So lower limit gives $- \ln(2) + \frac{2}{3}$.

- **[M1]** Clear use of both limits following through their integration.
    

**Step 11: Simplify to required form** $$J = \left( - \ln\left(\frac{3}{2}\right) + \frac{2}{5} \right) - \left( - \ln(2) + \frac{2}{3} \right)$$ $$= \ln(2) - \ln\left(\frac{3}{2}\right) + \frac{2}{5} - \frac{2}{3} = \ln\left( \frac{2}{3/2} \right) - \frac{4}{15} = \ln\left(\frac{4}{3}\right) - \frac{4}{15}$$

- **[M1, A1]** Correct use of log subtraction rules. Correct rational numbers $r = 4/3$ and $s = 4/15$.