import { useState } from "react";
import FormInput from "./FormInput";
import SocialLinks from "../ui/SocialLinks";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields");
      return;
    }
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 bg-[var(--color-bg)] border-b-2 border-[var(--color-accent)]"
    >
      <div className="px-6 mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-center text-[var(--color-text)] underline decoration-[var(--color-accent)] mb-6">
          Contact
        </h2>
        <p className="max-w-2xl mx-auto mb-12 text-lg text-center text-gray-200">
          Got a question, proposal, or just want to say hello? Drop me a message
          and I’ll get back to you.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-xl 
          mx-auto 
          bg-[var(--color-surface)] 
          rounded-2xl 
          border-2 
          border-[var(--color-accent)] 
          shadow-lg p-6 space-y-6"
        >
          <FormInput
            label="Name"
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />

          <FormInput
            label="Email"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />

          <FormInput
            label="Message"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            textarea
            placeholder="Write your message..."
          />

          <div className="text-center">
            <button
              type="submit"
              className="bg-[var(--color-accent)] px-4 py-2 rounded-2xl transition-transform hover:scale-105 hover:border border-gray-200"
            >
              Send Message
            </button>
          </div>
        </form>

        <SocialLinks size={50} />
      </div>
    </section>
  );
}
