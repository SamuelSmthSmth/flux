# Problem Forge: Julia Mega-Compiler (Generic Core Integrals)
import JSON
using Random

struct MathProblem
    id::String
    origin::String
    metadata::Dict{String, String}
    content::Dict{String, Any}
end

# --- HELPER FUNCTIONS FOR CLEAN MATH FORMATTING ---
function coeff_frac(num, den)
    if num == 0 return "0" end
    g = gcd(num, den)
    n = num ÷ g
    d = den ÷ g
    if d < 0
        n = -n
        d = -d
    end
    if d == 1
        if n == 1 return "" end
        if n == -1 return "-" end
        return string(n)
    else
        if n == 1 return "\\frac{1}{$d}" end
        if n == -1 return "-\\frac{1}{$d}" end
        return "\\frac{$n}{$d}"
    end
end

# 1. Easy Linear Form (Reverse Chain Rule)
function generate_linear_power()
    a = rand([1, 1, 1, 2, 3, 4, 5])
    b = rand([1, 1, 2, 3, 4])
    c = rand([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5])
    n = rand(3:6)
    
    str_a = a == 1 ? "" : (a == -1 ? "-" : string(a))
    str_b = b == 1 ? "" : (b == -1 ? "-" : string(b))
    str_c = c > 0 ? "+ $c" : "- $(abs(c))"
    
    question = "\\int $(str_a) ($(str_b)x $(str_c))^$(n) dx"
    steps = [
        "This is a standard reverse chain rule problem for a linear inner function.",
        "Let \$u = $(b == 1 ? "" : string(b))x $(str_c)\$, which means \$du = $(b) dx\$, so \$dx = $(coeff_frac(1, b)) du\$.",
        "Substitute into the integral: \$$(coeff_frac(a, b)) \\int u^$(n) du\$.",
        "Integrate using the power rule: \$$(coeff_frac(a, b)) \\cdot \\frac{1}{$(n+1)} u^{$(n+1)} + C\$.",
        "Substitute \$x\$ back in for the final answer."
    ]
    final_answer = "$(coeff_frac(a, b * (n+1))) ($(str_b)x $(str_c))^{$(n+1)} + C"
    
    return MathProblem(
        "gen_lin_$(randstring(6))", "generated",
        Dict("topic" => "Calculus", "type" => "Indefinite", "technique" => "Standard Forms", "difficulty" => "Easy"),
        Dict("latex_problem" => question, "latex_solution_steps" => steps, "final_answer" => final_answer)
    )
end

# 2. Easy Trig Substitution
function generate_trig_usub()
    a = rand([1, 1, 1, 2, 3, 4, 5])
    n = rand(3:7)
    
    str_a = a == 1 ? "" : string(a)
    
    question = "\\int $(str_a) \\sin(x) \\cos^$(n)(x) dx"
    steps = [
        "We have a function \$\\cos(x)\$ raised to a power, multiplied by its derivative (ignoring the sign).",
        "Let \$u = \\cos(x)\$, which means \$du = -\\sin(x) dx\$.",
        "The integral contains \$\\sin(x) dx\$, which becomes \$-du\$.",
        "Substitute into the integral: \$-\\int $(a == 1 ? "" : string(a)) u^$(n) du\$.",
        "Integrate using the power rule: \$$(coeff_frac(-a, n+1)) u^{$(n+1)} + C\$.",
        "Substitute \$x\$ back in."
    ]
    final_answer = "$(coeff_frac(-a, n+1)) \\cos^{$(n+1)}(x) + C"
    
    return MathProblem(
        "gen_trig_usub_$(randstring(6))", "generated",
        Dict("topic" => "Calculus", "type" => "Indefinite", "technique" => "Substitution", "difficulty" => "Easy"),
        Dict("latex_problem" => question, "latex_solution_steps" => steps, "final_answer" => final_answer)
    )
end

