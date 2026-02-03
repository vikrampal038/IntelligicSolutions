import React from "react";
import ContacForm from "../components/Contact/ContactForm";
import ContactFaq from "../components/Contact/ContactFaq";
import ContactHero from "../components/Contact/ContactHero";
import ContactSocial from "../components/Contact/ContactSocial";

const Contact = () => {
  return (
    <div>
      <section className="bg-gradient-brand-50-100-200 pb-24 pt-14">
        <ContactHero />
      </section>

      {/* Form */}
      <section className="bg-gradient-brand-200-100-50">
        <ContacForm />
      </section>

      {/* Social */}
      <section className="bg-gradient-brand-50-100-200 pt-24">
        <ContactSocial />
      </section>

      {/* FAQ */}
      <section className="bg-gradient-brand-200-100-50 py-24">
        <ContactFaq />
      </section>
    </div>
  );
};

export default Contact;