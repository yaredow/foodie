import Link from 'next/link';
import LogoImage from '@/assets/logo.png';

function Header() {
  return (
    <div>
      <Link href="/">NextLevel food</Link>
      <img src={LogoImage.src} alt="A plate with food on it" />

      <nav>
        <ul>
          <li>
            <Link href="/meals">Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodie community</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