# 3. Generic Exponential U-Sub
function generate_basic_exp_usub()
    a = rand([1, 1, 2, 3, 4, 6, 8])
    b = rand([1, 1, 2, 3, 4])
    
    str_a = a == 1 ? "" : string(a)
    str_b = b == 1 ? "" : (b == -1 ? "-" : string(b))
    
    question = "\\int $(str_a)x e^{$(str_b)x^2} dx"
    steps = [
        "Notice that the derivative of the exponent \$$(str_b)x^2\$ is a multiple of the \$x\$ in front.",
        "Let \$u = $(str_b)x^2\$, then \$du = $(2*b)x dx\$.",
        "The integral has \$$(str_a)x dx\$, so we can rewrite \$x dx = $(coeff_frac(1, 2*b)) du\$.",
        "Substitute into the integral: \$$(coeff_frac(a, 2*b)) \\int e^u du\$.",
        "The integral of \$e^u\$ is just \$e^u\$.",
        "Substitute \$x\$ back in."
    ]
    final_answer = "$(coeff_frac(a, 2*b)) e^{$(str_b)x^2} + C"
    
    return MathProblem(
        "gen_exp_usub_$(randstring(6))", "generated",
        Dict("topic" => "Calculus", "type" => "Indefinite", "technique" => "Substitution", "difficulty" => "Medium"),
        Dict("latex_problem" => question, "latex_solution_steps" => steps, "final_answer" => final_answer)
    )
end

# 4. Standard Integration By Parts (Poly x Exp)
function generate_ibp_poly_exp()
    a = rand([1, 1, 1, 2, 3, 4])
    b = rand([-3, -2, -1, 1, 1, 2, 3])
    
    str_a = a == 1 ? "" : (a == -1 ? "-" : string(a))
    str_b = b == 1 ? "" : (b == -1 ? "-" : string(b))
    
    question = "\\int $(str_a)x e^{$(str_b)x} dx"
    
    t1 = coeff_frac(a, b)
    t2 = coeff_frac(-a, b^2)
    t2_str = startswith(t2, "-") ? t2 : "+ $t2"
    
    steps = [
        "We have a product of a polynomial (\$$(str_a)x\$) and an exponential (\$e^{$(str_b)x}\$), which requires Integration by Parts.",
        "Use the formula \$\\int u dv = uv - \\int v du\$.",
        "Let \$u = $(str_a == "" ? "x" : "$(str_a)x")\$ and \$dv = e^{$(str_b)x} dx\$.",
        "Then \$du = $(a) dx\$ and \$v = $(coeff_frac(1, b)) e^{$(str_b)x}\$.",
        "Apply the formula: \$uv - \\int v du\$.",
        "Simplify and integrate the second term to get the answer."
    ]
    final_answer = "$(t1) x e^{$(str_b)x} $(t2_str) e^{$(str_b)x} + C"
    
    return MathProblem(
        "gen_ibp_exp_$(randstring(6))", "generated",
        Dict("topic" => "Calculus", "type" => "Indefinite", "technique" => "Integration by Parts", "difficulty" => "Medium"),
        Dict("latex_problem" => question, "latex_solution_steps" => steps, "final_answer" => final_answer)
    )
end

# 5. Integration By Parts (Poly x Log)
function generate_ibp_poly_log()
    a = rand([1, 1, 1, 2, 3, 4, 5])
    n = rand([1, 1, 2, 3])
    
    str_a = a == 1 ? "" : string(a)
    
    # Clean string formatting to prevent x^1 rendering
    pow_str = n == 1 ? "" : "^$(n)"
    pow_pure_str = n == 1 ? "" : "^{$(n)}"
    
    question = "\\int $(str_a)x$(pow_str) \\ln(x) dx"
    
    t1 = coeff_frac(a, n+1)
    t2 = coeff_frac(-a, (n+1)^2)
    t2_str = startswith(t2, "-") ? t2 : "+ $t2"
    
    steps = [
        "Using LATE/LIATE, the logarithmic function gets priority for \$u\$.",
        "Let \$u = \\ln(x)\$ and \$dv = $(str_a == "" ? "x" : "$(str_a)x")$(pow_str) dx\$.",
        "Then \$du = \\frac{1}{x} dx\$ and \$v = $(coeff_frac(a, n+1)) x^{$(n+1)}\$.",
        "Apply the IBP formula: \$uv - \\int v du\$.",
        "The integral becomes \$\\int $(coeff_frac(a, n+1)) x$(pow_pure_str) dx\$, which is a simple power rule.",
        "Integrate to find the final answer."
    ]
    final_answer = "$(t1) x^{$(n+1)} \\ln(x) $(t2_str) x^{$(n+1)} + C"
    
    return MathProblem(
        "gen_ibp_log_$(randstring(6))", "generated",
        Dict("topic" => "Calculus", "type" => "Indefinite", "technique" => "Integration by Parts", "difficulty" => "Medium"),
        Dict("latex_problem" => question, "latex_solution_steps" => steps, "final_answer" => final_answer)
    )
