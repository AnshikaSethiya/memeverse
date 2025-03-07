import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import useGetMeme from '../useGetMeme';

// Async thunk for fetching leaderboard data
export const fetchLeaderboardData = createAsyncThunk(
  'leaderboard/fetchData',
  async () => {
    try {
      const memesData = useGetMeme();

      //const creatorsResponse = await fetch('/api/top-creators');
      //const creatorsData = await creatorsResponse.json();

      return { topMemes: memesData, 
        // topCreators: creatorsData 
    };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // Handle errors
    }
  }
);



const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState: {
    topMemes: [],
   // topCreators: [],
    loadingMemes: true,
    loadingCreators: true,
    error: null, // Store any errors
  },
  reducers: {}, // Add any other reducers if needed
  extraReducers: (builder) => {
    builder.addCase(fetchLeaderboardData.pending, (state) => {
      state.loadingMemes = true;
      state.loadingCreators = true;
      state.error = null; // Clear any previous errors
    });
    builder.addCase(fetchLeaderboardData.fulfilled, (state, action) => {
      state.topMemes = action.payload.topMemes;
      state.topCreators = action.payload.topCreators;
      state.loadingMemes = false;
      state.loadingCreators = false;
    });
    builder.addCase(fetchLeaderboardData.rejected, (state, action) => {
      state.loadingMemes = false;
      state.loadingCreators = false;
      state.error = action.payload; // Set the error message
    });
  },
});

export default leaderboardSlice.reducer;