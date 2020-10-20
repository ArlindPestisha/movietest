import React from 'react'
import './results.css'

const Result = ({ result, onOpenMovie }) => {
    return (
        <div className="result" onClick={() => onOpenMovie(result.imdbID)}>
            <img src={result.Poster} alt="" />
            <h3>{result.Title}</h3>
        </div>
    )
}

export default Result
