
import { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import IntroCarousel from "../../components/UI/Carousel/IntroCarousel";
import SearchPanel from "../../components/UI/SearchPanel/SearchPanel";
import VECTOR_2 from "../../assets/icons/vector.svg";
import Category from "../../components/category/Category";
import CardWrapper from "../../components/Layout/CardWrapper";
import CardAuthor from "../../components/UI/Card/Author/CardAuthor";
import Loading from "../../components/UI/Loader/Loading";

const index = () => {

 const initialState = {
   authorList: [],
   loading: true,
   errorMessage: "",
 };

 const reduser = (state, action) => {
   switch (action.type) {
     case "SET_AUTHOR":
       return { ...state, authorList: action.data };
     case "STOP_LOADER":
       return { ...state, loading: false };
     case "SET_ERROR_MESSAGE":
       return { ...state, errorMessage: action.message };

     default:
       return state;
   }
 };

 const [{ authorList, errorMessage, loading }, dispatch] = useReducer(
   reduser,
   initialState
 );

 useEffect(() => {
   dispatch({ type: "SET_AUTHOR", data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] });
   setTimeout(() => {
     dispatch({ type: "STOP_LOADER" });
   }, 2000);
   console.log(loading);
 }, []);

 if (loading) {
   return <Loading/>;
 }





  return (
    <section className="intro" style={{ backgroundImage: `url(${VECTOR_2})` }}>
      <div className="container">
        <div className="warpper">
          <IntroCarousel />
          <SearchPanel />
          <Category />

          <CardWrapper>
            {authorList.map((item) => {
              return (
                <Link to={`/author/${item}`}>
                  <CardAuthor />
                </Link>
              );
            })}
          </CardWrapper>

          
        </div>
      </div>
    </section>
  );
};

export default index;