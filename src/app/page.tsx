"use client"; // Client-side directive

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [showVocabVoyageImage, setShowVocabVoyageImage] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % 3);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + 3) % 3);
  };

  const handleImageClick = (src: string) => {
    setModalImageSrc(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImageSrc("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 flex flex-col items-center gap-16 p-8 sm:p-20">
      {/* Header Section */}
      <motion.header
        className="text-center sm:text-left w-full flex flex-col items-center sm:flex-row"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Profile Image */}
        <div className="w-32 h-32 sm:w-40 sm:h-40 mb-4 sm:mb-0">
          <Image
            src="/JoshPic.jpg"
            alt="Joshua Bentley"
            width={150}
            height={150}
            className="rounded-full shadow-lg"
          />
        </div>
        {/* Name and Title */}
        <div className="text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-semibold text-gray-800">Joshua Bentley</h1>
          <p className="text-lg text-gray-600 mt-2">Graduate Software Engineer | Developer</p>
        </div>
      </motion.header>

      {/* Projects Section */}
      <section className="w-full text-center sm:text-left mt-16">
        <h2 className="text-2xl font-semibold text-gray-900">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* VocabVoyage Project */}
          <motion.div
            className="border border-gray-300 p-4 rounded-lg shadow-md bg-white transition-all duration-300 hover:shadow-lg"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative w-full h-56 mb-4 overflow-hidden rounded-lg">
              <motion.img
                className="w-full h-full object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
                src={showVocabVoyageImage ? "/VVHome.PNG" : "/VV.PNG"}
                alt="VocabVoyage"
                onClick={() => handleImageClick(showVocabVoyageImage ? "/VVHome.PNG" : "/VV.PNG")}
              />
              <button
                onClick={() => setShowVocabVoyageImage(!showVocabVoyageImage)}
                className="absolute top-2 right-2 bg-blue-600 text-white text-sm px-3 py-1 rounded-full hover:bg-blue-700 transition-all"
              >
                {showVocabVoyageImage ? "Show Content" : "Show Home"}
              </button>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">VocabVoyage</h3>
            <p className="text-gray-600 mt-2">
              VocabVoyage is an interactive language learning platform designed to make studying more engaging and effective. Combining gamification with personalised learning, users progress through lessons, complete challenges, and level up to unlock new content. Built using Next.js, React, and Node.js, with PocketBase for user management, the platform allows users to build their own word banks and track their progress in real-time. VocabVoyage is crafted to support multiple languages and provide an immersive, fun, and educational experience.
            </p>
            <div className="mt-2 text-sm text-gray-500 flex flex-wrap gap-2">
              {["Next.js", "React", "Node.js", "PocketBase"].map((tech) => (
                <span key={tech} className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* DiaryApp Project */}
          <motion.div
            className="border border-gray-300 p-4 rounded-lg shadow-md bg-white transition-all duration-300 hover:shadow-lg"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative w-full h-56 mb-4 overflow-hidden rounded-lg">
              <motion.img
                className="w-full h-full object-contain cursor-pointer transition-transform duration-300 hover:scale-105"
                src="/DiaryApp.PNG"
                alt="DiaryApp"
                onClick={() => handleImageClick("/DiaryApp.PNG")}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">DiaryApp</h3>
            <p className="text-gray-600 mt-2">
              A personal diary app developed in Android Studio using Kotlin. It allows users to track their thoughts, moods, and progress over time. Created as part of a 6-person team in an Agile environment, following a Scrum development cycle to ensure efficient collaboration and delivery.
            </p>
            <div className="mt-2 text-sm text-gray-500 flex flex-wrap gap-2">
              {["Android Studio", "Kotlin", "Agile", "GitHub"].map((tech) => (
                <span key={tech} className="bg-green-200 text-green-800 px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* MVC Project */}
          <motion.div
            className="border border-gray-300 p-4 rounded-lg shadow-md bg-white transition-all duration-300 hover:shadow-lg"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative w-full h-56 mb-4 overflow-hidden rounded-lg">
              <motion.img
                className="w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                src="/Net.PNG"
                alt="MVC"
                onClick={() => handleImageClick("/Net.PNG")}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">MVC App</h3>
            <p className="text-gray-600 mt-2">
              My first dive into DevOps practices involved creating and managing Azure resources to host and deploy a web app. Leveraging Azures cloud services, I set up an SQL database, integrated continuous integration and deployment pipelines, and ensured seamless hosting for the application. The web app, now live, can be accessed through the following link: <a href="https://threeamigowebapp-d9akb5fehhhqeuhe.uksouth-01.azurewebsites.net/Home/Index" className="text-blue-600 hover:text-blue-800">ThAmCo Product</a>. This project provided valuable hands-on experience with DevOps workflows and cloud resource management.
            </p>
            <div className="mt-2 text-sm text-gray-500 flex flex-wrap gap-2">
              {["C#", ".NET", "Entity Framework"].map((tech) => (
                <span key={tech} className="bg-red-200 text-red-800 px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full text-center sm:text-left mt-16">
        <h2 className="text-2xl font-semibold text-gray-900">Contact Me</h2>
        <p className="text-lg text-gray-600 mt-4">
          Feel free to reach out to me for opportunities, or just a friendly chat.
        </p>
        <div className="mt-4">
          <a
            className="text-blue-600 hover:text-blue-800"
            href="mailto:joshua.bentley53@gmail.com"
          >
            joshua.bentley53@gmail.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full text-center mt-16 text-sm text-gray-500">
        <p>Joshua Bentley.</p>
      </footer>

      {/* Modal for Full Image */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-4xl max-h-[80vh] overflow-auto p-4 bg-white rounded-lg"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-600 text-lg bg-gray-200 rounded-full p-2 hover:bg-gray-300"
              >
                ✕
              </button>
              <Image
                src={modalImageSrc}
                alt="Full Size Image"
                width={1200}
                height={800}
                className="object-contain w-full h-auto"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}