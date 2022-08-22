import "./tes.css";
import Select from "react-select";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

function ManageTypes() {
  const { handleSubmit, control, reset, register } = useForm();
  const options = [
    { value: "chocolate", label: "small text" },
    { value: "strawberry", label: "date" },
    { value: "vanilla", label: "number" },
  ];
  const [selectedOption, setSelectedOption] = useState(null);
  const customStyles = {
    option: (provided: any, state: any) => ({
      ...provided,
      borderBottom: "1px dotted pink",
      color: state.isSelected ? "red" : "blue",
      padding: 5,
    }),
    control: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: "#6b6969",
      //   padding: "5px 6px",
      // padding: "0px",
      fontSize: "14px",
      minHeight: "21.5px",
      height: "21.5px",
      outline: "none",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      width: "100%",
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
      height: "21.5px",
      //   label: <HiSelector />
    }),
    // singleValue: (provided, state) => {
    //   const opacity = state.isDisabled ? 0.5 : 1;
    //   const transition = 'opacity 300ms';

    //   return { ...provided, opacity, transition };
    // }
  };
  return (
    <>
      {/* <div>ManageTypes</div> */}

      <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
        <div className="form">
          <div className="res__header">
            <p>Chainsaw</p>
            <p>x</p>
          </div>
          <div className="resform__body">
            <div className="inp">
              <p>Object type</p>
              <input type="text" />
            </div>
            <div className="inp">
              <p>Object Title</p>
              <input type="text" />
            </div>
            <p
              style={{ fontSize: "13px", fontWeight: 600, marginBottom: "3px" }}
            >
              Fields
            </p>
            <div className="dynamic__field">
              {/* <input type="text" /> */}
              <input
                type="text"
                {...register("test", {
                  onChange: (e) => {
                    console.log(e.target.value);
                  },
                })}
              />
              <Select
                defaultValue={selectedOption}
                // onChange={setSelectedOption}
                options={options}
                styles={customStyles}
              />
            </div>
            {/* <button
              style={{
                fontSize: "13px",
                padding: "4px 10px",
                width:"100%",
                borderRadius: "3px",
                marginTop: "15px"
              }}
            >
              Add Field
            </button> */}
            <div
              style={{
                marginTop: "15px",
              }}
            ></div>
            <Select
              defaultValue={selectedOption}
              // onChange={setSelectedOption}
              options={options}
              styles={customStyles}
            />
          </div>
        </div>

        <button
          style={{
            fontSize: "14px",
            padding: "6px 120px",
            borderRadius: "3px",
          }}
        >
          Add Type
        </button>
      </div>
    </>
  );
}

export default ManageTypes;
