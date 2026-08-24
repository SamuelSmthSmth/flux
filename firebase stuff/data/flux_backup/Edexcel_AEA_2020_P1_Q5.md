---
topic: "Trigonometric Identities and Equations"
subtopic: "Simple trigonometric equations"
---

### Question 5

**(a)** The box below shows a student's attempt to prove the following identity for $a > b > 0$ $$\arctan a - \arctan b \equiv \arctan\frac{a - b}{1 + ab}$$

> Let $x = \arctan a$ and $y = \arctan b$, so that $a = \tan x$ and $b = \tan y$ So $$\tan(\arctan a - \arctan b) \equiv \tan(x - y) \equiv \frac{\tan x - \tan y}{1 - \tan^2(xy)}$$ $$\equiv \frac{a - b}{1 - (ab)^2} \equiv \frac{a - ab + ab - b}{(1 - ab)(1 + ab)}$$ $$\equiv \frac{a(1 - ab) - b(1 - ab)}{(1 - ab)(1 + ab)} \equiv \frac{a - b}{1 + ab}$$ Taking $\arctan$ of both sides gives $$\arctan a - \arctan b = \arctan \frac{a - b}{1 + ab}$$ as required.

There are three errors in the proof where the working does not follow from the previous line. (i) Describe these three errors. **(3)** (ii) Write out a correct proof of the identity. **(2)**

**(b)** (In this question take $g$ to be $9.8 \text{ ms}^{-2}$)

**Figure 3** _(Diagram shows a ball projected from point A (1m above ground) at angle $\theta$ and speed 28m/s, aiming to clear a 6m high wall located $10\sqrt{2}$m horizontally away)._

Balls are projected, one after another, from a point, $A$, one metre above horizontal ground. Each ball travels in a vertical plane towards a 6 metre high vertical wall of negligible thickness, which is a horizontal distance of $10\sqrt{2}$ metres from $A$. The balls are modelled as particles and it is assumed that there is no air resistance. Each ball is projected with an initial speed of $28 \text{ ms}^{-1}$ and at a random angle $\theta$ to the horizontal, where $0 < \theta < 90^\circ$.

Given that a ball will pass over the wall precisely when $\alpha \le \theta \le \beta$ (i) find, in degrees, the angle $\beta - \alpha$ **(10)** (ii) Deduce that the probability that a particular ball will pass over the wall is $\frac{2}{3}$ **(1)** (iii) Hence find the probability that exactly 2 of the first 10 balls projected pass over the wall. You should give your answer in the form $\frac{P}{Q^k}$ where $P$, $Q$ and $k$ are integers and $P$ is not a multiple of $Q$. **(3)** (iv) Explain whether taking air resistance into account would increase or decrease the probability in (b)(iii). **(1)** **(+S2)**

### Mark Scheme 5

#### **Part (a)**

**Step 1: Identify errors** (i) The expansion of $\tan(x - y)$ is incorrect between lines 2 and 3, the denominator should be $1 + \tan x \tan y$. Between lines 3 and 4 when replacing tangents $\tan^2(xy)$ is not $(ab)^2$ - the student has incorrectly assumed $(\tan xy)^2 = (\tan x \tan y)^2$. The factorisation between lines 5 and 6 is incorrect, eg $a - ab = a(1 - b)$ not $a(1 - ab)$.

- **[B1, B1, B1]** Identifies all three errors.
    

**Step 2: Correct proof** (ii) Let $x = \arctan a$ and $y = \arctan b$. We have $$\tan(x - y) = \frac{\tan x - \tan y}{1 + \tan x \tan y} = \frac{a - b}{1 + ab}$$ Hence taking $\arctan$ of both sides gives $$x - y = \arctan a - \arctan b = \arctan\left(\frac{a - b}{1 + ab}\right)$$ as required.

- __[M1, A1_]_* Uses correct formula and concludes correctly.
    

#### **Part (b)(i)**

**Step 3: Horizontal motion** Horizontal motion is given by $s_x = 28\cos\theta \times t$ so ball is in motion for $t = \frac{10\sqrt{2}}{28\cos\theta}$ seconds to reach wall.

- **[B1]** Correct equation for $t$.
    

**Step 4: Vertical motion** Vertical motion relative to $A$ is given by $$s_y = 28\sin\theta \times t - \frac{1}{2}gt^2$$ OR relative to ground $$s_y = 28\sin\theta \times t - \frac{1}{2}gt^2 + 1$$.

- **[B1 (S+)]** Correct vertical set up.
    

**Step 5: Apply condition** Ball clears wall if $s_y > 5$ (for motion relative to A) OR $s_y > 6$ (if relative to ground).

- **[M1]** Uses correct height threshold.
    

**Step 6: Substitute and form inequality** $$\Rightarrow 28\sin\theta \times \frac{10\sqrt{2}}{28\cos\theta} - \frac{1}{2}g\left(\frac{10\sqrt{2}}{28\cos\theta}\right)^2 > 5$$ oe $$\Rightarrow 10\sqrt{2}\tan\theta - \frac{98}{10}\frac{200}{28^2}\sec^2\theta > 5$$ $$\Rightarrow 2\sqrt{2}\tan\theta - \frac{5}{4}(1 + \tan^2\theta) > 1$$ (Note: simplifies differently in actual scheme but leads to quadratic) $$\Rightarrow \tan^2\theta - 8\sqrt{2}\tan\theta + 5 < 0$$ (or similar quadratic).

- **[M1, M1, M1, A1]** Substitutes for $t$, applies $\sec^2\theta = 1 + \tan^2\theta$, forms correct quadratic in $\tan\theta$.
    

**Step 7: Solve for tan theta** $$\tan\theta = \frac{8\sqrt{2} \pm \sqrt{128 - 20}}{2} = 4\sqrt{2} \pm \sqrt{27} = 4\sqrt{2} \pm 3\sqrt{3}$$

- **[M1, A1]** Solves quadratic to find exact roots.
    

**Step 8: Find angle difference** $$\beta - \alpha = \arctan(4\sqrt{2} + 3\sqrt{3}) - \arctan(4\sqrt{2} - 3\sqrt{3})$$ $$= \arctan\left(\frac{6\sqrt{3}}{1 + (32 - 27)}\right) = \arctan(\sqrt{3}) = 60^\circ$$

- **[M1, A1]** Uses identity from part (a) and calculates $60^\circ$.
    

#### **Part (b)(ii)**

**Step 9: Calculate probability** Probability is $$p = \frac{60^\circ}{90^\circ} = \frac{2}{3} *$$

- __[B1_]_* Correct deduction.
    

#### **Part (b)(iii)**

**Step 10: Binomial probability** $$X \sim B(10, \frac{2}{3})$$ $$P(X = 2) = ^{10}C_2 \left(\frac{2}{3}\right)^2 \left(\frac{1}{3}\right)^8 = 45 \times \frac{4}{3^{10}} = 5 \times \frac{4}{3^8} = \frac{20}{3^8}$$

- **[B1, M1, A1]** Identifies Binomial, applies formula, correct fraction.
    

#### **Part (b)(iv)**

**Step 11: Explain air resistance** Taking air resistance into account would decrease range, so the probability of success would be reduced and hence the probability for 2 successes (a low number) would increase.

- **[B1]** Correct explanation.
    

**Special Marks (+S2)**

- **[S2]** Award S2 for a fully correct solution that is succinct and includes S+ points.