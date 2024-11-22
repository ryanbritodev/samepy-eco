// import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./pages/components/Layout";
import { Landing } from "./pages/Landing";
import { Login } from "./pages/Login";
import { Account } from "./pages/Account";
import { Stats } from "./pages/Stats";
import { Support } from "./pages/Support";
import { Register } from "./pages/Register";
import { NotFound } from "./pages/NotFound";

function App() {
  const isAuth = localStorage.getItem("email") !== null;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout isAuth={isAuth} />}>
          <Route index element={isAuth ? <Stats /> : <Landing />} />
          {!isAuth && (
            <>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </>
          )}
          {isAuth && (
            <>
              <Route path="stats" element={<Stats />} />
              <Route path="account" element={<Account />} />
              <Route path="support" element={<Support />} />
            </>
          )}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
