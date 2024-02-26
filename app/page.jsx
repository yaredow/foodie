import Link from 'next/link';

import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started
      </h1>
      <p>
        <Link href="/meals">Meals</Link>
      </p>
      <p>
        <Link href="/community">Community</Link>
      </p>
      <p>
        <Link href="/meals/share">Share</Link>
      </p>
    </main>
  );
}
