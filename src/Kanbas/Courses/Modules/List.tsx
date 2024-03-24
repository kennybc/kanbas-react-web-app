import { useEffect } from "react";
import "./styles.css";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { RiDraggable } from "react-icons/ri";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./reducer";
import * as client from "./client";
import { KanbasState } from "../../store";

function ModuleList() {
  const dispatch = useDispatch();
  const { courseId } = useParams();
  const moduleList = useSelector(
    (state: KanbasState) => state.modulesReducer.modules
  );
  const module = useSelector(
    (state: KanbasState) => state.modulesReducer.module
  );

  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleDeleteModule = (moduleId: string) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    //const status = await client.updateModule(module);
    await client.updateModule(module);
    dispatch(updateModule(module));
  };

  useEffect(() => {
    client
      .findModulesForCourse(courseId)
      .then((modules) => dispatch(setModules(modules)));
  }, [courseId, dispatch]);

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
        <button className="btn" onClick={handleAddModule}>
          Add
        </button>
        <button className="btn" onClick={handleUpdateModule}>
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
                    onClick={() => handleDeleteModule(module._id)}
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
