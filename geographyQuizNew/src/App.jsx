import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { useState } from "react";
import "./App.css";
import CountryCard from "./components/CountryCard";
import MainPage from "./components/MainPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<MainPage />} />
      <Route
        path="/countriesComplete"
        element={
          <CountryCard
            currentPage={currentPage}
            countriesPerPage={countriesPerPage}
          />
        }
      />
    </Route>
  )
);

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 10;

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
