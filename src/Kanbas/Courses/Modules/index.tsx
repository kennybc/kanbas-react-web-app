import ModuleList from "./List";
function Modules() {
  return (
    <div className="kanbas-courses-modules-wrapper">
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
  );
}
export default Modules;
