import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Header} from "cmn-components";
import {HomePage} from "./pages";
import './index.css';
import LangContext from './context';
import { useState } from 'react';

function App() {
  const [lang, setLang] = useState('en');

  return (
    <LangContext.Provider value={{lang, setLang}}>
        <Router>
            <Header/>
            <Switch>
                <Route path={'/'}>
                    <HomePage/>
                </Route>
            </Switch>
        </Router>
      </LangContext.Provider>
  );
}

export default App;
