import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Header  from '../components/header'
import RegisterDonor from '../components/register'
import SearchDonors from '../components/search'
const routes = (
<Route>
    <Route path="/" component={Header}>
    <IndexRoute component={ RegisterDonor } ></IndexRoute>
        <Route path ="search" component={SearchDonors}></Route>
    </Route>
</Route>
)
export default routes