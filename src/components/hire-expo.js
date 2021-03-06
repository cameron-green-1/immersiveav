import React, { useEffect } from "react"
import { gsap } from "gsap"
import IconDot from "../svg/expo-hire-dot.svg"

import HireImg from "../images/hire.jpg"
import ExpoImg from "../images/expo.jpg"
import bgImg from "../images/project10.jpeg"
import logoExpo from "../images/logoExpo1.png"
import logoHire from "../images/logoHire1.png"

import { Link } from "gatsby"

const HireExpo = () => {
  useEffect(() => {
    const boxes = document.querySelectorAll(".hire-expo__boxes__box")
    const hireExpoImage = document.querySelector(".hire-expo__image")
    // const images = [
    //   "https://i.imgur.com/Rna2EKO.jpg",
    //   "https://i.imgur.com/Lqk5eGN.jpg",
    // ]
    const images = [HireImg, ExpoImg]

    const tlHireExpo = gsap.timeline()

    boxes.forEach((box, i) => {
      box.addEventListener("mouseenter", e => {
        hireExpoImage.style.backgroundImage = "url(" + images[i] + ")"

        tlHireExpo.clear()

        tlHireExpo
          .to(".hire-expo__bg", {
            opacity: 0,
            duration: 0.001,
          })
          .fromTo(
            hireExpoImage,
            {
              opacity: 0,
              scale: 1,
            },
            {
              opacity: 1,
              scale: 1.2,
              ease: "power4.easeOut",
              duration: 1,
            }
          )
      })
    })

    boxes.forEach((box, i) => {
      box.addEventListener("mouseleave", e => {
        tlHireExpo.clear()

        tlHireExpo
          .to(hireExpoImage, {
            scale: 1,
            opacity: 0,
            ease: "power4.easeOut",
            duration: 1,
          })
          .to(
            ".hire-expo__bg",
            {
              opacity: 1,
              ease: "power4.easeOut",
              duration: 1,
            },
            "-=0.95"
          )
      })
    })
  })
  return (
    <div className="hire-expo">
      <div className="hire-expo__bg">
        <img src={bgImg} alt="" />
      </div>
      <div className="hire-expo__image"></div>
      <div className="hire-expo__cover"></div>
      <div className="hire-expo__gradient"></div>
      <div className="hire-expo__boxes">
        <div className="hire-expo__boxes__box hire-expo__boxes__box--0">
          <img src="" alt="" />
          <h1 className="hire-expo__boxes__box__h1 hire-expo__boxes__box__h1--0">
            Hire
          </h1>
          {/* <Link
                  className="hire-expo__boxes__box__a"
                  to={"/portfolio" + link}
                ></Link> */}
          <button className="hire-expo__boxes__box__btn hire-expo__boxes__box__btn--0">
            Discover
          </button>
          <h2 className="hire-expo__boxes__box__description">
            Short-term rental for AV & IT technology
          </h2>
        </div>
        <div className="hire-expo__boxes__box hire-expo__boxes__box--1">
          <img src="" alt="" />
          <h1 className="hire-expo__boxes__box__h1 hire-expo__boxes__box__h1--1">
            Expo
          </h1>
          <button className="hire-expo__boxes__box__btn hire-expo__boxes__box__btn--1">
            Discover
          </button>
          <h2 className="hire-expo__boxes__box__description hire-expo__boxes__box__description--1">
            Technical production for exhibitions and conferences.
          </h2>
        </div>
      </div>
      <div className="hire-expo__dot">
        <img src={IconDot} alt="" />
      </div>
      <div className="hire-expo__coming-soon">
        <div className="hire-expo__coming-soon__inside">
          <h1 className="hire-expo__coming-soon__inside__text">Coming Soon!</h1>
          <div className="hire-expo__coming-soon__inside__logos">
            <div className="hire-expo__coming-soon__inside__logos__expo">
              <img src={logoExpo} alt="" />
              <p className="hire-expo__coming-soon__inside__logos__expo__p">
                Technical production and technology hire for exhibitions
              </p>
            </div>
            <div className="hire-expo__coming-soon__inside__logos__hire">
              <img src={logoHire} alt="" />
              <p className="hire-expo__coming-soon__inside__logos__hire__p">
                Technical production and technology hire for exhibitions
              </p>
            </div>
          </div>
          <div className="hire-expo__coming-soon__inside__email">
            Contact us on{" "}
            <a
              href="mailto:enquiries@immersiveav.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              enquiries@immersiveav.com
            </a>{" "}
            for exhibition and dry hire requirements.
          </div>
        </div>
      </div>
    </div>
  )
}

export default HireExpo
