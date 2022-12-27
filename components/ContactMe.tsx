import { motion } from "framer-motion";
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";
import { IPageInfo } from "../typings";

type Props = {
  contactInfo: IPageInfo;
};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = ({ contactInfo }: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:antiolamarkoluther@gmail.com?subject=${formData.subject}&body=Hi, I'm ${formData.name}. ${formData.message}`;
  };

  return (
    <div className="sectionHeaderContainer">
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        className="sectionTitle"
      >
        Contact
      </motion.div>
      <div className="space-y-5">
        <div className="flex items-center space-x-5 justify-center">
          <FaPhoneAlt className="text-yellow-400 h-6 w-6 " />
          <div className="text-sm">{contactInfo.phoneNumber}</div>
        </div>
        <div className="flex items-center space-x-5 justify-center">
          <FaEnvelope className="text-yellow-400 h-6 w-6 " />
          <div className="text-sm">{contactInfo.email}</div>
        </div>
        <div className="flex items-center space-x-5 justify-center">
          <FaMapMarkerAlt className="text-yellow-400 h-6 w-6 " />
          <div className="text-sm">{contactInfo.address}</div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4 w-fit mx-auto mt-5"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-yellow-300 py-5 px-10 rounded-md font-bold text-md text-gray-800 hover:bg-yellow-400 hover:text-gray-900 transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
