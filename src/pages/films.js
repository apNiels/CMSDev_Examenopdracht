import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

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
                                fluid(quality: 100) {
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
                                        fluid(quality: 100) {
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
            <div className="banner">
                {/*<Image
                    fluid={filmsPageHeaderPicture.imageFile.childImageSharp.fluid}
                    alt={filmsPageHeaderPicture.altText}
                />*/}
                <p>{filmsPageHeaderPicture.altText}</p>
            </div> 
            <div className="description">
                <p>{filmsPageDescription}</p>
            </div>
            <div className="films">
                <h2>Films</h2>
                <div className="film-items">
                    {films.map(({ node: { film, slug } }) => (
                        <div className = "film-info">
                            <p>{`${film.title} (${film.yearOfRelease})`}</p>
                            <p>{film.ratingImdb}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export default FilmsPage