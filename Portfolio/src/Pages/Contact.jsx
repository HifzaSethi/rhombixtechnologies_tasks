import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-24 flex items-center">
      <div className="max-w-5xl mx-auto px-6 w-full">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I’m always open to discussing new opportunities, internships,
            collaborations, or innovative project ideas. Feel free to reach out.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Email */}
          <div className="bg-gray-800 rounded-xl p-6 text-center shadow hover:shadow-lg transition">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-blue-500 text-3xl mb-4"
            />
            <h3 className="font-semibold mb-1">Email</h3>
            <p className="text-gray-400 text-sm">hifzasethi@gmail.com</p>
          </div>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/hifza-sethi-5aaa48357"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 rounded-xl p-6 text-center shadow hover:shadow-lg transition"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-blue-500 text-3xl mb-4"
            />
            <h3 className="font-semibold mb-1">LinkedIn</h3>
            <p className="text-gray-400 text-sm">Connect with me</p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/HifzaSethi"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 rounded-xl p-6 text-center shadow hover:shadow-lg transition"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-blue-500 text-3xl mb-4"
            />
            <h3 className="font-semibold mb-1">GitHub</h3>
            <p className="text-gray-400 text-sm">View my projects</p>
          </a>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="mailto:hifzasethi@gmail.com"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-medium transition"
          >
            <FontAwesomeIcon icon={faPaperPlane} />
            Send an Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
