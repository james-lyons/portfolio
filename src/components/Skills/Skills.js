import React from 'react';
import '../../Styles.css';

const Skills = (props) => {
    return (
        <>
            <section id="skills">
                <div id="skills-container" className="container">
                    <div className="col-sm-12">
                        <div className="title-box text-center">
                            <h2 className="skills-h2">Skills</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="skills-div" augmented-ui="bl-clip r-clip-y br-round br-inset-clean exe">
                                <div className="col-sm-12">
                                    <h3 className="skills-h3">Languages and Frameworks</h3>
                                    <p className="col-md-12 skills-p">CSS, HTML, JavaScript, Typescript, React, Redux, jQuery, Node, Express, Python</p>
                                    <div className="col-md-12">
                                        <img className="skills-icon" src="assets/icons/html5-icon.png" alt=""/>
                                        <img className="skills-icon" src="assets/icons/css3-icon.png" alt=""/>
                                        <img className="skills-icon" src="assets/icons/typescript.png" alt=""/>
                                        <img className="skills-icon" src="assets/icons/javascript-icon.svg" alt=""/>
                                        <img className="skills-icon" src="assets/icons/node-icon.jpg" alt=""/>
                                        <img className="skills-icon" src="assets/icons/react.png" alt=""/>
                                        <img className="skills-icon" src="assets/icons/jquery-icon.png" alt=""/>
                                        <img className="skills-icon" src="assets/icons/python.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="skills-div" augmented-ui="bl-clip r-clip-y br-round br-inset-clean exe">
                                <div className="col-sm-12">
                                    <h3 className="skills-h3">Databases</h3>
                                    <p className="col-md-12 skills-p">MongoDB, Postgres, NoSQL, SQL, </p>
                                    <div className="col-md-12">
                                        <img className="skills-icon" src="./assets/icons/mongodb.png" alt="" />
                                        <img className="skills-icon" src="./assets/icons/postgresql.png" alt="" />
                                        <img className="skills-icon" src="./assets/icons/nosql-icon.png" alt="" />
                                        <img className="skills-icon" src="./assets/icons/sql-icon.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="skills-div" augmented-ui="bl-clip r-clip-y br-round br-inset-clean exe">
                                <div className="col-sm-12">
                                    <h3 className="skills-h3">Management and Deployment</h3>
                                    <p className="col-sm-12 skills-p">Git, GitHub, Heroku, CommandLine</p>
                                    <div className="col-sm-12">
                                        <img className="skills-icon" src="./assets/icons/command-line-icon.png" alt="" />
                                        <img className="skills-icon" src="./assets/icons/git-icon.png" alt="" />
                                        <img className="skills-icon" src="./assets/icons/github-icon.png" alt="" />
                                        <img className="skills-icon" src="./assets/icons/heroku-icon.png" alt="" />	
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="skills-div" augmented-ui="bl-clip r-clip-y br-round br-inset-clean exe">
                                <div className="col-sm-12">
                                    <h3 className="skills-h3">Methodologies</h3>
                                    <p className="col-sm-12 skills-p">User Stories, Wire Framing, Object-Oriented Programming, Functional Programming, Response Design, </p>
                                    <div className="col-sm-12">
                                        <img className="skills-icon" src="./assets/icons/trello-icon.png" alt="" />
                                        <img className="skills-icon" src="./assets/icons/wireframe-icon.svg" alt=""/>
                                        <img className="skills-icon" src="./assets/icons/object-oriented-programming-icon.png" alt="" />
                                        <img className="skills-icon" src="./assets/icons/functional-programming-icon.png" alt="" />
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

export default Skills;