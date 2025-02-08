import DevImg from "@/components/ui/DevImg";
import React from "react";
import { FaEnvelope, FaLinkedin, FaLocationArrow, FaPhone } from "react-icons/fa";

const Page: React.FC = () => {
    return (
        <div className="text-white leading-6 pt-20 relative z-30">
            <div className="flex items-center flex-col md:flex-row justify-between text-white px-5">
                <div>
                    <DevImg
                        containerStyles="bg-about_shape_dark w-[150px] h-[150px] bg-no-repeat relative"
                        imgSrc="/logo.png"
                        rounded="rounded-xl"
                    />
                </div>
                <div className="text-center md:text-left">
                    <h1 className="text-3xl">NITIN KUMAR</h1>
                    <h2 className="text-xl">SOFTWARE DEVELOPER</h2>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-0 p-5">
                <div className="flex-1 pr-5">
                    <div className="mb-5">
                        <p className="flex items-center gap-2"><FaLocationArrow /><strong>Bareilly, Uttar Pradesh</strong></p>
                        <p className="flex items-center gap-2"><FaPhone />7906248782</p>
                        <p className="flex items-center gap-2"><FaEnvelope />2711nitinkumar@gmail.com</p>
                        <p className="flex items-center gap-2">
                            <FaLinkedin />
                            <a href="https://linkedin.com/in/271nitinkumar" className="text-blue-400">
                                linkedin.com/in/271nitinkumar
                            </a>
                        </p>
                    </div>
                    <div className="mb-5">
                        <h3 className="text-xl">EDUCATION</h3>
                        <div className="relative mb-5">
                            <div className="absolute w-1 bg-gray-500 h-full left-2.5 transform -translate-x-1/2"></div>
                            <div className="relative mb-5 flex items-center">
                                <div className="w-5 h-5 rounded-full bg-indigo-500 shadow-[0px_0px_10px] shadow-indigo-500 z-10"></div>
                                <div className="ml-4">
                                    <p><strong>MASTERS DEGREE</strong><br />Invertis University, Bareilly<br />2024 &ndash; 2026</p>
                                </div>
                            </div>
                            <div className="relative mb-5 flex items-center">
                                <div className="w-5 h-5 rounded-full bg-indigo-500 shadow-[0px_0px_10px] shadow-indigo-500 z-10"></div>
                                <div className="ml-4">
                                    <p><strong>BACHELOR&apos;S DEGREE</strong><br />Mahatma Jyotiba Phule Rohilkhand University<br />2021 – 2024</p>
                                </div>
                            </div>
                            <div className="relative mb-5 flex items-center">
                                <div className="w-5 h-5 rounded-full bg-indigo-500 shadow-[0px_0px_10px] shadow-indigo-500 z-10"></div>
                                <div className="ml-4">
                                    <p><strong>HIGHER SECONDARY</strong><br />Uttar Pradesh Board<br />2020 &ndash; 2021</p>
                                </div>
                            </div>
                            <div className="relative mb-5 flex items-center">
                                <div className="w-5 h-5 rounded-full bg-indigo-500 shadow-[0px_0px_10px] shadow-indigo-500 z-10"></div>
                                <div className="ml-4">
                                    <p><strong>SECONDARY SCHOOL</strong><br />CBSE Board<br />2017 &ndash; 2018</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5">
                        <h3 className="text-xl">CORE COMPETENCIES</h3>
                        <p>Android App Development</p>
                        <p>MERN Developer</p>
                        <p>Team Management</p>
                        <p>Java, Firebase, MySQL, Python</p>
                    </div>
                    <div>
                        <h3 className="text-xl">HOBBIES</h3>
                        <p>Listening to podcasts</p>
                        <p>Exploring New Technologies</p>
                    </div>
                </div>
                <div className="flex-2">
                    <div className="mb-5">
                        <h3 className="text-xl">SUMMARY</h3>
                        <p>As a skilled software developer, I specialize in designing and deploying innovative, user-centric solutions. Proficient in Java, Python, JavaScript, and frameworks like React and Node.js, I excel at building scalable applications and robust systems. With a strong focus on agile methodologies, I collaborate effectively with teams to deliver high-quality, secure, and efficient solutions that align with business goals. My problem-solving expertise and passion for technology drive me to create impactful digital experiences.</p>
                    </div>
                    <div>
                        <h3 className="text-xl">PROJECTS</h3>
                        <div className="relative mb-5">
                            <div className="absolute w-1 bg-gray-500 h-full left-2.5 transform -translate-x-1/2"></div>
                            <div className="relative mb-5 flex items-center">
                                <div className="w-5 h-5 rounded-full bg-indigo-500 shadow-[0px_0px_10px] shadow-indigo-500 z-10"></div>
                                <div className="ml-4">
                                    <h4>TRACKEND <span className="float-right">2023—2024</span></h4>
                                    <p>TrackEnd is a mobile application designed to simplify and streamline attendance management using location-based tracking technology. Developed using Java and XML in Android Studio, the app leverages Firebase for real-time data storage and seamless backend integration. This innovative solution ensures that users can mark their attendance only when they are physically present at a specific location, reducing the chances of fraudulent check-ins.</p>
                                    <p>The app provides a user-friendly interface for administrators to monitor attendance records and verify locations efficiently. With Firebase as its cloud backend, TrackEnd ensures secure and scalable data storage, real-time synchronization, and smooth user authentication. Its primary use cases include employee attendance in corporate environments, student attendance in educational institutions, and field workforce management. TrackEnd aims to enhance accuracy, accountability, and convenience in attendance tracking while promoting smarter organizational workflows.</p>
                                </div>
                            </div>
                            <div className="relative mb-5 flex items-center">
                                <div className="w-5 h-5 rounded-full bg-indigo-500 shadow-[0px_0px_10px] shadow-indigo-500 z-10"></div>
                                <div className="ml-4">
                                    <h4>QUIZ WEB APPLICATION <span className="float-right">2022—2023</span></h4>
                                    <p>The Quiz Web Application is a dynamic and interactive platform developed using Java and integrated with a MySQL database. Designed for educational and entertainment purposes, it allows users to participate in quizzes on various topics, track their scores, and enhance their knowledge. The backend powered by MySQL ensures secure and efficient data management, including user information, quiz questions, and results. The application&apos;s seamless user interface and robust functionality make it an ideal tool for both learning and fun.</p>
                                </div>
                            </div>
                            <div className="relative mb-5 flex items-center">
                                <div className="w-5 h-5 rounded-full bg-indigo-500 shadow-[0px_0px_10px] shadow-indigo-500 z-10"></div>
                                <div className="ml-4">
                                    <h4>CHAT WEB APPLICATION <span className="float-right">2021—2022</span></h4>
                                    <p>The Chat Web Application is a real-time messaging platform developed using the MERN stack (MongoDB, Express.js, React, Node.js). This project aimed to create a seamless and responsive chat experience, incorporating features such as user authentication, message storage, and live updates. The application leverages WebSockets to provide instantaneous message delivery and receipt acknowledgments. Users can create accounts, join chat rooms, and communicate in real-time, making it a versatile tool for both personal and professional use.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
