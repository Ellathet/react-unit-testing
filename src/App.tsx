import React, { useState } from 'react';
import List from './components/List';

function App() {

  return (
    <List
      initialData={['Micael', 'Juh', 'Will']}
    />
  )

}

export default App
