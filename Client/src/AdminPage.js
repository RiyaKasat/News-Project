import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import AppWithRouterAccess from './AppWithRouterAccess';


export class AdminPage extends Component {
   
    render() {
        
        return (
            <div>
               
                
              <Router>  
              <AppWithRouterAccess/>
              </Router>   
            </div>
        )
    }
}

export default AdminPage


   
