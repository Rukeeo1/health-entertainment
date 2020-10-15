import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import Loader from './components/Loader';
import { publicRoutes } from './routes';


function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Suspense fallback={<Loader fullpage={false} />}>
            <Switch>
              {publicRoutes.map((route, index) => {
                return (
                  <Route
                    path={route.url}
                    component={route.component}
                    key={index}
                    exact
                  />
                );
              })}
            </Switch>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;
