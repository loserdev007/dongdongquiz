import "./QuizPlayground.css";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleQuestion from "./SingleQuestion/SingleQuestion";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/esm/Button";

let currentQuestion = 0;

const QuizPlayground = () => {
   console.log("QPlayground");
   const data = useLoaderData().data;
   const questions = data.questions;

   /*
      ** State changes depends on next/previous answer swipe
   */
   const [move, setMove] = useState(0);

   const nextBtnClickHandler = (e) => {
      if (currentQuestion + 1 < questions.length) {
         currentQuestion++;
         setMove(currentQuestion * 100);
      }
   };
   const prevBtnClickHandler = (e) => {
      if (currentQuestion - 1 >= 0) {
         currentQuestion--;
         setMove(currentQuestion * 100);
      }
   };
   const isSuccess = (e) => {
      // if (e === 1) {
      //    toast.success("Right Answer!", {
      //       position: "top-center",
      //       autoClose: 3000,
      //       hideProgressBar: false,
      //       closeOnClick: true,
      //       pauseOnHover: false,
      //       draggable: true,
      //       progress: undefined,
      //       pauseOnFocusLoss: false,
      //       theme: "light",
      //    });
      // } else {
      //    toast.error("Wrong Answer...", {
      //       position: "top-center",
      //       autoClose: 3000,
      //       hideProgressBar: false,
      //       closeOnClick: true,
      //       pauseOnHover: false,
      //       draggable: true,
      //       progress: undefined,
      //       pauseOnFocusLoss: false,
      //       theme: "dark",
      //    });
      // }
   };
   return (
      <section
         id="single-quiz"
         className="vh-100 d-flex justify-content-center align-items-center"
      >
         <div
            className="quiz-main d-flex"
            id="quiz-main"
         >
            <div className="extras d-flex justify-content-start align-items-center px-4 w-100">
               <p className="text-white fs-5 text-white-50 w-25 user-select-none">
                  <span id="current-question" className="text-info">
                     {currentQuestion + 1}
                  </span>{" "}
                  / <span id="total-question">{questions.length}</span>
               </p>
               <h3 className="text-white fs-4 text-center w-75 user-select-none">{data.name} Quizes</h3>
            </div>
            {questions.map((question, id) => (
               <SingleQuestion
                  key={question.id}
                  question={question}
                  ql={questions.length}
                  isSuccess={isSuccess}
                  serialNumber={id}
                  move={move}
               />
            ))}
            <div className="buttons d-flex align-items-start justify-content-center align-self-end w-100">
               <Button
                  className="mx-3"
                  variant="warning"
                  size="lg"
                  onClick={prevBtnClickHandler}
               >
                  Previous
               </Button>
               {/* <Button className="mx-3" variant="success" size="lg" onClick={nextBtnClickHandler}>Check</Button> */}
               <Button
                  className="mx-3"
                  variant="primary"
                  size="lg"
                  onClick={nextBtnClickHandler}
               >
                  Next
               </Button>
            </div>
         </div>
      </section>
   );
};

export default QuizPlayground;
