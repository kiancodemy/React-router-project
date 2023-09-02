import { Form } from "react-router-dom";
export default function Contact() {
  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <Form method="post" action="">
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>
      </Form>
    </div>
  );
}
