import React, { Component } from 'react';
import axios from 'axios';
import DisplayBusiness from './DisplayBusiness.js';
import OutletBusiness from './OutletBusiness.js';


const apiKey = '517e1eb7074b4b0f9543864552059bea';
class Business1 extends Component {

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

    this.apiUrl = `https://newsapi.org/v2/sources?category=business&apiKey=${apiKey}`;
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
      console.log(res.data);
    });
  }

  render() {
    return (
      <div className="">
        <h4>Select from {this.state.count} News Outlets</h4>
        <select value={this.state.value} onChange={this.handleChange}>
          
          {this.state.data.map((outlet, i) => {
            return (
              <option key={i} value={outlet.id}>
                {outlet.name}
              </option>
            );
          })}
        </select>
        {/* <Outlet default={this.state.value} /> */}
        <OutletBusiness default={this.state.value} />
       <DisplayBusiness default={this.state.value} />
      </div>
    );
  }
}

export default Business1;
