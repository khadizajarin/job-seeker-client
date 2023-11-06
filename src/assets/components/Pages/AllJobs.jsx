
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import { useEffect, useState } from 'react';
import { animated, useSpring } from '@react-spring/web'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

const AllJobs = () => {

  const [searchInput, setSearchInput] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);
  
    const nameAnimation = useSpring({
        from: {
          opacity: 0,
          transform: 'translateY(100px)',
        },
        to: {
          opacity: 1, 
          transform: 'translateY(0)', 
        },
        config: { tension: 100, friction: 20 }, 
      });
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
        <div className="flex m-10">
          <input type="text" placeholder="Search by title" className="p-4 h-12 w-full rounded-l-full text-black" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}
          />
          <button className="bg-gray-700 px-4 h-12 rounded-r-full" onClick={() => {
              const filtered = jobs.filter(
                (job) =>
                  job.Job_Title.toLowerCase().includes(searchInput.toLowerCase())
              );
              setFilteredJobs(filtered);
            }}
          >Search</button>
        </div>

        <div>
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div key={job._id}>
            <animated.h1 style={nameAnimation}>
                <div  className="card lg:card-side p-10 bg-zinc-300 lg:mx-40 mb-6">
                    <figure><img className='w-60 h-60' src={job.Picture_URL} alt="Album"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">{job.Job_Title}</h2>
                        <p>{job.Job_Description}.</p>
                        <p></p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-glass rounded-full"> <Link to={`/allJobs/${job._id}`}>Details</Link></button>
                        </div>
                    </div>
                </div>
            </animated.h1>    
        </div>
          ))
        ) : (
          jobs.map((job) => (
            <div key={job._id}>
                <animated.h1 style={nameAnimation}>
                    <div  className="card lg:card-side p-10 bg-zinc-300 lg:mx-40 mb-6">
                        <figure><img className='w-60 h-60' src={job.Picture_URL} alt="Album"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">{job.Job_Title}</h2>
                            <p>{job.Job_Description}.</p>
                            <p></p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-glass rounded-full"> <Link to={`/allJobs/${job._id}`}>Details</Link></button>
                            </div>
                        </div>
                    </div>
                </animated.h1>    
            </div>
          ))
        )}
      </div>
      
        {/* <div>
          {jobs.map((job) => (
            <div key={job._id}>
                <animated.h1 style={nameAnimation}>
                    <div  className="card lg:card-side p-10 bg-zinc-300 lg:mx-40 mb-6">
                        <figure><img className='w-60 h-60' src={job.Picture_URL} alt="Album"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">{job.Job_Title}</h2>
                            <p>{job.Job_Description}.</p>
                            <p></p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-glass rounded-full"> <Link to={`/allJobs/${job._id}`}>Details</Link></button>
                            </div>
                        </div>
                    </div>
                </animated.h1>    
            </div>
          ))}
        </div> */}
        <Footer></Footer>
      </div>
      );
};
export default AllJobs;