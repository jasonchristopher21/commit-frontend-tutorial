import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../constants";

export default function RandomCatFact() {
  const [catFact, setCatFact] = useState(
    "In the cartoon Tom & Jerry, Tom is a Cat :O :O :O"
  );

  function getCatFact() {
    axios
      .get(API_URL + "catfact")
      .then((response) => {
        setCatFact(response.data.fact);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="flex flex-col gap-4 my-10 mx-auto text-center max-w-xl px-10">
      <h1 className="font-bold text-2xl">Random Cat Fact</h1>
      <p>{catFact}</p>
      <div className="flex mx-auto">
        <button className="text-white bg-blue-500 py-1 px-5 rounded-lg hover:bg-blue-300" onClick={getCatFact}>
          Get a random cat fact
        </button>
      </div>
    </div>
  );
}
