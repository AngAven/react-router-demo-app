import {useAuth} from "../../Components/Context/auth";

const LogOut = () => {
    const {logout: logoutContext} = useAuth()

    const logout = (e) => {
        e.preventDefault()
        logoutContext()
    }

    return (
        <>
            <form onSubmit={logout} className={'flex flex-col py-4 gap-y-2 items-center'}>
                <h1 className={'font-bold'}>Logout</h1>
                <label htmlFor="username">Would you like to logout?</label>

                <button type={'submit'} className={'border rounded px-6 py-2 bg-blue-500 text-white'}>Logout</button>
            </form>

        </>
    );
};

export {LogOut};