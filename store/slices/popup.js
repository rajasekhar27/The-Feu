import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  headerPopup: { status: false, helperData: null },
  conformationPopUp: { status: false, helperData: null },
  bookATablePopUp: { status: false, helperData: null },
  contactUsPopUp: { status: false, helperData: null },
  bookPopupObject: [],
  foodAndDrink: { status: false, helperData: null },
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    popupOpenHandler: (state, action) => {
      state.headerPopup.status = true;
      state.headerPopup.helperData = action.payload;
    },
    popupCloseHandler: (state) => {
      state.headerPopup.status = false;
      state.headerPopup.helperData = null;
    },

    openConformationPopUp: (state, action) => {
      console.log("action.payload", action.payload);
      state.conformationPopUp.status = true;
      state.conformationPopUp.helperData = action.payload;
    },
    closeConformationPopUp: (state) => {
      state.conformationPopUp.helperData = null;
      state.conformationPopUp.status = false;
    },

    openBookATablePopUp: (state, action) => {
      state.bookATablePopUp.status = true;
      state.bookATablePopUp.helperData = action.payload;
    },
    closeBookATablePopUp: (state) => {
      state.bookATablePopUp.status = false;
      state.bookATablePopUp.helperData = null;
    },
    openContactUsPopUp: (state, action) => {
      state.contactUsPopUp.status = true;
      state.contactUsPopUp.helperData = action.payload;
    },
    closeContactUsPopUp: (state) => {
      state.contactUsPopUp.status = false;
      state.contactUsPopUp.helperData = null;
    },

    addBookTableDetails: (state, action) => {
      state.bookPopupObject.push(action.payload);
    },
    deleteBookTableDetails: (state, action) => {
      state.bookPopupObject = [];
    },

    foodAndDrinkOpenHandler: (state, action) => {
      state.foodAndDrink.status = true;
      state.foodAndDrink.helperData = action.payload;
    },
    foodAndDrinkCloseHandler: (state) => {
      state.foodAndDrink.status = false;
      state.foodAndDrink.helperData = null;
    },
  },
});

export const {
  popupOpenHandler,
  popupCloseHandler,
  openConformationPopUp,
  closeConformationPopUp,
  openBookATablePopUp,
  closeBookATablePopUp,
  addBookTableDetails,
  deleteBookTableDetails,
  openContactUsPopUp,
  closeContactUsPopUp,
  foodAndDrinkCloseHandler,
  foodAndDrinkOpenHandler,
} = popupSlice.actions;
export default popupSlice.reducer;
