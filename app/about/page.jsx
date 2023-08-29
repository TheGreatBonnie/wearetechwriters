import React from "react";
import Header from "../components/Gen/header";
import Intro from "../components/About/intro";
import Clients from "../components/Home/clients";
import Story from "../components/About/story";
import Team from "../components/About/team";
import Cta from "../components/Home/cta";
import Footer from "../components/Gen/footer";

export const metadata = {
  title: "The Tech Writers | About",
};

const about = () => {
  return (
    <main>
      <Header />
      <Intro />
      <Story />
      <Clients />
      <Team />
      <Cta />
      <Footer />
    </main>
  );
};

export default about;
