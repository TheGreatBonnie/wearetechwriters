import Image from "next/image";
import Head from "next/head";
import Header from "./components/Gen/header";
import Hero from "./components/Home/hero";
import Clients from "./components/Home/clients";
import Features from "./components/Home/features";
import Testimonials from "./components/Home/testimonials";
import Faqs from "./components/Home/faqs";
import Cta from "./components/Home/cta";
import Footer from "./components/Gen/footer";

export const metadata = {
  title: "The Tech Writers | Home",
};

export default function Home() {
  return (
    <main>
      <Head>
        <title>My page title</title>
      </Head>
      <Header />
      <Hero />
      <Clients />
      <Features />
      <Testimonials />
      <Faqs />
      <Cta />
      <Footer />
    </main>
  );
}
