// ─── Vocabulary ────────────────────────────────────────────────────────────────
export interface VocabWord {
  en: string;
  fr: string;
  exampleEn: string;
  exampleFr: string;
}

// ─── Expressions ───────────────────────────────────────────────────────────────
export interface Expression {
  expression: string;
  translation: string;
  example: string;
  exampleTranslation: string;
}

// ─── Grammar ───────────────────────────────────────────────────────────────────
export interface GrammarPoint {
  title: string;
  content: string;
}

// ─── Exercises ─────────────────────────────────────────────────────────────────
export type ExerciseType = 'translation' | 'word-order' | 'fill-blank' | 'mcq' | 'guided';

export interface TranslationExercise {
  id: string;
  type: 'translation';
  question: string; // French sentence to translate
  answers: string[]; // All accepted English answers
}

export interface WordOrderExercise {
  id: string;
  type: 'word-order';
  question: string; // Instruction / French hint
  words: string[];  // Shuffled word tokens
  answer: string;   // The correct sentence
}

export interface FillBlankExercise {
  id: string;
  type: 'fill-blank';
  question: string; // Sentence with ___ placeholder
  hint?: string;    // Optional French hint
  answers: string[]; // All accepted words/phrases
}

export interface MCQExercise {
  id: string;
  type: 'mcq';
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

export interface GuidedExercise {
  id: string;
  type: 'guided';
  question: string;   // Instruction in French
  words: string[];    // Words to use
  answers: string[];  // All accepted full sentences
}

export type Exercise =
  | TranslationExercise
  | WordOrderExercise
  | FillBlankExercise
  | MCQExercise
  | GuidedExercise;

// ─── Day content ───────────────────────────────────────────────────────────────
export interface DayContent {
  id: number;
  theme: string;
  vocabulary: VocabWord[];
  expressions: Expression[];
  grammar: GrammarPoint;
  exercises: Exercise[];
}

// ─── Progress ─────────────────────────────────────────────────────────────────
export type DayStatus = 'locked' | 'unlocked' | 'validated';

export interface DayProgress {
  status: DayStatus;
  score: number | null;         // 0-100 last score
  completedAt: string | null;   // ISO date
  exerciseResults: boolean[];   // per-exercise result
}

export interface AppProgress {
  days: Record<number, DayProgress>;
  totalTimeSeconds: number;
  currentStreak: number;
  bestStreak: number;
  lastActiveDate: string | null;
}

// ─── Exercise result ───────────────────────────────────────────────────────────
export interface ExerciseResult {
  exerciseId: string;
  correct: boolean;
  userAnswer: string;
}
