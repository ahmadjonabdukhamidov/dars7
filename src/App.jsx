import { useEffect, useState } from "react";
import Header from "./components/Header";
import Tour from "./components/Tour";
import { useFetch } from "./hooks/useFetch";


function App() {
  // const [url, setUrl] = useState("https://course-api.com/react-tours-project");
  const { data, isPending, error } = useFetch('https://course-api.com/react-tours-project');
  const [tours, setTours] = useState(null);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setTours(data);
  }, [data]);

  const deleteTour = (id) => {
    setTours((prev) => {
      return prev.filter((event) => {
        return event.id !== id;
      });
    });
  };

  const handleRefresh = () => {
    if (tours && tours.length === 0) {
      setTours(data);
    }
    setRefresh(false);
  };

  return (
    <main className="bg-[#f8fafc]">
      <section className="pt-32 text-center">
        {tours && tours.length === 0 ? null : <Header />}
        {tours && tours.length === 0 && (
          <div>
            <h1 className="text-5xl pb-[40px]">Press to Refresh</h1>
            <button
              className="text-white bg-emerald-400 py-3 px-6 border-2 border-emerald-400 hover:text-emerald-400 hover:bg-white"
              onClick={handleRefresh}
            >
              Refresh
            </button>
          </div>
        )}
      </section>
      <section className="max-w-6xl mx-auto px-3 py-10 ">
        {tours && <tours tours={tours} deleteTour={deleteTour} />}
      </section>
    </main>
  );
}

export default App;
