import React from 'react';
import{BrowserRouter as  Router,Switch,Route} from 'react-router-dom'
import Login from './components/pages/login';
import SignUP from './components/pages/SignUp';
function App(){
    return(
        <div>
            <Router>
                <Switch>
                    <Route path='/login'  component={Login}/>
                    <Route path='/signup'  component={SignUP}/>
                </Switch>
            </Router>
        </div>
    );
}
export default App;