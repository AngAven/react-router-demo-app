import {HashRouter, Routes, Route} from "react-router-dom";
import {HomePage} from "./Pages/HomePage";
import {Blog} from "./Pages/Blog";
import {NotFound} from "./Pages/NotFound/index";
import {Profile} from "./Pages/Profile";
import {Menu} from "./Pages/Menu";
import {BlogPost} from "./Pages/BlogPost/BlogPost";
import {BlogProvider} from "./Components/Context";
import './App.css';

function App() {
    return (
        <BlogProvider>
            <HashRouter>
                <Menu/>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'blog'} element={<Blog/>}>
                        <Route path={':slug'} element={<BlogPost/>}/>
                    </Route>
                    <Route path={'profile'} element={<Profile/>}/>
                    <Route path={'*'} element={<NotFound/>}/>
                </Routes>
            </HashRouter>
        </BlogProvider>
    );
}

export default App;
