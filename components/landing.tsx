import React from 'react';
import { motion } from "motion/react";

export default function Landing() {
	return (
		<motion.section
			initial={{ opacity: 0, y:100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.7 }}

			className="h- w-11/12 mx-auto flex items-center justify-center font-silkscreen border-2 rounded-2xl"
		>
			<div className="text-center">
				<h1 className="text-4xl font-bold">Hi i'm</h1>
				<p className="text-lg">Sanan</p>
			</div>
		</motion.section>
	);
};