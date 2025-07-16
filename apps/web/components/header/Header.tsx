import { Nav } from '.';
import style from './styles/header.module.css';

interface HeaderProps {
  validateJson: boolean;
}

export default function Header({ validateJson }: HeaderProps) {
  return (
    <header className={style.header}>
      <div className={style.headerAndError}>
        <h1 className={style.heading}>quick - prettier</h1>
        {validateJson && <span className={style.error}>Invalid Json</span>}
      </div>
      <Nav />
    </header>
  );
}
