import React, { useState, ChangeEvent, MouseEvent } from 'react'
import './SearchBox.scss'
import { BiSearch } from 'react-icons/bi'

const SearchBox = () => {
  const [search, setSearch] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log('searching for: ', search)
    setSearch('')
  }

  return (
    <div className='search-box-container'>
      <input
        type='text'
        placeholder='Search'
        value={search}
        onChange={handleChange}
        className='search-box' />
      <button onClick={handleSubmit} >
        <BiSearch color='white' size='1.1em'  />
      </button>
    </div>
  )
}

export default SearchBox