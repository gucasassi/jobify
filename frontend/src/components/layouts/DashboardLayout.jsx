import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { createContext, useContext, useState } from "react";

import Navbar from "../navigation/Navbar";
import MobileMenu from "../navigation/MobileMenu";
import DesktopSideBar from "../navigation/DesktopSideBar";

const Section = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
  }
`;

const DashboardContext = createContext();

const DashboardLayout = () => {
  const user = { name: "jhon" };

  const [showSidebar, setshowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    console.log("toggle dark theme");
  };

  const toggleSidebar = () => {
    setshowSidebar(!showSidebar);
  };

  const logoutUser = () => {
    console.log("logout user");
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        logoutUser,
        showSidebar,
        isDarkTheme,
        toggleSidebar,
        toggleDarkTheme,
      }}
    >
      <Section>
        <main className="dashboard">
          <MobileMenu />
          <DesktopSideBar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Section>
    </DashboardContext.Provider>
  );
};

export default DashboardLayout;

// eslint-disable-next-line react-refresh/only-export-components
export const useDashboardContext = () => useContext(DashboardContext);
