'use client';
import { useState, useEffect } from 'react';

import { Header, JsonInput } from '../components';
import Copy from '../components/copy/Copy';
import style from './page.module.css';

interface HandleJsonInput {
  (value: string): void;
}

export default function page() {
  const [json, setJson] = useState<any>('');
  const [validateJson, setValidation] = useState<boolean>(false);

  const handleJsonInput: HandleJsonInput = (value) => {
    setJson(value);
  };

  useEffect(() => {
    try {
      const parsedJson = JSON.parse(json);
      const prettify = JSON.stringify(parsedJson, null, 2);
      setJson(prettify);
      setValidation(false);
    } catch (error) {
      setValidation(true);
    }
  }, [json]);

  return (
    <div className={style.app}>
      <Header validateJson={validateJson} />
      <JsonInput json={json} setJson={handleJsonInput} />
      <Copy json={json} />
    </div>
  );
}
