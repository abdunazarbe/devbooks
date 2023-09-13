import React from 'react';
import { NavLink } from 'react-router-dom';
import "./style.scss";


const SettingHeader = () => {
  return (
   
      <header className="bg-[#e5e5e5]">
        <div className="container">
          <ul className="flex ">
            <li className="w-1/5 mx-1">
              <NavLink
                className="p-5 block mx-[5px]  mt-[5px] w-full bg-[#f3f6f9]"
                to="/settings/my-account"
              >
                Profil
              </NavLink>
            </li>
            <li className="w-1/5  mx-1">
              <NavLink
                className="p-5 block  mx-[5px] mt-[5px] w-full bg-[#f3f6f9]"
                to="/settings/security"
              >
                Hafsizlik
              </NavLink>
            </li>
            <li className="w-1/5 mx-1">
              <NavLink
                className="p-5 block  mx-[5px] mt-[5px] w-full bg-[#f3f6f9]"
                to="/settings/setting"
              >
                Sozlamalar
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
   
  );
};

export default SettingHeader;