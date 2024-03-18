import { useState } from "react";
import "./styles.css";
import { modules } from "../../Database";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import { RiDraggable } from "react-icons/ri";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule } from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector(
    (state: KanbasState) => state.modulesReducer.modules
  );
  const module = useSelector(
    (state: KanbasState) => state.modulesReducer.module
  );
  const dispatch = useDispatch();

  return (
    <>
      {/* <!-- Add buttons here --> */}
      <div className="module-form">
        <input
          value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }
        />
        <input
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }
        />
        <button
          className="btn"
          onClick={() => dispatch(addModule({ ...module, course: courseId }))}
        >
          Add
        </button>
        <button className="btn" onClick={() => dispatch(updateModule(module))}>
          Update
        </button>
      </div>
      <ul className="list-group wd-modules">
        {moduleList
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item">
              <div>
                <RiDraggable className="me-2" />
                {module.name}
                <span className="module-btns float-end">
                  <MdModeEditOutline
                    onClick={() => dispatch(setModule(module))}
                    size={20}
                  />
                  <MdDelete
                    onClick={() => dispatch(deleteModule(module._id))}
                    size={20}
                  />
                </span>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}
export default ModuleList;
