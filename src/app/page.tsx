'use client'

import {Name} from "./components/Name"
import styles from "./page.module.css";
import {useState, useEffect} from 'react';
import MiddleInfo from "./components/Middle";


export default function Home() {
  const [info, setInfo] = useState('');



  return (
    <main className={styles.main}>
      <div className = {styles.left}>
      <Name styles = {styles.name} setInfo = {setInfo}></Name>
      </div>
      <MiddleInfo infoClicked = {info}></MiddleInfo>
    </main>
  );
}
