import React from 'react';
import{BrowserRouter as  Router,Switch,Route} from 'react-router-dom'
import ArchiveNote from './component/Archive/ArchiveNote';
import Reminder from './component/Reminder/Reminder';
import PrivateRoute from './component/Rote/PrivateRoute';
import TrashNote from './component/Trash/TrashNote';
import ForgetPassword from './pages/ForgetPassword/ForgetPassword';
import Home from './pages/Home/Home';
import Login from './pages/Login/login';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import SignUP from './pages/SiginUp/SignUp';

function App(){
    return(
        <div>
            <Router>
                <Switch>
                    <Route path='/login'  component={Login}/>
                    <Route path='/signup'  component={SignUP}/>
                    <Route path='/forget'  component={ForgetPassword}/>
                    <Route path='/reset'  component={ResetPassword}/>
                    <PrivateRoute path="/home" component={ Home } />
                    <PrivateRoute path="/archive" component={ ArchiveNote } />
                    <PrivateRoute path="/reminder" component={ Reminder } />
                    <PrivateRoute path="/trash" component={ TrashNote } />
                    {/* <Route path='/home'  component={Home}/> 
                    <Route path='/archive'  component={ArchiveNote}/>
                    <Route path='/reminder'  component={Reminder}/>
                    <Route path='/trash'  component={TrashNote}/>  */}
                </Switch>
            </Router>
        </div>
    );
}
export default App;