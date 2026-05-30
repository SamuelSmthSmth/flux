### Question 7

**Figure 4** _(A diagram shows two circles resting on the x-axis, touching each other externally. The larger circle on the left has radius `r_1`, the smaller on the right has radius `r_2`. The region `R` bounded by the x-axis and the minor arcs of the circles between the contact points is shaded.)_

Figure 4 shows a circle with radius `r_1` and a circle with radius `r_2` The circles touch externally at a single point above the `x`-axis. Both circles also have the `x`-axis as a tangent.

**(a)** Show that the horizontal distance between the centres of the circles, `d`, is given by `d^2 = 4r_1r_2` **(2)**

The finite region `R`, shown shaded in Figure 4, is bounded by the `x`-axis and minor arcs of the two circles. Given that `r_1 \geqslant r_2`

**(b)** show that the area of `R` is given by `(r_1 + r_2)\sqrt{r_1r_2} - \frac{1}{2}(r_1^2 - r_2^2)\theta - \frac{1}{2}\pi r_2^2` where `\cos\theta = \frac{r_1 - r_2}{r_1 + r_2}` **(5)**

**Figure 5** _(A diagram shows a sequence of circles C1​,C2​,C3​,… getting progressively smaller, all resting on the x-axis and touching the adjacent circles externally.)_

A sequence of circles, `C_1, C_2, C_3, \dots` with radii `r_1, r_2, r_3, \dots` respectively, is constructed such that

- each circle is tangential to and above the `x`-axis
    
- the first circle, `C_1`, has centre `(0, 1)`
    
- each successive circle touches the preceding one externally at a single point
    
- the horizontal distances between the centres of successive circles form a geometric sequence with first term `2` and common ratio `\frac{1}{\sqrt{3}}`
    

The first few circles in the sequence are shown in Figure 5.

**(c)** (i) Determine the value of `r_3` (ii) Show that, for `n \geqslant 1`, `r_{n+2} = kr_n` where `k` is a constant to be determined. (iii) Hence show that, for `n \geqslant 1`, `r_{2n} = r_{2n-1}` **(9)**

The region bounded between `C_n`, `C_{n+1}` and the `x`-axis is `R_n` The total area, `A`, bounded above the `x`-axis and under all the circles is the sum of the areas of all these regions.

**(d)** Determine the value of `A`, giving the answer in simplest form. **(6)** **(+S2)**

### Mark Scheme

#### **Part (a)**

**Step 1: Use Pythagoras on the triangle formed by the centres** Distance between centres is `r_1 + r_2` So `d^2 = (r_1 + r_2)^2 - (r_1 - r_2)^2`

- **[M1 (S+)]** Recognition of the distance between centres as sum of radii and uses Pythagoras on appropriate triangle.
    

**Step 2: Expand and complete proof** `\Rightarrow d^2 = r_1^2 + 2r_1r_2 + r_2^2 - r_1^2 + 2r_1r_2 - r_2^2 = 4r_1r_2 *`

- __[A1_]_* Expands and completes proof.
    

#### **Part (b)**

**Step 3: Find the angle** Let the angle subtended at `A` be `\theta`. Then `\cos\theta = \frac{\text{adj}}{\text{hyp}} = \frac{r_1 - r_2}{r_1 + r_2}`

- **[B1]** Correctly shows cosine of the appropriate angle - may use another appropriate angle, so accept equivalents.
    

**Step 4: Area of the sectors** The area of sectors is `\frac{1}{2}r_1^2\theta + \frac{1}{2}r_2^2(\pi - \theta)`

- **[M1]** Sets suitable angle and attempts area of both sectors. (Allow with different angles for M.) Correct areas, separate or added.
    

**Step 5: Area of the trapezium** Trapezium has area `\frac{1}{2}(r_1 + r_2)d = (r_1 + r_2)\sqrt{r_1r_2}`

- **[M1]** Attempts the area of the trapezium using (a). May use rectangle and triangle.
    

**Step 6: Combine areas to find region R** Area bounded is given by Area of trapezium `ABCD` - sectors `AMD` and `BMC`

- **[M1]** For a correct overall strategy to find the area evidenced.
    

