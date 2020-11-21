import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import { FaDivide } from "react-icons/fa"
// ...GatsbyImageSharpFluid

// const query = graphql`
//   {
//     file(relativePath: { eq: "hero-img.png" }) {
//       id
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `

const Hero = () => {
  // const {
  //   file: {
  //     childImageSharp: { fluid },
  //   },
  // } = useStaticQuery(query)
  // return (
  //   <header className="hero">
  //     <div className="section-center hero-center">
  //       <article className="hero-info">
  //         <div>
  //           <div className="underline"></div>
  //           <h1>I'am Superman</h1>
  //           <h3>Web and CMS enthusiast</h3>
  //           <Link to="contact" className="btn">
  //             Contact Me
  //           </Link>
  //           <SocialLinks />
  //         </div>
  //       </article>
  //       <Image fluid={fluid} className="hero-img" />
  //     </div>
  //   </header>
  // )
  return <div></div>
}

export default Hero
