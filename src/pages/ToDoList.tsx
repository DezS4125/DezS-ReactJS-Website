import GreyCenteredFlat from "../components/GreyCenteredFlat";
import "../css/ToDoList.css";

const TodoList = () => {
  return (
    <div id="to-do-list-page-root">
      <GreyCenteredFlat className="big-grey-tray" id="to-do-list-tray">
        <div id="to-do-list-sidebar">div 1</div>
        <div id="to-do-list-content">div 2</div>
      </GreyCenteredFlat>
    </div>
  );
};

export default TodoList;