**Step 7: Final Expression** `= (r_1 + r_2)\sqrt{r_1r_2} - \frac{1}{2}(r_1^2 - r_2^2)\theta - \frac{1}{2}\pi r_2^2 *`

- __[A1_]_* Achieves correct expression. Depends on all three M’s but not the B.
    

#### **Part (c)(i)**

**Step 8: Set up equation for r3​** `d^2 = 4r_2r_3 \Rightarrow \left(2 \times \frac{1}{\sqrt{3}}\right)^2 = 4 \times 1 \times r_3 \Rightarrow r_3 = \dots` Alt: `\frac{2\sqrt{r_2r_3}}{2\sqrt{r_1r_2}} = \frac{1}{\sqrt{3}} \Rightarrow r_3 = \dots`

- **[M1]** Uses the result of (a) and the second term of the GS for distances to form and solve an equation for `r_3`.
    

**Step 9: Calculate r3​** `r_3 = \frac{1}{3}`

- **[A1]** Correct value.
    

#### **Part (c)(ii)**

**Step 10: General expression for distance** Horizontal distance between centres of `C_{m+1}` and `C_m` is `d = 2\left(\frac{1}{\sqrt{3}}\right)^{m-1}` Alt: `\frac{2\sqrt{r_{n+2}r_{n+1}}}{2\sqrt{r_{n+1}r_n}} = \frac{1}{\sqrt{3}}`

- **[M1]** Attempts the distance between centres of two general circles using the G.S. Allow if power out by 1. Allow M’s for equivalent work if indexing is out by 1. Alt: uses ratio of successive terms of the GS of distances.
    

**Step 11: Expression for rn+2​** `r_{n+2} = \frac{"d^2"}{4r_{n+1}} = \frac{4/3^n}{4r_{n+1}}` Alt: `\Rightarrow \frac{r_{n+2}}{r_n} = \frac{1}{3}`

- **[M1]** Uses result of (a) with their distance to find an expression for `r_{n+2}` in terms of `r_{n+1}`. Alt: Squares and cancels.
    

**Step 12: Substitute back to get in terms of rn​** `= \frac{1}{3^n\left(\frac{4/3^{n-1}}{4r_n}\right)} = \dots = \frac{r_n}{3}` Alt: `\Rightarrow r_{n+2} = \frac{1}{3}r_n`

- **[M1, A1]** Repeats process to find expression in terms of `r_n`; Correct answer. Alt: Rearranges to get `r_{n+2}` in terms of `r_n`.
    

#### **Part (c)(iii)**

**Step 13: Recognise sequence properties** The `r_{2n-1}` form a GS with `a=1`, `r=\frac{1}{3}`, so `r_{2n-1} = \left(\frac{1}{3}\right)^{n-1}`

- **[M1]** Recognises alternating terms form a G.S and identifies the closed form.
    

**Step 14: Use formulas to complete proof** So `r_{2n} = \frac{4/3^{2n-2}}{4r_{2n-1}} = \frac{1}{3^{2n-2}} \times 3^{n-1} = \frac{1}{3^{n-1}} = r_{2n-1} *`

- **[M1, A1]** Substitutes into the formula and finds `r_{2n}`; completes proof.
    

> _Alternative for (iii):_ The `r_{2n}` also form a GS with `a = r_2 = 1`, `r = \frac{1}{3}`, so `r_{2n} = \left(\frac{1}{3}\right)^{n-1}` hence `r_{2n} = r_{2n-1}`
> 
> - **[M1, A1]** Reasons the other alternating terms also form a series ; correct reason and conclusion.
>     

> _Alternative for (iii) via Induction:_ Suppose `r_{2k} = r_{2k-1}` for `k \geqslant 1` then `\frac{4r_{2k+2}r_{2k+1}}{4r_{2k+1}r_{2k}} = \frac{1}{3} \Rightarrow \frac{r_{2k+2}r_{2k+1}}{r_{2k+1}r_{2k-1}} = \frac{1}{3}` **[M1]** `\Rightarrow r_{2(k+1)} = \frac{1}{3}r_{2k-1} \Rightarrow r_{2k+2} = \frac{1}{3} \times 3r_{2k-1+2} = r_{2k+1}` **[M1]** So True for `n = k` implies true for `n = k + 1`, and also true for `n = 1` as `r_2 = 1 = r_1`, hence true for all `n`. **[A1]**

