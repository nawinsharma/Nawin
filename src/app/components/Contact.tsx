"use client";

import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ScaleLoader } from "react-spinners";
import emailjs from "@emailjs/browser";
import { MailPlus, Nfc } from "lucide-react";

import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import LinktreeIcon from "../../../public/linktree-logo-icon.svg";
import TwitterIcon from "../../../public/twitter.svg";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        form.current!,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      );
      toast.success("msg sent");
      setMessage("");
      form.current!.reset();
    } catch (error) {
      setLoading(false);
      toast.error("error");
      console.error("An error occurred:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMessage(event.target.value);
  };
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-8 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <div className="text-4xl mb-5 font-bold text-white my-2">
          Let&apos;s Connect
        </div>
        <p className="text-[#ADB7BE] mb-8 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <a
          href="mailto:msg.nawin@gmail.com?body=Hello"
          target="_blank"
          className="flex items-center gap-2 text-[#ADB7BE] mb-8 hover:text-white text-xl font-medium"
        >
          <MailPlus />
          msg.nawin@gmail
        </a>
        <div className="socials flex flex-row gap-5">
          <Link href="https://github.com/nawinsharma" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/nawin-sharma-83009825a"
            target="_blank"
          >
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="https://linktr.ee/Nawinsharma" target="_blank">
            <Image height={30} width={30} src={LinktreeIcon} alt="Linktree" />
          </Link>
          <Link href="https://twitter.com/NawinScript" target="_blank">
            <Image
              height={50}
              width={50}
              src={TwitterIcon}
              alt="Twitter Icon"
            />
          </Link>
        </div>
      </div>
      <div>
        <form
          className="flex flex-col"
          autoComplete="off"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="nawin@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              placeholder="Enter Your Message"
              className=" h-64 bg-[#18191E]  border-[#33353F] placeholder-[#9CA2A9] text-gray-100 p-4 rounded-lg w-full flex-auto  border-2"
              required
              autoComplete="false"
              name="message"
              value={message}
              onChange={handleMessageChange}
            ></textarea>
            {loading ? (
              <button className="flex justify-center items-center gap-3 boxshadowbtn bg-slate-900 hover:bg-slate-800 text-white font-medium py-2.5 px-5 rounded-lg w-full mt-5 disabled">
                <ScaleLoader color="#808080" className=" scale-50" />{" "}
                Processing.....
              </button>
            ) : (
              <button className="flex justify-center items-center gap-3 boxshadowbtn bg-slate-900 hover:bg-slate-800 text-white font-medium py-2.5 px-5 rounded-lg w-full mt-5">
                <Nfc />
                Contact
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
