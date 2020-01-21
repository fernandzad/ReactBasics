import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ExercisesContainer from '../pages/exercisesContainer'
import ExerciseNewContainer from '../pages/exerciseNewContainer'
import NotFound from '../pages/404'
import Click from './click'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/exercise" component={ExercisesContainer}/>
            <Route exact path="/exercise/new" component={ExerciseNewContainer}/>
            <Route exact path="/exercise/click" component={Click}/>
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default App