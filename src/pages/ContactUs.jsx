import React, { useState, useEffect } from "react";
import ContentContainer from "../components/ContentContainer";
import InputField from "../components/InputField";
import Button from "../components/Button";
import Alert from "../components/Alert";
import emailjs from "emailjs-com";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

function ContactUs() {
  const [alertMessage, setAlertMessage] = useState(null);
  const [alertType, setAlertType] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (alertMessage) {
      const timer = setTimeout(() => {
        setAlertMessage(null);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [alertMessage]);

  function sendEmail(e) {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      'service_5fjjqxm',   // service ID
      'template_poq4yrh',  // template ID
      e.target,
      'oVlgYbBowoOyaum0h'  // public KEY
    )
    .then((result) => {
        setAlertMessage("Your message has been sent successfully!");
    }, (error) => {
        setAlertMessage("Failed to send the message. Please try again later.");
        setAlertType("error");
    })
    .finally(() => {
        setIsSubmitting(false);
    });

    e.target.reset();
  }

  return (
    <ContentContainer heading="Contact Us">
      <p className="mb-6 text-gray-700">
        If you're passionate about making a difference in the environment or have ideas to share, we would love to hear from you. Whether you want to volunteer, share feedback, or collaborate on eco-friendly initiatives, reach out to us. Together, we can create a more sustainable future.
      </p>

      {alertMessage && (
        <Alert type={alertType} title={alertMessage} />
      )}

      <form
        className={`space-y-4 ${isSubmitting ? "opacity-50 pointer-events-none" : ""}`}
        onSubmit={sendEmail}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField label="First Name*" id="firstName" name="firstName" type="text" className="w-full" required />
          <InputField label="Last Name*" id="lastName" name="lastName" type="text" className="w-full" required />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField label="Email*" id="email" name="email" type="email" placeholder="e.g. name@company.com" className="w-full" required />
          <InputField label="Phone Number" id="phone" name="phone" type="tel" placeholder="If you want us to call you" className="w-full" />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Your Message*
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="We'd love to hear from you!"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>

        <Button type="submit" className="flex items-center justify-center space-x-1 w-full md:w-auto">
          <EnvelopeIcon aria-hidden="true" className="h-5 w-5" />
          <span>Send Message</span>
        </Button>
      </form>
    </ContentContainer>
  );
}

export default ContactUs;
