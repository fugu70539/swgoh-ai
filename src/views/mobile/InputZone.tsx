'use client';

import { useState } from 'react';

export default function InputZone({ mode, onSend }: { mode: 'welcome' | 'chat', onSend: (t: string) => void }) {
  const [val, setVal] = useState('');

  const submit = () => {
    const t = val.trim();
    if (t.length > 1 && /[a-zA-Zа-яА-Я0-9]/.test(t)) {
      onSend(t);
      setVal('');
    }
  };

  const valid = val.trim().length > 1 && /[a-zA-Zа-яА-Я0-9]/.test(val.trim());

  return (
    <div className={`w-full px-8 pb-8 transition-all duration-500 ease-in-out ${mode === 'chat' ? 'translate-y-0' : '-translate-y-[calc(50vh-140px)]'}`}>
      <div className="w-full max-w-[440px] mx-auto">
        <div className="flex items-center h-[56px] bg-[#edf2f7] rounded-full px-2">
          <div className="relative flex-1 h-full flex items-center ml-4">
            {!val && <span className="absolute left-0 text-[#7a89a3] font-medium text-[16px] pointer-events-none">Спросить что угодно…</span>}
            <input 
              type="text" 
              value={val} 
              onChange={(e) => setVal(e.target.value)} 
              onKeyDown={(e) => e.key === 'Enter' && submit()}
              className="bg-transparent border-none outline-none text-[#1a1a1a] text-[16px] w-full font-medium" 
            />
          </div>
          <button 
            onClick={submit}
            disabled={!valid}
            className={`h-[42px] w-[42px] bg-[#1a1a1a] rounded-full flex items-center justify-center transition-all duration-300 ${valid ? 'opacity-100' : 'opacity-[0.65]'}`}
          >
            <img src="/Icons/send.PNG" alt="" className="w-4 h-4 brightness-0 invert" />
          </button>
        </div>
        <p className="mt-3 text-center text-[11.5px] text-[#1a1a1a] opacity-[0.6] font-medium leading-[1.1]">
          ИИ может ошибаться, не стоит принимать все<br />за чистую монету
        </p>
      </div>
    </div>
  );
}
