import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./components/usecontext-usereducer/pages/Home";
import Basket from "./components/usecontext-usereducer/pages/Basket";
import { StoreProvider } from "./components/usecontext-usereducer/context/StoreContext";
import ErrorBoundary from "./components/usecontext-usereducer/pages/ErrorBoundary";

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/basket"
              element={
                <ErrorBoundary>
                  <Basket />
                </ErrorBoundary>
              }
            />
          </Routes>
        </Router>
      </div>
    </StoreProvider>
  );
}

export default App;
