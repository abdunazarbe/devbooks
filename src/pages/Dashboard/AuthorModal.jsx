import React, { useReducer, useState } from "react";
import UploadImage from "../../components/UI/Upload/Upload";
import { ToastContainer, toast } from "react-toastify";
import { Modal, Input, Select } from "antd";
import { Textarea } from "flowbite-react";

const AuthorModal = ({ modal2, countryList, modal }) => {
  const onChange = (value) => {
    console.log(`selected ${value}`);
    dispatch({ type: "SET_COUNTRY_ID", payload: value });
  };

  const onSearch = (value) => {
    console.log("search:", value);
  };

  const setImage = (value) => {
    console.log("image:", value);
    dispatch({ type: "SET_IMAGE", payload: value });
  };

  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const intState = {
    f_name: "",
    l_name: "",
    b_date: "",
    d_date: "",
    country_id: "",
    bio: "",
    image: "",
  };

  const reduser = (state, action) => {
    switch (action.type) {
      case "SET_NAME":
        return { ...state, f_name: action.payload };
      case "SET_LAST_NAME":
        return { ...state, l_name: action.payload };
      case "SET_B_DATE":
        return { ...state, b_date: action.payload };
      case "SET_D_DATE":
        return { ...state, d_date: action.payload };
      case "SET_COUNTRY_ID":
        return { ...state, country_id: action.payload };
      case "SET_BIO":
        return { ...state, bio: action.payload };
      case "SET_IMAGE":
        return { ...state, image: action.payload };

      default:
        return state;
    }
  };

  const [{ f_name, l_name, b_date, d_date, bio, country_id, image }, dispatch] =
    useReducer(reduser, intState);


  const modal1=()=>{
    modal();
    console.log(intState);
  }



  return (
    <>
      <ToastContainer />
      <Modal
        okText="Saqlash"
        cancelText="Bekor qilish"
        title="Muallif qushish"
        open={modal2}
        onOk={() => modal1()}
        onCancel={() => modal1()}
        width={"1000px"}
      >
        <div className="flex">
          <div className="p-5 w-[400px]">
            <UploadImage setImage={setImage} />
          </div>
          <div className="p-5 grow">
            <label htmlFor="name">
              <p>Ismi:</p>
              <Input
                onChange={(e) =>
                  dispatch({ type: "SET_NAME", payload: e.target.value })
                }
                id="name"
                type="text"
                className=" rounded-lg py-3 mb-3"
                placeholder="Ismi"
              />
            </label>
            <label htmlFor="lastname">
              <p>Sharifi:</p>
              <Input
                onChange={(e) =>
                  dispatch({ type: "SET_LAST_NAME", payload: e.target.value })
                }
                id="lastname"
                type="text"
                className=" rounded-lg py-3 mb-3"
                placeholder="Sharifi"
              />
            </label>
            <label htmlFor="birth_of">
              <p>Tugulgan sanasi:</p>
              <Input
                onChange={(e) =>
                  dispatch({ type: "SET_B_DATE", payload: e.target.value })
                }
                id="birth_of"
                type="date"
                className=" rounded-lg py-3 mb-3"
                placeholder="Tugulgan sanasi"
              />
            </label>
            <label htmlFor="death_of">
              <p>Vafot etgan sanasi:</p>
              <Input
                onChange={(e) =>
                  dispatch({ type: "SET_D_DATE", payload: e.target.value })
                }
                id="death_of"
                type="date"
                className=" rounded-lg py-3 mb-3"
                placeholder="Vafot etgan sanasi"
              />
            </label>
            <label htmlFor="country">
              <p>Davlati</p>
              <Select
                className="w-full my-8"
                showSearch
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={filterOption}
                options={countryList?.map((item) => {
                  return {
                    label: item.name,
                    value: item.id,
                  };
                })}
              />
            </label>

            <Textarea
              onChange={(e) =>
                dispatch({ type: "SET_BIO", payload: e.target.value })
              }
              id="comment"
              placeholder="BIO"
              required
              rows={4}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AuthorModal;
