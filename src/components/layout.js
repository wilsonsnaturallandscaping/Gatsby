import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import Header from '../components/header/header2'
import Footer from '../components/footer/footer'
import './bootstrap.min.css';
import './index.scss'

const LayoutContainer = styled.div`

`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main
        >
   <LayoutContainer>{children}</LayoutContainer>
        </main>
        <Footer/>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
