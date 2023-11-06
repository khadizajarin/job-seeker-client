
import Navbar from "./Navbar";
import Footer from "./Footer";
import Banner from "./Banner";
import Marquee from "react-fast-marquee";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

import {motion, AnimatePresence} from "framer-motion";
import "../Pages/styles.css";

const Home = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/Jobs', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        })
          .then((res) => res.json())
          .then((data) => {
            setJobs(data);
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>

            <Marquee className="h-16" behavior="scroll" direction="left" scrollamount="4">
                Join Team Apple! We are Hiring! Are you passionate about technology, innovation, and creating products that change the world? Apple is looking for talented individuals to join our team and be a part of something extraordinary. Position: [Job Title]
                Location: [Location]
                Full-time | Competitive Salary | Excellent Benefits

                Key Responsibilities:[Responsibility 1]
                Qualifications:[Qualification 1]
                
                Why Apple: Join us, and you will become a part of a company known for its commitment to innovation, design, and excellence. We offer a dynamic and inclusive work environment where your talents can thrive and make a difference.

                How to Apply:
                If you are excited about the opportunity to work with Apple, please send your resume and a cover letter to [email address]. Do not miss your chance to be part of something amazing!
                Apple Inc. is an equal opportunity employer.
            </Marquee>


            {/* tab for jobs */}
            <div className="max-w-7xl  mx-auto">
                <h1 className="text-7xl mx-7 my-4">Types of Jobs You Can Find!</h1>
                {/* tab list 1 */}
                <motion.div className="mx-10" initial={{ x : 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
                    <h1 className="font-bold text-3xl my-4">All Jobs</h1>
                    <div >
                    <Tabs>
                        <TabList>
                            {jobs.slice(0, 2).map((job) => (
                            <Tab key={job._id}>{job.Job_Title}</Tab>
                            ))}
                            <Tab>All Jobs</Tab>
                        </TabList>

                        {jobs.slice(0, 2).map((job) => (
                            <TabPanel key={job._id}>
                            <h2>{job.Job_Description}</h2>
                            <p>{job.Job_Description}</p>
                                <p>{job.Job_Category}</p>
                                <p>{job.Salary_Range}</p>
                                <p> Posted on : {job.Job_Posting_Date}</p>
                                <p> Posted By : {job.Employer_Name}</p>
                                <p>Application Deadline : {job.Application_Deadline}</p>
                                <button className="btn btn-glass rounded-full"><Link to={`/allJobs/${job._id}`}> Details</Link></button>
                            </TabPanel>
                        ))}

                        <TabPanel>
                            <h2>All Jobs</h2>
                        </TabPanel>
                    </Tabs>

                    </div>
                </motion.div>

                {/* tab list 2 */}
                <motion.div className="mx-10" initial={{ x : 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
                    <h1 className="font-bold text-3xl my-4">Remote Jobs</h1>
                    <div >
                    <Tabs>
                        <TabList>
                            {jobs
                            .filter((job) => job.Job_Category === "Remote")
                            .slice(0, 2)
                            .map((job) => (
                                <Tab key={job._id}>{job.Job_Title}</Tab>
                            ))}
                            <Tab>All Jobs</Tab>
                        </TabList>

                        {jobs
                            .filter((job) => job.Job_Category === "Remote")
                            .slice(0, 2)
                            .map((job) => (
                            <TabPanel key={job._id}>
                                <h2>{job.Job_Description}</h2>
                                <p>{job.Job_Description}</p>
                                <p>{job.Job_Category}</p>
                                <p>{job.Salary_Range}</p>
                                <p> Posted on : {job.Job_Posting_Date}</p>
                                <p> Posted By : {job.Employer_Name}</p>
                                <p>Application Deadline : {job.Application_Deadline}</p>
                                <button className="btn btn-glass rounded-full"><Link to={`/allJobs/${job._id}`}> Details</Link></button>
                            </TabPanel>
                            ))}
                            <TabPanel>
                            <h2>All Jobs</h2>
                            </TabPanel>
                        </Tabs>
                    </div>
                </motion.div>

                {/* tab list 3 */}
                <motion.div className="mx-10" initial={{ x : 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
                    <h1 className="font-bold text-3xl my-4">On Site Jobs</h1>
                    <div >
                    <Tabs>
                        <TabList>
                            {jobs
                            .filter((job) => job.Job_Category === "On Site")
                            .slice(0, 2)
                            .map((job) => (
                                <Tab key={job._id}>{job.Job_Title}</Tab>
                            ))}
                            <Tab>All Jobs</Tab>
                        </TabList>

                        {jobs
                            .filter((job) => job.Job_Category === "On Site")
                            .slice(0, 2)
                            .map((job) => (
                            <TabPanel key={job._id}>
                                <h2>{job.Job_Description}</h2>
                                <p>{job.Job_Description}</p>
                                <p>{job.Job_Category}</p>
                                <p>{job.Salary_Range}</p>
                                <p> Posted on : {job.Job_Posting_Date}</p>
                                <p> Posted By : {job.Employer_Name}</p>
                                <p>Application Deadline : {job.Application_Deadline}</p>
                                <button className="btn btn-glass rounded-full"><Link to={`/allJobs/${job._id}`}> Details</Link></button>
                            </TabPanel>
                            ))}
                            <TabPanel>
                            <h2>All Jobs</h2>
                            </TabPanel>
                        </Tabs>
                    </div>
                </motion.div>


                {/* tab list 4 */}
                <motion.div className="mx-10" initial={{ x : 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
                    <h1 className="font-bold text-3xl my-4">Part Time Jobs</h1>
                    <div >
                    <Tabs>
                        <TabList>
                            {jobs
                            .filter((job) => job.Job_Category === "Part-Time")
                            .slice(0, 2)
                            .map((job) => (
                                <Tab key={job._id}>{job.Job_Title}</Tab>
                            ))}
                            <Tab>All Jobs</Tab>
                        </TabList>

                        {jobs
                            .filter((job) => job.Job_Category === "Part-Time")
                            .slice(0, 2)
                            .map((job) => (
                            <TabPanel key={job._id}>
                                <h2>{job.Job_Description}</h2>
                                <p>{job.Job_Description}</p>
                                <p>{job.Job_Category}</p>
                                <p>{job.Salary_Range}</p>
                                <p> Posted on : {job.Job_Posting_Date}</p>
                                <p> Posted By : {job.Employer_Name}</p>
                                <p>Application Deadline : {job.Application_Deadline}</p>
                                <button className="btn btn-glass rounded-full"><Link to={`/allJobs/${job._id}`}> Details</Link></button>
                            </TabPanel>
                            ))}
                            <TabPanel>
                            <h2>All Jobs</h2>
                            </TabPanel>
                        </Tabs>
                    </div>
                </motion.div>


                {/* tab list  5*/}
                < motion.div className="mx-10" initial={{ x : 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
                    <h1 className="font-bold text-3xl my-4">Hybrid </h1>
                    <div >
                    <Tabs>
                        <TabList>
                            {jobs
                            .filter((job) => job.Job_Category === "Hybrid")
                            .slice(0, 2)
                            .map((job) => (
                                <Tab key={job._id}>{job.Job_Title}</Tab>
                            ))}
                            <Tab>All Jobs</Tab>
                        </TabList>

                        {jobs
                            .filter((job) => job.Job_Category === "Hybrid")
                            .slice(0, 2)
                            .map((job) => (
                            <TabPanel key={job._id}>
                                <h2>{job.Job_Description}</h2>
                                <p>{job.Job_Description}</p>
                                <p>{job.Job_Category}</p>
                                <p>{job.Salary_Range}</p>
                                <p> Posted on : {job.Job_Posting_Date}</p>
                                <p> Posted By : {job.Employer_Name}</p>
                                <p>Application Deadline : {job.Application_Deadline}</p>
                                <button className="btn btn-glass rounded-full"><Link to={`/allJobs/${job._id}`}> Details</Link></button>
                            </TabPanel>
                            ))}
                            <TabPanel>
                            <h2>All Jobs</h2>
                            </TabPanel>
                        </Tabs>
                    </div>
                </motion.div>
            </div>


            {/* fade animation added */}
            <hr className="divider" />
            <div className="text-center font-bold text-5xl bg-slate-300 mx-auto max-w-7xl" >
                
                <Fade cascade>
                    <div className="flex flex-col lg:flex-row items-center justify-center ">
                        <img src="https://media.istockphoto.com/id/1166516811/photo/silhouettes-of-happy-businessperson-success-of-business-concept.webp?b=1&s=170667a&w=0&k=20&c=_PFd-LPxhzgj4kjUt6jKThToyxU-m4mGBzOnjNLxyhk=" alt="" />
                        <p>Come to conquere</p>
                    </div>
                    <div className="flex flex-col-reverse lg:flex-row  items-center justify-center ">
                        <p>Believe. Achieve</p>
                        <img src="https://media.istockphoto.com/id/1204743098/photo/partnership-of-business-concept-group-of-businessperson-customer-support-teamwork.webp?b=1&s=170667a&w=0&k=20&c=_A273icsZtofWIdopwp9dyw55p0XQpqdiufCTXxi8GY=" alt="" /> 
                    </div>
                    <div className="flex flex-col lg:flex-row  items-center justify-center ">
                        <img src="https://media.istockphoto.com/id/1174511028/photo/stack-of-hands-unity-and-teamwork-concept.webp?b=1&s=170667a&w=0&k=20&c=iAcz6X92cheyPQJOw0cieUvKofnzPpAbnzHDGTWAqS4=" alt="" />
                        <p>Triumph with  <br />determination</p>
                    </div>
                </Fade>    
            </div>
            <hr className="divider" />



            {/* CV sample */} 
            
            {/* <div className="grid lg:grid-cols-2 lg:max-w-7xl lg:mx-auto mt-6 justify-between items-center">
                <div className="text-center" > 
                    <p className=" m-4">A Curriculum Vitae (CV) is a comprehensive document that provides a detailed account of an individual educational and professional history. Typically used for academic and research positions, a CV includes sections like personal information, education, work experience, publications, awards, skills, and references. Unlike a resume, a CV can be extensive, with no strict length restrictions, and is highly customized to the specific job or opportunity being pursued. It often follows a chronological format, emphasizing the most recent achievements and experiences. CVs are commonly used in academic and research contexts and are favored in many countries, especially in Europe, for their ability to showcase an individuals qualifications and expertise in-depth.</p>
                    <p className="text-3xl font-bold ">
                    John Doe shared his resume for sample. Let us have a short look
                    </p>
                </div>
                <div className="cv-container">
                    <header>
                        <h1 className="font-bold text-lg mt-4">John Doe</h1>
                        <p>Web Developer</p>
                    </header>

                    <section className="contact">
                        <h2 className="font-bold text-lg mt-4">Contact Information</h2>
                        <address>
                        <p>Email: john@example.com</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Website: www.johndoe.com</p>
                        <p>LinkedIn: www.linkedin.com/in/johndoe</p>
                        </address>
                    </section>

                    <section className="education">
                        <h2 className="font-bold text-lg mt-4">Education</h2>
                        <div className="education-entry">
                        <h3>University of Computer Science</h3>
                        <p>Bachelor of Science in Computer Science</p>
                        <p>Graduated: May 20XX</p>
                        </div>
                    </section>

                    <section className="experience">
                        <h2 className="font-bold text-lg mt-4">Work Experience</h2>
                        <div className="experience-entry">
                        <h3>ABC Tech Inc.</h3>
                        <p>Web Developer</p>
                        <p>June 20XX - Present</p>
                        <ul>
                            <li>Developed and maintained web applications using React and Node.js.</li>
                            <li>Collaborated with a team to implement new features and improve user experience.</li>
                        </ul>
                        </div>
                    </section>

                    <section className="skills">
                        <h2 className="font-bold text-lg mt-4">Skills</h2>
                        <ul>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>HTML/CSS</li>
                        <li>Version Control (Git)</li>
                        </ul>
                    </section>
                </div>
            </div> */}
            <div className="grid lg:grid-cols-2 lg:max-w-7xl lg:mx-auto mt-6 justify-between items-center">
                <motion.div className="text-center" initial={{ x : 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
                <p className="m-4">A Curriculum Vitae (CV) is a comprehensive document that provides a detailed account of an individuals educational and professional history. Typically used for academic and research positions, a CV includes sections like personal information, education, work experience, publications, awards, skills, and references. Unlike a resume, a CV can be extensive, with no strict length restrictions, and is highly customized to the specific job or opportunity being pursued. It often follows a chronological format, emphasizing the most recent achievements and experiences. CVs are commonly used in academic and research contexts and are favored in many countries, especially in Europe, for their ability to showcase an individuals qualifications and expertise in-depth.</p>
                <p className="text-3xl font-bold">
                John Doe shared his resume for sample. Let us have a short look
                </p>
                </motion.div>
                <motion.div className="cv-container" initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
                    <header>
                    <motion.h1 className="font-bold text-lg mt-4">John Doe</motion.h1>
                    <motion.p>Web Developer</motion.p>
                    </header>

                    <section className="contact">
                    <motion.h2 className="font-bold text-lg mt-4">Contact Information</motion.h2>
                    <address>
                        <motion.p>Email: john@example.com</motion.p>
                        <motion.p>Phone: (123) 456-7890</motion.p>
                        <motion.p>Website: www.johndoe.com</motion.p>
                        <motion.p>LinkedIn: www.linkedin.com/in/johndoe</motion.p>
                    </address>
                    </section>

                    <section className="education">
                    <motion.h2 className="font-bold text-lg mt-4">Education</motion.h2>
                    <div className="education-entry">
                        <h3>University of Computer Science</h3>
                        <p>Bachelor of Science in Computer Science</p>
                        <p>Graduated: May 20XX</p>
                    </div>
                    </section>

                    <section className="experience">
                    <motion.h2 className="font-bold text-lg mt-4">Work Experience</motion.h2>
                    <div className="experience-entry">
                        <h3>ABC Tech Inc.</h3>
                        <p>Web Developer</p>
                        <p>June 20XX - Present</p>
                        <ul>
                        <li>Developed and maintained web applications using React and Node.js.</li>
                        <li>Collaborated with a team to implement new features and improve user experience.</li>
                        </ul>
                    </div>
                    </section>

                    <section className="skills">
                    <motion.h2 className="font-bold text-lg mt-4">Skills</motion.h2>
                    <ul>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>HTML/CSS</li>
                        <li>Version Control (Git)</li>
                    </ul>
                    </section>
                </motion.div>
            </div>




            <div className="flex flex-col lg:lex-row gap-4 max-w-7xl mx-auto my-12  items-center justify-center">
                <div className="text-6xl">Tell us how did you feel to <br /> visit our site by swapping!</div>
                <label className="swap swap-flip text-9xl">
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" />
                    <div className="swap-on">😈</div>
                    <div className="swap-off">😇</div>
                </label>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;

