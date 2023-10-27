import { useState } from "react";
export default function GossipBox() {
  const [gossip, setGossip] = useState("");
  const [gossipList, setGossipList] = useState([]);

  function addGossip() {
    setGossipList([...gossipList, gossip]);
    setGossip("");
  }

  return (
    <div className="container mx-auto flex flex-col gap-2 text-center items-center">
      <h1>Gossip box</h1>
      <input
        value={gossip}
        onChange={(e) => {
          setGossip(e.target.value);
        }}
        className="border border-gray-400 py-2 px-4 w-1/2 rounded-full"
        placeholder="Enter your gossip here"
      />
      <div>
        <button
          onClick={addGossip}
          className="bg-orange-400 py-1 px-5 rounded-full"
        >
          Gossip now and get your sin
        </button>
      </div>
      <div>
        {gossipList.map((gossip, index) => (
          <div key={index}>{gossip}</div>
        ))}
      </div>
    </div>
  );
}
