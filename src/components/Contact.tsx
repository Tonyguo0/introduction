import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
		const formRef = useRef();
		const [form, setForm] = useState({ name: "", email: "", message: "" });
		const [loading, setLoading] = useState(false);

		const handlChange = (e) => {};

		const handlSubmit = (e) => {};
		return (
				// classname to ensure we have everything we need to show in mobile, and larger devices
				<div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
						{/* 
								flex-[0.75] = take 3/4 of the screen
								
				
						*/}
						<motion.div
								variants={slideIn("left", "tween", 0.2, 1)}
								className="flex-[0.75] bg-black p-8 rounded-2xl"
						>
							<p>Get in touch</p>
							<h3>Contact.</h3>
						</motion.div>
				</div>
		);
};

export default SectionWrapper(Contact, "contact");
