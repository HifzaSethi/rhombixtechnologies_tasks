import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faSchool,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";

const Education = () => {
  return (
    <section className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Education</h2>

        <p className="text-gray-700 mb-10 max-w-3xl">
          My academic journey reflects consistency, dedication, and a strong
          foundation in computer science and analytical thinking.
        </p>

        {/* Education Timeline */}
        <div className="space-y-6">
          {/* University */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="flex items-start gap-4">
              <FontAwesomeIcon
                icon={faUniversity}
                className="text-blue-600 text-2xl mt-1"
              />

              <div>
                <h3 className="text-xl font-semibold">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-gray-600">Islamia College Peshawar</p>
                <p className="text-gray-600 text-sm">
                  Semester 7 (In Progress)
                </p>

                <p className="text-gray-700 mt-2">
                  CGPA: <span className="font-semibold">3.90</span>
                </p>
              </div>
            </div>
          </div>

          {/* Intermediate */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="flex items-start gap-4">
              <FontAwesomeIcon
                icon={faGraduationCap}
                className="text-blue-600 text-2xl mt-1"
              />

              <div>
                <h3 className="text-xl font-semibold">
                  Intermediate (Computer Science)
                </h3>
                <p className="text-gray-600">
                  Government Frontier College for Women, Peshawar
                </p>

                <p className="text-gray-700 mt-2">
                  Marks: <span className="font-semibold">931 / 1100</span>
                </p>
              </div>
            </div>
          </div>

          {/* Matric */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="flex items-start gap-4">
              <FontAwesomeIcon
                icon={faSchool}
                className="text-blue-600 text-2xl mt-1"
              />

              <div>
                <h3 className="text-xl font-semibold">
                  Matriculation (Science)
                </h3>
                <p className="text-gray-600">New Vision Education System</p>

                <p className="text-gray-700 mt-2">
                  Marks: <span className="font-semibold">952 / 1100</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
