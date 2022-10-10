import React from 'react'
import TypeContent from '../type-content/type-content'
class Search extends React.Component {
  constructor(props) {
    super()
    this.state = {
      inputText: '',
      selectType: 'All',
    }
  }
  handlerSearchPress = (e) => {
    if (e.keyCode === 13) {
      this.props.searchMovie(this.state.inputText, this.state.selectType)

      console.log(this.state.inputText, 'kasjhdgjkhasdgjkhsjk')
    }
  }
  handleChangeSelectType = (type) => {
    this.setState(
      () => ({ selectType: type }),
      () => {
        this.props.searchMovie(this.state.inputText, this.state.selectType)
      }
    )
  }
  render() {
    return (
      <div className="input-field col s6">
        <input
          id="icon_prefix"
          type="text"
          className="validate"
          placeholder="Search"
          onChange={(e) => {
            this.setState({ inputText: e.target.value })
          }}
          onKeyDown={this.handlerSearchPress}
        />
        <TypeContent handleType={this.handleChangeSelectType} />
      </div>
    )
  }
}
export default Search
