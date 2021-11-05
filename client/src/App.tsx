import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ErrorHandler from './lib/errorHandler';

import Home from './Pages/Home';
import Page404 from './Pages/Page404';

function App() {
    return (
        <BrowserRouter>
            <ErrorHandler>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route component={Page404} />
                </Switch>
            </ErrorHandler>
        </BrowserRouter>
    );
}

export default App;
