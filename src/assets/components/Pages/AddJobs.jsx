
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2';

const AddJobs = () => {
        const handleAddJobs = event =>{
            event.preventDefault();
    
            const form = event.target;
            console.log(form);
    
            const employer = form.employer.value; 
            const title = form.title.value; 
            const postdate = form.postdate.value; 
            const jobCategory = form.jobCategory.value; 
            const jobPhoto = form.jobPhoto.value; 
            const description = form.description.value; 
            const deadline = form.deadline.value;  
            const salaryRange = form.salaryRange.value; 
            const applicantsNumber = form.applicantsNumber.value;  
    
            const newJob = {employer,title,postdate,jobCategory,jobPhoto, description, deadline,salaryRange,applicantsNumber};
    
            console.log(newJob);
    
            fetch('https://job-seeker-server-side-4fmki4zfv-khadizajarin.vercel.app/Jobs',{
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(newJob)
            })
            .then(res =>res.json())
            .then(data=> {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                    icon: "success",
                    title: 'Job details Added Successfully!',
                    timer: 2000
                  });
                }
                form.employer.value = '';
                form.title.value = '';
                form.postdate.value = '';
                form.jobCategory.value = '';
                form.jobPhoto.value = '';
                form.description.value = '';
                form.deadline.value = '';
                form.salaryRange.value = '';
                form.applicantsNumber.value = '';
            });
        }
    const {user} = useContext(AuthContext);
   
    const [startDate, setStartDate] = useState(new Date()); 
    return (
        <div>
            <Navbar></Navbar>
          
            <div className="hero py-16" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://media.istockphoto.com/id/503543202/photo/benefit-plus-positive.jpg?s=2048x2048&w=is&k=20&c=zIMuDyKX9xoO11yWyyAHwKpYRV5eGaE4Vy-MjV9V-sk=")'}}>
                <div className="hero-content  flex-col lg:flex-row rounded-full">
                    <div className="text-white text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Add a job to hire!</h1>
                        <p className="py-6">Let people know that you have a job vacancy</p>
                    </div>
                    <div className="card  w-5/6 lg:px-32 py-9 bg-base-100 rounded-full">
                        <form onSubmit={handleAddJobs} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Job Employer</span>
                                </label>
                                <input type="text" name="employer" defaultValue={user.email} className="input input-bordered rounded-full" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Job Title</span>
                                </label>
                                <input type="text" name="title" placeholder="Job title" className="input input-bordered rounded-full" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Job Posting Date</span>
                                </label>
                                <DatePicker name="postdate" className="input input-bordered rounded-full" required selected={new Date()}onChange={(date) => setStartDate(date)}/>

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Job Category</span>
                                </label>
                                <div className='flex flex-row'>
                                    <input className='mr-1' type="radio" name="jobCategory" id="remote" value="remote"/>
                                    <label className='mr-4' htmlFor="remote">Remote</label>
                                </div>

                                <div className='flex flex-row'>
                                    <input className='mr-1' type="radio" name="jobCategory" id="on-site" value="on-site"/>
                                    <label className='mr-4' htmlFor="on-site">On-site</label>
                                </div>

                                <div className='flex flex-row'>
                                    <input className='mr-1' type="radio" name="jobCategory" id="part-time" value="part-time"/>
                                    <label className='mr-4' htmlFor="part-time">Part time</label>
                                </div>

                                <div className='flex flex-row'>
                                    <input className='mr-1' type="radio" name="jobCategory" id="hybrid" value="hybrid"/>
                                    <label className='mr-4' htmlFor="hybrid">Hybrid</label>
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name="jobPhoto" placeholder="Photo related to job" className="input input-bordered rounded-full" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Job Description</span>
                                </label>
                                <input type="text" name="description" placeholder="Job description" className="input input-bordered rounded-full" required />
                            </div>

                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Application Deadline</span>
                            </label>
                            <DatePicker name="deadline" className="input input-bordered rounded-full" required  selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Salary Range</span>
                                </label>
                                <input type="text" name="salaryRange" placeholder="Salary Range" className="input input-bordered rounded-full" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">How many appliants have applied till now?</span>
                                </label>
                                <input type="number" name="applicantsNumber" defaultValue={0}  className="input input-bordered rounded-full" required />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-glass rounded-full mb-4">Post</button>
                                <button className="btn btn-glass rounded-full">Details</button>
                            </div>
                        </form>
                    </div>
                </div>    
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddJobs;