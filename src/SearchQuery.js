import React, { Component } from 'react'

export class SearchQuery extends Component {
   constructor() {
    super();
    this.state = {
     search: null,
      
    };
    
    this.publish = this.publish.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }

  publish() {
    console.log( this.state.search );
  }
  
  render() {
    return <div>
      <input 
        type="text" 
        name="search" 
        placeholder="Search news" 
        value={ this.state.search }
        onChange={ this.handleChange } 
      />
      
      
      
      <button value="Search" onClick={ this.publish }>Publish</button>
    </div>
  }
}

export default SearchQuery
