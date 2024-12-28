import { Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";

const AdminNavbar = () => {

    const user = useContext(UserContext);
    console.log(user);

    return (
        <div className="bg-teal-950 px-10 py-5 flex items-center justify-between">
            <Link to={'/'} className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" className="h-8" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Mathan's Blog!</span>
            </Link>
            <ul className="font-medium text-white flex space-x-4">
                <li>Welcome {user.userName}</li>
                <li>
                    <Link to={'#'} className="">Logout</Link>
                </li>
            </ul>
        </div>
    )
};

export default AdminNavbar;