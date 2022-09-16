import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Realizations from "../components/Realizations";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Head from "next/head";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>AN-MAR Parapety</title>
      </Head>
      <Layout>
        <Hero />
        <Realizations />
        <Testimonials />
        <Contact />
      </Layout>
    </>
  );
}
