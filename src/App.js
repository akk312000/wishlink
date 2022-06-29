import './App.css';
import Products from './Products';
import Video from './Video';

function App() {
  return (

    <div className="App">
      <h1>Hello</h1>
      <div className='app__videos'>
        <Video/>
    <Products/>
    <Products/>
    <Products/>
    </div>
    </div>
  );
}

export default App;
