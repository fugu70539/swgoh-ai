'use client';

import { useState, useEffect } from 'react';

export default function WelcomeMobile() {
  const [greeting, setGreeting] = useState('');
  const [value, setValue] = useState('');

  const suggestions = [
    "Расскажи о себе",
    "Какие есть топовые пачки?",
    "Как пройти Противостояние?",
    "Лучшие модули на Вейдера",
    "Гайд по Реликвиям"
  ];

  useEffect(() => {
    const greetings = ['Сап', 'Привет', 'Что на душе'];
    const random = greetings[Math.floor(Math.random() * greetings.length)];
    setGreeting(random === 'Что на душе' ? 'Что на душе, юзер?' : `${random}, юзер!`);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col bg-white overflow-hidden font-sans">
      
      {/* Кнопка меню — теперь строго того же размера, что и кнопка отправки (42px) */}
      <div className="absolute top-6 left-6 z-50">
        <button className="w-[42px] h-[42px] rounded-full bg-[#edf2f7] flex items-center justify-center active:scale-90 transition-all">
          <img src="/Icons/menu.PNG" alt="M" className="w-5 h-5 object-contain" />
        </button>
      </div>

      <div className="flex-1 flex flex-col justify-center items-start px-8 w-full">
        
        {/* Заголовки */}
        <div className="inline-block mb-8 select-none">
          <h1 className="text-[32px] font-bold tracking-tight text-[#1a1a1a] leading-tight">
            {greeting || 'Привет, юзер!'}
          </h1>
          <h2 className="text-[32px] font-bold tracking-tight text-[#1a1a1a] opacity-60 leading-tight">
            Я помогу тебе с любым вопросом
          </h2>
        </div>

        {/* Блок подсказок */}
        <div className="w-full max-w-[440px] mb-5">
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
            {suggestions.map((text, index) => (
              <button
                key={index}
                onClick={() => setValue(text)}
                className="whitespace-nowrap px-4 py-2 bg-white text-[#7a89a3] border-[1.5px] border-[#edf2f7] rounded-2xl text-[14px] font-semibold active:scale-95 transition-all active:bg-[#f8fafc]"
              >
                {text}
              </button>
            ))}
          </div>
        </div>

        {/* Строка ввода с идеальной симметрией */}
        <div className="w-full max-w-[440px]">
          <div className="flex items-center h-[56px] bg-[#edf2f7] rounded-full px-2">
            
            {/* Контейнер для текста с левым отступом, равным правому (после кнопки) */}
            <div className="relative flex-1 h-full flex items-center ml-4">
              {value === "" && (
                <span className="absolute left-0 text-[#7a89a3] font-medium text-[16px] pointer-events-none whitespace-nowrap">
                  Спросить что угодно…
                </span>
              )}
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="bg-transparent border-none outline-none text-[#1a1a1a] text-[16px] w-full font-medium"
              />
            </div>

            {/* Кнопка отправки (42px) */}
            <button className="h-[42px] w-[42px] bg-[#1a1a1a] rounded-full flex items-center justify-center active:scale-95 transition-all shrink-0">
              <img 
                src="/Icons/send.PNG" 
                alt="↑" 
                className="w-4 h-4 brightness-0 invert" 
              />
            </button>
          </div>

          {/* Дисклеймер под строкой */}
          <p className="mt-3 px-6 text-[12px] text-[#1a1a1a] opacity-[0.65] font-medium leading-tight">
            Ии может ошибаться, не стоит принимать все за чистую монету
          </p>
        </div>

      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
