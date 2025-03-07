import {useAuth, AutRoute} from "../../Components/Context/auth";

const Profile = () => {
    const {user} = useAuth()

    console.log('user => ', user.username)
    console.log('{user}', {user})

    return (
        <AutRoute>
            <h1>Profile</h1>
            Welcome {user.username}
        </AutRoute>
    )
};

export {Profile};