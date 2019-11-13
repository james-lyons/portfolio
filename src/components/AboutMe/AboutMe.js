import React from 'react';
import '../../Styles.css';

const AboutMe = (props) => {
    return (
        <>
            <section id="about" class="callout about">
                <article class="section-wrap about-section">
                    <h2 class="about-h2">About Me</h2>
                    <img class="about-img" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/59450085_2225596747704231_6785894177008779264_o.jpg?_nc_cat=103&_nc_oc=AQmsTcDhm8oS2UU05ldxcvLiG3A2Zw0n4Ut_UQMwUAaB_We-wo4S540ibsuQLybegXtdOOYZPxygX9v7Qdj_lUNU&_nc_ht=scontent-sjc3-1.xx&oh=822d03b34038b82d534198230472e09d&oe=5E3DDD65" alt=""/>
                    <p class="about-p">I'm a full-stack web developer with a love of solving problems wherever I can find them. I often find myself completely immersed in discovering creative and interesting solutions to things, such as trying to use recursion to solve pretty much anything I can get away with. I really enjoy learning new things and broadening my horizons; my ultimate goal is to always be growing and evolving.</p>
                </article>
            </section>
        </>
    );
};

export default AboutMe;