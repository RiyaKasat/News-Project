import React, { Component } from 'react';
import axios from 'axios';
import HealthDisplay from './HealthDisplay.js';
import HealthOutlet from './HealthOutlet.js';
import '../Outlet.css';
import '../Search.css';
import '../Display.css';

const apiKey = '517e1eb7074b4b0f9543864552059bea';
class Health1 extends Component {

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

    this.apiUrl = `https://newsapi.org/v2/sources?category=health&apiKey=${apiKey}`;
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
      <div >
       
      <div className="  ABC mx-auto">
              <h4>{this.state.count} News Outlets    </h4>
              <select class="selectpicker "  data-style="btn-success" value={this.state.value} onChange={this.handleChange}>
                
                {this.state.data.map((outlet, i) => 
                {
                  return (
                    <option key={i} value={outlet.id}>
                      {outlet.name}
                    </option>
                  );
                })}
              </select>
              </div>
              <HealthOutlet default={this.state.value} />
              <HealthDisplay default={this.state.value} />
      
              
            </div>
    );
  }
}

export default Health1;
