import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>About Me </h1>
    <p>I am a web developer looking for a job!</p>
    <p>
      I play some games, mostly emulators and cute indie titles. I currently
      only have a mac so currently a bit limited by that (yes, I can bootcamp to
      Windows but...meh)
    </p>

    <p>
      {" "}
      In recent years, I have played Star Stable, Alicia Online, Horze, Wild
      Horses Valley. Currently I rarely play any of those games but occasionally
      I log onto to Horze and Star Stable.
    </p>
    <p>
      In my younger days, I got a ton of milage out of Mary King's Riding Start,
      my favourite Equestriad 2001, Equestrian Challenge and the Ubisoft horse
      games (Pippa Funnell, Saddle up Time To Ride) and Zoo Tycoon (1/2)....in
      which I built many zebra "barns".{" "}
    </p>
    <p>I am a dressage rider and half lease a horse</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
