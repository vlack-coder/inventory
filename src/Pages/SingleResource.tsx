import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { v4 as uuid } from "uuid";
import ResForm from "../Components/FormFields/ResourceForm";
import { addResource } from "../redux/resourceSlice";

function SingleRes() {
  const dispatch = useDispatch();
  const { type } = useParams();
  const types = useSelector((state: any) => state.type.types);
  const resources = useSelector((state: any) => state.resource.resource);

  const addItem = (p: any) => {
    dispatch(
      addResource({ res: { id: uuid().slice(0, 8), value: types[p] }, id: type })
    );
  };
  return (
    <>
      <button
        onClick={() => addItem(type)}
        style={{
          fontSize: "14px",
          padding: "6px 30px",
          borderRadius: "3px",
          position: "fixed",
          top: 50,
          right: 50,
        }}
      >
        Add Item
      </button>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {Object.keys(resources).length !== 0 &&
          type &&
          resources.hasOwnProperty(type) &&
          resources[type].map((e: any, index: any) => {
            return <ResForm key={index}formValues={e} id={type}/>;
          })}
      </div>
    </>
  );
}

export default SingleRes;
