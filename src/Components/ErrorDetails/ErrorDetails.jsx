import { useRouteError } from "react-router-dom";

const ErrorDetails = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <div>
            <h2>oops</h2>
            <h2>{error.status}</h2>
        </div>
    );
};

export default ErrorDetails;