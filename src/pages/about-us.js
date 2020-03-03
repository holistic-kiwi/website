import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Icon from "../components/Icon"

const IndexPage = () => (
  <Layout>
    <SEO />

      <header className="page-massage section-header image-about">
        <div className="content">
          <h1>About us
          </h1>
          <a
            className="btn btn-primary"
            href="https://www.fresha.com/providers/holistic-kiwi-agx16c7f"
            type="button"
          >
            Book Now
          </a>
        </div>
      </header>

      <section className="page-massage section-info colorscheme-purple">
        <div className="content">
          <h2>About us</h2>
          <p>
            Welcome to Holistic Kiwi, the home of Facials for Sensitive Skin and Massage Therapy in Delft. We live up to our name everyday!
          </p>
          <p>
            Holistic = Systems and their properties are viewed as wholes, not just as a collection of parts.
          </p>
          <p>
            Kiwi = Kiwiana - anything or anyone originating from New Zealand (Like us and our skincare!). Kiwi is also the name of our national bird.
          </p>
          <p>
            At Holistic Kiwi, we pride ourselves on authenticity and effectiveness. Our NZ made products are hand picked by Kitti, after meeting her strict criteria. This means we don't stock just one brand, and we are constantly expanding what we offer!
          </p>
        </div>
      </section>

      <section className="page-homepage section-image-right colorscheme-image  image-kitti">
        <div className="content">
          <h3>Kitti</h3>
          <p>
            Kitti founded Holistic Kiwi when she was unable to find a skin and massage salon that met the standards that she was used to in New Zealand.
           </p>
          <p>
            Due to her personal struggle with Dermatitis, she understands the importance of quality products and honest therapists. After many years of training in Seido Karate, Kitti has had her fair share of injuries and is passionate about helping others reach their full potential.
           </p>
          <p>
            With international qualifications in Beauty Therapy, Spa Therapy and Body & Nutrition (CIBTAC, CIDESCO, NZQA, TCI), Kitti has been helping clients meet their goals for nearly 10 years.
          </p>

          <div className="stat-row">
            <div className="stat">
               <h3>ANBOS | CIDESCO | NZQA | CIBTAC</h3>
               <p>International Qualifications</p>
             </div>
          </div>

          <div className="stat-row">
            <div className="stat">
              <h3>612</h3>
              <p>Treatments Performed Last Year</p>
            </div>
            <div className="stat">
              <h3>6</h3>
              <p>Languages Learned</p>
            </div>
          </div>

        </div>
      </section>


      <section className="page-homepage section-image-left colorscheme-image  image-mary">
        <div className="content">
          <h3>Mary</h3>
          <p>
            Beauty Therapist Mary Darbyshire (CIDESCO, ITEC, NZQA) joined the Holistic Kiwi team in early 2019. She and Kitti met randomly mid 2018, figured out they shared similar qualifications, and hit it off right away!
          </p>
          <p>
            Another Kiwi lass, she is also passionate about skin health, and loves learning about how the body’s systems on the inside can reflect on the outside.
          </p>
          <p>
            Mary has suffered with Psoriasis, as well as Acne. Her first hand experience with these issues, coupled with her can do attitude, make her the perfect addition to the Holistic Kiwi Team!
          </p>
          <p>
            She has undergone more indepth massage training with Kitti, and is currently busy with a Holistic Therapy Diploma to add to her skill set which she hopes to complete by the start of 2020.
          </p>

          <div className="stat-row">
            <div className="stat">
              <h3>ANBOS | CIDESCO | NZQA | ITEC</h3>
              <p>International Qualifications</p>
            </div>
          </div>
          <div className="stat-row">
            <div className="stat">
              <h3>4</h3>
              <p>Pets</p>
            </div>
            <div className="stat">
              <h3>6</h3>
              <p>Countries left to visit in the EU</p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-homepage section-image-right colorscheme-image  image-jason">
      <div className="content">
        <h3>Jason</h3>
        <p>
          Kiwi born, to Dutch parents, Jason moved to the Netherlands when he was 13. He is fluent in both Dutch and English.
        </p>
        <p>
          By trade an App Design & Usability Architect, Jason is our guy when it comes to all non-treatment things such as; Branding, Marketing, Finances, Navigating Beurocracy but most importantly; Ensuring clients can experience the best of what holistic Kiwi has to offer.
        </p>
        <p>
          Jason brings a fresh (and male) voice to how we can improve our business and he challanges us on all aspects.
        </p>

        <div className="stat-row">
          <div className="stat">
            <h3>Communication & Multimedia Design</h3>
            <p>International Qualifications</p>
          </div>
        </div>
        <div className="stat-row">
          <div className="stat">
            <h3>61</h3>
            <p>days surfed last year</p>
          </div>
          <div className="stat">
            <h3>45.5</h3>
            <p>shoe size</p>
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
