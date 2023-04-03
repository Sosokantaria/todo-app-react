import "./Button.scss";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
export function Button({ mode, removeTitle, id, setIsEditing,edit }) {
  return (
    <>
      {mode === "delete" && (
        <button
          className="button delete"
          onClick={(e) => {
            removeTitle(id, e);
          }}
        >
          <AiFillDelete size="24px" color="#ffffff" />
        </button>
      )}
      {mode === "edit" && (
        <button
          className="button edit"
          onClick={() => {
            setIsEditing(true);
          }}
        >
          <AiFillEdit size="24px" color="#ffffff" />
        </button>
      )}
      {mode === "save" && (
        <button
          className="button save"
          onClick={() => {edit(id)
            setIsEditing(false);
          }}
        >
          <TiTick size="24px" color="#ffffff" />
        </button>
      )}
    </>
  );
}
