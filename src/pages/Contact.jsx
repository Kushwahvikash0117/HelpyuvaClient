import React from "react";
import Container from "../components/Container";
import PageHeader from "../components/PageHeader";

export default function Contact() {
  return (
    <div className="bg-[#F0F9F8] text-[#2E5658]">
      <Container>

        <PageHeader
          title="Contact Us"
          subtitle="We would love to hear from you"
        />

        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-md p-6 sm:p-10 mb-20">

          <form className="space-y-6">

            <div>
              <label className="block text-sm font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#3D7072]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#3D7072]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Your Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message here..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm sm:text-base resize-none focus:outline-none focus:ring-2 focus:ring-[#3D7072]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#2E5658] text-white py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-[#24494B] transition-all duration-300"
            >
              Send Message
            </button>

          </form>

        </div>

      </Container>
    </div>
  );
}
