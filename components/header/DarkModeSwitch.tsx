'use client';

import { MdOutlineLightMode } from 'react-icons/md';
import { BsMoonStars } from 'react-icons/bs';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const iconStyle =
  'cursor-pointer text-white hover:text-secondary-500 transition-colors duration-300';

const DarkModeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div className='text-txt flex gap-5 text-[30px]'>
      {mounted &&
        (currentTheme === 'dark' ? (
          <MdOutlineLightMode
            className={iconStyle}
            onClick={() => setTheme('light')}
          />
        ) : (
          <BsMoonStars className={iconStyle} onClick={() => setTheme('dark')} />
        ))}
    </div>
  );
};

export default DarkModeSwitch;
