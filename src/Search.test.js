import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Search from './components/Search/Search'

it('renders correctly', () => {
    const { queryByPlaceholderText } = render(<Search />)

    expect(queryByPlaceholderText('Search your movie...')).toBeTruthy()
})

describe("Input value", () => {
    it("updates on change", () => {
        const {queryByPlaceholderText} = render(<Search />)
        const searchInput = queryByPlaceholderText("Search your movie...")
        
        fireEvent.change(searchInput, {target: {value: "test"}})

        expect(searchInput.value).toBe('test')
    });
})