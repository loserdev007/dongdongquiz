import "./QuizPlayground.css";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleQuestion from "./SingleQuestion/SingleQuestion";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/esm/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let currQ = 0;
let ras = 0;

const QuizPlayground = () => {
   const data = useLoaderData().data;
   const questions = data.questions;
   // console.log(questions[0].options.length);
   // let leftgone = 0;

   const [move, setMove] = useState(0);

   const nextBtnClickHandler = (e) => {
      // if (leftgone + 100 / questions.length < 100) {
      //    e.target
      //       .closest(".quiz-main")
      //       .querySelector(
      //          "#questions-wrapper"
      //       ).style.transform = `translateX(-${
      //       leftgone + 100 / questions.length
      //    }%)`;
      //    leftgone = leftgone + 100 / questions.length;
      //    currQ++;
      //    e.target
      //       .closest(".quiz-main")
      //       .querySelector(".extras #current-question").textContent = currQ;
      //    e.target.closest(".quiz-main").style.backgroundColor = "#292a2e";
      //    console.log(leftgone);
      // }
      if (currQ + 1 < questions.length) {
         currQ++;
         setMove(currQ * 100);
      }
   };
   const prevBtnClickHandler = (e) => {
      // if (leftgone - 100 / questions.length >= -2) {
      //    e.target
      //       .closest(".quiz-main")
      //       .querySelector(
      //          "#questions-wrapper"
      //       ).style.transform = `translateX(-${
      //       leftgone - 100 / questions.length
      //    }%)`;
      //    leftgone = leftgone - 100 / questions.length;
      //    currQ--;
      //    e.target
      //       .closest(".quiz-main")
      //       .querySelector(".extras #current-question").textContent = currQ;
      //    console.log(leftgone);
      //    e.target.closest(".quiz-main").style.backgroundColor = "#292a2e";
      // }
      if (currQ - 1 >= 0) {
         currQ--;
         setMove(currQ * 100);
      }
   };
   const revealAnswer = (e) => {
      ras++;
      // e.target
      //    .closest(".quiz-main")
      //    .querySelectorAll(".question")
      //    [currQ - 1].querySelectorAll(".option-section .option")
      //    .forEach((element) => {
      //       // console.log(.textContent)
      //       const el = element.querySelector("span");
      //       if (el.textContent === questions[currQ - 1].correctAnswer) {
      //          console.log("hahah");
      //          el.style.backgroundColor = "#285427";
      //       } else {
      //          el.style.backgroundColor = "#322020";
      //       }
      //    });
   };
   const isSuccess = (e) => {
      if (e === 1) {
         toast.success("Right Answer!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            pauseOnFocusLoss: false,
            theme: "light",
         });
      } else {
         toast.error("Wrong Answer...", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            pauseOnFocusLoss: false,
            theme: "dark",
         });
      }
   };
   return (
      <section
         id="single-quiz"
         className="vh-100 d-flex justify-content-center align-items-center"
      >
         <div
            className="quiz-main d-flex"
            id="quiz-main"
            // style={{ width: `${questions.length * 100}%`, flex: "1" }}
         >
            <div className="extras d-flex justify-content-start align-items-center px-4 w-100">
               <p className="text-white fs-5 text-white-50 w-25 user-select-none">
                  <span id="current-question" className="text-info">
                     {currQ + 1}
                  </span>{" "}
                  / <span id="total-question">{questions.length}</span>
               </p>
               <h3 className="text-white fs-4 text-center w-75 user-select-none">{data.name} Quizes</h3>
            </div>
            {questions.map((question, id) => (
               <SingleQuestion
                  question={question}
                  ql={questions.length}
                  isSuccess={isSuccess}
                  serialNumber={id}
                  move={move}
               />
            ))}
            {/* <div
               style={{ width: `${questions.length * 100}%`, flex: "1" }}
               className="d-flex"
               id="questions-wrapper"
            >
               {questions.map((question, id) => (
                  <SingleQuestion

                     question={question}
                     ql={questions.length}
                     isSuccess={isSuccess}
                  />
               ))}
            </div> */}
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
         <ToastContainer />
      </section>
   );
};

export default QuizPlayground;
