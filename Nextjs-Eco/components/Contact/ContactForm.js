import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { handleError } from "../../lib/helper";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ((name === "", email === "", subject === "", text === "")) {
      toast.error("تمام موارد فرم تماس با ما الزامی است");
      return;
    }
    try {
      setLoading(true);
      const res = await axios.post("/contact-us", {
        name,
        email,
        subject,
        text,
      });
      toast.success("پیام شما ارسال شد");
    } catch (err) {
      setLoading(false);
      toast.error(handleError(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          className="form-control"
          placeholder="نام و نام خانوادگی"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div>
        <input
          type="email"
          className="form-control"
          placeholder="ایمیل"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div>
        <input
          type="text"
          className="form-control"
          placeholder="موضوع پیام"
          onChange={(e) => setSubject(e.target.value)}
          value={subject}
        />
      </div>
      <div>
        <textarea
          rows="10"
          style={{ height: "100px" }}
          className="form-control"
          placeholder="متن پیام"
          onChange={(e) => setText(e.target.value)}
          value={text}
        ></textarea>
      </div>
      <div className="btn_box">
        <button type="submit" disabled={loading}>
            ارسال پیام
            {loading && <div className="spinner-border spinner-border-sm ms-2"></div>}
            </button>
      </div>
    </form>
  );
};

export default ContactForm;
