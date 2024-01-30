import DefaultLayout from "../Layout/DefaultLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Error404 from "../pages/Error404";
import TabHome from "../components/Tabs/TabHome"
import TabTopic from "../components/Tabs/TabTopic"
import TabAnswers from "../components/Tabs/TabAnswers"
import TopicDetails from "../components/Tabs/TabTopic/TopicDetails";
import TopicAll from "../components/Tabs/TabTopic/TopicAll";
import TabResult from "../components/Tabs/TabResult";
import TabAnswersAll from "../components/Tabs/TabAnswers/TabAnswersAll";
import AnswerDetails from "../components/Tabs/TabAnswers/AnswerDetails";

export const routes = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            index: true,
            path: "/",
            element: <TabHome />
          },
        ]
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "topic",
        element: <TabTopic />,
        children: [
          {
            index: true,
            element: <TopicAll />
          },
          {
            path: ":id",
            element: <TopicDetails />
          }
        ]
      },
      {
        path: "answers",
        element: <TabAnswers />,
        children: [
          {
            index: true,
            element: <TabAnswersAll />
          },
          {
            path: ":id",
            element: <AnswerDetails />
          }
        ]
      },
      {
        path: "result",
        element: <TabResult />
      },
      {
        path: "*",
        element: <Error404 />
      }
    ]
  }
]