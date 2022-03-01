import Head from "next/head";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HomeContent from "../components/HomeContent";
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
        <HomeContent></HomeContent>
        <CTA></CTA>
        <Footer></Footer>
      </main>
    </div>
  );
}
