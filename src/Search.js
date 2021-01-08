import React, { Component } from 'react';
import axios from 'axios';
import Display from './Display.js';
import './Display.css';
import Outlet from './Outlet.js';
import './Outlet.css';
import './Search.css';
const apiKey = '517e1eb7074b4b0f9543864552059bea';
class Search extends Component {

  constructor(props) {
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: [],
      count: 0,
      // value:'bbc-news'
      value: this.props.default
    };
    this.handleChange = this.handleChange.bind(this);

    this.apiUrl = `https://newsapi.org/v2/sources?language=en&apiKey=${apiKey}`;
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(this.state.value);
  }

  // Lifecycle method
  componentWillMount() {
    // Make HTTP reques with Axios
    axios.get(this.apiUrl).then(res => {
      // Set state with result
      this.setState({ data: res.data.sources });
      this.setState({ count: res.data.sources.length });
      //console.log(this.state.data);
      console.log(this.state.value);
    });
  }

  render() {
    return (
      <div >
       

        <h4 className="ABC">Select from {this.state.count} News Outlets</h4>
        <select class="selectpicker" className="ABC" data-style="btn-success" value={this.state.value} onChange={this.handleChange}>
          
          {this.state.data.map((outlet, i) => 
          {
            return (
              <option key={i} value={outlet.id}>
                {outlet.name}
              </option>
            );
          })}
        </select>
        <Outlet default={this.state.value} />
        <Display default={this.state.value} />

        
      </div>
      
    );
  }
}

export default Search;
