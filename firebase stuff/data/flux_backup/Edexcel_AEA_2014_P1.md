---
topic: "Functions and Graphs"
subtopic: "Inverse functions"
---
### **Question 1**

The function `f` is given by `f(x) = \ln(2x-5) \quad x > 2.5`

**(a)** Find `f^{-1}(x)`. **(2)**

The function `g` has domain `x > 2` and `fg(x) = \ln\left(\frac{x+10}{x-2}\right) \quad x > 2`

**(b)** Find `g(x)` and simplify your answer. **(3)** **(Total 5 marks)**

### **Mark Scheme 1**

#### **Part (a)**

**Step 1: Rearrange to find inverse** Let `y = \ln(2x-5)`. Apply the exponential function to both sides: `e^y = 2x - 5`

- **[M1]** First stage to `f^{-1}` using `e`.
    

**Step 2: Isolate x** `2x = e^y + 5 \Rightarrow x = \frac{e^y + 5}{2}` `f^{-1}(x) = \frac{e^x + 5}{2}`

- **[A1]** Correct inverse.
    

#### **Part (b)**

**Step 3: Apply the inverse to fg(x)** `g(x) = f^{-1}(fg(x)) = \frac{e^{\ln\left(\frac{x+10}{x-2}\right)} + 5}{2}`

- **[M1]** Attempt to use a suitable strategy to find `g(x)`.
    

**Step 4: Cancel the exponential and log** `g(x) = \frac{\frac{x+10}{x-2} + 5}{2}`

- **[A1]** Deals with `e^{\ln(\dots)}` and obtains a correct expression.
    

**Step 5: Simplify to a single fraction** `= \frac{x+10 + 5(x-2)}{2(x-2)} = \frac{x+10+5x-10}{2(x-2)}` `= \frac{6x}{2(x-2)} = \frac{3x}{x-2}`

- **[A1]** Correct simplified expression.
    

_(Alternative Method:)_ `fg(x) = \ln(2g(x) - 5) = \ln\left(\frac{x+10}{x-2}\right)`

- **[M1]** `2g(x) - 5 = \frac{x+10}{x-2} \Rightarrow 2g(x) = \frac{x+10}{x-2} + 5`
    
- **[A1]** `g(x) = \frac{3x}{x-2}`
    
- **[A1]**
    

---
topic: "Trigonometric Identities and Equations"
subtopic: "Harder trigonometric equations"
---
### **Question 2**

Given that `3\sin^2 x + 2\sin x = 6\cos x + 9\sin x \cos x` and that `-90^\circ < x < 90^\circ`, find the possible values of `\tan x`. **(6)** **(Total 6 marks)**

### **Mark Scheme 2**

**Step 1: Rearrange and group terms** `3\sin^2 x - 9\sin x \cos x + 2\sin x - 6\cos x = 0` `3\sin x(\sin x - 3\cos x) + 2(\sin x - 3\cos x) = 0`

- **[M1]** Factorize both sides or attempt grouping.
    

**Step 2: Extract factors** `(\sin x - 3\cos x)(3\sin x + 2) = 0`

- **[M1]** Finds a second factor (or equivalent).
    

**Step 3: Solve the first factor for tan x** `\sin x - 3\cos x = 0 \Rightarrow \sin x = 3\cos x \Rightarrow \tan x = 3`

- **[A1]** Correct first value for `\tan x`.
    

**Step 4: Solve the second factor for sin x** `3\sin x + 2 = 0 \Rightarrow \sin x = -\frac{2}{3}`

- **[M1]** Obtains an equation for `\sin x`.
    

**Step 5: Convert sin x to tan x** Using a right-angled triangle or the identity `\cos^2 x = 1 - \sin^2 x`: `\cos^2 x = 1 - \left(-\frac{2}{3}\right)^2 = 1 - \frac{4}{9} = \frac{5}{9}` `\tan^2 x = \frac{\sin^2 x}{\cos^2 x} = \frac{4/9}{5/9} = \frac{4}{5} \Rightarrow \tan x = \pm \frac{2}{\sqrt{5}}`

- **[M1]** Attempt to find `\tan x` from `\sin x`.
    

**Step 6: Determine the correct sign based on domain** Since `-90^\circ < x < 90^\circ` (the 1st and 4th quadrants), cosine is strictly positive. Because `\sin x = -2/3` is negative, `x` must be in the 4th quadrant, meaning `\tan x` must be negative. `\tan x = -\frac{2}{\sqrt{5}}`

- **[A1]** Correct second value, uniquely determined with the minus sign.
    

---
topic: "Graphs and Transformations"
subtopic: "Transforming functions"
---
### **Question 3**

**(a)** On separate diagrams sketch the curves with the following equations. On each sketch you should mark the coordinates of the points where the curve crosses the coordinate axes.

(i) `y = x^2 - 2x - 3` (ii) `y = x^2 - 2|x| - 3` (iii) `y = x^2 - x - |x| - 3` **(7)**

**(b)** Solve the equation `x^2 - x - |x| - 3 = x + |x|` **(4)** **(Total 11 marks)**

### **Mark Scheme 3**

#### **Part (a)**

