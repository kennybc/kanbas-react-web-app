import { Link } from "react-router-dom";
import { useState } from "react";
import KanbasNavigation from "../Navigation";
import { MdDelete, MdModeEditOutline } from "react-icons/md";

import "./styles.css";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  return (
    <KanbasNavigation title="Dashboard">
      <div className="container-fluid py-4">
        <div className="module-form">
          <input
            value={course.name}
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <input
            value={course.number}
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
          />
          <input
            value={course.startDate}
            type="date"
            onChange={(e) =>
              setCourse({ ...course, startDate: e.target.value })
            }
          />
          <input
            value={course.endDate}
            type="date"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
          />
          <button className="btn" onClick={addNewCourse}>
            Add
          </button>
          <button className="btn" onClick={updateCourse}>
            Update
          </button>
        </div>
        <h4 className="mb-4">Published Courses ({courses.length})</h4>
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col kanbas-dashboard-card">
              <div className="card">
                <Link
                  className="card-link"
                  to={`/Kanbas/Courses/${course._id}/Home`}
                >
                  <div className="card-img-top">
                    <img src={`/images/${course.image}`} />
                  </div>
                  <div className="card-body">
                    {course.name}
                    <p className="card-text">{course.number}</p>
                  </div>
                </Link>
                <div className="card-btns">
                  <MdModeEditOutline
                    onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }}
                    size={18}
                  />
                  <MdDelete
                    onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }}
                    size={18}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </KanbasNavigation>
  );
}
