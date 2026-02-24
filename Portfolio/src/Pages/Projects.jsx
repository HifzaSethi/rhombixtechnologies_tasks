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

          {/* AI Mental Health Detection */}
          <ProjectCard
            icon={faBrain}
            title="AI Mental Health Detection System"
            description="An AI-powered system for real-time mental health assessment using emotion detection and intelligent feedback."
            tech="React.js, Tailwind CSS, Flask, Python, CNN"
            github="https://github.com/HifzaSethi/YOUR-FYP-REPO"
          />

          {/* Sign Language & Drawing Detection */}
          <ProjectCard
            icon={faHand}
            title="Sign Language & Drawing Detection"
            description="Computer vision system that recognizes hand gestures and drawings in real time using deep learning."
            tech="Python, OpenCV, TensorFlow, CNN"
            github="https://github.com/HifzaSethi/YOUR-CV-REPO"
          />

          {/* Music Player */}
          <ProjectCard
            icon={faMusic}
            title="Music Player Application"
            description="A modern music streaming interface with playlists and responsive UI."
            tech="Next.js, TypeScript, Tailwind CSS"
            github="https://github.com/HifzaSethi/YOUR-MUSIC-REPO"
          />

          {/* Airbnb Clone */}
          <ProjectCard
            icon={faHouse}
            title="Airbnb Clone (Backend MVC)"
            description="Backend-focused Airbnb clone with home management, dynamic routing, and MVC architecture."
            tech="Node.js, Express.js"
            github="https://github.com/HifzaSethi/NODEJS-Learning/tree/main/chapter11"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
