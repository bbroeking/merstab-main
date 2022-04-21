import type { NextPage } from 'next'
import Head from 'next/head'
import styles from './index.module.css';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Merstab</title>
        <meta name="description" content="Merstab: Stablizing Markets" />
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap" rel="stylesheet"></link>
        </Head>
        <link rel="icon" href="/merstab.ico" />
      </Head>

      <main>
        <div>Launching Soon. Stay tuned!</div>
        <div className={styles.smallerText}>Meanwhile, visit our<span><a className={styles.spacing} href='https://blog.merstab.com'> blog</a></span></div>
      </main>
    </div>
  )
}

export default Home
