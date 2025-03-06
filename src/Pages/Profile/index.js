import {useAuth} from "../../Components/Context/auth";

const Profile = () => {
    const {user} = useAuth()
    console.log(user)
    return (
        <>
            <h1>Profile</h1>
            {user?.userName}
        </>
    );
};

export {Profile};