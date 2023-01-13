import React from "react";

const ContactForm = () => {
  return (
    <form action="">
      <div>
        <input
          type="text"
          className="form-control"
          placeholder="نام و نام خانوادگی"
        />
      </div>
      <div>
        <input type="email" className="form-control" placeholder="ایمیل" />
      </div>
      <div>
        <input type="text" className="form-control" placeholder="موضوع پیام" />
      </div>
      <div>
        <textarea
          rows="10"
          style={{ height: "100px" }}
          className="form-control"
          placeholder="متن پیام"
        ></textarea>
      </div>
      <div className="btn_box">
        <button>ارسال پیام</button>
      </div>
    </form>
  );
};

export default ContactForm;
