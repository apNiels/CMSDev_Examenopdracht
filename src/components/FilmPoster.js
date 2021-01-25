import React from "react"

import {
    Image,
    Film,
  } from "../pageStyles/pageStyles"

const FilmPoster = ({ film, slug }) => (
    <Film key={slug} to={`/${slug}`}>
        <Image
            fluid={film.poster.imageFile.childImageSharp.fluid}
            alt={film.poster.altText}
        />
        <div className = "film-info">
            <div className = "film-info">
                <p>{`${film.title} (${film.yearOfRelease})`}</p>
                <p>{film.ratingImdb}</p>
            </div>
        </div>
    </Film>
);

export default FilmPoster
