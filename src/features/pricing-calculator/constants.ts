import type { LessonType } from './types';

export const LESSON_TYPES: LessonType[] = [
  {
    id: 'individual',
    name: 'Индивидуальное занятие',
    basePrice: 2000,
    description: 'Персональные занятия с полным вниманием преподавателя'
  },
  {
    id: 'consultation',
    name: 'Консультация',
    basePrice: 1200,
    description: 'Карьерная консультация и помощь с выбором направления'
  },
  {
    id: 'intensive',
    name: 'Интенсивная подготовка',
    basePrice: 2500,
    description: 'Ускоренная подготовка к экзаменам и олимпиадам'
  }
];

export const DISCOUNT_RULES = [
  { minLessons: 8, discount: 5, description: '5% скидка от 8 занятий' },
  { minLessons: 16, discount: 10, description: '10% скидка от 16 занятий' },
  { minLessons: 32, discount: 15, description: '15% скидка от 32 занятий' },
];
