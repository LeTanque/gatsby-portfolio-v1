import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ProfileScroll from "./profile-scroll"



const IndexPage = () => {

    console.log('Image --> ', Image);
    return (
        <Layout>
            <SEO title="Home" />
            
            <ProfileScroll />
        </Layout>
    )
}

export default IndexPage
