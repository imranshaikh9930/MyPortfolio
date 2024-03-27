import React, { useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = (e) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_0zzfsrr";
    const templateId = "template_p3o4mfb";
    const publicKey = "QOVitb417-Glmlnmp";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Imran",
      message: message,
    };
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((res) => {
        console.log("Email sent Successfully", res);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((e) => {
        console.error("Error sending email, please try again later.", e);
      });
  };
  return (
    <div
      name="contact"
      className="w-full h-auto bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col max-w-[600px] w-full h-100"
      >
        <div className="pb-8 mt-[2rem]">
          <p className="text-2xl font-bold inline border-b-4 border-pink-600 text-gray-300 sm:text-4xl">
            Contact
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
