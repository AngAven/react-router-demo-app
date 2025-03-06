import {Link, NavLink} from "react-router-dom";
import {useAuth} from "../../Components/Context/auth";

const Menu = () => {
    const {username} = useAuth()
    return (
        <nav className={'relative mb-15 '}>
            <ul className={'flex justify-between py-2 px-4 fixed top-0 right-0 left-0 bg-gray-100'}>
                {routes.map((route) => (
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
                ))}
            </ul>
        </nav>
    );
};

const routes = []
routes.push({
    to: '/',
    text: 'Home'
})
routes.push({
    to: '/blog',
    text: 'Blog'
})
routes.push({
    to: '/profile',
    text: 'Profile'
})
routes.push({
    to: '/login',
    text: 'Login'
})
routes.push({
    to: '/logout',
    text: 'Logout'
})

export {Menu};