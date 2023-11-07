
import { useContext, useEffect, useState } from 'react';
import Footer from '../Layout/Footer';
import Navbar from '../Layout/Navbar';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { usePDF } from 'react-to-pdf';

const AppliedJobs = () => {
    const {user} = useContext(AuthContext);
    const [applications, setApplications] = useState([]);

    const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});

    useEffect(() => {
        fetch('https://job-seeker-server-side.vercel.app/applied', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        })
          .then((res) => res.json())
          .then((data) => {
            setApplications(data);
          })
          .catch((error) => {
            console.error(error);
          });
      }, [applications]);

      const handleDeleteApplication = (_id) => {
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
                fetch(`https://job-seeker-server-side.vercel.app/applied/${_id}`, {
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

    const [category, setCategory] = useState('all');
    // const appli = category === 'all' ? applications : applications.map(application => application.email === user.email);
    // .filter(application => application.detail.Job_Category === category);
    
  

    return (
        <div>
            <Navbar></Navbar>

            
            <div>
              <h1 className='text-center text-xl mt-8'>Filter by category</h1>
                <div className='flex flex-row justify-center gap-10 mt-4 text-lg'>
                  <label>
                    <input
                      type="radio"
                      name="jobFilter"
                      value="all"
                      checked={category === 'all'}
                      onChange={() => setCategory('all')}
                    />
                    All
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="jobFilter"
                      value="Remote"
                      checked={category === 'Remote'}
                      onChange={() => setCategory('Remote')}
                    />
                    Remote
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="jobFilter"
                      value="Hybrid"
                      checked={category=== 'Hybrid'}
                      onChange={() => setCategory('Hybrid')}
                    />
                    Hybrid
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="jobFilter"
                      value="On Site"
                      checked={category=== 'On Site'}
                      onChange={() => setCategory('On Site')}
                    />
                    Onsite
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="jobFilter"
                      value="Part Time"
                      checked={category=== 'Part Time'}
                      onChange={() => setCategory('Part Time')}
                    />
                    Part Time
                  </label>
                  
                </div>

            </div>




            <div>
              <h1 className='text-4xl font-bold my-6 text-center'>Your Applications:</h1>
            </div>
            <div ref={targetRef}>
                {applications
                .map(application => (application.email === user.email && (
                        <div key={application._id} className="hero  bg-gray-200">
                          <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                            <img src={application.detail.Picture_URL} className="w-56 h-56 rounded-lg shadow-2xl" />
                            <div>
                              <h1 className="text-5xl font-bold">{application.detail.Job_Title}</h1>
                              <p className="py-6 text-3xl">{application.detail.Job_Description}</p>
                              <p>{application.detail.Job_Category}</p>
                              <p>{application.detail.Salary_Range}</p>
                              <p> Posted on : {application.detail.Job_Posting_Date}</p>
                              <p> Posted By : {application.detail.Employer_Name}</p>
                              <p>Application Deadline : {application.detail.Application_Deadline}</p>
                              <p>Application till now : {application.detail.Job_Applicants_Number}</p>
                              <button className="btn btn-glass rounded-full mt-4" onClick={() => handleDeleteApplication(application._id)}>Delete</button>
                              <button className="btn btn-glass rounded-full mt-4" onClick={() => toPDF()}>Download PDF</button>
                            </div>
                          </div>
                        </div>
                )
                ))}
            </div>
            {/* <div>
         <button onClick={() => toPDF()}>Download PDF</button>
         <div ref={targetRef}>
            Content to be generated to PDF
         </div>
      </div> */}
            <Footer></Footer>
        </div>
    );
};

export default AppliedJobs;