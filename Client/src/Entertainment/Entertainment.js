import React, { Component } from 'react';
import axios from 'axios';
import DisplayEntertain from './DisplayEntertain.js';
import OutletEntertain from './OutletEntertain.js';
import '../Outlet.css';
import '../Search.css';
import '../Display.css';

const apiKey = 'ef2cedb19ca54e9e9d9d2f81d83ed9f0';
class Entertain extends Component {

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

    this.apiUrl = `https://newsapi.org/v2/sources?category=entertainment&apiKey=${apiKey}`;
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
              <OutletEntertain default={this.state.value} />
              <DisplayEntertain default={this.state.value} />
      
              
            </div>
    );
  }
}

export default Entertain;
