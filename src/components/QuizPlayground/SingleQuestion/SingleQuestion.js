import "./SingleQuestion.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const SingleQuestion = (props) => {
   const question = props.question;
   const answer = props.question.correctAnswer;
   /*
      ## Data Model ##

      correctAnswer: "29"
      id:"62e531f2d2c8922246db90e9"
      options: [
         '21', '8', '218', '29'
      ]
      question: "<p>If&nbsp;you have a var age"
   */

   /*
      ** Checking wether user selected any option and is that correct or not

      Started by assingning an empty string to the state.
      Empty string means there is no value at the initial stage which can also be referred as neutral state.
      Neutral state simply means user has't selected anything.
      This makes the background color of every question to neutral.

      This state will be changed after selecting an option by user.
      After selecting an option, it will contain "2" or "1" according to the right or wrong answer respectively after checking the answer.
      This state will manupulate the background color of each question respective to right or wrong.
   */
   const [checkAnswer, setCheckAnswer] = useState("");

   const optionSelectionHandler = (e) => {
      setCheckAnswer(true);
      console.log("Set Selected");

      const selectedOption = e.target.dataset.option;
      const correctAnswer = e.target.closest(".question").dataset.answer;

      // Right Answer
      if (selectedOption === correctAnswer) setCheckAnswer(2);
      // Wrong Answer
      else setCheckAnswer(1);
      // e.target.closest('.option-section').querySelectorAll('.option span').forEach(element => {
      //    if(element.textContent === question.correctAnswer){
      //       element.style.backgroundColor = '#285427'
      //       element.disable = true
      //    }else{
      //       element.style.backgroundColor = '#322020'
      //       element.disable = true
      //    }
      // });
      // if(e.target.closest('label').querySelector('span').textContent === question.correctAnswer){
      //    e.target.closest('.quiz-main').style.backgroundColor = '#1f2e21'
      //    props.isSuccess(1)
      //    console.log("Right")
      // }else{
      //    e.target.closest('.quiz-main').style.backgroundColor = '#2b1f1f'
      //    props.isSuccess(0)
      //    console.log("Wrong")
      // }
   };

   const revealAnswer = (e) => {
      // setCheckAnswer((prev) => (prev === 1 ? 1 : prev === 2 ? 2 : 3));
      setCheckAnswer(3);
   };
   return (
      <div
         className={`question d-flex justify-content-between align-items-center flex-column align-self-center ${
            /*
               ** Checking and adding background color according to the right or wrong answer.

               If the answer is correct means "2", "right-answer-overlay" class will be added.
               If the answer is wrong means "1", "wrong-answer-overlay" class will be added.
             */
            checkAnswer === 2
               ? "right-answer-overlay"
               : checkAnswer === 1
               ? "wrong-answer-overlay"
               : checkAnswer === 3
               ? "reveal-answer-overlay"
               : ""
         }`}
         data-answer={question.correctAnswer}
         style={{
            transform: `translateX(${props.serialNumber * 100 - props.move}%)`,
         }}
      >
         <FontAwesomeIcon
            icon={faEye}
            className={`reveal-answer fs-4 text-white ${
               checkAnswer !== "" ? "d-none" : ""
            }`}
            onClick={revealAnswer}
         />
         <div className="question-section user-select-none">
            {question.question.replace(/(<([^>]+)>)/gi, "")}
         </div>
         <div className="option-section w-100 d-flex flex-column">
            <div className={`${checkAnswer ? "options-overlay" : ""}`}></div>
            {question.options.map((option, i) => (
               <div className="option my-1 h-100" key={i}>
                  <label className="h-100">
                     <input
                        type="radio"
                        id={question.id + i}
                        name={question.id}
                        value="HTML"
                     />
                     <span
                        className={`text-white fs-6 d-flex w-100 h-100 align-items-center px-5 ${
                           /*
                              ** Checking and adding option's background color according to the right or wrong options

                              If the option is correct, "right-answer" class will be added.
                              If the option is wrong, "wrong-answer" class will be added.

                              Note: State will be changed by clicking one of those options.
                           */
                           checkAnswer
                              ? option === answer
                                 ? "right-answer"
                                 : "wrong-answer"
                              : ""
                        }`}
                        onClick={optionSelectionHandler}
                        data-option={option}
                        data-correct={answer === option ? "true" : "false"}
                     >
                        {option}
                     </span>
                  </label>
                  <br></br>
               </div>
            ))}
         </div>
      </div>
   );
};

export default SingleQuestion;
