import React from 'react';
import { Spin } from "antd";

const Loading = () => {
  return (
    <div className=" w-screen h-screen grid place-content-center absolute z-50 backdrop-blur-md top-0 left-0 bg-[#000000]">
      <Spin  size="large">
        <div className="content" />
      </Spin>
    </div>
  );
};

export default Loading;