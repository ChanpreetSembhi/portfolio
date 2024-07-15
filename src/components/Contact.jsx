import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("myzgzpwv");

  if (state.succeeded) {
    return (
      <section
        id="contact"
        className="max-w-2xl mx-auto py-16 md:py-18 lg:py-3"
      >
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-700 pb-2">Contact Me</h2>
          <p className="text-gray-600">
            Whether you have questions, ideas, or opportunities, I'm eager to
            connect. Feel free to reach out—I'm here to collaborate and discuss
            possibilities with you.
          </p>
        </div>
        <div className="text-center">
          <span className="inline-flex items-center justify-center rounded-md bg-green-50 p-2 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
            Thanks For Sending!
          </span>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="max-w-2xl mx-auto py-16 md:py-18 lg:py-3">
      <div className="max-w-xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-700 pb-2">Contact Me</h2>
        <p className="text-gray-600">
          Whether you have questions, ideas, or opportunities, I'm eager to
          connect. Feel free to reach out—I'm here to collaborate and discuss
          possibilities with you.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col space-y-1 w-full">
            <label htmlFor="name">Name<span className="text-red-500">*</span></label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your name"
              autoComplete="new-name"
              className="border border-gray-300 p-2 rounded-md" required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className="flex flex-col space-y-1 w-full">
            <label htmlFor="email">Email<span className="text-red-500">*</span></label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email "
              autoComplete="example@email.com"
              className="border border-gray-300 p-2 rounded-md" required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="message">Message<span className="text-red-500">*</span></label>
          <textarea
            name="message"
            rows={5}
            id="message"
            placeholder="Write Your Message"
            className="border border-gray-300 p-2 rounded-md" required
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <div className="pt-6 w-full">
          <button
            type="submit"
            disabled={state.submitting}
            className="bg-indigo-500 text-white hover:bg-indigo-600 font-medium rounded-md transition-all ease-in-out duration-200 p-2.5 w-full"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
