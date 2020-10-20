import React from 'react'
import Result from './Result'
import './results.css'

const Results = ({ results, onOpenMovie }) => {
    return (
        <section className="results"> 
            {results.map(result => (<Result key={result.imdbID} result={result}  onOpenMovie={onOpenMovie} />))}
        </section>
    )
}

export default Results
