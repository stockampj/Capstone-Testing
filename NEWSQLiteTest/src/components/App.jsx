import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import v4 from 'uuid';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  
  render(){
    return (
      <div>
        <NavBar />
        <div>
          <Switch>
            <Route exact path='/' render={()=><Home /> } />
          </Switch>  
        </div>  
      </div>
    );
  }
}
export default App;