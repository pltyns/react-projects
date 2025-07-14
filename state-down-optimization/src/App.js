import './App.css';
import ExpensiveTree from './ExpensiveTree';
import Form from './Form';


function App() {
  return (
    //State down yöntemi ile ExpensiveTree bileşeninin render edilmesi engellendi.
    <div>  
      <Form />
      <ExpensiveTree /> 
    </div>
  ); }
export default App;


