import React, { Component } from 'react'

export class SearchForm extends Component {

    constructor(props){
        super(props);
    
        this.state = {
          searchquery: ''  
        }
    }   
    
      submitForm = (e) => {
        e.preventDefault();
    
        this.props.handleData(this.state)
      } 
    
       onChange = (e) => {
         this.setState({
          searchquery: e.target.value
         });
       }
    render() {
        return (
            <div>
                <ul className="nav navbar-nav ml-auto " >
            <form class="navbar-form  d-none d-lg-block  " role="search" >
            <div class="input-group" >
        
              <input className="form-control" name="searchquery" type="search" placeholder="Search news" onChange={this.onChange}></input>
              <div class="input-group-btn">
              <input type="button" value="Submit" onClick={this.submitForm}/>
              {/* <button className="btn btn-outline-primary "  type="submit">Search</button> */}
              </div>
              </div>
                </form>  
                </ul>
            </div>
        )
    }
}

export default SearchForm
