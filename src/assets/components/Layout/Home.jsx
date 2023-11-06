
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
            <Footer></Footer>
        </div>
    );
};

export default Home;

