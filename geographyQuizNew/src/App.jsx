import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import CountryNames from "./components/CountryNames";

const router = createBrowserRouter();

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
      <CountryNames />
    </div>
  );
};

export default App;
