import React, { useReducer, useEffect } from "react";
import CardWrapper from "../../components/Layout/CardWrapper";
import CardBook from "../../components/UI/Card/Book/CardBook";
import { Link } from "react-router-dom";
import Loading from "../../components/UI/Loader/Loading";

const index = () => {
  const initialState = {
    bookList: [],
    loading: true,
    errorMessage: "",
  };

  const reduser = (state, action) => {

    switch (action.type) {
      case "SET_BOOK":
        return { ...state, bookList: action.data };
      case "STOP_LOADER":
        return { ...state, loading: false };
      case "SET_ERROR_MESSAGE":
        return { ...state, errorMessage: action.message };

      default:
        return state;
    }
  };

  const [{ bookList, errorMessage, loading }, dispatch] = useReducer(
    reduser,
    initialState
  );



  useEffect(() => {
    dispatch({ type: "SET_BOOK", data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] });
    setTimeout(() => {
      dispatch({ type: "STOP_LOADER" });
    }, 2000);
    console.log(loading);
  }, []);


  if (loading) {
    return <Loading/>;
  }




  return (
    <div className="container">
    
      <CardWrapper padding="50px 0">
        {bookList.map((item) => {
          return (
            <Link to={`/books/${item}`}>
              <CardBook />
            </Link>
          );
        })}
      </CardWrapper>
    </div>
  );
};

export default index;
