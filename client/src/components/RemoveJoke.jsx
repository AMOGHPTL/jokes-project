import axios from "axios";
import { useState } from "react";

const RemoveJoke = () => {
  const [id, setId] = useState(0);

  const handleSubmit = async (e) => {
    const removedJoke = await axios.post("http://localhost:5000/api/removed", { id });
    console.log(`joke id ${id} remove request given`);
    setId(undefined);
  };

  return (
    <div>
      <form className="flex flex-col gap-3 " onSubmit={handleSubmit}>
        <label htmlFor="">Remove a joke</label>
        <input
          className="bg-white w-[300px] p-1"
          type="Number"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button className="bg-red-600 w-fit p-2 rounded-xl" type="submit">
          Remove
        </button>
      </form>
    </div>
  );
};

export default RemoveJoke;
