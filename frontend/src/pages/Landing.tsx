import React from "react";
import NavBar from "./navbar";

const LandingPage: React.FC = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div
      className={
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }
    >
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      {/* Hero Section */}
      <header
        className="flex flex-col items-center justify-center h-screen bg-cover bg-center relative"
        style={{ backgroundImage: "url('freelancing.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-90"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-extrabold text-white mb-6 animate-fadeInDown">
            Find the right freelance service, right away
          </h1>
          <p className="text-lg text-white mb-8 animate-fadeInUp">
            Connecting talented professionals with top companies worldwide.
          </p>
          <a
            href="#get-started"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition duration-300 animate-bounce"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* How It Works Section */}
      <section
        id="get-started"
        className="py-16 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10 animate-fadeIn">
            How It Works
          </h2>
          <div className="flex flex-col md:flex-row justify-around gap-8">
            <div className="md:w-1/3 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-semibold mb-4">Find Talent</h3>
              <p className="text-gray-600">
                Browse and hire top freelancers for your project needs.
              </p>
            </div>
            <div className="md:w-1/3 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-semibold mb-4">
                Hire Professionals
              </h3>
              <p className="text-gray-600">
                Review profiles and connect with professionals directly.
              </p>
            </div>
            <div className="md:w-1/3 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-semibold mb-4">Get Work Done</h3>
              <p className="text-gray-600">
                Collaborate with freelancers and get your work delivered
                efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Join the Community?
          </h2>
          <p className="text-lg mb-8">
            Sign up now and start your journey as a freelancer or hire the best
            talent today.
          </p>
          <a
            href="/signup"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 FreelanceHub. All rights reserved.</p>
          <div className="flex justify-center mt-4">
            <a
              href="#"
              className="mx-2 text-gray-400 hover:text-white transition duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="mx-2 text-gray-400 hover:text-white transition duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
