import React from 'react';
import Happytrack from './happytracker';
import Sadtracker from './sadtracker';
import Happyinc from './happyinc';
import Sadinc from './sadinc';
function App() {
  return (
    <div className="App">
      <Happytrack/>
      <Sadtracker/>
      <Happyinc />
      <Sadinc />
    </div>
  );
}
export default App;