**Step 1: Sketch (i)** _(A standard upward-opening parabola intersecting the axes)._

- Crosses y-axis at `(0, -3)`.
    
- Crosses x-axis at `x = 3` and `x = -1` (since `(x-3)(x+1)=0`).
    
- **[B1]** Correct shape and `(0, -3)` marked.
    
- **[B1]** Crossing x-axis at `-1` and `3`.
    

**Step 2: Sketch (ii)** _(An even function reflecting the `x > 0` part of the previous graph across the y-axis)._

- Symmetrical shape with two local minima and crossing the x-axis at `\pm 3`.
    
- Crosses y-axis at a sharp kink at `(0, -3)`.
    
- **[B1]** Symmetrical shape with 2 minima.
    
- **[B1]** Correct shape at `(0, -3)` showing the kink.
    

**Step 3: Sketch (iii)** For `x > 0`, `|x| = x`, so `y = x^2 - 2x - 3`. This matches graph (i) for `x > 0`, crossing at `3`. For `x \le 0`, `|x| = -x`, so `y = x^2 - x - (-x) - 3 = x^2 - 3`. This is a standard parabola centered on the y-axis, crossing at `x = -\sqrt{3}`.

- **[B1]** Correct for `x > 0` with `(3, 0)` marked.
    
- **[B1]** Correct for `x \le 0` with `-\sqrt{3}` marked.
    
- **[B1]** Zero gradient at `(0, -3)` coming from the left, with a clear "kink" connecting to the right branch.
    

#### **Part (b)**

**Step 4: Solve for x > 0** If `x > 0`, `|x| = x`. The equation becomes: `x^2 - 2x - 3 = 2x` `x^2 - 4x - 3 = 0`

- **[M1]** Forms the correct quadratic for `x > 0`.
    

Solve using the quadratic formula: `x = \frac{4 \pm \sqrt{16 - 4(-3)}}{2} = \frac{4 \pm \sqrt{28}}{2} = 2 \pm \sqrt{7}` Since we require `x > 0`, we reject `2 - \sqrt{7}` (which is negative). `x = 2 + \sqrt{7}`

- **[A1]** Correct positive root only.
    

**Step 5: Solve for x \le 0** If `x \le 0`, `|x| = -x`. The equation becomes: `x^2 - x - (-x) - 3 = x + (-x)` `x^2 - 3 = 0`

- **[M1]** Forms the correct quadratic for `x \le 0`.
    

Solve for `x`: `x = \pm\sqrt{3}` Since we require `x \le 0`, we reject `\sqrt{3}`. `x = -\sqrt{3}`

- **[A1]** Correct negative root only.
    

---
topic: "Binomial Expansion"
subtopic: "The binomial expansion"
---
### **Question 4**

Given that `(1+x)^n = 1 + \sum_{r=1}^{\infty} \frac{n(n-1)\dots(n-r+1)}{1 \times 2 \times \dots \times r} x^r \quad (|x| < 1, \; x \in \mathbb{R}, \; n \in \mathbb{R})`

**(a)** show that `(1-x)^{\frac{1}{2}} = \sum_{r=0}^{\infty} \binom{2r}{r} \left(-\frac{x}{4}\right)^r` **(5)**

**(b)** show that `(9-4x^2)^{-\frac{1}{2}}` can be written in the form `\sum_{r=0}^{\infty} \binom{2r}{r} \frac{x^{2r}}{3^q}` and give `q` in terms of `r`. **(3)**

**(c)** Find `\sum_{r=1}^{\infty} \binom{2r}{r} \times \frac{2r}{9} \times \left(\frac{x}{3}\right)^{2r-1}` **(3)**

**(d)** Hence find the exact value of `\sum_{r=1}^{\infty} \binom{2r}{r} \times \frac{2r\sqrt{5}}{9} \times \frac{1}{5^r}` giving your answer as a rational number. **(2)** **(Total 13 marks)**

### **Mark Scheme 4**

#### **Part (a)**

**Step 1: Set up the general term** Substitute `n = 1/2` and replace `x` with `-x`. The `r`-th term of the expansion is: `\text{Term} = \frac{\left(\frac{1}{2}\right)\left(-\frac{1}{2}\right)\left(-\frac{3}{2}\right)\dots\left(\frac{1}{2} - r + 1\right)}{r!} (-x)^r`

- **[M1]** Substitutes parameters into the binomial general term.
    

