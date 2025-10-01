import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "./App.css";
import Home from "./pages/Home";
import Student from "./pages/Student";
import AddStudentForm from "./students/studentRecords/AddStudentForm";
import SuperHeroes from "./components/RQComponents/SuperHeroes";
import RQSuperHeroes from "./components/RQComponents/RQSuperHeroes";
import RQHome from "./components/RQComponents/RQHome";
import RQNavbar from "./components/RQComponents/RQNavbar";
import GlobalData from "./components/RQComponents/GlobalData";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <RQNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Student />} />
          <Route path="/add-student" element={<AddStudentForm />} />

          <Route path="/rqhome" element={<RQHome />} />
          <Route path="/super-heroes" element={<SuperHeroes />} />
          <Route path="/rq-super-heroes" element={<RQSuperHeroes />} />
          <Route path="/global-state-data" element={<GlobalData /> } />

        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
