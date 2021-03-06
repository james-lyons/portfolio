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
                                <div className="projects-img">
                                    <a href="https://www.proclips.io/" target="_blank" without rel="noopener noreferrer"><img src="/assets/images/proclips-image.png" alt="" className="img-fluid" /></a>
                                </div>
                                <div className="projects-content">
                                    <div className="col-sm-12">
                                        <h3 className="projects-h3">ProClips</h3>
                                        <p className="projects-p">ProClips is my latest project. It's a social media platform inspired by tic-tok for gaming enthusiasts to share memorable clips of their awesome gameplay. The core technologies utilized are Node, Express.js, MongoDB, React, Typescript, and Webpack. Additionally, I used multiple Amazon Web Services, including AWS EC2, S3, Amplify, and SES to host the front-end, back-end, store heavier data, and send emails. The site includes many features and resources, large and small, including full CRUD functionality on user profiles, posts, comments, and replies, a dark mode, email verification and password reset, and responsive UI.</p>
                                                                                <div className="projects-p-div">
                                            <a className="projects-a" href="https://www.proclips.io/" target="_blank" without rel="noopener noreferrer">Deployed App</a>
                                            <a className="projects-a" href="https://github.com/james-lyons/pro_clips_front_end" target="_blank" without rel="noopener noreferrer">Front-End Repo</a>
                                            <a className="projects-a" href="https://github.com/james-lyons/pro_clips" target="_blank" without rel="noopener noreferrer">Back-End Repo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="projects-div" augmented-ui="bl-clip r-clip-y br-round br-inset-clean exe">
                                <div className="projects-img">
                                    <a href="https://karuta-react.herokuapp.com/" target="_blank" without rel="noopener noreferrer"><img src="/assets/images/karuta.png" alt="" className="img-fluid" /></a>
                                </div>
                                <div className="projects-content">
                                    <div className="col-sm-12">
                                        <h3 className="projects-h3">Karuta!</h3>
                                        <p className="projects-p">Karuta was my first full-stack project. Karuta is a game app I made based on a very traditional, centuries old Japanese card game that's recently become more popular as it has been featured in popular media. It utilizes Node, Express.js, MongoDB, and React, has full C.R.U.D. on multiple resources, and a game logic designed entirely to utilize recursion. Requires signficiant attention to its responsiveness. </p>
                                        <div className="projects-p-div">
                                            <a className="projects-a" href="https://karuta-react.herokuapp.com/" target="_blank" without rel="noopener noreferrer">Deployed App</a>
                                            <a className="projects-a" href="https://github.com/james-lyons/karuta" target="_blank" without rel="noopener noreferrer">Front-End Repo</a>
                                            <a className="projects-a" href="https://github.com/james-lyons/karuta_server" target="_blank" without rel="noopener noreferrer">Back-End Repo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="projects-div" augmented-ui="bl-clip r-clip-y br-round br-inset-clean exe">
                                <div className="projects-img" >
                                    <a href="https://git-sum-dim-sum-react.herokuapp.com/" target="_blank" without rel="noopener noreferrer"><img src="/assets/images/Git-Sum-Dim-Sum.png" alt="" className="img-fluid" /></a>
                                </div>
                                <div className="projects-content">
                                    <div className="col-sm-12">
                                        <h3 className="projects-h3">Git Sum Dim Sum</h3>
                                        <p className="projects-p">Git Sum Dim Sum is a crowd-sourced restaurant reviewing platform designed specifically for Dim Sum restaurants. It was created using Node and Express.js, React, Redux, MongoDB and Mongoose. It's completely responsive and has an admin page for admins to add new restaurants to the database and have access to restaurant and user data. </p>
                                        <div className="projects-p-div">
                                            <a className="projects-a" href="https://git-sum-dim-sum-react.herokuapp.com/" target="_blank" without rel="noopener noreferrer">Deployed App</a>
                                            <a className="projects-a" href="https://github.com/james-lyons/git-sum-dim-sum-react" target="_blank" without rel="noopener noreferrer">Front-End Repo</a>
                                            <a className="projects-a" href="https://github.com/james-lyons/git-sum-dim-sum" target="_blank" without rel="noopener noreferrer">Back-End Repo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="projects-div" augmented-ui="bl-clip r-clip-y br-round br-inset-clean exe">
                                <div className="projects-img">
                                    <a href="https://legal-eagles-react.herokuapp.com/" target="_blank" without rel="noopener noreferrer"><img src="/assets/images/legal-eagles.png" alt="" className="img-fluid" /></a>
                                </div>
                                <div className="projects-content">
                                    <div className="col-sm-12">
                                        <h3 className="projects-h3">Legal Eagles</h3>
                                        <p className="projects-p"> Legal Eagles is an Angies List inspired web app for those in need of legal representation. It also benefits attorneys in an increasingly saturated market. It utilizes Node, Express.js, MongoDB, React and Redux and has two account types a user can signup for. I also used EmailJS to securely send emails without the need of providing the information publically. </p>
                                        <div className="projects-p-div">
                                            <a className="projects-a" href="https://legal-eagles-react.herokuapp.com/" target="_blank" without rel="noopener noreferrer">Deployed App</a>
                                            <a className="projects-a" href="https://github.com/james-lyons/legal_eagles_react" target="_blank" without rel="noopener noreferrer">Front-End Repo</a>
                                            <a className="projects-a" href="https://github.com/james-lyons/legal-eagles" target="_blank" without rel="noopener noreferrer">Back-End Repo</a>
                                        </div>
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