import Link from 'next/link';
import { FaGithubAlt } from 'react-icons/fa';

import style from './styles/nav.module.css';

export default function Nav() {
  return (
    <nav className={style.nav}>
      <Link href='/' target='_blank'>
        <FaGithubAlt size={20} />
      </Link>
    </nav>
  );
}
