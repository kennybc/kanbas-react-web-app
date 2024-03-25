import { useState, useEffect } from "react";
import axios from "axios";
import {
  Navigate,
  Route,
  Routes,
  useParams,
  useLocation,
} from "react-router-dom";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import KanbasNavigation from "../Navigation";
import { COURSES_API } from "../API";

import "./styles.css";

export default function Courses({ courses }: { courses: any[] }) {
  const location = useLocation();
  let breadcrumb = location.pathname.split("/");
  breadcrumb.splice(0, 4);
  const { courseId } = useParams();
  const [course, setCourse] = useState<any>({ _id: "" });

  const findCourseById = async (courseId?: string) => {
    const response = await axios.get(`${COURSES_API}/${courseId}`);
    setCourse(response.data);
  };

  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  return (
    <KanbasNavigation
      title={course?.number ?? ""}
      subNav={["Home", "Modules", "Piazza", "Grades", "Assignments"]}
      breadcrumb={breadcrumb}
    >
      <Routes>
        <Route path="/" element={<Navigate to="Home" />} />
        <Route path="Home" element={<Home />} />
        <Route path="Modules" element={<Modules />} />
        <Route path="Piazza" element={<h1>Piazza</h1>} />
        <Route path="Assignments" element={<Assignments />} />
        <Route
          path="Assignments/:assignmentId"
          element={<h1>Assignment Editor</h1>}
        />
        <Route path="Grades" element={<h1>Grades</h1>} />
      </Routes>
    </KanbasNavigation>
  );
}