end

# 6. King's Property (Definite Integral Symmetry - Original)
function generate_kings_property()
    n = rand([2, 3, 4, 5, 7, 8])
    
    question = "\\int_0^{\\frac{\\pi}{2}} \\frac{\\sin^{$n}(x)}{\\sin^{$n}(x) + \\cos^{$n}(x)} dx"
    
    steps = [
        "This integral screams symmetry. We apply the King's Property: \$\\int_0^a f(x) dx = \\int_0^a f(a-x) dx\$.",
        "Substitute \$x \\to \\frac{\\pi}{2} - x\$.",
        "Since \$\\sin(\\frac{\\pi}{2}-x) = \\cos(x)\$ and \$\\cos(\\frac{\\pi}{2}-x) = \\sin(x)\$, the numerator becomes \$\\cos^{$n}(x)\$.",
        "The denominator remains exactly the same: \$\\cos^{$n}(x) + \\sin^{$n}(x)\$.",
        "Call the original integral \$I\$. If we add the original \$I\$ and the new \$I\$ together, we get \$2I\$.",
        "\$2I = \\int_0^{\\frac{\\pi}{2}} \\frac{\\sin^{$n}(x) + \\cos^{$n}(x)}{\\sin^{$n}(x) + \\cos^{$n}(x)} dx = \\int_0^{\\frac{\\pi}{2}} 1 dx\$.",
        "\$2I = \\frac{\\pi}{2}\$, which means \$I = \\frac{\\pi}{4}\$."
    ]
    
    final_answer = "\\frac{\\pi}{4}"
    
    return MathProblem(
        "gen_king_$(randstring(6))", "generated",
        Dict("topic" => "Calculus", "type" => "Definite", "technique" => "King's Property", "difficulty" => "Hard"),
        Dict("latex_problem" => question, "latex_solution_steps" => steps, "final_answer" => final_answer)
    )
end

# 6b. King's Property (Advanced Arbitrary Bounds)
function generate_kings_property_advanced()
    a = rand(1:5)
    offset = rand(2:6)
    b = a + offset
    sum_ab = a + b
    
    # Pick a random function style (square root, natural log, or a polynomial power)
    func_type = rand(["sqrt", "ln", "pow"])
    n = rand(2:5)
    
    if func_type == "sqrt"
        f_x = "\\sqrt{x}"
        f_sym = "\\sqrt{$(sum_ab)-x}"
    elseif func_type == "ln"
        f_x = "\\ln(x)"
        f_sym = "\\ln($(sum_ab)-x)"
    else
        f_x = "x^$(n)"
        f_sym = "($(sum_ab)-x)^$(n)"
    end
    
    question = "\\int_{$(a)}^{$(b)} \\frac{$(f_x)}{$(f_x) + $(f_sym)} dx"
    
    steps = [
        "This integral is perfectly set up for the King's Property: \$\\int_a^b f(x) dx = \\int_a^b f(a+b-x) dx\$.",
        "Here, bounds are \$a=$(a)\$ and \$b=$(b)\$, so \$a+b = $(sum_ab)\$. We substitute \$x \\to $(sum_ab)-x\$.",
        "The numerator \$$(f_x)\$ becomes \$$(f_sym)\$.",
        "The denominator remains exactly the same: \$$(f_sym) + $(f_x)\$.",
        "Call the original integral \$I\$. Adding the original \$I\$ and the new transformed \$I\$ gives \$2I\$.",
        "\$2I = \\int_{$(a)}^{$(b)} \\frac{$(f_x) + $(f_sym)}{$(f_x) + $(f_sym)} dx = \\int_{$(a)}^{$(b)} 1 dx\$.",
        "\$2I = [x]_{$(a)}^{$(b)} = $(b) - $(a) = $(offset)\$, which means \$I = \\frac{$(offset)}{2}\$."
    ]
    
    final_answer = coeff_frac(offset, 2)
    
    return MathProblem(
        "gen_king_adv_$(randstring(6))", "generated",
        Dict("topic" => "Calculus", "type" => "Definite", "technique" => "King's Property", "difficulty" => "Hard"),
        Dict("latex_problem" => question, "latex_solution_steps" => steps, "final_answer" => final_answer)
    )
