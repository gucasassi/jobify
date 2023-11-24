import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <div>navbar</div>
      <Outlet />
    </div>
  );
};

export default RootLayout;
