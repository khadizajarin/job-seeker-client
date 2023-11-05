import Footer from "./Footer";
import Navbar from "./Navbar";


const Blogs = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="m-10">

            <h1 className="font-bold">Access Token</h1>
            An access token is a short-lived, temporary token that is used to grant access to specific resources or actions on a server or API.

            <h1 className="font-bold">Refresh Token</h1>
            A refresh token is a long-lived token used to obtain a new access token after the current access token expires.

            <h1 className="font-bold">How they work together:</h1>

            - When a user logs in or authorizes an application, they receive an access token and a refresh token. <br />
            - The access token is used for making authenticated requests to protected resources on the server. <br />
            - When the access token expires, the client can use the refresh token to obtain a new access token without the need for the user to re-enter their credentials. <br />
            - The server validates the refresh token and issues a new access token. <br />

            <h1 className="font-bold">Storing Tokens on the Client-Side</h1>
            - Access tokens should be stored in a secure manner, but they are often stored in memory or a secure storage mechanism such as a session or a secure cookie. <br />
            - Refresh tokens must be stored securely because they have a longer lifespan. They are usually stored in a secure HTTP-only cookie or local storage. <br />

            <h1 className="font-bold">Express.js</h1>
            Express.js is a popular web application framework for Node.js that simplifies the development of server-side applications and APIs. It provides a set of robust features for building web and mobile applications, including routing, middleware support, request handling, and more.


            <h1 className="font-bold">NextJS</h1>
            NestJS is a progressive Node.js framework for building efficient, scalable, and maintainable server-side applications. It is often used for building APIs and microservices. NestJS is built on top of Express.js and provides a structured architecture inspired by Angular, making it easy to organize and scale your server-side code. It uses TypeScript as its primary language and offers features like dependency injection, decorators, and a modular architecture to build powerful and maintainable server-side applications.
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;