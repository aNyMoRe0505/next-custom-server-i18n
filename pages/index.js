import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Home() {
  const { locale, locales, defaultLocale } = useRouter();
  return (
    <div>
      <h1>Page Home</h1>
      <Link href="/a"><a>to a</a></Link>
      <h1>current locale: {locale}</h1>
      <h1>all locales: {locales?.join(', ')}</h1>
      <h1>defaultLocale locale: {defaultLocale}</h1>
    </div>
  )
}
