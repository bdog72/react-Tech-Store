//
//
import React from 'react';

import Title from '../Title';

export default function Contact() {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="contact us" />
          <form action="" className="mt-5">
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                className="form-control"
                placeholder="john smith"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="email@email.com"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                className="form-control"
                placeholder="!!-- IMPORTANT --!!"
              />
            </div>
            <div className="form">
              <textarea
                name="message"
                rows="10"
                className="form-control"
                placeholder="Hello There Bozo"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
