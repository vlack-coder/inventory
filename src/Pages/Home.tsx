import { useDispatch, useSelector } from "react-redux";
import ResourceForm from "../Components/FormFields/ResourceForm";
import { addResource } from "../redux/resSlice";

function Home() {
  const dispatch = useDispatch();
  const types = useSelector((state: any) => state.type.types);
  const resources = useSelector((state: any) => state.resource.resource);
  const addItem = (p: any) => {
    console.log("types[para]", types[p]);
    dispatch(addResource({ res: types[p], id: "type" }));
  };
  const resourceIds = Object.keys(resources);
  const getResourcesFromId = resourceIds.map((v) => resources[v]);
  return (
    <div>
      {/* <Dynamic/> */}
      <button
        onClick={() => addItem("type")}
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
        {getResourcesFromId.map((ress, index) =>
          ress.map((resource: any) => (
            <ResourceForm
              key={index}
              formValues={resource}
              id={resourceIds[index]}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
