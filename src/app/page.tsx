'use client'

import {Name} from "./components/Name"
import styles from "./page.module.css";
import {useState, useEffect} from 'react';
import MiddleInfo from "./components/Middle";


export default function Home() {
  const [info, setInfo] = useState('');



  return (
    <main className={styles.main}>
      <Name setInfo = {setInfo}></Name>
      <MiddleInfo></MiddleInfo>
    </main>
  );
}
