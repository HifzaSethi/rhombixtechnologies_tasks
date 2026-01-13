import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faLaptopCode,
  faBriefcase,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const Achievements = () => {
  return (
    <section className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6 text-gray-900">Achievements</h2>

        <p className="text-gray-700 text-lg mb-10">
          A summary of my academic accomplishments, professional milestones, and
          personal achievements that contribute to my growth as a software
          developer.
        </p>

        {/* Technical & Academic Achievements */}
        <div className="bg-white p-6 rounded-xl shadow mb-8">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FontAwesomeIcon icon={faLaptopCode} className="text-blue-600" />
            Technical & Academic Highlights
          </h3>

          <ul className="space-y-3 text-gray-700">
            <li>
              • Maintained a strong academic record with a{" "}
              <span className="font-semibold">CGPA of 3.90</span> in BS Computer
              Science
            </li>
            <li>
              • Selected for{" "}
              <span className="font-semibold">
                Frontend Developer Internship at Nexora
              </span>
            </li>
            <li>
              • Selected for{" "}
              <span className="font-semibold">
                Internship at Rhombix Technologies
              </span>
            </li>
            <li>
              • Successfully completed multiple real-world projects using
              React.js, Tailwind CSS, and JavaScript
            </li>
          </ul>
        </div>

        {/* Recognition & Awards */}
        <div className="bg-white p-6 rounded-xl shadow mb-8">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FontAwesomeIcon icon={faAward} className="text-blue-600" />
            Recognition & Awards
          </h3>

          <ul className="space-y-3 text-gray-700">
            <li>
              • Awarded university trophies for academic excellence and
              consistent GPA performance
            </li>
            <li>
              • Earned multiple certificates for participation and performance
              in district-level inter-college debate competitions
            </li>
          </ul>
        </div>

        {/* Soft Skills & Leadership */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FontAwesomeIcon icon={faUsers} className="text-blue-600" />
            Leadership & Communication Skills
          </h3>

          <p className="text-gray-700 leading-relaxed">
            My involvement in debate and public speaking has helped me develop
            strong communication, confidence, and presentation skills. These
            abilities support my professional work by enabling effective team
            collaboration, clear idea articulation, and impactful project
            presentations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
