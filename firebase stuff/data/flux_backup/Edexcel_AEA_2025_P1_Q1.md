---
topic: "Integration"
subtopic: "Integration by parts"
---

### Question 1

Using the substitution $u = \frac{\pi}{2}\sqrt{1 + x}$, evaluate

$$\int_{\frac{5}{4}}^{\frac{21}{4}} \sec^2\left(\frac{\pi}{2}\sqrt{1 + x}\right) dx$$ **(10)**

### Mark Scheme

**Step 1: Differentiate the substitution**
$$\frac{du}{dx} = \frac{\pi}{4}(1 + x)^{-\frac{1}{2}} \quad \text{or} \quad \frac{8}{\pi^2}u \, du = dx$$
* **[B1]** Correct derivative of $u$. Accept any equivalent.

**Step 2: Substitute into the integral**
$$I = \int \sec^2\left(\frac{\pi}{2}\sqrt{1+x}\right) dx = \frac{8}{\pi^2} \int u \sec^2 u \, du$$
* **[M1, A1]** Full method of substitution. Limits not required yet.

**Step 3: Integration by Parts**
$$\int u \sec^2 u \, du = u \tan u - \int \tan u \, du$$
* **[M1, A1]** Attempts integration by parts in the correct direction.

**Step 4: Integrate $\tan u$**
$$\int \tan u \, du = \ln |\sec u| \quad \text{or} \quad -\ln |\cos u|$$
* **[M1]** Integral of $\tan u$ seen separately or as part of working.

**Step 5: Combine into full integral**
$$\int u \sec^2 u \, du = u \tan u - \ln |\sec u|$$
* **[A1]** Fully correct integral. Modulus may be missing.

**Step 6: Change the limits**
$$x = \frac{5}{4} \Rightarrow u = \frac{3\pi}{4}$$ and $$x = \frac{21}{4} \Rightarrow u = \frac{5\pi}{4}$$
* **[B1]** Correct new limits applied to their integral.

**Step 7: Evaluate the definite integral**
$$= \frac{8}{\pi^2} \left[ \left( \frac{5\pi}{4}\tan\frac{5\pi}{4} - \ln\left|\sec\frac{5\pi}{4}\right| \right) - \left( \frac{3\pi}{4}\tan\frac{3\pi}{4} - \ln\left|\sec\frac{3\pi}{4}\right| \right) \right]$$
$$= \frac{8}{\pi^2} \left[ \left( \frac{5\pi}{4} - \ln|-\sqrt{2}| \right) - \left( -\frac{3\pi}{4} - \ln|-\sqrt{2}| \right) \right]$$
* **[dddM1]** Evaluates trig terms correctly. Must deal with $\ln(\text{negative})$ terms correctly (using moduli).

**Step 8: Final Answer**
$$= \frac{16}{\pi}$$
* **[A1]** cso (Correct Solution Only).