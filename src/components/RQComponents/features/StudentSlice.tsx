
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Student = {
  id: number;
  name: string;
  age: number;
  grade: string;
  email: string;
  courses: string[];
  attendance: "Present" | "Absent";
};

type StudentsState = {
  isModalOpen: boolean;
  selectedStudent: Student | null;
  searchTerm: string;
  selectedGrade: string;
  selectedAttendance: string;
  orderedStudents: Student[];
  errors: Record<string, string>;
};

const initialState: StudentsState = {
  isModalOpen: false,
  selectedStudent: null,
  searchTerm: "",
  selectedGrade: "",
  selectedAttendance: "",
  orderedStudents: [],
  errors: {},
};

const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
   openModal: (state, action: PayloadAction<Student>) => {
  state.isModalOpen = true;
  state.selectedStudent = {
    ...action.payload,
    courses: Array.isArray(action.payload.courses) 
      ? action.payload.courses 
      : typeof action.payload.courses === 'string'
      ? action.payload.courses.split(',').map(c => c.trim()).filter(c => c !== '')
      : []
  };
},
    closeModal: (state) => {
      state.isModalOpen = false;
      state.selectedStudent = null;
      state.errors = {};
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setSelectedGrade: (state, action: PayloadAction<string>) => {
      state.selectedGrade = action.payload;
    },
    setSelectedAttendance: (state, action: PayloadAction<string>) => {
      state.selectedAttendance = action.payload;
    },
    setOrderedStudents: (state, action: PayloadAction<Student[]>) => {
      state.orderedStudents = action.payload;
    },
    setErrors: (state, action: PayloadAction<Record<string, string>>) => {
        state.errors = action.payload;
    },
  },
});

export const {
  openModal,
  closeModal,
  setSearchTerm,
  setSelectedGrade,
  setSelectedAttendance,
  setOrderedStudents,
  setErrors,
} = studentsSlice.actions;

export default studentsSlice.reducer;
