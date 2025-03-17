import React from "react";
import { Pin } from "lucide-react";

const PersonalProject = () => {
  return (
    <div>
      <h2 className="flex gap-2 items-center text-2xl font-semibold border-b-2 border-gray-300 pb-2">
        <Pin color="red" /> Personal Projects
      </h2>
      <h2 className="font-bold py-4 text-xl">5 Jan 2025 - Present</h2>
      <h3 className="font-bold">Full-Stack Real-Time Chat App (MERN Stack):</h3>
      <ul className="list-disc ml-6 my-3">
        <li>
          Tech Stacks: React, Tailwind CSS, Daisy UI, Node.js, Express, MongoDB,
          Mongoose, Zustand, Cloudinary
        </li>
        <li>
          Features: Real-time messaging, image uploads, authentication, cloud
          hosting on Render.com
        </li>
      </ul>
      <h3 className="font-bold">
        Product Store CRUD & Deployment (MERN Stack)
      </h3>
      <ul className="list-disc ml-6 my-3">
        <li>
          Tech Stacks: React, Chakra UI, Zustand, Node.js, MongoDB, Mongoose
        </li>
        <li>
          Features: Full CRUD functionality, image uploads, cloud hosting on
          Render.com{" "}
        </li>
      </ul>
      <h3 className="font-bold">Full-Stack Blog System</h3>
      <ul className="list-disc ml-6 my-3">
        <li>
          Tech Stacks: React, Tailwind CSS, Node.js, PostgreSQL, Sequelize
        </li>
        <li>Features: Full CRUD functionality</li>
      </ul>
      <h3 className="font-bold">React Native & Flutter Projects</h3>
      <ul className="list-disc ml-6 my-3">
        <li>Developed a simple page using React Native.</li>
        <li>Created a basic form with stateful widgets in Flutter.</li>
      </ul>
    </div>
  );
};

export default PersonalProject;
