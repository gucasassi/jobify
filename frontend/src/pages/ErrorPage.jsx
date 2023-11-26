import styled from "styled-components";
import { Link, useRouteError } from "react-router-dom";

import img from "../assets/img/not-found.svg";

const Main = styled.main`
  min-height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
    margin-top: -3rem;
  }
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    line-height: 1.5;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: var(--text-secondary-color);
  }
  a {
    color: var(--primary-500);
    text-transform: capitalize;
  }
`;

const ErrorPage = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Main>
        <div>
          <img src={img} alt="not found" />
          <h3>Ohh! page not found</h3>
          <p>We can't seem to find the page you are looking for</p>
          <Link to="/">back home</Link>
        </div>
      </Main>
    );
  }

  return (
    <Main>
      <h3>something went wrong</h3>
    </Main>
  );
};

export default ErrorPage;