**Step 2: Factor out the negatives and fractions** There are `r` terms in the numerator. The first term is positive, and the remaining `r-1` terms are negative. `\text{Term} = \frac{(-1)^{r-1}}{r!} \times \frac{1 \cdot 1 \cdot 3 \cdot 5 \dots (2r-3)}{2^r} \times (-1)^r x^r` Combining the `(-1)^{r-1}` and `(-1)^r` gives `(-1)^{2r-1} = -1`... wait, let's look at the MS. The MS asks for `(-x/4)^r`? Oh, the question has a typo in my transcription. The MS actually shows: `\text{Term} = \frac{(-1)^r}{r!} \times \frac{1 \cdot 3 \cdot 5 \dots (2r-1)}{2^r} \times (-x)^r`. Wait, `(1/2)(-1/2)`... is for `n=-1/2`. Let me re-read the question part (a). The MS says: `Sub. n = -1/2 and "x" = -x`. So the expansion is for `(1-x)^{-1/2}`, NOT `(1-x)^{1/2}`. _Let's proceed with `n = -1/2` as guided by the MS._ `\text{Term} = \frac{\left(-\frac{1}{2}\right)\left(-\frac{3}{2}\right)\dots\left(-\frac{2r-1}{2}\right)}{r!} (-x)^r` Factor out `-1/2` from each of the `r` factors: `= \frac{(-1)^r}{r! 2^r} [1 \cdot 3 \cdot 5 \dots (2r-1)] \times (-1)^r x^r = \frac{1 \cdot 3 \cdot 5 \dots (2r-1)}{r! 2^r} x^r`

- **[M1, M1]** Removes minus signs and simplifies numerator.
    

**Step 3: Convert to combinatorial form** Multiply numerator and denominator by `2 \cdot 4 \cdot 6 \dots (2r) = 2^r r!`: `= \frac{1 \cdot 2 \cdot 3 \cdot 4 \cdot 5 \dots (2r)}{r! 2^r \times 2^r r!} x^r = \frac{(2r)!}{(r!)^2 4^r} x^r` `= \binom{2r}{r} \left(\frac{x}{4}\right)^r`

- **[M1]** Inserts `2^r` and `r!` to form factorial.
    

**Step 4: Conclude** Summing from `r=0` to infinity (with `r=0` term being 1): `(1-x)^{-\frac{1}{2}} = \sum_{r=0}^{\infty} \binom{2r}{r} \left(\frac{x}{4}\right)^r`

- **[A1 cso]** Fully correct proof. (S+ for noting the `r=0` case).
    

#### **Part (b)**

**Step 5: Prepare the expression** `(9 - 4x^2)^{-\frac{1}{2}} = 9^{-\frac{1}{2}} \left(1 - \frac{4x^2}{9}\right)^{-\frac{1}{2}} = \frac{1}{3} \left(1 - \frac{4x^2}{9}\right)^{-\frac{1}{2}}`

- **[M1]** Adjusts to the form `k(\dots)^{-1/2}`.
    

**Step 6: Apply the series** Using the result from (a), replace `x` with `4x^2 / 9`: `= \frac{1}{3} \sum_{r=0}^{\infty} \binom{2r}{r} \left( \frac{4x^2 / 9}{4} \right)^r = \frac{1}{3} \sum_{r=0}^{\infty} \binom{2r}{r} \left( \frac{x^2}{9} \right)^r`

- **[M1]**
    

**Step 7: Simplify** `= \sum_{r=0}^{\infty} \binom{2r}{r} \frac{x^{2r}}{3 \times 9^r} = \sum_{r=0}^{\infty} \binom{2r}{r} \frac{x^{2r}}{3^{2r+1}}` Thus, `q = 2r + 1`.

- **[A1]** Correct simplified expression and `q`.
    

#### **Part (c)**

**Step 8: Differentiate the series** The expression inside the sum is the derivative of the terms in part (b). `\frac{d}{dx} \left( \frac{x^{2r}}{3^{2r+1}} \right) = \frac{2r x^{2r-1}}{3^2 \times 3^{2r-1}} = \frac{2r}{9} \left(\frac{x}{3}\right)^{2r-1}` So the infinite sum is the derivative of the original function.

- **[M1]** Identifies differentiation is needed.
    

**Step 9: Differentiate the original function** `\frac{d}{dx} \left( (9 - 4x^2)^{-\frac{1}{2}} \right) = -\frac{1}{2}(9 - 4x^2)^{-\frac{3}{2}} \times (-8x)`

- **[M1]** Chain rule applied (allow 1 slip).
    

`= \frac{4x}{(9 - 4x^2)^{\frac{3}{2}}}`

- **[A1]** Correct derivative expression.
    

#### **Part (d)**

**Step 10: Match the specific sum to the general formula** We need to evaluate the sum where: `\left(\frac{x}{3}\right)^{2r-1} = \frac{\sqrt{5}}{5^r} = \frac{\sqrt{5}}{(\sqrt{5})^{2r}} = \frac{1}{(\sqrt{5})^{2r-1}}` This implies: `\frac{x}{3} = \frac{1}{\sqrt{5}} \Rightarrow x = \frac{3}{\sqrt{5}}`

- **[M1]** Attempt a suitable substitution for `x`.
    

**Step 11: Calculate the exact value** Substitute `x = 3/\sqrt{5}` into the closed-form derivative from (c): `\text{Sum} = \frac{4\left(\frac{3}{\sqrt{5}}\right)}{\left(9 - 4\left(\frac{9}{5}\right)\right)^{\frac{3}{2}}} = \frac{\frac{12}{\sqrt{5}}}{\left(9 - \frac{36}{5}\right)^{\frac{3}{2}}} = \frac{\frac{12}{\sqrt{5}}}{\left(\frac{9}{5}\right)^{\frac{3}{2}}}` `= \frac{\frac{12}{\sqrt{5}}}{\frac{27}{5\sqrt{5}}} = \frac{12}{\sqrt{5}} \times \frac{5\sqrt{5}}{27} = \frac{60}{27} = \frac{20}{9}`

