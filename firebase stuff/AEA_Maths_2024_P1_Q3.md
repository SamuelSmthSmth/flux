### Question 3

(i) Determine the value of `k` such that `\arctan \frac{1}{2} - \arctan \frac{1}{3} = \arctan k` **(3)**

(ii)(a) Prove that `\cos 3A \equiv 4\cos^3 A - 3\cos A` **(3)**

Given that `a = \cos 20^\circ` (b) write down, in terms of `a`, an expression for `\cos 40^\circ` **(1)** (c) determine, in terms of `a`, a simplified expression for `\cos 80^\circ` **(2)** (d) Use part (a) to show that `4a^3 - 3a = \frac{1}{2}` **(1)** (e) Hence, or otherwise, show that `\cos 20^\circ \cos 40^\circ \cos 80^\circ = \frac{1}{8}` **(4)**

### Mark Scheme

> _Note: mark the mathematics throughout, do not penalise minor notation indiscretions if the intention is clear throughout._

#### **Part 3(i)**

**Step 1: Take tangents** `k = \tan\left(\arctan\frac{1}{2} - \arctan\frac{1}{3}\right)`

- **[M1]** Takes tangents of both sides.
    

**Step 2: Apply compound angle formula** `= \frac{\tan\left(\arctan\frac{1}{2}\right) - \tan\left(\arctan\frac{1}{3}\right)}{1 + \tan\left(\arctan\frac{1}{2}\right)\tan\left(\arctan\frac{1}{3}\right)}`

- **[M1]** Applies the correct compound angle formula – signs must be correct.
    

**Step 3: Simplify to final answer** `= \frac{\frac{1}{2} - \frac{1}{3}}{1 + \frac{1}{2}\times\frac{1}{3}} = \frac{\frac{3-2}{6}}{\frac{6+1}{6}} = \frac{1}{7}`

- **[A1]** Simplifies to the correct fraction.
    

**Part 3(i) Alt (Geometric Approach)** **Step 1: Set up triangles** Geometric Approach: where `\theta = \arctan k` `\cos \theta = \frac{\sqrt{5}^2 + \left(\frac{2\sqrt{10}}{3}\right)^2 - \left(\frac{1}{3}\right)^2}{2\sqrt{5} \times \frac{2\sqrt{10}}{3}} = \dots \left(= \frac{7\sqrt{2}}{10}\right)`

- **[M1]** Identifies suitable triangles and applies the cosine rule to find `\cos \theta`
    

**Step 2: Use Pythagoras** `\Rightarrow k = \tan \theta = \frac{\sqrt{1 - (7\sqrt{2}/10)^2}}{7\sqrt{2}/10} = \dots \left( \frac{\sqrt{2}/10}{7\sqrt{2}/10} = \frac{1}{7} \right)`

- **[M1]** Proceeds to use Pythagoras to find `k = \tan \theta`
    

**Step 3: Final answer** `\Rightarrow k = \frac{1}{7}`

- **[A1]** Simplifies to the correct fraction.
    

#### **Part 3(ii)(a)**

**Step 1: Apply compound angle formula** `(\cos 3A =) \cos(2A + A) = \cos 2A \cos A - \sin 2A \sin A`

- **[M1]** Applies the correct compound angle formula
    

**Step 2: Use double angle formulae** `= (2\cos^2 A - 1)\cos A - 2\sin A \cos A \sin A`

- **[M1]** Uses correct double angles formulae to reach an expression in single angle only.
    

**Step 3: Eliminate sine and complete proof** `= 2\cos^3 A - \cos A - 2(1 - \cos^2 A)\cos A` `= 4\cos^3 A - 3\cos A *`

- __[A1_]_* Eliminates `\sin A` and completes proof correctly.
    

> **(ii)(a) Alt by De Moivre:**
> 
> - **[M1]:** `(\cos 3A + \text{i}\sin 3A) = (\cos A + \text{i}\sin A)^3 = c^3 (+ 3\text{i}c^2s) + 3\text{i}^2cs^2 (+ \text{i}^3s^3)`
>     
> - **[M1]:** `\cos 3A = \text{Re}(\cos 3A + \text{i}\sin 3A) = \text{Re}(\cos A + \text{i}\sin A)^3 = \cos^3 A - 3\cos A\sin^2 A`
>     
> - **[A1]:** As scheme.
>     

#### **Part 3(ii)(b)**

**Step 1: Expression for `\cos 40^\circ`** `[\cos 40^\circ = \cos(2 \times 20^\circ) =] 2a^2 - 1` Alt: `[\cos 40^\circ = \cos(60^\circ - 20^\circ) =] \frac{1}{2}a + \frac{\sqrt{3}}{2}\sqrt{1 - a^2}`

