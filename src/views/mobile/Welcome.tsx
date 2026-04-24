"use client";

import React, { useState, useEffect } from "react";
import { SearchInput } from "@/components/SearchInput";

export default function WelcomeMobile() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const greetings = ["Сап", "Привет", "Что на душе"];
    const random = greetings[Math.floor(Math.random() * greetings.length)];
    
    // Если "Что на душе", ставим вопрос, иначе восклицательный знак
    const sign = random === "Что на душе" ? "?" : "!";
    setGreeting(`${random}, юзер${sign}`);
  }, []);

  return (
    <div className="flex flex-col h-full w-full relative">
      {/* Кнопка меню вверху слева */}
      <div className="absolute top-6 left-6">
        <div className="w-10 h-10 rounded-full bg-[#F2F2F7] flex items-center justify-center active:scale-95 transition-transform overflow-hidden">
          <img src="/Icons/menu.PNG" alt="Menu" className="w-5 h-5 object-contain" />
        </div>
      </div>

      {/* Центр */}
      <main className="flex-1 flex flex-col items-center justify-center px-8">
        <div className="text-center mb-8">
          <h1 className="text-[28px] font-bold tracking-tight mb-1 italic">
            {greeting}
          </h1>
          <p className="text-[17px] opacity-65 font-medium">
            Спрашивай о чем угодно
          </p>
        </div>

        {/* Инпут */}
        <div className="w-full max-w-sm">
          <SearchInput />
        </div>
      </main>
    </div>
  );
}
