import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Roles from "./component/pages/developer/settings/users/roles/Roles";
import Users from "./component/pages/developer/settings/users/Users";
import System from "./component/pages/developer/settings/users/system/System";
import Other from "./component/pages/developer/settings/users/other/Other";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/settings/users" element={<Users />} />
          <Route path="/settings/users/system" element={<System />} />
          <Route path="/settings/users/others" element={<Other />} />
          <Route path="/settings/users/roles" element={<Roles />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
