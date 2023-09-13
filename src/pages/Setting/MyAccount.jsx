import UploadImage from "../../components/UI/Upload/Upload";
import { Form, Input, Button } from "antd";
import React from "react";

const MyAccount = () => {
  const onFinish = (value) => {
    console.log(value);
  };
  return (
    <div className="container">
      <div className="flex py-16">
        <div className="avatar  w-[400px] p-4">
          <UploadImage />
        </div>
        <div className="form grow">
          <h1 className="text-2xl font-sans my-4">Mening Sahifam</h1>
          <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
            <label htmlFor="name">
              <p>Ismingiz:</p>
              <Input
                className="mb-4 rounded-lg p-2 bg-slate-100 border-none "
                placeholder="Ismingiz"
              />
            </label>
            <label htmlFor="lastname">
              <p>Sharifingiz:</p>
              <Input
                className="mb-4 rounded-lg p-2 bg-slate-100 border-none "
                placeholder="Sharifingiz"
              />
            </label>

            <div className="flex gap-x-4">
              <label className="w-full" htmlFor="tel">
                <p>Tel:</p>
                <Input
                  type="tel"
                  className="mb-4 rounded-lg p-2 bg-slate-100 border-none "
                  placeholder="Tel"
                />
              </label>
              <label className="w-full" htmlFor="email">
                <p>Email:</p>
                <Input
                  type="email"
                  className="mb-4 rounded-lg p-2 bg-slate-100 border-none "
                  placeholder="Email"
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


export default MyAccount;