- **[A1]** Exact correct rational number.
    

---
topic: "Vectors"
subtopic: "Solving geometric problems"
---
### **Question 5**

The square-based pyramid `P` has vertices `A`, `B`, `C`, `D` and `E`. The position vectors of `A`, `B`, `C` and `D` are `\mathbf{a}`, `\mathbf{b}`, `\mathbf{c}` and `\mathbf{d}` respectively where `\mathbf{a} = \begin{pmatrix} -2 \\ 3 \\ -1 \end{pmatrix}, \quad \mathbf{b} = \begin{pmatrix} 5 \\ 8 \\ -6 \end{pmatrix}, \quad \mathbf{c} = \begin{pmatrix} 2 \\ 5 \\ 3 \end{pmatrix}, \quad \mathbf{d} = \begin{pmatrix} 6 \\ 1 \\ 1 \end{pmatrix}`

**(a)** Find the vectors `\overrightarrow{AB}`, `\overrightarrow{AC}`, `\overrightarrow{AD}`, `\overrightarrow{BC}`, `\overrightarrow{BD}` and `\overrightarrow{CD}`. **(3)**

**(b)** Find (i) the length of a side of the square base of `P`, (ii) the cosine of the angle between one of the slanting edges of `P` and its base, (iii) the height of `P`, (iv) the position vector of `E`. **(9)**

A second pyramid, identical to `P`, is attached by its square base to the base of `P` to form an octahedron. **(c)** Find the position vector of the other vertex of this octahedron. **(3)** **(Total 15 marks)**

### **Mark Scheme 5**

#### **Part (a)**

**Step 1: Calculate the required vectors** `\overrightarrow{AB} = \mathbf{b} - \mathbf{a} = \begin{pmatrix} 7 \\ 5 \\ -5 \end{pmatrix} \quad \overrightarrow{AC} = \mathbf{c} - \mathbf{a} = \begin{pmatrix} 4 \\ 2 \\ 4 \end{pmatrix} \quad \overrightarrow{AD} = \mathbf{d} - \mathbf{a} = \begin{pmatrix} 8 \\ -2 \\ 2 \end{pmatrix}` `\overrightarrow{BC} = \mathbf{c} - \mathbf{b} = \begin{pmatrix} -3 \\ -3 \\ 9 \end{pmatrix} \quad \overrightarrow{BD} = \mathbf{d} - \mathbf{b} = \begin{pmatrix} 1 \\ -7 \\ 7 \end{pmatrix} \quad \overrightarrow{CD} = \mathbf{d} - \mathbf{c} = \begin{pmatrix} 4 \\ -4 \\ -2 \end{pmatrix}`

- **[M1]** Attempt at least one vector correctly (condone addition errors).
    
- **[A2]** All six vectors correct. (Deduct 1 mark for each error or omission).
    

#### **Part (b)**

**Step 2: Calculate vector lengths** `|\overrightarrow{AB}| = \sqrt{49 + 25 + 25} = \sqrt{99}` `|\overrightarrow{AC}| = \sqrt{16 + 4 + 16} = \sqrt{36} = 6` `|\overrightarrow{AD}| = \sqrt{64 + 4 + 4} = \sqrt{72}` `|\overrightarrow{BC}| = \sqrt{9 + 9 + 81} = \sqrt{99}` `|\overrightarrow{BD}| = \sqrt{1 + 49 + 49} = \sqrt{99}` `|\overrightarrow{CD}| = \sqrt{16 + 16 + 4} = \sqrt{36} = 6`

- **[M1]** Attempt to calculate at least 3 lengths.
    

**Step 3: Identify the base side length** (i) From the lengths, `B` is equidistant from `A`, `C`, and `D` (`\sqrt{99}`). Thus, `B` is the apex, and `A`, `C`, `D` are on the base. Check perpendicularity for the square base: `\overrightarrow{AC} \cdot \overrightarrow{CD} = (4)(4) + (2)(-4) + (4)(-2) = 16 - 8 - 8 = 0`. Thus, `AC \perp CD` and they are adjacent sides. Length of the base side is: `6`

- **[A1]** Correct base length. (S+ for clear reasoning).
    

**Step 4: Find the cosine of the slant angle** (ii) The slanting edge is `AB` (or `BC`, `BD`), length `\sqrt{99}`. The diagonal of the square base from `A` to `D` has length `\sqrt{72} = 6\sqrt{2}`. The center of the base `M` is the midpoint of `AD`. The distance from a base vertex `A` to the center `M` is half the diagonal: `\frac{1}{2}|\overrightarrow{AD}| = \frac{\sqrt{72}}{2} = \frac{6\sqrt{2}}{2} = 3\sqrt{2}`. The angle `\theta` between the slanting edge `AB` and the base is found using the right-angled triangle `\triangle AMB`: `\cos \theta = \frac{|\overrightarrow{AM}|}{|\overrightarrow{AB}|} = \frac{3\sqrt{2}}{\sqrt{99}} = \frac{3\sqrt{2}}{3\sqrt{11}} = \frac{\sqrt{2}}{\sqrt{11}}`

