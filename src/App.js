import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Form from './Form';
import Success from './Success';

function App() {
    return ( <
        Router >
        <
        Switch >
        <
        Route exact path = "/"
        component = { Form }
        /> <
        Route path = "/success"
        component = { Success }
        /> <
        /Switch> <
        /Router>
    );
}

export default App;