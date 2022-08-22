import React from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addRes } from "../redux/resSlice";
import ResForm from "./ResForm";
import { v4 as uuid } from "uuid";

function SingleRes() {
  const dispatch = useDispatch();
  const { type } = useParams();
  const types = useSelector((state: any) => state.type.types);
  const resources = useSelector((state: any) => state.resource.resource);
  console.log("resources", resources);

  const addItem = (p: any) => {
    // console.log("types[para]", types[p]);
    dispatch(
      addRes({ res: { id: uuid().slice(0, 8), value: types[p] }, id: type })
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
            console.log("essw", e);
            return <ResForm formValues={e} id={type} formIndex={index} />;
          })}
      </div>
    </>
  );
}

export default SingleRes;
