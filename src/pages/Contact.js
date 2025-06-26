import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMailBulk,
  FaUser,
} from "react-icons/fa";

function Contact() {
  const [firstname, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");

  const [mail, setMail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => setFirstname(event.target.value);
  const handleLastNameChange = (event) => setLastName(event.target.value);
  const handleMailChange = (event) => setMail(event.target.value);
  const handleSubjectChange = (event) => setSubject(event.target.value);
  const handleMessageChange = (event) => setMessage(event.target.value);

  const sendEmail = () => {
    emailjs
      .send(
        "service_obxbf5u",
        "template_lg5uxil",
        {
          from_name: `${firstname} ${lastName}`,
          user_name: `${firstname} ${lastName}`,
          firstName: firstname,
          lastName: lastName,
          email: mail,
          reply_to: mail,
          title: subject,
          message: message,
          to_email: "kilianberaud3@gmail.com",
        },
        "KX38VKOY08cwfAyJV"
      )
      .then(() => {
        console.log("Email envoyé !");
      })
      .catch((error) => {
        console.error("Erreur:", error);
        setError("Une erreur s'est produite lors de l'envoi de l'email.");
      });
    reset();
  };

  const reset = () => {
    setFirstname("");
    setMail("");
    setSubject("");
    setMessage("");
    setLastName("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">
        Prenons contact 💌
      </h1>

      <form className="w-full max-w-md bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl flex flex-col gap-5">
        <input
          placeholder="Prénom"
          type="text"
          name="firstname"
          value={firstname}
          onChange={handleInputChange}
          className="px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 dark:bg-gray-800 text-black dark:text-white"
        />
        <input
          placeholder="Nom"
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleLastNameChange}
          className="px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 dark:bg-gray-800 text-black dark:text-white"
        />
        <input
          placeholder="Email"
          type="text"
          name="mail"
          value={mail}
          onChange={handleMailChange}
          className="px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 dark:bg-gray-800 text-black dark:text-white"
        />
        <input
          placeholder="Sujet"
          type="text"
          name="subject"
          value={subject}
          onChange={handleSubjectChange}
          className="px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 dark:bg-gray-800 text-black dark:text-white"
        />
        <textarea
          placeholder="Message"
          name="message"
          value={message}
          onChange={handleMessageChange}
          rows={5}
          className="px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 dark:bg-gray-800 text-black dark:text-white resize-none"
        ></textarea>
        <button
          type="button"
          onClick={sendEmail}
          className="bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-300"
        >
          Envoyer ✉️
        </button>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      </form>
      <div className="mt-8 text-center">
        <h3>Vous pouvez aussi me contacter ici !</h3>
        <div>
          <a
            href="https://github.com/KilianBrd "
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="inline-block text-2xl mx-2 text-gray-600 hover:text-violet-600 transition duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/kilian-beraud-38932227b/ "
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="inline-block text-2xl mx-2 text-gray-600 hover:text-violet-600 transition duration-300" />
          </a>
          <a
            href="mailto:kilian.beraud@kilianberaud.com "
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="inline-block text-2xl mx-2 text-gray-600 hover:text-violet-600 transition duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
