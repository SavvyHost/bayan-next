import React, { useState } from 'react';

const SwitchLanguage = () => {
  const [languageActive, setLanguageActive] = useState('ar');

  const handleLanguageChange = (language: string) => {
    setLanguageActive(language);
  };

  return (
    <div className='flex  rounded-[50px]'>
      <button
        onClick={() => handleLanguageChange('ar')}
        className={`py-[12px] px-[20px]  font-bold  rounded-s-[50px] border-solid border-[1px] border-secondary ${
          languageActive === 'ar'
            ? 'bg-secondary text-background'
            : 'bg-transparent text-secondary'
        }`}
      >
        العربية
      </button>
      <button
        onClick={() => handleLanguageChange('en')}
        className={`py-[12px] px-[20px]   font-bold border-solid border-[1px] border-secondary rounded-e-[50px] ${
          languageActive === 'en'
            ? 'bg-secondary text-background'
            : 'bg-transparent text-secondary'
        }`}
      >
        English
      </button>
    </div>
  );
};

export default SwitchLanguage;
