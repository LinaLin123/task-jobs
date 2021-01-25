import React from 'react'
import { Route, Switch } from 'react-router-dom';
import './App.css';
import SearchListPage from './pages/SearchListPage'
import SearchDetailPage from './pages/SearchDetailPage'

function App() {
  return (
    <div>
     <Switch>
       <Route path="/id=:id" render = {(props) => {return <SearchDetailPage {... props} />}} />
       
       <Route path="/" component={SearchListPage} />
     </Switch>
     
    </div>
  );
}

export default App;
