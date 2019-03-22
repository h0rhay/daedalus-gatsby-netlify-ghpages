import React from 'react'
import { StaticQuery, graphql } from 'gatsby';
import TriangleSeparator from './triangle-separator'

const BlockWelcome = ({children, data}) =>
  (
    <div id='blockWelcome'>
      <TriangleSeparator />
      {console.log('data', data)}
      <div className="welcome text-center pt-5 pr-5 pb-5 pl-5 mt-0 mr-md-5 mb-5 ml-md-5">
        {data.allMarkdownRemark.edges.map( el => {
          if (el.node.frontmatter && el.node.frontmatter.label === 'homepage') {
            return <div key={el.node.id} dangerouslySetInnerHTML={{__html: el.node.html}} />
          } else {
            return ''
          }
        })}
      </div>
    </div>
  )


export default ({children, data}) => (
  <StaticQuery 
    query={graphql`
      query MDquery {
        allMarkdownRemark {
          edges {
            node {
              id
              html
              excerpt
            }
          }
        }
      }
    `
    }
    render={ data => <BlockWelcome data={data}>{children}</BlockWelcome> }
  />
)
