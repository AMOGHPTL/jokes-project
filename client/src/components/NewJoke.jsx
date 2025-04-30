import { useState } from "react";
import axios from "axios";

const NewJoke = () => {
  const [joke, setJoke] = useState("");
  const id = 0;

  const handleSubmit = async (e) => {
    console.log("joke posted");
    const postedJoke = await axios.post("http://localhost:5000/api/jokes", {
      joke,
      id,
    });
    console.log(postedJoke.data);
    setJoke("");
  };

  return (
    <div className="mt-10">
      <form className="flex flex-col gap-3 " onSubmit={handleSubmit}>
        <label htmlFor="">Add a joke</label>
        <input
          className="bg-white w-[300px] p-1"
          type="text"
          value={joke}
          onChange={(e) => setJoke(e.target.value)}
        />
        <button className="bg-green-600 w-fit p-2 rounded-xl" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default NewJoke;
