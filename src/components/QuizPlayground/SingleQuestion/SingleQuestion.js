import "./SingleQuestion.css";
import React from "react";

const SingleQuestion = (props) => {
   const question = props.question;
   console.log(question)
   const optionSelectionHandler = e => {
      e.target.closest('.option-section').querySelectorAll('.option span').forEach(element => {
         if(element.textContent === question.correctAnswer){
            element.style.backgroundColor = '#285427'
            element.disable = true
         }else{
            element.style.backgroundColor = '#322020'
            element.disable = true
         }
      });
      if(e.target.closest('label').querySelector('span').textContent === question.correctAnswer){
         e.target.closest('.quiz-main').style.backgroundColor = '#1f2e21'
         props.isSuccess(1)
         console.log("Right")
      }else{
         e.target.closest('.quiz-main').style.backgroundColor = '#2b1f1f'
         props.isSuccess(0)
         console.log("Wrong")
      }
   }
   return (
      <div className="question d-flex justify-content-between align-items-center flex-column" >
         <div className="question-section">{question.question}</div>
         <div className="option-section w-100 d-flex flex-column">
            {question.options.map((option, i) => (
               <div className="option my-1 h-100" key={i}>
                  <label className="h-100">
                     <input
                        type="radio"
                        id={question.id + i}
                        name={question.id}
                        value="HTML"
                     />
                     <span className="text-white fs-6 d-flex w-100 h-100 align-items-center px-5" onClick={optionSelectionHandler}>{option}</span>
                  </label>
                  <br></br>
               </div>
            ))}
         </div>
      </div>
   );
};

export default SingleQuestion;
