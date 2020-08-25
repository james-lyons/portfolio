import React from 'react';
import '../../Styles.css';

const AboutMe = (props) => {
    return (
        <>
            <section id="about" className="callout about">
                <article className="section-wrap about-section">
                    <h2 className="about-h2">About Me</h2>
                    <img className="about-img" src="/assets/images/profile-image.jpg" alt=""/>
                    <p className="about-p">I'm a full-stack web developer with a love of solving problems wherever I can find them. I often find myself completely immersed in discovering creative and interesting solutions to things, such as trying to use recursion to solve pretty much anything I can get away with. I really enjoy learning new things and broadening my horizons; my ultimate goal is to always be growing and evolving.</p>
                </article>
            </section>
        </>
    );
};

export default AboutMe;