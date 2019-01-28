import React, { Component } from 'react';
import TwitterLogin from 'react-twitter-auth';

class Twitter extends Component {

    onSuccess = response => {
        response.json().then(user => {
            this.setState({isAuthenticated: true, user: user});
            console.log(user);
        });
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
                        requestTokenUrl="http://localhost:4000/user/auth/twitter/reverse"
                        className="btn btn-outline-primary"
                        text="Twitter"
                        forceLogin={true}
                        />
            </div>
        );
    }
}

export default Twitter;