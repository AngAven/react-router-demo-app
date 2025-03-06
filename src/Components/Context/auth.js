import {useContext, createContext, useState} from "react";
import {Navigate, useNavigate} from "react-router-dom";

const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    const login = (username) => {
        setUser(username)
        navigate('/profile')
    }

    const logout = () => {
        setUser(null)
        navigate('/')
    }

    const auth = {user, login, logout}

    return(
        <AuthContext.Provider value={
            auth
        }>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => {
    return useContext(AuthContext)
}

const AutRoute = (props) => {
    const {user} = useAuth()

    if (!user) {
        return <Navigate to={'/login'}/>
    }

    return props.children
}

export {
    AuthProvider,
    useAuth,
    AutRoute,
}