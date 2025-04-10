import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLICKEY;

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Imran",
      message: message,
    };

    if (name && email && message) {
      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then(() => {
          toast.success("Email sent Successfully");
          setName("");
          setEmail("");
          setMessage("");
        })
        .catch((error) => {
          console.error("Email send error: ", error);
          toast.error("Error sending email");
        });
    } else {
      toast.error("Please fill all fields");
    }
  };

  return (
    <div
      name="contact"
      className="w-full min-h-screen flex justify-center items-center px-4 py-16 bg-[#0a192f] text-gray-300"
    >
      <ToastContainer position="bottom-right" />
      <form
        onSubmit={handleSubmit}
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8 md:mt-40">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Contact
          </p>
          <p className="text-lg mt-4 text-gray-400">Submit the form below or shoot me an email - I'm always open to discussing new projects, creative ideas or opportunities!</p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 rounded"
          type="text"
          placeholder="Your Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] rounded"
          type="email"
          placeholder="Your Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className="bg-[#ccd6f6] p-2 rounded"
          name="message"
          rows="8"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="text-white border-2 px-6 py-3 my-8 mx-auto rounded-md hover:bg-pink-600 hover:border-pink-600 transition-all duration-300"
        >
          Let’s Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
