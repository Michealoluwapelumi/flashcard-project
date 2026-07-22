export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  category: Category;
  keywords?: string[];
}

export type Category =
  | "html"
  | "css"
  | "tailwind-css"
  | "javascript"
  | "typescript"
  | "react"
  | "nextjs"
  | "git"
  | "apis"
  | "accessibility"
  | "performance"
  | "interview-questions";

export interface CategoryInfo {
  id: Category;
  name: string;
  icon: string;
  cardCount: number;
  color?: string;
  description?: string;
}

export interface Bookmark {
  cardId: string;
  savedAt: string;
}

export interface Progress {
  completedCardIds: string[];
  totalCards: number;
}
