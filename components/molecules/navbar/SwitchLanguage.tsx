import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useTransition, useEffect } from 'react';

const SwitchLanguage = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localeActive = useLocale();
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.dir = localeActive === 'en' ? 'ltr' : 'rtl';
  }, [localeActive]);

  const switchLocale = (nextLocale: string) => {
    startTransition(() => {
      const currentPath = pathname;
      const newPath = currentPath.replace(`/${localeActive}`, `/${nextLocale}`);
      const searchParams = new URLSearchParams(window.location.search);
      const newPathWithQuery = `${newPath}${
        searchParams.toString() ? `?${searchParams.toString()}` : ''
      }`;

      router.push(newPathWithQuery);
    });
  };

  return (
    <div className='flex rounded-[50px]'>
      <button
        onClick={() => switchLocale(localeActive === 'en' ? 'ar' : 'en')}
        className={`py-[12px] px-[20px] font-bold rounded-s-[50px] border-solid border-[1px] border-secondary ${
          localeActive === 'ar'
            ? 'bg-secondary text-background'
            : 'bg-transparent text-secondary'
        }`}
      >
        العربية
      </button>
      <button
        onClick={() => switchLocale(localeActive === 'en' ? 'ar' : 'en')}
        className={`py-[12px] px-[20px] font-bold border-solid border-[1px] border-secondary rounded-e-[50px] ${
          localeActive === 'en'
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
