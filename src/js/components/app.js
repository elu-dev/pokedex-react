import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './main'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/test" component={Main} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;
