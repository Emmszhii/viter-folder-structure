import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Roles from "./component/pages/developer/settings/users/roles/Roles";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/settings/user/roles" element={<Roles />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
