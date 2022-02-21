import Head from "next/head";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>School News Portal</title>
        <meta name="description" content="School News Portal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar></Navbar>
        <Hero></Hero>
      </main>
    </div>
  );
}
