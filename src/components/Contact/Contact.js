import React from 'react';
import '../../Styles.css';

const Contacts = (props) => {
    return (
        <>
            <section id="contact">
                <div className="wrap">
                    <div className="social-links">
                        <h2 className="contact-h2">Wanna get in touch?</h2>
                        <div className="social-section-wrapper">
                            <div className="social-section-div"><a href="./files/JamesLyonsResume.docx"><i className="fa fa-file-pdf-o fa-3x social-icon" aria-hidden="true"></i><p className="social-p">Resume</p></a></div>
                            <div><a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=jrlyons2014@gmail.com" rel="noopener noreferrer" target="_blank"><i className="fa fa-envelope fa-3x social-icon" aria-hidden="true"></i><p className="social-p">Email</p></a></div>
                            <div><a href="https://github.com/james-lyons" rel="noopener noreferrer" target="_blank"><i className="fa fa-github-square fa-3x social-icon" aria-hidden="true"></i><p className="social-p">GitHub</p></a></div>
                            <div><a href="https://www.linkedin.com/in/james-lyons1/" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin-square fa-3x social-icon" aria-hidden="true"></i><p className="social-p">LinkedIn</p></a></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contacts;