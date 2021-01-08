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
    const apiKey = '517e1eb7074b4b0f9543864552059bea';
    axios.get(`https://newsapi.org/v2/sources?language=en&apiKey=${apiKey}`).then(res => {
      // Set state with result
      this.setState({ data: res.data.sources });
    });
  }

  render() {
    return (
     
                
      <div className="outletSection ABC" class="jumbotron-fluid">
        

        {this.state.data.map((item, y) => {
          if (item.id === this.state.value) {
            return (
              <div key={y} className="singleNew ABC">
                <div className="generalInfo ABC">
                  <h4>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      {item.name}
                    </a>
                  </h4>
                  <img className="flagCode ABC" src={findFlag(item.country)} alt="flag" />
                  <p>{item.country.toUpperCase()}</p>
                  
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
