import { Link } from "gatsby"
import React, { useState, useCallback } from "react"

//import logo from './icns/white/medical-notes.svg';
import hamburger from "../images/icns/white/hamburger.svg"
import close from "../images/icns/primary/close.svg"

const Navigation = ({ siteTitle, path }) => {
  const [open, setOpen] = useState(false)
  const toggle = useCallback(() => setOpen(!open))


  console.log("render", open)
  return (
    <>
      <nav className="topnav">
        <div className="topnav-left">
          <button onClick={toggle}>
            <img src={hamburger} className="icn" alt="open sidenav" />
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
            href="https://www.fresha.com/providers/holistic-kiwi-agx16c7f/"
            type="button"
          >
            Book Now
          </a>
        </div>
      </nav>

      <nav className={`sidenav ${open ? "js_sidenav-open" : ""}`}>
        <div className="sidenav-header">
        <button onClick={toggle}>
          <img src={close} className="icn" alt="close sidenav" />
        </button>
        </div>
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
          <a className="" href="https://holistickiwishop.com/">
            Webshop
          </a>
          <Link className="" to="/contact">
            Contact
          </Link>
        </div>

        <a
          className="btn btn-primary"
          href="https://www.fresha.com/providers/holistic-kiwi-agx16c7f/"
          type="button"
        >
          Book Now
        </a>
      </nav>
    </>
  )
}

export default Navigation
