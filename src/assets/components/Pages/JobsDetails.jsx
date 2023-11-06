import { useContext, useEffect } from "react";
import Footer from "../Layout/Footer";
import Navbar from "../Layout/Navbar";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";



const JobsDetails = () => {
   const {user,loading, setLoading} = useContext(AuthContext);
    console.log(user);
    const detail = useLoaderData();
    const {_id, Job_Title} = detail;

    useEffect(() => {
        fetch(`http://localhost:5000/Jobs/${_id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error(error);
          });
      }, [_id,setLoading]);

    const deadline = detail.Application_Deadline;
    const currentDate = new Date().toISOString().split('T')[0];
    const isDatePassed = currentDate > deadline;

    const handleApply = () => {
        const name = user.displayName;
        const email = user.email;
        const applyJob  = { name, email, detail};
        if(detail.Employer_Name === user.email){
            return (Swal.fire({
                icon: "warning",
                title: 'This Job is added by you. You can not apply to this job',
                text: 'Try another job',
                timer: 2000
              }))
        }

        fetch('http://localhost:5000/applied',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(applyJob)
          })
          .then((res) => res.json())
          .then((data) => { 
            if(data.insertedId){
              setLoading(true);
              Swal.fire({
                icon: "success",
                title: 'CV sent to the employers email',
                text: 'See Applied jobs to see your applied jobs',
                timer: 2000
              });
            }
          })
          .catch((error) => {
            console.error(error);
          });
    }



    return (

        
        <div>
            <Navbar></Navbar>

            <div className="card lg:card-side bg-base-100 shadow-xl m-20">
                <figure><img className="w-56 h-56 m-4" src={detail.Picture_URL} alt="Album"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{detail.Job_Title}</h2>
                    <p>{detail.Job_Description}</p>
                    <p>{detail.Job_Category}</p>
                    <p>{detail.Salary_Range}</p>
                    <p> Posted on : {detail.Job_Posting_Date}</p>
                    <p> Posted By : {detail.Employer_Name}</p>
                    <p>Application Deadline : {detail.Application_Deadline}</p>
                    <p>Application till now : {detail.Job_Applicants_Number}</p>
                    <div className="card-actions justify-end">
                    
                    
                    {isDatePassed ? (
                        <button className="btn btn-glass rounded-full">Deadline has passed!</button>
                    ) : ( 
                        <>
                        <button className="btn btn-glass rounded-full" onClick={()=>document.getElementById('my_modal_1').showModal()}>Apply</button>
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Want to Apply?</h3>
                                <p className="py-4">Click to Submit Application to Send CV to Apply.</p>
                                <div className="">
                                    <form method="dialog">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Applicant name</span>
                                            </label>
                                            <input type="text" name="name" className="input input-bordered rounded-full" defaultValue={user.displayName} required />
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Applicant Email</span>
                                            </label>
                                            <input type="text" name="email" className="input input-bordered rounded-full" defaultValue={user.email} required />
                                        </div>
                                        <div className="flex mt-4">
                                        <button onClick={handleApply} className="btn btn-glass rounded-full">Submit Application</button>
                                        <button className="btn btn-glass rounded-full">Close</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </>     
                    )}
                    </div>
                </div>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default JobsDetails;