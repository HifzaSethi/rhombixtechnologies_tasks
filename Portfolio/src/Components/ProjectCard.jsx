import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ProjectCard = ({
  icon,
  title,
  description,
  tech,
  frontend,
  backend,
  github,
  githubLabel = "View on github",
  highlight,
}) => {
  return (
    <div
      className={`bg-white p-6 rounded-xl shadow hover:shadow-lg transition ${
        highlight ? "border-l-4 border-blue-600" : ""
      }`}
    >
      <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
        <FontAwesomeIcon icon={icon} className="text-blue-600" />
        {title}
      </h3>

      <p className="text-gray-700 mb-3">{description}</p>

      <p className="text-sm text-gray-600 mb-4">
        <span className="font-medium">Tech Stack:</span> {tech}
      </p>

      <div className="flex gap-4 text-sm font-medium">
        {frontend && (
          <a
            href={frontend}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Frontend Repo
          </a>
        )}

        {backend && (
          <a
            href={backend}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Backend Repo
          </a>
        )}
        {!frontend && !backend && github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {githubLabel}
          </a>
        )}
      </div>
    </div>
  );
};
export default ProjectCard;
