import React, {Component} from 'react';
import Subscribe from './Subscribe';


export default class Cards extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div class="row">
                    <div className="col-md-4">
                        <Subscribe/>
                    </div>
                    <div className="col-md-4">
                        <Subscribe/>
                    </div>
                    <div className="col-md-4">
                        <Subscribe/>
                    </div>
                </div>
                
            </div>
        )
    }
}
