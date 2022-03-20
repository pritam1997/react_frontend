import React, {Component} from 'react';

class Register extends Component {
    state ={
        credentials: {username:'', email:'', password:''}
    }


    register = event => {
        fetch('http://127.0.0.1:8000/register/', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(this.state.credentials)
        })
        .then( data => data.json())
        .then(
          data => {
            console.log(data.token);
          }
        )
        .catch( error => console.error(error))
      }

    inputChanged = event => {
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({credentials:cred});
    }

    render(){
        return (
            <div>
                <h1>Sign up</h1>
                <label>
                    <input type="text" name="username" placeholder='username'
                    value={this.state.credentials.username}
                    onChange= {this.inputChanged}/>
                </label>
                <br />

                <label>
                    <input type="email" name="email" placeholder='email'
                    value={this.state.credentials.email}
                    onChange= {this.inputChanged}/>
                </label>
                <br />

                <label>
                    <input type="password" name="password" placeholder='password'
                    value={this.state.credentials.password}
                    onChange= {this.inputChanged}/>
                </label>
                <br />

                <input type="submit" onClick={this.register} value="Sign up" />
            </div>
        );

}
}

export default Register;

