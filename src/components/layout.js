/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          margin: `0 auto`,
        }}
      >
        <main
          style={{
            display: `grid`,
            placeItems: `center`,
            height: `100dvh`,
          }}
        >
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
