import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  candidates: [
    { id: 1, name: "Rohit", votes: 0, voters: [] },
    { id: 2, name: "Sohan", votes: 0, voters: [] },
    { id: 3, name: "Rohan", votes: 0, voters: [] },
  ],
  totalVote: 0,
};

const votingSlice = createSlice({
  name: "vote",
  initialState,
  reducers: {
    vote: (state, action) => {
      const candidate = state.candidates.find(
        (candidate) => candidate.name === action.payload.candidate
      );
      const { voter } = action.payload;

      candidate.votes += 1;
      candidate.voters.push({ voterId: nanoid(), name: voter });
      state.totalVote += 1;
    },
    removeVote: (state, action) => {
      const { name, voterId } = action.payload;
      console.log(action.payload);

      const candidate = state.candidates.find(
        (candidate) => candidate.name === name
      );
      candidate.voters = candidate.voters.filter(
        (voter) => voter.voterId !== voterId
      );
      candidate.votes -= 1;
      state.totalVote -= 1;
    },
  },
});

export default votingSlice.reducer;
export const { vote, removeVote } = votingSlice.actions;
