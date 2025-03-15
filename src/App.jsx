import { motion } from "framer-motion";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";

export default function Resume() {
  return (
    <div className="max-w-4xl mx-auto bg-gray-100 font-sans p-6 flex flex-col">
      {/* Header Section */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-gray-800">Setthawut Pimthong</h1>
        <p className="text-lg text-gray-600">
          Web Developer | Frontend Developer | Fullstack Developer
        </p>
      </motion.header>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8"
      >
        <p className="text-gray-700">
          A highly skilled Full-Stack Developer with 11+ years of experience in
          developing and optimizing web applications. Proficient in both
          Front-end and Back-end technologies, with a focus on delivering
          user-centric and efficient solutions. Adept at collaborating with
          cross-functional teams to meet project goals and deadlines. Passionate
          about clean code, accessibility, and modern web technologies.
        </p>
      </motion.section>

      {/* Tech stack Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mb-8"
      >
        <TechStack />
      </motion.section>

      {/* Experience Section */}
      <motion.section
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-8"
      >
        <Experience />
      </motion.section>

      {/* Contact Section */}
      {/* <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="max-w-2xl mb-8"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Contact</h2>
        <p className="text-gray-700">Email: johndoe@example.com</p>
      </motion.section> */}

      {/* Download Button */}
      {/* <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all">
          Download Resume
        </button>
      </motion.div> */}
    </div>
  );
}
