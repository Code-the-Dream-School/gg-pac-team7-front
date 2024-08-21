import React, { useState, useEffect } from 'react';
import { getAllData } from './util/index';
import Register from './Register';

const URL = 'http://localhost:8000/api/v1/';

function App() {

  return (
    <>
      <main className="App"> 
        <Register /> 
      </main>
    </>
  );

}

export default App
