import React, { useState, useEffect } from 'react';

// хук useOnRouteChange
function useOnRouteChange() {
  // состояние
  const [scrollToTop, setScrollToTop] = useState(false);

  // эффект
  useEffect(() => {
    // слушаем изменения маршрута
    const handleRouteChange = () => {
      setScrollToTop(true);
    };

    // добавляем слушателя
    window.addEventListener('route-change', handleRouteChange);

    // удаляем слушателя при удалении компонента
    return () => {
      window.removeEventListener('route-change', handleRouteChange);
    };
  }, []);

  // возвращаем состояние
  return [scrollToTop, () => setScrollToTop(false)];
}