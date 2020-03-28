import React from "react";
import { useState } from "react";
import { Element } from 'react-scroll';

import FogBanner from "../components/ProfileScroll/FogBanner";
import Projects from "../components/ProfileScroll/Projects/Projects";
import Summary from "../components/ProfileScroll/Summary";
import Contact from "../components/ProfileScroll/Contact";

import projects from "../data/Projects";
import summary from "../data/Summary";
import contact from "../data/Contact";
import Nav from "../components/nav"


const FadeInSection = props => {
    const { frame } = props;
    
    const [ isVisible, setVisible ] = useState(false);
    
    return (
        <div
            className={`block__fade-in-section ${frame ? frame : ""} ${isVisible ? "is-visible" : "is-visible"}`}
        >
            {props.children}
        </div>
    );
}

const ProfileScroll = () => {
    

    return (
        <>
            <Nav /> 
            <section className="section__profile-scroll">
                <FadeInSection frame="fog-banner" >
                    <FogBanner className="block__scroll-box" />
                </FadeInSection>

                <FadeInSection frame="simplebox" >
                    <div className="block__scroll-box one" ></div>
                </FadeInSection>
                
                <FadeInSection frame="summary" >
                    <Element  name="summary" className="element__profile-scroll" >
                        <Summary className="block__scroll-box" summary={summary} />
                    </Element>
                </FadeInSection>

                <FadeInSection frame="projects" >
                    <Element  name="projects" className="element__profile-scroll"  >
                        <Projects className="block__scroll-box" projects={projects} />
                    </Element>
                </FadeInSection>

                <FadeInSection frame="contact" >
                    <Element  name="contact" className="element__profile-scroll"  >
                        <Contact className="block__scroll-box" contact={contact} />
                    </Element>
                </FadeInSection>

            </section>
        </>
    );
}


export default ProfileScroll;
