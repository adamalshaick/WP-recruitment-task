import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from "./components/common/Loading";
const Landing = lazy(() => import("./components/landing/Landing"));
const NotFound = lazy(() => import("./components/common/NotFound"));

export const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact patch="/" component={Landing} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
