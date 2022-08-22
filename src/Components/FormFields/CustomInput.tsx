import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addValue, changeField } from "../../redux/typeSlice";
import TextInput from "./TextInput";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";

function CustomInput(
  { type, onChange, value, label, index, id, se, opt }: any,
  ...rest: any
) {
  const dispatch = useDispatch();
  const changeText = (p: any) => {
    dispatch(addValue(p));
  };
  const defaultValue = (options: any, value: any) => {
    return options ? options.find((option: any) => option.value === value) : "";
  };
  const selectField = (p: any) => {
    dispatch(changeField(p));
  };
  const options = [
    { value: "text", label: "small text" },
    { value: "LongText", label: "long text" },
    { value: "Date", label: "date" },
    { value: "Number", label: "number" },
    { value: "remove", label: "remove" },
  ];
  const [selectedOption, setSelectedOption] = useState(options);
  const customStyles = {
    option: (provided: any, state: any) => ({
      ...provided,
      borderBottom: "1px dotted pink",
      color: state.isSelected ? "red" : "blue",
      padding: 5,
      // width: "100px"
    }),
    control: (provided: any, state: any) => ({
      ...provided,
      minHeight: "26px",
      height: "26px",
      width: "110px",
      fontSize: "13px",
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
      height: "26px",
      //   label: <HiSelector />
    }),
  };
  switch (type) {
    case "text":
      return (
        <div className="inp">
          <p>{label}</p>
          <div style={{ display: "flex" }}>
            <input
              onChange={(e: any) => {
                changeText({ index, value: e.target.value, id });
                return onChange(e.target.value);
              }}
              placeholder="Enter field name"
              value={value}
              style={{ flex: 1 }}
            />
            {!se && (
              <Select
                // defaultValue={options}
                onChange={(value) => selectField({ value, id, index })}
                defaultValue={{ value: opt, label: opt }}
                value={defaultValue(selectedOption, value)}
                options={options}
                styles={customStyles}
                placeholder="Add Field"
              />
            )}
          </div>
        </div>
      );
    default:
      return null;
      break;
  }
}

export default CustomInput;
