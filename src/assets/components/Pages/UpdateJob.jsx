
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';



const UpdateJob = () => {
    const job = useLoaderData();
    console.log(job);
    const {_id, jobCategory, Job_Title, Application_Deadline, Picture_URL, Employer_Name,Salary_Range ,Job_Applicants_Number,Job_Description, Job_Posting_Date} = job; 
    const [startDate, setStartDate] = useState(new Date()); 

    const handleUpdateJobs = event =>{
        
                event.preventDefault();
        
                const form = event.target;
                const employer = form.employer.value; 
                const title = form.title.value; 
                const postdate = form.postdate.value; 
                const jobCategory = form.jobCategory.value; 
                const jobPhoto = form.jobPhoto.value; 
                const description = form.description.value; 
                const deadline = form.deadline.value;  
                const salaryRange = form.salaryRange.value; 
                const applicantsNumber = form.applicantsNumber.value;  
        
                const updatedJob = {employer,title,postdate,jobCategory,jobPhoto, description, deadline,salaryRange,applicantsNumber};
        
                console.log(updatedJob);

                fetch(`https://job-seeker-server-side.vercel.app/jobs/${_id}`,{
                    method: 'PUT',
                    headers: {
                        'content-type' : 'application/json'
                    },
                    body: JSON.stringify(updatedJob)
                })
                .then(res =>res.json())
                .then(data=> {
                    console.log(data);
                    if(data.modifiedCount > 0){
                        Swal.fire({
                        icon: "success",
                        title: 'Job Updated Successfully!',
                        timer: 2000
                    });
                    }    
                });
        
                
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero py-16" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://media.istockphoto.com/id/503543202/photo/benefit-plus-positive.jpg?s=2048x2048&w=is&k=20&c=zIMuDyKX9xoO11yWyyAHwKpYRV5eGaE4Vy-MjV9V-sk=")'}}>
                <div className="hero-content  flex-col lg:flex-row rounded-full">
                    <div className="text-white text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Update your hiring job information</h1>
                        <p className="py-6">Let people know if they still have opportunity</p>
                    </div>
                    <div className="card  w-5/6 lg:px-32 py-9 bg-base-100 rounded-full">
                        <form onSubmit={handleUpdateJobs} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Job Employer</span>
                                </label>
                                <input type="text" name="employer" defaultValue={job.Employer_Name} className="input input-bordered rounded-full" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Job Title</span>
                                </label>
                                <input type="text" name="title" defaultValue={job.Job_Title} placeholder="Job title" className="input input-bordered rounded-full" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Job Posting Date</span>
                                </label>
                                <DatePicker name="postdate" defaultValue={job.Job_Posting_Date} className="input input-bordered rounded-full" required selected={new Date()}onChange={(date) => setStartDate(date)}/>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Job Category</span>
                                </label>

                                <div className='flex flex-row'>
                                    <input
                                    className='mr-1'
                                    type="radio"
                                    name="jobCategory"
                                    id="remote"
                                    value="remote"
                                    // defaultValue={job.Job_Category === "Remote"}
                                    />
                                    <label className='mr-4' htmlFor="remote">Remote</label>
                                </div>

                                <div className='flex flex-row'>
                                    <input
                                    className='mr-1'
                                    type="radio"
                                    name="jobCategory"
                                    id="on-site"
                                    value="on-site"
                                    // defaultValue={job.Job_Category === "On Site"}
                                    />
                                    <label className='mr-4' htmlFor="on-site">On-site</label>
                                </div>

                                <div className='flex flex-row'>
                                    <input
                                    className='mr-1'
                                    type="radio"
                                    name="jobCategory"
                                    id="hybrid"
                                    value="hybrid"
                                    // defaultValue={job.Job_Category === "hybrid"}
                                    />
                                    <label className='mr-4' htmlFor="hybrid">Hybrid</label>
                                </div>

                                <div className='flex flex-row'>
                                    <input
                                    className='mr-1'
                                    type="radio"
                                    name="jobCategory"
                                    id="part time"
                                    value="part time"
                                    // defaultValue={job.Job_Category === "part time"}
                                    />
                                    <label className='mr-4' htmlFor="part time">Part time</label>
                                </div>

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name="jobPhoto" defaultValue={job.Picture_URL} placeholder="Photo related to job" className="input input-bordered rounded-full" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Job Description</span>
                                </label>
                                <input type="text" name="description" defaultValue={job.Job_Description} placeholder="Job description" className="input input-bordered rounded-full" required />
                            </div>

                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Application Deadline</span>
                            </label>
                            <DatePicker name="deadline" defaultValue={job.Application_Deadline} className="input input-bordered rounded-full" required  selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Salary Range</span>
                                </label>
                                <input type="text" name="salaryRange" defaultValue={job.Salary_Range} placeholder="Salary Range" className="input input-bordered rounded-full" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">How many appliants have applied till now?</span>
                                </label>
                                <input type="number" name="applicantsNumber" defaultValue={job.Job_Applicants_Number}  className="input input-bordered rounded-full" required />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-glass rounded-full mb-4">Update</button>
                            </div>
                        </form>
                    </div>
                </div>    
            </div>
            <Footer></Footer>
        </div>
    );
};

export default UpdateJob;