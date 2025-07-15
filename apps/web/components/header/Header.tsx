import { Nav } from '.';
import style from './styles/header.module.css';

export default function Header() {
  return (
    <header className={style.header}>
      <h1 className={style.heading}>quick - prettier</h1>
      <Nav />
    </header>
  );
}
