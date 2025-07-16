'use client';
import { useState } from 'react';
import style from './styles/copy.module.css';
import copy from 'copy-to-clipboard';

export default function Copy({ json }: any) {
  const [copied, setCopied] = useState<boolean>(false);

  const copyJson = () => {
    const isCopy = copy(json);

    if (isCopy) {
      setCopied(true);
    }
  };

  return (
    <div className={style.copy}>
      <button
        style={
          copied
            ? { backgroundColor: '#5E936C' }
            : { backgroundColor: '#dbdbdb' }
        }
        className={style.copyBtn}
        onClick={copyJson}
      >
        Copy
      </button>
    </div>
  );
}
