import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {HomePage} from "./pages";
import './index.css';
import {Header} from "cmn-components";

function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route path={'/'}>
                    <HomePage/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
