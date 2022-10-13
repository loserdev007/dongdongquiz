import "./Home.css";
import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizTopics from "../QuizTopics/QuizTopics";
import png from "../../assets/quiz.png";
// import bg from '../../assets/question-mark-sign_48397-365.webp'

const Home = () => {
   const topics = useLoaderData().data;
   return (
      <>
         <section className="home d-flex justify-content-evenly align-items-center flex-column">
            <section
               id="hero"
               className="d-flex justify-content-center align-items-center flex-column"
            >
                <div className="hero-overlay"></div>
               <div className="fw-bold text-white hero-title">
                  <img
                     alt=""
                     src={png}
                     width="80"
                     height="80"
                     className="d-inline-block align-middle me-3"
                  />{" "}
                  Dong Dong Quiz
               </div>
               <p className="fs-3 fw-bold text-white mt-4 text-center">Play quiz and check your programming knowledge</p>
            </section>
            <QuizTopics topics={topics}></QuizTopics>
         </section>
      </>
   );
};

export default Home;
