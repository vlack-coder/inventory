import { Controller, useForm } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";
import { removeRes } from "../../redux/resSlice";

import CustomResInput from "./CustomResourceInput";

const ResForm = ({ formValues, id }: any) => {
  const { control } = useForm();
  const resources = useSelector((state: any) => state.resource.resource);
  const dispatch = useDispatch();
  const formInputs = formValues.value.map((e: any, index: any) => {
    const { opt, value, label } = e;
    return (
      <section>
        <Controller
          name={index.toString()}
          control={control}
          render={({ field }) => {
            return (
              <div>
                <CustomResInput
                  type={opt}
                  value={
                    resources[id].find((v: any) => v.id === formValues.id)
                      .value[index].data
                  }
                  onChange={field.onChange}
                  inpProp={e}
                  label={label || value}
                  index={index}
                  id={id}
                  formId={formValues.id}
                />
              </div>
            );
          }}
        />
      </section>
    );
  });

  const titleHeader = resources[id]
    .find((v: any) => v.id === formValues.id)
    .value.find((v: any) => v.value === formValues.value[1].data).data;
  return (
    <div className="resform">
      <div className="res__header">
        <p>
          {formValues.value[0].value} - {titleHeader}
        </p>
        <p
          onClick={() => dispatch(removeRes({ id: formValues.id, resId: id }))}
          style={{ cursor: "pointer" }}
        >
          x
        </p>
      </div>
      <div className="resform__body">
        <div style={{ display: "flex", flexDirection: "column" }}>
          {formInputs.slice(2)}
        </div>
      </div>
    </div>
  );
};

export default ResForm;
