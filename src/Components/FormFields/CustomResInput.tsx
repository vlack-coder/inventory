import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addResValue } from "../../redux/resSlice";
import { addValue } from "../../redux/typeSlice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CustomResInput(
  { type, onChange, value, label, index, id, formIndex, formId }: any,
  ...rest: any
) {
  const dispatch = useDispatch();
  const resources = useSelector((state: any) => state.resource.resource);
  const changeText = (p: any) => {
    dispatch(addResValue(p));
    // console.log("p.index", p.index);
    // console.log("yesd", resources[p.id][formIndex][p.index]);
  };
  const types = useSelector((state: any) => state.type.types);
  console.log("type", value);
  switch (type) {
    case "text":
      //   return <TextInput value={value} onChange={onChange} />;
      return (
        <div className="inp">
          <p>{label}</p>
          <input
            onChange={(e: any) => {
              changeText({
                index,
                value: e.target.value,
                id,
                formIndex,
                formId,
              });
              return onChange(value);
              // return onChange(e.target.value);
            }}
            placeholder="Enter field name"
            value={value}
            //   {...rest}
          />
        </div>
      );
    case "LongText":
      return (
        <div className="inp">
          <p>{label}</p>
          <input
            type={"number"}
            onChange={(e: any) => {
              changeText({ index, value: parseInt(e.target.value), id });
              return onChange(e.target.value);
              // return onChange(value);
            }}
            placeholder="Enter field name"
            value={value}
          />
        </div>
      );
    case "Number":
      return (
        <div className="inp">
          <p>{label}</p>
          <input
            type={"number"}
            onChange={(e: any) => {
              changeText({
                index,
                value: parseInt(e.target.value),
                id,
                formIndex,
              });
              return onChange(e.target.value);
              // return onChange(value);
            }}
            // onChange={onChange}
            placeholder="Enter field name"
            value={value}
            //   {...rest}
          />
        </div>
      );
    case "Date":
      return (
        <>
          <p style={{ marginTop: "1px", fontSize: "12px", fontWeight: 600 }}>
            {label}
          </p>
          <DatePicker
            wrapperClassName="datePicker"
            // selected={(field.value && new Date(field.value)) || null}
            selected={value}
            dateFormat="MMMM d, yyyy"
            // onChange={(date) => setStartDate(date)}
            onChange={(date) => onChange(date)}
          />
          <div style={{ marginBottom: "7px" }} />
        </>
      );

    default:
      return null;
      break;
  }
}

export default CustomResInput;
