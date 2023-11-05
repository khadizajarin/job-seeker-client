
import Navbar from "./Navbar";
import Footer from "./Footer";
import Banner from "./Banner";
import Marquee from "react-fast-marquee";


const Home = () => {
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
            <Footer></Footer>
        </div>
    );
};

export default Home;