import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1 className="heading">Pixel Ponies</h1>
    <p> A collection of equestrian-themed and related apps and games.</p>
    <p>
      Just because you spend a lot of time in a barn doesn't mean your tools and
      fun need to be from a cave!
    </p>
    <p> WASD or arrow keys to move horse!</p>

    <div style={{ border: "2px dashed", height: "500px", width: "500px" }}>
      <h2 className="heading2">Games and Toys</h2>

      <p>Punnet Ponies</p>
      <p> Ponies Are From Pluto (Phaser3.js game) </p>
    </div>

    <h1>Stable </h1>
    <p>Change your horse colours, name your horse.</p>
    <p>Settings are saved to local storage. Clear local storage?</p>

    <h1>Current Projects </h1>
    <p>
      I am a web dev looking for a job so I am mostly focusing on that right
      now.
    </p>
    <p> I am casually learning Unity.</p>
    <p> Considering making a browser-based html5/phaser horse-related game</p>
  </Layout>
)

export default IndexPage
