import "./QuizPlayground.css";
import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleQuestion from "./SingleQuestion/SingleQuestion";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/esm/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuizPlayground = () => {
   const data = useLoaderData().data;
   const questions = data.questions;
   // console.log(questions[0].options.length);
   console.log("aaa", questions);
   let leftgone = 0;
   let currQ = 1;

   const nextBtnClickHandler = (e) => {
      if (leftgone + 100 / questions.length < 100) {
         e.target
            .closest(".quiz-main")
            .querySelector(
               "#questions-wrapper"
            ).style.transform = `translateX(-${
            leftgone + 100 / questions.length
         }%)`;
         leftgone = leftgone + 100 / questions.length;
         currQ++;
         e.target
            .closest(".quiz-main")
            .querySelector(".extras #current-question").textContent = currQ;
         e.target.closest(".quiz-main").style.backgroundColor = "#292a2e";
         console.log(leftgone);
      }
   };
   const prevBtnClickHandler = (e) => {
      if (leftgone - 100 / questions.length >= -2) {
         e.target
            .closest(".quiz-main")
            .querySelector(
               "#questions-wrapper"
            ).style.transform = `translateX(-${
            leftgone - 100 / questions.length
         }%)`;
         leftgone = leftgone - 100 / questions.length;
         currQ--;
         e.target
            .closest(".quiz-main")
            .querySelector(".extras #current-question").textContent = currQ;
         console.log(leftgone);
         e.target.closest(".quiz-main").style.backgroundColor = "#292a2e";
      }
   };
   const revealAnswer = (e) => {
      e.target
         .closest(".quiz-main")
         .querySelectorAll(".question")
         [currQ - 1].querySelectorAll(".option-section .option")
         .forEach((element) => {
            // console.log(.textContent)
            const el = element.querySelector("span");
            if (el.textContent === questions[currQ - 1].correctAnswer) {
               console.log("hahah");
               el.style.backgroundColor = "#285427";
            } else {
               el.style.backgroundColor = "#322020";
            }
         });
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
         <div className="quiz-main d-flex flex-column">
            <div className="extras d-flex justify-content-between">
               <p className="text-white fs-5 text-white-50">
                  <span id="current-question" className="text-info">
                     {currQ}
                  </span>{" "}
                  / <span id="total-question">{questions.length}</span>
               </p>
               <h3 className="text-white fs-4">{data.name} Quizes</h3>
               <FontAwesomeIcon
                  icon={faEye}
                  className="fs-4 text-white"
                  onClick={revealAnswer}
               />
            </div>
            <div
               style={{ width: `${questions.length * 100}%`, flex: "1" }}
               className="d-flex"
               id="questions-wrapper"
            >
               {questions.map((question) => (
                  <SingleQuestion
                     question={question}
                     ql={questions.length}
                     isSuccess={isSuccess}
                  />
               ))}
            </div>
            <div className="buttons d-flex align-items-end justify-content-center">
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
