import { useEffect, useState } from "react";
import axios from "axios";
function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const ASSIGNMENT_URL = `${process.env.REACT_APP_BASE_API_URL}/a5/assignment`;
  const [module, setModule] = useState({
    id: 1,
    name: "Web Dev",
    description: "Full stack web development class",
    course: "CS4550",
  });
  const MODULE_URL = `${process.env.REACT_APP_BASE_API_URL}/a5/module`;

  const fetchAssignment = async () => {
    const response = await axios.get(`${ASSIGNMENT_URL}`);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios.get(
      `${ASSIGNMENT_URL}/title/${assignment.title}`
    );
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
  }, []);

  return (
    <div>
      <h3>Working With Objects</h3>
      <h3>Modifying Properties (axios) </h3>
      <input
        onChange={(e) =>
          setAssignment({
            ...assignment,
            title: e.target.value,
          })
        }
        value={assignment.title}
        type="text"
      />
      <button onClick={updateTitle}>Update Title to: {assignment.title}</button>
      <button onClick={fetchAssignment}>Fetch Assignment</button>
      <h4>Modifying Properties</h4>
      <input
        type="text"
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
        value={assignment.title}
      />
      <a
        className="btn btn-primary"
        href={`${ASSIGNMENT_URL}/title/${assignment.title}`}
      >
        Update Assignment Title
      </a>
      <br />
      <input
        type="number"
        onChange={(e) =>
          setAssignment({ ...assignment, score: parseInt(e.target.value) })
        }
        value={assignment.score}
      />
      <a
        className="btn btn-primary"
        href={`${ASSIGNMENT_URL}/score/${assignment.score}`}
      >
        Update Assignment Score
      </a>
      <br />
      <input
        type="checkbox"
        onChange={(e) =>
          setAssignment({ ...assignment, completed: e.target.checked })
        }
        checked={assignment.completed}
      />
      <a
        className="btn btn-primary"
        href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}
      >
        Update Assignment Completed
      </a>
      <br />

      <input
        type="text"
        onChange={(e) => setModule({ ...module, name: e.target.value })}
        value={module.name}
      />
      <a className="btn btn-primary" href={`${MODULE_URL}/name/${module.name}`}>
        Update Module Name
      </a>
      <br />
      <input
        type="text"
        onChange={(e) => setModule({ ...module, description: e.target.value })}
        value={module.description}
      />
      <a
        className="btn btn-primary"
        href={`${MODULE_URL}/description/${module.description}`}
      >
        Update Module Description
      </a>

      <h4>Retrieving Objects</h4>
      <a
        className="btn btn-primary"
        href={`${process.env.REACT_APP_BASE_API_URL}/a5/assignment`}
      >
        Get Assignment
      </a>
      <a
        className="btn btn-primary"
        href={`${process.env.REACT_APP_BASE_API_URL}/a5/module`}
      >
        Get Module
      </a>
      <h4>Retrieving Properties</h4>
      <a
        className="btn btn-primary"
        href={`${process.env.REACT_APP_BASE_API_URL}/a5/assignment/title`}
      >
        Get Assignment Title
      </a>
      <a
        className="btn btn-primary"
        href={`${process.env.REACT_APP_BASE_API_URL}/a5/module/name`}
      >
        Get Module Name
      </a>
    </div>
  );
}
export default WorkingWithObjects;
