import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import Counting from './Counting';
import Greet from './conditions/Greet';
import Goal from './conditions/Goal/Goal';
import RefComponent from './useRef/RefComponent';
import Forms from './Forms/Forms';
import Destructuring from './destructuring/Destructuring';
import Char from './error-boundries/Char';
import ErrorBoundary from './error-boundries/ErrorBoundary';
import FetchApi from './api/FetchApi';

function App() {
  return (
    <div >
     {/* <Greeting />
     <Counting  count= {1} firstName = "Saravanan"/>
     <Greet/>
     <Goal/>
     <RefComponent/>
     <Forms/>
     <Destructuring/> */}
     {/* <Forms/>
     <ErrorBoundary >
     <Char name="Tom"/>
     </ErrorBoundary>
     
     <ErrorBoundary>
    <Char name="Jerry"/>
    </ErrorBoundary>
     
     <ErrorBoundary fallback={<Goal/>}>
     <Char name="Jhon"/>
     </ErrorBoundary> */}
     <FetchApi/>
    </div>
  );
}

export default App;
