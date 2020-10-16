import React from 'react'

const Search = ({ handleInput }) => {
    return (
        <section className="searchbox-wrap">
            <input
                type="text" 
                placeholder="Search your movie..."
                className="searchbox" 
                onChange={handleInput}
            />
        </section>
    )
}

export default Search
