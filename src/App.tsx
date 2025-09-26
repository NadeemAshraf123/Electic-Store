import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import Home from './pages/Home';
import Student from './pages/Student';
import AddStudentForm from './students/studentRecords/AddStudentForm';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Student />} />
          <Route path="/add-student" element={<AddStudentForm />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
