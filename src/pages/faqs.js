import * as React from "react"
import { Helmet } from "react-helmet"

import Header from "../components/header"
import LowHero from "../components/lowHero"
import News from "../components/news"
import PhoneEmail from "../components/phoneEmail"
import NewFooter from "../components/footerNew"

import { ScrollTrigger } from "gsap/ScrollTrigger"

import { faqsList, footerText } from "../utils/helper"
import "../styles/styles.scss"

const FAQs = () => {
  return (
    <div className="wrapper">
      <Helmet>
        <meta charSet="utf-8" />
        <title>FAQs | ImmersiveAV</title>
      </Helmet>
      <Header />
      <LowHero />
      <div className="faqs-page">
        <h1 className="faqs-page__h1">FAQs</h1>
        <ul className="faqs-page__list" style={{ paddingLeft: 0 }}>
          {faqsList.length > 0 ? (
            faqsList.map((faq, i) => {
              const paragraphs = faq.a.split("|")
              return (
                <li className="faqs-page__list__item" key={i}>
                  <button
                    style={{
                      marginBottom: i === faqsList.length - 1 ? 80 : 80,
                    }}
                    className="faqs-page__list__item__btn"
                    onClick={() => {
                      const body = document.querySelectorAll(
                        ".faqs-page__list__item__body"
                      )[i]
                      const icon = document.querySelectorAll(
                        ".faqs-page__list__item__btn__icon"
                      )[i]
                      if (body.style.display == "none") {
                        body.style.display = "block"
                        icon.innerHTML = "-"
                        ScrollTrigger.refresh()
                      } else {
                        body.style.display = "none"
                        icon.innerHTML = "+"
                        ScrollTrigger.refresh()
                      }
                    }}
                  >
                    <p className="faqs-page__list__item__btn__text">{faq.q}</p>
                    <p className="faqs-page__list__item__btn__icon">+</p>
                  </button>
                  <div
                    className="faqs-page__list__item__body"
                    style={{ display: "none" }}
                  >
                    <div className="faqs-page__list__item__body__info">
                      {/* <p>{faq.a}</p> */}
                      {paragraphs.map(para => (
                        <p>{para}</p>
                      ))}
                    </div>
                  </div>
                </li>
              )
            })
          ) : (
            <p>No FAQs</p>
          )}
        </ul>
      </div>
      <PhoneEmail />
      <News />
      <NewFooter />
      <div className="empty">
        <h1 className="empty__title">{footerText}</h1>
      </div>
    </div>
  )
}

export default FAQs
