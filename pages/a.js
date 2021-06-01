import { useRouter } from 'next/router';
import Link from 'next/link';

export default function a() {
  const { locale, locales, defaultLocale } = useRouter();
  return (
    <div>
      <h1>Page A</h1>
      <Link href="/"><a>to home</a></Link>
      <h1>current locale: {locale}</h1>
      <h1>all locales: {locales?.join(', ')}</h1>
      <h1>defaultLocale locale: {defaultLocale}</h1>
    </div>
  )
}
