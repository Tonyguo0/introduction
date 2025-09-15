import { useState, useRef, RefObject } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
    const formRef = useRef(null);
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target;

        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        setLoading(true);
        // public key: 9rExCoZjRv6vaeKbl
        // service id: service_fs5zagw
        // emailJS template ID: template_r6svbzs
        emailjs
            .send(
                `service_fs5zagw`,
                `template_r6svbzs`,
                {
                    from_name: form.name,
                    to_name: `Tony`,
                    from_email: form.email,
                    to_email: `tonyguo998@gmail.com`,
                    message: form.message,
                },
                `9rExCoZjRv6vaeKbl`
            )
            .then(
                () => {
                    setLoading(false);
                    alert(
                        `Thank you. I will get back to you as soon as possible`
                    );

                    setForm({
                        name: ``,
                        email: ``,
                        message: ``,
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error('EmailJS Error:', error);
                    
                    // Provide more specific error messages
                    let errorMessage = "Something went wrong.";
                    
                    if (error.text) {
                        if (error.text.includes('Invalid grant') || error.text.includes('unauthorized')) {
                            errorMessage = "Email service authentication expired. Please try again later or contact me directly.";
                        } else if (error.text.includes('quota')) {
                            errorMessage = "Email quota exceeded. Please try again later or contact me directly.";
                        } else if (error.text.includes('network')) {
                            errorMessage = "Network error. Please check your connection and try again.";
                        } else {
                            errorMessage = `Email failed to send: ${error.text}`;
                        }
                    }
                    
                    alert(errorMessage);
                }
            );
    };
    return (
        // classname to ensure we have everything we need to show in mobile, and larger devices
        <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
            {/* 
				flex-[0.75] = take 3/4 of the screen
				bg-black-100 = 
				bg-opacity-50 = NEWLY ADDED makes background transparent 50%	
				
			*/}

            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-12 flex flex-col gap-8"
                >
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">
                            Your Name
                        </span>
                        {/* 
							py-4 = padding y of 4 to make it taller 
							rounded-lg = make the rounded corner of the input big
							outline-none = no more outline of default css ouline
							border-non = no more outline of default css border
						
						*/}
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your name?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">
                            Your Email
                        </span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your email?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">
                            Your Message
                        </span>
                        <textarea
                            rows={7}
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="What do you want to say?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                        />
                    </label>
                    <button
                        type="submit"
                        className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </motion.div>
            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                // both the model model and contact form will take one space in xl devices
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
            >
                <EarthCanvas />
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
