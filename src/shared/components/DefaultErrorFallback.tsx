import React from 'react';

interface ErrorFallbackProps {
  error?: Error;
  componentName?: string;
}

const DefaultErrorFallback: React.FC<ErrorFallbackProps> = ({ 
  error, 
  componentName = 'Component' 
}) => (
  <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
    <h3 className="text-lg font-semibold text-red-800 mb-2">
      Ошибка в компоненте {componentName}
    </h3>
    <p className="text-red-600 text-sm mb-4">
      Что-то пошло не так. Пожалуйста, обновите страницу.
    </p>
    {import.meta.env.DEV && error && (
      <details className="text-xs text-red-500">
        <summary>Детали ошибки (только для разработки)</summary>
        <pre className="mt-2 whitespace-pre-wrap">{error.message}</pre>
      </details>
    )}
  </div>
);

export default DefaultErrorFallback;
