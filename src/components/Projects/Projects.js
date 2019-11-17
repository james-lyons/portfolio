import React from 'react';
import '../../Styles.css';

const Projects = (props) => {
    return (
        <>
            <section id="projects">
                <div id="projects-container" className="container">
                    <div className="col-md-12">
                        <div className="title-box text-center">
                            <h2 className="projects-h2">
                                Some of my recent projects
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="projects-div" augmented-ui="bl-clip r-clip-y br-round br-inset-clean exe">
                                <div className="projects-img" >
                                    <img src="/assets/images/Git-Sum-Dim-Sum.png" alt="" className="img-fluid" />
                                </div>
                                <div className="projects-content">
                                    <div className="col-sm-12">
                                        <h3 className="projects-h3">Git Sum Dim Sum</h3>
                                        <p className="projects-p">Git Sum Dim Sum is a crowd-sourced restaurant reviewing platform designed specifically for Dim Sum restaurants. It was created using Node and Express.js, React, Redux, MongoDB and Mongoose. It's completely responsive and has an admin page for admins to add new restaurants to the database and have access to restaurant and user data. </p>
                                        <div className="projects-p-div">
                                            <a className="projects-a" style={{cursor: "pointer"}} href="https://git-sum-dim-sum-react.herokuapp.com/" target="_blank" without rel="noopener noreferrer">Deployed App</a>
                                            <a className="projects-a" style={{cursor: "pointer"}} href="https://github.com/james-lyons/git-sum-dim-sum-react" target="_blank" without rel="noopener noreferrer">Front-End Repo</a>
                                            <a className="projects-a" style={{cursor: "pointer"}} href="https://github.com/james-lyons/git-sum-dim-sum" target="_blank" without rel="noopener noreferrer">Back-End Repo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="projects-div" augmented-ui="bl-clip r-clip-y br-round br-inset-clean exe">
                                <div className="projects-img">
                                    <img src="/assets/images/legal-eagles.png" alt="" className="img-fluid" />
                                </div>
                                <div className="projects-content">
                                    <div className="col-sm-12">
                                        <h3 className="projects-h3">Legal Eagles</h3>
                                        <p className="projects-p"> Legal Eagles is an Angies List inspired web app for those in need of legal representation. It also benefits attorneys in an increasingly saturated market. It utilizes Node, Express.js, MongoDB, React and Redux and has two account types a user can signup for. I also used EmailJS to securely send emails without the need of providing the information publically. </p>
                                        <div className="projects-p-div">
                                            <a className="projects-a" style={{cursor: "pointer"}} href="https://legal-eagles-react.herokuapp.com/" target="_blank" without rel="noopener noreferrer">Deployed App</a>
                                            <a className="projects-a" style={{cursor: "pointer"}} href="https://github.com/james-lyons/legal_eagles_react" target="_blank" without rel="noopener noreferrer">Front-End Repo</a>
                                            <a className="projects-a" style={{cursor: "pointer"}} href="https://github.com/james-lyons/legal-eagles" target="_blank" without rel="noopener noreferrer">Back-End Repo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="projects-div" augmented-ui="bl-clip r-clip-y br-round br-inset-clean exe">
                                <div className="projects-img">
                                    <img src="/assets/images/karuta.png" alt="" className="img-fluid" />
                                </div>
                                <div className="projects-content">
                                    <div className="col-sm-12">
                                        <h3 className="projects-h3">Karuta!</h3>
                                        <p className="projects-p">Karuta is a game app I made based on a very traditional, centuries old Japanese card game that's recently become more popular as it has been featured in popular media. It utilizes Node, Express.js, MongoDB, and React, has full C.R.U.D. on multiple resources, and a game logic designed entirely to utilize recursion. Requires signficiant attention to its responsiveness. </p>
                                        <div className="projects-p-div">
                                            <a className="projects-a" style={{cursor: "pointer"}} href="https://karuta-react.herokuapp.com/" target="_blank" without rel="noopener noreferrer">Deployed App</a>
                                            <a className="projects-a" style={{cursor: "pointer"}} href="https://github.com/james-lyons/karuta" target="_blank" without rel="noopener noreferrer">Front-End Repo</a>
                                            <a className="projects-a" style={{cursor: "pointer"}} href="https://github.com/james-lyons/karuta_server" target="_blank" without rel="noopener noreferrer">Back-End Repo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="projects-div" augmented-ui="bl-clip r-clip-y br-round br-inset-clean exe">
                                <div className="projects-img">
                                    <img src="/assets/images/my-baking-pal-wireframe.png" alt="" className="img-fluid" />
                                </div>
                                <div className="projects-content">
                                    <div className="col-sm-12">
                                        <h3 className="projects-h3">MyBakingPal</h3>
                                        <p className="projects-p">MyBakingPal is the next project I'll be working on. It'll have a profile page with a gallery section for users to post photos of their latest cullinary masterpieces, a recipie page for users to store their favorite confections to create, an events page for users to create and sign-up to local co-op baking extravaganzas, and an admin page to sort user requests (to create the events). I'll be building it utilizing React Native and Redux to render the frontend, with webpack and babel, as I'd like to be able to transition this into a mobile app, with Python and Django to serve the backend. I'd also like to finally be able to utilize google maps (to provide directions for baking events) as I've tried in multiple projects but I've had to scrap the idea as it posed a security risk I couldn't deal with given the technologies I was using.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;