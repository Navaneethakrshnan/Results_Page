import logo from './logo.svg';
import './App.css';
import RaceResults from './components/RaceResults';
import SingleResult from './components/SingleResult'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <RaceResults />
      {/* <SingleResult/> */}
    </div>
  );
}

export default App;
