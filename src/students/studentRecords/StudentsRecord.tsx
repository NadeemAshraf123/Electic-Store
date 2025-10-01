import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  openModal,
  closeModal,
  setSearchTerm,
  setSelectedGrade,
  setSelectedAttendance,
  setOrderedStudents,
  setErrors,
} from "../../components/RQComponents/features/StudentSlice";
import type { RootState } from "../../App/StudentStore";
import type { Student } from "../../components/RQComponents/features/StudentSlice";

const fetchStudents = async (): Promise<Student[]> => {
  const res = await axios.get("http://localhost:3000/students");
  return res.data;
};

const StudentsRecord: React.FC = () => {
  const dispatch = useDispatch();
  const {
    isModalOpen,
    selectedStudent,
    searchTerm,
    selectedGrade,
    selectedAttendance,
    orderedStudents,
    errors,
  } = useSelector((state: RootState) => state.students);

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    data: students,
    isLoading,
    isError,
  } = useQuery<Student[]>({
    queryKey: ["students"],
    queryFn: fetchStudents,
  });

  const updateStudent = async (student: Student) =>
    axios.put(`http://localhost:3000/students/${student.id}`, student);

  const deleteStudent = async (id: number) =>
    axios.delete(`http://localhost:3000/students/${id}`);

  const deleteMutation = useMutation({
    mutationFn: deleteStudent,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["students"] }),
  });

  const mutation = useMutation({
    mutationFn: updateStudent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["students"] });
      dispatch(closeModal());
    },
  });

  React.useEffect(() => {
    if (students) {
      dispatch(setOrderedStudents(students));
    }
  }, [students, dispatch]);

  const filteredStudents = orderedStudents?.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesGrade =
      selectedGrade === "" || student.grade === selectedGrade;

    const matchesAttendance =
      selectedAttendance === "" || student.attendance === selectedAttendance;

    return matchesSearch && matchesGrade && matchesAttendance;
  });

  const uniqueGrades = Array.from(
    new Set(students?.map((student) => student.grade))
  );

  const totalStudents = filteredStudents.length;
  const presentCount = filteredStudents.filter(
    (s) => s.attendance === "Present"
  ).length;
  const absentCount = totalStudents - presentCount;
  const attendancePercentage =
    totalStudents > 0 ? ((presentCount / totalStudents) * 100).toFixed(2) : "0";
  const presentPercentage =
    totalStudents > 0 ? ((presentCount / totalStudents) * 100).toFixed(2) : "0";
  const absentPercentage =
    totalStudents > 0 ? ((absentCount / totalStudents) * 100).toFixed(2) : "0";

  if (isLoading)
    return (
      <p className="text-center text-4xl font-bold items-center mt-80">
        Loading student records...
      </p>
    );
  if (isError)
    return (
      <p className="text-center text-4xl font-bold items-center mt-80">
        Error fetching student records.
      </p>
    );

  return (
    <div className="overflow-x-auto p-4">
      <div className="flex justify-between">
        <h1 className="text-center font-bold text-4xl mb-6">
          Student Record's
        </h1>
        <button
          onClick={() => navigate("/add-student")}
          className="bg-blue-600 cursor-pointer text-white px-4 py-0.5 mb-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add Student
        </button>
      </div>

      <div className="flex justify-evenly gap-4 mb-10">
        <input
          type="search"
          placeholder="Search by name/email"
          value={searchTerm}
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          className="border cursor-pointer border-blue-400 rounded-4xl text-left p-2"
        />

        <select
          value={selectedGrade}
          onChange={(e) => dispatch(setSelectedGrade(e.target.value))}
          className="border cursor-pointer border-blue-400 rounded-4xl p-2"
        >
          <option value="">All Grades</option>
          {uniqueGrades.map((grade) => (
            <option key={grade} value={grade}>
              {grade}
            </option>
          ))}
        </select>

        <select
          value={selectedAttendance}
          onChange={(e) => dispatch(setSelectedAttendance(e.target.value))}
          className="border cursor-pointer border-blue-400 rounded-4xl p-2"
        >
          <option value="">All Attendance</option>
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
        </select>
      </div>

      <div className="mb-4 p-3 bg-blue-100 rounded">
        <p>
          <strong>Total Students:</strong> {totalStudents}
        </p>
        <p>
          <strong>Present :</strong> {presentCount} ({presentPercentage}%)
        </p>
        <p>
          <strong>Absent :</strong> {absentCount} ({absentPercentage}%)
        </p>
        <p>
          <strong>Attendance :</strong> {attendancePercentage}%
        </p>
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
          {filteredStudents?.length === 0 ? (
            <tr>
              <td
                colSpan={8}
                className="text-center text-gray-500 py-4 font-semibold"
              >
                No students found
              </td>
            </tr>
          ) : (
            filteredStudents?.map((student) => (
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
                <td className="border px-4 py-2 space-x-2">
                  <button
                    className="bg-blue-500 cursor-pointer text-white px-2 py-0.3 rounded hover:bg-blue-600 transition"
                    onClick={() => dispatch(openModal(student))}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 cursor-pointer text-white mt-1 px-2 py-0.3 rounded hover:bg-red-600 transition"
                    onClick={() => deleteMutation.mutate(student.id)}
                  >
                    Del
                  </button>
                  <button
                    className="bg-yellow-500 cursor-pointer text-white mt-1 px-2 py-0.3 rounded hover:bg-yellow-600 transition"
                    onClick={() => {
                      const index = orderedStudents.findIndex(
                        (s) => s.id === student.id
                      );
                      if (index > 0) {
                        const newList = [...orderedStudents];
                        [newList[index - 1], newList[index]] = [
                          newList[index],
                          newList[index - 1],
                        ];
                        dispatch(setOrderedStudents(newList));
                      }
                    }}
                  >
                    Up
                  </button>
                  <button
                    className="bg-purple-500 cursor-pointer text-white mt-1 px-2 py-0.3 rounded hover:bg-purple-600 transition"
                    onClick={() => {
                      const index = orderedStudents.findIndex(
                        (s) => s.id === student.id
                      );
                      if (index < orderedStudents.length - 1) {
                        const newList = [...orderedStudents];
                        [newList[index], newList[index + 1]] = [
                          newList[index + 1],
                          newList[index],
                        ];
                        dispatch(setOrderedStudents(newList));
                      }
                    }}
                  >
                    Down
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {isModalOpen && selectedStudent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
            <h2 className="text-2xl font-bold text-center mb-6">
              Edit Student modal
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const newErrors: Record<string, string> = {};

                if (!selectedStudent.name.trim())
                  newErrors.name = "Name is required";
                if (selectedStudent.age <= 0 || selectedStudent.age > 100)
                  newErrors.age = "Age must be between 1 and 100";
                if (!selectedStudent.grade.trim())
                  newErrors.grade = "Grade is required";
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(selectedStudent.email))
                  newErrors.email = "Invalid email format";

                const coursesArray = Array.isArray(selectedStudent.courses)
                  ? selectedStudent.courses
                  : [selectedStudent.courses].filter((c) => c && c.trim());

                if (
                  coursesArray.length === 0 ||
                  coursesArray.every((c) => !c.trim())
                ) {
                  newErrors.courses = "At least one course is required";
                }

                if (Object.keys(newErrors).length > 0) {
                  dispatch(setErrors(newErrors));
                  return;
                }

                dispatch(setErrors({}));
                mutation.mutate(selectedStudent);
              }}
            >
              <div>
                <label className="block font-semibold mb-1">Full Name</label>
                <input
                  type="text"
                  value={selectedStudent.name}
                  onChange={(e) =>
                    dispatch(
                      openModal({ ...selectedStudent, name: e.target.value })
                    )
                  }
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
                    value={selectedStudent.age}
                    onChange={(e) =>
                      dispatch(
                        openModal({
                          ...selectedStudent,
                          age: parseInt(e.target.value) || 0,
                        })
                      )
                    }
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
                    onChange={(e) =>
                      dispatch(
                        openModal({ ...selectedStudent, grade: e.target.value })
                      )
                    }
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
                  value={selectedStudent.email}
                  onChange={(e) =>
                    dispatch(
                      openModal({ ...selectedStudent, email: e.target.value })
                    )
                  }
                  className="w-full border border-gray-300 px-4 py-2 rounded"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

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
                  onChange={(e) =>
                    dispatch(
                      openModal({
                        ...selectedStudent,
                        courses: e.target.value
                          .split(",")
                          .map((c) => c.trim())
                          .filter((c) => c !== ""),
                      })
                    )
                  }
                  className="w-full border border-gray-300 px-4 py-2 rounded mb-2"
                  placeholder="Enter courses separated by commas (e.g., Math, Science, English)"
                />

                <div className="bg-gray-50 p-3 rounded border">
                  <p className="text-sm font-semibold mb-2">Current Courses:</p>
                  {selectedStudent.courses &&
                  selectedStudent.courses.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {selectedStudent.courses.map((course, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-sm">
                      No courses added yet
                    </p>
                  )}
                </div>

                {errors.courses && (
                  <p className="text-red-500 text-sm mt-1">{errors.courses}</p>
                )}
              </div>

              <div>
                <label className="block font-semibold mb-1">Attendance</label>
                <select
                  value={selectedStudent.attendance}
                  onChange={(e) =>
                    dispatch(
                      openModal({
                        ...selectedStudent,
                        attendance: e.target.value as "Present" | "Absent",
                      })
                    )
                  }
                  className="w-full border border-gray-300 px-4 py-2 rounded"
                >
                  <option value="Present">Present</option>
                  <option value="Absent">Absent</option>
                </select>
              </div>

              <div className="flex justify-end mt-5 space-x-4">
                <button
                  type="button"
                  onClick={() => dispatch(closeModal())}
                  className="px-6 py-2 bg-gray-300 cursor-pointer rounded hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 cursor-pointer bg-green-600 text-white rounded hover:bg-green-700 transition"
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
