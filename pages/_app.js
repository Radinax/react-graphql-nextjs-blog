import React from "react";
import Head from "next/head";
import { Layout } from "../components";
import "tailwindcss/tailwind.css";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Adrian Beria Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Adrian Beria Blog" />
        <meta
          name="description"
          content="Adrian Beria Blog was made with the purpose to document knowledge and to help others. This is an in depth blog to help beginners and experts"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