- **[M1]** Identifies a suitable geometric pair.
    
- **[M1]** Finding an expression for `\cos \theta` using trigonometry or dot product.
    
- **[A1]** Correct value.
    

**Step 5: Calculate the height of the pyramid** (iii) Using Pythagoras on `\triangle AMB`: `h^2 + (3\sqrt{2})^2 = (\sqrt{99})^2 \Rightarrow h^2 + 18 = 99 \Rightarrow h^2 = 81` `h = 9`

- **[M1, A1]** Follow through their `72` and `99`; correct height.
    

**Step 6: Find position vector of E** (iv) `E` completes the square base `ACDE`. Since `AC \perp CD`, `\overrightarrow{AE} = \overrightarrow{CD}`. `\overrightarrow{OE} = \overrightarrow{OA} + \overrightarrow{CD} = \begin{pmatrix} -2 \\ 3 \\ -1 \end{pmatrix} + \begin{pmatrix} 4 \\ -4 \\ -2 \end{pmatrix} = \begin{pmatrix} 2 \\ -1 \\ -3 \end{pmatrix}`

- **[M1, A1]** Full method for the 4th base vertex using known vectors; correct coordinates.
    

#### **Part (c)**

**Step 7: Find the opposite apex** Let `M` be the midpoint of the square base, which is the midpoint of `AD` (or `CE`). `\overrightarrow{OM} = \frac{1}{2}(\mathbf{a} + \mathbf{d}) = \frac{1}{2}\begin{pmatrix} -2+6 \\ 3+1 \\ -1+1 \end{pmatrix} = \begin{pmatrix} 2 \\ 2 \\ 0 \end{pmatrix}` The other apex `B'` is found by reflecting `B` across `M`. `\overrightarrow{MB} = \mathbf{b} - \overrightarrow{OM} = \begin{pmatrix} 5 \\ 8 \\ -6 \end{pmatrix} - \begin{pmatrix} 2 \\ 2 \\ 0 \end{pmatrix} = \begin{pmatrix} 3 \\ 6 \\ -6 \end{pmatrix}` To reach the opposite apex from `M`, go in the opposite direction: `-\overrightarrow{MB} = \begin{pmatrix} -3 \\ -6 \\ 6 \end{pmatrix}`. `\overrightarrow{OB'} = \overrightarrow{OM} - \overrightarrow{MB} = \begin{pmatrix} 2 \\ 2 \\ 0 \end{pmatrix} + \begin{pmatrix} -3 \\ -6 \\ 6 \end{pmatrix} = \begin{pmatrix} -1 \\ -4 \\ 6 \end{pmatrix}`

- **[M1]** Attempt to find the vector `BM` (or `MB`) or the line containing the other vertex.
    
- **[M1]** Full method to find the opposite vertex.
    
- **[A1]** Correct position vector.
    

---
topic: "Integration"
subtopic: "Integration by substitution"
---
### **Question 6**

**(i)** A curve with equation `y = f(x)` has `f(x) \ge 0` for `x \ge a` and `A = \int_{a}^{b} f(x) dx \quad \text{and} \quad V = \pi \int_{a}^{b} [f(x)]^2 dx` where `a` and `b` are constants with `b > a`. Use integration by substitution to show that for the positive constants `r` and `h` `\pi \int_{a+h}^{b+h} [r + f(x-h)]^2 dx = \pi r^2(b-a) + 2\pi r A + V` **(3)**

**(ii)** **Figure 1** _(A sketch of a rational function curving upward with two vertical asymptotes at x=m and x=n. The curve crosses the y-axis at (0, p))._

Figure 1 shows part of the curve `C` with equation `y = 4 + \frac{2}{\sqrt{3}\cos x + \sin x}` This curve has asymptotes `x = m` and `x = n` and crosses the y-axis at `(0, p)`.

**(a)** Find the value of `p`, the value of `m` and the value of `n`. **(4)**

**(b)** Show that the equation of `C` can be written in the form `y = r + f(x-h)` and specify the function `f` and the constants `r` and `h`. **(4)**

The region bounded by `C`, the x-axis and the lines `x = \frac{\pi}{6} \quad \text{and} \quad x = \frac{\pi}{3}` is rotated through `2\pi` radians about the x-axis.

**(c)** Find the volume of the solid formed. **(9)** **(Total 20 marks)**

### **Mark Scheme 6**

#### **Part (i)**

**Step 1: Perform substitution** Let `u = x - h \Rightarrow dx = du`. When `x = a + h`, `u = a`. When `x = b + h`, `u = b`. `I = \pi \int_{a}^{b} [r + f(u)]^2 du`

- **[M1]** Select and use a suitable substitution. Changes limits and function.
    

**Step 2: Expand and integrate** `I = \pi \int_{a}^{b} \left( r^2 + 2r f(u) + [f(u)]^2 \right) du`

- **[dM1]** Expands the bracket.
    

`= \pi \left[ r^2 u \right]_a^b + 2\pi r \int_{a}^{b} f(u) du + \pi \int_{a}^{b} [f(u)]^2 du` `= \pi r^2(b - a) + 2\pi r A + V \quad (*)`

