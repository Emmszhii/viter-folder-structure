import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Roles from "./component/pages/developer/settings/users/roles/Roles";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/settings/users/roles" element={<Roles />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
