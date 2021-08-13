import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Notes from './pages/Notes'
import About from './pages/About'
import Sum from './pages/Sum'
import Article from './pages/Article'

import './App.css'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/sum" component={Sum} />
        <Route path="/about" component={About} />
        <Route path="/notes" component={Notes} />
        <Route path="/home" component={Home} />
        <Route path="/article" component={Article} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
