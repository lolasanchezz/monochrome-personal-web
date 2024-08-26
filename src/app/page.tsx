'use client'

import {Name} from "./components/Name"
import styles from "./page.module.css";
import {useState} from 'react';



export default function Home() {
  const [info, setInfo] = useState('');



  return (
    <main className={styles.main}>
      <Name setInfo = {setInfo}></Name>
    </main>
  );
}
