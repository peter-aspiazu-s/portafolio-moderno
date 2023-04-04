import { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";

const Portfolio = dynamic(() => import("../components/portfolio/Portfolio"), {ssr: false});

const HomePage: NextPage = () => {

  return (
    <>
      <Head>
        <title>Peter Aspiazu</title>
        <meta name="description" content="Mi portafolio web, soy desarrollador front-end, me dedico a crear interfaces de usuario" />
        <meta name="keywords" content="desarrollador front-end, desarrollador web, Peter Aspiazu" />
        <link rel="shortcut icon" href="/image/foto-perfil.jpg" />
      </Head>
      <div>
        <Portfolio />
      </div>
    </>
  )
}

export default HomePage;
