import React, {Component} from 'react';
import AdvancedSearchGrid from './advancedSearchGrid'
import AdvancedSearchButton from './advancedSearchButton'

class Search extends Component {
  constructor(props){
    super(props);

    this.state = {
      advancedSearchToggleBool: false
    }

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleAdvancedSearchToggle = this.handleAdvancedSearchToggle.bind(this);
    this.handleAdvanceSearchSubmit = this.handleAdvanceSearchSubmit.bind(this);
  }

  handleFilterTextChange(e) {
    var value = e.target.value;
    this.props.onFilterTextChange(value);
  }


  handleAdvancedSearchToggle() {
    this.setState(prevState => ({
      advancedSearchToggleBool: !prevState.advancedSearchToggleBool
    }))
  }

  handleAdvanceSearchSubmit(e) {
    console.log(e);
    e.preventDefault();
  }

  render() {
    const advancedSearchToggleBool = this.state.advancedSearchToggleBool;

    // IF ADVANCED SEARCH IS NOT TOGGLED, NORMAL TEXT FILTER IS RENDERED; ELSE, THE ADVANCED SEARCH GRID IS RENDERED
    const searchGrid = advancedSearchToggleBool ? (
      <AdvancedSearchGrid onSubmit={this.handleAdvanceSearchSubmit} />
    ) : (
      <input
        className="form-control"
        type="text"
        onChange={this.handleFilterTextChange}
        placeholder="Search for..."
      />
    );

    return (
      <div>
        <AdvancedSearchButton onAdvancedSearchButtonClick={this.handleAdvancedSearchToggle} />
        {searchGrid}
      </div>
    )
  }
}


export default Search
