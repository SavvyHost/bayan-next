
import { useTranslations } from "next-intl";

export default function BookMarkNew(term?: any) {
  const t = useTranslations();
  return (
    <div className='relative'>
    <svg xmlns='http://www.w3.org/2000/svg' width={45} height={56}>
    <path
      fill='#169F34'
      d='M4.214 56c1.737 0 2.862-.714 5.597-2.832l12.416-9.746c.128-.127.418-.127.546 0l12.449 9.746C37.956 55.286 39.049 56 40.818 56 43.392 56 45 54.597 45 52.3V7.757C45 2.679 41.655 0 35.318 0H9.682C3.345 0 0 2.679 0 7.756V52.3C0 54.597 1.608 56 4.214 56Z'
    />
    </svg>
    <span className='absolute top-[10px] text-white left-2'>
    {t("New")}
    
    </span>
  </div>
  )
}
