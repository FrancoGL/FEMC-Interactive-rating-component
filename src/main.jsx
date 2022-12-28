import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {CardContextProvider} from "./context/CardContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CardContextProvider>
            <App/>
        </CardContextProvider>
    </React.StrictMode>,
)
