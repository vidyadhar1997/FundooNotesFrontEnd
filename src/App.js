import React from 'react';
import{BrowserRouter as  Router,Switch,Route} from 'react-router-dom'
import Login from './components/pages/login';
function App(){
    return(
        <div>
            <Router>
                <Switch>
                    <Route path='/login'  component={Login}/>
                </Switch>
            </Router>
        </div>
    );
}
export default App;