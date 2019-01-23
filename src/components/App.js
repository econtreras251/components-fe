import React, { Component } from 'react';
import TwitterLogin from 'react-twitter-auth';

class App extends Component {
    state = { isAuthenticated: false, user: null, token: '' };

    onSuccess = response => {
        alert('Se ha completado el Twitter Flow');
        console.log(response);
        this.setState({ isAuthenticated: true })
    }

    onFailed = error => {
        alert(error);
    }

    logout = () => {
        this.setState({ isAuthenticated: false, token: '', user: null })
    };

    render(){

        let content = !!this.state.isAuthenticated ? (
            <button onClick={this.logout}>
                logout
            </button>
        ) : (
            <TwitterLogin loginUrl="http://localhost:4000/user/auth/twitter"
                        onFailure={this.onFailed} onSuccess={this.onSuccess}
                        requestTokenUrl="http://localhost:4000/user/auth/twitter/reverse"/>
        );

        return(
           <div>
               { content }
           </div>
        );
    }
}

export default App;