import React from 'react'
import './search.css'

const Search = ({ handleInput, search }) => {
    return (
        <section className="searchbox-wrap">
            <input
                className="searchbox"
                type="text" 
                placeholder="Search your movie..."
                onChange={handleInput}
                onKeyPress={search}
            />
        </section>
    )
}

export default Search
