import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Header from '../Components/Header/Header';
import Sidebar from '../Components/Sidebar/Sidebar';
import MainStats from '../Components/Main/MainStats';
import Profile from '../Pages/Profile/Profile';


const Main = () => {
    return (
        <>
            <Sidebar />
            <div className="relative md:ml-64 bg-blueGray-100">
                <Header />
                <MainStats />
                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                    <Router>
                        <Switch>
                            <Route exact path="/main/profile" component={Profile} />
                            <Redirect from="/main" to="/main/dashboard" />
                        </Switch>
                    </Router>
                </div>
            </div>
        </>
    );
}

export default Main;