end

# 6c. King's Property (Binomial-style variant)
function generate_kings_binomial()
    n = rand([2,3,4,5,6,7])

    # This variant uses the same symmetry idea as the classic King's Property.
    question = "\\int_0^{\\frac{\\pi}{2}} \\frac{\\sin^{$n}(x)}{\\sin^{$n}(x) + \\cos^{$n}(x)} dx"

    steps = [
        "Apply King's Property: integrate f(x) and f(\\frac{\\pi}{2}-x) and add them.",
        "Under the substitution x -> \\frac{\\pi}{2} - x, sin and cos swap, producing the complementary integral.",
        "Adding the two integrals gives 2I = \\int_0^{\\frac{\\pi}{2}} 1 \\; dx = \\frac{\\pi}{2}.",
        "Hence I = \\frac{\\pi}{4}."
    ]

    final_answer = "\\frac{\\pi}{4}"

    return MathProblem(
        "gen_king_binom_$(randstring(6))", "generated",
        Dict("topic" => "Calculus", "type" => "Definite", "technique" => "King's Property", "difficulty" => "Hard"),
        Dict("latex_problem" => question, "latex_solution_steps" => steps, "final_answer" => final_answer)
    )
end

# 7. Queen's Property / x * f(sin x) Trick
function generate_queens_property()
    a = rand([1, 2, 3, 4])
    a_sq = a^2
    str_asq = a_sq == 1 ? "1" : string(a_sq)
    
    question = "\\int_0^\\pi \\frac{x \\sin(x)}{$(str_asq) + \\cos^2(x)} dx"
    
    steps = [
        "Notice the form \$\\int_0^\\pi x f(\\sin(x)) dx\$. We can use the symmetry property (often related to King's/Queen's rule).",
        "Using the substitution \$x = \\pi - t\$, the integral simplifies to \$\\frac{\\pi}{2} \\int_0^\\pi \\frac{\\sin(x)}{$(str_asq) + \\cos^2(x)} dx\$.",
        "Because the integrand is symmetric around \$\\frac{\\pi}{2}\$, we can apply the Queen's Property to halve the bounds and double the result: \$\\pi \\int_0^{\\frac{\\pi}{2}} \\frac{\\sin(x)}{$(str_asq) + \\cos^2(x)} dx\$.",
        "Now apply a standard substitution: Let \$u = \\cos(x)\$, \$du = -\\sin(x) dx\$.",
        "The bounds change from \$[0, \\frac{\\pi}{2}]\$ to \$[1, 0]\$. Reversing the bounds absorbs the negative sign.",
        "The integral becomes \$\\pi \\int_0^1 \\frac{1}{$(str_asq) + u^2} du\$.",
        "Evaluate using the standard arctangent integral form."
    ]
    
    final_answer = a == 1 ? "\\frac{\\pi^2}{4}" : "\\frac{\\pi}{$(a)} \\arctan\\left(\\frac{1}{$(a)}\\right)"
    
    return MathProblem(
        "gen_queen_$(randstring(6))", "generated",
        Dict("topic" => "Calculus", "type" => "Definite", "technique" => "Queen's Property", "difficulty" => "Hard"),
        Dict("latex_problem" => question, "latex_solution_steps" => steps, "final_answer" => final_answer)
    )
end

# --- THE SPRINTERS (VERY EASY) ---

