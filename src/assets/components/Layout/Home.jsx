
import Navbar from "./Navbar";
import Footer from "./Footer";
import Banner from "./Banner";
import Marquee from "react-fast-marquee";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
            console.log(data);
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

            {/* tab list 1 */}
            <div className="mx-10">
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
            </div>

            {/* tab list 2 */}
            <div className="mx-10">
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
            </div>

            {/* tab list 3 */}
            <div className="mx-10">
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
            </div>


            {/* tab list 4 */}
            <div className="mx-10">
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
            </div>


            {/* tab list  5*/}
            <div className="mx-10">
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
            </div>


            <div className="grid grid-rows-2 lg:grid-cols-2 lg:max-w-7xl lg:mx-auto mt-6 items-center">
                <div className="text-3xl font-bold mx-auto text-center "> 
                    John Doe shared his resume for sample. Let us have a look
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
            </div>

            <div className="flex flex-col lg:lex-row gap-4 max-w-7xl mx-auto my-12  items-center justify-center">
                <div className="text-6xl">Tell us how did you feel to visit our site by swapping!</div>
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

