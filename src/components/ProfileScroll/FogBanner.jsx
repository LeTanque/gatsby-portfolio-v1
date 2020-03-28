import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

const FogBanner = () => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }
    `)
    
    const [blockGreeting, setBlockGreeting] = useState({
        display: false,
        delay: 1200,
    })

    // Fog delay and transition styling
    const [fogScrollSettings] = useState({ fadeIn: 3333, delay: 600 })
    const foggyLettersClear = {
        opacity: 0,
        transition: `${fogScrollSettings.fadeIn}ms ease opacity 0ms`,
    }
    const foggyLettersOpaque = {
        opacity: 1,
        transition: `${fogScrollSettings.fadeIn}ms ease opacity 0ms`,
    }
    const [fogScrollStyle, setFogScrollStyle] = useState({
        ...foggyLettersClear,
    })
    const fogScrolls = [
        { pos: "scroller-top", message: "can you see me?" },
        { pos: "scroller-middle", message: "say hi! frankie.martinez@gmail.com" },
    ]

    // loading trigger to turn fog on
    useEffect(() => {
        const timer = setTimeout(() => {
            setFogScrollStyle({ ...foggyLettersOpaque })
        }, fogScrollSettings.delay)
        return () => clearTimeout(timer)
    }, [])

    // loading trigger to display block greeting
    useEffect(() => {
        const timer = setTimeout(() => {
            setBlockGreeting({ ...blockGreeting, display: true })
        }, blockGreeting.delay)
        return () => clearTimeout(timer)
    }, [])

    return (
        <section className="section__foggy-container">
            <section
                className="section__foggy"
                style={{
                    backgroundImage: `url(../images/matthew-ronder-seid-xYd99V3S5aI-unsplash.jpg)`,
                }}
            >
                <div className="block__greeting">
                    {blockGreeting.display ? (
                        <strong>
                            {data.site.siteMetadata.title} 
                            <div className="block__subtitle">
                                {data.site.siteMetadata.description} 
                            </div>
                        </strong>
                    ) : null}
                </div>
            </section>

            {fogScrolls.map((scroll, index) => (
                <section
                    className={`section__scroller-container ${scroll.pos}`}
                    key={index}
                    style={fogScrollStyle}
                >
                    <div className="block__scroller">
                        <strong>{scroll.message}</strong>
                    </div>
                </section>
            ))}
        </section>
    )
}

export default FogBanner
