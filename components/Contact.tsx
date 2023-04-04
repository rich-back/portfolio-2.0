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
      <h3 className="absolute top-[60px] md:top-16 uppercase tracking-[14px] md:tracking-[18px] text-gray-500 text-lg md:text-2xl">
        &nbsp;contact me
      </h3>

      <div className="flex flex-col space-y-2 md:space-y-8">
        <h4 className="text-lg md:text-2xl font-semibold text-center">
          Fill in the contact form below...
        </h4>

        <div className="space-y-2 md:space-y-6 font-light ml-4 md:ml-0">
          <div className="flex items-center space-x-5 justify-start">
            <PhoneIcon className="text-red-400 h-5 w-5 md:h-6 md:w-6 animate-pulse" />
            <p className="text-base md:text-xl">07595 394 653</p>
          </div>
          <div className="flex items-center space-x-5 justify-start">
            <MapPinIcon className="text-red-400 h-5 w-5 md:h-6 md:w-6 animate-bounce" />
            <p className="text-base md:text-xl">Edinburgh</p>
          </div>
          <div className="flex items-center space-x-5 justify-start">
            <EnvelopeIcon className="text-red-400 h-5 w-5 md:h-6 md:w-6 animate-ping-bg" />
            <p className="text-base md:text-xl">backhouse.richard@gmail.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-screen md:w-full px-1 md:px-0 pt-4"
        >
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
            className="bg-red-400 md:opacity-60 hover:opacity-90 py-2 md:py-4 rounded-md text-black/60 font-bold text-lg md:hover:text-white duration-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
