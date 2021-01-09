import React, { Component } from 'react';
import axios from 'axios';
import './Outlet.css';
import { findFlag } from './helpers';

class Outlet extends Component {
  constructor(props) {
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: []
    };
  }

  // Lifecycle method
  componentWillMount() {
    // Make HTTP reques with Axios
    this.getSources();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({ value: nextProps.default });
      this.getSources();
    }
  }

  getSources() {
    // Make HTTP reques with Axios
    const apiKey = '8a52c5367bb942d59170096fa552a8da';
    axios.get(`https://newsapi.org/v2/sources?language=en&apiKey=${apiKey}`).then(res => {
      // Set state with result
      this.setState({ data: res.data.sources });
    });
  }

  render() {
    return (
     
                
      <div className="outletSection mx-auto" >
        

        {this.state.data.map((item, y) => {
          if (item.id === this.state.value) {
            return (
              <div key={y} className="singleNew ">
                <div className="generalInfo">
                  
                  <img className="flagCode " src={findFlag(item.country)} alt="flag" />
                  <p><h1>{item.country.toUpperCase()}</h1></p>
                  
                </div>
               
              </div>
             
            );
          } else {
            return false;
          }
        })}
      </div>
     
    );
  }
}

export default Outlet;
