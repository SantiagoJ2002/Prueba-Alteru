import './App.css';
import { Counter } from './Counter';
import { GetMovieList } from './fetchApi';

function App() {
  GetMovieList(2019)
  return (
    
    <div className="App">
      
        <Counter/>
    </div>
  );
}

export default App;
