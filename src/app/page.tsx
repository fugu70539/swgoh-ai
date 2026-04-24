'use client';

import { useEffect, useState } from 'react';
import WelcomeMobile from '../views/mobile/Welcome';

export default function Page() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    // Функция для определения типа устройства
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Устанавливаем при загрузке
    handleResize();

    // Слушаем изменение размера экрана
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Пока идет проверка, показываем пустой экран (или лоадер)
  if (isMobile === null) {
    return <div className="bg-[#f5f5f7] h-screen" />;
  }

  // Если мобилка — показываем экран приветствия
  if (isMobile) {
    return <WelcomeMobile />;
  }

  // Если ПК — временная заглушка
  return (
    <div className="flex items-center justify-center h-screen bg-[#f5f5f7]">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-black mb-2">swgoh.ai</h1>
        <p className="text-gray-500">Версия для десктопа скоро появится.</p>
        <p className="text-xs text-gray-400 mt-4">Пожалуйста, используйте мобильное устройство.</p>
      </div>
    </div>
  );
}
