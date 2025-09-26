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

  // ✅ validation rules
  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!student.name.trim()) newErrors.name = "Name is required";
    if (student.age <= 0) newErrors.age = "Age must be greater than 0";
    if (!student.grade.trim()) newErrors.grade = "Grade is required";
    if (!student.email.includes("@")) newErrors.email = "Valid email required";
    if (
      !student.courses.length ||
      student.courses.every((c) => c.trim() === "")
    ) {
      newErrors.courses = "At least one course is required";
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

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg space-y-6"
    >
      <h2 className="text-3xl font-bold text-center mb-6">
        Student Record Form
      </h2>

      {/* Full Name */}
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

      {/* Age and Grade */}
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

      {/* Email */}
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

      {/* Courses */}
      <div>
        <label className="block font-semibold mb-1">
          Courses (comma separated)
        </label>
        <input
          type="text"
          value={student.courses.join(", ")}
          onChange={(e) => {
            const courses = e.target.value
              .split(",")
              .map((c) => c.trim())
              .filter((c) => c.length > 0);
            setStudent({ ...student, courses });
            if (errors.courses)
              setErrors((prev) => ({ ...prev, courses: "" }));
          }}
          className="w-full border border-gray-300 px-4 py-2 rounded"
        />
        {errors.courses && (
          <p className="text-red-500 text-sm mt-1">{errors.courses}</p>
        )}
      </div>

      {/* Attendance */}
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

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Add Student
      </button>
    </form>
  );
};

export default AddStudentForm;
