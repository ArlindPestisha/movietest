import React from 'react'
import Result from './Result'

const Results = ({ results, openMovie }) => {
    return (
        <section className="results"> 
            {results.map(result => (<Result key={result.imdbID} result={result}  openMovie={openMovie} />))}
        </section>
    )
}

export default Results
