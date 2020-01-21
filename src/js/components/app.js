import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Main from './main'

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/test" component={Main} />
            </Switch>
        </Router>
    )
}

export default App;
