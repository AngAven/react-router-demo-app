import {HashRouter, Routes, Route} from "react-router-dom";
import {HomePage} from "./Pages/HomePage";
import {Blog} from "./Pages/Blog";
import {NotFound} from "./Pages/NotFound/index";
import {Profile} from "./Pages/Profile";
import './App.css';
import {Menu} from "./Pages/Menu";

function App() {
  return (
    <HashRouter>
      <Menu/>
      <Routes>
        <Route path={'/'} element={<HomePage/>} />
        <Route path={'blog'} element={<Blog/>} />
        <Route path={'/profile'} element={<Profile/>} />
        <Route path={'*'} element={<NotFound/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
