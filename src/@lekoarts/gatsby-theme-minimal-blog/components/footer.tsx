/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"
// import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/hooks/use-site-metadata.tsx"

const Footer = () => {
  const { siteTitle } = useSiteMetadata()

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} Mohit Vora. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer