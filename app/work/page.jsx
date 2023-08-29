import React from "react";
import Header from "../components/Gen/header";
import Workpage from "../components/Work/workpage";
import Footer from "../components/Gen/footer";

export const metadata = {
  title: "The Tech Writers | Work",
};

const work = () => {
  return (
    <main>
      <Header />
      <Workpage />
      <Footer />
    </main>
  );
};

export default work;
