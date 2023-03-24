import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <div className="row">
      <div className="col-xs-12 heading-section">
        <h1 className="heading">Pixel Ponies</h1>
      </div>
    </div>

    <div className="row grass-bg" style={{ minHeight: "80vh" }}>
      <div className="col-lg-3 col-md-3 col-xs-12">
        <ul>
          <li>My Projects </li>
          <li>Blog </li>
          <li>Horse + Cozy Game Reviews</li>
          <li>Horse Gaming on Steam Deck</li>
          <li>Horse Game Emulation</li>
          <li>External Horse Game Resources</li>
        </ul>
      </div>
      <div className="col-lg-9 col-md-9 col-xs-12 content-section">
        <div>
          <h2>
            Just because you spend time in a barn, doesn't mean your fun or
            tools need to be from a barn!
          </h2>

          <h1>To Do</h1>
          <ol>
            <li>integrate header better + create header image</li>
            <li>improve design and theming</li>
            <li> add desktop menu</li>
            <li> add better project icons</li>
            <li> horse games and steam deck (blog?) </li>
            <li> horse games page </li>
            <li> horse games resources</li>
            <li> blog (wp? or other) </li>
          </ol>
        </div>
        <div className="fence">
          <h2 style={{ margin: "0.5rem" }}>Horse Related Games and Toys</h2>
          <div className="section-content">
            <div className="game-item">
              Punnet Ponies
              <div className="tag">Web Toy</div>
            </div>
            <div className="game-item">
              Tic Tic Whoa
              <div className="tag">Web Toy </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <h1 className="heading">Pixel Ponies</h1>

    <div className="text-block">
      <p> A collection of equestrian-themed and related apps and games.</p>
      <p>
        Just because you spend a lot of time in a barn doesn't mean your tools
        and fun need to be from a cave!
      </p>
      <p> WASD or arrow keys to move horse!</p>
    </div>

    <div style={{ border: "2px dashed", height: "500px", width: "500px" }}>
      <h2 className="heading2">Games and Toys</h2>

      <p>Punnet Ponies</p>
      <p> Ponies Are From Pluto (Phaser3.js game) </p>
    </div>

    <h1>Stable </h1>
    <p>Change your horse colours, name your horse.</p>
    <p>Settings are saved to local storage. Clear local storage?</p>

    <div className="text-block">
      <h1>Current Projects </h1>
      <p>
        I am a web dev looking for a job so I am mostly focusing on that right
        now.
      </p>
      <p> I am casually learning Unity.</p>
      <p> Considering making a browser-based html5/phaser horse-related game</p>
    </div> */}
  </Layout>
)

export default IndexPage
