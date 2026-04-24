'use client';

import { useState, useEffect } from 'react';

export default function WelcomeMobile() {
  const [greeting, setGreeting] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    // Список приветствий
    const greetings = ['Сап', 'Привет', 'Что на душе'];
    const random = greetings[Math.floor(Math.random() * greetings.length)];
    
    // Особое условие для "Что на душе"
    if (random === 'Что на душе') {
      setGreeting('Что на душе, юзер?');
    } else {
      setGreeting(`${random}, юзер!`);
    }
  }, []);

  return (
    <div className="relative flex flex-col h-full w-full bg-white text-black px-6">
      
      {/* Шапка: кнопка меню сверху слева */}
      <div className="absolute top-6 left-6">
        <button className="w-10 h-10 rounded-full bg-[#f0f3f8] flex items-center justify-center border border-[#e5e9f0] active:scale-90 transition-all">
          <img 
            src="/Icons/menu.PNG" 
            alt="Menu" 
            className="w-5 h-5 object-contain"
          />
        </button>
      </div>

      {/* Основной контент по центру */}
      <div className="flex-1 flex flex-col justify-center items-center">
        
        {/* Текстовый блок */}
        <div className="text-center mb-8">
          <h1 className="text-[32px] font-bold tracking-tight mb-1 text-black">
            {greeting || '...'}
          </h1>
          <p className="text-[17px] font-medium text-black opacity-65">
            Спрашивай о чем угодно
          </p>
        </div>

        {/* Строка ввода из твоего примера (адаптированная и без боковой кнопки) */}
        <div className="w-full max-w-[400px]">
          <div className="w-full flex items-center h-12 bg-[#f0f3f8] rounded-full pl-6 pr-1 border border-[#e5e9f0]">
            
            {/* Поле ввода и плейсхолдер */}
            <div className="relative flex-1 h-full flex items-center">
              {value === "" && (
                <span className="absolute left-0 text-black opacity-35 font-medium text-[15px] pointer-events-none">
                  Найти что-нибудь...
                </span>
              )}
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="bg-transparent border-none outline-none text-black text-[15px] w-full font-medium relative z-10"
              />
            </div>

            {/* Кнопка отправки стрелочкой */}
            <button className="h-[40px] px-5 bg-black text-white flex items-center justify-center active:scale-95 transition-all shrink-0 rounded-full ml-2">
              <img 
                src="/Icons/SendToAi.png?v=5" 
                alt="Send" 
                className="w-[14px] h-[14px] invert" 
              />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
