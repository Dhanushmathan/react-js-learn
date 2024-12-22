import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const { status, statusText } = useRouteError();

    return (
        <div className="bg-blue-500 text-white max-w-xl mx-auto m-20 rounded p-10">
            <h4 className="text-3xl font-semibold">#{status} Oops! {statusText}</h4>
            <p>Sorry, something went wrong!</p>

            <div className="mt-10">
                <Link to={"/"} className="flex items-center hover:text-red-700 hover:underline">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" className=""><path fill="currentColor" fillRule="evenodd" d="m16.75 17l-7.5-5l7.5-5a.901.901 0 1 0-1-1.5l-8.502 5.668a1 1 0 0 0 0 1.664L15.75 18.5a.901.901 0 1 0 1-1.5" /></svg>
                    Back to Home
                </Link>
            </div>
        </div>
    )
};

export default ErrorPage;
