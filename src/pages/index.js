import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <iframe
      style={{
        width: `100%`,
        maxHeight:`100dvh`,
        aspectRatio: `16/9`,
      }}
      src=" https://player.vimeo.com/video/900164886?h=0b0bdab37d"
      title="MADD Video"
      frameborder="0"
      allow="autoplay; fullscreen"
      allowfullscreen
    ></iframe>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="MADD" />

export default IndexPage
