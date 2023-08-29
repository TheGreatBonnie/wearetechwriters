import React from "react";
import Header from "../components/Gen/header";
import ContactForm from "../components/ContactUs/contactForm";
import Footer from "../components/Gen/footer";

export const metadata = {
  title: "The Tech Writers | Contact",
};

export default function Contact() {
  return (
    <main>
      <Header />
      <ContactForm />
      <Footer />
    </main>
  );
}
