import {Link} from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"

const FilmPoster = ({ film, slug }) => (
    <Link key={slug} to={`/${slug}`}>
        <Img
            style={{
                width: "20%",
                height: "20%"
            }}
            fluid={film.poster.imageFile.childImageSharp.fluid}
            alt={film.poster.altText}
        />
        <div className = "film-info">
            <div className = "film-info">
                <p>{`${film.title} (${film.yearOfRelease})`}</p>
                <p>{film.ratingImdb}</p>
            </div>
        </div>
    </Link>
);

export default FilmPoster
