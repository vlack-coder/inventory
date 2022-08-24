import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { addValue, changeField } from "../../redux/typeSlice";

function CustomInput(
  { type, onChange, value, label, index, id, se, opt }: any,
  ...rest: any
) {
  const types = useSelector((state: any) => state.type.types);

  const tOptions = types[id] 
    .slice(2)
    .map((v: any) => ({ label: v.value, value: v.value }))
    .filter((v: any) => v.value !== "");

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

  const fieldOptions = [
    { value: "text", label: "small text" },
    { value: "LongText", label: "long text" },
    { value: "Date", label: "date" },
    { value: "Number", label: "number" },
    { value: "remove", label: "remove" },
  ];
  const [selectedOption, setSelectedOption] = useState(fieldOptions);

  const titleCustomStyles = {
    option: (provided: any, state: any) => ({
      ...provided,
      borderBottom: "1px dotted black",
      color: state.isSelected ? "red" : "blue",
      padding: 5,
    }),
    control: (provided: any, state: any) => ({
      ...provided,
      minHeight: "26px",
      height: "26px",

      width: "100%",
      fontSize: "13px",
    }),

    indicatorSeparator: (state: any) => ({
      display: "none",
    }),
    indicatorsContainer: (provided: any, state: any) => ({
      ...provided,
      height: "26px",
    }),
  };

  const customStyles = {
    option: (provided: any, state: any) => ({
      ...provided,
      borderBottom: "1px dotted pink",
      color: state.isSelected ? "red" : "blue",
      padding: 5,
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
                onChange={(value) => selectField({ value, id, index })}
                defaultValue={{ value: opt, label: opt }}
                value={defaultValue(selectedOption, value)}
                options={fieldOptions}
                styles={customStyles}
                placeholder="Add Field"
              />
            )}
          </div>
        </div>
      );
    case "select":
      return (
        <div className="inp" style={{ marginBottom: "10px" }}>
          <p>{label}</p>
          <Select
            defaultValue={tOptions[0]}
            options={tOptions}
            styles={titleCustomStyles}
            placeholder="Add Field"
          />
        </div>
      );

    default:
      return null;
  }
}

export default CustomInput;