function generate_sprinter_exp()
    a = rand([2, 3, 4, 5]) * rand([1, -1])
    str_a = a == -1 ? "-" : string(a)
    
    question = "\\int e^{$(str_a)x} dx"
    steps = [
        "This is a standard exponential integral.",
        "The derivative of the exponent \$$(str_a)x\$ is \$$(a)\$.",
        "Divide by this constant to integrate: \$\\frac{1}{$(a)} e^{$(str_a)x}\$."
    ]
    final_answer = "$(coeff_frac(1, a)) e^{$(str_a)x} + C"
    
    return MathProblem(
        "gen_sprint_exp_$(randstring(6))", "generated",
        Dict("topic" => "Calculus", "type" => "Indefinite", "technique" => "Standard Forms", "difficulty" => "Easy"),
        Dict("latex_problem" => question, "latex_solution_steps" => steps, "final_answer" => final_answer)
    )
end

function generate_sprinter_recip()
    a = rand(1:9)
    sign = rand(["+", "-"])
    
    question = "\\int \\frac{1}{x $sign $a} dx"
    steps = [
        "This matches the standard logarithmic form \$\\int \\frac{f'(x)}{f(x)} dx\$.",
        "The derivative of the denominator \$x $sign $a\$ is just \$1\$.",
        "Therefore, it integrates directly to the natural logarithm of the absolute value of the denominator."
    ]
    final_answer = "\\ln|x $sign $a| + C"
    
    return MathProblem(
        "gen_sprint_recip_$(randstring(6))", "generated",
        Dict("topic" => "Calculus", "type" => "Indefinite", "technique" => "Standard Forms", "difficulty" => "Easy"),
        Dict("latex_problem" => question, "latex_solution_steps" => steps, "final_answer" => final_answer)
    )
end

# --- THE BOSS FIGHTS (EXTREME) ---

function generate_partial_fractions()
    A = rand([1, 2, 3]) * rand([1, -1])
    B = rand([1, 2, 3]) * rand([1, -1])
    # Distinct Roots
    r1 = rand([1, 2, 3, 4])
    r2 = rand([-4, -3, -2, -1])
    
    # Numerator: (A+B)x - (A*r2 + B*r1)
    c1 = A + B
    c0 = -(A*r2 + B*r1)
    
    num_str = ""
    if c1 != 0
        num_str *= c1 == 1 ? "x" : (c1 == -1 ? "-x" : "$(c1)x")
        if c0 > 0 num_str *= " + $c0" elseif c0 < 0 num_str *= " - $(abs(c0))" end
    else
        num_str = "$c0"
    end
    if num_str == "" num_str = "0" end
    
    # Denominator: x^2 - (r1+r2)x + (r1*r2)
    d1 = -(r1 + r2)
    d0 = r1 * r2
    den_str = "x^2"
    if d1 > 0 den_str *= " + $(d1 == 1 ? "" : d1)x" elseif d1 < 0 den_str *= " - $(d1 == -1 ? "" : abs(d1))x" end
    if d0 > 0 den_str *= " + $d0" elseif d0 < 0 den_str *= " - $(abs(d0))" end
    
    question = "\\int \\frac{$num_str}{$den_str} dx"
    steps = [
        "This requires Partial Fraction Decomposition. First, factor the denominator: \$(x - $r1)(x - $r2)\$.",
        "Set up the identity: \$\\frac{$num_str}{(x - $r1)(x - $r2)} = \\frac{A}{x - $r1} + \\frac{B}{x - $r2}\$.",
        "Multiply through by the denominator: \$$num_str = A(x - $r2) + B(x - $r1)\$.",
        "Substitute \$x = $r1\$ to find \$A = $A\$.",
        "Substitute \$x = $r2\$ to find \$B = $B\$.",
        "Rewrite the integral: \$\\int \\left( \\frac{$A}{x - $r1} + \\frac{$B}{x - $r2} \\right) dx\$.",
        "Integrate to yield logarithmic terms."
    ]
    
    ans_A = A == 1 ? "\\ln|x - $r1|" : (A == -1 ? "-\\ln|x - $r1|" : "$A \\ln|x - $r1|")
    ans_B = B == 1 ? "\\ln|x - $r2|" : (B == -1 ? "-\\ln|x - $r2|" : "$B \\ln|x - $r2|")
    sign_B = B > 0 ? " + " : " "
    final_answer = ans_A * sign_B * ans_B * " + C"
    
    return MathProblem(
        "gen_boss_pf_$(randstring(6))", "generated",
        Dict("topic" => "Calculus", "type" => "Indefinite", "technique" => "Partial Fractions", "difficulty" => "Extreme"),
        Dict("latex_problem" => question, "latex_solution_steps" => steps, "final_answer" => final_answer)
    )
