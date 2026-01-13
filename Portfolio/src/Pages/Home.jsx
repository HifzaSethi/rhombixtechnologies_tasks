import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <p className="text-blue-400 text-base sm:text-lg mb-2">
            Welcome to my portfolio
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Hi, I'm <span className="text-blue-500">Hifza Sethi</span>
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6">
            Full Stack Developer | React.js | Tailwind CSS
          </h2>

          <p className="text-gray-400 text-sm sm:text-base mb-8 max-w-xl mx-auto md:mx-0">
            I build modern, responsive, and scalable web applications using
            React.js and modern frontend technologies. I am passionate about
            clean UI, user experience, and writing maintainable code while
            continuously learning and growing as a software engineer.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a
              href="/projects"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition"
            >
              <FontAwesomeIcon icon={faLaptopCode} className="mr-2" />
              View Projects
            </a>

            <a
              href="/contact"
              className="inline-flex items-center justify-center border border-gray-500 hover:border-blue-500 px-6 py-3 rounded-lg font-medium transition"
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Contact Me
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 mt-8 text-xl">
            <a
              target="blank"
              href="https://github.com/HifzaSethi"
              className="hover:text-blue-500 transition"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              target="blank"
              href="https://www.linkedin.com/in/hifza-sethi-5aaa48357"
              className="hover:text-blue-500 transition"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex justify-center">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 sm:p-8 shadow-xl w-full max-w-sm">
            <p className="text-sm text-gray-400 mb-4 text-center md:text-left">
              Currently Working With
            </p>

            <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
              <li>⚡ React.js</li>
              <li>⚡ Tailwind CSS</li>
              <li>⚡ JavaScript (ES6+)</li>
              <li>⚡ Node.js</li>
              <li>⚡ Express.js</li>
              <li>⚡ MongoDB</li>
              <li>⚡ Git & GitHub</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
