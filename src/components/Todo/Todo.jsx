import "./Todo.scss";
import { useState } from "react";
import { Button } from "../Buttons";
import { Title } from "../Title";
export function Todo({ title, id, remove ,edit }) {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className="todo">
      <Title title={title}  editing={isEditing}  />
      <div className="buttonDiv">
        {isEditing ? (
          <Button mode="save" setIsEditing={setIsEditing} id={id} edit={edit} />
        ) : (
          <Button mode="edit" setIsEditing={setIsEditing} id={id}  />
        )}
        <Button mode="delete" removeTitle={remove} id={id} />
      </div>
    </div>
  );
}
