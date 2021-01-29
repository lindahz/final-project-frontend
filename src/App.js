import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { Main } from './pages/Main'
import { ClinicDetails } from './pages/ClinicDetails'
import { Navbar } from './compontents/Navbar'
import { About } from './pages/About'
import { Facts } from './pages/Facts'
import { Contact } from './pages/Contact'
import { NotFound } from './pages/NotFound'
import { clinics } from './reducers/clinics'

const reducer = combineReducers({
  clinics: clinics.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/kliniker/:id" exact>
            <ClinicDetails />
          </Route>
          <Route path="/fakta-och-rad" exact>
            <Facts />
          </Route>
          <Route path="/om-oss" exact>
            <About />
          </Route>
          <Route path="/kontakt" exact>
            <Contact />
          </Route>
          <Route path="/404">
            <NotFound />
          </Route>
          <Redirect to="/404" />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}
