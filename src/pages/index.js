import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FilmPoster from "../components/FilmPoster"

const IndexPage = () => {
  const {
    wpcontent: {
      page: {
        homeMeta: {
          homePageHeaderTitle,
          homePageHeaderDescription,
          homePageHeaderPicture,
          homePageFeaturedFilms
        },
      },
    },
  } = useStaticQuery(graphql`
    query {
      wpcontent {
        page(id: "home", idType: URI) {
          homeMeta {
            homePageHeaderTitle
            homePageHeaderDescription
            homePageHeaderPicture {
              altText
              sourceUrl
              imageFile {
                childImageSharp {
                  fluid(quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            homePageFeaturedFilms {
              ... on WPGraphql_Film {
                slug
                film {
                  title
                  yearOfRelease
                  ratingImdb
                  poster {
                    altText
                    sourceUrl
                      imageFile {
                        childImageSharp {
                          fluid(quality: 50) {
                            ...GatsbyImageSharpFluid_withWebp
                          }
                        }
                      }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  return (
  <Layout>
    <SEO title="Home" />
      <div className="banner">
        <Img
            fluid={homePageHeaderPicture.imageFile.childImageSharp.fluid}
            alt={homePageHeaderPicture.altText}
          />
          <div className="inner-div">
            <p className="header-title">{homePageHeaderTitle}</p>
            <p className="header-description">{homePageHeaderDescription}</p>
          </div>          
      </div>
      <div className="films">
          <h2>Featured Films</h2>
          <div className="film-items">
            {homePageFeaturedFilms.map(({ film, slug }) => (
                <FilmPoster film={film} slug={slug} />
            ))}
          </div>
        </div>
  </Layout>
  );
}

export default IndexPage
