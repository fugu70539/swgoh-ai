import React from 'react';

export default function WelcomeMobile() {
  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Шапка */}
      <header className="sticky top-0 z-10 backdrop-blur-md bg-white/70 border-b border-gray-200 px-6 py-4">
        <h1 className="text-lg font-semibold tracking-tight text-center">swgoh.ai</h1>
      </header>

      {/* Контент чата */}
      <main className="flex-1 overflow-y-auto p-6 flex flex-col justify-center items-center text-center">
        <div className="w-20 h-20 bg-black rounded-2xl mb-6 shadow-xl flex items-center justify-center">
           <span className="text-white text-3xl font-bold">S</span>
        </div>
        <h2 className="text-2xl font-bold mb-2">Привет, Гранд-Мастер</h2>
        <p className="text-gray-500 text-sm max-w-[240px]">
          Твой личный ИИ-советник по «Галактике Героев». Готов к анализу?
        </p>
      </main>

      {/* Инпут внизу */}
      <footer className="p-4 bg-white border-t border-gray-100">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Спроси что-нибудь..." 
            className="w-full bg-[#f2f2f7] border-none rounded-full py-3 px-5 focus:ring-2 focus:ring-blue-500 transition-all outline-none"
          />
          <button className="absolute right-2 top-1.5 bg-black text-white w-8 h-8 rounded-full flex items-center justify-center">
            ↑
          </button>
        </div>
      </footer>
    </div>
  );
}
