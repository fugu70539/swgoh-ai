'use client';

import { useState, useEffect } from 'react';
import WelcomeMobile from '@/views/mobile/Welcome';

export default function Home() {
  const [m, setM] = useState(false);

  useEffect(() => {
    setM(/Mobi|Android/i.test(navigator.userAgent));
  }, []);

  if (!m) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 text-gray-400 font-sans">
        Desktop version coming soon...
      </div>
    );
  }

  return <WelcomeMobile />;
}
