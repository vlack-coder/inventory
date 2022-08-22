import { useDispatch, useSelector } from "react-redux";
import ResForm from "../Components/ResForm";
import { addRes } from "../redux/resSlice";
import { v4 as uuid } from "uuid";

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
  const res = Object.keys(resources);
  const reso = res.map((v) => resources[v]);
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
        {
          reso.map((ress, index) =>
            ress.map((r: any) => <ResForm key={index} formValues={r} id={res[index]} />)
          )

        }
      </div>
    </div>
  );
}

export default Home;
