import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FilmTemplate = ({
    data: {
        wpcontent: {
            film: {
                film,
                roles: { edges: roles },
            },
        },
    },
    }) => {
    return (
        <Layout>
            <SEO title="Film" />
                <div className="film-container">
                    <div className="film-image">
                        <Img
                            fluid={film.poster.imageFile.childImageSharp.fluid}
                            alt={film.poster.altText}
                        />
                        <div className="roles">
                            {roles.map(({ node: role }) => (
                                <div key={role.name} className="role">
                                {role.name}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="film-info">
                        <h2>{film.title}</h2>
                        <h2>{film.yearOfRelease}</h2>
                        <h3>{film.director}</h3>
                        <p className="description">{film.description}</p>
                        <p className="info">
                            <strong>Rating (Imdb):</strong> {film.ratingImdb}/10
                        </p>
                        <p className="info">
                            <strong>Box office:</strong> {film.boxOffice}
                        </p>
                    </div>
                </div>
        </Layout>
    )
}

export default FilmTemplate

export const pageQuery = graphql`
    query($id: ID!) {
        wpcontent {
            film(id: $id, idType: ID) {
                roles {
                    edges {
                        node {
                            name
                        }
                    }
                }
                id
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
                                fluid(quality: 75) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                }
            }
        }
  }
`