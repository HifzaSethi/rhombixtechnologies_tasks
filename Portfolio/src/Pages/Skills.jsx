import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDatabase,
  faTools,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faGithub,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  return (
    <section className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Skills
        </h2>

        <p className="text-gray-700 text-center mb-12 max-w-3xl mx-auto">
          A snapshot of the technologies, tools, and creative skills I use to
          design, build, and maintain modern web applications.
        </p>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Frontend */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FontAwesomeIcon icon={faCode} className="text-blue-600" />
              Frontend Development
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <Skill label="HTML5" icon={faHtml5} />
              <Skill label="CSS3" icon={faCss3Alt} />
              <Skill label="Bootstrap" level="Intermediate" />
              <Skill label="Tailwind CSS" />
              <Skill label="JavaScript (ES6+)" icon={faJs} />
              <Skill label="React.js" icon={faReact} />
              <Skill label="Next.js" />
            </div>
          </div>

          {/* Backend */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FontAwesomeIcon icon={faDatabase} className="text-blue-600" />
              Backend Development
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <Skill label="Node.js" icon={faNodeJs} />
              <Skill label="Express.js" />
              <Skill label="MongoDB" />
            </div>
          </div>

          {/* Tools */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FontAwesomeIcon icon={faTools} className="text-blue-600" />
              Tools & Platforms
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <Skill label="Git" />
              <Skill label="GitHub" icon={faGithub} />
            </div>
          </div>

          {/* Design */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FontAwesomeIcon icon={faPalette} className="text-blue-600" />
              Design & Creativity
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <Skill label="Canva" />
              <Skill label="Graphic Designing" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* Reusable Skill Component */
const Skill = ({ label, icon, level }) => {
  return (
    <div className="bg-gray-100 p-3 rounded-lg text-center text-sm font-medium text-gray-800 hover:bg-blue-50 transition">
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          className="block mx-auto mb-1 text-blue-600"
        />
      )}
      {label}
      {level && <div className="text-xs text-gray-500 mt-1">{level}</div>}
    </div>
  );
};

export default Skills;
