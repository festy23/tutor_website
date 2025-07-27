### MY PROMPT
I have a website built using Vite.js and Tailwind CSS, currently optimized for desktop browsers. I need you to make the entire website fully responsive and mobile-friendly, with special care for usability, accessibility, and performance on phones and tablets.
Please use Tailwind’s mobile-first utilities and apply changes across all relevant components, sections, and pages. Here are the specific tasks and requirements:
✅ Layout & Structure
Use flex or grid utilities to restructure layouts for small screens.
Wrap content in responsive containers using max-w- and w-full.
Ensure that padding and margins (px-, py-, m-, gap-) scale well from sm: up to xl:.
Prevent horizontal scrolling and content overflow.
✅ Navigation (Navbar / Sidebar)
Convert any desktop navbars into mobile-friendly hamburger menus.
Use Headless UI or other mobile-accessible dropdown solutions.
Ensure that the menu opens and closes properly on mobile, supports touch, and is accessible via keyboard (ARIA roles as needed).
✅ Typography & Touch Targets
Scale text sizes using responsive classes like text-sm, md:text-base, lg:text-xl, etc.
Ensure all clickable elements (buttons, links, icons) have a minimum tap area (at least h-12 w-12 or similar).
Use hover: and focus: states, but don’t rely on hover-only interactions for core functionality.
✅ Images and MediaStart
Make all images fully responsive using Tailwind's utility classes like w-full, object-cover, aspect-video, etc.
Use srcset or multiple image sizes for performance if needed.
Use lazy loading where appropriate to improve mobile loading speed.
✅ Forms & Inputs
Style form elements (input, select, textarea, button) for comfortable mobile usage.
Use responsive layout for forms (e.g., stacked on mobile, inline on desktop).
Apply Tailwind focus and spacing utilities for clean UI.
Use mobile-optimized input types (email, tel, number, etc.).
✅ Breakpoints & Responsiveness
Use Tailwind’s breakpoint prefixes:
sm: for ≥640px
md: for ≥768px
lg: for ≥1024px
xl: for ≥1280px
Ensure that all sections of the site (hero, cards, footers, etc.) adapt gracefully.
Use hidden, block, flex, and grid conditionally with breakpoints.
✅ Meta & Viewport
Confirm the following tag is present in the index.html:
<meta name="viewport" content="width=device-width, initial-scale=1" />
✅ Performance & UX
Use Tailwind’s utility-first classes to avoid unnecessary global CSS.
Eliminate layout shift on mobile by setting fixed heights or aspect ratios.
Optimize loading speed by:
Lazy-loading images
Minimizing DOM elements
Reducing JavaScript on initial load
✅ Testing & Validation
Test responsiveness in:
Chrome/Firefox responsive dev tools
iPhone/Android screen sizes (320px, 375px, 414px, 768px, etc.)
Both portrait and landscape
Check with tools like:
Chrome Lighthouse (Mobile mode)
Responsively App (optional)
✅ Optional Enhancements
Sticky header on scroll (sticky top-0 z-50)
Scroll-to-top button for long pages
dark: mode support for better readability at night
Add smooth scroll: scroll-smooth and duration- utilities
🔁 Final Note:
Refactor all necessary .vue or .js/.jsx components and .html templates within the Vite project. Prefer Tailwind’s mobile-first classes instead of writing custom CSS unless absolutely required.
Deliver a site that is visually polished, responsive, touch-optimized, and ready for production on all devices.



### MY PROJECT STRUCTURE
# Требования к проекту

## 1. Технологический стек
- **Vite** — быстрый dev-сервер с HMR и оптимизированной сборкой для продакшена
- **React** — компонентный UI-фреймворк
- **TypeScript** (рекомендуется) — для строгой типизации и улучшения опыта разработки
- **Tailwind CSS** — утилитарный CSS-фреймворк для минимизации лишнего CSS
- **PostCSS + Autoprefixer** — обработка Tailwind и добавление вендорных префиксов

## 2. Структура проекта

```
project/
├─ index.html
├─ vite.config.ts
├─ tailwind.config.js
├─ postcss.config.js
└─ src/
    ├─ main.tsx
    ├─ index.css
    ├─ assets/              # Фон, иконки, динозавр, фото
    └─ components/
        ├─ Header.tsx
        ├─ Preview.tsx
        ├─ About.tsx
        ├─ WhyMe.tsx
        ├─ Services.tsx
        ├─ Reviews.tsx
        ├─ Prices.tsx
        ├─ Game.tsx
        └─ Footer.tsx
```

## 3. UI-дизайн и стили

### 3.1 Фон
- Основной фон сайта — бумажная текстура с сеткой (white).

