import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Star from "../components/Icon"
//import Star from './icns/white/star.svg';

const IndexPage = () => (
  <Layout>
    <SEO />



    <header className="page-homepage section-header image-homepage">
      <div className="content">
        <h1>
          <span className="text-sm">100% New Zealand </span>
          Skin & Massage Clinic
          <span className="text-sm">in Delft</span>
        </h1>
        <a
          className="btn btn-primary"
          href="https://www.fresha.com/providers/holistic-kiwi-agx16c7f"
          type="button"
        >
          Book Your Treatment Now
        </a>
      </div>

      <div className="ratings-row">

        <div className="rating">
          <div className="star-row">
            <div className="star image-star"></div>
            <div className="star image-star"></div>
            <div className="star image-star"></div>
            <div className="star image-star"></div>
            <div className="star image-star"></div>
          </div>
          <div className="brand-row">
            <div className="brand image-fresha"></div>
          </div>
          <p>5,0</p>
        </div>

        <div className="rating">
          <div className="star-row">
            <div className="star image-star"></div>
            <div className="star image-star"></div>
            <div className="star image-star"></div>
            <div className="star image-star"></div>
            <div className="star image-star"></div>
          </div>
          <div className="brand-row">
            <div className="brand image-treatwell"></div>
          </div>
          <p>4,8</p>
        </div>

        <div className="rating">
          <div className="star-row">
            <div className="star image-star"></div>
            <div className="star image-star"></div>
            <div className="star image-star"></div>
            <div className="star image-star"></div>
            <div className="star image-starhalf"></div>
          </div>
          <div className="brand-row">
            <div className="brand image-google"></div>
          </div>
          <p>4,5</p>
        </div>

      </div>

    </header>


    <main className="page-homepage section-cardselection colorscheme-light">

      <h2>How can we help you?</h2>
      <div className="card-container">
        <Link to="/massageoverview">

            <div className="card-image image-massage">
              <h3>Massages</h3>
            </div>
            <h4>Massages</h4>
            <p>
            Get a massage from a fully qualified therapist and feel the difference! We customise our massages to ensure we address your concerns.
            </p>
            <p className="card-cta">View Treatments</p>

        </Link>

        <Link to="/skintreatmentoverview">
            <div className="card-image image-skincare">
              <h3>Skin<br/>Treatments</h3>
            </div>
            <h4>Skin Treatments</h4>
            <p>
            We specialise in Sensitive and Ethnic promblematic skin.  For Acne fighters; we are covered by most health insurances.
            </p>
            <p className="card-cta">View Treatments</p>

        </Link>


        <Link to="/waxoverview">

            <div className="card-image image-waxing">
              <h3>Waxing</h3>
            </div>
            <h4>Waxing</h4>

            <p>
            At Holistic Kiwi, we minimise the chance of ingrown hairs with our professional hygiene, techniques and care for the skin.
            </p>
            <p className="card-cta">View Treatments</p>
        </Link>


        <a className="primary" href="https://www.fresha.com/providers/holistic-kiwi-agx16c7f">

            <div className="card-image image-booking">
              <h3>Place<br/>Booking</h3>
            </div>
            <h4>Place Booking</h4>
            <p>
            Use our intuitive booking system to find an appointment time that suites you.
            </p>
            <p className="card-cta card-cta-booking">Place Booking</p>
        </a>
      </div>
    </main>

    <section className="page-homepage section-image-right colorscheme-image  image-kitti">
      <div className="content">
        <h3>About us</h3>
        <p>
        At Holistic Kiwi we believe that everyone should be able to have access to quality skin care and massages.<br />
        Thats why we offer massages and skin treatments that meet the highest international standards.
        </p>
        <p className="displaynone">
        Holistic Kiwi was started in 2016 with the goal of creating a safe space to help those with ongoing skin issues such as Rosacea, Acne, Dermatitis/Eczema & Psoriasis.
        </p>
        <p className="displaynone">
        We provide high quality Massage Therapy for ongoing aches and pains. This includes reducing symptoms of Frozen Shoulders and Fibromyalgia as well as office and sports injuries!
        </p>
        <Link className="btn btn-secondary"to="/about-us"> Read more </Link>
        <div className="stat-row">
          <div className="stat">
            <h3>ANBOS |CIBTAC | CIDESCO | NZQA | ITEC</h3>
            <p>International Qualifications</p>
          </div>
        </div>
        <div className="stat-row">
          <div className="stat">
            <h3>5/5</h3>
            <p>Verified Fresha Rating</p>
          </div>
          <div className="stat">
            <h3>4.8/5</h3>
            <p>Treatwell Rating</p>
          </div>
          <div className="stat">
            <h3>4.5/5</h3>
            <p>Google Rating</p>
          </div>
          <div className="stat">
            <h3>884</h3>
            <p>Treatments performed last year</p>
          </div>
        </div>
      </div>
    </section>

    <header className="page-homepage section-closer image-closer">
      <div className="content">
        <h1>Your sensitive skin specialist
        </h1>
        <a
          className="btn btn-primary"
          href="https://www.fresha.com/providers/holistic-kiwi-agx16c7f"
          type="button"
        >
          Book Your Treatment Now
        </a>
      </div>
    </header>






  </Layout>
)

export default IndexPage