end

function generate_ibp_loop()
    a = rand([1, 2, 3, 4])
    b = rand([1, 2, 3])
    
    question = "\\int e^{$(a)x} \\sin($(b)x) dx"
    
    steps = [
        "This is a classic 'looping' Integration by Parts problem.",
        "Let \$u = \\sin($(b)x)\$ and \$dv = e^{$(a)x} dx\$. Apply IBP.",
        "You will get an equation with \$\\int e^{$(a)x} \\cos($(b)x) dx\$.",
        "Apply IBP a second time on this new integral.",
        "The original integral \$\\int e^{$(a)x} \\sin($(b)x) dx\$ will appear on the right side.",
        "Move it to the left side algebraically and divide by the combined coefficient."
    ]
    
    denom = a^2 + b^2
    final_answer = "\\frac{e^{$(a)x}}{$denom} ($(a)\\sin($(b)x) - $(b)\\cos($(b)x)) + C"
    
    return MathProblem(
        "gen_boss_ibp_$(randstring(6))", "generated",
        Dict("topic" => "Calculus", "type" => "Indefinite", "technique" => "Integration by Parts", "difficulty" => "Extreme"),
        Dict("latex_problem" => question, "latex_solution_steps" => steps, "final_answer" => final_answer)
    )
end

# --- FURTHER MATHS: INVERSE TRIG ---
function generate_fm_arcsin()
    a = rand(2:7)
    a_sq = a^2
    
    question = "\\int \\frac{1}{\\sqrt{$a_sq - x^2}} dx"
    steps = [
        "Recognise this as a standard integral from the Further Maths formula booklet.",
        "The standard form is \$\\int \\frac{1}{\\sqrt{a^2 - x^2}} dx = \\arcsin\\left(\\frac{x}{a}\\right)\$.",
        "By comparing the denominator, we can see that \$a^2 = $a_sq\$, which means \$a = $a\$.",
        "Substitute \$a\$ into the standard result."
    ]
    final_answer = "\\arcsin\\left(\\frac{x}{$a}\\right) + C"
    
    return MathProblem(
        "gen_fm_arcsin_$(randstring(6))", "generated",
        Dict("topic" => "Calculus", "type" => "Indefinite", "technique" => "Further Maths", "difficulty" => "Medium"),
        Dict("latex_problem" => question, "latex_solution_steps" => steps, "final_answer" => final_answer)
    )
end

# --- FURTHER MATHS: INVERSE HYPERBOLIC ---
function generate_fm_arsinh()
    a = rand(2:6)
    a_sq = a^2
    
    question = "\\int \\frac{1}{\\sqrt{x^2 + $a_sq}} dx"
    steps = [
        "Recognise this as a standard inverse hyperbolic integral.",
        "The standard form is \$\\int \\frac{1}{\\sqrt{x^2 + a^2}} dx = \\text{arsinh}\\left(\\frac{x}{a}\\right)\$.",
        "Alternatively, this can be written using logarithms: \$\\ln\\left|x + \\sqrt{x^2 + a^2}\\right|\$.",
        "Here, \$a^2 = $a_sq\$, so \$a = $a\$.",
        "Substitute \$a\$ into the standard result."
    ]
    final_answer = "\\text{arsinh}\\left(\\frac{x}{$a}\\right) + C"
    
    return MathProblem(
        "gen_fm_arsinh_$(randstring(6))", "generated",
        Dict("topic" => "Calculus", "type" => "Indefinite", "technique" => "Further Maths", "difficulty" => "Medium"),
        Dict("latex_problem" => question, "latex_solution_steps" => steps, "final_answer" => final_answer)
    )
end

