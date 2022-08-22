import "./tes.css";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import Dynamic from "../Components/FormFields/DynamicForm";
import { addType } from "../redux/typeSlice";

function ManageTypes() {
  const dispatch = useDispatch();
  const types = useSelector((state: any) => state.type.types);
  const addTyp = () => {
    dispatch(addType({ id: uuid().slice(0, 8) }));
  };

  return (
    <div>
      {/* <Dynamic/> */}
      <button
        style={{
          fontSize: "14px",
          padding: "6px 30px",
          borderRadius: "3px",
          position: "fixed",
          top: 50,
          right: 50,
        }}
        onClick={addTyp}
      >
        Add Types
      </button>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {Object.keys(types).map((e: any, index: any) => {
          return (
            <Dynamic key={index} index={index} formValues={types[e]} id={e} />
          );
        })}
      </div>
    </div>
  );
}

export default ManageTypes;
