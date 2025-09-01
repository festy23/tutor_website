import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { LESSON_TYPES, DISCOUNT_RULES } from '../constants';
import type { CalculatorState, PriceBreakdown } from '../types';

const PricingCalculator: React.FC = () => {
  const [state, setState] = useState<CalculatorState>({
    selectedLessonType: 'individual',
    lessonsPerWeek: 1,
    totalWeeks: 4,
    hasDiscount: false,
    discountPercent: 0,
  });

  const priceBreakdown = useMemo((): PriceBreakdown => {
    const lessonType = LESSON_TYPES.find(t => t.id === state.selectedLessonType);
    const basePrice = lessonType?.basePrice || 2000;
    const totalLessons = state.lessonsPerWeek * state.totalWeeks;
    const subtotal = basePrice * totalLessons;

    // Calculate discount
    const applicableDiscount = DISCOUNT_RULES
      .filter(rule => totalLessons >= rule.minLessons)
      .sort((a, b) => b.discount - a.discount)[0];

    const discountPercent = applicableDiscount?.discount || 0;
    const discount = subtotal * (discountPercent / 100);
    const finalPrice = subtotal - discount;

    return {
      basePrice,
      totalLessons,
      subtotal,
      discount,
      finalPrice,
      pricePerLesson: finalPrice / totalLessons,
    };
  }, [state]);

  const updateState = (updates: Partial<CalculatorState>) => {
    setState(prev => ({ ...prev, ...updates }));
  };

  return (
    <div className="glass-card rounded-2xl p-6 md:p-8 grain">
      <div className="text-center mb-8">
        <h3 className="font-podkova font-bold text-2xl md:text-3xl text-gray-800 mb-2">
          Калькулятор стоимости
        </h3>
        <p className="font-space-grotesk text-base text-gray-600">
          Рассчитайте стоимость занятий
        </p>
      </div>

      <div className="space-y-6">
        {/* Lesson Type Selection */}
        <div>
          <label className="block font-space-grotesk text-sm font-medium text-gray-700 mb-3">
            Тип занятий
          </label>
          <div className="grid grid-cols-1 gap-3">
            {LESSON_TYPES.map((type) => (
              <motion.button
                key={type.id}
                onClick={() => updateState({ selectedLessonType: type.id })}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-4 rounded-xl text-left transition-all duration-300 ${
                  state.selectedLessonType === type.id
                    ? 'bg-brand-red text-white shadow-lg'
                    : 'bg-white/50 text-gray-700 hover:bg-white/70'
                }`}
              >
                <div className="font-space-grotesk font-medium text-base mb-1">
                  {type.name}
                </div>
                <div className="text-sm opacity-80 mb-2">
                  {type.description}
                </div>
                <div className="font-bold text-lg">
                  {type.basePrice.toLocaleString()} ₽/час
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Frequency Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-space-grotesk text-sm font-medium text-gray-700 mb-3">
              Занятий в неделю: {state.lessonsPerWeek}
            </label>
            <input
              type="range"
              min="1"
              max="5"
              value={state.lessonsPerWeek}
              onChange={(e) => updateState({ lessonsPerWeek: parseInt(e.target.value) })}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
            </div>
          </div>

          <div>
            <label className="block font-space-grotesk text-sm font-medium text-gray-700 mb-3">
              Количество недель: {state.totalWeeks}
            </label>
            <input
              type="range"
              min="1"
              max="20"
              value={state.totalWeeks}
              onChange={(e) => updateState({ totalWeeks: parseInt(e.target.value) })}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>1 нед</span>
              <span>10 нед</span>
              <span>20 нед</span>
            </div>
          </div>
        </div>

        {/* Price Breakdown */}
        <motion.div
          layout
          className="bg-gradient-to-r from-brand-red/10 to-brand-red/5 rounded-xl p-6 border border-brand-red/20"
        >
          <h4 className="font-space-grotesk font-semibold text-lg text-gray-800 mb-4">
            Расчет стоимости
          </h4>
          
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Базовая цена за занятие:</span>
              <span className="font-medium">{priceBreakdown.basePrice.toLocaleString()} ₽</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Всего занятий:</span>
              <span className="font-medium">{priceBreakdown.totalLessons}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Промежуточная сумма:</span>
              <span className="font-medium">{priceBreakdown.subtotal.toLocaleString()} ₽</span>
            </div>
            
            {priceBreakdown.discount > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex justify-between text-green-600"
              >
                <span>Скидка:</span>
                <span className="font-medium">-{priceBreakdown.discount.toLocaleString()} ₽</span>
              </motion.div>
            )}
            
            <div className="border-t border-gray-300 pt-3">
              <div className="flex justify-between text-xl font-bold text-gray-800">
                <span>Итого:</span>
                <span className="text-brand-red">{priceBreakdown.finalPrice.toLocaleString()} ₽</span>
              </div>
              <div className="text-sm text-gray-500 text-right">
                ≈ {Math.round(priceBreakdown.pricePerLesson).toLocaleString()} ₽ за занятие
              </div>
            </div>
          </div>

          <motion.a
            href={`https://t.me/knvlvivn?text=Здравствуйте!%20Хочу%20записаться%20на%20${priceBreakdown.totalLessons}%20занятий.%20Расчет:%20${priceBreakdown.finalPrice.toLocaleString()}₽`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="block w-full bg-brand-red text-white text-center py-4 mt-6 rounded-xl font-space-grotesk font-medium hover:bg-red-700 transition-colors duration-300"
          >
            Записаться на занятия
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingCalculator;
