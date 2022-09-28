import { useForm, useFieldArray } from 'react-hook-form'
/* 
  NOTA: Importar nombrados los pasos y renombralos 
  en la declaración del objeto.
*/
function PlaceHolder() {
  // Integrar un react context (Un provider solucionará los problemas con enviar datos)
  const { register, setError, formState: { errors } } = useForm();

    /*
    Separando responsabilidades:
    > Stepper almacenas los pasos
    > Steps almacena los pasos se
    > form controlará todo el formulario
    */

  return (
    <form>
      <Stepper>
        <Steps >
          <Step1 stepTitle="información general" />
          <Step2 stepTitle="información específica" />
          <Step3 stepTitle="información adicional (opcional)"/>
        </Steps>
      </Stepper>
    </form>
  )
}

return { PlaceHolder }