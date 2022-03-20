import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Register from './components/register';
import home from './components/home';
import Navigation from './components/Navigation';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          
          {/* <Navigation /> */}
          <Switch>
            <Route path="/" component={home} exact />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;


// function App() {
//   const [token, setToken] = useState('');

//   const userLogin = (tok) => {
//     setToken(tok);
//   }

//   return (
//     <div className="App">
//       {/* <Login userLogin={userLogin}/> */}
//     </div>
//   );
// }

// export default App;

