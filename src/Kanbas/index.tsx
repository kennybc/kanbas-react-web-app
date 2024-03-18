import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import { courses as db_courses } from "./Database";
import { useState } from "react";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import store from "./store";
import { Provider } from "react-redux";

import "./styles.css";

function Kanbas() {
  const [courses, setCourses] = useState<any[]>(db_courses);
  const [course, setCourse] = useState({
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });
  const addNewCourse = () => {
    setCourses([
      ...courses,
      { ...course, _id: new Date().getTime().toString() },
    ]);
  };
  const deleteCourse = (courseId: any) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Navigate to="Dashboard" />} />
        <Route path="Account" element={<h1>Account</h1>} />
        <Route
          path="Dashboard"
          element={
            <Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}
            />
          }
        />
        <Route
          path="Courses/:courseId/*"
          element={<Courses courses={courses} />}
        />
        <Route path="Courses" element={<Courses courses={courses} />} />
      </Routes>
    </Provider>
  );
}

export default Kanbas;