import React from "react";
import Container from "../components/Container";
import PageHeader from "../components/PageHeader";

const faqs = [
  {
    q: "What is Helpyuva?",
    a: "Helpyuva is a youth-driven NGO working towards social upliftment through education, awareness, and community engagement.",
  },
  {
    q: "How can I volunteer?",
    a: "You can join us by visiting the Join Us page and filling out the volunteer form. Our team will contact you shortly.",
  },
  {
    q: "Is my donation secure?",
    a: "Yes. All donations are handled with complete transparency and are used strictly for our social initiatives.",
  },
  {
    q: "Where does Helpyuva operate?",
    a: "We currently operate in multiple cities and are continuously expanding our reach through dedicated volunteers.",
  },
];

export default function FAQ() {
  return (
    <div className="bg-[#F0F9F8] text-[#2E5658]">
      <Container>

        <PageHeader
          title="Frequently Asked Questions"
          subtitle="Answers to common questions"
        />

        <div className="max-w-3xl mx-auto space-y-5 pb-20">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-7 shadow-md hover:shadow-lg transition-all"
            >
              <h4 className="text-base sm:text-lg font-semibold mb-2">
                {faq.q}
              </h4>

              <p className="text-sm sm:text-base text-[#4f7f84] leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}

        </div>

      </Container>
    </div>
  );
}
