import React, { Component } from 'react';
import TwitterLogin from 'react-twitter-auth';

class Twitter extends Component {

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


    render() {
        console.log(this.state)
        return (
            <div>
                <TwitterLogin loginUrl="http://localhost:4000/user/auth/twitter"
                        onFailure={this.onFailed} onSuccess={this.onSuccess}
                        requestTokenUrl="http://localhost:4000/user/auth/twitter/reverse"/>
            </div>
        );
    }
}

export default Twitter;