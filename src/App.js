import {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Header, IModal} from "cmn-components";
import {LandingPage} from "./pages";
import './index.css';
import {LangContext, AlertContext} from './context';

function App() {
  const [lang, setLang] = useState('en');
  const [alert, setAlert] = useState({
    type: '',
    active: false,
    text: ''
  });
  return (
    <LangContext.Provider value={{lang, setLang}}>
        <AlertContext.Provider value={{alert, setAlert}}>
          <Header/>
          <IModal type={alert.type} text={alert.text} show={alert.active} setShow={setAlert}/>
          <Router>
            
              <Switch>
                  <Route path={'/'}>
                      <LandingPage/>
                  </Route>
              </Switch>
          </Router>
        </AlertContext.Provider>
      </LangContext.Provider>
  );
}

export default App;
