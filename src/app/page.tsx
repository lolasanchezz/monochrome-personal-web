import {Name} from "./components/Name"
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Name></Name>
    </main>
  );
}
