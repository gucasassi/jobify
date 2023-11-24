import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Error Page</h1>
      <Link to="/">back home</Link>
    </div>
  );
};

export default ErrorPage;
