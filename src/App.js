import {HashRouter, Routes, Route} from "react-router-dom";
import {HomePage} from "./Pages/HomePage";
import {Blog} from "./Pages/Blog";
import {NotFound} from "./Pages/NotFound/index";
import {Profile} from "./Pages/Profile";
import {Menu} from "./Pages/Menu";
import {Index} from "./Pages/BlogPost";
import {BlogProvider} from "./Components/Context";
import {Login} from "./Pages/Login";
import {LogOut} from "./Pages/LogOut";
import {AuthProvider, AutRoute} from "./Components/Context/auth";
import './App.css';

function App() {
    return (
        <BlogProvider>
            <HashRouter>
                <AuthProvider>
                    <Menu/>
                    <Routes>
                        <Route path={'/'} element={<HomePage/>}/>
                        <Route path={'blog'} element={<Blog/>}>
                            <Route path={':slug'} element={<Index/>}/>
                        </Route>
                        <Route path={'login'} element={<Login/>}/>
                        <Route path={'logout'}
                               element={
                                   <AutRoute>
                                       <LogOut/>
                                   </AutRoute>
                               }/>
                        <Route path={'profile'}
                               element={
                                   <AutRoute>
                                       <Profile/>
                                   </AutRoute>
                               }/>
                        <Route path={'profile'} element={<Profile/>}/>
                        <Route path={'*'} element={<NotFound/>}/>
                    </Routes>
                </AuthProvider>
            </HashRouter>
        </BlogProvider>
    );
}

export default App;
