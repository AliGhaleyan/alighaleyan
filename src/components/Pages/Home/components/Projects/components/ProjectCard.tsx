"use client"
import { Project } from "@/types";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Image from "next/legacy/image";

type Props = {
    project: Project
}

const ProjectCard = ({ project }: Props) => {
    return <div className="flex items-center">
        <motion.a
            href={project.link}
            target="_blank"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative w-[30rem] aspect-video rounded-3xl group overflow-hidden">
            <div className="absolute z-10 h-full w-full inset-0 backdrop-blur-sm bg-white/30 invisible group-hover:visible" />
            <FontAwesomeIcon className="absolute z-10 m-auto inset-0 invisible group-hover:visible text-dark-blue-100 h-10 w-10" icon={faArrowUpRightFromSquare} />
            <Image alt={project.name} src={project.image} layout="fill" className="rounded-3xl" />
        </motion.a>
        <div className="flex flex-1 text-white">
            <div className="w-full pl-12 p-10 rounded-r-3xl grid gap-4">
                <h4 className="font-bold text-4xl">{project.name}</h4>
                <p className="text-white text-justify">{project.description}</p>
                <div className="flex justify-end text-sm mt-4">
                    <a href={project.link} target="_blank" className="flex items-center gap-2">
                        See Project
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} width={15} />
                    </a>
                </div>
            </div>
        </div>
    </div>;
};

export default ProjectCard;