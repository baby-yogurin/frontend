import { RouterProvider } from "react-router-dom";
import { router } from "./router/AppRouter";

function App() {
  return (
    <div className="w-full min-h-screen flex justify-center">
      <div className="w-full max-w-[393px] min-h-screen bg-bg shadow-xl relative">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
