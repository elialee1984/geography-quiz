import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { useState } from "react";
import "./App.css";
import CountryCard from "./components/CountryCard";
import CountryTable from "./components/CountryTable";
import MainPage from "./components/MainPage";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 20;

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
        <Route
          path="/countriesTable"
          element={
            <CountryTable
              currentPage={currentPage}
              countriesPerPage={countriesPerPage}
            />
          }
        />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
