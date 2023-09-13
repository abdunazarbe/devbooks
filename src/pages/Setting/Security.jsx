

import UploadImage from "../../components/UI/Upload/Upload";
import { Form, Input, Button } from "antd";
import React from "react";

const Security = () => {
  const onFinish = (value) => {
    console.log(value);
  };
  return (
    <div className="container">
      <h1 className="text-2xl font-sans my-4">Malumotlarni yangilash</h1>

      <div className="flex py-16">
        <div className="form grow">
          <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
            <label htmlFor="name" className="block mb-8">
              <p>Email:</p>
              <Input
                className="mb-4 rounded-lg p-2 bg-slate-100 border-none "
                placeholder="Email"
              />
            </label>
            <label htmlFor="lastname" className="block mb-8">
              <p>hozirgi parol:</p>
              <Input
                type="password"
                className="mb-4 rounded-lg p-2 bg-slate-100 border-none "
                placeholder="************"
              />
            </label>

            <div className="flex gap-x-4">
              <label className="w-full" htmlFor="tel">
                <p>Yangi parol:</p>
                <Input
                  type="password"
                  className="mb-4 rounded-lg p-2 bg-slate-100 border-none "
                  placeholder="*************"
                />
              </label>
              <label className="w-full" htmlFor="email">
                <p>Parolni tasdiqlash:</p>
                <Input
                  type="password"
                  className="mb-4 rounded-lg p-2 bg-slate-100 border-none "
                  placeholder="*************"
                />
              </label>
            </div>

            <Button className=" bg-slate-500 text-white" htmlType="submit">
              Saqlash
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Security;