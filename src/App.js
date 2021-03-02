import React, { Component } from "react";
import './App.scss'
import { SearchForm, GistItem } from './components'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      gistDataItems: null
    }
  }


  onSearchSubmit = async (searchText) => {
    // const apiUrl = 'https://api.github.com/users/anders/gists'
    const apiUrl = `https://api.github.com/users/${searchText}/gists`
    await fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ gistDataItems: data })
      })
  }

  renderGistListItem = () => {
    const { gistDataItems } = this.state
    if (!(gistDataItems && gistDataItems.length)) return null
    return gistDataItems.map(item => {
      return <GistItem item={item} />
    })
  }

  render() {
    return (
      <div className="App">
        <SearchForm onSubmitSearchForm={this.onSearchSubmit}
        placeholderText="Enter git username" />
        {this.renderGistListItem()}
      </div>
    )
  }
}
