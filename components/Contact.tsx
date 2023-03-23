import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:backhouse.richard@gmail.com?subject=${formData.subject}&body=${formData.message}. Sent via Portfolio Contact form by ${formData.name}.`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
        &nbsp;Contact Me
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-3xl font-semibold text-center">
          Fill in the contact form below...
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-red-400 h-7 w-7 animate-pulse" />
            <p className="text-2xl">07595 394 653</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-red-400 h-7 w-7 animate-bounce" />
            <p className="text-2xl">Edinburgh</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-red-400 h-7 w-7 animate-ping-bg" />
            <p className="text-2xl">backhouse.richard@gmail.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              className="contactInput"
              type="text"
              placeholder="Name"
            />
            <input
              {...register("email")}
              className="contactInput"
              type="email"
              placeholder="Email"
            />
          </div>

          <input
            {...register("subject")}
            className="contactInput"
            type="text"
            placeholder="Subject"
          />

          <textarea
            {...register("message")}
            className="contactInput"
            placeholder="Your message here..."
          />
          <button
            type="submit"
            className="bg-red-400 py-5 px-10 rounded-md text-black/60 font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
 