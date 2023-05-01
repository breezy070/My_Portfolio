import { useState } from "react";
import "./contact.scss";
import { toast } from "react-toastify";

export default function Contact({ mode }) {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    toast.success("Message Sent ! I'll reply ASAP");
  };
  return (
    <div
      className={"contact" + (mode === true ? " lightMode" : " darkMode")}
      id="contact"
    >
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email (no email will be sent this is just a test)"
          />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
