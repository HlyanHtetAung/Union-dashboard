import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { Accounts, Home, Login, Volunteers } from "./pages";
import Patients from "./pages/Patients";
import {
  ACCOUNT_ROUTE,
  LOGIN_ROUTE,
  PATIENTS_ROUTE,
  VOLUNTEER_ROUTE,
} from "./utils/routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <>
          <Navbar />
          <Routes>
            <Route path="/">
              <Route path={"Union-dashboard/"} element={<Home />} />
              <Route path={ACCOUNT_ROUTE} element={<Accounts />} />
              <Route path={VOLUNTEER_ROUTE} element={<Volunteers />} />
              <Route path={PATIENTS_ROUTE} element={<Patients />} />
              <Route path={LOGIN_ROUTE} element={<Login />} />
            </Route>
          </Routes>
        </>
      </BrowserRouter>
    </>
  );
}

export default App;
