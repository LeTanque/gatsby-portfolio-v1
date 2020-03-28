import React from "react"
import { Link } from "gatsby"

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
            <Link to="/profile-scroll/">Go to page 2</Link>
        </Layout>
    )
}

export default IndexPage
