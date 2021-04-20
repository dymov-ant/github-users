import React from "react"
import {Redirect, Route, Switch} from "react-router-dom"
import ListPage from "./pages/listPage"
import {LIST_ROUTE, USER_ROUTE} from "./utilits/constants"
import UserPage from "./pages/userPage"

function App() {
  return (
    <div className="container">
      <Switch>
        <Route path={LIST_ROUTE} component={ListPage} exact/>
        <Route path={USER_ROUTE} component={UserPage} exact/>
        <Redirect to={LIST_ROUTE}/>
      </Switch>
    </div>
  )
}

export default App