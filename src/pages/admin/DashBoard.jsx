import React, { useContext } from 'react'
import UserContext from '../../contexts/UserContext';

const DashBoardPage = () => {

    const user = useContext(UserContext);

    return (
        <div>
            <h4>Dashboard for Mr.{user.userName} User!!!</h4>
        </div>
    )
}

export default DashBoardPage;