- **[B1]** Correct expression
    

#### **Part 3(ii)(c)**

**Step 1: Apply double angle formula** `\cos 80^\circ = \cos(2 \times 40^\circ) = 2(2a^2 - 1)^2 - 1` Alt: `\cos 80^\circ = \cos(60^\circ + 20^\circ) = \frac{1}{2}a \pm \frac{\sqrt{3}}{2}\sin 20^\circ`

- **[M1]** Applies the double angle formula for cos a second time with their (b)
    

**Step 2: Simplify** `= 8a^4 - 8a^2 + 1 \quad \text{Alt } \frac{1}{2}a - \frac{\sqrt{3}}{2}\sqrt{1 - a^2}`

- **[A1]** Simplified to correct expression.
    

#### **Part 3(ii)(d)**

**Step 1: Evaluate using `A = 20^\circ`** `(A = 20^\circ \Rightarrow) 4a^3 - 3a = \cos 60^\circ = \frac{1}{2} *`

- __[B1_]_* Uses `A = 20^\circ` and achieves the result.
    

#### **Part 3(ii)(e)**

**Step 1: Form an expression in `a`** `\cos 20^\circ \cos 40^\circ \cos 80^\circ = a(2a^2 - 1)(8a^4 - 8a^2 + 1) \quad (= 16a^7 - 24a^5 + 10a^3 - a)`

- **[M1]** Uses the expressions from (b) and (c) to form an expression in `a` only provided their expressions are not just multiples of `a`.
    

**Step 2: Use part (d) to reduce powers** `= (2a^3 - a)(6a^2 + a - 8a^2 + 1)` Or e.g. `(4a^3 - 3a)^2 = 16a^6 - 24a^4 + 9a^2 \Rightarrow \dots = a((4a^3 - 3a)^2 + a^2 - 1)`

- **[M1]** Uses the expression from (d) to reduce power at least once or attempts to use (d) to compare. Allow if attempted on a partial expression.
    

**Step 3: Continue reducing to a cubic** `= \left( \frac{1}{2}\left(3a + \frac{1}{2}\right) - a \right)(a - 2a^2 + 1)` `= \frac{1}{4}(2a + 1)(a - 2a^2 + 1)` `= \frac{1}{4}(-4a^3 + 3a + 1)`

- **[M1]** Continues to reduce powers of `a` to get to a cubic provided their expressions in (b) and (c) were correct up to sign error. Other steps are possible.
    

**Step 4: Final substitution** `= \frac{1}{4}\left(1 - \frac{1}{2}\right) = \frac{1}{4} \times \frac{1}{2} = \frac{1}{8} *`

- **[A1]** Correct completion of proof.
    

**Part 3(ii)(e) Alt** **Step 1: Product to sum formula** `\cos 20^\circ \cos 40^\circ \cos 80^\circ = \frac{1}{2}\cos 20^\circ(\cos 120^\circ + \cos 40^\circ)`

- **[M1]** Applies appropriate product to sum formula
    

**Step 2: Substitute expressions** `= \frac{1}{2}a\left( -\frac{1}{2} + 2a^2 - 1 \right)`

- **[M1]** Replaces `\cos 120^\circ` correctly and uses result of (b) to get expression in `a`.
    

**Step 3: Combine and identify part (d)** `= \frac{1}{4}a(4a^2 - 3)` `= \frac{1}{4}(4a^3 - 3a)`

- **[M1]** Combines terms and identifies the expression from (d) in their expression.
    

**Step 4: Final proof** `= \frac{1}{4} \times \frac{1}{2} = \frac{1}{8} *`

- **[A1]** Correct completion of proof.
    

> **Other alternatives for (ii)(e)**
> 
> - **[M1]** for setting up suitable equation using their results as scheme, **[M1]** beginning the process of working towards the answer, **[M1]** continuing the process to a point from which the answer is deducible, **[A1]** Fully correct proof. E.g. `\cos 20^\circ \cos 40^\circ \cos 80^\circ = a\left(\frac{1}{2}a - \frac{\sqrt{3}}{2}\sqrt{1 - a^2}\right)\left(\frac{1}{2}a + \frac{\sqrt{3}}{2}\sqrt{1 - a^2}\right)` (M1) `= a\left(\frac{1}{4}a^2 - \frac{3}{4}(1 - a^2)\right)` (M1) `= \frac{1}{4}(4a^3 - 3a)` (M1) `= \frac{1}{8}` A1*
>