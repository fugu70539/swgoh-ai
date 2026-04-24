'use client';

import { useState, useEffect } from 'react';

export default function WelcomeMobile() {
  const [greeting, setGreeting] = useState('');
  const [value, setValue] = useState('');
  const [randomSuggestions, setRandomSuggestions] = useState<string[]>([]);

  const allSuggestions = [
    "Лучшая пачка с Кеноби",
    "Как зафармить Легенду?",
    "Модули для Дарта Вейдера",
    "Кого качать новичку в 2026?",
    "Гайд на Великую Арену",
    "Как победить Джаббу?",
    "Рейд Набу: лучшие герои",
    "Зачем нужны реликвии 9?",
    "Контр-пики Галактических Легенд",
    "Лучший флот для Арены",
    "Как эффективно фармить моды?",
    "Событие на Чебакку",
    "Приоритет фарма Кайло Рена",
    "Лучшие Дзеты для Гильдии",
    "Как фармить Осколки быстрее?",
    "Тир-лист персонажей 2026",
    "Кого брать в команду Феникс?",
    "Как победить в Войнах Гильдий?",
    "Синхронизация с SWGOH.GG",
    "Эффективный фарм кредитов",
    "Как пройти 7 уровень Испытаний?",
    "Лучшие команды для Завоевания",
    "Гайд по Осквернителю",
    "Как получить Бо-Катан (Мандалор)?",
    "Приоритеты в магазине Осколков"
  ];

  useEffect(() => {
    const greetings = ['Сап', 'Привет', 'Что на душе'];
    const randomG = greetings[Math.floor(Math.random() * greetings.length)];
    setGreeting(randomG === 'Что на душе' ? 'Что на душе, юзер?' : `${randomG}, юзер!`);

    const shuffled = [...allSuggestions].sort(() => 0.5 - Math.random());
    setRandomSuggestions(shuffled.slice(0, 6));
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
        
        {/* Заголовки */}
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

        {/* Подсказки */}
        <div className="w-full max-w-[440px] mb-5">
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
            {randomSuggestions.map((text, index) => (
              <button
                key={index}
                onClick={() => setValue(text)}
                className="flex items-center gap-2 whitespace-nowrap px-5 py-3 bg-white text-[#7a89a3] border-[1.5px] border-[#edf2f7] rounded-full text-[14px] font-semibold active:scale-95 transition-all active:bg-[#f8fafc] flex-shrink-0"
              >
                <img 
                  src="/Icons/idea.PNG" 
                  alt="idea" 
                  className="w-4 h-4 object-contain opacity-70"
                  style={{ 
                    // Цвет в тон текста рядом (#7a89a3)
                    filter: 'invert(58%) sepia(13%) saturate(588%) hue-rotate(182deg) brightness(94%) contrast(90%)' 
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

          <p className="mt-3 text-center text-[11.5px] text-[#1a1a1a] opacity-[0.6] font-medium leading-[1.1] w-full tracking-wide">
            ИИ может ошибаться, не стоит принимать все<br />за чистую монету
          </p>
        </div>
      </div>

      {/* Футер-подпись гильдии (тонкий намек на авторство) */}
      <div className="pb-6 w-full text-center">
         <span className="text-[10px] text-[#1a1a1a] opacity-20 font-bold tracking-[0.2em] uppercase">
           Those who are in the shadows
         </span>
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
