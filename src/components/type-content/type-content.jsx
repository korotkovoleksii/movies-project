import React from 'react'
import './type-content.css'
class TypeContent extends React.Component {
  constructor() {
    super()
    this.state = {
      selectType: 'All',
    }
  }
  handleChangeRadio = (e) => {
    this.props.handleType(e.target.value)
    this.setState(() => ({
      selectType: e.target.value,
    }))
  }
  render() {
    return (
      <div className="select-type-content">
        <p>
          <label>
            <input
              className="with-gap"
              name="group1"
              type="radio"
              value="All"
              onChange={this.handleChangeRadio}
              checked={this.state.selectType === 'All'}
            />
            <span>All</span>
          </label>
        </p>
        <p>
          <label>
            <input
              className="with-gap"
              name="group1"
              type="radio"
              value="Movie"
              onChange={this.handleChangeRadio}
              checked={this.state.selectType === 'Movie'}
            />
            <span>Movie</span>
          </label>
        </p>
        <p>
          <label>
            <input
              className="with-gap"
              name="group1"
              value="Game"
              type="radio"
              onChange={this.handleChangeRadio}
              checked={this.state.selectType === 'Game'}
            />
            <span>Game</span>
          </label>
        </p>
      </div>
    )
  }
}

export default TypeContent
