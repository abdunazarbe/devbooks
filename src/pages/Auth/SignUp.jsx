import React from "react";
import { Button,Form, Input } from "antd";
import IMG from "../../assets/images/Signup.png";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../service/auth/useAuth";
import { ToastContainer, toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();
 

  const onFinish = (values) => {
    console.log("Success", values);

    const newUser = {
      first_name: values.firstName,
      last_name: values.lastName,
      phone: values.phone,
      password: values.password,
      email: values.email,
    
    };

    console.log(newUser);


    useAuth
      .register(values)
      .then((res) => {
        console.log(res);
       if(res.data.status===201){
          console.log(res);
           toast.success(`${values.firstName} muvaffaqiyatli royhatdan utildi`);
           setTimeout(() => {
             navigate("/signin");
           }, 1600);
       }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Xatolik!");
      });
  }; 

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    toast.warn("Maydonlarni toldiring!");
  };

  return (
    <>
      <div className="grid grid-cols-2 items-center w-full mx-auto h-screen gap-x-[81px]">
        <div className="item bg-[#c9ac8c] h-full flex items-center justify-end me-4 ">
          <img src={IMG} alt="" />
        </div>
        <div className="item">
          <ToastContainer />
        <h1 className="text-[24px] font-bold font-['ArialBlack']">RUYHATDANN UTISH</h1>
          <h2 className=" my-8 text-sm font-sans">
            Avval ruyhatdan utgansizmi?
            <Link to="/signin" className="text-blue-400">
              (Kirish)
            </Link>
          </h2>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="FirstName"
              rules={[
                {
                  required: true,
                  message: "Iltimos ismingizni kiriting",
                },
              ]}
            >
              <Input
                className=" rounded-lg py-2 outline-none "
                placeholder="Ism"
              />
            </Form.Item>

            <Form.Item
              name="LastName"
              rules={[
                {
                  required: true,
                  message: "Iltimos sharifingizni kiriting",
                },
              ]}
            >
              <Input
                className=" rounded-lg py-2 outline-none "
                placeholder="Sharif"
              />
            </Form.Item>

            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Iltimos telefon raqamni kiriting",
                },
              ]}
            >
              <Input
                type="tel"
                className=" rounded-lg py-2 outline-none"
                placeholder="Tel"
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Iltimos emailni kiriting",
                },
              ]}
            >
              <Input
                className=" rounded-lg py-2 outline-none"
                placeholder="Email"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Iltimos porolni kiriting",
                },
              ]}
            >
              <Input.Password className="py-2 mt-4 outline-none" placeholder="Parol" />
            </Form.Item>

            <Form.Item>
              <Button
                className=" mx-auto block bg-slate-700 text-white rounded-2xl w-full mt-4 hover:text-white"
                htmlType="submit"
              >
                Ruyhatdan utish
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};
export default SignUp;