# --- FURTHER MATHS: WEIERSTRASS SUBSTITUTION ---
function generate_fm_weierstrass()
    # Using Pythagorean triples ensures the math resolves to clean integer/fraction coefficients
    triples = [(5, 4, 3), (5, 3, 4), (13, 12, 5), (13, 5, 12)]
    (a, b, k) = rand(triples)
    
    question = "\\int \\frac{1}{$a + $b \\cos(x)} dx"
    
    steps = [
        "This requires the Weierstrass half-angle substitution: let \$t = \\tan\\left(\\frac{x}{2}\\right)\$.",
        "Using standard identities, we know \$\\cos(x) = \\frac{1-t^2}{1+t^2}\$ and \$dx = \\frac{2}{1+t^2} dt\$.",
        "Substitute these into the integral: \$\\int \\frac{1}{$a + $b\\left(\\frac{1-t^2}{1+t^2}\\right)} \\frac{2}{1+t^2} dt\$.",
        "Multiply the numerator and denominator by \$(1+t^2)\$: \$\\int \\frac{2}{$a(1+t^2) + $b(1-t^2)} dt\$.",
        "Expand and group the \$t^2\$ terms: \$\\int \\frac{2}{$(a-b)t^2 + $(a+b)} dt\$.",
        "This is now a standard arctan integral. Factor to get the form \$\\int \\frac{1}{t^2 + k^2} dt\$.",
        "Integrate to yield an arctangent function, then substitute \$t = \\tan\\left(\\frac{x}{2}\\right)\$ back in."
    ]
    
    # Pre-calculated clean answers based on the chosen triples
    if a == 5 && b == 4
        final_answer = "\\frac{2}{3} \\arctan\\left(\\frac{\\tan(x/2)}{3}\\right) + C"
    elseif a == 5 && b == 3
        final_answer = "\\frac{1}{2} \\arctan\\left(\\frac{\\tan(x/2)}{2}\\right) + C"
    elseif a == 13 && b == 12
        final_answer = "\\frac{2}{5} \\arctan\\left(\\frac{\\tan(x/2)}{5}\\right) + C"
    else # a == 13 && b == 5
        final_answer = "\\frac{1}{6} \\arctan\\left(\\frac{2\\tan(x/2)}{3}\\right) + C"
    end
    
    return MathProblem(
        "gen_fm_weierstrass_$(randstring(6))", "generated",
        Dict("topic" => "Calculus", "type" => "Indefinite", "technique" => "Further Maths", "difficulty" => "Extreme"),
        Dict("latex_problem" => question, "latex_solution_steps" => steps, "final_answer" => final_answer)
    )
end

# --- EXOTIC MATH: RIEMANN SUMS ---
function generate_riemann_sum()
    p = rand(2:5)
    
    question = "\\lim_{n \\to \\infty} \\sum_{i=1}^{n} \\frac{i^{$p}}{n^{$(p+1)}}"
    steps = [
        "Recognize this limit of a summation as a Riemann Sum.",
        "Factor out \$\\frac{1}{n}\$ to match the standard width \$\\Delta x = \\frac{1}{n}\$.",
        "The expression becomes \$\\lim_{n \\to \\infty} \\frac{1}{n} \\sum_{i=1}^{n} \\left(\\frac{i}{n}\\right)^{$p}\$.",
        "This matches the definition of the definite integral \$\\int_0^1 x^p dx\$.",
        "Integrate using the power rule: \$[\\frac{1}{$(p+1)}x^{$(p+1)}]_0^1\$."
    ]
    final_answer = "\\frac{1}{$(p+1)}"
    
    return MathProblem(
        "gen_riemann_$(randstring(6))", "generated",
        Dict("topic" => "Calculus", "type" => "Definite", "technique" => "Riemann Sums", "difficulty" => "Hard"),
        Dict("latex_problem" => question, "latex_solution_steps" => steps, "final_answer" => final_answer)
    )
end

