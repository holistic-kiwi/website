import { Link } from "gatsby"
import React, { useState, useCallback } from "react"

const Navigation = ({ siteTitle, path }) => {
  const [open, setOpen] = useState(false)
  const toggle = useCallback(() => setOpen(!open))

  console.log("render", open)
  return (
    <>
      <nav className="topnav">
        <div className="topnav-left">
          <button className="js_closesidenav" onClick={toggle}>
            O
          </button>
          <Link className="sitetitle" to="/">
            {siteTitle}
          </Link>
        </div>
        <div className="topnav-right">
          <Link className="" to="/massageoverview">
            Massages
          </Link>
          <Link className="" to="/skintreatmentoverview">
            Skin Treatments
          </Link>
          <Link className="" to="/waxoverview">
            Waxing
          </Link>
          <Link className="displaynone" to="/medical-conditions">
            Medical Conditions
          </Link>
          <Link className="displaynone" to="/products">
            Products
          </Link>
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

      <nav className={`sidenav ${open ? "js_sidenav-open" : ""}`}>
        <button className="js_closesidenav" onClick={toggle}>
          close
        </button>
        <div className="mainnav">
          <Link className="" to="/">
            Home
          </Link>
          <Link className="" to="/massageoverview">
            Massages
          </Link>
          <Link className="" to="/skintreatmentoverview">
            Skin Treatments
          </Link>
          <Link className="" to="/waxoverview">
            Waxing
          </Link>
        </div>
        <div className="subnav">
          <Link className="" to="/about-us">
            About us
          </Link>
          <Link className="" to="/contact">
            Contact
          </Link>
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
}

export default Navigation
