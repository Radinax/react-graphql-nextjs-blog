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
          property="og:image"
          content="https://radinax.github.io/React-Personal-Blog-Gatsby/static/profile-pic-2c48d836a8e96aab21870fc707b385d4.jpg"
        />
        <meta
          name="description"
          content="A blog made by Adrian Beria to write articles related to Web Development and React JS"
        />
        <meta
          name="keywords"
          content="HTML, React, GraphQL, Blog, Programming, Fullstack, Testing, Tailwind, Redux, Adrian, Beria, Javascript, Node, PostgreSQL, TypeScript, Sequelize"
        />
        <meta name="author" content="Adrian Beria" />
        <link
          rel="canonical"
          href="https://react-graphql-nextjs-blog.vercel.app/"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
