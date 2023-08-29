import React from "react";
import Header from "../components/Gen/header";
import Service from "../components/Services/service";
import Clients from "../components/Home/clients";
import Testimonials from "../components/Home/testimonials";
import Footer from "../components/Gen/footer";

export const metadata = {
  title: "The Tech Writers | Services",
};

const services = () => {
  return (
    <main>
      <Header />
      <Service />
      <Clients />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default services;
