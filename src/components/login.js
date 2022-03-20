import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Login extends Component {
    state ={
        credentials: {username:'', password:''}
    }

    login = event => {
        fetch('http://localhost:8000/login/',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body : JSON.stringify(this.state.credentials)
        })
        .then(data => data.json() )
        
        .then(
            data => {console.log(data)}
        )
        .catch( error => console.error(error) )
    }


    // register = event => {
    //     fetch('http://127.0.0.1:8000/register/', {
    //       method: 'POST',
    //       headers: {'Content-Type': 'application/json'},
    //       body: JSON.stringify(this.state.credentials)
    //     })
    //     .then( data => data.json())
    //     .then(
    //       data => {
    //         console.log(data.token);
    //       }
    //     )
    //     .catch( error => console.error(error))
    //   }

    inputChanged = event => {
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({credentials:cred});
    }

    render(){
        return (
            <div>
                <h1>Login</h1>
                <label>
                    <input type="text" name="username" placeholder='username'
                    value={this.state.credentials.username}
                    onChange= {this.inputChanged}/>
                </label>
                <br />
                <label>
                    <input type="password" name="password" placeholder='password'
                    value={this.state.credentials.password}
                    onChange= {this.inputChanged}/>
                </label>
                <br />

                <input type="submit" onClick={this.login} value="Login" />
                <br/>
                <NavLink to="/register">Sign up</NavLink>
            </div>
        );

}
}

export default Login;
