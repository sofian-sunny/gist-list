import React, { useRef } from "react";
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cn from './search-form.module.scss'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

/**
 * This is SearchForm Method
 * this shows search bar in the Home page
 * @reactProps {string} placeholderText - search input message
 * @reactProps {string} onSubmitSearchForm - callback function
 */
const SearchForm = (props) => {
  const searchInput = useRef()
  const { placeholderText, onSubmitSearchForm } = props

  const onSubmitForm = (e) => {
    e.preventDefault()
    const searchQuery = searchInput.current.value
    !!searchQuery && onSubmitSearchForm(searchInput.current.value)
  }


  return (
    <div className={cn.wrap}>
      <form className={cn.search} onSubmit={(e) => onSubmitForm(e)}>
        <input ref={searchInput} type="text" className={cn.searchTerm} placeholder={placeholderText} />
        <button id="search" type="submit" className={cn.searchButton}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </div>
  )
}

SearchForm.propTypes = {
  placeholderText: PropTypes.string,
  onSubmitSearchForm: PropTypes.func
}

SearchForm.defaultProps = {
  placeholderText: 'What are you looking for?',
  onSubmitSearchForm: ()=> {}
}

export default SearchForm
