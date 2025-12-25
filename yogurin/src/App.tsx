import { RouterProvider } from "react-router-dom";
import { router } from "./router/AppRouter";
import Header from "./components/layout/Header";
import BottomNav from "./components/layout/BottomNav";

function App() {
  return (
    <div className="w-full min-h-screen flex justify-center">
      <div className="w-full max-w-[393px] min-h-screen bg-bg shadow-xl relative">
        <Header />
        <main>
          <RouterProvider router={router} />
        </main>
        <BottomNav />
      </div>
    </div>
  );
}

export default App;
