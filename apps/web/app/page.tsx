'use client';
import { useState } from 'react';

import { Header, JsonInput } from '../components';
import Copy from '../components/copy/Copy';
import style from './page.module.css';

interface HandleJsonInput {
  (value: string): void;
}

export default function page() {
  const [json, setJson] = useState<any>(null);

  const handleJsonInput: HandleJsonInput = (value) => {
    setJson(value);
  };

  return (
    <div className={style.app}>
      <Header />
      <JsonInput setJson={handleJsonInput} />
      <Copy json={json} />
    </div>
  );
}
