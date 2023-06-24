import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = React.useRef();
  const [showSuccess, setShowSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        "service_i68288c",
        "template_1nggo16",
        {
          from_name: form.name,
          to_name: "Emily Arai",
          from_email: form.email,
          to_email: "emilyqarai@gmail.com",
          message: form.message,
        },
        "PNTFYDxwTaSjAcnzZ"
      )
      .then(
        () => {
          setLoading(false);
          setForm({
            name: "",
            email: "",
            message: "",
          });
          setShowSuccess(true);
          setTimeout(() => {
            setShowSuccess(false);
          }, 6000);
        },
        () => {
          setLoading(false);
          console.error("Failed to send email.");
        }
      );
  };

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=Copley+Square,+Boston,+MA,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-gray-900 sm:max-w-{20px} relative flex justify-between py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest sm:text-xs md:text-md">
                GET IN TOUCH!
              </h2>
            </div>
            <div className="fit-content sm:px-2 sm:mt-2 md:px-6 mt-4 lg:mt-0">
              <p className="text-indigo-400 sm:text-xs leading-relaxed ml-3">
                emilyqarai@gmail.com
              </p>
            </div>
          </div>
        </div>
        {/* ---------------------------- CONTACT FORM ---------------------------- */}
        <div className="lg:w-1/3 md:w-1/2">
          <div className="mx-auto max-w-2xl text-left">
          <div>
              {showSuccess && (
                <div
                  className="p-2.5 mb-5 bg-indigo-300 items-center text-white leading-none lg:rounded flex lg:inline-flex"
                  role="alert"
                >
                  <span className="font-semibold ml-2 mr-2 text-left flex-auto mt-3">
                    Message sent successfully!
                  </span>
                </div>
              )}
            </div>
            <h2 className="text-white sm:text-4xl text-3xl mb-0 font-medium title-font">
              Contact Me!
            </h2>
          </div>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className=" flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
          >
            <p className="leading-relaxed mb-5"></p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={handleChange}
                value={form.name}
                required
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-400"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={handleChange}
                value={form.email}
                required
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-400"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                onChange={handleChange}
                value={form.message}
                required
              />
            </div>
            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              {loading ? "Sending..." : "Let's connect!"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
