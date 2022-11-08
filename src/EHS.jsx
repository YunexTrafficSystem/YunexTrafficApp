import { useState } from "react"
import { useForm, useFieldArray, Controller } from "react-hook-form"
import { FieldArrayE } from "./EHS/FieldArrayE"
import { FormStepE } from "./EHS/FormStepE"
import Menu from "./Menu"


function EHS() {
    const { control, register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
          mant: [{ quantity: 1, component: 1 }], 
          module: 3,
          container:5,
          project:4
        }
      })
    const onSubmit = (data) => {
        onError();
        alert(data);
      };

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "mant"
    }
  );
  return (
    <>
    <Menu />
    <form onSubmit={handleSubmit(onSubmit)}>
        <FormStepE>
          <FieldArrayE
            fields={fields}
            register={register}
            append={append}
            remove={remove}
            errors={errors}
          />
        </FormStepE>
    </form>
    </>
  );
}

export { EHS };
