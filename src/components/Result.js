import React from 'react'

const Result = ({ result, openMovie }) => {
    return (
        <div className="result" onClick={() => openMovie(result.imdbID)}>
            <img src={result.Poster} alt="" />
            <h3>{result.Title}</h3>
        </div>
    )
}

export default Result
