import {useState} from "react";
import {useAuth} from "../../Components/Context/auth";

const Login = () => {
    const [userName, setUserName] = useState('')
    const {user, login: loginContext, logout} = useAuth()

    const changeValue = (e) => {
        const value = e.target.value
        setUserName(value)
    }

    const login = (e) => {
        e.preventDefault()
        loginContext({userName})
    }

    return (
        <>
            <form onSubmit={login} className={'flex flex-col py-4 gap-y-2 items-center'}>
                <h1 className={'font-bold'}>Login</h1>
                <label htmlFor="username">Username</label>
                <input
                    id={'username'}
                    name={'username'}
                    onChange={(e) => changeValue(e)}
                    type="text"
                    value={userName}
                    className={'border rounded'}
                />

                <button type={'submit'} className={'border rounded px-6 py-2 bg-blue-500 text-white'}>Login</button>

            </form>

        </>
    );
};

export {Login};