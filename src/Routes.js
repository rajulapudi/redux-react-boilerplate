import React, { Suspense, lazy } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
/* compulsory components - which will delay loading */
import NavigationBar from './components/NavigationBar'
import Loading from './components/Loading'

/* Lazy Components */
const HomePage = lazy(() => import('./components/HomePage'));


export default function Routes() {
    return (
        <div>
            <Router>
                <NavigationBar />
                <Suspense fallback={<Loading />}>
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                    </Switch>
                </Suspense>
            </Router>
        </div>
    );
}

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            localStorage.getItem('user') ? (
                <Component {...props} />
            ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: props.location }
                        }}
                    />
                )
        }
    />
);
