import React from 'react'
import {Switch, Route} from 'react-router'

import Phones from '../pages/phones'
import New from '../pages/checks/new'
import Process from '../pages/checks/process'
import Done from '../pages/checks/done'

export const routes = (
    <Switch>
        <Route path='/' component={Phones} exact/>
        <Route path='/checks/new' component={New}/>
        <Route path='/checks/process' component={Process}/>
        <Route path='/checks/done' component={Done}/>
    </Switch>
)