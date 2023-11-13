import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Meu cabeçalho</h1>
        <ul>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
        </ul>
      </div>
    </main>
  );
}
