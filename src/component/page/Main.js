import React from 'react';
import Contact from './Contact';
import Home from './Home';
import Portofolio from './Portofolio';
import Profile from './Profile';
import{Route} from 'react-router-dom';
import{Switch} from 'react-router-dom';


class Main extends React.Component{
    render(){
        return(
            <div>   
                <Switch> 
                <Route exact path="/" component={Home}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/profile" component={Profile}/>
                <Route exact path="/portofolio" component={Portofolio}/>
                <Route exact path="/contact" component={Contact}/>
                
                </Switch>
            </div>
            )
    }}

    export default Main;