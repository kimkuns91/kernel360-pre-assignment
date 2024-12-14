import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import MainPage from "./pages/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<MainPage />} />
      </Route>
    </Routes>
  );
}

export default App;
