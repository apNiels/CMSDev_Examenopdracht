import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FilmPoster from "../components/FilmPoster"

import {
  Wrapper,
  Image,
  BottomEdgeDown,
} from "../pageStyles/pageStyles"
import { COLORS } from "../constants"

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
    <Wrapper>
      <div className="banner">
        <Image
            fluid={homePageHeaderPicture.imageFile.childImageSharp.fluid}
            alt={homePageHeaderPicture.altText}
          />
          <div className="inner-div">
            <p className="header-title">{homePageHeaderTitle}</p>
            <p className="header-description">{homePageHeaderDescription}</p>
          </div>
          <BottomEdgeDown color={COLORS.BLACK} />          
      </div>
      <div className="films">
          <h2>Featured Films</h2>
          <div className="film-items">
            {homePageFeaturedFilms.map(({ film, slug }) => (
                <FilmPoster film={film} slug={slug} />
            ))}
          </div>
        </div>
    </Wrapper>
  </Layout>
  );
}

export default IndexPage
