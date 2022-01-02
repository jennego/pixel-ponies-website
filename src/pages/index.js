import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Pixel Ponies</h1>
    <p> A collection of equestrian-themed and related apps and games.</p>
    <p>
      Just because you spend a lot of time in a barn doesn't mean your tools
      need to be from a cave!
    </p>
  </Layout>
)

export default IndexPage
