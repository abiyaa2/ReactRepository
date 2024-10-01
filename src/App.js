import logo from './logo.svg';
import './App.css';
import ReduxCounter from './REDUX/ReduxCounter/ReduxCounter';
import Product from './ProductPage/Product';

function App() {
  return (
    <div className="App">
      <ReduxCounter/>
      {/* <Product/> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
         
        </a>
      </header> */}
    </div>
  );
}

export default App;
