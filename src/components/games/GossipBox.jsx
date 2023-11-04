import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../constants";
export default function GossipBox() {
  const [gossip, setGossip] = useState("");
  const [gossipList, setGossipList] = useState([]);

  function fetchGossips() {
    axios.get(API_URL + "post").then((response) => {
      setGossipList(response.data);
    });
  }
  useEffect(() => {
    fetchGossips();
  }, []);

  function addGossip() {
    axios
    .post(API_URL + "post", { body: gossip })
    .then((response) => {
      fetchGossips();
    })
  }

  return (
    <div className="container mx-auto flex flex-col gap-4 text-center items-center my-10">
      <h1 className="font-bold text-2xl">Gossip Box</h1>
      <input
        value={gossip}
        onChange={(e) => {
          setGossip(e.target.value);
        }}
        className="border border-gray-400 py-2 px-4 w-1/2 rounded-lg"
        placeholder="Enter your gossip here"
      />
      <div>
        <button
          onClick={addGossip}
          className="bg-orange-400 py-1 px-5 rounded-lg"
        >
          Gossip now and get your sin
        </button>
      </div>
      <div>
        {gossipList.map((gossip, index) => (
          <div key={index}>{gossip.body}</div>
        ))}
      </div>
    </div>
  );
}
