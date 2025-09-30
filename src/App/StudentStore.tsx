
import { configureStore } from "@reduxjs/toolkit";
import studentsReducer from "../components/RQComponents/features/StudentSlice";

export const StudentStore = configureStore({
  reducer: {
    students: studentsReducer,
  },
});

export type RootState = ReturnType<typeof StudentStore.getState>;
export type AppDispatch = typeof StudentStore.dispatch;
