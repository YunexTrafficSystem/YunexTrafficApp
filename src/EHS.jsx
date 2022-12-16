import { useForm, useFieldArray } from "react-hook-form"
import Menu from "./Menu"


function EHS() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      mant: [{ quantity: 1, component: 1 }],
      module: 3,
      container: 5,
      project: 4
    }
  })
  const onSubmit = (data) => {
    onError();
    alert(data);
  };

  const { } = useFieldArray(
    {
      control,
      name: "mant"
    }
  );
  return (
    <>
      <Menu />
      <form onSubmit={handleSubmit(onSubmit)}>
        
      </form>
    </>
  );
}

export { EHS };
