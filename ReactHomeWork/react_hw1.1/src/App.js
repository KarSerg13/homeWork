import React, {Component} from 'react';
import CarList from "./сomponents/carList";
import {Сars} from "./dB/cars";

class App extends Component {
    render() {
        return (
            <div>
                {
                  Сars.map((car,index)=>
                      (<CarList item = {car} key = {index}/>))
                }
            </div>
        );
    }
}
export default App;