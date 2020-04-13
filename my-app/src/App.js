import React from 'react';
import './App.css';
import Router from './router'
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Route component={Router} />
    </div>
  );
}

export default App;
