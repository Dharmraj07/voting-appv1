import React, { useState } from "react";
import { VotingForm } from "./VotingForm"; // Ensure the file name matches the case
import { useDispatch, useSelector } from "react-redux";
import { removeVote } from "./votingSlice";

const VotingApp = () => {
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();
  const candidates = useSelector((state) => state.voting.candidates);
  const totalVote = useSelector((state) => state.voting.totalVote);
  console.log(candidates);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <h1>Voting App</h1>
      <h2>Total Votes: {totalVote}</h2>
      <button onClick={toggleForm}>Vote</button>
      {showForm && <VotingForm onClose={toggleForm} />}

      <ol>
        {candidates.map((candidate) => (
          <li key={candidate.id}>
            <h2>
              {candidate.name} -- Votes: {candidate.voters.length}
            </h2>
            <ul>
              {candidate.voters.map((voter) => (
                <li key={voter.voterId}>
                  {voter.name} ---
                  <button
                    onClick={() =>
                      dispatch(
                        removeVote({
                          voterId: voter.voterId,
                          name: candidate.name,
                        })
                      )
                    }
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default VotingApp;
