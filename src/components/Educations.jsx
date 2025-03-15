import React from "react";
import { FaUniversity } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";

const Educations = () => {
  return (
    <div>
      <div className="mt-4">
        <h2 className="flex gap-2 items-center text-2xl font-semibold pb-2">
          <IoIosContact /> Contact
        </h2>
        <p>Email: setthawut.p@yahoo.com</p>
        <div className="flex flex-row gap-2">
          <a
            href="https://www.linkedin.com/in/setthawut-pimthong"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Linkedin
          </a>
          <a
            href="https://github.com/oopbest"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Educations;
