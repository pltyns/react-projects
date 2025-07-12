import { useState } from 'react';
import ExpensiveTree from './ExpensiveTree';


function App() {
  let [color, setColor] = useState('red');
    return (
    // ExpensiveTree bileşeninde herhangi bir state tutulmamıştır. 
    // Bundan dolayı ExpensiveTree bileşeninin tekrar render edilmesine gerek yoktur.
    <div>
    <input value={color} onChange={(e) => setColor(e.target.value)}/>
    <p style={color}>Hello ,I am a Developer !!</p>
      <ExpensiveTree /> 
    </div>
  ); }
export default App;


