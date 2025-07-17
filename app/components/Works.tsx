"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Tilt } from "react-tilt";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "./HigherOrderComponents";

type ProjectCardProps = {
	index: number;
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link?: string;
	deploy_link: string;
	platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web" | "Railway";
};

const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
	deploy_link,
	platform,
}: ProjectCardProps) => {
	return (
		<motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
			<Tilt
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className="bg-tertiary p-5 rounded-2xl w-[300px] h-[520px] flex flex-col justify-between"
			>
				<div className="relative w-full h-[200px]">
					<Image
						src={image}
						width={1000}
						height={1000}
						alt="project_image"
						className="w-full h-full object-cover rounded-2xl"
					/>

					<div className="absolute inset-0 flex justify-end m-3 card-img_hover">
						{source_code_link && (
							<Link
								href={source_code_link}
								target="_blank"
								className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
							>
								<Image
									src="/tech/github.webp"
									width={24}
									height={24}
									alt="source-code"
									className="object-contain"
								/>
							</Link>
						)}
						<Link
							href={deploy_link}
							target="_blank"
							className="black-gradient w-10 h-10 ml-2 rounded-full flex justify-center items-center cursor-pointer"
						>
							<Image
								src={
									platform === "Railway"
										? "/tech/railway.png"
										: platform === "Netlify"
										? "/tech/netlify.webp"
										: platform === "Vercel"
										? "/tech/vercel.svg"
										: platform === "Wordpress"
										? "/tech/wordpress.webp"
										: platform === "Web"
										? "/web.webp"
										: "/tech/figma.webp"
								}
								width={24}
								height={24}
								alt="source code"
								className="object-contain"
							/>
						</Link>
					</div>
				</div>

				<div className="mt-5">
					<h3 className="text-white font-bold text-[20px]">{name}</h3>
					<p className="mt-2 text-secondary text-[14px] line-clamp-4">{description}</p>
				</div>

				<div className="mt-4 flex flex-wrap gap-2">
					{tags.map((tag) => (
						<p
							key={`${name}-${tag.name}`}
							className={`text-[14px] ${tag.color}`}
						>
							#{tag.name}
						</p>
					))}
				</div>
			</Tilt>
		</motion.div>
	);
};

const Works = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className="sectionSubText">Welcome</p>
				<h2 className="sectionHeadText">My Projects.</h2>
			</motion.div>

			<div className="w-full flex justify-center">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-center"
				>
					Proyek-proyek berikut menunjukkan kemampuan dan pengalaman saya
					melalui contoh nyata dari hasil kerja yang telah saya selesaikan.
					Setiap proyek dijelaskan secara singkat dan dilengkapi dengan tautan ke
					website atau demo langsung. Semua ini mencerminkan kemampuan saya
					dalam menyelesaikan masalah kompleks, menggunakan berbagai teknologi,
					dan mengelola proyek secara efektif dari awal hingga akhir.
				</motion.p>
			</div>

			<div className="mt-20 flex flex-wrap justify-center gap-7">
				{projects.map((project, index) => (
					<ProjectCard key={`project-${index}`} index={index} {...project} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Works, "works");
