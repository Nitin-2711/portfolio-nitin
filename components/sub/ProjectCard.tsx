import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden md:w-1/3 rounded-lg shadow-lg border border-[#2A0E61]">
      {/* <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      /> */}

      <div className="relative p-4 flex flex-col">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-auto text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
