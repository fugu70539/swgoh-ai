'use client';
import { useEffect, useState } from 'react';
import WelcomeMobile from '@/views/mobile/Welcome';

export default function EntryPoint() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkDevice = () => {
      // Простая проверка на ширину экрана или User Agent
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  if (isMobile === null) return null; // Предотвращаем мерцание при загрузке

  if (isMobile) {
    return <WelcomeMobile />;
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-xl">Версия для ПК в разработке</h1>
    </div>
  );
}
