// import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./pages/components/Layout";
import { Landing } from "./pages/Landing";
import { Login } from "./pages/Login";
import { Account } from "./pages/Account";
import { Stats } from "./pages/Stats";
import { Support } from "./pages/Support";
import { Register } from "./pages/Register";

function App() {
  const isAuth = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={isAuth ? <Stats /> : <Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="stats" element={<Stats />} />
          <Route path="account" element={<Account />} />
          <Route path="support" element={<Support />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
