import style from './styles/json-input.module.css';

export default function JsonInput({ json, setJson }: any) {
  return (
    <textarea
      value={json}
      spellCheck='false'
      className={style.json}
      onChange={(e) => setJson(e.target.value)}
    />
  );
}
