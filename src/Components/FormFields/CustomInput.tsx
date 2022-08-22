import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addValue } from "../../redux/typeSlice";
import TextInput from "./TextInput";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CustomInput(
  { type, onChange, value, label, index, id }: any,
  ...rest: any
) {
  const dispatch = useDispatch();
  const changeText = (p: any) => {
    dispatch(addValue(p));
  };
  switch (type) {
    case "text":
      //   return <TextInput value={value} onChange={onChange} />;
      return (
        <div className="inp">
          <p>{label}</p>
          <input
            onChange={(e: any) => {
              changeText({ index, value: e.target.value, id });
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
    case "LongText":
      return <TextInput value onChange={onChange} />;
    case "Number":
      return (
        <div className="inp">
          <p>{label}</p>
          <input
            type={"number"}
            onChange={(e: any) => {
              changeText({ index, value: e.target.value, id });
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
          <p style={{marginTop: "10px"}} >{label}</p>
          <DatePicker
            wrapperClassName="datePicker"
            // selected={(field.value && new Date(field.value)) || null}
            selected={value}
            dateFormat="MMMM d, yyyy"
            // onChange={(date) => setStartDate(date)}
            onChange={(date) => onChange(date)}
          />
        </>
      );

    default:
      return null;
      break;
  }
}

export default CustomInput;
