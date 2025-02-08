import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center pb-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
  <ProjectCard
    src="/TrackEnd.png"
    title="TrackEnd: Attendance Management App"
    description="TrackEnd is a mobile application designed to simplify and streamline attendance management using location-based tracking technology. Developed using Java and XML in Android Studio, it leverages Firebase for real-time data storage and seamless backend integration. This innovative solution ensures that users can mark their attendance only when they are physically present at a specific location, reducing the chances of fraudulent check-ins."
  />
  <ProjectCard
    src="/QuizWebApp.png"
    title="Quiz Web Application"
    description="Quiz Web Application is a dynamic and interactive platform developed using Java and integrated with a MySQL database. Designed for educational and entertainment purposes, it allows users to participate in quizzes on various topics, track their scores, and enhance their knowledge."
  />
  <ProjectCard
    src="/ChatWebApp.png"
    title="Chat Web Application"
    description="Chat Web Application is a real-time communication platform developed using Java, socket programming, and a MySQL database. It enables users to connect, exchange messages instantly, and engage in seamless conversations."
  />
</div>

    </div>
  );
};

export default Projects;
