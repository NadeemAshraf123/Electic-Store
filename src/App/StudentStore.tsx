import { configureStore } from "@reduxjs/toolkit";
import studentsReducer from "../components/RQComponents/features/StudentSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedStudentsReducer = persistReducer(persistConfig, studentsReducer);

export const StudentStore = configureStore({
  reducer: {
    students: persistedStudentsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({

      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(StudentStore);

export type RootState = ReturnType<typeof StudentStore.getState>;
export type AppDispatch = typeof StudentStore.dispatch;
