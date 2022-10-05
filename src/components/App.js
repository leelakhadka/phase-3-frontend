import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import AvailableClasses from './body/AvailableClasses';
import MyBookings from './body/MyBookings';
import StudentForm from './body/StudentForm';
import Home from './body/Home';
import Header from './header/Header';

function App() {
  const [classList, setClassList] = useState([])
  const [studentsList, setStudentsList] = useState([])
  const [studentToBeAdded, setStudentToBeAdded] = useState(null)
  const [studentBookings, setStudentBookings] = useState([])

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
    setStudentBookings([])
  }

  const newRegistration = (newRegistration) => {
    console.log(newRegistration)
    const id = newRegistration.student_id
    fetch('http://localhost:9292/students/' + id)
      .then(r => r.json())
      .then(data => setStudentBookings(data.registrations))
  }

  const deleteRegistration = (deletedBooking) => {
    const filterdList = studentBookings.filter(booking => booking.id !== deletedBooking.id);
    setStudentBookings(filterdList);
  }

  const updatedRegistration = (updatedBooking) => {
    const updatedBookings = studentBookings.map((booking) =>
      booking.id === updatedBooking.id ? updatedBooking : booking
    );
    setStudentBookings(updatedBookings);
  }

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create_student' element={<StudentForm newStudent={newStudent} />} />
        <Route path='/available_classes' element={<AvailableClasses classList={classList} student={studentToBeAdded} newRegistration={newRegistration} />} />
        <Route path='/view_my_bookings' element={<MyBookings student={studentToBeAdded} studentBookings={studentBookings} deleteRegistration={deleteRegistration} updatedRegistration={updatedRegistration} />} />
      </Routes>
    </div>
  );
}

export default App;
