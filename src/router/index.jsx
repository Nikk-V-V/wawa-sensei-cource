import { createBrowserRouter } from "react-router-dom";
import Lesson1 from "../pages/lesson-1";
import Lesson2 from "../pages/lesson-2";
import Lesson3 from "../pages/lesson-3";
import Lesson4 from "../pages/lesson-4";
import Lesson5 from "../pages/lesson-5";
import Lesson6 from "../pages/lesson-6";
import Lesson7 from "../pages/lesson-7";
import Lesson8 from "../pages/lesson-8";
import Lesson9 from "../pages/lesson-9";
import Lesson10 from "../pages/lesson-10";
import Lesson11 from "../pages/lesson-11";
import Lesson12 from "../pages/lesson-12";
import Shader1 from "../pages/shader-1";
import Shader2 from "../pages/shader-2";
import Shader3 from "../pages/shader-3";
import Shader4 from "../pages/shader-4";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Lesson1 />,
      },
      {
        path: "lesson-2",
        element: <Lesson2 />,
      },
      {
        path: "lesson-3",
        element: <Lesson3 />,
      },
      {
        path: "lesson-4",
        element: <Lesson4 />,
      },
      {
        path: "lesson-5",
        element: <Lesson5 />,
      },
      {
        path: "lesson-6",
        element: <Lesson6 />,
      },
      {
        path: "lesson-7",
        element: <Lesson7 />,
      },
      {
        path: "lesson-8",
        element: <Lesson8 />,
      },
      {
        path: "lesson-9",
        element: <Lesson9 />,
      },
      {
        path: "lesson-10",
        element: <Lesson10 />,
      },
      {
        path: "lesson-11",
        element: <Lesson11 />,
      },
      {
        path: "lesson-12",
        element: <Lesson12 />,
      },
      {
        path: "shader-1",
        element: <Shader1 />,
      },
      {
        path: "shader-2",
        element: <Shader2 />,
      },
      {
        path: "shader-3",
        element: <Shader3 />,
      },
      {
        path: "shader-4",
        element: <Shader4 />
      }
    ],
  },
]);

export default router;
