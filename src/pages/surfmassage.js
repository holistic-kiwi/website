import React from "react"
import { Link } from "gatsby"

//import Layout from "../components/layout"
import SEO from "../components/seo"
import Icon from "../components/Icon"

const IndexPage = () => (
  <div className="campaignwrap">
    <SEO title="Surf Massage"/>

    <header className="section-header image-surfcampaign-header">
      <div className="content">
        <h2>Holistic Kiwi presents</h2>
        <h1>Surf <br/>Massage</h1>
        <h2>In Delft</h2>
      </div>
      <a
        className="btn btn-primary"
        href="https://www.fresha.com/providers/holistic-kiwi-agx16c7f"
        type="button"
      >
        Book Your Massage
        <span className="text-sm">now only €75</span>
      </a>
    </header>



    <section className="section-info colorscheme-campaign-white">
      <div className="content">
        <h4>Why Surf Massages?</h4>
        <p>
          After noticing reoccuring injuries and complaints in our surfing community, we decided to create a special massage dedicated to surfers.
        </p>
      </div>
    </section>




    <main className="section-cardselection colorscheme-campaign-white">
      <div className="card-container">

      <a className="primary card" href="https://www.fresha.com/providers/holistic-kiwi-agx16c7f">
          <div className="card-image image-surfcampaign-backandknees"></div>
          <h4>Common Surf Injury</h4>
          <h3>Lower Back & Knees</h3>
          <p>
            Whether it was a bad pop-up, wipe-out or previous injury, our qualified therapists pin-point the issue and help you to prevent it from happening again.
          </p>
          <a className="btn" href="https://www.fresha.com/providers/holistic-kiwi-agx16c7f">
            Book your surf massage
          </a>
      </a>

      <a className="primary card" href="https://www.fresha.com/providers/holistic-kiwi-agx16c7f">
          <div className="card-image image-surfcampaign-neck"></div>
          <h4>Common Surf Injury</h4>
          <h3>Rotator cuff and neck</h3>
          <p>
            As surfers, we use our shoulders for everything. Holistic Kiwi specialize in rotator cuff injuries, and will help to restore your mobility and reduce pain.
          </p>
          <a className="btn" href="https://www.fresha.com/providers/holistic-kiwi-agx16c7f">
            Book your surf massage
          </a>
      </a>

      <a className="primary card" href="https://www.fresha.com/providers/holistic-kiwi-agx16c7f">
          <div className="card-image  image-surfcampaign-wipeout"></div>
          <h4>Common Surf Injury</h4>
          <h3>I Wiped Out - Bad</h3>
          <p>
            Bad wipe-outs can require a lot of work before getting waves again. Concusions & whip-lash need to be handled carefully, and the whole body is usually affected.
          </p>
          <a className="btn" href="https://www.fresha.com/providers/holistic-kiwi-agx16c7f">
            Book your surf massage
          </a>
      </a>

      <Link to="/" className="primary card" >
          <div className="card-image  image-surfcampaign-burns"></div>
          <h4>Common Surf Injury</h4>
          <h3>Skin Irritation & Burns</h3>
          <p>
            We may love surf, sand and sun, but our skin doesn’t. They cause major damage to our skin.
          </p>
          <p>
            Holistic Kiwi offer nourishing skin treatments and have natural, ocean friendly products to help soothe, heal and protect.
          </p>
          <a className="btn" href="https://www.fresha.com/providers/holistic-kiwi-agx16c7f">
            Book your surf massage
          </a>
      </Link>

      </div>
    </main>

    <header className="section-header image-surfcampaign-header">
      <div className="content">

        <h2>Book your</h2>
        <h1>Surf <br/>Massage</h1>
        <h2>Today</h2>
      </div>
      <a
        className="btn btn-primary"
        href="https://www.fresha.com/providers/holistic-kiwi-agx16c7f"
        type="button"
      >
        Book Your Massage
        <span className="text-sm">now only €75</span>
      </a>
    </header>







  </div>
)

export default IndexPage
