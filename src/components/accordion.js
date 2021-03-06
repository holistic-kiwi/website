import React, { createContext, useContext, useState, useCallback } from "react"

const AccordionContext = createContext()

export const Accordion = ({ title = "title", children }) => {

  const [index, selectIndex] = useState(-1)
  const [open, setOpen] = useState(false)

  return (
    // improve SEO
    <AccordionContext.Provider value={{ selectIndex, index }}>
      <div className={`accordion-wrap ${open ? 'open' : 'closed'}`}>
        <div className="accordion-header" onClick={() => setOpen(!open)}>
          <h5>{title}</h5>
        </div>
        { open &&
          <div className="accordion-content">{children}</div>
        }
      </div>
    </AccordionContext.Provider>
  )
}

export const AccordionItem = ({ index, title = "title", children }) => {
  const { index: activeIndex, selectIndex } = useContext(AccordionContext)
  const changeState = useCallback(() => selectIndex(index === activeIndex ? -1 : index))

  return (
    <div className={`accordion-wrap ${index === activeIndex ? 'open' : ''}`} onClick={changeState}>
      <div className="accordion-header">
        <h5>{title}</h5>
      </div>
      <div className={`accordion-content`}>{children}</div>
    </div>
  )
}
