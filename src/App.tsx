import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PodcastUrl } from "./Components/PodcastUrl";

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/podcast-url' element={<PodcastUrl/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
