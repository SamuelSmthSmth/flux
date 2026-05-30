# Misty

Misty is an advanced, interactive mathematics learning and problem-solving dashboard. It provides a highly tailored environment designed specifically for students mastering A-Level past paper questions, mathematical proofs, and advanced competition-level mathematics.

## Architectural Overview

Misty is built using a modern, fast, and type-safe front-end architecture, powered by the following core technologies:

*   **React and TypeScript**: The core application logic and structural components are built in TypeScript using React's hook-based state management.
*   **Vite**: Acts as the ultra-fast build tool and development server, supporting hot module replacement (HMR).
*   **Tailwind CSS**: A utility-first CSS framework configured to deliver a premium, dark-mode-first visual language featuring smooth animations, responsive sizing, and a glassmorphic aesthetic.
*   **Cloud Firestore (Firebase)**: A scalable, flexible NoSQL cloud database providing dynamic loading of past paper questions, subtopics, and exam board indexes.
*   **KaTeX & React Markdown**: Math expressions (including LaTeX blocks and inline formulas) are parsed and rendered server-side and client-side with typographic precision.

---

## Core Features and Modes

The dashboard is structured into three highly optimized workspace environments, each addressing a unique phase of mathematics preparation.

### 1. Flux (Hyper-Precise Question Finder)
Designed for targeted practice, Flux allows students to locate exact past paper questions instantly.
*   **Dynamic Filtering**: Search and filter by Subject (Mathematics, Physics, Further Maths), Difficulty (Standard, Advanced), and specific Exam Boards (Edexcel, AQA, OCR, MEI, TMUA, STEP, AEA).
*   **Granular Topic Tree**: Drill down into specific mathematical topics and toggle multiple sub-topics simultaneously.
*   **Twin-Pane Workspace**: Once questions are fetched, the workspace opens into a split view, allowing the student to see the question on the left and seamlessly pull up mark schemes and examiner reports on the right.

### 2. Fields (Derivation Hub)
Fields focuses on building structural mathematical intuition through formal proofs.
*   **Netflix-Style Discovery Library**: Horizontal scroll carousels highlighting "Essential Proofs" (e.g., Irrationality of √2, Power Rule, Infinite Primes) and "Foundational Algebra" (e.g., Completing the Square, Logarithm Rules).
*   **Step-by-Step Derivation View**: A dedicated reading interface with progressive disclosure for steps, prerequisite tags, and interactive visualizations.

### 3. Forge (Legendary Problem Vault)
Forge is built for advanced, multi-step problem solving, pulling from elite papers like STEP II, STEP III, AEA, and the International Mathematical Olympiad (IMO).
*   **IDE-Inspired Interface**: Designed like a developer's workspace with a clean, low-latency, active sidebar and high-contrast tabs.
*   **Structured Problem Journey**: Encourages rigorous learning by breaking the solution down into four tabs:
    1.  *Pre-flight*: Overview of concepts and structural warnings.
    2.  *Hints*: Clues to prevent frustrating road-blocks without spoiling the core logic.
    3.  *Solutions*: Fully detailed, step-by-step mathematical proofs.
    4.  *Post-Mortem*: Key takeaways, common traps, and generalized techniques.

---

## Technical Refinements and Performance

*   **Hardware-Accelerated Animation Pipeline**: To eliminate lag spikes and heavy processing overhead on mobile and tablet GPUs, transitions avoid expensive CSS properties like overlapping radial gradient masks, blur filters, or text wave animations. Instead, the interface detects smaller screens (under 1024px) and falls back to clean, hardware-accelerated opacity fades and minor hardware-accelerated transforms.
*   **Dynamic Metadata Indexing**: The topic hierarchy and exam board list are loaded dynamically via Firestore. This ensures that adding new questions to the database automatically updates the front-end interface, removing the need for manual client-side code changes.
*   **Deep Linking and Persistence**: Active workspaces, search queries, and selected configurations persist during sessions to ensure uninterrupted focus.

---

## Getting Started

### Prerequisites

*   Node.js (v18.0 or higher recommended)
*   npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/samuel/Misty.git
   cd Misty
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Firebase environment:
   Create a local configuration that matches the credentials found in `src/firebase.ts`.

4. Start the local development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```
