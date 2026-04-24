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
      
      {/* Кнопка меню */}
      <div className="absolute top-6 left-6 z-50">
        <button className="w-[42px] h-[42px] rounded-full bg-[#edf2f7] flex items-center justify-center active:scale-90 transition-all">
          <img src="/Icons/menu.PNG" alt="M" className="w-5 h-5 object-contain" />
        </button>
      </div>

      <div className="flex-1 flex flex-col justify-center items-start px-8 w-full">
        
        {/* Заголовки с иконкой */}
        <div className="mb-8 select-none w-full">
          <div className="flex items-center gap-3 mb-1">
            <img 
              src="/Icons/appicon.PNG" 
              alt="App" 
              className="w-[36px] h-[36px] object-contain"
            />
            <h1 className="text-[32px] font-bold tracking-tight text-[#1a1a1a] leading-tight">
              {greeting || 'Привет, юзер!'}
            </h1>
          </div>
          <h2 className="text-[32px] font-bold tracking-tight text-[#1a1a1a] opacity-60 leading-tight">
            Я помогу тебе с любым вопросом
          </h2>
        </div>

        {/* Блок подсказок — увеличенная ширина и скругление */}
        <div className="w-full max-w-[440px] mb-5">
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
            {suggestions.map((text, index) => (
              <button
                key={index}
                onClick={() => setValue(text)}
                className="flex items-center gap-2 whitespace-nowrap px-5 py-3 bg-white text-[#7a89a3] border-[1.5px] border-[#edf2f7] rounded-full text-[14px] font-semibold active:scale-95 transition-all active:bg-[#f8fafc] flex-shrink-0"
              >
                {/* Принудительная покраска иконки в #FE894B через filter */}
                <img 
                  src="/Icons/idea.PNG" 
                  alt="idea" 
                  className="w-4 h-4 object-contain"
                  style={{ 
                    filter: 'invert(69%) sepia(85%) saturate(1437%) hue-rotate(325deg) brightness(101%) contrast(99%)' 
                  }}
                />
                {text}
              </button>
            ))}
          </div>
        </div>

        {/* Строка ввода */}
        <div className="w-full max-w-[440px]">
          <div className="flex items-center h-[56px] bg-[#edf2f7] rounded-full px-2">
            
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

            <button className="h-[42px] w-[42px] bg-[#1a1a1a] rounded-full flex items-center justify-center active:scale-95 transition-all shrink-0">
              <img 
                src="/Icons/send.PNG" 
                alt="↑" 
                className="w-4 h-4 brightness-0 invert" 
              />
            </button>
          </div>

          {/* Дисклеймер с переносом строки */}
          <p className="mt-3 text-center text-[10.5px] text-[#1a1a1a] opacity-[0.6] font-medium leading-normal w-full tracking-wide">
            Ии может ошибаться, не стоит принимать все<br />за чистую монету
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
