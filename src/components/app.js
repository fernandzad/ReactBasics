import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Exercises from '../pages/exercises'
import ExerciseNew from '../pages/exerciseNew'
import NotFound from '../pages/404'
import Click from './click'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/exercise" component={Exercises}/>
            <Route exact path="/exercise/new" component={ExerciseNew}/>
            <Route exact path="/exercise/click" component={Click}/>
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default App