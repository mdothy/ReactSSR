import React from 'react'
import ReactDom from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'
import App from './wrapper/app.jsx'

const root = document.getElementById('root')

const render = (Component) => {
    ReactDom.hydrate(
        <AppContainer>
            <BrowserRouter>
                <Component />
            </BrowserRouter>
        </AppContainer>,
    root
    )
}

render(App)
if(module.hot){
    module.hot.accept('./wrapper/app.jsx',() => {
        NextApp = require('./wrapper/app.jsx').default
        render(NextApp)
    })
}