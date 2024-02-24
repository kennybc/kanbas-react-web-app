import { courses } from "../../Kanbas/Database";
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

import "./styles.css";

export default function Courses() {
  const location = useLocation();
  let breadcrumb = location.pathname.split("/");
  breadcrumb.splice(0, 4);
  const { courseId = courses[0]._id } = useParams();
  let course = courses.find((course) => course._id === courseId);
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
