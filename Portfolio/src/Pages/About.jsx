import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faCode,
  faPalette,
  faMicrophone,
  faBook,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <section className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6 text-gray-900">About Me</h2>

        {/* Intro */}
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          I am a <span className="font-semibold">Full Stack Developer</span> and
          a <span className="font-semibold">BS Computer Science student</span>{" "}
          with a strong passion for building modern, scalable, and user-friendly
          web applications. I enjoy transforming ideas into clean and functional
          digital experiences while continuously improving my technical and
          problem-solving skills.
        </p>

        {/* Professional Summary */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FontAwesomeIcon icon={faCode} className="text-blue-600" />
              Technical Background
            </h3>

            <ul className="space-y-2 text-gray-700">
              <li>• Full Stack Developer (React, Node.js, Express)</li>
              <li>• Strong frontend expertise with Tailwind CSS</li>
              <li>• Experience working with MongoDB & REST APIs</li>
              <li>• Focus on clean UI, UX, and maintainable code</li>
            </ul>
          </div>

          {/* <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FontAwesomeIcon
                icon={faUserGraduate}
                className="text-blue-600"
              />
              Education
            </h3>

            <ul className="space-y-2 text-gray-700">
              <li>• BS Computer Science</li>
              <li>• Islamia College Peshawar</li>
              <li>
                • CGPA: <span className="font-semibold">3.85</span>
              </li>
            </ul>
          </div> */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FontAwesomeIcon
                icon={faUserGraduate}
                className="text-blue-600"
              />
              Education (Summary)
            </h3>

            <ul className="space-y-2 text-gray-700">
              <li>• BS Computer Science</li>
              <li>• Islamia College Peshawar</li>
            </ul>

            <a
              href="/education"
              className="inline-block mt-4 text-blue-600 hover:underline text-sm font-medium"
            >
              View complete academic background →
            </a>
          </div>
        </div>

        {/* Volunteer & Soft Skills */}
        <div className="bg-white p-6 rounded-xl shadow mb-10">
          <h3 className="text-xl font-semibold mb-4">
            Leadership & Creative Experience
          </h3>

          <p className="text-gray-700 leading-relaxed">
            Alongside my technical journey, I actively contribute as a
            <span className="font-semibold"> Graphic Designer (Volunteer)</span>{" "}
            at a youth foundation, where I design visual content for social
            impact campaigns. This role has strengthened my creativity,
            teamwork, and communication skills.
          </p>

          <p className="text-gray-700 leading-relaxed mt-3">
            I am also a confident <span className="font-semibold">debater</span>
            , which has helped me develop strong presentation and articulation
            abilities—skills that are valuable in collaborative and professional
            environments.
          </p>
        </div>

        {/* Personal Interests */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-4">Personal Interests</h3>

          <div className="grid sm:grid-cols-3 gap-4 text-gray-700">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPalette} className="text-blue-500" />
              Arts & Crafts
            </div>

            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faBook} className="text-blue-500" />
              Reading Novels
            </div>

            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faMicrophone} className="text-blue-500" />
              Public Speaking & Debates
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
