import { useState, useCallback } from 'react';
import type { ContactFormData, ContactFormState, FormValidation } from '../types';

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  subject: 'individual',
  message: '',
  preferredTime: 'flexible',
  studentLevel: 'beginner',
};

const validateForm = (data: ContactFormData): FormValidation => {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};

  if (!data.name.trim()) {
    errors.name = 'Введите ваше имя';
  } else if (data.name.trim().length < 2) {
    errors.name = 'Имя должно содержать минимум 2 символа';
  }

  if (!data.email.trim()) {
    errors.email = 'Введите email';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Введите корректный email';
  }

  if (!data.phone.trim()) {
    errors.phone = 'Введите номер телефона';
  } else if (!/^[+]?[1-9][\d]{0,15}$/.test(data.phone.replace(/[\s\-()]/g, ''))) {
    errors.phone = 'Введите корректный номер телефона';
  }

  if (!data.message.trim()) {
    errors.message = 'Введите сообщение';
  } else if (data.message.trim().length < 10) {
    errors.message = 'Сообщение должно содержать минимум 10 символов';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

export const useContactForm = () => {
  const [state, setState] = useState<ContactFormState>({
    ...initialFormData,
    isSubmitting: false,
    isSubmitted: false,
    validation: { isValid: false, errors: {} },
  });

  const updateField = useCallback((field: keyof ContactFormData, value: string) => {
    setState(prev => ({
      ...prev,
      [field]: value,
      validation: validateForm({ ...prev, [field]: value }),
    }));
  }, []);

  const submitForm = useCallback(async () => {
    const validation = validateForm(state);
    
    if (!validation.isValid) {
      setState(prev => ({ ...prev, validation }));
      return;
    }

    setState(prev => ({ ...prev, isSubmitting: true }));

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In real app, you'd send to your backend or email service
      const telegramMessage = `
Новая заявка с сайта:
👤 Имя: ${state.name}
📧 Email: ${state.email}
📞 Телефон: ${state.phone}
📚 Тип: ${state.subject}
⏰ Время: ${state.preferredTime}
📊 Уровень: ${state.studentLevel}
💬 Сообщение: ${state.message}
      `.trim();

      const telegramUrl = `https://t.me/knvlvivn?text=${encodeURIComponent(telegramMessage)}`;
      window.open(telegramUrl, '_blank');

      setState(prev => ({
        ...prev,
        isSubmitting: false,
        isSubmitted: true,
      }));
    } catch {
      setState(prev => ({
        ...prev,
        isSubmitting: false,
        validation: {
          isValid: false,
          errors: { message: 'Произошла ошибка при отправке. Попробуйте еще раз.' }
        }
      }));
    }
  }, [state]);

  const resetForm = useCallback(() => {
    setState({
      ...initialFormData,
      isSubmitting: false,
      isSubmitted: false,
      validation: { isValid: false, errors: {} },
    });
  }, []);

  return {
    ...state,
    updateField,
    submitForm,
    resetForm,
  };
};