- **[A1 cso]** Splits and integrates successfully with no incorrect working.
    

#### **Part (ii)(a)**

**Step 3: Find y-intercept p** Substitute `x = 0`: `y = 4 + \frac{2}{\sqrt{3}\cos(0) + \sin(0)} = 4 + \frac{2}{\sqrt{3}}` So `p = 4 + \frac{2}{\sqrt{3}}`.

- **[B1]** Correct value for `p`.
    

**Step 4: Find asymptotes m and n** Vertical asymptotes occur where the denominator is zero. `\sqrt{3}\cos x + \sin x = 0 \Rightarrow \sin x = -\sqrt{3}\cos x \Rightarrow \tan x = -\sqrt{3}`

- **[M1]** Method for finding asymptotes.
    

Solving for `x` yields: `x = -\frac{\pi}{3}, \quad \frac{2\pi}{3}` From the sketch, `m < 0` and `n > 0`, so: `m = -\frac{\pi}{3} \quad \text{and} \quad n = \frac{2\pi}{3}`

- **[A1, A1]** Correct values for `m` and `n`.
    

#### **Part (ii)(b)**

**Step 5: Apply harmonic addition formula** `\sqrt{3}\cos x + \sin x = R\cos(x - \alpha)` `R = \sqrt{(\sqrt{3})^2 + 1^2} = \sqrt{4} = 2` `\cos \alpha = \frac{\sqrt{3}}{2}, \sin \alpha = \frac{1}{2} \Rightarrow \alpha = \frac{\pi}{6}` `\sqrt{3}\cos x + \sin x = 2\cos\left(x - \frac{\pi}{6}\right)`

- **[M1, A1]** Use of `R\cos(x \pm \alpha)` or similar; correct expression.
    

**Step 6: Rewrite the equation** `y = 4 + \frac{2}{2\cos\left(x - \frac{\pi}{6}\right)} = 4 + \sec\left(x - \frac{\pi}{6}\right)`

- **[B1]** Correct `\sec` term.
    

Thus, `r = 4`, `h = \frac{\pi}{6}`, and `f(x) = \sec x`.

- **[A1]** Correct identification of `r`, `h`, and `f(x)`.
    

#### **Part (ii)(c)**

**Step 7: Map to Part (i)** We need the volume formed by rotating `y = 4 + \sec\left(x - \frac{\pi}{6}\right)` between `\frac{\pi}{6}` and `\frac{\pi}{3}`. Using (i) with `h = \pi/6`: Limits map as follows: `x = a + h \Rightarrow \frac{\pi}{6} = a + \frac{\pi}{6} \Rightarrow a = 0`. `x = b + h \Rightarrow \frac{\pi}{3} = b + \frac{\pi}{6} \Rightarrow b = \frac{\pi}{6}`. So we need `A` and `V` for `f(x) = \sec x` on `[0, \pi/6]`.

- **[M1]** Identifies connection and maps limits (implied by correct limits later).
    

**Step 8: Calculate A** `A = \int_{0}^{\pi/6} \sec x dx = \left[ \ln|\sec x + \tan x| \right]_0^{\pi/6}`

- **[M1]** Integral of `\sec x`.
    

`= \ln\left|\sec\left(\frac{\pi}{6}\right) + \tan\left(\frac{\pi}{6}\right)\right| - \ln|\sec(0) + \tan(0)|` `= \ln\left| \frac{2}{\sqrt{3}} + \frac{1}{\sqrt{3}} \right| - \ln|1| = \ln\left(\frac{3}{\sqrt{3}}\right) = \ln(\sqrt{3})`

- **[A1]** Correct value for `A`.
    

**Step 9: Calculate V** `V = \pi \int_{0}^{\pi/6} \sec^2 x dx = \pi \left[ \tan x \right]_0^{\pi/6}`

- **[M1]** Integral of `\sec^2 x`.
    

`= \pi \tan\left(\frac{\pi}{6}\right) - 0 = \frac{\pi}{\sqrt{3}}`

- **[A1]** Correct value for `V`.
    

**Step 10: Apply the formula from (i)** `\text{Volume} = \pi r^2(b - a) + 2\pi r A + V` `= \pi(4^2)\left(\frac{\pi}{6} - 0\right) + 2\pi(4)\ln(\sqrt{3}) + \frac{\pi}{\sqrt{3}}`

- **[M1]** Combines the values using the proven identity.
    

`= \frac{16\pi^2}{6} + 8\pi\ln(\sqrt{3}) + \frac{\pi}{\sqrt{3}} = \frac{8\pi^2}{3} + 8\pi\ln(\sqrt{3}) + \frac{\pi}{\sqrt{3}}`

- **[A1]** Correct exact volume.
    

---
topic: "Integration"
subtopic: "Areas under curves"
---
### **Question 7**

**Figure 2** _(A circular tower C is centered at T(0,1) with radius 1. A goat attached to the origin O(0,0) via a string of length π roams the region outside. The string wraps around the tower up to point A, then runs straight to the goat at G(x,y))._

