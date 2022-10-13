import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./screen/Main";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import QuizPlayground from "./components/QuizPlayground/QuizPlayground";
import Error from "./components/error/Error";
import Statistic from "./components/Statistic/Statistic";

function App() {
   const router = createBrowserRouter([
      {
         path: "/",
         element: <Main />,
         children: [
            {
               path: "/",
               element: <Home />,
               loader: async () => {
                  return fetch("https://openapi.programming-hero.com/api/quiz");
               },
            },
            {
               path: "home",
               element: <Home />,
               loader: async () => {
                  return fetch("https://openapi.programming-hero.com/api/quiz");
               },
            },
            {
               path: "quiz-playground/:topicId",
               element: <QuizPlayground />,
               loader: ({ params }) => {
                  return fetch(
                     `https://openapi.programming-hero.com/api/quiz/${params.topicId}`
                  );
               },
            },
            {
               path: "blog",
               element: <Blog />,
            },
            {
               path: "statistic",
               element: <Statistic />,
               loader: async () => {
                  return fetch("https://openapi.programming-hero.com/api/quiz");
               },
            },
         ],
      },
      {
         path: "*",
         element: <Error></Error>,
      },
   ]);

   return <RouterProvider router={router} />;
}

export default App;
