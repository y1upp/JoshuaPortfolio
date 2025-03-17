import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center gap-16 p-8 sm:p-20">
      {/* Header Section */}
      <header className="text-center sm:text-left w-full">
        <h1 className="text-3xl sm:text-4xl font-semibold">Joshua Bentley</h1>
        <p className="text-lg text-gray-600 mt-2">Software Engineer | Developer | Creator</p>
      </header>

      {/* About Section */}
      <section className="text-center sm:text-left w-full">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="text-lg text-gray-600 mt-4">
          I am a passionate software engineer with a love for creating impactful web applications. My goal is to
          continuously improve my skills and contribute to meaningful projects.
        </p>
      </section>

      {/* Image Section */}
      <section className="w-full flex justify-center sm:justify-start mt-8">
        <div className="w-48 h-48 rounded-full overflow-hidden">
          {/* Placeholder for your image */}
          <Image
            className="object-cover"
            src="/profile-picture.jpg" // Replace with your actual image path
            alt="Joshua Bentley"
            width={192}
            height={192}
          />
        </div>
      </section>

      {/* Projects Section */}
      <section className="w-full text-center sm:text-left mt-16">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* Example Project 1 */}
          <div className="border border-gray-300 p-4 rounded-lg shadow-md">
            <div className="w-full h-40 bg-gray-300 mb-4">
              {/* Placeholder for project image */}
            </div>
            <h3 className="text-xl font-semibold">Project Title</h3>
            <p className="text-gray-600 mt-2">
              A brief description of the project. Highlight the features and technologies used.
            </p>
          </div>
          {/* Example Project 2 */}
          <div className="border border-gray-300 p-4 rounded-lg shadow-md">
            <div className="w-full h-40 bg-gray-300 mb-4">
              {/* Placeholder for project image */}
            </div>
            <h3 className="text-xl font-semibold">Project Title</h3>
            <p className="text-gray-600 mt-2">
              A brief description of the project. Highlight the features and technologies used.
            </p>
          </div>
          {/* Example Project 3 */}
          <div className="border border-gray-300 p-4 rounded-lg shadow-md">
            <div className="w-full h-40 bg-gray-300 mb-4">
              {/* Placeholder for project image */}
            </div>
            <h3 className="text-xl font-semibold">Project Title</h3>
            <p className="text-gray-600 mt-2">
              A brief description of the project. Highlight the features and technologies used.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full text-center sm:text-left mt-16">
        <h2 className="text-2xl font-semibold">Contact Me</h2>
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
    </div>
  );
}
