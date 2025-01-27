import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allAssets: [],
  selectedCoin: null,
  selectedCoinAllData: null,
  historyData: null
};

const cryptoSlice = createSlice({
  name: 'cryptoCurrency',
  initialState,
  reducers: {
    setAllAssets: (state, action) => {
      state.allAssets = action?.payload;
    },
    setSelectedCoin: (state, action) => {
      state.selectedCoin = action?.payload;
    },
    setSelectedCoinAllData: (state, action) => {
      state.selectedCoinAllData = action?.payload;
    },
    setHistoryData: (state, action) => {
      state.historyData = action?.payload;
    },
  },
});


export const { setAllAssets, setSelectedCoin, setSelectedCoinAllData, setHistoryData } = cryptoSlice.actions;
export default cryptoSlice.reducer;
