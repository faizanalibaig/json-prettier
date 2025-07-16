import style from './styles/json-input.module.css';

export default function JsonInput({ setJson }: any) {
  return (
    <textarea
      spellCheck='false'
      className={style.json}
      onChange={(e) => setJson(e.target.value)}
    />
  );
}
