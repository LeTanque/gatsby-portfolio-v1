import React from "react";
import { Link as LinkScroll } from 'react-scroll';
import { GoMail, GoInfo, GoRocket } from "react-icons/go";

const Nav = () => {

    return (
        <section className={`section__nav`} >
            <div className="block__navbar-nav" >
                <nav>
                    <LinkScroll activeClass="active" to="summary" spy={false} smooth={true} offset={5} duration={600} >
                        <li className="link__nav-link" >
                            <GoInfo className="link-icon" />
                        </li>
                    </LinkScroll>
                    <LinkScroll activeClass="active" to="projects" spy={false} smooth={true} offset={5} duration={800} >
                        <li className="link__nav-link" >
                            <GoRocket className="link-icon" />
                        </li>
                    </LinkScroll>
                    <LinkScroll activeClass="active" to="contact" spy={false} smooth={true} offset={5} duration={1000} >
                        <li className="link__nav-link" >
                            <GoMail className="link-icon" />
                        </li>
                    </LinkScroll>
                </nav>
            </div>
        </section>
    )
}

export default Nav
