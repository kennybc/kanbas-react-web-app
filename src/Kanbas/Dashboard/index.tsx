import { Link } from "react-router-dom";
import { courses } from "../Database";
import KanbasNavigation from "../Navigation";
import "./styles.css";

export default function Dashboard() {
  return (
    <KanbasNavigation title="Dashboard">
      <div className="container-fluid py-4">
        <h4 className="mb-4">Published Courses ({courses.length})</h4>
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col kanbas-dashboard-card">
              <div className="card">
                <img
                  src={`/images/${course.image}`}
                  className="card-img-top"
                  style={{ height: 150 }}
                />
                <div className="card-body">
                  <Link
                    className="card-title"
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{
                      textDecoration: "none",
                      color: "navy",
                      fontWeight: "bold",
                    }}
                  >
                    {course.number}
                  </Link>
                  <p className="card-text">{course.name}</p>
                  <Link
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    className="btn"
                  >
                    Go
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </KanbasNavigation>
  );
}
