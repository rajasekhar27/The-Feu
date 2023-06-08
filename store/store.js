// import { configureStore } from "@reduxjs/toolkit";

// import popupSlice from "./slices/popup";

// import restApi from "./apis/restApis";

// import { setupListeners } from "@reduxjs/toolkit/query";

// const middlewares = [restApi.middleware];

// const store = configureStore({
//   reducer: {
//     popupSlice: popupSlice,

//     [restApi.reducerPath]: restApi.reducer,
//   },

//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(middlewares),
// });

// setupListeners(store.dispatch);

// export default store;

import { configureStore } from "@reduxjs/toolkit";

import restApi from "./apis/restApis";

import popupSlice from "./slices/popup";

import { setupListeners } from "@reduxjs/toolkit/query";

// const middlewares = [restApi.middleware];

export const store = configureStore({
  reducer: {
    headerPopupSlice: popupSlice,
    [restApi.reducerPath]: restApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(restApi.middleware),
});

setupListeners(store.dispatch);
