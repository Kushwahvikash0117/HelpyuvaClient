import React from "react";
import Container from "../components/Container";
import PageHeader from "../components/PageHeader";

const events = [
  {
    title: "Cloth Donation Drive",
    date: "12 Jan 2025",
    description:
      "Collected and distributed clothes to underprivileged families during winter.",
  },
  {
    title: "Education Awareness Camp",
    date: "25 Feb 2025",
    description:
      "Spreading awareness about free education schemes and government support.",
  },
  {
    title: "Cleanliness अभियान",
    date: "10 Mar 2025",
    description:
      "Youth-led cleanliness drive promoting hygiene and environmental responsibility.",
  },
];

export default function Events() {
  return (
    <div className="bg-[#F0F9F8] text-[#2E5658]">
      <Container>

        <PageHeader
          title="Events & Activities"
          subtitle="Our initiatives to bring real change on the ground"
        />

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 pb-20">

          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-2">
                {event.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#3D7072] mb-4">
                {event.date}
              </p>

              <p className="text-sm sm:text-base text-[#4f7f84] leading-relaxed flex-grow">
                {event.description}
              </p>

              <div className="mt-6">
                <span className="inline-block text-sm font-semibold text-[#2E5658]">
                  View Details →
                </span>
              </div>
            </div>
          ))}

        </div>

      </Container>
    </div>
  );
}
