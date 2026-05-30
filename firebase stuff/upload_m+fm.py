import firebase_admin
from firebase_admin import credentials, firestore

# 1. Connect to your database
cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

# 2. Define your massive list of topics and subtopics here
metadata_update = {
    "boards": ["AEA", "Edexcel", "AQA", "OCR", "STEP", "TMUA"],
    "topics": {
        "Algebraic Expressions": [
            "Index laws", 
            "Expanding brackets", 
            "Factorising", 
            "Negative and fractional indices", 
            "Surds", 
            "Rationalising denominators"
        ],
        "Quadratics": [
            "Solving quadratic equations", 
            "Completing the square", 
            "Functions", 
            "Quadratic graphs", 
            "The discriminant", 
            "Modelling with quadratics"
        ],
        "Equations and Inequalities": [
            "Linear simultaneous equations",
            "Quadratic simultaneous equations",
            "Simultaneous equations on graphs",
            "Linear inequalities",
            "Quadratic inequalities",
            "Inequalities on graphs",
            "Regions"
        ],
        "Graphs and Transformations": [
            "Cubic graphs",
            "Quartic graphs",
            "Reciprocal graphs",
            "Points of intersection",
            "Translating graphs",
            "Stretching graphs",
            "Transforming functions"
        ],
        "Straight Line Graphs": [
            "y = mx + c",
            "Equations of straight lines",
            "Parallel and perpendicular lines",
            "Length and area",
            "Modelling with straight lines"
        ],
        "Circles": [
            "Midpoints and perpendicular bisectors",
            "Equation of a circle",
            "Intersections of straight lines and circles",
            "Use tangent and chord properties",
            "Circles and triangles"
        ],
        "Algebraic Methods": [
            "Algebraic fractions",
            "Dividing polynomials",
            "The factor theorem",
            "Mathematical proof",
            "Methods of proof",
            "Proof by contradiction",
            "Partial fractions",
            "Repeated factors",
            "Algebraic division"
        ],
        "Binomial Expansion": [
            "Pascal's triangle",
            "Factorial notation",
            "The binomial expansion",
            "Solving binomial problems",
            "Binomial estimation",
            "Expanding (1 + x)^n",
            "Expanding (a + bx)^n",
            "Using partial fractions"
        ],
        "Trigonometric Ratios": [
            "The cosine rule",
            "The sine rule",
            "Areas of triangles",
            "Solving triangle problems",
            "Graphs of sine, cosine and tangent",
            "Transforming trigonometric graphs"
        ],
        "Trigonometric Identities and Equations": [
            "Angles in all four quadrants",
            "Exact values of trigonometrical ratios",
            "Trigonometric identities",
            "Simple trigonometric equations",
            "Harder trigonometric equations",
            "Equations and identities"
        ],
        "Vectors": [
            "Vectors",
            "Representing vectors",
            "Magnitude and direction",
            "Position vectors",
            "Solving geometric problems",
            "Modelling with vectors",
            "3D coordinates",
            "Vectors in 3D",
            "Application to mechanics",
            "Equation of a line in three dimensions",
            "Equation of a plane in three dimensions",
            "Scalar product",
            "Calculating angles between lines and planes",
            "Points of intersection",
            "Finding perpendiculars",
            "Vector product",
            "Finding areas",
            "Scalar triple product",
            "Straight lines"
        ],
        "Differentiation": [
            "Gradients of curves",
            "Finding the derivative",
            "Differentiating x^n",
            "Differentiating quadratics",
            "Differentiating functions with two or more terms",
            "Gradients, tangents and normal",
            "Increasing and decreasing functions",
            "Second order derivatives",
            "Stationary points",
            "Sketching gradient functions",
            "Modelling with differentiation",
            "Differentiating sin x and cos x",
            "Differentiating exponentials and logarithms",
            "The chain rule",
            "The product rule",
            "The quotient rule",
            "Differentiating trigonometric functions",
            "Parametric differentiation",
            "Implicit differentiation",
            "Using second derivatives",
            "Rates of change"
        ],
        "Integration": [
            "Integrating x^n",
            "Indefinite integrals",
            "Finding functions",
            "Definite integrals",
            "Areas under curves",
            "Areas under the x-axis",
            "Areas between curves and lines",
            "Integrating standard functions",
            "Integrating f(ax + b)",
            "Using trigonometric identities",
            "Reverse chain rule",
            "Integration by substitution",
            "Integration by parts",
            "Partial fractions",
            "Finding areas",
            "The trapezium rule",
            "Solving differential equations",
            "Modelling with differential equations"
        ],
        "Exponentials and Logarithms": [
            "Exponential functions",
            "y = e^x",
            "Exponential modelling",
            "Logarithms",
            "Laws of logarithms",
            "Solving equations using logarithms",
            "Working with natural logarithms",
            "Logarithms and non-linear data"
        ],
        "Functions and Graphs": [
            "The modulus function",
            "Functions and mappings",
            "Composite functions",
            "Inverse functions",
            "y = |f(x)| and y = f(|x|)",
            "Combining transformations",
            "Solving modulus problems"
        ],
        "Sequences and Series": [
            "Arithmetic sequences",
            "Arithmetic series",
            "Geometric sequences",
            "Geometric series",
            "Sum to infinity",
            "Sigma notation",
            "Recurrence relations",
            "Modelling with series"
        ],
        "Radians": [
            "Radian measure",
            "Arc length",
            "Areas of sectors and segments",
            "Solving trigonometric equations",
            "Small angle approximations"
        ],
        "Trigonometric Functions": [
            "Secant, cosecant and cotangent",
            "Graphs of sec x, cosec x and cot x",
            "Using sec x, cosec x and cot x",
            "Trigonometric identities",
            "Inverse trigonometric functions"
        ],
        "Trigonometry and Modelling": [
            "Addition formulae",
            "Using the angle addition formulae",
            "Double-angle formulae",
            "Solving trigonometric equations",
            "Simplifying a cos x ± b sin x",
            "Proving trigonometric identities",
            "Modelling with trigonometric functions"
        ],
        "Parametric Equations": [
            "Parametric equations",
            "Using trigonometric identities",
            "Curve sketching",
            "Points of intersection",
            "Modelling with parametric equations"
        ],
        "Numerical Methods": [
            "Locating roots",
            "Iteration",
            "The Newton-Raphson method",
            "Applications to modelling",
            "Solving first-order differential equations",
            "Solving second-order differential equations",
            "Simpson's rule"
        ],
        "Complex Numbers": [
            "Imaginary and complex numbers",
            "Multiplying complex numbers",
            "Complex conjugation",
            "Roots of quadratic equations",
            "Solving cubic and quartic equations",
            "Exponential form of complex numbers",
            "Multiplying and dividing complex numbers",
            "De Moivre's theorem",
            "Trigonometric identities",
            "Sums of series",
            "nth roots of a complex number",
            "Solving geometric problems",
            "Transformations of the complex plane"
        ],
        "Argand Diagrams": [
            "Argand diagrams",
            "Modulus and argument",
            "Modulus-argument form of complex numbers",
            "Loci in the Argand diagram",
            "Regions in the Argand diagram"
        ],
        "Series": [
            "Sums of natural numbers",
            "Sums of squares and cubes",
            "The method of differences",
            "Higher derivatives",
            "Maclaurin series",
            "Series expansions of compound functions"
        ],
        "Roots of Polynomials": [
            "Roots of a quadratic equation",
            "Roots of a cubic equation",
            "Roots of a quartic equation",
            "Expressions relating to the roots of a polynomial",
            "Linear transformations of roots"
        ],
        "Volumes of Revolution": [
            "Volumes of revolution around the x-axis",
            "Volumes of revolution around the y-axis",
            "Adding and subtracting volumes",
            "Modelling with volumes of revolution",
            "Volumes of revolution of parametrically defined curves"
        ],
        "Matrices": [
            "Introduction to matrices",
            "Matrix multiplication",
            "Determinants",
            "Inverting a 2 x 2 matrix",
            "Inverting a 3 x 3 matrix",
            "Solving systems of equations using matrices",
            "Eigenvalues and eigenvectors",
            "Diagonalising matrices",
            "Cayley-Hamilton theorem"
        ],
        "Linear Transformations": [
            "Linear transformations in two dimensions",
            "Reflections and rotations",
            "Enlargements and stretches",
            "Successive transformations",
            "Linear transformations in three dimensions",
            "The inverse of a linear transformation"
        ],
        "Proof by Induction": [
            "Proof by mathematical induction",
            "Proving divisibility results",
            "Proving statements involving matrices"
        ],
        "Polar Coordinates": [
            "Polar coordinates and equations",
            "Sketching curves",
            "Area enclosed by a polar curve",
            "Tangents to polar curves"
        ],
        "Hyperbolic Functions": [
            "Introduction to hyperbolic functions",
            "Inverse hyperbolic functions",
            "Identities and equations",
            "Differentiating hyperbolic functions",
            "Integrating hyperbolic functions"
        ],
        "Methods in Differential Equations": [
            "First-order differential equations",
            "Second-order homogeneous differential equations",
            "Second-order non-homogeneous differential equations",
            "Using boundary conditions"
        ],
        "Modelling with Differential Equations": [
            "Modelling with first-order differential equations",
            "Simple harmonic motion",
            "Damped and forced harmonic motion",
            "Coupled first-order simultaneous differential equations"
        ],
        "Methods in Calculus": [
            "Improper integrals",
            "The mean value of a function",
            "Differentiating inverse trigonometric functions",
            "Integrating with inverse trigonometric functions",
            "Integrating using partial fractions",
            "Leibnitz's theorem and nth derivatives",
            "L'Hospital's rule",
            "The Weierstrass substitution"
        ],
        "Conic Sections 1": [
            "Parametric equations",
            "Parabolas",
            "Rectangular hyperbolas",
            "Tangents and normals",
            "Loci"
        ],
        "Conic Sections 2": [
            "Ellipses",
            "Hyperbolas",
            "Eccentricity",
            "Tangents and normals to an ellipse",
            "Tangents and normals to a hyperbola",
            "Loci"
        ],
        "Inequalities": [
            "Algebraic methods",
            "Using graphs to solve inequalities",
            "Modulus inequalities"
        ],
        "The t-formulae": [
            "The t-formulae",
            "Applying the t-formulae to trigonometric identities",
            "Solving trigonometric equations",
            "Modelling with trigonometry"
        ],
        "Taylor Series": [
            "Taylor series",
            "Finding limits",
            "Series solutions of differential equations"
        ],
        "Reducible Differential Equations": [
            "First-order differential equations",
            "Second-order differential equations",
            "Modelling with differential equations"
        ],
        "Momentum and Impulse": [
            "Momentum in one direction",
            "Conservation of momentum",
            "Momentum as a vector"
        ],
        "Work, Energy and Power": [
            "Work done",
            "Kinetic and potential energy",
            "Conservation of mechanical energy and the work-energy principle",
            "Power"
        ],
        "Elastic Strings and Springs": [
            "Hooke's law and equilibrium problems",
            "Hooke's law and dynamics problem",
            "Elastic energy",
            "Problems involving elastic energy"
        ],
        "Elastic Collisions in One Dimension": [
            "Direct impact and Newton's law of restitution",
            "Direct collision with a smooth plane",
            "Loss of kinetic energy",
            "Successive direct impacts"
        ],
        "Elastic Collisions in Two Dimensions": [
            "Oblique impact with a fixed surface",
            "Successive oblique impacts",
            "Oblique impact of smooth spheres"
        ],
        "Circular Motion": [
            "Angular speed",
            "Acceleration of an object moving on a horizontal circular path",
            "Three-dimensional problems with objects moving in horizontal circles",
            "Objects moving in vertical circles",
            "Objects not constrained on a circular path"
        ],
        "Centres of Mass of Plane Figures": [
            "Centre of mass of a set of particles on a straight line",
            "Centre of mass of a set of particles arranged in a plane",
            "Centres of mass of standard uniform plane laminas",
            "Centre of mass of a composite lamina",
            "Centre of mass of a framework",
            "Lamina in equilibrium",
            "Frameworks in equilibrium",
            "Non-uniform composite laminas and frameworks"
        ],
        "Further Centres of Mass": [
            "Using calculus to find centres of mass",
            "Centre of mass of a uniform body",
            "Non-uniform bodies",
            "Rigid bodies in equilibrium",
            "Toppling and sliding"
        ],
        "Kinematics": [
            "Acceleration varying with time",
            "Acceleration varying with displacement",
            "Acceleration varying with velocity"
        ],
        "Dynamics": [
            "Motion in a straight line with variable force",
            "Newton's law of gravitation",
            "Simple harmonic motion",
            "Horizontal oscillation",
            "Vertical oscillation"
        ],
        "Discrete Random Variables": [
            "Expected value of a discrete random variable",
            "Variance of a discrete random variable",
            "Expected value and variance of a function of X",
            "Solving problems involving random variables"
        ],
        "Poisson Distributions": [
            "The Poisson distribution",
            "Modelling with the Poisson distribution",
            "Adding Poisson distributions",
            "Mean and variance of a Poisson distribution",
            "Mean and variance of the binomial distribution",
            "Using the Poisson distribution to approximate the binomial distribution"
        ],
        "Geometric and Negative Binomial Distributions": [
            "The geometric distribution",
            "Mean and variance of a geometric distribution",
            "The negative binomial distribution",
            "Mean and variance of the negative binomial distribution"
        ],
        "Hypothesis Testing": [
            "Testing for the mean of a Poisson distribution",
            "Finding critical regions for a Poisson distribution",
            "Hypothesis testing for the parameter p of a geometric distribution",
            "Finding critical regions for a geometric distribution"
        ],
        "Central Limit Theorem": [
            "The central limit theorem",
            "Applying the central limit theorem to other distributions"
        ],
        "Chi-squared Tests": [
            "Goodness of fit",
            "Degrees of freedom and the chi-squared family of distributions",
            "Testing a hypothesis",
            "Testing the goodness of fit with discrete data",
            "Using contingency tables",
            "Apply goodness-of-fit tests to geometric distributions"
        ],
        "Probability Generating Functions": [
            "Probability generating functions",
            "Probability generating functions of standard distributions",
            "Mean and variance of a distribution",
            "Sums of independent random variables"
        ],
        "Quality of Tests": [
            "Type I and Type II errors",
            "Finding Type I and Type II errors using the normal distribution",
            "Calculate the size and power of a test",
            "The power function"
        ],
        "Algorithms": [
            "Using and understanding algorithms",
            "Flow charts",
            "Bubble sort",
            "Quick sort",
            "Bin-packing algorithms",
            "Order of an algorithm"
        ],
        "Graphs and Networks": [
            "Modelling with graphs",
            "Graph theory",
            "Special types of graph",
            "Representing graphs and networks using matrices",
            "The planarity algorithm"
        ],
        "Algorithms on Graphs": [
            "Kruskal's algorithm",
            "Prim's algorithm",
            "Applying Prim's algorithm to a distance matrix",
            "Using Dijkstra's algorithm to find the shortest path",
            "Floyd's algorithm"
        ],
        "Route Inspection": [
            "Eulerian graphs",
            "Using the route inspection algorithm",
            "Networks with more than four odd nodes"
        ],
        "The Travelling Salesman Problem": [
            "The classical and practical travelling salesman problems",
            "Using a minimum spanning tree method to find an upper bound",
            "Using a minimum spanning tree method to find a lower bound",
            "Using the nearest neighbour algorithm to find an upper bound"
        ],
        "Linear Programming": [
            "Linear programming problems",
            "Graphical methods",
            "Locating the optimal point",
            "Solutions with integer values"
        ],
        "The Simplex Algorithm": [
            "Formulating linear programming problems",
            "The simplex method",
            "Problems requiring integer solutions",
            "Two-stage simplex method",
            "The Big-M method"
        ],
        "Critical Path Analysis": [
            "Modelling a project",
            "Dummy activities",
            "Early and late event times",
            "Critical activities",
            "The float of an activity",
            "Gantt charts",
            "Resource histograms",
            "Scheduling diagrams"
        ],
        "Transportation Problems": [
            "The north-west corner method",
            "Unbalanced problems and degenerate solutions",
            "Finding an improved solution",
            "The stepping-stone method",
            "Linear programming"
        ],
        "Allocation Problems": [
            "The Hungarian algorithm",
            "Using a dummy",
            "Maximum profit allocation",
            "Managing incomplete data",
            "Linear programming"
        ],
        "Flows in Networks 1": [
            "Flows in networks",
            "Cuts and their capacities",
            "Finding an initial flow",
            "Flow-augmenting routes",
            "Maximum flow - minimum cut theorem"
        ],
        "Flows in Networks 2": [
            "Lower capacities",
            "Sources and sinks",
            "Restricted capacity nodes"
        ],
        "Dynamic Programming": [
            "Shortest and longest path problems",
            "Minimax and maximin problems",
            "Dynamic programming problems in table form"
        ],
        "Game Theory": [
            "Play-safe strategies and stable solutions",
            "Reducing the pay-off matrix",
            "Optimal strategies for games with no stable solution",
            "Converting games to linear programming problems"
        ],
        "Recurrence Relations": [
            "Forming recurrence relations",
            "Solving first-order recurrence relations",
            "Solving second-order recurrence relations"
        ],
        "Decision Analysis": [
            "Decision trees",
            "Utility"
        ],
        "Number Theory": [
            "Division theorem",
            "Euclidean algorithm",
            "Bezout's theorem",
            "Modular arithmetic",
            "Fermat's little theorem",
            "Congruence equations",
            "Divisibility tests"
        ],
        "Combinatorics": [
            "Counting problems",
            "Permutations and combinations",
            "Pigeonhole principle",
            "Inclusion-exclusion principle",
            "Derangements"
        ],
        "Groups": [
            "Axioms of a group",
            "Orders of elements",
            "Subgroups",
            "Lagrange's theorem",
            "Isomorphisms"
        ],
        "Linear Regression": [
            "Equation of a regression line",
            "Coding with regression lines",
            "Residuals",
            "Residual sum of squares (RSS)",
            "Least squares linear regression"
        ],
        "Continuous Probability Distributions": [
            "Probability density functions",
            "Cumulative distribution functions",
            "Mean and variance of continuous distributions",
            "Continuous uniform distribution"
        ],
        "Correlation": [
            "Pearson product-moment correlation coefficient",
            "Spearman's rank correlation coefficient",
            "Hypothesis testing for correlation"
        ],
        "Combinations of Random Variables": [
            "Linear combinations of independent random variables",
            "Expectation and variance of combinations"
        ],
        "Estimation, Confidence Intervals and Tests": [
            "Unbiased estimators",
            "Confidence intervals for a mean",
            "Confidence intervals for a variance",
            "Pooled estimate of a population variance",
            "Testing the difference between means",
            "Testing the difference between variances"
        ]
    }
}

# 3. Push to Firebase
print("Uploading metadata to Firestore...")
db.collection("sys_config").document("metadata_index").set(metadata_update, merge=True)
print("Success! Your app dropdowns are now fully populated.")