#### **Part (d)**

**Step 15: Consider radii ratios for Regions** For `R_{2n-1}` radii of adjacent circles are equal `(= 3^{1-n})` and for `R_{2n}` radii of adjacent circles differ by ratio `\frac{1}{3}` `\left( 3^{1-n} \rightarrow \frac{3^{1-n}}{3} = 3^{-n} \right)`

- **[M1 (S+)]** Considers the odd and even cases for `R_n` and identifies the same ratio of radii. May be implicit in working. May be deduced by considering first few terms.
    

**Step 16: Deduce θ for both cases** (For “odd” case `\cos\theta = 0 \Rightarrow \theta = \frac{\pi}{2}` and) For “even” case `\cos\theta = \frac{3^{1-n} - 3^{-n}}{3^{1-n} + 3^{-n}} = \frac{3 - 1}{3 + 1} = \frac{1}{2} \Rightarrow \theta = \frac{\pi}{3}`

- **[B1]** Correct value for `\cos\theta` or `\theta` deduced for the even alternate regions. Allow from the `n=1` case.
    

**Step 17: Apply general area expression** Area `R_{2n-1} = (3^{1-n} + 3^{1-n})\sqrt{3^{2(1-n)}} - 0 - \frac{1}{2}\pi 3^{2(1-n)}` Area `R_{2n} = \left(3^{1-n} + \frac{1}{3}3^{1-n}\right)\sqrt{\frac{1}{3}3^{2(1-n)}} - \frac{1}{2}\left(3^{2(1-n)} - \frac{1}{9}3^{2(1-n)}\right)\theta - \frac{1}{2}\pi\frac{3^{2(1-n)}}{3^2}`

- **[M1]** Attempts the general expression for the two types of area, either separately or as a sum of adjacent pairs. May have `\theta` or their value or an arccos expression. Alternatively, works out the first term for each GS and extrapolates the series. Allow with `\frac{1}{3}` or `\frac{1}{\sqrt{3}}` for the ratio.
    

**Step 18: Find sum to infinity** `\left\{ \text{Area } R_{2n-1} = \frac{9}{9^n}\left(2 - \frac{1}{2}\pi\right) \text{ and Area } R_{2n} = \frac{9}{9^n}\left(\frac{4}{3\sqrt{3}} - \frac{4\pi}{27} - \frac{1}{18}\pi\right) \right\}` So area is given by sum to infinity of GS `\frac{1}{1 - \frac{1}{9}} \times \dots`

- **[M1]** Recognises the sum to infinity of a G.S. is required and applies it with suitable ratio (allow 1/3) to at least one set of areas (or to both combined)
    

**Step 19: Combine both sets of areas** Area `= \frac{1}{1 - 9^{-1}} \left( 2 - \frac{1}{2}\pi + \frac{4}{3\sqrt{3}} - \frac{4\pi}{27} - \frac{1}{18}\pi \right)`

- **[dM1]** Full method, both sets of areas considered, or combined, with angle attempted and substituted, to reach an expression for the area.
    

**Step 20: Final Area calculation** Area `= \frac{9}{8}\left( 2 + \frac{4\sqrt{3}}{9} - \frac{19}{27}\pi \right) = \frac{9}{4} + \frac{\sqrt{3}}{2} - \frac{19}{24}\pi`

- **[A1]** Correct answer, accept simplified equivalents.
    

#### **Special Marks (S1 / S2)**

- **[S2]** Award S2 for a solution scoring 20+ marks that is succinct and includes some S+ points (see notes below).
    
- **[S1]** Award S1 for:
    
    - a fully correct solution that is succinct but does not mention any S+ points
        
    - a solution scoring 18+ marks that may be laboured but includes at least 2 S+ points
        
    - A succinct solution that scores 18+ marks that includes at least one S+ point.
        

> **Notes:**
> 
> - S+ for use of suitable sketches to investigate the problem.
>     
> - S+ marks for good explanations at the point indicated.
>     
> - S+ for well communicated solutions, or efficient solutions identified.
>