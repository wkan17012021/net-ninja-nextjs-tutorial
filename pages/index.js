import Link from 'next/link'
import styles from '../../ninja-list/styles/Home.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="a test app for trialing Next.js version 13" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Inspect the h1 tag in the console. Next.js will suffix random characters to the classname so that you needn&apos;t worry about classname conflicts when assigning styles. However, for this to work, you have to use class selectors, not element or combination selectors.</p>
      <Link className={styles.btn} href="/ninjas">See Ninja Listing</Link>
    </div>
    </>
  )
}
