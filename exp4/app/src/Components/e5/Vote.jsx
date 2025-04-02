import React, { useState } from "react";
import "./Vote.css";
function Vote() {
  const candidates = ["Alice", "Bob", "Charlie"];
  const [votes, setVotes] = useState({ Alice: 0, Bob: 0, Charlie: 0 });

  const handleVote = (candidate) => {
    setVotes({ ...votes, [candidate]: votes[candidate] + 1 });
  };

  return (
    <div className="voting-app">
      <h2>Voting Application</h2>
      <div className="candidates">
        {candidates.map((candidate) => (
          <div key={candidate} className="candidate">
            <h3>{candidate}</h3>
            <p>Votes: {votes[candidate]}</p>
            <button onClick={() => handleVote(candidate)}>Vote</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vote;
