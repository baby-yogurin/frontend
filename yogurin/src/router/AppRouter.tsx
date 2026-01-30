import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/Main/MainPage";
import SleepPage from "../pages/Sleep/SleepPage";
import FeedingPage from "../pages/Feeding/FeedingPage";
import NappyPage from "../pages/Nappy/NappyPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/sleep",
    element: <SleepPage />,
  },
  {
    path: "/nappy",
    element: <NappyPage />,
  },
  {
    path: "/feeding",
    element: <FeedingPage />,
  },
]);
