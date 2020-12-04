import React, {Component} from 'react';
import AllUsers from "./components/allUsers/AllUsers";

class App extends Component {


//     state ={flag: false}
// test = ()=> {
//     this.setState({flag: !this.state.flag}) // вставлять свойства которые нужно изменить, остальные запишутся автоматом
//   console.log('test');
// };
    render() {
        return (
            <div>
                <AllUsers/>
              {/*<button onClick={this.test} > button {this.state.flag.toString()} </button>*/}
            </div>
        );
    }
}

export default App;