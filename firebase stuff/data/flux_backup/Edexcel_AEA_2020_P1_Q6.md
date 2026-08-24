---
topic: "Integration"
subtopic: "Definite integrals"
---

### **Question 6**

**(a)** Given that $f$ is a function such that the integrals exist, (i) use the substitution $u = a - x$ to show that $$\int_{0}^{a} f(x) dx = \int_{0}^{a} f(a - x) dx$$ **(2)** (ii) Hence use symmetry of $f(\sin x)$ on the interval $[0, \pi]$ to show that $$\int_{0}^{\pi} xf(\sin x) dx = \pi \int_{0}^{\frac{\pi}{2}} f(\sin x) dx$$ **(4)**

**(b)** Use the result of (a)(i) to show that $$\int_{0}^{\frac{\pi}{2}} \frac{\sin^n x}{\sin^n x + \cos^n x} dx$$ is independent of $n$, and find the value of this integral. **(4)**

**(c)** (i) Prove that $$\frac{\cos x}{1 + \cos x} \equiv 1 - \frac{1}{2}\sec^2\left(\frac{x}{2}\right)$$ **(2)** (ii) Hence use the results from (a) to find $$\int_{0}^{\pi} \frac{x \sin x}{1 + \sin x} dx$$ **(7)**

**(d)** Find $$\int_{0}^{\pi} \frac{x \sin^4 x}{\sin^4 x + \cos^4 x} dx$$ **(4)** **(+S2)**

### **Mark Scheme 6**

#### **Part (a)**

**Step 1: Substitution proof** (i) $$u = a - x \Rightarrow \frac{du}{dx} = -1$$ $$\int_{0}^{a} f(x) dx = \int_{a}^{0} f(a - u) (-du) = \int_{0}^{a} f(a - u) du = \int_{0}^{a} f(a - x) dx *$$

- __[M1, A1_]_* Applies substitution, treats limits correctly to given result.
    

**Step 2: Apply to symmetric function** (ii) $$\int_{0}^{\pi} xf(\sin x) dx = \int_{0}^{\pi} (\pi - x)f(\sin(\pi - x)) dx$$ $$= \int_{0}^{\pi} \pi f(\sin x) dx - \int_{0}^{\pi} xf(\sin x) dx$$ (since $\sin(\pi - x) = \sin x)$

- **[M1, A1]** Uses $u = \pi - x$ and splits integral.
    

**Step 3: Rearrange and apply symmetry** $$2\int_{0}^{\pi} xf(\sin x) dx = \pi \int_{0}^{\pi} f(\sin x) dx$$ $$= 2\pi \int_{0}^{\frac{\pi}{2}} f(\sin x) dx$$ (as $f(\sin x)$ is symmetric about $x = \frac{\pi}{2}$).

Hence $$\int_{0}^{\pi} xf(\sin x) dx = \pi \int_{0}^{\frac{\pi}{2}} f(\sin x) dx *$$

- __[M1, A1_]_* Halves limits due to symmetry to complete proof.
    

#### **Part (b)**

**Step 4: Use substitution on specific integral** Let $$I = \int_{0}^{\frac{\pi}{2}} \frac{\sin^n x}{\sin^n x + \cos^n x} dx$$ Using $u = \frac{\pi}{2} - x$: $$I = \int_{0}^{\frac{\pi}{2}} \frac{\sin^n(\frac{\pi}{2} - x)}{\sin^n(\frac{\pi}{2} - x) + \cos^n(\frac{\pi}{2} - x)} dx = \int_{0}^{\frac{\pi}{2}} \frac{\cos^n x}{\cos^n x + \sin^n x} dx$$

- **[M1]** Applies $(a)(i)$ and uses co-function symmetry.
    

**Step 5: Add integrals** $$I + I = \int_{0}^{\frac{\pi}{2}} \frac{\sin^n x + \cos^n x}{\sin^n x + \cos^n x} dx = \int_{0}^{\frac{\pi}{2}} 1 dx = \frac{\pi}{2}$$ $$2I = \frac{\pi}{2} \Rightarrow I = \frac{\pi}{4}$$

- **[M1, M1, A1]** Adds to original, integrates 1, correct answer which is independent of $n$.
    

#### **Part (c)**

**Step 6: Trig Identity proof** (i) $$\frac{\cos x}{1 + \cos x} = \frac{1 + \cos x - 1}{1 + \cos x} = 1 - \frac{1}{1 + \cos x}$$ $$= 1 - \frac{1}{1 + 2\cos^2(x/2) - 1} = 1 - \frac{1}{2}\sec^2(x/2) *$$

- __[M1, B1, A1_]_* Uses double angle formula to complete proof.
    

**Step 7: Apply integral results** (ii) $$\int_{0}^{\pi} \frac{x \sin x}{1 + \sin x} dx = \pi \int_{0}^{\frac{\pi}{2}} \frac{\sin x}{1 + \sin x} dx$$ (using a(ii)) $$= \pi \int_{0}^{\frac{\pi}{2}} \frac{\sin(\frac{\pi}{2} - x)}{1 + \sin(\frac{\pi}{2} - x)} dx = \pi \int_{0}^{\frac{\pi}{2}} \frac{\cos x}{1 + \cos x} dx$$

- **[M1, A1]** Applies a(ii) and then a(i) to get in terms of $\cos$.
    

**Step 8: Integrate** $$= \pi \int_{0}^{\frac{\pi}{2}} \left( 1 - \frac{1}{2}\sec^2\left(\frac{x}{2}\right) \right) dx$ $= \pi \left[ x - \tan\left(\frac{x}{2}\right) \right]_0^{\frac{\pi}{2}}$$

- **[M1, A1]** Integrates using c(i).
    

**Step 9: Final value** $$= \pi\left(\frac{\pi}{2} - 1\right) = \frac{\pi^2}{2} - \pi$$

- **[A1]** Correct evaluated answer.
    

#### **Part (d)**

**Step 10: Format integral** $$\int_{0}^{\pi} \frac{x \sin^4 x}{\sin^4 x + \cos^4 x} dx = \pi \int_{0}^{\frac{\pi}{2}} \frac{\sin^4 x}{\sin^4 x + \cos^4 x} dx$$

- **[M1, B1]** Deduces application of a(ii).
    

**Step 11: Evaluate using part (b)** This matches part (b) with $n=4$. $$= \pi \times \frac{\pi}{4} = \frac{\pi^2}{4}$$

- **[M1, A1]** Applies part (b) to obtain final value.
    

**Special Marks (+S2)**

- **[S2]** Award S2 for a fully correct solution that is succinct and includes S+ points (clear explanation of symmetries).