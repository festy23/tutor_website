import silverBooks from '../assets/silver_books.webp';
import silverTalk from '../assets/silver_tallk.webp';

export const pricingOptions = [
  {
    emoji: silverBooks,
    title: 'Индивидуальное занятие',
    price: '2000 р.',
    period: '/ 1 час',
    features: [
      'Занятия по ЕГЭ|ОГЭ|Олимпиадам',
      'Изучение программирования, создание сайтов и игр',
      'Личный план и подход к каждому ученику',
    ],
    link: 'https://t.me/knvlvivn?text=Здравствуйте!%20Я%20хочу%20записаться%20на%20занятие.',
    featured: true,
  },
  {
    emoji: silverTalk,
    title: 'Консультация',
    price: '1200 р.',
    period: '/ 1 час',
    features: [
      'Помощь с выбором вуза, расскажу какие направления перспективные',
      'Карьерная консультация, помогу понять, какая ваша сфера в IT',
    ],
    link: 'https://t.me/knvlvivn?text=Здравствуйте!%20Я%20хочу%20записаться%20на%20консультацию.',
    featured: false,
  },
];
