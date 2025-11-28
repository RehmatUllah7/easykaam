import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />

      <div className="p-10">
        <h1 className="text-3xl text-red-100">Welcome to Easykaam</h1>
        <p className="mt-3 text-black-600">
          Your static React + Tailwind project is ready!
        </p>
      </div>
    </>
  );
}

export default App;
