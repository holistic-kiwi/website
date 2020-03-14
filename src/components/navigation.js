import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"



const Navigation = ({ siteTitle, path }) => (
  <>
  <nav className="topnav js_sidenav-open">
    <div className="topnav-left">
      <button className="js_opensidenav">O</button>
      <Link className="sitetitle" to="/">{siteTitle}</Link>

    </div>
    <div className="topnav-right">

      <Link className="" to="/massageoverview">Massages</Link>
      <Link className="" to="/skintreatmentoverview">Skin Treatments</Link>
      <Link className="" to="/waxoverview">Waxing</Link>
      <Link className="displaynone" to="/medical-conditions">Medical Conditions</Link>
      <Link className="displaynone" to="/products">Products</Link>
      <a className="" href="https://holistickiwishop.com/">
        Webshop
      </a>
      <a
        className="btn btn-primary"
        href="https://www.fresha.com/providers/holistic-kiwi-agx16c7f"
        type="button"
      >
        Book Now
      </a>

    </div>
  </nav>

  <nav className="sidenav">
    <button className="js_closesidenav">close</button>
    <div className="mainnav">
    <Link className="" to="/">Home</Link>
      <Link className="" to="/massageoverview">Massages</Link>
      <Link className="" to="/skintreatmentoverview">Skin Treatments</Link>
      <Link className="" to="/waxoverview">Waxing</Link>

    </div>
    <div className="subnav">
      <Link className="" to="/about-us">About us</Link>
      <Link className="" to="/contact">Contact</Link>
    </div>

    <a
      className="btn btn-primary"
      href="https://www.fresha.com/providers/holistic-kiwi-agx16c7f"
      type="button"
    >
      Book Now
    </a>
  </nav>



</>
)

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation
