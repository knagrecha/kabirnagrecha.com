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

const subheadingStyles = {
  marginTop: 0,
  marginBottom: 15,
  textAlign: "center",
  color: "black",

  fontSize: 36

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
  paddingTop: 20,

}
const listItemStyles = {
  fontWeight: 100,
  fontSize: 18,
  marginBottom: 30,
  display: "list-item",
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
          18-year-old CS PhD Student at UC San Diego researching Machine Learning Systems. Working to make large-scale ML more viable. <br/> <br/>
      </p>
      <h1 style={subheadingStyles}>
          Awards
      </h1>
    <ul style={listStyles}>

      <li style={listItemStyles}> <a href="https://2021.sigmod.org/sigmod_student_research_competition.shtml">ACM SIGMOD Student Research Competition Winner</a> <strong>(2021)</strong> </li>

      <li style={listItemStyles}> <a href="https://cse.ucsd.edu/undergraduate/cse-undergraduate-student-awards">UCSD CSE Excellence in Research Award</a> <strong>(2021)</strong> </li>

      <li style={listItemStyles}> <a href="https://cra.org/about/awards/outstanding-undergraduate-researcher-award/">CRA Outstanding Undergraduate Researcher Honorable Mention</a> <strong>(2021)</strong> </li>

      <li style={listItemStyles}> UCSD Jacobs School of Engineering Fellowship <strong>(2021)</strong></li>

      <li style={listItemStyles}> UCSD Halicioglu Data Science Institute Fellowship <strong>(2021)</strong> </li>
    </ul>

    <h1 style={subheadingStyles}>
        Publications
    </h1>
  <ul style={listStyles}>
    <li style={listItemStyles}> <a href="https://adalabucsd.github.io/papers/TR_2021_Hydra.pdf"> Hydra: A Scalable and Optimized Data System for Large Multi-Model Deep Learning (Preprint)</a> <strong>(2022)</strong>  </li>
    <li style={listItemStyles}> <a href="https://dl.acm.org/doi/abs/10.1145/3448016.3450571"> Model Parallel Model Selection for Deep Learning Systems (ACM SIGMOD ’21)</a> <strong>(2021)</strong>  </li>
    <li style={listItemStyles}> <a href="https://openaccess.thecvf.com/content/CVPR2021/html/Wang_Gradient-Based_Algorithms_for_Machine_Teaching_CVPR_2021_paper.html"> Gradient-based Algorithms for Machine Teaching (CVPR ’21)</a> <strong>(2021)</strong>  </li>
    <li style={listItemStyles}> <a href="https://adalabucsd.github.io/papers/2021_Cerebro_CIDR.pdf"> Cerebro: A Layered Data Platform for Scalable Deep Learning (CIDR ’21)</a> <strong>(2021)</strong>  </li>
    <li style={listItemStyles}> <a href="https://dl.acm.org/doi/10.1145/3397461"> Incremental and Approximate Computations for Accelerating Deep CNN Inference (ACM TODS ’20)</a> <strong>(2021)</strong>  </li>
    <li style={listItemStyles}> <a href="https://ieeexplore.ieee.org/abstract/document/9457906"> Satellite Image Atmospheric Air Pollution Prediction through Meteorological Graph Convolutional Network with Deep Convolutional LSTM (CSCI ’20)</a> <strong>(2021)</strong>  </li>
    <li style={listItemStyles}> <a href="https://ieeexplore.ieee.org/abstract/document/9457991"> Sensor-Based Air Pollution Prediction Using Deep CNN-LSTM (CSCI ’20)</a> <strong>(2021)</strong>  </li>
    <li style={listItemStyles}> <a href="https://journals.sagepub.com/doi/abs/10.1177/0361198120934796"> As-Encountered Prediction of Tunnel Boring Machine Performance Parameters using Recurrent
Neural Networks (TRR ’20)</a> <strong>(2021)</strong>  </li>


  </ul>
    </main>
  )
}

export default IndexPage
