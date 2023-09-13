import React, { useEffect } from "react";
import { Outlet,useNavigate, NavLink, Link } from "react-router-dom";
import SettingHeader from "./SettingHeader"
import { Button } from "antd";
import "./style.scss";

const index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/settings/my-account");
  }, []);

  return (
    <div>
      <SettingHeader />
      <Outlet />
      <div className="container">
        <Link to="/">
          <Button className="mt-12">Bosh Sahifa</Button>
        </Link>
      </div>
    </div>
  );
};

export default index;
