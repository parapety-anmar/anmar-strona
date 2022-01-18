import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Realizations from "../components/Realizations";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

export default function IndexPage() {
  return (
    <Layout>
      <Hero />
      <Realizations />
      <Testimonials />
      <Contact />
    </Layout>
  );
}
