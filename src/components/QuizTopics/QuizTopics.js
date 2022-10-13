import "./QuizTopics.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const QuizTopics = ({ topics }) => {
   console.log(topics);
   return (
      <div id="quiz-topics" className="container ">
         {topics.map((topic) => (
            <Card key={topic.id} className="">
               <Card.Img variant="top" src={topic.logo} />
               <Card.Body>
                <div className="d-flex flex-column justify-content-center">
                  <Card.Title className="fs-2 w-100 text-center text-white">{topic.name}</Card.Title>
                  <Card.Text className="text-center fs-4 text-white">{topic.total} Quizes</Card.Text>
                </div>
                  {/* <Button variant="primary" className="fs-5"></Button> */}
                  <Link to={`/quiz-playground/${topic.id}`} className="fs-5 btn btn-primary d-flex justify-content-center align-items-center">Start Playing {topic.name}</Link>
               </Card.Body>
            </Card>
         ))}
      </div>
   );
};

export default QuizTopics;
