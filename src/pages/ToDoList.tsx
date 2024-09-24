import GreyCenteredFlat from "../components/GreyCenteredFlat";
import "../css/ToDoList.css";
import { useState, useEffect } from "react";

const TodoList = () => {
  const [toDoItems, setToDoItems] = useState<any[]>([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/todo")
      .then((res) => res.json())
      .then((data) => {
        setToDoItems(data);
      });
  });
  return (
    <div id="to-do-list-page-root">
      <GreyCenteredFlat className="big-grey-tray" id="to-do-list-tray">
        <div id="to-do-list-sidebar">div 1</div>
        <div id="to-do-list-content">
          {toDoItems.map((item, index) => (
            <div key={index}>
              {/* 0: id, 1: to_do_content, 2:checked, 3:to_do_item_date, 4:creation_date */}
              <p>{item[0]}</p>
              <p>{item[1]} </p>
              <p>{item[2] == true ? "True" : "False"} </p>
              <p>{item[3]} </p>
              <p>{item[4]} </p>
            </div>
          ))}
        </div>
      </GreyCenteredFlat>
    </div>
  );
};

export default TodoList;
