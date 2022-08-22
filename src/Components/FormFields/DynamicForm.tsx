import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { addField, removeType } from "../../redux/typeSlice";
import CustomInput from "./CustomInput";
import "./form.css";

const Dynamic = ({ formValues, id }: any) => {
  const dispatch = useDispatch();
  const { control } = useForm();
  const options = [
    { value: "text", label: "small text" },
    { value: "LongText", label: "long text" },
    { value: "Date", label: "date" },
    // { value: "Number", label: "number" },
  ];
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
      backgroundColor: "white",
      border: "1px solid #c4c4c4",
      fontSize: "14px",
      minHeight: "26px",
      height: "26px",
      outline: "none",
      color: "#fff",
      borderRadius: "2px",
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
  const addFild = (p: any) => {
    dispatch(addField({ id: p.id, value: p.value }));
  };
  const types = useSelector((state: any) => state.type.types);
  const formInputs = formValues.map((e: any, index: any) => {
    const { opt, value, label, se } = e;
    return (
      <section key={index}>
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
                  opt={opt}
                  se={se}
                  // {...dynamicForm[e]}
                />
              </div>
            );
          }}
        />
      </section>
    );
  });

  return (
    <div className="form">
      <div className="res__header">
        <p>{types[id][0].value}</p>
        <p
          style={{ cursor: "pointer" }}
          onClick={() => dispatch(removeType({ typeId: id }))}
        >
          x
        </p>
      </div>
      <div className="resform__body">
        <div style={{ display: "flex", flexDirection: "column" }}>
          {formInputs.slice(0, 2)}
          <p style={{ fontSize: "13px", marginBottom: "4px" }}>Fields</p>
          {formInputs.slice(2)}

          <div style={{ marginTop: "15px" }}>
            <Select
              // defaultValue={selectedOption}
              onChange={(value) => addFild({ value, id })}
              options={options}
              styles={customStyles}
              placeholder="Add Field"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dynamic;
