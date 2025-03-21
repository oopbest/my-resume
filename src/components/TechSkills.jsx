import React from "react";
import { VscTools } from "react-icons/vsc";

const TechSkills = () => {
  return (
    <section className="mb-6">
      <h2 className="flex items-center gap-1 text-2xl font-semibold border-b-2 border-gray-300 pb-2">
        <VscTools color="blue" /> Technical Skills
      </h2>
      <ul className="flex flex-col gap-3 mt-2 text-gray-700">
        <li>
          <strong>Frontend:</strong> React, Next.js (12, 14, 15), TypeScript,
          Javascript (ES6+), Bootstrap, Tailwind CSS, Chakra UI, DaisyUI
        </li>
        <li>
          <strong>State Management:</strong> Redux, Redux Toolkit, Zustand
        </li>
        <li>
          <strong>Backend:</strong> Node.js, Express, PHP (Magento 1 & 2,
          Laravel)
        </li>
        <li>
          <strong>Databases:</strong> MySQL, MongoDB, PostgreSQL, Firebase
        </li>
        <li>
          <strong>APIs:</strong> RESTful API
        </li>
        <li>
          <strong>Version Control:</strong> Git, GitFlow
        </li>
        <li>
          <strong>Tools:</strong> VS Code, Postman
        </li>
        <li>
          <strong>CI/CD & Deployment:</strong> GitHub Actions, Docker, Vercel
        </li>
        <li>
          <strong>Authentication & Security:</strong> NextAuth.js, JWT,
          bcryptjs, OAuth
        </li>
        <li>
          <strong>AI Coding Assistant:</strong> Codeium, Github Copilot
        </li>
        <li>
          <strong>Learning:</strong> Flutter (Dart), React Native, Golang,
          NestJS
        </li>
      </ul>
    </section>
  );
};

export default TechSkills;
