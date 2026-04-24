'use client';

import { useState, useEffect } from 'react';

export default function WelcomeMobile() {
  const [greeting, setGreeting] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    const greetings = ['Сап', 'Привет', 'Что на душе'];
    const random = greetings[Math.floor(Math.random() * greetings.length)];
    setGreeting(random === 'Что на душе' ? 'Что на душе, юзер?' : `${random}, юзер!`);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col bg-white text-black font-sans overflow-hidden">
      
      {/* Меню (вверху слева) */}
      <div className="absolute top-6 left-6 z-20">
        <button className="w-10 h-10 rounded-full bg-[#f0f3f8] border border-[#e5e9f0] flex items-center justify-center active:scale-90 transition-all">
          <img src="/Icons/menu.PNG" alt="Menu" className="w-5 h-5 object-contain" />
        </button>
      </div>

      {/* Центр */}
      <div className="flex-1 flex flex-col justify-center items-center px-8">
        
        {/* Текст */}
        <div className="text-center mb-10">
          <h1 className="text-[32px] font-bold tracking-tight mb-2">
            {greeting || 'Привет, юзер!'}
          </h1>
          <p className="text-[17px] font-medium opacity-65">
            Спрашивай о чем угодно
          </p>
        </div>

        {/* Строка ввода */}
        <div className="w-full max-w-[400px]">
          <div className="w-full flex items-center h-12 bg-[#f0f3f8] rounded-full pl-6 pr-1 border border-[#e5e9f0]">
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

            {/* Кнопка отправки (черная, иконка инвертирована в белый) */}
            <button className="h-[40px] px-5 bg-black rounded-full flex items-center justify-center active:scale-95 transition-all">
              <img 
                src="/Icons/SendToAi.png" 
                alt="Send" 
                className="w-3.5 h-3.5 invert" 
              />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
