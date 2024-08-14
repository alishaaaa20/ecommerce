import React from "react";
import { H1, P } from "@/components/typography/index";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/Forms/ContactForm";

export default function Page() {
  return (
    <section className="container py-10">
      <H1>Get in Touch</H1>
      <div className="flex lg:flex-row flex-col gap-20 mt-10">
        <div className="lg:w-[600px]">
          <ContactForm />
        </div>
        <div className="flex flex-col lg:w-[600px] gap-4">
          <P className="flex flex-row items-center gap-2">
            <MapPin />
            Imadol, Gwarko
          </P>
          <P className="flex flex-row items-center gap-2">
            <Phone />
            980000000
          </P>
          <P className="flex flex-row items-center gap-2">
            <Mail />
            captivatingcurves@gmail.com
          </P>
          <div className="w-full  pb-[55.25%] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24901.44619598948!2d85.31955474085535!3d27.65564733695007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb17001465f2cf%3A0x643a9bde02c88f3d!2sSital%20Tole%2C%20B%20Block!5e0!3m2!1sen!2snp!4v1721297714202!5m2!1sen!2snp"
              className="absolute top-0 left-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
