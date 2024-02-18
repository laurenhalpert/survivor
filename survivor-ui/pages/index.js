import Head from 'next/head';
import Link from "next/link";
import Image from "next/image";
import React, { useState } from 'react';
import Layout, { siteTitle, tribeName } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  const [tribe, setTribe] = useState("");

  function handleClick(e){
    setTribe(e.target.text)
  }
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.subHeading}>
        <p>18 people. 26 days. 1 survivor.</p>
      </section>
      {/* <section>
        <Link className={utilStyles.nav} href="/tribes/green" onClick={handleClick}>Green Tribe</Link>
        <Link className={utilStyles.nav} href="/tribes/purple" onClick={handleClick}>Purple Tribe</Link>
        <Link className={utilStyles.nav} href="/tribes/orange" onClick={handleClick}>Orange Tribe</Link>
      </section> */}
      <section>
        <Image
          priority
          src="/images/q_burdette_800_0.jpg"
          className={utilStyles.card}
          height={108}
          width={108}
          alt=""
        />
        <Image
          priority
          src="/images/jessica_chong_800.jpg"
          className={utilStyles.card}
          height={108}
          width={108}
          alt=""
        />
        <Image
          priority
          src="/images/charlie_davis_800.jpg"
          className={utilStyles.card}
          height={108}
          width={108}
          alt=""
        />
        <Image
          priority
          src="/images/tevin_davis_800.jpg"
          className={utilStyles.card}
          height={108}
          width={108}
          alt=""
        />
        <Image
          priority
          src="/images/tiffany_nicole_ervin_800.jpg"
          className={utilStyles.card}
          height={108}
          width={108}
          alt=""
        />
        <Image
          priority
          src="/images/moriah_gaynor_800.jpg"
          className={utilStyles.card}
          height={108}
          width={108}
          alt=""
        />
        <Image
          priority
          src="/images/maria_gonzalez_800.jpg"
          className={utilStyles.card}
          height={108}
          width={108}
          alt=""
        />
        <Image
          priority
          src="/images/bhanu_gopal_800.jpg"
          className={utilStyles.card}
          height={108}
          width={108}
          alt=""
        />
        <Image
          priority
          src="/images/ben_katzman_800.jpg"
          className={utilStyles.card}
          height={108}
          width={108}
          alt=""
        />
        <Image
          priority
          src="/images/david_jelinsky_800.jpg"
          className={utilStyles.card}
          height={108}
          width={108}
          alt=""
        />
        <Image
          priority
          src="/images/jemila_hussain-adams_800.jpg"
          className={utilStyles.card}
          height={108}
          width={108}
          alt=""
        />
        <Image
          priority
          src="/images/hunter_mcknight_800.jpg"
          className={utilStyles.card}
          height={108}
          width={108}
          alt=""
        />
        <Image
          priority
          src="/images/randen_montalvo_800.jpg"
          className={utilStyles.card}
          height={108}
          width={108}
          alt=""
        />
        <Image
          priority
          src="/images/tim_spicer_800.jpg"
          className={utilStyles.card}
          height={108}
          width={108}
          alt=""
        />
        <Image
          priority
          src="/images/soda_thompson_800.jpg"
          className={utilStyles.card}
          height={108}
          width={108}
          alt=""
        />
        <Image
          priority
          src="/images/venus_vafa_800.jpg"
          className={utilStyles.card}
          height={108}
          width={108}
          alt=""
        />
        <Image
          priority
          src="/images/kenzie_petty_800.jpg"
          className={utilStyles.card}
          height={108}
          width={108}
          alt=""
        />
        <Image
          priority
          src="/images/liz_wilcox_800.jpg"
          className={utilStyles.card}
          height={108}
          width={108}
          alt=""
        />
      </section>
    </Layout>
  );
}