import React, {Component} from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import Main from './component/page/Main';
import MyAppBar from './component/MyAppBar';
import { Button } from '@material-ui/core';


class App extends Component {
    render(){
        return(
           
            <div>
                <MyAppBar/> 
                <hr/>
                <Main/>
            </div>
        )
   
    }
}

export default App;
