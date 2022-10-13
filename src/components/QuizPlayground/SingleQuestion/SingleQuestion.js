import "./SingleQuestion.css";
import React, { useState } from "react";









const SingleQuestion = (props) => {
   const question = props.question;
   const answer = props.question.correctAnswer;
   /*
      correctAnswer: "29"
      id:"62e531f2d2c8922246db90e9"
      options: [
         '21', '8', '218', '29'
      ]
      question: "<p>If&nbsp;you have a var age"
   */
   
   // Checking wether user selected any option or not 
   const [selected, setSelected] = useState(false); 


   const optionSelectionHandler = e => {

      setSelected(true);
      console.log("Set Selected")

      const selectedOption = e.target.dataset.option;
      const correctAnswer = e.target.closest('.question').dataset.answer;

      // Right Answer
      if(selectedOption === correctAnswer){

      }
      // Wrong Answer
      else{

      }


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
   }
   return (
      <div className="question d-flex justify-content-between align-items-center flex-column" data-answer={question.correctAnswer} >
         <div className="question-status">

         </div>
         <div className="question-section">{question.question}</div>
         <div className="option-section w-100 d-flex flex-column">
            <div className={`${selected ? 'options-overlay' : ''}`}></div>
            {question.options.map((option, i) => (
               <div className="option my-1 h-100" key={i}>
                  <label className="h-100">
                     <input
                        type="radio"
                        id={question.id + i}
                        name={question.id}
                        value="HTML"
                     />
                     <span className={`text-white fs-6 d-flex w-100 h-100 align-items-center px-5 ${selected ? (option === answer ? 'right-answer' : 'wrong-answer') : ''}`} onClick={optionSelectionHandler} data-option={option} data-correct={answer === option ? "true" : "false"}>{option}</span>
                  </label>
                  <br></br>
               </div>
            ))}
         </div>
      </div>
   );
};

export default SingleQuestion;
