import React from 'react'
import './infoMovie.css'

const InfoMovie = ({ selected, onCloseMovie }) => {
    console.log('you')
    return (
        <section className="info">
            <div className="content">
                <h2>{selected.Title} <span>({ selected.Year })</span></h2>
                <p className="rating">Rating: {selected.imdbRating}</p>
                <div className="plot">
                    <img src={selected.Poster} alt="" />
                    <p>{selected.Plot}</p>
                </div>
                <button className="close" onClick={onCloseMovie}>Close</button>
            </div>
        </section>
    )
}

export default InfoMovie