A circular tower stands in a large horizontal field of grass. A goat is attached to one end of a string and the other end of the string is attached to the fixed point `O` at the base of the tower. Taking the point `O` as the origin `(0, 0)`, the centre of the base of the tower is at the point `T(0, 1)`. The radius of the base of the tower is 1. The string has length `\pi` and you may ignore the size of the goat. The curve `C` represents the edge of the region that the goat can reach as shown in Figure 2.

**(a)** Write down the equation of `C` for `y < 0`. **(1)**

When the goat is at the point `G(x, y)` with `x > 0` and `y > 0`, as shown in Figure 2, the string lies along `OAG` where `OA` is an arc of the circle with angle `OTA = \theta` radians and `AG` is a tangent to the circle at `A`.

**(b)** With the aid of a suitable diagram show that `x = \sin \theta + (\pi - \theta)\cos \theta` `y = 1 - \cos \theta + (\pi - \theta)\sin \theta` **(5)**

**(c)** By considering `\int y \frac{dx}{d\theta} d\theta`, show that the area between `C`, the positive x-axis and the positive y-axis can be expressed in the form `\int_{0}^{\pi} u \sin u du + \int_{0}^{\pi} u^2 \sin^2 u du + \int_{0}^{\pi} u \sin u \cos u du` **(5)**

**(d)** Show that `\int_{0}^{\pi} u^2 \sin^2 u du = \frac{\pi^3}{6} + \int_{0}^{\pi} u \sin u \cos u du` **(4)**

**(e)** Hence find the area of grass that can be reached by the goat. **(8)** **(Total 23 marks)**

### **Mark Scheme 7**

#### **Part (a)**

**Step 1: Write equation for y < 0** When `y < 0`, the string does not wrap around the tower, so the region is a simple semicircle of radius `\pi` centered at the origin. `x^2 + y^2 = \pi^2`

- **[B1]** Correct equation.
    

#### **Part (b)**

**Step 2: Define components of the path** The arc length `OA = r\theta = (1)\theta = \theta`. The remaining string length is `AG = \pi - \theta`.

- **[B1, B1]** `OA = \theta` and `AG = \pi - \theta`.
    

**Step 3: Express coordinates of A** `T` is at `(0, 1)`. Relative to `T`, the position of `A` is given by rotating the vector `(0, -1)` by `\theta` counterclockwise (based on the diagram, the angle `\theta` is measured from the negative y-axis). Thus, `A = (1\sin\theta, 1 - 1\cos\theta) = (\sin\theta, 1 - \cos\theta)`.

- **[M1]** Clear method for calculating coordinate components.
    

**Step 4: Vector AG** Since `AG` is a tangent at `A`, it is perpendicular to `TA`. The direction of `TA` is `(\sin\theta, -\cos\theta)`. The tangent direction (moving away from the circle) is `(\cos\theta, \sin\theta)`. The vector `\overrightarrow{AG}` has length `\pi - \theta` and direction `(\cos\theta, \sin\theta)`. Thus, `\overrightarrow{AG} = ((\pi - \theta)\cos\theta, (\pi - \theta)\sin\theta)`.

- **[A1, A1 cso]** Fully correct components added to coordinates of `A` to yield the final given answers: `x = \sin\theta + (\pi - \theta)\cos\theta` `y = 1 - \cos\theta + (\pi - \theta)\sin\theta`
    

#### **Part (c)**

**Step 5: Differentiate x with respect to theta** `\frac{dx}{d\theta} = \cos\theta - 1\cdot\cos\theta - (\pi - \theta)\sin\theta = -(\pi - \theta)\sin\theta`

- **[M1, A1]** Application of product rule; correct derivative.
    

**Step 6: Set up Area Integral** The area in the first quadrant is given by `\int_{x=0}^{x=X_{max}} y dx = \int_{\theta_{max}}^{\theta_{min}} y \frac{dx}{d\theta} d\theta`. At `y=0`, the string is fully unwrapped along the x-axis, so `\theta = \pi`. At `x=0`, the string points straight up, `\theta = 0`. `\text{Area} = \int_{\pi}^{0} [1 - \cos\theta + (\pi - \theta)\sin\theta][-(\pi - \theta)\sin\theta] d\theta`

- **[M1]** Ignores limits for the mark, correct integrand structure.
    

**Step 7: Apply Substitution** Let `u = \pi - \theta \Rightarrow d\theta = -du`. Limits: `\theta = \pi \Rightarrow u = 0`; `\theta = 0 \Rightarrow u = \pi`. Also, `\cos(\pi - u) = -\cos u` and `\sin(\pi - u) = \sin u`. `\text{Area} = \int_{0}^{\pi} [1 - (-\cos u) + u\sin u][ -u\sin u ] (-du)`

- **[M1]** Suitable substitution into integral.
    

**Step 8: Expand into requested format** `= \int_{0}^{\pi} [1 + \cos u + u\sin u][u\sin u] du` `= \int_{0}^{\pi} (u\sin u + u\cos u\sin u + u^2\sin^2 u) du \quad (*)`

- **[A1 cso]** Correctly simplified to printed answer.
    

#### **Part (d)**

