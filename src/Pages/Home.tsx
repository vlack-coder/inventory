import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import Dynamic from "../Components/FormFields/DynamicForm";
import ResForm from "../Components/ResForm";
import { addRes } from "../redux/resSlice";
import { addType } from "../redux/typeSlice";

function Home() {
  const dispatch = useDispatch();
  // const { type } = useParams();
  const types = useSelector((state: any) => state.type.types);
  const resources = useSelector((state: any) => state.resource.resource);
  const addItem = (p: any) => {
    console.log("types[para]", types[p]);
    dispatch(addRes({ res: types[p], id: "type" }));
  };
  let p = "";

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
        {Object.keys(resources).length !== 0 &&
          // Object.keys(resources).map((v:any)=>resources[v])
          Object.keys(resources)
            .reduce((acc: any, v: any) => {
              return [...acc, ...resources[v]];
            }, [])
            .map((e: any, index: any) => {
              // const s = Object.keys(resources);
              console.log("eqeq", e);
              console.log("resources", resources);
              return <ResForm formIndex={index} formValues={e} fid={p} home />;
            })
          // Object.keys(resources).map((v) => resources[v])
          }
      </div>
    </div>
  );
}

export default Home;
