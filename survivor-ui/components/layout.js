import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import React, { useState } from 'react';

const name = 'Q Burdette';
export const siteTitle = 'Halpert Family Survivor';


export default function Layout({ children, home }) {
    const [tribe, setTribe] = useState("")
    function handleClick(e){
        setTribe(e.target.text)
    }

  return (
    <div className={styles.container}>
      <Head>
        <title>{tribe}</title>
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/survivor_logo.png"
              height={144}
              width={200}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{siteTitle}</h1>
            <section>
                <Link className={utilStyles.nav} href="/tribes/green" onClick={handleClick}>Green Tribe</Link>
                <Link className={utilStyles.nav} href="/tribes/purple" onClick={handleClick}>Purple Tribe</Link>
                <Link className={utilStyles.nav} href="/tribes/orange" onClick={handleClick}>Orange Tribe</Link>
            </section>
            {/* TODO: figure out why layout not applying to Draft Room...children problem? */}
            <Link className={utilStyles.button} href="/draft_room">Draft Room</Link>
          </>
        ) : (
          <>
            
            <Image
            priority
            src="/images/survivor_logo.png"
            height={144}
            width={200}
            alt=""
            />
            
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}