### 3.2 Цвета и шрифты
- **Цветовая палитра** (в `tailwind.config.js`):
  - `beige`: #F5E1A4
  - `darkCoffee`: #2D1F1A
  - `paper`: #FFFFFF
- **Шрифты**:
  - Основной — пиксельный моно-шрифт (`font-pixel`) через `@font-face` или Google Fonts
  - Резервный — `font-mono`

### 3.3 Анимации
- **Эффект «набор текста»**:
  ```css
  @keyframes typewriter {
    from { width: 0; }
    to   { width: 100%; }
  }
  ```
  В `tailwind.config.js`:
  ```js
  animation: { typewriter: 'typewriter 2s steps(var(--letters)) forwards' }
  ```
  Применять к заголовкам с классом `.typed` и CSS-переменной `--letters`.
- **Bounce-анимация** для стрелок: использовать `animate-bounce`.

## 4. Компоненты (секции)

### 4.1 Header
- Появляется при скролле
- Фон: `bg-beige`
- Слева: “Коновалов Иван” (пиксельный шрифт, черный)
- Справа: “I <3 90+” (пиксельный шрифт, черный)

### 4.2 Preview
- Заполняет высоту экрана
- Grainy-градиент
- Заголовок: “Репетитор по информатике” с эффектом набора текста
- Стрелка: “↓ Листать вниз ↓” с `animate-bounce`

### 4.3 About Me
- Фото + описание (не изменяется)
- Стрелка вниз

### 4.4 Why Me (ПОЧЕМУ Я?)
- Заголовок с эффектом набора текста
- Список с emoji в начале каждой строки:
  - Обучил 20+ учеников со средним баллом 90+
  - Имею опыт работы в IT-индустрии
  - Учусь в НИУ ВШЭ на ФКН "Программная инженерия"
  - Помогаю с карьерной консультацией в IT и выбором вуза
  - Отслеживаю прогресс КАЖДОГО ученика

### 4.5 Services (Услуги)
- Заголовок: “Как я могу вам помочь?” (с эффектом набора текста)
- Шесть кликабельных карточек:
  - Emoji + заголовок + описание
  - Hover-анимация
  - По клику: открывает Telegram-шаблон:
    ```
    https://t.me/knvlvivn?text=Здравствуйте! 🤖 Я заинтересован(а) в услуге '<название услуги>'. Расскажите, пожалуйста, подробнее.
    ```

### 4.6 Reviews (Отзывы)
- Заголовок с эффектом набора текста
- Бесконечный скролл карточек справа налево:
  - При hover: пауза и лёгкое увеличение
  - Карточки: `min-w-[300px]`, `rounded-lg`, с тенью
  - 4 отзыва (см. ТЗ)
- Стрелка вниз

### 4.7 Prices (Цены)
- Заголовок с эффектом набора текста
- Цены:
  - Консультация — от 1500 ₽/ч
  - Занятие ЕГЭ/ОГЭ — от 2000 ₽/ч
- Кнопка: “СВЯЗАТЬСЯ СО МНОЙ”
- Текст: “ПЕРВОЕ ЗАНЯТИЕ БЕСПЛАТНО!”
- Стрелка вниз

### 4.8 Game (ПРОВЕРЬ СВОИ БАЛЛЫ ЕГЭ)
- Заголовок с эффектом набора текста
- Игра типа “Chrome Dino”:
  - Прыжок по пробелу
  - 10 кактусов, +10 баллов за каждый
  - Анимация “+10” над динозавром
  - При 100 баллах: сообщение и кнопка “Играть снова”

### 4.9 Footer (Контакты)
- Заголовок: “Контакты” (с эффектом набора текста)
- Фон: `darkCoffee`, светлый текст
- Контакты:
  - Telegram: `@knvlvivn`
  - Почта: `ivankon1@icloud.com`
- Текст: © 2025 Created by Konovalov Ivan

## 5. Навигация стрелками
- Стрелки вниз — пиксельный стиль, `animate-bounce`, `cursor-pointer`
- Скролл к следующей секции через `scrollIntoView()`

## 6. Адаптивность
- Для экранов < 640px:
  - **Services**: 1 колонка вместо 2
  - Текст и отступы адаптируются

## 7. Сборка и оптимизация
- Использовать **PostCSS** + **Autoprefixer**
- Минимизация CSS через **Tailwind JIT**
- Команда `npm run build` для продакшн-сборки
- Опционально: `@vitejs/plugin-legacy` для поддержки старых браузеров

## 8. Дополнительно
- **Рекомендуемые VSCode-плагины**: TailwindCSS IntelliSense
- Опционально: **ESLint** + **Prettier**
- Возможность локализации (русский)