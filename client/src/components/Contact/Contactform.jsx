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
    // bg-[#B6B4B6]
    <section className="topmain">
      <div className="main w-full">
        <div className="w-full flex flex-col justify-center items-center gap-10">
          {/* for Heading */}
          <div className="w-full flex flex-col justify-center items-center gap-3">
            <h1 className="subHeading xl:text-[25px] text-shadow-pro font-extrabold tracking-widest">
              Just Fill out the form and hit submit
            </h1>
            <h2 className="text text-center">We're here to assist</h2>
          </div>

          {/* for contact details */}
          <div className="flex normal-shadow justify-center py-[30px] px-[20px] w-150 items-center gap-14 
            rounded-lg ">
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
                // className="w-full cart2 bg-[#F7F6F5] text-black font-bold px-6 py-2.5 tracking-widest whitespace-nowrap rounded-md hover:bg-[#00AEEF] transition-all duration-1500 ease-in-out"
                className="button w-full cart2"
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
