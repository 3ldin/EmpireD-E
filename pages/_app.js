// pages/_app.js
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" type='image/png' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Empire D&E Inc.</title>
        <meta name="description" content="Renovations" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
