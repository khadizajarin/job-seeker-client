import { useContext, useEffect, useState } from "react";
import Footer from "../Layout/Footer";
import Navbar from "../Layout/Navbar";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyJobs = () => {

    const [jobs, setJobs] = useState([]);
    const {user} = useContext(AuthContext);

    // const noJobsAdded = job.Employer_Name !== user.email ? (
    //   <p className="text-center font-bold text-6xl">No jobs added by you. Go to <Link className="text-blue-900" to='/addJobs'>Add a job</Link> to your posted job</p>
    // ): (<p></p>)
     

    useEffect(() => {
        fetch('https://job-seeker-server-side.vercel.app/jobs', {
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

      const handleDeleteJob = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://job-seeker-server-side.vercel.app/Jobs/${_id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        Swal.fire(
                            'Deleted!',
                            'Application has been deleted from Application List',
                            'success'
                        )
                    }
                })
            }
          })
    }

   
    return (
        <div>
            <Navbar></Navbar>
            <div>
              <h1 className='text-4xl font-bold my-6 text-center'>Your Posted Jobs:</h1>
            </div>
            <div>
              {jobs.map((job) => (
                job.Employer_Name === user.email && (
                  <div key={job._id} className="hero bg-gray-200">
                    <div className="hero-content flex-col lg:flex-row-reverse    gap-10">
                      <img src={job.Picture_URL} className="w-56 h-56 rounded-lg shadow-2xl" />
                      <div>
                        <h1 className="text-5xl font-bold">{job.Job_Title}</h1>
                        <p className="py-6 text-3xl">{job.Job_Description}</p>
                        <p>{job.Job_Category}</p>
                        <p>{job.Salary_Range}</p>
                        <p>Posted on: {job.Job_Posting_Date}</p>
                        <p>Posted By: {job.Employer_Name}</p>
                        <p>Application Deadline: {job.Application_Deadline}</p>
                        <p>Applications till now: {job.Job_Applicants_Number}</p>
                        <button className="btn btn-glass rounded-full mt-4" onClick={() => handleDeleteJob(job._id)}>Delete</button>
                        <button className="btn btn-glass rounded-full mt-4" ><Link to={`/update/${job._id}`}>Update</Link></button>
                      </div>
                    </div>
                  </div>
                ) 
              ))   }
            </div>
            
            
            

            

            
            <Footer></Footer>
        </div>
    );
};

export default MyJobs;