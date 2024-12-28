import React, { useContext } from 'react'
import UserContext from '../../contexts/UserContext';

const DashBoardPage = () => {

    const { user, setUser } = useContext(UserContext);

    return (
        <div className='space-y-5'>
            <h4>Dashboard for Mr.{user.userName} User!!!</h4>
            <hr />
            <button className='px-4 py-2 bg-purple-600 text-white hover:bg-purple-700 rounded' onClick={() => setUser({ ...user, userName: "Hinata" })}>Login with Hinata</button>
        </div>
    )
}

export default DashBoardPage;