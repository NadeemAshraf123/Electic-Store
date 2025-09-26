import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import axios from "axios";

type Student = {
  id: number;
  name: string;
  age: number;
  grade: string;
  email: string;
  courses: string[];
  attendance: "Present" | "Absent";
};

const fetchStudents = async (): Promise<Student[]> => {
  const res = await axios.get("http://localhost:3000/students");
  return res.data;
};

const StudentsRecord: React.FC = () => {
  
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const {
    data: students,
    isLoading,
    isError,
  } = useQuery<Student[]>({
    queryKey: ["students"],
    queryFn: fetchStudents,
  });

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const updateStudent = async (student: Student) => {
    await axios.put(`http://localhost:3000/students/${student.id}`, student);
  };

  const deleteStudent = async (id: number) => {
    await axios.delete(`http://localhost:3000/students/${id}`);
  };

  const deleteMutation = useMutation({
    mutationFn: deleteStudent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["students"] });
    },
  });

  const mutation = useMutation({
    mutationFn: updateStudent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["students"] });
      setIsModalOpen(false);
    },
  });

  if (isLoading) return <p>Loading student records...</p>;
  if (isError) return <p>Error fetching student records.</p>;

  return (
    <div className="overflow-x-auto p-4">
      <div className="flex justify-between">
      <h1 className="text-center font-bold text-4xl mb-6">Student Record's</h1>
      <button
        onClick={() => navigate('/add-student')}
        className="bg-blue-600 text-white px-4 py-0.5 mb-2 rounded-lg hover:bg-blue-700 transition"
      >
        Add Student
      </button>
      </div>
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-400">
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Age</th>
            <th className="border px-4 py-2">Grade</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Courses</th>
            <th className="border px-4 py-2">Attendance</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students?.map((student) => (
            <tr key={student.id}>
              <td className="border px-4 py-2">{student.id}</td>
              <td className="border px-4 py-2">{student.name}</td>
              <td className="border px-4 py-2">{student.age}</td>
              <td className="border px-4 py-2">{student.grade}</td>
              <td className="border px-4 py-2">{student.email}</td>
              <td className="border px-4 py-2">
                {Array.isArray(student.courses)
                  ? student.courses.join(", ")
                  : "No courses"}
              </td>
              <td className="border px-4 py-2">
                <span
                  className={
                    student.attendance === "Present"
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {student.attendance}
                </span>
              </td>
              <td className="border  px-4 py-2 space-x-2">
                <button
                  className="bg-blue-500 text-white px-2 py-0.3 rounded hover:bg-blue-600 transition"
                  onClick={() => {
                    setSelectedStudent(student);
                    setIsModalOpen(true);
                  }}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white mt-1 px-2 py-0.3 rounded hover:bg-red-600 transition"
                  onClick={() => deleteMutation.mutate(student.id)}
                >
                  Dell
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

{isModalOpen && selectedStudent && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
      <h2 className="text-2xl font-bold text-center mb-6">Edit Student</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();

          // Validation
          const newErrors: Record<string, string> = {};
          if (!selectedStudent.name.trim()) newErrors.name = "Name is required";
          if (selectedStudent.age <= 0)
            newErrors.age = "Age must be greater than 0";
          if (!selectedStudent.grade.trim())
            newErrors.grade = "Grade is required";
          if (!selectedStudent.email.includes("@"))
            newErrors.email = "Valid email required";
          if (
            !selectedStudent.courses ||
            selectedStudent.courses.length === 0 ||
            selectedStudent.courses.every((c) => !c.trim())
          ) {
            newErrors.courses = "At least one course is required";
          }

          if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
          }

          mutation.mutate(selectedStudent);
        }}
        className="space-y-6"
      >
        {/* Full Name */}
        <div>
          <label className="block font-semibold mb-1">Full Name</label>
          <input
            type="text"
            value={selectedStudent.name}
            onChange={(e) => {
              setSelectedStudent({ ...selectedStudent, name: e.target.value });
              if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
            }}
            className="w-full border border-gray-300 px-4 py-2 rounded"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Age & Grade */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1">Age</label>
            <input
              type="number"
              value={selectedStudent.age}
              onChange={(e) => {
                setSelectedStudent({
                  ...selectedStudent,
                  age: parseInt(e.target.value) || 0,
                });
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
              value={selectedStudent.grade}
              onChange={(e) => {
                setSelectedStudent({ ...selectedStudent, grade: e.target.value });
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
            value={selectedStudent.email}
            onChange={(e) => {
              setSelectedStudent({ ...selectedStudent, email: e.target.value });
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
            value={
              Array.isArray(selectedStudent.courses)
                ? selectedStudent.courses.join(", ")
                : selectedStudent.courses
            }
            onChange={(e) => {
              setSelectedStudent({
                ...selectedStudent,
                courses: e.target.value.split(",").map((c) => c.trim()),
              });
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
            value={selectedStudent.attendance}
            onChange={(e) =>
              setSelectedStudent({
                ...selectedStudent,
                attendance: e.target.value as "Present" | "Absent",
              })
            }
            className="w-full border border-gray-300 px-4 py-2 rounded"
          >
            <option value="Present">Present</option>
            <option value="Absent">Absent</option>
          </select>
        </div>

        {/* Actions */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => setIsModalOpen(false)}
            className="px-6 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
)}

    </div>
  );
};

export default StudentsRecord;
