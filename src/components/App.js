import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import AvailableClasses from './body/AvailableClasses';
import StudentForm from './body/StudentForm';
import Home from './body/Home';
import Header from './header/Header';

function App() {
  const [classList, setClassList] = useState([])
  const [studentsList, setStudentsList] = useState([])
  const [studentToBeAdded, setStudentToBeAdded] = useState(null)

  useEffect(() => {
    fetch('http://localhost:9292/classes')
      .then(r => r.json())
      .then(data => setClassList(data));

    fetch('http://localhost:9292/students')
      .then(r => r.json())
      .then(data => setStudentsList(data));
  }, [])

  const newStudent = (newStudent) => {
    console.log(newStudent)
    setStudentsList(studentsList => [...studentsList, newStudent])
    setStudentToBeAdded(newStudent)
  }

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}>
        </Route>
        <Route path='/create_student' element={<StudentForm newStudent={newStudent} />}>
        </Route>
        <Route path='/available_classes' element={<AvailableClasses classList={classList} student={studentToBeAdded} />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
