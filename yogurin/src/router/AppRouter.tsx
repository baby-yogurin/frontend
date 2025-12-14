import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/Main/MainPage";
import SleepPage from "../pages/Sleep/SleepPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/sleep",
    element: <SleepPage />,
  },
]);
