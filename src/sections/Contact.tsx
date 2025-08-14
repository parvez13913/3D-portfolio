"use client";

import emailjs from "@emailjs/browser";
import Image from "next/image";
import { ChangeEvent, FormEvent, useRef, useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      emailjs.send(
        "service_hkm6pfl",
        "template_9llrmwd",
        {
          from_name: form.name,
          to_name: "Parvez Rahman",
          from_email: form.email,
          to_email: "parvezz13913@gmail.com",
          message: form.message,
        },
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      );

      setLoading(false);

      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert("I didn't receive your message 😢");
    }
  };

  return (
    <section className="sm:px-10 px-5 my-20" id="#contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal"
          className="absolute inset-0 min-h-screen"
        />

        <div className="max-w-xl relative z-10 sm:px-10 px-5 mt-24">
          <h3 className="sm:text-4xl text-3xl font-semibold text-gray_gradient font-serif">
            Let&apos;s talk
          </h3>
          <p className="text-lg text-white-600 mt-3 font-serif">
            Whether you’re looking to build a new website, improve your existing
            platform, or bring a unique project to life, I’m here to help.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-5 font-serif"
          >
            <label className="space-y-2">
              <span className="text-lg text-white-600">Full Name</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full bg-black px-5 py-2 min-h-14 rounded-lg placeholder:text-white-500 text-lg text-white-800 shadow-black-200 shadow-2xl focus:outline-none"
              placeholder="Parvez Rahman"
            />

            <label className="space-y-2">
              <span className="text-lg text-white-600">Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full bg-black px-5 py-2 min-h-14 rounded-lg placeholder:text-white-500 text-lg text-white-800 shadow-black-200 shadow-2xl focus:outline-none"
              placeholder="parvezz@gmail.com"
            />

            <label className="space-y-2">
              <span className="text-lg text-white-600">Your message</span>
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full bg-black px-5 py-2 min-h-14 rounded-lg placeholder:text-white-500 text-lg text-white-800 shadow-black-200 shadow-2xl focus:outline-none"
              placeholder="Hi, wanna give you a job...."
            />

            <button
              className="bg-black px-5 py-2 min-h-12 rounded-lg shadow-black-200 shadow-2xl flex justify-center items-center text-lg text-white gap-3 cursor-pointer"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending.." : "Send Message"}
              <Image
                src="/assets/arrow-up.png"
                alt="arrow-up"
                height={5}
                width={5}
                className="w-2.5 h-2.5 object-contain invert brightness-0"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
