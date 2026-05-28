export interface MathProblem {
  id: string;
  origin: string;
  metadata: {
    topic: string;
    type: string;
    technique: string;
    difficulty: string;
  };
  content: {
    latex_problem: string;
    latex_solution_steps: string[];
    final_answer: string;
    examiner_notes?: string; 
  };
}