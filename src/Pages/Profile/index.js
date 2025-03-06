import {useAuth, AutRoute} from "../../Components/Context/auth";
import {Navigate, useNavigate} from "react-router-dom";

const Profile = () => {
    const {user} = useAuth()

    return (
        <AutRoute>
            <h1>Profile</h1>
            Welcome {user.userName}
        </AutRoute>
    )
};

export {Profile};