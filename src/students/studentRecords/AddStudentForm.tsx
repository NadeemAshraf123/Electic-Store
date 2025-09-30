import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";

type Student = {
  name: string;
  age: number;
  grade: string;
  email: string;
  courses: string[];
  attendance: "Present" | "Absent";
};

const AddStudentForm: React.FC = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [student, setStudent] = useState<Student>({
    name: "",
    age: 0,
    grade: "",
    email: "",
    courses: [],
    attendance: "Present",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [courseInput, setCourseInput] = useState<string>("");

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!student.name.trim()) newErrors.name = "Name is required";
    else if (student.name.trim().length < 2)
      newErrors.name = "Name must be at least 2 characters";

    if (student.age < 5 || student.age > 25)
      newErrors.age = "Age must be between 5 and 25";

    if (!student.grade.trim()) newErrors.grade = "Grade is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!student.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(student.email))
      newErrors.email = "Please enter a valid email address";

    if (student.courses.length === 0) {
      newErrors.courses = "At least one course is required";
    } else {
      const emptyCourses = student.courses.some((course) => !course.trim());
      if (emptyCourses) newErrors.courses = "Course names cannot be empty";
    }

    return newErrors;
  };

  const addStudent = async (newStudent: Student) => {
  await axios.post("http://localhost:3000/students", newStudent);
};

  const mutation = useMutation({
    mutationFn: addStudent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["students"] });
      navigate("/students");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    mutation.mutate(student);
  };

  const handleCourseInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCourseInput(value);

    const courses = value
      .split(",")
      .map((c) => c.trim())
      .filter((c) => c.length > 0);

    setStudent({ ...student, courses });

    if (errors.courses && courses.length > 0) {
      setErrors((prev) => ({ ...prev, courses: "" }));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg space-y-6 mt-40 shadow-"
    >
      <h2 className="text-3xl font-bold text-center mb-6">
        Student Record Form
      </h2>

      <div>
        <label className="block font-semibold mb-1">Full Name</label>
        <input
          type="text"
          value={student.name}
          onChange={(e) => {
            setStudent({ ...student, name: e.target.value });
            if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
          }}
          className="w-full border border-gray-300 px-4 py-2 rounded"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold mb-1">Age</label>
          <input
            type="text"
            value={student.age}
            onChange={(e) => {
              setStudent({ ...student, age: +e.target.value });
              if (errors.age) setErrors((prev) => ({ ...prev, age: "" }));
            }}
            className="w-full border border-gray-300 px-4 py-2 rounded"
          />
          {errors.age && (
            <p className="text-red-500 text-sm mt-1">{errors.age}</p>
          )}
        </div>
        <div>
          <label className="block font-semibold mb-1">Grade</label>
          <input
            type="text"
            value={student.grade}
            onChange={(e) => {
              setStudent({ ...student, grade: e.target.value });
              if (errors.grade) setErrors((prev) => ({ ...prev, grade: "" }));
            }}
            className="w-full border border-gray-300 px-4 py-2 rounded"
          />
          {errors.grade && (
            <p className="text-red-500 text-sm mt-1">{errors.grade}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block font-semibold mb-1">Email</label>
        <input
          type="email"
          value={student.email}
          onChange={(e) => {
            setStudent({ ...student, email: e.target.value });
            if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
          }}
          className="w-full border border-gray-300 px-4 py-2 rounded"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
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
          {student.courses.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {student.courses.map((course, index) => (
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
          💡 Separate multiple courses with commas. Example: "Mathematics,
          Physics, Chemistry"
        </p>

        {errors.courses && (
          <p className="text-red-500 text-sm mt-1">{errors.courses}</p>
        )}
      </div>

      <div>
        <label className="block font-semibold mb-1">Attendance</label>
        <select
          value={student.attendance}
          onChange={(e) =>
            setStudent({
              ...student,
              attendance: e.target.value as "Present" | "Absent",
            })
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
