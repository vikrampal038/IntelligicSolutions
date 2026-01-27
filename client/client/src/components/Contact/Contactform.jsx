import React from "react";
import { useState } from "react";
import { validateForm } from "../../utils/formValidation";
import { submitWithToast } from "../../hooks/useFormSubmit";
import NameInputField from "../../components/Form/NameinputField";
import EmailInputField from "../../components/Form/EmailInputField";
import PhoneInputField from "../../components/Form/PhoneInputField";
import TextInputField from "../../components/Form/TextInputField";
import TextareaField from "../../components/Form/TextareaField";

const Contactform = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const rules = {
    name: "name",
    email: "email",
    subject: "subject",
    message: true,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm(data, rules);

    if (!data.phone || data.phone.length < 10) {
      validationErrors.phone = "Enter valid phone number";
    }

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    await submitWithToast({
      data,
      pageKey: "contact-info",
      successMsg: "Thanks! We will contact you soon.",
      failMsg: "Submission failed. Try again.",
      resetForm: () =>
        setData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        }),
      setLoading,
    });
  };
  return (
    <section className="w-full flex flex-col justify-center items-center bg-[#FEEFE1] py-20">
      <div className="main w-full">
        <div className="w-full flex flex-col justify-center items-center gap-10">
          {/* for Heading */}
          <div className="w-full flex flex-col justify-center items-center gap-3">
            <h1 className="subHeading text-shadow-pro font-extrabold tracking-widest">
              Just Fill out the form and hit submit
            </h1>
            <h2 className="text text-center">We're here to assist</h2>
          </div>

          {/* for contact details */}
          <div className="flex cart2 cart justify-center p-[20px] w-150 items-center gap-14 outline-1 bg-[#F5D6C3]
 outline-gray-200 rounded-lg ">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center items-center gap-4 w-full"
            >
              <NameInputField
                label="Name"
                value={data.name}
                onChange={(value) => setData({ ...data, name: value })}
                error={errors?.name}
              />

              <EmailInputField
                label="Email"
                value={data.email}
                onChange={(value) => setData({ ...data, email: value })}
                error={errors?.email}
              />

              <PhoneInputField
                value={data.phone}
                onChange={(phone) => setData({ ...data, phone })}
                error={errors?.phone}
              />

              <TextInputField
                label="Subject"
                value={data.subject}
                onChange={(value) => setData({ ...data, subject: value })}
                error={errors?.subject}
              />

              <TextareaField
                label="Your Message"
                value={data.message}
                onChange={(value) => setData({ ...data, message: value })}
                error={errors?.message}
              />

              <button
                disabled={loading}
                className="w-full cart2 bg-[#00AEEF] text-white py-2 rounded-md"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactform;