# --- EXOTIC MATH: GAMMA FUNCTIONS ---
function generate_gamma_func()
    n = rand(3:6)
    a = rand(2:4)
    
    num = factorial(n)
    den = a^(n+1)
    
    question = "\\int_0^\\infty x^{$n} e^{-$(a)x} dx"
    steps = [
        "This is an improper integral that perfectly fits the Gamma function definition.",
        "Recall the formula: \$\\int_0^\\infty t^n e^{-t} dt = \\Gamma(n+1) = n!\$.",
        "Use the substitution \$t = $(a)x\$, which means \$dx = \\frac{1}{$a} dt\$.",
        "Substitute into the integral: \$\\int_0^\\infty (\\frac{t}{$a})^{$n} e^{-t} \\frac{1}{$a} dt\$.",
        "Factor out the constants: \$\\frac{1}{$(a)^{$(n+1)}} \\int_0^\\infty t^{$n} e^{-t} dt\$.",
        "The remaining integral is exactly \$\\Gamma($(n+1)) = $(n)! = $num\$.",
        "Calculate the final fraction."
    ]
    final_answer = coeff_frac(num, den)
    
    return MathProblem(
        "gen_gamma_$(randstring(6))", "generated",
        Dict("topic" => "Calculus", "type" => "Definite", "technique" => "Gamma Functions", "difficulty" => "Extreme"),
        Dict("latex_problem" => question, "latex_solution_steps" => steps, "final_answer" => final_answer)
    )
end

# --- EXOTIC MATH: FEYNMAN'S TRICK ---
function generate_feynman_trick()
    a = rand(2:4)
    b = rand(5:9)
    
    question = "\\int_0^\\infty \\frac{e^{-$(a)x} - e^{-$(b)x}}{x} dx"
    steps = [
        "This is a Frullani integral, perfectly suited for Feynman's Trick (differentiation under the integral sign).",
        "Define \$I(t) = \\int_0^\\infty \\frac{e^{-tx} - e^{-$(b)x}}{x} dx\$.",
        "Differentiate \$I(t)\$ with respect to \$t\$: \$I'(t) = \\int_0^\\infty -e^{-tx} dx\$.",
        "Evaluate this simple integral: \$I'(t) = [\\frac{1}{t}e^{-tx}]_0^\\infty = -\\frac{1}{t}\$.",
        "Now integrate \$I'(t)\$ with respect to \$t\$ to find \$I(t)\$: \$I(t) = -\\ln(t) + C\$.",
        "We know \$I($(b)) = 0\$, so \$-\\ln($(b)) + C = 0\$, meaning \$C = \\ln($(b))\$.",
        "Therefore, \$I(t) = \\ln($(b)) - \\ln(t) = \\ln(\\frac{$b}{t})\$.",
        "Evaluate at our original parameter \$t = $a\$ to get the final answer."
    ]
    final_answer = "\\ln\\left(\\frac{$b}{$a}\\right)"
    
    return MathProblem(
        "gen_feynman_$(randstring(6))", "generated",
        Dict("topic" => "Calculus", "type" => "Definite", "technique" => "Feynman's Trick", "difficulty" => "Extreme"),
        Dict("latex_problem" => question, "latex_solution_steps" => steps, "final_answer" => final_answer)
    )
end

function compile_database(total_per_template::Int)
    println("Starting the Problem Forge Compiler...")
    database = []
    
    for i in 1:total_per_template
        push!(database, generate_linear_power())
        push!(database, generate_trig_usub())
        push!(database, generate_basic_exp_usub())
        push!(database, generate_ibp_poly_exp())
        push!(database, generate_ibp_poly_log())
        push!(database, generate_kings_property())
        push!(database, generate_kings_property_advanced())
        push!(database, generate_queens_property())
        push!(database, generate_kings_binomial())
        
        # New Additions
        push!(database, generate_sprinter_exp())
        push!(database, generate_sprinter_recip())
        push!(database, generate_partial_fractions())
        push!(database, generate_ibp_loop())

        # Further Maths
        push!(database, generate_fm_arcsin())
        push!(database, generate_fm_arsinh())
        push!(database, generate_fm_weierstrass())

        # Exotic Math
        push!(database, generate_riemann_sum())
        push!(database, generate_gamma_func())
        push!(database, generate_feynman_trick())
    end
    
    shuffle!(database)
    
    json_data = map(p -> Dict(
        "id" => p.id,
        "origin" => p.origin,
        "metadata" => p.metadata,
        "content" => p.content
    ), database)
    
    open("database.json", "w") do f
        JSON.print(f, json_data, 4)
    end
    
    println("Successfully forged $(length(database)) problems into database.json!")
end

# Generate 50 of each = 950 questions
compile_database(50)