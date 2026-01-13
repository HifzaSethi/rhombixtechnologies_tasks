const Experience = () => {
  return (
    <div className="p-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>

      <div className="space-y-8">
        {/* Nexora Internship */}
        <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-blue-600">
          <h3 className="text-xl font-semibold">Frontend Developer Intern</h3>
          <p className="text-gray-600">Nexora Technologies · Internship</p>
          <p className="text-sm text-gray-500 mb-3">Remote | 2024</p>

          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>
              Developed responsive user interfaces using <b>React.js</b> and{" "}
              <b>Tailwind CSS</b>.
            </li>
            <li>
              Implemented reusable components to improve code maintainability.
            </li>
            <li>
              Integrated frontend with backend APIs and handled dynamic data
              rendering.
            </li>
            <li>
              Collaborated with team members using <b>GitHub</b> for version
              control.
            </li>
            <li>Improved UI/UX consistency across multiple pages.</li>
          </ul>
        </div>

        {/* Youth Foundation Volunteer */}
        <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-green-600">
          <h3 className="text-xl font-semibold">
            Graphic Designer (Volunteer)
          </h3>
          <p className="text-gray-600">Youth Foundation</p>
          <p className="text-sm text-gray-500 mb-3">
            Volunteer | 2023 – Present
          </p>

          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>
              Designed posters, banners, and social media creatives using{" "}
              <b>Canva</b>.
            </li>
            <li>
              Created promotional materials for donation and community welfare
              campaigns.
            </li>
            <li>
              Worked closely with the team to visually communicate social impact
              initiatives.
            </li>
            <li>
              Maintained consistent branding and visual identity for foundation
              events.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
