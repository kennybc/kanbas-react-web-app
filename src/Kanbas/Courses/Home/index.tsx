import ModuleList from "../Modules/List";
import "./styles.css";

function Home() {
  return (
    <div className="kanbas-courses-home-wrapper d-flex flex-column flex-lg-row">
      <div className="kanbas-courses-home-list col-12 col-lg-9">
        <div className="kanbas-courses-modules-buttons">
          <button className="btn">Collapse All</button>
          <button className="btn">View Progress</button>
          <select className="btn">
            <option>Publish All</option>
          </select>
          <button className="btn btn-red">Module</button>
        </div>
        <ModuleList />
      </div>
      <div className="kanbas-courses-home-status pt-5 pt-lg-0 ps-0 ps-lg-4 col-12 col-lg-3">
        <h4>Course Status</h4>
        <button className="btn me-1">Unpublish</button>
        <button className="btn btn-green">Published</button>
        <a className="btn btn-light d-block text-start" href="">
          Import Existing Content
        </a>
        <a className="btn d-block text-start" href="">
          Import From Commons
        </a>
        <a className="btn d-block text-start" href="">
          Choose Home Page
        </a>
        <a className="btn d-block text-start" href="">
          View Course Stream
        </a>
        <a className="btn d-block text-start" href="">
          New Announcement
        </a>
        <a className="btn d-block text-start" href="">
          New Analytics
        </a>
        <a className="btn d-block text-start" href="">
          View Course Notifications
        </a>

        <h4 className="my-0 mt-4">To Do</h4>
        <hr />
        <div className="d-flex flex-row align-items-baseline text-danger">
          <i className="fa fa-exclamation-circle"></i>
          <div className="px-2">
            <span className="d-block">Grade HW1 - ENV + HTML</span>
            <span className="d-block text-secondary font-size-10">
              100 points &bull; Sep 18 at 11:59pm
            </span>
          </div>
        </div>

        <div className="mt-4 d-flex flex-row justify-content-between align-items-center">
          <h4 className="my-0 d-flex">Coming Up</h4>
          <div className="d-flex align-items-center font-size-12">
            <i className="fa fa-calendar-check-o text-secondary"></i>
            <a href="#" className="mx-2 d-block text-danger">
              View Calendar
            </a>
          </div>
        </div>
        <hr />
        <div className="d-flex flex-row align-items-baseline text-danger">
          <i className="fa fa-calendar-check-o text-secondary"></i>
          <div className="px-2">
            <span className="d-block">Lecture</span>
            <span className="d-block text-secondary font-size-10">
              CS4550.12631.202410
            </span>
            <span className="d-block text-secondary font-size-10">
              Sep 11 at 11:45am
            </span>
          </div>
        </div>
        <div className="mt-3 d-flex flex-row align-items-baseline text-danger">
          <i className="fa fa-calendar-check-o text-secondary"></i>
          <div className="px-2">
            <span className="d-block">CS 5610 06 SP23 Lecture</span>
            <span className="d-block text-secondary font-size-10">
              CS4550.12631.202410
            </span>
            <span className="d-block text-secondary font-size-10">
              Sep 11 at 6pm
            </span>
          </div>
        </div>
        <div className="mt-3 d-flex flex-row align-items-baseline text-danger">
          <i className="fa fa-calendar-check-o text-secondary"></i>
          <div className="px-2">
            <span className="d-block">
              CS5610 Web Development Summer 1 2023 - LECTURE
            </span>
            <span className="d-block text-secondary">CS4550.12631.202410</span>
            <span className="d-block text-secondary">Sep 11 at 7pm</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
