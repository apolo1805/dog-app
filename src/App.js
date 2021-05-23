import 'bootstrap/dist/css/bootstrap.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import SubBreedComponent from './components/SubBreedComponent/SubBreedComponent';
import BreedsPage from './pages/BreedsPage/BreedsPage';
import HomePage from './pages/HomePage/HomePage';

function App() {

  return (
    <div className="App">

      <HashRouter>
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route exact path="/breeds">
            <BreedsPage/>
          </Route>
          <Route exact path="/:breed">
            <SubBreedComponent/>
          </Route>
        </Switch>
      </HashRouter>

    </div>
  );
}

export default App;
