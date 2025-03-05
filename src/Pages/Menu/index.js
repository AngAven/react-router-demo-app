import {Link, NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <nav>
            <ul>
                {/*<li>*/}
                {/*    <Link to={'/'}>Home</Link>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <Link to={'/blog'}>Blog</Link>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <Link to={'/profile'}>Profile</Link>*/}
                {/*</li>*/}

                {/*<li>*/}
                {/*    <NavLink*/}
                {/*        // className={({isActive}) => 'active'}*/}
                {/*        style={({isActive})=> (*/}
                {/*            {color: isActive ? 'red' : 'blue'}*/}
                {/*        )}*/}
                {/*        to={'/'}*/}
                {/*    >Home</NavLink>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <NavLink to={'/blog'}>Blog</NavLink>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <NavLink to={'/profile'}>Profile</NavLink>*/}
                {/*</li>*/}

                {routes.map((route) => (
                    <li key={route.text}>
                        <NavLink
                            style={({isActive}) => ({
                                    color: isActive ? 'red' : 'blue'
                            })}
                            // style={({ isActive, isPending, isTransitioning }) => {
                            //     return {
                            //         fontWeight: isActive ? "bold" : "",
                            //         color: isPending ? "red" : "black",
                            //         viewTransitionName: isTransitioning ? "slide" : "",
                            //     };
                            // }}
                            to={route.to}
                        >
                            {({ isActive, isPending, isTransitioning }) => (
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

export {Menu};