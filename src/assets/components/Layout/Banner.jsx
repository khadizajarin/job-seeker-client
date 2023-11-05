import { animated, useSpring } from '@react-spring/web'

const Banner = () => {
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
   
    return (
        <div >
            <div className="hero h-96" style={{backgroundImage: 'url(https://media.istockphoto.com/id/1349767442/photo/creative-female-graphic-designer-working-on-a-new-project-from-her-home-office.jpg?s=2048x2048&w=is&k=20&c=wtuXAyvWqEPutd6PhrRFUNvGeDPAhcSijdoKFtj4X3A=)'}}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
               
            <animated.h1 style={nameAnimation}>
                    <h1 className="mb-5 text-5xl font-bold">JobQuest</h1> 
                    <p className="mb-5">JobQuest is your ultimate destination for finding the ideal job and advancing your career. We connect job seekers with a wide range of opportunities, from entry-level positions to executive roles, in various industries and locations.</p>
                    <div className="flex">
                        <input type="text" placeholder="Search here" className="p-4 h-12 w-full rounded-l-full text-black" />
                        <button className="bg-gray-400 px-4 h-12 rounded-r-full">Search</button>
                    </div>
             </animated.h1>
            </div>
            </div> 
        </div>
    );
};

export default Banner;