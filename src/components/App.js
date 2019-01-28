import React, { Component } from 'react';
import Header from './Header';

class App extends Component {
    state = { isAuthenticated: false, user: null, token: '' };

    render(){
        return(
           <div>
               <Header state={this.state}/>
               { this.props.children }
           </div>
        );
    }
}

export default App;