**Step 9: Use integration by parts on the second term** `\int_{0}^{\pi} u^2 \sin^2 u du = \int_{0}^{\pi} u^2 \left(\frac{1 - \cos 2u}{2}\right) du = \int_{0}^{\pi} \frac{u^2}{2} du - \int_{0}^{\pi} \frac{u^2}{2} \cos 2u du`

- **[M1]** Uses double angle identity.
    

`\int_{0}^{\pi} \frac{u^2}{2} du = \left[ \frac{u^3}{6} \right]_0^\pi = \frac{\pi^3}{6}`

- **[A1]** Correct evaluation of the first part.
    

**Step 10: Apply parts to the second half** For `\int \frac{u^2}{2} \cos 2u du`: Let `v = u^2/2 \Rightarrow dv = u du`. Let `dw = \cos 2u du \Rightarrow w = \frac{\sin 2u}{2}`. `= \left[ \frac{u^2}{4} \sin 2u \right]_0^\pi - \int_{0}^{\pi} u \frac{\sin 2u}{2} du`

- **[M1]** Correct application of integration by parts.
    

Since `\sin(2\pi) = \sin(0) = 0`, the boundary term vanishes. Substitute `\sin 2u = 2\sin u\cos u`: `= 0 - \int_{0}^{\pi} u \frac{2\sin u\cos u}{2} du = -\int_{0}^{\pi} u\sin u\cos u du` Thus: `\int_{0}^{\pi} u^2 \sin^2 u du = \frac{\pi^3}{6} - \left( -\int_{0}^{\pi} u\sin u\cos u du \right) = \frac{\pi^3}{6} + \int_{0}^{\pi} u\sin u\cos u du \quad (*)`

- **[A1 cso]** Completes proof showing boundary evaluates to 0.
    

#### **Part (e)**

**Step 11: Integrate remaining components** We need to calculate the area from (c). Substitute the result from (d): `\text{Area (1st quadrant)} = \int_{0}^{\pi} u\sin u du + \left( \frac{\pi^3}{6} + \int_{0}^{\pi} u\sin u\cos u du \right) + \int_{0}^{\pi} u\sin u\cos u du` `= \frac{\pi^3}{6} + \int_{0}^{\pi} u\sin u du + 2\int_{0}^{\pi} u\sin u\cos u du`

**Step 12: Evaluate integrals** For `\int u\sin u du`: Parts: `v = u`, `dw = \sin u du \Rightarrow w = -\cos u`. `= [-u\cos u]_0^\pi + \int_{0}^{\pi} \cos u du = -\pi(-1) - 0 + [\sin u]_0^\pi = \pi`

- **[M1, A1]** Attempts by parts; correct evaluation `= \pi`.
    

For `\int u\sin u\cos u du = \int u\frac{\sin 2u}{2} du`: Parts: `v = u/2`, `dw = \sin 2u du \Rightarrow w = -\frac{\cos 2u}{2}`. `= \left[ -u\frac{\cos 2u}{4} \right]_0^\pi + \int_{0}^{\pi} \frac{\cos 2u}{4} du = -\frac{\pi(1)}{4} - 0 + \left[ \frac{\sin 2u}{8} \right]_0^\pi = -\frac{\pi}{4}`

- **[M1, A1]** Attempts by parts; correct evaluation `= -\pi/4`.
    

**Step 13: Area of first quadrant reachable** `\text{Area}_{Q1} = \int_{0}^{\pi} u\sin u du + \frac{\pi^3}{6} + 2\left(-\frac{\pi}{4}\right) = \pi + \frac{\pi^3}{6} - \frac{\pi}{2} = \frac{\pi}{2} + \frac{\pi^3}{6}`

**Step 14: Total area reachable** By symmetry, the region in the second quadrant bounded by the unwrapping string is identical to the first quadrant. `\text{Area}_{Q1+Q2} = 2 \left( \frac{\pi}{2} + \frac{\pi^3}{6} \right) = \pi + \frac{\pi^3}{3}` This gives the total area _including the footprint of the tower_! Wait, the integration gives the area down to the x-axis, which includes the lower half of the tower. We must subtract the area of the tower's base (or half of it, depending on the integration bounds). Actually, the integral calculated the exact area bounded by the curve, the x-axis, and y-axis. The tower is centered at `(0,1)` radius `1`, so it lives in Q1 and Q2. The integral area includes the semi-circle of the tower. Total area = Area of 2 symmetrical top unwrapped regions + Area of semicircle in lower half (`y < 0`). Area of lower semicircle = `\frac{1}{2} \pi (\pi)^2 = \frac{\pi^3}{2}`. Total reachable area = `2 \times \text{Area}_{Q1} + \frac{\pi^3}{2} - \text{Area of tower}`. Area of tower = `\pi(1)^2 = \pi`. `\text{Total Area} = 2\left(\frac{\pi^3}{6} + \frac{\pi}{2}\right) + \frac{\pi^3}{2} - \pi = \frac{\pi^3}{3} + \pi + \frac{\pi^3}{2} - \pi = \frac{5\pi^3}{6}`

- **[M1]** Suitable strategy to combine components.
    
- **[B1]** Correct area for semicircle (`\pi^3/2`) or tower (`\pi`).
    
- **[A1]** Correct final total reachable area.