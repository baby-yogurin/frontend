import Header from "./components/layout/Header";

function App() {
  return (
    <div className="w-full min-h-screen flex justify-center">
      <div className="w-full max-w-[393px] min-h-screen bg-bg shadow-xl relative">
        <Header />
        <main className="pb-[var(--bottom-nav-height)]"></main>
      </div>
    </div>
  );
}

export default App;
