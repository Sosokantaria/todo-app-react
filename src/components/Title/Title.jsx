import "./Title.scss";
import { useState } from "react";
export function Title({ title, editing }) {
  const [isDone, setIsDone] = useState(false);
  const [inputValue, setInputValue] = useState(title);
  const colorChange = (e) => {
    if (!isDone && !editing) {
      e.currentTarget.className = "line-through";
    } else {
      e.currentTarget.className = "todo";
    }
  };
  return (
    <div
      className="title"
      onClick={(e) => {
        setIsDone(!isDone);
        colorChange(e);
      }}
    >
      {editing ? (
        <input
          value={inputValue}
          className="editInput"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        ></input>
      ) : (
        <p>{inputValue}</p>
      )}
    </div>
  );
}
