import style from './styles/copy.module.css';

export default function Copy() {
  return (
    <div className={style.copy}>
      <button className={style.copyBtn}>Copy</button>
    </div>
  );
}
