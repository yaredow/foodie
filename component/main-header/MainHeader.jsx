import Link from 'next/link';
import LogoImage from '@/assets/logo.png';
import classes from './MainHeader.module.css';
import Image from 'next/image';
import NavLink from './NavLink';

function MainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={LogoImage} alt="A plate with food on it" priority />
        NextLevel food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href="/meals">Browse Meals</NavLink>
          </li>
          <li>
            <NavLink href="/community">Foodies Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
