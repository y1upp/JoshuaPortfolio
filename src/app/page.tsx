"use client"; // Client-side directive

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [showVocabVoyageImage, setShowVocabVoyageImage] = useState(true); // Track which image to display
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState<string>(""); // Explicitly define the type as string

  const handleImageClick = (src: string) => { // Explicitly define 'src' as a string
    setModalImageSrc(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImageSrc("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center gap-16 p-8 sm:p-20">
      {/* Header Section */}
      <header className="text-center sm:text-left w-full">
        <h1 className="text-4xl sm:text-5xl font-semibold text-gray-800">Joshua Bentley</h1>
        <p className="text-lg text-gray-600 mt-2">Software Engineer | Developer | Creator</p>
      </header>

      {/* About Section */}
      <section className="text-center sm:text-left w-full">
        <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
          I am a final-year Software Engineering student at Teesside University, seeking a role that will challenge my skills and provide opportunities to learn from experienced peers. I have a strong foundation in Java, database management, and C# .NET, and I have expanded my expertise in my final project by working with React, Next.js, and Node.js. I am eager to apply my knowledge in a dynamic environment while continuously growing as a developer.
        </p>
      </section>

      {/* Projects Section */}
      <section className="w-full text-center sm:text-left mt-16">
        <h2 className="text-2xl font-semibold text-black">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* VocabVoyage Project */}
          <div className="border border-gray-300 p-4 rounded-lg shadow-md bg-white">
            <div className="w-full h-56 mb-4 relative">
              {/* Toggle between images */}
              <Image
                className="object-cover w-full h-full cursor-pointer"
                src={showVocabVoyageImage ? "/VV.PNG" : "/VVHome.PNG"} // Toggle images based on state
                alt="VocabVoyage"
                width={320}
                height={200}
                onClick={() => handleImageClick(showVocabVoyageImage ? "/VV.PNG" : "/VVHome.PNG")}
              />
              <button
                onClick={() => setShowVocabVoyageImage(!showVocabVoyageImage)} // Toggle image on click
                className="absolute top-2 right-2 bg-blue-600 text-white text-sm px-3 py-1 rounded-full hover:bg-blue-700"
              >
                {showVocabVoyageImage ? "Show Home Image" : "Show VV Image"}
              </button>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">VocabVoyage</h3>
            <p className="text-gray-600 mt-2">
              A language learning platform with gamified elements and interactive features.
            </p>
            <div className="mt-2 text-sm text-gray-500">
              <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full mr-2 mb-2">Next.js</span>
              <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full mr-2 mb-2">React</span>
              <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full mr-2 mb-2">Node.js</span>
              <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full mr-2 mb-2">PocketBase</span>
            </div>
          </div>

          {/* DiaryApp Project */}
          <div className="border border-gray-300 p-4 rounded-lg shadow-md bg-white">
            <div className="w-full mb-4 relative">
              <Image
                className="object-contain w-full h-48 cursor-pointer" // Adjusted height to prevent overflow
                src="/DiaryApp.PNG"
                alt="DiaryApp"
                width={320}
                height={240} // Adjusted to fit within its container
                onClick={() => handleImageClick("/DiaryApp.PNG")}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">DiaryApp</h3>
            <p className="text-gray-600 mt-2">
              A personal diary app allowing users to track their thoughts, moods, and progress over time.
            </p>
            <div className="mt-2 text-sm text-gray-500">
              <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full mr-2 mb-2">Android Studio</span>
              <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full mr-2 mb-2">Kotlin</span>
              <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full mr-2 mb-2">Agile</span>
              <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full mr-2 mb-2">GitHub</span>
            </div>
          </div>

          {/* MVC Project */}
          <div className="border border-gray-300 p-4 rounded-lg shadow-md bg-white">
            <div className="w-full h-56 mb-4 relative">
              <Image
                className="object-cover w-full h-full cursor-pointer"
                src="/Net.PNG"
                alt="MVC"
                width={320}
                height={200}
                onClick={() => handleImageClick("/Net.PNG")}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">MVC App</h3>
            <p className="text-gray-600 mt-2">
              A simple Model-View-Controller application built for practicing architecture patterns.
            </p>
            <div className="mt-2 text-sm text-gray-500">
              <span className="bg-red-200 text-red-800 px-3 py-1 rounded-full mr-2 mb-2">C#</span>
              <span className="bg-red-200 text-red-800 px-3 py-1 rounded-full mr-2 mb-2">.NET</span>
              <span className="bg-red-200 text-red-800 px-3 py-1 rounded-full mr-2 mb-2">Entity Framework</span>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full text-center sm:text-left mt-16">
        <h2 className="text-2xl font-semibold text-black">Contact Me</h2>
        <p className="text-lg text-gray-600 mt-4">
          Feel free to reach out to me for collaborations, opportunities, or just a friendly chat.
        </p>
        <div className="mt-4">
          <a
            className="text-blue-600 hover:text-blue-800"
            href="mailto:joshua.bentley@example.com" // Replace with your email
          >
            joshua.bentley@example.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full text-center mt-16 text-sm text-gray-500">
        <p>© 2025 Joshua Bentley. All Rights Reserved.</p>
      </footer>

      {/* Modal for Full Image */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative max-w-4xl max-h-[80vh] overflow-auto p-4">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-lg bg-gray-600 rounded-full p-2 hover:bg-gray-700"
            >
              X
            </button>
            <Image
              className="object-contain w-full h-auto"
              src={modalImageSrc}
              alt="Full Size Image"
              width={1200}
              height={800}
            />
          </div>
        </div>
      )}
    </div>
  );
}
