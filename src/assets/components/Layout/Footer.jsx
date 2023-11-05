

const Footer = () => {
    return (
        <footer className="footer p-10 text-white bg-black ">
        <aside>
            <img className="w-8 rounded-full border" src="https://media.istockphoto.com/id/1402623660/photo/glass-lowercase-letter-e.jpg?s=2048x2048&w=is&k=20&c=fR_rnKVqJBv3pkHJgfDBtQJSB9oyl7PzWMfe8fL_BAE=" alt="" />
            <p>JobQuest<br/>Your Path to the Perfect Career</p>
        </aside> 
        <nav>
            <header className="footer-title">Services</header> 
            <a className="link link-hover">Branding</a> 
            <a className="link link-hover">Design</a> 
            <a className="link link-hover">Marketing</a> 
            <a className="link link-hover">Advertisement</a>
        </nav> 
        <nav>
            <header className="footer-title">Company</header> 
            <a className="link link-hover">About us</a> 
            <a className="link link-hover">Contact</a> 
            <a className="link link-hover">Jobs</a> 
            <a className="link link-hover">Press kit</a>
        </nav> 
        <nav>
            <header className="footer-title">Legal</header> 
            <a className="link link-hover">Terms of use</a> 
            <a className="link link-hover">Privacy policy</a> 
            <a className="link link-hover">Cookie policy</a>
        </nav>
        </footer>
    );
};

export default Footer;