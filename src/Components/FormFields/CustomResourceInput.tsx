import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { addResValue } from "../../redux/resSlice";

function CustomResInput(
  { type, onChange, value, label, index, id, formId }: any,
  ...rest: any
) {
  console.log("valuedate", new Date(value), value);
  const dispatch = useDispatch();

  const changeText = (p: any) => {
    dispatch(addResValue(p));
  };

  switch (type) {
    case "text":
      return (
        <div className="inp">
          <p>{label}</p>
          <input
            onChange={(e: any) => {
              changeText({
                index,
                value: e.target.value,
                id,
                formId,
              });
              // return onChange(value);
              return onChange(e.target.value);
            }}
            placeholder="enter field"
            value={value}
          />
        </div>
      );
    case "LongText":
      return (
        <div className="inp">
          <p>{label}</p>
          <input
            type={"text"}
            onChange={(e: any) => {
              changeText({ index, value: e.target.value, id, formId });
              // return onChange(e.target.value);
              // return onChange(value);
            }}
            // placeholder="enter field"
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
                formId,
              });

              return onChange(e.target.value);
              // return onChange(parseInt(value));
            }}
            placeholder="enter field"
            value={value}
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
            selected={new Date(value)}
            onChange={(date: Date) => {
              onChange(date);
              changeText({
                index,
                value: date,
                // value: new Date(date),
                id,
                formId,
              });
            }}
          />
          <div style={{ marginBottom: "7px" }} />
        </>
      );

    default:
      return null;
  }
}

export default CustomResInput;
