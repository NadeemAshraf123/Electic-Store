
import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  setNewStudent,
  setAddStudentErrors,

  resetNewStudent,
  updateCourseInput,
} from "../../components/RQComponents/features/StudentSlice";
import type { RootState } from "../../App/StudentStore";

const AddStudentForm: React.FC = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const { newStudent, addStudentErrors, courseInput } = useSelector(
    (state: RootState) => state.students
  );

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!newStudent.name.trim()) newErrors.name = "Name is required";
    else if (newStudent.name.trim().length < 2)
      newErrors.name = "Name must be at least 2 characters";

    if (newStudent.age < 5 || newStudent.age > 25)
      newErrors.age = "Age must be between 5 and 25";

    if (!newStudent.grade.trim()) newErrors.grade = "Grade is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!newStudent.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(newStudent.email))
      newErrors.email = "Please enter a valid email address";

    if (newStudent.courses.length === 0) {
      newErrors.courses = "At least one course is required";
    } else {
      const emptyCourses = newStudent.courses.some((course) => !course.trim());
      if (emptyCourses) newErrors.courses = "Course names cannot be empty";
    }

    return newErrors;
  };

  const addStudent = async (student: Omit<Student, 'id'>) => {
    await axios.post("http://localhost:3000/students", student);
  };

  const mutation = useMutation({
    mutationFn: () => addStudent(newStudent),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["students"] });
      dispatch(resetNewStudent());
      navigate("/students");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      dispatch(setAddStudentErrors(validationErrors));
      return;
    }
    mutation.mutate();
  };

  const handleCourseInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(updateCourseInput(value));

    if (addStudentErrors.courses && value.length > 0) {
      dispatch(setAddStudentErrors({ ...addStudentErrors, courses: "" }));
    }
  };


  const updateStudentField = (field: keyof Omit<Student, 'id'>, value: any) => {
    dispatch(setNewStudent({ [field]: value }));
    if (addStudentErrors[field]) {
      const newErrors = { ...addStudentErrors };
      delete newErrors[field];
      dispatch(setAddStudentErrors(newErrors));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg space-y-6 mt-40"
    >
      <h2 className="text-3xl font-bold text-center mb-6">
        Student Record Form
      </h2>

      <div>
        <label className="block font-semibold mb-1">Full Name</label>
        <input
          type="text"
          value={newStudent.name}
          onChange={(e) => updateStudentField("name", e.target.value)}
          className="w-full border border-gray-300 px-4 py-2 rounded"
        />
        {addStudentErrors.name && (
          <p className="text-red-500 text-sm mt-1">{addStudentErrors.name}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold mb-1">Age</label>
          <input
            type="number"
            value={newStudent.age}
            onChange={(e) => updateStudentField("age", +e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 rounded"
          />
          {addStudentErrors.age && (
            <p className="text-red-500 text-sm mt-1">{addStudentErrors.age}</p>
          )}
        </div>
        <div>
          <label className="block font-semibold mb-1">Grade</label>
          <input
            type="text"
            value={newStudent.grade}
            onChange={(e) => updateStudentField("grade", e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 rounded"
          />
          {addStudentErrors.grade && (
            <p className="text-red-500 text-sm mt-1">{addStudentErrors.grade}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block font-semibold mb-1">Email</label>
        <input
          type="email"
          value={newStudent.email}
          onChange={(e) => updateStudentField("email", e.target.value)}
          className="w-full border border-gray-300 px-4 py-2 rounded"
        />
        {addStudentErrors.email && (
          <p className="text-red-500 text-sm mt-1">{addStudentErrors.email}</p>
        )}
      </div>

      <div>
        <label className="block font-semibold mb-1">Courses *</label>
        <input
          type="text"
          value={courseInput}
          onChange={handleCourseInputChange}
          className="w-full border border-gray-300 px-4 py-2 rounded mb-2"
          placeholder="Enter courses separated by commas (e.g., Math, Science, English)"
        />

        <div className="bg-gray-50 p-3 rounded border">
          <p className="text-sm font-semibold mb-2">Current Courses:</p>
          {newStudent.courses.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {newStudent.courses.map((course, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {course}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-sm">No courses added yet</p>
          )}
        </div>

        <p className="text-sm text-gray-600 mt-2">
             Separate multiple courses with commas. Example: "Mathematics,
          Physics, Chemistry"
        </p>

        {addStudentErrors.courses && (
          <p className="text-red-500 text-sm mt-1">{addStudentErrors.courses}</p>
        )}
      </div>

      <div>
        <label className="block font-semibold mb-1">Attendance</label>
        <select
          value={newStudent.attendance}
          onChange={(e) => 
            updateStudentField("attendance", e.target.value as "Present" | "Absent")
          }
          className="w-full border border-gray-300 px-4 py-2 rounded"
        >
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={mutation.isPending}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {mutation.isPending ? "Adding Student..." : "Add Student"}
      </button>

      <button
        type="button"
        onClick={() => navigate("/students")}
        className="w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600 transition"
      >
        Back to Student Records
      </button>
    </form>
  );
};

export default AddStudentForm;