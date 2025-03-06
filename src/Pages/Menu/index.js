import {Link, NavLink} from "react-router-dom";
import {useAuth} from "../../Components/Context/auth";

const Menu = () => {
    const {user} = useAuth()

    return (
        <nav className={'relative mb-15 '}>
            <ul className={'flex justify-between py-2 px-4 fixed top-0 right-0 left-0 bg-gray-100'}>
                {routes.map((route) => {
                    if (route.to.includes('login') && user) return null
                    if (route.private && !user) return  null
                    return(
                        <li key={route.text}>
                            <NavLink
                                style={({isActive}) => ({
                                    color: isActive ? 'red' : 'blue'
                                })}
                                to={route.to}
                            >
                                {({isActive, isPending, isTransitioning}) => (
                                    <span className={isActive ? "active" : "old"}>
                                    {route.text}
                                </span>
                                )}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
};

const routes = []
routes.push({
    to: '/',
    text: 'Home',
    private: false,
})
routes.push({
    to: '/blog',
    text: 'Blog',
    private: false,
})
routes.push({
    to: '/profile',
    text: 'Profile',
    private: true,
})
routes.push({
    to: '/login',
    text: 'Login',
    private: false,
})
routes.push({
    to: '/logout',
    text: 'Logout',
    private: true,
})

export {Menu};