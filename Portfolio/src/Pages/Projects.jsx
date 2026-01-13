import ProjectCard from "../Components/ProjectCard";
import {
  faCode,
  faLink,
  faCartShopping,
  faHouse,
  faListCheck,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  return (
    <section className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Projects</h2>

        <p className="text-gray-700 mb-10 max-w-4xl">
          A selection of projects demonstrating my experience in frontend and
          backend development, problem-solving, and practical implementation of
          modern web technologies.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* E-commerce Project */}
          <ProjectCard
            icon={faCartShopping}
            title="E-Commerce Web Application (Ongoing)"
            description="A full-stack e-commerce platform currently under development, featuring product management, authentication, cart functionality, and order handling."
            tech="React.js, Tailwind CSS, Node.js, Express.js, MongoDB"
            frontend="https://github.com/HifzaSethi/Multi-Product-Ecommerce-Platform-Frontend-"
            backend="https://github.com/HifzaSethi/Multi-Product-Ecommerce-Platform-Backend"
            highlight
          />

          {/* Airbnb Clone */}
          <ProjectCard
            icon={faHouse}
            title="Airbnb Clone (Backend Focus)"
            description="A backend-driven Airbnb clone with complete home management system including add-home, list-homes, home details, and 404 error handling."
            tech="Node.js, Express.js"
            github="https://github.com/HifzaSethi/NODEJS-Learning/tree/main/chapter11"
          />

          {/* Todo App */}
          <ProjectCard
            icon={faListCheck}
            title="To-Do List Application"
            description="A React-based task manager with add, edit, delete"
            tech="React.js, Bootstrap, React icons"
            github="https://github.com/HifzaSethi/React-Practice-Projects/tree/main/TodoApp"
          />

          {/* Portfolio */}
          <ProjectCard
            icon={faCode}
            title="Personal Portfolio Website"
            description="A fully responsive and professional portfolio showcasing my skills, experience, and projects."
            tech="React.js, Tailwind CSS"
            github="YOUR_GITHUB_LINK"
          />

          <ProjectCard
            icon={faGamepad}
            title="Mini Practice Projects"
            description="A collection of small applications and utilities built to strengthen problem-solving skills and hands-on experience across frontend and backend technologies."
            tech="HTML, CSS, JavaScript, React.js, Node.js, Express.js"
            github="https://github.com/HifzaSethi/"
            extra={[
              "Mini Social Media App (Basic)",
              "Password Generator",
              "Encryption & Decryption Utility",

              "Calculator Application",
              "Tic Tac Toe",
              "Stone Paper Scissors",
              "Other small React & backend practice projects",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
