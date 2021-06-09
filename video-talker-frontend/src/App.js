import './App.css';
import {useEffect} from "react";
import {connectWithWebSocket} from "./utils/wssConnection/wssConnection";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import LoginPage from "./LoginPage/LoginPage";

function App() {

    useEffect(()=> {
        connectWithWebSocket()
    },[])

  return (

    <Router>
        <Switch>
            <Route exact path="/dashboard">
                <Dashboard/>
            </Route>
            <Route exact path="/">
                <LoginPage/>
            </Route>

        </Switch>
    </Router>

  );
}

export default App;
