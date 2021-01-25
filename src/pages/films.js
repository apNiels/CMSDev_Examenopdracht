import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FilmPoster from "../components/FilmPoster"
import {
    Wrapper,
    Image,
    BottomEdgeDown,
    BottomEdgeUp,
  } from "../pageStyles/pageStyles"
  import { COLORS } from "../constants"

const FilmsPage = () => {
    const {
        wpcontent: {
            page: {
                filmsMeta: { filmsPageDescription, filmsPageHeaderPicture },
            },
            films: { edges: films },
        },
    } = useStaticQuery(graphql`
    query {
        wpcontent {
            page(id: "films", idType: URI) {
                filmsMeta {
                    filmsPageDescription
                    filmsPageHeaderPicture {
                        altText
                        sourceUrl
                        imageFile {
                            childImageSharp {
                                fluid(quality: 90) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                }
            }
            films {
                edges {
                    node {
                        film {
                            title
                            yearOfRelease
                            description
                            director
                            ratingImdb
                            boxOffice
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
                        slug
                    }
                }
            }
        }
    }
  `);

    return (
        <Layout>
            <SEO title="Films" />
            <Wrapper filmsColor={COLORS.BLACK} descriptionColor={COLORS.SECONDARY}>
            <div className="banner">
                <Image
                    fluid={filmsPageHeaderPicture.imageFile.childImageSharp.fluid}
                    alt={filmsPageHeaderPicture.altText}
                />
                <BottomEdgeDown color={COLORS.SECONDARY} />
            </div> 
            <div className="description">
                <p>{filmsPageDescription}</p>
                <BottomEdgeUp color={COLORS.BLACK} />
            </div>
            <div className="films">
                <h2>Films</h2>
                <div className="film-items">
                    {films.map(({ node: { film, slug } }) => (
                        <FilmPoster film={film} slug={slug} />
                    ))}
                </div>
            </div>
            </Wrapper>
        </Layout>
    );
}

export default FilmsPage