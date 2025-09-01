export interface LessonType {
  id: string;
  name: string;
  basePrice: number;
  description: string;
}

export interface CalculatorState {
  selectedLessonType: string;
  lessonsPerWeek: number;
  totalWeeks: number;
  hasDiscount: boolean;
  discountPercent: number;
}

export interface PriceBreakdown {
  basePrice: number;
  totalLessons: number;
  subtotal: number;
  discount: number;
  finalPrice: number;
  pricePerLesson: number;
}
