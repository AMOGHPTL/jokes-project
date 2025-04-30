import { useEffect, useState } from "react";
import "./app.css";
import axios from "axios";
import NewJoke from "./components/NewJoke";
import RemoveJoke from "./components/RemoveJoke";

const App = () => {
  const [data, setData] = useState([{}]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const jokesFetch = async () => {
      const jokes = await axios.get("http://localhost:5000/api");
      setData(jokes.data);
      console.log(jokes);
    };
    jokesFetch();
    setLoading(false);
  }, []);

  return (
    <div className="bg-green-200 min-h-[100vh] p-10">
      <div className="flex flex-col gap-10">
        <h1 className="text-red-600 text-5xl font-semibold">The Jokes Page</h1>
        <div className="flex flex-col gap-5">
          {loading === false &&
            data.map((user, i) => <p className="text-gray-800 text-xl font-semibold">{`${i+1}) `}{user.joke}</p>)}
        </div>
      </div>
      <div>
        <NewJoke />
      </div>
      <div>
        <RemoveJoke />
      </div>
    </div>
  );
};

export default App;
