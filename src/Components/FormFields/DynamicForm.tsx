import { Controller, useForm } from "react-hook-form";
import CustomInput from "./CustomInput";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addField } from "../../redux/typeSlice";
import "./form.css";
import Select from "react-select";
import { useState } from "react";

const Dynamic = ({ formValues, id }: any) => {
  const { control } = useForm();
  const options = [
    { value: "text", label: "small text" },
    { value: "LongText", label: "long text" },
    { value: "Date", label: "date" },
    { value: "Number", label: "number" },
  ];
  const [selectedOption, setSelectedOption] = useState(null);
  const dispatch = useDispatch();
  const customStyles = {
    option: (provided: any, state: any) => ({
      ...provided,
      borderBottom: "1px dotted pink",
      color: state.isSelected ? "red" : "blue",
      padding: 5,
    }),
    control: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: "blue",
      //   padding: "5px 6px",
      border: "#c4c4c4",
      // padding: "0px",
      fontSize: "14px",
      minHeight: "23px",
      height: "23px",
      outline: "none",
      color: "#fff",
      // display: "flex",
      // alignItems: "center",
      // justifyContent: "center",
      // flex: 1,
      // width: "100%",
      //   width
    }),
    input: (provided: any, state: any) => ({
      ...provided,
      margin: "0px",
    }),
    indicatorSeparator: (state: any) => ({
      display: "none",
    }),
    indicatorsContainer: (provided: any, state: any) => ({
      ...provided,
      height: "23px",
      //   label: <HiSelector />
    }),
    // singleValue: (provided, state) => {
    //   const opacity = state.isDisabled ? 0.5 : 1;
    //   const transition = 'opacity 300ms';

    //   return { ...provided, opacity, transition };
    // }
  };
  const addFild = (p: any) => {
    dispatch(addField({ id: p.id, value: p.value }));
  };
  const types = useSelector((state: any) => state.type.types);
  let title = "";
  const formInputs = formValues.map((e: any, index: any) => {
    const { opt, value, label } = e;
    console.log("index", index);
    // title = types[id][index].value
    return (
      <section key={index}>
        {/* <label>{label}</label> */}
        <Controller
          name={index.toString()}
          control={control}
          render={({ field }) => {
            return (
              <div>
                <CustomInput
                  type={"text"}
                  // value={field.value}
                  value={types[id][index].value}
                  onChange={field.onChange}
                  inpProp={e}
                  label={label}
                  index={index}
                  id={id}
                  // {...dynamicForm[e]}
                />
              </div>
            );
          }}
        />
      </section>
    );
  });

  // console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */

    <div className="form">
      <div className="res__header">
        <p>{types[id][0].value}</p>
        <p>x</p>
      </div>
      <div className="resform__body">
        <div style={{ display: "flex", flexDirection: "column" }}>
          {formInputs.slice(0, 2)}
          <p style={{ fontSize: "13px", marginBottom: "4px" }}>Fields</p>
          {formInputs.slice(2)}
          {/* <button
            onClick={() => addFild(id)}
            style={{
              fontSize: "13px",
              padding: "3px 40px",
              borderRadius: "3px",
              marginTop: "14px",
            }}
          >
            Add Field
          </button> */}
          <div style={{ marginTop: "15px" }}>
            <Select
              defaultValue={selectedOption}
              onChange={(value) => addFild({ value, id })}
              options={options}
              styles={customStyles}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dynamic;
