import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import TextField from "../components/inputs/TextField";

const Section = styled.section`
  min-height: 100vh;
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }
  h4 {
    text-align: center;
    margin-bottom: 1.38rem;
  }
  p {
    margin-top: 1rem;
    text-align: center;
    line-height: 1.5;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    color: var(--primary-500);
    letter-spacing: var(--letter-spacing);
    margin-left: 0.25rem;
  }
`;

const LoginPage = () => {
  return (
    <Section>
      <form className="form">
        <Logo />
        <h4>Login</h4>
        <TextField
          name="email"
          type="email"
          placeholder="jhon.doe@jobify.com"
          defaultValue="jhon.doe@jobify.com"
        />
        <TextField
          name="password"
          type="password"
          placeholder="*****"
          defaultValue="mILeRnOC"
        />
        <button type="submit" className="btn btn-block">
          Login
        </button>
        <button type="submit" className="btn btn-block">
          Explore App / Demo User
        </button>
        <p>
          Not a member yet?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </form>
    </Section>
  );
};

export default LoginPage;
