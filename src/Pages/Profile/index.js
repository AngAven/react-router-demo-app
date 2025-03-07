import {useAuth, AutRoute} from "../../Components/Context/auth";

const Profile = () => {
    const {user} = useAuth()

    return (
        <AutRoute>
            <h1>Profile</h1>
            Welcome {user.username}
        </AutRoute>
    )
};

export {Profile};