import React from "react";
import { Select, Button } from "flowbite-react";
import { Switch } from "antd";




const Setting = () => {
    const onChange = (checked) => {
      console.log(`switch to ${checked}`);
    };

  return (
    <div className="container">
      <div className="wrapper">
        <h1 className=" font-sans my-8 text-2xl">Sozlamalar</h1>
        <Select id="countries" required className="py-4">
          <option>UZBEK</option>
          <option>ENGLISH</option>
          <option>RUSSIAN</option>
          <option>DEU</option>
        </Select>
        <div className="py-3">
          <p className=" font-sans my-2">Mavzu</p>
          <Switch defaultChecked onChange={onChange} />
        </div>
        <div className="flex justify-between">
            <span></span>
          <Button className=" bg-slate-500 font-sans text-white" htmlType="submit">
            Saqlash
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Setting;
