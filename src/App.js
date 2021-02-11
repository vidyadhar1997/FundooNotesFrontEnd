import React from 'react';
import{BrowserRouter as  Router,Switch,Route} from 'react-router-dom'
import Login from './components/pages/Login/login';
import ResetPassword from './components/pages/ResetPassword/ResetPassword';
import SignUP from './components/pages/SiginUp/SignUp';
import ForgetPassword from './components/pages/ForgetPassword/ForgetPassword';
import DashBord from './components/pages/DashBord/DashBord';
function App(){
    return(
        <div>
            <Router>
                <Switch>
                    <Route path='/login'  component={Login}/>
                    <Route path='/signup'  component={SignUP}/>
                    <Route path='/forget'  component={ForgetPassword}/>
                    <Route path='/reset'  component={ResetPassword}/>
                    <Route path='/dashbord'  component={DashBord}/>
                </Switch>
            </Router>
        </div>
    );
}
export default App;