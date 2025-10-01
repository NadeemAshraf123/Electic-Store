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
  
  newStudent: Omit<Student, 'id'>;
  addStudentErrors: Record<string, string>;
  courseInput: string;
};

const initialState: StudentsState = {
  isModalOpen: false,
  selectedStudent: null,
  searchTerm: "",
  selectedGrade: "",
  selectedAttendance: "",
  orderedStudents: [],
  errors: {},
  newStudent: {
    name: "",
    age: 0,
    grade: "",
    email: "",
    courses: [],
    attendance: "Present",
  },
  addStudentErrors: {},
  courseInput: "",
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
    
    
    setNewStudent: (state, action: PayloadAction<Partial<Omit<Student, 'id'>>>) => {
      state.newStudent = { ...state.newStudent, ...action.payload };
    },
    
    setAddStudentErrors: (state, action: PayloadAction<Record<string, string>>) => {
      state.addStudentErrors = action.payload;
    },
    
    setCourseInput: (state, action: PayloadAction<string>) => {
      state.courseInput = action.payload;
    },
    
    resetNewStudent: (state) => {
      state.newStudent = {
        name: "",
        age: 0,
        grade: "",
        email: "",
        courses: [],
        attendance: "Present",
      };
      state.addStudentErrors = {};
      state.courseInput = "";
    },
    
    updateCourseInput: (state, action: PayloadAction<string>) => {
      state.courseInput = action.payload;
      const courses = action.payload
        .split(",")
        .map((c) => c.trim())
        .filter((c) => c.length > 0);
      state.newStudent.courses = courses;
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
  setNewStudent,
  setAddStudentErrors,
  setCourseInput,
  resetNewStudent, 
  updateCourseInput,
} = studentsSlice.actions;

export default studentsSlice.reducer;