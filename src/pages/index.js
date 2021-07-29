import * as React from "react"
import '../css/index.css';
import { SocialIcon } from 'react-social-icons';
// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: 'Lexend',
}

const socialStyles = {
  display: "flex",
  justifyContent: "space-around",
  marginRight: "40%",
  marginLeft: "40%",
  marginBottom: 20,
}

const hrStyles = {
  marginBottom: 40,
}


const headingStyles = {
  marginTop: 0,
  marginBottom: 15,
  textAlign: "center",
  color: "darkgreen",

  fontSize: 64

}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const paragraphCenterStyles = {
  marginBottom: 48,
  textAlign: "justify",
  textAlignLast: "center",
  maxWidth: "50%",

  marginLeft: "auto",
  marginRight: "auto"
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Kabir Nagrecha's Blog</title>
      <h1 style={headingStyles}>
        Kabir Nagrecha
      </h1>
      <div style={socialStyles}>
          <SocialIcon url="https://twitter.com/KabirNagrecha"/>
          <SocialIcon url="mailto:kabir.nagrecha@gmail.com"/>

          <SocialIcon url="https://www.linkedin.com/in/kabir-nagrecha-952591152"/>

        </div>
      <hr width="60%" style={hrStyles}/>

      <p style={paragraphCenterStyles}>
          17-year-old CS PhD Student at UC San Diego researching Machine Learning Systems. Working to make large-scale ML ready for the real world. <br/> <br/>
          Current Apple Intern working on Siri.
      </p>

    
    </main>
  )
}

export default IndexPage
