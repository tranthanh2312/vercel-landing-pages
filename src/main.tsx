import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Latest from './Latest';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path='' element={<Latest />}> 
            {/* <Route index element={<Latest />} /> */}
      </Route>
    </Routes> 
  </BrowserRouter>
)
