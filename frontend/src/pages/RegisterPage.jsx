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

const RegisterPage = () => {
  return (
    <Section>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <TextField name="name" placeholder="Jhon" defaultValue="Jhon" />
        <TextField name="surname" placeholder="Doe" defaultValue="Doe" />
        <TextField
          name="location"
          placeholder="New York"
          defaultValue="New York"
        />
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
          Register
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Section>
  );
};

export default RegisterPage;
