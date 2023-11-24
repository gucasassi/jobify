import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <Link to="/register">register</Link>
    </div>
  );
};

export default LoginPage;
