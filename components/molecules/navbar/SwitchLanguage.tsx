'use client';

import { useLocale } from 'next-intl';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';

const SwitchLanguage = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const pathname = usePathname();

  const switchLocale = (nextLocale: any) => {
    startTransition(() => {
      const currentPath = pathname;
      const newPath = currentPath.replace(`/${localActive}`, `/${nextLocale}`);
      // Get current query parameters
      const searchParams = new URLSearchParams(window.location.search);

      // Rebuild pathname with query parameters
      const newPathWithQuery = `${newPath}${
        searchParams.toString() ? `?${searchParams.toString()}` : ''
      }`;

      router.push(newPathWithQuery);
    });
  };

  return (
    <div className='flex  rounded-[50px]'>
      <button
        onClick={() => switchLocale(localActive === 'en' ? 'ar' : 'en')}
        className={`py-[12px] px-[20px]  font-bold  rounded-s-[50px] border-solid border-[1px] border-secondary ${
          localActive === 'ar'
            ? 'bg-secondary text-background'
            : 'bg-transparent text-secondary'
        }`}
      >
        العربية
      </button>
      <button
        onClick={() => switchLocale(localActive === 'en' ? 'ar' : 'en')}
        className={`py-[12px] px-[20px]   font-bold border-solid border-[1px] border-secondary rounded-e-[50px] ${
          localActive === 'en'
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
