import { createSlice } from "@reduxjs/toolkit";

export const mangaSlice = createSlice({
  name: "manga",
  initialState: {
    manga: null,
    episode: null,
  },
  reducers: {
    storeManga: (state, action) => {
      state.manga = action.payload;
    },
    storeEpisode: (state, action) => {
      state.episode = action.payload;
    },
  },
});

export const { storeManga, storeEpisode } = mangaSlice.actions;

export default mangaSlice.reducer;
