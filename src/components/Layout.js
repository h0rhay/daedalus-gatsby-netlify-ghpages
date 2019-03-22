import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Media from 'react-media'

import Header from '../components/daedalus/header'
import Medusa from '../components/daedalus/medusa'
import Footer from '../components/daedalus/footer'
import Navigation from '../components/daedalus/navigation'

import 'typeface-montserrat'
import '../assets/styles/bootstrap-imports.scss'
import '../assets/styles/custom.scss'

import useSiteMetadata from './SiteMetadata'

const TemplateWrapper = ({ children, data }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-16x16.png"
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
      </Helmet>
      <Medusa />

      <Media query="(max-width: 767px)">
        <Navigation align={`ml-auto`}/>
      </Media>
      
      
      <Header siteTitle={data.site.siteMetadata.title} />

      <Media query="(min-width: 768px)">
        <Navigation />
      </Media>

      <div className="container wrap" style={{position: 'relative', zIndex: 1}}>
        {children}
      </div>

      <Footer />
    </div>
  )
}


export default ({children, data}) => (
  <StaticQuery 
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
    }
    render={ data => <TemplateWrapper data={data}>{children}</TemplateWrapper> }
  />
)