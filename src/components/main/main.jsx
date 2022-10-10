import React from 'react'
import './main.css'
import Movies from '../movies/movies'
import Preloader from '../pre-loader/pre-loader'
import Search from '../search/search'

const API_KEY = process.env.REACT_App_API_KEY
class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      data: {},
      isResult: true,
    }
  }
  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.setState({ data: data.Search })
      })
  }

  searchMovie = (searchText, type) => {
    console.log(searchText)
    const url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchText}${
      type !== 'All' ? `&type=${type}` : ''
    }`
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data['Response'])

        console.log(!data['Response'])
        if (data['Response'] === 'False') {
          this.setState({ isResult: false })
          console.log('1')
          this.setState({ data: [] })
        } else {
          console.log('2')
          this.setState({ data: data.Search })
        }
      })
  }
  render() {
    return (
      <main className="container content">
        <Search searchMovie={this.searchMovie} />

        {this.state.data.length ? (
          <Movies movies={this.state.data} />
        ) : this.state.isResult ? (
          <Preloader />
        ) : (
          <h5>not found</h5>
        )}
      </main>
    )
  }
}
export default Main
